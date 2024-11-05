"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70540],{60416:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"interfaces/Extension","title":"Interface: Extension\\\\<T\\\\>","description":"Represents an extension.","source":"@site/api/interfaces/Extension.md","sourceDirName":"interfaces","slug":"/interfaces/Extension","permalink":"/api/interfaces/Extension","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"Event","permalink":"/api/interfaces/Event"},"next":{"title":"ExtensionContext","permalink":"/api/interfaces/ExtensionContext"}}');var t=i(62540),d=i(43023);const r={},c="Interface: Extension<T>",o={},a=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"exports",id:"exports",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"extensionPath",id:"extensionpath",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"extensionUri",id:"extensionuri",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"packageJSON",id:"packagejson",level:3},{value:"Defined in",id:"defined-in-4",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-extensiont",children:"Interface: Extension<T>"})}),"\n",(0,t.jsx)(n.p,{children:"Represents an extension."}),"\n",(0,t.jsxs)(n.p,{children:["To get an instance of an ",(0,t.jsx)(n.code,{children:"Extension"})," use ",(0,t.jsx)(n.a,{href:"/api/namespaces/extensions/functions/getExtension",children:"getExtension"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"T"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"exports",children:"exports"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"exports"}),": ",(0,t.jsx)(n.code,{children:"T"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The public API exported by this extension (return value of ",(0,t.jsx)(n.code,{children:"activate"}),").\nIt is an invalid action to access this field before this extension has been activated."]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/ec40343117fb2cbb9f451378c67de6d6cdc09f1b/packages/extension-api/src/extension-api.d.ts#L237",children:"packages/extension-api/src/extension-api.d.ts:237"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"extensionpath",children:"extensionPath"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"extensionPath"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The absolute file path of the directory containing this extension. Shorthand\nnotation for ",(0,t.jsx)(n.a,{href:"/api/interfaces/Extension#extensionuri",children:"Extension.extensionUri.fsPath"})," (independent of the uri scheme)."]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/ec40343117fb2cbb9f451378c67de6d6cdc09f1b/packages/extension-api/src/extension-api.d.ts#L225",children:"packages/extension-api/src/extension-api.d.ts:225"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"extensionuri",children:"extensionUri"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"extensionUri"}),": ",(0,t.jsx)(n.a,{href:"/api/classes/Uri",children:(0,t.jsx)(n.code,{children:"Uri"})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The uri of the directory containing the extension."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/ec40343117fb2cbb9f451378c67de6d6cdc09f1b/packages/extension-api/src/extension-api.d.ts#L219",children:"packages/extension-api/src/extension-api.d.ts:219"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"id",children:"id"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"id"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The canonical extension identifier in the form of: ",(0,t.jsx)(n.code,{children:"publisher.name"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/ec40343117fb2cbb9f451378c67de6d6cdc09f1b/packages/extension-api/src/extension-api.d.ts#L214",children:"packages/extension-api/src/extension-api.d.ts:214"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"packagejson",children:"packageJSON"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"packageJSON"}),": ",(0,t.jsx)(n.code,{children:"any"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The parsed contents of the extension's package.json."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/ec40343117fb2cbb9f451378c67de6d6cdc09f1b/packages/extension-api/src/extension-api.d.ts#L231",children:"packages/extension-api/src/extension-api.d.ts:231"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(63696);const t={},d=s.createContext(t);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);