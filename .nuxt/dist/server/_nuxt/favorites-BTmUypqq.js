import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { Heart, GripVertical, Compass } from "lucide-vue-next";
import "sortablejs";
import { t as tools } from "./tools-CG9LGULA.js";
import { i as initToolsData, h as getFavoriteTools, e as addRecentTool } from "../server.mjs";
import { u as useSEO } from "./useSEO-DTxZRwJC.js";
import { _ as _sfc_main$1 } from "./ToolCard-GG_LcR18.js";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
import "./categoryColors-w89ks1yN.js";
const _sfc_main = {
  __name: "favorites",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("我的收藏");
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
      _push(` 我的收藏 </h1><p class="text-muted-foreground">您收藏的实用工具 · 拖拽卡片可调整顺序</p></div><div class="flex items-center gap-2 text-sm text-muted-foreground">`);
      _push(ssrRenderComponent(unref(GripVertical), { class: "w-4 h-4" }, null, _parent));
      _push(`<span>拖拽排序</span></div></div><section>`);
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
        _push(`</div><h3 class="text-lg font-medium text-foreground">暂无收藏</h3><p class="text-muted-foreground mt-2">您还没有收藏任何工具，快去探索吧！</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/explore",
          class: "inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Compass), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(` 去探索 `);
            } else {
              return [
                createVNode(unref(Compass), { class: "w-4 h-4" }),
                createTextVNode(" 去探索 ")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=favorites-BTmUypqq.js.map
