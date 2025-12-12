import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { QrCode, X, Camera, CheckCircle, Copy, ExternalLink, XCircle, Link, Mail, Phone, MessageSquare, Wifi, Contact, Calendar, Type, Info, ArrowRight, Hash, Link2 } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
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
      { id: 1, name: "URL示例", url: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com" },
      { id: 2, name: "文本示例", url: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Hello%20World" },
      { id: 3, name: "邮箱示例", url: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=mailto:example@email.com" }
    ];
    useSeoMeta({
      title: "二维码识别 - 在线二维码扫描工具",
      description: "免费在线二维码识别工具，支持图片上传和摄像头扫描，识别各种类型二维码内容。",
      keywords: ["二维码识别", "QR码扫描", "二维码读取", "在线扫描", "QR码解析"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">二维码识别</h1><p class="text-muted-foreground">识别二维码内容，支持图片上传和摄像头扫描</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">上传二维码图片</h2><div class="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"><input type="file" class="hidden" accept="image/*">`);
      _push(ssrRenderComponent(unref(QrCode), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2">拖拽图片到这里</p><p class="text-sm text-muted-foreground">或者点击选择文件</p></div>`);
      if (selectedImage.value) {
        _push(`<div class="mt-4 space-y-4"><div class="relative"><img${ssrRenderAttr("src", selectedImage.value.url)}${ssrRenderAttr("alt", selectedImage.value.name)} class="w-full rounded-lg"><button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div><button${ssrIncludeBooleanAttr(isScanning.value) ? " disabled" : ""} class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50">${ssrInterpolate(isScanning.value ? "识别中..." : "识别二维码")}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-6"><h3 class="text-sm font-medium mb-3">或尝试示例图片</h3><div class="grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(sampleImages, (sample) => {
        _push(`<button class="aspect-square rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all"><img${ssrRenderAttr("src", sample.url)}${ssrRenderAttr("alt", sample.name)} class="w-full h-full object-cover"></button>`);
      });
      _push(`<!--]--></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">摄像头扫描</h2><div class="space-y-4">`);
      if (!cameraStarted.value) {
        _push(`<div class="text-center py-8">`);
        _push(ssrRenderComponent(unref(Camera), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
        _push(`<button class="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"> 启动摄像头 </button></div>`);
      } else {
        _push(`<div class="space-y-4"><div class="relative"><video class="w-full rounded-lg" autoplay></video><div class="absolute inset-0 pointer-events-none" style="${ssrRenderStyle(showScannerOverlay.value ? null : { display: "none" })}"><div class="absolute inset-4 border-2 border-primary rounded"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48"><div class="absolute top-0 left-0 w-full h-0.5 bg-primary"></div><div class="absolute top-0 left-0 w-0.5 h-full bg-primary"></div><div class="absolute top-0 right-0 w-0.5 h-full bg-primary"></div><div class="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div></div></div></div><div class="flex gap-2"><button class="flex-1 px-4 py-2 border border-destructive text-destructive rounded-md hover:bg-destructive/5 transition-colors"> 停止扫描 </button>`);
        if (cameraActive.value) {
          _push(`<button class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"> 拍照识别 </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      _push(`</div></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">识别结果</h2>`);
      if (scanResult.value) {
        _push(`<div class="space-y-4">`);
        if (scanResult.value.success) {
          _push(`<div class="space-y-4"><div class="flex items-center gap-2 text-green-600">`);
          _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5" }, null, _parent));
          _push(`<span class="font-medium">识别成功</span></div><div class="p-4 bg-green-50 border border-green-200 rounded-lg"><div class="text-sm text-green-800 mb-2">内容类型</div><div class="font-medium text-green-900">${ssrInterpolate(scanResult.value.type)}</div></div><div><label class="text-sm font-medium">识别内容</label><div class="mt-2 p-4 bg-muted rounded-lg">`);
          if (scanResult.value.type === "URL") {
            _push(`<a${ssrRenderAttr("href", scanResult.value.content)} target="_blank" class="text-primary hover:underline break-all">${ssrInterpolate(scanResult.value.content)}</a>`);
          } else if (scanResult.value.type === "Email") {
            _push(`<a${ssrRenderAttr("href", `mailto:${scanResult.value.content}`)} class="text-primary hover:underline break-all">${ssrInterpolate(scanResult.value.content)}</a>`);
          } else if (scanResult.value.type === "Phone") {
            _push(`<a${ssrRenderAttr("href", `tel:${scanResult.value.content}`)} class="text-primary hover:underline">${ssrInterpolate(scanResult.value.content)}</a>`);
          } else if (scanResult.value.type === "SMS") {
            _push(`<div class="space-y-2"><div class="text-sm text-muted-foreground">电话号码</div><a${ssrRenderAttr("href", `sms:${scanResult.value.content.phone}`)} class="text-primary hover:underline">${ssrInterpolate(scanResult.value.content.phone)}</a><div class="text-sm text-muted-foreground">短信内容</div><div class="break-all">${ssrInterpolate(scanResult.value.content.message)}</div></div>`);
          } else if (scanResult.value.type === "WiFi") {
            _push(`<div class="space-y-2 text-sm"><div class="flex justify-between"><span class="text-muted-foreground">网络名称</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.ssid)}</span></div><div class="flex justify-between"><span class="text-muted-foreground">加密类型</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.encryption)}</span></div>`);
            if (scanResult.value.content.password) {
              _push(`<div class="flex justify-between"><span class="text-muted-foreground">密码</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.password)}</span></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else if (scanResult.value.type === "vCard") {
            _push(`<div class="space-y-2 text-sm"><div class="flex justify-between"><span class="text-muted-foreground">姓名</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.name)}</span></div>`);
            if (scanResult.value.content.phone) {
              _push(`<div class="flex justify-between"><span class="text-muted-foreground">电话</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.phone)}</span></div>`);
            } else {
              _push(`<!---->`);
            }
            if (scanResult.value.content.email) {
              _push(`<div class="flex justify-between"><span class="text-muted-foreground">邮箱</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.email)}</span></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else if (scanResult.value.type === "vEvent") {
            _push(`<div class="space-y-2 text-sm"><div class="flex justify-between"><span class="text-muted-foreground">事件</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.summary)}</span></div><div class="flex justify-between"><span class="text-muted-foreground">开始时间</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.start)}</span></div><div class="flex justify-between"><span class="text-muted-foreground">结束时间</span><span class="font-medium">${ssrInterpolate(scanResult.value.content.end)}</span></div></div>`);
          } else {
            _push(`<pre class="whitespace-pre-wrap break-all">${ssrInterpolate(scanResult.value.content)}</pre>`);
          }
          _push(`</div></div><div class="flex gap-2"><button class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">`);
          _push(ssrRenderComponent(unref(Copy), { class: "w-4 h-4" }, null, _parent));
          _push(` ${ssrInterpolate(copied.value ? "已复制" : "复制内容")}</button>`);
          if (scanResult.value.type === "URL") {
            _push(`<button class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center gap-2">`);
            _push(ssrRenderComponent(unref(ExternalLink), { class: "w-4 h-4" }, null, _parent));
            _push(` 打开链接 </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<div class="space-y-4"><div class="flex items-center gap-2 text-destructive">`);
          _push(ssrRenderComponent(unref(XCircle), { class: "w-5 h-5" }, null, _parent));
          _push(`<span class="font-medium">识别失败</span></div><p class="text-sm text-muted-foreground">${ssrInterpolate(scanResult.value.error || "未检测到二维码")}</p><div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm"><p class="text-yellow-800">建议：</p><ul class="list-disc list-inside text-yellow-700 mt-2"><li>确保图片清晰，二维码完整可见</li><li>调整图片角度，避免倾斜</li><li>增加图片亮度和对比度</li></ul></div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="text-center py-12 text-muted-foreground">`);
        _push(ssrRenderComponent(unref(QrCode), { class: "w-16 h-16 mx-auto mb-4" }, null, _parent));
        _push(`<p>上传或扫描二维码开始识别</p></div>`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">历史记录</h2><button class="px-3 py-1 text-sm text-destructive hover:text-destructive/80 transition-colors"> 清空 </button></div>`);
      if (scanHistory.value.length === 0) {
        _push(`<div class="text-center py-8 text-muted-foreground"> 暂无历史记录 </div>`);
      } else {
        _push(`<div class="space-y-3 max-h-64 overflow-y-auto"><!--[-->`);
        ssrRenderList(scanHistory.value, (item, index) => {
          _push(`<div class="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"><div class="flex justify-between items-start mb-2"><span class="font-medium text-sm">${ssrInterpolate(item.type)}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(item.time)}</span></div><p class="text-sm text-muted-foreground truncate">${ssrInterpolate(item.content)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">支持的二维码类型</h2><div class="grid grid-cols-2 gap-3 text-sm"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Link), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>网址 (URL)</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>邮箱地址</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Phone), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>电话号码</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>短信 (SMS)</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Wifi), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>WiFi 网络信息</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Contact), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>名片 (vCard)</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>日历事件 (vEvent)</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Type), { class: "w-4 h-4 text-primary" }, null, _parent));
      _push(`<span>纯文本</span></div></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用说明 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">使用方法</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>上传包含二维码的图片文件</li><li>使用摄像头实时扫描二维码</li><li>系统会自动识别并解析二维码内容</li><li>支持多种二维码格式和内容类型</li></ul></div><div><h4 class="font-medium text-foreground mb-2">注意事项</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>确保二维码清晰完整，无遮挡</li><li>良好的光线条件有助于识别</li><li>摄像头扫描需要授权访问权限</li><li>不会保存上传的图片数据</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/qrcode-generate",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(QrCode), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>二维码生成器</p><p class="text-xs text-muted-foreground"${_scopeId}>在线生成二维码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(QrCode), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "二维码生成器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "在线生成二维码")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Base64图片</p><p class="text-xs text-muted-foreground"${_scopeId}>图片与Base64互转</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64图片"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "图片与Base64互转")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>URL编码</p><p class="text-xs text-muted-foreground"${_scopeId}>URL编码解码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link2), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "URL编码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "URL编码解码")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=qrcode-scan-B1FPec1R.js.map
