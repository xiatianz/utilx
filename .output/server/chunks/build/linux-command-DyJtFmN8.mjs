import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Terminal, Info } from 'lucide-vue-next';
import { f as useSeoMeta } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

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
      { value: "file", name: "\u6587\u4EF6\u64CD\u4F5C", description: "\u6587\u4EF6\u67E5\u627E\u3001\u590D\u5236\u3001\u79FB\u52A8\u7B49" },
      { value: "system", name: "\u7CFB\u7EDF\u7BA1\u7406", description: "\u8FDB\u7A0B\u3001\u670D\u52A1\u3001\u8D44\u6E90\u76D1\u63A7" },
      { value: "network", name: "\u7F51\u7EDC\u914D\u7F6E", description: "\u7F51\u7EDC\u6D4B\u8BD5\u3001HTTP \u8BF7\u6C42\u7B49" }
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
          "find \u7528\u4E8E\u5728\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u67E5\u627E\u6587\u4EF6",
          "cp \u7528\u4E8E\u590D\u5236\u6587\u4EF6\u6216\u76EE\u5F55",
          "mv \u7528\u4E8E\u79FB\u52A8\u6216\u91CD\u547D\u540D\u6587\u4EF6",
          "rm \u7528\u4E8E\u5220\u9664\u6587\u4EF6\u6216\u76EE\u5F55\uFF08\u8C28\u614E\u4F7F\u7528\uFF09",
          "chmod \u7528\u4E8E\u4FEE\u6539\u6587\u4EF6\u6743\u9650"
        ],
        system: [
          "ps \u7528\u4E8E\u67E5\u770B\u5F53\u524D\u8FD0\u884C\u7684\u8FDB\u7A0B",
          "systemctl \u7528\u4E8E\u7BA1\u7406\u7CFB\u7EDF\u670D\u52A1",
          "df \u663E\u793A\u78C1\u76D8\u4F7F\u7528\u60C5\u51B5",
          "free \u663E\u793A\u5185\u5B58\u4F7F\u7528\u60C5\u51B5",
          "journalctl \u67E5\u770B\u7CFB\u7EDF\u65E5\u5FD7"
        ],
        network: [
          "ping \u6D4B\u8BD5\u7F51\u7EDC\u8FDE\u901A\u6027",
          "netstat \u663E\u793A\u7F51\u7EDC\u8FDE\u63A5\u72B6\u6001",
          "curl \u53D1\u9001 HTTP \u8BF7\u6C42",
          "wget \u4E0B\u8F7D\u6587\u4EF6",
          "iptables \u914D\u7F6E\u9632\u706B\u5899\u89C4\u5219"
        ]
      };
      return descriptions[selectedCategory.value] || [];
    });
    const commandExamples = [
      {
        title: "\u67E5\u627E\u5927\u4E8E 100MB \u7684\u6587\u4EF6",
        command: "find / -type f -size +100M 2>/dev/null"
      },
      {
        title: "\u67E5\u770B\u7AEF\u53E3\u5360\u7528",
        command: "lsof -i :8080"
      },
      {
        title: "\u5B9E\u65F6\u67E5\u770B\u65E5\u5FD7",
        command: "tail -f /var/log/nginx/access.log"
      },
      {
        title: "\u6279\u91CF\u91CD\u547D\u540D\u6587\u4EF6",
        command: "rename 's/old/new/' *.txt"
      },
      {
        title: "\u538B\u7F29\u76EE\u5F55",
        command: "tar -czf backup.tar.gz /path/to/directory"
      },
      {
        title: "\u89E3\u538B\u6587\u4EF6",
        command: "tar -xzf backup.tar.gz"
      }
    ];
    useSeoMeta({
      title: "Linux \u547D\u4EE4\u751F\u6210\u5668 - \u53EF\u89C6\u5316 Linux \u547D\u4EE4\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF Linux \u547D\u4EE4\u751F\u6210\u5668\uFF0C\u53EF\u89C6\u5316\u914D\u7F6E\u751F\u6210 Linux \u547D\u4EE4\uFF0C\u652F\u6301\u6587\u4EF6\u64CD\u4F5C\u3001\u7CFB\u7EDF\u7BA1\u7406\u3001\u7F51\u7EDC\u914D\u7F6E\u7B49\u5E38\u7528\u547D\u4EE4\u3002",
      keywords: ["linux", "\u547D\u4EE4\u751F\u6210", "shell", "bash", "\u6587\u4EF6\u64CD\u4F5C", "\u7CFB\u7EDF\u7BA1\u7406", "\u7F51\u7EDC\u914D\u7F6E", "ubuntu", "centos"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Linux \u547D\u4EE4\u751F\u6210\u5668</h1><p class="text-muted-foreground">\u53EF\u89C6\u5316\u751F\u6210 Linux \u547D\u4EE4\uFF0C\u652F\u6301\u6587\u4EF6\u64CD\u4F5C\u3001\u7CFB\u7EDF\u7BA1\u7406\u548C\u7F51\u7EDC\u914D\u7F6E</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u547D\u4EE4\u7C7B\u522B</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(commandCategories, (category2) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          selectedCategory.value === category2.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(category2.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(category2.description)}</div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (selectedCategory.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u914D\u7F6E\u9009\u9879</h2>`);
        if (selectedCategory.value === "file") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">\u64CD\u4F5C\u7C7B\u578B</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="find"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "find") : ssrLooseEqual(config.value.fileOperation, "find")) ? " selected" : ""}>\u67E5\u627E\u6587\u4EF6</option><option value="copy"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "copy") : ssrLooseEqual(config.value.fileOperation, "copy")) ? " selected" : ""}>\u590D\u5236\u6587\u4EF6</option><option value="move"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "move") : ssrLooseEqual(config.value.fileOperation, "move")) ? " selected" : ""}>\u79FB\u52A8\u6587\u4EF6</option><option value="delete"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "delete") : ssrLooseEqual(config.value.fileOperation, "delete")) ? " selected" : ""}>\u5220\u9664\u6587\u4EF6</option><option value="compress"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "compress") : ssrLooseEqual(config.value.fileOperation, "compress")) ? " selected" : ""}>\u538B\u7F29\u6587\u4EF6</option><option value="extract"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "extract") : ssrLooseEqual(config.value.fileOperation, "extract")) ? " selected" : ""}>\u89E3\u538B\u6587\u4EF6</option><option value="chmod"${ssrIncludeBooleanAttr(Array.isArray(config.value.fileOperation) ? ssrLooseContain(config.value.fileOperation, "chmod") : ssrLooseEqual(config.value.fileOperation, "chmod")) ? " selected" : ""}>\u4FEE\u6539\u6743\u9650</option></select></div>`);
          if (config.value.fileOperation === "find") {
            _push(`<div class="space-y-3"><div><label class="text-sm font-medium">\u67E5\u627E\u8DEF\u5F84</label><input${ssrRenderAttr("value", config.value.findPath)} type="text" placeholder="/home/user" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u6587\u4EF6\u540D\u6A21\u5F0F</label><input${ssrRenderAttr("value", config.value.fileName)} type="text" placeholder="*.txt" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.recursive) ? ssrLooseContain(config.value.recursive, null) : config.value.recursive) ? " checked" : ""} type="checkbox" id="recursive" class="rounded text-primary focus:ring-primary"><label for="recursive" class="text-sm">\u9012\u5F52\u67E5\u627E</label></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (["copy", "move"].includes(config.value.fileOperation)) {
            _push(`<div class="space-y-3"><div><label class="text-sm font-medium">\u6E90\u6587\u4EF6/\u76EE\u5F55</label><input${ssrRenderAttr("value", config.value.sourcePath)} type="text" placeholder="/path/to/source" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u76EE\u6807\u8DEF\u5F84</label><input${ssrRenderAttr("value", config.value.targetPath)} type="text" placeholder="/path/to/destination" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div>`);
            if (config.value.fileOperation === "copy") {
              _push(`<div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.preserve) ? ssrLooseContain(config.value.preserve, null) : config.value.preserve) ? " checked" : ""} type="checkbox" id="preserve" class="rounded text-primary focus:ring-primary"><label for="preserve" class="text-sm">\u4FDD\u7559\u5C5E\u6027</label></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (config.value.fileOperation === "chmod") {
            _push(`<div class="space-y-3"><div><label class="text-sm font-medium">\u6587\u4EF6/\u76EE\u5F55</label><input${ssrRenderAttr("value", config.value.chmodPath)} type="text" placeholder="/path/to/file" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u6743\u9650\u6A21\u5F0F</label><div class="mt-2 grid grid-cols-3 gap-2"><input${ssrRenderAttr("value", config.value.ownerPermission)} type="text" placeholder="7" class="px-3 py-2 border rounded-md text-sm text-center" maxlength="1"><input${ssrRenderAttr("value", config.value.groupPermission)} type="text" placeholder="5" class="px-3 py-2 border rounded-md text-sm text-center" maxlength="1"><input${ssrRenderAttr("value", config.value.otherPermission)} type="text" placeholder="5" class="px-3 py-2 border rounded-md text-sm text-center" maxlength="1"></div><div class="mt-2 flex justify-between text-xs text-muted-foreground"><span>\u6240\u6709\u8005</span><span>\u7EC4</span><span>\u5176\u4ED6</span></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "system") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">\u64CD\u4F5C\u7C7B\u578B</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="ps"${ssrIncludeBooleanAttr(Array.isArray(config.value.systemOperation) ? ssrLooseContain(config.value.systemOperation, "ps") : ssrLooseEqual(config.value.systemOperation, "ps")) ? " selected" : ""}>\u67E5\u770B\u8FDB\u7A0B</option><option value="kill"${ssrIncludeBooleanAttr(Array.isArray(config.value.systemOperation) ? ssrLooseContain(config.value.systemOperation, "kill") : ssrLooseEqual(config.value.systemOperation, "kill")) ? " selected" : ""}>\u7EC8\u6B62\u8FDB\u7A0B</option><option value="service"${ssrIncludeBooleanAttr(Array.isArray(config.value.systemOperation) ? ssrLooseContain(config.value.systemOperation, "service") : ssrLooseEqual(config.value.systemOperation, "service")) ? " selected" : ""}>\u670D\u52A1\u7BA1\u7406</option><option value="disk"${ssrIncludeBooleanAttr(Array.isArray(config.value.systemOperation) ? ssrLooseContain(config.value.systemOperation, "disk") : ssrLooseEqual(config.value.systemOperation, "disk")) ? " selected" : ""}>\u78C1\u76D8\u4F7F\u7528</option><option value="memory"${ssrIncludeBooleanAttr(Array.isArray(config.value.systemOperation) ? ssrLooseContain(config.value.systemOperation, "memory") : ssrLooseEqual(config.value.systemOperation, "memory")) ? " selected" : ""}>\u5185\u5B58\u4F7F\u7528</option><option value="log"${ssrIncludeBooleanAttr(Array.isArray(config.value.systemOperation) ? ssrLooseContain(config.value.systemOperation, "log") : ssrLooseEqual(config.value.systemOperation, "log")) ? " selected" : ""}>\u65E5\u5FD7\u67E5\u770B</option></select></div>`);
          if (config.value.systemOperation === "ps") {
            _push(`<div class="space-y-3"><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.showAll) ? ssrLooseContain(config.value.showAll, null) : config.value.showAll) ? " checked" : ""} type="checkbox" id="showAll" class="rounded text-primary focus:ring-primary"><label for="showAll" class="text-sm">\u663E\u793A\u6240\u6709\u8FDB\u7A0B</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.showTree) ? ssrLooseContain(config.value.showTree, null) : config.value.showTree) ? " checked" : ""} type="checkbox" id="showTree" class="rounded text-primary focus:ring-primary"><label for="showTree" class="text-sm">\u6811\u5F62\u663E\u793A</label></div><div><label class="text-sm font-medium">\u7B5B\u9009\u8FDB\u7A0B</label><input${ssrRenderAttr("value", config.value.processFilter)} type="text" placeholder="nginx" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (config.value.systemOperation === "service") {
            _push(`<div class="space-y-3"><div><label class="text-sm font-medium">\u670D\u52A1\u540D\u79F0</label><input${ssrRenderAttr("value", config.value.serviceName)} type="text" placeholder="nginx" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u64CD\u4F5C</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="start"${ssrIncludeBooleanAttr(Array.isArray(config.value.serviceAction) ? ssrLooseContain(config.value.serviceAction, "start") : ssrLooseEqual(config.value.serviceAction, "start")) ? " selected" : ""}>\u542F\u52A8</option><option value="stop"${ssrIncludeBooleanAttr(Array.isArray(config.value.serviceAction) ? ssrLooseContain(config.value.serviceAction, "stop") : ssrLooseEqual(config.value.serviceAction, "stop")) ? " selected" : ""}>\u505C\u6B62</option><option value="restart"${ssrIncludeBooleanAttr(Array.isArray(config.value.serviceAction) ? ssrLooseContain(config.value.serviceAction, "restart") : ssrLooseEqual(config.value.serviceAction, "restart")) ? " selected" : ""}>\u91CD\u542F</option><option value="status"${ssrIncludeBooleanAttr(Array.isArray(config.value.serviceAction) ? ssrLooseContain(config.value.serviceAction, "status") : ssrLooseEqual(config.value.serviceAction, "status")) ? " selected" : ""}>\u67E5\u770B\u72B6\u6001</option><option value="enable"${ssrIncludeBooleanAttr(Array.isArray(config.value.serviceAction) ? ssrLooseContain(config.value.serviceAction, "enable") : ssrLooseEqual(config.value.serviceAction, "enable")) ? " selected" : ""}>\u5F00\u673A\u81EA\u542F</option><option value="disable"${ssrIncludeBooleanAttr(Array.isArray(config.value.serviceAction) ? ssrLooseContain(config.value.serviceAction, "disable") : ssrLooseEqual(config.value.serviceAction, "disable")) ? " selected" : ""}>\u5173\u95ED\u81EA\u542F</option></select></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "network") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">\u64CD\u4F5C\u7C7B\u578B</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="ping"${ssrIncludeBooleanAttr(Array.isArray(config.value.networkOperation) ? ssrLooseContain(config.value.networkOperation, "ping") : ssrLooseEqual(config.value.networkOperation, "ping")) ? " selected" : ""}>Ping \u6D4B\u8BD5</option><option value="netstat"${ssrIncludeBooleanAttr(Array.isArray(config.value.networkOperation) ? ssrLooseContain(config.value.networkOperation, "netstat") : ssrLooseEqual(config.value.networkOperation, "netstat")) ? " selected" : ""}>\u7F51\u7EDC\u72B6\u6001</option><option value="ss"${ssrIncludeBooleanAttr(Array.isArray(config.value.networkOperation) ? ssrLooseContain(config.value.networkOperation, "ss") : ssrLooseEqual(config.value.networkOperation, "ss")) ? " selected" : ""}>Socket \u7EDF\u8BA1</option><option value="curl"${ssrIncludeBooleanAttr(Array.isArray(config.value.networkOperation) ? ssrLooseContain(config.value.networkOperation, "curl") : ssrLooseEqual(config.value.networkOperation, "curl")) ? " selected" : ""}>HTTP \u8BF7\u6C42</option><option value="wget"${ssrIncludeBooleanAttr(Array.isArray(config.value.networkOperation) ? ssrLooseContain(config.value.networkOperation, "wget") : ssrLooseEqual(config.value.networkOperation, "wget")) ? " selected" : ""}>\u4E0B\u8F7D\u6587\u4EF6</option><option value="iptables"${ssrIncludeBooleanAttr(Array.isArray(config.value.networkOperation) ? ssrLooseContain(config.value.networkOperation, "iptables") : ssrLooseEqual(config.value.networkOperation, "iptables")) ? " selected" : ""}>\u9632\u706B\u5899\u89C4\u5219</option></select></div>`);
          if (config.value.networkOperation === "ping") {
            _push(`<div class="space-y-3"><div><label class="text-sm font-medium">\u76EE\u6807\u4E3B\u673A</label><input${ssrRenderAttr("value", config.value.pingTarget)} type="text" placeholder="google.com" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u6B21\u6570\uFF08\u53EF\u9009\uFF09</label><input${ssrRenderAttr("value", config.value.pingCount)} type="number" placeholder="4" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (config.value.networkOperation === "curl") {
            _push(`<div class="space-y-3"><div><label class="text-sm font-medium">URL</label><input${ssrRenderAttr("value", config.value.curlUrl)} type="text" placeholder="https://api.example.com/data" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u8BF7\u6C42\u65B9\u6CD5</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="GET"${ssrIncludeBooleanAttr(Array.isArray(config.value.curlMethod) ? ssrLooseContain(config.value.curlMethod, "GET") : ssrLooseEqual(config.value.curlMethod, "GET")) ? " selected" : ""}>GET</option><option value="POST"${ssrIncludeBooleanAttr(Array.isArray(config.value.curlMethod) ? ssrLooseContain(config.value.curlMethod, "POST") : ssrLooseEqual(config.value.curlMethod, "POST")) ? " selected" : ""}>POST</option><option value="PUT"${ssrIncludeBooleanAttr(Array.isArray(config.value.curlMethod) ? ssrLooseContain(config.value.curlMethod, "PUT") : ssrLooseEqual(config.value.curlMethod, "PUT")) ? " selected" : ""}>PUT</option><option value="DELETE"${ssrIncludeBooleanAttr(Array.isArray(config.value.curlMethod) ? ssrLooseContain(config.value.curlMethod, "DELETE") : ssrLooseEqual(config.value.curlMethod, "DELETE")) ? " selected" : ""}>DELETE</option></select></div><div><label class="text-sm font-medium">\u8BF7\u6C42\u5934\uFF08\u53EF\u9009\uFF09</label><textarea placeholder="Content-Type: application/json
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
      _push(`</div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u751F\u6210\u7684\u547D\u4EE4</h2><button${ssrIncludeBooleanAttr(!generatedCommand.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button></div><div class="bg-muted/30 rounded-lg p-4">`);
      if (generatedCommand.value) {
        _push(`<code class="text-sm whitespace-pre-wrap break-all">${ssrInterpolate(generatedCommand.value)}</code>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-8">`);
        _push(ssrRenderComponent(unref(Terminal), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>\u9009\u62E9\u547D\u4EE4\u7C7B\u578B\u5E76\u914D\u7F6E\u9009\u9879</p></div>`);
      }
      _push(`</div></div>`);
      if (generatedCommand.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u547D\u4EE4\u8BF4\u660E</h2><div class="space-y-3 text-sm text-muted-foreground"><!--[-->`);
        ssrRenderList(commandDescription.value, (desc) => {
          _push(`<div class="flex gap-2"><span class="text-primary">\u2022</span><span>${ssrInterpolate(desc)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5E38\u7528\u547D\u4EE4\u793A\u4F8B</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(commandExamples, (example) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><h4 class="font-medium text-sm mb-1">${ssrInterpolate(example.title)}</h4><code class="text-xs text-muted-foreground">${ssrInterpolate(example.command)}</code></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` Linux \u5FEB\u901F\u53C2\u8003 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-foreground mb-2">\u6587\u4EF6\u64CD\u4F5C</h4><ul class="space-y-1 text-sm text-muted-foreground"><li><code>ls -la</code> - \u5217\u51FA\u6587\u4EF6\u8BE6\u60C5</li><li><code>cp -r src dst</code> - \u9012\u5F52\u590D\u5236</li><li><code>mv src dst</code> - \u79FB\u52A8/\u91CD\u547D\u540D</li><li><code>rm -rf dir</code> - \u5F3A\u5236\u5220\u9664\u76EE\u5F55</li><li><code>chmod 755 file</code> - \u4FEE\u6539\u6743\u9650</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u7CFB\u7EDF\u7BA1\u7406</h4><ul class="space-y-1 text-sm text-muted-foreground"><li><code>top</code> - \u5B9E\u65F6\u8FDB\u7A0B\u76D1\u63A7</li><li><code>df -h</code> - \u78C1\u76D8\u4F7F\u7528\u60C5\u51B5</li><li><code>free -h</code> - \u5185\u5B58\u4F7F\u7528\u60C5\u51B5</li><li><code>systemctl status service</code> - \u670D\u52A1\u72B6\u6001</li><li><code>journalctl -u service</code> - \u67E5\u770B\u65E5\u5FD7</li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/linux-command.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=linux-command-DyJtFmN8.mjs.map
