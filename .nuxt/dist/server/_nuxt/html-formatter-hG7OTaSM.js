import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, resolveComponent, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta, e as addRecentTool } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { Code2, Settings, Zap, Minimize2, Trash2, CheckCircle, FileCheck, Copy, Eye, AlertCircle, HelpCircle, ChevronUp, Replace, Link, Palette, Search, ArrowRight, Shield, FileText } from "lucide-vue-next";
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
  __name: "html-formatter",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "HTML格式化工具 - 在线HTML美化压缩工具",
      meta: [
        { name: "description", content: "专业的在线HTML格式化工具，支持HTML代码美化、压缩、格式化和语法验证。智能缩进调整，实时预览效果，一键复制结果。" },
        { name: "keywords", content: "HTML格式化,HTML美化,HTML压缩,代码格式化,HTML验证,在线HTML工具" },
        { name: "robots", content: "index,follow" }
      ]
    });
    const tool = tools.find((t) => t.id === "html-formatter");
    categories.find((c) => c.id === "format");
    const isSeoContentVisible = ref(true);
    const htmlInput = ref("");
    const formattedOutput = ref("");
    const indentType = ref("spaces");
    const indentSize = ref(2);
    const removeComments = ref(false);
    const removeEmptyAttributes = ref(false);
    const errorMessage = ref("");
    const formatMode = ref("format");
    const iconMap = {
      FileText,
      Code2,
      FileCheck,
      Settings,
      Zap,
      Shield,
      Eye,
      Copy,
      Minimize2,
      Trash2,
      CheckCircle,
      AlertCircle,
      ArrowRight,
      Search,
      Palette,
      Link,
      Replace,
      HelpCircle,
      ChevronUp
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "format" && t.id !== "html-formatter"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "css-formatter"),
        tools.find((t) => t.id === "js-formatter"),
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "xml-formatter")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const compressionRate = computed(() => {
      if (!htmlInput.value.length) return 0;
      const reduction = htmlInput.value.length - formattedOutput.value.length;
      return Math.round(reduction / htmlInput.value.length * 100);
    });
    const formatBytes = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FileUp = resolveComponent("FileUp");
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">HTML格式化工具 - 在线HTML美化压缩工具</h1><p class="text-muted-foreground">专业的在线HTML格式化工具，支持HTML代码美化、压缩、格式化和语法验证。智能缩进调整，实时预览效果，一键复制结果。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"><div class="space-y-6"><div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold text-foreground flex items-center">`);
      _push(ssrRenderComponent(unref(Code2), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` HTML 代码输入 </h2><span class="text-sm text-muted-foreground">${ssrInterpolate(formatBytes(htmlInput.value.length))}</span></div><div class="space-y-4"><textarea placeholder="请粘贴您的HTML代码..." class="w-full h-80 px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm text-foreground placeholder:text-muted-foreground resize-none">${ssrInterpolate(htmlInput.value)}</textarea></div></div><div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 格式化选项 </h3><div class="space-y-4"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-foreground mb-2">缩进类型</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="spaces"${ssrIncludeBooleanAttr(Array.isArray(indentType.value) ? ssrLooseContain(indentType.value, "spaces") : ssrLooseEqual(indentType.value, "spaces")) ? " selected" : ""}>空格</option><option value="tabs"${ssrIncludeBooleanAttr(Array.isArray(indentType.value) ? ssrLooseContain(indentType.value, "tabs") : ssrLooseEqual(indentType.value, "tabs")) ? " selected" : ""}>制表符</option></select></div><div><label class="block text-sm font-medium text-foreground mb-2">缩进大小</label><input type="number"${ssrRenderAttr("value", indentSize.value)} min="1" max="8" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"></div></div><div class="space-y-3"><label class="flex items-center cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(removeComments.value) ? ssrLooseContain(removeComments.value, null) : removeComments.value) ? " checked" : ""} class="mr-3 h-4 w-4 text-primary rounded border-border bg-background focus:ring-primary"><span class="text-sm text-foreground">移除 HTML 注释</span></label><label class="flex items-center cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(removeEmptyAttributes.value) ? ssrLooseContain(removeEmptyAttributes.value, null) : removeEmptyAttributes.value) ? " checked" : ""} class="mr-3 h-4 w-4 text-primary rounded border-border bg-background focus:ring-primary"><span class="text-sm text-foreground">移除空属性</span></label></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Zap), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 快速操作 </h3><div class="grid grid-cols-2 gap-3"><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium">`);
      _push(ssrRenderComponent(_component_FileUp, { class: "inline-block w-4 h-4 mr-2" }, null, _parent));
      _push(` 加载示例 </button><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors text-sm font-medium">`);
      _push(ssrRenderComponent(unref(Minimize2), { class: "inline-block w-4 h-4 mr-2" }, null, _parent));
      _push(` 压缩代码 </button><button class="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors text-sm font-medium">`);
      _push(ssrRenderComponent(unref(Trash2), { class: "inline-block w-4 h-4 mr-2" }, null, _parent));
      _push(` 清空全部 </button><button class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium">`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "inline-block w-4 h-4 mr-2" }, null, _parent));
      _push(` 验证格式 </button></div></div></div><div class="space-y-6"><div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold text-foreground flex items-center">`);
      _push(ssrRenderComponent(unref(FileCheck), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 格式化结果 </h2><div class="flex items-center gap-2"><span class="text-sm px-2 py-1 bg-primary/10 text-primary rounded-full">${ssrInterpolate(formatMode.value === "format" ? "美化" : "压缩")}模式 </span><button class="px-3 py-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium">`);
      _push(ssrRenderComponent(unref(Copy), { class: "inline-block w-4 h-4 mr-1" }, null, _parent));
      _push(` 复制 </button></div></div><textarea readonly class="w-full h-80 px-4 py-3 bg-muted border border-border rounded-lg font-mono text-sm text-foreground resize-none">${ssrInterpolate(formattedOutput.value)}</textarea><div class="mt-4 grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg"><div class="text-center"><div class="text-2xl font-bold text-primary">${ssrInterpolate(formatBytes(htmlInput.value.length))}</div><div class="text-sm text-muted-foreground">原始大小</div></div><div class="text-center"><div class="text-2xl font-bold text-secondary">${ssrInterpolate(formatBytes(formattedOutput.value.length))}</div><div class="text-sm text-muted-foreground">处理后</div></div><div class="text-center"><div class="text-2xl font-bold text-green-600">${ssrInterpolate(compressionRate.value)}%</div><div class="text-sm text-muted-foreground">压缩率</div></div><div class="text-center"><div class="text-2xl font-bold text-blue-600">${ssrInterpolate(formattedOutput.value.split("\n").length)}</div><div class="text-sm text-muted-foreground">总行数</div></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Eye), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` HTML 预览 </h3><div class="border border-border rounded-lg p-6 min-h-[200px] bg-background overflow-auto">${formattedOutput.value ?? ""}</div></div>`);
      if (errorMessage.value) {
        _push(`<div class="bg-destructive/10 border border-destructive rounded-lg p-4"><div class="flex items-start">`);
        _push(ssrRenderComponent(unref(AlertCircle), { class: "h-5 w-5 text-destructive mr-2 mt-0.5" }, null, _parent));
        _push(`<p class="text-destructive text-sm">${ssrInterpolate(errorMessage.value)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 HTML 格式化？ </h2><p class="text-muted-foreground mb-4"> HTML 格式化是指对 HTML 代码进行美化和整理，使其具有良好的缩进、换行和结构层次， 从而提高代码的可读性和可维护性。格式化后的 HTML 代码更容易理解和修改， 也有助于团队协作开发。 </p><p class="text-muted-foreground mb-4"> HTML 格式化工具不仅可以美化代码，还可以压缩 HTML 以减小文件大小， 提升网页加载速度。同时，它还能帮助检测 HTML 语法错误，确保代码符合标准规范。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>智能格式化</strong>: 自动识别HTML结构，智能调整缩进和换行，让代码层次清晰</li><li><strong>代码压缩</strong>: 移除多余空格、注释和换行符，显著减小文件体积</li><li><strong>语法验证</strong>: 检查HTML标签配对、嵌套结构等语法问题</li><li><strong>自定义选项</strong>: 支持缩进类型、大小、注释处理等多种自定义配置</li><li><strong>实时预览</strong>: 即时查看格式化后的HTML效果</li><li><strong>一键复制</strong>: 快速复制格式化结果到剪贴板</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 使用场景 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>前端开发</strong>: 格式化和压缩HTML模板代码，优化网站性能</li><li><strong>代码审查</strong>: 统一团队代码风格，提高代码可读性</li><li><strong>学习HTML</strong>: 格式化示例代码，更好地理解HTML结构</li><li><strong>代码优化</strong>: 压缩HTML文件，减少网络传输时间</li><li><strong>SEO优化</strong>: 清理代码结构，提升搜索引擎友好度</li><li><strong>代码重构</strong>: 重组项目代码，提高维护性</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">HTML格式化会影响网页显示效果吗？</h3><p class="text-muted-foreground mt-1"> 不会。HTML格式化只改变代码的排版和结构，不影响网页的实际显示效果。 浏览器在解析HTML时会忽略多余的空格和换行符，所以格式化后的代码在浏览器中显示效果完全相同。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么要压缩HTML代码？</h3><p class="text-muted-foreground mt-1"> 压缩HTML代码可以显著减小文件大小，从而加快网页加载速度， 提升用户体验。对于访问量大的网站，压缩HTML还能节省带宽成本。 </p></div><div><h3 class="text-lg font-semibold text-foreground">如何选择合适的缩进方式？</h3><p class="text-muted-foreground mt-1"> 一般建议使用空格缩进，因为不同编辑器对制表符的显示宽度可能不同， 容易造成代码对齐混乱。通常2个或4个空格是比较常见的选择， 可以根据团队规范或个人喜好进行设置。 </p></div><div><h3 class="text-lg font-semibold text-foreground">格式化工具安全吗？</h3><p class="text-muted-foreground mt-1"> 绝对安全。我们的HTML格式化工具采用纯前端技术实现， 所有处理都在您的浏览器本地完成，数据不会上传到任何服务器， 确保您的代码隐私和安全。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(FileText)), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(FileText)), { class: "w-5 h-5 text-primary" })),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/html-formatter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=html-formatter-hG7OTaSM.js.map
