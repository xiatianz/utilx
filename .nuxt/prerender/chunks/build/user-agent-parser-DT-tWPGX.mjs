import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderVNode, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
import { Monitor, Globe, Settings, History, Info, List, Zap, CheckCircle, XCircle, Lightbulb, AlertTriangle, Shield, Code, HelpCircle, ChevronUp, Github, ShieldCheck, Compass, House, Sparkles, Search, Replace, Link, Check, FileCode, FileSignature, Palette, Image, Terminal, Package, FileJson, Type, FileDiff, Regex, Activity, Timer, Calculator, Clock, Calendar, Database, FileText, Lock, Hash, Key, Wifi } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
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
  __name: "user-agent-parser",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "User-Agent\u89E3\u6790\u5DE5\u5177 - \u5728\u7EBF\u6D4F\u89C8\u5668\u8BC6\u522B\u4E0E\u8BBE\u5907\u68C0\u6D4B",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBFUser-Agent\u89E3\u6790\u5DE5\u5177\uFF0C\u8BC6\u522B\u6D4F\u89C8\u5668\u7C7B\u578B\u3001\u64CD\u4F5C\u7CFB\u7EDF\u3001\u8BBE\u5907\u4FE1\u606F\uFF0C\u652F\u6301\u673A\u5668\u4EBA\u68C0\u6D4B\u548C\u5B89\u5168\u5206\u6790\u3002\u5E2E\u52A9\u5F00\u53D1\u8005\u4F18\u5316\u7F51\u7AD9\u517C\u5BB9\u6027\u548C\u7528\u6237\u4F53\u9A8C\u3002" },
        { name: "keywords", content: "User-Agent\u89E3\u6790,\u6D4F\u89C8\u5668\u68C0\u6D4B,\u64CD\u4F5C\u7CFB\u7EDF\u8BC6\u522B,\u8BBE\u5907\u7C7B\u578B\u68C0\u6D4B,\u673A\u5668\u4EBA\u8BC6\u522B,UA\u89E3\u6790,\u6D4F\u89C8\u5668\u8BC6\u522B,\u8BBE\u5907\u68C0\u6D4B" }
      ]
    });
    const tool = tools.find((t) => t.id === "user-agent-parser");
    categories.find((c) => c.id === "network");
    const isSeoContentVisible = ref(true);
    const userAgent = ref("");
    const parsed = ref(null);
    const history = ref([]);
    const parseOptions = ref({
      detailed: true,
      showHints: true,
      showSecurity: true
    });
    const iconMap = {
      Monitor,
      Globe,
      Settings,
      History,
      Info,
      List,
      Zap,
      Lightbulb,
      Shield,
      Code,
      HelpCircle,
      ChevronUp,
      CheckCircle,
      XCircle,
      AlertTriangle,
      Terminal,
      Wifi,
      Key,
      Hash,
      Lock,
      FileText,
      Database,
      Calendar,
      Clock,
      Calculator,
      Timer,
      Activity,
      Regex,
      FileDiff,
      Type,
      ListIcon: List,
      FileJson,
      CodeIcon: Code,
      Package,
      TerminalIcon: Terminal,
      Image,
      Palette,
      FileSignature,
      FileCode,
      CheckIcon: Check,
      Link,
      Replace,
      Search,
      Sparkles,
      House,
      Compass,
      ShieldCheck,
      Github,
      // 添加默认图标，以防某些工具的图标不存在
      default: Monitor
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "user-agent-parser"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "http-client"),
        tools.find((t) => t.id === "dns-lookup"),
        tools.find((t) => t.id === "port-checker"),
        tools.find((t) => t.id === "ssl-checker")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const features = computed(() => {
      if (!parsed.value) return [];
      const features2 = [
        { name: "JavaScript", supported: true },
        { name: "Cookies", supported: true },
        { name: "WebGL", supported: false },
        { name: "WebRTC", supported: false },
        { name: "LocalStorage", supported: true },
        { name: "SessionStorage", supported: true },
        { name: "WebSockets", supported: true },
        { name: "Canvas", supported: true }
      ];
      const browser = parsed.value.browser.name.toLowerCase();
      const version = parseInt(parsed.value.browser.version || "0");
      if (browser.includes("chrome") && version >= 10) {
        features2[2].supported = true;
        features2[3].supported = true;
      } else if (browser.includes("firefox") && version >= 4) {
        features2[2].supported = true;
        features2[3].supported = true;
      } else if (browser.includes("safari") && version >= 5) {
        features2[2].supported = true;
      }
      return features2;
    });
    const hints = computed(() => {
      if (!parsed.value) return [];
      const hints2 = [];
      const browser = parsed.value.browser.name;
      const version = parseInt(parsed.value.browser.version || "0");
      if (browser === "Internet Explorer" && version < 11) {
        hints2.push({
          type: "warning",
          title: "\u8FC7\u65F6\u7684\u6D4F\u89C8\u5668",
          message: "\u68C0\u6D4B\u5230\u8FC7\u65F6\u7684 Internet Explorer \u7248\u672C\uFF0C\u5EFA\u8BAE\u5347\u7EA7\u5230\u73B0\u4EE3\u6D4F\u89C8\u5668"
        });
      }
      if (parsed.value.device.type === "mobile") {
        hints2.push({
          type: "info",
          title: "\u79FB\u52A8\u8BBE\u5907",
          message: "\u68C0\u6D4B\u5230\u79FB\u52A8\u8BBE\u5907\u8BBF\u95EE\uFF0C\u5EFA\u8BAE\u786E\u4FDD\u7F51\u7AD9\u5177\u6709\u54CD\u5E94\u5F0F\u8BBE\u8BA1"
        });
      }
      if (parsed.value.device.type === "tablet") {
        hints2.push({
          type: "info",
          title: "\u5E73\u677F\u8BBE\u5907",
          message: "\u68C0\u6D4B\u5230\u5E73\u677F\u8BBE\u5907\u8BBF\u95EE\uFF0C\u9700\u8981\u4F18\u5316\u89E6\u6478\u4EA4\u4E92\u4F53\u9A8C"
        });
      }
      if (parsed.value.bot) {
        hints2.push({
          type: "warning",
          title: "\u673A\u5668\u4EBA\u8BBF\u95EE",
          message: "\u68C0\u6D4B\u5230\u673A\u5668\u4EBA\u6216\u722C\u866B\u8BBF\u95EE\uFF0C\u8BF7\u786E\u4FDD\u6B63\u786E\u5904\u7406 robots.txt"
        });
      }
      return hints2;
    });
    const hasPrivacyMode = computed(() => {
      if (!userAgent.value) return false;
      return userAgent.value.includes("Private") || userAgent.value.includes("Incognito");
    });
    const hasVPN = computed(() => {
      if (!userAgent.value) return false;
      const vpnIndicators = ["VPN", "Proxy", "Tor", "Opera"];
      return vpnIndicators.some((indicator) => userAgent.value.includes(indicator));
    });
    const getBrowserIconComponent = (browserName) => {
      const icons = {
        "Chrome": Globe,
        "Firefox": Globe,
        "Safari": Globe,
        "Edge": Globe,
        "Internet Explorer": Globe,
        "Opera": Globe,
        "Unknown": Monitor
      };
      return icons[browserName] || icons["Unknown"];
    };
    const getOSIconComponent = (osName) => {
      const icons = {
        "Windows": Monitor,
        "macOS": Monitor,
        "Linux": Terminal,
        "Android": Monitor,
        "iOS": Monitor,
        "Unknown": Monitor
      };
      return icons[osName] || icons["Unknown"];
    };
    const formatTime = (time) => {
      if (!time) return "";
      const date = new Date(time);
      if (isNaN(date.getTime())) return "";
      const now = /* @__PURE__ */ new Date();
      const diff = now - date;
      if (diff < 0) return "";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">User-Agent\u89E3\u6790\u5DE5\u5177 - \u5728\u7EBF\u6D4F\u89C8\u5668\u8BC6\u522B\u4E0E\u8BBE\u5907\u68C0\u6D4B</h1><p class="text-muted-foreground">\u4E13\u4E1A\u7684User-Agent\u89E3\u6790\u5DE5\u5177\uFF0C\u51C6\u786E\u8BC6\u522B\u6D4F\u89C8\u5668\u7C7B\u578B\u3001\u64CD\u4F5C\u7CFB\u7EDF\u3001\u8BBE\u5907\u4FE1\u606F\uFF0C\u652F\u6301\u673A\u5668\u4EBA\u68C0\u6D4B\u548C\u5B89\u5168\u5206\u6790\u3002\u5E2E\u52A9\u5F00\u53D1\u8005\u4F18\u5316\u7F51\u7AD9\u517C\u5BB9\u6027\u548C\u7528\u6237\u4F53\u9A8C\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Monitor), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` User-Agent \u8F93\u5165 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">User-Agent \u5B57\u7B26\u4E32</label><textarea placeholder="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm text-foreground" rows="4">${ssrInterpolate(userAgent.value)}</textarea></div><div><label class="block text-sm font-medium text-foreground mb-2">\u5FEB\u901F\u793A\u4F8B</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="">\u9009\u62E9\u793A\u4F8B...</option><option value="chrome-windows">Chrome on Windows</option><option value="safari-mac">Safari on macOS</option><option value="firefox-linux">Firefox on Linux</option><option value="chrome-android">Chrome on Android</option><option value="safari-ios">Safari on iOS</option><option value="edge-windows">Edge on Windows</option><option value="bot-google">Googlebot</option><option value="bot-bing">Bingbot</option><option value="python-requests">Python Requests</option><option value="java-http">Java HTTP Client</option></select></div><button class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Globe), { class: "h-5 w-5 mr-2" }, null, _parent));
      _push(` \u4F7F\u7528\u5F53\u524D\u6D4F\u89C8\u5668\u7684 User-Agent </button></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u89E3\u6790\u9009\u9879 </h2><div class="space-y-3"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(parseOptions.value.detailed) ? ssrLooseContain(parseOptions.value.detailed, null) : parseOptions.value.detailed) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary bg-background"><span class="ml-2 text-sm text-foreground">\u663E\u793A\u8BE6\u7EC6\u4FE1\u606F</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(parseOptions.value.showHints) ? ssrLooseContain(parseOptions.value.showHints, null) : parseOptions.value.showHints) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary bg-background"><span class="ml-2 text-sm text-foreground">\u663E\u793A\u63D0\u793A\u4FE1\u606F</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(parseOptions.value.showSecurity) ? ssrLooseContain(parseOptions.value.showSecurity, null) : parseOptions.value.showSecurity) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary bg-background"><span class="ml-2 text-sm text-foreground">\u663E\u793A\u5B89\u5168\u4FE1\u606F</span></label></div></div>`);
      if (history.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center justify-between text-foreground"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u89E3\u6790\u5386\u53F2 </span><button class="text-sm text-destructive hover:text-destructive/80"> \u6E05\u9664 </button></h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(history.value, (item, index) => {
          _push(`<button class="w-full text-left px-3 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors"><div class="flex items-center justify-between"><span class="text-sm font-medium truncate text-foreground">${ssrInterpolate(item.browser || item.ua.substring(0, 30))}...</span><span class="text-xs text-muted-foreground">${ssrInterpolate(formatTime(item.time))}</span></div><div class="text-xs text-muted-foreground">${ssrInterpolate(item.os)}</div></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-6">`);
      if (parsed.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Info), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u57FA\u672C\u4FE1\u606F </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">\u6D4F\u89C8\u5668</div><div class="text-lg font-semibold flex items-center text-foreground">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getBrowserIconComponent(parsed.value.browser.name)), { class: "h-6 w-6 mr-2" }, null), _parent);
        _push(` ${ssrInterpolate(parsed.value.browser.name)}</div><div class="text-sm text-muted-foreground">\u7248\u672C: ${ssrInterpolate(parsed.value.browser.version)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">\u64CD\u4F5C\u7CFB\u7EDF</div><div class="text-lg font-semibold flex items-center text-foreground">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getOSIconComponent(parsed.value.os.name)), { class: "h-6 w-6 mr-2" }, null), _parent);
        _push(` ${ssrInterpolate(parsed.value.os.name)}</div><div class="text-sm text-muted-foreground">\u7248\u672C: ${ssrInterpolate(parsed.value.os.version)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">\u8BBE\u5907\u7C7B\u578B</div><div class="text-lg font-semibold text-foreground">${ssrInterpolate(parsed.value.device.type || "\u672A\u77E5")}</div><div class="text-sm text-muted-foreground">\u54C1\u724C: ${ssrInterpolate(parsed.value.device.brand || "\u672A\u77E5")}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">\u5F15\u64CE</div><div class="text-lg font-semibold text-foreground">${ssrInterpolate(parsed.value.engine.name || "\u672A\u77E5")}</div><div class="text-sm text-muted-foreground">\u7248\u672C: ${ssrInterpolate(parsed.value.engine.version || "\u672A\u77E5")}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsed.value && parseOptions.value.detailed) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(List), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u8BE6\u7EC6\u4FE1\u606F </h3><div class="space-y-4"><div><h4 class="text-sm font-medium text-foreground mb-2">\u6D4F\u89C8\u5668\u4FE1\u606F</h4><div class="grid grid-cols-2 gap-2 text-sm"><div class="flex justify-between py-1"><span class="text-muted-foreground">\u540D\u79F0:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.browser.name)}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">\u7248\u672C:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.browser.version)}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">\u4E3B\u7248\u672C:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.browser.major || "\u672A\u77E5")}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">\u7C7B\u578B:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.browser.type || "\u672A\u77E5")}</span></div></div></div><div><h4 class="text-sm font-medium text-foreground mb-2">\u64CD\u4F5C\u7CFB\u7EDF\u4FE1\u606F</h4><div class="grid grid-cols-2 gap-2 text-sm"><div class="flex justify-between py-1"><span class="text-muted-foreground">\u540D\u79F0:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.os.name)}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">\u7248\u672C:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.os.version)}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">\u5E73\u53F0:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.os.platform || "\u672A\u77E5")}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">\u67B6\u6784:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.os.architecture || "\u672A\u77E5")}</span></div></div></div><div><h4 class="text-sm font-medium text-foreground mb-2">\u8BBE\u5907\u4FE1\u606F</h4><div class="grid grid-cols-2 gap-2 text-sm"><div class="flex justify-between py-1"><span class="text-muted-foreground">\u7C7B\u578B:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.device.type || "\u672A\u77E5")}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">\u54C1\u724C:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.device.brand || "\u672A\u77E5")}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">\u578B\u53F7:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.device.model || "\u672A\u77E5")}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">\u8BC6\u522B\u7801:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.device.identifier || "\u672A\u77E5")}</span></div></div></div>`);
        if (parsed.value.cpu) {
          _push(`<div><h4 class="text-sm font-medium text-foreground mb-2">CPU \u4FE1\u606F</h4><div class="grid grid-cols-2 gap-2 text-sm"><div class="flex justify-between py-1"><span class="text-muted-foreground">\u67B6\u6784:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.cpu.architecture || "\u672A\u77E5")}</span></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsed.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Zap), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u7279\u6027\u652F\u6301 </h3><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
        ssrRenderList(features.value, (feature) => {
          _push(`<div class="${ssrRenderClass([feature.supported ? "bg-green-100/20 dark:bg-green-900/30" : "bg-red-100/20 dark:bg-red-900/30", "text-center p-3 rounded-lg"])}">`);
          if (feature.supported) {
            _push(ssrRenderComponent(unref(CheckCircle), { class: "h-8 w-8 mx-auto mb-2 text-green-600 dark:text-green-400" }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(XCircle), { class: "h-8 w-8 mx-auto mb-2 text-red-600 dark:text-red-400" }, null, _parent));
          }
          _push(`<div class="text-sm font-medium text-foreground">${ssrInterpolate(feature.name)}</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsed.value && parseOptions.value.showHints) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Lightbulb), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u63D0\u793A\u4FE1\u606F </h3><div class="space-y-3"><!--[-->`);
        ssrRenderList(hints.value, (hint) => {
          _push(`<div class="${ssrRenderClass([hint.type === "warning" ? "bg-yellow-100/20 dark:bg-yellow-900/30" : "bg-blue-100/20 dark:bg-blue-900/30", "p-3 rounded-lg"])}"><div class="flex items-start">`);
          if (hint.type === "warning") {
            _push(ssrRenderComponent(unref(AlertTriangle), { class: "h-5 w-5 mr-2 mt-0.5 text-yellow-600 dark:text-yellow-400" }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(Info), { class: "h-5 w-5 mr-2 mt-0.5 text-blue-600 dark:text-blue-400" }, null, _parent));
          }
          _push(`<div><div class="font-medium text-sm text-foreground">${ssrInterpolate(hint.title)}</div><div class="text-sm text-muted-foreground mt-1">${ssrInterpolate(hint.message)}</div></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsed.value && parseOptions.value.showSecurity) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Shield), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u5B89\u5168\u4FE1\u606F </h3><div class="space-y-3"><div class="flex items-center justify-between p-3 bg-muted rounded-lg"><span class="text-sm font-medium text-foreground">\u662F\u5426\u4E3A\u673A\u5668\u4EBA</span><span class="${ssrRenderClass([
          "px-2 py-1 text-xs rounded-full",
          parsed.value.bot ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
        ])}">${ssrInterpolate(parsed.value.bot ? "\u662F" : "\u5426")}</span></div>`);
        if (parsed.value.bot) {
          _push(`<div class="p-3 bg-yellow-100/20 dark:bg-yellow-900/30 rounded-lg"><div class="text-sm font-medium text-yellow-800 dark:text-yellow-300 mb-1">\u673A\u5668\u4EBA\u4FE1\u606F</div><div class="text-sm text-muted-foreground"><p>\u540D\u79F0: ${ssrInterpolate(parsed.value.bot.name || "\u672A\u77E5")}</p>`);
          if (parsed.value.bot.url) {
            _push(`<p>URL: ${ssrInterpolate(parsed.value.bot.url)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (parsed.value.bot.producer) {
            _push(`<p>\u751F\u4EA7\u8005: ${ssrInterpolate(parsed.value.bot.producer)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center justify-between p-3 bg-muted rounded-lg"><span class="text-sm font-medium text-foreground">\u9690\u79C1\u6D4F\u89C8\u6A21\u5F0F</span><span class="${ssrRenderClass([
          "px-2 py-1 text-xs rounded-full",
          hasPrivacyMode.value ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
        ])}">${ssrInterpolate(hasPrivacyMode.value ? "\u53EF\u80FD" : "\u5426")}</span></div><div class="flex items-center justify-between p-3 bg-muted rounded-lg"><span class="text-sm font-medium text-foreground">VPN/\u4EE3\u7406\u68C0\u6D4B</span><span class="${ssrRenderClass([
          "px-2 py-1 text-xs rounded-full",
          hasVPN.value ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
        ])}">${ssrInterpolate(hasVPN.value ? "\u53EF\u80FD\u4F7F\u7528" : "\u672A\u68C0\u6D4B\u5230")}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsed.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Code), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u539F\u59CB User-Agent </h3><div class="bg-muted p-4 rounded-lg"><pre class="text-sm font-mono text-foreground whitespace-pre-wrap">${ssrInterpolate(userAgent.value)}</pre></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F User-Agent \u89E3\u6790\uFF1F </h2><p class="text-muted-foreground mb-4"> User-Agent \u662F HTTP \u8BF7\u6C42\u5934\u7684\u4E00\u90E8\u5206\uFF0C\u5305\u542B\u4E86\u5BA2\u6237\u7AEF\u7684\u4FE1\u606F\uFF0C\u5982\u6D4F\u89C8\u5668\u7C7B\u578B\u3001\u64CD\u4F5C\u7CFB\u7EDF\u3001\u8BBE\u5907\u578B\u53F7\u7B49\u3002 User-Agent \u89E3\u6790\u5DE5\u5177\u53EF\u4EE5\u63D0\u53D6\u8FD9\u4E9B\u4FE1\u606F\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u4E86\u89E3\u8BBF\u95EE\u8005\u4F7F\u7528\u7684\u8BBE\u5907\u548C\u6D4F\u89C8\u5668\uFF0C\u4ECE\u800C\u4F18\u5316\u7F51\u7AD9\u7684\u517C\u5BB9\u6027\u548C\u7528\u6237\u4F53\u9A8C\u3002 </p><p class="text-muted-foreground mb-4"> \u901A\u8FC7\u89E3\u6790 User-Agent \u5B57\u7B26\u4E32\uFF0C\u6211\u4EEC\u53EF\u4EE5\u83B7\u53D6\u4EE5\u4E0B\u4FE1\u606F\uFF1A </p><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li>\u6D4F\u89C8\u5668\u540D\u79F0\u548C\u7248\u672C\uFF08Chrome\u3001Firefox\u3001Safari\u7B49\uFF09</li><li>\u64CD\u4F5C\u7CFB\u7EDF\u7C7B\u578B\u548C\u7248\u672C\uFF08Windows\u3001macOS\u3001Linux\u3001Android\u3001iOS\u7B49\uFF09</li><li>\u8BBE\u5907\u7C7B\u578B\uFF08\u684C\u9762\u3001\u79FB\u52A8\u8BBE\u5907\u3001\u5E73\u677F\u7535\u8111\u7B49\uFF09</li><li>\u6E32\u67D3\u5F15\u64CE\u4FE1\u606F\uFF08WebKit\u3001Gecko\u3001Trident\u7B49\uFF09</li><li>\u662F\u5426\u4E3A\u673A\u5668\u4EBA\u6216\u722C\u866B</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u7CBE\u51C6\u8BC6\u522B</strong>: \u51C6\u786E\u8BC6\u522B\u4E3B\u6D41\u6D4F\u89C8\u5668\u3001\u64CD\u4F5C\u7CFB\u7EDF\u548C\u8BBE\u5907\u7C7B\u578B</li><li><strong>\u673A\u5668\u4EBA\u68C0\u6D4B</strong>: \u8BC6\u522B\u641C\u7D22\u5F15\u64CE\u722C\u866B\u548C\u5176\u4ED6\u81EA\u52A8\u5316\u7A0B\u5E8F</li><li><strong>\u5B89\u5168\u5206\u6790</strong>: \u68C0\u6D4B\u9690\u79C1\u6D4F\u89C8\u6A21\u5F0F\u548C VPN/\u4EE3\u7406\u4F7F\u7528\u60C5\u51B5</li><li><strong>\u7279\u6027\u652F\u6301</strong>: \u5206\u6790\u6D4F\u89C8\u5668\u5BF9\u73B0\u4EE3 Web \u7279\u6027\u7684\u652F\u6301\u60C5\u51B5</li><li><strong>\u5386\u53F2\u8BB0\u5F55</strong>: \u4FDD\u5B58\u89E3\u6790\u5386\u53F2\uFF0C\u65B9\u4FBF\u91CD\u590D\u67E5\u770B</li><li><strong>\u5B9E\u65F6\u89E3\u6790</strong>: \u8F93\u5165 User-Agent \u5B57\u7B26\u4E32\u5373\u65F6\u83B7\u5F97\u89E3\u6790\u7ED3\u679C</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4F7F\u7528\u573A\u666F </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u7F51\u7AD9\u517C\u5BB9\u6027\u6D4B\u8BD5</strong>: \u4E86\u89E3\u8BBF\u95EE\u8005\u4F7F\u7528\u7684\u6D4F\u89C8\u5668\u548C\u8BBE\u5907\uFF0C\u9488\u5BF9\u6027\u4F18\u5316\u7F51\u7AD9</li><li><strong>\u6570\u636E\u5206\u6790</strong>: \u7EDF\u8BA1\u7F51\u7AD9\u8BBF\u95EE\u8005\u7684\u8BBE\u5907\u5206\u5E03\uFF0C\u6307\u5BFC\u4EA7\u54C1\u51B3\u7B56</li><li><strong>\u5B89\u5168\u9632\u62A4</strong>: \u8BC6\u522B\u6076\u610F\u722C\u866B\u548C\u5F02\u5E38\u8BBF\u95EE\u884C\u4E3A</li><li><strong>\u5E7F\u544A\u6295\u653E</strong>: \u6839\u636E\u8BBE\u5907\u548C\u6D4F\u89C8\u5668\u7C7B\u578B\u5B9A\u5411\u6295\u653E\u5E7F\u544A</li><li><strong>\u7528\u6237\u4F53\u9A8C\u4F18\u5316</strong>: \u9488\u5BF9\u4E0D\u540C\u8BBE\u5907\u63D0\u4F9B\u6700\u4F73\u7684\u754C\u9762\u548C\u529F\u80FD</li><li><strong>\u5F00\u53D1\u8C03\u8BD5</strong>: \u5FEB\u901F\u6D4B\u8BD5\u4E0D\u540C User-Agent \u4E0B\u7684\u7F51\u7AD9\u8868\u73B0</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">User-Agent \u89E3\u6790\u51C6\u786E\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> User-Agent \u89E3\u6790\u7684\u51C6\u786E\u6027\u53D6\u51B3\u4E8E User-Agent \u5B57\u7B26\u4E32\u672C\u8EAB\u3002\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u89E3\u6790\u662F\u51C6\u786E\u7684\uFF0C \u4F46\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0CUser-Agent \u5B57\u7B26\u4E32\u53EF\u4EE5\u88AB\u7528\u6237\u6216\u7A0B\u5E8F\u4F2A\u9020\uFF0C\u56E0\u6B64\u4E0D\u80FD\u5B8C\u5168\u4F9D\u8D56\u5B83\u6765\u505A\u5B89\u5168\u51B3\u7B56\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u9700\u8981\u89E3\u6790 User-Agent\uFF1F</h3><p class="text-muted-foreground mt-1"> \u89E3\u6790 User-Agent \u6709\u52A9\u4E8E\u4E86\u89E3\u7F51\u7AD9\u8BBF\u95EE\u8005\u7684\u8BBE\u5907\u548C\u6D4F\u89C8\u5668\u5206\u5E03\uFF0C\u8FD9\u5BF9\u4E8E\u7F51\u7AD9\u4F18\u5316\u3001\u517C\u5BB9\u6027\u6D4B\u8BD5\u548C\u7528\u6237\u4F53\u9A8C\u6539\u8FDB\u975E\u5E38\u91CD\u8981\u3002 \u540C\u65F6\u4E5F\u53EF\u4EE5\u7528\u4E8E\u8BC6\u522B\u673A\u5668\u4EBA\u6D41\u91CF\uFF0C\u4FDD\u62A4\u7F51\u7AD9\u514D\u53D7\u6076\u610F\u722C\u866B\u7684\u5F71\u54CD\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u83B7\u53D6\u5F53\u524D\u6D4F\u89C8\u5668\u7684 User-Agent\uFF1F</h3><p class="text-muted-foreground mt-1"> \u60A8\u53EF\u4EE5\u4F7F\u7528\u6D4F\u89C8\u5668\u5F00\u53D1\u8005\u5DE5\u5177\u67E5\u770B User-Agent\uFF0C\u6216\u8005\u5728 JavaScript \u4E2D\u901A\u8FC7 navigator.userAgent \u83B7\u53D6\u3002 \u6211\u4EEC\u7684\u5DE5\u5177\u4E5F\u63D0\u4F9B\u4E86&quot;\u4F7F\u7528\u5F53\u524D\u6D4F\u89C8\u5668\u7684 User-Agent&quot;\u6309\u94AE\uFF0C\u4E00\u952E\u83B7\u53D6\u5E76\u89E3\u6790\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">User-Agent \u4F1A\u5F71\u54CD\u7F51\u7AD9\u663E\u793A\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u662F\u7684\uFF0C\u8BB8\u591A\u7F51\u7AD9\u4F1A\u6839\u636E User-Agent \u63D0\u4F9B\u4E0D\u540C\u7684\u5185\u5BB9\u6216\u754C\u9762\u3002\u8FD9\u79CD\u505A\u6CD5\u79F0\u4E3A&quot;User-Agent \u55C5\u63A2&quot;\u3002 \u867D\u7136\u6709\u65F6\u6709\u7528\uFF0C\u4F46\u66F4\u597D\u7684\u505A\u6CD5\u662F\u4F7F\u7528\u7279\u6027\u68C0\u6D4B\u800C\u4E0D\u662F\u4F9D\u8D56 User-Agent \u6765\u51B3\u5B9A\u529F\u80FD\u652F\u6301\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon] || iconMap.default), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon] || iconMap.default), { class: "w-5 h-5 text-primary" })),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/user-agent-parser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=user-agent-parser-DT-tWPGX.mjs.map
