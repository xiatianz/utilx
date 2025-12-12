import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { Info, Calendar, ArrowRight, Globe, Calculator } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { f as useSeoMeta } from './server.mjs';
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
  __name: "timestamp-convert",
  __ssrInlineRender: true,
  setup(__props) {
    const timestampSeconds = ref("");
    const timestampMilliseconds = ref("");
    const timestampDate = ref("");
    const timestampTime = ref("");
    const selectedDateTime = ref("");
    const selectedTimestampSeconds = ref("");
    const selectedTimestampMilliseconds = ref("");
    const batchTimestamps = ref("");
    const batchResults = ref([]);
    const batchCopied = ref(false);
    const currentTimestamp = computed(() => Math.floor(Date.now() / 1e3));
    const currentDateTime = computed(() => (/* @__PURE__ */ new Date()).toLocaleString("zh-CN"));
    const timezone = computed(() => Intl.DateTimeFormat().resolvedOptions().timeZone);
    const utcOffset = computed(() => {
      const offset = (/* @__PURE__ */ new Date()).getTimezoneOffset();
      const hours = Math.floor(Math.abs(offset) / 60);
      const minutes = Math.abs(offset) % 60;
      const sign = offset >= 0 ? "+" : "-";
      return `UTC${sign}${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    });
    useSeoMeta({
      title: "\u65F6\u95F4\u6233\u8F6C\u6362\u5668 - \u5728\u7EBFUnix\u65F6\u95F4\u6233\u8F6C\u6362\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u65F6\u95F4\u6233\u8F6C\u6362\u5DE5\u5177\uFF0C\u652F\u6301Unix\u65F6\u95F4\u6233\u4E0E\u65E5\u671F\u65F6\u95F4\u76F8\u4E92\u8F6C\u6362\uFF0C\u63D0\u4F9B\u6279\u91CF\u8F6C\u6362\u548C\u5E38\u7528\u65F6\u95F4\u6233\u53C2\u8003\u3002",
      keywords: ["timestamp", "unix", "\u65F6\u95F4\u6233", "\u65F6\u95F4\u8F6C\u6362", "\u5728\u7EBF\u5DE5\u5177", "utc", "gmt"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u65F6\u95F4\u6233\u8F6C\u6362\u5668</h1><p class="text-muted-foreground">Unix\u65F6\u95F4\u6233\u4E0E\u65E5\u671F\u65F6\u95F4\u76F8\u4E92\u8F6C\u6362\uFF0C\u652F\u6301\u591A\u79CD\u65F6\u95F4\u683C\u5F0F</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u65F6\u95F4\u6233\u8F6C\u6362</h2><div class="mb-4 p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">\u5F53\u524D\u65F6\u95F4\u6233</div><div class="text-2xl font-mono">${ssrInterpolate(currentTimestamp.value)}</div><div class="text-sm text-muted-foreground mt-1">${ssrInterpolate(currentDateTime.value)}</div></div><div class="space-y-3"><label class="text-sm font-medium">Unix \u65F6\u95F4\u6233\uFF08\u79D2\uFF09</label><input${ssrRenderAttr("value", timestampSeconds.value)} type="number" placeholder="\u8F93\u516510\u4F4D\u65F6\u95F4\u6233" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div><div class="space-y-3"><label class="text-sm font-medium">Unix \u65F6\u95F4\u6233\uFF08\u6BEB\u79D2\uFF09</label><input${ssrRenderAttr("value", timestampMilliseconds.value)} type="number" placeholder="\u8F93\u516513\u4F4D\u65F6\u95F4\u6233" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></div>`);
      if (timestampDate.value) {
        _push(`<div class="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg"><div class="text-sm text-muted-foreground mb-2">\u8F6C\u6362\u7ED3\u679C</div><div class="text-lg font-semibold">${ssrInterpolate(timestampDate.value)}</div><div class="text-sm text-muted-foreground mt-1">${ssrInterpolate(timestampTime.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u5FEB\u6377\u64CD\u4F5C</h3><div class="grid grid-cols-2 gap-3"><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"> \u5F53\u524D\u65F6\u95F4 </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> \u4ECA\u65E5\u96F6\u70B9 </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> \u4ECA\u65E523:59 </button><button class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"> \u6628\u5929\u6B64\u65F6 </button></div></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u65E5\u671F\u65F6\u95F4\u9009\u62E9</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u9009\u62E9\u65E5\u671F\u65F6\u95F4</label><input${ssrRenderAttr("value", selectedDateTime.value)} type="datetime-local" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"></div>`);
      if (_ctx.selectedTimestamp) {
        _push(`<div class="mt-4 space-y-3"><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">Unix \u65F6\u95F4\u6233\uFF08\u79D2\uFF09</div><div class="font-mono">${ssrInterpolate(selectedTimestampSeconds.value)}</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">Unix \u65F6\u95F4\u6233\uFF08\u6BEB\u79D2\uFF09</div><div class="font-mono">${ssrInterpolate(selectedTimestampMilliseconds.value)}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u65F6\u533A\u4FE1\u606F</h3><div class="space-y-3"><div class="flex justify-between items-center"><span class="text-sm">\u672C\u5730\u65F6\u533A</span><span class="text-sm font-mono">${ssrInterpolate(timezone.value)}</span></div><div class="flex justify-between items-center"><span class="text-sm">UTC \u504F\u79FB</span><span class="text-sm font-mono">${ssrInterpolate(utcOffset.value)}</span></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u5E38\u7528\u65F6\u95F4\u6233\u53C2\u8003</h3><div class="space-y-2 text-sm"><div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer"><span>1970-01-01 00:00:00 UTC</span><span class="font-mono">0</span></div><div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer"><span>1970-01-02 00:00:00 UTC</span><span class="font-mono">86400</span></div><div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer"><span>1970-01-31 00:00:00 UTC</span><span class="font-mono">2592000</span></div><div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer"><span>1971-01-01 00:00:00 UTC</span><span class="font-mono">31536000</span></div><div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer"><span>2000-01-01 00:00:00 UTC</span><span class="font-mono">946684800</span></div><div class="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer"><span class="text-muted-foreground">\u5F53\u524D</span><span class="font-mono">${ssrInterpolate(currentTimestamp.value)}</span></div></div></div></div></div><div class="mt-8 bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6279\u91CF\u8F6C\u6362</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div><div class="flex items-center justify-between mb-2"><label class="text-sm font-medium">\u65F6\u95F4\u6233\u5217\u8868\uFF08\u6BCF\u884C\u4E00\u4E2A\uFF09</label><button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div><textarea placeholder="\u8F93\u5165\u591A\u4E2A\u65F6\u95F4\u6233\uFF0C\u6BCF\u884C\u4E00\u4E2A
\u4F8B\u5982\uFF1A
1609459200
1609545600" class="w-full h-40 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm">${ssrInterpolate(batchTimestamps.value)}</textarea><button class="mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"> \u8F6C\u6362 </button></div><div><div class="flex items-center justify-between mb-2"><label class="text-sm font-medium">\u8F6C\u6362\u7ED3\u679C</label>`);
      if (batchResults.value.length > 0) {
        _push(`<button class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">${ssrInterpolate(batchCopied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="h-40 p-3 bg-muted rounded-lg overflow-auto">`);
      if (batchResults.value.length === 0) {
        _push(`<div class="text-muted-foreground text-sm"> \u8F6C\u6362\u7ED3\u679C\u5C06\u663E\u793A\u5728\u8FD9\u91CC </div>`);
      } else {
        _push(`<div class="space-y-1 text-sm"><!--[-->`);
        ssrRenderList(batchResults.value, (result, index) => {
          _push(`<div class="flex justify-between items-center p-1 hover:bg-background rounded"><span class="font-mono">${ssrInterpolate(result.timestamp)}</span><span>${ssrInterpolate(result.date)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5173\u4E8E\u65F6\u95F4\u6233 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u4EC0\u4E48\u662F Unix \u65F6\u95F4\u6233\uFF1F</h4><p>Unix \u65F6\u95F4\u6233\uFF08Unix Timestamp\uFF09\u662F\u4E00\u79CD\u65F6\u95F4\u8868\u793A\u65B9\u5F0F\uFF0C\u5B9A\u4E49\u4E3A\u4ECE\u683C\u6797\u5A01\u6CBB\u65F6\u95F41970\u5E741\u67081\u65E500:00:00\u5F00\u59CB\u6240\u7ECF\u8FC7\u7684\u79D2\u6570\u3002</p></div><div><h4 class="font-medium text-foreground mb-2">\u65F6\u95F4\u6233\u683C\u5F0F</h4><ul class="list-disc list-inside space-y-1 ml-4"><li><strong>10\u4F4D\u65F6\u95F4\u6233</strong>\uFF1A\u7CBE\u786E\u5230\u79D2\uFF0C\u5982\uFF1A1609459200</li><li><strong>13\u4F4D\u65F6\u95F4\u6233</strong>\uFF1A\u7CBE\u786E\u5230\u6BEB\u79D2\uFF0C\u5982\uFF1A1609459200000</li><li><strong>JavaScript\u65F6\u95F4\u6233</strong>\uFF1A\u901A\u5E38\u662F13\u4F4D\u6BEB\u79D2\u65F6\u95F4\u6233</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u5E38\u89C1\u7528\u9014</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u7A0B\u5E8F\u5F00\u53D1\u548C\u8C03\u8BD5</li><li>\u6570\u636E\u5E93\u65F6\u95F4\u5B57\u6BB5\u5B58\u50A8</li><li>API \u63A5\u53E3\u65F6\u95F4\u53C2\u6570</li><li>\u7F13\u5B58\u5931\u6548\u65F6\u95F4\u8BBE\u7F6E</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/cron-parser",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Cron \u89E3\u6790\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u89E3\u6790\u5B9A\u65F6\u4EFB\u52A1\u8868\u8FBE\u5F0F</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Cron \u89E3\u6790\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u89E3\u6790\u5B9A\u65F6\u4EFB\u52A1\u8868\u8FBE\u5F0F")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/timezone-converter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Globe), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u65F6\u533A\u8F6C\u6362</p><p class="text-xs text-muted-foreground"${_scopeId}>\u5168\u7403\u65F6\u533A\u65F6\u95F4\u8F6C\u6362</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Globe), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u65F6\u533A\u8F6C\u6362"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u5168\u7403\u65F6\u533A\u65F6\u95F4\u8F6C\u6362")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/date-calculator",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calculator), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u65E5\u671F\u8BA1\u7B97\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u65E5\u671F\u52A0\u51CF\u8BA1\u7B97</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calculator), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u65E5\u671F\u8BA1\u7B97\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u65E5\u671F\u52A0\u51CF\u8BA1\u7B97")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/timestamp-convert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=timestamp-convert-nFKmb8eH.mjs.map
