import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import { X, FileText, ArrowRight, FileJson } from "lucide-vue-next";
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
  __name: "xpath-tester",
  __ssrInlineRender: true,
  setup(__props) {
    const xmlInput = ref("");
    const xpath = ref("");
    const xmlDoc = ref(null);
    const xmlError = ref("");
    const queryResult = ref(null);
    const resultCount = ref(0);
    const copied = ref(false);
    const queryType = ref("multiple");
    const xpathExamples = [
      {
        xpath: "/bookstore/book",
        description: "获取所有书籍节点"
      },
      {
        xpath: "//book",
        description: "获取文档中所有书籍节点"
      },
      {
        xpath: "//book[1]",
        description: "获取第一本书"
      },
      {
        xpath: "//book[last()]",
        description: "获取最后一本书"
      },
      {
        xpath: '//book[@category="web"]',
        description: "获取 web 类别的书"
      },
      {
        xpath: "//book[price>35]",
        description: "获取价格大于 35 的书"
      },
      {
        xpath: "//title/text()",
        description: "获取所有书的标题文本"
      },
      {
        xpath: "count(//book)",
        description: "统计书籍总数"
      }
    ];
    const formatQueryResult = () => {
      if (!queryResult.value) return "";
      if (typeof queryResult.value === "number") {
        return queryResult.value.toString();
      }
      if (queryResult.value.nodeType === 1) {
        const serializer = new XMLSerializer();
        return serializer.serializeToString(queryResult.value);
      }
      if (Array.isArray(queryResult.value)) {
        const serializer = new XMLSerializer();
        return queryResult.value.map((node) => {
          if (node.nodeType === 1) {
            return serializer.serializeToString(node);
          } else if (node.nodeType === 2) {
            return `${node.name}="${node.value}"`;
          } else {
            return node.textContent || node.nodeValue;
          }
        }).join("\n\n");
      }
      return queryResult.value.toString();
    };
    useSeoMeta({
      title: "XPath测试器 - 在线XML路径表达式查询",
      description: "免费在线XPath测试工具，支持使用XPath表达式查询和提取XML数据，提供语法说明和示例。",
      keywords: ["xpath", "xml", "query", "path", "test", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">XPath 测试器</h1><p class="text-muted-foreground">使用 XPath 表达式查询和提取 XML 数据</p></div><div class="space-y-6"><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">XML 数据</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 加载示例 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 格式化 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><div class="relative"><textarea placeholder="请输入 XML 数据..." class="${ssrRenderClass([{ "border-red-500": xmlError.value }, "w-full h-96 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"])}">${ssrInterpolate(xmlInput.value)}</textarea><div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded">${ssrInterpolate(xmlInput.value.length)} 字符 </div></div>`);
      if (xmlError.value) {
        _push(`<div class="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">${ssrInterpolate(xmlError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">XPath 查询</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><div class="space-y-2"><label class="text-sm font-medium">XPath 表达式</label><div class="relative"><input${ssrRenderAttr("value", xpath.value)} placeholder="例如: //book/title" class="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono">`);
      if (xpath.value) {
        _push(`<button class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="space-y-3"><label class="text-sm font-medium">查询选项</label><div class="flex flex-wrap gap-3"><label class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(queryType.value, "single")) ? " checked" : ""} value="single" class="mr-2"><span class="text-sm">返回单个结果</span></label><label class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(queryType.value, "multiple")) ? " checked" : ""} value="multiple" class="mr-2"><span class="text-sm">返回所有结果</span></label><label class="flex items-center"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(queryType.value, "count")) ? " checked" : ""} value="count" class="mr-2"><span class="text-sm">只返回数量</span></label></div></div><div class="space-y-2"><label class="text-sm font-medium">快捷示例</label><div class="grid grid-cols-1 gap-2"><!--[-->`);
      ssrRenderList(xpathExamples, (example) => {
        _push(`<button class="p-2 text-sm bg-muted hover:bg-muted/80 rounded text-left transition-colors"><div class="font-mono text-primary">${ssrInterpolate(example.xpath)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(example.description)}</div></button>`);
      });
      _push(`<!--]--></div></div><button${ssrIncludeBooleanAttr(!xmlDoc.value || !xpath.value) ? " disabled" : ""} class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> 执行查询 </button>`);
      if (queryResult.value !== null) {
        _push(`<div class="space-y-2"><div class="flex items-center justify-between"><label class="text-sm font-medium">查询结果</label><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">${ssrInterpolate(copied.value ? "已复制" : "复制")}</button></div></div><div class="border rounded-lg overflow-hidden"><div class="px-3 py-2 bg-muted border-b flex items-center gap-2"><span class="text-sm font-medium">${ssrInterpolate(queryType.value === "count" ? "匹配数量" : `找到 ${resultCount.value} 个结果`)}</span></div><div class="max-h-64 overflow-auto p-4">`);
        if (queryResult.value) {
          _push(`<pre class="text-sm whitespace-pre-wrap">${ssrInterpolate(formatQueryResult())}</pre>`);
        } else {
          _push(`<div class="text-sm text-muted-foreground">没有找到匹配的结果</div>`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">XPath 语法说明</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-medium mb-3">节点选择</h3><table class="w-full text-sm"><thead><tr class="border-b"><th class="text-left py-2">表达式</th><th class="text-left py-2">说明</th></tr></thead><tbody><tr class="border-b"><td class="py-2 font-mono text-primary">nodename</td><td class="py-2">选择所有 nodename 子节点</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">/</td><td class="py-2">从根节点选择</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">//</td><td class="py-2">从当前节点选择匹配的节点</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">.</td><td class="py-2">选择当前节点</td></tr><tr><td class="py-2 font-mono text-primary">..</td><td class="py-2">选择当前节点的父节点</td></tr></tbody></table></div><div><h3 class="font-medium mb-3">谓语（Predicates）</h3><table class="w-full text-sm"><thead><tr class="border-b"><th class="text-left py-2">表达式</th><th class="text-left py-2">说明</th></tr></thead><tbody><tr class="border-b"><td class="py-2 font-mono text-primary">[1]</td><td class="py-2">第一个节点</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">[last()]</td><td class="py-2">最后一个节点</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">[@attr]</td><td class="py-2">包含 attr 属性的节点</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">[@attr=&#39;value&#39;]</td><td class="py-2">attr 属性等于 value 的节点</td></tr><tr><td class="py-2 font-mono text-primary">[text()=&#39;value&#39;]</td><td class="py-2">文本内容等于 value 的节点</td></tr></tbody></table></div></div><div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-medium mb-3">通配符</h3><table class="w-full text-sm"><thead><tr class="border-b"><th class="text-left py-2">表达式</th><th class="text-left py-2">说明</th></tr></thead><tbody><tr class="border-b"><td class="py-2 font-mono text-primary">*</td><td class="py-2">匹配任何元素节点</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">@*</td><td class="py-2">匹配任何属性节点</td></tr><tr><td class="py-2 font-mono text-primary">node()</td><td class="py-2">匹配任何类型的节点</td></tr></tbody></table></div><div><h3 class="font-medium mb-3">常用函数</h3><table class="w-full text-sm"><thead><tr class="border-b"><th class="text-left py-2">函数</th><th class="text-left py-2">说明</th></tr></thead><tbody><tr class="border-b"><td class="py-2 font-mono text-primary">text()</td><td class="py-2">获取节点的文本内容</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">count()</td><td class="py-2">统计节点数量</td></tr><tr><td class="py-2 font-mono text-primary">contains()</td><td class="py-2">检查是否包含指定字符串</td></tr></tbody></table></div></div><div class="mt-6"><h3 class="font-medium mb-3">常用示例</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h4 class="text-sm font-medium mb-2">基础查询</h4><ul class="space-y-1 text-sm"><li><code class="bg-muted px-1 rounded">/bookstore/book</code> - bookstore 下的所有 book</li><li><code class="bg-muted px-1 rounded">//book</code> - 所有 book 节点</li><li><code class="bg-muted px-1 rounded">//@lang</code> - 所有 lang 属性</li><li><code class="bg-muted px-1 rounded">/bookstore/book[1]</code> - 第一个 book</li></ul></div><div><h4 class="text-sm font-medium mb-2">高级查询</h4><ul class="space-y-1 text-sm"><li><code class="bg-muted px-1 rounded">//book[price&gt;35]</code> - 价格大于 35 的书</li><li><code class="bg-muted px-1 rounded">//book[@category=&#39;web&#39;]</code> - web 类别的书</li><li><code class="bg-muted px-1 rounded">//book/title/text()</code> - 所有书的标题文本</li><li><code class="bg-muted px-1 rounded">count(//book)</code> - 书籍总数</li></ul></div></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/format/xml-formatter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>XML格式化</p><p class="text-xs text-muted-foreground"${_scopeId}>美化压缩XML</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "XML格式化"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "美化压缩XML")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/format/xml-to-json",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileJson), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>XML转JSON</p><p class="text-xs text-muted-foreground"${_scopeId}>XML转换为JSON</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileJson), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "XML转JSON"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "XML转换为JSON")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/text/json-path",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileJson), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSONPath查询</p><p class="text-xs text-muted-foreground"${_scopeId}>JSON路径查询</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileJson), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSONPath查询"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "JSON路径查询")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/xpath-tester.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=xpath-tester-xlB4APAz.js.map
