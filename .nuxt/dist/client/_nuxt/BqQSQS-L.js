import{_ as Y}from"./D4g1_bQ7.js";import{r as h,e as X,Q as z,q as W,c as m,a as s,F as I,k,h as T,v as Z,R as _,y as C,t as g,b as c,j as y,x as ee,d as te,w as E,o as p,E as se}from"./DEsTSaKd.js";import{C as ne}from"./vEvaw0F6.js";import{I as ae}from"./MvNwXCJb.js";import{F as oe}from"./CRvidJJ3.js";import{A as $}from"./Bluep4Ee.js";import{F as le}from"./C-LEKrTT.js";import{D as re}from"./DESX2TF9.js";import"./wERbHxDK.js";const ie={class:"max-w-8xl mx-auto"},ue={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},ce={class:"space-y-4"},de={class:"bg-card rounded-lg p-6"},me={class:"grid grid-cols-2 gap-3"},pe=["onClick"],fe={class:"font-medium"},ye={class:"text-xs opacity-80"},ge={class:"bg-card rounded-lg p-6"},ve={class:"mt-4 space-y-3"},be={class:"flex items-center gap-3"},xe={class:"flex items-center gap-3"},he={class:"flex items-center gap-3"},Te={class:"flex items-center gap-3"},Ae={class:"space-y-4"},Le={class:"bg-card rounded-lg p-6"},_e={class:"flex justify-between items-center mb-4"},Ce={class:"flex gap-2"},Ne=["disabled"],Ee=["disabled"],$e={class:"border rounded-lg p-4 bg-muted/30 min-h-[500px] max-h-[600px] overflow-auto"},Me={key:0,class:"text-sm whitespace-pre-wrap font-mono"},we={key:1,class:"text-center text-muted-foreground py-12"},Se={key:0,class:"bg-card rounded-lg p-6"},Ie={class:"overflow-auto"},ke={class:"w-full text-sm"},De={class:"py-2 font-mono"},Re={class:"py-2"},Ue={class:"py-2"},je={key:0,class:"text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded"},Oe={key:1,class:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"},Pe={key:2,class:"text-xs bg-green-100 text-green-800 px-2 py-1 rounded"},Ve={class:"py-2 font-mono text-xs"},Be={class:"mt-12 space-y-6"},Fe={class:"bg-card rounded-lg p-6"},Ge={class:"text-lg font-semibold mb-4 flex items-center gap-2"},qe={class:"bg-card rounded-lg p-6"},Qe={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},He=`CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  age INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  balance DECIMAL(10,2) DEFAULT 0.00,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`,nt={__name:"sql-to-model",setup(Ke){const A=h("java"),b=h(""),N=h(!1),o=h(null),i=h({useLombok:!0,useDataAnnotations:!0,generateConstructors:!1,generateGettersSetters:!1}),D=[{value:"java",name:"Java",description:"支持 JPA/Hibernate 注解"},{value:"python",name:"Python",description:"支持 SQLAlchemy/Django 模型"},{value:"csharp",name:"C#",description:"支持 Entity Framework"},{value:"typescript",name:"TypeScript",description:"支持 TypeORM/Prisma"},{value:"php",name:"PHP",description:"支持 Laravel/Eloquent"},{value:"go",name:"Go",description:"支持 GORM 标签"}],v=X(()=>{if(!o.value)return"";switch(A.value){case"java":return U();case"python":return j();case"csharp":return O();case"typescript":return P();case"php":return V();case"go":return B();default:return""}}),R=n=>{if(!n)return null;const e=n.match(/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?`?(\w+)`?\s*\(([\s\S]*)\)/i);if(!e)return null;const t=e[1],a=e[2],l=[],r=a.split(",").map(u=>u.trim());for(const u of r){if(!u||u.toLowerCase().includes("primary key")||u.toLowerCase().includes("unique key")||u.toLowerCase().includes("foreign key")||u.toLowerCase().includes("index"))continue;const M=u.match(/^`?(\w+)`?\s+(\w+(?:\(\d+(?:,\d+)?\))?)(?:\s+(.*))?$/);if(M){const[,K,J,d]=M,w={name:K,type:J.toUpperCase(),nullable:!d||!d.toLowerCase().includes("not null"),primaryKey:d&&d.toLowerCase().includes("primary key"),autoIncrement:d&&(d.toLowerCase().includes("auto_increment")||d.toLowerCase().includes("autoincrement")),unique:d&&d.toLowerCase().includes("unique"),defaultValue:null},S=d?.match(/default\s+(['"]?)([^'"]+)\1/i);S&&(w.defaultValue=S[2]),l.push(w)}}return{tableName:t,className:L(t),columns:l}},L=n=>n.split(/[_-]/).map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(""),x=n=>{const e=L(n);return e.charAt(0).toLowerCase()+e.slice(1)},f=(n,e)=>{const t=n.toLowerCase();switch(e){case"java":return t.includes("int")?t.includes("bigint")?"Long":"Integer":t.includes("varchar")||t.includes("char")||t.includes("text")?"String":t.includes("decimal")||t.includes("double")?"BigDecimal":t.includes("float")?"Double":t.includes("boolean")||t.includes("tinyint(1)")?"Boolean":t.includes("date")||t.includes("timestamp")?"LocalDateTime":"Object";case"python":return t.includes("int")?"int":t.includes("varchar")||t.includes("char")||t.includes("text")?"str":t.includes("decimal")||t.includes("double")||t.includes("float")?"float":t.includes("boolean")||t.includes("tinyint(1)")?"bool":t.includes("date")||t.includes("timestamp")?"datetime":"str";case"csharp":return t.includes("bigint")?"long":t.includes("int")?"int":t.includes("varchar")||t.includes("char")||t.includes("text")?"string":t.includes("decimal")?"decimal":t.includes("double")?"double":t.includes("float")?"float":t.includes("boolean")||t.includes("tinyint(1)")?"bool":t.includes("date")||t.includes("timestamp")?"DateTime":"object";case"typescript":return t.includes("int")||t.includes("bigint")||t.includes("decimal")||t.includes("double")||t.includes("float")?"number":t.includes("varchar")||t.includes("char")||t.includes("text")?"string":t.includes("boolean")||t.includes("tinyint(1)")?"boolean":t.includes("date")||t.includes("timestamp")?"Date":"any";case"php":return t.includes("int")||t.includes("bigint")?"int":t.includes("varchar")||t.includes("char")||t.includes("text")?"string":t.includes("decimal")||t.includes("double")||t.includes("float")?"float":t.includes("boolean")||t.includes("tinyint(1)")?"bool":t.includes("date")||t.includes("timestamp")?"string":"mixed";case"go":return t.includes("bigint")?"int64":t.includes("int")?"int":t.includes("varchar")||t.includes("char")||t.includes("text")?"string":t.includes("decimal")||t.includes("double")?"float64":t.includes("float")?"float32":t.includes("boolean")||t.includes("tinyint(1)")?"bool":t.includes("date")||t.includes("timestamp")?"time.Time":"interface{}";default:return"any"}},U=()=>{if(!o.value)return"";let n=new Set;i.value.useLombok&&(n.add("lombok.Data"),n.add("lombok.NoArgsConstructor"),n.add("lombok.AllArgsConstructor")),i.value.useDataAnnotations&&n.add("javax.persistence.*");let e="";n.size>0&&(e+=Array.from(n).map(a=>`import ${a};`).join(`
`)+`

`);const t=[];i.value.useDataAnnotations&&(t.push("@Entity"),t.push(`@Table(name = "${o.value.tableName}")`)),t.length>0&&(e+=t.join(`
`)+`
`),e+=`
`,i.value.useLombok&&(e+=`@Data
`,i.value.generateConstructors&&(e+=`@NoArgsConstructor
`,e+=`@AllArgsConstructor
`)),e+=`public class ${o.value.className} {
`;for(const a of o.value.columns){const l=f(a.type,"java"),r=x(a.name);i.value.useDataAnnotations&&(a.primaryKey&&(e+=`    @Id
`,a.autoIncrement&&(e+=`    @GeneratedValue(strategy = GenerationType.IDENTITY)
`)),e+=`    @Column(name = "${a.name}"${a.nullable?"":", nullable = false"})
`),e+=`    private ${l} ${r};

`}if(!i.value.useLombok&&(i.value.generateGettersSetters||i.value.generateConstructors)){if(i.value.generateGettersSetters)for(const a of o.value.columns){const l=f(a.type,"java"),r=x(a.name),u=r.charAt(0).toUpperCase()+r.slice(1);e+=`
    public ${l} get${u}() {
`,e+=`        return ${r};
`,e+=`    }
`,e+=`
    public void set${u}(${l} ${r}) {
`,e+=`        this.${r} = ${r};
`,e+=`    }
`}if(i.value.generateConstructors){const a=o.value.columns.map(r=>x(r.name)),l=o.value.columns.map(r=>f(r.type,"java"));e+=`
    public ${o.value.className}() {
`,e+=`    }
`,e+=`
    public ${o.value.className}(${l.join(", ")} ${a.join(", ")}) {
`;for(const r of o.value.columns){const u=x(r.name);e+=`        this.${u} = ${u};
`}e+=`    }
`}}return e+="}",e},j=()=>{if(!o.value)return"";let n=`from sqlalchemy import Column, Integer, String, Boolean, DateTime, Numeric
`;n+=`from sqlalchemy.ext.declarative import declarative_base

`,n+=`Base = declarative_base()

`,n+=`class ${o.value.className}(Base):
`,n+=`    __tablename__ = '${o.value.tableName}'

`;for(const e of o.value.columns){f(e.type,"python");let t="String";if(e.type.includes("int"))t=e.type.includes("bigint")?"BigInteger":"Integer";else if(e.type.includes("varchar")||e.type.includes("char")){const l=e.type.match(/\((\d+)\)/);t=`String(${l?l[1]:255})`}else e.type.includes("text")?t="Text":e.type.includes("decimal")||e.type.includes("double")?t="Numeric":e.type.includes("float")?t="Float":e.type.includes("boolean")||e.type.includes("tinyint(1)")?t="Boolean":(e.type.includes("date")||e.type.includes("timestamp"))&&(t="DateTime");const a=[];e.primaryKey&&a.push("primary_key=True"),e.autoIncrement&&a.push("autoincrement=True"),e.nullable||a.push("nullable=False"),e.defaultValue!==null&&a.push(`default=${e.defaultValue}`),n+=`    ${e.name} = Column(${t}${a.length?", "+a.join(", "):""})
`}return n+=`
    def __repr__(self):
`,n+=`        return f"<${o.value.className}(id={self.id})>"
`,n},O=()=>{if(!o.value)return"";let n=`using System;
`;n+=`using System.ComponentModel.DataAnnotations;
`,n+=`using System.ComponentModel.DataAnnotations.Schema;

`,n+=`public class ${o.value.className}
{
`;for(const e of o.value.columns){const t=f(e.type,"csharp"),a=L(e.name);e.primaryKey&&(n+=`    [Key]
`,e.autoIncrement&&(n+=`    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
`)),n+=`    [Column("${e.name}"])
`,n+=`    public ${t} ${a} { get; set; }

`}return n+="}",n},P=()=>{if(!o.value)return"";let n=`export interface ${o.value.className} {
`;for(const e of o.value.columns){const t=f(e.type,"typescript"),a=x(e.name),l=e.nullable?"?":"";n+=`    ${a}${l}: ${t};
`}return n+="}",n},V=()=>{if(!o.value)return"";let n=`<?php

`;n+=`namespace AppModels;

`,n+=`use IlluminateDatabaseEloquentModel;

`,n+=`class ${o.value.className} extends Model
{
`,n+=`    protected $table = '${o.value.tableName}';
`,n+=`    protected $fillable = [
`;const e=o.value.columns.filter(a=>!a.autoIncrement).map(a=>`        '${a.name}'`).join(`,
`);n+=e+`
    ];
`,n+=`
    protected $casts = [
`;const t=[];for(const a of o.value.columns){const l=f(a.type,"php");l!=="string"&&t.push(`        '${a.name}' => '${l}'`)}return t.length>0&&(n+=t.join(`,
`)+`
`),n+=`    ];
`,n+=`
    public $timestamps = false;
`,n+=`
}
`,n},B=()=>{if(!o.value)return"";let n=`package models

`;n+=`import "time"

`,n+=`type ${o.value.className} struct {
`;for(const e of o.value.columns){const t=f(e.type,"go"),a=L(e.name);let l=[];l.push(`json:"${e.name}"`),l.push(`gorm:"column:${e.name}`),e.primaryKey&&l.push("primaryKey"),e.autoIncrement&&l.push("autoIncrement"),e.nullable||l.push("not null"),e.defaultValue!==null&&l.push(`default:${e.defaultValue}`),l.push('"'),n+=`    ${a} ${t} \` ${l.join(" ")} \`
`}return n+=`}
`,n+=`
func (m *${o.value.className}) TableName() string {
`,n+=`    return "${o.value.tableName}"
`,n+=`}
`,n},F=()=>{b.value=He},G=()=>{b.value="",o.value=null},q=async()=>{try{await navigator.clipboard.writeText(v.value),N.value=!0,setTimeout(()=>{N.value=!1},2e3)}catch(n){console.error("复制失败",n)}},Q=()=>{const n=v.value;let e=`${o.value.className}.${H()}`;const t="text/plain",a=new Blob([n],{type:t}),l=URL.createObjectURL(a),r=document.createElement("a");r.href=l,r.download=e,r.click(),URL.revokeObjectURL(l)},H=()=>{switch(A.value){case"java":return"java";case"python":return"py";case"csharp":return"cs";case"typescript":return"ts";case"php":return"php";case"go":return"go";default:return"txt"}};return z(b,n=>{o.value=R(n)}),W({title:"SQL 转 Model 类 - 在线代码生成工具",description:"免费的在线 SQL 转 Model 类工具，支持将 CREATE TABLE 语句转换为 Java、Python、C#、TypeScript、PHP、Go 等多种编程语言的实体类。",keywords:["sql","model","代码生成","java","python","csharp","typescript","php","go","orm"]}),(n,e)=>{const t=Y;return p(),m("div",ie,[e[21]||(e[21]=s("div",{class:"mt-4 mb-8"},[s("h1",{class:"text-3xl font-bold mb-3"},"SQL 转 Model 类"),s("p",{class:"text-muted-foreground"},"将 SQL 语句转换为各种编程语言的 Model 类，支持主流开发框架")],-1)),s("div",ue,[s("div",ce,[s("div",de,[e[5]||(e[5]=s("h2",{class:"text-lg font-semibold mb-4"},"目标语言",-1)),s("div",me,[(p(),m(I,null,k(D,a=>s("button",{key:a.value,onClick:l=>A.value=a.value,class:se(["px-4 py-3 rounded-md transition-colors text-left",A.value===a.value?"bg-primary text-primary-foreground":"bg-muted hover:bg-muted/80"])},[s("div",fe,g(a.name),1),s("div",ye,g(a.description),1)],10,pe)),64))])]),s("div",ge,[s("div",{class:"flex justify-between items-center mb-4"},[e[6]||(e[6]=s("h2",{class:"text-lg font-semibold"},"SQL 语句",-1)),s("div",{class:"flex gap-2"},[s("button",{onClick:F,class:"text-sm text-primary hover:text-primary/80 transition-colors"}," 加载示例 "),s("button",{onClick:G,class:"text-sm text-muted-foreground hover:text-foreground transition-colors"}," 清空 ")])]),T(s("textarea",{"onUpdate:modelValue":e[0]||(e[0]=a=>b.value=a),placeholder:"输入 CREATE TABLE 语句...",class:"w-full h-64 px-4 py-3 border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"},null,512),[[Z,b.value]]),s("div",ve,[s("div",be,[T(s("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>i.value.useLombok=a),type:"checkbox",id:"useLombok",class:"rounded text-primary focus:ring-primary"},null,512),[[_,i.value.useLombok]]),e[7]||(e[7]=s("label",{for:"useLombok",class:"text-sm"},"使用 Lombok 注解 (Java)",-1))]),s("div",xe,[T(s("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>i.value.useDataAnnotations=a),type:"checkbox",id:"useDataAnnotations",class:"rounded text-primary focus:ring-primary"},null,512),[[_,i.value.useDataAnnotations]]),e[8]||(e[8]=s("label",{for:"useDataAnnotations",class:"text-sm"},"使用数据注解",-1))]),s("div",he,[T(s("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>i.value.generateConstructors=a),type:"checkbox",id:"generateConstructors",class:"rounded text-primary focus:ring-primary"},null,512),[[_,i.value.generateConstructors]]),e[9]||(e[9]=s("label",{for:"generateConstructors",class:"text-sm"},"生成构造函数",-1))]),s("div",Te,[T(s("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>i.value.generateGettersSetters=a),type:"checkbox",id:"generateGettersSetters",class:"rounded text-primary focus:ring-primary"},null,512),[[_,i.value.generateGettersSetters]]),e[10]||(e[10]=s("label",{for:"generateGettersSetters",class:"text-sm"},"生成 Getter/Setter",-1))])])])]),s("div",Ae,[s("div",Le,[s("div",_e,[e[11]||(e[11]=s("h2",{class:"text-lg font-semibold"},"生成结果",-1)),s("div",Ce,[s("button",{onClick:q,disabled:!v.value,class:"px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"},g(N.value?"已复制":"复制"),9,Ne),s("button",{onClick:Q,disabled:!v.value,class:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"}," 下载 ",8,Ee)])]),s("div",$e,[v.value?(p(),m("pre",Me,[s("code",null,g(v.value),1)])):(p(),m("div",we,[c(y(ne),{class:"w-12 h-12 mx-auto mb-4 opacity-50"}),e[12]||(e[12]=s("p",null,"请输入 SQL 语句后生成 Model 类",-1))]))])]),o.value?(p(),m("div",Se,[e[14]||(e[14]=s("h2",{class:"text-lg font-semibold mb-4"},"表结构",-1)),s("div",Ie,[s("table",ke,[e[13]||(e[13]=s("thead",null,[s("tr",{class:"border-b"},[s("th",{class:"text-left py-2"},"字段名"),s("th",{class:"text-left py-2"},"类型"),s("th",{class:"text-left py-2"},"约束"),s("th",{class:"text-left py-2"},"默认值")])],-1)),s("tbody",null,[(p(!0),m(I,null,k(o.value.columns,a=>(p(),m("tr",{key:a.name,class:"border-b"},[s("td",De,g(a.name),1),s("td",Re,g(a.type),1),s("td",Ue,[a.nullable?(p(),m("span",je,"NULL")):C("",!0),a.primaryKey?(p(),m("span",Oe,"PK")):C("",!0),a.autoIncrement?(p(),m("span",Pe,"AUTO")):C("",!0)]),s("td",Ve,g(a.defaultValue||"-"),1)]))),128))])])])])):C("",!0)])]),s("div",Be,[s("div",Fe,[s("h3",Ge,[c(y(ae),{class:"w-5 h-5 text-primary"}),e[15]||(e[15]=te(" 支持的 SQL 格式 ",-1))]),e[16]||(e[16]=ee('<div class="space-y-4 text-sm text-muted-foreground"><div><h4 class="font-medium text-foreground mb-2">标准 CREATE TABLE 语句</h4><code class="block bg-muted p-3 rounded-md font-mono text-sm"> CREATE TABLE users (<br>   id INT PRIMARY KEY AUTO_INCREMENT,<br>   username VARCHAR(50) NOT NULL UNIQUE,<br>   email VARCHAR(100) NOT NULL,<br>   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP<br> ); </code></div><div><h4 class="font-medium text-foreground mb-2">支持的数据类型映射</h4><ul class="list-disc list-inside space-y-1"><li>INT, INTEGER → int/Integer</li><li>BIGINT → long/Long</li><li>VARCHAR, CHAR, TEXT → String</li><li>DECIMAL, DOUBLE, FLOAT → double/Double</li><li>BOOLEAN, TINYINT(1) → boolean/Boolean</li><li>DATE, DATETIME, TIMESTAMP → Date/LocalDateTime</li></ul></div></div>',1))]),s("div",qe,[e[20]||(e[20]=s("h3",{class:"text-lg font-semibold mb-4"},"相关工具",-1)),s("div",Qe,[c(t,{to:"/tools/json-to-model",class:"flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"},{default:E(()=>[c(y(oe),{class:"w-5 h-5 text-primary"}),e[17]||(e[17]=s("div",null,[s("p",{class:"font-medium group-hover:text-primary"},"JSON 转 Model"),s("p",{class:"text-xs text-muted-foreground"},"JSON 数据转模型类")],-1)),c(y($),{class:"w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary"})]),_:1}),c(t,{to:"/tools/xml-to-model",class:"flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"},{default:E(()=>[c(y(le),{class:"w-5 h-5 text-primary"}),e[18]||(e[18]=s("div",null,[s("p",{class:"font-medium group-hover:text-primary"},"XML 转 Model"),s("p",{class:"text-xs text-muted-foreground"},"XML 数据转模型类")],-1)),c(y($),{class:"w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary"})]),_:1}),c(t,{to:"/tools/sql-formatter",class:"flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"},{default:E(()=>[c(y(re),{class:"w-5 h-5 text-primary"}),e[19]||(e[19]=s("div",null,[s("p",{class:"font-medium group-hover:text-primary"},"SQL 格式化"),s("p",{class:"text-xs text-muted-foreground"},"格式化 SQL 语句")],-1)),c(y($),{class:"w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary"})]),_:1})])])])])}}};export{nt as default};
