import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderComponent, ssrLooseContain, ssrRenderList, ssrInterpolate } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { X, Regex, ArrowRight, FileText, Type } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { f as useSeoMeta } from './server.mjs';
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
import 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = {
  __name: "text-replace",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const outputText = ref("");
    const searchText = ref("");
    const replaceText = ref("");
    const replaceMode = ref("text");
    const replaceCount = ref(0);
    const copied = ref(false);
    const replaceHistory = ref([]);
    const regexOptions = ref({
      global: true,
      ignoreCase: false,
      multiline: false
    });
    const presetRules = [
      {
        name: "\u79FB\u9664\u591A\u4F59\u7A7A\u683C",
        mode: "regex",
        search: "\\s+",
        replace: " ",
        options: { global: true }
      },
      {
        name: "\u79FB\u9664\u7A7A\u884C",
        mode: "regex",
        search: "^\\s*$\\n",
        replace: "",
        options: { global: true, multiline: true }
      },
      {
        name: "\u9996\u5B57\u6BCD\u5927\u5199",
        mode: "regex",
        search: "\\b\\w",
        replace: (match) => match.toUpperCase(),
        options: { global: true }
      },
      {
        name: "\u6DFB\u52A0\u9017\u53F7",
        mode: "text",
        search: "\n",
        replace: ",\n",
        options: {}
      },
      {
        name: "\u79FB\u9664\u6240\u6709\u6570\u5B57",
        mode: "regex",
        search: "\\d",
        replace: "",
        options: { global: true }
      }
    ];
    const commonRegex = [
      { name: "\u90AE\u7BB1\u5730\u5740", pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}" },
      { name: "\u624B\u673A\u53F7", pattern: "1[3-9]\\d{9}" },
      { name: "URL\u94FE\u63A5", pattern: "https?://[^\\s]+" },
      { name: "IP\u5730\u5740", pattern: "\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b" },
      { name: "\u65E5\u671F", pattern: "\\d{4}-\\d{2}-\\d{2}" },
      { name: "\u4E2D\u6587\u5B57\u7B26", pattern: "[\\u4e00-\\u9fa5]+" }
    ];
    useSeoMeta({
      title: "\u6587\u672C\u66FF\u6362\u5DE5\u5177 - \u5728\u7EBF\u6279\u91CF\u67E5\u627E\u66FF\u6362\u6587\u672C",
      description: "\u514D\u8D39\u5728\u7EBF\u6587\u672C\u66FF\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u666E\u901A\u6587\u672C\u548C\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6279\u91CF\u67E5\u627E\u66FF\u6362\uFF0C\u63D0\u4F9B\u9884\u8BBE\u89C4\u5219\u548C\u5E38\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u3002",
      keywords: ["\u6587\u672C\u66FF\u6362", "\u67E5\u627E\u66FF\u6362", "\u6B63\u5219\u8868\u8FBE\u5F0F", "\u6279\u91CF\u66FF\u6362", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u6587\u672C\u66FF\u6362\u5DE5\u5177</h1><p class="text-muted-foreground">\u652F\u6301\u666E\u901A\u6587\u672C\u548C\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6279\u91CF\u6587\u672C\u67E5\u627E\u66FF\u6362\u529F\u80FD</p></div><div class="space-y-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u66FF\u6362\u914D\u7F6E</h2><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u66FF\u6362\u6A21\u5F0F</label><div class="flex gap-4"><label class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(replaceMode.value, "text")) ? " checked" : ""} value="text" class="mr-2"><span>\u666E\u901A\u6587\u672C</span></label><label class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(replaceMode.value, "regex")) ? " checked" : ""} value="regex" class="mr-2"><span>\u6B63\u5219\u8868\u8FBE\u5F0F</span></label></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label class="text-sm font-medium mb-2 block">\u67E5\u627E\u5185\u5BB9</label><div class="relative"><input${ssrRenderAttr("value", searchText.value)} placeholder="\u8BF7\u8F93\u5165\u8981\u67E5\u627E\u7684\u5185\u5BB9..." class="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">`);
      if (searchText.value) {
        _push(`<button class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><label class="text-sm font-medium mb-2 block">\u66FF\u6362\u5185\u5BB9</label><input${ssrRenderAttr("value", replaceText.value)} placeholder="\u8BF7\u8F93\u5165\u66FF\u6362\u5185\u5BB9..." class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></div></div>`);
      if (replaceMode.value === "regex") {
        _push(`<div class="flex flex-wrap gap-4"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(regexOptions.value.global) ? ssrLooseContain(regexOptions.value.global, null) : regexOptions.value.global) ? " checked" : ""} class="mr-2"><span>\u5168\u5C40\u5339\u914D (g)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(regexOptions.value.ignoreCase) ? ssrLooseContain(regexOptions.value.ignoreCase, null) : regexOptions.value.ignoreCase) ? " checked" : ""} class="mr-2"><span>\u5FFD\u7565\u5927\u5C0F\u5199 (i)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(regexOptions.value.multiline) ? ssrLooseContain(regexOptions.value.multiline, null) : regexOptions.value.multiline) ? " checked" : ""} class="mr-2"><span>\u591A\u884C\u6A21\u5F0F (m)</span></label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="text-sm font-medium mb-2 block">\u9884\u8BBE\u89C4\u5219</label><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(presetRules, (preset) => {
        _push(`<button class="px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded transition-colors">${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">\u8F93\u5165\u6587\u672C</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u7C98\u8D34 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u5904\u7406\u7684\u6587\u672C..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea><div class="text-sm text-muted-foreground"><span>${ssrInterpolate(inputText.value.length)} \u4E2A\u5B57\u7B26</span></div></div><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">\u8F93\u51FA\u7ED3\u679C</h2><div class="flex gap-2">`);
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u4E0B\u8F7D </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><textarea readonly placeholder="\u66FF\u6362\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC..." class="w-full h-64 p-4 bg-muted rounded-lg resize-none">${ssrInterpolate(outputText.value)}</textarea><div class="text-sm text-muted-foreground"><span>${ssrInterpolate(outputText.value.length)} \u4E2A\u5B57\u7B26</span>`);
      if (replaceCount.value > 0) {
        _push(`<span class="ml-2 text-primary"> \uFF08\u5DF2\u66FF\u6362 ${ssrInterpolate(replaceCount.value)} \u5904\uFF09 </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="flex justify-center gap-4"><button${ssrIncludeBooleanAttr(!inputText.value || !searchText.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> \u6267\u884C\u66FF\u6362 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> \u91CD\u7F6E </button></div>`);
      if (replaceHistory.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold">\u66FF\u6362\u5386\u53F2</h2><button class="text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A\u5386\u53F2 </button></div><div class="space-y-2"><!--[-->`);
        ssrRenderList(replaceHistory.value, (item, index) => {
          _push(`<div class="p-3 bg-muted rounded-lg text-sm"><div class="flex items-center justify-between mb-1"><span class="font-medium">${ssrInterpolate(item.mode === "regex" ? "\u6B63\u5219" : "\u6587\u672C")}\u66FF\u6362</span><span class="text-muted-foreground text-xs">${ssrInterpolate(item.time)}</span></div><div class="font-mono text-xs"> &quot;${ssrInterpolate(item.search)}&quot; \u2192 &quot;${ssrInterpolate(item.replace)}&quot; </div><div class="text-muted-foreground text-xs mt-1"> \u66FF\u6362\u4E86 ${ssrInterpolate(item.count)} \u5904 </div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5E38\u7528\u6B63\u5219\u8868\u8FBE\u5F0F</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(commonRegex, (regex) => {
        _push(`<div class="flex items-center justify-between p-3 bg-muted rounded-lg"><div><div class="font-medium text-sm">${ssrInterpolate(regex.name)}</div><div class="font-mono text-xs text-muted-foreground mt-1">${ssrInterpolate(regex.pattern)}</div></div><button class="px-3 py-1 text-sm bg-background hover:bg-background/80 rounded transition-colors"> \u4F7F\u7528 </button></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/regex-tester",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Regex), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5</p><p class="text-xs text-muted-foreground"${_scopeId}>\u6D4B\u8BD5\u6B63\u5219\u8868\u8FBE\u5F0F</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Regex), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6D4B\u8BD5\u6B63\u5219\u8868\u8FBE\u5F0F")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/text-counter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u5B57\u6570\u7EDF\u8BA1</p><p class="text-xs text-muted-foreground"${_scopeId}>\u7EDF\u8BA1\u6587\u672C\u4FE1\u606F</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5B57\u6570\u7EDF\u8BA1"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u7EDF\u8BA1\u6587\u672C\u4FE1\u606F")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/case-converter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Type), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u5927\u5C0F\u5199\u8F6C\u6362</p><p class="text-xs text-muted-foreground"${_scopeId}>\u8F6C\u6362\u6587\u672C\u683C\u5F0F</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Type), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5927\u5C0F\u5199\u8F6C\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u8F6C\u6362\u6587\u672C\u683C\u5F0F")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/text-replace.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=text-replace-C08P5Lyp.mjs.map
