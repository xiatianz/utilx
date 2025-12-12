import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { Sparkles, FileJson, ArrowRight, FileText, Database } from 'lucide-vue-next';
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
  __name: "code-format",
  __ssrInlineRender: true,
  setup(__props) {
    const inputCode = ref("");
    const formattedCode = ref("");
    const selectedLanguage = ref("");
    const detectedLanguage = ref("");
    const copied = ref(false);
    const indentType = ref("spaces");
    const indentSize = ref(2);
    const options = ref({
      semicolons: true,
      singleQuote: false,
      trailingComma: false
    });
    const supportedLanguages = [
      { name: "JavaScript", value: "javascript", extensions: ["js", "jsx"] },
      { name: "TypeScript", value: "typescript", extensions: ["ts", "tsx"] },
      { name: "Python", value: "python", extensions: ["py"] },
      { name: "Java", value: "java", extensions: ["java"] },
      { name: "C#", value: "csharp", extensions: ["cs"] },
      { name: "C++", value: "cpp", extensions: ["cpp", "cc", "cxx"] },
      { name: "HTML", value: "html", extensions: ["html", "htm"] },
      { name: "CSS", value: "css", extensions: ["css"] },
      { name: "SCSS", value: "scss", extensions: ["scss"] },
      { name: "JSON", value: "json", extensions: ["json"] },
      { name: "XML", value: "xml", extensions: ["xml"] },
      { name: "SQL", value: "sql", extensions: ["sql"] },
      { name: "PHP", value: "php", extensions: ["php"] },
      { name: "Ruby", value: "ruby", extensions: ["rb"] },
      { name: "Go", value: "go", extensions: ["go"] },
      { name: "Rust", value: "rust", extensions: ["rs"] },
      { name: "Swift", value: "swift", extensions: ["swift"] },
      { name: "Kotlin", value: "kotlin", extensions: ["kt", "kts"] }
    ];
    useSeoMeta({
      title: "\u4EE3\u7801\u683C\u5F0F\u5316\u5DE5\u5177 - \u5728\u7EBF\u591A\u8BED\u8A00\u4EE3\u7801\u7F8E\u5316\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u4EE3\u7801\u683C\u5F0F\u5316\u5DE5\u5177\uFF0C\u652F\u6301JavaScript\u3001Python\u3001Java\u3001JSON\u7B4920+\u79CD\u7F16\u7A0B\u8BED\u8A00\u7684\u4EE3\u7801\u7F8E\u5316\u548C\u538B\u7F29\u529F\u80FD\u3002",
      keywords: ["\u4EE3\u7801\u683C\u5F0F\u5316", "\u4EE3\u7801\u7F8E\u5316", "\u5728\u7EBF\u683C\u5F0F\u5316", "\u4EE3\u7801\u538B\u7F29", "JavaScript", "Python", "JSON"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u4EE3\u7801\u683C\u5F0F\u5316\u5DE5\u5177</h1><p class="text-muted-foreground">\u683C\u5F0F\u5316\u5404\u79CD\u7F16\u7A0B\u8BED\u8A00\u4EE3\u7801\uFF0C\u7F8E\u5316\u4EE3\u7801\u7ED3\u6784</p></div><div class="space-y-6"><div class="bg-card rounded-lg p-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div><label class="text-sm font-medium mb-2 block">\u7F16\u7A0B\u8BED\u8A00</label><select class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><option value=""${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "") : ssrLooseEqual(selectedLanguage.value, "")) ? " selected" : ""}>\u81EA\u52A8\u68C0\u6D4B</option><option value="javascript"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "javascript") : ssrLooseEqual(selectedLanguage.value, "javascript")) ? " selected" : ""}>JavaScript</option><option value="typescript"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "typescript") : ssrLooseEqual(selectedLanguage.value, "typescript")) ? " selected" : ""}>TypeScript</option><option value="python"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "python") : ssrLooseEqual(selectedLanguage.value, "python")) ? " selected" : ""}>Python</option><option value="java"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "java") : ssrLooseEqual(selectedLanguage.value, "java")) ? " selected" : ""}>Java</option><option value="csharp"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "csharp") : ssrLooseEqual(selectedLanguage.value, "csharp")) ? " selected" : ""}>C#</option><option value="cpp"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "cpp") : ssrLooseEqual(selectedLanguage.value, "cpp")) ? " selected" : ""}>C++</option><option value="html"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "html") : ssrLooseEqual(selectedLanguage.value, "html")) ? " selected" : ""}>HTML</option><option value="css"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "css") : ssrLooseEqual(selectedLanguage.value, "css")) ? " selected" : ""}>CSS</option><option value="scss"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "scss") : ssrLooseEqual(selectedLanguage.value, "scss")) ? " selected" : ""}>SCSS</option><option value="json"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "json") : ssrLooseEqual(selectedLanguage.value, "json")) ? " selected" : ""}>JSON</option><option value="xml"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "xml") : ssrLooseEqual(selectedLanguage.value, "xml")) ? " selected" : ""}>XML</option><option value="sql"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "sql") : ssrLooseEqual(selectedLanguage.value, "sql")) ? " selected" : ""}>SQL</option><option value="php"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "php") : ssrLooseEqual(selectedLanguage.value, "php")) ? " selected" : ""}>PHP</option><option value="ruby"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "ruby") : ssrLooseEqual(selectedLanguage.value, "ruby")) ? " selected" : ""}>Ruby</option><option value="go"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "go") : ssrLooseEqual(selectedLanguage.value, "go")) ? " selected" : ""}>Go</option><option value="rust"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "rust") : ssrLooseEqual(selectedLanguage.value, "rust")) ? " selected" : ""}>Rust</option><option value="swift"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "swift") : ssrLooseEqual(selectedLanguage.value, "swift")) ? " selected" : ""}>Swift</option><option value="kotlin"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "kotlin") : ssrLooseEqual(selectedLanguage.value, "kotlin")) ? " selected" : ""}>Kotlin</option></select></div><div><label class="text-sm font-medium mb-2 block">\u7F29\u8FDB</label><div class="flex gap-2"><select class="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><option value="spaces"${ssrIncludeBooleanAttr(Array.isArray(indentType.value) ? ssrLooseContain(indentType.value, "spaces") : ssrLooseEqual(indentType.value, "spaces")) ? " selected" : ""}>\u7A7A\u683C</option><option value="tabs"${ssrIncludeBooleanAttr(Array.isArray(indentType.value) ? ssrLooseContain(indentType.value, "tabs") : ssrLooseEqual(indentType.value, "tabs")) ? " selected" : ""}>\u5236\u8868\u7B26</option></select><input${ssrRenderAttr("value", indentSize.value)} type="number" min="1" max="8" class="w-20 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(indentType.value === "tabs") ? " disabled" : ""}></div></div><div><label class="text-sm font-medium mb-2 block">\u683C\u5F0F\u5316\u9009\u9879</label><div class="space-y-2"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.semicolons) ? ssrLooseContain(options.value.semicolons, null) : options.value.semicolons) ? " checked" : ""} class="mr-2"><span class="text-sm">\u4FDD\u7559\u5206\u53F7</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.singleQuote) ? ssrLooseContain(options.value.singleQuote, null) : options.value.singleQuote) ? " checked" : ""} class="mr-2"><span class="text-sm">\u5355\u5F15\u53F7</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.trailingComma) ? ssrLooseContain(options.value.trailingComma, null) : options.value.trailingComma) ? " checked" : ""} class="mr-2"><span class="text-sm">\u5C3E\u968F\u9017\u53F7</span></label></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">\u8F93\u5165\u4EE3\u7801</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u7C98\u8D34 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u52A0\u8F7D\u793A\u4F8B </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><div class="relative"><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u683C\u5F0F\u5316\u7684\u4EE3\u7801..." class="w-full h-96 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(inputCode.value)}</textarea>`);
      if (detectedLanguage.value) {
        _push(`<div class="absolute top-2 right-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded">${ssrInterpolate(detectedLanguage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded">${ssrInterpolate(inputCode.value.length)} \u5B57\u7B26 </div></div></div><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">\u683C\u5F0F\u5316\u7ED3\u679C</h2><div class="flex gap-2">`);
      if (formattedCode.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (formattedCode.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u4E0B\u8F7D </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="relative"><textarea readonly placeholder="\u683C\u5F0F\u5316\u540E\u7684\u4EE3\u7801\u5C06\u663E\u793A\u5728\u8FD9\u91CC..." class="w-full h-96 p-4 bg-muted rounded-lg resize-none font-mono text-sm">${ssrInterpolate(formattedCode.value)}</textarea>`);
      if (copied.value) {
        _push(`<div class="absolute top-2 right-2 px-3 py-1 bg-green-500 text-white text-sm rounded"> \u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded">${ssrInterpolate(formattedCode.value.length)} \u5B57\u7B26 </div></div></div></div><div class="flex justify-center"><button${ssrIncludeBooleanAttr(!inputCode.value) ? " disabled" : ""} class="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "w-5 h-5" }, null, _parent));
      _push(` \u683C\u5F0F\u5316\u4EE3\u7801 </button></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u4EE3\u7801\u538B\u7F29</h2><div class="flex gap-4"><button${ssrIncludeBooleanAttr(!inputCode.value) ? " disabled" : ""} class="px-4 py-2 bg-muted hover:bg-muted/80 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u538B\u7F29\u4EE3\u7801 </button><button${ssrIncludeBooleanAttr(!inputCode.value) ? " disabled" : ""} class="px-4 py-2 bg-muted hover:bg-muted/80 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u89E3\u538B\u7F29\u4EE3\u7801 </button></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u652F\u6301\u7684\u8BED\u8A00</h2><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3"><!--[-->`);
      ssrRenderList(supportedLanguages, (lang) => {
        _push(`<div class="p-3 bg-muted rounded-lg text-center"><div class="font-medium text-sm">${ssrInterpolate(lang.name)}</div><div class="text-xs text-muted-foreground mt-1">${ssrInterpolate(lang.extensions.join(", "))}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u4EE3\u7801\u683C\u5F0F\u5316\u6280\u5DE7</h2><div class="space-y-4 text-sm"><div><h3 class="font-medium mb-2">1. \u7EDF\u4E00\u4EE3\u7801\u98CE\u683C</h3><p class="text-muted-foreground"> \u4EE3\u7801\u683C\u5F0F\u5316\u4E0D\u4EC5\u8BA9\u4EE3\u7801\u66F4\u6613\u8BFB\uFF0C\u8FD8\u80FD\u5E2E\u52A9\u56E2\u961F\u6210\u5458\u4FDD\u6301\u4E00\u81F4\u7684\u4EE3\u7801\u98CE\u683C\u3002 \u5EFA\u8BAE\u5728\u9879\u76EE\u4E2D\u914D\u7F6E\u7EDF\u4E00\u7684\u683C\u5F0F\u5316\u89C4\u5219\uFF0C\u5982 ESLint\u3001Prettier \u7B49\u5DE5\u5177\u3002 </p></div><div><h3 class="font-medium mb-2">2. \u9009\u62E9\u5408\u9002\u7684\u7F29\u8FDB</h3><p class="text-muted-foreground"> 2 \u4E2A\u7A7A\u683C\u9002\u5408\u5C0F\u578B\u9879\u76EE\u6216\u914D\u7F6E\u6587\u4EF6\uFF0C4 \u4E2A\u7A7A\u683C\u662F\u5927\u591A\u6570\u8BED\u8A00\u7684\u6807\u51C6\u3002 \u5236\u8868\u7B26\u53EF\u4EE5\u4FDD\u6301\u4E0D\u540C\u7F16\u8F91\u5668\u7684\u4E00\u81F4\u6027\uFF0C\u4F46\u8981\u6CE8\u610F\u6DF7\u7528\u7A7A\u683C\u548C\u5236\u8868\u7B26\u7684\u95EE\u9898\u3002 </p></div><div><h3 class="font-medium mb-2">3. \u4FDD\u6301\u53EF\u8BFB\u6027</h3><p class="text-muted-foreground"> \u683C\u5F0F\u5316\u540E\u7684\u4EE3\u7801\u5E94\u8BE5\u4FDD\u6301\u539F\u6709\u7684\u903B\u8F91\u7ED3\u6784\uFF0C\u907F\u514D\u8FC7\u5EA6\u683C\u5F0F\u5316\u5BFC\u81F4\u4EE3\u7801\u96BE\u4EE5\u7406\u89E3\u3002 \u9002\u5F53\u6DFB\u52A0\u7A7A\u884C\u5206\u9694\u4E0D\u540C\u7684\u903B\u8F91\u5757\uFF0C\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u3002 </p></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/format/json-formatter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileJson), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSON\u683C\u5F0F\u5316</p><p class="text-xs text-muted-foreground"${_scopeId}>\u7F8E\u5316\u538B\u7F29JSON</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileJson), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSON\u683C\u5F0F\u5316"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u7F8E\u5316\u538B\u7F29JSON")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/format/css-formatter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>CSS\u683C\u5F0F\u5316</p><p class="text-xs text-muted-foreground"${_scopeId}>\u7F8E\u5316\u538B\u7F29CSS</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "CSS\u683C\u5F0F\u5316"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u7F8E\u5316\u538B\u7F29CSS")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/format/sql-formatter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Database), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>SQL\u683C\u5F0F\u5316</p><p class="text-xs text-muted-foreground"${_scopeId}>\u7F8E\u5316SQL\u8BED\u53E5</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Database), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "SQL\u683C\u5F0F\u5316"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u7F8E\u5316SQL\u8BED\u53E5")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/code-format.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=code-format-BDWqnnmO.mjs.map
