import { _ as __nuxt_component_0 } from './nuxt-link-Bb2DNygF.mjs';
import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'file:///Users/apple/Documents/code/util/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderStyle, ssrRenderVNode } from 'file:///Users/apple/Documents/code/util/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/apple/Documents/code/util/node_modules/vue-router/vue-router.node.mjs';
import { Terminal, FileCode, Code, Copy, Download, Package, HelpCircle, ChevronUp, GitBranch, FolderOpen, Globe, FileDiff, Regex, Timer, Hash, Link, Database, Image, Wifi, Type, Clock, Shield, Lock, FileText, RotateCcw } from 'file:///Users/apple/Documents/code/util/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { t as tools } from './tools-CG9LGULA.mjs';
import { c as categories } from './categories-guMUDMNS.mjs';
import { f as useSeoMeta, e as addRecentTool } from './server.mjs';
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

const _sfc_main = {
  __name: "curl-to-code",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useSeoMeta({
      title: "cURL\u8F6C\u4EE3\u7801 - \u5728\u7EBFcURL\u547D\u4EE4\u8F6C\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u5DE5\u5177",
      meta: [
        { name: "description", content: "\u514D\u8D39\u5728\u7EBFcURL\u8F6C\u4EE3\u7801\u5DE5\u5177\uFF0C\u652F\u6301\u5C06cURL\u547D\u4EE4\u8F6C\u6362\u4E3AJavaScript\u3001Python\u3001PHP\u3001Java\u3001C#\u3001Go\u3001Ruby\u7B49\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u4EE3\u7801\u3002\u652F\u6301HTTP\u8BF7\u6C42\u3001API\u8C03\u7528\u7B49\u573A\u666F\uFF0C\u7EAF\u672C\u5730\u8F6C\u6362\uFF0C\u4EE3\u7801\u5B89\u5168\u53EF\u9760\u3002" },
        { name: "keywords", content: "cURL\u8F6C\u4EE3\u7801,HTTP\u8BF7\u6C42,API\u8C03\u7528,\u4EE3\u7801\u751F\u6210,JavaScript,Python,PHP,Java" }
      ]
    });
    const tool = tools.find((t) => t.id === "curl-to-code");
    categories.find((c) => c.id === "network");
    const curlCommand = ref("");
    const generatedCode = ref("");
    const selectedLanguage = ref("javascript");
    const codeFontSize = ref("text-sm");
    const isSeoContentVisible = ref(true);
    const iconMap = {
      Terminal,
      FileCode,
      Code,
      Package,
      Copy,
      Download,
      RotateCcw,
      FileText,
      Lock,
      Shield,
      Clock,
      Type,
      Wifi,
      Image,
      Database,
      Link,
      Hash,
      Timer,
      Regex,
      FileDiff,
      Globe,
      FolderOpen,
      GitBranch
    };
    const languages = [
      { name: "JavaScript", value: "javascript", icon: "Code" },
      { name: "Python", value: "python", icon: "Code" },
      { name: "PHP", value: "php", icon: "Code" },
      { name: "Java", value: "java", icon: "Code" },
      { name: "C#", value: "csharp", icon: "Code" },
      { name: "Go", value: "go", icon: "Code" },
      { name: "Ruby", value: "ruby", icon: "Code" },
      { name: "Shell", value: "shell", icon: "Terminal" }
    ];
    const examples = [
      {
        name: "GET\u8BF7\u6C42",
        command: "curl https://api.example.com/data"
      },
      {
        name: "POST JSON",
        command: `curl -X POST https://api.example.com/data \\
  -H "Content-Type: application/json" \\
  -d '{\\"key\\": \\"value\\"}'`
      },
      {
        name: "\u5E26\u8BA4\u8BC1",
        command: 'curl -H "Authorization: Bearer token123" https://api.example.com/data'
      },
      {
        name: "\u4E0A\u4F20\u6587\u4EF6",
        command: 'curl -X POST -F "file=@/path/to/file.jpg" https://api.example.com/upload'
      },
      {
        name: "\u8BBE\u7F6E\u8D85\u65F6",
        command: "curl --connect-timeout 10 --max-time 60 https://api.example.com/data"
      },
      {
        name: "\u8DDF\u968F\u91CD\u5B9A\u5411",
        command: "curl -L https://api.example.com/data"
      }
    ];
    const relatedTools = computed(() => {
      const sameCategory = tools.filter(
        (t) => t.category === "network" && t.id !== "curl-to-code"
      ).slice(0, 2);
      const recommended = [
        tools.find((t) => t.id === "json-formatter"),
        tools.find((t) => t.id === "base64-encode"),
        tools.find((t) => t.id === "url-encode"),
        tools.find((t) => t.id === "api-doc")
      ].filter(Boolean);
      return [...sameCategory, ...recommended].slice(0, 4);
    });
    const dependencyInfo = computed(() => {
      const deps = {
        javascript: '<p class="mb-2"><strong>Node.js:</strong> \u5185\u7F6E <code>https</code> \u6A21\u5757</p><p><strong>\u6D4F\u89C8\u5668:</strong> \u4F7F\u7528 <code>fetch</code> API</p>',
        python: '<p class="mb-1">\u5B89\u88C5 requests \u5E93:</p><pre class="bg-muted p-1 rounded text-xs"><code>pip install requests</code></pre>',
        php: "<p>\u4F7F\u7528 cURL \u6269\u5C55\uFF08\u901A\u5E38\u5DF2\u5B89\u88C5\uFF09</p>",
        java: '<p class="mb-1">\u6DFB\u52A0\u4F9D\u8D56\uFF1A</p><pre class="bg-muted p-1 rounded text-xs"><code>// Maven\n&lt;dependency&gt;\n  &lt;groupId&gt;org.apache.httpcomponents&lt;/groupId&gt;\n  &lt;artifactId&gt;httpclient&lt;/artifactId&gt;\n  &lt;version&gt;4.5.13&lt;/version&gt;\n&lt;/dependency&gt;</code></pre>',
        csharp: '<p class="mb-1">\u4F7F\u7528 HttpClient\uFF1A</p><pre class="bg-muted p-1 rounded text-xs"><code>// .NET Core\nusing System.Net.Http;\nusing System.Threading.Tasks;</code></pre>',
        go: "<p>\u5185\u7F6E <code>net/http</code> \u5305</p>",
        ruby: "<p>\u4F7F\u7528 net/http \u5E93\uFF08\u901A\u5E38\u5DF2\u5B89\u88C5\uFF09</p>",
        shell: "<p>\u76F4\u63A5\u4F7F\u7528 cURL \u547D\u4EE4</p>"
      };
      return deps[selectedLanguage.value] || "";
    });
    const convertCurl = () => {
      if (!curlCommand.value.trim()) {
        generatedCode.value = "\u8BF7\u8F93\u5165cURL\u547D\u4EE4";
        return;
      }
      try {
        const parser = parseCurl(curlCommand.value);
        generatedCode.value = generateCode(parser, selectedLanguage.value);
      } catch (error) {
        generatedCode.value = "// \u89E3\u6790\u9519\u8BEF: " + error.message;
      }
    };
    const parseCurl = (command) => {
      const result = {
        url: "",
        method: "GET",
        headers: [],
        data: null,
        options: []
      };
      const methodMatch = command.match(/-X\s+(\w+)/i);
      if (methodMatch) {
        result.method = methodMatch[1].toUpperCase();
      }
      const urlMatch = command.match(/\s+(https?:\/\/[^\s]+)/i);
      if (urlMatch) {
        result.url = urlMatch[1];
      }
      const headerMatches = command.matchAll(/-H\s+['"]([^'"]+)['"]/gi);
      if (headerMatches) {
        result.headers = headerMatches.map((match) => {
          const [key, value] = match[1].split(/:\s*/);
          return { key: key.trim(), value: value.trim() };
        });
      }
      const dataMatch = command.match(/-d\s+['"]([^'"]+)['"]/i);
      if (dataMatch) {
        result.data = dataMatch[1];
      }
      return result;
    };
    const generateCode = (parsed, language) => {
      switch (language) {
        case "javascript":
          return generateJavaScript(parsed);
        case "python":
          return generatePython(parsed);
        case "php":
          return generatePHP(parsed);
        case "java":
          return generateJava(parsed);
        case "csharp":
          return generateCSharp(parsed);
        case "go":
          return generateGo(parsed);
        case "ruby":
          return generateRuby(parsed);
        case "nodejs":
          return generateNodeJS(parsed);
        case "shell":
          return curlCommand.value;
        default:
          return "// \u4E0D\u652F\u6301\u7684\u8BED\u8A00";
      }
    };
    const generateJavaScript = (parsed) => {
      let code = `const url = '${parsed.url}'`;
      if (parsed.method !== "GET") {
        code += `
const options = {
  method: '${parsed.method}',
`;
        if (parsed.headers.length > 0) {
          code += "  headers: {\n";
          parsed.headers.forEach((header) => {
            code += `    '${header.key}': '${header.value}',
`;
          });
          code += "  },\n";
        }
        if (parsed.data) {
          code += `  body: JSON.stringify(${parsed.data.startsWith("{") ? parsed.data : `'${parsed.data}'`}),
`;
        }
        code += "}";
        code += `

fetch(url, options)`;
        code += `
  .then(response => response.json())`;
        code += `
  .then(data => console.log(data))`;
        code += `
  .catch(error => console.error('Error:', error))`;
      } else {
        if (parsed.headers.length > 0) {
          code += `
const headers = {`;
          parsed.headers.forEach((header) => {
            code += `
  '${header.key}': '${header.value}',`;
          });
          code += "\n}";
          code += `

fetch(url, { headers })`;
        } else {
          code += `
fetch(url)`;
        }
        code += `
  .then(response => response.json())`;
        code += `
  .then(data => console.log(data))`;
        code += `
  .catch(error => console.error('Error:', error))`;
      }
      return code;
    };
    const generatePython = (parsed) => {
      let code = `import requests`;
      code += `

url = '${parsed.url}'`;
      const config = {
        method: parsed.method.toLowerCase()
      };
      if (parsed.headers.length > 0) {
        config.headers = {};
        parsed.headers.forEach((header) => {
          config.headers[header.key] = header.value;
        });
      }
      if (parsed.data) {
        config.json = JSON.parse(parsed.data.startsWith("{") ? parsed.data : `'${parsed.data}'`);
      }
      code += `

response = requests.${parsed.method.toLowerCase()}(url,`;
      if (Object.keys(config).length > 1) {
        code += `config`;
      } else {
        code += "json={}";
      }
      code += `)`;
      code += `
print(response.json())`;
      return code;
    };
    const generatePHP = (parsed) => {
      let code = `<?php`;
      code += `
$ch = curl_init('${parsed.url}')`;
      code += `
curl_setopt($ch, CURLOPT_${parsed.method === "GET" ? "CUSTOMREQUEST" : "POST"}, true)`;
      if (parsed.headers.length > 0) {
        code += `
$headers = []`;
        parsed.headers.forEach((header) => {
          code += `
$headers[] = '${header.key}: ${header.value}'`;
        });
        code += `
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers)`;
      }
      if (parsed.data) {
        code += `
curl_setopt($ch, CURLOPT_POSTFIELDS, '${parsed.data}')`;
      }
      code += `

$response = curl_exec($ch)`;
      code += `
curl_close($ch)`;
      code += `
echo $response;`;
      return code;
    };
    const generateJava = (parsed) => {
      let code = `import java.net.http.*;
`;
      code += `import java.net.URI;
`;
      code += `import java.net.http.HttpClient;
`;
      code += `import java.net.http.HttpRequest;
`;
      code += `import java.net.http.HttpResponse;
`;
      code += `import java.net.http.StringEntity;
`;
      code += `import java.util.List;
`;
      code += `import java.util.Map;

`;
      code += `public class ApiClient {
`;
      code += `  public static void main(String[] args) throws Exception {
`;
      code += `    HttpClient client = HttpClient.newHttpClient();
`;
      code += `    HttpRequest request = HttpRequest.newBuilder()
`;
      code += `        .uri(URI.create("${parsed.url}"))
`;
      code += `        .method(HttpRequest.Method.${parsed.method})
`;
      if (parsed.headers.length > 0) {
        code += `        .headers(headers -> {
`;
        parsed.headers.forEach((header) => {
          code += `          headers.set("${header.key}", "${header.value}");
`;
        });
        code += `        })
`;
      }
      if (parsed.data) {
        code += `        .header("Content-Type", "application/json")
`;
        code += `        .POST(HttpRequest.BodyPublishers.ofString(${parsed.data.startsWith("{") ? parsed.data : `'" + parsed.data + "'`}))
`;
      }
      code += `        .build();
`;
      code += `    HttpResponse response = client.send(request, HttpResponse.BodyHandlers.ofString());
`;
      code += `    System.out.println(response.body());
`;
      code += `  }
`;
      code += `}`;
      return code;
    };
    const generateCSharp = (parsed) => {
      let code = `using System;
`;
      code += `using System.Net.Http;
`;
      code += `using System.Threading.Tasks;
`;
      code += `using System.Text;

`;
      code += `class Program
`;
      code += `{
`;
      code += `    static async Task Main()
`;
      code += `    {
`;
      code += `        var client = new HttpClient();
`;
      code += `        var request = new HttpRequestMessage(HttpMethod.${parsed.method}, "${parsed.url}");
`;
      if (parsed.headers.length > 0) {
        parsed.headers.forEach((header) => {
          code += `        request.Headers.Add("${header.key}", "${header.value}");
`;
        });
      }
      if (parsed.data) {
        code += `        request.Content = new StringContent(${parsed.data.startsWith("{") ? parsed.data : `"` + parsed.data + `"`}, Encoding.UTF8, "application/json");
`;
      }
      code += `
        var response = await client.SendAsync(request);
`;
      code += `        var content = await response.Content.ReadAsStringAsync();
`;
      code += `        Console.WriteLine(content);
`;
      code += `    }
`;
      code += `}`;
      return code;
    };
    const generateGo = (parsed) => {
      let code = `package main

`;
      code += `import (
  "fmt"
  "io/ioutil"
  "net/http"
  "strings"
  "bytes"
  "encoding/json"
)

`;
      code += `func main() {
`;
      code += `  url := "${parsed.url}"

`;
      if (parsed.method === "GET" && parsed.headers.length === 0 && !parsed.data) {
        code += `  resp, err := http.Get(url)
`;
        code += `  if err != nil {
    fmt.Println("Error:", err)
    return
  }
`;
        code += `  defer resp.Body.Close()
`;
        code += `  body, _ := ioutil.ReadAll(resp.Body)
`;
        code += `  fmt.Println(string(body))
`;
      } else {
        code += `  client := &http.Client{}
`;
        code += `  var req *http.Request
  var err error

`;
        if (parsed.data && parsed.data.startsWith("{")) {
          code += `  var jsonStr = \`${parsed.data}\`
`;
          code += `  var payload = bytes.NewBufferString(jsonStr)
`;
          code += `  req, err = http.NewRequest("${parsed.method}", url, payload)
`;
        } else {
          code += `  req, err = http.NewRequest("${parsed.method}", url, nil)
`;
        }
        code += `  if err != nil {
    fmt.Println("Error:", err)
    return
  }
`;
        if (parsed.headers.length > 0) {
          parsed.headers.forEach((header) => {
            code += `  req.Header.Set("${header.key}", "${header.value}")
`;
          });
        }
        code += `  resp, err := client.Do(req)
`;
        code += `  if err != nil {
    fmt.Println("Error:", err)
    return
  }
`;
        code += `  defer resp.Body.Close()
`;
        code += `  body, _ := ioutil.ReadAll(resp.Body)
`;
        code += `  fmt.Println(string(body))
`;
      }
      code += `}`;
      return code;
    };
    const generateRuby = (parsed) => {
      let code = `require 'net/http'
`;
      code += `require 'uri'
`;
      code += `require 'json'

`;
      code += `url = URI('${parsed.url}')
`;
      code += `headers = {
`;
      if (parsed.headers.length > 0) {
        parsed.headers.forEach((header) => {
          code += `  '${header.key}' => '${header.value}',
`;
        });
      }
      code += `}

`;
      if (parsed.method === "GET" && !parsed.data) {
        code += `uri = URI(url)
`;
        code += `response = Net::HTTP.get(uri)
`;
        code += `puts response.body`;
      } else {
        code += `uri = URI(url)
`;
        code += `request = Net::HTTP::${parsed.method === "POST" ? "Post" : parsed.method}.new(uri)
`;
        if (parsed.headers.length > 0) {
          code += `  headers.each { |key, value| request[key] = value }
`;
        }
        if (parsed.data) {
          code += `  request.body = ${parsed.data.startsWith("{") ? parsed.data : `'${parsed.data}'`}
`;
        }
        code += `  response = Net::HTTP.start(uri, request)
`;
        code += `  puts response.body
`;
      }
      return code;
    };
    const generateNodeJS = (parsed) => {
      let code = `const fetch = require('node-fetch')
`;
      code += generateJavaScript(parsed);
      return code;
    };
    if (tool) {
      addRecentTool(tool.id);
    }
    const handleLanguageChange = () => {
      if (curlCommand.value) {
        convertCurl();
      }
    };
    watch(selectedLanguage, handleLanguageChange);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-foreground mb-3">cURL\u8F6C\u4EE3\u7801 - \u5728\u7EBFcURL\u547D\u4EE4\u8F6C\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u5DE5\u5177</h1><p class="text-muted-foreground">\u514D\u8D39\u5728\u7EBFcURL\u8F6C\u4EE3\u7801\u5DE5\u5177\uFF0C\u652F\u6301\u5C06cURL\u547D\u4EE4\u8F6C\u6362\u4E3AJavaScript\u3001Python\u3001PHP\u3001Java\u3001C#\u3001Go\u3001Ruby\u7B49\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u4EE3\u7801\u3002\u652F\u6301HTTP\u8BF7\u6C42\u3001API\u8C03\u7528\u7B49\u573A\u666F\uFF0C\u7EAF\u672C\u5730\u8F6C\u6362\uFF0C\u4EE3\u7801\u5B89\u5168\u53EF\u9760\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div class="flex flex-col h-full"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground flex items-center">`);
      _push(ssrRenderComponent(unref(Terminal), { class: "w-4 h-4 mr-2" }, null, _parent));
      _push(` cURL\u547D\u4EE4 </label><div class="flex gap-2"><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u6E05\u7A7A </button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground"> \u7C98\u8D34 </button></div></div><textarea placeholder="curl -X POST https://api.example.com/data\\n  -H &#39;Content-Type: application/json&#39;\\n  -d &#39;{&quot;key&quot;: &quot;value&quot;}&#39;" class="flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm" rows="8">${ssrInterpolate(curlCommand.value)}</textarea><div class="mt-4"><label class="block text-xs text-muted-foreground mb-2">\u5E38\u7528\u793A\u4F8B</label><div class="grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(examples, (example) => {
        _push(`<button class="px-3 py-2 bg-card border border-border rounded-md hover:bg-accent transition-colors text-xs text-foreground">${ssrInterpolate(example.name)}</button>`);
      });
      _push(`<!--]--></div></div></div><div class="flex flex-col h-full"><div class="mb-3"><label class="text-sm font-medium text-foreground flex items-center mb-2">`);
      _push(ssrRenderComponent(unref(FileCode), { class: "w-4 h-4 mr-2" }, null, _parent));
      _push(` \u8F93\u51FA\u8BED\u8A00 </label><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(languages, (lang) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-1.5 rounded-md transition-colors text-sm font-medium",
          selectedLanguage.value === lang.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80 text-muted-foreground"
        ])}">${ssrInterpolate(lang.name)}</button>`);
      });
      _push(`<!--]--></div></div><div class="flex-1 flex flex-col"><div class="flex items-center justify-between mb-3"><label class="text-sm font-medium text-foreground flex items-center">`);
      _push(ssrRenderComponent(unref(Code), { class: "w-4 h-4 mr-2" }, null, _parent));
      _push(` \u751F\u6210\u7684\u4EE3\u7801 </label><div class="flex gap-2"><select class="text-xs bg-muted border border-border rounded px-2 py-1"><option value="text-xs"${ssrIncludeBooleanAttr(Array.isArray(codeFontSize.value) ? ssrLooseContain(codeFontSize.value, "text-xs") : ssrLooseEqual(codeFontSize.value, "text-xs")) ? " selected" : ""}>\u6781\u5C0F</option><option value="text-sm"${ssrIncludeBooleanAttr(Array.isArray(codeFontSize.value) ? ssrLooseContain(codeFontSize.value, "text-sm") : ssrLooseEqual(codeFontSize.value, "text-sm")) ? " selected" : ""}>\u5C0F</option><option value="text-base"${ssrIncludeBooleanAttr(Array.isArray(codeFontSize.value) ? ssrLooseContain(codeFontSize.value, "text-base") : ssrLooseEqual(codeFontSize.value, "text-base")) ? " selected" : ""}>\u4E2D</option><option value="text-lg"${ssrIncludeBooleanAttr(Array.isArray(codeFontSize.value) ? ssrLooseContain(codeFontSize.value, "text-lg") : ssrLooseEqual(codeFontSize.value, "text-lg")) ? " selected" : ""}>\u5927</option></select><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground">`);
      _push(ssrRenderComponent(unref(Copy), { class: "w-3 h-3" }, null, _parent));
      _push(`</button><button class="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground">`);
      _push(ssrRenderComponent(unref(Download), { class: "w-3 h-3" }, null, _parent));
      _push(`</button></div></div><pre class="${ssrRenderClass([
        "flex-1 w-full min-h-[300px] p-4 bg-card border border-border rounded-lg overflow-auto font-mono text-sm",
        codeFontSize.value
      ])}"><code>${ssrInterpolate(generatedCode.value || "\u8BF7\u8F93\u5165cURL\u547D\u4EE4...")}</code></pre></div><div class="mt-4 p-3 bg-muted/50 rounded-lg"><h3 class="text-sm font-medium text-foreground flex items-center mb-2">`);
      _push(ssrRenderComponent(unref(Package), { class: "w-4 h-4 mr-2" }, null, _parent));
      _push(` \u4F9D\u8D56\u8BF4\u660E </h3><div class="text-xs text-muted-foreground"><div>${(_a = dependencyInfo.value) != null ? _a : ""}</div></div></div></div></div><div class="p-6 mb-12 relative"><button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"${ssrRenderAttr("title", isSeoContentVisible.value ? "\u6298\u53E0\u5185\u5BB9" : "\u5C55\u5F00\u5185\u5BB9")}>`);
      if (!isSeoContentVisible.value) {
        _push(ssrRenderComponent(unref(HelpCircle), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUp), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle(isSeoContentVisible.value ? null : { display: "none" })}"><h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u4EC0\u4E48\u662F cURL \u8F6C\u4EE3\u7801\uFF1F </h2><p class="text-muted-foreground mb-4"> cURL \u662F\u4E00\u4E2A\u5F3A\u5927\u7684\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u7528\u4E8E\u53D1\u9001\u548C\u63A5\u6536\u6570\u636E\uFF0C\u652F\u6301\u591A\u79CD\u534F\u8BAE\uFF0C\u5305\u62EC HTTP\u3001HTTPS\u3001FTP \u7B49\u3002 \u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u5C06\u6D4B\u8BD5\u597D\u7684 cURL \u547D\u4EE4\u8F6C\u6362\u4E3A\u5B9E\u9645\u7684\u7F16\u7A0B\u8BED\u8A00\u4EE3\u7801\uFF0C\u4EE5\u4FBF\u96C6\u6210\u5230\u9879\u76EE\u4E2D\u3002 cURL \u8F6C\u4EE3\u7801\u5DE5\u5177\u53EF\u4EE5\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u5B8C\u6210\u8FD9\u4E2A\u8F6C\u6362\u8FC7\u7A0B\uFF0C\u8282\u7701\u65F6\u95F4\u5E76\u51CF\u5C11\u9519\u8BEF\u3002 </p><p class="text-muted-foreground"> \u672C\u5DE5\u5177\u652F\u6301\u591A\u79CD\u4E3B\u6D41\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5305\u62EC JavaScript (fetch/axios)\u3001Python (requests)\u3001PHP (cURL)\u3001Java (HttpClient)\u3001 C# (HttpClient)\u3001Go (net/http)\u3001Ruby (net/http) \u7B49\u3002\u8F6C\u6362\u540E\u7684\u4EE3\u7801\u53EF\u4EE5\u76F4\u63A5\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\uFF0C \u5927\u5927\u63D0\u9AD8\u4E86\u5F00\u53D1\u6548\u7387\u3002 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5982\u4F55\u4F7F\u7528\u672C\u5DE5\u5177 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>\u5C06\u60A8\u7684 cURL \u547D\u4EE4\u7C98\u8D34\u5230\u5DE6\u4FA7\u8F93\u5165\u6846\u4E2D</li><li>\u9009\u62E9\u60A8\u60F3\u8981\u8F6C\u6362\u7684\u76EE\u6807\u7F16\u7A0B\u8BED\u8A00</li><li>\u4EE3\u7801\u4F1A\u81EA\u52A8\u751F\u6210\u5E76\u663E\u793A\u5728\u53F3\u4FA7</li><li>\u70B9\u51FB&quot;\u590D\u5236&quot;\u6309\u94AE\u590D\u5236\u751F\u6210\u7684\u4EE3\u7801\uFF0C\u6216\u70B9\u51FB&quot;\u4E0B\u8F7D&quot;\u4FDD\u5B58\u4E3A\u6587\u4EF6</li><li>\u67E5\u770B\u5E95\u90E8\u7684\u4F9D\u8D56\u8BF4\u660E\uFF0C\u786E\u4FDD\u9879\u76EE\u5DF2\u5B89\u88C5\u5FC5\u8981\u7684\u5E93</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u652F\u6301\u7684\u529F\u80FD\u7279\u6027 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>\u591A\u79CD\u8BED\u8A00\u652F\u6301</strong>: \u652F\u6301 JavaScript\u3001Python\u3001PHP\u3001Java\u3001C#\u3001Go\u3001Ruby \u7B49\u4E3B\u6D41\u7F16\u7A0B\u8BED\u8A00</li><li><strong>\u5B8C\u6574\u7684 HTTP \u529F\u80FD</strong>: \u652F\u6301 GET\u3001POST\u3001PUT\u3001DELETE \u7B49 HTTP \u65B9\u6CD5</li><li><strong>\u8BF7\u6C42\u5934\u5904\u7406</strong>: \u81EA\u52A8\u8BC6\u522B\u548C\u8F6C\u6362\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934</li><li><strong>\u6570\u636E\u4F20\u8F93</strong>: \u652F\u6301 JSON\u3001\u8868\u5355\u6570\u636E\u3001\u6587\u4EF6\u4E0A\u4F20\u7B49\u591A\u79CD\u6570\u636E\u683C\u5F0F</li><li><strong>\u8BA4\u8BC1\u652F\u6301</strong>: \u652F\u6301 Bearer Token\u3001Basic Auth \u7B49\u8BA4\u8BC1\u65B9\u5F0F</li><li><strong>\u672C\u5730\u5904\u7406</strong>: \u6240\u6709\u8F6C\u6362\u90FD\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C\u4FDD\u62A4\u6570\u636E\u9690\u79C1</li><li><strong>\u5B9E\u65F6\u8F6C\u6362</strong>: \u8F93\u5165 cURL \u547D\u4EE4\u540E\u7ACB\u5373\u751F\u6210\u4EE3\u7801\uFF0C\u65E0\u9700\u7B49\u5F85</li><li><strong>\u4EE3\u7801\u9AD8\u4EAE</strong>: \u751F\u6210\u7684\u4EE3\u7801\u5177\u6709\u826F\u597D\u7684\u683C\u5F0F\u548C\u53EF\u8BFB\u6027</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u5E94\u7528\u573A\u666F </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>API \u96C6\u6210</strong>: \u5C06 API \u6587\u6863\u4E2D\u7684 cURL \u793A\u4F8B\u8F6C\u6362\u4E3A\u9879\u76EE\u4EE3\u7801</li><li><strong>\u5FEB\u901F\u539F\u578B</strong>: \u5FEB\u901F\u751F\u6210 HTTP \u8BF7\u6C42\u4EE3\u7801\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u548C\u5F00\u53D1</li><li><strong>\u5B66\u4E60\u53C2\u8003</strong>: \u5B66\u4E60\u4E0D\u540C\u8BED\u8A00\u7684 HTTP \u8BF7\u6C42\u5B9E\u73B0\u65B9\u5F0F</li><li><strong>\u4EE3\u7801\u8FC1\u79FB</strong>: \u5C06\u9879\u76EE\u4E2D\u7684 cURL \u547D\u4EE4\u8F6C\u6362\u4E3A\u7F16\u7A0B\u8BED\u8A00\u4EE3\u7801</li><li><strong>\u6587\u6863\u7F16\u5199</strong>: \u4E3A\u9879\u76EE\u6587\u6863\u751F\u6210\u591A\u8BED\u8A00\u793A\u4F8B\u4EE3\u7801</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> \u5E38\u89C1\u95EE\u9898 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">\u751F\u6210\u7684\u4EE3\u7801\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002\u4F46\u5EFA\u8BAE\u6839\u636E\u60A8\u7684\u9879\u76EE\u9700\u6C42\u8FDB\u884C\u9002\u5F53\u8C03\u6574\uFF0C \u6BD4\u5982\u6DFB\u52A0\u9519\u8BEF\u5904\u7406\u3001\u54CD\u5E94\u89E3\u6790\u3001\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\u7B49\u3002\u540C\u65F6\u8BF7\u786E\u4FDD\u9879\u76EE\u5DF2\u5B89\u88C5\u6240\u9700\u7684\u4F9D\u8D56\u5E93\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u652F\u6301\u54EA\u4E9B cURL \u9009\u9879\uFF1F</h3><p class="text-muted-foreground mt-1"> \u672C\u5DE5\u5177\u652F\u6301\u5E38\u7528\u7684 cURL \u9009\u9879\uFF0C\u5305\u62EC -X (HTTP\u65B9\u6CD5)\u3001-H (\u8BF7\u6C42\u5934)\u3001-d (\u6570\u636E)\u3001 -F (\u8868\u5355)\u3001-u (\u8BA4\u8BC1)\u3001--timeout (\u8D85\u65F6) \u7B49\u3002\u5982\u679C\u9047\u5230\u4E0D\u652F\u6301\u7684\u9009\u9879\uFF0C \u53EF\u80FD\u9700\u8981\u624B\u52A8\u8C03\u6574\u751F\u6210\u7684\u4EE3\u7801\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u6570\u636E\u5B89\u5168\u6709\u4FDD\u969C\u5417\uFF1F</h3><p class="text-muted-foreground mt-1"> \u7EDD\u5BF9\u5B89\u5168\u3002\u672C\u5DE5\u5177\u91C7\u7528\u7EAF\u524D\u7AEF\u6280\u672F\u5B9E\u73B0\uFF0C\u6240\u6709 cURL \u547D\u4EE4\u89E3\u6790\u548C\u4EE3\u7801\u751F\u6210\u90FD\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u672C\u5730\u5B8C\u6210\uFF0C \u6570\u636E\u4E0D\u4F1A\u4E0A\u4F20\u5230\u4EFB\u4F55\u670D\u52A1\u5668\u3002\u60A8\u7684 cURL \u547D\u4EE4\u53EF\u80FD\u5305\u542B\u654F\u611F\u4FE1\u606F\uFF0C\u4F7F\u7528\u672C\u5730\u5904\u7406\u53EF\u4EE5\u786E\u4FDD\u9690\u79C1\u5B89\u5168\u3002 </p></div><div><h3 class="text-lg font-semibold text-foreground">\u5982\u4F55\u5904\u7406\u590D\u6742\u7684 cURL \u547D\u4EE4\uFF1F</h3><p class="text-muted-foreground mt-1"> \u5BF9\u4E8E\u590D\u6742\u7684 cURL \u547D\u4EE4\uFF0C\u5EFA\u8BAE\u5148\u8FDB\u884C\u7B80\u5316\u8F6C\u6362\uFF0C\u7136\u540E\u6839\u636E\u9700\u8981\u624B\u52A8\u5B8C\u5584\u3002 \u7279\u522B\u662F\u6D89\u53CA\u7279\u6B8A\u9009\u9879\u3001\u81EA\u5B9A\u4E49\u8BC1\u4E66\u3001\u4EE3\u7406\u8BBE\u7F6E\u7B49\u60C5\u51B5\u65F6\uFF0C\u53EF\u80FD\u9700\u8981\u989D\u5916\u7684\u914D\u7F6E\u3002 \u751F\u6210\u7684\u4EE3\u7801\u63D0\u4F9B\u4E86\u4E00\u4E2A\u826F\u597D\u7684\u8D77\u70B9\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u9700\u6C42\u8FDB\u884C\u8C03\u6574\u3002 </p></div></div></div></div><section class="mb-12"><h2 class="text-2xl font-bold text-foreground mb-4">\u60A8\u53EF\u80FD\u8FD8\u9700\u8981...</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(relatedTools.value, (relatedTool) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: relatedTool.id,
          to: `/tools/${relatedTool.id}`,
          class: "block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 mb-2"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" }, null), _parent2, _scopeId);
              _push2(`<span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(relatedTool.name)}</span></div><p class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(relatedTool.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconMap[relatedTool.icon]), { class: "w-5 h-5 text-primary" })),
                  createVNode("span", { class: "font-medium text-foreground" }, toDisplayString(relatedTool.name), 1)
                ]),
                createVNode("p", { class: "text-sm text-muted-foreground line-clamp-2" }, toDisplayString(relatedTool.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/curl-to-code.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=curl-to-code-BBNVqaj5.mjs.map
