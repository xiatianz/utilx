import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Info, Calendar, ArrowRight, Calculator, CalendarDays } from "lucide-vue-next";
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
  __name: "age-calculator",
  __ssrInlineRender: true,
  setup(__props) {
    const birthDate = ref("");
    const targetAge = ref("");
    const ageResult = ref(null);
    const targetDateResult = ref(null);
    const nextBirthday = ref(null);
    const zodiacInfo = ref(null);
    const birthdayPresets = [
      { name: "2000年出生（千禧宝宝）", date: "2000-01-01", age: 24 },
      { name: "1990年出生（90后）", date: "1990-01-01", age: 34 },
      { name: "1988年出生（龙年）", date: "1988-01-01", age: 36 },
      { name: "1980年出生（80后）", date: "1980-01-01", age: 44 },
      { name: "1970年出生（70后）", date: "1970-01-01", age: 54 }
    ];
    const commonAges = [18, 20, 30, 40, 50, 60, 70, 80, 100];
    const milestoneDays = computed(() => {
      if (!ageResult.value || !birthDate.value) return {};
      const birth = new Date(birthDate.value);
      const milestones = {};
      [100, 1e3, 1e4].forEach((days) => {
        const date = new Date(birth);
        date.setDate(birth.getDate() + days);
        milestones[days] = date.toLocaleDateString("zh-CN");
      });
      return milestones;
    });
    useSeoMeta({
      title: "年龄计算器 - 精确计算年龄和生日信息",
      description: "免费在线年龄计算工具，精确计算年、月、日、小时等详细信息，包含星座查询、生日倒计时等功能。",
      keywords: ["年龄计算", "生日计算", "星座查询", "生日倒计时", "精确年龄", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">年龄计算器</h1><p class="text-muted-foreground">精确计算年龄，包括年、月、日、小时等详细信息</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">出生信息</h2><div class="space-y-4"><div><label class="text-sm font-medium">出生日期</label><input${ssrRenderAttr("value", birthDate.value)} type="datetime-local" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><div class="grid grid-cols-2 gap-2"><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> 今天出生（0岁） </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> 昨天出生（0岁） </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> 去年出生（1岁） </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> 10年前出生 </button></div><div><label class="text-sm font-medium">常用生日</label><div class="mt-2 space-y-2"><!--[-->`);
      ssrRenderList(birthdayPresets, (preset) => {
        _push(`<div class="flex justify-between items-center p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors"><span class="text-sm">${ssrInterpolate(preset.name)}</span><span class="text-sm text-muted-foreground">${ssrInterpolate(preset.age)}岁</span></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      if (ageResult.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">计算结果</h2><div class="space-y-4"><div class="p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-2">当前年龄</div><div class="text-3xl font-bold">${ssrInterpolate(ageResult.value.years)}岁</div><div class="text-sm text-muted-foreground mt-1">${ssrInterpolate(ageResult.value.months)}个月 ${ssrInterpolate(ageResult.value.days)}天</div></div><div class="grid grid-cols-2 gap-3 text-sm"><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">总月数</div><div class="font-mono">${ssrInterpolate(ageResult.value.totalMonths)}个月</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">总周数</div><div class="font-mono">${ssrInterpolate(ageResult.value.totalWeeks)}周</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">总天数</div><div class="font-mono">${ssrInterpolate(ageResult.value.totalDays)}天</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">总小时数</div><div class="font-mono">${ssrInterpolate(ageResult.value.totalHours.toLocaleString())}小时</div></div></div><div class="space-y-3"><div class="text-sm font-medium">重要里程碑</div><div class="space-y-2"><div class="flex justify-between items-center p-2 bg-muted/50 rounded"><span class="text-sm">第100天</span><span class="text-sm text-muted-foreground">${ssrInterpolate(milestoneDays.value[100])}</span></div><div class="flex justify-between items-center p-2 bg-muted/50 rounded"><span class="text-sm">第1000天</span><span class="text-sm text-muted-foreground">${ssrInterpolate(milestoneDays.value[1e3])}</span></div><div class="flex justify-between items-center p-2 bg-muted/50 rounded"><span class="text-sm">第10000天</span><span class="text-sm text-muted-foreground">${ssrInterpolate(milestoneDays.value[1e4])}</span></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">目标年龄计算</h2><div class="space-y-4"><div><label class="text-sm font-medium">目标年龄</label><input${ssrRenderAttr("value", targetAge.value)} type="number" min="1" max="150" placeholder="输入年龄" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div>`);
      if (targetDateResult.value) {
        _push(`<div class="p-4 bg-muted rounded-lg space-y-2"><div class="text-sm text-muted-foreground">满${ssrInterpolate(targetAge.value)}岁的日期</div><div class="font-medium">${ssrInterpolate(targetDateResult.value.date)}</div><div class="text-sm text-muted-foreground">还有${ssrInterpolate(targetDateResult.value.daysLeft)}天</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="text-sm font-medium">常见目标年龄</label><div class="mt-2 grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(commonAges, (age) => {
        _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm">${ssrInterpolate(age)}岁 </button>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      if (nextBirthday.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">下一个生日</h2><div class="space-y-3"><div class="p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-2">${ssrInterpolate(nextBirthday.value.age)}岁生日</div><div class="text-xl font-bold">${ssrInterpolate(nextBirthday.value.date)}</div><div class="text-sm text-muted-foreground mt-1">还有${ssrInterpolate(nextBirthday.value.daysLeft)}天</div></div>`);
        if (nextBirthday.value.isLeapBirthday) {
          _push(`<div class="p-3 bg-yellow-50 border border-yellow-200 rounded-lg"><div class="text-sm text-yellow-800"> ⭐ 您是闰年出生，4年才过一个真正的生日！ </div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (zodiacInfo.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">星座信息</h2><div class="flex items-center gap-4"><div class="text-4xl">${ssrInterpolate(zodiacInfo.value.emoji)}</div><div><div class="font-medium">${ssrInterpolate(zodiacInfo.value.name)}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(zodiacInfo.value.dateRange)}</div><div class="text-sm text-muted-foreground mt-1">${ssrInterpolate(zodiacInfo.value.element)}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (ageResult.value && ageResult.value.totalDays > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">历史瞬间</h2><div class="space-y-3 text-sm"><div class="p-3 bg-muted rounded-lg"><div class="font-medium mb-1">出生那天的世界</div><div class="text-muted-foreground">${ssrInterpolate(ageResult.value.birthDayInfo)}</div></div><div class="grid grid-cols-2 gap-3"><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">出生时距现在</div><div class="font-mono">${ssrInterpolate(ageResult.value.pastTimeInfo)}</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">生命进度</div><div class="font-mono">${ssrInterpolate(ageResult.value.lifeProgress)}</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 关于年龄计算 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">计算方法</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>按照公历精确计算，包含闰年闰月的处理</li><li>年龄计算考虑了出生时刻的精确时间</li><li>闰年2月29日出生的人在非闰年生日为2月28日或3月1日</li><li>所有计算都基于当前的系统时间</li></ul></div><div><h4 class="font-medium text-foreground mb-2">趣味知识</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>人类的平均寿命约为72岁</li><li>活到100岁的人被称为&quot;百岁老人&quot;</li><li>闰年每4年出现一次，但能被100整除但不能被400整除的年份除外</li><li>全球每秒大约有4.3个婴儿出生</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
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
        to: "/tools/date-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calculator), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>日期计算器</p><p class="text-xs text-muted-foreground"${_scopeId}>日期加减计算</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calculator), { class: "w-5 h-5 text-primary" }),
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
        to: "/tools/week-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CalendarDays), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>周数计算器</p><p class="text-xs text-muted-foreground"${_scopeId}>计算日期所在周数</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CalendarDays), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "周数计算器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "计算日期所在周数")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/age-calculator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=age-calculator-Cu1xlPVe.js.map
