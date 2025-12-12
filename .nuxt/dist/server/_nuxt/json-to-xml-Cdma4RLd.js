import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
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
  __name: "json-to-xml",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "JSON转XML - 在线JSON转XML格式转换工具",
      description: "免费在线 JSON to XML 转换工具，支持将 JSON 数据快速转换为 XML 格式，保留数据结构，支持自定义根元素。纯本地计算，数据安全。",
      keywords: "JSON转XML, JSON to XML, JSON XML转换, 数据格式转换, 在线工具",
      author: "Util工具箱",
      ogTitle: "JSON转XML - 在线JSON转XML格式转换工具",
      ogDescription: "免费在线 JSON to XML 转换工具，支持将 JSON 数据快速转换为 XML 格式，保留数据结构。",
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
            name: "JSON转XML工具",
            description: "免费在线 JSON to XML 转换工具，支持将 JSON 数据快速转换为 XML 格式",
            url: "https://util.example.com/tools/json-to-xml",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            featureList: [
              "JSON转XML",
              "自定义根元素",
              "数组元素命名",
              "格式化输出",
              "本地处理"
            ]
          })
        }
      ]
    });
    useRouter();
    const tool = tools.find((t) => t.id === "json-to-xml");
    categories.find((c) => c.id === "format");
    const inputJSON = ref("");
    const outputXML = ref("");
    const inputError = ref("");
    const rootElementName = ref("root");
    const arrayElementName = ref("item");
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
        (t) => t.category === "format" && t.id !== "json-to-xml"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "xml-to-json"),
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "xml-formatter"),
        tools.find((t) => t.id === "json-to-yaml")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">JSON转XML - 在线JSON转XML格式转换工具</h1><p class="text-muted-foreground">一款免费的在线 JSON to XML Converter。支持将 JSON 数据快速转换为 XML 格式，保留数据结构，支持自定义根元素名称。纯本地计算，数据隐私绝对安全。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">输入JSON</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 清空 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 粘贴 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 示例数据 </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">根元素名称:</label><input type="text"${ssrRenderAttr("value", rootElementName.value)} placeholder="root" class="text-xs bg-muted border border-border rounded px-2 py-1 w-24"></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">数组元素名称:</label><input type="text"${ssrRenderAttr("value", arrayElementName.value)} placeholder="item" class="text-xs bg-muted border border-border rounded px-2 py-1 w-24"></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="在此输入JSON数据...">${ssrInterpolate(inputJSON.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">XML输出</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 复制 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 下载XML </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 全屏模式 </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputXML.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> 转换为 XML </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 JSON 转 XML？ </h2><p class="text-muted-foreground mb-4"> JSON（JavaScript Object Notation）和 XML（eXtensible Markup Language）都是常用的数据交换格式。 JSON 转 XML 是将 JSON 数据结构转换为 XML 格式的过程，这在需要与遗留系统集成、 或某些特定场景下需要 XML 格式的数据时非常有用。 </p><p class="text-muted-foreground"> JSON 使用键值对和数组来表示数据结构，而 XML 使用标签和属性。转换过程中需要考虑 如何映射这些结构，以确保数据的完整性和可读性。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>将您的 JSON 数据粘贴到左侧输入框</li><li>设置根元素名称（默认为 &quot;root&quot;）</li><li>设置数组元素名称（默认为 &quot;item&quot;）</li><li>点击&quot;转换为 XML&quot;按钮或使用快捷键 Ctrl+Enter</li><li>查看右侧转换后的 XML 结果</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 转换规则说明 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>对象映射</strong>: JSON 对象转换为 XML 元素，键名作为标签名</li><li><strong>数组处理</strong>: JSON 数组转换为多个相同名称的 XML 元素</li><li><strong>数据类型</strong>: 所有值都转换为 XML 的文本内容（CDATA）</li><li><strong>嵌套结构</strong>: 保留 JSON 的嵌套层级关系</li><li><strong>特殊字符</strong>: 自动转义 XML 特殊字符（&lt;, &gt;, &amp;, &#39;, &quot;）</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">转换后的 XML 会保留数据类型吗？</h3><p class="text-muted-foreground mt-1"> XML 本身不支持数据类型，所有值都会转换为文本。如果需要在 XML 中保留类型信息， 可以使用属性或特殊标签来标记数据类型。 </p></div><div><h3 class="text-lg font-semibold text-foreground">JSON 数组如何转换为 XML？</h3><p class="text-muted-foreground mt-1"> JSON 数组会转换为多个同名的 XML 元素。例如，数组 [&quot;a&quot;, &quot;b&quot;] 会转换为： &lt;array&gt;&lt;item&gt;a&lt;/item&gt;&lt;item&gt;b&lt;/item&gt;&lt;/array&gt; </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么需要 JSON 转 XML？</h3><p class="text-muted-foreground mt-1"> 常见场景包括：与使用 XML 的遗留系统集成、符合行业标准格式要求、 XML 具有更好的自描述性和验证机制（DTD/XSD）、某些企业应用要求 XML 格式等。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/json-to-xml.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=json-to-xml-Cdma4RLd.js.map
