<template>
  <div class="max-w-8xl mx-auto py-8">
    <!-- Hero 区域 -->
    <div class="text-center mb-16 mt-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        开发者的瑞士军刀
      </h1>
      <p class="text-xl text-muted-foreground mb-8">无广告 · 纯本地计算 · 即开即用</p>
      
      <!-- 大搜索框 -->
      <div class="relative max-w-2xl mx-auto mb-6">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search class="w-5 h-5 text-muted-foreground" />
        </div>
        <input 
          ref="searchInput"
          v-model="searchQuery"
          type="text" 
          class="block w-full rounded-xl border border-border bg-muted/50 pl-11 pr-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:bg-background transition-all placeholder:text-muted-foreground/70"
          placeholder="搜索你需要的工具，如 'JSON', 'MD5', '正则'..."
          @input="handleSearch"
          @keydown.enter="handleSearchEnter"
        >
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
          <span class="text-xs text-muted-foreground bg-muted border border-border px-2 py-1 rounded hidden sm:block">⌘K</span>
        </div>
      </div>
      
      <!-- 智能粘贴提示 -->
      <div 
        v-if="clipboardSuggestion" 
        class="max-w-2xl mx-auto mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-between"
      >
        <div class="text-sm">
          <span class="text-primary">检测到剪贴板包含 {{ clipboardSuggestion.type }} 数据，</span>
          <button 
            class="text-primary font-medium underline ml-1"
            @click="goToTool(clipboardSuggestion.toolId)"
          >
            是否打开 {{ clipboardSuggestion.toolName }}？
          </button>
        </div>
        <button 
          class="text-muted-foreground hover:text-foreground"
          @click="dismissClipboardSuggestion"
        >
          <X class="w-4 h-4" />
        </button>
      </div>
      
      <!-- 热门/快捷标签 -->
      <div class="flex flex-wrap justify-center gap-2">
        <span class="text-xs text-muted-foreground py-1">热门搜索：</span>
        <button 
          v-for="tag in popularTags"
          :key="tag"
          class="text-xs px-3 py-1 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors border border-border"
          @click="setSearchTerm(tag)"
        >
          {{ tag }}
        </button>
      </div>
    </div>
    
    <!-- 个性化工作台 (最近使用/收藏) -->
    <section class="mb-16">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold flex items-center gap-2">
          <Clock class="w-6 h-6 text-primary" />
          最近使用
        </h2>
        <button 
          v-if="recentTools.length > 0"
          class="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
          @click="clearRecentToolsHandler"
        >
          <Trash2 class="w-4 h-4" />
          清空记录
        </button>
      </div>
      
      <div v-if="recentTools.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="tool in recentTools"
          :key="tool.id"
          class="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all cursor-pointer group"
          @click="goToToolById(tool.id, tool.category)"
        >
          <div class="flex flex-col items-center text-center">
            <component 
              :is="getIconComponent(tool.icon)" 
              class="w-8 h-8 mb-2 text-primary group-hover:scale-110 transition-transform"
            />
            <span class="text-sm font-medium truncate w-full">{{ tool.name }}</span>
          </div>
        </div>
      </div>
      
      <!-- 新用户显示推荐工具 -->
      <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="tool in recommendedTools"
          :key="tool.id"
          class="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all cursor-pointer group"
          @click="goToToolById(tool.id, tool.category)"
        >
          <div class="flex flex-col items-center text-center">
            <component 
              :is="getIconComponent(tool.icon)" 
              class="w-8 h-8 mb-2 text-primary group-hover:scale-110 transition-transform"
            />
            <span class="text-sm font-medium truncate w-full">{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 分类导航展架 -->
    <section class="mb-16">
      <div 
        v-for="category in categoriesWithTools" 
        :key="category.id"
        class="mb-12 scroll-mt-24"
        :id="`category-${category.id}`"
      >
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
          <component :is="getIconComponent(category.icon)" class="w-6 h-6 text-primary" />
          {{ category.name }}
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="tool in category.tools.slice(0, 6)"
            :key="tool.id"
            class="bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer group"
            @click="goToToolById(tool.id, tool.category)"
          >
            <div class="flex justify-between items-start mb-3">
              <component 
                :is="getIconComponent(tool.icon)" 
                class="w-8 h-8 text-primary group-hover:scale-110 transition-transform"
              />
              <span 
                v-if="tool.hot || tool.new" 
                :class="[
                  'text-xs px-2 py-1 rounded-full',
                  tool.hot ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                ]"
              >
                {{ tool.hot ? 'HOT' : 'NEW' }}
              </span>
            </div>
            <h3 class="font-semibold mb-2">{{ tool.name }}</h3>
            <p class="text-sm text-muted-foreground">{{ tool.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 特性与信任背书 -->
    <section class="mb-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Lock class="w-6 h-6 text-primary" />
          </div>
          <h3 class="font-semibold mb-2">纯本地计算</h3>
          <p class="text-sm text-muted-foreground">您的数据不会上传到服务器，所有计算均在浏览器本地完成，安全隐私。</p>
        </div>
        
        <div class="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Zap class="w-6 h-6 text-primary" />
          </div>
          <h3 class="font-semibold mb-2">极速响应</h3>
          <p class="text-sm text-muted-foreground">WebAssembly加速，毫秒级处理速度，无需等待服务器响应。</p>
        </div>
        
        <div class="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Heart class="w-6 h-6 text-primary" />
          </div>
          <h3 class="font-semibold mb-2">开源免费</h3>
          <p class="text-sm text-muted-foreground">无广告，社区驱动，永久免费，GitHub开源项目。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  Search, Clock, Trash2, X, Lock, Zap, Heart,
  FileJson, FileText, Database, Link, Hash, Timer, Regex, FileDiff,
  Globe, FolderOpen, GitBranch, Type, Wifi, Image, Code,
  Shield, Layout
} from 'lucide-vue-next'
import { categories } from '~/data/categories'
import { tools } from '~/data/tools'
import { initToolsData, getRecentTools, addRecentTool, clearRecentTools } from '~/composables/useTools'

definePageMeta({
  layout: 'default'
})

const router = useRouter()

// 初始化工具数据
initToolsData()

// 数据状态
const searchQuery = ref('')
const clipboardSuggestion = ref(null)

// 图标映射
const iconMap = {
  FileText: FileText,
  FileJson: FileJson,
  Lock: Lock,
  Shield: Shield,
  Clock: Clock,
  Type: Type,
  Wifi: Wifi,
  Image: Image,
  Code: Code,
  Database: Database,
  Link: Link,
  Hash: Hash,
  Timer: Timer,
  Regex: Regex,
  FileDiff: FileDiff,
  Globe: Globe,
  FolderOpen: FolderOpen,
  GitBranch: GitBranch,
  Layout: Layout
}

// 热门标签
const popularTags = ref([
  'JSON 修复',
  'Unix 时间戳',
  'Base64 图片',
  'Cron 表达式',
  'JWT 解析',
  'URL 编码'
])

// 推荐工具（新用户）
const recommendedTools = computed(() => {
  // 选择一些热门工具作为推荐
  return tools.filter(tool => tool.hot).slice(0, 6)
})

// 最近使用的工具
const recentTools = computed(() => {
  return getRecentTools()
    .map(id => tools.find(tool => tool.id === id))
    .filter(Boolean)
    .slice(0, 6)
})

// 分类及工具
const categoriesWithTools = computed(() => {
  return categories.map(category => ({
    ...category,
    tools: tools.filter(tool => tool.category === category.id)
  }))
})

// 搜索输入引用
const searchInput = ref(null)

// 处理搜索
const handleSearch = (event) => {
  searchQuery.value = event.target.value
}

// 处理回车搜索
const handleSearchEnter = () => {
  if (searchQuery.value.trim()) {
    // 跳转到搜索结果页面或过滤工具
    router.push(`/all?search=${encodeURIComponent(searchQuery.value)}`)
  }
}

// 设置搜索词
const setSearchTerm = (term) => {
  searchQuery.value = term
  handleSearchEnter()
}

// 跳转到工具
const goToTool = (toolId) => {
  const tool = tools.find(t => t.id === toolId)
  if (tool) {
    // 使用目录结构格式
    const toolUrl = `/tools/${tool.id}/`
    router.push(toolUrl)
    addRecentTool(tool.id)
  }
}

// 通过ID跳转到工具
const goToToolById = (toolId, category) => {
  const tool = tools.find(t => t.id === toolId)
  if (tool) {
    // 使用目录结构格式
    const toolUrl = `/tools/${tool.id}/`
    router.push(toolUrl)
    addRecentTool(tool.id)
  } else {
    // 回退到原来的逻辑
    router.push(`/tools/${toolId}/`)
    addRecentTool(toolId)
  }
}

// 清空最近使用的工具
const clearRecentToolsHandler = () => {
  clearRecentTools()
}

// 关闭剪贴板提示
const dismissClipboardSuggestion = () => {
  clipboardSuggestion.value = null
}

// 获取图标组件
const getIconComponent = (iconName) => {
  const defaultIcon = iconMap['FileText'] || iconMap['FileJson']
  return iconMap[iconName] || defaultIcon
}

// 检测剪贴板内容
const detectClipboardContent = async () => {
  try {
    const text = await navigator.clipboard.readText()
    
    // 检测不同类型的内容
    if (text.startsWith('{') && text.endsWith('}')) {
      try {
        JSON.parse(text)
        clipboardSuggestion.value = {
          type: 'JSON',
          toolId: 'json-formatter',
          toolName: 'JSON格式化'
        }
        return
      } catch (e) {
        // 不是有效的JSON
      }
    }
    
    // 检测时间戳
    if (/^\d{10,13}$/.test(text)) {
      clipboardSuggestion.value = {
        type: '时间戳',
        toolId: 'unix-timestamp',
        toolName: 'Unix时间戳转换'
      }
      return
    }
    
    // 检测Base64
    if (/^[A-Za-z0-9+/]*={0,2}$/.test(text) && text.length > 10) {
      clipboardSuggestion.value = {
        type: 'Base64',
        toolId: 'base64-encoder',
        toolName: 'Base64编码/解码'
      }
      return
    }
    
    // 检测JWT
    if (text.startsWith('eyJ') && text.includes('.')) {
      clipboardSuggestion.value = {
        type: 'JWT',
        toolId: 'jwt-decoder',
        toolName: 'JWT解码'
      }
      return
    }
  } catch (error) {
    // 无法读取剪贴板，静默处理
    console.log('无法读取剪贴板内容')
  }
}

// 处理粘贴事件
const handlePaste = (event) => {
  // 延迟一段时间后检测剪贴板内容
  setTimeout(detectClipboardContent, 100)
}

// 在组件挂载时初始化
onMounted(() => {
  // 添加粘贴事件监听器
  window.addEventListener('paste', handlePaste)
  
  // 页面加载时检测一次剪贴板
  detectClipboardContent()
})

// 在组件卸载时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('paste', handlePaste)
})
</script>