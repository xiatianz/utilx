import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { ImageIcon, ChevronLeft, ChevronRight, Download, Trash2, Info, RefreshCw, ArrowRight, Maximize2, Hash } from 'lucide-vue-next';
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
  __name: "image-compress",
  __ssrInlineRender: true,
  setup(__props) {
    const images = ref([]);
    const currentIndex = ref(0);
    const isDragging = ref(false);
    const quality = ref(80);
    const outputFormat = ref("original");
    const removeMetadata = ref(true);
    const progressive = ref(false);
    ref(null);
    const sampleImages = [
      { id: 1, name: "\u793A\u4F8B1", url: "https://picsum.photos/400/300?random=1" },
      { id: 2, name: "\u793A\u4F8B2", url: "https://picsum.photos/400/300?random=2" },
      { id: 3, name: "\u793A\u4F8B3", url: "https://picsum.photos/400/300?random=3" },
      { id: 4, name: "\u793A\u4F8B4", url: "https://picsum.photos/400/300?random=4" }
    ];
    const qualityPresets = [
      { name: "\u9AD8\u6E05", quality: 95 },
      { name: "\u6807\u51C6", quality: 80 },
      { name: "\u5E73\u8861", quality: 60 },
      { name: "\u9AD8\u901F", quality: 40 }
    ];
    const currentImage = computed(() => images.value[currentIndex.value] || null);
    const originalSize = computed(() => {
      return images.value.reduce((total, img) => total + img.originalSize, 0);
    });
    const compressedSize = computed(() => {
      return images.value.reduce((total, img) => total + (img.compressedSize || 0), 0);
    });
    const savedSize = computed(() => {
      const saved = originalSize.value - compressedSize.value;
      return formatFileSize(saved);
    });
    const compressionRatio = computed(() => {
      if (originalSize.value === 0) return 0;
      return Math.round((1 - compressedSize.value / originalSize.value) * 100);
    });
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    useSeoMeta({
      title: "\u56FE\u7247\u538B\u7F29 - \u5728\u7EBF\u56FE\u7247\u538B\u7F29\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u56FE\u7247\u538B\u7F29\u5DE5\u5177\uFF0C\u652F\u6301JPG\u3001PNG\u3001WebP\u683C\u5F0F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u538B\u7F29\u8D28\u91CF\uFF0C\u4FDD\u6301\u753B\u8D28\u7684\u540C\u65F6\u51CF\u5C0F\u6587\u4EF6\u5927\u5C0F\u3002",
      keywords: ["\u56FE\u7247\u538B\u7F29", "\u5728\u7EBF\u538B\u7F29", "JPG\u538B\u7F29", "PNG\u538B\u7F29", "\u56FE\u7247\u4F18\u5316", "\u56FE\u7247\u5927\u5C0F"]
    });
    watch(images, (newImages) => {
      if (newImages.length === 0) return;
      newImages.forEach((img, index) => {
        if (index !== currentIndex.value && img.compressedUrl) {
          if (Math.abs(index - currentIndex.value) > 2) {
            URL.revokeObjectURL(img.compressedUrl);
            img.compressedUrl = null;
            img.compressedSize = null;
          }
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u56FE\u7247\u538B\u7F29</h1><p class="text-muted-foreground">\u5728\u7EBF\u538B\u7F29\u56FE\u7247\uFF0C\u652F\u6301\u591A\u79CD\u683C\u5F0F\u548C\u8D28\u91CF\u8C03\u8282</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u4E0A\u4F20\u56FE\u7247</h2><div class="${ssrRenderClass([{ "border-primary bg-primary/5": isDragging.value }, "border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"])}"><input type="file" class="hidden" accept="image/*" multiple>`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2">\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u91CC\u4E0A\u4F20</p><p class="text-sm text-muted-foreground mb-4">\u6216\u8005\u70B9\u51FB\u9009\u62E9\u6587\u4EF6</p><p class="text-xs text-muted-foreground">\u652F\u6301 JPG\u3001PNG\u3001WebP\u3001GIF \u683C\u5F0F</p></div><div class="mt-4"><p class="text-sm font-medium mb-2">\u5FEB\u901F\u793A\u4F8B</p><div class="grid grid-cols-4 gap-2"><!--[-->`);
      ssrRenderList(sampleImages, (sample) => {
        _push(`<button class="aspect-square rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all"><img${ssrRenderAttr("src", sample.url)}${ssrRenderAttr("alt", sample.name)} class="w-full h-full object-cover"></button>`);
      });
      _push(`<!--]--></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u538B\u7F29\u8BBE\u7F6E</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u538B\u7F29\u8D28\u91CF</label><div class="mt-2 space-y-2"><div class="flex items-center justify-between"><span class="text-sm text-muted-foreground">\u8D28\u91CF</span><span class="text-sm font-mono">${ssrInterpolate(quality.value)}%</span></div><input${ssrRenderAttr("value", quality.value)} type="range" min="10" max="100" step="5" class="w-full"></div></div><div><label class="text-sm font-medium">\u8F93\u51FA\u683C\u5F0F</label><select class="w-full mt-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="original"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "original") : ssrLooseEqual(outputFormat.value, "original")) ? " selected" : ""}>\u4FDD\u6301\u539F\u683C\u5F0F</option><option value="jpeg"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "jpeg") : ssrLooseEqual(outputFormat.value, "jpeg")) ? " selected" : ""}>JPEG</option><option value="png"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "png") : ssrLooseEqual(outputFormat.value, "png")) ? " selected" : ""}>PNG</option><option value="webp"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "webp") : ssrLooseEqual(outputFormat.value, "webp")) ? " selected" : ""}>WebP</option><option value="avif"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "avif") : ssrLooseEqual(outputFormat.value, "avif")) ? " selected" : ""}>AVIF (\u5B9E\u9A8C\u6027)</option></select></div><div><label class="text-sm font-medium">\u5FEB\u901F\u9884\u8BBE</label><div class="mt-2 grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(qualityPresets, (preset) => {
        _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm">${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div><details class="mt-4"><summary class="text-sm font-medium cursor-pointer">\u9AD8\u7EA7\u9009\u9879</summary><div class="mt-3 space-y-3"><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(removeMetadata.value) ? ssrLooseContain(removeMetadata.value, null) : removeMetadata.value) ? " checked" : ""} type="checkbox" class="rounded"><span class="text-sm">\u79FB\u9664EXIF\u5143\u6570\u636E</span></label><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(progressive.value) ? ssrLooseContain(progressive.value, null) : progressive.value) ? " checked" : ""} type="checkbox" class="rounded"><span class="text-sm">\u6E10\u8FDB\u5F0FJPEG</span></label></div></details></div></div></div><div class="space-y-4">`);
      if (images.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u538B\u7F29\u7EDF\u8BA1</h2><div class="grid grid-cols-2 gap-4"><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">\u539F\u59CB\u5927\u5C0F</div><div class="text-xl font-bold">${ssrInterpolate(formatFileSize(originalSize.value))}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">\u538B\u7F29\u540E\u5927\u5C0F</div><div class="text-xl font-bold text-primary">${ssrInterpolate(formatFileSize(compressedSize.value))}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">\u8282\u7701\u7A7A\u95F4</div><div class="text-xl font-bold text-green-600">${ssrInterpolate(savedSize.value)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">\u538B\u7F29\u7387</div><div class="text-xl font-bold text-blue-600">${ssrInterpolate(compressionRatio.value)}%</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (images.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u9884\u89C8\u5BF9\u6BD4</h2>`);
        if (images.value.length > 1) {
          _push(`<div class="mb-4"><div class="flex items-center justify-between"><button${ssrIncludeBooleanAttr(currentIndex.value === 0) ? " disabled" : ""} class="p-2 rounded hover:bg-muted transition-colors disabled:opacity-50">`);
          _push(ssrRenderComponent(unref(ChevronLeft), { class: "w-5 h-5" }, null, _parent));
          _push(`</button><span class="text-sm text-muted-foreground">${ssrInterpolate(currentIndex.value + 1)} / ${ssrInterpolate(images.value.length)}</span><button${ssrIncludeBooleanAttr(currentIndex.value === images.value.length - 1) ? " disabled" : ""} class="p-2 rounded hover:bg-muted transition-colors disabled:opacity-50">`);
          _push(ssrRenderComponent(unref(ChevronRight), { class: "w-5 h-5" }, null, _parent));
          _push(`</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (currentImage.value) {
          _push(`<div class="space-y-4"><div class="grid grid-cols-2 gap-4"><div><h3 class="text-sm font-medium mb-2">\u539F\u56FE</h3><div class="relative group"><img${ssrRenderAttr("src", currentImage.value.originalUrl)}${ssrRenderAttr("alt", currentImage.value.name)} class="w-full rounded-lg border"><div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center"><button class="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors"> \u4E0B\u8F7D\u539F\u56FE </button></div></div><div class="mt-2 text-xs text-muted-foreground">${ssrInterpolate(currentImage.value.originalWidth)} \xD7 ${ssrInterpolate(currentImage.value.originalHeight)} \u2022 ${ssrInterpolate(formatFileSize(currentImage.value.originalSize))}</div></div><div><h3 class="text-sm font-medium mb-2">\u538B\u7F29\u540E</h3><div class="relative group">`);
          if (currentImage.value.compressedUrl) {
            _push(`<img${ssrRenderAttr("src", currentImage.value.compressedUrl)}${ssrRenderAttr("alt", currentImage.value.name)} class="w-full rounded-lg border">`);
          } else {
            _push(`<!---->`);
          }
          if (currentImage.value.compressedUrl) {
            _push(`<div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center"><button class="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors"> \u4E0B\u8F7D\u538B\u7F29\u56FE </button></div>`);
          } else {
            _push(`<div class="w-full h-48 bg-muted rounded-lg flex items-center justify-center"><span class="text-muted-foreground">\u538B\u7F29\u4E2D...</span></div>`);
          }
          _push(`</div>`);
          if (currentImage.value.compressedSize) {
            _push(`<div class="mt-2 text-xs text-muted-foreground">${ssrInterpolate(currentImage.value.compressedWidth)} \xD7 ${ssrInterpolate(currentImage.value.compressedHeight)} \u2022 ${ssrInterpolate(formatFileSize(currentImage.value.compressedSize))}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (images.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6279\u91CF\u64CD\u4F5C</h2><div class="grid grid-cols-2 gap-3"><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` \u4E0B\u8F7D\u6240\u6709 </button><button class="px-4 py-2 border border-destructive text-destructive rounded-md hover:bg-destructive/5 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent));
        _push(` \u6E05\u7A7A\u6240\u6709 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u8BF4\u660E </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u652F\u6301\u7684\u683C\u5F0F</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u8F93\u5165\uFF1AJPG\u3001PNG\u3001WebP\u3001GIF\u3001BMP\u3001TIFF</li><li>\u8F93\u51FA\uFF1AJPG\u3001PNG\u3001WebP\u3001AVIF\uFF08\u5B9E\u9A8C\u6027\uFF09</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u538B\u7F29\u63D0\u793A</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u8D28\u91CF\u8D8A\u4F4E\uFF0C\u6587\u4EF6\u8D8A\u5C0F\uFF0C\u4F46\u753B\u8D28\u635F\u5931\u8D8A\u5927</li><li>JPG\u9002\u5408\u7167\u7247\uFF0CPNG\u9002\u5408\u900F\u660E\u56FE\u50CF</li><li>WebP\u683C\u5F0F\u5728\u4FDD\u6301\u753B\u8D28\u7684\u540C\u65F6\u6709\u66F4\u597D\u7684\u538B\u7F29\u7387</li><li>\u79FB\u9664EXIF\u53EF\u4EE5\u8FDB\u4E00\u6B65\u51CF\u5C0F\u6587\u4EF6\u5927\u5C0F</li></ul></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RefreshCw), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u56FE\u7247\u683C\u5F0F\u8F6C\u6362</p><p class="text-xs text-muted-foreground"${_scopeId}>\u8F6C\u6362\u56FE\u7247\u683C\u5F0F</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(RefreshCw), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u56FE\u7247\u683C\u5F0F\u8F6C\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u8F6C\u6362\u56FE\u7247\u683C\u5F0F")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-resize",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Maximize2), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u56FE\u7247\u5C3A\u5BF8\u8C03\u6574</p><p class="text-xs text-muted-foreground"${_scopeId}>\u8C03\u6574\u56FE\u7247\u5C3A\u5BF8</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Maximize2), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u56FE\u7247\u5C3A\u5BF8\u8C03\u6574"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u8C03\u6574\u56FE\u7247\u5C3A\u5BF8")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/base64-image",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Base64\u56FE\u7247</p><p class="text-xs text-muted-foreground"${_scopeId}>\u56FE\u7247\u4E0EBase64\u4E92\u8F6C</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64\u56FE\u7247"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u56FE\u7247\u4E0EBase64\u4E92\u8F6C")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/image-compress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=image-compress-BswjHQIK.mjs.map
