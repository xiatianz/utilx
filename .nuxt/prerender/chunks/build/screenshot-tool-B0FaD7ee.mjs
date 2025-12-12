import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
import { Settings, MousePointer, ChevronUp, ChevronDown, Loader2, Camera, Trash2, Image, Download, Copy, Edit, History, HelpCircle } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
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
  __name: "screenshot-tool",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\u7F51\u9875\u622A\u56FE\u5DE5\u5177 - \u5728\u7EBF\u6355\u83B7\u7F51\u9875\u622A\u56FE",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBF\u7F51\u9875\u622A\u56FE\u5DE5\u5177\uFF0C\u652F\u6301\u6574\u9875\u622A\u56FE\u3001\u53EF\u89C6\u533A\u57DF\u622A\u56FE\u3001\u5143\u7D20\u622A\u56FE\u3001\u5EF6\u8FDF\u622A\u56FE\u7B49\u591A\u79CD\u6A21\u5F0F\uFF0C\u63D0\u4F9B\u7075\u6D3B\u7684\u622A\u56FE\u9009\u9879\u548C\u6279\u91CF\u4E0B\u8F7D\u529F\u80FD\u3002" },
        { name: "keywords", content: "\u7F51\u9875\u622A\u56FE,\u5728\u7EBF\u622A\u56FE,\u6574\u9875\u622A\u56FE,\u5C4F\u5E55\u622A\u56FE,\u622A\u56FE\u5DE5\u5177,\u6D4F\u89C8\u5668\u622A\u56FE" }
      ]
    });
    const tool = tools.find((t) => t.id === "screenshot-tool");
    categories.find((c) => c.id === "network");
    const isSeoContentVisible = ref(true);
    const capturing = ref(false);
    const screenshots = ref([]);
    const selectedIndex = ref(0);
    const showAdvanced = ref(false);
    const captureMode = ref("viewport");
    const delayTime = ref(3);
    const targetUrl = ref("");
    const elementSelector = ref("");
    const outputFormat = ref("png");
    const quality = ref(90);
    const includeScrollbar = ref(false);
    const captureShadow = ref(true);
    const autoSave = ref(false);
    const copyToClipboard = ref(false);
    const iconMap = {
      Settings,
      Camera,
      MousePointer,
      ChevronUp,
      ChevronDown,
      Loader2,
      Image,
      Download,
      Copy,
      Edit,
      History,
      Trash2,
      HelpCircle
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "screenshot-tool"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "user-agent-parser"),
        tools.find((t) => t.id === "mime-types"),
        tools.find((t) => t.id === "http-client"),
        tools.find((t) => t.id === "dns-lookup")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const currentScreenshot = computed(() => {
      return screenshots.value[0] || null;
    });
    const getCaptureButtonText = () => {
      switch (captureMode.value) {
        case "viewport":
          return "\u622A\u56FE\u5F53\u524D\u9875\u9762";
        case "fullpage":
          return "\u622A\u56FE\u6574\u9875";
        case "element":
          return "\u622A\u56FE\u9009\u4E2D\u5143\u7D20";
        case "delay":
          return `${delayTime.value}\u79D2\u540E\u622A\u56FE`;
        default:
          return "\u5F00\u59CB\u622A\u56FE";
      }
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">\u7F51\u9875\u622A\u56FE\u5DE5\u5177 - \u5728\u7EBF\u6355\u83B7\u7F51\u9875\u622A\u56FE</h1><p class="text-muted-foreground">\u4E13\u4E1A\u7684\u5728\u7EBF\u7F51\u9875\u622A\u56FE\u5DE5\u5177\uFF0C\u652F\u6301\u6574\u9875\u622A\u56FE\u3001\u53EF\u89C6\u533A\u57DF\u622A\u56FE\u3001\u5143\u7D20\u622A\u56FE\u3001\u5EF6\u8FDF\u622A\u56FE\u7B49\u591A\u79CD\u6A21\u5F0F\uFF0C\u63D0\u4F9B\u7075\u6D3B\u7684\u622A\u56FE\u9009\u9879\u548C\u6279\u91CF\u4E0B\u8F7D\u529F\u80FD\u3002\u5E2E\u52A9\u5F00\u53D1\u8005\u548C\u8BBE\u8BA1\u5E08\u5FEB\u901F\u6355\u83B7\u7F51\u9875\u5185\u5BB9\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u622A\u56FE\u8BBE\u7F6E </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u622A\u56FE\u6A21\u5F0F</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="viewport"${ssrIncludeBooleanAttr(Array.isArray(captureMode.value) ? ssrLooseContain(captureMode.value, "viewport") : ssrLooseEqual(captureMode.value, "viewport")) ? " selected" : ""}>\u53EF\u89C6\u533A\u57DF</option><option value="fullpage"${ssrIncludeBooleanAttr(Array.isArray(captureMode.value) ? ssrLooseContain(captureMode.value, "fullpage") : ssrLooseEqual(captureMode.value, "fullpage")) ? " selected" : ""}>\u6574\u9875\u622A\u56FE</option><option value="element"${ssrIncludeBooleanAttr(Array.isArray(captureMode.value) ? ssrLooseContain(captureMode.value, "element") : ssrLooseEqual(captureMode.value, "element")) ? " selected" : ""}>\u5143\u7D20\u622A\u56FE</option><option value="delay"${ssrIncludeBooleanAttr(Array.isArray(captureMode.value) ? ssrLooseContain(captureMode.value, "delay") : ssrLooseEqual(captureMode.value, "delay")) ? " selected" : ""}>\u5EF6\u8FDF\u622A\u56FE</option></select></div>`);
      if (captureMode.value === "delay") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2"> \u5EF6\u8FDF\u65F6\u95F4: ${ssrInterpolate(delayTime.value)}\u79D2 </label><input${ssrRenderAttr("value", delayTime.value)} type="range" min="1" max="10" class="w-full"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (captureMode.value === "fullpage") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2">\u76EE\u6807\u7F51\u5740</label><input${ssrRenderAttr("value", targetUrl.value)} type="url" placeholder="https://example.com" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><p class="mt-1 text-xs text-muted-foreground"> \u6CE8\uFF1A\u7531\u4E8E\u6D4F\u89C8\u5668\u5B89\u5168\u9650\u5236\uFF0C\u6B64\u529F\u80FD\u9700\u8981\u4F7F\u7528\u540E\u7AEFAPI\u6216\u6D4F\u89C8\u5668\u6269\u5C55 </p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (captureMode.value === "element") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2">\u5143\u7D20\u9009\u62E9\u5668</label><div class="space-y-2"><input${ssrRenderAttr("value", elementSelector.value)} type="text" placeholder="#element-id \u6216 .class-name" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><button class="w-full px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm">`);
        _push(ssrRenderComponent(unref(MousePointer), { class: "h-4 w-4 inline mr-1" }, null, _parent));
        _push(` \u70B9\u51FB\u9009\u62E9\u5143\u7D20 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="block text-sm font-medium text-foreground mb-2">\u8F93\u51FA\u683C\u5F0F</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="png"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "png") : ssrLooseEqual(outputFormat.value, "png")) ? " selected" : ""}>PNG</option><option value="jpeg"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "jpeg") : ssrLooseEqual(outputFormat.value, "jpeg")) ? " selected" : ""}>JPEG</option><option value="webp"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "webp") : ssrLooseEqual(outputFormat.value, "webp")) ? " selected" : ""}>WebP</option></select></div>`);
      if (outputFormat.value === "jpeg") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2"> \u56FE\u7247\u8D28\u91CF: ${ssrInterpolate(quality.value)}% </label><input${ssrRenderAttr("value", quality.value)} type="range" min="10" max="100" step="5" class="w-full"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><button class="w-full text-left px-3 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors text-sm flex items-center justify-between"><span>\u9AD8\u7EA7\u9009\u9879</span>`);
      if (showAdvanced.value) {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "h-4 w-4" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronDown), { class: "h-4 w-4" }, null, _parent));
      }
      _push(`</button>`);
      if (showAdvanced.value) {
        _push(`<div class="mt-3 space-y-3"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(includeScrollbar.value) ? ssrLooseContain(includeScrollbar.value, null) : includeScrollbar.value) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">\u5305\u542B\u6EDA\u52A8\u6761</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(captureShadow.value) ? ssrLooseContain(captureShadow.value, null) : captureShadow.value) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">\u6355\u83B7\u5143\u7D20\u9634\u5F71</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(autoSave.value) ? ssrLooseContain(autoSave.value, null) : autoSave.value) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">\u81EA\u52A8\u4FDD\u5B58\u622A\u56FE</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(copyToClipboard.value) ? ssrLooseContain(copyToClipboard.value, null) : copyToClipboard.value) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">\u590D\u5236\u5230\u526A\u8D34\u677F</span></label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="bg-card border border-border rounded-lg p-6"><button${ssrIncludeBooleanAttr(capturing.value || captureMode.value === "fullpage" && !targetUrl.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (capturing.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Camera), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(capturing.value ? "\u622A\u56FE\u4E2D..." : getCaptureButtonText())}</button>`);
      if (screenshots.value.length > 0) {
        _push(`<button class="w-full mt-3 bg-muted text-foreground py-3 px-4 rounded-md hover:bg-muted/80 transition-colors flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(Trash2), { class: "h-5 w-5 mr-2" }, null, _parent));
        _push(` \u6E05\u9664\u6240\u6709\u622A\u56FE </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-muted rounded-lg p-4"><h3 class="text-sm font-semibold text-foreground mb-2">\u5FEB\u6377\u952E</h3><div class="space-y-1 text-xs text-muted-foreground"><div class="flex justify-between"><span>\u5FEB\u901F\u622A\u56FE</span><kbd class="px-2 py-1 bg-background rounded">Ctrl + Shift + S</kbd></div><div class="flex justify-between"><span>\u6574\u9875\u622A\u56FE</span><kbd class="px-2 py-1 bg-background rounded">Ctrl + Shift + P</kbd></div><div class="flex justify-between"><span>\u5143\u7D20\u622A\u56FE</span><kbd class="px-2 py-1 bg-background rounded">Ctrl + Shift + E</kbd></div></div></div></div><div class="lg:col-span-2 space-y-6">`);
      if (currentScreenshot.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Image), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u6700\u65B0\u622A\u56FE </h3><div class="flex space-x-2"><button class="px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm flex items-center">`);
        _push(ssrRenderComponent(unref(Download), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` \u4E0B\u8F7D </button><button class="px-3 py-1 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors text-sm flex items-center">`);
        _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` \u590D\u5236 </button><button class="px-3 py-1 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors text-sm flex items-center">`);
        _push(ssrRenderComponent(unref(Edit), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` \u7F16\u8F91 </button></div></div><div class="relative bg-muted rounded-lg overflow-hidden"><img${ssrRenderAttr("src", currentScreenshot.value.data)}${ssrRenderAttr("alt", currentScreenshot.value.name)} class="w-full h-auto"><div class="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur text-foreground p-3"><div class="flex justify-between text-sm"><span>${ssrInterpolate(currentScreenshot.value.name)}</span><span>${ssrInterpolate(currentScreenshot.value.width)} \xD7 ${ssrInterpolate(currentScreenshot.value.height)}</span></div><div class="text-xs text-muted-foreground mt-1">${ssrInterpolate(new Date(currentScreenshot.value.timestamp).toLocaleString())}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (screenshots.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center justify-between text-foreground"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u622A\u56FE\u5386\u53F2 (${ssrInterpolate(screenshots.value.length)}) </span><button class="text-sm text-primary hover:text-primary/80"> \u4E0B\u8F7D\u5168\u90E8 </button></h3><div class="grid grid-cols-2 sm:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(screenshots.value, (screenshot, index) => {
          _push(`<div class="relative group cursor-pointer"><div class="relative"><img${ssrRenderAttr("src", screenshot.data)}${ssrRenderAttr("alt", screenshot.name)} class="${ssrRenderClass([[
            selectedIndex.value === index ? "border-primary ring-2 ring-primary/20" : "border-border group-hover:border-muted-foreground"
          ], "w-full h-32 object-cover rounded-lg border-2 transition-all"])}"><div class="absolute inset-0 bg-background/80 backdrop-blur rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2"><button class="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90">`);
          _push(ssrRenderComponent(unref(Download), { class: "h-4 w-4" }, null, _parent));
          _push(`</button><button class="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90">`);
          _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4" }, null, _parent));
          _push(`</button><button class="p-2 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90">`);
          _push(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4" }, null, _parent));
          _push(`</button></div></div><div class="mt-2"><div class="text-xs text-muted-foreground truncate">${ssrInterpolate(screenshot.name)}</div><div class="text-xs text-muted-foreground/70">${ssrInterpolate(screenshot.width)} \xD7 ${ssrInterpolate(screenshot.height)}</div></div></div>`);
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
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F\u7F51\u9875\u622A\u56FE\u5DE5\u5177\uFF1F </h2><p class="text-muted-foreground mb-4"> \u7F51\u9875\u622A\u56FE\u5DE5\u5177\u662F\u4E00\u79CD\u5728\u7EBF\u670D\u52A1\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u7528\u6237\u6355\u83B7\u7F51\u9875\u7684\u89C6\u89C9\u5FEB\u7167\u3002\u65E0\u8BBA\u662F\u6574\u4E2A\u9875\u9762\u3001\u5F53\u524D\u53EF\u89C1\u533A\u57DF\u8FD8\u662F\u7279\u5B9A\u5143\u7D20\uFF0C \u90FD\u53EF\u4EE5\u901A\u8FC7\u6D4F\u89C8\u5668\u7684\u5C4F\u5E55\u6355\u83B7\u529F\u80FD\u5FEB\u901F\u751F\u6210\u9AD8\u8D28\u91CF\u7684\u56FE\u7247\u3002\u8FD9\u5BF9\u4E8E\u5F00\u53D1\u8005\u8C03\u8BD5\u3001\u8BBE\u8BA1\u5E08\u53C2\u8003\u3001\u5185\u5BB9\u5206\u4EAB\u7B49\u573A\u666F\u975E\u5E38\u6709\u7528\u3002 </p><p class="text-muted-foreground mb-4"> \u73B0\u4EE3\u7F51\u9875\u622A\u56FE\u5DE5\u5177\u4E0D\u4EC5\u652F\u6301\u57FA\u672C\u7684\u622A\u56FE\u529F\u80FD\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u9009\u9879\u6765\u81EA\u5B9A\u4E49\u8F93\u51FA\u6548\u679C\uFF0C\u5982\u56FE\u7247\u683C\u5F0F\u3001\u8D28\u91CF\u3001\u5EF6\u8FDF\u622A\u56FE\u7B49\u3002 \u4E00\u4E9B\u9AD8\u7EA7\u5DE5\u5177\u751A\u81F3\u652F\u6301\u6EDA\u52A8\u622A\u56FE\uFF0C\u53EF\u4EE5\u6355\u83B7\u8D85\u51FA\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5B8C\u6574\u9875\u9762\u5185\u5BB9\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u591A\u79CD\u622A\u56FE\u6A21\u5F0F</strong>: \u652F\u6301\u53EF\u89C6\u533A\u57DF\u3001\u6574\u9875\u622A\u56FE\u3001\u5143\u7D20\u622A\u56FE\u548C\u5EF6\u8FDF\u622A\u56FE\u56DB\u79CD\u6A21\u5F0F</li><li><strong>\u7075\u6D3B\u8F93\u51FA\u683C\u5F0F</strong>: \u652F\u6301 PNG\u3001JPEG\u3001WebP \u7B49\u4E3B\u6D41\u56FE\u7247\u683C\u5F0F</li><li><strong>\u8D28\u91CF\u63A7\u5236</strong>: \u53EF\u8C03\u8282 JPEG \u56FE\u7247\u7684\u8D28\u91CF\uFF0C\u5E73\u8861\u6587\u4EF6\u5927\u5C0F\u548C\u56FE\u50CF\u8D28\u91CF</li><li><strong>\u9AD8\u7EA7\u9009\u9879</strong>: \u5305\u542B\u6EDA\u52A8\u6761\u3001\u9634\u5F71\u3001\u81EA\u52A8\u4FDD\u5B58\u7B49\u9AD8\u7EA7\u622A\u56FE\u9009\u9879</li><li><strong>\u5FEB\u6377\u952E\u652F\u6301</strong>: \u63D0\u4F9B\u5FEB\u6377\u952E\u5FEB\u901F\u6267\u884C\u5E38\u7528\u622A\u56FE\u64CD\u4F5C</li><li><strong>\u6279\u91CF\u7BA1\u7406</strong>: \u652F\u6301\u622A\u56FE\u5386\u53F2\u7BA1\u7406\u548C\u6279\u91CF\u4E0B\u8F7D</li><li><strong>\u526A\u8D34\u677F\u96C6\u6210</strong>: \u53EF\u76F4\u63A5\u5C06\u622A\u56FE\u590D\u5236\u5230\u526A\u8D34\u677F\uFF0C\u65B9\u4FBF\u7C98\u8D34\u4F7F\u7528</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4F7F\u7528\u573A\u666F </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u5F00\u53D1\u8005\u8C03\u8BD5</strong>: \u5FEB\u901F\u6355\u83B7\u9875\u9762\u72B6\u6001\uFF0C\u7528\u4E8E bug \u62A5\u544A\u548C\u95EE\u9898\u8BCA\u65AD</li><li><strong>\u8BBE\u8BA1\u5E08\u53C2\u8003</strong>: \u4FDD\u5B58\u7F51\u9875\u8BBE\u8BA1\u7075\u611F\u6216\u7ADE\u54C1\u5206\u6790\u7D20\u6750</li><li><strong>\u5185\u5BB9\u5206\u4EAB</strong>: \u5C06\u7F51\u9875\u5185\u5BB9\u4EE5\u56FE\u7247\u5F62\u5F0F\u5206\u4EAB\u5230\u793E\u4EA4\u5A92\u4F53</li><li><strong>\u6587\u6863\u5236\u4F5C</strong>: \u5728\u6280\u672F\u6587\u6863\u6216\u6F14\u793A\u6587\u7A3F\u4E2D\u63D2\u5165\u7F51\u9875\u622A\u56FE</li><li><strong>\u6559\u5B66\u57F9\u8BAD</strong>: \u5236\u4F5C\u6559\u7A0B\u65F6\u5C55\u793A\u7F51\u9875\u64CD\u4F5C\u6B65\u9AA4</li><li><strong>\u5E02\u573A\u8C03\u7814</strong>: \u4FDD\u5B58\u7ADE\u4E89\u5BF9\u624B\u7684\u7F51\u9875\u8BBE\u8BA1\u548C\u5E03\u5C40</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u67D0\u4E9B\u622A\u56FE\u529F\u80FD\u9700\u8981\u6D4F\u89C8\u5668\u6743\u9650\uFF1F</h3><p class="text-muted-foreground mt-1"> \u6D4F\u89C8\u5668\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u7F51\u9875\u968F\u610F\u8BBF\u95EE\u5C4F\u5E55\u5185\u5BB9\u3002\u622A\u56FE\u529F\u80FD\u9700\u8981\u8C03\u7528\u6D4F\u89C8\u5668\u7684\u5C4F\u5E55\u6355\u83B7API\uFF0C \u56E0\u6B64\u9996\u6B21\u4F7F\u7528\u65F6\u4F1A\u5F39\u51FA\u6743\u9650\u8BF7\u6C42\u5BF9\u8BDD\u6846\u3002\u7528\u6237\u9700\u8981\u660E\u786E\u6388\u6743\u624D\u80FD\u8FDB\u884C\u5C4F\u5E55\u622A\u56FE\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u6574\u9875\u622A\u56FE\u548C\u53EF\u89C6\u533A\u57DF\u622A\u56FE\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h3><p class="text-muted-foreground mt-1"> \u53EF\u89C6\u533A\u57DF\u622A\u56FE\u53EA\u6355\u83B7\u5F53\u524D\u6D4F\u89C8\u5668\u7A97\u53E3\u5185\u53EF\u89C1\u7684\u90E8\u5206\uFF0C\u800C\u6574\u9875\u622A\u56FE\u5219\u5C1D\u8BD5\u6355\u83B7\u6574\u4E2A\u7F51\u9875\u5185\u5BB9\uFF0C \u5305\u62EC\u9700\u8981\u6EDA\u52A8\u624D\u80FD\u770B\u5230\u7684\u90E8\u5206\u3002\u4E0D\u8FC7\u7531\u4E8E\u6D4F\u89C8\u5668\u5B89\u5168\u9650\u5236\uFF0C\u7EAF\u524D\u7AEF\u5B9E\u73B0\u7684\u6574\u9875\u622A\u56FE\u6709\u4E00\u5B9A\u5C40\u9650\u6027\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u63D0\u9AD8\u622A\u56FE\u8D28\u91CF\uFF1F</h3><p class="text-muted-foreground mt-1"> \u9009\u62E9 PNG \u683C\u5F0F\u53EF\u4EE5\u83B7\u5F97\u65E0\u635F\u8D28\u91CF\u7684\u622A\u56FE\uFF0C\u4F46\u6587\u4EF6\u8F83\u5927\u3002\u5982\u679C\u5BF9\u6587\u4EF6\u5927\u5C0F\u6709\u8981\u6C42\uFF0C \u53EF\u4EE5\u9009\u62E9 JPEG \u683C\u5F0F\u5E76\u8C03\u6574\u8D28\u91CF\u53C2\u6570\u3002\u5BF9\u4E8E\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0CWebP \u683C\u5F0F\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u6298\u4E2D\u9009\u62E9\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u622A\u56FE\u5DE5\u5177\u6709\u54EA\u4E9B\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u8981\u6C42\uFF1F</h3><p class="text-muted-foreground mt-1"> \u622A\u56FE\u5DE5\u5177\u9700\u8981\u6D4F\u89C8\u5668\u652F\u6301 Screen Capture API\uFF0C\u4E3B\u6D41\u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08Chrome 72+\u3001Firefox 66+\u3001Edge 79+\uFF09 \u90FD\u652F\u6301\u6B64\u529F\u80FD\u3002IE \u548C\u4E00\u4E9B\u8001\u65E7\u6D4F\u89C8\u5668\u53EF\u80FD\u4E0D\u652F\u6301\u6216\u652F\u6301\u6709\u9650\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Camera)), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Camera)), { class: "w-5 h-5 text-primary" })),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/screenshot-tool.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=screenshot-tool-B0FaD7ee.mjs.map
