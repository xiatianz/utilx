import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { Shield, Copy, RefreshCw, Check, AlertTriangle, Hash, ArrowRight, Lock } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
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
      if (strength < 30) return "弱";
      if (strength < 60) return "中等";
      if (strength < 80) return "强";
      return "非常强";
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
      if (seconds < 60) return "瞬间破解";
      if (seconds < 3600) return `约 ${Math.round(seconds / 60)} 分钟`;
      if (seconds < 86400) return `约 ${Math.round(seconds / 3600)} 小时`;
      if (seconds < 31536e3) return `约 ${Math.round(seconds / 86400)} 天`;
      if (seconds < 31536e6) return `约 ${Math.round(seconds / 31536e3)} 年`;
      return "超过千年";
    };
    generatePasswords();
    useSeoMeta({
      title: "密码生成器 - 在线安全随机密码生成工具",
      description: "免费在线密码生成器，支持自定义长度、字符类型，生成安全随机的密码，提供密码强度分析。",
      keywords: ["密码生成器", "随机密码", "安全密码", "密码强度", "在线生成器"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">密码生成器</h1><p class="text-muted-foreground">生成安全、随机的密码，支持自定义密码规则</p></div><div class="space-y-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">密码选项</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block"> 密码长度: ${ssrInterpolate(passwordLength.value)}</label><input${ssrRenderAttr("value", passwordLength.value)} type="range" min="4" max="128" class="w-full"><div class="flex justify-between text-xs text-muted-foreground mt-1"><span>4</span><span>128</span></div></div><div><label class="text-sm font-medium mb-2 block">生成数量</label><select class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><option${ssrRenderAttr("value", 1)}${ssrIncludeBooleanAttr(Array.isArray(passwordCount.value) ? ssrLooseContain(passwordCount.value, 1) : ssrLooseEqual(passwordCount.value, 1)) ? " selected" : ""}>1 个密码</option><option${ssrRenderAttr("value", 5)}${ssrIncludeBooleanAttr(Array.isArray(passwordCount.value) ? ssrLooseContain(passwordCount.value, 5) : ssrLooseEqual(passwordCount.value, 5)) ? " selected" : ""}>5 个密码</option><option${ssrRenderAttr("value", 10)}${ssrIncludeBooleanAttr(Array.isArray(passwordCount.value) ? ssrLooseContain(passwordCount.value, 10) : ssrLooseEqual(passwordCount.value, 10)) ? " selected" : ""}>10 个密码</option><option${ssrRenderAttr("value", 20)}${ssrIncludeBooleanAttr(Array.isArray(passwordCount.value) ? ssrLooseContain(passwordCount.value, 20) : ssrLooseEqual(passwordCount.value, 20)) ? " selected" : ""}>20 个密码</option></select></div></div><div class="mt-6"><label class="text-sm font-medium mb-3 block">包含字符类型</label><div class="grid grid-cols-2 md:grid-cols-4 gap-3"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.uppercase) ? ssrLooseContain(options.value.uppercase, null) : options.value.uppercase) ? " checked" : ""} class="mr-2"><span class="text-sm">大写字母 (A-Z)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.lowercase) ? ssrLooseContain(options.value.lowercase, null) : options.value.lowercase) ? " checked" : ""} class="mr-2"><span class="text-sm">小写字母 (a-z)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.numbers) ? ssrLooseContain(options.value.numbers, null) : options.value.numbers) ? " checked" : ""} class="mr-2"><span class="text-sm">数字 (0-9)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.symbols) ? ssrLooseContain(options.value.symbols, null) : options.value.symbols) ? " checked" : ""} class="mr-2"><span class="text-sm">特殊符号 (!@#$...)</span></label></div></div><div class="mt-6 pt-6 border-t"><label class="text-sm font-medium mb-3 block">高级选项</label><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.excludeSimilar) ? ssrLooseContain(options.value.excludeSimilar, null) : options.value.excludeSimilar) ? " checked" : ""} class="mr-2"><span class="text-sm">排除相似字符 (0O, l1, I)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.excludeAmbiguous) ? ssrLooseContain(options.value.excludeAmbiguous, null) : options.value.excludeAmbiguous) ? " checked" : ""} class="mr-2"><span class="text-sm">排除歧义字符 ({}\`~, etc.)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.requireEachType) ? ssrLooseContain(options.value.requireEachType, null) : options.value.requireEachType) ? " checked" : ""} class="mr-2"><span class="text-sm">每种类型至少一个</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.noRepeating) ? ssrLooseContain(options.value.noRepeating, null) : options.value.noRepeating) ? " checked" : ""} class="mr-2"><span class="text-sm">不重复字符</span></label></div></div><div class="mt-6"><label class="text-sm font-medium mb-2 block">自定义字符集（可选）</label><textarea placeholder="输入要包含的自定义字符..." class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" rows="2">${ssrInterpolate(customChars.value)}</textarea></div></div><div class="flex justify-center"><button class="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Shield), { class: "w-5 h-5" }, null, _parent));
      _push(` 生成密码 </button></div>`);
      if (generatedPasswords.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">密码强度分析</h2><div class="space-y-4"><!--[-->`);
        ssrRenderList(generatedPasswords.value, (password, index) => {
          _push(`<div class="space-y-2"><div class="flex items-center justify-between"><div class="flex items-center gap-3 flex-1"><code class="font-mono text-lg bg-muted px-3 py-2 rounded select-all">${ssrInterpolate(password)}</code><div class="flex gap-2"><button class="p-2 text-muted-foreground hover:text-foreground transition-colors">`);
          _push(ssrRenderComponent(unref(Copy), { class: "w-4 h-4" }, null, _parent));
          _push(`</button><button class="p-2 text-muted-foreground hover:text-foreground transition-colors">`);
          _push(ssrRenderComponent(unref(RefreshCw), { class: "w-4 h-4" }, null, _parent));
          _push(`</button></div></div><div class="flex items-center gap-2 ml-4"><span class="text-sm font-medium">${ssrInterpolate(getStrengthLabel(password))}</span><div class="w-32 h-2 bg-muted rounded-full overflow-hidden"><div class="${ssrRenderClass([getStrengthColor(password), "h-full transition-all"])}" style="${ssrRenderStyle({ width: getStrengthPercent(password) + "%" })}"></div></div></div></div><div class="text-xs text-muted-foreground"> 熵值: ${ssrInterpolate(calculateEntropy(password))} 位 · ${ssrInterpolate(getCrackTime(password))}</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (generatedPasswords.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">批量操作</h2><div class="flex gap-3"><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded transition-colors"> 复制所有密码 </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded transition-colors"> 下载密码文件 </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded transition-colors"> 清空密码 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">密码安全建议</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-medium mb-3 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Check), { class: "w-5 h-5 text-green-500" }, null, _parent));
      _push(` 最佳实践 </h3><ul class="space-y-2 text-sm text-muted-foreground"><li>使用至少 12 个字符的密码</li><li>包含大小写字母、数字和特殊符号</li><li>避免使用个人信息（生日、姓名等）</li><li>不要重复使用相同的密码</li><li>定期更换重要账户的密码</li></ul></div><div><h3 class="font-medium mb-3 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-5 h-5 text-yellow-500" }, null, _parent));
      _push(` 避免的做法 </h3><ul class="space-y-2 text-sm text-muted-foreground"><li>不要使用常见的单词或短语</li><li>避免使用连续或重复的字符（123, aaa）</li><li>不要在多个网站使用相同密码</li><li>不要将密码写在明文位置</li><li>不要通过不安全的渠道传输密码</li></ul></div></div><div class="mt-6 pt-6 border-t"><h3 class="font-medium mb-3">密码管理</h3><p class="text-sm text-muted-foreground mb-3"> 推荐使用密码管理器来安全地存储和管理您的密码： </p><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="p-4 bg-muted rounded-lg"><h4 class="font-medium mb-1">本地密码管理器</h4><p class="text-xs text-muted-foreground">如 KeePass、Bitwarden</p></div><div class="p-4 bg-muted rounded-lg"><h4 class="font-medium mb-1">浏览器密码管理器</h4><p class="text-xs text-muted-foreground">Chrome、Firefox 内置功能</p></div><div class="p-4 bg-muted rounded-lg"><h4 class="font-medium mb-1">两步验证 (2FA)</h4><p class="text-xs text-muted-foreground">增加额外的安全层</p></div></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/crypto/uuid-generator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>UUID生成器</p><p class="text-xs text-muted-foreground"${_scopeId}>生成唯一标识符</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "UUID生成器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "生成唯一标识符")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>SHA生成器</p><p class="text-xs text-muted-foreground"${_scopeId}>生成哈希值</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Shield), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "SHA生成器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "生成哈希值")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>AES加密</p><p class="text-xs text-muted-foreground"${_scopeId}>对称加密工具</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Lock), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "AES加密"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "对称加密工具")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=password-generator-B-MEhE8O.js.map
