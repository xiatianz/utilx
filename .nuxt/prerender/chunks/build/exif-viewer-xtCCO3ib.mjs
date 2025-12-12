import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { ImageIcon, X, MapPin, Download, FileText, Info, ArrowRight, Droplet, QrCode } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
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
  __name: "exif-viewer",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedImage = ref(null);
    const exifData = ref(null);
    const activeTab = ref("camera");
    ref(null);
    const exifTabs = [
      { key: "camera", name: "\u76F8\u673A\u4FE1\u606F" },
      { key: "gps", name: "GPS \u4F4D\u7F6E" },
      { key: "other", name: "\u5176\u4ED6\u4FE1\u606F" }
    ];
    const hasGPS = computed(() => {
      return exifData.value && (exifData.value.GPSLatitude || exifData.value.GPSLongitude || exifData.value.GPSAltitude);
    });
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    const formatDate = (dateString) => {
      if (!dateString) return "-";
      try {
        const date = new Date(dateString);
        return date.toLocaleString("zh-CN");
      } catch {
        return dateString;
      }
    };
    const formatExposureTime = (value) => {
      if (!value) return "-";
      if (value < 1) {
        return `1/${Math.round(1 / value)}s`;
      }
      return `${value}s`;
    };
    const formatExposureBias = (value) => {
      if (!value) return "-";
      const bias = value.Numerator / value.Denominator;
      return `${bias > 0 ? "+" : ""}${bias} EV`;
    };
    const getFlashDescription = (value) => {
      if (!value) return "\u672A\u4F7F\u7528";
      const flashModes = {
        0: "\u672A\u4F7F\u7528",
        1: "\u4F7F\u7528",
        5: "\u4F7F\u7528\uFF0C\u672A\u68C0\u6D4B\u5230\u56DE\u95EA",
        7: "\u4F7F\u7528\uFF0C\u68C0\u6D4B\u5230\u56DE\u95EA",
        9: "\u5F3A\u5236\u5F00\u542F",
        16: "\u5F3A\u5236\u5173\u95ED",
        24: "\u81EA\u52A8\u6A21\u5F0F",
        25: "\u81EA\u52A8\u6A21\u5F0F\uFF0C\u672A\u68C0\u6D4B\u5230\u56DE\u95EA",
        29: "\u81EA\u52A8\u6A21\u5F0F\uFF0C\u68C0\u6D4B\u5230\u56DE\u95EA"
      };
      return flashModes[value] || "\u672A\u77E5";
    };
    const getExposureMode = (value) => {
      if (!value) return "-";
      const modes = {
        0: "\u672A\u5B9A\u4E49",
        1: "\u624B\u52A8",
        2: "\u7A0B\u5E8F\u81EA\u52A8",
        3: "\u5149\u5708\u4F18\u5148",
        4: "\u5FEB\u95E8\u4F18\u5148",
        5: "\u521B\u610F\u7A0B\u5E8F",
        6: "\u52A8\u4F5C\u6A21\u5F0F",
        7: "\u4EBA\u50CF\u6A21\u5F0F",
        8: "\u98CE\u666F\u6A21\u5F0F"
      };
      return modes[value] || value;
    };
    const getMeteringMode = (value) => {
      if (!value) return "-";
      const modes = {
        0: "\u672A\u77E5",
        1: "\u5E73\u5747\u6D4B\u5149",
        2: "\u4E2D\u592E\u91CD\u70B9\u6D4B\u5149",
        3: "\u70B9\u6D4B\u5149",
        4: "\u591A\u70B9\u6D4B\u5149",
        5: "\u6A21\u5F0F\u6D4B\u5149",
        6: "\u90E8\u5206\u6D4B\u5149"
      };
      return modes[value] || value;
    };
    const getWhiteBalance = (value) => {
      if (!value) return "-";
      const modes = {
        0: "\u81EA\u52A8",
        1: "\u624B\u52A8",
        2: "\u65E5\u5149",
        3: "\u9634\u5929",
        4: "\u767D\u70BD\u706F",
        5: "\u8367\u5149\u706F",
        6: "\u95EA\u5149\u706F"
      };
      return modes[value] || value;
    };
    const getOrientation = (value) => {
      if (!value) return "\u6B63\u5E38";
      const orientations = {
        1: "\u6B63\u5E38",
        2: "\u7FFB\u8F6C",
        3: "\u65CB\u8F6C180\xB0",
        4: "\u987A\u65F6\u948890\xB0",
        5: "\u9006\u65F6\u948890\xB0",
        6: "\u987A\u65F6\u948890\xB0\u5E76\u7FFB\u8F6C",
        7: "\u9006\u65F6\u948890\xB0\u5E76\u7FFB\u8F6C",
        8: "\u65CB\u8F6C270\xB0"
      };
      return orientations[value] || value;
    };
    const formatGPSLatitude = (latitude, ref2) => {
      if (!latitude || !ref2) return "-";
      const degrees = latitude.degrees;
      const minutes = latitude.minutes;
      const seconds = latitude.seconds;
      const decimalDegrees = degrees + minutes / 60 + seconds / 3600;
      const direction = ref2 === "N" ? "N" : "S";
      return `${Math.abs(decimalDegrees).toFixed(6)}\xB0 ${direction}`;
    };
    const formatGPSLongitude = (longitude, ref2) => {
      if (!longitude || !ref2) return "-";
      const degrees = longitude.degrees;
      const minutes = longitude.minutes;
      const seconds = longitude.seconds;
      const decimalDegrees = degrees + minutes / 60 + seconds / 3600;
      const direction = ref2 === "E" ? "E" : "W";
      return `${Math.abs(decimalDegrees).toFixed(6)}\xB0 ${direction}`;
    };
    const formatGPSAltitude = (altitude, ref2) => {
      if (!altitude) return "-";
      const alt = altitude;
      const direction = ref2 === 0 ? "\u6D77\u5E73\u9762" : "\u6D77\u5E73\u9762\u4E0B";
      return `${alt.toFixed(2)}m ${direction}`;
    };
    useSeoMeta({
      title: "EXIF\u67E5\u770B\u5668 - \u5728\u7EBF\u67E5\u770B\u56FE\u7247EXIF\u4FE1\u606F\u5DE5\u5177",
      description: "\u514D\u8D39\u5728\u7EBFEXIF\u67E5\u770B\u5DE5\u5177\uFF0C\u67E5\u770B\u56FE\u7247\u7684\u62CD\u6444\u53C2\u6570\u3001GPS\u4F4D\u7F6E\u3001\u76F8\u673A\u4FE1\u606F\u7B49\u5143\u6570\u636E\u3002",
      keywords: ["exif", "exif\u67E5\u770B\u5668", "\u56FE\u7247\u5143\u6570\u636E", "\u62CD\u6444\u53C2\u6570", "gps\u4FE1\u606F", "\u5728\u7EBF\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">EXIF \u67E5\u770B\u5668</h1><p class="text-muted-foreground">\u67E5\u770B\u56FE\u7247\u7684 EXIF \u5143\u6570\u636E\u4FE1\u606F\uFF0C\u5305\u62EC\u62CD\u6444\u53C2\u6570\u3001GPS \u4F4D\u7F6E\u7B49</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u4E0A\u4F20\u56FE\u7247</h2><div class="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"><input type="file" class="hidden" accept="image/*">`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2">\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u91CC</p><p class="text-sm text-muted-foreground">\u652F\u6301 JPG\u3001TIFF \u7B49\u683C\u5F0F</p></div>`);
      if (selectedImage.value) {
        _push(`<div class="mt-4 space-y-4"><div class="relative"><img${ssrRenderAttr("src", selectedImage.value.url)}${ssrRenderAttr("alt", selectedImage.value.name)} class="w-full rounded-lg"><button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div><div class="text-sm text-muted-foreground"><p>\u6587\u4EF6\u540D\uFF1A${ssrInterpolate(selectedImage.value.name)}</p><p>\u6587\u4EF6\u5927\u5C0F\uFF1A${ssrInterpolate(formatFileSize(selectedImage.value.size))}</p><p>\u5C3A\u5BF8\uFF1A${ssrInterpolate(selectedImage.value.width)} \xD7 ${ssrInterpolate(selectedImage.value.height)} px</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (exifData.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5FEB\u901F\u4FE1\u606F</h2><div class="space-y-3">`);
        if (exifData.value.DateTime) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">\u62CD\u6444\u65F6\u95F4</span><span class="font-mono">${ssrInterpolate(formatDate(exifData.value.DateTime))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (exifData.value.Make && exifData.value.Model) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">\u76F8\u673A\u578B\u53F7</span><span>${ssrInterpolate(exifData.value.Make)} ${ssrInterpolate(exifData.value.Model)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (exifData.value.FocalLength) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">\u7126\u8DDD</span><span>${ssrInterpolate(exifData.value.FocalLength)}mm</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (exifData.value.FNumber) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">\u5149\u5708</span><span>f/${ssrInterpolate(exifData.value.FNumber)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (exifData.value.ExposureTime) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">\u5FEB\u95E8\u901F\u5EA6</span><span>${ssrInterpolate(formatExposureTime(exifData.value.ExposureTime))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (exifData.value.ISO) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">ISO</span><span>${ssrInterpolate(exifData.value.ISO)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (exifData.value.Flash) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">\u95EA\u5149\u706F</span><span>${ssrInterpolate(getFlashDescription(exifData.value.Flash))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-4">`);
      if (exifData.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">EXIF \u6570\u636E\u8BE6\u60C5</h2><div class="flex gap-2 mb-6 border-b"><!--[-->`);
        ssrRenderList(exifTabs, (tab) => {
          _push(`<button class="${ssrRenderClass([
            "px-4 py-2 -mb-px border-b-2 transition-colors text-sm",
            activeTab.value === tab.key ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
          ])}">${ssrInterpolate(tab.name)}</button>`);
        });
        _push(`<!--]--></div>`);
        if (activeTab.value === "camera") {
          _push(`<div class="space-y-4"><div class="grid grid-cols-2 gap-4 text-sm"><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">\u57FA\u672C\u4FE1\u606F</h3><div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground">\u5236\u9020\u5546</span><span>${ssrInterpolate(exifData.value.Make || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u76F8\u673A\u578B\u53F7</span><span>${ssrInterpolate(exifData.value.Model || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u8F6F\u4EF6</span><span>${ssrInterpolate(exifData.value.Software || "-")}</span></div></div></div><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">\u62CD\u6444\u53C2\u6570</h3><div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground">\u5149\u5708\u503C</span><span>f/${ssrInterpolate(exifData.value.FNumber || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u5FEB\u95E8\u901F\u5EA6</span><span>${ssrInterpolate(formatExposureTime(exifData.value.ExposureTime) || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">ISO \u611F\u5149\u5EA6</span><span>${ssrInterpolate(exifData.value.ISO || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u7126\u8DDD</span><span>${ssrInterpolate(exifData.value.FocalLength ? exifData.value.FocalLength + "mm" : "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">35mm\u7B49\u6548\u7126\u8DDD</span><span>${ssrInterpolate(exifData.value.FocalLengthIn35mmFilm ? exifData.value.FocalLengthIn35mmFilm + "mm" : "-")}</span></div></div></div><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">\u66DD\u5149\u4FE1\u606F</h3><div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground">\u66DD\u5149\u6A21\u5F0F</span><span>${ssrInterpolate(getExposureMode(exifData.value.ExposureMode) || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u6D4B\u5149\u6A21\u5F0F</span><span>${ssrInterpolate(getMeteringMode(exifData.value.MeteringMode) || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u66DD\u5149\u8865\u507F</span><span>${ssrInterpolate(exifData.value.ExposureBiasValue ? formatExposureBias(exifData.value.ExposureBiasValue) : "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u767D\u5E73\u8861</span><span>${ssrInterpolate(getWhiteBalance(exifData.value.WhiteBalance) || "-")}</span></div></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "gps") {
          _push(`<div class="space-y-4">`);
          if (hasGPS.value) {
            _push(`<div class="space-y-4"><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">\u4F4D\u7F6E\u4FE1\u606F</h3><div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground">\u7EAC\u5EA6</span><span>${ssrInterpolate(formatGPSLatitude(exifData.value.GPSLatitude, exifData.value.GPSLatitudeRef))}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u7ECF\u5EA6</span><span>${ssrInterpolate(formatGPSLongitude(exifData.value.GPSLongitude, exifData.value.GPSLongitudeRef))}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u6D77\u62D4</span><span>${ssrInterpolate(formatGPSAltitude(exifData.value.GPSAltitude, exifData.value.GPSAltitudeRef))}</span></div></div></div><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">\u5730\u56FE</h3><div class="aspect-video bg-muted rounded-lg flex items-center justify-center"><p class="text-muted-foreground">\u5730\u56FE\u529F\u80FD\u9700\u8981\u5728\u7EBF\u670D\u52A1\u652F\u6301</p></div></div></div>`);
          } else {
            _push(`<div class="text-center py-12 text-muted-foreground">`);
            _push(ssrRenderComponent(unref(MapPin), { class: "w-12 h-12 mx-auto mb-4" }, null, _parent));
            _push(`<p>\u8BE5\u56FE\u7247\u4E0D\u5305\u542B GPS \u4FE1\u606F</p></div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "other") {
          _push(`<div class="space-y-4"><div class="grid grid-cols-2 gap-4 text-sm"><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">\u56FE\u50CF\u4FE1\u606F</h3><div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground">\u65B9\u5411</span><span>${ssrInterpolate(getOrientation(exifData.value.Orientation))}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u5206\u8FA8\u7387\u5355\u4F4D</span><span>${ssrInterpolate(exifData.value.ResolutionUnit || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">X\u5206\u8FA8\u7387</span><span>${ssrInterpolate(exifData.value.XResolution || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">Y\u5206\u8FA8\u7387</span><span>${ssrInterpolate(exifData.value.YResolution || "-")}</span></div></div></div><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">\u7248\u6743\u4FE1\u606F</h3><div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground">\u7248\u6743</span><span>${ssrInterpolate(exifData.value.Copyright || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u827A\u672F\u5BB6</span><span>${ssrInterpolate(exifData.value.Artist || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">\u6CE8\u91CA</span><span class="truncate max-w-xs">${ssrInterpolate(exifData.value.ImageDescription || "-")}</span></div></div></div><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">\u539F\u59CB\u6570\u636E</h3><textarea readonly rows="10" class="w-full px-3 py-2 border rounded-md bg-background font-mono text-xs resize-none">${ssrInterpolate(JSON.stringify(exifData.value, null, 2))}</textarea></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="bg-card border rounded-lg p-12 text-center">`);
        _push(ssrRenderComponent(unref(ImageIcon), { class: "w-16 h-16 mx-auto text-muted-foreground mb-4" }, null, _parent));
        _push(`<p class="text-muted-foreground">\u4E0A\u4F20\u56FE\u7247\u67E5\u770B EXIF \u4FE1\u606F</p></div>`);
      }
      if (exifData.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5BFC\u51FA</h2><div class="grid grid-cols-2 gap-3"><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` \u5BFC\u51FA JSON </button><button class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(FileText), { class: "w-4 h-4" }, null, _parent));
        _push(` \u5BFC\u51FA CSV </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u5173\u4E8E EXIF </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u4EC0\u4E48\u662F EXIF\uFF1F</h4><p>EXIF\uFF08Exchangeable Image File Format\uFF09\u662F\u4E00\u79CD\u53EF\u4EA4\u6362\u56FE\u50CF\u6587\u4EF6\u683C\u5F0F\uFF0C\u662F\u4E13\u95E8\u4E3A\u6570\u7801\u76F8\u673A\u7167\u7247\u8BBE\u5B9A\u7684\uFF0C\u53EF\u4EE5\u8BB0\u5F55\u6570\u7801\u7167\u7247\u7684\u5C5E\u6027\u4FE1\u606F\u548C\u62CD\u6444\u6570\u636E\u3002</p></div><div><h4 class="font-medium text-foreground mb-2">\u5305\u542B\u4FE1\u606F</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u62CD\u6444\u65F6\u95F4\u3001\u65E5\u671F</li><li>\u76F8\u673A\u5236\u9020\u5546\u548C\u578B\u53F7</li><li>\u62CD\u6444\u53C2\u6570\uFF08\u5149\u5708\u3001\u5FEB\u95E8\u3001ISO\u7B49\uFF09</li><li>GPS \u4F4D\u7F6E\u4FE1\u606F\uFF08\u7ECF\u7EAC\u5EA6\u3001\u6D77\u62D4\uFF09</li><li>\u56FE\u50CF\u5206\u8FA8\u7387\u548C\u65B9\u5411</li><li>\u7248\u6743\u548C\u827A\u672F\u5BB6\u4FE1\u606F</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u6CE8\u610F\u4E8B\u9879</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>\u4E0D\u662F\u6240\u6709\u56FE\u7247\u90FD\u5305\u542B EXIF \u6570\u636E</li><li>JPG \u548C TIFF \u683C\u5F0F\u901A\u5E38\u652F\u6301 EXIF</li><li>PNG \u683C\u5F0F\u901A\u5E38\u4E0D\u5305\u542B\u76F8\u673A EXIF</li><li>\u793E\u4EA4\u5A92\u4F53\u901A\u5E38\u4F1A\u5220\u9664 EXIF \u4FE1\u606F</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-metadata",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u56FE\u7247\u5143\u6570\u636E</p><p class="text-xs text-muted-foreground"${_scopeId}>\u67E5\u770B\u56FE\u7247\u5143\u6570\u636E</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Info), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u56FE\u7247\u5143\u6570\u636E"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u67E5\u770B\u56FE\u7247\u5143\u6570\u636E")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-watermark",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Droplet), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u56FE\u7247\u6C34\u5370</p><p class="text-xs text-muted-foreground"${_scopeId}>\u6DFB\u52A0\u6587\u5B57/\u56FE\u7247\u6C34\u5370</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Droplet), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u56FE\u7247\u6C34\u5370"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6DFB\u52A0\u6587\u5B57/\u56FE\u7247\u6C34\u5370")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/qrcode-generate",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(QrCode), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>\u4E8C\u7EF4\u7801\u751F\u6210\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u5728\u7EBF\u751F\u6210\u4E8C\u7EF4\u7801</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(QrCode), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "\u4E8C\u7EF4\u7801\u751F\u6210\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u5728\u7EBF\u751F\u6210\u4E8C\u7EF4\u7801")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/exif-viewer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=exif-viewer-xtCCO3ib.mjs.map
