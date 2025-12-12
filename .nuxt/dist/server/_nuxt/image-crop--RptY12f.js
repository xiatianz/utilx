import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta, e as addRecentTool } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { Upload, Image, CheckCircle, Settings, Loader2, Scissors, Download, Edit, RefreshCw, ArrowRight, Images, Check, HelpCircle, ChevronUp } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import "jszip";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "image-crop",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "图片裁剪工具 - 在线智能裁剪图片",
      meta: [
        { name: "description", content: "免费在线图片裁剪工具，支持自由裁剪、固定比例裁剪、圆形裁剪等多种模式，提供精确的尺寸控制和批量处理功能。" },
        { name: "keywords", content: "图片裁剪,在线裁剪,图片编辑,自由裁剪,固定比例,圆形裁剪,批量裁剪" }
      ]
    });
    const tool = tools.find((t) => t.id === "image-crop");
    categories.find((c) => c.id === "image");
    const isSeoContentVisible = ref(true);
    ref(null);
    ref(null);
    const images = ref([]);
    const currentImageIndex = ref(0);
    const croppedImages = ref([]);
    const processing = ref(false);
    const cropMode = ref("free");
    const aspectRatio = ref("4:3");
    const aspectRatios = [
      { label: "1:1", value: "1:1" },
      { label: "4:3", value: "4:3" },
      { label: "16:9", value: "16:9" },
      { label: "3:2", value: "3:2" },
      { label: "自由", value: "free" }
    ];
    const customWidth = ref(16);
    const customHeight = ref(9);
    const sizeMode = ref("original");
    const outputWidth = ref(800);
    const outputHeight = ref(600);
    const outputFormat = ref("png");
    const quality = ref(90);
    const cropArea = ref({
      active: false,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      startX: 0,
      startY: 0
    });
    const iconMap = {
      Upload,
      Image,
      CheckCircle,
      Settings,
      Scissors,
      Download,
      Edit,
      RefreshCw,
      ArrowRight,
      Images,
      Check,
      Loader2,
      HelpCircle,
      ChevronUp
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "image" && t.id !== "image-crop"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "image-merge"),
        tools.find((t) => t.id === "image-resize"),
        tools.find((t) => t.id === "image-compress"),
        tools.find((t) => t.id === "image-watermark")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const currentImage = computed(() => {
      return images.value[currentImageIndex.value] || null;
    });
    computed(() => {
      if (aspectRatio.value === "free") return null;
      if (aspectRatio.value === "custom") {
        return customWidth.value / customHeight.value;
      }
      const [w, h] = aspectRatio.value.split(":").map(Number);
      return w / h;
    });
    watch(aspectRatio, (newRatio) => {
      if (newRatio !== "custom") return;
      const [w, h] = newRatio.split(":").map(Number);
      customWidth.value = w;
      customHeight.value = h;
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">图片裁剪工具 - 在线智能裁剪图片</h1><p class="text-muted-foreground">专业的在线图片裁剪工具，支持自由裁剪、固定比例裁剪、圆形裁剪等多种模式，提供精确的尺寸控制和预览功能。适用于设计师、开发者和内容创作者。</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Upload), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 上传图片 </h2><div class="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer"><input type="file" class="hidden" accept="image/*" multiple>`);
      if (!images.value.length) {
        _push(`<div class="space-y-3">`);
        _push(ssrRenderComponent(unref(Image), { class: "h-12 w-12 text-muted-foreground mx-auto" }, null, _parent));
        _push(`<div><p class="text-muted-foreground">点击或拖拽图片到这里</p><p class="text-sm text-muted-foreground/70 mt-1">支持 JPG、PNG、WebP 等格式</p><p class="text-sm text-primary mt-1">支持批量处理</p></div></div>`);
      } else {
        _push(`<div class="space-y-2">`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "h-12 w-12 text-green-500 mx-auto" }, null, _parent));
        _push(`<p class="text-green-500 font-medium">${ssrInterpolate(images.value.length)} 张图片已上传</p><button class="text-sm text-destructive hover:text-destructive/80"> 清除所有 </button></div>`);
      }
      _push(`</div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 裁剪设置 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">裁剪模式</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="free"${ssrIncludeBooleanAttr(Array.isArray(cropMode.value) ? ssrLooseContain(cropMode.value, "free") : ssrLooseEqual(cropMode.value, "free")) ? " selected" : ""}>自由裁剪</option><option value="ratio"${ssrIncludeBooleanAttr(Array.isArray(cropMode.value) ? ssrLooseContain(cropMode.value, "ratio") : ssrLooseEqual(cropMode.value, "ratio")) ? " selected" : ""}>固定比例</option><option value="circle"${ssrIncludeBooleanAttr(Array.isArray(cropMode.value) ? ssrLooseContain(cropMode.value, "circle") : ssrLooseEqual(cropMode.value, "circle")) ? " selected" : ""}>圆形裁剪</option></select></div>`);
      if (cropMode.value === "ratio") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2">宽高比</label><div class="grid grid-cols-3 gap-2"><!--[-->`);
        ssrRenderList(aspectRatios, (ratio) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-2 text-sm rounded-md border transition-colors",
            aspectRatio.value === ratio.value ? "bg-primary/10 border-primary text-primary" : "bg-muted border-border text-foreground hover:bg-muted/80"
          ])}">${ssrInterpolate(ratio.label)}</button>`);
        });
        _push(`<!--]--></div><div class="mt-3 grid grid-cols-2 gap-2"><div><label class="block text-xs text-muted-foreground mb-1">宽度</label><input${ssrRenderAttr("value", customWidth.value)} type="number" min="1" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="宽度"></div><div><label class="block text-xs text-muted-foreground mb-1">高度</label><input${ssrRenderAttr("value", customHeight.value)} type="number" min="1" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="高度"></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="block text-sm font-medium text-foreground mb-2">输出尺寸</label><div class="space-y-2"><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(sizeMode.value, "original")) ? " checked" : ""} type="radio" value="original" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">保持原始尺寸</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(sizeMode.value, "custom")) ? " checked" : ""} type="radio" value="custom" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">自定义尺寸</span></label></div>`);
      if (sizeMode.value === "custom") {
        _push(`<div class="mt-3 grid grid-cols-2 gap-2"><div><label class="block text-xs text-muted-foreground mb-1">宽度 (px)</label><input${ssrRenderAttr("value", outputWidth.value)} type="number" min="1" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="宽度"></div><div><label class="block text-xs text-muted-foreground mb-1">高度 (px)</label><input${ssrRenderAttr("value", outputHeight.value)} type="number" min="1" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="高度"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block text-sm font-medium text-foreground mb-2">输出格式</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="png"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "png") : ssrLooseEqual(outputFormat.value, "png")) ? " selected" : ""}>PNG</option><option value="jpeg"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "jpeg") : ssrLooseEqual(outputFormat.value, "jpeg")) ? " selected" : ""}>JPEG</option><option value="webp"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "webp") : ssrLooseEqual(outputFormat.value, "webp")) ? " selected" : ""}>WebP</option></select></div>`);
      if (outputFormat.value === "jpeg") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2"> 图片质量: ${ssrInterpolate(quality.value)}% </label><input${ssrRenderAttr("value", quality.value)} type="range" min="10" max="100" step="5" class="w-full"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card border border-border rounded-lg p-6"><button${ssrIncludeBooleanAttr(!images.value.length || processing.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (processing.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Scissors), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(processing.value ? "处理中..." : `裁剪所有图片 (${images.value.length})`)}</button>`);
      if (croppedImages.value.length > 0) {
        _push(`<button class="w-full mt-3 bg-secondary text-secondary-foreground py-3 px-4 rounded-md hover:bg-secondary/90 transition-colors flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(Download), { class: "h-5 w-5 mr-2" }, null, _parent));
        _push(` 下载所有图片 (${ssrInterpolate(croppedImages.value.length)}) </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="lg:col-span-2 space-y-6">`);
      if (currentImage.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Edit), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 编辑图片 </h3><div class="flex items-center space-x-2 text-sm text-muted-foreground"><span>${ssrInterpolate(currentImage.value.file.name)}</span><span>•</span><span>${ssrInterpolate(currentImage.value.width)} × ${ssrInterpolate(currentImage.value.height)}</span></div></div><div class="relative bg-muted rounded-lg overflow-hidden" style="${ssrRenderStyle({ "min-height": "400px" })}"><canvas class="max-w-full mx-auto cursor-crosshair"></canvas>`);
        if (cropArea.value.active) {
          _push(`<div class="absolute border-2 border-primary bg-primary/20 pointer-events-none" style="${ssrRenderStyle({
            left: cropArea.value.x + "px",
            top: cropArea.value.y + "px",
            width: cropArea.value.width + "px",
            height: cropArea.value.height + "px"
          })}"><div class="absolute -top-1 -left-1 w-3 h-3 bg-primary border border-background rounded-full"></div><div class="absolute -top-1 -right-1 w-3 h-3 bg-primary border border-background rounded-full"></div><div class="absolute -bottom-1 -left-1 w-3 h-3 bg-primary border border-background rounded-full"></div><div class="absolute -bottom-1 -right-1 w-3 h-3 bg-primary border border-background rounded-full"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mt-4 flex flex-wrap gap-2"><button class="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors text-sm flex items-center">`);
        _push(ssrRenderComponent(unref(RefreshCw), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` 重置 </button><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm flex items-center">`);
        _push(ssrRenderComponent(unref(Scissors), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` 裁剪当前 </button><button${ssrIncludeBooleanAttr(currentImageIndex.value >= images.value.length - 1) ? " disabled" : ""} class="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors text-sm flex items-center disabled:opacity-50">`);
        _push(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` 下一张 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (images.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Images), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 图片列表 (${ssrInterpolate(images.value.length)}) </h3><div class="grid grid-cols-2 sm:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(images.value, (image, index) => {
          _push(`<div class="relative group cursor-pointer"><img${ssrRenderAttr("src", image.preview)}${ssrRenderAttr("alt", image.file.name)} class="${ssrRenderClass([[
            index === currentImageIndex.value ? "border-primary ring-2 ring-primary/20" : "border-border group-hover:border-muted-foreground"
          ], "w-full h-24 object-cover rounded-lg border-2 transition-all"])}">`);
          if (image.cropped) {
            _push(`<div class="absolute top-2 right-2 p-1 bg-green-500 rounded-full">`);
            _push(ssrRenderComponent(unref(Check), { class: "h-3 w-3 text-white" }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="mt-1 text-xs text-muted-foreground truncate">${ssrInterpolate(image.file.name)}</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (croppedImages.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 裁剪完成 (${ssrInterpolate(croppedImages.value.length)}) </h3><div class="grid grid-cols-2 sm:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(croppedImages.value, (result, index) => {
          _push(`<div class="relative group"><img${ssrRenderAttr("src", result.preview)}${ssrRenderAttr("alt", result.name)} class="w-full h-24 object-cover rounded-lg border border-border"><button class="absolute inset-0 bg-background/80 backdrop-blur rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">`);
          _push(ssrRenderComponent(unref(Download), { class: "h-6 w-6 text-foreground" }, null, _parent));
          _push(`</button><div class="mt-1 text-xs text-muted-foreground"><div class="truncate">${ssrInterpolate(result.name)}</div><div>${ssrInterpolate(result.width)} × ${ssrInterpolate(result.height)}</div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是图片裁剪工具？ </h2><p class="text-muted-foreground mb-4"> 图片裁剪工具是一种在线服务，可以帮助用户精确地裁剪图片的特定区域。 无论是去除图片中的无关部分、调整图片比例，还是创建头像和缩略图， 都可以通过专业的裁剪工具快速完成。这对于设计师、摄影师、内容创作者和普通用户都非常有用。 </p><p class="text-muted-foreground mb-4"> 现代图片裁剪工具不仅支持基本的矩形裁剪，还提供了多种高级功能， 如固定比例裁剪、圆形裁剪、自由形状裁剪等。用户可以根据需求选择合适的裁剪模式， 并精确控制输出尺寸和质量。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>多种裁剪模式</strong>: 支持自由裁剪、固定比例裁剪、圆形裁剪三种主要模式</li><li><strong>精确比例控制</strong>: 提供常见比例预设和自定义宽高比设置</li><li><strong>批量处理</strong>: 支持一次上传多张图片并批量裁剪处理</li><li><strong>输出格式多样</strong>: 支持PNG、JPEG、WebP等主流图片格式输出</li><li><strong>质量调节</strong>: 可调节JPEG图片的质量参数，平衡文件大小和图像质量</li><li><strong>尺寸定制</strong>: 支持保持原始尺寸或自定义输出尺寸</li><li><strong>实时预览</strong>: 提供裁剪区域实时预览，确保精确选择</li><li><strong>本地处理</strong>: 所有处理都在浏览器本地完成，确保隐私安全</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 使用场景 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>社交媒体内容</strong>: 裁剪适合不同社交平台的图片尺寸，如头像、封面图等</li><li><strong>电商产品图</strong>: 统一产品图片尺寸和比例，提升商品展示效果</li><li><strong>设计素材准备</strong>: 为设计项目准备符合规格的图片素材</li><li><strong>照片优化</strong>: 去除照片中的无关元素，突出主体内容</li><li><strong>头像制作</strong>: 制作圆形或方形头像，适配各种应用场景</li><li><strong>文档插图</strong>: 裁剪技术文档或报告中的插图，保持版面整洁</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">裁剪后的图片质量会有损失吗？</h3><p class="text-muted-foreground mt-1"> 裁剪操作本身不会降低图片质量，因为它只是选择图片的一个区域。 但如果选择了较小的输出尺寸，可能会因重新采样而导致质量下降。 为了获得最佳效果，建议保持原始尺寸或选择较大的输出尺寸。 </p></div><div><h3 class="text-lg font-semibold text-foreground">支持哪些图片格式？</h3><p class="text-muted-foreground mt-1"> 工具支持所有主流的图片格式，包括JPG、PNG、WebP、GIF等。 上传的图片会在裁剪前自动解码，在输出时可以选择所需的格式。 WebP格式通常能提供更好的压缩效果和质量。 </p></div><div><h3 class="text-lg font-semibold text-foreground">如何提高裁剪效率？</h3><p class="text-muted-foreground mt-1"> 为了提高裁剪效率，建议： 1. 使用固定比例裁剪模式，避免每次手动调整； 2. 批量上传图片进行统一处理； 3. 预先确定所需的输出尺寸和格式； 4. 使用键盘快捷键进行操作（如果支持）。 </p></div><div><h3 class="text-lg font-semibold text-foreground">裁剪的图片会保存到服务器吗？</h3><p class="text-muted-foreground mt-1"> 不会。所有的图片处理都在您的浏览器本地完成，图片数据不会上传到任何服务器。 这确保了您的隐私安全，也加快了处理速度。裁剪完成后，您可以选择下载结果图片。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Scissors)), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Scissors)), { class: "w-5 h-5 text-primary" })),
                  createVNode("span", { class: "font-medium text-foreground" }, toDisplayString(relatedTool.name), 1)
                ]),
                createVNode("p", { class: "text-sm text-muted-foreground line-clamp-2" }, toDisplayString(relatedTool.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/image-crop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=image-crop--RptY12f.js.map
