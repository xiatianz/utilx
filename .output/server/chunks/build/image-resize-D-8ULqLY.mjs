import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from 'vue/server-renderer';
import { ImageIcon, Settings, Download, RotateCcw, Plus, Info, Crop, ArrowRight, Zap, Droplet } from 'lucide-vue-next';
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
  __name: "image-resize",
  __ssrInlineRender: true,
  setup(__props) {
    const image = ref(null);
    const resizedUrl = ref(null);
    const width = ref(null);
    const height = ref(null);
    const resizeMode = ref("fit");
    const lockAspectRatio = ref(true);
    const percentage = ref(100);
    const zoomLevel = ref(50);
    const isProcessing = ref(false);
    ref(null);
    ref(null);
    const batchImages = ref([]);
    const isProcessingBatch = ref(false);
    const resizeModes = [
      { value: "stretch", name: "\u62C9\u4F38" },
      { value: "fit", name: "\u9002\u5E94" },
      { value: "crop", name: "\u88C1\u526A" },
      { value: "fill", name: "\u586B\u5145" }
    ];
    const sizePresets = [
      { name: "16:9 (1920\xD71080)", width: 1920, height: 1080 },
      { name: "4:3 (1024\xD7768)", width: 1024, height: 768 },
      { name: "1:1 (1080\xD71080)", width: 1080, height: 1080 },
      { name: "\u5934\u50CF (500\xD7500)", width: 500, height: 500 },
      { name: "\u7F29\u7565\u56FE (150\xD7150)", width: 150, height: 150 },
      { name: "\u9AD8\u6E05 (4K)", width: 3840, height: 2160 }
    ];
    const resizedPercentage = computed(() => {
      if (!image.value || !width.value || !height.value) return "";
      const areaDiff = width.value * height.value / (image.value.originalWidth * image.value.originalHeight);
      return `${(areaDiff * 100).toFixed(1)}%`;
    });
    const batchProcessedCount = computed(() => {
      return batchImages.value.filter((img) => img.processedUrl).length;
    });
    useSeoMeta({
      title: "\u56FE\u7247\u5C3A\u5BF8\u8C03\u6574 - \u5728\u7EBF\u8C03\u6574\u56FE\u7247\u5C3A\u5BF8\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u56FE\u7247\u5C3A\u5BF8\u8C03\u6574\u5DE5\u5177\uFF0C\u652F\u6301\u50CF\u7D20\u548C\u767E\u5206\u6BD4\u8C03\u6574\u3001\u6279\u91CF\u5904\u7406\u3001\u591A\u79CD\u88C1\u526A\u6A21\u5F0F\u3002",
      keywords: ["\u56FE\u7247\u5C3A\u5BF8", "\u56FE\u7247\u8C03\u6574", "\u56FE\u7247\u7F29\u653E", "\u50CF\u7D20\u8C03\u6574", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-4ebc7e39><div class="mt-4 mb-8" data-v-4ebc7e39><h1 class="text-3xl font-bold mb-3" data-v-4ebc7e39>\u56FE\u7247\u5C3A\u5BF8\u8C03\u6574</h1><p class="text-muted-foreground" data-v-4ebc7e39>\u5728\u7EBF\u8C03\u6574\u56FE\u7247\u5C3A\u5BF8\uFF0C\u652F\u6301\u50CF\u7D20\u3001\u767E\u5206\u6BD4\u548C\u9884\u8BBE\u5C3A\u5BF8</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-4ebc7e39><div class="space-y-4" data-v-4ebc7e39><div class="bg-card rounded-lg p-6" data-v-4ebc7e39><h2 class="text-lg font-semibold mb-4" data-v-4ebc7e39>\u4E0A\u4F20\u56FE\u7247</h2><div class="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer" data-v-4ebc7e39><input type="file" class="hidden" accept="image/*" data-v-4ebc7e39>`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2" data-v-4ebc7e39>\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u91CC</p><p class="text-sm text-muted-foreground" data-v-4ebc7e39>\u6216\u8005\u70B9\u51FB\u9009\u62E9\u6587\u4EF6</p></div>`);
      if (image.value) {
        _push(`<div class="mt-4 p-4 bg-muted rounded-lg" data-v-4ebc7e39><div class="flex items-center gap-3 mb-3" data-v-4ebc7e39><img${ssrRenderAttr("src", image.value.preview)}${ssrRenderAttr("alt", image.value.name)} class="w-16 h-16 object-cover rounded" data-v-4ebc7e39><div class="flex-1" data-v-4ebc7e39><p class="font-medium truncate" data-v-4ebc7e39>${ssrInterpolate(image.value.name)}</p><p class="text-sm text-muted-foreground" data-v-4ebc7e39>${ssrInterpolate(image.value.originalWidth)} \xD7 ${ssrInterpolate(image.value.originalHeight)} px </p></div></div><button class="w-full px-3 py-2 text-sm text-destructive hover:bg-destructive/5 rounded-md transition-colors" data-v-4ebc7e39> \u79FB\u9664\u56FE\u7247 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (image.value) {
        _push(`<div class="bg-card rounded-lg p-6" data-v-4ebc7e39><h2 class="text-lg font-semibold mb-4" data-v-4ebc7e39>\u5C3A\u5BF8\u8BBE\u7F6E</h2><div class="space-y-4" data-v-4ebc7e39><div data-v-4ebc7e39><label class="text-sm font-medium" data-v-4ebc7e39>\u8C03\u6574\u6A21\u5F0F</label><div class="mt-2 grid grid-cols-2 gap-2" data-v-4ebc7e39><!--[-->`);
        ssrRenderList(resizeModes, (mode) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-2 rounded-md transition-colors text-sm",
            resizeMode.value === mode.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
          ])}" data-v-4ebc7e39>${ssrInterpolate(mode.name)}</button>`);
        });
        _push(`<!--]--></div></div><div class="grid grid-cols-2 gap-3" data-v-4ebc7e39><div data-v-4ebc7e39><label class="text-sm font-medium" data-v-4ebc7e39>\u5BBD\u5EA6</label><div class="relative" data-v-4ebc7e39><input${ssrRenderAttr("value", width.value)} type="number" min="1" class="w-full px-3 py-2 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-4ebc7e39><span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground" data-v-4ebc7e39>px</span></div></div><div data-v-4ebc7e39><label class="text-sm font-medium" data-v-4ebc7e39>\u9AD8\u5EA6</label><div class="relative" data-v-4ebc7e39><input${ssrRenderAttr("value", height.value)} type="number" min="1" class="w-full px-3 py-2 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-4ebc7e39><span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground" data-v-4ebc7e39>px</span></div></div></div><div data-v-4ebc7e39><label class="text-sm font-medium" data-v-4ebc7e39>\u767E\u5206\u6BD4\u8C03\u6574</label><div class="mt-2 flex items-center gap-2" data-v-4ebc7e39><input${ssrRenderAttr("value", percentage.value)} type="range" min="10" max="200" step="5" class="flex-1" data-v-4ebc7e39><span class="text-sm font-mono w-12 text-right" data-v-4ebc7e39>${ssrInterpolate(percentage.value)}%</span></div></div><label class="flex items-center gap-2" data-v-4ebc7e39><input${ssrIncludeBooleanAttr(Array.isArray(lockAspectRatio.value) ? ssrLooseContain(lockAspectRatio.value, null) : lockAspectRatio.value) ? " checked" : ""} type="checkbox" class="rounded" checked data-v-4ebc7e39><span class="text-sm" data-v-4ebc7e39>\u9501\u5B9A\u5BBD\u9AD8\u6BD4</span></label><div data-v-4ebc7e39><label class="text-sm font-medium" data-v-4ebc7e39>\u5E38\u7528\u5C3A\u5BF8</label><div class="mt-2 grid grid-cols-2 gap-2" data-v-4ebc7e39><!--[-->`);
        ssrRenderList(sizePresets, (preset) => {
          _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm" data-v-4ebc7e39>${ssrInterpolate(preset.name)}</button>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-4" data-v-4ebc7e39>`);
      if (image.value) {
        _push(`<div class="bg-card rounded-lg p-6" data-v-4ebc7e39><h2 class="text-lg font-semibold mb-4" data-v-4ebc7e39>\u9884\u89C8\u5BF9\u6BD4</h2><div class="mb-4 flex items-center gap-4" data-v-4ebc7e39><label class="text-sm font-medium" data-v-4ebc7e39>\u9884\u89C8\u7F29\u653E</label><input${ssrRenderAttr("value", zoomLevel.value)} type="range" min="10" max="100" step="10" class="flex-1" data-v-4ebc7e39><span class="text-sm font-mono" data-v-4ebc7e39>${ssrInterpolate(zoomLevel.value)}%</span></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4" data-v-4ebc7e39><div data-v-4ebc7e39><h3 class="text-sm font-medium mb-2" data-v-4ebc7e39>\u539F\u56FE</h3><div class="border rounded-lg overflow-hidden bg-checkered" data-v-4ebc7e39><img${ssrRenderAttr("src", image.value.preview)}${ssrRenderAttr("alt", image.value.name)} style="${ssrRenderStyle({
          width: image.value.originalWidth * zoomLevel.value / 100 + "px",
          height: "auto",
          maxWidth: "100%"
        })}" class="block mx-auto" data-v-4ebc7e39></div><p class="mt-2 text-sm text-muted-foreground" data-v-4ebc7e39>${ssrInterpolate(image.value.originalWidth)} \xD7 ${ssrInterpolate(image.value.originalHeight)} px </p></div><div data-v-4ebc7e39><h3 class="text-sm font-medium mb-2" data-v-4ebc7e39>\u8C03\u6574\u540E</h3><div class="border rounded-lg overflow-hidden bg-checkered" data-v-4ebc7e39>`);
        if (resizedUrl.value) {
          _push(`<img${ssrRenderAttr("src", resizedUrl.value)}${ssrRenderAttr("alt", image.value.name)} style="${ssrRenderStyle({
            width: width.value * zoomLevel.value / 100 + "px",
            height: "auto",
            maxWidth: "100%"
          })}" class="block mx-auto" data-v-4ebc7e39>`);
        } else {
          _push(`<div class="flex items-center justify-center h-64 text-muted-foreground" data-v-4ebc7e39> \u8C03\u6574\u5C3A\u5BF8\u540E\u9884\u89C8\u5C06\u663E\u793A\u5728\u8FD9\u91CC </div>`);
        }
        _push(`</div>`);
        if (width.value && height.value) {
          _push(`<p class="mt-2 text-sm text-muted-foreground" data-v-4ebc7e39>${ssrInterpolate(width.value)} \xD7 ${ssrInterpolate(height.value)} px `);
          if (image.value.originalWidth !== width.value || image.value.originalHeight !== height.value) {
            _push(`<span class="ml-2 text-primary" data-v-4ebc7e39> (${ssrInterpolate(resizedPercentage.value)}) </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="mt-6 flex gap-3" data-v-4ebc7e39><button${ssrIncludeBooleanAttr(!width.value || !height.value || isProcessing.value) ? " disabled" : ""} class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2" data-v-4ebc7e39>`);
        if (isProcessing.value) {
          _push(ssrRenderComponent(unref(Settings), { class: "w-4 h-4 animate-spin" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(isProcessing.value ? "\u5904\u7406\u4E2D..." : "\u5E94\u7528\u8C03\u6574")}</button>`);
        if (resizedUrl.value) {
          _push(`<button class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center gap-2" data-v-4ebc7e39>`);
          _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
          _push(` \u4E0B\u8F7D </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="px-4 py-2 border border-muted text-muted-foreground rounded-md hover:bg-muted transition-colors flex items-center gap-2" data-v-4ebc7e39>`);
        _push(ssrRenderComponent(unref(RotateCcw), { class: "w-4 h-4" }, null, _parent));
        _push(` \u91CD\u7F6E </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6" data-v-4ebc7e39><h2 class="text-lg font-semibold mb-4" data-v-4ebc7e39>\u6279\u91CF\u5904\u7406</h2><p class="text-sm text-muted-foreground mb-4" data-v-4ebc7e39> \u4E0A\u4F20\u591A\u5F20\u56FE\u7247\uFF0C\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u6279\u91CF\u8C03\u6574\u5C3A\u5BF8 </p><div class="border-2 border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer" data-v-4ebc7e39><input type="file" class="hidden" accept="image/*" multiple data-v-4ebc7e39>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-8 h-8 mx-auto text-muted-foreground mb-2" }, null, _parent));
      _push(`<p class="text-sm" data-v-4ebc7e39>\u6DFB\u52A0\u591A\u5F20\u56FE\u7247</p></div>`);
      if (batchImages.value.length > 0) {
        _push(`<div class="mt-4 space-y-2" data-v-4ebc7e39><div class="flex justify-between items-center mb-2" data-v-4ebc7e39><span class="text-sm font-medium" data-v-4ebc7e39>${ssrInterpolate(batchImages.value.length)} \u5F20\u56FE\u7247</span><div class="flex gap-2" data-v-4ebc7e39><button${ssrIncludeBooleanAttr(isProcessingBatch.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50" data-v-4ebc7e39>${ssrInterpolate(isProcessingBatch.value ? "\u5904\u7406\u4E2D..." : "\u6279\u91CF\u5904\u7406")}</button><button class="px-3 py-1 text-sm text-destructive hover:bg-destructive/5 rounded-md transition-colors" data-v-4ebc7e39> \u6E05\u7A7A </button></div></div><div class="max-h-48 overflow-y-auto space-y-2" data-v-4ebc7e39><!--[-->`);
        ssrRenderList(batchImages.value, (img, index) => {
          _push(`<div class="flex items-center gap-3 p-2 bg-muted rounded-lg" data-v-4ebc7e39><img${ssrRenderAttr("src", img.preview)}${ssrRenderAttr("alt", img.name)} class="w-10 h-10 object-cover rounded" data-v-4ebc7e39><div class="flex-1 min-w-0" data-v-4ebc7e39><p class="text-sm font-medium truncate" data-v-4ebc7e39>${ssrInterpolate(img.name)}</p><p class="text-xs text-muted-foreground" data-v-4ebc7e39>${ssrInterpolate(img.width)} \xD7 ${ssrInterpolate(img.height)} \u2192 ${ssrInterpolate(width.value || "0")} \xD7 ${ssrInterpolate(height.value || "0")}</p></div><div class="text-xs text-muted-foreground" data-v-4ebc7e39>${ssrInterpolate(img.status)}</div></div>`);
        });
        _push(`<!--]--></div>`);
        if (batchProcessedCount.value > 0) {
          _push(`<button class="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" data-v-4ebc7e39> \u4E0B\u8F7D\u6240\u6709 (${ssrInterpolate(batchProcessedCount.value)} \u5F20) </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="mt-12 space-y-6" data-v-4ebc7e39><div class="bg-card border-rounded p-6" data-v-4ebc7e39><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-4ebc7e39>`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u8BF4\u660E </h3><div class="space-y-4 text-sm text-muted-foreground" data-v-4ebc7e39><div data-v-4ebc7e39><h4 class="font-medium text-foreground mb-2" data-v-4ebc7e39>\u8C03\u6574\u6A21\u5F0F\u8BF4\u660E</h4><ul class="list-disc list-inside space-y-1 ml-4" data-v-4ebc7e39><li data-v-4ebc7e39><strong data-v-4ebc7e39>\u62C9\u4F38</strong>\uFF1A\u5F3A\u5236\u8C03\u6574\u5230\u6307\u5B9A\u5C3A\u5BF8\uFF0C\u53EF\u80FD\u53D8\u5F62</li><li data-v-4ebc7e39><strong data-v-4ebc7e39>\u9002\u5E94</strong>\uFF1A\u4FDD\u6301\u6BD4\u4F8B\uFF0C\u9002\u5E94\u6307\u5B9A\u5C3A\u5BF8\uFF0C\u53EF\u80FD\u6709\u7A7A\u767D</li><li data-v-4ebc7e39><strong data-v-4ebc7e39>\u88C1\u526A</strong>\uFF1A\u4FDD\u6301\u6BD4\u4F8B\uFF0C\u88C1\u526A\u5230\u6307\u5B9A\u5C3A\u5BF8</li><li data-v-4ebc7e39><strong data-v-4ebc7e39>\u586B\u5145</strong>\uFF1A\u4FDD\u6301\u6BD4\u4F8B\uFF0C\u586B\u5145\u5230\u6307\u5B9A\u5C3A\u5BF8</li></ul></div><div data-v-4ebc7e39><h4 class="font-medium text-foreground mb-2" data-v-4ebc7e39>\u4F7F\u7528\u63D0\u793A</h4><ul class="list-disc list-inside space-y-1 ml-4" data-v-4ebc7e39><li data-v-4ebc7e39>\u9501\u5B9A\u5BBD\u9AD8\u6BD4\u53EF\u4FDD\u6301\u56FE\u7247\u4E0D\u53D8\u5F62</li><li data-v-4ebc7e39>\u652F\u6301\u6279\u91CF\u5904\u7406\uFF0C\u63D0\u9AD8\u6548\u7387</li><li data-v-4ebc7e39>\u9884\u89C8\u529F\u80FD\u5E2E\u52A9\u786E\u8BA4\u6548\u679C</li><li data-v-4ebc7e39>\u5904\u7406\u901F\u5EA6\u53D6\u51B3\u4E8E\u56FE\u7247\u5927\u5C0F\u548C\u6570\u91CF</li></ul></div></div></div><div class="bg-card rounded-lg p-6" data-v-4ebc7e39><h3 class="text-lg font-semibold mb-4" data-v-4ebc7e39>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-4ebc7e39>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-crop",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Crop), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-4ebc7e39${_scopeId}><p class="font-medium group-hover:text-primary" data-v-4ebc7e39${_scopeId}>\u56FE\u7247\u88C1\u526A</p><p class="text-xs text-muted-foreground" data-v-4ebc7e39${_scopeId}>\u5728\u7EBF\u88C1\u526A\u56FE\u7247</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Crop), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u56FE\u7247\u88C1\u526A"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u5728\u7EBF\u88C1\u526A\u56FE\u7247")
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
            _push2(`<div data-v-4ebc7e39${_scopeId}><p class="font-medium group-hover:text-primary" data-v-4ebc7e39${_scopeId}>\u56FE\u7247\u538B\u7F29</p><p class="text-xs text-muted-foreground" data-v-4ebc7e39${_scopeId}>\u5728\u7EBF\u538B\u7F29\u56FE\u7247</p></div>`);
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
        to: "/tools/image-watermark",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Droplet), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-4ebc7e39${_scopeId}><p class="font-medium group-hover:text-primary" data-v-4ebc7e39${_scopeId}>\u56FE\u7247\u6C34\u5370</p><p class="text-xs text-muted-foreground" data-v-4ebc7e39${_scopeId}>\u6DFB\u52A0\u6587\u5B57/\u56FE\u7247\u6C34\u5370</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Droplet), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u56FE\u7247\u6C34\u5370"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6DFB\u52A0\u6587\u5B57/\u56FE\u7247\u6C34\u5370")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/image-resize.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const imageResize = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ebc7e39"]]);

export { imageResize as default };
//# sourceMappingURL=image-resize-D-8ULqLY.mjs.map
