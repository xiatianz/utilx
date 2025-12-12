import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { Bold, Italic, Strikethrough, List, ListOrdered, Link, Image, Code, FileCode, Quote, Minus, Table, HelpCircle, ChevronUp, Terminal, FileJson, Hash, Type, FileDiff, FileText } from 'lucide-vue-next';
import { marked } from 'marked';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { e as addRecentTool, f as useSeoMeta } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

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
      if (!markdownText.value) return '<p class="text-muted-foreground">\u9884\u89C8\u5185\u5BB9\u5C06\u5728\u8FD9\u91CC\u663E\u793A...</p>';
      try {
        return marked.parse(markdownText.value);
      } catch (error) {
        return '<p class="text-destructive">Markdown \u89E3\u6790\u9519\u8BEF</p>';
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
      title: "Markdown\u7F16\u8F91\u5668 - \u5728\u7EBFMarkdown\u5B9E\u65F6\u9884\u89C8\u7F16\u8F91\u5668",
      description: "\u514D\u8D39\u5728\u7EBFMarkdown\u7F16\u8F91\u5668\uFF0C\u652F\u6301\u5B9E\u65F6\u9884\u89C8\u3001\u8BED\u6CD5\u9AD8\u4EAE\u3001\u5FEB\u6377\u5DE5\u5177\u680F\u548C\u81EA\u52A8\u4FDD\u5B58\u529F\u80FD\u3002\u4E13\u6CE8\u4E8E\u5185\u5BB9\u521B\u4F5C\uFF0C\u65E0\u9700\u62C5\u5FC3\u683C\u5F0F\u95EE\u9898\u3002",
      keywords: ["markdown", "editor", "preview", "realtime", "syntax", "\u5728\u7EBF\u7F16\u8F91\u5668", "markdown\u7F16\u8F91\u5668", "\u5B9E\u65F6\u9884\u89C8"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-4358eaf7><div class="mb-8" data-v-4358eaf7><h1 class="text-3xl font-bold text-foreground mb-3" data-v-4358eaf7>Markdown \u7F16\u8F91\u5668 - \u5728\u7EBF Markdown \u5B9E\u65F6\u9884\u89C8\u7F16\u8F91\u5668</h1><p class="text-muted-foreground" data-v-4358eaf7>\u4E00\u6B3E\u529F\u80FD\u5F3A\u5927\u7684\u5728\u7EBF Markdown \u7F16\u8F91\u5668\uFF0C\u652F\u6301\u5B9E\u65F6\u9884\u89C8\u3001\u8BED\u6CD5\u9AD8\u4EAE\u3001\u5FEB\u6377\u5DE5\u5177\u680F\u548C\u81EA\u52A8\u4FDD\u5B58\u3002\u8BA9\u60A8\u4E13\u6CE8\u4E8E\u5185\u5BB9\u521B\u4F5C\uFF0C\u65E0\u9700\u62C5\u5FC3\u683C\u5F0F\u95EE\u9898\u3002</p></div><div class="mb-8" data-v-4358eaf7><div class="bg-card border border-border rounded-t-lg p-3 flex items-center gap-2 flex-wrap" data-v-4358eaf7><div class="flex items-center gap-1" data-v-4358eaf7><button class="p-2 hover:bg-muted rounded transition-colors" title="\u7C97\u4F53" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Bold), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="\u659C\u4F53" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Italic), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="\u5220\u9664\u7EBF" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Strikethrough), { class: "w-4 h-4" }, null, _parent));
      _push(`</button></div><div class="w-px h-6 bg-border" data-v-4358eaf7></div><div class="flex items-center gap-1" data-v-4358eaf7><button class="p-2 hover:bg-muted rounded transition-colors" title="\u4E00\u7EA7\u6807\u9898" data-v-4358eaf7><h1 class="text-lg font-bold" data-v-4358eaf7>H1</h1></button><button class="p-2 hover:bg-muted rounded transition-colors" title="\u4E8C\u7EA7\u6807\u9898" data-v-4358eaf7><h2 class="text-lg font-bold" data-v-4358eaf7>H2</h2></button><button class="p-2 hover:bg-muted rounded transition-colors" title="\u4E09\u7EA7\u6807\u9898" data-v-4358eaf7><h3 class="text-sm font-bold" data-v-4358eaf7>H3</h3></button></div><div class="w-px h-6 bg-border" data-v-4358eaf7></div><div class="flex items-center gap-1" data-v-4358eaf7><button class="p-2 hover:bg-muted rounded transition-colors" title="\u65E0\u5E8F\u5217\u8868" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(List), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="\u6709\u5E8F\u5217\u8868" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(ListOrdered), { class: "w-4 h-4" }, null, _parent));
      _push(`</button></div><div class="w-px h-6 bg-border" data-v-4358eaf7></div><div class="flex items-center gap-1" data-v-4358eaf7><button class="p-2 hover:bg-muted rounded transition-colors" title="\u63D2\u5165\u94FE\u63A5" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Link), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="\u63D2\u5165\u56FE\u7247" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Image), { class: "w-4 h-4" }, null, _parent));
      _push(`</button></div><div class="w-px h-6 bg-border" data-v-4358eaf7></div><div class="flex items-center gap-1" data-v-4358eaf7><button class="p-2 hover:bg-muted rounded transition-colors" title="\u884C\u5185\u4EE3\u7801" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Code), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="\u4EE3\u7801\u5757" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(FileCode), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="\u5F15\u7528" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Quote), { class: "w-4 h-4" }, null, _parent));
      _push(`</button></div><div class="w-px h-6 bg-border" data-v-4358eaf7></div><div class="flex items-center gap-1" data-v-4358eaf7><button class="p-2 hover:bg-muted rounded transition-colors" title="\u5206\u5272\u7EBF" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Minus), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 hover:bg-muted rounded transition-colors" title="\u63D2\u5165\u8868\u683C" data-v-4358eaf7>`);
      _push(ssrRenderComponent(unref(Table), { class: "w-4 h-4" }, null, _parent));
      _push(`</button></div><div class="ml-auto flex items-center gap-2" data-v-4358eaf7><button class="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-4358eaf7> \u6E05\u7A7A </button><button class="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-4358eaf7> \u590D\u5236 Markdown </button><button class="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors" data-v-4358eaf7> \u4E0B\u8F7D </button></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-t-0 rounded-b-lg" data-v-4358eaf7><div class="relative" data-v-4358eaf7><textarea placeholder="\u5728\u8FD9\u91CC\u8F93\u5165 Markdown \u6587\u672C..." class="absolute inset-0 w-full h-full p-4 resize-none focus:outline-none font-mono text-sm bg-background" data-v-4358eaf7>${ssrInterpolate(markdownText.value)}</textarea></div><div class="border-l bg-muted/30 p-4 overflow-auto" data-v-4358eaf7><div class="prose prose-sm max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-code:font-mono prose-pre:bg-background prose-pre:border prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded" data-v-4358eaf7>${(_a = renderedMarkdown.value) != null ? _a : ""}</div></div></div><div class="mt-4 flex items-center justify-between text-sm text-muted-foreground bg-card border border-border rounded-lg p-3" data-v-4358eaf7><div class="flex items-center gap-4" data-v-4358eaf7><span data-v-4358eaf7>${ssrInterpolate(markdownText.value.length)} \u4E2A\u5B57\u7B26</span><span data-v-4358eaf7>${ssrInterpolate(wordCount.value)} \u4E2A\u8BCD</span><span data-v-4358eaf7>${ssrInterpolate(lineCount.value)} \u884C</span></div><div class="flex items-center gap-2" data-v-4358eaf7><label class="flex items-center gap-2" data-v-4358eaf7><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(autoSave.value) ? ssrLooseContain(autoSave.value, null) : autoSave.value) ? " checked" : ""} class="rounded" data-v-4358eaf7><span data-v-4358eaf7>\u81EA\u52A8\u4FDD\u5B58</span></label>`);
      if (lastSaved.value) {
        _push(`<span data-v-4358eaf7>\uFF08${ssrInterpolate(lastSaved.value)} \u5DF2\u4FDD\u5B58\uFF09</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="p-6 mb-12 relative bg-card border border-border rounded-lg" data-v-4358eaf7><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")} data-v-4358eaf7>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}" data-v-4358eaf7><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center" data-v-4358eaf7><span class="text-primary mr-2" data-v-4358eaf7>#</span> \u4EC0\u4E48\u662F Markdown\uFF1F </h2><p class="text-muted-foreground mb-4" data-v-4358eaf7> Markdown \u662F\u4E00\u79CD\u8F7B\u91CF\u7EA7\u6807\u8BB0\u8BED\u8A00\uFF0C\u7531 John Gruber \u5728 2004 \u5E74\u521B\u5EFA\u3002\u5B83\u5141\u8BB8\u4EBA\u4EEC\u4F7F\u7528\u6613\u8BFB\u6613\u5199\u7684\u7EAF\u6587\u672C\u683C\u5F0F\u7F16\u5199\u6587\u6863\uFF0C \u7136\u540E\u8F6C\u6362\u6210\u6709\u6548\u7684 XHTML\uFF08\u6216\u8005 HTML\uFF09\u6587\u6863\u3002Markdown \u7684\u76EE\u6807\u662F\u5B9E\u73B0\u6613\u8BFB\u6613\u5199\uFF0C\u6210\u4E3A\u4E00\u79CD\u9002\u7528\u4E8E\u7F51\u7EDC\u7684\u4E66\u5199\u8BED\u8A00\u3002 </p><p class="text-muted-foreground" data-v-4358eaf7> Markdown \u7684\u8BED\u6CD5\u975E\u5E38\u7B80\u6D01\uFF0C\u53EA\u5305\u542B\u5C11\u91CF\u6807\u70B9\u7B26\u53F7\uFF0C\u8BA9\u6587\u6863\u4F5C\u8005\u80FD\u591F\u4E13\u6CE8\u4E8E\u5185\u5BB9\u521B\u4F5C\u800C\u4E0D\u662F\u590D\u6742\u7684\u683C\u5F0F\u8BBE\u7F6E\u3002 \u7531\u4E8E\u5176\u7B80\u5355\u6027\u548C\u53EF\u8BFB\u6027\uFF0CMarkdown \u5DF2\u6210\u4E3A\u6280\u672F\u6587\u6863\u3001\u535A\u5BA2\u6587\u7AE0\u3001README \u6587\u4EF6\u548C\u8BB8\u591A\u5176\u4ED6\u7C7B\u578B\u6587\u6863\u7684\u9996\u9009\u683C\u5F0F\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-4358eaf7><span class="text-primary mr-2" data-v-4358eaf7>#</span> Markdown \u8BED\u6CD5\u5FEB\u901F\u5165\u95E8 </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" data-v-4358eaf7><div data-v-4358eaf7><h3 class="text-lg font-semibold text-foreground mb-3" data-v-4358eaf7>\u57FA\u7840\u8BED\u6CD5</h3><table class="w-full text-sm" data-v-4358eaf7><thead data-v-4358eaf7><tr class="border-b border-border" data-v-4358eaf7><th class="text-left py-2 text-foreground" data-v-4358eaf7>\u5143\u7D20</th><th class="text-left py-2 text-foreground" data-v-4358eaf7>\u8BED\u6CD5</th><th class="text-left py-2 text-foreground" data-v-4358eaf7>\u6548\u679C</th></tr></thead><tbody data-v-4358eaf7><tr class="border-b border-border" data-v-4358eaf7><td class="py-2" data-v-4358eaf7>\u6807\u9898</td><td class="font-mono text-xs" data-v-4358eaf7># H1</td><td class="text-xl font-bold" data-v-4358eaf7>H1</td></tr><tr class="border-b border-border" data-v-4358eaf7><td class="py-2" data-v-4358eaf7>\u7C97\u4F53</td><td class="font-mono text-xs" data-v-4358eaf7>**\u6587\u672C**</td><td class="font-bold" data-v-4358eaf7>\u6587\u672C</td></tr><tr class="border-b border-border" data-v-4358eaf7><td class="py-2" data-v-4358eaf7>\u659C\u4F53</td><td class="font-mono text-xs" data-v-4358eaf7>*\u6587\u672C*</td><td class="italic" data-v-4358eaf7>\u6587\u672C</td></tr><tr data-v-4358eaf7><td class="py-2" data-v-4358eaf7>\u94FE\u63A5</td><td class="font-mono text-xs" data-v-4358eaf7>[\u6587\u672C](url)</td><td class="text-primary" data-v-4358eaf7>\u6587\u672C</td></tr></tbody></table></div><div data-v-4358eaf7><h3 class="text-lg font-semibold text-foreground mb-3" data-v-4358eaf7>\u9AD8\u7EA7\u8BED\u6CD5</h3><table class="w-full text-sm" data-v-4358eaf7><thead data-v-4358eaf7><tr class="border-b border-border" data-v-4358eaf7><th class="text-left py-2 text-foreground" data-v-4358eaf7>\u5143\u7D20</th><th class="text-left py-2 text-foreground" data-v-4358eaf7>\u8BED\u6CD5</th><th class="text-left py-2 text-foreground" data-v-4358eaf7>\u8BF4\u660E</th></tr></thead><tbody data-v-4358eaf7><tr class="border-b border-border" data-v-4358eaf7><td class="py-2" data-v-4358eaf7>\u4EE3\u7801\u5757</td><td class="font-mono text-xs" data-v-4358eaf7>\`\`\`\u4EE3\u7801\`\`\`</td><td class="text-xs" data-v-4358eaf7>\u591A\u884C\u4EE3\u7801</td></tr><tr class="border-b border-border" data-v-4358eaf7><td class="py-2" data-v-4358eaf7>\u884C\u5185\u4EE3\u7801</td><td class="font-mono text-xs" data-v-4358eaf7>\`\u4EE3\u7801\`</td><td class="text-xs" data-v-4358eaf7>\u5355\u884C\u4EE3\u7801</td></tr><tr class="border-b border-border" data-v-4358eaf7><td class="py-2" data-v-4358eaf7>\u5F15\u7528</td><td class="font-mono text-xs" data-v-4358eaf7>&gt; \u6587\u672C</td><td class="text-xs" data-v-4358eaf7>\u5F15\u7528\u5757</td></tr><tr data-v-4358eaf7><td class="py-2" data-v-4358eaf7>\u8868\u683C</td><td class="font-mono text-xs" data-v-4358eaf7>|\u5217|\u5217|</td><td class="text-xs" data-v-4358eaf7>\u6570\u636E\u8868\u683C</td></tr></tbody></table></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-4358eaf7><span class="text-primary mr-2" data-v-4358eaf7>#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6" data-v-4358eaf7><li data-v-4358eaf7><strong data-v-4358eaf7>\u5B9E\u65F6\u9884\u89C8</strong>: \u7F16\u8F91\u5668\u5DE6\u4FA7\u8F93\u5165\uFF0C\u53F3\u4FA7\u5373\u65F6\u663E\u793A\u6E32\u67D3\u6548\u679C\uFF0C\u6240\u89C1\u5373\u6240\u5F97</li><li data-v-4358eaf7><strong data-v-4358eaf7>\u8BED\u6CD5\u9AD8\u4EAE</strong>: \u81EA\u52A8\u8BC6\u522B Markdown \u8BED\u6CD5\uFF0C\u63D0\u4F9B\u6E05\u6670\u7684\u89C6\u89C9\u53CD\u9988</li><li data-v-4358eaf7><strong data-v-4358eaf7>\u5FEB\u6377\u5DE5\u5177\u680F</strong>: \u5E38\u7528\u683C\u5F0F\u4E00\u952E\u63D2\u5165\uFF0C\u65E0\u9700\u8BB0\u5FC6\u7E41\u7410\u7684\u8BED\u6CD5</li><li data-v-4358eaf7><strong data-v-4358eaf7>\u81EA\u52A8\u4FDD\u5B58</strong>: \u5F00\u542F\u81EA\u52A8\u4FDD\u5B58\u540E\uFF0C\u5185\u5BB9\u4F1A\u5B9E\u65F6\u4FDD\u5B58\u5230\u672C\u5730\u5B58\u50A8</li><li data-v-4358eaf7><strong data-v-4358eaf7>\u952E\u76D8\u5FEB\u6377\u952E</strong>: \u652F\u6301 Ctrl+B\uFF08\u7C97\u4F53\uFF09\u3001Ctrl+I\uFF08\u659C\u4F53\uFF09\u7B49\u5FEB\u6377\u64CD\u4F5C</li><li data-v-4358eaf7><strong data-v-4358eaf7>\u6EDA\u52A8\u540C\u6B65</strong>: \u7F16\u8F91\u5668\u548C\u9884\u89C8\u533A\u6EDA\u52A8\u4F4D\u7F6E\u81EA\u52A8\u540C\u6B65\uFF0C\u65B9\u4FBF\u5BF9\u6BD4\u67E5\u770B</li><li data-v-4358eaf7><strong data-v-4358eaf7>\u672C\u5730\u5B89\u5168</strong>: \u6240\u6709\u5904\u7406\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u670D\u52A1\u5668</li><li data-v-4358eaf7><strong data-v-4358eaf7>\u5BFC\u51FA\u529F\u80FD</strong>: \u652F\u6301\u590D\u5236 Markdown \u6E90\u7801\u548C\u4E0B\u8F7D\u4E3A .md \u6587\u4EF6</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-4358eaf7><span class="text-primary mr-2" data-v-4358eaf7>#</span> \u4F7F\u7528\u573A\u666F </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" data-v-4358eaf7><div class="p-4 bg-muted rounded-lg" data-v-4358eaf7><h3 class="font-semibold text-foreground mb-2" data-v-4358eaf7>\u6280\u672F\u6587\u6863</h3><p class="text-sm text-muted-foreground" data-v-4358eaf7>\u7F16\u5199 API \u6587\u6863\u3001\u6280\u672F\u89C4\u8303\u3001\u9879\u76EE README \u7B49\u6280\u672F\u7C7B\u6587\u6863</p></div><div class="p-4 bg-muted rounded-lg" data-v-4358eaf7><h3 class="font-semibold text-foreground mb-2" data-v-4358eaf7>\u535A\u5BA2\u6587\u7AE0</h3><p class="text-sm text-muted-foreground" data-v-4358eaf7>\u521B\u4F5C\u535A\u5BA2\u6587\u7AE0\u3001\u6559\u7A0B\u3001\u7B14\u8BB0\u7B49\u5185\u5BB9\uFF0C\u4E13\u6CE8\u4E8E\u5199\u4F5C\u800C\u975E\u683C\u5F0F</p></div><div class="p-4 bg-muted rounded-lg" data-v-4358eaf7><h3 class="font-semibold text-foreground mb-2" data-v-4358eaf7>\u9879\u76EE\u6587\u6863</h3><p class="text-sm text-muted-foreground" data-v-4358eaf7>\u64B0\u5199\u9879\u76EE\u8BF4\u660E\u3001\u7528\u6237\u624B\u518C\u3001\u5F00\u53D1\u6307\u5357\u7B49\u9879\u76EE\u76F8\u5173\u6587\u6863</p></div><div class="p-4 bg-muted rounded-lg" data-v-4358eaf7><h3 class="font-semibold text-foreground mb-2" data-v-4358eaf7>\u5B66\u672F\u5199\u4F5C</h3><p class="text-sm text-muted-foreground" data-v-4358eaf7>\u7F16\u5199\u8BBA\u6587\u3001\u62A5\u544A\u3001\u7B14\u8BB0\u7B49\u5B66\u672F\u5185\u5BB9\uFF0C\u652F\u6301\u6570\u5B66\u516C\u5F0F\u548C\u56FE\u8868</p></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-4358eaf7><span class="text-primary mr-2" data-v-4358eaf7>#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4" data-v-4358eaf7><div data-v-4358eaf7><h3 class="text-lg font-semibold text-foreground" data-v-4358eaf7>\u5982\u4F55\u63D2\u5165\u56FE\u7247\uFF1F</h3><p class="text-muted-foreground mt-1" data-v-4358eaf7> \u70B9\u51FB\u5DE5\u5177\u680F\u7684\u56FE\u7247\u6309\u94AE\uFF0C\u6216\u624B\u52A8\u8F93\u5165 \`![\u56FE\u7247\u63CF\u8FF0](\u56FE\u7247\u94FE\u63A5)\`\u3002\u652F\u6301\u672C\u5730\u56FE\u7247\u8DEF\u5F84\u548C\u7F51\u7EDC\u56FE\u7247\u94FE\u63A5\u3002 \u5EFA\u8BAE\u4F7F\u7528\u56FE\u5E8A\u670D\u52A1\u6258\u7BA1\u56FE\u7247\uFF0C\u7136\u540E\u63D2\u5165\u56FE\u7247\u94FE\u63A5\u3002 </p></div><div data-v-4358eaf7><h3 class="text-lg font-semibold text-foreground" data-v-4358eaf7>\u5982\u4F55\u521B\u5EFA\u8868\u683C\uFF1F</h3><p class="text-muted-foreground mt-1" data-v-4358eaf7> \u4F7F\u7528 \`|\` \u5206\u9694\u5217\uFF0C\u4F7F\u7528 \`-\` \u5206\u9694\u8868\u5934\u548C\u8868\u4F53\u3002\u4F8B\u5982\uFF1A\`|\u52171|\u52172|\\n|---|---|\\n|\u5185\u5BB91|\u5185\u5BB92|\`\u3002 \u60A8\u4E5F\u53EF\u4EE5\u70B9\u51FB\u5DE5\u5177\u680F\u7684\u8868\u683C\u6309\u94AE\u5FEB\u901F\u63D2\u5165\u8868\u683C\u6A21\u677F\u3002 </p></div><div data-v-4358eaf7><h3 class="text-lg font-semibold text-foreground" data-v-4358eaf7>\u652F\u6301\u54EA\u4E9B Markdown \u6269\u5C55\uFF1F</h3><p class="text-muted-foreground mt-1" data-v-4358eaf7> \u672C\u7F16\u8F91\u5668\u652F\u6301 GitHub Flavored Markdown (GFM)\uFF0C\u5305\u62EC\u8868\u683C\u3001\u4EFB\u52A1\u5217\u8868\u3001\u5220\u9664\u7EBF\u3001\u81EA\u52A8\u94FE\u63A5\u7B49\u6269\u5C55\u8BED\u6CD5\u3002 \u540C\u65F6\u652F\u6301\u4EE3\u7801\u5757\u8BED\u6CD5\u9AD8\u4EAE\uFF0C\u53EF\u6307\u5B9A\u7F16\u7A0B\u8BED\u8A00\u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u663E\u793A\u6548\u679C\u3002 </p></div><div data-v-4358eaf7><h3 class="text-lg font-semibold text-foreground" data-v-4358eaf7>\u5982\u4F55\u4F7F\u7528\u6570\u5B66\u516C\u5F0F\uFF1F</h3><p class="text-muted-foreground mt-1" data-v-4358eaf7> \u5BF9\u4E8E\u6570\u5B66\u516C\u5F0F\u7684\u652F\u6301\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528 LaTeX \u8BED\u6CD5\uFF0C\u5982 \`$E=mc^2$\` \u8868\u793A\u884C\u5185\u516C\u5F0F\uFF0C \`$$E=mc^2$$\` \u8868\u793A\u5757\u7EA7\u516C\u5F0F\u3002\u6CE8\u610F\uFF1A\u9700\u8981\u60A8\u7684\u76EE\u6807\u5E73\u53F0\u652F\u6301 MathJax \u6216 KaTeX \u6E32\u67D3\u3002 </p></div></div></div></div><section class="mb-12" data-v-4358eaf7><h2 class="text-2xl font-bold text-foreground mb-4" data-v-4358eaf7>\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-v-4358eaf7><!--[-->`);
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

export { markdownEditor as default };
//# sourceMappingURL=markdown-editor-BktZESt7.mjs.map
