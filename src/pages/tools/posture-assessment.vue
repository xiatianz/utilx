<template>
  <div class="max-w-6xl mx-auto">
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">体态评估</h1>
      <p class="text-muted-foreground">自测体态问题，识别圆肩驼背、骨盆前倾等不良体态，获得矫正建议</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧：评估项目 -->
      <div class="space-y-4">
        <!-- 头部评估 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Accessibility class="w-5 h-5 text-primary" />
            头部位置
          </h2>

          <div class="space-y-4">
            <div>
              <label class="text-sm font-medium mb-2 block">头部是否前倾？（手机脖）</label>
              <div class="flex gap-2">
                <button @click="posture.headForward = 0" :class="['flex-1 py-2 rounded text-sm', posture.headForward === 0 ? 'bg-green-100 text-green-700' : 'bg-muted hover:bg-muted/80']">正常</button>
                <button @click="posture.headForward = 1" :class="['flex-1 py-2 rounded text-sm', posture.headForward === 1 ? 'bg-yellow-100 text-yellow-700' : 'bg-muted hover:bg-muted/80']">轻度</button>
                <button @click="posture.headForward = 2" :class="['flex-1 py-2 rounded text-sm', posture.headForward === 2 ? 'bg-red-100 text-red-700' : 'bg-muted hover:bg-muted/80']">明显</button>
              </div>
            </div>

            <div>
              <label class="text-sm font-medium mb-2 block">头部是否左右倾斜？</label>
              <div class="flex gap-2">
                <button @click="posture.headTilt = false" :class="['flex-1 py-2 rounded text-sm', !posture.headTilt ? 'bg-green-100 text-green-700' : 'bg-muted hover:bg-muted/80']">正常</button>
                <button @click="posture.headTilt = true" :class="['flex-1 py-2 rounded text-sm', posture.headTilt ? 'bg-red-100 text-red-700' : 'bg-muted hover:bg-muted/80']">有倾斜</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 肩膀评估 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">肩膀位置</h2>

          <div class="space-y-4">
            <div>
              <label class="text-sm font-medium mb-2 block">是否有圆肩（含胸）？</label>
              <div class="flex gap-2">
                <button @click="posture.roundedShoulders = 0" :class="['flex-1 py-2 rounded text-sm', posture.roundedShoulders === 0 ? 'bg-green-100 text-green-700' : 'bg-muted hover:bg-muted/80']">正常</button>
                <button @click="posture.roundedShoulders = 1" :class="['flex-1 py-2 rounded text-sm', posture.roundedShoulders === 1 ? 'bg-yellow-100 text-yellow-700' : 'bg-muted hover:bg-muted/80']">轻度</button>
                <button @click="posture.roundedShoulders = 2" :class="['flex-1 py-2 rounded text-sm', posture.roundedShoulders === 2 ? 'bg-red-100 text-red-700' : 'bg-muted hover:bg-muted/80']">明显</button>
              </div>
            </div>

            <div>
              <label class="text-sm font-medium mb-2 block">两肩是否水平？</label>
              <div class="flex gap-2">
                <button @click="posture.shoulderImbalance = false" :class="['flex-1 py-2 rounded text-sm', !posture.shoulderImbalance ? 'bg-green-100 text-green-700' : 'bg-muted hover:bg-muted/80']">水平</button>
                <button @click="posture.shoulderImbalance = true" :class="['flex-1 py-2 rounded text-sm', posture.shoulderImbalance ? 'bg-red-100 text-red-700' : 'bg-muted hover:bg-muted/80']">不平衡</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 脊柱评估 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">脊柱曲线</h2>

          <div class="space-y-4">
            <div>
              <label class="text-sm font-medium mb-2 block">是否有驼背（胸椎后凸）？</label>
              <div class="flex gap-2">
                <button @click="posture.hunchback = 0" :class="['flex-1 py-2 rounded text-sm', posture.hunchback === 0 ? 'bg-green-100 text-green-700' : 'bg-muted hover:bg-muted/80']">正常</button>
                <button @click="posture.hunchback = 1" :class="['flex-1 py-2 rounded text-sm', posture.hunchback === 1 ? 'bg-yellow-100 text-yellow-700' : 'bg-muted hover:bg-muted/80']">轻度</button>
                <button @click="posture.hunchback = 2" :class="['flex-1 py-2 rounded text-sm', posture.hunchback === 2 ? 'bg-red-100 text-red-700' : 'bg-muted hover:bg-muted/80']">明显</button>
              </div>
            </div>

            <div>
              <label class="text-sm font-medium mb-2 block">腰椎是否过度前凸（腰凹）？</label>
              <div class="flex gap-2">
                <button @click="posture.lordosis = 0" :class="['flex-1 py-2 rounded text-sm', posture.lordosis === 0 ? 'bg-green-100 text-green-700' : 'bg-muted hover:bg-muted/80']">正常</button>
                <button @click="posture.lordosis = 1" :class="['flex-1 py-2 rounded text-sm', posture.lordosis === 1 ? 'bg-yellow-100 text-yellow-700' : 'bg-muted hover:bg-muted/80']">过度</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 骨盆评估 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">骨盆位置</h2>

          <div class="space-y-4">
            <div>
              <label class="text-sm font-medium mb-2 block">骨盆是否前倾？</label>
              <div class="flex gap-2">
                <button @click="posture.anteriorPelvic = 0" :class="['flex-1 py-2 rounded text-sm', posture.anteriorPelvic === 0 ? 'bg-green-100 text-green-700' : 'bg-muted hover:bg-muted/80']">正常</button>
                <button @click="posture.anteriorPelvic = 1" :class="['flex-1 py-2 rounded text-sm', posture.anteriorPelvic === 1 ? 'bg-yellow-100 text-yellow-700' : 'bg-muted hover:bg/80']">轻度</button>
                <button @click="posture.anteriorPelvic = 2" :class="['flex-1 py-2 rounded text-sm', posture.anteriorPelvic === 2 ? 'bg-red-100 text-red-700' : 'bg-muted hover:bg-muted/80']">明显</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 腿部评估 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">腿部排列</h2>

          <div class="space-y-4">
            <div>
              <label class="text-sm font-medium mb-2 block">是否有X型腿或O型腿？</label>
              <div class="flex gap-2">
                <button @click="posture.knees = 'normal'" :class="['flex-1 py-2 rounded text-sm', posture.knees === 'normal' ? 'bg-green-100 text-green-700' : 'bg-muted hover:bg-muted/80']">正常</button>
                <button @click="posture.knees = 'knock'" :class="['flex-1 py-2 rounded text-sm', posture.knees === 'knock' ? 'bg-yellow-100 text-yellow-700' : 'bg-muted hover:bg-muted/80']">X型腿</button>
                <button @click="posture.knees = 'bow'" :class="['flex-1 py-2 rounded text-sm', posture.knees === 'bow' ? 'bg-yellow-100 text-yellow-700' : 'bg-muted hover:bg-muted/80']">O型腿</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 评估按钮 -->
        <button
          @click="assessPosture"
          class="w-full px-4 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 text-lg font-medium"
        >
          <Activity class="w-5 h-5 inline mr-2" />
          评估体态
        </button>
      </div>

      <!-- 右侧：结果和建议 -->
      <div class="space-y-4">
        <!-- 评估结果 -->
        <div v-if="result" class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <FileCheck class="w-5 h-5 text-green-500" />
            评估结果
          </h2>

          <div class="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 border-2 border-primary/20 mb-4">
            <div class="text-center">
              <p class="text-sm text-muted-foreground mb-1">总体体态评分</p>
              <p class="text-4xl font-bold text-primary">{{ result.totalScore }}/100</p>
              <p class="text-sm mt-2" :class="getScoreColor(result.totalScore)">{{ result.grade }}</p>
            </div>
          </div>

          <!-- 问题列表 -->
          <div v-if="result.issues.length > 0" class="space-y-2 mb-4">
            <p class="text-sm font-medium">发现的体态问题：</p>
            <div v-for="(issue, index) in result.issues" :key="index" class="p-2 bg-orange-50 dark:bg-orange-900/20 rounded text-sm">
              {{ issue }}
            </div>
          </div>

          <div v-else class="p-4 bg-green-50 dark:bg-green-900/20 rounded text-sm mb-4">
            <p class="font-medium text-green-700">恭喜！您的体态良好</p>
            <p class="text-muted-foreground">请继续保持正确的姿势和良好的生活习惯</p>
          </div>
        </div>

        <!-- 矫正练习 -->
        <div v-if="result && result.exercises.length > 0" class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">推荐矫正练习</h2>

          <div class="space-y-3 text-sm">
            <div v-for="(exercise, index) in result.exercises" :key="index" class="p-3 bg-muted rounded">
              <p class="font-medium mb-1">{{ exercise.name }}</p>
              <p class="text-xs text-muted-foreground">{{ exercise.description }}</p>
            </div>
          </div>
        </div>

        <!-- 日常建议 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">改善体态的建议</h2>

          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <Monitor class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">使用电脑时</p>
                <p class="text-muted-foreground">屏幕顶部与眼睛齐平，保持30-50cm距离</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Smartphone class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">使用手机时</p>
                <p class="text-muted-foreground">将手机举高到视线水平，避免长时间低头</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Moon class="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">睡觉姿势</p>
                <p class="text-muted-foreground">仰睡时在膝盖下放枕头，侧睡时在两腿之间放枕头</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Dumbbell class="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">加强核心肌群</p>
                <p class="text-muted-foreground">平板支撑、臀桥等练习可改善体态</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Clock class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">定时活动</p>
                <p class="text-muted-foreground">每30-60分钟起身活动，伸展身体</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 体态问题说明 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">常见体态问题</h2>

          <div class="space-y-3 text-sm">
            <div class="p-3 bg-red-50 dark:bg-red-900/20 rounded">
              <p class="font-medium text-sm mb-1">科技脖 (Tech Neck)</p>
              <p class="text-muted-foreground">头部前倾增加颈椎压力，导致颈肩痛、头痛</p>
            </div>

            <div class="p-3 bg-orange-50 dark:bg-orange-900/20 rounded">
              <p class="font-medium text-sm mb-1">圆肩驼背</p>
              <p class="text-muted-foreground">胸肌紧张、背部无力，影响呼吸和外观</p>
            </div>

            <div class="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <p class="font-medium text-sm mb-1">骨盆前倾</p>
              <p class="text-muted-foreground">腰椎过度前凸，导致下腰痛和腿型问题</p>
            </div>

            <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p class="font-medium text-sm mb-1">高低肩</p>
              <p class="text-muted-foreground">可能因单侧背包、习惯性姿势导致肌肉不平衡</p>
            </div>
          </div>
        </div>

        <!-- 何时需要专业人士 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">何时寻求专业帮助</h2>

          <div class="space-y-2 text-sm text-muted-foreground">
            <div class="flex items-start gap-2">
              <AlertTriangle class="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <p>体态问题引起持续疼痛或不适</p>
            </div>
            <div class="flex items-start gap-2">
              <AlertTriangle class="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <p>影响日常生活、工作或运动表现</p>
            </div>
            <div class="flex items-start gap-2">
              <AlertTriangle class="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <p>自行矫正练习2-4周后无明显改善</p>
            </div>
            <div class="flex items-start gap-2">
              <AlertTriangle class="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <p>出现麻木、无力等神经症状</p>
            </div>
          </div>

          <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">
            <p class="font-medium mb-1">建议咨询</p>
            <p class="text-muted-foreground">物理治疗师、脊椎按摩师、骨科医生或体态矫正专家</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSeoMeta } from '#app'
import {
  Accessibility,
  Activity,
  FileCheck,
  Monitor,
  Smartphone,
  Moon,
  Dumbbell,
  Clock,
  AlertTriangle
} from 'lucide-vue-next'

const posture = ref({
  headForward: 0,
  headTilt: false,
  roundedShoulders: 0,
  shoulderImbalance: false,
  hunchback: 0,
  lordosis: 0,
  anteriorPelvic: 0,
  knees: 'normal'
})

const result = ref(null)

function assessPosture() {
  const issues = []
  const exercises = []
  let scoreDeduction = 0

  // 头部前倾
  if (posture.value.headForward === 1) {
    issues.push('轻度头部前倾（科技脖）')
    exercises.push({ name: '颈部拉伸', description: '轻柔地将头向左右两侧倾斜，保持15-20秒' })
    scoreDeduction += 10
  } else if (posture.value.headForward === 2) {
    issues.push('明显头部前倾（科技脖）')
    exercises.push({ name: '靠墙天使', description: '靠墙站立，手臂贴墙上下滑动，10-15次' })
    exercises.push({ name: '收下巴运动', description: '水平向后收下巴，保持5秒，重复10次' })
    scoreDeduction += 20
  }

  // 头部倾斜
  if (posture.value.headTilt) {
    issues.push('头部左右倾斜')
    exercises.push({ name: '颈部侧拉伸', description: '向对侧轻拉头部，拉伸斜方肌' })
    scoreDeduction += 10
  }

  // 圆肩
  if (posture.value.roundedShoulders === 1) {
    issues.push('轻度圆肩')
    exercises.push({ name: '胸肌拉伸', description: '在门框处拉伸胸部肌肉，每侧30秒' })
    exercises.push({ name: '肩胛骨缩回', description: '双手向后拉伸弹力带，15-20次' })
    scoreDeduction += 10
  } else if (posture.value.roundedShoulders === 2) {
    issues.push('明显圆肩')
    exercises.push({ name: '墙面滑动', description: '靠墙滑动手臂，改善圆肩' })
    exercises.push({ name: '泡沫轴胸椎伸展', description: '用泡沫轴打开胸廓' })
    scoreDeduction += 20
  }

  // 肩膀不平衡
  if (posture.value.shoulderImbalance) {
    issues.push('肩膀高低不平')
    exercises.push({ name: '单侧拉伸', description: '拉伸较高一侧的肩部和颈部肌肉' })
    scoreDeduction += 10
  }

  // 驼背
  if (posture.value.hunchback === 1) {
    issues.push('轻度驼背')
    exercises.push({ name: '胸椎伸展', description: '使用泡沫轴或瑜伽球伸展胸椎' })
    scoreDeduction += 10
  } else if (posture.value.hunchback === 2) {
    issues.push('明显驼背')
    exercises.push({ name: '猫牛式', description: '瑜伽动作，灵活脊柱' })
    exercises.push({ name: '超人式', description: '俯卧伸展，强化背部肌肉' })
    scoreDeduction += 20
  }

  // 腰椎前凸
  if (posture.value.lordosis === 1) {
    issues.push('腰椎过度前凸')
    exercises.push({ name: '髂腰肌拉伸', description: '单膝跪地拉伸髋部屈肌' })
    exercises.push({ name: '臀桥', description: '仰卧臀部抬起，强化臀肌' })
    scoreDeduction += 10
  }

  // 骨盆前倾
  if (posture.value.anteriorPelvic === 1) {
    issues.push('轻度骨盆前倾')
    exercises.push({ name: '腹式呼吸', description: '强化深层腹肌' })
    scoreDeduction += 10
  } else if (posture.value.anteriorPelvic === 2) {
    issues.push('明显骨盆前倾')
    exercises.push({ name: '平板支撑', description: '强化核心稳定性' })
    exercises.push({ name: '死虫式', description: '仰卧核心训练' })
    scoreDeduction += 20
  }

  // 腿型问题
  if (posture.value.knees === 'knock') {
    issues.push('X型腿')
    exercises.push({ name: '臀部外展训练', description: '强化臀中肌，如贝壳式' })
    exercises.push({ name: '泡沫轴放松大腿外侧', description: '放松紧张的髂胫束' })
    scoreDeduction += 10
  } else if (posture.value.knees === 'bow') {
    issues.push('O型腿')
    exercises.push({ name: '大腿内侧训练', description: '强化内收肌群' })
    exercises.push({ name: '泡沫轴放松大腿内侧', description: '放松紧张的肌肉' })
    scoreDeduction += 10
  }

  // 计算总分和等级
  const totalScore = Math.max(0, 100 - scoreDeduction)

  let grade
  if (totalScore >= 90) grade = '优秀'
  else if (totalScore >= 75) grade = '良好'
  else if (totalScore >= 60) grade = '一般'
  else if (totalScore >= 40) grade = '较差'
  else grade = '差'

  result.value = {
    totalScore,
    grade,
    issues,
    exercises
  }
}

function getScoreColor(score) {
  if (score >= 90) return 'text-green-600'
  if (score >= 75) return 'text-blue-600'
  if (score >= 60) return 'text-yellow-600'
  if (score >= 40) return 'text-orange-600'
  return 'text-red-600'
}

useSeoMeta({
  title: '体态评估 - 在线不良体态检测与矫正建议',
  description: '免费在线体态评估工具，自测圆肩驼背、骨盆前倾、科技脖等不良体态问题，获得科学矫正练习建议。', keywords: ['体态评估', '不良体态', '圆肩', '驼背', '骨盆前倾', '科技脖', '体态矫正', '姿势检测']})

import { useSEO } from '~/composables/useSEO'
const { setPageTitle } = useSEO()
setPageTitle('体态评估')
</script>
