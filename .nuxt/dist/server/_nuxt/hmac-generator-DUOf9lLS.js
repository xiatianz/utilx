import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "hmac-generator",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const secretKey = ref("");
    const message = ref("");
    const hashAlgorithm = ref("SHA-256");
    const outputFormat = ref("hex");
    const hmacResult = ref("");
    const verificationResult = ref(null);
    const batchMessages = ref("");
    const batchResults = ref([]);
    const copyButtonText = ref("复制");
    ref(null);
    const relatedTools = tools.filter(
      (tool) => tool.category === "crypto" && tool.id !== "hmac-generator"
    ).slice(0, 4);
    const formatViewCount = (count) => {
      if (count >= 1e4) {
        return `${(count / 1e4).toFixed(1)}w+`;
      } else if (count >= 1e3) {
        return `${(count / 1e3).toFixed(1)}k+`;
      }
      return `${count}`;
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("hmac-generator");
    useSeoMeta({
      title: "HMAC生成器 - 在线HMAC哈希计算工具",
      description: "免费在线HMAC生成器，支持SHA-1/SHA-256/SHA-512等多种算法，用于消息认证和完整性验证。",
      keywords: ["HMAC", "消息认证码", "SHA", "哈希", "认证", "完整性验证"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">HMAC生成器</h1><p class="text-muted-foreground max-w-3xl">HMAC（Hash-based Message Authentication Code）在线生成器，支持多种哈希算法，用于消息认证和完整性验证。</p></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">算法设置</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block">哈希算法</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="SHA-1"${ssrIncludeBooleanAttr(Array.isArray(hashAlgorithm.value) ? ssrLooseContain(hashAlgorithm.value, "SHA-1") : ssrLooseEqual(hashAlgorithm.value, "SHA-1")) ? " selected" : ""}>HMAC-SHA1 (160位)</option><option value="SHA-256"${ssrIncludeBooleanAttr(Array.isArray(hashAlgorithm.value) ? ssrLooseContain(hashAlgorithm.value, "SHA-256") : ssrLooseEqual(hashAlgorithm.value, "SHA-256")) ? " selected" : ""}>HMAC-SHA256 (256位) - 推荐</option><option value="SHA-384"${ssrIncludeBooleanAttr(Array.isArray(hashAlgorithm.value) ? ssrLooseContain(hashAlgorithm.value, "SHA-384") : ssrLooseEqual(hashAlgorithm.value, "SHA-384")) ? " selected" : ""}>HMAC-SHA384 (384位)</option><option value="SHA-512"${ssrIncludeBooleanAttr(Array.isArray(hashAlgorithm.value) ? ssrLooseContain(hashAlgorithm.value, "SHA-512") : ssrLooseEqual(hashAlgorithm.value, "SHA-512")) ? " selected" : ""}>HMAC-SHA512 (512位)</option><option value="MD5"${ssrIncludeBooleanAttr(Array.isArray(hashAlgorithm.value) ? ssrLooseContain(hashAlgorithm.value, "MD5") : ssrLooseEqual(hashAlgorithm.value, "MD5")) ? " selected" : ""}>HMAC-MD5 (128位) - 不推荐</option></select><div class="mt-2 text-xs text-muted-foreground"> 推荐：SHA-256或更高 </div></div><div><label class="text-sm font-medium mb-2 block">输出格式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="hex"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "hex") : ssrLooseEqual(outputFormat.value, "hex")) ? " selected" : ""}>十六进制 (Hex)</option><option value="base64"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "base64") : ssrLooseEqual(outputFormat.value, "base64")) ? " selected" : ""}>Base64</option><option value="base64url"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "base64url") : ssrLooseEqual(outputFormat.value, "base64url")) ? " selected" : ""}>Base64 URL安全</option><option value="binary"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "binary") : ssrLooseEqual(outputFormat.value, "binary")) ? " selected" : ""}>二进制</option></select></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">密钥 (Secret Key)</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> 生成随机密钥 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><textarea placeholder="请输入HMAC密钥..." class="w-full h-32 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(secretKey.value)}</textarea><div class="text-sm text-muted-foreground"> 密钥长度：${ssrInterpolate(secretKey.value.length)} 字符 `);
      if (hashAlgorithm.value === "SHA-256" && secretKey.value.length < 32) {
        _push(`<span class="text-amber-600 ml-2"> (建议至少32字符) </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">消息 (Message)</label><div class="flex items-center gap-2"><label class="flex items-center gap-2 cursor-pointer"><input type="file" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> 选择文件 </span></label><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><textarea placeholder="请输入要计算HMAC的消息..." class="w-full h-32 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(message.value)}</textarea><div class="text-sm text-muted-foreground"> 消息长度：${ssrInterpolate(message.value.length)} 字符 </div></div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!secretKey.value || !message.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 生成HMAC </button><button${ssrIncludeBooleanAttr(!secretKey.value || !message.value || !hmacResult.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 验证HMAC </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> 交换数据 </button></div>`);
      if (hmacResult.value) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold"> HMAC-${ssrInterpolate(hashAlgorithm.value.replace("SHA-", ""))} 结果 </h3><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors">${ssrInterpolate(copyButtonText.value)}</button><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> 下载 </button></div></div><div class="bg-muted/50 rounded-lg p-4"><pre class="text-sm font-mono break-all">${ssrInterpolate(hmacResult.value)}</pre></div><div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"><div><span class="text-muted-foreground">算法：</span><span>HMAC-${ssrInterpolate(hashAlgorithm.value)}</span></div><div><span class="text-muted-foreground">输出长度：</span><span>${ssrInterpolate(hmacResult.value.length * 8 / 2)} 位</span></div><div><span class="text-muted-foreground">格式：</span><span>${ssrInterpolate(outputFormat.value.toUpperCase())}</span></div><div><span class="text-muted-foreground">字符数：</span><span>${ssrInterpolate(hmacResult.value.length)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (verificationResult.value) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">验证结果</h3>`);
        if (verificationResult.value.valid) {
          _push(`<div class="flex items-center gap-3 text-green-600"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><div><div class="font-medium">HMAC验证成功</div><div class="text-sm">消息完整性得到保证</div></div></div>`);
        } else {
          _push(`<div class="flex items-center gap-3 text-red-600"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg><div><div class="font-medium">HMAC验证失败</div><div class="text-sm">消息可能被篡改或密钥不正确</div></div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">批量生成HMAC</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">消息列表（每行一条）</label><textarea placeholder="输入多条消息，每行一条..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(batchMessages.value)}</textarea></div><button${ssrIncludeBooleanAttr(!secretKey.value || !batchMessages.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 批量生成 </button>`);
      if (batchResults.value.length > 0) {
        _push(`<div class="mt-4"><h4 class="font-medium mb-2">批量生成结果</h4><div class="overflow-x-auto"><table class="w-full text-sm border border-border"><thead class="bg-muted/50"><tr><th class="border border-border px-4 py-2 text-left">#</th><th class="border border-border px-4 py-2 text-left">消息</th><th class="border border-border px-4 py-2 text-left">HMAC</th><th class="border border-border px-4 py-2 text-left">操作</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(batchResults.value, (result, index) => {
          _push(`<tr class="border-b border-border"><td class="border border-border px-4 py-2">${ssrInterpolate(index + 1)}</td><td class="border border-border px-4 py-2 max-w-xs truncate">${ssrInterpolate(result.message)}</td><td class="border border-border px-4 py-2"><code class="text-xs">${ssrInterpolate(result.hmac.substring(0, 40))}...</code></td><td class="border border-border px-4 py-2"><button class="text-primary hover:text-primary/80 text-sm"> 复制 </button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">关于HMAC</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">什么是HMAC？</h4><p class="text-sm text-muted-foreground"> HMAC（Hash-based Message Authentication Code）是一种使用密码学哈希函数和密钥来生成消息认证码的机制。 它可以验证消息的完整性和真实性，防止消息在传输过程中被篡改。 </p></div><div><h4 class="font-medium text-primary mb-2">HMAC特点</h4><ul class="text-sm space-y-1"><li>• 使用密钥进行认证，防止伪造</li><li>• 基于安全的哈希函数（SHA-256等）</li><li>• 长度固定，与消息长度无关</li><li>• 计算速度快，适合大规模使用</li><li>• 抗碰撞性，难以伪造相同HMAC的不同消息</li></ul></div><div><h4 class="font-medium text-primary mb-2">HMAC计算公式</h4><div class="bg-muted/50 rounded-lg p-4 font-mono text-sm"> HMAC(K, m) = H((K ⊕ opad) || H((K ⊕ ipad) || m)) </div><div class="mt-2 text-xs text-muted-foreground"> 其中：K是密钥，m是消息，H是哈希函数，⊕是异或，||是连接，ipad和opad是常量 </div></div><div><h4 class="font-medium text-primary mb-2">应用场景</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><h5 class="font-medium mb-1">API认证</h5><p class="text-muted-foreground">验证API请求的合法性</p></div><div><h5 class="font-medium mb-1">数据完整性</h5><p class="text-muted-foreground">确保数据未被篡改</p></div><div><h5 class="font-medium mb-1">JWT签名</h5><p class="text-muted-foreground">JSON Web Token的签名方案</p></div><div><h5 class="font-medium mb-1">支付验证</h5><p class="text-muted-foreground">支付网关的请求验证</p></div></div></div><div><h4 class="font-medium text-primary mb-2">安全最佳实践</h4><ul class="text-sm space-y-1 text-amber-600"><li>• 使用足够长度的密钥（至少32字节）</li><li>• 优先使用SHA-256或更强的哈希算法</li><li>• 密钥应随机生成并妥善保管</li><li>• 定期轮换密钥以提高安全性</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(unref(relatedTools), (tool) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/hmac-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=hmac-generator-DUOf9lLS.js.map
