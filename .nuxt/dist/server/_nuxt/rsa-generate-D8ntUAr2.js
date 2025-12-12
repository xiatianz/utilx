import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
        "1024": "80位",
        "2048": "112位",
        "3072": "128位",
        "4096": "152位"
      };
      return strengths[bits] || "N/A";
    };
    const getRecommendedUsage = (bits) => {
      const usages = {
        "1024": "仅用于测试（已不安全）",
        "2048": "常规应用、数字签名",
        "3072": "敏感数据保护",
        "4096": "高价值资产、长期保护"
      };
      return usages[bits] || "N/A";
    };
    const getCrackTime = (bits) => {
      const times = {
        "1024": "数小时到数天",
        "2048": "数百万年",
        "3072": "数十亿年",
        "4096": "数万亿年"
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
      title: "RSA密钥生成器 - 在线RSA公钥私钥生成工具",
      description: "免费在线RSA密钥对生成器，支持1024/2048/3072/4096位密钥，PEM格式，公钥私钥生成和下载。",
      keywords: ["RSA", "密钥生成器", "公钥", "私钥", "非对称加密", "PEM"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">RSA密钥生成器</h1><p class="text-muted-foreground max-w-3xl">在线生成RSA公钥和私钥对，支持多种密钥长度（1024/2048/4096位），可导出为PEM、DER等格式。</p></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">密钥设置</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><div><label class="text-sm font-medium mb-2 block">密钥长度</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="1024"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "1024") : ssrLooseEqual(keySize.value, "1024")) ? " selected" : ""}>1024 位（不推荐）</option><option value="2048"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "2048") : ssrLooseEqual(keySize.value, "2048")) ? " selected" : ""}>2048 位（推荐）</option><option value="3072"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "3072") : ssrLooseEqual(keySize.value, "3072")) ? " selected" : ""}>3072 位</option><option value="4096"${ssrIncludeBooleanAttr(Array.isArray(keySize.value) ? ssrLooseContain(keySize.value, "4096") : ssrLooseEqual(keySize.value, "4096")) ? " selected" : ""}>4096 位（高安全）</option></select><div class="mt-2 text-xs text-muted-foreground"> 更长的密钥提供更高的安全性，但生成速度较慢 </div></div><div><label class="text-sm font-medium mb-2 block">密钥格式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="PEM"${ssrIncludeBooleanAttr(Array.isArray(keyFormat.value) ? ssrLooseContain(keyFormat.value, "PEM") : ssrLooseEqual(keyFormat.value, "PEM")) ? " selected" : ""}>PEM (文本格式)</option><option value="DER"${ssrIncludeBooleanAttr(Array.isArray(keyFormat.value) ? ssrLooseContain(keyFormat.value, "DER") : ssrLooseEqual(keyFormat.value, "DER")) ? " selected" : ""}>DER (二进制格式)</option></select></div><div><label class="text-sm font-medium mb-2 block">密钥类型</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="RSA"${ssrIncludeBooleanAttr(Array.isArray(keyType.value) ? ssrLooseContain(keyType.value, "RSA") : ssrLooseEqual(keyType.value, "RSA")) ? " selected" : ""}>RSA</option><option value="RSA-OAEP"${ssrIncludeBooleanAttr(Array.isArray(keyType.value) ? ssrLooseContain(keyType.value, "RSA-OAEP") : ssrLooseEqual(keyType.value, "RSA-OAEP")) ? " selected" : ""}>RSA-OAEP</option></select></div></div><div class="mt-6"><label class="text-sm font-medium mb-3 block">附加选项</label><div class="flex flex-wrap gap-4"><label class="flex items-center gap-2"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(includeExponent.value) ? ssrLooseContain(includeExponent.value, null) : includeExponent.value) ? " checked" : ""} class="rounded border-border"><span class="text-sm">自定义指数</span></label><label class="flex items-center gap-2"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(includePassphrase.value) ? ssrLooseContain(includePassphrase.value, null) : includePassphrase.value) ? " checked" : ""} class="rounded border-border"><span class="text-sm">私钥密码保护</span></label></div></div>`);
      if (includeExponent.value) {
        _push(`<div class="mt-4"><label class="text-sm font-medium mb-2 block">公钥指数</label><input${ssrRenderAttr("value", publicExponent.value)} type="number" placeholder="65537" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (includePassphrase.value) {
        _push(`<div class="mt-4"><label class="text-sm font-medium mb-2 block">私钥密码</label><input${ssrRenderAttr("value", passphrase.value)} type="password" placeholder="输入密码保护私钥" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(isGenerating.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(isGenerating.value ? "生成中..." : "生成密钥对")}</button><button${ssrIncludeBooleanAttr(!publicKey.value || !privateKey.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 下载密钥文件 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> 清空 </button></div>`);
      if (isGenerating.value) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><div class="flex items-center gap-3"><div class="animate-spin w-5 h-5 border-2 border-primary border-t-transparent rounded-full"></div><span>正在生成 ${ssrInterpolate(keySize.value)} 位RSA密钥对，请稍候...</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (publicKey.value && privateKey.value) {
        _push(`<div class="space-y-6 mb-8"><div class="border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><span>公钥 (Public Key)</span><span class="text-sm text-muted-foreground">(${ssrInterpolate(keySize.value)} bits)</span></h3><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> 复制 </button></div></div><pre class="bg-muted/50 rounded-lg p-4 overflow-x-auto text-xs font-mono">${ssrInterpolate(publicKey.value)}</pre></div><div class="border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><span>私钥 (Private Key)</span><span class="text-sm text-muted-foreground">(${ssrInterpolate(keySize.value)} bits)</span>`);
        if (includePassphrase.value && passphrase.value) {
          _push(`<span class="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded"> 已加密 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h3><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> 复制 </button></div></div><pre class="bg-muted/50 rounded-lg p-4 overflow-x-auto text-xs font-mono">${ssrInterpolate(privateKey.value)}</pre></div><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">密钥信息</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-primary mb-2">基本参数</h4><ul class="space-y-2 text-sm"><li><span class="text-muted-foreground">密钥长度：</span><span>${ssrInterpolate(keySize.value)} 位</span></li><li><span class="text-muted-foreground">密钥格式：</span><span>${ssrInterpolate(keyFormat.value)}</span></li><li><span class="text-muted-foreground">密钥类型：</span><span>${ssrInterpolate(keyType.value)}</span></li>`);
        if (publicExponent.value) {
          _push(`<li><span class="text-muted-foreground">公钥指数：</span><span>${ssrInterpolate(publicExponent.value)}</span></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div><div><h4 class="font-medium text-primary mb-2">安全强度</h4><ul class="space-y-2 text-sm"><li><span class="text-muted-foreground">对称密钥等效强度：</span><span>${ssrInterpolate(getEquivalentStrength(keySize.value))}</span></li><li><span class="text-muted-foreground">推荐用途：</span><span>${ssrInterpolate(getRecommendedUsage(keySize.value))}</span></li><li><span class="text-muted-foreground">预计破解时间：</span><span>${ssrInterpolate(getCrackTime(keySize.value))}</span></li></ul></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">关于RSA加密</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">算法原理</h4><p class="text-sm text-muted-foreground"> RSA（Rivest-Shamir-Adleman）是一种非对称加密算法，基于大数分解的数学难题。它使用一对密钥：公钥用于加密，私钥用于解密。 </p></div><div><h4 class="font-medium text-primary mb-2">密钥长度与安全性</h4><div class="overflow-x-auto"><table class="w-full text-sm border border-border"><thead class="bg-muted/50"><tr><th class="border border-border px-4 py-2 text-left">密钥长度</th><th class="border border-border px-4 py-2 text-left">等效对称密钥强度</th><th class="border border-border px-4 py-2 text-left">安全级别</th><th class="border border-border px-4 py-2 text-left">推荐用途</th></tr></thead><tbody><tr><td class="border border-border px-4 py-2">1024位</td><td class="border border-border px-4 py-2">80位</td><td class="border border-border px-4 py-2 text-amber-600">低（不推荐）</td><td class="border border-border px-4 py-2">仅用于测试</td></tr><tr><td class="border border-border px-4 py-2">2048位</td><td class="border border-border px-4 py-2">112位</td><td class="border border-border px-4 py-2 text-green-600">中等（推荐）</td><td class="border border-border px-4 py-2">常规应用</td></tr><tr><td class="border border-border px-4 py-2">3072位</td><td class="border border-border px-4 py-2">128位</td><td class="border border-border px-4 py-2 text-green-600">高</td><td class="border border-border px-4 py-2">敏感数据</td></tr><tr><td class="border border-border px-4 py-2">4096位</td><td class="border border-border px-4 py-2">152位</td><td class="border border-border px-4 py-2 text-green-600">很高</td><td class="border border-border px-4 py-2">高价值资产</td></tr></tbody></table></div></div><div><h4 class="font-medium text-primary mb-2">使用场景</h4><ul class="text-sm space-y-1"><li>• 数字签名：验证数据的完整性和来源</li><li>• 密钥交换：安全地传输对称加密密钥</li><li>• 小数据加密：加密少量敏感数据</li><li>• SSL/TLS证书：HTTPS网站安全通信</li></ul></div><div><h4 class="font-medium text-primary mb-2">安全注意事项</h4><ul class="text-sm space-y-1 text-amber-600"><li>• 私钥必须妥善保管，绝不能泄露</li><li>• 建议使用2048位或更长的密钥</li><li>• 定期更换密钥，特别是在怀疑泄露时</li><li>• 私钥应使用强密码加密保护</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=rsa-generate-D8ntUAr2.js.map
