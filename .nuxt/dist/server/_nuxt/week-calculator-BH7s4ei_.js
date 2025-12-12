import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { Info, Calendar, ArrowRight, Calculator, Cake } from "lucide-vue-next";
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
  __name: "week-calculator",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedDate = ref("");
    const weekInfo = ref(null);
    const selectedYear = ref((/* @__PURE__ */ new Date()).getFullYear());
    const yearWeekInfo = ref(null);
    const weekToYear = ref((/* @__PURE__ */ new Date()).getFullYear());
    const weekToNumber = ref("");
    const convertedWeek = ref(null);
    const quickReferences = computed(() => {
      const now = /* @__PURE__ */ new Date();
      const year = now.getFullYear();
      return [
        {
          label: "元旦",
          date: `${year}-01-01`
        },
        {
          label: "劳动节",
          date: `${year}-05-01`
        },
        {
          label: "国庆节",
          date: `${year}-10-01`
        },
        {
          label: "圣诞节",
          date: `${year}-12-25`
        }
      ];
    });
    useSeoMeta({
      title: "周数计算器 - 在线计算日期所在周数和ISO周数",
      description: "免费在线周数计算工具，支持查询日期所在的周数、计算年度总周数、周数转日期等功能。",
      keywords: ["周数计算", "ISO周数", "第几周", "周数转日期", "日历", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">周数计算器</h1><p class="text-muted-foreground">计算日期所在的周数，查询指定年份的周数信息</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">日期周数查询</h2><div class="space-y-4"><div><label class="text-sm font-medium">选择日期</label><input${ssrRenderAttr("value", selectedDate.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><div class="mt-2 flex gap-2"><button class="px-3 py-1 text-sm text-primary hover:text-primary/80 transition-colors"> 今天 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 本周 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 本月 </button></div></div>`);
      if (weekInfo.value) {
        _push(`<div class="space-y-3"><div class="p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-1">第几周</div><div class="text-3xl font-bold">第 ${ssrInterpolate(weekInfo.value.weekNumber)} 周</div><div class="text-sm text-muted-foreground mt-1">${ssrInterpolate(weekInfo.value.year)}年</div></div><div class="grid grid-cols-2 gap-3 text-sm"><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">周开始</div><div class="font-medium">${ssrInterpolate(weekInfo.value.weekStart)}</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">周结束</div><div class="font-medium">${ssrInterpolate(weekInfo.value.weekEnd)}</div></div></div><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-2">本周日期</div><div class="space-y-1"><!--[-->`);
        ssrRenderList(weekInfo.value.weekDays, (day) => {
          _push(`<div class="flex justify-between items-center"><span class="text-sm">${ssrInterpolate(day.name)}</span><span class="text-sm font-mono">${ssrInterpolate(day.date)}</span></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">年度周数统计</h2><div class="mb-4"><label class="text-sm font-medium">选择年份</label><input${ssrRenderAttr("value", selectedYear.value)} type="number" min="1900" max="2100" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><button class="mt-2 px-3 py-1 text-sm text-primary hover:text-primary/80 transition-colors"> 今年 </button></div>`);
      if (yearWeekInfo.value) {
        _push(`<div class="space-y-3"><div class="grid grid-cols-2 gap-3"><div class="p-3 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">总周数</div><div class="text-2xl font-bold">${ssrInterpolate(yearWeekInfo.value.totalWeeks)}</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">天数</div><div class="text-2xl font-bold">${ssrInterpolate(yearWeekInfo.value.totalDays)}</div></div></div><div class="grid grid-cols-2 gap-3"><div class="p-3 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">开始日期</div><div class="font-medium">${ssrInterpolate(yearWeekInfo.value.startDate)}</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">结束日期</div><div class="font-medium">${ssrInterpolate(yearWeekInfo.value.endDate)}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">周数转日期</h2><div class="space-y-4"><div class="grid grid-cols-2 gap-3"><div><label class="text-sm font-medium">年份</label><input${ssrRenderAttr("value", weekToYear.value)} type="number" min="1900" max="2100" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div><div><label class="text-sm font-medium">周数</label><input${ssrRenderAttr("value", weekToNumber.value)} type="number" min="1" max="53" placeholder="1-53" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div></div>`);
      if (convertedWeek.value) {
        _push(`<div class="p-4 bg-muted rounded-lg space-y-2"><div class="text-sm text-muted-foreground">该周的日期范围</div><div class="font-medium">${ssrInterpolate(convertedWeek.value.start)} - ${ssrInterpolate(convertedWeek.value.end)}</div><div class="text-sm text-muted-foreground">共7天</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">ISO 周数标准</h2><div class="space-y-3 text-sm"><div><h3 class="font-medium mb-2">ISO 8601 标准</h3><p class="text-muted-foreground">国际标准化组织的日期和时间表示法，包含以下规则：</p></div><ul class="space-y-2 text-muted-foreground ml-4"><li>• 每周从周一开始</li><li>• 一年的第一周是包含该年第一个星期四的那一周</li><li>这意味着1月4日总是在第1周</li><li>一年可能有52或53周</li></ul><div class="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg"><div class="font-medium text-sm mb-1">格式示例</div><div class="font-mono text-sm">2024-W52 表示2024年第52周</div></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">快速参考</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(quickReferences.value, (ref2) => {
        _push(`<div class="flex justify-between items-center p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors"><span class="text-sm font-medium">${ssrInterpolate(ref2.label)}</span><span class="text-sm text-muted-foreground">${ssrInterpolate(ref2.date)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 关于周数计算 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">计算规则</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>遵循 ISO 8601 国际标准进行周数计算</li><li>周一为每周的开始，周日为每周的结束</li><li>一年的第一周是包含1月4日的那一周</li><li>12月29日-12月31日可能属于下一年的第一周</li></ul></div><div><h4 class="font-medium text-foreground mb-2">应用场景</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>制定周计划和周报</li><li>计算项目周期</li><li>薪资结算周期</li><li>学术日历管理</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
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
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/week-calculator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=week-calculator-BH7s4ei_.js.map
