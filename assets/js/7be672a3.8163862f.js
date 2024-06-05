"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53691],{47208:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=i(24246),r=i(71670);const o={sidebar_position:10,title:"Push an image to Minikube",description:"Pushing an image to your Minikube cluster",keywords:["podman desktop","podman","containers","images","migrating","kubernetes"],tags:["migrating-to-kubernetes","images"]},t="Pushing an image to your local Minikube-powered Kubernetes cluster",a={id:"kubernetes/minikube/pushing-an-image-to-minikube",title:"Push an image to Minikube",description:"Pushing an image to your Minikube cluster",source:"@site/docs/kubernetes/minikube/pushing-an-image-to-minikube.md",sourceDirName:"kubernetes/minikube",slug:"/kubernetes/minikube/pushing-an-image-to-minikube",permalink:"/docs/kubernetes/minikube/pushing-an-image-to-minikube",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/minikube/pushing-an-image-to-minikube.md",tags:[{inline:!0,label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{inline:!0,label:"images",permalink:"/docs/tags/images"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Push an image to Minikube",description:"Pushing an image to your Minikube cluster",keywords:["podman desktop","podman","containers","images","migrating","kubernetes"],tags:["migrating-to-kubernetes","images"]},sidebar:"mySidebar",previous:{title:"Push an image to Lima",permalink:"/docs/kubernetes/lima/pushing-an-image-to-lima"},next:{title:"Podman AI Lab",permalink:"/docs/ai-lab/"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Icon:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pushing-an-image-to-your-local-minikube-powered-kubernetes-cluster",children:"Pushing an image to your local Minikube-powered Kubernetes cluster"}),"\n",(0,s.jsx)(n.p,{children:"With Podman Desktop, you can push an image to your local Minikube-powered Kubernetes cluster."}),"\n",(0,s.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/containers",children:"You onboarded a container engine"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/minikube",children:"You onboarded a Minikube cluster"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/minikube/working-with-your-local-minikube-cluster",children:"You have set your Kubernetes context to your Minikube cluster"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Your image is available on the ",(0,s.jsx)(n.strong,{children:"Images"})," page: ",(0,s.jsx)(n.code,{children:"<my_image>:<my_tag>"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open ",(0,s.jsxs)(n.strong,{children:["Podman Desktop dashboard > ",(0,s.jsx)(i,{icon:"fa-solid fa-cloud",size:"lg"})," Images"]}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-search",size:"lg"})," Search images"]}),": ",(0,s.jsx)(n.code,{children:"<your_image>:<your_tag>"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,s.jsx)(i,{icon:"fa-solid fa-ellipsis-v",size:"lg"})," Push image to Minikube cluster"]}),"."]}),"\n",(0,s.jsx)(n.li,{children:"If you created many Minikube clusters, select your Minikube cluster from the list."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,s.jsx)(n.p,{children:"Minikube enables you to list loaded images, using:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-command",children:"$ minikube image list\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can also create a Pod that uses the loaded image:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"verify_my_image.yaml"})," Kubernetes YAML file on your workstation.\nReplace the placeholders:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Pod ",(0,s.jsx)(n.code,{children:"name"})," and container ",(0,s.jsx)(n.code,{children:"name"})," value must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character."]}),"\n",(0,s.jsxs)(n.li,{children:["Container ",(0,s.jsx)(n.code,{children:"image"})," value is the image you pushed."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: <verify-my-image>\nspec:\n  containers:\n    - name: <my-image>\n      image: <my_image>:<my_tag>\n      imagePullPolicy: Never\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-cubes",size:"lg"})," Pods > Play Kubernetes YAML"]}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Kubernetes YAML file"}),": select your ",(0,s.jsx)(n.code,{children:"verify_my_image.yaml"})," file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Select Runtime"}),": ",(0,s.jsx)(n.strong,{children:"Using a Kubernetes cluster"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Play"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Done"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-cubes",size:"lg"})," Pods"]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-search",size:"lg"})," Search pods"]}),": ",(0,s.jsx)(n.code,{children:"<verify-my-image>"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The pod ",(0,s.jsx)(n.strong,{children:"Status"})," is ",(0,s.jsx)(n.strong,{children:"Running"}),"."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>t});var s=i(27378);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);