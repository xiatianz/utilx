import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Info, Clock, ArrowRight, Globe, Cake } from 'lucide-vue-next';
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
      { name: "7\u5929\u540E", years: 0, months: 0, weeks: 1, days: 0, hours: 0 },
      { name: "30\u5929\u540E", years: 0, months: 0, weeks: 4, days: 2, hours: 0 },
      { name: "90\u5929\u540E", years: 0, months: 3, weeks: 0, days: 0, hours: 0 },
      { name: "180\u5929\u540E", years: 0, months: 6, weeks: 0, days: 0, hours: 0 },
      { name: "1\u5E74\u540E", years: 1, months: 0, weeks: 0, days: 0, hours: 0 },
      { name: "100\u5929\u540E", years: 0, months: 0, weeks: 14, days: 2, hours: 0 }
    ];
    useSeoMeta({
      title: "\u65E5\u671F\u8BA1\u7B97\u5668 - \u5728\u7EBF\u65E5\u671F\u52A0\u51CF\u8BA1\u7B97\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF\u65E5\u671F\u8BA1\u7B97\u5DE5\u5177\uFF0C\u652F\u6301\u65E5\u671F\u52A0\u51CF\u8FD0\u7B97\u3001\u65E5\u671F\u8303\u56F4\u8BA1\u7B97\u3001\u5DE5\u4F5C\u65E5\u8BA1\u7B97\u7B49\u529F\u80FD\u3002",
      keywords: ["\u65E5\u671F\u8BA1\u7B97", "\u65E5\u671F\u52A0\u51CF", "\u65E5\u671F\u5DEE\u8BA1\u7B97", "\u5DE5\u4F5C\u65E5\u8BA1\u7B97", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u65E5\u671F\u8BA1\u7B97\u5668</h1><p class="text-muted-foreground">\u8BA1\u7B97\u65E5\u671F\u52A0\u51CF\uFF0C\u83B7\u53D6\u672A\u6765\u6216\u8FC7\u53BB\u7684\u65E5\u671F</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u65E5\u671F\u8BA1\u7B97</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u8D77\u59CB\u65E5\u671F</label><input${ssrRenderAttr("value", baseDate.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><button class="mt-2 px-4 py-2 text-sm text-primary hover:text-primary/80 transition-colors"> \u4F7F\u7528\u4ECA\u5929 </button></div><div><label class="text-sm font-medium">\u8BA1\u7B97\u65B9\u5F0F</label><div class="mt-2 grid grid-cols-2 gap-2"><button class="${ssrRenderClass([
        "px-4 py-2 rounded-md transition-colors",
        calculateMode.value === "add" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
      ])}"> \u52A0\u7B97 </button><button class="${ssrRenderClass([
        "px-4 py-2 rounded-md transition-colors",
        calculateMode.value === "subtract" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
      ])}"> \u51CF\u7B97 </button></div></div><div class="space-y-3"><div class="grid grid-cols-2 gap-3"><div><label class="text-sm font-medium">\u5E74</label><input${ssrRenderAttr("value", timeUnits.value.years)} type="number" min="0" placeholder="0" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div><div><label class="text-sm font-medium">\u6708</label><input${ssrRenderAttr("value", timeUnits.value.months)} type="number" min="0" placeholder="0" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div></div><div class="grid grid-cols-3 gap-3"><div><label class="text-sm font-medium">\u5468</label><input${ssrRenderAttr("value", timeUnits.value.weeks)} type="number" min="0" placeholder="0" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div><div><label class="text-sm font-medium">\u5929</label><input${ssrRenderAttr("value", timeUnits.value.days)} type="number" min="0" placeholder="0" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div><div><label class="text-sm font-medium">\u5C0F\u65F6</label><input${ssrRenderAttr("value", timeUnits.value.hours)} type="number" min="0" placeholder="0" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div></div></div><div><label class="text-sm font-medium">\u5FEB\u6377\u9009\u62E9</label><div class="mt-2 grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(datePresets, (preset) => {
        _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm">${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      if (resultDate.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8BA1\u7B97\u7ED3\u679C</h2><div class="space-y-3"><div class="p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-1">\u8BA1\u7B97\u540E\u65E5\u671F</div><div class="text-2xl font-bold">${ssrInterpolate(resultDate.value)}</div><div class="text-sm text-muted-foreground mt-1">${ssrInterpolate(resultTime.value)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">\u661F\u671F</div><div class="font-medium">${ssrInterpolate(resultWeekday.value)}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u65E5\u671F\u8303\u56F4\u8BA1\u7B97</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u5F00\u59CB\u65E5\u671F</label><input${ssrRenderAttr("value", rangeStart.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><div><label class="text-sm font-medium">\u7ED3\u675F\u65E5\u671F</label><input${ssrRenderAttr("value", rangeEnd.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div>`);
      if (rangeResult.value) {
        _push(`<div class="p-4 bg-muted rounded-lg space-y-2"><div class="flex justify-between"><span class="text-sm text-muted-foreground">\u603B\u5929\u6570</span><span class="font-mono">${ssrInterpolate(rangeResult.value.totalDays)}\u5929</span></div><div class="flex justify-between"><span class="text-sm text-muted-foreground">\u5DE5\u4F5C\u65E5</span><span class="font-mono">${ssrInterpolate(rangeResult.value.workdays)}\u5929</span></div><div class="flex justify-between"><span class="text-sm text-muted-foreground">\u5468\u672B</span><span class="font-mono">${ssrInterpolate(rangeResult.value.weekends)}\u5929</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u65E5\u671F\u5DEE\u5F02</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u76EE\u6807\u65E5\u671F</label><input${ssrRenderAttr("value", targetDate.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><button class="mt-2 px-4 py-2 text-sm text-primary hover:text-primary/80 transition-colors"> \u4F7F\u7528\u4ECA\u5929 </button></div>`);
      if (differenceResult.value) {
        _push(`<div class="p-4 bg-muted rounded-lg space-y-2"><div class="flex justify-between"><span class="text-sm text-muted-foreground">\u76F8\u5DEE\u5929\u6570</span><span class="font-mono">${ssrInterpolate(differenceResult.value.days)}\u5929</span></div><div class="flex justify-between"><span class="text-sm text-muted-foreground">\u76F8\u5DEE\u5468\u6570</span><span class="font-mono">${ssrInterpolate(differenceResult.value.weeks)}\u5468</span></div><div class="flex justify-between"><span class="text-sm text-muted-foreground">\u76F8\u5DEE\u6708\u6570</span><span class="font-mono">${ssrInterpolate(differenceResult.value.months)}\u6708</span></div><div class="flex justify-between"><span class="text-sm text-muted-foreground">\u76F8\u5DEE\u5E74\u6570</span><span class="font-mono">${ssrInterpolate(differenceResult.value.years)}\u5E74</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8282\u5047\u65E5\u67E5\u8BE2</h2><div class="space-y-3"><div><label class="text-sm font-medium">\u67E5\u8BE2\u65E5\u671F</label><input${ssrRenderAttr("value", holidayDate.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div>`);
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
          _push(`<div class="text-sm text-muted-foreground"> \u666E\u901A\u5DE5\u4F5C\u65E5 </div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5173\u4E8E\u65E5\u671F\u8BA1\u7B97 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u8BA1\u7B97\u89C4\u5219</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u6708\u4EFD\u52A0\u51CF\u4F1A\u81EA\u52A8\u5904\u7406\u8DE8\u5E74\u60C5\u51B5</li><li>\u95F0\u5E74\u8BA1\u7B97\u4F1A\u81EA\u52A8\u8003\u86512\u6708\u4EFD\u5929\u6570</li><li>\u8BA1\u7B97\u7ED3\u679C\u4F1A\u5305\u542B\u5B8C\u6574\u7684\u65F6\u95F4\u4FE1\u606F</li><li>\u652F\u6301\u5DE5\u4F5C\u65E5\u548C\u5468\u672B\u7684\u533A\u5206\u8BA1\u7B97</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u5E38\u89C1\u7528\u9014</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u8BA1\u7B97\u5408\u540C\u5230\u671F\u65E5\u671F</li><li>\u8BA1\u5212\u9879\u76EE\u91CC\u7A0B\u7891</li><li>\u8BA1\u7B97\u8FD8\u6B3E\u65E5\u671F</li><li>\u786E\u5B9A\u9884\u7EA6\u65F6\u95F4</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/timestamp-converter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Clock), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u65F6\u95F4\u6233\u8F6C\u6362\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>Unix\u65F6\u95F4\u6233\u4E0E\u65E5\u671F\u8F6C\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Clock), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u65F6\u95F4\u6233\u8F6C\u6362\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Unix\u65F6\u95F4\u6233\u4E0E\u65E5\u671F\u8F6C\u6362")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u65F6\u533A\u8F6C\u6362</p><p class="text-xs text-muted-foreground"${_scopeId}>\u5168\u7403\u65F6\u533A\u65F6\u95F4\u8F6C\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Globe), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u65F6\u533A\u8F6C\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u5168\u7403\u65F6\u533A\u65F6\u95F4\u8F6C\u6362")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u5E74\u9F84\u8BA1\u7B97\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u7CBE\u786E\u8BA1\u7B97\u5E74\u9F84\u548C\u5929\u6570</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Cake), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5E74\u9F84\u8BA1\u7B97\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u7CBE\u786E\u8BA1\u7B97\u5E74\u9F84\u548C\u5929\u6570")
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

export { _sfc_main as default };
//# sourceMappingURL=date-calculator-DqqHmLmB.mjs.map
