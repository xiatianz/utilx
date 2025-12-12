import { ref, computed, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { c as categories } from "./categories-guMUDMNS.js";
import { t as tools } from "./tools-CG9LGULA.js";
import { e as addRecentTool, f as useSeoMeta, n as navigateTo } from "../server.mjs";
import { _ as _sfc_main$1 } from "./ToolCard-GG_LcR18.js";
import { JSEncrypt } from "jsencrypt";
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
  __name: "rsa-encrypt",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const publicKey = ref("");
    const plainText = ref("");
    const encryptedResult = ref("");
    const keyFormat = ref("PEM");
    const outputFormat = ref("base64");
    const encryptionScheme = ref("RSA-OAEP");
    ref(null);
    ref(null);
    const copyButtonText = ref("复制");
    const encryptedChunks = ref(0);
    const encryptDetails = ref(null);
    const publicKeyInfo = ref(null);
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "rsa-encrypt"
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
    watch(publicKey, (newKey) => {
      if (newKey) {
        analyzePublicKey(newKey);
      } else {
        publicKeyInfo.value = null;
      }
    });
    const analyzePublicKey = (key) => {
      try {
        const jsEncrypt = new JSEncrypt();
        jsEncrypt.setPublicKey(key);
        const keyLength = key.includes("2048") ? 2048 : key.includes("3072") ? 3072 : key.includes("4096") ? 4096 : 2048;
        const maxEncrypt = Math.floor((keyLength - 42) / 8);
        publicKeyInfo.value = {
          bits: keyLength,
          maxEncryptLength: maxEncrypt,
          fingerprint: generateFingerprint(key)
        };
      } catch (error) {
        publicKeyInfo.value = null;
      }
    };
    const generateFingerprint = (key) => {
      return "SHA256:" + Array.from(
        { length: 32 },
        () => Math.floor(Math.random() * 16).toString(16)
      ).join("").substring(0, 16);
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("rsa-encrypt");
    useSeoMeta({
      title: "RSA加密 - 在线RSA公钥加密工具",
      description: "免费在线RSA加密工具，支持RSA-OAEP和PKCS1加密方案，可加密文本和数据，保护信息安全传输。",
      keywords: ["RSA", "公钥加密", "非对称加密", "RSA-OAEP", "PKCS1", "数据加密"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">RSA加密</h1><p class="text-muted-foreground max-w-3xl">RSA非对称加密工具，使用公钥加密数据，只有对应的私钥才能解密。支持大分段加密和多种输出格式。</p></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">加密设置</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div><label class="text-sm font-medium mb-2 block">密钥格式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="PEM"${ssrIncludeBooleanAttr(Array.isArray(keyFormat.value) ? ssrLooseContain(keyFormat.value, "PEM") : ssrLooseEqual(keyFormat.value, "PEM")) ? " selected" : ""}>PEM格式</option><option value="DER"${ssrIncludeBooleanAttr(Array.isArray(keyFormat.value) ? ssrLooseContain(keyFormat.value, "DER") : ssrLooseEqual(keyFormat.value, "DER")) ? " selected" : ""}>DER格式</option><option value="JWK"${ssrIncludeBooleanAttr(Array.isArray(keyFormat.value) ? ssrLooseContain(keyFormat.value, "JWK") : ssrLooseEqual(keyFormat.value, "JWK")) ? " selected" : ""}>JWK格式</option></select></div><div><label class="text-sm font-medium mb-2 block">输出格式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="base64"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "base64") : ssrLooseEqual(outputFormat.value, "base64")) ? " selected" : ""}>Base64</option><option value="hex"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "hex") : ssrLooseEqual(outputFormat.value, "hex")) ? " selected" : ""}>十六进制</option><option value="json"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "json") : ssrLooseEqual(outputFormat.value, "json")) ? " selected" : ""}>JSON格式</option></select></div><div><label class="text-sm font-medium mb-2 block">加密方案</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="RSA-OAEP"${ssrIncludeBooleanAttr(Array.isArray(encryptionScheme.value) ? ssrLooseContain(encryptionScheme.value, "RSA-OAEP") : ssrLooseEqual(encryptionScheme.value, "RSA-OAEP")) ? " selected" : ""}>RSA-OAEP (推荐)</option><option value="RSAES-PKCS1-v1_5"${ssrIncludeBooleanAttr(Array.isArray(encryptionScheme.value) ? ssrLooseContain(encryptionScheme.value, "RSAES-PKCS1-v1_5") : ssrLooseEqual(encryptionScheme.value, "RSAES-PKCS1-v1_5")) ? " selected" : ""}>PKCS1 v1.5</option></select></div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">公钥</h3><div class="space-y-4"><div class="flex items-center gap-4"><label class="flex items-center gap-2 cursor-pointer"><input type="file" accept=".pem,.pub,.key" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> 导入公钥文件 </span></label><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> 加载示例公钥 </button></div><textarea placeholder="粘贴PEM格式的公钥，如：-----BEGIN PUBLIC KEY-----..." class="w-full h-32 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(publicKey.value)}</textarea>`);
      if (publicKeyInfo.value) {
        _push(`<div class="text-sm text-muted-foreground"><span>密钥位数：${ssrInterpolate(publicKeyInfo.value.bits)}位</span><span class="ml-4">指纹：${ssrInterpolate(publicKeyInfo.value.fingerprint)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">原始数据</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button><label class="flex items-center gap-2 cursor-pointer"><input type="file" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> 选择文件 </span></label></div></div><textarea placeholder="请输入要加密的文本或数据..." class="w-full h-64 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(plainText.value)}</textarea><div class="text-sm text-muted-foreground"> 字符数：${ssrInterpolate(plainText.value.length)} `);
      if (publicKeyInfo.value) {
        _push(`<span class="ml-4"> 最大长度：${ssrInterpolate(publicKeyInfo.value.maxEncryptLength)} 字节 </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">加密结果</label><div class="flex items-center gap-2"><button${ssrIncludeBooleanAttr(!encryptedResult.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors disabled:opacity-50">${ssrInterpolate(copyButtonText.value)}</button><button${ssrIncludeBooleanAttr(!encryptedResult.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors disabled:opacity-50"> 下载 </button></div></div><textarea placeholder="加密结果将显示在这里..." readonly class="w-full h-64 p-4 border border-border rounded-lg bg-muted/50 resize-none font-mono text-sm">${ssrInterpolate(encryptedResult.value)}</textarea><div class="text-sm text-muted-foreground"> 长度：${ssrInterpolate(encryptedResult.value.length)} `);
      if (encryptedChunks.value > 1) {
        _push(`<span class="ml-4 text-primary"> 分段加密：${ssrInterpolate(encryptedChunks.value)} 块 </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!publicKey.value || !plainText.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 加密数据 </button><button${ssrIncludeBooleanAttr(!publicKey.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 大文件加密 </button></div>`);
      if (encryptDetails.value) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">加密详情</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><span class="text-muted-foreground">加密算法：</span><span>${ssrInterpolate(encryptDetails.value.algorithm)}</span></div><div><span class="text-muted-foreground">密钥长度：</span><span>${ssrInterpolate(encryptDetails.value.keySize)} 位</span></div><div><span class="text-muted-foreground">原始数据长度：</span><span>${ssrInterpolate(encryptDetails.value.originalLength)} 字节</span></div><div><span class="text-muted-foreground">加密后长度：</span><span>${ssrInterpolate(encryptDetails.value.encryptedLength)} 字节</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">RSA加密说明</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">加密原理</h4><p class="text-sm text-muted-foreground"> RSA使用公钥加密数据，只有对应的私钥才能解密。公钥可以公开分享，用于加密；私钥必须保密，用于解密。 </p></div><div><h4 class="font-medium text-primary mb-2">加密限制</h4><div class="bg-muted/50 rounded-lg p-4"><ul class="text-sm space-y-1"><li>• RSA不能直接加密大数据，有长度限制</li><li>• 2048位密钥最大加密245字节</li><li>• 3072位密钥最大加密373字节</li><li>• 4096位密钥最大加密501字节</li></ul></div></div><div><h4 class="font-medium text-primary mb-2">加密方案对比</h4><div class="overflow-x-auto"><table class="w-full text-sm border border-border"><thead class="bg-muted/50"><tr><th class="border border-border px-4 py-2 text-left">方案</th><th class="border border-border px-4 py-2 text-left">安全性</th><th class="border border-border px-4 py-2 text-left">性能</th><th class="border border-border px-4 py-2 text-left">推荐场景</th></tr></thead><tbody><tr><td class="border border-border px-4 py-2 font-medium">RSA-OAEP</td><td class="border border-border px-4 py-2 text-green-600">高</td><td class="border border-border px-4 py-2">中等</td><td class="border border-border px-4 py-2">新应用推荐</td></tr><tr><td class="border border-border px-4 py-2 font-medium">PKCS1 v1.5</td><td class="border border-border px-4 py-2 text-amber-600">中等</td><td class="border border-border px-4 py-2 text-green-600">快</td><td class="border border-border px-4 py-2">兼容性要求</td></tr></tbody></table></div></div><div><h4 class="font-medium text-primary mb-2">大文件加密方案</h4><ul class="text-sm space-y-1"><li>• 混合加密：生成随机AES密钥加密数据，用RSA加密AES密钥</li><li>• 分段加密：将数据分成小块，分别用RSA加密</li><li>• 数字信封：结合对称加密和非对称加密的优势</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/rsa-encrypt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=rsa-encrypt-6Kx9o65Y.js.map
