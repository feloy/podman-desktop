"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3840],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=i,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(25773),i=(n(27378),n(35318));const a={sidebar_position:4,title:"Creating a Kind cluster",description:"Creating a local Kind-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},o="Creating a local Kind-powered Kubernetes cluster",l={unversionedId:"kind/creating-a-kind-cluster",id:"kind/creating-a-kind-cluster",title:"Creating a Kind cluster",description:"Creating a local Kind-powered Kubernetes cluster.",source:"@site/docs/kind/creating-a-kind-cluster.md",sourceDirName:"kind",slug:"/kind/creating-a-kind-cluster",permalink:"/docs/kind/creating-a-kind-cluster",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kind/creating-a-kind-cluster.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"kind",permalink:"/docs/tags/kind"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Creating a Kind cluster",description:"Creating a local Kind-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},sidebar:"mySidebar",previous:{title:"Configuring Podman for Kind",permalink:"/docs/kind/configuring-podman-for-kind-on-windows"},next:{title:"Restarting your Kind cluster",permalink:"/docs/kind/restarting-your-kind-cluster"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],p=(d="Icon",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var d;const u={toc:c};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-a-local-kind-powered-kubernetes-cluster"},"Creating a local Kind-powered Kubernetes cluster"),(0,i.kt)("p",null,"You can create multiple local Kind-powered Kubernetes clusters."),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/kind/installing"},"You installed Kind"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/kind/configuring-podman-for-kind-on-windows"},"On Windows, you configured Podman"),".")),(0,i.kt)("h4",{id:"procedure"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(p,{icon:"fa-solid fa-cog",size:"lg",mdxType:"Icon"})," Settings > Resources"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Kind tile, click on the ",(0,i.kt)("strong",{parentName:"p"},"Create new ...")," button.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose your options, and click the ",(0,i.kt)("strong",{parentName:"p"},"Create")," button."),(0,i.kt)("p",{parentName:"li"},"The defaults are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"kind-cluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Provider Type"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"podman")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HTTP Port"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"9090")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HTTPS Port"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"9443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Setup an ingress controller (Contour ",(0,i.kt)("a",{parentName:"strong",href:"https://projectcontour.io"},"https://projectcontour.io"),")"),": Enabled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Node\u2019s container image (Available image tags on ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/kubernetes-sigs/kind/releases"},"kind/releases"),")"),": Left empty to use latest."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(Optionally) Click the ",(0,i.kt)("strong",{parentName:"p"},"Show logs")," button to display the logs.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After successful creation, click on the ",(0,i.kt)("strong",{parentName:"p"},"Go back to resources")," button"))),(0,i.kt)("h4",{id:"verification"},"Verification"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(p,{icon:"fa-solid fa-cog",size:"lg",mdxType:"Icon"})," Settings > Resources"),", in the ",(0,i.kt)("strong",{parentName:"li"},"Kind")," tile, your ",(0,i.kt)("inlineCode",{parentName:"li"},"<kind-cluster>")," instance is running."),(0,i.kt)("li",{parentName:"ol"},"In the Podman Desktop tray, open the ",(0,i.kt)("strong",{parentName:"li"},"Kubernetes")," menu, you can set the context to your Kind cluster: ",(0,i.kt)("inlineCode",{parentName:"li"},"kind-<kind-cluster>"),".")))}k.isMDXComponent=!0}}]);