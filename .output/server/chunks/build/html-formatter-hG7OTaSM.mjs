import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, resolveComponent, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
import { Code2, Settings, Zap, Minimize2, Trash2, CheckCircle, FileCheck, Copy, Eye, AlertCircle, HelpCircle, ChevronUp, Replace, Link, Palette, Search, ArrowRight, Shield, FileText } from 'lucide-vue-next';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
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
  __name: "html-formatter",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "HTML\u683C\u5F0F\u5316\u5DE5\u5177 - \u5728\u7EBFHTML\u7F8E\u5316\u538B\u7F29\u5DE5\u5177",
      meta: [
        { name: "description", content: "\u4E13\u4E1A\u7684\u5728\u7EBFHTML\u683C\u5F0F\u5316\u5DE5\u5177\uFF0C\u652F\u6301HTML\u4EE3\u7801\u7F8E\u5316\u3001\u538B\u7F29\u3001\u683C\u5F0F\u5316\u548C\u8BED\u6CD5\u9A8C\u8BC1\u3002\u667A\u80FD\u7F29\u8FDB\u8C03\u6574\uFF0C\u5B9E\u65F6\u9884\u89C8\u6548\u679C\uFF0C\u4E00\u952E\u590D\u5236\u7ED3\u679C\u3002" },
        { name: "keywords", content: "HTML\u683C\u5F0F\u5316,HTML\u7F8E\u5316,HTML\u538B\u7F29,\u4EE3\u7801\u683C\u5F0F\u5316,HTML\u9A8C\u8BC1,\u5728\u7EBFHTML\u5DE5\u5177" },
        { name: "robots", content: "index,follow" }
      ]
    });
    const tool = tools.find((t) => t.id === "html-formatter");
    categories.find((c) => c.id === "format");
    const isSeoContentVisible = ref(true);
    const htmlInput = ref("");
    const formattedOutput = ref("");
    const indentType = ref("spaces");
    const indentSize = ref(2);
    const removeComments = ref(false);
    const removeEmptyAttributes = ref(false);
    const errorMessage = ref("");
    const formatMode = ref("format");
    const iconMap = {
      FileText,
      Code2,
      FileCheck,
      Settings,
      Zap,
      Shield,
      Eye,
      Copy,
      Minimize2,
      Trash2,
      CheckCircle,
      AlertCircle,
      ArrowRight,
      Search,
      Palette,
      Link,
      Replace,
      HelpCircle,
      ChevronUp
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "format" && t.id !== "html-formatter"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "css-formatter"),
        tools.find((t) => t.id === "js-formatter"),
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "xml-formatter")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const compressionRate = computed(() => {
      if (!htmlInput.value.length) return 0;
      const reduction = htmlInput.value.length - formattedOutput.value.length;
      return Math.round(reduction / htmlInput.value.length * 100);
    });
    const formatBytes = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_FileUp = resolveComponent("FileUp");
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">HTML\u683C\u5F0F\u5316\u5DE5\u5177 - \u5728\u7EBFHTML\u7F8E\u5316\u538B\u7F29\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E13\u4E1A\u7684\u5728\u7EBFHTML\u683C\u5F0F\u5316\u5DE5\u5177\uFF0C\u652F\u6301HTML\u4EE3\u7801\u7F8E\u5316\u3001\u538B\u7F29\u3001\u683C\u5F0F\u5316\u548C\u8BED\u6CD5\u9A8C\u8BC1\u3002\u667A\u80FD\u7F29\u8FDB\u8C03\u6574\uFF0C\u5B9E\u65F6\u9884\u89C8\u6548\u679C\uFF0C\u4E00\u952E\u590D\u5236\u7ED3\u679C\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"><div class="space-y-6"><div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold text-foreground flex items-center">`);
      _push(ssrRenderComponent(unref(Code2), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` HTML \u4EE3\u7801\u8F93\u5165 </h2><span class="text-sm text-muted-foreground">${ssrInterpolate(formatBytes(htmlInput.value.length))}</span></div><div class="space-y-4"><textarea placeholder="\u8BF7\u7C98\u8D34\u60A8\u7684HTML\u4EE3\u7801..." class="w-full h-80 px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm text-foreground placeholder:text-muted-foreground resize-none">${ssrInterpolate(htmlInput.value)}</textarea></div></div><div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u683C\u5F0F\u5316\u9009\u9879 </h3><div class="space-y-4"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u7F29\u8FDB\u7C7B\u578B</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="spaces"${ssrIncludeBooleanAttr(Array.isArray(indentType.value) ? ssrLooseContain(indentType.value, "spaces") : ssrLooseEqual(indentType.value, "spaces")) ? " selected" : ""}>\u7A7A\u683C</option><option value="tabs"${ssrIncludeBooleanAttr(Array.isArray(indentType.value) ? ssrLooseContain(indentType.value, "tabs") : ssrLooseEqual(indentType.value, "tabs")) ? " selected" : ""}>\u5236\u8868\u7B26</option></select></div><div><label class="block text-sm font-medium text-foreground mb-2">\u7F29\u8FDB\u5927\u5C0F</label><input type="number"${ssrRenderAttr("value", indentSize.value)} min="1" max="8" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"></div></div><div class="space-y-3"><label class="flex items-center cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(removeComments.value) ? ssrLooseContain(removeComments.value, null) : removeComments.value) ? " checked" : ""} class="mr-3 h-4 w-4 text-primary rounded border-border bg-background focus:ring-primary"><span class="text-sm text-foreground">\u79FB\u9664 HTML \u6CE8\u91CA</span></label><label class="flex items-center cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(removeEmptyAttributes.value) ? ssrLooseContain(removeEmptyAttributes.value, null) : removeEmptyAttributes.value) ? " checked" : ""} class="mr-3 h-4 w-4 text-primary rounded border-border bg-background focus:ring-primary"><span class="text-sm text-foreground">\u79FB\u9664\u7A7A\u5C5E\u6027</span></label></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Zap), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u5FEB\u901F\u64CD\u4F5C </h3><div class="grid grid-cols-2 gap-3"><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium">`);
      _push(ssrRenderComponent(_component_FileUp, { class: "inline-block w-4 h-4 mr-2" }, null, _parent));
      _push(` \u52A0\u8F7D\u793A\u4F8B </button><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors text-sm font-medium">`);
      _push(ssrRenderComponent(unref(Minimize2), { class: "inline-block w-4 h-4 mr-2" }, null, _parent));
      _push(` \u538B\u7F29\u4EE3\u7801 </button><button class="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors text-sm font-medium">`);
      _push(ssrRenderComponent(unref(Trash2), { class: "inline-block w-4 h-4 mr-2" }, null, _parent));
      _push(` \u6E05\u7A7A\u5168\u90E8 </button><button class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium">`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "inline-block w-4 h-4 mr-2" }, null, _parent));
      _push(` \u9A8C\u8BC1\u683C\u5F0F </button></div></div></div><div class="space-y-6"><div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold text-foreground flex items-center">`);
      _push(ssrRenderComponent(unref(FileCheck), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u683C\u5F0F\u5316\u7ED3\u679C </h2><div class="flex items-center gap-2"><span class="text-sm px-2 py-1 bg-primary/10 text-primary rounded-full">${ssrInterpolate(formatMode.value === "format" ? "\u7F8E\u5316" : "\u538B\u7F29")}\u6A21\u5F0F </span><button class="px-3 py-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium">`);
      _push(ssrRenderComponent(unref(Copy), { class: "inline-block w-4 h-4 mr-1" }, null, _parent));
      _push(` \u590D\u5236 </button></div></div><textarea readonly class="w-full h-80 px-4 py-3 bg-muted border border-border rounded-lg font-mono text-sm text-foreground resize-none">${ssrInterpolate(formattedOutput.value)}</textarea><div class="mt-4 grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg"><div class="text-center"><div class="text-2xl font-bold text-primary">${ssrInterpolate(formatBytes(htmlInput.value.length))}</div><div class="text-sm text-muted-foreground">\u539F\u59CB\u5927\u5C0F</div></div><div class="text-center"><div class="text-2xl font-bold text-secondary">${ssrInterpolate(formatBytes(formattedOutput.value.length))}</div><div class="text-sm text-muted-foreground">\u5904\u7406\u540E</div></div><div class="text-center"><div class="text-2xl font-bold text-green-600">${ssrInterpolate(compressionRate.value)}%</div><div class="text-sm text-muted-foreground">\u538B\u7F29\u7387</div></div><div class="text-center"><div class="text-2xl font-bold text-blue-600">${ssrInterpolate(formattedOutput.value.split("\n").length)}</div><div class="text-sm text-muted-foreground">\u603B\u884C\u6570</div></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Eye), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` HTML \u9884\u89C8 </h3><div class="border border-border rounded-lg p-6 min-h-[200px] bg-background overflow-auto">${(_a = formattedOutput.value) != null ? _a : ""}</div></div>`);
      if (errorMessage.value) {
        _push(`<div class="bg-destructive/10 border border-destructive rounded-lg p-4"><div class="flex items-start">`);
        _push(ssrRenderComponent(unref(AlertCircle), { class: "h-5 w-5 text-destructive mr-2 mt-0.5" }, null, _parent));
        _push(`<p class="text-destructive text-sm">${ssrInterpolate(errorMessage.value)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F HTML \u683C\u5F0F\u5316\uFF1F </h2><p class="text-muted-foreground mb-4"> HTML \u683C\u5F0F\u5316\u662F\u6307\u5BF9 HTML \u4EE3\u7801\u8FDB\u884C\u7F8E\u5316\u548C\u6574\u7406\uFF0C\u4F7F\u5176\u5177\u6709\u826F\u597D\u7684\u7F29\u8FDB\u3001\u6362\u884C\u548C\u7ED3\u6784\u5C42\u6B21\uFF0C \u4ECE\u800C\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002\u683C\u5F0F\u5316\u540E\u7684 HTML \u4EE3\u7801\u66F4\u5BB9\u6613\u7406\u89E3\u548C\u4FEE\u6539\uFF0C \u4E5F\u6709\u52A9\u4E8E\u56E2\u961F\u534F\u4F5C\u5F00\u53D1\u3002 </p><p class="text-muted-foreground mb-4"> HTML \u683C\u5F0F\u5316\u5DE5\u5177\u4E0D\u4EC5\u53EF\u4EE5\u7F8E\u5316\u4EE3\u7801\uFF0C\u8FD8\u53EF\u4EE5\u538B\u7F29 HTML \u4EE5\u51CF\u5C0F\u6587\u4EF6\u5927\u5C0F\uFF0C \u63D0\u5347\u7F51\u9875\u52A0\u8F7D\u901F\u5EA6\u3002\u540C\u65F6\uFF0C\u5B83\u8FD8\u80FD\u5E2E\u52A9\u68C0\u6D4B HTML \u8BED\u6CD5\u9519\u8BEF\uFF0C\u786E\u4FDD\u4EE3\u7801\u7B26\u5408\u6807\u51C6\u89C4\u8303\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u667A\u80FD\u683C\u5F0F\u5316</strong>: \u81EA\u52A8\u8BC6\u522BHTML\u7ED3\u6784\uFF0C\u667A\u80FD\u8C03\u6574\u7F29\u8FDB\u548C\u6362\u884C\uFF0C\u8BA9\u4EE3\u7801\u5C42\u6B21\u6E05\u6670</li><li><strong>\u4EE3\u7801\u538B\u7F29</strong>: \u79FB\u9664\u591A\u4F59\u7A7A\u683C\u3001\u6CE8\u91CA\u548C\u6362\u884C\u7B26\uFF0C\u663E\u8457\u51CF\u5C0F\u6587\u4EF6\u4F53\u79EF</li><li><strong>\u8BED\u6CD5\u9A8C\u8BC1</strong>: \u68C0\u67E5HTML\u6807\u7B7E\u914D\u5BF9\u3001\u5D4C\u5957\u7ED3\u6784\u7B49\u8BED\u6CD5\u95EE\u9898</li><li><strong>\u81EA\u5B9A\u4E49\u9009\u9879</strong>: \u652F\u6301\u7F29\u8FDB\u7C7B\u578B\u3001\u5927\u5C0F\u3001\u6CE8\u91CA\u5904\u7406\u7B49\u591A\u79CD\u81EA\u5B9A\u4E49\u914D\u7F6E</li><li><strong>\u5B9E\u65F6\u9884\u89C8</strong>: \u5373\u65F6\u67E5\u770B\u683C\u5F0F\u5316\u540E\u7684HTML\u6548\u679C</li><li><strong>\u4E00\u952E\u590D\u5236</strong>: \u5FEB\u901F\u590D\u5236\u683C\u5F0F\u5316\u7ED3\u679C\u5230\u526A\u8D34\u677F</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4F7F\u7528\u573A\u666F </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u524D\u7AEF\u5F00\u53D1</strong>: \u683C\u5F0F\u5316\u548C\u538B\u7F29HTML\u6A21\u677F\u4EE3\u7801\uFF0C\u4F18\u5316\u7F51\u7AD9\u6027\u80FD</li><li><strong>\u4EE3\u7801\u5BA1\u67E5</strong>: \u7EDF\u4E00\u56E2\u961F\u4EE3\u7801\u98CE\u683C\uFF0C\u63D0\u9AD8\u4EE3\u7801\u53EF\u8BFB\u6027</li><li><strong>\u5B66\u4E60HTML</strong>: \u683C\u5F0F\u5316\u793A\u4F8B\u4EE3\u7801\uFF0C\u66F4\u597D\u5730\u7406\u89E3HTML\u7ED3\u6784</li><li><strong>\u4EE3\u7801\u4F18\u5316</strong>: \u538B\u7F29HTML\u6587\u4EF6\uFF0C\u51CF\u5C11\u7F51\u7EDC\u4F20\u8F93\u65F6\u95F4</li><li><strong>SEO\u4F18\u5316</strong>: \u6E05\u7406\u4EE3\u7801\u7ED3\u6784\uFF0C\u63D0\u5347\u641C\u7D22\u5F15\u64CE\u53CB\u597D\u5EA6</li><li><strong>\u4EE3\u7801\u91CD\u6784</strong>: \u91CD\u7EC4\u9879\u76EE\u4EE3\u7801\uFF0C\u63D0\u9AD8\u7EF4\u62A4\u6027</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">HTML\u683C\u5F0F\u5316\u4F1A\u5F71\u54CD\u7F51\u9875\u663E\u793A\u6548\u679C\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u4E0D\u4F1A\u3002HTML\u683C\u5F0F\u5316\u53EA\u6539\u53D8\u4EE3\u7801\u7684\u6392\u7248\u548C\u7ED3\u6784\uFF0C\u4E0D\u5F71\u54CD\u7F51\u9875\u7684\u5B9E\u9645\u663E\u793A\u6548\u679C\u3002 \u6D4F\u89C8\u5668\u5728\u89E3\u6790HTML\u65F6\u4F1A\u5FFD\u7565\u591A\u4F59\u7684\u7A7A\u683C\u548C\u6362\u884C\u7B26\uFF0C\u6240\u4EE5\u683C\u5F0F\u5316\u540E\u7684\u4EE3\u7801\u5728\u6D4F\u89C8\u5668\u4E2D\u663E\u793A\u6548\u679C\u5B8C\u5168\u76F8\u540C\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u8981\u538B\u7F29HTML\u4EE3\u7801\uFF1F</h3><p class="text-muted-foreground mt-1"> \u538B\u7F29HTML\u4EE3\u7801\u53EF\u4EE5\u663E\u8457\u51CF\u5C0F\u6587\u4EF6\u5927\u5C0F\uFF0C\u4ECE\u800C\u52A0\u5FEB\u7F51\u9875\u52A0\u8F7D\u901F\u5EA6\uFF0C \u63D0\u5347\u7528\u6237\u4F53\u9A8C\u3002\u5BF9\u4E8E\u8BBF\u95EE\u91CF\u5927\u7684\u7F51\u7AD9\uFF0C\u538B\u7F29HTML\u8FD8\u80FD\u8282\u7701\u5E26\u5BBD\u6210\u672C\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u9009\u62E9\u5408\u9002\u7684\u7F29\u8FDB\u65B9\u5F0F\uFF1F</h3><p class="text-muted-foreground mt-1"> \u4E00\u822C\u5EFA\u8BAE\u4F7F\u7528\u7A7A\u683C\u7F29\u8FDB\uFF0C\u56E0\u4E3A\u4E0D\u540C\u7F16\u8F91\u5668\u5BF9\u5236\u8868\u7B26\u7684\u663E\u793A\u5BBD\u5EA6\u53EF\u80FD\u4E0D\u540C\uFF0C \u5BB9\u6613\u9020\u6210\u4EE3\u7801\u5BF9\u9F50\u6DF7\u4E71\u3002\u901A\u5E382\u4E2A\u62164\u4E2A\u7A7A\u683C\u662F\u6BD4\u8F83\u5E38\u89C1\u7684\u9009\u62E9\uFF0C \u53EF\u4EE5\u6839\u636E\u56E2\u961F\u89C4\u8303\u6216\u4E2A\u4EBA\u559C\u597D\u8FDB\u884C\u8BBE\u7F6E\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u683C\u5F0F\u5316\u5DE5\u5177\u5B89\u5168\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u7EDD\u5BF9\u5B89\u5168\u3002\u6211\u4EEC\u7684HTML\u683C\u5F0F\u5316\u5DE5\u5177\u91C7\u7528\u7EAF\u524D\u7AEF\u6280\u672F\u5B9E\u73B0\uFF0C \u6240\u6709\u5904\u7406\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u4EFB\u4F55\u670D\u52A1\u5668\uFF0C \u786E\u4FDD\u60A8\u7684\u4EE3\u7801\u9690\u79C1\u548C\u5B89\u5168\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(FileText)), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(FileText)), { class: "w-5 h-5 text-primary" })),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/html-formatter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=html-formatter-hG7OTaSM.mjs.map
