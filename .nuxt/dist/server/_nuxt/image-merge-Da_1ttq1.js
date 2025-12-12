import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta, e as addRecentTool } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { Upload, Layers, CheckCircle, Settings, Loader2, Download, Images, ArrowUp, ArrowDown, Trash2, X, Eye, Image, HelpCircle, ChevronUp } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "image-merge",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "图片合并工具 - 在线合并多张图片",
      meta: [
        { name: "description", content: "免费在线图片合并工具，支持水平、垂直、网格等多种布局方式，可自定义间距和背景颜色，轻松将多张图片合并成一张。" },
        { name: "keywords", content: "图片合并,图片拼接,在线合并,水平合并,垂直合并,网格布局,批量合并" }
      ]
    });
    const tool = tools.find((t) => t.id === "image-merge");
    categories.find((c) => c.id === "image");
    const isSeoContentVisible = ref(true);
    ref(null);
    const images = ref([]);
    const selectedIndex = ref(null);
    const mergedImage = ref("");
    const processing = ref(false);
    const finalWidth = ref(0);
    const finalHeight = ref(0);
    const layoutMode = ref("horizontal");
    const gridCols = ref(3);
    const spacing = ref(10);
    const backgroundColor = ref("#FFFFFF");
    const alignment = ref("center");
    const sizeMode = ref("auto");
    const outputWidth = ref(1e3);
    const outputHeight = ref(800);
    const outputFormat = ref("png");
    const quality = ref(90);
    const iconMap = {
      Upload,
      Layers,
      Settings,
      Images,
      Eye,
      Image,
      Download,
      CheckCircle,
      ArrowUp,
      ArrowDown,
      Trash2,
      X,
      Loader2,
      HelpCircle,
      ChevronUp
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "image" && t.id !== "image-merge"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "image-crop"),
        tools.find((t) => t.id === "image-resize"),
        tools.find((t) => t.id === "image-compress"),
        tools.find((t) => t.id === "image-watermark")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const alignOptions = computed(() => {
      if (layoutMode.value === "horizontal") {
        return [
          { label: "顶部", value: "top" },
          { label: "居中", value: "center" },
          { label: "底部", value: "bottom" }
        ];
      } else {
        return [
          { label: "左侧", value: "left" },
          { label: "居中", value: "center" },
          { label: "右侧", value: "right" }
        ];
      }
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">图片合并工具 - 在线合并多张图片</h1><p class="text-muted-foreground">专业的在线图片合并工具，支持水平、垂直、网格等多种布局方式，可自定义间距和背景颜色，轻松将多张图片合并成一张。适用于设计师、开发者和内容创作者。</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Upload), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 上传图片 </h2><div class="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer"><input type="file" class="hidden" accept="image/*" multiple>`);
      if (!images.value.length) {
        _push(`<div class="space-y-3">`);
        _push(ssrRenderComponent(unref(Layers), { class: "h-12 w-12 text-muted-foreground mx-auto" }, null, _parent));
        _push(`<div><p class="text-muted-foreground">点击或拖拽图片到这里</p><p class="text-sm text-muted-foreground/70 mt-1">支持 JPG、PNG、WebP 等格式</p><p class="text-sm text-primary mt-1">至少需要 2 张图片</p></div></div>`);
      } else {
        _push(`<div class="space-y-2">`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "h-12 w-12 text-green-500 mx-auto" }, null, _parent));
        _push(`<p class="text-green-500 font-medium">${ssrInterpolate(images.value.length)} 张图片已上传</p><button class="text-sm text-destructive hover:text-destructive/80"> 清除所有 </button></div>`);
      }
      _push(`</div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 合并设置 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">布局方式</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="horizontal"${ssrIncludeBooleanAttr(Array.isArray(layoutMode.value) ? ssrLooseContain(layoutMode.value, "horizontal") : ssrLooseEqual(layoutMode.value, "horizontal")) ? " selected" : ""}>水平排列</option><option value="vertical"${ssrIncludeBooleanAttr(Array.isArray(layoutMode.value) ? ssrLooseContain(layoutMode.value, "vertical") : ssrLooseEqual(layoutMode.value, "vertical")) ? " selected" : ""}>垂直排列</option><option value="grid"${ssrIncludeBooleanAttr(Array.isArray(layoutMode.value) ? ssrLooseContain(layoutMode.value, "grid") : ssrLooseEqual(layoutMode.value, "grid")) ? " selected" : ""}>网格布局</option><option value="custom"${ssrIncludeBooleanAttr(Array.isArray(layoutMode.value) ? ssrLooseContain(layoutMode.value, "custom") : ssrLooseEqual(layoutMode.value, "custom")) ? " selected" : ""}>自定义排列</option></select></div>`);
      if (layoutMode.value === "grid") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2"> 网格列数: ${ssrInterpolate(gridCols.value)}</label><input${ssrRenderAttr("value", gridCols.value)} type="range" min="2" max="5" class="w-full"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="block text-sm font-medium text-foreground mb-2"> 图片间距: ${ssrInterpolate(spacing.value)}px </label><input${ssrRenderAttr("value", spacing.value)} type="range" min="0" max="50" class="w-full"></div><div><label class="block text-sm font-medium text-foreground mb-2">背景颜色</label><div class="flex space-x-2"><input${ssrRenderAttr("value", backgroundColor.value)} type="color" class="h-10 w-20 border border-border rounded-md cursor-pointer bg-background"><input${ssrRenderAttr("value", backgroundColor.value)} type="text" class="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="#FFFFFF"></div></div>`);
      if (layoutMode.value === "horizontal" || layoutMode.value === "vertical") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2">对齐方式</label><div class="grid grid-cols-3 gap-2"><!--[-->`);
        ssrRenderList(alignOptions.value, (align) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-2 text-sm rounded-md border transition-colors",
            alignment.value === align.value ? "bg-primary/10 border-primary text-primary" : "bg-muted border-border text-foreground hover:bg-muted/80"
          ])}">${ssrInterpolate(align.label)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="block text-sm font-medium text-foreground mb-2">输出尺寸</label><div class="space-y-2"><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(sizeMode.value, "auto")) ? " checked" : ""} type="radio" value="auto" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">自动计算</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(sizeMode.value, "custom")) ? " checked" : ""} type="radio" value="custom" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">自定义尺寸</span></label></div>`);
      if (sizeMode.value === "custom") {
        _push(`<div class="mt-3 grid grid-cols-2 gap-2"><div><label class="block text-xs text-muted-foreground mb-1">宽度 (px)</label><input${ssrRenderAttr("value", outputWidth.value)} type="number" min="100" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="宽度"></div><div><label class="block text-xs text-muted-foreground mb-1">高度 (px)</label><input${ssrRenderAttr("value", outputHeight.value)} type="number" min="100" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground" placeholder="高度"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block text-sm font-medium text-foreground mb-2">输出格式</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="png"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "png") : ssrLooseEqual(outputFormat.value, "png")) ? " selected" : ""}>PNG</option><option value="jpeg"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "jpeg") : ssrLooseEqual(outputFormat.value, "jpeg")) ? " selected" : ""}>JPEG</option><option value="webp"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "webp") : ssrLooseEqual(outputFormat.value, "webp")) ? " selected" : ""}>WebP</option></select></div>`);
      if (outputFormat.value === "jpeg") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2"> 图片质量: ${ssrInterpolate(quality.value)}% </label><input${ssrRenderAttr("value", quality.value)} type="range" min="10" max="100" step="5" class="w-full"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card border border-border rounded-lg p-6"><button${ssrIncludeBooleanAttr(images.value.length < 2 || processing.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (processing.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Layers), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(processing.value ? "处理中..." : "合并图片")}</button>`);
      if (mergedImage.value) {
        _push(`<button class="w-full mt-3 bg-secondary text-secondary-foreground py-3 px-4 rounded-md hover:bg-secondary/90 transition-colors flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(Download), { class: "h-5 w-5 mr-2" }, null, _parent));
        _push(` 下载合并结果 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="lg:col-span-2 space-y-6">`);
      if (images.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Images), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 图片列表 (${ssrInterpolate(images.value.length)}) </h3><div class="flex space-x-2"><button${ssrIncludeBooleanAttr(selectedIndex.value === null || selectedIndex.value === 0) ? " disabled" : ""} class="p-2 text-muted-foreground hover:bg-muted rounded-md disabled:opacity-50">`);
        _push(ssrRenderComponent(unref(ArrowUp), { class: "h-4 w-4" }, null, _parent));
        _push(`</button><button${ssrIncludeBooleanAttr(selectedIndex.value === null || selectedIndex.value === images.value.length - 1) ? " disabled" : ""} class="p-2 text-muted-foreground hover:bg-muted rounded-md disabled:opacity-50">`);
        _push(ssrRenderComponent(unref(ArrowDown), { class: "h-4 w-4" }, null, _parent));
        _push(`</button><button${ssrIncludeBooleanAttr(selectedIndex.value === null) ? " disabled" : ""} class="p-2 text-destructive hover:bg-destructive/10 rounded-md disabled:opacity-50">`);
        _push(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4" }, null, _parent));
        _push(`</button></div></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(images.value, (image, index) => {
          _push(`<div class="relative group cursor-pointer"><div class="relative"><img${ssrRenderAttr("src", image.preview)}${ssrRenderAttr("alt", image.file.name)} class="${ssrRenderClass([[
            selectedIndex.value === index ? "border-primary ring-2 ring-primary/20" : "border-border group-hover:border-muted-foreground"
          ], "w-full h-32 object-cover rounded-lg border-2 transition-all"])}"><div class="absolute top-2 left-2 bg-background/80 backdrop-blur text-foreground text-xs px-2 py-1 rounded">${ssrInterpolate(index + 1)}</div><button class="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity">`);
          _push(ssrRenderComponent(unref(X), { class: "h-3 w-3" }, null, _parent));
          _push(`</button></div><div class="mt-2"><div class="text-xs text-muted-foreground truncate">${ssrInterpolate(image.file.name)}</div><div class="text-xs text-muted-foreground/70">${ssrInterpolate(image.width)} × ${ssrInterpolate(image.height)}</div></div></div>`);
        });
        _push(`<!--]--></div><div class="mt-4 pt-4 border-t border-border flex justify-between items-center"><div class="text-sm text-muted-foreground"> 共 ${ssrInterpolate(images.value.length)} 张图片 `);
        if (images.value.length < 2) {
          _push(`<span class="text-destructive ml-2"> 至少需要 2 张图片才能合并 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button class="text-sm text-primary hover:text-primary/80"> 反转顺序 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Eye), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 预览效果 </h3><div class="bg-muted rounded-lg p-4 min-h-[400px] flex items-center justify-center">`);
      if (!mergedImage.value && images.value.length === 0) {
        _push(`<div class="text-center text-muted-foreground">`);
        _push(ssrRenderComponent(unref(Image), { class: "h-12 w-12 mx-auto mb-3" }, null, _parent));
        _push(`<p>上传图片后将显示预览</p></div>`);
      } else if (!mergedImage.value && images.value.length > 0) {
        _push(`<div class="text-center text-muted-foreground">`);
        _push(ssrRenderComponent(unref(Layers), { class: "h-12 w-12 mx-auto mb-3" }, null, _parent));
        _push(`<p>点击&quot;合并图片&quot;生成预览</p></div>`);
      } else if (mergedImage.value) {
        _push(`<div class="w-full"><img${ssrRenderAttr("src", mergedImage.value)} alt="合并预览" class="max-w-full h-auto mx-auto rounded-lg shadow-lg"><div class="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"><div class="bg-muted rounded p-2"><div class="text-muted-foreground">宽度</div><div class="font-semibold text-foreground">${ssrInterpolate(finalWidth.value)}px</div></div><div class="bg-muted rounded p-2"><div class="text-muted-foreground">高度</div><div class="font-semibold text-foreground">${ssrInterpolate(finalHeight.value)}px</div></div><div class="bg-muted rounded p-2"><div class="text-muted-foreground">图片数</div><div class="font-semibold text-foreground">${ssrInterpolate(images.value.length)}</div></div><div class="bg-muted rounded p-2"><div class="text-muted-foreground">格式</div><div class="font-semibold text-foreground">${ssrInterpolate(outputFormat.value.toUpperCase())}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是图片合并工具？ </h2><p class="text-muted-foreground mb-4"> 图片合并工具是一种在线服务，可以将多张图片按照指定的布局方式合并成一张图片。 无论是水平排列、垂直堆叠还是网格布局，都可以通过简单的设置快速完成图片合并操作。 这对于制作产品对比图、教程步骤图、社交媒体内容等场景非常有用。 </p><p class="text-muted-foreground mb-4"> 现代图片合并工具不仅支持基本的合并功能，还提供了丰富的自定义选项， 如间距调整、背景颜色、对齐方式、输出尺寸和格式等，让用户可以根据需求精确控制合并效果。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>多种布局方式</strong>: 支持水平、垂直、网格三种主流布局方式</li><li><strong>灵活间距控制</strong>: 可自定义图片之间的间距，范围从0到50像素</li><li><strong>背景颜色设置</strong>: 支持自定义背景颜色，可使用颜色选择器或十六进制值</li><li><strong>对齐方式调整</strong>: 提供顶部/左侧、居中、底部/右侧等多种对齐选项</li><li><strong>输出尺寸定制</strong>: 支持自动计算或自定义输出图片的尺寸</li><li><strong>多种输出格式</strong>: 支持PNG、JPEG、WebP等主流图片格式</li><li><strong>质量控制</strong>: 可调节JPEG图片的质量，平衡文件大小和图像质量</li><li><strong>批量操作</strong>: 支持图片排序、反转、删除等批量管理功能</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 使用场景 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>电商产品对比</strong>: 将多个产品的图片合并成一张对比图，方便用户查看</li><li><strong>教程制作</strong>: 将操作步骤截图合并成一张流程图，便于读者理解</li><li><strong>社交媒体内容</strong>: 制作信息丰富的社交媒体帖子，吸引更多关注</li><li><strong>设计稿展示</strong>: 将多个设计方案合并展示，方便客户比较选择</li><li><strong>报告插图</strong>: 在技术报告或商业文档中插入合并后的对比图表</li><li><strong>广告素材</strong>: 制作包含多个产品或功能的广告横幅</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">支持哪些图片格式？</h3><p class="text-muted-foreground mt-1"> 工具支持所有主流的图片格式，包括JPG、PNG、WebP、GIF等。 上传的图片会在合并前自动转换为合适的格式，确保最终输出质量。 </p></div><div><h3 class="text-lg font-semibold text-foreground">合并后的图片分辨率如何？</h3><p class="text-muted-foreground mt-1"> 合并后的图片分辨率取决于所选的布局方式和输出尺寸设置。 工具会自动计算最优分辨率以保证图片质量和文件大小的平衡。 用户也可以选择自定义输出尺寸来精确控制最终效果。 </p></div><div><h3 class="text-lg font-semibold text-foreground">如何提高合并效率？</h3><p class="text-muted-foreground mt-1"> 为了提高合并效率，建议： 1. 上传前尽量压缩图片文件大小； 2. 合理选择布局方式和输出尺寸； 3. 使用批量操作功能一次性处理多张图片； 4. 选择合适的输出格式（WebP通常文件更小）。 </p></div><div><h3 class="text-lg font-semibold text-foreground">合并的图片会保存到服务器吗？</h3><p class="text-muted-foreground mt-1"> 不会。所有的图片处理都在您的浏览器本地完成，图片数据不会上传到任何服务器。 这确保了您的隐私安全，也加快了处理速度。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Layers)), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Layers)), { class: "w-5 h-5 text-primary" })),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/image-merge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=image-merge-Da_1ttq1.js.map
