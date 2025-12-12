import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { Zap, FileText, ArrowRight, Link, Type } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { f as useSeoMeta } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = {
  __name: "html-encode",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const outputText = ref("");
    const copied = ref(false);
    const options = ref({
      encodeAll: false,
      useNamed: true,
      preserveSpaces: false
    });
    const namedEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "\xA9": "&copy;",
      "\xAE": "&reg;",
      "\u20AC": "&euro;",
      "\xA3": "&pound;",
      "\xA5": "&yen;",
      "\xA7": "&sect;",
      "\xB6": "&para;",
      "\xB0": "&deg;",
      "\xB1": "&plusmn;",
      "\xD7": "&times;",
      "\xF7": "&divide;",
      "\xBD": "&frac12;",
      "\xBC": "&frac14;",
      "\xBE": "&frac34;",
      "\u2026": "&hellip;",
      "\u2014": "&mdash;",
      "\u2013": "&ndash;",
      '"': "&ldquo;",
      '""': "&rdquo;",
      "'": "&lsquo;",
      "'": "&rsquo;"
    };
    const encodeHTML = (text) => {
      if (!text) return "";
      let result = "";
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const code = char.charCodeAt(0);
        if (char === " " && options.value.preserveSpaces) {
          result += " ";
          continue;
        }
        if (options.value.useNamed && namedEntities[char]) {
          result += namedEntities[char];
          continue;
        }
        if (options.value.encodeAll || code < 32 || code > 126) {
          if (code < 128) {
            result += `&#${code};`;
          } else {
            result += `&#x${code.toString(16).toUpperCase()};`;
          }
        } else {
          if (`&<>"'`.includes(char)) {
            result += namedEntities[char] || `&#${code};`;
          } else {
            result += char;
          }
        }
      }
      return result;
    };
    watch(inputText, (newText) => {
      if (newText) {
        outputText.value = encodeHTML(newText);
      } else {
        outputText.value = "";
      }
    });
    watch(options, () => {
      if (inputText.value) {
        outputText.value = encodeHTML(inputText.value);
      }
    }, { deep: true });
    useSeoMeta({
      title: "HTML\u7F16\u7801\u5668 - \u5728\u7EBFHTML\u5B9E\u4F53\u7F16\u7801\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFHTML\u7F16\u7801\u5DE5\u5177\uFF0C\u652F\u6301\u547D\u540D\u5B9E\u4F53\u548C\u6570\u5B57\u5B9E\u4F53\u7F16\u7801\uFF0C\u53EF\u81EA\u5B9A\u4E49\u7F16\u7801\u9009\u9879\uFF0C\u9632\u6B62XSS\u653B\u51FB\u3002",
      keywords: ["html", "\u7F16\u7801", "entity", "html-encoder", "xss", "\u5728\u7EBF\u5DE5\u5177", "\u5B9E\u4F53\u7F16\u7801"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))} data-v-a0b4d3f4><div class="mt-4 mb-8" data-v-a0b4d3f4><h1 class="text-3xl font-bold mb-3" data-v-a0b4d3f4>HTML \u7F16\u7801\u5668</h1><p class="text-muted-foreground" data-v-a0b4d3f4>\u5C06\u6587\u672C\u8F6C\u6362\u4E3A HTML \u5B9E\u4F53\u7F16\u7801\uFF0C\u9632\u6B62 XSS \u653B\u51FB\u548C\u663E\u793A\u7279\u6B8A\u5B57\u7B26</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-a0b4d3f4><div class="space-y-4" data-v-a0b4d3f4><div class="flex items-center justify-between" data-v-a0b4d3f4><h2 class="text-lg font-semibold" data-v-a0b4d3f4>\u539F\u59CB\u6587\u672C</h2><div class="flex gap-2" data-v-a0b4d3f4><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-a0b4d3f4> \u6E05\u7A7A </button><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-a0b4d3f4> \u7C98\u8D34 </button></div></div><textarea placeholder="\u8BF7\u8F93\u5165\u8981\u7F16\u7801\u7684\u6587\u672C..." class="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary" data-v-a0b4d3f4>${ssrInterpolate(inputText.value)}</textarea><div class="space-y-3" data-v-a0b4d3f4><h3 class="font-medium text-sm" data-v-a0b4d3f4>\u7F16\u7801\u9009\u9879</h3><label class="flex items-center gap-2" data-v-a0b4d3f4><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.encodeAll) ? ssrLooseContain(options.value.encodeAll, null) : options.value.encodeAll) ? " checked" : ""} class="rounded" data-v-a0b4d3f4><span class="text-sm" data-v-a0b4d3f4>\u7F16\u7801\u6240\u6709\u5B57\u7B26\uFF08\u5305\u62EC\u5B57\u6BCD\u6570\u5B57\uFF09</span></label><label class="flex items-center gap-2" data-v-a0b4d3f4><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.useNamed) ? ssrLooseContain(options.value.useNamed, null) : options.value.useNamed) ? " checked" : ""} class="rounded" data-v-a0b4d3f4><span class="text-sm" data-v-a0b4d3f4>\u4F18\u5148\u4F7F\u7528\u547D\u540D\u5B9E\u4F53\uFF08\u5982 &amp; \u800C\u4E0D\u662F &amp;\uFF09</span></label><label class="flex items-center gap-2" data-v-a0b4d3f4><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(options.value.preserveSpaces) ? ssrLooseContain(options.value.preserveSpaces, null) : options.value.preserveSpaces) ? " checked" : ""} class="rounded" data-v-a0b4d3f4><span class="text-sm" data-v-a0b4d3f4>\u4FDD\u7559\u7A7A\u683C\u4E0D\u7F16\u7801</span></label></div><div class="bg-muted p-4 rounded-lg" data-v-a0b4d3f4><h3 class="font-medium text-sm mb-2" data-v-a0b4d3f4>\u5E38\u89C1 HTML \u5B9E\u4F53</h3><div class="grid grid-cols-2 gap-2 text-xs font-mono" data-v-a0b4d3f4><div data-v-a0b4d3f4>&lt; \u2192 &lt;</div><div data-v-a0b4d3f4>&gt; \u2192 &gt;</div><div data-v-a0b4d3f4>&amp; \u2192 &amp;</div><div data-v-a0b4d3f4>&quot; \u2192 &quot;</div><div data-v-a0b4d3f4>&#39; \u2192 &#39;</div><div data-v-a0b4d3f4>\xA9 \u2192 \xA9</div><div data-v-a0b4d3f4>\xAE \u2192 \xAE</div><div data-v-a0b4d3f4>\u20AC \u2192 \u20AC</div></div></div></div><div class="space-y-4" data-v-a0b4d3f4><div class="flex items-center justify-between" data-v-a0b4d3f4><h2 class="text-lg font-semibold" data-v-a0b4d3f4>\u7F16\u7801\u7ED3\u679C</h2><div class="flex gap-2" data-v-a0b4d3f4>`);
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-a0b4d3f4>${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (outputText.value) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors" data-v-a0b4d3f4> \u4E0B\u8F7D </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="relative" data-v-a0b4d3f4>`);
      if (outputText.value) {
        _push(`<pre class="w-full h-64 p-4 bg-muted rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all" data-v-a0b4d3f4>${ssrInterpolate(outputText.value)}</pre>`);
      } else {
        _push(`<div class="w-full h-64 p-4 bg-muted rounded-lg flex items-center justify-center text-muted-foreground" data-v-a0b4d3f4> \u7F16\u7801\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC </div>`);
      }
      if (outputText.value) {
        _push(`<div class="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded" data-v-a0b4d3f4>${ssrInterpolate(outputText.value.length)} \u5B57\u7B26 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (outputText.value) {
        _push(`<div class="bg-card border rounded-lg p-4" data-v-a0b4d3f4><h3 class="font-medium text-sm mb-2" data-v-a0b4d3f4>HTML \u9884\u89C8</h3><div class="p-3 bg-muted rounded-lg min-h-[100px] text-sm" data-v-a0b4d3f4>${(_a = outputText.value) != null ? _a : ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (inputText.value) {
        _push(`<div class="bg-muted p-4 rounded-lg" data-v-a0b4d3f4><h3 class="font-medium text-sm mb-2" data-v-a0b4d3f4>\u7F16\u7801\u7EDF\u8BA1</h3><div class="grid grid-cols-2 gap-2 text-xs" data-v-a0b4d3f4><div data-v-a0b4d3f4>\u539F\u59CB\u957F\u5EA6: ${ssrInterpolate(inputText.value.length)}</div><div data-v-a0b4d3f4>\u7F16\u7801\u957F\u5EA6: ${ssrInterpolate(outputText.value.length)}</div><div data-v-a0b4d3f4>\u589E\u52A0\u5B57\u7B26: ${ssrInterpolate(outputText.value.length - inputText.value.length)}</div><div data-v-a0b4d3f4>\u7F16\u7801\u7387: ${ssrInterpolate(((outputText.value.length - inputText.value.length) / inputText.value.length * 100).toFixed(1))}%</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6" data-v-a0b4d3f4><div class="bg-card rounded-lg p-6" data-v-a0b4d3f4><h3 class="text-lg font-semibold mb-4 flex items-center gap-2" data-v-a0b4d3f4>`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u6280\u5DE7 </h3><div class="space-y-3 text-sm text-muted-foreground" data-v-a0b4d3f4><p data-v-a0b4d3f4>\u2022 \u5728 Web \u5F00\u53D1\u4E2D\uFF0C\u5BF9\u7528\u6237\u8F93\u5165\u8FDB\u884C HTML \u7F16\u7801\u53EF\u4EE5\u9632\u6B62 XSS \u653B\u51FB</p><p data-v-a0b4d3f4>\u2022 \u663E\u793A\u4EE3\u7801\u7247\u6BB5\u65F6\uFF0C\u4F7F\u7528 HTML \u7F16\u7801\u786E\u4FDD\u6807\u7B7E\u6B63\u786E\u663E\u793A</p><p data-v-a0b4d3f4>\u2022 \u5728 XML/HTML \u5C5E\u6027\u4E2D\u4F7F\u7528\u7279\u6B8A\u5B57\u7B26\u65F6\u9700\u8981\u8FDB\u884C\u7F16\u7801</p><p data-v-a0b4d3f4>\u2022 \u7F16\u7801\u6240\u6709\u5B57\u7B26\u53EF\u4EE5\u7528\u4E8E\u9690\u85CF\u5185\u5BB9\u6216\u7ED5\u8FC7\u67D0\u4E9B\u8FC7\u6EE4\u5668</p></div></div><div class="bg-card rounded-lg p-6" data-v-a0b4d3f4><h3 class="text-lg font-semibold mb-4" data-v-a0b4d3f4>\u7F16\u7801\u793A\u4F8B</h3><div class="space-y-4" data-v-a0b4d3f4><div data-v-a0b4d3f4><h4 class="font-medium text-sm mb-1" data-v-a0b4d3f4>1. HTML \u6807\u7B7E\u7F16\u7801</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-a0b4d3f4><div class="p-3 bg-muted rounded-lg" data-v-a0b4d3f4><p class="text-xs text-muted-foreground mb-1" data-v-a0b4d3f4>\u539F\u59CB:</p><code class="text-xs" data-v-a0b4d3f4>&lt;script&gt;alert(&#39;XSS&#39;)&lt;/script&gt;</code></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-a0b4d3f4><p class="text-xs text-muted-foreground mb-1" data-v-a0b4d3f4>\u7F16\u7801:</p><code class="text-xs" data-v-a0b4d3f4>&amp;lt;script&amp;gt;alert(&amp;apos;XSS&amp;apos;)&amp;lt;/script&amp;gt;</code></div></div></div><div data-v-a0b4d3f4><h4 class="font-medium text-sm mb-1" data-v-a0b4d3f4>2. \u7279\u6B8A\u7B26\u53F7\u7F16\u7801</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-a0b4d3f4><div class="p-3 bg-muted rounded-lg" data-v-a0b4d3f4><p class="text-xs text-muted-foreground mb-1" data-v-a0b4d3f4>\u539F\u59CB:</p><code class="text-xs" data-v-a0b4d3f4>\xA9 2024 Company\xAE - All rights reserved.</code></div><div class="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg" data-v-a0b4d3f4><p class="text-xs text-muted-foreground mb-1" data-v-a0b4d3f4>\u7F16\u7801:</p><code class="text-xs" data-v-a0b4d3f4>&amp;copy; 2024 Company&amp;reg; - All rights reserved.</code></div></div></div></div></div><div class="bg-card rounded-lg p-6" data-v-a0b4d3f4><h3 class="text-lg font-semibold mb-4" data-v-a0b4d3f4>\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-a0b4d3f4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/html-decode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-a0b4d3f4${_scopeId}><p class="font-medium group-hover:text-primary" data-v-a0b4d3f4${_scopeId}>HTML \u89E3\u7801</p><p class="text-xs text-muted-foreground" data-v-a0b4d3f4${_scopeId}>HTML \u5B9E\u4F53\u89E3\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "HTML \u89E3\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "HTML \u5B9E\u4F53\u89E3\u7801")
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
            _push2(`<div data-v-a0b4d3f4${_scopeId}><p class="font-medium group-hover:text-primary" data-v-a0b4d3f4${_scopeId}>URL \u7F16\u7801</p><p class="text-xs text-muted-foreground" data-v-a0b4d3f4${_scopeId}>URL \u767E\u5206\u6BD4\u7F16\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "URL \u7F16\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "URL \u767E\u5206\u6BD4\u7F16\u7801")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/unicode-convert",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Type), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div data-v-a0b4d3f4${_scopeId}><p class="font-medium group-hover:text-primary" data-v-a0b4d3f4${_scopeId}>Unicode \u8F6C\u6362</p><p class="text-xs text-muted-foreground" data-v-a0b4d3f4${_scopeId}>Unicode \u7F16\u7801\u8F6C\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Type), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Unicode \u8F6C\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "Unicode \u7F16\u7801\u8F6C\u6362")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/html-encode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const htmlEncode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a0b4d3f4"]]);

export { htmlEncode as default };
//# sourceMappingURL=html-encode-CV5FXfQD.mjs.map
