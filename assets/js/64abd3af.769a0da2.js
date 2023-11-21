"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[745],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,g=d["".concat(s,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(25773),i=(n(27378),n(35318));const r={sidebar_position:10,title:"Push an image to Kind",description:"Pushing an image to your Kind cluster",keywords:["podman desktop","podman","containers","images","migrating","kubernetes"],tags:["migrating-to-kubernetes","images"]},o="Pushing an image to your local Kind-powered Kubernetes cluster",l={unversionedId:"kind/pushing-an-image-to-kind",id:"kind/pushing-an-image-to-kind",title:"Push an image to Kind",description:"Pushing an image to your Kind cluster",source:"@site/docs/kind/pushing-an-image-to-kind.md",sourceDirName:"kind",slug:"/kind/pushing-an-image-to-kind",permalink:"/docs/kind/pushing-an-image-to-kind",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kind/pushing-an-image-to-kind.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"images",permalink:"/docs/tags/images"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Push an image to Kind",description:"Pushing an image to your Kind cluster",keywords:["podman desktop","podman","containers","images","migrating","kubernetes"],tags:["migrating-to-kubernetes","images"]},sidebar:"mySidebar",previous:{title:"Building and testing an image",permalink:"/docs/kind/building-an-image-and-testing-it-in-kind"},next:{title:"Minikube",permalink:"/docs/minikube/"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],m=(u="Icon",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var u;const d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pushing-an-image-to-your-local-kind-powered-kubernetes-cluster"},"Pushing an image to your local Kind-powered Kubernetes cluster"),(0,i.kt)("p",null,"With Podman Desktop, you can push an image to your local Kind-powered Kubernetes cluster."),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/containers"},"You onboarded a container engine"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/kind"},"You onboarded a Kind cluster"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/kind/working-with-your-local-kind-cluster"},"You have set your Kubernetes context to your local Kind-powered Kubernetes cluster"),"."),(0,i.kt)("li",{parentName:"ul"},"Your image is available on the ",(0,i.kt)("strong",{parentName:"li"},"Images")," page: ",(0,i.kt)("inlineCode",{parentName:"li"},"<my_image>:<my_tag>"),".")),(0,i.kt)("h4",{id:"procedure"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},"Podman Desktop dashboard > ",(0,i.kt)(m,{icon:"fa-solid fa-cloud",size:"lg",mdxType:"Icon"})," Images"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(m,{icon:"fa-solid fa-search",size:"lg",mdxType:"Icon"})," Search images"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"<your_image>:<your_tag>"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(m,{icon:"fa-solid fa-ellipsis-v",size:"lg",mdxType:"Icon"})," > ",(0,i.kt)(m,{icon:"fa-solid fa-ellipsis-v",size:"lg",mdxType:"Icon"})," Push image to Kind cluster"),"."),(0,i.kt)("li",{parentName:"ol"},"If you created many Kind clusters, select your Kind cluster from the list.")),(0,i.kt)("h4",{id:"verification"},"Verification"),(0,i.kt)("p",null,"Kind does not enable you to list loaded images.\nTherefore, create a Pod that uses the loaded image."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"verify_my_image.yaml")," Kubernetes YAML file on your workstation.\nReplace the placeholders:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pod ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," and container ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," value must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character."),(0,i.kt)("li",{parentName:"ul"},"Container ",(0,i.kt)("inlineCode",{parentName:"li"},"image")," value is the image you pushed.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: <verify-my-image>\nspec:\n  containers:\n    - name: <my-image>\n      image: <my_image>:<my_tag>\n      imagePullPolicy: Never\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(m,{icon:"fa-solid fa-cubes",size:"lg",mdxType:"Icon"})," Pods > Play Kubernetes YAML"),"."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Kubernetes YAML file"),": select your ",(0,i.kt)("inlineCode",{parentName:"li"},"verify_my_image.yaml")," file."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Select Runtime"),": ",(0,i.kt)("strong",{parentName:"li"},"Using a Kubernetes cluster"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Play"),"."),(0,i.kt)("li",{parentName:"ol"},"Clik ",(0,i.kt)("strong",{parentName:"li"},"Done")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(m,{icon:"fa-solid fa-cubes",size:"lg",mdxType:"Icon"})," Pods"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(m,{icon:"fa-solid fa-search",size:"lg",mdxType:"Icon"})," Search pods"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"<verify-my-image>"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The pod ",(0,i.kt)("strong",{parentName:"p"},"Status")," is ",(0,i.kt)("strong",{parentName:"p"},"Running"),"."))))}c.isMDXComponent=!0}}]);