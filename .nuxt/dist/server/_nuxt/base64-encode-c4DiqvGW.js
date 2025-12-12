import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { Upload, Info, Hash, ArrowRight, Link } from "lucide-vue-next";
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
  __name: "base64-encode",
  __ssrInlineRender: true,
  setup(__props) {
    const inputMode = ref("text");
    const inputText = ref("");
    const outputText = ref("");
    const selectedFile = ref(null);
    const copied = ref(false);
    const options = ref({
      urlSafe: false,
      lineBreaks: false
    });
    const encodeBase64 = (text) => {
      try {
        let encoded = btoa(unescape(encodeURIComponent(text)));
        if (options.value.urlSafe) {
          encoded = encoded.replace(/\+/g, "-").replace(/\//g, "_");
        }
        if (options.value.lineBreaks) {
          const lines = [];
          for (let i = 0; i < encoded.length; i += 76) {
            lines.push(encoded.substring(i, i + 76));
          }
          encoded = lines.join("\n");
        }
        return encoded;
      } catch (error) {
        return "编码失败：" + error.message;
      }
    };
    watch(inputText, (newText) => {
      if (newText) {
        outputText.value = encodeBase64(newText);
      } else {
        outputText.value = "";
      }
    });
    watch(options, () => {
      if (inputText.value || selectedFile.value) {
        if (inputText.value) {
          outputText.value = encodeBase64(inputText.value);
        }
      }
    }, { deep: true });
    useSeoMeta({
      title: "Base64编码器 - 在线Base64编码工具",
      description: "免费在线Base64编码工具，支持文本和图片编码，可拖拽上传文件，提供多种编码选项。",
      keywords: ["base64", "编码", "encoder", "在线工具", "图片编码", "文件编码"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-2bf281b4><div class="mt-4 mb-8" data-v-2bf281b4><h1 class="text-3xl font-bold mb-3" data-v-2bf281b4>Base64 编码器</h1><p class="text-muted-foreground" data-v-2bf281b4>将文本或图片转换为 Base64 编码格式，支持拖拽上传文件</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-2bf281b4><div class="space-y-4" data-v-2bf281b4><div class="flex items-center justify-between" data-v-2bf281b4><h2 class="text-lg font-semibold" data-v-2bf281b4>输入内容</h2><div class="flex gap-2" data-v-2bf281b4><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2bf281b4> 清空 </button></div></div><div class="flex gap-2 p-1 bg-muted rounded-lg" data-v-2bf281b4><button class="${ssrRenderClass([inputMode.value === "text" ? "bg-background shadow-sm" : "", "flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors"])}" data-v-2bf281b4> 文本输入 </button><button class="${ssrRenderClass([inputMode.value === "file" ? "bg-background shadow-sm" : "", "flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors"])}" data-v-2bf281b4> 文件上传 </button></div>`);
      if (inputMode.value === "text") {
        _push(`<textarea placeholder="请输入要编码的文本..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-2bf281b4>${ssrInterpolate(inputText.value)}</textarea>`);
      } else {
        _push(`<!---->`);
      }
      if (inputMode.value === "file") {
        _push(`<div class="w-full h-64 border-2 border-dashed border-muted-foreground/25 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors" data-v-2bf281b4><input type="file" class="hidden" accept="image/*,.txt,.json,.xml,.csv" data-v-2bf281b4>`);
        _push(ssrRenderComponent(unref(Upload), { class: "w-12 h-12 text-muted-foreground mb-2" }, null, _parent));
        _push(`<p class="text-sm text-muted-foreground mb-1" data-v-2bf281b4>拖拽文件到此处或点击上传</p><p class="text-xs text-muted-foreground" data-v-2bf281b4>支持图片和文本文件</p>`);
        if (selectedFile.value) {
          _push(`<p class="text-sm text-primary mt-2" data-v-2bf281b4>${ssrInterpolate(selectedFile.value.name)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-3" data-v-2bf281b4><label class="flex items-center gap-2" data-v-2bf281b4><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.urlSafe) ? ssrLooseContain(options.value.urlSafe, null) : options.value.urlSafe) ? " checked" : ""} class="rounded" data-v-2bf281b4><span class="text-sm" data-v-2bf281b4>URL 安全编码（替换 + 和 /）</span></label><label class="flex items-center gap-2" data-v-2bf281b4><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.lineBreaks) ? ssrLooseContain(options.value.lineBreaks, null) : options.value.lineBreaks) ? " checked" : ""} class="rounded" data-v-2bf281b4><span class="text-sm" data-v-2bf281b4>每 76 个字符换行</span></label></div></div><div class="space-y-4" data-v-2bf281b4><div class="flex items-center justify-between" data-v-2bf281b4><h2 class="text-lg font-semibold" data-v-2bf281b4>编码结果</h2><div class="flex gap-2" data-v-2bf281b4>`);
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2bf281b4>${ssrInterpolate(copied.value ? "已复制" : "复制")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-2bf281b4> 下载 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="relative" data-v-2bf281b4>`);
      if (outputText.value) {
        _push(`<pre class="w-full h-64 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-2bf281b4>${ssrInterpolate(outputText.value)}</pre>`);
      } else {
        _push(`<div class="w-full h-64 p-4 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" data-v-2bf281b4> 编码结果将显示在这里 </div>`);
      }
      if (outputText.value) {
        _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-2bf281b4>${ssrInterpolate(outputText.value.length)} 字符 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="mt-12 space-y-6" data-v-2bf281b4><div class="bg-card rounded-lg p-6" data-v-2bf281b4><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-2bf281b4>`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 关于 Base64 编码 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-2bf281b4><p data-v-2bf281b4>Base64 是一种基于 64 个可打印字符来表示二进制数据的编码方法。它常用于在处理文本数据的场合，表示、传输和存储一些二进制数据。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4" data-v-2bf281b4><div data-v-2bf281b4><h4 class="font-medium text-foreground mb-2" data-v-2bf281b4>常见用途：</h4><ul class="list-disc list-inside space-y-1" data-v-2bf281b4><li data-v-2bf281b4>邮件附件编码</li><li data-v-2bf281b4>URL 参数传递</li><li data-v-2bf281b4>图片内嵌到 HTML/CSS</li><li data-v-2bf281b4>配置文件存储</li></ul></div><div data-v-2bf281b4><h4 class="font-medium text-foreground mb-2" data-v-2bf281b4>编码字符集：</h4><ul class="list-disc list-inside space-y-1" data-v-2bf281b4><li data-v-2bf281b4>大写字母 A-Z (26个)</li><li data-v-2bf281b4>小写字母 a-z (26个)</li><li data-v-2bf281b4>数字 0-9 (10个)</li><li data-v-2bf281b4>加号 + 和斜杠 / (2个)</li><li data-v-2bf281b4>等号 = 作为填充字符</li></ul></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-2bf281b4><h3 class="text-lg font-semibold mb-4" data-v-2bf281b4>相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-2bf281b4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/base64-decode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-2bf281b4${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2bf281b4${_scopeId}>Base64 解码</p><p class="text-xs text-muted-foreground" data-v-2bf281b4${_scopeId}>解码 Base64 字符串</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 解码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "解码 Base64 字符串")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/url-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Link), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-2bf281b4${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2bf281b4${_scopeId}>URL 编码</p><p class="text-xs text-muted-foreground" data-v-2bf281b4${_scopeId}>URL 百分比编码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "URL 编码"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "URL 百分比编码")
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
            _push2(`<div data-v-2bf281b4${_scopeId}><p class="font-medium group-hover:text-primary" data-v-2bf281b4${_scopeId}>十六进制转换</p><p class="text-xs text-muted-foreground" data-v-2bf281b4${_scopeId}>文本与十六进制互转</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/base64-encode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const base64Encode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2bf281b4"]]);
export {
  base64Encode as default
};
//# sourceMappingURL=base64-encode-c4DiqvGW.js.map
