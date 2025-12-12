import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';
import { HelpCircle, ChevronUp, GitBranch, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Wifi, Type, Clock, Shield, Lock, FileText } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { f as useSeoMeta, u as useHead, e as addRecentTool } from './server.mjs';
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

const _sfc_main = {
  __name: "json-to-yaml",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "JSON\u8F6CYAML - \u5728\u7EBFJSON\u8F6CYAML\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF JSON to YAML \u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 JSON \u6570\u636E\u5FEB\u901F\u8F6C\u6362\u4E3A YAML \u683C\u5F0F\uFF0C\u4FDD\u7559\u6570\u636E\u7ED3\u6784\uFF0C\u652F\u6301\u5D4C\u5957\u5BF9\u8C61\u548C\u6570\u7EC4\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u5B89\u5168\u3002",
      keywords: "JSON\u8F6CYAML, JSON to YAML, JSON YAML\u8F6C\u6362, \u6570\u636E\u683C\u5F0F\u8F6C\u6362, \u914D\u7F6E\u6587\u4EF6\u8F6C\u6362, \u5728\u7EBF\u5DE5\u5177",
      author: "Util\u5DE5\u5177\u7BB1",
      ogTitle: "JSON\u8F6CYAML - \u5728\u7EBFJSON\u8F6CYAML\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177",
      ogDescription: "\u514D\u8D39\u5728\u7EBF JSON to YAML \u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 JSON \u6570\u636E\u5FEB\u901F\u8F6C\u6362\u4E3A YAML \u683C\u5F0F\uFF0C\u4FDD\u7559\u6570\u636E\u7ED3\u6784\u3002",
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
            name: "JSON\u8F6CYAML\u5DE5\u5177",
            description: "\u514D\u8D39\u5728\u7EBF JSON to YAML \u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 JSON \u6570\u636E\u5FEB\u901F\u8F6C\u6362\u4E3A YAML \u683C\u5F0F",
            url: "https://util.example.com/tools/json-to-yaml",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            featureList: [
              "JSON\u8F6CYAML",
              "\u4FDD\u7559\u6570\u636E\u7ED3\u6784",
              "\u667A\u80FD\u683C\u5F0F\u5316",
              "\u53EF\u914D\u7F6E\u7F29\u8FDB",
              "\u672C\u5730\u5904\u7406"
            ]
          })
        }
      ]
    });
    useRouter();
    const tool = tools.find((t) => t.id === "json-to-yaml");
    categories.find((c) => c.id === "format");
    const inputJSON = ref("");
    const outputYAML = ref("");
    const inputError = ref("");
    const indentSize = ref("2");
    const lineWidth = ref(120);
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
        (t) => t.category === "format" && t.id !== "json-to-yaml"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "yaml-converter"),
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "yaml-formatter"),
        tools.find((t) => t.id === "json-to-xml")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">JSON\u8F6CYAML - \u5728\u7EBFJSON\u8F6CYAML\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF JSON to YAML Converter\u3002\u652F\u6301\u5C06 JSON \u6570\u636E\u5FEB\u901F\u8F6C\u6362\u4E3A YAML \u683C\u5F0F\uFF0C\u4FDD\u7559\u6570\u636E\u7ED3\u6784\uFF0C\u5B8C\u7F8E\u652F\u6301\u5D4C\u5957\u5BF9\u8C61\u548C\u6570\u7EC4\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u7EDD\u5BF9\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F93\u5165JSON</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u7C98\u8D34 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u793A\u4F8B\u6570\u636E </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u7F29\u8FDB:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="2"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "2") : ssrLooseEqual(indentSize.value, "2")) ? " selected" : ""}>2\u7A7A\u683C</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "4") : ssrLooseEqual(indentSize.value, "4")) ? " selected" : ""}>4\u7A7A\u683C</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u884C\u5BBD\u9650\u5236:</label><input type="number"${ssrRenderAttr("value", lineWidth.value)} min="40" max="200" step="10" class="text-xs bg-muted border border-border rounded px-2 py-1 w-16"></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="\u5728\u6B64\u8F93\u5165JSON\u6570\u636E...">${ssrInterpolate(inputJSON.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">YAML\u8F93\u51FA</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u590D\u5236 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u4E0B\u8F7DYAML </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u5168\u5C4F\u6A21\u5F0F </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputYAML.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> \u8F6C\u6362\u4E3A YAML </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F JSON \u8F6C YAML\uFF1F </h2><p class="text-muted-foreground mb-4"> JSON\uFF08JavaScript Object Notation\uFF09\u548C YAML\uFF08YAML Ain&#39;t Markup Language\uFF09\u90FD\u662F\u5E38\u7528\u7684\u6570\u636E\u5E8F\u5217\u5316\u683C\u5F0F\u3002 JSON \u8F6C YAML \u662F\u5C06 JSON \u6570\u636E\u8F6C\u6362\u4E3A\u66F4\u6613\u8BFB\u7684 YAML \u683C\u5F0F\u7684\u8FC7\u7A0B\u3002YAML \u4F7F\u7528\u7F29\u8FDB\u548C\u7B80\u6D01\u7684\u8BED\u6CD5\uFF0C \u4F7F\u914D\u7F6E\u6587\u4EF6\u548C\u4EBA\u7C7B\u53EF\u8BFB\u7684\u6570\u636E\u66F4\u52A0\u53CB\u597D\u3002 </p><p class="text-muted-foreground"> YAML \u662F JSON \u7684\u8D85\u96C6\uFF0C\u652F\u6301\u66F4\u591A\u7684\u6570\u636E\u7C7B\u578B\u548C\u7279\u6027\uFF0C\u5982\u6CE8\u91CA\u3001\u591A\u884C\u5B57\u7B26\u4E32\u3001\u951A\u70B9\u7B49\u3002 \u5728 DevOps\u3001\u5BB9\u5668\u5316\u5E94\u7528\uFF08Kubernetes\u3001Docker Compose\uFF09\u4E2D\uFF0CYAML \u662F\u6807\u51C6\u7684\u914D\u7F6E\u683C\u5F0F\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5C06\u60A8\u7684 JSON \u6570\u636E\u7C98\u8D34\u5230\u5DE6\u4FA7\u8F93\u5165\u6846</li><li>\u9009\u62E9\u7F29\u8FDB\u5927\u5C0F\uFF082\u7A7A\u683C\u62164\u7A7A\u683C\uFF09</li><li>\u8BBE\u7F6E\u884C\u5BBD\u9650\u5236\uFF08\u53EF\u9009\uFF09</li><li>\u70B9\u51FB&quot;\u8F6C\u6362\u4E3A YAML&quot;\u6309\u94AE\u6216\u4F7F\u7528\u5FEB\u6377\u952E Ctrl+Enter</li><li>\u67E5\u770B\u53F3\u4FA7\u8F6C\u6362\u540E\u7684 YAML \u7ED3\u679C</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u8F6C\u6362\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u4FDD\u7559\u7ED3\u6784</strong>: \u5B8C\u6574\u4FDD\u7559 JSON \u7684\u6570\u636E\u7ED3\u6784\u548C\u5C42\u6B21\u5173\u7CFB</li><li><strong>\u667A\u80FD\u683C\u5F0F\u5316</strong>: \u6839\u636E\u6570\u636E\u7C7B\u578B\u9009\u62E9\u6700\u4F73\u7684 YAML \u8868\u793A\u65B9\u5F0F</li><li><strong>\u6570\u7EC4\u5904\u7406</strong>: \u667A\u80FD\u5904\u7406\u6570\u7EC4\uFF0C\u751F\u6210\u6E05\u6670\u7684 YAML \u5217\u8868\u683C\u5F0F</li><li><strong>\u5B57\u7B26\u4E32\u4F18\u5316</strong>: \u81EA\u52A8\u9009\u62E9\u662F\u5426\u9700\u8981\u5F15\u53F7\uFF0C\u63D0\u9AD8\u53EF\u8BFB\u6027</li><li><strong>\u591A\u884C\u652F\u6301</strong>: \u957F\u5B57\u7B26\u4E32\u81EA\u52A8\u8F6C\u6362\u4E3A\u591A\u884C YAML \u683C\u5F0F</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> JSON vs YAML \u5BF9\u6BD4 </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"><div class="p-4 bg-muted/50 rounded-lg"><h4 class="font-semibold text-foreground mb-2">JSON \u7279\u70B9</h4><ul class="text-sm text-muted-foreground space-y-1"><li>\u2022 \u4F7F\u7528\u82B1\u62EC\u53F7\u548C\u65B9\u62EC\u53F7</li><li>\u2022 \u5FC5\u987B\u4F7F\u7528\u53CC\u5F15\u53F7\u8868\u793A\u5B57\u7B26\u4E32</li><li>\u2022 \u4E0D\u652F\u6301\u6CE8\u91CA</li><li>\u2022 \u4E25\u683C\u7684\u8BED\u6CD5\u89C4\u8303</li><li>\u2022 \u9002\u5408\u673A\u5668\u89E3\u6790\u548C\u7F51\u7EDC\u4F20\u8F93</li></ul></div><div class="p-4 bg-muted/50 rounded-lg"><h4 class="font-semibold text-foreground mb-2">YAML \u7279\u70B9</h4><ul class="text-sm text-muted-foreground space-y-1"><li>\u2022 \u4F7F\u7528\u7F29\u8FDB\u8868\u793A\u5C42\u7EA7</li><li>\u2022 \u5B57\u7B26\u4E32\u901A\u5E38\u4E0D\u9700\u8981\u5F15\u53F7</li><li>\u2022 \u652F\u6301 # \u6CE8\u91CA</li><li>\u2022 \u66F4\u7075\u6D3B\u7684\u8BED\u6CD5</li><li>\u2022 \u9002\u5408\u914D\u7F6E\u6587\u4EF6\u548C\u4EBA\u7C7B\u9605\u8BFB</li></ul></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u8F6C\u6362\u540E\u7684 YAML \u4F1A\u4E22\u5931\u6570\u636E\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u4E0D\u4F1A\u3002YAML \u662F JSON \u7684\u8D85\u96C6\uFF0C\u53EF\u4EE5\u8868\u793A\u6240\u6709 JSON \u7684\u6570\u636E\u7ED3\u6784\u3002\u8F6C\u6362\u662F\u53CC\u5411\u65E0\u635F\u7684\uFF0C \u60A8\u4E5F\u53EF\u4EE5\u5C06 YAML \u8F6C\u6362\u56DE\u539F\u59CB\u7684 JSON \u683C\u5F0F\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u4F7F\u7528 YAML \u800C\u4E0D\u662F JSON\uFF1F</h3><p class="text-muted-foreground mt-1"> YAML \u66F4\u9002\u5408\u914D\u7F6E\u6587\u4EF6\uFF0C\u56E0\u4E3A\u5B83\u652F\u6301\u6CE8\u91CA\u3001\u66F4\u6613\u8BFB\u3001\u66F4\u7B80\u6D01\u3002\u5728 DevOps \u5DE5\u5177\u94FE\u4E2D \uFF08\u5982 Kubernetes\u3001Docker Compose\u3001Ansible\uFF09\uFF0CYAML \u662F\u6807\u51C6\u683C\u5F0F\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">YAML \u7684\u7F29\u8FDB\u6709\u4EC0\u4E48\u8981\u6C42\uFF1F</h3><p class="text-muted-foreground mt-1"> YAML \u4F7F\u7528\u7A7A\u683C\u8FDB\u884C\u7F29\u8FDB\uFF0C\u4E0D\u80FD\u4F7F\u7528 Tab\u3002\u540C\u4E00\u7EA7\u522B\u7684\u5143\u7D20\u5FC5\u987B\u6709\u76F8\u540C\u7684\u7F29\u8FDB\u91CF\u3002 \u5EFA\u8BAE\u4F7F\u7528 2 \u4E2A\u7A7A\u683C\u4F5C\u4E3A\u6807\u51C6\u7F29\u8FDB\uFF0C\u8FD9\u4E5F\u662F\u672C\u5DE5\u5177\u7684\u9ED8\u8BA4\u8BBE\u7F6E\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/json-to-yaml.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=json-to-yaml-D56EEWzL.mjs.map
