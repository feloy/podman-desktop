"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77060],{44215:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>r});var s=i(24246),d=i(71670);const t={},l="Interface: WebviewPanel",c={id:"interfaces/WebviewPanel",title:"Interface: WebviewPanel",description:"A panel that contains a webview.",source:"@site/api/interfaces/WebviewPanel.md",sourceDirName:"interfaces",slug:"/interfaces/WebviewPanel",permalink:"/api/interfaces/WebviewPanel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"WebviewOptions",permalink:"/api/interfaces/WebviewOptions"},next:{title:"WebviewPanelOnDidChangeViewStateEvent",permalink:"/api/interfaces/WebviewPanelOnDidChangeViewStateEvent"}},a={},r=[{value:"Properties",id:"properties",level:2},{value:"active",id:"active",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"iconPath?",id:"iconpath",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"onDidChangeViewState",id:"ondidchangeviewstate",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"onDidDispose",id:"ondiddispose",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"title",id:"title",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"viewType",id:"viewtype",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"visible",id:"visible",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"webview",id:"webview",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"reveal()",id:"reveal",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-9",level:4}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"interface-webviewpanel",children:"Interface: WebviewPanel"}),"\n",(0,s.jsx)(n.p,{children:"A panel that contains a webview."}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"active",children:"active"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"active"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether the panel is active (focused by the user)."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/407fe7d905b1b14d139265560af6e4367da9bdbc/packages/extension-api/src/extension-api.d.ts#L1753",children:"packages/extension-api/src/extension-api.d.ts:1753"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"iconpath",children:"iconPath?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"iconPath"}),": ",(0,s.jsx)(n.a,{href:"/api/classes/Uri",children:(0,s.jsx)(n.code,{children:"Uri"})})," | ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Icon for the panel shown in UI."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/407fe7d905b1b14d139265560af6e4367da9bdbc/packages/extension-api/src/extension-api.d.ts#L1732",children:"packages/extension-api/src/extension-api.d.ts:1732"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ondidchangeviewstate",children:"onDidChangeViewState"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"onDidChangeViewState"}),": ",(0,s.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,s.jsx)(n.code,{children:"Event"})}),"<",(0,s.jsx)(n.a,{href:"/api/interfaces/WebviewPanelOnDidChangeViewStateEvent",children:(0,s.jsx)(n.code,{children:"WebviewPanelOnDidChangeViewStateEvent"})}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Fired when the panel's view state changes."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/407fe7d905b1b14d139265560af6e4367da9bdbc/packages/extension-api/src/extension-api.d.ts#L1763",children:"packages/extension-api/src/extension-api.d.ts:1763"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ondiddispose",children:"onDidDispose"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"onDidDispose"}),": ",(0,s.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,s.jsx)(n.code,{children:"Event"})}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Fired when the panel is disposed."}),"\n",(0,s.jsxs)(n.p,{children:["This may be because the user closed the panel or because ",(0,s.jsx)(n.code,{children:".dispose()"})," was\ncalled on it."]}),"\n",(0,s.jsx)(n.p,{children:"Trying to use the panel after it has been disposed throws an exception."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/407fe7d905b1b14d139265560af6e4367da9bdbc/packages/extension-api/src/extension-api.d.ts#L1773",children:"packages/extension-api/src/extension-api.d.ts:1773"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"title",children:"title"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"title"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Title of the panel shown in UI."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/407fe7d905b1b14d139265560af6e4367da9bdbc/packages/extension-api/src/extension-api.d.ts#L1727",children:"packages/extension-api/src/extension-api.d.ts:1727"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"viewtype",children:"viewType"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"viewType"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Identifies the type of the webview panel."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/407fe7d905b1b14d139265560af6e4367da9bdbc/packages/extension-api/src/extension-api.d.ts#L1722",children:"packages/extension-api/src/extension-api.d.ts:1722"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"visible",children:"visible"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"visible"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether the panel is visible."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/407fe7d905b1b14d139265560af6e4367da9bdbc/packages/extension-api/src/extension-api.d.ts#L1758",children:"packages/extension-api/src/extension-api.d.ts:1758"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"webview",children:"webview"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"webview"}),": ",(0,s.jsx)(n.a,{href:"/api/interfaces/Webview",children:(0,s.jsx)(n.code,{children:"Webview"})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/interfaces/Webview",children:(0,s.jsx)(n.code,{children:"Webview"})})," belonging to the panel."]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/407fe7d905b1b14d139265560af6e4367da9bdbc/packages/extension-api/src/extension-api.d.ts#L1748",children:"packages/extension-api/src/extension-api.d.ts:1748"})}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"dispose"}),"(): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Dispose of the webview panel."}),"\n",(0,s.jsxs)(n.p,{children:["This closes the panel if it showing and disposes of the resources owned by the webview.\nWebview panels are also disposed when the user closes the webview panel. Both cases\nfire the ",(0,s.jsx)(n.code,{children:"onDispose"})," event."]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/407fe7d905b1b14d139265560af6e4367da9bdbc/packages/extension-api/src/extension-api.d.ts#L1788",children:"packages/extension-api/src/extension-api.d.ts:1788"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"reveal",children:"reveal()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"reveal"}),"(",(0,s.jsx)(n.code,{children:"preserveFocus"}),"?): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Show the webview panel."}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"preserveFocus?"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"true"}),", the webview will not take focus."]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/407fe7d905b1b14d139265560af6e4367da9bdbc/packages/extension-api/src/extension-api.d.ts#L1779",children:"packages/extension-api/src/extension-api.d.ts:1779"})})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>l});var s=i(27378);const d={},t=s.createContext(d);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);