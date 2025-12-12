import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
import { Play, Pause, Flag, RotateCcw, X, Info, Timer, ArrowRight, Clock, TrendingUp } from 'lucide-vue-next';
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
  __name: "stopwatch",
  __ssrInlineRender: true,
  setup(__props) {
    const elapsedTime = ref(0);
    ref(0);
    const isRunning = ref(false);
    const isPaused = ref(false);
    const laps = ref([]);
    const timePresets = [
      { name: "1\u5206\u949F", seconds: 60 },
      { name: "3\u5206\u949F", seconds: 180 },
      { name: "5\u5206\u949F", seconds: 300 },
      { name: "10\u5206\u949F", seconds: 600 },
      { name: "25\u5206\u949F\uFF08\u756A\u8304\u949F\uFF09", seconds: 1500 }
    ];
    const stats = computed(() => {
      if (laps.length < 2) return { fastest: 0, slowest: 0, average: 0 };
      const times = laps.map((lap2) => lap2.splitTime);
      const fastest = Math.min(...times);
      const slowest = Math.max(...times);
      const average = times.reduce((a, b) => a + b, 0) / times.length;
      return { fastest, slowest, average: Math.round(average) };
    });
    const formatTime = (centiseconds) => {
      const totalSeconds = Math.floor(centiseconds / 100);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor(totalSeconds % 3600 / 60);
      const seconds = totalSeconds % 60;
      if (hours > 0) {
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      }
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };
    const formatMilliseconds = (centiseconds) => {
      return String(centiseconds % 100).padStart(2, "0");
    };
    useSeoMeta({
      title: "\u79D2\u8868\u8BA1\u65F6\u5668 - \u5728\u7EBF\u7CBE\u786E\u8BA1\u65F6\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u79D2\u8868\u5DE5\u5177\uFF0C\u652F\u6301\u7CBE\u786E\u5230\u767E\u5206\u4E4B\u4E00\u79D2\u7684\u8BA1\u65F6\u3001\u8BA1\u6B21\u8BB0\u5F55\u3001\u7EDF\u8BA1\u5206\u6790\u7B49\u529F\u80FD\u3002",
      keywords: ["\u79D2\u8868", "\u8BA1\u65F6\u5668", "\u5728\u7EBF\u8BA1\u65F6", "\u7CBE\u786E\u8BA1\u65F6", "\u8FD0\u52A8\u8BA1\u65F6", "\u5B66\u4E60\u8BA1\u65F6"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u79D2\u8868\u8BA1\u65F6\u5668</h1><p class="text-muted-foreground">\u7CBE\u786E\u8BA1\u65F6\u5DE5\u5177\uFF0C\u652F\u6301\u8BB0\u5F55\u5206\u6BB5\u65F6\u95F4\u548C\u7EDF\u8BA1\u5206\u6790</p></div><div class="space-y-6"><div class="bg-card border rounded-lg p-8 text-center"><div class="space-y-6"><div class="text-6xl lg:text-8xl font-mono font-bold tabular-nums">${ssrInterpolate(formatTime(elapsedTime.value))}</div><div class="text-2xl font-mono text-muted-foreground tabular-nums"> .${ssrInterpolate(formatMilliseconds(elapsedTime.value))}</div><div class="flex justify-center gap-4">`);
      if (!isRunning.value) {
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
      if (elapsedTime.value > 0) {
        _push(`<button${ssrIncludeBooleanAttr(!isRunning.value && !isPaused.value) ? " disabled" : ""} class="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">`);
        _push(ssrRenderComponent(unref(Flag), { class: "w-5 h-5" }, null, _parent));
        _push(` \u8BA1\u6B21 </button>`);
      } else {
        _push(`<!---->`);
      }
      if (elapsedTime.value > 0) {
        _push(`<button class="px-6 py-3 border border-destructive text-destructive rounded-md hover:bg-destructive/5 transition-colors flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(RotateCcw), { class: "w-5 h-5" }, null, _parent));
        _push(` \u91CD\u7F6E </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u8BA1\u6B21\u8BB0\u5F55</h2>`);
      if (laps.value.length > 0) {
        _push(`<div class="text-sm text-muted-foreground"> \u5171 ${ssrInterpolate(laps.value.length)} \u6B21\u8BB0\u5F55 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (laps.value.length === 0) {
        _push(`<div class="text-center text-muted-foreground py-8"> \u6682\u65E0\u8BA1\u6B21\u8BB0\u5F55 </div>`);
      } else {
        _push(`<div class="space-y-2 max-h-96 overflow-y-auto">`);
        if (laps.value.length > 1) {
          _push(`<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4"><div class="p-3 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">\u6700\u5FEB</div><div class="font-mono font-bold text-green-600">${ssrInterpolate(formatTime(stats.value.fastest))}</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">\u6700\u6162</div><div class="font-mono font-bold text-red-600">${ssrInterpolate(formatTime(stats.value.slowest))}</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">\u5E73\u5747</div><div class="font-mono font-bold text-blue-600">${ssrInterpolate(formatTime(stats.value.average))}</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">\u603B\u8BA1</div><div class="font-mono font-bold">${ssrInterpolate(formatTime(elapsedTime.value))}</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="space-y-1"><!--[-->`);
        ssrRenderList(laps.value, (lap2, index) => {
          _push(`<div class="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors"><div class="flex items-center gap-4"><span class="text-sm font-medium text-muted-foreground w-16"> \u8BA1\u6B21 ${ssrInterpolate(laps.value.length - index)}</span><div class="flex items-center gap-2">`);
          if (lap2.type === "fastest") {
            _push(`<span class="text-xs text-green-600 font-medium">\u6700\u5FEB</span>`);
          } else {
            _push(`<!---->`);
          }
          if (lap2.type === "slowest") {
            _push(`<span class="text-xs text-red-600 font-medium">\u6700\u6162</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="flex items-center gap-6"><div class="font-mono text-sm"><span class="text-muted-foreground">\u95F4\u9694:</span><span>${ssrInterpolate(formatTime(lap2.splitTime))}</span></div><div class="font-mono font-medium"><span class="text-muted-foreground">\u603B\u8BA1:</span><span>${ssrInterpolate(formatTime(lap2.totalTime))}</span></div><button class="text-muted-foreground hover:text-destructive transition-colors">`);
          _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
          _push(`</button></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      if (laps.value.length > 0) {
        _push(`<div class="mt-4 flex gap-2"><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> \u5BFC\u51FA\u6570\u636E </button><button class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors text-sm"> \u5206\u4EAB\u7ED3\u679C </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5FEB\u901F\u8BBE\u7F6E</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(timePresets, (preset) => {
        _push(`<button${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="w-full px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5FEB\u6377\u952E</h2><div class="space-y-3 text-sm"><div class="flex justify-between items-center"><span class="text-muted-foreground">\u5F00\u59CB/\u6682\u505C</span><kbd class="px-2 py-1 bg-muted rounded font-mono text-xs">Space</kbd></div><div class="flex justify-between items-center"><span class="text-muted-foreground">\u8BA1\u6B21</span><kbd class="px-2 py-1 bg-muted rounded font-mono text-xs">L</kbd></div><div class="flex justify-between items-center"><span class="text-muted-foreground">\u91CD\u7F6E</span><kbd class="px-2 py-1 bg-muted rounded font-mono text-xs">R</kbd></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u4F7F\u7528\u573A\u666F</h2><div class="space-y-3 text-sm"><div class="flex items-center gap-2"><div class="w-2 h-2 bg-primary rounded-full"></div><span>\u8FD0\u52A8\u5065\u8EAB\u8BA1\u65F6</span></div><div class="flex items-center gap-2"><div class="w-2 h-2 bg-primary rounded-full"></div><span>\u5B66\u4E60\u4E13\u6CE8\u65F6\u95F4</span></div><div class="flex items-center gap-2"><div class="w-2 h-2 bg-primary rounded-full"></div><span>\u4F1A\u8BAE\u6F14\u8BB2\u8BA1\u65F6</span></div><div class="flex items-center gap-2"><div class="w-2 h-2 bg-primary rounded-full"></div><span>\u6BD4\u8D5B\u7ADE\u6280\u8BA1\u65F6</span></div><div class="flex items-center gap-2"><div class="w-2 h-2 bg-primary rounded-full"></div><span>\u70F9\u996A\u70D8\u7119\u8BA1\u65F6</span></div></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u8BF4\u660E </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u57FA\u672C\u64CD\u4F5C</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u70B9\u51FB&quot;\u5F00\u59CB&quot;\u6309\u94AE\u6216\u6309\u7A7A\u683C\u952E\u5F00\u59CB\u8BA1\u65F6</li><li>\u8BA1\u65F6\u8FC7\u7A0B\u4E2D\u70B9\u51FB&quot;\u8BA1\u6B21&quot;\u6309\u94AE\u8BB0\u5F55\u5206\u6BB5\u65F6\u95F4</li><li>\u53EF\u4EE5\u968F\u65F6\u6682\u505C\u548C\u7EE7\u7EED\u8BA1\u65F6</li><li>\u70B9\u51FB&quot;\u91CD\u7F6E&quot;\u6E05\u7A7A\u6240\u6709\u8BB0\u5F55</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u9AD8\u7EA7\u529F\u80FD</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u81EA\u52A8\u6807\u8BB0\u6700\u5FEB\u548C\u6700\u6162\u7684\u8BA1\u6B21</li><li>\u663E\u793A\u5E73\u5747\u65F6\u95F4\u548C\u7EDF\u8BA1\u4FE1\u606F</li><li>\u652F\u6301\u5BFC\u51FA\u8BA1\u6B21\u6570\u636E\u4E3AJSON\u683C\u5F0F</li><li>\u53EF\u5206\u4EAB\u8BA1\u65F6\u7ED3\u679C\u7ED9\u4ED6\u4EBA</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
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
        to: "/tools/pace-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TrendingUp), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u914D\u901F\u8BA1\u7B97\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u8BA1\u7B97\u8FD0\u52A8\u914D\u901F</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TrendingUp), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u914D\u901F\u8BA1\u7B97\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u8BA1\u7B97\u8FD0\u52A8\u914D\u901F")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/stopwatch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=stopwatch-DKJpqhjj.mjs.map
