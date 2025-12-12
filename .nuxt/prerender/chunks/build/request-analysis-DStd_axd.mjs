import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual, ssrInterpolate, ssrRenderAttr, ssrLooseContain, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrRenderStyle } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';
import { SearchCode, Edit, Upload, Info, Link, FileText, Cookie, FileCode, FileInput, Shield, Download, HelpCircle, ChevronUp, FileJson, Code, Terminal, Lock, Wifi, Globe, ChevronDown, AlertCircle, AlertTriangle } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { f as useSeoMeta } from './server.mjs';
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

const _sfc_main = {
  __name: "request-analysis",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "HTTP\u8BF7\u6C42\u5206\u6790\u5668 - \u5728\u7EBFHTTP\u8BF7\u6C42\u89E3\u6790\u5DE5\u5177",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBFHTTP\u8BF7\u6C42\u5206\u6790\u5DE5\u5177\uFF0C\u89E3\u6790HTTP\u8BF7\u6C42\u5934\u3001\u53C2\u6570\u3001cookies\u7B49\uFF0C\u652F\u6301\u591A\u79CD\u683C\u5F0F\u7684\u8BF7\u6C42\u5BFC\u5165\u548C\u5BFC\u51FA\u3002" },
        { name: "keywords", content: "HTTP\u8BF7\u6C42\u5206\u6790,\u8BF7\u6C42\u89E3\u6790,HTTP\u5934\u5206\u6790,URL\u53C2\u6570\u89E3\u6790,cookie\u5206\u6790,\u8BF7\u6C42\u4F53\u5206\u6790" }
      ]
    });
    useRouter();
    tools.find((t) => t.id === "request-analysis");
    categories.find((c) => c.id === "network");
    const isSeoContentVisible = ref(true);
    const iconMap = {
      SearchCode,
      Edit,
      Upload,
      Info,
      Link,
      FileText,
      Cookie,
      FileCode,
      FileInput,
      Shield,
      Download,
      AlertTriangle,
      AlertCircle,
      HelpCircle,
      ChevronUp,
      ChevronDown,
      Globe,
      Wifi,
      Lock,
      Terminal,
      Code,
      FileJson
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "request-analysis"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "curl-to-code"),
        tools.find((t) => t.id === "base64-encode"),
        tools.find((t) => t.id === "url-encode"),
        tools.find((t) => t.id === "jwt-decode")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const inputMode = ref("raw");
    const rawRequest = ref("");
    const urlRequest = ref({
      method: "GET",
      url: "",
      headers: "",
      body: ""
    });
    const parsedInfo = ref(null);
    const formattedBody = computed(() => {
      var _a;
      if (!((_a = parsedInfo.value) == null ? void 0 : _a.body)) return "";
      try {
        const parsed = JSON.parse(parsedInfo.value.body);
        return JSON.stringify(parsed, null, 2);
      } catch {
        return parsedInfo.value.body;
      }
    });
    const securityIssues = computed(() => {
      if (!parsedInfo.value) return [];
      const issues = [];
      if (parsedInfo.value.url && !parsedInfo.value.url.startsWith("https://")) {
        issues.push({
          type: "http",
          severity: "high",
          title: "\u4F7F\u7528 HTTP \u534F\u8BAE",
          description: "\u8BF7\u6C42\u4F7F\u7528 HTTP \u534F\u8BAE\u4F20\u8F93\uFF0C\u6570\u636E\u672A\u52A0\u5BC6\uFF0C\u53EF\u80FD\u88AB\u7A83\u542C"
        });
      }
      const body = parsedInfo.value.body || "";
      if (body.includes("password") || body.includes("token") || body.includes("secret")) {
        issues.push({
          type: "sensitive-data",
          severity: "high",
          title: "\u8BF7\u6C42\u4F53\u5305\u542B\u654F\u611F\u4FE1\u606F",
          description: "\u8BF7\u6C42\u4F53\u4E2D\u53EF\u80FD\u5305\u542B\u5BC6\u7801\u3001\u4EE4\u724C\u7B49\u654F\u611F\u4FE1\u606F"
        });
      }
      const headers = parsedInfo.value.headers || {};
      if (headers["Authorization"] && headers["Authorization"].startsWith("Basic ")) {
        issues.push({
          type: "basic-auth",
          severity: "medium",
          title: "\u4F7F\u7528 Basic \u8BA4\u8BC1",
          description: "Basic \u8BA4\u8BC1\u5C06\u51ED\u636E\u4EE5 Base64 \u7F16\u7801\u4F20\u8F93\uFF0C\u5BB9\u6613\u88AB\u89E3\u7801"
        });
      }
      const securityHeaders = ["Content-Security-Policy", "X-Frame-Options", "X-Content-Type-Options"];
      const missingSecurityHeaders = securityHeaders.filter((header) => !headers[header]);
      if (missingSecurityHeaders.length > 0) {
        issues.push({
          type: "missing-headers",
          severity: "low",
          title: "\u7F3A\u5C11\u5B89\u5168\u5934",
          description: `\u5EFA\u8BAE\u6DFB\u52A0\u5B89\u5168\u5934: ${missingSecurityHeaders.join(", ")}`
        });
      }
      return issues;
    });
    const getHeaderDescription = (headerName) => {
      const descriptions = {
        "Accept": "\u6307\u5B9A\u5BA2\u6237\u7AEF\u80FD\u591F\u63A5\u6536\u7684\u5185\u5BB9\u7C7B\u578B",
        "Accept-Encoding": "\u6307\u5B9A\u5BA2\u6237\u7AEF\u652F\u6301\u7684\u7F16\u7801\u65B9\u5F0F",
        "Accept-Language": "\u6307\u5B9A\u5BA2\u6237\u7AEF\u504F\u597D\u7684\u8BED\u8A00",
        "Authorization": "\u5305\u542B\u8BA4\u8BC1\u4FE1\u606F",
        "Cache-Control": "\u6307\u5B9A\u7F13\u5B58\u7B56\u7565",
        "Connection": "\u63A7\u5236\u8FDE\u63A5\u662F\u5426\u4FDD\u6301\u6D3B\u8DC3",
        "Content-Length": "\u8BF7\u6C42\u4F53\u7684\u5B57\u8282\u957F\u5EA6",
        "Content-Type": "\u8BF7\u6C42\u4F53\u7684\u5A92\u4F53\u7C7B\u578B",
        "Cookie": "\u5305\u542B\u5BA2\u6237\u7AEF\u7684 cookie \u4FE1\u606F",
        "Host": "\u6307\u5B9A\u8BF7\u6C42\u7684\u670D\u52A1\u5668\u57DF\u540D\u548C\u7AEF\u53E3",
        "If-Modified-Since": "\u6761\u4EF6\u8BF7\u6C42\uFF0C\u68C0\u67E5\u8D44\u6E90\u662F\u5426\u4FEE\u6539",
        "If-None-Match": "\u6761\u4EF6\u8BF7\u6C42\uFF0C\u68C0\u67E5 ETag \u662F\u5426\u5339\u914D",
        "Origin": "\u6307\u793A\u8BF7\u6C42\u7684\u6765\u6E90",
        "Referer": "\u6307\u793A\u8BF7\u6C42\u7684\u6765\u6E90\u9875\u9762",
        "User-Agent": "\u5305\u542B\u5BA2\u6237\u7AEF\u4FE1\u606F",
        "X-Requested-With": "\u6807\u8BC6 XMLHttpRequest \u8BF7\u6C42"
      };
      return descriptions[headerName] || "";
    };
    const isJsonBody = (body) => {
      if (!body) return false;
      try {
        JSON.parse(body);
        return true;
      } catch {
        return false;
      }
    };
    const getSecurityIcon = (severity) => {
      switch (severity) {
        case "high":
          return AlertTriangle;
        case "medium":
          return AlertCircle;
        case "low":
          return HelpCircle;
        default:
          return HelpCircle;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><div class="flex items-center gap-4 mb-4"><div class="p-3 bg-primary/10 rounded-lg">`);
      _push(ssrRenderComponent(unref(SearchCode), { class: "h-8 w-8 text-primary" }, null, _parent));
      _push(`</div><h1 class="text-3xl font-bold text-foreground">HTTP\u8BF7\u6C42\u5206\u6790\u5668 - \u5728\u7EBFHTTP\u8BF7\u6C42\u89E3\u6790\u4E0E\u5206\u6790\u5DE5\u5177</h1></div><p class="text-muted-foreground"> \u514D\u8D39\u5728\u7EBFHTTP\u8BF7\u6C42\u5206\u6790\u5DE5\u5177\uFF0C\u89E3\u6790HTTP\u8BF7\u6C42\u5934\u3001\u53C2\u6570\u3001cookies\u7B49\uFF0C\u652F\u6301cURL\u5BFC\u5165\u3001\u5B89\u5168\u5206\u6790\u548C\u591A\u79CD\u683C\u5F0F\u5BFC\u51FA\u3002\u7EAF\u672C\u5730\u5904\u7406\uFF0C\u6570\u636E\u5B89\u5168\u53EF\u9760\u3002 </p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full space-y-6"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Edit), { class: "h-5 w-5 text-primary" }, null, _parent));
      _push(`<h2 class="text-lg font-semibold text-foreground">\u8F93\u5165 HTTP \u8BF7\u6C42</h2></div><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u7C98\u8D34 </button></div></div><div class="flex-1 flex flex-col space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u8F93\u5165\u65B9\u5F0F</label><div class="flex space-x-4"><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(inputMode.value, "raw")) ? " checked" : ""} type="radio" value="raw" class="mr-2 border-border text-primary focus:ring-primary"><span class="text-sm text-foreground">\u539F\u59CB\u8BF7\u6C42</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(inputMode.value, "url")) ? " checked" : ""} type="radio" value="url" class="mr-2 border-border text-primary focus:ring-primary"><span class="text-sm text-foreground">URL \u8BF7\u6C42</span></label></div></div>`);
      if (inputMode.value === "raw") {
        _push(`<div class="flex-1 flex flex-col"><label class="block text-sm font-medium text-foreground mb-2">\u539F\u59CB HTTP \u8BF7\u6C42</label><textarea placeholder="GET /api/users?page=1&amp;limit=10 HTTP/1.1
Host: api.example.com
User-Agent: Mozilla/5.0
Authorization: Bearer token123
Content-Type: application/json" class="flex-1 w-full p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm">${ssrInterpolate(rawRequest.value)}</textarea></div>`);
      } else {
        _push(`<div class="flex-1 flex flex-col space-y-3"><div><label class="block text-sm font-medium text-foreground mb-2">\u8BF7\u6C42\u65B9\u6CD5</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="GET"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "GET") : ssrLooseEqual(urlRequest.value.method, "GET")) ? " selected" : ""}>GET</option><option value="POST"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "POST") : ssrLooseEqual(urlRequest.value.method, "POST")) ? " selected" : ""}>POST</option><option value="PUT"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "PUT") : ssrLooseEqual(urlRequest.value.method, "PUT")) ? " selected" : ""}>PUT</option><option value="DELETE"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "DELETE") : ssrLooseEqual(urlRequest.value.method, "DELETE")) ? " selected" : ""}>DELETE</option><option value="PATCH"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "PATCH") : ssrLooseEqual(urlRequest.value.method, "PATCH")) ? " selected" : ""}>PATCH</option><option value="HEAD"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "HEAD") : ssrLooseEqual(urlRequest.value.method, "HEAD")) ? " selected" : ""}>HEAD</option><option value="OPTIONS"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "OPTIONS") : ssrLooseEqual(urlRequest.value.method, "OPTIONS")) ? " selected" : ""}>OPTIONS</option></select></div><div><label class="block text-sm font-medium text-foreground mb-2">URL</label><input${ssrRenderAttr("value", urlRequest.value.url)} type="text" placeholder="https://api.example.com/users?page=1&amp;limit=10" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div><div><label class="block text-sm font-medium text-foreground mb-2">\u8BF7\u6C42\u5934 (\u6BCF\u884C\u4E00\u4E2A)</label><textarea placeholder="Content-Type: application/json
Authorization: Bearer token123" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm" rows="4">${ssrInterpolate(urlRequest.value.headers)}</textarea></div><div><label class="block text-sm font-medium text-foreground mb-2">\u8BF7\u6C42\u4F53 (\u53EF\u9009)</label><textarea placeholder="\u8BF7\u6C42\u4F53\u5185\u5BB9" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm" rows="4">${ssrInterpolate(urlRequest.value.body)}</textarea></div></div>`);
      }
      _push(`<div><label class="block text-sm font-medium text-foreground mb-2">\u5FEB\u901F\u793A\u4F8B</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="">\u9009\u62E9\u793A\u4F8B...</option><option value="get">GET \u8BF7\u6C42\u793A\u4F8B</option><option value="post">POST \u8BF7\u6C42\u793A\u4F8B</option><option value="put">PUT \u8BF7\u6C42\u793A\u4F8B</option><option value="auth">\u5E26\u8BA4\u8BC1\u7684\u8BF7\u6C42</option><option value="upload">\u6587\u4EF6\u4E0A\u4F20\u8BF7\u6C42</option></select></div></div></div><div class="p-4 bg-card border border-border rounded-lg"><div class="flex items-center gap-2 mb-3">`);
      _push(ssrRenderComponent(unref(Upload), { class: "h-5 w-5 text-primary" }, null, _parent));
      _push(`<h2 class="text-lg font-semibold text-foreground">\u5BFC\u5165\u8BF7\u6C42</h2></div><div class="space-y-3"><div><label class="block text-sm font-medium text-foreground mb-2">\u4ECE\u6D4F\u89C8\u5668\u5F00\u53D1\u8005\u5DE5\u5177\u5BFC\u5165</label><p class="text-sm text-muted-foreground">\u5728\u6D4F\u89C8\u5668\u4E2D\u53F3\u952E\u8BF7\u6C42 \u2192 Copy \u2192 Copy as cURL\uFF0C\u7136\u540E\u7C98\u8D34\u5230\u4E0A\u65B9\u8F93\u5165\u6846</p></div><div><label class="block text-sm font-medium text-foreground mb-2">\u4ECE Postman \u5BFC\u5165</label><p class="text-sm text-muted-foreground">\u5728 Postman \u4E2D\u70B9\u51FB Code \u2192 cURL\uFF0C\u7136\u540E\u590D\u5236\u5230\u4E0A\u65B9\u8F93\u5165\u6846</p></div></div></div><div class="flex flex-col h-full space-y-4 overflow-y-auto">`);
      if (parsedInfo.value) {
        _push(`<div class="p-4 bg-card border border-border rounded-lg"><div class="flex items-center gap-2 mb-3">`);
        _push(ssrRenderComponent(unref(Info), { class: "h-5 w-5 text-primary" }, null, _parent));
        _push(`<h2 class="text-lg font-semibold text-foreground">\u57FA\u672C\u4FE1\u606F</h2></div><div class="space-y-3"><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">\u8BF7\u6C42\u65B9\u6CD5</span><span class="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">${ssrInterpolate(parsedInfo.value.method)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">\u534F\u8BAE\u7248\u672C</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(parsedInfo.value.protocol || "HTTP/1.1")}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">\u4E3B\u673A</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(parsedInfo.value.host)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">\u8DEF\u5F84</span><span class="text-sm font-mono text-foreground">${ssrInterpolate(parsedInfo.value.path)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsedInfo.value && parsedInfo.value.queryParams && Object.keys(parsedInfo.value.queryParams).length > 0) {
        _push(`<div class="p-4 bg-card border border-border rounded-lg"><div class="flex items-center gap-2 mb-3">`);
        _push(ssrRenderComponent(unref(Link), { class: "h-5 w-5 text-primary" }, null, _parent));
        _push(`<h2 class="text-lg font-semibold text-foreground">URL \u53C2\u6570</h2></div><div class="space-y-2"><!--[-->`);
        ssrRenderList(parsedInfo.value.queryParams, (value, key) => {
          _push(`<div class="flex items-center justify-between p-2 bg-muted rounded"><span class="text-sm font-medium text-foreground">${ssrInterpolate(key)}</span><span class="text-sm text-muted-foreground">${ssrInterpolate(value)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsedInfo.value && parsedInfo.value.headers && Object.keys(parsedInfo.value.headers).length > 0) {
        _push(`<div class="p-4 bg-card border border-border rounded-lg"><div class="flex items-center gap-2 mb-3">`);
        _push(ssrRenderComponent(unref(FileText), { class: "h-5 w-5 text-primary" }, null, _parent));
        _push(`<h2 class="text-lg font-semibold text-foreground">\u8BF7\u6C42\u5934</h2></div><div class="overflow-x-auto"><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><th class="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">\u540D\u79F0</th><th class="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">\u503C</th><th class="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">\u8BF4\u660E</th></tr></thead><tbody class="divide-y divide-border"><!--[-->`);
        ssrRenderList(parsedInfo.value.headers, (value, key) => {
          _push(`<tr><td class="px-4 py-3 text-sm font-medium text-foreground">${ssrInterpolate(key)}</td><td class="px-4 py-3 text-sm text-muted-foreground break-all">${ssrInterpolate(value)}</td><td class="px-4 py-3 text-sm text-muted-foreground">${ssrInterpolate(getHeaderDescription(key))}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsedInfo.value && parsedInfo.value.cookies && parsedInfo.value.cookies.length > 0) {
        _push(`<div class="p-4 bg-card border border-border rounded-lg"><div class="flex items-center gap-2 mb-3">`);
        _push(ssrRenderComponent(unref(Cookie), { class: "h-5 w-5 text-primary" }, null, _parent));
        _push(`<h2 class="text-lg font-semibold text-foreground">Cookies</h2></div><div class="space-y-2"><!--[-->`);
        ssrRenderList(parsedInfo.value.cookies, (cookie) => {
          _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-1"><span class="text-sm font-medium text-foreground">${ssrInterpolate(cookie.name)}</span><div class="flex items-center gap-2">`);
          if (cookie.secure) {
            _push(`<span class="text-xs px-2 py-1 bg-green-500/10 text-green-600 rounded">Secure</span>`);
          } else {
            _push(`<!---->`);
          }
          if (cookie.httpOnly) {
            _push(`<span class="text-xs px-2 py-1 bg-blue-500/10 text-blue-600 rounded">HttpOnly</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="text-sm text-muted-foreground">\u503C: ${ssrInterpolate(cookie.value)}</div>`);
          if (cookie.domain) {
            _push(`<div class="text-xs text-muted-foreground">\u57DF: ${ssrInterpolate(cookie.domain)}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (cookie.path) {
            _push(`<div class="text-xs text-muted-foreground">\u8DEF\u5F84: ${ssrInterpolate(cookie.path)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsedInfo.value && parsedInfo.value.body) {
        _push(`<div class="p-4 bg-card border border-border rounded-lg"><div class="flex items-center gap-2 mb-3">`);
        _push(ssrRenderComponent(unref(FileCode), { class: "h-5 w-5 text-primary" }, null, _parent));
        _push(`<h2 class="text-lg font-semibold text-foreground">\u8BF7\u6C42\u4F53</h2></div><div><div class="flex items-center justify-between mb-2"><span class="text-sm text-muted-foreground">\u5185\u5BB9\u7C7B\u578B: ${ssrInterpolate(parsedInfo.value.contentType || "\u672A\u77E5")}</span>`);
        if (isJsonBody(parsedInfo.value.body)) {
          _push(`<button class="text-sm text-primary hover:text-primary/80"> \u683C\u5F0F\u5316 </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm">${ssrInterpolate(formattedBody.value)}</pre></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsedInfo.value && parsedInfo.value.formData && Object.keys(parsedInfo.value.formData).length > 0) {
        _push(`<div class="p-4 bg-card border border-border rounded-lg"><div class="flex items-center gap-2 mb-3">`);
        _push(ssrRenderComponent(unref(FileInput), { class: "h-5 w-5 text-primary" }, null, _parent));
        _push(`<h2 class="text-lg font-semibold text-foreground">\u8868\u5355\u6570\u636E</h2></div><div class="space-y-2"><!--[-->`);
        ssrRenderList(parsedInfo.value.formData, (value, key) => {
          _push(`<div class="flex items-center justify-between p-2 bg-muted rounded"><span class="text-sm font-medium text-foreground">${ssrInterpolate(key)}</span><span class="text-sm text-muted-foreground">${ssrInterpolate(value)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsedInfo.value) {
        _push(`<div class="p-4 bg-card border border-border rounded-lg"><div class="flex items-center gap-2 mb-3">`);
        _push(ssrRenderComponent(unref(Shield), { class: "h-5 w-5 text-primary" }, null, _parent));
        _push(`<h2 class="text-lg font-semibold text-foreground">\u5B89\u5168\u5206\u6790</h2></div><div class="space-y-3"><!--[-->`);
        ssrRenderList(securityIssues.value, (issue) => {
          _push(`<div class="${ssrRenderClass([issue.severity === "high" ? "bg-destructive/10" : issue.severity === "medium" ? "bg-yellow-500/10" : "bg-blue-500/10", "p-3 rounded-lg"])}"><div class="flex items-center">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getSecurityIcon(issue.severity)), {
            class: [
              "h-5 w-5 mr-2",
              issue.severity === "high" ? "text-destructive" : issue.severity === "medium" ? "text-yellow-600" : "text-blue-600"
            ]
          }, null), _parent);
          _push(`<span class="font-medium text-sm text-foreground">${ssrInterpolate(issue.title)}</span></div><p class="text-sm text-muted-foreground mt-1">${ssrInterpolate(issue.description)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsedInfo.value) {
        _push(`<div class="p-4 bg-card border border-border rounded-lg"><div class="flex items-center gap-2 mb-3">`);
        _push(ssrRenderComponent(unref(Download), { class: "h-5 w-5 text-primary" }, null, _parent));
        _push(`<h2 class="text-lg font-semibold text-foreground">\u5BFC\u51FA\u9009\u9879</h2></div><div class="flex flex-wrap gap-2"><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors"> \u5BFC\u51FA\u4E3A cURL </button><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors"> \u5BFC\u51FA\u4E3A HAR </button><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors"> \u5BFC\u51FA\u4E3A JSON </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F HTTP \u8BF7\u6C42\u5206\u6790\uFF1F </h2><p class="text-muted-foreground mb-4"> HTTP \u8BF7\u6C42\u5206\u6790\u662F\u6307\u5BF9 HTTP \u534F\u8BAE\u7684\u8BF7\u6C42\u8FDB\u884C\u89E3\u6790\u3001\u68C0\u67E5\u548C\u7406\u89E3\u7684\u8FC7\u7A0B\u3002HTTP \u534F\u8BAE\u662F\u4E92\u8054\u7F51\u4E0A\u5E94\u7528\u6700\u4E3A\u5E7F\u6CDB\u7684\u4E00\u79CD\u7F51\u7EDC\u534F\u8BAE\uFF0C \u6240\u6709\u7684 WWW \u6587\u4EF6\u90FD\u5FC5\u987B\u9075\u5B88\u8FD9\u4E2A\u6807\u51C6\u3002\u901A\u8FC7\u5206\u6790 HTTP \u8BF7\u6C42\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u4E86\u89E3\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u901A\u4FE1\u7EC6\u8282\uFF0C \u5305\u62EC\u8BF7\u6C42\u65B9\u6CD5\u3001\u8BF7\u6C42\u5934\u3001\u8BF7\u6C42\u4F53\u3001\u53C2\u6570\u7B49\u4FE1\u606F\u3002 </p><p class="text-muted-foreground mb-6"> HTTP \u8BF7\u6C42\u5206\u6790\u5DE5\u5177\u53EF\u4EE5\u5E2E\u52A9\u5F00\u53D1\u8005\u548C\u6D4B\u8BD5\u4EBA\u5458\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\u3001\u4F18\u5316\u6027\u80FD\u3001\u8C03\u8BD5 API \u63A5\u53E3\u3002 \u5B83\u80FD\u591F\u5C06\u590D\u6742\u7684 HTTP \u8BF7\u6C42\u4FE1\u606F\u4EE5\u7ED3\u6784\u5316\u7684\u65B9\u5F0F\u5C55\u793A\u51FA\u6765\uFF0C\u8BA9\u7528\u6237\u80FD\u591F\u6E05\u6670\u5730\u4E86\u89E3\u8BF7\u6C42\u7684\u5404\u4E2A\u7EC4\u6210\u90E8\u5206\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u9009\u62E9\u8F93\u5165\u65B9\u5F0F\uFF1A\u53EF\u4EE5\u8F93\u5165\u539F\u59CB HTTP \u8BF7\u6C42\u6587\u672C\uFF0C\u6216\u901A\u8FC7 URL \u6784\u5EFA\u5668\u6784\u5EFA\u8BF7\u6C42</li><li>\u8F93\u5165 HTTP \u8BF7\u6C42\u5185\u5BB9\uFF1A\u7C98\u8D34\u6216\u8F93\u5165\u8BF7\u6C42\u4FE1\u606F\uFF0C\u5DE5\u5177\u4F1A\u5B9E\u65F6\u89E3\u6790</li><li>\u67E5\u770B\u5206\u6790\u7ED3\u679C\uFF1A\u5728\u53F3\u4FA7\u67E5\u770B\u89E3\u6790\u51FA\u7684\u8BF7\u6C42\u5934\u3001\u53C2\u6570\u3001cookies \u7B49\u4FE1\u606F</li><li>\u5B89\u5168\u5206\u6790\uFF1A\u5DE5\u5177\u4F1A\u81EA\u52A8\u68C0\u67E5\u8BF7\u6C42\u4E2D\u7684\u5B89\u5168\u95EE\u9898</li><li>\u5BFC\u51FA\u7ED3\u679C\uFF1A\u53EF\u4EE5\u5C06\u5206\u6790\u7ED3\u679C\u5BFC\u51FA\u4E3A cURL\u3001HAR \u6216 JSON \u683C\u5F0F</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u591A\u79CD\u8F93\u5165\u65B9\u5F0F</strong>\uFF1A\u652F\u6301\u539F\u59CB\u8BF7\u6C42\u6587\u672C\u8F93\u5165\u548C URL \u6784\u5EFA\u5668\u4E24\u79CD\u65B9\u5F0F</li><li><strong>\u5B9E\u65F6\u89E3\u6790</strong>\uFF1A\u8F93\u5165\u5185\u5BB9\u65F6\u81EA\u52A8\u89E3\u6790\uFF0C\u65E0\u9700\u624B\u52A8\u89E6\u53D1</li><li><strong>\u5168\u9762\u7684\u8BF7\u6C42\u5206\u6790</strong>\uFF1A\u89E3\u6790\u8BF7\u6C42\u65B9\u6CD5\u3001URL\u3001\u53C2\u6570\u3001\u8BF7\u6C42\u5934\u3001cookies\u3001\u8BF7\u6C42\u4F53\u7B49</li><li><strong>\u5B89\u5168\u68C0\u67E5</strong>\uFF1A\u81EA\u52A8\u68C0\u6D4B\u8BF7\u6C42\u4E2D\u7684\u5B89\u5168\u9690\u60A3</li><li><strong>\u591A\u79CD\u5BFC\u51FA\u683C\u5F0F</strong>\uFF1A\u652F\u6301\u5BFC\u51FA\u4E3A cURL \u547D\u4EE4\u3001HAR \u6587\u4EF6\u548C JSON \u683C\u5F0F</li><li><strong>\u672C\u5730\u5904\u7406</strong>\uFF1A\u6240\u6709\u5904\u7406\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u4FDD\u62A4\u6570\u636E\u9690\u79C1</li><li><strong>\u5FEB\u901F\u793A\u4F8B</strong>\uFF1A\u63D0\u4F9B\u591A\u79CD\u5E38\u7528\u8BF7\u6C42\u7684\u793A\u4F8B\uFF0C\u65B9\u4FBF\u5FEB\u901F\u4E0A\u624B</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">HTTP \u8BF7\u6C42\u5206\u6790\u5DE5\u5177\u5B89\u5168\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5B8C\u5168\u5B89\u5168\u3002\u672C\u5DE5\u5177\u91C7\u7528\u7EAF\u524D\u7AEF\u6280\u672F\u5B9E\u73B0\uFF0C\u6240\u6709 HTTP \u8BF7\u6C42\u89E3\u6790\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C \u8BF7\u6C42\u6570\u636E\u4E0D\u4F1A\u53D1\u9001\u5230\u4EFB\u4F55\u670D\u52A1\u5668\u3002\u60A8\u53EF\u4EE5\u653E\u5FC3\u5206\u6790\u5305\u542B\u654F\u611F\u4FE1\u606F\u7684 HTTP \u8BF7\u6C42\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u652F\u6301\u54EA\u4E9B HTTP \u65B9\u6CD5\uFF1F</h3><p class="text-muted-foreground mt-1"> \u672C\u5DE5\u5177\u652F\u6301\u6240\u6709\u6807\u51C6\u7684 HTTP \u65B9\u6CD5\uFF0C\u5305\u62EC GET\u3001POST\u3001PUT\u3001DELETE\u3001PATCH\u3001HEAD\u3001OPTIONS \u7B49\u3002 \u540C\u65F6\u4E5F\u652F\u6301\u81EA\u5B9A\u4E49\u7684 HTTP \u65B9\u6CD5\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u4ECE\u6D4F\u89C8\u5668\u590D\u5236 HTTP \u8BF7\u6C42\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5728 Chrome\u3001Firefox \u7B49\u73B0\u4EE3\u6D4F\u89C8\u5668\u7684\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\uFF1A 1. \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF08F12\uFF09 2. \u5207\u6362\u5230 Network\uFF08\u7F51\u7EDC\uFF09\u6807\u7B7E 3. \u627E\u5230\u8981\u5206\u6790\u7684\u8BF7\u6C42 4. \u53F3\u952E\u70B9\u51FB\u8BF7\u6C42 \u2192 Copy \u2192 Copy as cURL 5. \u5C06\u590D\u5236\u7684\u5185\u5BB9\u7C98\u8D34\u5230\u672C\u5DE5\u5177\u7684\u8F93\u5165\u6846 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4EC0\u4E48\u662F HAR \u683C\u5F0F\uFF1F</h3><p class="text-muted-foreground mt-1"> HAR\uFF08HTTP Archive\uFF09\u662F\u4E00\u4E2A\u7528\u6765\u8BB0\u5F55 HTTP \u8BF7\u6C42\u4FE1\u606F\u7684\u6807\u51C6\u683C\u5F0F\uFF0C\u88AB\u5E7F\u6CDB\u7528\u4E8E\u6027\u80FD\u5206\u6790\u3001 \u8C03\u8BD5\u548C\u6D4B\u8BD5\u3002HAR \u6587\u4EF6\u5305\u542B\u4E86\u8BF7\u6C42\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5305\u62EC URL\u3001\u65B9\u6CD5\u3001\u8BF7\u6C42\u5934\u3001\u54CD\u5E94\u5934\u3001\u65F6\u95F4\u6233\u7B49\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/request-analysis.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=request-analysis-DStd_axd.mjs.map
