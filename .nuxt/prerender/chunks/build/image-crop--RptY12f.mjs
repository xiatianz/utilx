import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
import { Upload, Image, CheckCircle, Settings, Loader2, Scissors, Download, Edit, RefreshCw, ArrowRight, Images, Check, HelpCircle, ChevronUp } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
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
  __name: "image-crop",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\u56FE\u7247\u88C1\u526A\u5DE5\u5177 - \u5728\u7EBF\u667A\u80FD\u88C1\u526A\u56FE\u7247",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBF\u56FE\u7247\u88C1\u526A\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u7531\u88C1\u526A\u3001\u56FA\u5B9A\u6BD4\u4F8B\u88C1\u526A\u3001\u5706\u5F62\u88C1\u526A\u7B49\u591A\u79CD\u6A21\u5F0F\uFF0C\u63D0\u4F9B\u7CBE\u786E\u7684\u5C3A\u5BF8\u63A7\u5236\u548C\u6279\u91CF\u5904\u7406\u529F\u80FD\u3002" },
        { name: "keywords", content: "\u56FE\u7247\u88C1\u526A,\u5728\u7EBF\u88C1\u526A,\u56FE\u7247\u7F16\u8F91,\u81EA\u7531\u88C1\u526A,\u56FA\u5B9A\u6BD4\u4F8B,\u5706\u5F62\u88C1\u526A,\u6279\u91CF\u88C1\u526A" }
      ]
    });
    const tool = tools.find((t) => t.id === "image-crop");
    categories.find((c) => c.id === "image");
    const isSeoContentVisible = ref(true);
    ref(null);
    ref(null);
    const images = ref([]);
    const currentImageIndex = ref(0);
    const croppedImages = ref([]);
    const processing = ref(false);
    const cropMode = ref("free");
    const aspectRatio = ref("4:3");
    const aspectRatios = [
      { label: "1:1", value: "1:1" },
      { label: "4:3", value: "4:3" },
      { label: "16:9", value: "16:9" },
      { label: "3:2", value: "3:2" },
      { label: "\u81EA\u7531", value: "free" }
    ];
    const customWidth = ref(16);
    const customHeight = ref(9);
    const sizeMode = ref("original");
    const outputWidth = ref(800);
    const outputHeight = ref(600);
    const outputFormat = ref("png");
    const quality = ref(90);
    const cropArea = ref({
      active: false,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      startX: 0,
      startY: 0
    });
    const iconMap = {
      Upload,
      Image,
      CheckCircle,
      Settings,
      Scissors,
      Download,
      Edit,
      RefreshCw,
      ArrowRight,
      Images,
      Check,
      Loader2,
      HelpCircle,
      ChevronUp
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "image" && t.id !== "image-crop"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "image-merge"),
        tools.find((t) => t.id === "image-resize"),
        tools.find((t) => t.id === "image-compress"),
        tools.find((t) => t.id === "image-watermark")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const currentImage = computed(() => {
      return images.value[currentImageIndex.value] || null;
    });
    computed(() => {
      if (aspectRatio.value === "free") return null;
      if (aspectRatio.value === "custom") {
        return customWidth.value / customHeight.value;
      }
      const [w, h] = aspectRatio.value.split(":").map(Number);
      return w / h;
    });
    watch(aspectRatio, (newRatio) => {
      if (newRatio !== "custom") return;
      const [w, h] = newRatio.split(":").map(Number);
      customWidth.value = w;
      customHeight.value = h;
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">\u56FE\u7247\u88C1\u526A\u5DE5\u5177 - \u5728\u7EBF\u667A\u80FD\u88C1\u526A\u56FE\u7247</h1><p class="text-muted-foreground">\u4E13\u4E1A\u7684\u5728\u7EBF\u56FE\u7247\u88C1\u526A\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u7531\u88C1\u526A\u3001\u56FA\u5B9A\u6BD4\u4F8B\u88C1\u526A\u3001\u5706\u5F62\u88C1\u526A\u7B49\u591A\u79CD\u6A21\u5F0F\uFF0C\u63D0\u4F9B\u7CBE\u786E\u7684\u5C3A\u5BF8\u63A7\u5236\u548C\u9884\u89C8\u529F\u80FD\u3002\u9002\u7528\u4E8E\u8BBE\u8BA1\u5E08\u3001\u5F00\u53D1\u8005\u548C\u5185\u5BB9\u521B\u4F5C\u8005\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Upload), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u4E0A\u4F20\u56FE\u7247 </h2><div class="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer"><input type="file" class="hidden" accept="image/*" multiple>`);
      if (!images.value.length) {
        _push(`<div class="space-y-3">`);
        _push(ssrRenderComponent(unref(Image), { class: "h-12 w-12 text-muted-foreground mx-auto" }, null, _parent));
        _push(`<div><p class="text-muted-foreground">\u70B9\u51FB\u6216\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u91CC</p><p class="text-sm text-muted-foreground/70 mt-1">\u652F\u6301 JPG\u3001PNG\u3001WebP \u7B49\u683C\u5F0F</p><p class="text-sm text-primary mt-1">\u652F\u6301\u6279\u91CF\u5904\u7406</p></div></div>`);
      } else {
        _push(`<div class="space-y-2">`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "h-12 w-12 text-green-500 mx-auto" }, null, _parent));
        _push(`<p class="text-green-500 font-medium">${ssrInterpolate(images.value.length)} \u5F20\u56FE\u7247\u5DF2\u4E0A\u4F20</p><button class="text-sm text-destructive hover:text-destructive/80"> \u6E05\u9664\u6240\u6709 </button></div>`);
      }
      _push(`</div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u88C1\u526A\u8BBE\u7F6E </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u88C1\u526A\u6A21\u5F0F</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="free"${ssrIncludeBooleanAttr(Array.isArray(cropMode.value) ? ssrLooseContain(cropMode.value, "free") : ssrLooseEqual(cropMode.value, "free")) ? " selected" : ""}>\u81EA\u7531\u88C1\u526A</option><option value="ratio"${ssrIncludeBooleanAttr(Array.isArray(cropMode.value) ? ssrLooseContain(cropMode.value, "ratio") : ssrLooseEqual(cropMode.value, "ratio")) ? " selected" : ""}>\u56FA\u5B9A\u6BD4\u4F8B</option><option value="circle"${ssrIncludeBooleanAttr(Array.isArray(cropMode.value) ? ssrLooseContain(cropMode.value, "circle") : ssrLooseEqual(cropMode.value, "circle")) ? " selected" : ""}>\u5706\u5F62\u88C1\u526A</option></select></div>`);
      if (cropMode.value === "ratio") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2">\u5BBD\u9AD8\u6BD4</label><div class="grid grid-cols-3 gap-2"><!--[-->`);
        ssrRenderList(aspectRatios, (ratio) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-2 text-sm rounded-md border transition-colors",
            aspectRatio.value === ratio.value ? "bg-primary/10 border-primary text-primary" : "bg-muted border-border text-foreground hover:bg-muted/80"
          ])}">${ssrInterpolate(ratio.label)}</button>`);
        });
        _push(`<!--]--></div><div class="mt-3 grid grid-cols-2 gap-2"><div><label class="block text-xs text-muted-foreground mb-1">\u5BBD\u5EA6</label><input${ssrRenderAttr("value", customWidth.value)} type="number" min="1" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="\u5BBD\u5EA6"></div><div><label class="block text-xs text-muted-foreground mb-1">\u9AD8\u5EA6</label><input${ssrRenderAttr("value", customHeight.value)} type="number" min="1" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="\u9AD8\u5EA6"></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="block text-sm font-medium text-foreground mb-2">\u8F93\u51FA\u5C3A\u5BF8</label><div class="space-y-2"><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(sizeMode.value, "original")) ? " checked" : ""} type="radio" value="original" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">\u4FDD\u6301\u539F\u59CB\u5C3A\u5BF8</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(sizeMode.value, "custom")) ? " checked" : ""} type="radio" value="custom" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">\u81EA\u5B9A\u4E49\u5C3A\u5BF8</span></label></div>`);
      if (sizeMode.value === "custom") {
        _push(`<div class="mt-3 grid grid-cols-2 gap-2"><div><label class="block text-xs text-muted-foreground mb-1">\u5BBD\u5EA6 (px)</label><input${ssrRenderAttr("value", outputWidth.value)} type="number" min="1" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="\u5BBD\u5EA6"></div><div><label class="block text-xs text-muted-foreground mb-1">\u9AD8\u5EA6 (px)</label><input${ssrRenderAttr("value", outputHeight.value)} type="number" min="1" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="\u9AD8\u5EA6"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block text-sm font-medium text-foreground mb-2">\u8F93\u51FA\u683C\u5F0F</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="png"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "png") : ssrLooseEqual(outputFormat.value, "png")) ? " selected" : ""}>PNG</option><option value="jpeg"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "jpeg") : ssrLooseEqual(outputFormat.value, "jpeg")) ? " selected" : ""}>JPEG</option><option value="webp"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "webp") : ssrLooseEqual(outputFormat.value, "webp")) ? " selected" : ""}>WebP</option></select></div>`);
      if (outputFormat.value === "jpeg") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2"> \u56FE\u7247\u8D28\u91CF: ${ssrInterpolate(quality.value)}% </label><input${ssrRenderAttr("value", quality.value)} type="range" min="10" max="100" step="5" class="w-full"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card border border-border rounded-lg p-6"><button${ssrIncludeBooleanAttr(!images.value.length || processing.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (processing.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Scissors), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(processing.value ? "\u5904\u7406\u4E2D..." : `\u88C1\u526A\u6240\u6709\u56FE\u7247 (${images.value.length})`)}</button>`);
      if (croppedImages.value.length > 0) {
        _push(`<button class="w-full mt-3 bg-secondary text-secondary-foreground py-3 px-4 rounded-md hover:bg-secondary/90 transition-colors flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(Download), { class: "h-5 w-5 mr-2" }, null, _parent));
        _push(` \u4E0B\u8F7D\u6240\u6709\u56FE\u7247 (${ssrInterpolate(croppedImages.value.length)}) </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="lg:col-span-2 space-y-6">`);
      if (currentImage.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Edit), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u7F16\u8F91\u56FE\u7247 </h3><div class="flex items-center space-x-2 text-sm text-muted-foreground"><span>${ssrInterpolate(currentImage.value.file.name)}</span><span>\u2022</span><span>${ssrInterpolate(currentImage.value.width)} \xD7 ${ssrInterpolate(currentImage.value.height)}</span></div></div><div class="relative bg-muted rounded-lg overflow-hidden" style="${ssrRenderStyle({ "min-height": "400px" })}"><canvas class="max-w-full mx-auto cursor-crosshair"></canvas>`);
        if (cropArea.value.active) {
          _push(`<div class="absolute border-2 border-primary bg-primary/20 pointer-events-none" style="${ssrRenderStyle({
            left: cropArea.value.x + "px",
            top: cropArea.value.y + "px",
            width: cropArea.value.width + "px",
            height: cropArea.value.height + "px"
          })}"><div class="absolute -top-1 -left-1 w-3 h-3 bg-primary border border-background rounded-full"></div><div class="absolute -top-1 -right-1 w-3 h-3 bg-primary border border-background rounded-full"></div><div class="absolute -bottom-1 -left-1 w-3 h-3 bg-primary border border-background rounded-full"></div><div class="absolute -bottom-1 -right-1 w-3 h-3 bg-primary border border-background rounded-full"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mt-4 flex flex-wrap gap-2"><button class="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors text-sm flex items-center">`);
        _push(ssrRenderComponent(unref(RefreshCw), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` \u91CD\u7F6E </button><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm flex items-center">`);
        _push(ssrRenderComponent(unref(Scissors), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` \u88C1\u526A\u5F53\u524D </button><button${ssrIncludeBooleanAttr(currentImageIndex.value >= images.value.length - 1) ? " disabled" : ""} class="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors text-sm flex items-center disabled:opacity-50">`);
        _push(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` \u4E0B\u4E00\u5F20 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (images.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Images), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u56FE\u7247\u5217\u8868 (${ssrInterpolate(images.value.length)}) </h3><div class="grid grid-cols-2 sm:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(images.value, (image, index) => {
          _push(`<div class="relative group cursor-pointer"><img${ssrRenderAttr("src", image.preview)}${ssrRenderAttr("alt", image.file.name)} class="${ssrRenderClass([[
            index === currentImageIndex.value ? "border-primary ring-2 ring-primary/20" : "border-border group-hover:border-muted-foreground"
          ], "w-full h-24 object-cover rounded-lg border-2 transition-all"])}">`);
          if (image.cropped) {
            _push(`<div class="absolute top-2 right-2 p-1 bg-green-500 rounded-full">`);
            _push(ssrRenderComponent(unref(Check), { class: "h-3 w-3 text-white" }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="mt-1 text-xs text-muted-foreground truncate">${ssrInterpolate(image.file.name)}</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (croppedImages.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u88C1\u526A\u5B8C\u6210 (${ssrInterpolate(croppedImages.value.length)}) </h3><div class="grid grid-cols-2 sm:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(croppedImages.value, (result, index) => {
          _push(`<div class="relative group"><img${ssrRenderAttr("src", result.preview)}${ssrRenderAttr("alt", result.name)} class="w-full h-24 object-cover rounded-lg border border-border"><button class="absolute inset-0 bg-background/80 backdrop-blur rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">`);
          _push(ssrRenderComponent(unref(Download), { class: "h-6 w-6 text-foreground" }, null, _parent));
          _push(`</button><div class="mt-1 text-xs text-muted-foreground"><div class="truncate">${ssrInterpolate(result.name)}</div><div>${ssrInterpolate(result.width)} \xD7 ${ssrInterpolate(result.height)}</div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F\u56FE\u7247\u88C1\u526A\u5DE5\u5177\uFF1F </h2><p class="text-muted-foreground mb-4"> \u56FE\u7247\u88C1\u526A\u5DE5\u5177\u662F\u4E00\u79CD\u5728\u7EBF\u670D\u52A1\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u7528\u6237\u7CBE\u786E\u5730\u88C1\u526A\u56FE\u7247\u7684\u7279\u5B9A\u533A\u57DF\u3002 \u65E0\u8BBA\u662F\u53BB\u9664\u56FE\u7247\u4E2D\u7684\u65E0\u5173\u90E8\u5206\u3001\u8C03\u6574\u56FE\u7247\u6BD4\u4F8B\uFF0C\u8FD8\u662F\u521B\u5EFA\u5934\u50CF\u548C\u7F29\u7565\u56FE\uFF0C \u90FD\u53EF\u4EE5\u901A\u8FC7\u4E13\u4E1A\u7684\u88C1\u526A\u5DE5\u5177\u5FEB\u901F\u5B8C\u6210\u3002\u8FD9\u5BF9\u4E8E\u8BBE\u8BA1\u5E08\u3001\u6444\u5F71\u5E08\u3001\u5185\u5BB9\u521B\u4F5C\u8005\u548C\u666E\u901A\u7528\u6237\u90FD\u975E\u5E38\u6709\u7528\u3002 </p><p class="text-muted-foreground mb-4"> \u73B0\u4EE3\u56FE\u7247\u88C1\u526A\u5DE5\u5177\u4E0D\u4EC5\u652F\u6301\u57FA\u672C\u7684\u77E9\u5F62\u88C1\u526A\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u591A\u79CD\u9AD8\u7EA7\u529F\u80FD\uFF0C \u5982\u56FA\u5B9A\u6BD4\u4F8B\u88C1\u526A\u3001\u5706\u5F62\u88C1\u526A\u3001\u81EA\u7531\u5F62\u72B6\u88C1\u526A\u7B49\u3002\u7528\u6237\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u9009\u62E9\u5408\u9002\u7684\u88C1\u526A\u6A21\u5F0F\uFF0C \u5E76\u7CBE\u786E\u63A7\u5236\u8F93\u51FA\u5C3A\u5BF8\u548C\u8D28\u91CF\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u591A\u79CD\u88C1\u526A\u6A21\u5F0F</strong>: \u652F\u6301\u81EA\u7531\u88C1\u526A\u3001\u56FA\u5B9A\u6BD4\u4F8B\u88C1\u526A\u3001\u5706\u5F62\u88C1\u526A\u4E09\u79CD\u4E3B\u8981\u6A21\u5F0F</li><li><strong>\u7CBE\u786E\u6BD4\u4F8B\u63A7\u5236</strong>: \u63D0\u4F9B\u5E38\u89C1\u6BD4\u4F8B\u9884\u8BBE\u548C\u81EA\u5B9A\u4E49\u5BBD\u9AD8\u6BD4\u8BBE\u7F6E</li><li><strong>\u6279\u91CF\u5904\u7406</strong>: \u652F\u6301\u4E00\u6B21\u4E0A\u4F20\u591A\u5F20\u56FE\u7247\u5E76\u6279\u91CF\u88C1\u526A\u5904\u7406</li><li><strong>\u8F93\u51FA\u683C\u5F0F\u591A\u6837</strong>: \u652F\u6301PNG\u3001JPEG\u3001WebP\u7B49\u4E3B\u6D41\u56FE\u7247\u683C\u5F0F\u8F93\u51FA</li><li><strong>\u8D28\u91CF\u8C03\u8282</strong>: \u53EF\u8C03\u8282JPEG\u56FE\u7247\u7684\u8D28\u91CF\u53C2\u6570\uFF0C\u5E73\u8861\u6587\u4EF6\u5927\u5C0F\u548C\u56FE\u50CF\u8D28\u91CF</li><li><strong>\u5C3A\u5BF8\u5B9A\u5236</strong>: \u652F\u6301\u4FDD\u6301\u539F\u59CB\u5C3A\u5BF8\u6216\u81EA\u5B9A\u4E49\u8F93\u51FA\u5C3A\u5BF8</li><li><strong>\u5B9E\u65F6\u9884\u89C8</strong>: \u63D0\u4F9B\u88C1\u526A\u533A\u57DF\u5B9E\u65F6\u9884\u89C8\uFF0C\u786E\u4FDD\u7CBE\u786E\u9009\u62E9</li><li><strong>\u672C\u5730\u5904\u7406</strong>: \u6240\u6709\u5904\u7406\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u786E\u4FDD\u9690\u79C1\u5B89\u5168</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4F7F\u7528\u573A\u666F </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u793E\u4EA4\u5A92\u4F53\u5185\u5BB9</strong>: \u88C1\u526A\u9002\u5408\u4E0D\u540C\u793E\u4EA4\u5E73\u53F0\u7684\u56FE\u7247\u5C3A\u5BF8\uFF0C\u5982\u5934\u50CF\u3001\u5C01\u9762\u56FE\u7B49</li><li><strong>\u7535\u5546\u4EA7\u54C1\u56FE</strong>: \u7EDF\u4E00\u4EA7\u54C1\u56FE\u7247\u5C3A\u5BF8\u548C\u6BD4\u4F8B\uFF0C\u63D0\u5347\u5546\u54C1\u5C55\u793A\u6548\u679C</li><li><strong>\u8BBE\u8BA1\u7D20\u6750\u51C6\u5907</strong>: \u4E3A\u8BBE\u8BA1\u9879\u76EE\u51C6\u5907\u7B26\u5408\u89C4\u683C\u7684\u56FE\u7247\u7D20\u6750</li><li><strong>\u7167\u7247\u4F18\u5316</strong>: \u53BB\u9664\u7167\u7247\u4E2D\u7684\u65E0\u5173\u5143\u7D20\uFF0C\u7A81\u51FA\u4E3B\u4F53\u5185\u5BB9</li><li><strong>\u5934\u50CF\u5236\u4F5C</strong>: \u5236\u4F5C\u5706\u5F62\u6216\u65B9\u5F62\u5934\u50CF\uFF0C\u9002\u914D\u5404\u79CD\u5E94\u7528\u573A\u666F</li><li><strong>\u6587\u6863\u63D2\u56FE</strong>: \u88C1\u526A\u6280\u672F\u6587\u6863\u6216\u62A5\u544A\u4E2D\u7684\u63D2\u56FE\uFF0C\u4FDD\u6301\u7248\u9762\u6574\u6D01</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u88C1\u526A\u540E\u7684\u56FE\u7247\u8D28\u91CF\u4F1A\u6709\u635F\u5931\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u88C1\u526A\u64CD\u4F5C\u672C\u8EAB\u4E0D\u4F1A\u964D\u4F4E\u56FE\u7247\u8D28\u91CF\uFF0C\u56E0\u4E3A\u5B83\u53EA\u662F\u9009\u62E9\u56FE\u7247\u7684\u4E00\u4E2A\u533A\u57DF\u3002 \u4F46\u5982\u679C\u9009\u62E9\u4E86\u8F83\u5C0F\u7684\u8F93\u51FA\u5C3A\u5BF8\uFF0C\u53EF\u80FD\u4F1A\u56E0\u91CD\u65B0\u91C7\u6837\u800C\u5BFC\u81F4\u8D28\u91CF\u4E0B\u964D\u3002 \u4E3A\u4E86\u83B7\u5F97\u6700\u4F73\u6548\u679C\uFF0C\u5EFA\u8BAE\u4FDD\u6301\u539F\u59CB\u5C3A\u5BF8\u6216\u9009\u62E9\u8F83\u5927\u7684\u8F93\u51FA\u5C3A\u5BF8\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u652F\u6301\u54EA\u4E9B\u56FE\u7247\u683C\u5F0F\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5DE5\u5177\u652F\u6301\u6240\u6709\u4E3B\u6D41\u7684\u56FE\u7247\u683C\u5F0F\uFF0C\u5305\u62ECJPG\u3001PNG\u3001WebP\u3001GIF\u7B49\u3002 \u4E0A\u4F20\u7684\u56FE\u7247\u4F1A\u5728\u88C1\u526A\u524D\u81EA\u52A8\u89E3\u7801\uFF0C\u5728\u8F93\u51FA\u65F6\u53EF\u4EE5\u9009\u62E9\u6240\u9700\u7684\u683C\u5F0F\u3002 WebP\u683C\u5F0F\u901A\u5E38\u80FD\u63D0\u4F9B\u66F4\u597D\u7684\u538B\u7F29\u6548\u679C\u548C\u8D28\u91CF\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u63D0\u9AD8\u88C1\u526A\u6548\u7387\uFF1F</h3><p class="text-muted-foreground mt-1"> \u4E3A\u4E86\u63D0\u9AD8\u88C1\u526A\u6548\u7387\uFF0C\u5EFA\u8BAE\uFF1A 1. \u4F7F\u7528\u56FA\u5B9A\u6BD4\u4F8B\u88C1\u526A\u6A21\u5F0F\uFF0C\u907F\u514D\u6BCF\u6B21\u624B\u52A8\u8C03\u6574\uFF1B 2. \u6279\u91CF\u4E0A\u4F20\u56FE\u7247\u8FDB\u884C\u7EDF\u4E00\u5904\u7406\uFF1B 3. \u9884\u5148\u786E\u5B9A\u6240\u9700\u7684\u8F93\u51FA\u5C3A\u5BF8\u548C\u683C\u5F0F\uFF1B 4. \u4F7F\u7528\u952E\u76D8\u5FEB\u6377\u952E\u8FDB\u884C\u64CD\u4F5C\uFF08\u5982\u679C\u652F\u6301\uFF09\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u88C1\u526A\u7684\u56FE\u7247\u4F1A\u4FDD\u5B58\u5230\u670D\u52A1\u5668\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u4E0D\u4F1A\u3002\u6240\u6709\u7684\u56FE\u7247\u5904\u7406\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u56FE\u7247\u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u4EFB\u4F55\u670D\u52A1\u5668\u3002 \u8FD9\u786E\u4FDD\u4E86\u60A8\u7684\u9690\u79C1\u5B89\u5168\uFF0C\u4E5F\u52A0\u5FEB\u4E86\u5904\u7406\u901F\u5EA6\u3002\u88C1\u526A\u5B8C\u6210\u540E\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4E0B\u8F7D\u7ED3\u679C\u56FE\u7247\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Scissors)), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Scissors)), { class: "w-5 h-5 text-primary" })),
                  createVNode("span", { class: "font-medium text-foreground" }, toDisplayString(relatedTool.name), 1)
                ]),
                createVNode("p", { class: "text-sm text-muted-foreground line-clamp-2" }, toDisplayString(relatedTool.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/image-crop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=image-crop--RptY12f.mjs.map
