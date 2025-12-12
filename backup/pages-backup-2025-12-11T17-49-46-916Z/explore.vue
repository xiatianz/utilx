<template>
  <div class="max-w-8xl mx-auto py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-foreground mb-2">工具探索</h1>
      <p class="text-muted-foreground">发现和使用各种实用工具</p>
    </div>

    <!-- 分类导航 -->
    <section class="mb-12">
      <h2 class="text-xl font-semibold mb-6 flex items-center gap-2">
        <LayoutGrid class="w-5 h-5 text-primary" />
        工具分类
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="category in categories"
          :key="category.id"
          class="bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer group"
          @click="goToCategory(category.id)"
        >
          <div class="flex justify-between items-start mb-3">
            <component 
              :is="getCategoryIcon(category.icon)" 
              class="w-8 h-8 text-primary group-hover:scale-110 transition-transform"
            />
            <!-- <span class="text-sm bg-muted px-2 py-1 rounded-full">
              {{ category.toolCount }} 个工具
            </span> -->
          </div>
          <h3 class="font-semibold mb-2">{{ category.name }}</h3>
          <p class="text-sm text-muted-foreground">{{ category.description }}</p>
        </div>
      </div>
    </section>

    <!-- 精选工具 -->
    <section class="mb-12">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold flex items-center gap-2">
          <Star class="w-5 h-5 text-yellow-500 fill-current" />
          精选工具
        </h2>
        <NuxtLink 
          to="/all" 
          class="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
        >
          查看全部
          <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ToolCard
          v-for="tool in featuredTools"
          :key="tool.id"
          :tool="tool"
          :title="tool.name"
          :description="tool.description"
          :category="tool.category"
          :usage-count="formatViewCount(tool.viewCount)"
          :icon="tool.icon"
          @select="handleToolSelect"
        />
      </div>
    </section>

    <!-- 最近使用 -->
    <section v-if="recentTools.length > 0">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold flex items-center gap-2">
          <Clock class="w-5 h-5 text-primary" />
          最近使用
        </h2>
        <NuxtLink 
          to="/recent" 
          class="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
        >
          查看更多
          <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="tool in recentTools"
          :key="tool.id"
          class="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all cursor-pointer group"
          @click="goToTool(tool)"
        >
          <div class="flex flex-col items-center text-center">
            <component 
              :is="getCategoryIcon(tool.icon)" 
              class="w-8 h-8 mb-2 text-primary group-hover:scale-110 transition-transform"
            />
            <span class="text-sm font-medium truncate w-full">{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { 
  LayoutGrid, Star, Clock, ArrowRight,
  FileJson, Database, Lock, Regex, Globe, Image as ImageIcon, Code
} from 'lucide-vue-next'
import { categories } from '~/data/categories'
import { tools } from '~/data/tools'
import { initToolsData, getRecentTools, addRecentTool } from '~/composables/useTools'
import ToolCard from '~/components/ToolCard.vue'

definePageMeta({
  layout: 'default'
})

// 初始化工具数据
initToolsData()

const router = useRouter()

// 图标映射
const iconMap = {
  FileJson, Database, Lock, Regex, Globe, ImageIcon, Code
}

// 为分类添加工具计数
const categoriesWithCount = computed(() => {
  return categories.map(category => ({
    ...category,
    toolCount: tools.filter(tool => tool.category === category.id).length
  }))
})

// 精选工具（热门工具）
const featuredTools = computed(() => {
  return tools.filter(tool => tool.hot).slice(0, 8)
})

// 最近使用的工具
const recentTools = computed(() => {
  const recentIds = getRecentTools()
  return recentIds
    .map(id => tools.find(tool => tool.id === id))
    .filter(Boolean)
    .slice(0, 6)
})

// 格式化浏览量
const formatViewCount = (count) => {
  if (count >= 10000) {
    return `${(count / 10000).toFixed(1)}w+`
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k+`
  }
  return `${count}`
}

// 获取分类图标组件
const getCategoryIcon = (iconName) => {
  return iconMap[iconName] || FileJson
}

// 跳转到分类
const goToCategory = (categoryId) => {
  router.push(`/${categoryId}`)
}

// 跳转到工具
const goToTool = (tool) => {
  // 获取工具URL
  const toolUrl = `/tools/${tool.id}/`
  router.push(toolUrl)
  addRecentTool(tool.id)
}

// 处理工具选择
const handleToolSelect = (tool) => {
  // 获取工具URL
  const toolUrl = `/tools/${tool.id}/`
  router.push(toolUrl)
  addRecentTool(tool.id)
}
</script>