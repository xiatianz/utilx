import { computed, defineAsyncComponent, unref, createVNode, resolveDynamicComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderVNode, ssrRenderAttrs } from "vue/server-renderer";
import { j as useRoute } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "[category]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const category = route.params.category;
    const categoryMap = {
      "ai": () => import("./index-Bf1HToVO.js"),
      "all": () => import("./index-C95kxmjh.js"),
      "crypto": () => import("./index-C3b8E656.js"),
      "dev": () => import("./index-CJTrgKGg.js"),
      "encode": () => import("./index-bADbxXA6.js"),
      "format": () => import("./index-BI445R_9.js"),
      "image": () => import("./index-DXuyomnG.js"),
      "network": () => import("./index-D-95Lsiw.js"),
      "text": () => import("./index-ChjOo3oA.js"),
      "time": () => import("./index-D4AGhxj4.js")
    };
    const categoryComponent = computed(() => {
      if (categoryMap[category]) {
        return defineAsyncComponent(categoryMap[category]);
      }
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(categoryComponent)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(categoryComponent)), _attrs, null), _parent);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center min-h-screen" }, _attrs))}><div class="text-center"><h1 class="text-2xl font-bold text-destructive mb-4">分类不存在</h1><p class="text-muted-foreground">该分类页面不存在，请检查链接是否正确</p></div></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[category].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_category_-jiGbdskT.js.map
