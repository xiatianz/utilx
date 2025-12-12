import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
import { Upload, Layers, CheckCircle, Settings, Loader2, Download, Images, ArrowUp, ArrowDown, Trash2, X, Eye, Image, HelpCircle, ChevronUp } from 'lucide-vue-next';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
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
  __name: "image-merge",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\u56FE\u7247\u5408\u5E76\u5DE5\u5177 - \u5728\u7EBF\u5408\u5E76\u591A\u5F20\u56FE\u7247",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBF\u56FE\u7247\u5408\u5E76\u5DE5\u5177\uFF0C\u652F\u6301\u6C34\u5E73\u3001\u5782\u76F4\u3001\u7F51\u683C\u7B49\u591A\u79CD\u5E03\u5C40\u65B9\u5F0F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u95F4\u8DDD\u548C\u80CC\u666F\u989C\u8272\uFF0C\u8F7B\u677E\u5C06\u591A\u5F20\u56FE\u7247\u5408\u5E76\u6210\u4E00\u5F20\u3002" },
        { name: "keywords", content: "\u56FE\u7247\u5408\u5E76,\u56FE\u7247\u62FC\u63A5,\u5728\u7EBF\u5408\u5E76,\u6C34\u5E73\u5408\u5E76,\u5782\u76F4\u5408\u5E76,\u7F51\u683C\u5E03\u5C40,\u6279\u91CF\u5408\u5E76" }
      ]
    });
    const tool = tools.find((t) => t.id === "image-merge");
    categories.find((c) => c.id === "image");
    const isSeoContentVisible = ref(true);
    ref(null);
    const images = ref([]);
    const selectedIndex = ref(null);
    const mergedImage = ref("");
    const processing = ref(false);
    const finalWidth = ref(0);
    const finalHeight = ref(0);
    const layoutMode = ref("horizontal");
    const gridCols = ref(3);
    const spacing = ref(10);
    const backgroundColor = ref("#FFFFFF");
    const alignment = ref("center");
    const sizeMode = ref("auto");
    const outputWidth = ref(1e3);
    const outputHeight = ref(800);
    const outputFormat = ref("png");
    const quality = ref(90);
    const iconMap = {
      Upload,
      Layers,
      Settings,
      Images,
      Eye,
      Image,
      Download,
      CheckCircle,
      ArrowUp,
      ArrowDown,
      Trash2,
      X,
      Loader2,
      HelpCircle,
      ChevronUp
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "image" && t.id !== "image-merge"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "image-crop"),
        tools.find((t) => t.id === "image-resize"),
        tools.find((t) => t.id === "image-compress"),
        tools.find((t) => t.id === "image-watermark")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const alignOptions = computed(() => {
      if (layoutMode.value === "horizontal") {
        return [
          { label: "\u9876\u90E8", value: "top" },
          { label: "\u5C45\u4E2D", value: "center" },
          { label: "\u5E95\u90E8", value: "bottom" }
        ];
      } else {
        return [
          { label: "\u5DE6\u4FA7", value: "left" },
          { label: "\u5C45\u4E2D", value: "center" },
          { label: "\u53F3\u4FA7", value: "right" }
        ];
      }
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">\u56FE\u7247\u5408\u5E76\u5DE5\u5177 - \u5728\u7EBF\u5408\u5E76\u591A\u5F20\u56FE\u7247</h1><p class="text-muted-foreground">\u4E13\u4E1A\u7684\u5728\u7EBF\u56FE\u7247\u5408\u5E76\u5DE5\u5177\uFF0C\u652F\u6301\u6C34\u5E73\u3001\u5782\u76F4\u3001\u7F51\u683C\u7B49\u591A\u79CD\u5E03\u5C40\u65B9\u5F0F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u95F4\u8DDD\u548C\u80CC\u666F\u989C\u8272\uFF0C\u8F7B\u677E\u5C06\u591A\u5F20\u56FE\u7247\u5408\u5E76\u6210\u4E00\u5F20\u3002\u9002\u7528\u4E8E\u8BBE\u8BA1\u5E08\u3001\u5F00\u53D1\u8005\u548C\u5185\u5BB9\u521B\u4F5C\u8005\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Upload), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u4E0A\u4F20\u56FE\u7247 </h2><div class="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer"><input type="file" class="hidden" accept="image/*" multiple>`);
      if (!images.value.length) {
        _push(`<div class="space-y-3">`);
        _push(ssrRenderComponent(unref(Layers), { class: "h-12 w-12 text-muted-foreground mx-auto" }, null, _parent));
        _push(`<div><p class="text-muted-foreground">\u70B9\u51FB\u6216\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u91CC</p><p class="text-sm text-muted-foreground/70 mt-1">\u652F\u6301 JPG\u3001PNG\u3001WebP \u7B49\u683C\u5F0F</p><p class="text-sm text-primary mt-1">\u81F3\u5C11\u9700\u8981 2 \u5F20\u56FE\u7247</p></div></div>`);
      } else {
        _push(`<div class="space-y-2">`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "h-12 w-12 text-green-500 mx-auto" }, null, _parent));
        _push(`<p class="text-green-500 font-medium">${ssrInterpolate(images.value.length)} \u5F20\u56FE\u7247\u5DF2\u4E0A\u4F20</p><button class="text-sm text-destructive hover:text-destructive/80"> \u6E05\u9664\u6240\u6709 </button></div>`);
      }
      _push(`</div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u5408\u5E76\u8BBE\u7F6E </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u5E03\u5C40\u65B9\u5F0F</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="horizontal"${ssrIncludeBooleanAttr(Array.isArray(layoutMode.value) ? ssrLooseContain(layoutMode.value, "horizontal") : ssrLooseEqual(layoutMode.value, "horizontal")) ? " selected" : ""}>\u6C34\u5E73\u6392\u5217</option><option value="vertical"${ssrIncludeBooleanAttr(Array.isArray(layoutMode.value) ? ssrLooseContain(layoutMode.value, "vertical") : ssrLooseEqual(layoutMode.value, "vertical")) ? " selected" : ""}>\u5782\u76F4\u6392\u5217</option><option value="grid"${ssrIncludeBooleanAttr(Array.isArray(layoutMode.value) ? ssrLooseContain(layoutMode.value, "grid") : ssrLooseEqual(layoutMode.value, "grid")) ? " selected" : ""}>\u7F51\u683C\u5E03\u5C40</option><option value="custom"${ssrIncludeBooleanAttr(Array.isArray(layoutMode.value) ? ssrLooseContain(layoutMode.value, "custom") : ssrLooseEqual(layoutMode.value, "custom")) ? " selected" : ""}>\u81EA\u5B9A\u4E49\u6392\u5217</option></select></div>`);
      if (layoutMode.value === "grid") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2"> \u7F51\u683C\u5217\u6570: ${ssrInterpolate(gridCols.value)}</label><input${ssrRenderAttr("value", gridCols.value)} type="range" min="2" max="5" class="w-full"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="block text-sm font-medium text-foreground mb-2"> \u56FE\u7247\u95F4\u8DDD: ${ssrInterpolate(spacing.value)}px </label><input${ssrRenderAttr("value", spacing.value)} type="range" min="0" max="50" class="w-full"></div><div><label class="block text-sm font-medium text-foreground mb-2">\u80CC\u666F\u989C\u8272</label><div class="flex space-x-2"><input${ssrRenderAttr("value", backgroundColor.value)} type="color" class="h-10 w-20 border border-border rounded-md cursor-pointer bg-background"><input${ssrRenderAttr("value", backgroundColor.value)} type="text" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="#FFFFFF"></div></div>`);
      if (layoutMode.value === "horizontal" || layoutMode.value === "vertical") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2">\u5BF9\u9F50\u65B9\u5F0F</label><div class="grid grid-cols-3 gap-2"><!--[-->`);
        ssrRenderList(alignOptions.value, (align) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-2 text-sm rounded-md border transition-colors",
            alignment.value === align.value ? "bg-primary/10 border-primary text-primary" : "bg-muted border-border text-foreground hover:bg-muted/80"
          ])}">${ssrInterpolate(align.label)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="block text-sm font-medium text-foreground mb-2">\u8F93\u51FA\u5C3A\u5BF8</label><div class="space-y-2"><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(sizeMode.value, "auto")) ? " checked" : ""} type="radio" value="auto" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">\u81EA\u52A8\u8BA1\u7B97</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(sizeMode.value, "custom")) ? " checked" : ""} type="radio" value="custom" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">\u81EA\u5B9A\u4E49\u5C3A\u5BF8</span></label></div>`);
      if (sizeMode.value === "custom") {
        _push(`<div class="mt-3 grid grid-cols-2 gap-2"><div><label class="block text-xs text-muted-foreground mb-1">\u5BBD\u5EA6 (px)</label><input${ssrRenderAttr("value", outputWidth.value)} type="number" min="100" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="\u5BBD\u5EA6"></div><div><label class="block text-xs text-muted-foreground mb-1">\u9AD8\u5EA6 (px)</label><input${ssrRenderAttr("value", outputHeight.value)} type="number" min="100" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="\u9AD8\u5EA6"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block text-sm font-medium text-foreground mb-2">\u8F93\u51FA\u683C\u5F0F</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="png"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "png") : ssrLooseEqual(outputFormat.value, "png")) ? " selected" : ""}>PNG</option><option value="jpeg"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "jpeg") : ssrLooseEqual(outputFormat.value, "jpeg")) ? " selected" : ""}>JPEG</option><option value="webp"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "webp") : ssrLooseEqual(outputFormat.value, "webp")) ? " selected" : ""}>WebP</option></select></div>`);
      if (outputFormat.value === "jpeg") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2"> \u56FE\u7247\u8D28\u91CF: ${ssrInterpolate(quality.value)}% </label><input${ssrRenderAttr("value", quality.value)} type="range" min="10" max="100" step="5" class="w-full"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card border border-border rounded-lg p-6"><button${ssrIncludeBooleanAttr(images.value.length < 2 || processing.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (processing.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Layers), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(processing.value ? "\u5904\u7406\u4E2D..." : "\u5408\u5E76\u56FE\u7247")}</button>`);
      if (mergedImage.value) {
        _push(`<button class="w-full mt-3 bg-secondary text-secondary-foreground py-3 px-4 rounded-md hover:bg-secondary/90 transition-colors flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(Download), { class: "h-5 w-5 mr-2" }, null, _parent));
        _push(` \u4E0B\u8F7D\u5408\u5E76\u7ED3\u679C </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="lg:col-span-2 space-y-6">`);
      if (images.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Images), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u56FE\u7247\u5217\u8868 (${ssrInterpolate(images.value.length)}) </h3><div class="flex space-x-2"><button${ssrIncludeBooleanAttr(selectedIndex.value === null || selectedIndex.value === 0) ? " disabled" : ""} class="p-2 text-muted-foreground hover:bg-muted rounded-md disabled:opacity-50">`);
        _push(ssrRenderComponent(unref(ArrowUp), { class: "h-4 w-4" }, null, _parent));
        _push(`</button><button${ssrIncludeBooleanAttr(selectedIndex.value === null || selectedIndex.value === images.value.length - 1) ? " disabled" : ""} class="p-2 text-muted-foreground hover:bg-muted rounded-md disabled:opacity-50">`);
        _push(ssrRenderComponent(unref(ArrowDown), { class: "h-4 w-4" }, null, _parent));
        _push(`</button><button${ssrIncludeBooleanAttr(selectedIndex.value === null) ? " disabled" : ""} class="p-2 text-destructive hover:bg-destructive/10 rounded-md disabled:opacity-50">`);
        _push(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4" }, null, _parent));
        _push(`</button></div></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(images.value, (image, index) => {
          _push(`<div class="relative group cursor-pointer"><div class="relative"><img${ssrRenderAttr("src", image.preview)}${ssrRenderAttr("alt", image.file.name)} class="${ssrRenderClass([[
            selectedIndex.value === index ? "border-primary ring-2 ring-primary/20" : "border-border group-hover:border-muted-foreground"
          ], "w-full h-32 object-cover rounded-lg border-2 transition-all"])}"><div class="absolute top-2 left-2 bg-background/80 backdrop-blur text-foreground text-xs px-2 py-1 rounded">${ssrInterpolate(index + 1)}</div><button class="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity">`);
          _push(ssrRenderComponent(unref(X), { class: "h-3 w-3" }, null, _parent));
          _push(`</button></div><div class="mt-2"><div class="text-xs text-muted-foreground truncate">${ssrInterpolate(image.file.name)}</div><div class="text-xs text-muted-foreground/70">${ssrInterpolate(image.width)} \xD7 ${ssrInterpolate(image.height)}</div></div></div>`);
        });
        _push(`<!--]--></div><div class="mt-4 pt-4 border-t border-border flex justify-between items-center"><div class="text-sm text-muted-foreground"> \u5171 ${ssrInterpolate(images.value.length)} \u5F20\u56FE\u7247 `);
        if (images.value.length < 2) {
          _push(`<span class="text-destructive ml-2"> \u81F3\u5C11\u9700\u8981 2 \u5F20\u56FE\u7247\u624D\u80FD\u5408\u5E76 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button class="text-sm text-primary hover:text-primary/80"> \u53CD\u8F6C\u987A\u5E8F </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Eye), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u9884\u89C8\u6548\u679C </h3><div class="bg-muted rounded-lg p-4 min-h-[400px] flex items-center justify-center">`);
      if (!mergedImage.value && images.value.length === 0) {
        _push(`<div class="text-center text-muted-foreground">`);
        _push(ssrRenderComponent(unref(Image), { class: "h-12 w-12 mx-auto mb-3" }, null, _parent));
        _push(`<p>\u4E0A\u4F20\u56FE\u7247\u540E\u5C06\u663E\u793A\u9884\u89C8</p></div>`);
      } else if (!mergedImage.value && images.value.length > 0) {
        _push(`<div class="text-center text-muted-foreground">`);
        _push(ssrRenderComponent(unref(Layers), { class: "h-12 w-12 mx-auto mb-3" }, null, _parent));
        _push(`<p>\u70B9\u51FB&quot;\u5408\u5E76\u56FE\u7247&quot;\u751F\u6210\u9884\u89C8</p></div>`);
      } else if (mergedImage.value) {
        _push(`<div class="w-full"><img${ssrRenderAttr("src", mergedImage.value)} alt="\u5408\u5E76\u9884\u89C8" class="max-w-full h-auto mx-auto rounded-lg shadow-lg"><div class="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"><div class="bg-muted rounded p-2"><div class="text-muted-foreground">\u5BBD\u5EA6</div><div class="font-semibold text-foreground">${ssrInterpolate(finalWidth.value)}px</div></div><div class="bg-muted rounded p-2"><div class="text-muted-foreground">\u9AD8\u5EA6</div><div class="font-semibold text-foreground">${ssrInterpolate(finalHeight.value)}px</div></div><div class="bg-muted rounded p-2"><div class="text-muted-foreground">\u56FE\u7247\u6570</div><div class="font-semibold text-foreground">${ssrInterpolate(images.value.length)}</div></div><div class="bg-muted rounded p-2"><div class="text-muted-foreground">\u683C\u5F0F</div><div class="font-semibold text-foreground">${ssrInterpolate(outputFormat.value.toUpperCase())}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F\u56FE\u7247\u5408\u5E76\u5DE5\u5177\uFF1F </h2><p class="text-muted-foreground mb-4"> \u56FE\u7247\u5408\u5E76\u5DE5\u5177\u662F\u4E00\u79CD\u5728\u7EBF\u670D\u52A1\uFF0C\u53EF\u4EE5\u5C06\u591A\u5F20\u56FE\u7247\u6309\u7167\u6307\u5B9A\u7684\u5E03\u5C40\u65B9\u5F0F\u5408\u5E76\u6210\u4E00\u5F20\u56FE\u7247\u3002 \u65E0\u8BBA\u662F\u6C34\u5E73\u6392\u5217\u3001\u5782\u76F4\u5806\u53E0\u8FD8\u662F\u7F51\u683C\u5E03\u5C40\uFF0C\u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u8BBE\u7F6E\u5FEB\u901F\u5B8C\u6210\u56FE\u7247\u5408\u5E76\u64CD\u4F5C\u3002 \u8FD9\u5BF9\u4E8E\u5236\u4F5C\u4EA7\u54C1\u5BF9\u6BD4\u56FE\u3001\u6559\u7A0B\u6B65\u9AA4\u56FE\u3001\u793E\u4EA4\u5A92\u4F53\u5185\u5BB9\u7B49\u573A\u666F\u975E\u5E38\u6709\u7528\u3002 </p><p class="text-muted-foreground mb-4"> \u73B0\u4EE3\u56FE\u7247\u5408\u5E76\u5DE5\u5177\u4E0D\u4EC5\u652F\u6301\u57FA\u672C\u7684\u5408\u5E76\u529F\u80FD\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u81EA\u5B9A\u4E49\u9009\u9879\uFF0C \u5982\u95F4\u8DDD\u8C03\u6574\u3001\u80CC\u666F\u989C\u8272\u3001\u5BF9\u9F50\u65B9\u5F0F\u3001\u8F93\u51FA\u5C3A\u5BF8\u548C\u683C\u5F0F\u7B49\uFF0C\u8BA9\u7528\u6237\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u7CBE\u786E\u63A7\u5236\u5408\u5E76\u6548\u679C\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u591A\u79CD\u5E03\u5C40\u65B9\u5F0F</strong>: \u652F\u6301\u6C34\u5E73\u3001\u5782\u76F4\u3001\u7F51\u683C\u4E09\u79CD\u4E3B\u6D41\u5E03\u5C40\u65B9\u5F0F</li><li><strong>\u7075\u6D3B\u95F4\u8DDD\u63A7\u5236</strong>: \u53EF\u81EA\u5B9A\u4E49\u56FE\u7247\u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u8303\u56F4\u4ECE0\u523050\u50CF\u7D20</li><li><strong>\u80CC\u666F\u989C\u8272\u8BBE\u7F6E</strong>: \u652F\u6301\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272\uFF0C\u53EF\u4F7F\u7528\u989C\u8272\u9009\u62E9\u5668\u6216\u5341\u516D\u8FDB\u5236\u503C</li><li><strong>\u5BF9\u9F50\u65B9\u5F0F\u8C03\u6574</strong>: \u63D0\u4F9B\u9876\u90E8/\u5DE6\u4FA7\u3001\u5C45\u4E2D\u3001\u5E95\u90E8/\u53F3\u4FA7\u7B49\u591A\u79CD\u5BF9\u9F50\u9009\u9879</li><li><strong>\u8F93\u51FA\u5C3A\u5BF8\u5B9A\u5236</strong>: \u652F\u6301\u81EA\u52A8\u8BA1\u7B97\u6216\u81EA\u5B9A\u4E49\u8F93\u51FA\u56FE\u7247\u7684\u5C3A\u5BF8</li><li><strong>\u591A\u79CD\u8F93\u51FA\u683C\u5F0F</strong>: \u652F\u6301PNG\u3001JPEG\u3001WebP\u7B49\u4E3B\u6D41\u56FE\u7247\u683C\u5F0F</li><li><strong>\u8D28\u91CF\u63A7\u5236</strong>: \u53EF\u8C03\u8282JPEG\u56FE\u7247\u7684\u8D28\u91CF\uFF0C\u5E73\u8861\u6587\u4EF6\u5927\u5C0F\u548C\u56FE\u50CF\u8D28\u91CF</li><li><strong>\u6279\u91CF\u64CD\u4F5C</strong>: \u652F\u6301\u56FE\u7247\u6392\u5E8F\u3001\u53CD\u8F6C\u3001\u5220\u9664\u7B49\u6279\u91CF\u7BA1\u7406\u529F\u80FD</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4F7F\u7528\u573A\u666F </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u7535\u5546\u4EA7\u54C1\u5BF9\u6BD4</strong>: \u5C06\u591A\u4E2A\u4EA7\u54C1\u7684\u56FE\u7247\u5408\u5E76\u6210\u4E00\u5F20\u5BF9\u6BD4\u56FE\uFF0C\u65B9\u4FBF\u7528\u6237\u67E5\u770B</li><li><strong>\u6559\u7A0B\u5236\u4F5C</strong>: \u5C06\u64CD\u4F5C\u6B65\u9AA4\u622A\u56FE\u5408\u5E76\u6210\u4E00\u5F20\u6D41\u7A0B\u56FE\uFF0C\u4FBF\u4E8E\u8BFB\u8005\u7406\u89E3</li><li><strong>\u793E\u4EA4\u5A92\u4F53\u5185\u5BB9</strong>: \u5236\u4F5C\u4FE1\u606F\u4E30\u5BCC\u7684\u793E\u4EA4\u5A92\u4F53\u5E16\u5B50\uFF0C\u5438\u5F15\u66F4\u591A\u5173\u6CE8</li><li><strong>\u8BBE\u8BA1\u7A3F\u5C55\u793A</strong>: \u5C06\u591A\u4E2A\u8BBE\u8BA1\u65B9\u6848\u5408\u5E76\u5C55\u793A\uFF0C\u65B9\u4FBF\u5BA2\u6237\u6BD4\u8F83\u9009\u62E9</li><li><strong>\u62A5\u544A\u63D2\u56FE</strong>: \u5728\u6280\u672F\u62A5\u544A\u6216\u5546\u4E1A\u6587\u6863\u4E2D\u63D2\u5165\u5408\u5E76\u540E\u7684\u5BF9\u6BD4\u56FE\u8868</li><li><strong>\u5E7F\u544A\u7D20\u6750</strong>: \u5236\u4F5C\u5305\u542B\u591A\u4E2A\u4EA7\u54C1\u6216\u529F\u80FD\u7684\u5E7F\u544A\u6A2A\u5E45</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u652F\u6301\u54EA\u4E9B\u56FE\u7247\u683C\u5F0F\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5DE5\u5177\u652F\u6301\u6240\u6709\u4E3B\u6D41\u7684\u56FE\u7247\u683C\u5F0F\uFF0C\u5305\u62ECJPG\u3001PNG\u3001WebP\u3001GIF\u7B49\u3002 \u4E0A\u4F20\u7684\u56FE\u7247\u4F1A\u5728\u5408\u5E76\u524D\u81EA\u52A8\u8F6C\u6362\u4E3A\u5408\u9002\u7684\u683C\u5F0F\uFF0C\u786E\u4FDD\u6700\u7EC8\u8F93\u51FA\u8D28\u91CF\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5408\u5E76\u540E\u7684\u56FE\u7247\u5206\u8FA8\u7387\u5982\u4F55\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5408\u5E76\u540E\u7684\u56FE\u7247\u5206\u8FA8\u7387\u53D6\u51B3\u4E8E\u6240\u9009\u7684\u5E03\u5C40\u65B9\u5F0F\u548C\u8F93\u51FA\u5C3A\u5BF8\u8BBE\u7F6E\u3002 \u5DE5\u5177\u4F1A\u81EA\u52A8\u8BA1\u7B97\u6700\u4F18\u5206\u8FA8\u7387\u4EE5\u4FDD\u8BC1\u56FE\u7247\u8D28\u91CF\u548C\u6587\u4EF6\u5927\u5C0F\u7684\u5E73\u8861\u3002 \u7528\u6237\u4E5F\u53EF\u4EE5\u9009\u62E9\u81EA\u5B9A\u4E49\u8F93\u51FA\u5C3A\u5BF8\u6765\u7CBE\u786E\u63A7\u5236\u6700\u7EC8\u6548\u679C\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u63D0\u9AD8\u5408\u5E76\u6548\u7387\uFF1F</h3><p class="text-muted-foreground mt-1"> \u4E3A\u4E86\u63D0\u9AD8\u5408\u5E76\u6548\u7387\uFF0C\u5EFA\u8BAE\uFF1A 1. \u4E0A\u4F20\u524D\u5C3D\u91CF\u538B\u7F29\u56FE\u7247\u6587\u4EF6\u5927\u5C0F\uFF1B 2. \u5408\u7406\u9009\u62E9\u5E03\u5C40\u65B9\u5F0F\u548C\u8F93\u51FA\u5C3A\u5BF8\uFF1B 3. \u4F7F\u7528\u6279\u91CF\u64CD\u4F5C\u529F\u80FD\u4E00\u6B21\u6027\u5904\u7406\u591A\u5F20\u56FE\u7247\uFF1B 4. \u9009\u62E9\u5408\u9002\u7684\u8F93\u51FA\u683C\u5F0F\uFF08WebP\u901A\u5E38\u6587\u4EF6\u66F4\u5C0F\uFF09\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5408\u5E76\u7684\u56FE\u7247\u4F1A\u4FDD\u5B58\u5230\u670D\u52A1\u5668\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u4E0D\u4F1A\u3002\u6240\u6709\u7684\u56FE\u7247\u5904\u7406\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u56FE\u7247\u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u4EFB\u4F55\u670D\u52A1\u5668\u3002 \u8FD9\u786E\u4FDD\u4E86\u60A8\u7684\u9690\u79C1\u5B89\u5168\uFF0C\u4E5F\u52A0\u5FEB\u4E86\u5904\u7406\u901F\u5EA6\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Layers)), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Layers)), { class: "w-5 h-5 text-primary" })),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/image-merge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=image-merge-Da_1ttq1.mjs.map
