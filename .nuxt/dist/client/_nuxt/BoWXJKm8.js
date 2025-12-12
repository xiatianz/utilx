import{_ as F}from"./D4g1_bQ7.js";import{r as h,e as N,q as H,c as u,a as t,F as b,k as f,h as m,v as g,t as v,x as I,b as d,d as J,j as c,w as k,o as p,E as C,P as T}from"./DEsTSaKd.js";import{T as X}from"./C-pOhJ0D.js";import{X as z}from"./DJb2aM7w.js";import{I as Q}from"./MvNwXCJb.js";import{F as Y}from"./CRvidJJ3.js";import{A}from"./Bluep4Ee.js";import{G as K}from"./B8QRyNMs.js";import{C as W}from"./vEvaw0F6.js";import"./wERbHxDK.js";const Z={class:"max-w-8xl mx-auto"},ee={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},te={class:"space-y-4"},oe={class:"bg-card rounded-lg p-6"},se={class:"flex gap-2 mb-4"},ae=["onClick"],re={class:"space-y-4"},ne={class:"bg-card rounded-lg p-6"},le={class:"space-y-4"},de={class:"flex justify-between items-center"},ie={class:"text-sm font-medium"},ue=["onClick"],pe={class:"grid grid-cols-2 gap-3"},me=["onUpdate:modelValue"],ce=["onUpdate:modelValue"],ve=["onUpdate:modelValue"],xe={class:"mt-2 space-y-2"},ge=["onUpdate:modelValue"],he=["onUpdate:modelValue"],be=["onUpdate:modelValue"],fe=["onClick"],ye=["onClick"],we={class:"space-y-4"},_e={class:"bg-card rounded-lg p-6"},Pe={class:"grid grid-cols-2 gap-3"},ke=["onClick"],Te={class:"font-medium"},Ae={class:"text-xs opacity-80"},Ue={class:"bg-card rounded-lg p-6"},$e={class:"flex justify-between items-center mb-4"},Ie={class:"flex gap-2"},Ce={class:"border rounded-lg p-4 bg-muted/30 min-h-[400px] max-h-[600px] overflow-auto"},Ee={key:0,class:"text-sm whitespace-pre-wrap"},Le={key:1,class:"text-center text-muted-foreground py-8"},Ve={class:"bg-card rounded-lg p-6"},Se={class:"grid grid-cols-2 gap-3"},Oe=["onClick"],je={class:"font-medium text-sm"},Me={class:"text-xs text-muted-foreground"},qe={class:"mt-12 space-y-6"},De={class:"bg-card rounded-lg p-6"},Re={class:"text-lg font-semibold mb-4 flex items-center gap-2"},Ge={class:"bg-card rounded-lg p-6"},Be={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},et={__name:"api-doc",setup(Fe){const U=h("manual"),y=h("markdown"),P=h(!1),r=h({name:"",version:"v1.0.0",baseUrl:"",description:""}),i=h([]),E=[{value:"manual",name:"手动配置"},{value:"swagger",name:"导入 Swagger"},{value:"postman",name:"导入 Postman"}],L=[{value:"markdown",name:"Markdown",description:"适用于文档编写"},{value:"html",name:"HTML",description:"适用于网页展示"},{value:"pdf",name:"PDF",description:"适用于打印分享"},{value:"openapi",name:"OpenAPI",description:"标准 API 规范"}],V=[{name:"REST API",description:"标准 RESTful API",data:{name:"示例 API",version:"v1.0.0",baseUrl:"https://api.example.com",endpoints:[{method:"GET",path:"/users",description:"获取用户列表",parameters:[]},{method:"POST",path:"/users",description:"创建新用户",parameters:[{name:"name",type:"string",location:"body"},{name:"email",type:"string",location:"body"}]}]}},{name:"博客 API",description:"博客系统 API",data:{name:"博客 API",version:"v1.0.0",baseUrl:"https://blog-api.example.com",endpoints:[{method:"GET",path:"/posts",description:"获取文章列表",parameters:[{name:"page",type:"number",location:"query"},{name:"limit",type:"number",location:"query"}]},{method:"GET",path:"/posts/{id}",description:"获取文章详情",parameters:[{name:"id",type:"string",location:"path"}]}]}}],w=N(()=>{if(!r.value.name||i.value.length===0)return"";switch(y.value){case"markdown":return $();case"html":return S();case"openapi":return O();default:return $()}}),$=()=>{let s=`# ${r.value.name} API 文档

`;return s+=`**版本：** ${r.value.version}

`,s+=`**Base URL：** \`${r.value.baseUrl}\`

`,r.value.description&&(s+=`## 简介

${r.value.description}

`),s+=`## API 端点

`,i.value.forEach((e,l)=>{if(s+=`### ${e.method} ${e.path}

`,e.description&&(s+=`${e.description}

`),e.parameters&&e.parameters.length>0&&(s+=`#### 参数

`,s+=`| 参数名 | 类型 | 位置 | 必填 | 说明 |
`,s+=`|--------|------|------|------|------|
`,e.parameters.forEach(o=>{s+=`| ${o.name} | ${o.type} | ${o.location} | 是 | - |
`}),s+=`
`),s+=`#### 请求示例

`,s+="```bash\n",e.method==="GET"){let o=`${r.value.baseUrl}${e.path}`;const n=e.parameters?.filter(a=>a.location==="query");n&&n.length>0&&(o+="?"+n.map(a=>`${a.name}=xxx`).join("&")),s+=`curl -X GET "${o}"
`}else if(e.method==="POST"){s+=`curl -X POST "${r.value.baseUrl}${e.path}" \\
`,s+=`  -H "Content-Type: application/json" \\
`;const o=e.parameters?.filter(n=>n.location==="body");if(o&&o.length>0){const n=o.reduce((a,_)=>(a[_.name]="xxx",a),{});s+=`  -d '${JSON.stringify(n,null,2)}'
`}}s+="```\n\n",s+=`#### 响应示例

`,s+="```json\n",s+=`{
`,s+=`  "code": 200,
`,s+=`  "message": "success",
`,s+=`  "data": {}
`,s+=`}
`,s+="```\n\n"}),s},S=()=>{let s=`<!DOCTYPE html>
<html>
<head>
  <title>${r.value.name} API 文档</title>
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
  <h1>${r.value.name} API 文档</h1>
  <p><strong>版本：</strong>${r.value.version}</p>
  <p><strong>Base URL：</strong><code>${r.value.baseUrl}</code></p>

  <h2>API 端点</h2>`;return i.value.forEach(e=>{const l=e.method.toLowerCase();s+=`
  <div class="endpoint">
    <h3><span class="method ${l}">${e.method}</span> ${e.path}</h3>
    <p>${e.description||""}</p>`,e.parameters&&e.parameters.length>0&&(s+=`
    <h4>参数</h4>
    <table>
      <tr><th>参数名</th><th>类型</th><th>位置</th><th>必填</th></tr>`,e.parameters.forEach(o=>{s+=`
      <tr>
        <td>${o.name}</td>
        <td>${o.type}</td>
        <td>${o.location}</td>
        <td>是</td>
      </tr>`}),s+=`
    </table>`),s+=`
  </div>`}),s+=`
</body>
</html>`,s},O=()=>{const s={openapi:"3.0.0",info:{title:r.value.name,version:r.value.version,description:r.value.description},servers:[{url:r.value.baseUrl}],paths:{}};return i.value.forEach(e=>{const l={[e.method.toLowerCase()]:{summary:e.description,parameters:[]}};e.parameters&&e.parameters.forEach(o=>{o.location==="path"?l[e.method.toLowerCase()].parameters.push({name:o.name,in:"path",required:!0,schema:{type:o.type}}):o.location==="query"&&l[e.method.toLowerCase()].parameters.push({name:o.name,in:"query",schema:{type:o.type}})}),s.paths[e.path]=l}),JSON.stringify(s,null,2)},j=()=>{i.value.push({method:"GET",path:"",description:"",parameters:[]})},M=s=>{i.value.splice(s,1)},q=s=>{i.value[s].parameters.push({name:"",type:"string",location:"query"})},D=(s,e)=>{i.value[s].parameters.splice(e,1)},R=s=>{r.value={...s.data},i.value=[...s.data.endpoints]},G=async()=>{try{await navigator.clipboard.writeText(w.value),P.value=!0,setTimeout(()=>{P.value=!1},2e3)}catch(s){console.error("复制失败",s)}},B=()=>{const s=w.value;let e=`${r.value.name||"api"}-doc`,l="text/plain";switch(y.value){case"markdown":e+=".md",l="text/markdown";break;case"html":e+=".html",l="text/html";break;case"openapi":e+=".json",l="application/json";break;default:e+=".txt"}const o=new Blob([s],{type:l}),n=URL.createObjectURL(o),a=document.createElement("a");a.href=n,a.download=e,a.click(),URL.revokeObjectURL(n)};return H({title:"API 文档生成器 - 在线 API 文档生成工具",description:"免费的在线 API 文档生成工具，根据 API 描述自动生成格式化的文档，支持 Markdown、HTML、PDF 等多种输出格式。",keywords:["api","文档生成","openapi","swagger","rest api","文档工具"]}),(s,e)=>{const l=F;return p(),u("div",Z,[e[24]||(e[24]=t("div",{class:"mt-4 mb-8"},[t("h1",{class:"text-3xl font-bold mb-3"},"API 文档生成器"),t("p",{class:"text-muted-foreground"},"根据 API 描述自动生成格式化的 API 文档，支持多种输出格式")],-1)),t("div",ee,[t("div",te,[t("div",oe,[e[6]||(e[6]=t("h2",{class:"text-lg font-semibold mb-4"},"输入方式",-1)),t("div",se,[(p(),u(b,null,f(E,o=>t("button",{key:o.value,onClick:n=>U.value=o.value,class:C(["px-4 py-2 rounded-md transition-colors text-sm",U.value===o.value?"bg-primary text-primary-foreground":"bg-muted hover:bg-muted/80"])},v(o.name),11,ae)),64))]),t("div",re,[t("div",null,[e[3]||(e[3]=t("label",{class:"text-sm font-medium"},"API 名称",-1)),m(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.value.name=o),type:"text",placeholder:"例如：用户管理 API",class:"mt-2 w-full px-3 py-2 border rounded-md text-sm"},null,512),[[g,r.value.name]])]),t("div",null,[e[4]||(e[4]=t("label",{class:"text-sm font-medium"},"API 版本",-1)),m(t("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.value.version=o),type:"text",placeholder:"例如：v1.0.0",class:"mt-2 w-full px-3 py-2 border rounded-md text-sm"},null,512),[[g,r.value.version]])]),t("div",null,[e[5]||(e[5]=t("label",{class:"text-sm font-medium"},"Base URL",-1)),m(t("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.value.baseUrl=o),type:"text",placeholder:"例如：https://api.example.com",class:"mt-2 w-full px-3 py-2 border rounded-md text-sm"},null,512),[[g,r.value.baseUrl]])])])]),t("div",ne,[t("div",{class:"flex justify-between items-center mb-4"},[e[7]||(e[7]=t("h2",{class:"text-lg font-semibold"},"API 端点",-1)),t("button",{onClick:j,class:"px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"}," 添加端点 ")]),t("div",le,[(p(!0),u(b,null,f(i.value,(o,n)=>(p(),u("div",{key:n,class:"p-4 border rounded-lg space-y-3"},[t("div",de,[t("span",ie,"端点 "+v(n+1),1),t("button",{onClick:a=>M(n),class:"text-red-500 hover:text-red-700 transition-colors"},[d(c(X),{class:"w-4 h-4"})],8,ue)]),t("div",pe,[t("div",null,[e[9]||(e[9]=t("label",{class:"text-xs text-muted-foreground"},"请求方法",-1)),m(t("select",{"onUpdate:modelValue":a=>o.method=a,class:"mt-1 w-full px-2 py-1 border rounded text-sm"},[...e[8]||(e[8]=[I('<option value="GET">GET</option><option value="POST">POST</option><option value="PUT">PUT</option><option value="DELETE">DELETE</option><option value="PATCH">PATCH</option>',5)])],8,me),[[T,o.method]])]),t("div",null,[e[10]||(e[10]=t("label",{class:"text-xs text-muted-foreground"},"路径",-1)),m(t("input",{"onUpdate:modelValue":a=>o.path=a,type:"text",placeholder:"/users/{id}",class:"mt-1 w-full px-2 py-1 border rounded text-sm"},null,8,ce),[[g,o.path]])])]),t("div",null,[e[11]||(e[11]=t("label",{class:"text-xs text-muted-foreground"},"描述",-1)),m(t("input",{"onUpdate:modelValue":a=>o.description=a,type:"text",placeholder:"获取用户信息",class:"mt-1 w-full px-2 py-1 border rounded text-sm"},null,8,ve),[[g,o.description]])]),t("div",null,[e[14]||(e[14]=t("label",{class:"text-xs text-muted-foreground"},"参数",-1)),t("div",xe,[(p(!0),u(b,null,f(o.parameters,(a,_)=>(p(),u("div",{key:_,class:"flex gap-2 items-center"},[m(t("input",{"onUpdate:modelValue":x=>a.name=x,type:"text",placeholder:"参数名",class:"flex-1 px-2 py-1 border rounded text-sm"},null,8,ge),[[g,a.name]]),m(t("select",{"onUpdate:modelValue":x=>a.type=x,class:"px-2 py-1 border rounded text-sm"},[...e[12]||(e[12]=[t("option",{value:"string"},"string",-1),t("option",{value:"number"},"number",-1),t("option",{value:"boolean"},"boolean",-1),t("option",{value:"object"},"object",-1)])],8,he),[[T,a.type]]),m(t("select",{"onUpdate:modelValue":x=>a.location=x,class:"px-2 py-1 border rounded text-sm"},[...e[13]||(e[13]=[t("option",{value:"path"},"Path",-1),t("option",{value:"query"},"Query",-1),t("option",{value:"body"},"Body",-1)])],8,be),[[T,a.location]]),t("button",{onClick:x=>D(n,_),class:"text-red-500 hover:text-red-700 transition-colors"},[d(c(z),{class:"w-4 h-4"})],8,fe)]))),128)),t("button",{onClick:a=>q(n),class:"text-sm text-primary hover:text-primary/80 transition-colors"}," + 添加参数 ",8,ye)])])]))),128))])])]),t("div",we,[t("div",_e,[e[15]||(e[15]=t("h2",{class:"text-lg font-semibold mb-4"},"输出格式",-1)),t("div",Pe,[(p(),u(b,null,f(L,o=>t("button",{key:o.value,onClick:n=>y.value=o.value,class:C(["px-4 py-3 rounded-md transition-colors text-left",y.value===o.value?"bg-primary text-primary-foreground":"bg-muted hover:bg-muted/80"])},[t("div",Te,v(o.name),1),t("div",Ae,v(o.description),1)],10,ke)),64))])]),t("div",Ue,[t("div",$e,[e[16]||(e[16]=t("h2",{class:"text-lg font-semibold"},"文档预览",-1)),t("div",Ie,[t("button",{onClick:G,class:"px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors"},v(P.value?"已复制":"复制"),1),t("button",{onClick:B,class:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"}," 下载 ")])]),t("div",Ce,[w.value?(p(),u("pre",Ee,v(w.value),1)):(p(),u("div",Le," 请配置 API 信息后生成文档 "))])]),t("div",Ve,[e[17]||(e[17]=t("h2",{class:"text-lg font-semibold mb-4"},"快速模板",-1)),t("div",Se,[(p(),u(b,null,f(V,o=>t("button",{key:o.name,onClick:n=>R(o),class:"p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors text-left"},[t("div",je,v(o.name),1),t("div",Me,v(o.description),1)],8,Oe)),64))])])])]),t("div",qe,[t("div",De,[t("h3",Re,[d(c(Q),{class:"w-5 h-5 text-primary"}),e[18]||(e[18]=J(" 使用说明 ",-1))]),e[19]||(e[19]=I('<div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">1. 配置基本信息</h4><p>填写 API 名称、版本和 Base URL 等基本信息。</p></div><div><h4 class="font-medium text-foreground mb-2">2. 添加 API 端点</h4><p>点击&quot;添加端点&quot;按钮，配置每个端点的请求方法、路径、参数等信息。</p></div><div><h4 class="font-medium text-foreground mb-2">3. 选择输出格式</h4><p>支持 Markdown、HTML、PDF 等多种文档格式。</p></div><div><h4 class="font-medium text-foreground mb-2">4. 生成和导出</h4><p>实时预览生成的文档，支持复制或下载导出。</p></div></div>',1))]),t("div",Ge,[e[23]||(e[23]=t("h3",{class:"text-lg font-semibold mb-4"},"相关工具",-1)),t("div",Be,[d(l,{to:"/tools/swagger-viewer",class:"flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"},{default:k(()=>[d(c(Y),{class:"w-5 h-5 text-primary"}),e[20]||(e[20]=t("div",null,[t("p",{class:"font-medium group-hover:text-primary"},"Swagger 查看器"),t("p",{class:"text-xs text-muted-foreground"},"查看和测试 API 文档")],-1)),d(c(A),{class:"w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary"})]),_:1}),d(l,{to:"/tools/http-client",class:"flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"},{default:k(()=>[d(c(K),{class:"w-5 h-5 text-primary"}),e[21]||(e[21]=t("div",null,[t("p",{class:"font-medium group-hover:text-primary"},"HTTP 客户端"),t("p",{class:"text-xs text-muted-foreground"},"测试 API 请求")],-1)),d(c(A),{class:"w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary"})]),_:1}),d(l,{to:"/tools/json-formatter",class:"flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"},{default:k(()=>[d(c(W),{class:"w-5 h-5 text-primary"}),e[22]||(e[22]=t("div",null,[t("p",{class:"font-medium group-hover:text-primary"},"JSON 格式化"),t("p",{class:"text-xs text-muted-foreground"},"格式化 JSON 数据")],-1)),d(c(A),{class:"w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary"})]),_:1})])])])])}}};export{et as default};
