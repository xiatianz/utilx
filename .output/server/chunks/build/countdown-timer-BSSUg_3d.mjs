import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { Play, Pause, RotateCcw, Info, Timer, ArrowRight, Clock, Calendar } from 'lucide-vue-next';
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
  __name: "countdown-timer",
  __ssrInlineRender: true,
  setup(__props) {
    const countdown = ref(0);
    const initialCountdown = ref(0);
    const isRunning = ref(false);
    const isPaused = ref(false);
    const selectedSound = ref("beep");
    const customTime = ref({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    const history = ref([]);
    const eventDateTime = ref("");
    const eventCountdown = ref(null);
    const eventName = ref("");
    const loopCount = ref(3);
    const loopInterval = ref(5);
    const currentLoop = ref(0);
    const quickPresets = [
      { name: "\u756A\u8304\u5DE5\u4F5C\u6CD5", time: "25\u5206\u949F", seconds: 25 * 60 },
      { name: "\u77ED\u6682\u4F11\u606F", time: "5\u5206\u949F", seconds: 5 * 60 },
      { name: "\u957F\u4F11\u606F", time: "15\u5206\u949F", seconds: 15 * 60 },
      { name: "1\u5C0F\u65F6", time: "1\u5C0F\u65F6", seconds: 60 * 60 },
      { name: "30\u5206\u949F", time: "30\u5206\u949F", seconds: 30 * 60 },
      { name: "10\u5206\u949F", time: "10\u5206\u949F", seconds: 10 * 60 }
    ];
    const progress = computed(() => {
      if (initialCountdown.value === 0) return 100;
      return Math.max(0, countdown.value / initialCountdown.value * 100);
    });
    const formatTime = (seconds) => {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor(seconds % 3600 / 60);
      const s = seconds % 60;
      return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    };
    const formatEventTime = (seconds) => {
      const days = Math.floor(seconds / (24 * 3600));
      const hours = Math.floor(seconds % (24 * 3600) / 3600);
      const minutes = Math.floor(seconds % 3600 / 60);
      if (days > 0) return `${days}\u5929 ${hours}\u5C0F\u65F6 ${minutes}\u5206\u949F`;
      if (hours > 0) return `${hours}\u5C0F\u65F6 ${minutes}\u5206\u949F`;
      return `${minutes}\u5206\u949F`;
    };
    useSeoMeta({
      title: "\u5012\u8BA1\u65F6\u5668 - \u5728\u7EBF\u5012\u8BA1\u65F6\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u5012\u8BA1\u65F6\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u65F6\u95F4\u3001\u756A\u8304\u5DE5\u4F5C\u6CD5\u3001\u5FAA\u73AF\u5012\u8BA1\u65F6\u7B49\u529F\u80FD\uFF0C\u7CBE\u786E\u5230\u79D2\u7684\u5B9E\u65F6\u5012\u8BA1\u65F6\u3002",
      keywords: ["\u5012\u8BA1\u65F6", "\u8BA1\u65F6\u5668", "\u756A\u8304\u5DE5\u4F5C\u6CD5", "\u5728\u7EBF\u5DE5\u5177", "\u65F6\u95F4\u7BA1\u7406"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u5012\u8BA1\u65F6\u5668</h1><p class="text-muted-foreground">\u8BBE\u7F6E\u5012\u8BA1\u65F6\uFF0C\u7CBE\u786E\u5230\u79D2\u7684\u5B9E\u65F6\u5012\u8BA1\u65F6\u5DE5\u5177</p></div><div class="space-y-6"><div class="bg-card border rounded-lg p-8 text-center">`);
      if (isRunning.value || countdown.value > 0) {
        _push(`<div class="space-y-4"><div class="text-6xl lg:text-8xl font-mono font-bold tabular-nums">${ssrInterpolate(formatTime(countdown.value))}</div><div class="w-full bg-muted rounded-full h-3 overflow-hidden"><div class="bg-primary h-full rounded-full transition-all duration-1000 ease-linear" style="${ssrRenderStyle({ width: `${progress.value}%` })}"></div></div><div class="flex justify-center gap-4">`);
        if (!isRunning.value && countdown.value > 0) {
          _push(`<button class="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">`);
          _push(ssrRenderComponent(unref(Play), { class: "w-5 h-5" }, null, _parent));
          _push(` \u5F00\u59CB </button>`);
        } else {
          _push(`<!---->`);
        }
        if (isRunning.value) {
          _push(`<button class="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors flex items-center gap-2">`);
          _push(ssrRenderComponent(unref(Pause), { class: "w-5 h-5" }, null, _parent));
          _push(` \u6682\u505C </button>`);
        } else {
          _push(`<!---->`);
        }
        if (isPaused.value) {
          _push(`<button class="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">`);
          _push(ssrRenderComponent(unref(Play), { class: "w-5 h-5" }, null, _parent));
          _push(` \u7EE7\u7EED </button>`);
        } else {
          _push(`<!---->`);
        }
        if (countdown.value > 0) {
          _push(`<button class="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center gap-2">`);
          _push(ssrRenderComponent(unref(RotateCcw), { class: "w-5 h-5" }, null, _parent));
          _push(` \u91CD\u7F6E </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex justify-center items-center gap-3"><span class="text-sm text-muted-foreground">\u63D0\u9192\u58F0\u97F3</span><select class="px-3 py-1 border rounded-md text-sm"><option value="none"${ssrIncludeBooleanAttr(Array.isArray(selectedSound.value) ? ssrLooseContain(selectedSound.value, "none") : ssrLooseEqual(selectedSound.value, "none")) ? " selected" : ""}>\u65E0</option><option value="beep"${ssrIncludeBooleanAttr(Array.isArray(selectedSound.value) ? ssrLooseContain(selectedSound.value, "beep") : ssrLooseEqual(selectedSound.value, "beep")) ? " selected" : ""}>\u54D4\u54D4\u58F0</option><option value="bell"${ssrIncludeBooleanAttr(Array.isArray(selectedSound.value) ? ssrLooseContain(selectedSound.value, "bell") : ssrLooseEqual(selectedSound.value, "bell")) ? " selected" : ""}>\u94C3\u58F0</option><option value="alert"${ssrIncludeBooleanAttr(Array.isArray(selectedSound.value) ? ssrLooseContain(selectedSound.value, "alert") : ssrLooseEqual(selectedSound.value, "alert")) ? " selected" : ""}>\u8B66\u62A5</option></select></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (countdown.value <= 0 && !isRunning.value) {
        _push(`<div class="space-y-4"><div class="text-4xl">\u23F0</div><div class="text-2xl font-bold text-primary">\u5012\u8BA1\u65F6\u7ED3\u675F\uFF01</div><button class="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(RotateCcw), { class: "w-5 h-5" }, null, _parent));
        _push(` \u91CD\u65B0\u5F00\u59CB </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5FEB\u901F\u8BBE\u7F6E</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(quickPresets, (preset) => {
        _push(`<button${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="px-4 py-3 bg-muted hover:bg-muted/80 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"><div class="font-medium">${ssrInterpolate(preset.name)}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(preset.time)}</div></button>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u81EA\u5B9A\u4E49\u8BBE\u7F6E</h2><div class="space-y-4"><div class="grid grid-cols-3 gap-3"><div><label class="text-sm font-medium">\u5C0F\u65F6</label><input${ssrRenderAttr("value", customTime.value.hours)} type="number" min="0" max="23"${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1 disabled:opacity-50"></div><div><label class="text-sm font-medium">\u5206\u949F</label><input${ssrRenderAttr("value", customTime.value.minutes)} type="number" min="0" max="59"${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1 disabled:opacity-50"></div><div><label class="text-sm font-medium">\u79D2</label><input${ssrRenderAttr("value", customTime.value.seconds)} type="number" min="0" max="59"${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1 disabled:opacity-50"></div></div><button${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u8BBE\u7F6E\u5012\u8BA1\u65F6 </button></div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5012\u8BA1\u65F6\u5386\u53F2</h2>`);
      if (history.value.length === 0) {
        _push(`<div class="text-sm text-muted-foreground text-center py-4"> \u6682\u65E0\u5386\u53F2\u8BB0\u5F55 </div>`);
      } else {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(history.value, (item, index) => {
          _push(`<div class="p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors"><div class="flex justify-between items-center"><span class="font-medium">${ssrInterpolate(item.name)}</span><span class="text-sm text-muted-foreground">${ssrInterpolate(item.time)}</span></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u4E8B\u4EF6\u5012\u8BA1\u65F6</h2><div class="space-y-3"><div><label class="text-sm font-medium">\u76EE\u6807\u65E5\u671F\u65F6\u95F4</label><input${ssrRenderAttr("value", eventDateTime.value)} type="datetime-local" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><div><label class="text-sm font-medium">\u4E8B\u4EF6\u540D\u79F0</label><input${ssrRenderAttr("value", eventName.value)} type="text" placeholder="\u8F93\u5165\u4E8B\u4EF6\u540D\u79F0" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div>`);
      if (eventCountdown.value) {
        _push(`<div class="p-3 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground">\u8DDD\u79BB${ssrInterpolate(eventName.value || "\u4E8B\u4EF6")}</div><div class="font-mono text-lg">${ssrInterpolate(formatEventTime(eventCountdown.value))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5FAA\u73AF\u5012\u8BA1\u65F6</h2><div class="space-y-3"><div><label class="text-sm font-medium">\u5FAA\u73AF\u6B21\u6570</label><input${ssrRenderAttr("value", loopCount.value)} type="number" min="1" max="100" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><div><label class="text-sm font-medium">\u95F4\u9694\u65F6\u95F4\uFF08\u5206\u949F\uFF09</label><input${ssrRenderAttr("value", loopInterval.value)} type="number" min="0" max="60" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><button${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u5F00\u59CB\u5FAA\u73AF </button>`);
      if (currentLoop.value > 0) {
        _push(`<div class="text-sm text-muted-foreground text-center"> \u7B2C ${ssrInterpolate(currentLoop.value)} / ${ssrInterpolate(loopCount.value)} \u6B21 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u63D0\u793A </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u529F\u80FD\u8BF4\u660E</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u652F\u6301\u7CBE\u786E\u5230\u79D2\u7684\u5012\u8BA1\u65F6\u529F\u80FD</li><li>\u63D0\u4F9B\u591A\u79CD\u9884\u8BBE\u65F6\u95F4\u5FEB\u901F\u9009\u62E9</li><li>\u652F\u6301\u81EA\u5B9A\u4E49\u5012\u8BA1\u65F6\u65F6\u95F4</li><li>\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u53EF\u64AD\u653E\u63D0\u9192\u58F0\u97F3</li><li>\u652F\u6301\u5FAA\u73AF\u5012\u8BA1\u65F6\u529F\u80FD</li><li>\u53EF\u4FDD\u5B58\u5012\u8BA1\u65F6\u5386\u53F2\u8BB0\u5F55</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u5E38\u89C1\u7528\u9014</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u756A\u8304\u5DE5\u4F5C\u6CD5\uFF0825\u5206\u949F\u5DE5\u4F5C\uFF0C5\u5206\u949F\u4F11\u606F\uFF09</li><li>\u8FD0\u52A8\u95F4\u6B47\u8BA1\u65F6</li><li>\u4F1A\u8BAE\u63D0\u9192</li><li>\u70F9\u996A\u8BA1\u65F6</li><li>\u5B66\u4E60\u548C\u8003\u8BD5\u65F6\u95F4\u7BA1\u7406</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/stopwatch",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Timer), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u79D2\u8868\u8BA1\u65F6\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u7CBE\u786E\u8BA1\u65F6\u5DE5\u5177</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Timer), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u79D2\u8868\u8BA1\u65F6\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u7CBE\u786E\u8BA1\u65F6\u5DE5\u5177")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/timestamp-converter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Clock), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u65F6\u95F4\u6233\u8F6C\u6362\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>Unix\u65F6\u95F4\u6233\u8F6C\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Clock), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u65F6\u95F4\u6233\u8F6C\u6362\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Unix\u65F6\u95F4\u6233\u8F6C\u6362")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/workday-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u5DE5\u4F5C\u65E5\u8BA1\u7B97\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u8BA1\u7B97\u5DE5\u4F5C\u65E5\u5929\u6570</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5DE5\u4F5C\u65E5\u8BA1\u7B97\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u8BA1\u7B97\u5DE5\u4F5C\u65E5\u5929\u6570")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/countdown-timer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=countdown-timer-BSSUg_3d.mjs.map
