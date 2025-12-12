import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { Globe, Link, ArrowRight, FileText, Hash } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
  __name: "url-encode",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const outputText = ref("");
    const encodeMode = ref("full");
    const copied = ref(false);
    ref(0);
    const encodeURL = (text, mode) => {
      if (mode === "full") {
        return encodeURIComponent(text);
      } else {
        return text.replace(/[^\w\-._~!$&'()*+,;=:@]/g, (char) => {
          return "%" + char.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0");
        });
      }
    };
    watch(inputText, (newText) => {
      if (newText) {
        outputText.value = encodeURL(newText, encodeMode.value);
      } else {
        outputText.value = "";
      }
    });
    watch(encodeMode, () => {
      if (inputText.value) {
        outputText.value = encodeURL(inputText.value, encodeMode.value);
      }
    });
    useSeoMeta({
      title: "URL编码器 - 在线URL百分比编码工具",
      description: "免费在线URL编码工具，支持完整编码和部分编码模式，确保URL安全传输，提供实时编码预览。",
      keywords: ["url", "编码", "encoder", "percent-encoding", "urlencode", "在线工具", "url safe"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-2e841e1e><div class="mt-4 mb-8" data-v-2e841e1e><h1 class="text-3xl font-bold mb-3" data-v-2e841e1e>URL 编码器</h1><p class="text-muted-foreground" data-v-2e841e1e>将 URL 或文本进行百分比编码，确保 URL 在网络传输中安全可靠</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-2e841e1e><div class="space-y-4" data-v-2e841e1e><div class="flex items-center justify-between" data-v-2e841e1e><h2 class="text-lg font-semibold" data-v-2e841e1e>输入内容</h2><div class="flex gap-2" data-v-2e841e1e><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2e841e1e> 清空 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2e841e1e> 示例 </button></div></div><textarea placeholder="请输入 URL 或需要编码的文本..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-2e841e1e>${ssrInterpolate(inputText.value)}</textarea><div class="space-y-3" data-v-2e841e1e><h3 class="font-medium text-sm" data-v-2e841e1e>编码选项</h3><div class="space-y-2" data-v-2e841e1e><label class="flex items-center gap-2" data-v-2e841e1e><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(encodeMode.value, "full")) ? " checked" : ""} value="full" class="rounded" data-v-2e841e1e><span class="text-sm" data-v-2e841e1e>完整编码（编码所有非安全字符）</span></label><label class="flex items-center gap-2" data-v-2e841e1e><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(encodeMode.value, "partial")) ? " checked" : ""} value="partial" class="rounded" data-v-2e841e1e><span class="text-sm" data-v-2e841e1e>部分编码（仅编码特殊字符）</span></label></div></div><div class="bg-muted p-4 rounded-lg" data-v-2e841e1e><h3 class="font-medium text-sm mb-2" data-v-2e841e1e>常见编码参考</h3><div class="grid grid-cols-2 gap-2 text-xs font-mono" data-v-2e841e1e><div data-v-2e841e1e>空格 → %20</div><div data-v-2e841e1e>! → %21</div><div data-v-2e841e1e>&quot; → %22</div><div data-v-2e841e1e># → %23</div><div data-v-2e841e1e>$ → %24</div><div data-v-2e841e1e>% → %25</div><div data-v-2e841e1e>&amp; → %26</div><div data-v-2e841e1e>+ → %2B</div><div data-v-2e841e1e>/ → %2F</div><div data-v-2e841e1e>? → %3F</div><div data-v-2e841e1e>= → %3D</div></div></div></div><div class="space-y-4" data-v-2e841e1e><div class="flex items-center justify-between" data-v-2e841e1e><h2 class="text-lg font-semibold" data-v-2e841e1e>编码结果</h2><div class="flex gap-2" data-v-2e841e1e>`);
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2e841e1e>${ssrInterpolate(copied.value ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2e841e1e> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="relative" data-v-2e841e1e>`);
      if (outputText.value) {
        _push(`<pre class="w-full h-64 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-2e841e1e>${ssrInterpolate(outputText.value)}</pre>`);
      } else {
        _push(`<div class="w-full h-64 p-4 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" data-v-2e841e1e> 编码结果将显示在这里 </div>`);
      }
      if (outputText.value) {
        _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-2e841e1e>${ssrInterpolate(outputText.value.length)} 字符 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (inputText.value) {
        _push(`<div class="bg-muted p-4 rounded-lg" data-v-2e841e1e><h3 class="font-medium text-sm mb-2" data-v-2e841e1e>编码统计</h3><div class="grid grid-cols-2 gap-2 text-xs" data-v-2e841e1e><div data-v-2e841e1e>原始长度: ${ssrInterpolate(inputText.value.length)}</div><div data-v-2e841e1e>编码长度: ${ssrInterpolate(outputText.value.length)}</div><div data-v-2e841e1e>编码增加: ${ssrInterpolate(outputText.value.length - inputText.value.length)} 字符</div><div data-v-2e841e1e>编码率: ${ssrInterpolate((outputText.value.length / inputText.value.length * 100).toFixed(1))}%</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6" data-v-2e841e1e><div class="bg-card rounded-lg p-6" data-v-2e841e1e><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-2e841e1e>`);
      _push(ssrRenderComponent(unref(Globe), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` URL 编码使用场景 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-2e841e1e><div class="space-y-3" data-v-2e841e1e><h4 class="font-medium" data-v-2e841e1e>何时需要 URL 编码：</h4><ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground" data-v-2e841e1e><li data-v-2e841e1e>URL 参数传递</li><li data-v-2e841e1e>表单数据提交</li><li data-v-2e841e1e>HTTP 请求头</li><li data-v-2e841e1e>Cookie 值</li><li data-v-2e841e1e>文件名包含特殊字符</li></ul></div><div class="space-y-3" data-v-2e841e1e><h4 class="font-medium" data-v-2e841e1e>不需要编码的字符：</h4><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><code class="text-sm" data-v-2e841e1e>A-Z a-z 0-9 - _ . ! ~ * &#39; ( ) ; , : @</code></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-2e841e1e><h3 class="text-lg font-semibold mb-4" data-v-2e841e1e>编码示例</h3><div class="space-y-4" data-v-2e841e1e><div data-v-2e841e1e><h4 class="font-medium text-sm mb-1" data-v-2e841e1e>1. 搜索参数</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-2e841e1e><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><p class="text-xs text-muted-foreground mb-1" data-v-2e841e1e>原始:</p><code class="text-xs" data-v-2e841e1e>search?q=hello world&amp;lang=en</code></div><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><p class="text-xs text-muted-foreground mb-1" data-v-2e841e1e>编码后:</p><code class="text-xs" data-v-2e841e1e>search%3Fq%3Dhello%20world%26lang%3Den</code></div></div></div><div data-v-2e841e1e><h4 class="font-medium text-sm mb-1" data-v-2e841e1e>2. 包含空格的 URL</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-2e841e1e><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><p class="text-xs text-muted-foreground mb-1" data-v-2e841e1e>原始:</p><code class="text-xs" data-v-2e841e1e>https://example.com/api/data?name=John Doe</code></div><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><p class="text-xs text-muted-foreground mb-1" data-v-2e841e1e>编码后:</p><code class="text-xs" data-v-2e841e1e>https://example.com/api/data?name=John%20Doe</code></div></div></div><div data-v-2e841e1e><h4 class="font-medium text-sm mb-1" data-v-2e841e1e>3. 特殊字符处理</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-2e841e1e><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><p class="text-xs text-muted-foreground mb-1" data-v-2e841e1e>原始:</p><code class="text-xs" data-v-2e841e1e>price=$100&amp;discount=20%</code></div><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><p class="text-xs text-muted-foreground mb-1" data-v-2e841e1e>编码后:</p><code class="text-xs" data-v-2e841e1e>price%3D%24100%26discount%3D20%25</code></div></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-2e841e1e><h3 class="text-lg font-semibold mb-4" data-v-2e841e1e>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-2e841e1e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/url-decode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Link), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-2e841e1e${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2e841e1e${_scopeId}>URL 解码</p><p class="text-xs text-muted-foreground" data-v-2e841e1e${_scopeId}>URL 百分比解码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "URL 解码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "URL 百分比解码")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/html-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-2e841e1e${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2e841e1e${_scopeId}>HTML 编码</p><p class="text-xs text-muted-foreground" data-v-2e841e1e${_scopeId}>HTML 实体编码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "HTML 编码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "HTML 实体编码")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/base64-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-2e841e1e${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2e841e1e${_scopeId}>Base64 编码</p><p class="text-xs text-muted-foreground" data-v-2e841e1e${_scopeId}>Base64 格式转换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 编码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Base64 格式转换")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/url-encode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const urlEncode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2e841e1e"]]);
export {
  urlEncode as default
};
//# sourceMappingURL=url-encode-DQG2307P.js.map
