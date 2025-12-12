import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { marked } from "marked";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-content prose prose-gray dark:prose-invert max-w-none" }, _attrs))} data-v-076b5f93>${renderedMarkdown.value ?? ""}</div>`);
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
export {
  MarkdownRenderer as M
};
//# sourceMappingURL=MarkdownRenderer-BnvxWTyi.js.map
