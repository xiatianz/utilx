import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta, e as addRecentTool } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { Wifi, Loader2, Search, Globe, User, History, Info, Copy, MapPin, Server, Clock, Map, HelpCircle, ChevronUp, Activity, Link, Database, Shield, FileText } from "lucide-vue-next";
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
  __name: "ip-info",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "IP信息查询 - 在线IP地址定位与分析工具",
      meta: [
        { name: "description", content: "免费的在线IP地址查询工具，支持IP地理位置查询、ISP信息获取、网络段分析。提供精准的IP定位服务，支持IPv4和IPv6地址查询，帮助您快速了解IP地址的详细信息。" },
        { name: "keywords", content: "IP查询,IP地址,地理位置,ISP,IPv4,IPv6,网络工具,IP定位,域名解析" }
      ]
    });
    const tool = tools.find((t) => t.id === "ip-info");
    categories.find((c) => c.id === "network");
    const ipAddress = ref("");
    const loading = ref(false);
    const ipInfo = ref(null);
    const myIpInfo = ref(null);
    const myIpLoading = ref(false);
    const history = ref([]);
    ref(-1);
    const isSeoContentVisible = ref(true);
    const iconMap = {
      FileText,
      Shield,
      Database,
      Link,
      Activity,
      Wifi,
      Globe,
      Search
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "ip-info"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "dns-lookup"),
        tools.find((t) => t.id === "port-checker"),
        tools.find((t) => t.id === "ssl-checker"),
        tools.find((t) => t.id === "ping-test")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const ipPresets = [
      { ip: "8.8.8.8", name: "Google DNS" },
      { ip: "1.1.1.1", name: "Cloudflare DNS" },
      { ip: "114.114.114.114", name: "114 DNS" },
      { ip: "223.5.5.5", name: "阿里 DNS" }
    ];
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">IP信息查询 - 在线IP地址定位与分析工具</h1><p class="text-muted-foreground">免费的在线IP地址查询工具，支持IP地理位置查询、ISP信息获取、网络段分析。提供精准的IP定位服务，支持IPv4和IPv6地址查询，帮助您快速了解IP地址的详细信息。</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Wifi), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` IP地址查询 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">输入IP地址或域名</label><input${ssrRenderAttr("value", ipAddress.value)} type="text" placeholder="例如: 8.8.8.8 或 util.cn" class="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><p class="mt-1 text-xs text-muted-foreground"> 支持IPv4、IPv6地址或域名查询 </p></div><div><label class="block text-sm font-medium text-foreground mb-2">快速选择</label><div class="grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(ipPresets, (preset) => {
        _push(`<button class="px-3 py-2 text-sm bg-muted hover:bg-muted/80 text-foreground rounded-md transition-colors text-left"><div class="font-medium">${ssrInterpolate(preset.ip)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(preset.name)}</div></button>`);
      });
      _push(`<!--]--></div></div><button${ssrIncludeBooleanAttr(!ipAddress.value || loading.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (loading.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(loading.value ? "查询中..." : "查询IP信息")}</button></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Globe), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 当前IP信息 </h2><button${ssrIncludeBooleanAttr(myIpLoading.value) ? " disabled" : ""} class="w-full bg-secondary text-secondary-foreground py-2 px-4 rounded-md hover:bg-secondary/80 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (myIpLoading.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(User), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(myIpLoading.value ? "获取中..." : "获取我的IP")}</button>`);
      if (myIpInfo.value) {
        _push(`<div class="mt-4 space-y-2"><div class="flex justify-between text-sm"><span class="text-muted-foreground">IP地址:</span><span class="font-medium text-foreground">${ssrInterpolate(myIpInfo.value.ip)}</span></div><div class="flex justify-between text-sm"><span class="text-muted-foreground">位置:</span><span class="font-medium text-foreground">${ssrInterpolate(myIpInfo.value.location)}</span></div><div class="flex justify-between text-sm"><span class="text-muted-foreground">ISP:</span><span class="font-medium text-foreground">${ssrInterpolate(myIpInfo.value.isp)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (history.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center justify-between"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 查询历史 </span><button class="text-sm text-destructive hover:text-destructive/80"> 清除 </button></h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(history.value, (item) => {
          _push(`<button class="w-full text-left px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors"><div class="font-medium text-foreground">${ssrInterpolate(item.ip)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(item.location)} • ${ssrInterpolate(formatTime(item.time))}</div></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2">`);
      if (ipInfo.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-semibold flex items-center">`);
        _push(ssrRenderComponent(unref(Info), { class: "h-6 w-6 mr-2 text-primary" }, null, _parent));
        _push(` IP详细信息 </h3><button class="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-md transition-colors flex items-center text-sm">`);
        _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` 复制信息 </button></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(unref(Globe), { class: "h-4 w-4 mr-2" }, null, _parent));
        _push(` 基本信息 </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">IP地址</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.ip)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">类型</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.type)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">状态</span><span class="${ssrRenderClass([ipInfo.value.status === "valid" ? "text-green-600" : "text-destructive", "font-medium"])}">${ssrInterpolate(ipInfo.value.status === "valid" ? "有效" : "无效")}</span></div></div></div><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(unref(MapPin), { class: "h-4 w-4 mr-2" }, null, _parent));
        _push(` 地理位置 </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">国家</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.country)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">地区</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.region)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">城市</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.city)}</span></div></div></div><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(unref(Server), { class: "h-4 w-4 mr-2" }, null, _parent));
        _push(` 网络信息 </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">ISP</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.isp)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">组织</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.org)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">AS号</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.asn)}</span></div></div></div><div class="space-y-4"><h4 class="font-medium text-foreground flex items-center">`);
        _push(ssrRenderComponent(unref(Clock), { class: "h-4 w-4 mr-2" }, null, _parent));
        _push(` 时区信息 </h4><div class="space-y-2"><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">时区</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.timezone)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">当地时间</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.localTime)}</span></div><div class="flex justify-between py-2 border-b border-border"><span class="text-muted-foreground">UTC偏移</span><span class="font-medium text-foreground">${ssrInterpolate(ipInfo.value.utcOffset)}</span></div></div></div></div>`);
        if (ipInfo.value.latitude && ipInfo.value.longitude) {
          _push(`<div class="mt-6"><h4 class="font-medium text-foreground mb-4 flex items-center">`);
          _push(ssrRenderComponent(unref(Map), { class: "h-4 w-4 mr-2" }, null, _parent));
          _push(` 位置地图 </h4><div class="bg-muted rounded-lg h-64 flex items-center justify-center"><p class="text-muted-foreground">地图加载中...</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center text-center">`);
        _push(ssrRenderComponent(unref(Wifi), { class: "h-16 w-16 text-muted-foreground mb-4" }, null, _parent));
        _push(`<h3 class="text-lg font-medium text-foreground mb-2">尚未查询IP信息</h3><p class="text-muted-foreground">输入IP地址或域名，点击查询按钮获取详细信息</p></div>`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是IP地址查询？ </h2><p class="text-muted-foreground mb-4"> IP地址查询是一种通过网络工具获取特定IP地址相关信息的服务。每个连接到互联网的设备都有一个唯一的IP地址， 通过查询这个地址，我们可以获得该设备的地理位置、互联网服务提供商(ISP)、组织信息等详细数据。 </p><p class="text-muted-foreground mb-6"> IP地址查询工具对于网络安全、网络管理、内容本地化、广告定向等多种应用场景都非常有用。 无论是需要了解访问者的地理位置，还是需要分析网络流量来源，IP地址查询都能提供有价值的信息。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>在输入框中输入您要查询的IP地址（如：8.8.8.8）或域名（如：google.com）</li><li>点击&quot;查询IP信息&quot;按钮，系统将自动分析并返回结果</li><li>查看返回的详细信息，包括地理位置、ISP、组织、时区等</li><li>可以使用&quot;获取我的IP&quot;功能快速查询当前设备的IP信息</li><li>查询历史会自动保存，方便您快速访问之前查询过的IP地址</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>精确地理位置</strong>: 提供国家、地区、城市等详细的地理位置信息</li><li><strong>ISP信息查询</strong>: 显示互联网服务提供商和网络运营商信息</li><li><strong>IPv4/IPv6支持</strong>: 完全支持IPv4和IPv6地址格式</li><li><strong>域名解析</strong>: 自动将域名解析为IP地址进行查询</li><li><strong>时区信息</strong>: 显示IP地址所在时区和当地时间</li><li><strong>历史记录</strong>: 自动保存查询历史，方便快速访问</li><li><strong>批量查询</strong>: 支持快速选择常用DNS服务器IP进行查询</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">IP地址查询的准确度如何？</h3><p class="text-muted-foreground mt-1"> IP地址查询的准确度通常在国家和城市级别较高，但无法精确定位到具体的街道地址。 这是因为IP地址的分配是基于网络段，而不是物理位置。对于移动设备或使用VPN的用户， 查询结果可能显示的是VPN服务器或移动网络基站的位置。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么有些IP地址查询不到详细信息？</h3><p class="text-muted-foreground mt-1"> 某些IP地址可能是内网地址（如192.168.x.x、10.x.x.x等），这些地址只在局域网内使用， 无法通过公网查询到地理位置信息。此外，一些新分配的IP地址或特殊用途的IP段可能 还没有完整的地理位置数据。 </p></div><div><h3 class="text-lg font-semibold text-foreground">IP地址查询是否侵犯隐私？</h3><p class="text-muted-foreground mt-1"> IP地址查询工具只显示公开的网络信息，不会获取任何个人隐私数据。 查询结果中的地理位置信息是基于IP地址的网络段信息，而不是个人实际位置。 我们所有的查询都在本地完成，不会保存或上传您的查询记录。 </p></div><div><h3 class="text-lg font-semibold text-foreground">什么是AS号？</h3><p class="text-muted-foreground mt-1"> AS号（Autonomous System Number）是自治系统号码，用于标识互联网中的独立网络系统。 每个ISP或大型组织都有自己的AS号，通过AS号可以了解IP地址归属于哪个网络实体。 这对于网络路由、流量分析和网络安全非常重要。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/ip-info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ip-info-BC4G3I_z.js.map
