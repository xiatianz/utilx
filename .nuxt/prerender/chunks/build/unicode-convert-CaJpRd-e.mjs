import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { Zap, Hash, ArrowRight, Type, FileText } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { f as useSeoMeta } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs';
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
      Lu: "\u5927\u5199\u5B57\u6BCD",
      Ll: "\u5C0F\u5199\u5B57\u6BCD",
      Lt: "\u9996\u5B57\u6BCD\u5927\u5199",
      Lm: "\u4FEE\u9970\u5B57\u6BCD",
      Lo: "\u5176\u4ED6\u5B57\u6BCD",
      Mn: "\u975E\u95F4\u8DDD\u6807\u8BB0",
      Mc: "\u95F4\u8DDD\u7EC4\u5408\u6807\u8BB0",
      Me: "\u5C01\u95ED\u6807\u8BB0",
      Nd: "\u5341\u8FDB\u5236\u6570\u5B57",
      Nl: "\u5B57\u6BCD\u6570\u5B57",
      No: "\u5176\u4ED6\u6570\u5B57",
      Pc: "\u8FDE\u63A5\u7B26\u6807\u70B9",
      Pd: "\u7834\u6298\u53F7\u6807\u70B9",
      Ps: "\u5F00\u653E\u6807\u70B9",
      Pe: "\u5173\u95ED\u6807\u70B9",
      Pi: "\u524D\u5F15\u53F7\u6807\u70B9",
      Pf: "\u540E\u5F15\u53F7\u6807\u70B9",
      Po: "\u5176\u4ED6\u6807\u70B9",
      Sm: "\u6570\u5B66\u7B26\u53F7",
      Sc: "\u8D27\u5E01\u7B26\u53F7",
      Sk: "\u4FEE\u9970\u7B26\u53F7",
      So: "\u5176\u4ED6\u7B26\u53F7",
      Zs: "\u7A7A\u683C\u5206\u9694\u7B26",
      Zl: "\u884C\u5206\u9694\u7B26",
      Zp: "\u6BB5\u5206\u9694\u7B26",
      Cc: "\u63A7\u5236\u5B57\u7B26",
      Cf: "\u683C\u5F0F\u5B57\u7B26",
      Cs: "\u4EE3\u7406\u5B57\u7B26",
      Co: "\u4E13\u7528\u5B57\u7B26",
      Cn: "\u672A\u5206\u914D"
    };
    const getUnicodeInfo = (char) => {
      const code = char.charCodeAt(0);
      return {
        char,
        name: getCharacterName(code),
        decimal: code,
        hexadecimal: code.toString(16),
        utf8: getUTF8Bytes(code),
        category: unicodeCategories[char.codePointAt(0)] || "\u672A\u77E5"
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
      title: "Unicode\u8F6C\u6362\u5668 - \u5728\u7EBFUnicode\u7F16\u7801\u8F6C\u6362\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFUnicode\u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u6587\u672C\u3001Unicode\u7801\u70B9\u3001\u8F6C\u4E49\u5E8F\u5217\u4E4B\u95F4\u7684\u76F8\u4E92\u8F6C\u6362\uFF0C\u652F\u6301\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u683C\u5F0F\u3002",
      keywords: ["unicode", "\u8F6C\u6362", "converter", "\u7801\u70B9", "\u8F6C\u4E49\u5E8F\u5217", "\u5728\u7EBF\u5DE5\u5177", "\u7F16\u7801\u8F6C\u6362"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-8d22320a><div class="mt-4 mb-8" data-v-8d22320a><h1 class="text-3xl font-bold mb-3" data-v-8d22320a>Unicode \u8F6C\u6362\u5668</h1><p class="text-muted-foreground" data-v-8d22320a>\u5728\u6587\u672C\u3001Unicode \u7801\u70B9\u3001\u8F6C\u4E49\u5E8F\u5217\u4E4B\u95F4\u76F8\u4E92\u8F6C\u6362\uFF0C\u652F\u6301\u591A\u79CD\u7F16\u7801\u683C\u5F0F</p></div><div class="space-y-6" data-v-8d22320a><div class="space-y-4" data-v-8d22320a><div class="flex items-center justify-between" data-v-8d22320a><h2 class="text-lg font-semibold" data-v-8d22320a>\u8F93\u5165\u5185\u5BB9</h2><div class="flex gap-2" data-v-8d22320a><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a> \u6E05\u7A7A </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a> \u7C98\u8D34 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a> \u793A\u4F8B </button></div></div><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u8F6C\u6362\u7684\u6587\u672C\u3001Unicode \u7801\u70B9\u6216\u8F6C\u4E49\u5E8F\u5217..." class="w-full h-48 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-8d22320a>${ssrInterpolate(inputText.value)}</textarea><div class="flex flex-wrap gap-3" data-v-8d22320a><div class="flex items-center gap-2" data-v-8d22320a><label class="text-sm font-medium" data-v-8d22320a>\u8F93\u5165\u683C\u5F0F:</label><select class="px-3 py-1 border rounded-md text-sm" data-v-8d22320a><option value="text" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "text") : ssrLooseEqual(inputFormat.value, "text")) ? " selected" : ""}>\u666E\u901A\u6587\u672C</option><option value="decimal" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "decimal") : ssrLooseEqual(inputFormat.value, "decimal")) ? " selected" : ""}>\u5341\u8FDB\u5236\u7801\u70B9</option><option value="hexadecimal" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "hexadecimal") : ssrLooseEqual(inputFormat.value, "hexadecimal")) ? " selected" : ""}>\u5341\u516D\u8FDB\u5236\u7801\u70B9</option><option value="javascript" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "javascript") : ssrLooseEqual(inputFormat.value, "javascript")) ? " selected" : ""}>JavaScript \u8F6C\u4E49</option><option value="python" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "python") : ssrLooseEqual(inputFormat.value, "python")) ? " selected" : ""}>Python \u8F6C\u4E49</option><option value="java" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "java") : ssrLooseEqual(inputFormat.value, "java")) ? " selected" : ""}>Java \u8F6C\u4E49</option><option value="c" data-v-8d22320a${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "c") : ssrLooseEqual(inputFormat.value, "c")) ? " selected" : ""}>C/C++ \u8F6C\u4E49</option></select></div><div class="flex items-center gap-2" data-v-8d22320a><label class="text-sm font-medium" data-v-8d22320a>\u5206\u9694\u7B26:</label><input${ssrRenderAttr("value", separator.value)} type="text" placeholder="\u7A7A\u683C\u3001\u9017\u53F7\u7B49" class="w-32 px-3 py-1 border rounded-md text-sm" data-v-8d22320a></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-8d22320a><div class="space-y-4" data-v-8d22320a><div class="flex items-center justify-between" data-v-8d22320a><h2 class="text-lg font-semibold" data-v-8d22320a>\u666E\u901A\u6587\u672C</h2>`);
      if (outputs.value.text) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a>${ssrInterpolate(copied.value.text ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><pre class="w-full h-32 p-4 bg-muted rounded-lg overflow-auto text-sm whitespace-pre-wrap break-all" data-v-8d22320a>${ssrInterpolate(outputs.value.text || "\u8F6C\u6362\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC")}</pre></div><div class="space-y-4" data-v-8d22320a><div class="flex items-center justify-between" data-v-8d22320a><h2 class="text-lg font-semibold" data-v-8d22320a>Unicode \u7801\u70B9 (\u5341\u8FDB\u5236)</h2>`);
      if (outputs.value.decimal) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a>${ssrInterpolate(copied.value.decimal ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><pre class="w-full h-32 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-8d22320a>${ssrInterpolate(outputs.value.decimal || "\u8F6C\u6362\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC")}</pre></div><div class="space-y-4" data-v-8d22320a><div class="flex items-center justify-between" data-v-8d22320a><h2 class="text-lg font-semibold" data-v-8d22320a>Unicode \u7801\u70B9 (\u5341\u516D\u8FDB\u5236)</h2>`);
      if (outputs.value.hexadecimal) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a>${ssrInterpolate(copied.value.hexadecimal ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><pre class="w-full h-32 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-8d22320a>${ssrInterpolate(outputs.value.hexadecimal || "\u8F6C\u6362\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC")}</pre></div><div class="space-y-4" data-v-8d22320a><div class="flex items-center justify-between" data-v-8d22320a><h2 class="text-lg font-semibold" data-v-8d22320a>JavaScript \u8F6C\u4E49\u5E8F\u5217</h2>`);
      if (outputs.value.javascript) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-8d22320a>${ssrInterpolate(copied.value.javascript ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><pre class="w-full h-32 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-8d22320a>${ssrInterpolate(outputs.value.javascript || "\u8F6C\u6362\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC")}</pre></div></div>`);
      if (unicodeDetails.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6" data-v-8d22320a><h3 class="text-lg font-semibold mb-4" data-v-8d22320a>Unicode \u5B57\u7B26\u8BE6\u60C5</h3><div class="overflow-x-auto" data-v-8d22320a><table class="w-full text-sm" data-v-8d22320a><thead data-v-8d22320a><tr class="border-b" data-v-8d22320a><th class="text-left py-2" data-v-8d22320a>\u5B57\u7B26</th><th class="text-left py-2" data-v-8d22320a>\u540D\u79F0</th><th class="text-left py-2" data-v-8d22320a>\u5341\u8FDB\u5236</th><th class="text-left py-2" data-v-8d22320a>\u5341\u516D\u8FDB\u5236</th><th class="text-left py-2" data-v-8d22320a>UTF-8 \u5B57\u8282</th><th class="text-left py-2" data-v-8d22320a>\u5206\u7C7B</th></tr></thead><tbody data-v-8d22320a><!--[-->`);
        ssrRenderList(unicodeDetails.value, (detail, index) => {
          _push(`<tr class="border-b" data-v-8d22320a><td class="py-2" data-v-8d22320a><span class="text-2xl" data-v-8d22320a>${ssrInterpolate(detail.char)}</span></td><td class="py-2" data-v-8d22320a>${ssrInterpolate(detail.name || "-")}</td><td class="py-2 font-mono" data-v-8d22320a>${ssrInterpolate(detail.decimal)}</td><td class="py-2 font-mono" data-v-8d22320a>U+${ssrInterpolate(detail.hexadecimal.toUpperCase().padStart(4, "0"))}</td><td class="py-2 font-mono" data-v-8d22320a>${ssrInterpolate(detail.utf8.join(" "))}</td><td class="py-2" data-v-8d22320a>${ssrInterpolate(detail.category)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-12 space-y-6" data-v-8d22320a><div class="bg-card rounded-lg p-6" data-v-8d22320a><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-8d22320a>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u6280\u5DE7 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-8d22320a><p data-v-8d22320a>\u2022 \u8F93\u5165\u666E\u901A\u6587\u672C\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8F6C\u6362\u6210\u5404\u79CD\u683C\u5F0F\u7684 Unicode \u8868\u793A</p><p data-v-8d22320a>\u2022 \u8F93\u5165\u7801\u70B9\u65F6\uFF0C\u652F\u6301\u5341\u8FDB\u5236\uFF08\u5982 65\uFF09\u548C\u5341\u516D\u8FDB\u5236\uFF08\u5982 41\uFF09\u683C\u5F0F</p><p data-v-8d22320a>\u2022 \u53EF\u4EE5\u4F7F\u7528\u7A7A\u683C\u3001\u9017\u53F7\u7B49\u5206\u9694\u7B26\u8F93\u5165\u591A\u4E2A\u7801\u70B9</p><p data-v-8d22320a>\u2022 \u652F\u6301\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u7684\u8F6C\u4E49\u5E8F\u5217\u683C\u5F0F</p></div></div><div class="bg-card rounded-lg p-6" data-v-8d22320a><h3 class="text-lg font-semibold mb-4" data-v-8d22320a>\u7F16\u7801\u793A\u4F8B</h3><div class="space-y-4" data-v-8d22320a><div data-v-8d22320a><h4 class="font-medium text-sm mb-2" data-v-8d22320a>\u5E38\u89C1\u5B57\u7B26\u7684 Unicode \u8868\u793A</h4><div class="bg-muted p-3 rounded-lg" data-v-8d22320a><pre class="text-xs font-mono" data-v-8d22320a>A  \u2192 65 (\u5341\u8FDB\u5236) \u2192 U+0041 (\u5341\u516D\u8FDB\u5236) \u2192 \\u0041 (JavaScript)
\u4E2D \u2192 20013 (\u5341\u8FDB\u5236) \u2192 U+4E2D (\u5341\u516D\u8FDB\u5236) \u2192 \\u4E2D (JavaScript)
\u20AC \u2192 8364 (\u5341\u8FDB\u5236) \u2192 U+20AC (\u5341\u516D\u8FDB\u5236) \u2192 \\u20AC (JavaScript)</pre></div></div><div data-v-8d22320a><h4 class="font-medium text-sm mb-2" data-v-8d22320a>\u7F16\u7A0B\u8BED\u8A00\u683C\u5F0F\u5BF9\u6BD4</h4><div class="bg-muted p-3 rounded-lg" data-v-8d22320a><pre class="text-xs font-mono" data-v-8d22320a>JavaScript: \\u4F60\\u597D
Python: \\u4F60\\u597D \u6216 \\U00004F60\\U0000597D
Java: \\u4F60\\u597D
C/C++: \\u4F60\\u597D \u6216 \\U00004F60\\U0000597D</pre></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-8d22320a><h3 class="text-lg font-semibold mb-4" data-v-8d22320a>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-8d22320a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/hex-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-8d22320a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-8d22320a${_scopeId}>\u5341\u516D\u8FDB\u5236\u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-8d22320a${_scopeId}>\u6587\u672C\u4E0E\u5341\u516D\u8FDB\u5236\u4E92\u8F6C</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5341\u516D\u8FDB\u5236\u8F6C\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6587\u672C\u4E0E\u5341\u516D\u8FDB\u5236\u4E92\u8F6C")
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
            _push2(`<div data-v-8d22320a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-8d22320a${_scopeId}>\u4E8C\u8FDB\u5236\u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-8d22320a${_scopeId}>\u6587\u672C\u4E0E\u4E8C\u8FDB\u5236\u4E92\u8F6C</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Type), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u4E8C\u8FDB\u5236\u8F6C\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6587\u672C\u4E0E\u4E8C\u8FDB\u5236\u4E92\u8F6C")
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
            _push2(`<div data-v-8d22320a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-8d22320a${_scopeId}>ASCII \u7801\u8868</p><p class="text-xs text-muted-foreground" data-v-8d22320a${_scopeId}>\u67E5\u770B ASCII \u5B57\u7B26\u96C6</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "ASCII \u7801\u8868"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u67E5\u770B ASCII \u5B57\u7B26\u96C6")
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

export { unicodeConvert as default };
//# sourceMappingURL=unicode-convert-CaJpRd-e.mjs.map
