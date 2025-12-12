import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "sha-generator",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const algorithms = [
      { name: "SHA-1", value: "SHA-1", bits: 160, security: "low", useCase: "已不推荐使用" },
      { name: "SHA-256", value: "SHA-256", bits: 256, security: "high", useCase: "推荐使用" },
      { name: "SHA-384", value: "SHA-384", bits: 384, security: "high", useCase: "高安全性需求" },
      { name: "SHA-512", value: "SHA-512", bits: 512, security: "high", useCase: "最高安全性" }
    ];
    const inputText = ref("");
    const outputText = ref("");
    const selectedAlgorithm = ref("SHA-256");
    ref(null);
    const copyButtonText = ref("复制");
    const allHashes = ref([]);
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "sha-generator"
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
    const formatBytes = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    const getCurrentAlgorithmName = () => {
      const algo = algorithms.find((a) => a.value === selectedAlgorithm.value);
      return algo ? algo.name : "SHA";
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("sha-generator");
    useSeoMeta({
      title: "SHA哈希生成器 - 在线SHA-1/SHA-256/SHA-512加密工具",
      description: "免费在线SHA哈希生成器，支持SHA-1、SHA-256、SHA-384、SHA-512算法，用于数据完整性验证和数字签名。",
      keywords: ["SHA", "SHA-1", "SHA-256", "SHA-512", "哈希", "加密", "数字签名", "数据完整性"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">SHA哈希生成器</h1><p class="text-muted-foreground max-w-3xl">支持SHA-1、SHA-256、SHA-512等多种哈希算法在线计算，用于数据完整性验证和数字签名。</p></div><div class="mb-6"><label class="text-lg font-semibold block mb-3">选择哈希算法</label><div class="flex flex-wrap gap-3"><!--[-->`);
      ssrRenderList(algorithms, (algorithm) => {
        _push(`<label class="${ssrRenderClass([{ "bg-primary text-primary-foreground border-primary": selectedAlgorithm.value === algorithm.value }, "flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors"])}"><input type="radio"${ssrRenderAttr("value", algorithm.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedAlgorithm.value, algorithm.value)) ? " checked" : ""} class="sr-only"><span>${ssrInterpolate(algorithm.name)}</span><span class="text-xs opacity-75">${ssrInterpolate(algorithm.bits)}位</span></label>`);
      });
      _push(`<!--]--></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">原始数据</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button><label class="flex items-center gap-2 cursor-pointer"><input type="file" accept="*/*" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> 选择文件 </span></label></div></div><textarea placeholder="请输入要计算哈希的文本..." class="w-full h-64 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea><div class="text-sm text-muted-foreground"> 字符数：${ssrInterpolate(inputText.value.length)} | 大小：${ssrInterpolate(formatBytes(inputText.value.length))}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">${ssrInterpolate(getCurrentAlgorithmName())}哈希值</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors">${ssrInterpolate(copyButtonText.value)}</button><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> 下载 </button></div></div><div class="w-full h-64 p-4 border border-border rounded-lg bg-muted/50"><div class="font-mono text-sm break-all">${ssrInterpolate(outputText.value || "哈希值将显示在这里...")}</div></div><div class="text-sm text-muted-foreground"> 长度：${ssrInterpolate(outputText.value.length)} 字符 (${ssrInterpolate((outputText.value.length * 4).toFixed(0))} 位) </div></div></div><div class="flex flex-wrap gap-4 mb-8"><button class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"> 生成哈希 </button><button class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> 哈希对比 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> 生成全部算法 </button></div>`);
      if (allHashes.value.length > 0) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">所有算法哈希值</h3><div class="space-y-3"><!--[-->`);
        ssrRenderList(allHashes.value, (hash) => {
          _push(`<div class="border-b border-border pb-3"><div class="flex items-center justify-between mb-2"><span class="font-medium">${ssrInterpolate(hash.name)}</span><button class="text-primary hover:text-primary/80 transition-colors"> 复制 </button></div><div class="font-mono text-sm bg-muted/50 p-3 rounded">${ssrInterpolate(hash.value)}</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">SHA算法对比</h3><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border"><th class="text-left py-2">算法</th><th class="text-left py-2">输出长度</th><th class="text-left py-2">安全性</th><th class="text-left py-2">推荐用途</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(algorithms, (algo) => {
        _push(`<tr class="border-b border-border"><td class="py-2 font-medium">${ssrInterpolate(algo.name)}</td><td class="py-2">${ssrInterpolate(algo.bits)} 位</td><td class="py-2"><span class="${ssrRenderClass(algo.security === "high" ? "text-green-500" : algo.security === "medium" ? "text-yellow-500" : "text-red-500")}">${ssrInterpolate(algo.security === "high" ? "高" : algo.security === "medium" ? "中" : "低")}</span></td><td class="py-2">${ssrInterpolate(algo.useCase)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-3 flex items-center"><span class="text-yellow-500 mr-2">⚠️</span> 安全提示 </h3><ul class="space-y-2 text-sm text-yellow-800 dark:text-yellow-200"><li>• SHA-1 已被发现存在碰撞漏洞，不建议用于新的安全应用</li><li>• 推荐使用 SHA-256 或更高强度的哈希算法</li><li>• 哈希函数是单向的，无法从哈希值反推原始数据</li><li>• 对于密码存储，建议使用加盐哈希（salted hash）</li></ul></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/sha-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sha-generator-CBgx_yU4.js.map
