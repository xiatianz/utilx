import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderVNode } from "vue/server-renderer";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta, e as addRecentTool } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { Radar, Loader2, Search, Activity, History, BarChart, List, ShieldCheck, AlertCircle, HelpCircle, ChevronUp, Terminal, Shield, Timer, Hash, Link, Database, Code, FileText, Lock, Server, Globe, Wifi } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "port-checker",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "端口扫描器 - 在线端口状态检测工具",
      meta: [
        { name: "description", content: "免费在线端口扫描工具，检测指定主机的端口开放状态，支持常见端口和自定义端口范围扫描。本地计算，数据安全。" },
        { name: "keywords", content: "端口扫描,端口检测,网络扫描,开放端口,端口状态,网络安全,在线扫描工具" }
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
        return "刚刚";
      } else if (diff < 36e5) {
        return `${Math.floor(diff / 6e4)}分钟前`;
      } else if (diff < 864e5) {
        return `${Math.floor(diff / 36e5)}小时前`;
      } else {
        return date.toLocaleDateString();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">端口扫描器 - 在线端口状态检测工具</h1><p class="text-muted-foreground">一款免费的在线端口扫描工具。快速检测指定主机或IP地址的端口开放状态，支持常见端口扫描和自定义端口范围。纯本地计算，数据安全可靠。</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Radar), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 扫描配置 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">目标主机</label><input${ssrRenderAttr("value", targetHost.value)} type="text" placeholder="example.com 或 192.168.1.1" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}></div><div><label class="block text-sm font-medium text-foreground mb-2">扫描类型</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}><option value="common"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "common") : ssrLooseEqual(scanType.value, "common")) ? " selected" : ""}>常见端口</option><option value="web"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "web") : ssrLooseEqual(scanType.value, "web")) ? " selected" : ""}>Web 服务端口</option><option value="mail"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "mail") : ssrLooseEqual(scanType.value, "mail")) ? " selected" : ""}>邮件服务端口</option><option value="ftp"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "ftp") : ssrLooseEqual(scanType.value, "ftp")) ? " selected" : ""}>FTP 服务端口</option><option value="database"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "database") : ssrLooseEqual(scanType.value, "database")) ? " selected" : ""}>数据库端口</option><option value="custom"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "custom") : ssrLooseEqual(scanType.value, "custom")) ? " selected" : ""}>自定义端口</option><option value="range"${ssrIncludeBooleanAttr(Array.isArray(scanType.value) ? ssrLooseContain(scanType.value, "range") : ssrLooseEqual(scanType.value, "range")) ? " selected" : ""}>端口范围</option></select></div>`);
      if (scanType.value === "custom") {
        _push(`<div class="space-y-2"><label class="block text-sm font-medium text-foreground">自定义端口</label><input${ssrRenderAttr("value", customPorts.value)} type="text" placeholder="80,443,8080" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}><p class="text-xs text-muted-foreground">多个端口用逗号分隔</p></div>`);
      } else if (scanType.value === "range") {
        _push(`<div class="space-y-2"><label class="block text-sm font-medium text-foreground">端口范围</label><div class="flex space-x-2"><input${ssrRenderAttr("value", startPort.value)} type="number" min="1" max="65535" placeholder="起始端口" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}><input${ssrRenderAttr("value", endPort.value)} type="number" min="1" max="65535" placeholder="结束端口" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="block text-sm font-medium text-foreground mb-2">超时时间 (秒)</label><input${ssrRenderAttr("value", timeout.value)} type="number" min="1" max="10" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}></div><div><label class="block text-sm font-medium text-foreground mb-2">快速示例</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(scanning.value) ? " disabled" : ""}><option value="">选择示例...</option><option value="google">google.com</option><option value="github">github.com</option><option value="local">本地主机</option></select></div><button${ssrIncludeBooleanAttr(!targetHost.value || scanning.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (scanning.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(scanning.value ? "扫描中..." : "开始扫描")}</button></div></div>`);
      if (scanning.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
        _push(ssrRenderComponent(unref(Activity), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 扫描进度 </h2><div class="space-y-4"><div><div class="flex justify-between text-sm mb-1"><span class="text-foreground">进度</span><span class="text-foreground">${ssrInterpolate(scanProgress.value)}%</span></div><div class="w-full bg-muted rounded-full h-2"><div class="bg-primary h-2 rounded-full transition-all duration-300" style="${ssrRenderStyle({ width: scanProgress.value + "%" })}"></div></div></div><div class="text-sm text-muted-foreground"><p>已扫描: ${ssrInterpolate(scannedPorts.value)} / ${ssrInterpolate(totalPorts.value)}</p><p>开放端口: ${ssrInterpolate(openPorts.value)}</p><p>当前端口: ${ssrInterpolate(currentPort.value || "-")}</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (scanHistory.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold text-foreground mb-4 flex items-center justify-between"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 扫描历史 </span><button class="text-sm text-destructive hover:text-destructive/90"> 清除 </button></h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(scanHistory.value, (item, index) => {
          _push(`<button class="w-full text-left px-3 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors"><div class="flex items-center justify-between"><span class="text-sm font-medium text-foreground">${ssrInterpolate(item.host)}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(formatTime(item.time))}</span></div><div class="text-xs text-muted-foreground"> 端口: ${ssrInterpolate(item.type)} | 开放: ${ssrInterpolate(item.openCount)}</div></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-6">`);
      if (scanResult.value && scanResult.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
        _push(ssrRenderComponent(unref(BarChart), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 扫描结果统计 </h3><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><div class="p-4 bg-muted rounded-lg text-center"><div class="text-2xl font-bold text-foreground">${ssrInterpolate(totalScanned.value)}</div><div class="text-sm text-muted-foreground">已扫描</div></div><div class="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg text-center"><div class="text-2xl font-bold text-green-600 dark:text-green-400">${ssrInterpolate(scanResult.value.filter((p) => p.status === "open").length)}</div><div class="text-sm text-muted-foreground">开放</div></div><div class="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg text-center"><div class="text-2xl font-bold text-red-600 dark:text-red-400">${ssrInterpolate(scanResult.value.filter((p) => p.status === "closed").length)}</div><div class="text-sm text-muted-foreground">关闭</div></div><div class="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg text-center"><div class="text-2xl font-bold text-yellow-600 dark:text-yellow-400">${ssrInterpolate(scanResult.value.filter((p) => p.status === "filtered").length)}</div><div class="text-sm text-muted-foreground">过滤</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border border-border rounded-lg"><div class="p-6 border-b border-border"><div class="flex items-center justify-between"><h3 class="text-lg font-semibold text-foreground flex items-center">`);
      _push(ssrRenderComponent(unref(List), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 端口列表 </h3><div class="flex items-center space-x-2"><select class="px-3 py-1 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="all"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "all") : ssrLooseEqual(filterStatus.value, "all")) ? " selected" : ""}>全部</option><option value="open"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "open") : ssrLooseEqual(filterStatus.value, "open")) ? " selected" : ""}>仅开放</option><option value="closed"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "closed") : ssrLooseEqual(filterStatus.value, "closed")) ? " selected" : ""}>仅关闭</option><option value="filtered"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "filtered") : ssrLooseEqual(filterStatus.value, "filtered")) ? " selected" : ""}>仅过滤</option></select><button class="px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors"> 导出 </button></div></div></div><div class="overflow-x-auto"><table class="min-w-full divide-y divide-border"><thead class="bg-muted/50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">端口</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">状态</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">服务</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">响应时间</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">描述</th></tr></thead><tbody class="divide-y divide-border"><!--[-->`);
      ssrRenderList(filteredResults.value, (port) => {
        _push(`<tr class="hover:bg-muted/20"><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">${ssrInterpolate(port.number)}</td><td class="px-6 py-4 whitespace-nowrap"><span class="${ssrRenderClass([
          "px-2 py-1 text-xs rounded-full font-medium",
          port.status === "open" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : port.status === "closed" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
        ])}">${ssrInterpolate(port.status === "open" ? "开放" : port.status === "closed" ? "关闭" : "过滤")}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">${ssrInterpolate(port.service || "-")}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">${ssrInterpolate(port.responseTime || "-")}ms </td><td class="px-6 py-4 text-sm text-muted-foreground">${ssrInterpolate(port.description || "-")}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
      if (openPortsList.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
        _push(ssrRenderComponent(unref(ShieldCheck), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 开放端口详情 </h3><div class="space-y-4"><!--[-->`);
        ssrRenderList(openPortsList.value, (port) => {
          _push(`<div class="p-4 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/20"><div class="flex items-center justify-between mb-2"><span class="font-medium text-foreground">端口 ${ssrInterpolate(port.number)}</span><span class="text-sm text-muted-foreground">${ssrInterpolate(port.service)}</span></div><p class="text-sm text-muted-foreground">${ssrInterpolate(port.description)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-destructive">`);
        _push(ssrRenderComponent(unref(AlertCircle), { class: "h-5 w-5 mr-2" }, null, _parent));
        _push(` 扫描失败 </h3><div class="bg-destructive/10 dark:bg-destructive/20 border border-destructive/20 rounded-lg p-4"><p class="text-destructive">${ssrInterpolate(error.value)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 bg-card border border-border rounded-lg relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是端口扫描？ </h2><p class="text-muted-foreground mb-4"> 端口扫描是一种网络安全技术，用于检查目标主机上哪些端口是开放的、关闭的或被防火墙过滤的。 每个端口号对应一种特定的网络服务，例如端口80用于HTTP（网页服务），端口443用于HTTPS（安全网页服务）， 端口22用于SSH（远程登录）等。通过端口扫描，系统管理员可以了解网络服务的运行状态，安全专家可以发现潜在的安全风险。 </p><p class="text-muted-foreground"> 本工具提供在线端口扫描功能，无需安装任何软件，只需在浏览器中输入目标主机地址即可快速检测端口状态。 扫描结果会显示每个端口的开放状态、服务类型和响应时间，帮助您全面了解目标主机的网络服务情况。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用端口扫描器 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>在目标主机输入框中输入域名或IP地址（如 google.com 或 192.168.1.1）</li><li>选择扫描类型：常见端口、Web服务、邮件服务、数据库或自定义端口</li><li>如果选择自定义，可以输入特定的端口号或端口范围</li><li>点击&quot;开始扫描&quot;按钮，等待扫描完成</li><li>查看扫描结果，了解各端口的状态和服务信息</li><li>可以导出扫描结果为CSV格式，便于保存和分析</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 端口状态说明 </h2><div class="space-y-3 text-muted-foreground mb-6"><div class="flex items-start"><div class="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></div><div><strong class="text-foreground">开放 (Open)</strong>：表示端口正在监听连接，可以建立通信。这通常意味着有相应的服务在该端口上运行。 </div></div><div class="flex items-start"><div class="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3"></div><div><strong class="text-foreground">关闭 (Closed)</strong>：表示端口虽然可达，但没有程序在监听。主机响应了扫描请求，但明确表示不接受连接。 </div></div><div class="flex items-start"><div class="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3"></div><div><strong class="text-foreground">过滤 (Filtered)</strong>：表示无法确定端口状态，可能被防火墙或其他网络设备阻止。扫描请求没有得到响应。 </div></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见端口号 </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"><div class="bg-muted p-4 rounded-lg"><h3 class="font-semibold text-foreground mb-2">Web服务</h3><ul class="text-sm text-muted-foreground space-y-1"><li>20/21 - FTP (文件传输协议)</li><li>22 - SSH (安全外壳协议)</li><li>23 - Telnet (远程终端)</li><li>25 - SMTP (邮件传输)</li><li>53 - DNS (域名系统)</li><li>80 - HTTP (网页服务)</li><li>110 - POP3 (邮局协议)</li><li>143 - IMAP (消息访问协议)</li><li>443 - HTTPS (安全网页服务)</li><li>993 - IMAPS (安全IMAP)</li><li>995 - POP3S (安全POP3)</li></ul></div><div class="bg-muted p-4 rounded-lg"><h3 class="font-semibold text-foreground mb-2">数据库服务</h3><ul class="text-sm text-muted-foreground space-y-1"><li>3306 - MySQL/MariaDB</li><li>5432 - PostgreSQL</li><li>1433 - Microsoft SQL Server</li><li>1521 - Oracle Database</li><li>27017 - MongoDB</li><li>6379 - Redis</li><li>11211 - Memcached</li></ul></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 安全提示 </h2><div class="bg-muted p-4 rounded-lg mb-6"><ul class="list-disc list-inside text-muted-foreground space-y-2"><li>仅扫描您拥有或获得授权的主机，未经授权的端口扫描可能违反法律法规</li><li>开放端口可能存在安全风险，建议定期检查并关闭不必要的服务端口</li><li>使用防火墙限制对敏感端口的访问，仅允许必要的IP地址连接</li><li>保持系统和服务的最新版本，及时修复已知的安全漏洞</li><li>为重要服务使用强密码和双因素认证</li></ul></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">端口扫描合法吗？</h3><p class="text-muted-foreground mt-1"> 端口扫描的合法性取决于扫描的目标和目的。扫描自己拥有的服务器或获得明确授权的网络是完全合法的。 然而，扫描未经授权的第三方网络可能被视为非法入侵行为。在使用本工具前，请确保您有权扫描目标主机。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么某些端口显示为&quot;过滤&quot;状态？</h3><p class="text-muted-foreground mt-1"> &quot;过滤&quot;状态表示扫描请求被防火墙、路由器或其他网络安全设备阻止，无法确定端口是否开放。 这可能是出于安全考虑，管理员配置了防火墙规则来隐藏某些端口的状态。 </p></div><div><h3 class="text-lg font-semibold text-foreground">扫描速度可以调整吗？</h3><p class="text-muted-foreground mt-1"> 本工具为了确保扫描的准确性和避免对目标主机造成过大负载，使用了适中的扫描速度。 过快的扫描可能导致请求被目标主机拒绝或被防火墙识别为攻击行为。我们提供了超时时间设置， 您可以根据网络环境适当调整，但建议使用默认值。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么某些开放的端口没有显示服务信息？</h3><p class="text-muted-foreground mt-1"> 本工具维护了一个常见端口号与服务类型的对应关系数据库。如果某个端口不在我们的数据库中， 就不会显示服务信息。这并不表示该端口没有服务，只是我们无法自动识别。您可以通过端口号 在互联网上查询相关信息，或使用专业的网络扫描工具进行更深入的探测。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=port-checker-D6Y7Wa0F.js.map
