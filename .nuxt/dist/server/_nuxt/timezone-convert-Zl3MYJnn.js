import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Info, Clock, ArrowRight, Calendar, Calculator } from "lucide-vue-next";
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
  __name: "timezone-convert",
  __ssrInlineRender: true,
  setup(__props) {
    const sourceDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const sourceTime = ref((/* @__PURE__ */ new Date()).toTimeString().split(" ")[0].substring(0, 8));
    const sourceTimezone = ref(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const targetTimezone = ref("Asia/Shanghai");
    const targetDateTime = ref("");
    const selectedTimezones = ref(["America/New_York", "Europe/London", "Asia/Tokyo"]);
    const timezoneGroups = [
      {
        name: "亚洲",
        timezones: [
          { value: "Asia/Shanghai", label: "中国标准时间 (CST) UTC+8" },
          { value: "Asia/Tokyo", label: "日本标准时间 (JST) UTC+9" },
          { value: "Asia/Seoul", label: "韩国标准时间 (KST) UTC+9" },
          { value: "Asia/Singapore", label: "新加坡时间 (SGT) UTC+8" },
          { value: "Asia/Hong_Kong", label: "香港时间 (HKT) UTC+8" },
          { value: "Asia/Taipei", label: "台北时间 (CST) UTC+8" },
          { value: "Asia/Dubai", label: "迪拜时间 (GST) UTC+4" },
          { value: "Asia/Kolkata", label: "印度标准时间 (IST) UTC+5:30" },
          { value: "Asia/Bangkok", label: "曼谷时间 (ICT) UTC+7" }
        ]
      },
      {
        name: "欧洲",
        timezones: [
          { value: "Europe/London", label: "格林威治时间 (GMT/BST) UTC+0/+1" },
          { value: "Europe/Paris", label: "中欧时间 (CET/CEST) UTC+1/+2" },
          { value: "Europe/Berlin", label: "德国时间 (CET/CEST) UTC+1/+2" },
          { value: "Europe/Moscow", label: "莫斯科时间 (MSK) UTC+3" },
          { value: "Europe/Madrid", label: "西班牙时间 (CET/CEST) UTC+1/+2" },
          { value: "Europe/Rome", label: "意大利时间 (CET/CEST) UTC+1/+2" },
          { value: "Europe/Amsterdam", label: "阿姆斯特丹时间 (CET/CEST) UTC+1/+2" }
        ]
      },
      {
        name: "美洲",
        timezones: [
          { value: "America/New_York", label: "美国东部时间 (EST/EDT) UTC-5/-4" },
          { value: "America/Los_Angeles", label: "美国西部时间 (PST/PDT) UTC-8/-7" },
          { value: "America/Chicago", label: "美国中部时间 (CST/CDT) UTC-6/-5" },
          { value: "America/Denver", label: "美国山地时间 (MST/MDT) UTC-7/-6" },
          { value: "America/Toronto", label: "多伦多时间 (EST/EDT) UTC-5/-4" },
          { value: "America/Vancouver", label: "温哥华时间 (PST/PDT) UTC-8/-7" },
          { value: "America/Mexico_City", label: "墨西哥城时间 (CST/CDT) UTC-6/-5" },
          { value: "America/Sao_Paulo", label: "圣保罗时间 (BRT) UTC-3" }
        ]
      },
      {
        name: "大洋洲",
        timezones: [
          { value: "Australia/Sydney", label: "悉尼时间 (AEST/AEDT) UTC+10/+11" },
          { value: "Australia/Melbourne", label: "墨尔本时间 (AEST/AEDT) UTC+10/+11" },
          { value: "Pacific/Auckland", label: "奥克兰时间 (NZST/NZDT) UTC+12/+13" }
        ]
      },
      {
        name: "其他",
        timezones: [
          { value: "UTC", label: "协调世界时 (UTC) UTC+0" },
          { value: "Africa/Johannesburg", label: "约翰内斯堡时间 (SAST) UTC+2" },
          { value: "Asia/Kolkata", label: "印度标准时间 (IST) UTC+5:30" }
        ]
      }
    ];
    const popularTimezones = [
      { name: "北京", value: "Asia/Shanghai", label: "CST" },
      { name: "纽约", value: "America/New_York", label: "EST/EDT" },
      { name: "伦敦", value: "Europe/London", label: "GMT/BST" },
      { name: "东京", value: "Asia/Tokyo", label: "JST" },
      { name: "巴黎", value: "Europe/Paris", label: "CET/CEST" },
      { name: "悉尼", value: "Australia/Sydney", label: "AEST/AEDT" }
    ];
    const sourceTimezoneLabel = computed(() => {
      if (!sourceTimezone.value) return "";
      const tz = timezoneGroups.flatMap((g) => g.timezones).find((t) => t.value === sourceTimezone.value);
      return tz ? tz.label : "";
    });
    const targetTimezoneLabel = computed(() => {
      if (!targetTimezone.value) return "";
      const tz = timezoneGroups.flatMap((g) => g.timezones).find((t) => t.value === targetTimezone.value);
      return tz ? tz.label : "";
    });
    const targetDate = computed(() => {
      if (!targetDateTime.value) return "";
      return targetDateTime.value.toLocaleDateString("zh-CN");
    });
    const targetTime = computed(() => {
      if (!targetDateTime.value) return "";
      return targetDateTime.value.toLocaleTimeString("zh-CN");
    });
    const timeDifference = computed(() => {
      if (!sourceTimezone.value || !targetTimezone.value) return null;
      const now = /* @__PURE__ */ new Date();
      const sourceOffset = getTimezoneOffset(sourceTimezone.value, now);
      const targetOffset = getTimezoneOffset(targetTimezone.value, now);
      return (targetOffset - sourceOffset) / 60;
    });
    const availableTimezones = computed(() => {
      const allTz = timezoneGroups.flatMap((g) => g.timezones);
      return allTz.filter((tz) => !selectedTimezones.value.includes(tz.value));
    });
    const suggestedMeetingTimes = computed(() => {
      return [
        { time: "09:00", label: "早上9点" },
        { time: "10:00", label: "早上10点" },
        { time: "14:00", label: "下午2点" },
        { time: "15:00", label: "下午3点" }
      ];
    });
    const getTimezoneOffset = (timezone, date) => {
      const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
      const tzDate = new Date(date.toLocaleString("en-US", { timeZone: timezone }));
      return (tzDate - utcDate) / (1e3 * 60);
    };
    const getTimeInTimezone = (timezone) => {
      if (!sourceDate.value || !sourceTime.value) return "-";
      const dateTime = /* @__PURE__ */ new Date(`${sourceDate.value}T${sourceTime.value}`);
      return dateTime.toLocaleTimeString("zh-CN", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const getTimeDifference = (timezone) => {
      if (!sourceTimezone.value) return "-";
      const now = /* @__PURE__ */ new Date();
      const sourceOffset = getTimezoneOffset(sourceTimezone.value, now);
      const targetOffset = getTimezoneOffset(timezone, now);
      const diff = (targetOffset - sourceOffset) / 60;
      return diff > 0 ? `+${diff}h` : `${diff}h`;
    };
    const getTimezoneLabel = (timezone) => {
      const tz = timezoneGroups.flatMap((g) => g.timezones).find((t) => t.value === timezone);
      return tz ? tz.label.split(" ")[0] : timezone;
    };
    useSeoMeta({
      title: "时区转换器 - 在线全球时区时间转换工具",
      description: "免费的在线时区转换工具，支持在全球不同时区之间转换时间，自动处理夏令时，包含会议规划器功能。",
      keywords: ["timezone", "时区", "时间转换", "utc", "gmt", "夏令时", "会议时间", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">时区转换器</h1><p class="text-muted-foreground">在全球不同时区之间转换时间，支持夏令时自动调整</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">源时区</h2><div class="space-y-4"><div><label class="text-sm font-medium">日期</label><input${ssrRenderAttr("value", sourceDate.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><div><label class="text-sm font-medium">时间</label><input${ssrRenderAttr("value", sourceTime.value)} type="time" step="1" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><div><label class="text-sm font-medium">时区</label><select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><option value=""${ssrIncludeBooleanAttr(Array.isArray(sourceTimezone.value) ? ssrLooseContain(sourceTimezone.value, "") : ssrLooseEqual(sourceTimezone.value, "")) ? " selected" : ""}>选择时区</option><!--[-->`);
      ssrRenderList(timezoneGroups, (group) => {
        _push(`<optgroup${ssrRenderAttr("label", group.name)}><!--[-->`);
        ssrRenderList(group.timezones, (tz) => {
          _push(`<option${ssrRenderAttr("value", tz.value)}${ssrIncludeBooleanAttr(Array.isArray(sourceTimezone.value) ? ssrLooseContain(sourceTimezone.value, tz.value) : ssrLooseEqual(sourceTimezone.value, tz.value)) ? " selected" : ""}>${ssrInterpolate(tz.label)}</option>`);
        });
        _push(`<!--]--></optgroup>`);
      });
      _push(`<!--]--></select></div><div class="flex gap-2"><button class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"> 当前时间 </button><button class="flex-1 px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors text-sm"> 交换时区 </button></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">目标时区</h2><div><label class="text-sm font-medium">时区</label><select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><option value=""${ssrIncludeBooleanAttr(Array.isArray(targetTimezone.value) ? ssrLooseContain(targetTimezone.value, "") : ssrLooseEqual(targetTimezone.value, "")) ? " selected" : ""}>选择时区</option><!--[-->`);
      ssrRenderList(timezoneGroups, (group) => {
        _push(`<optgroup${ssrRenderAttr("label", group.name)}><!--[-->`);
        ssrRenderList(group.timezones, (tz) => {
          _push(`<option${ssrRenderAttr("value", tz.value)}${ssrIncludeBooleanAttr(Array.isArray(targetTimezone.value) ? ssrLooseContain(targetTimezone.value, tz.value) : ssrLooseEqual(targetTimezone.value, tz.value)) ? " selected" : ""}>${ssrInterpolate(tz.label)}</option>`);
        });
        _push(`<!--]--></optgroup>`);
      });
      _push(`<!--]--></select></div>`);
      if (targetDateTime.value) {
        _push(`<div class="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-2">转换结果</div><div class="text-xl font-semibold mb-1">${ssrInterpolate(targetDate.value)}</div><div class="text-lg font-mono">${ssrInterpolate(targetTime.value)}</div><div class="text-sm text-muted-foreground mt-2">${ssrInterpolate(targetTimezoneLabel.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="space-y-4">`);
      if (timeDifference.value !== null) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">时差信息</h2><div class="space-y-3"><div class="flex justify-between items-center"><span class="text-sm">时差</span><span class="font-mono">${ssrInterpolate(timeDifference.value > 0 ? "+" : "")}${ssrInterpolate(timeDifference.value)}小时</span></div><div class="p-3 bg-muted rounded-lg text-sm"><p>${ssrInterpolate(sourceTimezoneLabel.value)}比${ssrInterpolate(targetTimezoneLabel.value)}</p><p class="font-semibold mt-1">${ssrInterpolate(timeDifference.value > 0 ? "快" : "慢")}${ssrInterpolate(Math.abs(timeDifference.value))}小时 </p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">多时区对比</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(popularTimezones, (tz) => {
        _push(`<div class="flex justify-between items-center p-3 hover:bg-muted/50 rounded-lg transition-colors"><div><div class="font-medium text-sm">${ssrInterpolate(tz.name)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(tz.label)}</div></div><div class="text-right"><div class="font-mono text-sm">${ssrInterpolate(getTimeInTimezone(tz.value))}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(getTimeDifference(tz.value))}</div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">会议规划器</h2><div class="space-y-4"><div><label class="text-sm font-medium">选择参会时区</label><div class="mt-2 space-y-2"><!--[-->`);
      ssrRenderList(selectedTimezones.value, (tz) => {
        _push(`<div class="flex items-center gap-2"><span class="text-sm flex-1">${ssrInterpolate(getTimezoneLabel(tz))}</span><button class="px-2 py-1 text-xs text-muted-foreground hover:text-destructive transition-colors"> 移除 </button></div>`);
      });
      _push(`<!--]--></div><select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><option value="">添加参会者时区</option><!--[-->`);
      ssrRenderList(availableTimezones.value, (tz) => {
        _push(`<option${ssrRenderAttr("value", tz.value)}>${ssrInterpolate(tz.label)}</option>`);
      });
      _push(`<!--]--></select></div>`);
      if (selectedTimezones.value.length > 0) {
        _push(`<div class="space-y-2"><label class="text-sm font-medium">最佳会议时间</label><div class="grid grid-cols-2 gap-2"><!--[-->`);
        ssrRenderList(suggestedMeetingTimes.value, (time) => {
          _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm transition-colors">${ssrInterpolate(time.time)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 关于时区 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">常用时区缩写</h4><div class="grid grid-cols-2 md:grid-cols-3 gap-2"><div><strong>UTC</strong> - 协调世界时</div><div><strong>GMT</strong> - 格林威治标准时间</div><div><strong>EST</strong> - 美国东部标准时间</div><div><strong>CST</strong> - 中国标准时间</div><div><strong>JST</strong> - 日本标准时间</div><div><strong>CET</strong> - 中欧时间</div></div></div><div><h4 class="font-medium text-foreground mb-2">夏令时</h4><p>部分地区在夏季会将时间调快一小时以充分利用日照时间，称为夏令时（Daylight Saving Time）。本工具会自动处理夏令时转换。</p></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/timestamp-converter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Clock), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>时间戳转换器</p><p class="text-xs text-muted-foreground"${_scopeId}>Unix时间戳与日期转换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Clock), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "时间戳转换器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Unix时间戳与日期转换")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/timezone-convert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=timezone-convert-Zl3MYJnn.js.map
