import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { SortAsc, SortDesc, ArrowUpDown, Shuffle, Filter, Hash, MinusCircle, Search, FileText, ArrowRight, FileDiff } from 'lucide-vue-next';
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
  __name: "line-operations",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const outputText = ref("");
    const copied = ref(false);
    const operationHistory = ref([]);
    ref([]);
    const showFilter = ref(false);
    const filterMode = ref("include");
    const filterContent = ref("");
    const lineCount = computed(() => {
      if (!inputText.value) return 0;
      return inputText.value.split("\n").length;
    });
    const outputLineCount = computed(() => {
      if (!outputText.value) return 0;
      return outputText.value.split("\n").length;
    });
    const canUndo = computed(() => {
      return operationHistory.value.length > 0;
    });
    useSeoMeta({
      title: "\u884C\u64CD\u4F5C\u5DE5\u5177 - \u5728\u7EBF\u6587\u672C\u884C\u6392\u5E8F\u53BB\u91CD\u8FC7\u6EE4",
      description: "\u514D\u8D39\u5728\u7EBF\u6587\u672C\u884C\u64CD\u4F5C\u5DE5\u5177\uFF0C\u652F\u6301\u884C\u6392\u5E8F\u3001\u53BB\u91CD\u3001\u8FC7\u6EE4\u3001\u6DFB\u52A0\u884C\u53F7\u7B49\u529F\u80FD\uFF0C\u6279\u91CF\u5904\u7406\u6587\u672C\u884C\u3002",
      keywords: ["\u884C\u64CD\u4F5C", "\u6587\u672C\u6392\u5E8F", "\u53BB\u91CD", "\u8FC7\u6EE4", "\u6279\u91CF\u5904\u7406", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u884C\u64CD\u4F5C\u5DE5\u5177</h1><p class="text-muted-foreground">\u5BF9\u6587\u672C\u884C\u8FDB\u884C\u6392\u5E8F\u3001\u53BB\u91CD\u3001\u8FC7\u6EE4\u7B49\u6279\u91CF\u64CD\u4F5C</p></div><div class="space-y-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u64CD\u4F5C\u9009\u9879</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><div class="space-y-2"><h3 class="font-medium text-sm">\u6392\u5E8F</h3><div class="space-y-1"><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(SortAsc), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` \u5347\u5E8F\u6392\u5E8F </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(SortDesc), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` \u964D\u5E8F\u6392\u5E8F </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(ArrowUpDown), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` \u6309\u957F\u5EA6\u6392\u5E8F </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(Shuffle), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` \u968F\u673A\u6392\u5E8F </button></div></div><div class="space-y-2"><h3 class="font-medium text-sm">\u53BB\u91CD</h3><div class="space-y-1"><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(Filter), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` \u5220\u9664\u91CD\u590D\u884C </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(Filter), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` \u5FFD\u7565\u5927\u5C0F\u5199\u53BB\u91CD </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(Filter), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` \u53BB\u9664\u7A7A\u683C\u540E\u53BB\u91CD </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(Hash), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` \u53EA\u4FDD\u7559\u552F\u4E00\u884C </button></div></div><div class="space-y-2"><h3 class="font-medium text-sm">\u8FC7\u6EE4</h3><div class="space-y-1"><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(MinusCircle), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` \u5220\u9664\u7A7A\u884C </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(MinusCircle), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` \u5220\u9664\u7A7A\u767D\u884C </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(Search), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` \u6309\u5185\u5BB9\u8FC7\u6EE4 </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(ArrowUpDown), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` \u53CD\u8F6C\u884C\u987A\u5E8F </button></div></div></div><div class="mt-4 pt-4 border-t"><h3 class="font-medium text-sm mb-2">\u5176\u4ED6\u64CD\u4F5C</h3><div class="flex flex-wrap gap-2"><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> \u6DFB\u52A0\u884C\u53F7 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> \u79FB\u9664\u884C\u53F7 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> \u6DFB\u52A0\u524D\u7F00 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> \u6DFB\u52A0\u540E\u7F00 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> \u53BB\u9664\u9996\u5C3E\u7A7A\u683C </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> \u5408\u5E76\u4E3A\u4E00\u884C </button></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">\u8F93\u5165\u6587\u672C</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u7C98\u8D34 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u5904\u7406\u7684\u6587\u672C\uFF0C\u6BCF\u884C\u4E00\u4E2A\u6761\u76EE..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(inputText.value)}</textarea><div class="text-sm text-muted-foreground"><span>${ssrInterpolate(lineCount.value)} \u884C</span><span class="mx-2">\xB7</span><span>${ssrInterpolate(inputText.value.length)} \u4E2A\u5B57\u7B26</span></div></div><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">\u8F93\u51FA\u7ED3\u679C</h2><div class="flex gap-2">`);
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
      _push(`</div></div><textarea readonly placeholder="\u5904\u7406\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC..." class="w-full h-64 p-4 bg-muted rounded-lg resize-none font-mono text-sm">${ssrInterpolate(outputText.value)}</textarea><div class="text-sm text-muted-foreground"><span>${ssrInterpolate(outputLineCount.value)} \u884C</span><span class="mx-2">\xB7</span><span>${ssrInterpolate(outputText.value.length)} \u4E2A\u5B57\u7B26</span>`);
      if (outputText.value && lineCount.value !== outputLineCount.value) {
        _push(`<span class="ml-2 text-primary"> (${ssrInterpolate(outputLineCount.value > lineCount.value ? "+" : "")}${ssrInterpolate(outputLineCount.value - lineCount.value)} \u884C) </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      if (operationHistory.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold">\u64CD\u4F5C\u5386\u53F2</h2><button${ssrIncludeBooleanAttr(!canUndo.value) ? " disabled" : ""} class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> \u64A4\u9500 </button></div><div class="space-y-2"><!--[-->`);
        ssrRenderList(operationHistory.value, (item, index) => {
          _push(`<div class="flex items-center justify-between text-sm p-2 bg-muted rounded"><span>${ssrInterpolate(item.name)}</span><span class="text-muted-foreground">${ssrInterpolate(item.time)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/text-replace",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u6587\u672C\u66FF\u6362</p><p class="text-xs text-muted-foreground"${_scopeId}>\u6279\u91CF\u67E5\u627E\u66FF\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u6587\u672C\u66FF\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6279\u91CF\u67E5\u627E\u66FF\u6362")
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
        to: "/tools/text/text-diff",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileDiff), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u6587\u672C\u5BF9\u6BD4</p><p class="text-xs text-muted-foreground"${_scopeId}>\u6BD4\u8F83\u6587\u672C\u5DEE\u5F02</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileDiff), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u6587\u672C\u5BF9\u6BD4"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6BD4\u8F83\u6587\u672C\u5DEE\u5F02")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      if (showFilter.value) {
        _push(`<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"><div class="bg-background rounded-lg p-6 w-full max-w-md"><h3 class="text-lg font-semibold mb-4">\u8FC7\u6EE4\u9009\u9879</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u8FC7\u6EE4\u6A21\u5F0F</label><select class="w-full p-2 border rounded"><option value="include"${ssrIncludeBooleanAttr(Array.isArray(filterMode.value) ? ssrLooseContain(filterMode.value, "include") : ssrLooseEqual(filterMode.value, "include")) ? " selected" : ""}>\u5305\u542B</option><option value="exclude"${ssrIncludeBooleanAttr(Array.isArray(filterMode.value) ? ssrLooseContain(filterMode.value, "exclude") : ssrLooseEqual(filterMode.value, "exclude")) ? " selected" : ""}>\u4E0D\u5305\u542B</option><option value="startsWith"${ssrIncludeBooleanAttr(Array.isArray(filterMode.value) ? ssrLooseContain(filterMode.value, "startsWith") : ssrLooseEqual(filterMode.value, "startsWith")) ? " selected" : ""}>\u5F00\u5934\u662F</option><option value="endsWith"${ssrIncludeBooleanAttr(Array.isArray(filterMode.value) ? ssrLooseContain(filterMode.value, "endsWith") : ssrLooseEqual(filterMode.value, "endsWith")) ? " selected" : ""}>\u7ED3\u5C3E\u662F</option><option value="regex"${ssrIncludeBooleanAttr(Array.isArray(filterMode.value) ? ssrLooseContain(filterMode.value, "regex") : ssrLooseEqual(filterMode.value, "regex")) ? " selected" : ""}>\u6B63\u5219\u8868\u8FBE\u5F0F</option></select></div><div><label class="text-sm font-medium mb-2 block">\u8FC7\u6EE4\u5185\u5BB9</label><input${ssrRenderAttr("value", filterContent.value)} type="text" placeholder="\u8BF7\u8F93\u5165\u8FC7\u6EE4\u5185\u5BB9..." class="w-full p-2 border rounded"></div><div class="flex justify-end gap-2"><button class="px-4 py-2 text-sm border border-border rounded hover:bg-muted transition-colors"> \u53D6\u6D88 </button><button class="px-4 py-2 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"> \u5E94\u7528 </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/line-operations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=line-operations-BBjfA5yz.mjs.map
