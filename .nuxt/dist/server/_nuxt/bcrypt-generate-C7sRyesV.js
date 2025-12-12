import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "bcrypt-generate",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const password = ref("");
    const hashResult = ref("");
    const verifyPassword = ref("");
    const verifyHash = ref("");
    const verifyResult = ref(null);
    const saltRounds = ref(10);
    const batchPasswords = ref("");
    const batchResults = ref([]);
    const copyButtonText = ref("复制");
    const relatedTools = tools.filter(
      (tool) => tool.category === "crypto" && tool.id !== "bcrypt-generate"
    ).slice(0, 4);
    const formatViewCount = (count) => {
      if (count >= 1e4) {
        return `${(count / 1e4).toFixed(1)}w+`;
      } else if (count >= 1e3) {
        return `${(count / 1e3).toFixed(1)}k+`;
      }
      return `${count}`;
    };
    const getStrengthLevel = (rounds) => {
      if (rounds <= 6) return "低";
      if (rounds <= 8) return "中等";
      if (rounds <= 10) return "高";
      return "很高";
    };
    const getCalculationTime = (rounds) => {
      const times = {
        4: "~1ms",
        6: "~10ms",
        8: "~50ms",
        10: "~100ms",
        12: "~400ms"
      };
      return times[rounds] || "~自定义";
    };
    const extractVersion = (hash) => {
      const match = hash.match(/^\$([a-z0-9]+)\$/i);
      return match ? match[1] : "N/A";
    };
    const extractRounds = (hash) => {
      const parts = hash.split("$");
      return parts.length >= 3 ? parts[2] : "N/A";
    };
    const extractSalt = (hash) => {
      const parts = hash.split("$");
      return parts.length >= 4 ? parts[3].substring(0, 22) : "N/A";
    };
    const extractHash = (hash) => {
      const parts = hash.split("$");
      return parts.length >= 4 ? parts[3].substring(22) : "N/A";
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("bcrypt-generate");
    useSeoMeta({
      title: "Bcrypt密码哈希生成器 - 在线Bcrypt加密工具",
      description: "免费在线Bcrypt密码哈希生成和验证工具，支持自定义salt rounds，安全的密码存储方案。",
      keywords: ["Bcrypt", "密码哈希", "密码加密", "salt", "password hashing", "bcrypt generator"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Bcrypt密码哈希生成器</h1><p class="text-muted-foreground max-w-3xl">Bcrypt密码哈希在线生成和验证工具，支持自定义salt rounds，安全的密码存储和验证方案。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">密码</label><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div><input${ssrRenderAttr("value", password.value)} type="password" placeholder="请输入要哈希的密码" class="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><div class="text-sm text-muted-foreground"> 字符数：${ssrInterpolate(password.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">Bcrypt哈希结果</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors">${ssrInterpolate(copyButtonText.value)}</button><button${ssrIncludeBooleanAttr(!password.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors disabled:opacity-50"> 生成哈希 </button></div></div><div class="w-full min-h-[100px] p-4 border border-border rounded-lg bg-muted/50"><div class="font-mono text-sm break-all">${ssrInterpolate(hashResult.value || "哈希结果将显示在这里...")}</div></div><div class="text-sm text-muted-foreground"> 长度：${ssrInterpolate(hashResult.value.length)} 字符 </div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">哈希设置</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block">Salt Rounds (计算强度)</label><div class="flex items-center gap-4"><input${ssrRenderAttr("value", saltRounds.value)} type="range" min="4" max="12" class="flex-1"><input${ssrRenderAttr("value", saltRounds.value)} type="number" min="4" max="12" class="w-20 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div><div class="mt-2 text-sm text-muted-foreground"> 当前强度：<span class="font-medium">${ssrInterpolate(getStrengthLevel(saltRounds.value))}</span><span class="ml-2">(${ssrInterpolate(getCalculationTime(saltRounds.value))})</span></div></div><div><label class="text-sm font-medium mb-2 block">哈希信息</label>`);
      if (hashResult.value) {
        _push(`<div class="space-y-2 text-sm"><div><span class="text-muted-foreground">算法版本：</span><span class="font-mono">${ssrInterpolate(extractVersion(hashResult.value))}</span></div><div><span class="text-muted-foreground">Salt Rounds：</span><span class="font-mono">${ssrInterpolate(extractRounds(hashResult.value))}</span></div><div><span class="text-muted-foreground">Salt：</span><span class="font-mono text-xs">${ssrInterpolate(extractSalt(hashResult.value))}</span></div><div><span class="text-muted-foreground">Hash：</span><span class="font-mono text-xs">${ssrInterpolate(extractHash(hashResult.value))}</span></div></div>`);
      } else {
        _push(`<div class="text-sm text-muted-foreground"> 生成哈希后显示详细信息 </div>`);
      }
      _push(`</div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">密码验证</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">Bcrypt哈希值</label><textarea placeholder="粘贴要验证的Bcrypt哈希值..." class="w-full h-24 p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(verifyHash.value)}</textarea></div><div><label class="text-sm font-medium mb-2 block">输入密码</label><input${ssrRenderAttr("value", verifyPassword.value)} type="password" placeholder="输入要验证的密码" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div><button${ssrIncludeBooleanAttr(!verifyHash.value || !verifyPassword.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 验证密码 </button>`);
      if (verifyResult.value) {
        _push(`<div class="mt-4">`);
        if (verifyResult.value.valid) {
          _push(`<div class="flex items-center gap-2 text-green-600"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span>密码验证成功！</span></div>`);
        } else {
          _push(`<div class="flex items-center gap-2 text-red-600"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg><span>密码验证失败！</span></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">批量哈希</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">密码列表（每行一个）</label><textarea placeholder="输入多个密码，每行一个..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(batchPasswords.value)}</textarea></div><button${ssrIncludeBooleanAttr(!batchPasswords.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 批量生成哈希 </button>`);
      if (batchResults.value.length > 0) {
        _push(`<div class="mt-4"><h4 class="font-medium mb-2">批量哈希结果</h4><div class="overflow-x-auto"><table class="w-full text-sm border border-border"><thead class="bg-muted/50"><tr><th class="border border-border px-4 py-2 text-left">#</th><th class="border border-border px-4 py-2 text-left">原始密码</th><th class="border border-border px-4 py-2 text-left">哈希值</th><th class="border border-border px-4 py-2 text-left">操作</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(batchResults.value, (result, index) => {
          _push(`<tr class="border-b border-border"><td class="border border-border px-4 py-2">${ssrInterpolate(index + 1)}</td><td class="border border-border px-4 py-2 text-muted-foreground">••••••••</td><td class="border border-border px-4 py-2"><code class="text-xs">${ssrInterpolate(result.hash.substring(0, 30))}...</code></td><td class="border border-border px-4 py-2"><button class="text-primary hover:text-primary/80 text-sm"> 复制 </button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">关于Bcrypt</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">什么是Bcrypt？</h4><p class="text-sm text-muted-foreground"> Bcrypt是一种基于Blowfish加密算法的密码哈希函数，专门为密码哈希设计。它具有以下特点：内置salt、可调整的计算成本、抗彩虹表攻击、抗暴力破解。 </p></div><div><h4 class="font-medium text-primary mb-2">Bcrypt哈希格式</h4><div class="bg-muted/50 rounded-lg p-4 font-mono text-sm"><div class="mb-2">$2b$12$rNSeS9JLGPY5YI6HxGjEoe.</div><div class="text-xs text-muted-foreground space-y-1"><div>$2b$ - 算法版本标识符</div><div>12 - Salt rounds (计算强度)</div><div>rNSeS9JLGPY5YI6HxGjEoe. - 22字符的salt</div><div>剩余部分 - 哈希结果</div></div></div></div><div><h4 class="font-medium text-primary mb-2">Salt Rounds说明</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><h5 class="font-medium mb-1">推荐设置</h5><ul class="space-y-1 text-muted-foreground"><li>• 4-8: 测试环境</li><li>• 10-12: 生产环境推荐</li><li>• 12+: 高安全要求</li></ul></div><div><h5 class="font-medium mb-1">性能影响</h5><ul class="space-y-1 text-muted-foreground"><li>• 每增加1轮，计算时间翻倍</li><li>• 10轮: 约100ms</li><li>• 12轮: 约400ms</li></ul></div></div></div><div><h4 class="font-medium text-primary mb-2">安全最佳实践</h4><ul class="text-sm space-y-1 text-amber-600"><li>• 使用至少10 rounds</li><li>• 不要限制密码长度</li><li>• 结合速率限制防止暴力破解</li><li>• 定期更新密码哈希算法</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/bcrypt-generate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=bcrypt-generate-C7sRyesV.js.map
