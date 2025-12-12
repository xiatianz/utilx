import { ref, watch, resolveComponent, mergeProps, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { f as useSeoMeta } from './server.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/destr/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ohash/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/klona/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/scule/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/apple/Documents/code/util/node_modules/pathe/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/server.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/devalue/index.js';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = {
  __name: "mock-data",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Mock\u6570\u636E\u751F\u6210\u5668 - \u5728\u7EBF\u6A21\u62DF\u6570\u636E\u751F\u6210\u5DE5\u5177",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBFMock\u6570\u636E\u751F\u6210\u5668\uFF0C\u652F\u6301JSON\u3001CSV\u3001SQL\u7B49\u591A\u79CD\u683C\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u5B57\u6BB5\u7C7B\u578B\uFF0C\u5FEB\u901F\u751F\u6210\u6D4B\u8BD5\u6570\u636E\u3002" },
        { name: "keywords", content: "Mock\u6570\u636E,\u6D4B\u8BD5\u6570\u636E\u751F\u6210,JSON\u751F\u6210\u5668,\u6D4B\u8BD5\u5DE5\u5177,\u5047\u6570\u636E" }
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
        name: "\u7528\u6237\u4FE1\u606F",
        description: "\u5305\u542B\u57FA\u672C\u7528\u6237\u4FE1\u606F\u7684\u6A21\u677F",
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
        name: "\u7535\u5546\u8BA2\u5355",
        description: "\u7535\u5546\u8BA2\u5355\u6570\u636E\u6A21\u677F",
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
        name: "\u6587\u7AE0\u5185\u5BB9",
        description: "\u6587\u7AE0\u548C\u535A\u5BA2\u6570\u636E\u6A21\u677F",
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
        const firstNames = ["\u5F20", "\u674E", "\u738B", "\u5218", "\u9648", "\u6768", "\u8D75", "\u9EC4", "\u5468", "\u5434"];
        const lastNames = ["\u4F1F", "\u82B3", "\u5A1C", "\u79C0\u82F1", "\u654F", "\u9759", "\u4E3D", "\u5F3A", "\u78CA", "\u6D0B"];
        return firstNames[Math.floor(Math.random() * firstNames.length)] + lastNames[Math.floor(Math.random() * lastNames.length)];
      },
      phone: () => "1" + Math.floor(Math.random() * 9e9 + 1e9).toString(),
      address: () => {
        const streets = ["\u4E2D\u5C71\u8DEF", "\u4EBA\u6C11\u8DEF", "\u89E3\u653E\u8DEF", "\u5EFA\u8BBE\u8DEF", "\u548C\u5E73\u8DEF"];
        const number = Math.floor(Math.random() * 999 + 1);
        return `${number}\u53F7${streets[Math.floor(Math.random() * streets.length)]}`;
      },
      company: () => {
        const companies = ["\u963F\u91CC\u5DF4\u5DF4", "\u817E\u8BAF", "\u767E\u5EA6", "\u5B57\u8282\u8DF3\u52A8", "\u7F8E\u56E2", "\u6EF4\u6EF4", "\u5C0F\u7C73", "\u4EAC\u4E1C"];
        return companies[Math.floor(Math.random() * companies.length)];
      },
      job: () => {
        const jobs = ["\u5DE5\u7A0B\u5E08", "\u8BBE\u8BA1\u5E08", "\u4EA7\u54C1\u7ECF\u7406", "\u9500\u552E", "\u5E02\u573A", "\u8FD0\u8425", "\u4EBA\u4E8B", "\u8D22\u52A1"];
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
        const sentences = ["\u8FD9\u662F\u4E00\u4E2A\u6D4B\u8BD5\u53E5\u5B50", "Lorem ipsum dolor sit amet", "\u4ECA\u5929\u5929\u6C14\u5F88\u597D", "Hello World"];
        return sentences[Math.floor(Math.random() * sentences.length)];
      },
      paragraph: () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      country: () => {
        const countries = ["\u4E2D\u56FD", "\u7F8E\u56FD", "\u65E5\u672C", "\u82F1\u56FD", "\u6CD5\u56FD", "\u5FB7\u56FD", "\u52A0\u62FF\u5927", "\u6FB3\u5927\u5229\u4E9A"];
        return countries[Math.floor(Math.random() * countries.length)];
      },
      city: () => {
        const cities = ["\u5317\u4EAC", "\u4E0A\u6D77", "\u5E7F\u5DDE", "\u6DF1\u5733", "\u676D\u5DDE", "\u5357\u4EAC", "\u6210\u90FD", "\u6B66\u6C49"];
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
      let sql = `-- \u63D2\u5165\u6570\u636E\u5230 ${tableName}
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
      _push(`</div></div><h1 class="text-3xl font-bold text-gray-900 mb-2">Mock\u6570\u636E\u751F\u6210\u5668</h1><p class="text-gray-600 max-w-2xl mx-auto"> \u751F\u6210\u5404\u79CD\u683C\u5F0F\u7684\u6A21\u62DF\u6570\u636E\uFF0C\u652F\u6301JSON\u3001CSV\u3001SQL\u7B49\u683C\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u5B57\u6BB5\u7C7B\u578B\u548C\u6570\u91CF </p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1 space-y-6"><div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:settings",
        class: "h-5 w-5 mr-2"
      }, null, _parent));
      _push(` \u6570\u636E\u914D\u7F6E </h2><div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">\u8F93\u51FA\u683C\u5F0F</label><select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"><option value="json"${ssrIncludeBooleanAttr(Array.isArray(config.value.format) ? ssrLooseContain(config.value.format, "json") : ssrLooseEqual(config.value.format, "json")) ? " selected" : ""}>JSON</option><option value="csv"${ssrIncludeBooleanAttr(Array.isArray(config.value.format) ? ssrLooseContain(config.value.format, "csv") : ssrLooseEqual(config.value.format, "csv")) ? " selected" : ""}>CSV</option><option value="sql"${ssrIncludeBooleanAttr(Array.isArray(config.value.format) ? ssrLooseContain(config.value.format, "sql") : ssrLooseEqual(config.value.format, "sql")) ? " selected" : ""}>SQL</option><option value="xml"${ssrIncludeBooleanAttr(Array.isArray(config.value.format) ? ssrLooseContain(config.value.format, "xml") : ssrLooseEqual(config.value.format, "xml")) ? " selected" : ""}>XML</option><option value="yaml"${ssrIncludeBooleanAttr(Array.isArray(config.value.format) ? ssrLooseContain(config.value.format, "yaml") : ssrLooseEqual(config.value.format, "yaml")) ? " selected" : ""}>YAML</option></select></div><div><label class="block text-sm font-medium text-gray-700 mb-2"> \u8BB0\u5F55\u6570\u91CF: ${ssrInterpolate(config.value.count)}</label><input${ssrRenderAttr("value", config.value.count)} type="range" min="1" max="100" class="w-full"></div>`);
      if (config.value.format === "json") {
        _push(`<div><label class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.wrapArray) ? ssrLooseContain(config.value.wrapArray, null) : config.value.wrapArray) ? " checked" : ""} type="checkbox" class="mr-2"><span class="text-sm">\u5305\u88C5\u4E3A\u6570\u7EC4</span></label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-white rounded-lg shadow-sm p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:layers",
        class: "h-5 w-5 mr-2"
      }, null, _parent));
      _push(` \u5B57\u6BB5\u914D\u7F6E </h2><button class="text-sm text-indigo-600 hover:text-indigo-700"> \u6DFB\u52A0\u5B57\u6BB5 </button></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(config.value.fields, (field, index) => {
        _push(`<div class="p-3 bg-gray-50 rounded-lg"><div class="grid grid-cols-2 gap-2 mb-2"><input${ssrRenderAttr("value", field.name)} type="text" placeholder="\u5B57\u6BB5\u540D" class="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"><select class="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"><option value="string"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "string") : ssrLooseEqual(field.type, "string")) ? " selected" : ""}>\u5B57\u7B26\u4E32</option><option value="number"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "number") : ssrLooseEqual(field.type, "number")) ? " selected" : ""}>\u6570\u5B57</option><option value="email"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "email") : ssrLooseEqual(field.type, "email")) ? " selected" : ""}>\u90AE\u7BB1</option><option value="name"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "name") : ssrLooseEqual(field.type, "name")) ? " selected" : ""}>\u59D3\u540D</option><option value="phone"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "phone") : ssrLooseEqual(field.type, "phone")) ? " selected" : ""}>\u7535\u8BDD</option><option value="address"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "address") : ssrLooseEqual(field.type, "address")) ? " selected" : ""}>\u5730\u5740</option><option value="company"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "company") : ssrLooseEqual(field.type, "company")) ? " selected" : ""}>\u516C\u53F8</option><option value="job"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "job") : ssrLooseEqual(field.type, "job")) ? " selected" : ""}>\u804C\u4F4D</option><option value="date"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "date") : ssrLooseEqual(field.type, "date")) ? " selected" : ""}>\u65E5\u671F</option><option value="datetime"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "datetime") : ssrLooseEqual(field.type, "datetime")) ? " selected" : ""}>\u65E5\u671F\u65F6\u95F4</option><option value="boolean"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "boolean") : ssrLooseEqual(field.type, "boolean")) ? " selected" : ""}>\u5E03\u5C14\u503C</option><option value="uuid"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "uuid") : ssrLooseEqual(field.type, "uuid")) ? " selected" : ""}>UUID</option><option value="url"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "url") : ssrLooseEqual(field.type, "url")) ? " selected" : ""}>URL</option><option value="ip"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "ip") : ssrLooseEqual(field.type, "ip")) ? " selected" : ""}>IP\u5730\u5740</option><option value="color"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "color") : ssrLooseEqual(field.type, "color")) ? " selected" : ""}>\u989C\u8272</option><option value="word"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "word") : ssrLooseEqual(field.type, "word")) ? " selected" : ""}>\u5355\u8BCD</option><option value="sentence"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "sentence") : ssrLooseEqual(field.type, "sentence")) ? " selected" : ""}>\u53E5\u5B50</option><option value="paragraph"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "paragraph") : ssrLooseEqual(field.type, "paragraph")) ? " selected" : ""}>\u6BB5\u843D</option><option value="country"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "country") : ssrLooseEqual(field.type, "country")) ? " selected" : ""}>\u56FD\u5BB6</option><option value="city"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "city") : ssrLooseEqual(field.type, "city")) ? " selected" : ""}>\u57CE\u5E02</option><option value="zipcode"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "zipcode") : ssrLooseEqual(field.type, "zipcode")) ? " selected" : ""}>\u90AE\u7F16</option><option value="creditCard"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "creditCard") : ssrLooseEqual(field.type, "creditCard")) ? " selected" : ""}>\u4FE1\u7528\u5361\u53F7</option><option value="lorem"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "lorem") : ssrLooseEqual(field.type, "lorem")) ? " selected" : ""}>Lorem Ipsum</option><option value="enum"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "enum") : ssrLooseEqual(field.type, "enum")) ? " selected" : ""}>\u679A\u4E3E\u503C</option><option value="range"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "range") : ssrLooseEqual(field.type, "range")) ? " selected" : ""}>\u8303\u56F4\u503C</option></select></div>`);
        if (field.type === "enum") {
          _push(`<div class="mb-2"><input${ssrRenderAttr("value", field.enumValues)} type="text" placeholder="\u9009\u98791,\u9009\u98792,\u9009\u98793" class="w-full px-2 py-1 border border-gray-300 rounded text-sm"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (field.type === "range") {
          _push(`<div class="grid grid-cols-2 gap-2"><input${ssrRenderAttr("value", field.min)} type="number" placeholder="\u6700\u5C0F\u503C" class="px-2 py-1 border border-gray-300 rounded text-sm"><input${ssrRenderAttr("value", field.max)} type="number" placeholder="\u6700\u5927\u503C" class="px-2 py-1 border border-gray-300 rounded text-sm"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="mt-2 text-sm text-red-600 hover:text-red-700"> \u5220\u9664\u5B57\u6BB5 </button></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-white rounded-lg shadow-sm p-6"><h2 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:bookmark",
        class: "h-5 w-5 mr-2"
      }, null, _parent));
      _push(` \u9884\u8BBE\u6A21\u677F </h2><div class="space-y-2"><!--[-->`);
      ssrRenderList(templates, (template) => {
        _push(`<button class="w-full text-left px-3 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"><div class="font-medium text-sm">${ssrInterpolate(template.name)}</div><div class="text-xs text-gray-500">${ssrInterpolate(template.description)}</div></button>`);
      });
      _push(`<!--]--></div></div></div><div class="lg:col-span-2 space-y-6"><div class="bg-white rounded-lg shadow-sm p-6"><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-semibold flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:code",
        class: "h-6 w-6 mr-2 text-indigo-600"
      }, null, _parent));
      _push(` \u751F\u6210\u7684\u6570\u636E </h3><div class="flex space-x-2"><button class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors flex items-center text-sm">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:copy",
        class: "h-4 w-4 mr-1"
      }, null, _parent));
      _push(` \u590D\u5236 </button><button class="px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors flex items-center text-sm">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:download",
        class: "h-4 w-4 mr-1"
      }, null, _parent));
      _push(` \u4E0B\u8F7D </button><button class="px-4 py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors flex items-center text-sm">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:refresh-cw",
        class: "h-4 w-4 mr-1"
      }, null, _parent));
      _push(` \u91CD\u65B0\u751F\u6210 </button></div></div><div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><pre class="text-sm"><code>${ssrInterpolate(generatedData.value)}</code></pre></div></div>`);
      if (generatedData.value) {
        _push(`<div class="bg-white rounded-lg shadow-sm p-6"><h3 class="text-lg font-semibold mb-4 flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:bar-chart",
          class: "h-5 w-5 mr-2"
        }, null, _parent));
        _push(` \u6570\u636E\u7EDF\u8BA1 </h3><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><div class="bg-gray-50 rounded-lg p-3"><div class="text-xs text-gray-500">\u8BB0\u5F55\u6570</div><div class="font-semibold">${ssrInterpolate(config.value.count)}</div></div><div class="bg-gray-50 rounded-lg p-3"><div class="text-xs text-gray-500">\u5B57\u6BB5\u6570</div><div class="font-semibold">${ssrInterpolate(config.value.fields.length)}</div></div><div class="bg-gray-50 rounded-lg p-3"><div class="text-xs text-gray-500">\u6570\u636E\u5927\u5C0F</div><div class="font-semibold">${ssrInterpolate(formatDataSize(generatedData.value.length))}</div></div><div class="bg-gray-50 rounded-lg p-3"><div class="text-xs text-gray-500">\u683C\u5F0F</div><div class="font-semibold uppercase">${ssrInterpolate(config.value.format)}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-white rounded-lg shadow-sm p-6"><h3 class="text-lg font-semibold mb-4 flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:lightbulb",
        class: "h-5 w-5 mr-2"
      }, null, _parent));
      _push(` \u4F7F\u7528\u793A\u4F8B </h3><div class="space-y-4"><div><h4 class="text-sm font-medium text-gray-700 mb-2">JavaScript (fetch)</h4><div class="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto"><pre class="text-xs"><code>fetch(&#39;/api/data&#39;)
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

export { _sfc_main as default };
//# sourceMappingURL=mock-data-C-BYXWRi.mjs.map
