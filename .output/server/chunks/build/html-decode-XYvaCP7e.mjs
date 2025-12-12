import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { ArrowRight, Zap, FileText, Link, Hash } from 'lucide-vue-next';
import { f as useSeoMeta } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
      "copy": "\xA9",
      "reg": "\xAE",
      "trade": "\u2122",
      "euro": "\u20AC",
      "pound": "\xA3",
      "yen": "\xA5",
      "cent": "\xA2",
      "sect": "\xA7",
      "para": "\xB6",
      "deg": "\xB0",
      "prime": "'",
      "Prime": '"',
      "lsquo": "'",
      "rsquo": "'",
      "ldquo": '"',
      "rdquo": '"',
      "hellip": "\u2026",
      "mdash": "\u2014",
      "ndash": "\u2013",
      // 数学符号
      "plusmn": "\xB1",
      "times": "\xD7",
      "divide": "\xF7",
      "frac12": "\xBD",
      "frac14": "\xBC",
      "frac34": "\xBE",
      "sup2": "\xB2",
      "sup3": "\xB3",
      "frac13": "\u2153",
      "frac23": "\u2154",
      // 箭头
      "larr": "\u2190",
      "rarr": "\u2192",
      "uarr": "\u2191",
      "darr": "\u2193",
      "harr": "\u2194",
      "larr2": "\u21D0",
      "rarr2": "\u21D2",
      "uarr2": "\u21D1",
      "darr2": "\u21D3",
      "harr2": "\u21D4",
      // 其他常用
      "bull": "\u2022",
      "para": "\xB6",
      "sect": "\xA7",
      "middot": "\xB7",
      "laquo": "\xAB",
      "raquo": "\xBB",
      "lsaquo": "\u2039",
      "rsaquo": "\u203A",
      "loz": "\u25CA",
      "spades": "\u2660",
      "clubs": "\u2663",
      "hearts": "\u2665",
      "diams": "\u2666"
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
      title: "HTML\u89E3\u7801\u5668 - \u5728\u7EBFHTML\u5B9E\u4F53\u89E3\u7801\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFHTML\u89E3\u7801\u5DE5\u5177\uFF0C\u652F\u6301\u547D\u540D\u5B9E\u4F53\u548C\u6570\u5B57\u5B9E\u4F53\u89E3\u7801\uFF0C\u63D0\u4F9B\u8BE6\u7EC6\u7684\u89E3\u7801\u4FE1\u606F\u548C\u7EDF\u8BA1\u3002",
      keywords: ["html", "\u89E3\u7801", "entity", "html-decoder", "\u5728\u7EBF\u5DE5\u5177", "\u5B9E\u4F53\u89E3\u7801", "html5"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-5cd14c65><div class="mt-4 mb-8" data-v-5cd14c65><h1 class="text-3xl font-bold mb-3" data-v-5cd14c65>HTML \u89E3\u7801\u5668</h1><p class="text-muted-foreground" data-v-5cd14c65>\u5C06 HTML \u5B9E\u4F53\u7F16\u7801\u8FD8\u539F\u4E3A\u539F\u59CB\u6587\u672C\uFF0C\u652F\u6301\u547D\u540D\u5B9E\u4F53\u548C\u6570\u5B57\u5B9E\u4F53</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-5cd14c65><div class="space-y-4" data-v-5cd14c65><div class="flex items-center justify-between" data-v-5cd14c65><h2 class="text-lg font-semibold" data-v-5cd14c65>HTML \u7F16\u7801\u6587\u672C</h2><div class="flex gap-2" data-v-5cd14c65><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-5cd14c65> \u6E05\u7A7A </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-5cd14c65> \u7C98\u8D34 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-5cd14c65> \u793A\u4F8B </button></div></div><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u89E3\u7801\u7684 HTML \u7F16\u7801\u6587\u672C..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-5cd14c65>${ssrInterpolate(inputText.value)}</textarea><div class="space-y-3" data-v-5cd14c65><h3 class="font-medium text-sm" data-v-5cd14c65>\u89E3\u7801\u9009\u9879</h3><label class="flex items-center gap-2" data-v-5cd14c65><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.strict) ? ssrLooseContain(options.value.strict, null) : options.value.strict) ? " checked" : ""} class="rounded" data-v-5cd14c65><span class="text-sm" data-v-5cd14c65>\u4E25\u683C\u6A21\u5F0F\uFF08\u4EC5\u89E3\u7801\u6807\u51C6 HTML \u5B9E\u4F53\uFF09</span></label><label class="flex items-center gap-2" data-v-5cd14c65><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.showInvalid) ? ssrLooseContain(options.value.showInvalid, null) : options.value.showInvalid) ? " checked" : ""} class="rounded" data-v-5cd14c65><span class="text-sm" data-v-5cd14c65>\u663E\u793A\u65E0\u6548\u5B9E\u4F53\u6807\u8BB0</span></label></div><div class="bg-muted p-4 rounded-lg" data-v-5cd14c65><h3 class="font-medium text-sm mb-2" data-v-5cd14c65>\u5E38\u89C1 HTML \u5B9E\u4F53</h3><div class="grid grid-cols-2 gap-2 text-xs font-mono" data-v-5cd14c65><div data-v-5cd14c65>&amp;lt; \u2192 &lt;</div><div data-v-5cd14c65>&amp;gt; \u2192 &gt;</div><div data-v-5cd14c65>&amp;amp; \u2192 &amp;</div><div data-v-5cd14c65>&amp;quot; \u2192 &quot;</div><div data-v-5cd14c65>&amp;#39; \u2192 &#39;</div><div data-v-5cd14c65>&amp;copy; \u2192 \xA9</div><div data-v-5cd14c65>&amp;reg; \u2192 \xAE</div><div data-v-5cd14c65>&amp;euro; \u2192 \u20AC</div></div></div></div><div class="space-y-4" data-v-5cd14c65><div class="flex items-center justify-between" data-v-5cd14c65><h2 class="text-lg font-semibold" data-v-5cd14c65>\u89E3\u7801\u7ED3\u679C</h2><div class="flex gap-2" data-v-5cd14c65>`);
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-5cd14c65>${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-5cd14c65> \u4E0B\u8F7D </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="relative" data-v-5cd14c65>`);
      if (outputText.value) {
        _push(`<pre class="w-full h-64 p-4 bg-muted rounded-lg overflow-auto text-sm whitespace-pre-wrap break-all" data-v-5cd14c65>${ssrInterpolate(outputText.value)}</pre>`);
      } else {
        _push(`<div class="w-full h-64 p-4 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" data-v-5cd14c65> \u89E3\u7801\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC </div>`);
      }
      if (outputText.value) {
        _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-5cd14c65>${ssrInterpolate(outputText.value.length)} \u5B57\u7B26 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (inputText.value) {
        _push(`<div class="bg-muted p-4 rounded-lg" data-v-5cd14c65><h3 class="font-medium text-sm mb-2" data-v-5cd14c65>\u89E3\u7801\u7EDF\u8BA1</h3><div class="grid grid-cols-2 gap-2 text-xs" data-v-5cd14c65><div data-v-5cd14c65>\u7F16\u7801\u957F\u5EA6: ${ssrInterpolate(inputText.value.length)}</div><div data-v-5cd14c65>\u89E3\u7801\u957F\u5EA6: ${ssrInterpolate(outputText.value.length)}</div><div data-v-5cd14c65>\u8282\u7701\u5B57\u7B26: ${ssrInterpolate(inputText.value.length - outputText.value.length)}</div><div data-v-5cd14c65>\u538B\u7F29\u7387: ${ssrInterpolate(((inputText.value.length - outputText.value.length) / inputText.value.length * 100).toFixed(1))}%</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (decodedEntities.value.length > 0) {
        _push(`<div class="bg-card border rounded-lg p-4" data-v-5cd14c65><h3 class="font-medium text-sm mb-2" data-v-5cd14c65>\u5DF2\u89E3\u7801\u5B9E\u4F53</h3><div class="space-y-1 max-h-32 overflow-y-auto" data-v-5cd14c65><!--[-->`);
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
      _push(` \u4F7F\u7528\u6280\u5DE7 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-5cd14c65><p data-v-5cd14c65>\u2022 \u652F\u6301\u6240\u6709\u6807\u51C6 HTML5 \u547D\u540D\u5B9E\u4F53\uFF0C\u5982 &amp;copy;\u3001&amp;nbsp; \u7B49</p><p data-v-5cd14c65>\u2022 \u652F\u6301\u5341\u8FDB\u5236\u548C\u5341\u516D\u8FDB\u5236\u6570\u5B57\u5B9E\u4F53\uFF0C\u5982 &amp;#65;\u3001&amp;#x41;</p><p data-v-5cd14c65>\u2022 \u53EF\u4EE5\u4E00\u6B21\u89E3\u7801\u591A\u4E2A HTML \u5B9E\u4F53</p><p data-v-5cd14c65>\u2022 \u4E25\u683C\u6A21\u5F0F\u4E0B\u4F1A\u5FFD\u7565\u975E\u6807\u51C6\u7684 HTML \u5B9E\u4F53</p></div></div><div class="bg-card rounded-lg p-6" data-v-5cd14c65><h3 class="text-lg font-semibold mb-4" data-v-5cd14c65>\u89E3\u7801\u793A\u4F8B</h3><div class="space-y-4" data-v-5cd14c65><div data-v-5cd14c65><h4 class="font-medium text-sm mb-1" data-v-5cd14c65>1. \u547D\u540D\u5B9E\u4F53\u89E3\u7801</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-5cd14c65><div class="p-3 bg-muted rounded-lg" data-v-5cd14c65><p class="text-xs text-muted-foreground mb-1" data-v-5cd14c65>\u7F16\u7801:</p><code class="text-xs" data-v-5cd14c65>&amp;copy; 2024 &amp;reg; Company Ltd.</code></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-5cd14c65><p class="text-xs text-muted-foreground mb-1" data-v-5cd14c65>\u89E3\u7801:</p><code class="text-xs" data-v-5cd14c65>\xA9 2024 \xAE Company Ltd.</code></div></div></div><div data-v-5cd14c65><h4 class="font-medium text-sm mb-1" data-v-5cd14c65>2. \u6570\u5B57\u5B9E\u4F53\u89E3\u7801</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-5cd14c65><div class="p-3 bg-muted rounded-lg" data-v-5cd14c65><p class="text-xs text-muted-foreground mb-1" data-v-5cd14c65>\u7F16\u7801:</p><code class="text-xs" data-v-5cd14c65>&amp;#72;&amp;#101;&amp;#108;&amp;#108;&amp;#111;</code></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-5cd14c65><p class="text-xs text-muted-foreground mb-1" data-v-5cd14c65>\u89E3\u7801:</p><code class="text-xs" data-v-5cd14c65>Hello</code></div></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-5cd14c65><h3 class="text-lg font-semibold mb-4" data-v-5cd14c65>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-5cd14c65>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/html-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-5cd14c65${_scopeId}><p class="font-medium group-hover:text-primary" data-v-5cd14c65${_scopeId}>HTML \u7F16\u7801</p><p class="text-xs text-muted-foreground" data-v-5cd14c65${_scopeId}>\u6587\u672C\u8F6C HTML \u5B9E\u4F53</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "HTML \u7F16\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6587\u672C\u8F6C HTML \u5B9E\u4F53")
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
            _push2(`<div data-v-5cd14c65${_scopeId}><p class="font-medium group-hover:text-primary" data-v-5cd14c65${_scopeId}>URL \u89E3\u7801</p><p class="text-xs text-muted-foreground" data-v-5cd14c65${_scopeId}>URL \u767E\u5206\u6BD4\u89E3\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "URL \u89E3\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "URL \u767E\u5206\u6BD4\u89E3\u7801")
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
            _push2(`<div data-v-5cd14c65${_scopeId}><p class="font-medium group-hover:text-primary" data-v-5cd14c65${_scopeId}>Base64 \u89E3\u7801</p><p class="text-xs text-muted-foreground" data-v-5cd14c65${_scopeId}>Base64 \u683C\u5F0F\u89E3\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 \u89E3\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Base64 \u683C\u5F0F\u89E3\u7801")
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

export { htmlDecode as default };
//# sourceMappingURL=html-decode-XYvaCP7e.mjs.map
