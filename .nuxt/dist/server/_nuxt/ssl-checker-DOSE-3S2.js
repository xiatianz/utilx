import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { useRouter } from "vue-router";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta, e as addRecentTool } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { Shield, Search, Loader2, Settings, History, FileCheck, Globe, CheckCircle, XCircle, AlertCircle, HelpCircle, ChevronUp, Fingerprint, Zap, Monitor, Hash, Link, Wifi, Clock, Lock, FileText, ShieldCheck } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "ssl-checker",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "SSL证书检查工具 - 在线SSL/TLS证书查询与验证",
      meta: [
        { name: "description", content: "免费在线SSL/TLS证书检查工具，查询证书有效期、颁发者、协议支持等信息，保障网站安全。支持证书链检查、安全头检测和TLS版本验证。" },
        { name: "keywords", content: "SSL证书,TLS证书,证书查询,HTTPS检查,证书有效期,SSL/TLS,安全配置,证书链,TLS协议" }
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
        return "刚刚";
      } else if (diff < 36e5) {
        return `${Math.floor(diff / 6e4)}分钟前`;
      } else if (diff < 864e5) {
        return `${Math.floor(diff / 36e5)}小时前`;
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
      if (daysLeft === void 0) return "未知";
      if (daysLeft < 0) return `已过期 ${Math.abs(daysLeft)} 天`;
      if (daysLeft < 7) return "即将过期";
      if (daysLeft < 30) return "30天内过期";
      return "正常";
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3 flex items-center">`);
      _push(ssrRenderComponent(unref(Shield), { class: "w-8 h-8 mr-3 text-primary" }, null, _parent));
      _push(` SSL证书检查工具 - 在线SSL/TLS证书查询与验证 </h1><p class="text-muted-foreground">免费在线SSL/TLS证书检查工具，查询证书有效期、颁发者、协议支持等信息，保障网站安全。支持证书链检查、安全头检测和TLS版本验证。</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="lg:col-span-1 space-y-4"><div class="p-6 bg-card border border-border rounded-lg"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 检查配置 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">域名或IP地址</label><input${ssrRenderAttr("value", domain.value)} type="text" placeholder="example.com" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div><div><label class="block text-sm font-medium text-foreground mb-2">端口</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option${ssrRenderAttr("value", 443)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, 443) : ssrLooseEqual(port.value, 443)) ? " selected" : ""}>443 (HTTPS)</option><option${ssrRenderAttr("value", 8443)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, 8443) : ssrLooseEqual(port.value, 8443)) ? " selected" : ""}>8443 (HTTPS Alternative)</option><option${ssrRenderAttr("value", 993)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, 993) : ssrLooseEqual(port.value, 993)) ? " selected" : ""}>993 (IMAPS)</option><option${ssrRenderAttr("value", 995)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, 995) : ssrLooseEqual(port.value, 995)) ? " selected" : ""}>995 (POP3S)</option><option${ssrRenderAttr("value", 465)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, 465) : ssrLooseEqual(port.value, 465)) ? " selected" : ""}>465 (SMTPS)</option><option${ssrRenderAttr("value", 636)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, 636) : ssrLooseEqual(port.value, 636)) ? " selected" : ""}>636 (LDAPS)</option><option${ssrRenderAttr("value", custom.value)}${ssrIncludeBooleanAttr(Array.isArray(port.value) ? ssrLooseContain(port.value, custom.value) : ssrLooseEqual(port.value, custom.value)) ? " selected" : ""}>自定义...</option></select>`);
      if (port.value === "custom") {
        _push(`<input${ssrRenderAttr("value", customPort.value)} type="number" placeholder="输入端口号" class="mt-2 w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block text-sm font-medium text-foreground mb-2">快速示例</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="">选择示例...</option><option value="google">google.com</option><option value="github">github.com</option><option value="cloudflare">cloudflare.com</option><option value="letsencrypt">letsencrypt.org</option></select></div><button${ssrIncludeBooleanAttr(!domain.value || checking.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (checking.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Shield), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(checking.value ? "检查中..." : "检查证书")}</button></div></div><div class="p-6 bg-card border border-border rounded-lg"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 检查选项 </h2><div class="space-y-3"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(checkOptions.value.chain) ? ssrLooseContain(checkOptions.value.chain, null) : checkOptions.value.chain) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary"><span class="ml-2 text-sm text-foreground">检查证书链</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(checkOptions.value.protocols) ? ssrLooseContain(checkOptions.value.protocols, null) : checkOptions.value.protocols) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary"><span class="ml-2 text-sm text-foreground">检查支持的协议</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(checkOptions.value.ciphers) ? ssrLooseContain(checkOptions.value.ciphers, null) : checkOptions.value.ciphers) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary"><span class="ml-2 text-sm text-foreground">检查加密套件</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(checkOptions.value.http2) ? ssrLooseContain(checkOptions.value.http2, null) : checkOptions.value.http2) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary"><span class="ml-2 text-sm text-foreground">检查 HTTP/2 支持</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(checkOptions.value.headers) ? ssrLooseContain(checkOptions.value.headers, null) : checkOptions.value.headers) ? " checked" : ""} type="checkbox" class="rounded border-border text-primary focus:ring-primary"><span class="ml-2 text-sm text-foreground">检查安全头</span></label></div></div>`);
      if (history.value.length > 0) {
        _push(`<div class="p-6 bg-card border border-border rounded-lg"><h2 class="text-lg font-semibold mb-4 flex items-center justify-between text-foreground"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 检查历史 </span><button class="text-sm text-destructive hover:text-destructive/90"> 清除 </button></h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(history.value, (item, index) => {
          _push(`<button class="w-full text-left px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors"><div class="flex items-center justify-between"><span class="text-sm font-medium text-foreground">${ssrInterpolate(item.domain)}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(formatTime(item.time))}</span></div><div class="text-xs text-muted-foreground mt-1">端口: ${ssrInterpolate(item.port)}</div></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-4">`);
      if (certificateInfo.value) {
        _push(`<div class="p-6 bg-card border border-border rounded-lg"><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(FileCheck), { class: "h-6 w-6 mr-2 text-primary" }, null, _parent));
        _push(` 证书信息 </h3><div class="flex items-center space-x-2"><span class="${ssrRenderClass([
          "px-3 py-1 rounded-full text-sm font-medium",
          certificateInfo.value.valid ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
        ])}">${ssrInterpolate(certificateInfo.value.valid ? "有效" : "无效")}</span>`);
        if (certificateInfo.value.daysLeft !== void 0) {
          _push(`<span class="text-sm text-muted-foreground">${ssrInterpolate(certificateInfo.value.daysLeft > 0 ? `剩余 ${certificateInfo.value.daysLeft} 天` : `已过期 ${Math.abs(certificateInfo.value.daysLeft)} 天`)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div><h4 class="text-sm font-medium text-foreground mb-3">基本信息</h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">域名:</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(certificateInfo.value.subject)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">颁发者:</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(certificateInfo.value.issuer)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">版本:</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(certificateInfo.value.version)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">序列号:</span><span class="font-mono text-xs text-foreground">${ssrInterpolate(certificateInfo.value.serialNumber)}</span></div></div></div><div><h4 class="text-sm font-medium text-foreground mb-3">有效期</h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">颁发时间:</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(formatDate(certificateInfo.value.validFrom))}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">过期时间:</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(formatDate(certificateInfo.value.validTo))}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">有效期:</span><span class="text-sm font-medium text-foreground">${ssrInterpolate(certificateInfo.value.validityDays)} 天</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-sm text-muted-foreground">状态:</span><span class="${ssrRenderClass([
          "text-sm font-medium",
          getValidityStatusClass(certificateInfo.value.daysLeft)
        ])}">${ssrInterpolate(getValidityStatusText(certificateInfo.value.daysLeft))}</span></div></div></div></div>`);
        if (certificateInfo.value.san && certificateInfo.value.san.length > 0) {
          _push(`<div class="mb-6"><h4 class="text-sm font-medium text-foreground mb-3">SAN 域名列表</h4><div class="flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(certificateInfo.value.san, (san) => {
            _push(`<span class="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">${ssrInterpolate(san)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (checkOptions.value.chain && certificateInfo.value.chain) {
          _push(`<div class="mb-6"><h4 class="text-sm font-medium text-foreground mb-3">证书链</h4><div class="space-y-3"><!--[-->`);
          ssrRenderList(certificateInfo.value.chain, (cert, index) => {
            _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-2"><span class="text-sm font-medium text-foreground">级别 ${ssrInterpolate(index + 1)}</span>`);
            if (index === 0) {
              _push(`<span class="text-xs px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded"> 终端实体证书 </span>`);
            } else if (index === certificateInfo.value.chain.length - 1) {
              _push(`<span class="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded"> 根证书 </span>`);
            } else {
              _push(`<span class="text-xs px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded"> 中间证书 </span>`);
            }
            _push(`</div><div class="text-sm text-muted-foreground"><p>主体: ${ssrInterpolate(cert.subject)}</p><p>颁发者: ${ssrInterpolate(cert.issuer)}</p></div></div>`);
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
        _push(` TLS/SSL 协议支持 </h3><div class="grid grid-cols-2 md:grid-cols-3 gap-4"><!--[-->`);
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
        _push(` 安全头检查 </h3><div class="overflow-x-auto"><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">安全头</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">状态</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">值</th></tr></thead><tbody class="divide-y divide-border"><!--[-->`);
        ssrRenderList(securityHeaders.value, (header) => {
          _push(`<tr><td class="px-6 py-4 text-sm font-medium text-foreground">${ssrInterpolate(header.name)}</td><td class="px-6 py-4"><span class="${ssrRenderClass([
            "px-2 py-1 text-xs rounded-full",
            header.present ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          ])}">${ssrInterpolate(header.present ? "存在" : "缺失")}</span></td><td class="px-6 py-4 text-sm text-muted-foreground">${ssrInterpolate(header.value || "-")}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div class="p-6 bg-card border border-border rounded-lg"><h3 class="text-lg font-semibold mb-4 flex items-center text-destructive">`);
        _push(ssrRenderComponent(unref(AlertCircle), { class: "h-5 w-5 mr-2" }, null, _parent));
        _push(` 检查失败 </h3><div class="bg-destructive/10 border border-destructive/20 rounded-lg p-4"><p class="text-destructive">${ssrInterpolate(error.value)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 SSL/TLS 证书？ </h2><p class="text-muted-foreground mb-4"> SSL (Secure Sockets Layer) 和其继任者 TLS (Transport Layer Security) 是 cryptographic protocols， 旨在为网络通信提供安全性和数据完整性。SSL/TLS 证书是数字证书，用于验证网站的身份并启用加密连接。 当您访问使用 HTTPS 的网站时，您的浏览器会检查网站的 SSL/TLS 证书以确保连接是安全的。 </p><p class="text-muted-foreground mb-4"> SSL/TLS 证书包含公钥、证书颁发机构 (CA) 的信息、域名、有效期等信息。通过检查 SSL 证书， 您可以验证网站的真实性，确保您正在与正确的服务器通信，而不是与恶意中间人通信。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 为什么需要检查 SSL 证书？ </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>安全保障</strong>：确保网站使用有效的 SSL/TLS 证书，保护数据传输安全</li><li><strong>身份验证</strong>：验证网站身份，防止钓鱼攻击和中间人攻击</li><li><strong>证书管理</strong>：及时发现即将过期的证书，避免服务中断</li><li><strong>合规要求</strong>：满足 PCI DSS、GDPR 等合规性要求</li><li><strong>SEO 优化</strong>：搜索引擎优先收录 HTTPS 网站</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>在输入框中输入要检查的域名或 IP 地址</li><li>选择端口号（默认为 443）</li><li>根据需要选择检查选项（证书链、协议支持、安全头等）</li><li>点击&quot;检查证书&quot;按钮开始检查</li><li>查看检查结果，包括证书信息、协议支持和安全配置</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">SSL 证书检查需要多长时间？</h3><p class="text-muted-foreground mt-1"> 通常只需要几秒钟。检查时间取决于网络延迟和服务器的响应速度。 我们的工具会在浏览器中执行检查，不会将您的查询发送到第三方服务器。 </p></div><div><h3 class="text-lg font-semibold text-foreground">证书过期前多久应该更新？</h3><p class="text-muted-foreground mt-1"> 建议在证书过期前至少 30 天开始更新流程。一些组织和证书颁发机构（如 Let&#39;s Encrypt） 甚至建议在过期前 60 天进行更新，以确保有足够的时间处理任何可能出现的问题。 </p></div><div><h3 class="text-lg font-semibold text-foreground">什么是证书链？</h3><p class="text-muted-foreground mt-1"> 证书链是一系列证书的集合，从网站的 SSL 证书开始，到受信任的根证书结束。 它建立了信任链，确保网站的证书是由受信任的证书颁发机构签发的。 完整的证书链有助于确保所有浏览器和设备都能正确验证证书。 </p></div><div><h3 class="text-lg font-semibold text-foreground">TLS 1.3 有什么优势？</h3><p class="text-muted-foreground mt-1"> TLS 1.3 是最新版本的 TLS 协议，相比之前的版本有以下优势： 更快的握手过程（减少了一个往返时间）、更强的安全性（移除了不安全的加密算法）、 更好的前向保密性、简化的协议设计减少了潜在的安全漏洞。 </p></div><div><h3 class="text-lg font-semibold text-foreground">什么是安全头？为什么重要？</h3><p class="text-muted-foreground mt-1"> 安全头是 HTTP 响应头，用于告诉浏览器如何处理网站的内容和连接。 重要的安全头包括 HSTS（强制 HTTPS）、X-Frame-Options（防止点击劫持）、 CSP（内容安全策略）等。这些头有助于防止各种 Web 攻击，提高网站的整体安全性。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=ssl-checker-DOSE-3S2.js.map
