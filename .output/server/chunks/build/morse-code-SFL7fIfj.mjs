import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { Zap, Type, ArrowRight, Hash, FileText } from 'lucide-vue-next';
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
      title: "\u6469\u5C14\u65AF\u7535\u7801\u8F6C\u6362\u5668 - \u5728\u7EBF\u6469\u5C14\u65AF\u7535\u7801\u7F16\u7801\u89E3\u7801\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u6469\u5C14\u65AF\u7535\u7801\u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301\u6587\u672C\u4E0E\u6469\u5C14\u65AF\u7535\u7801\u76F8\u4E92\u8F6C\u6362\uFF0C\u5185\u7F6E\u97F3\u9891\u64AD\u653E\u529F\u80FD\u3002",
      keywords: ["morse", "\u6469\u5C14\u65AF\u7535\u7801", "converter", "\u7535\u62A5", "\u7F16\u7801", "\u5728\u7EBF\u5DE5\u5177", "\u97F3\u9891\u64AD\u653E"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-171bcc8a><div class="mt-4 mb-8" data-v-171bcc8a><h1 class="text-3xl font-bold mb-3" data-v-171bcc8a>\u6469\u5C14\u65AF\u7535\u7801\u8F6C\u6362\u5668</h1><p class="text-muted-foreground" data-v-171bcc8a>\u5728\u6587\u672C\u548C\u6469\u5C14\u65AF\u7535\u7801\u4E4B\u95F4\u76F8\u4E92\u8F6C\u6362\uFF0C\u652F\u6301\u64AD\u653E\u7535\u7801\u58F0\u97F3</p></div><div class="space-y-6" data-v-171bcc8a><div class="space-y-4" data-v-171bcc8a><div class="flex items-center justify-between" data-v-171bcc8a><h2 class="text-lg font-semibold" data-v-171bcc8a>\u8F93\u5165\u5185\u5BB9</h2><div class="flex gap-2" data-v-171bcc8a><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a> \u6E05\u7A7A </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a> \u7C98\u8D34 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a> \u793A\u4F8B </button></div></div><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u8F6C\u6362\u7684\u6587\u672C\u6216\u6469\u5C14\u65AF\u7535\u7801..." class="w-full h-48 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-171bcc8a>${ssrInterpolate(inputText.value)}</textarea><div class="flex flex-wrap gap-4" data-v-171bcc8a><div class="flex items-center gap-2" data-v-171bcc8a><label class="text-sm font-medium" data-v-171bcc8a>\u8F93\u5165\u7C7B\u578B:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-171bcc8a><option value="text" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "text") : ssrLooseEqual(inputType.value, "text")) ? " selected" : ""}>\u6587\u672C</option><option value="morse" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "morse") : ssrLooseEqual(inputType.value, "morse")) ? " selected" : ""}>\u6469\u5C14\u65AF\u7535\u7801</option><option value="auto" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(inputType.value) ? ssrLooseContain(inputType.value, "auto") : ssrLooseEqual(inputType.value, "auto")) ? " selected" : ""}>\u81EA\u52A8\u68C0\u6D4B</option></select></div><div class="flex items-center gap-2" data-v-171bcc8a><label class="text-sm font-medium" data-v-171bcc8a>\u5206\u9694\u7B26:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-171bcc8a><option value="space" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "space") : ssrLooseEqual(separator.value, "space")) ? " selected" : ""}>\u7A7A\u683C</option><option value="slash" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "slash") : ssrLooseEqual(separator.value, "slash")) ? " selected" : ""}>\u659C\u6760</option><option value="pipe" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "pipe") : ssrLooseEqual(separator.value, "pipe")) ? " selected" : ""}>\u7AD6\u7EBF</option><option value="newline" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(separator.value) ? ssrLooseContain(separator.value, "newline") : ssrLooseEqual(separator.value, "newline")) ? " selected" : ""}>\u6362\u884C</option></select></div><div class="flex items-center gap-2" data-v-171bcc8a><label class="text-sm font-medium" data-v-171bcc8a>\u5927\u5C0F\u5199:</label><select class="px-3 py-1.5 border rounded-md text-sm" data-v-171bcc8a><option value="upper" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(caseType.value) ? ssrLooseContain(caseType.value, "upper") : ssrLooseEqual(caseType.value, "upper")) ? " selected" : ""}>\u5927\u5199</option><option value="lower" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(caseType.value) ? ssrLooseContain(caseType.value, "lower") : ssrLooseEqual(caseType.value, "lower")) ? " selected" : ""}>\u5C0F\u5199</option><option value="preserve" data-v-171bcc8a${ssrIncludeBooleanAttr(Array.isArray(caseType.value) ? ssrLooseContain(caseType.value, "preserve") : ssrLooseEqual(caseType.value, "preserve")) ? " selected" : ""}>\u4FDD\u6301\u539F\u6837</option></select></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-171bcc8a><div class="space-y-4" data-v-171bcc8a><div class="flex items-center justify-between" data-v-171bcc8a><h2 class="text-lg font-semibold" data-v-171bcc8a>\u6587\u672C\u7ED3\u679C</h2><div class="flex gap-2" data-v-171bcc8a>`);
      if (outputs.value.text) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a>${ssrInterpolate(copied.value.text ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.text) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a> \u4E0B\u8F7D </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><pre class="w-full h-48 p-4 bg-muted rounded-lg overflow-auto text-sm whitespace-pre-wrap break-all" data-v-171bcc8a>${ssrInterpolate(outputs.value.text || "\u8F6C\u6362\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC")}</pre></div><div class="space-y-4" data-v-171bcc8a><div class="flex items-center justify-between" data-v-171bcc8a><h2 class="text-lg font-semibold" data-v-171bcc8a>\u6469\u5C14\u65AF\u7535\u7801</h2><div class="flex gap-2" data-v-171bcc8a>`);
      if (outputs.value.morse) {
        _push(`<button${ssrIncludeBooleanAttr(isPlaying.value) ? " disabled" : ""} class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50" data-v-171bcc8a>${ssrInterpolate(isPlaying.value ? "\u64AD\u653E\u4E2D..." : "\u64AD\u653E")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.morse) {
        _push(`<button${ssrIncludeBooleanAttr(!isPlaying.value) ? " disabled" : ""} class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50" data-v-171bcc8a> \u505C\u6B62 </button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.morse) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a>${ssrInterpolate(copied.value.morse ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputs.value.morse) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-171bcc8a> \u4E0B\u8F7D </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><pre class="w-full h-48 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-171bcc8a>${ssrInterpolate(outputs.value.morse || "\u8F6C\u6362\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC")}</pre></div></div><div class="bg-card rounded-lg p-6" data-v-171bcc8a><h3 class="text-lg font-semibold mb-4" data-v-171bcc8a>\u97F3\u9891\u8BBE\u7F6E</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-171bcc8a><div data-v-171bcc8a><label class="text-sm text-muted-foreground mb-2 block" data-v-171bcc8a>\u9891\u7387 (Hz)</label><input${ssrRenderAttr("value", audioSettings.value.frequency)} type="range" min="200" max="1000" class="w-full" data-v-171bcc8a><div class="text-center text-sm mt-1" data-v-171bcc8a>${ssrInterpolate(audioSettings.value.frequency)} Hz</div></div><div data-v-171bcc8a><label class="text-sm text-muted-foreground mb-2 block" data-v-171bcc8a>\u70B9\u957F\u5EA6 (ms)</label><input${ssrRenderAttr("value", audioSettings.value.dotDuration)} type="range" min="50" max="300" class="w-full" data-v-171bcc8a><div class="text-center text-sm mt-1" data-v-171bcc8a>${ssrInterpolate(audioSettings.value.dotDuration)} ms</div></div><div data-v-171bcc8a><label class="text-sm text-muted-foreground mb-2 block" data-v-171bcc8a>\u97F3\u91CF</label><input${ssrRenderAttr("value", audioSettings.value.volume)} type="range" min="0" max="1" step="0.1" class="w-full" data-v-171bcc8a><div class="text-center text-sm mt-1" data-v-171bcc8a>${ssrInterpolate(Math.round(audioSettings.value.volume * 100))}%</div></div></div></div><div class="bg-card rounded-lg p-6" data-v-171bcc8a><h3 class="text-lg font-semibold mb-4" data-v-171bcc8a>\u6469\u5C14\u65AF\u7535\u7801\u5B57\u7B26\u8868</h3><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2" data-v-171bcc8a><!--[-->`);
      ssrRenderList(morseAlphabet, (morse, char) => {
        _push(`<div class="flex items-center justify-between p-2 bg-muted rounded hover:bg-primary/10 transition-colors" data-v-171bcc8a><span class="font-mono text-lg" data-v-171bcc8a>${ssrInterpolate(char)}</span><span class="font-mono text-sm text-muted-foreground ml-2" data-v-171bcc8a>${ssrInterpolate(morse)}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (inputText.value) {
        _push(`<div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-v-171bcc8a><div class="bg-card border rounded-lg p-4 text-center" data-v-171bcc8a><div class="text-2xl font-bold text-primary" data-v-171bcc8a>${ssrInterpolate(stats.value.characters)}</div><div class="text-sm text-muted-foreground" data-v-171bcc8a>\u5B57\u7B26\u6570</div></div><div class="bg-card border rounded-lg p-4 text-center" data-v-171bcc8a><div class="text-2xl font-bold text-primary" data-v-171bcc8a>${ssrInterpolate(stats.value.words)}</div><div class="text-sm text-muted-foreground" data-v-171bcc8a>\u5355\u8BCD\u6570</div></div><div class="bg-card border rounded-lg p-4 text-center" data-v-171bcc8a><div class="text-2xl font-bold text-primary" data-v-171bcc8a>${ssrInterpolate(stats.value.dots)}</div><div class="text-sm text-muted-foreground" data-v-171bcc8a>\u70B9\u6570</div></div><div class="bg-card border rounded-lg p-4 text-center" data-v-171bcc8a><div class="text-2xl font-bold text-primary" data-v-171bcc8a>${ssrInterpolate(stats.value.dashes)}</div><div class="text-sm text-muted-foreground" data-v-171bcc8a>\u5212\u6570</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-12 space-y-6" data-v-171bcc8a><div class="bg-card rounded-lg p-6" data-v-171bcc8a><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-171bcc8a>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u6280\u5DE7 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-171bcc8a><p data-v-171bcc8a>\u2022 \u6469\u5C14\u65AF\u7535\u7801\u4F7F\u7528\u70B9(.)\u548C\u5212(-)\u6765\u8868\u793A\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u6807\u70B9\u7B26\u53F7</p><p data-v-171bcc8a>\u2022 \u5B57\u6BCD\u95F4\u7528\u7A7A\u683C\u5206\u9694\uFF0C\u5355\u8BCD\u95F4\u7528\u659C\u6760(/)\u6216\u66F4\u591A\u7A7A\u683C\u5206\u9694</p><p data-v-171bcc8a>\u2022 \u53EF\u4EE5\u8C03\u6574\u64AD\u653E\u901F\u5EA6\u548C\u9891\u7387\u6765\u9002\u5E94\u4E0D\u540C\u7684\u5B66\u4E60\u9700\u6C42</p><p data-v-171bcc8a>\u2022 \u70B9\u51FB\u5B57\u7B26\u8868\u4E2D\u7684\u5B57\u7B26\u53EF\u4EE5\u5FEB\u901F\u590D\u5236</p></div></div><div class="bg-card rounded-lg p-6" data-v-171bcc8a><h3 class="text-lg font-semibold mb-4" data-v-171bcc8a>\u6469\u5C14\u65AF\u7535\u7801\u89C4\u5219</h3><div class="space-y-4" data-v-171bcc8a><div data-v-171bcc8a><h4 class="font-medium text-sm mb-2" data-v-171bcc8a>\u57FA\u672C\u7B26\u53F7</h4><div class="bg-muted p-3 rounded-lg" data-v-171bcc8a><pre class="text-xs font-mono" data-v-171bcc8a>\u70B9 (\xB7)  - \u77ED\u4FE1\u53F7\uFF0C\u57FA\u672C\u65F6\u95F4\u5355\u4F4D
\u5212 (\u2212)  - \u957F\u4FE1\u53F7\uFF0C\u7B49\u4E8E3\u4E2A\u70B9\u7684\u65F6\u95F4
\u5B57\u6BCD\u95F4\u9694 - \u7B49\u4E8E3\u4E2A\u70B9\u7684\u65F6\u95F4
\u5355\u8BCD\u95F4\u9694 - \u7B49\u4E8E7\u4E2A\u70B9\u7684\u65F6\u95F4</pre></div></div><div data-v-171bcc8a><h4 class="font-medium text-sm mb-2" data-v-171bcc8a>\u5E38\u89C1\u7EC4\u5408</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-171bcc8a><div class="bg-muted p-3 rounded-lg" data-v-171bcc8a><p class="text-xs font-medium mb-2" data-v-171bcc8a>\u7D27\u6025\u4FE1\u53F7 SOS:</p><p class="text-xs font-mono" data-v-171bcc8a>\xB7\xB7\xB7 \u2212\u2212\u2212 \xB7\xB7\xB7</p></div><div class="bg-muted p-3 rounded-lg" data-v-171bcc8a><p class="text-xs font-medium mb-2" data-v-171bcc8a>\u6D4B\u8BD5\u4FE1\u53F7:</p><p class="text-xs font-mono" data-v-171bcc8a>\u2212\xB7\u2212\xB7\u2212\xB7 \u2212\xB7\u2212\xB7\u2212</p></div></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-171bcc8a><h3 class="text-lg font-semibold mb-4" data-v-171bcc8a>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-171bcc8a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/binary-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Type), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-171bcc8a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-171bcc8a${_scopeId}>\u4E8C\u8FDB\u5236\u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-171bcc8a${_scopeId}>\u6587\u672C\u4E0E\u4E8C\u8FDB\u5236\u4E92\u8F6C</p></div>`);
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
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-171bcc8a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-171bcc8a${_scopeId}>Unicode \u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-171bcc8a${_scopeId}>Unicode \u7F16\u7801\u8F6C\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
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
        to: "/tools/hex-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-171bcc8a${_scopeId}><p class="font-medium group-hover:text-primary" data-v-171bcc8a${_scopeId}>\u5341\u516D\u8FDB\u5236\u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-171bcc8a${_scopeId}>\u6587\u672C\u4E0E\u5341\u516D\u8FDB\u5236\u4E92\u8F6C</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
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

export { morseCode as default };
//# sourceMappingURL=morse-code-SFL7fIfj.mjs.map
