import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Home, LayoutGrid, Wrench, Search, FileText, Globe, Layout, GitBranch, FolderOpen, FileDiff, Regex, Timer, Hash, Link, Database, FileJson, Code, Image, Wifi, Type, Clock, Shield } from "lucide-vue-next";
import { c as categories } from "./categories-guMUDMNS.js";
import { t as tools } from "./tools-CG9LGULA.js";
import { u as useSEO } from "./useSEO-DTxZRwJC.js";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "sitemap",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("站点地图");
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
        (tool) => tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query) || tool.keywords?.some((keyword) => keyword.toLowerCase().includes(query))
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto py-8" }, _attrs))} data-v-4e2351bd><div class="mb-8" data-v-4e2351bd><h1 class="text-3xl font-bold text-foreground mb-2" data-v-4e2351bd>站点地图</h1><p class="text-muted-foreground" data-v-4e2351bd>Util.cn 完整的网站页面索引</p></div><section class="mb-12" data-v-4e2351bd><h2 class="text-xl font-semibold mb-4 flex items-center gap-2" data-v-4e2351bd>`);
      _push(ssrRenderComponent(unref(Home), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 主要页面 </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-4e2351bd><a href="/" class="block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors" data-v-4e2351bd><h3 class="font-medium text-foreground mb-1" data-v-4e2351bd>首页</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd>开发者效率工具箱首页</p></a><a href="/all" class="block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors" data-v-4e2351bd><h3 class="font-medium text-foreground mb-1" data-v-4e2351bd>全部工具</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd>浏览所有可用工具</p></a><a href="/explore" class="block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors" data-v-4e2351bd><h3 class="font-medium text-foreground mb-1" data-v-4e2351bd>工具探索</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd>发现和探索工具</p></a><a href="/ai" class="block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors" data-v-4e2351bd><h3 class="font-medium text-foreground mb-1" data-v-4e2351bd>AI工具导航</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd>AI智能工具合集</p></a></div></section><section class="mb-12" data-v-4e2351bd><h2 class="text-xl font-semibold mb-4 flex items-center gap-2" data-v-4e2351bd>`);
      _push(ssrRenderComponent(unref(LayoutGrid), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 工具分类 </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-4e2351bd><!--[-->`);
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
      _push(` 工具列表 (${ssrInterpolate(unref(tools).length)} 个) </h2><div class="mb-4" data-v-4e2351bd><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="搜索工具..." class="w-full md:w-96 px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-background" data-v-4e2351bd></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-4e2351bd><!--[-->`);
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
        _push(`</div><p class="text-muted-foreground" data-v-4e2351bd>未找到匹配的工具</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="mb-12" data-v-4e2351bd><h2 class="text-xl font-semibold mb-4 flex items-center gap-2" data-v-4e2351bd>`);
      _push(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 其他页面 </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-4e2351bd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="font-medium text-foreground mb-1" data-v-4e2351bd${_scopeId}>关于我们</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd${_scopeId}>了解 Util.cn 和我们的使命</p>`);
          } else {
            return [
              createVNode("h3", { class: "font-medium text-foreground mb-1" }, "关于我们"),
              createVNode("p", { class: "text-sm text-muted-foreground" }, "了解 Util.cn 和我们的使命")
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
            _push2(`<h3 class="font-medium text-foreground mb-1" data-v-4e2351bd${_scopeId}>常见问题</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd${_scopeId}>快速解答常见疑问</p>`);
          } else {
            return [
              createVNode("h3", { class: "font-medium text-foreground mb-1" }, "常见问题"),
              createVNode("p", { class: "text-sm text-muted-foreground" }, "快速解答常见疑问")
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
            _push2(`<h3 class="font-medium text-foreground mb-1" data-v-4e2351bd${_scopeId}>用户反馈</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd${_scopeId}>提交意见和建议</p>`);
          } else {
            return [
              createVNode("h3", { class: "font-medium text-foreground mb-1" }, "用户反馈"),
              createVNode("p", { class: "text-sm text-muted-foreground" }, "提交意见和建议")
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
            _push2(`<h3 class="font-medium text-foreground mb-1" data-v-4e2351bd${_scopeId}>桌面版下载</h3><p class="text-sm text-muted-foreground" data-v-4e2351bd${_scopeId}>下载离线桌面应用</p>`);
          } else {
            return [
              createVNode("h3", { class: "font-medium text-foreground mb-1" }, "桌面版下载"),
              createVNode("p", { class: "text-sm text-muted-foreground" }, "下载离线桌面应用")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="mt-16 p-6 bg-muted/30 rounded-lg" data-v-4e2351bd><h2 class="text-lg font-semibold mb-4" data-v-4e2351bd>SEO 信息</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm" data-v-4e2351bd><div data-v-4e2351bd><h3 class="font-medium text-foreground mb-2" data-v-4e2351bd>统计信息</h3><ul class="space-y-1 text-muted-foreground" data-v-4e2351bd><li data-v-4e2351bd>工具总数: ${ssrInterpolate(unref(tools).length)} 个</li><li data-v-4e2351bd>分类数量: ${ssrInterpolate(unref(categories).length)} 个</li><li data-v-4e2351bd>总页面数: ${ssrInterpolate(unref(tools).length + unref(categories).length + 8)} 个</li></ul></div><div data-v-4e2351bd><h3 class="font-medium text-foreground mb-2" data-v-4e2351bd>XML 站点地图</h3><p class="text-muted-foreground mb-2" data-v-4e2351bd> 搜索引擎可以通过以下地址访问我们的 XML 站点地图： </p><a href="/sitemap.xml" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:bg-muted transition-colors" data-v-4e2351bd>`);
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
export {
  sitemap as default
};
//# sourceMappingURL=sitemap-EjYVGH62.js.map
