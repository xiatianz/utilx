import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { FileJson, Info, Code, ArrowRight, Search } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "json-schema",
  __ssrInlineRender: true,
  setup(__props) {
    const schemaVersion = ref("2020-12");
    const schemaTitle = ref("");
    const schemaDescription = ref("");
    const jsonInput = ref("");
    const copied = ref(false);
    const validationResult = ref(null);
    const options = ref({
      strictType: true,
      addExamples: true,
      addRequired: true
    });
    const schemaStats = ref(null);
    const generatedSchema = computed(() => {
      if (!jsonInput.value) return "";
      try {
        const data = JSON.parse(jsonInput.value);
        const schema = generateSchemaFromData(data);
        schemaStats.value = calculateStats(schema);
        return JSON.stringify(schema, null, 2);
      } catch (error) {
        return "";
      }
    });
    const generateSchemaFromData = (data, path = "") => {
      const schema = {
        $schema: `https://json-schema.org/draft/${getDraftVersion()}/schema#`
      };
      if (schemaTitle.value) {
        schema.title = schemaTitle.value;
      }
      if (schemaDescription.value) {
        schema.description = schemaDescription.value;
      }
      const result = analyzeValue(data);
      Object.assign(schema, result.schema);
      return schema;
    };
    const getDraftVersion = () => {
      const versionMap = {
        "2020-12": "2020-12",
        "2019-09": "2019-09",
        "draft-07": "07",
        "draft-06": "06",
        "draft-04": "04"
      };
      return versionMap[schemaVersion.value] || "07";
    };
    const analyzeValue = (value, path = "") => {
      const schema = {};
      const required = [];
      if (value === null) {
        schema.type = ["null", "object", "string", "number", "boolean"];
        return { schema, required };
      }
      if (Array.isArray(value)) {
        schema.type = "array";
        if (value.length > 0) {
          const itemAnalysis = analyzeValue(value[0], `${path}[]`);
          schema.items = itemAnalysis.schema;
          if (options.value.addExamples && value[0] !== null) {
            schema.examples = [value[0]];
          }
        } else {
          schema.items = {};
        }
        return { schema, required };
      }
      if (typeof value === "object") {
        schema.type = "object";
        schema.properties = {};
        Object.entries(value).forEach(([key, val]) => {
          const analysis = analyzeValue(val, `${path}.${key}`);
          schema.properties[key] = analysis.schema;
          if (options.value.addRequired && analysis.required.includes(key)) {
            required.push(key);
          }
          if (options.value.addRequired) {
            required.push(key);
          }
        });
        if (required.length > 0) {
          schema.required = required;
        }
        return { schema, required };
      }
      if (typeof value === "string") {
        schema.type = "string";
        if (value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)) {
          schema.format = "date-time";
        } else if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
          schema.format = "date";
        } else if (value.match(/^https?:\/\//)) {
          schema.format = "uri";
        } else if (value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
          schema.format = "email";
        }
        if (options.value.strictType) {
          schema.minLength = value.length;
          schema.maxLength = value.length;
        }
        if (options.value.addExamples) {
          schema.examples = [value];
        }
      } else if (typeof value === "number") {
        if (Number.isInteger(value)) {
          schema.type = "integer";
        } else {
          schema.type = "number";
        }
        if (options.value.strictType) {
          schema.minimum = value;
          schema.maximum = value;
        }
        if (options.value.addExamples) {
          schema.examples = [value];
        }
      } else if (typeof value === "boolean") {
        schema.type = "boolean";
        if (options.value.addExamples) {
          schema.examples = [value];
        }
      }
      return { schema, required };
    };
    const calculateStats = (schema) => {
      const stats = {
        properties: 0,
        required: 0,
        objects: 0,
        arrays: 0
      };
      const countProperties = (obj) => {
        if (obj.type === "object" && obj.properties) {
          stats.objects++;
          Object.values(obj.properties).forEach((prop) => {
            stats.properties++;
            if (obj.required && obj.required.includes(Object.keys(obj.properties).find((k) => obj.properties[k] === prop))) {
              stats.required++;
            }
            countProperties(prop);
          });
        }
        if (obj.type === "array" && obj.items) {
          stats.arrays++;
          countProperties(obj.items);
        }
      };
      countProperties(schema);
      return stats;
    };
    useSeoMeta({
      title: "JSON Schema 生成器 - 在线 JSON Schema 生成工具",
      description: "免费的在线 JSON Schema 生成器，根据 JSON 数据自动生成 JSON Schema，支持数据验证和类型定义。",
      keywords: ["json schema", "schema", "json", "数据验证", "类型定义", "api文档", "数据结构"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_FileText = resolveComponent("FileText");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">JSON Schema 生成器</h1><p class="text-muted-foreground">根据 JSON 数据自动生成 JSON Schema，支持数据验证和类型定义</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">输入选项</h2><div class="space-y-4"><div><label class="text-sm font-medium">Schema 版本</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="draft-07"${ssrIncludeBooleanAttr(Array.isArray(schemaVersion.value) ? ssrLooseContain(schemaVersion.value, "draft-07") : ssrLooseEqual(schemaVersion.value, "draft-07")) ? " selected" : ""}>Draft 07</option><option value="draft-06"${ssrIncludeBooleanAttr(Array.isArray(schemaVersion.value) ? ssrLooseContain(schemaVersion.value, "draft-06") : ssrLooseEqual(schemaVersion.value, "draft-06")) ? " selected" : ""}>Draft 06</option><option value="draft-04"${ssrIncludeBooleanAttr(Array.isArray(schemaVersion.value) ? ssrLooseContain(schemaVersion.value, "draft-04") : ssrLooseEqual(schemaVersion.value, "draft-04")) ? " selected" : ""}>Draft 04</option><option value="2019-09"${ssrIncludeBooleanAttr(Array.isArray(schemaVersion.value) ? ssrLooseContain(schemaVersion.value, "2019-09") : ssrLooseEqual(schemaVersion.value, "2019-09")) ? " selected" : ""}>2019-09</option><option value="2020-12"${ssrIncludeBooleanAttr(Array.isArray(schemaVersion.value) ? ssrLooseContain(schemaVersion.value, "2020-12") : ssrLooseEqual(schemaVersion.value, "2020-12")) ? " selected" : ""}>2020-12</option></select></div><div><label class="text-sm font-medium">Schema 标题（可选）</label><input${ssrRenderAttr("value", schemaTitle.value)} type="text" placeholder="User Schema" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">Schema 描述（可选）</label><input${ssrRenderAttr("value", schemaDescription.value)} type="text" placeholder="用户数据结构定义" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.strictType) ? ssrLooseContain(options.value.strictType, null) : options.value.strictType) ? " checked" : ""} type="checkbox" id="strictType" class="rounded text-primary focus:ring-primary"><label for="strictType" class="text-sm">严格类型推断</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.addExamples) ? ssrLooseContain(options.value.addExamples, null) : options.value.addExamples) ? " checked" : ""} type="checkbox" id="addExamples" class="rounded text-primary focus:ring-primary"><label for="addExamples" class="text-sm">添加示例值</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.addRequired) ? ssrLooseContain(options.value.addRequired, null) : options.value.addRequired) ? " checked" : ""} type="checkbox" id="addRequired" class="rounded text-primary focus:ring-primary"><label for="addRequired" class="text-sm">自动标记必填字段</label></div></div></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">JSON 数据</h2><div class="flex gap-2"><button class="text-sm text-primary hover:text-primary/80 transition-colors"> 加载示例 </button><button class="text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button><button${ssrIncludeBooleanAttr(!jsonInput.value) ? " disabled" : ""} class="text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 格式化 </button></div></div><textarea placeholder="输入 JSON 数据..." class="w-full h-80 px-4 py-3 border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(jsonInput.value)}</textarea></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">生成的 Schema</h2><div class="flex gap-2"><button${ssrIncludeBooleanAttr(!generatedSchema.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "已复制" : "复制")}</button><button${ssrIncludeBooleanAttr(!generatedSchema.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 下载 </button><button${ssrIncludeBooleanAttr(!generatedSchema.value || !jsonInput.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 验证 </button></div></div><div class="border rounded-lg p-4 bg-muted/30 min-h-[400px] max-h-[500px] overflow-auto">`);
      if (generatedSchema.value) {
        _push(`<pre class="text-sm whitespace-pre-wrap font-mono"><code>${ssrInterpolate(generatedSchema.value)}</code></pre>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-12">`);
        _push(ssrRenderComponent(unref(FileJson), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>输入 JSON 数据后生成 Schema</p></div>`);
      }
      _push(`</div></div>`);
      if (validationResult.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">验证结果</h2><div class="${ssrRenderClass([validationResult.value.valid ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200", "p-4 rounded-lg"])}"><div class="flex items-center gap-2 mb-2"><span class="${ssrRenderClass(validationResult.value.valid ? "text-green-600" : "text-red-600")}">${ssrInterpolate(validationResult.value.valid ? "✓ 验证通过" : "✗ 验证失败")}</span></div>`);
        if (!validationResult.value.valid && validationResult.value.errors) {
          _push(`<div class="space-y-1"><!--[-->`);
          ssrRenderList(validationResult.value.errors, (error, index) => {
            _push(`<div class="text-sm text-red-600"> • ${ssrInterpolate(error)}</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (schemaStats.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">Schema 统计</h2><div class="grid grid-cols-2 gap-4 text-sm"><div><span class="text-muted-foreground">属性总数：</span><span class="font-medium">${ssrInterpolate(schemaStats.value.properties)}</span></div><div><span class="text-muted-foreground">必填字段：</span><span class="font-medium">${ssrInterpolate(schemaStats.value.required)}</span></div><div><span class="text-muted-foreground">嵌套对象：</span><span class="font-medium">${ssrInterpolate(schemaStats.value.objects)}</span></div><div><span class="text-muted-foreground">数组字段：</span><span class="font-medium">${ssrInterpolate(schemaStats.value.arrays)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` JSON Schema 使用指南 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">什么是 JSON Schema？</h4><p>JSON Schema 是一种用于描述 JSON 数据结构的规范，它可以定义数据的类型、格式、约束条件等，用于数据验证、文档生成和代码生成。</p></div><div><h4 class="font-medium text-foreground mb-2">常用关键字说明</h4><ul class="list-disc list-inside space-y-1"><li><code>$schema</code> - 指定使用的 Draft 版本</li><li><code>type</code> - 数据类型（string, number, object, array, boolean, null）</li><li><code>properties</code> - 对象属性定义</li><li><code>required</code> - 必需属性列表</li><li><code>format</code> - 字符串格式（email, date-time, uri 等）</li><li><code>pattern</code> - 正则表达式约束</li><li><code>minimum/maximum</code> - 数值范围</li><li><code>minLength/maxLength</code> - 字符串长度</li><li><code>items</code> - 数组元素定义</li><li><code>additionalProperties</code> - 额外属性控制</li></ul></div><div><h4 class="font-medium text-foreground mb-2">应用场景</h4><ul class="list-disc list-inside space-y-1"><li>API 接口数据验证</li><li>配置文件格式定义</li><li>数据库文档生成</li><li>表单自动生成</li><li>代码生成和类型定义</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/json-formatter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Code), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSON 格式化</p><p class="text-xs text-muted-foreground"${_scopeId}>格式化和美化 JSON</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Code), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSON 格式化"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "格式化和美化 JSON")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/json-to-model",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FileText, { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSON 转 Model</p><p class="text-xs text-muted-foreground"${_scopeId}>生成数据模型类</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FileText, { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSON 转 Model"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "生成数据模型类")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/json-path",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSONPath</p><p class="text-xs text-muted-foreground"${_scopeId}>JSON 数据查询</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Search), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSONPath"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "JSON 数据查询")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/json-schema.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=json-schema-BR7fnHX1.js.map
