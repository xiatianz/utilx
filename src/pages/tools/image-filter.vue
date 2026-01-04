<template>
  <div class="max-w-8xl mx-auto">
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">图片滤镜工具</h1>
      <p class="text-muted-foreground">为图片添加滤镜效果，包括亮度、对比度、饱和度等调整</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧：上传和调整 -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold">上传图片</h2>
          <div class="flex gap-2">
            <button @click="resetFilters" class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground">重置滤镜</button>
            <button @click="clearImage" class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground">清空</button>
          </div>
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
          <!-- 滤镜调整 -->
          <div class="bg-muted p-4 rounded-lg space-y-4">
            <!-- 亮度 -->
            <div>
              <div class="flex justify-between text-sm mb-1">
                <label>亮度</label>
                <span class="text-muted-foreground">{{ filters.brightness }}%</span>
              </div>
              <input
                v-model.number="filters.brightness"
                type="range"
                min="0"
                max="200"
                class="w-full"
                @input="applyFilters"
              >
            </div>

            <!-- 对比度 -->
            <div>
              <div class="flex justify-between text-sm mb-1">
                <label>对比度</label>
                <span class="text-muted-foreground">{{ filters.contrast }}%</span>
              </div>
              <input
                v-model.number="filters.contrast"
                type="range"
                min="0"
                max="200"
                class="w-full"
                @input="applyFilters"
              >
            </div>

            <!-- 饱和度 -->
            <div>
              <div class="flex justify-between text-sm mb-1">
                <label>饱和度</label>
                <span class="text-muted-foreground">{{ filters.saturate }}%</span>
              </div>
              <input
                v-model.number="filters.saturate"
                type="range"
                min="0"
                max="200"
                class="w-full"
                @input="applyFilters"
              >
            </div>

            <!-- 色相旋转 -->
            <div>
              <div class="flex justify-between text-sm mb-1">
                <label>色相</label>
                <span class="text-muted-foreground">{{ filters.hueRotate }}°</span>
              </div>
              <input
                v-model.number="filters.hueRotate"
                type="range"
                min="0"
                max="360"
                class="w-full"
                @input="applyFilters"
              >
            </div>

            <!-- 灰度 -->
            <div>
              <div class="flex justify-between text-sm mb-1">
                <label>灰度</label>
                <span class="text-muted-foreground">{{ filters.grayscale }}%</span>
              </div>
              <input
                v-model.number="filters.grayscale"
                type="range"
                min="0"
                max="100"
                class="w-full"
                @input="applyFilters"
              >
            </div>

            <!-- 模糊 -->
            <div>
              <div class="flex justify-between text-sm mb-1">
                <label>模糊</label>
                <span class="text-muted-foreground">{{ filters.blur }}px</span>
              </div>
              <input
                v-model.number="filters.blur"
                type="range"
                min="0"
                max="20"
                class="w-full"
                @input="applyFilters"
              >
            </div>

            <!-- 反色 -->
            <div>
              <div class="flex justify-between text-sm mb-1">
                <label>反色</label>
                <span class="text-muted-foreground">{{ filters.invert }}%</span>
              </div>
              <input
                v-model.number="filters.invert"
                type="range"
                min="0"
                max="100"
                class="w-full"
                @input="applyFilters"
              >
            </div>

            <!-- 褐色 -->
            <div>
              <div class="flex justify-between text-sm mb-1">
                <label>褐色</label>
                <span class="text-muted-foreground">{{ filters.sepia }}%</span>
              </div>
              <input
                v-model.number="filters.sepia"
                type="range"
                min="0"
                max="100"
                class="w-full"
                @input="applyFilters"
              >
            </div>
          </div>

          <!-- 预设滤镜 -->
          <div class="bg-muted p-4 rounded-lg">
            <h3 class="font-medium text-sm mb-3">预设滤镜</h3>
            <div class="grid grid-cols-3 gap-2">
              <button @click="applyPreset('none')" class="p-2 bg-background rounded hover:bg-muted text-xs">原图</button>
              <button @click="applyPreset('grayscale')" class="p-2 bg-background rounded hover:bg-muted text-xs">黑白</button>
              <button @click="applyPreset('sepia')" class="p-2 bg-background rounded hover:bg-muted text-xs">怀旧</button>
              <button @click="applyPreset('vintage')" class="p-2 bg-background rounded hover:bg-muted text-xs">复古</button>
              <button @click="applyPreset('cold')" class="p-2 bg-background rounded hover:bg-muted text-xs">冷色</button>
              <button @click="applyPreset('warm')" class="p-2 bg-background rounded hover:bg-muted text-xs">暖色</button>
              <button @click="applyPreset('dramatic')" class="p-2 bg-background rounded hover:bg-muted text-xs">戏剧</button>
              <button @click="applyPreset('bright')" class="p-2 bg-background rounded hover:bg-muted text-xs">明亮</button>
              <button @click="applyPreset('dark')" class="p-2 bg-background rounded hover:bg-muted text-xs">暗淡</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：预览和下载 -->
      <div class="space-y-4">
        <h2 class="text-lg font-semibold">效果预览</h2>

        <div v-if="!imageUrl" class="bg-muted rounded-lg p-12 text-center text-muted-foreground">
          上传图片后查看效果
        </div>

        <div v-else class="space-y-4">
          <!-- 处理后图片 -->
          <div class="bg-muted rounded-lg p-4">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-muted-foreground">效果预览</span>
              <span class="text-xs text-muted-foreground">{{ imageInfo }}</span>
            </div>
            <canvas
              ref="canvas"
              class="max-w-full h-auto rounded-lg"
            ></canvas>
          </div>

          <!-- 对比原图 -->
          <div class="bg-muted rounded-lg p-4">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-muted-foreground">原图对比</span>
            </div>
            <img :src="imageUrl" class="max-w-full h-auto rounded-lg opacity-50" alt="原图" />
          </div>

          <!-- 下载按钮 -->
          <div class="flex gap-2">
            <button @click="downloadImage" class="flex-1 p-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
              <Download class="w-5 h-5 inline mr-2" />
              下载图片
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 bg-muted p-4 rounded-lg">
      <h3 class="font-medium text-sm mb-2">滤镜说明</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground">
        <div>
          <p class="font-medium text-foreground mb-1">亮度</p>
          <p>调整图片明暗程度</p>
        </div>
        <div>
          <p class="font-medium text-foreground mb-1">对比度</p>
          <p>增强或减弱颜色差异</p>
        </div>
        <div>
          <p class="font-medium text-foreground mb-1">饱和度</p>
          <p>调整色彩鲜艳程度</p>
        </div>
        <div>
          <p class="font-medium text-foreground mb-1">色相</p>
          <p>旋转色相环改变色调</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useSeoMeta } from '#app'
import { Upload, Download } from 'lucide-vue-next'

const fileInput = ref(null)
const canvas = ref(null)
const imageUrl = ref('')
const originalFile = ref(null)

const filters = ref({
  brightness: 100,
  contrast: 100,
  saturate: 100,
  hueRotate: 0,
  grayscale: 0,
  blur: 0,
  invert: 0,
  sepia: 0
})

const presets = {
  none: { brightness: 100, contrast: 100, saturate: 100, hueRotate: 0, grayscale: 0, blur: 0, invert: 0, sepia: 0 },
  grayscale: { brightness: 100, contrast: 100, saturate: 100, hueRotate: 0, grayscale: 100, blur: 0, invert: 0, sepia: 0 },
  sepia: { brightness: 100, contrast: 100, saturate: 100, hueRotate: 0, grayscale: 0, blur: 0, invert: 0, sepia: 100 },
  vintage: { brightness: 110, contrast: 85, saturate: 85, hueRotate: 0, grayscale: 0, blur: 0, invert: 0, sepia: 40 },
  cold: { brightness: 100, contrast: 100, saturate: 90, hueRotate: 180, grayscale: 0, blur: 0, invert: 0, sepia: 0 },
  warm: { brightness: 105, contrast: 100, saturate: 110, hueRotate: 0, grayscale: 0, blur: 0, invert: 0, sepia: 30 },
  dramatic: { brightness: 90, contrast: 150, saturate: 120, hueRotate: 0, grayscale: 0, blur: 0, invert: 0, sepia: 0 },
  bright: { brightness: 130, contrast: 110, saturate: 110, hueRotate: 0, grayscale: 0, blur: 0, invert: 0, sepia: 0 },
  dark: { brightness: 70, contrast: 120, saturate: 80, hueRotate: 0, grayscale: 0, blur: 0, invert: 0, sepia: 10 }
}

const imageInfo = computed(() => {
  if (!imageUrl.value) return ''
  const img = new Image()
  img.src = imageUrl.value
  return `${img.naturalWidth || '?'} x ${img.naturalHeight || '?'} px`
})

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
  originalFile.value = file
  const reader = new FileReader()
  reader.onload = async (e) => {
    imageUrl.value = e.target.result
    resetFilters()
    await nextTick()
    applyFilters()
  }
  reader.readAsDataURL(file)
}

const applyFilters = () => {
  if (!imageUrl.value || !canvas.value) return

  const img = new Image()
  img.onload = () => {
    const ctx = canvas.value.getContext('2d')
    canvas.value.width = img.naturalWidth
    canvas.value.height = img.naturalHeight

    const f = filters.value
    ctx.filter = `brightness(${f.brightness}%) contrast(${f.contrast}%) saturate(${f.saturate}%) hue-rotate(${f.hueRotate}deg) grayscale(${f.grayscale}%) blur(${f.blur}px) invert(${f.invert}%) sepia(${f.sepia}%)`

    ctx.drawImage(img, 0, 0)
  }
  img.src = imageUrl.value
}

const applyPreset = (presetName) => {
  const preset = presets[presetName]
  if (preset) {
    filters.value = { ...preset }
    applyFilters()
  }
}

const resetFilters = () => {
  filters.value = { ...presets.none }
  applyFilters()
}

const clearImage = () => {
  imageUrl.value = ''
  originalFile.value = null
  resetFilters()
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

const downloadImage = () => {
  if (!canvas.value) return

  const link = document.createElement('a')
  link.href = canvas.value.toDataURL(originalFile.value?.type || 'image/png')

  const originalName = originalFile.value?.name || 'image'
  const dotIndex = originalName.lastIndexOf('.')
  const name = dotIndex > 0 ? originalName.substring(0, dotIndex) : originalName

  link.download = `${name}_filtered.png`
  link.click()
}

useSeoMeta({
  title: '图片滤镜 - 在线图片滤镜效果工具',
  description: '免费在线图片滤镜工具，支持亮度、对比度、饱和度、色相调整，以及灰度、模糊、反色等滤镜效果。',
  keywords: ['图片滤镜', '滤镜效果', '亮度', '对比度', '饱和度', 'grayscale', 'blur', '在线工具']
})

import { useSEO } from '~/composables/useSEO'
const { setPageTitle } = useSEO()
setPageTitle('图片滤镜工具')
</script>
