import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { Info, Hash, ArrowRight, Link, Type } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import QRCode from 'file:///Users/apple/Documents/code/util/node_modules/qrcode/lib/index.js';
import { f as useSeoMeta } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  __name: "qrcode-generate",
  __ssrInlineRender: true,
  setup(__props) {
    const contentType = ref("text");
    const qrContent = ref("");
    const qrCodeUrl = ref("");
    const contentTypes = [
      { label: "\u6587\u672C", value: "text" },
      { label: "\u7F51\u5740", value: "url" },
      { label: "WiFi", value: "wifi" },
      { label: "\u90AE\u4EF6", value: "email" },
      { label: "\u7535\u8BDD", value: "phone" },
      { label: "\u77ED\u4FE1", value: "sms" },
      { label: "\u540D\u7247", value: "vcard" }
    ];
    const formData = ref({
      text: "",
      url: "",
      wifi: {
        ssid: "",
        password: "",
        encryption: "WPA",
        hidden: false
      },
      email: {
        to: "",
        subject: "",
        body: ""
      },
      phone: "",
      sms: {
        to: "",
        message: ""
      },
      vcard: {
        name: "",
        organization: "",
        phone: "",
        email: "",
        url: ""
      }
    });
    const qrSettings = ref({
      size: 300,
      errorCorrectionLevel: "M",
      darkColor: "#000000",
      lightColor: "#FFFFFF",
      logo: null
    });
    const generateQRContent = computed(() => {
      switch (contentType.value) {
        case "text":
          return formData.value.text;
        case "url":
          return formData.value.url;
        case "wifi":
          const wifi = formData.value.wifi;
          if (!wifi.ssid) return "";
          const auth = wifi.encryption === "nopass" ? "nopass" : wifi.encryption;
          const wifiString = `WIFI:T:${auth};S:${wifi.ssid};P:${wifi.password};${wifi.hidden ? "H:true" : ""};`;
          return wifiString;
        case "email":
          const email = formData.value.email;
          if (!email.to) return "";
          let emailString = `mailto:${email.to}`;
          const params = [];
          if (email.subject) params.push(`subject=${encodeURIComponent(email.subject)}`);
          if (email.body) params.push(`body=${encodeURIComponent(email.body)}`);
          if (params.length > 0) emailString += `?${params.join("&")}`;
          return emailString;
        case "phone":
          return `tel:${formData.value.phone}`;
        case "sms":
          const sms = formData.value.sms;
          if (!sms.to) return "";
          const smsString = `sms:${sms.to}${sms.message ? `?body=${encodeURIComponent(sms.message)}` : ""}`;
          return smsString;
        case "vcard":
          const vcard = formData.value.vcard;
          if (!vcard.name) return "";
          return `BEGIN:VCARD
VERSION:3.0
FN:${vcard.name}
ORG:${vcard.organization || ""}
TEL:${vcard.phone || ""}
EMAIL:${vcard.email || ""}
URL:${vcard.url || ""}
END:VCARD`;
        default:
          return "";
      }
    });
    const generateQRCode = async () => {
      qrContent.value = generateQRContent.value;
      if (!qrContent.value) {
        qrCodeUrl.value = "";
        return;
      }
      try {
        const options = {
          width: qrSettings.value.size,
          height: qrSettings.value.size,
          color: {
            dark: qrSettings.value.darkColor,
            light: qrSettings.value.lightColor
          },
          errorCorrectionLevel: qrSettings.value.errorCorrectionLevel
        };
        const url = await QRCode.toDataURL(qrContent.value, options);
        qrCodeUrl.value = url;
      } catch (error) {
        console.error("\u751F\u6210\u4E8C\u7EF4\u7801\u5931\u8D25:", error);
        qrCodeUrl.value = "";
      }
    };
    watch([contentType, formData, qrSettings], () => {
      generateQRCode();
    }, { deep: true });
    useSeoMeta({
      title: "\u4E8C\u7EF4\u7801\u751F\u6210\u5668 - \u5728\u7EBFQR\u7801\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u4E8C\u7EF4\u7801\u751F\u6210\u5DE5\u5177\uFF0C\u652F\u6301\u6587\u672C\u3001\u7F51\u5740\u3001WiFi\u3001\u90AE\u4EF6\u3001\u7535\u8BDD\u3001\u77ED\u4FE1\u3001\u540D\u7247\u7B49\u591A\u79CD\u683C\u5F0F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5C3A\u5BF8\u3002",
      keywords: ["qr", "\u4E8C\u7EF4\u7801", "generator", "qrcode", "\u5728\u7EBF\u5DE5\u5177", "wifi", "vcard", "\u540D\u7247"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-1d384038><div class="mt-4 mb-8" data-v-1d384038><h1 class="text-3xl font-bold mb-3" data-v-1d384038>\u4E8C\u7EF4\u7801\u751F\u6210\u5668</h1><p class="text-muted-foreground" data-v-1d384038>\u5FEB\u901F\u751F\u6210\u4E8C\u7EF4\u7801\uFF0C\u652F\u6301\u6587\u672C\u3001\u7F51\u5740\u3001WiFi\u7B49\u591A\u79CD\u683C\u5F0F</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-1d384038><div class="space-y-4" data-v-1d384038><div class="space-y-2" data-v-1d384038><label class="text-sm font-medium" data-v-1d384038>\u5185\u5BB9\u7C7B\u578B</label><div class="flex gap-2" data-v-1d384038><!--[-->`);
      ssrRenderList(contentTypes, (type) => {
        _push(`<button class="${ssrRenderClass([contentType.value === type.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80", "px-4 py-2 rounded-md text-sm font-medium transition-colors"])}" data-v-1d384038>${ssrInterpolate(type.label)}</button>`);
      });
      _push(`<!--]--></div></div><div class="space-y-4 p-4 bg-card border rounded-lg" data-v-1d384038>`);
      if (contentType.value === "text") {
        _push(`<div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u6587\u672C\u5185\u5BB9</label><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u751F\u6210\u4E8C\u7EF4\u7801\u7684\u6587\u672C\u5185\u5BB9..." class="w-full h-32 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038>${ssrInterpolate(formData.value.text)}</textarea></div>`);
      } else {
        _push(`<!---->`);
      }
      if (contentType.value === "url") {
        _push(`<div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u7F51\u5740</label><input${ssrRenderAttr("value", formData.value.url)} type="url" placeholder="https://example.com" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div>`);
      } else {
        _push(`<!---->`);
      }
      if (contentType.value === "wifi") {
        _push(`<div class="space-y-3" data-v-1d384038><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u7F51\u7EDC\u540D\u79F0 (SSID)</label><input${ssrRenderAttr("value", formData.value.wifi.ssid)} type="text" placeholder="\u8BF7\u8F93\u5165WiFi\u540D\u79F0" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u5BC6\u7801</label><input${ssrRenderAttr("value", formData.value.wifi.password)} type="password" placeholder="\u8BF7\u8F93\u5165WiFi\u5BC6\u7801" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u52A0\u5BC6\u7C7B\u578B</label><select class="w-full px-3 py-2 border rounded-md" data-v-1d384038><option value="WPA" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(formData.value.wifi.encryption) ? ssrLooseContain(formData.value.wifi.encryption, "WPA") : ssrLooseEqual(formData.value.wifi.encryption, "WPA")) ? " selected" : ""}>WPA/WPA2</option><option value="WEP" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(formData.value.wifi.encryption) ? ssrLooseContain(formData.value.wifi.encryption, "WEP") : ssrLooseEqual(formData.value.wifi.encryption, "WEP")) ? " selected" : ""}>WEP</option><option value="nopass" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(formData.value.wifi.encryption) ? ssrLooseContain(formData.value.wifi.encryption, "nopass") : ssrLooseEqual(formData.value.wifi.encryption, "nopass")) ? " selected" : ""}>\u65E0\u5BC6\u7801</option></select></div><div class="flex items-center gap-2" data-v-1d384038><input${ssrIncludeBooleanAttr(Array.isArray(formData.value.wifi.hidden) ? ssrLooseContain(formData.value.wifi.hidden, null) : formData.value.wifi.hidden) ? " checked" : ""} type="checkbox" id="hidden" class="rounded" data-v-1d384038><label for="hidden" class="text-sm" data-v-1d384038>\u9690\u85CF\u7F51\u7EDC</label></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (contentType.value === "email") {
        _push(`<div class="space-y-3" data-v-1d384038><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u6536\u4EF6\u4EBA\u90AE\u7BB1</label><input${ssrRenderAttr("value", formData.value.email.to)} type="email" placeholder="example@email.com" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u4E3B\u9898</label><input${ssrRenderAttr("value", formData.value.email.subject)} type="text" placeholder="\u90AE\u4EF6\u4E3B\u9898" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u6B63\u6587</label><textarea placeholder="\u90AE\u4EF6\u5185\u5BB9" class="w-full h-24 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038>${ssrInterpolate(formData.value.email.body)}</textarea></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (contentType.value === "phone") {
        _push(`<div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u7535\u8BDD\u53F7\u7801</label><input${ssrRenderAttr("value", formData.value.phone)} type="tel" placeholder="+86 138 0013 8000" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div>`);
      } else {
        _push(`<!---->`);
      }
      if (contentType.value === "sms") {
        _push(`<div class="space-y-3" data-v-1d384038><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u6536\u4EF6\u4EBA\u53F7\u7801</label><input${ssrRenderAttr("value", formData.value.sms.to)} type="tel" placeholder="13800138000" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u77ED\u4FE1\u5185\u5BB9</label><textarea placeholder="\u77ED\u4FE1\u5185\u5BB9" class="w-full h-24 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038>${ssrInterpolate(formData.value.sms.message)}</textarea></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (contentType.value === "vcard") {
        _push(`<div class="space-y-3" data-v-1d384038><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u59D3\u540D</label><input${ssrRenderAttr("value", formData.value.vcard.name)} type="text" placeholder="\u5F20\u4E09" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u516C\u53F8</label><input${ssrRenderAttr("value", formData.value.vcard.organization)} type="text" placeholder="XX\u79D1\u6280\u6709\u9650\u516C\u53F8" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u7535\u8BDD</label><input${ssrRenderAttr("value", formData.value.vcard.phone)} type="tel" placeholder="13800138000" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u90AE\u7BB1</label><input${ssrRenderAttr("value", formData.value.vcard.email)} type="email" placeholder="zhangsan@example.com" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>\u7F51\u5740</label><input${ssrRenderAttr("value", formData.value.vcard.url)} type="url" placeholder="https://example.com" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4 p-4 bg-card border rounded-lg" data-v-1d384038><h3 class="font-medium" data-v-1d384038>\u4E8C\u7EF4\u7801\u8BBE\u7F6E</h3><div data-v-1d384038><label class="text-sm text-muted-foreground mb-2 block" data-v-1d384038>\u5C3A\u5BF8</label><select class="w-full px-3 py-2 border rounded-md" data-v-1d384038><option${ssrRenderAttr("value", 200)} data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.size) ? ssrLooseContain(qrSettings.value.size, 200) : ssrLooseEqual(qrSettings.value.size, 200)) ? " selected" : ""}>\u5C0F (200x200)</option><option${ssrRenderAttr("value", 300)} data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.size) ? ssrLooseContain(qrSettings.value.size, 300) : ssrLooseEqual(qrSettings.value.size, 300)) ? " selected" : ""}>\u4E2D (300x300)</option><option${ssrRenderAttr("value", 400)} data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.size) ? ssrLooseContain(qrSettings.value.size, 400) : ssrLooseEqual(qrSettings.value.size, 400)) ? " selected" : ""}>\u5927 (400x400)</option><option${ssrRenderAttr("value", 500)} data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.size) ? ssrLooseContain(qrSettings.value.size, 500) : ssrLooseEqual(qrSettings.value.size, 500)) ? " selected" : ""}>\u7279\u5927 (500x500)</option></select></div><div data-v-1d384038><label class="text-sm text-muted-foreground mb-2 block" data-v-1d384038>\u7EA0\u9519\u7EA7\u522B</label><select class="w-full px-3 py-2 border rounded-md" data-v-1d384038><option value="L" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.errorCorrectionLevel) ? ssrLooseContain(qrSettings.value.errorCorrectionLevel, "L") : ssrLooseEqual(qrSettings.value.errorCorrectionLevel, "L")) ? " selected" : ""}>\u4F4E (7%)</option><option value="M" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.errorCorrectionLevel) ? ssrLooseContain(qrSettings.value.errorCorrectionLevel, "M") : ssrLooseEqual(qrSettings.value.errorCorrectionLevel, "M")) ? " selected" : ""}>\u4E2D (15%)</option><option value="Q" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.errorCorrectionLevel) ? ssrLooseContain(qrSettings.value.errorCorrectionLevel, "Q") : ssrLooseEqual(qrSettings.value.errorCorrectionLevel, "Q")) ? " selected" : ""}>\u8F83\u9AD8 (25%)</option><option value="H" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.errorCorrectionLevel) ? ssrLooseContain(qrSettings.value.errorCorrectionLevel, "H") : ssrLooseEqual(qrSettings.value.errorCorrectionLevel, "H")) ? " selected" : ""}>\u9AD8 (30%)</option></select></div><div data-v-1d384038><label class="text-sm text-muted-foreground mb-2 block" data-v-1d384038>\u524D\u666F\u8272</label><input${ssrRenderAttr("value", qrSettings.value.darkColor)} type="color" class="w-full h-10 border rounded-md cursor-pointer" data-v-1d384038></div><div data-v-1d384038><label class="text-sm text-muted-foreground mb-2 block" data-v-1d384038>\u80CC\u666F\u8272</label><input${ssrRenderAttr("value", qrSettings.value.lightColor)} type="color" class="w-full h-10 border rounded-md cursor-pointer" data-v-1d384038></div></div></div><div class="space-y-4" data-v-1d384038><div class="bg-card border rounded-lg p-6" data-v-1d384038><div class="flex items-center justify-between mb-4" data-v-1d384038><h3 class="font-medium" data-v-1d384038>\u4E8C\u7EF4\u7801\u9884\u89C8</h3><div class="flex gap-2" data-v-1d384038>`);
      if (qrCodeUrl.value) {
        _push(`<button class="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" data-v-1d384038> \u4E0B\u8F7D </button>`);
      } else {
        _push(`<!---->`);
      }
      if (qrCodeUrl.value) {
        _push(`<button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors" data-v-1d384038> \u590D\u5236 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex justify-center items-center min-h-[300px]" data-v-1d384038>`);
      if (!qrCodeUrl.value && !qrContent.value) {
        _push(`<div class="text-muted-foreground text-center" data-v-1d384038><p data-v-1d384038>\u8BF7\u8F93\u5165\u5185\u5BB9\u751F\u6210\u4E8C\u7EF4\u7801</p></div>`);
      } else if (!qrCodeUrl.value) {
        _push(`<div class="text-muted-foreground text-center" data-v-1d384038><p data-v-1d384038>\u6B63\u5728\u751F\u6210\u4E8C\u7EF4\u7801...</p></div>`);
      } else {
        _push(`<div class="relative" data-v-1d384038><img${ssrRenderAttr("src", qrCodeUrl.value)} style="${ssrRenderStyle({ width: qrSettings.value.size + "px", height: qrSettings.value.size + "px" })}" alt="QR Code" class="border border-border rounded-lg" data-v-1d384038>`);
        if (qrSettings.value.logo) {
          _push(`<div class="absolute inset-0 flex items-center justify-center pointer-events-none" data-v-1d384038><img${ssrRenderAttr("src", qrSettings.value.logo)} alt="Logo" class="w-1/5 h-1/5 rounded-md bg-white p-1" data-v-1d384038></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></div>`);
      if (qrContent.value) {
        _push(`<div class="bg-card border rounded-lg p-4" data-v-1d384038><h3 class="font-medium mb-2" data-v-1d384038>\u5185\u5BB9\u9884\u89C8</h3><div class="text-sm text-muted-foreground font-mono break-all max-h-32 overflow-y-auto" data-v-1d384038>${ssrInterpolate(qrContent.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border rounded-lg p-4" data-v-1d384038><h3 class="font-medium mb-3" data-v-1d384038>\u5FEB\u901F\u793A\u4F8B</h3><div class="grid grid-cols-2 gap-2" data-v-1d384038><button class="px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors text-left" data-v-1d384038> \u7F51\u5740\u793A\u4F8B </button><button class="px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors text-left" data-v-1d384038> WiFi\u793A\u4F8B </button><button class="px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors text-left" data-v-1d384038> \u90AE\u4EF6\u793A\u4F8B </button><button class="px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors text-left" data-v-1d384038> \u540D\u7247\u793A\u4F8B </button></div></div></div></div><div class="mt-12 space-y-6" data-v-1d384038><div class="bg-card rounded-lg p-6" data-v-1d384038><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-1d384038>`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u8BF4\u660E </h3><div class="space-y-4 text-sm" data-v-1d384038><div data-v-1d384038><h4 class="font-medium mb-2" data-v-1d384038>\u652F\u6301\u7684\u4E8C\u7EF4\u7801\u7C7B\u578B</h4><ul class="text-muted-foreground space-y-1 ml-4" data-v-1d384038><li data-v-1d384038>\u2022 \u7EAF\u6587\u672C - \u4EFB\u610F\u6587\u672C\u5185\u5BB9</li><li data-v-1d384038>\u2022 \u7F51\u5740 (URL) - \u81EA\u52A8\u8BC6\u522B\u5E76\u53EF\u5728\u626B\u7801\u540E\u6253\u5F00\u6D4F\u89C8\u5668</li><li data-v-1d384038>\u2022 WiFi - \u81EA\u52A8\u8FDE\u63A5WiFi\u7F51\u7EDC</li><li data-v-1d384038>\u2022 \u90AE\u4EF6 - \u586B\u5199\u6536\u4EF6\u4EBA\u3001\u4E3B\u9898\u548C\u6B63\u6587</li><li data-v-1d384038>\u2022 \u7535\u8BDD - \u4E00\u952E\u62E8\u6253\u7535\u8BDD</li><li data-v-1d384038>\u2022 \u77ED\u4FE1 - \u9884\u586B\u5199\u77ED\u4FE1\u5185\u5BB9</li><li data-v-1d384038>\u2022 \u540D\u7247 (vCard) - \u4FDD\u5B58\u8054\u7CFB\u4EBA\u4FE1\u606F</li></ul></div><div data-v-1d384038><h4 class="font-medium mb-2" data-v-1d384038>\u7EA0\u9519\u7EA7\u522B\u8BF4\u660E</h4><ul class="text-muted-foreground space-y-1 ml-4" data-v-1d384038><li data-v-1d384038>\u2022 \u4F4E (L) - \u53EF\u7EA0\u6B63\u7EA67%\u7684\u9519\u8BEF</li><li data-v-1d384038>\u2022 \u4E2D (M) - \u53EF\u7EA0\u6B63\u7EA615%\u7684\u9519\u8BEF\uFF08\u63A8\u8350\uFF09</li><li data-v-1d384038>\u2022 \u8F83\u9AD8 (Q) - \u53EF\u7EA0\u6B63\u7EA625%\u7684\u9519\u8BEF</li><li data-v-1d384038>\u2022 \u9AD8 (H) - \u53EF\u7EA0\u6B63\u7EA630%\u7684\u9519\u8BEF</li></ul></div></div></div><div class="bg-card rounded-lg p-6" data-v-1d384038><h3 class="text-lg font-semibold mb-4" data-v-1d384038>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-1d384038>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/base64-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-1d384038${_scopeId}><p class="font-medium group-hover:text-primary" data-v-1d384038${_scopeId}>Base64 \u7F16\u7801</p><p class="text-xs text-muted-foreground" data-v-1d384038${_scopeId}>\u6587\u672C\u8F6C Base64</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 \u7F16\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6587\u672C\u8F6C Base64")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/url-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Link), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-1d384038${_scopeId}><p class="font-medium group-hover:text-primary" data-v-1d384038${_scopeId}>URL \u7F16\u7801</p><p class="text-xs text-muted-foreground" data-v-1d384038${_scopeId}>URL \u767E\u5206\u6BD4\u7F16\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "URL \u7F16\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "URL \u767E\u5206\u6BD4\u7F16\u7801")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/unicode-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Type), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-1d384038${_scopeId}><p class="font-medium group-hover:text-primary" data-v-1d384038${_scopeId}>Unicode \u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-1d384038${_scopeId}>Unicode \u7F16\u7801\u8F6C\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Type), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Unicode \u8F6C\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Unicode \u7F16\u7801\u8F6C\u6362")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/qrcode-generate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qrcodeGenerate = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d384038"]]);

export { qrcodeGenerate as default };
//# sourceMappingURL=qrcode-generate-Y4R7Hbys.mjs.map
