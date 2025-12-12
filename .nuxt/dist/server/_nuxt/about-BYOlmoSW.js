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
const aboutContent = "# 关于我们\n\n欢迎来到 Util.cn —— 开发者的一站式工具平台。\n\n## 我们的使命\n\n我们的使命是为开发者提供高效、便捷、安全的在线工具，帮助开发者节省时间，提高工作效率。我们相信，优秀的工具应该是简单易用、功能强大且安全可靠的。\n\n## 为什么选择 Util.cn？\n\n### 🔒 数据安全第一\n所有工具都在您的浏览器中本地运行，您的数据永远不会传输到任何服务器。您可以放心使用我们的工具处理敏感信息。\n\n### ⚡ 极速响应\n由于所有计算都在本地进行，我们的工具响应速度极快，无需等待服务器响应。\n\n### 🎯 专注开发者需求\n我们深入了解开发者的工作流程和痛点，持续优化工具体验，让每个工具都能真正解决问题。\n\n### 🌐 完全免费\n我们致力于提供高质量的免费工具，让每个开发者都能享受到专业级的工具服务。\n\n## 我们的故事\n\nUtil.cn 诞生于一群热爱编程的开发者之手。在日常工作中，我们经常需要使用各种在线工具来处理JSON、格式化代码、转换时间戳等任务。然而，现有的工具要么广告过多，要么数据安全性存疑，要么功能不够完善。\n\n于是我们决定自己打造一个理想的工具平台——一个无广告、纯本地计算、即开即用的在线工具集合。经过数月的努力，Util.cn 终于上线了。\n\n## 团队介绍\n\n我们的团队由来自不同背景的开发者组成，包括前端工程师、后端工程师、UI/UX设计师和产品经理。虽然我们分布在世界各地，但我们有着共同的目标：让开发工作变得更简单、更高效。\n\n## 联系我们\n\n如果您有任何建议、反馈或合作意向，欢迎随时联系我们：\n\n- 邮箱：skyin.lewis@gmail.com\n- GitHub：[github.com/dmdq/utilx](https://github.com/dmdq/utilx)\n\n感谢您选择 Util.cn！";
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("关于我们");
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
export {
  _sfc_main as default
};
//# sourceMappingURL=about-BYOlmoSW.js.map
