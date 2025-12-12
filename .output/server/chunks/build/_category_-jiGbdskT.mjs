import { computed, defineAsyncComponent, unref, createVNode, resolveDynamicComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderAttrs } from 'vue/server-renderer';
import { j as useRoute } from './server.mjs';
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

const _sfc_main = {
  __name: "[category]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const category = route.params.category;
    const categoryMap = {
      "ai": () => import('./index-Bf1HToVO.mjs'),
      "all": () => import('./index-C95kxmjh.mjs'),
      "crypto": () => import('./index-C3b8E656.mjs'),
      "dev": () => import('./index-CJTrgKGg.mjs'),
      "encode": () => import('./index-bADbxXA6.mjs'),
      "format": () => import('./index-BI445R_9.mjs'),
      "image": () => import('./index-DXuyomnG.mjs'),
      "network": () => import('./index-D-95Lsiw.mjs'),
      "text": () => import('./index-ChjOo3oA.mjs'),
      "time": () => import('./index-D4AGhxj4.mjs')
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
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center min-h-screen" }, _attrs))}><div class="text-center"><h1 class="text-2xl font-bold text-destructive mb-4">\u5206\u7C7B\u4E0D\u5B58\u5728</h1><p class="text-muted-foreground">\u8BE5\u5206\u7C7B\u9875\u9762\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u94FE\u63A5\u662F\u5426\u6B63\u786E</p></div></div>`);
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

export { _sfc_main as default };
//# sourceMappingURL=_category_-jiGbdskT.mjs.map
