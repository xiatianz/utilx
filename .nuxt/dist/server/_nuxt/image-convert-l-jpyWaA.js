import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { Plus, X, ImageIcon, RefreshCw, Download, Archive, Info, Zap, ArrowRight, Maximize2, Hash } from "lucide-vue-next";
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
  __name: "image-convert",
  __ssrInlineRender: true,
  setup(__props) {
    const images = ref([]);
    const targetFormat = ref("webp");
    const jpegQuality = ref(90);
    const pngOptimized = ref(false);
    const keepOriginal = ref(true);
    const autoRename = ref(true);
    const isConverting = ref(false);
    ref(null);
    const formats = [
      {
        value: "jpeg",
        name: "JPEG",
        ext: ".jpg",
        icon: "🖼️",
        description: "适合照片，有损压缩，文件小"
      },
      {
        value: "png",
        name: "PNG",
        ext: ".png",
        icon: "🗺️",
        description: "支持透明，无损压缩，适合图标"
      },
      {
        value: "webp",
        name: "WebP",
        ext: ".webp",
        icon: "🌐",
        description: "新一代格式，高压缩率，支持动画"
      },
      {
        value: "avif",
        name: "AVIF",
        ext: ".avif",
        icon: "🎨",
        description: "最新格式，超高压缩率，实验性支持"
      },
      {
        value: "gif",
        name: "GIF",
        ext: ".gif",
        icon: "🎬",
        description: "支持动画，256色，适合简单图像"
      },
      {
        value: "bmp",
        name: "BMP",
        ext: ".bmp",
        icon: "📋",
        description: "无压缩位图，文件较大"
      }
    ];
    const hasConvertedImages = computed(() => {
      return images.value.some((img) => img.convertedUrl);
    });
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    useSeoMeta({
      title: "图片格式转换 - 在线图片格式转换工具",
      description: "免费在线图片格式转换工具，支持JPG、PNG、WebP、GIF等格式互转，批量处理，保持高质量。",
      keywords: ["图片格式转换", "图片转WebP", "JPG转PNG", "格式转换", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">图片格式转换</h1><p class="text-muted-foreground">支持多种图片格式之间的相互转换，批量处理</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">图片列表</h2><div class="border-2 border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer mb-4"><input type="file" class="hidden" accept="image/*" multiple>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-8 h-8 mx-auto text-muted-foreground mb-2" }, null, _parent));
      _push(`<p class="text-sm">点击或拖拽添加图片</p></div><div class="space-y-2 max-h-96 overflow-y-auto"><!--[-->`);
      ssrRenderList(images.value, (image, index) => {
        _push(`<div class="flex items-center gap-3 p-3 bg-muted rounded-lg group"><img${ssrRenderAttr("src", image.preview)}${ssrRenderAttr("alt", image.name)} class="w-12 h-12 object-cover rounded"><div class="flex-1 min-w-0"><p class="text-sm font-medium truncate">${ssrInterpolate(image.name)}</p><p class="text-xs text-muted-foreground">${ssrInterpolate(image.format)} • ${ssrInterpolate(formatFileSize(image.size))}</p></div><button class="opacity-0 group-hover:opacity-100 p-1 hover:text-destructive transition-all">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div>`);
      });
      _push(`<!--]--></div>`);
      if (images.value.length > 0) {
        _push(`<div class="mt-4 pt-4 border-t space-y-2"><button class="w-full px-3 py-2 text-sm text-destructive hover:bg-destructive/5 rounded-md transition-colors"> 清空列表 </button><p class="text-xs text-muted-foreground text-center"> 共 ${ssrInterpolate(images.value.length)} 张图片 </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">转换设置</h2><div class="space-y-4"><div><label class="text-sm font-medium">目标格式</label><div class="mt-2 grid grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(formats, (format) => {
        _push(`<button class="${ssrRenderClass([
          "p-3 rounded-lg border transition-all",
          targetFormat.value === format.value ? "border-primary bg-primary/5" : "border-border hover:border-primary"
        ])}"><div class="flex items-center gap-2"><span class="text-2xl">${ssrInterpolate(format.icon)}</span><div class="text-left"><div class="font-medium text-sm">${ssrInterpolate(format.name)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(format.ext)}</div></div></div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (targetFormat.value === "jpeg") {
        _push(`<div><label class="text-sm font-medium">JPEG质量</label><div class="mt-2 space-y-2"><div class="flex justify-between text-sm"><span>质量</span><span class="font-mono">${ssrInterpolate(jpegQuality.value)}%</span></div><input${ssrRenderAttr("value", jpegQuality.value)} type="range" min="10" max="100" step="5" class="w-full"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (targetFormat.value === "png") {
        _push(`<div><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(pngOptimized.value) ? ssrLooseContain(pngOptimized.value, null) : pngOptimized.value) ? " checked" : ""} type="checkbox" class="rounded"><span class="text-sm">优化压缩</span></label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<details><summary class="text-sm font-medium cursor-pointer">高级选项</summary><div class="mt-3 space-y-3"><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(keepOriginal.value) ? ssrLooseContain(keepOriginal.value, null) : keepOriginal.value) ? " checked" : ""} type="checkbox" class="rounded"><span class="text-sm">保持原始尺寸</span></label><label class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(autoRename.value) ? ssrLooseContain(autoRename.value, null) : autoRename.value) ? " checked" : ""} type="checkbox" class="rounded" checked><span class="text-sm">自动重命名</span></label></div></details></div></div></div><div class="lg:col-span-2 space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">转换预览</h2>`);
      if (images.value.length === 0) {
        _push(`<div class="text-center py-12 text-muted-foreground">`);
        _push(ssrRenderComponent(unref(ImageIcon), { class: "w-16 h-16 mx-auto mb-4" }, null, _parent));
        _push(`<p>请添加图片开始转换</p></div>`);
      } else {
        _push(`<div class="space-y-4"><div class="flex justify-center"><button${ssrIncludeBooleanAttr(isConverting.value) ? " disabled" : ""} class="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2">`);
        if (isConverting.value) {
          _push(ssrRenderComponent(unref(RefreshCw), { class: "w-4 h-4 animate-spin" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(isConverting.value ? "转换中..." : "开始转换")}</button></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
        ssrRenderList(images.value, (image, index) => {
          _push(`<div class="space-y-2"><h3 class="text-sm font-medium">${ssrInterpolate(image.name)}</h3><div class="grid grid-cols-2 gap-2"><div><p class="text-xs text-muted-foreground mb-1">原图 (${ssrInterpolate(image.format)})</p><div class="relative group"><img${ssrRenderAttr("src", image.preview)}${ssrRenderAttr("alt", image.name)} class="w-full h-32 object-cover rounded border"></div><p class="text-xs text-muted-foreground mt-1">${ssrInterpolate(image.width)}×${ssrInterpolate(image.height)} • ${ssrInterpolate(formatFileSize(image.size))}</p></div><div><p class="text-xs text-muted-foreground mb-1"> 转换后 (${ssrInterpolate(formats.find((f) => f.value === targetFormat.value)?.name)}) </p><div class="relative group">`);
          if (image.convertedUrl) {
            _push(`<div class="relative"><img${ssrRenderAttr("src", image.convertedUrl)}${ssrRenderAttr("alt", image.name)} class="w-full h-32 object-cover rounded border"><div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center"><button class="p-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors">`);
            _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
            _push(`</button></div></div>`);
          } else {
            _push(`<div class="w-full h-32 bg-muted rounded flex items-center justify-center"><span class="text-sm text-muted-foreground">${ssrInterpolate(isConverting.value ? "转换中..." : "等待转换")}</span></div>`);
          }
          _push(`</div>`);
          if (image.convertedSize) {
            _push(`<p class="text-xs text-muted-foreground mt-1">${ssrInterpolate(image.convertedWidth)}×${ssrInterpolate(image.convertedHeight)} • ${ssrInterpolate(formatFileSize(image.convertedSize))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
      if (hasConvertedImages.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">批量下载</h2><div class="grid grid-cols-2 gap-3"><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Archive), { class: "w-4 h-4" }, null, _parent));
        _push(` 下载为ZIP </button><button class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` 逐个下载 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">格式说明</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(formats, (format) => {
        _push(`<div class="p-4 border rounded-lg"><div class="flex items-center gap-3 mb-2"><span class="text-2xl">${ssrInterpolate(format.icon)}</span><h3 class="font-medium">${ssrInterpolate(format.name)}</h3></div><p class="text-sm text-muted-foreground">${ssrInterpolate(format.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用说明 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">支持的格式</h4><p class="mb-2">输入格式：JPG/JPEG、PNG、WebP、GIF、BMP、TIFF、ICO</p><p>输出格式：JPG、PNG、WebP、AVIF（实验性）、GIF、BMP</p></div><div><h4 class="font-medium text-foreground mb-2">使用提示</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>支持批量转换，可同时处理多张图片</li><li>JPG适合照片，有损压缩但文件较小</li><li>PNG支持透明通道，适合图标和截图</li><li>WebP格式在保持画质的同时有更好的压缩率</li><li>转换后可批量下载为ZIP文件</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/image-convert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=image-convert-l-jpyWaA.js.map
