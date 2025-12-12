import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { Zap, Type, ArrowRight, Hash, FileText } from "lucide-vue-next";
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
  __name: "hex-convert",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const inputType = ref("auto");
    const encoding = ref("utf-8");
    const separator = ref("space");
    const hexCase = ref("upper");
    const outputs = ref({
      text: "",
      hex: "",
      binary: ""
    });
    const copied = ref({
      text: false,
      hex: false,
      binary: false
    });
    const byteDetails = ref([]);
    const separatorMap = {
      none: "",
      space: " ",
      comma: ",",
      colon: ":",
      dash: "-",
      newline: "\n"
    };
    const detectInputType = (text) => {
      const cleanText = text.replace(/[\s:,-]/g, "");
      const hexRegex = /^[0-9A-Fa-f]+$/;
      if (cleanText.length > 0 && hexRegex.test(cleanText) && cleanText.length % 2 === 0) {
        return "hex";
      }
      return "text";
    };
    const textToHex = (text, enc, sep, casing) => {
      let hexBytes = [];
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const code = char.charCodeAt(0);
        if (enc === "utf-8") {
          if (code <= 127) {
            hexBytes.push(code);
          } else if (code <= 2047) {
            hexBytes.push(192 | code >> 6);
            hexBytes.push(128 | code & 63);
          } else if (code <= 65535) {
            hexBytes.push(224 | code >> 12);
            hexBytes.push(128 | code >> 6 & 63);
            hexBytes.push(128 | code & 63);
          } else {
            hexBytes.push(240 | code >> 18);
            hexBytes.push(128 | code >> 12 & 63);
            hexBytes.push(128 | code >> 6 & 63);
            hexBytes.push(128 | code & 63);
          }
        } else if (enc === "utf-16") {
          if (i === 0) {
            hexBytes.push(254, 255);
          }
          hexBytes.push(code >> 8 & 255);
          hexBytes.push(code & 255);
        } else if (enc === "utf-16le") {
          hexBytes.push(code & 255);
          hexBytes.push(code >> 8 & 255);
        } else if (enc === "utf-16be") {
          hexBytes.push(code >> 8 & 255);
          hexBytes.push(code & 255);
        } else if (enc === "ascii") {
          hexBytes.push(code <= 127 ? code : 63);
        }
      }
      const sepStr = separatorMap[sep];
      const hexStr = hexBytes.map((byte) => {
        const hex = byte.toString(16).padStart(2, "0");
        return casing === "upper" ? hex.toUpperCase() : hex.toLowerCase();
      }).join(sepStr);
      return hexStr;
    };
    const hexToText = (hexText, enc) => {
      const cleanHex = hexText.replace(/[\s:,-]/g, "");
      if (!/^[0-9A-Fa-f]+$/.test(cleanHex)) {
        return "无效的十六进制格式";
      }
      const bytes = [];
      for (let i2 = 0; i2 < cleanHex.length; i2 += 2) {
        bytes.push(parseInt(cleanHex.substr(i2, 2), 16));
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
        const utf8Bytes = [];
        if (code <= 127) {
          utf8Bytes.push(code);
        } else if (code <= 2047) {
          utf8Bytes.push(192 | code >> 6);
          utf8Bytes.push(128 | code & 63);
        } else if (code <= 65535) {
          utf8Bytes.push(224 | code >> 12);
          utf8Bytes.push(128 | code >> 6 & 63);
          utf8Bytes.push(128 | code & 63);
        } else {
          utf8Bytes.push(240 | code >> 18);
          utf8Bytes.push(128 | code >> 12 & 63);
          utf8Bytes.push(128 | code >> 6 & 63);
          utf8Bytes.push(128 | code & 63);
        }
        details.push({
          position: i + 1,
          char,
          unicode: code.toString(16),
          utf8Bytes: utf8Bytes.map((b) => b.toString(16).toUpperCase().padStart(2, "0")),
          hex: utf8Bytes.map((b) => b.toString(16).toUpperCase().padStart(2, "0")),
          binary: utf8Bytes.map((b) => b.toString(2).padStart(8, "0"))
        });
      }
      return details;
    };
    const convert = () => {
      if (!inputText.value) {
        outputs.value = {
          text: "",
          hex: "",
          binary: ""
        };
        byteDetails.value = [];
        return;
      }
      const actualInputType = inputType.value === "auto" ? detectInputType(inputText.value) : inputType.value;
      if (actualInputType === "text") {
        const hex = textToHex(inputText.value, encoding.value, separator.value, hexCase.value);
        outputs.value.text = inputText.value;
        outputs.value.hex = hex;
        const cleanHex = hex.replace(/[\s:,-]/g, "");
        const binaryBytes = [];
        for (let i = 0; i < cleanHex.length; i += 2) {
          const byte = parseInt(cleanHex.substr(i, 2), 16);
          binaryBytes.push(byte.toString(2).padStart(8, "0"));
        }
        outputs.value.binary = binaryBytes.join(" ");
        byteDetails.value = generateByteDetails(inputText.value);
      } else {
        const text = hexToText(inputText.value, encoding.value);
        outputs.value.hex = inputText.value;
        outputs.value.text = text;
        const cleanHex = inputText.value.replace(/[\s:,-]/g, "");
        const binaryBytes = [];
        for (let i = 0; i < cleanHex.length; i += 2) {
          const byte = parseInt(cleanHex.substr(i, 2), 16);
          binaryBytes.push(byte.toString(2).padStart(8, "0"));
        }
        outputs.value.binary = binaryBytes.join(" ");
        byteDetails.value = generateByteDetails(text);
      }
    };
    watch([inputText, inputType, encoding, separator, hexCase], () => {
      convert();
    });
    useSeoMeta({
      title: "十六进制转换器 - 在线文本与十六进制互转工具",
      description: "免费在线十六进制转换工具，支持文本与十六进制相互转换，支持多种编码格式和分隔符。",
      keywords: ["hex", "十六进制", "converter", "编码", "utf-8", "ascii", "在线工具", "编码转换"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-d8d9ea21><div class="mt-4 mb-8" data-v-d8d9ea21><h1 class="text-3xl font-bold mb-3" data-v-d8d9ea21>十六进制转换器</h1><p class="text-muted-foreground" data-v-d8d9ea21>在文本和十六进制之间相互转换，支持多种编码格式和分隔符</p></div><div class="space-y-6" data-v-d8d9ea21><div class="space-y-4" data-v-d8d9ea21><div class="flex items-center justify-between" data-v-d8d9ea21><h2 class="text-lg font-semibold" data-v-d8d9ea21>输入内容</h2><div class="flex gap-2" data-v-d8d9ea21><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-d8d9ea21> 清空 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-d8d9ea21> 粘贴 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-d8d9ea21> 示例 </button></div></div><div class="relative" data-v-d8d9ea21><textarea placeholder="请输入要转换的文本或十六进制数据..." class="w-full h-48 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-d8d9ea21>${ssrInterpolate(inputText.value)}</textarea>`);
      if (inputText.value) {
        _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-d8d9ea21>${ssrInterpolate(inputType.value === "text" ? inputText.value.length + " 字符" : inputText.value.replace(/\s/g, "").length / 2 + " 字节")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-wrap gap-4" data-v-d8d9ea21><div class="flex items-center gap-2" data-v-d8d9ea21><label class="text-sm font-medium" data-v-d8d9ea21>输入类型:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-d8d9ea21><option value="text" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "text") : ssrLooseEqual(inputType.value, "text")) ? " selected" : ""}>文本</option><option value="hex" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "hex") : ssrLooseEqual(inputType.value, "hex")) ? " selected" : ""}>十六进制</option><option value="auto" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "auto") : ssrLooseEqual(inputType.value, "auto")) ? " selected" : ""}>自动检测</option></select></div><div class="flex items-center gap-2" data-v-d8d9ea21><label class="text-sm font-medium" data-v-d8d9ea21>编码格式:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-d8d9ea21><option value="utf-8" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "utf-8") : ssrLooseEqual(encoding.value, "utf-8")) ? " selected" : ""}>UTF-8</option><option value="utf-16" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "utf-16") : ssrLooseEqual(encoding.value, "utf-16")) ? " selected" : ""}>UTF-16</option><option value="utf-16le" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "utf-16le") : ssrLooseEqual(encoding.value, "utf-16le")) ? " selected" : ""}>UTF-16LE</option><option value="utf-16be" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "utf-16be") : ssrLooseEqual(encoding.value, "utf-16be")) ? " selected" : ""}>UTF-16BE</option><option value="ascii" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(encoding.value) ? ssrLooseContain(encoding.value, "ascii") : ssrLooseEqual(encoding.value, "ascii")) ? " selected" : ""}>ASCII</option></select></div><div class="flex items-center gap-2" data-v-d8d9ea21><label class="text-sm font-medium" data-v-d8d9ea21>分隔符:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-d8d9ea21><option value="none" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "none") : ssrLooseEqual(separator.value, "none")) ? " selected" : ""}>无</option><option value="space" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "space") : ssrLooseEqual(separator.value, "space")) ? " selected" : ""}>空格</option><option value="comma" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "comma") : ssrLooseEqual(separator.value, "comma")) ? " selected" : ""}>逗号</option><option value="colon" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "colon") : ssrLooseEqual(separator.value, "colon")) ? " selected" : ""}>冒号</option><option value="dash" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "dash") : ssrLooseEqual(separator.value, "dash")) ? " selected" : ""}>横线</option><option value="newline" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "newline") : ssrLooseEqual(separator.value, "newline")) ? " selected" : ""}>换行</option></select></div><div class="flex items-center gap-2" data-v-d8d9ea21><label class="text-sm font-medium" data-v-d8d9ea21>大小写:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-d8d9ea21><option value="upper" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(hexCase.value) ? ssrLooseContain(hexCase.value, "upper") : ssrLooseEqual(hexCase.value, "upper")) ? " selected" : ""}>大写 (A-F)</option><option value="lower" data-v-d8d9ea21${ssrIncludeBooleanAttr(Array.isArray(hexCase.value) ? ssrLooseContain(hexCase.value, "lower") : ssrLooseEqual(hexCase.value, "lower")) ? " selected" : ""}>小写 (a-f)</option></select></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-d8d9ea21><div class="space-y-4" data-v-d8d9ea21><div class="flex items-center justify-between" data-v-d8d9ea21><h2 class="text-lg font-semibold" data-v-d8d9ea21>文本结果</h2><div class="flex gap-2" data-v-d8d9ea21>`);
      if (outputs.value.text) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-d8d9ea21>${ssrInterpolate(copied.value.text ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.text) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-d8d9ea21> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><pre class="w-full h-48 p-4 bg-muted rounded-lg overflow-auto text-sm whitespace-pre-wrap break-all" data-v-d8d9ea21>${ssrInterpolate(outputs.value.text || "转换结果将显示在这里")}</pre></div><div class="space-y-4" data-v-d8d9ea21><div class="flex items-center justify-between" data-v-d8d9ea21><h2 class="text-lg font-semibold" data-v-d8d9ea21>十六进制结果</h2><div class="flex gap-2" data-v-d8d9ea21>`);
      if (outputs.value.hex) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-d8d9ea21>${ssrInterpolate(copied.value.hex ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.hex) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-d8d9ea21> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><pre class="w-full h-48 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-d8d9ea21>${ssrInterpolate(outputs.value.hex || "转换结果将显示在这里")}</pre></div></div><div class="space-y-4" data-v-d8d9ea21><div class="flex items-center justify-between" data-v-d8d9ea21><h2 class="text-lg font-semibold" data-v-d8d9ea21>二进制表示</h2>`);
      if (outputs.value.binary) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-d8d9ea21>${ssrInterpolate(copied.value.binary ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><pre class="w-full h-32 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-d8d9ea21>${ssrInterpolate(outputs.value.binary || "二进制表示将显示在这里")}</pre></div>`);
      if (byteDetails.value.length > 0) {
        _push(`<div class="bg-card rounded-lg p-6" data-v-d8d9ea21><h3 class="text-lg font-semibold mb-4" data-v-d8d9ea21>字节详情</h3><div class="overflow-x-auto" data-v-d8d9ea21><table class="w-full text-sm" data-v-d8d9ea21><thead data-v-d8d9ea21><tr class="border-b" data-v-d8d9ea21><th class="text-left py-2" data-v-d8d9ea21>位置</th><th class="text-left py-2" data-v-d8d9ea21>字符</th><th class="text-left py-2" data-v-d8d9ea21>Unicode</th><th class="text-left py-2" data-v-d8d9ea21>UTF-8 字节</th><th class="text-left py-2" data-v-d8d9ea21>十六进制</th><th class="text-left py-2" data-v-d8d9ea21>二进制</th></tr></thead><tbody data-v-d8d9ea21><!--[-->`);
        ssrRenderList(byteDetails.value, (detail, index) => {
          _push(`<tr class="border-b" data-v-d8d9ea21><td class="py-2" data-v-d8d9ea21>${ssrInterpolate(detail.position)}</td><td class="py-2" data-v-d8d9ea21>${ssrInterpolate(detail.char === " " ? "空格" : detail.char)}</td><td class="py-2 font-mono" data-v-d8d9ea21>U+${ssrInterpolate(detail.unicode.toUpperCase().padStart(4, "0"))}</td><td class="py-2 font-mono" data-v-d8d9ea21>${ssrInterpolate(detail.utf8Bytes.join(" "))}</td><td class="py-2 font-mono" data-v-d8d9ea21>${ssrInterpolate(detail.hex.join(" "))}</td><td class="py-2 font-mono" data-v-d8d9ea21>${ssrInterpolate(detail.binary.join(" "))}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-12 space-y-6" data-v-d8d9ea21><div class="bg-card rounded-lg p-6" data-v-d8d9ea21><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-d8d9ea21>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用技巧 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-d8d9ea21><p data-v-d8d9ea21>• 支持自动检测输入类型，智能判断是文本还是十六进制</p><p data-v-d8d9ea21>• 支持多种分隔符格式：无分隔、空格、逗号、冒号等</p><p data-v-d8d9ea21>• 支持多种编码格式：UTF-8、UTF-16、ASCII 等</p><p data-v-d8d9ea21>• 显示每个字符的详细字节信息和二进制表示</p></div></div><div class="bg-card rounded-lg p-6" data-v-d8d9ea21><h3 class="text-lg font-semibold mb-4" data-v-d8d9ea21>编码示例</h3><div class="space-y-4" data-v-d8d9ea21><div data-v-d8d9ea21><h4 class="font-medium text-sm mb-2" data-v-d8d9ea21>文本转十六进制</h4><div class="bg-muted p-3 rounded-lg" data-v-d8d9ea21><pre class="text-xs font-mono" data-v-d8d9ea21>输入: Hello
UTF-8: 48 65 6C 6C 6F
ASCII: 48 65 6C 6C 6F</pre></div></div><div data-v-d8d9ea21><h4 class="font-medium text-sm mb-2" data-v-d8d9ea21>十六进制转文本</h4><div class="bg-muted p-3 rounded-lg" data-v-d8d9ea21><pre class="text-xs font-mono" data-v-d8d9ea21>输入: E4 B8 AD E6 96 87 (UTF-8)
输出: 中文</pre></div></div><div data-v-d8d9ea21><h4 class="font-medium text-sm mb-2" data-v-d8d9ea21>不同编码对比</h4><div class="bg-muted p-3 rounded-lg" data-v-d8d9ea21><pre class="text-xs font-mono" data-v-d8d9ea21>字符: A
UTF-8:    41
UTF-16LE: 41 00
UTF-16BE: 00 41</pre></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-d8d9ea21><h3 class="text-lg font-semibold mb-4" data-v-d8d9ea21>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-d8d9ea21>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/binary-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Type), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-d8d9ea21${_scopeId}><p class="font-medium group-hover:text-primary" data-v-d8d9ea21${_scopeId}>二进制转换</p><p class="text-xs text-muted-foreground" data-v-d8d9ea21${_scopeId}>文本与二进制互转</p></div>`);
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
        to: "/tools/base64-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-d8d9ea21${_scopeId}><p class="font-medium group-hover:text-primary" data-v-d8d9ea21${_scopeId}>Base64 编码</p><p class="text-xs text-muted-foreground" data-v-d8d9ea21${_scopeId}>文本转 Base64</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 编码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "文本转 Base64")
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
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-d8d9ea21${_scopeId}><p class="font-medium group-hover:text-primary" data-v-d8d9ea21${_scopeId}>Unicode 转换</p><p class="text-xs text-muted-foreground" data-v-d8d9ea21${_scopeId}>Unicode 编码转换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
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
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/hex-convert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hexConvert = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d8d9ea21"]]);
export {
  hexConvert as default
};
//# sourceMappingURL=hex-convert-D2TOjpz5.js.map
