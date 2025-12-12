import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
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
  __name: "yaml-formatter",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const tool = tools.find((t) => t.id === "yaml-converter");
    categories.find((c) => c.id === "format");
    const inputData = ref("");
    const outputData = ref("");
    const inputError = ref("");
    const inputFormat = ref("yaml");
    const outputFormat = ref("json");
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
        (t) => t.category === "format" && t.id !== "yaml-converter"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "xml-formatter"),
        tools.find((t) => t.id === "sql-formatter"),
        tools.find((t) => t.id === "base64-encoder")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const getButtonText = () => {
      if (inputFormat.value === "yaml" && outputFormat.value === "json") {
        return "YAML \u8F6C JSON";
      } else if (inputFormat.value === "json" && outputFormat.value === "yaml") {
        return "JSON \u8F6C YAML";
      }
      return "\u8F6C\u6362";
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">YAML\u8F6C\u6362\u5668 - YAML\u4E0EJSON\u4E92\u8F6C\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF YAML Converter\u3002\u652F\u6301 YAML \u4E0E JSON \u683C\u5F0F\u4E92\u76F8\u8F6C\u6362\uFF0C\u683C\u5F0F\u5316\u3001\u9A8C\u8BC1 YAML \u8BED\u6CD5\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u7EDD\u5BF9\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F93\u5165YAML</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u7C98\u8D34 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u793A\u4F8B\u6570\u636E </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u8F93\u5165\u683C\u5F0F:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="yaml"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "yaml") : ssrLooseEqual(inputFormat.value, "yaml")) ? " selected" : ""}>YAML</option><option value="json"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "json") : ssrLooseEqual(inputFormat.value, "json")) ? " selected" : ""}>JSON</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u8F93\u51FA\u683C\u5F0F:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="json"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "json") : ssrLooseEqual(outputFormat.value, "json")) ? " selected" : ""}>JSON</option><option value="yaml"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "yaml") : ssrLooseEqual(outputFormat.value, "yaml")) ? " selected" : ""}>YAML</option></select></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm"${ssrRenderAttr("placeholder", inputFormat.value === "yaml" ? "\u5728\u6B64\u8F93\u5165YAML\u6570\u636E..." : "\u5728\u6B64\u8F93\u5165JSON\u6570\u636E...")}>${ssrInterpolate(inputData.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F6C\u6362\u7ED3\u679C</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u590D\u5236 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u4E0B\u8F7D\u6587\u4EF6 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u5168\u5C4F\u6A21\u5F0F </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputData.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">${ssrInterpolate(getButtonText())}</button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F YAML\uFF1F </h2><p class="text-muted-foreground mb-4"> YAML\uFF08YAML Ain&#39;t Markup Language\uFF09\u662F\u4E00\u79CD\u4EBA\u7C7B\u53EF\u8BFB\u7684\u6570\u636E\u5E8F\u5217\u5316\u683C\u5F0F\uFF0C\u5E38\u7528\u4E8E\u914D\u7F6E\u6587\u4EF6\u3001 \u6570\u636E\u4EA4\u6362\u548C\u5E94\u7528\u7A0B\u5E8F\u914D\u7F6E\u3002\u5B83\u4EE5\u5176\u7B80\u6D01\u6027\u548C\u6613\u8BFB\u6027\u800C\u95FB\u540D\uFF0C\u652F\u6301\u5217\u8868\u3001\u5B57\u5178\u3001\u6807\u91CF\u7B49\u6570\u636E\u7ED3\u6784\u3002 YAML \u4F7F\u7528\u7F29\u8FDB\u6765\u8868\u793A\u5C42\u7EA7\u5173\u7CFB\uFF0C\u907F\u514D\u4E86\u4F7F\u7528\u82B1\u62EC\u53F7\u548C\u6807\u7B7E\u7684\u590D\u6742\u6027\u3002 </p><p class="text-muted-foreground"> YAML \u4E0E JSON \u53EF\u4EE5\u4E92\u76F8\u8F6C\u6362\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u90FD\u8868\u793A\u76F8\u540C\u7684\u6570\u636E\u7ED3\u6784\u3002YAML \u66F4\u52A0\u4EBA\u7C7B\u53CB\u597D\uFF0C \u800C JSON \u66F4\u52A0\u673A\u5668\u53CB\u597D\u3002\u5728 DevOps\u3001\u5BB9\u5668\u5316\u5E94\u7528\uFF08\u5982 Docker\u3001Kubernetes\uFF09\u4E2D\uFF0C YAML \u662F\u6807\u51C6\u7684\u914D\u7F6E\u683C\u5F0F\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u9009\u62E9\u8F93\u5165\u683C\u5F0F\uFF08YAML \u6216 JSON\uFF09</li><li>\u5C06\u6570\u636E\u7C98\u8D34\u5230\u5DE6\u4FA7\u8F93\u5165\u6846</li><li>\u9009\u62E9\u8F93\u51FA\u683C\u5F0F\uFF08JSON \u6216 YAML\uFF09</li><li>\u70B9\u51FB\u8F6C\u6362\u6309\u94AE\u6216\u4F7F\u7528\u5FEB\u6377\u952E Ctrl+Enter</li><li>\u67E5\u770B\u53F3\u4FA7\u8F6C\u6362\u7ED3\u679C\uFF0C\u53EF\u590D\u5236\u6216\u4E0B\u8F7D</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u53CC\u5411\u8F6C\u6362</strong>: \u652F\u6301 YAML \u5230 JSON \u548C JSON \u5230 YAML \u7684\u53CC\u5411\u8F6C\u6362</li><li><strong>\u8BED\u6CD5\u9A8C\u8BC1</strong>: \u81EA\u52A8\u68C0\u6D4B\u8F93\u5165\u6570\u636E\u7684\u8BED\u6CD5\u9519\u8BEF\u5E76\u63D0\u4F9B\u8BE6\u7EC6\u63D0\u793A</li><li><strong>\u683C\u5F0F\u7F8E\u5316</strong>: \u8F6C\u6362\u540E\u7684\u6570\u636E\u81EA\u52A8\u683C\u5F0F\u5316\uFF0C\u63D0\u9AD8\u53EF\u8BFB\u6027</li><li><strong>\u4FDD\u7559\u6CE8\u91CA</strong>: YAML \u5230 JSON \u8F6C\u6362\u65F6\u5C3D\u529B\u4FDD\u7559\u6CE8\u91CA\u4FE1\u606F</li><li><strong>\u672C\u5730\u5904\u7406</strong>: \u6240\u6709\u8F6C\u6362\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u786E\u4FDD\u6570\u636E\u5B89\u5168</li><li><strong>\u6279\u91CF\u8F6C\u6362</strong>: \u652F\u6301\u5927\u578B\u6587\u4EF6\u7684\u5FEB\u901F\u8F6C\u6362</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> YAML vs JSON </h2><div class="space-y-4 mb-6"><div><h3 class="text-lg font-semibold text-foreground mb-2">YAML \u4F18\u52BF\uFF1A</h3><ul class="list-disc list-inside text-muted-foreground ml-4"><li>\u66F4\u6613\u8BFB\uFF0C\u4F7F\u7528\u7F29\u8FDB\u4EE3\u66FF\u62EC\u53F7</li><li>\u652F\u6301\u6CE8\u91CA\uFF08# \u6CE8\u91CA\uFF09</li><li>\u652F\u6301\u591A\u884C\u5B57\u7B26\u4E32\u3001\u65E5\u671F\u7B49\u9AD8\u7EA7\u7C7B\u578B</li><li>\u66F4\u9002\u5408\u914D\u7F6E\u6587\u4EF6</li></ul></div><div><h3 class="text-lg font-semibold text-foreground mb-2">JSON \u4F18\u52BF\uFF1A</h3><ul class="list-disc list-inside text-muted-foreground ml-4"><li>\u89E3\u6790\u901F\u5EA6\u66F4\u5FEB</li><li>\u66F4\u4E25\u683C\u7684\u8BED\u6CD5\u89C4\u8303</li><li>\u539F\u751F\u652F\u6301\u4E8E\u5927\u591A\u6570\u7F16\u7A0B\u8BED\u8A00</li><li>\u66F4\u9002\u5408 API \u6570\u636E\u4EA4\u6362</li></ul></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">YAML \u8F6C\u6362\u4E3A JSON \u4F1A\u4E22\u5931\u4EC0\u4E48\uFF1F</h3><p class="text-muted-foreground mt-1"> YAML \u8F6C\u6362\u4E3A JSON \u65F6\u53EF\u80FD\u4F1A\u4E22\u5931\uFF1A\u6CE8\u91CA\u3001\u591A\u884C\u5B57\u7B26\u4E32\u7684\u7CBE\u786E\u683C\u5F0F\u3001\u65E5\u671F\u7C7B\u578B\u7B49\u3002 \u8FD9\u4E9B\u662F JSON \u683C\u5F0F\u4E0D\u652F\u6301\u7684\u7279\u6027\u3002\u5982\u679C\u9700\u8981\u4FDD\u7559\u8FD9\u4E9B\u4FE1\u606F\uFF0C\u5EFA\u8BAE\u7EE7\u7EED\u4F7F\u7528 YAML \u683C\u5F0F\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u9009\u62E9 YAML \u800C\u4E0D\u662F JSON\uFF1F</h3><p class="text-muted-foreground mt-1"> YAML \u66F4\u9002\u5408\u4EBA\u7C7B\u7F16\u8F91\u548C\u9605\u8BFB\uFF0C\u7279\u522B\u662F\u914D\u7F6E\u6587\u4EF6\u3002\u5B83\u652F\u6301\u6CE8\u91CA\u8BA9\u914D\u7F6E\u66F4\u6613\u7406\u89E3\uFF0C \u7F29\u8FDB\u7ED3\u6784\u8BA9\u5C42\u7EA7\u5173\u7CFB\u4E00\u76EE\u4E86\u7136\u3002\u800C JSON \u66F4\u9002\u5408\u673A\u5668\u5904\u7406\u548C\u7F51\u7EDC\u4F20\u8F93\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">YAML \u7684\u7F29\u8FDB\u6709\u4EC0\u4E48\u8981\u6C42\uFF1F</h3><p class="text-muted-foreground mt-1"> YAML \u4F7F\u7528\u7A7A\u683C\u8FDB\u884C\u7F29\u8FDB\uFF0C\u4E0D\u80FD\u4F7F\u7528 Tab\u3002\u5EFA\u8BAE\u4F7F\u7528 2 \u4E2A\u7A7A\u683C\u4F5C\u4E3A\u6807\u51C6\u7F29\u8FDB\u3002 \u540C\u4E00\u7EA7\u522B\u7684\u5143\u7D20\u5FC5\u987B\u4FDD\u6301\u76F8\u540C\u7684\u7F29\u8FDB\u91CF\uFF0C\u7F29\u8FDB\u9519\u8BEF\u4F1A\u5BFC\u81F4\u89E3\u6790\u5931\u8D25\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/yaml-formatter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=yaml-formatter-Ds4VRPyA.mjs.map
