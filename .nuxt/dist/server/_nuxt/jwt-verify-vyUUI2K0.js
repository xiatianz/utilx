import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { c as categories } from "./categories-guMUDMNS.js";
import { t as tools } from "./tools-CG9LGULA.js";
import { e as addRecentTool, f as useSeoMeta, n as navigateTo } from "../server.mjs";
import { _ as _sfc_main$1 } from "./ToolCard-GG_LcR18.js";
import { Clock, Calendar, AlertCircle } from "lucide-vue-next";
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
import "./categoryColors-w89ks1yN.js";
const _sfc_main = {
  __name: "jwt-verify",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const jwtToken = ref("");
    const verifyMethod = ref("none");
    const secretKey = ref("");
    const publicKey = ref("");
    const clockSkew = ref(60);
    const requiredClaims = ref("");
    const customClaims = ref([]);
    const verifyResult = ref(null);
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "jwt-verify"
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
    const jwtStructure = computed(() => {
      if (!jwtToken.value) return null;
      const parts = jwtToken.value.split(".");
      return {
        header: parts[0] ? parts[0].substring(0, 20) + "..." : "",
        payload: parts[1] ? parts[1].substring(0, 20) + "..." : "",
        signature: parts[2] ? parts[2].substring(0, 20) + "..." : ""
      };
    });
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("jwt-verify");
    useSeoMeta({
      title: "JWT验证器 - 在线JWT Token验证工具",
      description: "免费在线JWT验证工具，验证JSON Web Token的签名有效性和时效性，支持多种算法和自定义验证规则。",
      keywords: ["JWT", "验证器", "JSON Web Token", "Token验证", "签名验证", "JWT Verify"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">JWT验证器</h1><p class="text-muted-foreground max-w-3xl">JSON Web Token在线验证工具，验证JWT令牌的签名有效性和时效性，支持多种签名算法和自定义密钥验证。</p></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">JWT Token</h3><div class="space-y-4"><div class="flex items-center justify-between"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> 加载示例 </button></div><textarea placeholder="请输入JWT Token，例如：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" class="w-full h-32 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(jwtToken.value)}</textarea>`);
      if (jwtStructure.value) {
        _push(`<div class="text-sm text-muted-foreground"><span>结构：${ssrInterpolate(jwtStructure.value.header)} . ${ssrInterpolate(jwtStructure.value.payload)} . ${ssrInterpolate(jwtStructure.value.signature)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">验证设置</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">签名验证方式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="none"${ssrIncludeBooleanAttr(Array.isArray(verifyMethod.value) ? ssrLooseContain(verifyMethod.value, "none") : ssrLooseEqual(verifyMethod.value, "none")) ? " selected" : ""}>仅解析，不验证签名</option><option value="secret"${ssrIncludeBooleanAttr(Array.isArray(verifyMethod.value) ? ssrLooseContain(verifyMethod.value, "secret") : ssrLooseEqual(verifyMethod.value, "secret")) ? " selected" : ""}>使用密钥验证</option><option value="public"${ssrIncludeBooleanAttr(Array.isArray(verifyMethod.value) ? ssrLooseContain(verifyMethod.value, "public") : ssrLooseEqual(verifyMethod.value, "public")) ? " selected" : ""}>使用公钥验证</option></select></div>`);
      if (verifyMethod.value === "secret") {
        _push(`<div><label class="text-sm font-medium mb-2 block">密钥（Secret Key）</label><input${ssrRenderAttr("value", secretKey.value)} type="password" placeholder="输入用于验证的密钥" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><div class="mt-2 text-xs text-muted-foreground"> HS256/HS384/HS512算法使用 </div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (verifyMethod.value === "public") {
        _push(`<div><label class="text-sm font-medium mb-2 block">公钥（Public Key）</label><textarea placeholder="输入PEM格式的公钥" class="w-full h-24 p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(publicKey.value)}</textarea><div class="mt-2 text-xs text-muted-foreground"> RS256/RS384/RS512、ES256/ES384/ES512、PS256/PS384/PS512算法使用 </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!jwtToken.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 验证JWT </button><button${ssrIncludeBooleanAttr(!jwtToken.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 仅解析 </button></div>`);
      if (verifyResult.value) {
        _push(`<div class="space-y-6 mb-8"><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">验证结果</h3><div class="space-y-4"><div class="${ssrRenderClass([verifyResult.value.signature.valid ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200", "flex items-center justify-between p-4 rounded-lg"])}"><div class="flex items-center gap-3"><div class="${ssrRenderClass([verifyResult.value.signature.valid ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600", "p-2 rounded-full"])}"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">`);
        if (verifyResult.value.signature.valid) {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`);
        } else {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`);
        }
        _push(`</svg></div><div><div class="font-medium">签名验证</div><div class="text-sm text-muted-foreground">${ssrInterpolate(verifyResult.value.signature.message)}</div></div></div><div class="text-sm"> 算法：${ssrInterpolate(verifyResult.value.header?.alg || "N/A")}</div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="${ssrRenderClass([verifyResult.value.time.valid ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200", "p-4 rounded-lg"])}"><div class="flex items-center gap-2 mb-2">`);
        _push(ssrRenderComponent(unref(Clock), {
          class: ["w-4 h-4", verifyResult.value.time.valid ? "text-green-600" : "text-red-600"]
        }, null, _parent));
        _push(`<span class="font-medium text-sm">生效时间 (nbf)</span></div><div class="text-sm"><div>${ssrInterpolate(verifyResult.value.time.nbf || "未设置")}</div>`);
        if (verifyResult.value.time.nbfStatus) {
          _push(`<div class="${ssrRenderClass(verifyResult.value.time.nbfStatus.valid ? "text-green-600" : "text-red-600")}">${ssrInterpolate(verifyResult.value.time.nbfStatus.message)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="${ssrRenderClass([verifyResult.value.time.valid ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200", "p-4 rounded-lg"])}"><div class="flex items-center gap-2 mb-2">`);
        _push(ssrRenderComponent(unref(Calendar), {
          class: ["w-4 h-4", verifyResult.value.time.valid ? "text-green-600" : "text-amber-600"]
        }, null, _parent));
        _push(`<span class="font-medium text-sm">签发时间 (iat)</span></div><div class="text-sm"><div>${ssrInterpolate(verifyResult.value.time.iat || "未设置")}</div><div class="text-muted-foreground">${ssrInterpolate(verifyResult.value.time.iatAge)}</div></div></div><div class="${ssrRenderClass([verifyResult.value.time.valid ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200", "p-4 rounded-lg"])}"><div class="flex items-center gap-2 mb-2">`);
        _push(ssrRenderComponent(unref(AlertCircle), {
          class: ["w-4 h-4", verifyResult.value.time.valid ? "text-green-600" : "text-red-600"]
        }, null, _parent));
        _push(`<span class="font-medium text-sm">过期时间 (exp)</span></div><div class="text-sm"><div>${ssrInterpolate(verifyResult.value.time.exp || "未设置")}</div>`);
        if (verifyResult.value.time.expStatus) {
          _push(`<div class="${ssrRenderClass(verifyResult.value.time.expStatus.valid ? "text-green-600" : "text-red-600")}">${ssrInterpolate(verifyResult.value.time.expStatus.message)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="border border-border rounded-lg p-6"><h4 class="font-semibold mb-4">Header (头部)</h4><div class="space-y-3"><!--[-->`);
        ssrRenderList(verifyResult.value.header, (value, key) => {
          _push(`<div><div class="text-sm"><span class="text-muted-foreground">${ssrInterpolate(key)}:</span><span class="ml-2 font-mono">${ssrInterpolate(value)}</span></div></div>`);
        });
        _push(`<!--]--></div><div class="mt-4"><h5 class="text-sm font-medium mb-2">原始Header (Base64)</h5><div class="bg-muted/50 rounded p-3"><code class="text-xs break-all">${ssrInterpolate(verifyResult.value.rawHeader)}</code></div></div></div><div class="border border-border rounded-lg p-6"><h4 class="font-semibold mb-4">Payload (载荷)</h4><div class="space-y-3"><!--[-->`);
        ssrRenderList(verifyResult.value.payload, (value, key) => {
          _push(`<div><div class="text-sm"><span class="text-muted-foreground">${ssrInterpolate(key)}:</span>`);
          if (typeof value === "object") {
            _push(`<span class="ml-2"><pre class="inline text-xs bg-muted/50 px-2 py-1 rounded">${ssrInterpolate(JSON.stringify(value, null, 2))}</pre></span>`);
          } else {
            _push(`<span class="ml-2 font-mono">${ssrInterpolate(value)}</span>`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div><div class="mt-4"><h5 class="text-sm font-medium mb-2">原始Payload (Base64)</h5><div class="bg-muted/50 rounded p-3"><code class="text-xs break-all">${ssrInterpolate(verifyResult.value.rawPayload)}</code></div></div></div></div><div class="border border-border rounded-lg p-6"><h4 class="font-semibold mb-4">Signature (签名)</h4><div class="bg-muted/50 rounded p-3"><code class="text-xs break-all">${ssrInterpolate(verifyResult.value.rawSignature)}</code></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">高级验证选项</h3><div class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block">允许的时钟偏差（秒）</label><input${ssrRenderAttr("value", clockSkew.value)} type="number" min="0" max="300" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><div class="mt-1 text-xs text-muted-foreground"> 用于解决服务器时间不同步问题，通常设置为60秒 </div></div><div><label class="text-sm font-medium mb-2 block">必填声明（Claims）</label><input${ssrRenderAttr("value", requiredClaims.value)} type="text" placeholder="例如：iss,aud,sub" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><div class="mt-1 text-xs text-muted-foreground"> 用逗号分隔的声明列表，验证这些声明是否存在 </div></div></div><div><label class="text-sm font-medium mb-2 block">自定义声明验证</label><div class="space-y-2"><!--[-->`);
      ssrRenderList(customClaims.value, (claim, index) => {
        _push(`<div class="flex gap-2"><input${ssrRenderAttr("value", claim.name)} type="text" placeholder="声明名称" class="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><input${ssrRenderAttr("value", claim.value)} type="text" placeholder="期望值" class="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><button class="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"> 删除 </button></div>`);
      });
      _push(`<!--]--><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> 添加声明 </button></div></div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">JWT验证最佳实践</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-primary mb-2">安全检查清单</h4><ul class="text-sm space-y-1"><li>✓ 验证签名算法是否为预期算法</li><li>✓ 检查exp声明，拒绝过期的token</li><li>✓ 检查nbf声明，拒绝未生效的token</li><li>✓ 验证iss（签发者）声明</li><li>✓ 验证aud（受众）声明</li><li>✓ 考虑时钟偏差，通常30-60秒</li></ul></div><div><h4 class="font-medium text-primary mb-2">常见安全问题</h4><ul class="text-sm space-y-1 text-amber-600"><li>• 接受&quot;none&quot;算法（无签名）</li><li>• 不验证exp过期时间</li><li>• 信任算法头部中的值</li><li>• 使用弱密钥或泄露的密钥</li><li>• 在URL中传输JWT（可能被日志记录）</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/jwt-verify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=jwt-verify-vyUUI2K0.js.map
