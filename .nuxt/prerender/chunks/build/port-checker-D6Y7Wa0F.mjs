import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
import { Radar, Loader2, Search, Activity, History, BarChart, List, ShieldCheck, AlertCircle, HelpCircle, ChevronUp, Terminal, Shield, Timer, Hash, Link, Database, Code, FileText, Lock, Server, Globe, Wifi } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { t as tools } from './tools-CG9LGULA.mjs';
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
  __name: "port-checker",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\u7AEF\u53E3\u626B\u63CF\u5668 - \u5728\u7EBF\u7AEF\u53E3\u72B6\u6001\u68C0\u6D4B\u5DE5\u5177",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBF\u7AEF\u53E3\u626B\u63CF\u5DE5\u5177\uFF0C\u68C0\u6D4B\u6307\u5B9A\u4E3B\u673A\u7684\u7AEF\u53E3\u5F00\u653E\u72B6\u6001\uFF0C\u652F\u6301\u5E38\u89C1\u7AEF\u53E3\u548C\u81EA\u5B9A\u4E49\u7AEF\u53E3\u8303\u56F4\u626B\u63CF\u3002\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u5B89\u5168\u3002" },
        { name: "keywords", content: "\u7AEF\u53E3\u626B\u63CF,\u7AEF\u53E3\u68C0\u6D4B,\u7F51\u7EDC\u626B\u63CF,\u5F00\u653E\u7AEF\u53E3,\u7AEF\u53E3\u72B6\u6001,\u7F51\u7EDC\u5B89\u5168,\u5728\u7EBF\u626B\u63CF\u5DE5\u5177" }
      ]
    });
    const iconMap = {
      Wifi,
      Globe,
      Server,
      Lock,
      FileText,
      Code,
      Database,
      Link,
      Hash,
      Timer,
      Shield,
      Terminal
    };
    const tool = tools.find((t) => t.id === "port-checker");
    if (tool) {
      addRecentTool(tool.id);
    }
    const targetHost = ref("");
    const scanType = ref("common");
    const customPorts = ref("");
    const startPort = ref(1);
    const endPort = ref(100);
    const timeout = ref(3);
    const scanning = ref(false);
    const error = ref("");
    const scanResult = ref([]);
    const scanProgress = ref(0);
    const scannedPorts = ref(0);
    const totalPorts = ref(0);
    const currentPort = ref(0);
    const openPorts = ref(0);
    const filterStatus = ref("all");
    const scanHistory = ref([]);
    const isSeoContentVisible = ref(true);
    const totalScanned = computed(() => scanResult.value.length);
    const filteredResults = computed(() => {
      if (filterStatus.value === "all") {
        return scanResult.value;
      }
      return scanResult.value.filter((p) => p.status === filterStatus.value);
    });
    const openPortsList = computed(() => {
      return scanResult.value.filter((p) => p.status === "open");
    });
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "port-checker"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "dns-lookup"),
        tools.find((t) => t.id === "ip-info"),
        tools.find((t) => t.id === "ssl-checker"),
        tools.find((t) => t.id === "ping-tool")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">\u7AEF\u53E3\u626B\u63CF\u5668 - \u5728\u7EBF\u7AEF\u53E3\u72B6\u6001\u68C0\u6D4B\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF\u7AEF\u53E3\u626B\u63CF\u5DE5\u5177\u3002\u5FEB\u901F\u68C0\u6D4B\u6307\u5B9A\u4E3B\u673A\u6216IP\u5730\u5740\u7684\u7AEF\u53E3\u5F00\u653E\u72B6\u6001\uFF0C\u652F\u6301\u5E38\u89C1\u7AEF\u53E3\u626B\u63CF\u548C\u81EA\u5B9A\u4E49\u7AEF\u53E3\u8303\u56F4\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u5B89\u5168\u53EF\u9760\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Radar), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u626B\u63CF\u914D\u7F6E </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u76EE\u6807\u4E3B\u673A</label><input${ssrRenderAttr("value", targetHost.value)} type="text" placeholder="example.com \u6216 192.168.1.1" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}></div><div><label class="block text-sm font-medium text-foreground mb-2">\u626B\u63CF\u7C7B\u578B</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}><option value="common"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "common") : ssrLooseEqual(scanType.value, "common")) ? " selected" : ""}>\u5E38\u89C1\u7AEF\u53E3</option><option value="web"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "web") : ssrLooseEqual(scanType.value, "web")) ? " selected" : ""}>Web \u670D\u52A1\u7AEF\u53E3</option><option value="mail"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "mail") : ssrLooseEqual(scanType.value, "mail")) ? " selected" : ""}>\u90AE\u4EF6\u670D\u52A1\u7AEF\u53E3</option><option value="ftp"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "ftp") : ssrLooseEqual(scanType.value, "ftp")) ? " selected" : ""}>FTP \u670D\u52A1\u7AEF\u53E3</option><option value="database"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "database") : ssrLooseEqual(scanType.value, "database")) ? " selected" : ""}>\u6570\u636E\u5E93\u7AEF\u53E3</option><option value="custom"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "custom") : ssrLooseEqual(scanType.value, "custom")) ? " selected" : ""}>\u81EA\u5B9A\u4E49\u7AEF\u53E3</option><option value="range"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "range") : ssrLooseEqual(scanType.value, "range")) ? " selected" : ""}>\u7AEF\u53E3\u8303\u56F4</option></select></div>`);
      if (scanType.value === "custom") {
        _push(`<div class="space-y-2"><label class="block text-sm font-medium text-foreground">\u81EA\u5B9A\u4E49\u7AEF\u53E3</label><input${ssrRenderAttr("value", customPorts.value)} type="text" placeholder="80,443,8080" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}><p class="text-xs text-muted-foreground">\u591A\u4E2A\u7AEF\u53E3\u7528\u9017\u53F7\u5206\u9694</p></div>`);
      } else if (scanType.value === "range") {
        _push(`<div class="space-y-2"><label class="block text-sm font-medium text-foreground">\u7AEF\u53E3\u8303\u56F4</label><div class="flex space-x-2"><input${ssrRenderAttr("value", startPort.value)} type="number" min="1" max="65535" placeholder="\u8D77\u59CB\u7AEF\u53E3" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}><input${ssrRenderAttr("value", endPort.value)} type="number" min="1" max="65535" placeholder="\u7ED3\u675F\u7AEF\u53E3" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="block text-sm font-medium text-foreground mb-2">\u8D85\u65F6\u65F6\u95F4 (\u79D2)</label><input${ssrRenderAttr("value", timeout.value)} type="number" min="1" max="10" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}></div><div><label class="block text-sm font-medium text-foreground mb-2">\u5FEB\u901F\u793A\u4F8B</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}><option value="">\u9009\u62E9\u793A\u4F8B...</option><option value="google">google.com</option><option value="github">github.com</option><option value="local">\u672C\u5730\u4E3B\u673A</option></select></div><button${ssrIncludeBooleanAttr(!targetHost.value || scanning.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (scanning.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(scanning.value ? "\u626B\u63CF\u4E2D..." : "\u5F00\u59CB\u626B\u63CF")}</button></div></div>`);
      if (scanning.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
        _push(ssrRenderComponent(unref(Activity), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u626B\u63CF\u8FDB\u5EA6 </h2><div class="space-y-4"><div><div class="flex justify-between text-sm mb-1"><span class="text-foreground">\u8FDB\u5EA6</span><span class="text-foreground">${ssrInterpolate(scanProgress.value)}%</span></div><div class="w-full bg-muted rounded-full h-2"><div class="bg-primary h-2 rounded-full transition-all duration-300" style="${ssrRenderStyle({ width: scanProgress.value + "%" })}"></div></div></div><div class="text-sm text-muted-foreground"><p>\u5DF2\u626B\u63CF: ${ssrInterpolate(scannedPorts.value)} / ${ssrInterpolate(totalPorts.value)}</p><p>\u5F00\u653E\u7AEF\u53E3: ${ssrInterpolate(openPorts.value)}</p><p>\u5F53\u524D\u7AEF\u53E3: ${ssrInterpolate(currentPort.value || "-")}</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (scanHistory.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold text-foreground mb-4 flex items-center justify-between"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u626B\u63CF\u5386\u53F2 </span><button class="text-sm text-destructive hover:text-destructive/90"> \u6E05\u9664 </button></h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(scanHistory.value, (item, index) => {
          _push(`<button class="w-full text-left px-3 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors"><div class="flex items-center justify-between"><span class="text-sm font-medium text-foreground">${ssrInterpolate(item.host)}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(formatTime(item.time))}</span></div><div class="text-xs text-muted-foreground"> \u7AEF\u53E3: ${ssrInterpolate(item.type)} | \u5F00\u653E: ${ssrInterpolate(item.openCount)}</div></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-6">`);
      if (scanResult.value && scanResult.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
        _push(ssrRenderComponent(unref(BarChart), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u626B\u63CF\u7ED3\u679C\u7EDF\u8BA1 </h3><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><div class="p-4 bg-muted rounded-lg text-center"><div class="text-2xl font-bold text-foreground">${ssrInterpolate(totalScanned.value)}</div><div class="text-sm text-muted-foreground">\u5DF2\u626B\u63CF</div></div><div class="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg text-center"><div class="text-2xl font-bold text-green-600 dark:text-green-400">${ssrInterpolate(scanResult.value.filter((p) => p.status === "open").length)}</div><div class="text-sm text-muted-foreground">\u5F00\u653E</div></div><div class="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg text-center"><div class="text-2xl font-bold text-red-600 dark:text-red-400">${ssrInterpolate(scanResult.value.filter((p) => p.status === "closed").length)}</div><div class="text-sm text-muted-foreground">\u5173\u95ED</div></div><div class="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg text-center"><div class="text-2xl font-bold text-yellow-600 dark:text-yellow-400">${ssrInterpolate(scanResult.value.filter((p) => p.status === "filtered").length)}</div><div class="text-sm text-muted-foreground">\u8FC7\u6EE4</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border border-border rounded-lg"><div class="p-6 border-b border-border"><div class="flex items-center justify-between"><h3 class="text-lg font-semibold text-foreground flex items-center">`);
      _push(ssrRenderComponent(unref(List), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u7AEF\u53E3\u5217\u8868 </h3><div class="flex items-center space-x-2"><select class="px-3 py-1 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="all"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "all") : ssrLooseEqual(filterStatus.value, "all")) ? " selected" : ""}>\u5168\u90E8</option><option value="open"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "open") : ssrLooseEqual(filterStatus.value, "open")) ? " selected" : ""}>\u4EC5\u5F00\u653E</option><option value="closed"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "closed") : ssrLooseEqual(filterStatus.value, "closed")) ? " selected" : ""}>\u4EC5\u5173\u95ED</option><option value="filtered"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "filtered") : ssrLooseEqual(filterStatus.value, "filtered")) ? " selected" : ""}>\u4EC5\u8FC7\u6EE4</option></select><button class="px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors"> \u5BFC\u51FA </button></div></div></div><div class="overflow-x-auto"><table class="min-w-full divide-y divide-border"><thead class="bg-muted/50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">\u7AEF\u53E3</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">\u72B6\u6001</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">\u670D\u52A1</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">\u54CD\u5E94\u65F6\u95F4</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">\u63CF\u8FF0</th></tr></thead><tbody class="divide-y divide-border"><!--[-->`);
      ssrRenderList(filteredResults.value, (port) => {
        _push(`<tr class="hover:bg-muted/20"><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">${ssrInterpolate(port.number)}</td><td class="px-6 py-4 whitespace-nowrap"><span class="${ssrRenderClass([
          "px-2 py-1 text-xs rounded-full font-medium",
          port.status === "open" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : port.status === "closed" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
        ])}">${ssrInterpolate(port.status === "open" ? "\u5F00\u653E" : port.status === "closed" ? "\u5173\u95ED" : "\u8FC7\u6EE4")}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">${ssrInterpolate(port.service || "-")}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">${ssrInterpolate(port.responseTime || "-")}ms </td><td class="px-6 py-4 text-sm text-muted-foreground">${ssrInterpolate(port.description || "-")}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
      if (openPortsList.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
        _push(ssrRenderComponent(unref(ShieldCheck), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u5F00\u653E\u7AEF\u53E3\u8BE6\u60C5 </h3><div class="space-y-4"><!--[-->`);
        ssrRenderList(openPortsList.value, (port) => {
          _push(`<div class="p-4 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/20"><div class="flex items-center justify-between mb-2"><span class="font-medium text-foreground">\u7AEF\u53E3 ${ssrInterpolate(port.number)}</span><span class="text-sm text-muted-foreground">${ssrInterpolate(port.service)}</span></div><p class="text-sm text-muted-foreground">${ssrInterpolate(port.description)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-destructive">`);
        _push(ssrRenderComponent(unref(AlertCircle), { class: "h-5 w-5 mr-2" }, null, _parent));
        _push(` \u626B\u63CF\u5931\u8D25 </h3><div class="bg-destructive/10 dark:bg-destructive/20 border border-destructive/20 rounded-lg p-4"><p class="text-destructive">${ssrInterpolate(error.value)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 bg-card border border-border rounded-lg relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F\u7AEF\u53E3\u626B\u63CF\uFF1F </h2><p class="text-muted-foreground mb-4"> \u7AEF\u53E3\u626B\u63CF\u662F\u4E00\u79CD\u7F51\u7EDC\u5B89\u5168\u6280\u672F\uFF0C\u7528\u4E8E\u68C0\u67E5\u76EE\u6807\u4E3B\u673A\u4E0A\u54EA\u4E9B\u7AEF\u53E3\u662F\u5F00\u653E\u7684\u3001\u5173\u95ED\u7684\u6216\u88AB\u9632\u706B\u5899\u8FC7\u6EE4\u7684\u3002 \u6BCF\u4E2A\u7AEF\u53E3\u53F7\u5BF9\u5E94\u4E00\u79CD\u7279\u5B9A\u7684\u7F51\u7EDC\u670D\u52A1\uFF0C\u4F8B\u5982\u7AEF\u53E380\u7528\u4E8EHTTP\uFF08\u7F51\u9875\u670D\u52A1\uFF09\uFF0C\u7AEF\u53E3443\u7528\u4E8EHTTPS\uFF08\u5B89\u5168\u7F51\u9875\u670D\u52A1\uFF09\uFF0C \u7AEF\u53E322\u7528\u4E8ESSH\uFF08\u8FDC\u7A0B\u767B\u5F55\uFF09\u7B49\u3002\u901A\u8FC7\u7AEF\u53E3\u626B\u63CF\uFF0C\u7CFB\u7EDF\u7BA1\u7406\u5458\u53EF\u4EE5\u4E86\u89E3\u7F51\u7EDC\u670D\u52A1\u7684\u8FD0\u884C\u72B6\u6001\uFF0C\u5B89\u5168\u4E13\u5BB6\u53EF\u4EE5\u53D1\u73B0\u6F5C\u5728\u7684\u5B89\u5168\u98CE\u9669\u3002 </p><p class="text-muted-foreground"> \u672C\u5DE5\u5177\u63D0\u4F9B\u5728\u7EBF\u7AEF\u53E3\u626B\u63CF\u529F\u80FD\uFF0C\u65E0\u9700\u5B89\u88C5\u4EFB\u4F55\u8F6F\u4EF6\uFF0C\u53EA\u9700\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165\u76EE\u6807\u4E3B\u673A\u5730\u5740\u5373\u53EF\u5FEB\u901F\u68C0\u6D4B\u7AEF\u53E3\u72B6\u6001\u3002 \u626B\u63CF\u7ED3\u679C\u4F1A\u663E\u793A\u6BCF\u4E2A\u7AEF\u53E3\u7684\u5F00\u653E\u72B6\u6001\u3001\u670D\u52A1\u7C7B\u578B\u548C\u54CD\u5E94\u65F6\u95F4\uFF0C\u5E2E\u52A9\u60A8\u5168\u9762\u4E86\u89E3\u76EE\u6807\u4E3B\u673A\u7684\u7F51\u7EDC\u670D\u52A1\u60C5\u51B5\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u7AEF\u53E3\u626B\u63CF\u5668 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5728\u76EE\u6807\u4E3B\u673A\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u57DF\u540D\u6216IP\u5730\u5740\uFF08\u5982 google.com \u6216 192.168.1.1\uFF09</li><li>\u9009\u62E9\u626B\u63CF\u7C7B\u578B\uFF1A\u5E38\u89C1\u7AEF\u53E3\u3001Web\u670D\u52A1\u3001\u90AE\u4EF6\u670D\u52A1\u3001\u6570\u636E\u5E93\u6216\u81EA\u5B9A\u4E49\u7AEF\u53E3</li><li>\u5982\u679C\u9009\u62E9\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u8F93\u5165\u7279\u5B9A\u7684\u7AEF\u53E3\u53F7\u6216\u7AEF\u53E3\u8303\u56F4</li><li>\u70B9\u51FB&quot;\u5F00\u59CB\u626B\u63CF&quot;\u6309\u94AE\uFF0C\u7B49\u5F85\u626B\u63CF\u5B8C\u6210</li><li>\u67E5\u770B\u626B\u63CF\u7ED3\u679C\uFF0C\u4E86\u89E3\u5404\u7AEF\u53E3\u7684\u72B6\u6001\u548C\u670D\u52A1\u4FE1\u606F</li><li>\u53EF\u4EE5\u5BFC\u51FA\u626B\u63CF\u7ED3\u679C\u4E3ACSV\u683C\u5F0F\uFF0C\u4FBF\u4E8E\u4FDD\u5B58\u548C\u5206\u6790</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u7AEF\u53E3\u72B6\u6001\u8BF4\u660E </h2><div class="space-y-3 text-muted-foreground mb-6"><div class="flex items-start"><div class="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></div><div><strong class="text-foreground">\u5F00\u653E (Open)</strong>\uFF1A\u8868\u793A\u7AEF\u53E3\u6B63\u5728\u76D1\u542C\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u5EFA\u7ACB\u901A\u4FE1\u3002\u8FD9\u901A\u5E38\u610F\u5473\u7740\u6709\u76F8\u5E94\u7684\u670D\u52A1\u5728\u8BE5\u7AEF\u53E3\u4E0A\u8FD0\u884C\u3002 </div></div><div class="flex items-start"><div class="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3"></div><div><strong class="text-foreground">\u5173\u95ED (Closed)</strong>\uFF1A\u8868\u793A\u7AEF\u53E3\u867D\u7136\u53EF\u8FBE\uFF0C\u4F46\u6CA1\u6709\u7A0B\u5E8F\u5728\u76D1\u542C\u3002\u4E3B\u673A\u54CD\u5E94\u4E86\u626B\u63CF\u8BF7\u6C42\uFF0C\u4F46\u660E\u786E\u8868\u793A\u4E0D\u63A5\u53D7\u8FDE\u63A5\u3002 </div></div><div class="flex items-start"><div class="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3"></div><div><strong class="text-foreground">\u8FC7\u6EE4 (Filtered)</strong>\uFF1A\u8868\u793A\u65E0\u6CD5\u786E\u5B9A\u7AEF\u53E3\u72B6\u6001\uFF0C\u53EF\u80FD\u88AB\u9632\u706B\u5899\u6216\u5176\u4ED6\u7F51\u7EDC\u8BBE\u5907\u963B\u6B62\u3002\u626B\u63CF\u8BF7\u6C42\u6CA1\u6709\u5F97\u5230\u54CD\u5E94\u3002 </div></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u7AEF\u53E3\u53F7 </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"><div class="bg-muted p-4 rounded-lg"><h3 class="font-semibold text-foreground mb-2">Web\u670D\u52A1</h3><ul class="text-sm text-muted-foreground space-y-1"><li>20/21 - FTP (\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE)</li><li>22 - SSH (\u5B89\u5168\u5916\u58F3\u534F\u8BAE)</li><li>23 - Telnet (\u8FDC\u7A0B\u7EC8\u7AEF)</li><li>25 - SMTP (\u90AE\u4EF6\u4F20\u8F93)</li><li>53 - DNS (\u57DF\u540D\u7CFB\u7EDF)</li><li>80 - HTTP (\u7F51\u9875\u670D\u52A1)</li><li>110 - POP3 (\u90AE\u5C40\u534F\u8BAE)</li><li>143 - IMAP (\u6D88\u606F\u8BBF\u95EE\u534F\u8BAE)</li><li>443 - HTTPS (\u5B89\u5168\u7F51\u9875\u670D\u52A1)</li><li>993 - IMAPS (\u5B89\u5168IMAP)</li><li>995 - POP3S (\u5B89\u5168POP3)</li></ul></div><div class="bg-muted p-4 rounded-lg"><h3 class="font-semibold text-foreground mb-2">\u6570\u636E\u5E93\u670D\u52A1</h3><ul class="text-sm text-muted-foreground space-y-1"><li>3306 - MySQL/MariaDB</li><li>5432 - PostgreSQL</li><li>1433 - Microsoft SQL Server</li><li>1521 - Oracle Database</li><li>27017 - MongoDB</li><li>6379 - Redis</li><li>11211 - Memcached</li></ul></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5B89\u5168\u63D0\u793A </h2><div class="bg-muted p-4 rounded-lg mb-6"><ul class="list-disc list-inside text-muted-foreground space-y-2"><li>\u4EC5\u626B\u63CF\u60A8\u62E5\u6709\u6216\u83B7\u5F97\u6388\u6743\u7684\u4E3B\u673A\uFF0C\u672A\u7ECF\u6388\u6743\u7684\u7AEF\u53E3\u626B\u63CF\u53EF\u80FD\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4</li><li>\u5F00\u653E\u7AEF\u53E3\u53EF\u80FD\u5B58\u5728\u5B89\u5168\u98CE\u9669\uFF0C\u5EFA\u8BAE\u5B9A\u671F\u68C0\u67E5\u5E76\u5173\u95ED\u4E0D\u5FC5\u8981\u7684\u670D\u52A1\u7AEF\u53E3</li><li>\u4F7F\u7528\u9632\u706B\u5899\u9650\u5236\u5BF9\u654F\u611F\u7AEF\u53E3\u7684\u8BBF\u95EE\uFF0C\u4EC5\u5141\u8BB8\u5FC5\u8981\u7684IP\u5730\u5740\u8FDE\u63A5</li><li>\u4FDD\u6301\u7CFB\u7EDF\u548C\u670D\u52A1\u7684\u6700\u65B0\u7248\u672C\uFF0C\u53CA\u65F6\u4FEE\u590D\u5DF2\u77E5\u7684\u5B89\u5168\u6F0F\u6D1E</li><li>\u4E3A\u91CD\u8981\u670D\u52A1\u4F7F\u7528\u5F3A\u5BC6\u7801\u548C\u53CC\u56E0\u7D20\u8BA4\u8BC1</li></ul></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u7AEF\u53E3\u626B\u63CF\u5408\u6CD5\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u7AEF\u53E3\u626B\u63CF\u7684\u5408\u6CD5\u6027\u53D6\u51B3\u4E8E\u626B\u63CF\u7684\u76EE\u6807\u548C\u76EE\u7684\u3002\u626B\u63CF\u81EA\u5DF1\u62E5\u6709\u7684\u670D\u52A1\u5668\u6216\u83B7\u5F97\u660E\u786E\u6388\u6743\u7684\u7F51\u7EDC\u662F\u5B8C\u5168\u5408\u6CD5\u7684\u3002 \u7136\u800C\uFF0C\u626B\u63CF\u672A\u7ECF\u6388\u6743\u7684\u7B2C\u4E09\u65B9\u7F51\u7EDC\u53EF\u80FD\u88AB\u89C6\u4E3A\u975E\u6CD5\u5165\u4FB5\u884C\u4E3A\u3002\u5728\u4F7F\u7528\u672C\u5DE5\u5177\u524D\uFF0C\u8BF7\u786E\u4FDD\u60A8\u6709\u6743\u626B\u63CF\u76EE\u6807\u4E3B\u673A\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u67D0\u4E9B\u7AEF\u53E3\u663E\u793A\u4E3A&quot;\u8FC7\u6EE4&quot;\u72B6\u6001\uFF1F</h3><p class="text-muted-foreground mt-1"> &quot;\u8FC7\u6EE4&quot;\u72B6\u6001\u8868\u793A\u626B\u63CF\u8BF7\u6C42\u88AB\u9632\u706B\u5899\u3001\u8DEF\u7531\u5668\u6216\u5176\u4ED6\u7F51\u7EDC\u5B89\u5168\u8BBE\u5907\u963B\u6B62\uFF0C\u65E0\u6CD5\u786E\u5B9A\u7AEF\u53E3\u662F\u5426\u5F00\u653E\u3002 \u8FD9\u53EF\u80FD\u662F\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u7BA1\u7406\u5458\u914D\u7F6E\u4E86\u9632\u706B\u5899\u89C4\u5219\u6765\u9690\u85CF\u67D0\u4E9B\u7AEF\u53E3\u7684\u72B6\u6001\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u626B\u63CF\u901F\u5EA6\u53EF\u4EE5\u8C03\u6574\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u672C\u5DE5\u5177\u4E3A\u4E86\u786E\u4FDD\u626B\u63CF\u7684\u51C6\u786E\u6027\u548C\u907F\u514D\u5BF9\u76EE\u6807\u4E3B\u673A\u9020\u6210\u8FC7\u5927\u8D1F\u8F7D\uFF0C\u4F7F\u7528\u4E86\u9002\u4E2D\u7684\u626B\u63CF\u901F\u5EA6\u3002 \u8FC7\u5FEB\u7684\u626B\u63CF\u53EF\u80FD\u5BFC\u81F4\u8BF7\u6C42\u88AB\u76EE\u6807\u4E3B\u673A\u62D2\u7EDD\u6216\u88AB\u9632\u706B\u5899\u8BC6\u522B\u4E3A\u653B\u51FB\u884C\u4E3A\u3002\u6211\u4EEC\u63D0\u4F9B\u4E86\u8D85\u65F6\u65F6\u95F4\u8BBE\u7F6E\uFF0C \u60A8\u53EF\u4EE5\u6839\u636E\u7F51\u7EDC\u73AF\u5883\u9002\u5F53\u8C03\u6574\uFF0C\u4F46\u5EFA\u8BAE\u4F7F\u7528\u9ED8\u8BA4\u503C\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u67D0\u4E9B\u5F00\u653E\u7684\u7AEF\u53E3\u6CA1\u6709\u663E\u793A\u670D\u52A1\u4FE1\u606F\uFF1F</h3><p class="text-muted-foreground mt-1"> \u672C\u5DE5\u5177\u7EF4\u62A4\u4E86\u4E00\u4E2A\u5E38\u89C1\u7AEF\u53E3\u53F7\u4E0E\u670D\u52A1\u7C7B\u578B\u7684\u5BF9\u5E94\u5173\u7CFB\u6570\u636E\u5E93\u3002\u5982\u679C\u67D0\u4E2A\u7AEF\u53E3\u4E0D\u5728\u6211\u4EEC\u7684\u6570\u636E\u5E93\u4E2D\uFF0C \u5C31\u4E0D\u4F1A\u663E\u793A\u670D\u52A1\u4FE1\u606F\u3002\u8FD9\u5E76\u4E0D\u8868\u793A\u8BE5\u7AEF\u53E3\u6CA1\u6709\u670D\u52A1\uFF0C\u53EA\u662F\u6211\u4EEC\u65E0\u6CD5\u81EA\u52A8\u8BC6\u522B\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u7AEF\u53E3\u53F7 \u5728\u4E92\u8054\u7F51\u4E0A\u67E5\u8BE2\u76F8\u5173\u4FE1\u606F\uFF0C\u6216\u4F7F\u7528\u4E13\u4E1A\u7684\u7F51\u7EDC\u626B\u63CF\u5DE5\u5177\u8FDB\u884C\u66F4\u6DF1\u5165\u7684\u63A2\u6D4B\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/port-checker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=port-checker-D6Y7Wa0F.mjs.map
