export default defineNuxtPlugin(() => {

  // 监控页面性能
  const observePagePerformance = () => {
    // 监控 Long Tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn(`Long Task detected: ${entry.duration}ms`, entry)

            // 发送到分析服务
            if (typeof gtag !== 'undefined') {
              gtag('event', 'long_task', {
                event_category: 'Performance',
                value: Math.round(entry.duration),
                non_interaction: true
              })
            }
          }
        })
      })

      observer.observe({ entryTypes: ['longtask'] })
    }

    // 监控资源加载
    const resourceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 1000) {
          console.warn(`Slow resource: ${entry.name} took ${entry.duration}ms`)
        }
      })
    })

    resourceObserver.observe({ entryTypes: ['resource'] })
  }

  // 监控用户交互
  const observeUserInteractions = () => {
    let clickCount = 0
    let scrollDepth = 0
    let timeOnPage = 0

    // 点击统计
    document.addEventListener('click', () => {
      clickCount++
    })

    // 滚动深度
    let maxScroll = 0
    window.addEventListener('scroll', () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      )
      maxScroll = Math.max(maxScroll, scrollPercentage)
    })

    // 页面停留时间
    const startTime = Date.now()

    // 页面卸载时发送数据
    const sendAnalytics = () => {
      timeOnPage = Date.now() - startTime
      scrollDepth = maxScroll

      // 发送到分析服务
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_interaction', {
          event_category: 'User Engagement',
          custom_parameters: {
            click_count: clickCount,
            scroll_depth: scrollDepth,
            time_on_page: Math.round(timeOnPage / 1000)
          }
        })
      }

      // 本地存储
      const interactions = JSON.parse(localStorage.getItem('userInteractions') || '[]')
      interactions.push({
        url: window.location.pathname,
        clickCount,
        scrollDepth,
        timeOnPage,
        timestamp: new Date().toISOString()
      })

      // 只保留最近50条记录
      if (interactions.length > 50) {
        interactions.splice(0, interactions.length - 50)
      }

      localStorage.setItem('userInteractions', JSON.stringify(interactions))
    }

    // 页面卸载时发送
    window.addEventListener('beforeunload', sendAnalytics)
    // SPA 路由切换时发送
    window.addEventListener('popstate', sendAnalytics)
  }

  // 初始化监控
  if (process.client) {
    observePagePerformance()
    observeUserInteractions()
  }

  // 提供全局访问
  provide('performanceMonitor', {
    getInteractions: () => JSON.parse(localStorage.getItem('userInteractions') || '[]'),
    getPerformanceMetrics: () => {
      // 返回原生性能指标
      if (!process.client) return {}

      const navigation = performance.getEntriesByType('navigation')[0]
      const paint = performance.getEntriesByType('paint')

      return {
        // 页面加载时间
        pageLoadTime: navigation?.loadEventEnd - navigation?.loadEventStart,
        // DOM 解析时间
        domParseTime: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,
        // 首次绘制时间
        firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
        // 首次内容绘制时间
        firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
        // 资源加载统计
        resourceCount: performance.getEntriesByType('resource').length
      }
    }
  })
})