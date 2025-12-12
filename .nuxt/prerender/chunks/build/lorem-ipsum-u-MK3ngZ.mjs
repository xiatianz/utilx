import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { Sparkles, FileText, ArrowRight, Lock } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { marked } from 'file:///Users/apple/Documents/code/util/node_modules/marked/lib/marked.esm.js';
import { f as useSeoMeta } from './server.mjs';
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
        description: "\u7ECF\u5178\u7684\u62C9\u4E01\u6587\u5360\u4F4D\u6587\u672C\uFF0C\u5E7F\u6CDB\u7528\u4E8E\u5370\u5237\u548C\u8BBE\u8BA1\u884C\u4E1A"
      },
      {
        value: "chinese",
        name: "\u4E2D\u6587\u5360\u4F4D\u6587\u672C",
        description: "\u4F7F\u7528\u4E2D\u6587\u6C49\u5B57\u751F\u6210\u7684\u5360\u4F4D\u6587\u672C"
      },
      {
        value: "tech",
        name: "\u6280\u672F\u672F\u8BED",
        description: "\u5305\u542B\u7F16\u7A0B\u548C\u6280\u672F\u672F\u8BED\u7684\u5360\u4F4D\u6587\u672C"
      },
      {
        value: "hipster",
        name: "Hipster Ipsum",
        description: "\u5305\u542B\u6F6E\u6D41\u6587\u5316\u672F\u8BED\u7684\u5360\u4F4D\u6587\u672C"
      },
      {
        value: "bacon",
        name: "Bacon Ipsum",
        description: "\u5305\u542B\u98DF\u7269\u548C\u70F9\u996A\u672F\u8BED\u7684\u5360\u4F4D\u6587\u672C"
      },
      {
        value: "business",
        name: "\u5546\u52A1\u672F\u8BED",
        description: "\u5305\u542B\u5546\u4E1A\u548C\u8425\u9500\u672F\u8BED\u7684\u5360\u4F4D\u6587\u672C"
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
        "\u5929\u5730",
        "\u7384\u9EC4",
        "\u5B87\u5B99",
        "\u6D2A\u8352",
        "\u65E5\u6708",
        "\u76C8\u6603",
        "\u8FB0\u5BBF",
        "\u5217\u5F20",
        "\u5BD2\u6765",
        "\u6691\u5F80",
        "\u79CB\u6536",
        "\u51AC\u85CF",
        "\u95F0\u4F59",
        "\u6210\u5C81",
        "\u5F8B\u5415",
        "\u8C03\u9633",
        "\u4E91\u817E",
        "\u81F4\u96E8",
        "\u9732\u7ED3",
        "\u4E3A\u971C",
        "\u91D1\u751F",
        "\u4E3D\u6C34",
        "\u7389\u51FA",
        "\u6606\u5188"
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
      title: "\u968F\u673A\u6587\u672C\u751F\u6210\u5668 - Lorem Ipsum \u5728\u7EBF\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFLorem Ipsum\u5360\u4F4D\u6587\u672C\u751F\u6210\u5668\uFF0C\u652F\u6301\u591A\u79CD\u6587\u672C\u7C7B\u578B\u548C\u683C\u5F0F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u751F\u6210\u6570\u91CF\u548C\u6837\u5F0F\u3002",
      keywords: ["lorem ipsum", "\u5360\u4F4D\u6587\u672C", "\u968F\u673A\u6587\u672C", "\u6587\u672C\u751F\u6210\u5668", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u968F\u673A\u6587\u672C\u751F\u6210\u5668</h1><p class="text-muted-foreground">\u751F\u6210 Lorem Ipsum \u548C\u5176\u4ED6\u7C7B\u578B\u7684\u5360\u4F4D\u6587\u672C</p></div><div class="space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u751F\u6210\u914D\u7F6E</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block">\u6587\u672C\u7C7B\u578B</label><select class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><option value="lorem"${ssrIncludeBooleanAttr(Array.isArray(textType.value) ? ssrLooseContain(textType.value, "lorem") : ssrLooseEqual(textType.value, "lorem")) ? " selected" : ""}>Lorem Ipsum\uFF08\u7ECF\u5178\uFF09</option><option value="chinese"${ssrIncludeBooleanAttr(Array.isArray(textType.value) ? ssrLooseContain(textType.value, "chinese") : ssrLooseEqual(textType.value, "chinese")) ? " selected" : ""}>\u4E2D\u6587\u5360\u4F4D\u6587\u672C</option><option value="tech"${ssrIncludeBooleanAttr(Array.isArray(textType.value) ? ssrLooseContain(textType.value, "tech") : ssrLooseEqual(textType.value, "tech")) ? " selected" : ""}>\u6280\u672F\u672F\u8BED\u5360\u4F4D</option><option value="hipster"${ssrIncludeBooleanAttr(Array.isArray(textType.value) ? ssrLooseContain(textType.value, "hipster") : ssrLooseEqual(textType.value, "hipster")) ? " selected" : ""}>Hipster Ipsum</option><option value="bacon"${ssrIncludeBooleanAttr(Array.isArray(textType.value) ? ssrLooseContain(textType.value, "bacon") : ssrLooseEqual(textType.value, "bacon")) ? " selected" : ""}>Bacon Ipsum</option><option value="business"${ssrIncludeBooleanAttr(Array.isArray(textType.value) ? ssrLooseContain(textType.value, "business") : ssrLooseEqual(textType.value, "business")) ? " selected" : ""}>\u5546\u52A1\u672F\u8BED\u5360\u4F4D</option></select></div><div><label class="text-sm font-medium mb-2 block">\u751F\u6210\u6570\u91CF</label><div class="flex gap-2"><input${ssrRenderAttr("value", amount.value)} type="number" min="1" max="1000" class="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><select class="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><option value="words"${ssrIncludeBooleanAttr(Array.isArray(unit.value) ? ssrLooseContain(unit.value, "words") : ssrLooseEqual(unit.value, "words")) ? " selected" : ""}>\u5355\u8BCD</option><option value="sentences"${ssrIncludeBooleanAttr(Array.isArray(unit.value) ? ssrLooseContain(unit.value, "sentences") : ssrLooseEqual(unit.value, "sentences")) ? " selected" : ""}>\u53E5\u5B50</option><option value="paragraphs"${ssrIncludeBooleanAttr(Array.isArray(unit.value) ? ssrLooseContain(unit.value, "paragraphs") : ssrLooseEqual(unit.value, "paragraphs")) ? " selected" : ""}>\u6BB5\u843D</option></select></div></div></div><div class="mt-6 space-y-4"><div><label class="text-sm font-medium mb-2 block">\u8D77\u59CB\u6587\u672C</label><input${ssrRenderAttr("value", startWith.value)} type="text" placeholder="\u53EF\u9009\uFF1A\u6307\u5B9A\u8D77\u59CB\u6587\u672C" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></div><div class="flex items-center gap-4"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.capitalize) ? ssrLooseContain(options.value.capitalize, null) : options.value.capitalize) ? " checked" : ""} class="mr-2"><span class="text-sm">\u9996\u5B57\u6BCD\u5927\u5199</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.html) ? ssrLooseContain(options.value.html, null) : options.value.html) ? " checked" : ""} class="mr-2"><span class="text-sm">\u5305\u542B HTML \u6807\u7B7E</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.markdown) ? ssrLooseContain(options.value.markdown, null) : options.value.markdown) ? " checked" : ""} class="mr-2"><span class="text-sm">\u5305\u542B Markdown \u683C\u5F0F</span></label></div></div><div class="mt-6 flex flex-wrap gap-2"><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 5 \u4E2A\u5355\u8BCD </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 25 \u4E2A\u5355\u8BCD </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 50 \u4E2A\u5355\u8BCD </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 1 \u4E2A\u6BB5\u843D </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 3 \u4E2A\u6BB5\u843D </button><button class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"> 5 \u4E2A\u6BB5\u843D </button></div></div><div class="flex justify-center"><button class="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "w-5 h-5" }, null, _parent));
      _push(` \u751F\u6210\u6587\u672C </button></div>`);
      if (generatedText.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold">\u751F\u6210\u7ED3\u679C</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u4E0B\u8F7D </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><div class="relative">`);
        if (options.value.html) {
          _push(`<div class="prose prose-sm max-w-none dark:prose-invert">${(_a = generatedText.value) != null ? _a : ""}</div>`);
        } else if (options.value.markdown) {
          _push(`<div class="prose prose-sm max-w-none dark:prose-invert">${(_b = renderMarkdown.value) != null ? _b : ""}</div>`);
        } else {
          _push(`<pre class="whitespace-pre-wrap text-sm">${ssrInterpolate(generatedText.value)}</pre>`);
        }
        _push(`<div class="absolute top-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded">${ssrInterpolate(getWordCount(generatedText.value))} \u4E2A\u8BCD \xB7 ${ssrInterpolate(generatedText.value.length)} \u4E2A\u5B57\u7B26 </div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6587\u672C\u7C7B\u578B\u9884\u89C8</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(textTypes, (type) => {
        _push(`<div class="${ssrRenderClass([
          "p-4 border rounded-lg cursor-pointer transition-all",
          textType.value === type.value ? "border-primary bg-primary/5" : "hover:bg-muted"
        ])}"><h3 class="font-medium mb-2">${ssrInterpolate(type.name)}</h3><p class="text-sm text-muted-foreground">${ssrInterpolate(type.description)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u4F7F\u7528\u8BF4\u660E</h2><div class="space-y-4 text-sm"><div><h3 class="font-medium mb-2">\u4EC0\u4E48\u662F Lorem Ipsum\uFF1F</h3><p class="text-muted-foreground"> Lorem Ipsum \u662F\u5370\u5237\u53CA\u6392\u7248\u884C\u4E1A\u7684\u6807\u51C6\u5360\u4F4D\u6587\u672C\u3002\u81EA 16 \u4E16\u7EAA\u4EE5\u6765\uFF0C\u5B83\u4E00\u76F4\u88AB\u7528\u4F5C\u6807\u51C6\u7684\u865A\u62DF\u6587\u672C\uFF0C \u5F53\u65F6\u4E00\u4F4D\u4E0D\u77E5\u540D\u7684\u5370\u5237\u5546\u62FF\u4E86\u4E00\u76D8\u5B57\u4F53\u5E76\u5C06\u5176\u6405\u4E71\u4EE5\u5236\u4F5C\u5B57\u4F53\u6837\u672C\u4E66\u3002\u5B83\u4E0D\u4EC5\u5B58\u6D3B\u4E86\u4E94\u4E2A\u4E16\u7EAA\uFF0C \u800C\u4E14\u8FD8\u8DC3\u5165\u4E86\u7535\u5B50\u6392\u7248\uFF0C\u57FA\u672C\u4E0A\u4FDD\u6301\u4E0D\u53D8\u3002 </p></div><div><h3 class="font-medium mb-2">\u4E3A\u4EC0\u4E48\u4F7F\u7528\u5B83\uFF1F</h3><p class="text-muted-foreground"> \u5F88\u4E45\u4EE5\u6765\u5C31\u77E5\u9053\uFF0C\u5F53\u67E5\u770B\u9875\u9762\u5E03\u5C40\u65F6\uFF0C\u8BFB\u8005\u4F1A\u88AB\u9875\u9762\u7684\u53EF\u8BFB\u5185\u5BB9\u5206\u6563\u6CE8\u610F\u529B\u3002 \u4F7F\u7528 Lorem Ipsum \u7684\u8981\u70B9\u662F\u5B83\u5177\u6709\u6216\u591A\u6216\u5C11\u6B63\u5E38\u7684\u5B57\u6BCD\u5206\u5E03\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528&quot;\u6B64\u5904\u5185\u5BB9\uFF0C\u6B64\u5904\u5185\u5BB9&quot;\uFF0C \u4F7F\u5176\u770B\u8D77\u6765\u50CF\u53EF\u8BFB\u7684\u82F1\u8BED\u3002 </p></div><div><h3 class="font-medium mb-2">\u5E38\u89C1\u7528\u9014</h3><ul class="list-disc list-inside text-muted-foreground space-y-1"><li>\u7F51\u7AD9\u548C\u5E94\u7528\u7684 UI \u8BBE\u8BA1\u539F\u578B</li><li>\u5370\u5237\u54C1\u548C\u6742\u5FD7\u7684\u7248\u9762\u8BBE\u8BA1</li><li>\u6D4B\u8BD5\u6587\u672C\u6E32\u67D3\u548C\u5E03\u5C40</li><li>\u6F14\u793A\u6587\u7A3F\u548C\u6587\u6863\u6A21\u677F</li><li>\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u7684\u5360\u4F4D\u5185\u5BB9</li></ul></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/text-counter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u5B57\u6570\u7EDF\u8BA1</p><p class="text-xs text-muted-foreground"${_scopeId}>\u7EDF\u8BA1\u6587\u672C\u4FE1\u606F</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5B57\u6570\u7EDF\u8BA1"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u7EDF\u8BA1\u6587\u672C\u4FE1\u606F")
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
        to: "/tools/crypto/password-generator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Lock), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u5BC6\u7801\u751F\u6210\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u751F\u6210\u5B89\u5168\u5BC6\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Lock), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u5BC6\u7801\u751F\u6210\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u751F\u6210\u5B89\u5168\u5BC6\u7801")
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

export { _sfc_main as default };
//# sourceMappingURL=lorem-ipsum-u-MK3ngZ.mjs.map
