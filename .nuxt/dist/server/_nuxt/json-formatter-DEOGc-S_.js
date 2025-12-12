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
  __name: "json-formatter",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const tool = tools.find((t) => t.id === "json-formatter");
    categories.find((c) => c.id === "format");
    const inputJSON = ref("");
    const outputJSON = ref("");
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
        (t) => t.category === "format" && t.id !== "json-formatter"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "xml-formatter"),
        tools.find((t) => t.id === "yaml-converter"),
        tools.find((t) => t.id === "base64-encoder"),
        tools.find((t) => t.id === "url-encoder")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">JSON格式化 - 在线JSON解析、验证与美化工具</h1><p class="text-muted-foreground">一款免费的在线 JSON Formatter。支持一键美化、压缩、语法错误检测及树形视图展示。纯本地计算，数据隐私绝对安全。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">输入JSON</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 清空 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 粘贴 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 示例数据 </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">缩进:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="2"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "2") : ssrLooseEqual(indentSize.value, "2")) ? " selected" : ""}>2空格</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "4") : ssrLooseEqual(indentSize.value, "4")) ? " selected" : ""}>4空格</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">自动修复:</label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(autoFix.value) ? ssrLooseContain(autoFix.value, null) : autoFix.value) ? " checked" : ""} class="rounded"></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="在此输入JSON数据...">${ssrInterpolate(inputJSON.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">输出结果</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 复制 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 下载JSON </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 全屏模式 </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputJSON.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> 格式化 JSON </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 JSON 格式化？ </h2><p class="text-muted-foreground mb-4"> JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式，易于人阅读和编写，同时也易于机器解析和生成。 它基于 JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999 的一个子集。 JSON 采用完全独立于语言的文本格式，但是也使用了类似于 C 语言家族的习惯（包括 C, C++, C#, Java, JavaScript, Perl, Python 等）。 这些特性使 JSON 成为理想的数据交换语言。 </p><p class="text-muted-foreground"> 为什么需要格式化 JSON？因为在实际应用中，为了节省传输带宽，JSON 数据通常会被压缩成一行， 这使得开发者在调试和查看时非常困难。JSON 格式化工具可以将压缩的 JSON 数据转换为具有适当缩进和换行的可读格式， 方便开发者查看和调试。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>将您的 JSON 字符串粘贴到左侧输入框</li><li>点击顶部的&quot;格式化&quot;按钮或使用快捷键 Ctrl+Enter</li><li>查看右侧的高亮代码，或点击&quot;复制&quot;导出</li><li>如有需要，可以调整缩进大小或启用自动修复功能</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>语法高亮</strong>: 区分 Key 和 Value 的颜色，让代码结构更清晰</li><li><strong>错误定位</strong>: 快速发现 JSON 中的语法错误，并提供详细的错误信息</li><li><strong>本地安全</strong>: 所有处理都在浏览器本地完成，数据不会上传到服务器，确保隐私安全</li><li><strong>多种缩进</strong>: 支持 2 空格或 4 空格缩进，满足不同编码规范</li><li><strong>自动修复</strong>: 智能修复常见的 JSON 语法错误</li><li><strong>快捷操作</strong>: 支持快捷键操作，提高工作效率</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">在线 JSON 格式化安全吗？</h3><p class="text-muted-foreground mt-1"> 绝对安全。我们的 JSON 格式化工具采用纯前端技术实现，所有处理都在您的浏览器本地完成， 数据不会上传到任何服务器。我们使用 WebAssembly 和 JavaScript 技术确保数据处理的安全性和高效性， 您可以放心使用。 </p></div><div><h3 class="text-lg font-semibold text-foreground">JSON 和 XML 有什么区别？</h3><p class="text-muted-foreground mt-1"> JSON 和 XML 都是数据交换格式，但它们有一些重要区别： JSON 更加轻量级，语法更简洁；XML 使用标签标记数据，而 JSON 使用键值对； JSON 解析速度更快，占用带宽更少；JSON 原生支持数组和对象结构，而 XML 需要额外的约定。 对于 Web 应用开发，JSON 通常是更好的选择。 </p></div><div><h3 class="text-lg font-semibold text-foreground">格式化后的 JSON 为什么比原始数据大？</h3><p class="text-muted-foreground mt-1"> 这是正常现象。原始 JSON 通常为了节省传输带宽而被压缩成一行， 格式化过程会添加缩进和换行符来提高可读性，因此文件大小会增加。 这种增加是为了提高开发者的可读性，而不是数据本身的膨胀。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/json-formatter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=json-formatter-DEOGc-S_.js.map
