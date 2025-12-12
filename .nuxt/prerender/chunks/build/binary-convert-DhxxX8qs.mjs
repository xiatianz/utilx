import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
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
  __name: "binary-convert",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const inputType = ref("auto");
    const encoding = ref("utf-8");
    const grouping = ref("8");
    const separator = ref("space");
    const outputs = ref({
      text: "",
      binary: "",
      decimal: "",
      hexadecimal: ""
    });
    const copied = ref({
      text: false,
      binary: false,
      decimal: false,
      hexadecimal: false
    });
    const byteDetails = ref([]);
    const separatorMap = {
      space: " ",
      comma: ",",
      dash: "-",
      newline: "\n",
      none: ""
    };
    const getCharDescription = (code) => {
      if (code === 32) return "\u7A7A\u683C";
      if (code === 10) return "\u6362\u884C";
      if (code === 13) return "\u56DE\u8F66";
      if (code === 9) return "\u5236\u8868\u7B26";
      if (code >= 0 && code <= 31) return "\u63A7\u5236\u5B57\u7B26";
      if (code >= 127) return "\u6269\u5C55\u5B57\u7B26";
      if (code >= 48 && code <= 57) return "\u6570\u5B57";
      if (code >= 65 && code <= 90) return "\u5927\u5199\u5B57\u6BCD";
      if (code >= 97 && code <= 122) return "\u5C0F\u5199\u5B57\u6BCD";
      return "\u53EF\u6253\u5370\u5B57\u7B26";
    };
    const detectInputType = (text) => {
      const cleanText = text.replace(/[^01\s]/g, "").trim();
      if (cleanText.length > 0 && /^[01\s]+$/.test(text)) {
        const binaryCount = text.replace(/\s/g, "").length;
        if (binaryCount % 8 === 0) {
          return "binary";
        }
      }
      return "text";
    };
    const textToBinary = (text, enc, group, sep) => {
      let binaryBits = [];
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const code = char.charCodeAt(0);
        if (enc === "utf-8") {
          if (code <= 127) {
            binaryBits.push(code.toString(2).padStart(8, "0"));
          } else if (code <= 2047) {
            binaryBits.push(
              (192 | code >> 6).toString(2).padStart(8, "0"),
              (128 | code & 63).toString(2).padStart(8, "0")
            );
          } else if (code <= 65535) {
            binaryBits.push(
              (224 | code >> 12).toString(2).padStart(8, "0"),
              (128 | code >> 6 & 63).toString(2).padStart(8, "0"),
              (128 | code & 63).toString(2).padStart(8, "0")
            );
          } else {
            binaryBits.push(
              (240 | code >> 18).toString(2).padStart(8, "0"),
              (128 | code >> 12 & 63).toString(2).padStart(8, "0"),
              (128 | code >> 6 & 63).toString(2).padStart(8, "0"),
              (128 | code & 63).toString(2).padStart(8, "0")
            );
          }
        } else if (enc === "utf-16") {
          if (i === 0) {
            binaryBits.push("11111110", "00000000");
          }
          binaryBits.push(
            (code >> 8).toString(2).padStart(8, "0"),
            (code & 255).toString(2).padStart(8, "0")
          );
        } else if (enc === "utf-16le") {
          binaryBits.push(
            (code & 255).toString(2).padStart(8, "0"),
            (code >> 8).toString(2).padStart(8, "0")
          );
        } else if (enc === "utf-16be") {
          binaryBits.push(
            (code >> 8).toString(2).padStart(8, "0"),
            (code & 255).toString(2).padStart(8, "0")
          );
        } else if (enc === "ascii") {
          binaryBits.push((code <= 127 ? code : 63).toString(2).padStart(8, "0"));
        }
      }
      let binaryString = binaryBits.join("");
      if (group !== "none") {
        const groupSize = parseInt(group);
        const groups = [];
        for (let i = 0; i < binaryString.length; i += groupSize) {
          groups.push(binaryString.substring(i, i + groupSize));
        }
        binaryString = groups.join(separatorMap[sep]);
      }
      return binaryString;
    };
    const binaryToText = (binaryText, enc) => {
      const cleanBinary = binaryText.replace(/[^01]/g, "");
      if (cleanBinary.length % 8 !== 0) {
        return "\u9519\u8BEF\uFF1A\u4E8C\u8FDB\u5236\u957F\u5EA6\u5FC5\u987B\u662F8\u7684\u500D\u6570";
      }
      const bytes = [];
      for (let i2 = 0; i2 < cleanBinary.length; i2 += 8) {
        bytes.push(parseInt(cleanBinary.substr(i2, 8), 2));
      }
      let text = "";
      let i = 0;
      if (enc === "utf-16" && bytes.length >= 2) {
        if (bytes[0] === 254 && bytes[1] === 255) {
          i = 2;
          while (i < bytes.length - 1) {
            const charCode = bytes[i] << 8 | bytes[i + 1];
            text += String.fromCharCode(charCode);
            i += 2;
          }
        } else if (bytes[0] === 255 && bytes[1] === 254) {
          i = 2;
          while (i < bytes.length - 1) {
            const charCode = bytes[i] | bytes[i + 1] << 8;
            text += String.fromCharCode(charCode);
            i += 2;
          }
        }
      } else if (enc === "utf-16le") {
        while (i < bytes.length - 1) {
          const charCode = bytes[i] | bytes[i + 1] << 8;
          text += String.fromCharCode(charCode);
          i += 2;
        }
      } else if (enc === "utf-16be") {
        while (i < bytes.length - 1) {
          const charCode = bytes[i] << 8 | bytes[i + 1];
          text += String.fromCharCode(charCode);
          i += 2;
        }
      } else if (enc === "ascii") {
        text = bytes.map((byte) => byte <= 127 ? String.fromCharCode(byte) : "?").join("");
      } else {
        while (i < bytes.length) {
          if (bytes[i] <= 127) {
            text += String.fromCharCode(bytes[i]);
            i++;
          } else if (bytes[i] <= 223) {
            if (i + 1 < bytes.length) {
              const charCode = (bytes[i] & 31) << 6 | bytes[i + 1] & 63;
              text += String.fromCharCode(charCode);
              i += 2;
            } else {
              i++;
            }
          } else if (bytes[i] <= 239) {
            if (i + 2 < bytes.length) {
              const charCode = (bytes[i] & 15) << 12 | (bytes[i + 1] & 63) << 6 | bytes[i + 2] & 63;
              text += String.fromCharCode(charCode);
              i += 3;
            } else {
              i++;
            }
          } else {
            if (i + 3 < bytes.length) {
              const charCode = (bytes[i] & 7) << 18 | (bytes[i + 1] & 63) << 12 | (bytes[i + 2] & 63) << 6 | bytes[i + 3] & 63;
              text += String.fromCodePoint(charCode);
              i += 4;
            } else {
              i++;
            }
          }
        }
      }
      return text;
    };
    const generateByteDetails = (text) => {
      const details = [];
      for (let i = 0; i < text.length && i < 20; i++) {
        const char = text[i];
        const code = char.charCodeAt(0);
        if (code <= 127) {
          const byte = code;
          details.push({
            position: i + 1,
            char,
            binary: byte.toString(2).padStart(8, "0"),
            octal: byte.toString(8).padStart(3, "0"),
            decimal: byte,
            hexadecimal: byte.toString(16).padStart(2, "0"),
            description: getCharDescription(byte)
          });
        } else {
          const utf8Bytes = [];
          if (code <= 2047) {
            utf8Bytes.push(192 | code >> 6, 128 | code & 63);
          } else if (code <= 65535) {
            utf8Bytes.push(224 | code >> 12, 128 | code >> 6 & 63, 128 | code & 63);
          } else {
            utf8Bytes.push(
              240 | code >> 18,
              128 | code >> 12 & 63,
              128 | code >> 6 & 63,
              128 | code & 63
            );
          }
          details.push({
            position: i + 1,
            char,
            binary: utf8Bytes[0].toString(2).padStart(8, "0"),
            octal: utf8Bytes[0].toString(8).padStart(3, "0"),
            decimal: utf8Bytes[0],
            hexadecimal: utf8Bytes[0].toString(16).padStart(2, "0"),
            description: "\u591A\u5B57\u8282\u5B57\u7B26"
          });
        }
      }
      return details;
    };
    const convert = () => {
      if (!inputText.value) {
        outputs.value = {
          text: "",
          binary: "",
          decimal: "",
          hexadecimal: ""
        };
        byteDetails.value = [];
        return;
      }
      const actualInputType = inputType.value === "auto" ? detectInputType(inputText.value) : inputType.value;
      if (actualInputType === "text") {
        const binary = textToBinary(inputText.value, encoding.value, grouping.value, separator.value);
        outputs.value.text = inputText.value;
        outputs.value.binary = binary;
        const cleanBinary = binary.replace(/[^01]/g, "");
        const decimalBytes = [];
        const hexBytes = [];
        for (let i = 0; i < cleanBinary.length; i += 8) {
          const byte = parseInt(cleanBinary.substr(i, 8), 2);
          decimalBytes.push(byte);
          hexBytes.push(byte.toString(16).padStart(2, "0"));
        }
        outputs.value.decimal = decimalBytes.join(separatorMap[separator.value === "none" ? "space" : separator.value]);
        outputs.value.hexadecimal = hexBytes.join(separatorMap[separator.value === "none" ? "space" : separator.value]);
        byteDetails.value = generateByteDetails(inputText.value);
      } else {
        const text = binaryToText(inputText.value, encoding.value);
        outputs.value.binary = inputText.value;
        outputs.value.text = text;
        const cleanBinary = inputText.value.replace(/[^01]/g, "");
        const decimalBytes = [];
        const hexBytes = [];
        for (let i = 0; i < cleanBinary.length; i += 8) {
          const byte = parseInt(cleanBinary.substr(i, 8), 2);
          decimalBytes.push(byte);
          hexBytes.push(byte.toString(16).padStart(2, "0"));
        }
        outputs.value.decimal = decimalBytes.join(separatorMap[separator.value === "none" ? "space" : separator.value]);
        outputs.value.hexadecimal = hexBytes.join(separatorMap[separator.value === "none" ? "space" : separator.value]);
        byteDetails.value = generateByteDetails(text);
      }
    };
    watch([inputText, inputType, encoding, grouping, separator], () => {
      convert();
    });
    useSeoMeta({
      title: "\u4E8C\u8FDB\u5236\u8F6C\u6362\u5668 - \u5728\u7EBF\u6587\u672C\u4E0E\u4E8C\u8FDB\u5236\u4E92\u8F6C\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u4E8C\u8FDB\u5236\u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u6587\u672C\u4E0E\u4E8C\u8FDB\u5236\u76F8\u4E92\u8F6C\u6362\uFF0C\u652F\u6301\u591A\u79CD\u7F16\u7801\u683C\u5F0F\u548C\u5206\u7EC4\u663E\u793A\u3002",
      keywords: ["binary", "\u4E8C\u8FDB\u5236", "converter", "\u7F16\u7801", "utf-8", "ascii", "\u5728\u7EBF\u5DE5\u5177", "\u7F16\u7801\u8F6C\u6362"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-2061c4cf><div class="mt-4 mb-8" data-v-2061c4cf><h1 class="text-3xl font-bold mb-3" data-v-2061c4cf>\u4E8C\u8FDB\u5236\u8F6C\u6362\u5668</h1><p class="text-muted-foreground" data-v-2061c4cf>\u5728\u6587\u672C\u548C\u4E8C\u8FDB\u5236\u4E4B\u95F4\u76F8\u4E92\u8F6C\u6362\uFF0C\u652F\u6301\u591A\u79CD\u7F16\u7801\u683C\u5F0F\u548C\u5206\u7EC4\u663E\u793A</p></div><div class="space-y-6" data-v-2061c4cf><div class="space-y-4" data-v-2061c4cf><div class="flex items-center justify-between" data-v-2061c4cf><h2 class="text-lg font-semibold" data-v-2061c4cf>\u8F93\u5165\u5185\u5BB9</h2><div class="flex gap-2" data-v-2061c4cf><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf> \u6E05\u7A7A </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf> \u7C98\u8D34 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf> \u793A\u4F8B </button></div></div><div class="relative" data-v-2061c4cf><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u8F6C\u6362\u7684\u6587\u672C\u6216\u4E8C\u8FDB\u5236\u6570\u636E..." class="w-full h-48 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm" data-v-2061c4cf>${ssrInterpolate(inputText.value)}</textarea>`);
      if (inputText.value) {
        _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-2061c4cf>${ssrInterpolate(inputType.value === "text" ? inputText.value.length + " \u5B57\u7B26" : Math.floor(inputText.value.replace(/\s/g, "").length / 8) + " \u5B57\u8282")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-wrap gap-4" data-v-2061c4cf><div class="flex items-center gap-2" data-v-2061c4cf><label class="text-sm font-medium" data-v-2061c4cf>\u8F93\u5165\u7C7B\u578B:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-2061c4cf><option value="text" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "text") : ssrLooseEqual(inputType.value, "text")) ? " selected" : ""}>\u6587\u672C</option><option value="binary" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "binary") : ssrLooseEqual(inputType.value, "binary")) ? " selected" : ""}>\u4E8C\u8FDB\u5236</option><option value="auto" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "auto") : ssrLooseEqual(inputType.value, "auto")) ? " selected" : ""}>\u81EA\u52A8\u68C0\u6D4B</option></select></div><div class="flex items-center gap-2" data-v-2061c4cf><label class="text-sm font-medium" data-v-2061c4cf>\u7F16\u7801\u683C\u5F0F:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-2061c4cf><option value="utf-8" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "utf-8") : ssrLooseEqual(encoding.value, "utf-8")) ? " selected" : ""}>UTF-8</option><option value="utf-16" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "utf-16") : ssrLooseEqual(encoding.value, "utf-16")) ? " selected" : ""}>UTF-16</option><option value="utf-16le" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "utf-16le") : ssrLooseEqual(encoding.value, "utf-16le")) ? " selected" : ""}>UTF-16LE</option><option value="utf-16be" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "utf-16be") : ssrLooseEqual(encoding.value, "utf-16be")) ? " selected" : ""}>UTF-16BE</option><option value="ascii" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "ascii") : ssrLooseEqual(encoding.value, "ascii")) ? " selected" : ""}>ASCII</option></select></div><div class="flex items-center gap-2" data-v-2061c4cf><label class="text-sm font-medium" data-v-2061c4cf>\u5206\u7EC4\u65B9\u5F0F:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-2061c4cf><option value="none" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(grouping.value) ? ssrLooseContain(grouping.value, "none") : ssrLooseEqual(grouping.value, "none")) ? " selected" : ""}>\u65E0</option><option value="4" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(grouping.value) ? ssrLooseContain(grouping.value, "4") : ssrLooseEqual(grouping.value, "4")) ? " selected" : ""}>4\u4F4D</option><option value="8" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(grouping.value) ? ssrLooseContain(grouping.value, "8") : ssrLooseEqual(grouping.value, "8")) ? " selected" : ""}>8\u4F4D\uFF08\u5B57\u8282\uFF09</option><option value="16" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(grouping.value) ? ssrLooseContain(grouping.value, "16") : ssrLooseEqual(grouping.value, "16")) ? " selected" : ""}>16\u4F4D</option><option value="32" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(grouping.value) ? ssrLooseContain(grouping.value, "32") : ssrLooseEqual(grouping.value, "32")) ? " selected" : ""}>32\u4F4D</option></select></div><div class="flex items-center gap-2" data-v-2061c4cf><label class="text-sm font-medium" data-v-2061c4cf>\u5206\u9694\u7B26:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-2061c4cf><option value="space" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "space") : ssrLooseEqual(separator.value, "space")) ? " selected" : ""}>\u7A7A\u683C</option><option value="comma" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "comma") : ssrLooseEqual(separator.value, "comma")) ? " selected" : ""}>\u9017\u53F7</option><option value="dash" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "dash") : ssrLooseEqual(separator.value, "dash")) ? " selected" : ""}>\u6A2A\u7EBF</option><option value="newline" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "newline") : ssrLooseEqual(separator.value, "newline")) ? " selected" : ""}>\u6362\u884C</option><option value="none" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "none") : ssrLooseEqual(separator.value, "none")) ? " selected" : ""}>\u65E0</option></select></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-2061c4cf><div class="space-y-4" data-v-2061c4cf><div class="flex items-center justify-between" data-v-2061c4cf><h2 class="text-lg font-semibold" data-v-2061c4cf>\u6587\u672C\u7ED3\u679C</h2><div class="flex gap-2" data-v-2061c4cf>`);
      if (outputs.value.text) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf>${ssrInterpolate(copied.value.text ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.text) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf> \u4E0B\u8F7D </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><pre class="w-full h-48 p-4 bg-muted rounded-lg overflow-auto text-sm whitespace-pre-wrap break-all" data-v-2061c4cf>${ssrInterpolate(outputs.value.text || "\u8F6C\u6362\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC")}</pre></div><div class="space-y-4" data-v-2061c4cf><div class="flex items-center justify-between" data-v-2061c4cf><h2 class="text-lg font-semibold" data-v-2061c4cf>\u4E8C\u8FDB\u5236\u7ED3\u679C</h2><div class="flex gap-2" data-v-2061c4cf>`);
      if (outputs.value.binary) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf>${ssrInterpolate(copied.value.binary ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.binary) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf> \u4E0B\u8F7D </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><pre class="w-full h-48 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-2061c4cf>${ssrInterpolate(outputs.value.binary || "\u8F6C\u6362\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC")}</pre></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-2061c4cf><div class="space-y-4" data-v-2061c4cf><div class="flex items-center justify-between" data-v-2061c4cf><h2 class="text-lg font-semibold" data-v-2061c4cf>\u5341\u8FDB\u5236\u8868\u793A</h2>`);
      if (outputs.value.decimal) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf>${ssrInterpolate(copied.value.decimal ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><pre class="w-full h-32 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-2061c4cf>${ssrInterpolate(outputs.value.decimal || "\u5341\u8FDB\u5236\u8868\u793A\u5C06\u663E\u793A\u5728\u8FD9\u91CC")}</pre></div><div class="space-y-4" data-v-2061c4cf><div class="flex items-center justify-between" data-v-2061c4cf><h2 class="text-lg font-semibold" data-v-2061c4cf>\u5341\u516D\u8FDB\u5236\u8868\u793A</h2>`);
      if (outputs.value.hexadecimal) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf>${ssrInterpolate(copied.value.hexadecimal ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><pre class="w-full h-32 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-2061c4cf>${ssrInterpolate(outputs.value.hexadecimal || "\u5341\u516D\u8FDB\u5236\u8868\u793A\u5C06\u663E\u793A\u5728\u8FD9\u91CC")}</pre></div></div>`);
      if (byteDetails.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6" data-v-2061c4cf><h3 class="text-lg font-semibold mb-4" data-v-2061c4cf>\u5B57\u8282\u8BE6\u60C5</h3><div class="overflow-x-auto" data-v-2061c4cf><table class="w-full text-sm" data-v-2061c4cf><thead data-v-2061c4cf><tr class="border-b" data-v-2061c4cf><th class="text-left py-2" data-v-2061c4cf>\u4F4D\u7F6E</th><th class="text-left py-2" data-v-2061c4cf>\u5B57\u7B26</th><th class="text-left py-2" data-v-2061c4cf>\u4E8C\u8FDB\u5236</th><th class="text-left py-2" data-v-2061c4cf>\u516B\u8FDB\u5236</th><th class="text-left py-2" data-v-2061c4cf>\u5341\u8FDB\u5236</th><th class="text-left py-2" data-v-2061c4cf>\u5341\u516D\u8FDB\u5236</th><th class="text-left py-2" data-v-2061c4cf>\u63CF\u8FF0</th></tr></thead><tbody data-v-2061c4cf><!--[-->`);
        ssrRenderList(byteDetails.value, (detail, index) => {
          _push(`<tr class="border-b" data-v-2061c4cf><td class="py-2" data-v-2061c4cf>${ssrInterpolate(detail.position)}</td><td class="py-2" data-v-2061c4cf>${ssrInterpolate(detail.char === " " ? "\u7A7A\u683C" : detail.char)}</td><td class="py-2 font-mono" data-v-2061c4cf>${ssrInterpolate(detail.binary)}</td><td class="py-2 font-mono" data-v-2061c4cf>${ssrInterpolate(detail.octal)}</td><td class="py-2 font-mono" data-v-2061c4cf>${ssrInterpolate(detail.decimal)}</td><td class="py-2 font-mono" data-v-2061c4cf>${ssrInterpolate(detail.hexadecimal.toUpperCase())}</td><td class="py-2" data-v-2061c4cf>${ssrInterpolate(detail.description)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-12 space-y-6" data-v-2061c4cf><div class="bg-card rounded-lg p-6" data-v-2061c4cf><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-2061c4cf>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u6280\u5DE7 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-2061c4cf><p data-v-2061c4cf>\u2022 \u652F\u6301\u81EA\u52A8\u68C0\u6D4B\u8F93\u5165\u7C7B\u578B\uFF0C\u667A\u80FD\u5224\u65AD\u662F\u6587\u672C\u8FD8\u662F\u4E8C\u8FDB\u5236</p><p data-v-2061c4cf>\u2022 \u652F\u6301\u591A\u79CD\u5206\u7EC4\u65B9\u5F0F\uFF1A4\u4F4D\u30018\u4F4D\uFF08\u5B57\u8282\uFF09\u300116\u4F4D\u300132\u4F4D</p><p data-v-2061c4cf>\u2022 \u652F\u6301\u591A\u79CD\u7F16\u7801\u683C\u5F0F\uFF1AUTF-8\u3001UTF-16\u3001ASCII \u7B49</p><p data-v-2061c4cf>\u2022 \u540C\u65F6\u663E\u793A\u5341\u8FDB\u5236\u548C\u5341\u516D\u8FDB\u5236\u8868\u793A\uFF0C\u65B9\u4FBF\u7406\u89E3</p></div></div><div class="bg-card rounded-lg p-6" data-v-2061c4cf><h3 class="text-lg font-semibold mb-4" data-v-2061c4cf>\u7F16\u7801\u793A\u4F8B</h3><div class="space-y-4" data-v-2061c4cf><div data-v-2061c4cf><h4 class="font-medium text-sm mb-2" data-v-2061c4cf>\u6587\u672C\u8F6C\u4E8C\u8FDB\u5236</h4><div class="bg-muted p-3 rounded-lg" data-v-2061c4cf><pre class="text-xs font-mono" data-v-2061c4cf>\u8F93\u5165: A
ASCII:    01000001
UTF-8:     01000001</pre></div></div><div data-v-2061c4cf><h4 class="font-medium text-sm mb-2" data-v-2061c4cf>\u4E2D\u6587\u8F6C\u4E8C\u8FDB\u5236\uFF08UTF-8\uFF09</h4><div class="bg-muted p-3 rounded-lg" data-v-2061c4cf><pre class="text-xs font-mono" data-v-2061c4cf>\u8F93\u5165: \u4E2D
UTF-8:     11100100 10111000 10101101
          (E4)     (B8)     (AD)</pre></div></div><div data-v-2061c4cf><h4 class="font-medium text-sm mb-2" data-v-2061c4cf>\u4E8C\u8FDB\u5236\u8F6C\u6587\u672C</h4><div class="bg-muted p-3 rounded-lg" data-v-2061c4cf><pre class="text-xs font-mono" data-v-2061c4cf>\u8F93\u5165: 01001000 01100101 01101100 01101100 01101111
\u8F93\u51FA: Hello</pre></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-2061c4cf><h3 class="text-lg font-semibold mb-4" data-v-2061c4cf>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-2061c4cf>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/hex-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-2061c4cf${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2061c4cf${_scopeId}>\u5341\u516D\u8FDB\u5236\u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-2061c4cf${_scopeId}>\u6587\u672C\u4E0E\u5341\u516D\u8FDB\u5236\u4E92\u8F6C</p></div>`);
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
        to: "/tools/unicode-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Type), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-2061c4cf${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2061c4cf${_scopeId}>Unicode \u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-2061c4cf${_scopeId}>Unicode \u7F16\u7801\u8F6C\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Type), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Unicode \u8F6C\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Unicode \u7F16\u7801\u8F6C\u6362")
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
            _push2(`<div data-v-2061c4cf${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2061c4cf${_scopeId}>ASCII \u7801\u8868</p><p class="text-xs text-muted-foreground" data-v-2061c4cf${_scopeId}>\u67E5\u770B ASCII \u5B57\u7B26\u96C6</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/binary-convert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const binaryConvert = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2061c4cf"]]);

export { binaryConvert as default };
//# sourceMappingURL=binary-convert-DhxxX8qs.mjs.map
