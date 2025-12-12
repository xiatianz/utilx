import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from 'vue/server-renderer';
import { c as categories } from './categories-guMUDMNS.mjs';
import { t as tools } from './tools-CG9LGULA.mjs';
import { e as addRecentTool, f as useSeoMeta, n as navigateTo } from './server.mjs';
import { _ as _sfc_main$1 } from './ToolCard-GG_LcR18.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import './nuxt-link-Bb2DNygF.mjs';
import 'lucide-vue-next';
import './categoryColors-w89ks1yN.mjs';

const _sfc_main = {
  __name: "gmsm-tools",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const algorithms = [
      {
        id: "sm2",
        name: "SM2",
        description: "\u57FA\u4E8E\u692D\u5706\u66F2\u7EBF\u7684\u975E\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u7528\u4E8E\u6570\u5B57\u7B7E\u540D\u3001\u5BC6\u94A5\u4EA4\u6362\u548C\u52A0\u5BC6",
        standard: "GM/T 0003-2012",
        usage: "\u6570\u5B57\u7B7E\u540D\u3001\u5BC6\u94A5\u534F\u5546\u3001\u6570\u636E\u52A0\u5BC6",
        strength: "256\u4F4D\u5B89\u5168\u5F3A\u5EA6\uFF0C\u7B49\u65483072\u4F4DRSA"
      },
      {
        id: "sm3",
        name: "SM3",
        description: "\u5BC6\u7801\u6742\u51D1\u7B97\u6CD5\uFF0C\u8F93\u51FA256\u4F4D\u54C8\u5E0C\u503C\uFF0C\u7528\u4E8E\u6570\u636E\u5B8C\u6574\u6027\u9A8C\u8BC1",
        standard: "GM/T 0004-2012",
        usage: "\u6570\u5B57\u7B7E\u540D\u3001\u6D88\u606F\u8BA4\u8BC1\u3001\u968F\u673A\u6570\u751F\u6210",
        strength: "256\u4F4D\u8F93\u51FA\uFF0C\u6297\u78B0\u649E\u653B\u51FB"
      },
      {
        id: "sm4",
        name: "SM4",
        description: "\u5206\u7EC4\u5BC6\u7801\u7B97\u6CD5\uFF0C128\u4F4D\u5BC6\u94A5\u548C\u5206\u7EC4\u957F\u5EA6\uFF0C\u7528\u4E8E\u6570\u636E\u52A0\u5BC6",
        standard: "GM/T 0002-2012",
        usage: "\u6570\u636E\u52A0\u5BC6\u3001\u6587\u4EF6\u52A0\u5BC6\u3001\u901A\u4FE1\u52A0\u5BC6",
        strength: "128\u4F4D\u5BC6\u94A5\uFF0C\u7B49\u6548AES-128"
      }
    ];
    const selectedAlgorithm = ref("sm2");
    const toUpperCase = ref(true);
    const sm2PublicKey = ref("");
    const sm2PrivateKey = ref("");
    const sm2EncryptKey = ref("");
    const sm2PlainText = ref("");
    const sm2CipherText = ref("");
    const sm3Input = ref("");
    const sm3Result = ref("");
    const sm3BatchInput = ref("");
    const sm3BatchResults = ref([]);
    const sm4Key = ref("");
    const sm4Mode = ref("ECB");
    const sm4PlainText = ref("");
    const sm4CipherText = ref("");
    const sm4File = ref(null);
    const sm4FileName = ref("");
    const sm4FileSize = ref("");
    ref(null);
    const relatedTools = tools.filter(
      (tool) => tool.category === "crypto" && tool.id !== "gmsm-tools"
    ).slice(0, 4);
    const formatViewCount = (count) => {
      if (count >= 1e4) {
        return `${(count / 1e4).toFixed(1)}w+`;
      } else if (count >= 1e3) {
        return `${(count / 1e3).toFixed(1)}k+`;
      }
      return `${count}`;
    };
    const handleToolSelect = (tool) => {
      const toolUrl = `/tools/${tool.id}/`;
      navigateTo(toolUrl);
      addRecentTool(tool.id);
    };
    addRecentTool("gmsm-tools");
    useSeoMeta({
      title: "\u56FD\u5BC6\u7B97\u6CD5\u5DE5\u5177\u7BB1 - SM2/SM3/SM4\u5728\u7EBF\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u56FD\u5BC6\u7B97\u6CD5\u5DE5\u5177\u96C6\uFF0C\u652F\u6301SM2\u975E\u5BF9\u79F0\u52A0\u5BC6\u3001SM3\u54C8\u5E0C\u3001SM4\u5BF9\u79F0\u52A0\u5BC6\u7B49\u4E2D\u56FD\u5546\u7528\u5BC6\u7801\u7B97\u6CD5\u3002",
      keywords: ["\u56FD\u5BC6", "SM2", "SM3", "SM4", "\u5546\u7528\u5BC6\u7801", "GM/T"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u56FD\u5BC6\u7B97\u6CD5\u5DE5\u5177\u7BB1</h1><p class="text-muted-foreground max-w-3xl">\u4E2D\u56FD\u56FD\u5BB6\u5BC6\u7801\u7B97\u6CD5\uFF08SM\u7CFB\u5217\uFF09\u5728\u7EBF\u5DE5\u5177\u96C6\uFF0C\u5305\u62ECSM2\u3001SM3\u3001SM4\u7B49\u5546\u7528\u5BC6\u7801\u7B97\u6CD5\uFF0C\u6EE1\u8DB3\u56FD\u5185\u5BC6\u7801\u5E94\u7528\u9700\u6C42\u3002</p></div><div class="flex flex-wrap gap-2 mb-8"><!--[-->`);
      ssrRenderList(algorithms, (algo) => {
        _push(`<button class="${ssrRenderClass([{
          "bg-primary text-primary-foreground": selectedAlgorithm.value === algo.id,
          "bg-muted text-muted-foreground hover:bg-muted/80": selectedAlgorithm.value !== algo.id
        }, "px-4 py-2 rounded-lg transition-colors"])}">${ssrInterpolate(algo.name)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (selectedAlgorithm.value === "sm2") {
        _push(`<div class="space-y-6"><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">SM2\u5BC6\u94A5\u5BF9\u751F\u6210</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><button class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"> \u751F\u6210SM2\u5BC6\u94A5\u5BF9 </button><button${ssrIncludeBooleanAttr(!sm2PublicKey.value || !sm2PrivateKey.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50"> \u4E0B\u8F7D\u5BC6\u94A5\u6587\u4EF6 </button></div>`);
        if (sm2PublicKey.value || sm2PrivateKey.value) {
          _push(`<div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block">SM2\u516C\u94A5</label><textarea readonly class="w-full h-32 p-3 border border-border rounded-lg bg-muted/50 font-mono text-xs">${ssrInterpolate(sm2PublicKey.value)}</textarea></div><div><label class="text-sm font-medium mb-2 block">SM2\u79C1\u94A5</label><textarea readonly class="w-full h-32 p-3 border border-border rounded-lg bg-muted/50 font-mono text-xs">${ssrInterpolate(sm2PrivateKey.value)}</textarea></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">SM2\u52A0\u5BC6/\u89E3\u5BC6</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u516C\u94A5\uFF08\u52A0\u5BC6\u7528\uFF09</label><textarea placeholder="\u8F93\u5165PEM\u683C\u5F0F\u7684SM2\u516C\u94A5" class="w-full h-24 p-3 border border-border rounded-lg bg-background font-mono text-sm">${ssrInterpolate(sm2EncryptKey.value)}</textarea></div><div><label class="text-sm font-medium mb-2 block">\u539F\u59CB\u6570\u636E</label><textarea placeholder="\u8F93\u5165\u8981\u52A0\u5BC6\u7684\u6570\u636E..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none">${ssrInterpolate(sm2PlainText.value)}</textarea></div><div class="flex gap-4"><button${ssrIncludeBooleanAttr(!sm2EncryptKey.value || !sm2PlainText.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50"> SM2\u52A0\u5BC6 </button><button${ssrIncludeBooleanAttr(!sm2PrivateKey.value || !sm2CipherText.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 disabled:opacity-50"> SM2\u89E3\u5BC6 </button></div>`);
        if (sm2CipherText.value) {
          _push(`<div><label class="text-sm font-medium mb-2 block">\u52A0\u5BC6\u7ED3\u679C\uFF08Base64\uFF09</label><textarea readonly class="w-full h-32 p-3 border border-border rounded-lg bg-muted/50 font-mono text-sm">${ssrInterpolate(sm2CipherText.value)}</textarea></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedAlgorithm.value === "sm3") {
        _push(`<div class="space-y-6"><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">SM3\u54C8\u5E0C\u8BA1\u7B97</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u8F93\u5165\u6570\u636E</label><textarea placeholder="\u8F93\u5165\u8981\u8BA1\u7B97SM3\u54C8\u5E0C\u7684\u6570\u636E..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none">${ssrInterpolate(sm3Input.value)}</textarea><div class="mt-2 text-sm text-muted-foreground"> \u957F\u5EA6\uFF1A${ssrInterpolate(sm3Input.value.length)} \u5B57\u7B26 </div></div><div class="flex gap-4"><button${ssrIncludeBooleanAttr(!sm3Input.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50"> \u8BA1\u7B97SM3\u54C8\u5E0C </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted"> \u6E05\u7A7A </button></div>`);
        if (sm3Result.value) {
          _push(`<div><label class="text-sm font-medium mb-2 block">SM3\u54C8\u5E0C\u503C\uFF08256\u4F4D/64\u5B57\u7B26\uFF09</label><div class="p-4 border border-border rounded-lg bg-muted/50"><div class="font-mono text-lg break-all">${ssrInterpolate(sm3Result.value)}</div></div><div class="mt-2 flex gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20"> \u590D\u5236 </button><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20">${ssrInterpolate(toUpperCase.value ? "\u8F6C\u5C0F\u5199" : "\u8F6C\u5927\u5199")}</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u6279\u91CFSM3\u8BA1\u7B97</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u6279\u91CF\u8F93\u5165\uFF08\u6BCF\u884C\u4E00\u6761\uFF09</label><textarea placeholder="\u8F93\u5165\u591A\u6761\u6570\u636E\uFF0C\u6BCF\u884C\u4E00\u6761..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none">${ssrInterpolate(sm3BatchInput.value)}</textarea></div><button${ssrIncludeBooleanAttr(!sm3BatchInput.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50"> \u6279\u91CF\u8BA1\u7B97 </button>`);
        if (sm3BatchResults.value.length > 0) {
          _push(`<div class="overflow-x-auto"><table class="w-full text-sm border border-border"><thead class="bg-muted/50"><tr><th class="border border-border px-4 py-2">\u8F93\u5165</th><th class="border border-border px-4 py-2">SM3\u54C8\u5E0C</th><th class="border border-border px-4 py-2">\u64CD\u4F5C</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(sm3BatchResults.value, (item, index) => {
            _push(`<tr class="border-b border-border"><td class="border border-border px-4 py-2 max-w-xs truncate">${ssrInterpolate(item.input)}</td><td class="border border-border px-4 py-2 font-mono text-xs">${ssrInterpolate(item.hash.substring(0, 20))}...</td><td class="border border-border px-4 py-2"><button class="text-primary hover:text-primary/80"> \u590D\u5236 </button></td></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedAlgorithm.value === "sm4") {
        _push(`<div class="space-y-6"><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">SM4\u52A0\u5BC6/\u89E3\u5BC6</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div><label class="text-sm font-medium mb-2 block">\u5BC6\u94A5\uFF08128\u4F4D/16\u5B57\u8282\uFF09</label><div class="flex gap-2"><input${ssrRenderAttr("value", sm4Key.value)} type="password" placeholder="\u8F93\u516516\u5B57\u8282\u5BC6\u94A5" class="flex-1 px-3 py-2 border border-border rounded-lg bg-background"><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80"> \u751F\u6210 </button></div><div class="mt-2 text-xs text-muted-foreground"> \u5BC6\u94A5\u957F\u5EA6\uFF1A${ssrInterpolate(sm4Key.value.length)} \u5B57\u8282 (\u9700\u898116\u5B57\u8282) </div></div><div><label class="text-sm font-medium mb-2 block">\u5DE5\u4F5C\u6A21\u5F0F</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background"><option value="ECB"${ssrIncludeBooleanAttr(Array.isArray(sm4Mode.value) ? ssrLooseContain(sm4Mode.value, "ECB") : ssrLooseEqual(sm4Mode.value, "ECB")) ? " selected" : ""}>ECB (\u7535\u5B50\u5BC6\u7801\u672C)</option><option value="CBC"${ssrIncludeBooleanAttr(Array.isArray(sm4Mode.value) ? ssrLooseContain(sm4Mode.value, "CBC") : ssrLooseEqual(sm4Mode.value, "CBC")) ? " selected" : ""}>CBC (\u5BC6\u7801\u5757\u94FE\u63A5)</option><option value="CFB"${ssrIncludeBooleanAttr(Array.isArray(sm4Mode.value) ? ssrLooseContain(sm4Mode.value, "CFB") : ssrLooseEqual(sm4Mode.value, "CFB")) ? " selected" : ""}>CFB (\u5BC6\u7801\u53CD\u9988)</option><option value="OFB"${ssrIncludeBooleanAttr(Array.isArray(sm4Mode.value) ? ssrLooseContain(sm4Mode.value, "OFB") : ssrLooseEqual(sm4Mode.value, "OFB")) ? " selected" : ""}>OFB (\u8F93\u51FA\u53CD\u9988)</option><option value="CTR"${ssrIncludeBooleanAttr(Array.isArray(sm4Mode.value) ? ssrLooseContain(sm4Mode.value, "CTR") : ssrLooseEqual(sm4Mode.value, "CTR")) ? " selected" : ""}>CTR (\u8BA1\u6570\u5668)</option></select></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block">\u539F\u59CB\u6570\u636E</label><textarea placeholder="\u8F93\u5165\u8981\u52A0\u5BC6\u7684\u6570\u636E..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none">${ssrInterpolate(sm4PlainText.value)}</textarea></div><div><label class="text-sm font-medium mb-2 block">\u52A0\u5BC6\u7ED3\u679C\uFF08Base64\uFF09</label><textarea placeholder="\u52A0\u5BC6\u7ED3\u679C..." class="w-full h-32 p-3 border border-border rounded-lg bg-muted/50 resize-none" readonly>${ssrInterpolate(sm4CipherText.value)}</textarea></div></div><div class="flex gap-4 mt-6"><button${ssrIncludeBooleanAttr(!sm4Key.value || sm4Key.value.length !== 16 || !sm4PlainText.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50"> SM4\u52A0\u5BC6 </button><button${ssrIncludeBooleanAttr(!sm4Key.value || sm4Key.value.length !== 16 || !sm4CipherText.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 disabled:opacity-50"> SM4\u89E3\u5BC6 </button></div></div><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">SM4\u6587\u4EF6\u52A0\u5BC6</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">\u9009\u62E9\u6587\u4EF6</label><input type="file" class="w-full px-3 py-2 border border-border rounded-lg bg-background"></div>`);
        if (sm4FileName.value) {
          _push(`<div><p class="text-sm text-muted-foreground">\u5DF2\u9009\u62E9\u6587\u4EF6\uFF1A${ssrInterpolate(sm4FileName.value)}</p><p class="text-sm text-muted-foreground">\u6587\u4EF6\u5927\u5C0F\uFF1A${ssrInterpolate(sm4FileSize.value)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button${ssrIncludeBooleanAttr(!sm4File.value || !sm4Key.value || sm4Key.value.length !== 16) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50"> \u52A0\u5BC6\u6587\u4EF6 </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">\u56FD\u5BC6\u7B97\u6CD5\u4ECB\u7ECD</h3><div class="space-y-6"><!--[-->`);
      ssrRenderList(algorithms, (algo) => {
        _push(`<div class="border-l-2 border-primary pl-4"><h4 class="font-medium text-primary mb-2">${ssrInterpolate(algo.name)}</h4><p class="text-sm text-muted-foreground mb-2">${ssrInterpolate(algo.description)}</p><div class="text-sm space-y-1"><div><strong>\u6807\u51C6\u7F16\u53F7\uFF1A</strong>${ssrInterpolate(algo.standard)}</div><div><strong>\u4E3B\u8981\u7528\u9014\uFF1A</strong>${ssrInterpolate(algo.usage)}</div><div><strong>\u5B89\u5168\u5F3A\u5EA6\uFF1A</strong>${ssrInterpolate(algo.strength)}</div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(unref(relatedTools), (tool) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: tool.id,
          tool,
          title: tool.name,
          description: tool.description,
          category: tool.category,
          "usage-count": formatViewCount(tool.viewCount),
          icon: tool.icon,
          onSelect: handleToolSelect
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/gmsm-tools.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gmsm-tools-nUcmzW9f.mjs.map
