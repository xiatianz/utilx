---
title: "Markdown编辑器开发实战指南"
slug: "markdown-editor-development"
date: 2026-01-03T19:00:00+08:00
draft: false
tags: ['Markdown', '编辑器', 'Vue', '前端开发', '富文本']
categories: ['技术教程']
author: 'util.cn Team'
summary: '从零开始讲解如何开发一个功能完整的Markdown编辑器，包括语法高亮、实时预览和导出功能'
layout: "single"
ShowToc: true
---

# Markdown编辑器开发实战指南

Markdown编辑器是开发者常用的工具，本文将带你从零开始构建一个功能完整的Markdown编辑器。

## 核心功能设计

### 基础功能

1. **实时预览**：编辑时同步显示渲染结果
2. **语法高亮**：代码块语法高亮
3. **快捷操作**：快捷键和工具栏
4. **导出功能**：导出为HTML、PDF等
5. **本地存储**：自动保存草稿

### 高级功能

1. **分屏同步**：编辑器和预览区同步滚动
2. **图片上传**：拖拽上传图片
3. **数学公式**：支持LaTeX公式
4. **目录生成**：自动生成文章目录
5. **主题切换**：支持多种主题

## 技术选型

```json
{
  "dependencies": {
    "marked": "^12.0.0",        // Markdown解析
    "highlight.js": "^11.9.0",   // 代码高亮
    "dompurify": "^3.0.0",       // XSS防护
    "turndown": "^7.1.0"         // HTML转Markdown
  }
}
```

## 基础实现

### 1. 项目结构

```
markdown-editor/
├── components/
│   ├── Editor.vue          # 编辑器组件
│   ├── Preview.vue         # 预览组件
│   ├── Toolbar.vue         # 工具栏组件
│   └── TOC.vue             # 目录组件
├── utils/
│   ├── markdown.js         # Markdown处理
│   ├── highlight.js        # 代码高亮
│   └── export.js           # 导出功能
└── App.vue
```

### 2. 编辑器组件

```vue
<!-- Editor.vue -->
<template>
  <div class="markdown-editor">
    <div class="editor-container">
      <textarea
        ref="editor"
        v-model="content"
        @input="handleInput"
        @keydown="handleKeydown"
        @scroll="handleScroll"
        placeholder="开始写作..."
        class="editor-textarea"
        spellcheck="false"
      ></textarea>
    </div>
    <Preview
      :content="renderedContent"
      :scroll-ratio="scrollRatio"
      @scroll="handlePreviewScroll"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import Preview from './Preview.vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  theme: {
    type: String,
    default: 'light'
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const content = ref(props.modelValue)
const scrollRatio = ref(0)
const editor = ref(null)

// 配置marked
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: true,
  mangle: false
})

// 渲染Markdown
const renderedContent = computed(() => {
  if (!content.value) return ''

  try {
    const html = marked(content.value)
    return DOMPurify.sanitize(html)
  } catch (error) {
    console.error('Markdown parsing error:', error)
    return '<p>解析错误</p>'
  }
})

// 处理输入
const handleInput = () => {
  emit('update:modelValue', content.value)
  emit('change', content.value)
}

// 处理键盘事件
const handleKeydown = (e) => {
  // Tab键插入空格
  if (e.key === 'Tab') {
    e.preventDefault()
    insertText('  ')
  }

  // Ctrl/Cmd + B 粗体
  if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
    e.preventDefault()
    wrapText('**', '**')
  }

  // Ctrl/Cmd + I 斜体
  if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
    e.preventDefault()
    wrapText('*', '*')
  }

  // Ctrl/Cmd + K 链接
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault()
    wrapText('[', '](url)')
  }
}

// 插入文本
const insertText = (text) => {
  const textarea = editor.value
  const start = textarea.selectionStart
  const end = textarea.selectionEnd

  content.value =
    content.value.substring(0, start) +
    text +
    content.value.substring(end)

  // 设置光标位置
  setTimeout(() => {
    textarea.selectionStart = textarea.selectionEnd = start + text.length
  }, 0)
}

// 包裹选中文本
const wrapText = (before, after) => {
  const textarea = editor.value
  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const selectedText = content.value.substring(start, end)

  const replacement = before + selectedText + after

  content.value =
    content.value.substring(0, start) +
    replacement +
    content.value.substring(end)

  // 设置选中范围
  setTimeout(() => {
    textarea.selectionStart = start + before.length
    textarea.selectionEnd = start + before.length + selectedText.length
  }, 0)
}

// 同步滚动
const handleScroll = (e) => {
  const textarea = e.target
  const ratio = textarea.scrollTop / (textarea.scrollHeight - textarea.clientHeight)
  scrollRatio.value = ratio
}

const handlePreviewScroll = (ratio) => {
  const textarea = editor.value
  const targetScroll = ratio * (textarea.scrollHeight - textarea.clientHeight)
  textarea.scrollTop = targetScroll
}

// 自动保存
let saveTimer = null
const autoSave = () => {
  clearTimeout(saveTimer)
  saveTimer = setTimeout(() => {
    localStorage.setItem('markdown-draft', content.value)
  }, 1000)
}

watch(content, autoSave)

// 初始化时加载草稿
onMounted(() => {
  const draft = localStorage.getItem('markdown-draft')
  if (draft && !content.value) {
    content.value = draft
  }
})

onUnmounted(() => {
  clearTimeout(saveTimer)
})
</script>

<style scoped>
.markdown-editor {
  display: flex;
  height: 100%;
  gap: 1px;
  background: var(--border-color);
}

.editor-container {
  flex: 1;
  background: var(--bg-color);
  overflow: hidden;
}

.editor-textarea {
  width: 100%;
  height: 100%;
  padding: 20px;
  border: none;
  resize: none;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
  background: var(--bg-color);
  color: var(--text-color);
  outline: none;
}

.editor-textarea::placeholder {
  color: var(--text-secondary);
}
</style>
```

### 3. 预览组件

```vue
<!-- Preview.vue -->
<template>
  <div class="markdown-preview" ref="preview" @scroll="handleScroll">
    <div v-html="content" class="markdown-body"></div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { highlightAll } from '../utils/highlight'

const props = defineProps({
  content: String,
  scrollRatio: Number
})

const emit = defineEmits(['scroll'])

const preview = ref(null)

// 处理滚动
const handleScroll = (e) => {
  const element = e.target
  const ratio = element.scrollTop / (element.scrollHeight - element.clientHeight)
  emit('scroll', ratio)
}

// 监听滚动比例变化（从编辑器同步）
watch(() => props.scrollRatio, (ratio) => {
  if (preview.value) {
    const element = preview.value
    const targetScroll = ratio * (element.scrollHeight - element.clientHeight)
    element.scrollTop = targetScroll
  }
})

// 内容更新后高亮代码
watch(() => props.content, () => {
  setTimeout(highlightAll, 0)
}, { immediate: true })
</script>

<style scoped>
.markdown-preview {
  flex: 1;
  overflow: auto;
  padding: 20px;
  background: var(--bg-color);
}

.markdown-body {
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-color);
}

.markdown-body :deep(h1),
.markdown-body :deep(h2),
.markdown-body :deep(h3) {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body :deep(p) {
  margin-top: 0;
  margin-bottom: 16px;
}

.markdown-body :deep(code) {
  padding: 2px 6px;
  background: var(--code-bg);
  border-radius: 3px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9em;
}

.markdown-body :deep(pre) {
  padding: 16px;
  overflow: auto;
  background: var(--code-bg);
  border-radius: 6px;
  margin-bottom: 16px;
}

.markdown-body :deep(pre code) {
  padding: 0;
  background: transparent;
}

.markdown-body :deep(blockquote) {
  padding: 0 16px;
  margin: 0 0 16px 0;
  border-left: 4px solid var(--border-color);
  color: var(--text-secondary);
}

.markdown-body :deep(img) {
  max-width: 100%;
  height: auto;
}

.markdown-body :deep(table) {
  width: 100%;
  margin-bottom: 16px;
  border-collapse: collapse;
}

.markdown-body :deep(table th),
.markdown-body :deep(table td) {
  padding: 8px 16px;
  border: 1px solid var(--border-color);
}

.markdown-body :deep(table th) {
  background: var(--table-header-bg);
  font-weight: 600;
}
</style>
```

### 4. 代码高亮工具

```javascript
// utils/highlight.js
import hljs from 'highlight.js'

// 支持的语言
const supportedLanguages = [
  'javascript',
  'typescript',
  'python',
  'java',
  'cpp',
  'css',
  'html',
  'json',
  'bash',
  'markdown'
]

// 初始化highlight.js
hljs.configure({
  languages: supportedLanguages,
  ignoreUnescapedHTML: true
})

// 高亮所有代码块
export function highlightAll() {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })
}

// 高亮单个代码块
export function highlightCode(code, language) {
  try {
    return hljs.highlight(code, { language }).value
  } catch (error) {
    return hljs.highlightAuto(code).value
  }
}

// 获取语言列表
export function getLanguages() {
  return hljs.listLanguages()
}
```

### 5. 工具栏组件

```vue
<!-- Toolbar.vue -->
<template>
  <div class="toolbar">
    <button @click="insertBold" title="粗体 (Ctrl+B)">
      <strong>B</strong>
    </button>
    <button @click="insertItalic" title="斜体 (Ctrl+I)">
      <em>I</em>
    </button>
    <button @click="insertHeading" title="标题">
      H
    </button>
    <div class="divider"></div>
    <button @click="insertLink" title="链接 (Ctrl+K)">
      🔗
    </button>
    <button @click="insertImage" title="图片">
      🖼️
    </button>
    <button @click="insertCode" title="代码">
      &lt;/&gt;
    </button>
    <div class="divider"></div>
    <button @click="insertList" title="列表">
      ≣
    </button>
    <button @click="insertQuote" title="引用">
      "
    </button>
    <button @click="insertTable" title="表格">
      ▦
    </button>
    <div class="divider"></div>
    <button @click="undo" title="撤销 (Ctrl+Z)">
      ↶
    </button>
    <button @click="redo" title="重做 (Ctrl+Y)">
      ↷
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['insert'])

const insertBold = () => emit('insert', { prefix: '**', suffix: '**', placeholder: '粗体文本' })
const insertItalic = () => emit('insert', { prefix: '*', suffix: '*', placeholder: '斜体文本' })
const insertHeading = () => emit('insert', { prefix: '## ', suffix: '', placeholder: '标题' })
const insertLink = () => emit('insert', { prefix: '[', suffix: '](url)', placeholder: '链接文本' })
const insertImage = () => emit('insert', { prefix: '![', suffix: '](url)', placeholder: '图片描述' })
const insertCode = () => emit('insert', { prefix: '```\n', suffix: '\n```', placeholder: '代码' })
const insertList = () => emit('insert', { prefix: '- ', suffix: '', placeholder: '列表项' })
const insertQuote = () => emit('insert', { prefix: '> ', suffix: '', placeholder: '引用文本' })
const insertTable = () => {
  const table = `
| 列1 | 列2 | 列3 |
|-----|-----|-----|
|     |     |     |
|     |     |     |
`
  emit('insert', { text: table })
}
const undo = () => document.execCommand('undo')
const redo = () => document.execCommand('redo')
</script>

<style scoped>
.toolbar {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: var(--toolbar-bg);
  border-bottom: 1px solid var(--border-color);
}

.toolbar button {
  padding: 6px 12px;
  border: none;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.toolbar button:hover {
  background: var(--hover-bg);
}

.divider {
  width: 1px;
  height: 24px;
  background: var(--border-color);
  margin: 0 4px;
}
</style>
```

## 高级功能实现

### 1. 图片上传

```javascript
// utils/upload.js
export async function uploadImage(file) {
  const formData = new FormData()
  formData.append('image', file)

  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      throw new Error('Upload failed')
    }

    const data = await response.json()
    return data.url
  } catch (error) {
    console.error('Upload error:', error)
    throw error
  }
}

// 在编辑器中使用
async function handleDrop(e) {
  e.preventDefault()

  const files = [...e.dataTransfer.files]
  const images = files.filter(file => file.type.startsWith('image/'))

  for (const file of images) {
    try {
      const url = await uploadImage(file)
      insertText(`![${file.name}](${url})`)
    } catch (error) {
      alert(`上传失败: ${file.name}`)
    }
  }
}
```

### 2. 目录生成

```vue
<!-- TOC.vue -->
<template>
  <div class="toc">
    <h4>目录</h4>
    <ul>
      <li
        v-for="item in headings"
        :key="item.id"
        :class="`level-${item.level}`"
        @click="scrollToHeading(item.id)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  content: String
})

const headings = ref([])

// 提取标题
const extractHeadings = () => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(props.content, 'text/html')
  const headingElements = doc.querySelectorAll('h1, h2, h3')

  headings.value = Array.from(headingElements).map(h => ({
    id: h.id,
    level: parseInt(h.tagName[1]),
    text: h.textContent
  }))
}

watch(() => props.content, extractHeadings, { immediate: true })

const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
```

### 3. 导出功能

```javascript
// utils/export.js
export function exportToHTML(markdown, title = 'Document') {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>
    body { font-family: -apple-system, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
    pre { background: #f5f5f5; padding: 16px; overflow: auto; }
    code { background: #f5f5f5; padding: 2px 6px; }
    blockquote { border-left: 4px solid #ddd; margin: 0; padding-left: 16px; color: #666; }
  </style>
</head>
<body>
${marked(markdown)}
</body>
</html>
`

  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${title}.html`
  a.click()
  URL.revokeObjectURL(url)
}

export function exportToPDF(element, filename = 'document.pdf') {
  // 使用html2pdf.js
  import('html2pdf.js').then((module) => {
    const html2pdf = module.default
    html2pdf().from(element).save(filename)
  })
}
```

## 性能优化

### 1. 虚拟滚动

```javascript
// 对于超长文档，使用虚拟滚动
import { useVirtualScroll } from './composables/virtualScroll'

const { visibleContent, scrollTop } = useVirtualScroll(content.value, {
  itemHeight: 20,
  bufferSize: 5
})
```

### 2. 防抖处理

```javascript
import { debounce } from 'lodash-es'

const debouncedUpdate = debounce(() => {
  emit('update:modelValue', content.value)
}, 300)
```

### 3. Web Worker

```javascript
// 在Worker中解析Markdown
const worker = new Worker('/markdown-worker.js')

worker.postMessage({ markdown: content.value })
worker.onmessage = (e) => {
  renderedContent.value = e.data.html
}
```

## 最佳实践

1. **安全第一**：始终使用DOMPurify清理HTML
2. **性能优化**：大文档使用虚拟滚动或Web Worker
3. **用户体验**：提供自动保存和恢复功能
4. **可访问性**：确保键盘导航可用
5. **主题支持**：支持明暗主题切换

## 总结

构建Markdown编辑器涉及多个方面：实时预览、代码高亮、同步滚动、图片上传等。通过合理的架构设计和性能优化，可以打造出优秀的编辑体验。

记住这些要点：
- 使用成熟的库（marked、highlight.js）
- 始终注意XSS防护
- 提供流畅的用户体验
- 支持常用快捷键
- 实现自动保存功能

希望这篇指南能帮助你构建自己的Markdown编辑器！
