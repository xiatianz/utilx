import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from "vue/server-renderer";
import { ImageIcon, Settings, Download, RotateCcw, Plus, Info, Crop, ArrowRight, Zap, Droplet } from "lucide-vue-next";
import "jszip";
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
  __name: "image-resize",
  __ssrInlineRender: true,
  setup(__props) {
    const image = ref(null);
    const resizedUrl = ref(null);
    const width = ref(null);
    const height = ref(null);
    const resizeMode = ref("fit");
    const lockAspectRatio = ref(true);
    const percentage = ref(100);
    const zoomLevel = ref(50);
    const isProcessing = ref(false);
    ref(null);
    ref(null);
    const batchImages = ref([]);
    const isProcessingBatch = ref(false);
    const resizeModes = [
      { value: "stretch", name: "拉伸" },
      { value: "fit", name: "适应" },
      { value: "crop", name: "裁剪" },
      { value: "fill", name: "填充" }
    ];
    const sizePresets = [
      { name: "16:9 (1920×1080)", width: 1920, height: 1080 },
      { name: "4:3 (1024×768)", width: 1024, height: 768 },
      { name: "1:1 (1080×1080)", width: 1080, height: 1080 },
      { name: "头像 (500×500)", width: 500, height: 500 },
      { name: "缩略图 (150×150)", width: 150, height: 150 },
      { name: "高清 (4K)", width: 3840, height: 2160 }
    ];
    const resizedPercentage = computed(() => {
      if (!image.value || !width.value || !height.value) return "";
      const areaDiff = width.value * height.value / (image.value.originalWidth * image.value.originalHeight);
      return `${(areaDiff * 100).toFixed(1)}%`;
    });
    const batchProcessedCount = computed(() => {
      return batchImages.value.filter((img) => img.processedUrl).length;
    });
    useSeoMeta({
      title: "图片尺寸调整 - 在线调整图片尺寸工具",
      description: "免费在线图片尺寸调整工具，支持像素和百分比调整、批量处理、多种裁剪模式。",
      keywords: ["图片尺寸", "图片调整", "图片缩放", "像素调整", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-4ebc7e39><div class="mt-4 mb-8" data-v-4ebc7e39><h1 class="text-3xl font-bold mb-3" data-v-4ebc7e39>图片尺寸调整</h1><p class="text-muted-foreground" data-v-4ebc7e39>在线调整图片尺寸，支持像素、百分比和预设尺寸</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-4ebc7e39><div class="space-y-4" data-v-4ebc7e39><div class="bg-card rounded-lg p-6" data-v-4ebc7e39><h2 class="text-lg font-semibold mb-4" data-v-4ebc7e39>上传图片</h2><div class="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer" data-v-4ebc7e39><input type="file" class="hidden" accept="image/*" data-v-4ebc7e39>`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2" data-v-4ebc7e39>拖拽图片到这里</p><p class="text-sm text-muted-foreground" data-v-4ebc7e39>或者点击选择文件</p></div>`);
      if (image.value) {
        _push(`<div class="mt-4 p-4 bg-muted rounded-lg" data-v-4ebc7e39><div class="flex items-center gap-3 mb-3" data-v-4ebc7e39><img${ssrRenderAttr("src", image.value.preview)}${ssrRenderAttr("alt", image.value.name)} class="w-16 h-16 object-cover rounded" data-v-4ebc7e39><div class="flex-1" data-v-4ebc7e39><p class="font-medium truncate" data-v-4ebc7e39>${ssrInterpolate(image.value.name)}</p><p class="text-sm text-muted-foreground" data-v-4ebc7e39>${ssrInterpolate(image.value.originalWidth)} × ${ssrInterpolate(image.value.originalHeight)} px </p></div></div><button class="w-full px-3 py-2 text-sm text-destructive hover:bg-destructive/5 rounded-md transition-colors" data-v-4ebc7e39> 移除图片 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (image.value) {
        _push(`<div class="bg-card rounded-lg p-6" data-v-4ebc7e39><h2 class="text-lg font-semibold mb-4" data-v-4ebc7e39>尺寸设置</h2><div class="space-y-4" data-v-4ebc7e39><div data-v-4ebc7e39><label class="text-sm font-medium" data-v-4ebc7e39>调整模式</label><div class="mt-2 grid grid-cols-2 gap-2" data-v-4ebc7e39><!--[-->`);
        ssrRenderList(resizeModes, (mode) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-2 rounded-md transition-colors text-sm",
            resizeMode.value === mode.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
          ])}" data-v-4ebc7e39>${ssrInterpolate(mode.name)}</button>`);
        });
        _push(`<!--]--></div></div><div class="grid grid-cols-2 gap-3" data-v-4ebc7e39><div data-v-4ebc7e39><label class="text-sm font-medium" data-v-4ebc7e39>宽度</label><div class="relative" data-v-4ebc7e39><input${ssrRenderAttr("value", width.value)} type="number" min="1" class="w-full px-3 py-2 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-4ebc7e39><span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground" data-v-4ebc7e39>px</span></div></div><div data-v-4ebc7e39><label class="text-sm font-medium" data-v-4ebc7e39>高度</label><div class="relative" data-v-4ebc7e39><input${ssrRenderAttr("value", height.value)} type="number" min="1" class="w-full px-3 py-2 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-4ebc7e39><span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground" data-v-4ebc7e39>px</span></div></div></div><div data-v-4ebc7e39><label class="text-sm font-medium" data-v-4ebc7e39>百分比调整</label><div class="mt-2 flex items-center gap-2" data-v-4ebc7e39><input${ssrRenderAttr("value", percentage.value)} type="range" min="10" max="200" step="5" class="flex-1" data-v-4ebc7e39><span class="text-sm font-mono w-12 text-right" data-v-4ebc7e39>${ssrInterpolate(percentage.value)}%</span></div></div><label class="flex items-center gap-2" data-v-4ebc7e39><input${ssrIncludeBooleanAttr(Array.isArray(lockAspectRatio.value) ? ssrLooseContain(lockAspectRatio.value, null) : lockAspectRatio.value) ? " checked" : ""} type="checkbox" class="rounded" checked data-v-4ebc7e39><span class="text-sm" data-v-4ebc7e39>锁定宽高比</span></label><div data-v-4ebc7e39><label class="text-sm font-medium" data-v-4ebc7e39>常用尺寸</label><div class="mt-2 grid grid-cols-2 gap-2" data-v-4ebc7e39><!--[-->`);
        ssrRenderList(sizePresets, (preset) => {
          _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm" data-v-4ebc7e39>${ssrInterpolate(preset.name)}</button>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-4" data-v-4ebc7e39>`);
      if (image.value) {
        _push(`<div class="bg-card rounded-lg p-6" data-v-4ebc7e39><h2 class="text-lg font-semibold mb-4" data-v-4ebc7e39>预览对比</h2><div class="mb-4 flex items-center gap-4" data-v-4ebc7e39><label class="text-sm font-medium" data-v-4ebc7e39>预览缩放</label><input${ssrRenderAttr("value", zoomLevel.value)} type="range" min="10" max="100" step="10" class="flex-1" data-v-4ebc7e39><span class="text-sm font-mono" data-v-4ebc7e39>${ssrInterpolate(zoomLevel.value)}%</span></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4" data-v-4ebc7e39><div data-v-4ebc7e39><h3 class="text-sm font-medium mb-2" data-v-4ebc7e39>原图</h3><div class="border rounded-lg overflow-hidden bg-checkered" data-v-4ebc7e39><img${ssrRenderAttr("src", image.value.preview)}${ssrRenderAttr("alt", image.value.name)} style="${ssrRenderStyle({
          width: image.value.originalWidth * zoomLevel.value / 100 + "px",
          height: "auto",
          maxWidth: "100%"
        })}" class="block mx-auto" data-v-4ebc7e39></div><p class="mt-2 text-sm text-muted-foreground" data-v-4ebc7e39>${ssrInterpolate(image.value.originalWidth)} × ${ssrInterpolate(image.value.originalHeight)} px </p></div><div data-v-4ebc7e39><h3 class="text-sm font-medium mb-2" data-v-4ebc7e39>调整后</h3><div class="border rounded-lg overflow-hidden bg-checkered" data-v-4ebc7e39>`);
        if (resizedUrl.value) {
          _push(`<img${ssrRenderAttr("src", resizedUrl.value)}${ssrRenderAttr("alt", image.value.name)} style="${ssrRenderStyle({
            width: width.value * zoomLevel.value / 100 + "px",
            height: "auto",
            maxWidth: "100%"
          })}" class="block mx-auto" data-v-4ebc7e39>`);
        } else {
          _push(`<div class="flex items-center justify-center h-64 text-muted-foreground" data-v-4ebc7e39> 调整尺寸后预览将显示在这里 </div>`);
        }
        _push(`</div>`);
        if (width.value && height.value) {
          _push(`<p class="mt-2 text-sm text-muted-foreground" data-v-4ebc7e39>${ssrInterpolate(width.value)} × ${ssrInterpolate(height.value)} px `);
          if (image.value.originalWidth !== width.value || image.value.originalHeight !== height.value) {
            _push(`<span class="ml-2 text-primary" data-v-4ebc7e39> (${ssrInterpolate(resizedPercentage.value)}) </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="mt-6 flex gap-3" data-v-4ebc7e39><button${ssrIncludeBooleanAttr(!width.value || !height.value || isProcessing.value) ? " disabled" : ""} class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2" data-v-4ebc7e39>`);
        if (isProcessing.value) {
          _push(ssrRenderComponent(unref(Settings), { class: "w-4 h-4 animate-spin" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(isProcessing.value ? "处理中..." : "应用调整")}</button>`);
        if (resizedUrl.value) {
          _push(`<button class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center gap-2" data-v-4ebc7e39>`);
          _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
          _push(` 下载 </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="px-4 py-2 border border-muted text-muted-foreground rounded-md hover:bg-muted transition-colors flex items-center gap-2" data-v-4ebc7e39>`);
        _push(ssrRenderComponent(unref(RotateCcw), { class: "w-4 h-4" }, null, _parent));
        _push(` 重置 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6" data-v-4ebc7e39><h2 class="text-lg font-semibold mb-4" data-v-4ebc7e39>批量处理</h2><p class="text-sm text-muted-foreground mb-4" data-v-4ebc7e39> 上传多张图片，使用相同的设置批量调整尺寸 </p><div class="border-2 border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer" data-v-4ebc7e39><input type="file" class="hidden" accept="image/*" multiple data-v-4ebc7e39>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-8 h-8 mx-auto text-muted-foreground mb-2" }, null, _parent));
      _push(`<p class="text-sm" data-v-4ebc7e39>添加多张图片</p></div>`);
      if (batchImages.value.length > 0) {
        _push(`<div class="mt-4 space-y-2" data-v-4ebc7e39><div class="flex justify-between items-center mb-2" data-v-4ebc7e39><span class="text-sm font-medium" data-v-4ebc7e39>${ssrInterpolate(batchImages.value.length)} 张图片</span><div class="flex gap-2" data-v-4ebc7e39><button${ssrIncludeBooleanAttr(isProcessingBatch.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50" data-v-4ebc7e39>${ssrInterpolate(isProcessingBatch.value ? "处理中..." : "批量处理")}</button><button class="px-3 py-1 text-sm text-destructive hover:bg-destructive/5 rounded-md transition-colors" data-v-4ebc7e39> 清空 </button></div></div><div class="max-h-48 overflow-y-auto space-y-2" data-v-4ebc7e39><!--[-->`);
        ssrRenderList(batchImages.value, (img, index) => {
          _push(`<div class="flex items-center gap-3 p-2 bg-muted rounded-lg" data-v-4ebc7e39><img${ssrRenderAttr("src", img.preview)}${ssrRenderAttr("alt", img.name)} class="w-10 h-10 object-cover rounded" data-v-4ebc7e39><div class="flex-1 min-w-0" data-v-4ebc7e39><p class="text-sm font-medium truncate" data-v-4ebc7e39>${ssrInterpolate(img.name)}</p><p class="text-xs text-muted-foreground" data-v-4ebc7e39>${ssrInterpolate(img.width)} × ${ssrInterpolate(img.height)} → ${ssrInterpolate(width.value || "0")} × ${ssrInterpolate(height.value || "0")}</p></div><div class="text-xs text-muted-foreground" data-v-4ebc7e39>${ssrInterpolate(img.status)}</div></div>`);
        });
        _push(`<!--]--></div>`);
        if (batchProcessedCount.value > 0) {
          _push(`<button class="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" data-v-4ebc7e39> 下载所有 (${ssrInterpolate(batchProcessedCount.value)} 张) </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="mt-12 space-y-6" data-v-4ebc7e39><div class="bg-card border-rounded p-6" data-v-4ebc7e39><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-4ebc7e39>`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用说明 </h3><div class="space-y-4 text-sm text-muted-foreground" data-v-4ebc7e39><div data-v-4ebc7e39><h4 class="font-medium text-foreground mb-2" data-v-4ebc7e39>调整模式说明</h4><ul class="list-disc list-inside space-y-1 ml-4" data-v-4ebc7e39><li data-v-4ebc7e39><strong data-v-4ebc7e39>拉伸</strong>：强制调整到指定尺寸，可能变形</li><li data-v-4ebc7e39><strong data-v-4ebc7e39>适应</strong>：保持比例，适应指定尺寸，可能有空白</li><li data-v-4ebc7e39><strong data-v-4ebc7e39>裁剪</strong>：保持比例，裁剪到指定尺寸</li><li data-v-4ebc7e39><strong data-v-4ebc7e39>填充</strong>：保持比例，填充到指定尺寸</li></ul></div><div data-v-4ebc7e39><h4 class="font-medium text-foreground mb-2" data-v-4ebc7e39>使用提示</h4><ul class="list-disc list-inside space-y-1 ml-4" data-v-4ebc7e39><li data-v-4ebc7e39>锁定宽高比可保持图片不变形</li><li data-v-4ebc7e39>支持批量处理，提高效率</li><li data-v-4ebc7e39>预览功能帮助确认效果</li><li data-v-4ebc7e39>处理速度取决于图片大小和数量</li></ul></div></div></div><div class="bg-card rounded-lg p-6" data-v-4ebc7e39><h3 class="text-lg font-semibold mb-4" data-v-4ebc7e39>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-4ebc7e39>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-crop",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Crop), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-4ebc7e39${_scopeId}><p class="font-medium group-hover:text-primary" data-v-4ebc7e39${_scopeId}>图片裁剪</p><p class="text-xs text-muted-foreground" data-v-4ebc7e39${_scopeId}>在线裁剪图片</p></div>`);
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
            _push2(`<div data-v-4ebc7e39${_scopeId}><p class="font-medium group-hover:text-primary" data-v-4ebc7e39${_scopeId}>图片压缩</p><p class="text-xs text-muted-foreground" data-v-4ebc7e39${_scopeId}>在线压缩图片</p></div>`);
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
        to: "/tools/image-watermark",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Droplet), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-4ebc7e39${_scopeId}><p class="font-medium group-hover:text-primary" data-v-4ebc7e39${_scopeId}>图片水印</p><p class="text-xs text-muted-foreground" data-v-4ebc7e39${_scopeId}>添加文字/图片水印</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Droplet), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "图片水印"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "添加文字/图片水印")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/image-resize.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const imageResize = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ebc7e39"]]);
export {
  imageResize as default
};
//# sourceMappingURL=image-resize-D-8ULqLY.js.map
