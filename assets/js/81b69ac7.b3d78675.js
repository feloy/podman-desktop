"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33582],{10099:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"interfaces/KubernetesProviderConnectionFactory","title":"Interface: KubernetesProviderConnectionFactory","description":"Defined in547","source":"@site/api/interfaces/KubernetesProviderConnectionFactory.md","sourceDirName":"interfaces","slug":"/interfaces/KubernetesProviderConnectionFactory","permalink":"/api/interfaces/KubernetesProviderConnectionFactory","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"KubernetesProviderConnectionEndpoint","permalink":"/api/interfaces/KubernetesProviderConnectionEndpoint"},"next":{"title":"LifecycleContext","permalink":"/api/interfaces/LifecycleContext"}}');var t=i(62540),o=i(43023);const s={},c="Interface: KubernetesProviderConnectionFactory",d={},a=[{value:"Extends",id:"extends",level:2},{value:"Properties",id:"properties",level:2},{value:"creationButtonTitle?",id:"creationbuttontitle",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"creationDisplayName?",id:"creationdisplayname",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Methods",id:"methods",level:2},{value:"create()?",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"params",id:"params",level:5},{value:"logger?",id:"logger",level:5},{value:"token?",id:"token",level:5},{value:"Returns",id:"returns",level:4},{value:"initialize()?",id:"initialize",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-2",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-kubernetesproviderconnectionfactory",children:"Interface: KubernetesProviderConnectionFactory"})}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/725bcd4a7588a47f08c3ad2b817721bfef4ce4d4/packages/extension-api/src/extension-api.d.ts#L547",children:"packages/extension-api/src/extension-api.d.ts:547"})]}),"\n",(0,t.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/interfaces/ProviderConnectionFactory",children:(0,t.jsx)(n.code,{children:"ProviderConnectionFactory"})})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"creationbuttontitle",children:"creationButtonTitle?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"creationButtonTitle"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/725bcd4a7588a47f08c3ad2b817721bfef4ce4d4/packages/extension-api/src/extension-api.d.ts#L537",children:"packages/extension-api/src/extension-api.d.ts:537"})]}),"\n",(0,t.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/interfaces/ProviderConnectionFactory",children:(0,t.jsx)(n.code,{children:"ProviderConnectionFactory"})}),".",(0,t.jsx)(n.a,{href:"/api/interfaces/ProviderConnectionFactory#creationbuttontitle",children:(0,t.jsx)(n.code,{children:"creationButtonTitle"})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"creationdisplayname",children:"creationDisplayName?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"creationDisplayName"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/725bcd4a7588a47f08c3ad2b817721bfef4ce4d4/packages/extension-api/src/extension-api.d.ts#L534",children:"packages/extension-api/src/extension-api.d.ts:534"})]}),"\n",(0,t.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/interfaces/ProviderConnectionFactory",children:(0,t.jsx)(n.code,{children:"ProviderConnectionFactory"})}),".",(0,t.jsx)(n.a,{href:"/api/interfaces/ProviderConnectionFactory#creationdisplayname",children:(0,t.jsx)(n.code,{children:"creationDisplayName"})})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"create",children:"create()?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"create"}),"(",(0,t.jsx)(n.code,{children:"params"}),", ",(0,t.jsx)(n.code,{children:"logger"}),"?, ",(0,t.jsx)(n.code,{children:"token"}),"?): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/725bcd4a7588a47f08c3ad2b817721bfef4ce4d4/packages/extension-api/src/extension-api.d.ts#L549",children:"packages/extension-api/src/extension-api.d.ts:549"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.h5,{id:"params",children:"params"}),"\n",(0,t.jsx)(n.h5,{id:"logger",children:"logger?"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/api/interfaces/Logger",children:(0,t.jsx)(n.code,{children:"Logger"})})}),"\n",(0,t.jsx)(n.h5,{id:"token",children:"token?"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/api/interfaces/CancellationToken",children:(0,t.jsx)(n.code,{children:"CancellationToken"})})}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"initialize",children:"initialize()?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"initialize"}),"(): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/725bcd4a7588a47f08c3ad2b817721bfef4ce4d4/packages/extension-api/src/extension-api.d.ts#L531",children:"packages/extension-api/src/extension-api.d.ts:531"})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/interfaces/ProviderConnectionFactory",children:(0,t.jsx)(n.code,{children:"ProviderConnectionFactory"})}),".",(0,t.jsx)(n.a,{href:"/api/interfaces/ProviderConnectionFactory#initialize",children:(0,t.jsx)(n.code,{children:"initialize"})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var r=i(63696);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);