import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
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
  __name: "json-to-csv",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "JSON\u8F6CCSV - \u5728\u7EBFJSON\u8F6CCSV\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF JSON to CSV \u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 JSON \u6570\u7EC4\u6216\u5BF9\u8C61\u8F6C\u6362\u4E3A CSV \u683C\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF0C\u652F\u6301\u5D4C\u5957\u6570\u636E\u5904\u7406\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u5B89\u5168\u3002",
      keywords: "JSON\u8F6CCSV, JSON to CSV, JSON CSV\u8F6C\u6362, \u6570\u636E\u683C\u5F0F\u8F6C\u6362, \u8868\u683C\u6570\u636E, \u5728\u7EBF\u5DE5\u5177",
      author: "Util\u5DE5\u5177\u7BB1",
      ogTitle: "JSON\u8F6CCSV - \u5728\u7EBFJSON\u8F6CCSV\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177",
      ogDescription: "\u514D\u8D39\u5728\u7EBF JSON to CSV \u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 JSON \u6570\u7EC4\u6216\u5BF9\u8C61\u8F6C\u6362\u4E3A CSV \u683C\u5F0F\u3002",
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
            name: "JSON\u8F6CCSV\u5DE5\u5177",
            description: "\u514D\u8D39\u5728\u7EBF JSON to CSV \u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 JSON \u6570\u7EC4\u6216\u5BF9\u8C61\u8F6C\u6362\u4E3A CSV \u683C\u5F0F",
            url: "https://util.example.com/tools/json-to-csv",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            featureList: [
              "JSON\u8F6CCSV",
              "\u81EA\u5B9A\u4E49\u5206\u9694\u7B26",
              "\u5D4C\u5957\u6570\u636E\u5904\u7406",
              "\u5305\u542B\u8868\u5934\u9009\u9879",
              "\u672C\u5730\u5904\u7406"
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">JSON\u8F6CCSV - \u5728\u7EBFJSON\u8F6CCSV\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF JSON to CSV Converter\u3002\u652F\u6301\u5C06 JSON \u6570\u7EC4\u6216\u5BF9\u8C61\u8F6C\u6362\u4E3A CSV \u683C\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF0C\u652F\u6301\u5D4C\u5957\u6570\u636E\u5904\u7406\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u7EDD\u5BF9\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F93\u5165JSON</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u7C98\u8D34 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u793A\u4F8B\u6570\u636E </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u5206\u9694\u7B26:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value=","${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, ",") : ssrLooseEqual(delimiter.value, ",")) ? " selected" : ""}>\u9017\u53F7 (,)</option><option value=";"${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, ";") : ssrLooseEqual(delimiter.value, ";")) ? " selected" : ""}>\u5206\u53F7 (;)</option><option value="\\t"${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, "\\t") : ssrLooseEqual(delimiter.value, "\\t")) ? " selected" : ""}>\u5236\u8868\u7B26 (\\t)</option><option value="|"${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, "|") : ssrLooseEqual(delimiter.value, "|")) ? " selected" : ""}>\u7AD6\u7EBF (|)</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u5305\u542B\u8868\u5934:</label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(includeHeader.value) ? ssrLooseContain(includeHeader.value, null) : includeHeader.value) ? " checked" : ""} class="rounded"></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="\u5728\u6B64\u8F93\u5165JSON\u6570\u636E\uFF08\u6570\u7EC4\u683C\u5F0F\u6216\u5305\u542B\u6570\u7EC4\u7684\u5BF9\u8C61\uFF09...">${ssrInterpolate(inputJSON.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">CSV\u8F93\u51FA</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u590D\u5236 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u4E0B\u8F7DCSV </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u5168\u5C4F\u6A21\u5F0F </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputCSV.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> \u8F6C\u6362\u4E3A CSV </button></div>`);
      if (csvPreview.value.length) {
        _push(`<div class="mb-12"><h2 class="text-xl font-bold text-foreground mb-4">CSV \u9884\u89C8</h2><div class="overflow-auto border border-border rounded-lg"><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><!--[-->`);
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
          _push(`<p class="text-sm text-muted-foreground mt-2"> \u663E\u793A\u524D 5 \u884C\u6570\u636E\uFF0C\u5171 ${ssrInterpolate(csvPreview.value.length - 1)} \u884C </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F JSON \u8F6C CSV\uFF1F </h2><p class="text-muted-foreground mb-4"> JSON\uFF08JavaScript Object Notation\uFF09\u548C CSV\uFF08Comma-Separated Values\uFF09\u662F\u4E24\u79CD\u5E38\u7528\u7684\u6570\u636E\u683C\u5F0F\u3002 JSON \u8F6C CSV \u662F\u5C06 JSON \u6570\u636E\u8F6C\u6362\u4E3A\u8868\u683C\u5F62\u5F0F\u7684 CSV \u683C\u5F0F\u7684\u8FC7\u7A0B\u3002CSV \u662F\u4E00\u79CD\u7B80\u5355\u7684\u6587\u672C\u683C\u5F0F\uFF0C \u4F7F\u7528\u9017\u53F7\u6216\u5176\u4ED6\u5206\u9694\u7B26\u5206\u9694\u503C\uFF0C\u6BCF\u884C\u4EE3\u8868\u4E00\u6761\u8BB0\u5F55\uFF0C\u975E\u5E38\u9002\u5408\u5728 Excel \u7B49\u8868\u683C\u8F6F\u4EF6\u4E2D\u5904\u7406\u3002 </p><p class="text-muted-foreground"> \u8F6C\u6362\u8FC7\u7A0B\u4E2D\uFF0CJSON \u7684\u5BF9\u8C61\u7ED3\u6784\u4F1A\u88AB\u6241\u5E73\u5316\uFF0C\u5D4C\u5957\u7684\u5BF9\u8C61\u4F1A\u88AB\u5C55\u5F00\u4E3A\u5355\u72EC\u7684\u5217\u3002 \u6570\u7EC4\u4F1A\u88AB\u8F6C\u6362\u4E3A\u591A\u884C\u6570\u636E\uFF0C\u4F7F\u5F97\u6570\u636E\u53EF\u4EE5\u5728\u8868\u683C\u8F6F\u4EF6\u4E2D\u8F7B\u677E\u67E5\u770B\u548C\u5206\u6790\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5C06\u60A8\u7684 JSON \u6570\u636E\u7C98\u8D34\u5230\u5DE6\u4FA7\u8F93\u5165\u6846\uFF08\u5FC5\u987B\u662F\u6570\u7EC4\u683C\u5F0F\uFF09</li><li>\u9009\u62E9 CSV \u5206\u9694\u7B26\uFF08\u9017\u53F7\u3001\u5206\u53F7\u3001\u5236\u8868\u7B26\u7B49\uFF09</li><li>\u9009\u62E9\u662F\u5426\u5305\u542B\u8868\u5934\u884C</li><li>\u70B9\u51FB&quot;\u8F6C\u6362\u4E3A CSV&quot;\u6309\u94AE\u6216\u4F7F\u7528\u5FEB\u6377\u952E Ctrl+Enter</li><li>\u67E5\u770B\u53F3\u4FA7\u8F6C\u6362\u7ED3\u679C\u548C\u4E0B\u65B9\u9884\u89C8\u8868\u683C</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u8F6C\u6362\u89C4\u5219 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u6570\u7EC4\u8F6C\u6362</strong>: JSON \u6570\u7EC4\u7684\u6BCF\u4E2A\u5143\u7D20\u8F6C\u6362\u4E3A CSV \u7684\u4E00\u884C</li><li><strong>\u6241\u5E73\u5316\u5904\u7406</strong>: \u5D4C\u5957\u5BF9\u8C61\u4F1A\u88AB\u6241\u5E73\u5316\uFF0C\u4F7F\u7528\u70B9\u53F7\u8FDE\u63A5\u952E\u540D</li><li><strong>\u952E\u540D\u63D0\u53D6</strong>: \u6240\u6709\u5BF9\u8C61\u7684\u952E\u4F1A\u88AB\u63D0\u53D6\u4F5C\u4E3A CSV \u7684\u5217\u540D</li><li><strong>\u7F3A\u5931\u503C\u5904\u7406</strong>: \u5982\u679C\u67D0\u884C\u7F3A\u5C11\u67D0\u5217\u7684\u503C\uFF0C\u4F1A\u7559\u7A7A</li><li><strong>\u7279\u6B8A\u5B57\u7B26\u8F6C\u4E49</strong>: \u5305\u542B\u5206\u9694\u7B26\u6216\u6362\u884C\u7B26\u7684\u503C\u4F1A\u88AB\u5F15\u53F7\u5305\u56F4</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u53EF\u4EE5\u8F6C\u6362\u5D4C\u5957\u7684 JSON \u5BF9\u8C61\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u53EF\u4EE5\u3002\u672C\u5DE5\u5177\u4F1A\u81EA\u52A8\u6241\u5E73\u5316\u5D4C\u5957\u5BF9\u8C61\uFF0C\u4F7F\u7528\u70B9\u53F7\u8FDE\u63A5\u952E\u540D\u3002\u4F8B\u5982\uFF0C {&quot;user&quot;: {&quot;name&quot;: &quot;John&quot;}} \u4F1A\u88AB\u8F6C\u6362\u4E3A\u5217\u540D &quot;user.name&quot;\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">JSON \u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u7ED3\u6784\u4E0D\u540C\u600E\u4E48\u529E\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5DE5\u5177\u4F1A\u6536\u96C6\u6240\u6709\u5BF9\u8C61\u7684\u952E\u4F5C\u4E3A\u5217\u540D\u3002\u5982\u679C\u67D0\u884C\u7F3A\u5C11\u67D0\u4E2A\u952E\uFF0C\u5BF9\u5E94\u7684\u5217\u4F1A\u7559\u7A7A\u3002 \u8FD9\u786E\u4FDD\u4E86\u6240\u6709\u6570\u636E\u90FD\u80FD\u6B63\u786E\u8F6C\u6362\uFF0C\u5373\u4F7F\u7ED3\u6784\u4E0D\u5B8C\u5168\u4E00\u81F4\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u9700\u8981 JSON \u8F6C CSV\uFF1F</h3><p class="text-muted-foreground mt-1"> CSV \u683C\u5F0F\u5E7F\u6CDB\u5E94\u7528\u4E8E\u6570\u636E\u5206\u6790\u3001\u62A5\u8868\u751F\u6210\u3001Excel \u5904\u7406\u7B49\u573A\u666F\u3002 \u8F6C\u6362\u4E3A CSV \u540E\u53EF\u4EE5\uFF1A\u5728 Excel \u4E2D\u6253\u5F00\u548C\u5206\u6790\u6570\u636E\u3001\u5BFC\u5165\u5230\u6570\u636E\u5E93\u3001 \u7528\u4E8E\u6570\u636E\u53EF\u89C6\u5316\u5DE5\u5177\u3001\u4E0E\u4ED6\u4EBA\u5171\u4EAB\u6570\u636E\u7B49\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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

export { _sfc_main as default };
//# sourceMappingURL=json-to-csv-BCAVoTLI.mjs.map
