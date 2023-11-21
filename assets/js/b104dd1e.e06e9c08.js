"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6623],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=n(25773),r=(n(27378),n(35318));const a={title:"Running Compose files",description:"With Podman Desktop, you can manage multi-container applications defined in Compose files.",sidebar_position:3,keywords:["compose"],tags:["compose"]},i=void 0,p={unversionedId:"compose/running-compose",id:"compose/running-compose",title:"Running Compose files",description:"With Podman Desktop, you can manage multi-container applications defined in Compose files.",source:"@site/docs/compose/running-compose.md",sourceDirName:"compose",slug:"/compose/running-compose",permalink:"/docs/compose/running-compose",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/compose/running-compose.md",tags:[{label:"compose",permalink:"/docs/tags/compose"}],version:"current",sidebarPosition:3,frontMatter:{title:"Running Compose files",description:"With Podman Desktop, you can manage multi-container applications defined in Compose files.",sidebar_position:3,keywords:["compose"],tags:["compose"]},sidebar:"mySidebar",previous:{title:"Setting up Compose",permalink:"/docs/compose/setting-up-compose"},next:{title:"Kubernetes",permalink:"/docs/kubernetes/"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],c=(m="Icon",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const u={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With Podman Desktop, you can manage multi-container applications defined in a Compose file."),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/onboarding-for-containers/installing-podman"},"Podman")," 4.7.0 or greater."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/compose/setting-up-compose"},"You have set up Compose"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/compose-spec/compose-spec/blob/master/spec.md#compose-file"},"You have a Compose file"),", such as ",(0,r.kt)("inlineCode",{parentName:"li"},"compose.yaml"),".")),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the command in a terminal:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ podman compose --file compose.yaml up --detach\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("p",{parentName:"li"},"(Alternatively) With an older Podman version, run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose"),":")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/migrating-from-docker/using-the-docker_host-environment-variable"},"Set the DOCKER_HOST variable"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"podman compose"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ docker-compose --file compose.yaml up --detach\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("p",{parentName:"li"},"(Optionally) Learn about Compose commands:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ podman compose --help\n"))))),(0,r.kt)("h4",{id:"verification"},"Verification"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Compose engine starts the containers and services, and adds a label to each resource:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Container label: ",(0,r.kt)("inlineCode",{parentName:"li"},"com.docker.compose.project")),(0,r.kt)("li",{parentName:"ul"},"Service label: ",(0,r.kt)("inlineCode",{parentName:"li"},"com.docker.compose.service")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Podman Desktop detects the Compose labels, and displays the container group as a group of containers."),(0,r.kt)("p",{parentName:"li"},"The Podman Desktop ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(c,{icon:"fa-solid fa-cube",size:"lg",mdxType:"Icon"})," Containers")," list displays the containers created by Compose grouped in a container group with a ",(0,r.kt)("inlineCode",{parentName:"p"},"(compose)")," suffix, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"flask-redis (compose)"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img2",src:n(64228).Z,width:"1017",height:"742"})))}d.isMDXComponent=!0},64228:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/compose-in-containers-view-b93a1a1667842a10985bf3203a035f3b.png"}}]);