import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
import { Wifi, Loader2, Search, Globe, User, History, Info, Copy, MapPin, Server, Clock, Map, HelpCircle, ChevronUp, Activity, Link, Database, Shield, FileText } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
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
  __name: "ip-info",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "IP\u4FE1\u606F\u67E5\u8BE2 - \u5728\u7EBFIP\u5730\u5740\u5B9A\u4F4D\u4E0E\u5206\u6790\u5DE5\u5177",
      meta: [
        { name: "description", content: "\u514D\u8D39\u7684\u5728\u7EBFIP\u5730\u5740\u67E5\u8BE2\u5DE5\u5177\uFF0C\u652F\u6301IP\u5730\u7406\u4F4D\u7F6E\u67E5\u8BE2\u3001ISP\u4FE1\u606F\u83B7\u53D6\u3001\u7F51\u7EDC\u6BB5\u5206\u6790\u3002\u63D0\u4F9B\u7CBE\u51C6\u7684IP\u5B9A\u4F4D\u670D\u52A1\uFF0C\u652F\u6301IPv4\u548CIPv6\u5730\u5740\u67E5\u8BE2\uFF0C\u5E2E\u52A9\u60A8\u5FEB\u901F\u4E86\u89E3IP\u5730\u5740\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002" },
        { name: "keywords", content: "IP\u67E5\u8BE2,IP\u5730\u5740,\u5730\u7406\u4F4D\u7F6E,ISP,IPv4,IPv6,\u7F51\u7EDC\u5DE5\u5177,IP\u5B9A\u4F4D,\u57DF\u540D\u89E3\u6790" }
      ]
    });
    const tool = tools.find((t) => t.id === "ip-info");
    categories.find((c) => c.id === "network");
    const ipAddress = ref("");
    const loading = ref(false);
    const ipInfo = ref(null);
    const myIpInfo = ref(null);
    const myIpLoading = ref(false);
    const history = ref([]);
    ref(-1);
    const isSeoContentVisible = ref(true);
    const iconMap = {
      FileText,
      Shield,
      Database,
      Link,
      Activity,
      Wifi,
      Globe,
      Search
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "ip-info"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "dns-lookup"),
        tools.find((t) => t.id === "port-checker"),
        tools.find((t) => t.id === "ssl-checker"),
        tools.find((t) => t.id === "ping-test")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const ipPresets = [
      { ip: "8.8.8.8", name: "Google DNS" },
      { ip: "1.1.1.1", name: "Cloudflare DNS" },
      { ip: "114.114.114.114", name: "114 DNS" },
      { ip: "223.5.5.5", name: "\u963F\u91CC DNS" }
    ];
    const formatTime = (time) => {
      const date = new Date(time);
      const now = /* @__PURE__ */ new Date();
      const diff = now - date;
      if (diff < 6e4) {
        return "\u521A\u521A";
      } else if (diff < 36e5) {
        return `${Math.floor(diff / 6e4)}\u5206\u949F\u524D`;
      } else if (diff < 864e5) {
        return `${Math.floor(diff / 36e5)}\u5C0F\u65F6\u524D`;
      } else {
        return date.toLocaleDateString();
      }
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">IP\u4FE1\u606F\u67E5\u8BE2 - \u5728\u7EBFIP\u5730\u5740\u5B9A\u4F4D\u4E0E\u5206\u6790\u5DE5\u5177</h1><p class="text-muted-foreground">\u514D\u8D39\u7684\u5728\u7EBFIP\u5730\u5740\u67E5\u8BE2\u5DE5\u5177\uFF0C\u652F\u6301IP\u5730\u7406\u4F4D\u7F6E\u67E5\u8BE2\u3001ISP\u4FE1\u606F\u83B7\u53D6\u3001\u7F51\u7EDC\u6BB5\u5206\u6790\u3002\u63D0\u4F9B\u7CBE\u51C6\u7684IP\u5B9A\u4F4D\u670D\u52A1\uFF0C\u652F\u6301IPv4\u548CIPv6\u5730\u5740\u67E5\u8BE2\uFF0C\u5E2E\u52A9\u60A8\u5FEB\u901F\u4E86\u89E3IP\u5730\u5740\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Wifi), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` IP\u5730\u5740\u67E5\u8BE2 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u8F93\u5165IP\u5730\u5740\u6216\u57DF\u540D</label><input${ssrRenderAttr("value", ipAddress.value)} type="text" placeholder="\u4F8B\u5982: 8.8.8.8 \u6216 util.cn" class="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><p class="mt-1 text-xs text-muted-foreground"> \u652F\u6301IPv4\u3001IPv6\u5730\u5740\u6216\u57DF\u540D\u67E5\u8BE2 </p></div><div><label class="block text-sm font-medium text-foreground mb-2">\u5FEB\u901F\u9009\u62E9</label><div class="grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(ipPresets, (preset) => {
        _push(`<button class="px-3 py-2 text-sm bg-muted hover:bg-muted/80 text-foreground rounded-md transition-colors text-left"><div class="font-medium">${ssrInterpolate(preset.ip)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(preset.name)}</div></button>`);
      });
      _push(`<!--]--></div></div><button${ssrIncludeBooleanAttr(!ipAddress.value || loading.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (loading.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(loading.value ? "\u67E5\u8BE2\u4E2D..." : "\u67E5\u8BE2IP\u4FE1\u606F")}</button></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Globe), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u5F53\u524DIP\u4FE1\u606F </h2><button${ssrIncludeBooleanAttr(myIpLoading.value) ? " disabled" : ""} class="w-full bg-secondary text-secondary-foreground py-2 px-4 rounded-md hover:bg-secondary/80 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (myIpLoading.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(User), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(myIpLoading.value ? "\u83B7\u53D6\u4E2D..." : "\u83B7\u53D6\u6211\u7684IP")}</button>`);
      if (myIpInfo.value) {
        _push(`<div class="mt-4 space-y-2"><div class="flex justify-between text-sm"><span class="text-muted-foreground">IP\u5730\u5740:</span><span class="font-medium text-foreground">${ssrInterpolate(myIpInfo.value.ip)}</span></div><div class="flex justify-between text-sm"><span class="text-muted-foreground">\u4F4D\u7F6E:</span><span class="font-medium text-foreground">${ssrInterpolate(myIpInfo.value.location)}</span></div><div class="flex justify-between text-sm"><span class="text-muted-foreground">ISP:</span><span class="font-medium text-foreground">${ssrInterpolate(myIpInfo.value.isp)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (history.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center justify-between"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u67E5\u8BE2\u5386\u53F2 </span><button class="text-sm text-destructive hover:text-destructive/80"> \u6E05\u9664 </button></h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(history.value, (item) => {
          _push(`<button class="w-full text-left px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors"><div class="font-medium text-foreground">${ssrInterpolate(item.ip)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(item.location)} \u2022 ${ssrInterpolate(formatTime(item.time))}</div></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2">`);
      if (ipInfo.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-semibold flex items-center">`);
        _push(ssrRenderComponent(unref(Info), { class: "h-6 w-6 mr-2 text-primary" }, null, _parent));
        _push(` IP\u8BE6\u7EC6\u4FE1\u606F </h3><button class="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-md transition-colors flex items-center text-sm">`);
        _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` \u590D\u5236\u4FE1\u606F </button></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(unref(Globe), { class: "h-4 w-4 mr-2" }, null, _parent));
        _push(` \u57FA\u672C\u4FE1\u606F </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">IP\u5730\u5740</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.ip)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u7C7B\u578B</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.type)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u72B6\u6001</span><span class="${ssrRenderClass([ipInfo.value.status === "valid" ? "text-green-600" : "text-destructive", "font-medium"])}">${ssrInterpolate(ipInfo.value.status === "valid" ? "\u6709\u6548" : "\u65E0\u6548")}</span></div></div></div><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(unref(MapPin), { class: "h-4 w-4 mr-2" }, null, _parent));
        _push(` \u5730\u7406\u4F4D\u7F6E </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u56FD\u5BB6</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.country)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u5730\u533A</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.region)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u57CE\u5E02</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.city)}</span></div></div></div><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(unref(Server), { class: "h-4 w-4 mr-2" }, null, _parent));
        _push(` \u7F51\u7EDC\u4FE1\u606F </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">ISP</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.isp)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u7EC4\u7EC7</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.org)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">AS\u53F7</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.asn)}</span></div></div></div><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(unref(Clock), { class: "h-4 w-4 mr-2" }, null, _parent));
        _push(` \u65F6\u533A\u4FE1\u606F </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u65F6\u533A</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.timezone)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u5F53\u5730\u65F6\u95F4</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.localTime)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">UTC\u504F\u79FB</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.utcOffset)}</span></div></div></div></div>`);
        if (ipInfo.value.latitude && ipInfo.value.longitude) {
          _push(`<div class="mt-6"><h4 class="font-medium text-foreground mb-4 flex items-center">`);
          _push(ssrRenderComponent(unref(Map), { class: "h-4 w-4 mr-2" }, null, _parent));
          _push(` \u4F4D\u7F6E\u5730\u56FE </h4><div class="bg-muted rounded-lg h-64 flex items-center justify-center"><p class="text-muted-foreground">\u5730\u56FE\u52A0\u8F7D\u4E2D...</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center text-center">`);
        _push(ssrRenderComponent(unref(Wifi), { class: "h-16 w-16 text-muted-foreground mb-4" }, null, _parent));
        _push(`<h3 class="text-lg font-medium text-foreground mb-2">\u5C1A\u672A\u67E5\u8BE2IP\u4FE1\u606F</h3><p class="text-muted-foreground">\u8F93\u5165IP\u5730\u5740\u6216\u57DF\u540D\uFF0C\u70B9\u51FB\u67E5\u8BE2\u6309\u94AE\u83B7\u53D6\u8BE6\u7EC6\u4FE1\u606F</p></div>`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662FIP\u5730\u5740\u67E5\u8BE2\uFF1F </h2><p class="text-muted-foreground mb-4"> IP\u5730\u5740\u67E5\u8BE2\u662F\u4E00\u79CD\u901A\u8FC7\u7F51\u7EDC\u5DE5\u5177\u83B7\u53D6\u7279\u5B9AIP\u5730\u5740\u76F8\u5173\u4FE1\u606F\u7684\u670D\u52A1\u3002\u6BCF\u4E2A\u8FDE\u63A5\u5230\u4E92\u8054\u7F51\u7684\u8BBE\u5907\u90FD\u6709\u4E00\u4E2A\u552F\u4E00\u7684IP\u5730\u5740\uFF0C \u901A\u8FC7\u67E5\u8BE2\u8FD9\u4E2A\u5730\u5740\uFF0C\u6211\u4EEC\u53EF\u4EE5\u83B7\u5F97\u8BE5\u8BBE\u5907\u7684\u5730\u7406\u4F4D\u7F6E\u3001\u4E92\u8054\u7F51\u670D\u52A1\u63D0\u4F9B\u5546(ISP)\u3001\u7EC4\u7EC7\u4FE1\u606F\u7B49\u8BE6\u7EC6\u6570\u636E\u3002 </p><p class="text-muted-foreground mb-6"> IP\u5730\u5740\u67E5\u8BE2\u5DE5\u5177\u5BF9\u4E8E\u7F51\u7EDC\u5B89\u5168\u3001\u7F51\u7EDC\u7BA1\u7406\u3001\u5185\u5BB9\u672C\u5730\u5316\u3001\u5E7F\u544A\u5B9A\u5411\u7B49\u591A\u79CD\u5E94\u7528\u573A\u666F\u90FD\u975E\u5E38\u6709\u7528\u3002 \u65E0\u8BBA\u662F\u9700\u8981\u4E86\u89E3\u8BBF\u95EE\u8005\u7684\u5730\u7406\u4F4D\u7F6E\uFF0C\u8FD8\u662F\u9700\u8981\u5206\u6790\u7F51\u7EDC\u6D41\u91CF\u6765\u6E90\uFF0CIP\u5730\u5740\u67E5\u8BE2\u90FD\u80FD\u63D0\u4F9B\u6709\u4EF7\u503C\u7684\u4FE1\u606F\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u60A8\u8981\u67E5\u8BE2\u7684IP\u5730\u5740\uFF08\u5982\uFF1A8.8.8.8\uFF09\u6216\u57DF\u540D\uFF08\u5982\uFF1Agoogle.com\uFF09</li><li>\u70B9\u51FB&quot;\u67E5\u8BE2IP\u4FE1\u606F&quot;\u6309\u94AE\uFF0C\u7CFB\u7EDF\u5C06\u81EA\u52A8\u5206\u6790\u5E76\u8FD4\u56DE\u7ED3\u679C</li><li>\u67E5\u770B\u8FD4\u56DE\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5305\u62EC\u5730\u7406\u4F4D\u7F6E\u3001ISP\u3001\u7EC4\u7EC7\u3001\u65F6\u533A\u7B49</li><li>\u53EF\u4EE5\u4F7F\u7528&quot;\u83B7\u53D6\u6211\u7684IP&quot;\u529F\u80FD\u5FEB\u901F\u67E5\u8BE2\u5F53\u524D\u8BBE\u5907\u7684IP\u4FE1\u606F</li><li>\u67E5\u8BE2\u5386\u53F2\u4F1A\u81EA\u52A8\u4FDD\u5B58\uFF0C\u65B9\u4FBF\u60A8\u5FEB\u901F\u8BBF\u95EE\u4E4B\u524D\u67E5\u8BE2\u8FC7\u7684IP\u5730\u5740</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u7CBE\u786E\u5730\u7406\u4F4D\u7F6E</strong>: \u63D0\u4F9B\u56FD\u5BB6\u3001\u5730\u533A\u3001\u57CE\u5E02\u7B49\u8BE6\u7EC6\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F</li><li><strong>ISP\u4FE1\u606F\u67E5\u8BE2</strong>: \u663E\u793A\u4E92\u8054\u7F51\u670D\u52A1\u63D0\u4F9B\u5546\u548C\u7F51\u7EDC\u8FD0\u8425\u5546\u4FE1\u606F</li><li><strong>IPv4/IPv6\u652F\u6301</strong>: \u5B8C\u5168\u652F\u6301IPv4\u548CIPv6\u5730\u5740\u683C\u5F0F</li><li><strong>\u57DF\u540D\u89E3\u6790</strong>: \u81EA\u52A8\u5C06\u57DF\u540D\u89E3\u6790\u4E3AIP\u5730\u5740\u8FDB\u884C\u67E5\u8BE2</li><li><strong>\u65F6\u533A\u4FE1\u606F</strong>: \u663E\u793AIP\u5730\u5740\u6240\u5728\u65F6\u533A\u548C\u5F53\u5730\u65F6\u95F4</li><li><strong>\u5386\u53F2\u8BB0\u5F55</strong>: \u81EA\u52A8\u4FDD\u5B58\u67E5\u8BE2\u5386\u53F2\uFF0C\u65B9\u4FBF\u5FEB\u901F\u8BBF\u95EE</li><li><strong>\u6279\u91CF\u67E5\u8BE2</strong>: \u652F\u6301\u5FEB\u901F\u9009\u62E9\u5E38\u7528DNS\u670D\u52A1\u5668IP\u8FDB\u884C\u67E5\u8BE2</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">IP\u5730\u5740\u67E5\u8BE2\u7684\u51C6\u786E\u5EA6\u5982\u4F55\uFF1F</h3><p class="text-muted-foreground mt-1"> IP\u5730\u5740\u67E5\u8BE2\u7684\u51C6\u786E\u5EA6\u901A\u5E38\u5728\u56FD\u5BB6\u548C\u57CE\u5E02\u7EA7\u522B\u8F83\u9AD8\uFF0C\u4F46\u65E0\u6CD5\u7CBE\u786E\u5B9A\u4F4D\u5230\u5177\u4F53\u7684\u8857\u9053\u5730\u5740\u3002 \u8FD9\u662F\u56E0\u4E3AIP\u5730\u5740\u7684\u5206\u914D\u662F\u57FA\u4E8E\u7F51\u7EDC\u6BB5\uFF0C\u800C\u4E0D\u662F\u7269\u7406\u4F4D\u7F6E\u3002\u5BF9\u4E8E\u79FB\u52A8\u8BBE\u5907\u6216\u4F7F\u7528VPN\u7684\u7528\u6237\uFF0C \u67E5\u8BE2\u7ED3\u679C\u53EF\u80FD\u663E\u793A\u7684\u662FVPN\u670D\u52A1\u5668\u6216\u79FB\u52A8\u7F51\u7EDC\u57FA\u7AD9\u7684\u4F4D\u7F6E\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u6709\u4E9BIP\u5730\u5740\u67E5\u8BE2\u4E0D\u5230\u8BE6\u7EC6\u4FE1\u606F\uFF1F</h3><p class="text-muted-foreground mt-1"> \u67D0\u4E9BIP\u5730\u5740\u53EF\u80FD\u662F\u5185\u7F51\u5730\u5740\uFF08\u5982192.168.x.x\u300110.x.x.x\u7B49\uFF09\uFF0C\u8FD9\u4E9B\u5730\u5740\u53EA\u5728\u5C40\u57DF\u7F51\u5185\u4F7F\u7528\uFF0C \u65E0\u6CD5\u901A\u8FC7\u516C\u7F51\u67E5\u8BE2\u5230\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u3002\u6B64\u5916\uFF0C\u4E00\u4E9B\u65B0\u5206\u914D\u7684IP\u5730\u5740\u6216\u7279\u6B8A\u7528\u9014\u7684IP\u6BB5\u53EF\u80FD \u8FD8\u6CA1\u6709\u5B8C\u6574\u7684\u5730\u7406\u4F4D\u7F6E\u6570\u636E\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">IP\u5730\u5740\u67E5\u8BE2\u662F\u5426\u4FB5\u72AF\u9690\u79C1\uFF1F</h3><p class="text-muted-foreground mt-1"> IP\u5730\u5740\u67E5\u8BE2\u5DE5\u5177\u53EA\u663E\u793A\u516C\u5F00\u7684\u7F51\u7EDC\u4FE1\u606F\uFF0C\u4E0D\u4F1A\u83B7\u53D6\u4EFB\u4F55\u4E2A\u4EBA\u9690\u79C1\u6570\u636E\u3002 \u67E5\u8BE2\u7ED3\u679C\u4E2D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\u57FA\u4E8EIP\u5730\u5740\u7684\u7F51\u7EDC\u6BB5\u4FE1\u606F\uFF0C\u800C\u4E0D\u662F\u4E2A\u4EBA\u5B9E\u9645\u4F4D\u7F6E\u3002 \u6211\u4EEC\u6240\u6709\u7684\u67E5\u8BE2\u90FD\u5728\u672C\u5730\u5B8C\u6210\uFF0C\u4E0D\u4F1A\u4FDD\u5B58\u6216\u4E0A\u4F20\u60A8\u7684\u67E5\u8BE2\u8BB0\u5F55\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4EC0\u4E48\u662FAS\u53F7\uFF1F</h3><p class="text-muted-foreground mt-1"> AS\u53F7\uFF08Autonomous System Number\uFF09\u662F\u81EA\u6CBB\u7CFB\u7EDF\u53F7\u7801\uFF0C\u7528\u4E8E\u6807\u8BC6\u4E92\u8054\u7F51\u4E2D\u7684\u72EC\u7ACB\u7F51\u7EDC\u7CFB\u7EDF\u3002 \u6BCF\u4E2AISP\u6216\u5927\u578B\u7EC4\u7EC7\u90FD\u6709\u81EA\u5DF1\u7684AS\u53F7\uFF0C\u901A\u8FC7AS\u53F7\u53EF\u4EE5\u4E86\u89E3IP\u5730\u5740\u5F52\u5C5E\u4E8E\u54EA\u4E2A\u7F51\u7EDC\u5B9E\u4F53\u3002 \u8FD9\u5BF9\u4E8E\u7F51\u7EDC\u8DEF\u7531\u3001\u6D41\u91CF\u5206\u6790\u548C\u7F51\u7EDC\u5B89\u5168\u975E\u5E38\u91CD\u8981\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" })),
                  createVNode("span", { class: "font-medium text-foreground" }, toDisplayString(relatedTool.name), 1)
                ]),
                createVNode("p", { class: "text-sm text-muted-foreground line-clamp-2" }, toDisplayString(relatedTool.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/ip-info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ip-info-BC4G3I_z.mjs.map
