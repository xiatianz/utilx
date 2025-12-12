import { _ as __nuxt_component_0 } from "./nuxt-link-Bb2DNygF.js";
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import { Code, Info, FileText, ArrowRight, FileJson, Database } from "lucide-vue-next";
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
  __name: "sql-to-model",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedLanguage = ref("java");
    const sqlInput = ref("");
    const copied = ref(false);
    const parsedTable = ref(null);
    const options = ref({
      useLombok: true,
      useDataAnnotations: true,
      generateConstructors: false,
      generateGettersSetters: false
    });
    const languages = [
      { value: "java", name: "Java", description: "支持 JPA/Hibernate 注解" },
      { value: "python", name: "Python", description: "支持 SQLAlchemy/Django 模型" },
      { value: "csharp", name: "C#", description: "支持 Entity Framework" },
      { value: "typescript", name: "TypeScript", description: "支持 TypeORM/Prisma" },
      { value: "php", name: "PHP", description: "支持 Laravel/Eloquent" },
      { value: "go", name: "Go", description: "支持 GORM 标签" }
    ];
    const generatedModel = computed(() => {
      if (!parsedTable.value) return "";
      switch (selectedLanguage.value) {
        case "java":
          return generateJavaModel();
        case "python":
          return generatePythonModel();
        case "csharp":
          return generateCSharpModel();
        case "typescript":
          return generateTypeScriptModel();
        case "php":
          return generatePHPModel();
        case "go":
          return generateGoModel();
        default:
          return "";
      }
    });
    const parseSQL = (sql) => {
      if (!sql) return null;
      const createTableMatch = sql.match(/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?`?(\w+)`?\s*\(([\s\S]*)\)/i);
      if (!createTableMatch) return null;
      const tableName = createTableMatch[1];
      const columnsText = createTableMatch[2];
      const columns = [];
      const lines = columnsText.split(",").map((line) => line.trim());
      for (const line of lines) {
        if (!line || line.toLowerCase().includes("primary key") || line.toLowerCase().includes("unique key") || line.toLowerCase().includes("foreign key") || line.toLowerCase().includes("index")) {
          continue;
        }
        const columnMatch = line.match(/^`?(\w+)`?\s+(\w+(?:\(\d+(?:,\d+)?\))?)(?:\s+(.*))?$/);
        if (columnMatch) {
          const [, name, type, constraints] = columnMatch;
          const column = {
            name,
            type: type.toUpperCase(),
            nullable: !constraints || !constraints.toLowerCase().includes("not null"),
            primaryKey: constraints && constraints.toLowerCase().includes("primary key"),
            autoIncrement: constraints && (constraints.toLowerCase().includes("auto_increment") || constraints.toLowerCase().includes("autoincrement")),
            unique: constraints && constraints.toLowerCase().includes("unique"),
            defaultValue: null
          };
          const defaultMatch = constraints?.match(/default\s+(['"]?)([^'"]+)\1/i);
          if (defaultMatch) {
            column.defaultValue = defaultMatch[2];
          }
          columns.push(column);
        }
      }
      return {
        tableName,
        className: toPascalCase(tableName),
        columns
      };
    };
    const toPascalCase = (str) => {
      return str.split(/[_-]/).map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
    };
    const toCamelCase = (str) => {
      const pascal = toPascalCase(str);
      return pascal.charAt(0).toLowerCase() + pascal.slice(1);
    };
    const mapDataType = (sqlType, language) => {
      const type = sqlType.toLowerCase();
      switch (language) {
        case "java":
          if (type.includes("int")) return type.includes("bigint") ? "Long" : "Integer";
          if (type.includes("varchar") || type.includes("char") || type.includes("text")) return "String";
          if (type.includes("decimal") || type.includes("double")) return "BigDecimal";
          if (type.includes("float")) return "Double";
          if (type.includes("boolean") || type.includes("tinyint(1)")) return "Boolean";
          if (type.includes("date") || type.includes("timestamp")) return "LocalDateTime";
          return "Object";
        case "python":
          if (type.includes("int")) return "int";
          if (type.includes("varchar") || type.includes("char") || type.includes("text")) return "str";
          if (type.includes("decimal") || type.includes("double") || type.includes("float")) return "float";
          if (type.includes("boolean") || type.includes("tinyint(1)")) return "bool";
          if (type.includes("date") || type.includes("timestamp")) return "datetime";
          return "str";
        case "csharp":
          if (type.includes("bigint")) return "long";
          if (type.includes("int")) return "int";
          if (type.includes("varchar") || type.includes("char") || type.includes("text")) return "string";
          if (type.includes("decimal")) return "decimal";
          if (type.includes("double")) return "double";
          if (type.includes("float")) return "float";
          if (type.includes("boolean") || type.includes("tinyint(1)")) return "bool";
          if (type.includes("date") || type.includes("timestamp")) return "DateTime";
          return "object";
        case "typescript":
          if (type.includes("int") || type.includes("bigint") || type.includes("decimal") || type.includes("double") || type.includes("float")) return "number";
          if (type.includes("varchar") || type.includes("char") || type.includes("text")) return "string";
          if (type.includes("boolean") || type.includes("tinyint(1)")) return "boolean";
          if (type.includes("date") || type.includes("timestamp")) return "Date";
          return "any";
        case "php":
          if (type.includes("int") || type.includes("bigint")) return "int";
          if (type.includes("varchar") || type.includes("char") || type.includes("text")) return "string";
          if (type.includes("decimal") || type.includes("double") || type.includes("float")) return "float";
          if (type.includes("boolean") || type.includes("tinyint(1)")) return "bool";
          if (type.includes("date") || type.includes("timestamp")) return "string";
          return "mixed";
        case "go":
          if (type.includes("bigint")) return "int64";
          if (type.includes("int")) return "int";
          if (type.includes("varchar") || type.includes("char") || type.includes("text")) return "string";
          if (type.includes("decimal") || type.includes("double")) return "float64";
          if (type.includes("float")) return "float32";
          if (type.includes("boolean") || type.includes("tinyint(1)")) return "bool";
          if (type.includes("date") || type.includes("timestamp")) return "time.Time";
          return "interface{}";
        default:
          return "any";
      }
    };
    const generateJavaModel = () => {
      if (!parsedTable.value) return "";
      let imports = /* @__PURE__ */ new Set();
      if (options.value.useLombok) {
        imports.add("lombok.Data");
        imports.add("lombok.NoArgsConstructor");
        imports.add("lombok.AllArgsConstructor");
      }
      if (options.value.useDataAnnotations) {
        imports.add("javax.persistence.*");
      }
      let result = "";
      if (imports.size > 0) {
        result += Array.from(imports).map((imp) => `import ${imp};`).join("\n") + "\n\n";
      }
      const annotations = [];
      if (options.value.useDataAnnotations) {
        annotations.push(`@Entity`);
        annotations.push(`@Table(name = "${parsedTable.value.tableName}")`);
      }
      if (annotations.length > 0) {
        result += annotations.join("\n") + "\n";
      }
      result += "\n";
      if (options.value.useLombok) {
        result += "@Data\n";
        if (options.value.generateConstructors) {
          result += "@NoArgsConstructor\n";
          result += "@AllArgsConstructor\n";
        }
      }
      result += `public class ${parsedTable.value.className} {
`;
      for (const column of parsedTable.value.columns) {
        const javaType = mapDataType(column.type, "java");
        const fieldName = toCamelCase(column.name);
        if (options.value.useDataAnnotations) {
          if (column.primaryKey) {
            result += `    @Id
`;
            if (column.autoIncrement) {
              result += `    @GeneratedValue(strategy = GenerationType.IDENTITY)
`;
            }
          }
          result += `    @Column(name = "${column.name}"${column.nullable ? "" : ", nullable = false"})
`;
        }
        result += `    private ${javaType} ${fieldName};

`;
      }
      if (!options.value.useLombok && (options.value.generateGettersSetters || options.value.generateConstructors)) {
        if (options.value.generateGettersSetters) {
          for (const column of parsedTable.value.columns) {
            const javaType = mapDataType(column.type, "java");
            const fieldName = toCamelCase(column.name);
            const fieldNameUpper = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
            result += `
    public ${javaType} get${fieldNameUpper}() {
`;
            result += `        return ${fieldName};
`;
            result += `    }
`;
            result += `
    public void set${fieldNameUpper}(${javaType} ${fieldName}) {
`;
            result += `        this.${fieldName} = ${fieldName};
`;
            result += `    }
`;
          }
        }
        if (options.value.generateConstructors) {
          const fields = parsedTable.value.columns.map((col) => toCamelCase(col.name));
          const types = parsedTable.value.columns.map((col) => mapDataType(col.type, "java"));
          result += `
    public ${parsedTable.value.className}() {
`;
          result += `    }
`;
          result += `
    public ${parsedTable.value.className}(${types.join(", ")} ${fields.join(", ")}) {
`;
          for (const column of parsedTable.value.columns) {
            const fieldName = toCamelCase(column.name);
            result += `        this.${fieldName} = ${fieldName};
`;
          }
          result += `    }
`;
        }
      }
      result += "}";
      return result;
    };
    const generatePythonModel = () => {
      if (!parsedTable.value) return "";
      let result = "from sqlalchemy import Column, Integer, String, Boolean, DateTime, Numeric\n";
      result += "from sqlalchemy.ext.declarative import declarative_base\n\n";
      result += "Base = declarative_base()\n\n";
      result += `class ${parsedTable.value.className}(Base):
`;
      result += `    __tablename__ = '${parsedTable.value.tableName}'

`;
      for (const column of parsedTable.value.columns) {
        mapDataType(column.type, "python");
        let sqlalchemyType = "String";
        if (column.type.includes("int")) {
          sqlalchemyType = column.type.includes("bigint") ? "BigInteger" : "Integer";
        } else if (column.type.includes("varchar") || column.type.includes("char")) {
          const lengthMatch = column.type.match(/\((\d+)\)/);
          sqlalchemyType = `String(${lengthMatch ? lengthMatch[1] : 255})`;
        } else if (column.type.includes("text")) {
          sqlalchemyType = "Text";
        } else if (column.type.includes("decimal") || column.type.includes("double")) {
          sqlalchemyType = "Numeric";
        } else if (column.type.includes("float")) {
          sqlalchemyType = "Float";
        } else if (column.type.includes("boolean") || column.type.includes("tinyint(1)")) {
          sqlalchemyType = "Boolean";
        } else if (column.type.includes("date") || column.type.includes("timestamp")) {
          sqlalchemyType = "DateTime";
        }
        const options2 = [];
        if (column.primaryKey) options2.push("primary_key=True");
        if (column.autoIncrement) options2.push("autoincrement=True");
        if (!column.nullable) options2.push("nullable=False");
        if (column.defaultValue !== null) options2.push(`default=${column.defaultValue}`);
        result += `    ${column.name} = Column(${sqlalchemyType}${options2.length ? ", " + options2.join(", ") : ""})
`;
      }
      result += "\n    def __repr__(self):\n";
      result += `        return f"<${parsedTable.value.className}(id={self.id})>"
`;
      return result;
    };
    const generateCSharpModel = () => {
      if (!parsedTable.value) return "";
      let result = "using System;\n";
      result += "using System.ComponentModel.DataAnnotations;\n";
      result += "using System.ComponentModel.DataAnnotations.Schema;\n\n";
      result += `public class ${parsedTable.value.className}
{
`;
      for (const column of parsedTable.value.columns) {
        const csharpType = mapDataType(column.type, "csharp");
        const propertyName = toPascalCase(column.name);
        if (column.primaryKey) {
          result += `    [Key]
`;
          if (column.autoIncrement) {
            result += `    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
`;
          }
        }
        result += `    [Column("${column.name}"])
`;
        result += `    public ${csharpType} ${propertyName} { get; set; }

`;
      }
      result += "}";
      return result;
    };
    const generateTypeScriptModel = () => {
      if (!parsedTable.value) return "";
      let result = `export interface ${parsedTable.value.className} {
`;
      for (const column of parsedTable.value.columns) {
        const tsType = mapDataType(column.type, "typescript");
        const propertyName = toCamelCase(column.name);
        const optional = column.nullable ? "?" : "";
        result += `    ${propertyName}${optional}: ${tsType};
`;
      }
      result += "}";
      return result;
    };
    const generatePHPModel = () => {
      if (!parsedTable.value) return "";
      let result = `<?php

`;
      result += `namespace AppModels;

`;
      result += `use IlluminateDatabaseEloquentModel;

`;
      result += `class ${parsedTable.value.className} extends Model
{
`;
      result += `    protected $table = '${parsedTable.value.tableName}';
`;
      result += `    protected $fillable = [
`;
      const fillable = parsedTable.value.columns.filter((col) => !col.autoIncrement).map((col) => `        '${col.name}'`).join(",\n");
      result += fillable + "\n    ];\n";
      result += "\n    protected $casts = [\n";
      const casts = [];
      for (const column of parsedTable.value.columns) {
        const phpType = mapDataType(column.type, "php");
        if (phpType !== "string") {
          casts.push(`        '${column.name}' => '${phpType}'`);
        }
      }
      if (casts.length > 0) {
        result += casts.join(",\n") + "\n";
      }
      result += "    ];\n";
      result += "\n    public $timestamps = false;\n";
      result += "\n}\n";
      return result;
    };
    const generateGoModel = () => {
      if (!parsedTable.value) return "";
      let result = "package models\n\n";
      result += 'import "time"\n\n';
      result += `type ${parsedTable.value.className} struct {
`;
      for (const column of parsedTable.value.columns) {
        const goType = mapDataType(column.type, "go");
        const propertyName = toPascalCase(column.name);
        let tags = [];
        tags.push(`json:"${column.name}"`);
        tags.push(`gorm:"column:${column.name}`);
        if (column.primaryKey) tags.push("primaryKey");
        if (column.autoIncrement) tags.push("autoIncrement");
        if (!column.nullable) tags.push("not null");
        if (column.defaultValue !== null) tags.push(`default:${column.defaultValue}`);
        tags.push('"');
        result += `    ${propertyName} ${goType} \` ${tags.join(" ")} \`
`;
      }
      result += "}\n";
      result += `
func (m *${parsedTable.value.className}) TableName() string {
`;
      result += `    return "${parsedTable.value.tableName}"
`;
      result += "}\n";
      return result;
    };
    watch(sqlInput, (newVal) => {
      parsedTable.value = parseSQL(newVal);
    });
    useSeoMeta({
      title: "SQL 转 Model 类 - 在线代码生成工具",
      description: "免费的在线 SQL 转 Model 类工具，支持将 CREATE TABLE 语句转换为 Java、Python、C#、TypeScript、PHP、Go 等多种编程语言的实体类。",
      keywords: ["sql", "model", "代码生成", "java", "python", "csharp", "typescript", "php", "go", "orm"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">SQL 转 Model 类</h1><p class="text-muted-foreground">将 SQL 语句转换为各种编程语言的 Model 类，支持主流开发框架</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">目标语言</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(languages, (lang) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          selectedLanguage.value === lang.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(lang.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(lang.description)}</div></button>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">SQL 语句</h2><div class="flex gap-2"><button class="text-sm text-primary hover:text-primary/80 transition-colors"> 加载示例 </button><button class="text-sm text-muted-foreground hover:text-foreground transition-colors"> 清空 </button></div></div><textarea placeholder="输入 CREATE TABLE 语句..." class="w-full h-64 px-4 py-3 border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(sqlInput.value)}</textarea><div class="mt-4 space-y-3"><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.useLombok) ? ssrLooseContain(options.value.useLombok, null) : options.value.useLombok) ? " checked" : ""} type="checkbox" id="useLombok" class="rounded text-primary focus:ring-primary"><label for="useLombok" class="text-sm">使用 Lombok 注解 (Java)</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.useDataAnnotations) ? ssrLooseContain(options.value.useDataAnnotations, null) : options.value.useDataAnnotations) ? " checked" : ""} type="checkbox" id="useDataAnnotations" class="rounded text-primary focus:ring-primary"><label for="useDataAnnotations" class="text-sm">使用数据注解</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.generateConstructors) ? ssrLooseContain(options.value.generateConstructors, null) : options.value.generateConstructors) ? " checked" : ""} type="checkbox" id="generateConstructors" class="rounded text-primary focus:ring-primary"><label for="generateConstructors" class="text-sm">生成构造函数</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.generateGettersSetters) ? ssrLooseContain(options.value.generateGettersSetters, null) : options.value.generateGettersSetters) ? " checked" : ""} type="checkbox" id="generateGettersSetters" class="rounded text-primary focus:ring-primary"><label for="generateGettersSetters" class="text-sm">生成 Getter/Setter</label></div></div></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">生成结果</h2><div class="flex gap-2"><button${ssrIncludeBooleanAttr(!generatedModel.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "已复制" : "复制")}</button><button${ssrIncludeBooleanAttr(!generatedModel.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 下载 </button></div></div><div class="border rounded-lg p-4 bg-muted/30 min-h-[500px] max-h-[600px] overflow-auto">`);
      if (generatedModel.value) {
        _push(`<pre class="text-sm whitespace-pre-wrap font-mono"><code>${ssrInterpolate(generatedModel.value)}</code></pre>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-12">`);
        _push(ssrRenderComponent(unref(Code), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>请输入 SQL 语句后生成 Model 类</p></div>`);
      }
      _push(`</div></div>`);
      if (parsedTable.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">表结构</h2><div class="overflow-auto"><table class="w-full text-sm"><thead><tr class="border-b"><th class="text-left py-2">字段名</th><th class="text-left py-2">类型</th><th class="text-left py-2">约束</th><th class="text-left py-2">默认值</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(parsedTable.value.columns, (column) => {
          _push(`<tr class="border-b"><td class="py-2 font-mono">${ssrInterpolate(column.name)}</td><td class="py-2">${ssrInterpolate(column.type)}</td><td class="py-2">`);
          if (column.nullable) {
            _push(`<span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">NULL</span>`);
          } else {
            _push(`<!---->`);
          }
          if (column.primaryKey) {
            _push(`<span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">PK</span>`);
          } else {
            _push(`<!---->`);
          }
          if (column.autoIncrement) {
            _push(`<span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AUTO</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td class="py-2 font-mono text-xs">${ssrInterpolate(column.defaultValue || "-")}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` 支持的 SQL 格式 </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">标准 CREATE TABLE 语句</h4><code class="block bg-muted p-3 rounded-md font-mono text-sm"> CREATE TABLE users (<br>   id INT PRIMARY KEY AUTO_INCREMENT,<br>   username VARCHAR(50) NOT NULL UNIQUE,<br>   email VARCHAR(100) NOT NULL,<br>   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP<br> ); </code></div><div><h4 class="font-medium text-foreground mb-2">支持的数据类型映射</h4><ul class="list-disc list-inside space-y-1"><li>INT, INTEGER → int/Integer</li><li>BIGINT → long/Long</li><li>VARCHAR, CHAR, TEXT → String</li><li>DECIMAL, DOUBLE, FLOAT → double/Double</li><li>BOOLEAN, TINYINT(1) → boolean/Boolean</li><li>DATE, DATETIME, TIMESTAMP → Date/LocalDateTime</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">相关工具</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/json-to-model",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSON 转 Model</p><p class="text-xs text-muted-foreground"${_scopeId}>JSON 数据转模型类</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSON 转 Model"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "JSON 数据转模型类")
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
            _push2(ssrRenderComponent(unref(FileJson), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>XML 转 Model</p><p class="text-xs text-muted-foreground"${_scopeId}>XML 数据转模型类</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileJson), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "XML 转 Model"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "XML 数据转模型类")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/sql-formatter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Database), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>SQL 格式化</p><p class="text-xs text-muted-foreground"${_scopeId}>格式化 SQL 语句</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Database), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "SQL 格式化"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "格式化 SQL 语句")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/sql-to-model.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sql-to-model-BW6jw5p3.js.map
