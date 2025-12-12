import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';
import { Settings, Type, Layers, MapPin, Code, Copy, Play, Beaker, Bookmark, Info, HelpCircle, ChevronUp, ArrowRight, GitBranch, Lock, Shield, FileDiff, Regex, Link, Database, Globe, Timer, Hash, FileText } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
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

const _sfc_main = {
  __name: "regex-generator",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useSeoMeta({
      title: "\u6B63\u5219\u751F\u6210\u5668 - \u53EF\u89C6\u5316\u6B63\u5219\u8868\u8FBE\u5F0F\u751F\u6210\u5DE5\u5177",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBF\u6B63\u5219\u8868\u8FBE\u5F0F\u751F\u6210\u5668\uFF0C\u901A\u8FC7\u53EF\u89C6\u5316\u914D\u7F6E\u81EA\u52A8\u751F\u6210\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u652F\u6301\u5B9E\u65F6\u6D4B\u8BD5\u548C\u4EE3\u7801\u5BFC\u51FA\u3002" },
        { name: "keywords", content: "\u6B63\u5219\u8868\u8FBE\u5F0F,\u751F\u6210\u5668,\u53EF\u89C6\u5316,regex generator,\u5728\u7EBF\u5DE5\u5177" }
      ]
    });
    const tool = tools.find((t) => t.id === "regex-generator");
    categories.find((c) => c.id === "text");
    const generatedRegex = ref("");
    const flags = ref("");
    const showTest = ref(false);
    const testText = ref("");
    const testResults = ref([]);
    const selectedLanguage = ref("JavaScript");
    const isSeoContentVisible = ref(true);
    const config = ref({
      mode: "exact",
      caseSensitive: false,
      multiline: false,
      charSets: {
        lowercase: true,
        uppercase: true,
        digits: false,
        special: false,
        whitespace: false
      },
      customChars: "",
      quantifier: {
        type: "exact",
        exact: 1,
        min: 0,
        max: 10
      },
      position: {
        start: false,
        end: false,
        wordBoundary: false
      }
    });
    const languages = [
      { name: "JavaScript", code: "js" },
      { name: "Python", code: "py" },
      { name: "Java", code: "java" },
      { name: "C#", code: "csharp" },
      { name: "PHP", code: "php" },
      { name: "Ruby", code: "rb" }
    ];
    const templates = [
      {
        name: "\u90AE\u7BB1\u5730\u5740",
        description: "\u5339\u914D\u6807\u51C6\u90AE\u7BB1\u683C\u5F0F",
        regex: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
      },
      {
        name: "\u624B\u673A\u53F7\u7801",
        description: "\u5339\u914D\u4E2D\u56FD\u624B\u673A\u53F7",
        regex: "1[3-9]\\d{9}"
      },
      {
        name: "\u5BC6\u7801\u5F3A\u5EA6",
        description: "\u81F3\u5C118\u4F4D\uFF0C\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD\u548C\u6570\u5B57",
        regex: "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d@$!%*?&]{8,}"
      },
      {
        name: "URL\u5730\u5740",
        description: "\u5339\u914DHTTP/HTTPS URL",
        regex: "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)"
      },
      {
        name: "IPv4\u5730\u5740",
        description: "\u5339\u914DIPv4\u5730\u5740",
        regex: "\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b"
      },
      {
        name: "\u8EAB\u4EFD\u8BC1\u53F7",
        description: "\u5339\u914D18\u4F4D\u8EAB\u4EFD\u8BC1\u53F7",
        regex: "[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]"
      }
    ];
    const iconMap = {
      FileText,
      Hash,
      Timer,
      Globe,
      Database,
      Link,
      Regex,
      FileDiff,
      Shield,
      Lock,
      GitBranch,
      ArrowRight
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "text" && t.id !== "regex-generator"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "regex-tester"),
        tools.find((t) => t.id === "regex-cheatsheet"),
        tools.find((t) => t.id === "text-replace"),
        tools.find((t) => t.id === "text-counter")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const codeExample = computed(() => {
      const lang = languages.find((l) => l.name === selectedLanguage.value);
      const regex = generatedRegex.value || "";
      const flag = flags.value;
      const examples = {
        "JavaScript": `const regex = /${regex}/${flag};
const result = regex.test('test string');`,
        "Python": `import re
regex = r'${regex}'
result = re.search(regex, 'test string')`,
        "Java": `Pattern pattern = Pattern.compile("${regex}");
Matcher matcher = pattern.matcher("test string");
boolean result = matcher.find();`,
        "C#": `var regex = new Regex(@"${regex}");
var result = regex.IsMatch("test string");`,
        "PHP": `$pattern = '/${regex}/${flag}';
$result = preg_match($pattern, 'test string');`,
        "Ruby": `regex = /${regex}/${flag}
result = regex.match?('test string')`
      };
      return examples[lang.name] || "";
    });
    const highlightedTestText = computed(() => {
      if (!testText.value || !generatedRegex.value) return testText.value;
      try {
        const regex = new RegExp(generatedRegex.value, flags.value);
        return testText.value.replace(regex, (match) => {
          return `<mark class="bg-primary/20 px-1 rounded">${match}</mark>`;
        });
      } catch {
        return testText.value;
      }
    });
    const regexExplanation = computed(() => {
      if (!generatedRegex.value) return "";
      let explanation = `<p>\u751F\u6210\u7684\u6B63\u5219\u8868\u8FBE\u5F0F: <code class="bg-muted px-2 py-1 rounded">${generatedRegex.value}</code></p>`;
      if (config.value.position.start) {
        explanation += "<p>\u2022 <code>^</code> - \u5339\u914D\u5B57\u7B26\u4E32\u5F00\u59CB\u4F4D\u7F6E</p>";
      }
      if (config.value.position.wordBoundary) {
        explanation += "<p>\u2022 <code>\\b</code> - \u5355\u8BCD\u8FB9\u754C</p>";
      }
      let charSets = [];
      if (config.value.charSets.lowercase) charSets.push("\u5C0F\u5199\u5B57\u6BCD (a-z)");
      if (config.value.charSets.uppercase) charSets.push("\u5927\u5199\u5B57\u6BCD (A-Z)");
      if (config.value.charSets.digits) charSets.push("\u6570\u5B57 (0-9)");
      if (config.value.charSets.special) charSets.push("\u7279\u6B8A\u5B57\u7B26");
      if (config.value.charSets.whitespace) charSets.push("\u7A7A\u767D\u5B57\u7B26");
      if (config.value.customChars) charSets.push(`\u81EA\u5B9A\u4E49\u5B57\u7B26: ${config.value.customChars}`);
      if (charSets.length > 0) {
        explanation += `<p>\u2022 \u5339\u914D\u5B57\u7B26\u96C6: ${charSets.join(", ")}</p>`;
      }
      const quantifier = config.value.quantifier;
      if (quantifier.type === "exact") {
        explanation += `<p>\u2022 \u91CD\u590D\u6B21\u6570: \u7CBE\u786E ${quantifier.exact} \u6B21</p>`;
      } else if (quantifier.type === "atleast") {
        explanation += `<p>\u2022 \u91CD\u590D\u6B21\u6570: \u81F3\u5C11 ${quantifier.min} \u6B21</p>`;
      } else if (quantifier.type === "range") {
        explanation += `<p>\u2022 \u91CD\u590D\u6B21\u6570: ${quantifier.min} \u5230 ${quantifier.max} \u6B21</p>`;
      } else if (quantifier.type === "optional") {
        explanation += "<p>\u2022 \u91CD\u590D\u6B21\u6570: 0\u6B21\u62161\u6B21 (\u53EF\u9009)</p>";
      } else if (quantifier.type === "zeroOrMore") {
        explanation += "<p>\u2022 \u91CD\u590D\u6B21\u6570: 0\u6B21\u6216\u591A\u6B21 (*)</p>";
      } else if (quantifier.type === "oneOrMore") {
        explanation += "<p>\u2022 \u91CD\u590D\u6B21\u6570: 1\u6B21\u6216\u591A\u6B21 (+)</p>";
      }
      if (config.value.position.end) {
        explanation += "<p>\u2022 <code>$</code> - \u5339\u914D\u5B57\u7B26\u4E32\u7ED3\u675F\u4F4D\u7F6E</p>";
      }
      return explanation;
    });
    const updateRegex = () => {
      let regex = "";
      let flagList = [];
      if (config.value.mode === "startsWith") {
        config.value.position.start = true;
      } else if (config.value.mode === "endsWith") {
        config.value.position.end = true;
      }
      if (config.value.position.start) regex += "^";
      if (config.value.position.wordBoundary) regex += "\\b";
      let charClass = "";
      if (config.value.charSets.lowercase) charClass += "a-z";
      if (config.value.charSets.uppercase) charClass += "A-Z";
      if (config.value.charSets.digits) charClass += "0-9";
      if (config.value.charSets.special) charClass += "!@#$%^&*()_+-=[]{}|;:,.<>?";
      if (config.value.charSets.whitespace) charClass += "\\s";
      if (config.value.customChars) {
        const escaped = config.value.customChars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        charClass += escaped;
      }
      if (charClass) {
        if (charClass.length === 1 && !["[", "]", "\\", "^", "-"].includes(charClass)) {
          regex += charClass;
        } else {
          regex += `[${charClass}]`;
        }
      } else if (config.value.customChars) {
        regex += ".";
      } else {
        regex += ".";
      }
      const quantifier = config.value.quantifier;
      if (quantifier.type === "exact") {
        if (quantifier.exact === 1) ;
        else {
          regex += `{${quantifier.exact}}`;
        }
      } else if (quantifier.type === "atleast") {
        regex += `{${quantifier.min},}`;
      } else if (quantifier.type === "range") {
        regex += `{${quantifier.min},${quantifier.max}}`;
      } else if (quantifier.type === "optional") {
        regex += "?";
      } else if (quantifier.type === "zeroOrMore") {
        regex += "*";
      } else if (quantifier.type === "oneOrMore") {
        regex += "+";
      }
      if (config.value.position.end) regex += "$";
      if (!config.value.caseSensitive) flagList.push("i");
      if (config.value.multiline) flagList.push("m");
      generatedRegex.value = regex;
      flags.value = flagList.join("");
      if (showTest.value && testText.value) {
        runTest();
      }
    };
    const runTest = () => {
      if (!testText.value || !generatedRegex.value) {
        testResults.value = [];
        return;
      }
      try {
        const regex = new RegExp(generatedRegex.value, flags.value);
        const matches = [];
        let match;
        while ((match = regex.exec(testText.value)) !== null) {
          matches.push(match);
          if (!flags.value.includes("g")) break;
        }
        testResults.value = matches;
      } catch (e) {
        testResults.value = [];
      }
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    updateRegex();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">\u6B63\u5219\u751F\u6210\u5668 - \u53EF\u89C6\u5316\u6B63\u5219\u8868\u8FBE\u5F0F\u751F\u6210\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u514D\u8D39\u7684\u53EF\u89C6\u5316\u6B63\u5219\u8868\u8FBE\u5F0F\u751F\u6210\u5668\u3002\u901A\u8FC7\u56FE\u5F62\u754C\u9762\u914D\u7F6E\u9009\u9879\u81EA\u52A8\u751F\u6210\u6B63\u5219\u6A21\u5F0F\uFF0C\u652F\u6301\u5B9E\u65F6\u6D4B\u8BD5\u548C\u591A\u8BED\u8A00\u4EE3\u7801\u5BFC\u51FA\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u7EDD\u5BF9\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u57FA\u7840\u914D\u7F6E </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u5339\u914D\u6A21\u5F0F</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="exact"${ssrIncludeBooleanAttr(Array.isArray(config.value.mode) ? ssrLooseContain(config.value.mode, "exact") : ssrLooseEqual(config.value.mode, "exact")) ? " selected" : ""}>\u7CBE\u786E\u5339\u914D</option><option value="contains"${ssrIncludeBooleanAttr(Array.isArray(config.value.mode) ? ssrLooseContain(config.value.mode, "contains") : ssrLooseEqual(config.value.mode, "contains")) ? " selected" : ""}>\u5305\u542B\u5339\u914D</option><option value="startsWith"${ssrIncludeBooleanAttr(Array.isArray(config.value.mode) ? ssrLooseContain(config.value.mode, "startsWith") : ssrLooseEqual(config.value.mode, "startsWith")) ? " selected" : ""}>\u5F00\u5934\u5339\u914D</option><option value="endsWith"${ssrIncludeBooleanAttr(Array.isArray(config.value.mode) ? ssrLooseContain(config.value.mode, "endsWith") : ssrLooseEqual(config.value.mode, "endsWith")) ? " selected" : ""}>\u7ED3\u5C3E\u5339\u914D</option></select></div><div><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.caseSensitive) ? ssrLooseContain(config.value.caseSensitive, null) : config.value.caseSensitive) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">\u5927\u5C0F\u5199\u654F\u611F</span></label></div><div><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.multiline) ? ssrLooseContain(config.value.multiline, null) : config.value.multiline) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">\u591A\u884C\u6A21\u5F0F</span></label></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Type), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u5B57\u7B26\u96C6 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u5305\u542B\u5B57\u7B26\u7C7B\u578B</label><div class="space-y-2"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.charSets.lowercase) ? ssrLooseContain(config.value.charSets.lowercase, null) : config.value.charSets.lowercase) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">\u5C0F\u5199\u5B57\u6BCD (a-z)</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.charSets.uppercase) ? ssrLooseContain(config.value.charSets.uppercase, null) : config.value.charSets.uppercase) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">\u5927\u5199\u5B57\u6BCD (A-Z)</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.charSets.digits) ? ssrLooseContain(config.value.charSets.digits, null) : config.value.charSets.digits) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">\u6570\u5B57 (0-9)</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.charSets.special) ? ssrLooseContain(config.value.charSets.special, null) : config.value.charSets.special) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">\u7279\u6B8A\u5B57\u7B26</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.charSets.whitespace) ? ssrLooseContain(config.value.charSets.whitespace, null) : config.value.charSets.whitespace) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">\u7A7A\u767D\u5B57\u7B26</span></label></div></div><div><label class="block text-sm font-medium text-foreground mb-2">\u81EA\u5B9A\u4E49\u5B57\u7B26</label><input${ssrRenderAttr("value", config.value.customChars)} type="text" placeholder="\u8F93\u5165\u81EA\u5B9A\u4E49\u5B57\u7B26" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Layers), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u91CD\u590D\u6B21\u6570 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u91CF\u8BCD\u7C7B\u578B</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="exact"${ssrIncludeBooleanAttr(Array.isArray(config.value.quantifier.type) ? ssrLooseContain(config.value.quantifier.type, "exact") : ssrLooseEqual(config.value.quantifier.type, "exact")) ? " selected" : ""}>\u7CBE\u786E\u6B21\u6570</option><option value="atleast"${ssrIncludeBooleanAttr(Array.isArray(config.value.quantifier.type) ? ssrLooseContain(config.value.quantifier.type, "atleast") : ssrLooseEqual(config.value.quantifier.type, "atleast")) ? " selected" : ""}>\u81F3\u5C11n\u6B21</option><option value="range"${ssrIncludeBooleanAttr(Array.isArray(config.value.quantifier.type) ? ssrLooseContain(config.value.quantifier.type, "range") : ssrLooseEqual(config.value.quantifier.type, "range")) ? " selected" : ""}>\u8303\u56F4</option><option value="optional"${ssrIncludeBooleanAttr(Array.isArray(config.value.quantifier.type) ? ssrLooseContain(config.value.quantifier.type, "optional") : ssrLooseEqual(config.value.quantifier.type, "optional")) ? " selected" : ""}>\u53EF\u9009 (0\u62161\u6B21)</option><option value="zeroOrMore"${ssrIncludeBooleanAttr(Array.isArray(config.value.quantifier.type) ? ssrLooseContain(config.value.quantifier.type, "zeroOrMore") : ssrLooseEqual(config.value.quantifier.type, "zeroOrMore")) ? " selected" : ""}>0\u6B21\u6216\u591A\u6B21</option><option value="oneOrMore"${ssrIncludeBooleanAttr(Array.isArray(config.value.quantifier.type) ? ssrLooseContain(config.value.quantifier.type, "oneOrMore") : ssrLooseEqual(config.value.quantifier.type, "oneOrMore")) ? " selected" : ""}>1\u6B21\u6216\u591A\u6B21</option></select></div>`);
      if (config.value.quantifier.type === "exact") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2">\u6B21\u6570</label><input${ssrRenderAttr("value", config.value.quantifier.exact)} type="number" min="1" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (config.value.quantifier.type === "atleast") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2">\u6700\u5C11\u6B21\u6570</label><input${ssrRenderAttr("value", config.value.quantifier.min)} type="number" min="0" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (config.value.quantifier.type === "range") {
        _push(`<div><div class="flex space-x-2"><div class="flex-1"><label class="block text-xs text-muted-foreground mb-1">\u6700\u5C11</label><input${ssrRenderAttr("value", config.value.quantifier.min)} type="number" min="0" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div><div class="flex-1"><label class="block text-xs text-muted-foreground mb-1">\u6700\u591A</label><input${ssrRenderAttr("value", config.value.quantifier.max)} type="number" min="0" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(MapPin), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u4F4D\u7F6E\u9650\u5236 </h2><div class="space-y-2"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.position.start) ? ssrLooseContain(config.value.position.start, null) : config.value.position.start) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">\u884C\u9996 (^)</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.position.end) ? ssrLooseContain(config.value.position.end, null) : config.value.position.end) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">\u884C\u5C3E ($)</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.position.wordBoundary) ? ssrLooseContain(config.value.position.wordBoundary, null) : config.value.position.wordBoundary) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">\u5355\u8BCD\u8FB9\u754C (\\b)</span></label></div></div></div><div class="lg:col-span-2 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-semibold flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Code), { class: "h-6 w-6 mr-2 text-primary" }, null, _parent));
      _push(` \u751F\u6210\u7684\u6B63\u5219\u8868\u8FBE\u5F0F </h3><div class="flex space-x-2"><button class="px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors flex items-center text-sm">`);
      _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4 mr-1" }, null, _parent));
      _push(` \u590D\u5236 </button><button class="px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-md hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors flex items-center text-sm">`);
      _push(ssrRenderComponent(unref(Play), { class: "h-4 w-4 mr-1" }, null, _parent));
      _push(` \u6D4B\u8BD5 </button></div></div><div class="space-y-4"><div class="bg-muted p-4 rounded-lg"><div class="flex items-center"><span class="text-muted-foreground mr-2">/</span><code class="flex-1 text-lg font-mono text-foreground">${ssrInterpolate(generatedRegex.value || "\u8BF7\u914D\u7F6E\u9009\u9879\u751F\u6210\u6B63\u5219")}</code><span class="text-muted-foreground ml-2">/</span>`);
      if (flags.value) {
        _push(`<span class="text-primary ml-2">${ssrInterpolate(flags.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><h4 class="text-sm font-medium text-foreground mb-2">\u4EE3\u7801\u793A\u4F8B</h4><div class="space-y-2"><!--[-->`);
      ssrRenderList(languages, (lang) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-1 rounded-full text-sm transition-colors",
          selectedLanguage.value === lang.name ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
        ])}">${ssrInterpolate(lang.name)}</button>`);
      });
      _push(`<!--]--></div><div class="mt-3 bg-muted p-4 rounded-lg overflow-x-auto"><pre class="text-sm text-foreground"><code>${ssrInterpolate(codeExample.value)}</code></pre></div></div></div></div>`);
      if (showTest.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Beaker), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u5B9E\u65F6\u6D4B\u8BD5 </h3><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u6D4B\u8BD5\u6587\u672C</label><textarea placeholder="\u8F93\u5165\u8981\u6D4B\u8BD5\u7684\u6587\u672C..." class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm" rows="4">${ssrInterpolate(testText.value)}</textarea></div>`);
        if (testText.value && generatedRegex.value) {
          _push(`<div><div class="flex items-center justify-between mb-2"><span class="text-sm font-medium text-foreground">\u5339\u914D\u7ED3\u679C</span><span class="text-sm text-muted-foreground"> \u627E\u5230 ${ssrInterpolate(testResults.value.length)} \u4E2A\u5339\u914D </span></div><div class="bg-muted p-4 rounded-lg min-h-[100px]"><div class="whitespace-pre-wrap font-mono text-sm text-foreground">${(_a = highlightedTestText.value) != null ? _a : ""}</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Bookmark), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u5E38\u7528\u6A21\u677F </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(templates, (template) => {
        _push(`<button class="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors text-left"><div class="font-medium text-sm mb-1 text-foreground">${ssrInterpolate(template.name)}</div><div class="text-xs text-muted-foreground mb-2">${ssrInterpolate(template.description)}</div><div class="text-xs font-mono bg-background px-2 py-1 rounded text-foreground">${ssrInterpolate(template.regex)}</div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (generatedRegex.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Info), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u6B63\u5219\u8BF4\u660E </h3><div class="prose prose-sm max-w-none"><div class="text-sm text-muted-foreground">${(_b = regexExplanation.value) != null ? _b : ""}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u751F\u6210\u5668\uFF1F </h2><p class="text-muted-foreground mb-4"> \u6B63\u5219\u8868\u8FBE\u5F0F\uFF08Regular Expression\uFF09\u662F\u4E00\u79CD\u5F3A\u5927\u7684\u6587\u672C\u6A21\u5F0F\u5339\u914D\u5DE5\u5177\uFF0C\u901A\u8FC7\u7279\u5B9A\u7684\u6A21\u5F0F\u5B57\u7B26\u4E32\u6765\u63CF\u8FF0\u548C\u5339\u914D\u6587\u672C\u3002 \u5BF9\u4E8E\u521D\u5B66\u8005\u6765\u8BF4\uFF0C\u7F16\u5199\u590D\u6742\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u53EF\u80FD\u975E\u5E38\u56F0\u96BE\uFF0C\u9700\u8981\u8BB0\u5FC6\u5927\u91CF\u7684\u7279\u6B8A\u5B57\u7B26\u548C\u8BED\u6CD5\u89C4\u5219\u3002 </p><p class="text-muted-foreground mb-4"> \u6B63\u5219\u8868\u8FBE\u5F0F\u751F\u6210\u5668\u901A\u8FC7\u53EF\u89C6\u5316\u7684\u754C\u9762\uFF0C\u8BA9\u7528\u6237\u901A\u8FC7\u7B80\u5355\u7684\u9009\u9879\u548C\u914D\u7F6E\u6765\u751F\u6210\u6240\u9700\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C \u5927\u5927\u964D\u4F4E\u4E86\u5B66\u4E60\u548C\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u95E8\u69DB\u3002\u60A8\u4E0D\u9700\u8981\u4E86\u89E3\u590D\u6742\u7684\u8BED\u6CD5\uFF0C\u53EA\u9700\u8981\u9009\u62E9\u9700\u8981\u7684\u5B57\u7B26\u96C6\u3001\u91CF\u8BCD\u548C\u4F4D\u7F6E\u9650\u5236\uFF0C \u5DE5\u5177\u5C31\u4F1A\u81EA\u52A8\u751F\u6210\u76F8\u5E94\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5728\u5DE6\u4FA7\u914D\u7F6E\u9762\u677F\u4E2D\u9009\u62E9\u57FA\u7840\u5339\u914D\u6A21\u5F0F\uFF08\u7CBE\u786E\u5339\u914D\u3001\u5305\u542B\u5339\u914D\u3001\u5F00\u5934\u5339\u914D\u3001\u7ED3\u5C3E\u5339\u914D\uFF09</li><li>\u9009\u62E9\u9700\u8981\u5339\u914D\u7684\u5B57\u7B26\u96C6\uFF08\u5927\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7279\u6B8A\u5B57\u7B26\u3001\u7A7A\u767D\u5B57\u7B26\uFF09</li><li>\u8BBE\u7F6E\u91CD\u590D\u6B21\u6570\uFF08\u7CBE\u786E\u6B21\u6570\u3001\u8303\u56F4\u3001\u53EF\u9009\u7B49\uFF09</li><li>\u914D\u7F6E\u4F4D\u7F6E\u9650\u5236\uFF08\u884C\u9996\u3001\u884C\u5C3E\u3001\u5355\u8BCD\u8FB9\u754C\uFF09</li><li>\u67E5\u770B\u53F3\u4FA7\u81EA\u52A8\u751F\u6210\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5E76\u4F7F\u7528\u5B9E\u65F6\u6D4B\u8BD5\u529F\u80FD\u9A8C\u8BC1</li><li>\u590D\u5236\u751F\u6210\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\u5BFC\u51FA\u4E3A\u4E0D\u540C\u7F16\u7A0B\u8BED\u8A00\u7684\u4EE3\u7801</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u53EF\u89C6\u5316\u914D\u7F6E</strong>: \u901A\u8FC7\u76F4\u89C2\u7684\u754C\u9762\u9009\u9879\u751F\u6210\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u65E0\u9700\u8BB0\u5FC6\u590D\u6742\u8BED\u6CD5</li><li><strong>\u5B9E\u65F6\u9884\u89C8</strong>: \u914D\u7F6E\u6539\u53D8\u65F6\u7ACB\u5373\u663E\u793A\u751F\u6210\u7684\u6B63\u5219\u8868\u8FBE\u5F0F</li><li><strong>\u5B9E\u65F6\u6D4B\u8BD5</strong>: \u5185\u7F6E\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u53EF\u4EE5\u7ACB\u5373\u9A8C\u8BC1\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5339\u914D\u6548\u679C</li><li><strong>\u591A\u8BED\u8A00\u652F\u6301</strong>: \u652F\u6301\u5BFC\u51FA\u4E3A JavaScript\u3001Python\u3001Java\u3001C#\u3001PHP\u3001Ruby \u7B49\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00</li><li><strong>\u5E38\u7528\u6A21\u677F</strong>: \u63D0\u4F9B\u90AE\u7BB1\u3001\u624B\u673A\u53F7\u3001\u5BC6\u7801\u3001URL \u7B49\u5E38\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u6A21\u677F</li><li><strong>\u8BE6\u7EC6\u8BF4\u660E</strong>: \u81EA\u52A8\u89E3\u91CA\u751F\u6210\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5404\u90E8\u5206\u7684\u542B\u4E49</li><li><strong>\u672C\u5730\u5B89\u5168</strong>: \u6240\u6709\u5904\u7406\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u4FDD\u62A4\u60A8\u7684\u6570\u636E\u9690\u79C1</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6B63\u5219\u8868\u8FBE\u5F0F\u57FA\u7840\u8BED\u6CD5 </h2><div class="bg-muted p-4 rounded-lg mb-6"><h3 class="text-lg font-semibold text-foreground mb-3">\u5E38\u7528\u5143\u5B57\u7B26</h3><ul class="space-y-1 text-sm text-muted-foreground"><li><code>.</code> - \u5339\u914D\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26\uFF08\u9664\u6362\u884C\u7B26\uFF09</li><li><code>^</code> - \u5339\u914D\u5B57\u7B26\u4E32\u5F00\u5934</li><li><code>$</code> - \u5339\u914D\u5B57\u7B26\u4E32\u7ED3\u5C3E</li><li><code>\\b</code> - \u5339\u914D\u5355\u8BCD\u8FB9\u754C</li><li><code>\\d</code> - \u5339\u914D\u6570\u5B57 (0-9)</li><li><code>\\w</code> - \u5339\u914D\u5355\u8BCD\u5B57\u7B26\uFF08\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\uFF09</li><li><code>\\s</code> - \u5339\u914D\u7A7A\u767D\u5B57\u7B26\uFF08\u7A7A\u683C\u3001\u5236\u8868\u7B26\u3001\u6362\u884C\u7B26\uFF09</li></ul></div><div class="bg-muted p-4 rounded-lg mb-6"><h3 class="text-lg font-semibold text-foreground mb-3">\u5E38\u7528\u91CF\u8BCD</h3><ul class="space-y-1 text-sm text-muted-foreground"><li><code>*</code> - \u5339\u914D 0 \u6B21\u6216\u591A\u6B21</li><li><code>+</code> - \u5339\u914D 1 \u6B21\u6216\u591A\u6B21</li><li><code>?</code> - \u5339\u914D 0 \u6B21\u6216 1 \u6B21</li><li><code>{n}</code> - \u5339\u914D\u6070\u597D n \u6B21</li><li><code>{n,}</code> - \u5339\u914D\u81F3\u5C11 n \u6B21</li><li><code>{n,m}</code> - \u5339\u914D n \u5230 m \u6B21</li></ul></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u751F\u6210\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5728\u6240\u6709\u7F16\u7A0B\u8BED\u8A00\u4E2D\u90FD\u901A\u7528\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5927\u90E8\u5206\u6B63\u5219\u8868\u8FBE\u5F0F\u8BED\u6CD5\u662F\u901A\u7528\u7684\uFF0C\u4F46\u4E0D\u540C\u7F16\u7A0B\u8BED\u8A00\u53EF\u80FD\u4F1A\u6709\u7EC6\u5FAE\u5DEE\u5F02\u3002 \u672C\u5DE5\u5177\u751F\u6210\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u57FA\u4E8E\u6807\u51C6\u7684 PCRE (Perl Compatible Regular Expressions) \u8BED\u6CD5\uFF0C \u53EF\u4EE5\u5728\u5927\u591A\u6570\u73B0\u4EE3\u7F16\u7A0B\u8BED\u8A00\u4E2D\u4F7F\u7528\u3002\u6211\u4EEC\u63D0\u4F9B\u4E86\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u7684\u4EE3\u7801\u793A\u4F8B\uFF0C \u4EE5\u786E\u4FDD\u5728\u60A8\u7684\u9879\u76EE\u4E2D\u6B63\u786E\u4F7F\u7528\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u9700\u8981\u8F6C\u4E49\u7279\u6B8A\u5B57\u7B26\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\uFF0C\u67D0\u4E9B\u5B57\u7B26\uFF08\u5982 .\u3001*\u3001+\u3001?\u3001$\u3001^\u3001[\u3001]\u3001(\u3001)\u3001{\u3001}\u3001\\\u3001|\uFF09\u5177\u6709\u7279\u6B8A\u542B\u4E49\u3002 \u5982\u679C\u60A8\u9700\u8981\u5339\u914D\u8FD9\u4E9B\u5B57\u7B26\u672C\u8EAB\uFF0C\u800C\u4E0D\u662F\u5B83\u4EEC\u7684\u7279\u6B8A\u542B\u4E49\uFF0C\u5C31\u9700\u8981\u4F7F\u7528\u53CD\u659C\u6760 \\ \u8FDB\u884C\u8F6C\u4E49\u3002 \u672C\u5DE5\u5177\u4F1A\u81EA\u52A8\u5904\u7406\u81EA\u5B9A\u4E49\u5B57\u7B26\u7684\u8F6C\u4E49\u95EE\u9898\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u8D2A\u5A6A\u6A21\u5F0F\u548C\u975E\u8D2A\u5A6A\u6A21\u5F0F\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h3><p class="text-muted-foreground mt-1"> \u8D2A\u5A6A\u6A21\u5F0F\uFF08\u9ED8\u8BA4\uFF09\u4F1A\u5C3D\u53EF\u80FD\u591A\u5730\u5339\u914D\u5B57\u7B26\uFF0C\u800C\u975E\u8D2A\u5A6A\u6A21\u5F0F\u4F1A\u5C3D\u53EF\u80FD\u5C11\u5730\u5339\u914D\u5B57\u7B26\u3002 \u4F8B\u5982\uFF0C\u5BF9\u4E8E\u5B57\u7B26\u4E32 &quot;abbbc&quot;\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F &quot;ab+c&quot; \u4F1A\u5339\u914D\u6574\u4E2A &quot;abbbc&quot;\uFF08\u8D2A\u5A6A\uFF09\uFF0C \u800C &quot;ab+?c&quot; \u4F1A\u5339\u914D &quot;abc&quot;\uFF08\u975E\u8D2A\u5A6A\uFF09\u3002\u5728\u91CF\u8BCD\u540E\u9762\u52A0\u4E0A ? \u53EF\u4EE5\u5207\u6362\u4E3A\u975E\u8D2A\u5A6A\u6A21\u5F0F\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u9A8C\u8BC1\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6B63\u786E\u6027\uFF1F</h3><p class="text-muted-foreground mt-1"> \u672C\u5DE5\u5177\u63D0\u4F9B\u4E86\u5B9E\u65F6\u6D4B\u8BD5\u529F\u80FD\uFF0C\u60A8\u53EF\u4EE5\u8F93\u5165\u6D4B\u8BD5\u6587\u672C\u6765\u9A8C\u8BC1\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5339\u914D\u6548\u679C\u3002 \u5EFA\u8BAE\u4F7F\u7528\u591A\u79CD\u8FB9\u754C\u60C5\u51B5\uFF08\u7A7A\u5B57\u7B26\u4E32\u3001\u5355\u5B57\u7B26\u3001\u957F\u6587\u672C\u3001\u7279\u6B8A\u5B57\u7B26\uFF09\u6765\u6D4B\u8BD5\uFF0C \u786E\u4FDD\u6B63\u5219\u8868\u8FBE\u5F0F\u80FD\u591F\u6B63\u786E\u5904\u7406\u5404\u79CD\u60C5\u51B5\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" })),
                  createVNode("span", { class: "font-medium text-foreground" }, toDisplayString(relatedTool.name), 1)
                ]),
                createVNode("p", { class: "text-sm text-muted-foreground line-clamp-2" }, toDisplayString(relatedTool.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/regex-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=regex-generator-bFLVuJEz.mjs.map
