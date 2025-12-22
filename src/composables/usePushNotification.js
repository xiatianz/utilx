// Web Push API composable
import { ref, onMounted, onUnmounted } from 'vue'

export const usePushNotification = () => {
  const isSupported = ref(false)
  const isSubscribed = ref(false)
  const subscription = ref(null)
  const permission = ref('default')

  // 检查浏览器支持
  const checkSupport = () => {
    isSupported.value = 'serviceWorker' in navigator && 'PushManager' in window
    return isSupported.value
  }

  // 检查当前权限状态
  const checkPermission = () => {
    if ('Notification' in window) {
      permission.value = Notification.permission
    }
    return permission.value
  }

  // 请求通知权限
  const requestPermission = async () => {
    if (!checkSupport()) {
      throw new Error('Push notifications are not supported')
    }

    if (!('Notification' in window)) {
      throw new Error('Notification API is not supported')
    }

    const result = await Notification.requestPermission()
    permission.value = result

    if (result !== 'granted') {
      throw new Error('Notification permission denied')
    }

    return result
  }

  // 注册Service Worker并订阅推送
  const subscribeToPush = async () => {
    if (!checkSupport()) {
      throw new Error('Push notifications are not supported')
    }

    try {
      // 请求权限
      await requestPermission()

      // 注册Service Worker
      const registration = await navigator.serviceWorker.ready

      // 创建推送订阅
      const pushSubscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          // 这里应该是您的VAPID公钥
          process.env.VUE_APP_VAPID_PUBLIC_KEY ||
          'BMxFTZYLqoGkUqJGZt8LkPd2h8vCjG4nKZPd2h8vCjG4nKZPd2h8vCjG4nKZ'
        )
      })

      subscription.value = pushSubscription
      isSubscribed.value = true

      // 保存订阅信息到本地存储
      localStorage.setItem('pushSubscription', JSON.stringify(pushSubscription))

      return pushSubscription
    } catch (error) {
      console.error('Failed to subscribe to push notifications:', error)
      throw error
    }
  }

  // 取消订阅
  const unsubscribeFromPush = async () => {
    if (!subscription.value) {
      return
    }

    try {
      await subscription.value.unsubscribe()
      subscription.value = null
      isSubscribed.value = false
      localStorage.removeItem('pushSubscription')
    } catch (error) {
      console.error('Failed to unsubscribe from push notifications:', error)
      throw error
    }
  }

  // 恢复已保存的订阅
  const restoreSubscription = async () => {
    if (!checkSupport()) {
      return
    }

    try {
      const savedSubscription = localStorage.getItem('pushSubscription')
      if (!savedSubscription) {
        return
      }

      const subscriptionData = JSON.parse(savedSubscription)
      const registration = await navigator.serviceWorker.ready

      // 验证订阅是否仍然有效
      const existingSubscription = await registration.pushManager.getSubscription()
      if (existingSubscription) {
        subscription.value = existingSubscription
        isSubscribed.value = true
      } else {
        // 订阅已失效，清除本地存储
        localStorage.removeItem('pushSubscription')
      }
    } catch (error) {
      console.error('Failed to restore push subscription:', error)
      localStorage.removeItem('pushSubscription')
    }
  }

  // 发送本地测试通知
  const showLocalNotification = (title, options = {}) => {
    if (permission.value === 'granted') {
      return new Notification(title, {
        icon: '/logo/logo-192.png',
        badge: '/logo/logo-96.png',
        vibrate: [100, 50, 100],
        ...options
      })
    }
  }

  // 获取订阅状态
  const getSubscriptionStatus = () => {
    return {
      isSupported: isSupported.value,
      isSubscribed: isSubscribed.value,
      permission: permission.value,
      subscription: subscription.value
    }
  }

  // 工具函数：将base64字符串转换为Uint8Array
  const urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4)
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  // 初始化
  const init = async () => {
    checkSupport()
    checkPermission()
    if (isSupported.value) {
      await restoreSubscription()
    }
  }

  onMounted(() => {
    init()
  })

  return {
    isSupported,
    isSubscribed,
    permission,
    subscription,
    checkSupport,
    checkPermission,
    requestPermission,
    subscribeToPush,
    unsubscribeFromPush,
    showLocalNotification,
    getSubscriptionStatus
  }
}