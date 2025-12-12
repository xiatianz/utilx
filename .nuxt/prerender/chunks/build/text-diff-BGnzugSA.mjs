import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { FileText, FileDiff, GitCompare, HelpCircle, ChevronUp, GitBranch, FolderOpen, Globe, Regex, Timer, Link, Database, Image, Wifi, Clock, Shield, Lock, FilePlus, FileJson, Download, Copy, RotateCcw, Code, Hash, Type } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { e as addRecentTool } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/destr/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ohash/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/scule/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/apple/Documents/code/util/node_modules/pathe/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/server.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/devalue/index.js';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';

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
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-55ed773d><div class="mb-8" data-v-55ed773d><h1 class="text-3xl font-bold text-foreground mb-3" data-v-55ed773d>\u6587\u672C\u5BF9\u6BD4 - \u5728\u7EBF\u6587\u672C\u5DEE\u5F02\u6BD4\u8F83\u5DE5\u5177</h1><p class="text-muted-foreground" data-v-55ed773d>\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF\u6587\u672C\u5DEE\u5F02\u6BD4\u8F83\u5DE5\u5177\u3002\u652F\u6301\u5B9E\u65F6\u5BF9\u6BD4\u4E24\u4E2A\u6587\u672C\u7684\u5DEE\u5F02\uFF0C\u9AD8\u4EAE\u663E\u793A\u4E0D\u540C\u4E4B\u5904\u3002\u63D0\u4F9B\u884C\u7EA7\u3001\u5B57\u7B26\u7EA7\u548C\u5355\u8BCD\u7EA7\u4E09\u79CD\u5BF9\u6BD4\u6A21\u5F0F\uFF0C\u5B8C\u5168\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8" data-v-55ed773d><div class="flex flex-col h-full" data-v-55ed773d><div class="flex items-center justify-between mb-3" data-v-55ed773d><label class="text-sm font-medium text-foreground flex items-center gap-2" data-v-55ed773d>`);
      _push(ssrRenderComponent(unref(FileText), { class: "w-4 h-4" }, null, _parent));
      _push(` \u539F\u59CB\u6587\u672C </label><div class="flex gap-2" data-v-55ed773d><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-55ed773d> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-55ed773d> \u7C98\u8D34 </button></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="\u8F93\u5165\u539F\u59CB\u6587\u672C..." data-v-55ed773d>${ssrInterpolate(originalText.value)}</textarea></div><div class="flex flex-col h-full" data-v-55ed773d><div class="flex items-center justify-between mb-3" data-v-55ed773d><label class="text-sm font-medium text-foreground flex items-center gap-2" data-v-55ed773d>`);
      _push(ssrRenderComponent(unref(FileDiff), { class: "w-4 h-4" }, null, _parent));
      _push(` \u4FEE\u6539\u540E\u7684\u6587\u672C </label><div class="flex gap-2" data-v-55ed773d><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-55ed773d> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-55ed773d> \u7C98\u8D34 </button></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="\u8F93\u5165\u4FEE\u6539\u540E\u7684\u6587\u672C..." data-v-55ed773d>${ssrInterpolate(modifiedText.value)}</textarea></div></div><div class="bg-card border border-border rounded-lg p-4 mb-8" data-v-55ed773d><h3 class="text-lg font-semibold text-foreground mb-4" data-v-55ed773d>\u5BF9\u6BD4\u9009\u9879</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-55ed773d><div data-v-55ed773d><label class="block text-sm font-medium text-foreground mb-2" data-v-55ed773d>\u5BF9\u6BD4\u6A21\u5F0F</label><div class="space-y-2" data-v-55ed773d><label class="flex items-center" data-v-55ed773d><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(compareMode.value, "line")) ? " checked" : ""} value="line" class="mr-2" data-v-55ed773d><span class="text-sm" data-v-55ed773d>\u884C\u7EA7\u5BF9\u6BD4</span></label><label class="flex items-center" data-v-55ed773d><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(compareMode.value, "word")) ? " checked" : ""} value="word" class="mr-2" data-v-55ed773d><span class="text-sm" data-v-55ed773d>\u5355\u8BCD\u7EA7\u5BF9\u6BD4</span></label><label class="flex items-center" data-v-55ed773d><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(compareMode.value, "char")) ? " checked" : ""} value="char" class="mr-2" data-v-55ed773d><span class="text-sm" data-v-55ed773d>\u5B57\u7B26\u7EA7\u5BF9\u6BD4</span></label></div></div><div data-v-55ed773d><label class="block text-sm font-medium text-foreground mb-2" data-v-55ed773d>\u5BF9\u6BD4\u8BBE\u7F6E</label><div class="space-y-2" data-v-55ed773d><label class="flex items-center" data-v-55ed773d><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(ignoreWhitespace.value) ? ssrLooseContain(ignoreWhitespace.value, null) : ignoreWhitespace.value) ? " checked" : ""} class="mr-2" data-v-55ed773d><span class="text-sm" data-v-55ed773d>\u5FFD\u7565\u7A7A\u683C</span></label><label class="flex items-center" data-v-55ed773d><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(ignoreCase.value) ? ssrLooseContain(ignoreCase.value, null) : ignoreCase.value) ? " checked" : ""} class="mr-2" data-v-55ed773d><span class="text-sm" data-v-55ed773d>\u5FFD\u7565\u5927\u5C0F\u5199</span></label></div></div><div data-v-55ed773d><label class="block text-sm font-medium text-foreground mb-2" data-v-55ed773d>\u5FEB\u6377\u64CD\u4F5C</label><div class="grid grid-cols-2 gap-2" data-v-55ed773d><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors" data-v-55ed773d> \u52A0\u8F7D\u793A\u4F8B </button><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors" data-v-55ed773d> \u4EA4\u6362\u6587\u672C </button><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors" data-v-55ed773d> \u6E05\u7A7A\u5168\u90E8 </button><button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm text-foreground transition-colors" data-v-55ed773d> \u5BFC\u51FA\u5DEE\u5F02 </button></div></div></div></div><div class="bg-card border border-border rounded-lg p-6 mb-12" data-v-55ed773d><div class="flex items-center justify-between mb-4" data-v-55ed773d><h3 class="text-lg font-semibold text-foreground flex items-center gap-2" data-v-55ed773d>`);
      _push(ssrRenderComponent(unref(GitCompare), { class: "w-5 h-5" }, null, _parent));
      _push(` \u5BF9\u6BD4\u7ED3\u679C </h3><div class="flex items-center gap-4" data-v-55ed773d><div class="text-sm text-muted-foreground" data-v-55ed773d><span class="text-green-600 dark:text-green-400" data-v-55ed773d>+${ssrInterpolate(stats.value.added)}</span> \u6DFB\u52A0 <span class="text-red-600 dark:text-red-400 ml-2" data-v-55ed773d>-${ssrInterpolate(stats.value.removed)}</span> \u5220\u9664 <span class="ml-2" data-v-55ed773d>${ssrInterpolate(stats.value.unchanged)}</span> \u672A\u6539\u53D8 </div><button class="px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm" data-v-55ed773d> \u590D\u5236\u5DEE\u5F02 </button></div></div><div class="bg-muted rounded-lg p-4 overflow-x-auto max-h-[400px] overflow-y-auto" data-v-55ed773d>`);
      if (diffHtml.value) {
        _push(`<div class="font-mono text-sm whitespace-pre-wrap" data-v-55ed773d>${(_a = diffHtml.value) != null ? _a : ""}</div>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-8" data-v-55ed773d> \u8BF7\u8F93\u5165\u6587\u672C\u8FDB\u884C\u5BF9\u6BD4 </div>`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative" data-v-55ed773d><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")} data-v-55ed773d>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}" data-v-55ed773d><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center" data-v-55ed773d><span class="text-primary mr-2" data-v-55ed773d>#</span> \u4EC0\u4E48\u662F\u6587\u672C\u5BF9\u6BD4\u5DE5\u5177\uFF1F </h2><p class="text-muted-foreground mb-4" data-v-55ed773d> \u6587\u672C\u5BF9\u6BD4\u5DE5\u5177\uFF08Text Diff Tool\uFF09\u662F\u4E00\u79CD\u7528\u4E8E\u6BD4\u8F83\u4E24\u4E2A\u6587\u672C\u4E4B\u95F4\u5DEE\u5F02\u7684\u4E13\u4E1A\u5DE5\u5177\u3002 \u5B83\u80FD\u591F\u7CBE\u786E\u5730\u8BC6\u522B\u51FA\u6587\u672C\u4E4B\u95F4\u7684\u589E\u5220\u6539\u5185\u5BB9\uFF0C\u5E76\u901A\u8FC7\u9AD8\u4EAE\u663E\u793A\u8BA9\u5DEE\u5F02\u4E00\u76EE\u4E86\u7136\u3002 \u8FD9\u7C7B\u5DE5\u5177\u5728\u7248\u672C\u63A7\u5236\u3001\u6587\u6863\u5BA1\u9605\u3001\u4EE3\u7801\u5BA1\u67E5\u7B49\u573A\u666F\u4E2D\u6709\u7740\u5E7F\u6CDB\u7684\u5E94\u7528\u3002 </p><p class="text-muted-foreground mb-6" data-v-55ed773d> \u65E0\u8BBA\u60A8\u662F\u7A0B\u5E8F\u5458\u9700\u8981\u5BF9\u6BD4\u4EE3\u7801\u4FEE\u6539\uFF0C\u8FD8\u662F\u7F16\u8F91\u9700\u8981\u5BA1\u9605\u6587\u6863\u4FEE\u8BA2\uFF0C\u6291\u6216\u662F\u5B66\u751F\u9700\u8981\u5BF9\u6BD4\u8BBA\u6587\u7248\u672C\uFF0C \u6587\u672C\u5BF9\u6BD4\u5DE5\u5177\u90FD\u80FD\u5E2E\u52A9\u60A8\u5FEB\u901F\u51C6\u786E\u5730\u627E\u51FA\u6240\u6709\u5DEE\u5F02\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-55ed773d><span class="text-primary mr-2" data-v-55ed773d>#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6" data-v-55ed773d><li data-v-55ed773d>\u5728\u5DE6\u4FA7\u6587\u672C\u6846\u4E2D\u8F93\u5165\u6216\u7C98\u8D34\u539F\u59CB\u6587\u672C</li><li data-v-55ed773d>\u5728\u53F3\u4FA7\u6587\u672C\u6846\u4E2D\u8F93\u5165\u6216\u7C98\u8D34\u4FEE\u6539\u540E\u7684\u6587\u672C</li><li data-v-55ed773d>\u9009\u62E9\u5408\u9002\u7684\u5BF9\u6BD4\u6A21\u5F0F\uFF08\u884C\u7EA7\u3001\u5355\u8BCD\u7EA7\u6216\u5B57\u7B26\u7EA7\uFF09</li><li data-v-55ed773d>\u6839\u636E\u9700\u8981\u52FE\u9009&quot;\u5FFD\u7565\u7A7A\u683C&quot;\u6216&quot;\u5FFD\u7565\u5927\u5C0F\u5199&quot;\u9009\u9879</li><li data-v-55ed773d>\u67E5\u770B\u4E0B\u65B9\u7684\u5BF9\u6BD4\u7ED3\u679C\uFF0C\u5DEE\u5F02\u5C06\u4EE5\u4E0D\u540C\u989C\u8272\u9AD8\u4EAE\u663E\u793A</li><li data-v-55ed773d>\u4F7F\u7528&quot;\u590D\u5236\u5DEE\u5F02&quot;\u6216&quot;\u5BFC\u51FA\u5DEE\u5F02&quot;\u529F\u80FD\u4FDD\u5B58\u5BF9\u6BD4\u7ED3\u679C</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-55ed773d><span class="text-primary mr-2" data-v-55ed773d>#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6" data-v-55ed773d><li data-v-55ed773d><strong data-v-55ed773d>\u591A\u79CD\u5BF9\u6BD4\u6A21\u5F0F</strong>\uFF1A\u652F\u6301\u884C\u7EA7\u3001\u5355\u8BCD\u7EA7\u548C\u5B57\u7B26\u7EA7\u4E09\u79CD\u5BF9\u6BD4\u6A21\u5F0F\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u7CBE\u5EA6\u9700\u6C42</li><li data-v-55ed773d><strong data-v-55ed773d>\u5B9E\u65F6\u5BF9\u6BD4</strong>\uFF1A\u8F93\u5165\u6587\u672C\u65F6\u81EA\u52A8\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u65E0\u9700\u624B\u52A8\u70B9\u51FB\u6309\u94AE</li><li data-v-55ed773d><strong data-v-55ed773d>\u53EF\u89C6\u5316\u5DEE\u5F02</strong>\uFF1A\u4F7F\u7528\u4E0D\u540C\u989C\u8272\u6807\u8BC6\u6DFB\u52A0\u3001\u5220\u9664\u548C\u4FEE\u6539\u7684\u5185\u5BB9</li><li data-v-55ed773d><strong data-v-55ed773d>\u667A\u80FD\u9009\u9879</strong>\uFF1A\u652F\u6301\u5FFD\u7565\u7A7A\u683C\u548C\u5927\u5C0F\u5199\uFF0C\u8BA9\u5BF9\u6BD4\u66F4\u52A0\u7075\u6D3B</li><li data-v-55ed773d><strong data-v-55ed773d>\u672C\u5730\u5B89\u5168</strong>\uFF1A\u6240\u6709\u5904\u7406\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u670D\u52A1\u5668</li><li data-v-55ed773d><strong data-v-55ed773d>\u4FBF\u6377\u64CD\u4F5C</strong>\uFF1A\u63D0\u4F9B\u6E05\u7A7A\u3001\u7C98\u8D34\u3001\u4EA4\u6362\u6587\u672C\u7B49\u5FEB\u6377\u64CD\u4F5C</li><li data-v-55ed773d><strong data-v-55ed773d>\u5BFC\u51FA\u529F\u80FD</strong>\uFF1A\u652F\u6301\u590D\u5236\u5BF9\u6BD4\u7ED3\u679C\u6216\u5BFC\u51FA\u4E3A\u6587\u672C\u6587\u4EF6</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-55ed773d><span class="text-primary mr-2" data-v-55ed773d>#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4" data-v-55ed773d><div data-v-55ed773d><h3 class="text-lg font-semibold text-foreground" data-v-55ed773d>\u6587\u672C\u5BF9\u6BD4\u5DE5\u5177\u652F\u6301\u54EA\u4E9B\u6587\u4EF6\u683C\u5F0F\uFF1F</h3><p class="text-muted-foreground mt-1" data-v-55ed773d> \u6211\u4EEC\u7684\u6587\u672C\u5BF9\u6BD4\u5DE5\u5177\u652F\u6301\u6240\u6709\u7EAF\u6587\u672C\u683C\u5F0F\uFF0C\u5305\u62EC .txt\u3001.md\u3001.js\u3001.py\u3001.html\u3001.css\u3001.json\u3001.xml \u7B49\u6587\u4EF6\u7C7B\u578B\u3002 \u53EA\u8981\u662F\u53EF\u4EE5\u4EE5\u6587\u672C\u5F62\u5F0F\u6253\u5F00\u7684\u6587\u4EF6\uFF0C\u90FD\u53EF\u4EE5\u8FDB\u884C\u5BF9\u6BD4\u3002\u5BF9\u4E8E\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF08\u5982\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF09\uFF0C\u672C\u5DE5\u5177\u4E0D\u652F\u6301\u3002 </p></div><div data-v-55ed773d><h3 class="text-lg font-semibold text-foreground" data-v-55ed773d>\u884C\u7EA7\u3001\u5355\u8BCD\u7EA7\u548C\u5B57\u7B26\u7EA7\u5BF9\u6BD4\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h3><p class="text-muted-foreground mt-1" data-v-55ed773d> \u884C\u7EA7\u5BF9\u6BD4\u4EE5\u884C\u4E3A\u5355\u4F4D\u8FDB\u884C\u6BD4\u8F83\uFF0C\u9002\u5408\u4EE3\u7801\u548C\u6587\u6863\u7684\u5927\u7ED3\u6784\u5DEE\u5F02\u67E5\u770B\uFF1B \u5355\u8BCD\u7EA7\u5BF9\u6BD4\u4EE5\u5355\u8BCD\u4E3A\u5355\u4F4D\u8FDB\u884C\u6BD4\u8F83\uFF0C\u80FD\u591F\u66F4\u7CBE\u7EC6\u5730\u8BC6\u522B\u4FEE\u6539\u5185\u5BB9\uFF1B \u5B57\u7B26\u7EA7\u5BF9\u6BD4\u6700\u4E3A\u7CBE\u7EC6\uFF0C\u53EF\u4EE5\u8BC6\u522B\u5230\u6BCF\u4E2A\u5B57\u7B26\u7684\u53D8\u5316\uFF0C\u9002\u5408\u5BF9\u7CBE\u5EA6\u8981\u6C42\u6781\u9AD8\u7684\u573A\u666F\u3002 </p></div><div data-v-55ed773d><h3 class="text-lg font-semibold text-foreground" data-v-55ed773d>\u5BF9\u6BD4\u7ED3\u679C\u4E2D\u7684\u989C\u8272\u4EE3\u8868\u4EC0\u4E48\uFF1F</h3><p class="text-muted-foreground mt-1" data-v-55ed773d> \u7EFF\u8272\uFF08\u901A\u5E38\u5E26\u6709+\u53F7\uFF09\u8868\u793A\u65B0\u589E\u7684\u5185\u5BB9\uFF0C\u7EA2\u8272\uFF08\u901A\u5E38\u5E26\u6709-\u53F7\uFF09\u8868\u793A\u5220\u9664\u7684\u5185\u5BB9\uFF0C \u6CA1\u6709\u7279\u6B8A\u6807\u8BB0\u7684\u666E\u901A\u6587\u672C\u8868\u793A\u672A\u53D1\u751F\u53D8\u5316\u7684\u5185\u5BB9\u3002\u8FD9\u79CD\u989C\u8272\u7F16\u7801\u8BA9\u5DEE\u5F02\u4E00\u76EE\u4E86\u7136\u3002 </p></div><div data-v-55ed773d><h3 class="text-lg font-semibold text-foreground" data-v-55ed773d>\u6211\u7684\u6570\u636E\u5B89\u5168\u5417\uFF1F</h3><p class="text-muted-foreground mt-1" data-v-55ed773d> \u7EDD\u5BF9\u5B89\u5168\u3002\u6211\u4EEC\u7684\u6587\u672C\u5BF9\u6BD4\u5DE5\u5177\u91C7\u7528\u7EAF\u524D\u7AEF\u6280\u672F\u5B9E\u73B0\uFF0C\u6240\u6709\u6587\u672C\u5BF9\u6BD4\u5904\u7406\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C \u4E0D\u4F1A\u4E0A\u4F20\u5230\u4EFB\u4F55\u670D\u52A1\u5668\u3002\u60A8\u5904\u7406\u7684\u6587\u672C\u6C38\u8FDC\u4E0D\u4F1A\u79BB\u5F00\u60A8\u7684\u8BBE\u5907\uFF0C\u786E\u4FDD\u4E86\u6570\u636E\u7684\u7EDD\u5BF9\u5B89\u5168\u548C\u9690\u79C1\u3002 </p></div><div data-v-55ed773d><h3 class="text-lg font-semibold text-foreground" data-v-55ed773d>\u5982\u4F55\u5BF9\u6BD4\u5927\u6587\u4EF6\uFF1F</h3><p class="text-muted-foreground mt-1" data-v-55ed773d> \u5BF9\u4E8E\u975E\u5E38\u5927\u7684\u6587\u4EF6\uFF0C\u5EFA\u8BAE\u5148\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u5206\u5272\u6210\u8F83\u5C0F\u7684\u90E8\u5206\u518D\u8FDB\u884C\u5BF9\u6BD4\u3002 \u867D\u7136\u6211\u4EEC\u7684\u5DE5\u5177\u80FD\u591F\u5904\u7406\u76F8\u5F53\u5927\u7684\u6587\u672C\uFF0C\u4F46\u6D4F\u89C8\u5668\u5185\u5B58\u6709\u9650\uFF0C\u8FC7\u5927\u7684\u6587\u672C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6027\u80FD\u95EE\u9898\u3002 \u4E00\u822C\u6765\u8BF4\uFF0C\u51E0MB\u4EE5\u5185\u7684\u6587\u672C\u6587\u4EF6\u90FD\u80FD\u6D41\u7545\u5904\u7406\u3002 </p></div></div></div></div><section class="mb-12" data-v-55ed773d><h2 class="text-2xl font-bold text-foreground mb-4" data-v-55ed773d>\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-v-55ed773d><!--[-->`);
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

export { textDiff as default };
//# sourceMappingURL=text-diff-BGnzugSA.mjs.map
