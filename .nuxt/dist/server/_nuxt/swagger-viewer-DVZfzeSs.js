import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { X, Info, FileText, ArrowRight, Globe, Code } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
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
      title: "Swagger 查看器 - 在线 API 文档查看测试工具",
      description: "免费的在线 Swagger/OpenAPI 文档查看和测试工具，支持 API 接口调试、参数配置和响应查看。",
      keywords: ["swagger", "openapi", "api", "文档查看", "接口测试", "api调试", "rest api"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Swagger 查看器</h1><p class="text-muted-foreground">在线查看和测试 Swagger/OpenAPI 文档，支持 API 调试和接口测试</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="lg:col-span-1 space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">文档来源</h2><div class="space-y-3"><button class="${ssrRenderClass([
        "w-full px-4 py-3 rounded-md transition-colors text-left",
        inputMode.value === "url" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
      ])}"><div class="font-medium">URL 导入</div><div class="text-xs opacity-80">从 URL 加载 Swagger 文档</div></button><button class="${ssrRenderClass([
        "w-full px-4 py-3 rounded-md transition-colors text-left",
        inputMode.value === "json" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
      ])}"><div class="font-medium">JSON 输入</div><div class="text-xs opacity-80">直接输入 JSON/YAML 内容</div></button><button class="w-full px-4 py-3 bg-muted rounded-md hover:bg-muted/80 transition-colors text-left"><div class="font-medium">加载示例</div><div class="text-xs opacity-80">查看示例 API 文档</div></button></div></div>`);
      if (inputMode.value === "url") {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">Swagger URL</h2><div class="space-y-3"><input${ssrRenderAttr("value", swaggerUrl.value)} type="url" placeholder="https://api.example.com/swagger.json" class="w-full px-3 py-2 border rounded-md text-sm"><button${ssrIncludeBooleanAttr(!swaggerUrl.value || loading.value) ? " disabled" : ""} class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(loading.value ? "加载中..." : "加载文档")}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (inputMode.value === "json") {
        _push(`<div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">文档内容</h2><div class="flex gap-2"><button class="text-sm text-primary hover:text-primary/80 transition-colors"> 格式化 </button><button class="text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><textarea placeholder="粘贴 JSON/YAML 格式的 Swagger 文档..." class="w-full h-64 px-3 py-2 border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(documentContent.value)}</textarea><button${ssrIncludeBooleanAttr(!documentContent.value) ? " disabled" : ""} class="w-full mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 解析文档 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-4">`);
      if (swaggerDoc.value) {
        _push(`<div class="bg-card rounded-lg p-6"><div class="flex items-start justify-between mb-4"><div><h2 class="text-2xl font-bold mb-2">${ssrInterpolate(swaggerDoc.value.info?.title || "API Documentation")}</h2><p class="text-muted-foreground mb-2">${ssrInterpolate(swaggerDoc.value.info?.description)}</p><div class="flex gap-4 text-sm text-muted-foreground"><span>版本：${ssrInterpolate(swaggerDoc.value.info?.version)}</span>`);
        if (swaggerDoc.value.info?.contact) {
          _push(`<span>联系：${ssrInterpolate(swaggerDoc.value.info.contact.email || swaggerDoc.value.info.contact.name)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (swaggerDoc.value.servers && swaggerDoc.value.servers.length > 0) {
          _push(`<div class="text-right"><div class="text-sm text-muted-foreground mb-1">服务器地址</div><div class="font-mono text-sm">${ssrInterpolate(swaggerDoc.value.servers[0].url)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (swaggerDoc.value.components?.securitySchemes) {
          _push(`<div class="mt-4 p-4 bg-muted/50 rounded-lg"><h3 class="font-medium mb-2">认证方式</h3><div class="flex flex-wrap gap-2"><!--[-->`);
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
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">API 接口</h2><div class="space-y-4"><!--[-->`);
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
        _push(`<div class="bg-card rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold">测试 API</h2><button class="text-muted-foreground hover:text-foreground transition-colors">`);
        _push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent));
        _push(`</button></div><div class="space-y-4"><div><label class="text-sm font-medium">请求 URL</label><div class="mt-2 flex gap-2"><input${ssrRenderAttr("value", testUrl.value)} type="text" readonly class="flex-1 px-3 py-2 border rounded-md bg-muted font-mono text-sm"><button${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50">${ssrInterpolate(loading.value ? "发送中..." : "发送请求")}</button></div></div>`);
        if (pathParams.value.length > 0) {
          _push(`<div><label class="text-sm font-medium">路径参数</label><div class="mt-2 grid grid-cols-2 gap-2"><!--[-->`);
          ssrRenderList(pathParams.value, (param) => {
            _push(`<div class="flex gap-2 items-center"><span class="text-sm font-mono">${ssrInterpolate(param.name)}</span><input${ssrRenderAttr("value", param.value)} type="text"${ssrRenderAttr("placeholder", param.example || "输入值")} class="flex-1 px-2 py-1 border rounded text-sm"></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (queryParams.value.length > 0) {
          _push(`<div><label class="text-sm font-medium">查询参数</label><div class="mt-2 space-y-2"><!--[-->`);
          ssrRenderList(queryParams.value, (param) => {
            _push(`<div class="flex gap-2 items-center"><span class="text-sm font-mono w-24">${ssrInterpolate(param.name)}</span><input${ssrRenderAttr("value", param.value)} type="text"${ssrRenderAttr("placeholder", param.example || param.description || "输入值")} class="flex-1 px-2 py-1 border rounded text-sm"><span class="text-xs text-muted-foreground">${ssrInterpolate(param.type)}</span></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (requestBody.value) {
          _push(`<div><label class="text-sm font-medium">请求体</label><div class="mt-2"><textarea placeholder="{&quot;key&quot;: &quot;value&quot;}" class="w-full h-32 px-3 py-2 border rounded-md font-mono text-sm resize-none">${ssrInterpolate(requestBodyContent.value)}</textarea></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (response.value) {
          _push(`<div class="space-y-2"><div class="flex items-center gap-2"><label class="text-sm font-medium">响应结果</label><span class="${ssrRenderClass([
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
      _push(` 使用说明 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">1. 加载文档</h4><p>支持通过 URL 或直接粘贴 JSON/YAML 内容的方式加载 Swagger/OpenAPI 文档。</p></div><div><h4 class="font-medium text-foreground mb-2">2. 查看接口</h4><p>浏览所有 API 接口，查看请求方法、路径、参数和响应格式。</p></div><div><h4 class="font-medium text-foreground mb-2">3. 测试接口</h4><p>直接在线测试 API 接口，支持参数配置和查看响应结果。</p></div><div><h4 class="font-medium text-foreground mb-2">支持的版本</h4><p>支持 Swagger 2.0 和 OpenAPI 3.0/3.1 规范。</p></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/api-doc",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>API 文档生成</p><p class="text-xs text-muted-foreground"${_scopeId}>生成 API 文档</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "API 文档生成"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "生成 API 文档")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>HTTP 客户端</p><p class="text-xs text-muted-foreground"${_scopeId}>发送 HTTP 请求</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Globe), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "HTTP 客户端"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "发送 HTTP 请求")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSON 格式化</p><p class="text-xs text-muted-foreground"${_scopeId}>格式化 JSON 数据</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Code), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSON 格式化"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "格式化 JSON 数据")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=swagger-viewer-DVZfzeSs.js.map
