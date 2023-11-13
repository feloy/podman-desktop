"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4386],{35318:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>g});var n=t(27378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=n.createContext({}),s=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(m.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),g=o,f=p["".concat(m,".").concat(g)]||p[g]||l[g]||i;return t?n.createElement(f,a(a({ref:r},d),{},{components:t})):n.createElement(f,a({ref:r},d))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var m in r)hasOwnProperty.call(r,m)&&(c[m]=r[m]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},14794:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=t(25773),o=(t(27378),t(35318));const i={sidebar_position:25,title:"Migrating from Docker",description:"Migrate transparently from Docker to Podman, and continue using familiar workflows.",keywords:["podman desktop","podman","containers","migrating","docker"],tags:["migrating-from-docker"]},a="Migration from Docker to Podman Desktop",c={unversionedId:"migrating-from-docker/index",id:"migrating-from-docker/index",title:"Migrating from Docker",description:"Migrate transparently from Docker to Podman, and continue using familiar workflows.",source:"@site/docs/migrating-from-docker/index.md",sourceDirName:"migrating-from-docker",slug:"/migrating-from-docker/",permalink:"/docs/migrating-from-docker/",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/migrating-from-docker/index.md",tags:[{label:"migrating-from-docker",permalink:"/docs/tags/migrating-from-docker"}],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25,title:"Migrating from Docker",description:"Migrate transparently from Docker to Podman, and continue using familiar workflows.",keywords:["podman desktop","podman","containers","migrating","docker"],tags:["migrating-from-docker"]},sidebar:"mySidebar",previous:{title:"Setting Podman machine default connection",permalink:"/docs/podman/setting-podman-machine-default-connection"},next:{title:"Importing saved containers",permalink:"/docs/migrating-from-docker/importing-saved-containers"}},m={},s=[],d={toc:s};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migration-from-docker-to-podman-desktop"},"Migration from Docker to Podman Desktop"),(0,o.kt)("p",null,"When you have used Docker in the past, you can continue using familiar workflows with Podman Desktop:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/migrating-from-docker/importing-saved-containers"},"Importing saved containers to Podman to continue using familiar containers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/migrating-from-docker/using-the-docker_host-environment-variable"},"Using the ",(0,o.kt)("inlineCode",{parentName:"a"},"DOCKER_HOST")," environment variable to let your tools communicate directly with the Podman socket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/migrating-from-docker/using-podman-mac-helper"},"Using the ",(0,o.kt)("inlineCode",{parentName:"a"},"podman-mac-helper")," tool on macOS to redirect the Docker socket to the Podman socket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/migrating-from-docker/emulating-docker-cli-with-podman"},"Emulating Docker CLI with Podman to continue using tools depending on the Docker CLI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/migrating-from-docker/verifying-your-tools-are-using-podman"},"Verifying that your tools are using Podman"))))}l.isMDXComponent=!0}}]);