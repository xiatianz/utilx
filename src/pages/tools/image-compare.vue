<template>
  <div class="max-w-8xl mx-auto">
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">图片对比工具</h1>
      <p class="text-muted-foreground">对比两张图片的差异，支持并排对比、滑动对比和切换对比</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧：上传 -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold">上传图片</h2>
          <button @click="clearAll" class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground">清空</button>
        </div>

        <!-- 图片1 -->
        <div class="bg-muted p-4 rounded-lg">
          <h3 class="font-medium text-sm mb-3">图片 A (前)</h3>
          <div
            v-if="!image1.url"
            @drop="(e) => handleDrop(e, 1)"
            @dragover.prevent
            @dragenter.prevent
            class="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
          >
            <input
              ref="fileInput1"
              type="file"
              accept="image/*"
              @change="(e) => handleFileSelect(e, 1)"
              class="hidden"
            >
            <Upload class="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p class="text-sm text-muted-foreground mb-2">拖拽或点击上传</p>
            <button @click="$refs.fileInput1.click()" class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 text-sm">
              选择文件
            </button>
          </div>
          <div v-else class="space-y-2">
            <img :src="image1.url" class="max-w-full h-auto rounded-lg" alt="图片1">
            <button @click="clearImage(1)" class="w-full p-2 text-sm bg-background hover:bg-muted rounded">移除</button>
          </div>
        </div>

        <!-- 图片2 -->
        <div class="bg-muted p-4 rounded-lg">
          <h3 class="font-medium text-sm mb-3">图片 B (后)</h3>
          <div
            v-if="!image2.url"
            @drop="(e) => handleDrop(e, 2)"
            @dragover.prevent
            @dragenter.prevent
            class="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
          >
            <input
              ref="fileInput2"
              type="file"
              accept="image/*"
              @change="(e) => handleFileSelect(e, 2)"
              class="hidden"
            >
            <Upload class="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p class="text-sm text-muted-foreground mb-2">拖拽或点击上传</p>
            <button @click="$refs.fileInput2.click()" class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 text-sm">
              选择文件
            </button>
          </div>
          <div v-else class="space-y-2">
            <img :src="image2.url" class="max-w-full h-auto rounded-lg" alt="图片2">
            <button @click="clearImage(2)" class="w-full p-2 text-sm bg-background hover:bg-muted rounded">移除</button>
          </div>
        </div>

        <!-- 对比模式 -->
        <div v-if="image1.url && image2.url" class="bg-muted p-4 rounded-lg">
          <h3 class="font-medium text-sm mb-3">对比模式</h3>
          <div class="grid grid-cols-3 gap-2">
            <button
              @click="compareMode = 'side-by-side'"
              :class="['p-2 rounded text-xs transition-colors', compareMode === 'side-by-side' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted']"
            >
              并排对比
            </button>
            <button
              @click="compareMode = 'slider'"
              :class="['p-2 rounded text-xs transition-colors', compareMode === 'slider' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted']"
            >
              滑动对比
            </button>
            <button
              @click="compareMode = 'toggle'"
              :class="['p-2 rounded text-xs transition-colors', compareMode === 'toggle' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted']"
            >
              切换对比
            </button>
          </div>
        </div>

        <!-- 差异检测 -->
        <div v-if="image1.url && image2.url" class="bg-muted p-4 rounded-lg">
          <h3 class="font-medium text-sm mb-3">差异检测</h3>
          <div class="space-y-3">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" v-model="showDifference" @change="updateComparison" class="rounded">
              <span class="text-sm">高亮显示差异</span>
            </label>

            <div v-if="showDifference">
              <div class="flex justify-between text-xs mb-1">
                <label>差异阈值</label>
                <span>{{ diffThreshold }}</span>
              </div>
              <input
                v-model.number="diffThreshold"
                type="range"
                min="0"
                max="100"
                @input="updateComparison"
                class="w-full"
              >
            </div>

            <button @click="calculateDiff" class="w-full p-2 bg-background hover:bg-muted rounded text-sm">
              计算差异百分比
            </button>

            <div v-if="diffPercentage !== null" class="text-sm">
              <p>差异程度: <span class="font-bold">{{ diffPercentage.toFixed(2) }}%</span></p>
              <p class="text-xs text-muted-foreground mt-1">基于像素差异计算</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：对比预览 -->
      <div class="space-y-4">
        <h2 class="text-lg font-semibold">对比预览</h2>

        <div v-if="!image1.url || !image2.url" class="bg-muted rounded-lg p-12 text-center text-muted-foreground">
          上传两张图片后开始对比
        </div>

        <div v-else class="space-y-4">
          <!-- 并排对比 -->
          <div v-if="compareMode === 'side-by-side'" class="bg-muted rounded-lg p-4">
            <div class="flex gap-4">
              <div class="flex-1">
                <p class="text-xs text-muted-foreground mb-2">图片 A</p>
                <img :src="image1.url" class="w-full h-auto rounded-lg" alt="图片1">
              </div>
              <div class="flex-1">
                <p class="text-xs text-muted-foreground mb-2">图片 B</p>
                <img :src="image2.url" class="w-full h-auto rounded-lg" alt="图片2">
              </div>
            </div>
          </div>

          <!-- 滑动对比 -->
          <div v-if="compareMode === 'slider'" class="bg-muted rounded-lg p-4">
            <div class="text-xs text-muted-foreground mb-2">拖动滑块对比</div>
            <div
              ref="sliderContainer"
              class="relative inline-block overflow-hidden rounded-lg cursor-ew-resize select-none"
              @mousemove="handleSliderMove"
              @touchmove="handleSliderMove"
              @mousedown="isSliding = true"
              @touchstart="isSliding = true"
              @mouseup="isSliding = false"
              @touchend="isSliding = false"
              @mouseleave="isSliding = false"
            >
              <img :src="image2.url" class="block max-w-full" alt="图片2" ref="sliderImage">
              <div
                class="absolute top-0 left-0 overflow-hidden border-r-2 border-primary"
                :style="{ width: `${sliderPosition}%` }"
              >
                <img
                  :src="image1.url"
                  class="block max-w-full"
                  alt="图片1"
                  :style="{ width: sliderImage?.width + 'px' }"
                >
                <div
                  v-if="showDifference && diffCanvas"
                  class="absolute top-0 left-0 pointer-events-none"
                >
                  <canvas :ref="(el) => { if(el) diffCanvas = el }" class="absolute top-0 left-0"></canvas>
                </div>
              </div>
              <div
                class="absolute top-1/2 -translate-y-1/2 w-1 h-full bg-primary pointer-events-none"
                :style="{ left: `${sliderPosition}%` }"
              >
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                  ⇄
                </div>
              </div>
            </div>
          </div>

          <!-- 切换对比 -->
          <div v-if="compareMode === 'toggle'" class="bg-muted rounded-lg p-4">
            <div class="text-center mb-3">
              <button
                @click="showFirst = !showFirst"
                class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90"
              >
                {{ showFirst ? '显示图片 A' : '显示图片 B' }}
              </button>
            </div>
            <div class="relative">
              <img
                :src="showFirst ? image1.url : image2.url"
                class="w-full h-auto rounded-lg transition-opacity duration-200"
                :alt="showFirst ? '图片1' : '图片2'"
              >
              <div class="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {{ showFirst ? 'A' : 'B' }}
              </div>
            </div>
          </div>

          <!-- 差异图 -->
          <div v-if="showDifference && diffDataUrl" class="bg-muted rounded-lg p-4">
            <div class="text-xs text-muted-foreground mb-2">差异高亮 (红色表示差异)</div>
            <img :src="diffDataUrl" class="w-full h-auto rounded-lg" alt="差异图">
          </div>

          <!-- 图片信息对比 -->
          <div class="bg-muted rounded-lg p-4">
            <h3 class="font-medium text-sm mb-2">图片信息对比</h3>
            <div class="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p class="font-medium mb-1">图片 A</p>
                <p class="text-muted-foreground">尺寸: {{ image1.width }} x {{ image1.height }}</p>
                <p class="text-muted-foreground">文件: {{ image1.name }}</p>
              </div>
              <div>
                <p class="font-medium mb-1">图片 B</p>
                <p class="text-muted-foreground">尺寸: {{ image2.width }} x {{ image2.height }}</p>
                <p class="text-muted-foreground">文件: {{ image2.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useSeoMeta } from '#app'
import { Upload } from 'lucide-vue-next'

const fileInput1 = ref(null)
const fileInput2 = ref(null)
const sliderContainer = ref(null)
const sliderImage = ref(null)
const diffCanvas = ref(null)

const image1 = ref({ url: '', width: 0, height: 0, name: '' })
const image2 = ref({ url: '', width: 0, height: 0, name: '' })
const compareMode = ref('side-by-side')
const sliderPosition = ref(50)
const isSliding = ref(false)
const showFirst = ref(true)
const showDifference = ref(false)
const diffThreshold = ref(20)
const diffDataUrl = ref('')
const diffPercentage = ref(null)

const handleFileSelect = (event, imgNum) => {
  const file = event.target.files?.[0]
  if (file && file.type.startsWith('image/')) {
    loadImage(file, imgNum)
  }
}

const handleDrop = (event, imgNum) => {
  event.preventDefault()
  const file = event.dataTransfer.files?.[0]
  if (file && file.type.startsWith('image/')) {
    loadImage(file, imgNum)
  }
}

const loadImage = (file, imgNum) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    const img = new Image()
    img.onload = () => {
      const target = imgNum === 1 ? image1.value : image2.value
      target.url = e.target.result
      target.width = img.naturalWidth
      target.height = img.naturalHeight
      target.name = file.name
      nextTick(() => updateComparison())
    }
    img.src = e.target.result
  }
  reader.readAsDataURL(file)
}

const clearImage = (imgNum) => {
  const target = imgNum === 1 ? image1.value : image2.value
  target.url = ''
  target.width = 0
  target.height = 0
  target.name = ''

  const input = imgNum === 1 ? fileInput1.value : fileInput2.value
  if (input) input.value = ''

  diffDataUrl.value = ''
  diffPercentage.value = null
}

const clearAll = () => {
  clearImage(1)
  clearImage(2)
  compareMode.value = 'side-by-side'
}

const handleSliderMove = (event) => {
  if (!isSliding.value || !sliderContainer.value) return

  const rect = sliderContainer.value.getBoundingClientRect()
  const clientX = event.touches ? event.touches[0].clientX : event.clientX
  const x = clientX - rect.left
  sliderPosition.value = Math.max(0, Math.min(100, (x / rect.width) * 100))
}

const updateComparison = async () => {
  if (!image1.value.url || !image2.value.url || !showDifference.value) {
    diffDataUrl.value = ''
    return
  }

  await nextTick()

  const img1 = new Image()
  const img2 = new Image()

  img1.onload = () => {
    img2.onload = () => {
      const maxSize = Math.max(img1.naturalWidth, img2.naturalWidth, img1.naturalHeight, img2.naturalHeight)
      const canvas = document.createElement('canvas')
      canvas.width = maxSize
      canvas.height = maxSize
      const ctx = canvas.getContext('2d')

      // 绘制第一张图
      ctx.drawImage(img1, 0, 0, maxSize, maxSize)
      const data1 = ctx.getImageData(0, 0, maxSize, maxSize)

      // 绘制第二张图
      ctx.clearRect(0, 0, maxSize, maxSize)
      ctx.drawImage(img2, 0, 0, maxSize, maxSize)
      const data2 = ctx.getImageData(0, 0, maxSize, maxSize)

      // 计算差异
      const diffData = ctx.createImageData(maxSize, maxSize)
      let diffPixels = 0
      const threshold = diffThreshold.value

      for (let i = 0; i < data1.data.length; i += 4) {
        const r1 = data1.data[i]
        const g1 = data1.data[i + 1]
        const b1 = data1.data[i + 2]

        const r2 = data2.data[i]
        const g2 = data2.data[i + 1]
        const b2 = data2.data[i + 2]

        const diff = Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2)

        if (diff > threshold * 3) {
          diffPixels++
          diffData.data[i] = 255
          diffData.data[i + 1] = 0
          diffData.data[i + 2] = 0
          diffData.data[i + 3] = 200
        } else {
          diffData.data[i] = data1.data[i]
          diffData.data[i + 1] = data1.data[i + 1]
          diffData.data[i + 2] = data1.data[i + 2]
          diffData.data[i + 3] = 50
        }
      }

      ctx.putImageData(diffData, 0, 0)
      diffDataUrl.value = canvas.toDataURL()
    }
    img2.src = image2.value.url
  }
  img1.src = image1.value.url
}

const calculateDiff = () => {
  if (!image1.value.url || !image2.value.url) return

  const img1 = new Image()
  const img2 = new Image()

  img1.onload = () => {
    img2.onload = () => {
      const maxSize = Math.max(img1.naturalWidth, img2.naturalWidth, img1.naturalHeight, img2.naturalHeight)
      const canvas = document.createElement('canvas')
      canvas.width = maxSize
      canvas.height = maxSize
      const ctx = canvas.getContext('2d')

      ctx.drawImage(img1, 0, 0, maxSize, maxSize)
      const data1 = ctx.getImageData(0, 0, maxSize, maxSize)

      ctx.clearRect(0, 0, maxSize, maxSize)
      ctx.drawImage(img2, 0, 0, maxSize, maxSize)
      const data2 = ctx.getImageData(0, 0, maxSize, maxSize)

      let diffPixels = 0
      const totalPixels = maxSize * maxSize

      for (let i = 0; i < data1.data.length; i += 4) {
        const r1 = data1.data[i]
        const g1 = data1.data[i + 1]
        const b1 = data1.data[i + 2]

        const r2 = data2.data[i]
        const g2 = data2.data[i + 1]
        const b2 = data2.data[i + 2]

        const diff = Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2)

        if (diff > 30) {
          diffPixels++
        }
      }

      diffPercentage.value = (diffPixels / totalPixels) * 100
    }
    img2.src = image2.value.url
  }
  img1.src = image1.value.url
}

useSeoMeta({
  title: '图片对比 - 在线图片对比工具',
  description: '免费在线图片对比工具，支持并排对比、滑动对比、切换对比，并可检测图片差异。',
  keywords: ['图片对比', '图片比较', '差异检测', 'image compare', '在线工具']
})

import { useSEO } from '~/composables/useSEO'
const { setPageTitle } = useSEO()
setPageTitle('图片对比工具')
</script>
