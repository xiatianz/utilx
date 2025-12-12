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
  __name: "toml-formatter",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const tool = tools.find((t) => t.id === "toml-formatter");
    categories.find((c) => c.id === "format");
    const inputTOML = ref("");
    const outputTOML = ref("");
    const inputError = ref("");
    const indentSize = ref("2");
    const sortKeys = ref(false);
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
        (t) => t.category === "format" && t.id !== "toml-formatter"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "yaml-formatter"),
        tools.find((t) => t.id === "xml-formatter"),
        tools.find((t) => t.id === "yaml-converter")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">TOML\u683C\u5F0F\u5316 - \u5728\u7EBFTOML\u7F8E\u5316\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF TOML Formatter\u3002\u652F\u6301\u4E00\u952E\u7F8E\u5316\u3001\u683C\u5F0F\u5316TOML\u914D\u7F6E\u6587\u4EF6\uFF0C\u81EA\u52A8\u8C03\u6574\u7F29\u8FDB\uFF0C\u68C0\u67E5\u8BED\u6CD5\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u7EDD\u5BF9\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F93\u5165TOML</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u7C98\u8D34 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u793A\u4F8B\u6570\u636E </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u952E\u503C\u5BF9\u7F29\u8FDB:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="2"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "2") : ssrLooseEqual(indentSize.value, "2")) ? " selected" : ""}>2\u7A7A\u683C</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "4") : ssrLooseEqual(indentSize.value, "4")) ? " selected" : ""}>4\u7A7A\u683C</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u6392\u5E8F\u952E:</label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(sortKeys.value) ? ssrLooseContain(sortKeys.value, null) : sortKeys.value) ? " checked" : ""} class="rounded"></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="\u5728\u6B64\u8F93\u5165TOML\u6570\u636E...">${ssrInterpolate(inputTOML.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F93\u51FA\u7ED3\u679C</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u590D\u5236 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u4E0B\u8F7DTOML </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u5168\u5C4F\u6A21\u5F0F </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputTOML.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> \u683C\u5F0F\u5316 TOML </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F TOML \u683C\u5F0F\u5316\uFF1F </h2><p class="text-muted-foreground mb-4"> TOML (Tom&#39;s Obvious, Minimal Language) \u662F\u4E00\u79CD\u8BED\u4E49\u5316\u660E\u663E\u7684\u6700\u5C0F\u5316\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F\u3002 \u5B83\u65E8\u5728\u6210\u4E3A\u6613\u4E8E\u9605\u8BFB\u548C\u7F16\u5199\uFF0C\u540C\u65F6\u660E\u786E\u6620\u5C04\u5230\u5404\u79CD\u6570\u636E\u7C7B\u578B\u7684\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F\u3002 TOML \u7531 GitHub \u8054\u5408\u521B\u59CB\u4EBA Tom Preston-Werner \u521B\u5EFA\uFF0C\u88AB\u5E7F\u6CDB\u7528\u4E8E Rust\u3001Cargo\u3001 Python \u7B49\u751F\u6001\u7CFB\u7EDF\u4E2D\u7684\u914D\u7F6E\u6587\u4EF6\u3002 </p><p class="text-muted-foreground"> \u4E3A\u4EC0\u4E48\u9700\u8981\u683C\u5F0F\u5316 TOML\uFF1FTOML \u6587\u4EF6\u867D\u7136\u8BED\u6CD5\u7B80\u5355\uFF0C\u4F46\u5728\u591A\u4EBA\u534F\u4F5C\u6216\u624B\u52A8\u7F16\u8F91\u65F6\uFF0C \u53EF\u80FD\u4F1A\u51FA\u73B0\u683C\u5F0F\u4E0D\u4E00\u81F4\u7684\u95EE\u9898\u3002TOML \u683C\u5F0F\u5316\u5DE5\u5177\u53EF\u4EE5\u81EA\u52A8\u89C4\u8303\u5316\u683C\u5F0F\uFF0C \u786E\u4FDD\u7F29\u8FDB\u4E00\u81F4\u3001\u952E\u503C\u5BF9\u5BF9\u9F50\uFF0C\u4F7F\u914D\u7F6E\u6587\u4EF6\u66F4\u52A0\u6613\u8BFB\u6613\u7EF4\u62A4\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5C06\u60A8\u7684 TOML \u914D\u7F6E\u7C98\u8D34\u5230\u5DE6\u4FA7\u8F93\u5165\u6846</li><li>\u9009\u62E9\u952E\u503C\u5BF9\u7684\u7F29\u8FDB\u5927\u5C0F\uFF082\u7A7A\u683C\u62164\u7A7A\u683C\uFF09</li><li>\u53EF\u9009\u62E9\u662F\u5426\u5BF9\u952E\u8FDB\u884C\u5B57\u6BCD\u6392\u5E8F</li><li>\u70B9\u51FB&quot;\u683C\u5F0F\u5316 TOML&quot;\u6309\u94AE\u6216\u4F7F\u7528\u5FEB\u6377\u952E Ctrl+Enter</li><li>\u67E5\u770B\u53F3\u4FA7\u683C\u5F0F\u5316\u540E\u7684\u4EE3\u7801\uFF0C\u6216\u70B9\u51FB&quot;\u590D\u5236&quot;\u5BFC\u51FA</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u667A\u80FD\u683C\u5F0F\u5316</strong>: \u81EA\u52A8\u8BC6\u522B TOML \u7ED3\u6784\uFF0C\u8FDB\u884C\u6B63\u786E\u7684\u683C\u5F0F\u5316</li><li><strong>\u952E\u503C\u5BF9\u6392\u5E8F</strong>: \u53EF\u9009\u7684\u5B57\u6BCD\u6392\u5E8F\u529F\u80FD\uFF0C\u4F7F\u914D\u7F6E\u66F4\u6709\u5E8F</li><li><strong>\u7F29\u8FDB\u63A7\u5236</strong>: \u652F\u6301\u81EA\u5B9A\u4E49\u7F29\u8FDB\u5927\u5C0F\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u7F16\u7801\u89C4\u8303</li><li><strong>\u4FDD\u7559\u6CE8\u91CA</strong>: \u4FDD\u6301 TOML \u6CE8\u91CA\u7684\u5B8C\u6574\u6027</li><li><strong>\u8BED\u6CD5\u68C0\u67E5</strong>: \u57FA\u672C\u7684\u8BED\u6CD5\u9A8C\u8BC1\uFF0C\u5E2E\u52A9\u53D1\u73B0\u5E38\u89C1\u9519\u8BEF</li><li><strong>\u672C\u5730\u5B89\u5168</strong>: \u6240\u6709\u5904\u7406\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u4FDD\u62A4\u6570\u636E\u9690\u79C1</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u5728\u7EBF TOML \u683C\u5F0F\u5316\u5B89\u5168\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u7EDD\u5BF9\u5B89\u5168\u3002\u6211\u4EEC\u7684 TOML \u683C\u5F0F\u5316\u5DE5\u5177\u91C7\u7528\u7EAF\u524D\u7AEF\u6280\u672F\u5B9E\u73B0\uFF0C\u6240\u6709\u5904\u7406\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C \u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u4EFB\u4F55\u670D\u52A1\u5668\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u5B83\u5904\u7406\u5305\u542B\u654F\u611F\u914D\u7F6E\u4FE1\u606F\u7684 TOML \u6587\u4EF6\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">TOML \u548C\u5176\u4ED6\u914D\u7F6E\u683C\u5F0F\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h3><p class="text-muted-foreground mt-1"> TOML \u4ECB\u4E8E YAML \u548C INI \u4E4B\u95F4\uFF1A\u6BD4 INI \u66F4\u5F3A\u5927\uFF08\u652F\u6301\u6570\u7EC4\u3001\u5D4C\u5957\u7ED3\u6784\uFF09\uFF0C \u6BD4 YAML \u66F4\u7B80\u6D01\u660E\u786E\uFF08\u907F\u514D\u6B67\u4E49\u7684\u8BED\u6CD5\uFF09\u3002TOML \u7684\u8BBE\u8BA1\u76EE\u6807\u662F\u660E\u786E\u548C\u6700\u5C0F\u5316\uFF0C \u9002\u5408\u4F5C\u4E3A\u673A\u5668\u548C\u4EBA\u7C7B\u90FD\u53EF\u8BFB\u7684\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">TOML \u652F\u6301\u54EA\u4E9B\u6570\u636E\u7C7B\u578B\uFF1F</h3><p class="text-muted-foreground mt-1"> TOML \u652F\u6301\u5B57\u7B26\u4E32\u3001\u6574\u6570\u3001\u6D6E\u70B9\u6570\u3001\u5E03\u5C14\u503C\u3001\u65E5\u671F\u65F6\u95F4\u3001\u6570\u7EC4\u548C\u8868\uFF08\u5BF9\u8C61\uFF09\u3002 \u5B57\u7B26\u4E32\u53EF\u7528\u53CC\u5F15\u53F7\u6216\u5355\u5F15\u53F7\uFF0C\u652F\u6301\u591A\u884C\u5B57\u7B26\u4E32\u3002\u65E5\u671F\u65F6\u95F4\u9075\u5FAA RFC 3339 \u683C\u5F0F\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/toml-formatter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=toml-formatter-B4Bswecu.mjs.map
