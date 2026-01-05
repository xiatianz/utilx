<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Network, Download, Palette, FolderOpen, X, ChevronUp, HelpCircle } from 'lucide-vue-next'
import { tools } from '~/data/tools'

// SEO配置
useSeoMeta({
  title: '思维导图工具 - 在线脑图编辑器 | 知识整理头脑风暴',
  description: '免费在线思维导图工具，支持节点创建、编辑、折叠展开，可导出为PNG/SVG图片，适用于知识整理、头脑风暴、项目规划和学习笔记。',
  keywords: '思维导图,脑图,在线导图,知识管理,头脑风暴,项目规划,学习笔记,思维整理',
  author: 'Util工具箱',
  ogTitle: '思维导图工具 - 免费在线脑图编辑器',
  ogDescription: '专业的思维导图工具，支持节点创建、编辑、折叠展开，可导出为图片。',
  ogType: 'website'
})

// 颜色主题
const colorThemes = [
  { name: '蓝色', colors: { root: '#3B82F6', level1: '#60A5FA', level2: '#93C5FD', level3: '#BFDBFE', text: '#1E3A8A' } },
  { name: '绿色', colors: { root: '#10B981', level1: '#34D399', level2: '#6EE7B7', level3: '#A7F3D0', text: '#064E3B' } },
  { name: '紫色', colors: { root: '#8B5CF6', level1: '#A78BFA', level2: '#C4B5FD', level3: '#DDD6FE', text: '#4C1D95' } },
  { name: '橙色', colors: { root: '#F59E0B', level1: '#FBBF24', level2: '#FDE68A', level3: '#FEF3C7', text: '#78350F' } },
  { name: '粉色', colors: { root: '#EC4899', level1: '#F472B6', level2: '#F9A8D4', level3: '#FBCFE8', text: '#831843' } },
  { name: '青色', colors: { root: '#06B6D4', level1: '#22D3EE', level2: '#67E8F9', level3: '#A5F3FC', text: '#164E63' } }
]

// 数据结构
const mindMapData = ref({
  id: 'root',
  text: '中心主题',
  color: '#3B82F6',
  expanded: true,
  children: [
    {
      id: '1',
      text: '分支 1',
      expanded: true,
      children: [
        { id: '1-1', text: '子节点 1.1', expanded: true, children: [] },
        { id: '1-2', text: '子节点 1.2', expanded: true, children: [] }
      ]
    },
    {
      id: '2',
      text: '分支 2',
      expanded: true,
      children: [
        { id: '2-1', text: '子节点 2.1', expanded: true, children: [] }
      ]
    }
  ]
})

const selectedTheme = ref(0)
const selectedNode = ref(null)
const editingNode = ref(null)
const editingText = ref('')
const canvasRef = ref(null)

// 生成唯一ID
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2)

// 添加子节点
const addChildNode = (parentNode) => {
  if (!parentNode.children) {
    parentNode.children = []
  }
  const newNode = {
    id: generateId(),
    text: '新节点',
    expanded: true,
    children: []
  }
  parentNode.children.push(newNode)
  parentNode.expanded = true
  saveToStorage()

  nextTick(() => {
    startEdit(newNode)
  })
}

// 删除节点
const deleteNode = (node) => {
  if (node.id === mindMapData.value.id) {
    alert('不能删除根节点')
    return
  }

  if (confirm('确定要删除这个节点及其所有子节点吗？')) {
    const removeFromParent = (parent, targetId) => {
      if (!parent.children) return false
      const index = parent.children.findIndex(n => n.id === targetId)
      if (index > -1) {
        parent.children.splice(index, 1)
        return true
      }
      return parent.children.some(child => removeFromParent(child, targetId))
    }
    removeFromParent(mindMapData.value, node.id)
    saveToStorage()
  }
}

// 开始编辑
const startEdit = (node) => {
  editingNode.value = node
  editingText.value = node.text
}

// 保存编辑
const saveEdit = () => {
  if (editingNode.value) {
    editingNode.value.text = editingText.value.trim() || '未命名节点'
    editingNode.value = null
    editingText.value = ''
    saveToStorage()
  }
}

// 取消编辑
const cancelEdit = () => {
  editingNode.value = null
  editingText.value = ''
}

// 切换展开/折叠
const toggleExpand = (node) => {
  node.expanded = !node.expanded
  saveToStorage()
}

// 选择节点
const selectNode = (node) => {
  selectedNode.value = node
}

// 导出为图片
const exportAsImage = async () => {
  const canvas = canvasRef.value
  if (!canvas) return

  try {
    const html2canvas = (await import('html2canvas')).default
    const canvasData = await html2canvas(canvas, {
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false
    })

    const link = document.createElement('a')
    link.download = `思维导图_${new Date().toLocaleDateString('zh-CN')}.png`
    link.href = canvasData.toDataURL('image/png')
    link.click()
  } catch (error) {
    console.error('导出失败:', error)
  }
}

// 保存到本地存储
const saveToStorage = () => {
  localStorage.setItem('mindmap-data', JSON.stringify(mindMapData.value))
  localStorage.setItem('mindmap-theme', selectedTheme.value.toString())
}

// 从本地存储加载
const loadFromStorage = () => {
  const saved = localStorage.getItem('mindmap-data')
  const savedTheme = localStorage.getItem('mindmap-theme')
  if (saved) {
    try {
      mindMapData.value = JSON.parse(saved)
    } catch (e) {
      console.error('加载失败', e)
    }
  }
  if (savedTheme) {
    selectedTheme.value = parseInt(savedTheme)
  }
}

// 加载示例
const loadSample = () => {
  mindMapData.value = {
    id: 'root',
    text: '项目规划',
    color: '#3B82F6',
    expanded: true,
    children: [
      {
        id: '1',
        text: '市场调研',
        expanded: true,
        children: [
          { id: '1-1', text: '竞品分析', expanded: true, children: [] },
          { id: '1-2', text: '用户调研', expanded: true, children: [
            { id: '1-2-1', text: '问卷调查', expanded: true, children: [] },
            { id: '1-2-2', text: '用户访谈', expanded: true, children: [] }
          ]}
        ]
      },
      {
        id: '2',
        text: '产品开发',
        expanded: true,
        children: [
          { id: '2-1', text: '需求分析', expanded: true, children: [] },
          { id: '2-2', text: 'UI设计', expanded: true, children: [] },
          { id: '2-3', text: '前端开发', expanded: true, children: [] },
          { id: '2-4', text: '后端开发', expanded: true, children: [] }
        ]
      },
      {
        id: '3',
        text: '测试上线',
        expanded: true,
        children: [
          { id: '3-1', text: '功能测试', expanded: true, children: [] },
          { id: '3-2', text: '性能测试', expanded: true, children: [] },
          { id: '3-3', text: '正式上线', expanded: true, children: [] }
        ]
      }
    ]
  }
  saveToStorage()
}

// 清空导图
const clearMap = () => {
  if (confirm('确定要清空当前导图吗？')) {
    mindMapData.value = {
      id: 'root',
      text: '中心主题',
      color: '#3B82F6',
      expanded: true,
      children: []
    }
    saveToStorage()
  }
}

// SEO内容折叠状态
const isSeoContentVisible = ref(true)

// 切换SEO内容显示状态
const toggleSeoContent = () => {
  isSeoContentVisible.value = !isSeoContentVisible.value
}

// 相关工具
const relatedTools = [
  tools.find(t => t.id === 'flowchart-builder'),
  tools.find(t => t.id === 'quick-notes'),
  tools.find(t => t.id === 'todo-list-generator'),
  tools.find(t => t.id === 'kanban-board')
].filter(Boolean)

onMounted(() => {
  loadFromStorage()
})
</script>

<template>
  <div class="max-w-8xl mx-auto">
    <!-- Hero 头部区 -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-foreground mb-3">思维导图工具 - 在线脑图编辑器</h1>
      <p class="text-muted-foreground">免费在线思维导图工具，支持节点创建、编辑、折叠展开，可导出为PNG图片，适用于知识整理、头脑风暴、项目规划和学习笔记。</p>
    </div>

    <!-- 工具交互区 -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
      <!-- 左侧：主题选择和帮助 -->
      <div class="space-y-4">
        <!-- 操作按钮 -->
        <div class="bg-card border border-border rounded-lg p-4">
          <div class="flex flex-col gap-2">
            <button
              @click="loadSample"
              class="px-4 py-2 bg-muted hover:bg-muted/80 text-muted-foreground rounded-lg transition text-sm flex items-center justify-center gap-2"
            >
              <FolderOpen :size="16" />
              加载示例
            </button>
            <button
              @click="clearMap"
              class="px-4 py-2 bg-muted hover:bg-muted/80 text-muted-foreground rounded-lg transition text-sm flex items-center justify-center gap-2"
            >
              <X :size="16" />
              清空
            </button>
            <button
              @click="exportAsImage"
              class="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition text-sm flex items-center justify-center gap-2"
            >
              <Download :size="16" />
              导出图片
            </button>
          </div>
        </div>

        <!-- 主题选择 -->
        <div class="bg-card border border-border rounded-lg p-4">
          <h3 class="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Palette :size="18" />
            颜色主题
          </h3>
          <div class="space-y-2">
            <button
              v-for="(theme, index) in colorThemes"
              :key="index"
              @click="selectedTheme = index; saveToStorage()"
              :class="[
                'w-full p-3 rounded-lg flex items-center gap-3 transition border-2',
                selectedTheme === index
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:bg-muted'
              ]"
            >
              <div class="flex gap-1">
                <div
                  v-for="i in 4"
                  :key="i"
                  class="w-5 h-5 rounded-sm"
                  :style="{ backgroundColor: theme.colors[i === 1 ? 'root' : i === 2 ? 'level1' : i === 3 ? 'level2' : 'level3'] }"
                ></div>
              </div>
              <span class="text-sm font-medium text-foreground">{{ theme.name }}</span>
            </button>
          </div>
        </div>

        <!-- 操作提示 -->
        <div class="bg-muted border border-border rounded-lg p-4">
          <h3 class="font-semibold text-foreground mb-3">操作提示</h3>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start gap-2">
              <span class="text-primary">•</span>
              <span>点击节点选中，再点击操作按钮</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary">•</span>
              <span>双击节点文字进行编辑</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary">•</span>
              <span>点击 +/- 按钮添加或折叠</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary">•</span>
              <span>数据自动保存到本地</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 右侧：思维导图画布 -->
      <div class="lg:col-span-3">
        <div class="bg-card border border-border rounded-lg p-6 h-full">
          <!-- 根节点编辑 -->
          <div v-if="editingNode?.id === mindMapData.id" class="mb-4">
            <input
              v-model="editingText"
              @blur="saveEdit"
              @keyup.enter="saveEdit"
              @keyup.esc="cancelEdit"
              class="w-full px-4 py-3 text-2xl font-bold text-center border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-muted"
              autofocus
            />
          </div>

          <!-- 导图画布 -->
          <div
            ref="canvasRef"
            class="min-h-[600px] bg-muted rounded-lg p-8 overflow-auto"
          >
            <!-- 递归渲染思维导图 -->
            <div class="mind-map-container">
              <MindMapNode
                :node="mindMapData"
                :level="0"
                :selected-node="selectedNode"
                :editing-node="editingNode"
                :editing-text="editingText"
                :selected-theme="selectedTheme"
                :color-themes="colorThemes"
                @select="selectNode"
                @add-child="addChildNode"
                @delete="deleteNode"
                @edit="startEdit"
                @toggle="toggleExpand"
                @save-edit="saveEdit"
                @cancel-edit="cancelEdit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SEO 内容区 -->
    <div class="p-6 mb-12 relative">
      <button
        @click="toggleSeoContent"
        class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        :title="isSeoContentVisible ? '折叠内容' : '展开内容'"
      >
        <HelpCircle v-if="!isSeoContentVisible" class="w-5 h-5" />
        <ChevronUp v-else class="w-5 h-5" />
      </button>

      <div v-show="isSeoContentVisible">
        <h2 class="text-2xl font-bold text-foreground mb-4 flex items-center">
          <span class="text-primary mr-2">#</span>
          什么是思维导图？
        </h2>
        <p class="text-muted-foreground mb-4">
          思维导图（Mind Map）是一种将放射性思考具体化的图形思维工具。
          它利用图文并重的技巧，开启人类大脑的无限潜能。
          思维导图充分运用左右脑的机能，利用记忆、阅读、思维的规律，协助人们在科学与艺术、逻辑与想象之间平衡发展。
        </p>

        <h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center">
          <span class="text-primary mr-2">#</span>
          如何使用本工具
        </h2>
        <ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
          <li>选择一个颜色主题作为基础风格</li>
          <li>双击节点文字可以编辑节点内容</li>
          <li>点击 + 按钮添加子节点，点击 - 按钮删除节点</li>
          <li>点击导出按钮将思维导图保存为图片</li>
        </ol>

        <h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center">
          <span class="text-primary mr-2">#</span>
          核心功能特性
        </h2>
        <ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6">
          <li><strong>节点管理</strong>：支持添加、删除、编辑节点，无限层级</li>
          <li><strong>颜色主题</strong>：多种颜色主题可选，美观大方</li>
          <li><strong>折叠展开</strong>：支持节点的折叠和展开，方便查看</li>
          <li><strong>本地存储</strong>：自动保存到浏览器本地，不会丢失</li>
          <li><strong>图片导出</strong>：一键导出为PNG图片，方便分享</li>
        </ul>
      </div>
    </div>

    <!-- 相关推荐区 -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-foreground mb-4">您可能还需要...</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink
          v-for="relatedTool in relatedTools"
          :key="relatedTool.id"
          :to="`/tools/${relatedTool.id}`"
          class="block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        >
          <div class="flex items-center gap-2 mb-2">
            <component
              :is="relatedTool.icon"
              class="w-5 h-5 text-primary"
            />
            <span class="font-medium text-foreground">{{ relatedTool.name }}</span>
          </div>
          <p class="text-sm text-muted-foreground line-clamp-2">{{ relatedTool.description }}</p>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<!-- 节点组件 -->
<script>
import { defineComponent } from 'vue'

export const MindMapNode = defineComponent({
  name: 'MindMapNode',
  props: {
    node: Object,
    level: Number,
    selectedNode: Object,
    editingNode: Object,
    editingText: String,
    selectedTheme: Number,
    colorThemes: Array
  },
  emits: ['select', 'add-child', 'delete', 'edit', 'toggle', 'save-edit', 'cancel-edit'],
  template: `
    <div class="mind-node-wrapper" :class="{ 'is-root': level === 0 }">
      <div
        class="mind-node"
        :class="[{ 'is-root': level === 0 }]"
        :style="{
          backgroundColor: getNodeColor(level),
          borderColor: selectedNode?.id === node.id ? '#000' : 'transparent',
          borderWidth: selectedNode?.id === node.id ? '2px' : '1px'
        }"
        @click="$emit('select', node)"
      >
        <div v-if="editingNode?.id === node.id" class="node-edit">
          <input
            :value="editingText"
            @input="$emit('update:editingText', $event.target.value)"
            @blur="$emit('save-edit')"
            @keyup.enter="$emit('save-edit')"
            @keyup.esc="$emit('cancel-edit')"
            class="node-input"
            :style="{ color: colorThemes[selectedTheme].colors.text }"
            autofocus
          />
        </div>

        <div v-else class="node-content">
          <div
            class="node-text"
            :style="{ color: colorThemes[selectedTheme].colors.text }"
            @dblclick="$emit('edit', node)"
          >
            {{ node.text }}
          </div>

          <div class="node-actions">
            <button
              @click.stop="$emit('add-child', node)"
              class="action-btn add-btn"
              title="添加子节点"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <button
              v-if="level > 0"
              @click.stop="$emit('delete', node)"
              class="action-btn delete-btn"
              title="删除节点"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <button
              @click.stop="$emit('edit', node)"
              class="action-btn edit-btn"
              title="编辑节点"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
          </div>

          <button
            v-if="node.children && node.children.length > 0"
            @click.stop="$emit('toggle', node)"
            class="toggle-btn"
            :style="{ color: colorThemes[selectedTheme].colors.text }"
          >
            <svg v-if="node.expanded" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div v-if="node.expanded && node.children && node.children.length > 0" class="children-container">
        <div
          v-for="child in node.children"
          :key="child.id"
          class="child-node"
        >
          <MindMapNode
            :node="child"
            :level="level + 1"
            :selected-node="selectedNode"
            :editing-node="editingNode"
            :editing-text="editingText"
            :selected-theme="selectedTheme"
            :color-themes="colorThemes"
            @select="$emit('select', $event)"
            @add-child="$emit('add-child', $event)"
            @delete="$emit('delete', $event)"
            @edit="$emit('edit', $event)"
            @toggle="$emit('toggle', $event)"
            @save-edit="$emit('save-edit')"
            @cancel-edit="$emit('cancel-edit')"
          />
        </div>
      </div>
    </div>
  `,
  methods: {
    getNodeColor(level) {
      const theme = this.colorThemes[this.selectedTheme].colors
      if (level === 0) return theme.root
      if (level === 1) return theme.level1
      if (level === 2) return theme.level2
      return theme.level3
    }
  }
})
</script>

<style scoped>
.mind-map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mind-node-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}

.mind-node-wrapper.is-root {
  margin-bottom: 30px;
}

.mind-node {
  position: relative;
  padding: 12px 24px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  text-align: center;
}

.mind-node:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 12px -1px rgba(0, 0, 0, 0.15);
}

.mind-node.is-root {
  padding: 20px 40px;
  font-size: 1.5rem;
  font-weight: bold;
  min-width: 200px;
}

.node-content {
  position: relative;
  z-index: 1;
}

.node-text {
  font-weight: 500;
  font-size: 1rem;
}

.mind-node.is-root .node-text {
  font-size: 1.5rem;
  font-weight: bold;
}

.node-input {
  background: white;
  border: 2px solid #8B5CF6;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  min-width: 200px;
}

.node-actions {
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s;
}

.mind-node:hover .node-actions {
  opacity: 1;
}

.action-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.add-btn {
  background: #10B981;
  color: white;
}

.add-btn:hover {
  background: #059669;
}

.delete-btn {
  background: #EF4444;
  color: white;
}

.delete-btn:hover {
  background: #DC2626;
}

.edit-btn {
  background: #3B82F6;
  color: white;
}

.edit-btn:hover {
  background: #2563EB;
}

.toggle-btn {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toggle-btn:hover {
  background: white;
  transform: translateX(-50%) scale(1.1);
}

.children-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  padding-left: 20px;
  position: relative;
}

.children-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 20px;
  height: 2px;
  background: #CBD5E1;
}

.child-node {
  position: relative;
  padding-top: 20px;
}

.child-node::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 20px;
  background: #CBD5E1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mind-node {
  animation: fadeIn 0.3s ease-out;
}
</style>
