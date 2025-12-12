import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { HelpCircle, ChevronUp, GitBranch, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Wifi, Type, Clock, Shield, Lock, FileText } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import { f as useSeoMeta, u as useHead, e as addRecentTool } from "../server.mjs";
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
  __name: "json-to-yaml",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "JSON转YAML - 在线JSON转YAML格式转换工具",
      description: "免费在线 JSON to YAML 转换工具，支持将 JSON 数据快速转换为 YAML 格式，保留数据结构，支持嵌套对象和数组。纯本地计算，数据安全。",
      keywords: "JSON转YAML, JSON to YAML, JSON YAML转换, 数据格式转换, 配置文件转换, 在线工具",
      author: "Util工具箱",
      ogTitle: "JSON转YAML - 在线JSON转YAML格式转换工具",
      ogDescription: "免费在线 JSON to YAML 转换工具，支持将 JSON 数据快速转换为 YAML 格式，保留数据结构。",
      ogType: "website",
      twitterCard: "summary_large_image"
    });
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "JSON转YAML工具",
            description: "免费在线 JSON to YAML 转换工具，支持将 JSON 数据快速转换为 YAML 格式",
            url: "https://util.example.com/tools/json-to-yaml",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            featureList: [
              "JSON转YAML",
              "保留数据结构",
              "智能格式化",
              "可配置缩进",
              "本地处理"
            ]
          })
        }
      ]
    });
    useRouter();
    const tool = tools.find((t) => t.id === "json-to-yaml");
    categories.find((c) => c.id === "format");
    const inputJSON = ref("");
    const outputYAML = ref("");
    const inputError = ref("");
    const indentSize = ref("2");
    const lineWidth = ref(120);
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
        (t) => t.category === "format" && t.id !== "json-to-yaml"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "yaml-converter"),
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "yaml-formatter"),
        tools.find((t) => t.id === "json-to-xml")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">JSON转YAML - 在线JSON转YAML格式转换工具</h1><p class="text-muted-foreground">一款免费的在线 JSON to YAML Converter。支持将 JSON 数据快速转换为 YAML 格式，保留数据结构，完美支持嵌套对象和数组。纯本地计算，数据隐私绝对安全。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">输入JSON</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 清空 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 粘贴 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 示例数据 </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">缩进:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="2"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "2") : ssrLooseEqual(indentSize.value, "2")) ? " selected" : ""}>2空格</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "4") : ssrLooseEqual(indentSize.value, "4")) ? " selected" : ""}>4空格</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">行宽限制:</label><input type="number"${ssrRenderAttr("value", lineWidth.value)} min="40" max="200" step="10" class="text-xs bg-muted border border-border rounded px-2 py-1 w-16"></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="在此输入JSON数据...">${ssrInterpolate(inputJSON.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">YAML输出</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 复制 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 下载YAML </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 全屏模式 </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputYAML.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> 转换为 YAML </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 JSON 转 YAML？ </h2><p class="text-muted-foreground mb-4"> JSON（JavaScript Object Notation）和 YAML（YAML Ain&#39;t Markup Language）都是常用的数据序列化格式。 JSON 转 YAML 是将 JSON 数据转换为更易读的 YAML 格式的过程。YAML 使用缩进和简洁的语法， 使配置文件和人类可读的数据更加友好。 </p><p class="text-muted-foreground"> YAML 是 JSON 的超集，支持更多的数据类型和特性，如注释、多行字符串、锚点等。 在 DevOps、容器化应用（Kubernetes、Docker Compose）中，YAML 是标准的配置格式。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>将您的 JSON 数据粘贴到左侧输入框</li><li>选择缩进大小（2空格或4空格）</li><li>设置行宽限制（可选）</li><li>点击&quot;转换为 YAML&quot;按钮或使用快捷键 Ctrl+Enter</li><li>查看右侧转换后的 YAML 结果</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 转换特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>保留结构</strong>: 完整保留 JSON 的数据结构和层次关系</li><li><strong>智能格式化</strong>: 根据数据类型选择最佳的 YAML 表示方式</li><li><strong>数组处理</strong>: 智能处理数组，生成清晰的 YAML 列表格式</li><li><strong>字符串优化</strong>: 自动选择是否需要引号，提高可读性</li><li><strong>多行支持</strong>: 长字符串自动转换为多行 YAML 格式</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> JSON vs YAML 对比 </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"><div class="p-4 bg-muted/50 rounded-lg"><h4 class="font-semibold text-foreground mb-2">JSON 特点</h4><ul class="text-sm text-muted-foreground space-y-1"><li>• 使用花括号和方括号</li><li>• 必须使用双引号表示字符串</li><li>• 不支持注释</li><li>• 严格的语法规范</li><li>• 适合机器解析和网络传输</li></ul></div><div class="p-4 bg-muted/50 rounded-lg"><h4 class="font-semibold text-foreground mb-2">YAML 特点</h4><ul class="text-sm text-muted-foreground space-y-1"><li>• 使用缩进表示层级</li><li>• 字符串通常不需要引号</li><li>• 支持 # 注释</li><li>• 更灵活的语法</li><li>• 适合配置文件和人类阅读</li></ul></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">转换后的 YAML 会丢失数据吗？</h3><p class="text-muted-foreground mt-1"> 不会。YAML 是 JSON 的超集，可以表示所有 JSON 的数据结构。转换是双向无损的， 您也可以将 YAML 转换回原始的 JSON 格式。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么使用 YAML 而不是 JSON？</h3><p class="text-muted-foreground mt-1"> YAML 更适合配置文件，因为它支持注释、更易读、更简洁。在 DevOps 工具链中 （如 Kubernetes、Docker Compose、Ansible），YAML 是标准格式。 </p></div><div><h3 class="text-lg font-semibold text-foreground">YAML 的缩进有什么要求？</h3><p class="text-muted-foreground mt-1"> YAML 使用空格进行缩进，不能使用 Tab。同一级别的元素必须有相同的缩进量。 建议使用 2 个空格作为标准缩进，这也是本工具的默认设置。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/json-to-yaml.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=json-to-yaml-D56EEWzL.js.map
