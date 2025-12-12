import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { SortAsc, SortDesc, ArrowUpDown, Shuffle, Filter, Hash, MinusCircle, Search, FileText, ArrowRight, FileDiff } from "lucide-vue-next";
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
      title: "行操作工具 - 在线文本行排序去重过滤",
      description: "免费在线文本行操作工具，支持行排序、去重、过滤、添加行号等功能，批量处理文本行。",
      keywords: ["行操作", "文本排序", "去重", "过滤", "批量处理", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">行操作工具</h1><p class="text-muted-foreground">对文本行进行排序、去重、过滤等批量操作</p></div><div class="space-y-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">操作选项</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><div class="space-y-2"><h3 class="font-medium text-sm">排序</h3><div class="space-y-1"><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(SortAsc), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` 升序排序 </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(SortDesc), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` 降序排序 </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(ArrowUpDown), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` 按长度排序 </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(Shuffle), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` 随机排序 </button></div></div><div class="space-y-2"><h3 class="font-medium text-sm">去重</h3><div class="space-y-1"><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(Filter), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` 删除重复行 </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(Filter), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` 忽略大小写去重 </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(Filter), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` 去除空格后去重 </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(Hash), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` 只保留唯一行 </button></div></div><div class="space-y-2"><h3 class="font-medium text-sm">过滤</h3><div class="space-y-1"><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(MinusCircle), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` 删除空行 </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(MinusCircle), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` 删除空白行 </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(Search), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` 按内容过滤 </button><button class="w-full px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded transition-colors text-left">`);
      _push(ssrRenderComponent(unref(ArrowUpDown), { class: "w-4 h-4 inline mr-2" }, null, _parent));
      _push(` 反转行顺序 </button></div></div></div><div class="mt-4 pt-4 border-t"><h3 class="font-medium text-sm mb-2">其他操作</h3><div class="flex flex-wrap gap-2"><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 添加行号 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 移除行号 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 添加前缀 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 添加后缀 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 去除首尾空格 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 合并为一行 </button></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">输入文本</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 粘贴 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><textarea placeholder="请输入要处理的文本，每行一个条目..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(inputText.value)}</textarea><div class="text-sm text-muted-foreground"><span>${ssrInterpolate(lineCount.value)} 行</span><span class="mx-2">·</span><span>${ssrInterpolate(inputText.value.length)} 个字符</span></div></div><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">输出结果</h2><div class="flex gap-2">`);
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
      _push(`</div></div><textarea readonly placeholder="处理结果将显示在这里..." class="w-full h-64 p-4 bg-muted rounded-lg resize-none font-mono text-sm">${ssrInterpolate(outputText.value)}</textarea><div class="text-sm text-muted-foreground"><span>${ssrInterpolate(outputLineCount.value)} 行</span><span class="mx-2">·</span><span>${ssrInterpolate(outputText.value.length)} 个字符</span>`);
      if (outputText.value && lineCount.value !== outputLineCount.value) {
        _push(`<span class="ml-2 text-primary"> (${ssrInterpolate(outputLineCount.value > lineCount.value ? "+" : "")}${ssrInterpolate(outputLineCount.value - lineCount.value)} 行) </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      if (operationHistory.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold">操作历史</h2><button${ssrIncludeBooleanAttr(!canUndo.value) ? " disabled" : ""} class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> 撤销 </button></div><div class="space-y-2"><!--[-->`);
        ssrRenderList(operationHistory.value, (item, index) => {
          _push(`<div class="flex items-center justify-between text-sm p-2 bg-muted rounded"><span>${ssrInterpolate(item.name)}</span><span class="text-muted-foreground">${ssrInterpolate(item.time)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/text-replace",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>文本替换</p><p class="text-xs text-muted-foreground"${_scopeId}>批量查找替换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "文本替换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "批量查找替换")
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
        to: "/tools/text/text-diff",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileDiff), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>文本对比</p><p class="text-xs text-muted-foreground"${_scopeId}>比较文本差异</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileDiff), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "文本对比"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "比较文本差异")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      if (showFilter.value) {
        _push(`<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"><div class="bg-background rounded-lg p-6 w-full max-w-md"><h3 class="text-lg font-semibold mb-4">过滤选项</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">过滤模式</label><select class="w-full p-2 border rounded"><option value="include"${ssrIncludeBooleanAttr(Array.isArray(filterMode.value) ? ssrLooseContain(filterMode.value, "include") : ssrLooseEqual(filterMode.value, "include")) ? " selected" : ""}>包含</option><option value="exclude"${ssrIncludeBooleanAttr(Array.isArray(filterMode.value) ? ssrLooseContain(filterMode.value, "exclude") : ssrLooseEqual(filterMode.value, "exclude")) ? " selected" : ""}>不包含</option><option value="startsWith"${ssrIncludeBooleanAttr(Array.isArray(filterMode.value) ? ssrLooseContain(filterMode.value, "startsWith") : ssrLooseEqual(filterMode.value, "startsWith")) ? " selected" : ""}>开头是</option><option value="endsWith"${ssrIncludeBooleanAttr(Array.isArray(filterMode.value) ? ssrLooseContain(filterMode.value, "endsWith") : ssrLooseEqual(filterMode.value, "endsWith")) ? " selected" : ""}>结尾是</option><option value="regex"${ssrIncludeBooleanAttr(Array.isArray(filterMode.value) ? ssrLooseContain(filterMode.value, "regex") : ssrLooseEqual(filterMode.value, "regex")) ? " selected" : ""}>正则表达式</option></select></div><div><label class="text-sm font-medium mb-2 block">过滤内容</label><input${ssrRenderAttr("value", filterContent.value)} type="text" placeholder="请输入过滤内容..." class="w-full p-2 border rounded"></div><div class="flex justify-end gap-2"><button class="px-4 py-2 text-sm border border-border rounded hover:bg-muted transition-colors"> 取消 </button><button class="px-4 py-2 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"> 应用 </button></div></div></div></div>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=line-operations-BBjfA5yz.js.map
