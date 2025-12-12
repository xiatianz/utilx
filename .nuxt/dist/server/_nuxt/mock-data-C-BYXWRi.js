import { ref, watch, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import { f as useSeoMeta } from "../server.mjs";
import "./client-only-C17NlyZz.js";
import "/Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "mock-data",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Mock数据生成器 - 在线模拟数据生成工具",
      meta: [
        { name: "description", content: "免费在线Mock数据生成器，支持JSON、CSV、SQL等多种格式，自定义字段类型，快速生成测试数据。" },
        { name: "keywords", content: "Mock数据,测试数据生成,JSON生成器,测试工具,假数据" }
      ]
    });
    const generatedData = ref("");
    const config = ref({
      format: "json",
      count: 10,
      wrapArray: true,
      fields: [
        { name: "id", type: "number" },
        { name: "name", type: "name" },
        { name: "email", type: "email" },
        { name: "phone", type: "phone" }
      ]
    });
    const templates = [
      {
        name: "用户信息",
        description: "包含基本用户信息的模板",
        fields: [
          { name: "id", type: "number" },
          { name: "username", type: "name" },
          { name: "email", type: "email" },
          { name: "phone", type: "phone" },
          { name: "address", type: "address" },
          { name: "created_at", type: "datetime" }
        ]
      },
      {
        name: "电商订单",
        description: "电商订单数据模板",
        fields: [
          { name: "order_id", type: "uuid" },
          { name: "customer_name", type: "name" },
          { name: "product_name", type: "word" },
          { name: "quantity", type: "range", min: 1, max: 10 },
          { name: "price", type: "range", min: 10, max: 1e3 },
          { name: "status", type: "enum", enumValues: "pending,paid,shipped,delivered" }
        ]
      },
      {
        name: "文章内容",
        description: "文章和博客数据模板",
        fields: [
          { name: "id", type: "number" },
          { name: "title", type: "sentence" },
          { name: "content", type: "paragraph" },
          { name: "author", type: "name" },
          { name: "tags", type: "word" },
          { name: "published", type: "boolean" }
        ]
      }
    ];
    const mockGenerators = {
      string: () => "Lorem ipsum dolor sit amet",
      number: () => Math.floor(Math.random() * 1e3),
      email: () => {
        const domains = ["gmail.com", "yahoo.com", "hotmail.com", "example.com"];
        const username = Math.random().toString(36).substring(7);
        return `${username}@${domains[Math.floor(Math.random() * domains.length)]}`;
      },
      name: () => {
        const firstNames = ["张", "李", "王", "刘", "陈", "杨", "赵", "黄", "周", "吴"];
        const lastNames = ["伟", "芳", "娜", "秀英", "敏", "静", "丽", "强", "磊", "洋"];
        return firstNames[Math.floor(Math.random() * firstNames.length)] + lastNames[Math.floor(Math.random() * lastNames.length)];
      },
      phone: () => "1" + Math.floor(Math.random() * 9e9 + 1e9).toString(),
      address: () => {
        const streets = ["中山路", "人民路", "解放路", "建设路", "和平路"];
        const number = Math.floor(Math.random() * 999 + 1);
        return `${number}号${streets[Math.floor(Math.random() * streets.length)]}`;
      },
      company: () => {
        const companies = ["阿里巴巴", "腾讯", "百度", "字节跳动", "美团", "滴滴", "小米", "京东"];
        return companies[Math.floor(Math.random() * companies.length)];
      },
      job: () => {
        const jobs = ["工程师", "设计师", "产品经理", "销售", "市场", "运营", "人事", "财务"];
        return jobs[Math.floor(Math.random() * jobs.length)];
      },
      date: () => new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1e3)).toISOString().split("T")[0],
      datetime: () => new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1e3)).toISOString(),
      boolean: () => Math.random() > 0.5,
      uuid: () => {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0;
          const v = c === "x" ? r : r & 3 | 8;
          return v.toString(16);
        });
      },
      url: () => `https://example.com/${Math.random().toString(36).substring(7)}`,
      ip: () => `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
      color: () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"),
      word: () => {
        const words = ["apple", "banana", "orange", "grape", "watermelon", "strawberry", "pineapple", "mango"];
        return words[Math.floor(Math.random() * words.length)];
      },
      sentence: () => {
        const sentences = ["这是一个测试句子", "Lorem ipsum dolor sit amet", "今天天气很好", "Hello World"];
        return sentences[Math.floor(Math.random() * sentences.length)];
      },
      paragraph: () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      country: () => {
        const countries = ["中国", "美国", "日本", "英国", "法国", "德国", "加拿大", "澳大利亚"];
        return countries[Math.floor(Math.random() * countries.length)];
      },
      city: () => {
        const cities = ["北京", "上海", "广州", "深圳", "杭州", "南京", "成都", "武汉"];
        return cities[Math.floor(Math.random() * cities.length)];
      },
      zipcode: () => Math.floor(1e5 + Math.random() * 9e5).toString(),
      creditCard: () => {
        let card = "";
        for (let i = 0; i < 16; i++) {
          if (i > 0 && i % 4 === 0) card += " ";
          card += Math.floor(Math.random() * 10);
        }
        return card;
      },
      lorem: () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      enum: (field) => {
        const values = field.enumValues ? field.enumValues.split(",") : ["A", "B", "C"];
        return values[Math.floor(Math.random() * values.length)].trim();
      },
      range: (field) => {
        const min = field.min || 0;
        const max = field.max || 100;
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    };
    watch(config, () => {
      updateOutput();
    }, { deep: true });
    const updateOutput = () => {
      if (config.value.fields.length === 0) {
        generatedData.value = "";
        return;
      }
      const data = [];
      for (let i = 0; i < config.value.count; i++) {
        const record = {};
        config.value.fields.forEach((field) => {
          if (field.name && field.type) {
            if (field.type === "enum" || field.type === "range") {
              record[field.name] = mockGenerators[field.type](field);
            } else {
              record[field.name] = mockGenerators[field.type]();
            }
          }
        });
        data.push(record);
      }
      switch (config.value.format) {
        case "json":
          generatedData.value = JSON.stringify(config.value.wrapArray ? data : data[0], null, 2);
          break;
        case "csv":
          generatedData.value = generateCSV(data);
          break;
        case "sql":
          generatedData.value = generateSQL(data);
          break;
        case "xml":
          generatedData.value = generateXML(data);
          break;
        case "yaml":
          generatedData.value = generateYAML(data);
          break;
      }
    };
    const generateCSV = (data) => {
      if (data.length === 0) return "";
      const headers = Object.keys(data[0]);
      const csvRows = [headers.join(",")];
      for (const row of data) {
        const values = headers.map((header) => {
          const value = row[header];
          const escaped = String(value).replace(/"/g, '""');
          return `"${escaped}"`;
        });
        csvRows.push(values.join(","));
      }
      return csvRows.join("\n");
    };
    const generateSQL = (data) => {
      if (data.length === 0) return "";
      const tableName = "mock_data";
      const columns = Object.keys(data[0]);
      let sql = `-- 插入数据到 ${tableName}
`;
      sql += `INSERT INTO ${tableName} (${columns.join(", ")}) VALUES
`;
      const values = data.map((row) => {
        const vals = columns.map((col) => {
          const value = row[col];
          if (typeof value === "string") {
            return `'${value.replace(/'/g, "''")}'`;
          } else if (typeof value === "boolean") {
            return value ? "1" : "0";
          }
          return value;
        });
        return `(${vals.join(", ")})`;
      });
      sql += values.join(",\n") + ";";
      return sql;
    };
    const generateXML = (data) => {
      if (data.length === 0) return "";
      let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<root>\n';
      data.forEach((record, index) => {
        xml += "  <record>\n";
        Object.entries(record).forEach(([key, value]) => {
          xml += `    <${key}>${value}</${key}>
`;
        });
        xml += "  </record>\n";
      });
      xml += "</root>";
      return xml;
    };
    const generateYAML = (data) => {
      if (data.length === 0) return "";
      let yaml = "- data:\n";
      data.forEach((record) => {
        Object.entries(record).forEach(([key, value]) => {
          yaml += `    ${key}: ${value}
`;
        });
      });
      return yaml;
    };
    const formatDataSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    updateOutput();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = resolveComponent("Icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="text-center mb-8"><div class="flex justify-center items-center mb-4"><div class="p-3 bg-indigo-100 rounded-lg">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:database",
        class: "h-8 w-8 text-indigo-600"
      }, null, _parent));
      _push(`</div></div><h1 class="text-3xl font-bold text-gray-900 mb-2">Mock数据生成器</h1><p class="text-gray-600 max-w-2xl mx-auto"> 生成各种格式的模拟数据，支持JSON、CSV、SQL等格式，自定义字段类型和数量 </p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1 space-y-6"><div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:settings",
        class: "h-5 w-5 mr-2"
      }, null, _parent));
      _push(` 数据配置 </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">输出格式</label><select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"><option value="json"${ssrIncludeBooleanAttr(Array.isArray(config.value.format) ? ssrLooseContain(config.value.format, "json") : ssrLooseEqual(config.value.format, "json")) ? " selected" : ""}>JSON</option><option value="csv"${ssrIncludeBooleanAttr(Array.isArray(config.value.format) ? ssrLooseContain(config.value.format, "csv") : ssrLooseEqual(config.value.format, "csv")) ? " selected" : ""}>CSV</option><option value="sql"${ssrIncludeBooleanAttr(Array.isArray(config.value.format) ? ssrLooseContain(config.value.format, "sql") : ssrLooseEqual(config.value.format, "sql")) ? " selected" : ""}>SQL</option><option value="xml"${ssrIncludeBooleanAttr(Array.isArray(config.value.format) ? ssrLooseContain(config.value.format, "xml") : ssrLooseEqual(config.value.format, "xml")) ? " selected" : ""}>XML</option><option value="yaml"${ssrIncludeBooleanAttr(Array.isArray(config.value.format) ? ssrLooseContain(config.value.format, "yaml") : ssrLooseEqual(config.value.format, "yaml")) ? " selected" : ""}>YAML</option></select></div><div><label class="block text-sm font-medium text-gray-700 mb-2"> 记录数量: ${ssrInterpolate(config.value.count)}</label><input${ssrRenderAttr("value", config.value.count)} type="range" min="1" max="100" class="w-full"></div>`);
      if (config.value.format === "json") {
        _push(`<div><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.wrapArray) ? ssrLooseContain(config.value.wrapArray, null) : config.value.wrapArray) ? " checked" : ""} type="checkbox" class="mr-2"><span class="text-sm">包装为数组</span></label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-white rounded-lg shadow-sm p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:layers",
        class: "h-5 w-5 mr-2"
      }, null, _parent));
      _push(` 字段配置 </h2><button class="text-sm text-indigo-600 hover:text-indigo-700"> 添加字段 </button></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(config.value.fields, (field, index) => {
        _push(`<div class="p-3 bg-gray-50 rounded-lg"><div class="grid grid-cols-2 gap-2 mb-2"><input${ssrRenderAttr("value", field.name)} type="text" placeholder="字段名" class="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"><select class="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"><option value="string"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "string") : ssrLooseEqual(field.type, "string")) ? " selected" : ""}>字符串</option><option value="number"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "number") : ssrLooseEqual(field.type, "number")) ? " selected" : ""}>数字</option><option value="email"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "email") : ssrLooseEqual(field.type, "email")) ? " selected" : ""}>邮箱</option><option value="name"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "name") : ssrLooseEqual(field.type, "name")) ? " selected" : ""}>姓名</option><option value="phone"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "phone") : ssrLooseEqual(field.type, "phone")) ? " selected" : ""}>电话</option><option value="address"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "address") : ssrLooseEqual(field.type, "address")) ? " selected" : ""}>地址</option><option value="company"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "company") : ssrLooseEqual(field.type, "company")) ? " selected" : ""}>公司</option><option value="job"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "job") : ssrLooseEqual(field.type, "job")) ? " selected" : ""}>职位</option><option value="date"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "date") : ssrLooseEqual(field.type, "date")) ? " selected" : ""}>日期</option><option value="datetime"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "datetime") : ssrLooseEqual(field.type, "datetime")) ? " selected" : ""}>日期时间</option><option value="boolean"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "boolean") : ssrLooseEqual(field.type, "boolean")) ? " selected" : ""}>布尔值</option><option value="uuid"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "uuid") : ssrLooseEqual(field.type, "uuid")) ? " selected" : ""}>UUID</option><option value="url"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "url") : ssrLooseEqual(field.type, "url")) ? " selected" : ""}>URL</option><option value="ip"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "ip") : ssrLooseEqual(field.type, "ip")) ? " selected" : ""}>IP地址</option><option value="color"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "color") : ssrLooseEqual(field.type, "color")) ? " selected" : ""}>颜色</option><option value="word"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "word") : ssrLooseEqual(field.type, "word")) ? " selected" : ""}>单词</option><option value="sentence"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "sentence") : ssrLooseEqual(field.type, "sentence")) ? " selected" : ""}>句子</option><option value="paragraph"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "paragraph") : ssrLooseEqual(field.type, "paragraph")) ? " selected" : ""}>段落</option><option value="country"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "country") : ssrLooseEqual(field.type, "country")) ? " selected" : ""}>国家</option><option value="city"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "city") : ssrLooseEqual(field.type, "city")) ? " selected" : ""}>城市</option><option value="zipcode"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "zipcode") : ssrLooseEqual(field.type, "zipcode")) ? " selected" : ""}>邮编</option><option value="creditCard"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "creditCard") : ssrLooseEqual(field.type, "creditCard")) ? " selected" : ""}>信用卡号</option><option value="lorem"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "lorem") : ssrLooseEqual(field.type, "lorem")) ? " selected" : ""}>Lorem Ipsum</option><option value="enum"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "enum") : ssrLooseEqual(field.type, "enum")) ? " selected" : ""}>枚举值</option><option value="range"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "range") : ssrLooseEqual(field.type, "range")) ? " selected" : ""}>范围值</option></select></div>`);
        if (field.type === "enum") {
          _push(`<div class="mb-2"><input${ssrRenderAttr("value", field.enumValues)} type="text" placeholder="选项1,选项2,选项3" class="w-full px-2 py-1 border border-gray-300 rounded text-sm"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (field.type === "range") {
          _push(`<div class="grid grid-cols-2 gap-2"><input${ssrRenderAttr("value", field.min)} type="number" placeholder="最小值" class="px-2 py-1 border border-gray-300 rounded text-sm"><input${ssrRenderAttr("value", field.max)} type="number" placeholder="最大值" class="px-2 py-1 border border-gray-300 rounded text-sm"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="mt-2 text-sm text-red-600 hover:text-red-700"> 删除字段 </button></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:bookmark",
        class: "h-5 w-5 mr-2"
      }, null, _parent));
      _push(` 预设模板 </h2><div class="space-y-2"><!--[-->`);
      ssrRenderList(templates, (template) => {
        _push(`<button class="w-full text-left px-3 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"><div class="font-medium text-sm">${ssrInterpolate(template.name)}</div><div class="text-xs text-gray-500">${ssrInterpolate(template.description)}</div></button>`);
      });
      _push(`<!--]--></div></div></div><div class="lg:col-span-2 space-y-6"><div class="bg-white rounded-lg shadow-sm p-6"><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-semibold flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:code",
        class: "h-6 w-6 mr-2 text-indigo-600"
      }, null, _parent));
      _push(` 生成的数据 </h3><div class="flex space-x-2"><button class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors flex items-center text-sm">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:copy",
        class: "h-4 w-4 mr-1"
      }, null, _parent));
      _push(` 复制 </button><button class="px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors flex items-center text-sm">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:download",
        class: "h-4 w-4 mr-1"
      }, null, _parent));
      _push(` 下载 </button><button class="px-4 py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors flex items-center text-sm">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:refresh-cw",
        class: "h-4 w-4 mr-1"
      }, null, _parent));
      _push(` 重新生成 </button></div></div><div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><pre class="text-sm"><code>${ssrInterpolate(generatedData.value)}</code></pre></div></div>`);
      if (generatedData.value) {
        _push(`<div class="bg-white rounded-lg shadow-sm p-6"><h3 class="text-lg font-semibold mb-4 flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:bar-chart",
          class: "h-5 w-5 mr-2"
        }, null, _parent));
        _push(` 数据统计 </h3><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><div class="bg-gray-50 rounded-lg p-3"><div class="text-xs text-gray-500">记录数</div><div class="font-semibold">${ssrInterpolate(config.value.count)}</div></div><div class="bg-gray-50 rounded-lg p-3"><div class="text-xs text-gray-500">字段数</div><div class="font-semibold">${ssrInterpolate(config.value.fields.length)}</div></div><div class="bg-gray-50 rounded-lg p-3"><div class="text-xs text-gray-500">数据大小</div><div class="font-semibold">${ssrInterpolate(formatDataSize(generatedData.value.length))}</div></div><div class="bg-gray-50 rounded-lg p-3"><div class="text-xs text-gray-500">格式</div><div class="font-semibold uppercase">${ssrInterpolate(config.value.format)}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-white rounded-lg shadow-sm p-6"><h3 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:lightbulb",
        class: "h-5 w-5 mr-2"
      }, null, _parent));
      _push(` 使用示例 </h3><div class="space-y-4"><div><h4 class="text-sm font-medium text-gray-700 mb-2">JavaScript (fetch)</h4><div class="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto"><pre class="text-xs"><code>fetch(&#39;/api/data&#39;)
  .then(response =&gt; response.json())
  .then(data =&gt; console.log(data));</code></pre></div></div><div><h4 class="text-sm font-medium text-gray-700 mb-2">Python (requests)</h4><div class="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto"><pre class="text-xs"><code>import requests
response = requests.get(&#39;/api/data&#39;)
data = response.json()
print(data)</code></pre></div></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/mock-data.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=mock-data-C-BYXWRi.js.map
