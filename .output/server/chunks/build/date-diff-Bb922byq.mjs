import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Info, Calendar, ArrowRight, Cake, CalendarDays } from 'lucide-vue-next';
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
      { name: "\u4ECA\u65E5\u5BF9\u6BD4", days: 0 },
      { name: "\u672C\u5468\u5BF9\u6BD4", days: 7 },
      { name: "\u672C\u6708\u5BF9\u6BD4", days: 30 },
      { name: "\u4E0A\u6708\u5BF9\u6BD4", days: -30 },
      { name: "\u672C\u5E74\u5BF9\u6BD4", days: 365 },
      { name: "\u53BB\u5E74\u5BF9\u6BD4", days: -365 }
    ];
    useSeoMeta({
      title: "\u65E5\u671F\u5DEE\u8BA1\u7B97\u5668 - \u5728\u7EBF\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u7684\u65F6\u95F4\u5DEE",
      description: "\u7CBE\u786E\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u4E4B\u95F4\u7684\u65F6\u95F4\u5DEE\uFF0C\u652F\u6301\u5E74\u3001\u6708\u3001\u65E5\u3001\u5C0F\u65F6\u3001\u5206\u949F\u3001\u79D2\u7B49\u591A\u79CD\u5355\u4F4D\u663E\u793A\uFF0C\u5305\u542B\u5DE5\u4F5C\u65E5\u8BA1\u7B97\u529F\u80FD\u3002",
      keywords: ["\u65E5\u671F\u5DEE", "\u65F6\u95F4\u5DEE", "\u65E5\u671F\u8BA1\u7B97", "\u5DE5\u4F5C\u65E5\u8BA1\u7B97", "\u65E5\u671F\u95F4\u9694", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u65E5\u671F\u5DEE\u8BA1\u7B97\u5668</h1><p class="text-muted-foreground">\u7CBE\u786E\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u4E4B\u95F4\u7684\u65F6\u95F4\u5DEE\uFF0C\u652F\u6301\u591A\u79CD\u5355\u4F4D\u663E\u793A</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u9009\u62E9\u65E5\u671F</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u7B2C\u4E00\u4E2A\u65E5\u671F</label><input${ssrRenderAttr("value", date1.value)} type="datetime-local" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><div class="mt-2 flex gap-2"><button class="px-3 py-1 text-sm text-primary hover:text-primary/80 transition-colors"> \u4ECA\u5929 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6628\u5929 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u660E\u5929 </button></div></div><div><label class="text-sm font-medium">\u7B2C\u4E8C\u4E2A\u65E5\u671F</label><input${ssrRenderAttr("value", date2.value)} type="datetime-local" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><div class="mt-2 flex gap-2"><button class="px-3 py-1 text-sm text-primary hover:text-primary/80 transition-colors"> \u4ECA\u5929 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6628\u5929 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u660E\u5929 </button></div></div><div><label class="text-sm font-medium">\u5FEB\u6377\u9009\u62E9</label><div class="mt-2 grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(datePresets, (preset) => {
        _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm">${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      if (difference.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8BA1\u7B97\u7ED3\u679C</h2><div class="space-y-4"><div class="p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-2">\u65F6\u95F4\u5DEE</div><div class="text-2xl font-bold">${ssrInterpolate(difference.value.days)}\u5929</div><div class="text-sm text-muted-foreground mt-1"> \u6216 ${ssrInterpolate(difference.value.hours)}\u5C0F\u65F6 \u6216 ${ssrInterpolate(difference.value.minutes)}\u5206\u949F </div></div><div class="grid grid-cols-2 gap-3 text-sm"><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">\u5E74</div><div class="font-mono">${ssrInterpolate(difference.value.years)}\u5E74</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">\u6708</div><div class="font-mono">${ssrInterpolate(difference.value.months)}\u6708</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">\u5468</div><div class="font-mono">${ssrInterpolate(difference.value.weeks)}\u5468</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">\u79D2</div><div class="font-mono">${ssrInterpolate(difference.value.seconds.toLocaleString())}\u79D2</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4">`);
      if (timeline.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u65F6\u95F4\u7EBF\u89C6\u56FE</h2><div class="space-y-4"><div class="relative"><div class="absolute left-4 top-6 bottom-6 w-0.5 bg-border"></div><div class="relative flex items-center gap-3"><div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center"><span class="text-white text-xs font-bold">1</span></div><div><div class="font-medium">${ssrInterpolate(timeline.value.date1)}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(timeline.value.time1)}</div></div></div><div class="ml-11 mt-2 p-3 bg-muted rounded-lg"><div class="text-sm font-medium">${ssrInterpolate(timeline.value.interval)}</div></div><div class="relative flex items-center gap-3 mt-4"><div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center"><span class="text-white text-xs font-bold">2</span></div><div><div class="font-medium">${ssrInterpolate(timeline.value.date2)}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(timeline.value.time2)}</div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (workdayResult.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5DE5\u4F5C\u65E5\u7EDF\u8BA1</h2><div class="space-y-3"><div class="flex justify-between items-center"><span class="text-sm text-muted-foreground">\u603B\u5929\u6570</span><span class="font-mono">${ssrInterpolate(workdayResult.value.totalDays)}\u5929</span></div><div class="flex justify-between items-center"><span class="text-sm text-muted-foreground">\u5DE5\u4F5C\u65E5</span><span class="font-mono text-primary">${ssrInterpolate(workdayResult.value.workdays)}\u5929</span></div><div class="flex justify-between items-center"><span class="text-sm text-muted-foreground">\u5468\u672B</span><span class="font-mono text-muted-foreground">${ssrInterpolate(workdayResult.value.weekends)}\u5929</span></div>`);
        if (workdayResult.value.holidays > 0) {
          _push(`<div class="flex justify-between items-center"><span class="text-sm text-muted-foreground">\u8282\u5047\u65E5</span><span class="font-mono text-destructive">${ssrInterpolate(workdayResult.value.holidays)}\u5929</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (history.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u5386\u53F2\u8BB0\u5F55</h2><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div><div class="space-y-3"><!--[-->`);
        ssrRenderList(history.value, (item, index) => {
          _push(`<div class="p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors"><div class="flex justify-between items-center"><div class="text-sm"><span class="font-medium">${ssrInterpolate(item.date1)}</span><span class="text-muted-foreground mx-2">\u81F3</span><span class="font-medium">${ssrInterpolate(item.date2)}</span></div><span class="text-sm text-muted-foreground">${ssrInterpolate(item.days)}\u5929</span></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5173\u4E8E\u65E5\u671F\u5DEE\u8BA1\u7B97 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u8BA1\u7B97\u89C4\u5219</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u8BA1\u7B97\u7ED3\u679C\u5305\u62EC\u6240\u6709\u65F6\u95F4\u5355\u4F4D\uFF0C\u53EF\u6839\u636E\u9700\u8981\u9009\u62E9\u663E\u793A</li><li>\u95F0\u5E74\u548C\u5E73\u5E74\u76842\u6708\u4EFD\u5929\u6570\u5DEE\u5F02\u5DF2\u81EA\u52A8\u5904\u7406</li><li>\u8DE8\u5E74\u8BA1\u7B97\u4F1A\u6B63\u786E\u5904\u7406\u5E74\u4EFD\u53D8\u5316</li><li>\u5DE5\u4F5C\u65E5\u8BA1\u7B97\u6392\u9664\u5468\u516D\u5468\u65E5\uFF08\u6682\u4E0D\u5305\u542B\u6CD5\u5B9A\u8282\u5047\u65E5\uFF09</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u5E38\u89C1\u5E94\u7528</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u8BA1\u7B97\u9879\u76EE\u6301\u7EED\u65F6\u95F4</li><li>\u7EDF\u8BA1\u5047\u671F\u5929\u6570</li><li>\u8BA1\u7B97\u670D\u52A1\u5E74\u9650</li><li>\u5012\u8BA1\u65F6\u8BA1\u7B97</li><li>\u5408\u540C\u671F\u9650\u8BA1\u7B97</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/date-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u65E5\u671F\u8BA1\u7B97\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u65E5\u671F\u52A0\u51CF\u8BA1\u7B97</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u65E5\u671F\u8BA1\u7B97\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u65E5\u671F\u52A0\u51CF\u8BA1\u7B97")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u5E74\u9F84\u8BA1\u7B97\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u7CBE\u786E\u8BA1\u7B97\u5E74\u9F84</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Cake), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5E74\u9F84\u8BA1\u7B97\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u7CBE\u786E\u8BA1\u7B97\u5E74\u9F84")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u5468\u6570\u8BA1\u7B97\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u8BA1\u7B97\u5468\u6570</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CalendarDays), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5468\u6570\u8BA1\u7B97\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u8BA1\u7B97\u5468\u6570")
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

export { _sfc_main as default };
//# sourceMappingURL=date-diff-Bb922byq.mjs.map
