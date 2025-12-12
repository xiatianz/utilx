import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { Shield, Copy, RefreshCw, Check, AlertTriangle, Hash, ArrowRight, Lock } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { f as useSeoMeta } from './server.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs';
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

const similarChars = "0O1lI";
const ambiguousChars = "`~'\"\\;<>{}[]()|";
const _sfc_main = {
  __name: "password-generator",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordLength = ref(16);
    const passwordCount = ref(5);
    const generatedPasswords = ref([]);
    const customChars = ref("");
    ref("");
    const options = ref({
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
      excludeSimilar: false,
      excludeAmbiguous: false,
      requireEachType: true,
      noRepeating: false
    });
    const charset = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
    };
    const getCharset = () => {
      let chars = "";
      if (options.value.uppercase) chars += charset.uppercase;
      if (options.value.lowercase) chars += charset.lowercase;
      if (options.value.numbers) chars += charset.numbers;
      if (options.value.symbols) chars += charset.symbols;
      if (customChars.value) {
        chars += customChars.value;
      }
      if (options.value.excludeSimilar) {
        chars = chars.split("").filter((char) => !similarChars.includes(char)).join("");
      }
      if (options.value.excludeAmbiguous) {
        chars = chars.split("").filter((char) => !ambiguousChars.includes(char)).join("");
      }
      return chars;
    };
    const generateSinglePassword = () => {
      const chars = getCharset();
      if (!chars) return "";
      let password = "";
      const usedChars = /* @__PURE__ */ new Set();
      if (options.value.requireEachType) {
        const types = [];
        if (options.value.uppercase) types.push("uppercase");
        if (options.value.lowercase) types.push("lowercase");
        if (options.value.numbers) types.push("numbers");
        if (options.value.symbols) types.push("symbols");
        for (const type of types) {
          const typeCharset = charset[type].split("").filter((char) => {
            if (options.value.excludeSimilar && similarChars.includes(char)) return false;
            if (options.value.excludeAmbiguous && ambiguousChars.includes(char)) return false;
            return true;
          });
          if (typeCharset.length > 0) {
            const char = typeCharset[Math.floor(Math.random() * typeCharset.length)];
            password += char;
            if (options.value.noRepeating) usedChars.add(char);
          }
        }
      }
      while (password.length < passwordLength.value) {
        let char;
        do {
          char = chars[Math.floor(Math.random() * chars.length)];
        } while (options.value.noRepeating && usedChars.has(char) && usedChars.size < chars.length);
        password += char;
        if (options.value.noRepeating) usedChars.add(char);
      }
      return password.split("").sort(() => Math.random() - 0.5).join("");
    };
    const generatePasswords = () => {
      generatedPasswords.value = [];
      for (let i = 0; i < passwordCount.value; i++) {
        generatedPasswords.value.push(generateSinglePassword());
      }
    };
    const calculateStrength = (password) => {
      let strength = 0;
      if (password.length >= 8) strength += 25;
      if (password.length >= 12) strength += 25;
      if (password.length >= 16) strength += 25;
      if (/[a-z]/.test(password)) strength += 10;
      if (/[A-Z]/.test(password)) strength += 10;
      if (/[0-9]/.test(password)) strength += 10;
      if (/[^a-zA-Z0-9]/.test(password)) strength += 15;
      if (password.length >= 20) strength += 10;
      if (password.length >= 30) strength += 10;
      return Math.min(100, strength);
    };
    const getStrengthLabel = (password) => {
      const strength = calculateStrength(password);
      if (strength < 30) return "\u5F31";
      if (strength < 60) return "\u4E2D\u7B49";
      if (strength < 80) return "\u5F3A";
      return "\u975E\u5E38\u5F3A";
    };
    const getStrengthColor = (password) => {
      const strength = calculateStrength(password);
      if (strength < 30) return "bg-red-500";
      if (strength < 60) return "bg-yellow-500";
      if (strength < 80) return "bg-blue-500";
      return "bg-green-500";
    };
    const getStrengthPercent = (password) => {
      return calculateStrength(password);
    };
    const calculateEntropy = (password) => {
      const charsetSize = getCharset().length;
      return Math.round(password.length * Math.log2(charsetSize));
    };
    const getCrackTime = (password) => {
      const entropy = calculateEntropy(password);
      const guessesPerSecond = 1e11;
      const seconds = Math.pow(2, entropy) / guessesPerSecond;
      if (seconds < 60) return "\u77AC\u95F4\u7834\u89E3";
      if (seconds < 3600) return `\u7EA6 ${Math.round(seconds / 60)} \u5206\u949F`;
      if (seconds < 86400) return `\u7EA6 ${Math.round(seconds / 3600)} \u5C0F\u65F6`;
      if (seconds < 31536e3) return `\u7EA6 ${Math.round(seconds / 86400)} \u5929`;
      if (seconds < 31536e6) return `\u7EA6 ${Math.round(seconds / 31536e3)} \u5E74`;
      return "\u8D85\u8FC7\u5343\u5E74";
    };
    generatePasswords();
    useSeoMeta({
      title: "\u5BC6\u7801\u751F\u6210\u5668 - \u5728\u7EBF\u5B89\u5168\u968F\u673A\u5BC6\u7801\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u5BC6\u7801\u751F\u6210\u5668\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u957F\u5EA6\u3001\u5B57\u7B26\u7C7B\u578B\uFF0C\u751F\u6210\u5B89\u5168\u968F\u673A\u7684\u5BC6\u7801\uFF0C\u63D0\u4F9B\u5BC6\u7801\u5F3A\u5EA6\u5206\u6790\u3002",
      keywords: ["\u5BC6\u7801\u751F\u6210\u5668", "\u968F\u673A\u5BC6\u7801", "\u5B89\u5168\u5BC6\u7801", "\u5BC6\u7801\u5F3A\u5EA6", "\u5728\u7EBF\u751F\u6210\u5668"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u5BC6\u7801\u751F\u6210\u5668</h1><p class="text-muted-foreground">\u751F\u6210\u5B89\u5168\u3001\u968F\u673A\u7684\u5BC6\u7801\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5BC6\u7801\u89C4\u5219</p></div><div class="space-y-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5BC6\u7801\u9009\u9879</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block"> \u5BC6\u7801\u957F\u5EA6: ${ssrInterpolate(passwordLength.value)}</label><input${ssrRenderAttr("value", passwordLength.value)} type="range" min="4" max="128" class="w-full"><div class="flex justify-between text-xs text-muted-foreground mt-1"><span>4</span><span>128</span></div></div><div><label class="text-sm font-medium mb-2 block">\u751F\u6210\u6570\u91CF</label><select class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><option${ssrRenderAttr("value", 1)}${ssrIncludeBooleanAttr(Array.isArray(passwordCount.value) ? ssrLooseContain(passwordCount.value, 1) : ssrLooseEqual(passwordCount.value, 1)) ? " selected" : ""}>1 \u4E2A\u5BC6\u7801</option><option${ssrRenderAttr("value", 5)}${ssrIncludeBooleanAttr(Array.isArray(passwordCount.value) ? ssrLooseContain(passwordCount.value, 5) : ssrLooseEqual(passwordCount.value, 5)) ? " selected" : ""}>5 \u4E2A\u5BC6\u7801</option><option${ssrRenderAttr("value", 10)}${ssrIncludeBooleanAttr(Array.isArray(passwordCount.value) ? ssrLooseContain(passwordCount.value, 10) : ssrLooseEqual(passwordCount.value, 10)) ? " selected" : ""}>10 \u4E2A\u5BC6\u7801</option><option${ssrRenderAttr("value", 20)}${ssrIncludeBooleanAttr(Array.isArray(passwordCount.value) ? ssrLooseContain(passwordCount.value, 20) : ssrLooseEqual(passwordCount.value, 20)) ? " selected" : ""}>20 \u4E2A\u5BC6\u7801</option></select></div></div><div class="mt-6"><label class="text-sm font-medium mb-3 block">\u5305\u542B\u5B57\u7B26\u7C7B\u578B</label><div class="grid grid-cols-2 md:grid-cols-4 gap-3"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.uppercase) ? ssrLooseContain(options.value.uppercase, null) : options.value.uppercase) ? " checked" : ""} class="mr-2"><span class="text-sm">\u5927\u5199\u5B57\u6BCD (A-Z)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.lowercase) ? ssrLooseContain(options.value.lowercase, null) : options.value.lowercase) ? " checked" : ""} class="mr-2"><span class="text-sm">\u5C0F\u5199\u5B57\u6BCD (a-z)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.numbers) ? ssrLooseContain(options.value.numbers, null) : options.value.numbers) ? " checked" : ""} class="mr-2"><span class="text-sm">\u6570\u5B57 (0-9)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.symbols) ? ssrLooseContain(options.value.symbols, null) : options.value.symbols) ? " checked" : ""} class="mr-2"><span class="text-sm">\u7279\u6B8A\u7B26\u53F7 (!@#$...)</span></label></div></div><div class="mt-6 pt-6 border-t"><label class="text-sm font-medium mb-3 block">\u9AD8\u7EA7\u9009\u9879</label><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.excludeSimilar) ? ssrLooseContain(options.value.excludeSimilar, null) : options.value.excludeSimilar) ? " checked" : ""} class="mr-2"><span class="text-sm">\u6392\u9664\u76F8\u4F3C\u5B57\u7B26 (0O, l1, I)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.excludeAmbiguous) ? ssrLooseContain(options.value.excludeAmbiguous, null) : options.value.excludeAmbiguous) ? " checked" : ""} class="mr-2"><span class="text-sm">\u6392\u9664\u6B67\u4E49\u5B57\u7B26 ({}\`~, etc.)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.requireEachType) ? ssrLooseContain(options.value.requireEachType, null) : options.value.requireEachType) ? " checked" : ""} class="mr-2"><span class="text-sm">\u6BCF\u79CD\u7C7B\u578B\u81F3\u5C11\u4E00\u4E2A</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.noRepeating) ? ssrLooseContain(options.value.noRepeating, null) : options.value.noRepeating) ? " checked" : ""} class="mr-2"><span class="text-sm">\u4E0D\u91CD\u590D\u5B57\u7B26</span></label></div></div><div class="mt-6"><label class="text-sm font-medium mb-2 block">\u81EA\u5B9A\u4E49\u5B57\u7B26\u96C6\uFF08\u53EF\u9009\uFF09</label><textarea placeholder="\u8F93\u5165\u8981\u5305\u542B\u7684\u81EA\u5B9A\u4E49\u5B57\u7B26..." class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" rows="2">${ssrInterpolate(customChars.value)}</textarea></div></div><div class="flex justify-center"><button class="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Shield), { class: "w-5 h-5" }, null, _parent));
      _push(` \u751F\u6210\u5BC6\u7801 </button></div>`);
      if (generatedPasswords.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5BC6\u7801\u5F3A\u5EA6\u5206\u6790</h2><div class="space-y-4"><!--[-->`);
        ssrRenderList(generatedPasswords.value, (password, index) => {
          _push(`<div class="space-y-2"><div class="flex items-center justify-between"><div class="flex items-center gap-3 flex-1"><code class="font-mono text-lg bg-muted px-3 py-2 rounded select-all">${ssrInterpolate(password)}</code><div class="flex gap-2"><button class="p-2 text-muted-foreground hover:text-foreground transition-colors">`);
          _push(ssrRenderComponent(unref(Copy), { class: "w-4 h-4" }, null, _parent));
          _push(`</button><button class="p-2 text-muted-foreground hover:text-foreground transition-colors">`);
          _push(ssrRenderComponent(unref(RefreshCw), { class: "w-4 h-4" }, null, _parent));
          _push(`</button></div></div><div class="flex items-center gap-2 ml-4"><span class="text-sm font-medium">${ssrInterpolate(getStrengthLabel(password))}</span><div class="w-32 h-2 bg-muted rounded-full overflow-hidden"><div class="${ssrRenderClass([getStrengthColor(password), "h-full transition-all"])}" style="${ssrRenderStyle({ width: getStrengthPercent(password) + "%" })}"></div></div></div></div><div class="text-xs text-muted-foreground"> \u71B5\u503C: ${ssrInterpolate(calculateEntropy(password))} \u4F4D \xB7 ${ssrInterpolate(getCrackTime(password))}</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (generatedPasswords.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6279\u91CF\u64CD\u4F5C</h2><div class="flex gap-3"><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded transition-colors"> \u590D\u5236\u6240\u6709\u5BC6\u7801 </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded transition-colors"> \u4E0B\u8F7D\u5BC6\u7801\u6587\u4EF6 </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded transition-colors"> \u6E05\u7A7A\u5BC6\u7801 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5BC6\u7801\u5B89\u5168\u5EFA\u8BAE</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-medium mb-3 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Check), { class: "w-5 h-5 text-green-500" }, null, _parent));
      _push(` \u6700\u4F73\u5B9E\u8DF5 </h3><ul class="space-y-2 text-sm text-muted-foreground"><li>\u4F7F\u7528\u81F3\u5C11 12 \u4E2A\u5B57\u7B26\u7684\u5BC6\u7801</li><li>\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u7279\u6B8A\u7B26\u53F7</li><li>\u907F\u514D\u4F7F\u7528\u4E2A\u4EBA\u4FE1\u606F\uFF08\u751F\u65E5\u3001\u59D3\u540D\u7B49\uFF09</li><li>\u4E0D\u8981\u91CD\u590D\u4F7F\u7528\u76F8\u540C\u7684\u5BC6\u7801</li><li>\u5B9A\u671F\u66F4\u6362\u91CD\u8981\u8D26\u6237\u7684\u5BC6\u7801</li></ul></div><div><h3 class="font-medium mb-3 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-5 h-5 text-yellow-500" }, null, _parent));
      _push(` \u907F\u514D\u7684\u505A\u6CD5 </h3><ul class="space-y-2 text-sm text-muted-foreground"><li>\u4E0D\u8981\u4F7F\u7528\u5E38\u89C1\u7684\u5355\u8BCD\u6216\u77ED\u8BED</li><li>\u907F\u514D\u4F7F\u7528\u8FDE\u7EED\u6216\u91CD\u590D\u7684\u5B57\u7B26\uFF08123, aaa\uFF09</li><li>\u4E0D\u8981\u5728\u591A\u4E2A\u7F51\u7AD9\u4F7F\u7528\u76F8\u540C\u5BC6\u7801</li><li>\u4E0D\u8981\u5C06\u5BC6\u7801\u5199\u5728\u660E\u6587\u4F4D\u7F6E</li><li>\u4E0D\u8981\u901A\u8FC7\u4E0D\u5B89\u5168\u7684\u6E20\u9053\u4F20\u8F93\u5BC6\u7801</li></ul></div></div><div class="mt-6 pt-6 border-t"><h3 class="font-medium mb-3">\u5BC6\u7801\u7BA1\u7406</h3><p class="text-sm text-muted-foreground mb-3"> \u63A8\u8350\u4F7F\u7528\u5BC6\u7801\u7BA1\u7406\u5668\u6765\u5B89\u5168\u5730\u5B58\u50A8\u548C\u7BA1\u7406\u60A8\u7684\u5BC6\u7801\uFF1A </p><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="p-4 bg-muted rounded-lg"><h4 class="font-medium mb-1">\u672C\u5730\u5BC6\u7801\u7BA1\u7406\u5668</h4><p class="text-xs text-muted-foreground">\u5982 KeePass\u3001Bitwarden</p></div><div class="p-4 bg-muted rounded-lg"><h4 class="font-medium mb-1">\u6D4F\u89C8\u5668\u5BC6\u7801\u7BA1\u7406\u5668</h4><p class="text-xs text-muted-foreground">Chrome\u3001Firefox \u5185\u7F6E\u529F\u80FD</p></div><div class="p-4 bg-muted rounded-lg"><h4 class="font-medium mb-1">\u4E24\u6B65\u9A8C\u8BC1 (2FA)</h4><p class="text-xs text-muted-foreground">\u589E\u52A0\u989D\u5916\u7684\u5B89\u5168\u5C42</p></div></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/crypto/uuid-generator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>UUID\u751F\u6210\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u751F\u6210\u552F\u4E00\u6807\u8BC6\u7B26</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "UUID\u751F\u6210\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u751F\u6210\u552F\u4E00\u6807\u8BC6\u7B26")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/crypto/sha-generator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Shield), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>SHA\u751F\u6210\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u751F\u6210\u54C8\u5E0C\u503C</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Shield), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "SHA\u751F\u6210\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u751F\u6210\u54C8\u5E0C\u503C")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/crypto/aes-encrypt",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Lock), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>AES\u52A0\u5BC6</p><p class="text-xs text-muted-foreground"${_scopeId}>\u5BF9\u79F0\u52A0\u5BC6\u5DE5\u5177</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Lock), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "AES\u52A0\u5BC6"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u5BF9\u79F0\u52A0\u5BC6\u5DE5\u5177")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/password-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=password-generator-B-MEhE8O.mjs.map
