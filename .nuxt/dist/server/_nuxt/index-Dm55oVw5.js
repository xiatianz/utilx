import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderClass } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { Search, X, Clock, Trash2, Lock, Zap, Heart, Layout, GitBranch, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, Code, Image, Wifi, Type, Shield, FileJson, FileText } from "lucide-vue-next";
import { c as categories } from "./categories-guMUDMNS.js";
import { t as tools } from "./tools-CG9LGULA.js";
import { i as initToolsData, g as getRecentTools, e as addRecentTool } from "../server.mjs";
import { u as useSEO } from "./useSEO-DTxZRwJC.js";
import { g as getCategoryColor } from "./categoryColors-w89ks1yN.js";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { setPageTitle } = useSEO();
    setPageTitle("Util.cn - 开发者效率工具箱");
    useRouter();
    initToolsData();
    const searchQuery = ref("");
    const clipboardSuggestion = ref(null);
    const iconMap = {
      FileText,
      FileJson,
      Lock,
      Shield,
      Clock,
      Type,
      Wifi,
      Image,
      Code,
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
    const popularTags = ref([
      "JSON格式化",
      "时间戳转换",
      "Base64编码",
      "Cron生成器",
      "JWT解码",
      "URL编码"
    ]);
    const recommendedTools = computed(() => {
      return tools.filter((tool) => tool.hot).slice(0, 6);
    });
    const recentTools = computed(() => {
      return getRecentTools().map((id) => tools.find((tool) => tool.id === id)).filter(Boolean).slice(0, 6);
    });
    const categoriesWithTools = computed(() => {
      return categories.map((category) => ({
        ...category,
        tools: tools.filter((tool) => tool.category === category.id)
      }));
    });
    ref(null);
    const getIconComponent = (iconName) => {
      const defaultIcon = iconMap["FileText"] || iconMap["FileJson"];
      return iconMap[iconName] || defaultIcon;
    };
    const getCategoryColor$1 = getCategoryColor;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto py-8" }, _attrs))} data-v-299db09f><div class="relative text-center mb-8 mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" data-v-299db09f><div class="absolute inset-0 -z-10" data-v-299db09f><div class="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/20 rounded-full filter blur-2xl animate-breathe" data-v-299db09f></div><div class="absolute bottom-1/4 right-1/3 w-72 h-72 bg-secondary/15 rounded-full filter blur-2xl animate-breathe delay-2000" data-v-299db09f></div><div class="absolute top-1/2 left-1/2 w-56 h-56 bg-accent/10 rounded-full filter blur-2xl animate-breathe delay-4000" data-v-299db09f></div><div class="absolute top-1/6 left-1/4 w-32 h-32 bg-primary/15 rounded-full filter blur-xl animate-pulse-slow" data-v-299db09f></div><div class="absolute bottom-1/6 right-1/4 w-40 h-40 bg-secondary/10 rounded-full filter blur-xl animate-pulse-slow delay-1000" data-v-299db09f></div><div class="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30" data-v-299db09f></div></div><div class="relative z-10 px-6 py-8 lg:px-8 lg:py-12" data-v-299db09f><h1 class="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent" data-v-299db09f> 不仅是工具，更是创造力的延伸 </h1><p class="text-lg text-muted-foreground mb-6" data-v-299db09f>极简、高效、全能。为极客、设计师和所有探索者打造。</p><div class="relative max-w-2xl mx-auto mb-6" data-v-299db09f><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10" data-v-299db09f>`);
      _push(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-muted-foreground" }, null, _parent));
      _push(`</div><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="block w-full rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm pl-11 pr-24 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-background/95 transition-all placeholder:text-muted-foreground/60" placeholder="搜索你需要的工具，如 &#39;JSON&#39;, &#39;MD5&#39;, &#39;正则&#39;  - Extend Your Creativity" data-v-299db09f><div class="absolute inset-y-0 right-0 pr-3 flex items-center" data-v-299db09f><span class="text-xs text-muted-foreground/60 font-mono bg-background/80 backdrop-blur-sm border border-border/40 px-2 py-1.5 rounded-lg shadow-sm hidden sm:inline-flex items-center gap-1" data-v-299db09f><kbd class="text-[11px] font-semibold bg-muted/50 px-1.5 py-0.5 rounded border border-border/30" data-v-299db09f>⌘</kbd><kbd class="text-[11px] font-semibold bg-muted/50 px-1.5 py-0.5 rounded border border-border/30" data-v-299db09f>K</kbd></span></div></div>`);
      if (clipboardSuggestion.value) {
        _push(`<div class="max-w-2xl mx-auto mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-between" data-v-299db09f><div class="text-sm" data-v-299db09f><span class="text-primary" data-v-299db09f>检测到剪贴板包含 ${ssrInterpolate(clipboardSuggestion.value.type)} 数据，</span><button class="text-primary font-medium underline ml-1" data-v-299db09f> 是否打开 ${ssrInterpolate(clipboardSuggestion.value.toolName)}？ </button></div><button class="text-muted-foreground hover:text-foreground" data-v-299db09f>`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-wrap justify-center gap-2" data-v-299db09f><span class="text-xs text-muted-foreground" data-v-299db09f>热门搜索：</span><!--[-->`);
      ssrRenderList(popularTags.value, (tag) => {
        _push(`<button class="text-xs px-3 py-1 rounded-full bg-muted/30 hover:bg-primary/15 hover:text-primary hover:border-primary/40 hover:scale-105 transition-all duration-200 border border-border/50 shadow-sm hover:shadow-md" data-v-299db09f>${ssrInterpolate(tag)}</button>`);
      });
      _push(`<!--]--></div></div></div><section class="mb-16" data-v-299db09f><div class="flex items-center justify-between mb-6" data-v-299db09f><h2 class="text-2xl font-bold flex items-center gap-2" data-v-299db09f>`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` 最近使用 </h2>`);
      if (recentTools.value.length > 0) {
        _push(`<button class="text-sm text-muted-foreground hover:text-primary flex items-center gap-1" data-v-299db09f>`);
        _push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent));
        _push(` 清空记录 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (recentTools.value.length > 0) {
        _push(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" data-v-299db09f><!--[-->`);
        ssrRenderList(recentTools.value, (tool) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: tool.id,
            to: `/tools/${tool.id}/`,
            class: "group relative block",
            onClick: ($event) => unref(addRecentTool)(tool.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="bg-card/30 backdrop-blur-sm border-0 rounded-xl p-4 hover:bg-card/60 hover:shadow-sm hover:shadow-primary/5 transition-all duration-200 cursor-pointer group h-full" data-v-299db09f${_scopeId}><div class="flex flex-col items-center text-center h-full" data-v-299db09f${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getIconComponent(tool.icon)), {
                  class: "w-8 h-8 mb-2 transition-transform group-hover:scale-110",
                  style: { color: unref(getCategoryColor$1)(tool.category).icon }
                }, null), _parent2, _scopeId);
                _push2(`<span class="text-sm font-medium truncate w-full" data-v-299db09f${_scopeId}>${ssrInterpolate(tool.name)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "bg-card/30 backdrop-blur-sm border-0 rounded-xl p-4 hover:bg-card/60 hover:shadow-sm hover:shadow-primary/5 transition-all duration-200 cursor-pointer group h-full" }, [
                    createVNode("div", { class: "flex flex-col items-center text-center h-full" }, [
                      (openBlock(), createBlock(resolveDynamicComponent(getIconComponent(tool.icon)), {
                        class: "w-8 h-8 mb-2 transition-transform group-hover:scale-110",
                        style: { color: unref(getCategoryColor$1)(tool.category).icon }
                      }, null, 8, ["style"])),
                      createVNode("span", { class: "text-sm font-medium truncate w-full" }, toDisplayString(tool.name), 1)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" data-v-299db09f><!--[-->`);
        ssrRenderList(recommendedTools.value, (tool) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: tool.id,
            to: `/tools/${tool.id}/`,
            class: "group relative block",
            onClick: ($event) => unref(addRecentTool)(tool.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="bg-card/30 backdrop-blur-sm border-0 rounded-xl p-4 hover:bg-card/60 hover:shadow-sm hover:shadow-primary/5 transition-all duration-200 cursor-pointer group h-full" data-v-299db09f${_scopeId}><div class="flex flex-col items-center text-center h-full" data-v-299db09f${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getIconComponent(tool.icon)), {
                  class: "w-8 h-8 mb-2 transition-transform group-hover:scale-110",
                  style: { color: unref(getCategoryColor$1)(tool.category).icon }
                }, null), _parent2, _scopeId);
                _push2(`<span class="text-sm font-medium truncate w-full" data-v-299db09f${_scopeId}>${ssrInterpolate(tool.name)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "bg-card/30 backdrop-blur-sm border-0 rounded-xl p-4 hover:bg-card/60 hover:shadow-sm hover:shadow-primary/5 transition-all duration-200 cursor-pointer group h-full" }, [
                    createVNode("div", { class: "flex flex-col items-center text-center h-full" }, [
                      (openBlock(), createBlock(resolveDynamicComponent(getIconComponent(tool.icon)), {
                        class: "w-8 h-8 mb-2 transition-transform group-hover:scale-110",
                        style: { color: unref(getCategoryColor$1)(tool.category).icon }
                      }, null, 8, ["style"])),
                      createVNode("span", { class: "text-sm font-medium truncate w-full" }, toDisplayString(tool.name), 1)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section><section class="mb-16" data-v-299db09f><!--[-->`);
      ssrRenderList(categoriesWithTools.value, (category) => {
        _push(`<div class="mb-12 scroll-mt-24"${ssrRenderAttr("id", `category-${category.id}`)} data-v-299db09f><h2 class="text-2xl font-bold mb-6 flex items-center gap-2" data-v-299db09f>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getIconComponent(category.icon)), {
          class: "w-6 h-6",
          style: { color: unref(getCategoryColor$1)(category.id).icon }
        }, null), _parent);
        _push(` ${ssrInterpolate(category.name)}</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-299db09f><!--[-->`);
        ssrRenderList(category.tools.slice(0, 6), (tool) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: tool.id,
            to: `/tools/${tool.id}/`,
            class: "group relative block",
            onClick: ($event) => unref(addRecentTool)(tool.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="bg-card/40 backdrop-blur-sm border-0 rounded-xl p-5 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/8 transition-all duration-200 cursor-pointer group h-full" data-v-299db09f${_scopeId}><div class="flex justify-between items-start mb-3" data-v-299db09f${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getIconComponent(tool.icon)), {
                  class: "w-8 h-8 group-hover:scale-110 transition-transform",
                  style: { color: unref(getCategoryColor$1)(tool.category).icon }
                }, null), _parent2, _scopeId);
                if (tool.hot || tool.new) {
                  _push2(`<span class="${ssrRenderClass([
                    "text-xs px-2 py-1 rounded-full",
                    tool.hot ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                  ])}" data-v-299db09f${_scopeId}>${ssrInterpolate(tool.hot ? "HOT" : "NEW")}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><h3 class="font-semibold mb-2" data-v-299db09f${_scopeId}>${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground" data-v-299db09f${_scopeId}>${ssrInterpolate(tool.description)}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "bg-card/40 backdrop-blur-sm border-0 rounded-xl p-5 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/8 transition-all duration-200 cursor-pointer group h-full" }, [
                    createVNode("div", { class: "flex justify-between items-start mb-3" }, [
                      (openBlock(), createBlock(resolveDynamicComponent(getIconComponent(tool.icon)), {
                        class: "w-8 h-8 group-hover:scale-110 transition-transform",
                        style: { color: unref(getCategoryColor$1)(tool.category).icon }
                      }, null, 8, ["style"])),
                      tool.hot || tool.new ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: [
                          "text-xs px-2 py-1 rounded-full",
                          tool.hot ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                        ]
                      }, toDisplayString(tool.hot ? "HOT" : "NEW"), 3)) : createCommentVNode("", true)
                    ]),
                    createVNode("h3", { class: "font-semibold mb-2" }, toDisplayString(tool.name), 1),
                    createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(tool.description), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></section><section class="mb-16" data-v-299db09f><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-299db09f><div class="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow" data-v-299db09f><div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto" data-v-299db09f>`);
      _push(ssrRenderComponent(unref(Lock), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(`</div><h3 class="font-semibold mb-2" data-v-299db09f>纯本地计算</h3><p class="text-sm text-muted-foreground" data-v-299db09f>您的数据不会上传到服务器，所有计算均在浏览器本地完成，安全隐私。</p></div><div class="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow" data-v-299db09f><div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto" data-v-299db09f>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(`</div><h3 class="font-semibold mb-2" data-v-299db09f>极速响应</h3><p class="text-sm text-muted-foreground" data-v-299db09f>WebAssembly加速，毫秒级处理速度，无需等待服务器响应。</p></div><div class="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow" data-v-299db09f><div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto" data-v-299db09f>`);
      _push(ssrRenderComponent(unref(Heart), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(`</div><h3 class="font-semibold mb-2" data-v-299db09f>开源免费</h3><p class="text-sm text-muted-foreground" data-v-299db09f>无广告，社区驱动，永久免费，GitHub开源项目。</p></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-299db09f"]]);
export {
  index as default
};
//# sourceMappingURL=index-Dm55oVw5.js.map
