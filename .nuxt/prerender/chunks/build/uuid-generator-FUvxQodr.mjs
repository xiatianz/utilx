import { ref, computed, mergeProps, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { t as tools } from './tools-CG9LGULA.mjs';
import { e as addRecentTool, f as useSeoMeta, n as navigateTo } from './server.mjs';
import { _ as _sfc_main$1 } from './ToolCard-GG_LcR18.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs';
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
import './nuxt-link-Bb2DNygF.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import './categoryColors-w89ks1yN.mjs';

const _sfc_main = {
  __name: "uuid-generator",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const uuidVersions = [
      {
        value: "v4",
        name: "UUID v4",
        description: "\u968F\u673A\u751F\u6210",
        details: "\u4F7F\u7528\u968F\u673A\u6216\u4F2A\u968F\u673A\u6570\u751F\u6210\uFF0C\u662F\u6700\u5E38\u7528\u7684UUID\u7248\u672C"
      },
      {
        value: "v1",
        name: "UUID v1",
        description: "\u57FA\u4E8E\u65F6\u95F4\u6233",
        details: "\u57FA\u4E8E\u65F6\u95F4\u6233\u548CMAC\u5730\u5740\u751F\u6210\uFF0C\u53EF\u80FD\u66B4\u9732\u751F\u6210\u8005\u4FE1\u606F"
      },
      {
        value: "v5",
        name: "UUID v5",
        description: "\u57FA\u4E8E\u547D\u540D\u7A7A\u95F4",
        details: "\u57FA\u4E8E\u547D\u540D\u7A7A\u95F4\u548C\u540D\u79F0\u786E\u5B9A\u6027\u751F\u6210\uFF0C\u76F8\u540C\u8F93\u5165\u603B\u662F\u4EA7\u751F\u76F8\u540C\u8F93\u51FA"
      }
    ];
    const selectedVersion = ref("v4");
    const generateCount = ref(10);
    const outputFormat = ref("uppercase");
    const separator = ref("\n");
    const namespace = ref("");
    const name = ref("");
    const includeTimestamp = ref(false);
    const generatedUUIDs = ref([]);
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "uuid-generator"
      ).slice(0, 4);
    });
    const formatViewCount = (count) => {
      if (count >= 1e4) {
        return `${(count / 1e4).toFixed(1)}w+`;
      } else if (count >= 1e3) {
        return `${(count / 1e3).toFixed(1)}k+`;
      }
      return `${count}`;
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("uuid-generator");
    useSeoMeta({
      title: "UUID\u751F\u6210\u5668 - \u5728\u7EBFUUID/GUID\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFUUID\u751F\u6210\u5668\uFF0C\u652F\u6301UUID v1/v4/v5\u7248\u672C\uFF0C\u6279\u91CF\u751F\u6210\uFF0C\u81EA\u5B9A\u4E49\u683C\u5F0F\uFF0C\u751F\u6210\u552F\u4E00\u6807\u8BC6\u7B26\u3002",
      keywords: ["UUID", "GUID", "\u751F\u6210\u5668", "\u552F\u4E00\u6807\u8BC6\u7B26", "v1", "v4", "v5", "\u968F\u673AID"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">UUID\u751F\u6210\u5668</h1><p class="text-muted-foreground max-w-3xl">\u5728\u7EBF\u751F\u6210\u552F\u4E00\u6807\u8BC6\u7B26UUID/GUID\uFF0C\u652F\u6301UUID v1\u3001v4\u3001v5\u7248\u672C\uFF0C\u6279\u91CF\u751F\u6210\uFF0C\u81EA\u5B9A\u4E49\u6570\u91CF\u548C\u683C\u5F0F\u3002</p></div><div class="mb-6"><label class="text-lg font-semibold block mb-3">\u9009\u62E9UUID\u7248\u672C</label><div class="flex flex-wrap gap-3"><!--[-->`);
      ssrRenderList(uuidVersions, (version) => {
        _push(`<label class="${ssrRenderClass([{ "bg-primary text-primary-foreground border-primary": selectedVersion.value === version.value }, "flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors"])}"><input type="radio"${ssrRenderAttr("value", version.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedVersion.value, version.value)) ? " checked" : ""} class="sr-only"><span>${ssrInterpolate(version.name)}</span><span class="text-xs opacity-75">${ssrInterpolate(version.description)}</span></label>`);
      });
      _push(`<!--]--></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u751F\u6210\u6570\u91CF</label><div class="flex items-center gap-3"><input${ssrRenderAttr("value", generateCount.value)} type="range" min="1" max="100" class="flex-1"><input${ssrRenderAttr("value", generateCount.value)} type="number" min="1" max="100" class="w-20 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div></div><div><label class="text-sm font-medium mb-2 block">\u8F93\u51FA\u683C\u5F0F</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="uppercase"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "uppercase") : ssrLooseEqual(outputFormat.value, "uppercase")) ? " selected" : ""}>\u5927\u5199 (DEFAULT-XXXX-...)</option><option value="lowercase"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "lowercase") : ssrLooseEqual(outputFormat.value, "lowercase")) ? " selected" : ""}>\u5C0F\u5199 (default-xxxx-...)</option><option value="without-hyphens"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "without-hyphens") : ssrLooseEqual(outputFormat.value, "without-hyphens")) ? " selected" : ""}>\u65E0\u8FDE\u5B57\u7B26 (DEFAULTXXXX...)</option><option value="brackets"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "brackets") : ssrLooseEqual(outputFormat.value, "brackets")) ? " selected" : ""}>\u5E26\u62EC\u53F7 ({DEFAULT-XXXX-...})</option></select></div><div><label class="text-sm font-medium mb-2 block">\u5206\u9694\u7B26</label><input${ssrRenderAttr("value", separator.value)} type="text" placeholder="\u6BCF\u884C\u4E00\u4E2A\u3001\u9017\u53F7\u3001\u5206\u53F7\u7B49" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"></div></div><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u547D\u540D\u7A7A\u95F4 (v5)</label><input${ssrRenderAttr("value", namespace.value)} type="text" placeholder="\u8F93\u5165\u547D\u540D\u7A7A\u95F4\u5B57\u7B26\u4E32"${ssrIncludeBooleanAttr(selectedVersion.value !== "v5") ? " disabled" : ""} class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"></div><div><label class="text-sm font-medium mb-2 block">\u540D\u79F0 (v5)</label><input${ssrRenderAttr("value", name.value)} type="text" placeholder="\u8F93\u5165\u540D\u79F0\u5B57\u7B26\u4E32"${ssrIncludeBooleanAttr(selectedVersion.value !== "v5") ? " disabled" : ""} class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"></div><div class="flex items-center gap-2"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(includeTimestamp.value) ? ssrLooseContain(includeTimestamp.value, null) : includeTimestamp.value) ? " checked" : ""} id="includeTimestamp" class="rounded border-border"><label for="includeTimestamp" class="text-sm">\u5305\u542B\u751F\u6210\u65F6\u95F4\u6233</label></div></div></div><div class="flex flex-wrap gap-4 mb-8"><button class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"> \u751F\u6210UUID </button><button class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> \u590D\u5236\u5168\u90E8 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> \u4E0B\u8F7D\u7ED3\u679C </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"> \u6E05\u7A7A </button></div>`);
      if (generatedUUIDs.value.length > 0) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold">\u751F\u6210\u7ED3\u679C (${ssrInterpolate(generatedUUIDs.value.length)} \u4E2A)</h3><button class="text-primary hover:text-primary/80 transition-colors"> \u590D\u5236\u5168\u90E8 </button></div><div class="bg-muted/50 rounded-lg p-4 max-h-96 overflow-y-auto"><!--[-->`);
        ssrRenderList(generatedUUIDs.value, (uuid, index) => {
          _push(`<div class="flex items-center justify-between py-2 border-b border-border/50 last:border-0"><span class="font-mono text-sm">${ssrInterpolate(uuid)}</span><button class="text-primary hover:text-primary/80 transition-colors ml-4"> \u590D\u5236 </button></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">UUID\u7248\u672C\u8BF4\u660E</h3><div class="space-y-4"><!--[-->`);
      ssrRenderList(uuidVersions, (version) => {
        _push(`<div class="border-l-2 border-primary pl-4"><h4 class="font-medium mb-2">${ssrInterpolate(version.name)}</h4><p class="text-sm text-muted-foreground mb-2">${ssrInterpolate(version.description)}</p><p class="text-sm">${ssrInterpolate(version.details)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u5E38\u89C1\u4F7F\u7528\u573A\u666F</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h4 class="font-medium text-primary mb-2">\u6570\u636E\u5E93\u4E3B\u952E</h4><p class="text-sm text-muted-foreground">\u4F5C\u4E3A\u6570\u636E\u5E93\u8BB0\u5F55\u7684\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u907F\u514DID\u51B2\u7A81</p></div><div><h4 class="font-medium text-primary mb-2">\u5206\u5E03\u5F0F\u7CFB\u7EDF</h4><p class="text-sm text-muted-foreground">\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u751F\u6210\u5168\u5C40\u552F\u4E00\u6807\u8BC6\u7B26</p></div><div><h4 class="font-medium text-primary mb-2">\u4E8B\u52A1ID</h4><p class="text-sm text-muted-foreground">\u8DDF\u8E2A\u548C\u6807\u8BC6\u4E1A\u52A1\u4E8B\u52A1\uFF0C\u786E\u4FDD\u53EF\u8FFD\u6EAF\u6027</p></div><div><h4 class="font-medium text-primary mb-2">\u6587\u4EF6\u540D</h4><p class="text-sm text-muted-foreground">\u751F\u6210\u552F\u4E00\u7684\u6587\u4EF6\u540D\uFF0C\u907F\u514D\u6587\u4EF6\u8986\u76D6</p></div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u6280\u672F\u7EC6\u8282</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-primary mb-2">UUID\u7ED3\u6784</h4><p class="text-sm text-muted-foreground mb-2"> UUID\u753132\u4E2A\u5341\u516D\u8FDB\u5236\u6570\u5B57\u7EC4\u6210\uFF0C\u901A\u5E38\u8868\u793A\u4E3A5\u7EC4\uFF0C\u683C\u5F0F\u4E3A8-4-4-4-12 </p><code class="text-xs bg-muted px-2 py-1 rounded">xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx</code></div><div><h4 class="font-medium text-primary mb-2">\u7248\u672C\u4FE1\u606F</h4><p class="text-sm text-muted-foreground"> \u7B2C13\u4F4D\u6570\u5B57\u8868\u793AUUID\u7248\u672C\uFF081-5\uFF09\uFF0C\u7B2C14\u4F4D\u6570\u5B57\u8868\u793A\u53D8\u4F53 </p><ul class="text-sm mt-2 space-y-1"><li>\u2022 \u7248\u672C1: \u57FA\u4E8E\u65F6\u95F4\u6233\u548CMAC\u5730\u5740</li><li>\u2022 \u7248\u672C4: \u5B8C\u5168\u968F\u673A\u751F\u6210</li><li>\u2022 \u7248\u672C5: \u57FA\u4E8E\u547D\u540D\u7A7A\u95F4\u548C\u540D\u79F0</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (tool) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: tool.id,
          tool,
          title: tool.name,
          description: tool.description,
          category: tool.category,
          "usage-count": formatViewCount(tool.viewCount),
          icon: tool.icon,
          onSelect: handleToolSelect
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/uuid-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=uuid-generator-FUvxQodr.mjs.map
