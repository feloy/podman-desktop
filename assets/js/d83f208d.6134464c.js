"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13317],{30245:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});var i=s(24246),c=s(71670);const o={},r="Interface: RunOptions",t={id:"interfaces/RunOptions",title:"Interface: RunOptions",description:"Options for running a command.",source:"@site/api/interfaces/RunOptions.md",sourceDirName:"interfaces",slug:"/interfaces/RunOptions",permalink:"/api/interfaces/RunOptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"RunError",permalink:"/api/interfaces/RunError"},next:{title:"RunResult",permalink:"/api/interfaces/RunResult"}},d={},l=[{value:"Properties",id:"properties",level:2},{value:"cwd?",id:"cwd",level:3},{value:"Source",id:"source",level:4},{value:"encoding?",id:"encoding",level:3},{value:"Source",id:"source-1",level:4},{value:"env?",id:"env",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Source",id:"source-2",level:4},{value:"isAdmin?",id:"isadmin",level:3},{value:"Source",id:"source-3",level:4},{value:"logger?",id:"logger",level:3},{value:"Source",id:"source-4",level:4},{value:"token?",id:"token",level:3},{value:"Source",id:"source-5",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"interface-runoptions",children:"Interface: RunOptions"}),"\n",(0,i.jsx)(n.p,{children:"Options for running a command."}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"cwd",children:"cwd?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"cwd"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"custom directory"}),"\n",(0,i.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/89c394b9e7c49aca6b677ed6b74c62569c71d950/packages/extension-api/src/extension-api.d.ts#L3763",children:"packages/extension-api/src/extension-api.d.ts:3763"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"encoding",children:"encoding?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"encoding"}),": ",(0,i.jsx)(n.code,{children:"BufferEncoding"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The encoding to use. Default utf8"}),"\n",(0,i.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/89c394b9e7c49aca6b677ed6b74c62569c71d950/packages/extension-api/src/extension-api.d.ts#L3773",children:"packages/extension-api/src/extension-api.d.ts:3773"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"env",children:"env?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"env"}),": ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Environment variables to set for the command."}),"\n",(0,i.jsx)(n.h4,{id:"index-signature",children:"Index signature"}),"\n",(0,i.jsxs)(n.p,{children:["[",(0,i.jsx)(n.code,{children:"key"}),": ",(0,i.jsx)(n.code,{children:"string"}),"]: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/89c394b9e7c49aca6b677ed6b74c62569c71d950/packages/extension-api/src/extension-api.d.ts#L3748",children:"packages/extension-api/src/extension-api.d.ts:3748"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isadmin",children:"isAdmin?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"isAdmin"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"admin privileges required"}),"\n",(0,i.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/89c394b9e7c49aca6b677ed6b74c62569c71d950/packages/extension-api/src/extension-api.d.ts#L3768",children:"packages/extension-api/src/extension-api.d.ts:3768"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"logger",children:"logger?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"logger"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/Logger",children:(0,i.jsx)(n.code,{children:"Logger"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A logger used to track execution events."}),"\n",(0,i.jsx)(n.h4,{id:"source-4",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/89c394b9e7c49aca6b677ed6b74c62569c71d950/packages/extension-api/src/extension-api.d.ts#L3758",children:"packages/extension-api/src/extension-api.d.ts:3758"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"token",children:"token?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"token"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/CancellationToken",children:(0,i.jsx)(n.code,{children:"CancellationToken"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A cancellation token used to request cancellation."}),"\n",(0,i.jsx)(n.h4,{id:"source-5",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/89c394b9e7c49aca6b677ed6b74c62569c71d950/packages/extension-api/src/extension-api.d.ts#L3753",children:"packages/extension-api/src/extension-api.d.ts:3753"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>r});var i=s(27378);const c={},o=i.createContext(c);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);