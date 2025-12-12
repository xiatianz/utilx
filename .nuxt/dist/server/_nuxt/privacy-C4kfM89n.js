import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MarkdownRenderer } from "./MarkdownRenderer-BnvxWTyi.js";
import { u as useSEO } from "./useSEO-DTxZRwJC.js";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "marked";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const privacyContent = '# 隐私政策\n\n最后更新时间：2025年1月1日\n\n## 我们收集什么信息？\n\nUtil.cn 是一个基于浏览器的工具平台，所有计算都在您的本地设备上进行。我们不会收集、存储或传输您的个人数据。\n\n具体来说：\n\n### 1. 不收集个人身份信息\n我们不会要求您提供姓名、邮箱地址、电话号码等个人身份信息。\n\n### 2. 不收集使用数据\n我们不会跟踪您的使用习惯、访问记录或工具使用情况。\n\n### 3. 不使用 Cookie 存储个人信息\n我们可能会使用必要的 Cookie 来维持网站的基本功能，但这些 Cookie 不会存储任何个人身份信息。\n\n### 4. 不收集工具输入数据\n当您使用我们的工具时，输入的数据完全在您的浏览器中处理，我们无法访问这些数据。\n\n## 我们如何使用信息？\n\n由于我们不收集任何个人信息，因此不存在使用这些信息的情况。\n\n## 数据安全\n\n您的数据安全对我们至关重要：\n\n- 所有数据处理都在您的本地浏览器中进行\n- 数据不会发送到任何服务器\n- 我们采用行业标准的安全措施保护网站免受恶意攻击\n\n## 第三方服务\n\n我们的网站可能包含以下第三方服务：\n\n### Google Analytics\n我们使用 Google Analytics 来了解网站访问情况。Google Analytics 使用 Cookie 收集匿名访问数据，这些数据不包含个人身份信息。\n\n您可以通过安装 [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout) 来禁用 Google Analytics。\n\n### 广告网络\n我们不使用任何第三方广告网络。\n\n## 儿童隐私\n\n我们的服务不面向13岁以下的儿童。我们不会故意收集儿童的个人信息。\n\n## 隐私政策变更\n\n我们可能会不时更新我们的隐私政策。我们会在本页面发布任何变更，并更新"最后更新时间"。\n\n## 联系我们\n\n如果您对本隐私政策有任何疑问，请通过以下方式联系我们：\n\n- 邮箱：skyin.lewis@gmail.com';
const _sfc_main = {
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("隐私政策");
    const pageContent = ref(privacyContent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=privacy-C4kfM89n.js.map
