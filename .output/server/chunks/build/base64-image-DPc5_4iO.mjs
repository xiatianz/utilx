import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrLooseEqual } from 'vue/server-renderer';
import { ImageIcon, Download, X, Plus, Info, Hash, ArrowRight, Zap, Code } from 'lucide-vue-next';
import { f as useSeoMeta } from './server.mjs';
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
  __name: "base64-image",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedImage = ref(null);
    const base64Output = ref("");
    const base64Input = ref("");
    const decodedImage = ref(null);
    const downloadFilename = ref("image");
    const downloadFormat = ref("png");
    const includePrefix = ref(true);
    const optimizeBase64 = ref(true);
    const base64Copied = ref(false);
    ref(null);
    const batchItems = ref([{ base64: "", image: null }]);
    const sampleImages = [
      { id: 1, name: "\u793A\u4F8B1", url: "https://picsum.photos/200/200?random=1" },
      { id: 2, name: "\u793A\u4F8B2", url: "https://picsum.photos/200/200?random=2" },
      { id: 3, name: "\u793A\u4F8B3", url: "https://picsum.photos/200/200?random=3" }
    ];
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    useSeoMeta({
      title: "Base64\u56FE\u7247 - \u5728\u7EBF\u56FE\u7247\u4E0EBase64\u4E92\u8F6C\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u56FE\u7247\u8F6CBase64\u548CBase64\u8F6C\u56FE\u7247\u5DE5\u5177\uFF0C\u652F\u6301\u6279\u91CF\u5904\u7406\uFF0C\u76F4\u63A5\u9884\u89C8\u548C\u4E0B\u8F7D\u3002",
      keywords: ["base64\u56FE\u7247", "\u56FE\u7247base64", "data url", "\u56FE\u7247\u7F16\u7801", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Base64 \u56FE\u7247</h1><p class="text-muted-foreground">\u56FE\u7247\u4E0E Base64 \u4E92\u8F6C\uFF0C\u652F\u6301\u5728\u7EBF\u9884\u89C8\u548C\u4E0B\u8F7D</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u56FE\u7247\u8F6C Base64</h2><div class="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer mb-4"><input type="file" class="hidden" accept="image/*">`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2">\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u91CC</p><p class="text-sm text-muted-foreground">\u6216\u8005\u70B9\u51FB\u9009\u62E9\u6587\u4EF6</p></div>`);
      if (selectedImage.value) {
        _push(`<div class="space-y-4"><div class="p-4 bg-muted rounded-lg"><h3 class="text-sm font-medium mb-2">\u56FE\u7247\u9884\u89C8</h3><img${ssrRenderAttr("src", selectedImage.value.url)}${ssrRenderAttr("alt", selectedImage.value.name)} class="w-full max-h-64 object-contain rounded"><div class="mt-2 text-xs text-muted-foreground">${ssrInterpolate(selectedImage.value.name)} \u2022 ${ssrInterpolate(formatFileSize(selectedImage.value.size))}</div></div><div><div class="flex items-center justify-between mb-2"><h3 class="text-sm font-medium">Base64 \u7F16\u7801</h3><div class="flex gap-2"><button class="px-3 py-1 text-sm text-primary hover:text-primary/80 transition-colors">${ssrInterpolate(base64Copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button><button class="px-3 py-1 text-sm text-destructive hover:text-destructive/80 transition-colors"> \u6E05\u7A7A </button></div></div><div class="relative"><textarea readonly rows="6" class="w-full px-3 py-2 border rounded-md bg-muted font-mono text-xs resize-none" placeholder="Base64 \u7F16\u7801\u5C06\u663E\u793A\u5728\u8FD9\u91CC">${ssrInterpolate(base64Output.value)}</textarea><div class="absolute bottom-2 right-2 text-xs text-muted-foreground">${ssrInterpolate(base64Output.value.length)} \u5B57\u7B26 </div></div></div><div class="space-y-3"><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(includePrefix.value) ? ssrLooseContain(includePrefix.value, null) : includePrefix.value) ? " checked" : ""} type="checkbox" class="rounded"><span class="text-sm">\u5305\u542B Data URL \u524D\u7F00</span></label><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(optimizeBase64.value) ? ssrLooseContain(optimizeBase64.value, null) : optimizeBase64.value) ? " checked" : ""} type="checkbox" class="rounded"><span class="text-sm">\u79FB\u9664\u6362\u884C\u7B26\u548C\u7A7A\u683C</span></label></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u793A\u4F8B\u56FE\u7247</h2><div class="grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(sampleImages, (sample) => {
        _push(`<button class="aspect-square rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all"><img${ssrRenderAttr("src", sample.url)}${ssrRenderAttr("alt", sample.name)} class="w-full h-full object-cover"></button>`);
      });
      _push(`<!--]--></div></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">Base64 \u8F6C\u56FE\u7247</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u7C98\u8D34 Base64 \u5B57\u7B26\u4E32</label><textarea rows="6" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm resize-none" placeholder="\u7C98\u8D34 Base64 \u5B57\u7B26\u4E32\u6216 Data URL">${ssrInterpolate(base64Input.value)}</textarea></div><div class="flex gap-2"><button class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"> \u8F6C\u6362\u4E3A\u56FE\u7247 </button><button class="px-4 py-2 border border-muted text-muted-foreground rounded-md hover:bg-muted transition-colors"> \u6E05\u7A7A </button></div>`);
      if (decodedImage.value) {
        _push(`<div class="space-y-4"><div class="p-4 bg-muted rounded-lg"><h3 class="text-sm font-medium mb-2">\u9884\u89C8</h3><img${ssrRenderAttr("src", decodedImage.value.url)} alt="Decoded image" class="w-full max-h-64 object-contain rounded"><div class="mt-2 text-xs text-muted-foreground">${ssrInterpolate(decodedImage.value.format)} \u2022 ${ssrInterpolate(formatFileSize(decodedImage.value.size))}</div></div><div class="space-y-3"><div><label class="text-sm font-medium">\u6587\u4EF6\u540D</label><input${ssrRenderAttr("value", downloadFilename.value)} type="text" placeholder="image" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div><div><label class="text-sm font-medium">\u4FDD\u5B58\u683C\u5F0F</label><select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"><option value="png"${ssrIncludeBooleanAttr(Array.isArray(downloadFormat.value) ? ssrLooseContain(downloadFormat.value, "png") : ssrLooseEqual(downloadFormat.value, "png")) ? " selected" : ""}>PNG</option><option value="jpeg"${ssrIncludeBooleanAttr(Array.isArray(downloadFormat.value) ? ssrLooseContain(downloadFormat.value, "jpeg") : ssrLooseEqual(downloadFormat.value, "jpeg")) ? " selected" : ""}>JPEG</option><option value="webp"${ssrIncludeBooleanAttr(Array.isArray(downloadFormat.value) ? ssrLooseContain(downloadFormat.value, "webp") : ssrLooseEqual(downloadFormat.value, "webp")) ? " selected" : ""}>WebP</option></select></div><button class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` \u4E0B\u8F7D\u56FE\u7247 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6279\u91CF\u8F6C\u6362</h2><p class="text-sm text-muted-foreground mb-4"> \u540C\u65F6\u5904\u7406\u591A\u4E2A Base64 \u5B57\u7B26\u4E32\uFF0C\u6279\u91CF\u8F6C\u6362\u4E3A\u56FE\u7247 </p><div class="space-y-3"><!--[-->`);
      ssrRenderList(batchItems.value, (item, index) => {
        _push(`<div class="space-y-2"><textarea rows="3" class="w-full px-3 py-2 border rounded-md font-mono text-xs resize-none"${ssrRenderAttr("placeholder", `Base64 ${index + 1}`)}>${ssrInterpolate(item.base64)}</textarea>`);
        if (item.image) {
          _push(`<div class="flex items-center gap-2 p-2 bg-muted rounded"><img${ssrRenderAttr("src", item.image)} alt="Preview" class="w-12 h-12 object-cover rounded"><span class="text-sm flex-1">\u5DF2\u89E3\u6790</span><button class="text-destructive hover:text-destructive/80">`);
          _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
          _push(`</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><div class="flex gap-2"><button class="flex-1 px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors flex items-center justify-center gap-2">`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent));
      _push(` \u6DFB\u52A0\u9879 </button>`);
      if (batchItems.value.some((item) => item.image)) {
        _push(`<button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` \u4E0B\u8F7D\u6240\u6709 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5173\u4E8E Base64 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u4EC0\u4E48\u662F Base64\uFF1F</h4><p>Base64 \u662F\u4E00\u79CD\u57FA\u4E8E64\u4E2A\u53EF\u6253\u5370\u5B57\u7B26\u6765\u8868\u793A\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u7F16\u7801\u65B9\u6CD5\u3002\u5E38\u7528\u4E8E\u5728\u6587\u672C\u534F\u8BAE\u4E2D\u4F20\u8F93\u4E8C\u8FDB\u5236\u6570\u636E\u3002</p></div><div><h4 class="font-medium text-foreground mb-2">Data URL \u683C\u5F0F</h4><code class="block bg-muted p-3 rounded-md text-xs"> data:[MIME-type];base64,[base64-data] </code></div><div><h4 class="font-medium text-foreground mb-2">\u4F7F\u7528\u573A\u666F</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u5728 HTML/CSS \u4E2D\u76F4\u63A5\u5D4C\u5165\u5C0F\u56FE\u7247</li><li>\u7535\u5B50\u90AE\u4EF6\u4E2D\u7684\u56FE\u7247\u9644\u4EF6</li><li>API \u63A5\u53E3\u4F20\u8F93\u56FE\u7247\u6570\u636E</li><li>\u51CF\u5C11 HTTP \u8BF7\u6C42\u6570\u91CF</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/base64-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Base64 \u7F16\u7801</p><p class="text-xs text-muted-foreground"${_scopeId}>\u6587\u672CBase64\u7F16\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 \u7F16\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6587\u672CBase64\u7F16\u7801")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-compress",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u56FE\u7247\u538B\u7F29</p><p class="text-xs text-muted-foreground"${_scopeId}>\u5728\u7EBF\u538B\u7F29\u56FE\u7247</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Zap), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u56FE\u7247\u538B\u7F29"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u5728\u7EBF\u538B\u7F29\u56FE\u7247")
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
            _push2(ssrRenderComponent(unref(Code), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>HTML \u7F16\u7801</p><p class="text-xs text-muted-foreground"${_scopeId}>HTML\u5B9E\u4F53\u7F16\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Code), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "HTML \u7F16\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "HTML\u5B9E\u4F53\u7F16\u7801")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/base64-image.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=base64-image-DPc5_4iO.mjs.map
