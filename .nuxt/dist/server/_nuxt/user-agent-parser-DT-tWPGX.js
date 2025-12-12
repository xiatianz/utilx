import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderVNode, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta, e as addRecentTool } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { Monitor, Globe, Settings, History, Info, List, Zap, CheckCircle, XCircle, Lightbulb, AlertTriangle, Shield, Code, HelpCircle, ChevronUp, Github, ShieldCheck, Compass, House, Sparkles, Search, Replace, Link, Check, FileCode, FileSignature, Palette, Image, Terminal, Package, FileJson, Type, FileDiff, Regex, Activity, Timer, Calculator, Clock, Calendar, Database, FileText, Lock, Hash, Key, Wifi } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "user-agent-parser",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "User-Agent解析工具 - 在线浏览器识别与设备检测",
      meta: [
        { name: "description", content: "免费在线User-Agent解析工具，识别浏览器类型、操作系统、设备信息，支持机器人检测和安全分析。帮助开发者优化网站兼容性和用户体验。" },
        { name: "keywords", content: "User-Agent解析,浏览器检测,操作系统识别,设备类型检测,机器人识别,UA解析,浏览器识别,设备检测" }
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
          title: "过时的浏览器",
          message: "检测到过时的 Internet Explorer 版本，建议升级到现代浏览器"
        });
      }
      if (parsed.value.device.type === "mobile") {
        hints2.push({
          type: "info",
          title: "移动设备",
          message: "检测到移动设备访问，建议确保网站具有响应式设计"
        });
      }
      if (parsed.value.device.type === "tablet") {
        hints2.push({
          type: "info",
          title: "平板设备",
          message: "检测到平板设备访问，需要优化触摸交互体验"
        });
      }
      if (parsed.value.bot) {
        hints2.push({
          type: "warning",
          title: "机器人访问",
          message: "检测到机器人或爬虫访问，请确保正确处理 robots.txt"
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
        return "刚刚";
      } else if (diff < 36e5) {
        return `${Math.floor(diff / 6e4)}分钟前`;
      } else if (diff < 864e5) {
        return `${Math.floor(diff / 36e5)}小时前`;
      } else {
        return date.toLocaleDateString();
      }
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">User-Agent解析工具 - 在线浏览器识别与设备检测</h1><p class="text-muted-foreground">专业的User-Agent解析工具，准确识别浏览器类型、操作系统、设备信息，支持机器人检测和安全分析。帮助开发者优化网站兼容性和用户体验。</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Monitor), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` User-Agent 输入 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">User-Agent 字符串</label><textarea placeholder="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm text-foreground" rows="4">${ssrInterpolate(userAgent.value)}</textarea></div><div><label class="block text-sm font-medium text-foreground mb-2">快速示例</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="">选择示例...</option><option value="chrome-windows">Chrome on Windows</option><option value="safari-mac">Safari on macOS</option><option value="firefox-linux">Firefox on Linux</option><option value="chrome-android">Chrome on Android</option><option value="safari-ios">Safari on iOS</option><option value="edge-windows">Edge on Windows</option><option value="bot-google">Googlebot</option><option value="bot-bing">Bingbot</option><option value="python-requests">Python Requests</option><option value="java-http">Java HTTP Client</option></select></div><button class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Globe), { class: "h-5 w-5 mr-2" }, null, _parent));
      _push(` 使用当前浏览器的 User-Agent </button></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 解析选项 </h2><div class="space-y-3"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(parseOptions.value.detailed) ? ssrLooseContain(parseOptions.value.detailed, null) : parseOptions.value.detailed) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary bg-background"><span class="ml-2 text-sm text-foreground">显示详细信息</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(parseOptions.value.showHints) ? ssrLooseContain(parseOptions.value.showHints, null) : parseOptions.value.showHints) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary bg-background"><span class="ml-2 text-sm text-foreground">显示提示信息</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(parseOptions.value.showSecurity) ? ssrLooseContain(parseOptions.value.showSecurity, null) : parseOptions.value.showSecurity) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary bg-background"><span class="ml-2 text-sm text-foreground">显示安全信息</span></label></div></div>`);
      if (history.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center justify-between text-foreground"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 解析历史 </span><button class="text-sm text-destructive hover:text-destructive/80"> 清除 </button></h2><div class="space-y-2"><!--[-->`);
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
        _push(` 基本信息 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">浏览器</div><div class="text-lg font-semibold flex items-center text-foreground">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getBrowserIconComponent(parsed.value.browser.name)), { class: "h-6 w-6 mr-2" }, null), _parent);
        _push(` ${ssrInterpolate(parsed.value.browser.name)}</div><div class="text-sm text-muted-foreground">版本: ${ssrInterpolate(parsed.value.browser.version)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">操作系统</div><div class="text-lg font-semibold flex items-center text-foreground">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getOSIconComponent(parsed.value.os.name)), { class: "h-6 w-6 mr-2" }, null), _parent);
        _push(` ${ssrInterpolate(parsed.value.os.name)}</div><div class="text-sm text-muted-foreground">版本: ${ssrInterpolate(parsed.value.os.version)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">设备类型</div><div class="text-lg font-semibold text-foreground">${ssrInterpolate(parsed.value.device.type || "未知")}</div><div class="text-sm text-muted-foreground">品牌: ${ssrInterpolate(parsed.value.device.brand || "未知")}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">引擎</div><div class="text-lg font-semibold text-foreground">${ssrInterpolate(parsed.value.engine.name || "未知")}</div><div class="text-sm text-muted-foreground">版本: ${ssrInterpolate(parsed.value.engine.version || "未知")}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsed.value && parseOptions.value.detailed) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(List), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 详细信息 </h3><div class="space-y-4"><div><h4 class="text-sm font-medium text-foreground mb-2">浏览器信息</h4><div class="grid grid-cols-2 gap-2 text-sm"><div class="flex justify-between py-1"><span class="text-muted-foreground">名称:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.browser.name)}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">版本:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.browser.version)}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">主版本:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.browser.major || "未知")}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">类型:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.browser.type || "未知")}</span></div></div></div><div><h4 class="text-sm font-medium text-foreground mb-2">操作系统信息</h4><div class="grid grid-cols-2 gap-2 text-sm"><div class="flex justify-between py-1"><span class="text-muted-foreground">名称:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.os.name)}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">版本:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.os.version)}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">平台:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.os.platform || "未知")}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">架构:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.os.architecture || "未知")}</span></div></div></div><div><h4 class="text-sm font-medium text-foreground mb-2">设备信息</h4><div class="grid grid-cols-2 gap-2 text-sm"><div class="flex justify-between py-1"><span class="text-muted-foreground">类型:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.device.type || "未知")}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">品牌:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.device.brand || "未知")}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">型号:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.device.model || "未知")}</span></div><div class="flex justify-between py-1"><span class="text-muted-foreground">识别码:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.device.identifier || "未知")}</span></div></div></div>`);
        if (parsed.value.cpu) {
          _push(`<div><h4 class="text-sm font-medium text-foreground mb-2">CPU 信息</h4><div class="grid grid-cols-2 gap-2 text-sm"><div class="flex justify-between py-1"><span class="text-muted-foreground">架构:</span><span class="font-medium text-foreground">${ssrInterpolate(parsed.value.cpu.architecture || "未知")}</span></div></div></div>`);
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
        _push(` 特性支持 </h3><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
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
        _push(` 提示信息 </h3><div class="space-y-3"><!--[-->`);
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
        _push(` 安全信息 </h3><div class="space-y-3"><div class="flex items-center justify-between p-3 bg-muted rounded-lg"><span class="text-sm font-medium text-foreground">是否为机器人</span><span class="${ssrRenderClass([
          "px-2 py-1 text-xs rounded-full",
          parsed.value.bot ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
        ])}">${ssrInterpolate(parsed.value.bot ? "是" : "否")}</span></div>`);
        if (parsed.value.bot) {
          _push(`<div class="p-3 bg-yellow-100/20 dark:bg-yellow-900/30 rounded-lg"><div class="text-sm font-medium text-yellow-800 dark:text-yellow-300 mb-1">机器人信息</div><div class="text-sm text-muted-foreground"><p>名称: ${ssrInterpolate(parsed.value.bot.name || "未知")}</p>`);
          if (parsed.value.bot.url) {
            _push(`<p>URL: ${ssrInterpolate(parsed.value.bot.url)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (parsed.value.bot.producer) {
            _push(`<p>生产者: ${ssrInterpolate(parsed.value.bot.producer)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center justify-between p-3 bg-muted rounded-lg"><span class="text-sm font-medium text-foreground">隐私浏览模式</span><span class="${ssrRenderClass([
          "px-2 py-1 text-xs rounded-full",
          hasPrivacyMode.value ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
        ])}">${ssrInterpolate(hasPrivacyMode.value ? "可能" : "否")}</span></div><div class="flex items-center justify-between p-3 bg-muted rounded-lg"><span class="text-sm font-medium text-foreground">VPN/代理检测</span><span class="${ssrRenderClass([
          "px-2 py-1 text-xs rounded-full",
          hasVPN.value ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
        ])}">${ssrInterpolate(hasVPN.value ? "可能使用" : "未检测到")}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (parsed.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Code), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 原始 User-Agent </h3><div class="bg-muted p-4 rounded-lg"><pre class="text-sm font-mono text-foreground whitespace-pre-wrap">${ssrInterpolate(userAgent.value)}</pre></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 User-Agent 解析？ </h2><p class="text-muted-foreground mb-4"> User-Agent 是 HTTP 请求头的一部分，包含了客户端的信息，如浏览器类型、操作系统、设备型号等。 User-Agent 解析工具可以提取这些信息，帮助开发者了解访问者使用的设备和浏览器，从而优化网站的兼容性和用户体验。 </p><p class="text-muted-foreground mb-4"> 通过解析 User-Agent 字符串，我们可以获取以下信息： </p><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li>浏览器名称和版本（Chrome、Firefox、Safari等）</li><li>操作系统类型和版本（Windows、macOS、Linux、Android、iOS等）</li><li>设备类型（桌面、移动设备、平板电脑等）</li><li>渲染引擎信息（WebKit、Gecko、Trident等）</li><li>是否为机器人或爬虫</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>精准识别</strong>: 准确识别主流浏览器、操作系统和设备类型</li><li><strong>机器人检测</strong>: 识别搜索引擎爬虫和其他自动化程序</li><li><strong>安全分析</strong>: 检测隐私浏览模式和 VPN/代理使用情况</li><li><strong>特性支持</strong>: 分析浏览器对现代 Web 特性的支持情况</li><li><strong>历史记录</strong>: 保存解析历史，方便重复查看</li><li><strong>实时解析</strong>: 输入 User-Agent 字符串即时获得解析结果</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 使用场景 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>网站兼容性测试</strong>: 了解访问者使用的浏览器和设备，针对性优化网站</li><li><strong>数据分析</strong>: 统计网站访问者的设备分布，指导产品决策</li><li><strong>安全防护</strong>: 识别恶意爬虫和异常访问行为</li><li><strong>广告投放</strong>: 根据设备和浏览器类型定向投放广告</li><li><strong>用户体验优化</strong>: 针对不同设备提供最佳的界面和功能</li><li><strong>开发调试</strong>: 快速测试不同 User-Agent 下的网站表现</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">User-Agent 解析准确吗？</h3><p class="text-muted-foreground mt-1"> User-Agent 解析的准确性取决于 User-Agent 字符串本身。大多数情况下解析是准确的， 但需要注意的是，User-Agent 字符串可以被用户或程序伪造，因此不能完全依赖它来做安全决策。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么需要解析 User-Agent？</h3><p class="text-muted-foreground mt-1"> 解析 User-Agent 有助于了解网站访问者的设备和浏览器分布，这对于网站优化、兼容性测试和用户体验改进非常重要。 同时也可以用于识别机器人流量，保护网站免受恶意爬虫的影响。 </p></div><div><h3 class="text-lg font-semibold text-foreground">如何获取当前浏览器的 User-Agent？</h3><p class="text-muted-foreground mt-1"> 您可以使用浏览器开发者工具查看 User-Agent，或者在 JavaScript 中通过 navigator.userAgent 获取。 我们的工具也提供了&quot;使用当前浏览器的 User-Agent&quot;按钮，一键获取并解析。 </p></div><div><h3 class="text-lg font-semibold text-foreground">User-Agent 会影响网站显示吗？</h3><p class="text-muted-foreground mt-1"> 是的，许多网站会根据 User-Agent 提供不同的内容或界面。这种做法称为&quot;User-Agent 嗅探&quot;。 虽然有时有用，但更好的做法是使用特性检测而不是依赖 User-Agent 来决定功能支持。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=user-agent-parser-DT-tWPGX.js.map
