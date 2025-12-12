import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { Clock, Copy, Info } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "crontab-generator",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedFrequency = ref(null);
    const copied = ref(false);
    const config = ref({
      minuteType: "*",
      specificMinutes: [],
      minuteRange: { start: 0, end: 59 },
      minuteInterval: 5,
      minuteList: "",
      hourType: "*",
      specificHours: [],
      hourRange: { start: 0, end: 23 },
      hourInterval: 1,
      hourList: "",
      dayType: "*",
      specificDays: [],
      monthType: "*",
      specificMonths: [],
      weekdays: [],
      command: "",
      logOutput: false,
      logPath: "/var/log/cron.log"
    });
    const quickMinutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    const quickHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
    const frequencies = [
      { value: "every-minute", name: "每分钟", description: "每分钟执行一次" },
      { value: "every-hour", name: "每小时", description: "每小时执行一次" },
      { value: "daily", name: "每天", description: "每天指定时间执行" },
      { value: "weekly", name: "每周", description: "每周指定时间执行" },
      { value: "monthly", name: "每月", description: "每月指定日期执行" },
      { value: "yearly", name: "每年", description: "每年指定日期执行" },
      { value: "workday", name: "工作日", description: "工作日指定时间执行" },
      { value: "custom", name: "自定义", description: "完全自定义配置" }
    ];
    const generatedCrontab = computed(() => {
      const minute = generateField("minute");
      const hour = generateField("hour");
      const day = generateField("day");
      const month = generateField("month");
      const weekday = generateField("weekday");
      let command = config.value.command || "command";
      if (config.value.logOutput && config.value.logPath) {
        command += ` >> ${config.value.logPath} 2>&1`;
      }
      return `${minute} ${hour} ${day} ${month} ${weekday} ${command}`;
    });
    const generateField = (field) => {
      switch (field) {
        case "minute":
          switch (config.value.minuteType) {
            case "*":
              return "*";
            case "specific":
              return config.value.specificMinutes.length > 0 ? config.value.specificMinutes.sort((a, b) => a - b).join(",") : "0";
            case "range":
              return `${config.value.minuteRange.start}-${config.value.minuteRange.end}`;
            case "interval":
              return `*/${config.value.minuteInterval}`;
            case "list":
              return config.value.minuteList || "0";
            default:
              return "*";
          }
        case "hour":
          switch (config.value.hourType) {
            case "*":
              return "*";
            case "specific":
              return config.value.specificHours.length > 0 ? config.value.specificHours.sort((a, b) => a - b).join(",") : "0";
            case "range":
              return `${config.value.hourRange.start}-${config.value.hourRange.end}`;
            case "interval":
              return `*/${config.value.hourInterval}`;
            case "list":
              return config.value.hourList || "0";
            default:
              return "*";
          }
        case "day":
          switch (config.value.dayType) {
            case "*":
              return "*";
            case "specific":
              return config.value.specificDays.length > 0 ? config.value.specificDays.sort((a, b) => a - b).join(",") : "1";
            case "last":
              return "L";
            default:
              return "*";
          }
        case "month":
          switch (config.value.monthType) {
            case "*":
              return "*";
            case "specific":
              return config.value.specificMonths.length > 0 ? config.value.specificMonths.sort((a, b) => a - b).join(",") : "1";
            default:
              return "*";
          }
        case "weekday":
          return config.value.weekdays.length > 0 ? config.value.weekdays.sort((a, b) => a - b).join(",") : "*";
        default:
          return "*";
      }
    };
    const frequencyDescription = computed(() => {
      const minute = config.value.minuteType;
      const hour = config.value.hourType;
      const day = config.value.dayType;
      const month = config.value.monthType;
      const weekday = config.value.weekdays;
      if (minute === "*" && hour === "*" && day === "*" && month === "*" && weekday.length === 0) {
        return "每分钟执行一次";
      }
      let desc = [];
      if (month !== "*") {
        if (config.value.specificMonths.length === 12) {
          desc.push("每月");
        } else {
          desc.push(`在 ${config.value.specificMonths.map((m) => `${m}月`).join("、")} `);
        }
      } else {
        desc.push("每月");
      }
      if (weekday.length > 0) {
        if (weekday.length === 7) {
          desc.push("每天");
        } else {
          desc.push(`每周${weekday.map((w) => weekdays[w]).join("、")}`);
        }
      } else if (day !== "*") {
        if (config.value.specificDays.length > 0) {
          if (config.value.specificDays.length === 31) {
            desc.push("每天");
          } else {
            desc.push(`每月${config.value.specificDays.join("、")}号`);
          }
        }
      } else {
        desc.push("每天");
      }
      if (hour !== "*") {
        if (config.value.specificHours.length > 0) {
          if (config.value.specificHours.length === 24) {
            desc.push("每小时");
          } else {
            desc.push(`在${config.value.specificHours.join("、")}点`);
          }
        } else {
          desc.push(`每${config.value.hourInterval}小时`);
        }
      } else if (minute !== "*") {
        desc.push("每小时");
      }
      if (minute !== "*") {
        if (config.value.specificMinutes.length > 0) {
          desc.push(`${config.value.specificMinutes.join("、")}分`);
        } else {
          desc.push(`每${config.value.minuteInterval}分钟`);
        }
      } else {
        desc.push("每分钟");
      }
      return desc.join("") + "执行";
    });
    const nextExecutionTime = computed(() => {
      const now = /* @__PURE__ */ new Date();
      const next = new Date(now.getTime() + 6e4);
      return next.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
    });
    const examples = [
      {
        name: "每分钟执行",
        crontab: "* * * * * command",
        description: "每分钟执行一次命令"
      },
      {
        name: "每天凌晨2点执行",
        crontab: "0 2 * * * command",
        description: "每天凌晨2点执行"
      },
      {
        name: "工作日上午9点执行",
        crontab: "0 9 * * 1-5 command",
        description: "周一到周五上午9点执行"
      },
      {
        name: "每月1号凌晨执行",
        crontab: "0 0 1 * * command",
        description: "每月1号凌晨0点执行"
      },
      {
        name: "每15分钟执行",
        crontab: "*/15 * * * * command",
        description: "每隔15分钟执行一次"
      },
      {
        name: "每周日晚上11点",
        crontab: "0 23 * * 0 command",
        description: "每周日晚上11点执行"
      }
    ];
    useSeoMeta({
      title: "Crontab 生成器 - 在线定时任务生成工具",
      description: "免费的在线 Crontab 定时任务生成器，可视化配置生成定时任务表达式，支持多种执行频率和高级配置。",
      keywords: ["crontab", "定时任务", "cron", "linux", "表达式生成", "任务调度", "自动化"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Crontab 生成器</h1><p class="text-muted-foreground">可视化配置生成 Crontab 定时任务表达式，支持多种定时任务场景</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">执行频率</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(frequencies, (freq) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          selectedFrequency.value?.value === freq.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(freq.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(freq.description)}</div></button>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">高级配置</h2><div class="mb-4"><label class="text-sm font-medium">分钟 (0-59)</label><div class="mt-2 space-y-2"><div class="flex gap-2"><select class="flex-1 px-3 py-2 border rounded-md text-sm"><option value="*"${ssrIncludeBooleanAttr(Array.isArray(config.value.minuteType) ? ssrLooseContain(config.value.minuteType, "*") : ssrLooseEqual(config.value.minuteType, "*")) ? " selected" : ""}>每分钟</option><option value="specific"${ssrIncludeBooleanAttr(Array.isArray(config.value.minuteType) ? ssrLooseContain(config.value.minuteType, "specific") : ssrLooseEqual(config.value.minuteType, "specific")) ? " selected" : ""}>指定分钟</option><option value="range"${ssrIncludeBooleanAttr(Array.isArray(config.value.minuteType) ? ssrLooseContain(config.value.minuteType, "range") : ssrLooseEqual(config.value.minuteType, "range")) ? " selected" : ""}>范围</option><option value="interval"${ssrIncludeBooleanAttr(Array.isArray(config.value.minuteType) ? ssrLooseContain(config.value.minuteType, "interval") : ssrLooseEqual(config.value.minuteType, "interval")) ? " selected" : ""}>间隔</option><option value="list"${ssrIncludeBooleanAttr(Array.isArray(config.value.minuteType) ? ssrLooseContain(config.value.minuteType, "list") : ssrLooseEqual(config.value.minuteType, "list")) ? " selected" : ""}>列表</option></select></div>`);
      if (config.value.minuteType === "specific") {
        _push(`<div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(quickMinutes, (min) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-1 rounded text-sm transition-colors",
            config.value.specificMinutes.includes(min) ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
          ])}">${ssrInterpolate(min)}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (config.value.minuteType === "range") {
        _push(`<div class="flex gap-2 items-center"><input${ssrRenderAttr("value", config.value.minuteRange.start)} type="number" min="0" max="59" placeholder="0" class="w-20 px-2 py-1 border rounded text-sm"><span>到</span><input${ssrRenderAttr("value", config.value.minuteRange.end)} type="number" min="0" max="59" placeholder="59" class="w-20 px-2 py-1 border rounded text-sm"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (config.value.minuteType === "interval") {
        _push(`<div class="flex gap-2 items-center"><span>每</span><input${ssrRenderAttr("value", config.value.minuteInterval)} type="number" min="1" max="60" class="w-20 px-2 py-1 border rounded text-sm"><span>分钟</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (config.value.minuteType === "list") {
        _push(`<div class="flex gap-2"><input${ssrRenderAttr("value", config.value.minuteList)} type="text" placeholder="0,15,30,45" class="flex-1 px-2 py-1 border rounded text-sm"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mb-4"><label class="text-sm font-medium">小时 (0-23)</label><div class="mt-2 space-y-2"><div class="flex gap-2"><select class="flex-1 px-3 py-2 border rounded-md text-sm"><option value="*"${ssrIncludeBooleanAttr(Array.isArray(config.value.hourType) ? ssrLooseContain(config.value.hourType, "*") : ssrLooseEqual(config.value.hourType, "*")) ? " selected" : ""}>每小时</option><option value="specific"${ssrIncludeBooleanAttr(Array.isArray(config.value.hourType) ? ssrLooseContain(config.value.hourType, "specific") : ssrLooseEqual(config.value.hourType, "specific")) ? " selected" : ""}>指定小时</option><option value="range"${ssrIncludeBooleanAttr(Array.isArray(config.value.hourType) ? ssrLooseContain(config.value.hourType, "range") : ssrLooseEqual(config.value.hourType, "range")) ? " selected" : ""}>范围</option><option value="interval"${ssrIncludeBooleanAttr(Array.isArray(config.value.hourType) ? ssrLooseContain(config.value.hourType, "interval") : ssrLooseEqual(config.value.hourType, "interval")) ? " selected" : ""}>间隔</option><option value="list"${ssrIncludeBooleanAttr(Array.isArray(config.value.hourType) ? ssrLooseContain(config.value.hourType, "list") : ssrLooseEqual(config.value.hourType, "list")) ? " selected" : ""}>列表</option></select></div>`);
      if (config.value.hourType === "specific") {
        _push(`<div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(quickHours, (hour) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-1 rounded text-sm transition-colors",
            config.value.specificHours.includes(hour) ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
          ])}">${ssrInterpolate(hour)}h </button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mb-4"><label class="text-sm font-medium">日期 (1-31)</label><div class="mt-2"><select class="w-full px-3 py-2 border rounded-md text-sm"><option value="*"${ssrIncludeBooleanAttr(Array.isArray(config.value.dayType) ? ssrLooseContain(config.value.dayType, "*") : ssrLooseEqual(config.value.dayType, "*")) ? " selected" : ""}>每天</option><option value="specific"${ssrIncludeBooleanAttr(Array.isArray(config.value.dayType) ? ssrLooseContain(config.value.dayType, "specific") : ssrLooseEqual(config.value.dayType, "specific")) ? " selected" : ""}>指定日期</option><option value="last"${ssrIncludeBooleanAttr(Array.isArray(config.value.dayType) ? ssrLooseContain(config.value.dayType, "last") : ssrLooseEqual(config.value.dayType, "last")) ? " selected" : ""}>最后一天</option></select></div></div><div class="mb-4"><label class="text-sm font-medium">月份 (1-12)</label><div class="mt-2"><select class="w-full px-3 py-2 border rounded-md text-sm"><option value="*"${ssrIncludeBooleanAttr(Array.isArray(config.value.monthType) ? ssrLooseContain(config.value.monthType, "*") : ssrLooseEqual(config.value.monthType, "*")) ? " selected" : ""}>每月</option><option value="specific"${ssrIncludeBooleanAttr(Array.isArray(config.value.monthType) ? ssrLooseContain(config.value.monthType, "specific") : ssrLooseEqual(config.value.monthType, "specific")) ? " selected" : ""}>指定月份</option></select></div></div><div class="mb-4"><label class="text-sm font-medium">星期 (0-7, 0和7都表示周日)</label><div class="mt-2 flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(weekdays, (day, index) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-1 rounded text-sm transition-colors",
          config.value.weekdays.includes(index) ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}">${ssrInterpolate(day)}</button>`);
      });
      _push(`<!--]--></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">执行命令</h2><div class="space-y-3"><div><label class="text-sm font-medium">要执行的命令</label><textarea placeholder="/usr/bin/php /var/www/html/cron.php" class="mt-2 w-full px-3 py-2 border rounded-md text-sm h-24 resize-none">${ssrInterpolate(config.value.command)}</textarea></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.logOutput) ? ssrLooseContain(config.value.logOutput, null) : config.value.logOutput) ? " checked" : ""} type="checkbox" id="logOutput" class="rounded text-primary focus:ring-primary"><label for="logOutput" class="text-sm">记录输出到日志</label></div>`);
      if (config.value.logOutput) {
        _push(`<div><input${ssrRenderAttr("value", config.value.logPath)} type="text" placeholder="/var/log/cron.log" class="w-full px-3 py-2 border rounded-md text-sm"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">生成的 Crontab</h2><button${ssrIncludeBooleanAttr(!generatedCrontab.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "已复制" : "复制")}</button></div><div class="bg-muted/30 rounded-lg p-4">`);
      if (generatedCrontab.value) {
        _push(`<code class="text-sm whitespace-pre-wrap break-all">${ssrInterpolate(generatedCrontab.value)}</code>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-8">`);
        _push(ssrRenderComponent(unref(Clock), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>请配置定时任务</p></div>`);
      }
      _push(`</div></div>`);
      if (generatedCrontab.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">执行说明</h2><div class="space-y-3 text-sm"><div class="p-3 bg-primary/5 border border-primary/20 rounded-lg"><div class="font-medium mb-1">下次执行时间预览</div><div class="text-muted-foreground">${ssrInterpolate(nextExecutionTime.value)}</div></div><div class="p-3 bg-muted rounded-lg"><div class="font-medium mb-1">执行频率说明</div><div class="text-muted-foreground">${ssrInterpolate(frequencyDescription.value)}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">常用示例</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(examples, (example) => {
        _push(`<div class="p-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors group"><div class="flex justify-between items-start mb-2"><div class="font-medium group-hover:text-primary">${ssrInterpolate(example.name)}</div>`);
        _push(ssrRenderComponent(unref(Copy), { class: "w-4 h-4 text-muted-foreground group-hover:text-primary" }, null, _parent));
        _push(`</div><code class="text-xs text-muted-foreground">${ssrInterpolate(example.crontab)}</code><p class="text-xs text-muted-foreground mt-1">${ssrInterpolate(example.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` Crontab 使用教程 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">基本格式</h4><code class="block bg-muted p-3 rounded-md font-mono text-sm"> * * * * * command<br> │ │ │ │ │<br> │ │ │ │ └─── 星期几 (0 - 7)<br> │ │ │ └───── 月份 (1 - 12)<br> │ │ └─────── 日期 (1 - 31)<br> │ └───────── 小时 (0 - 23)<br> └─────────── 分钟 (0 - 59) </code></div><div><h4 class="font-medium text-foreground mb-2">特殊字符说明</h4><ul class="list-disc list-inside space-y-1"><li><code>*</code> - 任意值</li><li><code>,</code> - 列表分隔符，如 &quot;1,3,5&quot;</li><li><code>-</code> - 范围，如 &quot;1-5&quot;</li><li><code>/</code> - 步长，如 &quot;*/5&quot; 表示每5个单位</li><li><code>@yearly</code> - 每年1月1日午夜</li><li><code>@monthly</code> - 每月1日午夜</li><li><code>@weekly</code> - 每周日午夜</li><li><code>@daily</code> - 每天午夜</li><li><code>@hourly</code> - 每小时</li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/crontab-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=crontab-generator-Bf7kqErN.js.map
