import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { X, Info, FileText, ArrowRight, Globe, Code } from 'lucide-vue-next';
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
  __name: "swagger-viewer",
  __ssrInlineRender: true,
  setup(__props) {
    const inputMode = ref("url");
    const swaggerUrl = ref("");
    const documentContent = ref("");
    const swaggerDoc = ref(null);
    const loading = ref(false);
    const selectedEndpoint = ref(null);
    const response = ref(null);
    const testUrl = ref("");
    const pathParams = ref([]);
    const queryParams = ref([]);
    const requestBody = ref(null);
    const requestBodyContent = ref("{}");
    const getMethodColor = (method) => {
      const colors = {
        get: "bg-green-100 text-green-800",
        post: "bg-blue-100 text-blue-800",
        put: "bg-yellow-100 text-yellow-800",
        delete: "bg-red-100 text-red-800",
        patch: "bg-purple-100 text-purple-800"
      };
      return colors[method] || "bg-gray-100 text-gray-800";
    };
    useSeoMeta({
      title: "Swagger \u67E5\u770B\u5668 - \u5728\u7EBF API \u6587\u6863\u67E5\u770B\u6D4B\u8BD5\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF Swagger/OpenAPI \u6587\u6863\u67E5\u770B\u548C\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u652F\u6301 API \u63A5\u53E3\u8C03\u8BD5\u3001\u53C2\u6570\u914D\u7F6E\u548C\u54CD\u5E94\u67E5\u770B\u3002",
      keywords: ["swagger", "openapi", "api", "\u6587\u6863\u67E5\u770B", "\u63A5\u53E3\u6D4B\u8BD5", "api\u8C03\u8BD5", "rest api"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Swagger \u67E5\u770B\u5668</h1><p class="text-muted-foreground">\u5728\u7EBF\u67E5\u770B\u548C\u6D4B\u8BD5 Swagger/OpenAPI \u6587\u6863\uFF0C\u652F\u6301 API \u8C03\u8BD5\u548C\u63A5\u53E3\u6D4B\u8BD5</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="lg:col-span-1 space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6587\u6863\u6765\u6E90</h2><div class="space-y-3"><button class="${ssrRenderClass([
        "w-full px-4 py-3 rounded-md transition-colors text-left",
        inputMode.value === "url" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
      ])}"><div class="font-medium">URL \u5BFC\u5165</div><div class="text-xs opacity-80">\u4ECE URL \u52A0\u8F7D Swagger \u6587\u6863</div></button><button class="${ssrRenderClass([
        "w-full px-4 py-3 rounded-md transition-colors text-left",
        inputMode.value === "json" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
      ])}"><div class="font-medium">JSON \u8F93\u5165</div><div class="text-xs opacity-80">\u76F4\u63A5\u8F93\u5165 JSON/YAML \u5185\u5BB9</div></button><button class="w-full px-4 py-3 bg-muted rounded-md hover:bg-muted/80 transition-colors text-left"><div class="font-medium">\u52A0\u8F7D\u793A\u4F8B</div><div class="text-xs opacity-80">\u67E5\u770B\u793A\u4F8B API \u6587\u6863</div></button></div></div>`);
      if (inputMode.value === "url") {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">Swagger URL</h2><div class="space-y-3"><input${ssrRenderAttr("value", swaggerUrl.value)} type="url" placeholder="https://api.example.com/swagger.json" class="w-full px-3 py-2 border rounded-md text-sm"><button${ssrIncludeBooleanAttr(!swaggerUrl.value || loading.value) ? " disabled" : ""} class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(loading.value ? "\u52A0\u8F7D\u4E2D..." : "\u52A0\u8F7D\u6587\u6863")}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (inputMode.value === "json") {
        _push(`<div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u6587\u6863\u5185\u5BB9</h2><div class="flex gap-2"><button class="text-sm text-primary hover:text-primary/80 transition-colors"> \u683C\u5F0F\u5316 </button><button class="text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><textarea placeholder="\u7C98\u8D34 JSON/YAML \u683C\u5F0F\u7684 Swagger \u6587\u6863..." class="w-full h-64 px-3 py-2 border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(documentContent.value)}</textarea><button${ssrIncludeBooleanAttr(!documentContent.value) ? " disabled" : ""} class="w-full mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u89E3\u6790\u6587\u6863 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-4">`);
      if (swaggerDoc.value) {
        _push(`<div class="bg-card rounded-lg p-6"><div class="flex items-start justify-between mb-4"><div><h2 class="text-2xl font-bold mb-2">${ssrInterpolate(((_a = swaggerDoc.value.info) == null ? void 0 : _a.title) || "API Documentation")}</h2><p class="text-muted-foreground mb-2">${ssrInterpolate((_b = swaggerDoc.value.info) == null ? void 0 : _b.description)}</p><div class="flex gap-4 text-sm text-muted-foreground"><span>\u7248\u672C\uFF1A${ssrInterpolate((_c = swaggerDoc.value.info) == null ? void 0 : _c.version)}</span>`);
        if ((_d = swaggerDoc.value.info) == null ? void 0 : _d.contact) {
          _push(`<span>\u8054\u7CFB\uFF1A${ssrInterpolate(swaggerDoc.value.info.contact.email || swaggerDoc.value.info.contact.name)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (swaggerDoc.value.servers && swaggerDoc.value.servers.length > 0) {
          _push(`<div class="text-right"><div class="text-sm text-muted-foreground mb-1">\u670D\u52A1\u5668\u5730\u5740</div><div class="font-mono text-sm">${ssrInterpolate(swaggerDoc.value.servers[0].url)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if ((_e = swaggerDoc.value.components) == null ? void 0 : _e.securitySchemes) {
          _push(`<div class="mt-4 p-4 bg-muted/50 rounded-lg"><h3 class="font-medium mb-2">\u8BA4\u8BC1\u65B9\u5F0F</h3><div class="flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(swaggerDoc.value.components.securitySchemes, (scheme, name) => {
            _push(`<span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">${ssrInterpolate(scheme.type)} (${ssrInterpolate(name)}) </span>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (swaggerDoc.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">API \u63A5\u53E3</h2><div class="space-y-4"><!--[-->`);
        ssrRenderList(swaggerDoc.value.paths, (path, pathName) => {
          _push(`<div class="border rounded-lg overflow-hidden"><div class="bg-muted/50 px-4 py-3"><code class="font-mono">${ssrInterpolate(pathName)}</code></div><div class="divide-y"><!--[-->`);
          ssrRenderList(path, (method, methodName) => {
            _push(`<div class="p-4 hover:bg-muted/30 transition-colors cursor-pointer"><div class="flex items-center gap-3 mb-2"><span class="${ssrRenderClass([
              "px-2 py-1 text-xs font-medium rounded",
              getMethodColor(methodName)
            ])}">${ssrInterpolate(methodName.toUpperCase())}</span><span class="font-medium">${ssrInterpolate(method.summary || method.operationId)}</span></div><p class="text-sm text-muted-foreground">${ssrInterpolate(method.description)}</p></div>`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedEndpoint.value) {
        _push(`<div class="bg-card rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold">\u6D4B\u8BD5 API</h2><button class="text-muted-foreground hover:text-foreground transition-colors">`);
        _push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent));
        _push(`</button></div><div class="space-y-4"><div><label class="text-sm font-medium">\u8BF7\u6C42 URL</label><div class="mt-2 flex gap-2"><input${ssrRenderAttr("value", testUrl.value)} type="text" readonly class="flex-1 px-3 py-2 border rounded-md bg-muted font-mono text-sm"><button${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50">${ssrInterpolate(loading.value ? "\u53D1\u9001\u4E2D..." : "\u53D1\u9001\u8BF7\u6C42")}</button></div></div>`);
        if (pathParams.value.length > 0) {
          _push(`<div><label class="text-sm font-medium">\u8DEF\u5F84\u53C2\u6570</label><div class="mt-2 grid grid-cols-2 gap-2"><!--[-->`);
          ssrRenderList(pathParams.value, (param) => {
            _push(`<div class="flex gap-2 items-center"><span class="text-sm font-mono">${ssrInterpolate(param.name)}</span><input${ssrRenderAttr("value", param.value)} type="text"${ssrRenderAttr("placeholder", param.example || "\u8F93\u5165\u503C")} class="flex-1 px-2 py-1 border rounded text-sm"></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (queryParams.value.length > 0) {
          _push(`<div><label class="text-sm font-medium">\u67E5\u8BE2\u53C2\u6570</label><div class="mt-2 space-y-2"><!--[-->`);
          ssrRenderList(queryParams.value, (param) => {
            _push(`<div class="flex gap-2 items-center"><span class="text-sm font-mono w-24">${ssrInterpolate(param.name)}</span><input${ssrRenderAttr("value", param.value)} type="text"${ssrRenderAttr("placeholder", param.example || param.description || "\u8F93\u5165\u503C")} class="flex-1 px-2 py-1 border rounded text-sm"><span class="text-xs text-muted-foreground">${ssrInterpolate(param.type)}</span></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (requestBody.value) {
          _push(`<div><label class="text-sm font-medium">\u8BF7\u6C42\u4F53</label><div class="mt-2"><textarea placeholder="{&quot;key&quot;: &quot;value&quot;}" class="w-full h-32 px-3 py-2 border rounded-md font-mono text-sm resize-none">${ssrInterpolate(requestBodyContent.value)}</textarea></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (response.value) {
          _push(`<div class="space-y-2"><div class="flex items-center gap-2"><label class="text-sm font-medium">\u54CD\u5E94\u7ED3\u679C</label><span class="${ssrRenderClass([
            "px-2 py-1 text-xs rounded",
            response.value.status < 400 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          ])}">${ssrInterpolate(response.value.status)}</span></div><div class="border rounded-lg p-4 bg-muted/30 max-h-64 overflow-auto"><pre class="text-sm whitespace-pre-wrap font-mono">${ssrInterpolate(response.value.data)}</pre></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u8BF4\u660E </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">1. \u52A0\u8F7D\u6587\u6863</h4><p>\u652F\u6301\u901A\u8FC7 URL \u6216\u76F4\u63A5\u7C98\u8D34 JSON/YAML \u5185\u5BB9\u7684\u65B9\u5F0F\u52A0\u8F7D Swagger/OpenAPI \u6587\u6863\u3002</p></div><div><h4 class="font-medium text-foreground mb-2">2. \u67E5\u770B\u63A5\u53E3</h4><p>\u6D4F\u89C8\u6240\u6709 API \u63A5\u53E3\uFF0C\u67E5\u770B\u8BF7\u6C42\u65B9\u6CD5\u3001\u8DEF\u5F84\u3001\u53C2\u6570\u548C\u54CD\u5E94\u683C\u5F0F\u3002</p></div><div><h4 class="font-medium text-foreground mb-2">3. \u6D4B\u8BD5\u63A5\u53E3</h4><p>\u76F4\u63A5\u5728\u7EBF\u6D4B\u8BD5 API \u63A5\u53E3\uFF0C\u652F\u6301\u53C2\u6570\u914D\u7F6E\u548C\u67E5\u770B\u54CD\u5E94\u7ED3\u679C\u3002</p></div><div><h4 class="font-medium text-foreground mb-2">\u652F\u6301\u7684\u7248\u672C</h4><p>\u652F\u6301 Swagger 2.0 \u548C OpenAPI 3.0/3.1 \u89C4\u8303\u3002</p></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/api-doc",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>API \u6587\u6863\u751F\u6210</p><p class="text-xs text-muted-foreground"${_scopeId}>\u751F\u6210 API \u6587\u6863</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "API \u6587\u6863\u751F\u6210"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u751F\u6210 API \u6587\u6863")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/http-client",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Globe), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>HTTP \u5BA2\u6237\u7AEF</p><p class="text-xs text-muted-foreground"${_scopeId}>\u53D1\u9001 HTTP \u8BF7\u6C42</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Globe), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "HTTP \u5BA2\u6237\u7AEF"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u53D1\u9001 HTTP \u8BF7\u6C42")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/json-formatter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Code), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSON \u683C\u5F0F\u5316</p><p class="text-xs text-muted-foreground"${_scopeId}>\u683C\u5F0F\u5316 JSON \u6570\u636E</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Code), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSON \u683C\u5F0F\u5316"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u683C\u5F0F\u5316 JSON \u6570\u636E")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/swagger-viewer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=swagger-viewer-DVZfzeSs.mjs.map
