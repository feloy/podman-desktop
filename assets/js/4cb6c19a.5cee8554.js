"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1046],{35318:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),k=i,m=p["".concat(d,".").concat(k)]||p[k]||c[k]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},36376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(25773),i=(t(27378),t(35318));const o={sidebar_position:70,title:"Kind",description:"Kind is one way to get Kubernetes running on your workstation.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},a="Running Kubernetes on your workstation with Kind and Podman",s={unversionedId:"kind/index",id:"kind/index",title:"Kind",description:"Kind is one way to get Kubernetes running on your workstation.",source:"@site/docs/kind/index.md",sourceDirName:"kind",slug:"/kind/",permalink:"/docs/kind/",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kind/index.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"kind",permalink:"/docs/tags/kind"}],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,title:"Kind",description:"Kind is one way to get Kubernetes running on your workstation.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},sidebar:"mySidebar",previous:{title:"Push an image to Kind",permalink:"/docs/kubernetes/kind/pushing-an-image-to-kind"},next:{title:"Installing the `kind` CLI",permalink:"/docs/kind/installing"}},d={},l=[{value:"Procedure",id:"procedure",level:4},{value:"Next steps",id:"next-steps",level:4}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-kubernetes-on-your-workstation-with-kind-and-podman"},"Running Kubernetes on your workstation with Kind and Podman"),(0,i.kt)("p",null,"Podman Desktop can help you run ",(0,i.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"Kind-powered")," local Kubernetes clusters on a container engine, such as Podman."),(0,i.kt)("h4",{id:"procedure"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/kind/installing"},"Install the ",(0,i.kt)("inlineCode",{parentName:"a"},"kind")," CLI"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/kind/configuring-podman-for-kind-on-windows"},"On Windows, configure Podman in rootful mode"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/kind/creating-a-kind-cluster"},"Create a Kind cluster"),".")),(0,i.kt)("h4",{id:"next-steps"},"Next steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/kind/working-with-your-local-kind-cluster"},"Set your Kubernetes context to your local Kind-powered Kubernetes cluster"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/kind/building-an-image-and-testing-it-in-kind"},"Build an image and test it in Kind"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/kind/pushing-an-image-to-kind"},"Push an image to Kind"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/kind/restarting-your-kind-cluster"},"Restart your Kind cluster"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/kind/deleting-your-kind-cluster"},"Delete your Kind cluster"),".")))}c.isMDXComponent=!0}}]);