import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { Download, Package, Monitor } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { u as useSEO } from './useSEO-DTxZRwJC.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs';
import './server.mjs';
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
  __name: "download",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("\u4E0B\u8F7D Util.cn \u684C\u9762\u7248");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto py-8" }, _attrs))}><div class="text-center mb-12"><h1 class="text-3xl font-bold text-foreground mb-4">\u4E0B\u8F7D Util.cn \u684C\u9762\u7248</h1><p class="text-muted-foreground">\u4EAB\u53D7\u79BB\u7EBF\u4F7F\u7528\u548C\u66F4\u591A\u9AD8\u7EA7\u529F\u80FD</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"><div class="bg-card border border-border rounded-xl p-6"><div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-blue-500"><path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M4 18.5V22h3.5"></path><path d="M14 13.5V16h2.5"></path><path d="M16 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path><path d="M8 13.5V16h2.5"></path><path d="M10 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg></div><div><h2 class="text-xl font-semibold">Windows \u7248\u672C</h2><p class="text-sm text-muted-foreground">\u9002\u7528\u4E8E Windows 10/11</p></div></div><div class="space-y-3"><a href="#" class="flex items-center justify-between p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors"><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(unref(Download), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(`<span>Windows Installer (.exe)</span></div><span class="text-sm text-muted-foreground">64-bit</span></a><a href="#" class="flex items-center justify-between p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors"><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(unref(Package), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(`<span>Portable Version (.zip)</span></div><span class="text-sm text-muted-foreground">64-bit</span></a></div><div class="mt-6 pt-4 border-t border-border"><div class="flex items-center justify-between text-sm"><span class="text-muted-foreground">\u7248\u672C:</span><span>v1.0.0</span></div><div class="flex items-center justify-between text-sm mt-2"><span class="text-muted-foreground">\u5927\u5C0F:</span><span>85 MB</span></div><div class="flex items-center justify-between text-sm mt-2"><span class="text-muted-foreground">\u66F4\u65B0\u65F6\u95F4:</span><span>2024-01-15</span></div></div></div><div class="bg-card border border-border rounded-xl p-6"><div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gray-500/10 rounded-lg flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-gray-500"><path d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"></path><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path><path d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"></path><path d="M10 12a2 2 0 1 1-4 0c0-1.1.9-2 2-2s2 .9 2 2z"></path></svg></div><div><h2 class="text-xl font-semibold">macOS \u7248\u672C</h2><p class="text-sm text-muted-foreground">\u9002\u7528\u4E8E macOS 10.15 \u53CA\u4EE5\u4E0A</p></div></div><div class="space-y-3"><a href="#" class="flex items-center justify-between p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors"><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(unref(Download), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(`<span>Intel Chip (.dmg)</span></div><span class="text-sm text-muted-foreground">x64</span></a><a href="#" class="flex items-center justify-between p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors"><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(unref(Download), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(`<span>Apple Silicon (.dmg)</span></div><span class="text-sm text-muted-foreground">ARM64</span></a></div><div class="mt-6 pt-4 border-t border-border"><div class="flex items-center justify-between text-sm"><span class="text-muted-foreground">\u7248\u672C:</span><span>v1.0.0</span></div><div class="flex items-center justify-between text-sm mt-2"><span class="text-muted-foreground">\u5927\u5C0F:</span><span>Intel: 78 MB / Apple Silicon: 75 MB</span></div><div class="flex items-center justify-between text-sm mt-2"><span class="text-muted-foreground">\u66F4\u65B0\u65F6\u95F4:</span><span>2024-01-15</span></div></div></div></div><div class="bg-card border border-border rounded-xl p-6"><h2 class="text-xl font-semibold mb-4">\u7CFB\u7EDF\u8981\u6C42</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-medium mb-2 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Monitor), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` Windows </h3><ul class="text-sm text-muted-foreground space-y-1"><li>\u2022 Windows 10 \u6216\u66F4\u9AD8\u7248\u672C</li><li>\u2022 \u81F3\u5C11 2GB RAM</li><li>\u2022 \u81F3\u5C11 100MB \u53EF\u7528\u78C1\u76D8\u7A7A\u95F4</li><li>\u2022 \u652F\u6301 SSE2 \u6307\u4EE4\u96C6</li></ul></div><div><h3 class="font-medium mb-2 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Monitor), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` macOS </h3><ul class="text-sm text-muted-foreground space-y-1"><li>\u2022 macOS 10.15 (Catalina) \u6216\u66F4\u9AD8\u7248\u672C</li><li>\u2022 \u81F3\u5C11 2GB RAM</li><li>\u2022 \u81F3\u5C11 100MB \u53EF\u7528\u78C1\u76D8\u7A7A\u95F4</li><li>\u2022 Intel \u6216 Apple Silicon \u5904\u7406\u5668</li></ul></div></div></div><div class="mt-8 text-center text-sm text-muted-foreground"><p>\u4E0B\u8F7D\u5373\u8868\u793A\u60A8\u540C\u610F\u6211\u4EEC\u7684 `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "text-primary hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u670D\u52A1\u6761\u6B3E`);
          } else {
            return [
              createTextVNode("\u670D\u52A1\u6761\u6B3E")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` \u548C `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "text-primary hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u9690\u79C1\u653F\u7B56`);
          } else {
            return [
              createTextVNode("\u9690\u79C1\u653F\u7B56")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/download.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=download-DrEj8tuy.mjs.map
