import { ref, mergeProps, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { M as MarkdownRenderer } from './MarkdownRenderer-BnvxWTyi.mjs';
import { u as useSEO } from './useSEO-DTxZRwJC.mjs';
import { f as useSeoMeta } from './server.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/marked/lib/marked.esm.js';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const feedbackContent = '# \u63D0\u4EA4\u53CD\u9988\n\n\u6211\u4EEC\u975E\u5E38\u91CD\u89C6\u60A8\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF01\u60A8\u7684\u53CD\u9988\u662F\u6211\u4EEC\u4E0D\u65AD\u6539\u8FDB\u7684\u52A8\u529B\u3002\n\n## \u5982\u4F55\u53CD\u9988\n\n\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4EFB\u4F55\u65B9\u5F0F\u8054\u7CFB\u6211\u4EEC\uFF1A\n\n### \u{1F4E7} \u90AE\u7BB1\n- **\u4E3B\u90AE\u7BB1**\uFF1Askyin.lewis@gmail.com\n- **\u5546\u52A1\u5408\u4F5C**\uFF1Askyin.lewis@gmail.com\n- **\u6280\u672F\u652F\u6301**\uFF1Askyin.lewis@gmail.com\n\n### \u{1F4AC} \u793E\u4EA4\u5A92\u4F53\n- **QQ**\uFF1A17898708\n- **Telegram**\uFF1A[@util_cn](https://t.me/kxlin)\n- **Wechat**\uFF1Akxlin0101\n\n### \u{1F41B} \u95EE\u9898\u53CD\u9988\n\u5982\u679C\u60A8\u53D1\u73B0\u4E86 Bug \u6216\u6709\u529F\u80FD\u5EFA\u8BAE\uFF0C\u8BF7\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u63D0\u4EA4\uFF1A\n\n1. **GitHub Issues**\uFF1A[\u63D0\u4EA4 Issue](https://github.com/dmdq/utilx/issues)\n   - \u6700\u63A8\u8350\u7684\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u8FFD\u8E2A\u5904\u7406\u8FDB\u5EA6\n   - \u8BF7\u8BE6\u7EC6\u63CF\u8FF0\u95EE\u9898\u6216\u5EFA\u8BAE\uFF0C\u5305\u542B\u590D\u73B0\u6B65\u9AA4\n\n2. **\u90AE\u7BB1\u53CD\u9988**\uFF1Askyin.lewis@gmail.com\n   - \u8BF7\u5728\u90AE\u4EF6\u4E2D\u6CE8\u660E"\u95EE\u9898\u53CD\u9988"\u6216"\u529F\u80FD\u5EFA\u8BAE"\n   - \u5305\u542B\u60A8\u7684\u64CD\u4F5C\u7CFB\u7EDF\u548C\u6D4F\u89C8\u5668\u7248\u672C\n\n### \u{1F4A1} \u529F\u80FD\u5EFA\u8BAE\n\u6211\u4EEC\u6B22\u8FCE\u4EFB\u4F55\u529F\u80FD\u5EFA\u8BAE\uFF01\u5982\u679C\u60A8\u6709\u597D\u7684\u60F3\u6CD5\uFF1A\n\n- \u63CF\u8FF0\u60A8\u5E0C\u671B\u7684\u529F\u80FD\n- \u8BF4\u660E\u4F7F\u7528\u573A\u666F\n- \u5982\u6709\u53C2\u8003\uFF0C\u8BF7\u63D0\u4F9B\u76F8\u5173\u94FE\u63A5\n\n## \u793E\u533A\u4EA4\u6D41\n\n\u52A0\u5165\u6211\u4EEC\u7684\u793E\u533A\uFF0C\u4E0E\u5176\u4ED6\u7528\u6237\u4EA4\u6D41\u4F7F\u7528\u5FC3\u5F97\uFF1A\n\n- **\u5F00\u53D1\u8005\u7FA4**\uFF1A\u5206\u4EAB\u6280\u672F\u4EA4\u6D41\n- **\u7528\u6237\u4EA4\u6D41\u7FA4**\uFF1A\u5206\u4EAB\u4F7F\u7528\u6280\u5DE7\n- **\u66F4\u65B0\u901A\u77E5\u7FA4**\uFF1A\u83B7\u53D6\u6700\u65B0\u529F\u80FD\u66F4\u65B0\n\n## \u5E38\u89C1\u95EE\u9898\n\n\u5728\u53CD\u9988\u524D\uFF0C\u60A8\u53EF\u4EE5\u5148\u67E5\u770B\u6211\u4EEC\u7684 [FAQ](/faq) \u9875\u9762\uFF0C\u53EF\u80FD\u5DF2\u7ECF\u6709\u60A8\u95EE\u9898\u7684\u7B54\u6848\u3002\n\n## \u611F\u8C22\n\n\u611F\u8C22\u60A8\u4F7F\u7528 Util.cn\uFF0C\u60A8\u7684\u6BCF\u4E00\u4E2A\u53CD\u9988\u90FD\u5BF9\u6211\u4EEC\u81F3\u5173\u91CD\u8981\uFF01\n\n*\u6700\u540E\u66F4\u65B0\u65F6\u95F4\uFF1A2025\u5E7412\u670810\u65E5*';
const _sfc_main = {
  __name: "feedback",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("\u63D0\u4EA4\u53CD\u9988");
    useSeoMeta({
      title: "\u63D0\u4EA4\u53CD\u9988",
      description: "\u5411Util\u63D0\u4EA4\u95EE\u9898\u53CD\u9988\u3001\u529F\u80FD\u5EFA\u8BAE\u6216\u5546\u52A1\u5408\u4F5C\u3002\u6211\u4EEC\u91CD\u89C6\u6BCF\u4E00\u4E2A\u7528\u6237\u7684\u53CD\u9988\uFF0C\u81F4\u529B\u4E8E\u63D0\u4F9B\u66F4\u597D\u7684\u5728\u7EBF\u5DE5\u5177\u670D\u52A1\u3002",
      keywords: ["\u53CD\u9988", "\u5EFA\u8BAE", "\u95EE\u9898\u53CD\u9988", "\u8054\u7CFB\u6211\u4EEC", "\u5546\u52A1\u5408\u4F5C"]
    });
    const pageContent = ref(feedbackContent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/feedback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=feedback-DUXi3r6W.mjs.map
