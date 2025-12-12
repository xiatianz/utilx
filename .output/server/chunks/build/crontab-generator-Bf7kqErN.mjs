import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Clock, Copy, Info } from 'lucide-vue-next';
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
    const weekdays = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
    const frequencies = [
      { value: "every-minute", name: "\u6BCF\u5206\u949F", description: "\u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21" },
      { value: "every-hour", name: "\u6BCF\u5C0F\u65F6", description: "\u6BCF\u5C0F\u65F6\u6267\u884C\u4E00\u6B21" },
      { value: "daily", name: "\u6BCF\u5929", description: "\u6BCF\u5929\u6307\u5B9A\u65F6\u95F4\u6267\u884C" },
      { value: "weekly", name: "\u6BCF\u5468", description: "\u6BCF\u5468\u6307\u5B9A\u65F6\u95F4\u6267\u884C" },
      { value: "monthly", name: "\u6BCF\u6708", description: "\u6BCF\u6708\u6307\u5B9A\u65E5\u671F\u6267\u884C" },
      { value: "yearly", name: "\u6BCF\u5E74", description: "\u6BCF\u5E74\u6307\u5B9A\u65E5\u671F\u6267\u884C" },
      { value: "workday", name: "\u5DE5\u4F5C\u65E5", description: "\u5DE5\u4F5C\u65E5\u6307\u5B9A\u65F6\u95F4\u6267\u884C" },
      { value: "custom", name: "\u81EA\u5B9A\u4E49", description: "\u5B8C\u5168\u81EA\u5B9A\u4E49\u914D\u7F6E" }
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
        return "\u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21";
      }
      let desc = [];
      if (month !== "*") {
        if (config.value.specificMonths.length === 12) {
          desc.push("\u6BCF\u6708");
        } else {
          desc.push(`\u5728 ${config.value.specificMonths.map((m) => `${m}\u6708`).join("\u3001")} `);
        }
      } else {
        desc.push("\u6BCF\u6708");
      }
      if (weekday.length > 0) {
        if (weekday.length === 7) {
          desc.push("\u6BCF\u5929");
        } else {
          desc.push(`\u6BCF\u5468${weekday.map((w) => weekdays[w]).join("\u3001")}`);
        }
      } else if (day !== "*") {
        if (config.value.specificDays.length > 0) {
          if (config.value.specificDays.length === 31) {
            desc.push("\u6BCF\u5929");
          } else {
            desc.push(`\u6BCF\u6708${config.value.specificDays.join("\u3001")}\u53F7`);
          }
        }
      } else {
        desc.push("\u6BCF\u5929");
      }
      if (hour !== "*") {
        if (config.value.specificHours.length > 0) {
          if (config.value.specificHours.length === 24) {
            desc.push("\u6BCF\u5C0F\u65F6");
          } else {
            desc.push(`\u5728${config.value.specificHours.join("\u3001")}\u70B9`);
          }
        } else {
          desc.push(`\u6BCF${config.value.hourInterval}\u5C0F\u65F6`);
        }
      } else if (minute !== "*") {
        desc.push("\u6BCF\u5C0F\u65F6");
      }
      if (minute !== "*") {
        if (config.value.specificMinutes.length > 0) {
          desc.push(`${config.value.specificMinutes.join("\u3001")}\u5206`);
        } else {
          desc.push(`\u6BCF${config.value.minuteInterval}\u5206\u949F`);
        }
      } else {
        desc.push("\u6BCF\u5206\u949F");
      }
      return desc.join("") + "\u6267\u884C";
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
        name: "\u6BCF\u5206\u949F\u6267\u884C",
        crontab: "* * * * * command",
        description: "\u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21\u547D\u4EE4"
      },
      {
        name: "\u6BCF\u5929\u51CC\u66682\u70B9\u6267\u884C",
        crontab: "0 2 * * * command",
        description: "\u6BCF\u5929\u51CC\u66682\u70B9\u6267\u884C"
      },
      {
        name: "\u5DE5\u4F5C\u65E5\u4E0A\u53489\u70B9\u6267\u884C",
        crontab: "0 9 * * 1-5 command",
        description: "\u5468\u4E00\u5230\u5468\u4E94\u4E0A\u53489\u70B9\u6267\u884C"
      },
      {
        name: "\u6BCF\u67081\u53F7\u51CC\u6668\u6267\u884C",
        crontab: "0 0 1 * * command",
        description: "\u6BCF\u67081\u53F7\u51CC\u66680\u70B9\u6267\u884C"
      },
      {
        name: "\u6BCF15\u5206\u949F\u6267\u884C",
        crontab: "*/15 * * * * command",
        description: "\u6BCF\u969415\u5206\u949F\u6267\u884C\u4E00\u6B21"
      },
      {
        name: "\u6BCF\u5468\u65E5\u665A\u4E0A11\u70B9",
        crontab: "0 23 * * 0 command",
        description: "\u6BCF\u5468\u65E5\u665A\u4E0A11\u70B9\u6267\u884C"
      }
    ];
    useSeoMeta({
      title: "Crontab \u751F\u6210\u5668 - \u5728\u7EBF\u5B9A\u65F6\u4EFB\u52A1\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF Crontab \u5B9A\u65F6\u4EFB\u52A1\u751F\u6210\u5668\uFF0C\u53EF\u89C6\u5316\u914D\u7F6E\u751F\u6210\u5B9A\u65F6\u4EFB\u52A1\u8868\u8FBE\u5F0F\uFF0C\u652F\u6301\u591A\u79CD\u6267\u884C\u9891\u7387\u548C\u9AD8\u7EA7\u914D\u7F6E\u3002",
      keywords: ["crontab", "\u5B9A\u65F6\u4EFB\u52A1", "cron", "linux", "\u8868\u8FBE\u5F0F\u751F\u6210", "\u4EFB\u52A1\u8C03\u5EA6", "\u81EA\u52A8\u5316"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Crontab \u751F\u6210\u5668</h1><p class="text-muted-foreground">\u53EF\u89C6\u5316\u914D\u7F6E\u751F\u6210 Crontab \u5B9A\u65F6\u4EFB\u52A1\u8868\u8FBE\u5F0F\uFF0C\u652F\u6301\u591A\u79CD\u5B9A\u65F6\u4EFB\u52A1\u573A\u666F</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6267\u884C\u9891\u7387</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(frequencies, (freq) => {
        var _a;
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          ((_a = selectedFrequency.value) == null ? void 0 : _a.value) === freq.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(freq.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(freq.description)}</div></button>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u9AD8\u7EA7\u914D\u7F6E</h2><div class="mb-4"><label class="text-sm font-medium">\u5206\u949F (0-59)</label><div class="mt-2 space-y-2"><div class="flex gap-2"><select class="flex-1 px-3 py-2 border rounded-md text-sm"><option value="*"${ssrIncludeBooleanAttr(Array.isArray(config.value.minuteType) ? ssrLooseContain(config.value.minuteType, "*") : ssrLooseEqual(config.value.minuteType, "*")) ? " selected" : ""}>\u6BCF\u5206\u949F</option><option value="specific"${ssrIncludeBooleanAttr(Array.isArray(config.value.minuteType) ? ssrLooseContain(config.value.minuteType, "specific") : ssrLooseEqual(config.value.minuteType, "specific")) ? " selected" : ""}>\u6307\u5B9A\u5206\u949F</option><option value="range"${ssrIncludeBooleanAttr(Array.isArray(config.value.minuteType) ? ssrLooseContain(config.value.minuteType, "range") : ssrLooseEqual(config.value.minuteType, "range")) ? " selected" : ""}>\u8303\u56F4</option><option value="interval"${ssrIncludeBooleanAttr(Array.isArray(config.value.minuteType) ? ssrLooseContain(config.value.minuteType, "interval") : ssrLooseEqual(config.value.minuteType, "interval")) ? " selected" : ""}>\u95F4\u9694</option><option value="list"${ssrIncludeBooleanAttr(Array.isArray(config.value.minuteType) ? ssrLooseContain(config.value.minuteType, "list") : ssrLooseEqual(config.value.minuteType, "list")) ? " selected" : ""}>\u5217\u8868</option></select></div>`);
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
        _push(`<div class="flex gap-2 items-center"><input${ssrRenderAttr("value", config.value.minuteRange.start)} type="number" min="0" max="59" placeholder="0" class="w-20 px-2 py-1 border rounded text-sm"><span>\u5230</span><input${ssrRenderAttr("value", config.value.minuteRange.end)} type="number" min="0" max="59" placeholder="59" class="w-20 px-2 py-1 border rounded text-sm"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (config.value.minuteType === "interval") {
        _push(`<div class="flex gap-2 items-center"><span>\u6BCF</span><input${ssrRenderAttr("value", config.value.minuteInterval)} type="number" min="1" max="60" class="w-20 px-2 py-1 border rounded text-sm"><span>\u5206\u949F</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (config.value.minuteType === "list") {
        _push(`<div class="flex gap-2"><input${ssrRenderAttr("value", config.value.minuteList)} type="text" placeholder="0,15,30,45" class="flex-1 px-2 py-1 border rounded text-sm"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mb-4"><label class="text-sm font-medium">\u5C0F\u65F6 (0-23)</label><div class="mt-2 space-y-2"><div class="flex gap-2"><select class="flex-1 px-3 py-2 border rounded-md text-sm"><option value="*"${ssrIncludeBooleanAttr(Array.isArray(config.value.hourType) ? ssrLooseContain(config.value.hourType, "*") : ssrLooseEqual(config.value.hourType, "*")) ? " selected" : ""}>\u6BCF\u5C0F\u65F6</option><option value="specific"${ssrIncludeBooleanAttr(Array.isArray(config.value.hourType) ? ssrLooseContain(config.value.hourType, "specific") : ssrLooseEqual(config.value.hourType, "specific")) ? " selected" : ""}>\u6307\u5B9A\u5C0F\u65F6</option><option value="range"${ssrIncludeBooleanAttr(Array.isArray(config.value.hourType) ? ssrLooseContain(config.value.hourType, "range") : ssrLooseEqual(config.value.hourType, "range")) ? " selected" : ""}>\u8303\u56F4</option><option value="interval"${ssrIncludeBooleanAttr(Array.isArray(config.value.hourType) ? ssrLooseContain(config.value.hourType, "interval") : ssrLooseEqual(config.value.hourType, "interval")) ? " selected" : ""}>\u95F4\u9694</option><option value="list"${ssrIncludeBooleanAttr(Array.isArray(config.value.hourType) ? ssrLooseContain(config.value.hourType, "list") : ssrLooseEqual(config.value.hourType, "list")) ? " selected" : ""}>\u5217\u8868</option></select></div>`);
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
      _push(`</div></div><div class="mb-4"><label class="text-sm font-medium">\u65E5\u671F (1-31)</label><div class="mt-2"><select class="w-full px-3 py-2 border rounded-md text-sm"><option value="*"${ssrIncludeBooleanAttr(Array.isArray(config.value.dayType) ? ssrLooseContain(config.value.dayType, "*") : ssrLooseEqual(config.value.dayType, "*")) ? " selected" : ""}>\u6BCF\u5929</option><option value="specific"${ssrIncludeBooleanAttr(Array.isArray(config.value.dayType) ? ssrLooseContain(config.value.dayType, "specific") : ssrLooseEqual(config.value.dayType, "specific")) ? " selected" : ""}>\u6307\u5B9A\u65E5\u671F</option><option value="last"${ssrIncludeBooleanAttr(Array.isArray(config.value.dayType) ? ssrLooseContain(config.value.dayType, "last") : ssrLooseEqual(config.value.dayType, "last")) ? " selected" : ""}>\u6700\u540E\u4E00\u5929</option></select></div></div><div class="mb-4"><label class="text-sm font-medium">\u6708\u4EFD (1-12)</label><div class="mt-2"><select class="w-full px-3 py-2 border rounded-md text-sm"><option value="*"${ssrIncludeBooleanAttr(Array.isArray(config.value.monthType) ? ssrLooseContain(config.value.monthType, "*") : ssrLooseEqual(config.value.monthType, "*")) ? " selected" : ""}>\u6BCF\u6708</option><option value="specific"${ssrIncludeBooleanAttr(Array.isArray(config.value.monthType) ? ssrLooseContain(config.value.monthType, "specific") : ssrLooseEqual(config.value.monthType, "specific")) ? " selected" : ""}>\u6307\u5B9A\u6708\u4EFD</option></select></div></div><div class="mb-4"><label class="text-sm font-medium">\u661F\u671F (0-7, 0\u548C7\u90FD\u8868\u793A\u5468\u65E5)</label><div class="mt-2 flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(weekdays, (day, index) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-1 rounded text-sm transition-colors",
          config.value.weekdays.includes(index) ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}">${ssrInterpolate(day)}</button>`);
      });
      _push(`<!--]--></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6267\u884C\u547D\u4EE4</h2><div class="space-y-3"><div><label class="text-sm font-medium">\u8981\u6267\u884C\u7684\u547D\u4EE4</label><textarea placeholder="/usr/bin/php /var/www/html/cron.php" class="mt-2 w-full px-3 py-2 border rounded-md text-sm h-24 resize-none">${ssrInterpolate(config.value.command)}</textarea></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.logOutput) ? ssrLooseContain(config.value.logOutput, null) : config.value.logOutput) ? " checked" : ""} type="checkbox" id="logOutput" class="rounded text-primary focus:ring-primary"><label for="logOutput" class="text-sm">\u8BB0\u5F55\u8F93\u51FA\u5230\u65E5\u5FD7</label></div>`);
      if (config.value.logOutput) {
        _push(`<div><input${ssrRenderAttr("value", config.value.logPath)} type="text" placeholder="/var/log/cron.log" class="w-full px-3 py-2 border rounded-md text-sm"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u751F\u6210\u7684 Crontab</h2><button${ssrIncludeBooleanAttr(!generatedCrontab.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button></div><div class="bg-muted/30 rounded-lg p-4">`);
      if (generatedCrontab.value) {
        _push(`<code class="text-sm whitespace-pre-wrap break-all">${ssrInterpolate(generatedCrontab.value)}</code>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-8">`);
        _push(ssrRenderComponent(unref(Clock), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>\u8BF7\u914D\u7F6E\u5B9A\u65F6\u4EFB\u52A1</p></div>`);
      }
      _push(`</div></div>`);
      if (generatedCrontab.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6267\u884C\u8BF4\u660E</h2><div class="space-y-3 text-sm"><div class="p-3 bg-primary/5 border border-primary/20 rounded-lg"><div class="font-medium mb-1">\u4E0B\u6B21\u6267\u884C\u65F6\u95F4\u9884\u89C8</div><div class="text-muted-foreground">${ssrInterpolate(nextExecutionTime.value)}</div></div><div class="p-3 bg-muted rounded-lg"><div class="font-medium mb-1">\u6267\u884C\u9891\u7387\u8BF4\u660E</div><div class="text-muted-foreground">${ssrInterpolate(frequencyDescription.value)}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5E38\u7528\u793A\u4F8B</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(examples, (example) => {
        _push(`<div class="p-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors group"><div class="flex justify-between items-start mb-2"><div class="font-medium group-hover:text-primary">${ssrInterpolate(example.name)}</div>`);
        _push(ssrRenderComponent(unref(Copy), { class: "w-4 h-4 text-muted-foreground group-hover:text-primary" }, null, _parent));
        _push(`</div><code class="text-xs text-muted-foreground">${ssrInterpolate(example.crontab)}</code><p class="text-xs text-muted-foreground mt-1">${ssrInterpolate(example.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` Crontab \u4F7F\u7528\u6559\u7A0B </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u57FA\u672C\u683C\u5F0F</h4><code class="block bg-muted p-3 rounded-md font-mono text-sm"> * * * * * command<br> \u2502 \u2502 \u2502 \u2502 \u2502<br> \u2502 \u2502 \u2502 \u2502 \u2514\u2500\u2500\u2500 \u661F\u671F\u51E0 (0 - 7)<br> \u2502 \u2502 \u2502 \u2514\u2500\u2500\u2500\u2500\u2500 \u6708\u4EFD (1 - 12)<br> \u2502 \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u65E5\u671F (1 - 31)<br> \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u5C0F\u65F6 (0 - 23)<br> \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u5206\u949F (0 - 59) </code></div><div><h4 class="font-medium text-foreground mb-2">\u7279\u6B8A\u5B57\u7B26\u8BF4\u660E</h4><ul class="list-disc list-inside space-y-1"><li><code>*</code> - \u4EFB\u610F\u503C</li><li><code>,</code> - \u5217\u8868\u5206\u9694\u7B26\uFF0C\u5982 &quot;1,3,5&quot;</li><li><code>-</code> - \u8303\u56F4\uFF0C\u5982 &quot;1-5&quot;</li><li><code>/</code> - \u6B65\u957F\uFF0C\u5982 &quot;*/5&quot; \u8868\u793A\u6BCF5\u4E2A\u5355\u4F4D</li><li><code>@yearly</code> - \u6BCF\u5E741\u67081\u65E5\u5348\u591C</li><li><code>@monthly</code> - \u6BCF\u67081\u65E5\u5348\u591C</li><li><code>@weekly</code> - \u6BCF\u5468\u65E5\u5348\u591C</li><li><code>@daily</code> - \u6BCF\u5929\u5348\u591C</li><li><code>@hourly</code> - \u6BCF\u5C0F\u65F6</li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/crontab-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=crontab-generator-Bf7kqErN.mjs.map
