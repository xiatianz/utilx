import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { Clock, History, Trash2, Compass } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { i as initToolsData, g as getRecentTools, e as addRecentTool } from "../server.mjs";
import { _ as _sfc_main$1 } from "./ToolCard-GG_LcR18.js";
import { u as useSEO } from "./useSEO-DTxZRwJC.js";
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
  __name: "recent",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("最近使用工具");
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
      _push(` 最近使用 </h1><p class="text-muted-foreground">您最近使用过的工具</p></div><section>`);
      if (recentTools.value.length > 0) {
        _push(`<div><div class="flex items-center justify-between mb-6"><h2 class="text-lg font-semibold flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(History), { class: "w-5 h-5 text-primary" }, null, _parent));
        _push(` 使用历史 </h2><button class="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">`);
        _push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent));
        _push(` 清空记录 </button></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"><!--[-->`);
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
        _push(`</div><h3 class="text-lg font-medium text-foreground">暂无记录</h3><p class="text-muted-foreground mt-2">您还没有使用过任何工具，快去探索吧！</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=recent-E8yw-l3a.js.map
