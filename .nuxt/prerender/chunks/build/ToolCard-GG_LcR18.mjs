import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, withCtx, unref, createVNode, resolveDynamicComponent, createTextVNode, createBlock, createCommentVNode, openBlock, withModifiers, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderVNode, ssrRenderAttr, ssrInterpolate } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { Image, Database, Regex, Lock, Clock, FileJson, GripVertical, Star, ArrowRight } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { t as toggleFavorite } from './server.mjs';
import { g as getCategoryColor } from './categoryColors-w89ks1yN.mjs';

const _sfc_main = {
  __name: "ToolCard",
  __ssrInlineRender: true,
  props: {
    tool: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    usageCount: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    isDraggable: {
      type: Boolean,
      default: false
    }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isFavoriteRef = ref(false);
    const iconMap = {
      "file-json": FileJson,
      "clock": Clock,
      "lock": Lock,
      "regex": Regex,
      "database": Database,
      "image": Image
    };
    const iconComponent = computed(() => {
      return iconMap[props.icon] || FileJson;
    });
    const getCategoryColorClass = (category) => {
      const colorMap = {
        "dev": "bg-orange-500/10 text-orange-500",
        "ops": "bg-blue-500/10 text-blue-500",
        "crypto": "bg-green-500/10 text-green-500",
        "image": "bg-cyan-500/10 text-cyan-500"
      };
      return colorMap[category] || "bg-purple-500/10 text-purple-500";
    };
    const getCategoryBadgeClass = (category) => {
      const colorMap = {
        "dev": "bg-orange-500/10 text-orange-500",
        "ops": "bg-blue-500/10 text-blue-500",
        "crypto": "bg-green-500/10 text-green-500",
        "image": "bg-cyan-500/10 text-cyan-500"
      };
      return colorMap[category] || "bg-purple-500/10 text-purple-500";
    };
    const getCategoryLabel = (category) => {
      const labelMap = {
        "dev": "Dev",
        "ops": "Time",
        "crypto": "Sec",
        "image": "Img"
      };
      return labelMap[category] || "DB";
    };
    const toggleFavorite$1 = () => {
      isFavoriteRef.value = toggleFavorite(props.tool.id);
    };
    const getToolUrl = (tool) => {
      return `/tools/${tool.id}/`;
    };
    const handleCardClick = () => {
      emit("select", props.tool);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: getToolUrl(__props.tool),
        class: "tool-card group relative bg-card/40 backdrop-blur-sm border-0 rounded-xl p-5 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/8 transition-all duration-300 cursor-pointer block h-full",
        "data-category": __props.category,
        onClick: handleCardClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.isDraggable) {
              _push2(`<div class="absolute top-4 left-4 text-muted-foreground hover:text-foreground transition-colors z-10 cursor-grab active:cursor-grabbing" title="\u62D6\u62FD\u8C03\u6574\u987A\u5E8F"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(GripVertical), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button class="absolute top-4 right-4 text-muted-foreground hover:text-yellow-500 transition-colors z-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Star), {
              class: ["w-4 h-4", { "text-yellow-500": isFavoriteRef.value, "text-muted-foreground": !isFavoriteRef.value }],
              fill: isFavoriteRef.value ? "currentColor" : "none"
            }, null, _parent2, _scopeId));
            _push2(`</button><div class="${ssrRenderClass([{ "ml-8": __props.isDraggable }, "flex items-center gap-4 mb-4"])}"${_scopeId}><div class="${ssrRenderClass([getCategoryColorClass(__props.category), "w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"])}"${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconComponent.value), {
              class: "w-6 h-6",
              style: { color: unref(getCategoryColor)(__props.category).icon }
            }, null), _parent2, _scopeId);
            _push2(`</div><div${_scopeId}><h4 class="font-semibold text-foreground group-hover:text-primary transition-colors"${ssrRenderAttr("title", __props.title)}${_scopeId}>${ssrInterpolate(__props.title)}</h4><span class="${ssrRenderClass([getCategoryBadgeClass(__props.category), "text-[10px] px-1.5 py-0.5 rounded"])}"${_scopeId}>${ssrInterpolate(getCategoryLabel(__props.category))}</span></div></div><p class="text-sm text-muted-foreground line-clamp-2 mb-4"${_scopeId}>${ssrInterpolate(__props.description)}</p><div class="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-3"${_scopeId}><span${_scopeId}>\u4F7F\u7528: ${ssrInterpolate(__props.usageCount)}</span>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: getToolUrl(__props.tool),
              class: "group-hover:text-primary flex items-center gap-1",
              onClick: () => {
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6253\u5F00 `);
                  _push3(ssrRenderComponent(unref(ArrowRight), { class: "w-3 h-3" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" \u6253\u5F00 "),
                    createVNode(unref(ArrowRight), { class: "w-3 h-3" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              __props.isDraggable ? (openBlock(), createBlock("div", {
                key: 0,
                class: "absolute top-4 left-4 text-muted-foreground hover:text-foreground transition-colors z-10 cursor-grab active:cursor-grabbing",
                title: "\u62D6\u62FD\u8C03\u6574\u987A\u5E8F",
                onMousedown: withModifiers(() => {
                }, ["stop"])
              }, [
                createVNode(unref(GripVertical), { class: "w-4 h-4" })
              ], 40, ["onMousedown"])) : createCommentVNode("", true),
              createVNode("button", {
                class: "absolute top-4 right-4 text-muted-foreground hover:text-yellow-500 transition-colors z-10",
                onClick: withModifiers(toggleFavorite$1, ["stop", "prevent"])
              }, [
                createVNode(unref(Star), {
                  class: ["w-4 h-4", { "text-yellow-500": isFavoriteRef.value, "text-muted-foreground": !isFavoriteRef.value }],
                  fill: isFavoriteRef.value ? "currentColor" : "none"
                }, null, 8, ["fill", "class"])
              ]),
              createVNode("div", {
                class: ["flex items-center gap-4 mb-4", { "ml-8": __props.isDraggable }]
              }, [
                createVNode("div", {
                  class: ["w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform", getCategoryColorClass(__props.category)]
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconComponent.value), {
                    class: "w-6 h-6",
                    style: { color: unref(getCategoryColor)(__props.category).icon }
                  }, null, 8, ["style"]))
                ], 2),
                createVNode("div", null, [
                  createVNode("h4", {
                    class: "font-semibold text-foreground group-hover:text-primary transition-colors",
                    title: __props.title
                  }, toDisplayString(__props.title), 9, ["title"]),
                  createVNode("span", {
                    class: ["text-[10px] px-1.5 py-0.5 rounded", getCategoryBadgeClass(__props.category)]
                  }, toDisplayString(getCategoryLabel(__props.category)), 3)
                ])
              ], 2),
              createVNode("p", { class: "text-sm text-muted-foreground line-clamp-2 mb-4" }, toDisplayString(__props.description), 1),
              createVNode("div", { class: "flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-3" }, [
                createVNode("span", null, "\u4F7F\u7528: " + toDisplayString(__props.usageCount), 1),
                createVNode(_component_NuxtLink, {
                  to: getToolUrl(__props.tool),
                  class: "group-hover:text-primary flex items-center gap-1",
                  onClick: withModifiers(() => {
                  }, ["stop"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u6253\u5F00 "),
                    createVNode(unref(ArrowRight), { class: "w-3 h-3" })
                  ]),
                  _: 1
                }, 8, ["to", "onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ToolCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ToolCard-GG_LcR18.mjs.map
