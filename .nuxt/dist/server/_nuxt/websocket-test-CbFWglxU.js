import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, watch, nextTick, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderVNode, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta, e as addRecentTool } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { Settings, Loader2, X, Wifi, Send, Info, MessageSquare, ArrowDown, Trash2, Inbox, Download, HelpCircle, ChevronUp, Server, Radio, Zap, FileText, Terminal, Hash, Clock, Shield, Lock, Code, Globe } from "lucide-vue-next";
import { t as tools } from "./tools-CG9LGULA.js";
import { c as categories } from "./categories-guMUDMNS.js";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "websocket-test",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "WebSocket测试工具 - 在线WebSocket连接调试工具",
      meta: [
        { name: "description", content: "专业的在线WebSocket测试工具，支持实时连接测试、消息收发、心跳检测等功能，帮助开发者快速调试WebSocket应用，纯前端实现，数据安全可靠。" },
        { name: "keywords", content: "WebSocket测试,WebSocket客户端,实时通信,WebSocket调试,WSS,WS,在线工具" }
      ]
    });
    const tool = tools.find((t) => t.id === "websocket-test");
    categories.find((c) => c.id === "network");
    const wsUrl = ref("wss://echo.websocket.org");
    const protocol = ref("");
    const messageType = ref("text");
    const messageContent = ref("");
    const isConnected = ref(false);
    const connecting = ref(false);
    const autoScroll = ref(true);
    const messages = ref([]);
    const connectionInfo = ref(null);
    ref(null);
    const messageContainer = ref(null);
    const isSeoContentVisible = ref(true);
    const iconMap = {
      Globe,
      Code,
      Lock,
      Shield,
      Clock,
      Hash,
      Terminal,
      FileText,
      Zap,
      Radio,
      Server,
      Wifi
    };
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "websocket-test"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "http-client"),
        tools.find((t) => t.id === "api-doc"),
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "base64-encoder")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    watch(messages, () => {
      if (autoScroll.value) {
        nextTick(() => {
          scrollToBottom();
        });
      }
    }, { deep: true });
    const scrollToBottom = () => {
      if (messageContainer.value) {
        messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
      }
    };
    const getStatusClass = () => {
      if (connecting.value) return "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400";
      if (isConnected.value) return "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400";
      return "bg-muted text-muted-foreground";
    };
    const getStatusText = () => {
      if (connecting.value) return "连接中";
      if (isConnected.value) return "已连接";
      return "未连接";
    };
    const getStatusIcon = () => {
      if (connecting.value) return Loader2;
      if (isConnected.value) return Wifi;
      return X;
    };
    const getMessagePlaceholder = () => {
      switch (messageType.value) {
        case "json":
          return '{"type": "message", "content": "Hello WebSocket!"}';
        case "binary":
          return "二进制数据内容";
        default:
          return "输入要发送的消息...";
      }
    };
    const formatJsonMessage = (data) => {
      try {
        return JSON.stringify(data, null, 2);
      } catch {
        return data;
      }
    };
    const formatTime = (time) => {
      return time.toLocaleTimeString();
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">WebSocket测试工具 - 在线WebSocket连接调试工具</h1><p class="text-muted-foreground">一款专业的在线WebSocket测试工具。支持实时连接测试、消息收发、心跳检测等功能，帮助开发者快速调试WebSocket应用，纯前端实现，数据安全可靠。</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 连接配置 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">WebSocket URL</label><input${ssrRenderAttr("value", wsUrl.value)} type="text" placeholder="wss://echo.websocket.org" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(isConnected.value) ? " disabled" : ""}></div><div><label class="block text-sm font-medium text-foreground mb-2">子协议（可选）</label><input${ssrRenderAttr("value", protocol.value)} type="text" placeholder="chat" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(isConnected.value) ? " disabled" : ""}></div><div><label class="block text-sm font-medium text-foreground mb-2">快速示例</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(isConnected.value) ? " disabled" : ""}><option value="">选择示例...</option><option value="echo">WebSocket Echo</option><option value="test">测试服务器</option></select></div><button${ssrIncludeBooleanAttr(!wsUrl.value || connecting.value) ? " disabled" : ""} class="${ssrRenderClass([isConnected.value ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : "bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed", "w-full py-2 px-4 rounded-md transition-colors flex items-center justify-center"])}">`);
      if (connecting.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else if (isConnected.value) {
        _push(ssrRenderComponent(unref(X), { class: "h-5 w-5 mr-2" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Wifi), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(connecting.value ? "连接中..." : isConnected.value ? "断开连接" : "连接")}</button><div class="${ssrRenderClass([getStatusClass(), "flex items-center justify-between p-3 rounded-lg"])}"><span class="text-sm font-medium">${ssrInterpolate(getStatusText())}</span>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getStatusIcon()), { class: "h-5 w-5" }, null), _parent);
      _push(`</div></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Send), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 发送消息 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">消息类型</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="text"${ssrIncludeBooleanAttr(Array.isArray(messageType.value) ? ssrLooseContain(messageType.value, "text") : ssrLooseEqual(messageType.value, "text")) ? " selected" : ""}>文本</option><option value="json"${ssrIncludeBooleanAttr(Array.isArray(messageType.value) ? ssrLooseContain(messageType.value, "json") : ssrLooseEqual(messageType.value, "json")) ? " selected" : ""}>JSON</option><option value="binary"${ssrIncludeBooleanAttr(Array.isArray(messageType.value) ? ssrLooseContain(messageType.value, "binary") : ssrLooseEqual(messageType.value, "binary")) ? " selected" : ""}>二进制</option></select></div><div><label class="block text-sm font-medium text-foreground mb-2">消息内容</label><textarea${ssrRenderAttr("placeholder", getMessagePlaceholder())} class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm resize-none" rows="4">${ssrInterpolate(messageContent.value)}</textarea></div><button${ssrIncludeBooleanAttr(!isConnected.value || !messageContent.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Send), { class: "h-5 w-5 mr-2" }, null, _parent));
      _push(` 发送消息 </button><div class="flex items-center justify-between"><span class="text-sm text-muted-foreground">心跳检测</span><button${ssrIncludeBooleanAttr(!isConnected.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> 发送 Ping </button></div></div></div>`);
      if (connectionInfo.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
        _push(ssrRenderComponent(unref(Info), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` 连接信息 </h2><div class="space-y-3 text-sm"><div class="flex justify-between"><span class="text-muted-foreground">连接时间:</span><span class="font-medium text-foreground">${ssrInterpolate(connectionInfo.value.connectedAt)}</span></div><div class="flex justify-between"><span class="text-muted-foreground">持续时间:</span><span class="font-medium text-foreground">${ssrInterpolate(connectionInfo.value.duration)}</span></div><div class="flex justify-between"><span class="text-muted-foreground">发送消息:</span><span class="font-medium text-foreground">${ssrInterpolate(connectionInfo.value.messagesSent)}</span></div><div class="flex justify-between"><span class="text-muted-foreground">接收消息:</span><span class="font-medium text-foreground">${ssrInterpolate(connectionInfo.value.messagesReceived)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-6"><div class="bg-card border border-border rounded-lg p-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold flex items-center">`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` 消息记录 </h2><div class="flex space-x-2"><button class="${ssrRenderClass([
        "px-3 py-1 text-sm rounded-md transition-colors",
        autoScroll.value ? "bg-primary/10 text-primary" : "bg-muted hover:bg-muted/80 text-muted-foreground"
      ])}">`);
      _push(ssrRenderComponent(unref(ArrowDown), { class: "h-4 w-4 mr-1" }, null, _parent));
      _push(` 自动滚动 </button><button class="px-3 py-1 text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-md transition-colors">`);
      _push(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4 mr-1" }, null, _parent));
      _push(` 清空 </button></div></div></div><div class="bg-card border border-border rounded-lg p-6 h-[600px] overflow-y-auto">`);
      if (messages.value.length === 0) {
        _push(`<div class="flex flex-col items-center justify-center h-full text-muted-foreground">`);
        _push(ssrRenderComponent(unref(Inbox), { class: "h-16 w-16 mb-4" }, null, _parent));
        _push(`<p class="text-lg">暂无消息</p><p class="text-sm mt-2">连接 WebSocket 后开始发送和接收消息</p></div>`);
      } else {
        _push(`<div class="space-y-4"><!--[-->`);
        ssrRenderList(messages.value, (msg, index) => {
          _push(`<div class="${ssrRenderClass([{ "flex-row-reverse space-x-reverse": msg.type === "sent" }, "flex items-start space-x-3"])}"><div class="flex-shrink-0"><div class="${ssrRenderClass([msg.type === "sent" ? "bg-primary/10" : "bg-green-100 dark:bg-green-900/20", "w-8 h-8 rounded-full flex items-center justify-center"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(msg.type === "sent" ? unref(Send) : unref(Download)), {
            class: ["h-4 w-4", msg.type === "sent" ? "text-primary" : "text-green-600 dark:text-green-400"]
          }, null), _parent);
          _push(`</div></div><div class="flex-1 min-w-0"><div class="flex items-center space-x-2 mb-1"><span class="${ssrRenderClass([msg.type === "sent" ? "text-primary" : "text-green-600 dark:text-green-400", "text-sm font-medium"])}">${ssrInterpolate(msg.type === "sent" ? "发送" : "接收")}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(formatTime(msg.timestamp))}</span>`);
          if (msg.messageType) {
            _push(`<span class="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">${ssrInterpolate(msg.messageType.toUpperCase())}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="${ssrRenderClass([msg.type === "sent" ? "bg-primary/5 dark:bg-primary/10" : "bg-green-50 dark:bg-green-900/10", "p-3 rounded-lg text-sm"])}">`);
          if (msg.messageType === "json") {
            _push(`<pre class="whitespace-pre-wrap">${ssrInterpolate(formatJsonMessage(msg.data))}</pre>`);
          } else {
            _push(`<p class="whitespace-pre-wrap break-all">${ssrInterpolate(msg.data)}</p>`);
          }
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "折叠内容" : "展开内容")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 WebSocket？ </h2><p class="text-muted-foreground mb-4"> WebSocket 是一种在单个TCP连接上进行全双工通信的协议。WebSocket使得客户端和服务器之间的数据交换变得更加简单， 允许服务端主动向客户端推送数据。在WebSocket API中，浏览器和服务器只需要完成一次握手， 两者之间就直接可以创建持久性的连接，并进行双向数据传输。 </p><p class="text-muted-foreground mb-6"> 相较于传统的HTTP轮询方式，WebSocket具有更低的延迟和更高的效率，特别适合需要实时通信的应用场景， 如在线聊天、实时数据推送、股票行情、在线游戏等。使用WebSocket测试工具可以帮助开发者快速验证WebSocket服务器的功能， 调试通信问题，确保应用的稳定性和可靠性。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>输入WebSocket服务器的URL地址（支持ws://和wss://协议）</li><li>可选填子协议，如chat、soap等</li><li>点击&quot;连接&quot;按钮建立WebSocket连接</li><li>连接成功后，可以选择消息类型（文本、JSON、二进制）并发送消息</li><li>实时查看服务器返回的消息和连接状态</li><li>使用心跳检测功能保持连接活跃</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>实时通信</strong>: 支持WebSocket的实时双向通信，立即查看消息收发情况</li><li><strong>多种消息格式</strong>: 支持文本、JSON和二进制消息的发送和接收</li><li><strong>连接状态监控</strong>: 实时显示连接状态、连接时长和消息统计</li><li><strong>心跳检测</strong>: 支持发送Ping帧保持连接活跃，防止连接超时</li><li><strong>消息历史记录</strong>: 保存完整的消息收发记录，支持自动滚动和清空功能</li><li><strong>安全可靠</strong>: 纯前端实现，所有数据在本地处理，确保隐私安全</li><li><strong>快速示例</strong>: 内置常用WebSocket服务器示例，方便快速测试</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">WebSocket 和 HTTP 轮询有什么区别？</h3><p class="text-muted-foreground mt-1"> WebSocket是全双工通信协议，客户端和服务器可以同时发送数据，而HTTP轮询需要客户端不断发起请求。 WebSocket连接建立后可以持久保持，减少了握手开销，延迟更低，效率更高。 对于需要频繁通信的应用，WebSocket是更好的选择。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么 WebSocket 连接失败？</h3><p class="text-muted-foreground mt-1"> 可能的原因包括：URL格式错误、服务器不支持WebSocket、防火墙阻止连接、SSL证书问题（对于wss://）等。 请检查URL是否正确，确保服务器正常运行，如果是wss连接，检查证书是否有效。 </p></div><div><h3 class="text-lg font-semibold text-foreground">如何保持 WebSocket 连接活跃？</h3><p class="text-muted-foreground mt-1"> 可以使用心跳检测机制，定期发送Ping帧，服务器会响应Pong帧。 本工具提供了&quot;发送Ping&quot;按钮，可以手动发送心跳。在实际应用中，建议实现自动心跳机制， 例如每30秒发送一次心跳，防止连接因超时而断开。 </p></div><div><h3 class="text-lg font-semibold text-foreground">WebSocket 支持哪些消息类型？</h3><p class="text-muted-foreground mt-1"> WebSocket协议支持两种消息类型：文本消息和二进制消息。 文本消息可以包含任何UTF-8编码的文本，如普通字符串、JSON数据等。 二进制消息可以传输任何二进制数据，如图片、音频、视频、Protocol Buffers等。 本工具提供了便捷的选项来发送不同类型的消息。 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" })),
                  createVNode("span", { class: "font-medium text-foreground" }, toDisplayString(relatedTool.name), 1)
                ]),
                createVNode("p", { class: "text-sm text-muted-foreground line-clamp-2" }, toDisplayString(relatedTool.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/websocket-test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=websocket-test-CbFWglxU.js.map
