import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
import { FileText, Info, FileJson, ArrowRight, Database, Code } from 'lucide-vue-next';
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
  __name: "xml-to-model",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedLanguage = ref("java");
    const xmlInput = ref("");
    const copied = ref(false);
    const parsedXml = ref(null);
    const options = ref({
      rootClassName: "RootModel",
      useAttributes: true,
      useXmlAnnotations: true,
      generateCollections: true
    });
    const languages = [
      { constue: "java", name: "Java", description: "\u652F\u6301 JAXB \u6CE8\u89E3" },
      { constue: "csharp", name: "C#", description: "\u652F\u6301 XmlSerializer" },
      { constue: "python", name: "Python", description: "\u652F\u6301 dataclasses" },
      { constue: "typescript", name: "TypeScript", description: "\u652F\u6301\u88C5\u9970\u5668" },
      { constue: "kotlin", name: "Kotlin", description: "\u652F\u6301 Kotlinx Serialization" },
      { constue: "go", name: "Go", description: "\u652F\u6301 xml \u6807\u7B7E" }
    ];
    const xmlStructure = computed(() => {
      if (!parsedXml.constue) return null;
      const structure = {};
      const analyzeElement = (element) => {
        var _a;
        const name = element.tagName;
        if (!structure[name]) {
          structure[name] = {
            attributes: 0,
            children: 0,
            hasText: false
          };
        }
        if (element.attributes) {
          structure[name].attributes += element.attributes.length;
        }
        const childElements = Array.from(element.children || []);
        structure[name].children += childElements.length;
        const textContent = (_a = element.textContent) == null ? void 0 : _a.trim();
        if (textContent && childElements.length === 0) {
          structure[name].hasText = true;
        }
        childElements.forEach((child) => analyzeElement(child));
      };
      if (parsedXml.constue.documentElement) {
        analyzeElement(parsedXml.constue.documentElement);
      }
      return structure;
    });
    const generatedModel = computed(() => {
      if (!parsedXml.constue) return "";
      switch (selectedLanguage.constue) {
        case "java":
          return generateJavaModel();
        case "csharp":
          return generateCSharpModel();
        case "python":
          return generatePythonModel();
        case "typescript":
          return generateTypeScriptModel();
        case "kotlin":
          return generateKotlinModel();
        case "go":
          return generateGoModel();
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
    const parseXmlElement = (element) => {
      var _a;
      const result = {
        tagName: element.tagName,
        attributes: {},
        children: [],
        textContent: null
      };
      if (element.attributes) {
        for (let i = 0; i < element.attributes.length; i++) {
          const attr = element.attributes[i];
          result.attributes[attr.name] = attr.constue;
        }
      }
      const childElements = Array.from(element.children || []);
      const childMap = /* @__PURE__ */ new Map();
      childElements.forEach((child) => {
        const parsed = parseXmlElement(child);
        if (!childMap.has(child.tagName)) {
          childMap.set(child.tagName, []);
        }
        childMap.get(child.tagName).push(parsed);
      });
      childMap.forEach((children, tagName) => {
        if (children.length === 1) {
          result.children[tagName] = children[0];
        } else {
          result.children[tagName] = children;
        }
      });
      const textContent = (_a = element.textContent) == null ? void 0 : _a.trim();
      if (textContent && childElements.length === 0) {
        result.textContent = textContent;
      }
      return result;
    };
    const inferType = (constue, language) => {
      if (constue === null || constue === void 0) {
        switch (language) {
          case "java":
            return "String";
          case "csharp":
            return "string";
          case "python":
            return "str";
          case "typescript":
            return "string";
          case "kotlin":
            return "String?";
          case "go":
            return "string";
          default:
            return "string";
        }
      }
      if (Array.isArray(constue)) {
        return constue.length > 0 ? inferType(constue[0], language) : "Object";
      }
      if (typeof constue === "object") {
        return toPascalCase(Object.keys(constue)[0] || "Item");
      }
      if (typeof constue === "string") {
        if (!isNaN(constue) && constue.trim() !== "") {
          if (constue.includes(".")) {
            switch (language) {
              case "java":
                return "Double";
              case "csharp":
                return "double";
              case "python":
                return "float";
              case "typescript":
                return "number";
              case "kotlin":
                return "Double";
              case "go":
                return "float64";
              default:
                return "number";
            }
          } else {
            switch (language) {
              case "java":
                return "Integer";
              case "csharp":
                return "int";
              case "python":
                return "int";
              case "typescript":
                return "number";
              case "kotlin":
                return "Int";
              case "go":
                return "int";
              default:
                return "number";
            }
          }
        }
        if (constue.toLowerCase() === "true" || constue.toLowerCase() === "false") {
          switch (language) {
            case "java":
              return "Boolean";
            case "csharp":
              return "bool";
            case "python":
              return "bool";
            case "typescript":
              return "boolean";
            case "kotlin":
              return "Boolean";
            case "go":
              return "bool";
            default:
              return "boolean";
          }
        }
        if (constue.match(/^\d{4}-\d{2}-\d{2}/) || constue.match(/^\d{4}\/\d{2}\/\d{2}/)) {
          switch (language) {
            case "java":
              return "LocalDateTime";
            case "csharp":
              return "DateTime";
            case "python":
              return "datetime";
            case "typescript":
              return "Date";
            case "kotlin":
              return "LocalDateTime";
            case "go":
              return "time.Time";
            default:
              return "string";
          }
        }
      }
      switch (language) {
        case "java":
          return "String";
        case "csharp":
          return "string";
        case "python":
          return "str";
        case "typescript":
          return "string";
        case "kotlin":
          return "String";
        case "go":
          return "string";
        default:
          return "string";
      }
    };
    const generateJavaModel = () => {
      const classes = /* @__PURE__ */ new Map();
      const imports = /* @__PURE__ */ new Set();
      if (options.constue.useXmlAnnotations) {
        imports.add("javax.xml.bind.annotation.*");
      }
      const generateClass = (xmlData2, className) => {
        if (classes.has(className)) return classes.get(className);
        let result = "";
        const properties = [];
        if (options.constue.useAttributes && xmlData2.attributes) {
          for (const [attrName, attrValue] of Object.entries(xmlData2.attributes)) {
            const fieldName = toCamelCase(attrName);
            const fieldType = inferType(attrValue, "java");
            properties.push({
              name: fieldName,
              type: fieldType,
              isAttribute: true,
              xmlName: attrName
            });
          }
        }
        for (const [childName, childValue] of Object.entries(xmlData2.children)) {
          if (Array.isArray(childValue)) {
            const itemClassName = toPascalCase(childName);
            generateClass(childValue[0], itemClassName);
            properties.push({
              name: toCamelCase(childName),
              type: `List<${itemClassName}>`,
              isAttribute: false,
              xmlName: childName,
              isList: true
            });
            imports.add("java.util.List");
          } else {
            const fieldType = typeof childValue === "object" ? generateClass(childValue, toPascalCase(childName)) : inferType(childValue, "java");
            properties.push({
              name: toCamelCase(childName),
              type: fieldType,
              isAttribute: false,
              xmlName: childName
            });
          }
        }
        if (xmlData2.textContent) {
          const fieldType = inferType(xmlData2.textContent, "java");
          properties.push({
            name: "constue",
            type: fieldType,
            isAttribute: false,
            xmlName: "constue"
          });
        }
        if (imports.size > 0) {
          result += Array.from(imports).map((imp) => `import ${imp};`).join("\n") + "\n\n";
        }
        result += '@XmlRootElement(name = "' + xmlData2.tagName + '")\n';
        result += `@XmlAccessorType(XmlAccessType.FIELD)
`;
        result += `public class ${className} {

`;
        properties.forEach((prop) => {
          if (prop.isAttribute) {
            result += `    @XmlAttribute(name = "${prop.xmlName}")
`;
          } else if (prop.isList) {
            result += `    @XmlElementWrapper(name = "${prop.xmlName}")
`;
            result += `    @XmlElement(name = "${toPascalCase(prop.xmlName).slice(0, -1)}")
`;
          } else if (prop.xmlName === "constue") {
            result += `    @XmlValue
`;
          } else {
            result += `    @XmlElement(name = "${prop.xmlName}")
`;
          }
          result += `    private ${prop.type} ${prop.name};

`;
        });
        properties.forEach((prop) => {
          const fieldNameUpper = prop.name.charAt(0).toUpperCase() + prop.name.slice(1);
          result += `    public ${prop.type} get${fieldNameUpper}() {
`;
          result += `        return ${prop.name};
`;
          result += `    }

`;
          result += `    public void set${fieldNameUpper}(${prop.type} ${prop.name}) {
`;
          result += `        this.${prop.name} = ${prop.name};
`;
          result += `    }

`;
        });
        result += "}\n";
        classes.set(className, result);
        return className;
      };
      const xmlData = parseXmlElement(parsedXml.constue.documentElement);
      generateClass(xmlData, options.constue.rootClassName);
      return Array.from(classes.constues()).join("\n");
    };
    const generateCSharpModel = () => {
      const classes = /* @__PURE__ */ new Map();
      const generateClass = (xmlData2, className) => {
        if (classes.has(className)) return classes.get(className);
        let result = `using System;
`;
        result += `using System.Collections.Generic;
`;
        result += `using System.Xml.Serialization;

`;
        const properties = [];
        if (options.constue.useAttributes && xmlData2.attributes) {
          for (const [attrName, attrValue] of Object.entries(xmlData2.attributes)) {
            const propertyName = toPascalCase(attrName);
            const fieldType = inferType(attrValue, "csharp");
            properties.push({
              name: propertyName,
              type: fieldType,
              isAttribute: true,
              xmlName: attrName
            });
          }
        }
        for (const [childName, childValue] of Object.entries(xmlData2.children)) {
          if (Array.isArray(childValue)) {
            const itemClassName = toPascalCase(childName);
            generateClass(childValue[0], itemClassName);
            properties.push({
              name: toPascalCase(childName),
              type: `List<${itemClassName}>`,
              isAttribute: false,
              xmlName: childName,
              isList: true
            });
          } else {
            const fieldType = typeof childValue === "object" ? generateClass(childValue, toPascalCase(childName)) : inferType(childValue, "csharp");
            properties.push({
              name: toPascalCase(childName),
              type: fieldType,
              isAttribute: false,
              xmlName: childName
            });
          }
        }
        if (xmlData2.textContent) {
          const fieldType = inferType(xmlData2.textContent, "csharp");
          properties.push({
            name: "Value",
            type: fieldType,
            isAttribute: false,
            xmlName: "constue"
          });
        }
        result += `[XmlRoot("${xmlData2.tagName}")]
`;
        result += `public class ${className}
{

`;
        properties.forEach((prop) => {
          if (prop.isAttribute) {
            result += `    [XmlAttribute("${prop.xmlName}")]
`;
          } else if (prop.isList) {
            result += `    [XmlArray("${prop.xmlName}")]
`;
            result += `    [XmlArrayItem("${toPascalCase(prop.xmlName).slice(0, -1)}")]
`;
          } else if (prop.xmlName === "constue") {
            result += `    [XmlText]
`;
          } else {
            result += `    [XmlElement("${prop.xmlName}")]
`;
          }
          result += `    public ${prop.type} ${prop.name} { get; set; }

`;
        });
        result += "}\n";
        classes.set(className, result);
        return className;
      };
      const xmlData = parseXmlElement(parsedXml.constue.documentElement);
      generateClass(xmlData, options.constue.rootClassName);
      return Array.from(classes.constues()).join("\n");
    };
    const generatePythonModel = () => {
      const classes = /* @__PURE__ */ new Map();
      const generateClass = (xmlData2, className) => {
        if (classes.has(className)) return classes.get(className);
        let result = `from dataclasses import dataclass, field
`;
        result += `from typing import List, Optional
`;
        result += `from xml.etree import ElementTree as ET

`;
        const properties = [];
        if (options.constue.useAttributes && xmlData2.attributes) {
          for (const [attrName, attrValue] of Object.entries(xmlData2.attributes)) {
            const fieldName = toCamelCase(attrName);
            const fieldType = inferType(attrValue, "python");
            properties.push({
              name: fieldName,
              type: fieldType,
              isAttribute: true,
              xmlName: attrName
            });
          }
        }
        for (const [childName, childValue] of Object.entries(xmlData2.children)) {
          if (Array.isArray(childValue)) {
            const itemClassName = toPascalCase(childName);
            generateClass(childValue[0], itemClassName);
            properties.push({
              name: toCamelCase(childName),
              type: `List[${itemClassName}]`,
              isAttribute: false,
              xmlName: childName,
              isList: true
            });
          } else {
            const fieldType = typeof childValue === "object" ? generateClass(childValue, toPascalCase(childName)) : inferType(childValue, "python");
            properties.push({
              name: toCamelCase(childName),
              type: fieldType,
              isAttribute: false,
              xmlName: childName
            });
          }
        }
        if (xmlData2.textContent) {
          const fieldType = inferType(xmlData2.textContent, "python");
          properties.push({
            name: "constue",
            type: fieldType,
            isAttribute: false,
            xmlName: "constue"
          });
        }
        result += `@dataclass
`;
        result += `class ${className}:
`;
        properties.forEach((prop) => {
          const defaultVal = prop.isList ? " = field(default_factory=list)" : "";
          result += `    ${prop.name}: ${prop.type}${defaultVal}
`;
        });
        result += `
    @classmethod
`;
        result += `    def from_xml(cls, element: ET.Element) -> '${className}':
`;
        result += `        return cls(
`;
        properties.forEach((prop, index) => {
          const comma = index < properties.length - 1 ? "," : "";
          if (prop.isAttribute) {
            result += `            ${prop.name}=${prop.type}(element.get("${prop.xmlName}"))${comma}
`;
          } else if (prop.isList) {
            result += `            ${prop.name}=[${prop.type.split("[")[1].split("]")[0]}.from_xml(child) for child in element.findall("${prop.xmlName}/${toPascalCase(prop.xmlName).slice(0, -1)}")]${comma}
`;
          } else if (prop.xmlName === "constue") {
            result += `            ${prop.name}=${prop.type}(element.text)${comma}
`;
          } else {
            result += `            ${prop.name}=${prop.type}.from_xml(element.find("${prop.xmlName}")) if element.find("${prop.xmlName}") is not None else None${comma}
`;
          }
        });
        result += `        )
`;
        classes.set(className, result);
        return className;
      };
      const xmlData = parseXmlElement(parsedXml.constue.documentElement);
      generateClass(xmlData, options.constue.rootClassName);
      return Array.from(classes.constues()).join("\n");
    };
    const generateTypeScriptModel = () => {
      const classes = /* @__PURE__ */ new Map();
      const generateClass = (xmlData2, className) => {
        if (classes.has(className)) return classes.get(className);
        let result = "";
        const properties = [];
        if (options.constue.useAttributes && xmlData2.attributes) {
          for (const [attrName, attrValue] of Object.entries(xmlData2.attributes)) {
            const propertyName = toCamelCase(attrName);
            const fieldType = inferType(attrValue, "typescript");
            properties.push({
              name: propertyName,
              type: fieldType,
              isAttribute: true,
              xmlName: attrName
            });
          }
        }
        for (const [childName, childValue] of Object.entries(xmlData2.children)) {
          if (Array.isArray(childValue)) {
            const itemClassName = toPascalCase(childName);
            generateClass(childValue[0], itemClassName);
            properties.push({
              name: toCamelCase(childName),
              type: `${itemClassName}[]`,
              isAttribute: false,
              xmlName: childName,
              isList: true
            });
          } else {
            const fieldType = typeof childValue === "object" ? generateClass(childValue, toPascalCase(childName)) : inferType(childValue, "typescript");
            properties.push({
              name: toCamelCase(childName),
              type: fieldType,
              isAttribute: false,
              xmlName: childName
            });
          }
        }
        if (xmlData2.textContent) {
          const fieldType = inferType(xmlData2.textContent, "typescript");
          properties.push({
            name: "constue",
            type: fieldType,
            isAttribute: false,
            xmlName: "constue"
          });
        }
        if (options.constue.useXmlAnnotations) {
          result += `import { XmlElement, XmlAttribute, XmlValue } from 'xml-decorators';

`;
        }
        result += `export interface ${className} {
`;
        properties.forEach((prop) => {
          if (options.constue.useXmlAnnotations) {
            if (prop.isAttribute) {
              result += `    @XmlAttribute("${prop.xmlName}")
`;
            } else if (prop.isList) {
              result += `    @XmlElement("${prop.xmlName}")
`;
            } else if (prop.xmlName === "constue") {
              result += `    @XmlValue()
`;
            } else {
              result += `    @XmlElement("${prop.xmlName}")
`;
            }
          }
          result += `    ${prop.name}: ${prop.type};
`;
        });
        result += "}\n";
        classes.set(className, result);
        return className;
      };
      const xmlData = parseXmlElement(parsedXml.constue.documentElement);
      generateClass(xmlData, options.constue.rootClassName);
      return Array.from(classes.constues()).join("\n");
    };
    const generateKotlinModel = () => {
      const classes = /* @__PURE__ */ new Map();
      const generateClass = (xmlData2, className) => {
        if (classes.has(className)) return classes.get(className);
        let result = `import kotlinx.serialization.Serializable
`;
        result += `import kotlinx.serialization.xml.*

`;
        const properties = [];
        if (options.constue.useAttributes && xmlData2.attributes) {
          for (const [attrName, attrValue] of Object.entries(xmlData2.attributes)) {
            const fieldName = toCamelCase(attrName);
            const fieldType = inferType(attrValue, "kotlin");
            properties.push({
              name: fieldName,
              type: fieldType,
              isAttribute: true,
              xmlName: attrName
            });
          }
        }
        for (const [childName, childValue] of Object.entries(xmlData2.children)) {
          if (Array.isArray(childValue)) {
            const itemClassName = toPascalCase(childName);
            generateClass(childValue[0], itemClassName);
            properties.push({
              name: toCamelCase(childName),
              type: `List<${itemClassName}>`,
              isAttribute: false,
              xmlName: childName,
              isList: true
            });
          } else {
            const fieldType = typeof childValue === "object" ? generateClass(childValue, toPascalCase(childName)) : inferType(childValue, "kotlin");
            properties.push({
              name: toCamelCase(childName),
              type: fieldType,
              isAttribute: false,
              xmlName: childName
            });
          }
        }
        if (xmlData2.textContent) {
          const fieldType = inferType(xmlData2.textContent, "kotlin");
          properties.push({
            name: "constue",
            type: fieldType,
            isAttribute: false,
            xmlName: "constue"
          });
        }
        result += `@Serializable
`;
        result += `@XmlSerialName("${xmlData2.tagName}")
`;
        result += `data class ${className}(
`;
        properties.forEach((prop, index) => {
          const comma = index < properties.length - 1 ? "," : "";
          if (prop.isAttribute) {
            result += `    @XmlAttribute("${prop.xmlName}")
`;
            result += `    const ${prop.name}: ${prop.type}${comma}
`;
          } else if (prop.isList) {
            result += `    @XmlElement("${prop.xmlName}")
`;
            result += `    const ${prop.name}: List<${prop.type.split("<")[1].split(">")[0]}> = emptyList()${comma}
`;
          } else if (prop.xmlName === "constue") {
            result += `    @XmlValue
`;
            result += `    const ${prop.name}: ${prop.type}${comma}
`;
          } else {
            result += `    @XmlElement("${prop.xmlName}")
`;
            result += `    const ${prop.name}: ${prop.type}? = null${comma}
`;
          }
        });
        result += `)
`;
        classes.set(className, result);
        return className;
      };
      const xmlData = parseXmlElement(parsedXml.constue.documentElement);
      generateClass(xmlData, options.constue.rootClassName);
      return Array.from(classes.constues()).join("\n");
    };
    const generateGoModel = () => {
      const classes = /* @__PURE__ */ new Map();
      const generateClass = (xmlData2, className) => {
        if (classes.has(className)) return classes.get(className);
        let result = `package models

`;
        result += `import "encoding/xml"

`;
        const properties = [];
        if (options.constue.useAttributes && xmlData2.attributes) {
          for (const [attrName, attrValue] of Object.entries(xmlData2.attributes)) {
            const fieldName = toPascalCase(attrName);
            const fieldType = inferType(attrValue, "go");
            properties.push({
              name: fieldName,
              type: fieldType,
              isAttribute: true,
              xmlName: attrName
            });
          }
        }
        for (const [childName, childValue] of Object.entries(xmlData2.children)) {
          if (Array.isArray(childValue)) {
            const itemClassName = toPascalCase(childName);
            generateClass(childValue[0], itemClassName);
            properties.push({
              name: toPascalCase(childName),
              type: `[]${itemClassName}`,
              isAttribute: false,
              xmlName: childName,
              isList: true
            });
          } else {
            const fieldType = typeof childValue === "object" ? generateClass(childValue, toPascalCase(childName)) : inferType(childValue, "go");
            properties.push({
              name: toPascalCase(childName),
              type: fieldType,
              isAttribute: false,
              xmlName: childName
            });
          }
        }
        if (xmlData2.textContent) {
          const fieldType = inferType(xmlData2.textContent, "go");
          properties.push({
            name: "Value",
            type: fieldType,
            isAttribute: false,
            xmlName: "constue"
          });
        }
        result += `type ${className} struct {
`;
        result += `    XMLName xml.Name \`xml:"${xmlData2.tagName}"\`
`;
        properties.forEach((prop) => {
          if (prop.isAttribute) {
            result += `    ${prop.name} ${prop.type} \`xml:"${prop.xmlName},attr"\`
`;
          } else if (prop.xmlName === "constue") {
            result += `    ${prop.name} ${prop.type} \`xml:",chardata"\`
`;
          } else {
            const xmlTag = prop.isList ? `${prop.xmlName}>${toPascalCase(prop.xmlName).slice(0, -1)}` : prop.xmlName;
            result += `    ${prop.name} ${prop.type} \`xml:"${xmlTag}"\`
`;
          }
        });
        result += `}
`;
        classes.set(className, result);
        return className;
      };
      const xmlData = parseXmlElement(parsedXml.constue.documentElement);
      generateClass(xmlData, options.constue.rootClassName);
      return Array.from(classes.constues()).join("\n");
    };
    const parseXml = () => {
      try {
        const parser = new DOMParser();
        parsedXml.constue = parser.parseFromString(xmlInput.constue, "text/xml");
        const parseError = parsedXml.constue.querySelector("parsererror");
        if (parseError) {
          parsedXml.constue = null;
          console.error("XML \u89E3\u6790\u9519\u8BEF");
        }
      } catch (error) {
        parsedXml.constue = null;
        console.error("XML \u89E3\u6790\u9519\u8BEF", error);
      }
    };
    watch(xmlInput, () => {
      parseXml();
    }, { immediate: true });
    useSeoMeta({
      title: "XML \u8F6C Model \u7C7B - \u5728\u7EBF\u4EE3\u7801\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF XML \u8F6C Model \u7C7B\u5DE5\u5177\uFF0C\u652F\u6301\u5C06 XML \u6570\u636E\u81EA\u52A8\u8F6C\u6362\u4E3A Java\u3001C#\u3001Python\u3001TypeScript\u3001Kotlin\u3001Go \u7B49\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u7684\u5B9E\u4F53\u7C7B\u3002",
      keywords: ["xml", "model", "\u4EE3\u7801\u751F\u6210", "java", "csharp", "python", "typescript", "kotlin", "go", "jaxb", "xmlserializer"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">XML \u8F6C Model \u7C7B</h1><p class="text-muted-foreground">\u5C06 XML \u6570\u636E\u81EA\u52A8\u8F6C\u6362\u4E3A\u5404\u79CD\u7F16\u7A0B\u8BED\u8A00\u7684 Model \u7C7B\uFF0C\u652F\u6301\u590D\u6742\u5D4C\u5957\u548C\u5C5E\u6027</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u76EE\u6807\u8BED\u8A00</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(languages, (lang) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          selectedLanguage.value === lang.constue ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(lang.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(lang.description)}</div></button>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">XML \u6570\u636E</h2><div class="flex gap-2"><button class="text-sm text-primary hover:text-primary/80 transition-colors"> \u52A0\u8F7D\u793A\u4F8B </button><button class="text-sm text-muted-foreground hover:text-foreground transition-colors"> \u6E05\u7A7A </button><button${ssrIncludeBooleanAttr(!xmlInput.value) ? " disabled" : ""} class="text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u683C\u5F0F\u5316 </button></div></div><textarea placeholder="\u8F93\u5165 XML \u6570\u636E..." class="w-full h-80 px-4 py-3 border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary">${ssrInterpolate(xmlInput.value)}</textarea><div class="mt-4 space-y-3"><div><label class="text-sm font-medium">\u6839\u7C7B\u540D\u79F0</label><input${ssrRenderAttr("value", options.value.rootClassName)} type="text" placeholder="RootModel" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.useAttributes) ? ssrLooseContain(options.value.useAttributes, null) : options.value.useAttributes) ? " checked" : ""} type="checkbox" id="useAttributes" class="rounded text-primary focus:ring-primary"><label for="useAttributes" class="text-sm">\u751F\u6210\u5C5E\u6027\u5B57\u6BB5</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.useXmlAnnotations) ? ssrLooseContain(options.value.useXmlAnnotations, null) : options.value.useXmlAnnotations) ? " checked" : ""} type="checkbox" id="useXmlAnnotations" class="rounded text-primary focus:ring-primary"><label for="useXmlAnnotations" class="text-sm">\u4F7F\u7528 XML \u6CE8\u89E3</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(options.value.generateCollections) ? ssrLooseContain(options.value.generateCollections, null) : options.value.generateCollections) ? " checked" : ""} type="checkbox" id="generateCollections" class="rounded text-primary focus:ring-primary"><label for="generateCollections" class="text-sm">\u751F\u6210\u96C6\u5408\u7C7B\u578B</label></div></div></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u751F\u6210\u7ED3\u679C</h2><div class="flex gap-2"><button${ssrIncludeBooleanAttr(!generatedModel.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button><button${ssrIncludeBooleanAttr(!generatedModel.value) ? " disabled" : ""} class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u4E0B\u8F7D </button></div></div><div class="border rounded-lg p-4 bg-muted/30 min-h-[500px] max-h-[600px] overflow-auto">`);
      if (generatedModel.value) {
        _push(`<pre class="text-sm whitespace-pre-wrap font-mono"><code>${ssrInterpolate(generatedModel.value)}</code></pre>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-12">`);
        _push(ssrRenderComponent(unref(FileText), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>\u8BF7\u8F93\u5165 XML \u6570\u636E\u540E\u751F\u6210 Model \u7C7B</p></div>`);
      }
      _push(`</div></div>`);
      if (xmlStructure.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">XML \u7ED3\u6784</h2><div class="space-y-2"><!--[-->`);
        ssrRenderList(xmlStructure.value, (element, name) => {
          _push(`<div class="flex items-center justify-between p-2 bg-muted rounded"><span class="font-mono text-sm">&lt;${ssrInterpolate(name)}&gt;</span><div class="flex gap-2">`);
          if (element.attributes > 0) {
            _push(`<span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">${ssrInterpolate(element.attributes)} \u5C5E\u6027 </span>`);
          } else {
            _push(`<!---->`);
          }
          if (element.children > 0) {
            _push(`<span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">${ssrInterpolate(element.children)} \u5B50\u5143\u7D20 </span>`);
          } else {
            _push(`<!---->`);
          }
          if (element.hasText) {
            _push(`<span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded"> \u6587\u672C\u5185\u5BB9 </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u652F\u6301\u7684 XML \u683C\u5F0F </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">\u57FA\u672C\u7C7B\u578B\u6620\u5C04</h4><ul class="list-disc list-inside space-y-1"><li>\u6587\u672C\u5185\u5BB9 \u2192 String / str / string</li><li>\u6570\u5B57\u6587\u672C \u2192 Integer / Double / number</li><li>\u5E03\u5C14\u6587\u672C \u2192 Boolean / bool / boolean</li><li>\u65E5\u671F\u65F6\u95F4 \u2192 Date / DateTime / LocalDateTime</li><li>\u91CD\u590D\u5143\u7D20 \u2192 List / Array / array</li></ul></div><div><h4 class="font-medium text-foreground mb-2">\u7279\u6B8A\u5904\u7406</h4><ul class="list-disc list-inside space-y-1"><li>XML \u5C5E\u6027\u81EA\u52A8\u8F6C\u6362\u4E3A\u7C7B\u5C5E\u6027</li><li>\u652F\u6301\u547D\u540D\u7A7A\u95F4\u5904\u7406</li><li>\u81EA\u52A8\u8BC6\u522B\u5D4C\u5957\u5143\u7D20</li><li>\u5904\u7406 CDATA \u548C\u6CE8\u91CA</li></ul></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/json-to-model",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileJson), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSON \u8F6C Model</p><p class="text-xs text-muted-foreground"${_scopeId}>JSON\u6570\u636E\u8F6C\u6A21\u578B\u7C7B</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileJson), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSON \u8F6C Model"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "JSON\u6570\u636E\u8F6C\u6A21\u578B\u7C7B")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
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
        to: "/tools/xml-formatter",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Code), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>XML \u683C\u5F0F\u5316</p><p class="text-xs text-muted-foreground"${_scopeId}>\u683C\u5F0F\u5316XML\u6570\u636E</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Code), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "XML \u683C\u5F0F\u5316"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u683C\u5F0F\u5316XML\u6570\u636E")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/xml-to-model.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=xml-to-model-CAXnD5Br.mjs.map
