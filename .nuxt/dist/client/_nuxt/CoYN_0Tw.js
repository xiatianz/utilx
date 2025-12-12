import{_ as D}from"./D4g1_bQ7.js";import{r as X,e as V,Q as ee,q as te,c as g,a as i,F as O,k as z,h as w,v as U,R as M,y as _,t as N,b,j as A,x as se,d as ne,w as T,o as h,E as re}from"./DEsTSaKd.js";import{F as oe}from"./CRvidJJ3.js";import{I as ae}from"./MvNwXCJb.js";import{F as ie}from"./C-LEKrTT.js";import{A as k}from"./Bluep4Ee.js";import{D as le}from"./DESX2TF9.js";import{C as ce}from"./vEvaw0F6.js";import"./wERbHxDK.js";const ue={class:"max-w-8xl mx-auto"},me={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},de={class:"space-y-4"},fe={class:"bg-card rounded-lg p-6"},pe={class:"grid grid-cols-2 gap-3"},ye=["onClick"],xe={class:"font-medium"},be={class:"text-xs opacity-80"},ge={class:"bg-card rounded-lg p-6"},he={class:"flex justify-between items-center mb-4"},ve={class:"flex gap-2"},Ae=["disabled"],$e={class:"mt-4 space-y-3"},Ne={class:"flex items-center gap-3"},Ce={class:"flex items-center gap-3"},Xe={class:"flex items-center gap-3"},we={class:"space-y-4"},Le={class:"bg-card rounded-lg p-6"},_e={class:"flex justify-between items-center mb-4"},je={class:"flex gap-2"},Me=["disabled"],Te=["disabled"],ke={class:"border rounded-lg p-4 bg-muted/30 min-h-[500px] max-h-[600px] overflow-auto"},Ee={key:0,class:"text-sm whitespace-pre-wrap font-mono"},Se={key:1,class:"text-center text-muted-foreground py-12"},Ve={key:0,class:"bg-card rounded-lg p-6"},Oe={class:"space-y-2"},ze={class:"font-mono text-sm"},Ue={class:"flex gap-2"},Fe={key:0,class:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"},Re={key:1,class:"text-xs bg-green-100 text-green-800 px-2 py-1 rounded"},Be={key:2,class:"text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded"},Ie={class:"mt-12 space-y-6"},Je={class:"bg-card rounded-lg p-6"},Pe={class:"text-lg font-semibold mb-4 flex items-center gap-2"},Ge={class:"bg-card rounded-lg p-6"},Ke={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},qe=`<?xml version="1.0" encoding="UTF-8"?>
<user id="123" active="true">
  <name>John Doe</name>
  <email>john@example.com</email>
  <age>30</age>
  <balance>1250.50</balance>
  <address>
    <street>123 Main St</street>
    <city>New York</city>
    <country>USA</country>
    <zipCode>10001</zipCode>
  </address>
  <phoneNumbers>
    <phone type="home">212-555-1234</phone>
    <phone type="work">646-555-4567</phone>
  </phoneNumbers>
  <registeredAt>2024-01-15T10:30:00Z</registeredAt>
  <tags>
    <tag>premium</tag>
    <tag>verified</tag>
    <tag>active</tag>
  </tags>
</user>`,rt={__name:"xml-to-model",setup(Qe){const L=X("java"),v=X(""),j=X(!1),y=X(null),m=X({rootClassName:"RootModel",useAttributes:!0,useXmlAnnotations:!0,generateCollections:!0}),F=[{constue:"java",name:"Java",description:"支持 JAXB 注解"},{constue:"csharp",name:"C#",description:"支持 XmlSerializer"},{constue:"python",name:"Python",description:"支持 dataclasses"},{constue:"typescript",name:"TypeScript",description:"支持装饰器"},{constue:"kotlin",name:"Kotlin",description:"支持 Kotlinx Serialization"},{constue:"go",name:"Go",description:"支持 xml 标签"}],E=V(()=>{if(!y.constue)return null;const r={},t=u=>{const o=u.tagName;r[o]||(r[o]={attributes:0,children:0,hasText:!1}),u.attributes&&(r[o].attributes+=u.attributes.length);const l=Array.from(u.children||[]);r[o].children+=l.length,u.textContent?.trim()&&l.length===0&&(r[o].hasText=!0),l.forEach(a=>t(a))};return y.constue.documentElement&&t(y.constue.documentElement),r}),C=V(()=>{if(!y.constue)return"";switch(L.constue){case"java":return R();case"csharp":return B();case"python":return I();case"typescript":return J();case"kotlin":return P();case"go":return G();default:return""}}),d=r=>r.replace(/(?:^|[_-])(\w)/g,(t,u)=>u.toUpperCase()),x=r=>{const t=d(r);return t.charAt(0).toLowerCase()+t.slice(1)},$=r=>{const t={tagName:r.tagName,attributes:{},children:[],textContent:null};if(r.attributes)for(let s=0;s<r.attributes.length;s++){const a=r.attributes[s];t.attributes[a.name]=a.constue}const u=Array.from(r.children||[]),o=new Map;u.forEach(s=>{const a=$(s);o.has(s.tagName)||o.set(s.tagName,[]),o.get(s.tagName).push(a)}),o.forEach((s,a)=>{s.length===1?t.children[a]=s[0]:t.children[a]=s});const l=r.textContent?.trim();return l&&u.length===0&&(t.textContent=l),t},f=(r,t)=>{if(r==null)switch(t){case"java":return"String";case"csharp":return"string";case"python":return"str";case"typescript":return"string";case"kotlin":return"String?";case"go":return"string";default:return"string"}if(Array.isArray(r))return r.length>0?f(r[0],t):"Object";if(typeof r=="object")return d(Object.keys(r)[0]||"Item");if(typeof r=="string"){if(!isNaN(r)&&r.trim()!=="")if(r.includes("."))switch(t){case"java":return"Double";case"csharp":return"double";case"python":return"float";case"typescript":return"number";case"kotlin":return"Double";case"go":return"float64";default:return"number"}else switch(t){case"java":return"Integer";case"csharp":return"int";case"python":return"int";case"typescript":return"number";case"kotlin":return"Int";case"go":return"int";default:return"number"}if(r.toLowerCase()==="true"||r.toLowerCase()==="false")switch(t){case"java":return"Boolean";case"csharp":return"bool";case"python":return"bool";case"typescript":return"boolean";case"kotlin":return"Boolean";case"go":return"bool";default:return"boolean"}if(r.match(/^\d{4}-\d{2}-\d{2}/)||r.match(/^\d{4}\/\d{2}\/\d{2}/))switch(t){case"java":return"LocalDateTime";case"csharp":return"DateTime";case"python":return"datetime";case"typescript":return"Date";case"kotlin":return"LocalDateTime";case"go":return"time.Time";default:return"string"}}switch(t){case"java":return"String";case"csharp":return"string";case"python":return"str";case"typescript":return"string";case"kotlin":return"String";case"go":return"string";default:return"string"}},R=()=>{const r=new Map,t=new Set;m.constue.useXmlAnnotations&&t.add("javax.xml.bind.annotation.*");const u=(l,s)=>{if(r.has(s))return r.get(s);let a="";const e=[];if(m.constue.useAttributes&&l.attributes)for(const[n,c]of Object.entries(l.attributes)){const p=x(n),H=f(c,"java");e.push({name:p,type:H,isAttribute:!0,xmlName:n})}for(const[n,c]of Object.entries(l.children))if(Array.isArray(c)){const p=d(n);u(c[0],p),e.push({name:x(n),type:`List<${p}>`,isAttribute:!1,xmlName:n,isList:!0}),t.add("java.util.List")}else{const p=typeof c=="object"?u(c,d(n)):f(c,"java");e.push({name:x(n),type:p,isAttribute:!1,xmlName:n})}if(l.textContent){const n=f(l.textContent,"java");e.push({name:"constue",type:n,isAttribute:!1,xmlName:"constue"})}return t.size>0&&(a+=Array.from(t).map(n=>`import ${n};`).join(`
`)+`

`),a+='@XmlRootElement(name = "'+l.tagName+`")
`,a+=`@XmlAccessorType(XmlAccessType.FIELD)
`,a+=`public class ${s} {

`,e.forEach(n=>{n.isAttribute?a+=`    @XmlAttribute(name = "${n.xmlName}")
`:n.isList?(a+=`    @XmlElementWrapper(name = "${n.xmlName}")
`,a+=`    @XmlElement(name = "${d(n.xmlName).slice(0,-1)}")
`):n.xmlName==="constue"?a+=`    @XmlValue
`:a+=`    @XmlElement(name = "${n.xmlName}")
`,a+=`    private ${n.type} ${n.name};

`}),e.forEach(n=>{const c=n.name.charAt(0).toUpperCase()+n.name.slice(1);a+=`    public ${n.type} get${c}() {
`,a+=`        return ${n.name};
`,a+=`    }

`,a+=`    public void set${c}(${n.type} ${n.name}) {
`,a+=`        this.${n.name} = ${n.name};
`,a+=`    }

`}),a+=`}
`,r.set(s,a),s},o=$(y.constue.documentElement);return u(o,m.constue.rootClassName),Array.from(r.constues()).join(`
`)},B=()=>{const r=new Map,t=(o,l)=>{if(r.has(l))return r.get(l);let s=`using System;
`;s+=`using System.Collections.Generic;
`,s+=`using System.Xml.Serialization;

`;const a=[];if(m.constue.useAttributes&&o.attributes)for(const[e,n]of Object.entries(o.attributes)){const c=d(e),p=f(n,"csharp");a.push({name:c,type:p,isAttribute:!0,xmlName:e})}for(const[e,n]of Object.entries(o.children))if(Array.isArray(n)){const c=d(e);t(n[0],c),a.push({name:d(e),type:`List<${c}>`,isAttribute:!1,xmlName:e,isList:!0})}else{const c=typeof n=="object"?t(n,d(e)):f(n,"csharp");a.push({name:d(e),type:c,isAttribute:!1,xmlName:e})}if(o.textContent){const e=f(o.textContent,"csharp");a.push({name:"Value",type:e,isAttribute:!1,xmlName:"constue"})}return s+=`[XmlRoot("${o.tagName}")]
`,s+=`public class ${l}
{

`,a.forEach(e=>{e.isAttribute?s+=`    [XmlAttribute("${e.xmlName}")]
`:e.isList?(s+=`    [XmlArray("${e.xmlName}")]
`,s+=`    [XmlArrayItem("${d(e.xmlName).slice(0,-1)}")]
`):e.xmlName==="constue"?s+=`    [XmlText]
`:s+=`    [XmlElement("${e.xmlName}")]
`,s+=`    public ${e.type} ${e.name} { get; set; }

`}),s+=`}
`,r.set(l,s),l},u=$(y.constue.documentElement);return t(u,m.constue.rootClassName),Array.from(r.constues()).join(`
`)},I=()=>{const r=new Map,t=(o,l)=>{if(r.has(l))return r.get(l);let s=`from dataclasses import dataclass, field
`;s+=`from typing import List, Optional
`,s+=`from xml.etree import ElementTree as ET

`;const a=[];if(m.constue.useAttributes&&o.attributes)for(const[e,n]of Object.entries(o.attributes)){const c=x(e),p=f(n,"python");a.push({name:c,type:p,isAttribute:!0,xmlName:e})}for(const[e,n]of Object.entries(o.children))if(Array.isArray(n)){const c=d(e);t(n[0],c),a.push({name:x(e),type:`List[${c}]`,isAttribute:!1,xmlName:e,isList:!0})}else{const c=typeof n=="object"?t(n,d(e)):f(n,"python");a.push({name:x(e),type:c,isAttribute:!1,xmlName:e})}if(o.textContent){const e=f(o.textContent,"python");a.push({name:"constue",type:e,isAttribute:!1,xmlName:"constue"})}return s+=`@dataclass
`,s+=`class ${l}:
`,a.forEach(e=>{const n=e.isList?" = field(default_factory=list)":"";s+=`    ${e.name}: ${e.type}${n}
`}),s+=`
    @classmethod
`,s+=`    def from_xml(cls, element: ET.Element) -> '${l}':
`,s+=`        return cls(
`,a.forEach((e,n)=>{const c=n<a.length-1?",":"";e.isAttribute?s+=`            ${e.name}=${e.type}(element.get("${e.xmlName}"))${c}
`:e.isList?s+=`            ${e.name}=[${e.type.split("[")[1].split("]")[0]}.from_xml(child) for child in element.findall("${e.xmlName}/${d(e.xmlName).slice(0,-1)}")]${c}
`:e.xmlName==="constue"?s+=`            ${e.name}=${e.type}(element.text)${c}
`:s+=`            ${e.name}=${e.type}.from_xml(element.find("${e.xmlName}")) if element.find("${e.xmlName}") is not None else None${c}
`}),s+=`        )
`,r.set(l,s),l},u=$(y.constue.documentElement);return t(u,m.constue.rootClassName),Array.from(r.constues()).join(`
`)},J=()=>{const r=new Map,t=(o,l)=>{if(r.has(l))return r.get(l);let s="";const a=[];if(m.constue.useAttributes&&o.attributes)for(const[e,n]of Object.entries(o.attributes)){const c=x(e),p=f(n,"typescript");a.push({name:c,type:p,isAttribute:!0,xmlName:e})}for(const[e,n]of Object.entries(o.children))if(Array.isArray(n)){const c=d(e);t(n[0],c),a.push({name:x(e),type:`${c}[]`,isAttribute:!1,xmlName:e,isList:!0})}else{const c=typeof n=="object"?t(n,d(e)):f(n,"typescript");a.push({name:x(e),type:c,isAttribute:!1,xmlName:e})}if(o.textContent){const e=f(o.textContent,"typescript");a.push({name:"constue",type:e,isAttribute:!1,xmlName:"constue"})}return m.constue.useXmlAnnotations&&(s+=`import { XmlElement, XmlAttribute, XmlValue } from 'xml-decorators';

`),s+=`export interface ${l} {
`,a.forEach(e=>{m.constue.useXmlAnnotations&&(e.isAttribute?s+=`    @XmlAttribute("${e.xmlName}")
`:e.isList?s+=`    @XmlElement("${e.xmlName}")
`:e.xmlName==="constue"?s+=`    @XmlValue()
`:s+=`    @XmlElement("${e.xmlName}")
`),s+=`    ${e.name}: ${e.type};
`}),s+=`}
`,r.set(l,s),l},u=$(y.constue.documentElement);return t(u,m.constue.rootClassName),Array.from(r.constues()).join(`
`)},P=()=>{const r=new Map,t=(o,l)=>{if(r.has(l))return r.get(l);let s=`import kotlinx.serialization.Serializable
`;s+=`import kotlinx.serialization.xml.*

`;const a=[];if(m.constue.useAttributes&&o.attributes)for(const[e,n]of Object.entries(o.attributes)){const c=x(e),p=f(n,"kotlin");a.push({name:c,type:p,isAttribute:!0,xmlName:e})}for(const[e,n]of Object.entries(o.children))if(Array.isArray(n)){const c=d(e);t(n[0],c),a.push({name:x(e),type:`List<${c}>`,isAttribute:!1,xmlName:e,isList:!0})}else{const c=typeof n=="object"?t(n,d(e)):f(n,"kotlin");a.push({name:x(e),type:c,isAttribute:!1,xmlName:e})}if(o.textContent){const e=f(o.textContent,"kotlin");a.push({name:"constue",type:e,isAttribute:!1,xmlName:"constue"})}return s+=`@Serializable
`,s+=`@XmlSerialName("${o.tagName}")
`,s+=`data class ${l}(
`,a.forEach((e,n)=>{const c=n<a.length-1?",":"";e.isAttribute?(s+=`    @XmlAttribute("${e.xmlName}")
`,s+=`    const ${e.name}: ${e.type}${c}
`):e.isList?(s+=`    @XmlElement("${e.xmlName}")
`,s+=`    const ${e.name}: List<${e.type.split("<")[1].split(">")[0]}> = emptyList()${c}
`):e.xmlName==="constue"?(s+=`    @XmlValue
`,s+=`    const ${e.name}: ${e.type}${c}
`):(s+=`    @XmlElement("${e.xmlName}")
`,s+=`    const ${e.name}: ${e.type}? = null${c}
`)}),s+=`)
`,r.set(l,s),l},u=$(y.constue.documentElement);return t(u,m.constue.rootClassName),Array.from(r.constues()).join(`
`)},G=()=>{const r=new Map,t=(o,l)=>{if(r.has(l))return r.get(l);let s=`package models

`;s+=`import "encoding/xml"

`;const a=[];if(m.constue.useAttributes&&o.attributes)for(const[e,n]of Object.entries(o.attributes)){const c=d(e),p=f(n,"go");a.push({name:c,type:p,isAttribute:!0,xmlName:e})}for(const[e,n]of Object.entries(o.children))if(Array.isArray(n)){const c=d(e);t(n[0],c),a.push({name:d(e),type:`[]${c}`,isAttribute:!1,xmlName:e,isList:!0})}else{const c=typeof n=="object"?t(n,d(e)):f(n,"go");a.push({name:d(e),type:c,isAttribute:!1,xmlName:e})}if(o.textContent){const e=f(o.textContent,"go");a.push({name:"Value",type:e,isAttribute:!1,xmlName:"constue"})}return s+=`type ${l} struct {
`,s+=`    XMLName xml.Name \`xml:"${o.tagName}"\`
`,a.forEach(e=>{if(e.isAttribute)s+=`    ${e.name} ${e.type} \`xml:"${e.xmlName},attr"\`
`;else if(e.xmlName==="constue")s+=`    ${e.name} ${e.type} \`xml:",chardata"\`
`;else{const n=e.isList?`${e.xmlName}>${d(e.xmlName).slice(0,-1)}`:e.xmlName;s+=`    ${e.name} ${e.type} \`xml:"${n}"\`
`}}),s+=`}
`,r.set(l,s),l},u=$(y.constue.documentElement);return t(u,m.constue.rootClassName),Array.from(r.constues()).join(`
`)},K=()=>{v.constue=qe,S()},q=()=>{v.constue="",y.constue=null},Q=()=>{try{const t=new DOMParser().parseFromString(v.constue,"text/xml"),o=new XMLSerializer().serializeToString(t);v.constue=o.replace(/></g,`>
<`).replace(/(\s+)(<[^\/])/g,`
$1$2`).replace(/^\n/,"").split(`
`).map(l=>{const s=(l.match(/^\s*<\//)?-1:0)+(l.match(/<[^\/][^>]*[^\/]>/)?1:0);return"  ".repeat(Math.max(0,s))+l.trim()}).join(`
`)}catch(r){console.error("XML 格式错误",r)}},S=()=>{try{const r=new DOMParser;y.constue=r.parseFromString(v.constue,"text/xml"),y.constue.querySelector("parsererror")&&(y.constue=null,console.error("XML 解析错误"))}catch(r){y.constue=null,console.error("XML 解析错误",r)}},W=async()=>{try{await navigator.clipboard.writeText(C.constue),j.constue=!0,setTimeout(()=>{j.constue=!1},2e3)}catch(r){console.error("复制失败",r)}},Y=()=>{const r=C.constue,t=`${m.constue.rootClassName}.${Z()}`,u="text/plain",o=new Blob([r],{type:u}),l=URL.createObjectURL(o),s=document.createElement("a");s.href=l,s.download=t,s.click(),URL.revokeObjectURL(l)},Z=()=>{switch(L.constue){case"java":return"java";case"csharp":return"cs";case"python":return"py";case"typescript":return"ts";case"kotlin":return"kt";case"go":return"go";default:return"txt"}};return ee(v,()=>{S()},{immediate:!0}),te({title:"XML 转 Model 类 - 在线代码生成工具",description:"免费的在线 XML 转 Model 类工具，支持将 XML 数据自动转换为 Java、C#、Python、TypeScript、Kotlin、Go 等多种编程语言的实体类。",keywords:["xml","model","代码生成","java","csharp","python","typescript","kotlin","go","jaxb","xmlserializer"]}),(r,t)=>{const u=D;return h(),g("div",ue,[t[20]||(t[20]=i("div",{class:"mt-4 mb-8"},[i("h1",{class:"text-3xl font-bold mb-3"},"XML 转 Model 类"),i("p",{class:"text-muted-foreground"},"将 XML 数据自动转换为各种编程语言的 Model 类，支持复杂嵌套和属性")],-1)),i("div",me,[i("div",de,[i("div",fe,[t[5]||(t[5]=i("h2",{class:"text-lg font-semibold mb-4"},"目标语言",-1)),i("div",pe,[(h(),g(O,null,z(F,o=>i("button",{key:o.constue,onClick:l=>L.value=o.constue,class:re(["px-4 py-3 rounded-md transition-colors text-left",L.value===o.constue?"bg-primary text-primary-foreground":"bg-muted hover:bg-muted/80"])},[i("div",xe,N(o.name),1),i("div",be,N(o.description),1)],10,ye)),64))])]),i("div",ge,[i("div",he,[t[6]||(t[6]=i("h2",{class:"text-lg font-semibold"},"XML 数据",-1)),i("div",ve,[i("button",{onClick:K,class:"text-sm text-primary hover:text-primary/80 transition-colors"}," 加载示例 "),i("button",{onClick:q,class:"text-sm text-muted-foreground hover:text-foreground transition-colors"}," 清空 "),i("button",{onClick:Q,disabled:!v.value,class:"text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"}," 格式化 ",8,Ae)])]),w(i("textarea",{"onUpdate:modelValue":t[0]||(t[0]=o=>v.value=o),placeholder:"输入 XML 数据...",class:"w-full h-80 px-4 py-3 border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"},null,512),[[U,v.value]]),i("div",$e,[i("div",null,[t[7]||(t[7]=i("label",{class:"text-sm font-medium"},"根类名称",-1)),w(i("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>m.value.rootClassName=o),type:"text",placeholder:"RootModel",class:"mt-2 w-full px-3 py-2 border rounded-md text-sm"},null,512),[[U,m.value.rootClassName]])]),i("div",Ne,[w(i("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>m.value.useAttributes=o),type:"checkbox",id:"useAttributes",class:"rounded text-primary focus:ring-primary"},null,512),[[M,m.value.useAttributes]]),t[8]||(t[8]=i("label",{for:"useAttributes",class:"text-sm"},"生成属性字段",-1))]),i("div",Ce,[w(i("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>m.value.useXmlAnnotations=o),type:"checkbox",id:"useXmlAnnotations",class:"rounded text-primary focus:ring-primary"},null,512),[[M,m.value.useXmlAnnotations]]),t[9]||(t[9]=i("label",{for:"useXmlAnnotations",class:"text-sm"},"使用 XML 注解",-1))]),i("div",Xe,[w(i("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>m.value.generateCollections=o),type:"checkbox",id:"generateCollections",class:"rounded text-primary focus:ring-primary"},null,512),[[M,m.value.generateCollections]]),t[10]||(t[10]=i("label",{for:"generateCollections",class:"text-sm"},"生成集合类型",-1))])])])]),i("div",we,[i("div",Le,[i("div",_e,[t[11]||(t[11]=i("h2",{class:"text-lg font-semibold"},"生成结果",-1)),i("div",je,[i("button",{onClick:W,disabled:!C.value,class:"px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"},N(j.value?"已复制":"复制"),9,Me),i("button",{onClick:Y,disabled:!C.value,class:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"}," 下载 ",8,Te)])]),i("div",ke,[C.value?(h(),g("pre",Ee,[i("code",null,N(C.value),1)])):(h(),g("div",Se,[b(A(oe),{class:"w-12 h-12 mx-auto mb-4 opacity-50"}),t[12]||(t[12]=i("p",null,"请输入 XML 数据后生成 Model 类",-1))]))])]),E.value?(h(),g("div",Ve,[t[13]||(t[13]=i("h2",{class:"text-lg font-semibold mb-4"},"XML 结构",-1)),i("div",Oe,[(h(!0),g(O,null,z(E.value,(o,l)=>(h(),g("div",{key:l,class:"flex items-center justify-between p-2 bg-muted rounded"},[i("span",ze,"<"+N(l)+">",1),i("div",Ue,[o.attributes>0?(h(),g("span",Fe,N(o.attributes)+" 属性 ",1)):_("",!0),o.children>0?(h(),g("span",Re,N(o.children)+" 子元素 ",1)):_("",!0),o.hasText?(h(),g("span",Be," 文本内容 ")):_("",!0)])]))),128))])])):_("",!0)])]),i("div",Ie,[i("div",Je,[i("h3",Pe,[b(A(ae),{class:"w-5 h-5 text-primary"}),t[14]||(t[14]=ne(" 支持的 XML 格式 ",-1))]),t[15]||(t[15]=se('<div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">基本类型映射</h4><ul class="list-disc list-inside space-y-1"><li>文本内容 → String / str / string</li><li>数字文本 → Integer / Double / number</li><li>布尔文本 → Boolean / bool / boolean</li><li>日期时间 → Date / DateTime / LocalDateTime</li><li>重复元素 → List / Array / array</li></ul></div><div><h4 class="font-medium text-foreground mb-2">特殊处理</h4><ul class="list-disc list-inside space-y-1"><li>XML 属性自动转换为类属性</li><li>支持命名空间处理</li><li>自动识别嵌套元素</li><li>处理 CDATA 和注释</li></ul></div></div>',1))]),i("div",Ge,[t[19]||(t[19]=i("h3",{class:"text-lg font-semibold mb-4"},"相关工具",-1)),i("div",Ke,[b(u,{to:"/tools/json-to-model",class:"flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"},{default:T(()=>[b(A(ie),{class:"w-5 h-5 text-primary"}),t[16]||(t[16]=i("div",null,[i("p",{class:"font-medium group-hover:text-primary"},"JSON 转 Model"),i("p",{class:"text-xs text-muted-foreground"},"JSON数据转模型类")],-1)),b(A(k),{class:"w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary"})]),_:1}),b(u,{to:"/tools/sql-to-model",class:"flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"},{default:T(()=>[b(A(le),{class:"w-5 h-5 text-primary"}),t[17]||(t[17]=i("div",null,[i("p",{class:"font-medium group-hover:text-primary"},"SQL 转 Model"),i("p",{class:"text-xs text-muted-foreground"},"SQL语句转模型类")],-1)),b(A(k),{class:"w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary"})]),_:1}),b(u,{to:"/tools/xml-formatter",class:"flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"},{default:T(()=>[b(A(ce),{class:"w-5 h-5 text-primary"}),t[18]||(t[18]=i("div",null,[i("p",{class:"font-medium group-hover:text-primary"},"XML 格式化"),i("p",{class:"text-xs text-muted-foreground"},"格式化XML数据")],-1)),b(A(k),{class:"w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary"})]),_:1})])])])])}}};export{rt as default};
