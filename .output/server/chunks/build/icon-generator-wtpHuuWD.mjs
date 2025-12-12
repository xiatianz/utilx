import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from 'vue/server-renderer';
import { ImageIcon, X, Settings, Download, Info, Maximize2, ArrowRight, RefreshCw, Zap } from 'lucide-vue-next';
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
  __name: "icon-generator",
  __ssrInlineRender: true,
  setup(__props) {
    const uploadedImage = ref(null);
    const iconType = ref("favicon");
    const outputFormat = ref("png");
    const transparentBackground = ref(true);
    const maintainAspectRatio = ref(true);
    const autoOptimize = ref(true);
    const isGenerating = ref(false);
    const generatedIcons = ref([]);
    const previewMode = ref("grid");
    ref(null);
    const customSizes = ref([
      { width: 16, height: 16 },
      { width: 32, height: 32 },
      { width: 48, height: 48 },
      { width: 64, height: 64 }
    ]);
    const iconTypes = [
      { value: "favicon", name: "Favicon" },
      { value: "ios", name: "iOS" },
      { value: "android", name: "Android" },
      { value: "windows", name: "Windows" },
      { value: "webapp", name: "Web App" }
    ];
    const sizePresets = [
      { name: "\u6807\u51C6\u7F51\u7AD9", sizes: [16, 32, 48, 64] },
      { name: "iOS \u5E94\u7528", sizes: [57, 60, 72, 114, 120, 144, 152, 167, 180, 1024] },
      { name: "Android \u5E94\u7528", sizes: [36, 48, 72, 96, 144, 192, 512] },
      { name: "Windows \u5E94\u7528", sizes: [16, 24, 32, 48, 64, 128, 256] },
      { name: "Web App", sizes: [192, 512] }
    ];
    const outputFormats = [
      { value: "png", name: "PNG" },
      { value: "jpg", name: "JPG" },
      { value: "ico", name: "ICO" },
      { value: "webp", name: "WebP" }
    ];
    const previewModes = [
      { value: "grid", name: "\u7F51\u683C\u9884\u89C8" },
      { value: "list", name: "\u5217\u8868\u9884\u89C8" },
      { value: "realtime", name: "\u5B9E\u65F6\u9884\u89C8" }
    ];
    const formatDescriptions = [
      {
        type: "ico",
        name: "ICO",
        ext: ".ico",
        description: "Windows \u56FE\u6807\u683C\u5F0F\uFF0C\u53EF\u5305\u542B\u591A\u4E2A\u5C3A\u5BF8",
        uses: "Windows \u7F51\u7AD9favicon"
      },
      {
        type: "png",
        name: "PNG",
        ext: ".png",
        description: "\u652F\u6301\u900F\u660E\u901A\u9053\u7684\u4FBF\u643A\u5F0F\u7F51\u7EDC\u56FE\u5F62\u683C\u5F0F",
        uses: "\u7F51\u7AD9favicon, \u79FB\u52A8\u5E94\u7528\u56FE\u6807"
      },
      {
        type: "jpg",
        name: "JPG",
        ext: ".jpg",
        description: "\u6709\u635F\u538B\u7F29\u683C\u5F0F\uFF0C\u6587\u4EF6\u5C0F\u4F46\u65E0\u900F\u660E\u901A\u9053",
        uses: "\u4E00\u822C\u56FE\u7247\u9884\u89C8"
      },
      {
        type: "webp",
        name: "WebP",
        ext: ".webp",
        description: "Google \u5F00\u53D1\u7684\u65B0\u4E00\u4EE3\u56FE\u50CF\u683C\u5F0F",
        uses: "\u73B0\u4EE3\u7F51\u9875\u56FE\u6807"
      }
    ];
    const formatFileSize = (size) => {
      return `${size}\xD7${size}px`;
    };
    useSeoMeta({
      title: "\u56FE\u6807\u751F\u6210\u5668 - \u5728\u7EBF\u751F\u6210 favicon \u548C\u5E94\u7528\u56FE\u6807",
      description: "\u514D\u8D39\u5728\u7EBF\u56FE\u6807\u751F\u6210\u5DE5\u5177\uFF0C\u652F\u6301 favicon\u3001iOS\u3001Android\u3001Windows \u7B49\u591A\u79CD\u5E73\u53F0\u56FE\u6807\u683C\u5F0F\uFF0C\u6279\u91CF\u751F\u6210\u4E0D\u540C\u5C3A\u5BF8\u3002",
      keywords: ["\u56FE\u6807\u751F\u6210\u5668", "favicon\u751F\u6210", "\u5E94\u7528\u56FE\u6807", "ico\u751F\u6210", "\u56FE\u6807\u5236\u4F5C", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-ca53053b><div class="mt-4 mb-8" data-v-ca53053b><h1 class="text-3xl font-bold mb-3" data-v-ca53053b>\u56FE\u6807\u751F\u6210\u5668</h1><p class="text-muted-foreground" data-v-ca53053b>\u751F\u6210 favicon \u7B49\u56FE\u6807\uFF0C\u652F\u6301\u591A\u79CD\u5C3A\u5BF8\u548C\u683C\u5F0F</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-ca53053b><div class="space-y-4" data-v-ca53053b><div class="bg-card border border-border rounded-lg p-6" data-v-ca53053b><h2 class="text-lg font-semibold mb-4" data-v-ca53053b>\u4E0A\u4F20\u56FE\u7247</h2><div class="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer" data-v-ca53053b><input type="file" class="hidden" accept="image/*" data-v-ca53053b>`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2" data-v-ca53053b>\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u91CC</p><p class="text-sm text-muted-foreground" data-v-ca53053b>\u652F\u6301 JPG\u3001PNG\u3001GIF \u7B49\u683C\u5F0F</p></div>`);
      if (uploadedImage.value) {
        _push(`<div class="mt-4 space-y-4" data-v-ca53053b><div class="relative" data-v-ca53053b><img${ssrRenderAttr("src", uploadedImage.value.url)}${ssrRenderAttr("alt", uploadedImage.value.name)} class="w-full rounded-lg" data-v-ca53053b><button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow" data-v-ca53053b>`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div><div class="text-sm text-muted-foreground" data-v-ca53053b><p data-v-ca53053b>\u6587\u4EF6\u540D\uFF1A${ssrInterpolate(uploadedImage.value.name)}</p><p data-v-ca53053b>\u539F\u59CB\u5C3A\u5BF8\uFF1A${ssrInterpolate(uploadedImage.value.width)} \xD7 ${ssrInterpolate(uploadedImage.value.height)} px</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card border border-border rounded-lg p-6" data-v-ca53053b><h2 class="text-lg font-semibold mb-4" data-v-ca53053b>\u751F\u6210\u8BBE\u7F6E</h2><div class="space-y-4" data-v-ca53053b><div data-v-ca53053b><label class="text-sm font-medium" data-v-ca53053b>\u56FE\u6807\u7C7B\u578B</label><div class="mt-2 grid grid-cols-2 gap-2" data-v-ca53053b><!--[-->`);
      ssrRenderList(iconTypes, (type) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-2 rounded-md transition-colors text-sm",
          iconType.value === type.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}" data-v-ca53053b>${ssrInterpolate(type.name)}</button>`);
      });
      _push(`<!--]--></div></div><div data-v-ca53053b><label class="text-sm font-medium" data-v-ca53053b>\u5C3A\u5BF8\u9884\u8BBE</label><div class="mt-2 grid grid-cols-2 gap-2" data-v-ca53053b><!--[-->`);
      ssrRenderList(sizePresets, (preset) => {
        _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm" data-v-ca53053b>${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div><div data-v-ca53053b><label class="text-sm font-medium" data-v-ca53053b>\u81EA\u5B9A\u4E49\u5C3A\u5BF8</label><div class="mt-2 grid grid-cols-4 gap-2" data-v-ca53053b><!--[-->`);
      ssrRenderList(customSizes.value, (size, index) => {
        _push(`<div class="flex items-center gap-2" data-v-ca53053b><input${ssrRenderAttr("value", size.width)} type="number" min="16" max="1024" class="w-20 px-2 py-1 border rounded text-sm" data-v-ca53053b><span class="text-xs text-muted-foreground" data-v-ca53053b>\xD7</span><input${ssrRenderAttr("value", size.height)} type="number" min="16" max="1024" class="w-20 px-2 py-1 border rounded text-sm" data-v-ca53053b>`);
        if (customSizes.value.length > 1) {
          _push(`<button class="p-1 text-destructive hover:text-destructive/80" data-v-ca53053b>`);
          _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="mt-2 w-full px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm" data-v-ca53053b> \u6DFB\u52A0\u5C3A\u5BF8 </button></div><div data-v-ca53053b><label class="text-sm font-medium" data-v-ca53053b>\u8F93\u51FA\u683C\u5F0F</label><div class="mt-2 grid grid-cols-3 gap-2" data-v-ca53053b><!--[-->`);
      ssrRenderList(outputFormats, (format) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-2 rounded-md transition-colors text-sm",
          outputFormat.value === format.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}" data-v-ca53053b>${ssrInterpolate(format.name)}</button>`);
      });
      _push(`<!--]--></div></div>`);
      if (outputFormat.value === "ico") {
        _push(`<div data-v-ca53053b><label class="flex items-center gap-2" data-v-ca53053b><input${ssrIncludeBooleanAttr(Array.isArray(transparentBackground.value) ? ssrLooseContain(transparentBackground.value, null) : transparentBackground.value) ? " checked" : ""} type="checkbox" class="rounded" data-v-ca53053b><span class="text-sm" data-v-ca53053b>\u900F\u660E\u80CC\u666F</span></label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<details class="mt-4" data-v-ca53053b><summary class="text-sm font-medium cursor-pointer" data-v-ca53053b>\u9AD8\u7EA7\u9009\u9879</summary><div class="mt-3 space-y-3" data-v-ca53053b><label class="flex items-center gap-2" data-v-ca53053b><input${ssrIncludeBooleanAttr(Array.isArray(maintainAspectRatio.value) ? ssrLooseContain(maintainAspectRatio.value, null) : maintainAspectRatio.value) ? " checked" : ""} type="checkbox" class="rounded" checked data-v-ca53053b><span class="text-sm" data-v-ca53053b>\u4FDD\u6301\u5BBD\u9AD8\u6BD4</span></label><label class="flex items-center gap-2" data-v-ca53053b><input${ssrIncludeBooleanAttr(Array.isArray(autoOptimize.value) ? ssrLooseContain(autoOptimize.value, null) : autoOptimize.value) ? " checked" : ""} type="checkbox" class="rounded" checked data-v-ca53053b><span class="text-sm" data-v-ca53053b>\u81EA\u52A8\u4F18\u5316</span></label></div></details></div></div><div class="space-y-2" data-v-ca53053b><button${ssrIncludeBooleanAttr(!uploadedImage.value || isGenerating.value) ? " disabled" : ""} class="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2" data-v-ca53053b>`);
      if (isGenerating.value) {
        _push(ssrRenderComponent(unref(Settings), { class: "w-4 h-4 animate-spin" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(isGenerating.value ? "\u751F\u6210\u4E2D..." : "\u751F\u6210\u56FE\u6807")}</button>`);
      if (generatedIcons.value.length > 0) {
        _push(`<button class="w-full px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center justify-center gap-2" data-v-ca53053b>`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` \u4E0B\u8F7D\u6240\u6709\u56FE\u6807 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="space-y-4" data-v-ca53053b><div class="bg-card border border-border rounded-lg p-6" data-v-ca53053b><h2 class="text-lg font-semibold mb-4" data-v-ca53053b>\u56FE\u6807\u9884\u89C8</h2>`);
      if (generatedIcons.value.length === 0) {
        _push(`<div class="text-center py-12 text-muted-foreground" data-v-ca53053b>`);
        _push(ssrRenderComponent(unref(ImageIcon), { class: "w-16 h-16 mx-auto mb-4" }, null, _parent));
        _push(`<p data-v-ca53053b>\u4E0A\u4F20\u56FE\u7247\u5E76\u70B9\u51FB\u751F\u6210\u6309\u94AE\u67E5\u770B\u9884\u89C8</p></div>`);
      } else {
        _push(`<div class="space-y-4" data-v-ca53053b><div class="flex gap-2" data-v-ca53053b><!--[-->`);
        ssrRenderList(previewModes, (mode) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-1 rounded-md transition-colors text-sm",
            previewMode.value === mode.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
          ])}" data-v-ca53053b>${ssrInterpolate(mode.name)}</button>`);
        });
        _push(`<!--]--></div>`);
        if (previewMode.value === "grid") {
          _push(`<div class="grid grid-cols-4 gap-4" data-v-ca53053b><!--[-->`);
          ssrRenderList(generatedIcons.value, (icon) => {
            _push(`<div class="space-y-2" data-v-ca53053b><div class="aspect-square bg-checkered rounded-lg p-2 flex items-center justify-center" data-v-ca53053b><img${ssrRenderAttr("src", icon.url)}${ssrRenderAttr("alt", `${icon.size}x${icon.size}`)} style="${ssrRenderStyle({ width: icon.size + "px", height: icon.size + "px" })}" class="max-w-full max-h-full" data-v-ca53053b></div><div class="text-center" data-v-ca53053b><p class="text-sm font-medium" data-v-ca53053b>${ssrInterpolate(icon.size)}px</p><button class="mt-1 text-xs text-primary hover:text-primary/80" data-v-ca53053b> \u4E0B\u8F7D </button></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="space-y-3 max-h-96 overflow-y-auto" data-v-ca53053b><!--[-->`);
          ssrRenderList(generatedIcons.value, (icon) => {
            _push(`<div class="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors" data-v-ca53053b><div class="flex items-center gap-3" data-v-ca53053b><div class="w-12 h-12 bg-checkered rounded p-1 flex items-center justify-center" data-v-ca53053b><img${ssrRenderAttr("src", icon.url)}${ssrRenderAttr("alt", `${icon.size}x${icon.size}`)} class="max-w-full max-h-full" data-v-ca53053b></div><div data-v-ca53053b><p class="font-medium" data-v-ca53053b>${ssrInterpolate(icon.size)} \xD7 ${ssrInterpolate(icon.size)} px</p><p class="text-sm text-muted-foreground" data-v-ca53053b>${ssrInterpolate(formatFileSize(icon.size))}</p></div></div><button class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" data-v-ca53053b> \u4E0B\u8F7D </button></div>`);
          });
          _push(`<!--]--></div>`);
        }
        if (previewMode.value === "realtime") {
          _push(`<div class="space-y-4" data-v-ca53053b><div data-v-ca53053b><label class="text-sm font-medium" data-v-ca53053b>\u7F51\u7AD9\u9884\u89C8</label><div class="mt-2 p-4 bg-muted rounded-lg" data-v-ca53053b><div class="flex items-center gap-4" data-v-ca53053b><div class="w-16 h-16 bg-checkered rounded flex items-center justify-center" data-v-ca53053b><img${ssrRenderAttr("src", (_a = generatedIcons.value[0]) == null ? void 0 : _a.url)} alt="favicon" class="w-full h-full" data-v-ca53053b></div><div class="flex-1" data-v-ca53053b><p class="font-medium" data-v-ca53053b>\u7F51\u7AD9\u6807\u7B7E\u9875\u56FE\u6807</p><p class="text-sm text-muted-foreground" data-v-ca53053b>16x16, 32x32, 48x48</p></div></div></div></div><div data-v-ca53053b><label class="text-sm font-medium" data-v-ca53053b>\u79FB\u52A8\u5E94\u7528\u56FE\u6807</label><div class="mt-2 p-4 bg-muted rounded-lg" data-v-ca53053b><div class="flex items-center gap-4" data-v-ca53053b><div class="w-16 h-16 bg-checkered rounded flex items-center justify-center" data-v-ca53053b><img${ssrRenderAttr("src", (_b = generatedIcons.value.find((i) => i.size === 57)) == null ? void 0 : _b.url)} alt="ios icon" class="w-full h-full" data-v-ca53053b></div><div class="flex-1" data-v-ca53053b><p class="font-medium" data-v-ca53053b>iOS \u5E94\u7528\u56FE\u6807</p><p class="text-sm text-muted-foreground" data-v-ca53053b>57x57, 60x60, 72x72</p></div></div><div class="flex items-center gap-4 mt-2" data-v-ca53053b><div class="w-16 h-16 bg-checkered rounded flex items-center justify-center" data-v-ca53053b><img${ssrRenderAttr("src", (_c = generatedIcons.value.find((i) => i.size === 72)) == null ? void 0 : _c.url)} alt="android icon" class="w-full h-full" data-v-ca53053b></div><div class="flex-1" data-v-ca53053b><p class="font-medium" data-v-ca53053b>Android \u5E94\u7528\u56FE\u6807</p><p class="text-sm text-muted-foreground" data-v-ca53053b>72x72, 96x96, 144x144</p></div></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div><div class="bg-card border border-border rounded-lg p-6" data-v-ca53053b><h2 class="text-lg font-semibold mb-4" data-v-ca53053b>\u683C\u5F0F\u8BF4\u660E</h2><div class="space-y-4 text-sm" data-v-ca53053b><!--[-->`);
      ssrRenderList(formatDescriptions, (format) => {
        _push(`<div class="p-4 bg-muted rounded-lg" data-v-ca53053b><h3 class="font-medium mb-2" data-v-ca53053b>${ssrInterpolate(format.name)} (${ssrInterpolate(format.ext)})</h3><p class="text-muted-foreground" data-v-ca53053b>${ssrInterpolate(format.description)}</p><p class="text-xs text-muted-foreground mt-2" data-v-ca53053b> \u7528\u9014\uFF1A${ssrInterpolate(format.uses)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mt-12 space-y-6" data-v-ca53053b><div class="bg-card border border-border rounded-lg p-6" data-v-ca53053b><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-ca53053b>`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u8BF4\u660E </h3><div class="space-y-4 text-sm text-muted-foreground" data-v-ca53053b><div data-v-ca53053b><h4 class="font-medium text-foreground mb-2" data-v-ca53053b>\u652F\u6301\u7684\u5C3A\u5BF8</h4><ul class="list-disc list-inside space-y-1 ml-4" data-v-ca53053b><li data-v-ca53053b><strong data-v-ca53053b>Favicon</strong>\uFF1A16x16, 32x32, 48x48, 64x64 px</li><li data-v-ca53053b><strong data-v-ca53053b>iOS</strong>\uFF1A57x57, 60x60, 72x72, 114x114, 120x120, 144x144, 152x152, 167x167, 180x180, 1024x1024 px</li><li data-v-ca53053b><strong data-v-ca53053b>Android</strong>\uFF1A36x36, 48x48, 72x72, 96x96, 144x144, 192x192, 512x512 px</li><li data-v-ca53053b><strong data-v-ca53053b>Windows</strong>\uFF1A16x16, 24x24, 32x32, 48x48, 64x64, 128x128, 256x256 px</li><li data-v-ca53053b><strong data-v-ca53053b>Web App</strong>\uFF1A192x192, 512x512 px</li></ul></div><div data-v-ca53053b><h4 class="font-medium text-foreground mb-2" data-v-ca53053b>\u683C\u5F0F\u7279\u70B9</h4><ul class="list-disc list-inside space-y-1 ml-4" data-v-ca53053b><li data-v-ca53053b><strong data-v-ca53053b>ICO</strong>\uFF1A\u5305\u542B\u591A\u4E2A\u5C3A\u5BF8\u7684\u5355\u4E2A\u6587\u4EF6\uFF0CWindows \u539F\u751F\u652F\u6301</li><li data-v-ca53053b><strong data-v-ca53053b>PNG</strong>\uFF1A\u652F\u6301\u900F\u660E\u80CC\u666F\uFF0C\u8D28\u91CF\u9AD8\u4F46\u6587\u4EF6\u8F83\u5927</li><li data-v-ca53053b><strong data-v-ca53053b>JPG</strong>\uFF1A\u4E0D\u652F\u6301\u900F\u660E\uFF0C\u6587\u4EF6\u8F83\u5C0F\uFF0C\u9002\u5408\u7167\u7247</li><li data-v-ca53053b><strong data-v-ca53053b>WebP</strong>\uFF1A\u65B0\u4E00\u4EE3\u683C\u5F0F\uFF0C\u652F\u6301\u900F\u660E\u4E14\u6587\u4EF6\u5C0F</li></ul></div></div></div><div class="bg-card border border-border rounded-lg p-6" data-v-ca53053b><h3 class="text-lg font-semibold mb-4" data-v-ca53053b>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-ca53053b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-resize",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Maximize2), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-ca53053b${_scopeId}><p class="font-medium group-hover:text-primary" data-v-ca53053b${_scopeId}>\u56FE\u7247\u5C3A\u5BF8\u8C03\u6574</p><p class="text-xs text-muted-foreground" data-v-ca53053b${_scopeId}>\u8C03\u6574\u56FE\u7247\u5C3A\u5BF8</p></div>`);
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
        to: "/tools/image-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RefreshCw), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-ca53053b${_scopeId}><p class="font-medium group-hover:text-primary" data-v-ca53053b${_scopeId}>\u56FE\u7247\u683C\u5F0F\u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-ca53053b${_scopeId}>\u8F6C\u6362\u56FE\u7247\u683C\u5F0F</p></div>`);
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
        to: "/tools/image-compress",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-ca53053b${_scopeId}><p class="font-medium group-hover:text-primary" data-v-ca53053b${_scopeId}>\u56FE\u7247\u538B\u7F29</p><p class="text-xs text-muted-foreground" data-v-ca53053b${_scopeId}>\u5728\u7EBF\u538B\u7F29\u56FE\u7247</p></div>`);
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
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/icon-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const iconGenerator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca53053b"]]);

export { iconGenerator as default };
//# sourceMappingURL=icon-generator-wtpHuuWD.mjs.map
