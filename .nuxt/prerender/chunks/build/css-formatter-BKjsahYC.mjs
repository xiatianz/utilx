import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';
import { HelpCircle, ChevronUp, GitBranch, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Wifi, Type, Clock, Shield, Lock, FileText } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { e as addRecentTool } from './server.mjs';
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
  __name: "css-formatter",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const tool = tools.find((t) => t.id === "css-formatter");
    categories.find((c) => c.id === "format");
    const inputCSS = ref("");
    const outputCSS = ref("");
    const inputError = ref("");
    const indentSize = ref("2");
    const compressMode = ref(false);
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
        (t) => t.category === "format" && t.id !== "css-formatter"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "html-formatter"),
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "xml-formatter"),
        tools.find((t) => t.id === "base64-encoder")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">CSS\u683C\u5F0F\u5316 - \u5728\u7EBFCSS\u7F8E\u5316\u4E0E\u538B\u7F29\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF CSS Formatter\u3002\u652F\u6301\u4E00\u952E\u7F8E\u5316\u3001\u538B\u7F29CSS\u4EE3\u7801\uFF0C\u81EA\u52A8\u8C03\u6574\u7F29\u8FDB\uFF0C\u89C4\u8303CSS\u683C\u5F0F\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u7EDD\u5BF9\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F93\u5165CSS</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u7C98\u8D34 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u793A\u4F8B\u6570\u636E </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u7F29\u8FDB:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="2"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "2") : ssrLooseEqual(indentSize.value, "2")) ? " selected" : ""}>2\u7A7A\u683C</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "4") : ssrLooseEqual(indentSize.value, "4")) ? " selected" : ""}>4\u7A7A\u683C</option><option value="tab"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "tab") : ssrLooseEqual(indentSize.value, "tab")) ? " selected" : ""}>Tab</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u538B\u7F29\u6A21\u5F0F:</label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(compressMode.value) ? ssrLooseContain(compressMode.value, null) : compressMode.value) ? " checked" : ""} class="rounded"></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="\u5728\u6B64\u8F93\u5165CSS\u4EE3\u7801...">${ssrInterpolate(inputCSS.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F93\u51FA\u7ED3\u679C</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u590D\u5236 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u4E0B\u8F7DCSS </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u5168\u5C4F\u6A21\u5F0F </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputCSS.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> \u683C\u5F0F\u5316 CSS </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F CSS \u683C\u5F0F\u5316\uFF1F </h2><p class="text-muted-foreground mb-4"> CSS (Cascading Style Sheets) \u662F\u4E00\u79CD\u7528\u6765\u8868\u73B0HTML\u6216XML\u7B49\u6587\u4EF6\u6837\u5F0F\u7684\u8BA1\u7B97\u673A\u8BED\u8A00\u3002 \u5B83\u4E0D\u4EC5\u53EF\u4EE5\u9759\u6001\u5730\u4FEE\u9970\u7F51\u9875\uFF0C\u8FD8\u53EF\u4EE5\u914D\u5408\u5404\u79CD\u811A\u672C\u8BED\u8A00\u52A8\u6001\u5730\u5BF9\u7F51\u9875\u5404\u5143\u7D20\u8FDB\u884C\u683C\u5F0F\u5316\u3002 CSS \u80FD\u591F\u5BF9\u7F51\u9875\u4E2D\u5143\u7D20\u4F4D\u7F6E\u7684\u6392\u7248\u8FDB\u884C\u50CF\u7D20\u7EA7\u7CBE\u786E\u63A7\u5236\uFF0C\u652F\u6301\u51E0\u4E4E\u6240\u6709\u7684\u5B57\u4F53\u5B57\u53F7\u6837\u5F0F\uFF0C \u62E5\u6709\u5BF9\u7F51\u9875\u5BF9\u8C61\u548C\u6A21\u578B\u6837\u5F0F\u7F16\u8F91\u7684\u80FD\u529B\u3002 </p><p class="text-muted-foreground"> \u4E3A\u4EC0\u4E48\u9700\u8981\u683C\u5F0F\u5316 CSS\uFF1F\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u4E3A\u4E86\u8282\u7701\u7F51\u7EDC\u4F20\u8F93\u5E26\u5BBD\uFF0CCSS \u4EE3\u7801\u901A\u5E38\u4F1A\u88AB\u538B\u7F29\u6210\u4E00\u884C\uFF0C \u8FD9\u4F7F\u5F97\u5F00\u53D1\u8005\u5728\u9605\u8BFB\u548C\u7EF4\u62A4\u65F6\u975E\u5E38\u56F0\u96BE\u3002CSS \u683C\u5F0F\u5316\u5DE5\u5177\u53EF\u4EE5\u5C06\u538B\u7F29\u7684 CSS \u4EE3\u7801\u8F6C\u6362\u4E3A\u5177\u6709\u9002\u5F53\u7F29\u8FDB \u548C\u6362\u884C\u7684\u53EF\u8BFB\u683C\u5F0F\uFF0C\u65B9\u4FBF\u5F00\u53D1\u8005\u67E5\u770B\u548C\u8C03\u8BD5\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5C06\u60A8\u7684 CSS \u4EE3\u7801\u7C98\u8D34\u5230\u5DE6\u4FA7\u8F93\u5165\u6846</li><li>\u9009\u62E9\u7F29\u8FDB\u5927\u5C0F\uFF082\u7A7A\u683C\u30014\u7A7A\u683C\u6216Tab\uFF09</li><li>\u53EF\u9009\u62E9\u662F\u5426\u542F\u7528\u538B\u7F29\u6A21\u5F0F</li><li>\u70B9\u51FB&quot;\u683C\u5F0F\u5316 CSS&quot;\u6309\u94AE\u6216\u4F7F\u7528\u5FEB\u6377\u952E Ctrl+Enter</li><li>\u67E5\u770B\u53F3\u4FA7\u683C\u5F0F\u5316\u540E\u7684\u4EE3\u7801\uFF0C\u6216\u70B9\u51FB&quot;\u590D\u5236&quot;\u5BFC\u51FA</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u667A\u80FD\u683C\u5F0F\u5316</strong>: \u81EA\u52A8\u8BC6\u522B\u9009\u62E9\u5668\u3001\u5C5E\u6027\u548C\u503C\uFF0C\u5E76\u8FDB\u884C\u9002\u5F53\u7684\u7F29\u8FDB\u548C\u6362\u884C</li><li><strong>\u538B\u7F29\u9009\u9879</strong>: \u53EF\u9009\u62E9\u538B\u7F29\u6A21\u5F0F\uFF0C\u79FB\u9664\u4E0D\u5FC5\u8981\u7684\u7A7A\u683C\u548C\u6362\u884C</li><li><strong>\u591A\u79CD\u7F29\u8FDB</strong>: \u652F\u6301 2 \u7A7A\u683C\u30014 \u7A7A\u683C\u6216 Tab \u7F29\u8FDB</li><li><strong>\u8BED\u6CD5\u9AD8\u4EAE</strong>: \u81EA\u52A8\u8BC6\u522B CSS \u8BED\u6CD5\uFF0C\u63D0\u4F9B\u66F4\u597D\u7684\u53EF\u8BFB\u6027</li><li><strong>\u672C\u5730\u5B89\u5168</strong>: \u6240\u6709\u5904\u7406\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u670D\u52A1\u5668</li><li><strong>\u5FEB\u6377\u64CD\u4F5C</strong>: \u652F\u6301\u5FEB\u6377\u952E\u64CD\u4F5C\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u5728\u7EBF CSS \u683C\u5F0F\u5316\u5B89\u5168\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u7EDD\u5BF9\u5B89\u5168\u3002\u6211\u4EEC\u7684 CSS \u683C\u5F0F\u5316\u5DE5\u5177\u91C7\u7528\u7EAF\u524D\u7AEF\u6280\u672F\u5B9E\u73B0\uFF0C\u6240\u6709\u5904\u7406\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C \u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u4EFB\u4F55\u670D\u52A1\u5668\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u5B83\u5904\u7406\u5305\u542B\u654F\u611F\u4FE1\u606F\u7684 CSS \u4EE3\u7801\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u683C\u5F0F\u5316\u540E\u7684 CSS \u4E3A\u4EC0\u4E48\u6BD4\u539F\u59CB\u6570\u636E\u5927\uFF1F</h3><p class="text-muted-foreground mt-1"> \u8FD9\u662F\u6B63\u5E38\u73B0\u8C61\u3002\u539F\u59CB CSS \u901A\u5E38\u4E3A\u4E86\u8282\u7701\u4F20\u8F93\u5E26\u5BBD\u800C\u88AB\u538B\u7F29\u6210\u4E00\u884C\uFF0C \u683C\u5F0F\u5316\u8FC7\u7A0B\u4F1A\u6DFB\u52A0\u7F29\u8FDB\u548C\u6362\u884C\u7B26\u6765\u63D0\u9AD8\u53EF\u8BFB\u6027\uFF0C\u56E0\u6B64\u6587\u4EF6\u5927\u5C0F\u4F1A\u589E\u52A0\u3002 \u8FD9\u79CD\u589E\u52A0\u662F\u4E3A\u4E86\u63D0\u9AD8\u5F00\u53D1\u8005\u7684\u53EF\u8BFB\u6027\uFF0C\u800C\u4E0D\u662F\u6570\u636E\u672C\u8EAB\u7684\u81A8\u80C0\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u652F\u6301 CSS \u9884\u5904\u7406\u5668\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u672C\u5DE5\u5177\u4E3B\u8981\u7528\u4E8E\u683C\u5F0F\u5316\u6807\u51C6 CSS \u4EE3\u7801\u3002\u5BF9\u4E8E Sass\u3001Less\u3001Stylus \u7B49 CSS \u9884\u5904\u7406\u5668\uFF0C \u5EFA\u8BAE\u5148\u7F16\u8BD1\u6210\u6807\u51C6 CSS \u540E\u518D\u4F7F\u7528\u672C\u5DE5\u5177\u8FDB\u884C\u683C\u5F0F\u5316\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/css-formatter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=css-formatter-BKjsahYC.mjs.map
