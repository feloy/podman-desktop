"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16425],{89077:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>t,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"interfaces/ImageFilesProvider","title":"Interface: ImageFilesProvider","description":"Defined in948","source":"@site/api/interfaces/ImageFilesProvider.md","sourceDirName":"interfaces","slug":"/interfaces/ImageFilesProvider","permalink":"/api/interfaces/ImageFilesProvider","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ImageFilesCallbacks","permalink":"/api/interfaces/ImageFilesCallbacks"},"next":{"title":"ImageFilesProviderMetadata","permalink":"/api/interfaces/ImageFilesProviderMetadata"}}');var d=s(62540),r=s(43023);const l={},a="Interface: ImageFilesProvider",t={},c=[{value:"Extends",id:"extends",level:2},{value:"Methods",id:"methods",level:2},{value:"addDirectory()",id:"adddirectory",level:3},{value:"Parameters",id:"parameters",level:4},{value:"layer",id:"layer",level:5},{value:"opts",id:"opts",level:5},{value:"mode",id:"mode",level:6},{value:"path",id:"path",level:6},{value:"Returns",id:"returns",level:4},{value:"addFile()",id:"addfile",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"layer",id:"layer-1",level:5},{value:"opts",id:"opts-1",level:5},{value:"mode",id:"mode-1",level:6},{value:"path",id:"path-1",level:6},{value:"size",id:"size",level:6},{value:"Returns",id:"returns-1",level:4},{value:"addOpaqueWhiteout()",id:"addopaquewhiteout",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"layer",id:"layer-2",level:5},{value:"path",id:"path-2",level:5},{value:"Returns",id:"returns-2",level:4},{value:"addSymlink()",id:"addsymlink",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"layer",id:"layer-3",level:5},{value:"opts",id:"opts-2",level:5},{value:"linkPath",id:"linkpath",level:6},{value:"mode",id:"mode-2",level:6},{value:"path",id:"path-3",level:6},{value:"Returns",id:"returns-3",level:4},{value:"addWhiteout()",id:"addwhiteout",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"layer",id:"layer-4",level:5},{value:"path",id:"path-4",level:5},{value:"Returns",id:"returns-4",level:4},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from",level:4}];function h(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.header,{children:(0,d.jsx)(i.h1,{id:"interface-imagefilesprovider",children:"Interface: ImageFilesProvider"})}),"\n",(0,d.jsxs)(i.p,{children:["Defined in: ",(0,d.jsx)(i.a,{href:"https://github.com/feloy/podman-desktop/blob/ff811f61adc1df9e981aaa50378916498c2396f1/packages/extension-api/src/extension-api.d.ts#L948",children:"packages/extension-api/src/extension-api.d.ts:948"})]}),"\n",(0,d.jsxs)(i.p,{children:["Provider returned to the extension when calling createImageFilesProvider\nProvides helper functions for building the response of the ",(0,d.jsx)(i.code,{children:"createImageFilesProvider"})," callback"]}),"\n",(0,d.jsx)(i.h2,{id:"extends",children:"Extends"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:(0,d.jsx)(i.a,{href:"/api/classes/Disposable",children:(0,d.jsx)(i.code,{children:"Disposable"})})}),"\n"]}),"\n",(0,d.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(i.h3,{id:"adddirectory",children:"addDirectory()"}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"addDirectory"}),"(",(0,d.jsx)(i.code,{children:"layer"}),", ",(0,d.jsx)(i.code,{children:"opts"}),"): ",(0,d.jsx)(i.code,{children:"ImageFilesProvider"})]}),"\n"]}),"\n",(0,d.jsxs)(i.p,{children:["Defined in: ",(0,d.jsx)(i.a,{href:"https://github.com/feloy/podman-desktop/blob/ff811f61adc1df9e981aaa50378916498c2396f1/packages/extension-api/src/extension-api.d.ts#L956",children:"packages/extension-api/src/extension-api.d.ts:956"})]}),"\n",(0,d.jsx)(i.p,{children:"add a directory to the layer"}),"\n",(0,d.jsx)(i.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsx)(i.h5,{id:"layer",children:"layer"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.a,{href:"/api/interfaces/ImageFilesystemLayer",children:(0,d.jsx)(i.code,{children:"ImageFilesystemLayer"})})}),"\n",(0,d.jsx)(i.h5,{id:"opts",children:"opts"}),"\n",(0,d.jsx)(i.h6,{id:"mode",children:"mode"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"number"})}),"\n",(0,d.jsx)(i.h6,{id:"path",children:"path"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"string"})}),"\n",(0,d.jsx)(i.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"ImageFilesProvider"})}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"addfile",children:"addFile()"}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"addFile"}),"(",(0,d.jsx)(i.code,{children:"layer"}),", ",(0,d.jsx)(i.code,{children:"opts"}),"): ",(0,d.jsx)(i.code,{children:"ImageFilesProvider"})]}),"\n"]}),"\n",(0,d.jsxs)(i.p,{children:["Defined in: ",(0,d.jsx)(i.a,{href:"https://github.com/feloy/podman-desktop/blob/ff811f61adc1df9e981aaa50378916498c2396f1/packages/extension-api/src/extension-api.d.ts#L952",children:"packages/extension-api/src/extension-api.d.ts:952"})]}),"\n",(0,d.jsx)(i.p,{children:"add a file to the layer"}),"\n",(0,d.jsx)(i.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsx)(i.h5,{id:"layer-1",children:"layer"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.a,{href:"/api/interfaces/ImageFilesystemLayer",children:(0,d.jsx)(i.code,{children:"ImageFilesystemLayer"})})}),"\n",(0,d.jsx)(i.h5,{id:"opts-1",children:"opts"}),"\n",(0,d.jsx)(i.h6,{id:"mode-1",children:"mode"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"number"})}),"\n",(0,d.jsx)(i.h6,{id:"path-1",children:"path"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"string"})}),"\n",(0,d.jsx)(i.h6,{id:"size",children:"size"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"number"})}),"\n",(0,d.jsx)(i.h4,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"ImageFilesProvider"})}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"addopaquewhiteout",children:"addOpaqueWhiteout()"}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"addOpaqueWhiteout"}),"(",(0,d.jsx)(i.code,{children:"layer"}),", ",(0,d.jsx)(i.code,{children:"path"}),"): ",(0,d.jsx)(i.code,{children:"ImageFilesProvider"})]}),"\n"]}),"\n",(0,d.jsxs)(i.p,{children:["Defined in: ",(0,d.jsx)(i.a,{href:"https://github.com/feloy/podman-desktop/blob/ff811f61adc1df9e981aaa50378916498c2396f1/packages/extension-api/src/extension-api.d.ts#L970",children:"packages/extension-api/src/extension-api.d.ts:970"})]}),"\n",(0,d.jsx)(i.p,{children:"add a complete directory to remove from previous layers"}),"\n",(0,d.jsx)(i.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,d.jsx)(i.h5,{id:"layer-2",children:"layer"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.a,{href:"/api/interfaces/ImageFilesystemLayer",children:(0,d.jsx)(i.code,{children:"ImageFilesystemLayer"})})}),"\n",(0,d.jsx)(i.h5,{id:"path-2",children:"path"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"string"})}),"\n",(0,d.jsx)(i.h4,{id:"returns-2",children:"Returns"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"ImageFilesProvider"})}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"addsymlink",children:"addSymlink()"}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"addSymlink"}),"(",(0,d.jsx)(i.code,{children:"layer"}),", ",(0,d.jsx)(i.code,{children:"opts"}),"): ",(0,d.jsx)(i.code,{children:"ImageFilesProvider"})]}),"\n"]}),"\n",(0,d.jsxs)(i.p,{children:["Defined in: ",(0,d.jsx)(i.a,{href:"https://github.com/feloy/podman-desktop/blob/ff811f61adc1df9e981aaa50378916498c2396f1/packages/extension-api/src/extension-api.d.ts#L960",children:"packages/extension-api/src/extension-api.d.ts:960"})]}),"\n",(0,d.jsx)(i.p,{children:"add a symbolic link to the layer"}),"\n",(0,d.jsx)(i.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,d.jsx)(i.h5,{id:"layer-3",children:"layer"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.a,{href:"/api/interfaces/ImageFilesystemLayer",children:(0,d.jsx)(i.code,{children:"ImageFilesystemLayer"})})}),"\n",(0,d.jsx)(i.h5,{id:"opts-2",children:"opts"}),"\n",(0,d.jsx)(i.h6,{id:"linkpath",children:"linkPath"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"string"})}),"\n",(0,d.jsx)(i.h6,{id:"mode-2",children:"mode"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"number"})}),"\n",(0,d.jsx)(i.h6,{id:"path-3",children:"path"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"string"})}),"\n",(0,d.jsx)(i.h4,{id:"returns-3",children:"Returns"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"ImageFilesProvider"})}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"addwhiteout",children:"addWhiteout()"}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"addWhiteout"}),"(",(0,d.jsx)(i.code,{children:"layer"}),", ",(0,d.jsx)(i.code,{children:"path"}),"): ",(0,d.jsx)(i.code,{children:"ImageFilesProvider"})]}),"\n"]}),"\n",(0,d.jsxs)(i.p,{children:["Defined in: ",(0,d.jsx)(i.a,{href:"https://github.com/feloy/podman-desktop/blob/ff811f61adc1df9e981aaa50378916498c2396f1/packages/extension-api/src/extension-api.d.ts#L965",children:"packages/extension-api/src/extension-api.d.ts:965"})]}),"\n",(0,d.jsx)(i.p,{children:"add a file or directory to remove from previous layers"}),"\n",(0,d.jsx)(i.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,d.jsx)(i.h5,{id:"layer-4",children:"layer"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.a,{href:"/api/interfaces/ImageFilesystemLayer",children:(0,d.jsx)(i.code,{children:"ImageFilesystemLayer"})})}),"\n",(0,d.jsx)(i.h5,{id:"path-4",children:"path"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"string"})}),"\n",(0,d.jsx)(i.h4,{id:"returns-4",children:"Returns"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"ImageFilesProvider"})}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"dispose",children:"dispose()"}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"dispose"}),"(): ",(0,d.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsxs)(i.p,{children:["Defined in: ",(0,d.jsx)(i.a,{href:"https://github.com/feloy/podman-desktop/blob/ff811f61adc1df9e981aaa50378916498c2396f1/packages/extension-api/src/extension-api.d.ts#L103",children:"packages/extension-api/src/extension-api.d.ts:103"})]}),"\n",(0,d.jsx)(i.p,{children:"Dispose this object."}),"\n",(0,d.jsx)(i.h4,{id:"returns-5",children:"Returns"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.code,{children:"void"})}),"\n",(0,d.jsx)(i.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.a,{href:"/api/classes/Disposable",children:(0,d.jsx)(i.code,{children:"Disposable"})}),".",(0,d.jsx)(i.a,{href:"/api/classes/Disposable#dispose",children:(0,d.jsx)(i.code,{children:"dispose"})})]})]})}function o(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},43023:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>a});var n=s(63696);const d={},r=n.createContext(d);function l(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);