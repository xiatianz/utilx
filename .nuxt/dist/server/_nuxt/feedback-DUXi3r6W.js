import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MarkdownRenderer } from "./MarkdownRenderer-BnvxWTyi.js";
import { u as useSEO } from "./useSEO-DTxZRwJC.js";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta } from "../server.mjs";
import "marked";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const feedbackContent = '# 提交反馈\n\n我们非常重视您的意见和建议！您的反馈是我们不断改进的动力。\n\n## 如何反馈\n\n您可以通过以下任何方式联系我们：\n\n### 📧 邮箱\n- **主邮箱**：skyin.lewis@gmail.com\n- **商务合作**：skyin.lewis@gmail.com\n- **技术支持**：skyin.lewis@gmail.com\n\n### 💬 社交媒体\n- **QQ**：17898708\n- **Telegram**：[@util_cn](https://t.me/kxlin)\n- **Wechat**：kxlin0101\n\n### 🐛 问题反馈\n如果您发现了 Bug 或有功能建议，请通过以下方式提交：\n\n1. **GitHub Issues**：[提交 Issue](https://github.com/dmdq/utilx/issues)\n   - 最推荐的方式，可以追踪处理进度\n   - 请详细描述问题或建议，包含复现步骤\n\n2. **邮箱反馈**：skyin.lewis@gmail.com\n   - 请在邮件中注明"问题反馈"或"功能建议"\n   - 包含您的操作系统和浏览器版本\n\n### 💡 功能建议\n我们欢迎任何功能建议！如果您有好的想法：\n\n- 描述您希望的功能\n- 说明使用场景\n- 如有参考，请提供相关链接\n\n## 社区交流\n\n加入我们的社区，与其他用户交流使用心得：\n\n- **开发者群**：分享技术交流\n- **用户交流群**：分享使用技巧\n- **更新通知群**：获取最新功能更新\n\n## 常见问题\n\n在反馈前，您可以先查看我们的 [FAQ](/faq) 页面，可能已经有您问题的答案。\n\n## 感谢\n\n感谢您使用 Util.cn，您的每一个反馈都对我们至关重要！\n\n*最后更新时间：2025年12月10日*';
const _sfc_main = {
  __name: "feedback",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("提交反馈");
    useSeoMeta({
      title: "提交反馈",
      description: "向Util提交问题反馈、功能建议或商务合作。我们重视每一个用户的反馈，致力于提供更好的在线工具服务。",
      keywords: ["反馈", "建议", "问题反馈", "联系我们", "商务合作"]
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
export {
  _sfc_main as default
};
//# sourceMappingURL=feedback-DUXi3r6W.js.map
