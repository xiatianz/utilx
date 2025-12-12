<template>
  <div class="max-w-8xl mx-auto">
    <!-- 面包屑导航 -->
    <!-- <Breadcrumb :category="category" /> -->

    <!-- 工具标题 -->
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">二维码识别</h1>
      <p class="text-muted-foreground">识别二维码内容，支持图片上传和摄像头扫描</p>
    </div>

    <!-- 主要功能区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧：上传/扫描 -->
      <div class="space-y-4">
        <div class="bg-card   rounded-lg p-6">
          <h2 class="text-lg font-semibold mb-4">上传二维码图片</h2>

          <!-- 拖拽上传 -->
          <div
            class="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"
            @drop="handleDrop"
            @dragover.prevent
            @dragleave="handleDragLeave"
            @click="triggerFileInput"
          >
            <input
              ref="fileInput"
              type="file"
              class="hidden"
              accept="image/*"
              @change="handleFileSelect"
            />
            <QrCode class="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p class="text-lg font-medium mb-2">拖拽图片到这里</p>
            <p class="text-sm text-muted-foreground">或者点击选择文件</p>
          </div>

          <!-- 图片预览 -->
          <div v-if="selectedImage" class="mt-4 space-y-4">
            <div class="relative">
              <img
                :src="selectedImage.url"
                :alt="selectedImage.name"
                class="w-full rounded-lg"
              />
              <button
                @click="clearImage"
                class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <X class="w-4 h-4" />
              </button>
            </div>
            <button
              @click="scanImage"
              :disabled="isScanning"
              class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {{ isScanning ? '识别中...' : '识别二维码' }}
            </button>
          </div>

          <!-- 示例图片 -->
          <div class="mt-6">
            <h3 class="text-sm font-medium mb-3">或尝试示例图片</h3>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="sample in sampleImages"
                :key="sample.id"
                @click="loadSampleImage(sample)"
                class="aspect-square rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all"
              >
                <img :src="sample.url" :alt="sample.name" class="w-full h-full object-cover" />
              </button>
            </div>
          </div>
        </div>

        <!-- 摄像头扫描 -->
        <div class="bg-card   rounded-lg p-6">
          <h2 class="text-lg font-semibold mb-4">摄像头扫描</h2>

          <div class="space-y-4">
            <div v-if="!cameraStarted" class="text-center py-8">
              <Camera class="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <button
                @click="startCamera"
                class="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                启动摄像头
              </button>
            </div>

            <div v-else class="space-y-4">
              <div class="relative">
                <video
                  ref="videoElement"
                  class="w-full rounded-lg"
                  autoplay
                ></video>
                <div
                  v-show="showScannerOverlay"
                  class="absolute inset-0 pointer-events-none"
                >
                  <div class="absolute inset-4 border-2 border-primary rounded"></div>
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                    <div class="absolute top-0 left-0 w-full h-0.5 bg-primary"></div>
                    <div class="absolute top-0 left-0 w-0.5 h-full bg-primary"></div>
                    <div class="absolute top-0 right-0 w-0.5 h-full bg-primary"></div>
                    <div class="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
                  </div>
                </div>
              </div>

              <div class="flex gap-2">
                <button
                  @click="stopCamera"
                  class="flex-1 px-4 py-2 border border-destructive text-destructive rounded-md hover:bg-destructive/5 transition-colors"
                >
                  停止扫描
                </button>
                <button
                  v-if="cameraActive"
                  @click="captureFrame"
                  class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  拍照识别
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：识别结果 -->
      <div class="space-y-4">
        <!-- 识别结果 -->
        <div class="bg-card   rounded-lg p-6">
          <h2 class="text-lg font-semibold mb-4">识别结果</h2>

          <div v-if="scanResult" class="space-y-4">
            <!-- 成功状态 -->
            <div v-if="scanResult.success" class="space-y-4">
              <div class="flex items-center gap-2 text-green-600">
                <CheckCircle class="w-5 h-5" />
                <span class="font-medium">识别成功</span>
              </div>

              <!-- 内容类型 -->
              <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div class="text-sm text-green-800 mb-2">内容类型</div>
                <div class="font-medium text-green-900">{{ scanResult.type }}</div>
              </div>

              <!-- 内容 -->
              <div>
                <label class="text-sm font-medium">识别内容</label>
                <div class="mt-2 p-4 bg-muted rounded-lg">
                  <template v-if="scanResult.type === 'URL'">
                    <a
                      :href="scanResult.content"
                      target="_blank"
                      class="text-primary hover:underline break-all"
                    >
                      {{ scanResult.content }}
                    </a>
                  </template>
                  <template v-else-if="scanResult.type === 'Email'">
                    <a
                      :href="`mailto:${scanResult.content}`"
                      class="text-primary hover:underline break-all"
                    >
                      {{ scanResult.content }}
                    </a>
                  </template>
                  <template v-else-if="scanResult.type === 'Phone'">
                    <a
                      :href="`tel:${scanResult.content}`"
                      class="text-primary hover:underline"
                    >
                      {{ scanResult.content }}
                    </a>
                  </template>
                  <template v-else-if="scanResult.type === 'SMS'">
                    <div class="space-y-2">
                      <div class="text-sm text-muted-foreground">电话号码</div>
                      <a
                        :href="`sms:${scanResult.content.phone}`"
                        class="text-primary hover:underline"
                      >
                        {{ scanResult.content.phone }}
                      </a>
                      <div class="text-sm text-muted-foreground">短信内容</div>
                      <div class="break-all">{{ scanResult.content.message }}</div>
                    </div>
                  </template>
                  <template v-else-if="scanResult.type === 'WiFi'">
                    <div class="space-y-2 text-sm">
                      <div class="flex justify-between">
                        <span class="text-muted-foreground">网络名称</span>
                        <span class="font-medium">{{ scanResult.content.ssid }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-muted-foreground">加密类型</span>
                        <span class="font-medium">{{ scanResult.content.encryption }}</span>
                      </div>
                      <div v-if="scanResult.content.password" class="flex justify-between">
                        <span class="text-muted-foreground">密码</span>
                        <span class="font-medium">{{ scanResult.content.password }}</span>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="scanResult.type === 'vCard'">
                    <div class="space-y-2 text-sm">
                      <div class="flex justify-between">
                        <span class="text-muted-foreground">姓名</span>
                        <span class="font-medium">{{ scanResult.content.name }}</span>
                      </div>
                      <div v-if="scanResult.content.phone" class="flex justify-between">
                        <span class="text-muted-foreground">电话</span>
                        <span class="font-medium">{{ scanResult.content.phone }}</span>
                      </div>
                      <div v-if="scanResult.content.email" class="flex justify-between">
                        <span class="text-muted-foreground">邮箱</span>
                        <span class="font-medium">{{ scanResult.content.email }}</span>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="scanResult.type === 'vEvent'">
                    <div class="space-y-2 text-sm">
                      <div class="flex justify-between">
                        <span class="text-muted-foreground">事件</span>
                        <span class="font-medium">{{ scanResult.content.summary }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-muted-foreground">开始时间</span>
                        <span class="font-medium">{{ scanResult.content.start }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-muted-foreground">结束时间</span>
                        <span class="font-medium">{{ scanResult.content.end }}</span>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <pre class="whitespace-pre-wrap break-all">{{ scanResult.content }}</pre>
                  </template>
                </div>
              </div>

              <!-- 操作按钮 -->
              <div class="flex gap-2">
                <button
                  @click="copyResult"
                  class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Copy class="w-4 h-4" />
                  {{ copied ? '已复制' : '复制内容' }}
                </button>
                <button
                  v-if="scanResult.type === 'URL'"
                  @click="openLink"
                  class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center gap-2"
                >
                  <ExternalLink class="w-4 h-4" />
                  打开链接
                </button>
              </div>
            </div>

            <!-- 失败状态 -->
            <div v-else class="space-y-4">
              <div class="flex items-center gap-2 text-destructive">
                <XCircle class="w-5 h-5" />
                <span class="font-medium">识别失败</span>
              </div>
              <p class="text-sm text-muted-foreground">
                {{ scanResult.error || '未检测到二维码' }}
              </p>
              <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
                <p class="text-yellow-800">建议：</p>
                <ul class="list-disc list-inside text-yellow-700 mt-2">
                  <li>确保图片清晰，二维码完整可见</li>
                  <li>调整图片角度，避免倾斜</li>
                  <li>增加图片亮度和对比度</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 空状态 -->
          <div v-else class="text-center py-12 text-muted-foreground">
            <QrCode class="w-16 h-16 mx-auto mb-4" />
            <p>上传或扫描二维码开始识别</p>
          </div>
        </div>

        <!-- 历史记录 -->
        <div class="bg-card   rounded-lg p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">历史记录</h2>
            <button
              @click="clearHistory"
              class="px-3 py-1 text-sm text-destructive hover:text-destructive/80 transition-colors"
            >
              清空
            </button>
          </div>

          <div v-if="scanHistory.length === 0" class="text-center py-8 text-muted-foreground">
            暂无历史记录
          </div>

          <div v-else class="space-y-3 max-h-64 overflow-y-auto">
            <div
              v-for="(item, index) in scanHistory"
              :key="index"
              class="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
              @click="loadHistoryItem(item)"
            >
              <div class="flex justify-between items-start mb-2">
                <span class="font-medium text-sm">{{ item.type }}</span>
                <span class="text-xs text-muted-foreground">{{ item.time }}</span>
              </div>
              <p class="text-sm text-muted-foreground truncate">{{ item.content }}</p>
            </div>
          </div>
        </div>

        <!-- 使用说明 -->
        <div class="bg-card   rounded-lg p-6">
          <h2 class="text-lg font-semibold mb-4">支持的二维码类型</h2>
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div class="flex items-center gap-2">
              <Link class="w-4 h-4 text-primary" />
              <span>网址 (URL)</span>
            </div>
            <div class="flex items-center gap-2">
              <Mail class="w-4 h-4 text-primary" />
              <span>邮箱地址</span>
            </div>
            <div class="flex items-center gap-2">
              <Phone class="w-4 h-4 text-primary" />
              <span>电话号码</span>
            </div>
            <div class="flex items-center gap-2">
              <MessageSquare class="w-4 h-4 text-primary" />
              <span>短信 (SMS)</span>
            </div>
            <div class="flex items-center gap-2">
              <Wifi class="w-4 h-4 text-primary" />
              <span>WiFi 网络信息</span>
            </div>
            <div class="flex items-center gap-2">
              <Contact class="w-4 h-4 text-primary" />
              <span>名片 (vCard)</span>
            </div>
            <div class="flex items-center gap-2">
              <Calendar class="w-4 h-4 text-primary" />
              <span>日历事件 (vEvent)</span>
            </div>
            <div class="flex items-center gap-2">
              <Type class="w-4 h-4 text-primary" />
              <span>纯文本</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 使用说明 -->
    <div class="mt-12 space-y-6">
      <div class="bg-card   rounded-lg p-6">
        <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
          <Info class="w-5 h-5 text-primary" />
          使用说明
        </h3>
        <div class="space-y-4 text-sm text-muted-foreground">
          <div>
            <h4 class="font-medium text-foreground mb-2">使用方法</h4>
            <ul class="list-disc list-inside space-y-1 ml-4">
              <li>上传包含二维码的图片文件</li>
              <li>使用摄像头实时扫描二维码</li>
              <li>系统会自动识别并解析二维码内容</li>
              <li>支持多种二维码格式和内容类型</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium text-foreground mb-2">注意事项</h4>
            <ul class="list-disc list-inside space-y-1 ml-4">
              <li>确保二维码清晰完整，无遮挡</li>
              <li>良好的光线条件有助于识别</li>
              <li>摄像头扫描需要授权访问权限</li>
              <li>不会保存上传的图片数据</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 相关工具 -->
      <div class="bg-card   rounded-lg p-6">
        <h3 class="text-lg font-semibold mb-4">相关工具</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <NuxtLink
            to="/tools/qrcode-generate"
            class="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
          >
            <QrCode class="w-5 h-5 text-primary" />
            <div>
              <p class="font-medium group-hover:text-primary">二维码生成器</p>
              <p class="text-xs text-muted-foreground">在线生成二维码</p>
            </div>
            <ArrowRight class="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" />
          </NuxtLink>
          <NuxtLink
            to="/tools/base64-image"
            class="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
          >
            <Hash class="w-5 h-5 text-primary" />
            <div>
              <p class="font-medium group-hover:text-primary">Base64图片</p>
              <p class="text-xs text-muted-foreground">图片与Base64互转</p>
            </div>
            <ArrowRight class="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" />
          </NuxtLink>
          <NuxtLink
            to="/tools/url-encode"
            class="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
          >
            <Link2 class="w-5 h-5 text-primary" />
            <div>
              <p class="font-medium group-hover:text-primary">URL编码</p>
              <p class="text-xs text-muted-foreground">URL编码解码</p>
            </div>
            <ArrowRight class="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { QrCode, X, CheckCircle, XCircle, Copy, ExternalLink, Camera, Link, Mail, Phone, MessageSquare, Wifi, Contact, Calendar, Type, ArrowRight, Info, Hash, Link2 } from 'lucide-vue-next'
import Breadcrumb from '~/components/Breadcrumb.vue'

// 分类信息
const category = { id: 'image', name: '图片处理', description: '图片处理工具集合' }

// 状态管理
const selectedImage = ref(null)
const scanResult = ref(null)
const isScanning = ref(false)
const fileInput = ref(null)
const videoElement = ref(null)
const cameraStarted = ref(false)
const cameraActive = ref(false)
const showScannerOverlay = ref(false)
const copied = ref(false)
const scanHistory = ref([])

// 示例图片
const sampleImages = [
  { id: 1, name: 'URL示例', url: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com' },
  { id: 2, name: '文本示例', url: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Hello%20World' },
  { id: 3, name: '邮箱示例', url: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=mailto:example@email.com' }
]

// 处理文件选择
const handleFileSelect = (e) => {
  const file = e.target.files[0]
  if (file && file.type.startsWith('image/')) {
    processImageFile(file)
  }
}

// 处理拖拽
const handleDrop = (e) => {
  e.preventDefault()
  const file = e.dataTransfer.files[0]
  if (file && file.type.startsWith('image/')) {
    processImageFile(file)
  }
}

// 处理拖拽离开
const handleDragLeave = () => {
  // 可以添加视觉反馈，例如恢复边框颜色
}

// 处理图片文件
const processImageFile = (file) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    selectedImage.value = {
      name: file.name,
      url: e.target.result
    }
    scanResult.value = null
  }
  reader.readAsDataURL(file)
}

// 加载示例图片
const loadSampleImage = async (sample) => {
  try {
    const response = await fetch(sample.url)
    const blob = await response.blob()
    const file = new File([blob], `${sample.name}.png`, { type: 'image/png' })
    processImageFile(file)
  } catch (error) {
    console.error('加载示例图片失败:', error)
  }
}

// 清空图片
const clearImage = () => {
  selectedImage.value = null
  scanResult.value = null
}

// 扫描图片
const scanImage = async () => {
  if (!selectedImage.value) return

  isScanning.value = true

  try {
    // 这里使用模拟的识别结果
    // 实际应用中需要集成 QR 码识别库，如 jsQR
    await new Promise(resolve => setTimeout(resolve, 1000))

    // 模拟识别结果
    const mockResults = [
      {
        success: true,
        type: 'URL',
        content: 'https://example.com'
      },
      {
        success: true,
        type: 'Text',
        content: 'Hello World! This is a sample QR code content.'
      },
      {
        success: true,
        type: 'Email',
        content: 'example@email.com'
      },
      {
        success: true,
        type: 'WiFi',
        content: {
          ssid: 'MyWiFi',
          encryption: 'WPA2',
          password: 'password123'
        }
      }
    ]

    scanResult.value = mockResults[Math.floor(Math.random() * mockResults.length)]

    if (scanResult.value.success) {
      addToHistory(scanResult.value)
    }
  } catch (error) {
    scanResult.value = {
      success: false,
      error: '识别失败：' + error.message
    }
  } finally {
    isScanning.value = false
  }
}

// 启动摄像头
const startCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    })

    if (videoElement.value) {
      videoElement.value.srcObject = stream
      cameraStarted.value = true
      cameraActive.value = true
      showScannerOverlay.value = true
    }
  } catch (error) {
    console.error('摄像头启动失败:', error)
    alert('无法访问摄像头，请检查权限设置')
  }
}

// 停止摄像头
const stopCamera = () => {
  if (videoElement.value && videoElement.value.srcObject) {
    const stream = videoElement.value.srcObject
    stream.getTracks().forEach(track => track.stop())
    videoElement.value.srcObject = null
  }
  cameraStarted.value = false
  cameraActive.value = false
  showScannerOverlay.value = false
}

// 拍照识别
const captureFrame = () => {
  if (!videoElement.value || !cameraActive.value) return

  const canvas = document.createElement('canvas')
  canvas.width = videoElement.value.videoWidth
  canvas.height = videoElement.value.videoHeight
  const ctx = canvas.getContext('2d')
  ctx.drawImage(videoElement.value, 0, 0)

  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob)
    selectedImage.value = {
      name: 'camera_capture.jpg',
      url: url
    }
    scanImage()
  }, 'image/jpeg')
}

// 复制结果
const copyResult = async () => {
  if (!scanResult.value?.success) return

  let content = scanResult.value.content
  if (typeof content === 'object') {
    content = JSON.stringify(content, null, 2)
  }

  try {
    await navigator.clipboard.writeText(content)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (error) {
    console.error('复制失败:', error)
  }
}

// 打开链接
const openLink = () => {
  if (scanResult.value?.type === 'URL' && scanResult.value.content) {
    window.open(scanResult.value.content, '_blank')
  }
}

// 添加到历史记录
const addToHistory = (result) => {
  const historyItem = {
    type: result.type,
    content: typeof result.content === 'object' ? JSON.stringify(result.content) : result.content,
    time: new Date().toLocaleTimeString('zh-CN'),
    result: result
  }

  scanHistory.value.unshift(historyItem)
  if (scanHistory.value.length > 20) {
    scanHistory.value = scanHistory.value.slice(0, 20)
  }
}

// 加载历史项目
const loadHistoryItem = (item) => {
  scanResult.value = item.result
}

// 清空历史记录
const clearHistory = () => {
  scanHistory.value = []
}

// 触发文件输入
const triggerFileInput = () => {
  fileInput.value.click()
}

// 清理
onUnmounted(() => {
  stopCamera()
})

// SEO配置
useSeoMeta({
  title: '二维码识别 - 在线二维码扫描工具',
  description: '免费在线二维码识别工具，支持图片上传和摄像头扫描，识别各种类型二维码内容。',
  keywords: ['二维码识别', 'QR码扫描', '二维码读取', '在线扫描', 'QR码解析']
})

definePageMeta({
  layout: 'default'
})
</script>