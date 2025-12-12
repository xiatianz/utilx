import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
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
  __name: "xml-to-json",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "XML转JSON - 在线XML转JSON格式转换工具",
      description: "免费在线 XML to JSON 转换工具，支持将 XML 数据快速转换为 JSON 格式，保留数据结构，支持属性转换和数组检测。纯本地计算，数据安全。",
      keywords: "XML转JSON, XML to JSON, XML JSON转换, 数据格式转换, 在线工具",
      author: "Util工具箱",
      ogTitle: "XML转JSON - 在线XML转JSON格式转换工具",
      ogDescription: "免费在线 XML to JSON 转换工具，支持将 XML 数据快速转换为 JSON 格式。",
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
            name: "XML转JSON工具",
            description: "免费在线 XML to JSON 转换工具，支持将 XML 数据快速转换为 JSON 格式",
            url: "https://util.example.com/tools/xml-to-json",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            featureList: [
              "XML转JSON",
              "属性处理选项",
              "数组自动检测",
              "保留数据结构",
              "本地处理"
            ]
          })
        }
      ]
    });
    useRouter();
    const tool = tools.find((t) => t.id === "xml-to-json");
    categories.find((c) => c.id === "format");
    const inputXML = ref("");
    const outputJSON = ref("");
    const inputError = ref("");
    const indentSize = ref("2");
    const attributeHandling = ref("prefix");
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
        (t) => t.category === "format" && t.id !== "xml-to-json"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "json-to-xml"),
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">XML转JSON - 在线XML转JSON格式转换工具</h1><p class="text-muted-foreground">一款免费的在线 XML to JSON Converter。支持将 XML 数据快速转换为 JSON 格式，保留数据结构，支持属性转换和数组检测。纯本地计算，数据隐私绝对安全。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">输入XML</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 清空 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 粘贴 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 示例数据 </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">缩进:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="2"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "2") : ssrLooseEqual(indentSize.value, "2")) ? " selected" : ""}>2空格</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "4") : ssrLooseEqual(indentSize.value, "4")) ? " selected" : ""}>4空格</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">处理属性:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="prefix"${ssrIncludeBooleanAttr(Array.isArray(attributeHandling.value) ? ssrLooseContain(attributeHandling.value, "prefix") : ssrLooseEqual(attributeHandling.value, "prefix")) ? " selected" : ""}>加@前缀</option><option value="separate"${ssrIncludeBooleanAttr(Array.isArray(attributeHandling.value) ? ssrLooseContain(attributeHandling.value, "separate") : ssrLooseEqual(attributeHandling.value, "separate")) ? " selected" : ""}>单独对象</option><option value="ignore"${ssrIncludeBooleanAttr(Array.isArray(attributeHandling.value) ? ssrLooseContain(attributeHandling.value, "ignore") : ssrLooseEqual(attributeHandling.value, "ignore")) ? " selected" : ""}>忽略</option></select></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="在此输入XML数据...">${ssrInterpolate(inputXML.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">JSON输出</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 复制 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 下载JSON </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 全屏模式 </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputJSON.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> 转换为 JSON </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 XML 转 JSON？ </h2><p class="text-muted-foreground mb-4"> XML（eXtensible Markup Language）和 JSON（JavaScript Object Notation）都是常用的数据交换格式。 XML 转 JSON 是将 XML 标记语言数据转换为 JSON 对象格式的过程。JSON 更轻量级、更易解析， 在现代 Web 应用中被广泛使用。 </p><p class="text-muted-foreground"> 转换过程中，XML 的元素、属性、文本内容会被映射到 JSON 的对象、属性和值。 需要考虑如何处理 XML 特有的特性，如属性、命名空间、注释等。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>将您的 XML 数据粘贴到左侧输入框</li><li>选择 JSON 缩进大小（2空格或4空格）</li><li>选择属性处理方式（加@前缀、单独对象或忽略）</li><li>点击&quot;转换为 JSON&quot;按钮或使用快捷键 Ctrl+Enter</li><li>查看右侧转换后的 JSON 结果</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 转换规则说明 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>元素转换</strong>: XML 元素转换为 JSON 对象的属性</li><li><strong>属性处理</strong>: XML 属性可转换为带@前缀的属性或单独的对象</li><li><strong>文本内容</strong>: 元素的文本内容作为特殊属性 &quot;#text&quot; 或直接作为值</li><li><strong>数组检测</strong>: 相同名称的兄弟元素自动转换为 JSON 数组</li><li><strong>混合内容</strong>: 包含文本和子元素的元素会被特殊处理</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 属性处理选项 </h2><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"><div class="p-4 bg-muted/50 rounded-lg"><h4 class="font-semibold text-foreground mb-2">加@前缀</h4><p class="text-sm text-muted-foreground"> 将 XML 属性转换为以 @ 开头的 JSON 属性。 例如：&lt;item id=&quot;1&quot;&gt; → {&quot;@id&quot;: &quot;1&quot;} </p></div><div class="p-4 bg-muted/50 rounded-lg"><h4 class="font-semibold text-foreground mb-2">单独对象</h4><p class="text-sm text-muted-foreground"> 将所有属性收集到单独的 &quot;@attributes&quot; 对象中。 例如：&lt;item id=&quot;1&quot;&gt; → {&quot;@attributes&quot;: {&quot;id&quot;: &quot;1&quot;}} </p></div><div class="p-4 bg-muted/50 rounded-lg"><h4 class="font-semibold text-foreground mb-2">忽略</h4><p class="text-sm text-muted-foreground"> 完全忽略 XML 属性，只保留元素和文本内容。 这适用于只需要数据的场景。 </p></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">XML 中的命名空间如何处理？</h3><p class="text-muted-foreground mt-1"> 命名空间前缀会保留在元素名称中。例如 &lt;ns:item&gt; 会被转换为 {&quot;ns:item&quot;: ...}。 如果需要完全移除命名空间，可以在转换后进行后处理。 </p></div><div><h3 class="text-lg font-semibold text-foreground">如何处理 CDATA 部分？</h3><p class="text-muted-foreground mt-1"> CDATA 部分的内容会作为普通文本处理，不会被解析为 XML 标记。 这确保了特殊字符和代码片段能够正确保留。 </p></div><div><h3 class="text-lg font-semibold text-foreground">转换后的 JSON 可以再转回 XML 吗？</h3><p class="text-muted-foreground mt-1"> 可以。使用我们的 JSON 转 XML 工具可以将转换后的 JSON 再转回 XML 格式。 某些 XML 特性（如注释、处理指令）在转换过程中可能会丢失。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/xml-to-json.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=xml-to-json-BaF4Uz9E.js.map
