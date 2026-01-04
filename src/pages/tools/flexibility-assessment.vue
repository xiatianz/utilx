<template>
  <div class="max-w-6xl mx-auto">
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">柔韧性评估测试</h1>
      <p class="text-muted-foreground">测试身体各部位的柔韧性水平，预防运动损伤，改善体态和关节活动度</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧：测试项目 -->
      <div class="space-y-4">
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Accessibility class="w-5 h-5 text-primary" />
            柔韧性测试项目
          </h2>

          <div class="space-y-4">
            <!-- 坐位体前屈 -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-medium">坐位体前屈</h3>
                <span class="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">腰部/腿后侧</span>
              </div>
              <p class="text-sm text-muted-foreground mb-3">测试腰椎和腿后侧柔韧性</p>
              <div class="flex gap-2 mb-2">
                <button
                  v-for="score in [1, 2, 3, 4, 5]"
                  :key="score"
                  @click="flexTests.sitReach = score"
                  :class="['flex-1 py-2 rounded text-sm', flexTests.sitReach === score ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80']"
                >
                  {{ score }}分
                </button>
              </div>
              <div class="text-xs text-muted-foreground">
                1分: 手触膝盖 | 3分: 手触小腿中 | 5分: 手掌着地
              </div>
            </div>

            <!-- 肩部柔韧 -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-medium">肩部柔韧性</h3>
                <span class="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">肩部</span>
              </div>
              <p class="text-sm text-muted-foreground mb-3">测试肩关节活动范围</p>
              <div class="flex gap-2 mb-2">
                <button
                  v-for="score in [1, 2, 3, 4, 5]"
                  :key="score"
                  @click="flexTests.shoulder = score"
                  :class="['flex-1 py-2 rounded text-sm', flexTests.shoulder === score ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80']"
                >
                  {{ score }}分
                </button>
              </div>
              <div class="text-xs text-muted-foreground">
                双手握绳举过头顶，1分: 肘弯曲 | 3分: 肘微屈 | 5分: 肘伸直
              </div>
            </div>

            <!-- 髋关节柔韧 -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-medium">髋关节活动度</h3>
                <span class="text-xs px-2 py-1 rounded bg-green-100 text-green-700">髋部</span>
              </div>
              <p class="text-sm text-muted-foreground mb-3">测试髋关节屈曲和外展能力</p>
              <div class="flex gap-2 mb-2">
                <button
                  v-for="score in [1, 2, 3, 4, 5]"
                  :key="score"
                  @click="flexTests.hip = score"
                  :class="['flex-1 py-2 rounded text-sm', flexTests.hip === score ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80']"
                >
                  {{ score }}分
                </button>
              </div>
              <div class="text-xs text-muted-foreground">
                1分: &lt;90度 | 3分: 90-120度 | 5分: &gt;120度
              </div>
            </div>

            <!-- 股后侧柔韧 -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-medium">腿后侧柔韧</h3>
                <span class="text-xs px-2 py-1 rounded bg-orange-100 text-orange-700">腘绳肌</span>
              </div>
              <p class="text-sm text-muted-foreground mb-3">测试腘绳肌柔韧性</p>
              <div class="flex gap-2 mb-2">
                <button
                  v-for="score in [1, 2, 3, 4, 5]"
                  :key="score"
                  @click="flexTests.hamstring = score"
                  :class="['flex-1 py-2 rounded text-sm', flexTests.hamstring === score ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80']"
                >
                  {{ score }}分
                </button>
              </div>
              <div class="text-xs text-muted-foreground">
                直腿抬高，1分: &lt;30度 | 3分: 30-60度 | 5分: &gt;60度
              </div>
            </div>

            <!-- 小腿柔韧 -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-medium">小腿柔韧</h3>
                <span class="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-700">小腿三头肌</span>
              </div>
              <p class="text-sm text-muted-foreground mb-3">测试小腿肌肉柔韧性</p>
              <div class="flex gap-2 mb-2">
                <button
                  v-for="score in [1, 2, 3, 4, 5]"
                  :key="score"
                  @click="flexTests.calf = score"
                  :class="['flex-1 py-2 rounded text-sm', flexTests.calf === score ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80']"
                >
                  {{ score }}分
                </button>
              </div>
              <div class="text-xs text-muted-foreground">
                靠墙蹲，1分: 无法蹲 | 3分: 需脚跟垫高 | 5分: 全蹲脚跟着地
              </div>
            </div>

            <!-- 脊柱灵活性 -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-medium">脊柱灵活性</h3>
                <span class="text-xs px-2 py-1 rounded bg-red-100 text-red-700">脊柱</span>
              </div>
              <p class="text-sm text-muted-foreground mb-3">测试脊柱前后弯曲能力</p>
              <div class="flex gap-2 mb-2">
                <button
                  v-for="score in [1, 2, 3, 4, 5]"
                  :key="score"
                  @click="flexTests.spine = score"
                  :class="['flex-1 py-2 rounded text-sm', flexTests.spine === score ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80']"
                >
                  {{ score }}分
                </button>
              </div>
              <div class="text-xs text-muted-foreground">
                1分: 明显受限 | 3分: 轻度受限 | 5分: 活动自如
              </div>
            </div>

            <!-- 评估按钮 -->
            <button
              @click="assessFlexibility"
              class="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 text-sm"
            >
              <CheckCircle class="w-4 h-4 inline mr-2" />
              评估柔韧性
            </button>
          </div>
        </div>

        <!-- 评估结果 -->
        <div v-if="assessmentResult" class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <FileCheck class="w-5 h-5 text-green-500" />
            评估结果
          </h2>

          <div class="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 border-2 border-primary/20 mb-4">
            <div class="text-center">
              <p class="text-sm text-muted-foreground mb-2">总体柔韧性评分</p>
              <p class="text-4xl font-bold text-primary">{{ assessmentResult.totalScore }}/30</p>
              <p class="text-sm mt-2" :class="getScoreColor(assessmentResult.totalScore)">{{ assessmentResult.level }}</p>
            </div>
          </div>

          <!-- 分项得分 -->
          <div class="space-y-2">
            <div
              v-for="item in assessmentResult.details"
              :key="item.name"
              class="flex items-center justify-between p-2 bg-muted rounded text-sm"
            >
              <span>{{ item.name }}</span>
              <span class="font-medium">{{ item.score }}/5</span>
            </div>
          </div>

          <!-- 建议 -->
          <div v-if="assessmentResult.advice" class="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p class="font-medium text-sm mb-2">改善建议</p>
            <ul class="space-y-1 text-sm">
              <li v-for="(tip, index) in assessmentResult.advice" :key="index" class="flex items-start gap-2">
                <ChevronRight class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{{ tip }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 右侧：拉伸教程 -->
      <div class="space-y-4">
        <!-- 拉伸动作 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">基础拉伸动作</h2>

          <div class="space-y-4">
            <div class="p-3 bg-muted rounded">
              <p class="font-medium text-sm mb-2">腿后侧拉伸</p>
              <div class="text-xs text-muted-foreground space-y-1">
                <p>1. 坐在地上，一腿伸直</p>
                <p>2. 另一腿弯曲，脚底贴大腿内侧</p>
                <p>3. 向前屈体，手尽量触脚尖</p>
                <p>4. 保持20-30秒，每侧2-3组</p>
              </div>
            </div>

            <div class="p-3 bg-muted rounded">
              <p class="font-medium text-sm mb-2">髋屈肌拉伸</p>
              <div class="text-xs text-muted-foreground space-y-1">
                <p>1. 单膝跪地，另一脚向前跨步</p>
                <p>2. 髋部向前推，直到感觉拉伸</p>
                <p>3. 保持20-30秒，每侧2-3组</p>
                <p>4. 注意前膝不要超过脚尖</p>
              </div>
            </div>

            <div class="p-3 bg-muted rounded">
              <p class="font-medium text-sm mb-2">肩部拉伸</p>
              <div class="text-xs text-muted-foreground space-y-1">
                <p>1. 手臂横过胸前</p>
                <p>2. 另一只手轻拉肘部</p>
                <p>3. 保持20-30秒，每侧2-3组</p>
              </div>
            </div>

            <div class="p-3 bg-muted rounded">
              <p class="font-medium text-sm mb-2">小腿拉伸</p>
              <div class="text-xs text-muted-foreground space-y-1">
                <p>1. 双手扶墙，一腿向后</p>
                <p>2. 脚跟贴地，膝盖伸直</p>
                <p>3. 身体前倾直到感觉拉伸</p>
                <p>4. 保持20-30秒，每侧2-3组</p>
              </div>
            </div>

            <div class="p-3 bg-muted rounded">
              <p class="font-medium text-sm mb-2">脊柱旋转拉伸</p>
              <div class="text-xs text-muted-foreground space-y-1">
                <p>1. 坐直，双腿交叉</p>
                <p>2. 向转体方向慢慢转动</p>
                <p>3. 利用惯性进一步转动</p>
                <p>4. 保持10-15秒，每侧2-3组</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 测试注意事项 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">测试注意事项</h2>

          <div class="space-y-2 text-sm text-muted-foreground">
            <div class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p>充分热身后再进行测试</p>
            </div>
            <div class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p>动作要缓慢，避免弹震</p>
            </div>
            <div class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p>感到疼痛立即停止</p>
            </div>
            <div class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p>在无伤痛的前提下进行测试</p>
            </div>
            <div class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p>记录分数以便追踪进步</p>
            </div>
          </div>
        </div>

        <!-- 柔韧性等级标准 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4">柔韧性等级标准</h2>

          <div class="space-y-2 text-sm">
            <div class="p-2 bg-red-50 dark:bg-red-900/20 rounded">
              <div class="flex items-center justify-between">
                <span class="font-medium">6-10分</span>
                <span class="text-red-600">较差</span>
              </div>
              <p class="text-xs text-muted-foreground mt-1">需要重点改善，建议每天拉伸</p>
            </div>
            <div class="p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
              <div class="flex items-center justify-between">
                <span class="font-medium">11-18分</span>
                <span class="text-orange-600">一般</span>
              </div>
              <p class="text-xs text-muted-foreground mt-1">有改善空间，建议每周3-4次拉伸</p>
            </div>
            <div class="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <div class="flex items-center justify-between">
                <span class="font-medium">19-24分</span>
                <span class="text-yellow-600">良好</span>
              </div>
              <p class="text-xs text-muted-foreground mt-1">柔韧性不错，继续保持</p>
            </div>
            <div class="p-2 bg-green-50 dark:bg-green-900/20 rounded">
              <div class="flex items-center justify-between">
                <span class="font-medium">25-30分</span>
                <span class="text-green-600">优秀</span>
              </div>
              <p class="text-xs text-muted-foreground mt-1">柔韧性非常好，保持现状</p>
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
import {
  Accessibility,
  CheckCircle,
  FileCheck,
  ChevronRight,
  BookOpen
} from 'lucide-vue-next'

const flexTests = ref({
  sitReach: null,
  shoulder: null,
  hip: null,
  hamstring: null,
  calf: null,
  spine: null
})

const assessmentResult = ref(null)

function assessFlexibility() {
  const tests = flexTests.value
  let total = 0
  let count = 0
  const details = []

  if (tests.sitReach) {
    total += tests.sitReach
    count++
    details.push({ name: '坐位体前屈', score: tests.sitReach })
  }
  if (tests.shoulder) {
    total += tests.shoulder
    count++
    details.push({ name: '肩部柔韧', score: tests.shoulder })
  }
  if (tests.hip) {
    total += tests.hip
    count++
    details.push({ name: '髋关节', score: tests.hip })
  }
  if (tests.hamstring) {
    total += tests.hamstring
    count++
    details.push({ name: '腿后侧', score: tests.hamstring })
  }
  if (tests.calf) {
    total += tests.calf
    count++
    details.push({ name: '小腿', score: tests.calf })
  }
  if (tests.spine) {
    total += tests.spine
    count++
    details.push({ name: '脊柱', score: tests.spine })
  }

  if (count === 0) {
    alert('请至少完成一项测试')
    return
  }

  const avgScore = total / count
  const totalScore = total

  let level, advice = []

  if (totalScore <= 10) {
    level = '柔韧性较差'
    advice = [
      '每天进行拉伸训练，重点加强薄弱部位',
      '每次拉伸前充分热身5-10分钟',
      '每个部位保持20-30秒，做2-3组',
      '可以参加瑜伽或普拉提课程改善整体柔韧性'
    ]
  } else if (totalScore <= 18) {
    level = '柔韧性一般'
    advice = [
      '每周至少3-4次拉伸训练',
      '针对得分较低的部位加强练习',
      '训练后进行专门拉伸，提高恢复质量',
      '可以考虑动态拉伸结合静态拉伸'
    ]
  } else if (totalScore <= 24) {
    level = '柔韧性良好'
    advice = [
      '继续保持当前的拉伸习惯',
      '可以在薄弱部位适当加强',
      '结合泡沫轴进行筋膜放松',
      '定期测试以追踪进步'
    ]
  } else {
    level = '柔韧性优秀'
    advice = [
      '保持当前的柔韧性水平',
      '可以尝试进阶拉伸动作',
      '柔韧性训练可以帮助预防运动损伤',
      '注意不要过度拉伸，保持平衡'
    ]
  }

  assessmentResult.value = {
    totalScore,
    level,
    details,
    advice
  }
}

function getScoreColor(score) {
  if (score <= 10) return 'text-red-600'
  if (score <= 18) return 'text-orange-600'
  if (score <= 24) return 'text-yellow-600'
  return 'text-green-600'
}

useSeoMeta({
  title: '柔韧性评估测试 - 在线身体柔韧性检测工具',
  description: '免费在线柔韧性评估测试，包括坐位体前屈、肩部、髋关节等部位测试，提供科学的拉伸改善建议。',
  keywords: ['柔韧性', '身体柔韧性', '拉伸测试', '坐位体前屈', '关节活动度', '体态评估', '在线测试']
})

import { useSEO } from '~/composables/useSEO'
const { setPageTitle } = useSEO()
setPageTitle('柔韧性评估测试')
</script>
