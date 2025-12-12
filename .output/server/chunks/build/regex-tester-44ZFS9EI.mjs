import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { Search, FileText, CheckCircle, Copy, Beaker, Info, HelpCircle, ChevronUp, Lock, Code, Image, Wifi, Type, GitBranch, FolderOpen, Globe, FileDiff, Timer, Hash, Link, Database, FileJson } from 'lucide-vue-next';
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
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

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
        name: "\u90AE\u7BB1\u5730\u5740",
        pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
      },
      {
        name: "\u624B\u673A\u53F7\u7801",
        pattern: "1[3-9]\\d{9}"
      },
      {
        name: "URL",
        pattern: "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)"
      },
      {
        name: "IP\u5730\u5740",
        pattern: "\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b"
      },
      {
        name: "\u4E2D\u6587",
        pattern: "[\\u4e00-\\u9fa5]+"
      },
      {
        name: "\u65E5\u671F",
        pattern: "\\d{4}-\\d{2}-\\d{2}"
      }
    ];
    const testCases = [
      {
        name: "\u9A8C\u8BC1\u90AE\u7BB1",
        description: "\u6D4B\u8BD5\u90AE\u7BB1\u683C\u5F0F\u662F\u5426\u6B63\u786E",
        pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
        text: "test@example.com\ninvalid-email\nuser.name+tag@domain.co.uk"
      },
      {
        name: "\u63D0\u53D6URL",
        description: "\u4ECE\u6587\u672C\u4E2D\u63D0\u53D6\u6240\u6709URL",
        pattern: "https?:\\/\\/[\\S]+",
        text: "\u8BBF\u95EE https://www.example.com \u6216 http://test.org \u83B7\u53D6\u66F4\u591A\u4FE1\u606F"
      },
      {
        name: "\u5339\u914DHTML\u6807\u7B7E",
        description: "\u5339\u914DHTML\u6807\u7B7E\u5185\u5BB9",
        pattern: "<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*>(.*?)<\\/\\1>",
        text: '<div>\u5185\u5BB9</div>\n<p>\u6BB5\u843D</p>\n<span class="red">\u6587\u672C</span>'
      }
    ];
    const relatedTools = ref([
      { id: "text-replace", name: "\u6587\u672C\u66FF\u6362", description: "\u6279\u91CF\u67E5\u627E\u66FF\u6362\u6587\u672C", icon: "FileText" },
      { id: "json-formatter", name: "JSON \u683C\u5F0F\u5316", description: "\u7F8E\u5316 JSON \u6570\u636E", icon: "FileJson" },
      { id: "url-encode", name: "URL \u7F16\u7801", description: "URL\u7F16\u7801\u89E3\u7801", icon: "Link" },
      { id: "text-counter", name: "\u5B57\u7B26\u7EDF\u8BA1", description: "\u7EDF\u8BA1\u6587\u672C\u5B57\u7B26\u4FE1\u606F", icon: "Hash" },
      { id: "markdown-editor", name: "Markdown \u7F16\u8F91", description: "\u5B9E\u65F6\u9884\u89C8\u7F16\u8F91", icon: "FileText" },
      { id: "html-formatter", name: "HTML \u683C\u5F0F\u5316", description: "\u7F8E\u5316HTML\u4EE3\u7801", icon: "Code" },
      { id: "base64-encode", name: "Base64 \u7F16\u7801", description: "Base64\u7F16\u7801\u89E3\u7801", icon: "Lock" },
      { id: "text-diff", name: "\u6587\u672C\u5BF9\u6BD4", description: "\u6BD4\u8F83\u6587\u672C\u5DEE\u5F02", icon: "GitBranch" }
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
      let explanation = `<p class="font-medium">\u6B63\u5219\u8868\u8FBE\u5F0F: <code class="bg-muted px-3 py-1 rounded text-sm">${regexPattern.value}</code></p>`;
      if (regexPattern.value.includes("^")) {
        explanation += "<p>\u2022 <code>^</code> - \u5339\u914D\u5B57\u7B26\u4E32\u5F00\u59CB\u4F4D\u7F6E</p>";
      }
      if (regexPattern.value.includes("$")) {
        explanation += "<p>\u2022 <code>$</code> - \u5339\u914D\u5B57\u7B26\u4E32\u7ED3\u675F\u4F4D\u7F6E</p>";
      }
      if (regexPattern.value.includes("\\d")) {
        explanation += "<p>\u2022 <code>\\d</code> - \u5339\u914D\u4EFB\u610F\u6570\u5B57 (0-9)</p>";
      }
      if (regexPattern.value.includes("\\w")) {
        explanation += "<p>\u2022 <code>\\w</code> - \u5339\u914D\u4EFB\u610F\u5B57\u6BCD\u3001\u6570\u5B57\u6216\u4E0B\u5212\u7EBF</p>";
      }
      if (regexPattern.value.includes("\\s")) {
        explanation += "<p>\u2022 <code>\\s</code> - \u5339\u914D\u4EFB\u610F\u7A7A\u767D\u5B57\u7B26</p>";
      }
      if (regexPattern.value.includes("[") && regexPattern.value.includes("]")) {
        explanation += "<p>\u2022 <code>[...]</code> - \u5B57\u7B26\u96C6\uFF0C\u5339\u914D\u5176\u4E2D\u7684\u4EFB\u610F\u5B57\u7B26</p>";
      }
      if (regexPattern.value.includes("{")) {
        explanation += "<p>\u2022 <code>{n}</code> - \u91CF\u8BCD\uFF0C\u6307\u5B9A\u5339\u914D\u6B21\u6570</p>";
      }
      if (explanation === `<p class="font-medium">\u6B63\u5219\u8868\u8FBE\u5F0F: <code class="bg-muted px-3 py-1 rounded text-sm">${regexPattern.value}</code></p>`) {
        explanation += "<p>\u8BF7\u53C2\u8003\u4E0A\u65B9\u5FEB\u901F\u53C2\u8003\u4E86\u89E3\u5404\u7B26\u53F7\u542B\u4E49\u3002</p>";
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
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-dc2c1002><div class="mb-8" data-v-dc2c1002><h1 class="text-3xl font-bold text-foreground mb-3" data-v-dc2c1002>\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5 - \u5728\u7EBFRegex\u5339\u914D\u3001\u9A8C\u8BC1\u4E0E\u8C03\u8BD5\u5DE5\u5177</h1><p class="text-muted-foreground" data-v-dc2c1002>\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5\u5DE5\u5177\u3002\u652F\u6301\u5B9E\u65F6\u5339\u914D\u3001\u8BED\u6CD5\u9AD8\u4EAE\u3001\u5E38\u7528\u9884\u8BBE\u3001\u6D4B\u8BD5\u7528\u4F8B\u548C\u8BE6\u7EC6\u89E3\u91CA\u3002\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u7EDD\u5BF9\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8" data-v-dc2c1002><div class="lg:col-span-1 space-y-6" data-v-dc2c1002><div class="bg-card rounded-lg border border-border p-6" data-v-dc2c1002><div class="flex items-center justify-between mb-4" data-v-dc2c1002><h2 class="text-lg font-semibold text-foreground flex items-center gap-2" data-v-dc2c1002>`);
      _push(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u6B63\u5219\u8868\u8FBE\u5F0F </h2><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-dc2c1002> \u6E05\u7A7A </button></div><div class="space-y-4" data-v-dc2c1002><div data-v-dc2c1002><div class="relative" data-v-dc2c1002><span class="absolute left-3 top-2.5 text-muted-foreground font-mono text-sm" data-v-dc2c1002>/</span><input${ssrRenderAttr("value", regexPattern.value)} type="text" placeholder="\u8F93\u5165\u6B63\u5219\u8868\u8FBE\u5F0F" class="w-full pl-8 pr-8 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm" data-v-dc2c1002><span class="absolute right-3 top-2.5 text-muted-foreground font-mono text-sm" data-v-dc2c1002>/</span></div></div><div data-v-dc2c1002><label class="text-sm font-medium text-foreground mb-2 block" data-v-dc2c1002>\u6807\u5FD7\u4F4D (Flags)</label><div class="space-y-2" data-v-dc2c1002><label class="flex items-center cursor-pointer" data-v-dc2c1002><input${ssrIncludeBooleanAttr(Array.isArray(flags.value.g) ? ssrLooseContain(flags.value.g, null) : flags.value.g) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary" data-v-dc2c1002><span class="text-sm text-foreground" data-v-dc2c1002><code class="bg-muted px-2 py-0.5 rounded text-xs" data-v-dc2c1002>g</code> \u5168\u5C40\u5339\u914D </span></label><label class="flex items-center cursor-pointer" data-v-dc2c1002><input${ssrIncludeBooleanAttr(Array.isArray(flags.value.i) ? ssrLooseContain(flags.value.i, null) : flags.value.i) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary" data-v-dc2c1002><span class="text-sm text-foreground" data-v-dc2c1002><code class="bg-muted px-2 py-0.5 rounded text-xs" data-v-dc2c1002>i</code> \u5FFD\u7565\u5927\u5C0F\u5199 </span></label><label class="flex items-center cursor-pointer" data-v-dc2c1002><input${ssrIncludeBooleanAttr(Array.isArray(flags.value.m) ? ssrLooseContain(flags.value.m, null) : flags.value.m) ? " checked" : ""} type="checkbox" class="mr-2 rounded border-border text-primary focus:ring-primary" data-v-dc2c1002><span class="text-sm text-foreground" data-v-dc2c1002><code class="bg-muted px-2 py-0.5 rounded text-xs" data-v-dc2c1002>m</code> \u591A\u884C\u5339\u914D </span></label></div></div><div data-v-dc2c1002><label class="text-sm font-medium text-foreground mb-2 block" data-v-dc2c1002>\u5E38\u7528\u9884\u8BBE</label><div class="space-y-2" data-v-dc2c1002><!--[-->`);
      ssrRenderList(regexPresets, (preset) => {
        _push(`<button class="w-full text-left px-3 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-sm" data-v-dc2c1002><div class="font-medium text-foreground" data-v-dc2c1002>${ssrInterpolate(preset.name)}</div><div class="text-xs text-muted-foreground font-mono" data-v-dc2c1002>${ssrInterpolate(preset.pattern)}</div></button>`);
      });
      _push(`<!--]--></div></div></div></div><div class="bg-card rounded-lg border border-border p-6" data-v-dc2c1002><div class="flex items-center justify-between mb-4" data-v-dc2c1002><h2 class="text-lg font-semibold text-foreground flex items-center gap-2" data-v-dc2c1002>`);
      _push(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u6D4B\u8BD5\u6587\u672C </h2><div class="flex gap-2" data-v-dc2c1002><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-dc2c1002> \u793A\u4F8B\u6587\u672C </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-dc2c1002> \u6E05\u7A7A </button></div></div><textarea placeholder="\u8F93\u5165\u8981\u6D4B\u8BD5\u7684\u6587\u672C..." class="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm resize-none" rows="8" data-v-dc2c1002>${ssrInterpolate(testText.value)}</textarea></div></div><div class="lg:col-span-2 space-y-6" data-v-dc2c1002><div class="bg-card rounded-lg border border-border p-6" data-v-dc2c1002><div class="flex items-center justify-between mb-6" data-v-dc2c1002><h3 class="text-xl font-semibold text-foreground flex items-center gap-3" data-v-dc2c1002>`);
      _push(ssrRenderComponent(unref(CheckCircle), {
        class: ["w-6 h-6", matchResults.value.length > 0 ? "text-success" : "text-muted-foreground"]
      }, null, _parent));
      _push(` \u5339\u914D\u7ED3\u679C </h3><div class="flex items-center gap-4" data-v-dc2c1002><span class="text-sm text-muted-foreground" data-v-dc2c1002> \u627E\u5230 <span class="font-semibold text-primary" data-v-dc2c1002>${ssrInterpolate(matchResults.value.length)}</span> \u4E2A\u5339\u914D </span>`);
      if (matchResults.value.length > 0) {
        _push(`<button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground" data-v-dc2c1002> \u590D\u5236\u5339\u914D\u9879 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (testText.value) {
        _push(`<div class="mb-6" data-v-dc2c1002><h4 class="text-sm font-medium text-foreground mb-3" data-v-dc2c1002>\u6587\u672C\u9AD8\u4EAE</h4><div class="bg-muted/50 p-4 rounded-lg min-h-[100px]" data-v-dc2c1002>`);
        if (regexPattern.value && !error.value) {
          _push(`<div class="whitespace-pre-wrap font-mono text-sm" data-v-dc2c1002>${(_a = highlightedText.value) != null ? _a : ""}</div>`);
        } else {
          _push(`<div class="text-muted-foreground font-mono text-sm" data-v-dc2c1002>${ssrInterpolate(testText.value || "\u8BF7\u8F93\u5165\u6D4B\u8BD5\u6587\u672C")}</div>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (matchResults.value.length > 0) {
        _push(`<div data-v-dc2c1002><h4 class="text-sm font-medium text-foreground mb-4" data-v-dc2c1002>\u5339\u914D\u8BE6\u60C5</h4><div class="space-y-3 max-h-96 overflow-y-auto" data-v-dc2c1002><!--[-->`);
        ssrRenderList(matchResults.value, (match, index) => {
          _push(`<div class="flex items-start justify-between p-4 bg-muted/50 rounded-lg" data-v-dc2c1002><div class="flex-1 min-w-0" data-v-dc2c1002><div class="font-mono text-sm" data-v-dc2c1002><span class="text-muted-foreground" data-v-dc2c1002>[${ssrInterpolate(match.index)}-${ssrInterpolate(match.index + match[0].length)}]</span><span class="ml-2 px-2 py-1 bg-primary/10 text-primary rounded text-xs" data-v-dc2c1002>${ssrInterpolate(match[0])}</span></div>`);
          if (match.length > 1) {
            _push(`<div class="mt-2 flex flex-wrap gap-2" data-v-dc2c1002><!--[-->`);
            ssrRenderList(match.slice(1), (group, groupIndex) => {
              _push(`<span class="text-xs text-muted-foreground" data-v-dc2c1002> \u7EC4${ssrInterpolate(groupIndex + 1)}: <code class="bg-background px-2 py-1 rounded border border-border" data-v-dc2c1002>${ssrInterpolate(group)}</code></span>`);
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
        _push(`<div class="p-4 bg-warning/10 border border-warning/20 rounded-lg" data-v-dc2c1002><p class="text-warning-foreground text-sm" data-v-dc2c1002>\u6CA1\u6709\u627E\u5230\u5339\u914D\u9879</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card rounded-lg border border-border p-6" data-v-dc2c1002><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center gap-3" data-v-dc2c1002>`);
      _push(ssrRenderComponent(unref(Beaker), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u6D4B\u8BD5\u7528\u4F8B </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-dc2c1002><!--[-->`);
      ssrRenderList(testCases, (testCase) => {
        _push(`<button class="p-4 bg-muted/50 hover:bg-muted rounded-lg transition-colors text-left" data-v-dc2c1002><div class="font-medium text-sm text-foreground mb-1" data-v-dc2c1002>${ssrInterpolate(testCase.name)}</div><div class="text-xs text-muted-foreground mb-3" data-v-dc2c1002>${ssrInterpolate(testCase.description)}</div><div class="text-xs font-mono bg-background px-3 py-2 rounded border border-border" data-v-dc2c1002>${ssrInterpolate(testCase.pattern)}</div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (regexPattern.value && !error.value) {
        _push(`<div class="bg-card rounded-lg border border-border p-6" data-v-dc2c1002><h3 class="text-lg font-semibold text-foreground mb-4 flex items-center gap-3" data-v-dc2c1002>`);
        _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
        _push(` \u6B63\u5219\u89E3\u91CA </h3><div class="prose prose-sm max-w-none dark:prose-invert" data-v-dc2c1002><div class="text-sm text-muted-foreground" data-v-dc2c1002>${(_b = regexExplanation.value) != null ? _b : ""}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-6 mb-12 relative bg-card rounded-lg border border-border" data-v-dc2c1002><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")} data-v-dc2c1002>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}" data-v-dc2c1002><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center" data-v-dc2c1002><span class="text-primary mr-2" data-v-dc2c1002>#</span> \u4EC0\u4E48\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1F </h2><p class="text-muted-foreground mb-4" data-v-dc2c1002> \u6B63\u5219\u8868\u8FBE\u5F0F\uFF08Regular Expression\uFF0C\u7B80\u79F0 regex \u6216 regexp\uFF09\u662F\u4E00\u79CD\u63CF\u8FF0\u6587\u672C\u6A21\u5F0F\u7684\u5F3A\u5927\u5DE5\u5177\u3002 \u5B83\u4F7F\u7528\u7279\u6B8A\u7684\u5B57\u7B26\u5E8F\u5217\u6765\u5B9A\u4E49\u641C\u7D22\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5B57\u7B26\u4E32\u7684\u5339\u914D\u3001\u67E5\u627E\u3001\u66FF\u6362\u548C\u9A8C\u8BC1\u7B49\u64CD\u4F5C\u3002 \u6B63\u5219\u8868\u8FBE\u5F0F\u5E7F\u6CDB\u5E94\u7528\u4E8E\u5404\u79CD\u7F16\u7A0B\u8BED\u8A00\u548C\u6587\u672C\u7F16\u8F91\u5668\u4E2D\uFF0C\u662F\u5904\u7406\u6587\u672C\u6570\u636E\u7684\u5FC5\u5907\u6280\u80FD\u3002 </p><p class="text-muted-foreground" data-v-dc2c1002> \u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6838\u5FC3\u601D\u60F3\u662F\u4F7F\u7528\u6A21\u5F0F\u5339\u914D\u6765\u63CF\u8FF0\u6587\u672C\u7279\u5F81\u3002\u901A\u8FC7\u7EC4\u5408\u666E\u901A\u5B57\u7B26\uFF08\u5982\u5B57\u6BCD\u3001\u6570\u5B57\uFF09 \u548C\u7279\u6B8A\u5B57\u7B26\uFF08\u79F0\u4E3A\u5143\u5B57\u7B26\uFF09\uFF0C\u53EF\u4EE5\u521B\u5EFA\u51FA\u7075\u6D3B\u4E14\u7CBE\u786E\u7684\u5339\u914D\u89C4\u5219\u3002 \u8FD9\u79CD\u6A21\u5F0F\u5339\u914D\u7684\u65B9\u5F0F\u4F7F\u5F97\u6B63\u5219\u8868\u8FBE\u5F0F\u5728\u6570\u636E\u9A8C\u8BC1\u3001\u6587\u672C\u63D0\u53D6\u3001\u683C\u5F0F\u5316\u7B49\u573A\u666F\u4E2D\u975E\u5E38\u5B9E\u7528\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-dc2c1002><span class="text-primary mr-2" data-v-dc2c1002>#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6" data-v-dc2c1002><li data-v-dc2c1002>\u5728\u5DE6\u4FA7\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u6B63\u5219\u8868\u8FBE\u5F0F\u6A21\u5F0F</li><li data-v-dc2c1002>\u9009\u62E9\u5408\u9002\u7684\u6807\u5FD7\u4F4D\uFF08\u5168\u5C40\u5339\u914D\u3001\u5FFD\u7565\u5927\u5C0F\u5199\u3001\u591A\u884C\u5339\u914D\u7B49\uFF09</li><li data-v-dc2c1002>\u5728\u6D4B\u8BD5\u6587\u672C\u6846\u4E2D\u8F93\u5165\u8981\u6D4B\u8BD5\u7684\u6587\u672C\u5185\u5BB9</li><li data-v-dc2c1002>\u5B9E\u65F6\u67E5\u770B\u5339\u914D\u7ED3\u679C\u548C\u9AD8\u4EAE\u663E\u793A</li><li data-v-dc2c1002>\u53EF\u4EE5\u4F7F\u7528\u5E38\u7528\u9884\u8BBE\u5FEB\u901F\u5F00\u59CB\uFF0C\u6216\u8FD0\u884C\u6D4B\u8BD5\u7528\u4F8B\u5B66\u4E60</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-dc2c1002><span class="text-primary mr-2" data-v-dc2c1002>#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6" data-v-dc2c1002><li data-v-dc2c1002><strong data-v-dc2c1002>\u5B9E\u65F6\u5339\u914D</strong>: \u8F93\u5165\u65F6\u7ACB\u5373\u663E\u793A\u5339\u914D\u7ED3\u679C\uFF0C\u65E0\u9700\u624B\u52A8\u89E6\u53D1</li><li data-v-dc2c1002><strong data-v-dc2c1002>\u9AD8\u4EAE\u663E\u793A</strong>: \u5339\u914D\u7684\u6587\u672C\u4F1A\u9AD8\u4EAE\u6807\u8BB0\uFF0C\u6E05\u6670\u53EF\u89C1</li><li data-v-dc2c1002><strong data-v-dc2c1002>\u8BED\u6CD5\u89E3\u91CA</strong>: \u81EA\u52A8\u89E3\u91CA\u6B63\u5219\u8868\u8FBE\u5F0F\u5404\u90E8\u5206\u7684\u542B\u4E49</li><li data-v-dc2c1002><strong data-v-dc2c1002>\u5E38\u7528\u9884\u8BBE</strong>: \u5185\u7F6E\u90AE\u7BB1\u3001\u624B\u673A\u53F7\u3001URL\u7B49\u5E38\u7528\u6A21\u5F0F</li><li data-v-dc2c1002><strong data-v-dc2c1002>\u6D4B\u8BD5\u7528\u4F8B</strong>: \u63D0\u4F9B\u5B9E\u9645\u5E94\u7528\u573A\u666F\u7684\u6D4B\u8BD5\u7528\u4F8B</li><li data-v-dc2c1002><strong data-v-dc2c1002>\u672C\u5730\u5B89\u5168</strong>: \u6240\u6709\u5904\u7406\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u4FDD\u62A4\u6570\u636E\u9690\u79C1</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center" data-v-dc2c1002><span class="text-primary mr-2" data-v-dc2c1002>#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4" data-v-dc2c1002><div data-v-dc2c1002><h3 class="text-lg font-semibold text-foreground" data-v-dc2c1002>\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5\u5DE5\u5177\u5B89\u5168\u5417\uFF1F</h3><p class="text-muted-foreground mt-1" data-v-dc2c1002> \u5B8C\u5168\u5B89\u5168\u3002\u6211\u4EEC\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5\u5DE5\u5177\u91C7\u7528\u7EAF\u524D\u7AEF\u6280\u672F\u5B9E\u73B0\uFF0C\u6240\u6709\u5904\u7406\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C \u6587\u672C\u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u4EFB\u4F55\u670D\u52A1\u5668\u3002\u60A8\u53EF\u4EE5\u653E\u5FC3\u6D4B\u8BD5\u5305\u542B\u654F\u611F\u4FE1\u606F\u7684\u6587\u672C\u5185\u5BB9\u3002 </p></div><div data-v-dc2c1002><h3 class="text-lg font-semibold text-foreground" data-v-dc2c1002>\u4EC0\u4E48\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6807\u5FD7\u4F4D\uFF1F</h3><p class="text-muted-foreground mt-1" data-v-dc2c1002> \u6807\u5FD7\u4F4D\uFF08flags\uFF09\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u4FEE\u9970\u7B26\uFF0C\u7528\u4E8E\u6539\u53D8\u5339\u914D\u884C\u4E3A\uFF1A <br data-v-dc2c1002><code data-v-dc2c1002>g</code> - \u5168\u5C40\u5339\u914D\uFF1A\u67E5\u627E\u6240\u6709\u5339\u914D\u9879\uFF0C\u800C\u4E0D\u662F\u5728\u7B2C\u4E00\u4E2A\u5339\u914D\u540E\u505C\u6B62 <br data-v-dc2c1002><code data-v-dc2c1002>i</code> - \u5FFD\u7565\u5927\u5C0F\u5199\uFF1A\u5339\u914D\u65F6\u4E0D\u533A\u5206\u5927\u5C0F\u5199 <br data-v-dc2c1002><code data-v-dc2c1002>m</code> - \u591A\u884C\u5339\u914D\uFF1A\u5C06 ^ \u548C $ \u89C6\u4E3A\u6BCF\u884C\u7684\u5F00\u59CB\u548C\u7ED3\u675F\uFF0C\u800C\u4E0D\u4EC5\u662F\u6574\u4E2A\u5B57\u7B26\u4E32 </p></div><div data-v-dc2c1002><h3 class="text-lg font-semibold text-foreground" data-v-dc2c1002>\u5982\u4F55\u5B66\u4E60\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1F</h3><p class="text-muted-foreground mt-1" data-v-dc2c1002> \u5B66\u4E60\u6B63\u5219\u8868\u8FBE\u5F0F\u5EFA\u8BAE\u4ECE\u57FA\u7840\u5F00\u59CB\uFF1A\u5148\u4E86\u89E3\u5B57\u7B26\u7C7B\uFF08\u5982 \\d\u3001\\w\u3001\\s\uFF09\u548C\u91CF\u8BCD\uFF08\u5982 *\u3001+\u3001?\uFF09\uFF0C \u7136\u540E\u5B66\u4E60\u5206\u7EC4\u548C\u6355\u83B7\u3001\u5B57\u7B26\u96C6\u7B49\u6982\u5FF5\u3002\u901A\u8FC7\u5B9E\u9645\u7EC3\u4E60\u548C\u67E5\u770B\u5E38\u89C1\u6A21\u5F0F\u7684\u5B9E\u73B0\uFF0C \u9010\u6B65\u638C\u63E1\u590D\u6742\u8868\u8FBE\u5F0F\u7684\u6784\u5EFA\u3002\u672C\u5DE5\u5177\u7684\u9884\u8BBE\u548C\u6D4B\u8BD5\u7528\u4F8B\u662F\u5F88\u597D\u7684\u5B66\u4E60\u8D44\u6E90\u3002 </p></div></div></div></div><section class="mb-12" data-v-dc2c1002><h2 class="text-2xl font-bold text-foreground mb-4" data-v-dc2c1002>\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-v-dc2c1002><!--[-->`);
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

export { regexTester as default };
//# sourceMappingURL=regex-tester-44ZFS9EI.mjs.map
