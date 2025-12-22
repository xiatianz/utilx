// PWA插件配置 - 处理Service Worker和推送通知
export default defineNuxtPlugin(async ({ $config }) => {
  if (process.client) {
    // 注册Service Worker
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw-push.js', {
          scope: '/'
        })

        console.log('[PWA] Service Worker registered:', registration.scope)

        // 监听Service Worker更新
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing

          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // 新版本可用
              console.log('[PWA] New version available')

              // 可以在这里显示更新提示
              if (confirm('发现新版本，是否立即更新？')) {
                newWorker.postMessage({ type: 'SKIP_WAITING' })
                window.location.reload()
              }
            }
          })
        })

        // 监听来自Service Worker的消息
        navigator.serviceWorker.addEventListener('message', (event) => {
          if (event.data && event.data.type === 'NOTIFICATION_CLICK') {
            // 处理通知点击事件
            console.log('[PWA] Notification clicked:', event.data)
          }
        })

        // 检查推送支持
        if ('PushManager' in window) {
          console.log('[PWA] Push notifications supported')

          // 检查现有订阅
          registration.pushManager.getSubscription()
            .then(subscription => {
              if (subscription) {
                console.log('[PWA] Existing subscription found:', subscription)
              } else {
                console.log('[PWA] No existing subscription')
              }
            })
            .catch(error => {
              console.error('[PWA] Error checking subscription:', error)
            })
        } else {
          console.warn('[PWA] Push notifications not supported')
        }

      } catch (error) {
        console.error('[PWA] Service Worker registration failed:', error)
      }
    } else {
      console.warn('[PWA] Service Worker not supported')
    }

    // 监听在线状态
    const updateOnlineStatus = () => {
      const isOnline = navigator.onLine
      console.log(`[PWA] Network status: ${isOnline ? 'online' : 'offline'}`)

      // 可以在这里显示网络状态提示
      const statusElement = document.getElementById('network-status')
      if (statusElement) {
        statusElement.textContent = isOnline ? '在线' : '离线'
        statusElement.className = isOnline ? 'online' : 'offline'
      }
    }

    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)

    // 初始化网络状态
    updateOnlineStatus()

    // PWA安装提示处理
    let deferredPrompt = null

    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('[PWA] Install prompt available')
      e.preventDefault()
      deferredPrompt = e

      // 可以显示安装提示UI
      const installButton = document.getElementById('install-app')
      if (installButton) {
        installButton.style.display = 'block'
      }
    })

    window.addEventListener('appinstalled', () => {
      console.log('[PWA] App installed successfully')
      deferredPrompt = null

      // 隐藏安装提示
      const installButton = document.getElementById('install-app')
      if (installButton) {
        installButton.style.display = 'none'
      }
    })

    // 提供安装PWA的方法
    window.installPWA = async () => {
      if (!deferredPrompt) {
        alert('应用已安装或浏览器不支持PWA安装')
        return
      }

      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice

      if (outcome === 'accepted') {
        console.log('[PWA] User accepted install prompt')
      } else {
        console.log('[PWA] User dismissed install prompt')
      }

      deferredPrompt = null
    }
  }
})