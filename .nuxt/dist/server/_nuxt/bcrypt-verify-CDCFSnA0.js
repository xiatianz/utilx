import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "bcrypt-verify",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const password = ref("");
    const bcryptHash = ref("");
    const verifyResult = ref(null);
    const batchPasswords = ref("");
    const batchHashes = ref("");
    const batchResults = ref([]);
    const analyzeHash = ref("");
    const hashAnalysis = ref(null);
    const passwordStrength = ref("");
    const strengthResult = ref(null);
    const relatedTools = tools.filter(
      (tool) => tool.category === "crypto" && tool.id !== "bcrypt-verify"
    ).slice(0, 4);
    const formatViewCount = (count) => {
      if (count >= 1e4) {
        return `${(count / 1e4).toFixed(1)}w+`;
      } else if (count >= 1e3) {
        return `${(count / 1e3).toFixed(1)}k+`;
      }
      return `${count}`;
    };
    const extractVersion = (hash) => {
      const parts = hash.split("$");
      return parts.length >= 2 ? parts[1] : "N/A";
    };
    const extractCost = (hash) => {
      const parts = hash.split("$");
      return parts.length >= 3 ? parts[2] : "N/A";
    };
    const getSecurityLevel = (cost) => {
      const numCost = parseInt(cost) || 0;
      if (numCost <= 6) return "低（不安全）";
      if (numCost <= 8) return "中等";
      if (numCost <= 10) return "高（推荐）";
      return "很高";
    };
    const getSecurityLevelClass = (cost) => {
      const numCost = parseInt(cost) || 0;
      if (numCost <= 6) return "text-red-600";
      if (numCost <= 8) return "text-amber-600";
      return "text-green-600";
    };
    const getStrengthColor = (score) => {
      if (score < 40) return "text-red-600";
      if (score < 70) return "text-amber-600";
      return "text-green-600";
    };
    const getStrengthBarColor = (score) => {
      if (score < 40) return "bg-red-600";
      if (score < 70) return "bg-amber-600";
      return "bg-green-600";
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("bcrypt-verify");
    useSeoMeta({
      title: "Bcrypt密码验证器 - 在线Bcrypt哈希验证工具",
      description: "免费在线Bcrypt密码验证工具，验证密码是否与Bcrypt哈希匹配，支持批量验证和密码强度检查。",
      keywords: ["Bcrypt", "密码验证", "哈希验证", "password verify", "bcrypt check"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Bcrypt密码验证器</h1><p class="text-muted-foreground max-w-3xl">在线验证Bcrypt哈希密码，检查密码是否与存储的Bcrypt哈希匹配。支持批量验证和详细的验证结果。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">原始密码</label><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div><input${ssrRenderAttr("value", password.value)} type="password" placeholder="请输入要验证的密码" class="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><div class="text-sm text-muted-foreground"> 密码长度：${ssrInterpolate(password.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">Bcrypt哈希值</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> 加载示例 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><input${ssrRenderAttr("value", bcryptHash.value)} type="text" placeholder="请输入Bcrypt哈希值 ($2b$12$...)" class="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">`);
      if (bcryptHash.value) {
        _push(`<div class="text-sm space-y-1"><span class="text-muted-foreground">哈希信息：</span><div>版本：${ssrInterpolate(extractVersion(bcryptHash.value))}</div><div>Cost：${ssrInterpolate(extractCost(bcryptHash.value))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!password.value || !bcryptHash.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 验证密码 </button><button${ssrIncludeBooleanAttr(!password.value || !bcryptHash.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 批量验证 </button></div>`);
      if (verifyResult.value) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">验证结果</h3><div class="${ssrRenderClass([verifyResult.value.valid ? "text-green-600" : "text-red-600", "flex items-center gap-4"])}"><div class="${ssrRenderClass([verifyResult.value.valid ? "bg-green-100" : "bg-red-100", "p-3 rounded-full"])}">`);
        if (verifyResult.value.valid) {
          _push(`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
        } else {
          _push(`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
        }
        _push(`</div><div><div class="text-xl font-medium mb-1">${ssrInterpolate(verifyResult.value.valid ? "密码验证成功！" : "密码验证失败！")}</div><div class="text-sm opacity-80">${ssrInterpolate(verifyResult.value.valid ? "输入的密码与哈希值匹配" : "输入的密码与哈希值不匹配")}</div></div></div>`);
        if (verifyResult.value.details) {
          _push(`<div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"><div><span class="text-muted-foreground">算法版本：</span><span>${ssrInterpolate(verifyResult.value.details.version)}</span></div><div><span class="text-muted-foreground">Cost值：</span><span>${ssrInterpolate(verifyResult.value.details.cost)}</span></div><div><span class="text-muted-foreground">计算时间：</span><span>${ssrInterpolate(verifyResult.value.details.time)}ms</span></div><div><span class="text-muted-foreground">安全级别：</span><span class="font-medium">${ssrInterpolate(getSecurityLevel(verifyResult.value.details.cost))}</span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">批量验证</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">密码列表（每行一个）</label><textarea placeholder="输入多个密码，每行一个..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(batchPasswords.value)}</textarea></div><div><label class="text-sm font-medium mb-2 block">Bcrypt哈希值（与密码列表一一对应）</label><textarea placeholder="输入对应的Bcrypt哈希值，每行一个..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(batchHashes.value)}</textarea></div><button${ssrIncludeBooleanAttr(!batchPasswords.value || !batchHashes.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 开始批量验证 </button>`);
      if (batchResults.value.length > 0) {
        _push(`<div class="mt-6"><h4 class="font-medium mb-3">批量验证结果</h4><div class="space-y-2"><!--[-->`);
        ssrRenderList(batchResults.value, (result, index) => {
          _push(`<div class="${ssrRenderClass([result.valid ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200", "flex items-center justify-between p-3 rounded-lg"])}"><div class="flex items-center gap-3"><span class="text-sm font-medium">密码 ${ssrInterpolate(index + 1)}</span>`);
          if (result.valid) {
            _push(`<span class="text-green-600 text-sm">✓ 匹配</span>`);
          } else {
            _push(`<span class="text-red-600 text-sm">✗ 不匹配</span>`);
          }
          _push(`</div><div class="text-sm text-muted-foreground"> Cost: ${ssrInterpolate(result.cost)} | 用时: ${ssrInterpolate(result.time)}ms </div></div>`);
        });
        _push(`<!--]--></div><div class="mt-4 text-center"><div class="text-lg"> 成功: <span class="text-green-600 font-medium">${ssrInterpolate(batchResults.value.filter((r) => r.valid).length)}</span> / 总计: <span class="font-medium">${ssrInterpolate(batchResults.value.length)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">哈希分析器</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">输入Bcrypt哈希值进行分析</label><input${ssrRenderAttr("value", analyzeHash.value)} type="text" placeholder="输入Bcrypt哈希值..." class="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"></div>`);
      if (hashAnalysis.value) {
        _push(`<div class="bg-muted/50 rounded-lg p-4"><h4 class="font-medium mb-3">哈希分析结果</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><span class="text-muted-foreground">算法标识：</span><span class="font-mono">${ssrInterpolate(hashAnalysis.value.identifier)}</span></div><div><span class="text-muted-foreground">版本：</span><span>${ssrInterpolate(hashAnalysis.value.version)}</span></div><div><span class="text-muted-foreground">Cost值：</span><span class="font-medium">${ssrInterpolate(hashAnalysis.value.cost)}</span></div><div><span class="text-muted-foreground">Salt：</span><code class="text-xs">${ssrInterpolate(hashAnalysis.value.salt)}</code></div><div><span class="text-muted-foreground">Hash：</span><code class="text-xs">${ssrInterpolate(hashAnalysis.value.hash.substring(0, 30))}...</code></div><div><span class="text-muted-foreground">安全级别：</span><span class="${ssrRenderClass(getSecurityLevelClass(hashAnalysis.value.cost))}">${ssrInterpolate(getSecurityLevel(hashAnalysis.value.cost))}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">密码强度检查</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">输入密码检查强度</label><input${ssrRenderAttr("value", passwordStrength.value)} type="password" placeholder="输入密码..." class="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div>`);
      if (strengthResult.value) {
        _push(`<div class="space-y-3"><div><div class="flex items-center justify-between mb-1"><span class="text-sm font-medium">密码强度</span><span class="${ssrRenderClass([getStrengthColor(strengthResult.value.score), "text-sm font-medium"])}">${ssrInterpolate(strengthResult.value.level)}</span></div><div class="w-full bg-gray-200 rounded-full h-2"><div class="${ssrRenderClass([getStrengthBarColor(strengthResult.value.score), "h-2 rounded-full transition-all"])}" style="${ssrRenderStyle({ width: strengthResult.value.score + "%" })}"></div></div></div><div class="grid grid-cols-2 gap-2 text-sm"><div class="flex items-center gap-2"><span class="${ssrRenderClass(passwordStrength.value.length >= 8 ? "text-green-600" : "text-red-600")}">✓</span><span>至少8个字符</span></div><div class="flex items-center gap-2"><span class="${ssrRenderClass(/[A-Z]/.test(passwordStrength.value) ? "text-green-600" : "text-red-600")}">✓</span><span>包含大写字母</span></div><div class="flex items-center gap-2"><span class="${ssrRenderClass(/[a-z]/.test(passwordStrength.value) ? "text-green-600" : "text-red-600")}">✓</span><span>包含小写字母</span></div><div class="flex items-center gap-2"><span class="${ssrRenderClass(/[0-9]/.test(passwordStrength.value) ? "text-green-600" : "text-red-600")}">✓</span><span>包含数字</span></div><div class="flex items-center gap-2"><span class="${ssrRenderClass(/[^A-Za-z0-9]/.test(passwordStrength.value) ? "text-green-600" : "text-red-600")}">✓</span><span>包含特殊字符</span></div><div class="flex items-center gap-2"><span class="${ssrRenderClass(passwordStrength.value.length >= 12 ? "text-green-600" : "text-amber-600")}">✓</span><span>建议12位以上</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">关于Bcrypt验证</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">验证原理</h4><p class="text-sm text-muted-foreground"> Bcrypt验证通过将输入的密码与存储的哈希值进行比较。Bcrypt会从哈希值中提取salt和cost参数， 使用相同的参数计算输入密码的哈希值，如果两个哈希值匹配，则密码正确。 </p></div><div><h4 class="font-medium text-primary mb-2">时序攻击防护</h4><p class="text-sm text-muted-foreground"> Bcrypt比较采用恒定时间算法，防止通过比较时间差异来推断密码信息。这是安全验证的重要组成部分。 </p></div><div><h4 class="font-medium text-primary mb-2">验证最佳实践</h4><ul class="text-sm space-y-1"><li>• 始终使用恒定时间比较函数</li><li>• 不要提供详细的错误信息（用户不存在/密码错误）</li><li>• 实施账户锁定机制防止暴力破解</li><li>• 记录失败的登录尝试并监控异常</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/bcrypt-verify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=bcrypt-verify-CDCFSnA0.js.map
