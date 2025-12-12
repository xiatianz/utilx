import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { QrCode, X, Camera, CheckCircle, Copy, ExternalLink, XCircle, Link, Mail, Phone, MessageSquare, Wifi, Contact, Calendar, Type, Info, ArrowRight, Hash, Link2 } from 'lucide-vue-next';
import { f as useSeoMeta } from './server.mjs';
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
import 'vue-router';

const _sfc_main = {
  __name: "qrcode-scan",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedImage = ref(null);
    const scanResult = ref(null);
    const isScanning = ref(false);
    ref(null);
    ref(null);
    const cameraStarted = ref(false);
    const cameraActive = ref(false);
    const showScannerOverlay = ref(false);
    const copied = ref(false);
    const scanHistory = ref([]);
    const sampleImages = [
      { id: 1, name: "URL\u793A\u4F8B", url: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com" },
      { id: 2, name: "\u6587\u672C\u793A\u4F8B", url: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Hello%20World" },
      { id: 3, name: "\u90AE\u7BB1\u793A\u4F8B", url: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=mailto:example@email.com" }
    ];
    useSeoMeta({
      title: "\u4E8C\u7EF4\u7801\u8BC6\u522B - \u5728\u7EBF\u4E8C\u7EF4\u7801\u626B\u63CF\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u4E8C\u7EF4\u7801\u8BC6\u522B\u5DE5\u5177\uFF0C\u652F\u6301\u56FE\u7247\u4E0A\u4F20\u548C\u6444\u50CF\u5934\u626B\u63CF\uFF0C\u8BC6\u522B\u5404\u79CD\u7C7B\u578B\u4E8C\u7EF4\u7801\u5185\u5BB9\u3002",
      keywords: ["\u4E8C\u7EF4\u7801\u8BC6\u522B", "QR\u7801\u626B\u63CF", "\u4E8C\u7EF4\u7801\u8BFB\u53D6", "\u5728\u7EBF\u626B\u63CF", "QR\u7801\u89E3\u6790"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u4E8C\u7EF4\u7801\u8BC6\u522B</h1><p class="text-muted-foreground">\u8BC6\u522B\u4E8C\u7EF4\u7801\u5185\u5BB9\uFF0C\u652F\u6301\u56FE\u7247\u4E0A\u4F20\u548C\u6444\u50CF\u5934\u626B\u63CF</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u4E0A\u4F20\u4E8C\u7EF4\u7801\u56FE\u7247</h2><div class="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"><input type="file" class="hidden" accept="image/*">`);
      _push(ssrRenderComponent(unref(QrCode), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2">\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u91CC</p><p class="text-sm text-muted-foreground">\u6216\u8005\u70B9\u51FB\u9009\u62E9\u6587\u4EF6</p></div>`);
      if (selectedImage.value) {
        _push(`<div class="mt-4 space-y-4"><div class="relative"><img${ssrRenderAttr("src", selectedImage.value.url)}${ssrRenderAttr("alt", selectedImage.value.name)} class="w-full rounded-lg"><button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div><button${ssrIncludeBooleanAttr(isScanning.value) ? " disabled" : ""} class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50">${ssrInterpolate(isScanning.value ? "\u8BC6\u522B\u4E2D..." : "\u8BC6\u522B\u4E8C\u7EF4\u7801")}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-6"><h3 class="text-sm font-medium mb-3">\u6216\u5C1D\u8BD5\u793A\u4F8B\u56FE\u7247</h3><div class="grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(sampleImages, (sample) => {
        _push(`<button class="aspect-square rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all"><img${ssrRenderAttr("src", sample.url)}${ssrRenderAttr("alt", sample.name)} class="w-full h-full object-cover"></button>`);
      });
      _push(`<!--]--></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6444\u50CF\u5934\u626B\u63CF</h2><div class="space-y-4">`);
      if (!cameraStarted.value) {
        _push(`<div class="text-center py-8">`);
        _push(ssrRenderComponent(unref(Camera), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
        _push(`<button class="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"> \u542F\u52A8\u6444\u50CF\u5934 </button></div>`);
      } else {
        _push(`<div class="space-y-4"><div class="relative"><video class="w-full rounded-lg" autoplay></video><div class="absolute inset-0 pointer-events-none" style="${ssrRenderStyle(showScannerOverlay.value ? null : { display: "none" })}"><div class="absolute inset-4 border-2 border-primary rounded"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48"><div class="absolute top-0 left-0 w-full h-0.5 bg-primary"></div><div class="absolute top-0 left-0 w-0.5 h-full bg-primary"></div><div class="absolute top-0 right-0 w-0.5 h-full bg-primary"></div><div class="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div></div></div></div><div class="flex gap-2"><button class="flex-1 px-4 py-2 border border-destructive text-destructive rounded-md hover:bg-destructive/5 transition-colors"> \u505C\u6B62\u626B\u63CF </button>`);
        if (cameraActive.value) {
          _push(`<button class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"> \u62CD\u7167\u8BC6\u522B </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      _push(`</div></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8BC6\u522B\u7ED3\u679C</h2>`);
      if (scanResult.value) {
        _push(`<div class="space-y-4">`);
        if (scanResult.value.success) {
          _push(`<div class="space-y-4"><div class="flex items-center gap-2 text-green-600">`);
          _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5" }, null, _parent));
          _push(`<span class="font-medium">\u8BC6\u522B\u6210\u529F</span></div><div class="p-4 bg-green-50 border border-green-200 rounded-lg"><div class="text-sm text-green-800 mb-2">\u5185\u5BB9\u7C7B\u578B</div><div class="font-medium text-green-900">${ssrInterpolate(scanResult.value.type)}</div></div><div><label class="text-sm font-medium">\u8BC6\u522B\u5185\u5BB9</label><div class="mt-2 p-4 bg-muted rounded-lg">`);
          if (scanResult.value.type === "URL") {
            _push(`<a${ssrRenderAttr("href", scanResult.value.content)} target="_blank" class="text-primary hover:underline break-all">${ssrInterpolate(scanResult.value.content)}</a>`);
          } else if (scanResult.value.type === "Email") {
            _push(`<a${ssrRenderAttr("href", `mailto:${scanResult.value.content}`)} class="text-primary hover:underline break-all">${ssrInterpolate(scanResult.value.content)}</a>`);
          } else if (scanResult.value.type === "Phone") {
            _push(`<a${ssrRenderAttr("href", `tel:${scanResult.value.content}`)} class="text-primary hover:underline">${ssrInterpolate(scanResult.value.content)}</a>`);
          } else if (scanResult.value.type === "SMS") {
            _push(`<div class="space-y-2"><div class="text-sm text-muted-foreground">\u7535\u8BDD\u53F7\u7801</div><a${ssrRenderAttr("href", `sms:${scanResult.value.content.phone}`)} class="text-primary hover:underline">${ssrInterpolate(scanResult.value.content.phone)}</a><div class="text-sm text-muted-foreground">\u77ED\u4FE1\u5185\u5BB9</div><div class="break-all">${ssrInterpolate(scanResult.value.content.message)}</div></div>`);
          } else if (scanResult.value.type === "WiFi") {
            _push(`<div class="space-y-2 text-sm"><div class="flex justify-between"><span class="text-muted-foreground">\u7F51\u7EDC\u540D\u79F0</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.ssid)}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u52A0\u5BC6\u7C7B\u578B</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.encryption)}</span></div>`);
            if (scanResult.value.content.password) {
              _push(`<div class="flex justify-between"><span class="text-muted-foreground">\u5BC6\u7801</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.password)}</span></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else if (scanResult.value.type === "vCard") {
            _push(`<div class="space-y-2 text-sm"><div class="flex justify-between"><span class="text-muted-foreground">\u59D3\u540D</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.name)}</span></div>`);
            if (scanResult.value.content.phone) {
              _push(`<div class="flex justify-between"><span class="text-muted-foreground">\u7535\u8BDD</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.phone)}</span></div>`);
            } else {
              _push(`<!---->`);
            }
            if (scanResult.value.content.email) {
              _push(`<div class="flex justify-between"><span class="text-muted-foreground">\u90AE\u7BB1</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.email)}</span></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else if (scanResult.value.type === "vEvent") {
            _push(`<div class="space-y-2 text-sm"><div class="flex justify-between"><span class="text-muted-foreground">\u4E8B\u4EF6</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.summary)}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u5F00\u59CB\u65F6\u95F4</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.start)}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u7ED3\u675F\u65F6\u95F4</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.end)}</span></div></div>`);
          } else {
            _push(`<pre class="whitespace-pre-wrap break-all">${ssrInterpolate(scanResult.value.content)}</pre>`);
          }
          _push(`</div></div><div class="flex gap-2"><button class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">`);
          _push(ssrRenderComponent(unref(Copy), { class: "w-4 h-4" }, null, _parent));
          _push(` ${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236\u5185\u5BB9")}</button>`);
          if (scanResult.value.type === "URL") {
            _push(`<button class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center gap-2">`);
            _push(ssrRenderComponent(unref(ExternalLink), { class: "w-4 h-4" }, null, _parent));
            _push(` \u6253\u5F00\u94FE\u63A5 </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<div class="space-y-4"><div class="flex items-center gap-2 text-destructive">`);
          _push(ssrRenderComponent(unref(XCircle), { class: "w-5 h-5" }, null, _parent));
          _push(`<span class="font-medium">\u8BC6\u522B\u5931\u8D25</span></div><p class="text-sm text-muted-foreground">${ssrInterpolate(scanResult.value.error || "\u672A\u68C0\u6D4B\u5230\u4E8C\u7EF4\u7801")}</p><div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm"><p class="text-yellow-800">\u5EFA\u8BAE\uFF1A</p><ul class="list-disc list-inside text-yellow-700 mt-2"><li>\u786E\u4FDD\u56FE\u7247\u6E05\u6670\uFF0C\u4E8C\u7EF4\u7801\u5B8C\u6574\u53EF\u89C1</li><li>\u8C03\u6574\u56FE\u7247\u89D2\u5EA6\uFF0C\u907F\u514D\u503E\u659C</li><li>\u589E\u52A0\u56FE\u7247\u4EAE\u5EA6\u548C\u5BF9\u6BD4\u5EA6</li></ul></div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="text-center py-12 text-muted-foreground">`);
        _push(ssrRenderComponent(unref(QrCode), { class: "w-16 h-16 mx-auto mb-4" }, null, _parent));
        _push(`<p>\u4E0A\u4F20\u6216\u626B\u63CF\u4E8C\u7EF4\u7801\u5F00\u59CB\u8BC6\u522B</p></div>`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u5386\u53F2\u8BB0\u5F55</h2><button class="px-3 py-1 text-sm text-destructive hover:text-destructive/80 transition-colors"> \u6E05\u7A7A </button></div>`);
      if (scanHistory.value.length === 0) {
        _push(`<div class="text-center py-8 text-muted-foreground"> \u6682\u65E0\u5386\u53F2\u8BB0\u5F55 </div>`);
      } else {
        _push(`<div class="space-y-3 max-h-64 overflow-y-auto"><!--[-->`);
        ssrRenderList(scanHistory.value, (item, index) => {
          _push(`<div class="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"><div class="flex justify-between items-start mb-2"><span class="font-medium text-sm">${ssrInterpolate(item.type)}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(item.time)}</span></div><p class="text-sm text-muted-foreground truncate">${ssrInterpolate(item.content)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u652F\u6301\u7684\u4E8C\u7EF4\u7801\u7C7B\u578B</h2><div class="grid grid-cols-2 gap-3 text-sm"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Link), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>\u7F51\u5740 (URL)</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>\u90AE\u7BB1\u5730\u5740</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Phone), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>\u7535\u8BDD\u53F7\u7801</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>\u77ED\u4FE1 (SMS)</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Wifi), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>WiFi \u7F51\u7EDC\u4FE1\u606F</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Contact), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>\u540D\u7247 (vCard)</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>\u65E5\u5386\u4E8B\u4EF6 (vEvent)</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Type), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>\u7EAF\u6587\u672C</span></div></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u8BF4\u660E </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u4F7F\u7528\u65B9\u6CD5</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u4E0A\u4F20\u5305\u542B\u4E8C\u7EF4\u7801\u7684\u56FE\u7247\u6587\u4EF6</li><li>\u4F7F\u7528\u6444\u50CF\u5934\u5B9E\u65F6\u626B\u63CF\u4E8C\u7EF4\u7801</li><li>\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u8BC6\u522B\u5E76\u89E3\u6790\u4E8C\u7EF4\u7801\u5185\u5BB9</li><li>\u652F\u6301\u591A\u79CD\u4E8C\u7EF4\u7801\u683C\u5F0F\u548C\u5185\u5BB9\u7C7B\u578B</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u6CE8\u610F\u4E8B\u9879</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u786E\u4FDD\u4E8C\u7EF4\u7801\u6E05\u6670\u5B8C\u6574\uFF0C\u65E0\u906E\u6321</li><li>\u826F\u597D\u7684\u5149\u7EBF\u6761\u4EF6\u6709\u52A9\u4E8E\u8BC6\u522B</li><li>\u6444\u50CF\u5934\u626B\u63CF\u9700\u8981\u6388\u6743\u8BBF\u95EE\u6743\u9650</li><li>\u4E0D\u4F1A\u4FDD\u5B58\u4E0A\u4F20\u7684\u56FE\u7247\u6570\u636E</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/qrcode-generate",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(QrCode), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u4E8C\u7EF4\u7801\u751F\u6210\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u5728\u7EBF\u751F\u6210\u4E8C\u7EF4\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(QrCode), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u4E8C\u7EF4\u7801\u751F\u6210\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u5728\u7EBF\u751F\u6210\u4E8C\u7EF4\u7801")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/base64-image",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Base64\u56FE\u7247</p><p class="text-xs text-muted-foreground"${_scopeId}>\u56FE\u7247\u4E0EBase64\u4E92\u8F6C</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64\u56FE\u7247"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u56FE\u7247\u4E0EBase64\u4E92\u8F6C")
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
            _push2(ssrRenderComponent(unref(Link2), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>URL\u7F16\u7801</p><p class="text-xs text-muted-foreground"${_scopeId}>URL\u7F16\u7801\u89E3\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link2), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "URL\u7F16\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "URL\u7F16\u7801\u89E3\u7801")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/qrcode-scan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=qrcode-scan-B1FPec1R.mjs.map
