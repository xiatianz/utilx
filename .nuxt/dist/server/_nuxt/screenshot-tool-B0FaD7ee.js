import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta, e as addRecentTool } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { Settings, MousePointer, ChevronUp, ChevronDown, Loader2, Camera, Trash2, Image, Download, Copy, Edit, History, HelpCircle } from "lucide-vue-next";
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
  __name: "screenshot-tool",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "网页截图工具 - 在线捕获网页截图",
      meta: [
        { name: "description", content: "免费在线网页截图工具，支持整页截图、可视区域截图、元素截图、延迟截图等多种模式，提供灵活的截图选项和批量下载功能。" },
        { name: "keywords", content: "网页截图,在线截图,整页截图,屏幕截图,截图工具,浏览器截图" }
      ]
    });
    const tool = tools.find((t) => t.id === "screenshot-tool");
    categories.find((c) => c.id === "network");
    const isSeoContentVisible = ref(true);
    const capturing = ref(false);
    const screenshots = ref([]);
    const selectedIndex = ref(0);
    const showAdvanced = ref(false);
    const captureMode = ref("viewport");
    const delayTime = ref(3);
    const targetUrl = ref("");
    const elementSelector = ref("");
    const outputFormat = ref("png");
    const quality = ref(90);
    const includeScrollbar = ref(false);
    const captureShadow = ref(true);
    const autoSave = ref(false);
    const copyToClipboard = ref(false);
    const iconMap = {
      Settings,
      Camera,
      MousePointer,
      ChevronUp,
      ChevronDown,
      Loader2,
      Image,
      Download,
      Copy,
      Edit,
      History,
      Trash2,
      HelpCircle
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "screenshot-tool"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "user-agent-parser"),
        tools.find((t) => t.id === "mime-types"),
        tools.find((t) => t.id === "http-client"),
        tools.find((t) => t.id === "dns-lookup")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const currentScreenshot = computed(() => {
      return screenshots.value[0] || null;
    });
    const getCaptureButtonText = () => {
      switch (captureMode.value) {
        case "viewport":
          return "截图当前页面";
        case "fullpage":
          return "截图整页";
        case "element":
          return "截图选中元素";
        case "delay":
          return `${delayTime.value}秒后截图`;
        default:
          return "开始截图";
      }
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">网页截图工具 - 在线捕获网页截图</h1><p class="text-muted-foreground">专业的在线网页截图工具，支持整页截图、可视区域截图、元素截图、延迟截图等多种模式，提供灵活的截图选项和批量下载功能。帮助开发者和设计师快速捕获网页内容。</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 截图设置 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">截图模式</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="viewport"${ssrIncludeBooleanAttr(Array.isArray(captureMode.value) ? ssrLooseContain(captureMode.value, "viewport") : ssrLooseEqual(captureMode.value, "viewport")) ? " selected" : ""}>可视区域</option><option value="fullpage"${ssrIncludeBooleanAttr(Array.isArray(captureMode.value) ? ssrLooseContain(captureMode.value, "fullpage") : ssrLooseEqual(captureMode.value, "fullpage")) ? " selected" : ""}>整页截图</option><option value="element"${ssrIncludeBooleanAttr(Array.isArray(captureMode.value) ? ssrLooseContain(captureMode.value, "element") : ssrLooseEqual(captureMode.value, "element")) ? " selected" : ""}>元素截图</option><option value="delay"${ssrIncludeBooleanAttr(Array.isArray(captureMode.value) ? ssrLooseContain(captureMode.value, "delay") : ssrLooseEqual(captureMode.value, "delay")) ? " selected" : ""}>延迟截图</option></select></div>`);
      if (captureMode.value === "delay") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2"> 延迟时间: ${ssrInterpolate(delayTime.value)}秒 </label><input${ssrRenderAttr("value", delayTime.value)} type="range" min="1" max="10" class="w-full"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (captureMode.value === "fullpage") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2">目标网址</label><input${ssrRenderAttr("value", targetUrl.value)} type="url" placeholder="https://example.com" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><p class="mt-1 text-xs text-muted-foreground"> 注：由于浏览器安全限制，此功能需要使用后端API或浏览器扩展 </p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (captureMode.value === "element") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2">元素选择器</label><div class="space-y-2"><input${ssrRenderAttr("value", elementSelector.value)} type="text" placeholder="#element-id 或 .class-name" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><button class="w-full px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm">`);
        _push(ssrRenderComponent(unref(MousePointer), { class: "h-4 w-4 inline mr-1" }, null, _parent));
        _push(` 点击选择元素 </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="block text-sm font-medium text-foreground mb-2">输出格式</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="png"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "png") : ssrLooseEqual(outputFormat.value, "png")) ? " selected" : ""}>PNG</option><option value="jpeg"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "jpeg") : ssrLooseEqual(outputFormat.value, "jpeg")) ? " selected" : ""}>JPEG</option><option value="webp"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "webp") : ssrLooseEqual(outputFormat.value, "webp")) ? " selected" : ""}>WebP</option></select></div>`);
      if (outputFormat.value === "jpeg") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2"> 图片质量: ${ssrInterpolate(quality.value)}% </label><input${ssrRenderAttr("value", quality.value)} type="range" min="10" max="100" step="5" class="w-full"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><button class="w-full text-left px-3 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors text-sm flex items-center justify-between"><span>高级选项</span>`);
      if (showAdvanced.value) {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "h-4 w-4" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronDown), { class: "h-4 w-4" }, null, _parent));
      }
      _push(`</button>`);
      if (showAdvanced.value) {
        _push(`<div class="mt-3 space-y-3"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(includeScrollbar.value) ? ssrLooseContain(includeScrollbar.value, null) : includeScrollbar.value) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">包含滚动条</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(captureShadow.value) ? ssrLooseContain(captureShadow.value, null) : captureShadow.value) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">捕获元素阴影</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(autoSave.value) ? ssrLooseContain(autoSave.value, null) : autoSave.value) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">自动保存截图</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(copyToClipboard.value) ? ssrLooseContain(copyToClipboard.value, null) : copyToClipboard.value) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">复制到剪贴板</span></label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="bg-card border border-border rounded-lg p-6"><button${ssrIncludeBooleanAttr(capturing.value || captureMode.value === "fullpage" && !targetUrl.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      if (capturing.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Camera), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(capturing.value ? "截图中..." : getCaptureButtonText())}</button>`);
      if (screenshots.value.length > 0) {
        _push(`<button class="w-full mt-3 bg-muted text-foreground py-3 px-4 rounded-md hover:bg-muted/80 transition-colors flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(Trash2), { class: "h-5 w-5 mr-2" }, null, _parent));
        _push(` 清除所有截图 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-muted rounded-lg p-4"><h3 class="text-sm font-semibold text-foreground mb-2">快捷键</h3><div class="space-y-1 text-xs text-muted-foreground"><div class="flex justify-between"><span>快速截图</span><kbd class="px-2 py-1 bg-background rounded">Ctrl + Shift + S</kbd></div><div class="flex justify-between"><span>整页截图</span><kbd class="px-2 py-1 bg-background rounded">Ctrl + Shift + P</kbd></div><div class="flex justify-between"><span>元素截图</span><kbd class="px-2 py-1 bg-background rounded">Ctrl + Shift + E</kbd></div></div></div></div><div class="lg:col-span-2 space-y-6">`);
      if (currentScreenshot.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Image), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 最新截图 </h3><div class="flex space-x-2"><button class="px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm flex items-center">`);
        _push(ssrRenderComponent(unref(Download), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` 下载 </button><button class="px-3 py-1 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors text-sm flex items-center">`);
        _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` 复制 </button><button class="px-3 py-1 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors text-sm flex items-center">`);
        _push(ssrRenderComponent(unref(Edit), { class: "h-4 w-4 mr-1" }, null, _parent));
        _push(` 编辑 </button></div></div><div class="relative bg-muted rounded-lg overflow-hidden"><img${ssrRenderAttr("src", currentScreenshot.value.data)}${ssrRenderAttr("alt", currentScreenshot.value.name)} class="w-full h-auto"><div class="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur text-foreground p-3"><div class="flex justify-between text-sm"><span>${ssrInterpolate(currentScreenshot.value.name)}</span><span>${ssrInterpolate(currentScreenshot.value.width)} × ${ssrInterpolate(currentScreenshot.value.height)}</span></div><div class="text-xs text-muted-foreground mt-1">${ssrInterpolate(new Date(currentScreenshot.value.timestamp).toLocaleString())}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (screenshots.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center justify-between text-foreground"><span class="flex items-center">`);
        _push(ssrRenderComponent(unref(History), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 截图历史 (${ssrInterpolate(screenshots.value.length)}) </span><button class="text-sm text-primary hover:text-primary/80"> 下载全部 </button></h3><div class="grid grid-cols-2 sm:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(screenshots.value, (screenshot, index) => {
          _push(`<div class="relative group cursor-pointer"><div class="relative"><img${ssrRenderAttr("src", screenshot.data)}${ssrRenderAttr("alt", screenshot.name)} class="${ssrRenderClass([[
            selectedIndex.value === index ? "border-primary ring-2 ring-primary/20" : "border-border group-hover:border-muted-foreground"
          ], "w-full h-32 object-cover rounded-lg border-2 transition-all"])}"><div class="absolute inset-0 bg-background/80 backdrop-blur rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2"><button class="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90">`);
          _push(ssrRenderComponent(unref(Download), { class: "h-4 w-4" }, null, _parent));
          _push(`</button><button class="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90">`);
          _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4" }, null, _parent));
          _push(`</button><button class="p-2 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90">`);
          _push(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4" }, null, _parent));
          _push(`</button></div></div><div class="mt-2"><div class="text-xs text-muted-foreground truncate">${ssrInterpolate(screenshot.name)}</div><div class="text-xs text-muted-foreground/70">${ssrInterpolate(screenshot.width)} × ${ssrInterpolate(screenshot.height)}</div></div></div>`);
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
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是网页截图工具？ </h2><p class="text-muted-foreground mb-4"> 网页截图工具是一种在线服务，可以帮助用户捕获网页的视觉快照。无论是整个页面、当前可见区域还是特定元素， 都可以通过浏览器的屏幕捕获功能快速生成高质量的图片。这对于开发者调试、设计师参考、内容分享等场景非常有用。 </p><p class="text-muted-foreground mb-4"> 现代网页截图工具不仅支持基本的截图功能，还提供了丰富的选项来自定义输出效果，如图片格式、质量、延迟截图等。 一些高级工具甚至支持滚动截图，可以捕获超出浏览器窗口的完整页面内容。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>多种截图模式</strong>: 支持可视区域、整页截图、元素截图和延迟截图四种模式</li><li><strong>灵活输出格式</strong>: 支持 PNG、JPEG、WebP 等主流图片格式</li><li><strong>质量控制</strong>: 可调节 JPEG 图片的质量，平衡文件大小和图像质量</li><li><strong>高级选项</strong>: 包含滚动条、阴影、自动保存等高级截图选项</li><li><strong>快捷键支持</strong>: 提供快捷键快速执行常用截图操作</li><li><strong>批量管理</strong>: 支持截图历史管理和批量下载</li><li><strong>剪贴板集成</strong>: 可直接将截图复制到剪贴板，方便粘贴使用</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 使用场景 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>开发者调试</strong>: 快速捕获页面状态，用于 bug 报告和问题诊断</li><li><strong>设计师参考</strong>: 保存网页设计灵感或竞品分析素材</li><li><strong>内容分享</strong>: 将网页内容以图片形式分享到社交媒体</li><li><strong>文档制作</strong>: 在技术文档或演示文稿中插入网页截图</li><li><strong>教学培训</strong>: 制作教程时展示网页操作步骤</li><li><strong>市场调研</strong>: 保存竞争对手的网页设计和布局</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">为什么某些截图功能需要浏览器权限？</h3><p class="text-muted-foreground mt-1"> 浏览器出于安全考虑，默认不允许网页随意访问屏幕内容。截图功能需要调用浏览器的屏幕捕获API， 因此首次使用时会弹出权限请求对话框。用户需要明确授权才能进行屏幕截图。 </p></div><div><h3 class="text-lg font-semibold text-foreground">整页截图和可视区域截图有什么区别？</h3><p class="text-muted-foreground mt-1"> 可视区域截图只捕获当前浏览器窗口内可见的部分，而整页截图则尝试捕获整个网页内容， 包括需要滚动才能看到的部分。不过由于浏览器安全限制，纯前端实现的整页截图有一定局限性。 </p></div><div><h3 class="text-lg font-semibold text-foreground">如何提高截图质量？</h3><p class="text-muted-foreground mt-1"> 选择 PNG 格式可以获得无损质量的截图，但文件较大。如果对文件大小有要求， 可以选择 JPEG 格式并调整质量参数。对于现代浏览器，WebP 格式是一个很好的折中选择。 </p></div><div><h3 class="text-lg font-semibold text-foreground">截图工具有哪些浏览器兼容性要求？</h3><p class="text-muted-foreground mt-1"> 截图工具需要浏览器支持 Screen Capture API，主流的现代浏览器（Chrome 72+、Firefox 66+、Edge 79+） 都支持此功能。IE 和一些老旧浏览器可能不支持或支持有限。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Camera)), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Camera)), { class: "w-5 h-5 text-primary" })),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/screenshot-tool.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=screenshot-tool-B0FaD7ee.js.map
