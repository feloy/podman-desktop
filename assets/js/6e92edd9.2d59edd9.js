"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63652],{61422:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=s(24246),i=s(71670);const t={},d="Interface: Configuration",c={id:"interfaces/Configuration",title:"Interface: Configuration",description:"Indexable",source:"@site/api/interfaces/Configuration.md",sourceDirName:"interfaces",slug:"/interfaces/Configuration",permalink:"/api/interfaces/Configuration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Interface: Command",permalink:"/api/interfaces/Command"},next:{title:"Interface: ConfigurationChangeEvent",permalink:"/api/interfaces/ConfigurationChangeEvent"}},o={},a=[{value:"Indexable",id:"indexable",level:2},{value:"Methods",id:"methods",level:2},{value:"get()",id:"get",level:3},{value:"get(section)",id:"getsection",level:4},{value:"Type parameters",id:"type-parameters",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Source",id:"source",level:5},{value:"get(section, defaultValue)",id:"getsection-defaultvalue",level:4},{value:"Type parameters",id:"type-parameters-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Source",id:"source-1",level:5},{value:"has()",id:"has",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-2",level:4},{value:"update()",id:"update",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Source",id:"source-3",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"interface-configuration",children:"Interface: Configuration"}),"\n",(0,r.jsx)(n.h2,{id:"indexable",children:"Indexable"}),"\n",(0,r.jsxs)(n.p,{children:["[",(0,r.jsx)(n.code,{children:"key"}),": ",(0,r.jsx)(n.code,{children:"string"}),"]: ",(0,r.jsx)(n.code,{children:"any"})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"get",children:"get()"}),"\n",(0,r.jsx)(n.h4,{id:"getsection",children:"get(section)"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"get"}),"<",(0,r.jsx)(n.code,{children:"T"}),">(",(0,r.jsx)(n.code,{children:"section"}),"): ",(0,r.jsx)(n.code,{children:"undefined"})," | ",(0,r.jsx)(n.code,{children:"T"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return a value from this configuration."}),"\n",(0,r.jsx)(n.h5,{id:"type-parameters",children:"Type parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"T"})]}),"\n",(0,r.jsx)(n.h5,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"section"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.p,{children:["Configuration name, supports ",(0,r.jsx)(n.em,{children:"dotted"})," names."]}),"\n",(0,r.jsx)(n.h5,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"undefined"})," | ",(0,r.jsx)(n.code,{children:"T"})]}),"\n",(0,r.jsxs)(n.p,{children:["The value ",(0,r.jsx)(n.code,{children:"section"})," denotes or ",(0,r.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,r.jsx)(n.h5,{id:"source",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L637",children:"packages/extension-api/src/extension-api.d.ts:637"})}),"\n",(0,r.jsx)(n.h4,{id:"getsection-defaultvalue",children:"get(section, defaultValue)"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"get"}),"<",(0,r.jsx)(n.code,{children:"T"}),">(",(0,r.jsx)(n.code,{children:"section"}),", ",(0,r.jsx)(n.code,{children:"defaultValue"}),"): ",(0,r.jsx)(n.code,{children:"T"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return a value from this configuration."}),"\n",(0,r.jsx)(n.h5,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"T"})]}),"\n",(0,r.jsx)(n.h5,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"section"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.p,{children:["Configuration name, supports ",(0,r.jsx)(n.em,{children:"dotted"})," names."]}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"defaultValue"}),": ",(0,r.jsx)(n.code,{children:"T"})]}),"\n",(0,r.jsxs)(n.p,{children:["A value should be returned when no value could be found, is ",(0,r.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,r.jsx)(n.h5,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"T"})}),"\n",(0,r.jsxs)(n.p,{children:["The value ",(0,r.jsx)(n.code,{children:"section"})," denotes or the default."]}),"\n",(0,r.jsx)(n.h5,{id:"source-1",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L646",children:"packages/extension-api/src/extension-api.d.ts:646"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"has",children:"has()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"has"}),"(",(0,r.jsx)(n.code,{children:"section"}),"): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Check if this configuration has a certain value."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"section"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.p,{children:["Configuration name, supports ",(0,r.jsx)(n.em,{children:"dotted"})," names."]}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"true"})," if the section doesn't resolve to ",(0,r.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L654",children:"packages/extension-api/src/extension-api.d.ts:654"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"update",children:"update()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"update"}),"(",(0,r.jsx)(n.code,{children:"section"}),", ",(0,r.jsx)(n.code,{children:"value"}),"): ",(0,r.jsx)(n.code,{children:"Promise"}),"< ",(0,r.jsx)(n.code,{children:"void"})," >"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Update a configuration value. The updated configuration values are persisted."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"section"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"value"}),": ",(0,r.jsx)(n.code,{children:"any"})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"< ",(0,r.jsx)(n.code,{children:"void"})," >"]}),"\n",(0,r.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L660",children:"packages/extension-api/src/extension-api.d.ts:660"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>d});var r=s(27378);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);