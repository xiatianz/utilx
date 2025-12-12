import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';
import { HelpCircle, ChevronUp, GitBranch, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Wifi, Type, Clock, Shield, Lock, FileText } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { e as addRecentTool } from './server.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/destr/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ohash/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/scule/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/apple/Documents/code/util/node_modules/pathe/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/server.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/devalue/index.js';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/utils.mjs';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">SQL\u683C\u5F0F\u5316 - \u5728\u7EBFSQL\u7F8E\u5316\u4E0E\u683C\u5F0F\u5316\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u514D\u8D39\u7684\u5728\u7EBF SQL Formatter\u3002\u652F\u6301\u4E00\u952E\u7F8E\u5316\u3001\u683C\u5F0F\u5316\u5404\u79CD SQL \u8BED\u53E5\uFF0C\u5305\u62EC SELECT\u3001INSERT\u3001UPDATE\u3001DELETE \u7B49\u3002\u652F\u6301\u591A\u79CD\u6570\u636E\u5E93\u65B9\u8A00\uFF0C\u7EAF\u672C\u5730\u8BA1\u7B97\uFF0C\u6570\u636E\u9690\u79C1\u7EDD\u5BF9\u5B89\u5168\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u8F93\u5165SQL</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u7C98\u8D34 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u793A\u4F8BSQL </button></div></div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u7F29\u8FDB:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="2"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "2") : ssrLooseEqual(indentSize.value, "2")) ? " selected" : ""}>2\u7A7A\u683C</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(indentSize.value) ? ssrLooseContain(indentSize.value, "4") : ssrLooseEqual(indentSize.value, "4")) ? " selected" : ""}>4\u7A7A\u683C</option></select></div><div class="flex items-center gap-2"><label class="text-xs text-muted-foreground">\u6570\u636E\u5E93:</label><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="sql"${ssrIncludeBooleanAttr(Array.isArray(sqlDialect.value) ? ssrLooseContain(sqlDialect.value, "sql") : ssrLooseEqual(sqlDialect.value, "sql")) ? " selected" : ""}>\u6807\u51C6SQL</option><option value="mysql"${ssrIncludeBooleanAttr(Array.isArray(sqlDialect.value) ? ssrLooseContain(sqlDialect.value, "mysql") : ssrLooseEqual(sqlDialect.value, "mysql")) ? " selected" : ""}>MySQL</option><option value="postgresql"${ssrIncludeBooleanAttr(Array.isArray(sqlDialect.value) ? ssrLooseContain(sqlDialect.value, "postgresql") : ssrLooseEqual(sqlDialect.value, "postgresql")) ? " selected" : ""}>PostgreSQL</option><option value="sqlite"${ssrIncludeBooleanAttr(Array.isArray(sqlDialect.value) ? ssrLooseContain(sqlDialect.value, "sqlite") : ssrLooseEqual(sqlDialect.value, "sqlite")) ? " selected" : ""}>SQLite</option><option value="oracle"${ssrIncludeBooleanAttr(Array.isArray(sqlDialect.value) ? ssrLooseContain(sqlDialect.value, "oracle") : ssrLooseEqual(sqlDialect.value, "oracle")) ? " selected" : ""}>Oracle</option><option value="sqlserver"${ssrIncludeBooleanAttr(Array.isArray(sqlDialect.value) ? ssrLooseContain(sqlDialect.value, "sqlserver") : ssrLooseEqual(sqlDialect.value, "sqlserver")) ? " selected" : ""}>SQL Server</option></select></div></div><textarea class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" placeholder="\u5728\u6B64\u8F93\u5165SQL\u8BED\u53E5...">${ssrInterpolate(inputSQL.value)}</textarea>`);
      if (inputError.value) {
        _push(`<div class="mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded">${ssrInterpolate(inputError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground">\u683C\u5F0F\u5316\u7ED3\u679C</label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u590D\u5236 </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u4E0B\u8F7DSQL </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u5168\u5C4F\u6A21\u5F0F </button></div></div><pre class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap">${ssrInterpolate(outputSQL.value)}</pre></div></div><div class="flex justify-center mb-12"><button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"> \u683C\u5F0F\u5316 SQL </button></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F SQL \u683C\u5F0F\u5316\uFF1F </h2><p class="text-muted-foreground mb-4"> SQL\uFF08Structured Query Language\uFF09\u662F\u7528\u4E8E\u7BA1\u7406\u5173\u7CFB\u6570\u636E\u5E93\u7CFB\u7EDF\u7684\u6807\u51C6\u5316\u8BED\u8A00\u3002 SQL \u683C\u5F0F\u5316\u662F\u5C06\u6DF7\u4E71\u3001\u538B\u7F29\u7684 SQL \u8BED\u53E5\u8F6C\u6362\u4E3A\u5177\u6709\u826F\u597D\u7F29\u8FDB\u3001\u6362\u884C\u548C\u7ED3\u6784\u5316\u7684\u53EF\u8BFB\u683C\u5F0F\u7684\u8FC7\u7A0B\u3002 \u8FD9\u4E0D\u4EC5\u63D0\u9AD8\u4E86\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\uFF0C\u4E5F\u6709\u52A9\u4E8E\u56E2\u961F\u534F\u4F5C\u548C\u4EE3\u7801\u7EF4\u62A4\u3002 </p><p class="text-muted-foreground"> \u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0CORM \u5DE5\u5177\u751F\u6210\u7684 SQL \u6216\u4E3A\u4E86\u8282\u7701\u4F20\u8F93\u5E26\u5BBD\u800C\u538B\u7F29\u7684 SQL \u5F80\u5F80\u96BE\u4EE5\u9605\u8BFB\u3002 SQL \u683C\u5F0F\u5316\u5DE5\u5177\u53EF\u4EE5\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u5206\u6790\u548C\u4F18\u5316 SQL \u67E5\u8BE2\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5C06\u60A8\u7684 SQL \u8BED\u53E5\u7C98\u8D34\u5230\u5DE6\u4FA7\u8F93\u5165\u6846</li><li>\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u5E93\u7C7B\u578B\uFF08\u6807\u51C6SQL\u3001MySQL\u3001PostgreSQL\u7B49\uFF09</li><li>\u8C03\u6574\u7F29\u8FDB\u5927\u5C0F\uFF082\u7A7A\u683C\u62164\u7A7A\u683C\uFF09</li><li>\u70B9\u51FB&quot;\u683C\u5F0F\u5316 SQL&quot;\u6309\u94AE\u6216\u4F7F\u7528\u5FEB\u6377\u952E Ctrl+Enter</li><li>\u67E5\u770B\u53F3\u4FA7\u683C\u5F0F\u5316\u540E\u7684\u7ED3\u679C\uFF0C\u53EF\u590D\u5236\u6216\u4E0B\u8F7D</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u591A\u6570\u636E\u5E93\u652F\u6301</strong>: \u652F\u6301 MySQL\u3001PostgreSQL\u3001SQLite\u3001Oracle\u3001SQL Server \u7B49\u4E3B\u6D41\u6570\u636E\u5E93\u65B9\u8A00</li><li><strong>\u667A\u80FD\u683C\u5F0F\u5316</strong>: \u81EA\u52A8\u8BC6\u522B SQL \u5173\u952E\u5B57\u3001\u8868\u540D\u3001\u5B57\u6BB5\u540D\u5E76\u8FDB\u884C\u5408\u7406\u683C\u5F0F\u5316</li><li><strong>\u81EA\u5B9A\u4E49\u7F29\u8FDB</strong>: \u652F\u6301 2 \u7A7A\u683C\u6216 4 \u7A7A\u683C\u7F29\u8FDB\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u7F16\u7801\u89C4\u8303</li><li><strong>\u672C\u5730\u5904\u7406</strong>: \u6240\u6709\u683C\u5F0F\u5316\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u670D\u52A1\u5668</li><li><strong>\u5FEB\u6377\u64CD\u4F5C</strong>: \u652F\u6301\u5FEB\u6377\u952E\u64CD\u4F5C\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387</li><li><strong>\u5BFC\u51FA\u529F\u80FD</strong>: \u652F\u6301\u590D\u5236\u548C\u4E0B\u8F7D\u683C\u5F0F\u5316\u540E\u7684 SQL</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">SQL \u683C\u5F0F\u5316\u5DE5\u5177\u652F\u6301\u54EA\u4E9B\u6570\u636E\u5E93\uFF1F</h3><p class="text-muted-foreground mt-1"> \u6211\u4EEC\u652F\u6301\u4E3B\u6D41\u7684\u6570\u636E\u5E93\u7CFB\u7EDF\uFF0C\u5305\u62EC\u6807\u51C6 SQL\u3001MySQL\u3001PostgreSQL\u3001SQLite\u3001Oracle \u548C SQL Server\u3002 \u6BCF\u79CD\u6570\u636E\u5E93\u90FD\u6709\u5176\u7279\u6709\u7684\u8BED\u6CD5\u7279\u6027\uFF0C\u5DE5\u5177\u4F1A\u6839\u636E\u9009\u62E9\u7684\u6570\u636E\u5E93\u7C7B\u578B\u8FDB\u884C\u76F8\u5E94\u7684\u4F18\u5316\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u683C\u5F0F\u5316\u540E\u7684 SQL \u4F1A\u6539\u53D8\u6267\u884C\u903B\u8F91\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u4E0D\u4F1A\u3002SQL \u683C\u5F0F\u5316\u53EA\u6539\u53D8\u4EE3\u7801\u7684\u89C6\u89C9\u5448\u73B0\uFF08\u7F29\u8FDB\u3001\u6362\u884C\u3001\u7A7A\u683C\uFF09\uFF0C\u4E0D\u4F1A\u6539\u53D8 SQL \u7684\u6267\u884C\u903B\u8F91\u548C\u6027\u80FD\u3002 \u683C\u5F0F\u5316\u540E\u7684 SQL \u4E0E\u539F\u59CB SQL \u5728\u529F\u80FD\u4E0A\u5B8C\u5168\u7B49\u4EF7\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48\u9700\u8981 SQL \u683C\u5F0F\u5316\uFF1F</h3><p class="text-muted-foreground mt-1"> \u683C\u5F0F\u5316 SQL \u6709\u591A\u4E2A\u597D\u5904\uFF1A\u63D0\u9AD8\u4EE3\u7801\u53EF\u8BFB\u6027\u3001\u4FBF\u4E8E\u56E2\u961F\u534F\u4F5C\u3001\u6709\u52A9\u4E8E\u53D1\u73B0\u8BED\u6CD5\u9519\u8BEF\u3001 \u65B9\u4FBF\u4EE3\u7801\u5BA1\u67E5\u3001\u63D0\u5347\u7EF4\u62A4\u6548\u7387\u3002\u5BF9\u4E8E\u590D\u6742\u7684 SQL \u67E5\u8BE2\uFF0C\u683C\u5F0F\u5316\u5C24\u5176\u91CD\u8981\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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

export { _sfc_main as default };
//# sourceMappingURL=sql-formatter-AGHbBnfe.mjs.map
