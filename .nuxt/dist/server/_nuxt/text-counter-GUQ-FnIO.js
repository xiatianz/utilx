import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { FileText, ArrowRight, Type } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
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
      title: "字数统计工具 - 在线文本字数字符统计",
      description: "免费在线字数统计工具，实时统计文本字符数、单词数、段落数、句子数等详细信息，支持中英文统计。",
      keywords: ["字数统计", "字符统计", "单词统计", "在线工具", "文本分析"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">字数统计工具</h1><p class="text-muted-foreground">实时统计文本的字数、字符数、段落数、句子数等信息</p></div><div class="space-y-6"><div class="bg-card rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold">输入文本</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 粘贴文本 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><textarea placeholder="请输入或粘贴要统计的文本..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(inputText.value)}</textarea></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.characters)}</div><div class="text-sm text-muted-foreground">总字符数</div></div><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.charactersNoSpaces)}</div><div class="text-sm text-muted-foreground">字符数（无空格）</div></div><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.words)}</div><div class="text-sm text-muted-foreground">单词数</div></div><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.chineseCharacters)}</div><div class="text-sm text-muted-foreground">中文字符</div></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.paragraphs)}</div><div class="text-sm text-muted-foreground">段落数</div></div><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.sentences)}</div><div class="text-sm text-muted-foreground">句子数</div></div><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.lines)}</div><div class="text-sm text-muted-foreground">行数</div></div><div class="bg-card border rounded-lg p-4 text-center"><div class="text-3xl font-bold text-primary mb-1">${ssrInterpolate(statistics.value.readingTime)}</div><div class="text-sm text-muted-foreground">阅读时间（分钟）</div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">详细分析</h2><div class="space-y-4"><div><h3 class="font-medium mb-2">字符类型分布</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="space-y-2"><div class="flex justify-between text-sm"><span>中文字符</span><span class="font-mono">${ssrInterpolate(statistics.value.chineseCharacters)}</span></div><div class="w-full bg-muted rounded-full h-2"><div class="bg-primary h-2 rounded-full transition-all" style="${ssrRenderStyle({ width: getPercentage(statistics.value.chineseCharacters, statistics.value.characters) + "%" })}"></div></div></div><div class="space-y-2"><div class="flex justify-between text-sm"><span>英文单词</span><span class="font-mono">${ssrInterpolate(statistics.value.englishWords)}</span></div><div class="w-full bg-muted rounded-full h-2"><div class="bg-primary h-2 rounded-full transition-all" style="${ssrRenderStyle({ width: getPercentage(statistics.value.englishWords, statistics.value.words) + "%" })}"></div></div></div><div class="space-y-2"><div class="flex justify-between text-sm"><span>数字</span><span class="font-mono">${ssrInterpolate(statistics.value.numbers)}</span></div><div class="w-full bg-muted rounded-full h-2"><div class="bg-primary h-2 rounded-full transition-all" style="${ssrRenderStyle({ width: getPercentage(statistics.value.numbers, statistics.value.characters) + "%" })}"></div></div></div></div></div><div><h3 class="font-medium mb-2">词频统计（Top 10）</h3>`);
      if (wordFrequency.value.length > 0) {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(wordFrequency.value, (item, index) => {
          _push(`<div class="flex items-center justify-between text-sm p-2 bg-muted rounded"><span class="flex items-center gap-2"><span class="font-mono text-muted-foreground">#${ssrInterpolate(index + 1)}</span><span>${ssrInterpolate(item.word)}</span></span><span class="font-mono text-primary">${ssrInterpolate(item.count)} 次</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-sm text-muted-foreground p-4 bg-muted rounded text-center"> 暂无词频统计 </div>`);
      }
      _push(`</div><div><h3 class="font-medium mb-2">段落统计</h3>`);
      if (paragraphStats.value.length > 0) {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(paragraphStats.value, (item, index) => {
          _push(`<div class="p-3 bg-muted rounded text-sm"><div class="flex justify-between mb-1"><span class="font-medium">段落 ${ssrInterpolate(index + 1)}</span><span class="text-muted-foreground">${ssrInterpolate(item.words)} 词 · ${ssrInterpolate(item.characters)} 字符 </span></div><div class="text-muted-foreground truncate">${ssrInterpolate(item.preview)}</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-sm text-muted-foreground p-4 bg-muted rounded text-center"> 暂无段落统计 </div>`);
      }
      _push(`</div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/markdown-editor",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Markdown编辑器</p><p class="text-xs text-muted-foreground"${_scopeId}>实时预览编辑</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Markdown编辑器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "实时预览编辑")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>大小写转换</p><p class="text-xs text-muted-foreground"${_scopeId}>文本格式转换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Type), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "大小写转换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "文本格式转换")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>文本替换</p><p class="text-xs text-muted-foreground"${_scopeId}>批量查找替换</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "文本替换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "批量查找替换")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=text-counter-GUQ-FnIO.js.map
