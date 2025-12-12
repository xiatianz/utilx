import { ref, computed, watch, mergeProps, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
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
  __name: "rsa-decrypt",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const privateKey = ref("");
    const privateKeyPassword = ref("");
    const encryptedData = ref("");
    const decryptedResult = ref("");
    const keyFormat = ref("PEM");
    const inputFormat = ref("base64");
    const encryptionScheme = ref("RSA-OAEP");
    ref(null);
    ref(null);
    const copyButtonText = ref("\u590D\u5236");
    const decryptStatus = ref(null);
    const decryptDetails = ref(null);
    const privateKeyInfo = ref(null);
    const isPrivateKeyEncrypted = ref(false);
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "rsa-decrypt"
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
    watch(privateKey, (newKey) => {
      if (newKey) {
        analyzePrivateKey(newKey);
      } else {
        privateKeyInfo.value = null;
        isPrivateKeyEncrypted.value = false;
      }
    });
    const analyzePrivateKey = (key) => {
      try {
        isPrivateKeyEncrypted.value = key.includes("ENCRYPTED") || key.includes("Proc-Type: 4,ENCRYPTED") || privateKeyPassword.value && key.includes("-----BEGIN");
        const keyLength = key.includes("2048") ? 2048 : key.includes("3072") ? 3072 : key.includes("4096") ? 4096 : 2048;
        const keyType = key.includes("RSA PRIVATE KEY") ? "RSA" : "Unknown";
        privateKeyInfo.value = {
          bits: keyLength,
          type: keyType
        };
      } catch (error) {
        privateKeyInfo.value = null;
      }
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("rsa-decrypt");
    useSeoMeta({
      title: "RSA\u89E3\u5BC6 - \u5728\u7EBFRSA\u79C1\u94A5\u89E3\u5BC6\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFRSA\u89E3\u5BC6\u5DE5\u5177\uFF0C\u4F7F\u7528\u79C1\u94A5\u89E3\u5BC6RSA\u52A0\u5BC6\u7684\u6570\u636E\uFF0C\u652F\u6301\u591A\u79CD\u52A0\u5BC6\u65B9\u6848\uFF0C\u5B89\u5168\u6062\u590D\u539F\u59CB\u4FE1\u606F\u3002",
      keywords: ["RSA", "\u79C1\u94A5\u89E3\u5BC6", "\u975E\u5BF9\u79F0\u89E3\u5BC6", "RSA-OAEP", "PKCS1", "\u6570\u636E\u89E3\u5BC6"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">RSA\u89E3\u5BC6</h1><p class="text-muted-foreground max-w-3xl">RSA\u975E\u5BF9\u79F0\u89E3\u5BC6\u5DE5\u5177\uFF0C\u4F7F\u7528\u79C1\u94A5\u89E3\u5BC6RSA\u52A0\u5BC6\u7684\u6570\u636E\u3002\u652F\u6301\u591A\u79CD\u52A0\u5BC6\u65B9\u6848\u548C\u683C\u5F0F\uFF0C\u786E\u4FDD\u6570\u636E\u5B89\u5168\u6062\u590D\u3002</p></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u89E3\u5BC6\u8BBE\u7F6E</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div><label class="text-sm font-medium mb-2 block">\u5BC6\u94A5\u683C\u5F0F</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="PEM"${ssrIncludeBooleanAttr(Array.isArray(keyFormat.value) ? ssrLooseContain(keyFormat.value, "PEM") : ssrLooseEqual(keyFormat.value, "PEM")) ? " selected" : ""}>PEM\u683C\u5F0F</option><option value="DER"${ssrIncludeBooleanAttr(Array.isArray(keyFormat.value) ? ssrLooseContain(keyFormat.value, "DER") : ssrLooseEqual(keyFormat.value, "DER")) ? " selected" : ""}>DER\u683C\u5F0F</option><option value="JWK"${ssrIncludeBooleanAttr(Array.isArray(keyFormat.value) ? ssrLooseContain(keyFormat.value, "JWK") : ssrLooseEqual(keyFormat.value, "JWK")) ? " selected" : ""}>JWK\u683C\u5F0F</option></select></div><div><label class="text-sm font-medium mb-2 block">\u8F93\u5165\u683C\u5F0F</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="base64"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "base64") : ssrLooseEqual(inputFormat.value, "base64")) ? " selected" : ""}>Base64</option><option value="hex"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "hex") : ssrLooseEqual(inputFormat.value, "hex")) ? " selected" : ""}>\u5341\u516D\u8FDB\u5236</option><option value="json"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "json") : ssrLooseEqual(inputFormat.value, "json")) ? " selected" : ""}>JSON\u683C\u5F0F</option><option value="raw"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "raw") : ssrLooseEqual(inputFormat.value, "raw")) ? " selected" : ""}>\u539F\u59CB\u683C\u5F0F</option></select></div><div><label class="text-sm font-medium mb-2 block">\u52A0\u5BC6\u65B9\u6848</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="RSA-OAEP"${ssrIncludeBooleanAttr(Array.isArray(encryptionScheme.value) ? ssrLooseContain(encryptionScheme.value, "RSA-OAEP") : ssrLooseEqual(encryptionScheme.value, "RSA-OAEP")) ? " selected" : ""}>RSA-OAEP</option><option value="RSAES-PKCS1-v1_5"${ssrIncludeBooleanAttr(Array.isArray(encryptionScheme.value) ? ssrLooseContain(encryptionScheme.value, "RSAES-PKCS1-v1_5") : ssrLooseEqual(encryptionScheme.value, "RSAES-PKCS1-v1_5")) ? " selected" : ""}>PKCS1 v1.5</option></select></div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u79C1\u94A5</h3><div class="space-y-4"><div class="flex items-center gap-4"><label class="flex items-center gap-2 cursor-pointer"><input type="file" accept=".pem,.key,.private" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> \u5BFC\u5165\u79C1\u94A5\u6587\u4EF6 </span></label><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> \u52A0\u8F7D\u793A\u4F8B\u79C1\u94A5 </button></div><div><label class="text-sm font-medium mb-2 block"> \u79C1\u94A5\u5185\u5BB9 `);
      if (isPrivateKeyEncrypted.value) {
        _push(`<span class="text-xs text-amber-600 ml-2">\uFF08\u5DF2\u52A0\u5BC6\uFF09</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
      if (isPrivateKeyEncrypted.value) {
        _push(`<input${ssrRenderAttr("value", privateKeyPassword.value)} type="password" placeholder="\u8F93\u5165\u79C1\u94A5\u5BC6\u7801" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary mb-2">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<textarea placeholder="\u7C98\u8D34PEM\u683C\u5F0F\u7684\u79C1\u94A5\uFF0C\u5982\uFF1A-----BEGIN PRIVATE KEY-----..." class="w-full h-32 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(privateKey.value)}</textarea></div>`);
      if (privateKeyInfo.value) {
        _push(`<div class="text-sm text-muted-foreground"><span>\u5BC6\u94A5\u4F4D\u6570\uFF1A${ssrInterpolate(privateKeyInfo.value.bits)}\u4F4D</span><span class="ml-4">\u7C7B\u578B\uFF1A${ssrInterpolate(privateKeyInfo.value.type)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">\u52A0\u5BC6\u6570\u636E</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button><label class="flex items-center gap-2 cursor-pointer"><input type="file" accept=".enc,.txt,.json" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> \u9009\u62E9\u6587\u4EF6 </span></label></div></div><textarea${ssrRenderAttr("placeholder", `\u8BF7\u8F93\u5165\u8981\u89E3\u5BC6\u7684${inputFormat.value}\u683C\u5F0F\u6570\u636E...`)} class="w-full h-64 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(encryptedData.value)}</textarea><div class="text-sm text-muted-foreground"> \u6570\u636E\u957F\u5EA6\uFF1A${ssrInterpolate(encryptedData.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">\u89E3\u5BC6\u7ED3\u679C</label><div class="flex items-center gap-2"><button${ssrIncludeBooleanAttr(!decryptedResult.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors disabled:opacity-50">${ssrInterpolate(copyButtonText.value)}</button><button${ssrIncludeBooleanAttr(!decryptedResult.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors disabled:opacity-50"> \u4E0B\u8F7D </button></div></div><div class="w-full h-64 p-4 border border-border rounded-lg bg-muted/50 overflow-y-auto">`);
      if (decryptedResult.value) {
        _push(`<pre class="text-sm whitespace-pre-wrap">${ssrInterpolate(decryptedResult.value)}</pre>`);
      } else {
        _push(`<div class="text-sm text-muted-foreground">\u89E3\u5BC6\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC...</div>`);
      }
      _push(`</div><div class="text-sm text-muted-foreground"> \u957F\u5EA6\uFF1A${ssrInterpolate(decryptedResult.value.length)}</div></div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!privateKey.value || !encryptedData.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u89E3\u5BC6\u6570\u636E </button><button${ssrIncludeBooleanAttr(!encryptedData.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50"> \u81EA\u52A8\u68C0\u6D4B\u683C\u5F0F </button></div>`);
      if (decryptStatus.value) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u89E3\u5BC6\u72B6\u6001</h3><div class="${ssrRenderClass([decryptStatus.value.success ? "text-green-600" : "text-red-600", "flex items-center gap-3"])}">`);
        if (decryptStatus.value.success) {
          _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
        } else {
          _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
        }
        _push(`<div><div class="font-medium">${ssrInterpolate(decryptStatus.value.success ? "\u89E3\u5BC6\u6210\u529F" : "\u89E3\u5BC6\u5931\u8D25")}</div><div class="text-sm">${ssrInterpolate(decryptStatus.value.message)}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (decryptDetails.value) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u89E3\u5BC6\u8BE6\u60C5</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><span class="text-muted-foreground">\u89E3\u5BC6\u7B97\u6CD5\uFF1A</span><span>${ssrInterpolate(decryptDetails.value.algorithm)}</span></div><div><span class="text-muted-foreground">\u5BC6\u94A5\u957F\u5EA6\uFF1A</span><span>${ssrInterpolate(decryptDetails.value.keySize)} \u4F4D</span></div><div><span class="text-muted-foreground">\u8F93\u5165\u6570\u636E\u957F\u5EA6\uFF1A</span><span>${ssrInterpolate(decryptDetails.value.inputLength)} \u5B57\u8282</span></div><div><span class="text-muted-foreground">\u89E3\u5BC6\u540E\u957F\u5EA6\uFF1A</span><span>${ssrInterpolate(decryptDetails.value.outputLength)} \u5B57\u8282</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">RSA\u89E3\u5BC6\u8BF4\u660E</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">\u89E3\u5BC6\u8981\u6C42</h4><ul class="text-sm space-y-1"><li>\u2022 \u5FC5\u987B\u4F7F\u7528\u4E0E\u52A0\u5BC6\u65F6\u5BF9\u5E94\u7684\u79C1\u94A5</li><li>\u2022 \u52A0\u5BC6\u65B9\u6848\u5FC5\u987B\u4E00\u81F4\uFF08RSA-OAEP\u6216PKCS1 v1.5\uFF09</li><li>\u2022 \u79C1\u94A5\u5FC5\u987B\u6B63\u786E\u4E14\u672A\u635F\u574F</li><li>\u2022 \u5982\u679C\u79C1\u94A5\u6709\u5BC6\u7801\u4FDD\u62A4\uFF0C\u9700\u8981\u63D0\u4F9B\u5BC6\u7801</li></ul></div><div><h4 class="font-medium text-primary mb-2">\u5E38\u89C1\u9519\u8BEF</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><h5 class="font-medium text-amber-600 mb-1">Invalid key format</h5><p class="text-muted-foreground">\u79C1\u94A5\u683C\u5F0F\u9519\u8BEF\u6216\u4E0D\u652F\u6301</p></div><div><h5 class="font-medium text-amber-600 mb-1">Decryption error</h5><p class="text-muted-foreground">\u5BC6\u94A5\u4E0D\u5339\u914D\u6216\u6570\u636E\u635F\u574F</p></div><div><h5 class="font-medium text-amber-600 mb-1">Bad padding</h5><p class="text-muted-foreground">\u586B\u5145\u65B9\u6848\u4E0D\u6B63\u786E</p></div><div><h5 class="font-medium text-amber-600 mb-1">Password required</h5><p class="text-muted-foreground">\u79C1\u94A5\u9700\u8981\u5BC6\u7801</p></div></div></div><div><h4 class="font-medium text-primary mb-2">\u79C1\u94A5\u5B89\u5168</h4><ul class="text-sm space-y-1 text-amber-600"><li>\u2022 \u79C1\u94A5\u5FC5\u987B\u4E25\u683C\u4FDD\u5BC6\uFF0C\u4E0D\u8981\u4F20\u8F93\u6216\u5206\u4EAB</li><li>\u2022 \u4F7F\u7528\u5F3A\u5BC6\u7801\u4FDD\u62A4\u79C1\u94A5\u6587\u4EF6</li><li>\u2022 \u5B9A\u671F\u5907\u4EFD\u79C1\u94A5\u5230\u5B89\u5168\u4F4D\u7F6E</li><li>\u2022 \u89E3\u5BC6\u540E\u53CA\u65F6\u6E05\u9664\u5185\u5B58\u4E2D\u7684\u654F\u611F\u6570\u636E</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/rsa-decrypt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=rsa-decrypt-BAPumXbC.mjs.map
