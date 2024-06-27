"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44958],{76055:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(24246),t=i(71670);const r={},c="Interface: ImageFilesystemLayer",o={id:"interfaces/ImageFilesystemLayer",title:"Interface: ImageFilesystemLayer",description:"a filesystem layer of an image as defined by spec",source:"@site/api/interfaces/ImageFilesystemLayer.md",sourceDirName:"interfaces",slug:"/interfaces/ImageFilesystemLayer",permalink:"/api/interfaces/ImageFilesystemLayer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"ImageFilesProviderMetadata",permalink:"/api/interfaces/ImageFilesProviderMetadata"},next:{title:"ImageFilesystemLayers",permalink:"/api/interfaces/ImageFilesystemLayers"}},a={},d=[{value:"Properties",id:"properties",level:2},{value:"createdBy?",id:"createdby",level:3},{value:"Source",id:"source",level:4},{value:"files?",id:"files",level:3},{value:"Source",id:"source-1",level:4},{value:"id",id:"id",level:3},{value:"Source",id:"source-2",level:4},{value:"opaqueWhiteouts?",id:"opaquewhiteouts",level:3},{value:"Source",id:"source-3",level:4},{value:"whiteouts?",id:"whiteouts",level:3},{value:"Source",id:"source-4",level:4}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"interface-imagefilesystemlayer",children:"Interface: ImageFilesystemLayer"}),"\n",(0,n.jsxs)(s.p,{children:["a filesystem layer of an image as defined by ",(0,n.jsx)(s.a,{href:"https://github.com/opencontainers/image-spec/blob/main/spec.md",children:"spec"})]}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"createdby",children:"createdBy?"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"optional"})," ",(0,n.jsx)(s.strong,{children:"createdBy"}),": ",(0,n.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"the command which created the layer"}),"\n",(0,n.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/feloy/podman-desktop/blob/0fb809c40babc26327022fbfe3ce2bb5b9d7d6d2/packages/extension-api/src/extension-api.d.ts#L726",children:"packages/extension-api/src/extension-api.d.ts:726"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"files",children:"files?"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"optional"})," ",(0,n.jsx)(s.strong,{children:"files"}),": ",(0,n.jsx)(s.a,{href:"/api/interfaces/ImageFile",children:(0,n.jsx)(s.code,{children:"ImageFile"})}),"[]"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"files indicate the paths of the files added or modified in the layer"}),"\n",(0,n.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/feloy/podman-desktop/blob/0fb809c40babc26327022fbfe3ce2bb5b9d7d6d2/packages/extension-api/src/extension-api.d.ts#L730",children:"packages/extension-api/src/extension-api.d.ts:730"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"id",children:"id"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"id"}),": ",(0,n.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"unique id of the layer"}),"\n",(0,n.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/feloy/podman-desktop/blob/0fb809c40babc26327022fbfe3ce2bb5b9d7d6d2/packages/extension-api/src/extension-api.d.ts#L722",children:"packages/extension-api/src/extension-api.d.ts:722"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"opaquewhiteouts",children:"opaqueWhiteouts?"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"optional"})," ",(0,n.jsx)(s.strong,{children:"opaqueWhiteouts"}),": ",(0,n.jsx)(s.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"opaque whiteouts indicate the directories in which the content has to be completely deleted from previous layers."}),"\n",(0,n.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/feloy/podman-desktop/blob/0fb809c40babc26327022fbfe3ce2bb5b9d7d6d2/packages/extension-api/src/extension-api.d.ts#L738",children:"packages/extension-api/src/extension-api.d.ts:738"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"whiteouts",children:"whiteouts?"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"optional"})," ",(0,n.jsx)(s.strong,{children:"whiteouts"}),": ",(0,n.jsx)(s.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"whiteouts indicate the paths of the files to be deleted from previous layers."}),"\n",(0,n.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/feloy/podman-desktop/blob/0fb809c40babc26327022fbfe3ce2bb5b9d7d6d2/packages/extension-api/src/extension-api.d.ts#L734",children:"packages/extension-api/src/extension-api.d.ts:734"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},71670:(e,s,i)=>{i.d(s,{Z:()=>o,a:()=>c});var n=i(27378);const t={},r=n.createContext(t);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);