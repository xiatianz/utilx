import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "hmac-generator",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const secretKey = ref("");
    const message = ref("");
    const hashAlgorithm = ref("SHA-256");
    const outputFormat = ref("hex");
    const hmacResult = ref("");
    const verificationResult = ref(null);
    const batchMessages = ref("");
    const batchResults = ref([]);
    const copyButtonText = ref("\u590D\u5236");
    ref(null);
    const relatedTools = tools.filter(
      (tool) => tool.category === "crypto" && tool.id !== "hmac-generator"
    ).slice(0, 4);
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
    addRecentTool("hmac-generator");
    useSeoMeta({
      title: "HMAC\u751F\u6210\u5668 - \u5728\u7EBFHMAC\u54C8\u5E0C\u8BA1\u7B97\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFHMAC\u751F\u6210\u5668\uFF0C\u652F\u6301SHA-1/SHA-256/SHA-512\u7B49\u591A\u79CD\u7B97\u6CD5\uFF0C\u7528\u4E8E\u6D88\u606F\u8BA4\u8BC1\u548C\u5B8C\u6574\u6027\u9A8C\u8BC1\u3002",
      keywords: ["HMAC", "\u6D88\u606F\u8BA4\u8BC1\u7801", "SHA", "\u54C8\u5E0C", "\u8BA4\u8BC1", "\u5B8C\u6574\u6027\u9A8C\u8BC1"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">HMAC\u751F\u6210\u5668</h1><p class="text-muted-foreground max-w-3xl">HMAC\uFF08Hash-based Message Authentication Code\uFF09\u5728\u7EBF\u751F\u6210\u5668\uFF0C\u652F\u6301\u591A\u79CD\u54C8\u5E0C\u7B97\u6CD5\uFF0C\u7528\u4E8E\u6D88\u606F\u8BA4\u8BC1\u548C\u5B8C\u6574\u6027\u9A8C\u8BC1\u3002</p></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u7B97\u6CD5\u8BBE\u7F6E</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block">\u54C8\u5E0C\u7B97\u6CD5</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="SHA-1"${ssrIncludeBooleanAttr(Array.isArray(hashAlgorithm.value) ? ssrLooseContain(hashAlgorithm.value, "SHA-1") : ssrLooseEqual(hashAlgorithm.value, "SHA-1")) ? " selected" : ""}>HMAC-SHA1 (160\u4F4D)</option><option value="SHA-256"${ssrIncludeBooleanAttr(Array.isArray(hashAlgorithm.value) ? ssrLooseContain(hashAlgorithm.value, "SHA-256") : ssrLooseEqual(hashAlgorithm.value, "SHA-256")) ? " selected" : ""}>HMAC-SHA256 (256\u4F4D) - \u63A8\u8350</option><option value="SHA-384"${ssrIncludeBooleanAttr(Array.isArray(hashAlgorithm.value) ? ssrLooseContain(hashAlgorithm.value, "SHA-384") : ssrLooseEqual(hashAlgorithm.value, "SHA-384")) ? " selected" : ""}>HMAC-SHA384 (384\u4F4D)</option><option value="SHA-512"${ssrIncludeBooleanAttr(Array.isArray(hashAlgorithm.value) ? ssrLooseContain(hashAlgorithm.value, "SHA-512") : ssrLooseEqual(hashAlgorithm.value, "SHA-512")) ? " selected" : ""}>HMAC-SHA512 (512\u4F4D)</option><option value="MD5"${ssrIncludeBooleanAttr(Array.isArray(hashAlgorithm.value) ? ssrLooseContain(hashAlgorithm.value, "MD5") : ssrLooseEqual(hashAlgorithm.value, "MD5")) ? " selected" : ""}>HMAC-MD5 (128\u4F4D) - \u4E0D\u63A8\u8350</option></select><div class="mt-2 text-xs text-muted-foreground"> \u63A8\u8350\uFF1ASHA-256\u6216\u66F4\u9AD8 </div></div><div><label class="text-sm font-medium mb-2 block">\u8F93\u51FA\u683C\u5F0F</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="hex"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "hex") : ssrLooseEqual(outputFormat.value, "hex")) ? " selected" : ""}>\u5341\u516D\u8FDB\u5236 (Hex)</option><option value="base64"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "base64") : ssrLooseEqual(outputFormat.value, "base64")) ? " selected" : ""}>Base64</option><option value="base64url"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "base64url") : ssrLooseEqual(outputFormat.value, "base64url")) ? " selected" : ""}>Base64 URL\u5B89\u5168</option><option value="binary"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "binary") : ssrLooseEqual(outputFormat.value, "binary")) ? " selected" : ""}>\u4E8C\u8FDB\u5236</option></select></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">\u5BC6\u94A5 (Secret Key)</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> \u751F\u6210\u968F\u673A\u5BC6\u94A5 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><textarea placeholder="\u8BF7\u8F93\u5165HMAC\u5BC6\u94A5..." class="w-full h-32 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(secretKey.value)}</textarea><div class="text-sm text-muted-foreground"> \u5BC6\u94A5\u957F\u5EA6\uFF1A${ssrInterpolate(secretKey.value.length)} \u5B57\u7B26 `);
      if (hashAlgorithm.value === "SHA-256" && secretKey.value.length < 32) {
        _push(`<span class="text-amber-600 ml-2"> (\u5EFA\u8BAE\u81F3\u5C1132\u5B57\u7B26) </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">\u6D88\u606F (Message)</label><div class="flex items-center gap-2"><label class="flex items-center gap-2 cursor-pointer"><input type="file" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> \u9009\u62E9\u6587\u4EF6 </span></label><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u8BA1\u7B97HMAC\u7684\u6D88\u606F..." class="w-full h-32 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(message.value)}</textarea><div class="text-sm text-muted-foreground"> \u6D88\u606F\u957F\u5EA6\uFF1A${ssrInterpolate(message.value.length)} \u5B57\u7B26 </div></div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!secretKey.value || !message.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u751F\u6210HMAC </button><button${ssrIncludeBooleanAttr(!secretKey.value || !message.value || !hmacResult.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u9A8C\u8BC1HMAC </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> \u4EA4\u6362\u6570\u636E </button></div>`);
      if (hmacResult.value) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold"> HMAC-${ssrInterpolate(hashAlgorithm.value.replace("SHA-", ""))} \u7ED3\u679C </h3><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors">${ssrInterpolate(copyButtonText.value)}</button><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> \u4E0B\u8F7D </button></div></div><div class="bg-muted/50 rounded-lg p-4"><pre class="text-sm font-mono break-all">${ssrInterpolate(hmacResult.value)}</pre></div><div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"><div><span class="text-muted-foreground">\u7B97\u6CD5\uFF1A</span><span>HMAC-${ssrInterpolate(hashAlgorithm.value)}</span></div><div><span class="text-muted-foreground">\u8F93\u51FA\u957F\u5EA6\uFF1A</span><span>${ssrInterpolate(hmacResult.value.length * 8 / 2)} \u4F4D</span></div><div><span class="text-muted-foreground">\u683C\u5F0F\uFF1A</span><span>${ssrInterpolate(outputFormat.value.toUpperCase())}</span></div><div><span class="text-muted-foreground">\u5B57\u7B26\u6570\uFF1A</span><span>${ssrInterpolate(hmacResult.value.length)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (verificationResult.value) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u9A8C\u8BC1\u7ED3\u679C</h3>`);
        if (verificationResult.value.valid) {
          _push(`<div class="flex items-center gap-3 text-green-600"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><div><div class="font-medium">HMAC\u9A8C\u8BC1\u6210\u529F</div><div class="text-sm">\u6D88\u606F\u5B8C\u6574\u6027\u5F97\u5230\u4FDD\u8BC1</div></div></div>`);
        } else {
          _push(`<div class="flex items-center gap-3 text-red-600"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg><div><div class="font-medium">HMAC\u9A8C\u8BC1\u5931\u8D25</div><div class="text-sm">\u6D88\u606F\u53EF\u80FD\u88AB\u7BE1\u6539\u6216\u5BC6\u94A5\u4E0D\u6B63\u786E</div></div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u6279\u91CF\u751F\u6210HMAC</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u6D88\u606F\u5217\u8868\uFF08\u6BCF\u884C\u4E00\u6761\uFF09</label><textarea placeholder="\u8F93\u5165\u591A\u6761\u6D88\u606F\uFF0C\u6BCF\u884C\u4E00\u6761..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(batchMessages.value)}</textarea></div><button${ssrIncludeBooleanAttr(!secretKey.value || !batchMessages.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u6279\u91CF\u751F\u6210 </button>`);
      if (batchResults.value.length > 0) {
        _push(`<div class="mt-4"><h4 class="font-medium mb-2">\u6279\u91CF\u751F\u6210\u7ED3\u679C</h4><div class="overflow-x-auto"><table class="w-full text-sm border border-border"><thead class="bg-muted/50"><tr><th class="border border-border px-4 py-2 text-left">#</th><th class="border border-border px-4 py-2 text-left">\u6D88\u606F</th><th class="border border-border px-4 py-2 text-left">HMAC</th><th class="border border-border px-4 py-2 text-left">\u64CD\u4F5C</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(batchResults.value, (result, index) => {
          _push(`<tr class="border-b border-border"><td class="border border-border px-4 py-2">${ssrInterpolate(index + 1)}</td><td class="border border-border px-4 py-2 max-w-xs truncate">${ssrInterpolate(result.message)}</td><td class="border border-border px-4 py-2"><code class="text-xs">${ssrInterpolate(result.hmac.substring(0, 40))}...</code></td><td class="border border-border px-4 py-2"><button class="text-primary hover:text-primary/80 text-sm"> \u590D\u5236 </button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u5173\u4E8EHMAC</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">\u4EC0\u4E48\u662FHMAC\uFF1F</h4><p class="text-sm text-muted-foreground"> HMAC\uFF08Hash-based Message Authentication Code\uFF09\u662F\u4E00\u79CD\u4F7F\u7528\u5BC6\u7801\u5B66\u54C8\u5E0C\u51FD\u6570\u548C\u5BC6\u94A5\u6765\u751F\u6210\u6D88\u606F\u8BA4\u8BC1\u7801\u7684\u673A\u5236\u3002 \u5B83\u53EF\u4EE5\u9A8C\u8BC1\u6D88\u606F\u7684\u5B8C\u6574\u6027\u548C\u771F\u5B9E\u6027\uFF0C\u9632\u6B62\u6D88\u606F\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u88AB\u7BE1\u6539\u3002 </p></div><div><h4 class="font-medium text-primary mb-2">HMAC\u7279\u70B9</h4><ul class="text-sm space-y-1"><li>\u2022 \u4F7F\u7528\u5BC6\u94A5\u8FDB\u884C\u8BA4\u8BC1\uFF0C\u9632\u6B62\u4F2A\u9020</li><li>\u2022 \u57FA\u4E8E\u5B89\u5168\u7684\u54C8\u5E0C\u51FD\u6570\uFF08SHA-256\u7B49\uFF09</li><li>\u2022 \u957F\u5EA6\u56FA\u5B9A\uFF0C\u4E0E\u6D88\u606F\u957F\u5EA6\u65E0\u5173</li><li>\u2022 \u8BA1\u7B97\u901F\u5EA6\u5FEB\uFF0C\u9002\u5408\u5927\u89C4\u6A21\u4F7F\u7528</li><li>\u2022 \u6297\u78B0\u649E\u6027\uFF0C\u96BE\u4EE5\u4F2A\u9020\u76F8\u540CHMAC\u7684\u4E0D\u540C\u6D88\u606F</li></ul></div><div><h4 class="font-medium text-primary mb-2">HMAC\u8BA1\u7B97\u516C\u5F0F</h4><div class="bg-muted/50 rounded-lg p-4 font-mono text-sm"> HMAC(K, m) = H((K \u2295 opad) || H((K \u2295 ipad) || m)) </div><div class="mt-2 text-xs text-muted-foreground"> \u5176\u4E2D\uFF1AK\u662F\u5BC6\u94A5\uFF0Cm\u662F\u6D88\u606F\uFF0CH\u662F\u54C8\u5E0C\u51FD\u6570\uFF0C\u2295\u662F\u5F02\u6216\uFF0C||\u662F\u8FDE\u63A5\uFF0Cipad\u548Copad\u662F\u5E38\u91CF </div></div><div><h4 class="font-medium text-primary mb-2">\u5E94\u7528\u573A\u666F</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><h5 class="font-medium mb-1">API\u8BA4\u8BC1</h5><p class="text-muted-foreground">\u9A8C\u8BC1API\u8BF7\u6C42\u7684\u5408\u6CD5\u6027</p></div><div><h5 class="font-medium mb-1">\u6570\u636E\u5B8C\u6574\u6027</h5><p class="text-muted-foreground">\u786E\u4FDD\u6570\u636E\u672A\u88AB\u7BE1\u6539</p></div><div><h5 class="font-medium mb-1">JWT\u7B7E\u540D</h5><p class="text-muted-foreground">JSON Web Token\u7684\u7B7E\u540D\u65B9\u6848</p></div><div><h5 class="font-medium mb-1">\u652F\u4ED8\u9A8C\u8BC1</h5><p class="text-muted-foreground">\u652F\u4ED8\u7F51\u5173\u7684\u8BF7\u6C42\u9A8C\u8BC1</p></div></div></div><div><h4 class="font-medium text-primary mb-2">\u5B89\u5168\u6700\u4F73\u5B9E\u8DF5</h4><ul class="text-sm space-y-1 text-amber-600"><li>\u2022 \u4F7F\u7528\u8DB3\u591F\u957F\u5EA6\u7684\u5BC6\u94A5\uFF08\u81F3\u5C1132\u5B57\u8282\uFF09</li><li>\u2022 \u4F18\u5148\u4F7F\u7528SHA-256\u6216\u66F4\u5F3A\u7684\u54C8\u5E0C\u7B97\u6CD5</li><li>\u2022 \u5BC6\u94A5\u5E94\u968F\u673A\u751F\u6210\u5E76\u59A5\u5584\u4FDD\u7BA1</li><li>\u2022 \u5B9A\u671F\u8F6E\u6362\u5BC6\u94A5\u4EE5\u63D0\u9AD8\u5B89\u5168\u6027</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/hmac-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=hmac-generator-DUOf9lLS.mjs.map
