import { ref, computed, mergeProps, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
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
  __name: "rsa-generate",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const keySize = ref("2048");
    const keyFormat = ref("PEM");
    const keyType = ref("RSA");
    const includeExponent = ref(false);
    const includePassphrase = ref(false);
    const publicExponent = ref("65537");
    const passphrase = ref("");
    const publicKey = ref("");
    const privateKey = ref("");
    const isGenerating = ref(false);
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "rsa-generate"
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
    const getEquivalentStrength = (bits) => {
      const strengths = {
        "1024": "80\u4F4D",
        "2048": "112\u4F4D",
        "3072": "128\u4F4D",
        "4096": "152\u4F4D"
      };
      return strengths[bits] || "N/A";
    };
    const getRecommendedUsage = (bits) => {
      const usages = {
        "1024": "\u4EC5\u7528\u4E8E\u6D4B\u8BD5\uFF08\u5DF2\u4E0D\u5B89\u5168\uFF09",
        "2048": "\u5E38\u89C4\u5E94\u7528\u3001\u6570\u5B57\u7B7E\u540D",
        "3072": "\u654F\u611F\u6570\u636E\u4FDD\u62A4",
        "4096": "\u9AD8\u4EF7\u503C\u8D44\u4EA7\u3001\u957F\u671F\u4FDD\u62A4"
      };
      return usages[bits] || "N/A";
    };
    const getCrackTime = (bits) => {
      const times = {
        "1024": "\u6570\u5C0F\u65F6\u5230\u6570\u5929",
        "2048": "\u6570\u767E\u4E07\u5E74",
        "3072": "\u6570\u5341\u4EBF\u5E74",
        "4096": "\u6570\u4E07\u4EBF\u5E74"
      };
      return times[bits] || "N/A";
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("rsa-generate");
    useSeoMeta({
      title: "RSA\u5BC6\u94A5\u751F\u6210\u5668 - \u5728\u7EBFRSA\u516C\u94A5\u79C1\u94A5\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFRSA\u5BC6\u94A5\u5BF9\u751F\u6210\u5668\uFF0C\u652F\u63011024/2048/3072/4096\u4F4D\u5BC6\u94A5\uFF0CPEM\u683C\u5F0F\uFF0C\u516C\u94A5\u79C1\u94A5\u751F\u6210\u548C\u4E0B\u8F7D\u3002",
      keywords: ["RSA", "\u5BC6\u94A5\u751F\u6210\u5668", "\u516C\u94A5", "\u79C1\u94A5", "\u975E\u5BF9\u79F0\u52A0\u5BC6", "PEM"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">RSA\u5BC6\u94A5\u751F\u6210\u5668</h1><p class="text-muted-foreground max-w-3xl">\u5728\u7EBF\u751F\u6210RSA\u516C\u94A5\u548C\u79C1\u94A5\u5BF9\uFF0C\u652F\u6301\u591A\u79CD\u5BC6\u94A5\u957F\u5EA6\uFF081024/2048/4096\u4F4D\uFF09\uFF0C\u53EF\u5BFC\u51FA\u4E3APEM\u3001DER\u7B49\u683C\u5F0F\u3002</p></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u5BC6\u94A5\u8BBE\u7F6E</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><div><label class="text-sm font-medium mb-2 block">\u5BC6\u94A5\u957F\u5EA6</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="1024"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "1024") : ssrLooseEqual(keySize.value, "1024")) ? " selected" : ""}>1024 \u4F4D\uFF08\u4E0D\u63A8\u8350\uFF09</option><option value="2048"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "2048") : ssrLooseEqual(keySize.value, "2048")) ? " selected" : ""}>2048 \u4F4D\uFF08\u63A8\u8350\uFF09</option><option value="3072"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "3072") : ssrLooseEqual(keySize.value, "3072")) ? " selected" : ""}>3072 \u4F4D</option><option value="4096"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "4096") : ssrLooseEqual(keySize.value, "4096")) ? " selected" : ""}>4096 \u4F4D\uFF08\u9AD8\u5B89\u5168\uFF09</option></select><div class="mt-2 text-xs text-muted-foreground"> \u66F4\u957F\u7684\u5BC6\u94A5\u63D0\u4F9B\u66F4\u9AD8\u7684\u5B89\u5168\u6027\uFF0C\u4F46\u751F\u6210\u901F\u5EA6\u8F83\u6162 </div></div><div><label class="text-sm font-medium mb-2 block">\u5BC6\u94A5\u683C\u5F0F</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="PEM"${ssrIncludeBooleanAttr(Array.isArray(keyFormat.value) ? ssrLooseContain(keyFormat.value, "PEM") : ssrLooseEqual(keyFormat.value, "PEM")) ? " selected" : ""}>PEM (\u6587\u672C\u683C\u5F0F)</option><option value="DER"${ssrIncludeBooleanAttr(Array.isArray(keyFormat.value) ? ssrLooseContain(keyFormat.value, "DER") : ssrLooseEqual(keyFormat.value, "DER")) ? " selected" : ""}>DER (\u4E8C\u8FDB\u5236\u683C\u5F0F)</option></select></div><div><label class="text-sm font-medium mb-2 block">\u5BC6\u94A5\u7C7B\u578B</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="RSA"${ssrIncludeBooleanAttr(Array.isArray(keyType.value) ? ssrLooseContain(keyType.value, "RSA") : ssrLooseEqual(keyType.value, "RSA")) ? " selected" : ""}>RSA</option><option value="RSA-OAEP"${ssrIncludeBooleanAttr(Array.isArray(keyType.value) ? ssrLooseContain(keyType.value, "RSA-OAEP") : ssrLooseEqual(keyType.value, "RSA-OAEP")) ? " selected" : ""}>RSA-OAEP</option></select></div></div><div class="mt-6"><label class="text-sm font-medium mb-3 block">\u9644\u52A0\u9009\u9879</label><div class="flex flex-wrap gap-4"><label class="flex items-center gap-2"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(includeExponent.value) ? ssrLooseContain(includeExponent.value, null) : includeExponent.value) ? " checked" : ""} class="rounded border-border"><span class="text-sm">\u81EA\u5B9A\u4E49\u6307\u6570</span></label><label class="flex items-center gap-2"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(includePassphrase.value) ? ssrLooseContain(includePassphrase.value, null) : includePassphrase.value) ? " checked" : ""} class="rounded border-border"><span class="text-sm">\u79C1\u94A5\u5BC6\u7801\u4FDD\u62A4</span></label></div></div>`);
      if (includeExponent.value) {
        _push(`<div class="mt-4"><label class="text-sm font-medium mb-2 block">\u516C\u94A5\u6307\u6570</label><input${ssrRenderAttr("value", publicExponent.value)} type="number" placeholder="65537" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (includePassphrase.value) {
        _push(`<div class="mt-4"><label class="text-sm font-medium mb-2 block">\u79C1\u94A5\u5BC6\u7801</label><input${ssrRenderAttr("value", passphrase.value)} type="password" placeholder="\u8F93\u5165\u5BC6\u7801\u4FDD\u62A4\u79C1\u94A5" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(isGenerating.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(isGenerating.value ? "\u751F\u6210\u4E2D..." : "\u751F\u6210\u5BC6\u94A5\u5BF9")}</button><button${ssrIncludeBooleanAttr(!publicKey.value || !privateKey.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u4E0B\u8F7D\u5BC6\u94A5\u6587\u4EF6 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> \u6E05\u7A7A </button></div>`);
      if (isGenerating.value) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><div class="flex items-center gap-3"><div class="animate-spin w-5 h-5 border-2 border-primary border-t-transparent rounded-full"></div><span>\u6B63\u5728\u751F\u6210 ${ssrInterpolate(keySize.value)} \u4F4DRSA\u5BC6\u94A5\u5BF9\uFF0C\u8BF7\u7A0D\u5019...</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (publicKey.value && privateKey.value) {
        _push(`<div class="space-y-6 mb-8"><div class="border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><span>\u516C\u94A5 (Public Key)</span><span class="text-sm text-muted-foreground">(${ssrInterpolate(keySize.value)} bits)</span></h3><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> \u590D\u5236 </button></div></div><pre class="bg-muted/50 rounded-lg p-4 overflow-x-auto text-xs font-mono">${ssrInterpolate(publicKey.value)}</pre></div><div class="border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><span>\u79C1\u94A5 (Private Key)</span><span class="text-sm text-muted-foreground">(${ssrInterpolate(keySize.value)} bits)</span>`);
        if (includePassphrase.value && passphrase.value) {
          _push(`<span class="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded"> \u5DF2\u52A0\u5BC6 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h3><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> \u590D\u5236 </button></div></div><pre class="bg-muted/50 rounded-lg p-4 overflow-x-auto text-xs font-mono">${ssrInterpolate(privateKey.value)}</pre></div><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u5BC6\u94A5\u4FE1\u606F</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-primary mb-2">\u57FA\u672C\u53C2\u6570</h4><ul class="space-y-2 text-sm"><li><span class="text-muted-foreground">\u5BC6\u94A5\u957F\u5EA6\uFF1A</span><span>${ssrInterpolate(keySize.value)} \u4F4D</span></li><li><span class="text-muted-foreground">\u5BC6\u94A5\u683C\u5F0F\uFF1A</span><span>${ssrInterpolate(keyFormat.value)}</span></li><li><span class="text-muted-foreground">\u5BC6\u94A5\u7C7B\u578B\uFF1A</span><span>${ssrInterpolate(keyType.value)}</span></li>`);
        if (publicExponent.value) {
          _push(`<li><span class="text-muted-foreground">\u516C\u94A5\u6307\u6570\uFF1A</span><span>${ssrInterpolate(publicExponent.value)}</span></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div><div><h4 class="font-medium text-primary mb-2">\u5B89\u5168\u5F3A\u5EA6</h4><ul class="space-y-2 text-sm"><li><span class="text-muted-foreground">\u5BF9\u79F0\u5BC6\u94A5\u7B49\u6548\u5F3A\u5EA6\uFF1A</span><span>${ssrInterpolate(getEquivalentStrength(keySize.value))}</span></li><li><span class="text-muted-foreground">\u63A8\u8350\u7528\u9014\uFF1A</span><span>${ssrInterpolate(getRecommendedUsage(keySize.value))}</span></li><li><span class="text-muted-foreground">\u9884\u8BA1\u7834\u89E3\u65F6\u95F4\uFF1A</span><span>${ssrInterpolate(getCrackTime(keySize.value))}</span></li></ul></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u5173\u4E8ERSA\u52A0\u5BC6</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">\u7B97\u6CD5\u539F\u7406</h4><p class="text-sm text-muted-foreground"> RSA\uFF08Rivest-Shamir-Adleman\uFF09\u662F\u4E00\u79CD\u975E\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u57FA\u4E8E\u5927\u6570\u5206\u89E3\u7684\u6570\u5B66\u96BE\u9898\u3002\u5B83\u4F7F\u7528\u4E00\u5BF9\u5BC6\u94A5\uFF1A\u516C\u94A5\u7528\u4E8E\u52A0\u5BC6\uFF0C\u79C1\u94A5\u7528\u4E8E\u89E3\u5BC6\u3002 </p></div><div><h4 class="font-medium text-primary mb-2">\u5BC6\u94A5\u957F\u5EA6\u4E0E\u5B89\u5168\u6027</h4><div class="overflow-x-auto"><table class="w-full text-sm border border-border"><thead class="bg-muted/50"><tr><th class="border border-border px-4 py-2 text-left">\u5BC6\u94A5\u957F\u5EA6</th><th class="border border-border px-4 py-2 text-left">\u7B49\u6548\u5BF9\u79F0\u5BC6\u94A5\u5F3A\u5EA6</th><th class="border border-border px-4 py-2 text-left">\u5B89\u5168\u7EA7\u522B</th><th class="border border-border px-4 py-2 text-left">\u63A8\u8350\u7528\u9014</th></tr></thead><tbody><tr><td class="border border-border px-4 py-2">1024\u4F4D</td><td class="border border-border px-4 py-2">80\u4F4D</td><td class="border border-border px-4 py-2 text-amber-600">\u4F4E\uFF08\u4E0D\u63A8\u8350\uFF09</td><td class="border border-border px-4 py-2">\u4EC5\u7528\u4E8E\u6D4B\u8BD5</td></tr><tr><td class="border border-border px-4 py-2">2048\u4F4D</td><td class="border border-border px-4 py-2">112\u4F4D</td><td class="border border-border px-4 py-2 text-green-600">\u4E2D\u7B49\uFF08\u63A8\u8350\uFF09</td><td class="border border-border px-4 py-2">\u5E38\u89C4\u5E94\u7528</td></tr><tr><td class="border border-border px-4 py-2">3072\u4F4D</td><td class="border border-border px-4 py-2">128\u4F4D</td><td class="border border-border px-4 py-2 text-green-600">\u9AD8</td><td class="border border-border px-4 py-2">\u654F\u611F\u6570\u636E</td></tr><tr><td class="border border-border px-4 py-2">4096\u4F4D</td><td class="border border-border px-4 py-2">152\u4F4D</td><td class="border border-border px-4 py-2 text-green-600">\u5F88\u9AD8</td><td class="border border-border px-4 py-2">\u9AD8\u4EF7\u503C\u8D44\u4EA7</td></tr></tbody></table></div></div><div><h4 class="font-medium text-primary mb-2">\u4F7F\u7528\u573A\u666F</h4><ul class="text-sm space-y-1"><li>\u2022 \u6570\u5B57\u7B7E\u540D\uFF1A\u9A8C\u8BC1\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u6765\u6E90</li><li>\u2022 \u5BC6\u94A5\u4EA4\u6362\uFF1A\u5B89\u5168\u5730\u4F20\u8F93\u5BF9\u79F0\u52A0\u5BC6\u5BC6\u94A5</li><li>\u2022 \u5C0F\u6570\u636E\u52A0\u5BC6\uFF1A\u52A0\u5BC6\u5C11\u91CF\u654F\u611F\u6570\u636E</li><li>\u2022 SSL/TLS\u8BC1\u4E66\uFF1AHTTPS\u7F51\u7AD9\u5B89\u5168\u901A\u4FE1</li></ul></div><div><h4 class="font-medium text-primary mb-2">\u5B89\u5168\u6CE8\u610F\u4E8B\u9879</h4><ul class="text-sm space-y-1 text-amber-600"><li>\u2022 \u79C1\u94A5\u5FC5\u987B\u59A5\u5584\u4FDD\u7BA1\uFF0C\u7EDD\u4E0D\u80FD\u6CC4\u9732</li><li>\u2022 \u5EFA\u8BAE\u4F7F\u75282048\u4F4D\u6216\u66F4\u957F\u7684\u5BC6\u94A5</li><li>\u2022 \u5B9A\u671F\u66F4\u6362\u5BC6\u94A5\uFF0C\u7279\u522B\u662F\u5728\u6000\u7591\u6CC4\u9732\u65F6</li><li>\u2022 \u79C1\u94A5\u5E94\u4F7F\u7528\u5F3A\u5BC6\u7801\u52A0\u5BC6\u4FDD\u62A4</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/rsa-generate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=rsa-generate-D8ntUAr2.mjs.map
