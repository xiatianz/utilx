import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { FileText, Hash, ArrowRight, Link } from 'lucide-vue-next';
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
  __name: "base64-decode",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const outputText = ref("");
    const outputType = ref("text");
    const imageData = ref("");
    const imageInfo = ref({ width: 0, height: 0 });
    const error = ref("");
    const copied = ref(false);
    const options = ref({
      urlSafe: false,
      strict: false
    });
    const decodeBase64 = (base64) => {
      try {
        let cleanBase64 = base64.trim();
        if (cleanBase64.startsWith("data:")) {
          const parts = cleanBase64.split(",");
          if (parts.length < 2) {
            throw new Error("\u65E0\u6548\u7684 Data URL \u683C\u5F0F");
          }
          cleanBase64 = parts[1];
          const mimeMatch = parts[0].match(/data:image\/(\w+);base64/);
          if (mimeMatch) {
            outputType.value = "image";
            return cleanBase64;
          }
        }
        if (options.value.urlSafe) {
          cleanBase64 = cleanBase64.replace(/-/g, "+").replace(/_/g, "/");
        }
        cleanBase64 = cleanBase64.replace(/\s/g, "");
        if (options.value.strict) {
          const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
          if (!base64Regex.test(cleanBase64)) {
            throw new Error("\u8F93\u5165\u5305\u542B\u975E Base64 \u5B57\u7B26");
          }
        }
        const padLength = 4 - cleanBase64.length % 4;
        if (padLength < 4) {
          cleanBase64 += "=".repeat(padLength);
        }
        outputType.value = "text";
        return atob(cleanBase64);
      } catch (err) {
        error.value = "\u89E3\u7801\u5931\u8D25\uFF1A" + err.message;
        outputType.value = "error";
        return "";
      }
    };
    const loadImage = (base64) => {
      const img = new Image();
      img.onload = () => {
        imageInfo.value = {
          width: img.width,
          height: img.height
        };
      };
      img.onerror = () => {
        error.value = "\u56FE\u7247\u52A0\u8F7D\u5931\u8D25";
      };
      img.src = `data:image/png;base64,${base64}`;
    };
    watch(inputText, (newText) => {
      if (newText) {
        error.value = "";
        outputText.value = "";
        imageData.value = "";
        const decoded = decodeBase64(newText);
        if (decoded && outputType.value === "text") {
          outputText.value = decodeURIComponent(escape(decoded));
        } else if (decoded && outputType.value === "image") {
          imageData.value = `data:image/png;base64,${decoded}`;
          loadImage(decoded);
        }
      } else {
        outputText.value = "";
        imageData.value = "";
        imageInfo.value = { width: 0, height: 0 };
        error.value = "";
        outputType.value = "text";
      }
    });
    watch(options, () => {
      if (inputText.value) {
        inputText.value = inputText.value;
      }
    }, { deep: true });
    useSeoMeta({
      title: "Base64\u89E3\u7801\u5668 - \u5728\u7EBFBase64\u89E3\u7801\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFBase64\u89E3\u7801\u5DE5\u5177\uFF0C\u652F\u6301\u6587\u672C\u548C\u56FE\u7247\u89E3\u7801\uFF0C\u81EA\u52A8\u8BC6\u522B\u56FE\u7247\u683C\u5F0F\uFF0C\u63D0\u4F9B\u591A\u79CD\u89E3\u7801\u9009\u9879\u3002",
      keywords: ["base64", "\u89E3\u7801", "decoder", "\u5728\u7EBF\u5DE5\u5177", "\u56FE\u7247\u89E3\u7801", "\u6587\u672C\u89E3\u7801"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-9c0e84e6><div class="mt-4 mb-8" data-v-9c0e84e6><h1 class="text-3xl font-bold mb-3" data-v-9c0e84e6>Base64 \u89E3\u7801\u5668</h1><p class="text-muted-foreground" data-v-9c0e84e6>\u5C06 Base64 \u7F16\u7801\u6570\u636E\u89E3\u7801\u8FD8\u539F\u4E3A\u539F\u59CB\u5185\u5BB9\uFF0C\u652F\u6301\u6587\u672C\u548C\u56FE\u7247\u89E3\u7801</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-9c0e84e6><div class="space-y-4" data-v-9c0e84e6><div class="flex items-center justify-between" data-v-9c0e84e6><h2 class="text-lg font-semibold" data-v-9c0e84e6>Base64 \u8F93\u5165</h2><div class="flex gap-2" data-v-9c0e84e6><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-9c0e84e6> \u6E05\u7A7A </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-9c0e84e6> \u7C98\u8D34 </button></div></div><div class="relative" data-v-9c0e84e6><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u89E3\u7801\u7684 Base64 \u5B57\u7B26\u4E32..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm" data-v-9c0e84e6>${ssrInterpolate(inputText.value)}</textarea>`);
      if (inputText.value) {
        _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-9c0e84e6>${ssrInterpolate(inputText.value.length)} \u5B57\u7B26 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-3" data-v-9c0e84e6><label class="flex items-center gap-2" data-v-9c0e84e6><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.urlSafe) ? ssrLooseContain(options.value.urlSafe, null) : options.value.urlSafe) ? " checked" : ""} class="rounded" data-v-9c0e84e6><span class="text-sm" data-v-9c0e84e6>URL \u5B89\u5168\u89E3\u7801\uFF08\u66FF\u6362 - \u548C _\uFF09</span></label><label class="flex items-center gap-2" data-v-9c0e84e6><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.strict) ? ssrLooseContain(options.value.strict, null) : options.value.strict) ? " checked" : ""} class="rounded" data-v-9c0e84e6><span class="text-sm" data-v-9c0e84e6>\u4E25\u683C\u6A21\u5F0F\uFF08\u4EC5\u5141\u8BB8 Base64 \u5B57\u7B26\uFF09</span></label></div></div><div class="space-y-4" data-v-9c0e84e6><div class="flex items-center justify-between" data-v-9c0e84e6><h2 class="text-lg font-semibold" data-v-9c0e84e6>\u89E3\u7801\u7ED3\u679C</h2><div class="flex gap-2" data-v-9c0e84e6>`);
      if (outputText.value || outputType.value === "image") {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-9c0e84e6>${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value && outputType.value === "text") {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-9c0e84e6> \u4E0B\u8F7D </button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputType.value === "image") {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-9c0e84e6> \u4E0B\u8F7D\u56FE\u7247 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (outputType.value === "text") {
        _push(`<div class="relative" data-v-9c0e84e6>`);
        if (outputText.value) {
          _push(`<pre class="w-full h-64 p-4 bg-muted rounded-lg overflow-auto text-sm whitespace-pre-wrap break-all" data-v-9c0e84e6>${ssrInterpolate(outputText.value)}</pre>`);
        } else {
          _push(`<div class="w-full h-64 p-4 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" data-v-9c0e84e6> \u89E3\u7801\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC </div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (outputType.value === "image") {
        _push(`<div class="w-full min-h-64 p-4 bg-muted rounded-lg flex items-center justify-center" data-v-9c0e84e6>`);
        if (imageData.value) {
          _push(`<div class="text-center" data-v-9c0e84e6><img${ssrRenderAttr("src", imageData.value)} alt="Decoded image" class="max-w-full max-h-64 rounded-lg shadow-lg" data-v-9c0e84e6><p class="text-sm text-muted-foreground mt-2" data-v-9c0e84e6> \u56FE\u7247\u5C3A\u5BF8: ${ssrInterpolate(imageInfo.value.width)} x ${ssrInterpolate(imageInfo.value.height)}</p></div>`);
        } else {
          _push(`<p class="text-muted-foreground" data-v-9c0e84e6> \u65E0\u6CD5\u8BC6\u522B\u4E3A\u56FE\u7247\u6570\u636E </p>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div class="w-full p-4 bg-destructive/10 border border-destructive/20 rounded-lg" data-v-9c0e84e6><p class="text-sm text-destructive" data-v-9c0e84e6>${ssrInterpolate(error.value)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6" data-v-9c0e84e6><div class="bg-card rounded-lg p-6" data-v-9c0e84e6><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-9c0e84e6>`);
      _push(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u652F\u6301\u7684 Base64 \u683C\u5F0F </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-9c0e84e6><div class="space-y-3" data-v-9c0e84e6><h4 class="font-medium" data-v-9c0e84e6>\u6807\u51C6 Base64\uFF1A</h4><div class="p-3 bg-muted rounded-lg" data-v-9c0e84e6><code class="text-xs" data-v-9c0e84e6>aGVsbG8gd29ybGQ=</code></div></div><div class="space-y-3" data-v-9c0e84e6><h4 class="font-medium" data-v-9c0e84e6>Data URL (\u56FE\u7247)\uFF1A</h4><div class="p-3 bg-muted rounded-lg" data-v-9c0e84e6><code class="text-xs block truncate" data-v-9c0e84e6>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA...</code></div></div><div class="space-y-3" data-v-9c0e84e6><h4 class="font-medium" data-v-9c0e84e6>\u5E26\u6362\u884C\u7684 Base64\uFF1A</h4><div class="p-3 bg-muted rounded-lg" data-v-9c0e84e6><code class="text-xs" data-v-9c0e84e6>YWJjZGVmZ2hpams=</code></div></div><div class="space-y-3" data-v-9c0e84e6><h4 class="font-medium" data-v-9c0e84e6>URL \u5B89\u5168 Base64\uFF1A</h4><div class="p-3 bg-muted rounded-lg" data-v-9c0e84e6><code class="text-xs" data-v-9c0e84e6>aGVsbG8gd29ybGQ-</code></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-9c0e84e6><h3 class="text-lg font-semibold mb-4" data-v-9c0e84e6>\u4F7F\u7528\u8BF4\u660E</h3><div class="space-y-2 text-sm text-muted-foreground" data-v-9c0e84e6><p data-v-9c0e84e6>\u2022 \u652F\u6301\u6807\u51C6 Base64\u3001URL \u5B89\u5168 Base64\u3001\u5E26\u6362\u884C\u7684 Base64 \u683C\u5F0F</p><p data-v-9c0e84e6>\u2022 \u81EA\u52A8\u68C0\u6D4B\u56FE\u7247\u6570\u636E\u5E76\u663E\u793A\u9884\u89C8</p><p data-v-9c0e84e6>\u2022 \u4E25\u683C\u6A21\u5F0F\u4E0B\u53EA\u5141\u8BB8 Base64 \u5B57\u7B26\u96C6\uFF0C\u5426\u5219\u4F1A\u62A5\u9519</p><p data-v-9c0e84e6>\u2022 \u652F\u6301\u4ECE\u526A\u8D34\u677F\u76F4\u63A5\u7C98\u8D34 Base64 \u6570\u636E</p></div></div><div class="bg-card rounded-lg p-6" data-v-9c0e84e6><h3 class="text-lg font-semibold mb-4" data-v-9c0e84e6>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-9c0e84e6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/base64-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-9c0e84e6${_scopeId}><p class="font-medium group-hover:text-primary" data-v-9c0e84e6${_scopeId}>Base64 \u7F16\u7801</p><p class="text-xs text-muted-foreground" data-v-9c0e84e6${_scopeId}>\u6587\u672C/\u56FE\u7247\u8F6C Base64</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 \u7F16\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6587\u672C/\u56FE\u7247\u8F6C Base64")
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
            _push2(`<div data-v-9c0e84e6${_scopeId}><p class="font-medium group-hover:text-primary" data-v-9c0e84e6${_scopeId}>URL \u89E3\u7801</p><p class="text-xs text-muted-foreground" data-v-9c0e84e6${_scopeId}>URL \u767E\u5206\u6BD4\u89E3\u7801</p></div>`);
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
        to: "/tools/hex-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-9c0e84e6${_scopeId}><p class="font-medium group-hover:text-primary" data-v-9c0e84e6${_scopeId}>\u5341\u516D\u8FDB\u5236\u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-9c0e84e6${_scopeId}>\u6587\u672C\u4E0E\u5341\u516D\u8FDB\u5236\u4E92\u8F6C</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/base64-decode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const base64Decode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c0e84e6"]]);

export { base64Decode as default };
//# sourceMappingURL=base64-decode-CMfRXKLV.mjs.map
