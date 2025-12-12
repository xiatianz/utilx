import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
import { Wifi, Search, ChevronDown, Loader2, Zap, History, Server, Download, Copy, GitBranch, HelpCircle, ChevronUp, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Type, Clock, Shield, Lock, FileText } from 'lucide-vue-next';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
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

const _sfc_main = {
  __name: "dns-lookup",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useSeoMeta({
      title: "DNS\u67E5\u8BE2 - \u5728\u7EBFDNS\u8BB0\u5F55\u67E5\u8BE2\u5DE5\u5177",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBFDNS\u67E5\u8BE2\u5DE5\u5177\uFF0C\u652F\u6301A\u3001AAAA\u3001CNAME\u3001MX\u3001TXT\u7B49\u591A\u79CDDNS\u8BB0\u5F55\u7C7B\u578B\u67E5\u8BE2\uFF0C\u53EF\u81EA\u5B9A\u4E49DNS\u670D\u52A1\u5668\u3002" },
        { name: "keywords", content: "DNS\u67E5\u8BE2,DNS\u8BB0\u5F55,A\u8BB0\u5F55,AAAA\u8BB0\u5F55,CNAME\u8BB0\u5F55,MX\u8BB0\u5F55,TXT\u8BB0\u5F55,NS\u8BB0\u5F55" }
      ]
    });
    const tool = tools.find((t) => t.id === "dns-lookup");
    categories.find((c) => c.id === "network");
    const domain = ref("");
    const dnsServer = ref("system");
    const selectedTypes = ref(["A", "AAAA", "MX", "NS"]);
    const loading = ref(false);
    const dnsResults = ref([]);
    const traceRoute = ref([]);
    const history = ref([]);
    const activeTab = ref("A");
    const showAdvanced = ref(false);
    const timeout = ref(5);
    const isSeoContentVisible = ref(true);
    const options = ref({
      traceRoute: false,
      includeDetails: false
    });
    const recordTypes = [
      { label: "A", value: "A" },
      { label: "AAAA", value: "AAAA" },
      { label: "CNAME", value: "CNAME" },
      { label: "MX", value: "MX" },
      { label: "TXT", value: "TXT" },
      { label: "NS", value: "NS" },
      { label: "SOA", value: "SOA" },
      { label: "PTR", value: "PTR" },
      { label: "SRV", value: "SRV" }
    ];
    const recordTypesInfo = [
      {
        label: "A\u8BB0\u5F55",
        value: "A",
        description: "\u5C06\u57DF\u540D\u6307\u5411IPv4\u5730\u5740"
      },
      {
        label: "AAAA\u8BB0\u5F55",
        value: "AAAA",
        description: "\u5C06\u57DF\u540D\u6307\u5411IPv6\u5730\u5740"
      },
      {
        label: "CNAME\u8BB0\u5F55",
        value: "CNAME",
        description: "\u5C06\u57DF\u540D\u6307\u5411\u53E6\u4E00\u4E2A\u57DF\u540D"
      },
      {
        label: "MX\u8BB0\u5F55",
        value: "MX",
        description: "\u6307\u5B9A\u90AE\u4EF6\u670D\u52A1\u5668"
      },
      {
        label: "TXT\u8BB0\u5F55",
        value: "TXT",
        description: "\u5B58\u50A8\u6587\u672C\u4FE1\u606F\uFF0C\u5E38\u7528\u4E8E\u9A8C\u8BC1"
      },
      {
        label: "NS\u8BB0\u5F55",
        value: "NS",
        description: "\u6307\u5B9A\u57DF\u540D\u670D\u52A1\u5668"
      },
      {
        label: "SOA\u8BB0\u5F55",
        value: "SOA",
        description: "\u8D77\u59CB\u6388\u6743\u673A\u6784\u8BB0\u5F55"
      },
      {
        label: "PTR\u8BB0\u5F55",
        value: "PTR",
        description: "\u53CD\u5411DNS\u89E3\u6790"
      },
      {
        label: "SRV\u8BB0\u5F55",
        value: "SRV",
        description: "\u670D\u52A1\u5B9A\u4F4D\u8BB0\u5F55"
      }
    ];
    const quickPresets = [
      { domain: "google.com", types: ["A", "AAAA"] },
      { domain: "github.com", types: ["A", "CNAME"] },
      { domain: "cloudflare.com", types: ["A", "AAAA", "NS"] }
    ];
    const iconMap = {
      FileText,
      Lock,
      Shield,
      Clock,
      Type,
      Wifi,
      Image,
      Code,
      FileJson,
      Database,
      Link,
      Hash,
      Timer,
      Regex,
      FileDiff,
      Globe,
      FolderOpen,
      GitBranch
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "dns-lookup"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "whois-lookup"),
        tools.find((t) => t.id === "http-client"),
        tools.find((t) => t.id === "ip-info"),
        tools.find((t) => t.id === "ssl-checker")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const groupedResults = computed(() => {
      const grouped = {};
      dnsResults.value.forEach((record) => {
        if (!grouped[record.type]) {
          grouped[record.type] = [];
        }
        grouped[record.type].push(record);
      });
      return grouped;
    });
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><div class="flex items-center gap-4 mb-4"><div class="p-3 bg-primary/10 rounded-lg">`);
      _push(ssrRenderComponent(unref(Wifi), { class: "h-8 w-8 text-primary" }, null, _parent));
      _push(`</div><h1 class="text-3xl font-bold text-foreground">DNS\u67E5\u8BE2 - \u5728\u7EBFDNS\u8BB0\u5F55\u67E5\u8BE2\u5DE5\u5177</h1></div><p class="text-muted-foreground"> \u514D\u8D39\u5728\u7EBFDNS\u67E5\u8BE2\u5DE5\u5177\uFF0C\u652F\u6301A\u3001AAAA\u3001CNAME\u3001MX\u3001TXT\u7B49\u591A\u79CDDNS\u8BB0\u5F55\u7C7B\u578B\u67E5\u8BE2\u3002\u53EF\u81EA\u5B9A\u4E49DNS\u670D\u52A1\u5668\uFF0C\u63D0\u4F9B\u8BE6\u7EC6\u7684DNS\u89E3\u6790\u7ED3\u679C\uFF0C\u5E2E\u52A9\u60A8\u8BCA\u65AD\u57DF\u540D\u89E3\u6790\u95EE\u9898\u3002 </p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` DNS\u67E5\u8BE2 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u57DF\u540D</label><input${ssrRenderAttr("value", domain.value)} type="text" placeholder="\u4F8B\u5982: google.com" class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></div><div><label class="block text-sm font-medium text-foreground mb-2">\u8BB0\u5F55\u7C7B\u578B</label><div class="grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(recordTypes, (type) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-2 text-sm rounded-md border transition-colors",
          selectedTypes.value.includes(type.value) ? "bg-primary/10 border-primary text-primary" : "bg-background border-border text-foreground hover:bg-muted"
        ])}">${ssrInterpolate(type.label)}</button>`);
      });
      _push(`<!--]--></div></div><div><label class="block text-sm font-medium text-foreground mb-2">DNS\u670D\u52A1\u5668</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="system"${ssrIncludeBooleanAttr(Array.isArray(dnsServer.value) ? ssrLooseContain(dnsServer.value, "system") : ssrLooseEqual(dnsServer.value, "system")) ? " selected" : ""}>\u7CFB\u7EDF\u9ED8\u8BA4</option><option value="8.8.8.8"${ssrIncludeBooleanAttr(Array.isArray(dnsServer.value) ? ssrLooseContain(dnsServer.value, "8.8.8.8") : ssrLooseEqual(dnsServer.value, "8.8.8.8")) ? " selected" : ""}>Google (8.8.8.8)</option><option value="1.1.1.1"${ssrIncludeBooleanAttr(Array.isArray(dnsServer.value) ? ssrLooseContain(dnsServer.value, "1.1.1.1") : ssrLooseEqual(dnsServer.value, "1.1.1.1")) ? " selected" : ""}>Cloudflare (1.1.1.1)</option><option value="208.67.222.222"${ssrIncludeBooleanAttr(Array.isArray(dnsServer.value) ? ssrLooseContain(dnsServer.value, "208.67.222.222") : ssrLooseEqual(dnsServer.value, "208.67.222.222")) ? " selected" : ""}>OpenDNS (208.67.222.222)</option><option value="114.114.114.114"${ssrIncludeBooleanAttr(Array.isArray(dnsServer.value) ? ssrLooseContain(dnsServer.value, "114.114.114.114") : ssrLooseEqual(dnsServer.value, "114.114.114.114")) ? " selected" : ""}>114DNS (114.114.114.114)</option><option value="223.5.5.5"${ssrIncludeBooleanAttr(Array.isArray(dnsServer.value) ? ssrLooseContain(dnsServer.value, "223.5.5.5") : ssrLooseEqual(dnsServer.value, "223.5.5.5")) ? " selected" : ""}>\u963F\u91CCDNS (223.5.5.5)</option></select></div><div><button class="w-full text-left px-3 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors text-sm flex items-center justify-between"><span>\u9AD8\u7EA7\u9009\u9879</span>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        class: ["h-4 w-4 transition-transform", showAdvanced.value ? "rotate-180" : ""]
      }, null, _parent));
      _push(`</button>`);
      if (showAdvanced.value) {
        _push(`<div class="mt-3 space-y-3"><div><label class="block text-xs text-muted-foreground mb-1">\u8D85\u65F6\u65F6\u95F4 (\u79D2)</label><input${ssrRenderAttr("value", timeout.value)} type="number" min="1" max="30" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.traceRoute) ? ssrLooseContain(options.value.traceRoute, null) : options.value.traceRoute) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">\u8FFD\u8E2A\u89E3\u6790\u8DEF\u5F84</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.includeDetails) ? ssrLooseContain(options.value.includeDetails, null) : options.value.includeDetails) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">\u663E\u793A\u8BE6\u7EC6\u4FE1\u606F</span></label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button${ssrIncludeBooleanAttr(!domain.value || selectedTypes.value.length === 0 || loading.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (loading.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(loading.value ? "\u67E5\u8BE2\u4E2D..." : "\u67E5\u8BE2DNS")}</button></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Zap), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u5FEB\u901F\u67E5\u8BE2 </h2><div class="grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(quickPresets, (preset) => {
        _push(`<button class="px-3 py-2 text-sm bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors">${ssrInterpolate(preset.domain)}</button>`);
      });
      _push(`<!--]--></div></div>`);
      if (history.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold text-foreground mb-4 flex items-center justify-between"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u67E5\u8BE2\u5386\u53F2 </span><button class="text-sm text-destructive hover:text-destructive/80"> \u6E05\u9664 </button></h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(history.value, (item) => {
          _push(`<button class="w-full text-left px-3 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors"><div class="font-medium text-foreground">${ssrInterpolate(item.domain)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(item.types.join(", "))} \u2022 ${ssrInterpolate(formatTime(item.time))}</div></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-6">`);
      if (dnsResults.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-semibold text-foreground flex items-center">`);
        _push(ssrRenderComponent(unref(Server), { class: "h-6 w-6 mr-2 text-primary" }, null, _parent));
        _push(` DNS\u8BB0\u5F55 - ${ssrInterpolate(domain.value)}</h3><div class="flex space-x-2"><button class="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors flex items-center text-sm">`);
        _push(ssrRenderComponent(unref(Download), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` \u5BFC\u51FA </button><button class="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors flex items-center text-sm">`);
        _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` \u590D\u5236 </button></div></div><div class="border-b border-border"><nav class="-mb-px flex space-x-8"><!--[-->`);
        ssrRenderList(Object.keys(groupedResults.value), (type, index) => {
          _push(`<button class="${ssrRenderClass([
            "py-2 px-1 border-b-2 font-medium text-sm",
            activeTab.value === type ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
          ])}">${ssrInterpolate(type.toUpperCase())} <span class="ml-2 bg-muted text-muted-foreground py-0.5 px-2 rounded-full text-xs">${ssrInterpolate(groupedResults.value[type].length)}</span></button>`);
        });
        _push(`<!--]--></nav></div><div class="mt-6"><!--[-->`);
        ssrRenderList(groupedResults.value[activeTab.value], (record) => {
          _push(`<div class="mb-4 p-4 bg-muted rounded-lg"><div class="flex items-start justify-between"><div class="flex-1"><div class="flex items-center space-x-4 mb-2"><span class="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium">${ssrInterpolate(record.type)}</span><span class="text-sm text-muted-foreground">TTL: ${ssrInterpolate(record.ttl)}</span>`);
          if (record.priority) {
            _push(`<span class="text-sm text-muted-foreground">\u4F18\u5148\u7EA7: ${ssrInterpolate(record.priority)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="font-mono text-sm text-foreground break-all">${ssrInterpolate(record.value)}</div></div><button class="ml-4 p-2 text-muted-foreground hover:text-foreground">`);
          _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4" }, null, _parent));
          _push(`</button></div>`);
          if (options.value.includeDetails && record.details) {
            _push(`<div class="mt-3 pt-3 border-t border-border"><div class="grid grid-cols-2 gap-2 text-sm"><div><span class="text-muted-foreground">\u67E5\u8BE2\u670D\u52A1\u5668:</span><span class="ml-2 text-foreground">${ssrInterpolate(record.server)}</span></div><div><span class="text-muted-foreground">\u54CD\u5E94\u65F6\u95F4:</span><span class="ml-2 text-foreground">${ssrInterpolate(record.responseTime)}ms</span></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
        if (options.value.traceRoute && traceRoute.value.length > 0) {
          _push(`<div class="mt-6 pt-6 border-t border-border"><h4 class="font-medium text-foreground mb-4 flex items-center">`);
          _push(ssrRenderComponent(unref(GitBranch), { class: "h-4 w-4 mr-2 text-primary" }, null, _parent));
          _push(` \u89E3\u6790\u8DEF\u5F84 </h4><div class="space-y-2"><!--[-->`);
          ssrRenderList(traceRoute.value, (step, index) => {
            _push(`<div class="flex items-center space-x-3 p-2 bg-muted rounded"><div class="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-medium">${ssrInterpolate(index + 1)}</div><div class="flex-1"><div class="text-sm font-medium text-foreground">${ssrInterpolate(step.server)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(step.ip)} \u2022 ${ssrInterpolate(step.time)}ms</div></div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(HelpCircle), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` DNS\u8BB0\u5F55\u7C7B\u578B\u8BF4\u660E </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(recordTypesInfo, (type) => {
        _push(`<div class="p-4 bg-muted rounded-lg"><h4 class="font-medium text-foreground mb-1">${ssrInterpolate(type.label)} (${ssrInterpolate(type.value)})</h4><p class="text-sm text-muted-foreground">${ssrInterpolate(type.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="p-6 mb-12 bg-card border border-border rounded-lg relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F DNS \u67E5\u8BE2\uFF1F </h2><p class="text-muted-foreground mb-4"> DNS (Domain Name System) \u662F\u4E92\u8054\u7F51\u7684\u7535\u8BDD\u7C3F\uFF0C\u5B83\u5C06\u6613\u4E8E\u8BB0\u5FC6\u7684\u57DF\u540D\u8F6C\u6362\u4E3A\u8BA1\u7B97\u673A\u4F7F\u7528\u7684 IP \u5730\u5740\u3002 \u5F53\u60A8\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165\u7F51\u5740\u65F6\uFF0CDNS \u670D\u52A1\u5668\u4F1A\u67E5\u627E\u5BF9\u5E94\u7684 IP \u5730\u5740\uFF0C\u7136\u540E\u5C06\u60A8\u8FDE\u63A5\u5230\u6B63\u786E\u7684\u7F51\u7AD9\u3002 DNS \u67E5\u8BE2\u5DE5\u5177\u53EF\u4EE5\u5E2E\u52A9\u60A8\u8BCA\u65AD\u57DF\u540D\u89E3\u6790\u95EE\u9898\uFF0C\u67E5\u770B\u57DF\u540D\u7684\u5404\u79CD DNS \u8BB0\u5F55\u3002 </p><p class="text-muted-foreground"> \u901A\u8FC7 DNS \u67E5\u8BE2\uFF0C\u60A8\u53EF\u4EE5\u83B7\u53D6\u57DF\u540D\u7684 A \u8BB0\u5F55\uFF08IPv4 \u5730\u5740\uFF09\u3001AAAA \u8BB0\u5F55\uFF08IPv6 \u5730\u5740\uFF09\u3001CNAME \u8BB0\u5F55\uFF08\u522B\u540D\uFF09\u3001 MX \u8BB0\u5F55\uFF08\u90AE\u4EF6\u670D\u52A1\u5668\uFF09\u3001TXT \u8BB0\u5F55\uFF08\u6587\u672C\u4FE1\u606F\uFF09\u7B49\u591A\u79CD\u7C7B\u578B\u7684 DNS \u8BB0\u5F55\u3002\u8FD9\u4E9B\u4FE1\u606F\u5BF9\u4E8E\u7F51\u7AD9\u7BA1\u7406\u5458\u3001 \u5F00\u53D1\u8005\u548C\u7F51\u7EDC\u6545\u969C\u6392\u67E5\u4EBA\u5458\u6765\u8BF4\u90FD\u975E\u5E38\u91CD\u8981\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528 DNS \u67E5\u8BE2\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u8981\u67E5\u8BE2\u7684\u57DF\u540D\uFF08\u5982 google.com\uFF09</li><li>\u9009\u62E9\u8981\u67E5\u8BE2\u7684 DNS \u8BB0\u5F55\u7C7B\u578B\uFF08\u53EF\u591A\u9009\uFF09</li><li>\u9009\u62E9\u4F7F\u7528\u7684 DNS \u670D\u52A1\u5668\uFF08\u9ED8\u8BA4\u4F7F\u7528\u7CFB\u7EDF DNS\uFF09</li><li>\u70B9\u51FB&quot;\u67E5\u8BE2DNS&quot;\u6309\u94AE\u6216\u6309\u56DE\u8F66\u952E\u5F00\u59CB\u67E5\u8BE2</li><li>\u67E5\u770B\u67E5\u8BE2\u7ED3\u679C\uFF0C\u5305\u62EC\u8BB0\u5F55\u503C\u3001TTL\u3001\u4F18\u5148\u7EA7\u7B49\u4FE1\u606F</li><li>\u53EF\u4EE5\u5BFC\u51FA\u6216\u590D\u5236\u67E5\u8BE2\u7ED3\u679C\uFF0C\u4FBF\u4E8E\u540E\u7EED\u5206\u6790</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> DNS \u8BB0\u5F55\u7C7B\u578B\u8BE6\u89E3 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>A \u8BB0\u5F55</strong>: \u5C06\u57DF\u540D\u6307\u5411 IPv4 \u5730\u5740\uFF0C\u662F\u6700\u5E38\u89C1\u7684\u8BB0\u5F55\u7C7B\u578B</li><li><strong>AAAA \u8BB0\u5F55</strong>: \u5C06\u57DF\u540D\u6307\u5411 IPv6 \u5730\u5740\uFF0C\u7528\u4E8E IPv6 \u7F51\u7EDC</li><li><strong>CNAME \u8BB0\u5F55</strong>: \u5C06\u57DF\u540D\u6307\u5411\u53E6\u4E00\u4E2A\u57DF\u540D\uFF08\u522B\u540D\u8BB0\u5F55\uFF09</li><li><strong>MX \u8BB0\u5F55</strong>: \u6307\u5B9A\u90AE\u4EF6\u670D\u52A1\u5668\uFF0C\u5305\u542B\u4F18\u5148\u7EA7\u8BBE\u7F6E</li><li><strong>TXT \u8BB0\u5F55</strong>: \u5B58\u50A8\u6587\u672C\u4FE1\u606F\uFF0C\u5E38\u7528\u4E8E\u57DF\u540D\u9A8C\u8BC1\u3001SPF \u8BB0\u5F55\u7B49</li><li><strong>NS \u8BB0\u5F55</strong>: \u6307\u5B9A\u57DF\u540D\u7684\u6743\u5A01 DNS \u670D\u52A1\u5668</li><li><strong>SOA \u8BB0\u5F55</strong>: \u8D77\u59CB\u6388\u6743\u673A\u6784\u8BB0\u5F55\uFF0C\u5305\u542B\u57DF\u540D\u7684\u7BA1\u7406\u4FE1\u606F</li><li><strong>PTR \u8BB0\u5F55</strong>: \u53CD\u5411 DNS \u89E3\u6790\uFF0C\u5C06 IP \u5730\u5740\u89E3\u6790\u4E3A\u57DF\u540D</li><li><strong>SRV \u8BB0\u5F55</strong>: \u670D\u52A1\u5B9A\u4F4D\u8BB0\u5F55\uFF0C\u6307\u5B9A\u670D\u52A1\u7684\u4F4D\u7F6E\u548C\u7AEF\u53E3</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">DNS \u67E5\u8BE2\u5931\u8D25\u7684\u53EF\u80FD\u539F\u56E0\u662F\u4EC0\u4E48\uFF1F</h3><p class="text-muted-foreground mt-1"> DNS \u67E5\u8BE2\u5931\u8D25\u53EF\u80FD\u7531\u591A\u79CD\u539F\u56E0\u5BFC\u81F4\uFF1A\u57DF\u540D\u4E0D\u5B58\u5728\u3001\u57DF\u540D\u672A\u6B63\u786E\u914D\u7F6E\u3001DNS \u670D\u52A1\u5668\u6545\u969C\u3001 \u7F51\u7EDC\u8FDE\u63A5\u95EE\u9898\u3001\u9632\u706B\u5899\u963B\u6B62 DNS \u67E5\u8BE2\u7B49\u3002\u5EFA\u8BAE\u4F7F\u7528\u4E0D\u540C\u7684 DNS \u670D\u52A1\u5668\u91CD\u8BD5\uFF0C \u6216\u4F7F\u7528 whois \u5DE5\u5177\u68C0\u67E5\u57DF\u540D\u7684\u6CE8\u518C\u72B6\u6001\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4EC0\u4E48\u662F TTL\uFF1F</h3><p class="text-muted-foreground mt-1"> TTL (Time To Live) \u662F DNS \u8BB0\u5F55\u7684\u751F\u5B58\u65F6\u95F4\uFF0C\u4EE5\u79D2\u4E3A\u5355\u4F4D\u3002\u5B83\u51B3\u5B9A\u4E86 DNS \u8BB0\u5F55\u5728 \u672C\u5730\u7F13\u5B58\u4E2D\u7684\u4FDD\u5B58\u65F6\u95F4\u3002\u8F83\u77ED\u7684 TTL \u53EF\u4EE5\u8BA9\u66F4\u6539\u66F4\u5FEB\u751F\u6548\uFF0C\u4F46\u4F1A\u589E\u52A0 DNS \u67E5\u8BE2\u7684\u8D1F\u8F7D\uFF1B \u8F83\u957F\u7684 TTL \u53EF\u4EE5\u51CF\u5C11\u67E5\u8BE2\u6B21\u6570\uFF0C\u4F46\u66F4\u6539\u751F\u6548\u4F1A\u8F83\u6162\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u8981\u9009\u62E9\u4E0D\u540C\u7684 DNS \u670D\u52A1\u5668\uFF1F</h3><p class="text-muted-foreground mt-1"> \u4E0D\u540C\u7684 DNS \u670D\u52A1\u5668\u53EF\u80FD\u8FD4\u56DE\u4E0D\u540C\u7684\u7ED3\u679C\uFF0C\u7279\u522B\u662F\u5728\u4F7F\u7528\u4E86 CDN \u6216\u5730\u7406\u8D1F\u8F7D\u5747\u8861\u7684\u60C5\u51B5\u4E0B\u3002 \u4F7F\u7528\u591A\u4E2A DNS \u670D\u52A1\u5668\u53EF\u4EE5\u5E2E\u52A9\u60A8\u9A8C\u8BC1 DNS \u914D\u7F6E\u7684\u6B63\u786E\u6027\uFF0C\u8BCA\u65AD DNS \u4F20\u64AD\u95EE\u9898\u3002 \u4E00\u4E9B DNS \u670D\u52A1\u5668\u8FD8\u63D0\u4F9B\u989D\u5916\u7684\u529F\u80FD\uFF0C\u5982\u6076\u610F\u7F51\u7AD9\u8FC7\u6EE4\u3001\u5BB6\u957F\u63A7\u5236\u7B49\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">DNS \u67E5\u8BE2\u548C Ping \u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h3><p class="text-muted-foreground mt-1"> DNS \u67E5\u8BE2\u662F\u83B7\u53D6\u57DF\u540D\u5BF9\u5E94\u7684 IP \u5730\u5740\uFF0C\u800C Ping \u662F\u6D4B\u8BD5\u4E0E\u76EE\u6807\u4E3B\u673A\u7684\u7F51\u7EDC\u8FDE\u63A5\u6027\u3002 DNS \u67E5\u8BE2\u53EA\u8FDB\u884C\u57DF\u540D\u89E3\u6790\uFF0C\u4E0D\u53D1\u9001\u6570\u636E\u5305\u5230\u76EE\u6807\u4E3B\u673A\uFF1BPing \u5219\u4F1A\u53D1\u9001 ICMP \u6570\u636E\u5305 \u6D4B\u8BD5\u7F51\u7EDC\u5EF6\u8FDF\u548C\u8FDE\u901A\u6027\u3002\u901A\u5E38\u5148\u8FDB\u884C DNS \u67E5\u8BE2\u83B7\u53D6 IP \u5730\u5740\uFF0C\u7136\u540E\u518D\u4F7F\u7528 Ping \u6D4B\u8BD5\u8FDE\u63A5\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/dns-lookup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dns-lookup-C9xPN77E.mjs.map
