import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { FileJson, Info, Code, ArrowRight, Search } from 'lucide-vue-next';
import { f as useSeoMeta } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

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
      title: "JSON Schema \u751F\u6210\u5668 - \u5728\u7EBF JSON Schema \u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF JSON Schema \u751F\u6210\u5668\uFF0C\u6839\u636E JSON \u6570\u636E\u81EA\u52A8\u751F\u6210 JSON Schema\uFF0C\u652F\u6301\u6570\u636E\u9A8C\u8BC1\u548C\u7C7B\u578B\u5B9A\u4E49\u3002",
      keywords: ["json schema", "schema", "json", "\u6570\u636E\u9A8C\u8BC1", "\u7C7B\u578B\u5B9A\u4E49", "api\u6587\u6863", "\u6570\u636E\u7ED3\u6784"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_FileText = resolveComponent("FileText");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">JSON Schema \u751F\u6210\u5668</h1><p class="text-muted-foreground">\u6839\u636E JSON \u6570\u636E\u81EA\u52A8\u751F\u6210 JSON Schema\uFF0C\u652F\u6301\u6570\u636E\u9A8C\u8BC1\u548C\u7C7B\u578B\u5B9A\u4E49</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8F93\u5165\u9009\u9879</h2><div class="space-y-4"><div><label class="text-sm font-medium">Schema \u7248\u672C</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="draft-07"${ssrIncludeBooleanAttr(Array.isArray(schemaVersion.value) ? ssrLooseContain(schemaVersion.value, "draft-07") : ssrLooseEqual(schemaVersion.value, "draft-07")) ? " selected" : ""}>Draft 07</option><option value="draft-06"${ssrIncludeBooleanAttr(Array.isArray(schemaVersion.value) ? ssrLooseContain(schemaVersion.value, "draft-06") : ssrLooseEqual(schemaVersion.value, "draft-06")) ? " selected" : ""}>Draft 06</option><option value="draft-04"${ssrIncludeBooleanAttr(Array.isArray(schemaVersion.value) ? ssrLooseContain(schemaVersion.value, "draft-04") : ssrLooseEqual(schemaVersion.value, "draft-04")) ? " selected" : ""}>Draft 04</option><option value="2019-09"${ssrIncludeBooleanAttr(Array.isArray(schemaVersion.value) ? ssrLooseContain(schemaVersion.value, "2019-09") : ssrLooseEqual(schemaVersion.value, "2019-09")) ? " selected" : ""}>2019-09</option><option value="2020-12"${ssrIncludeBooleanAttr(Array.isArray(schemaVersion.value) ? ssrLooseContain(schemaVersion.value, "2020-12") : ssrLooseEqual(schemaVersion.value, "2020-12")) ? " selected" : ""}>2020-12</option></select></div><div><label class="text-sm font-medium">Schema \u6807\u9898\uFF08\u53EF\u9009\uFF09</label><input${ssrRenderAttr("value", schemaTitle.value)} type="text" placeholder="User Schema" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">Schema \u63CF\u8FF0\uFF08\u53EF\u9009\uFF09</label><input${ssrRenderAttr("value", schemaDescription.value)} type="text" placeholder="\u7528\u6237\u6570\u636E\u7ED3\u6784\u5B9A\u4E49" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.strictType) ? ssrLooseContain(options.value.strictType, null) : options.value.strictType) ? " checked" : ""} type="checkbox" id="strictType" class="rounded text-primary focus:ring-primary"><label for="strictType" class="text-sm">\u4E25\u683C\u7C7B\u578B\u63A8\u65AD</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.addExamples) ? ssrLooseContain(options.value.addExamples, null) : options.value.addExamples) ? " checked" : ""} type="checkbox" id="addExamples" class="rounded text-primary focus:ring-primary"><label for="addExamples" class="text-sm">\u6DFB\u52A0\u793A\u4F8B\u503C</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.addRequired) ? ssrLooseContain(options.value.addRequired, null) : options.value.addRequired) ? " checked" : ""} type="checkbox" id="addRequired" class="rounded text-primary focus:ring-primary"><label for="addRequired" class="text-sm">\u81EA\u52A8\u6807\u8BB0\u5FC5\u586B\u5B57\u6BB5</label></div></div></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">JSON \u6570\u636E</h2><div class="flex gap-2"><button class="text-sm text-primary hover:text-primary/80 transition-colors"> \u52A0\u8F7D\u793A\u4F8B </button><button class="text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button><button${ssrIncludeBooleanAttr(!jsonInput.value) ? " disabled" : ""} class="text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u683C\u5F0F\u5316 </button></div></div><textarea placeholder="\u8F93\u5165 JSON \u6570\u636E..." class="w-full h-80 px-4 py-3 border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(jsonInput.value)}</textarea></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u751F\u6210\u7684 Schema</h2><div class="flex gap-2"><button${ssrIncludeBooleanAttr(!generatedSchema.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button><button${ssrIncludeBooleanAttr(!generatedSchema.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u4E0B\u8F7D </button><button${ssrIncludeBooleanAttr(!generatedSchema.value || !jsonInput.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u9A8C\u8BC1 </button></div></div><div class="border rounded-lg p-4 bg-muted/30 min-h-[400px] max-h-[500px] overflow-auto">`);
      if (generatedSchema.value) {
        _push(`<pre class="text-sm whitespace-pre-wrap font-mono"><code>${ssrInterpolate(generatedSchema.value)}</code></pre>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-12">`);
        _push(ssrRenderComponent(unref(FileJson), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>\u8F93\u5165 JSON \u6570\u636E\u540E\u751F\u6210 Schema</p></div>`);
      }
      _push(`</div></div>`);
      if (validationResult.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u9A8C\u8BC1\u7ED3\u679C</h2><div class="${ssrRenderClass([validationResult.value.valid ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200", "p-4 rounded-lg"])}"><div class="flex items-center gap-2 mb-2"><span class="${ssrRenderClass(validationResult.value.valid ? "text-green-600" : "text-red-600")}">${ssrInterpolate(validationResult.value.valid ? "\u2713 \u9A8C\u8BC1\u901A\u8FC7" : "\u2717 \u9A8C\u8BC1\u5931\u8D25")}</span></div>`);
        if (!validationResult.value.valid && validationResult.value.errors) {
          _push(`<div class="space-y-1"><!--[-->`);
          ssrRenderList(validationResult.value.errors, (error, index) => {
            _push(`<div class="text-sm text-red-600"> \u2022 ${ssrInterpolate(error)}</div>`);
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
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">Schema \u7EDF\u8BA1</h2><div class="grid grid-cols-2 gap-4 text-sm"><div><span class="text-muted-foreground">\u5C5E\u6027\u603B\u6570\uFF1A</span><span class="font-medium">${ssrInterpolate(schemaStats.value.properties)}</span></div><div><span class="text-muted-foreground">\u5FC5\u586B\u5B57\u6BB5\uFF1A</span><span class="font-medium">${ssrInterpolate(schemaStats.value.required)}</span></div><div><span class="text-muted-foreground">\u5D4C\u5957\u5BF9\u8C61\uFF1A</span><span class="font-medium">${ssrInterpolate(schemaStats.value.objects)}</span></div><div><span class="text-muted-foreground">\u6570\u7EC4\u5B57\u6BB5\uFF1A</span><span class="font-medium">${ssrInterpolate(schemaStats.value.arrays)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` JSON Schema \u4F7F\u7528\u6307\u5357 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u4EC0\u4E48\u662F JSON Schema\uFF1F</h4><p>JSON Schema \u662F\u4E00\u79CD\u7528\u4E8E\u63CF\u8FF0 JSON \u6570\u636E\u7ED3\u6784\u7684\u89C4\u8303\uFF0C\u5B83\u53EF\u4EE5\u5B9A\u4E49\u6570\u636E\u7684\u7C7B\u578B\u3001\u683C\u5F0F\u3001\u7EA6\u675F\u6761\u4EF6\u7B49\uFF0C\u7528\u4E8E\u6570\u636E\u9A8C\u8BC1\u3001\u6587\u6863\u751F\u6210\u548C\u4EE3\u7801\u751F\u6210\u3002</p></div><div><h4 class="font-medium text-foreground mb-2">\u5E38\u7528\u5173\u952E\u5B57\u8BF4\u660E</h4><ul class="list-disc list-inside space-y-1"><li><code>$schema</code> - \u6307\u5B9A\u4F7F\u7528\u7684 Draft \u7248\u672C</li><li><code>type</code> - \u6570\u636E\u7C7B\u578B\uFF08string, number, object, array, boolean, null\uFF09</li><li><code>properties</code> - \u5BF9\u8C61\u5C5E\u6027\u5B9A\u4E49</li><li><code>required</code> - \u5FC5\u9700\u5C5E\u6027\u5217\u8868</li><li><code>format</code> - \u5B57\u7B26\u4E32\u683C\u5F0F\uFF08email, date-time, uri \u7B49\uFF09</li><li><code>pattern</code> - \u6B63\u5219\u8868\u8FBE\u5F0F\u7EA6\u675F</li><li><code>minimum/maximum</code> - \u6570\u503C\u8303\u56F4</li><li><code>minLength/maxLength</code> - \u5B57\u7B26\u4E32\u957F\u5EA6</li><li><code>items</code> - \u6570\u7EC4\u5143\u7D20\u5B9A\u4E49</li><li><code>additionalProperties</code> - \u989D\u5916\u5C5E\u6027\u63A7\u5236</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u5E94\u7528\u573A\u666F</h4><ul class="list-disc list-inside space-y-1"><li>API \u63A5\u53E3\u6570\u636E\u9A8C\u8BC1</li><li>\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F\u5B9A\u4E49</li><li>\u6570\u636E\u5E93\u6587\u6863\u751F\u6210</li><li>\u8868\u5355\u81EA\u52A8\u751F\u6210</li><li>\u4EE3\u7801\u751F\u6210\u548C\u7C7B\u578B\u5B9A\u4E49</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/json-formatter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Code), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSON \u683C\u5F0F\u5316</p><p class="text-xs text-muted-foreground"${_scopeId}>\u683C\u5F0F\u5316\u548C\u7F8E\u5316 JSON</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Code), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSON \u683C\u5F0F\u5316"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u683C\u5F0F\u5316\u548C\u7F8E\u5316 JSON")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSON \u8F6C Model</p><p class="text-xs text-muted-foreground"${_scopeId}>\u751F\u6210\u6570\u636E\u6A21\u578B\u7C7B</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FileText, { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSON \u8F6C Model"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u751F\u6210\u6570\u636E\u6A21\u578B\u7C7B")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSONPath</p><p class="text-xs text-muted-foreground"${_scopeId}>JSON \u6570\u636E\u67E5\u8BE2</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Search), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSONPath"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "JSON \u6570\u636E\u67E5\u8BE2")
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

export { _sfc_main as default };
//# sourceMappingURL=json-schema-BR7fnHX1.mjs.map
