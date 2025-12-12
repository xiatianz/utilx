import { mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderVNode, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { MessageSquare, Bot, Sparkles, Zap, Search, ExternalLink, Code, Cpu, ImageIcon, Palette, Video, FileVideo, Music, Mic, BarChart, TrendingUp, Brain, Globe } from 'lucide-vue-next';
import { u as useSEO } from './useSEO-DTxZRwJC.mjs';
import { f as useSeoMeta } from './server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const chatTools = [
      {
        name: "ChatGPT",
        description: "OpenAI\u5F00\u53D1\u7684\u5F3A\u5927\u5BF9\u8BDDAI\uFF0C\u652F\u6301\u591A\u79CD\u4EFB\u52A1",
        company: "OpenAI",
        url: "https://chat.openai.com",
        icon: Bot,
        bgColor: "#10a37f",
        iconColor: "white"
      },
      {
        name: "Claude",
        description: "Anthropic\u5F00\u53D1\u7684AI\u52A9\u624B\uFF0C\u64C5\u957F\u5199\u4F5C\u548C\u5206\u6790",
        company: "Anthropic",
        url: "https://claude.ai",
        icon: Sparkles,
        bgColor: "#cc785c",
        iconColor: "white"
      },
      {
        name: "Gemini",
        description: "Google\u5F00\u53D1\u7684\u4E0B\u4E00\u4EE3AI\u6A21\u578B",
        company: "Google",
        url: "https://gemini.google.com",
        icon: Zap,
        bgColor: "#4285f4",
        iconColor: "white"
      },
      {
        name: "Perplexity",
        description: "AI\u9A71\u52A8\u7684\u641C\u7D22\u5F15\u64CE\u548C\u77E5\u8BC6\u52A9\u624B",
        company: "Perplexity",
        url: "https://www.perplexity.ai",
        icon: Search,
        bgColor: "#2d2d2d",
        iconColor: "white"
      },
      {
        name: "Poe",
        description: "Quora\u63A8\u51FA\u7684AI\u804A\u5929\u5E73\u53F0\uFF0C\u96C6\u6210\u591A\u4E2A\u6A21\u578B",
        company: "Quora",
        url: "https://poe.com",
        icon: MessageSquare,
        bgColor: "#8b5cf6",
        iconColor: "white"
      },
      {
        name: "Character.AI",
        description: "\u4E0E\u5404\u79CDAI\u89D2\u8272\u5BF9\u8BDD\u7684\u5E73\u53F0",
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
        description: "GitHub\u4E0EOpenAI\u5408\u4F5C\u5F00\u53D1\u7684AI\u7F16\u7A0B\u52A9\u624B",
        company: "GitHub",
        url: "https://github.com/features/copilot",
        icon: Code,
        bgColor: "#24292e",
        iconColor: "white"
      },
      {
        name: "Cursor",
        description: "AI\u9A71\u52A8\u7684\u4EE3\u7801\u7F16\u8F91\u5668",
        company: "Cursor",
        url: "https://cursor.sh",
        icon: Cpu,
        bgColor: "#007acc",
        iconColor: "white"
      },
      {
        name: "Codeium",
        description: "\u514D\u8D39\u7684AI\u4EE3\u7801\u5B8C\u6210\u5DE5\u5177",
        company: "Codeium",
        url: "https://codeium.com",
        icon: Sparkles,
        bgColor: "#00d4aa",
        iconColor: "white"
      },
      {
        name: "Tabnine",
        description: "AI\u4EE3\u7801\u81EA\u52A8\u5B8C\u6210\u5DE5\u5177",
        company: "Tabnine",
        url: "https://www.tabnine.com",
        icon: Code,
        bgColor: "#9146ff",
        iconColor: "white"
      },
      {
        name: "Replit Ghostwriter",
        description: "Replit\u5E73\u53F0\u7684AI\u7F16\u7A0B\u52A9\u624B",
        company: "Replit",
        url: "https://replit.com/site/ghostwriter",
        icon: Zap,
        bgColor: "#f26207",
        iconColor: "white"
      },
      {
        name: "Amazon CodeWhisperer",
        description: "Amazon\u63A8\u51FA\u7684AI\u7F16\u7A0B\u52A9\u624B",
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
        description: "\u9AD8\u8D28\u91CF\u7684\u827A\u672F\u98CE\u683C\u56FE\u50CF\u751F\u6210",
        company: "Midjourney",
        url: "https://www.midjourney.com",
        icon: Palette,
        bgColor: "#000000",
        iconColor: "white"
      },
      {
        name: "DALL\xB7E 3",
        description: "OpenAI\u7684\u56FE\u50CF\u751F\u6210\u6A21\u578B",
        company: "OpenAI",
        url: "https://openai.com/dall-e-3",
        icon: ImageIcon,
        bgColor: "#10a37f",
        iconColor: "white"
      },
      {
        name: "Stable Diffusion",
        description: "\u5F00\u6E90\u7684\u56FE\u50CF\u751F\u6210\u6A21\u578B",
        company: "Stability AI",
        url: "https://stability.ai",
        icon: Sparkles,
        bgColor: "#8b5cf6",
        iconColor: "white"
      },
      {
        name: "Adobe Firefly",
        description: "Adobe\u63A8\u51FA\u7684\u521B\u610FAI\u56FE\u50CF\u751F\u6210",
        company: "Adobe",
        url: "https://firefly.adobe.com",
        icon: Palette,
        bgColor: "#ff0000",
        iconColor: "white"
      },
      {
        name: "Canva Magic Studio",
        description: "Canva\u7684AI\u8BBE\u8BA1\u5DE5\u5177\u5957\u4EF6",
        company: "Canva",
        url: "https://www.canva.com/magic-studio",
        icon: ImageIcon,
        bgColor: "#00c4cc",
        iconColor: "white"
      },
      {
        name: "Leonardo.AI",
        description: "\u6E38\u620F\u548C\u521B\u610F\u8D44\u4EA7\u7684AI\u751F\u6210\u5E73\u53F0",
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
        description: "AI\u89C6\u9891\u7F16\u8F91\u548C\u751F\u6210\u5E73\u53F0",
        company: "Runway",
        url: "https://runwayml.com",
        icon: FileVideo,
        bgColor: "#000000",
        iconColor: "white"
      },
      {
        name: "Pika Labs",
        description: "AI\u89C6\u9891\u751F\u6210\u548C\u7F16\u8F91\u5DE5\u5177",
        company: "Pika",
        url: "https://pika.art",
        icon: Video,
        bgColor: "#f97316",
        iconColor: "white"
      },
      {
        name: "Sora",
        description: "OpenAI\u7684\u89C6\u9891\u751F\u6210\u6A21\u578B",
        company: "OpenAI",
        url: "https://openai.com/sora",
        icon: FileVideo,
        bgColor: "#10a37f",
        iconColor: "white"
      },
      {
        name: "HeyGen",
        description: "AI\u89C6\u9891\u751F\u6210\u548C\u865A\u62DF\u4EBA\u5E73\u53F0",
        company: "HeyGen",
        url: "https://www.heygen.com",
        icon: Video,
        bgColor: "#6366f1",
        iconColor: "white"
      },
      {
        name: "Synthesia",
        description: "AI\u865A\u62DF\u4EBA\u89C6\u9891\u751F\u6210\u5E73\u53F0",
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
        description: "AI\u97F3\u4E50\u751F\u6210\u5E73\u53F0",
        company: "Suno",
        url: "https://suno.com",
        icon: Music,
        bgColor: "#f59e0b",
        iconColor: "white"
      },
      {
        name: "Udio",
        description: "AI\u97F3\u4E50\u521B\u4F5C\u5E73\u53F0",
        company: "Udio",
        url: "https://www.udio.com",
        icon: Mic,
        bgColor: "#8b5cf6",
        iconColor: "white"
      },
      {
        name: "ElevenLabs",
        description: "AI\u8BED\u97F3\u5408\u6210\u548C\u514B\u9686",
        company: "ElevenLabs",
        url: "https://elevenlabs.io",
        icon: Mic,
        bgColor: "#000000",
        iconColor: "white"
      },
      {
        name: "Descript",
        description: "AI\u97F3\u9891\u548C\u89C6\u9891\u7F16\u8F91\u5DE5\u5177",
        company: "Descript",
        url: "https://www.descript.com",
        icon: Mic,
        bgColor: "#238636",
        iconColor: "white"
      },
      {
        name: "LALAL.AI",
        description: "AI\u97F3\u8F68\u5206\u79BB\u5DE5\u5177",
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
        description: "ChatGPT\u7684\u9AD8\u7EA7\u6570\u636E\u5206\u6790\u529F\u80FD",
        company: "OpenAI",
        url: "https://chat.openai.com",
        icon: BarChart,
        bgColor: "#10a37f",
        iconColor: "white"
      },
      {
        name: "Julius AI",
        description: "AI\u6570\u636E\u5206\u6790\u52A9\u624B",
        company: "Julius",
        url: "https://julius.ai",
        icon: TrendingUp,
        bgColor: "#3b82f6",
        iconColor: "white"
      },
      {
        name: "Polymer",
        description: "AI\u9A71\u52A8\u7684\u6570\u636E\u53EF\u89C6\u5316\u5E73\u53F0",
        company: "Polymer",
        url: "https://www.polymersearch.com",
        icon: BarChart,
        bgColor: "#8b5cf6",
        iconColor: "white"
      },
      {
        name: "Akkio",
        description: "\u65E0\u9700\u4EE3\u7801\u7684AI\u6570\u636E\u5206\u6790\u5E73\u53F0",
        company: "Akkio",
        url: "https://www.akkio.com",
        icon: Brain,
        bgColor: "#06b6d4",
        iconColor: "white"
      }
    ];
    const chinaTools = [
      {
        name: "\u6587\u5FC3\u4E00\u8A00",
        description: "\u767E\u5EA6\u63A8\u51FA\u7684\u77E5\u8BC6\u589E\u5F3A\u5927\u8BED\u8A00\u6A21\u578B",
        company: "\u767E\u5EA6",
        url: "https://yiyan.baidu.com",
        icon: Brain,
        bgColor: "#2932e1",
        iconColor: "white"
      },
      {
        name: "\u901A\u4E49\u5343\u95EE",
        description: "\u963F\u91CC\u5DF4\u5DF4\u7684\u8D85\u5927\u89C4\u6A21\u8BED\u8A00\u6A21\u578B",
        company: "\u963F\u91CC\u5DF4\u5DF4",
        url: "https://tongyi.aliyun.com",
        icon: Sparkles,
        bgColor: "#ff6a00",
        iconColor: "white"
      },
      {
        name: "Kimi Chat",
        description: "\u6708\u4E4B\u6697\u9762\u63A8\u51FA\u7684\u667A\u80FD\u52A9\u624B",
        company: "\u6708\u4E4B\u6697\u9762",
        url: "https://kimi.moonshot.cn",
        icon: Bot,
        bgColor: "#7c3aed",
        iconColor: "white"
      },
      {
        name: "\u667A\u8C31\u6E05\u8A00",
        description: "\u667A\u8C31AI\u7684\u5BF9\u8BDD\u6A21\u578B",
        company: "\u667A\u8C31AI",
        url: "https://chatglm.cn",
        icon: MessageSquare,
        bgColor: "#10b981",
        iconColor: "white"
      },
      {
        name: "\u8BAF\u98DE\u661F\u706B",
        description: "\u79D1\u5927\u8BAF\u98DE\u7684\u8BA4\u77E5\u5927\u6A21\u578B",
        company: "\u79D1\u5927\u8BAF\u98DE",
        url: "https://xinghuo.xfyun.cn",
        icon: Zap,
        bgColor: "#f59e0b",
        iconColor: "white"
      },
      {
        name: "\u5B57\u8282\u8C46\u5305",
        description: "\u5B57\u8282\u8DF3\u52A8\u7684AI\u52A9\u624B",
        company: "\u5B57\u8282\u8DF3\u52A8",
        url: "https://www.doubao.com",
        icon: Bot,
        bgColor: "#000000",
        iconColor: "white"
      },
      {
        name: "\u817E\u8BAF\u6DF7\u5143",
        description: "\u817E\u8BAF\u7684\u5927\u8BED\u8A00\u6A21\u578B",
        company: "\u817E\u8BAF",
        url: "https://hunyuan.tencent.com",
        icon: Sparkles,
        bgColor: "#00d4aa",
        iconColor: "white"
      },
      {
        name: "\u5546\u91CF",
        description: "\u5546\u6C64\u79D1\u6280\u7684\u65E5\u65E5\u65B0\u5927\u6A21\u578B",
        company: "\u5546\u6C64\u79D1\u6280",
        url: "https://sensechat.sensetime.com",
        icon: MessageSquare,
        bgColor: "#ff6b6b",
        iconColor: "white"
      }
    ];
    useSeoMeta({
      title: "AI\u5DE5\u5177\u5BFC\u822A - \u4E3B\u6D41AI\u5E94\u7528\u5927\u5168",
      description: "\u641C\u96C6\u56FD\u5185\u5916\u4E3B\u6D41AI\u5E94\u7528\uFF0C\u5305\u62ECChatGPT\u3001Claude\u3001\u6587\u5FC3\u4E00\u8A00\u7B49\u5927\u6A21\u578B\uFF0C\u4EE5\u53CA\u4EE3\u7801\u52A9\u624B\u3001\u56FE\u50CF\u751F\u6210\u7B49AI\u5DE5\u5177\uFF0C\u4E3A\u5F00\u53D1\u8005\u548C\u521B\u4F5C\u8005\u63D0\u4F9B\u4FBF\u6377\u5165\u53E3\u3002",
      keywords: ["AI\u5DE5\u5177", "\u4EBA\u5DE5\u667A\u80FD", "\u5927\u6A21\u578B", "ChatGPT", "Claude", "\u6587\u5FC3\u4E00\u8A00", "AI\u5BFC\u822A"]
    });
    const { setPageTitle } = useSEO();
    setPageTitle("AI\u5DE5\u5177\u5BFC\u822A");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">AI\u5DE5\u5177\u5BFC\u822A</h1><p class="text-muted-foreground max-w-3xl">\u641C\u96C6\u56FD\u5185\u5916\u4E3B\u6D41AI\u5E94\u7528\uFF0C\u5305\u62EC\u5927\u6A21\u578B\u3001\u4EE3\u7801\u52A9\u624B\u3001\u56FE\u50CF\u751F\u6210\u7B49\uFF0C\u4E3A\u5F00\u53D1\u8005\u548C\u521B\u4F5C\u8005\u63D0\u4F9B\u4FBF\u6377\u7684AI\u5DE5\u5177\u5165\u53E3\u3002</p></div><div class="space-y-12"><section id="chat" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` \u5BF9\u8BDD\u52A9\u624B </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(chatTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> \u8BBF\u95EE `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="code" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Code), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` \u4EE3\u7801\u52A9\u624B </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(codeTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> \u8BBF\u95EE `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="image" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` \u56FE\u50CF\u751F\u6210 </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(imageTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> \u8BBF\u95EE `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="video" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Video), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` \u89C6\u9891\u5904\u7406 </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(videoTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> \u8BBF\u95EE `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="audio" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Music), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` \u97F3\u9891\u5904\u7406 </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(audioTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> \u8BBF\u95EE `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="data" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(BarChart), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` \u6570\u636E\u5206\u6790 </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(dataTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> \u8BBF\u95EE `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="china" class="scroll-mt-20"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Globe), { class: "w-6 h-6 text-primary" }, null, _parent));
      _push(` \u56FD\u5185AI </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(chinaTools, (tool) => {
        _push(`<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ backgroundColor: tool.bgColor })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tool.icon), {
          class: "w-6 h-6",
          style: { color: tool.iconColor }
        }, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(tool.name)}</h3><p class="text-sm text-muted-foreground mb-3">${ssrInterpolate(tool.description)}</p><div class="flex items-center justify-between"><span class="text-xs px-2 py-1 bg-muted rounded-full">${ssrInterpolate(tool.company)}</span><a${ssrRenderAttr("href", tool.url)} target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1"> \u8BBF\u95EE `);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent));
        _push(`</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section></div><div class="mt-16 pt-8 border-t border-border"><div class="text-center text-sm text-muted-foreground"><p>\u672C\u9875\u9762\u6536\u96C6\u7684AI\u5DE5\u5177\u4EC5\u4F9B\u53C2\u8003\uFF0C\u5B9E\u9645\u4F7F\u7528\u8BF7\u9075\u5FAA\u5404\u5E73\u53F0\u7684\u670D\u52A1\u6761\u6B3E</p><p class="mt-2">\u5982\u9700\u6DFB\u52A0\u65B0\u7684AI\u5DE5\u5177\uFF0C\u8BF7\u901A\u8FC7\u53CD\u9988\u6E20\u9053\u8054\u7CFB\u6211\u4EEC</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/ai/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bf1HToVO.mjs.map
