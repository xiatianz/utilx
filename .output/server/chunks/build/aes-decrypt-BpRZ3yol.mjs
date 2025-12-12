import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "aes-decrypt",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const encryptedData = ref("");
    const decryptedData = ref("");
    const secretKey = ref("");
    const iv = ref("");
    const keySize = ref("256");
    const mode = ref("CBC");
    const padding = ref("PKCS7");
    const inputFormat = ref("base64");
    ref(null);
    const copyButtonText = ref("\u590D\u5236");
    const decryptStatus = ref(null);
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "aes-decrypt"
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
    const canDecrypt = computed(() => {
      return encryptedData.value && secretKey.value && secretKey.value.length * 8 === Number(keySize) && (mode.value === "ECB" || iv.value && iv.value.length === 16);
    });
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("aes-decrypt");
    useSeoMeta({
      title: "AES\u89E3\u5BC6 - \u5728\u7EBFAES\u6570\u636E\u89E3\u5BC6\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFAES\u89E3\u5BC6\u5DE5\u5177\uFF0C\u652F\u6301AES-128/192/256\uFF0C\u591A\u79CD\u5DE5\u4F5C\u6A21\u5F0F\uFF0C\u5FEB\u901F\u89E3\u5BC6AES\u52A0\u5BC6\u7684\u6570\u636E\u3002",
      keywords: ["AES", "\u89E3\u5BC6", "\u5BF9\u79F0\u89E3\u5BC6", "AES-256", "AES-128"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">AES\u89E3\u5BC6</h1><p class="text-muted-foreground max-w-3xl">AES\u5BF9\u79F0\u89E3\u5BC6\u5DE5\u5177\uFF0C\u652F\u6301AES-128/192/256\uFF0C\u591A\u79CD\u5DE5\u4F5C\u6A21\u5F0F\uFF0C\u53EF\u89E3\u5BC6AES\u52A0\u5BC6\u7684\u6587\u672C\u548C\u6587\u4EF6\u3002</p></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u89E3\u5BC6\u8BBE\u7F6E</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><div><label class="text-sm font-medium mb-2 block">\u5BC6\u94A5\u957F\u5EA6</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="128"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "128") : ssrLooseEqual(keySize.value, "128")) ? " selected" : ""}>AES-128 (128\u4F4D)</option><option value="192"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "192") : ssrLooseEqual(keySize.value, "192")) ? " selected" : ""}>AES-192 (192\u4F4D)</option><option value="256"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "256") : ssrLooseEqual(keySize.value, "256")) ? " selected" : ""}>AES-256 (256\u4F4D)</option></select></div><div><label class="text-sm font-medium mb-2 block">\u5DE5\u4F5C\u6A21\u5F0F</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="CBC"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "CBC") : ssrLooseEqual(mode.value, "CBC")) ? " selected" : ""}>CBC (\u5BC6\u7801\u5757\u94FE\u63A5)</option><option value="ECB"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "ECB") : ssrLooseEqual(mode.value, "ECB")) ? " selected" : ""}>ECB (\u7535\u5B50\u5BC6\u7801\u672C)</option><option value="CFB"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "CFB") : ssrLooseEqual(mode.value, "CFB")) ? " selected" : ""}>CFB (\u5BC6\u7801\u53CD\u9988)</option><option value="OFB"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "OFB") : ssrLooseEqual(mode.value, "OFB")) ? " selected" : ""}>OFB (\u8F93\u51FA\u53CD\u9988)</option><option value="CTR"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "CTR") : ssrLooseEqual(mode.value, "CTR")) ? " selected" : ""}>CTR (\u8BA1\u6570\u5668)</option><option value="GCM"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "GCM") : ssrLooseEqual(mode.value, "GCM")) ? " selected" : ""}>GCM (\u4F3D\u7F57\u74E6\u8BA1\u6570\u5668)</option></select></div><div><label class="text-sm font-medium mb-2 block">\u586B\u5145\u65B9\u5F0F</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(mode.value === "CTR" || mode.value === "GCM") ? " disabled" : ""}><option value="PKCS7"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "PKCS7") : ssrLooseEqual(padding.value, "PKCS7")) ? " selected" : ""}>PKCS7</option><option value="ISO97971"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "ISO97971") : ssrLooseEqual(padding.value, "ISO97971")) ? " selected" : ""}>ISO/IEC 9797-1</option><option value="ANSIX923"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "ANSIX923") : ssrLooseEqual(padding.value, "ANSIX923")) ? " selected" : ""}>ANSI X9.23</option><option value="ZERO"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "ZERO") : ssrLooseEqual(padding.value, "ZERO")) ? " selected" : ""}>Zero Padding</option><option value="NO_PADDING"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "NO_PADDING") : ssrLooseEqual(padding.value, "NO_PADDING")) ? " selected" : ""}>\u65E0\u586B\u5145</option></select></div><div><label class="text-sm font-medium mb-2 block">\u8F93\u5165\u683C\u5F0F</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="base64"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "base64") : ssrLooseEqual(inputFormat.value, "base64")) ? " selected" : ""}>Base64</option><option value="hex"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "hex") : ssrLooseEqual(inputFormat.value, "hex")) ? " selected" : ""}>Hex</option><option value="utf8"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "utf8") : ssrLooseEqual(inputFormat.value, "utf8")) ? " selected" : ""}>UTF-8</option></select></div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u5BC6\u94A5\u548C\u521D\u59CB\u5411\u91CF</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block"> \u5BC6\u94A5 <span class="text-xs text-muted-foreground ml-2">(${ssrInterpolate(keySize.value / 8)}\u5B57\u8282)</span></label><div class="flex gap-2"><input${ssrRenderAttr("value", secretKey.value)} type="password"${ssrRenderAttr("placeholder", `\u8F93\u5165${keySize.value}\u4F4D\u5BC6\u94A5`)} class="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> \u6E05\u7A7A </button></div><div class="mt-2 text-xs text-muted-foreground"> \u5BC6\u94A5\u957F\u5EA6\uFF1A${ssrInterpolate(secretKey.value.length * 8)} \u4F4D `);
      if (secretKey.value.length * 8 !== Number(keySize.value)) {
        _push(`<span class="text-amber-600 ml-2"> (\u9700\u8981 ${ssrInterpolate(keySize.value)} \u4F4D) </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (mode.value !== "ECB") {
        _push(`<div><label class="text-sm font-medium mb-2 block"> \u521D\u59CB\u5411\u91CF (IV) <span class="text-xs text-muted-foreground ml-2">(16\u5B57\u8282)</span></label><div class="flex gap-2"><input${ssrRenderAttr("value", iv.value)} type="password" placeholder="\u8F93\u516516\u5B57\u8282\u521D\u59CB\u5411\u91CF" class="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> \u6E05\u7A7A </button></div><div class="mt-2 text-xs text-muted-foreground"> IV\u957F\u5EA6\uFF1A${ssrInterpolate(iv.value.length * 8)} \u4F4D `);
        if (iv.value.length !== 16) {
          _push(`<span class="text-amber-600 ml-2"> (\u9700\u8981 128 \u4F4D/16 \u5B57\u8282) </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">\u52A0\u5BC6\u6570\u636E</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button><label class="flex items-center gap-2 cursor-pointer"><input type="file" accept=".txt,.enc,.aes" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> \u9009\u62E9\u6587\u4EF6 </span></label></div></div><textarea${ssrRenderAttr("placeholder", `\u8BF7\u8F93\u5165\u8981\u89E3\u5BC6\u7684${inputFormat.value}\u683C\u5F0F\u6570\u636E...`)} class="w-full h-64 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(encryptedData.value)}</textarea><div class="text-sm text-muted-foreground"> \u6570\u636E\u957F\u5EA6\uFF1A${ssrInterpolate(encryptedData.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">\u89E3\u5BC6\u7ED3\u679C</label><div class="flex items-center gap-2"><button${ssrIncludeBooleanAttr(!decryptedData.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors disabled:opacity-50">${ssrInterpolate(copyButtonText.value)}</button><button${ssrIncludeBooleanAttr(!decryptedData.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors disabled:opacity-50"> \u4E0B\u8F7D </button></div></div><textarea placeholder="\u89E3\u5BC6\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC..." readonly class="w-full h-64 p-4 border border-border rounded-lg bg-muted/50 resize-none">${ssrInterpolate(decryptedData.value)}</textarea><div class="text-sm text-muted-foreground"> \u957F\u5EA6\uFF1A${ssrInterpolate(decryptedData.value.length)}</div></div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!canDecrypt.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u89E3\u5BC6\u6570\u636E </button><button${ssrIncludeBooleanAttr(!encryptedData.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50"> \u81EA\u52A8\u68C0\u6D4B\u683C\u5F0F </button></div>`);
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
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">AES\u89E3\u5BC6\u8BF4\u660E</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">\u89E3\u5BC6\u8981\u6C42</h4><ul class="text-sm space-y-1"><li>\u2022 \u5BC6\u94A5\u5FC5\u987B\u4E0E\u52A0\u5BC6\u65F6\u4F7F\u7528\u7684\u5BC6\u94A5\u5B8C\u5168\u4E00\u81F4</li><li>\u2022 \u5DE5\u4F5C\u6A21\u5F0F\u3001\u586B\u5145\u65B9\u5F0F\u5FC5\u987B\u4E0E\u52A0\u5BC6\u65F6\u76F8\u540C</li><li>\u2022 CBC\u3001CFB\u3001OFB\u3001GCM\u6A21\u5F0F\u9700\u8981\u6B63\u786E\u7684\u521D\u59CB\u5411\u91CF(IV)</li><li>\u2022 \u8F93\u5165\u6570\u636E\u683C\u5F0F\u5FC5\u987B\u6B63\u786E\uFF08Base64\u6216Hex\u7F16\u7801\uFF09</li></ul></div><div><h4 class="font-medium text-primary mb-2">\u5E38\u89C1\u9519\u8BEF</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><h5 class="font-medium text-amber-600 mb-1">Wrong padding</h5><p class="text-muted-foreground">\u586B\u5145\u65B9\u5F0F\u4E0D\u6B63\u786E\u6216\u5BC6\u94A5\u9519\u8BEF</p></div><div><h5 class="font-medium text-amber-600 mb-1">Invalid data</h5><p class="text-muted-foreground">\u8F93\u5165\u683C\u5F0F\u9519\u8BEF\u6216\u6570\u636E\u635F\u574F</p></div><div><h5 class="font-medium text-amber-600 mb-1">Bad key length</h5><p class="text-muted-foreground">\u5BC6\u94A5\u957F\u5EA6\u4E0E\u8BBE\u7F6E\u4E0D\u7B26</p></div><div><h5 class="font-medium text-amber-600 mb-1">Empty result</h5><p class="text-muted-foreground">\u89E3\u5BC6\u7ED3\u679C\u4E3A\u7A7A\uFF0C\u53EF\u80FD\u662F\u5BC6\u94A5\u9519\u8BEF</p></div></div></div><div><h4 class="font-medium text-primary mb-2">\u5B89\u5168\u5EFA\u8BAE</h4><ul class="text-sm space-y-1 text-amber-600"><li>\u2022 \u5BC6\u94A5\u5E94\u901A\u8FC7\u5B89\u5168\u6E20\u9053\u4F20\u8F93\uFF0C\u4E0D\u8981\u660E\u6587\u53D1\u9001</li><li>\u2022 \u89E3\u5BC6\u540E\u53CA\u65F6\u6E05\u9664\u5185\u5B58\u4E2D\u7684\u654F\u611F\u6570\u636E</li><li>\u2022 \u4F7F\u7528\u5F3A\u5BC6\u94A5\uFF08\u81F3\u5C11AES-256\uFF09</li><li>\u2022 \u5B9A\u671F\u66F4\u6362\u5BC6\u94A5\u4EE5\u63D0\u9AD8\u5B89\u5168\u6027</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/aes-decrypt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=aes-decrypt-BpRZ3yol.mjs.map
