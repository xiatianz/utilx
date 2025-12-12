import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "bcrypt-verify",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const password = ref("");
    const bcryptHash = ref("");
    const verifyResult = ref(null);
    const batchPasswords = ref("");
    const batchHashes = ref("");
    const batchResults = ref([]);
    const analyzeHash = ref("");
    const hashAnalysis = ref(null);
    const passwordStrength = ref("");
    const strengthResult = ref(null);
    const relatedTools = tools.filter(
      (tool) => tool.category === "crypto" && tool.id !== "bcrypt-verify"
    ).slice(0, 4);
    const formatViewCount = (count) => {
      if (count >= 1e4) {
        return `${(count / 1e4).toFixed(1)}w+`;
      } else if (count >= 1e3) {
        return `${(count / 1e3).toFixed(1)}k+`;
      }
      return `${count}`;
    };
    const extractVersion = (hash) => {
      const parts = hash.split("$");
      return parts.length >= 2 ? parts[1] : "N/A";
    };
    const extractCost = (hash) => {
      const parts = hash.split("$");
      return parts.length >= 3 ? parts[2] : "N/A";
    };
    const getSecurityLevel = (cost) => {
      const numCost = parseInt(cost) || 0;
      if (numCost <= 6) return "\u4F4E\uFF08\u4E0D\u5B89\u5168\uFF09";
      if (numCost <= 8) return "\u4E2D\u7B49";
      if (numCost <= 10) return "\u9AD8\uFF08\u63A8\u8350\uFF09";
      return "\u5F88\u9AD8";
    };
    const getSecurityLevelClass = (cost) => {
      const numCost = parseInt(cost) || 0;
      if (numCost <= 6) return "text-red-600";
      if (numCost <= 8) return "text-amber-600";
      return "text-green-600";
    };
    const getStrengthColor = (score) => {
      if (score < 40) return "text-red-600";
      if (score < 70) return "text-amber-600";
      return "text-green-600";
    };
    const getStrengthBarColor = (score) => {
      if (score < 40) return "bg-red-600";
      if (score < 70) return "bg-amber-600";
      return "bg-green-600";
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("bcrypt-verify");
    useSeoMeta({
      title: "Bcrypt\u5BC6\u7801\u9A8C\u8BC1\u5668 - \u5728\u7EBFBcrypt\u54C8\u5E0C\u9A8C\u8BC1\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFBcrypt\u5BC6\u7801\u9A8C\u8BC1\u5DE5\u5177\uFF0C\u9A8C\u8BC1\u5BC6\u7801\u662F\u5426\u4E0EBcrypt\u54C8\u5E0C\u5339\u914D\uFF0C\u652F\u6301\u6279\u91CF\u9A8C\u8BC1\u548C\u5BC6\u7801\u5F3A\u5EA6\u68C0\u67E5\u3002",
      keywords: ["Bcrypt", "\u5BC6\u7801\u9A8C\u8BC1", "\u54C8\u5E0C\u9A8C\u8BC1", "password verify", "bcrypt check"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Bcrypt\u5BC6\u7801\u9A8C\u8BC1\u5668</h1><p class="text-muted-foreground max-w-3xl">\u5728\u7EBF\u9A8C\u8BC1Bcrypt\u54C8\u5E0C\u5BC6\u7801\uFF0C\u68C0\u67E5\u5BC6\u7801\u662F\u5426\u4E0E\u5B58\u50A8\u7684Bcrypt\u54C8\u5E0C\u5339\u914D\u3002\u652F\u6301\u6279\u91CF\u9A8C\u8BC1\u548C\u8BE6\u7EC6\u7684\u9A8C\u8BC1\u7ED3\u679C\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">\u539F\u59CB\u5BC6\u7801</label><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div><input${ssrRenderAttr("value", password.value)} type="password" placeholder="\u8BF7\u8F93\u5165\u8981\u9A8C\u8BC1\u7684\u5BC6\u7801" class="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><div class="text-sm text-muted-foreground"> \u5BC6\u7801\u957F\u5EA6\uFF1A${ssrInterpolate(password.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">Bcrypt\u54C8\u5E0C\u503C</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> \u52A0\u8F7D\u793A\u4F8B </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><input${ssrRenderAttr("value", bcryptHash.value)} type="text" placeholder="\u8BF7\u8F93\u5165Bcrypt\u54C8\u5E0C\u503C ($2b$12$...)" class="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">`);
      if (bcryptHash.value) {
        _push(`<div class="text-sm space-y-1"><span class="text-muted-foreground">\u54C8\u5E0C\u4FE1\u606F\uFF1A</span><div>\u7248\u672C\uFF1A${ssrInterpolate(extractVersion(bcryptHash.value))}</div><div>Cost\uFF1A${ssrInterpolate(extractCost(bcryptHash.value))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!password.value || !bcryptHash.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u9A8C\u8BC1\u5BC6\u7801 </button><button${ssrIncludeBooleanAttr(!password.value || !bcryptHash.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u6279\u91CF\u9A8C\u8BC1 </button></div>`);
      if (verifyResult.value) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u9A8C\u8BC1\u7ED3\u679C</h3><div class="${ssrRenderClass([verifyResult.value.valid ? "text-green-600" : "text-red-600", "flex items-center gap-4"])}"><div class="${ssrRenderClass([verifyResult.value.valid ? "bg-green-100" : "bg-red-100", "p-3 rounded-full"])}">`);
        if (verifyResult.value.valid) {
          _push(`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
        } else {
          _push(`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
        }
        _push(`</div><div><div class="text-xl font-medium mb-1">${ssrInterpolate(verifyResult.value.valid ? "\u5BC6\u7801\u9A8C\u8BC1\u6210\u529F\uFF01" : "\u5BC6\u7801\u9A8C\u8BC1\u5931\u8D25\uFF01")}</div><div class="text-sm opacity-80">${ssrInterpolate(verifyResult.value.valid ? "\u8F93\u5165\u7684\u5BC6\u7801\u4E0E\u54C8\u5E0C\u503C\u5339\u914D" : "\u8F93\u5165\u7684\u5BC6\u7801\u4E0E\u54C8\u5E0C\u503C\u4E0D\u5339\u914D")}</div></div></div>`);
        if (verifyResult.value.details) {
          _push(`<div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"><div><span class="text-muted-foreground">\u7B97\u6CD5\u7248\u672C\uFF1A</span><span>${ssrInterpolate(verifyResult.value.details.version)}</span></div><div><span class="text-muted-foreground">Cost\u503C\uFF1A</span><span>${ssrInterpolate(verifyResult.value.details.cost)}</span></div><div><span class="text-muted-foreground">\u8BA1\u7B97\u65F6\u95F4\uFF1A</span><span>${ssrInterpolate(verifyResult.value.details.time)}ms</span></div><div><span class="text-muted-foreground">\u5B89\u5168\u7EA7\u522B\uFF1A</span><span class="font-medium">${ssrInterpolate(getSecurityLevel(verifyResult.value.details.cost))}</span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u6279\u91CF\u9A8C\u8BC1</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u5BC6\u7801\u5217\u8868\uFF08\u6BCF\u884C\u4E00\u4E2A\uFF09</label><textarea placeholder="\u8F93\u5165\u591A\u4E2A\u5BC6\u7801\uFF0C\u6BCF\u884C\u4E00\u4E2A..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(batchPasswords.value)}</textarea></div><div><label class="text-sm font-medium mb-2 block">Bcrypt\u54C8\u5E0C\u503C\uFF08\u4E0E\u5BC6\u7801\u5217\u8868\u4E00\u4E00\u5BF9\u5E94\uFF09</label><textarea placeholder="\u8F93\u5165\u5BF9\u5E94\u7684Bcrypt\u54C8\u5E0C\u503C\uFF0C\u6BCF\u884C\u4E00\u4E2A..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(batchHashes.value)}</textarea></div><button${ssrIncludeBooleanAttr(!batchPasswords.value || !batchHashes.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u5F00\u59CB\u6279\u91CF\u9A8C\u8BC1 </button>`);
      if (batchResults.value.length > 0) {
        _push(`<div class="mt-6"><h4 class="font-medium mb-3">\u6279\u91CF\u9A8C\u8BC1\u7ED3\u679C</h4><div class="space-y-2"><!--[-->`);
        ssrRenderList(batchResults.value, (result, index) => {
          _push(`<div class="${ssrRenderClass([result.valid ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200", "flex items-center justify-between p-3 rounded-lg"])}"><div class="flex items-center gap-3"><span class="text-sm font-medium">\u5BC6\u7801 ${ssrInterpolate(index + 1)}</span>`);
          if (result.valid) {
            _push(`<span class="text-green-600 text-sm">\u2713 \u5339\u914D</span>`);
          } else {
            _push(`<span class="text-red-600 text-sm">\u2717 \u4E0D\u5339\u914D</span>`);
          }
          _push(`</div><div class="text-sm text-muted-foreground"> Cost: ${ssrInterpolate(result.cost)} | \u7528\u65F6: ${ssrInterpolate(result.time)}ms </div></div>`);
        });
        _push(`<!--]--></div><div class="mt-4 text-center"><div class="text-lg"> \u6210\u529F: <span class="text-green-600 font-medium">${ssrInterpolate(batchResults.value.filter((r) => r.valid).length)}</span> / \u603B\u8BA1: <span class="font-medium">${ssrInterpolate(batchResults.value.length)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u54C8\u5E0C\u5206\u6790\u5668</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u8F93\u5165Bcrypt\u54C8\u5E0C\u503C\u8FDB\u884C\u5206\u6790</label><input${ssrRenderAttr("value", analyzeHash.value)} type="text" placeholder="\u8F93\u5165Bcrypt\u54C8\u5E0C\u503C..." class="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"></div>`);
      if (hashAnalysis.value) {
        _push(`<div class="bg-muted/50 rounded-lg p-4"><h4 class="font-medium mb-3">\u54C8\u5E0C\u5206\u6790\u7ED3\u679C</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><span class="text-muted-foreground">\u7B97\u6CD5\u6807\u8BC6\uFF1A</span><span class="font-mono">${ssrInterpolate(hashAnalysis.value.identifier)}</span></div><div><span class="text-muted-foreground">\u7248\u672C\uFF1A</span><span>${ssrInterpolate(hashAnalysis.value.version)}</span></div><div><span class="text-muted-foreground">Cost\u503C\uFF1A</span><span class="font-medium">${ssrInterpolate(hashAnalysis.value.cost)}</span></div><div><span class="text-muted-foreground">Salt\uFF1A</span><code class="text-xs">${ssrInterpolate(hashAnalysis.value.salt)}</code></div><div><span class="text-muted-foreground">Hash\uFF1A</span><code class="text-xs">${ssrInterpolate(hashAnalysis.value.hash.substring(0, 30))}...</code></div><div><span class="text-muted-foreground">\u5B89\u5168\u7EA7\u522B\uFF1A</span><span class="${ssrRenderClass(getSecurityLevelClass(hashAnalysis.value.cost))}">${ssrInterpolate(getSecurityLevel(hashAnalysis.value.cost))}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u5BC6\u7801\u5F3A\u5EA6\u68C0\u67E5</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u8F93\u5165\u5BC6\u7801\u68C0\u67E5\u5F3A\u5EA6</label><input${ssrRenderAttr("value", passwordStrength.value)} type="password" placeholder="\u8F93\u5165\u5BC6\u7801..." class="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div>`);
      if (strengthResult.value) {
        _push(`<div class="space-y-3"><div><div class="flex items-center justify-between mb-1"><span class="text-sm font-medium">\u5BC6\u7801\u5F3A\u5EA6</span><span class="${ssrRenderClass([getStrengthColor(strengthResult.value.score), "text-sm font-medium"])}">${ssrInterpolate(strengthResult.value.level)}</span></div><div class="w-full bg-gray-200 rounded-full h-2"><div class="${ssrRenderClass([getStrengthBarColor(strengthResult.value.score), "h-2 rounded-full transition-all"])}" style="${ssrRenderStyle({ width: strengthResult.value.score + "%" })}"></div></div></div><div class="grid grid-cols-2 gap-2 text-sm"><div class="flex items-center gap-2"><span class="${ssrRenderClass(passwordStrength.value.length >= 8 ? "text-green-600" : "text-red-600")}">\u2713</span><span>\u81F3\u5C118\u4E2A\u5B57\u7B26</span></div><div class="flex items-center gap-2"><span class="${ssrRenderClass(/[A-Z]/.test(passwordStrength.value) ? "text-green-600" : "text-red-600")}">\u2713</span><span>\u5305\u542B\u5927\u5199\u5B57\u6BCD</span></div><div class="flex items-center gap-2"><span class="${ssrRenderClass(/[a-z]/.test(passwordStrength.value) ? "text-green-600" : "text-red-600")}">\u2713</span><span>\u5305\u542B\u5C0F\u5199\u5B57\u6BCD</span></div><div class="flex items-center gap-2"><span class="${ssrRenderClass(/[0-9]/.test(passwordStrength.value) ? "text-green-600" : "text-red-600")}">\u2713</span><span>\u5305\u542B\u6570\u5B57</span></div><div class="flex items-center gap-2"><span class="${ssrRenderClass(/[^A-Za-z0-9]/.test(passwordStrength.value) ? "text-green-600" : "text-red-600")}">\u2713</span><span>\u5305\u542B\u7279\u6B8A\u5B57\u7B26</span></div><div class="flex items-center gap-2"><span class="${ssrRenderClass(passwordStrength.value.length >= 12 ? "text-green-600" : "text-amber-600")}">\u2713</span><span>\u5EFA\u8BAE12\u4F4D\u4EE5\u4E0A</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u5173\u4E8EBcrypt\u9A8C\u8BC1</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">\u9A8C\u8BC1\u539F\u7406</h4><p class="text-sm text-muted-foreground"> Bcrypt\u9A8C\u8BC1\u901A\u8FC7\u5C06\u8F93\u5165\u7684\u5BC6\u7801\u4E0E\u5B58\u50A8\u7684\u54C8\u5E0C\u503C\u8FDB\u884C\u6BD4\u8F83\u3002Bcrypt\u4F1A\u4ECE\u54C8\u5E0C\u503C\u4E2D\u63D0\u53D6salt\u548Ccost\u53C2\u6570\uFF0C \u4F7F\u7528\u76F8\u540C\u7684\u53C2\u6570\u8BA1\u7B97\u8F93\u5165\u5BC6\u7801\u7684\u54C8\u5E0C\u503C\uFF0C\u5982\u679C\u4E24\u4E2A\u54C8\u5E0C\u503C\u5339\u914D\uFF0C\u5219\u5BC6\u7801\u6B63\u786E\u3002 </p></div><div><h4 class="font-medium text-primary mb-2">\u65F6\u5E8F\u653B\u51FB\u9632\u62A4</h4><p class="text-sm text-muted-foreground"> Bcrypt\u6BD4\u8F83\u91C7\u7528\u6052\u5B9A\u65F6\u95F4\u7B97\u6CD5\uFF0C\u9632\u6B62\u901A\u8FC7\u6BD4\u8F83\u65F6\u95F4\u5DEE\u5F02\u6765\u63A8\u65AD\u5BC6\u7801\u4FE1\u606F\u3002\u8FD9\u662F\u5B89\u5168\u9A8C\u8BC1\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\u3002 </p></div><div><h4 class="font-medium text-primary mb-2">\u9A8C\u8BC1\u6700\u4F73\u5B9E\u8DF5</h4><ul class="text-sm space-y-1"><li>\u2022 \u59CB\u7EC8\u4F7F\u7528\u6052\u5B9A\u65F6\u95F4\u6BD4\u8F83\u51FD\u6570</li><li>\u2022 \u4E0D\u8981\u63D0\u4F9B\u8BE6\u7EC6\u7684\u9519\u8BEF\u4FE1\u606F\uFF08\u7528\u6237\u4E0D\u5B58\u5728/\u5BC6\u7801\u9519\u8BEF\uFF09</li><li>\u2022 \u5B9E\u65BD\u8D26\u6237\u9501\u5B9A\u673A\u5236\u9632\u6B62\u66B4\u529B\u7834\u89E3</li><li>\u2022 \u8BB0\u5F55\u5931\u8D25\u7684\u767B\u5F55\u5C1D\u8BD5\u5E76\u76D1\u63A7\u5F02\u5E38</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/bcrypt-verify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bcrypt-verify-CDCFSnA0.mjs.map
