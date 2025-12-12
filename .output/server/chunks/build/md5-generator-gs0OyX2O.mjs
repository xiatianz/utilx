import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { c as categories } from './categories-guMUDMNS.mjs';
import { t as tools } from './tools-CG9LGULA.mjs';
import { e as addRecentTool, f as useSeoMeta, n as navigateTo } from './server.mjs';
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
import 'vue-router';
import './nuxt-link-Bb2DNygF.mjs';
import 'lucide-vue-next';
import './categoryColors-w89ks1yN.mjs';

const _sfc_main = {
  __name: "md5-generator",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const inputText = ref("");
    const outputText = ref("");
    ref(null);
    const copyButtonText = ref("\u590D\u5236");
    const showBatchProcess = ref(false);
    const batchInput = ref("");
    const batchResults = ref([]);
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "md5-generator"
      ).slice(0, 4);
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
    addRecentTool("md5-generator");
    useSeoMeta({
      title: "MD5\u54C8\u5E0C\u751F\u6210\u5668 - \u5728\u7EBFMD5\u52A0\u5BC6\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFMD5\u54C8\u5E0C\u751F\u6210\u5668\uFF0C\u652F\u6301\u6587\u672C\u548C\u6587\u4EF6\u7684MD5\u8BA1\u7B97\uFF0C\u7528\u4E8E\u6570\u636E\u5B8C\u6574\u6027\u9A8C\u8BC1\u548C\u5BC6\u7801\u52A0\u5BC6\u3002",
      keywords: ["MD5", "\u54C8\u5E0C", "\u52A0\u5BC6", "\u6587\u4EF6\u5B8C\u6574\u6027", "\u5BC6\u7801\u52A0\u5BC6"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">MD5\u54C8\u5E0C\u751F\u6210\u5668</h1><p class="text-muted-foreground max-w-3xl">\u5728\u7EBFMD5\u54C8\u5E0C\u503C\u751F\u6210\u5DE5\u5177\uFF0C\u652F\u6301\u6587\u672C\u548C\u6587\u4EF6\u7684MD5\u8BA1\u7B97\uFF0C\u7528\u4E8E\u6570\u636E\u5B8C\u6574\u6027\u9A8C\u8BC1\u548C\u5BC6\u7801\u52A0\u5BC6\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">\u539F\u59CB\u6570\u636E</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button><label class="flex items-center gap-2 cursor-pointer"><input type="file" accept="*/*" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> \u9009\u62E9\u6587\u4EF6 </span></label></div></div><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u8BA1\u7B97MD5\u54C8\u5E0C\u7684\u6587\u672C..." class="w-full h-64 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea><div class="text-sm text-muted-foreground"> \u5B57\u7B26\u6570\uFF1A${ssrInterpolate(inputText.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">MD5\u54C8\u5E0C\u503C</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors">${ssrInterpolate(copyButtonText.value)}</button><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> \u4E0B\u8F7D </button></div></div><div class="w-full h-64 p-4 border border-border rounded-lg bg-muted/50"><div class="font-mono text-lg break-all">${ssrInterpolate(outputText.value || "MD5\u54C8\u5E0C\u503C\u5C06\u663E\u793A\u5728\u8FD9\u91CC...")}</div></div><div class="text-sm text-muted-foreground"> \u957F\u5EA6\uFF1A${ssrInterpolate(outputText.value.length)} \u4F4D </div></div></div><div class="flex flex-wrap gap-4 mb-8"><button class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"> \u751F\u6210 MD5 </button><button class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> \u54C8\u5E0C\u5BF9\u6BD4 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> \u6279\u91CF\u5904\u7406 </button></div>`);
      if (showBatchProcess.value) {
        _push(`<div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"><div class="bg-background rounded-lg border border-border max-w-2xl w-full max-h-[80vh] overflow-y-auto"><div class="p-6"><h3 class="text-lg font-semibold mb-4">\u6279\u91CFMD5\u8BA1\u7B97</h3><textarea placeholder="\u6BCF\u884C\u8F93\u5165\u4E00\u4E2A\u8981\u8BA1\u7B97MD5\u7684\u6587\u672C..." class="w-full h-48 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary mb-4">${ssrInterpolate(batchInput.value)}</textarea><div class="flex justify-end gap-2"><button class="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"> \u53D6\u6D88 </button><button class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"> \u6279\u91CF\u5904\u7406 </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (batchResults.value.length > 0) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u6279\u91CF\u5904\u7406\u7ED3\u679C</h3><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border"><th class="text-left py-2">\u539F\u59CB\u6587\u672C</th><th class="text-left py-2">MD5\u54C8\u5E0C</th><th class="text-left py-2">\u64CD\u4F5C</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(batchResults.value, (result, index) => {
          _push(`<tr class="border-b border-border"><td class="py-2 font-mono text-xs max-w-xs truncate">${ssrInterpolate(result.text)}</td><td class="py-2 font-mono text-xs">${ssrInterpolate(result.hash)}</td><td class="py-2"><button class="text-primary hover:text-primary/80 transition-colors"> \u590D\u5236 </button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u5173\u4E8EMD5\u7B97\u6CD5</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-semibold text-primary mb-2">\u7B97\u6CD5\u7279\u6027</h4><ul class="space-y-1 text-sm"><li>\u2022 \u56FA\u5B9A\u8F93\u51FA\u957F\u5EA6\uFF1A128\u4F4D\uFF0832\u4E2A\u5341\u516D\u8FDB\u5236\u5B57\u7B26\uFF09</li><li>\u2022 \u5355\u5411\u52A0\u5BC6\uFF1A\u65E0\u6CD5\u4ECEMD5\u53CD\u63A8\u539F\u59CB\u6570\u636E</li><li>\u2022 \u96EA\u5D29\u6548\u5E94\uFF1A\u8F93\u5165\u5FAE\u5C0F\u53D8\u5316\u5BFC\u81F4\u8F93\u51FA\u5DE8\u5927\u5DEE\u5F02</li><li>\u2022 \u8BA1\u7B97\u901F\u5EA6\u5FEB\uFF1A\u9002\u5408\u5927\u91CF\u6570\u636E\u5904\u7406</li></ul></div><div><h4 class="font-semibold text-primary mb-2">\u5E38\u89C1\u7528\u9014</h4><ul class="space-y-1 text-sm"><li>\u2022 \u6587\u4EF6\u5B8C\u6574\u6027\u6821\u9A8C</li><li>\u2022 \u5BC6\u7801\u5B58\u50A8\uFF08\u5DF2\u4E0D\u63A8\u8350\u5355\u72EC\u4F7F\u7528\uFF09</li><li>\u2022 \u6570\u5B57\u7B7E\u540D\uFF08\u7ED3\u5408\u5176\u4ED6\u7B97\u6CD5\uFF09</li><li>\u2022 \u6570\u636E\u53BB\u91CD\u548C\u7D22\u5F15</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (tool) => {
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
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/md5-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=md5-generator-gs0OyX2O.mjs.map
