<template>
  <div class="min-h-screen bg-gray-50">
    <!-- <<Breadcrumb :items="breadcrumbItems" /> -->

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- 页面标题 -->
      <div class="text-center mb-8">
        <div class="flex justify-center items-center mb-4">
          <div class="p-3 bg-indigo-100 rounded-lg">
            <Icon name="lucide:database" class="h-8 w-8 text-indigo-600" />
          </div>
        </div>
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Mock数据生成器</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          生成各种格式的模拟数据，支持JSON、CSV、SQL等格式，自定义字段类型和数量
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 左侧配置面板 -->
        <div class="lg:col-span-1 space-y-6">
          <!-- 数据配置 -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-lg font-semibold mb-4 flex items-center">
              <Icon name="lucide:settings" class="h-5 w-5 mr-2" />
              数据配置
            </h2>

            <div class="space-y-4">
              <!-- 数据格式 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">输出格式</label>
                <select
                  v-model="config.format"
                  @change="updateOutput"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="json">JSON</option>
                  <option value="csv">CSV</option>
                  <option value="sql">SQL</option>
                  <option value="xml">XML</option>
                  <option value="yaml">YAML</option>
                </select>
              </div>

              <!-- 记录数量 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  记录数量: {{ config.count }}
                </label>
                <input
                  v-model.number="config.count"
                  type="range"
                  min="1"
                  max="100"
                  @input="updateOutput"
                  class="w-full"
                />
              </div>

              <!-- 数组包装 -->
              <div v-if="config.format === 'json'">
                <label class="flex items-center">
                  <input
                    v-model="config.wrapArray"
                    type="checkbox"
                    class="mr-2"
                    @change="updateOutput"
                  />
                  <span class="text-sm">包装为数组</span>
                </label>
              </div>
            </div>
          </div>

          <!-- 字段配置 -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-semibold flex items-center">
                <Icon name="lucide:layers" class="h-5 w-5 mr-2" />
                字段配置
              </h2>
              <button
                @click="addField"
                class="text-sm text-indigo-600 hover:text-indigo-700"
              >
                添加字段
              </button>
            </div>

            <div class="space-y-3">
              <div
                v-for="(field, index) in config.fields"
                :key="index"
                class="p-3 bg-gray-50 rounded-lg"
              >
                <div class="grid grid-cols-2 gap-2 mb-2">
                  <input
                    v-model="field.name"
                    type="text"
                    placeholder="字段名"
                    class="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                  <select
                    v-model="field.type"
                    @change="updateOutput"
                    class="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="string">字符串</option>
                    <option value="number">数字</option>
                    <option value="email">邮箱</option>
                    <option value="name">姓名</option>
                    <option value="phone">电话</option>
                    <option value="address">地址</option>
                    <option value="company">公司</option>
                    <option value="job">职位</option>
                    <option value="date">日期</option>
                    <option value="datetime">日期时间</option>
                    <option value="boolean">布尔值</option>
                    <option value="uuid">UUID</option>
                    <option value="url">URL</option>
                    <option value="ip">IP地址</option>
                    <option value="color">颜色</option>
                    <option value="word">单词</option>
                    <option value="sentence">句子</option>
                    <option value="paragraph">段落</option>
                    <option value="country">国家</option>
                    <option value="city">城市</option>
                    <option value="zipcode">邮编</option>
                    <option value="creditCard">信用卡号</option>
                    <option value="lorem">Lorem Ipsum</option>
                    <option value="enum">枚举值</option>
                    <option value="range">范围值</option>
                  </select>
                </div>

                <!-- 枚举值配置 -->
                <div v-if="field.type === 'enum'" class="mb-2">
                  <input
                    v-model="field.enumValues"
                    type="text"
                    placeholder="选项1,选项2,选项3"
                    class="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>

                <!-- 范围值配置 -->
                <div v-if="field.type === 'range'" class="grid grid-cols-2 gap-2">
                  <input
                    v-model.number="field.min"
                    type="number"
                    placeholder="最小值"
                    class="px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                  <input
                    v-model.number="field.max"
                    type="number"
                    placeholder="最大值"
                    class="px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>

                <!-- 删除按钮 -->
                <button
                  @click="removeField(index)"
                  class="mt-2 text-sm text-red-600 hover:text-red-700"
                >
                  删除字段
                </button>
              </div>
            </div>
          </div>

          <!-- 预设模板 -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-lg font-semibold mb-4 flex items-center">
              <Icon name="lucide:bookmark" class="h-5 w-5 mr-2" />
              预设模板
            </h2>

            <div class="space-y-2">
              <button
                v-for="template in templates"
                :key="template.name"
                @click="applyTemplate(template)"
                class="w-full text-left px-3 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <div class="font-medium text-sm">{{ template.name }}</div>
                <div class="text-xs text-gray-500">{{ template.description }}</div>
              </button>
            </div>
          </div>
        </div>

        <!-- 右侧结果面板 -->
        <div class="lg:col-span-2 space-y-6">
          <!-- 生成的数据 -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-xl font-semibold flex items-center">
                <Icon name="lucide:code" class="h-6 w-6 mr-2 text-indigo-600" />
                生成的数据
              </h3>
              <div class="flex space-x-2">
                <button
                  @click="copyData"
                  class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors flex items-center text-sm"
                >
                  <Icon name="lucide:copy" class="h-4 w-4 mr-1" />
                  复制
                </button>
                <button
                  @click="downloadData"
                  class="px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors flex items-center text-sm"
                >
                  <Icon name="lucide:download" class="h-4 w-4 mr-1" />
                  下载
                </button>
                <button
                  @click="regenerateData"
                  class="px-4 py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors flex items-center text-sm"
                >
                  <Icon name="lucide:refresh-cw" class="h-4 w-4 mr-1" />
                  重新生成
                </button>
              </div>
            </div>

            <!-- 数据预览 -->
            <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre class="text-sm"><code>{{ generatedData }}</code></pre>
            </div>
          </div>

          <!-- 数据统计 -->
          <div v-if="generatedData" class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-lg font-semibold mb-4 flex items-center">
              <Icon name="lucide:bar-chart" class="h-5 w-5 mr-2" />
              数据统计
            </h3>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-gray-50 rounded-lg p-3">
                <div class="text-xs text-gray-500">记录数</div>
                <div class="font-semibold">{{ config.count }}</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-3">
                <div class="text-xs text-gray-500">字段数</div>
                <div class="font-semibold">{{ config.fields.length }}</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-3">
                <div class="text-xs text-gray-500">数据大小</div>
                <div class="font-semibold">{{ formatDataSize(generatedData.length) }}</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-3">
                <div class="text-xs text-gray-500">格式</div>
                <div class="font-semibold uppercase">{{ config.format }}</div>
              </div>
            </div>
          </div>

          <!-- 使用示例 -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-lg font-semibold mb-4 flex items-center">
              <Icon name="lucide:lightbulb" class="h-5 w-5 mr-2" />
              使用示例
            </h3>

            <div class="space-y-4">
              <div>
                <h4 class="text-sm font-medium text-gray-700 mb-2">JavaScript (fetch)</h4>
                <div class="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
                  <pre class="text-xs"><code>fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));</code></pre>
                </div>
              </div>

              <div>
                <h4 class="text-sm font-medium text-gray-700 mb-2">Python (requests)</h4>
                <div class="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
                  <pre class="text-xs"><code>import requests
response = requests.get('/api/data')
data = response.json()
print(data)</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useSeoMeta } from 'nuxt/app'
import Breadcrumb from '~/components/Breadcrumb.vue'

// SEO配置
useSeoMeta({
  title: 'Mock数据生成器 - 在线模拟数据生成工具',
  meta: [
    { name: 'description', content: '免费在线Mock数据生成器，支持JSON、CSV、SQL等多种格式，自定义字段类型，快速生成测试数据。' },
    { name: 'keywords', content: 'Mock数据,测试数据生成,JSON生成器,测试工具,假数据' }
  ]
})

// 面包屑导航
const breadcrumbItems = [
  { name: '首页', path: '/' },
  { name: '开发辅助', path: '/dev' },
  { name: 'Mock数据生成', path: '/tools/mock-data' }
]

// 响应式数据
const generatedData = ref('')

// 配置
const config = ref({
  format: 'json',
  count: 10,
  wrapArray: true,
  fields: [
    { name: 'id', type: 'number' },
    { name: 'name', type: 'name' },
    { name: 'email', type: 'email' },
    { name: 'phone', type: 'phone' }
  ]
})

// 预设模板
const templates = [
  {
    name: '用户信息',
    description: '包含基本用户信息的模板',
    fields: [
      { name: 'id', type: 'number' },
      { name: 'username', type: 'name' },
      { name: 'email', type: 'email' },
      { name: 'phone', type: 'phone' },
      { name: 'address', type: 'address' },
      { name: 'created_at', type: 'datetime' }
    ]
  },
  {
    name: '电商订单',
    description: '电商订单数据模板',
    fields: [
      { name: 'order_id', type: 'uuid' },
      { name: 'customer_name', type: 'name' },
      { name: 'product_name', type: 'word' },
      { name: 'quantity', type: 'range', min: 1, max: 10 },
      { name: 'price', type: 'range', min: 10, max: 1000 },
      { name: 'status', type: 'enum', enumValues: 'pending,paid,shipped,delivered' }
    ]
  },
  {
    name: '文章内容',
    description: '文章和博客数据模板',
    fields: [
      { name: 'id', type: 'number' },
      { name: 'title', type: 'sentence' },
      { name: 'content', type: 'paragraph' },
      { name: 'author', type: 'name' },
      { name: 'tags', type: 'word' },
      { name: 'published', type: 'boolean' }
    ]
  }
]

// Mock数据生成函数
const mockGenerators = {
  string: () => 'Lorem ipsum dolor sit amet',
  number: () => Math.floor(Math.random() * 1000),
  email: () => {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'example.com']
    const username = Math.random().toString(36).substring(7)
    return `${username}@${domains[Math.floor(Math.random() * domains.length)]}`
  },
  name: () => {
    const firstNames = ['张', '李', '王', '刘', '陈', '杨', '赵', '黄', '周', '吴']
    const lastNames = ['伟', '芳', '娜', '秀英', '敏', '静', '丽', '强', '磊', '洋']
    return firstNames[Math.floor(Math.random() * firstNames.length)] + lastNames[Math.floor(Math.random() * lastNames.length)]
  },
  phone: () => '1' + Math.floor(Math.random() * 9000000000 + 1000000000).toString(),
  address: () => {
    const streets = ['中山路', '人民路', '解放路', '建设路', '和平路']
    const number = Math.floor(Math.random() * 999 + 1)
    return `${number}号${streets[Math.floor(Math.random() * streets.length)]}`
  },
  company: () => {
    const companies = ['阿里巴巴', '腾讯', '百度', '字节跳动', '美团', '滴滴', '小米', '京东']
    return companies[Math.floor(Math.random() * companies.length)]
  },
  job: () => {
    const jobs = ['工程师', '设计师', '产品经理', '销售', '市场', '运营', '人事', '财务']
    return jobs[Math.floor(Math.random() * jobs.length)]
  },
  date: () => new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0],
  datetime: () => new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)).toISOString(),
  boolean: () => Math.random() > 0.5,
  uuid: () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  },
  url: () => `https://example.com/${Math.random().toString(36).substring(7)}`,
  ip: () => `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
  color: () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'),
  word: () => {
    const words = ['apple', 'banana', 'orange', 'grape', 'watermelon', 'strawberry', 'pineapple', 'mango']
    return words[Math.floor(Math.random() * words.length)]
  },
  sentence: () => {
    const sentences = ['这是一个测试句子', 'Lorem ipsum dolor sit amet', '今天天气很好', 'Hello World']
    return sentences[Math.floor(Math.random() * sentences.length)]
  },
  paragraph: () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  country: () => {
    const countries = ['中国', '美国', '日本', '英国', '法国', '德国', '加拿大', '澳大利亚']
    return countries[Math.floor(Math.random() * countries.length)]
  },
  city: () => {
    const cities = ['北京', '上海', '广州', '深圳', '杭州', '南京', '成都', '武汉']
    return cities[Math.floor(Math.random() * cities.length)]
  },
  zipcode: () => Math.floor(100000 + Math.random() * 900000).toString(),
  creditCard: () => {
    let card = ''
    for (let i = 0; i < 16; i++) {
      if (i > 0 && i % 4 === 0) card += ' '
      card += Math.floor(Math.random() * 10)
    }
    return card
  },
  lorem: () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  enum: (field) => {
    const values = field.enumValues ? field.enumValues.split(',') : ['A', 'B', 'C']
    return values[Math.floor(Math.random() * values.length)].trim()
  },
  range: (field) => {
    const min = field.min || 0
    const max = field.max || 100
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}

// 监听配置变化
watch(config, () => {
  updateOutput()
}, { deep: true })

// 方法
const updateOutput = () => {
  if (config.value.fields.length === 0) {
    generatedData.value = ''
    return
  }

  const data = []

  for (let i = 0; i < config.value.count; i++) {
    const record = {}

    config.value.fields.forEach(field => {
      if (field.name && field.type) {
        if (field.type === 'enum' || field.type === 'range') {
          record[field.name] = mockGenerators[field.type](field)
        } else {
          record[field.name] = mockGenerators[field.type]()
        }
      }
    })

    data.push(record)
  }

  // 根据格式输出
  switch (config.value.format) {
    case 'json':
      generatedData.value = JSON.stringify(config.value.wrapArray ? data : data[0], null, 2)
      break
    case 'csv':
      generatedData.value = generateCSV(data)
      break
    case 'sql':
      generatedData.value = generateSQL(data)
      break
    case 'xml':
      generatedData.value = generateXML(data)
      break
    case 'yaml':
      generatedData.value = generateYAML(data)
      break
  }
}

const generateCSV = (data) => {
  if (data.length === 0) return ''

  const headers = Object.keys(data[0])
  const csvRows = [headers.join(',')]

  for (const row of data) {
    const values = headers.map(header => {
      const value = row[header]
      const escaped = String(value).replace(/"/g, '""')
      return `"${escaped}"`
    })
    csvRows.push(values.join(','))
  }

  return csvRows.join('\n')
}

const generateSQL = (data) => {
  if (data.length === 0) return ''

  const tableName = 'mock_data'
  const columns = Object.keys(data[0])

  let sql = `-- 插入数据到 ${tableName}\n`
  sql += `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES\n`

  const values = data.map(row => {
    const vals = columns.map(col => {
      const value = row[col]
      if (typeof value === 'string') {
        return `'${value.replace(/'/g, "''")}'`
      } else if (typeof value === 'boolean') {
        return value ? '1' : '0'
      }
      return value
    })
    return `(${vals.join(', ')})`
  })

  sql += values.join(',\n') + ';'
  return sql
}

const generateXML = (data) => {
  if (data.length === 0) return ''

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<root>\n'

  data.forEach((record, index) => {
    xml += '  <record>\n'
    Object.entries(record).forEach(([key, value]) => {
      xml += `    <${key}>${value}</${key}>\n`
    })
    xml += '  </record>\n'
  })

  xml += '</root>'
  return xml
}

const generateYAML = (data) => {
  if (data.length === 0) return ''

  let yaml = '- data:\n'

  data.forEach(record => {
    Object.entries(record).forEach(([key, value]) => {
      yaml += `    ${key}: ${value}\n`
    })
  })

  return yaml
}

const addField = () => {
  config.value.fields.push({
    name: '',
    type: 'string'
  })
}

const removeField = (index) => {
  config.value.fields.splice(index, 1)
  updateOutput()
}

const applyTemplate = (template) => {
  config.value.fields = [...template.fields]
  updateOutput()
}

const copyData = () => {
  navigator.clipboard.writeText(generatedData.value).then(() => {
    alert('数据已复制到剪贴板')
  })
}

const downloadData = () => {
  const extensions = {
    json: 'json',
    csv: 'csv',
    sql: 'sql',
    xml: 'xml',
    yaml: 'yaml'
  }

  const blob = new Blob([generatedData.value], {
    type: 'text/plain;charset=utf-8'
  })

  const link = document.createElement('a')
  link.download = `mock_data.${extensions[config.value.format]}`
  link.href = URL.createObjectURL(blob)
  link.click()
  URL.revokeObjectURL(link.href)
}

const regenerateData = () => {
  updateOutput()
}

const formatDataSize = (bytes) => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 初始化
updateOutput()
</script>