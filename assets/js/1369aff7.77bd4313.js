"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60404],{92755:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"kubernetes/lima/pushing-an-image-to-lima","title":"Push an image to Lima","description":"Pushing an image to your Lima cluster","source":"@site/docs/kubernetes/lima/pushing-an-image-to-lima.md","sourceDirName":"kubernetes/lima","slug":"/kubernetes/lima/pushing-an-image-to-lima","permalink":"/docs/kubernetes/lima/pushing-an-image-to-lima","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/kubernetes/lima/pushing-an-image-to-lima.md","tags":[{"inline":true,"label":"migrating-to-kubernetes","permalink":"/docs/tags/migrating-to-kubernetes"},{"inline":true,"label":"images","permalink":"/docs/tags/images"}],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Push an image to Lima","description":"Pushing an image to your Lima cluster","keywords":["podman desktop","podman","containers","images","migrating","kubernetes"],"tags":["migrating-to-kubernetes","images"]},"sidebar":"mySidebar","previous":{"title":"Push an image to Kind","permalink":"/docs/kubernetes/kind/pushing-an-image-to-kind"},"next":{"title":"Push an image to Minikube","permalink":"/docs/kubernetes/minikube/pushing-an-image-to-minikube"}}');var r=i(62540),a=i(43023);const o={sidebar_position:10,title:"Push an image to Lima",description:"Pushing an image to your Lima cluster",keywords:["podman desktop","podman","containers","images","migrating","kubernetes"],tags:["migrating-to-kubernetes","images"]},t="Pushing an image to your local Lima-powered Kubernetes cluster",l={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"pushing-an-image-to-your-local-lima-powered-kubernetes-cluster",children:"Pushing an image to your local Lima-powered Kubernetes cluster"})}),"\n",(0,r.jsx)(n.p,{children:"With Podman Desktop, you can push an image to your local Lima-powered Kubernetes cluster."}),"\n",(0,r.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/containers",children:"You onboarded a container engine"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/lima",children:"You onboarded a Lima cluster"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/kubernetes/existing-kubernetes",children:"You have set your Kubernetes context to your local Lima-powered Kubernetes cluster"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Your image is available on the ",(0,r.jsx)(n.strong,{children:"Images"})," page: ",(0,r.jsx)(n.code,{children:"<my_image>:<my_tag>"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open ",(0,r.jsxs)(n.strong,{children:["Podman Desktop dashboard > ",(0,r.jsx)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images"]}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)("icon",{icon:"fa-solid fa-search",size:"lg"})," Search images"]}),": ",(0,r.jsx)(n.code,{children:"<your_image>:<your_tag>"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,r.jsx)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," Push image to Lima cluster"]}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,r.jsx)(n.p,{children:"Lima enables you to list loaded images, using:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ LIMA_INSTANCE=<name> lima sudo crictl images\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also create a Pod that uses the loaded image:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"verify_my_image.yaml"})," Kubernetes YAML file on your workstation.\nReplace the placeholders:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Pod ",(0,r.jsx)(n.code,{children:"name"})," and container ",(0,r.jsx)(n.code,{children:"name"})," value must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character."]}),"\n",(0,r.jsxs)(n.li,{children:["Container ",(0,r.jsx)(n.code,{children:"image"})," value is the image you pushed."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: <verify-my-image>\nspec:\n  containers:\n    - name: <my-image>\n      image: <my_image>:<my_tag>\n      imagePullPolicy: Never\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Pods > Play Kubernetes YAML"]}),"."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Kubernetes YAML file"}),": select your ",(0,r.jsx)(n.code,{children:"verify_my_image.yaml"})," file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Select Runtime"}),": ",(0,r.jsx)(n.strong,{children:"Using a Kubernetes cluster"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Play"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Done"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Pods"]}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)("icon",{icon:"fa-solid fa-search",size:"lg"})," Search pods"]}),": ",(0,r.jsx)(n.code,{children:"<verify-my-image>"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The pod ",(0,r.jsx)(n.strong,{children:"Status"})," is ",(0,r.jsx)(n.strong,{children:"Running"}),"."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var s=i(63696);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);