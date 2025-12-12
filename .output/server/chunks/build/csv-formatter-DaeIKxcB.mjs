import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
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
  __name: "csv-formatter",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const tool = tools.find((t) => t.id === "csv-formatter");
    categories.find((c) => c.id === "format");
    const inputCSV = ref("");
    const csvData = ref([]);
    const formattedOutput = ref("");
    const inputError = ref("");
    const delimiter = ref(",");
    const hasHeader = ref(true);
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
        (t) => t.category === "format" && t.id !== "csv-formatter"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "json-to-csv"),
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">CSV\u683C\u5F0F\u5316 - \u5728\u7EBFCSV\u7F8E\u5316\u4E0E\u8868\u683C\u9884\u89C8\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF CSV Formatter\u3002\u652F\u6301\u7F8E\u5316CSV\u6570\u636E\uFF0C\u81EA\u52A8\u8BC6\u522B\u5206\u9694\u7B26\uFF0C\u8868\u683C\u9884\u89C8\uFF0C\u5BFC\u51FA\u683C\u5F0F\u5316\u540E\u7684CSV\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u7EDD\u5BF9\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F93\u5165CSV</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u7C98\u8D34 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u793A\u4F8B\u6570\u636E </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u5206\u9694\u7B26:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value=","${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, ",") : ssrLooseEqual(delimiter.value, ",")) ? " selected" : ""}>\u9017\u53F7 (,)</option><option value=";"${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, ";") : ssrLooseEqual(delimiter.value, ";")) ? " selected" : ""}>\u5206\u53F7 (;)</option><option value="\\t"${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, "\\t") : ssrLooseEqual(delimiter.value, "\\t")) ? " selected" : ""}>Tab</option><option value="|"${ssrIncludeBooleanAttr(Array.isArray(delimiter.value) ? ssrLooseContain(delimiter.value, "|") : ssrLooseEqual(delimiter.value, "|")) ? " selected" : ""}>\u7AD6\u7EBF (|)</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u5305\u542B\u6807\u9898\u884C:</label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(hasHeader.value) ? ssrLooseContain(hasHeader.value, null) : hasHeader.value) ? " checked" : ""} class="rounded"></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="\u5728\u6B64\u8F93\u5165CSV\u6570\u636E...">${ssrInterpolate(inputCSV.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u9884\u89C8\u7ED3\u679C</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u590D\u5236CSV </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u4E0B\u8F7DCSV </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u5168\u5C4F\u6A21\u5F0F </button></div></div><div class="flex-1 w-full min-h-[300px] bg-muted border border-border rounded-lg overflow-auto">`);
      if (csvData.value.length) {
        _push(`<table class="w-full">`);
        if (hasHeader.value && csvData.value[0]) {
          _push(`<thead><tr class="bg-accent"><!--[-->`);
          ssrRenderList(csvData.value[0], (header) => {
            _push(`<th class="px-4 py-2 text-left text-sm font-medium border-b border-border sticky top-0 bg-accent">${ssrInterpolate(header)}</th>`);
          });
          _push(`<!--]--></tr></thead>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<tbody><!--[-->`);
        ssrRenderList(hasHeader.value ? csvData.value.slice(1) : csvData.value, (row, index) => {
          _push(`<tr class="hover:bg-accent/50"><!--[-->`);
          ssrRenderList(row, (cell, cellIndex) => {
            _push(`<td class="px-4 py-2 text-sm border-b border-border">${ssrInterpolate(cell)}</td>`);
          });
          _push(`<!--]--></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      } else {
        _push(`<pre class="p-4 font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(formattedOutput.value || "\u7B49\u5F85\u8F93\u5165CSV\u6570\u636E...")}</pre>`);
      }
      _push(`</div></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> \u683C\u5F0F\u5316\u5E76\u9884\u89C8 </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F CSV \u683C\u5F0F\u5316\uFF1F </h2><p class="text-muted-foreground mb-4"> CSV (Comma-Separated Values) \u662F\u4E00\u79CD\u901A\u7528\u7684\u3001\u76F8\u5BF9\u7B80\u5355\u7684\u6587\u4EF6\u683C\u5F0F\uFF0C\u88AB\u5E7F\u6CDB\u7528\u4E8E\u5B58\u50A8\u548C\u4EA4\u6362\u8868\u683C\u6570\u636E\u3002 CSV \u6587\u4EF6\u4EE5\u7EAF\u6587\u672C\u5F62\u5F0F\u5B58\u50A8\u6570\u636E\uFF0C\u901A\u5E38\u6BCF\u6761\u8BB0\u5F55\u5360\u4E00\u884C\uFF0C\u8BB0\u5F55\u4E2D\u7684\u5B57\u6BB5\u7531\u5206\u9694\u7B26\uFF08\u901A\u5E38\u662F\u9017\u53F7\uFF09\u5206\u9694\u3002 \u5B83\u662F\u4E00\u79CD\u7B80\u5355\u4F46\u529F\u80FD\u5F3A\u5927\u7684\u6570\u636E\u4EA4\u6362\u683C\u5F0F\uFF0C\u53EF\u4EE5\u88AB\u51E0\u4E4E\u6240\u6709\u7684\u7535\u5B50\u8868\u683C\u7A0B\u5E8F\uFF08\u5982 Excel\uFF09\u548C\u6570\u636E\u5E93\u7CFB\u7EDF\u5BFC\u5165\u5BFC\u51FA\u3002 </p><p class="text-muted-foreground"> \u4E3A\u4EC0\u4E48\u9700\u8981\u683C\u5F0F\u5316 CSV\uFF1F\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0CCSV \u6570\u636E\u53EF\u80FD\u683C\u5F0F\u6DF7\u4E71\uFF0C\u5B57\u6BB5\u4E0D\u5BF9\u9F50\uFF0C\u5305\u542B\u4E0D\u5FC5\u8981\u7684\u7A7A\u683C\u7B49\u3002 CSV \u683C\u5F0F\u5316\u5DE5\u5177\u53EF\u4EE5\u7F8E\u5316 CSV \u6570\u636E\uFF0C\u4F7F\u5176\u66F4\u6613\u8BFB\uFF0C\u5E76\u63D0\u4F9B\u8868\u683C\u9884\u89C8\u529F\u80FD\uFF0C\u65B9\u4FBF\u67E5\u770B\u548C\u7F16\u8F91\u6570\u636E\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5C06\u60A8\u7684 CSV \u6570\u636E\u7C98\u8D34\u5230\u5DE6\u4FA7\u8F93\u5165\u6846</li><li>\u9009\u62E9\u5408\u9002\u7684\u5206\u9694\u7B26\uFF08\u9017\u53F7\u3001\u5206\u53F7\u3001Tab\u6216\u7AD6\u7EBF\uFF09</li><li>\u52FE\u9009\u662F\u5426\u5305\u542B\u6807\u9898\u884C\uFF08\u7B2C\u4E00\u884C\u4F5C\u4E3A\u5217\u540D\uFF09</li><li>\u70B9\u51FB&quot;\u683C\u5F0F\u5316\u5E76\u9884\u89C8&quot;\u6309\u94AE\u6216\u4F7F\u7528\u5FEB\u6377\u952E Ctrl+Enter</li><li>\u67E5\u770B\u53F3\u4FA7\u8868\u683C\u9884\u89C8\uFF0C\u6216\u70B9\u51FB&quot;\u590D\u5236CSV&quot;\u5BFC\u51FA\u683C\u5F0F\u5316\u540E\u7684\u6570\u636E</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u667A\u80FD\u8BC6\u522B\u5206\u9694\u7B26</strong>: \u652F\u6301\u591A\u79CD\u5E38\u7528\u5206\u9694\u7B26\uFF0C\u81EA\u52A8\u9002\u5E94\u4E0D\u540C\u683C\u5F0F\u7684CSV\u6587\u4EF6</li><li><strong>\u8868\u683C\u9884\u89C8</strong>: \u5C06CSV\u6570\u636E\u4EE5\u8868\u683C\u5F62\u5F0F\u5C55\u793A\uFF0C\u66F4\u76F4\u89C2\u5730\u67E5\u770B\u6570\u636E\u7ED3\u6784</li><li><strong>\u6807\u9898\u884C\u652F\u6301</strong>: \u53EF\u9009\u62E9\u662F\u5426\u5C06\u7B2C\u4E00\u884C\u4F5C\u4E3A\u5217\u6807\u9898\uFF0C\u4F7F\u8868\u683C\u66F4\u6E05\u6670</li><li><strong>\u6570\u636E\u7F8E\u5316</strong>: \u81EA\u52A8\u6574\u7406\u683C\u5F0F\uFF0C\u53BB\u9664\u591A\u4F59\u7A7A\u683C\uFF0C\u5BF9\u9F50\u6570\u636E\u5217</li><li><strong>\u672C\u5730\u5B89\u5168</strong>: \u6240\u6709\u5904\u7406\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u670D\u52A1\u5668</li><li><strong>\u5BFC\u51FA\u529F\u80FD</strong>: \u652F\u6301\u590D\u5236\u548C\u4E0B\u8F7D\u683C\u5F0F\u5316\u540E\u7684CSV\u6587\u4EF6</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u5728\u7EBF CSV \u683C\u5F0F\u5316\u5B89\u5168\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u7EDD\u5BF9\u5B89\u5168\u3002\u6211\u4EEC\u7684 CSV \u683C\u5F0F\u5316\u5DE5\u5177\u91C7\u7528\u7EAF\u524D\u7AEF\u6280\u672F\u5B9E\u73B0\uFF0C\u6240\u6709\u5904\u7406\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C \u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u4EFB\u4F55\u670D\u52A1\u5668\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u5B83\u5904\u7406\u5305\u542B\u654F\u611F\u4FE1\u606F\u7684 CSV \u6570\u636E\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u652F\u6301\u54EA\u4E9B CSV \u5206\u9694\u7B26\uFF1F</h3><p class="text-muted-foreground mt-1"> \u672C\u5DE5\u5177\u652F\u6301\u6700\u5E38\u7528\u7684\u51E0\u79CD\u5206\u9694\u7B26\uFF1A\u9017\u53F7\uFF08,\uFF09\u3001\u5206\u53F7\uFF08;\uFF09\u3001Tab\u5236\u8868\u7B26\u548C\u7AD6\u7EBF\uFF08|\uFF09\u3002 \u5982\u679C\u60A8\u7684CSV\u4F7F\u7528\u4E86\u5176\u4ED6\u5206\u9694\u7B26\uFF0C\u53EF\u4EE5\u5728\u683C\u5F0F\u5316\u540E\u624B\u52A8\u66FF\u6362\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u5904\u7406\u5305\u542B\u9017\u53F7\u7684\u5B57\u6BB5\uFF1F</h3><p class="text-muted-foreground mt-1"> \u6807\u51C6\u7684CSV\u683C\u5F0F\u4F7F\u7528\u53CC\u5F15\u53F7\u5305\u56F4\u5305\u542B\u5206\u9694\u7B26\u7684\u5B57\u6BB5\u3002\u4F8B\u5982\uFF1A&quot;John, Doe&quot;\u3002 \u672C\u5DE5\u5177\u4F1A\u6B63\u786E\u5904\u7406\u8FD9\u79CD\u60C5\u51B5\uFF0C\u786E\u4FDD\u9017\u53F7\u88AB\u8BC6\u522B\u4E3A\u5B57\u6BB5\u5185\u5BB9\u800C\u975E\u5206\u9694\u7B26\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/csv-formatter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=csv-formatter-DaeIKxcB.mjs.map
