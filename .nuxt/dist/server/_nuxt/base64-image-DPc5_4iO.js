import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrLooseEqual } from "vue/server-renderer";
import { ImageIcon, Download, X, Plus, Info, Hash, ArrowRight, Zap, Code } from "lucide-vue-next";
import "jszip";
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
  __name: "base64-image",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedImage = ref(null);
    const base64Output = ref("");
    const base64Input = ref("");
    const decodedImage = ref(null);
    const downloadFilename = ref("image");
    const downloadFormat = ref("png");
    const includePrefix = ref(true);
    const optimizeBase64 = ref(true);
    const base64Copied = ref(false);
    ref(null);
    const batchItems = ref([{ base64: "", image: null }]);
    const sampleImages = [
      { id: 1, name: "示例1", url: "https://picsum.photos/200/200?random=1" },
      { id: 2, name: "示例2", url: "https://picsum.photos/200/200?random=2" },
      { id: 3, name: "示例3", url: "https://picsum.photos/200/200?random=3" }
    ];
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    useSeoMeta({
      title: "Base64图片 - 在线图片与Base64互转工具",
      description: "免费在线图片转Base64和Base64转图片工具，支持批量处理，直接预览和下载。",
      keywords: ["base64图片", "图片base64", "data url", "图片编码", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Base64 图片</h1><p class="text-muted-foreground">图片与 Base64 互转，支持在线预览和下载</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">图片转 Base64</h2><div class="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer mb-4"><input type="file" class="hidden" accept="image/*">`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2">拖拽图片到这里</p><p class="text-sm text-muted-foreground">或者点击选择文件</p></div>`);
      if (selectedImage.value) {
        _push(`<div class="space-y-4"><div class="p-4 bg-muted rounded-lg"><h3 class="text-sm font-medium mb-2">图片预览</h3><img${ssrRenderAttr("src", selectedImage.value.url)}${ssrRenderAttr("alt", selectedImage.value.name)} class="w-full max-h-64 object-contain rounded"><div class="mt-2 text-xs text-muted-foreground">${ssrInterpolate(selectedImage.value.name)} • ${ssrInterpolate(formatFileSize(selectedImage.value.size))}</div></div><div><div class="flex items-center justify-between mb-2"><h3 class="text-sm font-medium">Base64 编码</h3><div class="flex gap-2"><button class="px-3 py-1 text-sm text-primary hover:text-primary/80 transition-colors">${ssrInterpolate(base64Copied.value ? "已复制" : "复制")}</button><button class="px-3 py-1 text-sm text-destructive hover:text-destructive/80 transition-colors"> 清空 </button></div></div><div class="relative"><textarea readonly rows="6" class="w-full px-3 py-2 border rounded-md bg-muted font-mono text-xs resize-none" placeholder="Base64 编码将显示在这里">${ssrInterpolate(base64Output.value)}</textarea><div class="absolute bottom-2 right-2 text-xs text-muted-foreground">${ssrInterpolate(base64Output.value.length)} 字符 </div></div></div><div class="space-y-3"><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(includePrefix.value) ? ssrLooseContain(includePrefix.value, null) : includePrefix.value) ? " checked" : ""} type="checkbox" class="rounded"><span class="text-sm">包含 Data URL 前缀</span></label><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(optimizeBase64.value) ? ssrLooseContain(optimizeBase64.value, null) : optimizeBase64.value) ? " checked" : ""} type="checkbox" class="rounded"><span class="text-sm">移除换行符和空格</span></label></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">示例图片</h2><div class="grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(sampleImages, (sample) => {
        _push(`<button class="aspect-square rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all"><img${ssrRenderAttr("src", sample.url)}${ssrRenderAttr("alt", sample.name)} class="w-full h-full object-cover"></button>`);
      });
      _push(`<!--]--></div></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">Base64 转图片</h2><div class="space-y-4"><div><label class="text-sm font-medium">粘贴 Base64 字符串</label><textarea rows="6" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm resize-none" placeholder="粘贴 Base64 字符串或 Data URL">${ssrInterpolate(base64Input.value)}</textarea></div><div class="flex gap-2"><button class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"> 转换为图片 </button><button class="px-4 py-2 border border-muted text-muted-foreground rounded-md hover:bg-muted transition-colors"> 清空 </button></div>`);
      if (decodedImage.value) {
        _push(`<div class="space-y-4"><div class="p-4 bg-muted rounded-lg"><h3 class="text-sm font-medium mb-2">预览</h3><img${ssrRenderAttr("src", decodedImage.value.url)} alt="Decoded image" class="w-full max-h-64 object-contain rounded"><div class="mt-2 text-xs text-muted-foreground">${ssrInterpolate(decodedImage.value.format)} • ${ssrInterpolate(formatFileSize(decodedImage.value.size))}</div></div><div class="space-y-3"><div><label class="text-sm font-medium">文件名</label><input${ssrRenderAttr("value", downloadFilename.value)} type="text" placeholder="image" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"></div><div><label class="text-sm font-medium">保存格式</label><select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"><option value="png"${ssrIncludeBooleanAttr(Array.isArray(downloadFormat.value) ? ssrLooseContain(downloadFormat.value, "png") : ssrLooseEqual(downloadFormat.value, "png")) ? " selected" : ""}>PNG</option><option value="jpeg"${ssrIncludeBooleanAttr(Array.isArray(downloadFormat.value) ? ssrLooseContain(downloadFormat.value, "jpeg") : ssrLooseEqual(downloadFormat.value, "jpeg")) ? " selected" : ""}>JPEG</option><option value="webp"${ssrIncludeBooleanAttr(Array.isArray(downloadFormat.value) ? ssrLooseContain(downloadFormat.value, "webp") : ssrLooseEqual(downloadFormat.value, "webp")) ? " selected" : ""}>WebP</option></select></div><button class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` 下载图片 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">批量转换</h2><p class="text-sm text-muted-foreground mb-4"> 同时处理多个 Base64 字符串，批量转换为图片 </p><div class="space-y-3"><!--[-->`);
      ssrRenderList(batchItems.value, (item, index) => {
        _push(`<div class="space-y-2"><textarea rows="3" class="w-full px-3 py-2 border rounded-md font-mono text-xs resize-none"${ssrRenderAttr("placeholder", `Base64 ${index + 1}`)}>${ssrInterpolate(item.base64)}</textarea>`);
        if (item.image) {
          _push(`<div class="flex items-center gap-2 p-2 bg-muted rounded"><img${ssrRenderAttr("src", item.image)} alt="Preview" class="w-12 h-12 object-cover rounded"><span class="text-sm flex-1">已解析</span><button class="text-destructive hover:text-destructive/80">`);
          _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
          _push(`</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><div class="flex gap-2"><button class="flex-1 px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors flex items-center justify-center gap-2">`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent));
      _push(` 添加项 </button>`);
      if (batchItems.value.some((item) => item.image)) {
        _push(`<button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` 下载所有 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 关于 Base64 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">什么是 Base64？</h4><p>Base64 是一种基于64个可打印字符来表示二进制数据的编码方法。常用于在文本协议中传输二进制数据。</p></div><div><h4 class="font-medium text-foreground mb-2">Data URL 格式</h4><code class="block bg-muted p-3 rounded-md text-xs"> data:[MIME-type];base64,[base64-data] </code></div><div><h4 class="font-medium text-foreground mb-2">使用场景</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>在 HTML/CSS 中直接嵌入小图片</li><li>电子邮件中的图片附件</li><li>API 接口传输图片数据</li><li>减少 HTTP 请求数量</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/base64-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Base64 编码</p><p class="text-xs text-muted-foreground"${_scopeId}>文本Base64编码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 编码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "文本Base64编码")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-compress",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>图片压缩</p><p class="text-xs text-muted-foreground"${_scopeId}>在线压缩图片</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Zap), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "图片压缩"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "在线压缩图片")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/html-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Code), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>HTML 编码</p><p class="text-xs text-muted-foreground"${_scopeId}>HTML实体编码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Code), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "HTML 编码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "HTML实体编码")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/base64-image.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=base64-image-DPc5_4iO.js.map
