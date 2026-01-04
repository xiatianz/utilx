<template>
  <div class="max-w-6xl mx-auto">
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">浏览器版本检测工具</h1>
      <p class="text-muted-foreground">全面检测浏览器类型、版本、引擎和功能支持情况</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧：基本信息 -->
      <div class="space-y-4">
        <!-- 浏览器信息 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Globe class="w-5 h-5 text-primary" />
            浏览器信息
          </h2>

          <div class="space-y-3 text-sm">
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>浏览器名称</span>
              <span class="font-medium">{{ browserInfo.name }}</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>浏览器版本</span>
              <span class="font-medium">{{ browserInfo.version }}</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>渲染引擎</span>
              <span class="font-medium">{{ browserInfo.engine }}</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>引擎版本</span>
              <span class="font-medium">{{ browserInfo.engineVersion }}</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>JavaScript 引擎</span>
              <span class="font-medium">{{ browserInfo.jsEngine }}</span>
            </div>
          </div>
        </div>

        <!-- 操作系统 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Monitor class="w-5 h-5 text-primary" />
            操作系统
          </h2>

          <div class="space-y-3 text-sm">
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>操作系统</span>
              <span class="font-medium">{{ browserInfo.os }}</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>系统版本</span>
              <span class="font-medium">{{ browserInfo.osVersion }}</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>系统架构</span>
              <span class="font-medium">{{ browserInfo.architecture }}</span>
            </div>
          </div>
        </div>

        <!-- 屏幕信息 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Laptop class="w-5 h-5 text-primary" />
            屏幕信息
          </h2>

          <div class="space-y-3 text-sm">
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>屏幕分辨率</span>
              <span class="font-medium">{{ browserInfo.screen }}</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>窗口大小</span>
              <span class="font-medium">{{ browserInfo.windowSize }}</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>像素密度 (DPR)</span>
              <span class="font-medium">{{ browserInfo.dpr }}x</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>色彩深度</span>
              <span class="font-medium">{{ browserInfo.colorDepth }} 位</span>
            </div>
          </div>
        </div>

        <!-- 语言和时区 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Languages class="w-5 h-5 text-primary" />
            语言和时区
          </h2>

          <div class="space-y-3 text-sm">
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>系统语言</span>
              <span class="font-medium">{{ browserInfo.language }}</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>时区</span>
              <span class="font-medium">{{ browserInfo.timezone }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：功能支持和详细信息 -->
      <div class="space-y-4">
        <!-- 功能支持 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">功能支持检测</h2>

          <div class="space-y-2 text-sm max-h-64 overflow-y-auto">
            <div v-for="(feature, key) in features" :key="key" class="flex items-center justify-between p-2 bg-muted rounded">
              <span>{{ feature.name }}</span>
              <span :class="feature.supported ? 'text-green-600' : 'text-red-600'" class="font-medium">
                {{ feature.supported ? '✓ 支持' : '✗ 不支持' }}
              </span>
            </div>
          </div>
        </div>

        <!-- 网络信息 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">网络信息</h2>

          <div class="space-y-3 text-sm">
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>在线状态</span>
              <span :class="browserInfo.onLine ? 'text-green-600' : 'text-red-600'" class="font-medium">
                {{ browserInfo.onLine ? '在线' : '离线' }}
              </span>
            </div>
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>网络类型</span>
              <span class="font-medium">{{ browserInfo.connectionType || '未知' }}</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>有效带宽</span>
              <span class="font-medium">{{ browserInfo.downlink || '未知' }} Mbps</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-muted rounded">
              <span>往返时间 (RTT)</span>
              <span class="font-medium">{{ browserInfo.rtt || '未知' }} ms</span>
            </div>
          </div>
        </div>

        <!-- User Agent -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">User Agent</h2>

          <div class="p-3 bg-muted rounded text-xs break-all font-mono">
            {{ browserInfo.userAgent }}
          </div>

          <button @click="copyUserAgent" class="mt-3 w-full px-4 py-2 bg-muted hover:bg-muted/80 rounded text-sm">
            <Copy class="w-4 h-4 inline mr-2" />
            复制 User Agent
          </button>
        </div>

        <!-- 浏览器标识 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">浏览器标识</h2>

          <div class="space-y-2 text-xs">
            <div class="p-2 bg-muted rounded">
              <p class="text-muted-foreground">vendor</p>
              <p class="font-mono break-all">{{ browserInfo.vendor }}</p>
            </div>
            <div class="p-2 bg-muted rounded">
              <p class="text-muted-foreground">product</p>
              <p class="font-mono break-all">{{ browserInfo.product }}</p>
            </div>
            <div class="p-2 bg-muted rounded">
              <p class="text-muted-foreground">platform</p>
              <p class="font-mono break-all">{{ browserInfo.platform }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSeoMeta } from '#app'
import { Globe, Monitor, Laptop, Languages, Copy } from 'lucide-vue-next'

const browserInfo = ref({
  name: '',
  version: '',
  engine: '',
  engineVersion: '',
  jsEngine: '',
  os: '',
  osVersion: '',
  architecture: '',
  screen: '',
  windowSize: '',
  dpr: 1,
  colorDepth: 0,
  language: '',
  timezone: '',
  onLine: false,
  connectionType: '',
  downlink: '',
  rtt: '',
  userAgent: '',
  vendor: '',
  product: '',
  platform: ''
})

const features = ref({})

function detectBrowser() {
  const ua = navigator.userAgent
  const platform = navigator.platform
  const screen = window.screen

  // 检测浏览器
  let name = '未知浏览器'
  let version = ''
  let engine = '未知'
  let engineVersion = ''

  // Edge
  if (ua.indexOf('Edg/') !== -1) {
    name = 'Microsoft Edge'
    version = ua.match(/Edg\/([\d.]+)/)?.[1] || ''
    engine = 'Blink'
    engineVersion = ua.match(/Chrome\/([\d.]+)/)?.[1] || ''
  }
  // Chrome
  else if (ua.indexOf('Chrome') !== -1 && ua.indexOf('Edg') === -1) {
    name = 'Chrome'
    version = ua.match(/Chrome\/([\d.]+)/)?.[1] || ''
    engine = 'Blink'
    engineVersion = version
  }
  // Firefox
  else if (ua.indexOf('Firefox') !== -1) {
    name = 'Firefox'
    version = ua.match(/Firefox\/([\d.]+)/)?.[1] || ''
    engine = 'Gecko'
    engineVersion = ua.match(/rv:([\d.]+)/)?.[1] || ''
  }
  // Safari
  else if (ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1) {
    name = 'Safari'
    version = ua.match(/Version\/([\d.]+)/)?.[1] || ''
    engine = 'WebKit'
    engineVersion = ua.match(/AppleWebKit\/([\d.]+)/)?.[1] || ''
  }
  // Opera
  else if (ua.indexOf('OPR') !== -1) {
    name = 'Opera'
    version = ua.match(/OPR\/([\d.]+)/)?.[1] || ''
    engine = 'Blink'
    engineVersion = ua.match(/Chrome\/([\d.]+)/)?.[1] || ''
  }
  // IE
  else if (ua.indexOf('MSIE') !== -1 || ua.indexOf('Trident') !== -1) {
    name = 'Internet Explorer'
    version = ua.match(/(?:MSIE |rv:)([\d.]+)/)?.[1] || ''
    engine = 'Trident'
    engineVersion = ua.match(/Trident\/([\d.]+)/)?.[1] || ''
  }

  // 检测操作系统
  let os = '未知系统'
  let osVersion = ''

  if (platform.indexOf('Win') !== -1) {
    os = 'Windows'
    if (ua.indexOf('Windows NT 10.0') !== -1) osVersion = '10/11'
    else if (ua.indexOf('Windows NT 6.3') !== -1) osVersion = '8.1'
    else if (ua.indexOf('Windows NT 6.2') !== -1) osVersion = '8'
    else if (ua.indexOf('Windows NT 6.1') !== -1) osVersion = '7'
  } else if (platform.indexOf('Mac') !== -1) {
    os = 'macOS'
    const match = ua.match(/Mac OS X ([\d_]+)/)
    if (match) osVersion = match[1].replace(/_/g, '.')
  } else if (ua.indexOf('Android') !== -1) {
    os = 'Android'
    const match = ua.match(/Android ([\d.]+)/)
    if (match) osVersion = match[1]
  } else if (ua.indexOf('iPhone') !== -1 || ua.indexOf('iPad') !== -1) {
    os = 'iOS'
    const match = ua.match(/OS ([\d_]+) like Mac OS X/)
    if (match) osVersion = match[1].replace(/_/g, '.')
  } else if (platform.indexOf('Linux') !== -1) {
    os = 'Linux'
  }

  // JavaScript 引擎
  let jsEngine = '未知'
  if (name === 'Chrome' || name === 'Edge' || name === 'Opera') {
    jsEngine = 'V8'
  } else if (name === 'Firefox') {
    jsEngine = 'SpiderMonkey'
  } else if (name === 'Safari') {
    jsEngine = 'JavaScriptCore'
  }

  // 系统架构
  const architecture = ua.indexOf('WOW64') !== -1 || ua.indexOf('Win64') !== -1 ? '64位' :
                       ua.indexOf('i686') !== -1 || ua.indexOf('i386') !== -1 ? '32位' :
                       ua.indexOf('arm') !== -1 ? 'ARM' : '未知'

  // 网络信息
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  const connectionType = connection ? connection.effectiveType : ''
  const downlink = connection ? connection.downlink : ''
  const rtt = connection ? connection.rtt : ''

  // 时区
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  browserInfo.value = {
    name,
    version,
    engine,
    engineVersion,
    jsEngine,
    os,
    osVersion,
    architecture,
    screen: `${screen.width} x ${screen.height}`,
    windowSize: `${window.innerWidth} x ${window.innerHeight}`,
    dpr: window.devicePixelRatio || 1,
    colorDepth: screen.colorDepth,
    language: navigator.language,
    timezone,
    onLine: navigator.onLine,
    connectionType,
    downlink,
    rtt,
    userAgent: ua,
    vendor: navigator.vendor,
    product: navigator.product,
    platform
  }

  // 检测功能支持
  features.value = {
    localStorage: { name: 'LocalStorage', supported: typeof(Storage) !== 'undefined' && 'localStorage' in window },
    sessionStorage: { name: 'SessionStorage', supported: typeof(Storage) !== 'undefined' && 'sessionStorage' in window },
    webWorker: { name: 'Web Worker', supported: typeof(Worker) !== 'undefined' },
    webSocket: { name: 'WebSocket', supported: typeof(WebSocket) !== 'undefined' },
    geolocation: { name: 'Geolocation', supported: 'geolocation' in navigator },
    webgl: { name: 'WebGL', supported: !!document.createElement('canvas').getContext('webgl') },
    webgl2: { name: 'WebGL2', supported: !!document.createElement('canvas').getContext('webgl2') },
    notification: { name: 'Notification', supported: 'Notification' in window },
    serviceWorker: { name: 'Service Worker', supported: 'serviceWorker' in navigator },
    fetch: { name: 'Fetch API', supported: typeof fetch !== 'undefined' },
    intersectionObserver: { name: 'Intersection Observer', supported: 'IntersectionObserver' in window },
    resizeObserver: { name: 'Resize Observer', supported: 'ResizeObserver' in window },
    mutationObserver: { name: 'Mutation Observer', supported: 'MutationObserver' in window },
    requestAnimationFrame: { name: 'requestAnimationFrame', supported: typeof requestAnimationFrame !== 'undefined' },
    classList: { name: 'classList', supported: 'classList' in document.createElement('div') },
    placeholder: { name: 'Placeholder', supported: 'placeholder' in document.createElement('input') },
    localStorage2: { name: 'SessionStorage', supported: typeof(Storage) !== 'undefined' && 'sessionStorage' in window }
  }
}

function copyUserAgent() {
  navigator.clipboard.writeText(browserInfo.value.userAgent).then(() => {
    alert('User Agent 已复制到剪贴板')
  })
}

onMounted(() => {
  detectBrowser()
  window.addEventListener('online', () => browserInfo.value.onLine = true)
  window.addEventListener('offline', () => browserInfo.value.onLine = false)
})

useSeoMeta({
  title: '浏览器版本检测工具 - 在线检测浏览器类型和版本',
  description: '免费在线浏览器版本检测工具，全面检测浏览器类型、版本、引擎、功能支持和系统信息。', keywords: ['浏览器检测', '浏览器版本', 'User Agent', '浏览器信息', '浏览器识别', '版本检测', 'browser detect', 'UA检测']
})

import { useSEO } from '~/composables/useSEO'
const { setPageTitle } = useSEO()
setPageTitle('浏览器版本检测工具')
</script>
