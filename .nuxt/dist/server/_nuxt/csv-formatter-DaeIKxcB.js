import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { HelpCircle, ChevronUp, GitBranch, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Wifi, Type, Clock, Shield, Lock, FileText } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import { e as addRecentTool } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "csv-formatter",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const tool = tools.find((t) => t.id === "csv-formatter");
    categories.find((c) => c.id === "format");
    const inputCSV = ref("");
    const csvData = ref([]);
    const formattedOutput = ref("");
    const inputError = ref("");
    const delimiter = ref(",");
    const hasHeader = ref(true);
    const isSeoContentVisible = ref(true);
    ref(null);
    ref(false);
    const iconMap = {
      FileText,
      Lock,
      Shield,
      Clock,
      Type,
      Wifi,
      Image,
      Code,
      FileJson,
      Database,
      Link,
      Hash,
      Timer,
      Regex,
      FileDiff,
      Globe,
      FolderOpen,
      GitBranch
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "format" && t.id !== "csv-formatter"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "json-to-csv"),
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "xml-formatter"),
        tools.find((t) => t.id === "base64-encoder")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">CSV格式化 - 在线CSV美化与表格预览工具</h1><p class="text-muted-foreground">一款免费的在线 CSV Formatter。支持美化CSV数据，自动识别分隔符，表格预览，导出格式化后的CSV。纯本地计算，数据隐私绝对安全。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">输入CSV</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 清空 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 粘贴 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 示例数据 </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">分隔符:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value=","${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, ",") : ssrLooseEqual(delimiter.value, ",")) ? " selected" : ""}>逗号 (,)</option><option value=";"${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, ";") : ssrLooseEqual(delimiter.value, ";")) ? " selected" : ""}>分号 (;)</option><option value="\\t"${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, "\\t") : ssrLooseEqual(delimiter.value, "\\t")) ? " selected" : ""}>Tab</option><option value="|"${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, "|") : ssrLooseEqual(delimiter.value, "|")) ? " selected" : ""}>竖线 (|)</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">包含标题行:</label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(hasHeader.value) ? ssrLooseContain(hasHeader.value, null) : hasHeader.value) ? " checked" : ""} class="rounded"></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="在此输入CSV数据...">${ssrInterpolate(inputCSV.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">预览结果</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 复制CSV </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 下载CSV </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 全屏模式 </button></div></div><div class="flex-1 w-full min-h-[300px] bg-muted border border-border rounded-lg overflow-auto">`);
      if (csvData.value.length) {
        _push(`<table class="w-full">`);
        if (hasHeader.value && csvData.value[0]) {
          _push(`<thead><tr class="bg-accent"><!--[-->`);
          ssrRenderList(csvData.value[0], (header) => {
            _push(`<th class="px-4 py-2 text-left text-sm font-medium border-b border-border sticky top-0 bg-accent">${ssrInterpolate(header)}</th>`);
          });
          _push(`<!--]--></tr></thead>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<tbody><!--[-->`);
        ssrRenderList(hasHeader.value ? csvData.value.slice(1) : csvData.value, (row, index) => {
          _push(`<tr class="hover:bg-accent/50"><!--[-->`);
          ssrRenderList(row, (cell, cellIndex) => {
            _push(`<td class="px-4 py-2 text-sm border-b border-border">${ssrInterpolate(cell)}</td>`);
          });
          _push(`<!--]--></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      } else {
        _push(`<pre class="p-4 font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(formattedOutput.value || "等待输入CSV数据...")}</pre>`);
      }
      _push(`</div></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> 格式化并预览 </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 CSV 格式化？ </h2><p class="text-muted-foreground mb-4"> CSV (Comma-Separated Values) 是一种通用的、相对简单的文件格式，被广泛用于存储和交换表格数据。 CSV 文件以纯文本形式存储数据，通常每条记录占一行，记录中的字段由分隔符（通常是逗号）分隔。 它是一种简单但功能强大的数据交换格式，可以被几乎所有的电子表格程序（如 Excel）和数据库系统导入导出。 </p><p class="text-muted-foreground"> 为什么需要格式化 CSV？在实际应用中，CSV 数据可能格式混乱，字段不对齐，包含不必要的空格等。 CSV 格式化工具可以美化 CSV 数据，使其更易读，并提供表格预览功能，方便查看和编辑数据。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>将您的 CSV 数据粘贴到左侧输入框</li><li>选择合适的分隔符（逗号、分号、Tab或竖线）</li><li>勾选是否包含标题行（第一行作为列名）</li><li>点击&quot;格式化并预览&quot;按钮或使用快捷键 Ctrl+Enter</li><li>查看右侧表格预览，或点击&quot;复制CSV&quot;导出格式化后的数据</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>智能识别分隔符</strong>: 支持多种常用分隔符，自动适应不同格式的CSV文件</li><li><strong>表格预览</strong>: 将CSV数据以表格形式展示，更直观地查看数据结构</li><li><strong>标题行支持</strong>: 可选择是否将第一行作为列标题，使表格更清晰</li><li><strong>数据美化</strong>: 自动整理格式，去除多余空格，对齐数据列</li><li><strong>本地安全</strong>: 所有处理都在浏览器本地完成，数据不会上传到服务器</li><li><strong>导出功能</strong>: 支持复制和下载格式化后的CSV文件</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">在线 CSV 格式化安全吗？</h3><p class="text-muted-foreground mt-1"> 绝对安全。我们的 CSV 格式化工具采用纯前端技术实现，所有处理都在您的浏览器本地完成， 数据不会上传到任何服务器。您可以使用它处理包含敏感信息的 CSV 数据。 </p></div><div><h3 class="text-lg font-semibold text-foreground">支持哪些 CSV 分隔符？</h3><p class="text-muted-foreground mt-1"> 本工具支持最常用的几种分隔符：逗号（,）、分号（;）、Tab制表符和竖线（|）。 如果您的CSV使用了其他分隔符，可以在格式化后手动替换。 </p></div><div><h3 class="text-lg font-semibold text-foreground">如何处理包含逗号的字段？</h3><p class="text-muted-foreground mt-1"> 标准的CSV格式使用双引号包围包含分隔符的字段。例如：&quot;John, Doe&quot;。 本工具会正确处理这种情况，确保逗号被识别为字段内容而非分隔符。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" })),
                  createVNode("span", { class: "font-medium text-foreground" }, toDisplayString(relatedTool.name), 1)
                ]),
                createVNode("p", { class: "text-sm text-muted-foreground line-clamp-2" }, toDisplayString(relatedTool.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/csv-formatter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=csv-formatter-DaeIKxcB.js.map
