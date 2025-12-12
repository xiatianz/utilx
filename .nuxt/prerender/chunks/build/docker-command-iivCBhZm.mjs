import { ref, computed, watch, mergeProps, unref, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { X, Package, Info } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { f as useSeoMeta } from './server.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/destr/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ohash/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/scule/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/apple/Documents/code/util/node_modules/pathe/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/server.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/devalue/index.js';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';

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
      { value: "run", name: "\u8FD0\u884C\u5BB9\u5668", description: "\u521B\u5EFA\u5E76\u8FD0\u884C\u5BB9\u5668" },
      { value: "build", name: "\u6784\u5EFA\u955C\u50CF", description: "\u4ECE Dockerfile \u6784\u5EFA\u955C\u50CF" },
      { value: "network", name: "\u7F51\u7EDC\u7BA1\u7406", description: "\u521B\u5EFA\u548C\u7BA1\u7406 Docker \u7F51\u7EDC" },
      { value: "compose", name: "Docker Compose", description: "\u591A\u5BB9\u5668\u5E94\u7528\u7F16\u6392" }
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
          "docker run \u7528\u4E8E\u521B\u5EFA\u5E76\u542F\u52A8\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668",
          "-d \u53C2\u6570\u8BA9\u5BB9\u5668\u5728\u540E\u53F0\u8FD0\u884C",
          "-p \u7528\u4E8E\u7AEF\u53E3\u6620\u5C04\uFF0C\u683C\u5F0F\uFF1A\u4E3B\u673A\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3",
          "-v \u7528\u4E8E\u5377\u6302\u8F7D\uFF0C\u683C\u5F0F\uFF1A\u4E3B\u673A\u8DEF\u5F84:\u5BB9\u5668\u8DEF\u5F84",
          "-e \u7528\u4E8E\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF",
          "--rm \u8BA9\u5BB9\u5668\u505C\u6B62\u540E\u81EA\u52A8\u5220\u9664"
        ],
        build: [
          "docker build \u7528\u4E8E\u4ECE Dockerfile \u6784\u5EFA\u955C\u50CF",
          "-t \u7528\u4E8E\u6807\u8BB0\u955C\u50CF\u540D\u79F0\u548C\u7248\u672C",
          "-f \u6307\u5B9A Dockerfile \u8DEF\u5F84",
          "--build-arg \u4F20\u9012\u6784\u5EFA\u53C2\u6570",
          "--no-cache \u5FFD\u7565\u7F13\u5B58\u91CD\u65B0\u6784\u5EFA"
        ],
        network: [
          "docker network create \u521B\u5EFA\u65B0\u7684 Docker \u7F51\u7EDC",
          "--driver \u6307\u5B9A\u7F51\u7EDC\u9A71\u52A8\u7C7B\u578B",
          "--subnet \u914D\u7F6E\u5B50\u7F51\u8303\u56F4",
          "\u5BB9\u5668\u8FDE\u63A5\u5230\u540C\u4E00\u7F51\u7EDC\u540E\u53EF\u4EE5\u901A\u8FC7\u5BB9\u5668\u540D\u4E92\u76F8\u8BBF\u95EE"
        ],
        compose: [
          "docker-compose \u7528\u4E8E\u7BA1\u7406\u591A\u5BB9\u5668\u5E94\u7528",
          "-f \u6307\u5B9A compose \u6587\u4EF6\u8DEF\u5F84",
          "up \u521B\u5EFA\u5E76\u542F\u52A8\u670D\u52A1",
          "down \u505C\u6B62\u5E76\u5220\u9664\u670D\u52A1\u548C\u7F51\u7EDC",
          "logs \u67E5\u770B\u670D\u52A1\u65E5\u5FD7"
        ]
      };
      return descriptions[selectedType.value] || [];
    });
    const commandExamples = [
      {
        title: "\u8FD0\u884C Nginx \u670D\u52A1\u5668",
        command: "docker run -d -p 8080:80 --name web-server nginx:latest"
      },
      {
        title: "\u8FD0\u884C PostgreSQL \u6570\u636E\u5E93",
        command: "docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres:13"
      },
      {
        title: "\u6784\u5EFA Go \u5E94\u7528\u955C\u50CF",
        command: "docker build -t my-go-app:1.0 ."
      },
      {
        title: "\u67E5\u770B\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668",
        command: "docker ps -a"
      },
      {
        title: "\u6E05\u7406\u672A\u4F7F\u7528\u7684\u8D44\u6E90",
        command: "docker system prune -a"
      },
      {
        title: "\u67E5\u770B\u5BB9\u5668\u65E5\u5FD7",
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
      title: "Docker \u547D\u4EE4\u751F\u6210\u5668 - \u53EF\u89C6\u5316 Docker \u547D\u4EE4\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF Docker \u547D\u4EE4\u751F\u6210\u5668\uFF0C\u53EF\u89C6\u5316\u914D\u7F6E\u751F\u6210 Docker \u547D\u4EE4\uFF0C\u652F\u6301\u5BB9\u5668\u8FD0\u884C\u3001\u955C\u50CF\u6784\u5EFA\u3001\u7F51\u7EDC\u7BA1\u7406\u548C Docker Compose \u7F16\u6392\u3002",
      keywords: ["docker", "\u5BB9\u5668", "\u547D\u4EE4\u751F\u6210", "docker-compose", "\u5BB9\u5668\u5316", "dockerfile", "\u865A\u62DF\u5316"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Docker \u547D\u4EE4\u751F\u6210\u5668</h1><p class="text-muted-foreground">\u53EF\u89C6\u5316\u751F\u6210 Docker \u547D\u4EE4\uFF0C\u652F\u6301\u5BB9\u5668\u7BA1\u7406\u3001\u955C\u50CF\u64CD\u4F5C\u548C\u7F51\u7EDC\u914D\u7F6E</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u547D\u4EE4\u7C7B\u578B</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(commandTypes, (type) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          selectedType.value === type.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(type.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(type.description)}</div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (selectedType.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u914D\u7F6E\u9009\u9879</h2>`);
        if (selectedType.value === "run") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">\u955C\u50CF\u540D\u79F0</label><input${ssrRenderAttr("value", config.value.image)} type="text" placeholder="nginx:latest" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u5BB9\u5668\u540D\u79F0</label><input${ssrRenderAttr("value", config.value.containerName)} type="text" placeholder="my-container" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u7AEF\u53E3\u6620\u5C04</label><div class="mt-2 space-y-2"><!--[-->`);
          ssrRenderList(config.value.ports, (port, index) => {
            _push(`<div class="flex gap-2"><input${ssrRenderAttr("value", port.host)} type="text" placeholder="8080" class="flex-1 px-2 py-1 border rounded text-sm"><span>:</span><input${ssrRenderAttr("value", port.container)} type="text" placeholder="80" class="flex-1 px-2 py-1 border rounded text-sm"><button class="text-red-500 hover:text-red-700">`);
            _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
            _push(`</button></div>`);
          });
          _push(`<!--]--><button class="text-sm text-primary hover:text-primary/80"> + \u6DFB\u52A0\u7AEF\u53E3 </button></div></div><div><label class="text-sm font-medium">\u5377\u6302\u8F7D</label><div class="mt-2 space-y-2"><!--[-->`);
          ssrRenderList(config.value.volumes, (volume, index) => {
            _push(`<div class="flex gap-2"><input${ssrRenderAttr("value", volume.host)} type="text" placeholder="/host/path" class="flex-1 px-2 py-1 border rounded text-sm"><span>:</span><input${ssrRenderAttr("value", volume.container)} type="text" placeholder="/container/path" class="flex-1 px-2 py-1 border rounded text-sm"><button class="text-red-500 hover:text-red-700">`);
            _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
            _push(`</button></div>`);
          });
          _push(`<!--]--><button class="text-sm text-primary hover:text-primary/80"> + \u6DFB\u52A0\u5377 </button></div></div><div><label class="text-sm font-medium">\u73AF\u5883\u53D8\u91CF</label><textarea placeholder="KEY=value
DEBUG=true" class="mt-2 w-full px-3 py-2 border rounded-md text-sm h-20 resize-none">${ssrInterpolate(config.value.environment)}</textarea></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.detach) ? ssrLooseContain(config.value.detach, null) : config.value.detach) ? " checked" : ""} type="checkbox" id="detach" class="rounded text-primary focus:ring-primary"><label for="detach" class="text-sm">\u540E\u53F0\u8FD0\u884C</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.remove) ? ssrLooseContain(config.value.remove, null) : config.value.remove) ? " checked" : ""} type="checkbox" id="remove" class="rounded text-primary focus:ring-primary"><label for="remove" class="text-sm">\u505C\u6B62\u540E\u81EA\u52A8\u5220\u9664</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedType.value === "build") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">\u955C\u50CF\u540D\u79F0</label><input${ssrRenderAttr("value", config.value.imageName)} type="text" placeholder="my-app:1.0.0" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">Dockerfile \u8DEF\u5F84</label><input${ssrRenderAttr("value", config.value.dockerfilePath)} type="text" placeholder="./Dockerfile" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u6784\u5EFA\u4E0A\u4E0B\u6587</label><input${ssrRenderAttr("value", config.value.context)} type="text" placeholder="." class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u6784\u5EFA\u53C2\u6570</label><textarea placeholder="VERSION=1.0.0
ENV=production" class="mt-2 w-full px-3 py-2 border rounded-md text-sm h-20 resize-none">${ssrInterpolate(config.value.buildArgs)}</textarea></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.noCache) ? ssrLooseContain(config.value.noCache, null) : config.value.noCache) ? " checked" : ""} type="checkbox" id="noCache" class="rounded text-primary focus:ring-primary"><label for="noCache" class="text-sm">\u4E0D\u4F7F\u7528\u7F13\u5B58</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedType.value === "network") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">\u7F51\u7EDC\u540D\u79F0</label><input${ssrRenderAttr("value", config.value.networkName)} type="text" placeholder="my-network" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u9A71\u52A8\u7C7B\u578B</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="bridge"${ssrIncludeBooleanAttr(Array.isArray(config.value.driver) ? ssrLooseContain(config.value.driver, "bridge") : ssrLooseEqual(config.value.driver, "bridge")) ? " selected" : ""}>Bridge</option><option value="host"${ssrIncludeBooleanAttr(Array.isArray(config.value.driver) ? ssrLooseContain(config.value.driver, "host") : ssrLooseEqual(config.value.driver, "host")) ? " selected" : ""}>Host</option><option value="overlay"${ssrIncludeBooleanAttr(Array.isArray(config.value.driver) ? ssrLooseContain(config.value.driver, "overlay") : ssrLooseEqual(config.value.driver, "overlay")) ? " selected" : ""}>Overlay</option><option value="macvlan"${ssrIncludeBooleanAttr(Array.isArray(config.value.driver) ? ssrLooseContain(config.value.driver, "macvlan") : ssrLooseEqual(config.value.driver, "macvlan")) ? " selected" : ""}>MACVLAN</option><option value="none"${ssrIncludeBooleanAttr(Array.isArray(config.value.driver) ? ssrLooseContain(config.value.driver, "none") : ssrLooseEqual(config.value.driver, "none")) ? " selected" : ""}>None</option></select></div><div><label class="text-sm font-medium">\u5B50\u7F51\uFF08\u53EF\u9009\uFF09</label><input${ssrRenderAttr("value", config.value.subnet)} type="text" placeholder="172.20.0.0/16" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedType.value === "compose") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">Compose \u6587\u4EF6</label><input${ssrRenderAttr("value", config.value.composeFile)} type="text" placeholder="docker-compose.yml" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u64CD\u4F5C</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="up"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "up") : ssrLooseEqual(config.value.composeAction, "up")) ? " selected" : ""}>\u542F\u52A8\u670D\u52A1</option><option value="down"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "down") : ssrLooseEqual(config.value.composeAction, "down")) ? " selected" : ""}>\u505C\u6B62\u5E76\u5220\u9664</option><option value="start"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "start") : ssrLooseEqual(config.value.composeAction, "start")) ? " selected" : ""}>\u542F\u52A8</option><option value="stop"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "stop") : ssrLooseEqual(config.value.composeAction, "stop")) ? " selected" : ""}>\u505C\u6B62</option><option value="restart"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "restart") : ssrLooseEqual(config.value.composeAction, "restart")) ? " selected" : ""}>\u91CD\u542F</option><option value="pull"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "pull") : ssrLooseEqual(config.value.composeAction, "pull")) ? " selected" : ""}>\u62C9\u53D6\u955C\u50CF</option><option value="logs"${ssrIncludeBooleanAttr(Array.isArray(config.value.composeAction) ? ssrLooseContain(config.value.composeAction, "logs") : ssrLooseEqual(config.value.composeAction, "logs")) ? " selected" : ""}>\u67E5\u770B\u65E5\u5FD7</option></select></div><div><label class="text-sm font-medium">\u6307\u5B9A\u670D\u52A1\uFF08\u53EF\u9009\uFF09</label><input${ssrRenderAttr("value", config.value.services)} type="text" placeholder="web db" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.daemon) ? ssrLooseContain(config.value.daemon, null) : config.value.daemon) ? " checked" : ""} type="checkbox" id="daemon" class="rounded text-primary focus:ring-primary"><label for="daemon" class="text-sm">\u540E\u53F0\u8FD0\u884C</label></div></div>`);
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
        _push(ssrRenderComponent(unref(Package), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>\u8BF7\u9009\u62E9\u547D\u4EE4\u7C7B\u578B\u5E76\u914D\u7F6E\u9009\u9879</p></div>`);
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
      _push(` Docker \u6700\u4F73\u5B9E\u8DF5 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-foreground mb-2">\u5BB9\u5668\u7BA1\u7406</h4><ul class="space-y-1 text-sm text-muted-foreground"><li>\u2022 \u4F7F\u7528 .dockerignore \u6392\u9664\u4E0D\u5FC5\u8981\u7684\u6587\u4EF6</li><li>\u2022 \u4E3A\u5BB9\u5668\u8BBE\u7F6E\u8D44\u6E90\u9650\u5236</li><li>\u2022 \u4F7F\u7528\u5065\u5EB7\u68C0\u67E5\u786E\u4FDD\u5BB9\u5668\u6B63\u5E38</li><li>\u2022 \u5B9A\u671F\u6E05\u7406\u672A\u4F7F\u7528\u7684\u955C\u50CF\u548C\u5BB9\u5668</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u955C\u50CF\u4F18\u5316</h4><ul class="space-y-1 text-sm text-muted-foreground"><li>\u2022 \u4F7F\u7528\u591A\u9636\u6BB5\u6784\u5EFA\u51CF\u5C0F\u955C\u50CF\u4F53\u79EF</li><li>\u2022 \u9009\u62E9\u5408\u9002\u7684\u57FA\u7840\u955C\u50CF</li><li>\u2022 \u5408\u7406\u5229\u7528\u7F13\u5B58\u5C42</li><li>\u2022 \u6700\u5C0F\u5316\u955C\u50CF\u5C42\u6570</li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/docker-command.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=docker-command-iivCBhZm.mjs.map
