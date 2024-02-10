"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45346],{37354:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var i=n(24246),r=n(71670);const c={},o="Interface: Webview",t={id:"interfaces/Webview",title:"Interface: Webview",description:"Displays html content, similarly to an iframe.",source:"@site/api/interfaces/Webview.md",sourceDirName:"interfaces",slug:"/interfaces/Webview",permalink:"/api/interfaces/Webview",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Interface: VolumeListInfo",permalink:"/api/interfaces/VolumeListInfo"},next:{title:"Interface: WebviewInfo",permalink:"/api/interfaces/WebviewInfo"}},a={},l=[{value:"Properties",id:"properties",level:2},{value:"cspSource",id:"cspsource",level:3},{value:"Source",id:"source",level:4},{value:"html",id:"html",level:3},{value:"Source",id:"source-1",level:4},{value:"onDidReceiveMessage",id:"ondidreceivemessage",level:3},{value:"Source",id:"source-2",level:4},{value:"options",id:"options",level:3},{value:"Source",id:"source-3",level:4},{value:"Methods",id:"methods",level:2},{value:"asWebviewUri()",id:"aswebviewuri",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source-4",level:4},{value:"postMessage()",id:"postmessage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-5",level:4}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"interface-webview",children:"Interface: Webview"}),"\n",(0,i.jsx)(s.p,{children:"Displays html content, similarly to an iframe."}),"\n",(0,i.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(s.h3,{id:"cspsource",children:"cspSource"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"readonly"})})," ",(0,i.jsx)(s.strong,{children:"cspSource"}),": ",(0,i.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Content security policy source for webview resources."}),"\n",(0,i.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L1396",children:"packages/extension-api/src/extension-api.d.ts:1396"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"html",children:"html"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"html"}),": ",(0,i.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"HTML contents of the webview."}),"\n",(0,i.jsx)(s.p,{children:"This should be a complete, valid html document. Changing this property causes the webview to be reloaded."}),"\n",(0,i.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L1373",children:"packages/extension-api/src/extension-api.d.ts:1373"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"ondidreceivemessage",children:"onDidReceiveMessage"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"readonly"})})," ",(0,i.jsx)(s.strong,{children:"onDidReceiveMessage"}),": ",(0,i.jsx)(s.a,{href:"/api/interfaces/Event",children:(0,i.jsx)(s.code,{children:"Event"})}),"< ",(0,i.jsx)(s.code,{children:"unknown"})," >"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Fired when the webview content posts a message."}),"\n",(0,i.jsx)(s.p,{children:"Webview content can post strings or json serializable objects back to an extension."}),"\n",(0,i.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L1380",children:"packages/extension-api/src/extension-api.d.ts:1380"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"options",children:"options"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"options"}),": ",(0,i.jsx)(s.a,{href:"/api/interfaces/WebviewOptions",children:(0,i.jsx)(s.code,{children:"WebviewOptions"})})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Content settings for the webview."}),"\n",(0,i.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L1365",children:"packages/extension-api/src/extension-api.d.ts:1365"})}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"aswebviewuri",children:"asWebviewUri()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"asWebviewUri"}),"(",(0,i.jsx)(s.code,{children:"localResource"}),"): ",(0,i.jsx)(s.a,{href:"/api/classes/Uri",children:(0,i.jsx)(s.code,{children:"Uri"})})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Convert a uri for the local file system to one that can be used inside webviews."}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"localResource"}),": ",(0,i.jsx)(s.a,{href:"/api/classes/Uri",children:(0,i.jsx)(s.code,{children:"Uri"})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/api/classes/Uri",children:(0,i.jsx)(s.code,{children:"Uri"})})}),"\n",(0,i.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L1390",children:"packages/extension-api/src/extension-api.d.ts:1390"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"postmessage",children:"postMessage()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"postMessage"}),"(",(0,i.jsx)(s.code,{children:"message"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"< ",(0,i.jsx)(s.code,{children:"boolean"})," >"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Post a message to the webview content."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"message"}),": ",(0,i.jsx)(s.code,{children:"unknown"})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"< ",(0,i.jsx)(s.code,{children:"boolean"})," >"]}),"\n",(0,i.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L1385",children:"packages/extension-api/src/extension-api.d.ts:1385"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71670:(e,s,n)=>{n.d(s,{Z:()=>t,a:()=>o});var i=n(27378);const r={},c=i.createContext(r);function o(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);