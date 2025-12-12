import { ref, mergeProps, unref, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
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
  __name: "bcrypt-generate",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const password = ref("");
    const hashResult = ref("");
    const verifyPassword = ref("");
    const verifyHash = ref("");
    const verifyResult = ref(null);
    const saltRounds = ref(10);
    const batchPasswords = ref("");
    const batchResults = ref([]);
    const copyButtonText = ref("\u590D\u5236");
    const relatedTools = tools.filter(
      (tool) => tool.category === "crypto" && tool.id !== "bcrypt-generate"
    ).slice(0, 4);
    const formatViewCount = (count) => {
      if (count >= 1e4) {
        return `${(count / 1e4).toFixed(1)}w+`;
      } else if (count >= 1e3) {
        return `${(count / 1e3).toFixed(1)}k+`;
      }
      return `${count}`;
    };
    const getStrengthLevel = (rounds) => {
      if (rounds <= 6) return "\u4F4E";
      if (rounds <= 8) return "\u4E2D\u7B49";
      if (rounds <= 10) return "\u9AD8";
      return "\u5F88\u9AD8";
    };
    const getCalculationTime = (rounds) => {
      const times = {
        4: "~1ms",
        6: "~10ms",
        8: "~50ms",
        10: "~100ms",
        12: "~400ms"
      };
      return times[rounds] || "~\u81EA\u5B9A\u4E49";
    };
    const extractVersion = (hash) => {
      const match = hash.match(/^\$([a-z0-9]+)\$/i);
      return match ? match[1] : "N/A";
    };
    const extractRounds = (hash) => {
      const parts = hash.split("$");
      return parts.length >= 3 ? parts[2] : "N/A";
    };
    const extractSalt = (hash) => {
      const parts = hash.split("$");
      return parts.length >= 4 ? parts[3].substring(0, 22) : "N/A";
    };
    const extractHash = (hash) => {
      const parts = hash.split("$");
      return parts.length >= 4 ? parts[3].substring(22) : "N/A";
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("bcrypt-generate");
    useSeoMeta({
      title: "Bcrypt\u5BC6\u7801\u54C8\u5E0C\u751F\u6210\u5668 - \u5728\u7EBFBcrypt\u52A0\u5BC6\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFBcrypt\u5BC6\u7801\u54C8\u5E0C\u751F\u6210\u548C\u9A8C\u8BC1\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49salt rounds\uFF0C\u5B89\u5168\u7684\u5BC6\u7801\u5B58\u50A8\u65B9\u6848\u3002",
      keywords: ["Bcrypt", "\u5BC6\u7801\u54C8\u5E0C", "\u5BC6\u7801\u52A0\u5BC6", "salt", "password hashing", "bcrypt generator"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Bcrypt\u5BC6\u7801\u54C8\u5E0C\u751F\u6210\u5668</h1><p class="text-muted-foreground max-w-3xl">Bcrypt\u5BC6\u7801\u54C8\u5E0C\u5728\u7EBF\u751F\u6210\u548C\u9A8C\u8BC1\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49salt rounds\uFF0C\u5B89\u5168\u7684\u5BC6\u7801\u5B58\u50A8\u548C\u9A8C\u8BC1\u65B9\u6848\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">\u5BC6\u7801</label><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div><input${ssrRenderAttr("value", password.value)} type="password" placeholder="\u8BF7\u8F93\u5165\u8981\u54C8\u5E0C\u7684\u5BC6\u7801" class="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><div class="text-sm text-muted-foreground"> \u5B57\u7B26\u6570\uFF1A${ssrInterpolate(password.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">Bcrypt\u54C8\u5E0C\u7ED3\u679C</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors">${ssrInterpolate(copyButtonText.value)}</button><button${ssrIncludeBooleanAttr(!password.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors disabled:opacity-50"> \u751F\u6210\u54C8\u5E0C </button></div></div><div class="w-full min-h-[100px] p-4 border border-border rounded-lg bg-muted/50"><div class="font-mono text-sm break-all">${ssrInterpolate(hashResult.value || "\u54C8\u5E0C\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC...")}</div></div><div class="text-sm text-muted-foreground"> \u957F\u5EA6\uFF1A${ssrInterpolate(hashResult.value.length)} \u5B57\u7B26 </div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u54C8\u5E0C\u8BBE\u7F6E</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block">Salt Rounds (\u8BA1\u7B97\u5F3A\u5EA6)</label><div class="flex items-center gap-4"><input${ssrRenderAttr("value", saltRounds.value)} type="range" min="4" max="12" class="flex-1"><input${ssrRenderAttr("value", saltRounds.value)} type="number" min="4" max="12" class="w-20 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div><div class="mt-2 text-sm text-muted-foreground"> \u5F53\u524D\u5F3A\u5EA6\uFF1A<span class="font-medium">${ssrInterpolate(getStrengthLevel(saltRounds.value))}</span><span class="ml-2">(${ssrInterpolate(getCalculationTime(saltRounds.value))})</span></div></div><div><label class="text-sm font-medium mb-2 block">\u54C8\u5E0C\u4FE1\u606F</label>`);
      if (hashResult.value) {
        _push(`<div class="space-y-2 text-sm"><div><span class="text-muted-foreground">\u7B97\u6CD5\u7248\u672C\uFF1A</span><span class="font-mono">${ssrInterpolate(extractVersion(hashResult.value))}</span></div><div><span class="text-muted-foreground">Salt Rounds\uFF1A</span><span class="font-mono">${ssrInterpolate(extractRounds(hashResult.value))}</span></div><div><span class="text-muted-foreground">Salt\uFF1A</span><span class="font-mono text-xs">${ssrInterpolate(extractSalt(hashResult.value))}</span></div><div><span class="text-muted-foreground">Hash\uFF1A</span><span class="font-mono text-xs">${ssrInterpolate(extractHash(hashResult.value))}</span></div></div>`);
      } else {
        _push(`<div class="text-sm text-muted-foreground"> \u751F\u6210\u54C8\u5E0C\u540E\u663E\u793A\u8BE6\u7EC6\u4FE1\u606F </div>`);
      }
      _push(`</div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u5BC6\u7801\u9A8C\u8BC1</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">Bcrypt\u54C8\u5E0C\u503C</label><textarea placeholder="\u7C98\u8D34\u8981\u9A8C\u8BC1\u7684Bcrypt\u54C8\u5E0C\u503C..." class="w-full h-24 p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(verifyHash.value)}</textarea></div><div><label class="text-sm font-medium mb-2 block">\u8F93\u5165\u5BC6\u7801</label><input${ssrRenderAttr("value", verifyPassword.value)} type="password" placeholder="\u8F93\u5165\u8981\u9A8C\u8BC1\u7684\u5BC6\u7801" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div><button${ssrIncludeBooleanAttr(!verifyHash.value || !verifyPassword.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u9A8C\u8BC1\u5BC6\u7801 </button>`);
      if (verifyResult.value) {
        _push(`<div class="mt-4">`);
        if (verifyResult.value.valid) {
          _push(`<div class="flex items-center gap-2 text-green-600"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span>\u5BC6\u7801\u9A8C\u8BC1\u6210\u529F\uFF01</span></div>`);
        } else {
          _push(`<div class="flex items-center gap-2 text-red-600"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg><span>\u5BC6\u7801\u9A8C\u8BC1\u5931\u8D25\uFF01</span></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u6279\u91CF\u54C8\u5E0C</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u5BC6\u7801\u5217\u8868\uFF08\u6BCF\u884C\u4E00\u4E2A\uFF09</label><textarea placeholder="\u8F93\u5165\u591A\u4E2A\u5BC6\u7801\uFF0C\u6BCF\u884C\u4E00\u4E2A..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(batchPasswords.value)}</textarea></div><button${ssrIncludeBooleanAttr(!batchPasswords.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u6279\u91CF\u751F\u6210\u54C8\u5E0C </button>`);
      if (batchResults.value.length > 0) {
        _push(`<div class="mt-4"><h4 class="font-medium mb-2">\u6279\u91CF\u54C8\u5E0C\u7ED3\u679C</h4><div class="overflow-x-auto"><table class="w-full text-sm border border-border"><thead class="bg-muted/50"><tr><th class="border border-border px-4 py-2 text-left">#</th><th class="border border-border px-4 py-2 text-left">\u539F\u59CB\u5BC6\u7801</th><th class="border border-border px-4 py-2 text-left">\u54C8\u5E0C\u503C</th><th class="border border-border px-4 py-2 text-left">\u64CD\u4F5C</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(batchResults.value, (result, index) => {
          _push(`<tr class="border-b border-border"><td class="border border-border px-4 py-2">${ssrInterpolate(index + 1)}</td><td class="border border-border px-4 py-2 text-muted-foreground">\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022</td><td class="border border-border px-4 py-2"><code class="text-xs">${ssrInterpolate(result.hash.substring(0, 30))}...</code></td><td class="border border-border px-4 py-2"><button class="text-primary hover:text-primary/80 text-sm"> \u590D\u5236 </button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u5173\u4E8EBcrypt</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">\u4EC0\u4E48\u662FBcrypt\uFF1F</h4><p class="text-sm text-muted-foreground"> Bcrypt\u662F\u4E00\u79CD\u57FA\u4E8EBlowfish\u52A0\u5BC6\u7B97\u6CD5\u7684\u5BC6\u7801\u54C8\u5E0C\u51FD\u6570\uFF0C\u4E13\u95E8\u4E3A\u5BC6\u7801\u54C8\u5E0C\u8BBE\u8BA1\u3002\u5B83\u5177\u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A\u5185\u7F6Esalt\u3001\u53EF\u8C03\u6574\u7684\u8BA1\u7B97\u6210\u672C\u3001\u6297\u5F69\u8679\u8868\u653B\u51FB\u3001\u6297\u66B4\u529B\u7834\u89E3\u3002 </p></div><div><h4 class="font-medium text-primary mb-2">Bcrypt\u54C8\u5E0C\u683C\u5F0F</h4><div class="bg-muted/50 rounded-lg p-4 font-mono text-sm"><div class="mb-2">$2b$12$rNSeS9JLGPY5YI6HxGjEoe.</div><div class="text-xs text-muted-foreground space-y-1"><div>$2b$ - \u7B97\u6CD5\u7248\u672C\u6807\u8BC6\u7B26</div><div>12 - Salt rounds (\u8BA1\u7B97\u5F3A\u5EA6)</div><div>rNSeS9JLGPY5YI6HxGjEoe. - 22\u5B57\u7B26\u7684salt</div><div>\u5269\u4F59\u90E8\u5206 - \u54C8\u5E0C\u7ED3\u679C</div></div></div></div><div><h4 class="font-medium text-primary mb-2">Salt Rounds\u8BF4\u660E</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><h5 class="font-medium mb-1">\u63A8\u8350\u8BBE\u7F6E</h5><ul class="space-y-1 text-muted-foreground"><li>\u2022 4-8: \u6D4B\u8BD5\u73AF\u5883</li><li>\u2022 10-12: \u751F\u4EA7\u73AF\u5883\u63A8\u8350</li><li>\u2022 12+: \u9AD8\u5B89\u5168\u8981\u6C42</li></ul></div><div><h5 class="font-medium mb-1">\u6027\u80FD\u5F71\u54CD</h5><ul class="space-y-1 text-muted-foreground"><li>\u2022 \u6BCF\u589E\u52A01\u8F6E\uFF0C\u8BA1\u7B97\u65F6\u95F4\u7FFB\u500D</li><li>\u2022 10\u8F6E: \u7EA6100ms</li><li>\u2022 12\u8F6E: \u7EA6400ms</li></ul></div></div></div><div><h4 class="font-medium text-primary mb-2">\u5B89\u5168\u6700\u4F73\u5B9E\u8DF5</h4><ul class="text-sm space-y-1 text-amber-600"><li>\u2022 \u4F7F\u7528\u81F3\u5C1110 rounds</li><li>\u2022 \u4E0D\u8981\u9650\u5236\u5BC6\u7801\u957F\u5EA6</li><li>\u2022 \u7ED3\u5408\u901F\u7387\u9650\u5236\u9632\u6B62\u66B4\u529B\u7834\u89E3</li><li>\u2022 \u5B9A\u671F\u66F4\u65B0\u5BC6\u7801\u54C8\u5E0C\u7B97\u6CD5</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(unref(relatedTools), (tool) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/bcrypt-generate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bcrypt-generate-C7sRyesV.mjs.map
