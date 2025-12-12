import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { Copy, Info, Search, ArrowRight, Clock, Calendar } from "lucide-vue-next";
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
  __name: "cron-generator",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedFrequency = ref(null);
    const copied = ref(false);
    const config = ref({
      minute: 0,
      hour: 0,
      day: 1,
      month: 1,
      weekday: 1,
      interval: 1,
      intervalUnit: "minute"
    });
    const frequencies = [
      { value: "minutely", name: "每分钟", description: "每分钟执行一次" },
      { value: "hourly", name: "每小时", description: "每小时执行一次" },
      { value: "daily", name: "每天", description: "每天指定时间执行" },
      { value: "weekly", name: "每周", description: "每周指定日期执行" },
      { value: "monthly", name: "每月", description: "每月指定日期执行" },
      { value: "yearly", name: "每年", description: "每年指定日期执行" },
      { value: "interval", name: "自定义间隔", description: "按指定间隔执行" },
      { value: "workday", name: "工作日", description: "工作日指定时间执行" }
    ];
    const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const examples = [
      {
        name: "每天备份",
        expression: "0 2 * * *",
        description: "每天凌晨2点执行备份"
      },
      {
        name: "每小时日志",
        expression: "0 * * * *",
        description: "每小时整点记录日志"
      },
      {
        name: "工作日提醒",
        expression: "0 9 * * 1-5",
        description: "工作日上午9点提醒"
      },
      {
        name: "每周报告",
        expression: "0 18 * * 5",
        description: "每周五下午6点生成报告"
      },
      {
        name: "每月清理",
        expression: "0 3 1 * *",
        description: "每月1号凌晨3点清理数据"
      },
      {
        name: "每5分钟检查",
        expression: "*/5 * * * *",
        description: "每5分钟检查一次状态"
      }
    ];
    const showMinuteConfig = computed(
      () => selectedFrequency.value?.value === "hourly" || selectedFrequency.value?.value === "daily" || selectedFrequency.value?.value === "weekly" || selectedFrequency.value?.value === "monthly" || selectedFrequency.value?.value === "yearly" || selectedFrequency.value?.value === "workday"
    );
    const showHourConfig = computed(
      () => selectedFrequency.value?.value === "daily" || selectedFrequency.value?.value === "weekly" || selectedFrequency.value?.value === "monthly" || selectedFrequency.value?.value === "yearly" || selectedFrequency.value?.value === "workday"
    );
    const showDayConfig = computed(
      () => selectedFrequency.value?.value === "monthly" || selectedFrequency.value?.value === "yearly"
    );
    const showMonthConfig = computed(
      () => selectedFrequency.value?.value === "yearly"
    );
    const showWeekdayConfig = computed(
      () => selectedFrequency.value?.value === "weekly"
    );
    const showIntervalConfig = computed(
      () => selectedFrequency.value?.value === "interval"
    );
    const generatedExpression = computed(() => {
      if (!selectedFrequency.value) return "";
      const { value } = selectedFrequency.value;
      switch (value) {
        case "minutely":
          return "* * * * *";
        case "hourly":
          return `${config.value.minute} * * * *`;
        case "daily":
          return `${config.value.minute} ${config.value.hour} * * *`;
        case "weekly":
          return `${config.value.minute} ${config.value.hour} * * ${config.value.weekday}`;
        case "monthly":
          return `${config.value.minute} ${config.value.hour} ${config.value.day} * *`;
        case "yearly":
          return `${config.value.minute} ${config.value.hour} ${config.value.day} ${config.value.month} *`;
        case "interval":
          const unit = config.value.intervalUnit;
          switch (unit) {
            case "minute":
              return `*/${config.value.interval} * * * *`;
            case "hour":
              return `0 */${config.value.interval} * * *`;
            case "day":
              return `0 0 */${config.value.interval} * *`;
            case "month":
              return `0 0 1 */${config.value.interval} *`;
            default:
              return "* * * * *";
          }
        case "workday":
          return `${config.value.minute} ${config.value.hour} * * 1-5`;
        default:
          return "* * * * *";
      }
    });
    const generatedDescription = computed(() => {
      if (!selectedFrequency.value) return "";
      const { value } = selectedFrequency.value;
      switch (value) {
        case "minutely":
          return "每分钟执行一次";
        case "hourly":
          return `每小时的${config.value.minute}分执行`;
        case "daily":
          return `每天${config.value.hour}:${config.value.minute.toString().padStart(2, "0")}执行`;
        case "weekly":
          return `每周${weekdays[config.value.weekday]}${config.value.hour}:${config.value.minute.toString().padStart(2, "0")}执行`;
        case "monthly":
          return `每月${config.value.day}号${config.value.hour}:${config.value.minute.toString().padStart(2, "0")}执行`;
        case "yearly":
          return `每年${config.value.month}月${config.value.day}号${config.value.hour}:${config.value.minute.toString().padStart(2, "0")}执行`;
        case "interval":
          const unitMap = {
            minute: "分钟",
            hour: "小时",
            day: "天",
            month: "个月"
          };
          return `每${config.value.interval}${unitMap[config.value.intervalUnit]}执行一次`;
        case "workday":
          return `工作日（周一至周五）每天${config.value.hour}:${config.value.minute.toString().padStart(2, "0")}执行`;
        default:
          return "";
      }
    });
    const nextRunTimes = computed(() => {
      if (!generatedExpression.value) return [];
      const times = [];
      const now = /* @__PURE__ */ new Date();
      for (let i = 0; i < 5; i++) {
        const nextTime = new Date(now.getTime() + i * 6e4 * 60);
        times.push({
          date: nextTime.toLocaleDateString("zh-CN"),
          time: nextTime.toLocaleTimeString("zh-CN")
        });
      }
      return times;
    });
    useSeoMeta({
      title: "Cron 生成器 - 在线 Cron 表达式生成工具",
      description: "免费的在线 Cron 表达式生成工具，可视化配置生成定时任务表达式，支持多种定时任务场景。",
      keywords: ["cron", "crontab", "定时任务", "表达式生成", "调度", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Cron 生成器</h1><p class="text-muted-foreground">可视化配置生成 Cron 表达式，支持多种定时任务场景</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">执行频率</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(frequencies, (freq) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          selectedFrequency.value?.value === freq.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(freq.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(freq.description)}</div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (selectedFrequency.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">详细配置</h2>`);
        if (showMinuteConfig.value) {
          _push(`<div class="mb-4"><label class="text-sm font-medium">分钟</label><div class="mt-2 grid grid-cols-4 gap-2"><!--[-->`);
          ssrRenderList([0, 15, 30, 45], (min) => {
            _push(`<button class="${ssrRenderClass([
              "px-3 py-2 rounded text-sm transition-colors",
              config.value.minute === min ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            ])}">${ssrInterpolate(min)}分 </button>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (showHourConfig.value) {
          _push(`<div class="mb-4"><label class="text-sm font-medium">小时</label><div class="mt-2 grid grid-cols-4 gap-2"><!--[-->`);
          ssrRenderList([0, 6, 9, 12, 15, 18, 21], (hour) => {
            _push(`<button class="${ssrRenderClass([
              "px-3 py-2 rounded text-sm transition-colors",
              config.value.hour === hour ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            ])}">${ssrInterpolate(hour)}时 </button>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (showDayConfig.value) {
          _push(`<div class="mb-4"><label class="text-sm font-medium">日期</label><div class="mt-2 flex gap-2"><input${ssrRenderAttr("value", config.value.day)} type="number" min="1" max="31" placeholder="1-31" class="w-20 px-3 py-2 border rounded-md text-sm"><span class="text-sm text-muted-foreground self-center">号</span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (showMonthConfig.value) {
          _push(`<div class="mb-4"><label class="text-sm font-medium">月份</label><div class="mt-2 grid grid-cols-4 gap-2"><!--[-->`);
          ssrRenderList(["一月", "四月", "七月", "十月"], (month, index) => {
            _push(`<button class="${ssrRenderClass([
              "px-3 py-2 rounded text-sm transition-colors",
              config.value.month === [1, 4, 7, 10][index] ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            ])}">${ssrInterpolate(month)}</button>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (showWeekdayConfig.value) {
          _push(`<div class="mb-4"><label class="text-sm font-medium">星期</label><div class="mt-2 grid grid-cols-7 gap-2"><!--[-->`);
          ssrRenderList(weekdays, (day, index) => {
            _push(`<button class="${ssrRenderClass([
              "px-3 py-2 rounded text-sm transition-colors",
              config.value.weekday === index ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            ])}">${ssrInterpolate(day)}</button>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (showIntervalConfig.value) {
          _push(`<div class="mb-4"><label class="text-sm font-medium">间隔时间</label><div class="mt-2 flex items-center gap-3"><span class="text-sm">每</span><input${ssrRenderAttr("value", config.value.interval)} type="number" min="1" max="60" class="w-20 px-3 py-2 border rounded-md text-sm"><select class="px-3 py-2 border rounded-md text-sm"><option value="minute"${ssrIncludeBooleanAttr(Array.isArray(config.value.intervalUnit) ? ssrLooseContain(config.value.intervalUnit, "minute") : ssrLooseEqual(config.value.intervalUnit, "minute")) ? " selected" : ""}>分钟</option><option value="hour"${ssrIncludeBooleanAttr(Array.isArray(config.value.intervalUnit) ? ssrLooseContain(config.value.intervalUnit, "hour") : ssrLooseEqual(config.value.intervalUnit, "hour")) ? " selected" : ""}>小时</option><option value="day"${ssrIncludeBooleanAttr(Array.isArray(config.value.intervalUnit) ? ssrLooseContain(config.value.intervalUnit, "day") : ssrLooseEqual(config.value.intervalUnit, "day")) ? " selected" : ""}>天</option><option value="month"${ssrIncludeBooleanAttr(Array.isArray(config.value.intervalUnit) ? ssrLooseContain(config.value.intervalUnit, "month") : ssrLooseEqual(config.value.intervalUnit, "month")) ? " selected" : ""}>月</option></select></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">生成结果</h2><div class="space-y-3"><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">Cron 表达式</div><div class="font-mono text-lg">${ssrInterpolate(generatedExpression.value || "请选择配置")}</div></div>`);
      if (generatedDescription.value) {
        _push(`<div class="p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-1">执行说明</div><div class="text-sm">${ssrInterpolate(generatedDescription.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="space-y-4">`);
      if (nextRunTimes.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">执行预览</h2><div class="space-y-3"><div class="text-sm text-muted-foreground">下次执行时间</div><!--[-->`);
        ssrRenderList(nextRunTimes.value, (time, index) => {
          _push(`<div class="flex justify-between items-center p-3 bg-muted rounded-lg"><span class="text-sm">${ssrInterpolate(time.date)}</span><span class="font-mono text-sm">${ssrInterpolate(time.time)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">常用示例</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(examples, (example) => {
        _push(`<div class="p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors group"><div class="flex justify-between items-start mb-2"><div class="font-medium group-hover:text-primary">${ssrInterpolate(example.name)}</div>`);
        _push(ssrRenderComponent(unref(Copy), { class: "w-4 h-4 text-muted-foreground group-hover:text-primary" }, null, _parent));
        _push(`</div><div class="font-mono text-sm text-muted-foreground">${ssrInterpolate(example.expression)}</div><div class="text-xs text-muted-foreground mt-1">${ssrInterpolate(example.description)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">操作</h2><div class="space-y-3">`);
      if (generatedExpression.value) {
        _push(`<button class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">${ssrInterpolate(copied.value ? "已复制" : "复制表达式")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (generatedExpression.value) {
        _push(`<button class="w-full px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors"> 测试表达式 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` Cron 表达式格式 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">基本格式</h4><code class="block bg-muted p-3 rounded-md font-mono text-sm"> * * * * *<br> 分 时 日 月 周 </code></div><div><h4 class="font-medium text-foreground mb-2">字段说明</h4><div class="grid grid-cols-2 gap-3"><div><strong>分钟</strong>：0-59 </div><div><strong>小时</strong>：0-23 </div><div><strong>日期</strong>：1-31 </div><div><strong>月份</strong>：1-12 </div><div><strong>星期</strong>：0-7 (0和7都表示周日) </div></div></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/cron-parser",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Cron 解析器</p><p class="text-xs text-muted-foreground"${_scopeId}>解析定时任务表达式</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Search), { class: "w-5 h-5 text-primary" }),
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
        to: "/tools/date-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>日期计算器</p><p class="text-xs text-muted-foreground"${_scopeId}>日期加减计算</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), { class: "w-5 h-5 text-primary" }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/cron-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=cron-generator-BsbAXDHA.js.map
