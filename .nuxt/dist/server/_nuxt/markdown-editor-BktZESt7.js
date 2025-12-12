import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { Bold, Italic, Strikethrough, List, ListOrdered, Link, Image, Code, FileCode, Quote, Minus, Table, HelpCircle, ChevronUp, Terminal, FileJson, Hash, Type, FileDiff, FileText } from "lucide-vue-next";
import { marked } from "marked";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import { e as addRecentTool, f as useSeoMeta } from "../server.mjs";
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
  __name: "markdown-editor",
  __ssrInlineRender: true,
  setup(__props) {
    const tool = tools.find((t) => t.id === "markdown-editor");
    categories.find((c) => c.id === "text");
    const markdownText = ref("");
    const autoSave = ref(false);
    const lastSaved = ref("");
    ref(null);
    ref(null);
    const isSeoContentVisible = ref(true);
    const iconMap = {
      FileText,
      FileDiff,
      Type,
      Hash,
      FileJson,
      Terminal,
      Code,
      Image,
      Link
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "text" && t.id !== "markdown-editor"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "text-diff"),
        tools.find((t) => t.id === "code-format"),
        tools.find((t) => t.id === "html-encode"),
        tools.find((t) => t.id === "base64-encode")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    marked.setOptions({
      breaks: true,
      gfm: true,
      highlight: function(code, lang) {
        if (lang && Prism && Prism.languages[lang]) {
          return Prism.highlight(code, Prism.languages[lang], lang);
        }
        return code;
      }
    });
    const renderedMarkdown = computed(() => {
      if (!markdownText.value) return '<p class="text-muted-foreground">预览内容将在这里显示...</p>';
      try {
        return marked.parse(markdownText.value);
      } catch (error) {
        return '<p class="text-destructive">Markdown 解析错误</p>';
      }
    });
    const wordCount = computed(() => {
      if (!markdownText.value) return 0;
      return markdownText.value.trim().split(/\s+/).filter((word) => word.length > 0).length;
    });
    const lineCount = computed(() => {
      if (!markdownText.value) return 0;
      return markdownText.value.split("\n").length;
    });
    watch(markdownText, () => {
      if (autoSave.value) {
        saveToLocalStorage();
      }
    });
    const saveToLocalStorage = () => {
      localStorage.setItem("markdown-editor-content", markdownText.value);
      lastSaved.value = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    useSeoMeta({
      title: "Markdown编辑器 - 在线Markdown实时预览编辑器",
      description: "免费在线Markdown编辑器，支持实时预览、语法高亮、快捷工具栏和自动保存功能。专注于内容创作，无需担心格式问题。",
      keywords: ["markdown", "editor", "preview", "realtime", "syntax", "在线编辑器", "markdown编辑器", "实时预览"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-4358eaf7><div class="mb-8" data-v-4358eaf7><h1 class="text-3xl font-bold text-foreground mb-3" data-v-4358eaf7>Markdown 编辑器 - 在线 Markdown 实时预览编辑器</h1><p class="text-muted-foreground" data-v-4358eaf7>一款功能强大的在线 Markdown 编辑器，支持实时预览、语法高亮、快捷工具栏和自动保存。让您专注于内容创作，无需担心格式问题。</p></div><div class="mb-8" data-v-4358eaf7><div class="bg-card border border-border rounded-t-lg p-3 flex items-center gap-2 flex-wrap" data-v-4358eaf7><div class="flex items-center gap-1" data-v-4358eaf7><button class="p-2 hover:bg-muted rounded transition-colors" title="粗体" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Bold), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="斜体" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Italic), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="删除线" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Strikethrough), { class: "w-4 h-4" }, null, _parent));
      _push(`</button></div><div class="w-px h-6 bg-border" data-v-4358eaf7></div><div class="flex items-center gap-1" data-v-4358eaf7><button class="p-2 hover:bg-muted rounded transition-colors" title="一级标题" data-v-4358eaf7><h1 class="text-lg font-bold" data-v-4358eaf7>H1</h1></button><button class="p-2 hover:bg-muted rounded transition-colors" title="二级标题" data-v-4358eaf7><h2 class="text-lg font-bold" data-v-4358eaf7>H2</h2></button><button class="p-2 hover:bg-muted rounded transition-colors" title="三级标题" data-v-4358eaf7><h3 class="text-sm font-bold" data-v-4358eaf7>H3</h3></button></div><div class="w-px h-6 bg-border" data-v-4358eaf7></div><div class="flex items-center gap-1" data-v-4358eaf7><button class="p-2 hover:bg-muted rounded transition-colors" title="无序列表" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(List), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="有序列表" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(ListOrdered), { class: "w-4 h-4" }, null, _parent));
      _push(`</button></div><div class="w-px h-6 bg-border" data-v-4358eaf7></div><div class="flex items-center gap-1" data-v-4358eaf7><button class="p-2 hover:bg-muted rounded transition-colors" title="插入链接" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Link), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="插入图片" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Image), { class: "w-4 h-4" }, null, _parent));
      _push(`</button></div><div class="w-px h-6 bg-border" data-v-4358eaf7></div><div class="flex items-center gap-1" data-v-4358eaf7><button class="p-2 hover:bg-muted rounded transition-colors" title="行内代码" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Code), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="代码块" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(FileCode), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="引用" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Quote), { class: "w-4 h-4" }, null, _parent));
      _push(`</button></div><div class="w-px h-6 bg-border" data-v-4358eaf7></div><div class="flex items-center gap-1" data-v-4358eaf7><button class="p-2 hover:bg-muted rounded transition-colors" title="分割线" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Minus), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="插入表格" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Table), { class: "w-4 h-4" }, null, _parent));
      _push(`</button></div><div class="ml-auto flex items-center gap-2" data-v-4358eaf7><button class="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-4358eaf7> 清空 </button><button class="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-4358eaf7> 复制 Markdown </button><button class="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors" data-v-4358eaf7> 下载 </button></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-t-0 rounded-b-lg" data-v-4358eaf7><div class="relative" data-v-4358eaf7><textarea placeholder="在这里输入 Markdown 文本..." class="absolute inset-0 w-full h-full p-4 resize-none focus:outline-none font-mono text-sm bg-background" data-v-4358eaf7>${ssrInterpolate(markdownText.value)}</textarea></div><div class="border-l bg-muted/30 p-4 overflow-auto" data-v-4358eaf7><div class="prose prose-sm max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-code:font-mono prose-pre:bg-background prose-pre:border prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded" data-v-4358eaf7>${renderedMarkdown.value ?? ""}</div></div></div><div class="mt-4 flex items-center justify-between text-sm text-muted-foreground bg-card border border-border rounded-lg p-3" data-v-4358eaf7><div class="flex items-center gap-4" data-v-4358eaf7><span data-v-4358eaf7>${ssrInterpolate(markdownText.value.length)} 个字符</span><span data-v-4358eaf7>${ssrInterpolate(wordCount.value)} 个词</span><span data-v-4358eaf7>${ssrInterpolate(lineCount.value)} 行</span></div><div class="flex items-center gap-2" data-v-4358eaf7><label class="flex items-center gap-2" data-v-4358eaf7><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(autoSave.value) ? ssrLooseContain(autoSave.value, null) : autoSave.value) ? " checked" : ""} class="rounded" data-v-4358eaf7><span data-v-4358eaf7>自动保存</span></label>`);
      if (lastSaved.value) {
        _push(`<span data-v-4358eaf7>（${ssrInterpolate(lastSaved.value)} 已保存）</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="p-6 mb-12 relative bg-card border border-border rounded-lg" data-v-4358eaf7><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")} data-v-4358eaf7>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}" data-v-4358eaf7><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center" data-v-4358eaf7><span class="text-primary mr-2" data-v-4358eaf7>#</span> 什么是 Markdown？ </h2><p class="text-muted-foreground mb-4" data-v-4358eaf7> Markdown 是一种轻量级标记语言，由 John Gruber 在 2004 年创建。它允许人们使用易读易写的纯文本格式编写文档， 然后转换成有效的 XHTML（或者 HTML）文档。Markdown 的目标是实现易读易写，成为一种适用于网络的书写语言。 </p><p class="text-muted-foreground" data-v-4358eaf7> Markdown 的语法非常简洁，只包含少量标点符号，让文档作者能够专注于内容创作而不是复杂的格式设置。 由于其简单性和可读性，Markdown 已成为技术文档、博客文章、README 文件和许多其他类型文档的首选格式。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-4358eaf7><span class="text-primary mr-2" data-v-4358eaf7>#</span> Markdown 语法快速入门 </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" data-v-4358eaf7><div data-v-4358eaf7><h3 class="text-lg font-semibold text-foreground mb-3" data-v-4358eaf7>基础语法</h3><table class="w-full text-sm" data-v-4358eaf7><thead data-v-4358eaf7><tr class="border-b border-border" data-v-4358eaf7><th class="text-left py-2 text-foreground" data-v-4358eaf7>元素</th><th class="text-left py-2 text-foreground" data-v-4358eaf7>语法</th><th class="text-left py-2 text-foreground" data-v-4358eaf7>效果</th></tr></thead><tbody data-v-4358eaf7><tr class="border-b border-border" data-v-4358eaf7><td class="py-2" data-v-4358eaf7>标题</td><td class="font-mono text-xs" data-v-4358eaf7># H1</td><td class="text-xl font-bold" data-v-4358eaf7>H1</td></tr><tr class="border-b border-border" data-v-4358eaf7><td class="py-2" data-v-4358eaf7>粗体</td><td class="font-mono text-xs" data-v-4358eaf7>**文本**</td><td class="font-bold" data-v-4358eaf7>文本</td></tr><tr class="border-b border-border" data-v-4358eaf7><td class="py-2" data-v-4358eaf7>斜体</td><td class="font-mono text-xs" data-v-4358eaf7>*文本*</td><td class="italic" data-v-4358eaf7>文本</td></tr><tr data-v-4358eaf7><td class="py-2" data-v-4358eaf7>链接</td><td class="font-mono text-xs" data-v-4358eaf7>[文本](url)</td><td class="text-primary" data-v-4358eaf7>文本</td></tr></tbody></table></div><div data-v-4358eaf7><h3 class="text-lg font-semibold text-foreground mb-3" data-v-4358eaf7>高级语法</h3><table class="w-full text-sm" data-v-4358eaf7><thead data-v-4358eaf7><tr class="border-b border-border" data-v-4358eaf7><th class="text-left py-2 text-foreground" data-v-4358eaf7>元素</th><th class="text-left py-2 text-foreground" data-v-4358eaf7>语法</th><th class="text-left py-2 text-foreground" data-v-4358eaf7>说明</th></tr></thead><tbody data-v-4358eaf7><tr class="border-b border-border" data-v-4358eaf7><td class="py-2" data-v-4358eaf7>代码块</td><td class="font-mono text-xs" data-v-4358eaf7>\`\`\`代码\`\`\`</td><td class="text-xs" data-v-4358eaf7>多行代码</td></tr><tr class="border-b border-border" data-v-4358eaf7><td class="py-2" data-v-4358eaf7>行内代码</td><td class="font-mono text-xs" data-v-4358eaf7>\`代码\`</td><td class="text-xs" data-v-4358eaf7>单行代码</td></tr><tr class="border-b border-border" data-v-4358eaf7><td class="py-2" data-v-4358eaf7>引用</td><td class="font-mono text-xs" data-v-4358eaf7>&gt; 文本</td><td class="text-xs" data-v-4358eaf7>引用块</td></tr><tr data-v-4358eaf7><td class="py-2" data-v-4358eaf7>表格</td><td class="font-mono text-xs" data-v-4358eaf7>|列|列|</td><td class="text-xs" data-v-4358eaf7>数据表格</td></tr></tbody></table></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-4358eaf7><span class="text-primary mr-2" data-v-4358eaf7>#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6" data-v-4358eaf7><li data-v-4358eaf7><strong data-v-4358eaf7>实时预览</strong>: 编辑器左侧输入，右侧即时显示渲染效果，所见即所得</li><li data-v-4358eaf7><strong data-v-4358eaf7>语法高亮</strong>: 自动识别 Markdown 语法，提供清晰的视觉反馈</li><li data-v-4358eaf7><strong data-v-4358eaf7>快捷工具栏</strong>: 常用格式一键插入，无需记忆繁琐的语法</li><li data-v-4358eaf7><strong data-v-4358eaf7>自动保存</strong>: 开启自动保存后，内容会实时保存到本地存储</li><li data-v-4358eaf7><strong data-v-4358eaf7>键盘快捷键</strong>: 支持 Ctrl+B（粗体）、Ctrl+I（斜体）等快捷操作</li><li data-v-4358eaf7><strong data-v-4358eaf7>滚动同步</strong>: 编辑器和预览区滚动位置自动同步，方便对比查看</li><li data-v-4358eaf7><strong data-v-4358eaf7>本地安全</strong>: 所有处理都在浏览器本地完成，数据不会上传到服务器</li><li data-v-4358eaf7><strong data-v-4358eaf7>导出功能</strong>: 支持复制 Markdown 源码和下载为 .md 文件</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-4358eaf7><span class="text-primary mr-2" data-v-4358eaf7>#</span> 使用场景 </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" data-v-4358eaf7><div class="p-4 bg-muted rounded-lg" data-v-4358eaf7><h3 class="font-semibold text-foreground mb-2" data-v-4358eaf7>技术文档</h3><p class="text-sm text-muted-foreground" data-v-4358eaf7>编写 API 文档、技术规范、项目 README 等技术类文档</p></div><div class="p-4 bg-muted rounded-lg" data-v-4358eaf7><h3 class="font-semibold text-foreground mb-2" data-v-4358eaf7>博客文章</h3><p class="text-sm text-muted-foreground" data-v-4358eaf7>创作博客文章、教程、笔记等内容，专注于写作而非格式</p></div><div class="p-4 bg-muted rounded-lg" data-v-4358eaf7><h3 class="font-semibold text-foreground mb-2" data-v-4358eaf7>项目文档</h3><p class="text-sm text-muted-foreground" data-v-4358eaf7>撰写项目说明、用户手册、开发指南等项目相关文档</p></div><div class="p-4 bg-muted rounded-lg" data-v-4358eaf7><h3 class="font-semibold text-foreground mb-2" data-v-4358eaf7>学术写作</h3><p class="text-sm text-muted-foreground" data-v-4358eaf7>编写论文、报告、笔记等学术内容，支持数学公式和图表</p></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-4358eaf7><span class="text-primary mr-2" data-v-4358eaf7>#</span> 常见问题 (FAQ) </h2><div class="space-y-4" data-v-4358eaf7><div data-v-4358eaf7><h3 class="text-lg font-semibold text-foreground" data-v-4358eaf7>如何插入图片？</h3><p class="text-muted-foreground mt-1" data-v-4358eaf7> 点击工具栏的图片按钮，或手动输入 \`![图片描述](图片链接)\`。支持本地图片路径和网络图片链接。 建议使用图床服务托管图片，然后插入图片链接。 </p></div><div data-v-4358eaf7><h3 class="text-lg font-semibold text-foreground" data-v-4358eaf7>如何创建表格？</h3><p class="text-muted-foreground mt-1" data-v-4358eaf7> 使用 \`|\` 分隔列，使用 \`-\` 分隔表头和表体。例如：\`|列1|列2|\\n|---|---|\\n|内容1|内容2|\`。 您也可以点击工具栏的表格按钮快速插入表格模板。 </p></div><div data-v-4358eaf7><h3 class="text-lg font-semibold text-foreground" data-v-4358eaf7>支持哪些 Markdown 扩展？</h3><p class="text-muted-foreground mt-1" data-v-4358eaf7> 本编辑器支持 GitHub Flavored Markdown (GFM)，包括表格、任务列表、删除线、自动链接等扩展语法。 同时支持代码块语法高亮，可指定编程语言以获得更好的显示效果。 </p></div><div data-v-4358eaf7><h3 class="text-lg font-semibold text-foreground" data-v-4358eaf7>如何使用数学公式？</h3><p class="text-muted-foreground mt-1" data-v-4358eaf7> 对于数学公式的支持，您可以使用 LaTeX 语法，如 \`$E=mc^2$\` 表示行内公式， \`$$E=mc^2$$\` 表示块级公式。注意：需要您的目标平台支持 MathJax 或 KaTeX 渲染。 </p></div></div></div></div><section class="mb-12" data-v-4358eaf7><h2 class="text-2xl font-bold text-foreground mb-4" data-v-4358eaf7>您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-v-4358eaf7><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2" data-v-4358eaf7${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground" data-v-4358eaf7${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2" data-v-4358eaf7${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/markdown-editor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markdownEditor = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4358eaf7"]]);
export {
  markdownEditor as default
};
//# sourceMappingURL=markdown-editor-BktZESt7.js.map
