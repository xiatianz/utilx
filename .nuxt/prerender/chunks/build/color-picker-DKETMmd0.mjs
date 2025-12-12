import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { X, Info, Hash, ArrowRight, Code, FileText } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
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
  __name: "color-picker",
  __ssrInlineRender: true,
  setup(__props) {
    const hexColor = ref("#FF5733");
    const rgb = ref({ r: 255, g: 87, b: 51 });
    const rgba = ref({ r: 255, g: 87, b: 51, a: 1 });
    const hsl = ref({ h: 11, s: 100, l: 60 });
    const hsv = ref({ h: 11, s: 80, v: 100 });
    const cmyk = ref({ c: 0, m: 66, y: 80, k: 0 });
    const colorHistory = ref([]);
    const copied = ref("");
    const gradientType = ref("linear");
    const gradientStops = ref([
      { color: "#FF5733", position: 0 },
      { color: "#33FF57", position: 100 }
    ]);
    const contrast = ref({
      textColor: "#000000",
      bgColor: "#FFFFFF"
    });
    const basicColors = [
      { name: "\u7EA2", hex: "#FF0000" },
      { name: "\u6A59", hex: "#FFA500" },
      { name: "\u9EC4", hex: "#FFFF00" },
      { name: "\u7EFF", hex: "#00FF00" },
      { name: "\u9752", hex: "#00FFFF" },
      { name: "\u84DD", hex: "#0000FF" },
      { name: "\u7D2B", hex: "#800080" },
      { name: "\u7C89", hex: "#FFC0CB" }
    ];
    const materialColors = [
      {
        name: "Red",
        colors: ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828", "#B71C1C"]
      },
      {
        name: "Blue",
        colors: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1"]
      },
      {
        name: "Green",
        colors: ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32", "#1B5E20"]
      }
    ];
    const gradientTypes = [
      { value: "linear", name: "\u7EBF\u6027" },
      { value: "radial", name: "\u5F84\u5411" }
    ];
    const gradientStyle = computed(() => {
      const stops = gradientStops.value.sort((a, b) => a.position - b.position).map((stop) => `${stop.color} ${stop.position}%`).join(", ");
      if (gradientType.value === "linear") {
        return { background: `linear-gradient(90deg, ${stops})` };
      } else {
        return { background: `radial-gradient(circle, ${stops})` };
      }
    });
    const gradientCSS = computed(() => {
      const stops = gradientStops.value.sort((a, b) => a.position - b.position).map((stop) => `${stop.color} ${stop.position}%`).join(", ");
      if (gradientType.value === "linear") {
        return `background: linear-gradient(90deg, ${stops});`;
      } else {
        return `background: radial-gradient(circle, ${stops});`;
      }
    });
    const contrastRatio = computed(() => {
      const rgb1 = hexToRgb(contrast.value.textColor);
      const rgb2 = hexToRgb(contrast.value.bgColor);
      return calculateContrastRatio(rgb1, rgb2);
    });
    const wcagLevel = computed(() => {
      const ratio = contrastRatio.value;
      if (ratio >= 7) {
        return { text: "AAA", color: "text-green-600" };
      } else if (ratio >= 4.5) {
        return { text: "AA", color: "text-blue-600" };
      } else {
        return { text: "\u672A\u901A\u8FC7", color: "text-red-600" };
      }
    });
    const updateColorFromHex = () => {
      const rgbValue = hexToRgb(hexColor.value);
      if (rgbValue) {
        rgb.value = { ...rgbValue };
        rgba.value = { ...rgbValue, a: rgba.value.a };
        updateDerivedFormats();
        addToHistory(hexColor.value);
      }
    };
    const updateDerivedFormats = () => {
      updateHSL();
      updateHSV();
      updateCMYK();
    };
    const updateHSL = () => {
      const result = rgbToHsl(rgb.value.r, rgb.value.g, rgb.value.b);
      hsl.value = result;
    };
    const updateHSV = () => {
      const result = rgbToHsv(rgb.value.r, rgb.value.g, rgb.value.b);
      hsv.value = result;
    };
    const updateCMYK = () => {
      const result = rgbToCmyk(rgb.value.r, rgb.value.g, rgb.value.b);
      cmyk.value = result;
    };
    const addToHistory = (color) => {
      if (!colorHistory.value.includes(color)) {
        colorHistory.value.unshift(color);
        if (colorHistory.value.length > 32) {
          colorHistory.value = colorHistory.value.slice(0, 32);
        }
      }
    };
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    };
    const rgbToHsl = (r, g, b) => {
      r /= 255;
      g /= 255;
      b /= 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
            break;
          case g:
            h = ((b - r) / d + 2) / 6;
            break;
          case b:
            h = ((r - g) / d + 4) / 6;
            break;
        }
      }
      return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
      };
    };
    const rgbToHsv = (r, g, b) => {
      r /= 255;
      g /= 255;
      b /= 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const d = max - min;
      let h;
      const s = max === 0 ? 0 : d / max;
      const v = max;
      if (max === min) {
        h = 0;
      } else {
        switch (max) {
          case r:
            h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
            break;
          case g:
            h = ((b - r) / d + 2) / 6;
            break;
          case b:
            h = ((r - g) / d + 4) / 6;
            break;
        }
      }
      return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
      };
    };
    const rgbToCmyk = (r, g, b) => {
      let c = 1 - r / 255;
      let m = 1 - g / 255;
      let y = 1 - b / 255;
      let k = Math.min(c, m, y);
      c = Math.round((c - k) / (1 - k) * 100);
      m = Math.round((m - k) / (1 - k) * 100);
      y = Math.round((y - k) / (1 - k) * 100);
      k = Math.round(k * 100);
      return { c, m, y, k };
    };
    const calculateContrastRatio = (rgb1, rgb2) => {
      const luminance = (rgb3) => {
        const [r, g, b] = [rgb3.r, rgb3.g, rgb3.b].map((val) => {
          val = val / 255;
          return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };
      const lum1 = luminance(rgb1);
      const lum2 = luminance(rgb2);
      const brightest = Math.max(lum1, lum2);
      const darkest = Math.min(lum1, lum2);
      return Math.round((brightest + 0.05) / (darkest + 0.05) * 100) / 100;
    };
    updateColorFromHex();
    useSeoMeta({
      title: "\u989C\u8272\u9009\u62E9\u5668 - \u5728\u7EBF\u53D6\u8272\u5668\u548C\u989C\u8272\u8F6C\u6362\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBF\u989C\u8272\u9009\u62E9\u5668\uFF0C\u652F\u6301RGB\u3001HSL\u3001HEX\u3001CMYK\u7B49\u683C\u5F0F\u8F6C\u6362\uFF0C\u6E10\u53D8\u751F\u6210\u5668\uFF0C\u5BF9\u6BD4\u5EA6\u68C0\u67E5\u3002",
      keywords: ["\u989C\u8272\u9009\u62E9\u5668", "\u53D6\u8272\u5668", "\u989C\u8272\u8F6C\u6362", "RGB", "HSL", "HEX", "CMYK", "\u6E10\u53D8\u751F\u6210\u5668"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">\u989C\u8272\u9009\u62E9\u5668</h1><p class="text-muted-foreground">\u53D6\u8272\u5668\u3001\u989C\u8272\u8F6C\u6362\uFF0C\u652F\u6301\u591A\u79CD\u989C\u8272\u683C\u5F0F</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u989C\u8272\u9009\u62E9\u5668</h2><div class="space-y-4"><div class="space-y-2"><label class="text-sm font-medium">\u9009\u62E9\u989C\u8272</label><div class="relative"><input${ssrRenderAttr("value", hexColor.value)} type="color" class="w-full h-20 rounded-lg cursor-pointer border"></div></div><div class="space-y-3"><label class="text-sm font-medium">RGB \u503C</label><div class="space-y-2"><div class="flex items-center gap-3"><span class="text-sm font-medium w-8">R</span><input${ssrRenderAttr("value", rgb.value.r)} type="range" min="0" max="255" class="flex-1"><input${ssrRenderAttr("value", rgb.value.r)} type="number" min="0" max="255" class="w-16 px-2 py-1 border rounded text-sm"></div><div class="flex items-center gap-3"><span class="text-sm font-medium w-8">G</span><input${ssrRenderAttr("value", rgb.value.g)} type="range" min="0" max="255" class="flex-1"><input${ssrRenderAttr("value", rgb.value.g)} type="number" min="0" max="255" class="w-16 px-2 py-1 border rounded text-sm"></div><div class="flex items-center gap-3"><span class="text-sm font-medium w-8">B</span><input${ssrRenderAttr("value", rgb.value.b)} type="range" min="0" max="255" class="flex-1"><input${ssrRenderAttr("value", rgb.value.b)} type="number" min="0" max="255" class="w-16 px-2 py-1 border rounded text-sm"></div></div></div><div class="space-y-3"><label class="text-sm font-medium">HSL \u503C</label><div class="space-y-2"><div class="flex items-center gap-3"><span class="text-sm font-medium w-8">H</span><input${ssrRenderAttr("value", hsl.value.h)} type="range" min="0" max="360" class="flex-1"><input${ssrRenderAttr("value", hsl.value.h)} type="number" min="0" max="360" class="w-16 px-2 py-1 border rounded text-sm"></div><div class="flex items-center gap-3"><span class="text-sm font-medium w-8">S</span><input${ssrRenderAttr("value", hsl.value.s)} type="range" min="0" max="100" class="flex-1"><input${ssrRenderAttr("value", hsl.value.s)} type="number" min="0" max="100" class="w-16 px-2 py-1 border rounded text-sm"></div><div class="flex items-center gap-3"><span class="text-sm font-medium w-8">L</span><input${ssrRenderAttr("value", hsl.value.l)} type="range" min="0" max="100" class="flex-1"><input${ssrRenderAttr("value", hsl.value.l)} type="number" min="0" max="100" class="w-16 px-2 py-1 border rounded text-sm"></div></div></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u9884\u8BBE\u989C\u8272</h2><div class="space-y-3"><div><label class="text-sm font-medium mb-2 block">\u57FA\u7840\u989C\u8272</label><div class="grid grid-cols-8 gap-2"><!--[-->`);
      ssrRenderList(basicColors, (color) => {
        _push(`<button style="${ssrRenderStyle({ backgroundColor: color.hex })}" class="aspect-square rounded border hover:scale-110 transition-transform"${ssrRenderAttr("title", color.name)}></button>`);
      });
      _push(`<!--]--></div></div><div><label class="text-sm font-medium mb-2 block">Material Design</label><div class="space-y-2"><!--[-->`);
      ssrRenderList(materialColors, (palette) => {
        _push(`<div class="flex items-center gap-2"><span class="text-xs font-medium w-16">${ssrInterpolate(palette.name)}</span><div class="flex gap-1"><!--[-->`);
        ssrRenderList(palette.colors, (color) => {
          _push(`<button style="${ssrRenderStyle({ backgroundColor: color })}" class="w-8 h-8 rounded hover:scale-110 transition-transform"></button>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="lg:col-span-2 space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u989C\u8272\u503C</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label class="text-sm font-medium">HEX</label><div class="mt-2 flex gap-2"><input${ssrRenderAttr("value", hexColor.value)} type="text" class="flex-1 px-3 py-2 border rounded-md font-mono"><button class="px-3 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors">${ssrInterpolate(copied.value === "hex" ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button></div></div><div><label class="text-sm font-medium">RGB</label><div class="mt-2 flex gap-2"><input${ssrRenderAttr("value", `rgb(${rgb.value.r}, ${rgb.value.g}, ${rgb.value.b})`)} type="text" readonly class="flex-1 px-3 py-2 border rounded-md font-mono bg-muted"><button class="px-3 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors">${ssrInterpolate(copied.value === "rgb" ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button></div></div><div><label class="text-sm font-medium">RGBA</label><div class="mt-2 flex gap-2"><div class="flex-1 flex items-center gap-2"><input${ssrRenderAttr("value", `rgba(${rgb.value.r}, ${rgb.value.g}, ${rgb.value.b}, ${rgba.value.a})`)} type="text" readonly class="flex-1 px-3 py-2 border rounded-md font-mono bg-muted"><input${ssrRenderAttr("value", rgba.value.a)} type="number" min="0" max="1" step="0.1" class="w-16 px-2 py-1 border rounded text-sm"></div><button class="px-3 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors">${ssrInterpolate(copied.value === "rgba" ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button></div></div><div><label class="text-sm font-medium">HSL</label><div class="mt-2 flex gap-2"><input${ssrRenderAttr("value", `hsl(${hsl.value.h}, ${hsl.value.s}%, ${hsl.value.l}%)`)} type="text" readonly class="flex-1 px-3 py-2 border rounded-md font-mono bg-muted"><button class="px-3 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors">${ssrInterpolate(copied.value === "hsl" ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button></div></div><div><label class="text-sm font-medium">HSV</label><div class="mt-2 flex gap-2"><input${ssrRenderAttr("value", `hsv(${hsv.value.h}, ${hsv.value.s}%, ${hsv.value.v}%)`)} type="text" readonly class="flex-1 px-3 py-2 border rounded-md font-mono bg-muted"><button class="px-3 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors">${ssrInterpolate(copied.value === "hsv" ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button></div></div><div><label class="text-sm font-medium">CMYK</label><div class="mt-2 flex gap-2"><input${ssrRenderAttr("value", `cmyk(${cmyk.value.c}, ${cmyk.value.m}, ${cmyk.value.y}, ${cmyk.value.k})`)} type="text" readonly class="flex-1 px-3 py-2 border rounded-md font-mono bg-muted"><button class="px-3 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors">${ssrInterpolate(copied.value === "cmyk" ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button></div></div></div></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u989C\u8272\u5386\u53F2</h2><button class="px-3 py-1 text-sm text-destructive hover:text-destructive/80 transition-colors"> \u6E05\u7A7A </button></div>`);
      if (colorHistory.value.length === 0) {
        _push(`<div class="text-center py-8 text-muted-foreground"> \u6682\u65E0\u5386\u53F2\u8BB0\u5F55 </div>`);
      } else {
        _push(`<div class="grid grid-cols-8 gap-2"><!--[-->`);
        ssrRenderList(colorHistory.value, (color) => {
          _push(`<button style="${ssrRenderStyle({ backgroundColor: color })}" class="aspect-square rounded border hover:scale-110 transition-transform"${ssrRenderAttr("title", color)}></button>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u6E10\u53D8\u751F\u6210\u5668</h2><div class="space-y-4"><div><label class="text-sm font-medium">\u6E10\u53D8\u7C7B\u578B</label><div class="mt-2 flex gap-2"><!--[-->`);
      ssrRenderList(gradientTypes, (type) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-2 rounded-md transition-colors",
          gradientType.value === type.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}">${ssrInterpolate(type.name)}</button>`);
      });
      _push(`<!--]--></div></div><div><label class="text-sm font-medium">\u989C\u8272\u505C\u6B62\u70B9</label><div class="mt-2 space-y-2"><!--[-->`);
      ssrRenderList(gradientStops.value, (stop, index) => {
        _push(`<div class="flex items-center gap-3"><input${ssrRenderAttr("value", stop.color)} type="color" class="w-12 h-8 rounded"><input${ssrRenderAttr("value", stop.position)} type="range" min="0" max="100" class="flex-1"><span class="text-sm w-12">${ssrInterpolate(stop.position)}%</span>`);
        if (gradientStops.value.length > 2) {
          _push(`<button class="text-destructive hover:text-destructive/80">`);
          _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="mt-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm w-full"> \u6DFB\u52A0\u505C\u6B62\u70B9 </button></div><div><label class="text-sm font-medium">\u9884\u89C8</label><div class="mt-2 h-32 rounded-lg border" style="${ssrRenderStyle(gradientStyle.value)}"></div></div><div><label class="text-sm font-medium">CSS \u4EE3\u7801</label><div class="mt-2 flex gap-2"><textarea readonly rows="3" class="flex-1 px-3 py-2 border rounded-md font-mono text-sm bg-muted resize-none">${ssrInterpolate(gradientCSS.value)}</textarea><button class="px-3 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors">${ssrInterpolate(copied.value === "gradient" ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button></div></div></div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5BF9\u6BD4\u5EA6\u68C0\u67E5\u5668</h2><div class="space-y-4"><div class="grid grid-cols-2 gap-4"><div><label class="text-sm font-medium">\u6587\u672C\u989C\u8272</label><input${ssrRenderAttr("value", contrast.value.textColor)} type="color" class="mt-2 w-full h-12 rounded"></div><div><label class="text-sm font-medium">\u80CC\u666F\u989C\u8272</label><input${ssrRenderAttr("value", contrast.value.bgColor)} type="color" class="mt-2 w-full h-12 rounded"></div></div><div><label class="text-sm font-medium">\u9884\u89C8</label><div class="mt-2 p-4 rounded-lg text-center text-2xl font-bold" style="${ssrRenderStyle({
        color: contrast.value.textColor,
        backgroundColor: contrast.value.bgColor
      })}"> \u793A\u4F8B\u6587\u672C </div></div><div class="grid grid-cols-2 gap-4"><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">\u5BF9\u6BD4\u5EA6</div><div class="text-2xl font-bold">${ssrInterpolate(contrastRatio.value)}:1</div></div><div class="p-4 bg-muted rounded-lg"><div class="text-sm text-muted-foreground mb-1">WCAG \u7B49\u7EA7</div><div class="${ssrRenderClass([wcagLevel.value.color, "text-lg font-bold"])}">${ssrInterpolate(wcagLevel.value.text)}</div></div></div></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u8BF4\u660E </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u989C\u8272\u683C\u5F0F\u8BF4\u660E</h4><ul class="list-disc list-inside space-y-1 ml-4"><li><strong>HEX</strong>\uFF1A\u5341\u516D\u8FDB\u5236\u989C\u8272\u4EE3\u7801\uFF0C\u5982 #FF5733</li><li><strong>RGB</strong>\uFF1A\u7EA2\u7EFF\u84DD\u4E09\u539F\u8272\u6A21\u5F0F\uFF0C\u53D6\u503C 0-255</li><li><strong>HSL</strong>\uFF1A\u8272\u76F8\u3001\u9971\u548C\u5EA6\u3001\u4EAE\u5EA6\u6A21\u5F0F</li><li><strong>CMYK</strong>\uFF1A\u5370\u5237\u56DB\u8272\u6A21\u5F0F\uFF08\u9752\u3001\u54C1\u7EA2\u3001\u9EC4\u3001\u9ED1\uFF09</li></ul></div><div><h4 class="font-medium text-foreground mb-2">WCAG \u5BF9\u6BD4\u5EA6\u6807\u51C6</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>AA \u7EA7\u522B\uFF1A\u666E\u901A\u6587\u672C 4.5:1\uFF0C\u5927\u6587\u672C 3:1</li><li>AAA \u7EA7\u522B\uFF1A\u666E\u901A\u6587\u672C 7:1\uFF0C\u5927\u6587\u672C 4.5:1</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/html-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hash), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>HTML \u7F16\u7801</p><p class="text-xs text-muted-foreground"${_scopeId}>HTML\u5B9E\u4F53\u7F16\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hash), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "HTML \u7F16\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "HTML\u5B9E\u4F53\u7F16\u7801")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/base64-encode",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Code), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Base64 \u7F16\u7801</p><p class="text-xs text-muted-foreground"${_scopeId}>\u6587\u672CBase64\u7F16\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Code), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Base64 \u7F16\u7801"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6587\u672CBase64\u7F16\u7801")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/css-format",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>CSS \u683C\u5F0F\u5316</p><p class="text-xs text-muted-foreground"${_scopeId}>CSS\u4EE3\u7801\u683C\u5F0F\u5316</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "CSS \u683C\u5F0F\u5316"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "CSS\u4EE3\u7801\u683C\u5F0F\u5316")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/color-picker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=color-picker-DKETMmd0.mjs.map
