import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { ArrowRight, Zap, FileText, Link, Hash } from "lucide-vue-next";
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
  __name: "html-decode",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const outputText = ref("");
    const copied = ref(false);
    const decodedEntities = ref([]);
    const options = ref({
      strict: false,
      showInvalid: false
    });
    const namedEntities = {
      // 特殊字符
      "amp": "&",
      "lt": "<",
      "gt": ">",
      "quot": '"',
      "apos": "'",
      // 常用符号
      "nbsp": " ",
      "copy": "©",
      "reg": "®",
      "trade": "™",
      "euro": "€",
      "pound": "£",
      "yen": "¥",
      "cent": "¢",
      "sect": "§",
      "para": "¶",
      "deg": "°",
      "prime": "'",
      "Prime": '"',
      "lsquo": "'",
      "rsquo": "'",
      "ldquo": '"',
      "rdquo": '"',
      "hellip": "…",
      "mdash": "—",
      "ndash": "–",
      // 数学符号
      "plusmn": "±",
      "times": "×",
      "divide": "÷",
      "frac12": "½",
      "frac14": "¼",
      "frac34": "¾",
      "sup2": "²",
      "sup3": "³",
      "frac13": "⅓",
      "frac23": "⅔",
      // 箭头
      "larr": "←",
      "rarr": "→",
      "uarr": "↑",
      "darr": "↓",
      "harr": "↔",
      "larr2": "⇐",
      "rarr2": "⇒",
      "uarr2": "⇑",
      "darr2": "⇓",
      "harr2": "⇔",
      // 其他常用
      "bull": "•",
      "para": "¶",
      "sect": "§",
      "middot": "·",
      "laquo": "«",
      "raquo": "»",
      "lsaquo": "‹",
      "rsaquo": "›",
      "loz": "◊",
      "spades": "♠",
      "clubs": "♣",
      "hearts": "♥",
      "diams": "♦"
    };
    const decodeHTML = (text) => {
      if (!text) return "";
      decodedEntities.value = [];
      let result = text;
      const entityRegex = /&(#?[\w\d]+);?/g;
      let match;
      while ((match = entityRegex.exec(text)) !== null) {
        const fullEntity = match[0];
        const entityCode = match[1];
        let decoded = null;
        let description = "";
        if (entityCode.startsWith("#")) {
          const isHex = entityCode.startsWith("#x");
          const code = parseInt(entityCode.slice(isHex ? 2 : 1), isHex ? 16 : 10);
          if (!isNaN(code)) {
            decoded = String.fromCharCode(code);
            description = `Unicode ${isHex ? "hex" : "decimal"} ${code}`;
          }
        } else {
          if (namedEntities[entityCode] !== void 0) {
            decoded = namedEntities[entityCode];
            description = `Named entity &${entityCode};`;
          } else if (!options.value.strict) {
            try {
              const textarea = (void 0).createElement("textarea");
              textarea.innerHTML = fullEntity;
              decoded = textarea.value;
              description = `HTML5 entity ${entityCode}`;
            } catch (e) {
            }
          }
        }
        if (decoded !== null) {
          result = result.replace(fullEntity, decoded);
          decodedEntities.value.push({
            original: fullEntity,
            decoded,
            description
          });
        } else if (options.value.showInvalid) {
          decodedEntities.value.push({
            original: fullEntity,
            decoded: "?",
            description: "Invalid entity"
          });
        }
      }
      return result;
    };
    watch(inputText, (newText) => {
      if (newText) {
        outputText.value = decodeHTML(newText);
      } else {
        outputText.value = "";
        decodedEntities.value = [];
      }
    });
    watch(options, () => {
      if (inputText.value) {
        outputText.value = decodeHTML(inputText.value);
      }
    }, { deep: true });
    useSeoMeta({
      title: "HTML解码器 - 在线HTML实体解码工具",
      description: "免费在线HTML解码工具，支持命名实体和数字实体解码，提供详细的解码信息和统计。",
      keywords: ["html", "解码", "entity", "html-decoder", "在线工具", "实体解码", "html5"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-5cd14c65><div class="mt-4 mb-8" data-v-5cd14c65><h1 class="text-3xl font-bold mb-3" data-v-5cd14c65>HTML 解码器</h1><p class="text-muted-foreground" data-v-5cd14c65>将 HTML 实体编码还原为原始文本，支持命名实体和数字实体</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-5cd14c65><div class="space-y-4" data-v-5cd14c65><div class="flex items-center justify-between" data-v-5cd14c65><h2 class="text-lg font-semibold" data-v-5cd14c65>HTML 编码文本</h2><div class="flex gap-2" data-v-5cd14c65><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-5cd14c65> 清空 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-5cd14c65> 粘贴 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-5cd14c65> 示例 </button></div></div><textarea placeholder="请输入要解码的 HTML 编码文本..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-5cd14c65>${ssrInterpolate(inputText.value)}</textarea><div class="space-y-3" data-v-5cd14c65><h3 class="font-medium text-sm" data-v-5cd14c65>解码选项</h3><label class="flex items-center gap-2" data-v-5cd14c65><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.strict) ? ssrLooseContain(options.value.strict, null) : options.value.strict) ? " checked" : ""} class="rounded" data-v-5cd14c65><span class="text-sm" data-v-5cd14c65>严格模式（仅解码标准 HTML 实体）</span></label><label class="flex items-center gap-2" data-v-5cd14c65><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.showInvalid) ? ssrLooseContain(options.value.showInvalid, null) : options.value.showInvalid) ? " checked" : ""} class="rounded" data-v-5cd14c65><span class="text-sm" data-v-5cd14c65>显示无效实体标记</span></label></div><div class="bg-muted p-4 rounded-lg" data-v-5cd14c65><h3 class="font-medium text-sm mb-2" data-v-5cd14c65>常见 HTML 实体</h3><div class="grid grid-cols-2 gap-2 text-xs font-mono" data-v-5cd14c65><div data-v-5cd14c65>&amp;lt; → &lt;</div><div data-v-5cd14c65>&amp;gt; → &gt;</div><div data-v-5cd14c65>&amp;amp; → &amp;</div><div data-v-5cd14c65>&amp;quot; → &quot;</div><div data-v-5cd14c65>&amp;#39; → &#39;</div><div data-v-5cd14c65>&amp;copy; → ©</div><div data-v-5cd14c65>&amp;reg; → ®</div><div data-v-5cd14c65>&amp;euro; → €</div></div></div></div><div class="space-y-4" data-v-5cd14c65><div class="flex items-center justify-between" data-v-5cd14c65><h2 class="text-lg font-semibold" data-v-5cd14c65>解码结果</h2><div class="flex gap-2" data-v-5cd14c65>`);
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-5cd14c65>${ssrInterpolate(copied.value ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-5cd14c65> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="relative" data-v-5cd14c65>`);
      if (outputText.value) {
        _push(`<pre class="w-full h-64 p-4 bg-muted rounded-lg overflow-auto text-sm whitespace-pre-wrap break-all" data-v-5cd14c65>${ssrInterpolate(outputText.value)}</pre>`);
      } else {
        _push(`<div class="w-full h-64 p-4 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" data-v-5cd14c65> 解码结果将显示在这里 </div>`);
      }
      if (outputText.value) {
        _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-5cd14c65>${ssrInterpolate(outputText.value.length)} 字符 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (inputText.value) {
        _push(`<div class="bg-muted p-4 rounded-lg" data-v-5cd14c65><h3 class="font-medium text-sm mb-2" data-v-5cd14c65>解码统计</h3><div class="grid grid-cols-2 gap-2 text-xs" data-v-5cd14c65><div data-v-5cd14c65>编码长度: ${ssrInterpolate(inputText.value.length)}</div><div data-v-5cd14c65>解码长度: ${ssrInterpolate(outputText.value.length)}</div><div data-v-5cd14c65>节省字符: ${ssrInterpolate(inputText.value.length - outputText.value.length)}</div><div data-v-5cd14c65>压缩率: ${ssrInterpolate(((inputText.value.length - outputText.value.length) / inputText.value.length * 100).toFixed(1))}%</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (decodedEntities.value.length > 0) {
        _push(`<div class="bg-card border rounded-lg p-4" data-v-5cd14c65><h3 class="font-medium text-sm mb-2" data-v-5cd14c65>已解码实体</h3><div class="space-y-1 max-h-32 overflow-y-auto" data-v-5cd14c65><!--[-->`);
        ssrRenderList(decodedEntities.value, (entity) => {
          _push(`<div class="flex items-center gap-2 text-xs font-mono" data-v-5cd14c65><span class="text-muted-foreground" data-v-5cd14c65>${ssrInterpolate(entity.original)}</span>`);
          _push(ssrRenderComponent(unref(ArrowRight), { class: "w-3 h-3 text-muted-foreground" }, null, _parent));
          _push(`<span class="text-foreground" data-v-5cd14c65>${ssrInterpolate(entity.decoded)}</span><span class="text-muted-foreground" data-v-5cd14c65>(${ssrInterpolate(entity.description)})</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6" data-v-5cd14c65><div class="bg-card rounded-lg p-6" data-v-5cd14c65><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-5cd14c65>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用技巧 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-5cd14c65><p data-v-5cd14c65>• 支持所有标准 HTML5 命名实体，如 &amp;copy;、&amp;nbsp; 等</p><p data-v-5cd14c65>• 支持十进制和十六进制数字实体，如 &amp;#65;、&amp;#x41;</p><p data-v-5cd14c65>• 可以一次解码多个 HTML 实体</p><p data-v-5cd14c65>• 严格模式下会忽略非标准的 HTML 实体</p></div></div><div class="bg-card rounded-lg p-6" data-v-5cd14c65><h3 class="text-lg font-semibold mb-4" data-v-5cd14c65>解码示例</h3><div class="space-y-4" data-v-5cd14c65><div data-v-5cd14c65><h4 class="font-medium text-sm mb-1" data-v-5cd14c65>1. 命名实体解码</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-5cd14c65><div class="p-3 bg-muted rounded-lg" data-v-5cd14c65><p class="text-xs text-muted-foreground mb-1" data-v-5cd14c65>编码:</p><code class="text-xs" data-v-5cd14c65>&amp;copy; 2024 &amp;reg; Company Ltd.</code></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-5cd14c65><p class="text-xs text-muted-foreground mb-1" data-v-5cd14c65>解码:</p><code class="text-xs" data-v-5cd14c65>© 2024 ® Company Ltd.</code></div></div></div><div data-v-5cd14c65><h4 class="font-medium text-sm mb-1" data-v-5cd14c65>2. 数字实体解码</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-5cd14c65><div class="p-3 bg-muted rounded-lg" data-v-5cd14c65><p class="text-xs text-muted-foreground mb-1" data-v-5cd14c65>编码:</p><code class="text-xs" data-v-5cd14c65>&amp;#72;&amp;#101;&amp;#108;&amp;#108;&amp;#111;</code></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-5cd14c65><p class="text-xs text-muted-foreground mb-1" data-v-5cd14c65>解码:</p><code class="text-xs" data-v-5cd14c65>Hello</code></div></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-5cd14c65><h3 class="text-lg font-semibold mb-4" data-v-5cd14c65>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-5cd14c65>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/html-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-5cd14c65${_scopeId}><p class="font-medium group-hover:text-primary" data-v-5cd14c65${_scopeId}>HTML 编码</p><p class="text-xs text-muted-foreground" data-v-5cd14c65${_scopeId}>文本转 HTML 实体</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "HTML 编码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "文本转 HTML 实体")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/url-decode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Link), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-5cd14c65${_scopeId}><p class="font-medium group-hover:text-primary" data-v-5cd14c65${_scopeId}>URL 解码</p><p class="text-xs text-muted-foreground" data-v-5cd14c65${_scopeId}>URL 百分比解码</p></div>`);
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
        to: "/tools/base64-decode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-5cd14c65${_scopeId}><p class="font-medium group-hover:text-primary" data-v-5cd14c65${_scopeId}>Base64 解码</p><p class="text-xs text-muted-foreground" data-v-5cd14c65${_scopeId}>Base64 格式解码</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/html-decode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const htmlDecode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5cd14c65"]]);
export {
  htmlDecode as default
};
//# sourceMappingURL=html-decode-XYvaCP7e.js.map
