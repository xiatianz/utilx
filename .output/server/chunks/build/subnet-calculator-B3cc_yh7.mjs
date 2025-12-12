import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, resolveComponent, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderAttr, ssrLooseContain, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { HelpCircle, ChevronUp, FileText, Shield, Globe, Wifi } from 'lucide-vue-next';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
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
  __name: "subnet-calculator",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useSeoMeta({
      title: "\u5B50\u7F51\u8BA1\u7B97\u5668 - IP\u5B50\u7F51\u5212\u5206\u5DE5\u5177",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBF\u5B50\u7F51\u8BA1\u7B97\u5668\uFF0C\u652F\u6301CIDR\u3001\u5B50\u7F51\u63A9\u7801\u8BA1\u7B97\uFF0C\u5B50\u7F51\u5212\u5206\u3001VLSM\u8BA1\u7B97\u7B49\u529F\u80FD\u3002" },
        { name: "keywords", content: "\u5B50\u7F51\u8BA1\u7B97\u5668,IP\u8BA1\u7B97,CIDR,\u5B50\u7F51\u63A9\u7801,VLSM,\u7F51\u7EDC\u5212\u5206,IP\u5730\u5740\u8BA1\u7B97" }
      ]
    });
    const tool = tools.find((t) => t.id === "subnet-calculator");
    categories.find((c) => c.id === "network");
    const inputMode = ref("cidr");
    const cidrInput = ref("192.168.1.0/24");
    const ipInput = ref("192.168.1.0");
    const maskInput = ref("255.255.255.0");
    const subnetCount = ref(4);
    const vlsmHosts = ref("");
    const result = ref(null);
    const dividedSubnets = ref([]);
    const vlsmSubnets = ref([]);
    const isSeoContentVisible = ref(true);
    const iconMap = {
      Wifi,
      Globe,
      Shield,
      FileText,
      HelpCircle,
      ChevronUp
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "subnet-calculator"
      ).slice(0, 4);
      return sameCategory;
    });
    const commonMasks = {
      8: "255.0.0.0",
      9: "255.128.0.0",
      10: "255.192.0.0",
      11: "255.224.0.0",
      12: "255.240.0.0",
      13: "255.248.0.0",
      14: "255.252.0.0",
      15: "255.254.0.0",
      16: "255.255.0.0",
      17: "255.255.128.0",
      18: "255.255.192.0",
      19: "255.255.224.0",
      20: "255.255.240.0",
      21: "255.255.248.0",
      22: "255.255.252.0",
      23: "255.255.254.0",
      24: "255.255.255.0",
      25: "255.255.255.128",
      26: "255.255.255.192",
      27: "255.255.255.224",
      28: "255.255.255.240",
      29: "255.255.255.248",
      30: "255.255.255.252",
      31: "255.255.255.254",
      32: "255.255.255.255"
    };
    watch(maskInput, (newValue) => {
      if (inputMode.value === "mask" && ipInput.value && newValue) {
        calculateFromMask();
      }
    });
    const calculateFromCIDR = () => {
      if (!cidrInput.value || !cidrInput.value.includes("/")) {
        result.value = null;
        return;
      }
      const [ip, prefixStr] = cidrInput.value.split("/");
      const prefix = parseInt(prefixStr);
      if (isNaN(prefix) || prefix < 0 || prefix > 32) {
        result.value = null;
        return;
      }
      const mask = prefixToMask(prefix);
      calculateSubnet(ip, mask, prefix);
    };
    const calculateFromMask = () => {
      if (!ipInput.value || !maskInput.value) return;
      const prefix = maskToPrefix(maskInput.value);
      if (prefix === -1) return;
      calculateSubnet(ipInput.value, maskInput.value, prefix);
    };
    const calculateSubnet = (ip, mask, prefix) => {
      const ipParts = ip.split(".").map(Number);
      const maskParts = mask.split(".").map(Number);
      const networkParts = ipParts.map((part, i) => part & maskParts[i]);
      const network = networkParts.join(".");
      const broadcastParts = networkParts.map((part, i) => part | ~maskParts[i] & 255);
      const broadcast = broadcastParts.join(".");
      const wildcardParts = maskParts.map((part) => 255 - part);
      const wildcardMask = wildcardParts.join(".");
      const totalHosts = Math.pow(2, 32 - prefix);
      const usableHosts = totalHosts - 2;
      const firstUsableParts = [...networkParts];
      firstUsableParts[3]++;
      const firstUsable = firstUsableParts.join(".");
      const lastUsableParts = [...broadcastParts];
      lastUsableParts[3]--;
      const lastUsable = lastUsableParts.join(".");
      const ipClass = getIPClass(ipParts[0]);
      const isPrivate = isPrivateIP(ipParts);
      result.value = {
        network,
        broadcast,
        mask,
        cidr: `${network}/${prefix}`,
        prefix,
        wildcardMask,
        ipClass,
        totalHosts,
        usableHosts,
        firstUsable,
        lastUsable,
        networkType: getNetworkType(prefix),
        isPrivate
      };
    };
    const prefixToMask = (prefix) => {
      let mask = 0;
      for (let i = 0; i < prefix; i++) {
        mask |= 1 << 31 - i;
      }
      const maskParts = [];
      for (let i = 0; i < 4; i++) {
        maskParts.push(mask >>> 24 - i * 8 & 255);
      }
      return maskParts.join(".");
    };
    const maskToPrefix = (mask) => {
      const maskParts = mask.split(".").map(Number);
      let binaryMask = "";
      for (const part of maskParts) {
        binaryMask += part.toString(2).padStart(8, "0");
      }
      const match = binaryMask.match(/^1+/);
      return match ? match[0].length : -1;
    };
    const getIPClass = (firstOctet) => {
      if (firstOctet >= 1 && firstOctet <= 126) return "A";
      if (firstOctet >= 128 && firstOctet <= 191) return "B";
      if (firstOctet >= 192 && firstOctet <= 223) return "C";
      if (firstOctet >= 224 && firstOctet <= 239) return "D";
      if (firstOctet >= 240 && firstOctet <= 255) return "E";
      return "Unknown";
    };
    const isPrivateIP = (ipParts) => {
      if (ipParts[0] === 10) return true;
      if (ipParts[0] === 172 && ipParts[1] >= 16 && ipParts[1] <= 31) return true;
      if (ipParts[0] === 192 && ipParts[1] === 168) return true;
      return false;
    };
    const getNetworkType = (prefix) => {
      if (prefix >= 30) return "\u70B9\u5BF9\u70B9\u94FE\u63A5";
      if (prefix >= 24) return "\u5C0F\u578B\u7F51\u7EDC";
      if (prefix >= 16) return "\u4E2D\u578B\u7F51\u7EDC";
      if (prefix >= 8) return "\u5927\u578B\u7F51\u7EDC";
      return "\u8D85\u5927\u578B\u7F51\u7EDC";
    };
    const ipToBinary = (ip) => {
      return ip.split(".").map((part) => parseInt(part).toString(2).padStart(8, "0")).join(".");
    };
    const getNetworkBinary = (ip, mask) => {
      const ipParts = ip.split(".").map(Number);
      const maskParts = mask.split(".").map(Number);
      return ipParts.map((part, i) => (part & maskParts[i]).toString(2).padStart(8, "0")).join(".");
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    calculateFromCIDR();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = resolveComponent("Icon");
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">\u5B50\u7F51\u8BA1\u7B97\u5668 - IP\u5B50\u7F51\u5212\u5206\u4E0ECIDR\u8BA1\u7B97\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF\u5B50\u7F51\u8BA1\u7B97\u5668\u3002\u652F\u6301CIDR\u8868\u793A\u6CD5\u3001\u5B50\u7F51\u63A9\u7801\u8BA1\u7B97\u3001\u5B50\u7F51\u5212\u5206\u3001VLSM\u8BA1\u7B97\u7B49\u529F\u80FD\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u7EDD\u5BF9\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:edit",
        class: "h-5 w-5 mr-2 text-primary"
      }, null, _parent));
      _push(` \u8F93\u5165\u7F51\u7EDC\u4FE1\u606F </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u8F93\u5165\u65B9\u5F0F</label><div class="flex space-x-4"><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(inputMode.value, "cidr")) ? " checked" : ""} type="radio" value="cidr" class="mr-2 border-border text-primary focus:ring-primary"><span class="text-sm text-foreground">CIDR \u8868\u793A\u6CD5</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(inputMode.value, "mask")) ? " checked" : ""} type="radio" value="mask" class="mr-2 border-border text-primary focus:ring-primary"><span class="text-sm text-foreground">IP + \u5B50\u7F51\u63A9\u7801</span></label></div></div>`);
      if (inputMode.value === "cidr") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2">CIDR \u5730\u5740</label><input${ssrRenderAttr("value", cidrInput.value)} type="text" placeholder="192.168.1.0/24" class="w-full px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><p class="mt-1 text-xs text-muted-foreground">\u4F8B\u5982: 192.168.1.0/24</p></div>`);
      } else {
        _push(`<div class="space-y-3"><div><label class="block text-sm font-medium text-foreground mb-2">IP \u5730\u5740</label><input${ssrRenderAttr("value", ipInput.value)} type="text" placeholder="192.168.1.0" class="w-full px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div><div><label class="block text-sm font-medium text-foreground mb-2">\u5B50\u7F51\u63A9\u7801</label><div class="flex space-x-2"><input${ssrRenderAttr("value", maskInput.value)} type="text" placeholder="255.255.255.0" class="flex-1 px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><select class="px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value=""${ssrIncludeBooleanAttr(Array.isArray(maskInput.value) ? ssrLooseContain(maskInput.value, "") : ssrLooseEqual(maskInput.value, "")) ? " selected" : ""}>\u9009\u62E9...</option><!--[-->`);
        ssrRenderList(commonMasks, (mask, prefix) => {
          _push(`<option${ssrRenderAttr("value", mask)}${ssrIncludeBooleanAttr(Array.isArray(maskInput.value) ? ssrLooseContain(maskInput.value, mask) : ssrLooseEqual(maskInput.value, mask)) ? " selected" : ""}> /${ssrInterpolate(prefix)} - ${ssrInterpolate(mask)}</option>`);
        });
        _push(`<!--]--></select></div></div><button class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"> \u8BA1\u7B97 </button></div>`);
      }
      _push(`<div><label class="block text-sm font-medium text-foreground mb-2">\u5FEB\u901F\u793A\u4F8B</label><select class="w-full px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="">\u9009\u62E9\u793A\u4F8B...</option><option value="home">\u5BB6\u5EAD\u7F51\u7EDC (192.168.1.0/24)</option><option value="office">\u529E\u516C\u7F51\u7EDC (10.0.0.0/16)</option><option value="datacenter">\u6570\u636E\u4E2D\u5FC3 (172.16.0.0/12)</option><option value="large">\u5927\u578B\u5B50\u7F51 (192.168.0.0/16)</option><option value="small">\u5C0F\u578B\u5B50\u7F51 (192.168.1.0/28)</option></select></div></div></div>`);
      if (result.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:git-branch",
          class: "h-5 w-5 mr-2 text-primary"
        }, null, _parent));
        _push(` \u5B50\u7F51\u5212\u5206 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u5212\u5206\u6210</label><div class="flex space-x-2"><input${ssrRenderAttr("value", subnetCount.value)} type="number" min="2" max="256" class="flex-1 px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><span class="py-2 text-sm text-muted-foreground">\u4E2A\u5B50\u7F51</span></div></div><button${ssrIncludeBooleanAttr(!result.value || subnetCount.value < 2) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors"> \u5212\u5206\u5B50\u7F51 </button>`);
        if (dividedSubnets.value.length > 0) {
          _push(`<div class="mt-4"><div class="space-y-2"><!--[-->`);
          ssrRenderList(dividedSubnets.value, (subnet, index) => {
            _push(`<div class="p-3 bg-muted rounded-lg"><div class="text-sm font-medium text-foreground"> \u5B50\u7F51 ${ssrInterpolate(index + 1)}: ${ssrInterpolate(subnet.network)}/${ssrInterpolate(subnet.prefix)}</div><div class="text-xs text-muted-foreground mt-1"> \u7F51\u7EDC\u5730\u5740: ${ssrInterpolate(subnet.network)} | \u5E7F\u64AD\u5730\u5740: ${ssrInterpolate(subnet.broadcast)} | \u53EF\u7528IP: ${ssrInterpolate(subnet.firstUsable)} - ${ssrInterpolate(subnet.lastUsable)}</div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:layers",
        class: "h-5 w-5 mr-2 text-primary"
      }, null, _parent));
      _push(` VLSM \u8BA1\u7B97\u5668 </h2><div class="space-y-3"><div class="flex space-x-2"><input${ssrRenderAttr("value", vlsmHosts.value)} type="number" placeholder="\u4E3B\u673A\u6570\u91CF" class="flex-1 px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-sm"> \u6DFB\u52A0 </button></div>`);
      if (vlsmSubnets.value.length > 0) {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(vlsmSubnets.value, (subnet, index) => {
          _push(`<div class="flex items-center justify-between p-2 bg-muted rounded"><span class="text-sm text-foreground">${ssrInterpolate(subnet.hosts)} \u53F0\u4E3B\u673A</span><button class="text-destructive hover:text-destructive/80">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:x",
            class: "h-4 w-4"
          }, null, _parent));
          _push(`</button></div>`);
        });
        _push(`<!--]--><button class="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"> \u8BA1\u7B97 VLSM </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="space-y-6">`);
      if (result.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:info",
          class: "h-5 w-5 mr-2 text-primary"
        }, null, _parent));
        _push(` \u57FA\u672C\u4FE1\u606F </h2><div class="grid grid-cols-2 gap-4"><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground">\u7F51\u7EDC\u5730\u5740</div><div class="font-mono font-semibold text-foreground">${ssrInterpolate(result.value.network)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground">\u5E7F\u64AD\u5730\u5740</div><div class="font-mono font-semibold text-foreground">${ssrInterpolate(result.value.broadcast)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground">\u5B50\u7F51\u63A9\u7801</div><div class="font-mono font-semibold text-foreground">${ssrInterpolate(result.value.mask)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground">CIDR</div><div class="font-mono font-semibold text-foreground">${ssrInterpolate(result.value.cidr)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground">\u524D\u7F00\u957F\u5EA6</div><div class="font-mono font-semibold text-foreground">/${ssrInterpolate(result.value.prefix)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground">IP\u7C7B\u522B</div><div class="font-mono font-semibold text-foreground">${ssrInterpolate(result.value.ipClass)}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (result.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:server",
          class: "h-5 w-5 mr-2 text-primary"
        }, null, _parent));
        _push(` \u4E3B\u673A\u4FE1\u606F </h2><div class="grid grid-cols-2 gap-4"><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground">\u603B\u4E3B\u673A\u6570</div><div class="font-semibold text-foreground">${ssrInterpolate(result.value.totalHosts)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground">\u53EF\u7528\u4E3B\u673A</div><div class="font-semibold text-foreground">${ssrInterpolate(result.value.usableHosts)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground">\u8D77\u59CBIP</div><div class="font-mono font-semibold text-sm text-foreground">${ssrInterpolate(result.value.firstUsable)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground">\u7ED3\u675FIP</div><div class="font-mono font-semibold text-sm text-foreground">${ssrInterpolate(result.value.lastUsable)}</div></div></div><div class="mt-4"><label class="block text-sm font-medium text-foreground mb-2">\u53EF\u7528IP\u8303\u56F4</label><div class="p-3 bg-primary/10 rounded-lg"><p class="font-mono text-sm text-primary">${ssrInterpolate(result.value.firstUsable)} - ${ssrInterpolate(result.value.lastUsable)}</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (result.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:binary",
          class: "h-5 w-5 mr-2 text-primary"
        }, null, _parent));
        _push(` \u4E8C\u8FDB\u5236\u8868\u793A </h2><div class="space-y-3"><div><div class="text-xs text-muted-foreground mb-1">IP \u5730\u5740</div><div class="font-mono text-xs bg-muted p-2 rounded break-all text-foreground">${ssrInterpolate(ipToBinary(result.value.network))}</div></div><div><div class="text-xs text-muted-foreground mb-1">\u5B50\u7F51\u63A9\u7801</div><div class="font-mono text-xs bg-muted p-2 rounded break-all text-foreground">${ssrInterpolate(ipToBinary(result.value.mask))}</div></div><div><div class="text-xs text-muted-foreground mb-1">\u7F51\u7EDC\u5730\u5740 (\u4E8C\u8FDB\u5236)</div><div class="font-mono text-xs bg-primary/10 p-2 rounded break-all text-primary">${ssrInterpolate(getNetworkBinary(result.value.network, result.value.mask))}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (result.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:hash",
          class: "h-5 w-5 mr-2 text-primary"
        }, null, _parent));
        _push(` \u5176\u4ED6\u4FE1\u606F </h2><div class="space-y-4"><div><div class="text-xs text-muted-foreground mb-1">\u901A\u914D\u7B26\u63A9\u7801</div><div class="font-mono text-sm bg-muted p-2 rounded text-foreground">${ssrInterpolate(result.value.wildcardMask)}</div></div><div><div class="text-xs text-muted-foreground mb-1">\u7F51\u7EDC\u7C7B\u578B</div><div class="text-sm text-foreground">${ssrInterpolate(result.value.networkType)}</div></div><div><div class="text-xs text-muted-foreground mb-1">\u79C1\u6709\u5730\u5740</div><div class="text-sm text-foreground">${ssrInterpolate(result.value.isPrivate ? "\u662F" : "\u5426")}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F\u5B50\u7F51\u8BA1\u7B97\u5668\uFF1F </h2><p class="text-muted-foreground mb-4"> \u5B50\u7F51\u8BA1\u7B97\u5668\u662F\u4E00\u4E2A\u7F51\u7EDC\u7BA1\u7406\u5DE5\u5177\uFF0C\u7528\u4E8E\u8BA1\u7B97IP\u5B50\u7F51\u7684\u5404\u79CD\u4FE1\u606F\u3002\u5B83\u53EF\u4EE5\u5E2E\u52A9\u7F51\u7EDC\u7BA1\u7406\u5458\u5FEB\u901F\u786E\u5B9A\u7F51\u7EDC\u5730\u5740\u3001\u5E7F\u64AD\u5730\u5740\u3001 \u53EF\u7528IP\u8303\u56F4\u3001\u5B50\u7F51\u63A9\u7801\u7B49\u91CD\u8981\u4FE1\u606F\u3002\u901A\u8FC7\u5B50\u7F51\u5212\u5206\uFF0C\u53EF\u4EE5\u5C06\u5927\u578B\u7F51\u7EDC\u5206\u5272\u6210\u66F4\u5C0F\u7684\u5B50\u7F51\uFF0C\u63D0\u9AD8\u7F51\u7EDC\u7BA1\u7406\u6548\u7387\u548C\u5B89\u5168\u6027\u3002 </p><p class="text-muted-foreground"> CIDR\uFF08\u65E0\u7C7B\u57DF\u95F4\u8DEF\u7531\uFF09\u662F\u4E00\u79CD\u66F4\u7075\u6D3B\u7684IP\u5730\u5740\u5206\u914D\u65B9\u5F0F\uFF0C\u5B83\u4F7F\u7528\u659C\u6760\u8BB0\u6CD5\uFF08\u5982192.168.1.0/24\uFF09\u6765\u8868\u793A\u7F51\u7EDC\u5730\u5740\u548C\u524D\u7F00\u957F\u5EA6\uFF0C \u66FF\u4EE3\u4E86\u4F20\u7EDF\u7684A\u3001B\u3001C\u7C7B\u5730\u5740\u5206\u7C7B\u65B9\u5F0F\uFF0C\u4F7FIP\u5730\u5740\u7684\u5206\u914D\u66F4\u52A0\u9AD8\u6548\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u9009\u62E9\u8F93\u5165\u65B9\u5F0F\uFF1ACIDR\u8868\u793A\u6CD5\u6216IP+\u5B50\u7F51\u63A9\u7801</li><li>\u8F93\u5165\u7F51\u7EDC\u4FE1\u606F\uFF0C\u5982192.168.1.0/24</li><li>\u81EA\u52A8\u67E5\u770B\u8BA1\u7B97\u7ED3\u679C\uFF0C\u5305\u62EC\u7F51\u7EDC\u5730\u5740\u3001\u5E7F\u64AD\u5730\u5740\u3001\u53EF\u7528IP\u8303\u56F4\u7B49</li><li>\u4F7F\u7528\u5B50\u7F51\u5212\u5206\u529F\u80FD\u5C06\u5927\u7F51\u7EDC\u5206\u6210\u591A\u4E2A\u5C0F\u7F51\u7EDC</li><li>\u5C1D\u8BD5VLSM\u8BA1\u7B97\u5668\u8FDB\u884C\u53EF\u53D8\u957F\u5B50\u7F51\u63A9\u7801\u8BA1\u7B97</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>CIDR\u8BA1\u7B97</strong>: \u652F\u6301CIDR\u8868\u793A\u6CD5\u8F93\u5165\u548C\u8BA1\u7B97\uFF0C\u81EA\u52A8\u8F6C\u6362\u5B50\u7F51\u63A9\u7801</li><li><strong>\u5B50\u7F51\u5212\u5206</strong>: \u5C06\u5927\u7F51\u7EDC\u5212\u5206\u6210\u591A\u4E2A\u5C0F\u5B50\u7F51\uFF0C\u4F18\u5316\u7F51\u7EDC\u7ED3\u6784</li><li><strong>VLSM\u652F\u6301</strong>: \u53EF\u53D8\u957F\u5B50\u7F51\u63A9\u7801\u8BA1\u7B97\uFF0C\u5B9E\u73B0IP\u5730\u5740\u7684\u9AD8\u6548\u5229\u7528</li><li><strong>\u4E8C\u8FDB\u5236\u663E\u793A</strong>: \u63D0\u4F9BIP\u5730\u5740\u548C\u5B50\u7F51\u63A9\u7801\u7684\u4E8C\u8FDB\u5236\u8868\u793A\uFF0C\u5E2E\u52A9\u7406\u89E3\u7F51\u7EDC\u539F\u7406</li><li><strong>\u5FEB\u901F\u793A\u4F8B</strong>: \u5185\u7F6E\u5E38\u89C1\u7F51\u7EDC\u914D\u7F6E\u793A\u4F8B\uFF0C\u4E00\u952E\u52A0\u8F7D</li><li><strong>\u672C\u5730\u8BA1\u7B97</strong>: \u6240\u6709\u8BA1\u7B97\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u4FDD\u62A4\u6570\u636E\u9690\u79C1</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u4EC0\u4E48\u662F\u79C1\u6709IP\u5730\u5740\uFF1F</h3><p class="text-muted-foreground mt-1"> \u79C1\u6709IP\u5730\u5740\u662F\u4FDD\u7559\u7528\u4E8E\u5185\u90E8\u7F51\u7EDC\u7684IP\u5730\u5740\u6BB5\uFF0C\u4E0D\u4F1A\u5728\u4E92\u8054\u7F51\u4E0A\u8DEF\u7531\u3002\u5305\u62EC\uFF1A 10.0.0.0/8\u3001172.16.0.0/12\u3001192.168.0.0/16\u3002\u8FD9\u4E9B\u5730\u5740\u53EF\u4EE5\u5728\u4E0D\u540C\u7EC4\u7EC7\u7684\u5185\u90E8\u7F51\u7EDC\u4E2D\u91CD\u590D\u4F7F\u7528\uFF0C \u901A\u8FC7NAT\uFF08\u7F51\u7EDC\u5730\u5740\u8F6C\u6362\uFF09\u6280\u672F\u8BBF\u95EE\u4E92\u8054\u7F51\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5B50\u7F51\u63A9\u7801\u548C\u901A\u914D\u7B26\u63A9\u7801\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5B50\u7F51\u63A9\u7801\u7528\u4E8E\u533A\u5206\u7F51\u7EDC\u90E8\u5206\u548C\u4E3B\u673A\u90E8\u5206\uFF0C\u5176\u4E2D1\u8868\u793A\u7F51\u7EDC\u4F4D\uFF0C0\u8868\u793A\u4E3B\u673A\u4F4D\u3002 \u901A\u914D\u7B26\u63A9\u7801\uFF08\u4E5F\u79F0\u53CD\u5411\u63A9\u7801\uFF09\u5219\u76F8\u53CD\uFF0C0\u8868\u793A\u7F51\u7EDC\u4F4D\uFF0C1\u8868\u793A\u4E3B\u673A\u4F4D\u3002\u901A\u914D\u7B26\u63A9\u7801\u5E38\u7528\u4E8E\u8DEF\u7531\u5668\u7684\u8BBF\u95EE\u63A7\u5236\u5217\u8868\uFF08ACL\uFF09\u4E2D\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u8BA1\u7B97\u53EF\u7528\u4E3B\u673A\u6570\uFF1F</h3><p class="text-muted-foreground mt-1"> \u53EF\u7528\u4E3B\u673A\u6570 = 2^(32-\u524D\u7F00\u957F\u5EA6) - 2\u3002\u51CF\u53BB\u76842\u4E2A\u5730\u5740\u662F\u7F51\u7EDC\u5730\u5740\u548C\u5E7F\u64AD\u5730\u5740\u3002 \u4F8B\u5982\uFF0C/24\u7F51\u7EDC\u7684\u53EF\u7528\u4E3B\u673A\u6570 = 2^(32-24) - 2 = 254\u4E2A\u3002 \u5BF9\u4E8E/30\u548C/31\u7684\u7F51\u7EDC\uFF0C\u6709\u7279\u6B8A\u89C4\u5219\uFF1A/30\u7F51\u7EDC\u67092\u4E2A\u53EF\u7528\u5730\u5740\uFF0C/31\u7F51\u7EDC\u7528\u4E8E\u70B9\u5BF9\u70B9\u94FE\u63A5\u67092\u4E2A\u53EF\u7528\u5730\u5740\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4EC0\u4E48\u662FVLSM\uFF1F</h3><p class="text-muted-foreground mt-1"> VLSM\uFF08Variable Length Subnet Masking\uFF0C\u53EF\u53D8\u957F\u5B50\u7F51\u63A9\u7801\uFF09\u662F\u4E00\u79CD\u5141\u8BB8\u5728\u540C\u4E00\u7F51\u7EDC\u4E2D\u4F7F\u7528\u4E0D\u540C\u957F\u5EA6\u5B50\u7F51\u63A9\u7801\u7684\u6280\u672F\u3002 \u8FD9\u4F7F\u5F97\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u5B50\u7F51\u7684\u4E3B\u673A\u6570\u91CF\u9700\u6C42\uFF0C\u5206\u914D\u4E0D\u540C\u5927\u5C0F\u7684\u5B50\u7F51\uFF0C\u4ECE\u800C\u66F4\u9AD8\u6548\u5730\u5229\u7528IP\u5730\u5740\u7A7A\u95F4\u3002 \u4F8B\u5982\uFF0C\u53EF\u4EE5\u5C06\u4E00\u4E2A/24\u7F51\u7EDC\u5212\u5206\u6210\u4E00\u4E2A/26\u3001\u4E00\u4E2A/27\u548C\u4E24\u4E2A/28\u7684\u5B50\u7F51\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/subnet-calculator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=subnet-calculator-B3cc_yh7.mjs.map
