import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from "vue/server-renderer";
import { ImageIcon, X, Settings, Download, Info, Maximize2, ArrowRight, RefreshCw, Zap } from "lucide-vue-next";
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
  __name: "icon-generator",
  __ssrInlineRender: true,
  setup(__props) {
    const uploadedImage = ref(null);
    const iconType = ref("favicon");
    const outputFormat = ref("png");
    const transparentBackground = ref(true);
    const maintainAspectRatio = ref(true);
    const autoOptimize = ref(true);
    const isGenerating = ref(false);
    const generatedIcons = ref([]);
    const previewMode = ref("grid");
    ref(null);
    const customSizes = ref([
      { width: 16, height: 16 },
      { width: 32, height: 32 },
      { width: 48, height: 48 },
      { width: 64, height: 64 }
    ]);
    const iconTypes = [
      { value: "favicon", name: "Favicon" },
      { value: "ios", name: "iOS" },
      { value: "android", name: "Android" },
      { value: "windows", name: "Windows" },
      { value: "webapp", name: "Web App" }
    ];
    const sizePresets = [
      { name: "标准网站", sizes: [16, 32, 48, 64] },
      { name: "iOS 应用", sizes: [57, 60, 72, 114, 120, 144, 152, 167, 180, 1024] },
      { name: "Android 应用", sizes: [36, 48, 72, 96, 144, 192, 512] },
      { name: "Windows 应用", sizes: [16, 24, 32, 48, 64, 128, 256] },
      { name: "Web App", sizes: [192, 512] }
    ];
    const outputFormats = [
      { value: "png", name: "PNG" },
      { value: "jpg", name: "JPG" },
      { value: "ico", name: "ICO" },
      { value: "webp", name: "WebP" }
    ];
    const previewModes = [
      { value: "grid", name: "网格预览" },
      { value: "list", name: "列表预览" },
      { value: "realtime", name: "实时预览" }
    ];
    const formatDescriptions = [
      {
        type: "ico",
        name: "ICO",
        ext: ".ico",
        description: "Windows 图标格式，可包含多个尺寸",
        uses: "Windows 网站favicon"
      },
      {
        type: "png",
        name: "PNG",
        ext: ".png",
        description: "支持透明通道的便携式网络图形格式",
        uses: "网站favicon, 移动应用图标"
      },
      {
        type: "jpg",
        name: "JPG",
        ext: ".jpg",
        description: "有损压缩格式，文件小但无透明通道",
        uses: "一般图片预览"
      },
      {
        type: "webp",
        name: "WebP",
        ext: ".webp",
        description: "Google 开发的新一代图像格式",
        uses: "现代网页图标"
      }
    ];
    const formatFileSize = (size) => {
      return `${size}×${size}px`;
    };
    useSeoMeta({
      title: "图标生成器 - 在线生成 favicon 和应用图标",
      description: "免费在线图标生成工具，支持 favicon、iOS、Android、Windows 等多种平台图标格式，批量生成不同尺寸。",
      keywords: ["图标生成器", "favicon生成", "应用图标", "ico生成", "图标制作", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-ca53053b><div class="mt-4 mb-8" data-v-ca53053b><h1 class="text-3xl font-bold mb-3" data-v-ca53053b>图标生成器</h1><p class="text-muted-foreground" data-v-ca53053b>生成 favicon 等图标，支持多种尺寸和格式</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-ca53053b><div class="space-y-4" data-v-ca53053b><div class="bg-card border border-border rounded-lg p-6" data-v-ca53053b><h2 class="text-lg font-semibold mb-4" data-v-ca53053b>上传图片</h2><div class="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer" data-v-ca53053b><input type="file" class="hidden" accept="image/*" data-v-ca53053b>`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2" data-v-ca53053b>拖拽图片到这里</p><p class="text-sm text-muted-foreground" data-v-ca53053b>支持 JPG、PNG、GIF 等格式</p></div>`);
      if (uploadedImage.value) {
        _push(`<div class="mt-4 space-y-4" data-v-ca53053b><div class="relative" data-v-ca53053b><img${ssrRenderAttr("src", uploadedImage.value.url)}${ssrRenderAttr("alt", uploadedImage.value.name)} class="w-full rounded-lg" data-v-ca53053b><button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow" data-v-ca53053b>`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div><div class="text-sm text-muted-foreground" data-v-ca53053b><p data-v-ca53053b>文件名：${ssrInterpolate(uploadedImage.value.name)}</p><p data-v-ca53053b>原始尺寸：${ssrInterpolate(uploadedImage.value.width)} × ${ssrInterpolate(uploadedImage.value.height)} px</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card border border-border rounded-lg p-6" data-v-ca53053b><h2 class="text-lg font-semibold mb-4" data-v-ca53053b>生成设置</h2><div class="space-y-4" data-v-ca53053b><div data-v-ca53053b><label class="text-sm font-medium" data-v-ca53053b>图标类型</label><div class="mt-2 grid grid-cols-2 gap-2" data-v-ca53053b><!--[-->`);
      ssrRenderList(iconTypes, (type) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-2 rounded-md transition-colors text-sm",
          iconType.value === type.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}" data-v-ca53053b>${ssrInterpolate(type.name)}</button>`);
      });
      _push(`<!--]--></div></div><div data-v-ca53053b><label class="text-sm font-medium" data-v-ca53053b>尺寸预设</label><div class="mt-2 grid grid-cols-2 gap-2" data-v-ca53053b><!--[-->`);
      ssrRenderList(sizePresets, (preset) => {
        _push(`<button class="px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm" data-v-ca53053b>${ssrInterpolate(preset.name)}</button>`);
      });
      _push(`<!--]--></div></div><div data-v-ca53053b><label class="text-sm font-medium" data-v-ca53053b>自定义尺寸</label><div class="mt-2 grid grid-cols-4 gap-2" data-v-ca53053b><!--[-->`);
      ssrRenderList(customSizes.value, (size, index) => {
        _push(`<div class="flex items-center gap-2" data-v-ca53053b><input${ssrRenderAttr("value", size.width)} type="number" min="16" max="1024" class="w-20 px-2 py-1 border rounded text-sm" data-v-ca53053b><span class="text-xs text-muted-foreground" data-v-ca53053b>×</span><input${ssrRenderAttr("value", size.height)} type="number" min="16" max="1024" class="w-20 px-2 py-1 border rounded text-sm" data-v-ca53053b>`);
        if (customSizes.value.length > 1) {
          _push(`<button class="p-1 text-destructive hover:text-destructive/80" data-v-ca53053b>`);
          _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="mt-2 w-full px-3 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm" data-v-ca53053b> 添加尺寸 </button></div><div data-v-ca53053b><label class="text-sm font-medium" data-v-ca53053b>输出格式</label><div class="mt-2 grid grid-cols-3 gap-2" data-v-ca53053b><!--[-->`);
      ssrRenderList(outputFormats, (format) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-2 rounded-md transition-colors text-sm",
          outputFormat.value === format.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}" data-v-ca53053b>${ssrInterpolate(format.name)}</button>`);
      });
      _push(`<!--]--></div></div>`);
      if (outputFormat.value === "ico") {
        _push(`<div data-v-ca53053b><label class="flex items-center gap-2" data-v-ca53053b><input${ssrIncludeBooleanAttr(Array.isArray(transparentBackground.value) ? ssrLooseContain(transparentBackground.value, null) : transparentBackground.value) ? " checked" : ""} type="checkbox" class="rounded" data-v-ca53053b><span class="text-sm" data-v-ca53053b>透明背景</span></label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<details class="mt-4" data-v-ca53053b><summary class="text-sm font-medium cursor-pointer" data-v-ca53053b>高级选项</summary><div class="mt-3 space-y-3" data-v-ca53053b><label class="flex items-center gap-2" data-v-ca53053b><input${ssrIncludeBooleanAttr(Array.isArray(maintainAspectRatio.value) ? ssrLooseContain(maintainAspectRatio.value, null) : maintainAspectRatio.value) ? " checked" : ""} type="checkbox" class="rounded" checked data-v-ca53053b><span class="text-sm" data-v-ca53053b>保持宽高比</span></label><label class="flex items-center gap-2" data-v-ca53053b><input${ssrIncludeBooleanAttr(Array.isArray(autoOptimize.value) ? ssrLooseContain(autoOptimize.value, null) : autoOptimize.value) ? " checked" : ""} type="checkbox" class="rounded" checked data-v-ca53053b><span class="text-sm" data-v-ca53053b>自动优化</span></label></div></details></div></div><div class="space-y-2" data-v-ca53053b><button${ssrIncludeBooleanAttr(!uploadedImage.value || isGenerating.value) ? " disabled" : ""} class="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2" data-v-ca53053b>`);
      if (isGenerating.value) {
        _push(ssrRenderComponent(unref(Settings), { class: "w-4 h-4 animate-spin" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(isGenerating.value ? "生成中..." : "生成图标")}</button>`);
      if (generatedIcons.value.length > 0) {
        _push(`<button class="w-full px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center justify-center gap-2" data-v-ca53053b>`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` 下载所有图标 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="space-y-4" data-v-ca53053b><div class="bg-card border border-border rounded-lg p-6" data-v-ca53053b><h2 class="text-lg font-semibold mb-4" data-v-ca53053b>图标预览</h2>`);
      if (generatedIcons.value.length === 0) {
        _push(`<div class="text-center py-12 text-muted-foreground" data-v-ca53053b>`);
        _push(ssrRenderComponent(unref(ImageIcon), { class: "w-16 h-16 mx-auto mb-4" }, null, _parent));
        _push(`<p data-v-ca53053b>上传图片并点击生成按钮查看预览</p></div>`);
      } else {
        _push(`<div class="space-y-4" data-v-ca53053b><div class="flex gap-2" data-v-ca53053b><!--[-->`);
        ssrRenderList(previewModes, (mode) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-1 rounded-md transition-colors text-sm",
            previewMode.value === mode.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
          ])}" data-v-ca53053b>${ssrInterpolate(mode.name)}</button>`);
        });
        _push(`<!--]--></div>`);
        if (previewMode.value === "grid") {
          _push(`<div class="grid grid-cols-4 gap-4" data-v-ca53053b><!--[-->`);
          ssrRenderList(generatedIcons.value, (icon) => {
            _push(`<div class="space-y-2" data-v-ca53053b><div class="aspect-square bg-checkered rounded-lg p-2 flex items-center justify-center" data-v-ca53053b><img${ssrRenderAttr("src", icon.url)}${ssrRenderAttr("alt", `${icon.size}x${icon.size}`)} style="${ssrRenderStyle({ width: icon.size + "px", height: icon.size + "px" })}" class="max-w-full max-h-full" data-v-ca53053b></div><div class="text-center" data-v-ca53053b><p class="text-sm font-medium" data-v-ca53053b>${ssrInterpolate(icon.size)}px</p><button class="mt-1 text-xs text-primary hover:text-primary/80" data-v-ca53053b> 下载 </button></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="space-y-3 max-h-96 overflow-y-auto" data-v-ca53053b><!--[-->`);
          ssrRenderList(generatedIcons.value, (icon) => {
            _push(`<div class="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors" data-v-ca53053b><div class="flex items-center gap-3" data-v-ca53053b><div class="w-12 h-12 bg-checkered rounded p-1 flex items-center justify-center" data-v-ca53053b><img${ssrRenderAttr("src", icon.url)}${ssrRenderAttr("alt", `${icon.size}x${icon.size}`)} class="max-w-full max-h-full" data-v-ca53053b></div><div data-v-ca53053b><p class="font-medium" data-v-ca53053b>${ssrInterpolate(icon.size)} × ${ssrInterpolate(icon.size)} px</p><p class="text-sm text-muted-foreground" data-v-ca53053b>${ssrInterpolate(formatFileSize(icon.size))}</p></div></div><button class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" data-v-ca53053b> 下载 </button></div>`);
          });
          _push(`<!--]--></div>`);
        }
        if (previewMode.value === "realtime") {
          _push(`<div class="space-y-4" data-v-ca53053b><div data-v-ca53053b><label class="text-sm font-medium" data-v-ca53053b>网站预览</label><div class="mt-2 p-4 bg-muted rounded-lg" data-v-ca53053b><div class="flex items-center gap-4" data-v-ca53053b><div class="w-16 h-16 bg-checkered rounded flex items-center justify-center" data-v-ca53053b><img${ssrRenderAttr("src", generatedIcons.value[0]?.url)} alt="favicon" class="w-full h-full" data-v-ca53053b></div><div class="flex-1" data-v-ca53053b><p class="font-medium" data-v-ca53053b>网站标签页图标</p><p class="text-sm text-muted-foreground" data-v-ca53053b>16x16, 32x32, 48x48</p></div></div></div></div><div data-v-ca53053b><label class="text-sm font-medium" data-v-ca53053b>移动应用图标</label><div class="mt-2 p-4 bg-muted rounded-lg" data-v-ca53053b><div class="flex items-center gap-4" data-v-ca53053b><div class="w-16 h-16 bg-checkered rounded flex items-center justify-center" data-v-ca53053b><img${ssrRenderAttr("src", generatedIcons.value.find((i) => i.size === 57)?.url)} alt="ios icon" class="w-full h-full" data-v-ca53053b></div><div class="flex-1" data-v-ca53053b><p class="font-medium" data-v-ca53053b>iOS 应用图标</p><p class="text-sm text-muted-foreground" data-v-ca53053b>57x57, 60x60, 72x72</p></div></div><div class="flex items-center gap-4 mt-2" data-v-ca53053b><div class="w-16 h-16 bg-checkered rounded flex items-center justify-center" data-v-ca53053b><img${ssrRenderAttr("src", generatedIcons.value.find((i) => i.size === 72)?.url)} alt="android icon" class="w-full h-full" data-v-ca53053b></div><div class="flex-1" data-v-ca53053b><p class="font-medium" data-v-ca53053b>Android 应用图标</p><p class="text-sm text-muted-foreground" data-v-ca53053b>72x72, 96x96, 144x144</p></div></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div><div class="bg-card border border-border rounded-lg p-6" data-v-ca53053b><h2 class="text-lg font-semibold mb-4" data-v-ca53053b>格式说明</h2><div class="space-y-4 text-sm" data-v-ca53053b><!--[-->`);
      ssrRenderList(formatDescriptions, (format) => {
        _push(`<div class="p-4 bg-muted rounded-lg" data-v-ca53053b><h3 class="font-medium mb-2" data-v-ca53053b>${ssrInterpolate(format.name)} (${ssrInterpolate(format.ext)})</h3><p class="text-muted-foreground" data-v-ca53053b>${ssrInterpolate(format.description)}</p><p class="text-xs text-muted-foreground mt-2" data-v-ca53053b> 用途：${ssrInterpolate(format.uses)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mt-12 space-y-6" data-v-ca53053b><div class="bg-card border border-border rounded-lg p-6" data-v-ca53053b><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-ca53053b>`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用说明 </h3><div class="space-y-4 text-sm text-muted-foreground" data-v-ca53053b><div data-v-ca53053b><h4 class="font-medium text-foreground mb-2" data-v-ca53053b>支持的尺寸</h4><ul class="list-disc list-inside space-y-1 ml-4" data-v-ca53053b><li data-v-ca53053b><strong data-v-ca53053b>Favicon</strong>：16x16, 32x32, 48x48, 64x64 px</li><li data-v-ca53053b><strong data-v-ca53053b>iOS</strong>：57x57, 60x60, 72x72, 114x114, 120x120, 144x144, 152x152, 167x167, 180x180, 1024x1024 px</li><li data-v-ca53053b><strong data-v-ca53053b>Android</strong>：36x36, 48x48, 72x72, 96x96, 144x144, 192x192, 512x512 px</li><li data-v-ca53053b><strong data-v-ca53053b>Windows</strong>：16x16, 24x24, 32x32, 48x48, 64x64, 128x128, 256x256 px</li><li data-v-ca53053b><strong data-v-ca53053b>Web App</strong>：192x192, 512x512 px</li></ul></div><div data-v-ca53053b><h4 class="font-medium text-foreground mb-2" data-v-ca53053b>格式特点</h4><ul class="list-disc list-inside space-y-1 ml-4" data-v-ca53053b><li data-v-ca53053b><strong data-v-ca53053b>ICO</strong>：包含多个尺寸的单个文件，Windows 原生支持</li><li data-v-ca53053b><strong data-v-ca53053b>PNG</strong>：支持透明背景，质量高但文件较大</li><li data-v-ca53053b><strong data-v-ca53053b>JPG</strong>：不支持透明，文件较小，适合照片</li><li data-v-ca53053b><strong data-v-ca53053b>WebP</strong>：新一代格式，支持透明且文件小</li></ul></div></div></div><div class="bg-card border border-border rounded-lg p-6" data-v-ca53053b><h3 class="text-lg font-semibold mb-4" data-v-ca53053b>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-ca53053b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-resize",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Maximize2), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-ca53053b${_scopeId}><p class="font-medium group-hover:text-primary" data-v-ca53053b${_scopeId}>图片尺寸调整</p><p class="text-xs text-muted-foreground" data-v-ca53053b${_scopeId}>调整图片尺寸</p></div>`);
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
        to: "/tools/image-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RefreshCw), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-ca53053b${_scopeId}><p class="font-medium group-hover:text-primary" data-v-ca53053b${_scopeId}>图片格式转换</p><p class="text-xs text-muted-foreground" data-v-ca53053b${_scopeId}>转换图片格式</p></div>`);
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
        to: "/tools/image-compress",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-ca53053b${_scopeId}><p class="font-medium group-hover:text-primary" data-v-ca53053b${_scopeId}>图片压缩</p><p class="text-xs text-muted-foreground" data-v-ca53053b${_scopeId}>在线压缩图片</p></div>`);
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
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/icon-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const iconGenerator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca53053b"]]);
export {
  iconGenerator as default
};
//# sourceMappingURL=icon-generator-wtpHuuWD.js.map
