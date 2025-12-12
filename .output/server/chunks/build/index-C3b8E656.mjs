import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { c as categories } from './categories-guMUDMNS.mjs';
import { t as tools } from './tools-CG9LGULA.mjs';
import { n as navigateTo, e as addRecentTool } from './server.mjs';
import { _ as _sfc_main$1 } from './ToolCard-GG_LcR18.mjs';
import { _ as _sfc_main$2 } from './SeoKnowledgeBase-DpQjXBFU.mjs';
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
import 'vue-router';
import './nuxt-link-Bb2DNygF.mjs';
import 'lucide-vue-next';
import './categoryColors-w89ks1yN.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("\u52A0\u5BC6\u89E3\u5BC6\u5DE5\u5177\u7BB1");
    const category = categories.find((c) => c.id === "crypto");
    const categoryTools = computed(() => {
      return tools.filter((tool) => tool.category === category.id);
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
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u52A0\u5BC6\u89E3\u5BC6\u5DE5\u5177\u7BB1</h1><p class="text-muted-foreground max-w-3xl">\u63D0\u4F9B\u5168\u9762\u7684\u52A0\u5BC6\u89E3\u5BC6\u7B97\u6CD5\u5DE5\u5177\uFF0C\u5305\u62EC\u54C8\u5E0C\u751F\u6210\u3001\u5BF9\u79F0\u52A0\u5BC6\u3001\u975E\u5BF9\u79F0\u52A0\u5BC6\u3001\u56FD\u5BC6\u7B97\u6CD5\u7B49\uFF0C\u4FDD\u969C\u6570\u636E\u5B89\u5168\u4F20\u8F93\u548C\u5B58\u50A8\u3002</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12"><!--[-->`);
      ssrRenderList(categoryTools.value, (tool) => {
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
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_sfc_main$2, { category: "crypto" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/crypto/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C3b8E656.mjs.map
