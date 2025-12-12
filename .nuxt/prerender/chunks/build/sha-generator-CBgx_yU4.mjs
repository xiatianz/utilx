import { ref, computed, mergeProps, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { t as tools } from './tools-CG9LGULA.mjs';
import { e as addRecentTool, f as useSeoMeta, n as navigateTo } from './server.mjs';
import { _ as _sfc_main$1 } from './ToolCard-GG_LcR18.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs';
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
import 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';
import './nuxt-link-Bb2DNygF.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import './categoryColors-w89ks1yN.mjs';

const _sfc_main = {
  __name: "sha-generator",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const algorithms = [
      { name: "SHA-1", value: "SHA-1", bits: 160, security: "low", useCase: "\u5DF2\u4E0D\u63A8\u8350\u4F7F\u7528" },
      { name: "SHA-256", value: "SHA-256", bits: 256, security: "high", useCase: "\u63A8\u8350\u4F7F\u7528" },
      { name: "SHA-384", value: "SHA-384", bits: 384, security: "high", useCase: "\u9AD8\u5B89\u5168\u6027\u9700\u6C42" },
      { name: "SHA-512", value: "SHA-512", bits: 512, security: "high", useCase: "\u6700\u9AD8\u5B89\u5168\u6027" }
    ];
    const inputText = ref("");
    const outputText = ref("");
    const selectedAlgorithm = ref("SHA-256");
    ref(null);
    const copyButtonText = ref("\u590D\u5236");
    const allHashes = ref([]);
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "sha-generator"
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
    const formatBytes = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    const getCurrentAlgorithmName = () => {
      const algo = algorithms.find((a) => a.value === selectedAlgorithm.value);
      return algo ? algo.name : "SHA";
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("sha-generator");
    useSeoMeta({
      title: "SHA\u54C8\u5E0C\u751F\u6210\u5668 - \u5728\u7EBFSHA-1/SHA-256/SHA-512\u52A0\u5BC6\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFSHA\u54C8\u5E0C\u751F\u6210\u5668\uFF0C\u652F\u6301SHA-1\u3001SHA-256\u3001SHA-384\u3001SHA-512\u7B97\u6CD5\uFF0C\u7528\u4E8E\u6570\u636E\u5B8C\u6574\u6027\u9A8C\u8BC1\u548C\u6570\u5B57\u7B7E\u540D\u3002",
      keywords: ["SHA", "SHA-1", "SHA-256", "SHA-512", "\u54C8\u5E0C", "\u52A0\u5BC6", "\u6570\u5B57\u7B7E\u540D", "\u6570\u636E\u5B8C\u6574\u6027"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">SHA\u54C8\u5E0C\u751F\u6210\u5668</h1><p class="text-muted-foreground max-w-3xl">\u652F\u6301SHA-1\u3001SHA-256\u3001SHA-512\u7B49\u591A\u79CD\u54C8\u5E0C\u7B97\u6CD5\u5728\u7EBF\u8BA1\u7B97\uFF0C\u7528\u4E8E\u6570\u636E\u5B8C\u6574\u6027\u9A8C\u8BC1\u548C\u6570\u5B57\u7B7E\u540D\u3002</p></div><div class="mb-6"><label class="text-lg font-semibold block mb-3">\u9009\u62E9\u54C8\u5E0C\u7B97\u6CD5</label><div class="flex flex-wrap gap-3"><!--[-->`);
      ssrRenderList(algorithms, (algorithm) => {
        _push(`<label class="${ssrRenderClass([{ "bg-primary text-primary-foreground border-primary": selectedAlgorithm.value === algorithm.value }, "flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors"])}"><input type="radio"${ssrRenderAttr("value", algorithm.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedAlgorithm.value, algorithm.value)) ? " checked" : ""} class="sr-only"><span>${ssrInterpolate(algorithm.name)}</span><span class="text-xs opacity-75">${ssrInterpolate(algorithm.bits)}\u4F4D</span></label>`);
      });
      _push(`<!--]--></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">\u539F\u59CB\u6570\u636E</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button><label class="flex items-center gap-2 cursor-pointer"><input type="file" accept="*/*" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> \u9009\u62E9\u6587\u4EF6 </span></label></div></div><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u8BA1\u7B97\u54C8\u5E0C\u7684\u6587\u672C..." class="w-full h-64 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea><div class="text-sm text-muted-foreground"> \u5B57\u7B26\u6570\uFF1A${ssrInterpolate(inputText.value.length)} | \u5927\u5C0F\uFF1A${ssrInterpolate(formatBytes(inputText.value.length))}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">${ssrInterpolate(getCurrentAlgorithmName())}\u54C8\u5E0C\u503C</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors">${ssrInterpolate(copyButtonText.value)}</button><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> \u4E0B\u8F7D </button></div></div><div class="w-full h-64 p-4 border border-border rounded-lg bg-muted/50"><div class="font-mono text-sm break-all">${ssrInterpolate(outputText.value || "\u54C8\u5E0C\u503C\u5C06\u663E\u793A\u5728\u8FD9\u91CC...")}</div></div><div class="text-sm text-muted-foreground"> \u957F\u5EA6\uFF1A${ssrInterpolate(outputText.value.length)} \u5B57\u7B26 (${ssrInterpolate((outputText.value.length * 4).toFixed(0))} \u4F4D) </div></div></div><div class="flex flex-wrap gap-4 mb-8"><button class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"> \u751F\u6210\u54C8\u5E0C </button><button class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> \u54C8\u5E0C\u5BF9\u6BD4 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> \u751F\u6210\u5168\u90E8\u7B97\u6CD5 </button></div>`);
      if (allHashes.value.length > 0) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u6240\u6709\u7B97\u6CD5\u54C8\u5E0C\u503C</h3><div class="space-y-3"><!--[-->`);
        ssrRenderList(allHashes.value, (hash) => {
          _push(`<div class="border-b border-border pb-3"><div class="flex items-center justify-between mb-2"><span class="font-medium">${ssrInterpolate(hash.name)}</span><button class="text-primary hover:text-primary/80 transition-colors"> \u590D\u5236 </button></div><div class="font-mono text-sm bg-muted/50 p-3 rounded">${ssrInterpolate(hash.value)}</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">SHA\u7B97\u6CD5\u5BF9\u6BD4</h3><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border"><th class="text-left py-2">\u7B97\u6CD5</th><th class="text-left py-2">\u8F93\u51FA\u957F\u5EA6</th><th class="text-left py-2">\u5B89\u5168\u6027</th><th class="text-left py-2">\u63A8\u8350\u7528\u9014</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(algorithms, (algo) => {
        _push(`<tr class="border-b border-border"><td class="py-2 font-medium">${ssrInterpolate(algo.name)}</td><td class="py-2">${ssrInterpolate(algo.bits)} \u4F4D</td><td class="py-2"><span class="${ssrRenderClass(algo.security === "high" ? "text-green-500" : algo.security === "medium" ? "text-yellow-500" : "text-red-500")}">${ssrInterpolate(algo.security === "high" ? "\u9AD8" : algo.security === "medium" ? "\u4E2D" : "\u4F4E")}</span></td><td class="py-2">${ssrInterpolate(algo.useCase)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-3 flex items-center"><span class="text-yellow-500 mr-2">\u26A0\uFE0F</span> \u5B89\u5168\u63D0\u793A </h3><ul class="space-y-2 text-sm text-yellow-800 dark:text-yellow-200"><li>\u2022 SHA-1 \u5DF2\u88AB\u53D1\u73B0\u5B58\u5728\u78B0\u649E\u6F0F\u6D1E\uFF0C\u4E0D\u5EFA\u8BAE\u7528\u4E8E\u65B0\u7684\u5B89\u5168\u5E94\u7528</li><li>\u2022 \u63A8\u8350\u4F7F\u7528 SHA-256 \u6216\u66F4\u9AD8\u5F3A\u5EA6\u7684\u54C8\u5E0C\u7B97\u6CD5</li><li>\u2022 \u54C8\u5E0C\u51FD\u6570\u662F\u5355\u5411\u7684\uFF0C\u65E0\u6CD5\u4ECE\u54C8\u5E0C\u503C\u53CD\u63A8\u539F\u59CB\u6570\u636E</li><li>\u2022 \u5BF9\u4E8E\u5BC6\u7801\u5B58\u50A8\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u52A0\u76D0\u54C8\u5E0C\uFF08salted hash\uFF09</li></ul></div><div class="space-y-4"><h3 class="text-lg font-semibold">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/sha-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sha-generator-CBgx_yU4.mjs.map
