import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { Play, Pause, RotateCcw, Info, Timer, ArrowRight, Clock, Calendar } from "lucide-vue-next";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta } from "../server.mjs";
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
      { name: "番茄工作法", time: "25分钟", seconds: 25 * 60 },
      { name: "短暂休息", time: "5分钟", seconds: 5 * 60 },
      { name: "长休息", time: "15分钟", seconds: 15 * 60 },
      { name: "1小时", time: "1小时", seconds: 60 * 60 },
      { name: "30分钟", time: "30分钟", seconds: 30 * 60 },
      { name: "10分钟", time: "10分钟", seconds: 10 * 60 }
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
      if (days > 0) return `${days}天 ${hours}小时 ${minutes}分钟`;
      if (hours > 0) return `${hours}小时 ${minutes}分钟`;
      return `${minutes}分钟`;
    };
    useSeoMeta({
      title: "倒计时器 - 在线倒计时工具",
      description: "免费在线倒计时工具，支持自定义时间、番茄工作法、循环倒计时等功能，精确到秒的实时倒计时。",
      keywords: ["倒计时", "计时器", "番茄工作法", "在线工具", "时间管理"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">倒计时器</h1><p class="text-muted-foreground">设置倒计时，精确到秒的实时倒计时工具</p></div><div class="space-y-6"><div class="bg-card border rounded-lg p-8 text-center">`);
      if (isRunning.value || countdown.value > 0) {
        _push(`<div class="space-y-4"><div class="text-6xl lg:text-8xl font-mono font-bold tabular-nums">${ssrInterpolate(formatTime(countdown.value))}</div><div class="w-full bg-muted rounded-full h-3 overflow-hidden"><div class="bg-primary h-full rounded-full transition-all duration-1000 ease-linear" style="${ssrRenderStyle({ width: `${progress.value}%` })}"></div></div><div class="flex justify-center gap-4">`);
        if (!isRunning.value && countdown.value > 0) {
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
        if (countdown.value > 0) {
          _push(`<button class="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center gap-2">`);
          _push(ssrRenderComponent(unref(RotateCcw), { class: "w-5 h-5" }, null, _parent));
          _push(` 重置 </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex justify-center items-center gap-3"><span class="text-sm text-muted-foreground">提醒声音</span><select class="px-3 py-1 border rounded-md text-sm"><option value="none"${ssrIncludeBooleanAttr(Array.isArray(selectedSound.value) ? ssrLooseContain(selectedSound.value, "none") : ssrLooseEqual(selectedSound.value, "none")) ? " selected" : ""}>无</option><option value="beep"${ssrIncludeBooleanAttr(Array.isArray(selectedSound.value) ? ssrLooseContain(selectedSound.value, "beep") : ssrLooseEqual(selectedSound.value, "beep")) ? " selected" : ""}>哔哔声</option><option value="bell"${ssrIncludeBooleanAttr(Array.isArray(selectedSound.value) ? ssrLooseContain(selectedSound.value, "bell") : ssrLooseEqual(selectedSound.value, "bell")) ? " selected" : ""}>铃声</option><option value="alert"${ssrIncludeBooleanAttr(Array.isArray(selectedSound.value) ? ssrLooseContain(selectedSound.value, "alert") : ssrLooseEqual(selectedSound.value, "alert")) ? " selected" : ""}>警报</option></select></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (countdown.value <= 0 && !isRunning.value) {
        _push(`<div class="space-y-4"><div class="text-4xl">⏰</div><div class="text-2xl font-bold text-primary">倒计时结束！</div><button class="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(RotateCcw), { class: "w-5 h-5" }, null, _parent));
        _push(` 重新开始 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">快速设置</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(quickPresets, (preset) => {
        _push(`<button${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="px-4 py-3 bg-muted hover:bg-muted/80 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"><div class="font-medium">${ssrInterpolate(preset.name)}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(preset.time)}</div></button>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">自定义设置</h2><div class="space-y-4"><div class="grid grid-cols-3 gap-3"><div><label class="text-sm font-medium">小时</label><input${ssrRenderAttr("value", customTime.value.hours)} type="number" min="0" max="23"${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1 disabled:opacity-50"></div><div><label class="text-sm font-medium">分钟</label><input${ssrRenderAttr("value", customTime.value.minutes)} type="number" min="0" max="59"${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1 disabled:opacity-50"></div><div><label class="text-sm font-medium">秒</label><input${ssrRenderAttr("value", customTime.value.seconds)} type="number" min="0" max="59"${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1 disabled:opacity-50"></div></div><button${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 设置倒计时 </button></div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">倒计时历史</h2>`);
      if (history.value.length === 0) {
        _push(`<div class="text-sm text-muted-foreground text-center py-4"> 暂无历史记录 </div>`);
      } else {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(history.value, (item, index) => {
          _push(`<div class="p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors"><div class="flex justify-between items-center"><span class="font-medium">${ssrInterpolate(item.name)}</span><span class="text-sm text-muted-foreground">${ssrInterpolate(item.time)}</span></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">事件倒计时</h2><div class="space-y-3"><div><label class="text-sm font-medium">目标日期时间</label><input${ssrRenderAttr("value", eventDateTime.value)} type="datetime-local" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><div><label class="text-sm font-medium">事件名称</label><input${ssrRenderAttr("value", eventName.value)} type="text" placeholder="输入事件名称" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div>`);
      if (eventCountdown.value) {
        _push(`<div class="p-3 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground">距离${ssrInterpolate(eventName.value || "事件")}</div><div class="font-mono text-lg">${ssrInterpolate(formatEventTime(eventCountdown.value))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">循环倒计时</h2><div class="space-y-3"><div><label class="text-sm font-medium">循环次数</label><input${ssrRenderAttr("value", loopCount.value)} type="number" min="1" max="100" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><div><label class="text-sm font-medium">间隔时间（分钟）</label><input${ssrRenderAttr("value", loopInterval.value)} type="number" min="0" max="60" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><button${ssrIncludeBooleanAttr(isRunning.value) ? " disabled" : ""} class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 开始循环 </button>`);
      if (currentLoop.value > 0) {
        _push(`<div class="text-sm text-muted-foreground text-center"> 第 ${ssrInterpolate(currentLoop.value)} / ${ssrInterpolate(loopCount.value)} 次 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用提示 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">功能说明</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>支持精确到秒的倒计时功能</li><li>提供多种预设时间快速选择</li><li>支持自定义倒计时时间</li><li>倒计时结束时可播放提醒声音</li><li>支持循环倒计时功能</li><li>可保存倒计时历史记录</li></ul></div><div><h4 class="font-medium text-foreground mb-2">常见用途</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>番茄工作法（25分钟工作，5分钟休息）</li><li>运动间歇计时</li><li>会议提醒</li><li>烹饪计时</li><li>学习和考试时间管理</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/stopwatch",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Timer), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>秒表计时器</p><p class="text-xs text-muted-foreground"${_scopeId}>精确计时工具</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Timer), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "秒表计时器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "精确计时工具")
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
        to: "/tools/workday-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>工作日计算器</p><p class="text-xs text-muted-foreground"${_scopeId}>计算工作日天数</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "工作日计算器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "计算工作日天数")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=countdown-timer-BSSUg_3d.js.map
