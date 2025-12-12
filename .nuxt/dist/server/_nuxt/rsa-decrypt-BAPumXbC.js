import { ref, computed, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { c as categories } from "./categories-guMUDMNS.js";
import { t as tools } from "./tools-CG9LGULA.js";
import { e as addRecentTool, f as useSeoMeta, n as navigateTo } from "../server.mjs";
import { _ as _sfc_main$1 } from "./ToolCard-GG_LcR18.js";
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
    const copyButtonText = ref("复制");
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
      title: "RSA解密 - 在线RSA私钥解密工具",
      description: "免费在线RSA解密工具，使用私钥解密RSA加密的数据，支持多种加密方案，安全恢复原始信息。",
      keywords: ["RSA", "私钥解密", "非对称解密", "RSA-OAEP", "PKCS1", "数据解密"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">RSA解密</h1><p class="text-muted-foreground max-w-3xl">RSA非对称解密工具，使用私钥解密RSA加密的数据。支持多种加密方案和格式，确保数据安全恢复。</p></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">解密设置</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div><label class="text-sm font-medium mb-2 block">密钥格式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="PEM"${ssrIncludeBooleanAttr(Array.isArray(keyFormat.value) ? ssrLooseContain(keyFormat.value, "PEM") : ssrLooseEqual(keyFormat.value, "PEM")) ? " selected" : ""}>PEM格式</option><option value="DER"${ssrIncludeBooleanAttr(Array.isArray(keyFormat.value) ? ssrLooseContain(keyFormat.value, "DER") : ssrLooseEqual(keyFormat.value, "DER")) ? " selected" : ""}>DER格式</option><option value="JWK"${ssrIncludeBooleanAttr(Array.isArray(keyFormat.value) ? ssrLooseContain(keyFormat.value, "JWK") : ssrLooseEqual(keyFormat.value, "JWK")) ? " selected" : ""}>JWK格式</option></select></div><div><label class="text-sm font-medium mb-2 block">输入格式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="base64"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "base64") : ssrLooseEqual(inputFormat.value, "base64")) ? " selected" : ""}>Base64</option><option value="hex"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "hex") : ssrLooseEqual(inputFormat.value, "hex")) ? " selected" : ""}>十六进制</option><option value="json"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "json") : ssrLooseEqual(inputFormat.value, "json")) ? " selected" : ""}>JSON格式</option><option value="raw"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "raw") : ssrLooseEqual(inputFormat.value, "raw")) ? " selected" : ""}>原始格式</option></select></div><div><label class="text-sm font-medium mb-2 block">加密方案</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="RSA-OAEP"${ssrIncludeBooleanAttr(Array.isArray(encryptionScheme.value) ? ssrLooseContain(encryptionScheme.value, "RSA-OAEP") : ssrLooseEqual(encryptionScheme.value, "RSA-OAEP")) ? " selected" : ""}>RSA-OAEP</option><option value="RSAES-PKCS1-v1_5"${ssrIncludeBooleanAttr(Array.isArray(encryptionScheme.value) ? ssrLooseContain(encryptionScheme.value, "RSAES-PKCS1-v1_5") : ssrLooseEqual(encryptionScheme.value, "RSAES-PKCS1-v1_5")) ? " selected" : ""}>PKCS1 v1.5</option></select></div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">私钥</h3><div class="space-y-4"><div class="flex items-center gap-4"><label class="flex items-center gap-2 cursor-pointer"><input type="file" accept=".pem,.key,.private" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> 导入私钥文件 </span></label><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> 加载示例私钥 </button></div><div><label class="text-sm font-medium mb-2 block"> 私钥内容 `);
      if (isPrivateKeyEncrypted.value) {
        _push(`<span class="text-xs text-amber-600 ml-2">（已加密）</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
      if (isPrivateKeyEncrypted.value) {
        _push(`<input${ssrRenderAttr("value", privateKeyPassword.value)} type="password" placeholder="输入私钥密码" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary mb-2">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<textarea placeholder="粘贴PEM格式的私钥，如：-----BEGIN PRIVATE KEY-----..." class="w-full h-32 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(privateKey.value)}</textarea></div>`);
      if (privateKeyInfo.value) {
        _push(`<div class="text-sm text-muted-foreground"><span>密钥位数：${ssrInterpolate(privateKeyInfo.value.bits)}位</span><span class="ml-4">类型：${ssrInterpolate(privateKeyInfo.value.type)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">加密数据</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button><label class="flex items-center gap-2 cursor-pointer"><input type="file" accept=".enc,.txt,.json" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> 选择文件 </span></label></div></div><textarea${ssrRenderAttr("placeholder", `请输入要解密的${inputFormat.value}格式数据...`)} class="w-full h-64 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(encryptedData.value)}</textarea><div class="text-sm text-muted-foreground"> 数据长度：${ssrInterpolate(encryptedData.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">解密结果</label><div class="flex items-center gap-2"><button${ssrIncludeBooleanAttr(!decryptedResult.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors disabled:opacity-50">${ssrInterpolate(copyButtonText.value)}</button><button${ssrIncludeBooleanAttr(!decryptedResult.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors disabled:opacity-50"> 下载 </button></div></div><div class="w-full h-64 p-4 border border-border rounded-lg bg-muted/50 overflow-y-auto">`);
      if (decryptedResult.value) {
        _push(`<pre class="text-sm whitespace-pre-wrap">${ssrInterpolate(decryptedResult.value)}</pre>`);
      } else {
        _push(`<div class="text-sm text-muted-foreground">解密结果将显示在这里...</div>`);
      }
      _push(`</div><div class="text-sm text-muted-foreground"> 长度：${ssrInterpolate(decryptedResult.value.length)}</div></div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!privateKey.value || !encryptedData.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 解密数据 </button><button${ssrIncludeBooleanAttr(!encryptedData.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50"> 自动检测格式 </button></div>`);
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
      if (decryptDetails.value) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">解密详情</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><span class="text-muted-foreground">解密算法：</span><span>${ssrInterpolate(decryptDetails.value.algorithm)}</span></div><div><span class="text-muted-foreground">密钥长度：</span><span>${ssrInterpolate(decryptDetails.value.keySize)} 位</span></div><div><span class="text-muted-foreground">输入数据长度：</span><span>${ssrInterpolate(decryptDetails.value.inputLength)} 字节</span></div><div><span class="text-muted-foreground">解密后长度：</span><span>${ssrInterpolate(decryptDetails.value.outputLength)} 字节</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">RSA解密说明</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">解密要求</h4><ul class="text-sm space-y-1"><li>• 必须使用与加密时对应的私钥</li><li>• 加密方案必须一致（RSA-OAEP或PKCS1 v1.5）</li><li>• 私钥必须正确且未损坏</li><li>• 如果私钥有密码保护，需要提供密码</li></ul></div><div><h4 class="font-medium text-primary mb-2">常见错误</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><h5 class="font-medium text-amber-600 mb-1">Invalid key format</h5><p class="text-muted-foreground">私钥格式错误或不支持</p></div><div><h5 class="font-medium text-amber-600 mb-1">Decryption error</h5><p class="text-muted-foreground">密钥不匹配或数据损坏</p></div><div><h5 class="font-medium text-amber-600 mb-1">Bad padding</h5><p class="text-muted-foreground">填充方案不正确</p></div><div><h5 class="font-medium text-amber-600 mb-1">Password required</h5><p class="text-muted-foreground">私钥需要密码</p></div></div></div><div><h4 class="font-medium text-primary mb-2">私钥安全</h4><ul class="text-sm space-y-1 text-amber-600"><li>• 私钥必须严格保密，不要传输或分享</li><li>• 使用强密码保护私钥文件</li><li>• 定期备份私钥到安全位置</li><li>• 解密后及时清除内存中的敏感数据</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=rsa-decrypt-BAPumXbC.js.map
