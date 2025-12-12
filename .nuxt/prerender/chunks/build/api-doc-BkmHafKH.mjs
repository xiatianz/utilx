import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { Trash2, X, Info, FileText, ArrowRight, Globe, Code } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { f as useSeoMeta } from './server.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs';
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
  __name: "api-doc",
  __ssrInlineRender: true,
  setup(__props) {
    const inputMode = ref("manual");
    const outputFormat = ref("markdown");
    const copied = ref(false);
    const apiInfo = ref({
      name: "",
      version: "v1.0.0",
      baseUrl: "",
      description: ""
    });
    const endpoints = ref([]);
    const inputModes = [
      { value: "manual", name: "\u624B\u52A8\u914D\u7F6E" },
      { value: "swagger", name: "\u5BFC\u5165 Swagger" },
      { value: "postman", name: "\u5BFC\u5165 Postman" }
    ];
    const outputFormats = [
      { value: "markdown", name: "Markdown", description: "\u9002\u7528\u4E8E\u6587\u6863\u7F16\u5199" },
      { value: "html", name: "HTML", description: "\u9002\u7528\u4E8E\u7F51\u9875\u5C55\u793A" },
      { value: "pdf", name: "PDF", description: "\u9002\u7528\u4E8E\u6253\u5370\u5206\u4EAB" },
      { value: "openapi", name: "OpenAPI", description: "\u6807\u51C6 API \u89C4\u8303" }
    ];
    const templates = [
      {
        name: "REST API",
        description: "\u6807\u51C6 RESTful API",
        data: {
          name: "\u793A\u4F8B API",
          version: "v1.0.0",
          baseUrl: "https://api.example.com",
          endpoints: [
            {
              method: "GET",
              path: "/users",
              description: "\u83B7\u53D6\u7528\u6237\u5217\u8868",
              parameters: []
            },
            {
              method: "POST",
              path: "/users",
              description: "\u521B\u5EFA\u65B0\u7528\u6237",
              parameters: [
                { name: "name", type: "string", location: "body" },
                { name: "email", type: "string", location: "body" }
              ]
            }
          ]
        }
      },
      {
        name: "\u535A\u5BA2 API",
        description: "\u535A\u5BA2\u7CFB\u7EDF API",
        data: {
          name: "\u535A\u5BA2 API",
          version: "v1.0.0",
          baseUrl: "https://blog-api.example.com",
          endpoints: [
            {
              method: "GET",
              path: "/posts",
              description: "\u83B7\u53D6\u6587\u7AE0\u5217\u8868",
              parameters: [
                { name: "page", type: "number", location: "query" },
                { name: "limit", type: "number", location: "query" }
              ]
            },
            {
              method: "GET",
              path: "/posts/{id}",
              description: "\u83B7\u53D6\u6587\u7AE0\u8BE6\u60C5",
              parameters: [
                { name: "id", type: "string", location: "path" }
              ]
            }
          ]
        }
      }
    ];
    const generatedDoc = computed(() => {
      if (!apiInfo.value.name || endpoints.value.length === 0) return "";
      switch (outputFormat.value) {
        case "markdown":
          return generateMarkdown();
        case "html":
          return generateHTML();
        case "openapi":
          return generateOpenAPI();
        default:
          return generateMarkdown();
      }
    });
    const generateMarkdown = () => {
      let doc = `# ${apiInfo.value.name} API \u6587\u6863

`;
      doc += `**\u7248\u672C\uFF1A** ${apiInfo.value.version}

`;
      doc += `**Base URL\uFF1A** \`${apiInfo.value.baseUrl}\`

`;
      if (apiInfo.value.description) {
        doc += `## \u7B80\u4ECB

${apiInfo.value.description}

`;
      }
      doc += `## API \u7AEF\u70B9

`;
      endpoints.value.forEach((endpoint, index) => {
        var _a, _b;
        doc += `### ${endpoint.method} ${endpoint.path}

`;
        if (endpoint.description) {
          doc += `${endpoint.description}

`;
        }
        if (endpoint.parameters && endpoint.parameters.length > 0) {
          doc += `#### \u53C2\u6570

`;
          doc += `| \u53C2\u6570\u540D | \u7C7B\u578B | \u4F4D\u7F6E | \u5FC5\u586B | \u8BF4\u660E |
`;
          doc += `|--------|------|------|------|------|
`;
          endpoint.parameters.forEach((param) => {
            doc += `| ${param.name} | ${param.type} | ${param.location} | \u662F | - |
`;
          });
          doc += `
`;
        }
        doc += `#### \u8BF7\u6C42\u793A\u4F8B

`;
        doc += `\`\`\`bash
`;
        if (endpoint.method === "GET") {
          let url = `${apiInfo.value.baseUrl}${endpoint.path}`;
          const queryParams = (_a = endpoint.parameters) == null ? void 0 : _a.filter((p) => p.location === "query");
          if (queryParams && queryParams.length > 0) {
            url += "?" + queryParams.map((p) => `${p.name}=xxx`).join("&");
          }
          doc += `curl -X GET "${url}"
`;
        } else if (endpoint.method === "POST") {
          doc += `curl -X POST "${apiInfo.value.baseUrl}${endpoint.path}" \\
`;
          doc += `  -H "Content-Type: application/json" \\
`;
          const bodyParams = (_b = endpoint.parameters) == null ? void 0 : _b.filter((p) => p.location === "body");
          if (bodyParams && bodyParams.length > 0) {
            const body = bodyParams.reduce((obj, param) => {
              obj[param.name] = `xxx`;
              return obj;
            }, {});
            doc += `  -d '${JSON.stringify(body, null, 2)}'
`;
          }
        }
        doc += `\`\`\`

`;
        doc += `#### \u54CD\u5E94\u793A\u4F8B

`;
        doc += `\`\`\`json
`;
        doc += `{
`;
        doc += `  "code": 200,
`;
        doc += `  "message": "success",
`;
        doc += `  "data": {}
`;
        doc += `}
`;
        doc += `\`\`\`

`;
      });
      return doc;
    };
    const generateHTML = () => {
      let html = `<!DOCTYPE html>
<html>
<head>
  <title>${apiInfo.value.name} API \u6587\u6863</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1 { color: #333; }
    h2 { color: #666; border-bottom: 1px solid #eee; padding-bottom: 10px; }
    .endpoint { margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 5px; }
    .method { display: inline-block; padding: 3px 8px; border-radius: 3px; color: white; font-size: 12px; }
    .get { background: #61affe; }
    .post { background: #49cc90; }
    .put { background: #fca130; }
    .delete { background: #f93e3e; }
    code { background: #f0f0f0; padding: 2px 5px; border-radius: 3px; }
    pre { background: #f0f0f0; padding: 10px; border-radius: 5px; overflow-x: auto; }
  </style>
</head>
<body>
  <h1>${apiInfo.value.name} API \u6587\u6863</h1>
  <p><strong>\u7248\u672C\uFF1A</strong>${apiInfo.value.version}</p>
  <p><strong>Base URL\uFF1A</strong><code>${apiInfo.value.baseUrl}</code></p>

  <h2>API \u7AEF\u70B9</h2>`;
      endpoints.value.forEach((endpoint) => {
        const methodClass = endpoint.method.toLowerCase();
        html += `
  <div class="endpoint">
    <h3><span class="method ${methodClass}">${endpoint.method}</span> ${endpoint.path}</h3>
    <p>${endpoint.description || ""}</p>`;
        if (endpoint.parameters && endpoint.parameters.length > 0) {
          html += `
    <h4>\u53C2\u6570</h4>
    <table>
      <tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u4F4D\u7F6E</th><th>\u5FC5\u586B</th></tr>`;
          endpoint.parameters.forEach((param) => {
            html += `
      <tr>
        <td>${param.name}</td>
        <td>${param.type}</td>
        <td>${param.location}</td>
        <td>\u662F</td>
      </tr>`;
          });
          html += `
    </table>`;
        }
        html += `
  </div>`;
      });
      html += `
</body>
</html>`;
      return html;
    };
    const generateOpenAPI = () => {
      const openapi = {
        openapi: "3.0.0",
        info: {
          title: apiInfo.value.name,
          version: apiInfo.value.version,
          description: apiInfo.value.description
        },
        servers: [
          {
            url: apiInfo.value.baseUrl
          }
        ],
        paths: {}
      };
      endpoints.value.forEach((endpoint) => {
        const pathItem = {
          [endpoint.method.toLowerCase()]: {
            summary: endpoint.description,
            parameters: []
          }
        };
        if (endpoint.parameters) {
          endpoint.parameters.forEach((param) => {
            if (param.location === "path") {
              pathItem[endpoint.method.toLowerCase()].parameters.push({
                name: param.name,
                in: "path",
                required: true,
                schema: { type: param.type }
              });
            } else if (param.location === "query") {
              pathItem[endpoint.method.toLowerCase()].parameters.push({
                name: param.name,
                in: "query",
                schema: { type: param.type }
              });
            }
          });
        }
        openapi.paths[endpoint.path] = pathItem;
      });
      return JSON.stringify(openapi, null, 2);
    };
    useSeoMeta({
      title: "API \u6587\u6863\u751F\u6210\u5668 - \u5728\u7EBF API \u6587\u6863\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF API \u6587\u6863\u751F\u6210\u5DE5\u5177\uFF0C\u6839\u636E API \u63CF\u8FF0\u81EA\u52A8\u751F\u6210\u683C\u5F0F\u5316\u7684\u6587\u6863\uFF0C\u652F\u6301 Markdown\u3001HTML\u3001PDF \u7B49\u591A\u79CD\u8F93\u51FA\u683C\u5F0F\u3002",
      keywords: ["api", "\u6587\u6863\u751F\u6210", "openapi", "swagger", "rest api", "\u6587\u6863\u5DE5\u5177"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">API \u6587\u6863\u751F\u6210\u5668</h1><p class="text-muted-foreground">\u6839\u636E API \u63CF\u8FF0\u81EA\u52A8\u751F\u6210\u683C\u5F0F\u5316\u7684 API \u6587\u6863\uFF0C\u652F\u6301\u591A\u79CD\u8F93\u51FA\u683C\u5F0F</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8F93\u5165\u65B9\u5F0F</h2><div class="flex gap-2 mb-4"><!--[-->`);
      ssrRenderList(inputModes, (mode) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-2 rounded-md transition-colors text-sm",
          inputMode.value === mode.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}">${ssrInterpolate(mode.name)}</button>`);
      });
      _push(`<!--]--></div><div class="space-y-4"><div><label class="text-sm font-medium">API \u540D\u79F0</label><input${ssrRenderAttr("value", apiInfo.value.name)} type="text" placeholder="\u4F8B\u5982\uFF1A\u7528\u6237\u7BA1\u7406 API" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">API \u7248\u672C</label><input${ssrRenderAttr("value", apiInfo.value.version)} type="text" placeholder="\u4F8B\u5982\uFF1Av1.0.0" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">Base URL</label><input${ssrRenderAttr("value", apiInfo.value.baseUrl)} type="text" placeholder="\u4F8B\u5982\uFF1Ahttps://api.example.com" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div></div></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">API \u7AEF\u70B9</h2><button class="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"> \u6DFB\u52A0\u7AEF\u70B9 </button></div><div class="space-y-4"><!--[-->`);
      ssrRenderList(endpoints.value, (endpoint, index) => {
        _push(`<div class="p-4 border rounded-lg space-y-3"><div class="flex justify-between items-center"><span class="text-sm font-medium">\u7AEF\u70B9 ${ssrInterpolate(index + 1)}</span><button class="text-red-500 hover:text-red-700 transition-colors">`);
        _push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div><div class="grid grid-cols-2 gap-3"><div><label class="text-xs text-muted-foreground">\u8BF7\u6C42\u65B9\u6CD5</label><select class="mt-1 w-full px-2 py-1 border rounded text-sm"><option value="GET"${ssrIncludeBooleanAttr(Array.isArray(endpoint.method) ? ssrLooseContain(endpoint.method, "GET") : ssrLooseEqual(endpoint.method, "GET")) ? " selected" : ""}>GET</option><option value="POST"${ssrIncludeBooleanAttr(Array.isArray(endpoint.method) ? ssrLooseContain(endpoint.method, "POST") : ssrLooseEqual(endpoint.method, "POST")) ? " selected" : ""}>POST</option><option value="PUT"${ssrIncludeBooleanAttr(Array.isArray(endpoint.method) ? ssrLooseContain(endpoint.method, "PUT") : ssrLooseEqual(endpoint.method, "PUT")) ? " selected" : ""}>PUT</option><option value="DELETE"${ssrIncludeBooleanAttr(Array.isArray(endpoint.method) ? ssrLooseContain(endpoint.method, "DELETE") : ssrLooseEqual(endpoint.method, "DELETE")) ? " selected" : ""}>DELETE</option><option value="PATCH"${ssrIncludeBooleanAttr(Array.isArray(endpoint.method) ? ssrLooseContain(endpoint.method, "PATCH") : ssrLooseEqual(endpoint.method, "PATCH")) ? " selected" : ""}>PATCH</option></select></div><div><label class="text-xs text-muted-foreground">\u8DEF\u5F84</label><input${ssrRenderAttr("value", endpoint.path)} type="text" placeholder="/users/{id}" class="mt-1 w-full px-2 py-1 border rounded text-sm"></div></div><div><label class="text-xs text-muted-foreground">\u63CF\u8FF0</label><input${ssrRenderAttr("value", endpoint.description)} type="text" placeholder="\u83B7\u53D6\u7528\u6237\u4FE1\u606F" class="mt-1 w-full px-2 py-1 border rounded text-sm"></div><div><label class="text-xs text-muted-foreground">\u53C2\u6570</label><div class="mt-2 space-y-2"><!--[-->`);
        ssrRenderList(endpoint.parameters, (param, pIndex) => {
          _push(`<div class="flex gap-2 items-center"><input${ssrRenderAttr("value", param.name)} type="text" placeholder="\u53C2\u6570\u540D" class="flex-1 px-2 py-1 border rounded text-sm"><select class="px-2 py-1 border rounded text-sm"><option value="string"${ssrIncludeBooleanAttr(Array.isArray(param.type) ? ssrLooseContain(param.type, "string") : ssrLooseEqual(param.type, "string")) ? " selected" : ""}>string</option><option value="number"${ssrIncludeBooleanAttr(Array.isArray(param.type) ? ssrLooseContain(param.type, "number") : ssrLooseEqual(param.type, "number")) ? " selected" : ""}>number</option><option value="boolean"${ssrIncludeBooleanAttr(Array.isArray(param.type) ? ssrLooseContain(param.type, "boolean") : ssrLooseEqual(param.type, "boolean")) ? " selected" : ""}>boolean</option><option value="object"${ssrIncludeBooleanAttr(Array.isArray(param.type) ? ssrLooseContain(param.type, "object") : ssrLooseEqual(param.type, "object")) ? " selected" : ""}>object</option></select><select class="px-2 py-1 border rounded text-sm"><option value="path"${ssrIncludeBooleanAttr(Array.isArray(param.location) ? ssrLooseContain(param.location, "path") : ssrLooseEqual(param.location, "path")) ? " selected" : ""}>Path</option><option value="query"${ssrIncludeBooleanAttr(Array.isArray(param.location) ? ssrLooseContain(param.location, "query") : ssrLooseEqual(param.location, "query")) ? " selected" : ""}>Query</option><option value="body"${ssrIncludeBooleanAttr(Array.isArray(param.location) ? ssrLooseContain(param.location, "body") : ssrLooseEqual(param.location, "body")) ? " selected" : ""}>Body</option></select><button class="text-red-500 hover:text-red-700 transition-colors">`);
          _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
          _push(`</button></div>`);
        });
        _push(`<!--]--><button class="text-sm text-primary hover:text-primary/80 transition-colors"> + \u6DFB\u52A0\u53C2\u6570 </button></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u8F93\u51FA\u683C\u5F0F</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(outputFormats, (format) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          outputFormat.value === format.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(format.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(format.description)}</div></button>`);
      });
      _push(`<!--]--></div></div><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u6587\u6863\u9884\u89C8</h2><div class="flex gap-2"><button class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button><button class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"> \u4E0B\u8F7D </button></div></div><div class="border rounded-lg p-4 bg-muted/30 min-h-[400px] max-h-[600px] overflow-auto">`);
      if (generatedDoc.value) {
        _push(`<pre class="text-sm whitespace-pre-wrap">${ssrInterpolate(generatedDoc.value)}</pre>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-8"> \u8BF7\u914D\u7F6E API \u4FE1\u606F\u540E\u751F\u6210\u6587\u6863 </div>`);
      }
      _push(`</div></div><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5FEB\u901F\u6A21\u677F</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(templates, (template) => {
        _push(`<button class="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors text-left"><div class="font-medium text-sm">${ssrInterpolate(template.name)}</div><div class="text-xs text-muted-foreground">${ssrInterpolate(template.description)}</div></button>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` \u4F7F\u7528\u8BF4\u660E </h3><div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">1. \u914D\u7F6E\u57FA\u672C\u4FE1\u606F</h4><p>\u586B\u5199 API \u540D\u79F0\u3001\u7248\u672C\u548C Base URL \u7B49\u57FA\u672C\u4FE1\u606F\u3002</p></div><div><h4 class="font-medium text-foreground mb-2">2. \u6DFB\u52A0 API \u7AEF\u70B9</h4><p>\u70B9\u51FB&quot;\u6DFB\u52A0\u7AEF\u70B9&quot;\u6309\u94AE\uFF0C\u914D\u7F6E\u6BCF\u4E2A\u7AEF\u70B9\u7684\u8BF7\u6C42\u65B9\u6CD5\u3001\u8DEF\u5F84\u3001\u53C2\u6570\u7B49\u4FE1\u606F\u3002</p></div><div><h4 class="font-medium text-foreground mb-2">3. \u9009\u62E9\u8F93\u51FA\u683C\u5F0F</h4><p>\u652F\u6301 Markdown\u3001HTML\u3001PDF \u7B49\u591A\u79CD\u6587\u6863\u683C\u5F0F\u3002</p></div><div><h4 class="font-medium text-foreground mb-2">4. \u751F\u6210\u548C\u5BFC\u51FA</h4><p>\u5B9E\u65F6\u9884\u89C8\u751F\u6210\u7684\u6587\u6863\uFF0C\u652F\u6301\u590D\u5236\u6216\u4E0B\u8F7D\u5BFC\u51FA\u3002</p></div></div></div><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4">\u76F8\u5173\u5DE5\u5177</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/swagger-viewer",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>Swagger \u67E5\u770B\u5668</p><p class="text-xs text-muted-foreground"${_scopeId}>\u67E5\u770B\u548C\u6D4B\u8BD5 API \u6587\u6863</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FileText), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "Swagger \u67E5\u770B\u5668"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u67E5\u770B\u548C\u6D4B\u8BD5 API \u6587\u6863")
              ]),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tools/http-client",
        class: "flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Globe), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>HTTP \u5BA2\u6237\u7AEF</p><p class="text-xs text-muted-foreground"${_scopeId}>\u6D4B\u8BD5 API \u8BF7\u6C42</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Globe), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "HTTP \u5BA2\u6237\u7AEF"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u6D4B\u8BD5 API \u8BF7\u6C42")
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
            _push2(`<div${_scopeId}><p class="font-medium group-hover:text-primary"${_scopeId}>JSON \u683C\u5F0F\u5316</p><p class="text-xs text-muted-foreground"${_scopeId}>\u683C\u5F0F\u5316 JSON \u6570\u636E</p></div>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Code), { class: "w-5 h-5 text-primary" }),
              createVNode("div", null, [
                createVNode("p", { class: "font-medium group-hover:text-primary" }, "JSON \u683C\u5F0F\u5316"),
                createVNode("p", { class: "text-xs text-muted-foreground" }, "\u683C\u5F0F\u5316 JSON \u6570\u636E")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/api-doc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=api-doc-BkmHafKH.mjs.map
