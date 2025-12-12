import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { c as categories } from "./categories-guMUDMNS.js";
import { t as tools } from "./tools-CG9LGULA.js";
import { e as addRecentTool, f as useSeoMeta, n as navigateTo } from "../server.mjs";
import { _ as _sfc_main$1 } from "./ToolCard-GG_LcR18.js";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
import "./nuxt-link-Bb2DNygF.js";
import "lucide-vue-next";
import "./categoryColors-w89ks1yN.js";
const _sfc_main = {
  __name: "gmsm-tools",
  __ssrInlineRender: true,
  setup(__props) {
    categories.find((c) => c.id === "crypto");
    const algorithms = [
      {
        id: "sm2",
        name: "SM2",
        description: "基于椭圆曲线的非对称加密算法，用于数字签名、密钥交换和加密",
        standard: "GM/T 0003-2012",
        usage: "数字签名、密钥协商、数据加密",
        strength: "256位安全强度，等效3072位RSA"
      },
      {
        id: "sm3",
        name: "SM3",
        description: "密码杂凑算法，输出256位哈希值，用于数据完整性验证",
        standard: "GM/T 0004-2012",
        usage: "数字签名、消息认证、随机数生成",
        strength: "256位输出，抗碰撞攻击"
      },
      {
        id: "sm4",
        name: "SM4",
        description: "分组密码算法，128位密钥和分组长度，用于数据加密",
        standard: "GM/T 0002-2012",
        usage: "数据加密、文件加密、通信加密",
        strength: "128位密钥，等效AES-128"
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
      title: "国密算法工具箱 - SM2/SM3/SM4在线工具",
      description: "免费在线国密算法工具集，支持SM2非对称加密、SM3哈希、SM4对称加密等中国商用密码算法。",
      keywords: ["国密", "SM2", "SM3", "SM4", "商用密码", "GM/T"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">国密算法工具箱</h1><p class="text-muted-foreground max-w-3xl">中国国家密码算法（SM系列）在线工具集，包括SM2、SM3、SM4等商用密码算法，满足国内密码应用需求。</p></div><div class="flex flex-wrap gap-2 mb-8"><!--[-->`);
      ssrRenderList(algorithms, (algo) => {
        _push(`<button class="${ssrRenderClass([{
          "bg-primary text-primary-foreground": selectedAlgorithm.value === algo.id,
          "bg-muted text-muted-foreground hover:bg-muted/80": selectedAlgorithm.value !== algo.id
        }, "px-4 py-2 rounded-lg transition-colors"])}">${ssrInterpolate(algo.name)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (selectedAlgorithm.value === "sm2") {
        _push(`<div class="space-y-6"><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">SM2密钥对生成</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><button class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"> 生成SM2密钥对 </button><button${ssrIncludeBooleanAttr(!sm2PublicKey.value || !sm2PrivateKey.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50"> 下载密钥文件 </button></div>`);
        if (sm2PublicKey.value || sm2PrivateKey.value) {
          _push(`<div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block">SM2公钥</label><textarea readonly class="w-full h-32 p-3 border border-border rounded-lg bg-muted/50 font-mono text-xs">${ssrInterpolate(sm2PublicKey.value)}</textarea></div><div><label class="text-sm font-medium mb-2 block">SM2私钥</label><textarea readonly class="w-full h-32 p-3 border border-border rounded-lg bg-muted/50 font-mono text-xs">${ssrInterpolate(sm2PrivateKey.value)}</textarea></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">SM2加密/解密</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">公钥（加密用）</label><textarea placeholder="输入PEM格式的SM2公钥" class="w-full h-24 p-3 border border-border rounded-lg bg-background font-mono text-sm">${ssrInterpolate(sm2EncryptKey.value)}</textarea></div><div><label class="text-sm font-medium mb-2 block">原始数据</label><textarea placeholder="输入要加密的数据..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none">${ssrInterpolate(sm2PlainText.value)}</textarea></div><div class="flex gap-4"><button${ssrIncludeBooleanAttr(!sm2EncryptKey.value || !sm2PlainText.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50"> SM2加密 </button><button${ssrIncludeBooleanAttr(!sm2PrivateKey.value || !sm2CipherText.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 disabled:opacity-50"> SM2解密 </button></div>`);
        if (sm2CipherText.value) {
          _push(`<div><label class="text-sm font-medium mb-2 block">加密结果（Base64）</label><textarea readonly class="w-full h-32 p-3 border border-border rounded-lg bg-muted/50 font-mono text-sm">${ssrInterpolate(sm2CipherText.value)}</textarea></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedAlgorithm.value === "sm3") {
        _push(`<div class="space-y-6"><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">SM3哈希计算</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">输入数据</label><textarea placeholder="输入要计算SM3哈希的数据..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none">${ssrInterpolate(sm3Input.value)}</textarea><div class="mt-2 text-sm text-muted-foreground"> 长度：${ssrInterpolate(sm3Input.value.length)} 字符 </div></div><div class="flex gap-4"><button${ssrIncludeBooleanAttr(!sm3Input.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50"> 计算SM3哈希 </button><button class="px-6 py-2 border border-border rounded-lg hover:bg-muted"> 清空 </button></div>`);
        if (sm3Result.value) {
          _push(`<div><label class="text-sm font-medium mb-2 block">SM3哈希值（256位/64字符）</label><div class="p-4 border border-border rounded-lg bg-muted/50"><div class="font-mono text-lg break-all">${ssrInterpolate(sm3Result.value)}</div></div><div class="mt-2 flex gap-2"><button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20"> 复制 </button><button class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20">${ssrInterpolate(toUpperCase.value ? "转小写" : "转大写")}</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">批量SM3计算</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">批量输入（每行一条）</label><textarea placeholder="输入多条数据，每行一条..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none">${ssrInterpolate(sm3BatchInput.value)}</textarea></div><button${ssrIncludeBooleanAttr(!sm3BatchInput.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50"> 批量计算 </button>`);
        if (sm3BatchResults.value.length > 0) {
          _push(`<div class="overflow-x-auto"><table class="w-full text-sm border border-border"><thead class="bg-muted/50"><tr><th class="border border-border px-4 py-2">输入</th><th class="border border-border px-4 py-2">SM3哈希</th><th class="border border-border px-4 py-2">操作</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(sm3BatchResults.value, (item, index) => {
            _push(`<tr class="border-b border-border"><td class="border border-border px-4 py-2 max-w-xs truncate">${ssrInterpolate(item.input)}</td><td class="border border-border px-4 py-2 font-mono text-xs">${ssrInterpolate(item.hash.substring(0, 20))}...</td><td class="border border-border px-4 py-2"><button class="text-primary hover:text-primary/80"> 复制 </button></td></tr>`);
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
        _push(`<div class="space-y-6"><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">SM4加密/解密</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div><label class="text-sm font-medium mb-2 block">密钥（128位/16字节）</label><div class="flex gap-2"><input${ssrRenderAttr("value", sm4Key.value)} type="password" placeholder="输入16字节密钥" class="flex-1 px-3 py-2 border border-border rounded-lg bg-background"><button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80"> 生成 </button></div><div class="mt-2 text-xs text-muted-foreground"> 密钥长度：${ssrInterpolate(sm4Key.value.length)} 字节 (需要16字节) </div></div><div><label class="text-sm font-medium mb-2 block">工作模式</label><select class="w-full px-3 py-2 border border-border rounded-lg bg-background"><option value="ECB"${ssrIncludeBooleanAttr(Array.isArray(sm4Mode.value) ? ssrLooseContain(sm4Mode.value, "ECB") : ssrLooseEqual(sm4Mode.value, "ECB")) ? " selected" : ""}>ECB (电子密码本)</option><option value="CBC"${ssrIncludeBooleanAttr(Array.isArray(sm4Mode.value) ? ssrLooseContain(sm4Mode.value, "CBC") : ssrLooseEqual(sm4Mode.value, "CBC")) ? " selected" : ""}>CBC (密码块链接)</option><option value="CFB"${ssrIncludeBooleanAttr(Array.isArray(sm4Mode.value) ? ssrLooseContain(sm4Mode.value, "CFB") : ssrLooseEqual(sm4Mode.value, "CFB")) ? " selected" : ""}>CFB (密码反馈)</option><option value="OFB"${ssrIncludeBooleanAttr(Array.isArray(sm4Mode.value) ? ssrLooseContain(sm4Mode.value, "OFB") : ssrLooseEqual(sm4Mode.value, "OFB")) ? " selected" : ""}>OFB (输出反馈)</option><option value="CTR"${ssrIncludeBooleanAttr(Array.isArray(sm4Mode.value) ? ssrLooseContain(sm4Mode.value, "CTR") : ssrLooseEqual(sm4Mode.value, "CTR")) ? " selected" : ""}>CTR (计数器)</option></select></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div><label class="text-sm font-medium mb-2 block">原始数据</label><textarea placeholder="输入要加密的数据..." class="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none">${ssrInterpolate(sm4PlainText.value)}</textarea></div><div><label class="text-sm font-medium mb-2 block">加密结果（Base64）</label><textarea placeholder="加密结果..." class="w-full h-32 p-3 border border-border rounded-lg bg-muted/50 resize-none" readonly>${ssrInterpolate(sm4CipherText.value)}</textarea></div></div><div class="flex gap-4 mt-6"><button${ssrIncludeBooleanAttr(!sm4Key.value || sm4Key.value.length !== 16 || !sm4PlainText.value) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50"> SM4加密 </button><button${ssrIncludeBooleanAttr(!sm4Key.value || sm4Key.value.length !== 16 || !sm4CipherText.value) ? " disabled" : ""} class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 disabled:opacity-50"> SM4解密 </button></div></div><div class="border border-border rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">SM4文件加密</h3><div class="space-y-4"><div><label class="text-sm font-medium mb-2 block">选择文件</label><input type="file" class="w-full px-3 py-2 border border-border rounded-lg bg-background"></div>`);
        if (sm4FileName.value) {
          _push(`<div><p class="text-sm text-muted-foreground">已选择文件：${ssrInterpolate(sm4FileName.value)}</p><p class="text-sm text-muted-foreground">文件大小：${ssrInterpolate(sm4FileSize.value)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button${ssrIncludeBooleanAttr(!sm4File.value || !sm4Key.value || sm4Key.value.length !== 16) ? " disabled" : ""} class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50"> 加密文件 </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-border rounded-lg p-6 mb-8"><h3 class="text-lg font-semibold mb-4">国密算法介绍</h3><div class="space-y-6"><!--[-->`);
      ssrRenderList(algorithms, (algo) => {
        _push(`<div class="border-l-2 border-primary pl-4"><h4 class="font-medium text-primary mb-2">${ssrInterpolate(algo.name)}</h4><p class="text-sm text-muted-foreground mb-2">${ssrInterpolate(algo.description)}</p><div class="text-sm space-y-1"><div><strong>标准编号：</strong>${ssrInterpolate(algo.standard)}</div><div><strong>主要用途：</strong>${ssrInterpolate(algo.usage)}</div><div><strong>安全强度：</strong>${ssrInterpolate(algo.strength)}</div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=gmsm-tools-nUcmzW9f.js.map
