import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, resolveComponent, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { HelpCircle, ChevronUp, XCircle, CheckCircle, AlertCircle, Calendar, Phone, Mail, MapPin, Link2, Globe2, Clock, Lock, Shield, Wifi, Layers, FileText, Server, User, Building, Info, Copy, Download, History, List, Search, Globe } from 'lucide-vue-next';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
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

const _sfc_main = {
  __name: "whois-lookup",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "WHOIS\u67E5\u8BE2 - \u5728\u7EBF\u57DF\u540DWHOIS\u4FE1\u606F\u67E5\u8BE2\u5DE5\u5177",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBFWHOIS\u67E5\u8BE2\u5DE5\u5177\uFF0C\u67E5\u8BE2\u57DF\u540D\u7684\u6CE8\u518C\u4FE1\u606F\u3001\u6CE8\u518C\u5546\u3001DNS\u670D\u52A1\u5668\u3001\u5230\u671F\u65F6\u95F4\u7B49\u8BE6\u7EC6\u4FE1\u606F\u3002\u652F\u6301\u6279\u91CF\u67E5\u8BE2\uFF0C\u6570\u636E\u672C\u5730\u5904\u7406\uFF0C\u5B89\u5168\u53EF\u9760\u3002" },
        { name: "keywords", content: "WHOIS,\u57DF\u540D\u67E5\u8BE2,\u57DF\u540D\u4FE1\u606F,\u6CE8\u518C\u5546,DNS,\u57DF\u540D\u5230\u671F,\u6279\u91CF\u67E5\u8BE2,\u57DF\u540DWHOIS" }
      ]
    });
    useRouter();
    tools.find((t) => t.id === "whois-lookup");
    categories.find((c) => c.id === "network");
    const domain = ref("");
    const tld = ref("");
    const loading = ref(false);
    const whoisData = ref(null);
    const batchDomains = ref("");
    const batchLoading = ref(false);
    const batchResults = ref([]);
    const history = ref([]);
    const options = ref({
      includeRaw: false,
      includeHistory: false
    });
    const domainPresets = [
      { domain: "google.com" },
      { domain: "github.com" },
      { domain: "stackoverflow.com" },
      { domain: "wikipedia.org" }
    ];
    const isSeoContentVisible = ref(true);
    const iconMap = {
      Globe,
      Search,
      List,
      History,
      Download,
      Copy,
      Info,
      Building,
      User,
      Server,
      FileText,
      Layers,
      HelpCircle,
      Wifi,
      Shield,
      Lock,
      Clock,
      Globe2,
      Link2,
      MapPin,
      Mail,
      Phone,
      Calendar,
      AlertCircle,
      CheckCircle,
      XCircle
    };
    const relatedTools = [
      {
        id: "dns-lookup",
        name: "DNS\u67E5\u8BE2",
        description: "\u67E5\u8BE2\u57DF\u540D\u7684DNS\u8BB0\u5F55\uFF0C\u5305\u62ECA\u3001MX\u3001NS\u3001CNAME\u7B49\u8BB0\u5F55\u7C7B\u578B",
        icon: "Wifi"
      },
      {
        id: "ip-info",
        name: "IP\u5730\u5740\u67E5\u8BE2",
        description: "\u67E5\u8BE2IP\u5730\u5740\u7684\u5730\u7406\u4F4D\u7F6E\u3001\u8FD0\u8425\u5546\u3001\u7F51\u7EDC\u7C7B\u578B\u7B49\u4FE1\u606F",
        icon: "Globe2"
      },
      {
        id: "ssl-checker",
        name: "SSL\u8BC1\u4E66\u67E5\u8BE2",
        description: "\u68C0\u67E5\u7F51\u7AD9\u7684SSL\u8BC1\u4E66\u72B6\u6001\u3001\u6709\u6548\u671F\u3001\u9881\u53D1\u673A\u6784\u7B49\u4FE1\u606F",
        icon: "Shield"
      },
      {
        id: "port-checker",
        name: "\u7AEF\u53E3\u626B\u63CF",
        description: "\u626B\u63CF\u6307\u5B9A\u4E3B\u673A\u7684\u7AEF\u53E3\u5F00\u653E\u72B6\u6001\uFF0C\u652F\u6301\u5E38\u89C1\u7AEF\u53E3\u548C\u81EA\u5B9A\u4E49\u7AEF\u53E3",
        icon: "Link2"
      }
    ];
    const getStatusClass = (status) => {
      switch (status) {
        case "\u5DF2\u6CE8\u518C":
          return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
        case "\u53EF\u6CE8\u518C":
          return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
        case "\u67E5\u8BE2\u5931\u8D25":
          return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
        default:
          return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
      }
    };
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
      const _component_Icon = resolveComponent("Icon");
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">WHOIS\u67E5\u8BE2 - \u5728\u7EBF\u57DF\u540DWHOIS\u4FE1\u606F\u67E5\u8BE2\u5DE5\u5177</h1><p class="text-muted-foreground">\u514D\u8D39\u5728\u7EBFWHOIS\u67E5\u8BE2\u5DE5\u5177\uFF0C\u67E5\u8BE2\u57DF\u540D\u7684\u6CE8\u518C\u4FE1\u606F\u3001\u6CE8\u518C\u5546\u3001DNS\u670D\u52A1\u5668\u3001\u5230\u671F\u65F6\u95F4\u7B49\u8BE6\u7EC6\u4FE1\u606F\u3002\u652F\u6301\u6279\u91CF\u67E5\u8BE2\uFF0C\u6570\u636E\u672C\u5730\u5904\u7406\uFF0C\u5B89\u5168\u53EF\u9760\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="lg:col-span-1 space-y-6"><div class="bg-card p-6 rounded-lg border border-border"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:search",
        class: "h-5 w-5 mr-2 text-primary"
      }, null, _parent));
      _push(` \u57DF\u540D\u67E5\u8BE2 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u8F93\u5165\u57DF\u540D</label><div class="flex space-x-2"><input${ssrRenderAttr("value", domain.value)} type="text" placeholder="\u4F8B\u5982: google.com" class="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><select class="px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value=""${ssrIncludeBooleanAttr(Array.isArray(tld.value) ? ssrLooseContain(tld.value, "") : ssrLooseEqual(tld.value, "")) ? " selected" : ""}>.com</option><option value=".cn"${ssrIncludeBooleanAttr(Array.isArray(tld.value) ? ssrLooseContain(tld.value, ".cn") : ssrLooseEqual(tld.value, ".cn")) ? " selected" : ""}>.cn</option><option value=".net"${ssrIncludeBooleanAttr(Array.isArray(tld.value) ? ssrLooseContain(tld.value, ".net") : ssrLooseEqual(tld.value, ".net")) ? " selected" : ""}>.net</option><option value=".org"${ssrIncludeBooleanAttr(Array.isArray(tld.value) ? ssrLooseContain(tld.value, ".org") : ssrLooseEqual(tld.value, ".org")) ? " selected" : ""}>.org</option><option value=".io"${ssrIncludeBooleanAttr(Array.isArray(tld.value) ? ssrLooseContain(tld.value, ".io") : ssrLooseEqual(tld.value, ".io")) ? " selected" : ""}>.io</option><option value=".ai"${ssrIncludeBooleanAttr(Array.isArray(tld.value) ? ssrLooseContain(tld.value, ".ai") : ssrLooseEqual(tld.value, ".ai")) ? " selected" : ""}>.ai</option></select></div><p class="mt-1 text-xs text-muted-foreground"> \u8F93\u5165\u57DF\u540D\uFF0C\u53EF\u7701\u7565\u9876\u7EA7\u57DF\u540D </p></div><div><label class="block text-sm font-medium text-foreground mb-2">\u70ED\u95E8\u57DF\u540D</label><div class="grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(domainPresets, (preset) => {
        _push(`<button class="px-3 py-2 text-sm bg-muted hover:bg-muted/80 text-muted-foreground rounded-md transition-colors">${ssrInterpolate(preset.domain)}</button>`);
      });
      _push(`<!--]--></div></div><div><label class="block text-sm font-medium text-foreground mb-2">\u67E5\u8BE2\u9009\u9879</label><div class="space-y-2"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.includeRaw) ? ssrLooseContain(options.value.includeRaw, null) : options.value.includeRaw) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-muted-foreground">\u663E\u793A\u539F\u59CB\u6570\u636E</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.includeHistory) ? ssrLooseContain(options.value.includeHistory, null) : options.value.includeHistory) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-muted-foreground">\u5305\u542B\u5386\u53F2\u8BB0\u5F55</span></label></div></div><button${ssrIncludeBooleanAttr(!domain.value || loading.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center font-medium">`);
      if (loading.value) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:loader-2",
          class: "h-5 w-5 mr-2 animate-spin"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:search",
          class: "h-5 w-5 mr-2"
        }, null, _parent));
      }
      _push(` ${ssrInterpolate(loading.value ? "\u67E5\u8BE2\u4E2D..." : "\u67E5\u8BE2WHOIS")}</button></div></div><div class="bg-card p-6 rounded-lg border border-border"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:list",
        class: "h-5 w-5 mr-2 text-primary"
      }, null, _parent));
      _push(` \u6279\u91CF\u67E5\u8BE2 </h2><textarea placeholder="\u6BCF\u884C\u4E00\u4E2A\u57DF\u540D
example.com
test.org
demo.net" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none" rows="4">${ssrInterpolate(batchDomains.value)}</textarea><button${ssrIncludeBooleanAttr(!batchDomains.value || batchLoading.value) ? " disabled" : ""} class="w-full mt-3 bg-secondary text-secondary-foreground py-2 px-4 rounded-md hover:bg-secondary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center font-medium">`);
      if (batchLoading.value) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:loader-2",
          class: "h-5 w-5 mr-2 animate-spin"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:layers",
          class: "h-5 w-5 mr-2"
        }, null, _parent));
      }
      _push(` ${ssrInterpolate(batchLoading.value ? "\u67E5\u8BE2\u4E2D..." : "\u6279\u91CF\u67E5\u8BE2")}</button></div>`);
      if (history.value.length > 0) {
        _push(`<div class="bg-card p-6 rounded-lg border border-border"><h2 class="text-lg font-semibold mb-4 flex items-center justify-between text-foreground"><span class="flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:history",
          class: "h-5 w-5 mr-2 text-primary"
        }, null, _parent));
        _push(` \u67E5\u8BE2\u5386\u53F2 </span><button class="text-sm text-destructive hover:text-destructive/90 transition-colors"> \u6E05\u9664 </button></h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(history.value, (item) => {
          _push(`<button class="w-full text-left px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors"><div class="font-medium text-foreground">${ssrInterpolate(item.domain)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(item.registrar)} \u2022 ${ssrInterpolate(formatTime(item.time))}</div></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-6">`);
      if (whoisData.value) {
        _push(`<div class="bg-card p-6 rounded-lg border border-border"><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:info",
          class: "h-6 w-6 mr-2 text-primary"
        }, null, _parent));
        _push(` WHOIS\u4FE1\u606F - ${ssrInterpolate(whoisData.value.domain)}</h3><div class="flex space-x-2"><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors flex items-center text-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:download",
          class: "h-4 w-4 mr-1"
        }, null, _parent));
        _push(` \u5BFC\u51FAJSON </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 text-muted-foreground rounded-md transition-colors flex items-center text-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:copy",
          class: "h-4 w-4 mr-1"
        }, null, _parent));
        _push(` \u590D\u5236 </button></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:globe",
          class: "h-4 w-4 mr-2 text-primary"
        }, null, _parent));
        _push(` \u57FA\u672C\u4FE1\u606F </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u57DF\u540D</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.domain)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u72B6\u6001</span><span class="${ssrRenderClass([getStatusClass(whoisData.value.status), "font-medium px-2 py-1 rounded text-xs"])}">${ssrInterpolate(whoisData.value.status)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u6CE8\u518C\u65F6\u95F4</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.createdDate)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u5230\u671F\u65F6\u95F4</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.expiryDate)}</span></div></div></div><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:building",
          class: "h-4 w-4 mr-2 text-primary"
        }, null, _parent));
        _push(` \u6CE8\u518C\u5546\u4FE1\u606F </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u6CE8\u518C\u5546</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.registrar)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u6CE8\u518C\u5546URL</span><a${ssrRenderAttr("href", whoisData.value.registrarUrl)} target="_blank" class="font-medium text-primary hover:underline">${ssrInterpolate(whoisData.value.registrarUrl)}</a></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">WHOIS\u670D\u52A1\u5668</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.whoisServer)}</span></div></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:user",
          class: "h-4 w-4 mr-2 text-primary"
        }, null, _parent));
        _push(` \u6CE8\u518C\u4EBA\u4FE1\u606F </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u59D3\u540D</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.registrant.name || "\u9690\u79C1\u4FDD\u62A4")}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u7EC4\u7EC7</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.registrant.organization || "-")}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">\u56FD\u5BB6</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.registrant.country || "-")}</span></div></div></div><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:server",
          class: "h-4 w-4 mr-2 text-primary"
        }, null, _parent));
        _push(` DNS\u670D\u52A1\u5668 </h4><div class="space-y-2"><!--[-->`);
        ssrRenderList(whoisData.value.nameServers, (ns, index) => {
          _push(`<div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">NS${ssrInterpolate(index + 1)}</span><span class="font-medium text-foreground">${ssrInterpolate(ns)}</span></div>`);
        });
        _push(`<!--]--></div></div></div>`);
        if (options.value.includeRaw && whoisData.value.rawData) {
          _push(`<div><h4 class="font-medium text-foreground mb-4 flex items-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:file-text",
            class: "h-4 w-4 mr-2 text-primary"
          }, null, _parent));
          _push(` \u539F\u59CBWHOIS\u6570\u636E </h4><pre class="bg-muted p-4 rounded-lg text-sm overflow-x-auto text-muted-foreground">${ssrInterpolate(whoisData.value.rawData)}</pre></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (batchResults.value.length > 0) {
        _push(`<div class="bg-card p-6 rounded-lg border border-border"><h3 class="text-xl font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:layers",
          class: "h-6 w-6 mr-2 text-primary"
        }, null, _parent));
        _push(` \u6279\u91CF\u67E5\u8BE2\u7ED3\u679C </h3><div class="overflow-x-auto"><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> \u57DF\u540D </th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> \u72B6\u6001 </th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> \u6CE8\u518C\u5546 </th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> \u5230\u671F\u65F6\u95F4 </th></tr></thead><tbody class="bg-card divide-y divide-border"><!--[-->`);
        ssrRenderList(batchResults.value, (result) => {
          _push(`<tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">${ssrInterpolate(result.domain)}</td><td class="px-6 py-4 whitespace-nowrap text-sm"><span class="${ssrRenderClass([getStatusClass(result.status), "px-2 inline-flex text-xs leading-5 font-semibold rounded-full"])}">${ssrInterpolate(result.status)}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">${ssrInterpolate(result.registrar || "-")}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">${ssrInterpolate(result.expiryDate || "-")}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div><button class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center font-medium">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:download",
          class: "h-4 w-4 mr-2"
        }, null, _parent));
        _push(` \u5BFC\u51FA\u7ED3\u679C </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 bg-card rounded-lg border border-border relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F WHOIS \u67E5\u8BE2\uFF1F </h2><p class="text-muted-foreground mb-4"> WHOIS \u662F\u4E00\u79CD\u7528\u4E8E\u67E5\u8BE2\u57DF\u540D\u6CE8\u518C\u4FE1\u606F\u7684\u534F\u8BAE\u548C\u670D\u52A1\u3002\u901A\u8FC7 WHOIS \u67E5\u8BE2\uFF0C\u60A8\u53EF\u4EE5\u83B7\u53D6\u57DF\u540D\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C \u5305\u62EC\u57DF\u540D\u6CE8\u518C\u4EBA\u3001\u6CE8\u518C\u5546\u3001\u6CE8\u518C\u65E5\u671F\u3001\u5230\u671F\u65E5\u671F\u3001DNS \u670D\u52A1\u5668\u7B49\u91CD\u8981\u4FE1\u606F\u3002\u8FD9\u4E9B\u4FE1\u606F\u5BF9\u4E8E\u7F51\u7EDC\u5B89\u5168\u3001 \u57DF\u540D\u4EA4\u6613\u3001\u54C1\u724C\u4FDD\u62A4\u7B49\u65B9\u9762\u90FD\u6709\u7740\u91CD\u8981\u7684\u4F5C\u7528\u3002 </p><p class="text-muted-foreground mb-4"> WHOIS \u6570\u636E\u7531\u4E92\u8054\u7F51\u57DF\u540D\u7BA1\u7406\u673A\u6784\uFF08ICANN\uFF09\u7EDF\u4E00\u7BA1\u7406\uFF0C\u5404\u4E2A\u57DF\u540D\u6CE8\u518C\u5546\u8D1F\u8D23\u7EF4\u62A4\u5176\u6CE8\u518C\u57DF\u540D\u7684 WHOIS \u4FE1\u606F\u3002 \u5F53\u60A8\u6CE8\u518C\u4E00\u4E2A\u57DF\u540D\u65F6\uFF0C\u60A8\u7684\u4FE1\u606F\u4F1A\u88AB\u8BB0\u5F55\u5728 WHOIS \u6570\u636E\u5E93\u4E2D\uFF0C\u9664\u975E\u60A8\u542F\u7528\u4E86\u9690\u79C1\u4FDD\u62A4\u670D\u52A1\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5728\u5DE6\u4FA7\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u8981\u67E5\u8BE2\u7684\u57DF\u540D\uFF08\u5982 google.com\uFF09</li><li>\u53EF\u9009\u62E9\u9876\u7EA7\u57DF\u540D\u6216\u76F4\u63A5\u8F93\u5165\u5B8C\u6574\u57DF\u540D</li><li>\u70B9\u51FB&quot;\u67E5\u8BE2WHOIS&quot;\u6309\u94AE\u6216\u6309 Enter \u952E\u5F00\u59CB\u67E5\u8BE2</li><li>\u67E5\u770B\u53F3\u4FA7\u663E\u793A\u7684\u57DF\u540D\u8BE6\u7EC6\u4FE1\u606F</li><li>\u5982\u9700\u6279\u91CF\u67E5\u8BE2\uFF0C\u53EF\u5728\u6279\u91CF\u67E5\u8BE2\u6846\u4E2D\u8F93\u5165\u591A\u4E2A\u57DF\u540D\uFF08\u6BCF\u884C\u4E00\u4E2A\uFF09</li><li>\u53EF\u4EE5\u5BFC\u51FA\u67E5\u8BE2\u7ED3\u679C\u4E3A JSON \u683C\u5F0F\u4EE5\u4FBF\u8FDB\u4E00\u6B65\u5206\u6790</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> WHOIS \u4FE1\u606F\u5305\u542B\u54EA\u4E9B\u5185\u5BB9\uFF1F </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u57DF\u540D\u57FA\u672C\u4FE1\u606F</strong>\uFF1A\u57DF\u540D\u540D\u79F0\u3001\u6CE8\u518C\u72B6\u6001\u3001\u6CE8\u518C\u65E5\u671F\u3001\u5230\u671F\u65E5\u671F\u3001\u6700\u540E\u66F4\u65B0\u65E5\u671F\u7B49</li><li><strong>\u6CE8\u518C\u5546\u4FE1\u606F</strong>\uFF1A\u57DF\u540D\u6CE8\u518C\u5546\u540D\u79F0\u3001\u7F51\u7AD9\u5730\u5740\u3001WHOIS \u670D\u52A1\u5668\u3001\u8054\u7CFB\u65B9\u5F0F\u7B49</li><li><strong>\u6CE8\u518C\u4EBA\u4FE1\u606F</strong>\uFF1A\u57DF\u540D\u6240\u6709\u8005\u7684\u59D3\u540D\u3001\u7EC4\u7EC7\u3001\u90AE\u7BB1\u3001\u7535\u8BDD\u3001\u5730\u5740\u7B49\uFF08\u53EF\u80FD\u53D7\u9690\u79C1\u4FDD\u62A4\uFF09</li><li><strong>\u6280\u672F\u8054\u7CFB\u4EBA</strong>\uFF1A\u6280\u672F\u8D1F\u8D23\u4EBA\u7684\u8054\u7CFB\u65B9\u5F0F\u548C\u76F8\u5173\u4FE1\u606F</li><li><strong>DNS \u670D\u52A1\u5668</strong>\uFF1A\u57DF\u540D\u4F7F\u7528\u7684\u540D\u79F0\u670D\u52A1\u5668\u5217\u8868</li><li><strong>\u57DF\u540D\u72B6\u6001</strong>\uFF1A\u5982 clientDeleteProhibited\u3001clientTransferProhibited \u7B49\u72B6\u6001\u6807\u8BB0</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u6709\u4E9B\u57DF\u540D\u7684 WHOIS \u4FE1\u606F\u4E0D\u5B8C\u6574\uFF1F</h3><p class="text-muted-foreground mt-1"> \u8FD9\u901A\u5E38\u662F\u7531\u4E8E\u57DF\u540D\u542F\u7528\u4E86\u9690\u79C1\u4FDD\u62A4\u670D\u52A1\uFF08Whois Privacy Protection\uFF09\u3002\u6CE8\u518C\u5546\u4E3A\u4E86\u4FDD\u62A4\u57DF\u540D\u6240\u6709\u8005\u7684\u9690\u79C1\uFF0C \u4F1A\u5728 WHOIS \u6570\u636E\u5E93\u4E2D\u663E\u793A\u4EE3\u7406\u4FE1\u606F\u800C\u4E0D\u662F\u771F\u5B9E\u7684\u6CE8\u518C\u4EBA\u4FE1\u606F\u3002\u8FD9\u662F ICANN \u5141\u8BB8\u7684\u5408\u6CD5\u505A\u6CD5\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">WHOIS \u67E5\u8BE2\u51C6\u786E\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> WHOIS \u4FE1\u606F\u901A\u5E38\u7531\u57DF\u540D\u6CE8\u518C\u5546\u5B9E\u65F6\u66F4\u65B0\uFF0C\u4F46\u53EF\u80FD\u5B58\u5728\u4E00\u5B9A\u7684\u5EF6\u8FDF\u3002\u4E00\u4E9B\u57DF\u540D\u4FE1\u606F\u53EF\u80FD\u9700\u8981 24-48 \u5C0F\u65F6\u624D\u80FD\u540C\u6B65\u66F4\u65B0\u3002 \u53E6\u5916\uFF0C\u4E0D\u540C\u6CE8\u518C\u5546\u7684 WHOIS \u670D\u52A1\u5668\u53EF\u80FD\u8FD4\u56DE\u4E0D\u540C\u683C\u5F0F\u7684\u4FE1\u606F\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u53EF\u4EE5\u67E5\u8BE2\u6240\u6709\u57DF\u540D\u540E\u7F00\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u6211\u4EEC\u7684\u5DE5\u5177\u652F\u6301\u67E5\u8BE2\u5927\u591A\u6570\u4E3B\u6D41\u7684\u901A\u7528\u9876\u7EA7\u57DF\u540D\uFF08gTLD\uFF09\u548C\u56FD\u5BB6\u4EE3\u7801\u9876\u7EA7\u57DF\u540D\uFF08ccTLD\uFF09\u3002 \u4F46\u67D0\u4E9B\u7279\u6B8A\u7684\u57DF\u540D\u540E\u7F00\u53EF\u80FD\u9700\u8981\u901A\u8FC7\u4E13\u95E8\u7684 WHOIS \u670D\u52A1\u5668\u67E5\u8BE2\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">WHOIS \u67E5\u8BE2\u662F\u5426\u5408\u6CD5\uFF1F</h3><p class="text-muted-foreground mt-1"> WHOIS \u67E5\u8BE2\u662F\u5B8C\u5168\u5408\u6CD5\u7684\uFF0C\u8FD9\u662F\u4E92\u8054\u7F51\u57FA\u7840\u8BBE\u65BD\u7684\u4E00\u90E8\u5206\u3002\u4F46\u4F7F\u7528 WHOIS \u4FE1\u606F\u8FDB\u884C\u5783\u573E\u90AE\u4EF6\u53D1\u9001\u3001 \u6B3A\u8BC8\u6216\u5176\u4ED6\u975E\u6CD5\u6D3B\u52A8\u662F\u8FDD\u6CD5\u7684\u3002\u8BF7\u5408\u7406\u4F7F\u7528\u67E5\u8BE2\u5230\u7684\u4FE1\u606F\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u57DF\u540D\u72B6\u6001\u6807\u8BC6\u662F\u4EC0\u4E48\u610F\u601D\uFF1F</h3><p class="text-muted-foreground mt-1"> \u57DF\u540D\u72B6\u6001\u6807\u8BC6\u8868\u793A\u57DF\u540D\u5F53\u524D\u7684\u9501\u5B9A\u72B6\u6001\uFF1A <br>\u2022 clientDeleteProhibited - \u7981\u6B62\u5220\u9664 <br>\u2022 clientTransferProhibited - \u7981\u6B62\u8F6C\u79FB <br>\u2022 clientUpdateProhibited - \u7981\u6B62\u66F4\u65B0 <br>\u2022 serverTransferProhibited - \u670D\u52A1\u5668\u7AEF\u7981\u6B62\u8F6C\u79FB \u8FD9\u4E9B\u72B6\u6001\u901A\u5E38\u662F\u4E3A\u4E86\u4FDD\u62A4\u57DF\u540D\u5B89\u5168\u800C\u8BBE\u7F6E\u7684\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools, (relatedTool) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/whois-lookup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=whois-lookup-D3fL8ybx.mjs.map
