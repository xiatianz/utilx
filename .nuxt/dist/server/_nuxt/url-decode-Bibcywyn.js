import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import { Zap, Link, ArrowRight, FileText, Hash } from "lucide-vue-next";
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
  __name: "url-decode",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const outputText = ref("");
    const copied = ref(false);
    const options = ref({
      decodeEachLine: true,
      showOriginal: false
    });
    const decodeURL = (text, decodeEachLine) => {
      if (decodeEachLine) {
        return text.split("\n").map((line) => {
          try {
            return decodeURIComponent(line);
          } catch (error) {
            return `解码失败: ${line}`;
          }
        }).join("\n");
      } else {
        try {
          return decodeURIComponent(text);
        } catch (error) {
          return "解码失败：" + error.message;
        }
      }
    };
    watch(inputText, (newText) => {
      if (newText) {
        outputText.value = decodeURL(newText, options.value.decodeEachLine);
      } else {
        outputText.value = "";
      }
    });
    watch(options, () => {
      if (inputText.value) {
        outputText.value = decodeURL(inputText.value, options.value.decodeEachLine);
      }
    }, { deep: true });
    useSeoMeta({
      title: "URL解码器 - 在线URL百分比解码工具",
      description: "免费在线URL解码工具，支持批量解码，显示原始文本对比，提供实时解码预览。",
      keywords: ["url", "解码", "decoder", "percent-encoding", "urldecode", "在线工具", "批量解码"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-b4eac5b9><div class="mt-4 mb-8" data-v-b4eac5b9><h1 class="text-3xl font-bold mb-3" data-v-b4eac5b9>URL 解码器</h1><p class="text-muted-foreground" data-v-b4eac5b9>将百分比编码的 URL 解码还原为原始格式，支持批量解码</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-b4eac5b9><div class="space-y-4" data-v-b4eac5b9><div class="flex items-center justify-between" data-v-b4eac5b9><h2 class="text-lg font-semibold" data-v-b4eac5b9>URL 输入</h2><div class="flex gap-2" data-v-b4eac5b9><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-b4eac5b9> 清空 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-b4eac5b9> 粘贴 </button></div></div><textarea placeholder="请输入要解码的 URL（每行一个）..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-b4eac5b9>${ssrInterpolate(inputText.value)}</textarea><div class="space-y-3" data-v-b4eac5b9><h3 class="font-medium text-sm" data-v-b4eac5b9>解码选项</h3><label class="flex items-center gap-2" data-v-b4eac5b9><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.decodeEachLine) ? ssrLooseContain(options.value.decodeEachLine, null) : options.value.decodeEachLine) ? " checked" : ""} class="rounded" data-v-b4eac5b9><span class="text-sm" data-v-b4eac5b9>逐行解码（每行独立解码）</span></label><label class="flex items-center gap-2" data-v-b4eac5b9><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.showOriginal) ? ssrLooseContain(options.value.showOriginal, null) : options.value.showOriginal) ? " checked" : ""} class="rounded" data-v-b4eac5b9><span class="text-sm" data-v-b4eac5b9>显示原始文本对比</span></label></div><div class="bg-muted p-4 rounded-lg" data-v-b4eac5b9><h3 class="font-medium text-sm mb-2" data-v-b4eac5b9>常见编码对照</h3><div class="grid grid-cols-2 gap-2 text-xs font-mono" data-v-b4eac5b9><div data-v-b4eac5b9>%20 → 空格</div><div data-v-b4eac5b9>%21 → !</div><div data-v-b4eac5b9>%22 → &quot;</div><div data-v-b4eac5b9>%23 → #</div><div data-v-b4eac5b9>%24 → $</div><div data-v-b4eac5b9>%25 → %</div><div data-v-b4eac5b9>%26 → &amp;</div><div data-v-b4eac5b9>%2B → +</div><div data-v-b4eac5b9>%2F → /</div><div data-v-b4eac5b9>%3F → ?</div><div data-v-b4eac5b9>%3D → =</div></div></div></div><div class="space-y-4" data-v-b4eac5b9><div class="flex items-center justify-between" data-v-b4eac5b9><h2 class="text-lg font-semibold" data-v-b4eac5b9>解码结果</h2><div class="flex gap-2" data-v-b4eac5b9>`);
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-b4eac5b9>${ssrInterpolate(copied.value ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-b4eac5b9> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (options.value.showOriginal && inputText.value) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-2" data-v-b4eac5b9><div class="p-3 bg-muted rounded-lg" data-v-b4eac5b9><p class="text-xs text-muted-foreground mb-1" data-v-b4eac5b9>编码文本:</p><pre class="text-xs overflow-auto max-h-32" data-v-b4eac5b9>${ssrInterpolate(inputText.value)}</pre></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-b4eac5b9><p class="text-xs text-muted-foreground mb-1" data-v-b4eac5b9>解码文本:</p><pre class="text-xs overflow-auto max-h-32" data-v-b4eac5b9>${ssrInterpolate(outputText.value)}</pre></div></div>`);
      } else {
        _push(`<div class="relative" data-v-b4eac5b9>`);
        if (outputText.value) {
          _push(`<pre class="w-full h-64 p-4 bg-muted rounded-lg overflow-auto text-sm whitespace-pre-wrap break-all" data-v-b4eac5b9>${ssrInterpolate(outputText.value)}</pre>`);
        } else {
          _push(`<div class="w-full h-64 p-4 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" data-v-b4eac5b9> 解码结果将显示在这里 </div>`);
        }
        if (outputText.value) {
          _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-b4eac5b9>${ssrInterpolate(outputText.value.length)} 字符 </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      if (inputText.value) {
        _push(`<div class="bg-muted p-4 rounded-lg" data-v-b4eac5b9><h3 class="font-medium text-sm mb-2" data-v-b4eac5b9>解码统计</h3><div class="grid grid-cols-2 gap-2 text-xs" data-v-b4eac5b9><div data-v-b4eac5b9>原始长度: ${ssrInterpolate(inputText.value.length)}</div><div data-v-b4eac5b9>解码长度: ${ssrInterpolate(outputText.value.length)}</div><div data-v-b4eac5b9>节省字符: ${ssrInterpolate(inputText.value.length - outputText.value.length)}</div><div data-v-b4eac5b9>压缩率: ${ssrInterpolate(((inputText.value.length - outputText.value.length) / inputText.value.length * 100).toFixed(1))}%</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6" data-v-b4eac5b9><div class="bg-card rounded-lg p-6" data-v-b4eac5b9><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-b4eac5b9>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用技巧 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-b4eac5b9><p data-v-b4eac5b9>• 可以一次输入多个 URL，每行一个，工具会自动解码</p><p data-v-b4eac5b9>• 支持拖拽文本文件进行批量解码</p><p data-v-b4eac5b9>• 解码时会自动处理常见的编码错误</p><p data-v-b4eac5b9>• 可以使用&quot;显示原始文本对比&quot;功能查看解码前后的区别</p></div></div><div class="bg-card rounded-lg p-6" data-v-b4eac5b9><h3 class="text-lg font-semibold mb-4" data-v-b4eac5b9>解码示例</h3><div class="space-y-4" data-v-b4eac5b9><div data-v-b4eac5b9><h4 class="font-medium text-sm mb-1" data-v-b4eac5b9>1. 搜索参数解码</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-b4eac5b9><div class="p-3 bg-muted rounded-lg" data-v-b4eac5b9><p class="text-xs text-muted-foreground mb-1" data-v-b4eac5b9>编码:</p><code class="text-xs" data-v-b4eac5b9>search%3Fq%3Dhello%20world%26lang%3Den</code></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-b4eac5b9><p class="text-xs text-muted-foreground mb-1" data-v-b4eac5b9>解码:</p><code class="text-xs" data-v-b4eac5b9>search?q=hello world&amp;lang=en</code></div></div></div><div data-v-b4eac5b9><h4 class="font-medium text-sm mb-1" data-v-b4eac5b9>2. 中文内容解码</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-b4eac5b9><div class="p-3 bg-muted rounded-lg" data-v-b4eac5b9><p class="text-xs text-muted-foreground mb-1" data-v-b4eac5b9>编码:</p><code class="text-xs" data-v-b4eac5b9>%E4%B8%AD%E6%96%87</code></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-b4eac5b9><p class="text-xs text-muted-foreground mb-1" data-v-b4eac5b9>解码:</p><code class="text-xs" data-v-b4eac5b9>中文</code></div></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-b4eac5b9><h3 class="text-lg font-semibold mb-4" data-v-b4eac5b9>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-b4eac5b9>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/url-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Link), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-b4eac5b9${_scopeId}><p class="font-medium group-hover:text-primary" data-v-b4eac5b9${_scopeId}>URL 编码</p><p class="text-xs text-muted-foreground" data-v-b4eac5b9${_scopeId}>URL 百分比编码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "URL 编码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "URL 百分比编码")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/html-decode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-b4eac5b9${_scopeId}><p class="font-medium group-hover:text-primary" data-v-b4eac5b9${_scopeId}>HTML 解码</p><p class="text-xs text-muted-foreground" data-v-b4eac5b9${_scopeId}>HTML 实体解码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "HTML 解码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "HTML 实体解码")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/base64-decode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-b4eac5b9${_scopeId}><p class="font-medium group-hover:text-primary" data-v-b4eac5b9${_scopeId}>Base64 解码</p><p class="text-xs text-muted-foreground" data-v-b4eac5b9${_scopeId}>Base64 格式解码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 解码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Base64 格式解码")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/url-decode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const urlDecode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4eac5b9"]]);
export {
  urlDecode as default
};
//# sourceMappingURL=url-decode-Bibcywyn.js.map
