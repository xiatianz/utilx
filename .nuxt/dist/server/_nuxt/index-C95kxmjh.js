import { ref, computed, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { useRouter, useRoute } from "vue-router";
import { Search, LayoutGrid, SearchX } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { i as initToolsData, e as addRecentTool } from "../server.mjs";
import { _ as _sfc_main$1 } from "./ToolCard-GG_LcR18.js";
import { u as useSEO } from "./useSEO-DTxZRwJC.js";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
import "./nuxt-link-Bb2DNygF.js";
import "./categoryColors-w89ks1yN.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("未找到相关工具");
    initToolsData();
    const router = useRouter();
    useRoute();
    const currentCategory = ref("all");
    const heroSearch = ref("");
    ref("");
    const filteredTools = computed(() => {
      const searchTerm = (heroSearch.value || "").toLowerCase();
      return tools.filter((tool) => {
        const matchesCategory = currentCategory.value === "all" || tool.category === currentCategory.value;
        const matchesSearch = !searchTerm || tool.name.toLowerCase().includes(searchTerm) || tool.description.toLowerCase().includes(searchTerm) || tool.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm));
        return matchesCategory && matchesSearch;
      });
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
      console.log("Selected tool:", tool);
      router.push(`/tools/${tool.id}/`);
      addRecentTool(tool.id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="heroSection" class="max-w-8xl mx-auto mb-12 mt-4 lg:mt-8 text-center animate-fade-in"><h2 class="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"> 数字创作者的万能工具箱 </h2><p class="text-muted-foreground mb-8 text-lg">无论是调试代码还是处理图像，这里都有你得心应手的利器。纯本地，更安全。</p><div class="relative max-w-2xl mx-auto shadow-2xl shadow-primary/10 rounded-xl"><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">`);
      _push(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-muted-foreground" }, null, _parent));
      _push(`</div><input${ssrRenderAttr("value", heroSearch.value)} type="text" class="block w-full rounded-xl border border-border bg-muted/50 pl-11 pr-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:bg-background transition-all placeholder:text-muted-foreground/70" placeholder="搜索你需要的工具，如 &#39;JSON&#39;, &#39;MD5&#39;, &#39;正则&#39;..."><div class="absolute inset-y-0 right-0 pr-3 flex items-center"><span class="text-xs text-muted-foreground bg-muted border border-border px-2 py-1 rounded hidden sm:block">Enter</span></div></div><div class="mt-6 flex flex-wrap justify-center gap-2"><span class="text-xs text-muted-foreground py-1">热门搜索：</span><button class="text-xs px-3 py-1 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors border border-border"> JSON 修复 </button><button class="text-xs px-3 py-1 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors border border-border"> Unix 时间戳 </button><button class="text-xs px-3 py-1 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors border border-border"> Base64 图片 </button><button class="text-xs px-3 py-1 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors border border-border"> Cron 表达式 </button></div></div><div class="max-w-8xl mx-auto"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2" id="gridTitle">`);
      _push(ssrRenderComponent(unref(LayoutGrid), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 全部工具 </h3><div class="text-sm text-muted-foreground" id="toolCount">${ssrInterpolate(filteredTools.value.length)} 个工具 </div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="toolGrid"><!--[-->`);
      ssrRenderList(filteredTools.value, (tool) => {
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
      _push(`<!--]--></div><div id="emptyState" class="hidden text-center py-24" style="${ssrRenderStyle(filteredTools.value.length === 0 ? null : { display: "none" })}"><div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">`);
      _push(ssrRenderComponent(unref(SearchX), { class: "w-8 h-8 text-muted-foreground" }, null, _parent));
      _push(`</div><h3 class="text-lg font-medium text-foreground">未找到相关工具</h3><p class="text-muted-foreground mt-2">试试搜索 &quot;json&quot; 或 &quot;timestamp&quot;</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/all/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-C95kxmjh.js.map
