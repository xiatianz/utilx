<template>
  <div class="max-w-8xl mx-auto">
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">图片信息查看工具</h1>
      <p class="text-muted-foreground">查看图片的详细信息，包括尺寸、格式、EXIF数据等</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧：上传 -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold">上传图片</h2>
          <button @click="clearImage" class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground">清空</button>
        </div>

        <div
          v-if="!imageUrl"
          @drop="handleDrop"
          @dragover.prevent
          @dragenter.prevent
          class="border-2 border-dashed rounded-lg p-12 text-center cursor-pointer hover:border-primary transition-colors"
        >
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            @change="handleFileSelect"
            class="hidden"
          >
          <Upload class="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p class="text-sm text-muted-foreground mb-2">拖拽图片到此处</p>
          <button @click="$refs.fileInput.click()" class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
            选择文件
          </button>
        </div>

        <div v-else class="space-y-4">
          <!-- 预览 -->
          <div class="bg-muted p-4 rounded-lg">
            <h3 class="font-medium text-sm mb-2">图片预览</h3>
            <img :src="imageUrl" class="max-w-full h-auto rounded-lg" alt="预览">
          </div>

          <!-- 文件信息 -->
          <div class="bg-muted p-4 rounded-lg">
            <h3 class="font-medium text-sm mb-2">文件信息</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-muted-foreground">文件名:</span>
                <span class="font-mono">{{ imageInfo.fileName }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">文件大小:</span>
                <span>{{ formatFileSize(imageInfo.fileSize) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">MIME 类型:</span>
                <span class="font-mono">{{ imageInfo.mimeType }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">最后修改:</span>
                <span>{{ imageInfo.lastModified }}</span>
              </div>
            </div>
          </div>

          <!-- EXIF 信息 -->
          <div class="bg-muted p-4 rounded-lg">
            <h3 class="font-medium text-sm mb-2">EXIF 信息</h3>
            <div v-if="exifData && Object.keys(exifData).length > 0" class="space-y-2 text-sm">
              <div v-for="(value, key) in exifData" :key="key" class="flex justify-between">
                <span class="text-muted-foreground">{{ key }}:</span>
                <span>{{ value }}</span>
              </div>
            </div>
            <div v-else class="text-sm text-muted-foreground">
              无 EXIF 信息
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：详细信息 -->
      <div class="space-y-4">
        <h2 class="text-lg font-semibold">详细信息</h2>

        <div v-if="!imageUrl" class="bg-muted rounded-lg p-12 text-center text-muted-foreground">
          上传图片后查看详细信息
        </div>

        <div v-else class="space-y-4">
          <!-- 图片尺寸 -->
          <div class="bg-muted p-4 rounded-lg">
            <h3 class="font-medium text-sm mb-2">图片尺寸</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-muted-foreground">宽度:</span>
                <span>{{ imageInfo.width }} px</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">高度:</span>
                <span>{{ imageInfo.height }} px</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">总像素:</span>
                <span>{{ formatNumber(imageInfo.width * imageInfo.height) }} 像素</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">宽高比:</span>
                <span>{{ calculateAspectRatio(imageInfo.width, imageInfo.height) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">方向:</span>
                <span>{{ imageInfo.width > imageInfo.height ? '横向' : imageInfo.width < imageInfo.height ? '纵向' : '正方形' }}</span>
              </div>
            </div>
          </div>

          <!-- 颜色信息 -->
          <div class="bg-muted p-4 rounded-lg">
            <h3 class="font-medium text-sm mb-2">颜色信息</h3>
            <div class="space-y-3">
              <div v-if="dominantColor" class="flex items-center gap-3">
                <span class="text-sm text-muted-foreground">主色调:</span>
                <div class="flex items-center gap-2">
                  <div class="w-12 h-8 rounded border" :style="{ backgroundColor: dominantColor }"></div>
                  <span class="font-mono text-sm">{{ dominantColor }}</span>
                </div>
              </div>
              <div class="text-sm">
                <span class="text-muted-foreground">色彩模式:</span>
                <span class="ml-2">RGB (8位/通道)</span>
              </div>
              <div v-if="colorInfo" class="grid grid-cols-5 gap-2 mt-2">
                <div
                  v-for="(color, index) in colorInfo.palette"
                  :key="index"
                  class="text-center"
                >
                  <div class="w-full aspect-square rounded border mb-1" :style="{ backgroundColor: color }"></div>
                  <div class="text-xs font-mono">{{ color }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 打印信息 -->
          <div class="bg-muted p-4 rounded-lg">
            <h3 class="font-medium text-sm mb-2">打印尺寸估算</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-muted-foreground">72 DPI (屏幕):</span>
                <span>{{ calculatePrintSize(imageInfo.width, imageInfo.height, 72) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">96 DPI (高清屏):</span>
                <span>{{ calculatePrintSize(imageInfo.width, imageInfo.height, 96) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">150 DPI (普通打印):</span>
                <span>{{ calculatePrintSize(imageInfo.width, imageInfo.height, 150) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">300 DPI (高质量):</span>
                <span>{{ calculatePrintSize(imageInfo.width, imageInfo.height, 300) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">600 DPI (印刷):</span>
                <span>{{ calculatePrintSize(imageInfo.width, imageInfo.height, 600) }}</span>
              </div>
            </div>
          </div>

          <!-- 元数据 -->
          <div class="bg-muted p-4 rounded-lg">
            <h3 class="font-medium text-sm mb-2">其他信息</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-muted-foreground">是否有透明通道:</span>
                <span>{{ imageInfo.hasAlpha ? '是' : '否' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">是否为动画:</span>
                <span>{{ imageInfo.isAnimated ? '是' : '否' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">位深度:</span>
                <span>{{ imageInfo.bitDepth }} 位</span>
              </div>
            </div>
          </div>

          <!-- 复制信息 -->
          <div class="bg-muted p-4 rounded-lg">
            <h3 class="font-medium text-sm mb-2">快速操作</h3>
            <div class="space-y-2">
              <button @click="copyInfo" class="w-full p-2 bg-background hover:bg-muted rounded text-sm">
                复制所有信息
              </button>
              <button @click="downloadInfo" class="w-full p-2 bg-background hover:bg-muted rounded text-sm">
                下载为 JSON
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSeoMeta } from '#app'
import { Upload } from 'lucide-vue-next'

const fileInput = ref(null)
const imageUrl = ref('')
const imageInfo = ref({
  fileName: '',
  fileSize: 0,
  mimeType: '',
  lastModified: '',
  width: 0,
  height: 0,
  hasAlpha: false,
  isAnimated: false,
  bitDepth: 8
})
const exifData = ref({})
const dominantColor = ref('')
const colorInfo = ref(null)

const handleFileSelect = (event) => {
  const file = event.target.files?.[0]
  if (file && file.type.startsWith('image/')) {
    loadImage(file)
  }
}

const handleDrop = (event) => {
  const file = event.dataTransfer.files?.[0]
  if (file && file.type.startsWith('image/')) {
    loadImage(file)
  }
}

const loadImage = (file) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    imageUrl.value = e.target.result

    // 文件信息
    imageInfo.value.fileName = file.name
    imageInfo.value.fileSize = file.size
    imageInfo.value.mimeType = file.type
    imageInfo.value.lastModified = new Date(file.lastModified).toLocaleString('zh-CN')

    // 读取图片尺寸
    const img = new Image()
    img.onload = () => {
      imageInfo.value.width = img.naturalWidth
      imageInfo.value.height = img.naturalHeight

      // 检测透明度和颜色
      detectImageProperties(img)
    }
    img.src = e.target.result

    // 读取 EXIF
    readExifData(file)
  }
  reader.readAsDataURL(file)
}

const detectImageProperties = (img) => {
  const canvas = document.createElement('canvas')
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  // 检测透明度
  let hasAlpha = false
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] < 255) {
      hasAlpha = true
      break
    }
  }
  imageInfo.value.hasAlpha = hasAlpha

  // 提取主色调
  extractColors(data)
}

const extractColors = (data) => {
  const colorMap = {}
  let maxCount = 0
  let dominant = '#000000'

  // 采样（每100个像素采样1个）
  for (let i = 0; i < data.length; i += 400) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const alpha = data[i + 3]

    if (alpha < 128) continue // 跳过透明像素

    const color = `#${String(r).padStart(2, '0')}${String(g).padStart(2, '0')}${String(b).padStart(2, '0')}`
    colorMap[color] = (colorMap[color] || 0) + 1

    if (colorMap[color] > maxCount) {
      maxCount = colorMap[color]
      dominant = color
    }
  }

  dominantColor.value = dominant

  // 提取调色板
  const sortedColors = Object.entries(colorMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([color]) => color)

  colorInfo.value = {
    palette: sortedColors
  }
}

const readExifData = (file) => {
  // 简化的 EXIF 读取（实际项目中建议使用 exif-js 库）
  const reader = new FileReader()
  reader.onload = (e) => {
    const view = new DataView(e.target.result)

    // 检查 JPEG 格式
    if (view.getUint16(0, false) !== 0xFFD8) {
      exifData.value = {}
      return
    }

    const length = view.byteLength
    let offset = 2

    while (offset < length) {
      if (view.getUint16(offset + 2, false) <= 8) break

      const marker = view.getUint16(offset, false)
      offset += 2

      if (marker === 0xFFE1) {
        // APP1 marker (EXIF)
        if (view.getUint32(offset += 2, false) !== 0x45786966) {
          continue
        }

        const littleEndian = view.getUint16(offset += 6, false) === 0x4949
        offset += view.getUint32(offset + 4, littleEndian)

        const tags = view.getUint16(offset, littleEndian)
        offset += 2

        const exif = {}

        for (let i = 0; i < tags; i++) {
          const tag = view.getUint16(offset + i * 12, littleEndian)

          // 简单提取几个常见标签
          if (tag === 0x0132) { // DateTime
            const valueOffset = view.getUint32(offset + i * 12 + 8, littleEndian)
            const stringValue = readString(view, valueOffset, 20, littleEndian)
            exif['拍摄时间'] = stringValue
          } else if (tag === 0x010F) { // Make
            const valueOffset = view.getUint32(offset + i * 12 + 8, littleEndian)
            const stringValue = readString(view, valueOffset, 30, littleEndian)
            exif['相机品牌'] = stringValue
          } else if (tag === 0x0110) { // Model
            const valueOffset = view.getUint32(offset + i * 12 + 8, littleEndian)
            const stringValue = readString(view, valueOffset, 40, littleEndian)
            exif['相机型号'] = stringValue
          } else if (tag === 0x8827) { // ISOSpeedRatings
            exif['ISO'] = view.getUint16(offset + i * 12 + 8, littleEndian)
          }
        }

        exifData.value = exif
        break
      }

      offset += view.getUint16(offset, false)
    }
  }
  reader.readAsArrayBuffer(file)
}

const readString = (view, offset, length, littleEndian) => {
  let str = ''
  for (let i = 0; i < length; i++) {
    const char = view.getUint8(offset + i)
    if (char === 0) break
    str += String.fromCharCode(char)
  }
  return str.trim()
}

const formatFileSize = (bytes) => {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB'
  if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
  return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
}

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const calculateAspectRatio = (width, height) => {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
  const divisor = gcd(width, height)
  return `${width / divisor}:${height / divisor}`
}

const calculatePrintSize = (width, height, dpi) => {
  const widthInch = width / dpi
  const heightInch = height / dpi

  const formatInch = (val) => {
    if (val < 1) {
      return `${(val * 2.54).toFixed(1)} cm`
    }
    return `${val.toFixed(1)} × ${(val * 2.54).toFixed(1)} cm`
  }

  return `${formatInch(widthInch)} × ${formatInch(heightInch)}`
}

const clearImage = () => {
  imageUrl.value = ''
  imageInfo.value = {
    fileName: '',
    fileSize: 0,
    mimeType: '',
    lastModified: '',
    width: 0,
    height: 0,
    hasAlpha: false,
    isAnimated: false,
    bitDepth: 8
  }
  exifData.value = {}
  dominantColor.value = ''
  colorInfo.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

const copyInfo = () => {
  const info = {
    文件名: imageInfo.value.fileName,
    文件大小: formatFileSize(imageInfo.value.fileSize),
    尺寸: `${imageInfo.value.width} × ${imageInfo.value.height}`,
    主色调: dominantColor.value,
    ...exifData.value
  }

  const text = Object.entries(info)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n')

  navigator.clipboard.writeText(text).then(() => {
    alert('信息已复制到剪贴板')
  })
}

const downloadInfo = () => {
  const info = {
    fileInfo: imageInfo.value,
    exif: exifData.value,
    colorInfo: colorInfo.value
  }

  const blob = new Blob([JSON.stringify(info, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${imageInfo.value.fileName}_info.json`
  link.click()
  URL.revokeObjectURL(url)
}

useSeoMeta({
  title: '图片信息 - 在线图片信息查看工具',
  description: '免费在线图片信息查看工具，查看图片尺寸、格式、EXIF数据、颜色信息等详细属性。',
  keywords: ['图片信息', 'EXIF', '图片属性', '图片尺寸', 'image info', '在线工具']
})

import { useSEO } from '~/composables/useSEO'
const { setPageTitle } = useSEO()
setPageTitle('图片信息查看工具')
</script>
