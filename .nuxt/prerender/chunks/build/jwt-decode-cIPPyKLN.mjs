import { ref, computed, mergeProps, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { t as tools } from './tools-CG9LGULA.mjs';
import { e as addRecentTool, f as useSeoMeta, n as navigateTo } from './server.mjs';
import { _ as _sfc_main$1 } from './ToolCard-GG_LcR18.mjs';
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
import './nuxt-link-Bb2DNygF.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import './categoryColors-w89ks1yN.mjs';

const _sfc_main = {
  __name: "jwt-decode",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const jwtToken = ref("");
    const parsedJWT = ref({ header: null, payload: null });
    const expirationStatus = ref(null);
    ref(null);
    const copyButtonText = ref("\u590D\u5236");
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "jwt-decode"
      ).slice(0, 4);
    });
    const formatViewCount = (count) => {
      if (count >= 1e4) {
        return `${(count / 1e4).toFixed(1)}w+`;
      } else if (count >= 1e3) {
        return `${(count / 1e3).toFixed(1)}k+`;
      }
      return `${count}`;
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("jwt-decode");
    useSeoMeta({
      title: "JWT\u89E3\u7801\u5668 - \u5728\u7EBFJWT Token\u89E3\u6790\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFJWT\u89E3\u7801\u5DE5\u5177\uFF0C\u5FEB\u901F\u89E3\u6790JWT Token\u7684Header\u548CPayload\uFF0C\u9A8C\u8BC1\u8FC7\u671F\u65F6\u95F4\u3002",
      keywords: ["JWT", "JSON Web Token", "\u89E3\u7801", "\u89E3\u6790", "Token", "\u8BA4\u8BC1"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">JWT\u89E3\u7801\u5668</h1><p class="text-muted-foreground max-w-3xl">JWT\uFF08JSON Web Token\uFF09\u5728\u7EBF\u89E3\u7801\u548C\u9A8C\u8BC1\u5DE5\u5177\uFF0C\u89E3\u7801Header\u548CPayload\uFF0C\u9A8C\u8BC1\u8FC7\u671F\u65F6\u95F4\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">JWT Token</label><div class="flex items-center gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><textarea placeholder="\u8BF7\u8F93\u5165JWT Token..." class="w-full h-48 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(jwtToken.value)}</textarea><div class="text-sm text-muted-foreground"> Token\u957F\u5EA6\uFF1A${ssrInterpolate(jwtToken.value.length)}</div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="text-lg font-semibold">\u89E3\u7801\u7ED3\u679C</label><div class="flex items-center gap-2"><button${ssrIncludeBooleanAttr(!parsedJWT.value.header) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors disabled:opacity-50">${ssrInterpolate(copyButtonText.value)}</button></div></div><div class="h-48 border border-border rounded-lg bg-muted/50 overflow-auto">`);
      if (parsedJWT.value.header) {
        _push(`<pre class="p-4 text-sm">${ssrInterpolate(JSON.stringify(parsedJWT.value, null, 2))}</pre>`);
      } else {
        _push(`<div class="flex items-center justify-center h-full text-muted-foreground"> \u89E3\u7801\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC... </div>`);
      }
      _push(`</div></div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!jwtToken.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u89E3\u7801JWT </button><button${ssrIncludeBooleanAttr(!parsedJWT.value.header) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50"> \u9A8C\u8BC1\u7B7E\u540D </button></div>`);
      if (parsedJWT.value.header) {
        _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u89E3\u6790\u7ED3\u679C</h3><div class="space-y-6"><div><h4 class="font-medium text-primary mb-2">Header</h4><div class="bg-muted/50 rounded-lg p-4 text-sm space-y-2"><div><span class="font-medium">\u7B97\u6CD5 (alg):</span><span class="ml-2 text-primary">${ssrInterpolate(parsedJWT.value.header.alg || "N/A")}</span></div><div><span class="font-medium">\u7C7B\u578B (typ):</span><span class="ml-2 text-primary">${ssrInterpolate(parsedJWT.value.header.typ || "N/A")}</span></div></div></div><div><h4 class="font-medium text-primary mb-2">Payload</h4><div class="bg-muted/50 rounded-lg p-4 text-sm space-y-2">`);
        if (parsedJWT.value.payload.iss) {
          _push(`<div><span class="font-medium">\u7B7E\u53D1\u8005 (iss):</span><span class="ml-2">${ssrInterpolate(parsedJWT.value.payload.iss)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (parsedJWT.value.payload.sub) {
          _push(`<div><span class="font-medium">\u4E3B\u9898 (sub):</span><span class="ml-2">${ssrInterpolate(parsedJWT.value.payload.sub)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (parsedJWT.value.payload.aud) {
          _push(`<div><span class="font-medium">\u63A5\u6536\u65B9 (aud):</span><span class="ml-2">${ssrInterpolate(parsedJWT.value.payload.aud)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (parsedJWT.value.payload.exp) {
          _push(`<div><span class="font-medium">\u8FC7\u671F\u65F6\u95F4 (exp):</span><span class="ml-2">${ssrInterpolate(new Date(parsedJWT.value.payload.exp * 1e3).toLocaleString())}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (parsedJWT.value.payload.nbf) {
          _push(`<div><span class="font-medium">\u751F\u6548\u65F6\u95F4 (nbf):</span><span class="ml-2">${ssrInterpolate(new Date(parsedJWT.value.payload.nbf * 1e3).toLocaleString())}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (parsedJWT.value.payload.iat) {
          _push(`<div><span class="font-medium">\u7B7E\u53D1\u65F6\u95F4 (iat):</span><span class="ml-2">${ssrInterpolate(new Date(parsedJWT.value.payload.iat * 1e3).toLocaleString())}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (parsedJWT.value.payload.jti) {
          _push(`<div><span class="font-medium">JWT ID (jti):</span><span class="ml-2">${ssrInterpolate(parsedJWT.value.payload.jti)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (expirationStatus.value) {
          _push(`<div><h4 class="font-medium text-primary mb-2">\u8FC7\u671F\u72B6\u6001</h4><div class="${ssrRenderClass([expirationStatus.value.expired ? "text-red-600" : "text-green-600", "flex items-center gap-3"])}">`);
          if (expirationStatus.value.expired) {
            _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
          } else {
            _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
          }
          _push(`<div><div class="font-medium">${ssrInterpolate(expirationStatus.value.expired ? "\u5DF2\u8FC7\u671F" : "\u6709\u6548")}</div><div class="text-sm">${ssrInterpolate(expirationStatus.value.message)}</div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u5173\u4E8EJWT</h3><div class="space-y-4"><div><h4 class="font-medium text-primary mb-2">\u4EC0\u4E48\u662FJWT\uFF1F</h4><p class="text-sm text-muted-foreground"> JWT\uFF08JSON Web Token\uFF09\u662F\u4E00\u79CD\u5F00\u653E\u6807\u51C6\uFF08RFC 7519\uFF09\uFF0C\u7528\u4E8E\u5728\u5404\u65B9\u4E4B\u95F4\u5B89\u5168\u5730\u4F20\u8F93\u4FE1\u606F\u4F5C\u4E3AJSON\u5BF9\u8C61\u3002 \u5B83\u53EF\u4EE5\u88AB\u9A8C\u8BC1\u548C\u4FE1\u4EFB\uFF0C\u56E0\u4E3A\u5B83\u662F\u6570\u5B57\u7B7E\u540D\u7684\u3002 </p></div><div><h4 class="font-medium text-primary mb-2">JWT\u7ED3\u6784</h4><div class="bg-muted/50 rounded-lg p-4 font-mono text-sm"><div class="mb-2">Header.Payload.Signature</div><div class="text-xs text-muted-foreground"> \u4F8B\u5982\uFF1AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c </div></div></div><div><h4 class="font-medium text-primary mb-2">\u5E38\u89C1\u7528\u9014</h4><ul class="text-sm space-y-1"><li>\u2022 \u8EAB\u4EFD\u8BA4\u8BC1\uFF1A\u7528\u6237\u767B\u5F55\u540E\uFF0C\u540E\u7EED\u8BF7\u6C42\u643A\u5E26JWT\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1</li><li>\u2022 \u4FE1\u606F\u4EA4\u6362\uFF1A\u5B89\u5168\u5730\u5728\u5404\u65B9\u4E4B\u95F4\u4F20\u9012\u4FE1\u606F</li><li>\u2022 \u6388\u6743\uFF1A\u4F20\u9012\u7528\u6237\u7684\u6743\u9650\u4FE1\u606F</li><li>\u2022 API\u5B89\u5168\uFF1A\u4FDD\u62A4API\u7AEF\u70B9\u514D\u53D7\u672A\u6388\u6743\u8BBF\u95EE</li></ul></div><div><h4 class="font-medium text-primary mb-2">\u5B89\u5168\u6CE8\u610F\u4E8B\u9879</h4><ul class="text-sm space-y-1 text-amber-600"><li>\u2022 \u654F\u611F\u6570\u636E\u4E0D\u8981\u653E\u5728Payload\u4E2D\uFF08\u9664\u975E\u52A0\u5BC6\uFF09</li><li>\u2022 \u4F7F\u7528\u5F3A\u5BC6\u94A5\uFF08\u81F3\u5C11256\u4F4D\uFF09</li><li>\u2022 \u8BBE\u7F6E\u5408\u7406\u7684\u8FC7\u671F\u65F6\u95F4</li><li>\u2022 \u5728HTTPS\u73AF\u5883\u4E0B\u4F20\u8F93</li><li>\u2022 \u5B9A\u671F\u8F6E\u6362\u7B7E\u540D\u5BC6\u94A5</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (tool) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: tool.id,
          tool,
          title: tool.name,
          description: tool.description,
          category: tool.category,
          "usage-count": formatViewCount(tool.viewCount),
          icon: tool.icon,
          onSelect: handleToolSelect
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/jwt-decode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=jwt-decode-cIPPyKLN.mjs.map
