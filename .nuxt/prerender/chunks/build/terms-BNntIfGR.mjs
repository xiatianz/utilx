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

const termsContent = '# \u670D\u52A1\u6761\u6B3E\n\n\u6700\u540E\u66F4\u65B0\u65F6\u95F4\uFF1A2025\u5E741\u67081\u65E5\n\n## \u63A5\u53D7\u6761\u6B3E\n\n\u6B22\u8FCE\u60A8\u4F7F\u7528 Util.cn \u63D0\u4F9B\u7684\u670D\u52A1\u3002\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u4EE5\u4E0B\u670D\u52A1\u6761\u6B3E\u3002\n\n\u901A\u8FC7\u8BBF\u95EE\u6216\u4F7F\u7528\u6211\u4EEC\u7684\u670D\u52A1\uFF0C\u60A8\u540C\u610F\u53D7\u8FD9\u4E9B\u6761\u6B3E\u7684\u7EA6\u675F\u3002\u5982\u679C\u60A8\u4E0D\u540C\u610F\u8FD9\u4E9B\u6761\u6B3E\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528\u6211\u4EEC\u7684\u670D\u52A1\u3002\n\n## \u670D\u52A1\u63CF\u8FF0\n\nUtil.cn \u662F\u4E00\u4E2A\u5728\u7EBF\u5DE5\u5177\u5E73\u53F0\uFF0C\u63D0\u4F9B\u5404\u79CD\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\n\n- \u6570\u636E\u683C\u5F0F\u5316\u5DE5\u5177\uFF08JSON\u3001XML\u7B49\uFF09\n- \u7F16\u7801\u89E3\u7801\u5DE5\u5177\uFF08Base64\u3001URL\u7F16\u7801\u7B49\uFF09\n- \u52A0\u5BC6\u5B89\u5168\u5DE5\u5177\uFF08MD5\u3001SHA\u7B49\uFF09\n- \u65F6\u95F4\u65E5\u671F\u5DE5\u5177\n- \u6587\u672C\u5904\u7406\u5DE5\u5177\n- \u7F51\u7EDC\u5DE5\u5177\n- \u56FE\u50CF\u5904\u7406\u5DE5\u5177\n- \u5F00\u53D1\u8F85\u52A9\u5DE5\u5177\n\n\u6240\u6709\u5DE5\u5177\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u4E2D\u672C\u5730\u8FD0\u884C\uFF0C\u6570\u636E\u4E0D\u4F1A\u4F20\u8F93\u5230\u6211\u4EEC\u7684\u670D\u52A1\u5668\u3002\n\n## \u4F7F\u7528\u8BB8\u53EF\n\n\u6211\u4EEC\u6388\u4E88\u60A8\u6709\u9650\u7684\u3001\u975E\u72EC\u5360\u7684\u3001\u4E0D\u53EF\u8F6C\u8BA9\u7684\u8BB8\u53EF\uFF0C\u7528\u4E8E\u8BBF\u95EE\u548C\u4F7F\u7528\u6211\u4EEC\u7684\u670D\u52A1\uFF0C\u524D\u63D0\u662F\u60A8\u9075\u5B88\u8FD9\u4E9B\u670D\u52A1\u6761\u6B3E\u3002\n\n\u60A8\u4E0D\u5F97\uFF1A\n\n1. \u590D\u5236\u3001\u4FEE\u6539\u3001\u5206\u53D1\u6216\u521B\u5EFA\u670D\u52A1\u7684\u884D\u751F\u4F5C\u54C1\n2. \u9006\u5411\u5DE5\u7A0B\u3001\u53CD\u7F16\u8BD1\u6216\u5C1D\u8BD5\u83B7\u53D6\u670D\u52A1\u7684\u6E90\u4EE3\u7801\n3. \u4F7F\u7528\u81EA\u52A8\u5316\u5DE5\u5177\u8BBF\u95EE\u670D\u52A1\n4. \u5E72\u6270\u6216\u7834\u574F\u670D\u52A1\u7684\u6B63\u5E38\u8FD0\u884C\n\n## \u7528\u6237\u8D23\u4EFB\n\n\u4F7F\u7528\u6211\u4EEC\u7684\u670D\u52A1\u65F6\uFF0C\u60A8\u540C\u610F\uFF1A\n\n1. \u4E0D\u5F97\u5C06\u670D\u52A1\u7528\u4E8E\u4EFB\u4F55\u975E\u6CD5\u76EE\u7684\n2. \u4E0D\u5F97\u4FB5\u72AF\u4ED6\u4EBA\u7684\u77E5\u8BC6\u4EA7\u6743\u6216\u5176\u4ED6\u6743\u5229\n3. \u4E0D\u5F97\u4F20\u64AD\u6076\u610F\u8F6F\u4EF6\u6216\u75C5\u6BD2\n4. \u4E0D\u5F97\u5C1D\u8BD5\u7ED5\u8FC7\u670D\u52A1\u7684\u5B89\u5168\u63AA\u65BD\n\n## \u77E5\u8BC6\u4EA7\u6743\n\n\u670D\u52A1\u4E2D\u5305\u542B\u7684\u6240\u6709\u5185\u5BB9\u548C\u6750\u6599\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u6587\u672C\u3001\u56FE\u5F62\u3001\u6807\u8BC6\u3001\u8F6F\u4EF6\uFF09\u5747\u4E3A Util.cn \u6216\u5176\u8BB8\u53EF\u65B9\u7684\u8D22\u4EA7\uFF0C\u53D7\u7248\u6743\u548C\u5176\u4ED6\u77E5\u8BC6\u4EA7\u6743\u6CD5\u4FDD\u62A4\u3002\n\n## \u514D\u8D23\u58F0\u660E\n\n\u670D\u52A1\u6309"\u73B0\u72B6"\u63D0\u4F9B\uFF0C\u4E0D\u9644\u5E26\u4EFB\u4F55\u5F62\u5F0F\u7684\u660E\u793A\u6216\u6697\u793A\u4FDD\u8BC1\u3002\n\n\u6211\u4EEC\u4E0D\u4FDD\u8BC1\uFF1A\n\n1. \u670D\u52A1\u5C06\u6EE1\u8DB3\u60A8\u7684\u6240\u6709\u9700\u6C42\n2. \u670D\u52A1\u5C06\u4E0D\u95F4\u65AD\u3001\u53CA\u65F6\u3001\u5B89\u5168\u6216\u65E0\u9519\u8BEF\n3. \u901A\u8FC7\u670D\u52A1\u83B7\u5F97\u7684\u7ED3\u679C\u5C06\u662F\u51C6\u786E\u6216\u53EF\u9760\u7684\n\n## \u8D23\u4EFB\u9650\u5236\n\n\u5728\u6CD5\u5F8B\u5141\u8BB8\u7684\u6700\u5927\u8303\u56F4\u5185\uFF0CUtil.cn \u53CA\u5176\u5173\u8054\u516C\u53F8\u4E0D\u5BF9\u4EFB\u4F55\u95F4\u63A5\u3001\u9644\u5E26\u3001\u7279\u6B8A\u6216\u540E\u679C\u6027\u635F\u5BB3\u627F\u62C5\u8D23\u4EFB\u3002\n\n## \u7B2C\u4E09\u65B9\u94FE\u63A5\n\n\u6211\u4EEC\u7684\u670D\u52A1\u53EF\u80FD\u5305\u542B\u6307\u5411\u7B2C\u4E09\u65B9\u7F51\u7AD9\u7684\u94FE\u63A5\u3002\u8FD9\u4E9B\u94FE\u63A5\u4EC5\u4E3A\u65B9\u4FBF\u8D77\u89C1\u63D0\u4F9B\uFF0C\u4E0D\u6784\u6210\u6211\u4EEC\u5BF9\u8FD9\u4E9B\u7F51\u7AD9\u7684\u8BA4\u53EF\u3002\u6211\u4EEC\u4E0D\u5BF9\u8FD9\u4E9B\u7F51\u7AD9\u7684\u5185\u5BB9\u6216\u9690\u79C1\u5B9E\u8DF5\u8D1F\u8D23\u3002\n\n## \u7EC8\u6B62\n\n\u6211\u4EEC\u53EF\u4EE5\u968F\u65F6\u7EC8\u6B62\u6216\u6682\u505C\u60A8\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u6055\u4E0D\u53E6\u884C\u901A\u77E5\uFF0C\u539F\u56E0\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u8FDD\u53CD\u8FD9\u4E9B\u6761\u6B3E\u3002\n\n## \u6CD5\u5F8B\u9002\u7528\n\n\u8FD9\u4E9B\u6761\u6B3E\u53D7\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6CD5\u5F8B\u7BA1\u8F96\uFF0C\u4E0D\u8003\u8651\u6CD5\u5F8B\u51B2\u7A81\u539F\u5219\u3002\n\n## \u8054\u7CFB\u6211\u4EEC\n\n\u5982\u679C\u60A8\u5BF9\u8FD9\u4E9B\u670D\u52A1\u6761\u6B3E\u6709\u4EFB\u4F55\u7591\u95EE\uFF0C\u8BF7\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8054\u7CFB\u6211\u4EEC\uFF1A\n\n- \u90AE\u7BB1\uFF1Askyin.lewis@gmail.com';
const _sfc_main = {
  __name: "terms",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("\u670D\u52A1\u6761\u6B3E");
    const pageContent = ref(termsContent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=terms-BNntIfGR.mjs.map
