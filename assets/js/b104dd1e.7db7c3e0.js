"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6623],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=n(25773),a=(n(27378),n(35318));const r={title:"Running Compose files",description:"With Podman Desktop, you can manage multi-container applications defined in Compose files.",sidebar_position:3,keywords:["compose"],tags:["compose"]},i=void 0,p={unversionedId:"compose/running-compose",id:"compose/running-compose",title:"Running Compose files",description:"With Podman Desktop, you can manage multi-container applications defined in Compose files.",source:"@site/docs/compose/running-compose.md",sourceDirName:"compose",slug:"/compose/running-compose",permalink:"/docs/compose/running-compose",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/compose/running-compose.md",tags:[{label:"compose",permalink:"/docs/tags/compose"}],version:"current",sidebarPosition:3,frontMatter:{title:"Running Compose files",description:"With Podman Desktop, you can manage multi-container applications defined in Compose files.",sidebar_position:3,keywords:["compose"],tags:["compose"]},sidebar:"mySidebar",previous:{title:"Setting up Compose",permalink:"/docs/compose/setting-up-compose"},next:{title:"Kubernetes",permalink:"/docs/kubernetes/"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With Podman Desktop, you can manage multi-container applications defined in a Compose file."),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/onboarding-for-containers/installing-podman"},"Podman")," 4.7.0 or greater."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/compose/setting-up-compose"},"You have set up Compose"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/compose-spec/compose-spec/blob/master/spec.md#compose-file"},"You have a Compose file"),", such as ",(0,a.kt)("inlineCode",{parentName:"li"},"compose.yaml"),".")),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run the command in a terminal:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ podman compose --file compose.yaml up --detach\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("p",{parentName:"li"},"(Alternatively) With an older Podman version, run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),":")),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/migrating-from-docker/using-the-docker_host-environment-variable"},"Set the DOCKER_HOST variable"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"podman compose"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ docker-compose --file compose.yaml up --detach\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("p",{parentName:"li"},"(Optionally) Learn about Compose commands:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ podman compose --help\n"))))),(0,a.kt)("h4",{id:"verification"},"Verification"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The Compose engine starts the containers and services, and adds a label to each resource:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Container label: ",(0,a.kt)("inlineCode",{parentName:"li"},"com.docker.compose.project")),(0,a.kt)("li",{parentName:"ul"},"Service label: ",(0,a.kt)("inlineCode",{parentName:"li"},"com.docker.compose.service")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Podman Desktop detects the Compose labels, and displays the container group as a group of containers."),(0,a.kt)("p",{parentName:"li"},"The Podman Desktop ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("icon",{icon:"fa-solid fa-cube",size:"lg"})," Containers")," list displays the containers created by Compose grouped in a container group with a ",(0,a.kt)("inlineCode",{parentName:"p"},"(compose)")," suffix, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"flask-redis (compose)"),"."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img2",src:n(64228).Z,width:"1017",height:"742"})))}m.isMDXComponent=!0},64228:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/compose-in-containers-view-b93a1a1667842a10985bf3203a035f3b.png"}}]);