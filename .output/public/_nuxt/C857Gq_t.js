import{_ as st}from"./D4g1_bQ7.js";import{q as rt,r as h,e as H,p as at,Q as lt,c as x,a as o,h as C,b as u,d as v,j as i,v as it,F as T,k as R,P as ct,E as L,t as g,n as b,l as dt,x as ut,m as mt,o as c,w as pt,C as ht}from"./DEsTSaKd.js";import{t as m}from"./B-fbZyPE.js";import{c as gt}from"./3IwUeceH.js";import{T as $}from"./DuvvCszs.js";import{F as k}from"./DU2eUrP5.js";import{C as U}from"./vEvaw0F6.js";import{C as w}from"./Bt5p-un4.js";import{D as j}from"./ClT_iCD-.js";import{P as q}from"./CQYC_IK1.js";import{C as ft,a as xt}from"./BaG5JeHk.js";import{G as vt}from"./sCtjrDU-.js";import{F as bt}from"./OWHW6ZUB.js";import{G as yt}from"./B8QRyNMs.js";import{F as Ct}from"./BIbbmz6B.js";import{R as Tt}from"./b4Up8kzW.js";import{T as Rt}from"./C1JgnPlw.js";import{H as Pt}from"./ZC22Qqbx.js";import{L as _t}from"./BP6Cft7q.js";import{D as St}from"./DESX2TF9.js";import{I as Ht}from"./4T928kbW.js";import{W as Lt}from"./BUYFD_dQ.js";import{T as $t}from"./Z_ZHHb8E.js";import{C as kt}from"./BuCd20m7.js";import{S as Ut}from"./w5JABn4e.js";import{L as wt}from"./DbWJs76d.js";import{F as jt}from"./CRvidJJ3.js";import{R as qt}from"./DILFbJzj.js";import"./wERbHxDK.js";const Et={class:"max-w-8xl mx-auto"},It={class:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"},Ot={class:"flex flex-col h-full"},Nt={class:"flex items-center justify-between mb-3"},Jt={class:"text-sm font-medium text-foreground flex items-center"},At={class:"mt-4"},Bt={class:"grid grid-cols-3 gap-2"},Ft=["onClick"],Gt={class:"flex flex-col h-full"},Mt={class:"mb-3"},Dt={class:"text-sm font-medium text-foreground flex items-center mb-2"},Wt={class:"flex flex-wrap gap-2"},Vt=["onClick"],Xt={class:"flex-1 flex flex-col"},zt={class:"flex items-center justify-between mb-3"},Qt={class:"text-sm font-medium text-foreground flex items-center"},Kt={class:"flex gap-2"},Yt={class:"mt-4 p-3 bg-muted/50 rounded-lg"},Zt={class:"text-sm font-medium text-foreground flex items-center mb-2"},te={class:"text-xs text-muted-foreground"},ee=["innerHTML"],oe={class:"p-6 mb-12 relative"},ne=["title"],se={class:"mb-12"},re={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"},ae={class:"flex items-center gap-2 mb-2"},le={class:"font-medium text-foreground"},ie={class:"text-sm text-muted-foreground line-clamp-2"},Ae={__name:"curl-to-code",setup(ce){mt(),rt({title:"cURL转代码 - 在线cURL命令转多种编程语言工具",meta:[{name:"description",content:"免费在线cURL转代码工具，支持将cURL命令转换为JavaScript、Python、PHP、Java、C#、Go、Ruby等多种编程语言代码。支持HTTP请求、API调用等场景，纯本地转换，代码安全可靠。"},{name:"keywords",content:"cURL转代码,HTTP请求,API调用,代码生成,JavaScript,Python,PHP,Java"}]});const P=m.find(e=>e.id==="curl-to-code");gt.find(e=>e.id==="network");const a=h(""),l=h(""),d=h("javascript"),y=h("text-sm"),p=h(!0),E={Terminal:$,FileCode:k,Code:U,Package:q,Copy:w,Download:j,RotateCcw:qt,FileText:jt,Lock:wt,Shield:Ut,Clock:kt,Type:$t,Wifi:Lt,Image:Ht,Database:St,Link:_t,Hash:Pt,Timer:Rt,Regex:Tt,FileDiff:Ct,Globe:yt,FolderOpen:bt,GitBranch:vt},I=[{name:"JavaScript",value:"javascript",icon:"Code"},{name:"Python",value:"python",icon:"Code"},{name:"PHP",value:"php",icon:"Code"},{name:"Java",value:"java",icon:"Code"},{name:"C#",value:"csharp",icon:"Code"},{name:"Go",value:"go",icon:"Code"},{name:"Ruby",value:"ruby",icon:"Code"},{name:"Shell",value:"shell",icon:"Terminal"}],O=[{name:"GET请求",command:"curl https://api.example.com/data"},{name:"POST JSON",command:`curl -X POST https://api.example.com/data \\
  -H "Content-Type: application/json" \\
  -d '{\\"key\\": \\"value\\"}'`},{name:"带认证",command:'curl -H "Authorization: Bearer token123" https://api.example.com/data'},{name:"上传文件",command:'curl -X POST -F "file=@/path/to/file.jpg" https://api.example.com/upload'},{name:"设置超时",command:"curl --connect-timeout 10 --max-time 60 https://api.example.com/data"},{name:"跟随重定向",command:"curl -L https://api.example.com/data"}],N=H(()=>{const e=m.filter(n=>n.category==="network"&&n.id!=="curl-to-code").slice(0,2),t=[m.find(n=>n.id==="json-formatter"),m.find(n=>n.id==="base64-encode"),m.find(n=>n.id==="url-encode"),m.find(n=>n.id==="api-doc")].filter(Boolean);return[...e,...t].slice(0,4)}),J=H(()=>({javascript:'<p class="mb-2"><strong>Node.js:</strong> 内置 <code>https</code> 模块</p><p><strong>浏览器:</strong> 使用 <code>fetch</code> API</p>',python:'<p class="mb-1">安装 requests 库:</p><pre class="bg-muted p-1 rounded text-xs"><code>pip install requests</code></pre>',php:"<p>使用 cURL 扩展（通常已安装）</p>",java:`<p class="mb-1">添加依赖：</p><pre class="bg-muted p-1 rounded text-xs"><code>// Maven
&lt;dependency&gt;
  &lt;groupId&gt;org.apache.httpcomponents&lt;/groupId&gt;
  &lt;artifactId&gt;httpclient&lt;/artifactId&gt;
  &lt;version&gt;4.5.13&lt;/version&gt;
&lt;/dependency&gt;</code></pre>`,csharp:`<p class="mb-1">使用 HttpClient：</p><pre class="bg-muted p-1 rounded text-xs"><code>// .NET Core
using System.Net.Http;
using System.Threading.Tasks;</code></pre>`,go:"<p>内置 <code>net/http</code> 包</p>",ruby:"<p>使用 net/http 库（通常已安装）</p>",shell:"<p>直接使用 cURL 命令</p>"})[d.value]||""),f=()=>{if(!a.value.trim()){l.value="请输入cURL命令";return}try{const e=A(a.value);l.value=B(e,d.value)}catch(e){l.value="// 解析错误: "+e.message}},A=e=>{const t={url:"",method:"GET",headers:[],data:null,options:[]},n=e.match(/-X\s+(\w+)/i);n&&(t.method=n[1].toUpperCase());const s=e.match(/\s+(https?:\/\/[^\s]+)/i);s&&(t.url=s[1]);const r=e.matchAll(/-H\s+['"]([^'"]+)['"]/gi);r&&(t.headers=r.map(et=>{const[ot,nt]=et[1].split(/:\s*/);return{key:ot.trim(),value:nt.trim()}}));const S=e.match(/-d\s+['"]([^'"]+)['"]/i);return S&&(t.data=S[1]),t},B=(e,t)=>{switch(t){case"javascript":return _(e);case"python":return F(e);case"php":return G(e);case"java":return M(e);case"csharp":return D(e);case"go":return W(e);case"ruby":return V(e);case"nodejs":return X(e);case"shell":return a.value;default:return"// 不支持的语言"}},_=e=>{let t=`const url = '${e.url}'`;return e.method!=="GET"?(t+=`
const options = {
  method: '${e.method}',
`,e.headers.length>0&&(t+=`  headers: {
`,e.headers.forEach(n=>{t+=`    '${n.key}': '${n.value}',
`}),t+=`  },
`),e.data&&(t+=`  body: JSON.stringify(${e.data.startsWith("{")?e.data:`'${e.data}'`}),
`),t+="}",t+=`

fetch(url, options)`,t+=`
  .then(response => response.json())`,t+=`
  .then(data => console.log(data))`,t+=`
  .catch(error => console.error('Error:', error))`):(e.headers.length>0?(t+=`
const headers = {`,e.headers.forEach(n=>{t+=`
  '${n.key}': '${n.value}',`}),t+=`
}`,t+=`

fetch(url, { headers })`):t+=`
fetch(url)`,t+=`
  .then(response => response.json())`,t+=`
  .then(data => console.log(data))`,t+=`
  .catch(error => console.error('Error:', error))`),t},F=e=>{let t="import requests";t+=`

url = '${e.url}'`;const n={method:e.method.toLowerCase()};return e.headers.length>0&&(n.headers={},e.headers.forEach(s=>{n.headers[s.key]=s.value})),e.data&&(n.json=JSON.parse(e.data.startsWith("{")?e.data:`'${e.data}'`)),t+=`

response = requests.${e.method.toLowerCase()}(url,`,Object.keys(n).length>1?t+="config":t+="json={}",t+=")",t+=`
print(response.json())`,t},G=e=>{let t="<?php";return t+=`
$ch = curl_init('${e.url}')`,t+=`
curl_setopt($ch, CURLOPT_${e.method==="GET"?"CUSTOMREQUEST":"POST"}, true)`,e.headers.length>0&&(t+=`
$headers = []`,e.headers.forEach(n=>{t+=`
$headers[] = '${n.key}: ${n.value}'`}),t+=`
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers)`),e.data&&(t+=`
curl_setopt($ch, CURLOPT_POSTFIELDS, '${e.data}')`),t+=`

$response = curl_exec($ch)`,t+=`
curl_close($ch)`,t+=`
echo $response;`,t},M=e=>{let t=`import java.net.http.*;
`;return t+=`import java.net.URI;
`,t+=`import java.net.http.HttpClient;
`,t+=`import java.net.http.HttpRequest;
`,t+=`import java.net.http.HttpResponse;
`,t+=`import java.net.http.StringEntity;
`,t+=`import java.util.List;
`,t+=`import java.util.Map;

`,t+=`public class ApiClient {
`,t+=`  public static void main(String[] args) throws Exception {
`,t+=`    HttpClient client = HttpClient.newHttpClient();
`,t+=`    HttpRequest request = HttpRequest.newBuilder()
`,t+=`        .uri(URI.create("${e.url}"))
`,t+=`        .method(HttpRequest.Method.${e.method})
`,e.headers.length>0&&(t+=`        .headers(headers -> {
`,e.headers.forEach(n=>{t+=`          headers.set("${n.key}", "${n.value}");
`}),t+=`        })
`),e.data&&(t+=`        .header("Content-Type", "application/json")
`,t+=`        .POST(HttpRequest.BodyPublishers.ofString(${e.data.startsWith("{")?e.data:`'" + parsed.data + "'`}))
`),t+=`        .build();
`,t+=`    HttpResponse response = client.send(request, HttpResponse.BodyHandlers.ofString());
`,t+=`    System.out.println(response.body());
`,t+=`  }
`,t+="}",t},D=e=>{let t=`using System;
`;return t+=`using System.Net.Http;
`,t+=`using System.Threading.Tasks;
`,t+=`using System.Text;

`,t+=`class Program
`,t+=`{
`,t+=`    static async Task Main()
`,t+=`    {
`,t+=`        var client = new HttpClient();
`,t+=`        var request = new HttpRequestMessage(HttpMethod.${e.method}, "${e.url}");
`,e.headers.length>0&&e.headers.forEach(n=>{t+=`        request.Headers.Add("${n.key}", "${n.value}");
`}),e.data&&(t+=`        request.Content = new StringContent(${e.data.startsWith("{")?e.data:'"'+e.data+'"'}, Encoding.UTF8, "application/json");
`),t+=`
        var response = await client.SendAsync(request);
`,t+=`        var content = await response.Content.ReadAsStringAsync();
`,t+=`        Console.WriteLine(content);
`,t+=`    }
`,t+="}",t},W=e=>{let t=`package main

`;return t+=`import (
  "fmt"
  "io/ioutil"
  "net/http"
  "strings"
  "bytes"
  "encoding/json"
)

`,t+=`func main() {
`,t+=`  url := "${e.url}"

`,e.method==="GET"&&e.headers.length===0&&!e.data?(t+=`  resp, err := http.Get(url)
`,t+=`  if err != nil {
    fmt.Println("Error:", err)
    return
  }
`,t+=`  defer resp.Body.Close()
`,t+=`  body, _ := ioutil.ReadAll(resp.Body)
`,t+=`  fmt.Println(string(body))
`):(t+=`  client := &http.Client{}
`,t+=`  var req *http.Request
  var err error

`,e.data&&e.data.startsWith("{")?(t+=`  var jsonStr = \`${e.data}\`
`,t+=`  var payload = bytes.NewBufferString(jsonStr)
`,t+=`  req, err = http.NewRequest("${e.method}", url, payload)
`):t+=`  req, err = http.NewRequest("${e.method}", url, nil)
`,t+=`  if err != nil {
    fmt.Println("Error:", err)
    return
  }
`,e.headers.length>0&&e.headers.forEach(n=>{t+=`  req.Header.Set("${n.key}", "${n.value}")
`}),t+=`  resp, err := client.Do(req)
`,t+=`  if err != nil {
    fmt.Println("Error:", err)
    return
  }
`,t+=`  defer resp.Body.Close()
`,t+=`  body, _ := ioutil.ReadAll(resp.Body)
`,t+=`  fmt.Println(string(body))
`),t+="}",t},V=e=>{let t=`require 'net/http'
`;return t+=`require 'uri'
`,t+=`require 'json'

`,t+=`url = URI('${e.url}')
`,t+=`headers = {
`,e.headers.length>0&&e.headers.forEach(n=>{t+=`  '${n.key}' => '${n.value}',
`}),t+=`}

`,e.method==="GET"&&!e.data?(t+=`uri = URI(url)
`,t+=`response = Net::HTTP.get(uri)
`,t+="puts response.body"):(t+=`uri = URI(url)
`,t+=`request = Net::HTTP::${e.method==="POST"?"Post":e.method}.new(uri)
`,e.headers.length>0&&(t+=`  headers.each { |key, value| request[key] = value }
`),e.data&&(t+=`  request.body = ${e.data.startsWith("{")?e.data:`'${e.data}'`}
`),t+=`  response = Net::HTTP.start(uri, request)
`,t+=`  puts response.body
`),t},X=e=>{let t=`const fetch = require('node-fetch')
`;return t+=_(e),t},z=e=>{a.value=e.command,f()},Q=()=>{l.value&&navigator.clipboard.writeText(l.value).then(()=>{}).catch(e=>{console.error("复制失败:",e)})},K=()=>{if(!l.value)return;const t={javascript:"js",python:"py",php:"php",java:"java",csharp:"cs",go:"go",ruby:"rb",shell:"sh"}[d.value]||"txt",n=new Blob([l.value],{type:"text/plain"}),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=`curl-code.${t}`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(s)},Y=()=>{a.value="",l.value=""},Z=async()=>{try{const e=await navigator.clipboard.readText();a.value=e,f()}catch(e){console.error("粘贴失败:",e)}},tt=()=>{p.value=!p.value};return P&&at(P.id),lt(d,()=>{a.value&&f()}),(e,t)=>{const n=st;return c(),x("div",Et,[t[10]||(t[10]=o("div",{class:"mb-8"},[o("h1",{class:"text-3xl font-bold text-foreground mb-3"},"cURL转代码 - 在线cURL命令转多种编程语言工具"),o("p",{class:"text-muted-foreground"},"免费在线cURL转代码工具，支持将cURL命令转换为JavaScript、Python、PHP、Java、C#、Go、Ruby等多种编程语言代码。支持HTTP请求、API调用等场景，纯本地转换，代码安全可靠。")],-1)),o("div",It,[o("div",Ot,[o("div",Nt,[o("label",Jt,[u(i($),{class:"w-4 h-4 mr-2"}),t[2]||(t[2]=v(" cURL命令 ",-1))]),o("div",{class:"flex gap-2"},[o("button",{class:"text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground",onClick:Y}," 清空 "),o("button",{class:"text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground",onClick:Z}," 粘贴 ")])]),C(o("textarea",{"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),placeholder:`curl -X POST https://api.example.com/data\\n  -H 'Content-Type: application/json'\\n  -d '{"key": "value"}'`,class:"flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm",rows:"8",onInput:f},null,544),[[it,a.value]]),o("div",At,[t[3]||(t[3]=o("label",{class:"block text-xs text-muted-foreground mb-2"},"常用示例",-1)),o("div",Bt,[(c(),x(T,null,R(O,s=>o("button",{key:s.name,onClick:r=>z(s),class:"px-3 py-2 bg-card border border-border rounded-md hover:bg-accent transition-colors text-xs text-foreground"},g(s.name),9,Ft)),64))])])]),o("div",Gt,[o("div",Mt,[o("label",Dt,[u(i(k),{class:"w-4 h-4 mr-2"}),t[4]||(t[4]=v(" 输出语言 ",-1))]),o("div",Wt,[(c(),x(T,null,R(I,s=>o("button",{key:s.value,onClick:r=>d.value=s.value,class:L(["px-3 py-1.5 rounded-md transition-colors text-sm font-medium",d.value===s.value?"bg-primary text-primary-foreground":"bg-muted hover:bg-muted/80 text-muted-foreground"])},g(s.name),11,Vt)),64))])]),o("div",Xt,[o("div",zt,[o("label",Qt,[u(i(U),{class:"w-4 h-4 mr-2"}),t[5]||(t[5]=v(" 生成的代码 ",-1))]),o("div",Kt,[C(o("select",{"onUpdate:modelValue":t[1]||(t[1]=s=>y.value=s),class:"text-xs bg-muted border border-border rounded px-2 py-1"},[...t[6]||(t[6]=[o("option",{value:"text-xs"},"极小",-1),o("option",{value:"text-sm"},"小",-1),o("option",{value:"text-base"},"中",-1),o("option",{value:"text-lg"},"大",-1)])],512),[[ct,y.value]]),o("button",{class:"text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground",onClick:Q},[u(i(w),{class:"w-3 h-3"})]),o("button",{class:"text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground",onClick:K},[u(i(j),{class:"w-3 h-3"})])])]),o("pre",{class:L(["flex-1 w-full min-h-[300px] p-4 bg-card border border-border rounded-lg overflow-auto font-mono text-sm",y.value])},[o("code",null,g(l.value||"请输入cURL命令..."),1)],2)]),o("div",Yt,[o("h3",Zt,[u(i(q),{class:"w-4 h-4 mr-2"}),t[7]||(t[7]=v(" 依赖说明 ",-1))]),o("div",te,[o("div",{innerHTML:J.value},null,8,ee)])])])]),o("div",oe,[o("button",{onClick:tt,class:"absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors",title:p.value?"折叠内容":"展开内容"},[p.value?(c(),b(i(xt),{key:1,class:"w-5 h-5"})):(c(),b(i(ft),{key:0,class:"w-5 h-5"}))],8,ne),C(o("div",null,[...t[8]||(t[8]=[ut('<h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 cURL 转代码？ </h2><p class="text-muted-foreground mb-4"> cURL 是一个强大的命令行工具，用于发送和接收数据，支持多种协议，包括 HTTP、HTTPS、FTP 等。 在开发过程中，我们经常需要将测试好的 cURL 命令转换为实际的编程语言代码，以便集成到项目中。 cURL 转代码工具可以帮助开发者快速完成这个转换过程，节省时间并减少错误。 </p><p class="text-muted-foreground"> 本工具支持多种主流编程语言，包括 JavaScript (fetch/axios)、Python (requests)、PHP (cURL)、Java (HttpClient)、 C# (HttpClient)、Go (net/http)、Ruby (net/http) 等。转换后的代码可以直接在项目中使用， 大大提高了开发效率。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>将您的 cURL 命令粘贴到左侧输入框中</li><li>选择您想要转换的目标编程语言</li><li>代码会自动生成并显示在右侧</li><li>点击&quot;复制&quot;按钮复制生成的代码，或点击&quot;下载&quot;保存为文件</li><li>查看底部的依赖说明，确保项目已安装必要的库</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 支持的功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>多种语言支持</strong>: 支持 JavaScript、Python、PHP、Java、C#、Go、Ruby 等主流编程语言</li><li><strong>完整的 HTTP 功能</strong>: 支持 GET、POST、PUT、DELETE 等 HTTP 方法</li><li><strong>请求头处理</strong>: 自动识别和转换自定义请求头</li><li><strong>数据传输</strong>: 支持 JSON、表单数据、文件上传等多种数据格式</li><li><strong>认证支持</strong>: 支持 Bearer Token、Basic Auth 等认证方式</li><li><strong>本地处理</strong>: 所有转换都在浏览器本地完成，保护数据隐私</li><li><strong>实时转换</strong>: 输入 cURL 命令后立即生成代码，无需等待</li><li><strong>代码高亮</strong>: 生成的代码具有良好的格式和可读性</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见应用场景 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>API 集成</strong>: 将 API 文档中的 cURL 示例转换为项目代码</li><li><strong>快速原型</strong>: 快速生成 HTTP 请求代码，用于测试和开发</li><li><strong>学习参考</strong>: 学习不同语言的 HTTP 请求实现方式</li><li><strong>代码迁移</strong>: 将项目中的 cURL 命令转换为编程语言代码</li><li><strong>文档编写</strong>: 为项目文档生成多语言示例代码</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">生成的代码可以直接使用吗？</h3><p class="text-muted-foreground mt-1"> 大部分情况下可以直接使用。但建议根据您的项目需求进行适当调整， 比如添加错误处理、响应解析、环境变量配置等。同时请确保项目已安装所需的依赖库。 </p></div><div><h3 class="text-lg font-semibold text-foreground">支持哪些 cURL 选项？</h3><p class="text-muted-foreground mt-1"> 本工具支持常用的 cURL 选项，包括 -X (HTTP方法)、-H (请求头)、-d (数据)、 -F (表单)、-u (认证)、--timeout (超时) 等。如果遇到不支持的选项， 可能需要手动调整生成的代码。 </p></div><div><h3 class="text-lg font-semibold text-foreground">数据安全有保障吗？</h3><p class="text-muted-foreground mt-1"> 绝对安全。本工具采用纯前端技术实现，所有 cURL 命令解析和代码生成都在您的浏览器本地完成， 数据不会上传到任何服务器。您的 cURL 命令可能包含敏感信息，使用本地处理可以确保隐私安全。 </p></div><div><h3 class="text-lg font-semibold text-foreground">如何处理复杂的 cURL 命令？</h3><p class="text-muted-foreground mt-1"> 对于复杂的 cURL 命令，建议先进行简化转换，然后根据需要手动完善。 特别是涉及特殊选项、自定义证书、代理设置等情况时，可能需要额外的配置。 生成的代码提供了一个良好的起点，您可以根据实际需求进行调整。 </p></div></div>',11)])],512),[[dt,p.value]])]),o("section",se,[t[9]||(t[9]=o("h2",{class:"text-2xl font-bold text-foreground mb-4"},"您可能还需要...",-1)),o("div",re,[(c(!0),x(T,null,R(N.value,s=>(c(),b(n,{key:s.id,to:`/tools/${s.id}`,class:"block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"},{default:pt(()=>[o("div",ae,[(c(),b(ht(E[s.icon]),{class:"w-5 h-5 text-primary"})),o("span",le,g(s.name),1)]),o("p",ie,g(s.description),1)]),_:2},1032,["to"]))),128))])])])}}};export{Ae as default};
