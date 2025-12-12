import { computed, mergeProps, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { marked } from 'file:///Users/apple/Documents/code/util/node_modules/marked/lib/marked.esm.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "MarkdownRenderer",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    marked.setOptions({
      gfm: true,
      breaks: true,
      smartypants: true
    });
    const renderedMarkdown = computed(() => {
      return marked(props.content);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-content prose prose-gray dark:prose-invert max-w-none" }, _attrs))} data-v-076b5f93>${(_a = renderedMarkdown.value) != null ? _a : ""}</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MarkdownRenderer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MarkdownRenderer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-076b5f93"]]);

export { MarkdownRenderer as M };
//# sourceMappingURL=MarkdownRenderer-BnvxWTyi.mjs.map
