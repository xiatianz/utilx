import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { computed, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';
import { LayoutGrid, Star, ArrowRight, Clock, Code, Image, Globe, Regex, Lock, Database, FileJson } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { g as getCategoryColor } from './categoryColors-w89ks1yN.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { t as tools } from './tools-CG9LGULA.mjs';
import { i as initToolsData, g as getRecentTools, e as addRecentTool } from './server.mjs';
import { _ as _sfc_main$1 } from './ToolCard-GG_LcR18.mjs';
import { u as useSEO } from './useSEO-DTxZRwJC.mjs';
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
  __name: "explore",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("\u5DE5\u5177\u63A2\u7D22");
    initToolsData();
    useRouter();
    const iconMap = {
      FileJson,
      Database,
      Lock,
      Regex,
      Globe,
      ImageIcon: Image,
      Code
    };
    computed(() => {
      return categories.map((category) => ({
        ...category,
        toolCount: tools.filter((tool) => tool.category === category.id).length
      }));
    });
    const featuredTools = computed(() => {
      return tools.filter((tool) => tool.hot).slice(0, 8);
    });
    const recentTools = computed(() => {
      const recentIds = getRecentTools();
      return recentIds.map((id) => tools.find((tool) => tool.id === id)).filter(Boolean).slice(0, 6);
    });
    const formatViewCount = (count) => {
      if (count >= 1e4) {
        return `${(count / 1e4).toFixed(1)}w+`;
      } else if (count >= 1e3) {
        return `${(count / 1e3).toFixed(1)}k+`;
      }
      return `${count}`;
    };
    const getCategoryColor$1 = getCategoryColor;
    const getCategoryIcon = (iconName) => {
      return iconMap[iconName] || FileJson;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto py-8" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-2">\u5DE5\u5177\u63A2\u7D22</h1><p class="text-muted-foreground">\u53D1\u73B0\u548C\u4F7F\u7528\u5404\u79CD\u5B9E\u7528\u5DE5\u5177</p></div><section class="mb-12"><h2 class="text-xl font-semibold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(LayoutGrid), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5DE5\u5177\u5206\u7C7B </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<div class="bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer group"><div class="flex justify-between items-start mb-3">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getCategoryIcon(category.icon)), {
          class: "w-8 h-8 group-hover:scale-110 transition-transform",
          style: { color: unref(getCategoryColor$1)(category.id).icon }
        }, null), _parent);
        _push(`</div><h3 class="font-semibold mb-2">${ssrInterpolate(category.name)}</h3><p class="text-sm text-muted-foreground">${ssrInterpolate(category.description)}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="mb-12"><div class="flex items-center justify-between mb-6"><h2 class="text-xl font-semibold flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Star), { class: "w-5 h-5 text-yellow-500 fill-current" }, null, _parent));
      _push(` \u7CBE\u9009\u5DE5\u5177 </h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/all",
        class: "text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u67E5\u770B\u5168\u90E8 `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" \u67E5\u770B\u5168\u90E8 "),
              createVNode(unref(ArrowRight), { class: "w-4 h-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(featuredTools.value, (tool) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: tool.id,
          tool,
          title: tool.name,
          description: tool.description,
          category: tool.category,
          "usage-count": formatViewCount(tool.viewCount),
          icon: tool.icon,
          onSelect: unref(addRecentTool)
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
      if (recentTools.value.length > 0) {
        _push(`<section><div class="flex items-center justify-between mb-6"><h2 class="text-xl font-semibold flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(Clock), { class: "w-5 h-5 text-primary" }, null, _parent));
        _push(` \u6700\u8FD1\u4F7F\u7528 </h2>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/recent",
          class: "text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u67E5\u770B\u66F4\u591A `);
              _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" \u67E5\u770B\u66F4\u591A "),
                createVNode(unref(ArrowRight), { class: "w-4 h-4" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"><!--[-->`);
        ssrRenderList(recentTools.value, (tool) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: tool.id,
            to: `/tools/${tool.id}/`,
            class: "group relative block",
            onClick: ($event) => unref(addRecentTool)(tool.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="bg-card/30 backdrop-blur-sm border-0 rounded-xl p-4 hover:bg-card/60 hover:shadow-sm hover:shadow-primary/5 transition-all duration-200 cursor-pointer group h-full"${_scopeId}><div class="flex flex-col items-center text-center h-full"${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getCategoryIcon(tool.icon)), {
                  class: "w-8 h-8 mb-2 transition-transform group-hover:scale-110",
                  style: { color: unref(getCategoryColor$1)(tool.category).icon }
                }, null), _parent2, _scopeId);
                _push2(`<span class="text-sm font-medium truncate w-full"${_scopeId}>${ssrInterpolate(tool.name)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "bg-card/30 backdrop-blur-sm border-0 rounded-xl p-4 hover:bg-card/60 hover:shadow-sm hover:shadow-primary/5 transition-all duration-200 cursor-pointer group h-full" }, [
                    createVNode("div", { class: "flex flex-col items-center text-center h-full" }, [
                      (openBlock(), createBlock(resolveDynamicComponent(getCategoryIcon(tool.icon)), {
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
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/explore.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=explore-Dh8i0j2b.mjs.map
