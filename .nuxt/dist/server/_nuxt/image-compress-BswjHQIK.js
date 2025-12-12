import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { ImageIcon, ChevronLeft, ChevronRight, Download, Trash2, Info, RefreshCw, ArrowRight, Maximize2, Hash } from "lucide-vue-next";
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
  __name: "image-compress",
  __ssrInlineRender: true,
  setup(__props) {
    const images = ref([]);
    const currentIndex = ref(0);
    const isDragging = ref(false);
    const quality = ref(80);
    const outputFormat = ref("original");
    const removeMetadata = ref(true);
    const progressive = ref(false);
    ref(null);
    const sampleImages = [
      { id: 1, name: "示例1", url: "https://picsum.photos/400/300?random=1" },
      { id: 2, name: "示例2", url: "https://picsum.photos/400/300?random=2" },
      { id: 3, name: "示例3", url: "https://picsum.photos/400/300?random=3" },
      { id: 4, name: "示例4", url: "https://picsum.photos/400/300?random=4" }
    ];
    const qualityPresets = [
      { name: "高清", quality: 95 },
      { name: "标准", quality: 80 },
      { name: "平衡", quality: 60 },
      { name: "高速", quality: 40 }
    ];
    const currentImage = computed(() => images.value[currentIndex.value] || null);
    const originalSize = computed(() => {
      return images.value.reduce((total, img) => total + img.originalSize, 0);
    });
    const compressedSize = computed(() => {
      return images.value.reduce((total, img) => total + (img.compressedSize || 0), 0);
    });
    const savedSize = computed(() => {
      const saved = originalSize.value - compressedSize.value;
      return formatFileSize(saved);
    });
    const compressionRatio = computed(() => {
      if (originalSize.value === 0) return 0;
      return Math.round((1 - compressedSize.value / originalSize.value) * 100);
    });
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    useSeoMeta({
      title: "图片压缩 - 在线图片压缩工具",
      description: "免费在线图片压缩工具，支持JPG、PNG、WebP格式，可自定义压缩质量，保持画质的同时减小文件大小。",
      keywords: ["图片压缩", "在线压缩", "JPG压缩", "PNG压缩", "图片优化", "图片大小"]
    });
    watch(images, (newImages) => {
      if (newImages.length === 0) return;
      newImages.forEach((img, index) => {
        if (index !== currentIndex.value && img.compressedUrl) {
          if (Math.abs(index - currentIndex.value) > 2) {
            URL.revokeObjectURL(img.compressedUrl);
            img.compressedUrl = null;
            img.compressedSize = null;
          }
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">图片压缩</h1><p class="text-muted-foreground">在线压缩图片，支持多种格式和质量调节</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">上传图片</h2><div class="${ssrRenderClass([{ "border-primary bg-primary/5": isDragging.value }, "border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"])}"><input type="file" class="hidden" accept="image/*" multiple>`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2">拖拽图片到这里上传</p><p class="text-sm text-muted-foreground mb-4">或者点击选择文件</p><p class="text-xs text-muted-foreground">支持 JPG、PNG、WebP、GIF 格式</p></div><div class="mt-4"><p class="text-sm font-medium mb-2">快速示例</p><div class="grid grid-cols-4 gap-2"><!--[-->`);
      ssrRenderList(sampleImages, (sample) => {
        _push(`<button class="aspect-square rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all"><img${ssrRenderAttr("src", sample.url)}${ssrRenderAttr("alt", sample.name)} class="w-full h-full object-cover"></button>`);
      });
      _push(`<!--]--></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">压缩设置</h2><div class="space-y-4"><div><label class="text-sm font-medium">压缩质量</label><div class="mt-2 space-y-2"><div class="flex items-center justify-between"><span class="text-sm text-muted-foreground">质量</span><span class="text-sm font-mono">${ssrInterpolate(quality.value)}%</span></div><input${ssrRenderAttr("value", quality.value)} type="range" min="10" max="100" step="5" class="w-full"></div></div><div><label class="text-sm font-medium">输出格式</label><select class="w-full mt-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="original"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "original") : ssrLooseEqual(outputFormat.value, "original")) ? " selected" : ""}>保持原格式</option><option value="jpeg"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "jpeg") : ssrLooseEqual(outputFormat.value, "jpeg")) ? " selected" : ""}>JPEG</option><option value="png"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "png") : ssrLooseEqual(outputFormat.value, "png")) ? " selected" : ""}>PNG</option><option value="webp"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "webp") : ssrLooseEqual(outputFormat.value, "webp")) ? " selected" : ""}>WebP</option><option value="avif"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "avif") : ssrLooseEqual(outputFormat.value, "avif")) ? " selected" : ""}>AVIF (实验性)</option></select></div><div><label class="text-sm font-medium">快速预设</label><div class="mt-2 grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(qualityPresets, (preset) => {
        _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm">${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div><details class="mt-4"><summary class="text-sm font-medium cursor-pointer">高级选项</summary><div class="mt-3 space-y-3"><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(removeMetadata.value) ? ssrLooseContain(removeMetadata.value, null) : removeMetadata.value) ? " checked" : ""} type="checkbox" class="rounded"><span class="text-sm">移除EXIF元数据</span></label><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(progressive.value) ? ssrLooseContain(progressive.value, null) : progressive.value) ? " checked" : ""} type="checkbox" class="rounded"><span class="text-sm">渐进式JPEG</span></label></div></details></div></div></div><div class="space-y-4">`);
      if (images.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">压缩统计</h2><div class="grid grid-cols-2 gap-4"><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">原始大小</div><div class="text-xl font-bold">${ssrInterpolate(formatFileSize(originalSize.value))}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">压缩后大小</div><div class="text-xl font-bold text-primary">${ssrInterpolate(formatFileSize(compressedSize.value))}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">节省空间</div><div class="text-xl font-bold text-green-600">${ssrInterpolate(savedSize.value)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">压缩率</div><div class="text-xl font-bold text-blue-600">${ssrInterpolate(compressionRatio.value)}%</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (images.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">预览对比</h2>`);
        if (images.value.length > 1) {
          _push(`<div class="mb-4"><div class="flex items-center justify-between"><button${ssrIncludeBooleanAttr(currentIndex.value === 0) ? " disabled" : ""} class="p-2 rounded hover:bg-muted transition-colors disabled:opacity-50">`);
          _push(ssrRenderComponent(unref(ChevronLeft), { class: "w-5 h-5" }, null, _parent));
          _push(`</button><span class="text-sm text-muted-foreground">${ssrInterpolate(currentIndex.value + 1)} / ${ssrInterpolate(images.value.length)}</span><button${ssrIncludeBooleanAttr(currentIndex.value === images.value.length - 1) ? " disabled" : ""} class="p-2 rounded hover:bg-muted transition-colors disabled:opacity-50">`);
          _push(ssrRenderComponent(unref(ChevronRight), { class: "w-5 h-5" }, null, _parent));
          _push(`</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (currentImage.value) {
          _push(`<div class="space-y-4"><div class="grid grid-cols-2 gap-4"><div><h3 class="text-sm font-medium mb-2">原图</h3><div class="relative group"><img${ssrRenderAttr("src", currentImage.value.originalUrl)}${ssrRenderAttr("alt", currentImage.value.name)} class="w-full rounded-lg border"><div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center"><button class="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors"> 下载原图 </button></div></div><div class="mt-2 text-xs text-muted-foreground">${ssrInterpolate(currentImage.value.originalWidth)} × ${ssrInterpolate(currentImage.value.originalHeight)} • ${ssrInterpolate(formatFileSize(currentImage.value.originalSize))}</div></div><div><h3 class="text-sm font-medium mb-2">压缩后</h3><div class="relative group">`);
          if (currentImage.value.compressedUrl) {
            _push(`<img${ssrRenderAttr("src", currentImage.value.compressedUrl)}${ssrRenderAttr("alt", currentImage.value.name)} class="w-full rounded-lg border">`);
          } else {
            _push(`<!---->`);
          }
          if (currentImage.value.compressedUrl) {
            _push(`<div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center"><button class="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors"> 下载压缩图 </button></div>`);
          } else {
            _push(`<div class="w-full h-48 bg-muted rounded-lg flex items-center justify-center"><span class="text-muted-foreground">压缩中...</span></div>`);
          }
          _push(`</div>`);
          if (currentImage.value.compressedSize) {
            _push(`<div class="mt-2 text-xs text-muted-foreground">${ssrInterpolate(currentImage.value.compressedWidth)} × ${ssrInterpolate(currentImage.value.compressedHeight)} • ${ssrInterpolate(formatFileSize(currentImage.value.compressedSize))}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (images.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">批量操作</h2><div class="grid grid-cols-2 gap-3"><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` 下载所有 </button><button class="px-4 py-2 border border-destructive text-destructive rounded-md hover:bg-destructive/5 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent));
        _push(` 清空所有 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用说明 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">支持的格式</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>输入：JPG、PNG、WebP、GIF、BMP、TIFF</li><li>输出：JPG、PNG、WebP、AVIF（实验性）</li></ul></div><div><h4 class="font-medium text-foreground mb-2">压缩提示</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>质量越低，文件越小，但画质损失越大</li><li>JPG适合照片，PNG适合透明图像</li><li>WebP格式在保持画质的同时有更好的压缩率</li><li>移除EXIF可以进一步减小文件大小</li></ul></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RefreshCw), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>图片格式转换</p><p class="text-xs text-muted-foreground"${_scopeId}>转换图片格式</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(RefreshCw), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "图片格式转换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "转换图片格式")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-resize",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Maximize2), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>图片尺寸调整</p><p class="text-xs text-muted-foreground"${_scopeId}>调整图片尺寸</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Maximize2), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "图片尺寸调整"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "调整图片尺寸")
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
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/image-compress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=image-compress-BswjHQIK.js.map
