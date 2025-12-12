import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { M as MarkdownRenderer } from './MarkdownRenderer-BnvxWTyi.mjs';
import { u as useSEO } from './useSEO-DTxZRwJC.mjs';
import 'marked';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const cookieContent = '# Cookie \u653F\u7B56\n\n\u6700\u540E\u66F4\u65B0\u65F6\u95F4\uFF1A2025\u5E741\u67081\u65E5\n\n## \u4EC0\u4E48\u662F Cookie\uFF1F\n\nCookie \u662F\u5C0F\u578B\u6587\u672C\u6587\u4EF6\uFF0C\u7F51\u7AD9\u4F1A\u5C06\u5176\u5B58\u50A8\u5728\u60A8\u7684\u8BA1\u7B97\u673A\u6216\u79FB\u52A8\u8BBE\u5907\u4E0A\u3002\u5F53\u60A8\u518D\u6B21\u8BBF\u95EE\u8BE5\u7F51\u7AD9\u65F6\uFF0CCookie \u4F1A\u901A\u77E5\u7F51\u7AD9\u60A8\u4E4B\u524D\u7684\u8BBF\u95EE\u60C5\u51B5\u3002\n\n## \u6211\u4EEC\u4F7F\u7528\u54EA\u4E9B Cookie\uFF1F\n\n### \u5FC5\u9700 Cookie\n\u8FD9\u4E9B Cookie \u5BF9\u4E8E\u7F51\u7AD9\u7684\u57FA\u672C\u529F\u80FD\u81F3\u5173\u91CD\u8981\uFF0C\u65E0\u6CD5\u7981\u7528\u3002\n\n- **\u4E3B\u9898\u504F\u597D\u8BBE\u7F6E**\uFF1A\u5B58\u50A8\u60A8\u7684\u4E3B\u9898\u9009\u62E9\uFF08\u6D45\u8272/\u6DF1\u8272\u6A21\u5F0F\uFF09\n- **\u4FA7\u8FB9\u680F\u72B6\u6001**\uFF1A\u5B58\u50A8\u4FA7\u8FB9\u680F\u7684\u5C55\u5F00/\u6536\u7F29\u72B6\u6001\n\n### \u5206\u6790 Cookie\n\u8FD9\u4E9B Cookie \u5E2E\u52A9\u6211\u4EEC\u4E86\u89E3\u7F51\u7AD9\u4F7F\u7528\u60C5\u51B5\uFF0C\u6539\u8FDB\u7528\u6237\u4F53\u9A8C\u3002\n\n- **Google Analytics**\uFF1A\u7528\u4E8E\u5206\u6790\u7F51\u7AD9\u6D41\u91CF\u548C\u7528\u6237\u884C\u4E3A\n\n## Cookie \u7684\u7528\u9014\n\n\u6211\u4EEC\u4F7F\u7528 Cookie \u6765\uFF1A\n\n1. \u8BB0\u4F4F\u60A8\u7684\u504F\u597D\u8BBE\u7F6E\uFF08\u5982\u4E3B\u9898\u3001\u8BED\u8A00\uFF09\n2. \u5206\u6790\u7F51\u7AD9\u4F7F\u7528\u60C5\u51B5\uFF0C\u6539\u8FDB\u670D\u52A1\u8D28\u91CF\n3. \u4E2A\u6027\u5316\u60A8\u7684\u7528\u6237\u4F53\u9A8C\n\n## \u5982\u4F55\u63A7\u5236 Cookie\uFF1F\n\n### \u6D4F\u89C8\u5668\u8BBE\u7F6E\n\u60A8\u53EF\u4EE5\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBE\u7F6E\u7BA1\u7406 Cookie\uFF1A\n\n- **Chrome**\uFF1A\u8BBE\u7F6E > \u9690\u79C1\u8BBE\u7F6E\u548C\u5B89\u5168\u6027 > Cookie \u548C\u5176\u4ED6\u7F51\u7AD9\u6570\u636E\n- **Firefox**\uFF1A\u9009\u9879 > \u9690\u79C1\u4E0E\u5B89\u5168 > Cookie \u548C\u7F51\u7AD9\u6570\u636E\n- **Safari**\uFF1A\u504F\u597D\u8BBE\u7F6E > \u9690\u79C1 > Cookie \u548C\u7F51\u7AD9\u6570\u636E\n- **Edge**\uFF1A\u8BBE\u7F6E > Cookie \u548C\u7F51\u7AD9\u6743\u9650\n\n### \u7981\u7528\u5206\u6790 Cookie\n\u5982\u679C\u60A8\u4E0D\u5E0C\u671B\u88AB Google Analytics \u8DDF\u8E2A\uFF0C\u53EF\u4EE5\u5B89\u88C5 [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout)\u3002\n\n## Cookie \u6709\u6548\u671F\n\n- **\u4E3B\u9898\u504F\u597D\u8BBE\u7F6E**\uFF1A1\u5E74\n- **\u4FA7\u8FB9\u680F\u72B6\u6001**\uFF1A1\u4E2A\u6708\n- **Google Analytics**\uFF1A2\u5E74\n\n## \u653F\u7B56\u66F4\u65B0\n\n\u6211\u4EEC\u53EF\u80FD\u4F1A\u66F4\u65B0\u6B64 Cookie \u653F\u7B56\u3002\u91CD\u5927\u53D8\u66F4\u5C06\u5728\u7F51\u7AD9\u4E0A\u516C\u5E03\uFF0C\u5E76\u66F4\u65B0"\u6700\u540E\u66F4\u65B0\u65F6\u95F4"\u3002\n\n## \u8054\u7CFB\u6211\u4EEC\n\n\u5982\u679C\u60A8\u5BF9\u6B64 Cookie \u653F\u7B56\u6709\u4EFB\u4F55\u7591\u95EE\uFF0C\u8BF7\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8054\u7CFB\u6211\u4EEC\uFF1A\n\n- \u90AE\u7BB1\uFF1Askyin.lewis@gmail.com';
const _sfc_main = {
  __name: "cookie",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("Cookie\u653F\u7B56");
    const pageContent = ref(cookieContent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cookie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cookie-C-cvzHSr.mjs.map
