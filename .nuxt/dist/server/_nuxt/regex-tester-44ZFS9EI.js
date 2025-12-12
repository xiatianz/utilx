import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { Search, FileText, CheckCircle, Copy, Beaker, Info, HelpCircle, ChevronUp, Lock, Code, Image, Wifi, Type, GitBranch, FolderOpen, Globe, FileDiff, Timer, Hash, Link, Database, FileJson } from "lucide-vue-next";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "regex-tester",
  __ssrInlineRender: true,
  setup(__props) {
    const regexPattern = ref("");
    const testText = ref("");
    const flags = ref({
      g: true,
      i: false,
      m: false
    });
    const matchResults = ref([]);
    const error = ref("");
    const isSeoContentVisible = ref(false);
    const regexPresets = [
      {
        name: "邮箱地址",
        pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
      },
      {
        name: "手机号码",
        pattern: "1[3-9]\\d{9}"
      },
      {
        name: "URL",
        pattern: "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)"
      },
      {
        name: "IP地址",
        pattern: "\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b"
      },
      {
        name: "中文",
        pattern: "[\\u4e00-\\u9fa5]+"
      },
      {
        name: "日期",
        pattern: "\\d{4}-\\d{2}-\\d{2}"
      }
    ];
    const testCases = [
      {
        name: "验证邮箱",
        description: "测试邮箱格式是否正确",
        pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
        text: "test@example.com\ninvalid-email\nuser.name+tag@domain.co.uk"
      },
      {
        name: "提取URL",
        description: "从文本中提取所有URL",
        pattern: "https?:\\/\\/[\\S]+",
        text: "访问 https://www.example.com 或 http://test.org 获取更多信息"
      },
      {
        name: "匹配HTML标签",
        description: "匹配HTML标签内容",
        pattern: "<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*>(.*?)<\\/\\1>",
        text: '<div>内容</div>\n<p>段落</p>\n<span class="red">文本</span>'
      }
    ];
    const relatedTools = ref([
      { id: "text-replace", name: "文本替换", description: "批量查找替换文本", icon: "FileText" },
      { id: "json-formatter", name: "JSON 格式化", description: "美化 JSON 数据", icon: "FileJson" },
      { id: "url-encode", name: "URL 编码", description: "URL编码解码", icon: "Link" },
      { id: "text-counter", name: "字符统计", description: "统计文本字符信息", icon: "Hash" },
      { id: "markdown-editor", name: "Markdown 编辑", description: "实时预览编辑", icon: "FileText" },
      { id: "html-formatter", name: "HTML 格式化", description: "美化HTML代码", icon: "Code" },
      { id: "base64-encode", name: "Base64 编码", description: "Base64编码解码", icon: "Lock" },
      { id: "text-diff", name: "文本对比", description: "比较文本差异", icon: "GitBranch" }
    ]);
    const iconMap = {
      FileText,
      FileJson,
      Database,
      Link,
      Hash,
      Timer,
      Search,
      FileDiff,
      Globe,
      FolderOpen,
      GitBranch,
      Type,
      Wifi,
      Image,
      Code,
      Lock,
      Beaker
    };
    const flagsString = computed(() => {
      return Object.entries(flags.value).filter(([_, value]) => value).map(([key, _]) => key).join("");
    });
    const highlightedText = computed(() => {
      if (!regexPattern.value || !testText.value || error.value) {
        return testText.value;
      }
      try {
        const regex = new RegExp(regexPattern.value, flagsString.value);
        return testText.value.replace(regex, (match) => {
          return `<mark class="bg-warning/30 px-1 rounded text-warning-foreground font-medium">${match}</mark>`;
        });
      } catch {
        return testText.value;
      }
    });
    const regexExplanation = computed(() => {
      if (!regexPattern.value) return "";
      let explanation = `<p class="font-medium">正则表达式: <code class="bg-muted px-3 py-1 rounded text-sm">${regexPattern.value}</code></p>`;
      if (regexPattern.value.includes("^")) {
        explanation += "<p>• <code>^</code> - 匹配字符串开始位置</p>";
      }
      if (regexPattern.value.includes("$")) {
        explanation += "<p>• <code>$</code> - 匹配字符串结束位置</p>";
      }
      if (regexPattern.value.includes("\\d")) {
        explanation += "<p>• <code>\\d</code> - 匹配任意数字 (0-9)</p>";
      }
      if (regexPattern.value.includes("\\w")) {
        explanation += "<p>• <code>\\w</code> - 匹配任意字母、数字或下划线</p>";
      }
      if (regexPattern.value.includes("\\s")) {
        explanation += "<p>• <code>\\s</code> - 匹配任意空白字符</p>";
      }
      if (regexPattern.value.includes("[") && regexPattern.value.includes("]")) {
        explanation += "<p>• <code>[...]</code> - 字符集，匹配其中的任意字符</p>";
      }
      if (regexPattern.value.includes("{")) {
        explanation += "<p>• <code>{n}</code> - 量词，指定匹配次数</p>";
      }
      if (explanation === `<p class="font-medium">正则表达式: <code class="bg-muted px-3 py-1 rounded text-sm">${regexPattern.value}</code></p>`) {
        explanation += "<p>请参考上方快速参考了解各符号含义。</p>";
      }
      return explanation;
    });
    watch([regexPattern, testText, flags], () => {
      testRegex();
    });
    const testRegex = () => {
      if (!regexPattern.value || !testText.value) {
        matchResults.value = [];
        error.value = "";
        return;
      }
      try {
        const regex = new RegExp(regexPattern.value, flagsString.value);
        const matches = [];
        let match;
        while ((match = regex.exec(testText.value)) !== null) {
          matches.push({
            ...match,
            index: match.index
          });
          if (!flags.value.g) break;
          if (match.index === regex.lastIndex) {
            regex.lastIndex++;
          }
        }
        matchResults.value = matches;
        error.value = "";
      } catch (e) {
        error.value = e.message;
        matchResults.value = [];
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-dc2c1002><div class="mb-8" data-v-dc2c1002><h1 class="text-3xl font-bold text-foreground mb-3" data-v-dc2c1002>正则表达式测试 - 在线Regex匹配、验证与调试工具</h1><p class="text-muted-foreground" data-v-dc2c1002>一款免费的在线正则表达式测试工具。支持实时匹配、语法高亮、常用预设、测试用例和详细解释。纯本地计算，数据隐私绝对安全。</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8" data-v-dc2c1002><div class="lg:col-span-1 space-y-6" data-v-dc2c1002><div class="bg-card rounded-lg border border-border p-6" data-v-dc2c1002><div class="flex items-center justify-between mb-4" data-v-dc2c1002><h2 class="text-lg font-semibold text-foreground flex items-center gap-2" data-v-dc2c1002>`);
      _push(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 正则表达式 </h2><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-dc2c1002> 清空 </button></div><div class="space-y-4" data-v-dc2c1002><div data-v-dc2c1002><div class="relative" data-v-dc2c1002><span class="absolute left-3 top-2.5 text-muted-foreground font-mono text-sm" data-v-dc2c1002>/</span><input${ssrRenderAttr("value", regexPattern.value)} type="text" placeholder="输入正则表达式" class="w-full pl-8 pr-8 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm" data-v-dc2c1002><span class="absolute right-3 top-2.5 text-muted-foreground font-mono text-sm" data-v-dc2c1002>/</span></div></div><div data-v-dc2c1002><label class="text-sm font-medium text-foreground mb-2 block" data-v-dc2c1002>标志位 (Flags)</label><div class="space-y-2" data-v-dc2c1002><label class="flex items-center cursor-pointer" data-v-dc2c1002><input${ssrIncludeBooleanAttr(Array.isArray(flags.value.g) ? ssrLooseContain(flags.value.g, null) : flags.value.g) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary" data-v-dc2c1002><span class="text-sm text-foreground" data-v-dc2c1002><code class="bg-muted px-2 py-0.5 rounded text-xs" data-v-dc2c1002>g</code> 全局匹配 </span></label><label class="flex items-center cursor-pointer" data-v-dc2c1002><input${ssrIncludeBooleanAttr(Array.isArray(flags.value.i) ? ssrLooseContain(flags.value.i, null) : flags.value.i) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary" data-v-dc2c1002><span class="text-sm text-foreground" data-v-dc2c1002><code class="bg-muted px-2 py-0.5 rounded text-xs" data-v-dc2c1002>i</code> 忽略大小写 </span></label><label class="flex items-center cursor-pointer" data-v-dc2c1002><input${ssrIncludeBooleanAttr(Array.isArray(flags.value.m) ? ssrLooseContain(flags.value.m, null) : flags.value.m) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary" data-v-dc2c1002><span class="text-sm text-foreground" data-v-dc2c1002><code class="bg-muted px-2 py-0.5 rounded text-xs" data-v-dc2c1002>m</code> 多行匹配 </span></label></div></div><div data-v-dc2c1002><label class="text-sm font-medium text-foreground mb-2 block" data-v-dc2c1002>常用预设</label><div class="space-y-2" data-v-dc2c1002><!--[-->`);
      ssrRenderList(regexPresets, (preset) => {
        _push(`<button class="w-full text-left px-3 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-sm" data-v-dc2c1002><div class="font-medium text-foreground" data-v-dc2c1002>${ssrInterpolate(preset.name)}</div><div class="text-xs text-muted-foreground font-mono" data-v-dc2c1002>${ssrInterpolate(preset.pattern)}</div></button>`);
      });
      _push(`<!--]--></div></div></div></div><div class="bg-card rounded-lg border border-border p-6" data-v-dc2c1002><div class="flex items-center justify-between mb-4" data-v-dc2c1002><h2 class="text-lg font-semibold text-foreground flex items-center gap-2" data-v-dc2c1002>`);
      _push(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 测试文本 </h2><div class="flex gap-2" data-v-dc2c1002><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-dc2c1002> 示例文本 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-dc2c1002> 清空 </button></div></div><textarea placeholder="输入要测试的文本..." class="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm resize-none" rows="8" data-v-dc2c1002>${ssrInterpolate(testText.value)}</textarea></div></div><div class="lg:col-span-2 space-y-6" data-v-dc2c1002><div class="bg-card rounded-lg border border-border p-6" data-v-dc2c1002><div class="flex items-center justify-between mb-6" data-v-dc2c1002><h3 class="text-xl font-semibold text-foreground flex items-center gap-3" data-v-dc2c1002>`);
      _push(ssrRenderComponent(unref(CheckCircle), {
        class: ["w-6 h-6", matchResults.value.length > 0 ? "text-success" : "text-muted-foreground"]
      }, null, _parent));
      _push(` 匹配结果 </h3><div class="flex items-center gap-4" data-v-dc2c1002><span class="text-sm text-muted-foreground" data-v-dc2c1002> 找到 <span class="font-semibold text-primary" data-v-dc2c1002>${ssrInterpolate(matchResults.value.length)}</span> 个匹配 </span>`);
      if (matchResults.value.length > 0) {
        _push(`<button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-dc2c1002> 复制匹配项 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (testText.value) {
        _push(`<div class="mb-6" data-v-dc2c1002><h4 class="text-sm font-medium text-foreground mb-3" data-v-dc2c1002>文本高亮</h4><div class="bg-muted/50 p-4 rounded-lg min-h-[100px]" data-v-dc2c1002>`);
        if (regexPattern.value && !error.value) {
          _push(`<div class="whitespace-pre-wrap font-mono text-sm" data-v-dc2c1002>${highlightedText.value ?? ""}</div>`);
        } else {
          _push(`<div class="text-muted-foreground font-mono text-sm" data-v-dc2c1002>${ssrInterpolate(testText.value || "请输入测试文本")}</div>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (matchResults.value.length > 0) {
        _push(`<div data-v-dc2c1002><h4 class="text-sm font-medium text-foreground mb-4" data-v-dc2c1002>匹配详情</h4><div class="space-y-3 max-h-96 overflow-y-auto" data-v-dc2c1002><!--[-->`);
        ssrRenderList(matchResults.value, (match, index) => {
          _push(`<div class="flex items-start justify-between p-4 bg-muted/50 rounded-lg" data-v-dc2c1002><div class="flex-1 min-w-0" data-v-dc2c1002><div class="font-mono text-sm" data-v-dc2c1002><span class="text-muted-foreground" data-v-dc2c1002>[${ssrInterpolate(match.index)}-${ssrInterpolate(match.index + match[0].length)}]</span><span class="ml-2 px-2 py-1 bg-primary/10 text-primary rounded text-xs" data-v-dc2c1002>${ssrInterpolate(match[0])}</span></div>`);
          if (match.length > 1) {
            _push(`<div class="mt-2 flex flex-wrap gap-2" data-v-dc2c1002><!--[-->`);
            ssrRenderList(match.slice(1), (group, groupIndex) => {
              _push(`<span class="text-xs text-muted-foreground" data-v-dc2c1002> 组${ssrInterpolate(groupIndex + 1)}: <code class="bg-background px-2 py-1 rounded border border-border" data-v-dc2c1002>${ssrInterpolate(group)}</code></span>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><button class="ml-3 p-2 text-muted-foreground hover:text-foreground transition-colors" data-v-dc2c1002>`);
          _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4" }, null, _parent));
          _push(`</button></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div class="p-4 bg-destructive/10 border border-destructive/20 rounded-lg" data-v-dc2c1002><p class="text-destructive text-sm" data-v-dc2c1002>${ssrInterpolate(error.value)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (regexPattern.value && !error.value && matchResults.value.length === 0 && testText.value) {
        _push(`<div class="p-4 bg-warning/10 border border-warning/20 rounded-lg" data-v-dc2c1002><p class="text-warning-foreground text-sm" data-v-dc2c1002>没有找到匹配项</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card rounded-lg border border-border p-6" data-v-dc2c1002><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center gap-3" data-v-dc2c1002>`);
      _push(ssrRenderComponent(unref(Beaker), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 测试用例 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-dc2c1002><!--[-->`);
      ssrRenderList(testCases, (testCase) => {
        _push(`<button class="p-4 bg-muted/50 hover:bg-muted rounded-lg transition-colors text-left" data-v-dc2c1002><div class="font-medium text-sm text-foreground mb-1" data-v-dc2c1002>${ssrInterpolate(testCase.name)}</div><div class="text-xs text-muted-foreground mb-3" data-v-dc2c1002>${ssrInterpolate(testCase.description)}</div><div class="text-xs font-mono bg-background px-3 py-2 rounded border border-border" data-v-dc2c1002>${ssrInterpolate(testCase.pattern)}</div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (regexPattern.value && !error.value) {
        _push(`<div class="bg-card rounded-lg border border-border p-6" data-v-dc2c1002><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center gap-3" data-v-dc2c1002>`);
        _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
        _push(` 正则解释 </h3><div class="prose prose-sm max-w-none dark:prose-invert" data-v-dc2c1002><div class="text-sm text-muted-foreground" data-v-dc2c1002>${regexExplanation.value ?? ""}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative bg-card rounded-lg border border-border" data-v-dc2c1002><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")} data-v-dc2c1002>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}" data-v-dc2c1002><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center" data-v-dc2c1002><span class="text-primary mr-2" data-v-dc2c1002>#</span> 什么是正则表达式？ </h2><p class="text-muted-foreground mb-4" data-v-dc2c1002> 正则表达式（Regular Expression，简称 regex 或 regexp）是一种描述文本模式的强大工具。 它使用特殊的字符序列来定义搜索模式，可以用于字符串的匹配、查找、替换和验证等操作。 正则表达式广泛应用于各种编程语言和文本编辑器中，是处理文本数据的必备技能。 </p><p class="text-muted-foreground" data-v-dc2c1002> 正则表达式的核心思想是使用模式匹配来描述文本特征。通过组合普通字符（如字母、数字） 和特殊字符（称为元字符），可以创建出灵活且精确的匹配规则。 这种模式匹配的方式使得正则表达式在数据验证、文本提取、格式化等场景中非常实用。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-dc2c1002><span class="text-primary mr-2" data-v-dc2c1002>#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6" data-v-dc2c1002><li data-v-dc2c1002>在左侧输入框中输入正则表达式模式</li><li data-v-dc2c1002>选择合适的标志位（全局匹配、忽略大小写、多行匹配等）</li><li data-v-dc2c1002>在测试文本框中输入要测试的文本内容</li><li data-v-dc2c1002>实时查看匹配结果和高亮显示</li><li data-v-dc2c1002>可以使用常用预设快速开始，或运行测试用例学习</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-dc2c1002><span class="text-primary mr-2" data-v-dc2c1002>#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6" data-v-dc2c1002><li data-v-dc2c1002><strong data-v-dc2c1002>实时匹配</strong>: 输入时立即显示匹配结果，无需手动触发</li><li data-v-dc2c1002><strong data-v-dc2c1002>高亮显示</strong>: 匹配的文本会高亮标记，清晰可见</li><li data-v-dc2c1002><strong data-v-dc2c1002>语法解释</strong>: 自动解释正则表达式各部分的含义</li><li data-v-dc2c1002><strong data-v-dc2c1002>常用预设</strong>: 内置邮箱、手机号、URL等常用模式</li><li data-v-dc2c1002><strong data-v-dc2c1002>测试用例</strong>: 提供实际应用场景的测试用例</li><li data-v-dc2c1002><strong data-v-dc2c1002>本地安全</strong>: 所有处理都在浏览器本地完成，保护数据隐私</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-dc2c1002><span class="text-primary mr-2" data-v-dc2c1002>#</span> 常见问题 (FAQ) </h2><div class="space-y-4" data-v-dc2c1002><div data-v-dc2c1002><h3 class="text-lg font-semibold text-foreground" data-v-dc2c1002>正则表达式测试工具安全吗？</h3><p class="text-muted-foreground mt-1" data-v-dc2c1002> 完全安全。我们的正则表达式测试工具采用纯前端技术实现，所有处理都在您的浏览器本地完成， 文本数据不会上传到任何服务器。您可以放心测试包含敏感信息的文本内容。 </p></div><div data-v-dc2c1002><h3 class="text-lg font-semibold text-foreground" data-v-dc2c1002>什么是正则表达式的标志位？</h3><p class="text-muted-foreground mt-1" data-v-dc2c1002> 标志位（flags）是正则表达式的修饰符，用于改变匹配行为： <br data-v-dc2c1002><code data-v-dc2c1002>g</code> - 全局匹配：查找所有匹配项，而不是在第一个匹配后停止 <br data-v-dc2c1002><code data-v-dc2c1002>i</code> - 忽略大小写：匹配时不区分大小写 <br data-v-dc2c1002><code data-v-dc2c1002>m</code> - 多行匹配：将 ^ 和 $ 视为每行的开始和结束，而不仅是整个字符串 </p></div><div data-v-dc2c1002><h3 class="text-lg font-semibold text-foreground" data-v-dc2c1002>如何学习正则表达式？</h3><p class="text-muted-foreground mt-1" data-v-dc2c1002> 学习正则表达式建议从基础开始：先了解字符类（如 \\d、\\w、\\s）和量词（如 *、+、?）， 然后学习分组和捕获、字符集等概念。通过实际练习和查看常见模式的实现， 逐步掌握复杂表达式的构建。本工具的预设和测试用例是很好的学习资源。 </p></div></div></div></div><section class="mb-12" data-v-dc2c1002><h2 class="text-2xl font-bold text-foreground mb-4" data-v-dc2c1002>您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-v-dc2c1002><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2" data-v-dc2c1002${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground" data-v-dc2c1002${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2" data-v-dc2c1002${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/regex-tester.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const regexTester = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dc2c1002"]]);
export {
  regexTester as default
};
//# sourceMappingURL=regex-tester-44ZFS9EI.js.map
