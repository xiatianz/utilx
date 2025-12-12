import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { Sparkles, FileText, ArrowRight, Lock } from "lucide-vue-next";
import { marked } from "marked";
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
  __name: "lorem-ipsum",
  __ssrInlineRender: true,
  setup(__props) {
    const textType = ref("lorem");
    const amount = ref(50);
    const unit = ref("words");
    const startWith = ref("");
    const generatedText = ref("");
    const copied = ref(false);
    const options = ref({
      capitalize: false,
      html: false,
      markdown: false
    });
    const textTypes = [
      {
        value: "lorem",
        name: "Lorem Ipsum",
        description: "经典的拉丁文占位文本，广泛用于印刷和设计行业"
      },
      {
        value: "chinese",
        name: "中文占位文本",
        description: "使用中文汉字生成的占位文本"
      },
      {
        value: "tech",
        name: "技术术语",
        description: "包含编程和技术术语的占位文本"
      },
      {
        value: "hipster",
        name: "Hipster Ipsum",
        description: "包含潮流文化术语的占位文本"
      },
      {
        value: "bacon",
        name: "Bacon Ipsum",
        description: "包含食物和烹饪术语的占位文本"
      },
      {
        value: "business",
        name: "商务术语",
        description: "包含商业和营销术语的占位文本"
      }
    ];
    const wordBank = {
      lorem: [
        "lorem",
        "ipsum",
        "dolor",
        "sit",
        "amet",
        "consectetur",
        "adipiscing",
        "elit",
        "sed",
        "do",
        "eiusmod",
        "tempor",
        "incididunt",
        "ut",
        "labore",
        "et",
        "dolore",
        "magna",
        "aliqua",
        "enim",
        "ad",
        "minim",
        "veniam",
        "quis",
        "nostrud",
        "exercitation",
        "ullamco",
        "laboris",
        "nisi",
        "aliquip",
        "ex",
        "ea",
        "commodo"
      ],
      chinese: [
        "天地",
        "玄黄",
        "宇宙",
        "洪荒",
        "日月",
        "盈昃",
        "辰宿",
        "列张",
        "寒来",
        "暑往",
        "秋收",
        "冬藏",
        "闰余",
        "成岁",
        "律吕",
        "调阳",
        "云腾",
        "致雨",
        "露结",
        "为霜",
        "金生",
        "丽水",
        "玉出",
        "昆冈"
      ],
      tech: [
        "algorithm",
        "database",
        "framework",
        "interface",
        "component",
        "module",
        "function",
        "variable",
        "constant",
        "array",
        "object",
        "string",
        "integer",
        "boolean",
        "async",
        "await",
        "promise",
        "callback"
      ],
      hipster: [
        "authentic",
        "craft",
        "artisan",
        "bespoke",
        "curated",
        "aesthetic",
        "vintage",
        "retro",
        "minimal",
        "sustainable",
        "organic",
        "local",
        "community",
        "collaborative",
        "creative",
        "innovative",
        "trendy"
      ],
      bacon: [
        "bacon",
        "sausage",
        "pork",
        "ham",
        "salami",
        "pepperoni",
        "chorizo",
        "prosciutto",
        "pancetta",
        "brisket",
        "ribs",
        "steak",
        "burger",
        "meatball",
        "grill",
        "roast",
        "smoke",
        "barbecue"
      ],
      business: [
        "synergy",
        "paradigm",
        "leverage",
        "empower",
        "optimize",
        "streamline",
        "engage",
        "innovate",
        "transform",
        "strategic",
        "initiative",
        "framework",
        "ecosystem",
        "platform",
        "solution",
        "value",
        "proposition",
        "customer"
      ]
    };
    const renderMarkdown = computed(() => {
      if (!generatedText.value || !options.value.markdown) return "";
      try {
        return marked.parse(generatedText.value);
      } catch (error) {
        return generatedText.value;
      }
    });
    const getRandomWord = (type) => {
      const words = wordBank[type];
      return words[Math.floor(Math.random() * words.length)];
    };
    const generateSentence = (wordCount, type) => {
      let sentence = [];
      for (let i = 0; i < wordCount; i++) {
        let word = getRandomWord(type);
        if (options.value.capitalize && i === 0) {
          word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        sentence.push(word);
      }
      return sentence.join(" ") + ".";
    };
    const generateParagraph = (sentenceCount, type) => {
      let paragraph = [];
      for (let i = 0; i < sentenceCount; i++) {
        const wordCount = Math.floor(Math.random() * 10) + 5;
        paragraph.push(generateSentence(wordCount, type));
      }
      return paragraph.join(" ");
    };
    const formatText = (text) => {
      if (options.value.html) {
        const paragraphs = text.split(". ");
        text = paragraphs.map((p) => `<p>${p}</p>`).join("");
      }
      if (options.value.markdown) {
        const paragraphs = text.split(". ");
        text = paragraphs.map((p, i) => {
          if (i === 0) return `## ${p}
`;
          return `${p}
`;
        }).join("");
      }
      return text;
    };
    const generateText = () => {
      let result = "";
      wordBank[textType.value];
      if (startWith.value) {
        result = startWith.value + " ";
      }
      switch (unit.value) {
        case "words":
          for (let i = 0; i < amount.value; i++) {
            let word = getRandomWord(textType.value);
            if (options.value.capitalize && i === 0) {
              word = word.charAt(0).toUpperCase() + word.slice(1);
            }
            result += (i > 0 ? " " : "") + word;
          }
          if (textType.value === "lorem" || textType.value === "chinese") {
            result += ".";
          }
          break;
        case "sentences":
          const sentences = amount.value;
          for (let i = 0; i < sentences; i++) {
            const wordCount = Math.floor(Math.random() * 15) + 5;
            result += (i > 0 ? " " : "") + generateSentence(wordCount, textType.value);
          }
          break;
        case "paragraphs":
          const paragraphs = amount.value;
          for (let i = 0; i < paragraphs; i++) {
            const sentenceCount = Math.floor(Math.random() * 5) + 3;
            result += (i > 0 ? "\n\n" : "") + generateParagraph(sentenceCount, textType.value);
          }
          break;
      }
      generatedText.value = formatText(result.trim());
    };
    const getWordCount = (text) => {
      if (!text) return 0;
      return text.trim().split(/\s+/).filter((word) => word.length > 0).length;
    };
    generateText();
    useSeoMeta({
      title: "随机文本生成器 - Lorem Ipsum 在线生成工具",
      description: "免费在线Lorem Ipsum占位文本生成器，支持多种文本类型和格式，可自定义生成数量和样式。",
      keywords: ["lorem ipsum", "占位文本", "随机文本", "文本生成器", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">随机文本生成器</h1><p class="text-muted-foreground">生成 Lorem Ipsum 和其他类型的占位文本</p></div><div class="space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">生成配置</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block">文本类型</label><select class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><option value="lorem"${ssrIncludeBooleanAttr(Array.isArray(textType.value) ? ssrLooseContain(textType.value, "lorem") : ssrLooseEqual(textType.value, "lorem")) ? " selected" : ""}>Lorem Ipsum（经典）</option><option value="chinese"${ssrIncludeBooleanAttr(Array.isArray(textType.value) ? ssrLooseContain(textType.value, "chinese") : ssrLooseEqual(textType.value, "chinese")) ? " selected" : ""}>中文占位文本</option><option value="tech"${ssrIncludeBooleanAttr(Array.isArray(textType.value) ? ssrLooseContain(textType.value, "tech") : ssrLooseEqual(textType.value, "tech")) ? " selected" : ""}>技术术语占位</option><option value="hipster"${ssrIncludeBooleanAttr(Array.isArray(textType.value) ? ssrLooseContain(textType.value, "hipster") : ssrLooseEqual(textType.value, "hipster")) ? " selected" : ""}>Hipster Ipsum</option><option value="bacon"${ssrIncludeBooleanAttr(Array.isArray(textType.value) ? ssrLooseContain(textType.value, "bacon") : ssrLooseEqual(textType.value, "bacon")) ? " selected" : ""}>Bacon Ipsum</option><option value="business"${ssrIncludeBooleanAttr(Array.isArray(textType.value) ? ssrLooseContain(textType.value, "business") : ssrLooseEqual(textType.value, "business")) ? " selected" : ""}>商务术语占位</option></select></div><div><label class="text-sm font-medium mb-2 block">生成数量</label><div class="flex gap-2"><input${ssrRenderAttr("value", amount.value)} type="number" min="1" max="1000" class="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><select class="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><option value="words"${ssrIncludeBooleanAttr(Array.isArray(unit.value) ? ssrLooseContain(unit.value, "words") : ssrLooseEqual(unit.value, "words")) ? " selected" : ""}>单词</option><option value="sentences"${ssrIncludeBooleanAttr(Array.isArray(unit.value) ? ssrLooseContain(unit.value, "sentences") : ssrLooseEqual(unit.value, "sentences")) ? " selected" : ""}>句子</option><option value="paragraphs"${ssrIncludeBooleanAttr(Array.isArray(unit.value) ? ssrLooseContain(unit.value, "paragraphs") : ssrLooseEqual(unit.value, "paragraphs")) ? " selected" : ""}>段落</option></select></div></div></div><div class="mt-6 space-y-4"><div><label class="text-sm font-medium mb-2 block">起始文本</label><input${ssrRenderAttr("value", startWith.value)} type="text" placeholder="可选：指定起始文本" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></div><div class="flex items-center gap-4"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.capitalize) ? ssrLooseContain(options.value.capitalize, null) : options.value.capitalize) ? " checked" : ""} class="mr-2"><span class="text-sm">首字母大写</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.html) ? ssrLooseContain(options.value.html, null) : options.value.html) ? " checked" : ""} class="mr-2"><span class="text-sm">包含 HTML 标签</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.markdown) ? ssrLooseContain(options.value.markdown, null) : options.value.markdown) ? " checked" : ""} class="mr-2"><span class="text-sm">包含 Markdown 格式</span></label></div></div><div class="mt-6 flex flex-wrap gap-2"><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 5 个单词 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 25 个单词 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 50 个单词 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 1 个段落 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 3 个段落 </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 5 个段落 </button></div></div><div class="flex justify-center"><button class="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "w-5 h-5" }, null, _parent));
      _push(` 生成文本 </button></div>`);
      if (generatedText.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold">生成结果</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">${ssrInterpolate(copied.value ? "已复制" : "复制")}</button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 下载 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><div class="relative">`);
        if (options.value.html) {
          _push(`<div class="prose prose-sm max-w-none dark:prose-invert">${generatedText.value ?? ""}</div>`);
        } else if (options.value.markdown) {
          _push(`<div class="prose prose-sm max-w-none dark:prose-invert">${renderMarkdown.value ?? ""}</div>`);
        } else {
          _push(`<pre class="whitespace-pre-wrap text-sm">${ssrInterpolate(generatedText.value)}</pre>`);
        }
        _push(`<div class="absolute top-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded">${ssrInterpolate(getWordCount(generatedText.value))} 个词 · ${ssrInterpolate(generatedText.value.length)} 个字符 </div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">文本类型预览</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(textTypes, (type) => {
        _push(`<div class="${ssrRenderClass([
          "p-4 border rounded-lg cursor-pointer transition-all",
          textType.value === type.value ? "border-primary bg-primary/5" : "hover:bg-muted"
        ])}"><h3 class="font-medium mb-2">${ssrInterpolate(type.name)}</h3><p class="text-sm text-muted-foreground">${ssrInterpolate(type.description)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">使用说明</h2><div class="space-y-4 text-sm"><div><h3 class="font-medium mb-2">什么是 Lorem Ipsum？</h3><p class="text-muted-foreground"> Lorem Ipsum 是印刷及排版行业的标准占位文本。自 16 世纪以来，它一直被用作标准的虚拟文本， 当时一位不知名的印刷商拿了一盘字体并将其搅乱以制作字体样本书。它不仅存活了五个世纪， 而且还跃入了电子排版，基本上保持不变。 </p></div><div><h3 class="font-medium mb-2">为什么使用它？</h3><p class="text-muted-foreground"> 很久以来就知道，当查看页面布局时，读者会被页面的可读内容分散注意力。 使用 Lorem Ipsum 的要点是它具有或多或少正常的字母分布，而不是使用&quot;此处内容，此处内容&quot;， 使其看起来像可读的英语。 </p></div><div><h3 class="font-medium mb-2">常见用途</h3><ul class="list-disc list-inside text-muted-foreground space-y-1"><li>网站和应用的 UI 设计原型</li><li>印刷品和杂志的版面设计</li><li>测试文本渲染和布局</li><li>演示文稿和文档模板</li><li>开发过程中的占位内容</li></ul></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/text-counter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>字数统计</p><p class="text-xs text-muted-foreground"${_scopeId}>统计文本信息</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "字数统计"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "统计文本信息")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
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
        to: "/tools/crypto/password-generator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Lock), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>密码生成器</p><p class="text-xs text-muted-foreground"${_scopeId}>生成安全密码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Lock), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "密码生成器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "生成安全密码")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/lorem-ipsum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=lorem-ipsum-u-MK3ngZ.js.map
