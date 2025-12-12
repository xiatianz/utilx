// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import VitePWA from '@vite-pwa/nuxt'

export default defineNuxtConfig({

  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    VitePWA
  ],

  vite: {
    plugins: []
  },

  // PWA 配置
  pwa: {
    registerType: 'autoUpdate',
    strategies: 'generateSW',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      navigateFallback: '/',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 1 年
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 1 年
            }
          }
        }
      ]
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 30 * 60 * 1000 // 30 分钟
    },
    manifest: {
      name: 'Util.cn - 开发者效率工具箱',
      short_name: 'Util工具箱',
      description: '极简、高效、全能的开发者工具集合，支持编码解码、格式化、加密解密等多种功能',
      theme_color: '#6366f1',
      background_color: '#0f172a',
      display: 'standalone',
      orientation: 'any',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: 'icon-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icon-512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ],
      categories: ['productivity', 'utilities', 'developer'],
      shortcuts: [
        {
          name: 'JSON格式化',
          short_name: 'JSON',
          description: '格式化和验证JSON数据',
          url: '/tools/json-formatter/',
          icons: [{ src: 'icon-192.png', sizes: '192x192' }]
        },
        {
          name: '时间戳转换',
          short_name: '时间戳',
          description: 'Unix时间戳与日期格式转换',
          url: '/tools/unix-timestamp/',
          icons: [{ src: 'icon-192.png', sizes: '192x192' }]
        },
        {
          name: 'Base64编码',
          short_name: 'Base64',
          description: 'Base64编码和解码工具',
          url: '/tools/base64-encoder/',
          icons: [{ src: 'icon-192.png', sizes: '192x192' }]
        }
      ]
    }
  },
  compatibilityDate: '2025-12-10',
  // 更新目录结构配置
  srcDir: 'src/',
  dir: {
    pages: 'pages',
    layouts: 'layouts',
    middleware: 'middleware',
    plugins: 'plugins',
    modules: 'modules',
    public: '../public',
    assets: './assets',
    app: '../app'
  },
  // 配置路由规则
  nitro: {
    prerender: {
      routes: ['/ai', '/crypto', '/dev', '/encode', '/format', '/image', '/network', '/text', '/time', '/all']
    },
    // 确保静态文件可以正确访问
    publicAssets: [
      {
        baseURL: '/blog',
        dir: 'public/blog',
        maxAge: 60 * 60 * 24 * 365 // 1年缓存
      }
    ]
  },
  // 添加初始化脚本来防止主题闪烁
  app: {
    head: {
      script: [
        {
          innerHTML: `
            (function() {
              try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  // 默认使用暗色主题
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                // 如果localStorage不可用，默认使用暗色主题
                document.documentElement.classList.add('dark');
              }
            })();
          `,
          type: 'text/javascript'
        }
      ]
    }
  }
})