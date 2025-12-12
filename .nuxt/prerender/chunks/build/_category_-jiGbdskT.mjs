import { computed, defineAsyncComponent, unref, createVNode, resolveDynamicComponent, mergeProps, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderVNode, ssrRenderAttrs } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { j as useRoute } from './server.mjs';
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
