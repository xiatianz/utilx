import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import { X, Download, Share2, Info, Calendar, ArrowRight, Timer, Clock } from "lucide-vue-next";
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
  __name: "workday-calculator",
  __ssrInlineRender: true,
  setup(__props) {
    const startDate = ref("");
    const endDate = ref("");
    const workdays = ref([true, true, true, true, true, false, false]);
    const customHolidays = ref([]);
    const result = ref(null);
    const holidayList = ref([]);
    const weekDays = ["一", "二", "三", "四", "五", "六", "日"];
    const datePresets = [
      { name: "本周", days: 7 },
      { name: "本月", days: 30 },
      { name: "本季度", days: 90 },
      { name: "本年", days: 365 },
      { name: "下月", days: 60, offset: 30 },
      { name: "下季度", days: 180, offset: 90 }
    ];
    useSeoMeta({
      title: "工作日计算器 - 在线计算工作日天数",
      description: "免费在线工作日计算工具，支持自定义节假日、计算工作日天数、排除周末等功能。",
      keywords: ["工作日计算", "工作日天数", "日期计算", "节假日", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">工作日计算器</h1><p class="text-muted-foreground">计算两个日期之间的工作日天数，支持自定义节假日</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">日期范围</h2><div class="space-y-4"><div><label class="text-sm font-medium">开始日期</label><input${ssrRenderAttr("value", startDate.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><div class="mt-2 flex gap-2"><button class="px-3 py-1 text-sm text-primary hover:text-primary/80 transition-colors"> 今天 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 本周一 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 本月1号 </button></div></div><div><label class="text-sm font-medium">结束日期</label><input${ssrRenderAttr("value", endDate.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><div class="mt-2 flex gap-2"><button class="px-3 py-1 text-sm text-primary hover:text-primary/80 transition-colors"> 今天 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 本周日 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 本月底 </button></div></div><div><label class="text-sm font-medium">快捷选择</label><div class="mt-2 grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(datePresets, (preset) => {
        _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm">${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">自定义设置</h2><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">工作日</label><div class="grid grid-cols-7 gap-2"><!--[-->`);
      ssrRenderList(weekDays, (day, index) => {
        _push(`<label class="flex flex-col items-center"><input${ssrIncludeBooleanAttr(Array.isArray(workdays.value[index]) ? ssrLooseContain(workdays.value[index], null) : workdays.value[index]) ? " checked" : ""} type="checkbox"${ssrIncludeBooleanAttr(index === 0 || index === 6) ? " disabled" : ""} class="mb-1"><span class="text-xs">${ssrInterpolate(day)}</span></label>`);
      });
      _push(`<!--]--></div></div><div><label class="text-sm font-medium">自定义节假日</label><div class="mt-2 space-y-2"><!--[-->`);
      ssrRenderList(customHolidays.value, (holiday, index) => {
        _push(`<div class="flex gap-2"><input${ssrRenderAttr("value", holiday.date)} type="date" class="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><input${ssrRenderAttr("value", holiday.name)} type="text" placeholder="节日名称" class="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><button class="px-3 py-2 text-destructive hover:text-destructive/80 transition-colors">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div>`);
      });
      _push(`<!--]--></div><button class="mt-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm w-full"> 添加节假日 </button></div></div></div></div><div class="space-y-4">`);
      if (result.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">计算结果</h2><div class="space-y-4"><div class="p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-2">工作日天数</div><div class="text-3xl font-bold">${ssrInterpolate(result.value.workdays)}天</div><div class="text-sm text-muted-foreground mt-1"> (总共${ssrInterpolate(result.value.totalDays)}天，其中周末${ssrInterpolate(result.value.weekends)}天) </div></div><div class="grid grid-cols-2 gap-3"><div class="p-3 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">总天数</div><div class="text-xl font-bold">${ssrInterpolate(result.value.totalDays)}天</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">工作日</div><div class="text-xl font-bold text-primary">${ssrInterpolate(result.value.workdays)}天</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">周末</div><div class="text-xl font-bold text-muted-foreground">${ssrInterpolate(result.value.weekends)}天</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">节假日</div><div class="text-xl font-bold text-destructive">${ssrInterpolate(result.value.holidays)}天</div></div></div><div><h3 class="text-sm font-medium mb-3">每周统计</h3><div class="space-y-2"><!--[-->`);
        ssrRenderList(result.value.weeklyStats, (week, index) => {
          _push(`<div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded transition-colors"><span class="text-sm">第${ssrInterpolate(week.number)}周</span><div class="flex items-center gap-4"><span class="text-sm text-muted-foreground">${ssrInterpolate(week.dateRange)}</span><span class="text-sm font-mono">${ssrInterpolate(week.workdays)}个工作日</span></div></div>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (holidayList.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">节假日列表</h2><div class="space-y-2 max-h-64 overflow-y-auto"><!--[-->`);
        ssrRenderList(holidayList.value, (holiday) => {
          _push(`<div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded transition-colors"><div><div class="font-medium">${ssrInterpolate(holiday.name)}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(holiday.date)}</div></div><span class="text-sm px-2 py-1 bg-destructive/10 text-destructive rounded"> 节假日 </span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (result.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">导出数据</h2><div class="grid grid-cols-2 gap-3"><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` 导出 CSV </button><button class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Share2), { class: "w-4 h-4" }, null, _parent));
        _push(` 导出 JSON </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 关于工作日计算 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">计算规则</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>默认工作日为周一至周五，周末为周六和周日</li><li>可以自定义哪些日期为工作日</li><li>支持添加自定义节假日，这些日期将从工作日中排除</li><li>计算包含开始日期和结束日期</li></ul></div><div><h4 class="font-medium text-foreground mb-2">常见应用</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>项目工期计算，排除周末和节假日</li><li>计算请假天数和工作日</li><li>确定交货日期和工作进度</li><li>薪资结算周期计算</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/date-diff",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>日期差计算</p><p class="text-xs text-muted-foreground"${_scopeId}>计算两个日期的时间差</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "日期差计算"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "计算两个日期的时间差")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/countdown-timer",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Timer), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>倒计时器</p><p class="text-xs text-muted-foreground"${_scopeId}>设置倒计时</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Timer), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "倒计时器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "设置倒计时")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/cron-parser",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Clock), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Cron 解析器</p><p class="text-xs text-muted-foreground"${_scopeId}>解析定时任务表达式</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Clock), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Cron 解析器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "解析定时任务表达式")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/workday-calculator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=workday-calculator-r8-rYD93.js.map
