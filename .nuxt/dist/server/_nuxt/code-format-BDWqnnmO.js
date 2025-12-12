import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Sparkles, FileJson, ArrowRight, FileText, Database } from "lucide-vue-next";
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
      title: "代码格式化工具 - 在线多语言代码美化工具",
      description: "免费在线代码格式化工具，支持JavaScript、Python、Java、JSON等20+种编程语言的代码美化和压缩功能。",
      keywords: ["代码格式化", "代码美化", "在线格式化", "代码压缩", "JavaScript", "Python", "JSON"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">代码格式化工具</h1><p class="text-muted-foreground">格式化各种编程语言代码，美化代码结构</p></div><div class="space-y-6"><div class="bg-card rounded-lg p-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div><label class="text-sm font-medium mb-2 block">编程语言</label><select class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><option value=""${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "") : ssrLooseEqual(selectedLanguage.value, "")) ? " selected" : ""}>自动检测</option><option value="javascript"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "javascript") : ssrLooseEqual(selectedLanguage.value, "javascript")) ? " selected" : ""}>JavaScript</option><option value="typescript"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "typescript") : ssrLooseEqual(selectedLanguage.value, "typescript")) ? " selected" : ""}>TypeScript</option><option value="python"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "python") : ssrLooseEqual(selectedLanguage.value, "python")) ? " selected" : ""}>Python</option><option value="java"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "java") : ssrLooseEqual(selectedLanguage.value, "java")) ? " selected" : ""}>Java</option><option value="csharp"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "csharp") : ssrLooseEqual(selectedLanguage.value, "csharp")) ? " selected" : ""}>C#</option><option value="cpp"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "cpp") : ssrLooseEqual(selectedLanguage.value, "cpp")) ? " selected" : ""}>C++</option><option value="html"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "html") : ssrLooseEqual(selectedLanguage.value, "html")) ? " selected" : ""}>HTML</option><option value="css"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "css") : ssrLooseEqual(selectedLanguage.value, "css")) ? " selected" : ""}>CSS</option><option value="scss"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "scss") : ssrLooseEqual(selectedLanguage.value, "scss")) ? " selected" : ""}>SCSS</option><option value="json"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "json") : ssrLooseEqual(selectedLanguage.value, "json")) ? " selected" : ""}>JSON</option><option value="xml"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "xml") : ssrLooseEqual(selectedLanguage.value, "xml")) ? " selected" : ""}>XML</option><option value="sql"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "sql") : ssrLooseEqual(selectedLanguage.value, "sql")) ? " selected" : ""}>SQL</option><option value="php"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "php") : ssrLooseEqual(selectedLanguage.value, "php")) ? " selected" : ""}>PHP</option><option value="ruby"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "ruby") : ssrLooseEqual(selectedLanguage.value, "ruby")) ? " selected" : ""}>Ruby</option><option value="go"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "go") : ssrLooseEqual(selectedLanguage.value, "go")) ? " selected" : ""}>Go</option><option value="rust"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "rust") : ssrLooseEqual(selectedLanguage.value, "rust")) ? " selected" : ""}>Rust</option><option value="swift"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "swift") : ssrLooseEqual(selectedLanguage.value, "swift")) ? " selected" : ""}>Swift</option><option value="kotlin"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "kotlin") : ssrLooseEqual(selectedLanguage.value, "kotlin")) ? " selected" : ""}>Kotlin</option></select></div><div><label class="text-sm font-medium mb-2 block">缩进</label><div class="flex gap-2"><select class="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"><option value="spaces"${ssrIncludeBooleanAttr(Array.isArray(indentType.value) ? ssrLooseContain(indentType.value, "spaces") : ssrLooseEqual(indentType.value, "spaces")) ? " selected" : ""}>空格</option><option value="tabs"${ssrIncludeBooleanAttr(Array.isArray(indentType.value) ? ssrLooseContain(indentType.value, "tabs") : ssrLooseEqual(indentType.value, "tabs")) ? " selected" : ""}>制表符</option></select><input${ssrRenderAttr("value", indentSize.value)} type="number" min="1" max="8" class="w-20 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(indentType.value === "tabs") ? " disabled" : ""}></div></div><div><label class="text-sm font-medium mb-2 block">格式化选项</label><div class="space-y-2"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.semicolons) ? ssrLooseContain(options.value.semicolons, null) : options.value.semicolons) ? " checked" : ""} class="mr-2"><span class="text-sm">保留分号</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.singleQuote) ? ssrLooseContain(options.value.singleQuote, null) : options.value.singleQuote) ? " checked" : ""} class="mr-2"><span class="text-sm">单引号</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.trailingComma) ? ssrLooseContain(options.value.trailingComma, null) : options.value.trailingComma) ? " checked" : ""} class="mr-2"><span class="text-sm">尾随逗号</span></label></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">输入代码</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 粘贴 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 加载示例 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><div class="relative"><textarea placeholder="请输入要格式化的代码..." class="w-full h-96 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(inputCode.value)}</textarea>`);
      if (detectedLanguage.value) {
        _push(`<div class="absolute top-2 right-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded">${ssrInterpolate(detectedLanguage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded">${ssrInterpolate(inputCode.value.length)} 字符 </div></div></div><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">格式化结果</h2><div class="flex gap-2">`);
      if (formattedCode.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">${ssrInterpolate(copied.value ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (formattedCode.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="relative"><textarea readonly placeholder="格式化后的代码将显示在这里..." class="w-full h-96 p-4 bg-muted rounded-lg resize-none font-mono text-sm">${ssrInterpolate(formattedCode.value)}</textarea>`);
      if (copied.value) {
        _push(`<div class="absolute top-2 right-2 px-3 py-1 bg-green-500 text-white text-sm rounded"> 已复制到剪贴板 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded">${ssrInterpolate(formattedCode.value.length)} 字符 </div></div></div></div><div class="flex justify-center"><button${ssrIncludeBooleanAttr(!inputCode.value) ? " disabled" : ""} class="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "w-5 h-5" }, null, _parent));
      _push(` 格式化代码 </button></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">代码压缩</h2><div class="flex gap-4"><button${ssrIncludeBooleanAttr(!inputCode.value) ? " disabled" : ""} class="px-4 py-2 bg-muted hover:bg-muted/80 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 压缩代码 </button><button${ssrIncludeBooleanAttr(!inputCode.value) ? " disabled" : ""} class="px-4 py-2 bg-muted hover:bg-muted/80 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 解压缩代码 </button></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">支持的语言</h2><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3"><!--[-->`);
      ssrRenderList(supportedLanguages, (lang) => {
        _push(`<div class="p-3 bg-muted rounded-lg text-center"><div class="font-medium text-sm">${ssrInterpolate(lang.name)}</div><div class="text-xs text-muted-foreground mt-1">${ssrInterpolate(lang.extensions.join(", "))}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">代码格式化技巧</h2><div class="space-y-4 text-sm"><div><h3 class="font-medium mb-2">1. 统一代码风格</h3><p class="text-muted-foreground"> 代码格式化不仅让代码更易读，还能帮助团队成员保持一致的代码风格。 建议在项目中配置统一的格式化规则，如 ESLint、Prettier 等工具。 </p></div><div><h3 class="font-medium mb-2">2. 选择合适的缩进</h3><p class="text-muted-foreground"> 2 个空格适合小型项目或配置文件，4 个空格是大多数语言的标准。 制表符可以保持不同编辑器的一致性，但要注意混用空格和制表符的问题。 </p></div><div><h3 class="font-medium mb-2">3. 保持可读性</h3><p class="text-muted-foreground"> 格式化后的代码应该保持原有的逻辑结构，避免过度格式化导致代码难以理解。 适当添加空行分隔不同的逻辑块，提高代码的可读性。 </p></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/format/json-formatter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileJson), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSON格式化</p><p class="text-xs text-muted-foreground"${_scopeId}>美化压缩JSON</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileJson), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSON格式化"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "美化压缩JSON")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>CSS格式化</p><p class="text-xs text-muted-foreground"${_scopeId}>美化压缩CSS</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "CSS格式化"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "美化压缩CSS")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>SQL格式化</p><p class="text-xs text-muted-foreground"${_scopeId}>美化SQL语句</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Database), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "SQL格式化"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "美化SQL语句")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=code-format-BDWqnnmO.js.map
