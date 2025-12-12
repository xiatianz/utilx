import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { ImageIcon, X, Upload, Download, RotateCcw, Info, Crop, ArrowRight, Zap, Layers } from 'lucide-vue-next';
import { f as useSeoMeta } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  __name: "image-watermark",
  __ssrInlineRender: true,
  setup(__props) {
    const uploadedImage = ref(null);
    const watermarkType = ref("text");
    const watermarkText = ref("\xA9 \u7248\u6743\u6240\u6709");
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
      { value: "top-left", name: "\u5DE6\u4E0A" },
      { value: "top-center", name: "\u9876\u90E8\u5C45\u4E2D" },
      { value: "top-right", name: "\u53F3\u4E0A" },
      { value: "center-left", name: "\u5DE6\u4FA7\u5C45\u4E2D" },
      { value: "center", name: "\u4E2D\u5FC3" },
      { value: "center-right", name: "\u53F3\u4FA7\u5C45\u4E2D" },
      { value: "bottom-left", name: "\u5DE6\u4E0B" },
      { value: "bottom-center", name: "\u5E95\u90E8\u5C45\u4E2D" },
      { value: "bottom-right", name: "\u53F3\u4E0B" }
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
      title: "\u56FE\u7247\u6C34\u5370 - \u5728\u7EBF\u6DFB\u52A0\u6587\u5B57/\u56FE\u7247\u6C34\u5370\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u56FE\u7247\u6C34\u5370\u5DE5\u5177\uFF0C\u652F\u6301\u6587\u5B57\u548C\u56FE\u7247\u6C34\u5370\uFF0C\u6279\u91CF\u5904\u7406\uFF0C\u81EA\u5B9A\u4E49\u4F4D\u7F6E\u548C\u6837\u5F0F\u3002",
      keywords: ["\u56FE\u7247\u6C34\u5370", "\u6C34\u5370\u751F\u6210", "\u7248\u6743\u4FDD\u62A4", "\u6279\u91CF\u6C34\u5370", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Plus = resolveComponent("Plus");
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-4313d35f><div class="mt-4 mb-8" data-v-4313d35f><h1 class="text-3xl font-bold mb-3" data-v-4313d35f>\u56FE\u7247\u6C34\u5370</h1><p class="text-muted-foreground" data-v-4313d35f>\u6DFB\u52A0\u6587\u5B57\u6216\u56FE\u7247\u6C34\u5370\uFF0C\u4FDD\u62A4\u56FE\u7247\u7248\u6743</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-4313d35f><div class="space-y-4" data-v-4313d35f><div class="bg-card rounded-lg p-6" data-v-4313d35f><h2 class="text-lg font-semibold mb-4" data-v-4313d35f>\u4E0A\u4F20\u56FE\u7247</h2><div class="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer" data-v-4313d35f><input type="file" class="hidden" accept="image/*" data-v-4313d35f>`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2" data-v-4313d35f>\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u91CC</p><p class="text-sm text-muted-foreground" data-v-4313d35f>\u652F\u6301 JPG\u3001PNG\u3001WebP \u7B49\u683C\u5F0F</p></div>`);
      if (uploadedImage.value) {
        _push(`<div class="mt-4 space-y-4" data-v-4313d35f><div class="relative" data-v-4313d35f><img${ssrRenderAttr("src", uploadedImage.value.url)}${ssrRenderAttr("alt", uploadedImage.value.name)} class="w-full rounded-lg" data-v-4313d35f><button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow" data-v-4313d35f>`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div><div class="text-sm text-muted-foreground" data-v-4313d35f><p data-v-4313d35f>\u6587\u4EF6\u540D\uFF1A${ssrInterpolate(uploadedImage.value.name)}</p><p data-v-4313d35f>\u5C3A\u5BF8\uFF1A${ssrInterpolate(uploadedImage.value.width)} \xD7 ${ssrInterpolate(uploadedImage.value.height)} px</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6" data-v-4313d35f><h2 class="text-lg font-semibold mb-4" data-v-4313d35f>\u6C34\u5370\u8BBE\u7F6E</h2><div class="space-y-4" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u6C34\u5370\u7C7B\u578B</label><div class="mt-2 grid grid-cols-2 gap-2" data-v-4313d35f><button class="${ssrRenderClass([
        "px-4 py-2 rounded-md transition-colors",
        watermarkType.value === "text" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
      ])}" data-v-4313d35f> \u6587\u5B57\u6C34\u5370 </button><button class="${ssrRenderClass([
        "px-4 py-2 rounded-md transition-colors",
        watermarkType.value === "image" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
      ])}" data-v-4313d35f> \u56FE\u7247\u6C34\u5370 </button></div></div>`);
      if (watermarkType.value === "text") {
        _push(`<div class="space-y-4" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u6C34\u5370\u6587\u5B57</label><input${ssrRenderAttr("value", watermarkText.value)} type="text" placeholder="\u8F93\u5165\u6C34\u5370\u6587\u5B57" class="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-4313d35f></div><div class="grid grid-cols-2 gap-3" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u5B57\u4F53\u5927\u5C0F</label><input${ssrRenderAttr("value", textSettings.value.fontSize)} type="number" min="12" max="200" class="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-4313d35f></div><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u5B57\u4F53</label><select class="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-4313d35f><option value="Arial" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Arial") : ssrLooseEqual(textSettings.value.fontFamily, "Arial")) ? " selected" : ""}>Arial</option><option value="Helvetica" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Helvetica") : ssrLooseEqual(textSettings.value.fontFamily, "Helvetica")) ? " selected" : ""}>Helvetica</option><option value="Times New Roman" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Times New Roman") : ssrLooseEqual(textSettings.value.fontFamily, "Times New Roman")) ? " selected" : ""}>Times New Roman</option><option value="Courier New" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Courier New") : ssrLooseEqual(textSettings.value.fontFamily, "Courier New")) ? " selected" : ""}>Courier New</option><option value="Georgia" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Georgia") : ssrLooseEqual(textSettings.value.fontFamily, "Georgia")) ? " selected" : ""}>Georgia</option><option value="Verdana" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Verdana") : ssrLooseEqual(textSettings.value.fontFamily, "Verdana")) ? " selected" : ""}>Verdana</option><option value="Comic Sans MS" data-v-4313d35f${ssrIncludeBooleanAttr(Array.isArray(textSettings.value.fontFamily) ? ssrLooseContain(textSettings.value.fontFamily, "Comic Sans MS") : ssrLooseEqual(textSettings.value.fontFamily, "Comic Sans MS")) ? " selected" : ""}>Comic Sans MS</option></select></div></div><div class="grid grid-cols-3 gap-3" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u989C\u8272</label><input${ssrRenderAttr("value", textSettings.value.color)} type="color" class="mt-1 w-full h-10 rounded cursor-pointer" data-v-4313d35f></div><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u900F\u660E\u5EA6</label><div class="mt-1 flex items-center gap-2" data-v-4313d35f><input${ssrRenderAttr("value", textSettings.value.opacity)} type="range" min="0" max="1" step="0.1" class="flex-1" data-v-4313d35f><span class="text-sm w-12 text-right" data-v-4313d35f>${ssrInterpolate(Math.round(textSettings.value.opacity * 100))}%</span></div></div><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u65CB\u8F6C\u89D2\u5EA6</label><div class="mt-1 flex items-center gap-2" data-v-4313d35f><input${ssrRenderAttr("value", textSettings.value.rotation)} type="range" min="-180" max="180" step="1" class="flex-1" data-v-4313d35f><span class="text-sm w-12 text-right" data-v-4313d35f>${ssrInterpolate(textSettings.value.rotation)}\xB0</span></div></div></div></div>`);
      } else if (watermarkType.value === "image") {
        _push(`<div class="space-y-4" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u6C34\u5370\u56FE\u7247</label><div class="mt-2 border-2 border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer" data-v-4313d35f><input type="file" class="hidden" accept="image/*" data-v-4313d35f>`);
        _push(ssrRenderComponent(unref(Upload), { class: "w-8 h-8 mx-auto text-muted-foreground mb-2" }, null, _parent));
        _push(`<p class="text-sm" data-v-4313d35f>\u62D6\u62FD\u6216\u70B9\u51FB\u4E0A\u4F20\u6C34\u5370\u56FE\u7247</p></div>`);
        if (watermarkImage.value) {
          _push(`<div class="mt-2 relative" data-v-4313d35f><img${ssrRenderAttr("src", watermarkImage.value.url)}${ssrRenderAttr("alt", watermarkImage.value.name)} class="w-full max-h-32 object-contain rounded" data-v-4313d35f><button class="absolute top-1 right-1 p-1 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow" data-v-4313d35f>`);
          _push(ssrRenderComponent(unref(X), { class: "w-3 h-3" }, null, _parent));
          _push(`</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="grid grid-cols-2 gap-3" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u7F29\u653E</label><div class="mt-1 flex items-center gap-2" data-v-4313d35f><input${ssrRenderAttr("value", imageSettings.value.scale)} type="range" min="10" max="200" step="10" class="flex-1" data-v-4313d35f><span class="text-sm w-12 text-right" data-v-4313d35f>${ssrInterpolate(imageSettings.value.scale)}%</span></div></div><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u900F\u660E\u5EA6</label><div class="mt-1 flex items-center gap-2" data-v-4313d35f><input${ssrRenderAttr("value", imageSettings.value.opacity)} type="range" min="0" max="1" step="0.1" class="flex-1" data-v-4313d35f><span class="text-sm w-12 text-right" data-v-4313d35f>${ssrInterpolate(Math.round(imageSettings.value.opacity * 100))}%</span></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u4F4D\u7F6E</label><div class="mt-2 grid grid-cols-3 gap-2" data-v-4313d35f><!--[-->`);
      ssrRenderList(positions, (position) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-2 rounded-md transition-colors text-sm",
          watermarkPosition.value === position.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}" data-v-4313d35f>${ssrInterpolate(position.name)}</button>`);
      });
      _push(`<!--]--></div></div><details class="mt-4" data-v-4313d35f><summary class="text-sm font-medium cursor-pointer" data-v-4313d35f>\u9AD8\u7EA7\u9009\u9879</summary><div class="mt-3 space-y-3" data-v-4313d35f><label class="flex items-center gap-2" data-v-4313d35f><input${ssrIncludeBooleanAttr(Array.isArray(repeatWatermark.value) ? ssrLooseContain(repeatWatermark.value, null) : repeatWatermark.value) ? " checked" : ""} type="checkbox" class="rounded" data-v-4313d35f><span class="text-sm" data-v-4313d35f>\u5E73\u94FA\u6C34\u5370</span></label><label class="flex items-center gap-2" data-v-4313d35f><input${ssrIncludeBooleanAttr(Array.isArray(protectOriginal.value) ? ssrLooseContain(protectOriginal.value, null) : protectOriginal.value) ? " checked" : ""} type="checkbox" class="rounded" checked data-v-4313d35f><span class="text-sm" data-v-4313d35f>\u4FDD\u62A4\u539F\u56FE\uFF08\u4E0D\u53EF\u64A4\u9500\uFF09</span></label></div></details></div></div></div><div class="lg:col-span-2 space-y-4" data-v-4313d35f><div class="bg-card rounded-lg p-6" data-v-4313d35f><h2 class="text-lg font-semibold mb-4" data-v-4313d35f>\u9884\u89C8\u6548\u679C</h2>`);
      if (!uploadedImage.value) {
        _push(`<div class="text-center py-12 text-muted-foreground" data-v-4313d35f>`);
        _push(ssrRenderComponent(unref(ImageIcon), { class: "w-16 h-16 mx-auto mb-4" }, null, _parent));
        _push(`<p data-v-4313d35f>\u4E0A\u4F20\u56FE\u7247\u5F00\u59CB\u6DFB\u52A0\u6C34\u5370</p></div>`);
      } else {
        _push(`<div class="space-y-4" data-v-4313d35f><div class="flex items-center gap-4" data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u9884\u89C8\u7F29\u653E</label><input${ssrRenderAttr("value", previewScale.value)} type="range" min="10" max="100" step="10" class="flex-1" data-v-4313d35f><span class="text-sm font-mono w-12" data-v-4313d35f>${ssrInterpolate(previewScale.value)}%</span></div><div class="relative" data-v-4313d35f><canvas class="w-full border rounded-lg shadow-md bg-checkered" style="${ssrRenderStyle({ maxWidth: "100%", height: "auto" })}" data-v-4313d35f></canvas></div></div>`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6" data-v-4313d35f><h2 class="text-lg font-semibold mb-4" data-v-4313d35f>\u6279\u91CF\u5904\u7406</h2><p class="text-sm text-muted-foreground mb-4" data-v-4313d35f> \u4E0A\u4F20\u591A\u5F20\u56FE\u7247\uFF0C\u5E94\u7528\u76F8\u540C\u6C34\u5370\u8BBE\u7F6E </p><div class="border-2 border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer" data-v-4313d35f><input type="file" class="hidden" accept="image/*" multiple data-v-4313d35f>`);
      _push(ssrRenderComponent(_component_Plus, { class: "w-8 h-8 mx-auto text-muted-foreground mb-2" }, null, _parent));
      _push(`<p class="text-sm" data-v-4313d35f>\u6DFB\u52A0\u591A\u5F20\u56FE\u7247</p></div>`);
      if (batchImages.value.length > 0) {
        _push(`<div class="mt-4 space-y-2" data-v-4313d35f><div class="flex justify-between items-center mb-2" data-v-4313d35f><span class="text-sm font-medium" data-v-4313d35f>${ssrInterpolate(batchImages.value.length)} \u5F20\u56FE\u7247</span><div class="flex gap-2" data-v-4313d35f><button${ssrIncludeBooleanAttr(isProcessingBatch.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50" data-v-4313d35f>${ssrInterpolate(isProcessingBatch.value ? "\u5904\u7406\u4E2D..." : "\u6279\u91CF\u6DFB\u52A0\u6C34\u5370")}</button><button class="px-3 py-1 text-sm text-destructive hover:bg-destructive/5 rounded-md transition-colors" data-v-4313d35f> \u6E05\u7A7A </button></div></div><div class="max-h-48 overflow-y-auto space-y-2" data-v-4313d35f><!--[-->`);
        ssrRenderList(batchImages.value, (img, index) => {
          _push(`<div class="flex items-center gap-3 p-2 bg-muted rounded-lg" data-v-4313d35f><img${ssrRenderAttr("src", img.url)}${ssrRenderAttr("alt", img.name)} class="w-12 h-12 object-cover rounded" data-v-4313d35f><div class="flex-1 min-w-0" data-v-4313d35f><p class="text-sm font-medium truncate" data-v-4313d35f>${ssrInterpolate(img.name)}</p><p class="text-xs text-muted-foreground" data-v-4313d35f>${ssrInterpolate(img.status)}</p></div><button class="text-destructive hover:text-destructive/80" data-v-4313d35f>`);
          _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
          _push(`</button></div>`);
        });
        _push(`<!--]--></div>`);
        if (batchProcessedCount.value > 0) {
          _push(`<button class="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" data-v-4313d35f> \u4E0B\u8F7D\u6240\u6709 (${ssrInterpolate(batchProcessedCount.value)} \u5F20) </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6" data-v-4313d35f><h2 class="text-lg font-semibold mb-4" data-v-4313d35f>\u4E0B\u8F7D\u9009\u9879</h2><div class="space-y-4" data-v-4313d35f><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u8F93\u51FA\u683C\u5F0F</label><div class="mt-2 grid grid-cols-3 gap-2" data-v-4313d35f><!--[-->`);
      ssrRenderList(outputFormats, (format) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-2 rounded-md transition-colors text-sm",
          outputFormat.value === format.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}" data-v-4313d35f>${ssrInterpolate(format.name)}</button>`);
      });
      _push(`<!--]--></div></div><div data-v-4313d35f><label class="text-sm font-medium" data-v-4313d35f>\u8D28\u91CF</label><div class="mt-2 flex items-center gap-3" data-v-4313d35f><input${ssrRenderAttr("value", outputQuality.value)} type="range" min="10" max="100" step="5" class="flex-1" data-v-4313d35f><span class="text-sm font-mono w-12 text-right" data-v-4313d35f>${ssrInterpolate(outputQuality.value)}%</span></div></div>`);
      if (processedImage.value) {
        _push(`<div class="flex gap-3" data-v-4313d35f><button class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2" data-v-4313d35f>`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` \u4E0B\u8F7D\u56FE\u7247 </button><button class="px-4 py-2 border border-muted text-muted-foreground rounded-md hover:bg-muted transition-colors flex items-center justify-center gap-2" data-v-4313d35f>`);
        _push(ssrRenderComponent(unref(RotateCcw), { class: "w-4 h-4" }, null, _parent));
        _push(` \u91CD\u7F6E </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="mt-12 space-y-6" data-v-4313d35f><div class="bg-card rounded-lg p-6" data-v-4313d35f><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-4313d35f>`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u8BF4\u660E </h3><div class="space-y-4 text-sm text-muted-foreground" data-v-4313d35f><div data-v-4313d35f><h4 class="font-medium text-foreground mb-2" data-v-4313d35f>\u6C34\u5370\u7C7B\u578B</h4><ul class="list-disc list-inside space-y-1 ml-4" data-v-4313d35f><li data-v-4313d35f><strong data-v-4313d35f>\u6587\u5B57\u6C34\u5370</strong>\uFF1A\u6DFB\u52A0\u6587\u5B57\u5185\u5BB9\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5B57\u4F53\u3001\u989C\u8272\u3001\u900F\u660E\u5EA6\u7B49</li><li data-v-4313d35f><strong data-v-4313d35f>\u56FE\u7247\u6C34\u5370</strong>\uFF1A\u4E0A\u4F20 Logo \u6216\u56FE\u6807\u4F5C\u4E3A\u6C34\u5370\uFF0C\u53EF\u8C03\u6574\u5927\u5C0F\u548C\u900F\u660E\u5EA6</li></ul></div><div data-v-4313d35f><h4 class="font-medium text-foreground mb-2" data-v-4313d35f>\u4F7F\u7528\u6280\u5DE7</h4><ul class="list-disc list-inside space-y-1 ml-4" data-v-4313d35f><li data-v-4313d35f>\u4F7F\u7528\u534A\u900F\u660E\u6C34\u5370\u65E2\u80FD\u4FDD\u62A4\u7248\u6743\u53C8\u4E0D\u4F1A\u8FC7\u5EA6\u906E\u6321\u56FE\u7247</li><li data-v-4313d35f>\u5C06\u6C34\u5370\u653E\u7F6E\u5728\u89D2\u843D\u4F4D\u7F6E\uFF0C\u901A\u5E38\u66F4\u7F8E\u89C2</li><li data-v-4313d35f>\u6279\u91CF\u5904\u7406\u529F\u80FD\u53EF\u540C\u65F6\u4E3A\u591A\u5F20\u56FE\u7247\u6DFB\u52A0\u6C34\u5370</li><li data-v-4313d35f>\u5EFA\u8BAE\u5728\u8F93\u51FA\u524D\u8C03\u6574\u5408\u9002\u7684\u56FE\u7247\u8D28\u91CF\u548C\u683C\u5F0F</li></ul></div></div></div><div class="bg-card rounded-lg p-6" data-v-4313d35f><h3 class="text-lg font-semibold mb-4" data-v-4313d35f>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-4313d35f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-crop",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Crop), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-4313d35f${_scopeId}><p class="font-medium group-hover:text-primary" data-v-4313d35f${_scopeId}>\u56FE\u7247\u88C1\u526A</p><p class="text-xs text-muted-foreground" data-v-4313d35f${_scopeId}>\u5728\u7EBF\u88C1\u526A\u56FE\u7247</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Crop), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u56FE\u7247\u88C1\u526A"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u5728\u7EBF\u88C1\u526A\u56FE\u7247")
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
            _push2(`<div data-v-4313d35f${_scopeId}><p class="font-medium group-hover:text-primary" data-v-4313d35f${_scopeId}>\u56FE\u7247\u538B\u7F29</p><p class="text-xs text-muted-foreground" data-v-4313d35f${_scopeId}>\u5728\u7EBF\u538B\u7F29\u56FE\u7247</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Zap), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u56FE\u7247\u538B\u7F29"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u5728\u7EBF\u538B\u7F29\u56FE\u7247")
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
            _push2(`<div data-v-4313d35f${_scopeId}><p class="font-medium group-hover:text-primary" data-v-4313d35f${_scopeId}>\u56FE\u7247\u5408\u5E76</p><p class="text-xs text-muted-foreground" data-v-4313d35f${_scopeId}>\u5408\u5E76\u591A\u5F20\u56FE\u7247</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Layers), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u56FE\u7247\u5408\u5E76"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u5408\u5E76\u591A\u5F20\u56FE\u7247")
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

export { imageWatermark as default };
//# sourceMappingURL=image-watermark-CofavQ_0.mjs.map
