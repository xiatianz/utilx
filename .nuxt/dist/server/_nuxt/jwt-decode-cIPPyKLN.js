import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "jwt-decode",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const jwtToken = ref("");
    const parsedJWT = ref({ header: null, payload: null });
    const expirationStatus = ref(null);
    ref(null);
    const copyButtonText = ref("复制");
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "jwt-decode"
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
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("jwt-decode");
    useSeoMeta({
      title: "JWT解码器 - 在线JWT Token解析工具",
      description: "免费在线JWT解码工具，快速解析JWT Token的Header和Payload，验证过期时间。",
      keywords: ["JWT", "JSON Web Token", "解码", "解析", "Token", "认证"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">JWT解码器</h1><p class="text-muted-foreground max-w-3xl">JWT（JSON Web Token）在线解码和验证工具，解码Header和Payload，验证过期时间。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">JWT Token</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><textarea placeholder="请输入JWT Token..." class="w-full h-48 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(jwtToken.value)}</textarea><div class="text-sm text-muted-foreground"> Token长度：${ssrInterpolate(jwtToken.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">解码结果</label><div class="flex items-center gap-2"><button${ssrIncludeBooleanAttr(!parsedJWT.value.header) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors disabled:opacity-50">${ssrInterpolate(copyButtonText.value)}</button></div></div><div class="h-48 border border-border rounded-lg bg-muted/50 overflow-auto">`);
      if (parsedJWT.value.header) {
        _push(`<pre class="p-4 text-sm">${ssrInterpolate(JSON.stringify(parsedJWT.value, null, 2))}</pre>`);
      } else {
        _push(`<div class="flex items-center justify-center h-full text-muted-foreground"> 解码结果将显示在这里... </div>`);
      }
      _push(`</div></div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!jwtToken.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 解码JWT </button><button${ssrIncludeBooleanAttr(!parsedJWT.value.header) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50"> 验证签名 </button></div>`);
      if (parsedJWT.value.header) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">解析结果</h3><div class="space-y-6"><div><h4 class="font-medium text-primary mb-2">Header</h4><div class="bg-muted/50 rounded-lg p-4 text-sm space-y-2"><div><span class="font-medium">算法 (alg):</span><span class="ml-2 text-primary">${ssrInterpolate(parsedJWT.value.header.alg || "N/A")}</span></div><div><span class="font-medium">类型 (typ):</span><span class="ml-2 text-primary">${ssrInterpolate(parsedJWT.value.header.typ || "N/A")}</span></div></div></div><div><h4 class="font-medium text-primary mb-2">Payload</h4><div class="bg-muted/50 rounded-lg p-4 text-sm space-y-2">`);
        if (parsedJWT.value.payload.iss) {
          _push(`<div><span class="font-medium">签发者 (iss):</span><span class="ml-2">${ssrInterpolate(parsedJWT.value.payload.iss)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (parsedJWT.value.payload.sub) {
          _push(`<div><span class="font-medium">主题 (sub):</span><span class="ml-2">${ssrInterpolate(parsedJWT.value.payload.sub)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (parsedJWT.value.payload.aud) {
          _push(`<div><span class="font-medium">接收方 (aud):</span><span class="ml-2">${ssrInterpolate(parsedJWT.value.payload.aud)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (parsedJWT.value.payload.exp) {
          _push(`<div><span class="font-medium">过期时间 (exp):</span><span class="ml-2">${ssrInterpolate(new Date(parsedJWT.value.payload.exp * 1e3).toLocaleString())}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (parsedJWT.value.payload.nbf) {
          _push(`<div><span class="font-medium">生效时间 (nbf):</span><span class="ml-2">${ssrInterpolate(new Date(parsedJWT.value.payload.nbf * 1e3).toLocaleString())}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (parsedJWT.value.payload.iat) {
          _push(`<div><span class="font-medium">签发时间 (iat):</span><span class="ml-2">${ssrInterpolate(new Date(parsedJWT.value.payload.iat * 1e3).toLocaleString())}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (parsedJWT.value.payload.jti) {
          _push(`<div><span class="font-medium">JWT ID (jti):</span><span class="ml-2">${ssrInterpolate(parsedJWT.value.payload.jti)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (expirationStatus.value) {
          _push(`<div><h4 class="font-medium text-primary mb-2">过期状态</h4><div class="${ssrRenderClass([expirationStatus.value.expired ? "text-red-600" : "text-green-600", "flex items-center gap-3"])}">`);
          if (expirationStatus.value.expired) {
            _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
          } else {
            _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
          }
          _push(`<div><div class="font-medium">${ssrInterpolate(expirationStatus.value.expired ? "已过期" : "有效")}</div><div class="text-sm">${ssrInterpolate(expirationStatus.value.message)}</div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">关于JWT</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">什么是JWT？</h4><p class="text-sm text-muted-foreground"> JWT（JSON Web Token）是一种开放标准（RFC 7519），用于在各方之间安全地传输信息作为JSON对象。 它可以被验证和信任，因为它是数字签名的。 </p></div><div><h4 class="font-medium text-primary mb-2">JWT结构</h4><div class="bg-muted/50 rounded-lg p-4 font-mono text-sm"><div class="mb-2">Header.Payload.Signature</div><div class="text-xs text-muted-foreground"> 例如：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c </div></div></div><div><h4 class="font-medium text-primary mb-2">常见用途</h4><ul class="text-sm space-y-1"><li>• 身份认证：用户登录后，后续请求携带JWT进行身份验证</li><li>• 信息交换：安全地在各方之间传递信息</li><li>• 授权：传递用户的权限信息</li><li>• API安全：保护API端点免受未授权访问</li></ul></div><div><h4 class="font-medium text-primary mb-2">安全注意事项</h4><ul class="text-sm space-y-1 text-amber-600"><li>• 敏感数据不要放在Payload中（除非加密）</li><li>• 使用强密钥（至少256位）</li><li>• 设置合理的过期时间</li><li>• 在HTTPS环境下传输</li><li>• 定期轮换签名密钥</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/jwt-decode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=jwt-decode-cIPPyKLN.js.map
