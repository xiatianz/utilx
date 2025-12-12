import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { X, FileJson, ArrowRight, FileText, FileCode } from "lucide-vue-next";
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
  __name: "json-path",
  __ssrInlineRender: true,
  setup(__props) {
    const jsonInput = ref("");
    const jsonPath = ref("");
    const jsonData = ref(null);
    const jsonError = ref("");
    const queryResult = ref(null);
    const copied = ref(false);
    const pathExamples = [
      {
        path: "$.store.book[*].author",
        description: "获取所有书籍的作者"
      },
      {
        path: "$..author",
        description: "获取所有作者（递归查找）"
      },
      {
        path: "$.store.*",
        description: "获取 store 下的所有子节点"
      },
      {
        path: "$..book[0]",
        description: "获取第一本书"
      },
      {
        path: "$..book[-1]",
        description: "获取最后一本书"
      },
      {
        path: "$..book[?(@.price<10)]",
        description: "获取价格小于 10 的书"
      },
      {
        path: '$..book[?(@.category=="fiction")]',
        description: "获取小说类书籍"
      },
      {
        path: "$..book[?(@.isbn)]",
        description: "获取有 ISBN 的书"
      }
    ];
    useSeoMeta({
      title: "JSONPath查询工具 - 在线JSON路径表达式查询",
      description: "免费在线JSONPath查询工具，支持使用JSONPath表达式查询和提取JSON数据，提供语法说明和示例。",
      keywords: ["jsonpath", "json", "query", "path", "extract", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">JSONPath 查询工具</h1><p class="text-muted-foreground">使用 JSONPath 表达式查询和提取 JSON 数据</p></div><div class="space-y-6"><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">JSON 数据</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 加载示例 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 格式化 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><div class="relative"><textarea placeholder="请输入 JSON 数据..." class="${ssrRenderClass([{ "border-red-500": jsonError.value }, "w-full h-96 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"])}">${ssrInterpolate(jsonInput.value)}</textarea><div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded">${ssrInterpolate(jsonInput.value.length)} 字符 </div></div>`);
      if (jsonError.value) {
        _push(`<div class="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">${ssrInterpolate(jsonError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">JSONPath 查询</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><div class="space-y-2"><label class="text-sm font-medium">JSONPath 表达式</label><div class="relative"><input${ssrRenderAttr("value", jsonPath.value)} placeholder="例如: $.store.book[*].author" class="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono">`);
      if (jsonPath.value) {
        _push(`<button class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="space-y-2"><label class="text-sm font-medium">快捷示例</label><div class="grid grid-cols-1 gap-2"><!--[-->`);
      ssrRenderList(pathExamples, (example) => {
        _push(`<button class="p-2 text-sm bg-muted hover:bg-muted/80 rounded text-left transition-colors"><div class="font-mono text-primary">${ssrInterpolate(example.path)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(example.description)}</div></button>`);
      });
      _push(`<!--]--></div></div><button${ssrIncludeBooleanAttr(!jsonData.value || !jsonPath.value) ? " disabled" : ""} class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> 执行查询 </button>`);
      if (queryResult.value !== null) {
        _push(`<div class="space-y-2"><div class="flex items-center justify-between"><label class="text-sm font-medium">查询结果</label><div class="flex gap-2"><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">${ssrInterpolate(copied.value ? "已复制" : "复制")}</button></div></div><div class="border rounded-lg overflow-hidden"><div class="px-3 py-2 bg-muted border-b flex items-center gap-2"><span class="text-sm font-medium">${ssrInterpolate(Array.isArray(queryResult.value) ? `数组 (${queryResult.value.length} 项)` : typeof queryResult.value)}</span></div><div class="max-h-64 overflow-auto p-4">`);
        if (typeof queryResult.value === "object") {
          _push(`<pre class="text-sm">${ssrInterpolate(JSON.stringify(queryResult.value, null, 2))}</pre>`);
        } else {
          _push(`<div class="text-sm">${ssrInterpolate(queryResult.value)}</div>`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">JSONPath 语法说明</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-medium mb-3">基础语法</h3><table class="w-full text-sm"><thead><tr class="border-b"><th class="text-left py-2">表达式</th><th class="text-left py-2">说明</th></tr></thead><tbody><tr class="border-b"><td class="py-2 font-mono text-primary">$</td><td class="py-2">根节点</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">@</td><td class="py-2">当前节点</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">. 或 []</td><td class="py-2">子节点操作符</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">..</td><td class="py-2">递归下降（所有层级的子节点）</td></tr><tr><td class="py-2 font-mono text-primary">*</td><td class="py-2">通配符，匹配所有元素</td></tr></tbody></table></div><div><h3 class="font-medium mb-3">高级语法</h3><table class="w-full text-sm"><thead><tr class="border-b"><th class="text-left py-2">表达式</th><th class="text-left py-2">说明</th></tr></thead><tbody><tr class="border-b"><td class="py-2 font-mono text-primary">[]</td><td class="py-2">迭代器（如 [0,1] 或 [1:10]）</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">[start:end:step]</td><td class="py-2">数组切片（支持 Python 风格）</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">?(expression)</td><td class="py-2">脚本表达式（过滤）</td></tr><tr class="border-b"><td class="py-2 font-mono text-primary">(...)</td><td class="py-2">脚本表达式</td></tr><tr><td class="py-2 font-mono text-primary">&#39;&#39;</td><td class="py-2">脚本表达式中的字符串</td></tr></tbody></table></div></div><div class="mt-6"><h3 class="font-medium mb-3">常用示例</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h4 class="text-sm font-medium mb-2">基础查询</h4><ul class="space-y-1 text-sm"><li><code class="bg-muted px-1 rounded">$.store.book[*].author</code> - 所有书籍的作者</li><li><code class="bg-muted px-1 rounded">$..author</code> - 所有作者</li><li><code class="bg-muted px-1 rounded">$.store.*</code> - store 下的所有子节点</li><li><code class="bg-muted px-1 rounded">$..book[?(@.price&lt;10)]</code> - 价格小于 10 的书</li></ul></div><div><h4 class="text-sm font-medium mb-2">高级查询</h4><ul class="space-y-1 text-sm"><li><code class="bg-muted px-1 rounded">$..book[0,1]</code> - 前两本书</li><li><code class="bg-muted px-1 rounded">$..book[-1]</code> - 最后一本书</li><li><code class="bg-muted px-1 rounded">$..book[?(@.category==&#39;fiction&#39;)]</code> - 小说类书籍</li><li><code class="bg-muted px-1 rounded">$..[?(@.length&gt;2)]</code> - 长度大于 2 的数组</li></ul></div></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
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
        to: "/tools/text/xpath-tester",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>XPath测试器</p><p class="text-xs text-muted-foreground"${_scopeId}>XML路径查询</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "XPath测试器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "XML路径查询")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/crypto/jwt-decode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileCode), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JWT解析器</p><p class="text-xs text-muted-foreground"${_scopeId}>解析JWT令牌</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileCode), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JWT解析器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "解析JWT令牌")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/json-path.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=json-path-DsKU9_9l.js.map
