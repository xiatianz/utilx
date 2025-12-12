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
const termsContent = '# 服务条款\n\n最后更新时间：2025年1月1日\n\n## 接受条款\n\n欢迎您使用 Util.cn 提供的服务。请仔细阅读以下服务条款。\n\n通过访问或使用我们的服务，您同意受这些条款的约束。如果您不同意这些条款，请不要使用我们的服务。\n\n## 服务描述\n\nUtil.cn 是一个在线工具平台，提供各种开发者工具，包括但不限于：\n\n- 数据格式化工具（JSON、XML等）\n- 编码解码工具（Base64、URL编码等）\n- 加密安全工具（MD5、SHA等）\n- 时间日期工具\n- 文本处理工具\n- 网络工具\n- 图像处理工具\n- 开发辅助工具\n\n所有工具都在您的浏览器中本地运行，数据不会传输到我们的服务器。\n\n## 使用许可\n\n我们授予您有限的、非独占的、不可转让的许可，用于访问和使用我们的服务，前提是您遵守这些服务条款。\n\n您不得：\n\n1. 复制、修改、分发或创建服务的衍生作品\n2. 逆向工程、反编译或尝试获取服务的源代码\n3. 使用自动化工具访问服务\n4. 干扰或破坏服务的正常运行\n\n## 用户责任\n\n使用我们的服务时，您同意：\n\n1. 不得将服务用于任何非法目的\n2. 不得侵犯他人的知识产权或其他权利\n3. 不得传播恶意软件或病毒\n4. 不得尝试绕过服务的安全措施\n\n## 知识产权\n\n服务中包含的所有内容和材料（包括但不限于文本、图形、标识、软件）均为 Util.cn 或其许可方的财产，受版权和其他知识产权法保护。\n\n## 免责声明\n\n服务按"现状"提供，不附带任何形式的明示或暗示保证。\n\n我们不保证：\n\n1. 服务将满足您的所有需求\n2. 服务将不间断、及时、安全或无错误\n3. 通过服务获得的结果将是准确或可靠的\n\n## 责任限制\n\n在法律允许的最大范围内，Util.cn 及其关联公司不对任何间接、附带、特殊或后果性损害承担责任。\n\n## 第三方链接\n\n我们的服务可能包含指向第三方网站的链接。这些链接仅为方便起见提供，不构成我们对这些网站的认可。我们不对这些网站的内容或隐私实践负责。\n\n## 终止\n\n我们可以随时终止或暂停您的访问权限，恕不另行通知，原因包括但不限于违反这些条款。\n\n## 法律适用\n\n这些条款受中华人民共和国法律管辖，不考虑法律冲突原则。\n\n## 联系我们\n\n如果您对这些服务条款有任何疑问，请通过以下方式联系我们：\n\n- 邮箱：skyin.lewis@gmail.com';
const _sfc_main = {
  __name: "terms",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("服务条款");
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
export {
  _sfc_main as default
};
//# sourceMappingURL=terms-BNntIfGR.js.map
