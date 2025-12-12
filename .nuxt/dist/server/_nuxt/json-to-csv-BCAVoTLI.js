import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { HelpCircle, ChevronUp, GitBranch, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Wifi, Type, Clock, Shield, Lock, FileText } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import { f as useSeoMeta, u as useHead, e as addRecentTool } from "../server.mjs";
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
  __name: "json-to-csv",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "JSON转CSV - 在线JSON转CSV格式转换工具",
      description: "免费在线 JSON to CSV 转换工具，支持将 JSON 数组或对象转换为 CSV 格式，自定义分隔符，支持嵌套数据处理。纯本地计算，数据安全。",
      keywords: "JSON转CSV, JSON to CSV, JSON CSV转换, 数据格式转换, 表格数据, 在线工具",
      author: "Util工具箱",
      ogTitle: "JSON转CSV - 在线JSON转CSV格式转换工具",
      ogDescription: "免费在线 JSON to CSV 转换工具，支持将 JSON 数组或对象转换为 CSV 格式。",
      ogType: "website",
      twitterCard: "summary_large_image"
    });
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "JSON转CSV工具",
            description: "免费在线 JSON to CSV 转换工具，支持将 JSON 数组或对象转换为 CSV 格式",
            url: "https://util.example.com/tools/json-to-csv",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            featureList: [
              "JSON转CSV",
              "自定义分隔符",
              "嵌套数据处理",
              "包含表头选项",
              "本地处理"
            ]
          })
        }
      ]
    });
    useRouter();
    const tool = tools.find((t) => t.id === "json-to-csv");
    categories.find((c) => c.id === "format");
    const inputJSON = ref("");
    const outputCSV = ref("");
    const inputError = ref("");
    const delimiter = ref(",");
    const includeHeader = ref(true);
    const csvPreview = ref([]);
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
        (t) => t.category === "format" && t.id !== "json-to-csv"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "csv-formatter"),
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "json-to-xml"),
        tools.find((t) => t.id === "json-to-yaml")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">JSON转CSV - 在线JSON转CSV格式转换工具</h1><p class="text-muted-foreground">一款免费的在线 JSON to CSV Converter。支持将 JSON 数组或对象转换为 CSV 格式，自定义分隔符，支持嵌套数据处理。纯本地计算，数据隐私绝对安全。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">输入JSON</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 清空 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 粘贴 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 示例数据 </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">分隔符:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value=","${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, ",") : ssrLooseEqual(delimiter.value, ",")) ? " selected" : ""}>逗号 (,)</option><option value=";"${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, ";") : ssrLooseEqual(delimiter.value, ";")) ? " selected" : ""}>分号 (;)</option><option value="\\t"${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, "\\t") : ssrLooseEqual(delimiter.value, "\\t")) ? " selected" : ""}>制表符 (\\t)</option><option value="|"${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, "|") : ssrLooseEqual(delimiter.value, "|")) ? " selected" : ""}>竖线 (|)</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">包含表头:</label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(includeHeader.value) ? ssrLooseContain(includeHeader.value, null) : includeHeader.value) ? " checked" : ""} class="rounded"></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="在此输入JSON数据（数组格式或包含数组的对象）...">${ssrInterpolate(inputJSON.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">CSV输出</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 复制 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 下载CSV </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 全屏模式 </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputCSV.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> 转换为 CSV </button></div>`);
      if (csvPreview.value.length) {
        _push(`<div class="mb-12"><h2 class="text-xl font-bold text-foreground mb-4">CSV 预览</h2><div class="overflow-auto border border-border rounded-lg"><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><!--[-->`);
        ssrRenderList(csvPreview.value[0], (header) => {
          _push(`<th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">${ssrInterpolate(header)}</th>`);
        });
        _push(`<!--]--></tr></thead><tbody class="bg-card divide-y divide-border"><!--[-->`);
        ssrRenderList(csvPreview.value.slice(1, 6), (row, index) => {
          _push(`<tr><!--[-->`);
          ssrRenderList(row, (cell, cellIndex) => {
            _push(`<td class="px-6 py-4 whitespace-nowrap text-sm text-foreground">${ssrInterpolate(cell)}</td>`);
          });
          _push(`<!--]--></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
        if (csvPreview.value.length > 6) {
          _push(`<p class="text-sm text-muted-foreground mt-2"> 显示前 5 行数据，共 ${ssrInterpolate(csvPreview.value.length - 1)} 行 </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 JSON 转 CSV？ </h2><p class="text-muted-foreground mb-4"> JSON（JavaScript Object Notation）和 CSV（Comma-Separated Values）是两种常用的数据格式。 JSON 转 CSV 是将 JSON 数据转换为表格形式的 CSV 格式的过程。CSV 是一种简单的文本格式， 使用逗号或其他分隔符分隔值，每行代表一条记录，非常适合在 Excel 等表格软件中处理。 </p><p class="text-muted-foreground"> 转换过程中，JSON 的对象结构会被扁平化，嵌套的对象会被展开为单独的列。 数组会被转换为多行数据，使得数据可以在表格软件中轻松查看和分析。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>将您的 JSON 数据粘贴到左侧输入框（必须是数组格式）</li><li>选择 CSV 分隔符（逗号、分号、制表符等）</li><li>选择是否包含表头行</li><li>点击&quot;转换为 CSV&quot;按钮或使用快捷键 Ctrl+Enter</li><li>查看右侧转换结果和下方预览表格</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 转换规则 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>数组转换</strong>: JSON 数组的每个元素转换为 CSV 的一行</li><li><strong>扁平化处理</strong>: 嵌套对象会被扁平化，使用点号连接键名</li><li><strong>键名提取</strong>: 所有对象的键会被提取作为 CSV 的列名</li><li><strong>缺失值处理</strong>: 如果某行缺少某列的值，会留空</li><li><strong>特殊字符转义</strong>: 包含分隔符或换行符的值会被引号包围</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">可以转换嵌套的 JSON 对象吗？</h3><p class="text-muted-foreground mt-1"> 可以。本工具会自动扁平化嵌套对象，使用点号连接键名。例如， {&quot;user&quot;: {&quot;name&quot;: &quot;John&quot;}} 会被转换为列名 &quot;user.name&quot;。 </p></div><div><h3 class="text-lg font-semibold text-foreground">JSON 数组中的元素结构不同怎么办？</h3><p class="text-muted-foreground mt-1"> 工具会收集所有对象的键作为列名。如果某行缺少某个键，对应的列会留空。 这确保了所有数据都能正确转换，即使结构不完全一致。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么需要 JSON 转 CSV？</h3><p class="text-muted-foreground mt-1"> CSV 格式广泛应用于数据分析、报表生成、Excel 处理等场景。 转换为 CSV 后可以：在 Excel 中打开和分析数据、导入到数据库、 用于数据可视化工具、与他人共享数据等。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}/`,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/json-to-csv.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=json-to-csv-BCAVoTLI.js.map
