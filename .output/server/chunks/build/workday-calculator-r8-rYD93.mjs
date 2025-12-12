import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
import { X, Download, Share2, Info, Calendar, ArrowRight, Timer, Clock } from 'lucide-vue-next';
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
  __name: "workday-calculator",
  __ssrInlineRender: true,
  setup(__props) {
    const startDate = ref("");
    const endDate = ref("");
    const workdays = ref([true, true, true, true, true, false, false]);
    const customHolidays = ref([]);
    const result = ref(null);
    const holidayList = ref([]);
    const weekDays = ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"];
    const datePresets = [
      { name: "\u672C\u5468", days: 7 },
      { name: "\u672C\u6708", days: 30 },
      { name: "\u672C\u5B63\u5EA6", days: 90 },
      { name: "\u672C\u5E74", days: 365 },
      { name: "\u4E0B\u6708", days: 60, offset: 30 },
      { name: "\u4E0B\u5B63\u5EA6", days: 180, offset: 90 }
    ];
    useSeoMeta({
      title: "\u5DE5\u4F5C\u65E5\u8BA1\u7B97\u5668 - \u5728\u7EBF\u8BA1\u7B97\u5DE5\u4F5C\u65E5\u5929\u6570",
      description: "\u514D\u8D39\u5728\u7EBF\u5DE5\u4F5C\u65E5\u8BA1\u7B97\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u8282\u5047\u65E5\u3001\u8BA1\u7B97\u5DE5\u4F5C\u65E5\u5929\u6570\u3001\u6392\u9664\u5468\u672B\u7B49\u529F\u80FD\u3002",
      keywords: ["\u5DE5\u4F5C\u65E5\u8BA1\u7B97", "\u5DE5\u4F5C\u65E5\u5929\u6570", "\u65E5\u671F\u8BA1\u7B97", "\u8282\u5047\u65E5", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u5DE5\u4F5C\u65E5\u8BA1\u7B97\u5668</h1><p class="text-muted-foreground">\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u4E4B\u95F4\u7684\u5DE5\u4F5C\u65E5\u5929\u6570\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u8282\u5047\u65E5</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u65E5\u671F\u8303\u56F4</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u5F00\u59CB\u65E5\u671F</label><input${ssrRenderAttr("value", startDate.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><div class="mt-2 flex gap-2"><button class="px-3 py-1 text-sm text-primary hover:text-primary/80 transition-colors"> \u4ECA\u5929 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u672C\u5468\u4E00 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u672C\u67081\u53F7 </button></div></div><div><label class="text-sm font-medium">\u7ED3\u675F\u65E5\u671F</label><input${ssrRenderAttr("value", endDate.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><div class="mt-2 flex gap-2"><button class="px-3 py-1 text-sm text-primary hover:text-primary/80 transition-colors"> \u4ECA\u5929 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u672C\u5468\u65E5 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u672C\u6708\u5E95 </button></div></div><div><label class="text-sm font-medium">\u5FEB\u6377\u9009\u62E9</label><div class="mt-2 grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(datePresets, (preset) => {
        _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm">${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u81EA\u5B9A\u4E49\u8BBE\u7F6E</h2><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u5DE5\u4F5C\u65E5</label><div class="grid grid-cols-7 gap-2"><!--[-->`);
      ssrRenderList(weekDays, (day, index) => {
        _push(`<label class="flex flex-col items-center"><input${ssrIncludeBooleanAttr(Array.isArray(workdays.value[index]) ? ssrLooseContain(workdays.value[index], null) : workdays.value[index]) ? " checked" : ""} type="checkbox"${ssrIncludeBooleanAttr(index === 0 || index === 6) ? " disabled" : ""} class="mb-1"><span class="text-xs">${ssrInterpolate(day)}</span></label>`);
      });
      _push(`<!--]--></div></div><div><label class="text-sm font-medium">\u81EA\u5B9A\u4E49\u8282\u5047\u65E5</label><div class="mt-2 space-y-2"><!--[-->`);
      ssrRenderList(customHolidays.value, (holiday, index) => {
        _push(`<div class="flex gap-2"><input${ssrRenderAttr("value", holiday.date)} type="date" class="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><input${ssrRenderAttr("value", holiday.name)} type="text" placeholder="\u8282\u65E5\u540D\u79F0" class="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><button class="px-3 py-2 text-destructive hover:text-destructive/80 transition-colors">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div>`);
      });
      _push(`<!--]--></div><button class="mt-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm w-full"> \u6DFB\u52A0\u8282\u5047\u65E5 </button></div></div></div></div><div class="space-y-4">`);
      if (result.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8BA1\u7B97\u7ED3\u679C</h2><div class="space-y-4"><div class="p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-2">\u5DE5\u4F5C\u65E5\u5929\u6570</div><div class="text-3xl font-bold">${ssrInterpolate(result.value.workdays)}\u5929</div><div class="text-sm text-muted-foreground mt-1"> (\u603B\u5171${ssrInterpolate(result.value.totalDays)}\u5929\uFF0C\u5176\u4E2D\u5468\u672B${ssrInterpolate(result.value.weekends)}\u5929) </div></div><div class="grid grid-cols-2 gap-3"><div class="p-3 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">\u603B\u5929\u6570</div><div class="text-xl font-bold">${ssrInterpolate(result.value.totalDays)}\u5929</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">\u5DE5\u4F5C\u65E5</div><div class="text-xl font-bold text-primary">${ssrInterpolate(result.value.workdays)}\u5929</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">\u5468\u672B</div><div class="text-xl font-bold text-muted-foreground">${ssrInterpolate(result.value.weekends)}\u5929</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">\u8282\u5047\u65E5</div><div class="text-xl font-bold text-destructive">${ssrInterpolate(result.value.holidays)}\u5929</div></div></div><div><h3 class="text-sm font-medium mb-3">\u6BCF\u5468\u7EDF\u8BA1</h3><div class="space-y-2"><!--[-->`);
        ssrRenderList(result.value.weeklyStats, (week, index) => {
          _push(`<div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded transition-colors"><span class="text-sm">\u7B2C${ssrInterpolate(week.number)}\u5468</span><div class="flex items-center gap-4"><span class="text-sm text-muted-foreground">${ssrInterpolate(week.dateRange)}</span><span class="text-sm font-mono">${ssrInterpolate(week.workdays)}\u4E2A\u5DE5\u4F5C\u65E5</span></div></div>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (holidayList.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8282\u5047\u65E5\u5217\u8868</h2><div class="space-y-2 max-h-64 overflow-y-auto"><!--[-->`);
        ssrRenderList(holidayList.value, (holiday) => {
          _push(`<div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded transition-colors"><div><div class="font-medium">${ssrInterpolate(holiday.name)}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(holiday.date)}</div></div><span class="text-sm px-2 py-1 bg-destructive/10 text-destructive rounded"> \u8282\u5047\u65E5 </span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (result.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5BFC\u51FA\u6570\u636E</h2><div class="grid grid-cols-2 gap-3"><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` \u5BFC\u51FA CSV </button><button class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Share2), { class: "w-4 h-4" }, null, _parent));
        _push(` \u5BFC\u51FA JSON </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5173\u4E8E\u5DE5\u4F5C\u65E5\u8BA1\u7B97 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u8BA1\u7B97\u89C4\u5219</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u9ED8\u8BA4\u5DE5\u4F5C\u65E5\u4E3A\u5468\u4E00\u81F3\u5468\u4E94\uFF0C\u5468\u672B\u4E3A\u5468\u516D\u548C\u5468\u65E5</li><li>\u53EF\u4EE5\u81EA\u5B9A\u4E49\u54EA\u4E9B\u65E5\u671F\u4E3A\u5DE5\u4F5C\u65E5</li><li>\u652F\u6301\u6DFB\u52A0\u81EA\u5B9A\u4E49\u8282\u5047\u65E5\uFF0C\u8FD9\u4E9B\u65E5\u671F\u5C06\u4ECE\u5DE5\u4F5C\u65E5\u4E2D\u6392\u9664</li><li>\u8BA1\u7B97\u5305\u542B\u5F00\u59CB\u65E5\u671F\u548C\u7ED3\u675F\u65E5\u671F</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u5E38\u89C1\u5E94\u7528</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u9879\u76EE\u5DE5\u671F\u8BA1\u7B97\uFF0C\u6392\u9664\u5468\u672B\u548C\u8282\u5047\u65E5</li><li>\u8BA1\u7B97\u8BF7\u5047\u5929\u6570\u548C\u5DE5\u4F5C\u65E5</li><li>\u786E\u5B9A\u4EA4\u8D27\u65E5\u671F\u548C\u5DE5\u4F5C\u8FDB\u5EA6</li><li>\u85AA\u8D44\u7ED3\u7B97\u5468\u671F\u8BA1\u7B97</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/date-diff",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u65E5\u671F\u5DEE\u8BA1\u7B97</p><p class="text-xs text-muted-foreground"${_scopeId}>\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u7684\u65F6\u95F4\u5DEE</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u65E5\u671F\u5DEE\u8BA1\u7B97"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u7684\u65F6\u95F4\u5DEE")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u5012\u8BA1\u65F6\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u8BBE\u7F6E\u5012\u8BA1\u65F6</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Timer), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5012\u8BA1\u65F6\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u8BBE\u7F6E\u5012\u8BA1\u65F6")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Cron \u89E3\u6790\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u89E3\u6790\u5B9A\u65F6\u4EFB\u52A1\u8868\u8FBE\u5F0F</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Clock), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Cron \u89E3\u6790\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u89E3\u6790\u5B9A\u65F6\u4EFB\u52A1\u8868\u8FBE\u5F0F")
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

export { _sfc_main as default };
//# sourceMappingURL=workday-calculator-r8-rYD93.mjs.map
