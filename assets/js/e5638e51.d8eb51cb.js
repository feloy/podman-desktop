"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6766],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(25773),r=(n(27378),n(35318));const a={sidebar_position:1,title:"macOS and Windows",description:"Using Podman Desktop behind a proxy on macOS and Windows.",tags:["podman-desktop","proxy","windows","macos"],keywords:["podman desktop","containers","podman","proxy","windows","macos"]},i="Using Podman Desktop behind a proxy on macOS and Windows",l={unversionedId:"proxy/using-a-proxy",id:"proxy/using-a-proxy",title:"macOS and Windows",description:"Using Podman Desktop behind a proxy on macOS and Windows.",source:"@site/docs/proxy/using-a-proxy.md",sourceDirName:"proxy",slug:"/proxy/using-a-proxy",permalink:"/docs/proxy/using-a-proxy",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/proxy/using-a-proxy.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"proxy",permalink:"/docs/tags/proxy"},{label:"windows",permalink:"/docs/tags/windows"},{label:"macos",permalink:"/docs/tags/macos"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"macOS and Windows",description:"Using Podman Desktop behind a proxy on macOS and Windows.",tags:["podman-desktop","proxy","windows","macos"],keywords:["podman desktop","containers","podman","proxy","windows","macos"]},sidebar:"mySidebar",previous:{title:"Restricted environments",permalink:"/docs/proxy/"},next:{title:"Custom Certificate Authorities",permalink:"/docs/proxy/using-a-proxy-requiring-a-custom-ca"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Additional resources",id:"additional-resources",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-podman-desktop-behind-a-proxy-on-macos-and-windows"},"Using Podman Desktop behind a proxy on macOS and Windows"),(0,r.kt)("p",null,"You can configure Podman Desktop to run behind a proxy."),(0,r.kt)("p",null,"The configuration applies to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Processes that Podman Desktop started, such as downloading Podman, Compose, or Kind installers."),(0,r.kt)("li",{parentName:"ul"},"Podman engine.")),(0,r.kt)("p",null,"The configuration does not apply to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your Podman containers."),(0,r.kt)("li",{parentName:"ul"},"Command line tools that Podman Desktop did not start.")),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your proxy URL: ",(0,r.kt)("inlineCode",{parentName:"li"},"<your.proxy.tld:port>"),"."),(0,r.kt)("li",{parentName:"ul"},"Your proxy does not require a custom Certificate Authorities. Else see ",(0,r.kt)("a",{parentName:"li",href:"/docs/proxy/using-a-proxy-requiring-a-custom-ca"},"Using a proxy requiring a custom Certificate Authorities"),".")),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Settings > Proxy"),", and set your proxy URL:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Proxy configuration enabled"),": yes"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Web Proxy (HTTP)"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"<your.proxy.tld:port>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Secure Web Proxy (HTTPS)"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"<your.proxy.tld:port>")),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Update")," button"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Settings > Resources")," and restart the Podman machine."))),(0,r.kt)("h4",{id:"verification"},"Verification"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can install extensions such as:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/compose/compose-spec"},"Installing Compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/kind/installing"},"Installing Kind"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Podman can pull images."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Images"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Pull an image"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Image to Pull"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"bash")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Pull image"),"."),(0,r.kt)("li",{parentName:"ol"},"Podman Desktop reports ",(0,r.kt)("inlineCode",{parentName:"li"},"Download complete"),".")))),(0,r.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/proxy/using-a-proxy-in-your-containers"},"Using a proxy in your containers on macOS and Windows"))))}c.isMDXComponent=!0}}]);