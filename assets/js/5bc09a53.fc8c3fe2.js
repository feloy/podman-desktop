"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79649],{32652:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=s(24246),i=s(71670);const r={},o="Interface: HealthConfig",c={id:"interfaces/HealthConfig",title:"Interface: HealthConfig",description:"Properties",source:"@site/api/interfaces/HealthConfig.md",sourceDirName:"interfaces",slug:"/interfaces/HealthConfig",permalink:"/api/interfaces/HealthConfig",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Interface: GenerateKubeResult",permalink:"/api/interfaces/GenerateKubeResult"},next:{title:"Interface: HostConfig",permalink:"/api/interfaces/HostConfig"}},l={},a=[{value:"Properties",id:"properties",level:2},{value:"Interval?",id:"interval",level:3},{value:"Source",id:"source",level:4},{value:"Retries?",id:"retries",level:3},{value:"Source",id:"source-1",level:4},{value:"StartPeriod?",id:"startperiod",level:3},{value:"Source",id:"source-2",level:4},{value:"Test?",id:"test",level:3},{value:"Source",id:"source-3",level:4},{value:"Timeout?",id:"timeout",level:3},{value:"Source",id:"source-4",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"interface-healthconfig",children:"Interface: HealthConfig"}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"interval",children:"Interval?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"optional"})})," ",(0,t.jsx)(n.strong,{children:"Interval"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The time to wait between checks in nanoseconds. It should be 0 or at least 1000000 (1 ms). 0 means inherit."}),"\n",(0,t.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/b5fdc37/packages/extension-api/src/extension-api.d.ts#L2240",children:"packages/extension-api/src/extension-api.d.ts:2240"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"retries",children:"Retries?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"optional"})})," ",(0,t.jsx)(n.strong,{children:"Retries"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The number of consecutive failures needed to consider a container as unhealthy. 0 means inherit."}),"\n",(0,t.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/b5fdc37/packages/extension-api/src/extension-api.d.ts#L2256",children:"packages/extension-api/src/extension-api.d.ts:2256"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"startperiod",children:"StartPeriod?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"optional"})})," ",(0,t.jsx)(n.strong,{children:"StartPeriod"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Start period for the container to initialize before starting health-retries countdown in nanoseconds. It should\nbe 0 or at least 1000000 (1 ms). 0 means inherit."}),"\n",(0,t.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/b5fdc37/packages/extension-api/src/extension-api.d.ts#L2251",children:"packages/extension-api/src/extension-api.d.ts:2251"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"test",children:"Test?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"optional"})})," ",(0,t.jsx)(n.strong,{children:"Test"}),": ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The test to perform. Possible values are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[]"})," inherit healthcheck from image or parent image"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'["NONE"]'})," disable healthcheck"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'["CMD", args...]'})," exec arguments directly"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'["CMD-SHELL", command]'})," run command with system's default shell"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/b5fdc37/packages/extension-api/src/extension-api.d.ts#L2235",children:"packages/extension-api/src/extension-api.d.ts:2235"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"timeout",children:"Timeout?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"optional"})})," ",(0,t.jsx)(n.strong,{children:"Timeout"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The time to wait before considering the check to have hung. It should be 0 or at least 1000000 (1 ms). 0 means inherit."}),"\n",(0,t.jsx)(n.h4,{id:"source-4",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/b5fdc37/packages/extension-api/src/extension-api.d.ts#L2245",children:"packages/extension-api/src/extension-api.d.ts:2245"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var t=s(27378);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);