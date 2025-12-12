import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { Zap, Link, ArrowRight, FileText, Hash } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { f as useSeoMeta } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
            return `\u89E3\u7801\u5931\u8D25: ${line}`;
          }
        }).join("\n");
      } else {
        try {
          return decodeURIComponent(text);
        } catch (error) {
          return "\u89E3\u7801\u5931\u8D25\uFF1A" + error.message;
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
      title: "URL\u89E3\u7801\u5668 - \u5728\u7EBFURL\u767E\u5206\u6BD4\u89E3\u7801\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFURL\u89E3\u7801\u5DE5\u5177\uFF0C\u652F\u6301\u6279\u91CF\u89E3\u7801\uFF0C\u663E\u793A\u539F\u59CB\u6587\u672C\u5BF9\u6BD4\uFF0C\u63D0\u4F9B\u5B9E\u65F6\u89E3\u7801\u9884\u89C8\u3002",
      keywords: ["url", "\u89E3\u7801", "decoder", "percent-encoding", "urldecode", "\u5728\u7EBF\u5DE5\u5177", "\u6279\u91CF\u89E3\u7801"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-b4eac5b9><div class="mt-4 mb-8" data-v-b4eac5b9><h1 class="text-3xl font-bold mb-3" data-v-b4eac5b9>URL \u89E3\u7801\u5668</h1><p class="text-muted-foreground" data-v-b4eac5b9>\u5C06\u767E\u5206\u6BD4\u7F16\u7801\u7684 URL \u89E3\u7801\u8FD8\u539F\u4E3A\u539F\u59CB\u683C\u5F0F\uFF0C\u652F\u6301\u6279\u91CF\u89E3\u7801</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-b4eac5b9><div class="space-y-4" data-v-b4eac5b9><div class="flex items-center justify-between" data-v-b4eac5b9><h2 class="text-lg font-semibold" data-v-b4eac5b9>URL \u8F93\u5165</h2><div class="flex gap-2" data-v-b4eac5b9><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-b4eac5b9> \u6E05\u7A7A </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-b4eac5b9> \u7C98\u8D34 </button></div></div><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u89E3\u7801\u7684 URL\uFF08\u6BCF\u884C\u4E00\u4E2A\uFF09..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-b4eac5b9>${ssrInterpolate(inputText.value)}</textarea><div class="space-y-3" data-v-b4eac5b9><h3 class="font-medium text-sm" data-v-b4eac5b9>\u89E3\u7801\u9009\u9879</h3><label class="flex items-center gap-2" data-v-b4eac5b9><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.decodeEachLine) ? ssrLooseContain(options.value.decodeEachLine, null) : options.value.decodeEachLine) ? " checked" : ""} class="rounded" data-v-b4eac5b9><span class="text-sm" data-v-b4eac5b9>\u9010\u884C\u89E3\u7801\uFF08\u6BCF\u884C\u72EC\u7ACB\u89E3\u7801\uFF09</span></label><label class="flex items-center gap-2" data-v-b4eac5b9><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.showOriginal) ? ssrLooseContain(options.value.showOriginal, null) : options.value.showOriginal) ? " checked" : ""} class="rounded" data-v-b4eac5b9><span class="text-sm" data-v-b4eac5b9>\u663E\u793A\u539F\u59CB\u6587\u672C\u5BF9\u6BD4</span></label></div><div class="bg-muted p-4 rounded-lg" data-v-b4eac5b9><h3 class="font-medium text-sm mb-2" data-v-b4eac5b9>\u5E38\u89C1\u7F16\u7801\u5BF9\u7167</h3><div class="grid grid-cols-2 gap-2 text-xs font-mono" data-v-b4eac5b9><div data-v-b4eac5b9>%20 \u2192 \u7A7A\u683C</div><div data-v-b4eac5b9>%21 \u2192 !</div><div data-v-b4eac5b9>%22 \u2192 &quot;</div><div data-v-b4eac5b9>%23 \u2192 #</div><div data-v-b4eac5b9>%24 \u2192 $</div><div data-v-b4eac5b9>%25 \u2192 %</div><div data-v-b4eac5b9>%26 \u2192 &amp;</div><div data-v-b4eac5b9>%2B \u2192 +</div><div data-v-b4eac5b9>%2F \u2192 /</div><div data-v-b4eac5b9>%3F \u2192 ?</div><div data-v-b4eac5b9>%3D \u2192 =</div></div></div></div><div class="space-y-4" data-v-b4eac5b9><div class="flex items-center justify-between" data-v-b4eac5b9><h2 class="text-lg font-semibold" data-v-b4eac5b9>\u89E3\u7801\u7ED3\u679C</h2><div class="flex gap-2" data-v-b4eac5b9>`);
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-b4eac5b9>${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-b4eac5b9> \u4E0B\u8F7D </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (options.value.showOriginal && inputText.value) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-2" data-v-b4eac5b9><div class="p-3 bg-muted rounded-lg" data-v-b4eac5b9><p class="text-xs text-muted-foreground mb-1" data-v-b4eac5b9>\u7F16\u7801\u6587\u672C:</p><pre class="text-xs overflow-auto max-h-32" data-v-b4eac5b9>${ssrInterpolate(inputText.value)}</pre></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-b4eac5b9><p class="text-xs text-muted-foreground mb-1" data-v-b4eac5b9>\u89E3\u7801\u6587\u672C:</p><pre class="text-xs overflow-auto max-h-32" data-v-b4eac5b9>${ssrInterpolate(outputText.value)}</pre></div></div>`);
      } else {
        _push(`<div class="relative" data-v-b4eac5b9>`);
        if (outputText.value) {
          _push(`<pre class="w-full h-64 p-4 bg-muted rounded-lg overflow-auto text-sm whitespace-pre-wrap break-all" data-v-b4eac5b9>${ssrInterpolate(outputText.value)}</pre>`);
        } else {
          _push(`<div class="w-full h-64 p-4 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" data-v-b4eac5b9> \u89E3\u7801\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC </div>`);
        }
        if (outputText.value) {
          _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-b4eac5b9>${ssrInterpolate(outputText.value.length)} \u5B57\u7B26 </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      if (inputText.value) {
        _push(`<div class="bg-muted p-4 rounded-lg" data-v-b4eac5b9><h3 class="font-medium text-sm mb-2" data-v-b4eac5b9>\u89E3\u7801\u7EDF\u8BA1</h3><div class="grid grid-cols-2 gap-2 text-xs" data-v-b4eac5b9><div data-v-b4eac5b9>\u539F\u59CB\u957F\u5EA6: ${ssrInterpolate(inputText.value.length)}</div><div data-v-b4eac5b9>\u89E3\u7801\u957F\u5EA6: ${ssrInterpolate(outputText.value.length)}</div><div data-v-b4eac5b9>\u8282\u7701\u5B57\u7B26: ${ssrInterpolate(inputText.value.length - outputText.value.length)}</div><div data-v-b4eac5b9>\u538B\u7F29\u7387: ${ssrInterpolate(((inputText.value.length - outputText.value.length) / inputText.value.length * 100).toFixed(1))}%</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6" data-v-b4eac5b9><div class="bg-card rounded-lg p-6" data-v-b4eac5b9><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-b4eac5b9>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u6280\u5DE7 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-b4eac5b9><p data-v-b4eac5b9>\u2022 \u53EF\u4EE5\u4E00\u6B21\u8F93\u5165\u591A\u4E2A URL\uFF0C\u6BCF\u884C\u4E00\u4E2A\uFF0C\u5DE5\u5177\u4F1A\u81EA\u52A8\u89E3\u7801</p><p data-v-b4eac5b9>\u2022 \u652F\u6301\u62D6\u62FD\u6587\u672C\u6587\u4EF6\u8FDB\u884C\u6279\u91CF\u89E3\u7801</p><p data-v-b4eac5b9>\u2022 \u89E3\u7801\u65F6\u4F1A\u81EA\u52A8\u5904\u7406\u5E38\u89C1\u7684\u7F16\u7801\u9519\u8BEF</p><p data-v-b4eac5b9>\u2022 \u53EF\u4EE5\u4F7F\u7528&quot;\u663E\u793A\u539F\u59CB\u6587\u672C\u5BF9\u6BD4&quot;\u529F\u80FD\u67E5\u770B\u89E3\u7801\u524D\u540E\u7684\u533A\u522B</p></div></div><div class="bg-card rounded-lg p-6" data-v-b4eac5b9><h3 class="text-lg font-semibold mb-4" data-v-b4eac5b9>\u89E3\u7801\u793A\u4F8B</h3><div class="space-y-4" data-v-b4eac5b9><div data-v-b4eac5b9><h4 class="font-medium text-sm mb-1" data-v-b4eac5b9>1. \u641C\u7D22\u53C2\u6570\u89E3\u7801</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-b4eac5b9><div class="p-3 bg-muted rounded-lg" data-v-b4eac5b9><p class="text-xs text-muted-foreground mb-1" data-v-b4eac5b9>\u7F16\u7801:</p><code class="text-xs" data-v-b4eac5b9>search%3Fq%3Dhello%20world%26lang%3Den</code></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-b4eac5b9><p class="text-xs text-muted-foreground mb-1" data-v-b4eac5b9>\u89E3\u7801:</p><code class="text-xs" data-v-b4eac5b9>search?q=hello world&amp;lang=en</code></div></div></div><div data-v-b4eac5b9><h4 class="font-medium text-sm mb-1" data-v-b4eac5b9>2. \u4E2D\u6587\u5185\u5BB9\u89E3\u7801</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-b4eac5b9><div class="p-3 bg-muted rounded-lg" data-v-b4eac5b9><p class="text-xs text-muted-foreground mb-1" data-v-b4eac5b9>\u7F16\u7801:</p><code class="text-xs" data-v-b4eac5b9>%E4%B8%AD%E6%96%87</code></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-b4eac5b9><p class="text-xs text-muted-foreground mb-1" data-v-b4eac5b9>\u89E3\u7801:</p><code class="text-xs" data-v-b4eac5b9>\u4E2D\u6587</code></div></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-b4eac5b9><h3 class="text-lg font-semibold mb-4" data-v-b4eac5b9>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-b4eac5b9>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/url-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Link), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-b4eac5b9${_scopeId}><p class="font-medium group-hover:text-primary" data-v-b4eac5b9${_scopeId}>URL \u7F16\u7801</p><p class="text-xs text-muted-foreground" data-v-b4eac5b9${_scopeId}>URL \u767E\u5206\u6BD4\u7F16\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "URL \u7F16\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "URL \u767E\u5206\u6BD4\u7F16\u7801")
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
            _push2(`<div data-v-b4eac5b9${_scopeId}><p class="font-medium group-hover:text-primary" data-v-b4eac5b9${_scopeId}>HTML \u89E3\u7801</p><p class="text-xs text-muted-foreground" data-v-b4eac5b9${_scopeId}>HTML \u5B9E\u4F53\u89E3\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "HTML \u89E3\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "HTML \u5B9E\u4F53\u89E3\u7801")
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
            _push2(`<div data-v-b4eac5b9${_scopeId}><p class="font-medium group-hover:text-primary" data-v-b4eac5b9${_scopeId}>Base64 \u89E3\u7801</p><p class="text-xs text-muted-foreground" data-v-b4eac5b9${_scopeId}>Base64 \u683C\u5F0F\u89E3\u7801</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/url-decode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const urlDecode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4eac5b9"]]);

export { urlDecode as default };
//# sourceMappingURL=url-decode-Bibcywyn.mjs.map
