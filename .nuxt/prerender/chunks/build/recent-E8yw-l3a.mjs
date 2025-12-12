import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';
import { Clock, History, Trash2, Compass } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
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
import './categoryColors-w89ks1yN.mjs';

const _sfc_main = {
  __name: "recent",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("\u6700\u8FD1\u4F7F\u7528\u5DE5\u5177");
    initToolsData();
    const router = useRouter();
    const recentTools = computed(() => {
      const recentIds = getRecentTools();
      return recentIds.map((id) => tools.find((tool) => tool.id === id)).filter(Boolean);
    });
    const formatViewCount = (count) => {
      if (count >= 1e4) {
        return `${(count / 1e4).toFixed(1)}w+`;
      } else if (count >= 1e3) {
        return `${(count / 1e3).toFixed(1)}k+`;
      }
      return `${count}`;
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      router.push(toolUrl);
      addRecentTool(tool.id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto py-8" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-8 h-8 text-primary" }, null, _parent));
      _push(` \u6700\u8FD1\u4F7F\u7528 </h1><p class="text-muted-foreground">\u60A8\u6700\u8FD1\u4F7F\u7528\u8FC7\u7684\u5DE5\u5177</p></div><section>`);
      if (recentTools.value.length > 0) {
        _push(`<div><div class="flex items-center justify-between mb-6"><h2 class="text-lg font-semibold flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(History), { class: "w-5 h-5 text-primary" }, null, _parent));
        _push(` \u4F7F\u7528\u5386\u53F2 </h2><button class="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">`);
        _push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent));
        _push(` \u6E05\u7A7A\u8BB0\u5F55 </button></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"><!--[-->`);
        ssrRenderList(recentTools.value, (tool) => {
          _push(ssrRenderComponent(_sfc_main$1, {
            key: tool.id,
            tool,
            title: tool.name,
            description: tool.description,
            category: tool.category,
            "usage-count": formatViewCount(tool.viewCount),
            icon: tool.icon,
            onSelect: handleToolSelect
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="text-center py-12"><div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">`);
        _push(ssrRenderComponent(unref(Clock), { class: "w-8 h-8 text-muted-foreground" }, null, _parent));
        _push(`</div><h3 class="text-lg font-medium text-foreground">\u6682\u65E0\u8BB0\u5F55</h3><p class="text-muted-foreground mt-2">\u60A8\u8FD8\u6CA1\u6709\u4F7F\u7528\u8FC7\u4EFB\u4F55\u5DE5\u5177\uFF0C\u5FEB\u53BB\u63A2\u7D22\u5427\uFF01</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/explore",
          class: "inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Compass), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(` \u53BB\u63A2\u7D22 `);
            } else {
              return [
                createVNode(unref(Compass), { class: "w-4 h-4" }),
                createTextVNode(" \u53BB\u63A2\u7D22 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=recent-E8yw-l3a.mjs.map
