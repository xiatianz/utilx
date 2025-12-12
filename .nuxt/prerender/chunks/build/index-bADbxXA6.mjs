import { computed, mergeProps, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { t as tools } from './tools-CG9LGULA.mjs';
import { n as navigateTo, e as addRecentTool } from './server.mjs';
import { _ as _sfc_main$1 } from './ToolCard-GG_LcR18.mjs';
import { u as useSEO } from './useSEO-DTxZRwJC.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("\u5728\u7EBF\u7F16\u7801\u89E3\u7801\u5DE5\u5177\u7BB1");
    const category = categories.find((c) => c.id === "encode");
    const categoryTools = computed(() => {
      return tools.filter((tool) => tool.category === category.id);
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u5728\u7EBF\u7F16\u7801\u89E3\u7801\u5DE5\u5177\u7BB1</h1><p class="text-muted-foreground max-w-3xl">\u652F\u6301Base64\u3001URL\u7F16\u7801\u3001HTML\u5B9E\u4F53\u7F16\u7801\u7B49\u591A\u79CD\u7F16\u7801\u89E3\u7801\u64CD\u4F5C\uFF0C\u4FDD\u969C\u6570\u636E\u4F20\u8F93\u5B89\u5168\u6027\u548C\u5B8C\u6574\u6027\u3002</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12"><!--[-->`);
      ssrRenderList(categoryTools.value, (tool) => {
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
      _push(`<!--]--></div><div class="mt-8"><h2 class="text-2xl font-bold mb-6">\u7F16\u7801\u683C\u5F0F\u901F\u67E5\u624B\u518C</h2><div class="space-y-8"><div><h3 class="text-xl font-semibold mb-3 flex items-center"><span class="font-mono text-primary mr-2">#</span> Base64 \u539F\u7406\u4E0E\u5E94\u7528 </h3><p class="text-muted-foreground mb-3"> Base64 \u662F\u4E00\u79CD\u57FA\u4E8E64\u4E2A\u53EF\u6253\u5370\u5B57\u7B26\u6765\u8868\u793A\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u8868\u793A\u65B9\u6CD5\u3002\u5B83\u5E38\u7528\u4E8E\u5728\u901A\u5E38\u5904\u7406\u6587\u672C\u6570\u636E\u7684\u573A\u5408\u4F20\u8F93\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C \u5982\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891\u7B49\u591A\u5A92\u4F53\u6587\u4EF6\u5728\u7F51\u7EDC\u4E0A\u7684\u4F20\u8F93\u3002 </p><div class="rounded-lg p-4"><h4 class="font-semibold text-primary mb-2">\u5E94\u7528\u573A\u666F\uFF1A</h4><ul class="space-y-1 text-sm"><li class="flex items-start"><span class="font-mono text-primary mr-2">\u2022</span><span>\u7535\u5B50\u90AE\u4EF6\u9644\u4EF6\u4F20\u8F93\uFF08MIME\uFF09</span></li><li class="flex items-start"><span class="font-mono text-primary mr-2">\u2022</span><span>\u5728URL\u3001Cookie\u6216\u8868\u5355\u6570\u636E\u4E2D\u5D4C\u5165\u4E8C\u8FDB\u5236\u6570\u636E</span></li><li class="flex items-start"><span class="font-mono text-primary mr-2">\u2022</span><span>CSS\u4E2D\u5D4C\u5165\u5C0F\u56FE\u7247\u4EE5\u51CF\u5C11HTTP\u8BF7\u6C42</span></li></ul></div></div><div><h3 class="text-xl font-semibold mb-3 flex items-center"><span class="font-mono text-primary mr-2">#</span> URL \u7F16\u7801\u89C4\u5219 </h3><p class="text-muted-foreground mb-3"> URL \u7F16\u7801\uFF08\u4E5F\u79F0\u4E3A\u767E\u5206\u53F7\u7F16\u7801\uFF09\u662F\u7279\u5B9A\u4E0A\u4E0B\u6587\u7684\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26\uFF08URL\uFF09\u7684\u7F16\u7801\u673A\u5236\u3002\u5B83\u4E3B\u8981\u7528\u4E8E\u7EDF\u4E00\u8D44\u6E90\u6807\u8BC6\u7B26\uFF08URI\uFF09\u4E2D\uFF0C \u901A\u8FC7\u5C06\u7279\u6B8A\u5B57\u7B26\u8F6C\u6362\u4E3A&quot;%XX&quot;\u7684\u5F62\u5F0F\uFF08\u5176\u4E2DXX\u662F\u5B57\u7B26\u7684ASCII\u7801\u7684\u5341\u516D\u8FDB\u5236\u8868\u793A\uFF09\u6765\u786E\u4FDDURL\u7684\u6B63\u786E\u4F20\u8F93\u3002 </p><div class="rounded-lg p-4"><h4 class="font-semibold text-primary mb-2">\u9700\u8981\u7F16\u7801\u7684\u5B57\u7B26\uFF1A</h4><ul class="space-y-1 text-sm"><li class="flex items-start"><span class="font-mono text-primary mr-2">\u2022</span><span>\u4FDD\u7559\u5B57\u7B26\uFF1A<span class="font-mono bg-muted px-1 rounded">! * &#39; ( ) ; : @ &amp; = + $ , / ? # [ ]</span></span></li><li class="flex items-start"><span class="font-mono text-primary mr-2">\u2022</span><span>\u975EASCII\u5B57\u7B26\uFF1A\u5982\u4E2D\u6587\u3001\u65E5\u6587\u7B49Unicode\u5B57\u7B26</span></li><li class="flex items-start"><span class="font-mono text-primary mr-2">\u2022</span><span>\u4E0D\u5B89\u5168\u5B57\u7B26\uFF1A\u7A7A\u683C\u3001%\u3001&lt;\u3001&gt;\u3001#\u3001%\u3001{\u3001}\u3001|\u3001\\\u3001^\u3001~\u3001[\u3001]\u3001\`</span></li></ul></div></div><div><h3 class="text-xl font-semibold mb-3 flex items-center"><span class="font-mono text-primary mr-2">#</span> JWT (JSON Web Token) \u7ED3\u6784 </h3><p class="text-muted-foreground mb-3"> JWT\u662F\u4E00\u79CD\u5F00\u653E\u6807\u51C6\uFF08RFC 7519\uFF09\uFF0C\u7528\u4E8E\u5728\u5404\u65B9\u4E4B\u95F4\u5B89\u5168\u5730\u4F20\u8F93\u4FE1\u606F\u3002JWT\u7531\u4E09\u90E8\u5206\u7EC4\u6210\uFF0C\u7528\u70B9\uFF08.\uFF09\u5206\u9694\uFF0C\u901A\u5E38\u770B\u8D77\u6765\u50CF\u8FD9\u6837\uFF1A <span class="font-mono bg-muted px-1 rounded break-all">xxxxx.yyyyy.zzzzz</span></p><div class="rounded-lg p-4"><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div><h4 class="font-semibold text-primary mb-2">Header\uFF08\u5934\u90E8\uFF09</h4><p class="text-sm"> \u5305\u542B\u4EE4\u724C\u7684\u7C7B\u578B\uFF08\u5373JWT\uFF09\u548C\u6240\u7528\u7684\u7B7E\u540D\u7B97\u6CD5\uFF0C\u5982HMAC SHA256\u6216RSA\u3002 </p></div><div><h4 class="font-semibold text-primary mb-2">Payload\uFF08\u8D1F\u8F7D\uFF09</h4><p class="text-sm"> \u5305\u542B\u58F0\u660E\uFF08claims\uFF09\uFF0C\u5373\u8981\u4F20\u8F93\u7684\u6570\u636E\u3002\u58F0\u660E\u6709\u4E09\u79CD\u7C7B\u578B\uFF1A\u6CE8\u518C\u58F0\u660E\u3001\u516C\u5171\u58F0\u660E\u548C\u79C1\u6709\u58F0\u660E\u3002 </p></div><div><h4 class="font-semibold text-primary mb-2">Signature\uFF08\u7B7E\u540D\uFF09</h4><p class="text-sm"> \u7528\u4E8E\u9A8C\u8BC1\u4EE4\u724C\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u6CA1\u6709\u88AB\u66F4\u6539\uFF0C\u5E76\u786E\u8BA4\u53D1\u9001\u65B9\u7684\u8EAB\u4EFD\u3002 </p></div></div></div></div></div><h2 class="text-2xl font-bold mt-12 mb-6">\u5E38\u89C1\u95EE\u9898 (FAQ)</h2><div class="space-y-6"><div class="border-l-2 border-primary pl-4 py-1"><h3 class="text-lg font-semibold mb-2">Q: \u5728\u7EBF\u89E3\u7801\u5B89\u5168\u5417\uFF1F</h3><p class="text-muted-foreground"> A: <span class="font-semibold">\u7EDD\u5BF9\u5B89\u5168</span>\u3002Util.cn \u91C7\u7528 WebAssembly \u548C JS \u672C\u5730\u8BA1\u7B97\u6280\u672F\uFF0C\u6240\u6709\u7F16\u7801\u89E3\u7801\u64CD\u4F5C\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C \u60A8\u7684\u6570\u636E\u6C38\u8FDC\u4E0D\u4F1A\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u3002\u6211\u4EEC\u81F4\u529B\u4E8E\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u5B89\u5168\u53EF\u9760\u7684\u5DE5\u5177\u3002 </p></div><div class="border-l-2 border-primary pl-4 py-1"><h3 class="text-lg font-semibold mb-2">Q: \u4E3A\u4EC0\u4E48 Base64 \u7F16\u7801\u540E\u4F53\u79EF\u4F1A\u53D8\u5927\uFF1F</h3><p class="text-muted-foreground"> A: Base64 \u7F16\u7801\u4F7F\u7528 64 \u4E2A\u5B57\u7B26\uFF08A-Z, a-z, 0-9, +, /\uFF09\u6765\u8868\u793A\u4E8C\u8FDB\u5236\u6570\u636E\u3002\u7531\u4E8E\u6BCF 3 \u4E2A\u5B57\u8282\u7684\u4E8C\u8FDB\u5236\u6570\u636E\u4F1A\u88AB\u7F16\u7801\u4E3A 4 \u4E2A Base64 \u5B57\u7B26\uFF0C \u56E0\u6B64\u7F16\u7801\u540E\u7684\u6570\u636E\u4F53\u79EF\u5927\u7EA6\u4F1A\u589E\u52A0 <span class="font-mono font-semibold">33%</span>\u3002\u8FD9\u662F\u6B63\u5E38\u7684\u6570\u5B66\u73B0\u8C61\uFF0C\u4E0D\u662F\u7A0B\u5E8F\u95EE\u9898\u3002 </p></div><div class="border-l-2 border-primary pl-4 py-1"><h3 class="text-lg font-semibold mb-2">Q: URL \u7F16\u7801\u548C HTML \u5B9E\u4F53\u7F16\u7801\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h3><p class="text-muted-foreground"> A: URL \u7F16\u7801\u4E3B\u8981\u7528\u4E8E URL \u4E2D\u7279\u6B8A\u5B57\u7B26\u7684\u8F6C\u4E49\uFF0C\u683C\u5F0F\u4E3A <span class="font-mono bg-muted px-1 rounded">%XX</span>\uFF1B HTML \u5B9E\u4F53\u7F16\u7801\u7528\u4E8E\u5728 HTML \u6587\u6863\u4E2D\u8868\u793A\u7279\u6B8A\u5B57\u7B26\uFF0C\u5982 <span class="font-mono bg-muted px-1 rounded">&amp;lt;</span> \u8868\u793A &lt;\uFF0C <span class="font-mono bg-muted px-1 rounded">&amp;amp;</span> \u8868\u793A &amp;\u3002\u4E24\u8005\u7528\u9014\u548C\u7F16\u7801\u65B9\u5F0F\u90FD\u4E0D\u540C\u3002 </p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/encode/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-bADbxXA6.mjs.map
