import { mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderVNode, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { MessageSquare, Bot, Sparkles, Zap, Search, ExternalLink, Code, Cpu, ImageIcon, Palette, Video, FileVideo, Music, Mic, BarChart, TrendingUp, Brain, Globe } from "lucide-vue-next";
import { u as useSEO } from "./useSEO-DTxZRwJC.js";
import { f as useSeoMeta } from "../server.mjs";
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const chatTools = [
      {
        name: "ChatGPT",
        description: "OpenAI开发的强大对话AI，支持多种任务",
        company: "OpenAI",
        url: "https://chat.openai.com",
        icon: Bot,
        bgColor: "#10a37f",
        iconColor: "white"
      },
      {
        name: "Claude",
        description: "Anthropic开发的AI助手，擅长写作和分析",
        company: "Anthropic",
        url: "https://claude.ai",
        icon: Sparkles,
        bgColor: "#cc785c",
        iconColor: "white"
      },
      {
        name: "Gemini",
        description: "Google开发的下一代AI模型",
        company: "Google",
        url: "https://gemini.google.com",
        icon: Zap,
        bgColor: "#4285f4",
        iconColor: "white"
      },
      {
        name: "Perplexity",
        description: "AI驱动的搜索引擎和知识助手",
        company: "Perplexity",
        url: "https://www.perplexity.ai",
        icon: Search,
        bgColor: "#2d2d2d",
        iconColor: "white"
      },
      {
        name: "Poe",
        description: "Quora推出的AI聊天平台，集成多个模型",
        company: "Quora",
        url: "https://poe.com",
        icon: MessageSquare,
        bgColor: "#8b5cf6",
        iconColor: "white"
      },
      {
        name: "Character.AI",
        description: "与各种AI角色对话的平台",
        company: "Character.AI",
        url: "https://character.ai",
        icon: Bot,
        bgColor: "#ff6b6b",
        iconColor: "white"
      }
    ];
    const codeTools = [
      {
        name: "GitHub Copilot",
        description: "GitHub与OpenAI合作开发的AI编程助手",
        company: "GitHub",
        url: "https://github.com/features/copilot",
        icon: Code,
        bgColor: "#24292e",
        iconColor: "white"
      },
      {
        name: "Cursor",
        description: "AI驱动的代码编辑器",
        company: "Cursor",
        url: "https://cursor.sh",
        icon: Cpu,
        bgColor: "#007acc",
        iconColor: "white"
      },
      {
        name: "Codeium",
        description: "免费的AI代码完成工具",
        company: "Codeium",
        url: "https://codeium.com",
        icon: Sparkles,
        bgColor: "#00d4aa",
        iconColor: "white"
      },
      {
        name: "Tabnine",
        description: "AI代码自动完成工具",
        company: "Tabnine",
        url: "https://www.tabnine.com",
        icon: Code,
        bgColor: "#9146ff",
        iconColor: "white"
      },
      {
        name: "Replit Ghostwriter",
        description: "Replit平台的AI编程助手",
        company: "Replit",
        url: "https://replit.com/site/ghostwriter",
        icon: Zap,
        bgColor: "#f26207",
        iconColor: "white"
      },
      {
        name: "Amazon CodeWhisperer",
        description: "Amazon推出的AI编程助手",
        company: "Amazon",
        url: "https://aws.amazon.com/codewhisperer",
        icon: Code,
        bgColor: "#ff9900",
        iconColor: "white"
      }
    ];
    const imageTools = [
      {
        name: "Midjourney",
        description: "高质量的艺术风格图像生成",
        company: "Midjourney",
        url: "https://www.midjourney.com",
        icon: Palette,
        bgColor: "#000000",
        iconColor: "white"
      },
      {
        name: "DALL·E 3",
        description: "OpenAI的图像生成模型",
        company: "OpenAI",
        url: "https://openai.com/dall-e-3",
        icon: ImageIcon,
        bgColor: "#10a37f",
        iconColor: "white"
      },
      {
        name: "Stable Diffusion",
        description: "开源的图像生成模型",
        company: "Stability AI",
        url: "https://stability.ai",
        icon: Sparkles,
        bgColor: "#8b5cf6",
        iconColor: "white"
      },
      {
        name: "Adobe Firefly",
        description: "Adobe推出的创意AI图像生成",
        company: "Adobe",
        url: "https://firefly.adobe.com",
        icon: Palette,
        bgColor: "#ff0000",
        iconColor: "white"
      },
      {
        name: "Canva Magic Studio",
        description: "Canva的AI设计工具套件",
        company: "Canva",
        url: "https://www.canva.com/magic-studio",
        icon: ImageIcon,
        bgColor: "#00c4cc",
        iconColor: "white"
      },
      {
        name: "Leonardo.AI",
        description: "游戏和创意资产的AI生成平台",
        company: "Leonardo.AI",
        url: "https://leonardo.ai",
        icon: Palette,
        bgColor: "#6366f1",
        iconColor: "white"
      }
    ];
    const videoTools = [
      {
        name: "RunwayML",
        description: "AI视频编辑和生成平台",
        company: "Runway",
        url: "https://runwayml.com",
        icon: FileVideo,
        bgColor: "#000000",
        iconColor: "white"
      },
      {
        name: "Pika Labs",
        description: "AI视频生成和编辑工具",
        company: "Pika",
        url: "https://pika.art",
        icon: Video,
        bgColor: "#f97316",
        iconColor: "white"
      },
      {
        name: "Sora",
        description: "OpenAI的视频生成模型",
        company: "OpenAI",
        url: "https://openai.com/sora",
        icon: FileVideo,
        bgColor: "#10a37f",
        iconColor: "white"
      },
      {
        name: "HeyGen",
        description: "AI视频生成和虚拟人平台",
        company: "HeyGen",
        url: "https://www.heygen.com",
        icon: Video,
        bgColor: "#6366f1",
        iconColor: "white"
      },
      {
        name: "Synthesia",
        description: "AI虚拟人视频生成平台",
        company: "Synthesia",
        url: "https://www.synthesia.io",
        icon: FileVideo,
        bgColor: "#7c3aed",
        iconColor: "white"
      }
    ];
    const audioTools = [
      {
        name: "Suno AI",
        description: "AI音乐生成平台",
        company: "Suno",
        url: "https://suno.com",
        icon: Music,
        bgColor: "#f59e0b",
        iconColor: "white"
      },
      {
        name: "Udio",
        description: "AI音乐创作平台",
        company: "Udio",
        url: "https://www.udio.com",
        icon: Mic,
        bgColor: "#8b5cf6",
        iconColor: "white"
      },
      {
        name: "ElevenLabs",
        description: "AI语音合成和克隆",
        company: "ElevenLabs",
        url: "https://elevenlabs.io",
        icon: Mic,
        bgColor: "#000000",
        iconColor: "white"
      },
      {
        name: "Descript",
        description: "AI音频和视频编辑工具",
        company: "Descript",
        url: "https://www.descript.com",
        icon: Mic,
        bgColor: "#238636",
        iconColor: "white"
      },
      {
        name: "LALAL.AI",
        description: "AI音轨分离工具",
        company: "LALAL.AI",
        url: "https://www.lalal.ai",
        icon: Music,
        bgColor: "#ff6b6b",
        iconColor: "white"
      }
    ];
    const dataTools = [
      {
        name: "ChatGPT Data Analysis",
        description: "ChatGPT的高级数据分析功能",
        company: "OpenAI",
        url: "https://chat.openai.com",
        icon: BarChart,
        bgColor: "#10a37f",
        iconColor: "white"
      },
      {
        name: "Julius AI",
        description: "AI数据分析助手",
        company: "Julius",
        url: "https://julius.ai",
        icon: TrendingUp,
        bgColor: "#3b82f6",
        iconColor: "white"
      },
      {
        name: "Polymer",
        description: "AI驱动的数据可视化平台",
        company: "Polymer",
        url: "https://www.polymersearch.com",
        icon: BarChart,
        bgColor: "#8b5cf6",
        iconColor: "white"
      },
      {
        name: "Akkio",
        description: "无需代码的AI数据分析平台",
        company: "Akkio",
        url: "https://www.akkio.com",
        icon: Brain,
        bgColor: "#06b6d4",
        iconColor: "white"
      }
    ];
    const chinaTools = [
      {
        name: "文心一言",
        description: "百度推出的知识增强大语言模型",
        company: "百度",
        url: "https://yiyan.baidu.com",
        icon: Brain,
        bgColor: "#2932e1",
        iconColor: "white"
      },
      {
        name: "通义千问",
        description: "阿里巴巴的超大规模语言模型",
        company: "阿里巴巴",
        url: "https://tongyi.aliyun.com",
        icon: Sparkles,
        bgColor: "#ff6a00",
        iconColor: "white"
      },
      {
        name: "Kimi Chat",
        description: "月之暗面推出的智能助手",
        company: "月之暗面",
        url: "https://kimi.moonshot.cn",
        icon: Bot,
        bgColor: "#7c3aed",
        iconColor: "white"
      },
      {
        name: "智谱清言",
        description: "智谱AI的对话模型",
        company: "智谱AI",
        url: "https://chatglm.cn",
        icon: MessageSquare,
        bgColor: "#10b981",
        iconColor: "white"
      },
      {
        name: "讯飞星火",
        description: "科大讯飞的认知大模型",
        company: "科大讯飞",
        url: "https://xinghuo.xfyun.cn",
        icon: Zap,
        bgColor: "#f59e0b",
        iconColor: "white"
      },
      {
        name: "字节豆包",
        description: "字节跳动的AI助手",
        company: "字节跳动",
        url: "https://www.doubao.com",
        icon: Bot,
        bgColor: "#000000",
        iconColor: "white"
      },
      {
        name: "腾讯混元",
        description: "腾讯的大语言模型",
        company: "腾讯",
        url: "https://hunyuan.tencent.com",
        icon: Sparkles,
        bgColor: "#00d4aa",
        iconColor: "white"
      },
      {
        name: "商量",
        description: "商汤科技的日日新大模型",
        company: "商汤科技",
        url: "https://sensechat.sensetime.com",
        icon: MessageSquare,
        bgColor: "#ff6b6b",
        iconColor: "white"
      }
    ];
    useSeoMeta({
      title: "AI工具导航 - 主流AI应用大全",
      description: "搜集国内外主流AI应用，包括ChatGPT、Claude、文心一言等大模型，以及代码助手、图像生成等AI工具，为开发者和创作者提供便捷入口。",
      keywords: ["AI工具", "人工智能", "大模型", "ChatGPT", "Claude", "文心一言", "AI导航"]
    });
    const { setPageTitle } = useSEO();
    setPageTitle("AI工具导航");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">AI工具导航</h1><p class="text-muted-foreground max-w-3xl">搜集国内外主流AI应用，包括大模型、代码助手、图像生成等，为开发者和创作者提供便捷的AI工具入口。</p></div><div class="space-y-12"><section id="chat" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` 对话助手 </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(chatTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> 访问 `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="code" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Code), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` 代码助手 </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(codeTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> 访问 `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="image" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` 图像生成 </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(imageTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> 访问 `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="video" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Video), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` 视频处理 </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(videoTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> 访问 `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="audio" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Music), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` 音频处理 </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(audioTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> 访问 `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="data" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(BarChart), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` 数据分析 </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(dataTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> 访问 `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="china" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Globe), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` 国内AI </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(chinaTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> 访问 `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section></div><div class="mt-16 pt-8 border-t border-border"><div class="text-center text-sm text-muted-foreground"><p>本页面收集的AI工具仅供参考，实际使用请遵循各平台的服务条款</p><p class="mt-2">如需添加新的AI工具，请通过反馈渠道联系我们</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/ai/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Bf1HToVO.js.map
