import { ref, mergeProps, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { M as MarkdownRenderer } from './MarkdownRenderer-BnvxWTyi.mjs';
import { u as useSEO } from './useSEO-DTxZRwJC.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/marked/lib/marked.esm.js';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
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

const aboutContent = "# \u5173\u4E8E\u6211\u4EEC\n\n\u6B22\u8FCE\u6765\u5230 Util.cn \u2014\u2014 \u5F00\u53D1\u8005\u7684\u4E00\u7AD9\u5F0F\u5DE5\u5177\u5E73\u53F0\u3002\n\n## \u6211\u4EEC\u7684\u4F7F\u547D\n\n\u6211\u4EEC\u7684\u4F7F\u547D\u662F\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u9AD8\u6548\u3001\u4FBF\u6377\u3001\u5B89\u5168\u7684\u5728\u7EBF\u5DE5\u5177\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u8282\u7701\u65F6\u95F4\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u3002\u6211\u4EEC\u76F8\u4FE1\uFF0C\u4F18\u79C0\u7684\u5DE5\u5177\u5E94\u8BE5\u662F\u7B80\u5355\u6613\u7528\u3001\u529F\u80FD\u5F3A\u5927\u4E14\u5B89\u5168\u53EF\u9760\u7684\u3002\n\n## \u4E3A\u4EC0\u4E48\u9009\u62E9 Util.cn\uFF1F\n\n### \u{1F512} \u6570\u636E\u5B89\u5168\u7B2C\u4E00\n\u6240\u6709\u5DE5\u5177\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u4E2D\u672C\u5730\u8FD0\u884C\uFF0C\u60A8\u7684\u6570\u636E\u6C38\u8FDC\u4E0D\u4F1A\u4F20\u8F93\u5230\u4EFB\u4F55\u670D\u52A1\u5668\u3002\u60A8\u53EF\u4EE5\u653E\u5FC3\u4F7F\u7528\u6211\u4EEC\u7684\u5DE5\u5177\u5904\u7406\u654F\u611F\u4FE1\u606F\u3002\n\n### \u26A1 \u6781\u901F\u54CD\u5E94\n\u7531\u4E8E\u6240\u6709\u8BA1\u7B97\u90FD\u5728\u672C\u5730\u8FDB\u884C\uFF0C\u6211\u4EEC\u7684\u5DE5\u5177\u54CD\u5E94\u901F\u5EA6\u6781\u5FEB\uFF0C\u65E0\u9700\u7B49\u5F85\u670D\u52A1\u5668\u54CD\u5E94\u3002\n\n### \u{1F3AF} \u4E13\u6CE8\u5F00\u53D1\u8005\u9700\u6C42\n\u6211\u4EEC\u6DF1\u5165\u4E86\u89E3\u5F00\u53D1\u8005\u7684\u5DE5\u4F5C\u6D41\u7A0B\u548C\u75DB\u70B9\uFF0C\u6301\u7EED\u4F18\u5316\u5DE5\u5177\u4F53\u9A8C\uFF0C\u8BA9\u6BCF\u4E2A\u5DE5\u5177\u90FD\u80FD\u771F\u6B63\u89E3\u51B3\u95EE\u9898\u3002\n\n### \u{1F310} \u5B8C\u5168\u514D\u8D39\n\u6211\u4EEC\u81F4\u529B\u4E8E\u63D0\u4F9B\u9AD8\u8D28\u91CF\u7684\u514D\u8D39\u5DE5\u5177\uFF0C\u8BA9\u6BCF\u4E2A\u5F00\u53D1\u8005\u90FD\u80FD\u4EAB\u53D7\u5230\u4E13\u4E1A\u7EA7\u7684\u5DE5\u5177\u670D\u52A1\u3002\n\n## \u6211\u4EEC\u7684\u6545\u4E8B\n\nUtil.cn \u8BDE\u751F\u4E8E\u4E00\u7FA4\u70ED\u7231\u7F16\u7A0B\u7684\u5F00\u53D1\u8005\u4E4B\u624B\u3002\u5728\u65E5\u5E38\u5DE5\u4F5C\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u4F7F\u7528\u5404\u79CD\u5728\u7EBF\u5DE5\u5177\u6765\u5904\u7406JSON\u3001\u683C\u5F0F\u5316\u4EE3\u7801\u3001\u8F6C\u6362\u65F6\u95F4\u6233\u7B49\u4EFB\u52A1\u3002\u7136\u800C\uFF0C\u73B0\u6709\u7684\u5DE5\u5177\u8981\u4E48\u5E7F\u544A\u8FC7\u591A\uFF0C\u8981\u4E48\u6570\u636E\u5B89\u5168\u6027\u5B58\u7591\uFF0C\u8981\u4E48\u529F\u80FD\u4E0D\u591F\u5B8C\u5584\u3002\n\n\u4E8E\u662F\u6211\u4EEC\u51B3\u5B9A\u81EA\u5DF1\u6253\u9020\u4E00\u4E2A\u7406\u60F3\u7684\u5DE5\u5177\u5E73\u53F0\u2014\u2014\u4E00\u4E2A\u65E0\u5E7F\u544A\u3001\u7EAF\u672C\u5730\u8BA1\u7B97\u3001\u5373\u5F00\u5373\u7528\u7684\u5728\u7EBF\u5DE5\u5177\u96C6\u5408\u3002\u7ECF\u8FC7\u6570\u6708\u7684\u52AA\u529B\uFF0CUtil.cn \u7EC8\u4E8E\u4E0A\u7EBF\u4E86\u3002\n\n## \u56E2\u961F\u4ECB\u7ECD\n\n\u6211\u4EEC\u7684\u56E2\u961F\u7531\u6765\u81EA\u4E0D\u540C\u80CC\u666F\u7684\u5F00\u53D1\u8005\u7EC4\u6210\uFF0C\u5305\u62EC\u524D\u7AEF\u5DE5\u7A0B\u5E08\u3001\u540E\u7AEF\u5DE5\u7A0B\u5E08\u3001UI/UX\u8BBE\u8BA1\u5E08\u548C\u4EA7\u54C1\u7ECF\u7406\u3002\u867D\u7136\u6211\u4EEC\u5206\u5E03\u5728\u4E16\u754C\u5404\u5730\uFF0C\u4F46\u6211\u4EEC\u6709\u7740\u5171\u540C\u7684\u76EE\u6807\uFF1A\u8BA9\u5F00\u53D1\u5DE5\u4F5C\u53D8\u5F97\u66F4\u7B80\u5355\u3001\u66F4\u9AD8\u6548\u3002\n\n## \u8054\u7CFB\u6211\u4EEC\n\n\u5982\u679C\u60A8\u6709\u4EFB\u4F55\u5EFA\u8BAE\u3001\u53CD\u9988\u6216\u5408\u4F5C\u610F\u5411\uFF0C\u6B22\u8FCE\u968F\u65F6\u8054\u7CFB\u6211\u4EEC\uFF1A\n\n- \u90AE\u7BB1\uFF1Askyin.lewis@gmail.com\n- GitHub\uFF1A[github.com/dmdq/utilx](https://github.com/dmdq/utilx)\n\n\u611F\u8C22\u60A8\u9009\u62E9 Util.cn\uFF01";
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("\u5173\u4E8E\u6211\u4EEC");
    const pageContent = ref(aboutContent);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto py-8" }, _attrs))}><div class="prose prose-gray dark:prose-invert max-w-none">`);
      _push(ssrRenderComponent(MarkdownRenderer, { content: pageContent.value }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-BYOlmoSW.mjs.map
