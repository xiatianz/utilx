import { ref, computed, mergeProps, unref, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { t as tools } from './tools-CG9LGULA.mjs';
import { e as addRecentTool, f as useSeoMeta, n as navigateTo } from './server.mjs';
import { _ as _sfc_main$1 } from './ToolCard-GG_LcR18.mjs';
import { Clock, Calendar, AlertCircle } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
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
import './categoryColors-w89ks1yN.mjs';

const _sfc_main = {
  __name: "jwt-verify",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const jwtToken = ref("");
    const verifyMethod = ref("none");
    const secretKey = ref("");
    const publicKey = ref("");
    const clockSkew = ref(60);
    const requiredClaims = ref("");
    const customClaims = ref([]);
    const verifyResult = ref(null);
    const relatedTools = computed(() => {
      return tools.filter(
        (tool) => tool.category === "crypto" && tool.id !== "jwt-verify"
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
    const jwtStructure = computed(() => {
      if (!jwtToken.value) return null;
      const parts = jwtToken.value.split(".");
      return {
        header: parts[0] ? parts[0].substring(0, 20) + "..." : "",
        payload: parts[1] ? parts[1].substring(0, 20) + "..." : "",
        signature: parts[2] ? parts[2].substring(0, 20) + "..." : ""
      };
    });
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("jwt-verify");
    useSeoMeta({
      title: "JWT\u9A8C\u8BC1\u5668 - \u5728\u7EBFJWT Token\u9A8C\u8BC1\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFJWT\u9A8C\u8BC1\u5DE5\u5177\uFF0C\u9A8C\u8BC1JSON Web Token\u7684\u7B7E\u540D\u6709\u6548\u6027\u548C\u65F6\u6548\u6027\uFF0C\u652F\u6301\u591A\u79CD\u7B97\u6CD5\u548C\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219\u3002",
      keywords: ["JWT", "\u9A8C\u8BC1\u5668", "JSON Web Token", "Token\u9A8C\u8BC1", "\u7B7E\u540D\u9A8C\u8BC1", "JWT Verify"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">JWT\u9A8C\u8BC1\u5668</h1><p class="text-muted-foreground max-w-3xl">JSON Web Token\u5728\u7EBF\u9A8C\u8BC1\u5DE5\u5177\uFF0C\u9A8C\u8BC1JWT\u4EE4\u724C\u7684\u7B7E\u540D\u6709\u6548\u6027\u548C\u65F6\u6548\u6027\uFF0C\u652F\u6301\u591A\u79CD\u7B7E\u540D\u7B97\u6CD5\u548C\u81EA\u5B9A\u4E49\u5BC6\u94A5\u9A8C\u8BC1\u3002</p></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">JWT Token</h3><div class="space-y-4"><div class="flex items-center justify-between"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"> \u52A0\u8F7D\u793A\u4F8B </button></div><textarea placeholder="\u8BF7\u8F93\u5165JWT Token\uFF0C\u4F8B\u5982\uFF1AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" class="w-full h-32 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(jwtToken.value)}</textarea>`);
      if (jwtStructure.value) {
        _push(`<div class="text-sm text-muted-foreground"><span>\u7ED3\u6784\uFF1A${ssrInterpolate(jwtStructure.value.header)} . ${ssrInterpolate(jwtStructure.value.payload)} . ${ssrInterpolate(jwtStructure.value.signature)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u9A8C\u8BC1\u8BBE\u7F6E</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u7B7E\u540D\u9A8C\u8BC1\u65B9\u5F0F</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><option value="none"${ssrIncludeBooleanAttr(Array.isArray(verifyMethod.value) ? ssrLooseContain(verifyMethod.value, "none") : ssrLooseEqual(verifyMethod.value, "none")) ? " selected" : ""}>\u4EC5\u89E3\u6790\uFF0C\u4E0D\u9A8C\u8BC1\u7B7E\u540D</option><option value="secret"${ssrIncludeBooleanAttr(Array.isArray(verifyMethod.value) ? ssrLooseContain(verifyMethod.value, "secret") : ssrLooseEqual(verifyMethod.value, "secret")) ? " selected" : ""}>\u4F7F\u7528\u5BC6\u94A5\u9A8C\u8BC1</option><option value="public"${ssrIncludeBooleanAttr(Array.isArray(verifyMethod.value) ? ssrLooseContain(verifyMethod.value, "public") : ssrLooseEqual(verifyMethod.value, "public")) ? " selected" : ""}>\u4F7F\u7528\u516C\u94A5\u9A8C\u8BC1</option></select></div>`);
      if (verifyMethod.value === "secret") {
        _push(`<div><label class="text-sm font-medium mb-2 block">\u5BC6\u94A5\uFF08Secret Key\uFF09</label><input${ssrRenderAttr("value", secretKey.value)} type="password" placeholder="\u8F93\u5165\u7528\u4E8E\u9A8C\u8BC1\u7684\u5BC6\u94A5" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><div class="mt-2 text-xs text-muted-foreground"> HS256/HS384/HS512\u7B97\u6CD5\u4F7F\u7528 </div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (verifyMethod.value === "public") {
        _push(`<div><label class="text-sm font-medium mb-2 block">\u516C\u94A5\uFF08Public Key\uFF09</label><textarea placeholder="\u8F93\u5165PEM\u683C\u5F0F\u7684\u516C\u94A5" class="w-full h-24 p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(publicKey.value)}</textarea><div class="mt-2 text-xs text-muted-foreground"> RS256/RS384/RS512\u3001ES256/ES384/ES512\u3001PS256/PS384/PS512\u7B97\u6CD5\u4F7F\u7528 </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex flex-wrap gap-4 mb-8"><button${ssrIncludeBooleanAttr(!jwtToken.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u9A8C\u8BC1JWT </button><button${ssrIncludeBooleanAttr(!jwtToken.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u4EC5\u89E3\u6790 </button></div>`);
      if (verifyResult.value) {
        _push(`<div class="space-y-6 mb-8"><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u9A8C\u8BC1\u7ED3\u679C</h3><div class="space-y-4"><div class="${ssrRenderClass([verifyResult.value.signature.valid ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200", "flex items-center justify-between p-4 rounded-lg"])}"><div class="flex items-center gap-3"><div class="${ssrRenderClass([verifyResult.value.signature.valid ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600", "p-2 rounded-full"])}"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">`);
        if (verifyResult.value.signature.valid) {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`);
        } else {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`);
        }
        _push(`</svg></div><div><div class="font-medium">\u7B7E\u540D\u9A8C\u8BC1</div><div class="text-sm text-muted-foreground">${ssrInterpolate(verifyResult.value.signature.message)}</div></div></div><div class="text-sm"> \u7B97\u6CD5\uFF1A${ssrInterpolate(((_a = verifyResult.value.header) == null ? void 0 : _a.alg) || "N/A")}</div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="${ssrRenderClass([verifyResult.value.time.valid ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200", "p-4 rounded-lg"])}"><div class="flex items-center gap-2 mb-2">`);
        _push(ssrRenderComponent(unref(Clock), {
          class: ["w-4 h-4", verifyResult.value.time.valid ? "text-green-600" : "text-red-600"]
        }, null, _parent));
        _push(`<span class="font-medium text-sm">\u751F\u6548\u65F6\u95F4 (nbf)</span></div><div class="text-sm"><div>${ssrInterpolate(verifyResult.value.time.nbf || "\u672A\u8BBE\u7F6E")}</div>`);
        if (verifyResult.value.time.nbfStatus) {
          _push(`<div class="${ssrRenderClass(verifyResult.value.time.nbfStatus.valid ? "text-green-600" : "text-red-600")}">${ssrInterpolate(verifyResult.value.time.nbfStatus.message)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="${ssrRenderClass([verifyResult.value.time.valid ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200", "p-4 rounded-lg"])}"><div class="flex items-center gap-2 mb-2">`);
        _push(ssrRenderComponent(unref(Calendar), {
          class: ["w-4 h-4", verifyResult.value.time.valid ? "text-green-600" : "text-amber-600"]
        }, null, _parent));
        _push(`<span class="font-medium text-sm">\u7B7E\u53D1\u65F6\u95F4 (iat)</span></div><div class="text-sm"><div>${ssrInterpolate(verifyResult.value.time.iat || "\u672A\u8BBE\u7F6E")}</div><div class="text-muted-foreground">${ssrInterpolate(verifyResult.value.time.iatAge)}</div></div></div><div class="${ssrRenderClass([verifyResult.value.time.valid ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200", "p-4 rounded-lg"])}"><div class="flex items-center gap-2 mb-2">`);
        _push(ssrRenderComponent(unref(AlertCircle), {
          class: ["w-4 h-4", verifyResult.value.time.valid ? "text-green-600" : "text-red-600"]
        }, null, _parent));
        _push(`<span class="font-medium text-sm">\u8FC7\u671F\u65F6\u95F4 (exp)</span></div><div class="text-sm"><div>${ssrInterpolate(verifyResult.value.time.exp || "\u672A\u8BBE\u7F6E")}</div>`);
        if (verifyResult.value.time.expStatus) {
          _push(`<div class="${ssrRenderClass(verifyResult.value.time.expStatus.valid ? "text-green-600" : "text-red-600")}">${ssrInterpolate(verifyResult.value.time.expStatus.message)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="border border-border rounded-lg p-6"><h4 class="font-semibold mb-4">Header (\u5934\u90E8)</h4><div class="space-y-3"><!--[-->`);
        ssrRenderList(verifyResult.value.header, (value, key) => {
          _push(`<div><div class="text-sm"><span class="text-muted-foreground">${ssrInterpolate(key)}:</span><span class="ml-2 font-mono">${ssrInterpolate(value)}</span></div></div>`);
        });
        _push(`<!--]--></div><div class="mt-4"><h5 class="text-sm font-medium mb-2">\u539F\u59CBHeader (Base64)</h5><div class="bg-muted/50 rounded p-3"><code class="text-xs break-all">${ssrInterpolate(verifyResult.value.rawHeader)}</code></div></div></div><div class="border border-border rounded-lg p-6"><h4 class="font-semibold mb-4">Payload (\u8F7D\u8377)</h4><div class="space-y-3"><!--[-->`);
        ssrRenderList(verifyResult.value.payload, (value, key) => {
          _push(`<div><div class="text-sm"><span class="text-muted-foreground">${ssrInterpolate(key)}:</span>`);
          if (typeof value === "object") {
            _push(`<span class="ml-2"><pre class="inline text-xs bg-muted/50 px-2 py-1 rounded">${ssrInterpolate(JSON.stringify(value, null, 2))}</pre></span>`);
          } else {
            _push(`<span class="ml-2 font-mono">${ssrInterpolate(value)}</span>`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div><div class="mt-4"><h5 class="text-sm font-medium mb-2">\u539F\u59CBPayload (Base64)</h5><div class="bg-muted/50 rounded p-3"><code class="text-xs break-all">${ssrInterpolate(verifyResult.value.rawPayload)}</code></div></div></div></div><div class="border border-border rounded-lg p-6"><h4 class="font-semibold mb-4">Signature (\u7B7E\u540D)</h4><div class="bg-muted/50 rounded p-3"><code class="text-xs break-all">${ssrInterpolate(verifyResult.value.rawSignature)}</code></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u9AD8\u7EA7\u9A8C\u8BC1\u9009\u9879</h3><div class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block">\u5141\u8BB8\u7684\u65F6\u949F\u504F\u5DEE\uFF08\u79D2\uFF09</label><input${ssrRenderAttr("value", clockSkew.value)} type="number" min="0" max="300" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><div class="mt-1 text-xs text-muted-foreground"> \u7528\u4E8E\u89E3\u51B3\u670D\u52A1\u5668\u65F6\u95F4\u4E0D\u540C\u6B65\u95EE\u9898\uFF0C\u901A\u5E38\u8BBE\u7F6E\u4E3A60\u79D2 </div></div><div><label class="text-sm font-medium mb-2 block">\u5FC5\u586B\u58F0\u660E\uFF08Claims\uFF09</label><input${ssrRenderAttr("value", requiredClaims.value)} type="text" placeholder="\u4F8B\u5982\uFF1Aiss,aud,sub" class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><div class="mt-1 text-xs text-muted-foreground"> \u7528\u9017\u53F7\u5206\u9694\u7684\u58F0\u660E\u5217\u8868\uFF0C\u9A8C\u8BC1\u8FD9\u4E9B\u58F0\u660E\u662F\u5426\u5B58\u5728 </div></div></div><div><label class="text-sm font-medium mb-2 block">\u81EA\u5B9A\u4E49\u58F0\u660E\u9A8C\u8BC1</label><div class="space-y-2"><!--[-->`);
      ssrRenderList(customClaims.value, (claim, index) => {
        _push(`<div class="flex gap-2"><input${ssrRenderAttr("value", claim.name)} type="text" placeholder="\u58F0\u660E\u540D\u79F0" class="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><input${ssrRenderAttr("value", claim.value)} type="text" placeholder="\u671F\u671B\u503C" class="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"><button class="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"> \u5220\u9664 </button></div>`);
      });
      _push(`<!--]--><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"> \u6DFB\u52A0\u58F0\u660E </button></div></div></div></div><div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">JWT\u9A8C\u8BC1\u6700\u4F73\u5B9E\u8DF5</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-primary mb-2">\u5B89\u5168\u68C0\u67E5\u6E05\u5355</h4><ul class="text-sm space-y-1"><li>\u2713 \u9A8C\u8BC1\u7B7E\u540D\u7B97\u6CD5\u662F\u5426\u4E3A\u9884\u671F\u7B97\u6CD5</li><li>\u2713 \u68C0\u67E5exp\u58F0\u660E\uFF0C\u62D2\u7EDD\u8FC7\u671F\u7684token</li><li>\u2713 \u68C0\u67E5nbf\u58F0\u660E\uFF0C\u62D2\u7EDD\u672A\u751F\u6548\u7684token</li><li>\u2713 \u9A8C\u8BC1iss\uFF08\u7B7E\u53D1\u8005\uFF09\u58F0\u660E</li><li>\u2713 \u9A8C\u8BC1aud\uFF08\u53D7\u4F17\uFF09\u58F0\u660E</li><li>\u2713 \u8003\u8651\u65F6\u949F\u504F\u5DEE\uFF0C\u901A\u5E3830-60\u79D2</li></ul></div><div><h4 class="font-medium text-primary mb-2">\u5E38\u89C1\u5B89\u5168\u95EE\u9898</h4><ul class="text-sm space-y-1 text-amber-600"><li>\u2022 \u63A5\u53D7&quot;none&quot;\u7B97\u6CD5\uFF08\u65E0\u7B7E\u540D\uFF09</li><li>\u2022 \u4E0D\u9A8C\u8BC1exp\u8FC7\u671F\u65F6\u95F4</li><li>\u2022 \u4FE1\u4EFB\u7B97\u6CD5\u5934\u90E8\u4E2D\u7684\u503C</li><li>\u2022 \u4F7F\u7528\u5F31\u5BC6\u94A5\u6216\u6CC4\u9732\u7684\u5BC6\u94A5</li><li>\u2022 \u5728URL\u4E2D\u4F20\u8F93JWT\uFF08\u53EF\u80FD\u88AB\u65E5\u5FD7\u8BB0\u5F55\uFF09</li></ul></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/jwt-verify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=jwt-verify-vyUUI2K0.mjs.map
