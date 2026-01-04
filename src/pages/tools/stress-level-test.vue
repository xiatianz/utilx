<template>
  <div class="max-w-6xl mx-auto">
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">压力水平测试</h1>
      <p class="text-muted-foreground">评估当前压力水平，识别压力来源，获得科学减压建议</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧：测试问卷 -->
      <div class="space-y-4">
        <!-- 测试说明 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Brain class="w-5 h-5 text-primary" />
            压力水平评估
          </h2>

          <div class="space-y-3 text-sm">
            <p class="text-muted-foreground">本测试基于Perceived Stress Scale (PSS)量表，评估您最近一个月感知到的压力水平。</p>
            <p class="text-muted-foreground">请根据您<strong>最近一个月</strong>的真实感受回答问题。</p>
            <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p class="font-medium">测试包含10个问题，大约需要2-3分钟</p>
            </div>
          </div>
        </div>

        <!-- 问卷问题 -->
        <div class="bg-card rounded-lg p-6 border">
          <div class="space-y-6">
            <div v-for="(question, index) in questions" :key="index" class="space-y-2">
              <p class="text-sm font-medium">{{ index + 1 }}. {{ question.text }}</p>
              <div class="grid grid-cols-5 gap-1">
                <button
                  v-for="option in [0, 1, 2, 3, 4]"
                  :key="option"
                  @click="answers[index] = option"
                  :class="['text-center px-2 py-2 rounded text-sm transition-colors', answers[index] === option ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80']"
                >
                  {{ option }}
                </button>
              </div>
              <div class="flex justify-between text-xs text-muted-foreground px-1">
                <span>从不</span>
                <span>总是</span>
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
            @click="calculateStress"
            :disabled="completedQuestions < questions.length"
            class="w-full mt-6 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            分析压力水平
          </button>
        </div>
      </div>

      <!-- 右侧：结果和建议 -->
      <div class="space-y-4">
        <!-- 测试结果 -->
        <div v-if="result" class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Activity class="w-5 h-5 text-purple-500" />
            测试结果
          </h2>

          <div class="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20 mb-4">
            <div class="text-center">
              <p class="text-sm text-muted-foreground mb-2">压力水平</p>
              <p class="text-4xl font-bold text-primary mb-2">{{ result.level }}</p>
              <p class="text-sm">得分: {{ result.score }}/40</p>
            </div>
          </div>

          <!-- 详细说明 -->
          <div class="p-4 rounded-lg mb-4" :class="getLevelClass(result.level)">
            <div class="flex items-center gap-3 mb-2">
              <component :is="getLevelIcon(result.level)" class="w-6 h-6" />
              <p class="font-medium">{{ result.level }}</p>
            </div>
            <p class="text-sm">{{ result.description }}</p>
          </div>

          <!-- 压力来源分析 -->
          <div v-if="result.sources && result.sources.length > 0" class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded mb-4">
            <p class="font-medium text-sm mb-2">可能的主要压力来源</p>
            <ul class="space-y-1 text-sm">
              <li v-for="(source, index) in result.sources" :key="index" class="flex items-start gap-2">
                <AlertTriangle class="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>{{ source }}</span>
              </li>
            </ul>
          </div>

          <!-- 减压建议 -->
          <div v-if="result.recommendations && result.recommendations.length > 0" class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p class="font-medium text-sm mb-2">减压建议</p>
            <ul class="space-y-1 text-sm">
              <li v-for="(rec, index) in result.recommendations" :key="index" class="flex items-start gap-2">
                <CheckCircle class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{{ rec }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 压力水平说明 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">压力水平等级</h2>

          <div class="space-y-2 text-sm">
            <div class="p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <div class="flex items-center justify-between">
                <span class="font-medium">低压力 (0-13分)</span>
                <span class="text-green-600">压力管理良好</span>
              </div>
              <p class="text-xs text-muted-foreground mt-1">能够有效应对生活挑战</p>
            </div>

            <div class="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <div class="flex items-center justify-between">
                <span class="font-medium">中等压力 (14-26分)</span>
                <span class="text-yellow-600">需要关注</span>
              </div>
              <p class="text-xs text-muted-foreground mt-1">压力处于可控范围，但需要适当调节</p>
            </div>

            <div class="p-3 bg-orange-50 dark:bg-orange-900/20 rounded">
              <div class="flex items-center justify-between">
                <span class="font-medium">高压力 (27-34分)</span>
                <span class="text-orange-600">需要干预</span>
              </div>
              <p class="text-xs text-muted-foreground mt-1">压力水平较高，建议采取减压措施</p>
            </div>

            <div class="p-3 bg-red-50 dark:bg-red-900/20 rounded">
              <div class="flex items-center justify-between">
                <span class="font-medium">极高压力 (35-40分)</span>
                <span class="text-red-600">寻求帮助</span>
              </div>
              <p class="text-xs text-muted-foreground mt-1">压力过载，建议咨询心理健康专业人士</p>
            </div>
          </div>
        </div>

        <!-- 快速减压技巧 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">快速减压技巧</h2>

          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <Wind class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">深呼吸</p>
                <p class="text-muted-foreground">4秒吸气-4秒屏气-4秒呼气，重复5次</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Sparkles class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">正念冥想</p>
                <p class="text-muted-foreground">专注当下5分钟，观察呼吸和感受</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Zap class="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">短暂运动</p>
                <p class="text-muted-foreground">快走、伸展或跳绳5-10分钟</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Music class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">听音乐</p>
                <p class="text-muted-foreground">选择舒缓的音乐放松身心</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Coffee class="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">喝杯茶</p>
                <p class="text-muted-foreground">绿茶、洋甘菊茶有放松效果</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 长期压力影响 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">长期压力的影响</h2>

          <div class="grid grid-cols-2 gap-2 text-sm">
            <div class="p-2 bg-red-50 dark:bg-red-900/20 rounded text-center">
              <p class="font-medium">心血管</p>
              <p class="text-xs text-muted-foreground">高血压风险</p>
            </div>
            <div class="p-2 bg-red-50 dark:bg-red-900/20 rounded text-center">
              <p class="font-medium">免疫系统</p>
              <p class="text-xs text-muted-foreground">抵抗力下降</p>
            </div>
            <div class="p-2 bg-orange-50 dark:bg-orange-900/20 rounded text-center">
              <p class="font-medium">睡眠</p>
              <p class="text-xs text-muted-foreground">失眠质量差</p>
            </div>
            <div class="p-2 bg-orange-50 dark:bg-orange-900/20 rounded text-center">
              <p class="font-medium">情绪</p>
              <p class="text-xs text-muted-foreground">焦虑抑郁</p>
            </div>
            <div class="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-center">
              <p class="font-medium">消化</p>
              <p class="text-xs text-muted-foreground">肠胃问题</p>
            </div>
            <div class="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-center">
              <p class="font-medium">记忆</p>
              <p class="text-xs text-muted-foreground">认知下降</p>
            </div>
          </div>

          <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">
            <p class="font-medium mb-1">重要提示</p>
            <p class="text-muted-foreground">如果压力持续严重影响生活质量，请及时寻求专业心理咨询师或医生的帮助</p>
          </div>
        </div>

        <!-- 健康应对策略 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">健康应对压力</h2>

          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <Target class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">设定合理目标</p>
                <p class="text-muted-foreground">将大目标分解为小步骤，逐一完成</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Users class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">寻求支持</p>
                <p class="text-muted-foreground">与家人朋友沟通，不要独自承担</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Dumbbell class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">规律运动</p>
                <p class="text-muted-foreground">每周3-5次运动，每次30分钟以上</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Moon class="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">充足睡眠</p>
                <p class="text-muted-foreground">保证7-9小时优质睡眠</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Utensils class="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">健康饮食</p>
                <p class="text-muted-foreground">均衡营养，避免过多咖啡因和糖</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 何时寻求专业帮助 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">何时寻求专业帮助</h2>

          <div class="space-y-2 text-sm text-muted-foreground">
            <div class="flex items-start gap-2">
              <AlertTriangle class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <p>压力持续超过两周无法缓解</p>
            </div>
            <div class="flex items-start gap-2">
              <AlertTriangle class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <p>出现明显的焦虑、抑郁症状</p>
            </div>
            <div class="flex items-start gap-2">
              <AlertTriangle class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <p>影响正常工作和生活</p>
            </div>
            <div class="flex items-start gap-2">
              <AlertTriangle class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <p>出现躯体症状（头痛、胃痛等）</p>
            </div>
            <div class="flex items-start gap-2">
              <AlertTriangle class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <p>有自伤或伤害他人的想法</p>
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
  Brain,
  Activity,
  CheckCircle,
  AlertTriangle,
  Wind,
  Sparkles,
  Zap,
  Music,
  Coffee,
  Target,
  Users,
  Dumbbell,
  Moon,
  Utensils
} from 'lucide-vue-next'

const answers = ref([])

const questions = [
  { text: '在最近一个月，您有多少次因意外发生的事情而感到心烦意乱？', reverse: false },
  { text: '在最近一个月，您有多少次感到无法控制生活中的重要事情？', reverse: false },
  { text: '在最近一个月，您有多少次感到神经紧张和压力很大？', reverse: false },
  { text: '在最近一个月，您有多少次感到自信能够处理个人问题？', reverse: true },
  { text: '在最近一个月，您有多少次感到事情都在按照您的意愿进行？', reverse: true },
  { text: '在最近一个月，您有多少次发现自己无法克服所有困难？', reverse: false },
  { text: '在最近一个月，您有多少次能够控制生活中的恼人事情？', reverse: true },
  { text: '在最近一个月，您有多少次感到一切都在掌控之中？', reverse: true },
  { text: '在最近一个月，您有多少次因无法控制的事情而感到愤怒？', reverse: false },
  { text: '在最近一个月，您有多少次感到问题堆积如山，无法克服？', reverse: false }
]

const result = ref(null)

const completedQuestions = computed(() => {
  return answers.value.filter(a => a !== undefined).length
})

function calculateStress() {
  if (completedQuestions.value < questions.length) {
    alert('请回答所有问题')
    return
  }

  // 计算得分
  let score = 0
  questions.forEach((q, index) => {
    let answer = answers.value[index]
    if (q.reverse) {
      answer = 4 - answer // 反向计分
    }
    score += answer
  })

  let level, description, sources = [], recommendations = []

  if (score <= 13) {
    level = '低压力'
    description = '您的压力水平较低，能够有效应对生活挑战。请继续保持良好的压力管理习惯。'
    recommendations = [
      '继续保持健康的生活方式',
      '定期运动、充足睡眠、均衡饮食',
      '与亲友保持良好社交关系'
    ]
  } else if (score <= 26) {
    level = '中等压力'
    description = '您的压力处于中等水平，虽然还在可控范围，但需要注意调节。'
    sources = [
      '可能面临工作或学习压力',
      '人际关系或家庭责任',
      '经济压力或未来不确定性'
    ]
    recommendations = [
      '识别主要压力来源并制定应对策略',
      '学习时间管理，优先处理重要任务',
      '保证充足的休息和放松时间',
      '尝试冥想、瑜伽或深呼吸练习'
    ]
  } else if (score <= 34) {
    level = '高压力'
    description = '您的压力水平较高，需要重视并采取积极措施减压。'
    sources = [
      '可能面临多重压力源',
      '工作生活平衡失调',
      '缺乏有效的减压方法'
    ]
    recommendations = [
      '立即采取减压措施，优先自我照顾',
      '寻求家人朋友的支持和理解',
      '考虑减少工作负担或委托任务',
      '建立规律的减压习惯（运动、冥想等）',
      '如持续感到无法应对，建议咨询专业人士'
    ]
  } else {
    level = '极高压力'
    description = '您正处于极度压力状态，这严重影响身心健康。强烈建议寻求专业帮助。'
    sources = [
      '压力过载，超出承受能力',
      '可能已出现身心症状',
      '需要立即干预和支持'
    ]
    recommendations = [
      '这是严重的状况，请尽快寻求专业心理咨询',
      '与信任的人分享您的感受',
      '不要独自承担，寻求帮助是强者的表现',
      '如有必要，咨询医生是否需要药物辅助治疗',
      '给自己时间和空间来恢复'
    ]
  }

  result.value = {
    score,
    level,
    description,
    sources,
    recommendations
  }
}

function getLevelClass(level) {
  if (level.includes('低')) return 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
  if (level.includes('中')) return 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300'
  if (level.includes('高')) return 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300'
  if (level.includes('极高')) return 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
  return 'bg-muted'
}

function getLevelIcon(level) {
  if (level.includes('低')) return CheckCircle
  if (level.includes('中')) return AlertTriangle
  if (level.includes('高')) return AlertTriangle
  if (level.includes('极高')) return AlertTriangle
  return AlertTriangle
}

useSeoMeta({
  title: '压力水平测试 - 在线压力评估与减压建议',
  description: '免费在线压力水平测试，基于PSS量表评估感知压力，识别压力来源，获得科学减压建议。', keywords: ['压力测试', '压力水平', 'PSS量表', '感知压力', '减压', '压力管理', '心理健康', '在线测试']})

import { useSEO } from '~/composables/useSEO'
const { setPageTitle } = useSEO()
setPageTitle('压力水平测试')
</script>
