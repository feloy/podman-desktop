"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16115],{97623:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"type-aliases/ProviderResult","title":"Type Alias: ProviderResult\\\\<T\\\\>","description":"ProviderResult\\\\: T \\\\| undefined \\\\| Promise\\\\","source":"@site/api/type-aliases/ProviderResult.md","sourceDirName":"type-aliases","slug":"/type-aliases/ProviderResult","permalink":"/api/type-aliases/ProviderResult","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ProviderLinks","permalink":"/api/type-aliases/ProviderLinks"},"next":{"title":"ProviderStatus","permalink":"/api/type-aliases/ProviderStatus"}}');var s=r(62540),i=r(43023);const a={},o="Type Alias: ProviderResult<T>",d={},c=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"type-alias-providerresultt",children:"Type Alias: ProviderResult<T>"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ProviderResult"}),"<",(0,s.jsx)(n.code,{children:"T"}),">: ",(0,s.jsx)(n.code,{children:"T"})," | ",(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"T"})," | ",(0,s.jsx)(n.code,{children:"undefined"}),">"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A provider result represents the values a provider, like the ",(0,s.jsx)(n.a,{href:"/api/interfaces/ImageCheckerProvider",children:(0,s.jsx)(n.code,{children:"ImageCheckerProvider"})}),",\nmay return. For once this is the actual result type ",(0,s.jsx)(n.code,{children:"T"}),", like ",(0,s.jsx)(n.code,{children:"ImageChecks"}),", or a Promise that resolves\nto that type ",(0,s.jsx)(n.code,{children:"T"}),". In addition, ",(0,s.jsx)(n.code,{children:"null"})," and ",(0,s.jsx)(n.code,{children:"undefined"})," can be returned - either directly or from a\nPromise."]}),"\n",(0,s.jsxs)(n.p,{children:["The snippets below are all valid implementations of the ",(0,s.jsx)(n.a,{href:"/api/interfaces/ImageCheckerProvider",children:(0,s.jsx)(n.code,{children:"ImageCheckerProvider"})}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"let a: ImageCheckerProvider = {\n check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n   return new ImageChecks();\n }\n\nlet b: ImageCheckerProvider = {\n async check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n\t\treturn new ImageChecks();\n\t}\n}\n\nlet c: ImageCheckerProvider = {\n check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n\t\treturn; // undefined\n\t}\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"T"})]}),"\n",(0,s.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/feloy/podman-desktop/blob/d83c4c010daa72e841c395f84774689fdaef0ad8/packages/extension-api/src/extension-api.d.ts#L308",children:"packages/extension-api/src/extension-api.d.ts:308"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},43023:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(63696);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);