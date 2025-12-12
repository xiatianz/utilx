import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { FileText, FileDiff, GitCompare, HelpCircle, ChevronUp, GitBranch, FolderOpen, Globe, Regex, Timer, Link, Database, Image, Wifi, Clock, Shield, Lock, FilePlus, FileJson, Download, Copy, RotateCcw, Code, Hash, Type } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import { e as addRecentTool } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "text-diff",
  __ssrInlineRender: true,
  setup(__props) {
    const tool = tools.find((t) => t.id === "text-diff");
    categories.find((c) => c.id === "text");
    const originalText = ref("");
    const modifiedText = ref("");
    const compareMode = ref("line");
    const ignoreWhitespace = ref(false);
    const ignoreCase = ref(false);
    const diffHtml = ref("");
    const isSeoContentVisible = ref(true);
    const iconMap = {
      FileText,
      FileDiff,
      GitCompare,
      Type,
      Hash,
      Code,
      RotateCcw,
      Copy,
      Download,
      FileJson,
      FilePlus,
      Lock,
      Shield,
      Clock,
      Wifi,
      Image,
      Database,
      Link,
      Timer,
      Regex,
      Globe,
      FolderOpen,
      GitBranch
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "text" && t.id !== "text-diff"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "text-counter"),
        tools.find((t) => t.id === "text-replace"),
        tools.find((t) => t.id === "base64-encode"),
        tools.find((t) => t.id === "base64-decode")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const stats = computed(() => {
      if (!diffHtml.value) return { added: 0, removed: 0, unchanged: 0 };
      const added = (diffHtml.value.match(/class="added"/g) || []).length;
      const removed = (diffHtml.value.match(/class="removed"/g) || []).length;
      const originalLines = originalText.value.split("\n").length;
      const unchanged = Math.max(0, originalLines - removed);
      return { added, removed, unchanged };
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-55ed773d><div class="mb-8" data-v-55ed773d><h1 class="text-3xl font-bold text-foreground mb-3" data-v-55ed773d>文本对比 - 在线文本差异比较工具</h1><p class="text-muted-foreground" data-v-55ed773d>一款免费的在线文本差异比较工具。支持实时对比两个文本的差异，高亮显示不同之处。提供行级、字符级和单词级三种对比模式，完全本地计算，数据隐私安全。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8" data-v-55ed773d><div class="flex flex-col h-full" data-v-55ed773d><div class="flex items-center justify-between mb-3" data-v-55ed773d><label class="text-sm font-medium text-foreground flex items-center gap-2" data-v-55ed773d>`);
      _push(ssrRenderComponent(unref(FileText), { class: "w-4 h-4" }, null, _parent));
      _push(` 原始文本 </label><div class="flex gap-2" data-v-55ed773d><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-55ed773d> 清空 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-55ed773d> 粘贴 </button></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="输入原始文本..." data-v-55ed773d>${ssrInterpolate(originalText.value)}</textarea></div><div class="flex flex-col h-full" data-v-55ed773d><div class="flex items-center justify-between mb-3" data-v-55ed773d><label class="text-sm font-medium text-foreground flex items-center gap-2" data-v-55ed773d>`);
      _push(ssrRenderComponent(unref(FileDiff), { class: "w-4 h-4" }, null, _parent));
      _push(` 修改后的文本 </label><div class="flex gap-2" data-v-55ed773d><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-55ed773d> 清空 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-55ed773d> 粘贴 </button></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="输入修改后的文本..." data-v-55ed773d>${ssrInterpolate(modifiedText.value)}</textarea></div></div><div class="bg-card border border-border rounded-lg p-4 mb-8" data-v-55ed773d><h3 class="text-lg font-semibold text-foreground mb-4" data-v-55ed773d>对比选项</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-55ed773d><div data-v-55ed773d><label class="block text-sm font-medium text-foreground mb-2" data-v-55ed773d>对比模式</label><div class="space-y-2" data-v-55ed773d><label class="flex items-center" data-v-55ed773d><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(compareMode.value, "line")) ? " checked" : ""} value="line" class="mr-2" data-v-55ed773d><span class="text-sm" data-v-55ed773d>行级对比</span></label><label class="flex items-center" data-v-55ed773d><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(compareMode.value, "word")) ? " checked" : ""} value="word" class="mr-2" data-v-55ed773d><span class="text-sm" data-v-55ed773d>单词级对比</span></label><label class="flex items-center" data-v-55ed773d><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(compareMode.value, "char")) ? " checked" : ""} value="char" class="mr-2" data-v-55ed773d><span class="text-sm" data-v-55ed773d>字符级对比</span></label></div></div><div data-v-55ed773d><label class="block text-sm font-medium text-foreground mb-2" data-v-55ed773d>对比设置</label><div class="space-y-2" data-v-55ed773d><label class="flex items-center" data-v-55ed773d><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(ignoreWhitespace.value) ? ssrLooseContain(ignoreWhitespace.value, null) : ignoreWhitespace.value) ? " checked" : ""} class="mr-2" data-v-55ed773d><span class="text-sm" data-v-55ed773d>忽略空格</span></label><label class="flex items-center" data-v-55ed773d><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(ignoreCase.value) ? ssrLooseContain(ignoreCase.value, null) : ignoreCase.value) ? " checked" : ""} class="mr-2" data-v-55ed773d><span class="text-sm" data-v-55ed773d>忽略大小写</span></label></div></div><div data-v-55ed773d><label class="block text-sm font-medium text-foreground mb-2" data-v-55ed773d>快捷操作</label><div class="grid grid-cols-2 gap-2" data-v-55ed773d><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors" data-v-55ed773d> 加载示例 </button><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors" data-v-55ed773d> 交换文本 </button><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors" data-v-55ed773d> 清空全部 </button><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors" data-v-55ed773d> 导出差异 </button></div></div></div></div><div class="bg-card border border-border rounded-lg p-6 mb-12" data-v-55ed773d><div class="flex items-center justify-between mb-4" data-v-55ed773d><h3 class="text-lg font-semibold text-foreground flex items-center gap-2" data-v-55ed773d>`);
      _push(ssrRenderComponent(unref(GitCompare), { class: "w-5 h-5" }, null, _parent));
      _push(` 对比结果 </h3><div class="flex items-center gap-4" data-v-55ed773d><div class="text-sm text-muted-foreground" data-v-55ed773d><span class="text-green-600 dark:text-green-400" data-v-55ed773d>+${ssrInterpolate(stats.value.added)}</span> 添加 <span class="text-red-600 dark:text-red-400 ml-2" data-v-55ed773d>-${ssrInterpolate(stats.value.removed)}</span> 删除 <span class="ml-2" data-v-55ed773d>${ssrInterpolate(stats.value.unchanged)}</span> 未改变 </div><button class="px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm" data-v-55ed773d> 复制差异 </button></div></div><div class="bg-muted rounded-lg p-4 overflow-x-auto max-h-[400px] overflow-y-auto" data-v-55ed773d>`);
      if (diffHtml.value) {
        _push(`<div class="font-mono text-sm whitespace-pre-wrap" data-v-55ed773d>${diffHtml.value ?? ""}</div>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-8" data-v-55ed773d> 请输入文本进行对比 </div>`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative" data-v-55ed773d><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")} data-v-55ed773d>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}" data-v-55ed773d><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center" data-v-55ed773d><span class="text-primary mr-2" data-v-55ed773d>#</span> 什么是文本对比工具？ </h2><p class="text-muted-foreground mb-4" data-v-55ed773d> 文本对比工具（Text Diff Tool）是一种用于比较两个文本之间差异的专业工具。 它能够精确地识别出文本之间的增删改内容，并通过高亮显示让差异一目了然。 这类工具在版本控制、文档审阅、代码审查等场景中有着广泛的应用。 </p><p class="text-muted-foreground mb-6" data-v-55ed773d> 无论您是程序员需要对比代码修改，还是编辑需要审阅文档修订，抑或是学生需要对比论文版本， 文本对比工具都能帮助您快速准确地找出所有差异，提高工作效率。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-55ed773d><span class="text-primary mr-2" data-v-55ed773d>#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6" data-v-55ed773d><li data-v-55ed773d>在左侧文本框中输入或粘贴原始文本</li><li data-v-55ed773d>在右侧文本框中输入或粘贴修改后的文本</li><li data-v-55ed773d>选择合适的对比模式（行级、单词级或字符级）</li><li data-v-55ed773d>根据需要勾选&quot;忽略空格&quot;或&quot;忽略大小写&quot;选项</li><li data-v-55ed773d>查看下方的对比结果，差异将以不同颜色高亮显示</li><li data-v-55ed773d>使用&quot;复制差异&quot;或&quot;导出差异&quot;功能保存对比结果</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-55ed773d><span class="text-primary mr-2" data-v-55ed773d>#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6" data-v-55ed773d><li data-v-55ed773d><strong data-v-55ed773d>多种对比模式</strong>：支持行级、单词级和字符级三种对比模式，满足不同精度需求</li><li data-v-55ed773d><strong data-v-55ed773d>实时对比</strong>：输入文本时自动进行对比，无需手动点击按钮</li><li data-v-55ed773d><strong data-v-55ed773d>可视化差异</strong>：使用不同颜色标识添加、删除和修改的内容</li><li data-v-55ed773d><strong data-v-55ed773d>智能选项</strong>：支持忽略空格和大小写，让对比更加灵活</li><li data-v-55ed773d><strong data-v-55ed773d>本地安全</strong>：所有处理都在浏览器本地完成，数据不会上传到服务器</li><li data-v-55ed773d><strong data-v-55ed773d>便捷操作</strong>：提供清空、粘贴、交换文本等快捷操作</li><li data-v-55ed773d><strong data-v-55ed773d>导出功能</strong>：支持复制对比结果或导出为文本文件</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-55ed773d><span class="text-primary mr-2" data-v-55ed773d>#</span> 常见问题 (FAQ) </h2><div class="space-y-4" data-v-55ed773d><div data-v-55ed773d><h3 class="text-lg font-semibold text-foreground" data-v-55ed773d>文本对比工具支持哪些文件格式？</h3><p class="text-muted-foreground mt-1" data-v-55ed773d> 我们的文本对比工具支持所有纯文本格式，包括 .txt、.md、.js、.py、.html、.css、.json、.xml 等文件类型。 只要是可以以文本形式打开的文件，都可以进行对比。对于二进制文件（如图片、视频等），本工具不支持。 </p></div><div data-v-55ed773d><h3 class="text-lg font-semibold text-foreground" data-v-55ed773d>行级、单词级和字符级对比有什么区别？</h3><p class="text-muted-foreground mt-1" data-v-55ed773d> 行级对比以行为单位进行比较，适合代码和文档的大结构差异查看； 单词级对比以单词为单位进行比较，能够更精细地识别修改内容； 字符级对比最为精细，可以识别到每个字符的变化，适合对精度要求极高的场景。 </p></div><div data-v-55ed773d><h3 class="text-lg font-semibold text-foreground" data-v-55ed773d>对比结果中的颜色代表什么？</h3><p class="text-muted-foreground mt-1" data-v-55ed773d> 绿色（通常带有+号）表示新增的内容，红色（通常带有-号）表示删除的内容， 没有特殊标记的普通文本表示未发生变化的内容。这种颜色编码让差异一目了然。 </p></div><div data-v-55ed773d><h3 class="text-lg font-semibold text-foreground" data-v-55ed773d>我的数据安全吗？</h3><p class="text-muted-foreground mt-1" data-v-55ed773d> 绝对安全。我们的文本对比工具采用纯前端技术实现，所有文本对比处理都在您的浏览器本地完成， 不会上传到任何服务器。您处理的文本永远不会离开您的设备，确保了数据的绝对安全和隐私。 </p></div><div data-v-55ed773d><h3 class="text-lg font-semibold text-foreground" data-v-55ed773d>如何对比大文件？</h3><p class="text-muted-foreground mt-1" data-v-55ed773d> 对于非常大的文件，建议先使用文本编辑器分割成较小的部分再进行对比。 虽然我们的工具能够处理相当大的文本，但浏览器内存有限，过大的文本可能会导致性能问题。 一般来说，几MB以内的文本文件都能流畅处理。 </p></div></div></div></div><section class="mb-12" data-v-55ed773d><h2 class="text-2xl font-bold text-foreground mb-4" data-v-55ed773d>您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-v-55ed773d><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2" data-v-55ed773d${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground" data-v-55ed773d${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2" data-v-55ed773d${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/text-diff.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const textDiff = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-55ed773d"]]);
export {
  textDiff as default
};
//# sourceMappingURL=text-diff-BGnzugSA.js.map
