import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "morse-code",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const inputType = ref("auto");
    const separator = ref("space");
    const caseType = ref("upper");
    const outputs = ref({
      text: "",
      morse: ""
    });
    const copied = ref({
      text: false,
      morse: false
    });
    const isPlaying = ref(false);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const audioSettings = ref({
      frequency: 600,
      dotDuration: 100,
      volume: 0.5
    });
    const morseAlphabet = {
      "A": ".-",
      "B": "-...",
      "C": "-.-.",
      "D": "-..",
      "E": ".",
      "F": "..-.",
      "G": "--.",
      "H": "....",
      "I": "..",
      "J": ".---",
      "K": "-.-",
      "L": ".-..",
      "M": "--",
      "N": "-.",
      "O": "---",
      "P": ".--.",
      "Q": "--.-",
      "R": ".-.",
      "S": "...",
      "T": "-",
      "U": "..-",
      "V": "...-",
      "W": ".--",
      "X": "-..-",
      "Y": "-.--",
      "Z": "--..",
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "'": ".----.",
      "!": "-.-.--",
      "/": "-..-.",
      "(": "-.--.",
      ")": "-.--.-",
      "&": ".-...",
      ":": "---...",
      ";": "-.-.-.",
      "=": "-...-",
      "+": ".-.-.",
      "-": "-....-",
      "_": "..--.-",
      '"': ".-..-.",
      "$": "...-..-",
      "@": ".--.-.",
      " ": "/"
    };
    const reverseMorseAlphabet = computed(() => {
      const reversed = {};
      for (const [char, morse] of Object.entries(morseAlphabet)) {
        reversed[morse] = char;
      }
      return reversed;
    });
    const separatorMap = {
      space: " ",
      slash: " / ",
      pipe: " | ",
      newline: "\n"
    };
    const detectInputType = (text) => {
      const morsePattern = /^[.-\s\/|]+$/;
      if (morsePattern.test(text)) {
        return "morse";
      }
      return "text";
    };
    const textToMorse = (text, sep, casing) => {
      let result = [];
      let processedText = text;
      if (casing === "upper") {
        processedText = text.toUpperCase();
      } else if (casing === "lower") {
        processedText = text.toLowerCase();
      }
      for (let char of processedText) {
        if (morseAlphabet[char]) {
          result.push(morseAlphabet[char]);
        } else {
          result.push("..--..");
        }
      }
      return result.join(separatorMap[sep]);
    };
    const morseToText = (morse, sep) => {
      const words = morse.split(/[\s\/|]+/);
      let result = [];
      for (let word of words) {
        if (reverseMorseAlphabet.value[word]) {
          result.push(reverseMorseAlphabet.value[word]);
        } else if (word === "") {
          result.push(" ");
        }
      }
      return result.join("");
    };
    const stats = computed(() => {
      if (!outputs.value.morse) {
        return { characters: 0, words: 0, dots: 0, dashes: 0 };
      }
      const morse = outputs.value.morse;
      const dots = (morse.match(/\./g) || []).length;
      const dashes = (morse.match(/-/g) || []).length;
      const characters = outputs.value.text.length;
      const words = outputs.value.text.split(/\s+/).filter((word) => word).length;
      return { characters, words, dots, dashes };
    });
    const convert = () => {
      if (!inputText.value) {
        outputs.value = {
          text: "",
          morse: ""
        };
        return;
      }
      const actualInputType = inputType.value === "auto" ? detectInputType(inputText.value) : inputType.value;
      if (actualInputType === "text") {
        outputs.value.text = inputText.value;
        outputs.value.morse = textToMorse(inputText.value, separator.value, caseType.value);
      } else {
        outputs.value.morse = inputText.value;
        outputs.value.text = morseToText(inputText.value, separator.value);
      }
    };
    watch([inputText, inputType, separator, caseType], () => {
      convert();
    });
    useSeoMeta({
      title: "摩尔斯电码转换器 - 在线摩尔斯电码编码解码工具",
      description: "免费在线摩尔斯电码转换工具，支持文本与摩尔斯电码相互转换，内置音频播放功能。",
      keywords: ["morse", "摩尔斯电码", "converter", "电报", "编码", "在线工具", "音频播放"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-171bcc8a><div class="mt-4 mb-8" data-v-171bcc8a><h1 class="text-3xl font-bold mb-3" data-v-171bcc8a>摩尔斯电码转换器</h1><p class="text-muted-foreground" data-v-171bcc8a>在文本和摩尔斯电码之间相互转换，支持播放电码声音</p></div><div class="space-y-6" data-v-171bcc8a><div class="space-y-4" data-v-171bcc8a><div class="flex items-center justify-between" data-v-171bcc8a><h2 class="text-lg font-semibold" data-v-171bcc8a>输入内容</h2><div class="flex gap-2" data-v-171bcc8a><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a> 清空 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a> 粘贴 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a> 示例 </button></div></div><textarea placeholder="请输入要转换的文本或摩尔斯电码..." class="w-full h-48 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-171bcc8a>${ssrInterpolate(inputText.value)}</textarea><div class="flex flex-wrap gap-4" data-v-171bcc8a><div class="flex items-center gap-2" data-v-171bcc8a><label class="text-sm font-medium" data-v-171bcc8a>输入类型:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-171bcc8a><option value="text" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "text") : ssrLooseEqual(inputType.value, "text")) ? " selected" : ""}>文本</option><option value="morse" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "morse") : ssrLooseEqual(inputType.value, "morse")) ? " selected" : ""}>摩尔斯电码</option><option value="auto" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "auto") : ssrLooseEqual(inputType.value, "auto")) ? " selected" : ""}>自动检测</option></select></div><div class="flex items-center gap-2" data-v-171bcc8a><label class="text-sm font-medium" data-v-171bcc8a>分隔符:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-171bcc8a><option value="space" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "space") : ssrLooseEqual(separator.value, "space")) ? " selected" : ""}>空格</option><option value="slash" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "slash") : ssrLooseEqual(separator.value, "slash")) ? " selected" : ""}>斜杠</option><option value="pipe" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "pipe") : ssrLooseEqual(separator.value, "pipe")) ? " selected" : ""}>竖线</option><option value="newline" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "newline") : ssrLooseEqual(separator.value, "newline")) ? " selected" : ""}>换行</option></select></div><div class="flex items-center gap-2" data-v-171bcc8a><label class="text-sm font-medium" data-v-171bcc8a>大小写:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-171bcc8a><option value="upper" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(caseType.value) ? ssrLooseContain(caseType.value, "upper") : ssrLooseEqual(caseType.value, "upper")) ? " selected" : ""}>大写</option><option value="lower" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(caseType.value) ? ssrLooseContain(caseType.value, "lower") : ssrLooseEqual(caseType.value, "lower")) ? " selected" : ""}>小写</option><option value="preserve" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(caseType.value) ? ssrLooseContain(caseType.value, "preserve") : ssrLooseEqual(caseType.value, "preserve")) ? " selected" : ""}>保持原样</option></select></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-171bcc8a><div class="space-y-4" data-v-171bcc8a><div class="flex items-center justify-between" data-v-171bcc8a><h2 class="text-lg font-semibold" data-v-171bcc8a>文本结果</h2><div class="flex gap-2" data-v-171bcc8a>`);
      if (outputs.value.text) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a>${ssrInterpolate(copied.value.text ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.text) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><pre class="w-full h-48 p-4 bg-muted rounded-lg overflow-auto text-sm whitespace-pre-wrap break-all" data-v-171bcc8a>${ssrInterpolate(outputs.value.text || "转换结果将显示在这里")}</pre></div><div class="space-y-4" data-v-171bcc8a><div class="flex items-center justify-between" data-v-171bcc8a><h2 class="text-lg font-semibold" data-v-171bcc8a>摩尔斯电码</h2><div class="flex gap-2" data-v-171bcc8a>`);
      if (outputs.value.morse) {
        _push(`<button${ssrIncludeBooleanAttr(isPlaying.value) ? " disabled" : ""} class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50" data-v-171bcc8a>${ssrInterpolate(isPlaying.value ? "播放中..." : "播放")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.morse) {
        _push(`<button${ssrIncludeBooleanAttr(!isPlaying.value) ? " disabled" : ""} class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50" data-v-171bcc8a> 停止 </button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.morse) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a>${ssrInterpolate(copied.value.morse ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.morse) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><pre class="w-full h-48 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-171bcc8a>${ssrInterpolate(outputs.value.morse || "转换结果将显示在这里")}</pre></div></div><div class="bg-card rounded-lg p-6" data-v-171bcc8a><h3 class="text-lg font-semibold mb-4" data-v-171bcc8a>音频设置</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-171bcc8a><div data-v-171bcc8a><label class="text-sm text-muted-foreground mb-2 block" data-v-171bcc8a>频率 (Hz)</label><input${ssrRenderAttr("value", audioSettings.value.frequency)} type="range" min="200" max="1000" class="w-full" data-v-171bcc8a><div class="text-center text-sm mt-1" data-v-171bcc8a>${ssrInterpolate(audioSettings.value.frequency)} Hz</div></div><div data-v-171bcc8a><label class="text-sm text-muted-foreground mb-2 block" data-v-171bcc8a>点长度 (ms)</label><input${ssrRenderAttr("value", audioSettings.value.dotDuration)} type="range" min="50" max="300" class="w-full" data-v-171bcc8a><div class="text-center text-sm mt-1" data-v-171bcc8a>${ssrInterpolate(audioSettings.value.dotDuration)} ms</div></div><div data-v-171bcc8a><label class="text-sm text-muted-foreground mb-2 block" data-v-171bcc8a>音量</label><input${ssrRenderAttr("value", audioSettings.value.volume)} type="range" min="0" max="1" step="0.1" class="w-full" data-v-171bcc8a><div class="text-center text-sm mt-1" data-v-171bcc8a>${ssrInterpolate(Math.round(audioSettings.value.volume * 100))}%</div></div></div></div><div class="bg-card rounded-lg p-6" data-v-171bcc8a><h3 class="text-lg font-semibold mb-4" data-v-171bcc8a>摩尔斯电码字符表</h3><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2" data-v-171bcc8a><!--[-->`);
      ssrRenderList(morseAlphabet, (morse, char) => {
        _push(`<div class="flex items-center justify-between p-2 bg-muted rounded hover:bg-primary/10 transition-colors" data-v-171bcc8a><span class="font-mono text-lg" data-v-171bcc8a>${ssrInterpolate(char)}</span><span class="font-mono text-sm text-muted-foreground ml-2" data-v-171bcc8a>${ssrInterpolate(morse)}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (inputText.value) {
        _push(`<div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-v-171bcc8a><div class="bg-card border rounded-lg p-4 text-center" data-v-171bcc8a><div class="text-2xl font-bold text-primary" data-v-171bcc8a>${ssrInterpolate(stats.value.characters)}</div><div class="text-sm text-muted-foreground" data-v-171bcc8a>字符数</div></div><div class="bg-card border rounded-lg p-4 text-center" data-v-171bcc8a><div class="text-2xl font-bold text-primary" data-v-171bcc8a>${ssrInterpolate(stats.value.words)}</div><div class="text-sm text-muted-foreground" data-v-171bcc8a>单词数</div></div><div class="bg-card border rounded-lg p-4 text-center" data-v-171bcc8a><div class="text-2xl font-bold text-primary" data-v-171bcc8a>${ssrInterpolate(stats.value.dots)}</div><div class="text-sm text-muted-foreground" data-v-171bcc8a>点数</div></div><div class="bg-card border rounded-lg p-4 text-center" data-v-171bcc8a><div class="text-2xl font-bold text-primary" data-v-171bcc8a>${ssrInterpolate(stats.value.dashes)}</div><div class="text-sm text-muted-foreground" data-v-171bcc8a>划数</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-12 space-y-6" data-v-171bcc8a><div class="bg-card rounded-lg p-6" data-v-171bcc8a><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-171bcc8a>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用技巧 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-171bcc8a><p data-v-171bcc8a>• 摩尔斯电码使用点(.)和划(-)来表示字母、数字和标点符号</p><p data-v-171bcc8a>• 字母间用空格分隔，单词间用斜杠(/)或更多空格分隔</p><p data-v-171bcc8a>• 可以调整播放速度和频率来适应不同的学习需求</p><p data-v-171bcc8a>• 点击字符表中的字符可以快速复制</p></div></div><div class="bg-card rounded-lg p-6" data-v-171bcc8a><h3 class="text-lg font-semibold mb-4" data-v-171bcc8a>摩尔斯电码规则</h3><div class="space-y-4" data-v-171bcc8a><div data-v-171bcc8a><h4 class="font-medium text-sm mb-2" data-v-171bcc8a>基本符号</h4><div class="bg-muted p-3 rounded-lg" data-v-171bcc8a><pre class="text-xs font-mono" data-v-171bcc8a>点 (·)  - 短信号，基本时间单位
划 (−)  - 长信号，等于3个点的时间
字母间隔 - 等于3个点的时间
单词间隔 - 等于7个点的时间</pre></div></div><div data-v-171bcc8a><h4 class="font-medium text-sm mb-2" data-v-171bcc8a>常见组合</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-171bcc8a><div class="bg-muted p-3 rounded-lg" data-v-171bcc8a><p class="text-xs font-medium mb-2" data-v-171bcc8a>紧急信号 SOS:</p><p class="text-xs font-mono" data-v-171bcc8a>··· −−− ···</p></div><div class="bg-muted p-3 rounded-lg" data-v-171bcc8a><p class="text-xs font-medium mb-2" data-v-171bcc8a>测试信号:</p><p class="text-xs font-mono" data-v-171bcc8a>−·−·−· −·−·−</p></div></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-171bcc8a><h3 class="text-lg font-semibold mb-4" data-v-171bcc8a>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-171bcc8a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/binary-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Type), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-171bcc8a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-171bcc8a${_scopeId}>二进制转换</p><p class="text-xs text-muted-foreground" data-v-171bcc8a${_scopeId}>文本与二进制互转</p></div>`);
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
        to: "/tools/unicode-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-171bcc8a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-171bcc8a${_scopeId}>Unicode 转换</p><p class="text-xs text-muted-foreground" data-v-171bcc8a${_scopeId}>Unicode 编码转换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
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
        to: "/tools/hex-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-171bcc8a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-171bcc8a${_scopeId}>十六进制转换</p><p class="text-xs text-muted-foreground" data-v-171bcc8a${_scopeId}>文本与十六进制互转</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
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
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/morse-code.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const morseCode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-171bcc8a"]]);
export {
  morseCode as default
};
//# sourceMappingURL=morse-code-SFL7fIfj.js.map
