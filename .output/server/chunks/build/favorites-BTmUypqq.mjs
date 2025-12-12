import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { Heart, GripVertical, Compass } from 'lucide-vue-next';
import { t as tools } from './tools-CG9LGULA.mjs';
import { i as initToolsData, h as getFavoriteTools, e as addRecentTool } from './server.mjs';
import { u as useSEO } from './useSEO-DTxZRwJC.mjs';
import { _ as _sfc_main$1 } from './ToolCard-GG_LcR18.mjs';
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
import './categoryColors-w89ks1yN.mjs';

const _sfc_main = {
  __name: "favorites",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("\u6211\u7684\u6536\u85CF");
    initToolsData();
    const router = useRouter();
    ref(null);
    const getFavoriteOrder = () => {
      try {
        const savedOrder = localStorage.getItem("favorite-tools-order");
        return savedOrder ? JSON.parse(savedOrder) : [];
      } catch (error) {
        console.warn("Failed to load favorite tools order:", error);
        return [];
      }
    };
    const favoriteTools = computed(() => {
      const favoriteIds = getFavoriteTools();
      const savedOrder = getFavoriteOrder();
      const favoriteToolsList = favoriteIds.map((id) => tools.find((tool) => tool.id === id)).filter(Boolean);
      if (savedOrder.length > 0) {
        return favoriteToolsList.sort((a, b) => {
          const aIndex = savedOrder.indexOf(a.id);
          const bIndex = savedOrder.indexOf(b.id);
          if (aIndex !== -1 && bIndex !== -1) {
            return aIndex - bIndex;
          }
          if (aIndex !== -1) return -1;
          if (bIndex !== -1) return 1;
          return favoriteIds.indexOf(a.id) - favoriteIds.indexOf(b.id);
        });
      }
      return favoriteToolsList;
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto py-8" }, _attrs))}><div class="mb-8 flex items-center justify-between"><div><h1 class="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Heart), { class: "w-8 h-8 text-red-500 fill-current" }, null, _parent));
      _push(` \u6211\u7684\u6536\u85CF </h1><p class="text-muted-foreground">\u60A8\u6536\u85CF\u7684\u5B9E\u7528\u5DE5\u5177 \xB7 \u62D6\u62FD\u5361\u7247\u53EF\u8C03\u6574\u987A\u5E8F</p></div><div class="flex items-center gap-2 text-sm text-muted-foreground">`);
      _push(ssrRenderComponent(unref(GripVertical), { class: "w-4 h-4" }, null, _parent));
      _push(`<span>\u62D6\u62FD\u6392\u5E8F</span></div></div><section>`);
      if (favoriteTools.value.length > 0) {
        _push(`<div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"><!--[-->`);
        ssrRenderList(favoriteTools.value, (tool) => {
          _push(`<div${ssrRenderAttr("data-id", tool.id)} class="sortable-item">`);
          _push(ssrRenderComponent(_sfc_main$1, {
            tool,
            title: tool.name,
            description: tool.description,
            category: tool.category,
            "usage-count": formatViewCount(tool.viewCount),
            icon: tool.icon,
            "is-draggable": true,
            onSelect: handleToolSelect
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="text-center py-12"><div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">`);
        _push(ssrRenderComponent(unref(Heart), { class: "w-8 h-8 text-muted-foreground" }, null, _parent));
        _push(`</div><h3 class="text-lg font-medium text-foreground">\u6682\u65E0\u6536\u85CF</h3><p class="text-muted-foreground mt-2">\u60A8\u8FD8\u6CA1\u6709\u6536\u85CF\u4EFB\u4F55\u5DE5\u5177\uFF0C\u5FEB\u53BB\u63A2\u7D22\u5427\uFF01</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/favorites.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=favorites-BTmUypqq.mjs.map
