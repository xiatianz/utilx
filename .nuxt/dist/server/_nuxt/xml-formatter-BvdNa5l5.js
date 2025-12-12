import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
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
  __name: "xml-formatter",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const tool = tools.find((t) => t.id === "xml-formatter");
    categories.find((c) => c.id === "format");
    const inputXML = ref("");
    const outputXML = ref("");
    const inputError = ref("");
    const indentSize = ref("2");
    const autoFix = ref(false);
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
        (t) => t.category === "format" && t.id !== "xml-formatter"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "yaml-converter"),
        tools.find((t) => t.id === "sql-formatter"),
        tools.find((t) => t.id === "base64-encoder")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">XML格式化 - 在线XML美化与格式化工具</h1><p class="text-muted-foreground">一款免费的在线 XML Formatter。支持一键美化、压缩、语法错误检测及格式转换。纯本地计算，数据隐私绝对安全。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">输入XML</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 清空 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 粘贴 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 示例数据 </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">缩进:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="2"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "2") : ssrLooseEqual(indentSize.value, "2")) ? " selected" : ""}>2空格</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "4") : ssrLooseEqual(indentSize.value, "4")) ? " selected" : ""}>4空格</option><option value="tab"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "tab") : ssrLooseEqual(indentSize.value, "tab")) ? " selected" : ""}>Tab</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">自动修复:</label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(autoFix.value) ? ssrLooseContain(autoFix.value, null) : autoFix.value) ? " checked" : ""} class="rounded"></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="在此输入XML数据...">${ssrInterpolate(inputXML.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">格式化结果</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 复制 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 下载XML </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 全屏模式 </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputXML.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> 格式化 XML </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 XML 格式化？ </h2><p class="text-muted-foreground mb-4"> XML（eXtensible Markup Language）是一种标记语言，被设计用来传输和存储数据。 XML 格式化是将压缩或混乱的 XML 文档转换为具有良好的层次结构、缩进和换行的可读格式的过程。 格式化后的 XML 不仅更易读，也便于开发者进行调试和维护。 </p><p class="text-muted-foreground"> XML 广泛应用于 Web 服务、配置文件、数据交换等场景。由于传输效率的考虑， XML 数据经常被压缩成一行或格式混乱，使用 XML 格式化工具可以快速还原其可读的结构。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>将您的 XML 数据粘贴到左侧输入框</li><li>选择缩进方式（2空格、4空格或Tab）</li><li>可选择启用自动修复功能来修复常见错误</li><li>点击&quot;格式化 XML&quot;按钮或使用快捷键 Ctrl+Enter</li><li>查看右侧格式化后的结果，可复制或下载</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>智能格式化</strong>: 自动识别 XML 标签、属性、文本内容并进行合理缩进</li><li><strong>错误检测</strong>: 检测 XML 语法错误，如未闭合标签、属性格式错误等</li><li><strong>自动修复</strong>: 智能修复常见的 XML 语法错误</li><li><strong>多种缩进</strong>: 支持 2 空格、4 空格、Tab 缩进</li><li><strong>本地处理</strong>: 所有处理都在浏览器本地完成，确保数据安全</li><li><strong>导出功能</strong>: 支持复制和下载格式化后的 XML</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">XML 和 JSON 有什么区别？</h3><p class="text-muted-foreground mt-1"> XML 和 JSON 都是数据交换格式，但主要区别在于：XML 使用标签标记数据，支持命名空间、 属性、注释等丰富功能；JSON 使用键值对，语法更简洁，解析速度更快。 XML 更适合文档和配置，JSON 更适合数据交换。选择取决于具体应用场景。 </p></div><div><h3 class="text-lg font-semibold text-foreground">格式化后的 XML 可以直接使用吗？</h3><p class="text-muted-foreground mt-1"> 可以。XML 格式化只改变文档的视觉呈现（添加缩进和换行），不会改变 XML 的结构和内容。 格式化后的 XML 在功能上与原始 XML 完全等价，可以直接用于应用程序或数据交换。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么需要 XML 格式化？</h3><p class="text-muted-foreground mt-1"> XML 格式化的主要原因是提高可读性。压缩的 XML 难以阅读和理解，格式化后可以清晰地看到文档结构。 这有助于：快速理解数据结构、方便调试、便于代码审查、提高团队协作效率。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/xml-formatter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=xml-formatter-BvdNa5l5.js.map
