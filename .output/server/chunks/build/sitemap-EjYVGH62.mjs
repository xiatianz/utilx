import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { Home, LayoutGrid, Wrench, Search, FileText, Globe, Layout, GitBranch, FolderOpen, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Wifi, Type, Clock, Shield } from 'lucide-vue-next';
import { c as categories } from './categories-guMUDMNS.mjs';
import { t as tools } from './tools-CG9LGULA.mjs';
import { u as useSEO } from './useSEO-DTxZRwJC.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = {
  __name: "sitemap",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("\u7AD9\u70B9\u5730\u56FE");
    const searchQuery = ref("");
    const iconMap = {
      FileText,
      Lock: Shield,
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
      GitBranch,
      Layout
    };
    const getIconComponent = (iconName) => {
      return iconMap[iconName] || FileText;
    };
    const getCategoryName = (categoryId) => {
      const category = categories.find((c) => c.id === categoryId);
      return category ? category.name : categoryId;
    };
    const formatViewCount = (count) => {
      if (count >= 1e4) {
        return `${(count / 1e4).toFixed(1)}w+`;
      } else if (count >= 1e3) {
        return `${(count / 1e3).toFixed(1)}k+`;
      }
      return `${count}`;
    };
    const filteredTools = computed(() => {
      if (!searchQuery.value.trim()) {
        return tools;
      }
      const query = searchQuery.value.toLowerCase();
      return tools.filter(
        (tool) => {
          var _a;
          return tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query) || ((_a = tool.keywords) == null ? void 0 : _a.some((keyword) => keyword.toLowerCase().includes(query)));
        }
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto py-8" }, _attrs))} data-v-4e2351bd><div class="mb-8" data-v-4e2351bd><h1 class="text-3xl font-bold text-foreground mb-2" data-v-4e2351bd>\u7AD9\u70B9\u5730\u56FE</h1><p class="text-muted-foreground" data-v-4e2351bd>Util.cn \u5B8C\u6574\u7684\u7F51\u7AD9\u9875\u9762\u7D22\u5F15</p></div><section class="mb-12" data-v-4e2351bd><h2 class="text-xl font-semibold mb-4 flex items-center gap-2" data-v-4e2351bd>`);
      _push(ssrRenderComponent(unref(Home), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4E3B\u8981\u9875\u9762 </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-4e2351bd><a href="/" class="block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors" data-v-4e2351bd><h3 class="font-medium text-foreground mb-1" data-v-4e2351bd>\u9996\u9875</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd>\u5F00\u53D1\u8005\u6548\u7387\u5DE5\u5177\u7BB1\u9996\u9875</p></a><a href="/all" class="block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors" data-v-4e2351bd><h3 class="font-medium text-foreground mb-1" data-v-4e2351bd>\u5168\u90E8\u5DE5\u5177</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd>\u6D4F\u89C8\u6240\u6709\u53EF\u7528\u5DE5\u5177</p></a><a href="/explore" class="block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors" data-v-4e2351bd><h3 class="font-medium text-foreground mb-1" data-v-4e2351bd>\u5DE5\u5177\u63A2\u7D22</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd>\u53D1\u73B0\u548C\u63A2\u7D22\u5DE5\u5177</p></a><a href="/ai" class="block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors" data-v-4e2351bd><h3 class="font-medium text-foreground mb-1" data-v-4e2351bd>AI\u5DE5\u5177\u5BFC\u822A</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd>AI\u667A\u80FD\u5DE5\u5177\u5408\u96C6</p></a></div></section><section class="mb-12" data-v-4e2351bd><h2 class="text-xl font-semibold mb-4 flex items-center gap-2" data-v-4e2351bd>`);
      _push(ssrRenderComponent(unref(LayoutGrid), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5DE5\u5177\u5206\u7C7B </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-4e2351bd><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: category.id,
          to: "/" + category.id,
          class: "block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-3 mb-2" data-v-4e2351bd${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getIconComponent(category.icon)), { class: "w-6 h-6 text-primary" }, null), _parent2, _scopeId);
              _push2(`<h3 class="font-medium text-foreground" data-v-4e2351bd${_scopeId}>${ssrInterpolate(category.name)}</h3></div><p class="text-sm text-muted-foreground" data-v-4e2351bd${_scopeId}>${ssrInterpolate(category.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-3 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(getIconComponent(category.icon)), { class: "w-6 h-6 text-primary" })),
                  createVNode("h3", { class: "font-medium text-foreground" }, toDisplayString(category.name), 1)
                ]),
                createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(category.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section><section class="mb-12" data-v-4e2351bd><h2 class="text-xl font-semibold mb-4 flex items-center gap-2" data-v-4e2351bd>`);
      _push(ssrRenderComponent(unref(Wrench), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5DE5\u5177\u5217\u8868 (${ssrInterpolate(unref(tools).length)} \u4E2A) </h2><div class="mb-4" data-v-4e2351bd><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="\u641C\u7D22\u5DE5\u5177..." class="w-full md:w-96 px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-background" data-v-4e2351bd></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-4e2351bd><!--[-->`);
      ssrRenderList(filteredTools.value, (tool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: tool.id,
          to: `/tools/${tool.id}/`,
          class: "block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-start justify-between mb-2" data-v-4e2351bd${_scopeId}><div class="flex items-center gap-3" data-v-4e2351bd${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getIconComponent(tool.icon)), { class: "w-6 h-6 text-primary flex-shrink-0" }, null), _parent2, _scopeId);
              _push2(`<div data-v-4e2351bd${_scopeId}><h3 class="font-medium text-foreground mb-1" data-v-4e2351bd${_scopeId}>${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd${_scopeId}>${ssrInterpolate(tool.description)}</p></div></div><div class="flex gap-1" data-v-4e2351bd${_scopeId}>`);
              if (tool.hot) {
                _push2(`<span class="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded-full" data-v-4e2351bd${_scopeId}> HOT </span>`);
              } else {
                _push2(`<!---->`);
              }
              if (tool.new) {
                _push2(`<span class="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full" data-v-4e2351bd${_scopeId}> NEW </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="flex items-center justify-between text-xs text-muted-foreground" data-v-4e2351bd${_scopeId}><span class="px-2 py-1 bg-muted rounded" data-v-4e2351bd${_scopeId}>${ssrInterpolate(getCategoryName(tool.category))}</span><span data-v-4e2351bd${_scopeId}>${ssrInterpolate(formatViewCount(tool.viewCount))}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-start justify-between mb-2" }, [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    (openBlock(), createBlock(resolveDynamicComponent(getIconComponent(tool.icon)), { class: "w-6 h-6 text-primary flex-shrink-0" })),
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-medium text-foreground mb-1" }, toDisplayString(tool.name), 1),
                      createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(tool.description), 1)
                    ])
                  ]),
                  createVNode("div", { class: "flex gap-1" }, [
                    tool.hot ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded-full"
                    }, " HOT ")) : createCommentVNode("", true),
                    tool.new ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full"
                    }, " NEW ")) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between text-xs text-muted-foreground" }, [
                  createVNode("span", { class: "px-2 py-1 bg-muted rounded" }, toDisplayString(getCategoryName(tool.category)), 1),
                  createVNode("span", null, toDisplayString(formatViewCount(tool.viewCount)), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (filteredTools.value.length === 0) {
        _push(`<div class="text-center py-12" data-v-4e2351bd><div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4" data-v-4e2351bd>`);
        _push(ssrRenderComponent(unref(Search), { class: "w-8 h-8 text-muted-foreground" }, null, _parent));
        _push(`</div><p class="text-muted-foreground" data-v-4e2351bd>\u672A\u627E\u5230\u5339\u914D\u7684\u5DE5\u5177</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="mb-12" data-v-4e2351bd><h2 class="text-xl font-semibold mb-4 flex items-center gap-2" data-v-4e2351bd>`);
      _push(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5176\u4ED6\u9875\u9762 </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-4e2351bd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="font-medium text-foreground mb-1" data-v-4e2351bd${_scopeId}>\u5173\u4E8E\u6211\u4EEC</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd${_scopeId}>\u4E86\u89E3 Util.cn \u548C\u6211\u4EEC\u7684\u4F7F\u547D</p>`);
          } else {
            return [
              createVNode("h3", { class: "font-medium text-foreground mb-1" }, "\u5173\u4E8E\u6211\u4EEC"),
              createVNode("p", { class: "text-sm text-muted-foreground" }, "\u4E86\u89E3 Util.cn \u548C\u6211\u4EEC\u7684\u4F7F\u547D")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/faq",
        class: "block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="font-medium text-foreground mb-1" data-v-4e2351bd${_scopeId}>\u5E38\u89C1\u95EE\u9898</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd${_scopeId}>\u5FEB\u901F\u89E3\u7B54\u5E38\u89C1\u7591\u95EE</p>`);
          } else {
            return [
              createVNode("h3", { class: "font-medium text-foreground mb-1" }, "\u5E38\u89C1\u95EE\u9898"),
              createVNode("p", { class: "text-sm text-muted-foreground" }, "\u5FEB\u901F\u89E3\u7B54\u5E38\u89C1\u7591\u95EE")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/feedback",
        class: "block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="font-medium text-foreground mb-1" data-v-4e2351bd${_scopeId}>\u7528\u6237\u53CD\u9988</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd${_scopeId}>\u63D0\u4EA4\u610F\u89C1\u548C\u5EFA\u8BAE</p>`);
          } else {
            return [
              createVNode("h3", { class: "font-medium text-foreground mb-1" }, "\u7528\u6237\u53CD\u9988"),
              createVNode("p", { class: "text-sm text-muted-foreground" }, "\u63D0\u4EA4\u610F\u89C1\u548C\u5EFA\u8BAE")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/download",
        class: "block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="font-medium text-foreground mb-1" data-v-4e2351bd${_scopeId}>\u684C\u9762\u7248\u4E0B\u8F7D</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd${_scopeId}>\u4E0B\u8F7D\u79BB\u7EBF\u684C\u9762\u5E94\u7528</p>`);
          } else {
            return [
              createVNode("h3", { class: "font-medium text-foreground mb-1" }, "\u684C\u9762\u7248\u4E0B\u8F7D"),
              createVNode("p", { class: "text-sm text-muted-foreground" }, "\u4E0B\u8F7D\u79BB\u7EBF\u684C\u9762\u5E94\u7528")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="mt-16 p-6 bg-muted/30 rounded-lg" data-v-4e2351bd><h2 class="text-lg font-semibold mb-4" data-v-4e2351bd>SEO \u4FE1\u606F</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm" data-v-4e2351bd><div data-v-4e2351bd><h3 class="font-medium text-foreground mb-2" data-v-4e2351bd>\u7EDF\u8BA1\u4FE1\u606F</h3><ul class="space-y-1 text-muted-foreground" data-v-4e2351bd><li data-v-4e2351bd>\u5DE5\u5177\u603B\u6570: ${ssrInterpolate(unref(tools).length)} \u4E2A</li><li data-v-4e2351bd>\u5206\u7C7B\u6570\u91CF: ${ssrInterpolate(unref(categories).length)} \u4E2A</li><li data-v-4e2351bd>\u603B\u9875\u9762\u6570: ${ssrInterpolate(unref(tools).length + unref(categories).length + 8)} \u4E2A</li></ul></div><div data-v-4e2351bd><h3 class="font-medium text-foreground mb-2" data-v-4e2351bd>XML \u7AD9\u70B9\u5730\u56FE</h3><p class="text-muted-foreground mb-2" data-v-4e2351bd> \u641C\u7D22\u5F15\u64CE\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u5730\u5740\u8BBF\u95EE\u6211\u4EEC\u7684 XML \u7AD9\u70B9\u5730\u56FE\uFF1A </p><a href="/sitemap.xml" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:bg-muted transition-colors" data-v-4e2351bd>`);
      _push(ssrRenderComponent(unref(Globe), { class: "w-4 h-4" }, null, _parent));
      _push(` /sitemap.xml </a></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sitemap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sitemap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e2351bd"]]);

export { sitemap as default };
//# sourceMappingURL=sitemap-EjYVGH62.mjs.map
