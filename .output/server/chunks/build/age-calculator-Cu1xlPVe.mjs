import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Info, Calendar, ArrowRight, Calculator, CalendarDays } from 'lucide-vue-next';
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
      { name: "2000\u5E74\u51FA\u751F\uFF08\u5343\u79A7\u5B9D\u5B9D\uFF09", date: "2000-01-01", age: 24 },
      { name: "1990\u5E74\u51FA\u751F\uFF0890\u540E\uFF09", date: "1990-01-01", age: 34 },
      { name: "1988\u5E74\u51FA\u751F\uFF08\u9F99\u5E74\uFF09", date: "1988-01-01", age: 36 },
      { name: "1980\u5E74\u51FA\u751F\uFF0880\u540E\uFF09", date: "1980-01-01", age: 44 },
      { name: "1970\u5E74\u51FA\u751F\uFF0870\u540E\uFF09", date: "1970-01-01", age: 54 }
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
      title: "\u5E74\u9F84\u8BA1\u7B97\u5668 - \u7CBE\u786E\u8BA1\u7B97\u5E74\u9F84\u548C\u751F\u65E5\u4FE1\u606F",
      description: "\u514D\u8D39\u5728\u7EBF\u5E74\u9F84\u8BA1\u7B97\u5DE5\u5177\uFF0C\u7CBE\u786E\u8BA1\u7B97\u5E74\u3001\u6708\u3001\u65E5\u3001\u5C0F\u65F6\u7B49\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5305\u542B\u661F\u5EA7\u67E5\u8BE2\u3001\u751F\u65E5\u5012\u8BA1\u65F6\u7B49\u529F\u80FD\u3002",
      keywords: ["\u5E74\u9F84\u8BA1\u7B97", "\u751F\u65E5\u8BA1\u7B97", "\u661F\u5EA7\u67E5\u8BE2", "\u751F\u65E5\u5012\u8BA1\u65F6", "\u7CBE\u786E\u5E74\u9F84", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u5E74\u9F84\u8BA1\u7B97\u5668</h1><p class="text-muted-foreground">\u7CBE\u786E\u8BA1\u7B97\u5E74\u9F84\uFF0C\u5305\u62EC\u5E74\u3001\u6708\u3001\u65E5\u3001\u5C0F\u65F6\u7B49\u8BE6\u7EC6\u4FE1\u606F</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u51FA\u751F\u4FE1\u606F</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u51FA\u751F\u65E5\u671F</label><input${ssrRenderAttr("value", birthDate.value)} type="datetime-local" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><div class="grid grid-cols-2 gap-2"><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> \u4ECA\u5929\u51FA\u751F\uFF080\u5C81\uFF09 </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> \u6628\u5929\u51FA\u751F\uFF080\u5C81\uFF09 </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> \u53BB\u5E74\u51FA\u751F\uFF081\u5C81\uFF09 </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> 10\u5E74\u524D\u51FA\u751F </button></div><div><label class="text-sm font-medium">\u5E38\u7528\u751F\u65E5</label><div class="mt-2 space-y-2"><!--[-->`);
      ssrRenderList(birthdayPresets, (preset) => {
        _push(`<div class="flex justify-between items-center p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors"><span class="text-sm">${ssrInterpolate(preset.name)}</span><span class="text-sm text-muted-foreground">${ssrInterpolate(preset.age)}\u5C81</span></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      if (ageResult.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8BA1\u7B97\u7ED3\u679C</h2><div class="space-y-4"><div class="p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-2">\u5F53\u524D\u5E74\u9F84</div><div class="text-3xl font-bold">${ssrInterpolate(ageResult.value.years)}\u5C81</div><div class="text-sm text-muted-foreground mt-1">${ssrInterpolate(ageResult.value.months)}\u4E2A\u6708 ${ssrInterpolate(ageResult.value.days)}\u5929</div></div><div class="grid grid-cols-2 gap-3 text-sm"><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">\u603B\u6708\u6570</div><div class="font-mono">${ssrInterpolate(ageResult.value.totalMonths)}\u4E2A\u6708</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">\u603B\u5468\u6570</div><div class="font-mono">${ssrInterpolate(ageResult.value.totalWeeks)}\u5468</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">\u603B\u5929\u6570</div><div class="font-mono">${ssrInterpolate(ageResult.value.totalDays)}\u5929</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">\u603B\u5C0F\u65F6\u6570</div><div class="font-mono">${ssrInterpolate(ageResult.value.totalHours.toLocaleString())}\u5C0F\u65F6</div></div></div><div class="space-y-3"><div class="text-sm font-medium">\u91CD\u8981\u91CC\u7A0B\u7891</div><div class="space-y-2"><div class="flex justify-between items-center p-2 bg-muted/50 rounded"><span class="text-sm">\u7B2C100\u5929</span><span class="text-sm text-muted-foreground">${ssrInterpolate(milestoneDays.value[100])}</span></div><div class="flex justify-between items-center p-2 bg-muted/50 rounded"><span class="text-sm">\u7B2C1000\u5929</span><span class="text-sm text-muted-foreground">${ssrInterpolate(milestoneDays.value[1e3])}</span></div><div class="flex justify-between items-center p-2 bg-muted/50 rounded"><span class="text-sm">\u7B2C10000\u5929</span><span class="text-sm text-muted-foreground">${ssrInterpolate(milestoneDays.value[1e4])}</span></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u76EE\u6807\u5E74\u9F84\u8BA1\u7B97</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u76EE\u6807\u5E74\u9F84</label><input${ssrRenderAttr("value", targetAge.value)} type="number" min="1" max="150" placeholder="\u8F93\u5165\u5E74\u9F84" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div>`);
      if (targetDateResult.value) {
        _push(`<div class="p-4 bg-muted rounded-lg space-y-2"><div class="text-sm text-muted-foreground">\u6EE1${ssrInterpolate(targetAge.value)}\u5C81\u7684\u65E5\u671F</div><div class="font-medium">${ssrInterpolate(targetDateResult.value.date)}</div><div class="text-sm text-muted-foreground">\u8FD8\u6709${ssrInterpolate(targetDateResult.value.daysLeft)}\u5929</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="text-sm font-medium">\u5E38\u89C1\u76EE\u6807\u5E74\u9F84</label><div class="mt-2 grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(commonAges, (age) => {
        _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm">${ssrInterpolate(age)}\u5C81 </button>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      if (nextBirthday.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u4E0B\u4E00\u4E2A\u751F\u65E5</h2><div class="space-y-3"><div class="p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-2">${ssrInterpolate(nextBirthday.value.age)}\u5C81\u751F\u65E5</div><div class="text-xl font-bold">${ssrInterpolate(nextBirthday.value.date)}</div><div class="text-sm text-muted-foreground mt-1">\u8FD8\u6709${ssrInterpolate(nextBirthday.value.daysLeft)}\u5929</div></div>`);
        if (nextBirthday.value.isLeapBirthday) {
          _push(`<div class="p-3 bg-yellow-50 border border-yellow-200 rounded-lg"><div class="text-sm text-yellow-800"> \u2B50 \u60A8\u662F\u95F0\u5E74\u51FA\u751F\uFF0C4\u5E74\u624D\u8FC7\u4E00\u4E2A\u771F\u6B63\u7684\u751F\u65E5\uFF01 </div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (zodiacInfo.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u661F\u5EA7\u4FE1\u606F</h2><div class="flex items-center gap-4"><div class="text-4xl">${ssrInterpolate(zodiacInfo.value.emoji)}</div><div><div class="font-medium">${ssrInterpolate(zodiacInfo.value.name)}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(zodiacInfo.value.dateRange)}</div><div class="text-sm text-muted-foreground mt-1">${ssrInterpolate(zodiacInfo.value.element)}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (ageResult.value && ageResult.value.totalDays > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5386\u53F2\u77AC\u95F4</h2><div class="space-y-3 text-sm"><div class="p-3 bg-muted rounded-lg"><div class="font-medium mb-1">\u51FA\u751F\u90A3\u5929\u7684\u4E16\u754C</div><div class="text-muted-foreground">${ssrInterpolate(ageResult.value.birthDayInfo)}</div></div><div class="grid grid-cols-2 gap-3"><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">\u51FA\u751F\u65F6\u8DDD\u73B0\u5728</div><div class="font-mono">${ssrInterpolate(ageResult.value.pastTimeInfo)}</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-muted-foreground mb-1">\u751F\u547D\u8FDB\u5EA6</div><div class="font-mono">${ssrInterpolate(ageResult.value.lifeProgress)}</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5173\u4E8E\u5E74\u9F84\u8BA1\u7B97 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u8BA1\u7B97\u65B9\u6CD5</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u6309\u7167\u516C\u5386\u7CBE\u786E\u8BA1\u7B97\uFF0C\u5305\u542B\u95F0\u5E74\u95F0\u6708\u7684\u5904\u7406</li><li>\u5E74\u9F84\u8BA1\u7B97\u8003\u8651\u4E86\u51FA\u751F\u65F6\u523B\u7684\u7CBE\u786E\u65F6\u95F4</li><li>\u95F0\u5E742\u670829\u65E5\u51FA\u751F\u7684\u4EBA\u5728\u975E\u95F0\u5E74\u751F\u65E5\u4E3A2\u670828\u65E5\u62163\u67081\u65E5</li><li>\u6240\u6709\u8BA1\u7B97\u90FD\u57FA\u4E8E\u5F53\u524D\u7684\u7CFB\u7EDF\u65F6\u95F4</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u8DA3\u5473\u77E5\u8BC6</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u4EBA\u7C7B\u7684\u5E73\u5747\u5BFF\u547D\u7EA6\u4E3A72\u5C81</li><li>\u6D3B\u5230100\u5C81\u7684\u4EBA\u88AB\u79F0\u4E3A&quot;\u767E\u5C81\u8001\u4EBA&quot;</li><li>\u95F0\u5E74\u6BCF4\u5E74\u51FA\u73B0\u4E00\u6B21\uFF0C\u4F46\u80FD\u88AB100\u6574\u9664\u4F46\u4E0D\u80FD\u88AB400\u6574\u9664\u7684\u5E74\u4EFD\u9664\u5916</li><li>\u5168\u7403\u6BCF\u79D2\u5927\u7EA6\u67094.3\u4E2A\u5A74\u513F\u51FA\u751F</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
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
        to: "/tools/date-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calculator), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u65E5\u671F\u8BA1\u7B97\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u65E5\u671F\u52A0\u51CF\u8BA1\u7B97</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calculator), { class: "w-5 h-5 text-primary" }),
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
        to: "/tools/week-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CalendarDays), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u5468\u6570\u8BA1\u7B97\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u8BA1\u7B97\u65E5\u671F\u6240\u5728\u5468\u6570</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CalendarDays), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5468\u6570\u8BA1\u7B97\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u8BA1\u7B97\u65E5\u671F\u6240\u5728\u5468\u6570")
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

export { _sfc_main as default };
//# sourceMappingURL=age-calculator-Cu1xlPVe.mjs.map
