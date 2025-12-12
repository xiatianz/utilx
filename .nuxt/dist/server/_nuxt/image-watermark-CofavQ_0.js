import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, watch, resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { ImageIcon, X, Upload, Download, RotateCcw, Info, Crop, ArrowRight, Zap, Layers } from "lucide-vue-next";
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
  __name: "image-watermark",
  __ssrInlineRender: true,
  setup(__props) {
    const uploadedImage = ref(null);
    const watermarkType = ref("text");
    const watermarkText = ref("© 版权所有");
    const watermarkImage = ref(null);
    const watermarkPosition = ref("bottom-right");
    const textSettings = ref({
      fontSize: 24,
      fontFamily: "Arial",
      color: "#FFFFFF",
      opacity: 0.5,
      rotation: 0
    });
    const imageSettings = ref({
      scale: 50,
      opacity: 0.5
    });
    const outputFormat = ref("png");
    const outputQuality = ref(90);
    const previewScale = ref(50);
    const processedImage = ref(null);
    const repeatWatermark = ref(false);
    const protectOriginal = ref(false);
    ref(false);
    const isProcessingBatch = ref(false);
    ref(null);
    ref(null);
    ref(null);
    const batchImages = ref([]);
    const positions = [
      { value: "top-left", name: "左上" },
      { value: "top-center", name: "顶部居中" },
      { value: "top-right", name: "右上" },
      { value: "center-left", name: "左侧居中" },
      { value: "center", name: "中心" },
      { value: "center-right", name: "右侧居中" },
      { value: "bottom-left", name: "左下" },
      { value: "bottom-center", name: "底部居中" },
      { value: "bottom-right", name: "右下" }
    ];
    const outputFormats = [
      { value: "png", name: "PNG" },
      { value: "jpg", name: "JPG" },
      { value: "webp", name: "WebP" }
    ];
    const canvas = ref(null);
    const batchProcessedCount = computed(() => {
      return batchImages.value.filter((img) => img.processedUrl).length;
    });
    watch([
      () => uploadedImage.value,
      watermarkType.value,
      watermarkText.value,
      watermarkPosition.value,
      textSettings.value,
      imageSettings.value,
      repeatWatermark.value
    ], () => {
      if (uploadedImage.value) {
        processImage();
      }
    });
    const processImage = async () => {
      if (!canvas.value || !uploadedImage.value) return;
      const ctx = canvas.value.getContext("2d");
      const img = new Image();
      await new Promise((resolve) => {
        img.onload = () => {
          const scale = previewScale.value / 100;
          canvas.value.width = img.width * scale;
          canvas.value.height = img.height * scale;
          ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
          ctx.drawImage(img, 0, 0, canvas.value.width, canvas.value.height);
          if (watermarkType.value === "text" && watermarkText.value) {
            addTextWatermark(ctx);
          } else if (watermarkType.value === "image" && watermarkImage.value) {
            addImageWatermark(ctx);
          }
          canvas.value.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            processedImage.value = url;
            resolve();
          }, getMimeType());
        };
        img.src = uploadedImage.value.url;
      });
    };
    const addTextWatermark = (ctx) => {
      const { width, height } = canvas.value;
      const {
        fontSize,
        fontFamily,
        color,
        opacity,
        rotation
      } = textSettings.value;
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.font = `${fontSize * (previewScale.value / 100)}px ${fontFamily}`;
      ctx.fillStyle = color;
      const { x, y } = getWatermarkPosition(width, height);
      if (rotation !== 0) {
        ctx.translate(x, y);
        ctx.rotate(rotation * Math.PI / 180);
        ctx.fillText(watermarkText.value, 0, 0);
      } else {
        ctx.fillText(watermarkText.value, x, y);
      }
      ctx.restore();
    };
    const addImageWatermark = async (ctx) => {
      if (!watermarkImage.value) return;
      const img = new Image();
      await new Promise((resolve) => {
        img.onload = () => {
          const { width, height } = canvas.value;
          const { scale, opacity } = imageSettings.value;
          ctx.save();
          ctx.globalAlpha = opacity;
          const watermarkWidth = img.width * scale / 100 * (previewScale.value / 100);
          const watermarkHeight = img.height * scale / 100 * (previewScale.value / 100);
          const { x, y } = getWatermarkPosition(width, height, watermarkWidth, watermarkHeight);
          ctx.drawImage(img, x, y, watermarkWidth, watermarkHeight);
          ctx.restore();
        };
        img.src = watermarkImage.value.url;
      });
    };
    const getWatermarkPosition = (width, height, watermarkWidth = 0, watermarkHeight = 0) => {
      const positions2 = {
        "top-left": { x: 20, y: 20 },
        "top-center": { x: (width - watermarkWidth) / 2, y: 20 },
        "top-right": { x: width - watermarkWidth - 20, y: 20 },
        "center-left": { x: 20, y: (height - watermarkHeight) / 2 },
        "center": { x: (width - watermarkWidth) / 2, y: (height - watermarkHeight) / 2 },
        "center-right": { x: width - watermarkWidth - 20, y: (height - watermarkHeight) / 2 },
        "bottom-left": { x: 20, y: height - watermarkHeight - 20 },
        "bottom-center": { x: (width - watermarkWidth) / 2, y: height - watermarkHeight - 20 },
        "bottom-right": { x: width - watermarkWidth - 20, y: height - watermarkHeight - 20 }
      };
      return positions2[watermarkPosition.value] || positions2["bottom-right"];
    };
    const getMimeType = () => {
      const mimeTypes = {
        png: "image/png",
        jpg: "image/jpeg",
        webp: "image/webp"
      };
      return mimeTypes[outputFormat.value] || "image/png";
    };
    useSeoMeta({
      title: "图片水印 - 在线添加文字/图片水印工具",
      description: "免费在线图片水印工具，支持文字和图片水印，批量处理，自定义位置和样式。",
      keywords: ["图片水印", "水印生成", "版权保护", "批量水印", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Plus = resolveComponent("Plus");
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-4313d35f><div class="mt-4 mb-8" data-v-4313d35f><h1 class="text-3xl font-bold mb-3" data-v-4313d35f>图片水印</h1><p class="text-muted-foreground" data-v-4313d35f>添加文字或图片水印，保护图片版权</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-4313d35f><div class="space-y-4" data-v-4313d35f><div class="bg-card rounded-lg p-6" data-v-4313d35f><h2 class="text-lg font-semibold mb-4" data-v-4313d35f>上传图片</h2><div class="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer" data-v-4313d35f><input type="file" class="hidden" accept="image/*" data-v-4313d35f>`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2" data-v-4313d35f>拖拽图片到这里</p><p class="text-sm text-muted-foreground" data-v-4313d35f>支持 JPG、PNG、WebP 等格式</p></div>`);
      if (uploadedImage.value) {
        _push(`<div class="mt-4 space-y-4" data-v-4313d35f><div class="relative" data-v-4313d35f><img${ssrRenderAttr("src", uploadedImage.value.url)}${ssrRenderAttr("alt", uploadedImage.value.name)} class="w-full rounded-lg" data-v-4313d35f><button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow" data-v-4313d35f>`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div><div class="text-sm text-muted-foreground" data-v-4313d35f><p data-v-4313d35f>文件名：${ssrInterpolate(uploadedImage.value.name)}</p><p data-v-4313d35f>尺寸：${ssrInterpolate(uploadedImage.value.width)} × ${ssrInterpolate(uploadedImage.value.height)} px</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6" data-v-4313d35f><h2 class="text-lg font-semibold mb-4" data-v-4313d35f>水印设置</h2><div class="space-y-4" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>水印类型</label><div class="mt-2 grid grid-cols-2 gap-2" data-v-4313d35f><button class="${ssrRenderClass([
        "px-4 py-2 rounded-md transition-colors",
        watermarkType.value === "text" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
      ])}" data-v-4313d35f> 文字水印 </button><button class="${ssrRenderClass([
        "px-4 py-2 rounded-md transition-colors",
        watermarkType.value === "image" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
      ])}" data-v-4313d35f> 图片水印 </button></div></div>`);
      if (watermarkType.value === "text") {
        _push(`<div class="space-y-4" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>水印文字</label><input${ssrRenderAttr("value", watermarkText.value)} type="text" placeholder="输入水印文字" class="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-4313d35f></div><div class="grid grid-cols-2 gap-3" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>字体大小</label><input${ssrRenderAttr("value", textSettings.value.fontSize)} type="number" min="12" max="200" class="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-4313d35f></div><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>字体</label><select class="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-4313d35f><option value="Arial" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Arial") : ssrLooseEqual(textSettings.value.fontFamily, "Arial")) ? " selected" : ""}>Arial</option><option value="Helvetica" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Helvetica") : ssrLooseEqual(textSettings.value.fontFamily, "Helvetica")) ? " selected" : ""}>Helvetica</option><option value="Times New Roman" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Times New Roman") : ssrLooseEqual(textSettings.value.fontFamily, "Times New Roman")) ? " selected" : ""}>Times New Roman</option><option value="Courier New" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Courier New") : ssrLooseEqual(textSettings.value.fontFamily, "Courier New")) ? " selected" : ""}>Courier New</option><option value="Georgia" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Georgia") : ssrLooseEqual(textSettings.value.fontFamily, "Georgia")) ? " selected" : ""}>Georgia</option><option value="Verdana" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Verdana") : ssrLooseEqual(textSettings.value.fontFamily, "Verdana")) ? " selected" : ""}>Verdana</option><option value="Comic Sans MS" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Comic Sans MS") : ssrLooseEqual(textSettings.value.fontFamily, "Comic Sans MS")) ? " selected" : ""}>Comic Sans MS</option></select></div></div><div class="grid grid-cols-3 gap-3" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>颜色</label><input${ssrRenderAttr("value", textSettings.value.color)} type="color" class="mt-1 w-full h-10 rounded cursor-pointer" data-v-4313d35f></div><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>透明度</label><div class="mt-1 flex items-center gap-2" data-v-4313d35f><input${ssrRenderAttr("value", textSettings.value.opacity)} type="range" min="0" max="1" step="0.1" class="flex-1" data-v-4313d35f><span class="text-sm w-12 text-right" data-v-4313d35f>${ssrInterpolate(Math.round(textSettings.value.opacity * 100))}%</span></div></div><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>旋转角度</label><div class="mt-1 flex items-center gap-2" data-v-4313d35f><input${ssrRenderAttr("value", textSettings.value.rotation)} type="range" min="-180" max="180" step="1" class="flex-1" data-v-4313d35f><span class="text-sm w-12 text-right" data-v-4313d35f>${ssrInterpolate(textSettings.value.rotation)}°</span></div></div></div></div>`);
      } else if (watermarkType.value === "image") {
        _push(`<div class="space-y-4" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>水印图片</label><div class="mt-2 border-2 border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer" data-v-4313d35f><input type="file" class="hidden" accept="image/*" data-v-4313d35f>`);
        _push(ssrRenderComponent(unref(Upload), { class: "w-8 h-8 mx-auto text-muted-foreground mb-2" }, null, _parent));
        _push(`<p class="text-sm" data-v-4313d35f>拖拽或点击上传水印图片</p></div>`);
        if (watermarkImage.value) {
          _push(`<div class="mt-2 relative" data-v-4313d35f><img${ssrRenderAttr("src", watermarkImage.value.url)}${ssrRenderAttr("alt", watermarkImage.value.name)} class="w-full max-h-32 object-contain rounded" data-v-4313d35f><button class="absolute top-1 right-1 p-1 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow" data-v-4313d35f>`);
          _push(ssrRenderComponent(unref(X), { class: "w-3 h-3" }, null, _parent));
          _push(`</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="grid grid-cols-2 gap-3" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>缩放</label><div class="mt-1 flex items-center gap-2" data-v-4313d35f><input${ssrRenderAttr("value", imageSettings.value.scale)} type="range" min="10" max="200" step="10" class="flex-1" data-v-4313d35f><span class="text-sm w-12 text-right" data-v-4313d35f>${ssrInterpolate(imageSettings.value.scale)}%</span></div></div><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>透明度</label><div class="mt-1 flex items-center gap-2" data-v-4313d35f><input${ssrRenderAttr("value", imageSettings.value.opacity)} type="range" min="0" max="1" step="0.1" class="flex-1" data-v-4313d35f><span class="text-sm w-12 text-right" data-v-4313d35f>${ssrInterpolate(Math.round(imageSettings.value.opacity * 100))}%</span></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>位置</label><div class="mt-2 grid grid-cols-3 gap-2" data-v-4313d35f><!--[-->`);
      ssrRenderList(positions, (position) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-2 rounded-md transition-colors text-sm",
          watermarkPosition.value === position.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}" data-v-4313d35f>${ssrInterpolate(position.name)}</button>`);
      });
      _push(`<!--]--></div></div><details class="mt-4" data-v-4313d35f><summary class="text-sm font-medium cursor-pointer" data-v-4313d35f>高级选项</summary><div class="mt-3 space-y-3" data-v-4313d35f><label class="flex items-center gap-2" data-v-4313d35f><input${ssrIncludeBooleanAttr(Array.isArray(repeatWatermark.value) ? ssrLooseContain(repeatWatermark.value, null) : repeatWatermark.value) ? " checked" : ""} type="checkbox" class="rounded" data-v-4313d35f><span class="text-sm" data-v-4313d35f>平铺水印</span></label><label class="flex items-center gap-2" data-v-4313d35f><input${ssrIncludeBooleanAttr(Array.isArray(protectOriginal.value) ? ssrLooseContain(protectOriginal.value, null) : protectOriginal.value) ? " checked" : ""} type="checkbox" class="rounded" checked data-v-4313d35f><span class="text-sm" data-v-4313d35f>保护原图（不可撤销）</span></label></div></details></div></div></div><div class="lg:col-span-2 space-y-4" data-v-4313d35f><div class="bg-card rounded-lg p-6" data-v-4313d35f><h2 class="text-lg font-semibold mb-4" data-v-4313d35f>预览效果</h2>`);
      if (!uploadedImage.value) {
        _push(`<div class="text-center py-12 text-muted-foreground" data-v-4313d35f>`);
        _push(ssrRenderComponent(unref(ImageIcon), { class: "w-16 h-16 mx-auto mb-4" }, null, _parent));
        _push(`<p data-v-4313d35f>上传图片开始添加水印</p></div>`);
      } else {
        _push(`<div class="space-y-4" data-v-4313d35f><div class="flex items-center gap-4" data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>预览缩放</label><input${ssrRenderAttr("value", previewScale.value)} type="range" min="10" max="100" step="10" class="flex-1" data-v-4313d35f><span class="text-sm font-mono w-12" data-v-4313d35f>${ssrInterpolate(previewScale.value)}%</span></div><div class="relative" data-v-4313d35f><canvas class="w-full border rounded-lg shadow-md bg-checkered" style="${ssrRenderStyle({ maxWidth: "100%", height: "auto" })}" data-v-4313d35f></canvas></div></div>`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6" data-v-4313d35f><h2 class="text-lg font-semibold mb-4" data-v-4313d35f>批量处理</h2><p class="text-sm text-muted-foreground mb-4" data-v-4313d35f> 上传多张图片，应用相同水印设置 </p><div class="border-2 border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer" data-v-4313d35f><input type="file" class="hidden" accept="image/*" multiple data-v-4313d35f>`);
      _push(ssrRenderComponent(_component_Plus, { class: "w-8 h-8 mx-auto text-muted-foreground mb-2" }, null, _parent));
      _push(`<p class="text-sm" data-v-4313d35f>添加多张图片</p></div>`);
      if (batchImages.value.length > 0) {
        _push(`<div class="mt-4 space-y-2" data-v-4313d35f><div class="flex justify-between items-center mb-2" data-v-4313d35f><span class="text-sm font-medium" data-v-4313d35f>${ssrInterpolate(batchImages.value.length)} 张图片</span><div class="flex gap-2" data-v-4313d35f><button${ssrIncludeBooleanAttr(isProcessingBatch.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50" data-v-4313d35f>${ssrInterpolate(isProcessingBatch.value ? "处理中..." : "批量添加水印")}</button><button class="px-3 py-1 text-sm text-destructive hover:bg-destructive/5 rounded-md transition-colors" data-v-4313d35f> 清空 </button></div></div><div class="max-h-48 overflow-y-auto space-y-2" data-v-4313d35f><!--[-->`);
        ssrRenderList(batchImages.value, (img, index) => {
          _push(`<div class="flex items-center gap-3 p-2 bg-muted rounded-lg" data-v-4313d35f><img${ssrRenderAttr("src", img.url)}${ssrRenderAttr("alt", img.name)} class="w-12 h-12 object-cover rounded" data-v-4313d35f><div class="flex-1 min-w-0" data-v-4313d35f><p class="text-sm font-medium truncate" data-v-4313d35f>${ssrInterpolate(img.name)}</p><p class="text-xs text-muted-foreground" data-v-4313d35f>${ssrInterpolate(img.status)}</p></div><button class="text-destructive hover:text-destructive/80" data-v-4313d35f>`);
          _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
          _push(`</button></div>`);
        });
        _push(`<!--]--></div>`);
        if (batchProcessedCount.value > 0) {
          _push(`<button class="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" data-v-4313d35f> 下载所有 (${ssrInterpolate(batchProcessedCount.value)} 张) </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6" data-v-4313d35f><h2 class="text-lg font-semibold mb-4" data-v-4313d35f>下载选项</h2><div class="space-y-4" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>输出格式</label><div class="mt-2 grid grid-cols-3 gap-2" data-v-4313d35f><!--[-->`);
      ssrRenderList(outputFormats, (format) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-2 rounded-md transition-colors text-sm",
          outputFormat.value === format.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}" data-v-4313d35f>${ssrInterpolate(format.name)}</button>`);
      });
      _push(`<!--]--></div></div><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>质量</label><div class="mt-2 flex items-center gap-3" data-v-4313d35f><input${ssrRenderAttr("value", outputQuality.value)} type="range" min="10" max="100" step="5" class="flex-1" data-v-4313d35f><span class="text-sm font-mono w-12 text-right" data-v-4313d35f>${ssrInterpolate(outputQuality.value)}%</span></div></div>`);
      if (processedImage.value) {
        _push(`<div class="flex gap-3" data-v-4313d35f><button class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2" data-v-4313d35f>`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` 下载图片 </button><button class="px-4 py-2 border border-muted text-muted-foreground rounded-md hover:bg-muted transition-colors flex items-center justify-center gap-2" data-v-4313d35f>`);
        _push(ssrRenderComponent(unref(RotateCcw), { class: "w-4 h-4" }, null, _parent));
        _push(` 重置 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="mt-12 space-y-6" data-v-4313d35f><div class="bg-card rounded-lg p-6" data-v-4313d35f><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-4313d35f>`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用说明 </h3><div class="space-y-4 text-sm text-muted-foreground" data-v-4313d35f><div data-v-4313d35f><h4 class="font-medium text-foreground mb-2" data-v-4313d35f>水印类型</h4><ul class="list-disc list-inside space-y-1 ml-4" data-v-4313d35f><li data-v-4313d35f><strong data-v-4313d35f>文字水印</strong>：添加文字内容，可自定义字体、颜色、透明度等</li><li data-v-4313d35f><strong data-v-4313d35f>图片水印</strong>：上传 Logo 或图标作为水印，可调整大小和透明度</li></ul></div><div data-v-4313d35f><h4 class="font-medium text-foreground mb-2" data-v-4313d35f>使用技巧</h4><ul class="list-disc list-inside space-y-1 ml-4" data-v-4313d35f><li data-v-4313d35f>使用半透明水印既能保护版权又不会过度遮挡图片</li><li data-v-4313d35f>将水印放置在角落位置，通常更美观</li><li data-v-4313d35f>批量处理功能可同时为多张图片添加水印</li><li data-v-4313d35f>建议在输出前调整合适的图片质量和格式</li></ul></div></div></div><div class="bg-card rounded-lg p-6" data-v-4313d35f><h3 class="text-lg font-semibold mb-4" data-v-4313d35f>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-4313d35f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-crop",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Crop), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-4313d35f${_scopeId}><p class="font-medium group-hover:text-primary" data-v-4313d35f${_scopeId}>图片裁剪</p><p class="text-xs text-muted-foreground" data-v-4313d35f${_scopeId}>在线裁剪图片</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Crop), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "图片裁剪"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "在线裁剪图片")
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
            _push2(`<div data-v-4313d35f${_scopeId}><p class="font-medium group-hover:text-primary" data-v-4313d35f${_scopeId}>图片压缩</p><p class="text-xs text-muted-foreground" data-v-4313d35f${_scopeId}>在线压缩图片</p></div>`);
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
        to: "/tools/image-merge",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Layers), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-4313d35f${_scopeId}><p class="font-medium group-hover:text-primary" data-v-4313d35f${_scopeId}>图片合并</p><p class="text-xs text-muted-foreground" data-v-4313d35f${_scopeId}>合并多张图片</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Layers), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "图片合并"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "合并多张图片")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/image-watermark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const imageWatermark = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4313d35f"]]);
export {
  imageWatermark as default
};
//# sourceMappingURL=image-watermark-CofavQ_0.js.map
