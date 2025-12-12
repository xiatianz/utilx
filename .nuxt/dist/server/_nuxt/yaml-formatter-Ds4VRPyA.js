import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { HelpCircle, ChevronUp, GitBranch, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Wifi, Type, Clock, Shield, Lock, FileText } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import { e as addRecentTool } from "../server.mjs";
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
  __name: "yaml-formatter",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const tool = tools.find((t) => t.id === "yaml-converter");
    categories.find((c) => c.id === "format");
    const inputData = ref("");
    const outputData = ref("");
    const inputError = ref("");
    const inputFormat = ref("yaml");
    const outputFormat = ref("json");
    const isSeoContentVisible = ref(true);
    ref(null);
    ref(false);
    const iconMap = {
      FileText,
      Lock,
      Shield,
      Clock,
      Type,
      Wifi,
      Image,
      Code,
      FileJson,
      Database,
      Link,
      Hash,
      Timer,
      Regex,
      FileDiff,
      Globe,
      FolderOpen,
      GitBranch
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "format" && t.id !== "yaml-converter"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "xml-formatter"),
        tools.find((t) => t.id === "sql-formatter"),
        tools.find((t) => t.id === "base64-encoder")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const getButtonText = () => {
      if (inputFormat.value === "yaml" && outputFormat.value === "json") {
        return "YAML 转 JSON";
      } else if (inputFormat.value === "json" && outputFormat.value === "yaml") {
        return "JSON 转 YAML";
      }
      return "转换";
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">YAML转换器 - YAML与JSON互转工具</h1><p class="text-muted-foreground">一款免费的在线 YAML Converter。支持 YAML 与 JSON 格式互相转换，格式化、验证 YAML 语法。纯本地计算，数据隐私绝对安全。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">输入YAML</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 清空 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 粘贴 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 示例数据 </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">输入格式:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="yaml"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "yaml") : ssrLooseEqual(inputFormat.value, "yaml")) ? " selected" : ""}>YAML</option><option value="json"${ssrIncludeBooleanAttr(Array.isArray(inputFormat.value) ? ssrLooseContain(inputFormat.value, "json") : ssrLooseEqual(inputFormat.value, "json")) ? " selected" : ""}>JSON</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">输出格式:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="json"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "json") : ssrLooseEqual(outputFormat.value, "json")) ? " selected" : ""}>JSON</option><option value="yaml"${ssrIncludeBooleanAttr(Array.isArray(outputFormat.value) ? ssrLooseContain(outputFormat.value, "yaml") : ssrLooseEqual(outputFormat.value, "yaml")) ? " selected" : ""}>YAML</option></select></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm"${ssrRenderAttr("placeholder", inputFormat.value === "yaml" ? "在此输入YAML数据..." : "在此输入JSON数据...")}>${ssrInterpolate(inputData.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">转换结果</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 复制 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 下载文件 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 全屏模式 </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputData.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">${ssrInterpolate(getButtonText())}</button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 YAML？ </h2><p class="text-muted-foreground mb-4"> YAML（YAML Ain&#39;t Markup Language）是一种人类可读的数据序列化格式，常用于配置文件、 数据交换和应用程序配置。它以其简洁性和易读性而闻名，支持列表、字典、标量等数据结构。 YAML 使用缩进来表示层级关系，避免了使用花括号和标签的复杂性。 </p><p class="text-muted-foreground"> YAML 与 JSON 可以互相转换，因为它们都表示相同的数据结构。YAML 更加人类友好， 而 JSON 更加机器友好。在 DevOps、容器化应用（如 Docker、Kubernetes）中， YAML 是标准的配置格式。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>选择输入格式（YAML 或 JSON）</li><li>将数据粘贴到左侧输入框</li><li>选择输出格式（JSON 或 YAML）</li><li>点击转换按钮或使用快捷键 Ctrl+Enter</li><li>查看右侧转换结果，可复制或下载</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>双向转换</strong>: 支持 YAML 到 JSON 和 JSON 到 YAML 的双向转换</li><li><strong>语法验证</strong>: 自动检测输入数据的语法错误并提供详细提示</li><li><strong>格式美化</strong>: 转换后的数据自动格式化，提高可读性</li><li><strong>保留注释</strong>: YAML 到 JSON 转换时尽力保留注释信息</li><li><strong>本地处理</strong>: 所有转换都在浏览器本地完成，确保数据安全</li><li><strong>批量转换</strong>: 支持大型文件的快速转换</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> YAML vs JSON </h2><div class="space-y-4 mb-6"><div><h3 class="text-lg font-semibold text-foreground mb-2">YAML 优势：</h3><ul class="list-disc list-inside text-muted-foreground ml-4"><li>更易读，使用缩进代替括号</li><li>支持注释（# 注释）</li><li>支持多行字符串、日期等高级类型</li><li>更适合配置文件</li></ul></div><div><h3 class="text-lg font-semibold text-foreground mb-2">JSON 优势：</h3><ul class="list-disc list-inside text-muted-foreground ml-4"><li>解析速度更快</li><li>更严格的语法规范</li><li>原生支持于大多数编程语言</li><li>更适合 API 数据交换</li></ul></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">YAML 转换为 JSON 会丢失什么？</h3><p class="text-muted-foreground mt-1"> YAML 转换为 JSON 时可能会丢失：注释、多行字符串的精确格式、日期类型等。 这些是 JSON 格式不支持的特性。如果需要保留这些信息，建议继续使用 YAML 格式。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么选择 YAML 而不是 JSON？</h3><p class="text-muted-foreground mt-1"> YAML 更适合人类编辑和阅读，特别是配置文件。它支持注释让配置更易理解， 缩进结构让层级关系一目了然。而 JSON 更适合机器处理和网络传输。 </p></div><div><h3 class="text-lg font-semibold text-foreground">YAML 的缩进有什么要求？</h3><p class="text-muted-foreground mt-1"> YAML 使用空格进行缩进，不能使用 Tab。建议使用 2 个空格作为标准缩进。 同一级别的元素必须保持相同的缩进量，缩进错误会导致解析失败。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}/`,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/yaml-formatter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=yaml-formatter-Ds4VRPyA.js.map
