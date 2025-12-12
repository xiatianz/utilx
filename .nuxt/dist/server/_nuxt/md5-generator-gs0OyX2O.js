import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "md5-generator",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const inputText = ref("");
    const outputText = ref("");
    ref(null);
    const copyButtonText = ref("复制");
    const showBatchProcess = ref(false);
    const batchInput = ref("");
    const batchResults = ref([]);
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "md5-generator"
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
    addRecentTool("md5-generator");
    useSeoMeta({
      title: "MD5哈希生成器 - 在线MD5加密工具",
      description: "免费在线MD5哈希生成器，支持文本和文件的MD5计算，用于数据完整性验证和密码加密。",
      keywords: ["MD5", "哈希", "加密", "文件完整性", "密码加密"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">MD5哈希生成器</h1><p class="text-muted-foreground max-w-3xl">在线MD5哈希值生成工具，支持文本和文件的MD5计算，用于数据完整性验证和密码加密。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">原始数据</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button><label class="flex items-center gap-2 cursor-pointer"><input type="file" accept="*/*" class="hidden"><span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"> 选择文件 </span></label></div></div><textarea placeholder="请输入要计算MD5哈希的文本..." class="w-full h-64 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea><div class="text-sm text-muted-foreground"> 字符数：${ssrInterpolate(inputText.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">MD5哈希值</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors">${ssrInterpolate(copyButtonText.value)}</button><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> 下载 </button></div></div><div class="w-full h-64 p-4 border border-border rounded-lg bg-muted/50"><div class="font-mono text-lg break-all">${ssrInterpolate(outputText.value || "MD5哈希值将显示在这里...")}</div></div><div class="text-sm text-muted-foreground"> 长度：${ssrInterpolate(outputText.value.length)} 位 </div></div></div><div class="flex flex-wrap gap-4 mb-8"><button class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"> 生成 MD5 </button><button class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> 哈希对比 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> 批量处理 </button></div>`);
      if (showBatchProcess.value) {
        _push(`<div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"><div class="bg-background rounded-lg border border-border max-w-2xl w-full max-h-[80vh] overflow-y-auto"><div class="p-6"><h3 class="text-lg font-semibold mb-4">批量MD5计算</h3><textarea placeholder="每行输入一个要计算MD5的文本..." class="w-full h-48 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary mb-4">${ssrInterpolate(batchInput.value)}</textarea><div class="flex justify-end gap-2"><button class="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"> 取消 </button><button class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"> 批量处理 </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (batchResults.value.length > 0) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">批量处理结果</h3><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border"><th class="text-left py-2">原始文本</th><th class="text-left py-2">MD5哈希</th><th class="text-left py-2">操作</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(batchResults.value, (result, index) => {
          _push(`<tr class="border-b border-border"><td class="py-2 font-mono text-xs max-w-xs truncate">${ssrInterpolate(result.text)}</td><td class="py-2 font-mono text-xs">${ssrInterpolate(result.hash)}</td><td class="py-2"><button class="text-primary hover:text-primary/80 transition-colors"> 复制 </button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">关于MD5算法</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-semibold text-primary mb-2">算法特性</h4><ul class="space-y-1 text-sm"><li>• 固定输出长度：128位（32个十六进制字符）</li><li>• 单向加密：无法从MD5反推原始数据</li><li>• 雪崩效应：输入微小变化导致输出巨大差异</li><li>• 计算速度快：适合大量数据处理</li></ul></div><div><h4 class="font-semibold text-primary mb-2">常见用途</h4><ul class="space-y-1 text-sm"><li>• 文件完整性校验</li><li>• 密码存储（已不推荐单独使用）</li><li>• 数字签名（结合其他算法）</li><li>• 数据去重和索引</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/md5-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=md5-generator-gs0OyX2O.js.map
