import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderList, ssrRenderStyle, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
import { Search, BarChart, TrendingUp, Folder, List, Info, SearchX, HelpCircle, ChevronUp, FileType, BookOpen } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/destr/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ohash/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/scule/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/apple/Documents/code/util/node_modules/pathe/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/server.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/devalue/index.js';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = {
  __name: "mime-types",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "MIME\u7C7B\u578B\u67E5\u8BE2\u5DE5\u5177 - \u5728\u7EBF\u6587\u4EF6\u7C7B\u578B\u8BC6\u522B\u4E0E\u67E5\u8BE2",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBFMIME\u7C7B\u578B\u67E5\u8BE2\u5DE5\u5177\uFF0C\u652F\u6301\u6309\u6587\u4EF6\u6269\u5C55\u540D\u6216MIME\u7C7B\u578B\u641C\u7D22\uFF0C\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6587\u4EF6\u7C7B\u578B\u4FE1\u606F\u3001\u4F7F\u7528\u573A\u666F\u548C\u4EE3\u7801\u793A\u4F8B\u3002\u5E2E\u52A9\u5F00\u53D1\u8005\u6B63\u786E\u914D\u7F6E\u670D\u52A1\u5668\u548C\u5904\u7406\u6587\u4EF6\u4E0A\u4F20\u3002" },
        { name: "keywords", content: "MIME\u7C7B\u578B,\u6587\u4EF6\u7C7B\u578B\u67E5\u8BE2,\u6587\u4EF6\u6269\u5C55\u540D,MIME\u641C\u7D22,Content-Type,\u6587\u4EF6\u683C\u5F0F,\u670D\u52A1\u5668\u914D\u7F6E" }
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
      { extension: "pdf", mime: "application/pdf", description: "PDF \u6587\u6863" },
      { extension: "jpg", mime: "image/jpeg", description: "JPEG \u56FE\u7247" },
      { extension: "png", mime: "image/png", description: "PNG \u56FE\u7247" },
      { extension: "mp4", mime: "video/mp4", description: "MP4 \u89C6\u9891" },
      { extension: "mp3", mime: "audio/mpeg", description: "MP3 \u97F3\u9891" },
      { extension: "zip", mime: "application/zip", description: "ZIP \u538B\u7F29\u5305" },
      { extension: "json", mime: "application/json", description: "JSON \u6570\u636E" },
      { extension: "html", mime: "text/html", description: "HTML \u6587\u6863" }
    ];
    const mimeCategories = [
      { name: "\u6587\u6863", count: 13 },
      { name: "\u56FE\u7247", count: 9 },
      { name: "\u97F3\u9891", count: 8 },
      { name: "\u89C6\u9891", count: 9 },
      { name: "Web", count: 13 },
      { name: "\u5E94\u7528\u7A0B\u5E8F", count: 7 },
      { name: "\u5176\u4ED6", count: 4 }
    ];
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">MIME\u7C7B\u578B\u67E5\u8BE2\u5DE5\u5177 - \u5728\u7EBF\u6587\u4EF6\u7C7B\u578B\u8BC6\u522B\u4E0E\u67E5\u8BE2</h1><p class="text-muted-foreground">\u4E13\u4E1A\u7684MIME\u7C7B\u578B\u67E5\u8BE2\u5DE5\u5177\uFF0C\u652F\u6301\u6309\u6587\u4EF6\u6269\u5C55\u540D\u6216MIME\u7C7B\u578B\u641C\u7D22\uFF0C\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6587\u4EF6\u7C7B\u578B\u4FE1\u606F\u3001\u4F7F\u7528\u573A\u666F\u548C\u4EE3\u7801\u793A\u4F8B\u3002\u5E2E\u52A9\u5F00\u53D1\u8005\u6B63\u786E\u914D\u7F6E\u670D\u52A1\u5668\u548C\u5904\u7406\u6587\u4EF6\u4E0A\u4F20\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u641C\u7D22 MIME \u7C7B\u578B </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u641C\u7D22\u6A21\u5F0F</label><div class="flex space-x-4"><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(searchMode.value, "extension")) ? " checked" : ""} type="radio" value="extension" class="mr-2 border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">\u6309\u6269\u5C55\u540D</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(searchMode.value, "mime")) ? " checked" : ""} type="radio" value="mime" class="mr-2 border-border text-primary focus:ring-primary bg-background"><span class="text-sm text-foreground">\u6309 MIME \u7C7B\u578B</span></label></div></div><div><label class="block text-sm font-medium text-foreground mb-2">${ssrInterpolate(searchMode.value === "extension" ? "\u6587\u4EF6\u6269\u5C55\u540D" : "MIME \u7C7B\u578B")}</label><input${ssrRenderAttr("value", searchQuery.value)} type="text"${ssrRenderAttr("placeholder", searchMode.value === "extension" ? "\u4F8B\u5982: pdf, jpg, json" : "\u4F8B\u5982: application/json")} class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"></div><div><label class="block text-sm font-medium text-foreground mb-2">\u5FEB\u901F\u9009\u62E9</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"><option value="">\u9009\u62E9\u5E38\u89C1\u7C7B\u578B...</option><optgroup label="\u6587\u6863"><option value="pdf">PDF</option><option value="doc">Word \u6587\u6863</option><option value="xls">Excel \u8868\u683C</option><option value="ppt">PowerPoint</option></optgroup><optgroup label="\u56FE\u7247"><option value="jpg">JPEG \u56FE\u7247</option><option value="png">PNG \u56FE\u7247</option><option value="gif">GIF \u52A8\u56FE</option><option value="svg">SVG \u77E2\u91CF\u56FE</option></optgroup><optgroup label="\u97F3\u9891"><option value="mp3">MP3 \u97F3\u9891</option><option value="wav">WAV \u97F3\u9891</option><option value="ogg">OGG \u97F3\u9891</option></optgroup><optgroup label="\u89C6\u9891"><option value="mp4">MP4 \u89C6\u9891</option><option value="avi">AVI \u89C6\u9891</option><option value="mov">MOV \u89C6\u9891</option></optgroup><optgroup label="\u4EE3\u7801"><option value="html">HTML</option><option value="css">CSS</option><option value="js">JavaScript</option><option value="json">JSON</option></optgroup></select></div><button${ssrIncludeBooleanAttr(!searchQuery.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2" }, null, _parent));
      _push(` \u641C\u7D22 </button></div></div>`);
      if (searchResults.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(BarChart), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u641C\u7D22\u7ED3\u679C </h2><div class="text-center"><div class="text-2xl font-bold text-primary">${ssrInterpolate(searchResults.value.length)}</div><div class="text-sm text-muted-foreground">\u4E2A\u5339\u914D\u9879</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(TrendingUp), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u70ED\u95E8 MIME \u7C7B\u578B </h2><div class="space-y-2"><!--[-->`);
      ssrRenderList(popularMimeTypes, (type) => {
        _push(`<button class="w-full text-left px-3 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors"><div class="flex items-center justify-between"><span class="text-sm font-medium text-foreground">.${ssrInterpolate(type.extension)}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(type.mime)}</span></div><div class="text-xs text-muted-foreground">${ssrInterpolate(type.description)}</div></button>`);
      });
      _push(`<!--]--></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Folder), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u6309\u5206\u7C7B\u6D4F\u89C8 </h2><div class="space-y-2"><!--[-->`);
      ssrRenderList(mimeCategories, (category2) => {
        _push(`<button class="w-full text-left px-3 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors"><div class="flex items-center justify-between"><span class="text-sm font-medium text-foreground">${ssrInterpolate(category2.name)}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(category2.count)} \u9879</span></div></button>`);
      });
      _push(`<!--]--></div></div></div><div class="lg:col-span-2 space-y-6">`);
      if (searchResults.value.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg"><div class="p-6 border-b border-border"><h3 class="text-lg font-semibold flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(List), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u641C\u7D22\u7ED3\u679C </h3></div><div class="overflow-x-auto"><table class="min-w-full divide-y divide-border"><thead class="bg-muted"><tr><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">\u6269\u5C55\u540D</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">MIME \u7C7B\u578B</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">\u63CF\u8FF0</th><th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">\u5206\u7C7B</th></tr></thead><tbody class="bg-card divide-y divide-border"><!--[-->`);
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
        _push(` \u8BE6\u7EC6\u4FE1\u606F </h3><div class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">\u6587\u4EF6\u6269\u5C55\u540D</div><div class="text-lg font-semibold text-foreground">.${ssrInterpolate(selectedMime.value.extension)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">MIME \u7C7B\u578B</div><div class="text-lg font-mono text-foreground">${ssrInterpolate(selectedMime.value.mime)}</div></div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">\u63CF\u8FF0</div><div class="text-sm text-foreground">${ssrInterpolate(selectedMime.value.description)}</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">\u5206\u7C7B</div><div class="text-sm text-foreground">${ssrInterpolate(selectedMime.value.category)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-xs text-muted-foreground mb-1">\u5E38\u89C1\u6269\u5C55\u540D</div><div class="text-sm text-foreground">${ssrInterpolate(((_a = selectedMime.value.commonExtensions) == null ? void 0 : _a.join(", ")) || selectedMime.value.extension)}</div></div></div><div><h4 class="text-sm font-medium text-foreground mb-2">\u4EE3\u7801\u793A\u4F8B</h4><div class="space-y-3"><div><div class="text-xs text-muted-foreground mb-1">HTML</div><pre class="bg-muted p-2 rounded text-sm overflow-x-auto"><code class="text-foreground">&lt;input type=&quot;file&quot; accept=&quot;${ssrInterpolate(selectedMime.value.mime)}&quot; /&gt;</code></pre></div><div><div class="text-xs text-muted-foreground mb-1">Apache \u914D\u7F6E</div><pre class="bg-muted p-2 rounded text-sm overflow-x-auto"><code class="text-foreground">AddType ${ssrInterpolate(selectedMime.value.mime)} .${ssrInterpolate(selectedMime.value.extension)}</code></pre></div><div><div class="text-xs text-muted-foreground mb-1">Nginx \u914D\u7F6E</div><pre class="bg-muted p-2 rounded text-sm overflow-x-auto"><code class="text-foreground">types { ${ssrInterpolate(selectedMime.value.mime)} ${ssrInterpolate(selectedMime.value.extension)}; }</code></pre></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (searchQuery.value && searchResults.value.length === 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-12"><div class="text-center">`);
        _push(ssrRenderComponent(unref(SearchX), { class: "h-16 w-16 text-muted-foreground mx-auto mb-4" }, null, _parent));
        _push(`<p class="text-lg text-foreground mb-2">\u672A\u627E\u5230\u5339\u914D\u7684 MIME \u7C7B\u578B</p><p class="text-muted-foreground">\u8BF7\u5C1D\u8BD5\u5176\u4ED6\u641C\u7D22\u5173\u952E\u8BCD</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!searchQuery.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-12"><div class="text-center">`);
        _push(ssrRenderComponent(unref(Search), { class: "h-16 w-16 text-muted-foreground mx-auto mb-4" }, null, _parent));
        _push(`<p class="text-lg text-foreground mb-2">\u641C\u7D22 MIME \u7C7B\u578B</p><p class="text-muted-foreground">\u8F93\u5165\u6587\u4EF6\u6269\u5C55\u540D\u6216 MIME \u7C7B\u578B\u8FDB\u884C\u67E5\u8BE2</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F MIME \u7C7B\u578B\uFF1F </h2><p class="text-muted-foreground mb-4"> MIME (Multipurpose Internet Mail Extensions) \u7C7B\u578B\u662F\u4E00\u79CD\u6807\u51C6\uFF0C\u7528\u6765\u8868\u793A\u6587\u6863\u3001\u6587\u4EF6\u6216\u5B57\u8282\u6D41\u7684\u6027\u8D28\u548C\u683C\u5F0F\u3002 \u5B83\u6700\u521D\u662F\u4E3A\u7535\u5B50\u90AE\u4EF6\u8BBE\u8BA1\u7684\uFF0C\u4F46\u73B0\u5728\u5E7F\u6CDB\u5E94\u7528\u4E8E Web \u5F00\u53D1\u4E2D\uFF0C\u7528\u4E8E\u6807\u8BC6\u6587\u4EF6\u7C7B\u578B\u548C\u5185\u5BB9\u683C\u5F0F\u3002 </p><p class="text-muted-foreground mb-4"> MIME \u7C7B\u578B\u7531\u7C7B\u578B\u548C\u5B50\u7C7B\u578B\u4E24\u90E8\u5206\u7EC4\u6210\uFF0C\u7528\u659C\u6760\u5206\u9694\uFF0C\u4F8B\u5982\uFF1Aapplication/json\u3002 \u6B63\u786E\u8BBE\u7F6E MIME \u7C7B\u578B\u5BF9\u4E8E Web \u670D\u52A1\u5668\u3001\u6D4F\u89C8\u5668\u548C\u5E94\u7528\u7A0B\u5E8F\u6B63\u786E\u5904\u7406\u6587\u4EF6\u81F3\u5173\u91CD\u8981\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> MIME \u7C7B\u578B\u7ED3\u6784 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>type</strong>\uFF1A\u8868\u793A\u5927\u7C7B\u522B\uFF0C\u5982 text\u3001image\u3001application</li><li><strong>subtype</strong>\uFF1A\u8868\u793A\u786E\u5207\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u5982 html\u3001jpeg\u3001json</li><li><strong>parameter</strong>\uFF1A\u53EF\u9009\u53C2\u6570\uFF0C\u5982 charset=UTF-8</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1 MIME \u7C7B\u578B </h2><div class="bg-muted p-4 rounded mb-6"><ul class="space-y-2 text-sm text-muted-foreground"><li><strong>text/</strong> - \u6587\u672C\u6587\u4EF6\uFF08text/html, text/css, text/javascript\uFF09</li><li><strong>image/</strong> - \u56FE\u50CF\u6587\u4EF6\uFF08image/jpeg, image/png, image/gif\uFF09</li><li><strong>audio/</strong> - \u97F3\u9891\u6587\u4EF6\uFF08audio/mpeg, audio/wav\uFF09</li><li><strong>video/</strong> - \u89C6\u9891\u6587\u4EF6\uFF08video/mp4, video/quicktime\uFF09</li><li><strong>application/</strong> - \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF08application/pdf, application/json\uFF09</li></ul></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u5168\u9762\u8986\u76D6</strong>: \u6536\u5F55\u8D85\u8FC7100\u79CD\u5E38\u89C1\u6587\u4EF6\u7C7B\u578B\u7684 MIME \u4FE1\u606F</li><li><strong>\u53CC\u5411\u641C\u7D22</strong>: \u652F\u6301\u6309\u6587\u4EF6\u6269\u5C55\u540D\u6216 MIME \u7C7B\u578B\u4E24\u79CD\u65B9\u5F0F\u67E5\u8BE2</li><li><strong>\u8BE6\u7EC6\u4FE1\u606F</strong>: \u63D0\u4F9B\u5B8C\u6574\u7684 MIME \u7C7B\u578B\u4FE1\u606F\uFF0C\u5305\u62EC\u63CF\u8FF0\u3001\u5206\u7C7B\u548C\u5E38\u89C1\u6269\u5C55\u540D</li><li><strong>\u4EE3\u7801\u793A\u4F8B</strong>: \u63D0\u4F9B HTML\u3001Apache\u3001Nginx \u7B49\u73AF\u5883\u4E0B\u7684\u914D\u7F6E\u793A\u4F8B</li><li><strong>\u5206\u7C7B\u6D4F\u89C8</strong>: \u6309\u6587\u6863\u3001\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891\u7B49\u5206\u7C7B\u6D4F\u89C8 MIME \u7C7B\u578B</li><li><strong>\u70ED\u95E8\u63A8\u8350</strong>: \u5C55\u793A\u6700\u5E38\u7528\u7684 MIME \u7C7B\u578B\uFF0C\u5FEB\u901F\u67E5\u627E</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4F7F\u7528\u573A\u666F </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>Web \u670D\u52A1\u5668\u914D\u7F6E</strong>: \u6B63\u786E\u914D\u7F6E\u6587\u4EF6\u7C7B\u578B\u6620\u5C04\uFF0C\u786E\u4FDD\u6D4F\u89C8\u5668\u6B63\u786E\u89E3\u6790\u6587\u4EF6</li><li><strong>HTTP \u54CD\u5E94\u5934</strong>: \u8BBE\u7F6E Content-Type \u54CD\u5E94\u5934\uFF0C\u544A\u77E5\u5BA2\u6237\u7AEF\u6587\u4EF6\u7C7B\u578B</li><li><strong>\u6587\u4EF6\u4E0A\u4F20\u9650\u5236</strong>: \u5728 HTML \u8868\u5355\u4E2D\u4F7F\u7528 accept \u5C5E\u6027\u9650\u5236\u53EF\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B</li><li><strong>Email \u9644\u4EF6</strong>: \u6807\u8BC6\u90AE\u4EF6\u9644\u4EF6\u7684\u7C7B\u578B\uFF0C\u786E\u4FDD\u6B63\u786E\u5904\u7406</li><li><strong>API \u5F00\u53D1</strong>: \u5728 RESTful API \u4E2D\u6B63\u786E\u8BBE\u7F6E\u54CD\u5E94\u5185\u5BB9\u7C7B\u578B</li><li><strong>\u524D\u7AEF\u5F00\u53D1</strong>: \u6839\u636E\u6587\u4EF6\u7C7B\u578B\u8FDB\u884C\u4E0D\u540C\u7684\u5904\u7406\u903B\u8F91</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u9700\u8981\u8BBE\u7F6E\u6B63\u786E\u7684 MIME \u7C7B\u578B\uFF1F</h3><p class="text-muted-foreground mt-1"> \u6B63\u786E\u8BBE\u7F6E MIME \u7C7B\u578B\u5BF9\u4E8E Web \u5E94\u7528\u81F3\u5173\u91CD\u8981\u3002\u5982\u679C\u670D\u52A1\u5668\u8FD4\u56DE\u9519\u8BEF\u7684 MIME \u7C7B\u578B\uFF0C \u6D4F\u89C8\u5668\u53EF\u80FD\u65E0\u6CD5\u6B63\u786E\u89E3\u6790\u6587\u4EF6\uFF0C\u5BFC\u81F4\u5B89\u5168\u98CE\u9669\u6216\u529F\u80FD\u5F02\u5E38\u3002\u4F8B\u5982\uFF0CJavaScript \u6587\u4EF6\u88AB\u9519\u8BEF\u5730\u6807\u8BB0\u4E3A\u6587\u672C\u6587\u4EF6\uFF0C \u6D4F\u89C8\u5668\u5C31\u4E0D\u4F1A\u6267\u884C\u5B83\uFF0C\u5F71\u54CD\u7F51\u7AD9\u529F\u80FD\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u5728\u670D\u52A1\u5668\u4E2D\u914D\u7F6E MIME \u7C7B\u578B\uFF1F</h3><p class="text-muted-foreground mt-1"> \u4E0D\u540C\u7684\u670D\u52A1\u5668\u6709\u4E0D\u540C\u7684\u914D\u7F6E\u65B9\u5F0F\u3002\u5728 Apache \u4E2D\u53EF\u4EE5\u901A\u8FC7 AddType \u6307\u4EE4\u914D\u7F6E\uFF0C \u5728 Nginx \u4E2D\u53EF\u4EE5\u901A\u8FC7 types \u5757\u914D\u7F6E\u3002\u5927\u591A\u6570\u73B0\u4EE3\u670D\u52A1\u5668\u90FD\u6709\u9ED8\u8BA4\u7684 MIME \u7C7B\u578B\u6620\u5C04\uFF0C \u4F46\u6709\u65F6\u9700\u8981\u624B\u52A8\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u578B\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u6D4F\u89C8\u5668\u5982\u4F55\u5904\u7406 MIME \u7C7B\u578B\uFF1F</h3><p class="text-muted-foreground mt-1"> \u6D4F\u89C8\u5668\u6839\u636E\u670D\u52A1\u5668\u8FD4\u56DE\u7684 Content-Type \u54CD\u5E94\u5934\u6765\u51B3\u5B9A\u5982\u4F55\u5904\u7406\u6587\u4EF6\u3002 \u5982\u679C\u6CA1\u6709\u8BBE\u7F6E Content-Type\uFF0C\u6D4F\u89C8\u5668\u53EF\u80FD\u4F1A\u5C1D\u8BD5\u6839\u636E\u6587\u4EF6\u6269\u5C55\u540D\u731C\u6D4B\u7C7B\u578B\uFF0C \u6216\u8005\u76F4\u63A5\u63D0\u793A\u7528\u6237\u4E0B\u8F7D\u6587\u4EF6\u3002\u5BF9\u4E8E\u5B89\u5168\u6027\u8981\u6C42\u9AD8\u7684\u5185\u5BB9\uFF0C\u6D4F\u89C8\u5668\u8FD8\u4F1A\u8FDB\u884C MIME \u7C7B\u578B\u55C5\u63A2\u68C0\u67E5\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4EC0\u4E48\u662F MIME \u55C5\u63A2\uFF1F</h3><p class="text-muted-foreground mt-1"> MIME \u55C5\u63A2\u662F\u6D4F\u89C8\u5668\u5728\u670D\u52A1\u5668\u672A\u63D0\u4F9B\u6216\u63D0\u4F9B\u4E86\u9519\u8BEF\u7684 Content-Type \u65F6\uFF0C \u5C1D\u8BD5\u901A\u8FC7\u68C0\u67E5\u6587\u4EF6\u5185\u5BB9\u6765\u63A8\u65AD\u5176\u771F\u5B9E\u7C7B\u578B\u7684\u8FC7\u7A0B\u3002\u867D\u7136\u8FD9\u63D0\u9AD8\u4E86\u517C\u5BB9\u6027\uFF0C \u4F46\u4E5F\u5E26\u6765\u4E86\u5B89\u5168\u98CE\u9669\uFF0C\u56E0\u6B64\u73B0\u4EE3\u6D4F\u89C8\u5668\u901A\u5E38\u4F1A\u9650\u5236\u6216\u7981\u7528 MIME \u55C5\u63A2\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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

export { _sfc_main as default };
//# sourceMappingURL=mime-types-6Dr5sBaR.mjs.map
