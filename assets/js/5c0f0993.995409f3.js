"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[772],{12466:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"interfaces/TelemetrySender","title":"Interface: TelemetrySender","description":"The telemetry sender is the contract between a telemetry logger and some telemetry service. Note that extensions must NOT","source":"@site/api/interfaces/TelemetrySender.md","sourceDirName":"interfaces","slug":"/interfaces/TelemetrySender","permalink":"/api/interfaces/TelemetrySender","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"TelemetryLoggerOptions","permalink":"/api/interfaces/TelemetryLoggerOptions"},"next":{"title":"ThrottlingData","permalink":"/api/interfaces/ThrottlingData"}}');var s=r(62540),i=r(43023);const d={},a="Interface: TelemetrySender",l={},c=[{value:"Methods",id:"methods",level:2},{value:"flush()?",id:"flush",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"sendErrorData()",id:"senderrordata",level:3},{value:"Parameters",id:"parameters",level:4},{value:"error",id:"error",level:5},{value:"data?",id:"data",level:5},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"sendEventData()",id:"sendeventdata",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"eventName",id:"eventname",level:5},{value:"data?",id:"data-1",level:5},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"interface-telemetrysender",children:"Interface: TelemetrySender"})}),"\n",(0,s.jsxs)(n.p,{children:["The telemetry sender is the contract between a telemetry logger and some telemetry service. ",(0,s.jsx)(n.strong,{children:"Note"})," that extensions must NOT\ncall the methods of their sender directly as the logger provides extra guards and cleaning."]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"flush",children:"flush()?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"flush"}),"(): ",(0,s.jsx)(n.code,{children:"void"})," | ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Optional flush function which will give this sender a chance to send any remaining events\nas its ",(0,s.jsx)(n.a,{href:"/api/interfaces/TelemetryLogger",children:"TelemetryLogger"})," is being disposed"]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"void"})," | ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/2722e15a2e7062046e6e40126ee9d0cbdb83ae3c/packages/extension-api/src/extension-api.d.ts#L4495",children:"packages/extension-api/src/extension-api.d.ts:4495"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"senderrordata",children:"sendErrorData()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sendErrorData"}),"(",(0,s.jsx)(n.code,{children:"error"}),", ",(0,s.jsx)(n.code,{children:"data"}),"?): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Function to send an error. Used within a ",(0,s.jsx)(n.a,{href:"/api/interfaces/TelemetryLogger",children:"TelemetryLogger"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.h5,{id:"error",children:"error"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Error"})}),"\n",(0,s.jsx)(n.p,{children:"The error being logged"}),"\n",(0,s.jsx)(n.h5,{id:"data",children:"data?"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"Any additional data to be collected with the exception"}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/2722e15a2e7062046e6e40126ee9d0cbdb83ae3c/packages/extension-api/src/extension-api.d.ts#L4489",children:"packages/extension-api/src/extension-api.d.ts:4489"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"sendeventdata",children:"sendEventData()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sendEventData"}),"(",(0,s.jsx)(n.code,{children:"eventName"}),", ",(0,s.jsx)(n.code,{children:"data"}),"?): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Function to send event data without a stacktrace. Used within a ",(0,s.jsx)(n.a,{href:"/api/interfaces/TelemetryLogger",children:"TelemetryLogger"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsx)(n.h5,{id:"eventname",children:"eventName"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsx)(n.p,{children:"The name of the event which you are logging"}),"\n",(0,s.jsx)(n.h5,{id:"data-1",children:"data?"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"A serializable key value pair that is being logged"}),"\n",(0,s.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/2722e15a2e7062046e6e40126ee9d0cbdb83ae3c/packages/extension-api/src/extension-api.d.ts#L4480",children:"packages/extension-api/src/extension-api.d.ts:4480"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},43023:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var t=r(63696);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);