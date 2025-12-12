import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, nextTick, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderVNode, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
import { Settings, Loader2, X, Wifi, Send, Info, MessageSquare, ArrowDown, Trash2, Inbox, Download, HelpCircle, ChevronUp, Server, Radio, Zap, FileText, Terminal, Hash, Clock, Shield, Lock, Code, Globe } from 'lucide-vue-next';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
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
  __name: "websocket-test",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "WebSocket\u6D4B\u8BD5\u5DE5\u5177 - \u5728\u7EBFWebSocket\u8FDE\u63A5\u8C03\u8BD5\u5DE5\u5177",
      meta: [
        { name: "description", content: "\u4E13\u4E1A\u7684\u5728\u7EBFWebSocket\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u652F\u6301\u5B9E\u65F6\u8FDE\u63A5\u6D4B\u8BD5\u3001\u6D88\u606F\u6536\u53D1\u3001\u5FC3\u8DF3\u68C0\u6D4B\u7B49\u529F\u80FD\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u8C03\u8BD5WebSocket\u5E94\u7528\uFF0C\u7EAF\u524D\u7AEF\u5B9E\u73B0\uFF0C\u6570\u636E\u5B89\u5168\u53EF\u9760\u3002" },
        { name: "keywords", content: "WebSocket\u6D4B\u8BD5,WebSocket\u5BA2\u6237\u7AEF,\u5B9E\u65F6\u901A\u4FE1,WebSocket\u8C03\u8BD5,WSS,WS,\u5728\u7EBF\u5DE5\u5177" }
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
      if (connecting.value) return "\u8FDE\u63A5\u4E2D";
      if (isConnected.value) return "\u5DF2\u8FDE\u63A5";
      return "\u672A\u8FDE\u63A5";
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
          return "\u4E8C\u8FDB\u5236\u6570\u636E\u5185\u5BB9";
        default:
          return "\u8F93\u5165\u8981\u53D1\u9001\u7684\u6D88\u606F...";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">WebSocket\u6D4B\u8BD5\u5DE5\u5177 - \u5728\u7EBFWebSocket\u8FDE\u63A5\u8C03\u8BD5\u5DE5\u5177</h1><p class="text-muted-foreground">\u4E00\u6B3E\u4E13\u4E1A\u7684\u5728\u7EBFWebSocket\u6D4B\u8BD5\u5DE5\u5177\u3002\u652F\u6301\u5B9E\u65F6\u8FDE\u63A5\u6D4B\u8BD5\u3001\u6D88\u606F\u6536\u53D1\u3001\u5FC3\u8DF3\u68C0\u6D4B\u7B49\u529F\u80FD\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u8C03\u8BD5WebSocket\u5E94\u7528\uFF0C\u7EAF\u524D\u7AEF\u5B9E\u73B0\uFF0C\u6570\u636E\u5B89\u5168\u53EF\u9760\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"><div class="lg:col-span-1 space-y-6"><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Settings), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u8FDE\u63A5\u914D\u7F6E </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">WebSocket URL</label><input${ssrRenderAttr("value", wsUrl.value)} type="text" placeholder="wss://echo.websocket.org" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(isConnected.value) ? " disabled" : ""}></div><div><label class="block text-sm font-medium text-foreground mb-2">\u5B50\u534F\u8BAE\uFF08\u53EF\u9009\uFF09</label><input${ssrRenderAttr("value", protocol.value)} type="text" placeholder="chat" class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(isConnected.value) ? " disabled" : ""}></div><div><label class="block text-sm font-medium text-foreground mb-2">\u5FEB\u901F\u793A\u4F8B</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"${ssrIncludeBooleanAttr(isConnected.value) ? " disabled" : ""}><option value="">\u9009\u62E9\u793A\u4F8B...</option><option value="echo">WebSocket Echo</option><option value="test">\u6D4B\u8BD5\u670D\u52A1\u5668</option></select></div><button${ssrIncludeBooleanAttr(!wsUrl.value || connecting.value) ? " disabled" : ""} class="${ssrRenderClass([isConnected.value ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : "bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed", "w-full py-2 px-4 rounded-md transition-colors flex items-center justify-center"])}">`);
      if (connecting.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 mr-2 animate-spin" }, null, _parent));
      } else if (isConnected.value) {
        _push(ssrRenderComponent(unref(X), { class: "h-5 w-5 mr-2" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Wifi), { class: "h-5 w-5 mr-2" }, null, _parent));
      }
      _push(` ${ssrInterpolate(connecting.value ? "\u8FDE\u63A5\u4E2D..." : isConnected.value ? "\u65AD\u5F00\u8FDE\u63A5" : "\u8FDE\u63A5")}</button><div class="${ssrRenderClass([getStatusClass(), "flex items-center justify-between p-3 rounded-lg"])}"><span class="text-sm font-medium">${ssrInterpolate(getStatusText())}</span>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getStatusIcon()), { class: "h-5 w-5" }, null), _parent);
      _push(`</div></div></div><div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Send), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u53D1\u9001\u6D88\u606F </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-foreground mb-2">\u6D88\u606F\u7C7B\u578B</label><select class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"><option value="text"${ssrIncludeBooleanAttr(Array.isArray(messageType.value) ? ssrLooseContain(messageType.value, "text") : ssrLooseEqual(messageType.value, "text")) ? " selected" : ""}>\u6587\u672C</option><option value="json"${ssrIncludeBooleanAttr(Array.isArray(messageType.value) ? ssrLooseContain(messageType.value, "json") : ssrLooseEqual(messageType.value, "json")) ? " selected" : ""}>JSON</option><option value="binary"${ssrIncludeBooleanAttr(Array.isArray(messageType.value) ? ssrLooseContain(messageType.value, "binary") : ssrLooseEqual(messageType.value, "binary")) ? " selected" : ""}>\u4E8C\u8FDB\u5236</option></select></div><div><label class="block text-sm font-medium text-foreground mb-2">\u6D88\u606F\u5185\u5BB9</label><textarea${ssrRenderAttr("placeholder", getMessagePlaceholder())} class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm resize-none" rows="4">${ssrInterpolate(messageContent.value)}</textarea></div><button${ssrIncludeBooleanAttr(!isConnected.value || !messageContent.value) ? " disabled" : ""} class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Send), { class: "h-5 w-5 mr-2" }, null, _parent));
      _push(` \u53D1\u9001\u6D88\u606F </button><div class="flex items-center justify-between"><span class="text-sm text-muted-foreground">\u5FC3\u8DF3\u68C0\u6D4B</span><button${ssrIncludeBooleanAttr(!isConnected.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> \u53D1\u9001 Ping </button></div></div></div>`);
      if (connectionInfo.value) {
        _push(`<div class="bg-card border border-border rounded-lg p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
        _push(ssrRenderComponent(unref(Info), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
        _push(` \u8FDE\u63A5\u4FE1\u606F </h2><div class="space-y-3 text-sm"><div class="flex justify-between"><span class="text-muted-foreground">\u8FDE\u63A5\u65F6\u95F4:</span><span class="font-medium text-foreground">${ssrInterpolate(connectionInfo.value.connectedAt)}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u6301\u7EED\u65F6\u95F4:</span><span class="font-medium text-foreground">${ssrInterpolate(connectionInfo.value.duration)}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u53D1\u9001\u6D88\u606F:</span><span class="font-medium text-foreground">${ssrInterpolate(connectionInfo.value.messagesSent)}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u63A5\u6536\u6D88\u606F:</span><span class="font-medium text-foreground">${ssrInterpolate(connectionInfo.value.messagesReceived)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-6"><div class="bg-card border border-border rounded-lg p-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold flex items-center">`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "h-5 w-5 mr-2 text-primary" }, null, _parent));
      _push(` \u6D88\u606F\u8BB0\u5F55 </h2><div class="flex space-x-2"><button class="${ssrRenderClass([
        "px-3 py-1 text-sm rounded-md transition-colors",
        autoScroll.value ? "bg-primary/10 text-primary" : "bg-muted hover:bg-muted/80 text-muted-foreground"
      ])}">`);
      _push(ssrRenderComponent(unref(ArrowDown), { class: "h-4 w-4 mr-1" }, null, _parent));
      _push(` \u81EA\u52A8\u6EDA\u52A8 </button><button class="px-3 py-1 text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-md transition-colors">`);
      _push(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4 mr-1" }, null, _parent));
      _push(` \u6E05\u7A7A </button></div></div></div><div class="bg-card border border-border rounded-lg p-6 h-[600px] overflow-y-auto">`);
      if (messages.value.length === 0) {
        _push(`<div class="flex flex-col items-center justify-center h-full text-muted-foreground">`);
        _push(ssrRenderComponent(unref(Inbox), { class: "h-16 w-16 mb-4" }, null, _parent));
        _push(`<p class="text-lg">\u6682\u65E0\u6D88\u606F</p><p class="text-sm mt-2">\u8FDE\u63A5 WebSocket \u540E\u5F00\u59CB\u53D1\u9001\u548C\u63A5\u6536\u6D88\u606F</p></div>`);
      } else {
        _push(`<div class="space-y-4"><!--[-->`);
        ssrRenderList(messages.value, (msg, index) => {
          _push(`<div class="${ssrRenderClass([{ "flex-row-reverse space-x-reverse": msg.type === "sent" }, "flex items-start space-x-3"])}"><div class="flex-shrink-0"><div class="${ssrRenderClass([msg.type === "sent" ? "bg-primary/10" : "bg-green-100 dark:bg-green-900/20", "w-8 h-8 rounded-full flex items-center justify-center"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(msg.type === "sent" ? unref(Send) : unref(Download)), {
            class: ["h-4 w-4", msg.type === "sent" ? "text-primary" : "text-green-600 dark:text-green-400"]
          }, null), _parent);
          _push(`</div></div><div class="flex-1 min-w-0"><div class="flex items-center space-x-2 mb-1"><span class="${ssrRenderClass([msg.type === "sent" ? "text-primary" : "text-green-600 dark:text-green-400", "text-sm font-medium"])}">${ssrInterpolate(msg.type === "sent" ? "\u53D1\u9001" : "\u63A5\u6536")}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(formatTime(msg.timestamp))}</span>`);
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
      _push(`</div></div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F WebSocket\uFF1F </h2><p class="text-muted-foreground mb-4"> WebSocket \u662F\u4E00\u79CD\u5728\u5355\u4E2ATCP\u8FDE\u63A5\u4E0A\u8FDB\u884C\u5168\u53CC\u5DE5\u901A\u4FE1\u7684\u534F\u8BAE\u3002WebSocket\u4F7F\u5F97\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u6570\u636E\u4EA4\u6362\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\uFF0C \u5141\u8BB8\u670D\u52A1\u7AEF\u4E3B\u52A8\u5411\u5BA2\u6237\u7AEF\u63A8\u9001\u6570\u636E\u3002\u5728WebSocket API\u4E2D\uFF0C\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u53EA\u9700\u8981\u5B8C\u6210\u4E00\u6B21\u63E1\u624B\uFF0C \u4E24\u8005\u4E4B\u95F4\u5C31\u76F4\u63A5\u53EF\u4EE5\u521B\u5EFA\u6301\u4E45\u6027\u7684\u8FDE\u63A5\uFF0C\u5E76\u8FDB\u884C\u53CC\u5411\u6570\u636E\u4F20\u8F93\u3002 </p><p class="text-muted-foreground mb-6"> \u76F8\u8F83\u4E8E\u4F20\u7EDF\u7684HTTP\u8F6E\u8BE2\u65B9\u5F0F\uFF0CWebSocket\u5177\u6709\u66F4\u4F4E\u7684\u5EF6\u8FDF\u548C\u66F4\u9AD8\u7684\u6548\u7387\uFF0C\u7279\u522B\u9002\u5408\u9700\u8981\u5B9E\u65F6\u901A\u4FE1\u7684\u5E94\u7528\u573A\u666F\uFF0C \u5982\u5728\u7EBF\u804A\u5929\u3001\u5B9E\u65F6\u6570\u636E\u63A8\u9001\u3001\u80A1\u7968\u884C\u60C5\u3001\u5728\u7EBF\u6E38\u620F\u7B49\u3002\u4F7F\u7528WebSocket\u6D4B\u8BD5\u5DE5\u5177\u53EF\u4EE5\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u9A8C\u8BC1WebSocket\u670D\u52A1\u5668\u7684\u529F\u80FD\uFF0C \u8C03\u8BD5\u901A\u4FE1\u95EE\u9898\uFF0C\u786E\u4FDD\u5E94\u7528\u7684\u7A33\u5B9A\u6027\u548C\u53EF\u9760\u6027\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u8F93\u5165WebSocket\u670D\u52A1\u5668\u7684URL\u5730\u5740\uFF08\u652F\u6301ws://\u548Cwss://\u534F\u8BAE\uFF09</li><li>\u53EF\u9009\u586B\u5B50\u534F\u8BAE\uFF0C\u5982chat\u3001soap\u7B49</li><li>\u70B9\u51FB&quot;\u8FDE\u63A5&quot;\u6309\u94AE\u5EFA\u7ACBWebSocket\u8FDE\u63A5</li><li>\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u53EF\u4EE5\u9009\u62E9\u6D88\u606F\u7C7B\u578B\uFF08\u6587\u672C\u3001JSON\u3001\u4E8C\u8FDB\u5236\uFF09\u5E76\u53D1\u9001\u6D88\u606F</li><li>\u5B9E\u65F6\u67E5\u770B\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u6D88\u606F\u548C\u8FDE\u63A5\u72B6\u6001</li><li>\u4F7F\u7528\u5FC3\u8DF3\u68C0\u6D4B\u529F\u80FD\u4FDD\u6301\u8FDE\u63A5\u6D3B\u8DC3</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u6838\u5FC3\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u5B9E\u65F6\u901A\u4FE1</strong>: \u652F\u6301WebSocket\u7684\u5B9E\u65F6\u53CC\u5411\u901A\u4FE1\uFF0C\u7ACB\u5373\u67E5\u770B\u6D88\u606F\u6536\u53D1\u60C5\u51B5</li><li><strong>\u591A\u79CD\u6D88\u606F\u683C\u5F0F</strong>: \u652F\u6301\u6587\u672C\u3001JSON\u548C\u4E8C\u8FDB\u5236\u6D88\u606F\u7684\u53D1\u9001\u548C\u63A5\u6536</li><li><strong>\u8FDE\u63A5\u72B6\u6001\u76D1\u63A7</strong>: \u5B9E\u65F6\u663E\u793A\u8FDE\u63A5\u72B6\u6001\u3001\u8FDE\u63A5\u65F6\u957F\u548C\u6D88\u606F\u7EDF\u8BA1</li><li><strong>\u5FC3\u8DF3\u68C0\u6D4B</strong>: \u652F\u6301\u53D1\u9001Ping\u5E27\u4FDD\u6301\u8FDE\u63A5\u6D3B\u8DC3\uFF0C\u9632\u6B62\u8FDE\u63A5\u8D85\u65F6</li><li><strong>\u6D88\u606F\u5386\u53F2\u8BB0\u5F55</strong>: \u4FDD\u5B58\u5B8C\u6574\u7684\u6D88\u606F\u6536\u53D1\u8BB0\u5F55\uFF0C\u652F\u6301\u81EA\u52A8\u6EDA\u52A8\u548C\u6E05\u7A7A\u529F\u80FD</li><li><strong>\u5B89\u5168\u53EF\u9760</strong>: \u7EAF\u524D\u7AEF\u5B9E\u73B0\uFF0C\u6240\u6709\u6570\u636E\u5728\u672C\u5730\u5904\u7406\uFF0C\u786E\u4FDD\u9690\u79C1\u5B89\u5168</li><li><strong>\u5FEB\u901F\u793A\u4F8B</strong>: \u5185\u7F6E\u5E38\u7528WebSocket\u670D\u52A1\u5668\u793A\u4F8B\uFF0C\u65B9\u4FBF\u5FEB\u901F\u6D4B\u8BD5</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">WebSocket \u548C HTTP \u8F6E\u8BE2\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h3><p class="text-muted-foreground mt-1"> WebSocket\u662F\u5168\u53CC\u5DE5\u901A\u4FE1\u534F\u8BAE\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u53EF\u4EE5\u540C\u65F6\u53D1\u9001\u6570\u636E\uFF0C\u800CHTTP\u8F6E\u8BE2\u9700\u8981\u5BA2\u6237\u7AEF\u4E0D\u65AD\u53D1\u8D77\u8BF7\u6C42\u3002 WebSocket\u8FDE\u63A5\u5EFA\u7ACB\u540E\u53EF\u4EE5\u6301\u4E45\u4FDD\u6301\uFF0C\u51CF\u5C11\u4E86\u63E1\u624B\u5F00\u9500\uFF0C\u5EF6\u8FDF\u66F4\u4F4E\uFF0C\u6548\u7387\u66F4\u9AD8\u3002 \u5BF9\u4E8E\u9700\u8981\u9891\u7E41\u901A\u4FE1\u7684\u5E94\u7528\uFF0CWebSocket\u662F\u66F4\u597D\u7684\u9009\u62E9\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u4E3A\u4EC0\u4E48 WebSocket \u8FDE\u63A5\u5931\u8D25\uFF1F</h3><p class="text-muted-foreground mt-1"> \u53EF\u80FD\u7684\u539F\u56E0\u5305\u62EC\uFF1AURL\u683C\u5F0F\u9519\u8BEF\u3001\u670D\u52A1\u5668\u4E0D\u652F\u6301WebSocket\u3001\u9632\u706B\u5899\u963B\u6B62\u8FDE\u63A5\u3001SSL\u8BC1\u4E66\u95EE\u9898\uFF08\u5BF9\u4E8Ewss://\uFF09\u7B49\u3002 \u8BF7\u68C0\u67E5URL\u662F\u5426\u6B63\u786E\uFF0C\u786E\u4FDD\u670D\u52A1\u5668\u6B63\u5E38\u8FD0\u884C\uFF0C\u5982\u679C\u662Fwss\u8FDE\u63A5\uFF0C\u68C0\u67E5\u8BC1\u4E66\u662F\u5426\u6709\u6548\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u4FDD\u6301 WebSocket \u8FDE\u63A5\u6D3B\u8DC3\uFF1F</h3><p class="text-muted-foreground mt-1"> \u53EF\u4EE5\u4F7F\u7528\u5FC3\u8DF3\u68C0\u6D4B\u673A\u5236\uFF0C\u5B9A\u671F\u53D1\u9001Ping\u5E27\uFF0C\u670D\u52A1\u5668\u4F1A\u54CD\u5E94Pong\u5E27\u3002 \u672C\u5DE5\u5177\u63D0\u4F9B\u4E86&quot;\u53D1\u9001Ping&quot;\u6309\u94AE\uFF0C\u53EF\u4EE5\u624B\u52A8\u53D1\u9001\u5FC3\u8DF3\u3002\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u5EFA\u8BAE\u5B9E\u73B0\u81EA\u52A8\u5FC3\u8DF3\u673A\u5236\uFF0C \u4F8B\u5982\u6BCF30\u79D2\u53D1\u9001\u4E00\u6B21\u5FC3\u8DF3\uFF0C\u9632\u6B62\u8FDE\u63A5\u56E0\u8D85\u65F6\u800C\u65AD\u5F00\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">WebSocket \u652F\u6301\u54EA\u4E9B\u6D88\u606F\u7C7B\u578B\uFF1F</h3><p class="text-muted-foreground mt-1"> WebSocket\u534F\u8BAE\u652F\u6301\u4E24\u79CD\u6D88\u606F\u7C7B\u578B\uFF1A\u6587\u672C\u6D88\u606F\u548C\u4E8C\u8FDB\u5236\u6D88\u606F\u3002 \u6587\u672C\u6D88\u606F\u53EF\u4EE5\u5305\u542B\u4EFB\u4F55UTF-8\u7F16\u7801\u7684\u6587\u672C\uFF0C\u5982\u666E\u901A\u5B57\u7B26\u4E32\u3001JSON\u6570\u636E\u7B49\u3002 \u4E8C\u8FDB\u5236\u6D88\u606F\u53EF\u4EE5\u4F20\u8F93\u4EFB\u4F55\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u5982\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891\u3001Protocol Buffers\u7B49\u3002 \u672C\u5DE5\u5177\u63D0\u4F9B\u4E86\u4FBF\u6377\u7684\u9009\u9879\u6765\u53D1\u9001\u4E0D\u540C\u7C7B\u578B\u7684\u6D88\u606F\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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

export { _sfc_main as default };
//# sourceMappingURL=websocket-test-CbFWglxU.mjs.map
