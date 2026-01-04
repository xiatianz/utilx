<template>
  <div class="max-w-6xl mx-auto">
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">电脑系统检测工具</h1>
      <p class="text-muted-foreground">全面检测您的电脑系统信息，包括操作系统、硬件配置、浏览器环境等</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 左侧：主要信息 -->
      <div class="lg:col-span-2 space-y-4">
        <!-- 操作系统信息 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Monitor class="w-5 h-5 text-primary" />
            操作系统信息
          </h2>

          <div class="grid grid-cols-2 gap-3 text-sm">
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">操作系统</p>
              <p class="font-medium">{{ systemInfo.os }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">操作系统版本</p>
              <p class="font-medium">{{ systemInfo.osVersion }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">系统架构</p>
              <p class="font-medium">{{ systemInfo.architecture }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">CPU 核心数</p>
              <p class="font-medium">{{ systemInfo.cpuCores }} 核心</p>
            </div>
          </div>
        </div>

        <!-- 硬件信息 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Cpu class="w-5 h-5 text-primary" />
            硬件信息
          </h2>

          <div class="grid grid-cols-2 gap-3 text-sm">
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">设备内存 (RAM)</p>
              <p class="font-medium">{{ systemInfo.ram }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">屏幕分辨率</p>
              <p class="font-medium">{{ systemInfo.screen }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">像素密度 (DPR)</p>
              <p class="font-medium">{{ systemInfo.dpr }}x</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">色深</p>
              <p class="font-medium">{{ systemInfo.colorDepth }} 位</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">触控支持</p>
              <p class="font-medium">{{ systemInfo.touchSupport }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">网络类型</p>
              <p class="font-medium">{{ systemInfo.networkType }}</p>
            </div>
          </div>
        </div>

        <!-- 浏览器信息 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Globe class="w-5 h-5 text-primary" />
            浏览器信息
          </h2>

          <div class="grid grid-cols-2 gap-3 text-sm">
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">浏览器名称</p>
              <p class="font-medium">{{ systemInfo.browser }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">浏览器版本</p>
              <p class="font-medium">{{ systemInfo.browserVersion }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">渲染引擎</p>
              <p class="font-medium">{{ systemInfo.engine }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">JavaScript 引擎</p>
              <p class="font-medium">{{ systemInfo.jsEngine }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">Cookie 支持</p>
              <p class="font-medium">{{ systemInfo.cookieEnabled ? '是' : '否' }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">在线状态</p>
              <p class="font-medium">{{ systemInfo.onLine ? '在线' : '离线' }}</p>
            </div>
          </div>
        </div>

        <!-- 语言和时区 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Languages class="w-5 h-5 text-primary" />
            语言和时区
          </h2>

          <div class="grid grid-cols-2 gap-3 text-sm">
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">系统语言</p>
              <p class="font-medium">{{ systemInfo.language }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">时区</p>
              <p class="font-medium">{{ systemInfo.timezone }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">本地时间</p>
              <p class="font-medium">{{ systemInfo.localTime }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground">UTC 时间</p>
              <p class="font-medium">{{ systemInfo.utcTime }}</p>
            </div>
          </div>
        </div>

        <!-- WebGL 和 GPU 信息 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Gamepad2 class="w-5 h-5 text-primary" />
            图形设备信息
          </h2>

          <div class="space-y-3 text-sm">
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground mb-1">WebGL 支持</p>
              <p class="font-medium">{{ systemInfo.webglSupport }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground mb-1">GPU 渲染器</p>
              <p class="font-medium break-all">{{ systemInfo.gpuRenderer }}</p>
            </div>
            <div class="p-3 bg-muted rounded">
              <p class="text-muted-foreground mb-1">GPU 供应商</p>
              <p class="font-medium">{{ systemInfo.gpuVendor }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：辅助信息 -->
      <div class="space-y-4">
        <!-- 功能支持检测 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">功能支持</h2>

          <div class="space-y-2 text-sm">
            <div class="flex items-center justify-between p-2 bg-muted rounded">
              <span>LocalStorage</span>
              <span :class="systemInfo.features.localStorage ? 'text-green-600' : 'text-red-600'">
                {{ systemInfo.features.localStorage ? '✓ 支持' : '✗ 不支持' }}
              </span>
            </div>
            <div class="flex items-center justify-between p-2 bg-muted rounded">
              <span>SessionStorage</span>
              <span :class="systemInfo.features.sessionStorage ? 'text-green-600' : 'text-red-600'">
                {{ systemInfo.features.sessionStorage ? '✓ 支持' : '✗ 不支持' }}
              </span>
            </div>
            <div class="flex items-center justify-between p-2 bg-muted rounded">
              <span>Web Worker</span>
              <span :class="systemInfo.features.webWorker ? 'text-green-600' : 'text-red-600'">
                {{ systemInfo.features.webWorker ? '✓ 支持' : '✗ 不支持' }}
              </span>
            </div>
            <div class="flex items-center justify-between p-2 bg-muted rounded">
              <span>WebGL</span>
              <span :class="systemInfo.features.webgl ? 'text-green-600' : 'text-red-600'">
                {{ systemInfo.features.webgl ? '✓ 支持' : '✗ 不支持' }}
              </span>
            </div>
            <div class="flex items-center justify-between p-2 bg-muted rounded">
              <span>WebGL2</span>
              <span :class="systemInfo.features.webgl2 ? 'text-green-600' : 'text-red-600'">
                {{ systemInfo.features.webgl2 ? '✓ 支持' : '✗ 不支持' }}
              </span>
            </div>
            <div class="flex items-center justify-between p-2 bg-muted rounded">
              <span>Geolocation</span>
              <span :class="systemInfo.features.geolocation ? 'text-green-600' : 'text-red-600'">
                {{ systemInfo.features.geolocation ? '✓ 支持' : '✗ 不支持' }}
              </span>
            </div>
            <div class="flex items-center justify-between p-2 bg-muted rounded">
              <span>WebSocket</span>
              <span :class="systemInfo.features.webSocket ? 'text-green-600' : 'text-red-600'">
                {{ systemInfo.features.webSocket ? '✓ 支持' : '✗ 不支持' }}
              </span>
            </div>
          </div>
        </div>

        <!-- User Agent -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">User Agent</h2>

          <div class="p-3 bg-muted rounded text-xs break-all">
            {{ systemInfo.userAgent }}
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">操作</h2>

          <div class="space-y-2">
            <button @click="copySystemInfo" class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">
              <Copy class="w-4 h-4 inline mr-2" />
              复制系统信息
            </button>
            <button @click="refreshInfo" class="w-full px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm">
              <RefreshCw class="w-4 h-4 inline mr-2" />
              刷新信息
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSeoMeta } from '#app'
import { Monitor, Cpu, Globe, Languages, Gamepad2, Copy, RefreshCw } from 'lucide-vue-next'

const systemInfo = ref({
  os: '',
  osVersion: '',
  architecture: '',
  cpuCores: 0,
  ram: '',
  screen: '',
  dpr: 1,
  colorDepth: 0,
  touchSupport: '',
  networkType: '',
  browser: '',
  browserVersion: '',
  engine: '',
  jsEngine: '',
  cookieEnabled: false,
  onLine: false,
  language: '',
  timezone: '',
  localTime: '',
  utcTime: '',
  webglSupport: '',
  gpuRenderer: '',
  gpuVendor: '',
  userAgent: '',
  features: {
    localStorage: false,
    sessionStorage: false,
    webWorker: false,
    webgl: false,
    webgl2: false,
    geolocation: false,
    webSocket: false
  }
})

function getSystemInfo() {
  const ua = navigator.userAgent
  const platform = navigator.platform
  const screenInfo = window.screen

  // 检测操作系统
  let os = '未知系统'
  if (platform.indexOf('Win') !== -1) os = 'Windows'
  else if (platform.indexOf('Mac') !== -1) os = 'macOS'
  else if (platform.indexOf('Linux') !== -1) os = 'Linux'
  else if (platform.indexOf('iPhone') !== -1) os = 'iOS'
  else if (platform.indexOf('iPad') !== -1) os = 'iPadOS'
  else if (platform.indexOf('Android') !== -1) os = 'Android'

  // 检测浏览器
  let browser = '未知浏览器'
  let browserVersion = ''
  let engine = ''
  let jsEngine = ''

  if (ua.indexOf('Firefox') !== -1) {
    browser = 'Firefox'
    browserVersion = ua.match(/Firefox\/([\d.]+)/)?.[1] || ''
    engine = 'Gecko'
  } else if (ua.indexOf('Edg') !== -1) {
    browser = 'Microsoft Edge'
    browserVersion = ua.match(/Edg\/([\d.]+)/)?.[1] || ''
    engine = 'Blink'
  } else if (ua.indexOf('Chrome') !== -1) {
    browser = 'Chrome'
    browserVersion = ua.match(/Chrome\/([\d.]+)/)?.[1] || ''
    engine = 'Blink'
  } else if (ua.indexOf('Safari') !== -1) {
    browser = 'Safari'
    browserVersion = ua.match(/Version\/([\d.]+)/)?.[1] || ''
    engine = 'WebKit'
  }

  // 获取 JavaScript 引擎
  jsEngine = typeof V8 !== 'undefined' ? 'V8' :
             typeof SpiderMonkey !== 'undefined' ? 'SpiderMonkey' :
             typeof JavaScriptCore !== 'undefined' ? 'JavaScriptCore' : '未知'

  // 获取 RAM 大小（估算）
  const ram = navigator.deviceMemory ? `${navigator.deviceMemory} GB` : '未知'

  // 获取网络类型
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  const networkType = connection ? connection.effectiveType : '未知'

  // 触控支持
  const touchSupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) ? '支持' : '不支持'

  // 获取时区
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  // 更新时间
  updateTimes()

  // 获取 WebGL 信息
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  let webglSupport = '不支持'
  let gpuRenderer = '未知'
  let gpuVendor = '未知'

  if (gl) {
    webglSupport = '支持'
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    if (debugInfo) {
      gpuVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
      gpuRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    }
  }

  // 更新系统信息
  systemInfo.value = {
    os,
    osVersion: navigator.oscpu || '未知',
    architecture: platform || '未知',
    cpuCores: navigator.hardwareConcurrency || 0,
    ram,
    screen: `${screenInfo.width} x ${screenInfo.height}`,
    dpr: window.devicePixelRatio || 1,
    colorDepth: screenInfo.colorDepth,
    touchSupport,
    networkType,
    browser,
    browserVersion,
    engine,
    jsEngine,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
    language: navigator.language,
    timezone,
    localTime: systemInfo.value.localTime,
    utcTime: systemInfo.value.utcTime,
    webglSupport,
    gpuRenderer,
    gpuVendor,
    userAgent: ua,
    features: {
      localStorage: typeof(Storage) !== 'undefined' && 'localStorage' in window,
      sessionStorage: typeof(Storage) !== 'undefined' && 'sessionStorage' in window,
      webWorker: typeof(Worker) !== 'undefined',
      webgl: !!gl,
      webgl2: !!canvas.getContext('webgl2'),
      geolocation: 'geolocation' in navigator,
      webSocket: typeof(WebSocket) !== 'undefined'
    }
  }
}

function updateTimes() {
  const now = new Date()
  systemInfo.value.localTime = now.toLocaleString('zh-CN')
  systemInfo.value.utcTime = now.toUTCString()
}

function copySystemInfo() {
  const info = `
操作系统: ${systemInfo.value.os}
系统版本: ${systemInfo.value.osVersion}
架构: ${systemInfo.value.architecture}
CPU核心: ${systemInfo.value.cpuCores}
内存: ${systemInfo.value.ram}
屏幕: ${systemInfo.value.screen}
浏览器: ${systemInfo.value.browser} ${systemInfo.value.browserVersion}
User Agent: ${systemInfo.value.userAgent}
  `.trim()

  navigator.clipboard.writeText(info).then(() => {
    alert('系统信息已复制到剪贴板')
  })
}

function refreshInfo() {
  getSystemInfo()
}

onMounted(() => {
  getSystemInfo()
  // 每秒更新时间
  setInterval(updateTimes, 1000)
})

useSeoMeta({
  title: '电脑系统检测工具 - 在线检测系统配置和硬件信息',
  description: '免费在线电脑系统检测工具，全面检测操作系统、硬件配置、浏览器环境、WebGL图形设备等信息。', keywords: ['系统检测', '电脑配置', '硬件信息', '浏览器检测', '系统信息', '电脑检测', '配置检测', 'system info']
})

import { useSEO } from '~/composables/useSEO'
const { setPageTitle } = useSEO()
setPageTitle('电脑系统检测工具')
</script>
