import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { c as categories } from "./categories-guMUDMNS.js";
import { t as tools } from "./tools-CG9LGULA.js";
import { e as addRecentTool, f as useSeoMeta, n as navigateTo } from "../server.mjs";
import { _ as _sfc_main$1 } from "./ToolCard-GG_LcR18.js";
import "crypto-js";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
import "./nuxt-link-Bb2DNygF.js";
import "lucide-vue-next";
import "./categoryColors-w89ks1yN.js";
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
    const copyButtonText = ref("复制");
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
      title: "AES解密 - 在线AES数据解密工具",
      description: "免费在线AES解密工具，支持AES-128/192/256，多种工作模式，快速解密AES加密的数据。",
      keywords: ["AES", "解密", "对称解密", "AES-256", "AES-128"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">AES解密</h1><p class="text-muted-foreground max-w-3xl">AES对称解密工具，支持AES-128/192/256，多种工作模式，可解密AES加密的文本和文件。</p></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">解密设置</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><div><label class="text-sm font-medium mb-2 block">密钥长度</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="128"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "128") : ssrLooseEqual(keySize.value, "128")) ? " selected" : ""}>AES-128 (128位)</option><option value="192"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "192") : ssrLooseEqual(keySize.value, "192")) ? " selected" : ""}>AES-192 (192位)</option><option value="256"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "256") : ssrLooseEqual(keySize.value, "256")) ? " selected" : ""}>AES-256 (256位)</option></select></div><div><label class="text-sm font-medium mb-2 block">工作模式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="CBC"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "CBC") : ssrLooseEqual(mode.value, "CBC")) ? " selected" : ""}>CBC (密码块链接)</option><option value="ECB"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "ECB") : ssrLooseEqual(mode.value, "ECB")) ? " selected" : ""}>ECB (电子密码本)</option><option value="CFB"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "CFB") : ssrLooseEqual(mode.value, "CFB")) ? " selected" : ""}>CFB (密码反馈)</option><option value="OFB"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "OFB") : ssrLooseEqual(mode.value, "OFB")) ? " selected" : ""}>OFB (输出反馈)</option><option value="CTR"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "CTR") : ssrLooseEqual(mode.value, "CTR")) ? " selected" : ""}>CTR (计数器)</option><option value="GCM"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "GCM") : ssrLooseEqual(mode.value, "GCM")) ? " selected" : ""}>GCM (伽罗瓦计数器)</option></select></div><div><label class="text-sm font-medium mb-2 block">填充方式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(mode.value === "CTR" || mode.value === "GCM") ? " disabled" : ""}><option value="PKCS7"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "PKCS7") : ssrLooseEqual(padding.value, "PKCS7")) ? " selected" : ""}>PKCS7</option><option value="ISO97971"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "ISO97971") : ssrLooseEqual(padding.value, "ISO97971")) ? " selected" : ""}>ISO/IEC 9797-1</option><option value="ANSIX923"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "ANSIX923") : ssrLooseEqual(padding.value, "ANSIX923")) ? " selected" : ""}>ANSI X9.23</option><option value="ZERO"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "ZERO") : ssrLooseEqual(padding.value, "ZERO")) ? " selected" : ""}>Zero Padding</option><option value="NO_PADDING"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "NO_PADDING") : ssrLooseEqual(padding.value, "NO_PADDING")) ? " selected" : ""}>无填充</option></select></div><div><label class="text-sm font-medium mb-2 block">输入格式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="base64"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "base64") : ssrLooseEqual(inputFormat.value, "base64")) ? " selected" : ""}>Base64</option><option value="hex"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "hex") : ssrLooseEqual(inputFormat.value, "hex")) ? " selected" : ""}>Hex</option><option value="utf8"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "utf8") : ssrLooseEqual(inputFormat.value, "utf8")) ? " selected" : ""}>UTF-8</option></select></div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">密钥和初始向量</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block"> 密钥 <span class="text-xs text-muted-foreground ml-2">(${ssrInterpolate(keySize.value / 8)}字节)</span></label><div class="flex gap-2"><input${ssrRenderAttr("value", secretKey.value)} type="password"${ssrRenderAttr("placeholder", `输入${keySize.value}位密钥`)} class="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> 清空 </button></div><div class="mt-2 text-xs text-muted-foreground"> 密钥长度：${ssrInterpolate(secretKey.value.length * 8)} 位 `);
      if (secretKey.value.length * 8 !== Number(keySize.value)) {
        _push(`<span class="text-amber-600 ml-2"> (需要 ${ssrInterpolate(keySize.value)} 位) </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (mode.value !== "ECB") {
        _push(`<div><label class="text-sm font-medium mb-2 block"> 初始向量 (IV) <span class="text-xs text-muted-foreground ml-2">(16字节)</span></label><div class="flex gap-2"><input${ssrRenderAttr("value", iv.value)} type="password" placeholder="输入16字节初始向量" class="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> 清空 </button></div><div class="mt-2 text-xs text-muted-foreground"> IV长度：${ssrInterpolate(iv.value.length * 8)} 位 `);
        if (iv.value.length !== 16) {
          _push(`<span class="text-amber-600 ml-2"> (需要 128 位/16 字节) </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">加密数据</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button><label class="flex items-center gap-2 cursor-pointer"><input type="file" accept=".txt,.enc,.aes" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> 选择文件 </span></label></div></div><textarea${ssrRenderAttr("placeholder", `请输入要解密的${inputFormat.value}格式数据...`)} class="w-full h-64 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(encryptedData.value)}</textarea><div class="text-sm text-muted-foreground"> 数据长度：${ssrInterpolate(encryptedData.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">解密结果</label><div class="flex items-center gap-2"><button${ssrIncludeBooleanAttr(!decryptedData.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors disabled:opacity-50">${ssrInterpolate(copyButtonText.value)}</button><button${ssrIncludeBooleanAttr(!decryptedData.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors disabled:opacity-50"> 下载 </button></div></div><textarea placeholder="解密结果将显示在这里..." readonly class="w-full h-64 p-4 border border-border rounded-lg bg-muted/50 resize-none">${ssrInterpolate(decryptedData.value)}</textarea><div class="text-sm text-muted-foreground"> 长度：${ssrInterpolate(decryptedData.value.length)}</div></div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!canDecrypt.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 解密数据 </button><button${ssrIncludeBooleanAttr(!encryptedData.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50"> 自动检测格式 </button></div>`);
      if (decryptStatus.value) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">解密状态</h3><div class="${ssrRenderClass([decryptStatus.value.success ? "text-green-600" : "text-red-600", "flex items-center gap-3"])}">`);
        if (decryptStatus.value.success) {
          _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
        } else {
          _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
        }
        _push(`<div><div class="font-medium">${ssrInterpolate(decryptStatus.value.success ? "解密成功" : "解密失败")}</div><div class="text-sm">${ssrInterpolate(decryptStatus.value.message)}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">AES解密说明</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">解密要求</h4><ul class="text-sm space-y-1"><li>• 密钥必须与加密时使用的密钥完全一致</li><li>• 工作模式、填充方式必须与加密时相同</li><li>• CBC、CFB、OFB、GCM模式需要正确的初始向量(IV)</li><li>• 输入数据格式必须正确（Base64或Hex编码）</li></ul></div><div><h4 class="font-medium text-primary mb-2">常见错误</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><h5 class="font-medium text-amber-600 mb-1">Wrong padding</h5><p class="text-muted-foreground">填充方式不正确或密钥错误</p></div><div><h5 class="font-medium text-amber-600 mb-1">Invalid data</h5><p class="text-muted-foreground">输入格式错误或数据损坏</p></div><div><h5 class="font-medium text-amber-600 mb-1">Bad key length</h5><p class="text-muted-foreground">密钥长度与设置不符</p></div><div><h5 class="font-medium text-amber-600 mb-1">Empty result</h5><p class="text-muted-foreground">解密结果为空，可能是密钥错误</p></div></div></div><div><h4 class="font-medium text-primary mb-2">安全建议</h4><ul class="text-sm space-y-1 text-amber-600"><li>• 密钥应通过安全渠道传输，不要明文发送</li><li>• 解密后及时清除内存中的敏感数据</li><li>• 使用强密钥（至少AES-256）</li><li>• 定期更换密钥以提高安全性</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=aes-decrypt-BpRZ3yol.js.map
