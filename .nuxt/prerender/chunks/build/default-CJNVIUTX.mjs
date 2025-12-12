import { useSSRContext, ref, computed, watch, mergeProps, unref, mergeModels, withCtx, createVNode, resolveDynamicComponent, createTextVNode, useModel, nextTick } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrRenderList, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { useRouter, useRoute } from 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';
import { ChevronLeft, Search, Globe, Clock, Sparkles, Check, Copy, RefreshCw, Github, Languages, Sun, Moon, Menu, LayoutGrid, Image, Code, ImageIcon, Wifi, Type, Shield, Lock, FileText, Home, Compass, Heart, Map, MessageSquarePlus, ChevronRight, Layout, Book, Timer, Link, Database, FileJson, Hash } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { t as tools } from './tools-CG9LGULA.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { s as siteConfig } from './server.mjs';
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

const _sfc_main$5 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-border/30 bg-background/95 backdrop-blur-sm" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"><div class="flex flex-col sm:flex-row justify-between items-center gap-4"><div class="text-xs text-muted-foreground"><span class="mr-2">\xA9 2024 Util.cn</span><span class="hidden sm:inline">|</span><span class="hidden sm:inline ml-2">\u4E3A\u6548\u7387\u800C\u751F</span></div><nav class="flex items-center gap-4 text-xs">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-muted-foreground hover:text-foreground transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5173\u4E8E\u6211\u4EEC `);
          } else {
            return [
              createTextVNode(" \u5173\u4E8E\u6211\u4EEC ")
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
            _push2(` \u9690\u79C1\u653F\u7B56 `);
          } else {
            return [
              createTextVNode(" \u9690\u79C1\u653F\u7B56 ")
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
            _push2(` \u670D\u52A1\u6761\u6B3E `);
          } else {
            return [
              createTextVNode(" \u670D\u52A1\u6761\u6B3E ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="flex items-center gap-3 text-xs text-muted-foreground"><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Shield), { class: "w-3 h-3 text-green-500" }, null, _parent));
      _push(`<span class="hidden sm:inline">\u672C\u5730\u8BA1\u7B97</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Github), { class: "w-3 h-3" }, null, _parent));
      _push(`<span class="hidden sm:inline">\u5F00\u6E90</span></div></div></div></div></footer>`);
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
          name: "\u9996\u9875",
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
            name: "\u5168\u90E8\u5DE5\u5177",
            path: "/all"
          });
        } else if (pathSegments[0] === "explore") {
          paths.push({
            name: "\u5DE5\u5177\u63A2\u7D22",
            path: "/explore"
          });
        } else if (pathSegments[0] === "favorites") {
          paths.push({
            name: "\u6211\u7684\u6536\u85CF",
            path: "/favorites"
          });
        } else if (pathSegments[0] === "recent") {
          paths.push({
            name: "\u6700\u8FD1\u4F7F\u7528",
            path: "/recent"
          });
        } else if (pathSegments[0] === "about") {
          paths.push({
            name: "\u5173\u4E8E\u6211\u4EEC",
            path: "/about"
          });
        } else if (pathSegments[0] === "privacy") {
          paths.push({
            name: "\u9690\u79C1\u653F\u7B56",
            path: "/privacy"
          });
        } else if (pathSegments[0] === "terms") {
          paths.push({
            name: "\u670D\u52A1\u6761\u6B3E",
            path: "/terms"
          });
        } else if (pathSegments[0] === "feedback") {
          paths.push({
            name: "\u63D0\u4EA4\u53CD\u9988",
            path: "/feedback"
          });
        } else if (pathSegments[0] === "ai") {
          paths.push({
            name: "AI \u5BFC\u822A",
            path: "/ai"
          });
        } else if (pathSegments[0] === "faq") {
          paths.push({
            name: "\u5E38\u89C1\u95EE\u9898",
            path: "/faq"
          });
        } else if (pathSegments[0] === "cookie") {
          paths.push({
            name: "Cookie\u653F\u7B56",
            path: "/cookie"
          });
        } else if (pathSegments[0] === "sitemap") {
          paths.push({
            name: "\u7AD9\u70B9\u5730\u56FE",
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
            _push2(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}"${_scopeId}>\u9996\u9875</span>`);
          } else {
            return [
              createVNode(unref(Home), { class: "w-4 h-4" }),
              createVNode("span", {
                class: { "lg:hidden": __props.collapsed }
              }, "\u9996\u9875", 2)
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
            _push2(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}"${_scopeId}>\u63A2\u7D22</span>`);
          } else {
            return [
              createVNode(unref(Compass), { class: "w-4 h-4" }),
              createVNode("span", {
                class: { "lg:hidden": __props.collapsed }
              }, "\u63A2\u7D22", 2)
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
            _push2(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}"${_scopeId}>\u6700\u8FD1\u4F7F\u7528</span>`);
          } else {
            return [
              createVNode(unref(Clock), { class: "w-4 h-4" }),
              createVNode("span", {
                class: { "lg:hidden": __props.collapsed }
              }, "\u6700\u8FD1\u4F7F\u7528", 2)
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
            _push2(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}"${_scopeId}>\u6211\u7684\u6536\u85CF</span>`);
          } else {
            return [
              createVNode(unref(Heart), { class: "w-4 h-4 text-red-500" }),
              createVNode("span", {
                class: { "lg:hidden": __props.collapsed }
              }, "\u6211\u7684\u6536\u85CF", 2)
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
            _push2(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}"${_scopeId}>\u7AD9\u70B9\u5730\u56FE</span>`);
          } else {
            return [
              createVNode(unref(Map), { class: "w-4 h-4" }),
              createVNode("span", {
                class: { "lg:hidden": __props.collapsed }
              }, "\u7AD9\u70B9\u5730\u56FE", 2)
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
            _push2(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}"${_scopeId}>AI \u5BFC\u822A</span>`);
          } else {
            return [
              createVNode(unref(Sparkles), { class: "w-4 h-4 text-purple-500" }),
              createVNode("span", {
                class: { "lg:hidden": __props.collapsed }
              }, "AI \u5BFC\u822A", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div class="border-t border-sidebar-border my-2"></div><div><h3 class="${ssrRenderClass([{ "lg:hidden": __props.collapsed }, "px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2"])}">\u5DE5\u5177\u7BB1</h3><nav class="space-y-0.5" id="categoryNav"><button class="${ssrRenderClass([[
        __props.currentCategory === "all" && _ctx.$route.path !== "/" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
        { "lg:justify-center lg:px-0 lg:gap-0": __props.collapsed }
      ], "nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors"])}">`);
      _push(ssrRenderComponent(unref(LayoutGrid), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="${ssrRenderClass({ "lg:hidden": __props.collapsed })}">\u5168\u90E8\u5DE5\u5177</span></button><!--[-->`);
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
            _push2(`<div class="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white"${_scopeId}> Dev </div><div class="flex-1 min-w-0"${_scopeId}><p class="text-sm font-medium truncate group-hover:text-primary transition-colors"${_scopeId}>\u63D0\u4EA4\u53CD\u9988</p><p class="text-xs text-muted-foreground truncate"${_scopeId}>\u95EE\u9898\u53CD\u9988 &amp; \u529F\u80FD\u5EFA\u8BAE</p></div>`);
            _push2(ssrRenderComponent(unref(MessageSquarePlus), { class: "w-4 h-4 text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white" }, " Dev "),
              createVNode("div", { class: "flex-1 min-w-0" }, [
                createVNode("p", { class: "text-sm font-medium truncate group-hover:text-primary transition-colors" }, "\u63D0\u4EA4\u53CD\u9988"),
                createVNode("p", { class: "text-xs text-muted-foreground truncate" }, "\u95EE\u9898\u53CD\u9988 & \u529F\u80FD\u5EFA\u8BAE")
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
        name: "\u5168\u90E8\u5DE5\u5177",
        path: "/all",
        description: "\u6D4F\u89C8\u6240\u6709\u53EF\u7528\u5DE5\u5177",
        icon: Layout
      },
      {
        name: "\u535A\u5BA2",
        path: "/blog",
        description: "\u6280\u672F\u6587\u7AE0\u548C\u6559\u7A0B",
        icon: Book
      },
      {
        name: "\u5173\u4E8E\u6211\u4EEC",
        path: "/about",
        description: "\u4E86\u89E3 Util.cn",
        icon: FileText
      },
      {
        name: "GitHub",
        path: "https://github.com/dmdq/utilx",
        description: "\u5F00\u6E90\u9879\u76EE\u5730\u5740",
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
          var _a;
          (_a = searchInput.value) == null ? void 0 : _a.focus();
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (isOpen.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm" }, _attrs))}><div class="w-full max-w-2xl mx-4"><div class="bg-background border border-border rounded-xl shadow-2xl overflow-hidden"><div class="flex items-center gap-3 px-4 py-3 border-b border-border">`);
        _push(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-muted-foreground" }, null, _parent));
        _push(`<input${ssrRenderAttr("value", searchQuery.value)} type="text" class="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground" placeholder="\u641C\u7D22\u5DE5\u5177\u3001\u6587\u6863..."><kbd class="px-2 py-1 text-xs text-muted-foreground bg-muted border border-border rounded">ESC</kbd></div><div class="max-h-[60vh] overflow-y-auto">`);
        if (filteredTools.value.length > 0) {
          _push(`<div class="py-2"><div class="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"> \u5DE5\u5177 </div><!--[-->`);
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
          _push(`<div class="py-2 border-t border-border"><div class="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"> \u9875\u9762 </div><!--[-->`);
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
          _push(`<div class="py-12 text-center"><div class="text-muted-foreground mb-2">\u672A\u627E\u5230\u76F8\u5173\u7ED3\u679C</div><div class="text-sm text-muted-foreground">\u8BD5\u8BD5\u641C\u7D22 &quot;json&quot; \u6216 &quot;base64&quot;</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!searchQuery.value) {
          _push(`<div class="py-8"><div class="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3"> \u70ED\u95E8\u5DE5\u5177 </div><div class="grid grid-cols-2 gap-2 px-4"><!--[-->`);
          ssrRenderList(popularTools.value, (tool) => {
            _push(`<div class="p-3 hover:bg-muted rounded-lg cursor-pointer transition-colors"><div class="flex items-center gap-2">`);
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getIconComponent(tool.icon)), { class: "w-4 h-4 text-muted-foreground" }, null), _parent);
            _push(`<span class="text-sm font-medium text-foreground truncate">${ssrInterpolate(tool.name)}</span></div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="px-4 py-3 bg-muted/30 border-t border-border flex items-center justify-between text-xs text-muted-foreground"><div class="flex items-center gap-4"><div class="flex items-center gap-1"><kbd class="px-2 py-0.5 bg-background border border-border rounded">\u2191\u2193</kbd><span>\u5BFC\u822A</span></div><div class="flex items-center gap-1"><kbd class="px-2 py-0.5 bg-background border border-border rounded">Enter</kbd><span>\u9009\u62E9</span></div><div class="flex items-center gap-1"><kbd class="px-2 py-0.5 bg-background border border-border rounded">ESC</kbd><span>\u5173\u95ED</span></div></div><div> \u7531 <kbd class="px-2 py-0.5 bg-background border border-border rounded">\u2318K</kbd> \u89E6\u53D1 </div></div></div></div></div>`);
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
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-4 right-4 z-50 max-w-sm animate-fade-in" }, _attrs))} data-v-053a3682><div class="bg-card border border-border rounded-lg shadow-lg p-4 dark:bg-card/95 backdrop-blur-sm" data-v-053a3682><div class="flex items-start gap-3" data-v-053a3682><div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0" data-v-053a3682><svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-053a3682><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-v-053a3682></path></svg></div><div class="flex-1" data-v-053a3682><h3 class="font-semibold mb-1" data-v-053a3682>\u5B89\u88C5 Util \u5DE5\u5177\u7BB1</h3><p class="text-sm text-muted-foreground mb-3" data-v-053a3682> \u5C06\u5E94\u7528\u5B89\u88C5\u5230\u684C\u9762\uFF0C\u4EAB\u53D7\u66F4\u597D\u7684\u4F7F\u7528\u4F53\u9A8C </p><div class="flex gap-2" data-v-053a3682><button class="px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors" data-v-053a3682> \u5B89\u88C5 </button><button class="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium hover:bg-muted/80 transition-colors" data-v-053a3682> \u6682\u4E0D </button></div></div><button class="text-muted-foreground hover:text-foreground transition-colors p-1" data-v-053a3682><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-053a3682><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-053a3682></path></svg></button></div></div></div>`);
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
    const userIP = ref("\u83B7\u53D6\u4E2D...");
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
        "/about": "\u5173\u4E8E\u6211\u4EEC",
        "/privacy": "\u9690\u79C1\u653F\u7B56",
        "/terms": "\u670D\u52A1\u6761\u6B3E",
        "/cookie": "Cookie\u653F\u7B56"
      };
      const specialPages = {
        "/all": "\u5168\u90E8\u5DE5\u5177",
        "/explore": "\u5DE5\u5177\u63A2\u7D22",
        "/favorites": "\u6211\u7684\u6536\u85CF",
        "/recent": "\u6700\u8FD1\u4F7F\u7528",
        "/feedback": "\u63D0\u4EA4\u53CD\u9988",
        "/cookie": "Cookie\u653F\u7B56",
        "/faq": "\u5E38\u89C1\u95EE\u9898",
        "/sitemap": "\u7AD9\u70B9\u5730\u56FE"
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
        "/about": "\u5173\u4E8E\u6211\u4EEC",
        "/privacy": "\u9690\u79C1\u653F\u7B56",
        "/terms": "\u670D\u52A1\u6761\u6B3E",
        "/cookie": "Cookie\u653F\u7B56"
      };
      const specialPages = {
        "/all": "\u5168\u90E8\u5DE5\u5177",
        "/explore": "\u5DE5\u5177\u63A2\u7D22",
        "/favorites": "\u6211\u7684\u6536\u85CF",
        "/recent": "\u6700\u8FD1\u4F7F\u7528",
        "/feedback": "\u63D0\u4EA4\u53CD\u9988",
        "/cookie": "Cookie\u653F\u7B56",
        "/faq": "\u5E38\u89C1\u95EE\u9898",
        "/sitemap": "\u7AD9\u70B9\u5730\u56FE"
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
      var _a, _b;
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
      _push(`</div><div class="flex-1 flex items-center justify-center" data-v-fd59c19d><div class="w-80 flex items-center gap-2 px-3 py-1.5 bg-muted/30 hover:bg-muted/50 border border-border/50 rounded-lg text-sm text-muted-foreground cursor-pointer transition-all duration-200 group" data-v-fd59c19d><div class="flex items-center flex-1 justify-center gap-1" data-v-fd59c19d><span class="font-mono text-muted-foreground/70 group-hover:text-muted-foreground" data-v-fd59c19d>Press</span><kbd class="px-1.5 py-0.5 text-xs bg-background border border-border/50 rounded font-mono group-hover:bg-background/90 transition-colors" data-v-fd59c19d>\u2318</kbd><span class="text-muted-foreground/70 group-hover:text-muted-foreground" data-v-fd59c19d>+</span><kbd class="px-1.5 py-0.5 text-xs bg-background border border-border/50 rounded font-mono group-hover:bg-background/90 transition-colors" data-v-fd59c19d>K</kbd><span class="text-muted-foreground/50 group-hover:text-muted-foreground" data-v-fd59c19d>to search</span></div>`);
      _push(ssrRenderComponent(unref(Search), { class: "w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" }, null, _parent));
      _push(`<div class="w-1 h-1 bg-primary/30 group-hover:bg-primary/50 rounded-full transition-all duration-300" data-v-fd59c19d></div></div></div><div class="flex items-center gap-2" data-v-fd59c19d><div class="hidden lg:flex items-center px-3 py-1.5 bg-muted/50 rounded-md border border-border/50 relative overflow-hidden transition-all duration-300" style="${ssrRenderStyle({ "height": "32px", "min-width": "280px" })}" data-v-fd59c19d><div class="absolute left-3 top-0 right-20 flex flex-col transition-transform duration-300 ease-in-out" style="${ssrRenderStyle({ transform: `translateY(-${currentWidget.value * 32}px)` })}" data-v-fd59c19d><div class="flex items-center gap-2 h-8 whitespace-nowrap" data-v-fd59c19d>`);
      _push(ssrRenderComponent(unref(Globe), { class: "w-4 h-4 text-muted-foreground flex-shrink-0" }, null, _parent));
      _push(`<span class="text-sm font-mono text-muted-foreground flex-1" style="${ssrRenderStyle({ "max-width": "140px" })}" data-v-fd59c19d>IP: ${ssrInterpolate(userIP.value)}</span></div><div class="flex items-center gap-2 h-8 whitespace-nowrap" data-v-fd59c19d>`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-4 h-4 text-muted-foreground flex-shrink-0" }, null, _parent));
      _push(`<span class="text-sm font-mono text-muted-foreground flex-1" style="${ssrRenderStyle({ "max-width": "140px" })}" data-v-fd59c19d>${ssrInterpolate(currentTime.value)}</span></div><div class="flex items-center gap-2 h-8 whitespace-nowrap" data-v-fd59c19d>`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "w-4 h-4 text-muted-foreground flex-shrink-0" }, null, _parent));
      _push(`<span class="text-sm text-muted-foreground flex-1" style="${ssrRenderStyle({ "max-width": "140px" })}" data-v-fd59c19d>\u4E3A\u6548\u7387\u800C\u751F, Just Util.cn</span></div></div><div class="absolute right-16 top-1/2 transform -translate-y-1/2 w-px h-4 bg-muted-foreground/30" data-v-fd59c19d></div><div class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1.5 z-10" data-v-fd59c19d><button class="p-1 text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded transition-all duration-200 relative group"${ssrRenderAttr("title", copySuccess.value ? "\u5DF2\u590D\u5236!" : "\u70B9\u51FB\u590D\u5236\u5F53\u524D\u5185\u5BB9")} data-v-fd59c19d>`);
      if (copySuccess.value) {
        _push(ssrRenderComponent(unref(Check), { class: "w-3 h-3 text-green-500" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Copy), { class: "w-3 h-3" }, null, _parent));
      }
      if (copySuccess.value) {
        _push(`<div class="absolute -top-8 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap animate-fade-in shadow-lg" data-v-fd59c19d> \u5DF2\u590D\u5236! </div>`);
      } else {
        _push(`<div class="absolute -top-8 right-0 bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg" data-v-fd59c19d> \u70B9\u51FB\u590D\u5236 </div>`);
      }
      _push(`</button><button class="p-1 text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded transition-all duration-200" title="\u5207\u6362\u663E\u793A" data-v-fd59c19d>`);
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
        _push(`<div data-v-fd59c19d>${(_a = unref(siteConfig).customFooterScripts) != null ? _a : ""}</div>`);
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
        _push(`<div class="hidden" data-v-fd59c19d>${(_b = unref(siteConfig).customHeadScripts) != null ? _b : ""}</div>`);
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

export { _default as default };
//# sourceMappingURL=default-CJNVIUTX.mjs.map
