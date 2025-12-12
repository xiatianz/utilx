import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { Info, Clock, ArrowRight, Calendar, Calculator } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { f as useSeoMeta } from './server.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/destr/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ohash/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/scule/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/apple/Documents/code/util/node_modules/pathe/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/server.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/devalue/index.js';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';

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
        name: "\u4E9A\u6D32",
        timezones: [
          { value: "Asia/Shanghai", label: "\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4 (CST) UTC+8" },
          { value: "Asia/Tokyo", label: "\u65E5\u672C\u6807\u51C6\u65F6\u95F4 (JST) UTC+9" },
          { value: "Asia/Seoul", label: "\u97E9\u56FD\u6807\u51C6\u65F6\u95F4 (KST) UTC+9" },
          { value: "Asia/Singapore", label: "\u65B0\u52A0\u5761\u65F6\u95F4 (SGT) UTC+8" },
          { value: "Asia/Hong_Kong", label: "\u9999\u6E2F\u65F6\u95F4 (HKT) UTC+8" },
          { value: "Asia/Taipei", label: "\u53F0\u5317\u65F6\u95F4 (CST) UTC+8" },
          { value: "Asia/Dubai", label: "\u8FEA\u62DC\u65F6\u95F4 (GST) UTC+4" },
          { value: "Asia/Kolkata", label: "\u5370\u5EA6\u6807\u51C6\u65F6\u95F4 (IST) UTC+5:30" },
          { value: "Asia/Bangkok", label: "\u66FC\u8C37\u65F6\u95F4 (ICT) UTC+7" }
        ]
      },
      {
        name: "\u6B27\u6D32",
        timezones: [
          { value: "Europe/London", label: "\u683C\u6797\u5A01\u6CBB\u65F6\u95F4 (GMT/BST) UTC+0/+1" },
          { value: "Europe/Paris", label: "\u4E2D\u6B27\u65F6\u95F4 (CET/CEST) UTC+1/+2" },
          { value: "Europe/Berlin", label: "\u5FB7\u56FD\u65F6\u95F4 (CET/CEST) UTC+1/+2" },
          { value: "Europe/Moscow", label: "\u83AB\u65AF\u79D1\u65F6\u95F4 (MSK) UTC+3" },
          { value: "Europe/Madrid", label: "\u897F\u73ED\u7259\u65F6\u95F4 (CET/CEST) UTC+1/+2" },
          { value: "Europe/Rome", label: "\u610F\u5927\u5229\u65F6\u95F4 (CET/CEST) UTC+1/+2" },
          { value: "Europe/Amsterdam", label: "\u963F\u59C6\u65AF\u7279\u4E39\u65F6\u95F4 (CET/CEST) UTC+1/+2" }
        ]
      },
      {
        name: "\u7F8E\u6D32",
        timezones: [
          { value: "America/New_York", label: "\u7F8E\u56FD\u4E1C\u90E8\u65F6\u95F4 (EST/EDT) UTC-5/-4" },
          { value: "America/Los_Angeles", label: "\u7F8E\u56FD\u897F\u90E8\u65F6\u95F4 (PST/PDT) UTC-8/-7" },
          { value: "America/Chicago", label: "\u7F8E\u56FD\u4E2D\u90E8\u65F6\u95F4 (CST/CDT) UTC-6/-5" },
          { value: "America/Denver", label: "\u7F8E\u56FD\u5C71\u5730\u65F6\u95F4 (MST/MDT) UTC-7/-6" },
          { value: "America/Toronto", label: "\u591A\u4F26\u591A\u65F6\u95F4 (EST/EDT) UTC-5/-4" },
          { value: "America/Vancouver", label: "\u6E29\u54E5\u534E\u65F6\u95F4 (PST/PDT) UTC-8/-7" },
          { value: "America/Mexico_City", label: "\u58A8\u897F\u54E5\u57CE\u65F6\u95F4 (CST/CDT) UTC-6/-5" },
          { value: "America/Sao_Paulo", label: "\u5723\u4FDD\u7F57\u65F6\u95F4 (BRT) UTC-3" }
        ]
      },
      {
        name: "\u5927\u6D0B\u6D32",
        timezones: [
          { value: "Australia/Sydney", label: "\u6089\u5C3C\u65F6\u95F4 (AEST/AEDT) UTC+10/+11" },
          { value: "Australia/Melbourne", label: "\u58A8\u5C14\u672C\u65F6\u95F4 (AEST/AEDT) UTC+10/+11" },
          { value: "Pacific/Auckland", label: "\u5965\u514B\u5170\u65F6\u95F4 (NZST/NZDT) UTC+12/+13" }
        ]
      },
      {
        name: "\u5176\u4ED6",
        timezones: [
          { value: "UTC", label: "\u534F\u8C03\u4E16\u754C\u65F6 (UTC) UTC+0" },
          { value: "Africa/Johannesburg", label: "\u7EA6\u7FF0\u5185\u65AF\u5821\u65F6\u95F4 (SAST) UTC+2" },
          { value: "Asia/Kolkata", label: "\u5370\u5EA6\u6807\u51C6\u65F6\u95F4 (IST) UTC+5:30" }
        ]
      }
    ];
    const popularTimezones = [
      { name: "\u5317\u4EAC", value: "Asia/Shanghai", label: "CST" },
      { name: "\u7EBD\u7EA6", value: "America/New_York", label: "EST/EDT" },
      { name: "\u4F26\u6566", value: "Europe/London", label: "GMT/BST" },
      { name: "\u4E1C\u4EAC", value: "Asia/Tokyo", label: "JST" },
      { name: "\u5DF4\u9ECE", value: "Europe/Paris", label: "CET/CEST" },
      { name: "\u6089\u5C3C", value: "Australia/Sydney", label: "AEST/AEDT" }
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
        { time: "09:00", label: "\u65E9\u4E0A9\u70B9" },
        { time: "10:00", label: "\u65E9\u4E0A10\u70B9" },
        { time: "14:00", label: "\u4E0B\u53482\u70B9" },
        { time: "15:00", label: "\u4E0B\u53483\u70B9" }
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
      title: "\u65F6\u533A\u8F6C\u6362\u5668 - \u5728\u7EBF\u5168\u7403\u65F6\u533A\u65F6\u95F4\u8F6C\u6362\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF\u65F6\u533A\u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u5728\u5168\u7403\u4E0D\u540C\u65F6\u533A\u4E4B\u95F4\u8F6C\u6362\u65F6\u95F4\uFF0C\u81EA\u52A8\u5904\u7406\u590F\u4EE4\u65F6\uFF0C\u5305\u542B\u4F1A\u8BAE\u89C4\u5212\u5668\u529F\u80FD\u3002",
      keywords: ["timezone", "\u65F6\u533A", "\u65F6\u95F4\u8F6C\u6362", "utc", "gmt", "\u590F\u4EE4\u65F6", "\u4F1A\u8BAE\u65F6\u95F4", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u65F6\u533A\u8F6C\u6362\u5668</h1><p class="text-muted-foreground">\u5728\u5168\u7403\u4E0D\u540C\u65F6\u533A\u4E4B\u95F4\u8F6C\u6362\u65F6\u95F4\uFF0C\u652F\u6301\u590F\u4EE4\u65F6\u81EA\u52A8\u8C03\u6574</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6E90\u65F6\u533A</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u65E5\u671F</label><input${ssrRenderAttr("value", sourceDate.value)} type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><div><label class="text-sm font-medium">\u65F6\u95F4</label><input${ssrRenderAttr("value", sourceTime.value)} type="time" step="1" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div><div><label class="text-sm font-medium">\u65F6\u533A</label><select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><option value=""${ssrIncludeBooleanAttr(Array.isArray(sourceTimezone.value) ? ssrLooseContain(sourceTimezone.value, "") : ssrLooseEqual(sourceTimezone.value, "")) ? " selected" : ""}>\u9009\u62E9\u65F6\u533A</option><!--[-->`);
      ssrRenderList(timezoneGroups, (group) => {
        _push(`<optgroup${ssrRenderAttr("label", group.name)}><!--[-->`);
        ssrRenderList(group.timezones, (tz) => {
          _push(`<option${ssrRenderAttr("value", tz.value)}${ssrIncludeBooleanAttr(Array.isArray(sourceTimezone.value) ? ssrLooseContain(sourceTimezone.value, tz.value) : ssrLooseEqual(sourceTimezone.value, tz.value)) ? " selected" : ""}>${ssrInterpolate(tz.label)}</option>`);
        });
        _push(`<!--]--></optgroup>`);
      });
      _push(`<!--]--></select></div><div class="flex gap-2"><button class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"> \u5F53\u524D\u65F6\u95F4 </button><button class="flex-1 px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors text-sm"> \u4EA4\u6362\u65F6\u533A </button></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u76EE\u6807\u65F6\u533A</h2><div><label class="text-sm font-medium">\u65F6\u533A</label><select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><option value=""${ssrIncludeBooleanAttr(Array.isArray(targetTimezone.value) ? ssrLooseContain(targetTimezone.value, "") : ssrLooseEqual(targetTimezone.value, "")) ? " selected" : ""}>\u9009\u62E9\u65F6\u533A</option><!--[-->`);
      ssrRenderList(timezoneGroups, (group) => {
        _push(`<optgroup${ssrRenderAttr("label", group.name)}><!--[-->`);
        ssrRenderList(group.timezones, (tz) => {
          _push(`<option${ssrRenderAttr("value", tz.value)}${ssrIncludeBooleanAttr(Array.isArray(targetTimezone.value) ? ssrLooseContain(targetTimezone.value, tz.value) : ssrLooseEqual(targetTimezone.value, tz.value)) ? " selected" : ""}>${ssrInterpolate(tz.label)}</option>`);
        });
        _push(`<!--]--></optgroup>`);
      });
      _push(`<!--]--></select></div>`);
      if (targetDateTime.value) {
        _push(`<div class="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-2">\u8F6C\u6362\u7ED3\u679C</div><div class="text-xl font-semibold mb-1">${ssrInterpolate(targetDate.value)}</div><div class="text-lg font-mono">${ssrInterpolate(targetTime.value)}</div><div class="text-sm text-muted-foreground mt-2">${ssrInterpolate(targetTimezoneLabel.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="space-y-4">`);
      if (timeDifference.value !== null) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u65F6\u5DEE\u4FE1\u606F</h2><div class="space-y-3"><div class="flex justify-between items-center"><span class="text-sm">\u65F6\u5DEE</span><span class="font-mono">${ssrInterpolate(timeDifference.value > 0 ? "+" : "")}${ssrInterpolate(timeDifference.value)}\u5C0F\u65F6</span></div><div class="p-3 bg-muted rounded-lg text-sm"><p>${ssrInterpolate(sourceTimezoneLabel.value)}\u6BD4${ssrInterpolate(targetTimezoneLabel.value)}</p><p class="font-semibold mt-1">${ssrInterpolate(timeDifference.value > 0 ? "\u5FEB" : "\u6162")}${ssrInterpolate(Math.abs(timeDifference.value))}\u5C0F\u65F6 </p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u591A\u65F6\u533A\u5BF9\u6BD4</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(popularTimezones, (tz) => {
        _push(`<div class="flex justify-between items-center p-3 hover:bg-muted/50 rounded-lg transition-colors"><div><div class="font-medium text-sm">${ssrInterpolate(tz.name)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(tz.label)}</div></div><div class="text-right"><div class="font-mono text-sm">${ssrInterpolate(getTimeInTimezone(tz.value))}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(getTimeDifference(tz.value))}</div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u4F1A\u8BAE\u89C4\u5212\u5668</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u9009\u62E9\u53C2\u4F1A\u65F6\u533A</label><div class="mt-2 space-y-2"><!--[-->`);
      ssrRenderList(selectedTimezones.value, (tz) => {
        _push(`<div class="flex items-center gap-2"><span class="text-sm flex-1">${ssrInterpolate(getTimezoneLabel(tz))}</span><button class="px-2 py-1 text-xs text-muted-foreground hover:text-destructive transition-colors"> \u79FB\u9664 </button></div>`);
      });
      _push(`<!--]--></div><select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"><option value="">\u6DFB\u52A0\u53C2\u4F1A\u8005\u65F6\u533A</option><!--[-->`);
      ssrRenderList(availableTimezones.value, (tz) => {
        _push(`<option${ssrRenderAttr("value", tz.value)}>${ssrInterpolate(tz.label)}</option>`);
      });
      _push(`<!--]--></select></div>`);
      if (selectedTimezones.value.length > 0) {
        _push(`<div class="space-y-2"><label class="text-sm font-medium">\u6700\u4F73\u4F1A\u8BAE\u65F6\u95F4</label><div class="grid grid-cols-2 gap-2"><!--[-->`);
        ssrRenderList(suggestedMeetingTimes.value, (time) => {
          _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm transition-colors">${ssrInterpolate(time.time)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5173\u4E8E\u65F6\u533A </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u5E38\u7528\u65F6\u533A\u7F29\u5199</h4><div class="grid grid-cols-2 md:grid-cols-3 gap-2"><div><strong>UTC</strong> - \u534F\u8C03\u4E16\u754C\u65F6</div><div><strong>GMT</strong> - \u683C\u6797\u5A01\u6CBB\u6807\u51C6\u65F6\u95F4</div><div><strong>EST</strong> - \u7F8E\u56FD\u4E1C\u90E8\u6807\u51C6\u65F6\u95F4</div><div><strong>CST</strong> - \u4E2D\u56FD\u6807\u51C6\u65F6\u95F4</div><div><strong>JST</strong> - \u65E5\u672C\u6807\u51C6\u65F6\u95F4</div><div><strong>CET</strong> - \u4E2D\u6B27\u65F6\u95F4</div></div></div><div><h4 class="font-medium text-foreground mb-2">\u590F\u4EE4\u65F6</h4><p>\u90E8\u5206\u5730\u533A\u5728\u590F\u5B63\u4F1A\u5C06\u65F6\u95F4\u8C03\u5FEB\u4E00\u5C0F\u65F6\u4EE5\u5145\u5206\u5229\u7528\u65E5\u7167\u65F6\u95F4\uFF0C\u79F0\u4E3A\u590F\u4EE4\u65F6\uFF08Daylight Saving Time\uFF09\u3002\u672C\u5DE5\u5177\u4F1A\u81EA\u52A8\u5904\u7406\u590F\u4EE4\u65F6\u8F6C\u6362\u3002</p></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
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
        to: "/tools/cron-parser",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Cron \u89E3\u6790\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u89E3\u6790\u5B9A\u65F6\u4EFB\u52A1\u8868\u8FBE\u5F0F</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), { class: "w-5 h-5 text-primary" }),
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
        to: "/tools/date-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calculator), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u65E5\u671F\u8BA1\u7B97\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u65E5\u671F\u52A0\u51CF\u8BA1\u7B97</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calculator), { class: "w-5 h-5 text-primary" }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/timezone-convert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=timezone-convert-Zl3MYJnn.mjs.map
