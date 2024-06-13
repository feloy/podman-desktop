"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97002],{12629:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=s(24246),t=s(71670);const a={},o="Namespace: extensions",r={id:"namespaces/extensions/index",title:"Namespace: extensions",description:"Namespace for dealing with installed extensions. Extensions are represented",source:"@site/api/namespaces/extensions/index.md",sourceDirName:"namespaces/extensions",slug:"/namespaces/extensions/",permalink:"/api/namespaces/extensions/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"openExternal",permalink:"/api/namespaces/env/functions/openExternal"},next:{title:"all",permalink:"/api/namespaces/extensions/variables/all"}},c={},l=[{value:"Index",id:"index",level:2},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"namespace-extensions",children:"Namespace: extensions"}),"\n",(0,i.jsxs)(n.p,{children:["Namespace for dealing with installed extensions. Extensions are represented\nby an ",(0,i.jsx)(n.a,{href:"/api/interfaces/Extension",children:"Extension"}),"-interface which enables reflection on them."]}),"\n",(0,i.jsxs)(n.p,{children:["Extension writers can provide APIs to other extensions by returning their API public\nsurface from the ",(0,i.jsx)(n.code,{children:"activate"}),"-call."]}),"\n",(0,i.jsxs)(n.p,{children:["When depending on the API of another extension add an ",(0,i.jsx)(n.code,{children:"extensionDependencies"}),"-entry\nto ",(0,i.jsx)(n.code,{children:"package.json"}),", and use the ",(0,i.jsx)(n.a,{href:"/api/namespaces/extensions/functions/getExtension",children:"getExtension"}),"-function\nand the ",(0,i.jsx)(n.a,{href:"/api/interfaces/Extension#exports",children:"exports"}),"-property, like below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const podmanExtension = extensions.getExtension('podman-desktop.podman');\nconst podmanExtensionAPI = podmanExtension.exports;\n\npodmanExtensionAPI....\n"})}),"\n",(0,i.jsx)(n.h2,{id:"index",children:"Index"}),"\n",(0,i.jsx)(n.h3,{id:"variables",children:"Variables"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/namespaces/extensions/variables/all",children:"all"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/namespaces/extensions/functions/getExtension",children:"getExtension"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/namespaces/extensions/functions/onDidChange",children:"onDidChange"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var i=s(27378);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);