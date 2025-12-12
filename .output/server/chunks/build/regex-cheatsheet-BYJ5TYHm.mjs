import { ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { Info } from 'lucide-vue-next';
import { f as useSeoMeta } from './server.mjs';
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
  __name: "regex-cheatsheet",
  __ssrInlineRender: true,
  setup(__props) {
    const testPattern = ref("");
    const testFlags = ref("");
    const testText = ref("\u6D4B\u8BD5\u6587\u672C\uFF1A\n\u7535\u8BDD\u53F7\u7801\uFF1A138-1234-5678\n\u90AE\u7BB1\uFF1Auser@example.com\nIP\u5730\u5740\uFF1A192.168.1.1\n\u65E5\u671F\uFF1A2024-01-15");
    const matches = ref([]);
    const basicSyntax = [
      { pattern: ".", description: "\u5339\u914D\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26\uFF08\u9664\u6362\u884C\u7B26\uFF09", example: "a.c \u5339\u914D abc" },
      { pattern: "^", description: "\u5339\u914D\u5B57\u7B26\u4E32\u5F00\u5934", example: "^Hello \u5339\u914D Hello World" },
      { pattern: "$", description: "\u5339\u914D\u5B57\u7B26\u4E32\u7ED3\u5C3E", example: "world$ \u5339\u914D Hello world" },
      { pattern: "|", description: "\u6216\u8FD0\u7B97\u7B26", example: "cat|dog \u5339\u914D cat \u6216 dog" },
      { pattern: "\\", description: "\u8F6C\u4E49\u7279\u6B8A\u5B57\u7B26", example: "\\. \u5339\u914D\u70B9\u53F7" }
    ];
    const characterClasses = [
      { pattern: "[abc]", description: "\u5339\u914D\u65B9\u62EC\u53F7\u5185\u4EFB\u610F\u5B57\u7B26", example: "[abc] \u5339\u914D a \u6216 b \u6216 c" },
      { pattern: "[^abc]", description: "\u5339\u914D\u9664\u65B9\u62EC\u53F7\u5185\u5B57\u7B26\u5916\u7684\u4EFB\u610F\u5B57\u7B26", example: "[^abc] \u4E0D\u5339\u914D a\u3001b\u3001c" },
      { pattern: "[a-z]", description: "\u5339\u914D\u5C0F\u5199\u5B57\u6BCD a \u5230 z", example: "[a-z] \u5339\u914D\u4EFB\u610F\u5C0F\u5199\u5B57\u6BCD" },
      { pattern: "[A-Z]", description: "\u5339\u914D\u5927\u5199\u5B57\u6BCD A \u5230 Z", example: "[A-Z] \u5339\u914D\u4EFB\u610F\u5927\u5199\u5B57\u6BCD" },
      { pattern: "[0-9]", description: "\u5339\u914D\u6570\u5B57 0 \u5230 9", example: "[0-9] \u5339\u914D\u4EFB\u610F\u6570\u5B57" },
      { pattern: "\\d", description: "\u5339\u914D\u4EFB\u610F\u6570\u5B57\uFF08\u7B49\u540C [0-9]\uFF09", example: "\\d \u5339\u914D 123" },
      { pattern: "\\D", description: "\u5339\u914D\u975E\u6570\u5B57\u5B57\u7B26", example: "\\D \u5339\u914D abc" },
      { pattern: "\\w", description: "\u5339\u914D\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF", example: "\\w \u5339\u914D a_b1" },
      { pattern: "\\W", description: "\u5339\u914D\u975E\u5355\u8BCD\u5B57\u7B26", example: "\\W \u5339\u914D @#$" },
      { pattern: "\\s", description: "\u5339\u914D\u7A7A\u767D\u5B57\u7B26\uFF08\u7A7A\u683C\u3001\u5236\u8868\u7B26\u7B49\uFF09", example: "\\s \u5339\u914D\u7A7A\u683C\u548C\u5236\u8868\u7B26" },
      { pattern: "\\S", description: "\u5339\u914D\u975E\u7A7A\u767D\u5B57\u7B26", example: "\\S \u5339\u914D\u975E\u7A7A\u683C\u5B57\u7B26" }
    ];
    const quantifiers = [
      { pattern: "*", description: "\u5339\u914D 0 \u6B21\u6216\u591A\u6B21", example: "a* \u5339\u914D aaa\u3001\u7A7A\u5B57\u7B26\u4E32" },
      { pattern: "+", description: "\u5339\u914D 1 \u6B21\u6216\u591A\u6B21", example: "a+ \u5339\u914D a\u3001aaa" },
      { pattern: "?", description: "\u5339\u914D 0 \u6B21\u6216 1 \u6B21", example: "a? \u5339\u914D a \u6216\u7A7A" },
      { pattern: "{n}", description: "\u5339\u914D\u6070\u597D n \u6B21", example: "a{3} \u5339\u914D aaa" },
      { pattern: "{n,}", description: "\u5339\u914D\u81F3\u5C11 n \u6B21", example: "a{2,} \u5339\u914D aa\u3001aaa" },
      { pattern: "{n,m}", description: "\u5339\u914D n \u5230 m \u6B21", example: "a{2,4} \u5339\u914D aa\u3001aaa\u3001aaaa" }
    ];
    const groups = [
      { pattern: "()", description: "\u6355\u83B7\u7EC4", example: "(ab)+ \u5339\u914D ababab" },
      { pattern: "(?:)", description: "\u975E\u6355\u83B7\u7EC4", example: "(?:ab)+ \u5339\u914D ababab" },
      { pattern: "(?=)", description: "\u6B63\u5411\u5148\u884C\u65AD\u8A00", example: "a(?=b) \u5339\u914D a \u540E\u9762\u662F b \u7684 a" },
      { pattern: "(?!)", description: "\u8D1F\u5411\u5148\u884C\u65AD\u8A00", example: "a(?!b) \u5339\u914D a \u540E\u9762\u4E0D\u662F b \u7684 a" },
      { pattern: "(?<=)", description: "\u6B63\u5411\u540E\u884C\u65AD\u8A00", example: "(?<=a)b \u5339\u914D a \u540E\u9762\u7684 b" },
      { pattern: "(?<!)", description: "\u8D1F\u5411\u540E\u884C\u65AD\u8A00", example: "(?<!a)b \u5339\u914D\u4E0D\u5728 a \u540E\u9762\u7684 b" },
      { pattern: "\\1", description: "\u5F15\u7528\u7B2C\u4E00\u4E2A\u6355\u83B7\u7EC4", example: "(a)\\1 \u5339\u914D aa" },
      { pattern: "\\2", description: "\u5F15\u7528\u7B2C\u4E8C\u4E2A\u6355\u83B7\u7EC4", example: "(a)(b)\\2\\1 \u5339\u914D abba" }
    ];
    const assertions = [
      { pattern: "^", description: "\u5B57\u7B26\u4E32\u5F00\u59CB", example: "^Start" },
      { pattern: "$", description: "\u5B57\u7B26\u4E32\u7ED3\u675F", example: "End$" },
      { pattern: "\\b", description: "\u5355\u8BCD\u8FB9\u754C", example: "\\bword\\b \u5339\u914D\u5B8C\u6574\u5355\u8BCD" },
      { pattern: "\\B", description: "\u975E\u5355\u8BCD\u8FB9\u754C", example: "\\Bword\\B \u4E0D\u5339\u914D\u72EC\u7ACB\u5355\u8BCD" }
    ];
    const commonPatterns = [
      { pattern: "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b", description: "\u90AE\u7BB1\u5730\u5740", example: "user@example.com" },
      { pattern: "\\b(?:https?://)?(?:www\\.)?[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}(?:/[^\\s]*)?\\b", description: "URL", example: "https://www.example.com/path" },
      { pattern: "\\b1[3-9]\\d{9}\\b", description: "\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\uFF09", example: "13812345678" },
      { pattern: "\\b\\d{4}-\\d{2}-\\d{2}\\b", description: "\u65E5\u671F\uFF08YYYY-MM-DD\uFF09", example: "2024-01-15" },
      { pattern: "\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b", description: "IP \u5730\u5740", example: "192.168.1.1" },
      { pattern: "\\b\\d{3}-\\d{4}-\\d{4}\\b", description: "\u7535\u8BDD\u53F7\u7801\uFF08\u5E26\u5206\u9694\u7B26\uFF09", example: "138-1234-5678" },
      { pattern: "\\b[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}\\b", description: "UUID", example: "550e8400-e29b-41d4-a716-446655440000" },
      { pattern: "\\b(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}\\b", description: "\u5F3A\u5BC6\u7801\uFF08\u81F3\u5C118\u4F4D\uFF0C\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD\u548C\u6570\u5B57\uFF09", example: "Password123" },
      { pattern: "<([a-zA-Z][a-zA-Z0-9]*)(?:\\s[^>]*)?>.*?</\\1>", description: "HTML \u6807\u7B7E", example: '<div class="test">\u5185\u5BB9</div>' }
    ];
    const performMatch = () => {
      if (!testPattern.value || !testText.value) {
        matches.value = [];
        return;
      }
      try {
        const flags = testFlags.value;
        const regex = new RegExp(testPattern.value, flags);
        const found = testText.value.match(regex);
        matches.value = found || [];
      } catch (error) {
        matches.value = [];
      }
    };
    watch([testPattern, testFlags, testText], () => {
      performMatch();
    });
    performMatch();
    useSeoMeta({
      title: "\u6B63\u5219\u8868\u8FBE\u5F0F\u901F\u67E5\u8868 - \u6B63\u5219\u8868\u8FBE\u5F0F\u8BED\u6CD5\u53C2\u8003\u548C\u6D4B\u8BD5\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF\u6B63\u5219\u8868\u8FBE\u5F0F\u901F\u67E5\u8868\uFF0C\u5305\u542B\u5E38\u7528\u6B63\u5219\u6A21\u5F0F\u3001\u8BED\u6CD5\u53C2\u8003\u548C\u5B9E\u65F6\u6D4B\u8BD5\u529F\u80FD\u3002",
      keywords: ["\u6B63\u5219\u8868\u8FBE\u5F0F", "regex", "\u901F\u67E5\u8868", "\u6A21\u5F0F\u5339\u914D", "\u6587\u672C\u5904\u7406", "\u8BED\u6CD5\u53C2\u8003", "\u5728\u7EBF\u6D4B\u8BD5"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u6B63\u5219\u8868\u8FBE\u5F0F\u901F\u67E5\u8868</h1><p class="text-muted-foreground">\u5E38\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u6A21\u5F0F\u548C\u8BED\u6CD5\u53C2\u8003\uFF0C\u652F\u6301\u5B9E\u65F6\u6D4B\u8BD5</p></div><div class="bg-card rounded-lg p-6 mb-6"><h2 class="text-lg font-semibold mb-4">\u5B9E\u65F6\u6D4B\u8BD5</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u6B63\u5219\u8868\u8FBE\u5F0F</label><div class="mt-2 flex gap-2"><input${ssrRenderAttr("value", testPattern.value)} type="text" placeholder="\u8F93\u5165\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5982\uFF1A\\d{3}-\\d{4}-\\d{4}" class="flex-1 px-3 py-2 border rounded-md text-sm font-mono"><select class="px-3 py-2 border rounded-md text-sm"><option value=""${ssrIncludeBooleanAttr(Array.isArray(testFlags.value) ? ssrLooseContain(testFlags.value, "") : ssrLooseEqual(testFlags.value, "")) ? " selected" : ""}>\u65E0\u6807\u5FD7</option><option value="g"${ssrIncludeBooleanAttr(Array.isArray(testFlags.value) ? ssrLooseContain(testFlags.value, "g") : ssrLooseEqual(testFlags.value, "g")) ? " selected" : ""}>\u5168\u5C40 (g)</option><option value="i"${ssrIncludeBooleanAttr(Array.isArray(testFlags.value) ? ssrLooseContain(testFlags.value, "i") : ssrLooseEqual(testFlags.value, "i")) ? " selected" : ""}>\u5FFD\u7565\u5927\u5C0F\u5199 (i)</option><option value="m"${ssrIncludeBooleanAttr(Array.isArray(testFlags.value) ? ssrLooseContain(testFlags.value, "m") : ssrLooseEqual(testFlags.value, "m")) ? " selected" : ""}>\u591A\u884C (m)</option><option value="gi"${ssrIncludeBooleanAttr(Array.isArray(testFlags.value) ? ssrLooseContain(testFlags.value, "gi") : ssrLooseEqual(testFlags.value, "gi")) ? " selected" : ""}>\u5168\u5C40 + \u5FFD\u7565\u5927\u5C0F\u5199</option></select></div></div><div><label class="text-sm font-medium">\u6D4B\u8BD5\u6587\u672C</label><textarea placeholder="\u8F93\u5165\u8981\u6D4B\u8BD5\u7684\u6587\u672C..." class="mt-2 w-full px-3 py-2 border rounded-md text-sm h-32 resize-none">${ssrInterpolate(testText.value)}</textarea></div><div><label class="text-sm font-medium">\u5339\u914D\u7ED3\u679C</label><div class="mt-2 p-4 bg-muted/30 rounded-lg min-h-[100px]">`);
      if (matches.value.length > 0) {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(matches.value, (match, index) => {
          _push(`<div class="p-2 bg-background border rounded"><span class="font-mono text-sm">${ssrInterpolate(match)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-8"> \u65E0\u5339\u914D\u7ED3\u679C </div>`);
      }
      _push(`</div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u57FA\u672C\u8BED\u6CD5</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(basicSyntax, (item) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-1"><code class="font-mono text-sm">${ssrInterpolate(item.pattern)}</code><button class="text-xs text-primary hover:text-primary/80"> \u4F7F\u7528 </button></div><p class="text-xs text-muted-foreground">${ssrInterpolate(item.description)}</p><div class="mt-1"><span class="text-xs text-muted-foreground">\u793A\u4F8B\uFF1A</span><code class="text-xs">${ssrInterpolate(item.example)}</code></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5B57\u7B26\u7C7B</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(characterClasses, (item) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-1"><code class="font-mono text-sm">${ssrInterpolate(item.pattern)}</code><button class="text-xs text-primary hover:text-primary/80"> \u4F7F\u7528 </button></div><p class="text-xs text-muted-foreground">${ssrInterpolate(item.description)}</p><div class="mt-1"><span class="text-xs text-muted-foreground">\u793A\u4F8B\uFF1A</span><code class="text-xs">${ssrInterpolate(item.example)}</code></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u91CF\u8BCD</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(quantifiers, (item) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-1"><code class="font-mono text-sm">${ssrInterpolate(item.pattern)}</code><button class="text-xs text-primary hover:text-primary/80"> \u4F7F\u7528 </button></div><p class="text-xs text-muted-foreground">${ssrInterpolate(item.description)}</p><div class="mt-1"><span class="text-xs text-muted-foreground">\u793A\u4F8B\uFF1A</span><code class="text-xs">${ssrInterpolate(item.example)}</code></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5206\u7EC4\u548C\u5F15\u7528</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(groups, (item) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-1"><code class="font-mono text-sm">${ssrInterpolate(item.pattern)}</code><button class="text-xs text-primary hover:text-primary/80"> \u4F7F\u7528 </button></div><p class="text-xs text-muted-foreground">${ssrInterpolate(item.description)}</p><div class="mt-1"><span class="text-xs text-muted-foreground">\u793A\u4F8B\uFF1A</span><code class="text-xs">${ssrInterpolate(item.example)}</code></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u65AD\u8A00</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(assertions, (item) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-1"><code class="font-mono text-sm">${ssrInterpolate(item.pattern)}</code><button class="text-xs text-primary hover:text-primary/80"> \u4F7F\u7528 </button></div><p class="text-xs text-muted-foreground">${ssrInterpolate(item.description)}</p><div class="mt-1"><span class="text-xs text-muted-foreground">\u793A\u4F8B\uFF1A</span><code class="text-xs">${ssrInterpolate(item.example)}</code></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5E38\u7528\u6A21\u5F0F</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(commonPatterns, (item) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-1"><code class="font-mono text-sm">${ssrInterpolate(item.pattern)}</code><button class="text-xs text-primary hover:text-primary/80"> \u4F7F\u7528 </button></div><p class="text-xs text-muted-foreground">${ssrInterpolate(item.description)}</p><div class="mt-1"><span class="text-xs text-muted-foreground">\u793A\u4F8B\uFF1A</span><code class="text-xs">${ssrInterpolate(item.example)}</code></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u6280\u5DE7 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-foreground mb-2">\u6027\u80FD\u4F18\u5316</h4><ul class="space-y-1 text-sm text-muted-foreground"><li>\u2022 \u4F7F\u7528\u5177\u4F53\u5B57\u7B26\u7C7B\u4EE3\u66FF .*\uFF08\u5982\u7528 \\d \u4EE3\u66FF .\uFF09</li><li>\u2022 \u907F\u514D\u8FC7\u5EA6\u4F7F\u7528\u56DE\u6EAF\uFF08\u5982\u907F\u514D\u5D4C\u5957\u91CF\u8BCD\uFF09</li><li>\u2022 \u4F7F\u7528\u975E\u6355\u83B7\u7EC4 (?:) \u63D0\u9AD8\u6027\u80FD</li><li>\u2022 \u951A\u5B9A\u6A21\u5F0F\u5F00\u5934\u548C\u7ED3\u5C3E</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u8C03\u8BD5\u6280\u5DE7</h4><ul class="space-y-1 text-sm text-muted-foreground"><li>\u2022 \u4ECE\u7B80\u5355\u6A21\u5F0F\u5F00\u59CB\u9010\u6B65\u6784\u5EFA</li><li>\u2022 \u4F7F\u7528\u5728\u7EBF\u6B63\u5219\u6D4B\u8BD5\u5DE5\u5177</li><li>\u2022 \u5206\u7EC4\u6D4B\u8BD5\u590D\u6742\u6A21\u5F0F</li><li>\u2022 \u6CE8\u610F\u8F6C\u4E49\u5B57\u7B26\u7684\u4F7F\u7528</li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/regex-cheatsheet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=regex-cheatsheet-BYJ5TYHm.mjs.map
