import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Info, Clock, ArrowRight, Globe, Cake } from "lucide-vue-next";
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
  __name: "date-calculator",
  __ssrInlineRender: true,
  setup(__props) {
    const calculateMode = ref("add");
    const baseDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const resultDate = ref("");
    const resultTime = ref("");
    const resultWeekday = ref("");
    const timeUnits = ref({
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0
    });
    const rangeStart = ref("");
    const rangeEnd = ref("");
    const rangeResult = ref(null);
    const targetDate = ref("");
    const differenceResult = ref(null);
    const holidayDate = ref("");
    const holidayInfo = ref(null);
    const datePresets = [
      { name: "7天后", years: 0, months: 0, weeks: 1, days: 0, hours: 0 },
      { name: "30天后", years: 0, months: 0, weeks: 4, days: 2, hours: 0 },
      { name: "90天后", years: 0, months: 3, weeks: 0, days: 0, hours: 0 },
      { name: "180天后", years: 0, months: 6, weeks: 0, days: 0, hours: 0 },
      { name: "1年后", years: 1, months: 0, weeks: 0, days: 0, hours: 0 },
      { name: "100天后", years: 0, months: 0, weeks: 14, days: 2, hours: 0 }
    ];
    useSeoMeta({
      title: "日期计算器 - 在线日期加减计算工具",
      description: "免费的在线日期计算工具，支持日期加减运算、日期范围计算、工作日计算等功能。",
      keywords: ["日期计算", "日期加减", "日期差计算", "工作日计算", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">日期计算器</h1><p class="text-muted-foreground">计算日期加减，获取未来或过去的日期</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">日期计算</h2><div class="space-y-4"><div><label class="text-sm font-medium">起始日期</label><input${ssrRenderAttr("value", baseDate.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><button class="mt-2 px-4 py-2 text-sm text-primary hover:text-primary/80 transition-colors"> 使用今天 </button></div><div><label class="text-sm font-medium">计算方式</label><div class="mt-2 grid grid-cols-2 gap-2"><button class="${ssrRenderClass([
        "px-4 py-2 rounded-md transition-colors",
        calculateMode.value === "add" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
      ])}"> 加算 </button><button class="${ssrRenderClass([
        "px-4 py-2 rounded-md transition-colors",
        calculateMode.value === "subtract" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
      ])}"> 减算 </button></div></div><div class="space-y-3"><div class="grid grid-cols-2 gap-3"><div><label class="text-sm font-medium">年</label><input${ssrRenderAttr("value", timeUnits.value.years)} type="number" min="0" placeholder="0" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div><div><label class="text-sm font-medium">月</label><input${ssrRenderAttr("value", timeUnits.value.months)} type="number" min="0" placeholder="0" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div></div><div class="grid grid-cols-3 gap-3"><div><label class="text-sm font-medium">周</label><input${ssrRenderAttr("value", timeUnits.value.weeks)} type="number" min="0" placeholder="0" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div><div><label class="text-sm font-medium">天</label><input${ssrRenderAttr("value", timeUnits.value.days)} type="number" min="0" placeholder="0" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div><div><label class="text-sm font-medium">小时</label><input${ssrRenderAttr("value", timeUnits.value.hours)} type="number" min="0" placeholder="0" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div></div></div><div><label class="text-sm font-medium">快捷选择</label><div class="mt-2 grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(datePresets, (preset) => {
        _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm">${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      if (resultDate.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">计算结果</h2><div class="space-y-3"><div class="p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-1">计算后日期</div><div class="text-2xl font-bold">${ssrInterpolate(resultDate.value)}</div><div class="text-sm text-muted-foreground mt-1">${ssrInterpolate(resultTime.value)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">星期</div><div class="font-medium">${ssrInterpolate(resultWeekday.value)}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">日期范围计算</h2><div class="space-y-4"><div><label class="text-sm font-medium">开始日期</label><input${ssrRenderAttr("value", rangeStart.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><div><label class="text-sm font-medium">结束日期</label><input${ssrRenderAttr("value", rangeEnd.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div>`);
      if (rangeResult.value) {
        _push(`<div class="p-4 bg-muted rounded-lg space-y-2"><div class="flex justify-between"><span class="text-sm text-muted-foreground">总天数</span><span class="font-mono">${ssrInterpolate(rangeResult.value.totalDays)}天</span></div><div class="flex justify-between"><span class="text-sm text-muted-foreground">工作日</span><span class="font-mono">${ssrInterpolate(rangeResult.value.workdays)}天</span></div><div class="flex justify-between"><span class="text-sm text-muted-foreground">周末</span><span class="font-mono">${ssrInterpolate(rangeResult.value.weekends)}天</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">日期差异</h2><div class="space-y-4"><div><label class="text-sm font-medium">目标日期</label><input${ssrRenderAttr("value", targetDate.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><button class="mt-2 px-4 py-2 text-sm text-primary hover:text-primary/80 transition-colors"> 使用今天 </button></div>`);
      if (differenceResult.value) {
        _push(`<div class="p-4 bg-muted rounded-lg space-y-2"><div class="flex justify-between"><span class="text-sm text-muted-foreground">相差天数</span><span class="font-mono">${ssrInterpolate(differenceResult.value.days)}天</span></div><div class="flex justify-between"><span class="text-sm text-muted-foreground">相差周数</span><span class="font-mono">${ssrInterpolate(differenceResult.value.weeks)}周</span></div><div class="flex justify-between"><span class="text-sm text-muted-foreground">相差月数</span><span class="font-mono">${ssrInterpolate(differenceResult.value.months)}月</span></div><div class="flex justify-between"><span class="text-sm text-muted-foreground">相差年数</span><span class="font-mono">${ssrInterpolate(differenceResult.value.years)}年</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">节假日查询</h2><div class="space-y-3"><div><label class="text-sm font-medium">查询日期</label><input${ssrRenderAttr("value", holidayDate.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div>`);
      if (holidayInfo.value) {
        _push(`<div class="p-4 bg-muted rounded-lg">`);
        if (holidayInfo.value.isHoliday) {
          _push(`<div class="space-y-2"><div class="font-medium text-primary">${ssrInterpolate(holidayInfo.value.name)}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(holidayInfo.value.type)}</div>`);
          if (holidayInfo.value.adjust) {
            _push(`<div class="text-sm text-muted-foreground">${ssrInterpolate(holidayInfo.value.adjust)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<div class="text-sm text-muted-foreground"> 普通工作日 </div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 关于日期计算 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">计算规则</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>月份加减会自动处理跨年情况</li><li>闰年计算会自动考虑2月份天数</li><li>计算结果会包含完整的时间信息</li><li>支持工作日和周末的区分计算</li></ul></div><div><h4 class="font-medium text-foreground mb-2">常见用途</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>计算合同到期日期</li><li>计划项目里程碑</li><li>计算还款日期</li><li>确定预约时间</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/timestamp-converter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Clock), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>时间戳转换器</p><p class="text-xs text-muted-foreground"${_scopeId}>Unix时间戳与日期转换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Clock), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "时间戳转换器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Unix时间戳与日期转换")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/timezone-converter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Globe), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>时区转换</p><p class="text-xs text-muted-foreground"${_scopeId}>全球时区时间转换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Globe), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "时区转换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "全球时区时间转换")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>年龄计算器</p><p class="text-xs text-muted-foreground"${_scopeId}>精确计算年龄和天数</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Cake), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "年龄计算器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "精确计算年龄和天数")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/date-calculator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=date-calculator-DqqHmLmB.js.map
