import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Info, Hash, ArrowRight, Type, FileText } from 'lucide-vue-next';
import { f as useSeoMeta } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = {
  __name: "ascii-table",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const selectedCategory = ref("all");
    const showHexInput = ref(false);
    const decimalInput = ref("");
    const hexInput = ref("");
    const octalInput = ref("");
    const binaryInput = ref("");
    const highlightedChar = ref(null);
    const asciiData = [
      // 控制字符
      { decimal: 0, hexadecimal: "0x00", octal: "000", binary: "0000000", character: "", controlKey: "NUL", description: "\u7A7A\u5B57\u7B26", isControl: true, category: "control" },
      { decimal: 1, hexadecimal: "0x01", octal: "001", binary: "0000001", character: "", controlKey: "SOH", description: "\u6807\u9898\u5F00\u59CB", isControl: true, category: "control" },
      { decimal: 2, hexadecimal: "0x02", octal: "002", binary: "0000010", character: "", controlKey: "STX", description: "\u6B63\u6587\u5F00\u59CB", isControl: true, category: "control" },
      { decimal: 3, hexadecimal: "0x03", octal: "003", binary: "0000011", character: "", controlKey: "ETX", description: "\u6B63\u6587\u7ED3\u675F", isControl: true, category: "control" },
      { decimal: 4, hexadecimal: "0x04", octal: "004", binary: "0000100", character: "", controlKey: "EOT", description: "\u4F20\u8F93\u7ED3\u675F", isControl: true, category: "control" },
      { decimal: 5, hexadecimal: "0x05", octal: "005", binary: "0000101", character: "", controlKey: "ENQ", description: "\u8BE2\u95EE", isControl: true, category: "control" },
      { decimal: 6, hexadecimal: "0x06", octal: "006", binary: "0000110", character: "", controlKey: "ACK", description: "\u786E\u8BA4", isControl: true, category: "control" },
      { decimal: 7, hexadecimal: "0x07", octal: "007", binary: "0000111", character: "", controlKey: "BEL", description: "\u54CD\u94C3", isControl: true, category: "control" },
      { decimal: 8, hexadecimal: "0x08", octal: "010", binary: "0001000", character: "", controlKey: "BS", description: "\u9000\u683C", isControl: true, category: "control" },
      { decimal: 9, hexadecimal: "0x09", octal: "011", binary: "0001001", character: "	", controlKey: "HT", description: "\u6C34\u5E73\u5236\u8868\u7B26", isControl: false, category: "space" },
      { decimal: 10, hexadecimal: "0x0A", octal: "012", binary: "0001010", character: "\n", controlKey: "LF", description: "\u6362\u884C", isControl: false, category: "control" },
      { decimal: 11, hexadecimal: "0x0B", octal: "013", binary: "0001011", character: "", controlKey: "VT", description: "\u5782\u76F4\u5236\u8868\u7B26", isControl: true, category: "control" },
      { decimal: 12, hexadecimal: "0x0C", octal: "014", binary: "0001100", character: "", controlKey: "FF", description: "\u6362\u9875", isControl: true, category: "control" },
      { decimal: 13, hexadecimal: "0x0D", octal: "015", binary: "0001101", character: "\r", controlKey: "CR", description: "\u56DE\u8F66", isControl: false, category: "control" },
      { decimal: 14, hexadecimal: "0x0E", octal: "016", binary: "0001110", character: "", controlKey: "SO", description: "\u79FB\u51FA", isControl: true, category: "control" },
      { decimal: 15, hexadecimal: "0x0F", octal: "017", binary: "0001111", character: "", controlKey: "SI", description: "\u79FB\u5165", isControl: true, category: "control" },
      { decimal: 16, hexadecimal: "0x10", octal: "020", binary: "0010000", character: "", controlKey: "DLE", description: "\u6570\u636E\u94FE\u8DEF\u8F6C\u4E49", isControl: true, category: "control" },
      { decimal: 17, hexadecimal: "0x11", octal: "021", binary: "0010001", character: "", controlKey: "DC1", description: "\u8BBE\u5907\u63A7\u52361", isControl: true, category: "control" },
      { decimal: 18, hexadecimal: "0x12", octal: "022", binary: "0010010", character: "", controlKey: "DC2", description: "\u8BBE\u5907\u63A7\u52362", isControl: true, category: "control" },
      { decimal: 19, hexadecimal: "0x13", octal: "023", binary: "0010011", character: "", controlKey: "DC3", description: "\u8BBE\u5907\u63A7\u52363", isControl: true, category: "control" },
      { decimal: 20, hexadecimal: "0x14", octal: "024", binary: "0010100", character: "", controlKey: "DC4", description: "\u8BBE\u5907\u63A7\u52364", isControl: true, category: "control" },
      { decimal: 21, hexadecimal: "0x15", octal: "025", binary: "0010101", character: "", controlKey: "NAK", description: "\u5426\u5B9A\u786E\u8BA4", isControl: true, category: "control" },
      { decimal: 22, hexadecimal: "0x16", octal: "026", binary: "0010110", character: "", controlKey: "SYN", description: "\u540C\u6B65\u7A7A\u95F2", isControl: true, category: "control" },
      { decimal: 23, hexadecimal: "0x17", octal: "027", binary: "0010111", character: "", controlKey: "ETB", description: "\u4F20\u8F93\u5757\u7ED3\u675F", isControl: true, category: "control" },
      { decimal: 24, hexadecimal: "0x18", octal: "030", binary: "0011000", character: "", controlKey: "CAN", description: "\u53D6\u6D88", isControl: true, category: "control" },
      { decimal: 25, hexadecimal: "0x19", octal: "031", binary: "0011001", character: "", controlKey: "EM", description: "\u4ECB\u8D28\u7ED3\u675F", isControl: true, category: "control" },
      { decimal: 26, hexadecimal: "0x1A", octal: "032", binary: "0011010", character: "", controlKey: "SUB", description: "\u66FF\u6362", isControl: true, category: "control" },
      { decimal: 27, hexadecimal: "0x1B", octal: "033", binary: "0011011", character: "", controlKey: "ESC", description: "\u8F6C\u4E49", isControl: true, category: "control" },
      { decimal: 28, hexadecimal: "0x1C", octal: "034", binary: "0011100", character: "", controlKey: "FS", description: "\u6587\u4EF6\u5206\u9694\u7B26", isControl: true, category: "control" },
      { decimal: 29, hexadecimal: "0x1D", octal: "035", binary: "0011101", character: "", controlKey: "GS", description: "\u7EC4\u5206\u9694\u7B26", isControl: true, category: "control" },
      { decimal: 30, hexadecimal: "0x1E", octal: "036", binary: "0011110", character: "", controlKey: "RS", description: "\u8BB0\u5F55\u5206\u9694\u7B26", isControl: true, category: "control" },
      { decimal: 31, hexadecimal: "0x1F", octal: "037", binary: "0011111", character: "", controlKey: "US", description: "\u5355\u5143\u5206\u9694\u7B26", isControl: true, category: "control" },
      // 可打印字符
      { decimal: 32, hexadecimal: "0x20", octal: "040", binary: "0100000", character: " ", description: "\u7A7A\u683C", isControl: false, category: "space" },
      { decimal: 33, hexadecimal: "0x21", octal: "041", binary: "0100001", character: "!", description: "\u611F\u53F9\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#33;" },
      { decimal: 34, hexadecimal: "0x22", octal: "042", binary: "0100010", character: '"', description: "\u53CC\u5F15\u53F7", isControl: false, category: "punctuation", htmlEntity: "&quot;" },
      { decimal: 35, hexadecimal: "0x23", octal: "043", binary: "0100011", character: "#", description: "\u4E95\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#35;" },
      { decimal: 36, hexadecimal: "0x24", octal: "044", binary: "0100100", character: "$", description: "\u7F8E\u5143\u7B26\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#36;" },
      { decimal: 37, hexadecimal: "0x25", octal: "045", binary: "0100101", character: "%", description: "\u767E\u5206\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#37;" },
      { decimal: 38, hexadecimal: "0x26", octal: "046", binary: "0100110", character: "&", description: "\u548C\u53F7", isControl: false, category: "punctuation", htmlEntity: "&amp;" },
      { decimal: 39, hexadecimal: "0x27", octal: "047", binary: "0100111", character: "'", description: "\u5355\u5F15\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#39;" },
      { decimal: 40, hexadecimal: "0x28", octal: "050", binary: "0101000", character: "(", description: "\u5DE6\u5706\u62EC\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#40;" },
      { decimal: 41, hexadecimal: "0x29", octal: "051", binary: "0101001", character: ")", description: "\u53F3\u5706\u62EC\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#41;" },
      { decimal: 42, hexadecimal: "0x2A", octal: "052", binary: "0101010", character: "*", description: "\u661F\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#42;" },
      { decimal: 43, hexadecimal: "0x2B", octal: "053", binary: "0101011", character: "+", description: "\u52A0\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#43;" },
      { decimal: 44, hexadecimal: "0x2C", octal: "054", binary: "0101100", character: ",", description: "\u9017\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#44;" },
      { decimal: 45, hexadecimal: "0x2D", octal: "055", binary: "0101101", character: "-", description: "\u51CF\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#45;" },
      { decimal: 46, hexadecimal: "0x2E", octal: "056", binary: "0101110", character: ".", description: "\u53E5\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#46;" },
      { decimal: 47, hexadecimal: "0x2F", octal: "057", binary: "0101111", character: "/", description: "\u659C\u6760", isControl: false, category: "punctuation", htmlEntity: "&#47;" },
      { decimal: 48, hexadecimal: "0x30", octal: "060", binary: "0110000", character: "0", description: "\u6570\u5B57\u96F6", isControl: false, category: "number", htmlEntity: "&#48;" },
      { decimal: 49, hexadecimal: "0x31", octal: "061", binary: "0110001", character: "1", description: "\u6570\u5B57\u4E00", isControl: false, category: "number", htmlEntity: "&#49;" },
      { decimal: 50, hexadecimal: "0x32", octal: "062", binary: "0110010", character: "2", description: "\u6570\u5B57\u4E8C", isControl: false, category: "number", htmlEntity: "&#50;" },
      { decimal: 51, hexadecimal: "0x33", octal: "063", binary: "0110011", character: "3", description: "\u6570\u5B57\u4E09", isControl: false, category: "number", htmlEntity: "&#51;" },
      { decimal: 52, hexadecimal: "0x34", octal: "064", binary: "0110100", character: "4", description: "\u6570\u5B57\u56DB", isControl: false, category: "number", htmlEntity: "&#52;" },
      { decimal: 53, hexadecimal: "0x35", octal: "065", binary: "0110101", character: "5", description: "\u6570\u5B57\u4E94", isControl: false, category: "number", htmlEntity: "&#53;" },
      { decimal: 54, hexadecimal: "0x36", octal: "066", binary: "0110110", character: "6", description: "\u6570\u5B57\u516D", isControl: false, category: "number", htmlEntity: "&#54;" },
      { decimal: 55, hexadecimal: "0x37", octal: "067", binary: "0110111", character: "7", description: "\u6570\u5B57\u4E03", isControl: false, category: "number", htmlEntity: "&#55;" },
      { decimal: 56, hexadecimal: "0x38", octal: "070", binary: "0111000", character: "8", description: "\u6570\u5B57\u516B", isControl: false, category: "number", htmlEntity: "&#56;" },
      { decimal: 57, hexadecimal: "0x39", octal: "071", binary: "0111001", character: "9", description: "\u6570\u5B57\u4E5D", isControl: false, category: "number", htmlEntity: "&#57;" },
      { decimal: 58, hexadecimal: "0x3A", octal: "072", binary: "0111010", character: ":", description: "\u5192\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#58;" },
      { decimal: 59, hexadecimal: "0x3B", octal: "073", binary: "0111011", character: ";", description: "\u5206\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#59;" },
      { decimal: 60, hexadecimal: "0x3C", octal: "074", binary: "0111100", character: "<", description: "\u5C0F\u4E8E\u53F7", isControl: false, category: "punctuation", htmlEntity: "&lt;" },
      { decimal: 61, hexadecimal: "0x3D", octal: "075", binary: "0111101", character: "=", description: "\u7B49\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#61;" },
      { decimal: 62, hexadecimal: "0x3E", octal: "076", binary: "0111110", character: ">", description: "\u5927\u4E8E\u53F7", isControl: false, category: "punctuation", htmlEntity: "&gt;" },
      { decimal: 63, hexadecimal: "0x3F", octal: "077", binary: "0111111", character: "?", description: "\u95EE\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#63;" },
      { decimal: 64, hexadecimal: "0x40", octal: "100", binary: "1000000", character: "@", description: "At\u7B26\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#64;" },
      { decimal: 65, hexadecimal: "0x41", octal: "101", binary: "1000001", character: "A", description: "\u5927\u5199\u5B57\u6BCDA", isControl: false, category: "letter", htmlEntity: "&#65;" },
      { decimal: 66, hexadecimal: "0x42", octal: "102", binary: "1000010", character: "B", description: "\u5927\u5199\u5B57\u6BCDB", isControl: false, category: "letter", htmlEntity: "&#66;" },
      { decimal: 67, hexadecimal: "0x43", octal: "103", binary: "1000011", character: "C", description: "\u5927\u5199\u5B57\u6BCDC", isControl: false, category: "letter", htmlEntity: "&#67;" },
      { decimal: 68, hexadecimal: "0x44", octal: "104", binary: "1000100", character: "D", description: "\u5927\u5199\u5B57\u6BCDD", isControl: false, category: "letter", htmlEntity: "&#68;" },
      { decimal: 69, hexadecimal: "0x45", octal: "105", binary: "1000101", character: "E", description: "\u5927\u5199\u5B57\u6BCDE", isControl: false, category: "letter", htmlEntity: "&#69;" },
      { decimal: 70, hexadecimal: "0x46", octal: "106", binary: "1000110", character: "F", description: "\u5927\u5199\u5B57\u6BCDF", isControl: false, category: "letter", htmlEntity: "&#70;" },
      { decimal: 71, hexadecimal: "0x47", octal: "107", binary: "1000111", character: "G", description: "\u5927\u5199\u5B57\u6BCDG", isControl: false, category: "letter", htmlEntity: "&#71;" },
      { decimal: 72, hexadecimal: "0x48", octal: "110", binary: "1001000", character: "H", description: "\u5927\u5199\u5B57\u6BCDH", isControl: false, category: "letter", htmlEntity: "&#72;" },
      { decimal: 73, hexadecimal: "0x49", octal: "111", binary: "1001001", character: "I", description: "\u5927\u5199\u5B57\u6BCDI", isControl: false, category: "letter", htmlEntity: "&#73;" },
      { decimal: 74, hexadecimal: "0x4A", octal: "112", binary: "1001010", character: "J", description: "\u5927\u5199\u5B57\u6BCDJ", isControl: false, category: "letter", htmlEntity: "&#74;" },
      { decimal: 75, hexadecimal: "0x4B", octal: "113", binary: "1001011", character: "K", description: "\u5927\u5199\u5B57\u6BCDK", isControl: false, category: "letter", htmlEntity: "&#75;" },
      { decimal: 76, hexadecimal: "0x4C", octal: "114", binary: "1001100", character: "L", description: "\u5927\u5199\u5B57\u6BCDL", isControl: false, category: "letter", htmlEntity: "&#76;" },
      { decimal: 77, hexadecimal: "0x4D", octal: "115", binary: "1001101", character: "M", description: "\u5927\u5199\u5B57\u6BCDM", isControl: false, category: "letter", htmlEntity: "&#77;" },
      { decimal: 78, hexadecimal: "0x4E", octal: "116", binary: "1001110", character: "N", description: "\u5927\u5199\u5B57\u6BCDN", isControl: false, category: "letter", htmlEntity: "&#78;" },
      { decimal: 79, hexadecimal: "0x4F", octal: "117", binary: "1001111", character: "O", description: "\u5927\u5199\u5B57\u6BCDO", isControl: false, category: "letter", htmlEntity: "&#79;" },
      { decimal: 80, hexadecimal: "0x50", octal: "120", binary: "1010000", character: "P", description: "\u5927\u5199\u5B57\u6BCDP", isControl: false, category: "letter", htmlEntity: "&#80;" },
      { decimal: 81, hexadecimal: "0x51", octal: "121", binary: "1010001", character: "Q", description: "\u5927\u5199\u5B57\u6BCDQ", isControl: false, category: "letter", htmlEntity: "&#81;" },
      { decimal: 82, hexadecimal: "0x52", octal: "122", binary: "1010010", character: "R", description: "\u5927\u5199\u5B57\u6BCDR", isControl: false, category: "letter", htmlEntity: "&#82;" },
      { decimal: 83, hexadecimal: "0x53", octal: "123", binary: "1010011", character: "S", description: "\u5927\u5199\u5B57\u6BCDS", isControl: false, category: "letter", htmlEntity: "&#83;" },
      { decimal: 84, hexadecimal: "0x54", octal: "124", binary: "1010100", character: "T", description: "\u5927\u5199\u5B57\u6BCDT", isControl: false, category: "letter", htmlEntity: "&#84;" },
      { decimal: 85, hexadecimal: "0x55", octal: "125", binary: "1010101", character: "U", description: "\u5927\u5199\u5B57\u6BCDU", isControl: false, category: "letter", htmlEntity: "&#85;" },
      { decimal: 86, hexadecimal: "0x56", octal: "126", binary: "1010110", character: "V", description: "\u5927\u5199\u5B57\u6BCDV", isControl: false, category: "letter", htmlEntity: "&#86;" },
      { decimal: 87, hexadecimal: "0x57", octal: "127", binary: "1010111", character: "W", description: "\u5927\u5199\u5B57\u6BCDW", isControl: false, category: "letter", htmlEntity: "&#87;" },
      { decimal: 88, hexadecimal: "0x58", octal: "130", binary: "1011000", character: "X", description: "\u5927\u5199\u5B57\u6BCDX", isControl: false, category: "letter", htmlEntity: "&#88;" },
      { decimal: 89, hexadecimal: "0x59", octal: "131", binary: "1011001", character: "Y", description: "\u5927\u5199\u5B57\u6BCDY", isControl: false, category: "letter", htmlEntity: "&#89;" },
      { decimal: 90, hexadecimal: "0x5A", octal: "132", binary: "1011010", character: "Z", description: "\u5927\u5199\u5B57\u6BCDZ", isControl: false, category: "letter", htmlEntity: "&#90;" },
      { decimal: 91, hexadecimal: "0x5B", octal: "133", binary: "1011011", character: "[", description: "\u5DE6\u65B9\u62EC\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#91;" },
      { decimal: 92, hexadecimal: "0x5C", octal: "134", binary: "1011100", character: "\\", description: "\u53CD\u659C\u6760", isControl: false, category: "punctuation", htmlEntity: "&#92;" },
      { decimal: 93, hexadecimal: "0x5D", octal: "135", binary: "1011101", character: "]", description: "\u53F3\u65B9\u62EC\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#93;" },
      { decimal: 94, hexadecimal: "0x5E", octal: "136", binary: "1011110", character: "^", description: "\u8131\u5B57\u7B26", isControl: false, category: "punctuation", htmlEntity: "&#94;" },
      { decimal: 95, hexadecimal: "0x5F", octal: "137", binary: "1011111", character: "_", description: "\u4E0B\u5212\u7EBF", isControl: false, category: "punctuation", htmlEntity: "&#95;" },
      { decimal: 96, hexadecimal: "0x60", octal: "140", binary: "1100000", character: "`", description: "\u91CD\u97F3\u7B26", isControl: false, category: "punctuation", htmlEntity: "&#96;" },
      { decimal: 97, hexadecimal: "0x61", octal: "141", binary: "1100001", character: "a", description: "\u5C0F\u5199\u5B57\u6BCDa", isControl: false, category: "letter", htmlEntity: "&#97;" },
      { decimal: 98, hexadecimal: "0x62", octal: "142", binary: "1100010", character: "b", description: "\u5C0F\u5199\u5B57\u6BCDb", isControl: false, category: "letter", htmlEntity: "&#98;" },
      { decimal: 99, hexadecimal: "0x63", octal: "143", binary: "1100011", character: "c", description: "\u5C0F\u5199\u5B57\u6BCDc", isControl: false, category: "letter", htmlEntity: "&#99;" },
      { decimal: 100, hexadecimal: "0x64", octal: "144", binary: "1100100", character: "d", description: "\u5C0F\u5199\u5B57\u6BCDd", isControl: false, category: "letter", htmlEntity: "&#100;" },
      { decimal: 101, hexadecimal: "0x65", octal: "145", binary: "1100101", character: "e", description: "\u5C0F\u5199\u5B57\u6BCDe", isControl: false, category: "letter", htmlEntity: "&#101;" },
      { decimal: 102, hexadecimal: "0x66", octal: "146", binary: "1100110", character: "f", description: "\u5C0F\u5199\u5B57\u6BCDf", isControl: false, category: "letter", htmlEntity: "&#102;" },
      { decimal: 103, hexadecimal: "0x67", octal: "147", binary: "1100111", character: "g", description: "\u5C0F\u5199\u5B57\u6BCDg", isControl: false, category: "letter", htmlEntity: "&#103;" },
      { decimal: 104, hexadecimal: "0x68", octal: "150", binary: "1101000", character: "h", description: "\u5C0F\u5199\u5B57\u6BCDh", isControl: false, category: "letter", htmlEntity: "&#104;" },
      { decimal: 105, hexadecimal: "0x69", octal: "151", binary: "1101001", character: "i", description: "\u5C0F\u5199\u5B57\u6BCDi", isControl: false, category: "letter", htmlEntity: "&#105;" },
      { decimal: 106, hexadecimal: "0x6A", octal: "152", binary: "1101010", character: "j", description: "\u5C0F\u5199\u5B57\u6BCDj", isControl: false, category: "letter", htmlEntity: "&#106;" },
      { decimal: 107, hexadecimal: "0x6B", octal: "153", binary: "1101011", character: "k", description: "\u5C0F\u5199\u5B57\u6BCDk", isControl: false, category: "letter", htmlEntity: "&#107;" },
      { decimal: 108, hexadecimal: "0x6C", octal: "154", binary: "1101100", character: "l", description: "\u5C0F\u5199\u5B57\u6BCDl", isControl: false, category: "letter", htmlEntity: "&#108;" },
      { decimal: 109, hexadecimal: "0x6D", octal: "155", binary: "1101101", character: "m", description: "\u5C0F\u5199\u5B57\u6BCDm", isControl: false, category: "letter", htmlEntity: "&#109;" },
      { decimal: 110, hexadecimal: "0x6E", octal: "156", binary: "1101110", character: "n", description: "\u5C0F\u5199\u5B57\u6BCDn", isControl: false, category: "letter", htmlEntity: "&#110;" },
      { decimal: 111, hexadecimal: "0x6F", octal: "157", binary: "1101111", character: "o", description: "\u5C0F\u5199\u5B57\u6BCDo", isControl: false, category: "letter", htmlEntity: "&#111;" },
      { decimal: 112, hexadecimal: "0x70", octal: "160", binary: "1110000", character: "p", description: "\u5C0F\u5199\u5B57\u6BCDp", isControl: false, category: "letter", htmlEntity: "&#112;" },
      { decimal: 113, hexadecimal: "0x71", octal: "161", binary: "1110001", character: "q", description: "\u5C0F\u5199\u5B57\u6BCDq", isControl: false, category: "letter", htmlEntity: "&#113;" },
      { decimal: 114, hexadecimal: "0x72", octal: "162", binary: "1110010", character: "r", description: "\u5C0F\u5199\u5B57\u6BCDr", isControl: false, category: "letter", htmlEntity: "&#114;" },
      { decimal: 115, hexadecimal: "0x73", octal: "163", binary: "1110011", character: "s", description: "\u5C0F\u5199\u5B57\u6BCDs", isControl: false, category: "letter", htmlEntity: "&#115;" },
      { decimal: 116, hexadecimal: "0x74", octal: "164", binary: "1110100", character: "t", description: "\u5C0F\u5199\u5B57\u6BCDt", isControl: false, category: "letter", htmlEntity: "&#116;" },
      { decimal: 117, hexadecimal: "0x75", octal: "165", binary: "1110101", character: "u", description: "\u5C0F\u5199\u5B57\u6BCDu", isControl: false, category: "letter", htmlEntity: "&#117;" },
      { decimal: 118, hexadecimal: "0x76", octal: "166", binary: "1110110", character: "v", description: "\u5C0F\u5199\u5B57\u6BCDv", isControl: false, category: "letter", htmlEntity: "&#118;" },
      { decimal: 119, hexadecimal: "0x77", octal: "167", binary: "1110111", character: "w", description: "\u5C0F\u5199\u5B57\u6BCDw", isControl: false, category: "letter", htmlEntity: "&#119;" },
      { decimal: 120, hexadecimal: "0x78", octal: "170", binary: "1111000", character: "x", description: "\u5C0F\u5199\u5B57\u6BCDx", isControl: false, category: "letter", htmlEntity: "&#120;" },
      { decimal: 121, hexadecimal: "0x79", octal: "171", binary: "1111001", character: "y", description: "\u5C0F\u5199\u5B57\u6BCDy", isControl: false, category: "letter", htmlEntity: "&#121;" },
      { decimal: 122, hexadecimal: "0x7A", octal: "172", binary: "1111010", character: "z", description: "\u5C0F\u5199\u5B57\u6BCDz", isControl: false, category: "letter", htmlEntity: "&#122;" },
      { decimal: 123, hexadecimal: "0x7B", octal: "173", binary: "1111011", character: "{", description: "\u5DE6\u82B1\u62EC\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#123;" },
      { decimal: 124, hexadecimal: "0x7C", octal: "174", binary: "1111100", character: "|", description: "\u7AD6\u7EBF", isControl: false, category: "punctuation", htmlEntity: "&#124;" },
      { decimal: 125, hexadecimal: "0x7D", octal: "175", binary: "1111101", character: "}", description: "\u53F3\u82B1\u62EC\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#125;" },
      { decimal: 126, hexadecimal: "0x7E", octal: "176", binary: "1111110", character: "~", description: "\u6CE2\u6D6A\u53F7", isControl: false, category: "punctuation", htmlEntity: "&#126;" },
      { decimal: 127, hexadecimal: "0x7F", octal: "177", binary: "1111111", character: "", controlKey: "DEL", description: "\u5220\u9664", isControl: true, category: "control" }
    ];
    const extendedAscii = computed(() => {
      const extended = [];
      for (let i = 128; i <= 255; i++) {
        extended.push({
          decimal: i,
          hexadecimal: "0x" + i.toString(16),
          character: String.fromCharCode(i)
        });
      }
      return extended;
    });
    const filteredAscii = computed(() => {
      let result = asciiData;
      if (selectedCategory.value !== "all") {
        result = result.filter((char) => char.category === selectedCategory.value);
      }
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        result = result.filter((char) => {
          if (char.character && char.character.toLowerCase() === query) return true;
          if (char.decimal.toString().includes(query)) return true;
          if (char.hexadecimal.toLowerCase().includes(query)) return true;
          if (char.octal.includes(query)) return true;
          if (char.binary.includes(query)) return true;
          if (char.description && char.description.toLowerCase().includes(query)) return true;
          if (char.controlKey && char.controlKey.toLowerCase().includes(query)) return true;
          return false;
        });
      }
      return result;
    });
    useSeoMeta({
      title: "ASCII\u7801\u8868 - \u5728\u7EBFASCII\u5B57\u7B26\u96C6\u67E5\u8BE2\u5DE5\u5177",
      description: "\u5B8C\u6574\u7684ASCII\u7801\u8868\u67E5\u8BE2\u5DE5\u5177\uFF0C\u652F\u6301\u5341\u8FDB\u5236\u3001\u5341\u516D\u8FDB\u5236\u3001\u516B\u8FDB\u5236\u548C\u4E8C\u8FDB\u5236\u8868\u793A\uFF0C\u5305\u542B\u63A7\u5236\u5B57\u7B26\u548C\u53EF\u6253\u5370\u5B57\u7B26\u3002",
      keywords: ["ascii", "\u7801\u8868", "\u5B57\u7B26\u96C6", "\u7F16\u7801", "\u5341\u8FDB\u5236", "\u5341\u516D\u8FDB\u5236", "\u5728\u7EBF\u5DE5\u5177", "ascii table"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-b381a06a><div class="mt-4 mb-8" data-v-b381a06a><h1 class="text-3xl font-bold mb-3" data-v-b381a06a>ASCII \u7801\u8868</h1><p class="text-muted-foreground" data-v-b381a06a>\u5B8C\u6574\u7684 ASCII \u5B57\u7B26\u96C6\u53C2\u8003\u8868\uFF0C\u5305\u542B\u5341\u8FDB\u5236\u3001\u5341\u516D\u8FDB\u5236\u3001\u516B\u8FDB\u5236\u548C\u4E8C\u8FDB\u5236\u8868\u793A</p></div><div class="bg-card rounded-lg p-6 mb-6" data-v-b381a06a><div class="flex flex-wrap gap-4 mb-4" data-v-b381a06a><div class="flex-1 min-w-[200px]" data-v-b381a06a><label class="text-sm font-medium mb-2 block" data-v-b381a06a>\u641C\u7D22\u5B57\u7B26</label><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="\u8F93\u5165\u5B57\u7B26\u3001\u5341\u8FDB\u5236\u6216\u5341\u516D\u8FDB\u5236..." class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" data-v-b381a06a></div><div data-v-b381a06a><label class="text-sm font-medium mb-2 block" data-v-b381a06a>\u5B57\u7B26\u5206\u7C7B</label><select class="px-3 py-2 border rounded-md min-w-[150px]" data-v-b381a06a><option value="all" data-v-b381a06a${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "all") : ssrLooseEqual(selectedCategory.value, "all")) ? " selected" : ""}>\u5168\u90E8</option><option value="control" data-v-b381a06a${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "control") : ssrLooseEqual(selectedCategory.value, "control")) ? " selected" : ""}>\u63A7\u5236\u5B57\u7B26</option><option value="printable" data-v-b381a06a${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "printable") : ssrLooseEqual(selectedCategory.value, "printable")) ? " selected" : ""}>\u53EF\u6253\u5370\u5B57\u7B26</option><option value="number" data-v-b381a06a${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "number") : ssrLooseEqual(selectedCategory.value, "number")) ? " selected" : ""}>\u6570\u5B57</option><option value="letter" data-v-b381a06a${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "letter") : ssrLooseEqual(selectedCategory.value, "letter")) ? " selected" : ""}>\u5B57\u6BCD</option><option value="punctuation" data-v-b381a06a${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "punctuation") : ssrLooseEqual(selectedCategory.value, "punctuation")) ? " selected" : ""}>\u6807\u70B9\u7B26\u53F7</option><option value="space" data-v-b381a06a${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "space") : ssrLooseEqual(selectedCategory.value, "space")) ? " selected" : ""}>\u7A7A\u683C\u5B57\u7B26</option></select></div><div class="flex items-end gap-2" data-v-b381a06a><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" data-v-b381a06a> \u67E5\u627E\u5B57\u7B26 </button></div></div>`);
      if (showHexInput.value) {
        _push(`<div class="bg-muted p-4 rounded-lg" data-v-b381a06a><h3 class="font-medium mb-3" data-v-b381a06a>\u5FEB\u901F\u67E5\u627E</h3><div class="flex gap-4" data-v-b381a06a><div class="flex-1" data-v-b381a06a><label class="text-sm text-muted-foreground mb-1 block" data-v-b381a06a>\u5341\u8FDB\u5236</label><input${ssrRenderAttr("value", decimalInput.value)} type="number" min="0" max="127" class="w-full px-3 py-1.5 border rounded-md text-sm" data-v-b381a06a></div><div class="flex-1" data-v-b381a06a><label class="text-sm text-muted-foreground mb-1 block" data-v-b381a06a>\u5341\u516D\u8FDB\u5236</label><input${ssrRenderAttr("value", hexInput.value)} type="text" placeholder="0-7F" class="w-full px-3 py-1.5 border rounded-md text-sm font-mono" data-v-b381a06a></div><div class="flex-1" data-v-b381a06a><label class="text-sm text-muted-foreground mb-1 block" data-v-b381a06a>\u516B\u8FDB\u5236</label><input${ssrRenderAttr("value", octalInput.value)} type="text" placeholder="0-177" class="w-full px-3 py-1.5 border rounded-md text-sm font-mono" data-v-b381a06a></div><div class="flex-1" data-v-b381a06a><label class="text-sm text-muted-foreground mb-1 block" data-v-b381a06a>\u4E8C\u8FDB\u5236</label><input${ssrRenderAttr("value", binaryInput.value)} type="text" placeholder="7\u4F4D\u4E8C\u8FDB\u5236" class="w-full px-3 py-1.5 border rounded-md text-sm font-mono" data-v-b381a06a></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card rounded-lg overflow-hidden" data-v-b381a06a><div class="overflow-x-auto" data-v-b381a06a><table class="w-full text-sm" data-v-b381a06a><thead class="bg-muted" data-v-b381a06a><tr data-v-b381a06a><th class="px-4 py-3 text-left font-medium" data-v-b381a06a>\u5341\u8FDB\u5236</th><th class="px-4 py-3 text-left font-medium" data-v-b381a06a>\u5341\u516D\u8FDB\u5236</th><th class="px-4 py-3 text-left font-medium" data-v-b381a06a>\u516B\u8FDB\u5236</th><th class="px-4 py-3 text-left font-medium" data-v-b381a06a>\u4E8C\u8FDB\u5236</th><th class="px-4 py-3 text-left font-medium" data-v-b381a06a>\u5B57\u7B26</th><th class="px-4 py-3 text-left font-medium" data-v-b381a06a>HTML \u5B9E\u4F53</th><th class="px-4 py-3 text-left font-medium" data-v-b381a06a>\u540D\u79F0/\u63CF\u8FF0</th></tr></thead><tbody data-v-b381a06a><!--[-->`);
      ssrRenderList(filteredAscii.value, (char) => {
        _push(`<tr class="${ssrRenderClass([{ "bg-primary/5": highlightedChar.value === char.decimal }, "hover:bg-muted/50 transition-colors"])}" data-v-b381a06a><td class="px-4 py-3 font-mono" data-v-b381a06a>${ssrInterpolate(char.decimal)}</td><td class="px-4 py-3 font-mono" data-v-b381a06a>${ssrInterpolate(char.hexadecimal.toUpperCase())}</td><td class="px-4 py-3 font-mono" data-v-b381a06a>${ssrInterpolate(char.octal)}</td><td class="px-4 py-3 font-mono" data-v-b381a06a>${ssrInterpolate(char.binary)}</td><td class="px-4 py-3" data-v-b381a06a>`);
        if (char.isControl) {
          _push(`<span class="text-muted-foreground" data-v-b381a06a>${ssrInterpolate(char.controlKey || "-")}</span>`);
        } else {
          _push(`<span class="text-lg" data-v-b381a06a>${ssrInterpolate(char.character)}</span>`);
        }
        _push(`</td><td class="px-4 py-3 font-mono text-xs" data-v-b381a06a>${ssrInterpolate(char.htmlEntity || "-")}</td><td class="px-4 py-3 text-xs text-muted-foreground" data-v-b381a06a>${ssrInterpolate(char.description)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><div class="mt-8 bg-card rounded-lg p-6" data-v-b381a06a><h2 class="text-xl font-semibold mb-4" data-v-b381a06a>\u6269\u5C55 ASCII \u8868 (128-255)</h2><div class="text-sm text-muted-foreground mb-4" data-v-b381a06a><p data-v-b381a06a>\u6269\u5C55 ASCII \u5B57\u7B26\u96C6\uFF08\u6839\u636E\u4E0D\u540C\u7684\u4EE3\u7801\u9875\u53EF\u80FD\u6709\u6240\u4E0D\u540C\uFF09</p></div><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2" data-v-b381a06a><!--[-->`);
      ssrRenderList(extendedAscii.value, (char) => {
        _push(`<div class="bg-muted p-3 rounded text-center hover:bg-primary/10 transition-colors cursor-pointer" data-v-b381a06a><div class="text-lg mb-1" data-v-b381a06a>${ssrInterpolate(char.character)}</div><div class="text-xs font-mono" data-v-b381a06a>${ssrInterpolate(char.decimal)}</div><div class="text-xs font-mono text-muted-foreground" data-v-b381a06a>${ssrInterpolate(char.hexadecimal.toUpperCase())}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="mt-12 space-y-6" data-v-b381a06a><div class="bg-card rounded-lg p-6" data-v-b381a06a><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-b381a06a>`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5173\u4E8E ASCII </h3><div class="space-y-4 text-sm" data-v-b381a06a><div data-v-b381a06a><h4 class="font-medium mb-2" data-v-b381a06a>\u4EC0\u4E48\u662F ASCII\uFF1F</h4><p class="text-muted-foreground" data-v-b381a06a> ASCII\uFF08American Standard Code for Information Interchange\uFF0C\u7F8E\u56FD\u4FE1\u606F\u4EA4\u6362\u6807\u51C6\u4EE3\u7801\uFF09\u662F\u57FA\u4E8E\u62C9\u4E01\u5B57\u6BCD\u7684\u4E00\u5957\u7535\u8111\u7F16\u7801\u7CFB\u7EDF\u3002 \u5B83\u4F7F\u75287\u4F4D\u4E8C\u8FDB\u5236\u6570\u6765\u8868\u793A128\u4E2A\u4E0D\u540C\u7684\u5B57\u7B26\uFF0C\u5305\u62EC\u63A7\u5236\u5B57\u7B26\u3001\u6570\u5B57\u3001\u5B57\u6BCD\u548C\u6807\u70B9\u7B26\u53F7\u3002 </p></div><div data-v-b381a06a><h4 class="font-medium mb-2" data-v-b381a06a>\u5B57\u7B26\u5206\u7C7B</h4><ul class="text-muted-foreground space-y-1 ml-4" data-v-b381a06a><li data-v-b381a06a>\u2022 0-31: \u63A7\u5236\u5B57\u7B26\uFF08\u975E\u6253\u5370\u5B57\u7B26\uFF09</li><li data-v-b381a06a>\u2022 32: \u7A7A\u683C\u5B57\u7B26</li><li data-v-b381a06a>\u2022 48-57: \u6570\u5B57 0-9</li><li data-v-b381a06a>\u2022 65-90: \u5927\u5199\u5B57\u6BCD A-Z</li><li data-v-b381a06a>\u2022 97-122: \u5C0F\u5199\u5B57\u6BCD a-z</li><li data-v-b381a06a>\u2022 33-47, 58-64, 91-96, 123-126: \u6807\u70B9\u7B26\u53F7</li></ul></div><div data-v-b381a06a><h4 class="font-medium mb-2" data-v-b381a06a>\u5E38\u7528\u63A7\u5236\u5B57\u7B26</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground" data-v-b381a06a><div data-v-b381a06a>\u2022 NUL (0) - \u7A7A\u5B57\u7B26</div><div data-v-b381a06a>\u2022 BEL (7) - \u54CD\u94C3</div><div data-v-b381a06a>\u2022 BS (8) - \u9000\u683C</div><div data-v-b381a06a>\u2022 HT (9) - \u6C34\u5E73\u5236\u8868\u7B26</div><div data-v-b381a06a>\u2022 LF (10) - \u6362\u884C</div><div data-v-b381a06a>\u2022 VT (11) - \u5782\u76F4\u5236\u8868\u7B26</div><div data-v-b381a06a>\u2022 FF (12) - \u6362\u9875</div><div data-v-b381a06a>\u2022 CR (13) - \u56DE\u8F66</div><div data-v-b381a06a>\u2022 ESC (27) - \u8F6C\u4E49</div><div data-v-b381a06a>\u2022 DEL (127) - \u5220\u9664</div></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-b381a06a><h3 class="text-lg font-semibold mb-4" data-v-b381a06a>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-b381a06a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/hex-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-b381a06a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-b381a06a${_scopeId}>\u5341\u516D\u8FDB\u5236\u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-b381a06a${_scopeId}>\u6587\u672C\u4E0E\u5341\u516D\u8FDB\u5236\u4E92\u8F6C</p></div>`);
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
            _push2(`<div data-v-b381a06a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-b381a06a${_scopeId}>\u4E8C\u8FDB\u5236\u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-b381a06a${_scopeId}>\u6587\u672C\u4E0E\u4E8C\u8FDB\u5236\u4E92\u8F6C</p></div>`);
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
        to: "/tools/unicode-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-b381a06a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-b381a06a${_scopeId}>Unicode \u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-b381a06a${_scopeId}>Unicode \u7F16\u7801\u8F6C\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
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
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/ascii-table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const asciiTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b381a06a"]]);

export { asciiTable as default };
//# sourceMappingURL=ascii-table-CtVxdlZ1.mjs.map
