import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta, e as addRecentTool } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { Settings, Loader2, Send, FileText, X, FileCode, History, Info, AlertCircle, HelpCircle, ChevronUp, Check, FileSignature, Palette, List, Terminal, Package, Activity, Users, Calculator, Calendar, Key, GitBranch, Globe, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Wifi, Type, Clock, Shield, Lock } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "http-client",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "HTTP客户端 - 在线API测试工具",
      meta: [
        { name: "description", content: "免费在线HTTP客户端工具，支持GET、POST、PUT、DELETE等方法，测试REST API接口，自定义请求头和请求体。" },
        { name: "keywords", content: "HTTP客户端,API测试,REST,POSTMAN,GET,POST,PUT,DELETE" }
      ]
    });
    const tool = tools.find((t) => t.id === "http-client");
    categories.find((c) => c.id === "network");
    const isSeoContentVisible = ref(true);
    const sending = ref(false);
    const response = ref(null);
    const error = ref("");
    const activeResponseTab = ref("body");
    const bodyType = ref("json");
    const history = ref([]);
    const formData = ref([]);
    const request = ref({
      method: "GET",
      url: "",
      headers: [
        { key: "Content-Type", value: "application/json" },
        { key: "Accept", value: "application/json" }
      ],
      body: ""
    });
    const httpMethods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"];
    const responseTabs = [
      { key: "body", label: "响应体" },
      { key: "headers", label: "响应头" },
      { key: "request", label: "请求信息" }
    ];
    const iconMap = {
      FileText,
      Lock,
      Shield,
      Clock,
      Type,
      Wifi,
      Image,
      Code,
      FileJson,
      Database,
      Link,
      Hash,
      Timer,
      Regex,
      FileDiff,
      Globe,
      FolderOpenIcon: FileText,
      GitBranchIcon: GitBranch,
      Key,
      Calendar,
      Calculator,
      Users,
      Activity,
      Package,
      Terminal,
      List,
      Palette,
      FileSignature,
      Check,
      JWTIcon: FileCode
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "http-client"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "base64-encode"),
        tools.find((t) => t.id === "jwt-decode"),
        tools.find((t) => t.id === "curl-to-code")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const showBody = computed(() => {
      return ["POST", "PUT", "PATCH"].includes(request.value.method);
    });
    const formattedResponse = computed(() => {
      if (!response.value?.data) return "";
      try {
        const parsed = JSON.parse(response.value.data);
        return JSON.stringify(parsed, null, 2);
      } catch {
        return response.value.data;
      }
    });
    const isJsonResponse = computed(() => {
      return response.value?.contentType?.includes("json");
    });
    watch(bodyType, (newType) => {
      if (newType === "form" && formData.value.length === 0) {
        formData.value = [{ key: "", value: "" }];
      }
    });
    const getStatusColorClass = (status) => {
      if (status >= 200 && status < 300) return "text-green-600";
      if (status >= 300 && status < 400) return "text-yellow-600";
      if (status >= 400) return "text-red-600";
      return "text-muted-foreground";
    };
    const getStatusBadgeClass = (status) => {
      if (status >= 200 && status < 300) return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      if (status >= 300 && status < 400) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      if (status >= 400) return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    };
    const formatSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    const formatTime = (time) => {
      if (!time) return "";
      const date = new Date(time);
      if (isNaN(date.getTime())) return "";
      const now = /* @__PURE__ */ new Date();
      const diff = now - date;
      if (diff < 0) return "";
      if (diff < 6e4) {
        return "刚刚";
      } else if (diff < 36e5) {
        return `${Math.floor(diff / 6e4)}分钟前`;
      } else if (diff < 864e5) {
        return `${Math.floor(diff / 36e5)}小时前`;
      } else {
        return date.toLocaleDateString();
      }
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">HTTP客户端 - 在线API测试工具</h1><p class="text-muted-foreground">强大的在线HTTP客户端，支持发送GET、POST、PUT、DELETE等HTTP请求，自定义请求头和请求体，测试REST API接口。纯前端实现，数据安全可靠。</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 请求配置 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">HTTP方法</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><!--[-->`);
      ssrRenderList(httpMethods, (method) => {
        _push(`<option${ssrRenderAttr("value", method)}${ssrIncludeBooleanAttr(Array.isArray(request.value.method) ? ssrLooseContain(request.value.method, method) : ssrLooseEqual(request.value.method, method)) ? " selected" : ""}>${ssrInterpolate(method)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="block text-sm font-medium text-foreground mb-2">请求URL</label><input${ssrRenderAttr("value", request.value.url)} type="url" placeholder="https://api.example.com/endpoint" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"></div><div><label class="block text-sm font-medium text-foreground mb-2">快速示例</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="">选择示例...</option><option value="jsonplaceholder">JSONPlaceholder API</option><option value="github">GitHub API</option><option value="weather">天气API</option></select></div><button${ssrIncludeBooleanAttr(!request.value.url || sending.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (sending.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Send), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(sending.value ? "发送中..." : "发送请求")}</button></div></div><div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(FileText), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 请求头 </h2><button class="text-sm text-primary hover:text-primary/80"> 添加 </button></div><div class="space-y-2"><!--[-->`);
      ssrRenderList(request.value.headers, (header, index) => {
        _push(`<div class="flex space-x-2"><input${ssrRenderAttr("value", header.key)} type="text" placeholder="名称" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"><input${ssrRenderAttr("value", header.value)} type="text" placeholder="值" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"><button class="p-2 text-destructive hover:bg-destructive/10 rounded-md">`);
        _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
        _push(`</button></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (showBody.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(FileCode), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 请求体 </h2><select class="text-sm px-3 py-1 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="json"${ssrIncludeBooleanAttr(Array.isArray(bodyType.value) ? ssrLooseContain(bodyType.value, "json") : ssrLooseEqual(bodyType.value, "json")) ? " selected" : ""}>JSON</option><option value="form"${ssrIncludeBooleanAttr(Array.isArray(bodyType.value) ? ssrLooseContain(bodyType.value, "form") : ssrLooseEqual(bodyType.value, "form")) ? " selected" : ""}>表单</option><option value="raw"${ssrIncludeBooleanAttr(Array.isArray(bodyType.value) ? ssrLooseContain(bodyType.value, "raw") : ssrLooseEqual(bodyType.value, "raw")) ? " selected" : ""}>原始</option></select></div>`);
        if (bodyType.value === "json") {
          _push(`<div><div class="mb-2"><button class="text-sm text-primary hover:text-primary/80"> 格式化JSON </button></div><textarea placeholder="{&quot;key&quot;: &quot;value&quot;}" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm text-foreground" rows="8">${ssrInterpolate(request.value.body)}</textarea></div>`);
        } else if (bodyType.value === "form") {
          _push(`<div class="space-y-2"><!--[-->`);
          ssrRenderList(formData.value, (field, index) => {
            _push(`<div class="flex space-x-2"><input${ssrRenderAttr("value", field.key)} type="text" placeholder="字段名" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"><input${ssrRenderAttr("value", field.value)} type="text" placeholder="字段值" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"><button class="p-2 text-destructive hover:bg-destructive/10 rounded-md">`);
            _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
            _push(`</button></div>`);
          });
          _push(`<!--]--><button class="w-full py-2 text-sm text-primary hover:bg-primary/10 rounded-md transition-colors"> 添加字段 </button></div>`);
        } else {
          _push(`<textarea placeholder="原始请求体" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm text-foreground" rows="8">${ssrInterpolate(request.value.body)}</textarea>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (history.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center justify-between text-foreground"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 请求历史 </span><button class="text-sm text-destructive hover:text-destructive/80"> 清除 </button></h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(history.value, (item) => {
          _push(`<button class="w-full text-left px-3 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors"><div class="flex items-center justify-between"><span class="px-2 py-1 bg-muted-foreground/20 text-muted-foreground text-xs rounded font-medium">${ssrInterpolate(item.method)}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(formatTime(item.time))}</span></div><div class="text-sm font-medium truncate mt-1 text-foreground">${ssrInterpolate(item.url || "")}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(item.status || "")} ${ssrInterpolate(item.statusText || "")}</div></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-6">`);
      if (response.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Info), {
          class: ["h-6 w-6 mr-2", getStatusColorClass(response.value.status)]
        }, null, _parent));
        _push(` 响应结果 </h3><div class="flex items-center space-x-2"><span class="${ssrRenderClass([getStatusBadgeClass(response.value.status), "px-3 py-1 rounded-full text-sm font-medium"])}">${ssrInterpolate(response.value.status)} ${ssrInterpolate(response.value.statusText)}</span><span class="text-sm text-muted-foreground">${ssrInterpolate(response.value.time)}ms</span></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"><div class="bg-muted rounded-lg p-3"><div class="text-xs text-muted-foreground">状态码</div><div class="font-semibold text-foreground">${ssrInterpolate(response.value.status)}</div></div><div class="bg-muted rounded-lg p-3"><div class="text-xs text-muted-foreground">大小</div><div class="font-semibold text-foreground">${ssrInterpolate(formatSize(response.value.size))}</div></div><div class="bg-muted rounded-lg p-3"><div class="text-xs text-muted-foreground">耗时</div><div class="font-semibold text-foreground">${ssrInterpolate(response.value.time)}ms</div></div><div class="bg-muted rounded-lg p-3"><div class="text-xs text-muted-foreground">类型</div><div class="font-semibold text-foreground">${ssrInterpolate(response.value.contentType)}</div></div></div><div class="border-b border-border"><nav class="-mb-px flex space-x-8"><!--[-->`);
        ssrRenderList(responseTabs, (tab) => {
          _push(`<button class="${ssrRenderClass([
            "py-2 px-1 border-b-2 font-medium text-sm transition-colors",
            activeResponseTab.value === tab.key ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
          ])}">${ssrInterpolate(tab.label)}</button>`);
        });
        _push(`<!--]--></nav></div>`);
        if (activeResponseTab.value === "body") {
          _push(`<div class="mt-6"><div class="flex items-center justify-between mb-2"><span class="text-sm text-muted-foreground">响应体</span><div class="flex space-x-2">`);
          if (isJsonResponse.value) {
            _push(`<button class="text-sm text-primary hover:text-primary/80"> 格式化 </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<button class="text-sm text-muted-foreground hover:text-foreground"> 复制 </button><button class="text-sm text-muted-foreground hover:text-foreground"> 下载 </button></div></div><pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-foreground">${ssrInterpolate(formattedResponse.value)}</pre></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeResponseTab.value === "headers") {
          _push(`<div class="mt-6"><div class="overflow-x-auto"><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">名称</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">值</th></tr></thead><tbody class="bg-card divide-y divide-border"><!--[-->`);
          ssrRenderList(response.value.headers, (value, key) => {
            _push(`<tr><td class="px-6 py-4 text-sm font-medium text-foreground">${ssrInterpolate(key)}</td><td class="px-6 py-4 text-sm text-muted-foreground">${ssrInterpolate(value)}</td></tr>`);
          });
          _push(`<!--]--></tbody></table></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeResponseTab.value === "request") {
          _push(`<div class="mt-6"><div class="space-y-4"><div><h4 class="font-medium text-foreground mb-2">请求URL</h4><code class="block bg-muted p-3 rounded-lg text-sm break-all text-foreground">${ssrInterpolate(response.value.request.url)}</code></div><div><h4 class="font-medium text-foreground mb-2">请求方法</h4><code class="block bg-muted p-3 rounded-lg text-sm text-foreground">${ssrInterpolate(response.value.request.method)}</code></div><div><h4 class="font-medium text-foreground mb-2">请求头</h4><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><th class="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase">名称</th><th class="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase">值</th></tr></thead><tbody class="bg-card divide-y divide-border"><!--[-->`);
          ssrRenderList(response.value.request.headers, (value, key) => {
            _push(`<tr><td class="px-4 py-2 text-sm font-medium text-foreground">${ssrInterpolate(key)}</td><td class="px-4 py-2 text-sm text-muted-foreground">${ssrInterpolate(value)}</td></tr>`);
          });
          _push(`<!--]--></tbody></table></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-destructive">`);
        _push(ssrRenderComponent(unref(AlertCircle), { class: "h-5 w-5 mr-2" }, null, _parent));
        _push(` 请求失败 </h3><div class="bg-destructive/10 border border-destructive/20 rounded-lg p-4"><p class="text-destructive">${ssrInterpolate(error.value)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 HTTP 客户端？ </h2><p class="text-muted-foreground mb-4"> HTTP客户端是一种用于发送HTTP请求并接收响应的工具。它是Web开发、API测试和调试过程中必不可少的工具。 通过HTTP客户端，开发者可以模拟浏览器或其他应用程序的行为，向服务器发送各种类型的HTTP请求， 包括GET、POST、PUT、DELETE等方法，并查看服务器的响应内容。 </p><p class="text-muted-foreground mb-4"> 我们的在线HTTP客户端工具提供了完整的REST API测试功能，支持自定义请求头、请求体、认证等功能。 无需安装任何软件，直接在浏览器中使用，所有请求都在本地处理，确保数据安全和隐私。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>支持所有HTTP方法</strong>：GET、POST、PUT、DELETE、PATCH、HEAD、OPTIONS等常用方法</li><li><strong>自定义请求头</strong>：灵活添加、删除和修改HTTP请求头，支持Content-Type、Authorization等</li><li><strong>多种请求体格式</strong>：支持JSON、表单数据和原始文本格式</li><li><strong>响应数据查看</strong>：清晰的响应展示，包括响应体、响应头和请求详情</li><li><strong>请求历史记录</strong>：自动保存最近20条请求历史，方便重复测试</li><li><strong>快速示例</strong>：内置常用API示例，快速上手</li><li><strong>纯本地处理</strong>：所有请求在浏览器本地处理，保护数据隐私</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 使用场景 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>API开发和测试</strong>：开发和调试REST API时发送测试请求</li><li><strong>接口集成</strong>：测试第三方API接口，验证数据格式和响应</li><li><strong>问题排查</strong>：当出现API调用问题时，使用HTTP客户端定位问题</li><li><strong>性能测试</strong>：测试API响应时间和性能指标</li><li><strong>学习HTTP协议</strong>：了解HTTP请求和响应的结构</li><li><strong>自动化测试</strong>：配合脚本进行自动化API测试</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">在线HTTP客户端安全吗？</h3><p class="text-muted-foreground mt-1"> 非常安全。我们的HTTP客户端完全在浏览器本地运行，不会将您的请求数据发送到任何第三方服务器。 所有请求都直接发送到您指定的目标服务器，确保您的API密钥、认证信息和测试数据的隐私安全。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么选择在线HTTP客户端而不是Postman？</h3><p class="text-muted-foreground mt-1"> 在线HTTP客户端具有无需安装、即开即用、跨平台等优势。它特别适合临时测试、快速验证API、 在不同设备上使用等场景。虽然功能可能不如桌面软件丰富，但对于大部分API测试需求已经足够。 </p></div><div><h3 class="text-lg font-semibold text-foreground">支持CORS跨域请求吗？</h3><p class="text-muted-foreground mt-1"> 出于安全考虑，浏览器默认阻止跨域请求。如果要测试的API服务器没有配置正确的CORS头， 请求可能会失败。您可以使用浏览器插件临时允许跨域，或使用服务器端代理来解决这个问题。 </p></div><div><h3 class="text-lg font-semibold text-foreground">如何发送带认证的请求？</h3><p class="text-muted-foreground mt-1"> 您可以在请求头中添加认证信息，例如Bearer Token（Authorization: Bearer your-token）、 API Key（X-API-Key: your-key）或Basic Auth（Authorization: Basic base64-encoded-credentials）等。 只需在请求头部分添加相应的键值对即可。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" })),
                  createVNode("span", { class: "font-medium text-foreground" }, toDisplayString(relatedTool.name), 1)
                ]),
                createVNode("p", { class: "text-sm text-muted-foreground line-clamp-2" }, toDisplayString(relatedTool.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/http-client.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=http-client-BDAUUypv.js.map
