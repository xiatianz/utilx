import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, mergeProps, createVNode, resolveDynamicComponent, withCtx, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Type, FileText, ArrowRight } from 'lucide-vue-next';
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

const sampleText = "hello world! this is a SAMPLE text for CASE conversion.";
const _sfc_main = {
  __name: "case-converter",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const outputText = ref("");
    const currentMode = ref("uppercase");
    const copied = ref(false);
    const convertOptions = [
      { value: "uppercase", label: "\u8F6C\u5927\u5199", icon: Type },
      { value: "lowercase", label: "\u8F6C\u5C0F\u5199", icon: Type },
      { value: "capitalize", label: "\u9996\u5B57\u6BCD\u5927\u5199", icon: Type },
      { value: "camelCase", label: "\u9A7C\u5CF0\u5F0F", icon: Type },
      { value: "pascalCase", label: "\u5E15\u65AF\u5361\u5F0F", icon: Type },
      { value: "snakeCase", label: "\u86C7\u5F62\u5F0F", icon: Type },
      { value: "kebabCase", label: "\u77ED\u6A2A\u7EBF\u5F0F", icon: Type },
      { value: "alternating", label: "\u4EA4\u66FF\u5927\u5C0F\u5199", icon: Type }
    ];
    const applyTransform = (text, mode) => {
      switch (mode) {
        case "uppercase":
          return text.toUpperCase();
        case "lowercase":
          return text.toLowerCase();
        case "capitalize":
          return text.replace(/\b\w/g, (char) => char.toUpperCase());
        case "camelCase":
          return text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
          }).replace(/\s+/g, "");
        case "pascalCase":
          return text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => {
            return word.toUpperCase();
          }).replace(/\s+/g, "");
        case "snakeCase":
          return text.replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map((word) => word.toLowerCase()).join("_");
        case "kebabCase":
          return text.replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map((word) => word.toLowerCase()).join("-");
        case "alternating":
          return text.split("").map((char, index) => {
            return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
          }).join("");
        default:
          return text;
      }
    };
    const getWordCount = (text) => {
      if (!text) return 0;
      return text.trim().split(/\s+/).filter((word) => word.length > 0).length;
    };
    useSeoMeta({
      title: "\u5927\u5C0F\u5199\u8F6C\u6362\u5DE5\u5177 - \u5728\u7EBF\u6587\u672C\u5927\u5C0F\u5199\u683C\u5F0F\u8F6C\u6362",
      description: "\u514D\u8D39\u5728\u7EBF\u6587\u672C\u5927\u5C0F\u5199\u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5927\u5199\u3001\u5C0F\u5199\u3001\u9996\u5B57\u6BCD\u5927\u5199\u3001\u9A7C\u5CF0\u5F0F\u3001\u86C7\u5F62\u3001\u77ED\u6A2A\u7EBF\u5F0F\u7B49\u591A\u79CD\u683C\u5F0F\u8F6C\u6362\u3002",
      keywords: ["\u5927\u5C0F\u5199\u8F6C\u6362", "\u6587\u672C\u8F6C\u6362", "\u9A7C\u5CF0\u5F0F", "\u86C7\u5F62", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u5927\u5C0F\u5199\u8F6C\u6362\u5DE5\u5177</h1><p class="text-muted-foreground">\u5FEB\u901F\u8F6C\u6362\u6587\u672C\u5927\u5C0F\u5199\u683C\u5F0F\uFF0C\u652F\u6301\u591A\u79CD\u8F6C\u6362\u6A21\u5F0F</p></div><div class="space-y-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8F6C\u6362\u9009\u9879</h2><div class="grid grid-cols-2 md:grid-cols-4 gap-3"><!--[-->`);
      ssrRenderList(convertOptions, (option) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-2 rounded-lg text-sm font-medium transition-all",
          currentMode.value === option.value ? "bg-primary text-primary-foreground shadow-md" : "bg-muted hover:bg-muted/80"
        ])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(option.icon), { class: "w-4 h-4 inline mr-2" }, null), _parent);
        _push(` ${ssrInterpolate(option.label)}</button>`);
      });
      _push(`<!--]--></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">\u8F93\u5165\u6587\u672C</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u7C98\u8D34 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u8F6C\u6362\u7684\u6587\u672C..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea><div class="text-sm text-muted-foreground"><span>${ssrInterpolate(inputText.value.length)} \u4E2A\u5B57\u7B26</span><span class="mx-2">\xB7</span><span>${ssrInterpolate(getWordCount(inputText.value))} \u4E2A\u8BCD</span></div></div><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">\u8F6C\u6362\u7ED3\u679C</h2><div class="flex gap-2">`);
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
      _push(`</div></div><textarea readonly placeholder="\u8F6C\u6362\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC..." class="w-full h-64 p-4 bg-muted rounded-lg resize-none focus:outline-none">${ssrInterpolate(outputText.value)}</textarea><div class="text-sm text-muted-foreground"><span>${ssrInterpolate(outputText.value.length)} \u4E2A\u5B57\u7B26</span><span class="mx-2">\xB7</span><span>${ssrInterpolate(getWordCount(outputText.value))} \u4E2A\u8BCD</span></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8F6C\u6362\u9884\u89C8</h2><div class="space-y-3"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(convertOptions, (option) => {
        _push(`<div class="space-y-2"><h3 class="font-medium text-sm text-muted-foreground">${ssrInterpolate(option.label)}</h3><div class="p-3 bg-muted rounded-lg font-mono text-sm">${ssrInterpolate(applyTransform(sampleText, option.value))}</div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/text-replace",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u6587\u672C\u66FF\u6362</p><p class="text-xs text-muted-foreground"${_scopeId}>\u6279\u91CF\u67E5\u627E\u66FF\u6362\u6587\u672C</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u6587\u672C\u66FF\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6279\u91CF\u67E5\u627E\u66FF\u6362\u6587\u672C")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u5B57\u6570\u7EDF\u8BA1</p><p class="text-xs text-muted-foreground"${_scopeId}>\u7EDF\u8BA1\u6587\u672C\u5B57\u7B26\u8BCD\u6570</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5B57\u6570\u7EDF\u8BA1"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u7EDF\u8BA1\u6587\u672C\u5B57\u7B26\u8BCD\u6570")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/markdown-editor",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Markdown\u7F16\u8F91\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u5B9E\u65F6\u9884\u89C8\u7F16\u8F91</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Markdown\u7F16\u8F91\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u5B9E\u65F6\u9884\u89C8\u7F16\u8F91")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/case-converter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=case-converter-z_kVYhfG.mjs.map
