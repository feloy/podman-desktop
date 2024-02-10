"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53273],{47449:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=s(24246),i=s(71670);const o={},r="Interface: AuthenticationGetSessionOptions",c={id:"interfaces/AuthenticationGetSessionOptions",title:"Interface: AuthenticationGetSessionOptions",description:"Options to be used when getting an AuthenticationSession from an AuthenticationProvider.",source:"@site/api/interfaces/AuthenticationGetSessionOptions.md",sourceDirName:"interfaces",slug:"/interfaces/AuthenticationGetSessionOptions",permalink:"/api/interfaces/AuthenticationGetSessionOptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Interface: AuthConfig",permalink:"/api/interfaces/AuthConfig"},next:{title:"Interface: AuthenticationProvider",permalink:"/api/interfaces/AuthenticationProvider"}},a={},l=[{value:"Properties",id:"properties",level:2},{value:"clearSessionPreference?",id:"clearsessionpreference",level:3},{value:"Source",id:"source",level:4},{value:"createIfNone?",id:"createifnone",level:3},{value:"Source",id:"source-1",level:4},{value:"forceNewSession?",id:"forcenewsession",level:3},{value:"Source",id:"source-2",level:4},{value:"silent?",id:"silent",level:3},{value:"Source",id:"source-3",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"interface-authenticationgetsessionoptions",children:"Interface: AuthenticationGetSessionOptions"}),"\n",(0,t.jsxs)(n.p,{children:["Options to be used when getting an ",(0,t.jsx)(n.a,{href:"#AuthenticationSession",children:"AuthenticationSession"})," from an ",(0,t.jsx)(n.a,{href:"#AuthenticationProvider",children:"AuthenticationProvider"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"clearsessionpreference",children:"clearSessionPreference?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"optional"})})," ",(0,t.jsx)(n.strong,{children:"clearSessionPreference"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Whether the existing user session preference should be cleared."}),"\n",(0,t.jsxs)(n.p,{children:["For authentication providers that support being signed into multiple accounts at once, the user will be\nprompted to select an account to use when ",(0,t.jsx)(n.a,{href:"#authentication.getSession",children:"getSession"})," is called. This preference\nis remembered until ",(0,t.jsx)(n.a,{href:"#authentication.getSession",children:"getSession"})," is called with this flag."]}),"\n",(0,t.jsx)(n.p,{children:"Defaults to false."}),"\n",(0,t.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L2825",children:"packages/extension-api/src/extension-api.d.ts:2825"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"createifnone",children:"createIfNone?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"optional"})})," ",(0,t.jsx)(n.strong,{children:"createIfNone"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Whether login should be performed if there is no matching session."}),"\n",(0,t.jsx)(n.p,{children:"If true, a modal dialog will be shown asking the user to sign in. If false, a numbered badge will be shown\non the accounts activity bar icon. An entry for the extension will be added under the menu to sign in. This\nallows quietly prompting the user to sign in."}),"\n",(0,t.jsx)(n.p,{children:"If there is a matching session but the extension has not been granted access to it, setting this to true\nwill also result in an immediate modal dialog, and false will add a numbered badge to the accounts icon."}),"\n",(0,t.jsx)(n.p,{children:"Defaults to false."}),"\n",(0,t.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L2814",children:"packages/extension-api/src/extension-api.d.ts:2814"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"forcenewsession",children:"forceNewSession?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"optional"})})," ",(0,t.jsx)(n.strong,{children:"forceNewSession"}),": ",(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Whether we should attempt to reauthenticate even if there is already a session available."}),"\n",(0,t.jsx)(n.p,{children:"If true, a modal dialog will be shown asking the user to sign in again. This is mostly used for scenarios\nwhere the token needs to be re minted because it has lost some authorization."}),"\n",(0,t.jsxs)(n.p,{children:["If there are no existing sessions and forceNewSession is true, it will behave identically to\n",(0,t.jsx)(n.a,{href:"/api/interfaces/AuthenticationGetSessionOptions#createifnone",children:"createIfNone"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This defaults to false."}),"\n",(0,t.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L2838",children:"packages/extension-api/src/extension-api.d.ts:2838"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"silent",children:"silent?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"optional"})})," ",(0,t.jsx)(n.strong,{children:"silent"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Whether we should show the indication to sign in in the Accounts menu."}),"\n",(0,t.jsx)(n.p,{children:"If false, the user will be shown a badge on the Accounts menu with an option to sign in for the extension.\nIf true, no indication will be shown."}),"\n",(0,t.jsx)(n.p,{children:"Defaults to false."}),"\n",(0,t.jsxs)(n.p,{children:["Note: you cannot use this option with any other options that prompt the user like ",(0,t.jsx)(n.a,{href:"/api/interfaces/AuthenticationGetSessionOptions#createifnone",children:"createIfNone"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/c973aa4/packages/extension-api/src/extension-api.d.ts#L2850",children:"packages/extension-api/src/extension-api.d.ts:2850"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(27378);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);