import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
import { X, FileText, ArrowRight, FileJson } from 'lucide-vue-next';
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
  __name: "xpath-tester",
  __ssrInlineRender: true,
  setup(__props) {
    const xmlInput = ref("");
    const xpath = ref("");
    const xmlDoc = ref(null);
    const xmlError = ref("");
    const queryResult = ref(null);
    const resultCount = ref(0);
    const copied = ref(false);
    const queryType = ref("multiple");
    const xpathExamples = [
      {
        xpath: "/bookstore/book",
        description: "\u83B7\u53D6\u6240\u6709\u4E66\u7C4D\u8282\u70B9"
      },
      {
        xpath: "//book",
        description: "\u83B7\u53D6\u6587\u6863\u4E2D\u6240\u6709\u4E66\u7C4D\u8282\u70B9"
      },
      {
        xpath: "//book[1]",
        description: "\u83B7\u53D6\u7B2C\u4E00\u672C\u4E66"
      },
      {
        xpath: "//book[last()]",
        description: "\u83B7\u53D6\u6700\u540E\u4E00\u672C\u4E66"
      },
      {
        xpath: '//book[@category="web"]',
        description: "\u83B7\u53D6 web \u7C7B\u522B\u7684\u4E66"
      },
      {
        xpath: "//book[price>35]",
        description: "\u83B7\u53D6\u4EF7\u683C\u5927\u4E8E 35 \u7684\u4E66"
      },
      {
        xpath: "//title/text()",
        description: "\u83B7\u53D6\u6240\u6709\u4E66\u7684\u6807\u9898\u6587\u672C"
      },
      {
        xpath: "count(//book)",
        description: "\u7EDF\u8BA1\u4E66\u7C4D\u603B\u6570"
      }
    ];
    const formatQueryResult = () => {
      if (!queryResult.value) return "";
      if (typeof queryResult.value === "number") {
        return queryResult.value.toString();
      }
      if (queryResult.value.nodeType === 1) {
        const serializer = new XMLSerializer();
        return serializer.serializeToString(queryResult.value);
      }
      if (Array.isArray(queryResult.value)) {
        const serializer = new XMLSerializer();
        return queryResult.value.map((node) => {
          if (node.nodeType === 1) {
            return serializer.serializeToString(node);
          } else if (node.nodeType === 2) {
            return `${node.name}="${node.value}"`;
          } else {
            return node.textContent || node.nodeValue;
          }
        }).join("\n\n");
      }
      return queryResult.value.toString();
    };
    useSeoMeta({
      title: "XPath\u6D4B\u8BD5\u5668 - \u5728\u7EBFXML\u8DEF\u5F84\u8868\u8FBE\u5F0F\u67E5\u8BE2",
      description: "\u514D\u8D39\u5728\u7EBFXPath\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u652F\u6301\u4F7F\u7528XPath\u8868\u8FBE\u5F0F\u67E5\u8BE2\u548C\u63D0\u53D6XML\u6570\u636E\uFF0C\u63D0\u4F9B\u8BED\u6CD5\u8BF4\u660E\u548C\u793A\u4F8B\u3002",
      keywords: ["xpath", "xml", "query", "path", "test", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">XPath \u6D4B\u8BD5\u5668</h1><p class="text-muted-foreground">\u4F7F\u7528 XPath \u8868\u8FBE\u5F0F\u67E5\u8BE2\u548C\u63D0\u53D6 XML \u6570\u636E</p></div><div class="space-y-6"><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">XML \u6570\u636E</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u52A0\u8F7D\u793A\u4F8B </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u683C\u5F0F\u5316 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><div class="relative"><textarea placeholder="\u8BF7\u8F93\u5165 XML \u6570\u636E..." class="${ssrRenderClass([{ "border-red-500": xmlError.value }, "w-full h-96 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"])}">${ssrInterpolate(xmlInput.value)}</textarea><div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded">${ssrInterpolate(xmlInput.value.length)} \u5B57\u7B26 </div></div>`);
      if (xmlError.value) {
        _push(`<div class="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">${ssrInterpolate(xmlError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">XPath \u67E5\u8BE2</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><div class="space-y-2"><label class="text-sm font-medium">XPath \u8868\u8FBE\u5F0F</label><div class="relative"><input${ssrRenderAttr("value", xpath.value)} placeholder="\u4F8B\u5982: //book/title" class="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono">`);
      if (xpath.value) {
        _push(`<button class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="space-y-3"><label class="text-sm font-medium">\u67E5\u8BE2\u9009\u9879</label><div class="flex flex-wrap gap-3"><label class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(queryType.value, "single")) ? " checked" : ""} value="single" class="mr-2"><span class="text-sm">\u8FD4\u56DE\u5355\u4E2A\u7ED3\u679C</span></label><label class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(queryType.value, "multiple")) ? " checked" : ""} value="multiple" class="mr-2"><span class="text-sm">\u8FD4\u56DE\u6240\u6709\u7ED3\u679C</span></label><label class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(queryType.value, "count")) ? " checked" : ""} value="count" class="mr-2"><span class="text-sm">\u53EA\u8FD4\u56DE\u6570\u91CF</span></label></div></div><div class="space-y-2"><label class="text-sm font-medium">\u5FEB\u6377\u793A\u4F8B</label><div class="grid grid-cols-1 gap-2"><!--[-->`);
      ssrRenderList(xpathExamples, (example) => {
        _push(`<button class="p-2 text-sm bg-muted hover:bg-muted/80 rounded text-left transition-colors"><div class="font-mono text-primary">${ssrInterpolate(example.xpath)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(example.description)}</div></button>`);
      });
      _push(`<!--]--></div></div><button${ssrIncludeBooleanAttr(!xmlDoc.value || !xpath.value) ? " disabled" : ""} class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> \u6267\u884C\u67E5\u8BE2 </button>`);
      if (queryResult.value !== null) {
        _push(`<div class="space-y-2"><div class="flex items-center justify-between"><label class="text-sm font-medium">\u67E5\u8BE2\u7ED3\u679C</label><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button></div></div><div class="border rounded-lg overflow-hidden"><div class="px-3 py-2 bg-muted border-b flex items-center gap-2"><span class="text-sm font-medium">${ssrInterpolate(queryType.value === "count" ? "\u5339\u914D\u6570\u91CF" : `\u627E\u5230 ${resultCount.value} \u4E2A\u7ED3\u679C`)}</span></div><div class="max-h-64 overflow-auto p-4">`);
        if (queryResult.value) {
          _push(`<pre class="text-sm whitespace-pre-wrap">${ssrInterpolate(formatQueryResult())}</pre>`);
        } else {
          _push(`<div class="text-sm text-muted-foreground">\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u7ED3\u679C</div>`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">XPath \u8BED\u6CD5\u8BF4\u660E</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-medium mb-3">\u8282\u70B9\u9009\u62E9</h3><table class="w-full text-sm"><thead><tr class="border-b"><th class="text-left py-2">\u8868\u8FBE\u5F0F</th><th class="text-left py-2">\u8BF4\u660E</th></tr></thead><tbody><tr class="border-b"><td class="py-2 font-mono text-primary">nodename</td><td class="py-2">\u9009\u62E9\u6240\u6709 nodename \u5B50\u8282\u70B9</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">/</td><td class="py-2">\u4ECE\u6839\u8282\u70B9\u9009\u62E9</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">//</td><td class="py-2">\u4ECE\u5F53\u524D\u8282\u70B9\u9009\u62E9\u5339\u914D\u7684\u8282\u70B9</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">.</td><td class="py-2">\u9009\u62E9\u5F53\u524D\u8282\u70B9</td></tr><tr><td class="py-2 font-mono text-primary">..</td><td class="py-2">\u9009\u62E9\u5F53\u524D\u8282\u70B9\u7684\u7236\u8282\u70B9</td></tr></tbody></table></div><div><h3 class="font-medium mb-3">\u8C13\u8BED\uFF08Predicates\uFF09</h3><table class="w-full text-sm"><thead><tr class="border-b"><th class="text-left py-2">\u8868\u8FBE\u5F0F</th><th class="text-left py-2">\u8BF4\u660E</th></tr></thead><tbody><tr class="border-b"><td class="py-2 font-mono text-primary">[1]</td><td class="py-2">\u7B2C\u4E00\u4E2A\u8282\u70B9</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">[last()]</td><td class="py-2">\u6700\u540E\u4E00\u4E2A\u8282\u70B9</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">[@attr]</td><td class="py-2">\u5305\u542B attr \u5C5E\u6027\u7684\u8282\u70B9</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">[@attr=&#39;value&#39;]</td><td class="py-2">attr \u5C5E\u6027\u7B49\u4E8E value \u7684\u8282\u70B9</td></tr><tr><td class="py-2 font-mono text-primary">[text()=&#39;value&#39;]</td><td class="py-2">\u6587\u672C\u5185\u5BB9\u7B49\u4E8E value \u7684\u8282\u70B9</td></tr></tbody></table></div></div><div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-medium mb-3">\u901A\u914D\u7B26</h3><table class="w-full text-sm"><thead><tr class="border-b"><th class="text-left py-2">\u8868\u8FBE\u5F0F</th><th class="text-left py-2">\u8BF4\u660E</th></tr></thead><tbody><tr class="border-b"><td class="py-2 font-mono text-primary">*</td><td class="py-2">\u5339\u914D\u4EFB\u4F55\u5143\u7D20\u8282\u70B9</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">@*</td><td class="py-2">\u5339\u914D\u4EFB\u4F55\u5C5E\u6027\u8282\u70B9</td></tr><tr><td class="py-2 font-mono text-primary">node()</td><td class="py-2">\u5339\u914D\u4EFB\u4F55\u7C7B\u578B\u7684\u8282\u70B9</td></tr></tbody></table></div><div><h3 class="font-medium mb-3">\u5E38\u7528\u51FD\u6570</h3><table class="w-full text-sm"><thead><tr class="border-b"><th class="text-left py-2">\u51FD\u6570</th><th class="text-left py-2">\u8BF4\u660E</th></tr></thead><tbody><tr class="border-b"><td class="py-2 font-mono text-primary">text()</td><td class="py-2">\u83B7\u53D6\u8282\u70B9\u7684\u6587\u672C\u5185\u5BB9</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">count()</td><td class="py-2">\u7EDF\u8BA1\u8282\u70B9\u6570\u91CF</td></tr><tr><td class="py-2 font-mono text-primary">contains()</td><td class="py-2">\u68C0\u67E5\u662F\u5426\u5305\u542B\u6307\u5B9A\u5B57\u7B26\u4E32</td></tr></tbody></table></div></div><div class="mt-6"><h3 class="font-medium mb-3">\u5E38\u7528\u793A\u4F8B</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h4 class="text-sm font-medium mb-2">\u57FA\u7840\u67E5\u8BE2</h4><ul class="space-y-1 text-sm"><li><code class="bg-muted px-1 rounded">/bookstore/book</code> - bookstore \u4E0B\u7684\u6240\u6709 book</li><li><code class="bg-muted px-1 rounded">//book</code> - \u6240\u6709 book \u8282\u70B9</li><li><code class="bg-muted px-1 rounded">//@lang</code> - \u6240\u6709 lang \u5C5E\u6027</li><li><code class="bg-muted px-1 rounded">/bookstore/book[1]</code> - \u7B2C\u4E00\u4E2A book</li></ul></div><div><h4 class="text-sm font-medium mb-2">\u9AD8\u7EA7\u67E5\u8BE2</h4><ul class="space-y-1 text-sm"><li><code class="bg-muted px-1 rounded">//book[price&gt;35]</code> - \u4EF7\u683C\u5927\u4E8E 35 \u7684\u4E66</li><li><code class="bg-muted px-1 rounded">//book[@category=&#39;web&#39;]</code> - web \u7C7B\u522B\u7684\u4E66</li><li><code class="bg-muted px-1 rounded">//book/title/text()</code> - \u6240\u6709\u4E66\u7684\u6807\u9898\u6587\u672C</li><li><code class="bg-muted px-1 rounded">count(//book)</code> - \u4E66\u7C4D\u603B\u6570</li></ul></div></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/format/xml-formatter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>XML\u683C\u5F0F\u5316</p><p class="text-xs text-muted-foreground"${_scopeId}>\u7F8E\u5316\u538B\u7F29XML</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "XML\u683C\u5F0F\u5316"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u7F8E\u5316\u538B\u7F29XML")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/format/xml-to-json",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileJson), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>XML\u8F6CJSON</p><p class="text-xs text-muted-foreground"${_scopeId}>XML\u8F6C\u6362\u4E3AJSON</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileJson), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "XML\u8F6CJSON"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "XML\u8F6C\u6362\u4E3AJSON")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/json-path",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileJson), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSONPath\u67E5\u8BE2</p><p class="text-xs text-muted-foreground"${_scopeId}>JSON\u8DEF\u5F84\u67E5\u8BE2</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileJson), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSONPath\u67E5\u8BE2"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "JSON\u8DEF\u5F84\u67E5\u8BE2")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/xpath-tester.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=xpath-tester-xlB4APAz.mjs.map
