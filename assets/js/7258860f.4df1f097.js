"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92423],{87064:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=i(24246),s=i(71670);const o={},r="Function: logsContainer()",a={id:"namespaces/containerEngine/functions/logsContainer",title:"Function: logsContainer()",description:"logsContainer(engineId, id, callback): Promise\\",source:"@site/api/namespaces/containerEngine/functions/logsContainer.md",sourceDirName:"namespaces/containerEngine/functions",slug:"/namespaces/containerEngine/functions/logsContainer",permalink:"/api/namespaces/containerEngine/functions/logsContainer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"listVolumes",permalink:"/api/namespaces/containerEngine/functions/listVolumes"},next:{title:"onEvent",permalink:"/api/namespaces/containerEngine/functions/onEvent"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"function-logscontainer",children:"Function: logsContainer()"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"logsContainer"}),"(",(0,t.jsx)(e.code,{children:"engineId"}),", ",(0,t.jsx)(e.code,{children:"id"}),", ",(0,t.jsx)(e.code,{children:"callback"}),"): ",(0,t.jsx)(e.code,{children:"Promise"}),"<",(0,t.jsx)(e.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Get the streamed logs of a container"}),"\n",(0,t.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(e.p,{children:["\u2022 ",(0,t.jsx)(e.strong,{children:"engineId"}),": ",(0,t.jsx)(e.code,{children:"string"})]}),"\n",(0,t.jsxs)(e.p,{children:["the id of the engine managing the container, obtained from the result of ",(0,t.jsx)(e.a,{href:"/api/namespaces/containerEngine/functions/listContainers",children:"containerEngine.listContainers"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u2022 ",(0,t.jsx)(e.strong,{children:"id"}),": ",(0,t.jsx)(e.code,{children:"string"})]}),"\n",(0,t.jsxs)(e.p,{children:["the id of the container on this engine, obtained from the result of ",(0,t.jsx)(e.a,{href:"/api/namespaces/containerEngine/functions/listContainers",children:"containerEngine.listContainers"})," or as the result of ",(0,t.jsx)(e.a,{href:"/api/namespaces/containerEngine/functions/createContainer",children:"containerEngine.createContainer"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u2022 ",(0,t.jsx)(e.strong,{children:"callback"})]}),"\n",(0,t.jsxs)(e.p,{children:["the function called when new logs are emitted or new events happen on the stream. The value of ",(0,t.jsx)(e.code,{children:"name"})," can be either ",(0,t.jsx)(e.code,{children:"data"})," (and ",(0,t.jsx)(e.code,{children:"data"})," contains the logs), or ",(0,t.jsx)(e.code,{children:"end"})," indicating the end of the stream, or ",(0,t.jsx)(e.code,{children:"first-message"})," indicating no data has been emitted yet on the stream."]}),"\n",(0,t.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Promise"}),"<",(0,t.jsx)(e.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(e.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/feloy/podman-desktop/blob/407fe7d905b1b14d139265560af6e4367da9bdbc/packages/extension-api/src/extension-api.d.ts#L3481",children:"packages/extension-api/src/extension-api.d.ts:3481"})})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},71670:(n,e,i)=>{i.d(e,{Z:()=>a,a:()=>r});var t=i(27378);const s={},o=t.createContext(s);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);