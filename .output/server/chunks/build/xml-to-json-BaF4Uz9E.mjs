import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { HelpCircle, ChevronUp, GitBranch, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Wifi, Type, Clock, Shield, Lock, FileText } from 'lucide-vue-next';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { f as useSeoMeta, u as useHead, e as addRecentTool } from './server.mjs';
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

const _sfc_main = {
  __name: "xml-to-json",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "XML\u8F6CJSON - \u5728\u7EBFXML\u8F6CJSON\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF XML to JSON \u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 XML \u6570\u636E\u5FEB\u901F\u8F6C\u6362\u4E3A JSON \u683C\u5F0F\uFF0C\u4FDD\u7559\u6570\u636E\u7ED3\u6784\uFF0C\u652F\u6301\u5C5E\u6027\u8F6C\u6362\u548C\u6570\u7EC4\u68C0\u6D4B\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u5B89\u5168\u3002",
      keywords: "XML\u8F6CJSON, XML to JSON, XML JSON\u8F6C\u6362, \u6570\u636E\u683C\u5F0F\u8F6C\u6362, \u5728\u7EBF\u5DE5\u5177",
      author: "Util\u5DE5\u5177\u7BB1",
      ogTitle: "XML\u8F6CJSON - \u5728\u7EBFXML\u8F6CJSON\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177",
      ogDescription: "\u514D\u8D39\u5728\u7EBF XML to JSON \u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 XML \u6570\u636E\u5FEB\u901F\u8F6C\u6362\u4E3A JSON \u683C\u5F0F\u3002",
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
            name: "XML\u8F6CJSON\u5DE5\u5177",
            description: "\u514D\u8D39\u5728\u7EBF XML to JSON \u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 XML \u6570\u636E\u5FEB\u901F\u8F6C\u6362\u4E3A JSON \u683C\u5F0F",
            url: "https://util.example.com/tools/xml-to-json",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            featureList: [
              "XML\u8F6CJSON",
              "\u5C5E\u6027\u5904\u7406\u9009\u9879",
              "\u6570\u7EC4\u81EA\u52A8\u68C0\u6D4B",
              "\u4FDD\u7559\u6570\u636E\u7ED3\u6784",
              "\u672C\u5730\u5904\u7406"
            ]
          })
        }
      ]
    });
    useRouter();
    const tool = tools.find((t) => t.id === "xml-to-json");
    categories.find((c) => c.id === "format");
    const inputXML = ref("");
    const outputJSON = ref("");
    const inputError = ref("");
    const indentSize = ref("2");
    const attributeHandling = ref("prefix");
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
        (t) => t.category === "format" && t.id !== "xml-to-json"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "json-to-xml"),
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "xml-formatter"),
        tools.find((t) => t.id === "json-to-yaml")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">XML\u8F6CJSON - \u5728\u7EBFXML\u8F6CJSON\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF XML to JSON Converter\u3002\u652F\u6301\u5C06 XML \u6570\u636E\u5FEB\u901F\u8F6C\u6362\u4E3A JSON \u683C\u5F0F\uFF0C\u4FDD\u7559\u6570\u636E\u7ED3\u6784\uFF0C\u652F\u6301\u5C5E\u6027\u8F6C\u6362\u548C\u6570\u7EC4\u68C0\u6D4B\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u7EDD\u5BF9\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F93\u5165XML</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u7C98\u8D34 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u793A\u4F8B\u6570\u636E </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u7F29\u8FDB:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="2"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "2") : ssrLooseEqual(indentSize.value, "2")) ? " selected" : ""}>2\u7A7A\u683C</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "4") : ssrLooseEqual(indentSize.value, "4")) ? " selected" : ""}>4\u7A7A\u683C</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u5904\u7406\u5C5E\u6027:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="prefix"${ssrIncludeBooleanAttr(Array.isArray(attributeHandling.value) ? ssrLooseContain(attributeHandling.value, "prefix") : ssrLooseEqual(attributeHandling.value, "prefix")) ? " selected" : ""}>\u52A0@\u524D\u7F00</option><option value="separate"${ssrIncludeBooleanAttr(Array.isArray(attributeHandling.value) ? ssrLooseContain(attributeHandling.value, "separate") : ssrLooseEqual(attributeHandling.value, "separate")) ? " selected" : ""}>\u5355\u72EC\u5BF9\u8C61</option><option value="ignore"${ssrIncludeBooleanAttr(Array.isArray(attributeHandling.value) ? ssrLooseContain(attributeHandling.value, "ignore") : ssrLooseEqual(attributeHandling.value, "ignore")) ? " selected" : ""}>\u5FFD\u7565</option></select></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="\u5728\u6B64\u8F93\u5165XML\u6570\u636E...">${ssrInterpolate(inputXML.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">JSON\u8F93\u51FA</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u590D\u5236 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u4E0B\u8F7DJSON </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u5168\u5C4F\u6A21\u5F0F </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputJSON.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> \u8F6C\u6362\u4E3A JSON </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F XML \u8F6C JSON\uFF1F </h2><p class="text-muted-foreground mb-4"> XML\uFF08eXtensible Markup Language\uFF09\u548C JSON\uFF08JavaScript Object Notation\uFF09\u90FD\u662F\u5E38\u7528\u7684\u6570\u636E\u4EA4\u6362\u683C\u5F0F\u3002 XML \u8F6C JSON \u662F\u5C06 XML \u6807\u8BB0\u8BED\u8A00\u6570\u636E\u8F6C\u6362\u4E3A JSON \u5BF9\u8C61\u683C\u5F0F\u7684\u8FC7\u7A0B\u3002JSON \u66F4\u8F7B\u91CF\u7EA7\u3001\u66F4\u6613\u89E3\u6790\uFF0C \u5728\u73B0\u4EE3 Web \u5E94\u7528\u4E2D\u88AB\u5E7F\u6CDB\u4F7F\u7528\u3002 </p><p class="text-muted-foreground"> \u8F6C\u6362\u8FC7\u7A0B\u4E2D\uFF0CXML \u7684\u5143\u7D20\u3001\u5C5E\u6027\u3001\u6587\u672C\u5185\u5BB9\u4F1A\u88AB\u6620\u5C04\u5230 JSON \u7684\u5BF9\u8C61\u3001\u5C5E\u6027\u548C\u503C\u3002 \u9700\u8981\u8003\u8651\u5982\u4F55\u5904\u7406 XML \u7279\u6709\u7684\u7279\u6027\uFF0C\u5982\u5C5E\u6027\u3001\u547D\u540D\u7A7A\u95F4\u3001\u6CE8\u91CA\u7B49\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5C06\u60A8\u7684 XML \u6570\u636E\u7C98\u8D34\u5230\u5DE6\u4FA7\u8F93\u5165\u6846</li><li>\u9009\u62E9 JSON \u7F29\u8FDB\u5927\u5C0F\uFF082\u7A7A\u683C\u62164\u7A7A\u683C\uFF09</li><li>\u9009\u62E9\u5C5E\u6027\u5904\u7406\u65B9\u5F0F\uFF08\u52A0@\u524D\u7F00\u3001\u5355\u72EC\u5BF9\u8C61\u6216\u5FFD\u7565\uFF09</li><li>\u70B9\u51FB&quot;\u8F6C\u6362\u4E3A JSON&quot;\u6309\u94AE\u6216\u4F7F\u7528\u5FEB\u6377\u952E Ctrl+Enter</li><li>\u67E5\u770B\u53F3\u4FA7\u8F6C\u6362\u540E\u7684 JSON \u7ED3\u679C</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u8F6C\u6362\u89C4\u5219\u8BF4\u660E </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u5143\u7D20\u8F6C\u6362</strong>: XML \u5143\u7D20\u8F6C\u6362\u4E3A JSON \u5BF9\u8C61\u7684\u5C5E\u6027</li><li><strong>\u5C5E\u6027\u5904\u7406</strong>: XML \u5C5E\u6027\u53EF\u8F6C\u6362\u4E3A\u5E26@\u524D\u7F00\u7684\u5C5E\u6027\u6216\u5355\u72EC\u7684\u5BF9\u8C61</li><li><strong>\u6587\u672C\u5185\u5BB9</strong>: \u5143\u7D20\u7684\u6587\u672C\u5185\u5BB9\u4F5C\u4E3A\u7279\u6B8A\u5C5E\u6027 &quot;#text&quot; \u6216\u76F4\u63A5\u4F5C\u4E3A\u503C</li><li><strong>\u6570\u7EC4\u68C0\u6D4B</strong>: \u76F8\u540C\u540D\u79F0\u7684\u5144\u5F1F\u5143\u7D20\u81EA\u52A8\u8F6C\u6362\u4E3A JSON \u6570\u7EC4</li><li><strong>\u6DF7\u5408\u5185\u5BB9</strong>: \u5305\u542B\u6587\u672C\u548C\u5B50\u5143\u7D20\u7684\u5143\u7D20\u4F1A\u88AB\u7279\u6B8A\u5904\u7406</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5C5E\u6027\u5904\u7406\u9009\u9879 </h2><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"><div class="p-4 bg-muted/50 rounded-lg"><h4 class="font-semibold text-foreground mb-2">\u52A0@\u524D\u7F00</h4><p class="text-sm text-muted-foreground"> \u5C06 XML \u5C5E\u6027\u8F6C\u6362\u4E3A\u4EE5 @ \u5F00\u5934\u7684 JSON \u5C5E\u6027\u3002 \u4F8B\u5982\uFF1A&lt;item id=&quot;1&quot;&gt; \u2192 {&quot;@id&quot;: &quot;1&quot;} </p></div><div class="p-4 bg-muted/50 rounded-lg"><h4 class="font-semibold text-foreground mb-2">\u5355\u72EC\u5BF9\u8C61</h4><p class="text-sm text-muted-foreground"> \u5C06\u6240\u6709\u5C5E\u6027\u6536\u96C6\u5230\u5355\u72EC\u7684 &quot;@attributes&quot; \u5BF9\u8C61\u4E2D\u3002 \u4F8B\u5982\uFF1A&lt;item id=&quot;1&quot;&gt; \u2192 {&quot;@attributes&quot;: {&quot;id&quot;: &quot;1&quot;}} </p></div><div class="p-4 bg-muted/50 rounded-lg"><h4 class="font-semibold text-foreground mb-2">\u5FFD\u7565</h4><p class="text-sm text-muted-foreground"> \u5B8C\u5168\u5FFD\u7565 XML \u5C5E\u6027\uFF0C\u53EA\u4FDD\u7559\u5143\u7D20\u548C\u6587\u672C\u5185\u5BB9\u3002 \u8FD9\u9002\u7528\u4E8E\u53EA\u9700\u8981\u6570\u636E\u7684\u573A\u666F\u3002 </p></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">XML \u4E2D\u7684\u547D\u540D\u7A7A\u95F4\u5982\u4F55\u5904\u7406\uFF1F</h3><p class="text-muted-foreground mt-1"> \u547D\u540D\u7A7A\u95F4\u524D\u7F00\u4F1A\u4FDD\u7559\u5728\u5143\u7D20\u540D\u79F0\u4E2D\u3002\u4F8B\u5982 &lt;ns:item&gt; \u4F1A\u88AB\u8F6C\u6362\u4E3A {&quot;ns:item&quot;: ...}\u3002 \u5982\u679C\u9700\u8981\u5B8C\u5168\u79FB\u9664\u547D\u540D\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5728\u8F6C\u6362\u540E\u8FDB\u884C\u540E\u5904\u7406\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u5904\u7406 CDATA \u90E8\u5206\uFF1F</h3><p class="text-muted-foreground mt-1"> CDATA \u90E8\u5206\u7684\u5185\u5BB9\u4F1A\u4F5C\u4E3A\u666E\u901A\u6587\u672C\u5904\u7406\uFF0C\u4E0D\u4F1A\u88AB\u89E3\u6790\u4E3A XML \u6807\u8BB0\u3002 \u8FD9\u786E\u4FDD\u4E86\u7279\u6B8A\u5B57\u7B26\u548C\u4EE3\u7801\u7247\u6BB5\u80FD\u591F\u6B63\u786E\u4FDD\u7559\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u8F6C\u6362\u540E\u7684 JSON \u53EF\u4EE5\u518D\u8F6C\u56DE XML \u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u53EF\u4EE5\u3002\u4F7F\u7528\u6211\u4EEC\u7684 JSON \u8F6C XML \u5DE5\u5177\u53EF\u4EE5\u5C06\u8F6C\u6362\u540E\u7684 JSON \u518D\u8F6C\u56DE XML \u683C\u5F0F\u3002 \u67D0\u4E9B XML \u7279\u6027\uFF08\u5982\u6CE8\u91CA\u3001\u5904\u7406\u6307\u4EE4\uFF09\u5728\u8F6C\u6362\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u4E22\u5931\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/xml-to-json.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=xml-to-json-BaF4Uz9E.mjs.map
