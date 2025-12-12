import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, resolveComponent, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { HelpCircle, ChevronUp, XCircle, CheckCircle, AlertCircle, Calendar, Phone, Mail, MapPin, Link2, Globe2, Clock, Lock, Shield, Wifi, Layers, FileText, Server, User, Building, Info, Copy, Download, History, List, Search, Globe } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "whois-lookup",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "WHOIS查询 - 在线域名WHOIS信息查询工具",
      meta: [
        { name: "description", content: "免费在线WHOIS查询工具，查询域名的注册信息、注册商、DNS服务器、到期时间等详细信息。支持批量查询，数据本地处理，安全可靠。" },
        { name: "keywords", content: "WHOIS,域名查询,域名信息,注册商,DNS,域名到期,批量查询,域名WHOIS" }
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
        name: "DNS查询",
        description: "查询域名的DNS记录，包括A、MX、NS、CNAME等记录类型",
        icon: "Wifi"
      },
      {
        id: "ip-info",
        name: "IP地址查询",
        description: "查询IP地址的地理位置、运营商、网络类型等信息",
        icon: "Globe2"
      },
      {
        id: "ssl-checker",
        name: "SSL证书查询",
        description: "检查网站的SSL证书状态、有效期、颁发机构等信息",
        icon: "Shield"
      },
      {
        id: "port-checker",
        name: "端口扫描",
        description: "扫描指定主机的端口开放状态，支持常见端口和自定义端口",
        icon: "Link2"
      }
    ];
    const getStatusClass = (status) => {
      switch (status) {
        case "已注册":
          return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
        case "可注册":
          return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
        case "查询失败":
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
      const _component_Icon = resolveComponent("Icon");
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">WHOIS查询 - 在线域名WHOIS信息查询工具</h1><p class="text-muted-foreground">免费在线WHOIS查询工具，查询域名的注册信息、注册商、DNS服务器、到期时间等详细信息。支持批量查询，数据本地处理，安全可靠。</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="lg:col-span-1 space-y-6"><div class="bg-card p-6 rounded-lg border border-border"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:search",
        class: "h-5 w-5 mr-2 text-primary"
      }, null, _parent));
      _push(` 域名查询 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">输入域名</label><div class="flex space-x-2"><input${ssrRenderAttr("value", domain.value)} type="text" placeholder="例如: google.com" class="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><select class="px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value=""${ssrIncludeBooleanAttr(Array.isArray(tld.value) ? ssrLooseContain(tld.value, "") : ssrLooseEqual(tld.value, "")) ? " selected" : ""}>.com</option><option value=".cn"${ssrIncludeBooleanAttr(Array.isArray(tld.value) ? ssrLooseContain(tld.value, ".cn") : ssrLooseEqual(tld.value, ".cn")) ? " selected" : ""}>.cn</option><option value=".net"${ssrIncludeBooleanAttr(Array.isArray(tld.value) ? ssrLooseContain(tld.value, ".net") : ssrLooseEqual(tld.value, ".net")) ? " selected" : ""}>.net</option><option value=".org"${ssrIncludeBooleanAttr(Array.isArray(tld.value) ? ssrLooseContain(tld.value, ".org") : ssrLooseEqual(tld.value, ".org")) ? " selected" : ""}>.org</option><option value=".io"${ssrIncludeBooleanAttr(Array.isArray(tld.value) ? ssrLooseContain(tld.value, ".io") : ssrLooseEqual(tld.value, ".io")) ? " selected" : ""}>.io</option><option value=".ai"${ssrIncludeBooleanAttr(Array.isArray(tld.value) ? ssrLooseContain(tld.value, ".ai") : ssrLooseEqual(tld.value, ".ai")) ? " selected" : ""}>.ai</option></select></div><p class="mt-1 text-xs text-muted-foreground"> 输入域名，可省略顶级域名 </p></div><div><label class="block text-sm font-medium text-foreground mb-2">热门域名</label><div class="grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(domainPresets, (preset) => {
        _push(`<button class="px-3 py-2 text-sm bg-muted hover:bg-muted/80 text-muted-foreground rounded-md transition-colors">${ssrInterpolate(preset.domain)}</button>`);
      });
      _push(`<!--]--></div></div><div><label class="block text-sm font-medium text-foreground mb-2">查询选项</label><div class="space-y-2"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.includeRaw) ? ssrLooseContain(options.value.includeRaw, null) : options.value.includeRaw) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-muted-foreground">显示原始数据</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.includeHistory) ? ssrLooseContain(options.value.includeHistory, null) : options.value.includeHistory) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-muted-foreground">包含历史记录</span></label></div></div><button${ssrIncludeBooleanAttr(!domain.value || loading.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center font-medium">`);
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
      _push(` ${ssrInterpolate(loading.value ? "查询中..." : "查询WHOIS")}</button></div></div><div class="bg-card p-6 rounded-lg border border-border"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:list",
        class: "h-5 w-5 mr-2 text-primary"
      }, null, _parent));
      _push(` 批量查询 </h2><textarea placeholder="每行一个域名
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
      _push(` ${ssrInterpolate(batchLoading.value ? "查询中..." : "批量查询")}</button></div>`);
      if (history.value.length > 0) {
        _push(`<div class="bg-card p-6 rounded-lg border border-border"><h2 class="text-lg font-semibold mb-4 flex items-center justify-between text-foreground"><span class="flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:history",
          class: "h-5 w-5 mr-2 text-primary"
        }, null, _parent));
        _push(` 查询历史 </span><button class="text-sm text-destructive hover:text-destructive/90 transition-colors"> 清除 </button></h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(history.value, (item) => {
          _push(`<button class="w-full text-left px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors"><div class="font-medium text-foreground">${ssrInterpolate(item.domain)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(item.registrar)} • ${ssrInterpolate(formatTime(item.time))}</div></button>`);
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
        _push(` WHOIS信息 - ${ssrInterpolate(whoisData.value.domain)}</h3><div class="flex space-x-2"><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors flex items-center text-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:download",
          class: "h-4 w-4 mr-1"
        }, null, _parent));
        _push(` 导出JSON </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 text-muted-foreground rounded-md transition-colors flex items-center text-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:copy",
          class: "h-4 w-4 mr-1"
        }, null, _parent));
        _push(` 复制 </button></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:globe",
          class: "h-4 w-4 mr-2 text-primary"
        }, null, _parent));
        _push(` 基本信息 </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">域名</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.domain)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">状态</span><span class="${ssrRenderClass([getStatusClass(whoisData.value.status), "font-medium px-2 py-1 rounded text-xs"])}">${ssrInterpolate(whoisData.value.status)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">注册时间</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.createdDate)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">到期时间</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.expiryDate)}</span></div></div></div><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:building",
          class: "h-4 w-4 mr-2 text-primary"
        }, null, _parent));
        _push(` 注册商信息 </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">注册商</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.registrar)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">注册商URL</span><a${ssrRenderAttr("href", whoisData.value.registrarUrl)} target="_blank" class="font-medium text-primary hover:underline">${ssrInterpolate(whoisData.value.registrarUrl)}</a></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">WHOIS服务器</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.whoisServer)}</span></div></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:user",
          class: "h-4 w-4 mr-2 text-primary"
        }, null, _parent));
        _push(` 注册人信息 </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">姓名</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.registrant.name || "隐私保护")}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">组织</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.registrant.organization || "-")}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">国家</span><span class="font-medium text-foreground">${ssrInterpolate(whoisData.value.registrant.country || "-")}</span></div></div></div><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:server",
          class: "h-4 w-4 mr-2 text-primary"
        }, null, _parent));
        _push(` DNS服务器 </h4><div class="space-y-2"><!--[-->`);
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
          _push(` 原始WHOIS数据 </h4><pre class="bg-muted p-4 rounded-lg text-sm overflow-x-auto text-muted-foreground">${ssrInterpolate(whoisData.value.rawData)}</pre></div>`);
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
        _push(` 批量查询结果 </h3><div class="overflow-x-auto"><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> 域名 </th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> 状态 </th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> 注册商 </th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> 到期时间 </th></tr></thead><tbody class="bg-card divide-y divide-border"><!--[-->`);
        ssrRenderList(batchResults.value, (result) => {
          _push(`<tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">${ssrInterpolate(result.domain)}</td><td class="px-6 py-4 whitespace-nowrap text-sm"><span class="${ssrRenderClass([getStatusClass(result.status), "px-2 inline-flex text-xs leading-5 font-semibold rounded-full"])}">${ssrInterpolate(result.status)}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">${ssrInterpolate(result.registrar || "-")}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">${ssrInterpolate(result.expiryDate || "-")}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div><button class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center font-medium">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:download",
          class: "h-4 w-4 mr-2"
        }, null, _parent));
        _push(` 导出结果 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 bg-card rounded-lg border border-border relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 WHOIS 查询？ </h2><p class="text-muted-foreground mb-4"> WHOIS 是一种用于查询域名注册信息的协议和服务。通过 WHOIS 查询，您可以获取域名的详细信息， 包括域名注册人、注册商、注册日期、到期日期、DNS 服务器等重要信息。这些信息对于网络安全、 域名交易、品牌保护等方面都有着重要的作用。 </p><p class="text-muted-foreground mb-4"> WHOIS 数据由互联网域名管理机构（ICANN）统一管理，各个域名注册商负责维护其注册域名的 WHOIS 信息。 当您注册一个域名时，您的信息会被记录在 WHOIS 数据库中，除非您启用了隐私保护服务。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>在左侧输入框中输入要查询的域名（如 google.com）</li><li>可选择顶级域名或直接输入完整域名</li><li>点击&quot;查询WHOIS&quot;按钮或按 Enter 键开始查询</li><li>查看右侧显示的域名详细信息</li><li>如需批量查询，可在批量查询框中输入多个域名（每行一个）</li><li>可以导出查询结果为 JSON 格式以便进一步分析</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> WHOIS 信息包含哪些内容？ </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>域名基本信息</strong>：域名名称、注册状态、注册日期、到期日期、最后更新日期等</li><li><strong>注册商信息</strong>：域名注册商名称、网站地址、WHOIS 服务器、联系方式等</li><li><strong>注册人信息</strong>：域名所有者的姓名、组织、邮箱、电话、地址等（可能受隐私保护）</li><li><strong>技术联系人</strong>：技术负责人的联系方式和相关信息</li><li><strong>DNS 服务器</strong>：域名使用的名称服务器列表</li><li><strong>域名状态</strong>：如 clientDeleteProhibited、clientTransferProhibited 等状态标记</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">为什么有些域名的 WHOIS 信息不完整？</h3><p class="text-muted-foreground mt-1"> 这通常是由于域名启用了隐私保护服务（Whois Privacy Protection）。注册商为了保护域名所有者的隐私， 会在 WHOIS 数据库中显示代理信息而不是真实的注册人信息。这是 ICANN 允许的合法做法。 </p></div><div><h3 class="text-lg font-semibold text-foreground">WHOIS 查询准确吗？</h3><p class="text-muted-foreground mt-1"> WHOIS 信息通常由域名注册商实时更新，但可能存在一定的延迟。一些域名信息可能需要 24-48 小时才能同步更新。 另外，不同注册商的 WHOIS 服务器可能返回不同格式的信息。 </p></div><div><h3 class="text-lg font-semibold text-foreground">可以查询所有域名后缀吗？</h3><p class="text-muted-foreground mt-1"> 我们的工具支持查询大多数主流的通用顶级域名（gTLD）和国家代码顶级域名（ccTLD）。 但某些特殊的域名后缀可能需要通过专门的 WHOIS 服务器查询。 </p></div><div><h3 class="text-lg font-semibold text-foreground">WHOIS 查询是否合法？</h3><p class="text-muted-foreground mt-1"> WHOIS 查询是完全合法的，这是互联网基础设施的一部分。但使用 WHOIS 信息进行垃圾邮件发送、 欺诈或其他非法活动是违法的。请合理使用查询到的信息。 </p></div><div><h3 class="text-lg font-semibold text-foreground">域名状态标识是什么意思？</h3><p class="text-muted-foreground mt-1"> 域名状态标识表示域名当前的锁定状态： <br>• clientDeleteProhibited - 禁止删除 <br>• clientTransferProhibited - 禁止转移 <br>• clientUpdateProhibited - 禁止更新 <br>• serverTransferProhibited - 服务器端禁止转移 这些状态通常是为了保护域名安全而设置的。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=whois-lookup-D3fL8ybx.js.map
