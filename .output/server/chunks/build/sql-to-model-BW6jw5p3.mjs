import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
import { Code, Info, FileText, ArrowRight, FileJson, Database } from 'lucide-vue-next';
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
      { value: "java", name: "Java", description: "\u652F\u6301 JPA/Hibernate \u6CE8\u89E3" },
      { value: "python", name: "Python", description: "\u652F\u6301 SQLAlchemy/Django \u6A21\u578B" },
      { value: "csharp", name: "C#", description: "\u652F\u6301 Entity Framework" },
      { value: "typescript", name: "TypeScript", description: "\u652F\u6301 TypeORM/Prisma" },
      { value: "php", name: "PHP", description: "\u652F\u6301 Laravel/Eloquent" },
      { value: "go", name: "Go", description: "\u652F\u6301 GORM \u6807\u7B7E" }
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
          const defaultMatch = constraints == null ? void 0 : constraints.match(/default\s+(['"]?)([^'"]+)\1/i);
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
      title: "SQL \u8F6C Model \u7C7B - \u5728\u7EBF\u4EE3\u7801\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF SQL \u8F6C Model \u7C7B\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 CREATE TABLE \u8BED\u53E5\u8F6C\u6362\u4E3A Java\u3001Python\u3001C#\u3001TypeScript\u3001PHP\u3001Go \u7B49\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u7684\u5B9E\u4F53\u7C7B\u3002",
      keywords: ["sql", "model", "\u4EE3\u7801\u751F\u6210", "java", "python", "csharp", "typescript", "php", "go", "orm"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">SQL \u8F6C Model \u7C7B</h1><p class="text-muted-foreground">\u5C06 SQL \u8BED\u53E5\u8F6C\u6362\u4E3A\u5404\u79CD\u7F16\u7A0B\u8BED\u8A00\u7684 Model \u7C7B\uFF0C\u652F\u6301\u4E3B\u6D41\u5F00\u53D1\u6846\u67B6</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u76EE\u6807\u8BED\u8A00</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(languages, (lang) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          selectedLanguage.value === lang.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(lang.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(lang.description)}</div></button>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">SQL \u8BED\u53E5</h2><div class="flex gap-2"><button class="text-sm text-primary hover:text-primary/80 transition-colors"> \u52A0\u8F7D\u793A\u4F8B </button><button class="text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button></div></div><textarea placeholder="\u8F93\u5165 CREATE TABLE \u8BED\u53E5..." class="w-full h-64 px-4 py-3 border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(sqlInput.value)}</textarea><div class="mt-4 space-y-3"><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.useLombok) ? ssrLooseContain(options.value.useLombok, null) : options.value.useLombok) ? " checked" : ""} type="checkbox" id="useLombok" class="rounded text-primary focus:ring-primary"><label for="useLombok" class="text-sm">\u4F7F\u7528 Lombok \u6CE8\u89E3 (Java)</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.useDataAnnotations) ? ssrLooseContain(options.value.useDataAnnotations, null) : options.value.useDataAnnotations) ? " checked" : ""} type="checkbox" id="useDataAnnotations" class="rounded text-primary focus:ring-primary"><label for="useDataAnnotations" class="text-sm">\u4F7F\u7528\u6570\u636E\u6CE8\u89E3</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.generateConstructors) ? ssrLooseContain(options.value.generateConstructors, null) : options.value.generateConstructors) ? " checked" : ""} type="checkbox" id="generateConstructors" class="rounded text-primary focus:ring-primary"><label for="generateConstructors" class="text-sm">\u751F\u6210\u6784\u9020\u51FD\u6570</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.generateGettersSetters) ? ssrLooseContain(options.value.generateGettersSetters, null) : options.value.generateGettersSetters) ? " checked" : ""} type="checkbox" id="generateGettersSetters" class="rounded text-primary focus:ring-primary"><label for="generateGettersSetters" class="text-sm">\u751F\u6210 Getter/Setter</label></div></div></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u751F\u6210\u7ED3\u679C</h2><div class="flex gap-2"><button${ssrIncludeBooleanAttr(!generatedModel.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button><button${ssrIncludeBooleanAttr(!generatedModel.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u4E0B\u8F7D </button></div></div><div class="border rounded-lg p-4 bg-muted/30 min-h-[500px] max-h-[600px] overflow-auto">`);
      if (generatedModel.value) {
        _push(`<pre class="text-sm whitespace-pre-wrap font-mono"><code>${ssrInterpolate(generatedModel.value)}</code></pre>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-12">`);
        _push(ssrRenderComponent(unref(Code), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>\u8BF7\u8F93\u5165 SQL \u8BED\u53E5\u540E\u751F\u6210 Model \u7C7B</p></div>`);
      }
      _push(`</div></div>`);
      if (parsedTable.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8868\u7ED3\u6784</h2><div class="overflow-auto"><table class="w-full text-sm"><thead><tr class="border-b"><th class="text-left py-2">\u5B57\u6BB5\u540D</th><th class="text-left py-2">\u7C7B\u578B</th><th class="text-left py-2">\u7EA6\u675F</th><th class="text-left py-2">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><!--[-->`);
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
      _push(` \u652F\u6301\u7684 SQL \u683C\u5F0F </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u6807\u51C6 CREATE TABLE \u8BED\u53E5</h4><code class="block bg-muted p-3 rounded-md font-mono text-sm"> CREATE TABLE users (<br> \xA0\xA0id INT PRIMARY KEY AUTO_INCREMENT,<br> \xA0\xA0username VARCHAR(50) NOT NULL UNIQUE,<br> \xA0\xA0email VARCHAR(100) NOT NULL,<br> \xA0\xA0created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP<br> ); </code></div><div><h4 class="font-medium text-foreground mb-2">\u652F\u6301\u7684\u6570\u636E\u7C7B\u578B\u6620\u5C04</h4><ul class="list-disc list-inside space-y-1"><li>INT, INTEGER \u2192 int/Integer</li><li>BIGINT \u2192 long/Long</li><li>VARCHAR, CHAR, TEXT \u2192 String</li><li>DECIMAL, DOUBLE, FLOAT \u2192 double/Double</li><li>BOOLEAN, TINYINT(1) \u2192 boolean/Boolean</li><li>DATE, DATETIME, TIMESTAMP \u2192 Date/LocalDateTime</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/json-to-model",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSON \u8F6C Model</p><p class="text-xs text-muted-foreground"${_scopeId}>JSON \u6570\u636E\u8F6C\u6A21\u578B\u7C7B</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSON \u8F6C Model"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "JSON \u6570\u636E\u8F6C\u6A21\u578B\u7C7B")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>XML \u8F6C Model</p><p class="text-xs text-muted-foreground"${_scopeId}>XML \u6570\u636E\u8F6C\u6A21\u578B\u7C7B</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileJson), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "XML \u8F6C Model"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "XML \u6570\u636E\u8F6C\u6A21\u578B\u7C7B")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>SQL \u683C\u5F0F\u5316</p><p class="text-xs text-muted-foreground"${_scopeId}>\u683C\u5F0F\u5316 SQL \u8BED\u53E5</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Database), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "SQL \u683C\u5F0F\u5316"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u683C\u5F0F\u5316 SQL \u8BED\u53E5")
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

export { _sfc_main as default };
//# sourceMappingURL=sql-to-model-BW6jw5p3.mjs.map
