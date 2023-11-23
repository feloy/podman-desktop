"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5414],{41606:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=i(24246),r=i(71670);const s={sidebar_position:3,title:"Configuring Podman for Minikube",description:"Configuring Podman for Minikube on Windows Subsystem for Linux (WSL).",keywords:["podman desktop","podman","containers","migrating","kubernetes","minikube"],tags:["migrating-to-kubernetes","minikube"]},t="Configuring Podman for Minikube on Windows Subsystem for Linux (WSL)",a={id:"minikube/configuring-podman-for-minikube-on-windows",title:"Configuring Podman for Minikube",description:"Configuring Podman for Minikube on Windows Subsystem for Linux (WSL).",source:"@site/docs/minikube/configuring-podman-for-minikube-on-windows.md",sourceDirName:"minikube",slug:"/minikube/configuring-podman-for-minikube-on-windows",permalink:"/docs/minikube/configuring-podman-for-minikube-on-windows",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/minikube/configuring-podman-for-minikube-on-windows.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"minikube",permalink:"/docs/tags/minikube"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Configuring Podman for Minikube",description:"Configuring Podman for Minikube on Windows Subsystem for Linux (WSL).",keywords:["podman desktop","podman","containers","migrating","kubernetes","minikube"],tags:["migrating-to-kubernetes","minikube"]},sidebar:"mySidebar",previous:{title:"Installing the `minikube` CLI",permalink:"/docs/minikube/installing"},next:{title:"Creating a Minikube cluster",permalink:"/docs/minikube/creating-a-minikube-cluster"}},d={},u=[{value:"Procedure",id:"procedure",level:4}];function c(n){const e={code:"code",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"configuring-podman-for-minikube-on-windows-subsystem-for-linux-wsl",children:"Configuring Podman for Minikube on Windows Subsystem for Linux (WSL)"}),"\n",(0,o.jsx)(e.p,{children:"When you create a Podman machine, Podman creates the machine in rootless mode."}),"\n",(0,o.jsx)(e.p,{children:"With a Podman machine running on WSL, Minikube:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Requires a rootful machine."}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Therefore, set the Podman machine to rootful mode."}),"\n",(0,o.jsx)(e.h4,{id:"procedure",children:"Procedure"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Stop the Podman machine:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell-session",children:"$ podman machine stop\n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Set the Podman machine in rooful mode:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell-session",children:"$ podman machine set --rootful\n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Start the Podman machine:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell-session",children:"$ podman machine start\n"})}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},71670:(n,e,i)=>{i.d(e,{Z:()=>a,a:()=>t});var o=i(27378);const r={},s=o.createContext(r);function t(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);