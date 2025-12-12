import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { ImageIcon, X, MapPin, Download, FileText, Info, ArrowRight, Droplet, QrCode } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "exif-viewer",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedImage = ref(null);
    const exifData = ref(null);
    const activeTab = ref("camera");
    ref(null);
    const exifTabs = [
      { key: "camera", name: "相机信息" },
      { key: "gps", name: "GPS 位置" },
      { key: "other", name: "其他信息" }
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
      if (!value) return "未使用";
      const flashModes = {
        0: "未使用",
        1: "使用",
        5: "使用，未检测到回闪",
        7: "使用，检测到回闪",
        9: "强制开启",
        16: "强制关闭",
        24: "自动模式",
        25: "自动模式，未检测到回闪",
        29: "自动模式，检测到回闪"
      };
      return flashModes[value] || "未知";
    };
    const getExposureMode = (value) => {
      if (!value) return "-";
      const modes = {
        0: "未定义",
        1: "手动",
        2: "程序自动",
        3: "光圈优先",
        4: "快门优先",
        5: "创意程序",
        6: "动作模式",
        7: "人像模式",
        8: "风景模式"
      };
      return modes[value] || value;
    };
    const getMeteringMode = (value) => {
      if (!value) return "-";
      const modes = {
        0: "未知",
        1: "平均测光",
        2: "中央重点测光",
        3: "点测光",
        4: "多点测光",
        5: "模式测光",
        6: "部分测光"
      };
      return modes[value] || value;
    };
    const getWhiteBalance = (value) => {
      if (!value) return "-";
      const modes = {
        0: "自动",
        1: "手动",
        2: "日光",
        3: "阴天",
        4: "白炽灯",
        5: "荧光灯",
        6: "闪光灯"
      };
      return modes[value] || value;
    };
    const getOrientation = (value) => {
      if (!value) return "正常";
      const orientations = {
        1: "正常",
        2: "翻转",
        3: "旋转180°",
        4: "顺时针90°",
        5: "逆时针90°",
        6: "顺时针90°并翻转",
        7: "逆时针90°并翻转",
        8: "旋转270°"
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
      return `${Math.abs(decimalDegrees).toFixed(6)}° ${direction}`;
    };
    const formatGPSLongitude = (longitude, ref2) => {
      if (!longitude || !ref2) return "-";
      const degrees = longitude.degrees;
      const minutes = longitude.minutes;
      const seconds = longitude.seconds;
      const decimalDegrees = degrees + minutes / 60 + seconds / 3600;
      const direction = ref2 === "E" ? "E" : "W";
      return `${Math.abs(decimalDegrees).toFixed(6)}° ${direction}`;
    };
    const formatGPSAltitude = (altitude, ref2) => {
      if (!altitude) return "-";
      const alt = altitude;
      const direction = ref2 === 0 ? "海平面" : "海平面下";
      return `${alt.toFixed(2)}m ${direction}`;
    };
    useSeoMeta({
      title: "EXIF查看器 - 在线查看图片EXIF信息工具",
      description: "免费在线EXIF查看工具，查看图片的拍摄参数、GPS位置、相机信息等元数据。",
      keywords: ["exif", "exif查看器", "图片元数据", "拍摄参数", "gps信息", "在线工具"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">EXIF 查看器</h1><p class="text-muted-foreground">查看图片的 EXIF 元数据信息，包括拍摄参数、GPS 位置等</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">上传图片</h2><div class="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"><input type="file" class="hidden" accept="image/*">`);
      _push(ssrRenderComponent(unref(ImageIcon), { class: "w-12 h-12 mx-auto text-muted-foreground mb-4" }, null, _parent));
      _push(`<p class="text-lg font-medium mb-2">拖拽图片到这里</p><p class="text-sm text-muted-foreground">支持 JPG、TIFF 等格式</p></div>`);
      if (selectedImage.value) {
        _push(`<div class="mt-4 space-y-4"><div class="relative"><img${ssrRenderAttr("src", selectedImage.value.url)}${ssrRenderAttr("alt", selectedImage.value.name)} class="w-full rounded-lg"><button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div><div class="text-sm text-muted-foreground"><p>文件名：${ssrInterpolate(selectedImage.value.name)}</p><p>文件大小：${ssrInterpolate(formatFileSize(selectedImage.value.size))}</p><p>尺寸：${ssrInterpolate(selectedImage.value.width)} × ${ssrInterpolate(selectedImage.value.height)} px</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (exifData.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">快速信息</h2><div class="space-y-3">`);
        if (exifData.value.DateTime) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">拍摄时间</span><span class="font-mono">${ssrInterpolate(formatDate(exifData.value.DateTime))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (exifData.value.Make && exifData.value.Model) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">相机型号</span><span>${ssrInterpolate(exifData.value.Make)} ${ssrInterpolate(exifData.value.Model)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (exifData.value.FocalLength) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">焦距</span><span>${ssrInterpolate(exifData.value.FocalLength)}mm</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (exifData.value.FNumber) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">光圈</span><span>f/${ssrInterpolate(exifData.value.FNumber)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (exifData.value.ExposureTime) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">快门速度</span><span>${ssrInterpolate(formatExposureTime(exifData.value.ExposureTime))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (exifData.value.ISO) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">ISO</span><span>${ssrInterpolate(exifData.value.ISO)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (exifData.value.Flash) {
          _push(`<div class="flex justify-between text-sm"><span class="text-muted-foreground">闪光灯</span><span>${ssrInterpolate(getFlashDescription(exifData.value.Flash))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-2 space-y-4">`);
      if (exifData.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">EXIF 数据详情</h2><div class="flex gap-2 mb-6 border-b"><!--[-->`);
        ssrRenderList(exifTabs, (tab) => {
          _push(`<button class="${ssrRenderClass([
            "px-4 py-2 -mb-px border-b-2 transition-colors text-sm",
            activeTab.value === tab.key ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
          ])}">${ssrInterpolate(tab.name)}</button>`);
        });
        _push(`<!--]--></div>`);
        if (activeTab.value === "camera") {
          _push(`<div class="space-y-4"><div class="grid grid-cols-2 gap-4 text-sm"><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">基本信息</h3><div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground">制造商</span><span>${ssrInterpolate(exifData.value.Make || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">相机型号</span><span>${ssrInterpolate(exifData.value.Model || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">软件</span><span>${ssrInterpolate(exifData.value.Software || "-")}</span></div></div></div><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">拍摄参数</h3><div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground">光圈值</span><span>f/${ssrInterpolate(exifData.value.FNumber || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">快门速度</span><span>${ssrInterpolate(formatExposureTime(exifData.value.ExposureTime) || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">ISO 感光度</span><span>${ssrInterpolate(exifData.value.ISO || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">焦距</span><span>${ssrInterpolate(exifData.value.FocalLength ? exifData.value.FocalLength + "mm" : "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">35mm等效焦距</span><span>${ssrInterpolate(exifData.value.FocalLengthIn35mmFilm ? exifData.value.FocalLengthIn35mmFilm + "mm" : "-")}</span></div></div></div><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">曝光信息</h3><div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground">曝光模式</span><span>${ssrInterpolate(getExposureMode(exifData.value.ExposureMode) || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">测光模式</span><span>${ssrInterpolate(getMeteringMode(exifData.value.MeteringMode) || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">曝光补偿</span><span>${ssrInterpolate(exifData.value.ExposureBiasValue ? formatExposureBias(exifData.value.ExposureBiasValue) : "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">白平衡</span><span>${ssrInterpolate(getWhiteBalance(exifData.value.WhiteBalance) || "-")}</span></div></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "gps") {
          _push(`<div class="space-y-4">`);
          if (hasGPS.value) {
            _push(`<div class="space-y-4"><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">位置信息</h3><div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground">纬度</span><span>${ssrInterpolate(formatGPSLatitude(exifData.value.GPSLatitude, exifData.value.GPSLatitudeRef))}</span></div><div class="flex justify-between"><span class="text-muted-foreground">经度</span><span>${ssrInterpolate(formatGPSLongitude(exifData.value.GPSLongitude, exifData.value.GPSLongitudeRef))}</span></div><div class="flex justify-between"><span class="text-muted-foreground">海拔</span><span>${ssrInterpolate(formatGPSAltitude(exifData.value.GPSAltitude, exifData.value.GPSAltitudeRef))}</span></div></div></div><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">地图</h3><div class="aspect-video bg-muted rounded-lg flex items-center justify-center"><p class="text-muted-foreground">地图功能需要在线服务支持</p></div></div></div>`);
          } else {
            _push(`<div class="text-center py-12 text-muted-foreground">`);
            _push(ssrRenderComponent(unref(MapPin), { class: "w-12 h-12 mx-auto mb-4" }, null, _parent));
            _push(`<p>该图片不包含 GPS 信息</p></div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "other") {
          _push(`<div class="space-y-4"><div class="grid grid-cols-2 gap-4 text-sm"><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">图像信息</h3><div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground">方向</span><span>${ssrInterpolate(getOrientation(exifData.value.Orientation))}</span></div><div class="flex justify-between"><span class="text-muted-foreground">分辨率单位</span><span>${ssrInterpolate(exifData.value.ResolutionUnit || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">X分辨率</span><span>${ssrInterpolate(exifData.value.XResolution || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">Y分辨率</span><span>${ssrInterpolate(exifData.value.YResolution || "-")}</span></div></div></div><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">版权信息</h3><div class="space-y-2"><div class="flex justify-between"><span class="text-muted-foreground">版权</span><span>${ssrInterpolate(exifData.value.Copyright || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">艺术家</span><span>${ssrInterpolate(exifData.value.Artist || "-")}</span></div><div class="flex justify-between"><span class="text-muted-foreground">注释</span><span class="truncate max-w-xs">${ssrInterpolate(exifData.value.ImageDescription || "-")}</span></div></div></div><div class="p-4 bg-muted rounded-lg"><h3 class="font-medium mb-3">原始数据</h3><textarea readonly rows="10" class="w-full px-3 py-2 border rounded-md bg-background font-mono text-xs resize-none">${ssrInterpolate(JSON.stringify(exifData.value, null, 2))}</textarea></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="bg-card border rounded-lg p-12 text-center">`);
        _push(ssrRenderComponent(unref(ImageIcon), { class: "w-16 h-16 mx-auto text-muted-foreground mb-4" }, null, _parent));
        _push(`<p class="text-muted-foreground">上传图片查看 EXIF 信息</p></div>`);
      }
      if (exifData.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">导出</h2><div class="grid grid-cols-2 gap-3"><button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` 导出 JSON </button><button class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(FileText), { class: "w-4 h-4" }, null, _parent));
        _push(` 导出 CSV </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 关于 EXIF </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">什么是 EXIF？</h4><p>EXIF（Exchangeable Image File Format）是一种可交换图像文件格式，是专门为数码相机照片设定的，可以记录数码照片的属性信息和拍摄数据。</p></div><div><h4 class="font-medium text-foreground mb-2">包含信息</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>拍摄时间、日期</li><li>相机制造商和型号</li><li>拍摄参数（光圈、快门、ISO等）</li><li>GPS 位置信息（经纬度、海拔）</li><li>图像分辨率和方向</li><li>版权和艺术家信息</li></ul></div><div><h4 class="font-medium text-foreground mb-2">注意事项</h4><ul class="list-disc list-inside space-y-1 ml-4"><li>不是所有图片都包含 EXIF 数据</li><li>JPG 和 TIFF 格式通常支持 EXIF</li><li>PNG 格式通常不包含相机 EXIF</li><li>社交媒体通常会删除 EXIF 信息</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/image-metadata",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>图片元数据</p><p class="text-xs text-muted-foreground"${_scopeId}>查看图片元数据</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Info), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "图片元数据"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "查看图片元数据")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>图片水印</p><p class="text-xs text-muted-foreground"${_scopeId}>添加文字/图片水印</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Droplet), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "图片水印"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "添加文字/图片水印")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>二维码生成器</p><p class="text-xs text-muted-foreground"${_scopeId}>在线生成二维码</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(QrCode), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "二维码生成器"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "在线生成二维码")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=exif-viewer-xtCCO3ib.js.map
