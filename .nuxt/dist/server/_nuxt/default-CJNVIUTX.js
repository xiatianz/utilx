import { mergeProps, withCtx, createTextVNode, unref, useSSRContext, computed, createVNode, resolveDynamicComponent, mergeModels, useModel, ref, watch, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderVNode, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { useRouter, useRoute } from "vue-router";
import { Shield, Github, ChevronRight, LayoutGrid, Image, Code, ImageIcon, Wifi, Type, Clock, Lock, FileText, Home, Compass, Heart, Map, Sparkles, MessageSquarePlus, Layout, Book, Search, Timer, Link, Database, FileJson, Hash, ChevronLeft, Globe, Check, Copy, RefreshCw, Languages, Sun, Moon, Menu } from "lucide-vue-next";
import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { c as categories } from "./categories-guMUDMNS.js";
import { t as tools } from "./tools-CG9LGULA.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { s as siteConfig } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$5 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-border/30 bg-background/95 backdrop-blur-sm" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"><div class="flex flex-col sm:flex-row justify-between items-center gap-4"><div class="text-xs text-muted-foreground"><span class="mr-2">© 2024 Util.cn</span><span class="hidden sm:inline">|</span><span class="hidden sm:inline ml-2">为效率而生</span></div><nav class="flex items-center gap-4 text-xs">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-muted-foreground hover:text-foreground transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 关于我们 `);
          } else {
            return [
              createTextVNode(" 关于我们 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "text-muted-foreground hover:text-foreground transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 隐私政策 `);
          } else {
            return [
              createTextVNode(" 隐私政策 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "text-muted-foreground hover:text-foreground transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 服务条款 `);
          } else {
            return [
              createTextVNode(" 服务条款 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="flex items-center gap-3 text-xs text-muted-foreground"><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Shield), { class: "w-3 h-3 text-green-500" }, null, _parent));
      _push(`<span class="hidden sm:inline">本地计算</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Github), { class: "w-3 h-3" }, null, _parent));
      _push(`<span class="hidden sm:inline">开源</span></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    category: {
      type: Object,
      default: null
    },
    tool: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const route = useRoute();
    const breadcrumbs = computed(() => {
      const paths = [
        {
          name: "首页",
          path: "/"
        }
      ];
      const pathSegments = route.path.split("/").filter(Boolean);
      if (pathSegments.length >= 2 && pathSegments[0] === "tools") {
        const toolId = pathSegments[1];
        const tool = tools.find((t) => t.id === toolId);
        if (tool) {
          const category = categories.find((c) => c.id === tool.category);
          if (category) {
            paths.push({
              name: category.name,
              path: `/${category.id}`
            });
          }
          paths.push({
            name: tool.name,
            path: `/tools/${toolId}/`
          });
        }
      } else if (pathSegments.length === 1) {
        const categoryId = pathSegments[0];
        const category = categories.find((c) => c.id === categoryId);
        if (category) {
          paths.push({
            name: category.name,
            path: `/${categoryId}`
          });
        } else if (pathSegments[0] === "all") {
          paths.push({
            name: "全部工具",
            path: "/all"
          });
        } else if (pathSegments[0] === "explore") {
          paths.push({
            name: "工具探索",
            path: "/explore"
          });
        } else if (pathSegments[0] === "favorites") {
          paths.push({
            name: "我的收藏",
            path: "/favorites"
          });
        } else if (pathSegments[0] === "recent") {
          paths.push({
            name: "最近使用",
            path: "/recent"
          });
        } else if (pathSegments[0] === "about") {
          paths.push({
            name: "关于我们",
            path: "/about"
          });
        } else if (pathSegments[0] === "privacy") {
          paths.push({
            name: "隐私政策",
            path: "/privacy"
          });
        } else if (pathSegments[0] === "terms") {
          paths.push({
            name: "服务条款",
            path: "/terms"
          });
        } else if (pathSegments[0] === "feedback") {
          paths.push({
            name: "提交反馈",
            path: "/feedback"
          });
        } else if (pathSegments[0] === "ai") {
          paths.push({
            name: "AI 导航",
            path: "/ai"
          });
        } else if (pathSegments[0] === "faq") {
          paths.push({
            name: "常见问题",
            path: "/faq"
          });
        } else if (pathSegments[0] === "cookie") {
          paths.push({
            name: "Cookie政策",
            path: "/cookie"
          });
        } else if (pathSegments[0] === "sitemap") {
          paths.push({
            name: "站点地图",
            path: "/sitemap"
          });
        }
      } else if (props.category) {
        paths.push({
          name: props.category.name,
          path: `/`
        });
      } else if (props.tool) {
        paths.push({
          name: props.tool.name,
          path: `/tools/${props.tool.id}/`
        });
      }
      return paths;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "flex items-center text-sm text-muted-foreground" }, _attrs))}><ol class="flex items-center"><!--[-->`);
      ssrRenderList(breadcrumbs.value, (crumb, index) => {
        _push(`<li class="flex items-center">`);
        if (index < breadcrumbs.value.length - 1) {
          _push(`<button class="text-muted-foreground hover:text-foreground transition-colors flex items-center max-w-[120px] truncate"${ssrRenderAttr("title", crumb.name)}>${ssrInterpolate(crumb.name)}</button>`);
        } else {
          _push(`<span class="text-foreground flex items-center max-w-[120px] truncate"${ssrRenderAttr("title", crumb.name)}>${ssrInterpolate(crumb.name)}</span>`);
        }
        if (index < breadcrumbs.value.length - 1) {
          _push(ssrRenderComponent(unref(ChevronRight), { class: "w-4 h-4 mx-2" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ol></nav>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Breadcrumb.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    currentCategory: {
      type: String,
      default: "all"
    }
  },
  emits: ["category-change"],
  setup(__props, { emit: __emit }) {
    const iconMap = {
      FileText,
      Lock,
      Shield,
      Clock,
      Type,
      Wifi,
      ImageIcon,
      Code,
      Image,
      LayoutGrid
    };
    useRoute();
    const categoriesWithIcons = computed(() => {
      return categories.map((category) => ({
        ...category,
        iconComponent: iconMap[category.icon] || FileText
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col h-full bg-sidebar", { "lg:w-20": __props.collapsed }]
      }, _attrs))}><div class="logo h-16 flex items-center px-6 border-b border-sidebar-border"><div class="flex items-center gap-2.5"><div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal w-5 h-5"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path><path d="M22 12h6"></path><path d="M25 12v7"></path></svg></div><div class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}"><h1 class="font-bold text-lg tracking-tight cursor-pointer">Util.cn</h1><div class="flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div><span class="text-[10px] text-muted-foreground uppercase font-mono">System Online v1.0.0</span></div></div></div></div><div class="flex-1 overflow-y-auto no-scrollbar px-3 py-2 space-y-6"><div><nav class="space-y-0.5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors", [
          _ctx.$route.path === "/" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
          { "lg:justify-center lg:px-0 lg:gap-0": __props.collapsed }
        ]],
        exact: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Home), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}"${_scopeId}>首页</span>`);
          } else {
            return [
              createVNode(unref(Home), { class: "w-4 h-4" }),
              createVNode("span", {
                class: { "lg:hidden": __props.collapsed }
              }, "首页", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/explore",
        class: ["nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors", [
          _ctx.$route.path === "/explore" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
          { "lg:justify-center lg:px-0 lg:gap-0": __props.collapsed }
        ]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Compass), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}"${_scopeId}>探索</span>`);
          } else {
            return [
              createVNode(unref(Compass), { class: "w-4 h-4" }),
              createVNode("span", {
                class: { "lg:hidden": __props.collapsed }
              }, "探索", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/recent",
        class: ["nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors", [
          _ctx.$route.path === "/recent" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
          { "lg:justify-center lg:px-0 lg:gap-0": __props.collapsed }
        ]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Clock), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}"${_scopeId}>最近使用</span>`);
          } else {
            return [
              createVNode(unref(Clock), { class: "w-4 h-4" }),
              createVNode("span", {
                class: { "lg:hidden": __props.collapsed }
              }, "最近使用", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/favorites",
        class: ["nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors", [
          _ctx.$route.path === "/favorites" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
          { "lg:justify-center lg:px-0 lg:gap-0": __props.collapsed }
        ]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Heart), { class: "w-4 h-4 text-red-500" }, null, _parent2, _scopeId));
            _push2(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}"${_scopeId}>我的收藏</span>`);
          } else {
            return [
              createVNode(unref(Heart), { class: "w-4 h-4 text-red-500" }),
              createVNode("span", {
                class: { "lg:hidden": __props.collapsed }
              }, "我的收藏", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/sitemap",
        class: ["nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors", [
          _ctx.$route.path === "/sitemap" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
          { "lg:justify-center lg:px-0 lg:gap-0": __props.collapsed }
        ]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Map), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}"${_scopeId}>站点地图</span>`);
          } else {
            return [
              createVNode(unref(Map), { class: "w-4 h-4" }),
              createVNode("span", {
                class: { "lg:hidden": __props.collapsed }
              }, "站点地图", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ai",
        class: ["nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors", [
          _ctx.$route.path === "/ai" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
          { "lg:justify-center lg:px-0 lg:gap-0": __props.collapsed }
        ]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Sparkles), { class: "w-4 h-4 text-purple-500" }, null, _parent2, _scopeId));
            _push2(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}"${_scopeId}>AI 导航</span>`);
          } else {
            return [
              createVNode(unref(Sparkles), { class: "w-4 h-4 text-purple-500" }),
              createVNode("span", {
                class: { "lg:hidden": __props.collapsed }
              }, "AI 导航", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div class="border-t border-sidebar-border my-2"></div><div><h3 class="${ssrRenderClass([{ "lg:hidden": __props.collapsed }, "px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2"])}">工具箱</h3><nav class="space-y-0.5" id="categoryNav"><button class="${ssrRenderClass([[
        __props.currentCategory === "all" && _ctx.$route.path !== "/" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
        { "lg:justify-center lg:px-0 lg:gap-0": __props.collapsed }
      ], "nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors"])}">`);
      _push(ssrRenderComponent(unref(LayoutGrid), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}">全部工具</span></button><!--[-->`);
      ssrRenderList(categoriesWithIcons.value, (category) => {
        _push(`<button class="${ssrRenderClass([[
          __props.currentCategory === category.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
          { "lg:justify-center lg:px-0 lg:gap-0": __props.collapsed }
        ], "nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors"])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(category.iconComponent), { class: "w-4 h-4" }, null), _parent);
        _push(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}">${ssrInterpolate(category.name)}</span></button>`);
      });
      _push(`<!--]--></nav></div></div><div class="${ssrRenderClass([{ "lg:hidden": __props.collapsed }, "p-4 border-t border-sidebar-border bg-sidebar"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/feedback",
        class: "flex items-center gap-3 px-2 py-2 rounded-md hover:bg-muted/50 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white"${_scopeId}> Dev </div><div class="flex-1 min-w-0"${_scopeId}><p class="text-sm font-medium truncate group-hover:text-primary transition-colors"${_scopeId}>提交反馈</p><p class="text-xs text-muted-foreground truncate"${_scopeId}>问题反馈 &amp; 功能建议</p></div>`);
            _push2(ssrRenderComponent(unref(MessageSquarePlus), { class: "w-4 h-4 text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white" }, " Dev "),
              createVNode("div", { class: "flex-1 min-w-0" }, [
                createVNode("p", { class: "text-sm font-medium truncate group-hover:text-primary transition-colors" }, "提交反馈"),
                createVNode("p", { class: "text-xs text-muted-foreground truncate" }, "问题反馈 & 功能建议")
              ]),
              createVNode(unref(MessageSquarePlus), { class: "w-4 h-4 text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "GlobalSearch",
  __ssrInlineRender: true,
  props: {
    "modelValue": { type: Boolean, default: false },
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["close"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    useRouter();
    const isOpen = useModel(__props, "modelValue");
    const searchQuery = ref("");
    const searchInput = ref(null);
    const highlightedIndex = ref(-1);
    const iconMap = {
      FileText,
      Hash,
      Shield,
      Clock,
      Type,
      Wifi,
      Image,
      Code,
      FileJson,
      Database,
      Link,
      Timer,
      Layout,
      Book,
      Github
    };
    const pages = [
      {
        name: "全部工具",
        path: "/all",
        description: "浏览所有可用工具",
        icon: Layout
      },
      {
        name: "博客",
        path: "/blog",
        description: "技术文章和教程",
        icon: Book
      },
      {
        name: "关于我们",
        path: "/about",
        description: "了解 Util.cn",
        icon: FileText
      },
      {
        name: "GitHub",
        path: "https://github.com/dmdq/utilx",
        description: "开源项目地址",
        icon: Github
      }
    ];
    const popularTools = computed(() => {
      return tools.filter((tool) => tool.hot || tool.viewCount > 1e4).slice(0, 6);
    });
    const filteredTools = computed(() => {
      if (!searchQuery.value) return [];
      const query = searchQuery.value.toLowerCase();
      return tools.filter(
        (tool) => tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query) || tool.keywords.some((keyword) => keyword.toLowerCase().includes(query))
      );
    });
    const filteredPages = computed(() => {
      if (!searchQuery.value) return [];
      const query = searchQuery.value.toLowerCase();
      return pages.filter(
        (page) => page.name.toLowerCase().includes(query) || page.description.toLowerCase().includes(query)
      );
    });
    const getIconComponent = (iconName) => {
      return iconMap[iconName] || FileText;
    };
    watch(isOpen, (newValue) => {
      if (newValue) {
        nextTick(() => {
          searchInput.value?.focus();
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (isOpen.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm" }, _attrs))}><div class="w-full max-w-2xl mx-4"><div class="bg-background border border-border rounded-xl shadow-2xl overflow-hidden"><div class="flex items-center gap-3 px-4 py-3 border-b border-border">`);
        _push(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-muted-foreground" }, null, _parent));
        _push(`<input${ssrRenderAttr("value", searchQuery.value)} type="text" class="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground" placeholder="搜索工具、文档..."><kbd class="px-2 py-1 text-xs text-muted-foreground bg-muted border border-border rounded">ESC</kbd></div><div class="max-h-[60vh] overflow-y-auto">`);
        if (filteredTools.value.length > 0) {
          _push(`<div class="py-2"><div class="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"> 工具 </div><!--[-->`);
          ssrRenderList(filteredTools.value.slice(0, 8), (tool, index) => {
            _push(`<div class="${ssrRenderClass([{ "bg-muted": highlightedIndex.value === index }, "px-4 py-3 hover:bg-muted cursor-pointer transition-colors"])}"><div class="flex items-center gap-3">`);
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getIconComponent(tool.icon)), { class: "w-5 h-5 text-muted-foreground flex-shrink-0" }, null), _parent);
            _push(`<div class="flex-1 min-w-0"><div class="font-medium text-foreground truncate">${ssrInterpolate(tool.name)}</div><div class="text-sm text-muted-foreground truncate">${ssrInterpolate(tool.description)}</div></div>`);
            if (tool.hot || tool.new) {
              _push(`<span class="${ssrRenderClass([tool.hot ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400", "text-xs px-2 py-1 rounded-full flex-shrink-0"])}">${ssrInterpolate(tool.hot ? "HOT" : "NEW")}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (filteredPages.value.length > 0) {
          _push(`<div class="py-2 border-t border-border"><div class="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"> 页面 </div><!--[-->`);
          ssrRenderList(filteredPages.value.slice(0, 4), (page, index) => {
            _push(`<div class="${ssrRenderClass([{ "bg-muted": highlightedIndex.value === filteredTools.value.length + index + 1 }, "px-4 py-3 hover:bg-muted cursor-pointer transition-colors"])}"><div class="flex items-center gap-3">`);
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(page.icon), { class: "w-5 h-5 text-muted-foreground flex-shrink-0" }, null), _parent);
            _push(`<div class="flex-1"><div class="font-medium text-foreground">${ssrInterpolate(page.name)}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(page.description)}</div></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (searchQuery.value && filteredTools.value.length === 0 && filteredPages.value.length === 0) {
          _push(`<div class="py-12 text-center"><div class="text-muted-foreground mb-2">未找到相关结果</div><div class="text-sm text-muted-foreground">试试搜索 &quot;json&quot; 或 &quot;base64&quot;</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!searchQuery.value) {
          _push(`<div class="py-8"><div class="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3"> 热门工具 </div><div class="grid grid-cols-2 gap-2 px-4"><!--[-->`);
          ssrRenderList(popularTools.value, (tool) => {
            _push(`<div class="p-3 hover:bg-muted rounded-lg cursor-pointer transition-colors"><div class="flex items-center gap-2">`);
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getIconComponent(tool.icon)), { class: "w-4 h-4 text-muted-foreground" }, null), _parent);
            _push(`<span class="text-sm font-medium text-foreground truncate">${ssrInterpolate(tool.name)}</span></div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="px-4 py-3 bg-muted/30 border-t border-border flex items-center justify-between text-xs text-muted-foreground"><div class="flex items-center gap-4"><div class="flex items-center gap-1"><kbd class="px-2 py-0.5 bg-background border border-border rounded">↑↓</kbd><span>导航</span></div><div class="flex items-center gap-1"><kbd class="px-2 py-0.5 bg-background border border-border rounded">Enter</kbd><span>选择</span></div><div class="flex items-center gap-1"><kbd class="px-2 py-0.5 bg-background border border-border rounded">ESC</kbd><span>关闭</span></div></div><div> 由 <kbd class="px-2 py-0.5 bg-background border border-border rounded">⌘K</kbd> 触发 </div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GlobalSearch.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "PWAInstallPrompt",
  __ssrInlineRender: true,
  setup(__props) {
    const showInstallPrompt = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      if (showInstallPrompt.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-4 right-4 z-50 max-w-sm animate-fade-in" }, _attrs))} data-v-053a3682><div class="bg-card border border-border rounded-lg shadow-lg p-4 dark:bg-card/95 backdrop-blur-sm" data-v-053a3682><div class="flex items-start gap-3" data-v-053a3682><div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0" data-v-053a3682><svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-053a3682><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-v-053a3682></path></svg></div><div class="flex-1" data-v-053a3682><h3 class="font-semibold mb-1" data-v-053a3682>安装 Util 工具箱</h3><p class="text-sm text-muted-foreground mb-3" data-v-053a3682> 将应用安装到桌面，享受更好的使用体验 </p><div class="flex gap-2" data-v-053a3682><button class="px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors" data-v-053a3682> 安装 </button><button class="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium hover:bg-muted/80 transition-colors" data-v-053a3682> 暂不 </button></div></div><button class="text-muted-foreground hover:text-foreground transition-colors p-1" data-v-053a3682><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-053a3682><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-053a3682></path></svg></button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PWAInstallPrompt.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PWAInstallPrompt = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-053a3682"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  emits: ["search"],
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const isSidebarOpen = ref(false);
    const isCollapsed = ref(false);
    const currentCategory = ref("all");
    const isSearchOpen = ref(false);
    const userIP = ref("获取中...");
    const currentWidget = ref(0);
    const currentTime = ref("");
    const copySuccess = ref(false);
    const currentCategoryName = computed(() => {
      if (currentCategory.value === "all") return "";
      const category = categories.find((c) => c.id === currentCategory.value);
      return category ? category.name : "";
    });
    const currentToolName = computed(() => {
      const staticPages = {
        "/about": "关于我们",
        "/privacy": "隐私政策",
        "/terms": "服务条款",
        "/cookie": "Cookie政策"
      };
      const specialPages = {
        "/all": "全部工具",
        "/explore": "工具探索",
        "/favorites": "我的收藏",
        "/recent": "最近使用",
        "/feedback": "提交反馈",
        "/cookie": "Cookie政策",
        "/faq": "常见问题",
        "/sitemap": "站点地图"
      };
      if (route && staticPages[route.path]) {
        return staticPages[route.path];
      }
      if (route && specialPages[route.path]) {
        return specialPages[route.path];
      }
      if (route) {
        const pathParts = route.path.split("/").filter((part) => part);
        if (pathParts.length > 1) {
          const toolId = pathParts[1];
          const tool = tools.find((t) => t.id === toolId);
          return tool ? tool.name : "";
        }
      }
      return "";
    });
    const pageTitle = computed(() => {
      if (route && route.meta && route.meta.title) {
        return route.meta.title;
      }
      const staticPages = {
        "/about": "关于我们",
        "/privacy": "隐私政策",
        "/terms": "服务条款",
        "/cookie": "Cookie政策"
      };
      const specialPages = {
        "/all": "全部工具",
        "/explore": "工具探索",
        "/favorites": "我的收藏",
        "/recent": "最近使用",
        "/feedback": "提交反馈",
        "/cookie": "Cookie政策",
        "/faq": "常见问题",
        "/sitemap": "站点地图"
      };
      if (route && staticPages[route.path]) {
        return staticPages[route.path];
      }
      if (route && specialPages[route.path]) {
        return specialPages[route.path];
      }
      return "";
    });
    const showBreadcrumbs = computed(() => {
      if (route && route.path === "/") return false;
      const categoryPages = ["/ai", "/crypto", "/dev", "/encode", "/format", "/image", "/network", "/text", "/time", "/all", "/sitemap"];
      return categoryPages.includes(route.path) || currentCategoryName.value !== "" || currentToolName.value !== "" || pageTitle.value !== "";
    });
    watch(
      () => route.path,
      (newPath) => {
        const pathParts = newPath.split("/").filter((part) => part);
        if (pathParts.length > 0) {
          currentCategory.value = pathParts[0];
        } else {
          currentCategory.value = "all";
        }
      },
      { immediate: true }
    );
    const handleCategoryChange = (category) => {
      currentCategory.value = category;
      if (category !== "all") {
        router.push(`/${category}`);
      } else {
        router.push("/all");
      }
      if ((void 0).innerWidth < 1024) {
        isSidebarOpen.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-background text-foreground h-screen overflow-hidden flex antialiased selection:bg-primary/30" }, _attrs))} data-v-fd59c19d><div id="mobileOverlay" class="${ssrRenderClass([{ "hidden": !isSidebarOpen.value }, "fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity lg:hidden"])}" data-v-fd59c19d></div><aside id="sidebar" class="${ssrRenderClass([{
        "-translate-x-full": !isSidebarOpen.value,
        "translate-x-0": isSidebarOpen.value,
        "lg:translate-x-0": true,
        "lg:w-20": isCollapsed.value
      }, "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transform transition-all duration-300 h-full lg:static lg:flex flex-col"])}" data-v-fd59c19d>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        collapsed: isCollapsed.value,
        "current-category": currentCategory.value,
        onCategoryChange: handleCategoryChange,
        onSearch: ($event) => _ctx.$emit("search", $event)
      }, null, _parent));
      _push(`<button class="hidden lg:flex absolute right-0 top-8 transform translate-x-1/2 -translate-y-1/2 z-40 w-6 h-6 rounded-full bg-sidebar border border-sidebar-border items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300" data-v-fd59c19d>`);
      _push(ssrRenderComponent(unref(ChevronLeft), {
        class: ["w-4 h-4 transition-transform", { "rotate-180": isCollapsed.value }]
      }, null, _parent));
      _push(`</button></aside><main class="flex-1 flex flex-col h-screen overflow-hidden bg-background relative" data-v-fd59c19d><header class="hidden lg:flex h-16 border-b border-border items-center justify-between px-6 bg-background/80 backdrop-blur z-30" data-v-fd59c19d><div class="flex items-center" style="${ssrRenderStyle({ "width": "280px" })}" data-v-fd59c19d>`);
      if (showBreadcrumbs.value) {
        _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex-1 flex items-center justify-center" data-v-fd59c19d><div class="w-80 flex items-center gap-2 px-3 py-1.5 bg-muted/30 hover:bg-muted/50 border border-border/50 rounded-lg text-sm text-muted-foreground cursor-pointer transition-all duration-200 group" data-v-fd59c19d><div class="flex items-center flex-1 justify-center gap-1" data-v-fd59c19d><span class="font-mono text-muted-foreground/70 group-hover:text-muted-foreground" data-v-fd59c19d>Press</span><kbd class="px-1.5 py-0.5 text-xs bg-background border border-border/50 rounded font-mono group-hover:bg-background/90 transition-colors" data-v-fd59c19d>⌘</kbd><span class="text-muted-foreground/70 group-hover:text-muted-foreground" data-v-fd59c19d>+</span><kbd class="px-1.5 py-0.5 text-xs bg-background border border-border/50 rounded font-mono group-hover:bg-background/90 transition-colors" data-v-fd59c19d>K</kbd><span class="text-muted-foreground/50 group-hover:text-muted-foreground" data-v-fd59c19d>to search</span></div>`);
      _push(ssrRenderComponent(unref(Search), { class: "w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" }, null, _parent));
      _push(`<div class="w-1 h-1 bg-primary/30 group-hover:bg-primary/50 rounded-full transition-all duration-300" data-v-fd59c19d></div></div></div><div class="flex items-center gap-2" data-v-fd59c19d><div class="hidden lg:flex items-center px-3 py-1.5 bg-muted/50 rounded-md border border-border/50 relative overflow-hidden transition-all duration-300" style="${ssrRenderStyle({ "height": "32px", "min-width": "280px" })}" data-v-fd59c19d><div class="absolute left-3 top-0 right-20 flex flex-col transition-transform duration-300 ease-in-out" style="${ssrRenderStyle({ transform: `translateY(-${currentWidget.value * 32}px)` })}" data-v-fd59c19d><div class="flex items-center gap-2 h-8 whitespace-nowrap" data-v-fd59c19d>`);
      _push(ssrRenderComponent(unref(Globe), { class: "w-4 h-4 text-muted-foreground flex-shrink-0" }, null, _parent));
      _push(`<span class="text-sm font-mono text-muted-foreground flex-1" style="${ssrRenderStyle({ "max-width": "140px" })}" data-v-fd59c19d>IP: ${ssrInterpolate(userIP.value)}</span></div><div class="flex items-center gap-2 h-8 whitespace-nowrap" data-v-fd59c19d>`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-4 h-4 text-muted-foreground flex-shrink-0" }, null, _parent));
      _push(`<span class="text-sm font-mono text-muted-foreground flex-1" style="${ssrRenderStyle({ "max-width": "140px" })}" data-v-fd59c19d>${ssrInterpolate(currentTime.value)}</span></div><div class="flex items-center gap-2 h-8 whitespace-nowrap" data-v-fd59c19d>`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "w-4 h-4 text-muted-foreground flex-shrink-0" }, null, _parent));
      _push(`<span class="text-sm text-muted-foreground flex-1" style="${ssrRenderStyle({ "max-width": "140px" })}" data-v-fd59c19d>为效率而生, Just Util.cn</span></div></div><div class="absolute right-16 top-1/2 transform -translate-y-1/2 w-px h-4 bg-muted-foreground/30" data-v-fd59c19d></div><div class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1.5 z-10" data-v-fd59c19d><button class="p-1 text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded transition-all duration-200 relative group"${ssrRenderAttr("title", copySuccess.value ? "已复制!" : "点击复制当前内容")} data-v-fd59c19d>`);
      if (copySuccess.value) {
        _push(ssrRenderComponent(unref(Check), { class: "w-3 h-3 text-green-500" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Copy), { class: "w-3 h-3" }, null, _parent));
      }
      if (copySuccess.value) {
        _push(`<div class="absolute -top-8 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap animate-fade-in shadow-lg" data-v-fd59c19d> 已复制! </div>`);
      } else {
        _push(`<div class="absolute -top-8 right-0 bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg" data-v-fd59c19d> 点击复制 </div>`);
      }
      _push(`</button><button class="p-1 text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded transition-all duration-200" title="切换显示" data-v-fd59c19d>`);
      _push(ssrRenderComponent(unref(RefreshCw), { class: "w-3 h-3" }, null, _parent));
      _push(`</button></div></div><a href="https://github.com/dmdq/utilx" target="_blank" class="group flex items-center gap-1 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors" data-v-fd59c19d>`);
      _push(ssrRenderComponent(unref(Github), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="hidden sm:inline" data-v-fd59c19d>Star</span></a><button class="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50" data-v-fd59c19d>`);
      _push(ssrRenderComponent(unref(Languages), { class: "w-5 h-5" }, null, _parent));
      _push(`</button><button class="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50" data-v-fd59c19d>`);
      _push(ssrRenderComponent(unref(Sun), { class: "w-5 h-5 hidden dark:block" }, null, _parent));
      _push(ssrRenderComponent(unref(Moon), { class: "w-5 h-5 block dark:hidden" }, null, _parent));
      _push(`</button></div></header><header class="lg:hidden h-14 border-b border-border flex items-center justify-between px-4 bg-background/80 backdrop-blur z-30" data-v-fd59c19d><div class="flex items-center gap-3" data-v-fd59c19d><button id="menuBtn" class="p-2 -ml-2 text-muted-foreground hover:text-foreground" data-v-fd59c19d>`);
      _push(ssrRenderComponent(unref(Menu), { class: "w-6 h-6" }, null, _parent));
      _push(`</button><span class="font-bold" data-v-fd59c19d>Util.cn</span></div><button class="p-2 text-muted-foreground" data-v-fd59c19d>`);
      _push(ssrRenderComponent(unref(Search), { class: "w-5 h-5" }, null, _parent));
      _push(`</button></header><div class="flex-1 overflow-y-auto overflow-x-hidden p-4 lg:p-8 scroll-smooth" id="scrollContainer" data-v-fd59c19d><div class="min-h-full flex flex-col" data-v-fd59c19d><div class="flex-auto" data-v-fd59c19d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div></div>`);
      if (unref(siteConfig).customFooterScripts) {
        _push(`<div data-v-fd59c19d>${unref(siteConfig).customFooterScripts ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: isSearchOpen.value,
        "onUpdate:modelValue": ($event) => isSearchOpen.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(PWAInstallPrompt, null, null, _parent));
      if (unref(siteConfig).customHeadScripts) {
        _push(`<div class="hidden" data-v-fd59c19d>${unref(siteConfig).customHeadScripts ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fd59c19d"]]);
export {
  _default as default
};
//# sourceMappingURL=default-CJNVIUTX.js.map
