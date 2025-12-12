import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { useRouter } from "vue-router";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta, e as addRecentTool } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { Wifi, Search, ChevronDown, Loader2, Zap, History, Server, Download, Copy, GitBranch, HelpCircle, ChevronUp, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Type, Clock, Shield, Lock, FileText } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "dns-lookup",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useSeoMeta({
      title: "DNS查询 - 在线DNS记录查询工具",
      meta: [
        { name: "description", content: "免费在线DNS查询工具，支持A、AAAA、CNAME、MX、TXT等多种DNS记录类型查询，可自定义DNS服务器。" },
        { name: "keywords", content: "DNS查询,DNS记录,A记录,AAAA记录,CNAME记录,MX记录,TXT记录,NS记录" }
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
        label: "A记录",
        value: "A",
        description: "将域名指向IPv4地址"
      },
      {
        label: "AAAA记录",
        value: "AAAA",
        description: "将域名指向IPv6地址"
      },
      {
        label: "CNAME记录",
        value: "CNAME",
        description: "将域名指向另一个域名"
      },
      {
        label: "MX记录",
        value: "MX",
        description: "指定邮件服务器"
      },
      {
        label: "TXT记录",
        value: "TXT",
        description: "存储文本信息，常用于验证"
      },
      {
        label: "NS记录",
        value: "NS",
        description: "指定域名服务器"
      },
      {
        label: "SOA记录",
        value: "SOA",
        description: "起始授权机构记录"
      },
      {
        label: "PTR记录",
        value: "PTR",
        description: "反向DNS解析"
      },
      {
        label: "SRV记录",
        value: "SRV",
        description: "服务定位记录"
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><div class="flex items-center gap-4 mb-4"><div class="p-3 bg-primary/10 rounded-lg">`);
      _push(ssrRenderComponent(unref(Wifi), { class: "h-8 w-8 text-primary" }, null, _parent));
      _push(`</div><h1 class="text-3xl font-bold text-foreground">DNS查询 - 在线DNS记录查询工具</h1></div><p class="text-muted-foreground"> 免费在线DNS查询工具，支持A、AAAA、CNAME、MX、TXT等多种DNS记录类型查询。可自定义DNS服务器，提供详细的DNS解析结果，帮助您诊断域名解析问题。 </p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` DNS查询 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">域名</label><input${ssrRenderAttr("value", domain.value)} type="text" placeholder="例如: google.com" class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></div><div><label class="block text-sm font-medium text-foreground mb-2">记录类型</label><div class="grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(recordTypes, (type) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-2 text-sm rounded-md border transition-colors",
          selectedTypes.value.includes(type.value) ? "bg-primary/10 border-primary text-primary" : "bg-background border-border text-foreground hover:bg-muted"
        ])}">${ssrInterpolate(type.label)}</button>`);
      });
      _push(`<!--]--></div></div><div><label class="block text-sm font-medium text-foreground mb-2">DNS服务器</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="system"${ssrIncludeBooleanAttr(Array.isArray(dnsServer.value) ? ssrLooseContain(dnsServer.value, "system") : ssrLooseEqual(dnsServer.value, "system")) ? " selected" : ""}>系统默认</option><option value="8.8.8.8"${ssrIncludeBooleanAttr(Array.isArray(dnsServer.value) ? ssrLooseContain(dnsServer.value, "8.8.8.8") : ssrLooseEqual(dnsServer.value, "8.8.8.8")) ? " selected" : ""}>Google (8.8.8.8)</option><option value="1.1.1.1"${ssrIncludeBooleanAttr(Array.isArray(dnsServer.value) ? ssrLooseContain(dnsServer.value, "1.1.1.1") : ssrLooseEqual(dnsServer.value, "1.1.1.1")) ? " selected" : ""}>Cloudflare (1.1.1.1)</option><option value="208.67.222.222"${ssrIncludeBooleanAttr(Array.isArray(dnsServer.value) ? ssrLooseContain(dnsServer.value, "208.67.222.222") : ssrLooseEqual(dnsServer.value, "208.67.222.222")) ? " selected" : ""}>OpenDNS (208.67.222.222)</option><option value="114.114.114.114"${ssrIncludeBooleanAttr(Array.isArray(dnsServer.value) ? ssrLooseContain(dnsServer.value, "114.114.114.114") : ssrLooseEqual(dnsServer.value, "114.114.114.114")) ? " selected" : ""}>114DNS (114.114.114.114)</option><option value="223.5.5.5"${ssrIncludeBooleanAttr(Array.isArray(dnsServer.value) ? ssrLooseContain(dnsServer.value, "223.5.5.5") : ssrLooseEqual(dnsServer.value, "223.5.5.5")) ? " selected" : ""}>阿里DNS (223.5.5.5)</option></select></div><div><button class="w-full text-left px-3 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors text-sm flex items-center justify-between"><span>高级选项</span>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        class: ["h-4 w-4 transition-transform", showAdvanced.value ? "rotate-180" : ""]
      }, null, _parent));
      _push(`</button>`);
      if (showAdvanced.value) {
        _push(`<div class="mt-3 space-y-3"><div><label class="block text-xs text-muted-foreground mb-1">超时时间 (秒)</label><input${ssrRenderAttr("value", timeout.value)} type="number" min="1" max="30" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.traceRoute) ? ssrLooseContain(options.value.traceRoute, null) : options.value.traceRoute) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">追踪解析路径</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.includeDetails) ? ssrLooseContain(options.value.includeDetails, null) : options.value.includeDetails) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">显示详细信息</span></label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button${ssrIncludeBooleanAttr(!domain.value || selectedTypes.value.length === 0 || loading.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (loading.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(loading.value ? "查询中..." : "查询DNS")}</button></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Zap), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 快速查询 </h2><div class="grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(quickPresets, (preset) => {
        _push(`<button class="px-3 py-2 text-sm bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors">${ssrInterpolate(preset.domain)}</button>`);
      });
      _push(`<!--]--></div></div>`);
      if (history.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold text-foreground mb-4 flex items-center justify-between"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 查询历史 </span><button class="text-sm text-destructive hover:text-destructive/80"> 清除 </button></h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(history.value, (item) => {
          _push(`<button class="w-full text-left px-3 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors"><div class="font-medium text-foreground">${ssrInterpolate(item.domain)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(item.types.join(", "))} • ${ssrInterpolate(formatTime(item.time))}</div></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-6">`);
      if (dnsResults.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-semibold text-foreground flex items-center">`);
        _push(ssrRenderComponent(unref(Server), { class: "h-6 w-6 mr-2 text-primary" }, null, _parent));
        _push(` DNS记录 - ${ssrInterpolate(domain.value)}</h3><div class="flex space-x-2"><button class="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors flex items-center text-sm">`);
        _push(ssrRenderComponent(unref(Download), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` 导出 </button><button class="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors flex items-center text-sm">`);
        _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` 复制 </button></div></div><div class="border-b border-border"><nav class="-mb-px flex space-x-8"><!--[-->`);
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
            _push(`<span class="text-sm text-muted-foreground">优先级: ${ssrInterpolate(record.priority)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="font-mono text-sm text-foreground break-all">${ssrInterpolate(record.value)}</div></div><button class="ml-4 p-2 text-muted-foreground hover:text-foreground">`);
          _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4" }, null, _parent));
          _push(`</button></div>`);
          if (options.value.includeDetails && record.details) {
            _push(`<div class="mt-3 pt-3 border-t border-border"><div class="grid grid-cols-2 gap-2 text-sm"><div><span class="text-muted-foreground">查询服务器:</span><span class="ml-2 text-foreground">${ssrInterpolate(record.server)}</span></div><div><span class="text-muted-foreground">响应时间:</span><span class="ml-2 text-foreground">${ssrInterpolate(record.responseTime)}ms</span></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
        if (options.value.traceRoute && traceRoute.value.length > 0) {
          _push(`<div class="mt-6 pt-6 border-t border-border"><h4 class="font-medium text-foreground mb-4 flex items-center">`);
          _push(ssrRenderComponent(unref(GitBranch), { class: "h-4 w-4 mr-2 text-primary" }, null, _parent));
          _push(` 解析路径 </h4><div class="space-y-2"><!--[-->`);
          ssrRenderList(traceRoute.value, (step, index) => {
            _push(`<div class="flex items-center space-x-3 p-2 bg-muted rounded"><div class="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-medium">${ssrInterpolate(index + 1)}</div><div class="flex-1"><div class="text-sm font-medium text-foreground">${ssrInterpolate(step.server)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(step.ip)} • ${ssrInterpolate(step.time)}ms</div></div></div>`);
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
      _push(` DNS记录类型说明 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(recordTypesInfo, (type) => {
        _push(`<div class="p-4 bg-muted rounded-lg"><h4 class="font-medium text-foreground mb-1">${ssrInterpolate(type.label)} (${ssrInterpolate(type.value)})</h4><p class="text-sm text-muted-foreground">${ssrInterpolate(type.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="p-6 mb-12 bg-card border border-border rounded-lg relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 DNS 查询？ </h2><p class="text-muted-foreground mb-4"> DNS (Domain Name System) 是互联网的电话簿，它将易于记忆的域名转换为计算机使用的 IP 地址。 当您在浏览器中输入网址时，DNS 服务器会查找对应的 IP 地址，然后将您连接到正确的网站。 DNS 查询工具可以帮助您诊断域名解析问题，查看域名的各种 DNS 记录。 </p><p class="text-muted-foreground"> 通过 DNS 查询，您可以获取域名的 A 记录（IPv4 地址）、AAAA 记录（IPv6 地址）、CNAME 记录（别名）、 MX 记录（邮件服务器）、TXT 记录（文本信息）等多种类型的 DNS 记录。这些信息对于网站管理员、 开发者和网络故障排查人员来说都非常重要。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用 DNS 查询工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>在输入框中输入要查询的域名（如 google.com）</li><li>选择要查询的 DNS 记录类型（可多选）</li><li>选择使用的 DNS 服务器（默认使用系统 DNS）</li><li>点击&quot;查询DNS&quot;按钮或按回车键开始查询</li><li>查看查询结果，包括记录值、TTL、优先级等信息</li><li>可以导出或复制查询结果，便于后续分析</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> DNS 记录类型详解 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>A 记录</strong>: 将域名指向 IPv4 地址，是最常见的记录类型</li><li><strong>AAAA 记录</strong>: 将域名指向 IPv6 地址，用于 IPv6 网络</li><li><strong>CNAME 记录</strong>: 将域名指向另一个域名（别名记录）</li><li><strong>MX 记录</strong>: 指定邮件服务器，包含优先级设置</li><li><strong>TXT 记录</strong>: 存储文本信息，常用于域名验证、SPF 记录等</li><li><strong>NS 记录</strong>: 指定域名的权威 DNS 服务器</li><li><strong>SOA 记录</strong>: 起始授权机构记录，包含域名的管理信息</li><li><strong>PTR 记录</strong>: 反向 DNS 解析，将 IP 地址解析为域名</li><li><strong>SRV 记录</strong>: 服务定位记录，指定服务的位置和端口</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">DNS 查询失败的可能原因是什么？</h3><p class="text-muted-foreground mt-1"> DNS 查询失败可能由多种原因导致：域名不存在、域名未正确配置、DNS 服务器故障、 网络连接问题、防火墙阻止 DNS 查询等。建议使用不同的 DNS 服务器重试， 或使用 whois 工具检查域名的注册状态。 </p></div><div><h3 class="text-lg font-semibold text-foreground">什么是 TTL？</h3><p class="text-muted-foreground mt-1"> TTL (Time To Live) 是 DNS 记录的生存时间，以秒为单位。它决定了 DNS 记录在 本地缓存中的保存时间。较短的 TTL 可以让更改更快生效，但会增加 DNS 查询的负载； 较长的 TTL 可以减少查询次数，但更改生效会较慢。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么要选择不同的 DNS 服务器？</h3><p class="text-muted-foreground mt-1"> 不同的 DNS 服务器可能返回不同的结果，特别是在使用了 CDN 或地理负载均衡的情况下。 使用多个 DNS 服务器可以帮助您验证 DNS 配置的正确性，诊断 DNS 传播问题。 一些 DNS 服务器还提供额外的功能，如恶意网站过滤、家长控制等。 </p></div><div><h3 class="text-lg font-semibold text-foreground">DNS 查询和 Ping 有什么区别？</h3><p class="text-muted-foreground mt-1"> DNS 查询是获取域名对应的 IP 地址，而 Ping 是测试与目标主机的网络连接性。 DNS 查询只进行域名解析，不发送数据包到目标主机；Ping 则会发送 ICMP 数据包 测试网络延迟和连通性。通常先进行 DNS 查询获取 IP 地址，然后再使用 Ping 测试连接。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=dns-lookup-C9xPN77E.js.map
