import{_ as H}from"./D4g1_bQ7.js";import{r as c,e as Q,p as X,f as Z,c as _,a as t,h as A,y as ee,P as C,v as te,z as J,V as j,t as M,n as k,j as E,l as se,x as oe,F as re,k as le,m as ne,o as x,w as ie,C as ae}from"./DEsTSaKd.js";import{t as h}from"./B-fbZyPE.js";import{c as ue}from"./3IwUeceH.js";import{C as de,a as ce}from"./BaG5JeHk.js";import{G as me}from"./sCtjrDU-.js";import{F as fe}from"./OWHW6ZUB.js";import{G as pe}from"./B8QRyNMs.js";import{F as xe}from"./BIbbmz6B.js";import{R as ge}from"./b4Up8kzW.js";import{T as be}from"./C1JgnPlw.js";import{H as ve}from"./ZC22Qqbx.js";import{L as he}from"./BP6Cft7q.js";import{D as ye}from"./DESX2TF9.js";import{F as Le}from"./C-LEKrTT.js";import{C as Me}from"./vEvaw0F6.js";import{I as Ae}from"./4T928kbW.js";import{W as ke}from"./BUYFD_dQ.js";import{T as we}from"./Z_ZHHb8E.js";import{C as Se}from"./BuCd20m7.js";import{S as Ye}from"./w5JABn4e.js";import{L as _e}from"./DbWJs76d.js";import{F as Fe}from"./CRvidJJ3.js";import"./wERbHxDK.js";const Oe={class:"max-w-8xl mx-auto"},Ne={class:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"},Ce={class:"flex flex-col h-full"},Je={class:"flex items-center justify-between mb-2"},je={class:"flex items-center gap-2"},Ee={class:"flex items-center gap-2"},Re=["placeholder","onKeydown"],$e={key:0,class:"mt-2 p-2 bg-destructive/20 text-destructive text-sm rounded"},De={class:"flex flex-col h-full"},Ve={class:"flex justify-center mb-12"},Be={class:"p-6 mb-12 relative"},Te=["title"],Ue={class:"mb-12"},We={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"},qe={class:"flex items-center gap-2 mb-2"},Ge={class:"font-medium text-foreground"},Ie={class:"text-sm text-muted-foreground line-clamp-2"},vt={__name:"yaml-formatter",setup(Ke){ne();const F=h.find(e=>e.id==="yaml-converter");ue.find(e=>e.id==="format");const i=c(""),a=c(""),y=c(""),m=c("yaml"),f=c("json"),L=c(!0),u=c(null),g=c(!1),R={FileText:Fe,Lock:_e,Shield:Ye,Clock:Se,Type:we,Wifi:ke,Image:Ae,Code:Me,FileJson:Le,Database:ye,Link:he,Hash:ve,Timer:be,Regex:ge,FileDiff:xe,Globe:pe,FolderOpen:fe,GitBranch:me},$=Q(()=>{const e=h.filter(r=>r.category==="format"&&r.id!=="yaml-converter").slice(0,3),s=[h.find(r=>r.id==="json-formatter"),h.find(r=>r.id==="xml-formatter"),h.find(r=>r.id==="sql-formatter"),h.find(r=>r.id==="base64-encoder")].filter(Boolean);return[...e,...s].slice(0,4)}),D=()=>m.value==="yaml"&&f.value==="json"?"YAML 转 JSON":m.value==="json"&&f.value==="yaml"?"JSON 转 YAML":"转换",V=e=>{const s=e.split(`
`),r={},o=[r];for(const l of s){const n=l.trim();if(!n||n.startsWith("#"))continue;const K=l.search(/\S/),P=Math.floor(K/2);for(;o.length>P+1;)o.pop();const b=o[o.length-1];if(n.startsWith("- ")){const p=n.substring(2).trim();if(!Array.isArray(b)){o.pop();const d=o[o.length-1],v=Object.keys(d).pop();d[v]=[],o.push(d[v])}if(p.includes(":")){const[d,v]=p.split(":").map(z=>z.trim()),N={};N[d]=w(v),b.push(N)}else b.push(w(p))}else if(n.includes(":")){const[p,d]=n.split(":").map(v=>v.trim());d?b[p]=w(d):(b[p]={},o.push(b[p]))}}return r},w=e=>!isNaN(e)&&e!==""?Number(e):e==="true"||e==="false"?e==="true":e==="null"||e==="~"?null:e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1):e,S=(e,s=0)=>{const r="  ".repeat(s);let o="";if(Array.isArray(e))for(const l of e)typeof l=="object"&&l!==null?(o+=`${r}-
`,o+=S(l,s+1)):o+=`${r}- ${O(l)}
`;else if(typeof e=="object"&&e!==null)for(const[l,n]of Object.entries(e))typeof n=="object"&&n!==null?(o+=`${r}${l}:
`,o+=S(n,s+1)):o+=`${r}${l}: ${O(n)}
`;return o},O=e=>e===null?"null":typeof e=="string"?e.includes(":")||e.includes("#")||e.includes("@")||e.includes("`")||e.includes("|")||e.includes(">")?`"${e}"`:e:String(e),Y=()=>{if(i.value)try{y.value="";let e=null;m.value==="yaml"?e=V(i.value):e=JSON.parse(i.value),f.value==="yaml"?a.value=S(e):a.value=JSON.stringify(e,null,2)}catch(e){y.value=`转换失败: ${e.message}`,a.value=""}},B=()=>{i.value="",a.value="",y.value=""},T=async()=>{try{const e=await navigator.clipboard.readText();i.value=e}catch(e){console.error("粘贴失败:",e)}},U=()=>{m.value==="yaml"?i.value=`# 应用配置示例
app:
  name: "My Application"
  version: 1.0.0
  debug: true

database:
  host: "localhost"
  port: 5432
  credentials:
    username: "admin"
    password: "secret123"

  connection_pool:
    max_connections: 20
    timeout: 30s

features:
  - authentication
  - logging
  - monitoring
  - api_v2

servers:
  - name: "web-server"
    host: "192.168.1.10"
    roles: ["web", "cache"]
  - name: "db-server"
    host: "192.168.1.20"
    roles: ["database"]`:i.value=`{
  "app": {
    "name": "My Application",
    "version": 1.0,
    "debug": true
  },
  "database": {
    "host": "localhost",
    "port": 5432,
    "credentials": {
      "username": "admin",
      "password": "secret123"
    },
    "connection_pool": {
      "max_connections": 20,
      "timeout": "30s"
    }
  },
  "features": [
    "authentication",
    "logging",
    "monitoring",
    "api_v2"
  ],
  "servers": [
    {
      "name": "web-server",
      "host": "192.168.1.10",
      "roles": ["web", "cache"]
    },
    {
      "name": "db-server",
      "host": "192.168.1.20",
      "roles": ["database"]
    }
  ]
}`},W=async()=>{if(a.value)try{await navigator.clipboard.writeText(a.value)}catch(e){console.error("复制失败:",e)}},q=()=>{if(!a.value)return;const e=f.value==="yaml"?"yaml":"json",s=f.value==="yaml"?"text/yaml":"application/json",r=new Blob([a.value],{type:s}),o=URL.createObjectURL(r),l=document.createElement("a");l.href=o,l.download=`converted.${e}`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(o)},G=()=>{u.value&&(g.value?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():u.value.requestFullscreen?u.value.requestFullscreen():u.value.webkitRequestFullscreen?u.value.webkitRequestFullscreen():u.value.msRequestFullscreen&&u.value.msRequestFullscreen(),g.value=!g.value)},I=()=>{L.value=!L.value};return F&&X(F.id),Z(()=>{document.addEventListener("fullscreenchange",()=>{g.value=!!document.fullscreenElement}),document.addEventListener("webkitfullscreenchange",()=>{g.value=!!document.webkitFullscreenElement}),document.addEventListener("msfullscreenchange",()=>{g.value=!!document.msFullscreenElement})}),(e,s)=>{const r=H;return x(),_("div",Oe,[s[11]||(s[11]=t("div",{class:"mb-8"},[t("h1",{class:"text-3xl font-bold text-foreground mb-3"},"YAML转换器 - YAML与JSON互转工具"),t("p",{class:"text-muted-foreground"},"一款免费的在线 YAML Converter。支持 YAML 与 JSON 格式互相转换，格式化、验证 YAML 语法。纯本地计算，数据隐私绝对安全。")],-1)),t("div",Ne,[t("div",Ce,[t("div",{class:"flex items-center justify-between mb-3"},[s[3]||(s[3]=t("label",{class:"text-sm font-medium text-foreground"},"输入YAML",-1)),t("div",{class:"flex gap-2"},[t("button",{class:"text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground",onClick:B}," 清空 "),t("button",{class:"text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground",onClick:T}," 粘贴 "),t("button",{class:"text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground",onClick:U}," 示例数据 ")])]),t("div",Je,[t("div",je,[s[5]||(s[5]=t("label",{class:"text-xs text-muted-foreground"},"输入格式:",-1)),A(t("select",{"onUpdate:modelValue":s[0]||(s[0]=o=>m.value=o),class:"text-xs bg-muted border border-border rounded px-2 py-1"},[...s[4]||(s[4]=[t("option",{value:"yaml"},"YAML",-1),t("option",{value:"json"},"JSON",-1)])],512),[[C,m.value]])]),t("div",Ee,[s[7]||(s[7]=t("label",{class:"text-xs text-muted-foreground"},"输出格式:",-1)),A(t("select",{"onUpdate:modelValue":s[1]||(s[1]=o=>f.value=o),class:"text-xs bg-muted border border-border rounded px-2 py-1"},[...s[6]||(s[6]=[t("option",{value:"json"},"JSON",-1),t("option",{value:"yaml"},"YAML",-1)])],512),[[C,f.value]])])]),A(t("textarea",{"onUpdate:modelValue":s[2]||(s[2]=o=>i.value=o),class:"flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm",placeholder:m.value==="yaml"?"在此输入YAML数据...":"在此输入JSON数据...",onKeydown:[J(j(Y,["ctrl"]),["enter"]),J(j(Y,["meta"]),["enter"])]},null,40,Re),[[te,i.value]]),y.value?(x(),_("div",$e,M(y.value),1)):ee("",!0)]),t("div",De,[t("div",{class:"flex items-center justify-between mb-3"},[s[8]||(s[8]=t("label",{class:"text-sm font-medium text-foreground"},"转换结果",-1)),t("div",{class:"flex gap-2"},[t("button",{class:"text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground",onClick:W}," 复制 "),t("button",{class:"text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground",onClick:q}," 下载文件 "),t("button",{class:"text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground",onClick:G}," 全屏模式 ")])]),t("pre",{ref_key:"outputPre",ref:u,class:"flex-1 w-full min-h-[300px] p-4 bg-muted border border-border rounded-lg overflow-auto font-mono text-sm whitespace-pre-wrap"},M(a.value),513)])]),t("div",Ve,[t("button",{onClick:Y,class:"px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"},M(D()),1)]),t("div",Be,[t("button",{onClick:I,class:"absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors",title:L.value?"折叠内容":"展开内容"},[L.value?(x(),k(E(ce),{key:1,class:"w-5 h-5"})):(x(),k(E(de),{key:0,class:"w-5 h-5"}))],8,Te),A(t("div",null,[...s[9]||(s[9]=[oe('<h2 class="text-2xl font-bold text-foreground mb-4 flex items-center"><span class="text-primary mr-2">#</span> 什么是 YAML？ </h2><p class="text-muted-foreground mb-4"> YAML（YAML Ain&#39;t Markup Language）是一种人类可读的数据序列化格式，常用于配置文件、 数据交换和应用程序配置。它以其简洁性和易读性而闻名，支持列表、字典、标量等数据结构。 YAML 使用缩进来表示层级关系，避免了使用花括号和标签的复杂性。 </p><p class="text-muted-foreground"> YAML 与 JSON 可以互相转换，因为它们都表示相同的数据结构。YAML 更加人类友好， 而 JSON 更加机器友好。在 DevOps、容器化应用（如 Docker、Kubernetes）中， YAML 是标准的配置格式。 </p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 如何使用本工具 </h2><ol class="list-decimal list-inside space-y-2 text-muted-foreground mb-6"><li>选择输入格式（YAML 或 JSON）</li><li>将数据粘贴到左侧输入框</li><li>选择输出格式（JSON 或 YAML）</li><li>点击转换按钮或使用快捷键 Ctrl+Enter</li><li>查看右侧转换结果，可复制或下载</li></ol><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 核心功能特性 </h2><ul class="list-disc list-inside space-y-2 text-muted-foreground mb-6"><li><strong>双向转换</strong>: 支持 YAML 到 JSON 和 JSON 到 YAML 的双向转换</li><li><strong>语法验证</strong>: 自动检测输入数据的语法错误并提供详细提示</li><li><strong>格式美化</strong>: 转换后的数据自动格式化，提高可读性</li><li><strong>保留注释</strong>: YAML 到 JSON 转换时尽力保留注释信息</li><li><strong>本地处理</strong>: 所有转换都在浏览器本地完成，确保数据安全</li><li><strong>批量转换</strong>: 支持大型文件的快速转换</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> YAML vs JSON </h2><div class="space-y-4 mb-6"><div><h3 class="text-lg font-semibold text-foreground mb-2">YAML 优势：</h3><ul class="list-disc list-inside text-muted-foreground ml-4"><li>更易读，使用缩进代替括号</li><li>支持注释（# 注释）</li><li>支持多行字符串、日期等高级类型</li><li>更适合配置文件</li></ul></div><div><h3 class="text-lg font-semibold text-foreground mb-2">JSON 优势：</h3><ul class="list-disc list-inside text-muted-foreground ml-4"><li>解析速度更快</li><li>更严格的语法规范</li><li>原生支持于大多数编程语言</li><li>更适合 API 数据交换</li></ul></div></div><h2 class="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center"><span class="text-primary mr-2">#</span> 常见问题 (FAQ) </h2><div class="space-y-4"><div><h3 class="text-lg font-semibold text-foreground">YAML 转换为 JSON 会丢失什么？</h3><p class="text-muted-foreground mt-1"> YAML 转换为 JSON 时可能会丢失：注释、多行字符串的精确格式、日期类型等。 这些是 JSON 格式不支持的特性。如果需要保留这些信息，建议继续使用 YAML 格式。 </p></div><div><h3 class="text-lg font-semibold text-foreground">为什么选择 YAML 而不是 JSON？</h3><p class="text-muted-foreground mt-1"> YAML 更适合人类编辑和阅读，特别是配置文件。它支持注释让配置更易理解， 缩进结构让层级关系一目了然。而 JSON 更适合机器处理和网络传输。 </p></div><div><h3 class="text-lg font-semibold text-foreground">YAML 的缩进有什么要求？</h3><p class="text-muted-foreground mt-1"> YAML 使用空格进行缩进，不能使用 Tab。建议使用 2 个空格作为标准缩进。 同一级别的元素必须保持相同的缩进量，缩进错误会导致解析失败。 </p></div></div>',11)])],512),[[se,L.value]])]),t("section",Ue,[s[10]||(s[10]=t("h2",{class:"text-2xl font-bold text-foreground mb-4"},"您可能还需要...",-1)),t("div",We,[(x(!0),_(re,null,le($.value,o=>(x(),k(r,{key:o.id,to:`/tools/${o.id}/`,class:"block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"},{default:ie(()=>[t("div",qe,[(x(),k(ae(R[o.icon]),{class:"w-5 h-5 text-primary"})),t("span",Ge,M(o.name),1)]),t("p",Ie,M(o.description),1)]),_:2},1032,["to"]))),128))])])])}}};export{vt as default};
