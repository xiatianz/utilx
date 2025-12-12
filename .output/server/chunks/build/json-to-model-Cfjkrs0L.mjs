import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
import { FileJson, Info, Database, ArrowRight, FileText, Code } from 'lucide-vue-next';
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
  __name: "json-to-model",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedLanguage = ref("typescript");
    const jsonInput = ref("");
    const copied = ref(false);
    const parsedJson = ref(null);
    const options = ref({
      rootClassName: "RootModel",
      generateImmutable: false,
      useOptionalTypes: true,
      generateAnnotations: true
    });
    const languages = [
      { value: "typescript", name: "TypeScript", description: "\u7C7B\u578B\u5B89\u5168\u7684 JavaScript" },
      { value: "java", name: "Java", description: "\u4F01\u4E1A\u7EA7\u5F00\u53D1\u8BED\u8A00" },
      { value: "python", name: "Python", description: "\u52A8\u6001\u7C7B\u578B\u8BED\u8A00" },
      { value: "csharp", name: "C#", description: ".NET \u5E73\u53F0\u8BED\u8A00" },
      { value: "go", name: "Go", description: "\u9AD8\u6548\u5E76\u53D1\u8BED\u8A00" },
      { value: "kotlin", name: "Kotlin", description: "JVM \u65B0\u5174\u8BED\u8A00" }
    ];
    const typeAnalysis = computed(() => {
      if (!parsedJson.value) return null;
      const analysis = {};
      const analyzeType = (obj, prefix = "") => {
        if (Array.isArray(obj)) {
          if (obj.length > 0) {
            analyzeType(obj[0], prefix);
          }
        } else if (typeof obj === "object" && obj !== null) {
          const className = prefix || options.value.rootClassName;
          analysis[className] = "class";
          for (const [key, value] of Object.entries(obj)) {
            if (typeof value === "object" && value !== null) {
              if (Array.isArray(value)) {
                if (value.length > 0 && typeof value[0] === "object") {
                  const itemClassName = toPascalCase(key);
                  analyzeType(value[0], itemClassName);
                }
              } else {
                const subClassName = toPascalCase(key);
                analyzeType(value, subClassName);
              }
            }
          }
        }
      };
      analyzeType(parsedJson.value);
      return analysis;
    });
    const generatedModel = computed(() => {
      if (!parsedJson.value) return "";
      switch (selectedLanguage.value) {
        case "typescript":
          return generateTypeScriptModel();
        case "java":
          return generateJavaModel();
        case "python":
          return generatePythonModel();
        case "csharp":
          return generateCSharpModel();
        case "go":
          return generateGoModel();
        case "kotlin":
          return generateKotlinModel();
        default:
          return "";
      }
    });
    const toPascalCase = (str) => {
      return str.replace(/(?:^|[_-])(\w)/g, (_, char) => char.toUpperCase());
    };
    const toCamelCase = (str) => {
      const pascal = toPascalCase(str);
      return pascal.charAt(0).toLowerCase() + pascal.slice(1);
    };
    const inferType = (value, language) => {
      if (value === null || value === void 0) {
        switch (language) {
          case "typescript":
            return options.value.useOptionalTypes ? "any | null" : "any";
          case "java":
            return "Object";
          case "python":
            return "Any";
          case "csharp":
            return "object";
          case "go":
            return "interface{}";
          case "kotlin":
            return "Any?";
          default:
            return "any";
        }
      }
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return `${inferType(null, language)}[]`;
        }
        const itemType = inferType(value[0], language);
        return `${itemType}[]`;
      }
      if (typeof value === "object") {
        switch (language) {
          case "typescript":
            return toPascalCase(Object.keys(value)[0] || "Item");
          case "java":
            return toPascalCase(Object.keys(value)[0] || "Item");
          case "python":
            return toPascalCase(Object.keys(value)[0] || "Item");
          case "csharp":
            return toPascalCase(Object.keys(value)[0] || "Item");
          case "go":
            return toPascalCase(Object.keys(value)[0] || "Item");
          case "kotlin":
            return toPascalCase(Object.keys(value)[0] || "Item");
          default:
            return "Object";
        }
      }
      switch (typeof value) {
        case "string":
          if (value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)) {
            switch (language) {
              case "typescript":
                return "Date";
              case "java":
                return "LocalDateTime";
              case "python":
                return "datetime";
              case "csharp":
                return "DateTime";
              case "go":
                return "time.Time";
              case "kotlin":
                return "LocalDateTime";
              default:
                return "string";
            }
          }
          switch (language) {
            case "typescript":
              return "string";
            case "java":
              return "String";
            case "python":
              return "str";
            case "csharp":
              return "string";
            case "go":
              return "string";
            case "kotlin":
              return "String";
            default:
              return "string";
          }
        case "number":
          if (Number.isInteger(value)) {
            switch (language) {
              case "typescript":
                return "number";
              case "java":
                return "Integer";
              case "python":
                return "int";
              case "csharp":
                return "int";
              case "go":
                return "int";
              case "kotlin":
                return "Int";
              default:
                return "number";
            }
          } else {
            switch (language) {
              case "typescript":
                return "number";
              case "java":
                return "Double";
              case "python":
                return "float";
              case "csharp":
                return "double";
              case "go":
                return "float64";
              case "kotlin":
                return "Double";
              default:
                return "number";
            }
          }
        case "boolean":
          switch (language) {
            case "typescript":
              return "boolean";
            case "java":
              return "Boolean";
            case "python":
              return "bool";
            case "csharp":
              return "bool";
            case "go":
              return "bool";
            case "kotlin":
              return "Boolean";
            default:
              return "boolean";
          }
        default:
          return "any";
      }
    };
    const generateTypeScriptModel = () => {
      const classes = /* @__PURE__ */ new Map();
      const generateClass = (obj, className) => {
        if (classes.has(className)) return classes.get(className);
        let result = "";
        if (className === options.value.rootClassName) {
          result += `export interface ${className} {
`;
        } else {
          result += `export interface ${className} {
`;
        }
        for (const [key, value] of Object.entries(obj)) {
          const propertyKey = toCamelCase(key);
          let type = inferType(value, "typescript");
          if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            const subClassName = toPascalCase(key);
            type = generateClass(value, subClassName);
          } else if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object") {
            const itemClassName = toPascalCase(key);
            generateClass(value[0], itemClassName);
            type = `${itemClassName}[]`;
          }
          const optional = options.value.useOptionalTypes && (value === null || value === void 0);
          result += `  ${propertyKey}${optional ? "?" : ""}: ${type};
`;
        }
        result += "}\n";
        classes.set(className, result);
        return className;
      };
      generateClass(parsedJson.value, options.value.rootClassName);
      return Array.from(classes.values()).join("\n");
    };
    const generateJavaModel = () => {
      const classes = /* @__PURE__ */ new Map();
      const generateClass = (obj, className) => {
        if (classes.has(className)) return classes.get(className);
        let result = `public class ${className} {
`;
        for (const [key, value] of Object.entries(obj)) {
          const fieldName = toCamelCase(key);
          const fieldType = inferType(value, "java");
          if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            const subClassName = toPascalCase(key);
            generateClass(value, subClassName);
          } else if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object") {
            const itemClassName = toPascalCase(key);
            generateClass(value[0], itemClassName);
          }
          if (options.value.generateAnnotations) {
            if (key !== fieldName) {
              result += `    @JsonProperty("${key}")
`;
            }
          }
          result += `    private ${fieldType} ${fieldName};

`;
        }
        for (const [key, value] of Object.entries(obj)) {
          const fieldName = toCamelCase(key);
          const fieldNameUpper = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
          const fieldType = inferType(value, "java");
          result += `    public ${fieldType} get${fieldNameUpper}() {
`;
          result += `        return ${fieldName};
`;
          result += `    }

`;
          result += `    public void set${fieldNameUpper}(${fieldType} ${fieldName}) {
`;
          result += `        this.${fieldName} = ${fieldName};
`;
          result += `    }

`;
        }
        result += "}\n";
        classes.set(className, result);
        return className;
      };
      generateClass(parsedJson.value, options.value.rootClassName);
      let output = "";
      if (options.value.generateAnnotations) {
        output = "import com.fasterxml.jackson.annotation.JsonProperty;\n\n";
      }
      output += Array.from(classes.values()).join("\n");
      return output;
    };
    const generatePythonModel = () => {
      const classes = /* @__PURE__ */ new Map();
      const generateClass = (obj, className) => {
        if (classes.has(className)) return classes.get(className);
        let result = `from typing import Optional, List, Dict, Any
`;
        result += `from dataclasses import dataclass

`;
        result += `@dataclass
`;
        result += `class ${className}:
`;
        for (const [key, value] of Object.entries(obj)) {
          const fieldName = toCamelCase(key);
          let fieldType = inferType(value, "python");
          if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            const subClassName = toPascalCase(key);
            generateClass(value, subClassName);
          } else if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object") {
            const itemClassName = toPascalCase(key);
            generateClass(value[0], itemClassName);
            fieldType = `List[${itemClassName}]`;
          } else if (Array.isArray(value)) {
            const itemType = value.length > 0 ? inferType(value[0], "python") : "Any";
            fieldType = `List[${itemType}]`;
          }
          if (options.value.useOptionalTypes && (value === null || value === void 0)) {
            fieldType = `Optional[${fieldType}]`;
          }
          result += `    ${fieldName}: ${fieldType}
`;
        }
        classes.set(className, result);
        return className;
      };
      generateClass(parsedJson.value, options.value.rootClassName);
      return Array.from(classes.values()).join("\n");
    };
    const generateCSharpModel = () => {
      const classes = /* @__PURE__ */ new Map();
      const generateClass = (obj, className) => {
        if (classes.has(className)) return classes.get(className);
        let result = `using System;
`;
        result += `using System.Collections.Generic;
`;
        result += `using Newtonsoft.Json;

`;
        result += `public class ${className}
{
`;
        for (const [key, value] of Object.entries(obj)) {
          const propertyName = toPascalCase(key);
          let fieldType = inferType(value, "csharp");
          if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            const subClassName = toPascalCase(key);
            generateClass(value, subClassName);
          } else if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object") {
            const itemClassName = toPascalCase(key);
            generateClass(value[0], itemClassName);
            fieldType = `List<${itemClassName}>`;
          } else if (Array.isArray(value)) {
            const itemType = value.length > 0 ? inferType(value[0], "csharp") : "object";
            fieldType = `List<${itemType}>`;
          }
          if (options.value.generateAnnotations && key !== propertyName) {
            result += `    [JsonProperty("${key}")]
`;
          }
          result += `    public ${fieldType} ${propertyName} { get; set; }

`;
        }
        result += "}\n";
        classes.set(className, result);
        return className;
      };
      generateClass(parsedJson.value, options.value.rootClassName);
      return Array.from(classes.values()).join("\n");
    };
    const generateGoModel = () => {
      const classes = /* @__PURE__ */ new Map();
      const generateClass = (obj, className) => {
        if (classes.has(className)) return classes.get(className);
        let result = `package models

`;
        result += `import "time"

`;
        result += `type ${className} struct {
`;
        for (const [key, value] of Object.entries(obj)) {
          const fieldName = toPascalCase(key);
          let fieldType = inferType(value, "go");
          if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            const subClassName = toPascalCase(key);
            generateClass(value, subClassName);
          } else if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object") {
            const itemClassName = toPascalCase(key);
            generateClass(value[0], itemClassName);
            fieldType = `[]${itemClassName}`;
          } else if (Array.isArray(value)) {
            const itemType = value.length > 0 ? inferType(value[0], "go") : "interface{}";
            fieldType = `[]${itemType}`;
          }
          const jsonTag = key === fieldName ? `json:"${key}"` : `json:"${key}" bson:"${fieldName}"`;
          result += `    ${fieldName} ${fieldType} \` ${jsonTag} \`
`;
        }
        result += "}\n";
        classes.set(className, result);
        return className;
      };
      generateClass(parsedJson.value, options.value.rootClassName);
      return Array.from(classes.values()).join("\n");
    };
    const generateKotlinModel = () => {
      const classes = /* @__PURE__ */ new Map();
      const generateClass = (obj, className) => {
        if (classes.has(className)) return classes.get(className);
        let result = `import com.fasterxml.jackson.annotation.JsonProperty

`;
        if (options.value.generateImmutable) {
          result += `data class ${className}(
`;
          const fields = [];
          for (const [key, value] of Object.entries(obj)) {
            const fieldName = toCamelCase(key);
            let fieldType = inferType(value, "kotlin");
            if (typeof value === "object" && value !== null && !Array.isArray(value)) {
              const subClassName = toPascalCase(key);
              generateClass(value, subClassName);
            } else if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object") {
              const itemClassName = toPascalCase(key);
              generateClass(value[0], itemClassName);
              fieldType = `List<${itemClassName}>`;
            } else if (Array.isArray(value)) {
              const itemType = value.length > 0 ? inferType(value[0], "kotlin") : "Any";
              fieldType = `List<${itemType}>`;
            }
            if (options.value.useOptionalTypes && (value === null || value === void 0)) {
              fieldType += "?";
            }
            const annotation = key !== fieldName ? `@JsonProperty("${key}") ` : "";
            fields.push(`    ${annotation}val ${fieldName}: ${fieldType}`);
          }
          result += fields.join(",\n") + "\n)\n";
        } else {
          result += `class ${className} {
`;
          for (const [key, value] of Object.entries(obj)) {
            const fieldName = toCamelCase(key);
            fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
            let fieldType = inferType(value, "kotlin");
            if (typeof value === "object" && value !== null && !Array.isArray(value)) {
              const subClassName = toPascalCase(key);
              generateClass(value, subClassName);
            } else if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object") {
              const itemClassName = toPascalCase(key);
              generateClass(value[0], itemClassName);
              fieldType = `List<${itemClassName}>`;
            } else if (Array.isArray(value)) {
              const itemType = value.length > 0 ? inferType(value[0], "kotlin") : "Any";
              fieldType = `List<${itemType}>`;
            }
            if (options.value.generateAnnotations && key !== fieldName) {
              result += `    @JsonProperty("${key}")
`;
            }
            if (options.value.useOptionalTypes && (value === null || value === void 0)) {
              fieldType += "?";
            }
            result += `    lateinit var ${fieldName}: ${fieldType}

`;
          }
          result += "}\n";
        }
        classes.set(className, result);
        return className;
      };
      generateClass(parsedJson.value, options.value.rootClassName);
      return Array.from(classes.values()).join("\n");
    };
    const parseJson = () => {
      try {
        parsedJson.value = JSON.parse(jsonInput.value);
      } catch (error) {
        parsedJson.value = null;
        console.error("JSON \u89E3\u6790\u9519\u8BEF", error);
      }
    };
    watch(jsonInput, () => {
      parseJson();
    }, { immediate: true });
    useSeoMeta({
      title: "JSON \u8F6C Model \u7C7B - \u5728\u7EBF\u4EE3\u7801\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF JSON \u8F6C Model \u7C7B\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 JSON \u6570\u636E\u81EA\u52A8\u8F6C\u6362\u4E3A TypeScript\u3001Java\u3001Python\u3001C#\u3001Go\u3001Kotlin \u7B49\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u7684\u6A21\u578B\u7C7B\u3002",
      keywords: ["json", "model", "\u4EE3\u7801\u751F\u6210", "typescript", "java", "python", "csharp", "go", "kotlin", "\u6570\u636E\u7ED3\u6784"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">JSON \u8F6C Model \u7C7B</h1><p class="text-muted-foreground">\u5C06 JSON \u6570\u636E\u81EA\u52A8\u8F6C\u6362\u4E3A\u5404\u79CD\u7F16\u7A0B\u8BED\u8A00\u7684 Model \u7C7B\uFF0C\u652F\u6301\u590D\u6742\u5D4C\u5957\u7ED3\u6784</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u76EE\u6807\u8BED\u8A00</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(languages, (lang) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          selectedLanguage.value === lang.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(lang.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(lang.description)}</div></button>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">JSON \u6570\u636E</h2><div class="flex gap-2"><button class="text-sm text-primary hover:text-primary/80 transition-colors"> \u52A0\u8F7D\u793A\u4F8B </button><button class="text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button><button${ssrIncludeBooleanAttr(!jsonInput.value) ? " disabled" : ""} class="text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u683C\u5F0F\u5316 </button></div></div><textarea placeholder="\u8F93\u5165 JSON \u6570\u636E..." class="w-full h-80 px-4 py-3 border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(jsonInput.value)}</textarea><div class="mt-4 space-y-3"><div><label class="text-sm font-medium">\u6839\u7C7B\u540D\u79F0</label><input${ssrRenderAttr("value", options.value.rootClassName)} type="text" placeholder="RootModel" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.generateImmutable) ? ssrLooseContain(options.value.generateImmutable, null) : options.value.generateImmutable) ? " checked" : ""} type="checkbox" id="generateImmutable" class="rounded text-primary focus:ring-primary"><label for="generateImmutable" class="text-sm">\u751F\u6210\u4E0D\u53EF\u53D8\u7C7B</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.useOptionalTypes) ? ssrLooseContain(options.value.useOptionalTypes, null) : options.value.useOptionalTypes) ? " checked" : ""} type="checkbox" id="useOptionalTypes" class="rounded text-primary focus:ring-primary"><label for="useOptionalTypes" class="text-sm">\u4F7F\u7528\u53EF\u9009\u7C7B\u578B</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.generateAnnotations) ? ssrLooseContain(options.value.generateAnnotations, null) : options.value.generateAnnotations) ? " checked" : ""} type="checkbox" id="generateAnnotations" class="rounded text-primary focus:ring-primary"><label for="generateAnnotations" class="text-sm">\u751F\u6210\u6CE8\u89E3</label></div></div></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u751F\u6210\u7ED3\u679C</h2><div class="flex gap-2"><button${ssrIncludeBooleanAttr(!generatedModel.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button><button${ssrIncludeBooleanAttr(!generatedModel.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u4E0B\u8F7D </button></div></div><div class="border rounded-lg p-4 bg-muted/30 min-h-[500px] max-h-[600px] overflow-auto">`);
      if (generatedModel.value) {
        _push(`<pre class="text-sm whitespace-pre-wrap font-mono"><code>${ssrInterpolate(generatedModel.value)}</code></pre>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-12">`);
        _push(ssrRenderComponent(unref(FileJson), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>\u8BF7\u8F93\u5165 JSON \u6570\u636E\u540E\u751F\u6210 Model \u7C7B</p></div>`);
      }
      _push(`</div></div>`);
      if (typeAnalysis.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u7C7B\u578B\u5206\u6790</h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(typeAnalysis.value, (type, name) => {
          _push(`<div class="flex items-center justify-between p-2 bg-muted rounded"><span class="font-mono text-sm">${ssrInterpolate(name)}</span><span class="text-xs text-muted-foreground">${ssrInterpolate(type)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u652F\u6301\u7684 JSON \u683C\u5F0F </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u57FA\u672C\u7C7B\u578B\u6620\u5C04</h4><ul class="list-disc list-inside space-y-1"><li>\u5B57\u7B26\u4E32 \u2192 String / str / string</li><li>\u6570\u5B57 \u2192 Integer / Double / number / int</li><li>\u5E03\u5C14\u503C \u2192 Boolean / bool / boolean</li><li>\u6570\u7EC4 \u2192 List / Array / array</li><li>\u5BF9\u8C61 \u2192 \u81EA\u5B9A\u4E49\u7C7B / interface</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u7279\u6B8A\u5904\u7406</h4><ul class="list-disc list-inside space-y-1"><li>\u81EA\u52A8\u8BC6\u522B\u5D4C\u5957\u5BF9\u8C61\u5E76\u751F\u6210\u5BF9\u5E94\u7684\u7C7B</li><li>\u652F\u6301\u6570\u7EC4\u548C\u5BF9\u8C61\u7684\u590D\u6742\u5D4C\u5957\u7ED3\u6784</li><li>\u81EA\u52A8\u8F6C\u6362\u9A7C\u5CF0\u547D\u540D\u548C\u4E0B\u5212\u7EBF\u547D\u540D</li><li>\u5904\u7406 null \u503C\u548C\u53EF\u9009\u5B57\u6BB5</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/sql-to-model",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Database), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>SQL \u8F6C Model</p><p class="text-xs text-muted-foreground"${_scopeId}>SQL\u8BED\u53E5\u8F6C\u6A21\u578B\u7C7B</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Database), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "SQL \u8F6C Model"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "SQL\u8BED\u53E5\u8F6C\u6A21\u578B\u7C7B")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/xml-to-model",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>XML \u8F6C Model</p><p class="text-xs text-muted-foreground"${_scopeId}>XML\u6570\u636E\u8F6C\u6A21\u578B\u7C7B</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "XML \u8F6C Model"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "XML\u6570\u636E\u8F6C\u6A21\u578B\u7C7B")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/json-formatter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Code), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSON \u683C\u5F0F\u5316</p><p class="text-xs text-muted-foreground"${_scopeId}>\u683C\u5F0F\u5316JSON\u6570\u636E</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Code), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSON \u683C\u5F0F\u5316"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u683C\u5F0F\u5316JSON\u6570\u636E")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/json-to-model.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=json-to-model-Cfjkrs0L.mjs.map
