import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "uuid-generator",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const uuidVersions = [
      {
        value: "v4",
        name: "UUID v4",
        description: "随机生成",
        details: "使用随机或伪随机数生成，是最常用的UUID版本"
      },
      {
        value: "v1",
        name: "UUID v1",
        description: "基于时间戳",
        details: "基于时间戳和MAC地址生成，可能暴露生成者信息"
      },
      {
        value: "v5",
        name: "UUID v5",
        description: "基于命名空间",
        details: "基于命名空间和名称确定性生成，相同输入总是产生相同输出"
      }
    ];
    const selectedVersion = ref("v4");
    const generateCount = ref(10);
    const outputFormat = ref("uppercase");
    const separator = ref("\n");
    const namespace = ref("");
    const name = ref("");
    const includeTimestamp = ref(false);
    const generatedUUIDs = ref([]);
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "uuid-generator"
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
    addRecentTool("uuid-generator");
    useSeoMeta({
      title: "UUID生成器 - 在线UUID/GUID生成工具",
      description: "免费在线UUID生成器，支持UUID v1/v4/v5版本，批量生成，自定义格式，生成唯一标识符。",
      keywords: ["UUID", "GUID", "生成器", "唯一标识符", "v1", "v4", "v5", "随机ID"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">UUID生成器</h1><p class="text-muted-foreground max-w-3xl">在线生成唯一标识符UUID/GUID，支持UUID v1、v4、v5版本，批量生成，自定义数量和格式。</p></div><div class="mb-6"><label class="text-lg font-semibold block mb-3">选择UUID版本</label><div class="flex flex-wrap gap-3"><!--[-->`);
      ssrRenderList(uuidVersions, (version) => {
        _push(`<label class="${ssrRenderClass([{ "bg-primary text-primary-foreground border-primary": selectedVersion.value === version.value }, "flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors"])}"><input type="radio"${ssrRenderAttr("value", version.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedVersion.value, version.value)) ? " checked" : ""} class="sr-only"><span>${ssrInterpolate(version.name)}</span><span class="text-xs opacity-75">${ssrInterpolate(version.description)}</span></label>`);
      });
      _push(`<!--]--></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">生成数量</label><div class="flex items-center gap-3"><input${ssrRenderAttr("value", generateCount.value)} type="range" min="1" max="100" class="flex-1"><input${ssrRenderAttr("value", generateCount.value)} type="number" min="1" max="100" class="w-20 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div></div><div><label class="text-sm font-medium mb-2 block">输出格式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="uppercase"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "uppercase") : ssrLooseEqual(outputFormat.value, "uppercase")) ? " selected" : ""}>大写 (DEFAULT-XXXX-...)</option><option value="lowercase"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "lowercase") : ssrLooseEqual(outputFormat.value, "lowercase")) ? " selected" : ""}>小写 (default-xxxx-...)</option><option value="without-hyphens"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "without-hyphens") : ssrLooseEqual(outputFormat.value, "without-hyphens")) ? " selected" : ""}>无连字符 (DEFAULTXXXX...)</option><option value="brackets"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "brackets") : ssrLooseEqual(outputFormat.value, "brackets")) ? " selected" : ""}>带括号 ({DEFAULT-XXXX-...})</option></select></div><div><label class="text-sm font-medium mb-2 block">分隔符</label><input${ssrRenderAttr("value", separator.value)} type="text" placeholder="每行一个、逗号、分号等" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div></div><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">命名空间 (v5)</label><input${ssrRenderAttr("value", namespace.value)} type="text" placeholder="输入命名空间字符串"${ssrIncludeBooleanAttr(selectedVersion.value !== "v5") ? " disabled" : ""} class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"></div><div><label class="text-sm font-medium mb-2 block">名称 (v5)</label><input${ssrRenderAttr("value", name.value)} type="text" placeholder="输入名称字符串"${ssrIncludeBooleanAttr(selectedVersion.value !== "v5") ? " disabled" : ""} class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"></div><div class="flex items-center gap-2"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(includeTimestamp.value) ? ssrLooseContain(includeTimestamp.value, null) : includeTimestamp.value) ? " checked" : ""} id="includeTimestamp" class="rounded border-border"><label for="includeTimestamp" class="text-sm">包含生成时间戳</label></div></div></div><div class="flex flex-wrap gap-4 mb-8"><button class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"> 生成UUID </button><button class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> 复制全部 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> 下载结果 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> 清空 </button></div>`);
      if (generatedUUIDs.value.length > 0) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold">生成结果 (${ssrInterpolate(generatedUUIDs.value.length)} 个)</h3><button class="text-primary hover:text-primary/80 transition-colors"> 复制全部 </button></div><div class="bg-muted/50 rounded-lg p-4 max-h-96 overflow-y-auto"><!--[-->`);
        ssrRenderList(generatedUUIDs.value, (uuid, index) => {
          _push(`<div class="flex items-center justify-between py-2 border-b border-border/50 last:border-0"><span class="font-mono text-sm">${ssrInterpolate(uuid)}</span><button class="text-primary hover:text-primary/80 transition-colors ml-4"> 复制 </button></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">UUID版本说明</h3><div class="space-y-4"><!--[-->`);
      ssrRenderList(uuidVersions, (version) => {
        _push(`<div class="border-l-2 border-primary pl-4"><h4 class="font-medium mb-2">${ssrInterpolate(version.name)}</h4><p class="text-sm text-muted-foreground mb-2">${ssrInterpolate(version.description)}</p><p class="text-sm">${ssrInterpolate(version.details)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">常见使用场景</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h4 class="font-medium text-primary mb-2">数据库主键</h4><p class="text-sm text-muted-foreground">作为数据库记录的唯一标识符，避免ID冲突</p></div><div><h4 class="font-medium text-primary mb-2">分布式系统</h4><p class="text-sm text-muted-foreground">在分布式系统中生成全局唯一标识符</p></div><div><h4 class="font-medium text-primary mb-2">事务ID</h4><p class="text-sm text-muted-foreground">跟踪和标识业务事务，确保可追溯性</p></div><div><h4 class="font-medium text-primary mb-2">文件名</h4><p class="text-sm text-muted-foreground">生成唯一的文件名，避免文件覆盖</p></div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">技术细节</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-primary mb-2">UUID结构</h4><p class="text-sm text-muted-foreground mb-2"> UUID由32个十六进制数字组成，通常表示为5组，格式为8-4-4-4-12 </p><code class="text-xs bg-muted px-2 py-1 rounded">xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx</code></div><div><h4 class="font-medium text-primary mb-2">版本信息</h4><p class="text-sm text-muted-foreground"> 第13位数字表示UUID版本（1-5），第14位数字表示变体 </p><ul class="text-sm mt-2 space-y-1"><li>• 版本1: 基于时间戳和MAC地址</li><li>• 版本4: 完全随机生成</li><li>• 版本5: 基于命名空间和名称</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/uuid-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=uuid-generator-FUvxQodr.js.map
