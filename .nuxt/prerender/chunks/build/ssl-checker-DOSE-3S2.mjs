import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
import { Shield, Search, Loader2, Settings, History, FileCheck, Globe, CheckCircle, XCircle, AlertCircle, HelpCircle, ChevronUp, Fingerprint, Zap, Monitor, Hash, Link, Wifi, Clock, Lock, FileText, ShieldCheck } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
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

const _sfc_main = {
  __name: "ssl-checker",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "SSL\u8BC1\u4E66\u68C0\u67E5\u5DE5\u5177 - \u5728\u7EBFSSL/TLS\u8BC1\u4E66\u67E5\u8BE2\u4E0E\u9A8C\u8BC1",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBFSSL/TLS\u8BC1\u4E66\u68C0\u67E5\u5DE5\u5177\uFF0C\u67E5\u8BE2\u8BC1\u4E66\u6709\u6548\u671F\u3001\u9881\u53D1\u8005\u3001\u534F\u8BAE\u652F\u6301\u7B49\u4FE1\u606F\uFF0C\u4FDD\u969C\u7F51\u7AD9\u5B89\u5168\u3002\u652F\u6301\u8BC1\u4E66\u94FE\u68C0\u67E5\u3001\u5B89\u5168\u5934\u68C0\u6D4B\u548CTLS\u7248\u672C\u9A8C\u8BC1\u3002" },
        { name: "keywords", content: "SSL\u8BC1\u4E66,TLS\u8BC1\u4E66,\u8BC1\u4E66\u67E5\u8BE2,HTTPS\u68C0\u67E5,\u8BC1\u4E66\u6709\u6548\u671F,SSL/TLS,\u5B89\u5168\u914D\u7F6E,\u8BC1\u4E66\u94FE,TLS\u534F\u8BAE" }
      ]
    });
    useRouter();
    const tool = tools.find((t) => t.id === "ssl-checker");
    categories.find((c) => c.id === "network");
    const domain = ref("");
    const port = ref(443);
    const customPort = ref("");
    const custom = ref("custom");
    const checking = ref(false);
    const error = ref("");
    const certificateInfo = ref(null);
    const protocolInfo = ref(null);
    const securityHeaders = ref(null);
    const history = ref([]);
    const checkOptions = ref({
      chain: true,
      protocols: true,
      ciphers: false,
      http2: true,
      headers: true
    });
    const isSeoContentVisible = ref(true);
    const iconMap = {
      Shield,
      ShieldCheck,
      FileText,
      Lock,
      Clock,
      Wifi,
      Link,
      Hash,
      GlobeIcon: Globe,
      Monitor,
      Zap,
      Fingerprint,
      Search,
      Globe,
      CheckCircle,
      XCircle,
      AlertCircle,
      FileCheck,
      Settings,
      History,
      HelpCircle,
      ChevronUp,
      Loader2
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "ssl-checker"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "http-client"),
        tools.find((t) => t.id === "dns-lookup"),
        tools.find((t) => t.id === "port-checker"),
        tools.find((t) => t.id === "whois-lookup")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
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
    const getValidityStatusClass = (daysLeft) => {
      if (daysLeft === void 0) return "text-muted-foreground";
      if (daysLeft < 0) return "text-destructive";
      if (daysLeft < 30) return "text-yellow-600 dark:text-yellow-400";
      return "text-green-600 dark:text-green-400";
    };
    const getValidityStatusText = (daysLeft) => {
      if (daysLeft === void 0) return "\u672A\u77E5";
      if (daysLeft < 0) return `\u5DF2\u8FC7\u671F ${Math.abs(daysLeft)} \u5929`;
      if (daysLeft < 7) return "\u5373\u5C06\u8FC7\u671F";
      if (daysLeft < 30) return "30\u5929\u5185\u8FC7\u671F";
      return "\u6B63\u5E38";
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3 flex items-center">`);
      _push(ssrRenderComponent(unref(Shield), { class: "w-8 h-8 mr-3 text-primary" }, null, _parent));
      _push(` SSL\u8BC1\u4E66\u68C0\u67E5\u5DE5\u5177 - \u5728\u7EBFSSL/TLS\u8BC1\u4E66\u67E5\u8BE2\u4E0E\u9A8C\u8BC1 </h1><p class="text-muted-foreground">\u514D\u8D39\u5728\u7EBFSSL/TLS\u8BC1\u4E66\u68C0\u67E5\u5DE5\u5177\uFF0C\u67E5\u8BE2\u8BC1\u4E66\u6709\u6548\u671F\u3001\u9881\u53D1\u8005\u3001\u534F\u8BAE\u652F\u6301\u7B49\u4FE1\u606F\uFF0C\u4FDD\u969C\u7F51\u7AD9\u5B89\u5168\u3002\u652F\u6301\u8BC1\u4E66\u94FE\u68C0\u67E5\u3001\u5B89\u5168\u5934\u68C0\u6D4B\u548CTLS\u7248\u672C\u9A8C\u8BC1\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="lg:col-span-1 space-y-4"><div class="p-6 bg-card border border-border rounded-lg"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u68C0\u67E5\u914D\u7F6E </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u57DF\u540D\u6216IP\u5730\u5740</label><input${ssrRenderAttr("value", domain.value)} type="text" placeholder="example.com" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div><div><label class="block text-sm font-medium text-foreground mb-2">\u7AEF\u53E3</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option${ssrRenderAttr("value", 443)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, 443) : ssrLooseEqual(port.value, 443)) ? " selected" : ""}>443 (HTTPS)</option><option${ssrRenderAttr("value", 8443)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, 8443) : ssrLooseEqual(port.value, 8443)) ? " selected" : ""}>8443 (HTTPS Alternative)</option><option${ssrRenderAttr("value", 993)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, 993) : ssrLooseEqual(port.value, 993)) ? " selected" : ""}>993 (IMAPS)</option><option${ssrRenderAttr("value", 995)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, 995) : ssrLooseEqual(port.value, 995)) ? " selected" : ""}>995 (POP3S)</option><option${ssrRenderAttr("value", 465)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, 465) : ssrLooseEqual(port.value, 465)) ? " selected" : ""}>465 (SMTPS)</option><option${ssrRenderAttr("value", 636)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, 636) : ssrLooseEqual(port.value, 636)) ? " selected" : ""}>636 (LDAPS)</option><option${ssrRenderAttr("value", custom.value)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, custom.value) : ssrLooseEqual(port.value, custom.value)) ? " selected" : ""}>\u81EA\u5B9A\u4E49...</option></select>`);
      if (port.value === "custom") {
        _push(`<input${ssrRenderAttr("value", customPort.value)} type="number" placeholder="\u8F93\u5165\u7AEF\u53E3\u53F7" class="mt-2 w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block text-sm font-medium text-foreground mb-2">\u5FEB\u901F\u793A\u4F8B</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="">\u9009\u62E9\u793A\u4F8B...</option><option value="google">google.com</option><option value="github">github.com</option><option value="cloudflare">cloudflare.com</option><option value="letsencrypt">letsencrypt.org</option></select></div><button${ssrIncludeBooleanAttr(!domain.value || checking.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (checking.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Shield), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(checking.value ? "\u68C0\u67E5\u4E2D..." : "\u68C0\u67E5\u8BC1\u4E66")}</button></div></div><div class="p-6 bg-card border border-border rounded-lg"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u68C0\u67E5\u9009\u9879 </h2><div class="space-y-3"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(checkOptions.value.chain) ? ssrLooseContain(checkOptions.value.chain, null) : checkOptions.value.chain) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary"><span class="ml-2 text-sm text-foreground">\u68C0\u67E5\u8BC1\u4E66\u94FE</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(checkOptions.value.protocols) ? ssrLooseContain(checkOptions.value.protocols, null) : checkOptions.value.protocols) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary"><span class="ml-2 text-sm text-foreground">\u68C0\u67E5\u652F\u6301\u7684\u534F\u8BAE</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(checkOptions.value.ciphers) ? ssrLooseContain(checkOptions.value.ciphers, null) : checkOptions.value.ciphers) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary"><span class="ml-2 text-sm text-foreground">\u68C0\u67E5\u52A0\u5BC6\u5957\u4EF6</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(checkOptions.value.http2) ? ssrLooseContain(checkOptions.value.http2, null) : checkOptions.value.http2) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary"><span class="ml-2 text-sm text-foreground">\u68C0\u67E5 HTTP/2 \u652F\u6301</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(checkOptions.value.headers) ? ssrLooseContain(checkOptions.value.headers, null) : checkOptions.value.headers) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary"><span class="ml-2 text-sm text-foreground">\u68C0\u67E5\u5B89\u5168\u5934</span></label></div></div>`);
      if (history.value.length > 0) {
        _push(`<div class="p-6 bg-card border border-border rounded-lg"><h2 class="text-lg font-semibold mb-4 flex items-center justify-between text-foreground"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u68C0\u67E5\u5386\u53F2 </span><button class="text-sm text-destructive hover:text-destructive/90"> \u6E05\u9664 </button></h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(history.value, (item, index) => {
          _push(`<button class="w-full text-left px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors"><div class="flex items-center justify-between"><span class="text-sm font-medium text-foreground">${ssrInterpolate(item.domain)}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(formatTime(item.time))}</span></div><div class="text-xs text-muted-foreground mt-1">\u7AEF\u53E3: ${ssrInterpolate(item.port)}</div></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-4">`);
      if (certificateInfo.value) {
        _push(`<div class="p-6 bg-card border border-border rounded-lg"><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(FileCheck), { class: "h-6 w-6 mr-2 text-primary" }, null, _parent));
        _push(` \u8BC1\u4E66\u4FE1\u606F </h3><div class="flex items-center space-x-2"><span class="${ssrRenderClass([
          "px-3 py-1 rounded-full text-sm font-medium",
          certificateInfo.value.valid ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
        ])}">${ssrInterpolate(certificateInfo.value.valid ? "\u6709\u6548" : "\u65E0\u6548")}</span>`);
        if (certificateInfo.value.daysLeft !== void 0) {
          _push(`<span class="text-sm text-muted-foreground">${ssrInterpolate(certificateInfo.value.daysLeft > 0 ? `\u5269\u4F59 ${certificateInfo.value.daysLeft} \u5929` : `\u5DF2\u8FC7\u671F ${Math.abs(certificateInfo.value.daysLeft)} \u5929`)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div><h4 class="text-sm font-medium text-foreground mb-3">\u57FA\u672C\u4FE1\u606F</h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">\u57DF\u540D:</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(certificateInfo.value.subject)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">\u9881\u53D1\u8005:</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(certificateInfo.value.issuer)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">\u7248\u672C:</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(certificateInfo.value.version)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">\u5E8F\u5217\u53F7:</span><span class="font-mono text-xs text-foreground">${ssrInterpolate(certificateInfo.value.serialNumber)}</span></div></div></div><div><h4 class="text-sm font-medium text-foreground mb-3">\u6709\u6548\u671F</h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">\u9881\u53D1\u65F6\u95F4:</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(formatDate(certificateInfo.value.validFrom))}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">\u8FC7\u671F\u65F6\u95F4:</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(formatDate(certificateInfo.value.validTo))}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">\u6709\u6548\u671F:</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(certificateInfo.value.validityDays)} \u5929</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">\u72B6\u6001:</span><span class="${ssrRenderClass([
          "text-sm font-medium",
          getValidityStatusClass(certificateInfo.value.daysLeft)
        ])}">${ssrInterpolate(getValidityStatusText(certificateInfo.value.daysLeft))}</span></div></div></div></div>`);
        if (certificateInfo.value.san && certificateInfo.value.san.length > 0) {
          _push(`<div class="mb-6"><h4 class="text-sm font-medium text-foreground mb-3">SAN \u57DF\u540D\u5217\u8868</h4><div class="flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(certificateInfo.value.san, (san) => {
            _push(`<span class="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">${ssrInterpolate(san)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (checkOptions.value.chain && certificateInfo.value.chain) {
          _push(`<div class="mb-6"><h4 class="text-sm font-medium text-foreground mb-3">\u8BC1\u4E66\u94FE</h4><div class="space-y-3"><!--[-->`);
          ssrRenderList(certificateInfo.value.chain, (cert, index) => {
            _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-2"><span class="text-sm font-medium text-foreground">\u7EA7\u522B ${ssrInterpolate(index + 1)}</span>`);
            if (index === 0) {
              _push(`<span class="text-xs px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded"> \u7EC8\u7AEF\u5B9E\u4F53\u8BC1\u4E66 </span>`);
            } else if (index === certificateInfo.value.chain.length - 1) {
              _push(`<span class="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded"> \u6839\u8BC1\u4E66 </span>`);
            } else {
              _push(`<span class="text-xs px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded"> \u4E2D\u95F4\u8BC1\u4E66 </span>`);
            }
            _push(`</div><div class="text-sm text-muted-foreground"><p>\u4E3B\u4F53: ${ssrInterpolate(cert.subject)}</p><p>\u9881\u53D1\u8005: ${ssrInterpolate(cert.issuer)}</p></div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (checkOptions.value.protocols && protocolInfo.value) {
        _push(`<div class="p-6 bg-card border border-border rounded-lg"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Globe), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` TLS/SSL \u534F\u8BAE\u652F\u6301 </h3><div class="grid grid-cols-2 md:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(protocolInfo.value, (protocol) => {
          _push(`<div class="${ssrRenderClass([protocol.supported ? "border-green-500/30 bg-green-50 dark:bg-green-950/30" : "border-red-500/30 bg-red-50 dark:bg-red-950/30", "p-4 rounded-lg border-2"])}"><div class="flex items-center justify-between mb-2"><span class="text-sm font-medium text-foreground">${ssrInterpolate(protocol.version)}</span>`);
          if (protocol.supported) {
            _push(ssrRenderComponent(unref(CheckCircle), { class: "h-5 w-5 text-green-600 dark:text-green-400" }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(XCircle), { class: "h-5 w-5 text-red-600 dark:text-red-400" }, null, _parent));
          }
          _push(`</div><p class="text-xs text-muted-foreground">${ssrInterpolate(protocol.description)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (checkOptions.value.headers && securityHeaders.value) {
        _push(`<div class="p-6 bg-card border border-border rounded-lg"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Shield), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u5B89\u5168\u5934\u68C0\u67E5 </h3><div class="overflow-x-auto"><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">\u5B89\u5168\u5934</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">\u72B6\u6001</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">\u503C</th></tr></thead><tbody class="divide-y divide-border"><!--[-->`);
        ssrRenderList(securityHeaders.value, (header) => {
          _push(`<tr><td class="px-6 py-4 text-sm font-medium text-foreground">${ssrInterpolate(header.name)}</td><td class="px-6 py-4"><span class="${ssrRenderClass([
            "px-2 py-1 text-xs rounded-full",
            header.present ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          ])}">${ssrInterpolate(header.present ? "\u5B58\u5728" : "\u7F3A\u5931")}</span></td><td class="px-6 py-4 text-sm text-muted-foreground">${ssrInterpolate(header.value || "-")}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div class="p-6 bg-card border border-border rounded-lg"><h3 class="text-lg font-semibold mb-4 flex items-center text-destructive">`);
        _push(ssrRenderComponent(unref(AlertCircle), { class: "h-5 w-5 mr-2" }, null, _parent));
        _push(` \u68C0\u67E5\u5931\u8D25 </h3><div class="bg-destructive/10 border border-destructive/20 rounded-lg p-4"><p class="text-destructive">${ssrInterpolate(error.value)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F SSL/TLS \u8BC1\u4E66\uFF1F </h2><p class="text-muted-foreground mb-4"> SSL (Secure Sockets Layer) \u548C\u5176\u7EE7\u4EFB\u8005 TLS (Transport Layer Security) \u662F cryptographic protocols\uFF0C \u65E8\u5728\u4E3A\u7F51\u7EDC\u901A\u4FE1\u63D0\u4F9B\u5B89\u5168\u6027\u548C\u6570\u636E\u5B8C\u6574\u6027\u3002SSL/TLS \u8BC1\u4E66\u662F\u6570\u5B57\u8BC1\u4E66\uFF0C\u7528\u4E8E\u9A8C\u8BC1\u7F51\u7AD9\u7684\u8EAB\u4EFD\u5E76\u542F\u7528\u52A0\u5BC6\u8FDE\u63A5\u3002 \u5F53\u60A8\u8BBF\u95EE\u4F7F\u7528 HTTPS \u7684\u7F51\u7AD9\u65F6\uFF0C\u60A8\u7684\u6D4F\u89C8\u5668\u4F1A\u68C0\u67E5\u7F51\u7AD9\u7684 SSL/TLS \u8BC1\u4E66\u4EE5\u786E\u4FDD\u8FDE\u63A5\u662F\u5B89\u5168\u7684\u3002 </p><p class="text-muted-foreground mb-4"> SSL/TLS \u8BC1\u4E66\u5305\u542B\u516C\u94A5\u3001\u8BC1\u4E66\u9881\u53D1\u673A\u6784 (CA) \u7684\u4FE1\u606F\u3001\u57DF\u540D\u3001\u6709\u6548\u671F\u7B49\u4FE1\u606F\u3002\u901A\u8FC7\u68C0\u67E5 SSL \u8BC1\u4E66\uFF0C \u60A8\u53EF\u4EE5\u9A8C\u8BC1\u7F51\u7AD9\u7684\u771F\u5B9E\u6027\uFF0C\u786E\u4FDD\u60A8\u6B63\u5728\u4E0E\u6B63\u786E\u7684\u670D\u52A1\u5668\u901A\u4FE1\uFF0C\u800C\u4E0D\u662F\u4E0E\u6076\u610F\u4E2D\u95F4\u4EBA\u901A\u4FE1\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4E3A\u4EC0\u4E48\u9700\u8981\u68C0\u67E5 SSL \u8BC1\u4E66\uFF1F </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u5B89\u5168\u4FDD\u969C</strong>\uFF1A\u786E\u4FDD\u7F51\u7AD9\u4F7F\u7528\u6709\u6548\u7684 SSL/TLS \u8BC1\u4E66\uFF0C\u4FDD\u62A4\u6570\u636E\u4F20\u8F93\u5B89\u5168</li><li><strong>\u8EAB\u4EFD\u9A8C\u8BC1</strong>\uFF1A\u9A8C\u8BC1\u7F51\u7AD9\u8EAB\u4EFD\uFF0C\u9632\u6B62\u9493\u9C7C\u653B\u51FB\u548C\u4E2D\u95F4\u4EBA\u653B\u51FB</li><li><strong>\u8BC1\u4E66\u7BA1\u7406</strong>\uFF1A\u53CA\u65F6\u53D1\u73B0\u5373\u5C06\u8FC7\u671F\u7684\u8BC1\u4E66\uFF0C\u907F\u514D\u670D\u52A1\u4E2D\u65AD</li><li><strong>\u5408\u89C4\u8981\u6C42</strong>\uFF1A\u6EE1\u8DB3 PCI DSS\u3001GDPR \u7B49\u5408\u89C4\u6027\u8981\u6C42</li><li><strong>SEO \u4F18\u5316</strong>\uFF1A\u641C\u7D22\u5F15\u64CE\u4F18\u5148\u6536\u5F55 HTTPS \u7F51\u7AD9</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u8981\u68C0\u67E5\u7684\u57DF\u540D\u6216 IP \u5730\u5740</li><li>\u9009\u62E9\u7AEF\u53E3\u53F7\uFF08\u9ED8\u8BA4\u4E3A 443\uFF09</li><li>\u6839\u636E\u9700\u8981\u9009\u62E9\u68C0\u67E5\u9009\u9879\uFF08\u8BC1\u4E66\u94FE\u3001\u534F\u8BAE\u652F\u6301\u3001\u5B89\u5168\u5934\u7B49\uFF09</li><li>\u70B9\u51FB&quot;\u68C0\u67E5\u8BC1\u4E66&quot;\u6309\u94AE\u5F00\u59CB\u68C0\u67E5</li><li>\u67E5\u770B\u68C0\u67E5\u7ED3\u679C\uFF0C\u5305\u62EC\u8BC1\u4E66\u4FE1\u606F\u3001\u534F\u8BAE\u652F\u6301\u548C\u5B89\u5168\u914D\u7F6E</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">SSL \u8BC1\u4E66\u68C0\u67E5\u9700\u8981\u591A\u957F\u65F6\u95F4\uFF1F</h3><p class="text-muted-foreground mt-1"> \u901A\u5E38\u53EA\u9700\u8981\u51E0\u79D2\u949F\u3002\u68C0\u67E5\u65F6\u95F4\u53D6\u51B3\u4E8E\u7F51\u7EDC\u5EF6\u8FDF\u548C\u670D\u52A1\u5668\u7684\u54CD\u5E94\u901F\u5EA6\u3002 \u6211\u4EEC\u7684\u5DE5\u5177\u4F1A\u5728\u6D4F\u89C8\u5668\u4E2D\u6267\u884C\u68C0\u67E5\uFF0C\u4E0D\u4F1A\u5C06\u60A8\u7684\u67E5\u8BE2\u53D1\u9001\u5230\u7B2C\u4E09\u65B9\u670D\u52A1\u5668\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u8BC1\u4E66\u8FC7\u671F\u524D\u591A\u4E45\u5E94\u8BE5\u66F4\u65B0\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5EFA\u8BAE\u5728\u8BC1\u4E66\u8FC7\u671F\u524D\u81F3\u5C11 30 \u5929\u5F00\u59CB\u66F4\u65B0\u6D41\u7A0B\u3002\u4E00\u4E9B\u7EC4\u7EC7\u548C\u8BC1\u4E66\u9881\u53D1\u673A\u6784\uFF08\u5982 Let&#39;s Encrypt\uFF09 \u751A\u81F3\u5EFA\u8BAE\u5728\u8FC7\u671F\u524D 60 \u5929\u8FDB\u884C\u66F4\u65B0\uFF0C\u4EE5\u786E\u4FDD\u6709\u8DB3\u591F\u7684\u65F6\u95F4\u5904\u7406\u4EFB\u4F55\u53EF\u80FD\u51FA\u73B0\u7684\u95EE\u9898\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4EC0\u4E48\u662F\u8BC1\u4E66\u94FE\uFF1F</h3><p class="text-muted-foreground mt-1"> \u8BC1\u4E66\u94FE\u662F\u4E00\u7CFB\u5217\u8BC1\u4E66\u7684\u96C6\u5408\uFF0C\u4ECE\u7F51\u7AD9\u7684 SSL \u8BC1\u4E66\u5F00\u59CB\uFF0C\u5230\u53D7\u4FE1\u4EFB\u7684\u6839\u8BC1\u4E66\u7ED3\u675F\u3002 \u5B83\u5EFA\u7ACB\u4E86\u4FE1\u4EFB\u94FE\uFF0C\u786E\u4FDD\u7F51\u7AD9\u7684\u8BC1\u4E66\u662F\u7531\u53D7\u4FE1\u4EFB\u7684\u8BC1\u4E66\u9881\u53D1\u673A\u6784\u7B7E\u53D1\u7684\u3002 \u5B8C\u6574\u7684\u8BC1\u4E66\u94FE\u6709\u52A9\u4E8E\u786E\u4FDD\u6240\u6709\u6D4F\u89C8\u5668\u548C\u8BBE\u5907\u90FD\u80FD\u6B63\u786E\u9A8C\u8BC1\u8BC1\u4E66\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">TLS 1.3 \u6709\u4EC0\u4E48\u4F18\u52BF\uFF1F</h3><p class="text-muted-foreground mt-1"> TLS 1.3 \u662F\u6700\u65B0\u7248\u672C\u7684 TLS \u534F\u8BAE\uFF0C\u76F8\u6BD4\u4E4B\u524D\u7684\u7248\u672C\u6709\u4EE5\u4E0B\u4F18\u52BF\uFF1A \u66F4\u5FEB\u7684\u63E1\u624B\u8FC7\u7A0B\uFF08\u51CF\u5C11\u4E86\u4E00\u4E2A\u5F80\u8FD4\u65F6\u95F4\uFF09\u3001\u66F4\u5F3A\u7684\u5B89\u5168\u6027\uFF08\u79FB\u9664\u4E86\u4E0D\u5B89\u5168\u7684\u52A0\u5BC6\u7B97\u6CD5\uFF09\u3001 \u66F4\u597D\u7684\u524D\u5411\u4FDD\u5BC6\u6027\u3001\u7B80\u5316\u7684\u534F\u8BAE\u8BBE\u8BA1\u51CF\u5C11\u4E86\u6F5C\u5728\u7684\u5B89\u5168\u6F0F\u6D1E\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4EC0\u4E48\u662F\u5B89\u5168\u5934\uFF1F\u4E3A\u4EC0\u4E48\u91CD\u8981\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5B89\u5168\u5934\u662F HTTP \u54CD\u5E94\u5934\uFF0C\u7528\u4E8E\u544A\u8BC9\u6D4F\u89C8\u5668\u5982\u4F55\u5904\u7406\u7F51\u7AD9\u7684\u5185\u5BB9\u548C\u8FDE\u63A5\u3002 \u91CD\u8981\u7684\u5B89\u5168\u5934\u5305\u62EC HSTS\uFF08\u5F3A\u5236 HTTPS\uFF09\u3001X-Frame-Options\uFF08\u9632\u6B62\u70B9\u51FB\u52AB\u6301\uFF09\u3001 CSP\uFF08\u5185\u5BB9\u5B89\u5168\u7B56\u7565\uFF09\u7B49\u3002\u8FD9\u4E9B\u5934\u6709\u52A9\u4E8E\u9632\u6B62\u5404\u79CD Web \u653B\u51FB\uFF0C\u63D0\u9AD8\u7F51\u7AD9\u7684\u6574\u4F53\u5B89\u5168\u6027\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/ssl-checker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ssl-checker-DOSE-3S2.mjs.map
