"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83672],{32084:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var s=r(24246),i=r(71670);const d={},t="Interface: TelemetryLogger",a={id:"interfaces/TelemetryLogger",title:"Interface: TelemetryLogger",description:"A telemetry logger which can be used by extensions to log usage and error telementry.",source:"@site/api/interfaces/TelemetryLogger.md",sourceDirName:"interfaces",slug:"/interfaces/TelemetryLogger",permalink:"/api/interfaces/TelemetryLogger",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"StorageStats",permalink:"/api/interfaces/StorageStats"},next:{title:"TelemetryLoggerOptions",permalink:"/api/interfaces/TelemetryLoggerOptions"}},l={},o=[{value:"Properties",id:"properties",level:2},{value:"isErrorsEnabled",id:"iserrorsenabled",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"isUsageEnabled",id:"isusageenabled",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"onDidChangeEnableStates",id:"ondidchangeenablestates",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"logError()",id:"logerror",level:3},{value:"logError(eventName, data)",id:"logerroreventname-data",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-4",level:5},{value:"logError(error, data)",id:"logerrorerror-data",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-5",level:5},{value:"logUsage()",id:"logusage",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"interface-telemetrylogger",children:"Interface: TelemetryLogger"})}),"\n",(0,s.jsx)(n.p,{children:"A telemetry logger which can be used by extensions to log usage and error telementry."}),"\n",(0,s.jsxs)(n.p,{children:["A logger wraps around an ",(0,s.jsx)(n.a,{href:"/api/interfaces/TelemetrySender",children:"sender"})," but it guarantees that"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"user settings to disable or tweak telemetry are respected, and that"}),"\n",(0,s.jsx)(n.li,{children:"potential sensitive data is removed"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'It also enables an "echo UI" that prints whatever data is send and it allows the editor\nto forward unhandled errors to the respective extensions.'}),"\n",(0,s.jsxs)(n.p,{children:["To get an instance of a ",(0,s.jsx)(n.code,{children:"TelemetryLogger"}),", use\n",(0,s.jsx)(n.a,{href:"/api/namespaces/env/functions/createTelemetryLogger",children:(0,s.jsx)(n.code,{children:"createTelemetryLogger"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"iserrorsenabled",children:"isErrorsEnabled"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"isErrorsEnabled"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether or not error telemetry is enabled for this logger."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/4eab4cbf091109f3aab1e1e2d72c805618e3bc1a/packages/extension-api/src/extension-api.d.ts#L4178",children:"packages/extension-api/src/extension-api.d.ts:4178"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"isusageenabled",children:"isUsageEnabled"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"isUsageEnabled"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether or not usage telemetry is enabled for this logger."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/4eab4cbf091109f3aab1e1e2d72c805618e3bc1a/packages/extension-api/src/extension-api.d.ts#L4173",children:"packages/extension-api/src/extension-api.d.ts:4173"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ondidchangeenablestates",children:"onDidChangeEnableStates"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"onDidChangeEnableStates"}),": ",(0,s.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,s.jsx)(n.code,{children:"Event"})}),"<",(0,s.jsx)(n.a,{href:"/api/interfaces/TelemetryLogger",children:(0,s.jsx)(n.code,{children:"TelemetryLogger"})}),">"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.a,{href:"/api/interfaces/Event",children:"Event"})," which fires when the enablement state of usage or error telemetry changes."]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/4eab4cbf091109f3aab1e1e2d72c805618e3bc1a/packages/extension-api/src/extension-api.d.ts#L4168",children:"packages/extension-api/src/extension-api.d.ts:4168"})}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"dispose"}),"(): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Dispose this object and free resources."}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/4eab4cbf091109f3aab1e1e2d72c805618e3bc1a/packages/extension-api/src/extension-api.d.ts#L4213",children:"packages/extension-api/src/extension-api.d.ts:4213"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"logerror",children:"logError()"}),"\n",(0,s.jsx)(n.h4,{id:"logerroreventname-data",children:"logError(eventName, data)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"logError"}),"(",(0,s.jsx)(n.code,{children:"eventName"}),", ",(0,s.jsx)(n.code,{children:"data"}),"?): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Log an error event."}),"\n",(0,s.jsxs)(n.p,{children:["After completing cleaning, telemetry setting checks, and data mix-in calls ",(0,s.jsx)(n.code,{children:"TelemetrySender.sendEventData"})," to log the event. Differs from ",(0,s.jsx)(n.code,{children:"logUsage"})," in that it will log the event if the telemetry setting is Error+.\nAutomatically supports echoing to extension telemetry output channel."]}),"\n",(0,s.jsx)(n.h5,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"eventName"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"The event name to log"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"data?"}),": ",(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"The data to log"}),"\n",(0,s.jsx)(n.h5,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h5,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/4eab4cbf091109f3aab1e1e2d72c805618e3bc1a/packages/extension-api/src/extension-api.d.ts#L4200",children:"packages/extension-api/src/extension-api.d.ts:4200"})}),"\n",(0,s.jsx)(n.h4,{id:"logerrorerror-data",children:"logError(error, data)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"logError"}),"(",(0,s.jsx)(n.code,{children:"error"}),", ",(0,s.jsx)(n.code,{children:"data"}),"?): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Log an error event."}),"\n",(0,s.jsx)(n.h5,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"error"}),": ",(0,s.jsx)(n.code,{children:"Error"})]}),"\n",(0,s.jsx)(n.p,{children:"The error object which contains the stack trace cleaned of PII"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"data?"}),": ",(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"Additional data to log alongside the stack trace"}),"\n",(0,s.jsx)(n.h5,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h5,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/4eab4cbf091109f3aab1e1e2d72c805618e3bc1a/packages/extension-api/src/extension-api.d.ts#L4208",children:"packages/extension-api/src/extension-api.d.ts:4208"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"logusage",children:"logUsage()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"logUsage"}),"(",(0,s.jsx)(n.code,{children:"eventName"}),", ",(0,s.jsx)(n.code,{children:"data"}),"?): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Log a usage event."}),"\n",(0,s.jsxs)(n.p,{children:["After completing cleaning, telemetry setting checks, and data mix-in calls ",(0,s.jsx)(n.code,{children:"TelemetrySender.sendEventData"})," to log the event.\nAutomatically supports echoing to extension telemetry output channel."]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"eventName"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"The event name to log"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"data?"}),": ",(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"The data to log"}),"\n",(0,s.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/4eab4cbf091109f3aab1e1e2d72c805618e3bc1a/packages/extension-api/src/extension-api.d.ts#L4189",children:"packages/extension-api/src/extension-api.d.ts:4189"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},71670:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>t});var s=r(27378);const i={},d=s.createContext(i);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);