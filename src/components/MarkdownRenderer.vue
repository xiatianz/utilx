<template>
  <div class="markdown-content prose prose-gray dark:prose-invert max-w-none" v-html="renderedMarkdown"></div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  content: {
    type: String,
    required: true
  }
})

// 配置marked选项
marked.setOptions({
  gfm: true,
  breaks: true,
  smartypants: true
})

// 渲染Markdown内容
const renderedMarkdown = computed(() => {
  return marked(props.content)
})
</script>

<style scoped>
.markdown-content {
  @apply text-foreground;
}

.markdown-content :deep(h1) {
  @apply text-3xl font-bold mb-6 mt-8 first:mt-0;
}

.markdown-content :deep(h2) {
  @apply text-2xl font-semibold mb-5 mt-7;
}

.markdown-content :deep(h3) {
  @apply text-xl font-semibold mb-4 mt-6;
}

.markdown-content :deep(p) {
  @apply text-muted-foreground mb-4 leading-relaxed;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  @apply mb-4 pl-6;
}

.markdown-content :deep(li) {
  @apply mb-2;
}

.markdown-content :deep(a) {
  @apply text-primary hover:underline;
}

.markdown-content :deep(strong) {
  @apply font-semibold;
}

.markdown-content :deep(em) {
  @apply italic;
}

.markdown-content :deep(code) {
  @apply bg-muted px-1.5 py-0.5 rounded text-sm font-mono;
}

.markdown-content :deep(pre) {
  @apply bg-muted p-4 rounded-lg overflow-x-auto mb-4;
}

.markdown-content :deep(pre code) {
  @apply bg-transparent p-0 rounded-none;
}

.markdown-content :deep(blockquote) {
  @apply border-l-4 border-primary pl-4 italic text-muted-foreground my-4;
}

.markdown-content :deep(table) {
  @apply w-full mb-4 border-collapse;
}

.markdown-content :deep(th),
.markdown-content :deep(td) {
  @apply border border-border p-2 text-left;
}

.markdown-content :deep(th) {
  @apply bg-muted font-semibold;
}
</style>