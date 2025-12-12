// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    ['@vite-pwa/nuxt', {
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      injectRegister: 'auto',
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
        name: '有条工具 - 开发者效率工具箱',
        short_name: '有条工具',
        description: '极简、高效、全能的开发者工具集合，支持编码解码、格式化、加密解密等多种功能',
        theme_color: '#6366f1',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'any',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '48x48',
            type: 'image/x-icon'
          },
          {
            src: 'favicon.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-256.png',
            sizes: '256x256',
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
    }]
  ],

  vite: {
    plugins: []
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
      title: '有条工具 - 开发者的常用的工具集合',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '无广告 · 纯本地计算 · 即开即用的在线工具平台' },
        { name: 'theme-color', content: '#6366f1' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: '有条工具' },
        { name: 'application-name', content: '有条工具' },
        { name: 'msapplication-TileColor', content: '#6366f1' },
        { name: 'msapplication-config', content: '/browserconfig.xml' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/icon-192.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ],
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
  },
  // 定义运行时配置
  runtimeConfig: {
    public: {
      // 可以在这里定义公共配置
    }
  }
})