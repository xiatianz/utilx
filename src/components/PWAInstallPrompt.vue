<template>
  <div v-if="showInstallPrompt" class="fixed bottom-4 right-4 z-50 max-w-sm animate-fade-in">
    <div class="bg-card border border-border rounded-lg shadow-lg p-4 dark:bg-card/95 backdrop-blur-sm">
      <div class="flex items-start gap-3">
        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="font-semibold mb-1">安装 Util 工具箱</h3>
          <p class="text-sm text-muted-foreground mb-3">
            将应用安装到桌面，享受更好的使用体验
          </p>
          <div class="flex gap-2">
            <button
              @click="installApp"
              class="px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              安装
            </button>
            <button
              @click="dismissPrompt"
              class="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium hover:bg-muted/80 transition-colors"
            >
              暂不
            </button>
          </div>
        </div>
        <button
          @click="dismissPrompt"
          class="text-muted-foreground hover:text-foreground transition-colors p-1"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showInstallPrompt = ref(false)
const deferredPrompt = ref(null)

const installApp = async () => {
  if (!deferredPrompt.value) return

  try {
    const result = await deferredPrompt.value.prompt()
    if (result.outcome === 'accepted') {
      console.log('用户接受了安装提示')
    }
    deferredPrompt.value = null
    showInstallPrompt.value = false
  } catch (error) {
    console.error('安装失败:', error)
  }
}

const dismissPrompt = () => {
  showInstallPrompt.value = false
  deferredPrompt.value = null
  // 保存用户的选择，24小时内不再提示
  localStorage.setItem('pwa-install-dismissed', Date.now().toString())
}

onMounted(() => {
  // 检查用户是否在24小时内拒绝过安装
  const dismissedTime = localStorage.getItem('pwa-install-dismissed')
  if (dismissedTime && Date.now() - parseInt(dismissedTime) < 24 * 60 * 60 * 1000) {
    return
  }

  // 监听安装提示事件
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt.value = e
    showInstallPrompt.value = true
  })

  // 监听安装完成事件
  window.addEventListener('appinstalled', () => {
    console.log('PWA 安装成功')
    showInstallPrompt.value = false
    deferredPrompt.value = null
  })
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>