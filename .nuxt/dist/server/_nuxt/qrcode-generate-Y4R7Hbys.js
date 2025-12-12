import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { Info, Hash, ArrowRight, Link, Type } from "lucide-vue-next";
import QRCode from "qrcode";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "qrcode-generate",
  __ssrInlineRender: true,
  setup(__props) {
    const contentType = ref("text");
    const qrContent = ref("");
    const qrCodeUrl = ref("");
    const contentTypes = [
      { label: "文本", value: "text" },
      { label: "网址", value: "url" },
      { label: "WiFi", value: "wifi" },
      { label: "邮件", value: "email" },
      { label: "电话", value: "phone" },
      { label: "短信", value: "sms" },
      { label: "名片", value: "vcard" }
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
        console.error("生成二维码失败:", error);
        qrCodeUrl.value = "";
      }
    };
    watch([contentType, formData, qrSettings], () => {
      generateQRCode();
    }, { deep: true });
    useSeoMeta({
      title: "二维码生成器 - 在线QR码生成工具",
      description: "免费在线二维码生成工具，支持文本、网址、WiFi、邮件、电话、短信、名片等多种格式，可自定义颜色和尺寸。",
      keywords: ["qr", "二维码", "generator", "qrcode", "在线工具", "wifi", "vcard", "名片"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-1d384038><div class="mt-4 mb-8" data-v-1d384038><h1 class="text-3xl font-bold mb-3" data-v-1d384038>二维码生成器</h1><p class="text-muted-foreground" data-v-1d384038>快速生成二维码，支持文本、网址、WiFi等多种格式</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-1d384038><div class="space-y-4" data-v-1d384038><div class="space-y-2" data-v-1d384038><label class="text-sm font-medium" data-v-1d384038>内容类型</label><div class="flex gap-2" data-v-1d384038><!--[-->`);
      ssrRenderList(contentTypes, (type) => {
        _push(`<button class="${ssrRenderClass([contentType.value === type.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80", "px-4 py-2 rounded-md text-sm font-medium transition-colors"])}" data-v-1d384038>${ssrInterpolate(type.label)}</button>`);
      });
      _push(`<!--]--></div></div><div class="space-y-4 p-4 bg-card border rounded-lg" data-v-1d384038>`);
      if (contentType.value === "text") {
        _push(`<div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>文本内容</label><textarea placeholder="请输入要生成二维码的文本内容..." class="w-full h-32 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038>${ssrInterpolate(formData.value.text)}</textarea></div>`);
      } else {
        _push(`<!---->`);
      }
      if (contentType.value === "url") {
        _push(`<div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>网址</label><input${ssrRenderAttr("value", formData.value.url)} type="url" placeholder="https://example.com" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div>`);
      } else {
        _push(`<!---->`);
      }
      if (contentType.value === "wifi") {
        _push(`<div class="space-y-3" data-v-1d384038><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>网络名称 (SSID)</label><input${ssrRenderAttr("value", formData.value.wifi.ssid)} type="text" placeholder="请输入WiFi名称" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>密码</label><input${ssrRenderAttr("value", formData.value.wifi.password)} type="password" placeholder="请输入WiFi密码" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>加密类型</label><select class="w-full px-3 py-2 border rounded-md" data-v-1d384038><option value="WPA" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(formData.value.wifi.encryption) ? ssrLooseContain(formData.value.wifi.encryption, "WPA") : ssrLooseEqual(formData.value.wifi.encryption, "WPA")) ? " selected" : ""}>WPA/WPA2</option><option value="WEP" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(formData.value.wifi.encryption) ? ssrLooseContain(formData.value.wifi.encryption, "WEP") : ssrLooseEqual(formData.value.wifi.encryption, "WEP")) ? " selected" : ""}>WEP</option><option value="nopass" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(formData.value.wifi.encryption) ? ssrLooseContain(formData.value.wifi.encryption, "nopass") : ssrLooseEqual(formData.value.wifi.encryption, "nopass")) ? " selected" : ""}>无密码</option></select></div><div class="flex items-center gap-2" data-v-1d384038><input${ssrIncludeBooleanAttr(Array.isArray(formData.value.wifi.hidden) ? ssrLooseContain(formData.value.wifi.hidden, null) : formData.value.wifi.hidden) ? " checked" : ""} type="checkbox" id="hidden" class="rounded" data-v-1d384038><label for="hidden" class="text-sm" data-v-1d384038>隐藏网络</label></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (contentType.value === "email") {
        _push(`<div class="space-y-3" data-v-1d384038><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>收件人邮箱</label><input${ssrRenderAttr("value", formData.value.email.to)} type="email" placeholder="example@email.com" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>主题</label><input${ssrRenderAttr("value", formData.value.email.subject)} type="text" placeholder="邮件主题" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>正文</label><textarea placeholder="邮件内容" class="w-full h-24 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038>${ssrInterpolate(formData.value.email.body)}</textarea></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (contentType.value === "phone") {
        _push(`<div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>电话号码</label><input${ssrRenderAttr("value", formData.value.phone)} type="tel" placeholder="+86 138 0013 8000" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div>`);
      } else {
        _push(`<!---->`);
      }
      if (contentType.value === "sms") {
        _push(`<div class="space-y-3" data-v-1d384038><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>收件人号码</label><input${ssrRenderAttr("value", formData.value.sms.to)} type="tel" placeholder="13800138000" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>短信内容</label><textarea placeholder="短信内容" class="w-full h-24 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038>${ssrInterpolate(formData.value.sms.message)}</textarea></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (contentType.value === "vcard") {
        _push(`<div class="space-y-3" data-v-1d384038><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>姓名</label><input${ssrRenderAttr("value", formData.value.vcard.name)} type="text" placeholder="张三" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>公司</label><input${ssrRenderAttr("value", formData.value.vcard.organization)} type="text" placeholder="XX科技有限公司" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>电话</label><input${ssrRenderAttr("value", formData.value.vcard.phone)} type="tel" placeholder="13800138000" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>邮箱</label><input${ssrRenderAttr("value", formData.value.vcard.email)} type="email" placeholder="zhangsan@example.com" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div><div data-v-1d384038><label class="text-sm font-medium mb-2 block" data-v-1d384038>网址</label><input${ssrRenderAttr("value", formData.value.vcard.url)} type="url" placeholder="https://example.com" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-1d384038></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4 p-4 bg-card border rounded-lg" data-v-1d384038><h3 class="font-medium" data-v-1d384038>二维码设置</h3><div data-v-1d384038><label class="text-sm text-muted-foreground mb-2 block" data-v-1d384038>尺寸</label><select class="w-full px-3 py-2 border rounded-md" data-v-1d384038><option${ssrRenderAttr("value", 200)} data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.size) ? ssrLooseContain(qrSettings.value.size, 200) : ssrLooseEqual(qrSettings.value.size, 200)) ? " selected" : ""}>小 (200x200)</option><option${ssrRenderAttr("value", 300)} data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.size) ? ssrLooseContain(qrSettings.value.size, 300) : ssrLooseEqual(qrSettings.value.size, 300)) ? " selected" : ""}>中 (300x300)</option><option${ssrRenderAttr("value", 400)} data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.size) ? ssrLooseContain(qrSettings.value.size, 400) : ssrLooseEqual(qrSettings.value.size, 400)) ? " selected" : ""}>大 (400x400)</option><option${ssrRenderAttr("value", 500)} data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.size) ? ssrLooseContain(qrSettings.value.size, 500) : ssrLooseEqual(qrSettings.value.size, 500)) ? " selected" : ""}>特大 (500x500)</option></select></div><div data-v-1d384038><label class="text-sm text-muted-foreground mb-2 block" data-v-1d384038>纠错级别</label><select class="w-full px-3 py-2 border rounded-md" data-v-1d384038><option value="L" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.errorCorrectionLevel) ? ssrLooseContain(qrSettings.value.errorCorrectionLevel, "L") : ssrLooseEqual(qrSettings.value.errorCorrectionLevel, "L")) ? " selected" : ""}>低 (7%)</option><option value="M" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.errorCorrectionLevel) ? ssrLooseContain(qrSettings.value.errorCorrectionLevel, "M") : ssrLooseEqual(qrSettings.value.errorCorrectionLevel, "M")) ? " selected" : ""}>中 (15%)</option><option value="Q" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.errorCorrectionLevel) ? ssrLooseContain(qrSettings.value.errorCorrectionLevel, "Q") : ssrLooseEqual(qrSettings.value.errorCorrectionLevel, "Q")) ? " selected" : ""}>较高 (25%)</option><option value="H" data-v-1d384038${ssrIncludeBooleanAttr(Array.isArray(qrSettings.value.errorCorrectionLevel) ? ssrLooseContain(qrSettings.value.errorCorrectionLevel, "H") : ssrLooseEqual(qrSettings.value.errorCorrectionLevel, "H")) ? " selected" : ""}>高 (30%)</option></select></div><div data-v-1d384038><label class="text-sm text-muted-foreground mb-2 block" data-v-1d384038>前景色</label><input${ssrRenderAttr("value", qrSettings.value.darkColor)} type="color" class="w-full h-10 border rounded-md cursor-pointer" data-v-1d384038></div><div data-v-1d384038><label class="text-sm text-muted-foreground mb-2 block" data-v-1d384038>背景色</label><input${ssrRenderAttr("value", qrSettings.value.lightColor)} type="color" class="w-full h-10 border rounded-md cursor-pointer" data-v-1d384038></div></div></div><div class="space-y-4" data-v-1d384038><div class="bg-card border rounded-lg p-6" data-v-1d384038><div class="flex items-center justify-between mb-4" data-v-1d384038><h3 class="font-medium" data-v-1d384038>二维码预览</h3><div class="flex gap-2" data-v-1d384038>`);
      if (qrCodeUrl.value) {
        _push(`<button class="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" data-v-1d384038> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      if (qrCodeUrl.value) {
        _push(`<button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors" data-v-1d384038> 复制 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex justify-center items-center min-h-[300px]" data-v-1d384038>`);
      if (!qrCodeUrl.value && !qrContent.value) {
        _push(`<div class="text-muted-foreground text-center" data-v-1d384038><p data-v-1d384038>请输入内容生成二维码</p></div>`);
      } else if (!qrCodeUrl.value) {
        _push(`<div class="text-muted-foreground text-center" data-v-1d384038><p data-v-1d384038>正在生成二维码...</p></div>`);
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
        _push(`<div class="bg-card border rounded-lg p-4" data-v-1d384038><h3 class="font-medium mb-2" data-v-1d384038>内容预览</h3><div class="text-sm text-muted-foreground font-mono break-all max-h-32 overflow-y-auto" data-v-1d384038>${ssrInterpolate(qrContent.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border rounded-lg p-4" data-v-1d384038><h3 class="font-medium mb-3" data-v-1d384038>快速示例</h3><div class="grid grid-cols-2 gap-2" data-v-1d384038><button class="px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors text-left" data-v-1d384038> 网址示例 </button><button class="px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors text-left" data-v-1d384038> WiFi示例 </button><button class="px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors text-left" data-v-1d384038> 邮件示例 </button><button class="px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors text-left" data-v-1d384038> 名片示例 </button></div></div></div></div><div class="mt-12 space-y-6" data-v-1d384038><div class="bg-card rounded-lg p-6" data-v-1d384038><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-1d384038>`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用说明 </h3><div class="space-y-4 text-sm" data-v-1d384038><div data-v-1d384038><h4 class="font-medium mb-2" data-v-1d384038>支持的二维码类型</h4><ul class="text-muted-foreground space-y-1 ml-4" data-v-1d384038><li data-v-1d384038>• 纯文本 - 任意文本内容</li><li data-v-1d384038>• 网址 (URL) - 自动识别并可在扫码后打开浏览器</li><li data-v-1d384038>• WiFi - 自动连接WiFi网络</li><li data-v-1d384038>• 邮件 - 填写收件人、主题和正文</li><li data-v-1d384038>• 电话 - 一键拨打电话</li><li data-v-1d384038>• 短信 - 预填写短信内容</li><li data-v-1d384038>• 名片 (vCard) - 保存联系人信息</li></ul></div><div data-v-1d384038><h4 class="font-medium mb-2" data-v-1d384038>纠错级别说明</h4><ul class="text-muted-foreground space-y-1 ml-4" data-v-1d384038><li data-v-1d384038>• 低 (L) - 可纠正约7%的错误</li><li data-v-1d384038>• 中 (M) - 可纠正约15%的错误（推荐）</li><li data-v-1d384038>• 较高 (Q) - 可纠正约25%的错误</li><li data-v-1d384038>• 高 (H) - 可纠正约30%的错误</li></ul></div></div></div><div class="bg-card rounded-lg p-6" data-v-1d384038><h3 class="text-lg font-semibold mb-4" data-v-1d384038>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-1d384038>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/base64-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-1d384038${_scopeId}><p class="font-medium group-hover:text-primary" data-v-1d384038${_scopeId}>Base64 编码</p><p class="text-xs text-muted-foreground" data-v-1d384038${_scopeId}>文本转 Base64</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 编码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "文本转 Base64")
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
            _push2(`<div data-v-1d384038${_scopeId}><p class="font-medium group-hover:text-primary" data-v-1d384038${_scopeId}>URL 编码</p><p class="text-xs text-muted-foreground" data-v-1d384038${_scopeId}>URL 百分比编码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "URL 编码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "URL 百分比编码")
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
            _push2(`<div data-v-1d384038${_scopeId}><p class="font-medium group-hover:text-primary" data-v-1d384038${_scopeId}>Unicode 转换</p><p class="text-xs text-muted-foreground" data-v-1d384038${_scopeId}>Unicode 编码转换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Type), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Unicode 转换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Unicode 编码转换")
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
export {
  qrcodeGenerate as default
};
//# sourceMappingURL=qrcode-generate-Y4R7Hbys.js.map
