import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
import { Settings, Loader2, Send, FileText, X, FileCode, History, Info, AlertCircle, HelpCircle, ChevronUp, Check, FileSignature, Palette, List, Terminal, Package, Activity, Users, Calculator, Calendar, Key, GitBranch, Globe, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Wifi, Type, Clock, Shield, Lock } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs';
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
  __name: "http-client",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "HTTP\u5BA2\u6237\u7AEF - \u5728\u7EBFAPI\u6D4B\u8BD5\u5DE5\u5177",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBFHTTP\u5BA2\u6237\u7AEF\u5DE5\u5177\uFF0C\u652F\u6301GET\u3001POST\u3001PUT\u3001DELETE\u7B49\u65B9\u6CD5\uFF0C\u6D4B\u8BD5REST API\u63A5\u53E3\uFF0C\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934\u548C\u8BF7\u6C42\u4F53\u3002" },
        { name: "keywords", content: "HTTP\u5BA2\u6237\u7AEF,API\u6D4B\u8BD5,REST,POSTMAN,GET,POST,PUT,DELETE" }
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
      { key: "body", label: "\u54CD\u5E94\u4F53" },
      { key: "headers", label: "\u54CD\u5E94\u5934" },
      { key: "request", label: "\u8BF7\u6C42\u4FE1\u606F" }
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
      var _a;
      if (!((_a = response.value) == null ? void 0 : _a.data)) return "";
      try {
        const parsed = JSON.parse(response.value.data);
        return JSON.stringify(parsed, null, 2);
      } catch {
        return response.value.data;
      }
    });
    const isJsonResponse = computed(() => {
      var _a, _b;
      return (_b = (_a = response.value) == null ? void 0 : _a.contentType) == null ? void 0 : _b.includes("json");
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
        return "\u521A\u521A";
      } else if (diff < 36e5) {
        return `${Math.floor(diff / 6e4)}\u5206\u949F\u524D`;
      } else if (diff < 864e5) {
        return `${Math.floor(diff / 36e5)}\u5C0F\u65F6\u524D`;
      } else {
        return date.toLocaleDateString();
      }
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">HTTP\u5BA2\u6237\u7AEF - \u5728\u7EBFAPI\u6D4B\u8BD5\u5DE5\u5177</h1><p class="text-muted-foreground">\u5F3A\u5927\u7684\u5728\u7EBFHTTP\u5BA2\u6237\u7AEF\uFF0C\u652F\u6301\u53D1\u9001GET\u3001POST\u3001PUT\u3001DELETE\u7B49HTTP\u8BF7\u6C42\uFF0C\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934\u548C\u8BF7\u6C42\u4F53\uFF0C\u6D4B\u8BD5REST API\u63A5\u53E3\u3002\u7EAF\u524D\u7AEF\u5B9E\u73B0\uFF0C\u6570\u636E\u5B89\u5168\u53EF\u9760\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u8BF7\u6C42\u914D\u7F6E </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">HTTP\u65B9\u6CD5</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><!--[-->`);
      ssrRenderList(httpMethods, (method) => {
        _push(`<option${ssrRenderAttr("value", method)}${ssrIncludeBooleanAttr(Array.isArray(request.value.method) ? ssrLooseContain(request.value.method, method) : ssrLooseEqual(request.value.method, method)) ? " selected" : ""}>${ssrInterpolate(method)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="block text-sm font-medium text-foreground mb-2">\u8BF7\u6C42URL</label><input${ssrRenderAttr("value", request.value.url)} type="url" placeholder="https://api.example.com/endpoint" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"></div><div><label class="block text-sm font-medium text-foreground mb-2">\u5FEB\u901F\u793A\u4F8B</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="">\u9009\u62E9\u793A\u4F8B...</option><option value="jsonplaceholder">JSONPlaceholder API</option><option value="github">GitHub API</option><option value="weather">\u5929\u6C14API</option></select></div><button${ssrIncludeBooleanAttr(!request.value.url || sending.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (sending.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Send), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(sending.value ? "\u53D1\u9001\u4E2D..." : "\u53D1\u9001\u8BF7\u6C42")}</button></div></div><div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(FileText), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u8BF7\u6C42\u5934 </h2><button class="text-sm text-primary hover:text-primary/80"> \u6DFB\u52A0 </button></div><div class="space-y-2"><!--[-->`);
      ssrRenderList(request.value.headers, (header, index) => {
        _push(`<div class="flex space-x-2"><input${ssrRenderAttr("value", header.key)} type="text" placeholder="\u540D\u79F0" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"><input${ssrRenderAttr("value", header.value)} type="text" placeholder="\u503C" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"><button class="p-2 text-destructive hover:bg-destructive/10 rounded-md">`);
        _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
        _push(`</button></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (showBody.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(FileCode), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u8BF7\u6C42\u4F53 </h2><select class="text-sm px-3 py-1 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="json"${ssrIncludeBooleanAttr(Array.isArray(bodyType.value) ? ssrLooseContain(bodyType.value, "json") : ssrLooseEqual(bodyType.value, "json")) ? " selected" : ""}>JSON</option><option value="form"${ssrIncludeBooleanAttr(Array.isArray(bodyType.value) ? ssrLooseContain(bodyType.value, "form") : ssrLooseEqual(bodyType.value, "form")) ? " selected" : ""}>\u8868\u5355</option><option value="raw"${ssrIncludeBooleanAttr(Array.isArray(bodyType.value) ? ssrLooseContain(bodyType.value, "raw") : ssrLooseEqual(bodyType.value, "raw")) ? " selected" : ""}>\u539F\u59CB</option></select></div>`);
        if (bodyType.value === "json") {
          _push(`<div><div class="mb-2"><button class="text-sm text-primary hover:text-primary/80"> \u683C\u5F0F\u5316JSON </button></div><textarea placeholder="{&quot;key&quot;: &quot;value&quot;}" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm text-foreground" rows="8">${ssrInterpolate(request.value.body)}</textarea></div>`);
        } else if (bodyType.value === "form") {
          _push(`<div class="space-y-2"><!--[-->`);
          ssrRenderList(formData.value, (field, index) => {
            _push(`<div class="flex space-x-2"><input${ssrRenderAttr("value", field.key)} type="text" placeholder="\u5B57\u6BB5\u540D" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"><input${ssrRenderAttr("value", field.value)} type="text" placeholder="\u5B57\u6BB5\u503C" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"><button class="p-2 text-destructive hover:bg-destructive/10 rounded-md">`);
            _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
            _push(`</button></div>`);
          });
          _push(`<!--]--><button class="w-full py-2 text-sm text-primary hover:bg-primary/10 rounded-md transition-colors"> \u6DFB\u52A0\u5B57\u6BB5 </button></div>`);
        } else {
          _push(`<textarea placeholder="\u539F\u59CB\u8BF7\u6C42\u4F53" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm text-foreground" rows="8">${ssrInterpolate(request.value.body)}</textarea>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (history.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center justify-between text-foreground"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u8BF7\u6C42\u5386\u53F2 </span><button class="text-sm text-destructive hover:text-destructive/80"> \u6E05\u9664 </button></h2><div class="space-y-2"><!--[-->`);
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
        _push(` \u54CD\u5E94\u7ED3\u679C </h3><div class="flex items-center space-x-2"><span class="${ssrRenderClass([getStatusBadgeClass(response.value.status), "px-3 py-1 rounded-full text-sm font-medium"])}">${ssrInterpolate(response.value.status)} ${ssrInterpolate(response.value.statusText)}</span><span class="text-sm text-muted-foreground">${ssrInterpolate(response.value.time)}ms</span></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"><div class="bg-muted rounded-lg p-3"><div class="text-xs text-muted-foreground">\u72B6\u6001\u7801</div><div class="font-semibold text-foreground">${ssrInterpolate(response.value.status)}</div></div><div class="bg-muted rounded-lg p-3"><div class="text-xs text-muted-foreground">\u5927\u5C0F</div><div class="font-semibold text-foreground">${ssrInterpolate(formatSize(response.value.size))}</div></div><div class="bg-muted rounded-lg p-3"><div class="text-xs text-muted-foreground">\u8017\u65F6</div><div class="font-semibold text-foreground">${ssrInterpolate(response.value.time)}ms</div></div><div class="bg-muted rounded-lg p-3"><div class="text-xs text-muted-foreground">\u7C7B\u578B</div><div class="font-semibold text-foreground">${ssrInterpolate(response.value.contentType)}</div></div></div><div class="border-b border-border"><nav class="-mb-px flex space-x-8"><!--[-->`);
        ssrRenderList(responseTabs, (tab) => {
          _push(`<button class="${ssrRenderClass([
            "py-2 px-1 border-b-2 font-medium text-sm transition-colors",
            activeResponseTab.value === tab.key ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
          ])}">${ssrInterpolate(tab.label)}</button>`);
        });
        _push(`<!--]--></nav></div>`);
        if (activeResponseTab.value === "body") {
          _push(`<div class="mt-6"><div class="flex items-center justify-between mb-2"><span class="text-sm text-muted-foreground">\u54CD\u5E94\u4F53</span><div class="flex space-x-2">`);
          if (isJsonResponse.value) {
            _push(`<button class="text-sm text-primary hover:text-primary/80"> \u683C\u5F0F\u5316 </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<button class="text-sm text-muted-foreground hover:text-foreground"> \u590D\u5236 </button><button class="text-sm text-muted-foreground hover:text-foreground"> \u4E0B\u8F7D </button></div></div><pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-foreground">${ssrInterpolate(formattedResponse.value)}</pre></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeResponseTab.value === "headers") {
          _push(`<div class="mt-6"><div class="overflow-x-auto"><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">\u540D\u79F0</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">\u503C</th></tr></thead><tbody class="bg-card divide-y divide-border"><!--[-->`);
          ssrRenderList(response.value.headers, (value, key) => {
            _push(`<tr><td class="px-6 py-4 text-sm font-medium text-foreground">${ssrInterpolate(key)}</td><td class="px-6 py-4 text-sm text-muted-foreground">${ssrInterpolate(value)}</td></tr>`);
          });
          _push(`<!--]--></tbody></table></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeResponseTab.value === "request") {
          _push(`<div class="mt-6"><div class="space-y-4"><div><h4 class="font-medium text-foreground mb-2">\u8BF7\u6C42URL</h4><code class="block bg-muted p-3 rounded-lg text-sm break-all text-foreground">${ssrInterpolate(response.value.request.url)}</code></div><div><h4 class="font-medium text-foreground mb-2">\u8BF7\u6C42\u65B9\u6CD5</h4><code class="block bg-muted p-3 rounded-lg text-sm text-foreground">${ssrInterpolate(response.value.request.method)}</code></div><div><h4 class="font-medium text-foreground mb-2">\u8BF7\u6C42\u5934</h4><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><th class="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase">\u540D\u79F0</th><th class="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase">\u503C</th></tr></thead><tbody class="bg-card divide-y divide-border"><!--[-->`);
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
        _push(` \u8BF7\u6C42\u5931\u8D25 </h3><div class="bg-destructive/10 border border-destructive/20 rounded-lg p-4"><p class="text-destructive">${ssrInterpolate(error.value)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F HTTP \u5BA2\u6237\u7AEF\uFF1F </h2><p class="text-muted-foreground mb-4"> HTTP\u5BA2\u6237\u7AEF\u662F\u4E00\u79CD\u7528\u4E8E\u53D1\u9001HTTP\u8BF7\u6C42\u5E76\u63A5\u6536\u54CD\u5E94\u7684\u5DE5\u5177\u3002\u5B83\u662FWeb\u5F00\u53D1\u3001API\u6D4B\u8BD5\u548C\u8C03\u8BD5\u8FC7\u7A0B\u4E2D\u5FC5\u4E0D\u53EF\u5C11\u7684\u5DE5\u5177\u3002 \u901A\u8FC7HTTP\u5BA2\u6237\u7AEF\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u6A21\u62DF\u6D4F\u89C8\u5668\u6216\u5176\u4ED6\u5E94\u7528\u7A0B\u5E8F\u7684\u884C\u4E3A\uFF0C\u5411\u670D\u52A1\u5668\u53D1\u9001\u5404\u79CD\u7C7B\u578B\u7684HTTP\u8BF7\u6C42\uFF0C \u5305\u62ECGET\u3001POST\u3001PUT\u3001DELETE\u7B49\u65B9\u6CD5\uFF0C\u5E76\u67E5\u770B\u670D\u52A1\u5668\u7684\u54CD\u5E94\u5185\u5BB9\u3002 </p><p class="text-muted-foreground mb-4"> \u6211\u4EEC\u7684\u5728\u7EBFHTTP\u5BA2\u6237\u7AEF\u5DE5\u5177\u63D0\u4F9B\u4E86\u5B8C\u6574\u7684REST API\u6D4B\u8BD5\u529F\u80FD\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934\u3001\u8BF7\u6C42\u4F53\u3001\u8BA4\u8BC1\u7B49\u529F\u80FD\u3002 \u65E0\u9700\u5B89\u88C5\u4EFB\u4F55\u8F6F\u4EF6\uFF0C\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528\uFF0C\u6240\u6709\u8BF7\u6C42\u90FD\u5728\u672C\u5730\u5904\u7406\uFF0C\u786E\u4FDD\u6570\u636E\u5B89\u5168\u548C\u9690\u79C1\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u652F\u6301\u6240\u6709HTTP\u65B9\u6CD5</strong>\uFF1AGET\u3001POST\u3001PUT\u3001DELETE\u3001PATCH\u3001HEAD\u3001OPTIONS\u7B49\u5E38\u7528\u65B9\u6CD5</li><li><strong>\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934</strong>\uFF1A\u7075\u6D3B\u6DFB\u52A0\u3001\u5220\u9664\u548C\u4FEE\u6539HTTP\u8BF7\u6C42\u5934\uFF0C\u652F\u6301Content-Type\u3001Authorization\u7B49</li><li><strong>\u591A\u79CD\u8BF7\u6C42\u4F53\u683C\u5F0F</strong>\uFF1A\u652F\u6301JSON\u3001\u8868\u5355\u6570\u636E\u548C\u539F\u59CB\u6587\u672C\u683C\u5F0F</li><li><strong>\u54CD\u5E94\u6570\u636E\u67E5\u770B</strong>\uFF1A\u6E05\u6670\u7684\u54CD\u5E94\u5C55\u793A\uFF0C\u5305\u62EC\u54CD\u5E94\u4F53\u3001\u54CD\u5E94\u5934\u548C\u8BF7\u6C42\u8BE6\u60C5</li><li><strong>\u8BF7\u6C42\u5386\u53F2\u8BB0\u5F55</strong>\uFF1A\u81EA\u52A8\u4FDD\u5B58\u6700\u8FD120\u6761\u8BF7\u6C42\u5386\u53F2\uFF0C\u65B9\u4FBF\u91CD\u590D\u6D4B\u8BD5</li><li><strong>\u5FEB\u901F\u793A\u4F8B</strong>\uFF1A\u5185\u7F6E\u5E38\u7528API\u793A\u4F8B\uFF0C\u5FEB\u901F\u4E0A\u624B</li><li><strong>\u7EAF\u672C\u5730\u5904\u7406</strong>\uFF1A\u6240\u6709\u8BF7\u6C42\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5904\u7406\uFF0C\u4FDD\u62A4\u6570\u636E\u9690\u79C1</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4F7F\u7528\u573A\u666F </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>API\u5F00\u53D1\u548C\u6D4B\u8BD5</strong>\uFF1A\u5F00\u53D1\u548C\u8C03\u8BD5REST API\u65F6\u53D1\u9001\u6D4B\u8BD5\u8BF7\u6C42</li><li><strong>\u63A5\u53E3\u96C6\u6210</strong>\uFF1A\u6D4B\u8BD5\u7B2C\u4E09\u65B9API\u63A5\u53E3\uFF0C\u9A8C\u8BC1\u6570\u636E\u683C\u5F0F\u548C\u54CD\u5E94</li><li><strong>\u95EE\u9898\u6392\u67E5</strong>\uFF1A\u5F53\u51FA\u73B0API\u8C03\u7528\u95EE\u9898\u65F6\uFF0C\u4F7F\u7528HTTP\u5BA2\u6237\u7AEF\u5B9A\u4F4D\u95EE\u9898</li><li><strong>\u6027\u80FD\u6D4B\u8BD5</strong>\uFF1A\u6D4B\u8BD5API\u54CD\u5E94\u65F6\u95F4\u548C\u6027\u80FD\u6307\u6807</li><li><strong>\u5B66\u4E60HTTP\u534F\u8BAE</strong>\uFF1A\u4E86\u89E3HTTP\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u7ED3\u6784</li><li><strong>\u81EA\u52A8\u5316\u6D4B\u8BD5</strong>\uFF1A\u914D\u5408\u811A\u672C\u8FDB\u884C\u81EA\u52A8\u5316API\u6D4B\u8BD5</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u5728\u7EBFHTTP\u5BA2\u6237\u7AEF\u5B89\u5168\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u975E\u5E38\u5B89\u5168\u3002\u6211\u4EEC\u7684HTTP\u5BA2\u6237\u7AEF\u5B8C\u5168\u5728\u6D4F\u89C8\u5668\u672C\u5730\u8FD0\u884C\uFF0C\u4E0D\u4F1A\u5C06\u60A8\u7684\u8BF7\u6C42\u6570\u636E\u53D1\u9001\u5230\u4EFB\u4F55\u7B2C\u4E09\u65B9\u670D\u52A1\u5668\u3002 \u6240\u6709\u8BF7\u6C42\u90FD\u76F4\u63A5\u53D1\u9001\u5230\u60A8\u6307\u5B9A\u7684\u76EE\u6807\u670D\u52A1\u5668\uFF0C\u786E\u4FDD\u60A8\u7684API\u5BC6\u94A5\u3001\u8BA4\u8BC1\u4FE1\u606F\u548C\u6D4B\u8BD5\u6570\u636E\u7684\u9690\u79C1\u5B89\u5168\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u9009\u62E9\u5728\u7EBFHTTP\u5BA2\u6237\u7AEF\u800C\u4E0D\u662FPostman\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5728\u7EBFHTTP\u5BA2\u6237\u7AEF\u5177\u6709\u65E0\u9700\u5B89\u88C5\u3001\u5373\u5F00\u5373\u7528\u3001\u8DE8\u5E73\u53F0\u7B49\u4F18\u52BF\u3002\u5B83\u7279\u522B\u9002\u5408\u4E34\u65F6\u6D4B\u8BD5\u3001\u5FEB\u901F\u9A8C\u8BC1API\u3001 \u5728\u4E0D\u540C\u8BBE\u5907\u4E0A\u4F7F\u7528\u7B49\u573A\u666F\u3002\u867D\u7136\u529F\u80FD\u53EF\u80FD\u4E0D\u5982\u684C\u9762\u8F6F\u4EF6\u4E30\u5BCC\uFF0C\u4F46\u5BF9\u4E8E\u5927\u90E8\u5206API\u6D4B\u8BD5\u9700\u6C42\u5DF2\u7ECF\u8DB3\u591F\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u652F\u6301CORS\u8DE8\u57DF\u8BF7\u6C42\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u6D4F\u89C8\u5668\u9ED8\u8BA4\u963B\u6B62\u8DE8\u57DF\u8BF7\u6C42\u3002\u5982\u679C\u8981\u6D4B\u8BD5\u7684API\u670D\u52A1\u5668\u6CA1\u6709\u914D\u7F6E\u6B63\u786E\u7684CORS\u5934\uFF0C \u8BF7\u6C42\u53EF\u80FD\u4F1A\u5931\u8D25\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u6D4F\u89C8\u5668\u63D2\u4EF6\u4E34\u65F6\u5141\u8BB8\u8DE8\u57DF\uFF0C\u6216\u4F7F\u7528\u670D\u52A1\u5668\u7AEF\u4EE3\u7406\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u53D1\u9001\u5E26\u8BA4\u8BC1\u7684\u8BF7\u6C42\uFF1F</h3><p class="text-muted-foreground mt-1"> \u60A8\u53EF\u4EE5\u5728\u8BF7\u6C42\u5934\u4E2D\u6DFB\u52A0\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u4F8B\u5982Bearer Token\uFF08Authorization: Bearer your-token\uFF09\u3001 API Key\uFF08X-API-Key: your-key\uFF09\u6216Basic Auth\uFF08Authorization: Basic base64-encoded-credentials\uFF09\u7B49\u3002 \u53EA\u9700\u5728\u8BF7\u6C42\u5934\u90E8\u5206\u6DFB\u52A0\u76F8\u5E94\u7684\u952E\u503C\u5BF9\u5373\u53EF\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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

export { _sfc_main as default };
//# sourceMappingURL=http-client-BDAUUypv.mjs.map
