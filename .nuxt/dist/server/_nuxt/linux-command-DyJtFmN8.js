import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { Terminal, Info } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "linux-command",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedCategory = ref("");
    const copied = ref(false);
    const config = ref({
      // 文件操作
      fileOperation: "find",
      findPath: "",
      fileName: "",
      recursive: true,
      sourcePath: "",
      targetPath: "",
      preserve: false,
      chmodPath: "",
      ownerPermission: "7",
      groupPermission: "5",
      otherPermission: "5",
      // 系统管理
      systemOperation: "ps",
      showAll: true,
      showTree: false,
      processFilter: "",
      serviceName: "",
      serviceAction: "status",
      // 网络
      networkOperation: "ping",
      pingTarget: "",
      pingCount: "",
      curlUrl: "",
      curlMethod: "GET",
      curlHeaders: ""
    });
    const commandCategories = [
      { value: "file", name: "文件操作", description: "文件查找、复制、移动等" },
      { value: "system", name: "系统管理", description: "进程、服务、资源监控" },
      { value: "network", name: "网络配置", description: "网络测试、HTTP 请求等" }
    ];
    const generatedCommand = computed(() => {
      if (!selectedCategory.value) return "";
      let command = "";
      switch (selectedCategory.value) {
        case "file":
          switch (config.value.fileOperation) {
            case "find":
              command = "find";
              if (config.value.findPath) {
                command += ` ${config.value.findPath}`;
              }
              if (config.value.fileName) {
                command += ` -name "${config.value.fileName}"`;
              }
              if (config.value.recursive) {
                command = `find ${config.value.findPath || "."} -name "${config.value.fileName || "*"}"`;
              }
              break;
            case "copy":
              command = "cp";
              if (config.value.preserve) command += " -p";
              if (config.value.sourcePath && config.value.targetPath) {
                command += ` ${config.value.sourcePath} ${config.value.targetPath}`;
              }
              break;
            case "move":
              if (config.value.sourcePath && config.value.targetPath) {
                command = `mv ${config.value.sourcePath} ${config.value.targetPath}`;
              }
              break;
            case "delete":
              if (config.value.sourcePath) {
                command = `rm -rf ${config.value.sourcePath}`;
              }
              break;
            case "chmod":
              if (config.value.chmodPath) {
                const mode = `${config.value.ownerPermission}${config.value.groupPermission}${config.value.otherPermission}`;
                command = `chmod ${mode} ${config.value.chmodPath}`;
              }
              break;
          }
          break;
        case "system":
          switch (config.value.systemOperation) {
            case "ps":
              command = config.value.showTree ? "pstree" : "ps";
              if (config.value.showAll) command += " aux";
              if (config.value.processFilter) {
                command += ` | grep ${config.value.processFilter}`;
              }
              break;
            case "kill":
              if (config.value.processFilter) {
                command = `pkill ${config.value.processFilter}`;
              }
              break;
            case "service":
              if (config.value.serviceName && config.value.serviceAction) {
                command = `systemctl ${config.value.serviceAction} ${config.value.serviceName}`;
              }
              break;
            case "disk":
              command = "df -h";
              break;
            case "memory":
              command = "free -h";
              break;
            case "log":
              if (config.value.serviceName) {
                command = `journalctl -u ${config.value.serviceName} -f`;
              }
              break;
          }
          break;
        case "network":
          switch (config.value.networkOperation) {
            case "ping":
              if (config.value.pingTarget) {
                command = `ping ${config.value.pingTarget}`;
                if (config.value.pingCount) {
                  command += ` -c ${config.value.pingCount}`;
                }
              }
              break;
            case "netstat":
              command = "netstat -tulpn";
              break;
            case "ss":
              command = "ss -tulpn";
              break;
            case "curl":
              if (config.value.curlUrl) {
                command = `curl -X ${config.value.curlMethod}`;
                if (config.value.curlHeaders) {
                  const headers = config.value.curlHeaders.split("\n").filter((h) => h.trim());
                  headers.forEach((header) => {
                    command += ` -H "${header.trim()}"`;
                  });
                }
                command += ` ${config.value.curlUrl}`;
              }
              break;
            case "wget":
              if (config.value.curlUrl) {
                command = `wget ${config.value.curlUrl}`;
              }
              break;
          }
          break;
      }
      return command;
    });
    const commandDescription = computed(() => {
      if (!selectedCategory.value) return [];
      const descriptions = {
        file: [
          "find 用于在文件系统中查找文件",
          "cp 用于复制文件或目录",
          "mv 用于移动或重命名文件",
          "rm 用于删除文件或目录（谨慎使用）",
          "chmod 用于修改文件权限"
        ],
        system: [
          "ps 用于查看当前运行的进程",
          "systemctl 用于管理系统服务",
          "df 显示磁盘使用情况",
          "free 显示内存使用情况",
          "journalctl 查看系统日志"
        ],
        network: [
          "ping 测试网络连通性",
          "netstat 显示网络连接状态",
          "curl 发送 HTTP 请求",
          "wget 下载文件",
          "iptables 配置防火墙规则"
        ]
      };
      return descriptions[selectedCategory.value] || [];
    });
    const commandExamples = [
      {
        title: "查找大于 100MB 的文件",
        command: "find / -type f -size +100M 2>/dev/null"
      },
      {
        title: "查看端口占用",
        command: "lsof -i :8080"
      },
      {
        title: "实时查看日志",
        command: "tail -f /var/log/nginx/access.log"
      },
      {
        title: "批量重命名文件",
        command: "rename 's/old/new/' *.txt"
      },
      {
        title: "压缩目录",
        command: "tar -czf backup.tar.gz /path/to/directory"
      },
      {
        title: "解压文件",
        command: "tar -xzf backup.tar.gz"
      }
    ];
    useSeoMeta({
      title: "Linux 命令生成器 - 可视化 Linux 命令生成工具",
      description: "免费的在线 Linux 命令生成器，可视化配置生成 Linux 命令，支持文件操作、系统管理、网络配置等常用命令。",
      keywords: ["linux", "命令生成", "shell", "bash", "文件操作", "系统管理", "网络配置", "ubuntu", "centos"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Linux 命令生成器</h1><p class="text-muted-foreground">可视化生成 Linux 命令，支持文件操作、系统管理和网络配置</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">命令类别</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(commandCategories, (category2) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          selectedCategory.value === category2.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(category2.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(category2.description)}</div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (selectedCategory.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">配置选项</h2>`);
        if (selectedCategory.value === "file") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">操作类型</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="find"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "find") : ssrLooseEqual(config.value.fileOperation, "find")) ? " selected" : ""}>查找文件</option><option value="copy"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "copy") : ssrLooseEqual(config.value.fileOperation, "copy")) ? " selected" : ""}>复制文件</option><option value="move"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "move") : ssrLooseEqual(config.value.fileOperation, "move")) ? " selected" : ""}>移动文件</option><option value="delete"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "delete") : ssrLooseEqual(config.value.fileOperation, "delete")) ? " selected" : ""}>删除文件</option><option value="compress"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "compress") : ssrLooseEqual(config.value.fileOperation, "compress")) ? " selected" : ""}>压缩文件</option><option value="extract"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "extract") : ssrLooseEqual(config.value.fileOperation, "extract")) ? " selected" : ""}>解压文件</option><option value="chmod"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "chmod") : ssrLooseEqual(config.value.fileOperation, "chmod")) ? " selected" : ""}>修改权限</option></select></div>`);
          if (config.value.fileOperation === "find") {
            _push(`<div class="space-y-3"><div><label class="text-sm font-medium">查找路径</label><input${ssrRenderAttr("value", config.value.findPath)} type="text" placeholder="/home/user" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">文件名模式</label><input${ssrRenderAttr("value", config.value.fileName)} type="text" placeholder="*.txt" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.recursive) ? ssrLooseContain(config.value.recursive, null) : config.value.recursive) ? " checked" : ""} type="checkbox" id="recursive" class="rounded text-primary focus:ring-primary"><label for="recursive" class="text-sm">递归查找</label></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (["copy", "move"].includes(config.value.fileOperation)) {
            _push(`<div class="space-y-3"><div><label class="text-sm font-medium">源文件/目录</label><input${ssrRenderAttr("value", config.value.sourcePath)} type="text" placeholder="/path/to/source" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">目标路径</label><input${ssrRenderAttr("value", config.value.targetPath)} type="text" placeholder="/path/to/destination" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div>`);
            if (config.value.fileOperation === "copy") {
              _push(`<div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.preserve) ? ssrLooseContain(config.value.preserve, null) : config.value.preserve) ? " checked" : ""} type="checkbox" id="preserve" class="rounded text-primary focus:ring-primary"><label for="preserve" class="text-sm">保留属性</label></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (config.value.fileOperation === "chmod") {
            _push(`<div class="space-y-3"><div><label class="text-sm font-medium">文件/目录</label><input${ssrRenderAttr("value", config.value.chmodPath)} type="text" placeholder="/path/to/file" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">权限模式</label><div class="mt-2 grid grid-cols-3 gap-2"><input${ssrRenderAttr("value", config.value.ownerPermission)} type="text" placeholder="7" class="px-3 py-2 border rounded-md text-sm text-center" maxlength="1"><input${ssrRenderAttr("value", config.value.groupPermission)} type="text" placeholder="5" class="px-3 py-2 border rounded-md text-sm text-center" maxlength="1"><input${ssrRenderAttr("value", config.value.otherPermission)} type="text" placeholder="5" class="px-3 py-2 border rounded-md text-sm text-center" maxlength="1"></div><div class="mt-2 flex justify-between text-xs text-muted-foreground"><span>所有者</span><span>组</span><span>其他</span></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "system") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">操作类型</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="ps"${ssrIncludeBooleanAttr(Array.isArray(config.value.systemOperation) ? ssrLooseContain(config.value.systemOperation, "ps") : ssrLooseEqual(config.value.systemOperation, "ps")) ? " selected" : ""}>查看进程</option><option value="kill"${ssrIncludeBooleanAttr(Array.isArray(config.value.systemOperation) ? ssrLooseContain(config.value.systemOperation, "kill") : ssrLooseEqual(config.value.systemOperation, "kill")) ? " selected" : ""}>终止进程</option><option value="service"${ssrIncludeBooleanAttr(Array.isArray(config.value.systemOperation) ? ssrLooseContain(config.value.systemOperation, "service") : ssrLooseEqual(config.value.systemOperation, "service")) ? " selected" : ""}>服务管理</option><option value="disk"${ssrIncludeBooleanAttr(Array.isArray(config.value.systemOperation) ? ssrLooseContain(config.value.systemOperation, "disk") : ssrLooseEqual(config.value.systemOperation, "disk")) ? " selected" : ""}>磁盘使用</option><option value="memory"${ssrIncludeBooleanAttr(Array.isArray(config.value.systemOperation) ? ssrLooseContain(config.value.systemOperation, "memory") : ssrLooseEqual(config.value.systemOperation, "memory")) ? " selected" : ""}>内存使用</option><option value="log"${ssrIncludeBooleanAttr(Array.isArray(config.value.systemOperation) ? ssrLooseContain(config.value.systemOperation, "log") : ssrLooseEqual(config.value.systemOperation, "log")) ? " selected" : ""}>日志查看</option></select></div>`);
          if (config.value.systemOperation === "ps") {
            _push(`<div class="space-y-3"><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.showAll) ? ssrLooseContain(config.value.showAll, null) : config.value.showAll) ? " checked" : ""} type="checkbox" id="showAll" class="rounded text-primary focus:ring-primary"><label for="showAll" class="text-sm">显示所有进程</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.showTree) ? ssrLooseContain(config.value.showTree, null) : config.value.showTree) ? " checked" : ""} type="checkbox" id="showTree" class="rounded text-primary focus:ring-primary"><label for="showTree" class="text-sm">树形显示</label></div><div><label class="text-sm font-medium">筛选进程</label><input${ssrRenderAttr("value", config.value.processFilter)} type="text" placeholder="nginx" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (config.value.systemOperation === "service") {
            _push(`<div class="space-y-3"><div><label class="text-sm font-medium">服务名称</label><input${ssrRenderAttr("value", config.value.serviceName)} type="text" placeholder="nginx" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">操作</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="start"${ssrIncludeBooleanAttr(Array.isArray(config.value.serviceAction) ? ssrLooseContain(config.value.serviceAction, "start") : ssrLooseEqual(config.value.serviceAction, "start")) ? " selected" : ""}>启动</option><option value="stop"${ssrIncludeBooleanAttr(Array.isArray(config.value.serviceAction) ? ssrLooseContain(config.value.serviceAction, "stop") : ssrLooseEqual(config.value.serviceAction, "stop")) ? " selected" : ""}>停止</option><option value="restart"${ssrIncludeBooleanAttr(Array.isArray(config.value.serviceAction) ? ssrLooseContain(config.value.serviceAction, "restart") : ssrLooseEqual(config.value.serviceAction, "restart")) ? " selected" : ""}>重启</option><option value="status"${ssrIncludeBooleanAttr(Array.isArray(config.value.serviceAction) ? ssrLooseContain(config.value.serviceAction, "status") : ssrLooseEqual(config.value.serviceAction, "status")) ? " selected" : ""}>查看状态</option><option value="enable"${ssrIncludeBooleanAttr(Array.isArray(config.value.serviceAction) ? ssrLooseContain(config.value.serviceAction, "enable") : ssrLooseEqual(config.value.serviceAction, "enable")) ? " selected" : ""}>开机自启</option><option value="disable"${ssrIncludeBooleanAttr(Array.isArray(config.value.serviceAction) ? ssrLooseContain(config.value.serviceAction, "disable") : ssrLooseEqual(config.value.serviceAction, "disable")) ? " selected" : ""}>关闭自启</option></select></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "network") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">操作类型</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="ping"${ssrIncludeBooleanAttr(Array.isArray(config.value.networkOperation) ? ssrLooseContain(config.value.networkOperation, "ping") : ssrLooseEqual(config.value.networkOperation, "ping")) ? " selected" : ""}>Ping 测试</option><option value="netstat"${ssrIncludeBooleanAttr(Array.isArray(config.value.networkOperation) ? ssrLooseContain(config.value.networkOperation, "netstat") : ssrLooseEqual(config.value.networkOperation, "netstat")) ? " selected" : ""}>网络状态</option><option value="ss"${ssrIncludeBooleanAttr(Array.isArray(config.value.networkOperation) ? ssrLooseContain(config.value.networkOperation, "ss") : ssrLooseEqual(config.value.networkOperation, "ss")) ? " selected" : ""}>Socket 统计</option><option value="curl"${ssrIncludeBooleanAttr(Array.isArray(config.value.networkOperation) ? ssrLooseContain(config.value.networkOperation, "curl") : ssrLooseEqual(config.value.networkOperation, "curl")) ? " selected" : ""}>HTTP 请求</option><option value="wget"${ssrIncludeBooleanAttr(Array.isArray(config.value.networkOperation) ? ssrLooseContain(config.value.networkOperation, "wget") : ssrLooseEqual(config.value.networkOperation, "wget")) ? " selected" : ""}>下载文件</option><option value="iptables"${ssrIncludeBooleanAttr(Array.isArray(config.value.networkOperation) ? ssrLooseContain(config.value.networkOperation, "iptables") : ssrLooseEqual(config.value.networkOperation, "iptables")) ? " selected" : ""}>防火墙规则</option></select></div>`);
          if (config.value.networkOperation === "ping") {
            _push(`<div class="space-y-3"><div><label class="text-sm font-medium">目标主机</label><input${ssrRenderAttr("value", config.value.pingTarget)} type="text" placeholder="google.com" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">次数（可选）</label><input${ssrRenderAttr("value", config.value.pingCount)} type="number" placeholder="4" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (config.value.networkOperation === "curl") {
            _push(`<div class="space-y-3"><div><label class="text-sm font-medium">URL</label><input${ssrRenderAttr("value", config.value.curlUrl)} type="text" placeholder="https://api.example.com/data" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">请求方法</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="GET"${ssrIncludeBooleanAttr(Array.isArray(config.value.curlMethod) ? ssrLooseContain(config.value.curlMethod, "GET") : ssrLooseEqual(config.value.curlMethod, "GET")) ? " selected" : ""}>GET</option><option value="POST"${ssrIncludeBooleanAttr(Array.isArray(config.value.curlMethod) ? ssrLooseContain(config.value.curlMethod, "POST") : ssrLooseEqual(config.value.curlMethod, "POST")) ? " selected" : ""}>POST</option><option value="PUT"${ssrIncludeBooleanAttr(Array.isArray(config.value.curlMethod) ? ssrLooseContain(config.value.curlMethod, "PUT") : ssrLooseEqual(config.value.curlMethod, "PUT")) ? " selected" : ""}>PUT</option><option value="DELETE"${ssrIncludeBooleanAttr(Array.isArray(config.value.curlMethod) ? ssrLooseContain(config.value.curlMethod, "DELETE") : ssrLooseEqual(config.value.curlMethod, "DELETE")) ? " selected" : ""}>DELETE</option></select></div><div><label class="text-sm font-medium">请求头（可选）</label><textarea placeholder="Content-Type: application/json
Authorization: Bearer token" class="mt-2 w-full px-3 py-2 border rounded-md text-sm h-20 resize-none">${ssrInterpolate(config.value.curlHeaders)}</textarea></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">生成的命令</h2><button${ssrIncludeBooleanAttr(!generatedCommand.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "已复制" : "复制")}</button></div><div class="bg-muted/30 rounded-lg p-4">`);
      if (generatedCommand.value) {
        _push(`<code class="text-sm whitespace-pre-wrap break-all">${ssrInterpolate(generatedCommand.value)}</code>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-8">`);
        _push(ssrRenderComponent(unref(Terminal), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>选择命令类型并配置选项</p></div>`);
      }
      _push(`</div></div>`);
      if (generatedCommand.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">命令说明</h2><div class="space-y-3 text-sm text-muted-foreground"><!--[-->`);
        ssrRenderList(commandDescription.value, (desc) => {
          _push(`<div class="flex gap-2"><span class="text-primary">•</span><span>${ssrInterpolate(desc)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">常用命令示例</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(commandExamples, (example) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><h4 class="font-medium text-sm mb-1">${ssrInterpolate(example.title)}</h4><code class="text-xs text-muted-foreground">${ssrInterpolate(example.command)}</code></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` Linux 快速参考 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-foreground mb-2">文件操作</h4><ul class="space-y-1 text-sm text-muted-foreground"><li><code>ls -la</code> - 列出文件详情</li><li><code>cp -r src dst</code> - 递归复制</li><li><code>mv src dst</code> - 移动/重命名</li><li><code>rm -rf dir</code> - 强制删除目录</li><li><code>chmod 755 file</code> - 修改权限</li></ul></div><div><h4 class="font-medium text-foreground mb-2">系统管理</h4><ul class="space-y-1 text-sm text-muted-foreground"><li><code>top</code> - 实时进程监控</li><li><code>df -h</code> - 磁盘使用情况</li><li><code>free -h</code> - 内存使用情况</li><li><code>systemctl status service</code> - 服务状态</li><li><code>journalctl -u service</code> - 查看日志</li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/linux-command.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=linux-command-DyJtFmN8.js.map
