"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3714],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,c=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},57924:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(25773),o=(a(27378),a(35318));const r={title:"Release Notes - Podman Desktop 1.4",description:"Podman Desktop 1.4 has been released!",slug:"podman-desktop-release-1.4",authors:["jeffmaury"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1,image:"/blog/img/podman-desktop-release-1.4/juggling.png"},i=void 0,l={permalink:"/blog/podman-desktop-release-1.4",source:"@site/blog/2023-09-18-release-1.4.md",title:"Release Notes - Podman Desktop 1.4",description:"Podman Desktop 1.4 has been released!",date:"2023-09-18T00:00:00.000Z",formattedDate:"September 18, 2023",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"release",permalink:"/blog/tags/release"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"openshift",permalink:"/blog/tags/openshift"}],readingTime:3.415,hasTruncateMarker:!1,authors:[{name:"Jeff Maury",title:"Engineering Manager",url:"https://github.com/jeffmaury",imageURL:"https://github.com/jeffmaury.png",key:"jeffmaury"}],frontMatter:{title:"Release Notes - Podman Desktop 1.4",description:"Podman Desktop 1.4 has been released!",slug:"podman-desktop-release-1.4",authors:["jeffmaury"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1,image:"/blog/img/podman-desktop-release-1.4/juggling.png"},prevItem:{title:"Release Notes - Podman Desktop 1.5",permalink:"/blog/podman-desktop-release-1.5"},nextItem:{title:"Release Notes - Podman Desktop 1.3",permalink:"/blog/podman-desktop-release-1.3"}},s={authorsImageUrls:[void 0]},p=[{value:"Release Details",id:"release-details",level:2},{value:"Port range mapping #3654",id:"port-range-mapping-3654",level:3},{value:"Terminal lifetime #3725",id:"terminal-lifetime-3725",level:3},{value:"Create volume #3742",id:"create-volume-3742",level:3},{value:"bash support #3750",id:"bash-support-3750",level:3},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:3},{value:"Community Thank You",id:"community-thank-you",level:3},{value:"Final Notes",id:"final-notes",level:3}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Podman Desktop 1.4 Release! \ud83c\udf89"),(0,o.kt)("p",null,"This is essentially a bug-fix release to fix various issues in UI, but as usual we also added a few new features."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Podman 4.6.2"),": Podman 4.6.2 included with Podman Desktop 1.4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Windows Arm64"),": Native Windows on Arm64 installers and binaries"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Port range mapping"),": Start containers and map a range of ports"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Terminal UX Improvement"),": Persistent terminal sessions when SSH'ing in a container"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Volume Creation"),": Create volume from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Volumes")," page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bash support"),": Terminals are now using ",(0,o.kt)("inlineCode",{parentName:"li"},"bash")," if available.")),(0,o.kt)("p",null,"Podman Desktop 1.4 is now available. ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Click here to download it"),"!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Podman-desktop-1-4-juggling",src:a(91617).Z,width:"1920",height:"1080"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"release-details"},"Release Details"),(0,o.kt)("h3",{id:"port-range-mapping-3654"},"Port range mapping ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3654"},"#3654")),(0,o.kt)("p",null,"When starting a new container, you can now map a port range between host and container. If the range is not valid between host and container, an error is raised."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49404737/262927546-da66b67a-0884-40b1-85bd-a9c3ea2f3f9e.gif",alt:"Range mapping"})),(0,o.kt)("h3",{id:"terminal-lifetime-3725"},"Terminal lifetime ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3725"},"#3725")),(0,o.kt)("p",null,"When a terminal is opened for a container, it can now be reused after you switched to another part of the Podman Desktop UI."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"terminal lifetime",src:a(79019).Z,width:"1316",height:"879"})),(0,o.kt)("h3",{id:"create-volume-3742"},"Create volume ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3742"},"#3742")),(0,o.kt)("p",null,"The Volumes tab now has a Create volume button. The Create volume UI has a single field for the volume name."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create volume",src:a(83022).Z,width:"1316",height:"879"})),(0,o.kt)("h3",{id:"bash-support-3750"},"bash support ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3750"},"#3750")),(0,o.kt)("p",null,"When a terminal is opened for a container, if bash is available within the container, it will be used. Otherwise, sh will be used."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bash sh",src:a(41834).Z,width:"1316",height:"879"})),(0,o.kt)("h3",{id:"notable-bug-fixes"},"Notable Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reduce API calls when listing containers by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3489"},"#3489")),(0,o.kt)("li",{parentName:"ul"},"Removing a connection(podman machine) should redirect to previous page by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3576"},"#3576")),(0,o.kt)("li",{parentName:"ul"},"Enhance error message when image is not there by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3587"},"#3587")),(0,o.kt)("li",{parentName:"ul"},"Dispose kind install button when extension is deactivated (#3586) by @lstocchi ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3610"},"#3610")),(0,o.kt)("li",{parentName:"ul"},"Replace backslash/slash on windows when building image (#3465) by @lstocchi ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3618"},"#3618")),(0,o.kt)("li",{parentName:"ul"},"Handle null value in container command (#3620) by @lstocchi ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3625"},"#3625")),(0,o.kt)("li",{parentName:"ul"},"Add maximum activation time for extensions by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3446"},"#3446")),(0,o.kt)("li",{parentName:"ul"},"Handle single non-spread arguments by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3641"},"#3641")),(0,o.kt)("li",{parentName:"ul"},"Grab usage data of volumes only on-demand by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3635"},"#3635")),(0,o.kt)("li",{parentName:"ul"},"Add arm64 binaries for Windows by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3643"},"#3643")),(0,o.kt)("li",{parentName:"ul"},"Include right airgap file for Windows and arm64 by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3651"},"#3651")),(0,o.kt)("li",{parentName:"ul"},"Redirect to previous page when removing a kubernetes connection by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3650"},"#3650")),(0,o.kt)("li",{parentName:"ul"},"Support port ranges when starting a container (#3204) by @lstocchi ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3654"},"#3654")),(0,o.kt)("li",{parentName:"ul"},"Add a strict undefined check to messagebox result (#3692) by @lstocchi ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3699"},"#3699")),(0,o.kt)("li",{parentName:"ul"},"Only restart if a machine is running by @cdrage ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3491"},"#3491")),(0,o.kt)("li",{parentName:"ul"},"Session to the terminal is reused by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3725"},"#3725")),(0,o.kt)("li",{parentName:"ul"},"Disable next button and show try again when onboarding failed (#3616) by @lstocchi ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3711"},"#3711")),(0,o.kt)("li",{parentName:"ul"},"Add podman in PATH after updating process environment PATH (#3729) by @lstocchi ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3730"},"#3730")),(0,o.kt)("li",{parentName:"ul"},"Allow to create a volume by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3742"},"#3742")),(0,o.kt)("li",{parentName:"ul"},"Using bash if available otherwise sh in terminal by @axel7083 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3750"},"#3750")),(0,o.kt)("li",{parentName:"ul"},"Allow to embed existing component to onboarding (#3755) by @lstocchi ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3763"},"#3763")),(0,o.kt)("li",{parentName:"ul"},"Some containers never return logs, do not wait for them by @dgolovin ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3784"},"#3784")),(0,o.kt)("li",{parentName:"ul"},"Remove cancel button when on final onboarding step (#3771) by @lstocchi ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3802"},"#3802")),(0,o.kt)("li",{parentName:"ul"},"Onboarding add link micromark for commands by @cdrage ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3747"},"#3747")),(0,o.kt)("li",{parentName:"ul"},"Mounts can be null when using older podman by @afbjorklund ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3806"},"#3806")),(0,o.kt)("li",{parentName:"ul"},"Remove redundant step completion check when onboarding gets started by @lstocchi ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3798"},"#3798")),(0,o.kt)("li",{parentName:"ul"},"Ability to click enter in pull image name input by @deboer-tim ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3850"},"#3850")),(0,o.kt)("li",{parentName:"ul"},"Set proxy environment variable when launching process by @jeffmaury ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3838"},"#3838")),(0,o.kt)("li",{parentName:"ul"},"The socket location was moved for new podman by @afbjorklund ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3853"},"#3853")),(0,o.kt)("li",{parentName:"ul"},"Don't log console errors when activating lima extension by @afbjorklund ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3852"},"#3852"))),(0,o.kt)("h3",{id:"community-thank-you"},"Community Thank You"),(0,o.kt)("p",null,"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop even better."),(0,o.kt)("p",null,"A warm welcome to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tomgoren"},"@tomgoren"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Julian"},"@Julian"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Gelob"},"@Gelob")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cedricclyburn"},"@cedricclyburn")," who made their first contribution to the project in this release."),(0,o.kt)("h3",{id:"final-notes"},"Final Notes"),(0,o.kt)("p",null,"The complete list of issues fixed in this release is available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.4.0"},"here"),"."),(0,o.kt)("p",null,"Get the latest release from the ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Downloads")," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop"},"GitHub repository")," and see how you can help us make Podman Desktop better."))}u.isMDXComponent=!0},41834:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bash-sh-640dea579335def1a54ad3d2fb668a13.gif"},83022:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-volume-b826557a9841c4f92311a2b5833ec247.gif"},91617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/juggling-bfd34fcfc3b63b29752c5f16a53e36ad.png"},79019:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/terminal-dc078da2d12869ee9e148c38afe530da.gif"}}]);