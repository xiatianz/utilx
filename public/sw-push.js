// 增强版 Service Worker - 支持推送通知
const CACHE_NAME = 'util-tools-v3'
const STATIC_CACHE = 'util-static-v3'
const DYNAMIC_CACHE = 'util-dynamic-v3'

// 需要缓存的静态资源
const STATIC_ASSETS = [
  '/',
  '/tools/',
  '/manifest.json',
  '/favicon.ico',
  '/logo/logo-96.png',
  '/logo/logo-128.png',
  '/logo/logo-256.png',
  '/logo/logo-512.png'
]

// 安装事件
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...')

  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('[SW] Installation complete')
        return self.skipWaiting()
      })
  )
})

// 激活事件
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...')

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // 删除旧版本的缓存
          if (cacheName !== STATIC_CACHE &&
              cacheName !== DYNAMIC_CACHE &&
              !cacheName.includes('v3')) {
            console.log('[SW] Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      console.log('[SW] Activation complete')
      return self.clients.claim()
    })
  )
})

// 推送事件处理
self.addEventListener('push', (event) => {
  console.log('[SW] Push event received')

  if (!event.data) {
    console.log('[SW] No data in push event')
    return
  }

  try {
    const data = event.data.json()
    console.log('[SW] Push data:', data)

    const options = {
      body: data.body || '您有一条新消息',
      icon: '/logo/logo-192.png',
      badge: '/logo/logo-96.png',
      image: data.image || null,
      vibrate: [100, 50, 100],
      data: data.data || {},
      requireInteraction: data.requireInteraction || false,
      silent: data.silent || false,
      tag: data.tag || 'default',
      renotify: data.renotify || true,
      actions: data.actions || [
        {
          action: 'open',
          title: '打开应用',
          icon: '/logo/logo-96.png'
        },
        {
          action: 'close',
          title: '关闭'
        }
      ],
      timestamp: Date.now()
    }

    event.waitUntil(
      self.registration.showNotification(
        data.title || '有条工具通知',
        options
      )
    )
  } catch (error) {
    console.error('[SW] Error processing push event:', error)

    // 降级处理：显示基本通知
    event.waitUntil(
      self.registration.showNotification('有条工具', {
        body: '您有一条新消息',
        icon: '/logo/logo-192.png',
        badge: '/logo/logo-96.png'
      })
    )
  }
})

// 通知点击事件
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification click received')

  event.notification.close()

  const action = event.action
  const notificationData = event.notification.data || {}

  event.waitUntil(
    (async () => {
      // 获取所有客户端
      const clients = await self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true
      })

      let targetClient = null

      // 查找已打开的客户端
      for (const client of clients) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          targetClient = client
          break
        }
      }

      if (action === 'close') {
        // 用户点击了关闭按钮
        return
      } else if (action === 'open' || !action) {
        // 用户点击了通知本身或打开按钮
        if (targetClient) {
          // 如果有已打开的窗口，聚焦它
          await targetClient.focus()
          await targetClient.postMessage({
            type: 'NOTIFICATION_CLICK',
            data: notificationData
          })
        } else {
          // 否则打开新窗口
          await self.clients.openWindow(notificationData.url || '/')
        }
      } else if (notificationData.url) {
        // 自定义操作，打开指定URL
        if (targetClient) {
          await targetClient.focus()
          await targetClient.postMessage({
            type: 'NOTIFICATION_CLICK',
            data: notificationData
          })
        } else {
          await self.clients.openWindow(notificationData.url)
        }
      }
    })()
  )
})

// 通知关闭事件
self.addEventListener('notificationclose', (event) => {
  console.log('[SW] Notification closed')

  // 可以在这里记录用户关闭通知的行为
  const notificationData = event.notification.data || {}

  // 发送统计信息（如果需要）
  if (notificationData.analytics) {
    // 可以发送到分析服务
    console.log('[SW] Notification closed analytics:', notificationData)
  }
})

// 后台同步事件
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync event:', event.tag)

  if (event.tag === 'background-sync-notifications') {
    event.waitUntil(doBackgroundSync())
  }
})

// 后台同步处理
async function doBackgroundSync() {
  try {
    // 这里可以执行后台同步任务
    // 例如：获取未读通知、更新缓存等
    console.log('[SW] Performing background sync...')
  } catch (error) {
    console.error('[SW] Background sync error:', error)
  }
}

// 消息事件处理（用于接收来自页面的消息）
self.addEventListener('message', (event) => {
  console.log('[SW] Message received:', event.data)

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }

  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({
      type: 'VERSION',
      version: '1.0.0'
    })
  }
})

// 网络请求拦截
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // 只处理同源请求
  if (url.origin !== self.location.origin) {
    return
  }

  // API 请求：网络优先
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // 缓存成功的API响应
          if (response.ok) {
            const responseClone = response.clone()
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return response
        })
        .catch(() => {
          // 网络失败时尝试从缓存获取
          return caches.match(request)
        })
    )
    return
  }

  // 工具页面：网络优先，缓存备用
  if (url.pathname.startsWith('/tools/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // 缓存成功的响应
          if (response.ok) {
            const responseClone = response.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return response
        })
        .catch(() => {
          // 网络失败时返回缓存
          return caches.match(request)
        })
    )
    return
  }

  // 静态资源：缓存优先
  if (STATIC_ASSETS.some(asset => url.pathname === asset) ||
      url.pathname.startsWith('/_nuxt/') ||
      url.pathname.startsWith('/logo/')) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          return response || fetch(request)
        })
    )
    return
  }

  // 其他请求：直接网络请求
  event.respondWith(fetch(request))
})

// 缓存清理
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CACHE_CLEANUP') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // 清理不需要的缓存
              return !cacheName.includes('v3')
            })
            .map((cacheName) => {
              return caches.delete(cacheName)
            })
        )
      })
    )
  }
})

// 定期缓存清理
setInterval(() => {
  const now = Date.now()
  const maxAge = 7 * 24 * 60 * 60 * 1000 // 7天

  caches.open(DYNAMIC_CACHE).then((cache) => {
    cache.keys().then((requests) => {
      requests.forEach((request) => {
        cache.match(request).then((response) => {
          if (response) {
            const date = response.headers.get('date')
            if (date && (now - new Date(date).getTime()) > maxAge) {
              cache.delete(request)
            }
          }
        })
      })
    })
  })
}, 24 * 60 * 60 * 1000) // 每天执行一次

console.log('[SW] Service worker script loaded')