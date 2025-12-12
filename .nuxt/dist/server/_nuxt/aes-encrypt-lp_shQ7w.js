import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
    const copyButtonText = ref("复制");
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
      title: "AES加密解密 - 在线AES加密工具",
      description: "免费在线AES加密解密工具，支持AES-128/192/256，多种工作模式和填充方式。",
      keywords: ["AES", "加密", "解密", "对称加密", "AES-256", "AES-128"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">AES加密解密</h1><p class="text-muted-foreground max-w-3xl">高级加密标准(AES)在线加密解密工具，支持AES-128、AES-192、AES-256，多种工作模式和填充方式。</p></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">加密设置</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><div><label class="text-sm font-medium mb-2 block">密钥长度</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="128"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "128") : ssrLooseEqual(keySize.value, "128")) ? " selected" : ""}>AES-128 (128位)</option><option value="192"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "192") : ssrLooseEqual(keySize.value, "192")) ? " selected" : ""}>AES-192 (192位)</option><option value="256"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "256") : ssrLooseEqual(keySize.value, "256")) ? " selected" : ""}>AES-256 (256位)</option></select></div><div><label class="text-sm font-medium mb-2 block">工作模式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="CBC"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "CBC") : ssrLooseEqual(mode.value, "CBC")) ? " selected" : ""}>CBC (密码块链接)</option><option value="ECB"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "ECB") : ssrLooseEqual(mode.value, "ECB")) ? " selected" : ""}>ECB (电子密码本)</option><option value="CFB"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "CFB") : ssrLooseEqual(mode.value, "CFB")) ? " selected" : ""}>CFB (密码反馈)</option><option value="OFB"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "OFB") : ssrLooseEqual(mode.value, "OFB")) ? " selected" : ""}>OFB (输出反馈)</option><option value="CTR"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "CTR") : ssrLooseEqual(mode.value, "CTR")) ? " selected" : ""}>CTR (计数器)</option><option value="GCM"${ssrIncludeBooleanAttr(Array.isArray(mode.value) ? ssrLooseContain(mode.value, "GCM") : ssrLooseEqual(mode.value, "GCM")) ? " selected" : ""}>GCM (伽罗瓦计数器)</option></select></div><div><label class="text-sm font-medium mb-2 block">填充方式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(mode.value === "CTR" || mode.value === "GCM") ? " disabled" : ""}><option value="PKCS7"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "PKCS7") : ssrLooseEqual(padding.value, "PKCS7")) ? " selected" : ""}>PKCS7</option><option value="ISO97971"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "ISO97971") : ssrLooseEqual(padding.value, "ISO97971")) ? " selected" : ""}>ISO/IEC 9797-1</option><option value="ANSIX923"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "ANSIX923") : ssrLooseEqual(padding.value, "ANSIX923")) ? " selected" : ""}>ANSI X9.23</option><option value="ZERO"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "ZERO") : ssrLooseEqual(padding.value, "ZERO")) ? " selected" : ""}>Zero Padding</option><option value="NO_PADDING"${ssrIncludeBooleanAttr(Array.isArray(padding.value) ? ssrLooseContain(padding.value, "NO_PADDING") : ssrLooseEqual(padding.value, "NO_PADDING")) ? " selected" : ""}>无填充</option></select></div><div><label class="text-sm font-medium mb-2 block">输出格式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="base64"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "base64") : ssrLooseEqual(outputFormat.value, "base64")) ? " selected" : ""}>Base64</option><option value="hex"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "hex") : ssrLooseEqual(outputFormat.value, "hex")) ? " selected" : ""}>Hex</option><option value="utf8"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "utf8") : ssrLooseEqual(outputFormat.value, "utf8")) ? " selected" : ""}>UTF-8</option></select></div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">密钥和初始向量</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block"> 密钥 <span class="text-xs text-muted-foreground ml-2">(${ssrInterpolate(keySize.value / 8)}字节)</span></label><div class="flex gap-2"><input${ssrRenderAttr("value", secretKey.value)} type="password"${ssrRenderAttr("placeholder", `输入${keySize.value}位密钥`)} class="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> 生成密钥 </button></div><div class="mt-2 text-xs text-muted-foreground"> 密钥长度：${ssrInterpolate(secretKey.value.length * 8)} 位 `);
      if (secretKey.value.length * 8 !== Number(keySize.value)) {
        _push(`<span class="text-amber-600 ml-2"> (需要 ${ssrInterpolate(keySize.value)} 位) </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (mode.value !== "ECB") {
        _push(`<div><label class="text-sm font-medium mb-2 block"> 初始向量 (IV) <span class="text-xs text-muted-foreground ml-2">(16字节)</span></label><div class="flex gap-2"><input${ssrRenderAttr("value", iv.value)} type="password" placeholder="输入16字节初始向量" class="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> 生成IV </button></div><div class="mt-2 text-xs text-muted-foreground"> IV长度：${ssrInterpolate(iv.value.length * 8)} 位 `);
        if (iv.value.length !== 16) {
          _push(`<span class="text-amber-600 ml-2"> (需要 128 位/16 字节) </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">原始文本</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button><label class="flex items-center gap-2 cursor-pointer"><input type="file" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> 选择文件 </span></label></div></div><textarea placeholder="请输入要加密的文本..." class="w-full h-64 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea><div class="text-sm text-muted-foreground"> 字符数：${ssrInterpolate(inputText.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">加密结果</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors">${ssrInterpolate(copyButtonText.value)}</button><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> 下载 </button></div></div><textarea placeholder="加密结果将显示在这里..." readonly class="w-full h-64 p-4 border border-border rounded-lg bg-muted/50 resize-none font-mono text-sm">${ssrInterpolate(outputText.value)}</textarea><div class="text-sm text-muted-foreground"> 长度：${ssrInterpolate(outputText.value.length)}</div></div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!canEncrypt.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 加密 </button><button${ssrIncludeBooleanAttr(!canDecrypt.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 解密 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> 交换数据 </button></div>`);
      if (decryptedText.value !== null) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">解密结果</h3><div class="bg-muted/50 rounded-lg p-4"><pre class="whitespace-pre-wrap text-sm">${ssrInterpolate(decryptedText.value)}</pre></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">关于AES加密</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">算法特点</h4><ul class="text-sm space-y-1"><li>• 对称加密算法，加密和解密使用相同的密钥</li><li>• 支持128、192、256位密钥长度</li><li>• 分组加密，块大小固定为128位</li><li>• 安全性高，被美国政府批准用于机密信息的加密</li></ul></div><div><h4 class="font-medium text-primary mb-2">工作模式说明</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><h5 class="font-medium mb-1">CBC模式</h5><p class="text-muted-foreground">每个明文块先与前一个密文块进行异或操作，再加密</p></div><div><h5 class="font-medium mb-1">ECB模式</h5><p class="text-muted-foreground">相同的明文块会产生相同的密文块，安全性较低</p></div><div><h5 class="font-medium mb-1">CTR模式</h5><p class="text-muted-foreground">将计数器加密后与明文异或，无需填充，可并行处理</p></div><div><h5 class="font-medium mb-1">GCM模式</h5><p class="text-muted-foreground">提供认证加密，同时保证机密性和完整性</p></div></div></div><div><h4 class="font-medium text-primary mb-2">安全注意事项</h4><ul class="text-sm space-y-1 text-amber-600"><li>• 密钥必须保密，不要在不安全的通道传输</li><li>• ECB模式不安全，仅用于特殊场景</li><li>• CBC、CFB、OFB模式需要随机且唯一的IV</li><li>• 建议使用GCM模式或带认证的加密方案</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=aes-encrypt-lp_shQ7w.js.map
