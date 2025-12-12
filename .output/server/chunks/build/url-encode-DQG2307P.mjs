import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderComponent } from 'vue/server-renderer';
import { Globe, Link, ArrowRight, FileText, Hash } from 'lucide-vue-next';
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
      title: "URL\u7F16\u7801\u5668 - \u5728\u7EBFURL\u767E\u5206\u6BD4\u7F16\u7801\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFURL\u7F16\u7801\u5DE5\u5177\uFF0C\u652F\u6301\u5B8C\u6574\u7F16\u7801\u548C\u90E8\u5206\u7F16\u7801\u6A21\u5F0F\uFF0C\u786E\u4FDDURL\u5B89\u5168\u4F20\u8F93\uFF0C\u63D0\u4F9B\u5B9E\u65F6\u7F16\u7801\u9884\u89C8\u3002",
      keywords: ["url", "\u7F16\u7801", "encoder", "percent-encoding", "urlencode", "\u5728\u7EBF\u5DE5\u5177", "url safe"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-2e841e1e><div class="mt-4 mb-8" data-v-2e841e1e><h1 class="text-3xl font-bold mb-3" data-v-2e841e1e>URL \u7F16\u7801\u5668</h1><p class="text-muted-foreground" data-v-2e841e1e>\u5C06 URL \u6216\u6587\u672C\u8FDB\u884C\u767E\u5206\u6BD4\u7F16\u7801\uFF0C\u786E\u4FDD URL \u5728\u7F51\u7EDC\u4F20\u8F93\u4E2D\u5B89\u5168\u53EF\u9760</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-2e841e1e><div class="space-y-4" data-v-2e841e1e><div class="flex items-center justify-between" data-v-2e841e1e><h2 class="text-lg font-semibold" data-v-2e841e1e>\u8F93\u5165\u5185\u5BB9</h2><div class="flex gap-2" data-v-2e841e1e><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2e841e1e> \u6E05\u7A7A </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2e841e1e> \u793A\u4F8B </button></div></div><textarea placeholder="\u8BF7\u8F93\u5165 URL \u6216\u9700\u8981\u7F16\u7801\u7684\u6587\u672C..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-2e841e1e>${ssrInterpolate(inputText.value)}</textarea><div class="space-y-3" data-v-2e841e1e><h3 class="font-medium text-sm" data-v-2e841e1e>\u7F16\u7801\u9009\u9879</h3><div class="space-y-2" data-v-2e841e1e><label class="flex items-center gap-2" data-v-2e841e1e><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(encodeMode.value, "full")) ? " checked" : ""} value="full" class="rounded" data-v-2e841e1e><span class="text-sm" data-v-2e841e1e>\u5B8C\u6574\u7F16\u7801\uFF08\u7F16\u7801\u6240\u6709\u975E\u5B89\u5168\u5B57\u7B26\uFF09</span></label><label class="flex items-center gap-2" data-v-2e841e1e><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(encodeMode.value, "partial")) ? " checked" : ""} value="partial" class="rounded" data-v-2e841e1e><span class="text-sm" data-v-2e841e1e>\u90E8\u5206\u7F16\u7801\uFF08\u4EC5\u7F16\u7801\u7279\u6B8A\u5B57\u7B26\uFF09</span></label></div></div><div class="bg-muted p-4 rounded-lg" data-v-2e841e1e><h3 class="font-medium text-sm mb-2" data-v-2e841e1e>\u5E38\u89C1\u7F16\u7801\u53C2\u8003</h3><div class="grid grid-cols-2 gap-2 text-xs font-mono" data-v-2e841e1e><div data-v-2e841e1e>\u7A7A\u683C \u2192 %20</div><div data-v-2e841e1e>! \u2192 %21</div><div data-v-2e841e1e>&quot; \u2192 %22</div><div data-v-2e841e1e># \u2192 %23</div><div data-v-2e841e1e>$ \u2192 %24</div><div data-v-2e841e1e>% \u2192 %25</div><div data-v-2e841e1e>&amp; \u2192 %26</div><div data-v-2e841e1e>+ \u2192 %2B</div><div data-v-2e841e1e>/ \u2192 %2F</div><div data-v-2e841e1e>? \u2192 %3F</div><div data-v-2e841e1e>= \u2192 %3D</div></div></div></div><div class="space-y-4" data-v-2e841e1e><div class="flex items-center justify-between" data-v-2e841e1e><h2 class="text-lg font-semibold" data-v-2e841e1e>\u7F16\u7801\u7ED3\u679C</h2><div class="flex gap-2" data-v-2e841e1e>`);
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2e841e1e>${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2e841e1e> \u4E0B\u8F7D </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="relative" data-v-2e841e1e>`);
      if (outputText.value) {
        _push(`<pre class="w-full h-64 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-2e841e1e>${ssrInterpolate(outputText.value)}</pre>`);
      } else {
        _push(`<div class="w-full h-64 p-4 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" data-v-2e841e1e> \u7F16\u7801\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC </div>`);
      }
      if (outputText.value) {
        _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-2e841e1e>${ssrInterpolate(outputText.value.length)} \u5B57\u7B26 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (inputText.value) {
        _push(`<div class="bg-muted p-4 rounded-lg" data-v-2e841e1e><h3 class="font-medium text-sm mb-2" data-v-2e841e1e>\u7F16\u7801\u7EDF\u8BA1</h3><div class="grid grid-cols-2 gap-2 text-xs" data-v-2e841e1e><div data-v-2e841e1e>\u539F\u59CB\u957F\u5EA6: ${ssrInterpolate(inputText.value.length)}</div><div data-v-2e841e1e>\u7F16\u7801\u957F\u5EA6: ${ssrInterpolate(outputText.value.length)}</div><div data-v-2e841e1e>\u7F16\u7801\u589E\u52A0: ${ssrInterpolate(outputText.value.length - inputText.value.length)} \u5B57\u7B26</div><div data-v-2e841e1e>\u7F16\u7801\u7387: ${ssrInterpolate((outputText.value.length / inputText.value.length * 100).toFixed(1))}%</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6" data-v-2e841e1e><div class="bg-card rounded-lg p-6" data-v-2e841e1e><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-2e841e1e>`);
      _push(ssrRenderComponent(unref(Globe), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` URL \u7F16\u7801\u4F7F\u7528\u573A\u666F </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-2e841e1e><div class="space-y-3" data-v-2e841e1e><h4 class="font-medium" data-v-2e841e1e>\u4F55\u65F6\u9700\u8981 URL \u7F16\u7801\uFF1A</h4><ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground" data-v-2e841e1e><li data-v-2e841e1e>URL \u53C2\u6570\u4F20\u9012</li><li data-v-2e841e1e>\u8868\u5355\u6570\u636E\u63D0\u4EA4</li><li data-v-2e841e1e>HTTP \u8BF7\u6C42\u5934</li><li data-v-2e841e1e>Cookie \u503C</li><li data-v-2e841e1e>\u6587\u4EF6\u540D\u5305\u542B\u7279\u6B8A\u5B57\u7B26</li></ul></div><div class="space-y-3" data-v-2e841e1e><h4 class="font-medium" data-v-2e841e1e>\u4E0D\u9700\u8981\u7F16\u7801\u7684\u5B57\u7B26\uFF1A</h4><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><code class="text-sm" data-v-2e841e1e>A-Z a-z 0-9 - _ . ! ~ * &#39; ( ) ; , : @</code></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-2e841e1e><h3 class="text-lg font-semibold mb-4" data-v-2e841e1e>\u7F16\u7801\u793A\u4F8B</h3><div class="space-y-4" data-v-2e841e1e><div data-v-2e841e1e><h4 class="font-medium text-sm mb-1" data-v-2e841e1e>1. \u641C\u7D22\u53C2\u6570</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-2e841e1e><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><p class="text-xs text-muted-foreground mb-1" data-v-2e841e1e>\u539F\u59CB:</p><code class="text-xs" data-v-2e841e1e>search?q=hello world&amp;lang=en</code></div><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><p class="text-xs text-muted-foreground mb-1" data-v-2e841e1e>\u7F16\u7801\u540E:</p><code class="text-xs" data-v-2e841e1e>search%3Fq%3Dhello%20world%26lang%3Den</code></div></div></div><div data-v-2e841e1e><h4 class="font-medium text-sm mb-1" data-v-2e841e1e>2. \u5305\u542B\u7A7A\u683C\u7684 URL</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-2e841e1e><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><p class="text-xs text-muted-foreground mb-1" data-v-2e841e1e>\u539F\u59CB:</p><code class="text-xs" data-v-2e841e1e>https://example.com/api/data?name=John Doe</code></div><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><p class="text-xs text-muted-foreground mb-1" data-v-2e841e1e>\u7F16\u7801\u540E:</p><code class="text-xs" data-v-2e841e1e>https://example.com/api/data?name=John%20Doe</code></div></div></div><div data-v-2e841e1e><h4 class="font-medium text-sm mb-1" data-v-2e841e1e>3. \u7279\u6B8A\u5B57\u7B26\u5904\u7406</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-2e841e1e><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><p class="text-xs text-muted-foreground mb-1" data-v-2e841e1e>\u539F\u59CB:</p><code class="text-xs" data-v-2e841e1e>price=$100&amp;discount=20%</code></div><div class="p-3 bg-muted rounded-lg" data-v-2e841e1e><p class="text-xs text-muted-foreground mb-1" data-v-2e841e1e>\u7F16\u7801\u540E:</p><code class="text-xs" data-v-2e841e1e>price%3D%24100%26discount%3D20%25</code></div></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-2e841e1e><h3 class="text-lg font-semibold mb-4" data-v-2e841e1e>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-2e841e1e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/url-decode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Link), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-2e841e1e${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2e841e1e${_scopeId}>URL \u89E3\u7801</p><p class="text-xs text-muted-foreground" data-v-2e841e1e${_scopeId}>URL \u767E\u5206\u6BD4\u89E3\u7801</p></div>`);
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
        to: "/tools/html-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-2e841e1e${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2e841e1e${_scopeId}>HTML \u7F16\u7801</p><p class="text-xs text-muted-foreground" data-v-2e841e1e${_scopeId}>HTML \u5B9E\u4F53\u7F16\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "HTML \u7F16\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "HTML \u5B9E\u4F53\u7F16\u7801")
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
            _push2(`<div data-v-2e841e1e${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2e841e1e${_scopeId}>Base64 \u7F16\u7801</p><p class="text-xs text-muted-foreground" data-v-2e841e1e${_scopeId}>Base64 \u683C\u5F0F\u8F6C\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 \u7F16\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Base64 \u683C\u5F0F\u8F6C\u6362")
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

export { urlEncode as default };
//# sourceMappingURL=url-encode-DQG2307P.mjs.map
