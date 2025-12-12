import { ref, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { Info } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "regex-cheatsheet",
  __ssrInlineRender: true,
  setup(__props) {
    const testPattern = ref("");
    const testFlags = ref("");
    const testText = ref("测试文本：\n电话号码：138-1234-5678\n邮箱：user@example.com\nIP地址：192.168.1.1\n日期：2024-01-15");
    const matches = ref([]);
    const basicSyntax = [
      { pattern: ".", description: "匹配任意单个字符（除换行符）", example: "a.c 匹配 abc" },
      { pattern: "^", description: "匹配字符串开头", example: "^Hello 匹配 Hello World" },
      { pattern: "$", description: "匹配字符串结尾", example: "world$ 匹配 Hello world" },
      { pattern: "|", description: "或运算符", example: "cat|dog 匹配 cat 或 dog" },
      { pattern: "\\", description: "转义特殊字符", example: "\\. 匹配点号" }
    ];
    const characterClasses = [
      { pattern: "[abc]", description: "匹配方括号内任意字符", example: "[abc] 匹配 a 或 b 或 c" },
      { pattern: "[^abc]", description: "匹配除方括号内字符外的任意字符", example: "[^abc] 不匹配 a、b、c" },
      { pattern: "[a-z]", description: "匹配小写字母 a 到 z", example: "[a-z] 匹配任意小写字母" },
      { pattern: "[A-Z]", description: "匹配大写字母 A 到 Z", example: "[A-Z] 匹配任意大写字母" },
      { pattern: "[0-9]", description: "匹配数字 0 到 9", example: "[0-9] 匹配任意数字" },
      { pattern: "\\d", description: "匹配任意数字（等同 [0-9]）", example: "\\d 匹配 123" },
      { pattern: "\\D", description: "匹配非数字字符", example: "\\D 匹配 abc" },
      { pattern: "\\w", description: "匹配字母、数字、下划线", example: "\\w 匹配 a_b1" },
      { pattern: "\\W", description: "匹配非单词字符", example: "\\W 匹配 @#$" },
      { pattern: "\\s", description: "匹配空白字符（空格、制表符等）", example: "\\s 匹配空格和制表符" },
      { pattern: "\\S", description: "匹配非空白字符", example: "\\S 匹配非空格字符" }
    ];
    const quantifiers = [
      { pattern: "*", description: "匹配 0 次或多次", example: "a* 匹配 aaa、空字符串" },
      { pattern: "+", description: "匹配 1 次或多次", example: "a+ 匹配 a、aaa" },
      { pattern: "?", description: "匹配 0 次或 1 次", example: "a? 匹配 a 或空" },
      { pattern: "{n}", description: "匹配恰好 n 次", example: "a{3} 匹配 aaa" },
      { pattern: "{n,}", description: "匹配至少 n 次", example: "a{2,} 匹配 aa、aaa" },
      { pattern: "{n,m}", description: "匹配 n 到 m 次", example: "a{2,4} 匹配 aa、aaa、aaaa" }
    ];
    const groups = [
      { pattern: "()", description: "捕获组", example: "(ab)+ 匹配 ababab" },
      { pattern: "(?:)", description: "非捕获组", example: "(?:ab)+ 匹配 ababab" },
      { pattern: "(?=)", description: "正向先行断言", example: "a(?=b) 匹配 a 后面是 b 的 a" },
      { pattern: "(?!)", description: "负向先行断言", example: "a(?!b) 匹配 a 后面不是 b 的 a" },
      { pattern: "(?<=)", description: "正向后行断言", example: "(?<=a)b 匹配 a 后面的 b" },
      { pattern: "(?<!)", description: "负向后行断言", example: "(?<!a)b 匹配不在 a 后面的 b" },
      { pattern: "\\1", description: "引用第一个捕获组", example: "(a)\\1 匹配 aa" },
      { pattern: "\\2", description: "引用第二个捕获组", example: "(a)(b)\\2\\1 匹配 abba" }
    ];
    const assertions = [
      { pattern: "^", description: "字符串开始", example: "^Start" },
      { pattern: "$", description: "字符串结束", example: "End$" },
      { pattern: "\\b", description: "单词边界", example: "\\bword\\b 匹配完整单词" },
      { pattern: "\\B", description: "非单词边界", example: "\\Bword\\B 不匹配独立单词" }
    ];
    const commonPatterns = [
      { pattern: "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b", description: "邮箱地址", example: "user@example.com" },
      { pattern: "\\b(?:https?://)?(?:www\\.)?[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}(?:/[^\\s]*)?\\b", description: "URL", example: "https://www.example.com/path" },
      { pattern: "\\b1[3-9]\\d{9}\\b", description: "手机号码（中国）", example: "13812345678" },
      { pattern: "\\b\\d{4}-\\d{2}-\\d{2}\\b", description: "日期（YYYY-MM-DD）", example: "2024-01-15" },
      { pattern: "\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b", description: "IP 地址", example: "192.168.1.1" },
      { pattern: "\\b\\d{3}-\\d{4}-\\d{4}\\b", description: "电话号码（带分隔符）", example: "138-1234-5678" },
      { pattern: "\\b[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}\\b", description: "UUID", example: "550e8400-e29b-41d4-a716-446655440000" },
      { pattern: "\\b(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}\\b", description: "强密码（至少8位，包含大小写字母和数字）", example: "Password123" },
      { pattern: "<([a-zA-Z][a-zA-Z0-9]*)(?:\\s[^>]*)?>.*?</\\1>", description: "HTML 标签", example: '<div class="test">内容</div>' }
    ];
    const performMatch = () => {
      if (!testPattern.value || !testText.value) {
        matches.value = [];
        return;
      }
      try {
        const flags = testFlags.value;
        const regex = new RegExp(testPattern.value, flags);
        const found = testText.value.match(regex);
        matches.value = found || [];
      } catch (error) {
        matches.value = [];
      }
    };
    watch([testPattern, testFlags, testText], () => {
      performMatch();
    });
    performMatch();
    useSeoMeta({
      title: "正则表达式速查表 - 正则表达式语法参考和测试工具",
      description: "免费的在线正则表达式速查表，包含常用正则模式、语法参考和实时测试功能。",
      keywords: ["正则表达式", "regex", "速查表", "模式匹配", "文本处理", "语法参考", "在线测试"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">正则表达式速查表</h1><p class="text-muted-foreground">常用正则表达式模式和语法参考，支持实时测试</p></div><div class="bg-card rounded-lg p-6 mb-6"><h2 class="text-lg font-semibold mb-4">实时测试</h2><div class="space-y-4"><div><label class="text-sm font-medium">正则表达式</label><div class="mt-2 flex gap-2"><input${ssrRenderAttr("value", testPattern.value)} type="text" placeholder="输入正则表达式，如：\\d{3}-\\d{4}-\\d{4}" class="flex-1 px-3 py-2 border rounded-md text-sm font-mono"><select class="px-3 py-2 border rounded-md text-sm"><option value=""${ssrIncludeBooleanAttr(Array.isArray(testFlags.value) ? ssrLooseContain(testFlags.value, "") : ssrLooseEqual(testFlags.value, "")) ? " selected" : ""}>无标志</option><option value="g"${ssrIncludeBooleanAttr(Array.isArray(testFlags.value) ? ssrLooseContain(testFlags.value, "g") : ssrLooseEqual(testFlags.value, "g")) ? " selected" : ""}>全局 (g)</option><option value="i"${ssrIncludeBooleanAttr(Array.isArray(testFlags.value) ? ssrLooseContain(testFlags.value, "i") : ssrLooseEqual(testFlags.value, "i")) ? " selected" : ""}>忽略大小写 (i)</option><option value="m"${ssrIncludeBooleanAttr(Array.isArray(testFlags.value) ? ssrLooseContain(testFlags.value, "m") : ssrLooseEqual(testFlags.value, "m")) ? " selected" : ""}>多行 (m)</option><option value="gi"${ssrIncludeBooleanAttr(Array.isArray(testFlags.value) ? ssrLooseContain(testFlags.value, "gi") : ssrLooseEqual(testFlags.value, "gi")) ? " selected" : ""}>全局 + 忽略大小写</option></select></div></div><div><label class="text-sm font-medium">测试文本</label><textarea placeholder="输入要测试的文本..." class="mt-2 w-full px-3 py-2 border rounded-md text-sm h-32 resize-none">${ssrInterpolate(testText.value)}</textarea></div><div><label class="text-sm font-medium">匹配结果</label><div class="mt-2 p-4 bg-muted/30 rounded-lg min-h-[100px]">`);
      if (matches.value.length > 0) {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(matches.value, (match, index) => {
          _push(`<div class="p-2 bg-background border rounded"><span class="font-mono text-sm">${ssrInterpolate(match)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-8"> 无匹配结果 </div>`);
      }
      _push(`</div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">基本语法</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(basicSyntax, (item) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-1"><code class="font-mono text-sm">${ssrInterpolate(item.pattern)}</code><button class="text-xs text-primary hover:text-primary/80"> 使用 </button></div><p class="text-xs text-muted-foreground">${ssrInterpolate(item.description)}</p><div class="mt-1"><span class="text-xs text-muted-foreground">示例：</span><code class="text-xs">${ssrInterpolate(item.example)}</code></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">字符类</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(characterClasses, (item) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-1"><code class="font-mono text-sm">${ssrInterpolate(item.pattern)}</code><button class="text-xs text-primary hover:text-primary/80"> 使用 </button></div><p class="text-xs text-muted-foreground">${ssrInterpolate(item.description)}</p><div class="mt-1"><span class="text-xs text-muted-foreground">示例：</span><code class="text-xs">${ssrInterpolate(item.example)}</code></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">量词</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(quantifiers, (item) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-1"><code class="font-mono text-sm">${ssrInterpolate(item.pattern)}</code><button class="text-xs text-primary hover:text-primary/80"> 使用 </button></div><p class="text-xs text-muted-foreground">${ssrInterpolate(item.description)}</p><div class="mt-1"><span class="text-xs text-muted-foreground">示例：</span><code class="text-xs">${ssrInterpolate(item.example)}</code></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">分组和引用</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(groups, (item) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-1"><code class="font-mono text-sm">${ssrInterpolate(item.pattern)}</code><button class="text-xs text-primary hover:text-primary/80"> 使用 </button></div><p class="text-xs text-muted-foreground">${ssrInterpolate(item.description)}</p><div class="mt-1"><span class="text-xs text-muted-foreground">示例：</span><code class="text-xs">${ssrInterpolate(item.example)}</code></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">断言</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(assertions, (item) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-1"><code class="font-mono text-sm">${ssrInterpolate(item.pattern)}</code><button class="text-xs text-primary hover:text-primary/80"> 使用 </button></div><p class="text-xs text-muted-foreground">${ssrInterpolate(item.description)}</p><div class="mt-1"><span class="text-xs text-muted-foreground">示例：</span><code class="text-xs">${ssrInterpolate(item.example)}</code></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">常用模式</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(commonPatterns, (item) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><div class="flex items-center justify-between mb-1"><code class="font-mono text-sm">${ssrInterpolate(item.pattern)}</code><button class="text-xs text-primary hover:text-primary/80"> 使用 </button></div><p class="text-xs text-muted-foreground">${ssrInterpolate(item.description)}</p><div class="mt-1"><span class="text-xs text-muted-foreground">示例：</span><code class="text-xs">${ssrInterpolate(item.example)}</code></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 使用技巧 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-foreground mb-2">性能优化</h4><ul class="space-y-1 text-sm text-muted-foreground"><li>• 使用具体字符类代替 .*（如用 \\d 代替 .）</li><li>• 避免过度使用回溯（如避免嵌套量词）</li><li>• 使用非捕获组 (?:) 提高性能</li><li>• 锚定模式开头和结尾</li></ul></div><div><h4 class="font-medium text-foreground mb-2">调试技巧</h4><ul class="space-y-1 text-sm text-muted-foreground"><li>• 从简单模式开始逐步构建</li><li>• 使用在线正则测试工具</li><li>• 分组测试复杂模式</li><li>• 注意转义字符的使用</li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/regex-cheatsheet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=regex-cheatsheet-BYJ5TYHm.js.map
