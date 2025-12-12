import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { Zap, Hash, ArrowRight, Type, FileText } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "unicode-convert",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const inputFormat = ref("text");
    const separator = ref(" ");
    const outputs = ref({
      text: "",
      decimal: "",
      hexadecimal: "",
      javascript: ""
    });
    const copied = ref({
      text: false,
      decimal: false,
      hexadecimal: false,
      javascript: false
    });
    const unicodeDetails = ref([]);
    const unicodeCategories = {
      Lu: "大写字母",
      Ll: "小写字母",
      Lt: "首字母大写",
      Lm: "修饰字母",
      Lo: "其他字母",
      Mn: "非间距标记",
      Mc: "间距组合标记",
      Me: "封闭标记",
      Nd: "十进制数字",
      Nl: "字母数字",
      No: "其他数字",
      Pc: "连接符标点",
      Pd: "破折号标点",
      Ps: "开放标点",
      Pe: "关闭标点",
      Pi: "前引号标点",
      Pf: "后引号标点",
      Po: "其他标点",
      Sm: "数学符号",
      Sc: "货币符号",
      Sk: "修饰符号",
      So: "其他符号",
      Zs: "空格分隔符",
      Zl: "行分隔符",
      Zp: "段分隔符",
      Cc: "控制字符",
      Cf: "格式字符",
      Cs: "代理字符",
      Co: "专用字符",
      Cn: "未分配"
    };
    const getUnicodeInfo = (char) => {
      const code = char.charCodeAt(0);
      return {
        char,
        name: getCharacterName(code),
        decimal: code,
        hexadecimal: code.toString(16),
        utf8: getUTF8Bytes(code),
        category: unicodeCategories[char.codePointAt(0)] || "未知"
      };
    };
    const getCharacterName = (code) => {
      const names = {
        32: "Space",
        33: "Exclamation Mark",
        34: "Quotation Mark",
        35: "Number Sign",
        36: "Dollar Sign",
        37: "Percent Sign",
        38: "Ampersand",
        39: "Apostrophe",
        40: "Left Parenthesis",
        41: "Right Parenthesis",
        43: "Plus Sign",
        44: "Comma",
        45: "Hyphen-Minus",
        46: "Full Stop",
        47: "Solidus",
        48: "Digit Zero",
        49: "Digit One",
        50: "Digit Two",
        51: "Digit Three",
        52: "Digit Four",
        53: "Digit Five",
        54: "Digit Six",
        55: "Digit Seven",
        56: "Digit Eight",
        57: "Digit Nine",
        58: "Colon",
        59: "Semicolon",
        60: "Less-Than Sign",
        61: "Equals Sign",
        62: "Greater-Than Sign",
        63: "Question Mark",
        64: "Commercial At",
        65: "Latin Capital Letter A",
        66: "Latin Capital Letter B",
        67: "Latin Capital Letter C",
        68: "Latin Capital Letter D",
        69: "Latin Capital Letter E",
        70: "Latin Capital Letter F",
        71: "Latin Capital Letter G",
        72: "Latin Capital Letter H",
        73: "Latin Capital Letter I",
        74: "Latin Capital Letter J",
        75: "Latin Capital Letter K",
        76: "Latin Capital Letter L",
        77: "Latin Capital Letter M",
        78: "Latin Capital Letter N",
        79: "Latin Capital Letter O",
        80: "Latin Capital Letter P",
        81: "Latin Capital Letter Q",
        82: "Latin Capital Letter R",
        83: "Latin Capital Letter S",
        84: "Latin Capital Letter T",
        85: "Latin Capital Letter U",
        86: "Latin Capital Letter V",
        87: "Latin Capital Letter W",
        88: "Latin Capital Letter X",
        89: "Latin Capital Letter Y",
        90: "Latin Capital Letter Z",
        91: "Left Square Bracket",
        92: "Reverse Solidus",
        93: "Right Square Bracket",
        94: "Circumflex Accent",
        95: "Low Line",
        96: "Grave Accent",
        97: "Latin Small Letter A",
        98: "Latin Small Letter B",
        99: "Latin Small Letter C",
        100: "Latin Small Letter D",
        101: "Latin Small Letter E",
        102: "Latin Small Letter F",
        103: "Latin Small Letter G",
        104: "Latin Small Letter H",
        105: "Latin Small Letter I",
        106: "Latin Small Letter J",
        107: "Latin Small Letter K",
        108: "Latin Small Letter L",
        109: "Latin Small Letter M",
        110: "Latin Small Letter N",
        111: "Latin Small Letter O",
        112: "Latin Small Letter P",
        113: "Latin Small Letter Q",
        114: "Latin Small Letter R",
        115: "Latin Small Letter S",
        116: "Latin Small Letter T",
        117: "Latin Small Letter U",
        118: "Latin Small Letter V",
        119: "Latin Small Letter W",
        120: "Latin Small Letter X",
        121: "Latin Small Letter Y",
        122: "Latin Small Letter Z",
        123: "Left Curly Bracket",
        124: "Vertical Line",
        125: "Right Curly Bracket",
        126: "Tilde",
        8364: "Euro Sign"
      };
      return names[code] || null;
    };
    const getUTF8Bytes = (code) => {
      if (code <= 127) {
        return [code];
      } else if (code <= 2047) {
        return [192 | code >> 6, 128 | code & 63];
      } else if (code <= 65535) {
        return [224 | code >> 12, 128 | code >> 6 & 63, 128 | code & 63];
      } else {
        return [240 | code >> 18, 128 | code >> 12 & 63, 128 | code >> 6 & 63, 128 | code & 63];
      }
    };
    const parseInput = (text, format) => {
      let chars = [];
      switch (format) {
        case "text":
          chars = text.split("");
          break;
        case "decimal":
          chars = text.split(separator.value).filter((s) => s).map((s) => {
            const code = parseInt(s.trim());
            return code ? String.fromCodePoint(code) : "";
          });
          break;
        case "hexadecimal":
          chars = text.split(separator.value).filter((s) => s).map((s) => {
            const code = parseInt(s.trim(), 16);
            return code ? String.fromCodePoint(code) : "";
          });
          break;
        case "javascript":
        case "python":
        case "java":
        case "c":
          const escapeRegex = /\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{8})/g;
          let lastIndex = 0;
          let match;
          while ((match = escapeRegex.exec(text)) !== null) {
            if (match.index > lastIndex) {
              const normalText = text.slice(lastIndex, match.index);
              chars.push(...normalText.split(""));
            }
            const code = parseInt(match[1] || match[2], 16);
            chars.push(String.fromCodePoint(code));
            lastIndex = match.index + match[0].length;
          }
          if (lastIndex < text.length) {
            const remainingText = text.slice(lastIndex);
            chars.push(...remainingText.split(""));
          }
          break;
      }
      return chars.filter((char) => char !== "");
    };
    const convert = () => {
      if (!inputText.value) {
        outputs.value = {
          text: "",
          decimal: "",
          hexadecimal: "",
          javascript: ""
        };
        unicodeDetails.value = [];
        return;
      }
      const chars = parseInput(inputText.value, inputFormat.value);
      outputs.value.text = chars.join("");
      outputs.value.decimal = chars.map((char) => char.charCodeAt(0)).join(separator.value);
      outputs.value.hexadecimal = chars.map((char) => char.charCodeAt(0).toString(16)).join(separator.value);
      outputs.value.javascript = chars.map((char) => {
        const code = char.charCodeAt(0);
        return "\\u" + code.toString(16).toUpperCase().padStart(4, "0");
      }).join("");
      unicodeDetails.value = chars.slice(0, 20).map((char) => getUnicodeInfo(char));
    };
    watch([inputText, inputFormat, separator], () => {
      convert();
    });
    useSeoMeta({
      title: "Unicode转换器 - 在线Unicode编码转换工具",
      description: "免费在线Unicode转换工具，支持文本、Unicode码点、转义序列之间的相互转换，支持多种编程语言格式。",
      keywords: ["unicode", "转换", "converter", "码点", "转义序列", "在线工具", "编码转换"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-8d22320a><div class="mt-4 mb-8" data-v-8d22320a><h1 class="text-3xl font-bold mb-3" data-v-8d22320a>Unicode 转换器</h1><p class="text-muted-foreground" data-v-8d22320a>在文本、Unicode 码点、转义序列之间相互转换，支持多种编码格式</p></div><div class="space-y-6" data-v-8d22320a><div class="space-y-4" data-v-8d22320a><div class="flex items-center justify-between" data-v-8d22320a><h2 class="text-lg font-semibold" data-v-8d22320a>输入内容</h2><div class="flex gap-2" data-v-8d22320a><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a> 清空 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a> 粘贴 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a> 示例 </button></div></div><textarea placeholder="请输入要转换的文本、Unicode 码点或转义序列..." class="w-full h-48 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-8d22320a>${ssrInterpolate(inputText.value)}</textarea><div class="flex flex-wrap gap-3" data-v-8d22320a><div class="flex items-center gap-2" data-v-8d22320a><label class="text-sm font-medium" data-v-8d22320a>输入格式:</label><select class="px-3 py-1 border rounded-md text-sm" data-v-8d22320a><option value="text" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "text") : ssrLooseEqual(inputFormat.value, "text")) ? " selected" : ""}>普通文本</option><option value="decimal" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "decimal") : ssrLooseEqual(inputFormat.value, "decimal")) ? " selected" : ""}>十进制码点</option><option value="hexadecimal" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "hexadecimal") : ssrLooseEqual(inputFormat.value, "hexadecimal")) ? " selected" : ""}>十六进制码点</option><option value="javascript" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "javascript") : ssrLooseEqual(inputFormat.value, "javascript")) ? " selected" : ""}>JavaScript 转义</option><option value="python" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "python") : ssrLooseEqual(inputFormat.value, "python")) ? " selected" : ""}>Python 转义</option><option value="java" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "java") : ssrLooseEqual(inputFormat.value, "java")) ? " selected" : ""}>Java 转义</option><option value="c" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "c") : ssrLooseEqual(inputFormat.value, "c")) ? " selected" : ""}>C/C++ 转义</option></select></div><div class="flex items-center gap-2" data-v-8d22320a><label class="text-sm font-medium" data-v-8d22320a>分隔符:</label><input${ssrRenderAttr("value", separator.value)} type="text" placeholder="空格、逗号等" class="w-32 px-3 py-1 border rounded-md text-sm" data-v-8d22320a></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-8d22320a><div class="space-y-4" data-v-8d22320a><div class="flex items-center justify-between" data-v-8d22320a><h2 class="text-lg font-semibold" data-v-8d22320a>普通文本</h2>`);
      if (outputs.value.text) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a>${ssrInterpolate(copied.value.text ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><pre class="w-full h-32 p-4 bg-muted rounded-lg overflow-auto text-sm whitespace-pre-wrap break-all" data-v-8d22320a>${ssrInterpolate(outputs.value.text || "转换结果将显示在这里")}</pre></div><div class="space-y-4" data-v-8d22320a><div class="flex items-center justify-between" data-v-8d22320a><h2 class="text-lg font-semibold" data-v-8d22320a>Unicode 码点 (十进制)</h2>`);
      if (outputs.value.decimal) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a>${ssrInterpolate(copied.value.decimal ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><pre class="w-full h-32 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-8d22320a>${ssrInterpolate(outputs.value.decimal || "转换结果将显示在这里")}</pre></div><div class="space-y-4" data-v-8d22320a><div class="flex items-center justify-between" data-v-8d22320a><h2 class="text-lg font-semibold" data-v-8d22320a>Unicode 码点 (十六进制)</h2>`);
      if (outputs.value.hexadecimal) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a>${ssrInterpolate(copied.value.hexadecimal ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><pre class="w-full h-32 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-8d22320a>${ssrInterpolate(outputs.value.hexadecimal || "转换结果将显示在这里")}</pre></div><div class="space-y-4" data-v-8d22320a><div class="flex items-center justify-between" data-v-8d22320a><h2 class="text-lg font-semibold" data-v-8d22320a>JavaScript 转义序列</h2>`);
      if (outputs.value.javascript) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a>${ssrInterpolate(copied.value.javascript ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><pre class="w-full h-32 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-8d22320a>${ssrInterpolate(outputs.value.javascript || "转换结果将显示在这里")}</pre></div></div>`);
      if (unicodeDetails.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6" data-v-8d22320a><h3 class="text-lg font-semibold mb-4" data-v-8d22320a>Unicode 字符详情</h3><div class="overflow-x-auto" data-v-8d22320a><table class="w-full text-sm" data-v-8d22320a><thead data-v-8d22320a><tr class="border-b" data-v-8d22320a><th class="text-left py-2" data-v-8d22320a>字符</th><th class="text-left py-2" data-v-8d22320a>名称</th><th class="text-left py-2" data-v-8d22320a>十进制</th><th class="text-left py-2" data-v-8d22320a>十六进制</th><th class="text-left py-2" data-v-8d22320a>UTF-8 字节</th><th class="text-left py-2" data-v-8d22320a>分类</th></tr></thead><tbody data-v-8d22320a><!--[-->`);
        ssrRenderList(unicodeDetails.value, (detail, index) => {
          _push(`<tr class="border-b" data-v-8d22320a><td class="py-2" data-v-8d22320a><span class="text-2xl" data-v-8d22320a>${ssrInterpolate(detail.char)}</span></td><td class="py-2" data-v-8d22320a>${ssrInterpolate(detail.name || "-")}</td><td class="py-2 font-mono" data-v-8d22320a>${ssrInterpolate(detail.decimal)}</td><td class="py-2 font-mono" data-v-8d22320a>U+${ssrInterpolate(detail.hexadecimal.toUpperCase().padStart(4, "0"))}</td><td class="py-2 font-mono" data-v-8d22320a>${ssrInterpolate(detail.utf8.join(" "))}</td><td class="py-2" data-v-8d22320a>${ssrInterpolate(detail.category)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-12 space-y-6" data-v-8d22320a><div class="bg-card rounded-lg p-6" data-v-8d22320a><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-8d22320a>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用技巧 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-8d22320a><p data-v-8d22320a>• 输入普通文本时，会自动转换成各种格式的 Unicode 表示</p><p data-v-8d22320a>• 输入码点时，支持十进制（如 65）和十六进制（如 41）格式</p><p data-v-8d22320a>• 可以使用空格、逗号等分隔符输入多个码点</p><p data-v-8d22320a>• 支持多种编程语言的转义序列格式</p></div></div><div class="bg-card rounded-lg p-6" data-v-8d22320a><h3 class="text-lg font-semibold mb-4" data-v-8d22320a>编码示例</h3><div class="space-y-4" data-v-8d22320a><div data-v-8d22320a><h4 class="font-medium text-sm mb-2" data-v-8d22320a>常见字符的 Unicode 表示</h4><div class="bg-muted p-3 rounded-lg" data-v-8d22320a><pre class="text-xs font-mono" data-v-8d22320a>A  → 65 (十进制) → U+0041 (十六进制) → \\u0041 (JavaScript)
中 → 20013 (十进制) → U+4E2D (十六进制) → \\u4E2D (JavaScript)
€ → 8364 (十进制) → U+20AC (十六进制) → \\u20AC (JavaScript)</pre></div></div><div data-v-8d22320a><h4 class="font-medium text-sm mb-2" data-v-8d22320a>编程语言格式对比</h4><div class="bg-muted p-3 rounded-lg" data-v-8d22320a><pre class="text-xs font-mono" data-v-8d22320a>JavaScript: \\u4F60\\u597D
Python: \\u4F60\\u597D 或 \\U00004F60\\U0000597D
Java: \\u4F60\\u597D
C/C++: \\u4F60\\u597D 或 \\U00004F60\\U0000597D</pre></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-8d22320a><h3 class="text-lg font-semibold mb-4" data-v-8d22320a>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-8d22320a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/hex-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-8d22320a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-8d22320a${_scopeId}>十六进制转换</p><p class="text-xs text-muted-foreground" data-v-8d22320a${_scopeId}>文本与十六进制互转</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "十六进制转换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "文本与十六进制互转")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/binary-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Type), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-8d22320a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-8d22320a${_scopeId}>二进制转换</p><p class="text-xs text-muted-foreground" data-v-8d22320a${_scopeId}>文本与二进制互转</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Type), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "二进制转换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "文本与二进制互转")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/ascii-table",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-8d22320a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-8d22320a${_scopeId}>ASCII 码表</p><p class="text-xs text-muted-foreground" data-v-8d22320a${_scopeId}>查看 ASCII 字符集</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "ASCII 码表"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "查看 ASCII 字符集")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/unicode-convert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unicodeConvert = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8d22320a"]]);
export {
  unicodeConvert as default
};
//# sourceMappingURL=unicode-convert-CaJpRd-e.js.map
