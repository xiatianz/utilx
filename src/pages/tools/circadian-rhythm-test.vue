<template>
  <div class="max-w-6xl mx-auto">
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">昼夜节律测试</h1>
      <p class="text-muted-foreground">评估您的生物钟类型（晨型/夜型），了解最佳作息时间，优化生活质量</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧：测试问卷 -->
      <div class="space-y-4">
        <!-- 测试说明 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <ClipboardList class="w-5 h-5 text-primary" />
            测试说明
          </h2>

          <div class="space-y-3 text-sm">
            <p class="text-muted-foreground">本测试基于MEQ（早晨型-夜晚型量表）评估您的昼夜节律类型。</p>
            <p class="text-muted-foreground">请根据您<strong>没有工作压力、自然作息</strong>时的真实感受回答问题。</p>
            <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p class="font-medium">测试大约需要2-3分钟</p>
            </div>
          </div>
        </div>

        <!-- 问卷问题 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">问卷问题</h2>

          <div class="space-y-6">
            <div v-for="(question, index) in questions" :key="index" class="space-y-2">
              <p class="text-sm font-medium">{{ index + 1 }}. {{ question.text }}</p>
              <div class="space-y-1">
                <button
                  v-for="option in question.options"
                  :key="option.value"
                  @click="answers[index] = option.value"
                  :class="['w-full text-left px-3 py-2 rounded text-sm transition-colors', answers[index] === option.value ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80']"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>
          </div>

          <!-- 进度 -->
          <div class="mt-6">
            <div class="flex items-center justify-between text-sm mb-2">
              <span>完成进度</span>
              <span>{{ completedQuestions }}/{{ questions.length }}</span>
            </div>
            <div class="w-full bg-muted rounded-full h-2">
              <div
                class="h-2 rounded-full bg-primary transition-all"
                :style="{ width: (completedQuestions / questions.length * 100) + '%' }"
              ></div>
            </div>
          </div>

          <button
            @click="calculateRhythm"
            :disabled="completedQuestions < questions.length"
            class="w-full mt-6 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            分析昼夜节律类型
          </button>
        </div>
      </div>

      <!-- 右侧：结果和参考 -->
      <div class="space-y-4">
        <!-- 测试结果 -->
        <div v-if="result" class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sunrise class="w-5 h-5 text-yellow-500" />
            测试结果
          </h2>

          <div class="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20 mb-4">
            <div class="text-center">
              <p class="text-sm text-muted-foreground mb-2">您的昼夜节律类型</p>
              <p class="text-4xl font-bold text-primary mb-2">{{ result.type }}</p>
              <p class="text-sm">MEQ得分: {{ result.score }}/25</p>
            </div>
          </div>

          <!-- 详细说明 -->
          <div class="p-4 rounded-lg mb-4" :class="getResultClass(result.type)">
            <div class="flex items-center gap-3 mb-2">
              <component :is="getResultIcon(result.type)" class="w-6 h-6" />
              <p class="font-medium">{{ result.type }}</p>
            </div>
            <p class="text-sm">{{ result.description }}</p>
          </div>

          <!-- 最佳作息时间 -->
          <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p class="font-medium text-sm mb-3">建议作息时间</p>
            <div class="space-y-2 text-sm">
              <div class="flex items-center justify-between">
                <span class="text-muted-foreground">理想起床时间</span>
                <span class="font-medium">{{ result.wakeTime }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-muted-foreground">理想就寝时间</span>
                <span class="font-medium">{{ result.bedTime }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-muted-foreground">最佳工作时段</span>
                <span class="font-medium">{{ result.peakHours }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 各种类型说明 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">昼夜节律类型说明</h2>

          <div class="space-y-3 text-sm">
            <div class="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <p class="font-medium mb-1">明显晨型 (16-25分)</p>
              <p class="text-muted-foreground">早起鸟类型，早晨精力充沛，晚上较早入睡</p>
            </div>

            <div class="p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <p class="font-medium mb-1">中度晨型 (11-15分)</p>
              <p class="text-muted-foreground">偏向早起，上午工作效率高</p>
            </div>

            <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p class="font-medium mb-1">中间型 (6-10分)</p>
              <p class="text-muted-foreground">早晚适应较好，可以灵活调整作息</p>
            </div>

            <div class="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
              <p class="font-medium mb-1">中度夜型 (1-5分)</p>
              <p class="text-muted-foreground">偏向晚起，下午和晚上精力更佳</p>
            </div>

            <div class="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded">
              <p class="font-medium mb-1">明显夜型 (≤0分)</p>
              <p class="text-muted-foreground">夜猫子类型，晚上思维活跃，起床困难</p>
            </div>
          </div>
        </div>

        <!-- 科学知识 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">关于昼夜节律</h2>

          <div class="space-y-3 text-sm">
            <div class="p-3 bg-muted rounded">
              <p class="font-medium mb-1">什么是昼夜节律？</p>
              <p class="text-muted-foreground">昼夜节律是人体内在的24小时生物钟，控制睡眠-觉醒周期、激素分泌、体温变化等生理过程。</p>
            </div>

            <div class="p-3 bg-muted rounded">
              <p class="font-medium mb-1">影响节律的因素</p>
              <p class="text-muted-foreground">基因（PER3、CLOCK基因）、年龄（青少年更偏向夜型）、光照（阳光调节褪黑素分泌）。</p>
            </div>

            <div class="p-3 bg-muted rounded">
              <p class="font-medium mb-1">类型可以改变吗？</p>
              <p class="text-muted-foreground">昼夜节律类型主要由基因决定，但可以通过规律作息、光照暴露等方式适度调整。</p>
            </div>
          </div>
        </div>

        <!-- 根据类型优化生活 -->
        <div v-if="result" class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">{{ result.type }}优化建议</h2>

          <div class="space-y-3 text-sm">
            <div v-if="result.category === 'morning'" class="flex items-start gap-3">
              <Sunrise class="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">利用早晨优势</p>
                <p class="text-muted-foreground">将最重要的工作安排在上午，晚上适当放松，避免过度劳累</p>
              </div>
            </div>

            <div v-if="result.category === 'intermediate'" class="flex items-start gap-3">
              <Activity class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">灵活安排</p>
                <p class="text-muted-foreground">您适应性强，可以根据工作和生活需要灵活调整作息</p>
              </div>
            </div>

            <div v-if="result.category === 'evening'" class="flex items-start gap-3">
              <Moon class="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">尊重自己的节律</p>
                <p class="text-muted-foreground">如果工作允许，将重要任务安排在下午。如需早起，提前调整作息并增加早晨光照</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <Lightbulb class="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">通用建议</p>
                <p class="text-muted-foreground">无论哪种类型，保持规律作息最重要。固定睡眠时间有助于维持健康的昼夜节律</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 相关健康提示 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">健康提示</h2>

          <div class="space-y-2 text-sm text-muted-foreground">
            <div class="flex items-start gap-2">
              <AlertTriangle class="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <p>长期违背自己的生物钟可能导致睡眠质量下降和健康问题</p>
            </div>
            <div class="flex items-start gap-2">
              <AlertTriangle class="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <p>社会时差（工作日早起、周末晚起）会打乱生物钟</p>
            </div>
            <div class="flex items-start gap-2">
              <AlertTriangle class="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <p>轮班工作者需要特别注意调整光照和作息来保护健康</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSeoMeta } from '#app'
import {
  ClipboardList,
  Sunrise,
  Sun,
  Moon,
  Activity,
  Lightbulb,
  AlertTriangle,
  CheckCircle
} from 'lucide-vue-next'

const answers = ref([])

const questions = [
  {
    text: '如果您完全自由地安排一天，您大约会在什么时间起床？',
    options: [
      { label: '5:00-6:45', value: 5 },
      { label: '6:46-7:45', value: 4 },
      { label: '7:46-9:45', value: 3 },
      { label: '9:46-10:45', value: 2 },
      { label: '10:46以后', value: 1 }
    ]
  },
  {
    text: '您感觉精神最好、精力最充沛的时间是？',
    options: [
      { label: '早晨 (5:00-8:00)', value: 5 },
      { label: '上午 (8:01-10:00)', value: 4 },
      { label: '中午前后 (10:01-14:00)', value: 3 },
      { label: '下午 (14:01-18:00)', value: 2 },
      { label: '晚上 (18:01以后)', value: 1 }
    ]
  },
  {
    text: '您感觉最困倦、想睡觉的时间是？',
    options: [
      { label: '晚上 20:00-21:00', value: 5 },
      { label: '晚上 21:01-22:15', value: 4 },
      { label: '深夜 22:16-00:15', value: 3 },
      { label: '凌晨 00:16-1:45', value: 2 },
      { label: '凌晨 1:46以后', value: 1 }
    ]
  },
  {
    text: '如果在没有任何计划的情况下，您会选择什么时间进行需要集中注意力的脑力工作？',
    options: [
      { label: '早晨 8:00-10:00', value: 5 },
      { label: '上午 10:01-12:00', value: 4 },
      { label: '下午 13:00-16:00', value: 3 },
      { label: '傍晚 16:01-19:00', value: 2 },
      { label: '晚上 19:01以后', value: 1 }
    ]
  },
  {
    text: '在必须早上6:00起床的情况下，您感觉如何？',
    options: [
      { label: '完全没有困难', value: 5 },
      { label: '有点小困难但可以接受', value: 4 },
      { label: '有些困难', value: 3 },
      { label: '非常困难', value: 2 },
      { label: '几乎不可能', value: 1 }
    ]
  }
]

const result = ref(null)

const completedQuestions = computed(() => {
  return answers.value.filter(a => a !== undefined).length
})

function calculateRhythm() {
  if (completedQuestions.value < questions.length) {
    alert('请回答所有问题')
    return
  }

  const score = answers.value.reduce((sum, answer) => sum + answer, 0)

  let type, category, description, wakeTime, bedTime, peakHours

  if (score >= 16) {
    type = '明显晨型'
    category = 'morning'
    description = '您是典型的早起鸟，早晨精力充沛，晚上较早感到疲倦。这是您的自然生理节律，请充分利用早晨的黄金时间。'
    wakeTime = '6:00-6:30'
    bedTime = '21:30-22:30'
    peakHours = '8:00-12:00'
  } else if (score >= 11) {
    type = '中度晨型'
    category = 'morning'
    description = '您偏向早起类型，上午工作效率最高，下午精力逐渐下降。'
    wakeTime = '6:30-7:00'
    bedTime = '22:00-23:00'
    peakHours = '9:00-12:00'
  } else if (score >= 6) {
    type = '中间型'
    category = 'intermediate'
    description = '您的昼夜节律比较平衡，早晚都能适应，这是大多数人类型。'
    wakeTime = '7:00-7:30'
    bedTime = '22:30-23:30'
    peakHours = '10:00-12:00, 15:00-17:00'
  } else if (score >= 1) {
    type = '中度夜型'
    category = 'evening'
    description = '您偏向晚起类型，下午和晚上精力更充沛，起床较为困难。'
    wakeTime = '7:30-8:30'
    bedTime = '23:30-00:30'
    peakHours = '14:00-18:00'
  } else {
    type = '明显夜型'
    category = 'evening'
    description = '您是典型的夜猫子，晚上思维活跃，早上起床非常困难。这是您的自然生理节律，社会生活可能带来一些挑战。'
    wakeTime = '8:30-9:30'
    bedTime = '00:30-2:00'
    peakHours = '16:00-22:00'
  }

  result.value = {
    score,
    type,
    category,
    description,
    wakeTime,
    bedTime,
    peakHours
  }
}

function getResultClass(type) {
  if (type.includes('晨型')) return 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300'
  if (type.includes('中间')) return 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
  return 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
}

function getResultIcon(type) {
  if (type.includes('晨型')) return Sun
  if (type.includes('中间')) return Activity
  return Moon
}

useSeoMeta({
  title: '昼夜节律测试 - 在线晨型夜型生物钟评估',
  description: '免费在线昼夜节律测试，评估您是晨型人还是夜型人，了解最佳作息时间，优化生活质量和工作效率。', keywords: ['昼夜节律', '生物钟', '晨型', '夜型', '早起鸟', '夜猫子', '作息时间', 'MEQ量表']})

import { useSEO } from '~/composables/useSEO'
const { setPageTitle } = useSEO()
setPageTitle('昼夜节律测试')
</script>
