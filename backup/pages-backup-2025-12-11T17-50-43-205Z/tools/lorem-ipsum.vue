<template>
  <div class="max-w-8xl mx-auto">
    <!-- 面包屑导航 -->
    <!-- <Breadcrumb :category="category" /> -->

    <!-- 工具标题 -->
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">随机文本生成器</h1>
      <p class="text-muted-foreground">生成 Lorem Ipsum 和其他类型的占位文本</p>
    </div>

    <!-- 主要功能区域 -->
    <div class="space-y-6">
      <!-- 配置选项 -->
      <div class="bg-card border border-border  rounded-lg p-6">
        <h2 class="text-lg font-semibold mb-4">生成配置</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- 文本类型 -->
          <div>
            <label class="text-sm font-medium mb-2 block">文本类型</label>
            <select v-model="textType" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="lorem">Lorem Ipsum（经典）</option>
              <option value="chinese">中文占位文本</option>
              <option value="tech">技术术语占位</option>
              <option value="hipster">Hipster Ipsum</option>
              <option value="bacon">Bacon Ipsum</option>
              <option value="business">商务术语占位</option>
            </select>
          </div>

          <!-- 生成数量 -->
          <div>
            <label class="text-sm font-medium mb-2 block">生成数量</label>
            <div class="flex gap-2">
              <input
                v-model.number="amount"
                type="number"
                min="1"
                max="1000"
                class="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select v-model="unit" class="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="words">单词</option>
                <option value="sentences">句子</option>
                <option value="paragraphs">段落</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 高级选项 -->
        <div class="mt-6 space-y-4">
          <div>
            <label class="text-sm font-medium mb-2 block">起始文本</label>
            <input
              v-model="startWith"
              type="text"
              placeholder="可选：指定起始文本"
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div class="flex items-center gap-4">
            <label class="flex items-center">
              <input
                type="checkbox"
                v-model="options.capitalize"
                class="mr-2"
              />
              <span class="text-sm">首字母大写</span>
            </label>
            <label class="flex items-center">
              <input
                type="checkbox"
                v-model="options.html"
                class="mr-2"
              />
              <span class="text-sm">包含 HTML 标签</span>
            </label>
            <label class="flex items-center">
              <input
                type="checkbox"
                v-model="options.markdown"
                class="mr-2"
              />
              <span class="text-sm">包含 Markdown 格式</span>
            </label>
          </div>
        </div>

        <!-- 快捷按钮 -->
        <div class="mt-6 flex flex-wrap gap-2">
          <button
            @click="setQuickAmount(5, 'words')"
            class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"
          >
            5 个单词
          </button>
          <button
            @click="setQuickAmount(25, 'words')"
            class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"
          >
            25 个单词
          </button>
          <button
            @click="setQuickAmount(50, 'words')"
            class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"
          >
            50 个单词
          </button>
          <button
            @click="setQuickAmount(1, 'paragraphs')"
            class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"
          >
            1 个段落
          </button>
          <button
            @click="setQuickAmount(3, 'paragraphs')"
            class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"
          >
            3 个段落
          </button>
          <button
            @click="setQuickAmount(5, 'paragraphs')"
            class="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded transition-colors"
          >
            5 个段落
          </button>
        </div>
      </div>

      <!-- 生成按钮 -->
      <div class="flex justify-center">
        <button
          @click="generateText"
          class="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <Sparkles class="w-5 h-5" />
          生成文本
        </button>
      </div>

      <!-- 输出区域 -->
      <div v-if="generatedText" class="bg-card border border-border  rounded-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold">生成结果</h2>
          <div class="flex gap-2">
            <button
              @click="copyText"
              class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {{ copied ? '已复制' : '复制' }}
            </button>
            <button
              @click="downloadText"
              class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              下载
            </button>
            <button
              @click="clearResult"
              class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              清空
            </button>
          </div>
        </div>

        <div class="relative">
          <div
            v-if="options.html"
            v-html="generatedText"
            class="prose prose-sm max-w-none dark:prose-invert"
          ></div>
          <div
            v-else-if="options.markdown"
            v-html="renderMarkdown"
            class="prose prose-sm max-w-none dark:prose-invert"
          ></div>
          <pre v-else class="whitespace-pre-wrap text-sm">{{ generatedText }}</pre>

          <!-- 统计信息 -->
          <div class="absolute top-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded">
            {{ getWordCount(generatedText) }} 个词 · {{ generatedText.length }} 个字符
          </div>
        </div>
      </div>

      <!-- 文本示例 -->
      <div class="bg-card border border-border  rounded-lg p-6">
        <h2 class="text-lg font-semibold mb-4">文本类型预览</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="type in textTypes"
            :key="type.value"
            :class="[
              'p-4 border rounded-lg cursor-pointer transition-all',
              textType === type.value ? 'border-primary bg-primary/5' : 'hover:bg-muted'
            ]"
            @click="textType = type.value"
          >
            <h3 class="font-medium mb-2">{{ type.name }}</h3>
            <p class="text-sm text-muted-foreground">{{ type.description }}</p>
          </div>
        </div>
      </div>

      <!-- 使用说明 -->
      <div class="bg-card border border-border  rounded-lg p-6">
        <h2 class="text-lg font-semibold mb-4">使用说明</h2>

        <div class="space-y-4 text-sm">
          <div>
            <h3 class="font-medium mb-2">什么是 Lorem Ipsum？</h3>
            <p class="text-muted-foreground">
              Lorem Ipsum 是印刷及排版行业的标准占位文本。自 16 世纪以来，它一直被用作标准的虚拟文本，
              当时一位不知名的印刷商拿了一盘字体并将其搅乱以制作字体样本书。它不仅存活了五个世纪，
              而且还跃入了电子排版，基本上保持不变。
            </p>
          </div>

          <div>
            <h3 class="font-medium mb-2">为什么使用它？</h3>
            <p class="text-muted-foreground">
              很久以来就知道，当查看页面布局时，读者会被页面的可读内容分散注意力。
              使用 Lorem Ipsum 的要点是它具有或多或少正常的字母分布，而不是使用"此处内容，此处内容"，
              使其看起来像可读的英语。
            </p>
          </div>

          <div>
            <h3 class="font-medium mb-2">常见用途</h3>
            <ul class="list-disc list-inside text-muted-foreground space-y-1">
              <li>网站和应用的 UI 设计原型</li>
              <li>印刷品和杂志的版面设计</li>
              <li>测试文本渲染和布局</li>
              <li>演示文稿和文档模板</li>
              <li>开发过程中的占位内容</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 相关工具 -->
      <div class="bg-card border border-border  rounded-lg p-6">
        <h3 class="text-lg font-semibold mb-4">相关工具</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <NuxtLink
            to="/tools/text/text-counter"
            class="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
          >
            <FileText class="w-5 h-5 text-primary" />
            <div>
              <p class="font-medium group-hover:text-primary">字数统计</p>
              <p class="text-xs text-muted-foreground">统计文本信息</p>
            </div>
            <ArrowRight class="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" />
          </NuxtLink>
          <NuxtLink
            to="/tools/text/markdown-editor"
            class="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
          >
            <FileText class="w-5 h-5 text-primary" />
            <div>
              <p class="font-medium group-hover:text-primary">Markdown编辑器</p>
              <p class="text-xs text-muted-foreground">实时预览编辑</p>
            </div>
            <ArrowRight class="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" />
          </NuxtLink>
          <NuxtLink
            to="/tools/crypto/password-generator"
            class="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
          >
            <Lock class="w-5 h-5 text-primary" />
            <div>
              <p class="font-medium group-hover:text-primary">密码生成器</p>
              <p class="text-xs text-muted-foreground">生成安全密码</p>
            </div>
            <ArrowRight class="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Sparkles, FileText, Lock, ArrowRight } from 'lucide-vue-next'
import { marked } from 'marked'
import Breadcrumb from '~/components/Breadcrumb.vue'

// 分类信息
const category = { id: 'text', name: '文本处理', description: '文本处理工具集合' }

// 状态管理
const textType = ref('lorem')
const amount = ref(50)
const unit = ref('words')
const startWith = ref('')
const generatedText = ref('')
const copied = ref(false)

// 选项
const options = ref({
  capitalize: false,
  html: false,
  markdown: false
})

// 文本类型数据
const textTypes = [
  {
    value: 'lorem',
    name: 'Lorem Ipsum',
    description: '经典的拉丁文占位文本，广泛用于印刷和设计行业'
  },
  {
    value: 'chinese',
    name: '中文占位文本',
    description: '使用中文汉字生成的占位文本'
  },
  {
    value: 'tech',
    name: '技术术语',
    description: '包含编程和技术术语的占位文本'
  },
  {
    value: 'hipster',
    name: 'Hipster Ipsum',
    description: '包含潮流文化术语的占位文本'
  },
  {
    value: 'bacon',
    name: 'Bacon Ipsum',
    description: '包含食物和烹饪术语的占位文本'
  },
  {
    value: 'business',
    name: '商务术语',
    description: '包含商业和营销术语的占位文本'
  }
]

// 词库
const wordBank = {
  lorem: [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo'
  ],
  chinese: [
    '天地', '玄黄', '宇宙', '洪荒', '日月', '盈昃', '辰宿', '列张',
    '寒来', '暑往', '秋收', '冬藏', '闰余', '成岁', '律吕', '调阳',
    '云腾', '致雨', '露结', '为霜', '金生', '丽水', '玉出', '昆冈'
  ],
  tech: [
    'algorithm', 'database', 'framework', 'interface', 'component', 'module',
    'function', 'variable', 'constant', 'array', 'object', 'string',
    'integer', 'boolean', 'async', 'await', 'promise', 'callback'
  ],
  hipster: [
    'authentic', 'craft', 'artisan', 'bespoke', 'curated', 'aesthetic',
    'vintage', 'retro', 'minimal', 'sustainable', 'organic', 'local',
    'community', 'collaborative', 'creative', 'innovative', 'trendy'
  ],
  bacon: [
    'bacon', 'sausage', 'pork', 'ham', 'salami', 'pepperoni',
    'chorizo', 'prosciutto', 'pancetta', 'brisket', 'ribs', 'steak',
    'burger', 'meatball', 'grill', 'roast', 'smoke', 'barbecue'
  ],
  business: [
    'synergy', 'paradigm', 'leverage', 'empower', 'optimize', 'streamline',
    'engage', 'innovate', 'transform', 'strategic', 'initiative', 'framework',
    'ecosystem', 'platform', 'solution', 'value', 'proposition', 'customer'
  ]
}

// 计算 Markdown 渲染
const renderMarkdown = computed(() => {
  if (!generatedText.value || !options.value.markdown) return ''
  try {
    return marked.parse(generatedText.value)
  } catch (error) {
    return generatedText.value
  }
})

// 设置快捷数量
const setQuickAmount = (value, unitValue) => {
  amount.value = value
  unit.value = unitValue
}

// 生成随机单词
const getRandomWord = (type) => {
  const words = wordBank[type]
  return words[Math.floor(Math.random() * words.length)]
}

// 生成句子
const generateSentence = (wordCount, type) => {
  let sentence = []
  for (let i = 0; i < wordCount; i++) {
    let word = getRandomWord(type)
    if (options.value.capitalize && i === 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1)
    }
    sentence.push(word)
  }
  return sentence.join(' ') + '.'
}

// 生成段落
const generateParagraph = (sentenceCount, type) => {
  let paragraph = []
  for (let i = 0; i < sentenceCount; i++) {
    const wordCount = Math.floor(Math.random() * 10) + 5
    paragraph.push(generateSentence(wordCount, type))
  }
  return paragraph.join(' ')
}

// 格式化文本
const formatText = (text) => {
  if (options.value.html) {
    // 简单的 HTML 格式化
    const paragraphs = text.split('. ')
    text = paragraphs.map(p => `<p>${p}</p>`).join('')
  }

  if (options.value.markdown) {
    // 简单的 Markdown 格式化
    const paragraphs = text.split('. ')
    text = paragraphs.map((p, i) => {
      if (i === 0) return `## ${p}\n`
      return `${p}\n`
    }).join('')
  }

  return text
}

// 生成文本
const generateText = () => {
  let result = ''
  let words = wordBank[textType.value]

  // 添加起始文本
  if (startWith.value) {
    result = startWith.value + ' '
  }

  // 根据单位生成不同类型的内容
  switch (unit.value) {
    case 'words':
      for (let i = 0; i < amount.value; i++) {
        let word = getRandomWord(textType.value)
        if (options.value.capitalize && i === 0) {
          word = word.charAt(0).toUpperCase() + word.slice(1)
        }
        result += (i > 0 ? ' ' : '') + word
      }
      if (textType.value === 'lorem' || textType.value === 'chinese') {
        result += '.'
      }
      break

    case 'sentences':
      const sentences = amount.value
      for (let i = 0; i < sentences; i++) {
        const wordCount = Math.floor(Math.random() * 15) + 5
        result += (i > 0 ? ' ' : '') + generateSentence(wordCount, textType.value)
      }
      break

    case 'paragraphs':
      const paragraphs = amount.value
      for (let i = 0; i < paragraphs; i++) {
        const sentenceCount = Math.floor(Math.random() * 5) + 3
        result += (i > 0 ? '\n\n' : '') + generateParagraph(sentenceCount, textType.value)
      }
      break
  }

  // 应用格式化
  generatedText.value = formatText(result.trim())
}

// 获取词数
const getWordCount = (text) => {
  if (!text) return 0
  return text.trim().split(/\s+/).filter(word => word.length > 0).length
}

// 复制文本
const copyText = async () => {
  try {
    await navigator.clipboard.writeText(generatedText.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (error) {
    // 降级方案
    const textarea = document.createElement('textarea')
    textarea.value = generatedText.value
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}

// 下载文本
const downloadText = () => {
  const blob = new Blob([generatedText.value], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `lorem-ipsum-${Date.now()}.txt`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// 清空结果
const clearResult = () => {
  generatedText.value = ''
}

// 初始化时生成一次文本
generateText()

// SEO配置
useSeoMeta({
  title: '随机文本生成器 - Lorem Ipsum 在线生成工具',
  description: '免费在线Lorem Ipsum占位文本生成器，支持多种文本类型和格式，可自定义生成数量和样式。',
  keywords: ['lorem ipsum', '占位文本', '随机文本', '文本生成器', '在线工具']
})

definePageMeta({
  layout: 'default'
})
</script>