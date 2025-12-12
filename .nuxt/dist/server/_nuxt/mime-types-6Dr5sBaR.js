import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderList, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta, e as addRecentTool } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { Search, BarChart, TrendingUp, Folder, List, Info, SearchX, HelpCircle, ChevronUp, FileType, BookOpen } from "lucide-vue-next";
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
  __name: "mime-types",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "MIME类型查询工具 - 在线文件类型识别与查询",
      meta: [
        { name: "description", content: "免费在线MIME类型查询工具，支持按文件扩展名或MIME类型搜索，提供详细的文件类型信息、使用场景和代码示例。帮助开发者正确配置服务器和处理文件上传。" },
        { name: "keywords", content: "MIME类型,文件类型查询,文件扩展名,MIME搜索,Content-Type,文件格式,服务器配置" }
      ]
    });
    const tool = tools.find((t) => t.id === "mime-types");
    categories.find((c) => c.id === "network");
    const isSeoContentVisible = ref(true);
    const searchMode = ref("extension");
    const searchQuery = ref("");
    const searchResults = ref([]);
    const selectedMime = ref(null);
    const iconMap = {
      Search,
      BarChart,
      TrendingUp,
      Folder,
      List,
      Info,
      BookOpen,
      SearchX,
      HelpCircle,
      ChevronUp,
      FileType
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "mime-types"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "user-agent-parser"),
        tools.find((t) => t.id === "http-client"),
        tools.find((t) => t.id === "dns-lookup"),
        tools.find((t) => t.id === "port-checker")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const popularMimeTypes = [
      { extension: "pdf", mime: "application/pdf", description: "PDF 文档" },
      { extension: "jpg", mime: "image/jpeg", description: "JPEG 图片" },
      { extension: "png", mime: "image/png", description: "PNG 图片" },
      { extension: "mp4", mime: "video/mp4", description: "MP4 视频" },
      { extension: "mp3", mime: "audio/mpeg", description: "MP3 音频" },
      { extension: "zip", mime: "application/zip", description: "ZIP 压缩包" },
      { extension: "json", mime: "application/json", description: "JSON 数据" },
      { extension: "html", mime: "text/html", description: "HTML 文档" }
    ];
    const mimeCategories = [
      { name: "文档", count: 13 },
      { name: "图片", count: 9 },
      { name: "音频", count: 8 },
      { name: "视频", count: 9 },
      { name: "Web", count: 13 },
      { name: "应用程序", count: 7 },
      { name: "其他", count: 4 }
    ];
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">MIME类型查询工具 - 在线文件类型识别与查询</h1><p class="text-muted-foreground">专业的MIME类型查询工具，支持按文件扩展名或MIME类型搜索，提供详细的文件类型信息、使用场景和代码示例。帮助开发者正确配置服务器和处理文件上传。</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 搜索 MIME 类型 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">搜索模式</label><div class="flex space-x-4"><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(searchMode.value, "extension")) ? " checked" : ""} type="radio" value="extension" class="mr-2 border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">按扩展名</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(searchMode.value, "mime")) ? " checked" : ""} type="radio" value="mime" class="mr-2 border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">按 MIME 类型</span></label></div></div><div><label class="block text-sm font-medium text-foreground mb-2">${ssrInterpolate(searchMode.value === "extension" ? "文件扩展名" : "MIME 类型")}</label><input${ssrRenderAttr("value", searchQuery.value)} type="text"${ssrRenderAttr("placeholder", searchMode.value === "extension" ? "例如: pdf, jpg, json" : "例如: application/json")} class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"></div><div><label class="block text-sm font-medium text-foreground mb-2">快速选择</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="">选择常见类型...</option><optgroup label="文档"><option value="pdf">PDF</option><option value="doc">Word 文档</option><option value="xls">Excel 表格</option><option value="ppt">PowerPoint</option></optgroup><optgroup label="图片"><option value="jpg">JPEG 图片</option><option value="png">PNG 图片</option><option value="gif">GIF 动图</option><option value="svg">SVG 矢量图</option></optgroup><optgroup label="音频"><option value="mp3">MP3 音频</option><option value="wav">WAV 音频</option><option value="ogg">OGG 音频</option></optgroup><optgroup label="视频"><option value="mp4">MP4 视频</option><option value="avi">AVI 视频</option><option value="mov">MOV 视频</option></optgroup><optgroup label="代码"><option value="html">HTML</option><option value="css">CSS</option><option value="js">JavaScript</option><option value="json">JSON</option></optgroup></select></div><button${ssrIncludeBooleanAttr(!searchQuery.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2" }, null, _parent));
      _push(` 搜索 </button></div></div>`);
      if (searchResults.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(BarChart), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 搜索结果 </h2><div class="text-center"><div class="text-2xl font-bold text-primary">${ssrInterpolate(searchResults.value.length)}</div><div class="text-sm text-muted-foreground">个匹配项</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(TrendingUp), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 热门 MIME 类型 </h2><div class="space-y-2"><!--[-->`);
      ssrRenderList(popularMimeTypes, (type) => {
        _push(`<button class="w-full text-left px-3 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors"><div class="flex items-center justify-between"><span class="text-sm font-medium text-foreground">.${ssrInterpolate(type.extension)}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(type.mime)}</span></div><div class="text-xs text-muted-foreground">${ssrInterpolate(type.description)}</div></button>`);
      });
      _push(`<!--]--></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Folder), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 按分类浏览 </h2><div class="space-y-2"><!--[-->`);
      ssrRenderList(mimeCategories, (category2) => {
        _push(`<button class="w-full text-left px-3 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors"><div class="flex items-center justify-between"><span class="text-sm font-medium text-foreground">${ssrInterpolate(category2.name)}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(category2.count)} 项</span></div></button>`);
      });
      _push(`<!--]--></div></div></div><div class="lg:col-span-2 space-y-6">`);
      if (searchResults.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg"><div class="p-6 border-b border-border"><h3 class="text-lg font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(List), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 搜索结果 </h3></div><div class="overflow-x-auto"><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">扩展名</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">MIME 类型</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">描述</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">分类</th></tr></thead><tbody class="bg-card divide-y divide-border"><!--[-->`);
        ssrRenderList(searchResults.value, (item) => {
          _push(`<tr class="hover:bg-muted cursor-pointer"><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground"> .${ssrInterpolate(item.extension)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground font-mono">${ssrInterpolate(item.mime)}</td><td class="px-6 py-4 text-sm text-muted-foreground">${ssrInterpolate(item.description)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground"><span class="px-2 py-1 text-xs rounded-full bg-muted">${ssrInterpolate(item.category)}</span></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedMime.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Info), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 详细信息 </h3><div class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">文件扩展名</div><div class="text-lg font-semibold text-foreground">.${ssrInterpolate(selectedMime.value.extension)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">MIME 类型</div><div class="text-lg font-mono text-foreground">${ssrInterpolate(selectedMime.value.mime)}</div></div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">描述</div><div class="text-sm text-foreground">${ssrInterpolate(selectedMime.value.description)}</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">分类</div><div class="text-sm text-foreground">${ssrInterpolate(selectedMime.value.category)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">常见扩展名</div><div class="text-sm text-foreground">${ssrInterpolate(selectedMime.value.commonExtensions?.join(", ") || selectedMime.value.extension)}</div></div></div><div><h4 class="text-sm font-medium text-foreground mb-2">代码示例</h4><div class="space-y-3"><div><div class="text-xs text-muted-foreground mb-1">HTML</div><pre class="bg-muted p-2 rounded text-sm overflow-x-auto"><code class="text-foreground">&lt;input type=&quot;file&quot; accept=&quot;${ssrInterpolate(selectedMime.value.mime)}&quot; /&gt;</code></pre></div><div><div class="text-xs text-muted-foreground mb-1">Apache 配置</div><pre class="bg-muted p-2 rounded text-sm overflow-x-auto"><code class="text-foreground">AddType ${ssrInterpolate(selectedMime.value.mime)} .${ssrInterpolate(selectedMime.value.extension)}</code></pre></div><div><div class="text-xs text-muted-foreground mb-1">Nginx 配置</div><pre class="bg-muted p-2 rounded text-sm overflow-x-auto"><code class="text-foreground">types { ${ssrInterpolate(selectedMime.value.mime)} ${ssrInterpolate(selectedMime.value.extension)}; }</code></pre></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (searchQuery.value && searchResults.value.length === 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-12"><div class="text-center">`);
        _push(ssrRenderComponent(unref(SearchX), { class: "h-16 w-16 text-muted-foreground mx-auto mb-4" }, null, _parent));
        _push(`<p class="text-lg text-foreground mb-2">未找到匹配的 MIME 类型</p><p class="text-muted-foreground">请尝试其他搜索关键词</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!searchQuery.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-12"><div class="text-center">`);
        _push(ssrRenderComponent(unref(Search), { class: "h-16 w-16 text-muted-foreground mx-auto mb-4" }, null, _parent));
        _push(`<p class="text-lg text-foreground mb-2">搜索 MIME 类型</p><p class="text-muted-foreground">输入文件扩展名或 MIME 类型进行查询</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 MIME 类型？ </h2><p class="text-muted-foreground mb-4"> MIME (Multipurpose Internet Mail Extensions) 类型是一种标准，用来表示文档、文件或字节流的性质和格式。 它最初是为电子邮件设计的，但现在广泛应用于 Web 开发中，用于标识文件类型和内容格式。 </p><p class="text-muted-foreground mb-4"> MIME 类型由类型和子类型两部分组成，用斜杠分隔，例如：application/json。 正确设置 MIME 类型对于 Web 服务器、浏览器和应用程序正确处理文件至关重要。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> MIME 类型结构 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>type</strong>：表示大类别，如 text、image、application</li><li><strong>subtype</strong>：表示确切的数据格式，如 html、jpeg、json</li><li><strong>parameter</strong>：可选参数，如 charset=UTF-8</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见 MIME 类型 </h2><div class="bg-muted p-4 rounded mb-6"><ul class="space-y-2 text-sm text-muted-foreground"><li><strong>text/</strong> - 文本文件（text/html, text/css, text/javascript）</li><li><strong>image/</strong> - 图像文件（image/jpeg, image/png, image/gif）</li><li><strong>audio/</strong> - 音频文件（audio/mpeg, audio/wav）</li><li><strong>video/</strong> - 视频文件（video/mp4, video/quicktime）</li><li><strong>application/</strong> - 二进制文件（application/pdf, application/json）</li></ul></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>全面覆盖</strong>: 收录超过100种常见文件类型的 MIME 信息</li><li><strong>双向搜索</strong>: 支持按文件扩展名或 MIME 类型两种方式查询</li><li><strong>详细信息</strong>: 提供完整的 MIME 类型信息，包括描述、分类和常见扩展名</li><li><strong>代码示例</strong>: 提供 HTML、Apache、Nginx 等环境下的配置示例</li><li><strong>分类浏览</strong>: 按文档、图片、音频、视频等分类浏览 MIME 类型</li><li><strong>热门推荐</strong>: 展示最常用的 MIME 类型，快速查找</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 使用场景 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>Web 服务器配置</strong>: 正确配置文件类型映射，确保浏览器正确解析文件</li><li><strong>HTTP 响应头</strong>: 设置 Content-Type 响应头，告知客户端文件类型</li><li><strong>文件上传限制</strong>: 在 HTML 表单中使用 accept 属性限制可上传的文件类型</li><li><strong>Email 附件</strong>: 标识邮件附件的类型，确保正确处理</li><li><strong>API 开发</strong>: 在 RESTful API 中正确设置响应内容类型</li><li><strong>前端开发</strong>: 根据文件类型进行不同的处理逻辑</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">为什么需要设置正确的 MIME 类型？</h3><p class="text-muted-foreground mt-1"> 正确设置 MIME 类型对于 Web 应用至关重要。如果服务器返回错误的 MIME 类型， 浏览器可能无法正确解析文件，导致安全风险或功能异常。例如，JavaScript 文件被错误地标记为文本文件， 浏览器就不会执行它，影响网站功能。 </p></div><div><h3 class="text-lg font-semibold text-foreground">如何在服务器中配置 MIME 类型？</h3><p class="text-muted-foreground mt-1"> 不同的服务器有不同的配置方式。在 Apache 中可以通过 AddType 指令配置， 在 Nginx 中可以通过 types 块配置。大多数现代服务器都有默认的 MIME 类型映射， 但有时需要手动添加自定义类型。 </p></div><div><h3 class="text-lg font-semibold text-foreground">浏览器如何处理 MIME 类型？</h3><p class="text-muted-foreground mt-1"> 浏览器根据服务器返回的 Content-Type 响应头来决定如何处理文件。 如果没有设置 Content-Type，浏览器可能会尝试根据文件扩展名猜测类型， 或者直接提示用户下载文件。对于安全性要求高的内容，浏览器还会进行 MIME 类型嗅探检查。 </p></div><div><h3 class="text-lg font-semibold text-foreground">什么是 MIME 嗅探？</h3><p class="text-muted-foreground mt-1"> MIME 嗅探是浏览器在服务器未提供或提供了错误的 Content-Type 时， 尝试通过检查文件内容来推断其真实类型的过程。虽然这提高了兼容性， 但也带来了安全风险，因此现代浏览器通常会限制或禁用 MIME 嗅探。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(unref(relatedTools), (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Search)), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon] || unref(Search)), { class: "w-5 h-5 text-primary" })),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/mime-types.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=mime-types-6Dr5sBaR.js.map
