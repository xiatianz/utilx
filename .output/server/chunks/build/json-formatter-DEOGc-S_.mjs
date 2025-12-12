import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { HelpCircle, ChevronUp, GitBranch, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Wifi, Type, Clock, Shield, Lock, FileText } from 'lucide-vue-next';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { e as addRecentTool } from './server.mjs';
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
  __name: "json-formatter",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const tool = tools.find((t) => t.id === "json-formatter");
    categories.find((c) => c.id === "format");
    const inputJSON = ref("");
    const outputJSON = ref("");
    const inputError = ref("");
    const indentSize = ref("2");
    const autoFix = ref(false);
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
        (t) => t.category === "format" && t.id !== "json-formatter"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "xml-formatter"),
        tools.find((t) => t.id === "yaml-converter"),
        tools.find((t) => t.id === "base64-encoder"),
        tools.find((t) => t.id === "url-encoder")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">JSON\u683C\u5F0F\u5316 - \u5728\u7EBFJSON\u89E3\u6790\u3001\u9A8C\u8BC1\u4E0E\u7F8E\u5316\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF JSON Formatter\u3002\u652F\u6301\u4E00\u952E\u7F8E\u5316\u3001\u538B\u7F29\u3001\u8BED\u6CD5\u9519\u8BEF\u68C0\u6D4B\u53CA\u6811\u5F62\u89C6\u56FE\u5C55\u793A\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u7EDD\u5BF9\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F93\u5165JSON</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u7C98\u8D34 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u793A\u4F8B\u6570\u636E </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u7F29\u8FDB:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="2"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "2") : ssrLooseEqual(indentSize.value, "2")) ? " selected" : ""}>2\u7A7A\u683C</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "4") : ssrLooseEqual(indentSize.value, "4")) ? " selected" : ""}>4\u7A7A\u683C</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u81EA\u52A8\u4FEE\u590D:</label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(autoFix.value) ? ssrLooseContain(autoFix.value, null) : autoFix.value) ? " checked" : ""} class="rounded"></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="\u5728\u6B64\u8F93\u5165JSON\u6570\u636E...">${ssrInterpolate(inputJSON.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F93\u51FA\u7ED3\u679C</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u590D\u5236 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u4E0B\u8F7DJSON </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u5168\u5C4F\u6A21\u5F0F </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputJSON.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> \u683C\u5F0F\u5316 JSON </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F JSON \u683C\u5F0F\u5316\uFF1F </h2><p class="text-muted-foreground mb-4"> JSON (JavaScript Object Notation) \u662F\u4E00\u79CD\u8F7B\u91CF\u7EA7\u7684\u6570\u636E\u4EA4\u6362\u683C\u5F0F\uFF0C\u6613\u4E8E\u4EBA\u9605\u8BFB\u548C\u7F16\u5199\uFF0C\u540C\u65F6\u4E5F\u6613\u4E8E\u673A\u5668\u89E3\u6790\u548C\u751F\u6210\u3002 \u5B83\u57FA\u4E8E JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999 \u7684\u4E00\u4E2A\u5B50\u96C6\u3002 JSON \u91C7\u7528\u5B8C\u5168\u72EC\u7ACB\u4E8E\u8BED\u8A00\u7684\u6587\u672C\u683C\u5F0F\uFF0C\u4F46\u662F\u4E5F\u4F7F\u7528\u4E86\u7C7B\u4F3C\u4E8E C \u8BED\u8A00\u5BB6\u65CF\u7684\u4E60\u60EF\uFF08\u5305\u62EC C, C++, C#, Java, JavaScript, Perl, Python \u7B49\uFF09\u3002 \u8FD9\u4E9B\u7279\u6027\u4F7F JSON \u6210\u4E3A\u7406\u60F3\u7684\u6570\u636E\u4EA4\u6362\u8BED\u8A00\u3002 </p><p class="text-muted-foreground"> \u4E3A\u4EC0\u4E48\u9700\u8981\u683C\u5F0F\u5316 JSON\uFF1F\u56E0\u4E3A\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u4E3A\u4E86\u8282\u7701\u4F20\u8F93\u5E26\u5BBD\uFF0CJSON \u6570\u636E\u901A\u5E38\u4F1A\u88AB\u538B\u7F29\u6210\u4E00\u884C\uFF0C \u8FD9\u4F7F\u5F97\u5F00\u53D1\u8005\u5728\u8C03\u8BD5\u548C\u67E5\u770B\u65F6\u975E\u5E38\u56F0\u96BE\u3002JSON \u683C\u5F0F\u5316\u5DE5\u5177\u53EF\u4EE5\u5C06\u538B\u7F29\u7684 JSON \u6570\u636E\u8F6C\u6362\u4E3A\u5177\u6709\u9002\u5F53\u7F29\u8FDB\u548C\u6362\u884C\u7684\u53EF\u8BFB\u683C\u5F0F\uFF0C \u65B9\u4FBF\u5F00\u53D1\u8005\u67E5\u770B\u548C\u8C03\u8BD5\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5C06\u60A8\u7684 JSON \u5B57\u7B26\u4E32\u7C98\u8D34\u5230\u5DE6\u4FA7\u8F93\u5165\u6846</li><li>\u70B9\u51FB\u9876\u90E8\u7684&quot;\u683C\u5F0F\u5316&quot;\u6309\u94AE\u6216\u4F7F\u7528\u5FEB\u6377\u952E Ctrl+Enter</li><li>\u67E5\u770B\u53F3\u4FA7\u7684\u9AD8\u4EAE\u4EE3\u7801\uFF0C\u6216\u70B9\u51FB&quot;\u590D\u5236&quot;\u5BFC\u51FA</li><li>\u5982\u6709\u9700\u8981\uFF0C\u53EF\u4EE5\u8C03\u6574\u7F29\u8FDB\u5927\u5C0F\u6216\u542F\u7528\u81EA\u52A8\u4FEE\u590D\u529F\u80FD</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u8BED\u6CD5\u9AD8\u4EAE</strong>: \u533A\u5206 Key \u548C Value \u7684\u989C\u8272\uFF0C\u8BA9\u4EE3\u7801\u7ED3\u6784\u66F4\u6E05\u6670</li><li><strong>\u9519\u8BEF\u5B9A\u4F4D</strong>: \u5FEB\u901F\u53D1\u73B0 JSON \u4E2D\u7684\u8BED\u6CD5\u9519\u8BEF\uFF0C\u5E76\u63D0\u4F9B\u8BE6\u7EC6\u7684\u9519\u8BEF\u4FE1\u606F</li><li><strong>\u672C\u5730\u5B89\u5168</strong>: \u6240\u6709\u5904\u7406\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u670D\u52A1\u5668\uFF0C\u786E\u4FDD\u9690\u79C1\u5B89\u5168</li><li><strong>\u591A\u79CD\u7F29\u8FDB</strong>: \u652F\u6301 2 \u7A7A\u683C\u6216 4 \u7A7A\u683C\u7F29\u8FDB\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u7F16\u7801\u89C4\u8303</li><li><strong>\u81EA\u52A8\u4FEE\u590D</strong>: \u667A\u80FD\u4FEE\u590D\u5E38\u89C1\u7684 JSON \u8BED\u6CD5\u9519\u8BEF</li><li><strong>\u5FEB\u6377\u64CD\u4F5C</strong>: \u652F\u6301\u5FEB\u6377\u952E\u64CD\u4F5C\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u5728\u7EBF JSON \u683C\u5F0F\u5316\u5B89\u5168\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u7EDD\u5BF9\u5B89\u5168\u3002\u6211\u4EEC\u7684 JSON \u683C\u5F0F\u5316\u5DE5\u5177\u91C7\u7528\u7EAF\u524D\u7AEF\u6280\u672F\u5B9E\u73B0\uFF0C\u6240\u6709\u5904\u7406\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C \u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u4EFB\u4F55\u670D\u52A1\u5668\u3002\u6211\u4EEC\u4F7F\u7528 WebAssembly \u548C JavaScript \u6280\u672F\u786E\u4FDD\u6570\u636E\u5904\u7406\u7684\u5B89\u5168\u6027\u548C\u9AD8\u6548\u6027\uFF0C \u60A8\u53EF\u4EE5\u653E\u5FC3\u4F7F\u7528\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">JSON \u548C XML \u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h3><p class="text-muted-foreground mt-1"> JSON \u548C XML \u90FD\u662F\u6570\u636E\u4EA4\u6362\u683C\u5F0F\uFF0C\u4F46\u5B83\u4EEC\u6709\u4E00\u4E9B\u91CD\u8981\u533A\u522B\uFF1A JSON \u66F4\u52A0\u8F7B\u91CF\u7EA7\uFF0C\u8BED\u6CD5\u66F4\u7B80\u6D01\uFF1BXML \u4F7F\u7528\u6807\u7B7E\u6807\u8BB0\u6570\u636E\uFF0C\u800C JSON \u4F7F\u7528\u952E\u503C\u5BF9\uFF1B JSON \u89E3\u6790\u901F\u5EA6\u66F4\u5FEB\uFF0C\u5360\u7528\u5E26\u5BBD\u66F4\u5C11\uFF1BJSON \u539F\u751F\u652F\u6301\u6570\u7EC4\u548C\u5BF9\u8C61\u7ED3\u6784\uFF0C\u800C XML \u9700\u8981\u989D\u5916\u7684\u7EA6\u5B9A\u3002 \u5BF9\u4E8E Web \u5E94\u7528\u5F00\u53D1\uFF0CJSON \u901A\u5E38\u662F\u66F4\u597D\u7684\u9009\u62E9\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u683C\u5F0F\u5316\u540E\u7684 JSON \u4E3A\u4EC0\u4E48\u6BD4\u539F\u59CB\u6570\u636E\u5927\uFF1F</h3><p class="text-muted-foreground mt-1"> \u8FD9\u662F\u6B63\u5E38\u73B0\u8C61\u3002\u539F\u59CB JSON \u901A\u5E38\u4E3A\u4E86\u8282\u7701\u4F20\u8F93\u5E26\u5BBD\u800C\u88AB\u538B\u7F29\u6210\u4E00\u884C\uFF0C \u683C\u5F0F\u5316\u8FC7\u7A0B\u4F1A\u6DFB\u52A0\u7F29\u8FDB\u548C\u6362\u884C\u7B26\u6765\u63D0\u9AD8\u53EF\u8BFB\u6027\uFF0C\u56E0\u6B64\u6587\u4EF6\u5927\u5C0F\u4F1A\u589E\u52A0\u3002 \u8FD9\u79CD\u589E\u52A0\u662F\u4E3A\u4E86\u63D0\u9AD8\u5F00\u53D1\u8005\u7684\u53EF\u8BFB\u6027\uFF0C\u800C\u4E0D\u662F\u6570\u636E\u672C\u8EAB\u7684\u81A8\u80C0\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/json-formatter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=json-formatter-DEOGc-S_.mjs.map
