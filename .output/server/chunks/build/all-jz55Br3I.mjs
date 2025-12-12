import { ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { useRouter, useRoute } from 'vue-router';
import { Search, LayoutGrid, SearchX } from 'lucide-vue-next';
import { t as tools } from './tools-CG9LGULA.mjs';
import { i as initToolsData, e as addRecentTool } from './server.mjs';
import { _ as _sfc_main$1 } from './ToolCard-GG_LcR18.mjs';
import { u as useSEO } from './useSEO-DTxZRwJC.mjs';
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
import './nuxt-link-Bb2DNygF.mjs';
import './categoryColors-w89ks1yN.mjs';

const _sfc_main = {
  __name: "all",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("\u5168\u90E8\u5DE5\u5177");
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
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="heroSection" class="max-w-8xl mx-auto mb-12 mt-4 lg:mt-8 text-center animate-fade-in"><h2 class="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"> \u6570\u5B57\u521B\u4F5C\u8005\u7684\u4E07\u80FD\u5DE5\u5177\u7BB1 </h2><p class="text-muted-foreground mb-8 text-lg">\u65E0\u8BBA\u662F\u8C03\u8BD5\u4EE3\u7801\u8FD8\u662F\u5904\u7406\u56FE\u50CF\uFF0C\u8FD9\u91CC\u90FD\u6709\u4F60\u5F97\u5FC3\u5E94\u624B\u7684\u5229\u5668\u3002\u7EAF\u672C\u5730\uFF0C\u66F4\u5B89\u5168\u3002</p><div class="relative max-w-2xl mx-auto shadow-2xl shadow-primary/10 rounded-xl"><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">`);
      _push(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-muted-foreground" }, null, _parent));
      _push(`</div><input${ssrRenderAttr("value", heroSearch.value)} type="text" class="block w-full rounded-xl border border-border bg-muted/50 pl-11 pr-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:bg-background transition-all placeholder:text-muted-foreground/70" placeholder="\u641C\u7D22\u4F60\u9700\u8981\u7684\u5DE5\u5177\uFF0C\u5982 &#39;JSON&#39;, &#39;MD5&#39;, &#39;\u6B63\u5219&#39;..."><div class="absolute inset-y-0 right-0 pr-3 flex items-center"><span class="text-xs text-muted-foreground bg-muted border border-border px-2 py-1 rounded hidden sm:block">Enter</span></div></div><div class="mt-6 flex flex-wrap justify-center gap-2"><span class="text-xs text-muted-foreground py-1">\u70ED\u95E8\u641C\u7D22\uFF1A</span><button class="text-xs px-3 py-1 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors border border-border"> JSON \u683C\u5F0F\u5316 </button><button class="text-xs px-3 py-1 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors border border-border"> \u65F6\u95F4\u6233\u8F6C\u6362 </button><button class="text-xs px-3 py-1 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors border border-border"> Base64 \u7F16\u7801 </button><button class="text-xs px-3 py-1 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors border border-border"> Cron \u751F\u6210\u5668 </button><button class="text-xs px-3 py-1 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors border border-border"> JWT \u89E3\u7801 </button></div></div><div class="max-w-8xl mx-auto"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2" id="gridTitle">`);
      _push(ssrRenderComponent(unref(LayoutGrid), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5168\u90E8\u5DE5\u5177 </h3><div class="text-sm text-muted-foreground" id="toolCount">${ssrInterpolate(filteredTools.value.length)} \u4E2A\u5DE5\u5177 </div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="toolGrid"><!--[-->`);
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
      _push(`</div><h3 class="text-lg font-medium text-foreground">\u672A\u627E\u5230\u76F8\u5173\u5DE5\u5177</h3><p class="text-muted-foreground mt-2">\u8BD5\u8BD5\u641C\u7D22 &quot;json&quot; \u6216 &quot;timestamp&quot;</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/all.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=all-jz55Br3I.mjs.map
