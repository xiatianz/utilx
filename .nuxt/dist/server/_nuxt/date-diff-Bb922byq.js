import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Info, Calendar, ArrowRight, Cake, CalendarDays } from "lucide-vue-next";
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
  __name: "date-diff",
  __ssrInlineRender: true,
  setup(__props) {
    const date1 = ref("");
    const date2 = ref("");
    const difference = ref(null);
    const timeline = ref(null);
    const workdayResult = ref(null);
    const history = ref([]);
    const datePresets = [
      { name: "今日对比", days: 0 },
      { name: "本周对比", days: 7 },
      { name: "本月对比", days: 30 },
      { name: "上月对比", days: -30 },
      { name: "本年对比", days: 365 },
      { name: "去年对比", days: -365 }
    ];
    useSeoMeta({
      title: "日期差计算器 - 在线计算两个日期的时间差",
      description: "精确计算两个日期之间的时间差，支持年、月、日、小时、分钟、秒等多种单位显示，包含工作日计算功能。",
      keywords: ["日期差", "时间差", "日期计算", "工作日计算", "日期间隔", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">日期差计算器</h1><p class="text-muted-foreground">精确计算两个日期之间的时间差，支持多种单位显示</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">选择日期</h2><div class="space-y-4"><div><label class="text-sm font-medium">第一个日期</label><input${ssrRenderAttr("value", date1.value)} type="datetime-local" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><div class="mt-2 flex gap-2"><button class="px-3 py-1 text-sm text-primary hover:text-primary/80 transition-colors"> 今天 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 昨天 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 明天 </button></div></div><div><label class="text-sm font-medium">第二个日期</label><input${ssrRenderAttr("value", date2.value)} type="datetime-local" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><div class="mt-2 flex gap-2"><button class="px-3 py-1 text-sm text-primary hover:text-primary/80 transition-colors"> 今天 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 昨天 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 明天 </button></div></div><div><label class="text-sm font-medium">快捷选择</label><div class="mt-2 grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(datePresets, (preset) => {
        _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm">${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      if (difference.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">计算结果</h2><div class="space-y-4"><div class="p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-2">时间差</div><div class="text-2xl font-bold">${ssrInterpolate(difference.value.days)}天</div><div class="text-sm text-muted-foreground mt-1"> 或 ${ssrInterpolate(difference.value.hours)}小时 或 ${ssrInterpolate(difference.value.minutes)}分钟 </div></div><div class="grid grid-cols-2 gap-3 text-sm"><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">年</div><div class="font-mono">${ssrInterpolate(difference.value.years)}年</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">月</div><div class="font-mono">${ssrInterpolate(difference.value.months)}月</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">周</div><div class="font-mono">${ssrInterpolate(difference.value.weeks)}周</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">秒</div><div class="font-mono">${ssrInterpolate(difference.value.seconds.toLocaleString())}秒</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4">`);
      if (timeline.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">时间线视图</h2><div class="space-y-4"><div class="relative"><div class="absolute left-4 top-6 bottom-6 w-0.5 bg-border"></div><div class="relative flex items-center gap-3"><div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center"><span class="text-white text-xs font-bold">1</span></div><div><div class="font-medium">${ssrInterpolate(timeline.value.date1)}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(timeline.value.time1)}</div></div></div><div class="ml-11 mt-2 p-3 bg-muted rounded-lg"><div class="text-sm font-medium">${ssrInterpolate(timeline.value.interval)}</div></div><div class="relative flex items-center gap-3 mt-4"><div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center"><span class="text-white text-xs font-bold">2</span></div><div><div class="font-medium">${ssrInterpolate(timeline.value.date2)}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(timeline.value.time2)}</div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (workdayResult.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">工作日统计</h2><div class="space-y-3"><div class="flex justify-between items-center"><span class="text-sm text-muted-foreground">总天数</span><span class="font-mono">${ssrInterpolate(workdayResult.value.totalDays)}天</span></div><div class="flex justify-between items-center"><span class="text-sm text-muted-foreground">工作日</span><span class="font-mono text-primary">${ssrInterpolate(workdayResult.value.workdays)}天</span></div><div class="flex justify-between items-center"><span class="text-sm text-muted-foreground">周末</span><span class="font-mono text-muted-foreground">${ssrInterpolate(workdayResult.value.weekends)}天</span></div>`);
        if (workdayResult.value.holidays > 0) {
          _push(`<div class="flex justify-between items-center"><span class="text-sm text-muted-foreground">节假日</span><span class="font-mono text-destructive">${ssrInterpolate(workdayResult.value.holidays)}天</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (history.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">历史记录</h2><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div><div class="space-y-3"><!--[-->`);
        ssrRenderList(history.value, (item, index) => {
          _push(`<div class="p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors"><div class="flex justify-between items-center"><div class="text-sm"><span class="font-medium">${ssrInterpolate(item.date1)}</span><span class="text-muted-foreground mx-2">至</span><span class="font-medium">${ssrInterpolate(item.date2)}</span></div><span class="text-sm text-muted-foreground">${ssrInterpolate(item.days)}天</span></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 关于日期差计算 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">计算规则</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>计算结果包括所有时间单位，可根据需要选择显示</li><li>闰年和平年的2月份天数差异已自动处理</li><li>跨年计算会正确处理年份变化</li><li>工作日计算排除周六周日（暂不包含法定节假日）</li></ul></div><div><h4 class="font-medium text-foreground mb-2">常见应用</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>计算项目持续时间</li><li>统计假期天数</li><li>计算服务年限</li><li>倒计时计算</li><li>合同期限计算</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/date-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>日期计算器</p><p class="text-xs text-muted-foreground"${_scopeId}>日期加减计算</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "日期计算器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "日期加减计算")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/age-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Cake), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>年龄计算器</p><p class="text-xs text-muted-foreground"${_scopeId}>精确计算年龄</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Cake), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "年龄计算器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "精确计算年龄")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/week-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CalendarDays), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>周数计算器</p><p class="text-xs text-muted-foreground"${_scopeId}>计算周数</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CalendarDays), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "周数计算器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "计算周数")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/date-diff.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=date-diff-Bb922byq.js.map
