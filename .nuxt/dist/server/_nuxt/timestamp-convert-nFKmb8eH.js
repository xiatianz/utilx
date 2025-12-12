import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { Info, Calendar, ArrowRight, Globe, Calculator } from "lucide-vue-next";
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
  __name: "timestamp-convert",
  __ssrInlineRender: true,
  setup(__props) {
    const timestampSeconds = ref("");
    const timestampMilliseconds = ref("");
    const timestampDate = ref("");
    const timestampTime = ref("");
    const selectedDateTime = ref("");
    const selectedTimestampSeconds = ref("");
    const selectedTimestampMilliseconds = ref("");
    const batchTimestamps = ref("");
    const batchResults = ref([]);
    const batchCopied = ref(false);
    const currentTimestamp = computed(() => Math.floor(Date.now() / 1e3));
    const currentDateTime = computed(() => (/* @__PURE__ */ new Date()).toLocaleString("zh-CN"));
    const timezone = computed(() => Intl.DateTimeFormat().resolvedOptions().timeZone);
    const utcOffset = computed(() => {
      const offset = (/* @__PURE__ */ new Date()).getTimezoneOffset();
      const hours = Math.floor(Math.abs(offset) / 60);
      const minutes = Math.abs(offset) % 60;
      const sign = offset >= 0 ? "+" : "-";
      return `UTC${sign}${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    });
    useSeoMeta({
      title: "时间戳转换器 - 在线Unix时间戳转换工具",
      description: "免费在线时间戳转换工具，支持Unix时间戳与日期时间相互转换，提供批量转换和常用时间戳参考。",
      keywords: ["timestamp", "unix", "时间戳", "时间转换", "在线工具", "utc", "gmt"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">时间戳转换器</h1><p class="text-muted-foreground">Unix时间戳与日期时间相互转换，支持多种时间格式</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">时间戳转换</h2><div class="mb-4 p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">当前时间戳</div><div class="text-2xl font-mono">${ssrInterpolate(currentTimestamp.value)}</div><div class="text-sm text-muted-foreground mt-1">${ssrInterpolate(currentDateTime.value)}</div></div><div class="space-y-3"><label class="text-sm font-medium">Unix 时间戳（秒）</label><input${ssrRenderAttr("value", timestampSeconds.value)} type="number" placeholder="输入10位时间戳" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div><div class="space-y-3"><label class="text-sm font-medium">Unix 时间戳（毫秒）</label><input${ssrRenderAttr("value", timestampMilliseconds.value)} type="number" placeholder="输入13位时间戳" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div>`);
      if (timestampDate.value) {
        _push(`<div class="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-2">转换结果</div><div class="text-lg font-semibold">${ssrInterpolate(timestampDate.value)}</div><div class="text-sm text-muted-foreground mt-1">${ssrInterpolate(timestampTime.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">快捷操作</h3><div class="grid grid-cols-2 gap-3"><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"> 当前时间 </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> 今日零点 </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> 今日23:59 </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> 昨天此时 </button></div></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">日期时间选择</h2><div class="space-y-4"><div><label class="text-sm font-medium">选择日期时间</label><input${ssrRenderAttr("value", selectedDateTime.value)} type="datetime-local" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div>`);
      if (_ctx.selectedTimestamp) {
        _push(`<div class="mt-4 space-y-3"><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">Unix 时间戳（秒）</div><div class="font-mono">${ssrInterpolate(selectedTimestampSeconds.value)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">Unix 时间戳（毫秒）</div><div class="font-mono">${ssrInterpolate(selectedTimestampMilliseconds.value)}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">时区信息</h3><div class="space-y-3"><div class="flex justify-between items-center"><span class="text-sm">本地时区</span><span class="text-sm font-mono">${ssrInterpolate(timezone.value)}</span></div><div class="flex justify-between items-center"><span class="text-sm">UTC 偏移</span><span class="text-sm font-mono">${ssrInterpolate(utcOffset.value)}</span></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">常用时间戳参考</h3><div class="space-y-2 text-sm"><div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer"><span>1970-01-01 00:00:00 UTC</span><span class="font-mono">0</span></div><div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer"><span>1970-01-02 00:00:00 UTC</span><span class="font-mono">86400</span></div><div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer"><span>1970-01-31 00:00:00 UTC</span><span class="font-mono">2592000</span></div><div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer"><span>1971-01-01 00:00:00 UTC</span><span class="font-mono">31536000</span></div><div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer"><span>2000-01-01 00:00:00 UTC</span><span class="font-mono">946684800</span></div><div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer"><span class="text-muted-foreground">当前</span><span class="font-mono">${ssrInterpolate(currentTimestamp.value)}</span></div></div></div></div></div><div class="mt-8 bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">批量转换</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div><div class="flex items-center justify-between mb-2"><label class="text-sm font-medium">时间戳列表（每行一个）</label><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div><textarea placeholder="输入多个时间戳，每行一个
例如：
1609459200
1609545600" class="w-full h-40 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(batchTimestamps.value)}</textarea><button class="mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"> 转换 </button></div><div><div class="flex items-center justify-between mb-2"><label class="text-sm font-medium">转换结果</label>`);
      if (batchResults.value.length > 0) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">${ssrInterpolate(batchCopied.value ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="h-40 p-3 bg-muted rounded-lg overflow-auto">`);
      if (batchResults.value.length === 0) {
        _push(`<div class="text-muted-foreground text-sm"> 转换结果将显示在这里 </div>`);
      } else {
        _push(`<div class="space-y-1 text-sm"><!--[-->`);
        ssrRenderList(batchResults.value, (result, index) => {
          _push(`<div class="flex justify-between items-center p-1 hover:bg-background rounded"><span class="font-mono">${ssrInterpolate(result.timestamp)}</span><span>${ssrInterpolate(result.date)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 关于时间戳 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">什么是 Unix 时间戳？</h4><p>Unix 时间戳（Unix Timestamp）是一种时间表示方式，定义为从格林威治时间1970年1月1日00:00:00开始所经过的秒数。</p></div><div><h4 class="font-medium text-foreground mb-2">时间戳格式</h4><ul class="list-disc list-inside space-y-1 ml-4"><li><strong>10位时间戳</strong>：精确到秒，如：1609459200</li><li><strong>13位时间戳</strong>：精确到毫秒，如：1609459200000</li><li><strong>JavaScript时间戳</strong>：通常是13位毫秒时间戳</li></ul></div><div><h4 class="font-medium text-foreground mb-2">常见用途</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>程序开发和调试</li><li>数据库时间字段存储</li><li>API 接口时间参数</li><li>缓存失效时间设置</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/cron-parser",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Cron 解析器</p><p class="text-xs text-muted-foreground"${_scopeId}>解析定时任务表达式</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Cron 解析器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "解析定时任务表达式")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>时区转换</p><p class="text-xs text-muted-foreground"${_scopeId}>全球时区时间转换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Globe), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "时区转换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "全球时区时间转换")
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
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/timestamp-convert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=timestamp-convert-nFKmb8eH.js.map
