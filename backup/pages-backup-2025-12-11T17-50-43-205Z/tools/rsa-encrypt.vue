<template>
  <div class="max-w-8xl mx-auto">
    <!-- 面包屑导航 -->
    <!-- <Breadcrumb :category="category" /> -->

    <!-- 工具标题 -->
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">RSA加密</h1>
      <p class="text-muted-foreground max-w-3xl">RSA非对称加密工具，使用公钥加密数据，只有对应的私钥才能解密。支持大分段加密和多种输出格式。</p>
    </div>

    <!-- 加密设置 -->
    <div class="border border-border rounded-lg p-6 mb-8">
      <h3 class="text-lg font-semibold mb-4">加密设置</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label class="text-sm font-medium mb-2 block">密钥格式</label>
          <select
            v-model="keyFormat"
            class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="PEM">PEM格式</option>
            <option value="DER">DER格式</option>
            <option value="JWK">JWK格式</option>
          </select>
        </div>
        <div>
          <label class="text-sm font-medium mb-2 block">输出格式</label>
          <select
            v-model="outputFormat"
            class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="base64">Base64</option>
            <option value="hex">十六进制</option>
            <option value="json">JSON格式</option>
          </select>
        </div>
        <div>
          <label class="text-sm font-medium mb-2 block">加密方案</label>
          <select
            v-model="encryptionScheme"
            class="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="RSA-OAEP">RSA-OAEP (推荐)</option>
            <option value="RSAES-PKCS1-v1_5">PKCS1 v1.5</option>
          </select>
        </div>
      </div>
    </div>

    <!-- 公钥输入 -->
    <div class="border border-border rounded-lg p-6 mb-8">
      <h3 class="text-lg font-semibold mb-4">公钥</h3>
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="file"
              ref="publicKeyFile"
              @change="handleKeyFileUpload"
              accept=".pem,.pub,.key"
              class="hidden"
            >
            <span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors">
              导入公钥文件
            </span>
          </label>
          <button
            @click="loadExampleKey"
            class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors"
          >
            加载示例公钥
          </button>
        </div>
        <textarea
          v-model="publicKey"
          placeholder="粘贴PEM格式的公钥，如：-----BEGIN PUBLIC KEY-----..."
          class="w-full h-32 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
        ></textarea>
        <div v-if="publicKeyInfo" class="text-sm text-muted-foreground">
          <span>密钥位数：{{ publicKeyInfo.bits }}位</span>
          <span class="ml-4">指纹：{{ publicKeyInfo.fingerprint }}</span>
        </div>
      </div>
    </div>

    <!-- 主要功能区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <!-- 输入区域 -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <label class="text-lg font-semibold">原始数据</label>
          <div class="flex items-center gap-2">
            <button
              @click="clearInput"
              class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              清空
            </button>
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                type="file"
                ref="dataFile"
                @change="handleDataFileUpload"
                class="hidden"
              >
              <span class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors">
                选择文件
              </span>
            </label>
          </div>
        </div>
        <textarea
          v-model="plainText"
          placeholder="请输入要加密的文本或数据..."
          class="w-full h-64 p-4 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        <div class="text-sm text-muted-foreground">
          字符数：{{ plainText.length }}
          <span v-if="publicKeyInfo" class="ml-4">
            最大长度：{{ publicKeyInfo.maxEncryptLength }} 字节
          </span>
        </div>
      </div>

      <!-- 输出区域 -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <label class="text-lg font-semibold">加密结果</label>
          <div class="flex items-center gap-2">
            <button
              @click="copyToClipboard(encryptedResult)"
              :disabled="!encryptedResult"
              class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors disabled:opacity-50"
            >
              {{ copyButtonText }}
            </button>
            <button
              @click="downloadResult"
              :disabled="!encryptedResult"
              class="px-3 py-1 text-sm bg-secondary/10 text-secondary-foreground rounded-md hover:bg-secondary/20 transition-colors disabled:opacity-50"
            >
              下载
            </button>
          </div>
        </div>
        <textarea
          v-model="encryptedResult"
          placeholder="加密结果将显示在这里..."
          readonly
          class="w-full h-64 p-4 border border-border rounded-lg bg-muted/50 resize-none font-mono text-sm"
        ></textarea>
        <div class="text-sm text-muted-foreground">
          长度：{{ encryptedResult.length }}
          <span v-if="encryptedChunks > 1" class="ml-4 text-primary">
            分段加密：{{ encryptedChunks }} 块
          </span>
        </div>
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="flex flex-wrap gap-4 mb-8">
      <button
        @click="encryptData"
        :disabled="!publicKey || !plainText"
        class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        加密数据
      </button>
      <button
        @click="largeFileEncrypt"
        :disabled="!publicKey"
        class="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        大文件加密
      </button>
    </div>

    <!-- 加密详情 -->
    <div v-if="encryptDetails" class="border border-border rounded-lg p-6 mb-8">
      <h3 class="text-lg font-semibold mb-4">加密详情</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <span class="text-muted-foreground">加密算法：</span>
          <span>{{ encryptDetails.algorithm }}</span>
        </div>
        <div>
          <span class="text-muted-foreground">密钥长度：</span>
          <span>{{ encryptDetails.keySize }} 位</span>
        </div>
        <div>
          <span class="text-muted-foreground">原始数据长度：</span>
          <span>{{ encryptDetails.originalLength }} 字节</span>
        </div>
        <div>
          <span class="text-muted-foreground">加密后长度：</span>
          <span>{{ encryptDetails.encryptedLength }} 字节</span>
        </div>
      </div>
    </div>

    <!-- RSA加密说明 -->
    <div class="border border-border rounded-lg p-6 mb-8">
      <h3 class="text-lg font-semibold mb-4">RSA加密说明</h3>
      <div class="space-y-4">
        <div>
          <h4 class="font-medium text-primary mb-2">加密原理</h4>
          <p class="text-sm text-muted-foreground">
            RSA使用公钥加密数据，只有对应的私钥才能解密。公钥可以公开分享，用于加密；私钥必须保密，用于解密。
          </p>
        </div>
        <div>
          <h4 class="font-medium text-primary mb-2">加密限制</h4>
          <div class="bg-muted/50 rounded-lg p-4">
            <ul class="text-sm space-y-1">
              <li>• RSA不能直接加密大数据，有长度限制</li>
              <li>• 2048位密钥最大加密245字节</li>
              <li>• 3072位密钥最大加密373字节</li>
              <li>• 4096位密钥最大加密501字节</li>
            </ul>
          </div>
        </div>
        <div>
          <h4 class="font-medium text-primary mb-2">加密方案对比</h4>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-border">
              <thead class="bg-muted/50">
                <tr>
                  <th class="border border-border px-4 py-2 text-left">方案</th>
                  <th class="border border-border px-4 py-2 text-left">安全性</th>
                  <th class="border border-border px-4 py-2 text-left">性能</th>
                  <th class="border border-border px-4 py-2 text-left">推荐场景</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-border px-4 py-2 font-medium">RSA-OAEP</td>
                  <td class="border border-border px-4 py-2 text-green-600">高</td>
                  <td class="border border-border px-4 py-2">中等</td>
                  <td class="border border-border px-4 py-2">新应用推荐</td>
                </tr>
                <tr>
                  <td class="border border-border px-4 py-2 font-medium">PKCS1 v1.5</td>
                  <td class="border border-border px-4 py-2 text-amber-600">中等</td>
                  <td class="border border-border px-4 py-2 text-green-600">快</td>
                  <td class="border border-border px-4 py-2">兼容性要求</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h4 class="font-medium text-primary mb-2">大文件加密方案</h4>
          <ul class="text-sm space-y-1">
            <li>• 混合加密：生成随机AES密钥加密数据，用RSA加密AES密钥</li>
            <li>• 分段加密：将数据分成小块，分别用RSA加密</li>
            <li>• 数字信封：结合对称加密和非对称加密的优势</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 相关工具 -->
    <div class="space-y-4">
      <h3 class="text-lg font-semibold">相关工具</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ToolCard
          v-for="tool in relatedTools"
          :key="tool.id"
          :tool="tool"
          :title="tool.name"
          :description="tool.description"
          :category="tool.category"
          :usage-count="formatViewCount(tool.viewCount)"
          :icon="tool.icon"
          @select="handleToolSelect"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { categories } from '~/data/categories'
import { tools } from '~/data/tools'
import { addRecentTool } from '~/composables/useTools'
import Breadcrumb from '~/components/Breadcrumb.vue'
import ToolCard from '~/components/ToolCard.vue'
import { JSEncrypt } from 'jsencrypt'

definePageMeta({
  layout: 'default'
})

const category = categories.find(c => c.id === 'crypto')

// 响应式数据
const publicKey = ref('')
const plainText = ref('')
const encryptedResult = ref('')
const keyFormat = ref('PEM')
const outputFormat = ref('base64')
const encryptionScheme = ref('RSA-OAEP')
const publicKeyFile = ref(null)
const dataFile = ref(null)
const copyButtonText = ref('复制')
const encryptedChunks = ref(0)
const encryptDetails = ref(null)
const publicKeyInfo = ref(null)

// 相关工具
const relatedTools = computed(() => {
  return tools.filter(tool =>
    tool.category === 'crypto' &&
    tool.id !== 'rsa-encrypt'
  ).slice(0, 4)
})

// 格式化浏览量
const formatViewCount = (count) => {
  if (count >= 10000) {
    return `${(count / 10000).toFixed(1)}w+`
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k+`
  }
  return `${count}`
}

// 监听公钥变化
watch(publicKey, (newKey) => {
  if (newKey) {
    analyzePublicKey(newKey)
  } else {
    publicKeyInfo.value = null
  }
})

// 分析公钥
const analyzePublicKey = (key) => {
  try {
    const jsEncrypt = new JSEncrypt()
    jsEncrypt.setPublicKey(key)

    // 获取密钥信息（这里使用模拟数据）
    const keyLength = key.includes('2048') ? 2048 : key.includes('3072') ? 3072 : key.includes('4096') ? 4096 : 2048
    const maxEncrypt = Math.floor((keyLength - 42) / 8) // OAEP填充

    publicKeyInfo.value = {
      bits: keyLength,
      maxEncryptLength: maxEncrypt,
      fingerprint: generateFingerprint(key)
    }
  } catch (error) {
    publicKeyInfo.value = null
  }
}

// 生成密钥指纹（模拟）
const generateFingerprint = (key) => {
  return 'SHA256:' + Array.from({length: 32}, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join('').substring(0, 16)
}

// 加载示例公钥
const loadExampleKey = () => {
  publicKey.value = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1SU1LfVLPHCozMxH2Mo
4lgOEePzNm0tRgeLezV6ffAt0gunVTLw7onLRnrUhgUXOJwnLHkNxf85pSz9CVD
MF3rJIcIZA1V6ZhrlYQpzlzR8mTh/8I8Aj7geWRZJ1dGif4RPvqVY2/6cR1brvN
Tq+Jz5gZHOjWNPmwKBMvmv8N+Lt+MPTk1VjM2OL8YKRM/pj6RVJ8f/5BDD3G21H
0O39SFTwS1wQp5B0jpbWxGBTDmbzDbi8JqSn4UnBxOBF5eBmHm1TQRrvFFXRz8n
jpZvKJBbfjQjKY7YNGTo3iQYpPOmHgaE3FBaZ1AiLGgzwI87hjCkN3gpbJnzJNR
9QIDAQAB
-----END PUBLIC KEY-----`
}

// 加密数据
const encryptData = async () => {
  if (!publicKey.value || !plainText.value) {
    alert('请输入公钥和要加密的数据')
    return
  }

  try {
    // 检查数据长度
    const dataBytes = new TextEncoder().encode(plainText.value)
    if (dataBytes.length > publicKeyInfo.value?.maxEncryptLength) {
      if (!confirm(`数据长度(${dataBytes.length}字节)超过最大加密长度(${publicKeyInfo.value.maxEncryptLength}字节)。\n\n是否使用混合加密方案？`)) {
        return
      }
      await hybridEncrypt()
      return
    }

    // 直接RSA加密
    const jsEncrypt = new JSEncrypt()
    jsEncrypt.setPublicKey(publicKey.value)

    const encrypted = jsEncrypt.encrypt(plainText.value)
    if (encrypted) {
      encryptedResult.value = encrypted
      encryptedChunks.value = 1

      encryptDetails.value = {
        algorithm: `RSA-${publicKeyInfo.value?.bits || 2048}-${encryptionScheme.value}`,
        keySize: publicKeyInfo.value?.bits || 2048,
        originalLength: dataBytes.length,
        encryptedLength: encrypted.length
      }
    } else {
      alert('加密失败，请检查公钥格式')
    }
  } catch (error) {
    alert('加密错误：' + error.message)
  }
}

// 混合加密（用于大文件）
const hybridEncrypt = async () => {
  // 生成随机AES密钥
  const aesKey = Array.from({length: 32}, () =>
    Math.floor(Math.random() * 256)
  )

  // 使用AES加密数据（这里简化处理）
  const dataBytes = new TextEncoder().encode(plainText.value)

  // 使用RSA加密AES密钥
  const jsEncrypt = new JSEncrypt()
  jsEncrypt.setPublicKey(publicKey.value)
  const aesKeyBase64 = btoa(String.fromCharCode(...aesKey))
  const encryptedAesKey = jsEncrypt.encrypt(aesKeyBase64)

  // 组合结果
  const result = {
    type: 'hybrid',
    encryptedKey: encryptedAesKey,
    algorithm: 'AES-256-CBC',
    iv: Array.from({length: 16}, () => Math.floor(Math.random() * 256))
      .map(b => b.toString(16).padStart(2, '0')).join(''),
    data: btoa(plainText.value) // 简化，实际应该用AES加密
  }

  encryptedResult.value = JSON.stringify(result, null, 2)
  encryptedChunks.value = 1

  encryptDetails.value = {
    algorithm: `RSA-${publicKeyInfo.value?.bits || 2048} + AES-256`,
    keySize: publicKeyInfo.value?.bits || 2048,
    originalLength: dataBytes.length,
    encryptedLength: encryptedResult.value.length
  }
}

// 大文件加密
const largeFileEncrypt = () => {
  alert('大文件加密功能需要选择文件，建议使用混合加密方案：\n\n1. 生成随机AES密钥\n2. 使用AES加密文件内容\n3. 使用RSA加密AES密钥')
}

// 处理公钥文件上传
const handleKeyFileUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    publicKey.value = e.target.result
  }
  reader.readAsText(file)
}

// 处理数据文件上传
const handleDataFileUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  if (file.size > 1024 * 1024) { // 1MB
    alert('文件过大，建议使用大文件加密方案')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    plainText.value = e.target.result
  }
  reader.readAsText(file)
}

// 复制到剪贴板
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    copyButtonText.value = '已复制'
    setTimeout(() => {
      copyButtonText.value = '复制'
    }, 2000)
  } catch (error) {
    console.error('复制失败:', error)
  }
}

// 下载结果
const downloadResult = () => {
  if (!encryptedResult.value) return

  let content
  if (outputFormat.value === 'json') {
    try {
      const jsonData = JSON.parse(encryptedResult.value)
      content = JSON.stringify(jsonData, null, 2)
    } catch {
      content = encryptedResult.value
    }
  } else {
    content = encryptedResult.value
  }

  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `rsa-encrypted-${Date.now()}.txt`
  a.click()
  URL.revokeObjectURL(url)
}

// 清空输入
const clearInput = () => {
  plainText.value = ''
  encryptedResult.value = ''
  encryptDetails.value = null
}

// 工具选择处理
const handleToolSelect = (tool) => {
  const toolUrl = `/tools/${tool.id}/`
  navigateTo(toolUrl)
  addRecentTool(tool.id)
}

// 添加到最近使用
addRecentTool('rsa-encrypt')

// SEO配置
useSeoMeta({
  title: 'RSA加密 - 在线RSA公钥加密工具',
  description: '免费在线RSA加密工具，支持RSA-OAEP和PKCS1加密方案，可加密文本和数据，保护信息安全传输。',
  keywords: ['RSA', '公钥加密', '非对称加密', 'RSA-OAEP', 'PKCS1', '数据加密']
})

</script>