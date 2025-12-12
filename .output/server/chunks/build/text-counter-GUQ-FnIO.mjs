import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { FileText, ArrowRight, Type } from 'lucide-vue-next';
import { f as useSeoMeta } from './server.mjs';
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
  __name: "text-counter",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const statistics = ref({
      characters: 0,
      charactersNoSpaces: 0,
      words: 0,
      chineseCharacters: 0,
      englishWords: 0,
      numbers: 0,
      paragraphs: 0,
      sentences: 0,
      lines: 0,
      readingTime: 0
    });
    const wordFrequency = ref([]);
    const paragraphStats = ref([]);
    const updateStatistics = () => {
      const text = inputText.value;
      statistics.value.characters = text.length;
      statistics.value.charactersNoSpaces = text.replace(/\s/g, "").length;
      statistics.value.chineseCharacters = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
      statistics.value.numbers = (text.match(/\d/g) || []).length;
      const englishWords = text.match(/[a-zA-Z]+/g) || [];
      statistics.value.englishWords = englishWords.length;
      const chineseWords = text.match(/[\u4e00-\u9fa5]+/g) || [];
      statistics.value.words = englishWords.length + chineseWords.length;
      statistics.value.paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim()).length;
      statistics.value.sentences = (text.match(/[。！？.!?]+/g) || []).length;
      statistics.value.lines = text.split("\n").length;
      statistics.value.readingTime = Math.ceil(statistics.value.words / 200);
      updateWordFrequency();
      updateParagraphStats();
    };
    const updateWordFrequency = () => {
      const text = inputText.value.toLowerCase();
      const chineseWords = text.match(/[\u4e00-\u9fa5]+/g) || [];
      const englishWords = text.match(/[a-zA-Z]+/g) || [];
      const allWords = [...chineseWords, ...englishWords];
      const frequency = {};
      allWords.forEach((word) => {
        if (word.length > 1) {
          frequency[word] = (frequency[word] || 0) + 1;
        }
      });
      wordFrequency.value = Object.entries(frequency).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([word, count]) => ({ word, count }));
    };
    const updateParagraphStats = () => {
      const paragraphs = inputText.value.split(/\n\s*\n/).filter((p) => p.trim());
      paragraphStats.value = paragraphs.map((paragraph) => {
        const words = paragraph.split(/\s+/).filter((w) => w).length;
        const characters = paragraph.length;
        const preview = paragraph.substring(0, 50) + (paragraph.length > 50 ? "..." : "");
        return { words, characters, preview };
      });
    };
    const getPercentage = (value, total) => {
      if (total === 0) return 0;
      return Math.round(value / total * 100);
    };
    updateStatistics();
    useSeoMeta({
      title: "\u5B57\u6570\u7EDF\u8BA1\u5DE5\u5177 - \u5728\u7EBF\u6587\u672C\u5B57\u6570\u5B57\u7B26\u7EDF\u8BA1",
      description: "\u514D\u8D39\u5728\u7EBF\u5B57\u6570\u7EDF\u8BA1\u5DE5\u5177\uFF0C\u5B9E\u65F6\u7EDF\u8BA1\u6587\u672C\u5B57\u7B26\u6570\u3001\u5355\u8BCD\u6570\u3001\u6BB5\u843D\u6570\u3001\u53E5\u5B50\u6570\u7B49\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u652F\u6301\u4E2D\u82F1\u6587\u7EDF\u8BA1\u3002",
      keywords: ["\u5B57\u6570\u7EDF\u8BA1", "\u5B57\u7B26\u7EDF\u8BA1", "\u5355\u8BCD\u7EDF\u8BA1", "\u5728\u7EBF\u5DE5\u5177", "\u6587\u672C\u5206\u6790"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u5B57\u6570\u7EDF\u8BA1\u5DE5\u5177</h1><p class="text-muted-foreground">\u5B9E\u65F6\u7EDF\u8BA1\u6587\u672C\u7684\u5B57\u6570\u3001\u5B57\u7B26\u6570\u3001\u6BB5\u843D\u6570\u3001\u53E5\u5B50\u6570\u7B49\u4FE1\u606F</p></div><div class="space-y-6"><div class="bg-card rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold">\u8F93\u5165\u6587\u672C</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u7C98\u8D34\u6587\u672C </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><textarea placeholder="\u8BF7\u8F93\u5165\u6216\u7C98\u8D34\u8981\u7EDF\u8BA1\u7684\u6587\u672C..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.characters)}</div><div class="text-sm text-muted-foreground">\u603B\u5B57\u7B26\u6570</div></div><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.charactersNoSpaces)}</div><div class="text-sm text-muted-foreground">\u5B57\u7B26\u6570\uFF08\u65E0\u7A7A\u683C\uFF09</div></div><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.words)}</div><div class="text-sm text-muted-foreground">\u5355\u8BCD\u6570</div></div><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.chineseCharacters)}</div><div class="text-sm text-muted-foreground">\u4E2D\u6587\u5B57\u7B26</div></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.paragraphs)}</div><div class="text-sm text-muted-foreground">\u6BB5\u843D\u6570</div></div><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.sentences)}</div><div class="text-sm text-muted-foreground">\u53E5\u5B50\u6570</div></div><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.lines)}</div><div class="text-sm text-muted-foreground">\u884C\u6570</div></div><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.readingTime)}</div><div class="text-sm text-muted-foreground">\u9605\u8BFB\u65F6\u95F4\uFF08\u5206\u949F\uFF09</div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8BE6\u7EC6\u5206\u6790</h2><div class="space-y-4"><div><h3 class="font-medium mb-2">\u5B57\u7B26\u7C7B\u578B\u5206\u5E03</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="space-y-2"><div class="flex justify-between text-sm"><span>\u4E2D\u6587\u5B57\u7B26</span><span class="font-mono">${ssrInterpolate(statistics.value.chineseCharacters)}</span></div><div class="w-full bg-muted rounded-full h-2"><div class="bg-primary h-2 rounded-full transition-all" style="${ssrRenderStyle({ width: getPercentage(statistics.value.chineseCharacters, statistics.value.characters) + "%" })}"></div></div></div><div class="space-y-2"><div class="flex justify-between text-sm"><span>\u82F1\u6587\u5355\u8BCD</span><span class="font-mono">${ssrInterpolate(statistics.value.englishWords)}</span></div><div class="w-full bg-muted rounded-full h-2"><div class="bg-primary h-2 rounded-full transition-all" style="${ssrRenderStyle({ width: getPercentage(statistics.value.englishWords, statistics.value.words) + "%" })}"></div></div></div><div class="space-y-2"><div class="flex justify-between text-sm"><span>\u6570\u5B57</span><span class="font-mono">${ssrInterpolate(statistics.value.numbers)}</span></div><div class="w-full bg-muted rounded-full h-2"><div class="bg-primary h-2 rounded-full transition-all" style="${ssrRenderStyle({ width: getPercentage(statistics.value.numbers, statistics.value.characters) + "%" })}"></div></div></div></div></div><div><h3 class="font-medium mb-2">\u8BCD\u9891\u7EDF\u8BA1\uFF08Top 10\uFF09</h3>`);
      if (wordFrequency.value.length > 0) {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(wordFrequency.value, (item, index) => {
          _push(`<div class="flex items-center justify-between text-sm p-2 bg-muted rounded"><span class="flex items-center gap-2"><span class="font-mono text-muted-foreground">#${ssrInterpolate(index + 1)}</span><span>${ssrInterpolate(item.word)}</span></span><span class="font-mono text-primary">${ssrInterpolate(item.count)} \u6B21</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-sm text-muted-foreground p-4 bg-muted rounded text-center"> \u6682\u65E0\u8BCD\u9891\u7EDF\u8BA1 </div>`);
      }
      _push(`</div><div><h3 class="font-medium mb-2">\u6BB5\u843D\u7EDF\u8BA1</h3>`);
      if (paragraphStats.value.length > 0) {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(paragraphStats.value, (item, index) => {
          _push(`<div class="p-3 bg-muted rounded text-sm"><div class="flex justify-between mb-1"><span class="font-medium">\u6BB5\u843D ${ssrInterpolate(index + 1)}</span><span class="text-muted-foreground">${ssrInterpolate(item.words)} \u8BCD \xB7 ${ssrInterpolate(item.characters)} \u5B57\u7B26 </span></div><div class="text-muted-foreground truncate">${ssrInterpolate(item.preview)}</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-sm text-muted-foreground p-4 bg-muted rounded text-center"> \u6682\u65E0\u6BB5\u843D\u7EDF\u8BA1 </div>`);
      }
      _push(`</div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/markdown-editor",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Markdown\u7F16\u8F91\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u5B9E\u65F6\u9884\u89C8\u7F16\u8F91</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Markdown\u7F16\u8F91\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u5B9E\u65F6\u9884\u89C8\u7F16\u8F91")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/case-converter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Type), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u5927\u5C0F\u5199\u8F6C\u6362</p><p class="text-xs text-muted-foreground"${_scopeId}>\u6587\u672C\u683C\u5F0F\u8F6C\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Type), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5927\u5C0F\u5199\u8F6C\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6587\u672C\u683C\u5F0F\u8F6C\u6362")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/text-replace",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u6587\u672C\u66FF\u6362</p><p class="text-xs text-muted-foreground"${_scopeId}>\u6279\u91CF\u67E5\u627E\u66FF\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u6587\u672C\u66FF\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6279\u91CF\u67E5\u627E\u66FF\u6362")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/text-counter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=text-counter-GUQ-FnIO.mjs.map
