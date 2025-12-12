import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, createVNode, resolveDynamicComponent, withCtx, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Type, FileText, ArrowRight } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
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
      { value: "uppercase", label: "转大写", icon: Type },
      { value: "lowercase", label: "转小写", icon: Type },
      { value: "capitalize", label: "首字母大写", icon: Type },
      { value: "camelCase", label: "驼峰式", icon: Type },
      { value: "pascalCase", label: "帕斯卡式", icon: Type },
      { value: "snakeCase", label: "蛇形式", icon: Type },
      { value: "kebabCase", label: "短横线式", icon: Type },
      { value: "alternating", label: "交替大小写", icon: Type }
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
      title: "大小写转换工具 - 在线文本大小写格式转换",
      description: "免费在线文本大小写转换工具，支持大写、小写、首字母大写、驼峰式、蛇形、短横线式等多种格式转换。",
      keywords: ["大小写转换", "文本转换", "驼峰式", "蛇形", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">大小写转换工具</h1><p class="text-muted-foreground">快速转换文本大小写格式，支持多种转换模式</p></div><div class="space-y-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">转换选项</h2><div class="grid grid-cols-2 md:grid-cols-4 gap-3"><!--[-->`);
      ssrRenderList(convertOptions, (option) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-2 rounded-lg text-sm font-medium transition-all",
          currentMode.value === option.value ? "bg-primary text-primary-foreground shadow-md" : "bg-muted hover:bg-muted/80"
        ])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(option.icon), { class: "w-4 h-4 inline mr-2" }, null), _parent);
        _push(` ${ssrInterpolate(option.label)}</button>`);
      });
      _push(`<!--]--></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">输入文本</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 粘贴 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><textarea placeholder="请输入要转换的文本..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea><div class="text-sm text-muted-foreground"><span>${ssrInterpolate(inputText.value.length)} 个字符</span><span class="mx-2">·</span><span>${ssrInterpolate(getWordCount(inputText.value))} 个词</span></div></div><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">转换结果</h2><div class="flex gap-2">`);
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">${ssrInterpolate(copied.value ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><textarea readonly placeholder="转换结果将显示在这里..." class="w-full h-64 p-4 bg-muted rounded-lg resize-none focus:outline-none">${ssrInterpolate(outputText.value)}</textarea><div class="text-sm text-muted-foreground"><span>${ssrInterpolate(outputText.value.length)} 个字符</span><span class="mx-2">·</span><span>${ssrInterpolate(getWordCount(outputText.value))} 个词</span></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">转换预览</h2><div class="space-y-3"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(convertOptions, (option) => {
        _push(`<div class="space-y-2"><h3 class="font-medium text-sm text-muted-foreground">${ssrInterpolate(option.label)}</h3><div class="p-3 bg-muted rounded-lg font-mono text-sm">${ssrInterpolate(applyTransform(sampleText, option.value))}</div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/text-replace",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>文本替换</p><p class="text-xs text-muted-foreground"${_scopeId}>批量查找替换文本</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "文本替换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "批量查找替换文本")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>字数统计</p><p class="text-xs text-muted-foreground"${_scopeId}>统计文本字符词数</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "字数统计"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "统计文本字符词数")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Markdown编辑器</p><p class="text-xs text-muted-foreground"${_scopeId}>实时预览编辑</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Markdown编辑器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "实时预览编辑")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=case-converter-z_kVYhfG.js.map
