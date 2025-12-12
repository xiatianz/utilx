import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { FileText, Hash, ArrowRight, Link } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
  __name: "base64-decode",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const outputText = ref("");
    const outputType = ref("text");
    const imageData = ref("");
    const imageInfo = ref({ width: 0, height: 0 });
    const error = ref("");
    const copied = ref(false);
    const options = ref({
      urlSafe: false,
      strict: false
    });
    const decodeBase64 = (base64) => {
      try {
        let cleanBase64 = base64.trim();
        if (cleanBase64.startsWith("data:")) {
          const parts = cleanBase64.split(",");
          if (parts.length < 2) {
            throw new Error("无效的 Data URL 格式");
          }
          cleanBase64 = parts[1];
          const mimeMatch = parts[0].match(/data:image\/(\w+);base64/);
          if (mimeMatch) {
            outputType.value = "image";
            return cleanBase64;
          }
        }
        if (options.value.urlSafe) {
          cleanBase64 = cleanBase64.replace(/-/g, "+").replace(/_/g, "/");
        }
        cleanBase64 = cleanBase64.replace(/\s/g, "");
        if (options.value.strict) {
          const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
          if (!base64Regex.test(cleanBase64)) {
            throw new Error("输入包含非 Base64 字符");
          }
        }
        const padLength = 4 - cleanBase64.length % 4;
        if (padLength < 4) {
          cleanBase64 += "=".repeat(padLength);
        }
        outputType.value = "text";
        return atob(cleanBase64);
      } catch (err) {
        error.value = "解码失败：" + err.message;
        outputType.value = "error";
        return "";
      }
    };
    const loadImage = (base64) => {
      const img = new Image();
      img.onload = () => {
        imageInfo.value = {
          width: img.width,
          height: img.height
        };
      };
      img.onerror = () => {
        error.value = "图片加载失败";
      };
      img.src = `data:image/png;base64,${base64}`;
    };
    watch(inputText, (newText) => {
      if (newText) {
        error.value = "";
        outputText.value = "";
        imageData.value = "";
        const decoded = decodeBase64(newText);
        if (decoded && outputType.value === "text") {
          outputText.value = decodeURIComponent(escape(decoded));
        } else if (decoded && outputType.value === "image") {
          imageData.value = `data:image/png;base64,${decoded}`;
          loadImage(decoded);
        }
      } else {
        outputText.value = "";
        imageData.value = "";
        imageInfo.value = { width: 0, height: 0 };
        error.value = "";
        outputType.value = "text";
      }
    });
    watch(options, () => {
      if (inputText.value) {
        inputText.value = inputText.value;
      }
    }, { deep: true });
    useSeoMeta({
      title: "Base64解码器 - 在线Base64解码工具",
      description: "免费在线Base64解码工具，支持文本和图片解码，自动识别图片格式，提供多种解码选项。",
      keywords: ["base64", "解码", "decoder", "在线工具", "图片解码", "文本解码"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-9c0e84e6><div class="mt-4 mb-8" data-v-9c0e84e6><h1 class="text-3xl font-bold mb-3" data-v-9c0e84e6>Base64 解码器</h1><p class="text-muted-foreground" data-v-9c0e84e6>将 Base64 编码数据解码还原为原始内容，支持文本和图片解码</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-9c0e84e6><div class="space-y-4" data-v-9c0e84e6><div class="flex items-center justify-between" data-v-9c0e84e6><h2 class="text-lg font-semibold" data-v-9c0e84e6>Base64 输入</h2><div class="flex gap-2" data-v-9c0e84e6><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-9c0e84e6> 清空 </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-9c0e84e6> 粘贴 </button></div></div><div class="relative" data-v-9c0e84e6><textarea placeholder="请输入要解码的 Base64 字符串..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm" data-v-9c0e84e6>${ssrInterpolate(inputText.value)}</textarea>`);
      if (inputText.value) {
        _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-9c0e84e6>${ssrInterpolate(inputText.value.length)} 字符 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-3" data-v-9c0e84e6><label class="flex items-center gap-2" data-v-9c0e84e6><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.urlSafe) ? ssrLooseContain(options.value.urlSafe, null) : options.value.urlSafe) ? " checked" : ""} class="rounded" data-v-9c0e84e6><span class="text-sm" data-v-9c0e84e6>URL 安全解码（替换 - 和 _）</span></label><label class="flex items-center gap-2" data-v-9c0e84e6><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.strict) ? ssrLooseContain(options.value.strict, null) : options.value.strict) ? " checked" : ""} class="rounded" data-v-9c0e84e6><span class="text-sm" data-v-9c0e84e6>严格模式（仅允许 Base64 字符）</span></label></div></div><div class="space-y-4" data-v-9c0e84e6><div class="flex items-center justify-between" data-v-9c0e84e6><h2 class="text-lg font-semibold" data-v-9c0e84e6>解码结果</h2><div class="flex gap-2" data-v-9c0e84e6>`);
      if (outputText.value || outputType.value === "image") {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-9c0e84e6>${ssrInterpolate(copied.value ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value && outputType.value === "text") {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-9c0e84e6> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputType.value === "image") {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-9c0e84e6> 下载图片 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (outputType.value === "text") {
        _push(`<div class="relative" data-v-9c0e84e6>`);
        if (outputText.value) {
          _push(`<pre class="w-full h-64 p-4 bg-muted rounded-lg overflow-auto text-sm whitespace-pre-wrap break-all" data-v-9c0e84e6>${ssrInterpolate(outputText.value)}</pre>`);
        } else {
          _push(`<div class="w-full h-64 p-4 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" data-v-9c0e84e6> 解码结果将显示在这里 </div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (outputType.value === "image") {
        _push(`<div class="w-full min-h-64 p-4 bg-muted rounded-lg flex items-center justify-center" data-v-9c0e84e6>`);
        if (imageData.value) {
          _push(`<div class="text-center" data-v-9c0e84e6><img${ssrRenderAttr("src", imageData.value)} alt="Decoded image" class="max-w-full max-h-64 rounded-lg shadow-lg" data-v-9c0e84e6><p class="text-sm text-muted-foreground mt-2" data-v-9c0e84e6> 图片尺寸: ${ssrInterpolate(imageInfo.value.width)} x ${ssrInterpolate(imageInfo.value.height)}</p></div>`);
        } else {
          _push(`<p class="text-muted-foreground" data-v-9c0e84e6> 无法识别为图片数据 </p>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div class="w-full p-4 bg-destructive/10 border border-destructive/20 rounded-lg" data-v-9c0e84e6><p class="text-sm text-destructive" data-v-9c0e84e6>${ssrInterpolate(error.value)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6" data-v-9c0e84e6><div class="bg-card rounded-lg p-6" data-v-9c0e84e6><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-9c0e84e6>`);
      _push(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 支持的 Base64 格式 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-9c0e84e6><div class="space-y-3" data-v-9c0e84e6><h4 class="font-medium" data-v-9c0e84e6>标准 Base64：</h4><div class="p-3 bg-muted rounded-lg" data-v-9c0e84e6><code class="text-xs" data-v-9c0e84e6>aGVsbG8gd29ybGQ=</code></div></div><div class="space-y-3" data-v-9c0e84e6><h4 class="font-medium" data-v-9c0e84e6>Data URL (图片)：</h4><div class="p-3 bg-muted rounded-lg" data-v-9c0e84e6><code class="text-xs block truncate" data-v-9c0e84e6>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA...</code></div></div><div class="space-y-3" data-v-9c0e84e6><h4 class="font-medium" data-v-9c0e84e6>带换行的 Base64：</h4><div class="p-3 bg-muted rounded-lg" data-v-9c0e84e6><code class="text-xs" data-v-9c0e84e6>YWJjZGVmZ2hpams=</code></div></div><div class="space-y-3" data-v-9c0e84e6><h4 class="font-medium" data-v-9c0e84e6>URL 安全 Base64：</h4><div class="p-3 bg-muted rounded-lg" data-v-9c0e84e6><code class="text-xs" data-v-9c0e84e6>aGVsbG8gd29ybGQ-</code></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-9c0e84e6><h3 class="text-lg font-semibold mb-4" data-v-9c0e84e6>使用说明</h3><div class="space-y-2 text-sm text-muted-foreground" data-v-9c0e84e6><p data-v-9c0e84e6>• 支持标准 Base64、URL 安全 Base64、带换行的 Base64 格式</p><p data-v-9c0e84e6>• 自动检测图片数据并显示预览</p><p data-v-9c0e84e6>• 严格模式下只允许 Base64 字符集，否则会报错</p><p data-v-9c0e84e6>• 支持从剪贴板直接粘贴 Base64 数据</p></div></div><div class="bg-card rounded-lg p-6" data-v-9c0e84e6><h3 class="text-lg font-semibold mb-4" data-v-9c0e84e6>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-9c0e84e6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/base64-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-9c0e84e6${_scopeId}><p class="font-medium group-hover:text-primary" data-v-9c0e84e6${_scopeId}>Base64 编码</p><p class="text-xs text-muted-foreground" data-v-9c0e84e6${_scopeId}>文本/图片转 Base64</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 编码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "文本/图片转 Base64")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/url-decode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Link), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-9c0e84e6${_scopeId}><p class="font-medium group-hover:text-primary" data-v-9c0e84e6${_scopeId}>URL 解码</p><p class="text-xs text-muted-foreground" data-v-9c0e84e6${_scopeId}>URL 百分比解码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "URL 解码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "URL 百分比解码")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/hex-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-9c0e84e6${_scopeId}><p class="font-medium group-hover:text-primary" data-v-9c0e84e6${_scopeId}>十六进制转换</p><p class="text-xs text-muted-foreground" data-v-9c0e84e6${_scopeId}>文本与十六进制互转</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "十六进制转换"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "文本与十六进制互转")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/base64-decode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const base64Decode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c0e84e6"]]);
export {
  base64Decode as default
};
//# sourceMappingURL=base64-decode-CMfRXKLV.js.map
