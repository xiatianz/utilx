import { ref, computed, mergeProps, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
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
  __name: "aes-encrypt",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const inputText = ref("");
    const outputText = ref("");
    const decryptedText = ref(null);
    const secretKey = ref("");
    const iv = ref("");
    const keySize = ref("256");
    const mode = ref("CBC");
    const padding = ref("PKCS7");
    const outputFormat = ref("base64");
    ref(null);
    const copyButtonText = ref("\u590D\u5236");
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "aes-encrypt"
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
    const canEncrypt = computed(() => {
      return inputText.value && secretKey.value && secretKey.value.length * 8 === Number(keySize) && (mode.value === "ECB" || iv.value && iv.value.length === 16);
    });
    const canDecrypt = computed(() => {
      return outputText.value && secretKey.value && secretKey.value.length * 8 === Number(keySize) && (mode.value === "ECB" || iv.value && iv.value.length === 16);
    });
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("aes-encrypt");
    useSeoMeta({
      title: "AES\u52A0\u5BC6\u89E3\u5BC6 - \u5728\u7EBFAES\u52A0\u5BC6\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFAES\u52A0\u5BC6\u89E3\u5BC6\u5DE5\u5177\uFF0C\u652F\u6301AES-128/192/256\uFF0C\u591A\u79CD\u5DE5\u4F5C\u6A21\u5F0F\u548C\u586B\u5145\u65B9\u5F0F\u3002",
      keywords: ["AES", "\u52A0\u5BC6", "\u89E3\u5BC6", "\u5BF9\u79F0\u52A0\u5BC6", "AES-256", "AES-128"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">AES\u52A0\u5BC6\u89E3\u5BC6</h1><p class="text-muted-foreground max-w-3xl">\u9AD8\u7EA7\u52A0\u5BC6\u6807\u51C6(AES)\u5728\u7EBF\u52A0\u5BC6\u89E3\u5BC6\u5DE5\u5177\uFF0C\u652F\u6301AES-128\u3001AES-192\u3001AES-256\uFF0C\u591A\u79CD\u5DE5\u4F5C\u6A21\u5F0F\u548C\u586B\u5145\u65B9\u5F0F\u3002</p></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u52A0\u5BC6\u8BBE\u7F6E</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><div><label class="text-sm font-medium mb-2 block">\u5BC6\u94A5\u957F\u5EA6</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="128"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "128") : ssrLooseEqual(keySize.value, "128")) ? " selected" : ""}>AES-128 (128\u4F4D)</option><option value="192"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "192") : ssrLooseEqual(keySize.value, "192")) ? " selected" : ""}>AES-192 (192\u4F4D)</option><option value="256"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "256") : ssrLooseEqual(keySize.value, "256")) ? " selected" : ""}>AES-256 (256\u4F4D)</option></select></div><div><label class="text-sm font-medium mb-2 block">\u5DE5\u4F5C\u6A21\u5F0F</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="CBC"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "CBC") : ssrLooseEqual(mode.value, "CBC")) ? " selected" : ""}>CBC (\u5BC6\u7801\u5757\u94FE\u63A5)</option><option value="ECB"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "ECB") : ssrLooseEqual(mode.value, "ECB")) ? " selected" : ""}>ECB (\u7535\u5B50\u5BC6\u7801\u672C)</option><option value="CFB"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "CFB") : ssrLooseEqual(mode.value, "CFB")) ? " selected" : ""}>CFB (\u5BC6\u7801\u53CD\u9988)</option><option value="OFB"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "OFB") : ssrLooseEqual(mode.value, "OFB")) ? " selected" : ""}>OFB (\u8F93\u51FA\u53CD\u9988)</option><option value="CTR"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "CTR") : ssrLooseEqual(mode.value, "CTR")) ? " selected" : ""}>CTR (\u8BA1\u6570\u5668)</option><option value="GCM"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "GCM") : ssrLooseEqual(mode.value, "GCM")) ? " selected" : ""}>GCM (\u4F3D\u7F57\u74E6\u8BA1\u6570\u5668)</option></select></div><div><label class="text-sm font-medium mb-2 block">\u586B\u5145\u65B9\u5F0F</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(mode.value === "CTR" || mode.value === "GCM") ? " disabled" : ""}><option value="PKCS7"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "PKCS7") : ssrLooseEqual(padding.value, "PKCS7")) ? " selected" : ""}>PKCS7</option><option value="ISO97971"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "ISO97971") : ssrLooseEqual(padding.value, "ISO97971")) ? " selected" : ""}>ISO/IEC 9797-1</option><option value="ANSIX923"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "ANSIX923") : ssrLooseEqual(padding.value, "ANSIX923")) ? " selected" : ""}>ANSI X9.23</option><option value="ZERO"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "ZERO") : ssrLooseEqual(padding.value, "ZERO")) ? " selected" : ""}>Zero Padding</option><option value="NO_PADDING"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "NO_PADDING") : ssrLooseEqual(padding.value, "NO_PADDING")) ? " selected" : ""}>\u65E0\u586B\u5145</option></select></div><div><label class="text-sm font-medium mb-2 block">\u8F93\u51FA\u683C\u5F0F</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="base64"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "base64") : ssrLooseEqual(outputFormat.value, "base64")) ? " selected" : ""}>Base64</option><option value="hex"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "hex") : ssrLooseEqual(outputFormat.value, "hex")) ? " selected" : ""}>Hex</option><option value="utf8"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "utf8") : ssrLooseEqual(outputFormat.value, "utf8")) ? " selected" : ""}>UTF-8</option></select></div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u5BC6\u94A5\u548C\u521D\u59CB\u5411\u91CF</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block"> \u5BC6\u94A5 <span class="text-xs text-muted-foreground ml-2">(${ssrInterpolate(keySize.value / 8)}\u5B57\u8282)</span></label><div class="flex gap-2"><input${ssrRenderAttr("value", secretKey.value)} type="password"${ssrRenderAttr("placeholder", `\u8F93\u5165${keySize.value}\u4F4D\u5BC6\u94A5`)} class="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> \u751F\u6210\u5BC6\u94A5 </button></div><div class="mt-2 text-xs text-muted-foreground"> \u5BC6\u94A5\u957F\u5EA6\uFF1A${ssrInterpolate(secretKey.value.length * 8)} \u4F4D `);
      if (secretKey.value.length * 8 !== Number(keySize.value)) {
        _push(`<span class="text-amber-600 ml-2"> (\u9700\u8981 ${ssrInterpolate(keySize.value)} \u4F4D) </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (mode.value !== "ECB") {
        _push(`<div><label class="text-sm font-medium mb-2 block"> \u521D\u59CB\u5411\u91CF (IV) <span class="text-xs text-muted-foreground ml-2">(16\u5B57\u8282)</span></label><div class="flex gap-2"><input${ssrRenderAttr("value", iv.value)} type="password" placeholder="\u8F93\u516516\u5B57\u8282\u521D\u59CB\u5411\u91CF" class="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> \u751F\u6210IV </button></div><div class="mt-2 text-xs text-muted-foreground"> IV\u957F\u5EA6\uFF1A${ssrInterpolate(iv.value.length * 8)} \u4F4D `);
        if (iv.value.length !== 16) {
          _push(`<span class="text-amber-600 ml-2"> (\u9700\u8981 128 \u4F4D/16 \u5B57\u8282) </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">\u539F\u59CB\u6587\u672C</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button><label class="flex items-center gap-2 cursor-pointer"><input type="file" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> \u9009\u62E9\u6587\u4EF6 </span></label></div></div><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u52A0\u5BC6\u7684\u6587\u672C..." class="w-full h-64 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea><div class="text-sm text-muted-foreground"> \u5B57\u7B26\u6570\uFF1A${ssrInterpolate(inputText.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">\u52A0\u5BC6\u7ED3\u679C</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors">${ssrInterpolate(copyButtonText.value)}</button><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> \u4E0B\u8F7D </button></div></div><textarea placeholder="\u52A0\u5BC6\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC..." readonly class="w-full h-64 p-4 border border-border rounded-lg bg-muted/50 resize-none font-mono text-sm">${ssrInterpolate(outputText.value)}</textarea><div class="text-sm text-muted-foreground"> \u957F\u5EA6\uFF1A${ssrInterpolate(outputText.value.length)}</div></div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!canEncrypt.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u52A0\u5BC6 </button><button${ssrIncludeBooleanAttr(!canDecrypt.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u89E3\u5BC6 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> \u4EA4\u6362\u6570\u636E </button></div>`);
      if (decryptedText.value !== null) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u89E3\u5BC6\u7ED3\u679C</h3><div class="bg-muted/50 rounded-lg p-4"><pre class="whitespace-pre-wrap text-sm">${ssrInterpolate(decryptedText.value)}</pre></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u5173\u4E8EAES\u52A0\u5BC6</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">\u7B97\u6CD5\u7279\u70B9</h4><ul class="text-sm space-y-1"><li>\u2022 \u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u52A0\u5BC6\u548C\u89E3\u5BC6\u4F7F\u7528\u76F8\u540C\u7684\u5BC6\u94A5</li><li>\u2022 \u652F\u6301128\u3001192\u3001256\u4F4D\u5BC6\u94A5\u957F\u5EA6</li><li>\u2022 \u5206\u7EC4\u52A0\u5BC6\uFF0C\u5757\u5927\u5C0F\u56FA\u5B9A\u4E3A128\u4F4D</li><li>\u2022 \u5B89\u5168\u6027\u9AD8\uFF0C\u88AB\u7F8E\u56FD\u653F\u5E9C\u6279\u51C6\u7528\u4E8E\u673A\u5BC6\u4FE1\u606F\u7684\u52A0\u5BC6</li></ul></div><div><h4 class="font-medium text-primary mb-2">\u5DE5\u4F5C\u6A21\u5F0F\u8BF4\u660E</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><h5 class="font-medium mb-1">CBC\u6A21\u5F0F</h5><p class="text-muted-foreground">\u6BCF\u4E2A\u660E\u6587\u5757\u5148\u4E0E\u524D\u4E00\u4E2A\u5BC6\u6587\u5757\u8FDB\u884C\u5F02\u6216\u64CD\u4F5C\uFF0C\u518D\u52A0\u5BC6</p></div><div><h5 class="font-medium mb-1">ECB\u6A21\u5F0F</h5><p class="text-muted-foreground">\u76F8\u540C\u7684\u660E\u6587\u5757\u4F1A\u4EA7\u751F\u76F8\u540C\u7684\u5BC6\u6587\u5757\uFF0C\u5B89\u5168\u6027\u8F83\u4F4E</p></div><div><h5 class="font-medium mb-1">CTR\u6A21\u5F0F</h5><p class="text-muted-foreground">\u5C06\u8BA1\u6570\u5668\u52A0\u5BC6\u540E\u4E0E\u660E\u6587\u5F02\u6216\uFF0C\u65E0\u9700\u586B\u5145\uFF0C\u53EF\u5E76\u884C\u5904\u7406</p></div><div><h5 class="font-medium mb-1">GCM\u6A21\u5F0F</h5><p class="text-muted-foreground">\u63D0\u4F9B\u8BA4\u8BC1\u52A0\u5BC6\uFF0C\u540C\u65F6\u4FDD\u8BC1\u673A\u5BC6\u6027\u548C\u5B8C\u6574\u6027</p></div></div></div><div><h4 class="font-medium text-primary mb-2">\u5B89\u5168\u6CE8\u610F\u4E8B\u9879</h4><ul class="text-sm space-y-1 text-amber-600"><li>\u2022 \u5BC6\u94A5\u5FC5\u987B\u4FDD\u5BC6\uFF0C\u4E0D\u8981\u5728\u4E0D\u5B89\u5168\u7684\u901A\u9053\u4F20\u8F93</li><li>\u2022 ECB\u6A21\u5F0F\u4E0D\u5B89\u5168\uFF0C\u4EC5\u7528\u4E8E\u7279\u6B8A\u573A\u666F</li><li>\u2022 CBC\u3001CFB\u3001OFB\u6A21\u5F0F\u9700\u8981\u968F\u673A\u4E14\u552F\u4E00\u7684IV</li><li>\u2022 \u5EFA\u8BAE\u4F7F\u7528GCM\u6A21\u5F0F\u6216\u5E26\u8BA4\u8BC1\u7684\u52A0\u5BC6\u65B9\u6848</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/aes-encrypt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=aes-encrypt-lp_shQ7w.mjs.map
