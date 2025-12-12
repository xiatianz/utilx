import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
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
  __name: "json-to-xml",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "JSON\u8F6CXML - \u5728\u7EBFJSON\u8F6CXML\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF JSON to XML \u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 JSON \u6570\u636E\u5FEB\u901F\u8F6C\u6362\u4E3A XML \u683C\u5F0F\uFF0C\u4FDD\u7559\u6570\u636E\u7ED3\u6784\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6839\u5143\u7D20\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u5B89\u5168\u3002",
      keywords: "JSON\u8F6CXML, JSON to XML, JSON XML\u8F6C\u6362, \u6570\u636E\u683C\u5F0F\u8F6C\u6362, \u5728\u7EBF\u5DE5\u5177",
      author: "Util\u5DE5\u5177\u7BB1",
      ogTitle: "JSON\u8F6CXML - \u5728\u7EBFJSON\u8F6CXML\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177",
      ogDescription: "\u514D\u8D39\u5728\u7EBF JSON to XML \u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 JSON \u6570\u636E\u5FEB\u901F\u8F6C\u6362\u4E3A XML \u683C\u5F0F\uFF0C\u4FDD\u7559\u6570\u636E\u7ED3\u6784\u3002",
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
            name: "JSON\u8F6CXML\u5DE5\u5177",
            description: "\u514D\u8D39\u5728\u7EBF JSON to XML \u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 JSON \u6570\u636E\u5FEB\u901F\u8F6C\u6362\u4E3A XML \u683C\u5F0F",
            url: "https://util.example.com/tools/json-to-xml",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            featureList: [
              "JSON\u8F6CXML",
              "\u81EA\u5B9A\u4E49\u6839\u5143\u7D20",
              "\u6570\u7EC4\u5143\u7D20\u547D\u540D",
              "\u683C\u5F0F\u5316\u8F93\u51FA",
              "\u672C\u5730\u5904\u7406"
            ]
          })
        }
      ]
    });
    useRouter();
    const tool = tools.find((t) => t.id === "json-to-xml");
    categories.find((c) => c.id === "format");
    const inputJSON = ref("");
    const outputXML = ref("");
    const inputError = ref("");
    const rootElementName = ref("root");
    const arrayElementName = ref("item");
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
        (t) => t.category === "format" && t.id !== "json-to-xml"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "xml-to-json"),
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">JSON\u8F6CXML - \u5728\u7EBFJSON\u8F6CXML\u683C\u5F0F\u8F6C\u6362\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF JSON to XML Converter\u3002\u652F\u6301\u5C06 JSON \u6570\u636E\u5FEB\u901F\u8F6C\u6362\u4E3A XML \u683C\u5F0F\uFF0C\u4FDD\u7559\u6570\u636E\u7ED3\u6784\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6839\u5143\u7D20\u540D\u79F0\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u7EDD\u5BF9\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F93\u5165JSON</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u7C98\u8D34 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u793A\u4F8B\u6570\u636E </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u6839\u5143\u7D20\u540D\u79F0:</label><input type="text"${ssrRenderAttr("value", rootElementName.value)} placeholder="root" class="text-xs bg-muted border border-border rounded px-2 py-1 w-24"></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u6570\u7EC4\u5143\u7D20\u540D\u79F0:</label><input type="text"${ssrRenderAttr("value", arrayElementName.value)} placeholder="item" class="text-xs bg-muted border border-border rounded px-2 py-1 w-24"></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="\u5728\u6B64\u8F93\u5165JSON\u6570\u636E...">${ssrInterpolate(inputJSON.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">XML\u8F93\u51FA</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u590D\u5236 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u4E0B\u8F7DXML </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u5168\u5C4F\u6A21\u5F0F </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputXML.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> \u8F6C\u6362\u4E3A XML </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F JSON \u8F6C XML\uFF1F </h2><p class="text-muted-foreground mb-4"> JSON\uFF08JavaScript Object Notation\uFF09\u548C XML\uFF08eXtensible Markup Language\uFF09\u90FD\u662F\u5E38\u7528\u7684\u6570\u636E\u4EA4\u6362\u683C\u5F0F\u3002 JSON \u8F6C XML \u662F\u5C06 JSON \u6570\u636E\u7ED3\u6784\u8F6C\u6362\u4E3A XML \u683C\u5F0F\u7684\u8FC7\u7A0B\uFF0C\u8FD9\u5728\u9700\u8981\u4E0E\u9057\u7559\u7CFB\u7EDF\u96C6\u6210\u3001 \u6216\u67D0\u4E9B\u7279\u5B9A\u573A\u666F\u4E0B\u9700\u8981 XML \u683C\u5F0F\u7684\u6570\u636E\u65F6\u975E\u5E38\u6709\u7528\u3002 </p><p class="text-muted-foreground"> JSON \u4F7F\u7528\u952E\u503C\u5BF9\u548C\u6570\u7EC4\u6765\u8868\u793A\u6570\u636E\u7ED3\u6784\uFF0C\u800C XML \u4F7F\u7528\u6807\u7B7E\u548C\u5C5E\u6027\u3002\u8F6C\u6362\u8FC7\u7A0B\u4E2D\u9700\u8981\u8003\u8651 \u5982\u4F55\u6620\u5C04\u8FD9\u4E9B\u7ED3\u6784\uFF0C\u4EE5\u786E\u4FDD\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u53EF\u8BFB\u6027\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5C06\u60A8\u7684 JSON \u6570\u636E\u7C98\u8D34\u5230\u5DE6\u4FA7\u8F93\u5165\u6846</li><li>\u8BBE\u7F6E\u6839\u5143\u7D20\u540D\u79F0\uFF08\u9ED8\u8BA4\u4E3A &quot;root&quot;\uFF09</li><li>\u8BBE\u7F6E\u6570\u7EC4\u5143\u7D20\u540D\u79F0\uFF08\u9ED8\u8BA4\u4E3A &quot;item&quot;\uFF09</li><li>\u70B9\u51FB&quot;\u8F6C\u6362\u4E3A XML&quot;\u6309\u94AE\u6216\u4F7F\u7528\u5FEB\u6377\u952E Ctrl+Enter</li><li>\u67E5\u770B\u53F3\u4FA7\u8F6C\u6362\u540E\u7684 XML \u7ED3\u679C</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u8F6C\u6362\u89C4\u5219\u8BF4\u660E </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u5BF9\u8C61\u6620\u5C04</strong>: JSON \u5BF9\u8C61\u8F6C\u6362\u4E3A XML \u5143\u7D20\uFF0C\u952E\u540D\u4F5C\u4E3A\u6807\u7B7E\u540D</li><li><strong>\u6570\u7EC4\u5904\u7406</strong>: JSON \u6570\u7EC4\u8F6C\u6362\u4E3A\u591A\u4E2A\u76F8\u540C\u540D\u79F0\u7684 XML \u5143\u7D20</li><li><strong>\u6570\u636E\u7C7B\u578B</strong>: \u6240\u6709\u503C\u90FD\u8F6C\u6362\u4E3A XML \u7684\u6587\u672C\u5185\u5BB9\uFF08CDATA\uFF09</li><li><strong>\u5D4C\u5957\u7ED3\u6784</strong>: \u4FDD\u7559 JSON \u7684\u5D4C\u5957\u5C42\u7EA7\u5173\u7CFB</li><li><strong>\u7279\u6B8A\u5B57\u7B26</strong>: \u81EA\u52A8\u8F6C\u4E49 XML \u7279\u6B8A\u5B57\u7B26\uFF08&lt;, &gt;, &amp;, &#39;, &quot;\uFF09</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u8F6C\u6362\u540E\u7684 XML \u4F1A\u4FDD\u7559\u6570\u636E\u7C7B\u578B\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> XML \u672C\u8EAB\u4E0D\u652F\u6301\u6570\u636E\u7C7B\u578B\uFF0C\u6240\u6709\u503C\u90FD\u4F1A\u8F6C\u6362\u4E3A\u6587\u672C\u3002\u5982\u679C\u9700\u8981\u5728 XML \u4E2D\u4FDD\u7559\u7C7B\u578B\u4FE1\u606F\uFF0C \u53EF\u4EE5\u4F7F\u7528\u5C5E\u6027\u6216\u7279\u6B8A\u6807\u7B7E\u6765\u6807\u8BB0\u6570\u636E\u7C7B\u578B\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">JSON \u6570\u7EC4\u5982\u4F55\u8F6C\u6362\u4E3A XML\uFF1F</h3><p class="text-muted-foreground mt-1"> JSON \u6570\u7EC4\u4F1A\u8F6C\u6362\u4E3A\u591A\u4E2A\u540C\u540D\u7684 XML \u5143\u7D20\u3002\u4F8B\u5982\uFF0C\u6570\u7EC4 [&quot;a&quot;, &quot;b&quot;] \u4F1A\u8F6C\u6362\u4E3A\uFF1A &lt;array&gt;&lt;item&gt;a&lt;/item&gt;&lt;item&gt;b&lt;/item&gt;&lt;/array&gt; </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u9700\u8981 JSON \u8F6C XML\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5E38\u89C1\u573A\u666F\u5305\u62EC\uFF1A\u4E0E\u4F7F\u7528 XML \u7684\u9057\u7559\u7CFB\u7EDF\u96C6\u6210\u3001\u7B26\u5408\u884C\u4E1A\u6807\u51C6\u683C\u5F0F\u8981\u6C42\u3001 XML \u5177\u6709\u66F4\u597D\u7684\u81EA\u63CF\u8FF0\u6027\u548C\u9A8C\u8BC1\u673A\u5236\uFF08DTD/XSD\uFF09\u3001\u67D0\u4E9B\u4F01\u4E1A\u5E94\u7528\u8981\u6C42 XML \u683C\u5F0F\u7B49\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/json-to-xml.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=json-to-xml-Cdma4RLd.mjs.map
