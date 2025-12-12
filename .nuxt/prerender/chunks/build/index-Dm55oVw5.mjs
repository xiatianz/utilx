import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, createCommentVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderClass } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';
import { Search, X, Clock, Trash2, Lock, Zap, Heart, Layout, GitBranch, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, Code, Image, Wifi, Type, Shield, FileJson, FileText } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { c as categories } from './categories-guMUDMNS.mjs';
import { t as tools } from './tools-CG9LGULA.mjs';
import { i as initToolsData, g as getRecentTools, e as addRecentTool } from './server.mjs';
import { u as useSEO } from './useSEO-DTxZRwJC.mjs';
import { g as getCategoryColor } from './categoryColors-w89ks1yN.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("Util.cn - \u5F00\u53D1\u8005\u6548\u7387\u5DE5\u5177\u7BB1");
    useRouter();
    initToolsData();
    const searchQuery = ref("");
    const clipboardSuggestion = ref(null);
    const iconMap = {
      FileText,
      FileJson,
      Lock,
      Shield,
      Clock,
      Type,
      Wifi,
      Image,
      Code,
      Database,
      Link,
      Hash,
      Timer,
      Regex,
      FileDiff,
      Globe,
      FolderOpen,
      GitBranch,
      Layout
    };
    const popularTags = ref([
      "JSON\u683C\u5F0F\u5316",
      "\u65F6\u95F4\u6233\u8F6C\u6362",
      "Base64\u7F16\u7801",
      "Cron\u751F\u6210\u5668",
      "JWT\u89E3\u7801",
      "URL\u7F16\u7801"
    ]);
    const recommendedTools = computed(() => {
      return tools.filter((tool) => tool.hot).slice(0, 6);
    });
    const recentTools = computed(() => {
      return getRecentTools().map((id) => tools.find((tool) => tool.id === id)).filter(Boolean).slice(0, 6);
    });
    const categoriesWithTools = computed(() => {
      return categories.map((category) => ({
        ...category,
        tools: tools.filter((tool) => tool.category === category.id)
      }));
    });
    ref(null);
    const getIconComponent = (iconName) => {
      const defaultIcon = iconMap["FileText"] || iconMap["FileJson"];
      return iconMap[iconName] || defaultIcon;
    };
    const getCategoryColor$1 = getCategoryColor;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto py-8" }, _attrs))} data-v-299db09f><div class="relative text-center mb-8 mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" data-v-299db09f><div class="absolute inset-0 -z-10" data-v-299db09f><div class="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/20 rounded-full filter blur-2xl animate-breathe" data-v-299db09f></div><div class="absolute bottom-1/4 right-1/3 w-72 h-72 bg-secondary/15 rounded-full filter blur-2xl animate-breathe delay-2000" data-v-299db09f></div><div class="absolute top-1/2 left-1/2 w-56 h-56 bg-accent/10 rounded-full filter blur-2xl animate-breathe delay-4000" data-v-299db09f></div><div class="absolute top-1/6 left-1/4 w-32 h-32 bg-primary/15 rounded-full filter blur-xl animate-pulse-slow" data-v-299db09f></div><div class="absolute bottom-1/6 right-1/4 w-40 h-40 bg-secondary/10 rounded-full filter blur-xl animate-pulse-slow delay-1000" data-v-299db09f></div><div class="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30" data-v-299db09f></div></div><div class="relative z-10 px-6 py-8 lg:px-8 lg:py-12" data-v-299db09f><h1 class="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent" data-v-299db09f> \u4E0D\u4EC5\u662F\u5DE5\u5177\uFF0C\u66F4\u662F\u521B\u9020\u529B\u7684\u5EF6\u4F38 </h1><p class="text-lg text-muted-foreground mb-6" data-v-299db09f>\u6781\u7B80\u3001\u9AD8\u6548\u3001\u5168\u80FD\u3002\u4E3A\u6781\u5BA2\u3001\u8BBE\u8BA1\u5E08\u548C\u6240\u6709\u63A2\u7D22\u8005\u6253\u9020\u3002</p><div class="relative max-w-2xl mx-auto mb-6" data-v-299db09f><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10" data-v-299db09f>`);
      _push(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-muted-foreground" }, null, _parent));
      _push(`</div><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="block w-full rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm pl-11 pr-24 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-background/95 transition-all placeholder:text-muted-foreground/60" placeholder="\u641C\u7D22\u4F60\u9700\u8981\u7684\u5DE5\u5177\uFF0C\u5982 &#39;JSON&#39;, &#39;MD5&#39;, &#39;\u6B63\u5219&#39;  - Extend Your Creativity" data-v-299db09f><div class="absolute inset-y-0 right-0 pr-3 flex items-center" data-v-299db09f><span class="text-xs text-muted-foreground/60 font-mono bg-background/80 backdrop-blur-sm border border-border/40 px-2 py-1.5 rounded-lg shadow-sm hidden sm:inline-flex items-center gap-1" data-v-299db09f><kbd class="text-[11px] font-semibold bg-muted/50 px-1.5 py-0.5 rounded border border-border/30" data-v-299db09f>\u2318</kbd><kbd class="text-[11px] font-semibold bg-muted/50 px-1.5 py-0.5 rounded border border-border/30" data-v-299db09f>K</kbd></span></div></div>`);
      if (clipboardSuggestion.value) {
        _push(`<div class="max-w-2xl mx-auto mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-between" data-v-299db09f><div class="text-sm" data-v-299db09f><span class="text-primary" data-v-299db09f>\u68C0\u6D4B\u5230\u526A\u8D34\u677F\u5305\u542B ${ssrInterpolate(clipboardSuggestion.value.type)} \u6570\u636E\uFF0C</span><button class="text-primary font-medium underline ml-1" data-v-299db09f> \u662F\u5426\u6253\u5F00 ${ssrInterpolate(clipboardSuggestion.value.toolName)}\uFF1F </button></div><button class="text-muted-foreground hover:text-foreground" data-v-299db09f>`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-wrap justify-center gap-2" data-v-299db09f><span class="text-xs text-muted-foreground" data-v-299db09f>\u70ED\u95E8\u641C\u7D22\uFF1A</span><!--[-->`);
      ssrRenderList(popularTags.value, (tag) => {
        _push(`<button class="text-xs px-3 py-1 rounded-full bg-muted/30 hover:bg-primary/15 hover:text-primary hover:border-primary/40 hover:scale-105 transition-all duration-200 border border-border/50 shadow-sm hover:shadow-md" data-v-299db09f>${ssrInterpolate(tag)}</button>`);
      });
      _push(`<!--]--></div></div></div><section class="mb-16" data-v-299db09f><div class="flex items-center justify-between mb-6" data-v-299db09f><h2 class="text-2xl font-bold flex items-center gap-2" data-v-299db09f>`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` \u6700\u8FD1\u4F7F\u7528 </h2>`);
      if (recentTools.value.length > 0) {
        _push(`<button class="text-sm text-muted-foreground hover:text-primary flex items-center gap-1" data-v-299db09f>`);
        _push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent));
        _push(` \u6E05\u7A7A\u8BB0\u5F55 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (recentTools.value.length > 0) {
        _push(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" data-v-299db09f><!--[-->`);
        ssrRenderList(recentTools.value, (tool) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: tool.id,
            to: `/tools/${tool.id}/`,
            class: "group relative block",
            onClick: ($event) => unref(addRecentTool)(tool.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="bg-card/30 backdrop-blur-sm border-0 rounded-xl p-4 hover:bg-card/60 hover:shadow-sm hover:shadow-primary/5 transition-all duration-200 cursor-pointer group h-full" data-v-299db09f${_scopeId}><div class="flex flex-col items-center text-center h-full" data-v-299db09f${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getIconComponent(tool.icon)), {
                  class: "w-8 h-8 mb-2 transition-transform group-hover:scale-110",
                  style: { color: unref(getCategoryColor$1)(tool.category).icon }
                }, null), _parent2, _scopeId);
                _push2(`<span class="text-sm font-medium truncate w-full" data-v-299db09f${_scopeId}>${ssrInterpolate(tool.name)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "bg-card/30 backdrop-blur-sm border-0 rounded-xl p-4 hover:bg-card/60 hover:shadow-sm hover:shadow-primary/5 transition-all duration-200 cursor-pointer group h-full" }, [
                    createVNode("div", { class: "flex flex-col items-center text-center h-full" }, [
                      (openBlock(), createBlock(resolveDynamicComponent(getIconComponent(tool.icon)), {
                        class: "w-8 h-8 mb-2 transition-transform group-hover:scale-110",
                        style: { color: unref(getCategoryColor$1)(tool.category).icon }
                      }, null, 8, ["style"])),
                      createVNode("span", { class: "text-sm font-medium truncate w-full" }, toDisplayString(tool.name), 1)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" data-v-299db09f><!--[-->`);
        ssrRenderList(recommendedTools.value, (tool) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: tool.id,
            to: `/tools/${tool.id}/`,
            class: "group relative block",
            onClick: ($event) => unref(addRecentTool)(tool.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="bg-card/30 backdrop-blur-sm border-0 rounded-xl p-4 hover:bg-card/60 hover:shadow-sm hover:shadow-primary/5 transition-all duration-200 cursor-pointer group h-full" data-v-299db09f${_scopeId}><div class="flex flex-col items-center text-center h-full" data-v-299db09f${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getIconComponent(tool.icon)), {
                  class: "w-8 h-8 mb-2 transition-transform group-hover:scale-110",
                  style: { color: unref(getCategoryColor$1)(tool.category).icon }
                }, null), _parent2, _scopeId);
                _push2(`<span class="text-sm font-medium truncate w-full" data-v-299db09f${_scopeId}>${ssrInterpolate(tool.name)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "bg-card/30 backdrop-blur-sm border-0 rounded-xl p-4 hover:bg-card/60 hover:shadow-sm hover:shadow-primary/5 transition-all duration-200 cursor-pointer group h-full" }, [
                    createVNode("div", { class: "flex flex-col items-center text-center h-full" }, [
                      (openBlock(), createBlock(resolveDynamicComponent(getIconComponent(tool.icon)), {
                        class: "w-8 h-8 mb-2 transition-transform group-hover:scale-110",
                        style: { color: unref(getCategoryColor$1)(tool.category).icon }
                      }, null, 8, ["style"])),
                      createVNode("span", { class: "text-sm font-medium truncate w-full" }, toDisplayString(tool.name), 1)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section><section class="mb-16" data-v-299db09f><!--[-->`);
      ssrRenderList(categoriesWithTools.value, (category) => {
        _push(`<div class="mb-12 scroll-mt-24"${ssrRenderAttr("id", `category-${category.id}`)} data-v-299db09f><h2 class="text-2xl font-bold mb-6 flex items-center gap-2" data-v-299db09f>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getIconComponent(category.icon)), {
          class: "w-6 h-6",
          style: { color: unref(getCategoryColor$1)(category.id).icon }
        }, null), _parent);
        _push(` ${ssrInterpolate(category.name)}</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-299db09f><!--[-->`);
        ssrRenderList(category.tools.slice(0, 6), (tool) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: tool.id,
            to: `/tools/${tool.id}/`,
            class: "group relative block",
            onClick: ($event) => unref(addRecentTool)(tool.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="bg-card/40 backdrop-blur-sm border-0 rounded-xl p-5 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/8 transition-all duration-200 cursor-pointer group h-full" data-v-299db09f${_scopeId}><div class="flex justify-between items-start mb-3" data-v-299db09f${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getIconComponent(tool.icon)), {
                  class: "w-8 h-8 group-hover:scale-110 transition-transform",
                  style: { color: unref(getCategoryColor$1)(tool.category).icon }
                }, null), _parent2, _scopeId);
                if (tool.hot || tool.new) {
                  _push2(`<span class="${ssrRenderClass([
                    "text-xs px-2 py-1 rounded-full",
                    tool.hot ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                  ])}" data-v-299db09f${_scopeId}>${ssrInterpolate(tool.hot ? "HOT" : "NEW")}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><h3 class="font-semibold mb-2" data-v-299db09f${_scopeId}>${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground" data-v-299db09f${_scopeId}>${ssrInterpolate(tool.description)}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "bg-card/40 backdrop-blur-sm border-0 rounded-xl p-5 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/8 transition-all duration-200 cursor-pointer group h-full" }, [
                    createVNode("div", { class: "flex justify-between items-start mb-3" }, [
                      (openBlock(), createBlock(resolveDynamicComponent(getIconComponent(tool.icon)), {
                        class: "w-8 h-8 group-hover:scale-110 transition-transform",
                        style: { color: unref(getCategoryColor$1)(tool.category).icon }
                      }, null, 8, ["style"])),
                      tool.hot || tool.new ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: [
                          "text-xs px-2 py-1 rounded-full",
                          tool.hot ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                        ]
                      }, toDisplayString(tool.hot ? "HOT" : "NEW"), 3)) : createCommentVNode("", true)
                    ]),
                    createVNode("h3", { class: "font-semibold mb-2" }, toDisplayString(tool.name), 1),
                    createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(tool.description), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></section><section class="mb-16" data-v-299db09f><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-299db09f><div class="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow" data-v-299db09f><div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto" data-v-299db09f>`);
      _push(ssrRenderComponent(unref(Lock), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(`</div><h3 class="font-semibold mb-2" data-v-299db09f>\u7EAF\u672C\u5730\u8BA1\u7B97</h3><p class="text-sm text-muted-foreground" data-v-299db09f>\u60A8\u7684\u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u670D\u52A1\u5668\uFF0C\u6240\u6709\u8BA1\u7B97\u5747\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u5B89\u5168\u9690\u79C1\u3002</p></div><div class="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow" data-v-299db09f><div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto" data-v-299db09f>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(`</div><h3 class="font-semibold mb-2" data-v-299db09f>\u6781\u901F\u54CD\u5E94</h3><p class="text-sm text-muted-foreground" data-v-299db09f>WebAssembly\u52A0\u901F\uFF0C\u6BEB\u79D2\u7EA7\u5904\u7406\u901F\u5EA6\uFF0C\u65E0\u9700\u7B49\u5F85\u670D\u52A1\u5668\u54CD\u5E94\u3002</p></div><div class="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow" data-v-299db09f><div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto" data-v-299db09f>`);
      _push(ssrRenderComponent(unref(Heart), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(`</div><h3 class="font-semibold mb-2" data-v-299db09f>\u5F00\u6E90\u514D\u8D39</h3><p class="text-sm text-muted-foreground" data-v-299db09f>\u65E0\u5E7F\u544A\uFF0C\u793E\u533A\u9A71\u52A8\uFF0C\u6C38\u4E45\u514D\u8D39\uFF0CGitHub\u5F00\u6E90\u9879\u76EE\u3002</p></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-299db09f"]]);

export { index as default };
//# sourceMappingURL=index-Dm55oVw5.mjs.map
