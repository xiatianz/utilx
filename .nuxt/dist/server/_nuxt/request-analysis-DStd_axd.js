import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual, ssrInterpolate, ssrRenderAttr, ssrLooseContain, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrRenderStyle } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { SearchCode, Edit, Upload, Info, Link, FileText, Cookie, FileCode, FileInput, Shield, Download, HelpCircle, ChevronUp, FileJson, Code, Terminal, Lock, Wifi, Globe, ChevronDown, AlertCircle, AlertTriangle } from "lucide-vue-next";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "request-analysis",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "HTTP请求分析器 - 在线HTTP请求解析工具",
      meta: [
        { name: "description", content: "免费在线HTTP请求分析工具，解析HTTP请求头、参数、cookies等，支持多种格式的请求导入和导出。" },
        { name: "keywords", content: "HTTP请求分析,请求解析,HTTP头分析,URL参数解析,cookie分析,请求体分析" }
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
      if (!parsedInfo.value?.body) return "";
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
          title: "使用 HTTP 协议",
          description: "请求使用 HTTP 协议传输，数据未加密，可能被窃听"
        });
      }
      const body = parsedInfo.value.body || "";
      if (body.includes("password") || body.includes("token") || body.includes("secret")) {
        issues.push({
          type: "sensitive-data",
          severity: "high",
          title: "请求体包含敏感信息",
          description: "请求体中可能包含密码、令牌等敏感信息"
        });
      }
      const headers = parsedInfo.value.headers || {};
      if (headers["Authorization"] && headers["Authorization"].startsWith("Basic ")) {
        issues.push({
          type: "basic-auth",
          severity: "medium",
          title: "使用 Basic 认证",
          description: "Basic 认证将凭据以 Base64 编码传输，容易被解码"
        });
      }
      const securityHeaders = ["Content-Security-Policy", "X-Frame-Options", "X-Content-Type-Options"];
      const missingSecurityHeaders = securityHeaders.filter((header) => !headers[header]);
      if (missingSecurityHeaders.length > 0) {
        issues.push({
          type: "missing-headers",
          severity: "low",
          title: "缺少安全头",
          description: `建议添加安全头: ${missingSecurityHeaders.join(", ")}`
        });
      }
      return issues;
    });
    const getHeaderDescription = (headerName) => {
      const descriptions = {
        "Accept": "指定客户端能够接收的内容类型",
        "Accept-Encoding": "指定客户端支持的编码方式",
        "Accept-Language": "指定客户端偏好的语言",
        "Authorization": "包含认证信息",
        "Cache-Control": "指定缓存策略",
        "Connection": "控制连接是否保持活跃",
        "Content-Length": "请求体的字节长度",
        "Content-Type": "请求体的媒体类型",
        "Cookie": "包含客户端的 cookie 信息",
        "Host": "指定请求的服务器域名和端口",
        "If-Modified-Since": "条件请求，检查资源是否修改",
        "If-None-Match": "条件请求，检查 ETag 是否匹配",
        "Origin": "指示请求的来源",
        "Referer": "指示请求的来源页面",
        "User-Agent": "包含客户端信息",
        "X-Requested-With": "标识 XMLHttpRequest 请求"
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
      _push(`</div><h1 class="text-3xl font-bold text-foreground">HTTP请求分析器 - 在线HTTP请求解析与分析工具</h1></div><p class="text-muted-foreground"> 免费在线HTTP请求分析工具，解析HTTP请求头、参数、cookies等，支持cURL导入、安全分析和多种格式导出。纯本地处理，数据安全可靠。 </p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full space-y-6"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Edit), { class: "h-5 w-5 text-primary" }, null, _parent));
      _push(`<h2 class="text-lg font-semibold text-foreground">输入 HTTP 请求</h2></div><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 清空 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 粘贴 </button></div></div><div class="flex-1 flex flex-col space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">输入方式</label><div class="flex space-x-4"><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(inputMode.value, "raw")) ? " checked" : ""} type="radio" value="raw" class="mr-2 border-border text-primary focus:ring-primary"><span class="text-sm text-foreground">原始请求</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(inputMode.value, "url")) ? " checked" : ""} type="radio" value="url" class="mr-2 border-border text-primary focus:ring-primary"><span class="text-sm text-foreground">URL 请求</span></label></div></div>`);
      if (inputMode.value === "raw") {
        _push(`<div class="flex-1 flex flex-col"><label class="block text-sm font-medium text-foreground mb-2">原始 HTTP 请求</label><textarea placeholder="GET /api/users?page=1&amp;limit=10 HTTP/1.1
Host: api.example.com
User-Agent: Mozilla/5.0
Authorization: Bearer token123
Content-Type: application/json" class="flex-1 w-full p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm">${ssrInterpolate(rawRequest.value)}</textarea></div>`);
      } else {
        _push(`<div class="flex-1 flex flex-col space-y-3"><div><label class="block text-sm font-medium text-foreground mb-2">请求方法</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="GET"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "GET") : ssrLooseEqual(urlRequest.value.method, "GET")) ? " selected" : ""}>GET</option><option value="POST"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "POST") : ssrLooseEqual(urlRequest.value.method, "POST")) ? " selected" : ""}>POST</option><option value="PUT"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "PUT") : ssrLooseEqual(urlRequest.value.method, "PUT")) ? " selected" : ""}>PUT</option><option value="DELETE"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "DELETE") : ssrLooseEqual(urlRequest.value.method, "DELETE")) ? " selected" : ""}>DELETE</option><option value="PATCH"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "PATCH") : ssrLooseEqual(urlRequest.value.method, "PATCH")) ? " selected" : ""}>PATCH</option><option value="HEAD"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "HEAD") : ssrLooseEqual(urlRequest.value.method, "HEAD")) ? " selected" : ""}>HEAD</option><option value="OPTIONS"${ssrIncludeBooleanAttr(Array.isArray(urlRequest.value.method) ? ssrLooseContain(urlRequest.value.method, "OPTIONS") : ssrLooseEqual(urlRequest.value.method, "OPTIONS")) ? " selected" : ""}>OPTIONS</option></select></div><div><label class="block text-sm font-medium text-foreground mb-2">URL</label><input${ssrRenderAttr("value", urlRequest.value.url)} type="text" placeholder="https://api.example.com/users?page=1&amp;limit=10" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div><div><label class="block text-sm font-medium text-foreground mb-2">请求头 (每行一个)</label><textarea placeholder="Content-Type: application/json
Authorization: Bearer token123" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm" rows="4">${ssrInterpolate(urlRequest.value.headers)}</textarea></div><div><label class="block text-sm font-medium text-foreground mb-2">请求体 (可选)</label><textarea placeholder="请求体内容" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm" rows="4">${ssrInterpolate(urlRequest.value.body)}</textarea></div></div>`);
      }
      _push(`<div><label class="block text-sm font-medium text-foreground mb-2">快速示例</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="">选择示例...</option><option value="get">GET 请求示例</option><option value="post">POST 请求示例</option><option value="put">PUT 请求示例</option><option value="auth">带认证的请求</option><option value="upload">文件上传请求</option></select></div></div></div><div class="p-4 bg-card border border-border rounded-lg"><div class="flex items-center gap-2 mb-3">`);
      _push(ssrRenderComponent(unref(Upload), { class: "h-5 w-5 text-primary" }, null, _parent));
      _push(`<h2 class="text-lg font-semibold text-foreground">导入请求</h2></div><div class="space-y-3"><div><label class="block text-sm font-medium text-foreground mb-2">从浏览器开发者工具导入</label><p class="text-sm text-muted-foreground">在浏览器中右键请求 → Copy → Copy as cURL，然后粘贴到上方输入框</p></div><div><label class="block text-sm font-medium text-foreground mb-2">从 Postman 导入</label><p class="text-sm text-muted-foreground">在 Postman 中点击 Code → cURL，然后复制到上方输入框</p></div></div></div><div class="flex flex-col h-full space-y-4 overflow-y-auto">`);
      if (parsedInfo.value) {
        _push(`<div class="p-4 bg-card border border-border rounded-lg"><div class="flex items-center gap-2 mb-3">`);
        _push(ssrRenderComponent(unref(Info), { class: "h-5 w-5 text-primary" }, null, _parent));
        _push(`<h2 class="text-lg font-semibold text-foreground">基本信息</h2></div><div class="space-y-3"><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">请求方法</span><span class="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">${ssrInterpolate(parsedInfo.value.method)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">协议版本</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(parsedInfo.value.protocol || "HTTP/1.1")}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">主机</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(parsedInfo.value.host)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">路径</span><span class="text-sm font-mono text-foreground">${ssrInterpolate(parsedInfo.value.path)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsedInfo.value && parsedInfo.value.queryParams && Object.keys(parsedInfo.value.queryParams).length > 0) {
        _push(`<div class="p-4 bg-card border border-border rounded-lg"><div class="flex items-center gap-2 mb-3">`);
        _push(ssrRenderComponent(unref(Link), { class: "h-5 w-5 text-primary" }, null, _parent));
        _push(`<h2 class="text-lg font-semibold text-foreground">URL 参数</h2></div><div class="space-y-2"><!--[-->`);
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
        _push(`<h2 class="text-lg font-semibold text-foreground">请求头</h2></div><div class="overflow-x-auto"><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><th class="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">名称</th><th class="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">值</th><th class="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">说明</th></tr></thead><tbody class="divide-y divide-border"><!--[-->`);
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
          _push(`</div></div><div class="text-sm text-muted-foreground">值: ${ssrInterpolate(cookie.value)}</div>`);
          if (cookie.domain) {
            _push(`<div class="text-xs text-muted-foreground">域: ${ssrInterpolate(cookie.domain)}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (cookie.path) {
            _push(`<div class="text-xs text-muted-foreground">路径: ${ssrInterpolate(cookie.path)}</div>`);
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
        _push(`<h2 class="text-lg font-semibold text-foreground">请求体</h2></div><div><div class="flex items-center justify-between mb-2"><span class="text-sm text-muted-foreground">内容类型: ${ssrInterpolate(parsedInfo.value.contentType || "未知")}</span>`);
        if (isJsonBody(parsedInfo.value.body)) {
          _push(`<button class="text-sm text-primary hover:text-primary/80"> 格式化 </button>`);
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
        _push(`<h2 class="text-lg font-semibold text-foreground">表单数据</h2></div><div class="space-y-2"><!--[-->`);
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
        _push(`<h2 class="text-lg font-semibold text-foreground">安全分析</h2></div><div class="space-y-3"><!--[-->`);
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
        _push(`<h2 class="text-lg font-semibold text-foreground">导出选项</h2></div><div class="flex flex-wrap gap-2"><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors"> 导出为 cURL </button><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors"> 导出为 HAR </button><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors"> 导出为 JSON </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 HTTP 请求分析？ </h2><p class="text-muted-foreground mb-4"> HTTP 请求分析是指对 HTTP 协议的请求进行解析、检查和理解的过程。HTTP 协议是互联网上应用最为广泛的一种网络协议， 所有的 WWW 文件都必须遵守这个标准。通过分析 HTTP 请求，开发者可以了解客户端与服务器之间的通信细节， 包括请求方法、请求头、请求体、参数等信息。 </p><p class="text-muted-foreground mb-6"> HTTP 请求分析工具可以帮助开发者和测试人员快速定位问题、优化性能、调试 API 接口。 它能够将复杂的 HTTP 请求信息以结构化的方式展示出来，让用户能够清晰地了解请求的各个组成部分。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>选择输入方式：可以输入原始 HTTP 请求文本，或通过 URL 构建器构建请求</li><li>输入 HTTP 请求内容：粘贴或输入请求信息，工具会实时解析</li><li>查看分析结果：在右侧查看解析出的请求头、参数、cookies 等信息</li><li>安全分析：工具会自动检查请求中的安全问题</li><li>导出结果：可以将分析结果导出为 cURL、HAR 或 JSON 格式</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>多种输入方式</strong>：支持原始请求文本输入和 URL 构建器两种方式</li><li><strong>实时解析</strong>：输入内容时自动解析，无需手动触发</li><li><strong>全面的请求分析</strong>：解析请求方法、URL、参数、请求头、cookies、请求体等</li><li><strong>安全检查</strong>：自动检测请求中的安全隐患</li><li><strong>多种导出格式</strong>：支持导出为 cURL 命令、HAR 文件和 JSON 格式</li><li><strong>本地处理</strong>：所有处理都在浏览器本地完成，保护数据隐私</li><li><strong>快速示例</strong>：提供多种常用请求的示例，方便快速上手</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">HTTP 请求分析工具安全吗？</h3><p class="text-muted-foreground mt-1"> 完全安全。本工具采用纯前端技术实现，所有 HTTP 请求解析都在您的浏览器本地完成， 请求数据不会发送到任何服务器。您可以放心分析包含敏感信息的 HTTP 请求。 </p></div><div><h3 class="text-lg font-semibold text-foreground">支持哪些 HTTP 方法？</h3><p class="text-muted-foreground mt-1"> 本工具支持所有标准的 HTTP 方法，包括 GET、POST、PUT、DELETE、PATCH、HEAD、OPTIONS 等。 同时也支持自定义的 HTTP 方法。 </p></div><div><h3 class="text-lg font-semibold text-foreground">如何从浏览器复制 HTTP 请求？</h3><p class="text-muted-foreground mt-1"> 在 Chrome、Firefox 等现代浏览器的开发者工具中： 1. 打开开发者工具（F12） 2. 切换到 Network（网络）标签 3. 找到要分析的请求 4. 右键点击请求 → Copy → Copy as cURL 5. 将复制的内容粘贴到本工具的输入框 </p></div><div><h3 class="text-lg font-semibold text-foreground">什么是 HAR 格式？</h3><p class="text-muted-foreground mt-1"> HAR（HTTP Archive）是一个用来记录 HTTP 请求信息的标准格式，被广泛用于性能分析、 调试和测试。HAR 文件包含了请求的详细信息，包括 URL、方法、请求头、响应头、时间戳等。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=request-analysis-DStd_axd.js.map
