import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from 'vue/server-renderer';
import { Copy, Info, Search, ArrowRight, Clock, Calendar } from 'lucide-vue-next';
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
      { value: "minutely", name: "\u6BCF\u5206\u949F", description: "\u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21" },
      { value: "hourly", name: "\u6BCF\u5C0F\u65F6", description: "\u6BCF\u5C0F\u65F6\u6267\u884C\u4E00\u6B21" },
      { value: "daily", name: "\u6BCF\u5929", description: "\u6BCF\u5929\u6307\u5B9A\u65F6\u95F4\u6267\u884C" },
      { value: "weekly", name: "\u6BCF\u5468", description: "\u6BCF\u5468\u6307\u5B9A\u65E5\u671F\u6267\u884C" },
      { value: "monthly", name: "\u6BCF\u6708", description: "\u6BCF\u6708\u6307\u5B9A\u65E5\u671F\u6267\u884C" },
      { value: "yearly", name: "\u6BCF\u5E74", description: "\u6BCF\u5E74\u6307\u5B9A\u65E5\u671F\u6267\u884C" },
      { value: "interval", name: "\u81EA\u5B9A\u4E49\u95F4\u9694", description: "\u6309\u6307\u5B9A\u95F4\u9694\u6267\u884C" },
      { value: "workday", name: "\u5DE5\u4F5C\u65E5", description: "\u5DE5\u4F5C\u65E5\u6307\u5B9A\u65F6\u95F4\u6267\u884C" }
    ];
    const weekdays = ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"];
    const examples = [
      {
        name: "\u6BCF\u5929\u5907\u4EFD",
        expression: "0 2 * * *",
        description: "\u6BCF\u5929\u51CC\u66682\u70B9\u6267\u884C\u5907\u4EFD"
      },
      {
        name: "\u6BCF\u5C0F\u65F6\u65E5\u5FD7",
        expression: "0 * * * *",
        description: "\u6BCF\u5C0F\u65F6\u6574\u70B9\u8BB0\u5F55\u65E5\u5FD7"
      },
      {
        name: "\u5DE5\u4F5C\u65E5\u63D0\u9192",
        expression: "0 9 * * 1-5",
        description: "\u5DE5\u4F5C\u65E5\u4E0A\u53489\u70B9\u63D0\u9192"
      },
      {
        name: "\u6BCF\u5468\u62A5\u544A",
        expression: "0 18 * * 5",
        description: "\u6BCF\u5468\u4E94\u4E0B\u53486\u70B9\u751F\u6210\u62A5\u544A"
      },
      {
        name: "\u6BCF\u6708\u6E05\u7406",
        expression: "0 3 1 * *",
        description: "\u6BCF\u67081\u53F7\u51CC\u66683\u70B9\u6E05\u7406\u6570\u636E"
      },
      {
        name: "\u6BCF5\u5206\u949F\u68C0\u67E5",
        expression: "*/5 * * * *",
        description: "\u6BCF5\u5206\u949F\u68C0\u67E5\u4E00\u6B21\u72B6\u6001"
      }
    ];
    const showMinuteConfig = computed(
      () => {
        var _a, _b, _c, _d, _e, _f;
        return ((_a = selectedFrequency.value) == null ? void 0 : _a.value) === "hourly" || ((_b = selectedFrequency.value) == null ? void 0 : _b.value) === "daily" || ((_c = selectedFrequency.value) == null ? void 0 : _c.value) === "weekly" || ((_d = selectedFrequency.value) == null ? void 0 : _d.value) === "monthly" || ((_e = selectedFrequency.value) == null ? void 0 : _e.value) === "yearly" || ((_f = selectedFrequency.value) == null ? void 0 : _f.value) === "workday";
      }
    );
    const showHourConfig = computed(
      () => {
        var _a, _b, _c, _d, _e;
        return ((_a = selectedFrequency.value) == null ? void 0 : _a.value) === "daily" || ((_b = selectedFrequency.value) == null ? void 0 : _b.value) === "weekly" || ((_c = selectedFrequency.value) == null ? void 0 : _c.value) === "monthly" || ((_d = selectedFrequency.value) == null ? void 0 : _d.value) === "yearly" || ((_e = selectedFrequency.value) == null ? void 0 : _e.value) === "workday";
      }
    );
    const showDayConfig = computed(
      () => {
        var _a, _b;
        return ((_a = selectedFrequency.value) == null ? void 0 : _a.value) === "monthly" || ((_b = selectedFrequency.value) == null ? void 0 : _b.value) === "yearly";
      }
    );
    const showMonthConfig = computed(
      () => {
        var _a;
        return ((_a = selectedFrequency.value) == null ? void 0 : _a.value) === "yearly";
      }
    );
    const showWeekdayConfig = computed(
      () => {
        var _a;
        return ((_a = selectedFrequency.value) == null ? void 0 : _a.value) === "weekly";
      }
    );
    const showIntervalConfig = computed(
      () => {
        var _a;
        return ((_a = selectedFrequency.value) == null ? void 0 : _a.value) === "interval";
      }
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
          return "\u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21";
        case "hourly":
          return `\u6BCF\u5C0F\u65F6\u7684${config.value.minute}\u5206\u6267\u884C`;
        case "daily":
          return `\u6BCF\u5929${config.value.hour}:${config.value.minute.toString().padStart(2, "0")}\u6267\u884C`;
        case "weekly":
          return `\u6BCF\u5468${weekdays[config.value.weekday]}${config.value.hour}:${config.value.minute.toString().padStart(2, "0")}\u6267\u884C`;
        case "monthly":
          return `\u6BCF\u6708${config.value.day}\u53F7${config.value.hour}:${config.value.minute.toString().padStart(2, "0")}\u6267\u884C`;
        case "yearly":
          return `\u6BCF\u5E74${config.value.month}\u6708${config.value.day}\u53F7${config.value.hour}:${config.value.minute.toString().padStart(2, "0")}\u6267\u884C`;
        case "interval":
          const unitMap = {
            minute: "\u5206\u949F",
            hour: "\u5C0F\u65F6",
            day: "\u5929",
            month: "\u4E2A\u6708"
          };
          return `\u6BCF${config.value.interval}${unitMap[config.value.intervalUnit]}\u6267\u884C\u4E00\u6B21`;
        case "workday":
          return `\u5DE5\u4F5C\u65E5\uFF08\u5468\u4E00\u81F3\u5468\u4E94\uFF09\u6BCF\u5929${config.value.hour}:${config.value.minute.toString().padStart(2, "0")}\u6267\u884C`;
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
      title: "Cron \u751F\u6210\u5668 - \u5728\u7EBF Cron \u8868\u8FBE\u5F0F\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF Cron \u8868\u8FBE\u5F0F\u751F\u6210\u5DE5\u5177\uFF0C\u53EF\u89C6\u5316\u914D\u7F6E\u751F\u6210\u5B9A\u65F6\u4EFB\u52A1\u8868\u8FBE\u5F0F\uFF0C\u652F\u6301\u591A\u79CD\u5B9A\u65F6\u4EFB\u52A1\u573A\u666F\u3002",
      keywords: ["cron", "crontab", "\u5B9A\u65F6\u4EFB\u52A1", "\u8868\u8FBE\u5F0F\u751F\u6210", "\u8C03\u5EA6", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Cron \u751F\u6210\u5668</h1><p class="text-muted-foreground">\u53EF\u89C6\u5316\u914D\u7F6E\u751F\u6210 Cron \u8868\u8FBE\u5F0F\uFF0C\u652F\u6301\u591A\u79CD\u5B9A\u65F6\u4EFB\u52A1\u573A\u666F</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6267\u884C\u9891\u7387</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(frequencies, (freq) => {
        var _a;
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          ((_a = selectedFrequency.value) == null ? void 0 : _a.value) === freq.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(freq.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(freq.description)}</div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (selectedFrequency.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8BE6\u7EC6\u914D\u7F6E</h2>`);
        if (showMinuteConfig.value) {
          _push(`<div class="mb-4"><label class="text-sm font-medium">\u5206\u949F</label><div class="mt-2 grid grid-cols-4 gap-2"><!--[-->`);
          ssrRenderList([0, 15, 30, 45], (min) => {
            _push(`<button class="${ssrRenderClass([
              "px-3 py-2 rounded text-sm transition-colors",
              config.value.minute === min ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            ])}">${ssrInterpolate(min)}\u5206 </button>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (showHourConfig.value) {
          _push(`<div class="mb-4"><label class="text-sm font-medium">\u5C0F\u65F6</label><div class="mt-2 grid grid-cols-4 gap-2"><!--[-->`);
          ssrRenderList([0, 6, 9, 12, 15, 18, 21], (hour) => {
            _push(`<button class="${ssrRenderClass([
              "px-3 py-2 rounded text-sm transition-colors",
              config.value.hour === hour ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            ])}">${ssrInterpolate(hour)}\u65F6 </button>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (showDayConfig.value) {
          _push(`<div class="mb-4"><label class="text-sm font-medium">\u65E5\u671F</label><div class="mt-2 flex gap-2"><input${ssrRenderAttr("value", config.value.day)} type="number" min="1" max="31" placeholder="1-31" class="w-20 px-3 py-2 border rounded-md text-sm"><span class="text-sm text-muted-foreground self-center">\u53F7</span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (showMonthConfig.value) {
          _push(`<div class="mb-4"><label class="text-sm font-medium">\u6708\u4EFD</label><div class="mt-2 grid grid-cols-4 gap-2"><!--[-->`);
          ssrRenderList(["\u4E00\u6708", "\u56DB\u6708", "\u4E03\u6708", "\u5341\u6708"], (month, index) => {
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
          _push(`<div class="mb-4"><label class="text-sm font-medium">\u661F\u671F</label><div class="mt-2 grid grid-cols-7 gap-2"><!--[-->`);
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
          _push(`<div class="mb-4"><label class="text-sm font-medium">\u95F4\u9694\u65F6\u95F4</label><div class="mt-2 flex items-center gap-3"><span class="text-sm">\u6BCF</span><input${ssrRenderAttr("value", config.value.interval)} type="number" min="1" max="60" class="w-20 px-3 py-2 border rounded-md text-sm"><select class="px-3 py-2 border rounded-md text-sm"><option value="minute"${ssrIncludeBooleanAttr(Array.isArray(config.value.intervalUnit) ? ssrLooseContain(config.value.intervalUnit, "minute") : ssrLooseEqual(config.value.intervalUnit, "minute")) ? " selected" : ""}>\u5206\u949F</option><option value="hour"${ssrIncludeBooleanAttr(Array.isArray(config.value.intervalUnit) ? ssrLooseContain(config.value.intervalUnit, "hour") : ssrLooseEqual(config.value.intervalUnit, "hour")) ? " selected" : ""}>\u5C0F\u65F6</option><option value="day"${ssrIncludeBooleanAttr(Array.isArray(config.value.intervalUnit) ? ssrLooseContain(config.value.intervalUnit, "day") : ssrLooseEqual(config.value.intervalUnit, "day")) ? " selected" : ""}>\u5929</option><option value="month"${ssrIncludeBooleanAttr(Array.isArray(config.value.intervalUnit) ? ssrLooseContain(config.value.intervalUnit, "month") : ssrLooseEqual(config.value.intervalUnit, "month")) ? " selected" : ""}>\u6708</option></select></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u751F\u6210\u7ED3\u679C</h2><div class="space-y-3"><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">Cron \u8868\u8FBE\u5F0F</div><div class="font-mono text-lg">${ssrInterpolate(generatedExpression.value || "\u8BF7\u9009\u62E9\u914D\u7F6E")}</div></div>`);
      if (generatedDescription.value) {
        _push(`<div class="p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-1">\u6267\u884C\u8BF4\u660E</div><div class="text-sm">${ssrInterpolate(generatedDescription.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="space-y-4">`);
      if (nextRunTimes.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6267\u884C\u9884\u89C8</h2><div class="space-y-3"><div class="text-sm text-muted-foreground">\u4E0B\u6B21\u6267\u884C\u65F6\u95F4</div><!--[-->`);
        ssrRenderList(nextRunTimes.value, (time, index) => {
          _push(`<div class="flex justify-between items-center p-3 bg-muted rounded-lg"><span class="text-sm">${ssrInterpolate(time.date)}</span><span class="font-mono text-sm">${ssrInterpolate(time.time)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5E38\u7528\u793A\u4F8B</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(examples, (example) => {
        _push(`<div class="p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors group"><div class="flex justify-between items-start mb-2"><div class="font-medium group-hover:text-primary">${ssrInterpolate(example.name)}</div>`);
        _push(ssrRenderComponent(unref(Copy), { class: "w-4 h-4 text-muted-foreground group-hover:text-primary" }, null, _parent));
        _push(`</div><div class="font-mono text-sm text-muted-foreground">${ssrInterpolate(example.expression)}</div><div class="text-xs text-muted-foreground mt-1">${ssrInterpolate(example.description)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u64CD\u4F5C</h2><div class="space-y-3">`);
      if (generatedExpression.value) {
        _push(`<button class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236\u8868\u8FBE\u5F0F")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (generatedExpression.value) {
        _push(`<button class="w-full px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors"> \u6D4B\u8BD5\u8868\u8FBE\u5F0F </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` Cron \u8868\u8FBE\u5F0F\u683C\u5F0F </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u57FA\u672C\u683C\u5F0F</h4><code class="block bg-muted p-3 rounded-md font-mono text-sm"> * * * * *<br> \u5206 \u65F6 \u65E5 \u6708 \u5468 </code></div><div><h4 class="font-medium text-foreground mb-2">\u5B57\u6BB5\u8BF4\u660E</h4><div class="grid grid-cols-2 gap-3"><div><strong>\u5206\u949F</strong>\uFF1A0-59 </div><div><strong>\u5C0F\u65F6</strong>\uFF1A0-23 </div><div><strong>\u65E5\u671F</strong>\uFF1A1-31 </div><div><strong>\u6708\u4EFD</strong>\uFF1A1-12 </div><div><strong>\u661F\u671F</strong>\uFF1A0-7 (0\u548C7\u90FD\u8868\u793A\u5468\u65E5) </div></div></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/cron-parser",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Cron \u89E3\u6790\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u89E3\u6790\u5B9A\u65F6\u4EFB\u52A1\u8868\u8FBE\u5F0F</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Search), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Cron \u89E3\u6790\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u89E3\u6790\u5B9A\u65F6\u4EFB\u52A1\u8868\u8FBE\u5F0F")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u65F6\u95F4\u6233\u8F6C\u6362\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>Unix\u65F6\u95F4\u6233\u4E0E\u65E5\u671F\u8F6C\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Clock), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u65F6\u95F4\u6233\u8F6C\u6362\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Unix\u65F6\u95F4\u6233\u4E0E\u65E5\u671F\u8F6C\u6362")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u65E5\u671F\u8BA1\u7B97\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u65E5\u671F\u52A0\u51CF\u8BA1\u7B97</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), { class: "w-5 h-5 text-primary" }),
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

export { _sfc_main as default };
//# sourceMappingURL=cron-generator-BsbAXDHA.mjs.map
