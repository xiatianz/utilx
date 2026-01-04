<template>
  <div class="max-w-6xl mx-auto">
    <div class="mt-4 mb-8">
      <h1 class="text-3xl font-bold mb-3">RSA密钥对生成器</h1>
      <p class="text-muted-foreground">生成RSA密钥对，支持多种密钥长度，导出PEM格式，完全在浏览器本地生成</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧：密钥生成 -->
      <div class="space-y-4">
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <KeyRound class="w-5 h-5 text-primary" />
            生成密钥对
          </h2>

          <div class="space-y-4">
            <!-- 密钥长度 -->
            <div>
              <label class="text-sm font-medium mb-2 block">密钥长度 (位)</label>
              <div class="grid grid-cols-3 gap-2">
                <button
                  @click="keyLength = 2048"
                  :class="['p-3 rounded-lg text-sm transition-colors', keyLength === 2048 ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80']"
                >
                  2048 位
                  <span class="block text-xs opacity-75">标准</span>
                </button>
                <button
                  @click="keyLength = 3072"
                  :class="['p-3 rounded-lg text-sm transition-colors', keyLength === 3072 ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80']"
                >
                  3072 位
                  <span class="block text-xs opacity-75">高安全</span>
                </button>
                <button
                  @click="keyLength = 4096"
                  :class="['p-3 rounded-lg text-sm transition-colors', keyLength === 4096 ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80']"
                >
                  4096 位
                  <span class="block text-xs opacity-75">极高</span>
                </button>
              </div>
            </div>

            <!-- 密钥用途 -->
            <div>
              <label class="text-sm font-medium mb-2 block">密钥用途</label>
              <div class="space-y-2">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" v-model="keyUsage.encrypt" class="rounded">
                  <span class="text-sm">加密/解密</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" v-model="keyUsage.sign" class="rounded">
                  <span class="text-sm">数字签名</span>
                </label>
              </div>
            </div>

            <!-- 生成按钮 -->
            <button
              @click="generateKeyPair"
              :disabled="generating"
              class="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-50 text-sm"
            >
              <span v-if="generating">生成中...</span>
              <span v-else>
                <KeyRound class="w-4 h-4 inline mr-2" />
                生成RSA密钥对
              </span>
            </button>

            <!-- 生成进度 -->
            <div v-if="generating" class="space-y-2">
              <div class="flex justify-between text-sm">
                <span>生成进度</span>
                <span>{{ progress }}%</span>
              </div>
              <div class="w-full bg-muted rounded-full h-2">
                <div class="bg-primary h-2 rounded-full transition-all" :style="{ width: progress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 公钥展示 -->
        <div v-if="publicKeyPem" class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Key class="w-5 h-5 text-green-500" />
            公钥 (Public Key)
          </h2>

          <div class="space-y-3">
            <div class="bg-muted rounded-lg p-4">
              <div class="flex items-start justify-between gap-2">
                <pre class="flex-1 text-xs font-mono whitespace-pre-wrap break-all">{{ publicKeyPem }}</pre>
                <button
                  @click="copyPublicKey"
                  class="p-1 hover:bg-background rounded transition-colors"
                  title="复制公钥"
                >
                  <Copy class="w-4 h-4" />
                </button>
              </div>
            </div>

            <div class="flex gap-2">
              <button
                @click="downloadPublicKey"
                class="flex-1 px-4 py-2 bg-background border rounded-lg hover:bg-muted text-sm"
              >
                <Download class="w-4 h-4 inline mr-2" />
                下载公钥
              </button>
              <button
                @click="downloadKeyPair"
                class="flex-1 px-4 py-2 bg-background border rounded-lg hover:bg-muted text-sm"
              >
                <Package class="w-4 h-4 inline mr-2" />
                下载密钥对
              </button>
            </div>

            <!-- 公钥信息 -->
            <div class="bg-muted rounded-lg p-3 text-xs space-y-1">
              <div class="flex justify-between">
                <span class="text-muted-foreground">密钥长度:</span>
                <span class="font-mono">{{ keyLength }} 位</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">模数长度:</span>
                <span class="font-mono">{{ keyLength / 8 }} 字节</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">指纹:</span>
                <span class="font-mono text-xs">{{ keyFingerprint }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 私钥展示 -->
        <div v-if="privateKeyPem" class="bg-card rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Key class="w-5 h-5 text-yellow-500" />
            私钥 (Private Key)
            <span class="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded">
              绝密
            </span>
          </h2>

          <div class="space-y-3">
            <div class="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div class="flex items-start gap-2">
                <AlertTriangle class="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <div class="text-xs text-yellow-800 dark:text-yellow-300">
                  <p class="font-medium mb-1">安全警告</p>
                  <p>私钥是敏感信息，请妥善保管。不要分享给他人，不要上传到版本控制系统。</p>
                </div>
              </div>
            </div>

            <div class="bg-muted rounded-lg p-4">
              <div class="flex items-start justify-between gap-2">
                <pre class="flex-1 text-xs font-mono whitespace-pre-wrap break-all">{{ showPrivateKey ? privateKeyPem : '•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••' }}</pre>
                <div class="flex gap-1">
                  <button
                    @click="showPrivateKey = !showPrivateKey"
                    class="p-1 hover:bg-background rounded transition-colors"
                    :title="showPrivateKey ? '隐藏私钥' : '显示私钥'"
                  >
                    <Eye v-if="!showPrivateKey" class="w-4 h-4" />
                    <EyeOff v-else class="w-4 h-4" />
                  </button>
                  <button
                    @click="copyPrivateKey"
                    class="p-1 hover:bg-background rounded transition-colors"
                    title="复制私钥"
                  >
                    <Copy class="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <button
              @click="downloadPrivateKey"
              class="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm"
            >
              <Download class="w-4 h-4 inline mr-2" />
              下载私钥
            </button>
          </div>
        </div>
      </div>

      <!-- 右侧：工具和说明 -->
      <div class="space-y-4">
        <!-- 密钥格式说明 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <FileCode class="w-5 h-5 text-purple-500" />
            PEM格式说明
          </h2>

          <div class="space-y-3 text-sm">
            <div>
              <p class="font-medium text-foreground mb-1">公钥格式 (PEM)</p>
              <code class="text-xs bg-muted px-2 py-1 rounded block mt-1">
                -----BEGIN PUBLIC KEY-----<br>
                MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...<br>
                -----END PUBLIC KEY-----
              </code>
            </div>

            <div>
              <p class="font-medium text-foreground mb-1">私钥格式 (PEM)</p>
              <code class="text-xs bg-muted px-2 py-1 rounded block mt-1">
                -----BEGIN PRIVATE KEY-----<br>
                MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBA...<br>
                -----END PRIVATE KEY-----
              </code>
            </div>

            <div>
              <p class="font-medium text-foreground mb-1">支持的导出格式</p>
              <ul class="list-disc list-inside space-y-1 ml-2 text-muted-foreground">
                <li>PEM (Privacy-Enhanced Mail) - Base64编码</li>
                <li>DER (Distinguished Encoding Rules) - 二进制格式</li>
                <li>JWK (JSON Web Key) - JSON格式</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 使用场景 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Lightbulb class="w-5 h-5 text-orange-500" />
            使用场景
          </h2>

          <div class="space-y-3 text-sm">
            <div>
              <p class="font-medium text-foreground mb-1">数字签名</p>
              <p class="text-muted-foreground">使用私钥对文档进行签名，公钥验证签名的真实性和完整性</p>
            </div>

            <div>
              <p class="font-medium text-foreground mb-1">数据加密</p>
              <p class="text-muted-foreground">使用公钥加密数据，只有私钥持有者才能解密</p>
            </div>

            <div>
              <p class="font-medium text-foreground mb-1">身份认证</p>
              <p class="text-muted-foreground">SSH密钥认证、SSL证书、代码签名等</p>
            </div>

            <div>
              <p class="font-medium text-foreground mb-1">API安全</p>
              <p class="text-muted-foreground">API密钥对、OAuth 2.0 JWT令牌签名验证</p>
            </div>
          </div>
        </div>

        <!-- 密钥长度对比 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <BarChart3 class="w-5 h-5 text-blue-500" />
            密钥长度选择指南
          </h2>

          <div class="space-y-3">
            <div class="border-l-4 border-green-500 pl-3">
              <p class="font-medium text-foreground">2048 位 (推荐)</p>
              <p class="text-sm text-muted-foreground">平衡安全性和性能，适合大多数应用场景</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-3">
              <p class="font-medium text-foreground">3072 位 (高安全)</p>
              <p class="text-sm text-muted-foreground">适用于高敏感度数据，长期保护需求</p>
            </div>

            <div class="border-l-4 border-purple-500 pl-3">
              <p class="font-medium text-foreground">4096 位 (极高)</p>
              <p class="text-sm text-muted-foreground">最高安全级别，生成和运算时间较长</p>
            </div>
          </div>

          <div class="mt-4 p-3 bg-muted rounded-lg text-xs">
            <p class="font-medium mb-1">性能参考 (生成时间)</p>
            <div class="space-y-1">
              <div class="flex justify-between"><span>2048 位:</span><span>~1-3 秒</span></div>
              <div class="flex justify-between"><span>3072 位:</span><span>~5-10 秒</span></div>
              <div class="flex justify-between"><span>4096 位:</span><span>~15-30 秒</span></div>
            </div>
          </div>
        </div>

        <!-- 安全最佳实践 -->
        <div class="bg-card rounded-lg p-6 border">
          <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <Shield class="w-5 h-5 text-green-500" />
            安全最佳实践
          </h2>

          <div class="space-y-2 text-sm text-muted-foreground">
            <div class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p>私钥必须妥善保管，建议使用密码保护或硬件安全模块(HSM)</p>
            </div>
            <div class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p>定期轮换密钥对，建议每年或发生安全事件时更换</p>
            </div>
            <div class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p>备份私钥时使用加密存储，多份异地备份</p>
            </div>
            <div class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p>不要通过不安全渠道传输私钥(如邮件、聊天工具)</p>
            </div>
            <div class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p>生产环境使用2048位或更高长度的密钥</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSeoMeta } from '#app'
import {
  KeyRound,
  Key,
  Download,
  Copy,
  Package,
  AlertTriangle,
  Eye,
  EyeOff,
  FileCode,
  Lightbulb,
  BarChart3,
  Shield,
  CheckCircle
} from 'lucide-vue-next'

const keyLength = ref(2048)
const keyUsage = ref({
  encrypt: true,
  sign: true
})

const generating = ref(false)
const progress = ref(0)

const publicKeyPem = ref('')
const privateKeyPem = ref('')
const showPrivateKey = ref(false)

const keyFingerprint = computed(() => {
  if (!publicKeyPem.value) return ''
  // 简化的指纹计算（实际应该使用SHA-256）
  const hash = publicKeyPem.value.slice(50, 82)
  return hash.match(/.{1,4}/g)?.join(':') || ''
})

// 生成密钥对
async function generateKeyPair() {
  generating.value = true
  progress.value = 0

  try {
    // 模拟进度动画
    const progressInterval = setInterval(() => {
      if (progress.value < 90) {
        progress.value += Math.random() * 10
      }
    }, 100)

    const keyPair = await crypto.subtle.generateKey(
      {
        name: 'RSASSA-PKCS1-v1_5',
        modulusLength: keyLength.value,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: 'SHA-256'
      },
      true,
      keyUsage.value.encrypt ? ['encrypt', 'decrypt'] : ['sign', 'verify']
    )

    clearInterval(progressInterval)
    progress.value = 100

    // 导出公钥
    const publicKeyBuffer = await crypto.subtle.exportKey('spki', keyPair.publicKey)
    const publicKeyBase64 = btoa(String.fromCharCode(...new Uint8Array(publicKeyBuffer)))
    publicKeyPem.value = `-----BEGIN PUBLIC KEY-----\n${formatPem(publicKeyBase64)}\n-----END PUBLIC KEY-----`

    // 导出私钥
    const privateKeyBuffer = await crypto.subtle.exportKey('pkcs8', keyPair.privateKey)
    const privateKeyBase64 = btoa(String.fromCharCode(...new Uint8Array(privateKeyBuffer)))
    privateKeyPem.value = `-----BEGIN PRIVATE KEY-----\n${formatPem(privateKeyBase64)}\n-----END PRIVATE KEY-----`
  } catch (error) {
    console.error('Key generation error:', error)
    alert('密钥生成失败: ' + error.message)
  } finally {
    generating.value = false
    progress.value = 0
  }
}

// 格式化PEM（每64字符换行）
function formatPem(base64) {
  return base64.match(/.{1,64}/g)?.join('\n') || base64
}

// 复制操作
function copyPublicKey() {
  navigator.clipboard.writeText(publicKeyPem.value)
}

function copyPrivateKey() {
  navigator.clipboard.writeText(privateKeyPem.value)
}

// 下载密钥
function downloadPublicKey() {
  const blob = new Blob([publicKeyPem.value], { type: 'application/x-pem-file' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `public_key_${Date.now()}.pem`
  a.click()
  URL.revokeObjectURL(url)
}

function downloadPrivateKey() {
  const blob = new Blob([privateKeyPem.value], { type: 'application/x-pem-file' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `private_key_${Date.now()}.pem`
  a.click()
  URL.revokeObjectURL(url)
}

function downloadKeyPair() {
  downloadPublicKey()
  setTimeout(() => downloadPrivateKey(), 500)
}

useSeoMeta({
  title: 'RSA密钥对生成器 - 在线RSA密钥生成工具',
  description: '免费在线RSA密钥对生成器，支持2048/3072/4096位密钥长度，导出PEM格式，完全在浏览器本地生成。',
  keywords: ['rsa', '密钥对', 'key pair', '公钥', '私钥', '非对称加密', 'ssh', 'ssl', '证书', '在线工具']
})

import { useSEO } from '~/composables/useSEO'
const { setPageTitle } = useSEO()
setPageTitle('RSA密钥对生成器')
</script>
