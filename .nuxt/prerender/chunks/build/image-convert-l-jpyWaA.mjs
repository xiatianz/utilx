import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { Plus, X, ImageIcon, RefreshCw, Download, Archive, Info, Zap, ArrowRight, Maximize2, Hash } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { f as useSeoMeta } from './server.mjs';
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
  __name: "image-convert",
  __ssrInlineRender: true,
  setup(__props) {
    const images = ref([]);
    const targetFormat = ref("webp");
    const jpegQuality = ref(90);
    const pngOptimized = ref(false);
    const keepOriginal = ref(true);
    const autoRename = ref(true);
    const isConverting = ref(false);
    ref(null);
    const formats = [
      {
        value: "jpeg",
        name: "JPEG",
        ext: ".jpg",
        icon: "\u{1F5BC}\uFE0F",
        description: "\u9002\u5408\u7167\u7247\uFF0C\u6709\u635F\u538B\u7F29\uFF0C\u6587\u4EF6\u5C0F"
      },
      {
        value: "png",
        name: "PNG",
        ext: ".png",
        icon: "\u{1F5FA}\uFE0F",
        description: "\u652F\u6301\u900F\u660E\uFF0C\u65E0\u635F\u538B\u7F29\uFF0C\u9002\u5408\u56FE\u6807"
      },
      {
        value: "webp",
        name: "WebP",
        ext: ".webp",
        icon: "\u{1F310}",
        description: "\u65B0\u4E00\u4EE3\u683C\u5F0F\uFF0C\u9AD8\u538B\u7F29\u7387\uFF0C\u652F\u6301\u52A8\u753B"
      },
      {
        value: "avif",
        name: "AVIF",
        ext: ".avif",
        icon: "\u{1F3A8}",
        description: "\u6700\u65B0\u683C\u5F0F\uFF0C\u8D85\u9AD8\u538B\u7F29\u7387\uFF0C\u5B9E\u9A8C\u6027\u652F\u6301"
      },
      {
        value: "gif",
        name: "GIF",
        ext: ".gif",
        icon: "\u{1F3AC}",
        description: "\u652F\u6301\u52A8\u753B\uFF0C256\u8272\uFF0C\u9002\u5408\u7B80\u5355\u56FE\u50CF"
      },
      {
        value: "bmp",
        name: "BMP",
        ext: ".bmp",
        icon: "\u{1F4CB}",
        description: "\u65E0\u538B\u7F29\u4F4D\u56FE\uFF0C\u6587\u4EF6\u8F83\u5927"
      }
    ];
    const hasConvertedImages = computed(() => {
      return images.value.some((img) => img.convertedUrl);
    });
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    useSeoMeta({
      title: "\u56FE\u7247\u683C\u5F0F\u8F6C\u6362 - \u5728\u7EBF\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301JPG\u3001PNG\u3001WebP\u3001GIF\u7B49\u683C\u5F0F\u4E92\u8F6C\uFF0C\u6279\u91CF\u5904\u7406\uFF0C\u4FDD\u6301\u9AD8\u8D28\u91CF\u3002",
      keywords: ["\u56FE\u7247\u683C\u5F0F\u8F6C\u6362", "\u56FE\u7247\u8F6CWebP", "JPG\u8F6CPNG", "\u683C\u5F0F\u8F6C\u6362", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u56FE\u7247\u683C\u5F0F\u8F6C\u6362</h1><p class="text-muted-foreground">\u652F\u6301\u591A\u79CD\u56FE\u7247\u683C\u5F0F\u4E4B\u95F4\u7684\u76F8\u4E92\u8F6C\u6362\uFF0C\u6279\u91CF\u5904\u7406</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u56FE\u7247\u5217\u8868</h2><div class="border-2 border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer mb-4"><input type="file" class="hidden" accept="image/*" multiple>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-8 h-8 mx-auto text-muted-foreground mb-2" }, null, _parent));
      _push(`<p class="text-sm">\u70B9\u51FB\u6216\u62D6\u62FD\u6DFB\u52A0\u56FE\u7247</p></div><div class="space-y-2 max-h-96 overflow-y-auto"><!--[-->`);
      ssrRenderList(images.value, (image, index) => {
        _push(`<div class="flex items-center gap-3 p-3 bg-muted rounded-lg group"><img${ssrRenderAttr("src", image.preview)}${ssrRenderAttr("alt", image.name)} class="w-12 h-12 object-cover rounded"><div class="flex-1 min-w-0"><p class="text-sm font-medium truncate">${ssrInterpolate(image.name)}</p><p class="text-xs text-muted-foreground">${ssrInterpolate(image.format)} \u2022 ${ssrInterpolate(formatFileSize(image.size))}</p></div><button class="opacity-0 group-hover:opacity-100 p-1 hover:text-destructive transition-all">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div>`);
      });
      _push(`<!--]--></div>`);
      if (images.value.length > 0) {
        _push(`<div class="mt-4 pt-4 border-t space-y-2"><button class="w-full px-3 py-2 text-sm text-destructive hover:bg-destructive/5 rounded-md transition-colors"> \u6E05\u7A7A\u5217\u8868 </button><p class="text-xs text-muted-foreground text-center"> \u5171 ${ssrInterpolate(images.value.length)} \u5F20\u56FE\u7247 </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8F6C\u6362\u8BBE\u7F6E</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u76EE\u6807\u683C\u5F0F</label><div class="mt-2 grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(formats, (format) => {
        _push(`<button class="${ssrRenderClass([
          "p-3 rounded-lg border transition-all",
          targetFormat.value === format.value ? "border-primary bg-primary/5" : "border-border hover:border-primary"
        ])}"><div class="flex items-center gap-2"><span class="text-2xl">${ssrInterpolate(format.icon)}</span><div class="text-left"><div class="font-medium text-sm">${ssrInterpolate(format.name)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(format.ext)}</div></div></div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (targetFormat.value === "jpeg") {
        _push(`<div><label class="text-sm font-medium">JPEG\u8D28\u91CF</label><div class="mt-2 space-y-2"><div class="flex justify-between text-sm"><span>\u8D28\u91CF</span><span class="font-mono">${ssrInterpolate(jpegQuality.value)}%</span></div><input${ssrRenderAttr("value", jpegQuality.value)} type="range" min="10" max="100" step="5" class="w-full"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (targetFormat.value === "png") {
        _push(`<div><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(pngOptimized.value) ? ssrLooseContain(pngOptimized.value, null) : pngOptimized.value) ? " checked" : ""} type="checkbox" class="rounded"><span class="text-sm">\u4F18\u5316\u538B\u7F29</span></label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<details><summary class="text-sm font-medium cursor-pointer">\u9AD8\u7EA7\u9009\u9879</summary><div class="mt-3 space-y-3"><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(keepOriginal.value) ? ssrLooseContain(keepOriginal.value, null) : keepOriginal.value) ? " checked" : ""} type="checkbox" class="rounded"><span class="text-sm">\u4FDD\u6301\u539F\u59CB\u5C3A\u5BF8</span></label><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(autoRename.value) ? ssrLooseContain(autoRename.value, null) : autoRename.value) ? " checked" : ""} type="checkbox" class="rounded" checked><span class="text-sm">\u81EA\u52A8\u91CD\u547D\u540D</span></label></div></details></div></div></div><div class="lg:col-span-2 space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8F6C\u6362\u9884\u89C8</h2>`);
      if (images.value.length === 0) {
        _push(`<div class="text-center py-12 text-muted-foreground">`);
        _push(ssrRenderComponent(unref(ImageIcon), { class: "w-16 h-16 mx-auto mb-4" }, null, _parent));
        _push(`<p>\u8BF7\u6DFB\u52A0\u56FE\u7247\u5F00\u59CB\u8F6C\u6362</p></div>`);
      } else {
        _push(`<div class="space-y-4"><div class="flex justify-center"><button${ssrIncludeBooleanAttr(isConverting.value) ? " disabled" : ""} class="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2">`);
        if (isConverting.value) {
          _push(ssrRenderComponent(unref(RefreshCw), { class: "w-4 h-4 animate-spin" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(isConverting.value ? "\u8F6C\u6362\u4E2D..." : "\u5F00\u59CB\u8F6C\u6362")}</button></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
        ssrRenderList(images.value, (image, index) => {
          var _a;
          _push(`<div class="space-y-2"><h3 class="text-sm font-medium">${ssrInterpolate(image.name)}</h3><div class="grid grid-cols-2 gap-2"><div><p class="text-xs text-muted-foreground mb-1">\u539F\u56FE (${ssrInterpolate(image.format)})</p><div class="relative group"><img${ssrRenderAttr("src", image.preview)}${ssrRenderAttr("alt", image.name)} class="w-full h-32 object-cover rounded border"></div><p class="text-xs text-muted-foreground mt-1">${ssrInterpolate(image.width)}\xD7${ssrInterpolate(image.height)} \u2022 ${ssrInterpolate(formatFileSize(image.size))}</p></div><div><p class="text-xs text-muted-foreground mb-1"> \u8F6C\u6362\u540E (${ssrInterpolate((_a = formats.find((f) => f.value === targetFormat.value)) == null ? void 0 : _a.name)}) </p><div class="relative group">`);
          if (image.convertedUrl) {
            _push(`<div class="relative"><img${ssrRenderAttr("src", image.convertedUrl)}${ssrRenderAttr("alt", image.name)} class="w-full h-32 object-cover rounded border"><div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center"><button class="p-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors">`);
            _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
            _push(`</button></div></div>`);
          } else {
            _push(`<div class="w-full h-32 bg-muted rounded flex items-center justify-center"><span class="text-sm text-muted-foreground">${ssrInterpolate(isConverting.value ? "\u8F6C\u6362\u4E2D..." : "\u7B49\u5F85\u8F6C\u6362")}</span></div>`);
          }
          _push(`</div>`);
          if (image.convertedSize) {
            _push(`<p class="text-xs text-muted-foreground mt-1">${ssrInterpolate(image.convertedWidth)}\xD7${ssrInterpolate(image.convertedHeight)} \u2022 ${ssrInterpolate(formatFileSize(image.convertedSize))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
      if (hasConvertedImages.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6279\u91CF\u4E0B\u8F7D</h2><div class="grid grid-cols-2 gap-3"><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Archive), { class: "w-4 h-4" }, null, _parent));
        _push(` \u4E0B\u8F7D\u4E3AZIP </button><button class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` \u9010\u4E2A\u4E0B\u8F7D </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u683C\u5F0F\u8BF4\u660E</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(formats, (format) => {
        _push(`<div class="p-4 border rounded-lg"><div class="flex items-center gap-3 mb-2"><span class="text-2xl">${ssrInterpolate(format.icon)}</span><h3 class="font-medium">${ssrInterpolate(format.name)}</h3></div><p class="text-sm text-muted-foreground">${ssrInterpolate(format.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u8BF4\u660E </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u652F\u6301\u7684\u683C\u5F0F</h4><p class="mb-2">\u8F93\u5165\u683C\u5F0F\uFF1AJPG/JPEG\u3001PNG\u3001WebP\u3001GIF\u3001BMP\u3001TIFF\u3001ICO</p><p>\u8F93\u51FA\u683C\u5F0F\uFF1AJPG\u3001PNG\u3001WebP\u3001AVIF\uFF08\u5B9E\u9A8C\u6027\uFF09\u3001GIF\u3001BMP</p></div><div><h4 class="font-medium text-foreground mb-2">\u4F7F\u7528\u63D0\u793A</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u652F\u6301\u6279\u91CF\u8F6C\u6362\uFF0C\u53EF\u540C\u65F6\u5904\u7406\u591A\u5F20\u56FE\u7247</li><li>JPG\u9002\u5408\u7167\u7247\uFF0C\u6709\u635F\u538B\u7F29\u4F46\u6587\u4EF6\u8F83\u5C0F</li><li>PNG\u652F\u6301\u900F\u660E\u901A\u9053\uFF0C\u9002\u5408\u56FE\u6807\u548C\u622A\u56FE</li><li>WebP\u683C\u5F0F\u5728\u4FDD\u6301\u753B\u8D28\u7684\u540C\u65F6\u6709\u66F4\u597D\u7684\u538B\u7F29\u7387</li><li>\u8F6C\u6362\u540E\u53EF\u6279\u91CF\u4E0B\u8F7D\u4E3AZIP\u6587\u4EF6</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/image-convert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=image-convert-l-jpyWaA.mjs.map
