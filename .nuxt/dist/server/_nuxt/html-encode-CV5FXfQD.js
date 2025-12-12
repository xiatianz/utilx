import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import { Zap, FileText, ArrowRight, Link, Type } from "lucide-vue-next";
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
  __name: "html-encode",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const outputText = ref("");
    const copied = ref(false);
    const options = ref({
      encodeAll: false,
      useNamed: true,
      preserveSpaces: false
    });
    const namedEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "©": "&copy;",
      "®": "&reg;",
      "€": "&euro;",
      "£": "&pound;",
      "¥": "&yen;",
      "§": "&sect;",
      "¶": "&para;",
      "°": "&deg;",
      "±": "&plusmn;",
      "×": "&times;",
      "÷": "&divide;",
      "½": "&frac12;",
      "¼": "&frac14;",
      "¾": "&frac34;",
      "…": "&hellip;",
      "—": "&mdash;",
      "–": "&ndash;",
      '"': "&ldquo;",
      '""': "&rdquo;",
      "'": "&lsquo;",
      "'": "&rsquo;"
    };
    const encodeHTML = (text) => {
      if (!text) return "";
      let result = "";
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const code = char.charCodeAt(0);
        if (char === " " && options.value.preserveSpaces) {
          result += " ";
          continue;
        }
        if (options.value.useNamed && namedEntities[char]) {
          result += namedEntities[char];
          continue;
        }
        if (options.value.encodeAll || code < 32 || code > 126) {
          if (code < 128) {
            result += `&#${code};`;
          } else {
            result += `&#x${code.toString(16).toUpperCase()};`;
          }
        } else {
          if (`&<>"'`.includes(char)) {
            result += namedEntities[char] || `&#${code};`;
          } else {
            result += char;
          }
        }
      }
      return result;
    };
    watch(inputText, (newText) => {
      if (newText) {
        outputText.value = encodeHTML(newText);
      } else {
        outputText.value = "";
      }
    });
    watch(options, () => {
      if (inputText.value) {
        outputText.value = encodeHTML(inputText.value);
      }
    }, { deep: true });
    useSeoMeta({
      title: "HTML编码器 - 在线HTML实体编码工具",
      description: "免费在线HTML编码工具，支持命名实体和数字实体编码，可自定义编码选项，防止XSS攻击。",
      keywords: ["html", "编码", "entity", "html-encoder", "xss", "在线工具", "实体编码"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-a0b4d3f4><div class="mt-4 mb-8" data-v-a0b4d3f4><h1 class="text-3xl font-bold mb-3" data-v-a0b4d3f4>HTML 编码器</h1><p class="text-muted-foreground" data-v-a0b4d3f4>将文本转换为 HTML 实体编码，防止 XSS 攻击和显示特殊字符</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-a0b4d3f4><div class="space-y-4" data-v-a0b4d3f4><div class="flex items-center justify-between" data-v-a0b4d3f4><h2 class="text-lg font-semibold" data-v-a0b4d3f4>原始文本</h2><div class="flex gap-2" data-v-a0b4d3f4><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-a0b4d3f4> 清空 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-a0b4d3f4> 粘贴 </button></div></div><textarea placeholder="请输入要编码的文本..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-a0b4d3f4>${ssrInterpolate(inputText.value)}</textarea><div class="space-y-3" data-v-a0b4d3f4><h3 class="font-medium text-sm" data-v-a0b4d3f4>编码选项</h3><label class="flex items-center gap-2" data-v-a0b4d3f4><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.encodeAll) ? ssrLooseContain(options.value.encodeAll, null) : options.value.encodeAll) ? " checked" : ""} class="rounded" data-v-a0b4d3f4><span class="text-sm" data-v-a0b4d3f4>编码所有字符（包括字母数字）</span></label><label class="flex items-center gap-2" data-v-a0b4d3f4><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.useNamed) ? ssrLooseContain(options.value.useNamed, null) : options.value.useNamed) ? " checked" : ""} class="rounded" data-v-a0b4d3f4><span class="text-sm" data-v-a0b4d3f4>优先使用命名实体（如 &amp; 而不是 &amp;）</span></label><label class="flex items-center gap-2" data-v-a0b4d3f4><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.preserveSpaces) ? ssrLooseContain(options.value.preserveSpaces, null) : options.value.preserveSpaces) ? " checked" : ""} class="rounded" data-v-a0b4d3f4><span class="text-sm" data-v-a0b4d3f4>保留空格不编码</span></label></div><div class="bg-muted p-4 rounded-lg" data-v-a0b4d3f4><h3 class="font-medium text-sm mb-2" data-v-a0b4d3f4>常见 HTML 实体</h3><div class="grid grid-cols-2 gap-2 text-xs font-mono" data-v-a0b4d3f4><div data-v-a0b4d3f4>&lt; → &lt;</div><div data-v-a0b4d3f4>&gt; → &gt;</div><div data-v-a0b4d3f4>&amp; → &amp;</div><div data-v-a0b4d3f4>&quot; → &quot;</div><div data-v-a0b4d3f4>&#39; → &#39;</div><div data-v-a0b4d3f4>© → ©</div><div data-v-a0b4d3f4>® → ®</div><div data-v-a0b4d3f4>€ → €</div></div></div></div><div class="space-y-4" data-v-a0b4d3f4><div class="flex items-center justify-between" data-v-a0b4d3f4><h2 class="text-lg font-semibold" data-v-a0b4d3f4>编码结果</h2><div class="flex gap-2" data-v-a0b4d3f4>`);
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-a0b4d3f4>${ssrInterpolate(copied.value ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-a0b4d3f4> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="relative" data-v-a0b4d3f4>`);
      if (outputText.value) {
        _push(`<pre class="w-full h-64 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-a0b4d3f4>${ssrInterpolate(outputText.value)}</pre>`);
      } else {
        _push(`<div class="w-full h-64 p-4 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" data-v-a0b4d3f4> 编码结果将显示在这里 </div>`);
      }
      if (outputText.value) {
        _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-a0b4d3f4>${ssrInterpolate(outputText.value.length)} 字符 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (outputText.value) {
        _push(`<div class="bg-card border rounded-lg p-4" data-v-a0b4d3f4><h3 class="font-medium text-sm mb-2" data-v-a0b4d3f4>HTML 预览</h3><div class="p-3 bg-muted rounded-lg min-h-[100px] text-sm" data-v-a0b4d3f4>${outputText.value ?? ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (inputText.value) {
        _push(`<div class="bg-muted p-4 rounded-lg" data-v-a0b4d3f4><h3 class="font-medium text-sm mb-2" data-v-a0b4d3f4>编码统计</h3><div class="grid grid-cols-2 gap-2 text-xs" data-v-a0b4d3f4><div data-v-a0b4d3f4>原始长度: ${ssrInterpolate(inputText.value.length)}</div><div data-v-a0b4d3f4>编码长度: ${ssrInterpolate(outputText.value.length)}</div><div data-v-a0b4d3f4>增加字符: ${ssrInterpolate(outputText.value.length - inputText.value.length)}</div><div data-v-a0b4d3f4>编码率: ${ssrInterpolate(((outputText.value.length - inputText.value.length) / inputText.value.length * 100).toFixed(1))}%</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6" data-v-a0b4d3f4><div class="bg-card rounded-lg p-6" data-v-a0b4d3f4><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-a0b4d3f4>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用技巧 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-a0b4d3f4><p data-v-a0b4d3f4>• 在 Web 开发中，对用户输入进行 HTML 编码可以防止 XSS 攻击</p><p data-v-a0b4d3f4>• 显示代码片段时，使用 HTML 编码确保标签正确显示</p><p data-v-a0b4d3f4>• 在 XML/HTML 属性中使用特殊字符时需要进行编码</p><p data-v-a0b4d3f4>• 编码所有字符可以用于隐藏内容或绕过某些过滤器</p></div></div><div class="bg-card rounded-lg p-6" data-v-a0b4d3f4><h3 class="text-lg font-semibold mb-4" data-v-a0b4d3f4>编码示例</h3><div class="space-y-4" data-v-a0b4d3f4><div data-v-a0b4d3f4><h4 class="font-medium text-sm mb-1" data-v-a0b4d3f4>1. HTML 标签编码</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-a0b4d3f4><div class="p-3 bg-muted rounded-lg" data-v-a0b4d3f4><p class="text-xs text-muted-foreground mb-1" data-v-a0b4d3f4>原始:</p><code class="text-xs" data-v-a0b4d3f4>&lt;script&gt;alert(&#39;XSS&#39;)&lt;/script&gt;</code></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-a0b4d3f4><p class="text-xs text-muted-foreground mb-1" data-v-a0b4d3f4>编码:</p><code class="text-xs" data-v-a0b4d3f4>&amp;lt;script&amp;gt;alert(&amp;apos;XSS&amp;apos;)&amp;lt;/script&amp;gt;</code></div></div></div><div data-v-a0b4d3f4><h4 class="font-medium text-sm mb-1" data-v-a0b4d3f4>2. 特殊符号编码</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-a0b4d3f4><div class="p-3 bg-muted rounded-lg" data-v-a0b4d3f4><p class="text-xs text-muted-foreground mb-1" data-v-a0b4d3f4>原始:</p><code class="text-xs" data-v-a0b4d3f4>© 2024 Company® - All rights reserved.</code></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-a0b4d3f4><p class="text-xs text-muted-foreground mb-1" data-v-a0b4d3f4>编码:</p><code class="text-xs" data-v-a0b4d3f4>&amp;copy; 2024 Company&amp;reg; - All rights reserved.</code></div></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-a0b4d3f4><h3 class="text-lg font-semibold mb-4" data-v-a0b4d3f4>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-a0b4d3f4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/html-decode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-a0b4d3f4${_scopeId}><p class="font-medium group-hover:text-primary" data-v-a0b4d3f4${_scopeId}>HTML 解码</p><p class="text-xs text-muted-foreground" data-v-a0b4d3f4${_scopeId}>HTML 实体解码</p></div>`);
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
        to: "/tools/url-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Link), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-a0b4d3f4${_scopeId}><p class="font-medium group-hover:text-primary" data-v-a0b4d3f4${_scopeId}>URL 编码</p><p class="text-xs text-muted-foreground" data-v-a0b4d3f4${_scopeId}>URL 百分比编码</p></div>`);
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
        to: "/tools/unicode-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Type), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-a0b4d3f4${_scopeId}><p class="font-medium group-hover:text-primary" data-v-a0b4d3f4${_scopeId}>Unicode 转换</p><p class="text-xs text-muted-foreground" data-v-a0b4d3f4${_scopeId}>Unicode 编码转换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Type), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Unicode 转换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Unicode 编码转换")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/html-encode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const htmlEncode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a0b4d3f4"]]);
export {
  htmlEncode as default
};
//# sourceMappingURL=html-encode-CV5FXfQD.js.map
