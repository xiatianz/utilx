import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
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
  __name: "sql-formatter",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const tool = tools.find((t) => t.id === "sql-formatter");
    categories.find((c) => c.id === "format");
    const inputSQL = ref("");
    const outputSQL = ref("");
    const inputError = ref("");
    const indentSize = ref("2");
    const sqlDialect = ref("sql");
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
        (t) => t.category === "format" && t.id !== "sql-formatter"
      ).slice(0, 3);
      const recommended = [
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "xml-formatter"),
        tools.find((t) => t.id === "yaml-converter"),
        tools.find((t) => t.id === "base64-encoder")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">SQL格式化 - 在线SQL美化与格式化工具</h1><p class="text-muted-foreground">一款免费的在线 SQL Formatter。支持一键美化、格式化各种 SQL 语句，包括 SELECT、INSERT、UPDATE、DELETE 等。支持多种数据库方言，纯本地计算，数据隐私绝对安全。</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">输入SQL</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 清空 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 粘贴 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 示例SQL </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">缩进:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="2"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "2") : ssrLooseEqual(indentSize.value, "2")) ? " selected" : ""}>2空格</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "4") : ssrLooseEqual(indentSize.value, "4")) ? " selected" : ""}>4空格</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">数据库:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="sql"${ssrIncludeBooleanAttr(Array.isArray(sqlDialect.value) ? ssrLooseContain(sqlDialect.value, "sql") : ssrLooseEqual(sqlDialect.value, "sql")) ? " selected" : ""}>标准SQL</option><option value="mysql"${ssrIncludeBooleanAttr(Array.isArray(sqlDialect.value) ? ssrLooseContain(sqlDialect.value, "mysql") : ssrLooseEqual(sqlDialect.value, "mysql")) ? " selected" : ""}>MySQL</option><option value="postgresql"${ssrIncludeBooleanAttr(Array.isArray(sqlDialect.value) ? ssrLooseContain(sqlDialect.value, "postgresql") : ssrLooseEqual(sqlDialect.value, "postgresql")) ? " selected" : ""}>PostgreSQL</option><option value="sqlite"${ssrIncludeBooleanAttr(Array.isArray(sqlDialect.value) ? ssrLooseContain(sqlDialect.value, "sqlite") : ssrLooseEqual(sqlDialect.value, "sqlite")) ? " selected" : ""}>SQLite</option><option value="oracle"${ssrIncludeBooleanAttr(Array.isArray(sqlDialect.value) ? ssrLooseContain(sqlDialect.value, "oracle") : ssrLooseEqual(sqlDialect.value, "oracle")) ? " selected" : ""}>Oracle</option><option value="sqlserver"${ssrIncludeBooleanAttr(Array.isArray(sqlDialect.value) ? ssrLooseContain(sqlDialect.value, "sqlserver") : ssrLooseEqual(sqlDialect.value, "sqlserver")) ? " selected" : ""}>SQL Server</option></select></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="在此输入SQL语句...">${ssrInterpolate(inputSQL.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">格式化结果</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 复制 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 下载SQL </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> 全屏模式 </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputSQL.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> 格式化 SQL </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 SQL 格式化？ </h2><p class="text-muted-foreground mb-4"> SQL（Structured Query Language）是用于管理关系数据库系统的标准化语言。 SQL 格式化是将混乱、压缩的 SQL 语句转换为具有良好缩进、换行和结构化的可读格式的过程。 这不仅提高了代码的可读性，也有助于团队协作和代码维护。 </p><p class="text-muted-foreground"> 在实际开发中，ORM 工具生成的 SQL 或为了节省传输带宽而压缩的 SQL 往往难以阅读。 SQL 格式化工具可以帮助开发者快速分析和优化 SQL 查询，提高开发效率。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>将您的 SQL 语句粘贴到左侧输入框</li><li>选择合适的数据库类型（标准SQL、MySQL、PostgreSQL等）</li><li>调整缩进大小（2空格或4空格）</li><li>点击&quot;格式化 SQL&quot;按钮或使用快捷键 Ctrl+Enter</li><li>查看右侧格式化后的结果，可复制或下载</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>多数据库支持</strong>: 支持 MySQL、PostgreSQL、SQLite、Oracle、SQL Server 等主流数据库方言</li><li><strong>智能格式化</strong>: 自动识别 SQL 关键字、表名、字段名并进行合理格式化</li><li><strong>自定义缩进</strong>: 支持 2 空格或 4 空格缩进，满足不同编码规范</li><li><strong>本地处理</strong>: 所有格式化都在浏览器本地完成，数据不会上传到服务器</li><li><strong>快捷操作</strong>: 支持快捷键操作，提高工作效率</li><li><strong>导出功能</strong>: 支持复制和下载格式化后的 SQL</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">SQL 格式化工具支持哪些数据库？</h3><p class="text-muted-foreground mt-1"> 我们支持主流的数据库系统，包括标准 SQL、MySQL、PostgreSQL、SQLite、Oracle 和 SQL Server。 每种数据库都有其特有的语法特性，工具会根据选择的数据库类型进行相应的优化。 </p></div><div><h3 class="text-lg font-semibold text-foreground">格式化后的 SQL 会改变执行逻辑吗？</h3><p class="text-muted-foreground mt-1"> 不会。SQL 格式化只改变代码的视觉呈现（缩进、换行、空格），不会改变 SQL 的执行逻辑和性能。 格式化后的 SQL 与原始 SQL 在功能上完全等价。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么需要 SQL 格式化？</h3><p class="text-muted-foreground mt-1"> 格式化 SQL 有多个好处：提高代码可读性、便于团队协作、有助于发现语法错误、 方便代码审查、提升维护效率。对于复杂的 SQL 查询，格式化尤其重要。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/sql-formatter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sql-formatter-AGHbBnfe.js.map
