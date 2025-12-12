import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import { Play, Pause, Flag, RotateCcw, X, Info, Timer, ArrowRight, Clock, TrendingUp } from "lucide-vue-next";
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
  __name: "stopwatch",
  __ssrInlineRender: true,
  setup(__props) {
    const elapsedTime = ref(0);
    ref(0);
    const isRunning = ref(false);
    const isPaused = ref(false);
    const laps = ref([]);
    const timePresets = [
      { name: "1分钟", seconds: 60 },
      { name: "3分钟", seconds: 180 },
      { name: "5分钟", seconds: 300 },
      { name: "10分钟", seconds: 600 },
      { name: "25分钟（番茄钟）", seconds: 1500 }
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
      title: "秒表计时器 - 在线精确计时工具",
      description: "免费在线秒表工具，支持精确到百分之一秒的计时、计次记录、统计分析等功能。",
      keywords: ["秒表", "计时器", "在线计时", "精确计时", "运动计时", "学习计时"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">秒表计时器</h1><p class="text-muted-foreground">精确计时工具，支持记录分段时间和统计分析</p></div><div class="space-y-6"><div class="bg-card border rounded-lg p-8 text-center"><div class="space-y-6"><div class="text-6xl lg:text-8xl font-mono font-bold tabular-nums">${ssrInterpolate(formatTime(elapsedTime.value))}</div><div class="text-2xl font-mono text-muted-foreground tabular-nums"> .${ssrInterpolate(formatMilliseconds(elapsedTime.value))}</div><div class="flex justify-center gap-4">`);
      if (!isRunning.value) {
        _push(`<button class="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(Play), { class: "w-5 h-5" }, null, _parent));
        _push(` 开始 </button>`);
      } else {
        _push(`<!---->`);
      }
      if (isRunning.value) {
        _push(`<button class="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(Pause), { class: "w-5 h-5" }, null, _parent));
        _push(` 暂停 </button>`);
      } else {
        _push(`<!---->`);
      }
      if (isPaused.value) {
        _push(`<button class="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(Play), { class: "w-5 h-5" }, null, _parent));
        _push(` 继续 </button>`);
      } else {
        _push(`<!---->`);
      }
      if (elapsedTime.value > 0) {
        _push(`<button${ssrIncludeBooleanAttr(!isRunning.value && !isPaused.value) ? " disabled" : ""} class="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">`);
        _push(ssrRenderComponent(unref(Flag), { class: "w-5 h-5" }, null, _parent));
        _push(` 计次 </button>`);
      } else {
        _push(`<!---->`);
      }
      if (elapsedTime.value > 0) {
        _push(`<button class="px-6 py-3 border border-destructive text-destructive rounded-md hover:bg-destructive/5 transition-colors flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(RotateCcw), { class: "w-5 h-5" }, null, _parent));
        _push(` 重置 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">计次记录</h2>`);
      if (laps.value.length > 0) {
        _push(`<div class="text-sm text-muted-foreground"> 共 ${ssrInterpolate(laps.value.length)} 次记录 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (laps.value.length === 0) {
        _push(`<div class="text-center text-muted-foreground py-8"> 暂无计次记录 </div>`);
      } else {
        _push(`<div class="space-y-2 max-h-96 overflow-y-auto">`);
        if (laps.value.length > 1) {
          _push(`<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4"><div class="p-3 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">最快</div><div class="font-mono font-bold text-green-600">${ssrInterpolate(formatTime(stats.value.fastest))}</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">最慢</div><div class="font-mono font-bold text-red-600">${ssrInterpolate(formatTime(stats.value.slowest))}</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">平均</div><div class="font-mono font-bold text-blue-600">${ssrInterpolate(formatTime(stats.value.average))}</div></div><div class="p-3 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">总计</div><div class="font-mono font-bold">${ssrInterpolate(formatTime(elapsedTime.value))}</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="space-y-1"><!--[-->`);
        ssrRenderList(laps.value, (lap2, index) => {
          _push(`<div class="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors"><div class="flex items-center gap-4"><span class="text-sm font-medium text-muted-foreground w-16"> 计次 ${ssrInterpolate(laps.value.length - index)}</span><div class="flex items-center gap-2">`);
          if (lap2.type === "fastest") {
            _push(`<span class="text-xs text-green-600 font-medium">最快</span>`);
          } else {
            _push(`<!---->`);
          }
          if (lap2.type === "slowest") {
            _push(`<span class="text-xs text-red-600 font-medium">最慢</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="flex items-center gap-6"><div class="font-mono text-sm"><span class="text-muted-foreground">间隔:</span><span>${ssrInterpolate(formatTime(lap2.splitTime))}</span></div><div class="font-mono font-medium"><span class="text-muted-foreground">总计:</span><span>${ssrInterpolate(formatTime(lap2.totalTime))}</span></div><button class="text-muted-foreground hover:text-destructive transition-colors">`);
          _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
          _push(`</button></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      if (laps.value.length > 0) {
        _push(`<div class="mt-4 flex gap-2"><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> 导出数据 </button><button class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors text-sm"> 分享结果 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">快速设置</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(timePresets, (preset) => {
        _push(`<button${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="w-full px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">快捷键</h2><div class="space-y-3 text-sm"><div class="flex justify-between items-center"><span class="text-muted-foreground">开始/暂停</span><kbd class="px-2 py-1 bg-muted rounded font-mono text-xs">Space</kbd></div><div class="flex justify-between items-center"><span class="text-muted-foreground">计次</span><kbd class="px-2 py-1 bg-muted rounded font-mono text-xs">L</kbd></div><div class="flex justify-between items-center"><span class="text-muted-foreground">重置</span><kbd class="px-2 py-1 bg-muted rounded font-mono text-xs">R</kbd></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">使用场景</h2><div class="space-y-3 text-sm"><div class="flex items-center gap-2"><div class="w-2 h-2 bg-primary rounded-full"></div><span>运动健身计时</span></div><div class="flex items-center gap-2"><div class="w-2 h-2 bg-primary rounded-full"></div><span>学习专注时间</span></div><div class="flex items-center gap-2"><div class="w-2 h-2 bg-primary rounded-full"></div><span>会议演讲计时</span></div><div class="flex items-center gap-2"><div class="w-2 h-2 bg-primary rounded-full"></div><span>比赛竞技计时</span></div><div class="flex items-center gap-2"><div class="w-2 h-2 bg-primary rounded-full"></div><span>烹饪烘焙计时</span></div></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用说明 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">基本操作</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>点击&quot;开始&quot;按钮或按空格键开始计时</li><li>计时过程中点击&quot;计次&quot;按钮记录分段时间</li><li>可以随时暂停和继续计时</li><li>点击&quot;重置&quot;清空所有记录</li></ul></div><div><h4 class="font-medium text-foreground mb-2">高级功能</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>自动标记最快和最慢的计次</li><li>显示平均时间和统计信息</li><li>支持导出计次数据为JSON格式</li><li>可分享计时结果给他人</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
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
        to: "/tools/timestamp-converter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Clock), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>时间戳转换器</p><p class="text-xs text-muted-foreground"${_scopeId}>Unix时间戳转换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Clock), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "时间戳转换器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Unix时间戳转换")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>配速计算器</p><p class="text-xs text-muted-foreground"${_scopeId}>计算运动配速</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TrendingUp), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "配速计算器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "计算运动配速")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=stopwatch-DKJpqhjj.js.map
