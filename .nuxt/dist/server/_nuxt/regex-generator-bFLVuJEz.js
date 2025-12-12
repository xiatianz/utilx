import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { Settings, Type, Layers, MapPin, Code, Copy, Play, Beaker, Bookmark, Info, HelpCircle, ChevronUp, ArrowRight, GitBranch, Lock, Shield, FileDiff, Regex, Link, Database, Globe, Timer, Hash, FileText } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import { f as useSeoMeta, e as addRecentTool } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "regex-generator",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useSeoMeta({
      title: "正则生成器 - 可视化正则表达式生成工具",
      meta: [
        { name: "description", content: "免费在线正则表达式生成器，通过可视化配置自动生成正则表达式，支持实时测试和代码导出。" },
        { name: "keywords", content: "正则表达式,生成器,可视化,regex generator,在线工具" }
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
        name: "邮箱地址",
        description: "匹配标准邮箱格式",
        regex: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
      },
      {
        name: "手机号码",
        description: "匹配中国手机号",
        regex: "1[3-9]\\d{9}"
      },
      {
        name: "密码强度",
        description: "至少8位，包含大小写字母和数字",
        regex: "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d@$!%*?&]{8,}"
      },
      {
        name: "URL地址",
        description: "匹配HTTP/HTTPS URL",
        regex: "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)"
      },
      {
        name: "IPv4地址",
        description: "匹配IPv4地址",
        regex: "\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b"
      },
      {
        name: "身份证号",
        description: "匹配18位身份证号",
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
      let explanation = `<p>生成的正则表达式: <code class="bg-muted px-2 py-1 rounded">${generatedRegex.value}</code></p>`;
      if (config.value.position.start) {
        explanation += "<p>• <code>^</code> - 匹配字符串开始位置</p>";
      }
      if (config.value.position.wordBoundary) {
        explanation += "<p>• <code>\\b</code> - 单词边界</p>";
      }
      let charSets = [];
      if (config.value.charSets.lowercase) charSets.push("小写字母 (a-z)");
      if (config.value.charSets.uppercase) charSets.push("大写字母 (A-Z)");
      if (config.value.charSets.digits) charSets.push("数字 (0-9)");
      if (config.value.charSets.special) charSets.push("特殊字符");
      if (config.value.charSets.whitespace) charSets.push("空白字符");
      if (config.value.customChars) charSets.push(`自定义字符: ${config.value.customChars}`);
      if (charSets.length > 0) {
        explanation += `<p>• 匹配字符集: ${charSets.join(", ")}</p>`;
      }
      const quantifier = config.value.quantifier;
      if (quantifier.type === "exact") {
        explanation += `<p>• 重复次数: 精确 ${quantifier.exact} 次</p>`;
      } else if (quantifier.type === "atleast") {
        explanation += `<p>• 重复次数: 至少 ${quantifier.min} 次</p>`;
      } else if (quantifier.type === "range") {
        explanation += `<p>• 重复次数: ${quantifier.min} 到 ${quantifier.max} 次</p>`;
      } else if (quantifier.type === "optional") {
        explanation += "<p>• 重复次数: 0次或1次 (可选)</p>";
      } else if (quantifier.type === "zeroOrMore") {
        explanation += "<p>• 重复次数: 0次或多次 (*)</p>";
      } else if (quantifier.type === "oneOrMore") {
        explanation += "<p>• 重复次数: 1次或多次 (+)</p>";
      }
      if (config.value.position.end) {
        explanation += "<p>• <code>$</code> - 匹配字符串结束位置</p>";
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">正则生成器 - 可视化正则表达式生成工具</h1><p class="text-muted-foreground">一款免费的可视化正则表达式生成器。通过图形界面配置选项自动生成正则模式，支持实时测试和多语言代码导出。纯本地计算，数据隐私绝对安全。</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 基础配置 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">匹配模式</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="exact"${ssrIncludeBooleanAttr(Array.isArray(config.value.mode) ? ssrLooseContain(config.value.mode, "exact") : ssrLooseEqual(config.value.mode, "exact")) ? " selected" : ""}>精确匹配</option><option value="contains"${ssrIncludeBooleanAttr(Array.isArray(config.value.mode) ? ssrLooseContain(config.value.mode, "contains") : ssrLooseEqual(config.value.mode, "contains")) ? " selected" : ""}>包含匹配</option><option value="startsWith"${ssrIncludeBooleanAttr(Array.isArray(config.value.mode) ? ssrLooseContain(config.value.mode, "startsWith") : ssrLooseEqual(config.value.mode, "startsWith")) ? " selected" : ""}>开头匹配</option><option value="endsWith"${ssrIncludeBooleanAttr(Array.isArray(config.value.mode) ? ssrLooseContain(config.value.mode, "endsWith") : ssrLooseEqual(config.value.mode, "endsWith")) ? " selected" : ""}>结尾匹配</option></select></div><div><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.caseSensitive) ? ssrLooseContain(config.value.caseSensitive, null) : config.value.caseSensitive) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">大小写敏感</span></label></div><div><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.multiline) ? ssrLooseContain(config.value.multiline, null) : config.value.multiline) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">多行模式</span></label></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Type), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 字符集 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">包含字符类型</label><div class="space-y-2"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.charSets.lowercase) ? ssrLooseContain(config.value.charSets.lowercase, null) : config.value.charSets.lowercase) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">小写字母 (a-z)</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.charSets.uppercase) ? ssrLooseContain(config.value.charSets.uppercase, null) : config.value.charSets.uppercase) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">大写字母 (A-Z)</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.charSets.digits) ? ssrLooseContain(config.value.charSets.digits, null) : config.value.charSets.digits) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">数字 (0-9)</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.charSets.special) ? ssrLooseContain(config.value.charSets.special, null) : config.value.charSets.special) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">特殊字符</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.charSets.whitespace) ? ssrLooseContain(config.value.charSets.whitespace, null) : config.value.charSets.whitespace) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">空白字符</span></label></div></div><div><label class="block text-sm font-medium text-foreground mb-2">自定义字符</label><input${ssrRenderAttr("value", config.value.customChars)} type="text" placeholder="输入自定义字符" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Layers), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 重复次数 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">量词类型</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="exact"${ssrIncludeBooleanAttr(Array.isArray(config.value.quantifier.type) ? ssrLooseContain(config.value.quantifier.type, "exact") : ssrLooseEqual(config.value.quantifier.type, "exact")) ? " selected" : ""}>精确次数</option><option value="atleast"${ssrIncludeBooleanAttr(Array.isArray(config.value.quantifier.type) ? ssrLooseContain(config.value.quantifier.type, "atleast") : ssrLooseEqual(config.value.quantifier.type, "atleast")) ? " selected" : ""}>至少n次</option><option value="range"${ssrIncludeBooleanAttr(Array.isArray(config.value.quantifier.type) ? ssrLooseContain(config.value.quantifier.type, "range") : ssrLooseEqual(config.value.quantifier.type, "range")) ? " selected" : ""}>范围</option><option value="optional"${ssrIncludeBooleanAttr(Array.isArray(config.value.quantifier.type) ? ssrLooseContain(config.value.quantifier.type, "optional") : ssrLooseEqual(config.value.quantifier.type, "optional")) ? " selected" : ""}>可选 (0或1次)</option><option value="zeroOrMore"${ssrIncludeBooleanAttr(Array.isArray(config.value.quantifier.type) ? ssrLooseContain(config.value.quantifier.type, "zeroOrMore") : ssrLooseEqual(config.value.quantifier.type, "zeroOrMore")) ? " selected" : ""}>0次或多次</option><option value="oneOrMore"${ssrIncludeBooleanAttr(Array.isArray(config.value.quantifier.type) ? ssrLooseContain(config.value.quantifier.type, "oneOrMore") : ssrLooseEqual(config.value.quantifier.type, "oneOrMore")) ? " selected" : ""}>1次或多次</option></select></div>`);
      if (config.value.quantifier.type === "exact") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2">次数</label><input${ssrRenderAttr("value", config.value.quantifier.exact)} type="number" min="1" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (config.value.quantifier.type === "atleast") {
        _push(`<div><label class="block text-sm font-medium text-foreground mb-2">最少次数</label><input${ssrRenderAttr("value", config.value.quantifier.min)} type="number" min="0" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (config.value.quantifier.type === "range") {
        _push(`<div><div class="flex space-x-2"><div class="flex-1"><label class="block text-xs text-muted-foreground mb-1">最少</label><input${ssrRenderAttr("value", config.value.quantifier.min)} type="number" min="0" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div><div class="flex-1"><label class="block text-xs text-muted-foreground mb-1">最多</label><input${ssrRenderAttr("value", config.value.quantifier.max)} type="number" min="0" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(MapPin), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 位置限制 </h2><div class="space-y-2"><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.position.start) ? ssrLooseContain(config.value.position.start, null) : config.value.position.start) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">行首 (^)</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.position.end) ? ssrLooseContain(config.value.position.end, null) : config.value.position.end) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">行尾 ($)</span></label><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.position.wordBoundary) ? ssrLooseContain(config.value.position.wordBoundary, null) : config.value.position.wordBoundary) ? " checked" : ""} type="checkbox" class="mr-2 rounded"><span class="text-sm text-foreground">单词边界 (\\b)</span></label></div></div></div><div class="lg:col-span-2 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-semibold flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Code), { class: "h-6 w-6 mr-2 text-primary" }, null, _parent));
      _push(` 生成的正则表达式 </h3><div class="flex space-x-2"><button class="px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors flex items-center text-sm">`);
      _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4 mr-1" }, null, _parent));
      _push(` 复制 </button><button class="px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-md hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors flex items-center text-sm">`);
      _push(ssrRenderComponent(unref(Play), { class: "h-4 w-4 mr-1" }, null, _parent));
      _push(` 测试 </button></div></div><div class="space-y-4"><div class="bg-muted p-4 rounded-lg"><div class="flex items-center"><span class="text-muted-foreground mr-2">/</span><code class="flex-1 text-lg font-mono text-foreground">${ssrInterpolate(generatedRegex.value || "请配置选项生成正则")}</code><span class="text-muted-foreground ml-2">/</span>`);
      if (flags.value) {
        _push(`<span class="text-primary ml-2">${ssrInterpolate(flags.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><h4 class="text-sm font-medium text-foreground mb-2">代码示例</h4><div class="space-y-2"><!--[-->`);
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
        _push(` 实时测试 </h3><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">测试文本</label><textarea placeholder="输入要测试的文本..." class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm" rows="4">${ssrInterpolate(testText.value)}</textarea></div>`);
        if (testText.value && generatedRegex.value) {
          _push(`<div><div class="flex items-center justify-between mb-2"><span class="text-sm font-medium text-foreground">匹配结果</span><span class="text-sm text-muted-foreground"> 找到 ${ssrInterpolate(testResults.value.length)} 个匹配 </span></div><div class="bg-muted p-4 rounded-lg min-h-[100px]"><div class="whitespace-pre-wrap font-mono text-sm text-foreground">${highlightedTestText.value ?? ""}</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
      _push(ssrRenderComponent(unref(Bookmark), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 常用模板 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(templates, (template) => {
        _push(`<button class="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors text-left"><div class="font-medium text-sm mb-1 text-foreground">${ssrInterpolate(template.name)}</div><div class="text-xs text-muted-foreground mb-2">${ssrInterpolate(template.description)}</div><div class="text-xs font-mono bg-background px-2 py-1 rounded text-foreground">${ssrInterpolate(template.regex)}</div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (generatedRegex.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center text-foreground">`);
        _push(ssrRenderComponent(unref(Info), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 正则说明 </h3><div class="prose prose-sm max-w-none"><div class="text-sm text-muted-foreground">${regexExplanation.value ?? ""}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是正则表达式生成器？ </h2><p class="text-muted-foreground mb-4"> 正则表达式（Regular Expression）是一种强大的文本模式匹配工具，通过特定的模式字符串来描述和匹配文本。 对于初学者来说，编写复杂的正则表达式可能非常困难，需要记忆大量的特殊字符和语法规则。 </p><p class="text-muted-foreground mb-4"> 正则表达式生成器通过可视化的界面，让用户通过简单的选项和配置来生成所需的正则表达式， 大大降低了学习和使用正则表达式的门槛。您不需要了解复杂的语法，只需要选择需要的字符集、量词和位置限制， 工具就会自动生成相应的正则表达式。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>在左侧配置面板中选择基础匹配模式（精确匹配、包含匹配、开头匹配、结尾匹配）</li><li>选择需要匹配的字符集（大小写字母、数字、特殊字符、空白字符）</li><li>设置重复次数（精确次数、范围、可选等）</li><li>配置位置限制（行首、行尾、单词边界）</li><li>查看右侧自动生成的正则表达式，并使用实时测试功能验证</li><li>复制生成的正则表达式或导出为不同编程语言的代码</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>可视化配置</strong>: 通过直观的界面选项生成正则表达式，无需记忆复杂语法</li><li><strong>实时预览</strong>: 配置改变时立即显示生成的正则表达式</li><li><strong>实时测试</strong>: 内置测试工具，可以立即验证正则表达式的匹配效果</li><li><strong>多语言支持</strong>: 支持导出为 JavaScript、Python、Java、C#、PHP、Ruby 等多种编程语言</li><li><strong>常用模板</strong>: 提供邮箱、手机号、密码、URL 等常用正则表达式模板</li><li><strong>详细说明</strong>: 自动解释生成的正则表达式各部分的含义</li><li><strong>本地安全</strong>: 所有处理都在浏览器本地完成，保护您的数据隐私</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 正则表达式基础语法 </h2><div class="bg-muted p-4 rounded-lg mb-6"><h3 class="text-lg font-semibold text-foreground mb-3">常用元字符</h3><ul class="space-y-1 text-sm text-muted-foreground"><li><code>.</code> - 匹配任意单个字符（除换行符）</li><li><code>^</code> - 匹配字符串开头</li><li><code>$</code> - 匹配字符串结尾</li><li><code>\\b</code> - 匹配单词边界</li><li><code>\\d</code> - 匹配数字 (0-9)</li><li><code>\\w</code> - 匹配单词字符（字母、数字、下划线）</li><li><code>\\s</code> - 匹配空白字符（空格、制表符、换行符）</li></ul></div><div class="bg-muted p-4 rounded-lg mb-6"><h3 class="text-lg font-semibold text-foreground mb-3">常用量词</h3><ul class="space-y-1 text-sm text-muted-foreground"><li><code>*</code> - 匹配 0 次或多次</li><li><code>+</code> - 匹配 1 次或多次</li><li><code>?</code> - 匹配 0 次或 1 次</li><li><code>{n}</code> - 匹配恰好 n 次</li><li><code>{n,}</code> - 匹配至少 n 次</li><li><code>{n,m}</code> - 匹配 n 到 m 次</li></ul></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">生成的正则表达式在所有编程语言中都通用吗？</h3><p class="text-muted-foreground mt-1"> 大部分正则表达式语法是通用的，但不同编程语言可能会有细微差异。 本工具生成的正则表达式基于标准的 PCRE (Perl Compatible Regular Expressions) 语法， 可以在大多数现代编程语言中使用。我们提供了多种编程语言的代码示例， 以确保在您的项目中正确使用。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么需要转义特殊字符？</h3><p class="text-muted-foreground mt-1"> 在正则表达式中，某些字符（如 .、*、+、?、$、^、[、]、(、)、{、}、\\、|）具有特殊含义。 如果您需要匹配这些字符本身，而不是它们的特殊含义，就需要使用反斜杠 \\ 进行转义。 本工具会自动处理自定义字符的转义问题。 </p></div><div><h3 class="text-lg font-semibold text-foreground">贪婪模式和非贪婪模式有什么区别？</h3><p class="text-muted-foreground mt-1"> 贪婪模式（默认）会尽可能多地匹配字符，而非贪婪模式会尽可能少地匹配字符。 例如，对于字符串 &quot;abbbc&quot;，正则表达式 &quot;ab+c&quot; 会匹配整个 &quot;abbbc&quot;（贪婪）， 而 &quot;ab+?c&quot; 会匹配 &quot;abc&quot;（非贪婪）。在量词后面加上 ? 可以切换为非贪婪模式。 </p></div><div><h3 class="text-lg font-semibold text-foreground">如何验证正则表达式的正确性？</h3><p class="text-muted-foreground mt-1"> 本工具提供了实时测试功能，您可以输入测试文本来验证正则表达式的匹配效果。 建议使用多种边界情况（空字符串、单字符、长文本、特殊字符）来测试， 确保正则表达式能够正确处理各种情况。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=regex-generator-bFLVuJEz.js.map
