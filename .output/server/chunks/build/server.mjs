import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { ref, hasInjectionContext, inject, getCurrentInstance, defineAsyncComponent, defineComponent, h, computed, unref, shallowRef, provide, shallowReactive, Suspense, Fragment, createApp, toRef, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, reactive, effectScope, isReadonly, isRef, isShallow, isReactive, toRaw, mergeProps, withCtx, getCurrentScope, nextTick, useSSRContext } from 'vue';
import { h as hasProtocol, i as isScriptProtocol, k as joinURL, w as withQuery, s as sanitizeStatusCode, l as getContext, $ as $fetch, m as createHooks, n as executeAsync, c as createError$1, t as toRouteMatcher, o as createRouter$1, p as defu } from '../nitro/nitro.mjs';
import { u as useSeoMeta$1, a as useHead$1, h as headSymbol, b as baseURL } from '../routes/renderer.mjs';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const appLayoutTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.20.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
const __nuxt_page_meta$1M = {
  layout: "default"
};
const __nuxt_page_meta$1L = {
  layout: "default",
  title: "常见问题"
};
const __nuxt_page_meta$1K = {
  layout: "default",
  title: "关于我们"
};
const __nuxt_page_meta$1J = {
  layout: "default"
};
const __nuxt_page_meta$1I = {
  layout: "default",
  title: "服务条款"
};
const __nuxt_page_meta$1H = {
  layout: "default",
  title: "Cookie政策"
};
const __nuxt_page_meta$1G = {
  layout: "default"
};
const __nuxt_page_meta$1F = {
  layout: "default"
};
const __nuxt_page_meta$1E = {
  layout: "default",
  title: "隐私政策"
};
const __nuxt_page_meta$1D = {
  layout: "default"
};
const __nuxt_page_meta$1C = {
  layout: "default"
};
const __nuxt_page_meta$1B = {
  layout: "default",
  title: "提交反馈"
};
const __nuxt_page_meta$1A = {
  layout: "default"
};
const __nuxt_page_meta$1z = {
  layout: "default"
};
const __nuxt_page_meta$1y = {
  layout: "default"
};
const __nuxt_page_meta$1x = {
  layout: "default"
};
const __nuxt_page_meta$1w = {
  layout: "default"
};
const __nuxt_page_meta$1v = {
  layout: "default"
};
const __nuxt_page_meta$1u = {
  layout: "default"
};
const __nuxt_page_meta$1t = {
  layout: "default"
};
const __nuxt_page_meta$1s = {
  layout: "default"
};
const __nuxt_page_meta$1r = {
  layout: "default"
};
const __nuxt_page_meta$1q = {
  layout: "default"
};
const __nuxt_page_meta$1p = {
  layout: "default"
};
const __nuxt_page_meta$1o = {
  layout: "default"
};
const __nuxt_page_meta$1n = {
  layout: "default"
};
const __nuxt_page_meta$1m = {
  layout: "default"
};
const __nuxt_page_meta$1l = {
  layout: "default"
};
const __nuxt_page_meta$1k = {
  layout: "default"
};
const __nuxt_page_meta$1j = {
  layout: "default"
};
const __nuxt_page_meta$1i = {
  layout: "default"
};
const __nuxt_page_meta$1h = {
  layout: "default"
};
const __nuxt_page_meta$1g = {
  layout: "default"
};
const __nuxt_page_meta$1f = {
  layout: "default"
};
const __nuxt_page_meta$1e = {
  layout: "default"
};
const __nuxt_page_meta$1d = {
  layout: "default"
};
const __nuxt_page_meta$1c = {
  layout: "default"
};
const __nuxt_page_meta$1b = {
  layout: "default"
};
const __nuxt_page_meta$1a = {
  layout: "default"
};
const __nuxt_page_meta$19 = {
  layout: "default"
};
const __nuxt_page_meta$18 = {
  layout: "default"
};
const __nuxt_page_meta$17 = {
  layout: "default"
};
const __nuxt_page_meta$16 = {
  layout: "default"
};
const __nuxt_page_meta$15 = {
  layout: "default"
};
const __nuxt_page_meta$14 = {
  layout: "default"
};
const __nuxt_page_meta$13 = {
  layout: "default"
};
const __nuxt_page_meta$12 = {
  layout: "default"
};
const __nuxt_page_meta$11 = {
  layout: "default"
};
const __nuxt_page_meta$10 = {
  layout: "default"
};
const __nuxt_page_meta$$ = {
  layout: "default"
};
const __nuxt_page_meta$_ = {
  layout: "default"
};
const __nuxt_page_meta$Z = {
  layout: "default"
};
const __nuxt_page_meta$Y = {
  layout: "default"
};
const __nuxt_page_meta$X = {
  layout: "default"
};
const __nuxt_page_meta$W = {
  layout: "default"
};
const __nuxt_page_meta$V = {
  layout: "default"
};
const __nuxt_page_meta$U = {
  layout: "default"
};
const __nuxt_page_meta$T = {
  layout: "default"
};
const __nuxt_page_meta$S = {
  layout: "default"
};
const __nuxt_page_meta$R = {
  layout: "default"
};
const __nuxt_page_meta$Q = {
  layout: "default"
};
const __nuxt_page_meta$P = {
  layout: "default"
};
const __nuxt_page_meta$O = {
  layout: "default"
};
const __nuxt_page_meta$N = {
  layout: "default"
};
const __nuxt_page_meta$M = {
  layout: "default"
};
const __nuxt_page_meta$L = {
  layout: "default"
};
const __nuxt_page_meta$K = {
  layout: "default"
};
const __nuxt_page_meta$J = {
  layout: "default"
};
const __nuxt_page_meta$I = {
  layout: "default"
};
const __nuxt_page_meta$H = {
  layout: "default"
};
const __nuxt_page_meta$G = {
  layout: "default"
};
const __nuxt_page_meta$F = {
  layout: "default"
};
const __nuxt_page_meta$E = {
  layout: "default"
};
const __nuxt_page_meta$D = {
  layout: "default"
};
const __nuxt_page_meta$C = {
  layout: "default"
};
const __nuxt_page_meta$B = {
  layout: "default"
};
const __nuxt_page_meta$A = {
  layout: "default"
};
const __nuxt_page_meta$z = {
  layout: "default"
};
const __nuxt_page_meta$y = {
  layout: "default"
};
const __nuxt_page_meta$x = {
  layout: "default"
};
const __nuxt_page_meta$w = {
  layout: "default"
};
const __nuxt_page_meta$v = {
  layout: "default"
};
const __nuxt_page_meta$u = {
  layout: "default"
};
const __nuxt_page_meta$t = {
  layout: "default"
};
const __nuxt_page_meta$s = {
  layout: "default"
};
const __nuxt_page_meta$r = {
  layout: "default"
};
const __nuxt_page_meta$q = {
  layout: "default"
};
const __nuxt_page_meta$p = {
  layout: "default"
};
const __nuxt_page_meta$o = {
  layout: "default"
};
const __nuxt_page_meta$n = {
  layout: "default"
};
const __nuxt_page_meta$m = {
  layout: "default"
};
const __nuxt_page_meta$l = {
  layout: "default"
};
const __nuxt_page_meta$k = {
  layout: "default"
};
const __nuxt_page_meta$j = {
  layout: "default"
};
const __nuxt_page_meta$i = {
  layout: "default"
};
const __nuxt_page_meta$h = {
  layout: "default"
};
const __nuxt_page_meta$g = {
  layout: "default"
};
const __nuxt_page_meta$f = {
  layout: "default"
};
const __nuxt_page_meta$e = {
  layout: "default"
};
const __nuxt_page_meta$d = {
  layout: "default"
};
const __nuxt_page_meta$c = {
  layout: "default"
};
const __nuxt_page_meta$b = {
  layout: "default"
};
const __nuxt_page_meta$a = {
  layout: "default"
};
const __nuxt_page_meta$9 = {
  layout: "default"
};
const __nuxt_page_meta$8 = {
  layout: "default"
};
const __nuxt_page_meta$7 = {
  layout: "default"
};
const __nuxt_page_meta$6 = {
  layout: "default"
};
const __nuxt_page_meta$5 = {
  layout: "default"
};
const __nuxt_page_meta$4 = {
  layout: "default"
};
const __nuxt_page_meta$3 = {
  layout: "default"
};
const __nuxt_page_meta$2 = {
  layout: "default"
};
const __nuxt_page_meta$1 = {
  layout: "default"
};
const __nuxt_page_meta = {
  layout: "default"
};
const _routes = [
  {
    name: "all",
    path: "/all",
    meta: __nuxt_page_meta$1M || {},
    component: () => import('./all-jz55Br3I.mjs')
  },
  {
    name: "faq",
    path: "/faq",
    meta: __nuxt_page_meta$1L || {},
    component: () => import('./faq-CCifVGJW.mjs')
  },
  {
    name: "about",
    path: "/about",
    meta: __nuxt_page_meta$1K || {},
    component: () => import('./about-BYOlmoSW.mjs')
  },
  {
    name: "index",
    path: "/",
    meta: __nuxt_page_meta$1J || {},
    component: () => import('./index-Dm55oVw5.mjs')
  },
  {
    name: "terms",
    path: "/terms",
    meta: __nuxt_page_meta$1I || {},
    component: () => import('./terms-BNntIfGR.mjs')
  },
  {
    name: "cookie",
    path: "/cookie",
    meta: __nuxt_page_meta$1H || {},
    component: () => import('./cookie-C-cvzHSr.mjs')
  },
  {
    name: "recent",
    path: "/recent",
    meta: __nuxt_page_meta$1G || {},
    component: () => import('./recent-E8yw-l3a.mjs')
  },
  {
    name: "explore",
    path: "/explore",
    meta: __nuxt_page_meta$1F || {},
    component: () => import('./explore-Dh8i0j2b.mjs')
  },
  {
    name: "privacy",
    path: "/privacy",
    meta: __nuxt_page_meta$1E || {},
    component: () => import('./privacy-C4kfM89n.mjs')
  },
  {
    name: "sitemap",
    path: "/sitemap",
    meta: __nuxt_page_meta$1D || {},
    component: () => import('./sitemap-EjYVGH62.mjs')
  },
  {
    name: "download",
    path: "/download",
    meta: __nuxt_page_meta$1C || {},
    component: () => import('./download-DrEj8tuy.mjs')
  },
  {
    name: "feedback",
    path: "/feedback",
    meta: __nuxt_page_meta$1B || {},
    component: () => import('./feedback-DUXi3r6W.mjs')
  },
  {
    name: "favorites",
    path: "/favorites",
    meta: __nuxt_page_meta$1A || {},
    component: () => import('./favorites-BTmUypqq.mjs')
  },
  {
    name: "category",
    path: "/:category()",
    meta: __nuxt_page_meta$1z || {},
    component: () => import('./_category_-jiGbdskT.mjs')
  },
  {
    name: "tools-api-doc",
    path: "/tools/api-doc",
    meta: __nuxt_page_meta$1y || {},
    component: () => import('./api-doc-BkmHafKH.mjs')
  },
  {
    name: "tools-ip-info",
    path: "/tools/ip-info",
    meta: __nuxt_page_meta$1x || {},
    component: () => import('./ip-info-BC4G3I_z.mjs')
  },
  {
    name: "tools-date-diff",
    path: "/tools/date-diff",
    meta: __nuxt_page_meta$1w || {},
    component: () => import('./date-diff-Bb922byq.mjs')
  },
  {
    name: "tools-json-path",
    path: "/tools/json-path",
    meta: __nuxt_page_meta$1v || {},
    component: () => import('./json-path-DsKU9_9l.mjs')
  },
  {
    name: "tools-mock-data",
    path: "/tools/mock-data",
    component: () => import('./mock-data-C-BYXWRi.mjs')
  },
  {
    name: "tools-stopwatch",
    path: "/tools/stopwatch",
    meta: __nuxt_page_meta$1u || {},
    component: () => import('./stopwatch-DKJpqhjj.mjs')
  },
  {
    name: "tools-text-diff",
    path: "/tools/text-diff",
    meta: __nuxt_page_meta$1t || {},
    component: () => import('./text-diff-BGnzugSA.mjs')
  },
  {
    name: "tools-dns-lookup",
    path: "/tools/dns-lookup",
    meta: __nuxt_page_meta$1s || {},
    component: () => import('./dns-lookup-C9xPN77E.mjs')
  },
  {
    name: "tools-gmsm-tools",
    path: "/tools/gmsm-tools",
    meta: __nuxt_page_meta$1r || {},
    component: () => import('./gmsm-tools-nUcmzW9f.mjs')
  },
  {
    name: "tools-image-crop",
    path: "/tools/image-crop",
    component: () => import('./image-crop--RptY12f.mjs')
  },
  {
    name: "tools-jwt-decode",
    path: "/tools/jwt-decode",
    meta: __nuxt_page_meta$1q || {},
    component: () => import('./jwt-decode-cIPPyKLN.mjs')
  },
  {
    name: "tools-jwt-verify",
    path: "/tools/jwt-verify",
    meta: __nuxt_page_meta$1p || {},
    component: () => import('./jwt-verify-vyUUI2K0.mjs')
  },
  {
    name: "tools-mime-types",
    path: "/tools/mime-types",
    component: () => import('./mime-types-6Dr5sBaR.mjs')
  },
  {
    name: "tools-morse-code",
    path: "/tools/morse-code",
    meta: __nuxt_page_meta$1o || {},
    component: () => import('./morse-code-SFL7fIfj.mjs')
  },
  {
    name: "tools-url-decode",
    path: "/tools/url-decode",
    meta: __nuxt_page_meta$1n || {},
    component: () => import('./url-decode-Bibcywyn.mjs')
  },
  {
    name: "tools-url-encode",
    path: "/tools/url-encode",
    meta: __nuxt_page_meta$1m || {},
    component: () => import('./url-encode-DQG2307P.mjs')
  },
  {
    name: "category-ai",
    path: "/category/ai",
    meta: __nuxt_page_meta$1l || {},
    component: () => import('./index-Bf1HToVO.mjs')
  },
  {
    name: "tools-aes-decrypt",
    path: "/tools/aes-decrypt",
    meta: __nuxt_page_meta$1k || {},
    component: () => import('./aes-decrypt-BpRZ3yol.mjs')
  },
  {
    name: "tools-aes-encrypt",
    path: "/tools/aes-encrypt",
    meta: __nuxt_page_meta$1j || {},
    component: () => import('./aes-encrypt-lp_shQ7w.mjs')
  },
  {
    name: "tools-ascii-table",
    path: "/tools/ascii-table",
    meta: __nuxt_page_meta$1i || {},
    component: () => import('./ascii-table-CtVxdlZ1.mjs')
  },
  {
    name: "tools-code-format",
    path: "/tools/code-format",
    meta: __nuxt_page_meta$1h || {},
    component: () => import('./code-format-BDWqnnmO.mjs')
  },
  {
    name: "tools-cron-parser",
    path: "/tools/cron-parser",
    meta: __nuxt_page_meta$1g || {},
    component: () => import('./cron-parser-C6qshLf1.mjs')
  },
  {
    name: "tools-exif-viewer",
    path: "/tools/exif-viewer",
    meta: __nuxt_page_meta$1f || {},
    component: () => import('./exif-viewer-xtCCO3ib.mjs')
  },
  {
    name: "tools-git-command",
    path: "/tools/git-command",
    meta: __nuxt_page_meta$1e || {},
    component: () => import('./git-command-VSkAvefD.mjs')
  },
  {
    name: "tools-hex-convert",
    path: "/tools/hex-convert",
    meta: __nuxt_page_meta$1d || {},
    component: () => import('./hex-convert-D2TOjpz5.mjs')
  },
  {
    name: "tools-html-decode",
    path: "/tools/html-decode",
    meta: __nuxt_page_meta$1c || {},
    component: () => import('./html-decode-XYvaCP7e.mjs')
  },
  {
    name: "tools-html-encode",
    path: "/tools/html-encode",
    meta: __nuxt_page_meta$1b || {},
    component: () => import('./html-encode-CV5FXfQD.mjs')
  },
  {
    name: "tools-http-client",
    path: "/tools/http-client",
    component: () => import('./http-client-BDAUUypv.mjs')
  },
  {
    name: "tools-image-merge",
    path: "/tools/image-merge",
    component: () => import('./image-merge-Da_1ttq1.mjs')
  },
  {
    name: "tools-json-schema",
    path: "/tools/json-schema",
    meta: __nuxt_page_meta$1a || {},
    component: () => import('./json-schema-BR7fnHX1.mjs')
  },
  {
    name: "tools-json-to-csv",
    path: "/tools/json-to-csv",
    meta: __nuxt_page_meta$19 || {},
    component: () => import('./json-to-csv-BCAVoTLI.mjs')
  },
  {
    name: "tools-json-to-xml",
    path: "/tools/json-to-xml",
    meta: __nuxt_page_meta$18 || {},
    component: () => import('./json-to-xml-Cdma4RLd.mjs')
  },
  {
    name: "tools-lorem-ipsum",
    path: "/tools/lorem-ipsum",
    meta: __nuxt_page_meta$17 || {},
    component: () => import('./lorem-ipsum-u-MK3ngZ.mjs')
  },
  {
    name: "tools-qrcode-scan",
    path: "/tools/qrcode-scan",
    meta: __nuxt_page_meta$16 || {},
    component: () => import('./qrcode-scan-B1FPec1R.mjs')
  },
  {
    name: "tools-rsa-decrypt",
    path: "/tools/rsa-decrypt",
    meta: __nuxt_page_meta$15 || {},
    component: () => import('./rsa-decrypt-BAPumXbC.mjs')
  },
  {
    name: "tools-rsa-encrypt",
    path: "/tools/rsa-encrypt",
    meta: __nuxt_page_meta$14 || {},
    component: () => import('./rsa-encrypt-6Kx9o65Y.mjs')
  },
  {
    name: "tools-ssl-checker",
    path: "/tools/ssl-checker",
    component: () => import('./ssl-checker-DOSE-3S2.mjs')
  },
  {
    name: "tools-xml-to-json",
    path: "/tools/xml-to-json",
    meta: __nuxt_page_meta$13 || {},
    component: () => import('./xml-to-json-BaF4Uz9E.mjs')
  },
  {
    name: "category-all",
    path: "/category/all",
    meta: __nuxt_page_meta$12 || {},
    component: () => import('./index-C95kxmjh.mjs')
  },
  {
    name: "category-dev",
    path: "/category/dev",
    meta: __nuxt_page_meta$11 || {},
    component: () => import('./index-CJTrgKGg.mjs')
  },
  {
    name: "tools-base64-image",
    path: "/tools/base64-image",
    meta: __nuxt_page_meta$10 || {},
    component: () => import('./base64-image-DPc5_4iO.mjs')
  },
  {
    name: "tools-color-picker",
    path: "/tools/color-picker",
    meta: __nuxt_page_meta$$ || {},
    component: () => import('./color-picker-DKETMmd0.mjs')
  },
  {
    name: "tools-curl-to-code",
    path: "/tools/curl-to-code",
    meta: __nuxt_page_meta$_ || {},
    component: () => import('./curl-to-code-BBNVqaj5.mjs')
  },
  {
    name: "tools-image-resize",
    path: "/tools/image-resize",
    meta: __nuxt_page_meta$Z || {},
    component: () => import('./image-resize-D-8ULqLY.mjs')
  },
  {
    name: "tools-json-to-yaml",
    path: "/tools/json-to-yaml",
    meta: __nuxt_page_meta$Y || {},
    component: () => import('./json-to-yaml-D56EEWzL.mjs')
  },
  {
    name: "tools-port-checker",
    path: "/tools/port-checker",
    component: () => import('./port-checker-D6Y7Wa0F.mjs')
  },
  {
    name: "tools-regex-tester",
    path: "/tools/regex-tester",
    meta: __nuxt_page_meta$X || {},
    component: () => import('./regex-tester-44ZFS9EI.mjs')
  },
  {
    name: "tools-rsa-generate",
    path: "/tools/rsa-generate",
    meta: __nuxt_page_meta$W || {},
    component: () => import('./rsa-generate-D8ntUAr2.mjs')
  },
  {
    name: "tools-sql-to-model",
    path: "/tools/sql-to-model",
    meta: __nuxt_page_meta$V || {},
    component: () => import('./sql-to-model-BW6jw5p3.mjs')
  },
  {
    name: "tools-text-counter",
    path: "/tools/text-counter",
    meta: __nuxt_page_meta$U || {},
    component: () => import('./text-counter-GUQ-FnIO.mjs')
  },
  {
    name: "tools-text-replace",
    path: "/tools/text-replace",
    meta: __nuxt_page_meta$T || {},
    component: () => import('./text-replace-C08P5Lyp.mjs')
  },
  {
    name: "tools-whois-lookup",
    path: "/tools/whois-lookup",
    meta: __nuxt_page_meta$S || {},
    component: () => import('./whois-lookup-D3fL8ybx.mjs')
  },
  {
    name: "tools-xml-to-model",
    path: "/tools/xml-to-model",
    meta: __nuxt_page_meta$R || {},
    component: () => import('./xml-to-model-CAXnD5Br.mjs')
  },
  {
    name: "tools-xpath-tester",
    path: "/tools/xpath-tester",
    meta: __nuxt_page_meta$Q || {},
    component: () => import('./xpath-tester-xlB4APAz.mjs')
  },
  {
    name: "category-text",
    path: "/category/text",
    meta: __nuxt_page_meta$P || {},
    component: () => import('./index-ChjOo3oA.mjs')
  },
  {
    name: "category-time",
    path: "/category/time",
    meta: __nuxt_page_meta$O || {},
    component: () => import('./index-D4AGhxj4.mjs')
  },
  {
    name: "tools-base64-decode",
    path: "/tools/base64-decode",
    meta: __nuxt_page_meta$N || {},
    component: () => import('./base64-decode-CMfRXKLV.mjs')
  },
  {
    name: "tools-base64-encode",
    path: "/tools/base64-encode",
    meta: __nuxt_page_meta$M || {},
    component: () => import('./base64-encode-c4DiqvGW.mjs')
  },
  {
    name: "tools-bcrypt-verify",
    path: "/tools/bcrypt-verify",
    meta: __nuxt_page_meta$L || {},
    component: () => import('./bcrypt-verify-CDCFSnA0.mjs')
  },
  {
    name: "tools-css-formatter",
    path: "/tools/css-formatter",
    meta: __nuxt_page_meta$K || {},
    component: () => import('./css-formatter-BKjsahYC.mjs')
  },
  {
    name: "tools-csv-formatter",
    path: "/tools/csv-formatter",
    meta: __nuxt_page_meta$J || {},
    component: () => import('./csv-formatter-DaeIKxcB.mjs')
  },
  {
    name: "tools-image-convert",
    path: "/tools/image-convert",
    meta: __nuxt_page_meta$I || {},
    component: () => import('./image-convert-l-jpyWaA.mjs')
  },
  {
    name: "tools-json-to-model",
    path: "/tools/json-to-model",
    meta: __nuxt_page_meta$H || {},
    component: () => import('./json-to-model-Cfjkrs0L.mjs')
  },
  {
    name: "tools-linux-command",
    path: "/tools/linux-command",
    meta: __nuxt_page_meta$G || {},
    component: () => import('./linux-command-DyJtFmN8.mjs')
  },
  {
    name: "tools-md5-generator",
    path: "/tools/md5-generator",
    meta: __nuxt_page_meta$F || {},
    component: () => import('./md5-generator-gs0OyX2O.mjs')
  },
  {
    name: "tools-sha-generator",
    path: "/tools/sha-generator",
    meta: __nuxt_page_meta$E || {},
    component: () => import('./sha-generator-CBgx_yU4.mjs')
  },
  {
    name: "tools-sql-formatter",
    path: "/tools/sql-formatter",
    meta: __nuxt_page_meta$D || {},
    component: () => import('./sql-formatter-AGHbBnfe.mjs')
  },
  {
    name: "tools-xml-formatter",
    path: "/tools/xml-formatter",
    meta: __nuxt_page_meta$C || {},
    component: () => import('./xml-formatter-BvdNa5l5.mjs')
  },
  {
    name: "category-image",
    path: "/category/image",
    meta: __nuxt_page_meta$B || {},
    component: () => import('./index-DXuyomnG.mjs')
  },
  {
    name: "tools-age-calculator",
    path: "/tools/age-calculator",
    meta: __nuxt_page_meta$A || {},
    component: () => import('./age-calculator-Cu1xlPVe.mjs')
  },
  {
    name: "tools-binary-convert",
    path: "/tools/binary-convert",
    meta: __nuxt_page_meta$z || {},
    component: () => import('./binary-convert-DhxxX8qs.mjs')
  },
  {
    name: "tools-case-converter",
    path: "/tools/case-converter",
    meta: __nuxt_page_meta$y || {},
    component: () => import('./case-converter-z_kVYhfG.mjs')
  },
  {
    name: "tools-cron-generator",
    path: "/tools/cron-generator",
    meta: __nuxt_page_meta$x || {},
    component: () => import('./cron-generator-BsbAXDHA.mjs')
  },
  {
    name: "tools-docker-command",
    path: "/tools/docker-command",
    meta: __nuxt_page_meta$w || {},
    component: () => import('./docker-command-iivCBhZm.mjs')
  },
  {
    name: "tools-hmac-generator",
    path: "/tools/hmac-generator",
    meta: __nuxt_page_meta$v || {},
    component: () => import('./hmac-generator-DUOf9lLS.mjs')
  },
  {
    name: "tools-html-formatter",
    path: "/tools/html-formatter",
    component: () => import('./html-formatter-hG7OTaSM.mjs')
  },
  {
    name: "tools-icon-generator",
    path: "/tools/icon-generator",
    meta: __nuxt_page_meta$u || {},
    component: () => import('./icon-generator-wtpHuuWD.mjs')
  },
  {
    name: "tools-image-compress",
    path: "/tools/image-compress",
    meta: __nuxt_page_meta$t || {},
    component: () => import('./image-compress-BswjHQIK.mjs')
  },
  {
    name: "tools-json-formatter",
    path: "/tools/json-formatter",
    meta: __nuxt_page_meta$s || {},
    component: () => import('./json-formatter-DEOGc-S_.mjs')
  },
  {
    name: "tools-swagger-viewer",
    path: "/tools/swagger-viewer",
    meta: __nuxt_page_meta$r || {},
    component: () => import('./swagger-viewer-DVZfzeSs.mjs')
  },
  {
    name: "tools-toml-formatter",
    path: "/tools/toml-formatter",
    meta: __nuxt_page_meta$q || {},
    component: () => import('./toml-formatter-B4Bswecu.mjs')
  },
  {
    name: "tools-uuid-generator",
    path: "/tools/uuid-generator",
    meta: __nuxt_page_meta$p || {},
    component: () => import('./uuid-generator-FUvxQodr.mjs')
  },
  {
    name: "tools-websocket-test",
    path: "/tools/websocket-test",
    meta: __nuxt_page_meta$o || {},
    component: () => import('./websocket-test-CbFWglxU.mjs')
  },
  {
    name: "tools-yaml-formatter",
    path: "/tools/yaml-formatter",
    meta: __nuxt_page_meta$n || {},
    component: () => import('./yaml-formatter-Ds4VRPyA.mjs')
  },
  {
    name: "category-crypto",
    path: "/category/crypto",
    meta: __nuxt_page_meta$m || {},
    component: () => import('./index-C3b8E656.mjs')
  },
  {
    name: "category-encode",
    path: "/category/encode",
    meta: __nuxt_page_meta$l || {},
    component: () => import('./index-bADbxXA6.mjs')
  },
  {
    name: "category-format",
    path: "/category/format",
    meta: __nuxt_page_meta$k || {},
    component: () => import('./index-BI445R_9.mjs')
  },
  {
    name: "tools-bcrypt-generate",
    path: "/tools/bcrypt-generate",
    meta: __nuxt_page_meta$j || {},
    component: () => import('./bcrypt-generate-C7sRyesV.mjs')
  },
  {
    name: "tools-charset-convert",
    path: "/tools/charset-convert",
    meta: __nuxt_page_meta$i || {},
    component: () => import('./charset-convert-B3rsQ8w5.mjs')
  },
  {
    name: "tools-countdown-timer",
    path: "/tools/countdown-timer",
    meta: __nuxt_page_meta$h || {},
    component: () => import('./countdown-timer-BSSUg_3d.mjs')
  },
  {
    name: "tools-date-calculator",
    path: "/tools/date-calculator",
    meta: __nuxt_page_meta$g || {},
    component: () => import('./date-calculator-DqqHmLmB.mjs')
  },
  {
    name: "tools-image-watermark",
    path: "/tools/image-watermark",
    meta: __nuxt_page_meta$f || {},
    component: () => import('./image-watermark-CofavQ_0.mjs')
  },
  {
    name: "tools-line-operations",
    path: "/tools/line-operations",
    meta: __nuxt_page_meta$e || {},
    component: () => import('./line-operations-BBjfA5yz.mjs')
  },
  {
    name: "tools-markdown-editor",
    path: "/tools/markdown-editor",
    meta: __nuxt_page_meta$d || {},
    component: () => import('./markdown-editor-BktZESt7.mjs')
  },
  {
    name: "tools-qrcode-generate",
    path: "/tools/qrcode-generate",
    meta: __nuxt_page_meta$c || {},
    component: () => import('./qrcode-generate-Y4R7Hbys.mjs')
  },
  {
    name: "tools-regex-generator",
    path: "/tools/regex-generator",
    meta: __nuxt_page_meta$b || {},
    component: () => import('./regex-generator-bFLVuJEz.mjs')
  },
  {
    name: "tools-screenshot-tool",
    path: "/tools/screenshot-tool",
    component: () => import('./screenshot-tool-B0FaD7ee.mjs')
  },
  {
    name: "tools-unicode-convert",
    path: "/tools/unicode-convert",
    meta: __nuxt_page_meta$a || {},
    component: () => import('./unicode-convert-CaJpRd-e.mjs')
  },
  {
    name: "tools-week-calculator",
    path: "/tools/week-calculator",
    meta: __nuxt_page_meta$9 || {},
    component: () => import('./week-calculator-BH7s4ei_.mjs')
  },
  {
    name: "category-network",
    path: "/category/network",
    meta: __nuxt_page_meta$8 || {},
    component: () => import('./index-D-95Lsiw.mjs')
  },
  {
    name: "tools-regex-cheatsheet",
    path: "/tools/regex-cheatsheet",
    meta: __nuxt_page_meta$7 || {},
    component: () => import('./regex-cheatsheet-BYJ5TYHm.mjs')
  },
  {
    name: "tools-request-analysis",
    path: "/tools/request-analysis",
    meta: __nuxt_page_meta$6 || {},
    component: () => import('./request-analysis-DStd_axd.mjs')
  },
  {
    name: "tools-timezone-convert",
    path: "/tools/timezone-convert",
    meta: __nuxt_page_meta$5 || {},
    component: () => import('./timezone-convert-Zl3MYJnn.mjs')
  },
  {
    name: "tools-crontab-generator",
    path: "/tools/crontab-generator",
    meta: __nuxt_page_meta$4 || {},
    component: () => import('./crontab-generator-Bf7kqErN.mjs')
  },
  {
    name: "tools-subnet-calculator",
    path: "/tools/subnet-calculator",
    meta: __nuxt_page_meta$3 || {},
    component: () => import('./subnet-calculator-B3cc_yh7.mjs')
  },
  {
    name: "tools-timestamp-convert",
    path: "/tools/timestamp-convert",
    meta: __nuxt_page_meta$2 || {},
    component: () => import('./timestamp-convert-nFKmb8eH.mjs')
  },
  {
    name: "tools-user-agent-parser",
    path: "/tools/user-agent-parser",
    component: () => import('./user-agent-parser-DT-tWPGX.mjs')
  },
  {
    name: "tools-password-generator",
    path: "/tools/password-generator",
    meta: __nuxt_page_meta$1 || {},
    component: () => import('./password-generator-B-MEhE8O.mjs')
  },
  {
    name: "tools-workday-calculator",
    path: "/tools/workday-calculator",
    meta: __nuxt_page_meta || {},
    component: () => import('./workday-calculator-r8-rYD93.mjs')
  }
];
const _wrapInTransition = (props, children) => {
  return { default: () => children.default?.() };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      if (from === START_LOCATION) {
        resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  const isPageNavigation = isChangingPage(to, from);
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isPageNavigation ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    router.afterEach((to, from) => {
      if (to.matched.at(-1)?.components?.default === from.matched.at(-1)?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = { sync: syncCurrentRoute };
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    if (!nuxtApp.ssrContext?.islandContext) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            if (false) ;
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0) {
        return nuxtApp.runWithContext(() => showError(createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function injectHead(nuxtApp) {
  const nuxt = nuxtApp || tryUseNuxtApp();
  return nuxt?.ssrContext?.head || nuxt?.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  });
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
function useSeoMeta(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useSeoMeta$1(input, { head, ...options });
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const pwa_icons_plugin_C24GcIKjcI2zsa8A86om0L2LZjx1chWtzYxD11T7Txg = /* @__PURE__ */ defineNuxtPlugin(() => {
  return {
    provide: {
      pwaIcons: {
        transparent: {},
        maskable: {},
        favicon: {},
        apple: {},
        appleSplashScreen: {}
      }
    }
  };
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  pwa_icons_plugin_C24GcIKjcI2zsa8A86om0L2LZjx1chWtzYxD11T7Txg
];
const layouts = {
  default: defineAsyncComponent(() => import('./default-CJNVIUTX.mjs').then((m) => m.default || m))
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const shouldUseEagerRoute = !injectedRoute || injectedRoute === useRoute();
    const route = shouldUseEagerRoute ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route?.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = shallowRef();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    let lastLayout;
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route?.meta.layoutTransition ?? appLayoutTransition;
      const previouslyRenderedLayout = lastLayout;
      lastLayout = layout.value;
      return _wrapInTransition(hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              isRenderingNewLayout: (name) => {
                return name !== previouslyRenderedLayout && name === layout.value;
              },
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    },
    isRenderingNewLayout: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    const injectedRoute = inject(PageRouteSymbol);
    const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute();
    if (isNotWithinNuxtPage) {
      const vueRouterRoute = useRoute$1();
      const reactiveChildRoute = {};
      for (const _key in vueRouterRoute) {
        const key = _key;
        Object.defineProperty(reactiveChildRoute, key, {
          enumerable: true,
          get: () => {
            return props.isRenderingNewLayout(props.name) ? vueRouterRoute[key] : injectedRoute[key];
          }
        });
      }
      provide(PageRouteSymbol, shallowReactive(reactiveChildRoute));
    }
    return () => {
      if (!name || typeof name === "string" && !(name in layouts)) {
        return context.slots.default?.();
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const favoriteTools = ref([]);
const recentTools = ref([]);
const initToolsData = () => {
  if (typeof localStorage !== "undefined") {
    const savedFavorites = localStorage.getItem("favoriteTools");
    if (savedFavorites) {
      try {
        favoriteTools.value = JSON.parse(savedFavorites);
      } catch (e) {
        console.error("Failed to parse favorite tools", e);
      }
    }
    const savedRecent = localStorage.getItem("recentTools");
    if (savedRecent) {
      try {
        recentTools.value = JSON.parse(savedRecent);
      } catch (e) {
        console.error("Failed to parse recent tools", e);
      }
    }
  }
};
const toggleFavorite = (toolId) => {
  const index = favoriteTools.value.indexOf(toolId);
  if (index > -1) {
    favoriteTools.value.splice(index, 1);
  } else {
    favoriteTools.value.push(toolId);
  }
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("favoriteTools", JSON.stringify(favoriteTools.value));
  }
  return index === -1;
};
const addRecentTool = (toolId) => {
  const filtered = recentTools.value.filter((id) => id !== toolId);
  filtered.unshift(toolId);
  recentTools.value = filtered.slice(0, 20);
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("recentTools", JSON.stringify(recentTools.value));
  }
};
const getFavoriteTools = () => {
  return [...favoriteTools.value];
};
const getRecentTools = () => {
  return [...recentTools.value];
};
const siteConfig = {
  // Google Analytics ID (如果有的话)
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || "",
  // 自定义头部脚本
  customHeadScripts: process.env.CUSTOM_HEAD_SCRIPTS || "",
  // 自定义底部脚本
  customFooterScripts: process.env.CUSTOM_FOOTER_SCRIPTS || "",
  // 网站标题
  title: "Util.cn - 开发者的瑞士军刀",
  // SEO标题后缀（用于页面标题）
  titleSuffix: " | 开发者效率工具箱 - Util.cn",
  // 网站描述
  description: "无广告 · 纯本地计算 · 即开即用的在线工具平台",
  // 网站关键词
  keywords: "在线工具, 开发工具, JSON格式化, Base64编码, 时间戳转换, 正则表达式测试"
};
const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    initToolsData();
    provide("siteConfig", siteConfig);
    useHead({
      title: siteConfig.title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: siteConfig.description },
        { name: "keywords", content: siteConfig.keywords }
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
          rel: "stylesheet"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-DnPjVt9b.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-C-3Z_cPc.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext?._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = (ssrContext) => entry(ssrContext);

export { useRouter as a, useNuxtApp as b, useRuntimeConfig as c, nuxtLinkDefaults as d, entry_default as default, addRecentTool as e, useSeoMeta as f, getRecentTools as g, getFavoriteTools as h, initToolsData as i, useRoute as j, navigateTo as n, resolveRouteObject as r, siteConfig as s, toggleFavorite as t, useHead as u };
//# sourceMappingURL=server.mjs.map
