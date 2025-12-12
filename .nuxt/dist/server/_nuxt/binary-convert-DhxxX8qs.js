import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
      if (code === 32) return "空格";
      if (code === 10) return "换行";
      if (code === 13) return "回车";
      if (code === 9) return "制表符";
      if (code >= 0 && code <= 31) return "控制字符";
      if (code >= 127) return "扩展字符";
      if (code >= 48 && code <= 57) return "数字";
      if (code >= 65 && code <= 90) return "大写字母";
      if (code >= 97 && code <= 122) return "小写字母";
      return "可打印字符";
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
        return "错误：二进制长度必须是8的倍数";
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
            description: "多字节字符"
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
      title: "二进制转换器 - 在线文本与二进制互转工具",
      description: "免费在线二进制转换工具，支持文本与二进制相互转换，支持多种编码格式和分组显示。",
      keywords: ["binary", "二进制", "converter", "编码", "utf-8", "ascii", "在线工具", "编码转换"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-2061c4cf><div class="mt-4 mb-8" data-v-2061c4cf><h1 class="text-3xl font-bold mb-3" data-v-2061c4cf>二进制转换器</h1><p class="text-muted-foreground" data-v-2061c4cf>在文本和二进制之间相互转换，支持多种编码格式和分组显示</p></div><div class="space-y-6" data-v-2061c4cf><div class="space-y-4" data-v-2061c4cf><div class="flex items-center justify-between" data-v-2061c4cf><h2 class="text-lg font-semibold" data-v-2061c4cf>输入内容</h2><div class="flex gap-2" data-v-2061c4cf><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf> 清空 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf> 粘贴 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf> 示例 </button></div></div><div class="relative" data-v-2061c4cf><textarea placeholder="请输入要转换的文本或二进制数据..." class="w-full h-48 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm" data-v-2061c4cf>${ssrInterpolate(inputText.value)}</textarea>`);
      if (inputText.value) {
        _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-2061c4cf>${ssrInterpolate(inputType.value === "text" ? inputText.value.length + " 字符" : Math.floor(inputText.value.replace(/\s/g, "").length / 8) + " 字节")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-wrap gap-4" data-v-2061c4cf><div class="flex items-center gap-2" data-v-2061c4cf><label class="text-sm font-medium" data-v-2061c4cf>输入类型:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-2061c4cf><option value="text" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "text") : ssrLooseEqual(inputType.value, "text")) ? " selected" : ""}>文本</option><option value="binary" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "binary") : ssrLooseEqual(inputType.value, "binary")) ? " selected" : ""}>二进制</option><option value="auto" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "auto") : ssrLooseEqual(inputType.value, "auto")) ? " selected" : ""}>自动检测</option></select></div><div class="flex items-center gap-2" data-v-2061c4cf><label class="text-sm font-medium" data-v-2061c4cf>编码格式:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-2061c4cf><option value="utf-8" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "utf-8") : ssrLooseEqual(encoding.value, "utf-8")) ? " selected" : ""}>UTF-8</option><option value="utf-16" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "utf-16") : ssrLooseEqual(encoding.value, "utf-16")) ? " selected" : ""}>UTF-16</option><option value="utf-16le" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "utf-16le") : ssrLooseEqual(encoding.value, "utf-16le")) ? " selected" : ""}>UTF-16LE</option><option value="utf-16be" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "utf-16be") : ssrLooseEqual(encoding.value, "utf-16be")) ? " selected" : ""}>UTF-16BE</option><option value="ascii" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "ascii") : ssrLooseEqual(encoding.value, "ascii")) ? " selected" : ""}>ASCII</option></select></div><div class="flex items-center gap-2" data-v-2061c4cf><label class="text-sm font-medium" data-v-2061c4cf>分组方式:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-2061c4cf><option value="none" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(grouping.value) ? ssrLooseContain(grouping.value, "none") : ssrLooseEqual(grouping.value, "none")) ? " selected" : ""}>无</option><option value="4" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(grouping.value) ? ssrLooseContain(grouping.value, "4") : ssrLooseEqual(grouping.value, "4")) ? " selected" : ""}>4位</option><option value="8" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(grouping.value) ? ssrLooseContain(grouping.value, "8") : ssrLooseEqual(grouping.value, "8")) ? " selected" : ""}>8位（字节）</option><option value="16" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(grouping.value) ? ssrLooseContain(grouping.value, "16") : ssrLooseEqual(grouping.value, "16")) ? " selected" : ""}>16位</option><option value="32" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(grouping.value) ? ssrLooseContain(grouping.value, "32") : ssrLooseEqual(grouping.value, "32")) ? " selected" : ""}>32位</option></select></div><div class="flex items-center gap-2" data-v-2061c4cf><label class="text-sm font-medium" data-v-2061c4cf>分隔符:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-2061c4cf><option value="space" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "space") : ssrLooseEqual(separator.value, "space")) ? " selected" : ""}>空格</option><option value="comma" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "comma") : ssrLooseEqual(separator.value, "comma")) ? " selected" : ""}>逗号</option><option value="dash" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "dash") : ssrLooseEqual(separator.value, "dash")) ? " selected" : ""}>横线</option><option value="newline" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "newline") : ssrLooseEqual(separator.value, "newline")) ? " selected" : ""}>换行</option><option value="none" data-v-2061c4cf${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "none") : ssrLooseEqual(separator.value, "none")) ? " selected" : ""}>无</option></select></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-2061c4cf><div class="space-y-4" data-v-2061c4cf><div class="flex items-center justify-between" data-v-2061c4cf><h2 class="text-lg font-semibold" data-v-2061c4cf>文本结果</h2><div class="flex gap-2" data-v-2061c4cf>`);
      if (outputs.value.text) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf>${ssrInterpolate(copied.value.text ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.text) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><pre class="w-full h-48 p-4 bg-muted rounded-lg overflow-auto text-sm whitespace-pre-wrap break-all" data-v-2061c4cf>${ssrInterpolate(outputs.value.text || "转换结果将显示在这里")}</pre></div><div class="space-y-4" data-v-2061c4cf><div class="flex items-center justify-between" data-v-2061c4cf><h2 class="text-lg font-semibold" data-v-2061c4cf>二进制结果</h2><div class="flex gap-2" data-v-2061c4cf>`);
      if (outputs.value.binary) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf>${ssrInterpolate(copied.value.binary ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.binary) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><pre class="w-full h-48 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-2061c4cf>${ssrInterpolate(outputs.value.binary || "转换结果将显示在这里")}</pre></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-2061c4cf><div class="space-y-4" data-v-2061c4cf><div class="flex items-center justify-between" data-v-2061c4cf><h2 class="text-lg font-semibold" data-v-2061c4cf>十进制表示</h2>`);
      if (outputs.value.decimal) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf>${ssrInterpolate(copied.value.decimal ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><pre class="w-full h-32 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-2061c4cf>${ssrInterpolate(outputs.value.decimal || "十进制表示将显示在这里")}</pre></div><div class="space-y-4" data-v-2061c4cf><div class="flex items-center justify-between" data-v-2061c4cf><h2 class="text-lg font-semibold" data-v-2061c4cf>十六进制表示</h2>`);
      if (outputs.value.hexadecimal) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2061c4cf>${ssrInterpolate(copied.value.hexadecimal ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><pre class="w-full h-32 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-2061c4cf>${ssrInterpolate(outputs.value.hexadecimal || "十六进制表示将显示在这里")}</pre></div></div>`);
      if (byteDetails.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6" data-v-2061c4cf><h3 class="text-lg font-semibold mb-4" data-v-2061c4cf>字节详情</h3><div class="overflow-x-auto" data-v-2061c4cf><table class="w-full text-sm" data-v-2061c4cf><thead data-v-2061c4cf><tr class="border-b" data-v-2061c4cf><th class="text-left py-2" data-v-2061c4cf>位置</th><th class="text-left py-2" data-v-2061c4cf>字符</th><th class="text-left py-2" data-v-2061c4cf>二进制</th><th class="text-left py-2" data-v-2061c4cf>八进制</th><th class="text-left py-2" data-v-2061c4cf>十进制</th><th class="text-left py-2" data-v-2061c4cf>十六进制</th><th class="text-left py-2" data-v-2061c4cf>描述</th></tr></thead><tbody data-v-2061c4cf><!--[-->`);
        ssrRenderList(byteDetails.value, (detail, index) => {
          _push(`<tr class="border-b" data-v-2061c4cf><td class="py-2" data-v-2061c4cf>${ssrInterpolate(detail.position)}</td><td class="py-2" data-v-2061c4cf>${ssrInterpolate(detail.char === " " ? "空格" : detail.char)}</td><td class="py-2 font-mono" data-v-2061c4cf>${ssrInterpolate(detail.binary)}</td><td class="py-2 font-mono" data-v-2061c4cf>${ssrInterpolate(detail.octal)}</td><td class="py-2 font-mono" data-v-2061c4cf>${ssrInterpolate(detail.decimal)}</td><td class="py-2 font-mono" data-v-2061c4cf>${ssrInterpolate(detail.hexadecimal.toUpperCase())}</td><td class="py-2" data-v-2061c4cf>${ssrInterpolate(detail.description)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-12 space-y-6" data-v-2061c4cf><div class="bg-card rounded-lg p-6" data-v-2061c4cf><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-2061c4cf>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用技巧 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-2061c4cf><p data-v-2061c4cf>• 支持自动检测输入类型，智能判断是文本还是二进制</p><p data-v-2061c4cf>• 支持多种分组方式：4位、8位（字节）、16位、32位</p><p data-v-2061c4cf>• 支持多种编码格式：UTF-8、UTF-16、ASCII 等</p><p data-v-2061c4cf>• 同时显示十进制和十六进制表示，方便理解</p></div></div><div class="bg-card rounded-lg p-6" data-v-2061c4cf><h3 class="text-lg font-semibold mb-4" data-v-2061c4cf>编码示例</h3><div class="space-y-4" data-v-2061c4cf><div data-v-2061c4cf><h4 class="font-medium text-sm mb-2" data-v-2061c4cf>文本转二进制</h4><div class="bg-muted p-3 rounded-lg" data-v-2061c4cf><pre class="text-xs font-mono" data-v-2061c4cf>输入: A
ASCII:    01000001
UTF-8:     01000001</pre></div></div><div data-v-2061c4cf><h4 class="font-medium text-sm mb-2" data-v-2061c4cf>中文转二进制（UTF-8）</h4><div class="bg-muted p-3 rounded-lg" data-v-2061c4cf><pre class="text-xs font-mono" data-v-2061c4cf>输入: 中
UTF-8:     11100100 10111000 10101101
          (E4)     (B8)     (AD)</pre></div></div><div data-v-2061c4cf><h4 class="font-medium text-sm mb-2" data-v-2061c4cf>二进制转文本</h4><div class="bg-muted p-3 rounded-lg" data-v-2061c4cf><pre class="text-xs font-mono" data-v-2061c4cf>输入: 01001000 01100101 01101100 01101100 01101111
输出: Hello</pre></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-2061c4cf><h3 class="text-lg font-semibold mb-4" data-v-2061c4cf>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-2061c4cf>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/hex-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-2061c4cf${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2061c4cf${_scopeId}>十六进制转换</p><p class="text-xs text-muted-foreground" data-v-2061c4cf${_scopeId}>文本与十六进制互转</p></div>`);
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
        to: "/tools/unicode-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Type), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-2061c4cf${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2061c4cf${_scopeId}>Unicode 转换</p><p class="text-xs text-muted-foreground" data-v-2061c4cf${_scopeId}>Unicode 编码转换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Type), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Unicode 转换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Unicode 编码转换")
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
            _push2(`<div data-v-2061c4cf${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2061c4cf${_scopeId}>ASCII 码表</p><p class="text-xs text-muted-foreground" data-v-2061c4cf${_scopeId}>查看 ASCII 字符集</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/binary-convert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const binaryConvert = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2061c4cf"]]);
export {
  binaryConvert as default
};
//# sourceMappingURL=binary-convert-DhxxX8qs.js.map
