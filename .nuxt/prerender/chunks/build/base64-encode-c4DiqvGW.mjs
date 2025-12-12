import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { Upload, Info, Hash, ArrowRight, Link } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
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
  __name: "base64-encode",
  __ssrInlineRender: true,
  setup(__props) {
    const inputMode = ref("text");
    const inputText = ref("");
    const outputText = ref("");
    const selectedFile = ref(null);
    const copied = ref(false);
    const options = ref({
      urlSafe: false,
      lineBreaks: false
    });
    const encodeBase64 = (text) => {
      try {
        let encoded = btoa(unescape(encodeURIComponent(text)));
        if (options.value.urlSafe) {
          encoded = encoded.replace(/\+/g, "-").replace(/\//g, "_");
        }
        if (options.value.lineBreaks) {
          const lines = [];
          for (let i = 0; i < encoded.length; i += 76) {
            lines.push(encoded.substring(i, i + 76));
          }
          encoded = lines.join("\n");
        }
        return encoded;
      } catch (error) {
        return "\u7F16\u7801\u5931\u8D25\uFF1A" + error.message;
      }
    };
    watch(inputText, (newText) => {
      if (newText) {
        outputText.value = encodeBase64(newText);
      } else {
        outputText.value = "";
      }
    });
    watch(options, () => {
      if (inputText.value || selectedFile.value) {
        if (inputText.value) {
          outputText.value = encodeBase64(inputText.value);
        }
      }
    }, { deep: true });
    useSeoMeta({
      title: "Base64\u7F16\u7801\u5668 - \u5728\u7EBFBase64\u7F16\u7801\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFBase64\u7F16\u7801\u5DE5\u5177\uFF0C\u652F\u6301\u6587\u672C\u548C\u56FE\u7247\u7F16\u7801\uFF0C\u53EF\u62D6\u62FD\u4E0A\u4F20\u6587\u4EF6\uFF0C\u63D0\u4F9B\u591A\u79CD\u7F16\u7801\u9009\u9879\u3002",
      keywords: ["base64", "\u7F16\u7801", "encoder", "\u5728\u7EBF\u5DE5\u5177", "\u56FE\u7247\u7F16\u7801", "\u6587\u4EF6\u7F16\u7801"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-2bf281b4><div class="mt-4 mb-8" data-v-2bf281b4><h1 class="text-3xl font-bold mb-3" data-v-2bf281b4>Base64 \u7F16\u7801\u5668</h1><p class="text-muted-foreground" data-v-2bf281b4>\u5C06\u6587\u672C\u6216\u56FE\u7247\u8F6C\u6362\u4E3A Base64 \u7F16\u7801\u683C\u5F0F\uFF0C\u652F\u6301\u62D6\u62FD\u4E0A\u4F20\u6587\u4EF6</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-2bf281b4><div class="space-y-4" data-v-2bf281b4><div class="flex items-center justify-between" data-v-2bf281b4><h2 class="text-lg font-semibold" data-v-2bf281b4>\u8F93\u5165\u5185\u5BB9</h2><div class="flex gap-2" data-v-2bf281b4><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2bf281b4> \u6E05\u7A7A </button></div></div><div class="flex gap-2 p-1 bg-muted rounded-lg" data-v-2bf281b4><button class="${ssrRenderClass([inputMode.value === "text" ? "bg-background shadow-sm" : "", "flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors"])}" data-v-2bf281b4> \u6587\u672C\u8F93\u5165 </button><button class="${ssrRenderClass([inputMode.value === "file" ? "bg-background shadow-sm" : "", "flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors"])}" data-v-2bf281b4> \u6587\u4EF6\u4E0A\u4F20 </button></div>`);
      if (inputMode.value === "text") {
        _push(`<textarea placeholder="\u8BF7\u8F93\u5165\u8981\u7F16\u7801\u7684\u6587\u672C..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-2bf281b4>${ssrInterpolate(inputText.value)}</textarea>`);
      } else {
        _push(`<!---->`);
      }
      if (inputMode.value === "file") {
        _push(`<div class="w-full h-64 border-2 border-dashed border-muted-foreground/25 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors" data-v-2bf281b4><input type="file" class="hidden" accept="image/*,.txt,.json,.xml,.csv" data-v-2bf281b4>`);
        _push(ssrRenderComponent(unref(Upload), { class: "w-12 h-12 text-muted-foreground mb-2" }, null, _parent));
        _push(`<p class="text-sm text-muted-foreground mb-1" data-v-2bf281b4>\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\u6216\u70B9\u51FB\u4E0A\u4F20</p><p class="text-xs text-muted-foreground" data-v-2bf281b4>\u652F\u6301\u56FE\u7247\u548C\u6587\u672C\u6587\u4EF6</p>`);
        if (selectedFile.value) {
          _push(`<p class="text-sm text-primary mt-2" data-v-2bf281b4>${ssrInterpolate(selectedFile.value.name)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-3" data-v-2bf281b4><label class="flex items-center gap-2" data-v-2bf281b4><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.urlSafe) ? ssrLooseContain(options.value.urlSafe, null) : options.value.urlSafe) ? " checked" : ""} class="rounded" data-v-2bf281b4><span class="text-sm" data-v-2bf281b4>URL \u5B89\u5168\u7F16\u7801\uFF08\u66FF\u6362 + \u548C /\uFF09</span></label><label class="flex items-center gap-2" data-v-2bf281b4><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.lineBreaks) ? ssrLooseContain(options.value.lineBreaks, null) : options.value.lineBreaks) ? " checked" : ""} class="rounded" data-v-2bf281b4><span class="text-sm" data-v-2bf281b4>\u6BCF 76 \u4E2A\u5B57\u7B26\u6362\u884C</span></label></div></div><div class="space-y-4" data-v-2bf281b4><div class="flex items-center justify-between" data-v-2bf281b4><h2 class="text-lg font-semibold" data-v-2bf281b4>\u7F16\u7801\u7ED3\u679C</h2><div class="flex gap-2" data-v-2bf281b4>`);
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2bf281b4>${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2bf281b4> \u4E0B\u8F7D </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="relative" data-v-2bf281b4>`);
      if (outputText.value) {
        _push(`<pre class="w-full h-64 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-2bf281b4>${ssrInterpolate(outputText.value)}</pre>`);
      } else {
        _push(`<div class="w-full h-64 p-4 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" data-v-2bf281b4> \u7F16\u7801\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC </div>`);
      }
      if (outputText.value) {
        _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-2bf281b4>${ssrInterpolate(outputText.value.length)} \u5B57\u7B26 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="mt-12 space-y-6" data-v-2bf281b4><div class="bg-card rounded-lg p-6" data-v-2bf281b4><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-2bf281b4>`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5173\u4E8E Base64 \u7F16\u7801 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-2bf281b4><p data-v-2bf281b4>Base64 \u662F\u4E00\u79CD\u57FA\u4E8E 64 \u4E2A\u53EF\u6253\u5370\u5B57\u7B26\u6765\u8868\u793A\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u7F16\u7801\u65B9\u6CD5\u3002\u5B83\u5E38\u7528\u4E8E\u5728\u5904\u7406\u6587\u672C\u6570\u636E\u7684\u573A\u5408\uFF0C\u8868\u793A\u3001\u4F20\u8F93\u548C\u5B58\u50A8\u4E00\u4E9B\u4E8C\u8FDB\u5236\u6570\u636E\u3002</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4" data-v-2bf281b4><div data-v-2bf281b4><h4 class="font-medium text-foreground mb-2" data-v-2bf281b4>\u5E38\u89C1\u7528\u9014\uFF1A</h4><ul class="list-disc list-inside space-y-1" data-v-2bf281b4><li data-v-2bf281b4>\u90AE\u4EF6\u9644\u4EF6\u7F16\u7801</li><li data-v-2bf281b4>URL \u53C2\u6570\u4F20\u9012</li><li data-v-2bf281b4>\u56FE\u7247\u5185\u5D4C\u5230 HTML/CSS</li><li data-v-2bf281b4>\u914D\u7F6E\u6587\u4EF6\u5B58\u50A8</li></ul></div><div data-v-2bf281b4><h4 class="font-medium text-foreground mb-2" data-v-2bf281b4>\u7F16\u7801\u5B57\u7B26\u96C6\uFF1A</h4><ul class="list-disc list-inside space-y-1" data-v-2bf281b4><li data-v-2bf281b4>\u5927\u5199\u5B57\u6BCD A-Z (26\u4E2A)</li><li data-v-2bf281b4>\u5C0F\u5199\u5B57\u6BCD a-z (26\u4E2A)</li><li data-v-2bf281b4>\u6570\u5B57 0-9 (10\u4E2A)</li><li data-v-2bf281b4>\u52A0\u53F7 + \u548C\u659C\u6760 / (2\u4E2A)</li><li data-v-2bf281b4>\u7B49\u53F7 = \u4F5C\u4E3A\u586B\u5145\u5B57\u7B26</li></ul></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-2bf281b4><h3 class="text-lg font-semibold mb-4" data-v-2bf281b4>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-2bf281b4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/base64-decode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-2bf281b4${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2bf281b4${_scopeId}>Base64 \u89E3\u7801</p><p class="text-xs text-muted-foreground" data-v-2bf281b4${_scopeId}>\u89E3\u7801 Base64 \u5B57\u7B26\u4E32</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 \u89E3\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u89E3\u7801 Base64 \u5B57\u7B26\u4E32")
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
            _push2(`<div data-v-2bf281b4${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2bf281b4${_scopeId}>URL \u7F16\u7801</p><p class="text-xs text-muted-foreground" data-v-2bf281b4${_scopeId}>URL \u767E\u5206\u6BD4\u7F16\u7801</p></div>`);
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
        to: "/tools/hex-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-2bf281b4${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2bf281b4${_scopeId}>\u5341\u516D\u8FDB\u5236\u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-2bf281b4${_scopeId}>\u6587\u672C\u4E0E\u5341\u516D\u8FDB\u5236\u4E92\u8F6C</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5341\u516D\u8FDB\u5236\u8F6C\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6587\u672C\u4E0E\u5341\u516D\u8FDB\u5236\u4E92\u8F6C")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/base64-encode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const base64Encode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2bf281b4"]]);

export { base64Encode as default };
//# sourceMappingURL=base64-encode-c4DiqvGW.mjs.map
