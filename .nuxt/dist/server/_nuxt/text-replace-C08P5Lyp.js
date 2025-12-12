import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderComponent, ssrLooseContain, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { X, Regex, ArrowRight, FileText, Type } from "lucide-vue-next";
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
        name: "移除多余空格",
        mode: "regex",
        search: "\\s+",
        replace: " ",
        options: { global: true }
      },
      {
        name: "移除空行",
        mode: "regex",
        search: "^\\s*$\\n",
        replace: "",
        options: { global: true, multiline: true }
      },
      {
        name: "首字母大写",
        mode: "regex",
        search: "\\b\\w",
        replace: (match) => match.toUpperCase(),
        options: { global: true }
      },
      {
        name: "添加逗号",
        mode: "text",
        search: "\n",
        replace: ",\n",
        options: {}
      },
      {
        name: "移除所有数字",
        mode: "regex",
        search: "\\d",
        replace: "",
        options: { global: true }
      }
    ];
    const commonRegex = [
      { name: "邮箱地址", pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}" },
      { name: "手机号", pattern: "1[3-9]\\d{9}" },
      { name: "URL链接", pattern: "https?://[^\\s]+" },
      { name: "IP地址", pattern: "\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b" },
      { name: "日期", pattern: "\\d{4}-\\d{2}-\\d{2}" },
      { name: "中文字符", pattern: "[\\u4e00-\\u9fa5]+" }
    ];
    useSeoMeta({
      title: "文本替换工具 - 在线批量查找替换文本",
      description: "免费在线文本替换工具，支持普通文本和正则表达式的批量查找替换，提供预设规则和常用正则表达式。",
      keywords: ["文本替换", "查找替换", "正则表达式", "批量替换", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">文本替换工具</h1><p class="text-muted-foreground">支持普通文本和正则表达式的批量文本查找替换功能</p></div><div class="space-y-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">替换配置</h2><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">替换模式</label><div class="flex gap-4"><label class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(replaceMode.value, "text")) ? " checked" : ""} value="text" class="mr-2"><span>普通文本</span></label><label class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(replaceMode.value, "regex")) ? " checked" : ""} value="regex" class="mr-2"><span>正则表达式</span></label></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label class="text-sm font-medium mb-2 block">查找内容</label><div class="relative"><input${ssrRenderAttr("value", searchText.value)} placeholder="请输入要查找的内容..." class="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">`);
      if (searchText.value) {
        _push(`<button class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><label class="text-sm font-medium mb-2 block">替换内容</label><input${ssrRenderAttr("value", replaceText.value)} placeholder="请输入替换内容..." class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></div></div>`);
      if (replaceMode.value === "regex") {
        _push(`<div class="flex flex-wrap gap-4"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(regexOptions.value.global) ? ssrLooseContain(regexOptions.value.global, null) : regexOptions.value.global) ? " checked" : ""} class="mr-2"><span>全局匹配 (g)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(regexOptions.value.ignoreCase) ? ssrLooseContain(regexOptions.value.ignoreCase, null) : regexOptions.value.ignoreCase) ? " checked" : ""} class="mr-2"><span>忽略大小写 (i)</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(regexOptions.value.multiline) ? ssrLooseContain(regexOptions.value.multiline, null) : regexOptions.value.multiline) ? " checked" : ""} class="mr-2"><span>多行模式 (m)</span></label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="text-sm font-medium mb-2 block">预设规则</label><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(presetRules, (preset) => {
        _push(`<button class="px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded transition-colors">${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">输入文本</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 粘贴 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><textarea placeholder="请输入要处理的文本..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea><div class="text-sm text-muted-foreground"><span>${ssrInterpolate(inputText.value.length)} 个字符</span></div></div><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">输出结果</h2><div class="flex gap-2">`);
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
      _push(`</div></div><textarea readonly placeholder="替换结果将显示在这里..." class="w-full h-64 p-4 bg-muted rounded-lg resize-none">${ssrInterpolate(outputText.value)}</textarea><div class="text-sm text-muted-foreground"><span>${ssrInterpolate(outputText.value.length)} 个字符</span>`);
      if (replaceCount.value > 0) {
        _push(`<span class="ml-2 text-primary"> （已替换 ${ssrInterpolate(replaceCount.value)} 处） </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="flex justify-center gap-4"><button${ssrIncludeBooleanAttr(!inputText.value || !searchText.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> 执行替换 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> 重置 </button></div>`);
      if (replaceHistory.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold">替换历史</h2><button class="text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空历史 </button></div><div class="space-y-2"><!--[-->`);
        ssrRenderList(replaceHistory.value, (item, index) => {
          _push(`<div class="p-3 bg-muted rounded-lg text-sm"><div class="flex items-center justify-between mb-1"><span class="font-medium">${ssrInterpolate(item.mode === "regex" ? "正则" : "文本")}替换</span><span class="text-muted-foreground text-xs">${ssrInterpolate(item.time)}</span></div><div class="font-mono text-xs"> &quot;${ssrInterpolate(item.search)}&quot; → &quot;${ssrInterpolate(item.replace)}&quot; </div><div class="text-muted-foreground text-xs mt-1"> 替换了 ${ssrInterpolate(item.count)} 处 </div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">常用正则表达式</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(commonRegex, (regex) => {
        _push(`<div class="flex items-center justify-between p-3 bg-muted rounded-lg"><div><div class="font-medium text-sm">${ssrInterpolate(regex.name)}</div><div class="font-mono text-xs text-muted-foreground mt-1">${ssrInterpolate(regex.pattern)}</div></div><button class="px-3 py-1 text-sm bg-background hover:bg-background/80 rounded transition-colors"> 使用 </button></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/regex-tester",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Regex), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>正则表达式测试</p><p class="text-xs text-muted-foreground"${_scopeId}>测试正则表达式</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Regex), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "正则表达式测试"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "测试正则表达式")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>字数统计</p><p class="text-xs text-muted-foreground"${_scopeId}>统计文本信息</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "字数统计"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "统计文本信息")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>大小写转换</p><p class="text-xs text-muted-foreground"${_scopeId}>转换文本格式</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Type), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "大小写转换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "转换文本格式")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=text-replace-C08P5Lyp.js.map
