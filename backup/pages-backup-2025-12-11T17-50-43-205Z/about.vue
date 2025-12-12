<template>
  <div class="max-w-8xl mx-auto py-8">
    <div class="prose prose-gray dark:prose-invert max-w-none">
      <MarkdownRenderer :content="pageContent" />
    </div>
  </div>
</template>

<script setup>
import MarkdownRenderer from '~/components/MarkdownRenderer.vue'
import { ref } from 'vue'

definePageMeta({
  layout: 'default',
  title: '关于我们'
})

// 直接导入Markdown文件内容
import aboutContent from '~/content/about.md?raw'

const pageContent = ref(aboutContent)
</script>