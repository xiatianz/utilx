import { ref, computed, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { X, Package, Info } from "lucide-vue-next";
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
  __name: "docker-command",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedType = ref("");
    const copied = ref(false);
    const config = ref({
      // 运行容器
      image: "",
      containerName: "",
      ports: [],
      volumes: [],
      environment: "",
      detach: true,
      remove: false,
      // 构建镜像
      imageName: "",
      dockerfilePath: "./Dockerfile",
      context: ".",
      buildArgs: "",
      noCache: false,
      // 网络
      networkName: "",
      driver: "bridge",
      subnet: "",
      // Compose
      composeFile: "docker-compose.yml",
      composeAction: "up",
      services: "",
      daemon: false
    });
    const commandTypes = [
      { value: "run", name: "运行容器", description: "创建并运行容器" },
      { value: "build", name: "构建镜像", description: "从 Dockerfile 构建镜像" },
      { value: "network", name: "网络管理", description: "创建和管理 Docker 网络" },
      { value: "compose", name: "Docker Compose", description: "多容器应用编排" }
    ];
    const generatedCommand = computed(() => {
      if (!selectedType.value) return "";
      let command = "";
      switch (selectedType.value) {
        case "run":
          command = "docker run";
          if (config.value.detach) command += " -d";
          if (config.value.remove) command += " --rm";
          if (config.value.containerName) command += ` --name ${config.value.containerName}`;
          config.value.ports.forEach((port) => {
            if (port.host && port.container) {
              command += ` -p ${port.host}:${port.container}`;
            }
          });
          config.value.volumes.forEach((volume) => {
            if (volume.host && volume.container) {
              command += ` -v ${volume.host}:${volume.container}`;
            }
          });
          if (config.value.environment) {
            const envs = config.value.environment.split("\n").filter((e) => e.trim());
            envs.forEach((env) => {
              command += ` -e ${env.trim()}`;
            });
          }
          command += ` ${config.value.image || "<image-name>"}`;
          break;
        case "build":
          command = "docker build";
          if (config.value.noCache) command += " --no-cache";
          if (config.value.imageName) command += ` -t ${config.value.imageName}`;
          if (config.value.dockerfilePath !== "./Dockerfile") {
            command += ` -f ${config.value.dockerfilePath}`;
          }
          if (config.value.buildArgs) {
            const args = config.value.buildArgs.split("\n").filter((a) => a.trim());
            args.forEach((arg) => {
              command += ` --build-arg ${arg.trim()}`;
            });
          }
          command += ` ${config.value.context}`;
          break;
        case "network":
          command = "docker network create";
          if (config.value.driver !== "bridge") command += ` --driver ${config.value.driver}`;
          if (config.value.subnet) command += ` --subnet=${config.value.subnet}`;
          command += ` ${config.value.networkName || "<network-name>"}`;
          break;
        case "compose":
          command = "docker-compose";
          if (config.value.composeFile !== "docker-compose.yml") {
            command += ` -f ${config.value.composeFile}`;
          }
          command += ` ${config.value.composeAction}`;
          if (config.value.services) {
            command += ` ${config.value.services}`;
          }
          if (config.value.daemon && ["up"].includes(config.value.composeAction)) {
            command += " -d";
          }
          break;
      }
      return command;
    });
    const commandDescription = computed(() => {
      if (!selectedType.value) return [];
      const descriptions = {
        run: [
          "docker run 用于创建并启动一个新的容器",
          "-d 参数让容器在后台运行",
          "-p 用于端口映射，格式：主机端口:容器端口",
          "-v 用于卷挂载，格式：主机路径:容器路径",
          "-e 用于设置环境变量",
          "--rm 让容器停止后自动删除"
        ],
        build: [
          "docker build 用于从 Dockerfile 构建镜像",
          "-t 用于标记镜像名称和版本",
          "-f 指定 Dockerfile 路径",
          "--build-arg 传递构建参数",
          "--no-cache 忽略缓存重新构建"
        ],
        network: [
          "docker network create 创建新的 Docker 网络",
          "--driver 指定网络驱动类型",
          "--subnet 配置子网范围",
          "容器连接到同一网络后可以通过容器名互相访问"
        ],
        compose: [
          "docker-compose 用于管理多容器应用",
          "-f 指定 compose 文件路径",
          "up 创建并启动服务",
          "down 停止并删除服务和网络",
          "logs 查看服务日志"
        ]
      };
      return descriptions[selectedType.value] || [];
    });
    const commandExamples = [
      {
        title: "运行 Nginx 服务器",
        command: "docker run -d -p 8080:80 --name web-server nginx:latest"
      },
      {
        title: "运行 PostgreSQL 数据库",
        command: "docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres:13"
      },
      {
        title: "构建 Go 应用镜像",
        command: "docker build -t my-go-app:1.0 ."
      },
      {
        title: "查看运行中的容器",
        command: "docker ps -a"
      },
      {
        title: "清理未使用的资源",
        command: "docker system prune -a"
      },
      {
        title: "查看容器日志",
        command: "docker logs -f container-name"
      }
    ];
    const initConfig = () => {
      config.value = {
        // 运行容器
        image: "",
        containerName: "",
        ports: [{ host: "", container: "" }],
        volumes: [],
        environment: "",
        detach: true,
        remove: false,
        // 构建镜像
        imageName: "",
        dockerfilePath: "./Dockerfile",
        context: ".",
        buildArgs: "",
        noCache: false,
        // 网络
        networkName: "",
        driver: "bridge",
        subnet: "",
        // Compose
        composeFile: "docker-compose.yml",
        composeAction: "up",
        services: "",
        daemon: false
      };
    };
    watch(selectedType, () => {
      initConfig();
    });
    useSeoMeta({
      title: "Docker 命令生成器 - 可视化 Docker 命令生成工具",
      description: "免费的在线 Docker 命令生成器，可视化配置生成 Docker 命令，支持容器运行、镜像构建、网络管理和 Docker Compose 编排。",
      keywords: ["docker", "容器", "命令生成", "docker-compose", "容器化", "dockerfile", "虚拟化"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Docker 命令生成器</h1><p class="text-muted-foreground">可视化生成 Docker 命令，支持容器管理、镜像操作和网络配置</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">命令类型</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(commandTypes, (type) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          selectedType.value === type.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(type.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(type.description)}</div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (selectedType.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">配置选项</h2>`);
        if (selectedType.value === "run") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">镜像名称</label><input${ssrRenderAttr("value", config.value.image)} type="text" placeholder="nginx:latest" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">容器名称</label><input${ssrRenderAttr("value", config.value.containerName)} type="text" placeholder="my-container" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">端口映射</label><div class="mt-2 space-y-2"><!--[-->`);
          ssrRenderList(config.value.ports, (port, index) => {
            _push(`<div class="flex gap-2"><input${ssrRenderAttr("value", port.host)} type="text" placeholder="8080" class="flex-1 px-2 py-1 border rounded text-sm"><span>:</span><input${ssrRenderAttr("value", port.container)} type="text" placeholder="80" class="flex-1 px-2 py-1 border rounded text-sm"><button class="text-red-500 hover:text-red-700">`);
            _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
            _push(`</button></div>`);
          });
          _push(`<!--]--><button class="text-sm text-primary hover:text-primary/80"> + 添加端口 </button></div></div><div><label class="text-sm font-medium">卷挂载</label><div class="mt-2 space-y-2"><!--[-->`);
          ssrRenderList(config.value.volumes, (volume, index) => {
            _push(`<div class="flex gap-2"><input${ssrRenderAttr("value", volume.host)} type="text" placeholder="/host/path" class="flex-1 px-2 py-1 border rounded text-sm"><span>:</span><input${ssrRenderAttr("value", volume.container)} type="text" placeholder="/container/path" class="flex-1 px-2 py-1 border rounded text-sm"><button class="text-red-500 hover:text-red-700">`);
            _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
            _push(`</button></div>`);
          });
          _push(`<!--]--><button class="text-sm text-primary hover:text-primary/80"> + 添加卷 </button></div></div><div><label class="text-sm font-medium">环境变量</label><textarea placeholder="KEY=value
DEBUG=true" class="mt-2 w-full px-3 py-2 border rounded-md text-sm h-20 resize-none">${ssrInterpolate(config.value.environment)}</textarea></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.detach) ? ssrLooseContain(config.value.detach, null) : config.value.detach) ? " checked" : ""} type="checkbox" id="detach" class="rounded text-primary focus:ring-primary"><label for="detach" class="text-sm">后台运行</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.remove) ? ssrLooseContain(config.value.remove, null) : config.value.remove) ? " checked" : ""} type="checkbox" id="remove" class="rounded text-primary focus:ring-primary"><label for="remove" class="text-sm">停止后自动删除</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedType.value === "build") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">镜像名称</label><input${ssrRenderAttr("value", config.value.imageName)} type="text" placeholder="my-app:1.0.0" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">Dockerfile 路径</label><input${ssrRenderAttr("value", config.value.dockerfilePath)} type="text" placeholder="./Dockerfile" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">构建上下文</label><input${ssrRenderAttr("value", config.value.context)} type="text" placeholder="." class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">构建参数</label><textarea placeholder="VERSION=1.0.0
ENV=production" class="mt-2 w-full px-3 py-2 border rounded-md text-sm h-20 resize-none">${ssrInterpolate(config.value.buildArgs)}</textarea></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.noCache) ? ssrLooseContain(config.value.noCache, null) : config.value.noCache) ? " checked" : ""} type="checkbox" id="noCache" class="rounded text-primary focus:ring-primary"><label for="noCache" class="text-sm">不使用缓存</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedType.value === "network") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">网络名称</label><input${ssrRenderAttr("value", config.value.networkName)} type="text" placeholder="my-network" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">驱动类型</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="bridge"${ssrIncludeBooleanAttr(Array.isArray(config.value.driver) ? ssrLooseContain(config.value.driver, "bridge") : ssrLooseEqual(config.value.driver, "bridge")) ? " selected" : ""}>Bridge</option><option value="host"${ssrIncludeBooleanAttr(Array.isArray(config.value.driver) ? ssrLooseContain(config.value.driver, "host") : ssrLooseEqual(config.value.driver, "host")) ? " selected" : ""}>Host</option><option value="overlay"${ssrIncludeBooleanAttr(Array.isArray(config.value.driver) ? ssrLooseContain(config.value.driver, "overlay") : ssrLooseEqual(config.value.driver, "overlay")) ? " selected" : ""}>Overlay</option><option value="macvlan"${ssrIncludeBooleanAttr(Array.isArray(config.value.driver) ? ssrLooseContain(config.value.driver, "macvlan") : ssrLooseEqual(config.value.driver, "macvlan")) ? " selected" : ""}>MACVLAN</option><option value="none"${ssrIncludeBooleanAttr(Array.isArray(config.value.driver) ? ssrLooseContain(config.value.driver, "none") : ssrLooseEqual(config.value.driver, "none")) ? " selected" : ""}>None</option></select></div><div><label class="text-sm font-medium">子网（可选）</label><input${ssrRenderAttr("value", config.value.subnet)} type="text" placeholder="172.20.0.0/16" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedType.value === "compose") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">Compose 文件</label><input${ssrRenderAttr("value", config.value.composeFile)} type="text" placeholder="docker-compose.yml" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">操作</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="up"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "up") : ssrLooseEqual(config.value.composeAction, "up")) ? " selected" : ""}>启动服务</option><option value="down"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "down") : ssrLooseEqual(config.value.composeAction, "down")) ? " selected" : ""}>停止并删除</option><option value="start"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "start") : ssrLooseEqual(config.value.composeAction, "start")) ? " selected" : ""}>启动</option><option value="stop"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "stop") : ssrLooseEqual(config.value.composeAction, "stop")) ? " selected" : ""}>停止</option><option value="restart"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "restart") : ssrLooseEqual(config.value.composeAction, "restart")) ? " selected" : ""}>重启</option><option value="pull"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "pull") : ssrLooseEqual(config.value.composeAction, "pull")) ? " selected" : ""}>拉取镜像</option><option value="logs"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "logs") : ssrLooseEqual(config.value.composeAction, "logs")) ? " selected" : ""}>查看日志</option></select></div><div><label class="text-sm font-medium">指定服务（可选）</label><input${ssrRenderAttr("value", config.value.services)} type="text" placeholder="web db" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.daemon) ? ssrLooseContain(config.value.daemon, null) : config.value.daemon) ? " checked" : ""} type="checkbox" id="daemon" class="rounded text-primary focus:ring-primary"><label for="daemon" class="text-sm">后台运行</label></div></div>`);
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
        _push(ssrRenderComponent(unref(Package), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>请选择命令类型并配置选项</p></div>`);
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
      _push(` Docker 最佳实践 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-foreground mb-2">容器管理</h4><ul class="space-y-1 text-sm text-muted-foreground"><li>• 使用 .dockerignore 排除不必要的文件</li><li>• 为容器设置资源限制</li><li>• 使用健康检查确保容器正常</li><li>• 定期清理未使用的镜像和容器</li></ul></div><div><h4 class="font-medium text-foreground mb-2">镜像优化</h4><ul class="space-y-1 text-sm text-muted-foreground"><li>• 使用多阶段构建减小镜像体积</li><li>• 选择合适的基础镜像</li><li>• 合理利用缓存层</li><li>• 最小化镜像层数</li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/docker-command.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=docker-command-iivCBhZm.js.map
