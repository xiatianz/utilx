<template>
  <div class="max-w-8xl mx-auto">
    <!-- 面包屑导航 -->
    <!-- <Breadcrumb :category="category" /> -->

    <!-- 工具标题 -->
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">秒表计时器</h1>
      <p class="text-muted-foreground">精确计时工具，支持记录分段时间和统计分析</p>
    </div>

    <!-- 主要功能区域 -->
    <div class="space-y-6">
      <!-- 秒表显示 -->
      <div class="bg-card border rounded-lg p-8 text-center">
        <div class="space-y-6">
          <!-- 大屏时间显示 -->
          <div class="text-6xl lg:text-8xl font-mono font-bold tabular-nums">
            {{ formatTime(elapsedTime) }}
          </div>

          <!-- 毫秒显示 -->
          <div class="text-2xl font-mono text-muted-foreground tabular-nums">
            .{{ formatMilliseconds(elapsedTime) }}
          </div>

          <!-- 控制按钮 -->
          <div class="flex justify-center gap-4">
            <button
              v-if="!isRunning"
              @click="start"
              class="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Play class="w-5 h-5" />
              开始
            </button>
            <button
              v-if="isRunning"
              @click="pause"
              class="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors flex items-center gap-2"
            >
              <Pause class="w-5 h-5" />
              暂停
            </button>
            <button
              v-if="isPaused"
              @click="resume"
              class="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Play class="w-5 h-5" />
              继续
            </button>
            <button
              v-if="elapsedTime > 0"
              @click="lap"
              :disabled="!isRunning && !isPaused"
              class="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Flag class="w-5 h-5" />
              计次
            </button>
            <button
              v-if="elapsedTime > 0"
              @click="reset"
              class="px-6 py-3 border border-destructive text-destructive rounded-md hover:bg-destructive/5 transition-colors flex items-center gap-2"
            >
              <RotateCcw class="w-5 h-5" />
              重置
            </button>
          </div>
        </div>
      </div>

      <!-- 计次记录 -->
      <div class="bg-card   rounded-lg p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">计次记录</h2>
          <div v-if="laps.length > 0" class="text-sm text-muted-foreground">
            共 {{ laps.length }} 次记录
          </div>
        </div>

        <div v-if="laps.length === 0" class="text-center text-muted-foreground py-8">
          暂无计次记录
        </div>

        <div v-else class="space-y-2 max-h-96 overflow-y-auto">
          <!-- 统计信息 -->
          <div v-if="laps.length > 1" class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div class="p-3 bg-muted rounded-lg">
              <div class="text-xs text-muted-foreground mb-1">最快</div>
              <div class="font-mono font-bold text-green-600">{{ formatTime(stats.fastest) }}</div>
            </div>
            <div class="p-3 bg-muted rounded-lg">
              <div class="text-xs text-muted-foreground mb-1">最慢</div>
              <div class="font-mono font-bold text-red-600">{{ formatTime(stats.slowest) }}</div>
            </div>
            <div class="p-3 bg-muted rounded-lg">
              <div class="text-xs text-muted-foreground mb-1">平均</div>
              <div class="font-mono font-bold text-blue-600">{{ formatTime(stats.average) }}</div>
            </div>
            <div class="p-3 bg-muted rounded-lg">
              <div class="text-xs text-muted-foreground mb-1">总计</div>
              <div class="font-mono font-bold">{{ formatTime(elapsedTime) }}</div>
            </div>
          </div>

          <!-- 记录列表 -->
          <div class="space-y-1">
            <div
              v-for="(lap, index) in laps"
              :key="index"
              class="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-sm font-medium text-muted-foreground w-16">
                  计次 {{ laps.length - index }}
                </span>
                <div class="flex items-center gap-2">
                  <span v-if="lap.type === 'fastest'" class="text-xs text-green-600 font-medium">最快</span>
                  <span v-if="lap.type === 'slowest'" class="text-xs text-red-600 font-medium">最慢</span>
                </div>
              </div>
              <div class="flex items-center gap-6">
                <div class="font-mono text-sm">
                  <span class="text-muted-foreground">间隔:</span>
                  <span>{{ formatTime(lap.splitTime) }}</span>
                </div>
                <div class="font-mono font-medium">
                  <span class="text-muted-foreground">总计:</span>
                  <span>{{ formatTime(lap.totalTime) }}</span>
                </div>
                <button
                  @click="removeLap(index)"
                  class="text-muted-foreground hover:text-destructive transition-colors"
                >
                  <X class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 导出按钮 -->
        <div v-if="laps.length > 0" class="mt-4 flex gap-2">
          <button
            @click="exportData"
            class="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm"
          >
            导出数据
          </button>
          <button
            @click="shareResults"
            class="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors text-sm"
          >
            分享结果
          </button>
        </div>
      </div>

      <!-- 快捷操作 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 预设时间 -->
        <div class="bg-card   rounded-lg p-6">
          <h2 class="text-lg font-semibold mb-4">快速设置</h2>
          <div class="space-y-3">
            <button
              v-for="preset in timePresets"
              :key="preset.name"
              @click="setPresetTime(preset)"
              :disabled="isRunning"
              class="w-full px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ preset.name }}
            </button>
          </div>
        </div>

        <!-- 快捷键说明 -->
        <div class="bg-card   rounded-lg p-6">
          <h2 class="text-lg font-semibold mb-4">快捷键</h2>
          <div class="space-y-3 text-sm">
            <div class="flex justify-between items-center">
              <span class="text-muted-foreground">开始/暂停</span>
              <kbd class="px-2 py-1 bg-muted rounded font-mono text-xs">Space</kbd>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-muted-foreground">计次</span>
              <kbd class="px-2 py-1 bg-muted rounded font-mono text-xs">L</kbd>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-muted-foreground">重置</span>
              <kbd class="px-2 py-1 bg-muted rounded font-mono text-xs">R</kbd>
            </div>
          </div>
        </div>

        <!-- 使用场景 -->
        <div class="bg-card   rounded-lg p-6">
          <h2 class="text-lg font-semibold mb-4">使用场景</h2>
          <div class="space-y-3 text-sm">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-primary rounded-full"></div>
              <span>运动健身计时</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-primary rounded-full"></div>
              <span>学习专注时间</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-primary rounded-full"></div>
              <span>会议演讲计时</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-primary rounded-full"></div>
              <span>比赛竞技计时</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-primary rounded-full"></div>
              <span>烹饪烘焙计时</span>
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
            <h4 class="font-medium text-foreground mb-2">基本操作</h4>
            <ul class="list-disc list-inside space-y-1 ml-4">
              <li>点击"开始"按钮或按空格键开始计时</li>
              <li>计时过程中点击"计次"按钮记录分段时间</li>
              <li>可以随时暂停和继续计时</li>
              <li>点击"重置"清空所有记录</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium text-foreground mb-2">高级功能</h4>
            <ul class="list-disc list-inside space-y-1 ml-4">
              <li>自动标记最快和最慢的计次</li>
              <li>显示平均时间和统计信息</li>
              <li>支持导出计次数据为JSON格式</li>
              <li>可分享计时结果给他人</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 相关工具 -->
      <div class="bg-card   rounded-lg p-6">
        <h3 class="text-lg font-semibold mb-4">相关工具</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <NuxtLink
            to="/tools/countdown-timer"
            class="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
          >
            <Timer class="w-5 h-5 text-primary" />
            <div>
              <p class="font-medium group-hover:text-primary">倒计时器</p>
              <p class="text-xs text-muted-foreground">设置倒计时</p>
            </div>
            <ArrowRight class="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" />
          </NuxtLink>
          <NuxtLink
            to="/tools/timestamp-convert"
            class="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
          >
            <Clock class="w-5 h-5 text-primary" />
            <div>
              <p class="font-medium group-hover:text-primary">时间戳转换器</p>
              <p class="text-xs text-muted-foreground">Unix时间戳转换</p>
            </div>
            <ArrowRight class="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" />
          </NuxtLink>
          <NuxtLink
            to="/tools/date-calculator"
            class="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
          >
            <TrendingUp class="w-5 h-5 text-primary" />
            <div>
              <p class="font-medium group-hover:text-primary">配速计算器</p>
              <p class="text-xs text-muted-foreground">计算运动配速</p>
            </div>
            <ArrowRight class="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Info, Play, Pause, Flag, RotateCcw, X, Timer, Clock, TrendingUp, ArrowRight } from 'lucide-vue-next'
import Breadcrumb from '~/components/Breadcrumb.vue'

// 分类信息
const category = { id: 'time', name: '时间日期', description: '时间日期相关工具集合' }

// 状态管理
const elapsedTime = ref(0)
const startTime = ref(0)
const isRunning = ref(false)
const isPaused = ref(false)
const laps = ref([])
let animationFrame = null

// 预设时间
const timePresets = [
  { name: '1分钟', seconds: 60 },
  { name: '3分钟', seconds: 180 },
  { name: '5分钟', seconds: 300 },
  { name: '10分钟', seconds: 600 },
  { name: '25分钟（番茄钟）', seconds: 1500 }
]

// 统计信息
const stats = computed(() => {
  if (laps.length < 2) return { fastest: 0, slowest: 0, average: 0 }

  const times = laps.map(lap => lap.splitTime)
  const fastest = Math.min(...times)
  const slowest = Math.max(...times)
  const average = times.reduce((a, b) => a + b, 0) / times.length

  return { fastest, slowest, average: Math.round(average) }
})

// 格式化时间
const formatTime = (centiseconds) => {
  const totalSeconds = Math.floor(centiseconds / 100)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

// 格式化毫秒
const formatMilliseconds = (centiseconds) => {
  return String(centiseconds % 100).padStart(2, '0')
}

// 更新时间
const updateTimer = () => {
  if (!isRunning.value) return

  const currentTime = Date.now()
  elapsedTime.value = Math.floor((currentTime - startTime.value) / 10)
  animationFrame = requestAnimationFrame(updateTimer)
}

// 开始
const start = () => {
  startTime.value = Date.now() - elapsedTime.value * 10
  isRunning.value = true
  isPaused.value = false
  updateTimer()
}

// 暂停
const pause = () => {
  isRunning.value = false
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
}

// 继续
const resume = () => {
  startTime.value = Date.now() - elapsedTime.value * 10
  isRunning.value = true
  isPaused.value = false
  updateTimer()
}

// 计次
const lap = () => {
  if (elapsedTime.value === 0) return

  const lastLapTotal = laps.length > 0 ? laps[laps.length - 1].totalTime : 0
  const splitTime = elapsedTime.value - lastLapTotal
  const lapData = {
    splitTime,
    totalTime: elapsedTime.value,
    timestamp: new Date().toISOString(),
    type: null
  }

  // 标记最快和最慢
  if (laps.length > 0) {
    const allSplitTimes = [...laps.map(l => l.splitTime), splitTime]
    if (splitTime === Math.min(...allSplitTimes)) {
      lapData.type = 'fastest'
    } else if (splitTime === Math.max(...allSplitTimes)) {
      lapData.type = 'slowest'
    }

    // 更新之前的标记
    laps.value = laps.value.map(lap => {
      if (lap.splitTime === Math.min(...allSplitTimes.slice(0, -1))) {
        return { ...lap, type: 'fastest' }
      } else if (lap.splitTime === Math.max(...allSplitTimes.slice(0, -1))) {
        return { ...lap, type: 'slowest' }
      }
      return { ...lap, type: null }
    })
  }

  laps.value.push(lapData)
}

// 重置
const reset = () => {
  pause()
  elapsedTime.value = 0
  startTime.value = 0
  isPaused.value = false
  laps.value = []
}

// 删除计次
const removeLap = (index) => {
  laps.value.splice(index, 1)
  // 重新计算统计信息
  if (laps.value.length > 1) {
    const times = laps.value.map(l => l.splitTime)
    const fastest = Math.min(...times)
    const slowest = Math.max(...times)

    laps.value = laps.value.map(lap => ({
      ...lap,
      type: lap.splitTime === fastest ? 'fastest' : lap.splitTime === slowest ? 'slowest' : null
    }))
  }
}

// 设置预设时间
const setPresetTime = (preset) => {
  elapsedTime.value = preset.seconds * 100
  startTime.value = Date.now() - elapsedTime.value * 10
}

// 导出数据
const exportData = () => {
  const data = {
    elapsedTime,
    laps: laps.value.map((lap, index) => ({
      lap: index + 1,
      splitTime: lap.splitTime,
      totalTime: lap.totalTime,
      timestamp: lap.timestamp
    })),
    stats: stats.value,
    exportTime: new Date().toISOString()
  }

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `stopwatch-${Date.now()}.json`
  a.click()
  URL.revokeObjectURL(url)
}

// 分享结果
const shareResults = async () => {
  const text = `秒表计时结果
总计: ${formatTime(elapsedTime)}
计次数: ${laps.length}
${laps.length > 0 ? `
最快: ${formatTime(stats.value.fastest)}
最慢: ${formatTime(stats.value.slowest)}
平均: ${formatTime(stats.value.average)}` : ''}`

  try {
    if (navigator.share) {
      await navigator.share({
        title: '秒表计时结果',
        text
      })
    } else {
      // 降级到复制到剪贴板
      await navigator.clipboard.writeText(text)
      alert('结果已复制到剪贴板')
    }
  } catch (error) {
    console.error('分享失败', error)
  }
}

// 键盘事件处理
const handleKeyDown = (e) => {
  if (e.code === 'Space') {
    e.preventDefault()
    if (!isRunning.value && elapsedTime.value === 0) {
      start()
    } else if (isRunning.value) {
      pause()
    } else if (isPaused.value) {
      resume()
    }
  } else if (e.code === 'KeyL' && (isRunning.value || isPaused.value)) {
    lap()
  } else if (e.code === 'KeyR' && elapsedTime.value > 0) {
    reset()
  }
}

// SEO配置
useSeoMeta({
  title: '秒表计时器 - 在线精确计时工具',
  description: '免费在线秒表工具，支持精确到百分之一秒的计时、计次记录、统计分析等功能。',
  keywords: ['秒表', '计时器', '在线计时', '精确计时', '运动计时', '学习计时']
})

definePageMeta({
  layout: 'default'
})

// 生命周期
onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>