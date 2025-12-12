import { ref, mergeProps, unref, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { FileText, Info } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { f as useSeoMeta } from './server.mjs';
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
  __name: "charset-convert",
  __ssrInlineRender: true,
  setup(__props) {
    const sourceEncoding = ref("utf-8");
    const targetEncoding = ref("gbk");
    const inputText = ref("");
    const outputText = ref("");
    const copied = ref(false);
    const getByteCount = (text, encoding) => {
      try {
        const encoder = new TextEncoder(encoding);
        const bytes = encoder.encode(text);
        return bytes.length;
      } catch (error) {
        const encoder = new TextEncoder();
        const bytes = encoder.encode(text);
        return bytes.length;
      }
    };
    const getHexView = (text, encoding) => {
      try {
        const encoder = new TextEncoder(encoding);
        const bytes = encoder.encode(text);
        return Array.from(bytes).map((byte) => byte.toString(16).padStart(2, "0").toUpperCase()).join(" ");
      } catch (error) {
        const encoder = new TextEncoder();
        const bytes = encoder.encode(text);
        return Array.from(bytes).map((byte) => byte.toString(16).padStart(2, "0").toUpperCase()).join(" ");
      }
    };
    useSeoMeta({
      title: "\u5B57\u7B26\u96C6\u7F16\u7801\u8F6C\u6362\u5668 - \u5728\u7EBF\u6587\u672C\u7F16\u7801\u8F6C\u6362\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF\u5B57\u7B26\u96C6\u7F16\u7801\u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301 UTF-8\u3001GBK\u3001GB2312\u3001Big5 \u7B49\u591A\u79CD\u7F16\u7801\u683C\u5F0F\u4E4B\u95F4\u7684\u8F6C\u6362\u3002",
      keywords: ["\u5B57\u7B26\u7F16\u7801", "\u7F16\u7801\u8F6C\u6362", "utf-8", "gbk", "gb2312", "\u6587\u672C\u7F16\u7801", "\u4E71\u7801", "\u7F16\u7801\u683C\u5F0F"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u5B57\u7B26\u96C6\u7F16\u7801\u8F6C\u6362</h1><p class="text-muted-foreground">\u6587\u672C\u5B57\u7B26\u96C6\u7F16\u7801\u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301 UTF-8\u3001GBK\u3001ISO-8859-1 \u7B49\u591A\u79CD\u7F16\u7801\u683C\u5F0F</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6E90\u7F16\u7801\u683C\u5F0F</h2><select class="w-full px-3 py-2 border rounded-md text-sm"><option value="utf-8"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "utf-8") : ssrLooseEqual(sourceEncoding.value, "utf-8")) ? " selected" : ""}>UTF-8</option><option value="gbk"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "gbk") : ssrLooseEqual(sourceEncoding.value, "gbk")) ? " selected" : ""}>GBK</option><option value="gb2312"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "gb2312") : ssrLooseEqual(sourceEncoding.value, "gb2312")) ? " selected" : ""}>GB2312</option><option value="big5"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "big5") : ssrLooseEqual(sourceEncoding.value, "big5")) ? " selected" : ""}>Big5</option><option value="iso-8859-1"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "iso-8859-1") : ssrLooseEqual(sourceEncoding.value, "iso-8859-1")) ? " selected" : ""}>ISO-8859-1</option><option value="windows-1252"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "windows-1252") : ssrLooseEqual(sourceEncoding.value, "windows-1252")) ? " selected" : ""}>Windows-1252</option><option value="shift_jis"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "shift_jis") : ssrLooseEqual(sourceEncoding.value, "shift_jis")) ? " selected" : ""}>Shift_JIS</option><option value="euc-jp"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "euc-jp") : ssrLooseEqual(sourceEncoding.value, "euc-jp")) ? " selected" : ""}>EUC-JP</option><option value="euc-kr"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "euc-kr") : ssrLooseEqual(sourceEncoding.value, "euc-kr")) ? " selected" : ""}>EUC-KR</option><option value="koi8-r"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "koi8-r") : ssrLooseEqual(sourceEncoding.value, "koi8-r")) ? " selected" : ""}>KOI8-R</option></select></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u8F93\u5165\u6587\u672C</h2><div class="flex gap-2"><button class="text-sm text-primary hover:text-primary/80 transition-colors"> \u52A0\u8F7D\u793A\u4F8B </button><button class="text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><textarea placeholder="\u8F93\u5165\u8981\u8F6C\u6362\u7684\u6587\u672C..." class="w-full h-80 px-4 py-3 border rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea><div class="mt-4"><label class="text-sm font-medium">\u6216\u4E0A\u4F20\u6587\u4EF6</label><input type="file" class="mt-2 w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"></div></div>`);
      if (inputText.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5B57\u7B26\u4FE1\u606F</h2><div class="grid grid-cols-2 gap-4 text-sm"><div><span class="text-muted-foreground">\u5B57\u7B26\u6570\uFF1A</span><span class="font-medium">${ssrInterpolate(inputText.value.length)}</span></div><div><span class="text-muted-foreground">\u5B57\u8282\u6570\uFF08${ssrInterpolate(sourceEncoding.value)}\uFF09\uFF1A</span><span class="font-medium">${ssrInterpolate(getByteCount(inputText.value, sourceEncoding.value))}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u76EE\u6807\u7F16\u7801\u683C\u5F0F</h2><div class="flex gap-2"><select class="flex-1 px-3 py-2 border rounded-md text-sm"><option value="utf-8"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "utf-8") : ssrLooseEqual(targetEncoding.value, "utf-8")) ? " selected" : ""}>UTF-8</option><option value="gbk"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "gbk") : ssrLooseEqual(targetEncoding.value, "gbk")) ? " selected" : ""}>GBK</option><option value="gb2312"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "gb2312") : ssrLooseEqual(targetEncoding.value, "gb2312")) ? " selected" : ""}>GB2312</option><option value="big5"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "big5") : ssrLooseEqual(targetEncoding.value, "big5")) ? " selected" : ""}>Big5</option><option value="iso-8859-1"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "iso-8859-1") : ssrLooseEqual(targetEncoding.value, "iso-8859-1")) ? " selected" : ""}>ISO-8859-1</option><option value="windows-1252"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "windows-1252") : ssrLooseEqual(targetEncoding.value, "windows-1252")) ? " selected" : ""}>Windows-1252</option><option value="shift_jis"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "shift_jis") : ssrLooseEqual(targetEncoding.value, "shift_jis")) ? " selected" : ""}>Shift_JIS</option><option value="euc-jp"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "euc-jp") : ssrLooseEqual(targetEncoding.value, "euc-jp")) ? " selected" : ""}>EUC-JP</option><option value="euc-kr"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "euc-kr") : ssrLooseEqual(targetEncoding.value, "euc-kr")) ? " selected" : ""}>EUC-KR</option><option value="koi8-r"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "koi8-r") : ssrLooseEqual(targetEncoding.value, "koi8-r")) ? " selected" : ""}>KOI8-R</option></select><button${ssrIncludeBooleanAttr(!inputText.value) ? " disabled" : ""} class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u8F6C\u6362 </button></div></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u8F6C\u6362\u7ED3\u679C</h2><div class="flex gap-2"><button${ssrIncludeBooleanAttr(!outputText.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button><button${ssrIncludeBooleanAttr(!outputText.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u4E0B\u8F7D </button></div></div><div class="border rounded-lg p-4 bg-muted/30 min-h-[320px] max-h-[400px] overflow-auto">`);
      if (outputText.value) {
        _push(`<pre class="text-sm whitespace-pre-wrap break-all">${ssrInterpolate(outputText.value)}</pre>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-12">`);
        _push(ssrRenderComponent(unref(FileText), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>\u8F6C\u6362\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC</p></div>`);
      }
      _push(`</div></div>`);
      if (inputText.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5341\u516D\u8FDB\u5236\u9884\u89C8</h2><div class="space-y-4"><div><h3 class="text-sm font-medium mb-2">\u6E90\u7F16\u7801\uFF08${ssrInterpolate(sourceEncoding.value)}\uFF09</h3><div class="p-3 bg-muted rounded-lg font-mono text-xs break-all">${ssrInterpolate(getHexView(inputText.value, sourceEncoding.value))}</div></div>`);
        if (outputText.value) {
          _push(`<div><h3 class="text-sm font-medium mb-2">\u76EE\u6807\u7F16\u7801\uFF08${ssrInterpolate(targetEncoding.value)}\uFF09</h3><div class="p-3 bg-muted rounded-lg font-mono text-xs break-all">${ssrInterpolate(getHexView(outputText.value, targetEncoding.value))}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5E38\u89C1\u5B57\u7B26\u7F16\u7801\u4ECB\u7ECD </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-foreground mb-2">Unicode \u7F16\u7801</h4><ul class="space-y-2 text-sm text-muted-foreground"><li><strong>UTF-8\uFF1A</strong> \u53EF\u53D8\u957F\u5EA6\u7F16\u7801\uFF0C\u4F7F\u7528 1-4 \u4E2A\u5B57\u8282\u8868\u793A Unicode \u5B57\u7B26\uFF0C\u662F\u76EE\u524D\u6700\u5E38\u7528\u7684\u7F16\u7801 </li><li><strong>UTF-16\uFF1A</strong> \u4F7F\u7528 2 \u6216 4 \u4E2A\u5B57\u8282\uFF0C\u4E3B\u8981\u7528\u4E8E Windows \u548C Java </li><li><strong>UTF-32\uFF1A</strong> \u56FA\u5B9A\u4F7F\u7528 4 \u4E2A\u5B57\u8282\uFF0C\u5904\u7406\u7B80\u5355\u4F46\u6D6A\u8D39\u7A7A\u95F4 </li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u533A\u57DF\u7F16\u7801</h4><ul class="space-y-2 text-sm text-muted-foreground"><li><strong>GBK/GB2312\uFF1A</strong> \u4E2D\u6587\u7F16\u7801\uFF0CGBK \u662F GB2312 \u7684\u6269\u5C55 </li><li><strong>Big5\uFF1A</strong> \u7E41\u4F53\u4E2D\u6587\u7F16\u7801 </li><li><strong>Shift_JIS/EUC-JP\uFF1A</strong> \u65E5\u6587\u7F16\u7801 </li><li><strong>ISO-8859-1\uFF1A</strong> Latin-1 \u897F\u6B27\u7F16\u7801 </li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u5E38\u89C1\u4F7F\u7528\u573A\u666F</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="p-4 bg-muted rounded-lg"><h4 class="font-medium mb-2">\u7F51\u9875\u5F00\u53D1</h4><p class="text-sm text-muted-foreground"> \u5904\u7406\u4E0D\u540C\u7F16\u7801\u7684\u7F51\u9875\u5185\u5BB9\uFF0C\u89E3\u51B3\u4E71\u7801\u95EE\u9898 </p></div><div class="p-4 bg-muted rounded-lg"><h4 class="font-medium mb-2">\u6570\u636E\u8FC1\u79FB</h4><p class="text-sm text-muted-foreground"> \u6570\u636E\u5E93\u6216\u6587\u4EF6\u8FC1\u79FB\u65F6\u7684\u7F16\u7801\u8F6C\u6362 </p></div><div class="p-4 bg-muted rounded-lg"><h4 class="font-medium mb-2">\u56FD\u9645\u5316</h4><p class="text-sm text-muted-foreground"> \u591A\u8BED\u8A00\u5E94\u7528\u7684\u6587\u672C\u7F16\u7801\u5904\u7406 </p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/charset-convert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=charset-convert-B3rsQ8w5.mjs.map
