import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { FileText, Info } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
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
      title: "字符集编码转换器 - 在线文本编码转换工具",
      description: "免费的在线字符集编码转换工具，支持 UTF-8、GBK、GB2312、Big5 等多种编码格式之间的转换。",
      keywords: ["字符编码", "编码转换", "utf-8", "gbk", "gb2312", "文本编码", "乱码", "编码格式"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">字符集编码转换</h1><p class="text-muted-foreground">文本字符集编码转换工具，支持 UTF-8、GBK、ISO-8859-1 等多种编码格式</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">源编码格式</h2><select class="w-full px-3 py-2 border rounded-md text-sm"><option value="utf-8"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "utf-8") : ssrLooseEqual(sourceEncoding.value, "utf-8")) ? " selected" : ""}>UTF-8</option><option value="gbk"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "gbk") : ssrLooseEqual(sourceEncoding.value, "gbk")) ? " selected" : ""}>GBK</option><option value="gb2312"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "gb2312") : ssrLooseEqual(sourceEncoding.value, "gb2312")) ? " selected" : ""}>GB2312</option><option value="big5"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "big5") : ssrLooseEqual(sourceEncoding.value, "big5")) ? " selected" : ""}>Big5</option><option value="iso-8859-1"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "iso-8859-1") : ssrLooseEqual(sourceEncoding.value, "iso-8859-1")) ? " selected" : ""}>ISO-8859-1</option><option value="windows-1252"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "windows-1252") : ssrLooseEqual(sourceEncoding.value, "windows-1252")) ? " selected" : ""}>Windows-1252</option><option value="shift_jis"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "shift_jis") : ssrLooseEqual(sourceEncoding.value, "shift_jis")) ? " selected" : ""}>Shift_JIS</option><option value="euc-jp"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "euc-jp") : ssrLooseEqual(sourceEncoding.value, "euc-jp")) ? " selected" : ""}>EUC-JP</option><option value="euc-kr"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "euc-kr") : ssrLooseEqual(sourceEncoding.value, "euc-kr")) ? " selected" : ""}>EUC-KR</option><option value="koi8-r"${ssrIncludeBooleanAttr(Array.isArray(sourceEncoding.value) ? ssrLooseContain(sourceEncoding.value, "koi8-r") : ssrLooseEqual(sourceEncoding.value, "koi8-r")) ? " selected" : ""}>KOI8-R</option></select></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">输入文本</h2><div class="flex gap-2"><button class="text-sm text-primary hover:text-primary/80 transition-colors"> 加载示例 </button><button class="text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><textarea placeholder="输入要转换的文本..." class="w-full h-80 px-4 py-3 border rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea><div class="mt-4"><label class="text-sm font-medium">或上传文件</label><input type="file" class="mt-2 w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"></div></div>`);
      if (inputText.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">字符信息</h2><div class="grid grid-cols-2 gap-4 text-sm"><div><span class="text-muted-foreground">字符数：</span><span class="font-medium">${ssrInterpolate(inputText.value.length)}</span></div><div><span class="text-muted-foreground">字节数（${ssrInterpolate(sourceEncoding.value)}）：</span><span class="font-medium">${ssrInterpolate(getByteCount(inputText.value, sourceEncoding.value))}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">目标编码格式</h2><div class="flex gap-2"><select class="flex-1 px-3 py-2 border rounded-md text-sm"><option value="utf-8"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "utf-8") : ssrLooseEqual(targetEncoding.value, "utf-8")) ? " selected" : ""}>UTF-8</option><option value="gbk"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "gbk") : ssrLooseEqual(targetEncoding.value, "gbk")) ? " selected" : ""}>GBK</option><option value="gb2312"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "gb2312") : ssrLooseEqual(targetEncoding.value, "gb2312")) ? " selected" : ""}>GB2312</option><option value="big5"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "big5") : ssrLooseEqual(targetEncoding.value, "big5")) ? " selected" : ""}>Big5</option><option value="iso-8859-1"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "iso-8859-1") : ssrLooseEqual(targetEncoding.value, "iso-8859-1")) ? " selected" : ""}>ISO-8859-1</option><option value="windows-1252"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "windows-1252") : ssrLooseEqual(targetEncoding.value, "windows-1252")) ? " selected" : ""}>Windows-1252</option><option value="shift_jis"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "shift_jis") : ssrLooseEqual(targetEncoding.value, "shift_jis")) ? " selected" : ""}>Shift_JIS</option><option value="euc-jp"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "euc-jp") : ssrLooseEqual(targetEncoding.value, "euc-jp")) ? " selected" : ""}>EUC-JP</option><option value="euc-kr"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "euc-kr") : ssrLooseEqual(targetEncoding.value, "euc-kr")) ? " selected" : ""}>EUC-KR</option><option value="koi8-r"${ssrIncludeBooleanAttr(Array.isArray(targetEncoding.value) ? ssrLooseContain(targetEncoding.value, "koi8-r") : ssrLooseEqual(targetEncoding.value, "koi8-r")) ? " selected" : ""}>KOI8-R</option></select><button${ssrIncludeBooleanAttr(!inputText.value) ? " disabled" : ""} class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 转换 </button></div></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">转换结果</h2><div class="flex gap-2"><button${ssrIncludeBooleanAttr(!outputText.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "已复制" : "复制")}</button><button${ssrIncludeBooleanAttr(!outputText.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 下载 </button></div></div><div class="border rounded-lg p-4 bg-muted/30 min-h-[320px] max-h-[400px] overflow-auto">`);
      if (outputText.value) {
        _push(`<pre class="text-sm whitespace-pre-wrap break-all">${ssrInterpolate(outputText.value)}</pre>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-12">`);
        _push(ssrRenderComponent(unref(FileText), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>转换结果将显示在这里</p></div>`);
      }
      _push(`</div></div>`);
      if (inputText.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">十六进制预览</h2><div class="space-y-4"><div><h3 class="text-sm font-medium mb-2">源编码（${ssrInterpolate(sourceEncoding.value)}）</h3><div class="p-3 bg-muted rounded-lg font-mono text-xs break-all">${ssrInterpolate(getHexView(inputText.value, sourceEncoding.value))}</div></div>`);
        if (outputText.value) {
          _push(`<div><h3 class="text-sm font-medium mb-2">目标编码（${ssrInterpolate(targetEncoding.value)}）</h3><div class="p-3 bg-muted rounded-lg font-mono text-xs break-all">${ssrInterpolate(getHexView(outputText.value, targetEncoding.value))}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 常见字符编码介绍 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-foreground mb-2">Unicode 编码</h4><ul class="space-y-2 text-sm text-muted-foreground"><li><strong>UTF-8：</strong> 可变长度编码，使用 1-4 个字节表示 Unicode 字符，是目前最常用的编码 </li><li><strong>UTF-16：</strong> 使用 2 或 4 个字节，主要用于 Windows 和 Java </li><li><strong>UTF-32：</strong> 固定使用 4 个字节，处理简单但浪费空间 </li></ul></div><div><h4 class="font-medium text-foreground mb-2">区域编码</h4><ul class="space-y-2 text-sm text-muted-foreground"><li><strong>GBK/GB2312：</strong> 中文编码，GBK 是 GB2312 的扩展 </li><li><strong>Big5：</strong> 繁体中文编码 </li><li><strong>Shift_JIS/EUC-JP：</strong> 日文编码 </li><li><strong>ISO-8859-1：</strong> Latin-1 西欧编码 </li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">常见使用场景</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="p-4 bg-muted rounded-lg"><h4 class="font-medium mb-2">网页开发</h4><p class="text-sm text-muted-foreground"> 处理不同编码的网页内容，解决乱码问题 </p></div><div class="p-4 bg-muted rounded-lg"><h4 class="font-medium mb-2">数据迁移</h4><p class="text-sm text-muted-foreground"> 数据库或文件迁移时的编码转换 </p></div><div class="p-4 bg-muted rounded-lg"><h4 class="font-medium mb-2">国际化</h4><p class="text-sm text-muted-foreground"> 多语言应用的文本编码处理 </p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/charset-convert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=charset-convert-B3rsQ8w5.js.map
