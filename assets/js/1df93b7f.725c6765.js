"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53237],{544:(e,s,t)=>{t.d(s,{Z:()=>i});var l=t(161),a=t(27378),n=t(24246);const i=function(){function e(){if(!document?.documentElement)return;const e=document.documentElement;"dark"===e.dataset?.theme?(e.classList.add("dark"),setTimeout((()=>{e.classList.add("dark")}),100)):(e.classList.remove("dark"),setTimeout((()=>{e.classList.remove("dark")}),100))}return(0,a.useEffect)((()=>{l.Z.canUseDOM&&e()}),[l.Z.canUseDOM]),(0,a.useEffect)((()=>{if(!l.Z.canUseDOM)return;const s=new MutationObserver((s=>{s.forEach((s=>{"attributes"!==s.type||"data-rh"!==s.attributeName&&"data-theme"!==s.attributeName||e()}))}));return s.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),()=>{s.disconnect()}}),[l.Z.canUseDOM]),(0,n.jsx)("div",{})}},168:(e,s,t)=>{t.r(s),t.d(s,{default:()=>D});t(27378);var l=t(76457),a=t(24246);function n(e){let{children:s,fallback:t}=e;return(0,l.Z)()?(0,a.jsx)(a.Fragment,{children:s?.()}):t??null}var i=t(36641),r=t(98948),x=t(9928),d=t(19374),c=t(92739),o=t(40684),m=t(66925);const h=function(){return(0,a.jsxs)("div",{className:"w-full flex flex-row justify-center items-center py-4 bg-purple-700 overflow-hidden",children:[(0,a.jsx)("div",{className:"bg-[#fcd34d] rounded-xl text-black px-3 py-1",children:"NEW FEATURE"}),(0,a.jsxs)("div",{className:"mx-3 relative text-white",children:["We have a new ",(0,a.jsx)("span",{className:"font-bold text-lg",children:"Podman AI Lab"})," extension!"," ",(0,a.jsx)("a",{href:"/extensions/ai-lab",className:"underline text-white",children:"Check it out here."}),(0,a.jsx)("img",{className:"w-16 absolute -right-32 -top-1 -rotate-12",alt:"Podman AI Lab",src:"img/banner/podman-ai-lab-icon.png"})]})]})};var f=t(544);function u(){let e,s="",t="macos";const l=navigator.userAgent;let n,r;return-1!==l.indexOf("Windows")?(s="Windows",t="windows",e="faWindows"):-1!==l.indexOf("Mac")?(s="macOS",t="macos",e="faApple"):-1!==l.indexOf("Linux")&&(s="Linux",t="linux",e="faLinux"),""!==s?(n=(0,a.jsxs)("div",{children:[(0,a.jsxs)(i.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-violet-600 border-0 py-4 px-8 mt-6 mb-1 focus:outline-none hover:bg-violet-700 rounded text-lg",to:"/downloads/"+t,children:[(0,a.jsx)(c.G,{size:"2x",icon:e,className:"px-2"})," Download Now"]}),(0,a.jsxs)("caption",{className:"block mt-0 dark:text-gray-400",children:["For ",(0,a.jsx)("strong",{children:s})," ",(0,a.jsx)("em",{children:"(browser-detected)"})]})]}),r=(0,a.jsx)("div",{children:(0,a.jsx)(i.Z,{className:"underline font-semibold hover:underline ml-4 inline-flex py-2 px-6 my-4  focus:outline-none text-lg",to:"/downloads",children:"Other downloads"})})):n=(0,a.jsx)("div",{children:(0,a.jsx)(i.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 mt-6 mb-1 focus:outline-none hover:bg-purple-600 rounded text-lg",to:"/downloads",children:"Download Page"})}),(0,a.jsxs)("div",{className:"flex justify-center flex-col",children:[n,r]})}function g(){return(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(i.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 mt-6 mb-1 focus:outline-none hover:bg-purple-600 rounded text-lg",to:"/downloads",children:"Download Page"})})}function p(){return(0,a.jsx)("section",{className:"text-gray-900 dark:text-gray-400 body-font",children:(0,a.jsxs)("div",{className:"container mx-auto flex px-5 pb-24 pt-4 items-center justify-center flex-col",children:[(0,a.jsx)("div",{className:"text-center lg:w-2/3 w-full bg-hero-pattern bg-no-repeat bg-center",children:(0,a.jsxs)("div",{className:"bg-white/30 dark:bg-transparent",children:[(0,a.jsx)("h1",{className:"title-font sm:text-4xl text-3xl lg:text-6xl mb-8 font-medium text-gray-900 dark:text-white leading-[1.2]",children:"Containers and Kubernetes for application developers"}),(0,a.jsx)("p",{className:"text-base md:text-lg",children:"Podman Desktop is an open source graphical tool enabling you to seamlessly work with containers and Kubernetes from your local environment."}),(0,a.jsx)("div",{className:"flex-none",children:(0,a.jsx)(n,{fallback:(0,a.jsx)(g,{}),children:()=>(0,a.jsx)(u,{})})})]})}),(0,a.jsx)("div",{className:"sm:pl-8 md:pl-12 lg:pl-36 text-center w-full",children:(0,a.jsx)("img",{className:"sm:w-full md:w-full lg:w-10/12",alt:"Podman Desktop home page",src:"img/features/homepage.webp"})})]})})}function j(e){return(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-purple-800 uppercase rounded-full dark:bg-purple-400 bg-purple-400",children:e.name})})}function b(){return(0,a.jsx)("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-800 bg-zinc-100 body-font",children:(0,a.jsxs)("div",{className:"container px-5 py-24 mx-auto flex flex-wrap",children:[(0,a.jsxs)("div",{className:"flex flex-col text-center w-full mb-5",children:[(0,a.jsx)(j,{name:"update"}),(0,a.jsxs)("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-light leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto",children:["Install and keep up to date ",(0,a.jsx)("span",{className:"font-bold",children:"Podman"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col w-full text-center",children:[(0,a.jsx)("div",{className:"mx-10",children:(0,a.jsx)(c.G,{size:"3x",icon:d.mHK,className:"ml-2 mb-4 text-gray-900 dark:text-gray-300"})}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("p",{className:"leading-relaxed text-base",children:"Install Podman and other dependencies directly from Podman Desktop if not yet installed."}),(0,a.jsx)("p",{className:"leading-relaxed text-base",children:"Check for updates and get notified about new changes."}),(0,a.jsxs)("p",{className:"leading-relaxed text-base",children:["Available on"," ",(0,a.jsx)("a",{href:"/downloads/windows",className:"text-purple-600 dark:text-purple-400",target:"_blank",children:"Windows"})," ","and"," ",(0,a.jsx)("a",{href:"/downloads/macos",className:"text-purple-600 dark:text-purple-400",target:"_blank",children:"macOS"}),"!"]})]})]})]})})}function N(){return(0,a.jsx)("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-600 bg-zinc-200 body-font",children:(0,a.jsxs)("div",{className:"container px-5 py-24 mx-auto flex flex-wrap",children:[(0,a.jsxs)("div",{className:"flex flex-col text-center w-full mb-5",children:[(0,a.jsx)(j,{name:"extensibility"}),(0,a.jsx)("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-light leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto",children:"Bring new features with Podman Desktop plug-ins or Docker Desktop Extensions."})]}),(0,a.jsxs)("div",{className:"flex flex-col w-full text-center",children:[(0,a.jsx)("div",{className:"mx-10",children:(0,a.jsx)(c.G,{size:"3x",icon:d.oso,className:"ml-2 mb-4 text-gray-900 dark:text-gray-300"})}),(0,a.jsxs)("ul",{className:"list-disc list-inside text-center",children:[(0,a.jsx)("li",{children:"Container engines are plugged through extension points"}),(0,a.jsx)("li",{children:"JavaScript extensions can contribute new behaviour"}),(0,a.jsx)("li",{children:"Reuse existing extensions such as Trivy and OpenShift directly in Podman Desktop"})]}),(0,a.jsx)("div",{className:"flex flex-col items-center",children:(0,a.jsx)("div",{className:"text-left my-4",children:(0,a.jsx)("p",{className:"-ml-5 text-base",children:"Current Podman Desktop plugins: Podman, Docker, Lima, Kubernetes, and OpenShift Local with the Podman preset."})})}),(0,a.jsx)(m.Z,{className:"sm:w-full md:w-full lg:w-10/12 sm:pl-8 md:pl-12 lg:pl-24 text-center",alt:"Reuse Docker Desktop extensions",sources:{light:(0,r.Z)("img/ddextensions/dd-support.png"),dark:(0,r.Z)("img/ddextensions/dd-support.png")}}),(0,a.jsx)("div",{className:"flex flex-col items-center",children:(0,a.jsx)(i.Z,{title:"Extend Podman Desktop",className:"no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 ",to:"/extend",children:(0,a.jsxs)("div",{className:"mt-3 text-purple-800 dark:text-purple-400 inline-flex items-center",children:["Learn More",(0,a.jsx)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})})]})]})})}function w(){return(0,a.jsx)("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-800 bg-zinc-100 body-font py-24",children:(0,a.jsxs)("div",{className:"container px-5 mx-auto flex flex-wrap",children:[(0,a.jsxs)("div",{className:"flex flex-col text-center w-full mb-5",children:[(0,a.jsx)(j,{name:"Configure"}),(0,a.jsx)("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto",children:"Multiple configuration options"})]}),(0,a.jsx)("div",{className:"container px-5 pb-5 mx-auto",children:(0,a.jsxs)("div",{className:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6",children:[(0,a.jsxs)("div",{className:"p-4 md:w-1/4 flex",children:[(0,a.jsx)("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0",children:(0,a.jsx)(c.G,{size:"2x",icon:d.Kb6,className:"w-6 h-6 "})}),(0,a.jsxs)("div",{className:"flex-grow pl-6",children:[(0,a.jsx)("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2",children:"Registries"}),(0,a.jsx)("p",{className:"leading-relaxed text-base",children:(0,a.jsx)("a",{href:"/docs/containers/registries",children:"Manage OCI registries. Add/edit/delete registries."})})]})]}),(0,a.jsxs)("div",{className:"p-4 md:w-1/4 flex",children:[(0,a.jsx)("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0",children:(0,a.jsx)(c.G,{size:"2x",icon:d.Kb6,className:"w-6 h-6 "})}),(0,a.jsxs)("div",{className:"flex-grow pl-6",children:[(0,a.jsx)("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2",children:"Proxy"}),(0,a.jsx)("p",{className:"leading-relaxed text-base",children:(0,a.jsx)("a",{href:"/docs/proxy",children:"Configure your proxy settings."})})]})]}),(0,a.jsxs)("div",{className:"p-4 md:w-1/4 flex",children:[(0,a.jsx)("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0",children:(0,a.jsx)(c.G,{size:"2x",icon:d.Kb6,className:"w-6 h-6 "})}),(0,a.jsxs)("div",{className:"flex-grow pl-6",children:[(0,a.jsx)("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2",children:"Resources Utilization"}),(0,a.jsx)("p",{className:"leading-relaxed text-base",children:"Configure CPU/Memory/Disk of Podman machines."})]})]}),(0,a.jsxs)("div",{className:"p-4 md:w-1/4 flex",children:[(0,a.jsx)("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0",children:(0,a.jsx)(c.G,{size:"2x",icon:d.Kb6,className:"w-6 h-6 "})}),(0,a.jsxs)("div",{className:"flex-grow pl-6",children:[(0,a.jsx)("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2",children:"Container Engines"}),(0,a.jsx)("p",{className:"leading-relaxed text-base",children:(0,a.jsx)("a",{href:"/docs/onboarding/containers",children:"Handle multiple container engines at the same time: Podman, Docker."})})]})]})]})})]})})}function v(){return(0,a.jsx)("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-600 bg-zinc-200 body-font py-24",children:(0,a.jsxs)("div",{className:"container px-5 mx-auto flex flex-wrap",children:[(0,a.jsxs)("div",{className:"flex flex-col text-center w-full mb-5",children:[(0,a.jsx)(j,{name:"enterprise"}),(0,a.jsx)("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto",children:"Enterprise ready"})]}),(0,a.jsxs)("div",{className:"container px-5 pb-5 mx-auto",children:[(0,a.jsx)("h1",{className:"sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 dark:text-gray-100 mb-20",children:"Match configuration options."}),(0,a.jsxs)("div",{className:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6",children:[(0,a.jsxs)("div",{className:"p-4 md:w-1/3 flex",children:[(0,a.jsx)("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0",children:(0,a.jsx)(c.G,{size:"2x",icon:d.Ua$,className:"w-6 h-6 "})}),(0,a.jsxs)("div",{className:"flex-grow pl-6",children:[(0,a.jsx)("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2",children:"Code signing"}),(0,a.jsx)("p",{className:"leading-relaxed text-base",children:(0,a.jsx)("a",{href:"/downloads",children:"Signed binaries for both macOS and Windows"})})]})]}),(0,a.jsxs)("div",{className:"p-4 md:w-1/3 flex",children:[(0,a.jsx)("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-800 mb-4 flex-shrink-0",children:(0,a.jsx)(c.G,{size:"2x",icon:d.zoY,className:"w-6 h-6 "})}),(0,a.jsxs)("div",{className:"flex-grow pl-6",children:[(0,a.jsx)("h2",{className:"text-gray-900 dark:text-gray-100  text-lg title-font font-medium mb-2",children:"Proxy"}),(0,a.jsx)("p",{className:"leading-relaxed text-base",children:(0,a.jsx)("a",{href:"/docs/proxy",children:"Configure proxy within the tool. Avoid any painful files to edit."})})]})]}),(0,a.jsxs)("div",{className:"p-4 md:w-1/3 flex",children:[(0,a.jsx)("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-800 mb-4 flex-shrink-0",children:(0,a.jsx)(c.G,{size:"2x",icon:d.Kb6,className:"w-6 h-6 "})}),(0,a.jsxs)("div",{className:"flex-grow pl-6",children:[(0,a.jsx)("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2",children:"Registries"}),(0,a.jsx)("p",{className:"leading-relaxed text-base",children:(0,a.jsx)("a",{href:"/docs/proxy",children:"Manage OCI registries. Add/edit/delete registries."})})]})]})]})]})]})})}function y(){return(0,a.jsx)("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-600 bg-zinc-200 body-font",children:(0,a.jsxs)("div",{className:"container px-5 py-24 mx-auto flex flex-wrap",children:[(0,a.jsxs)("div",{className:"flex flex-col text-center w-full mb-5",children:[(0,a.jsx)("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto",children:"Available on Windows, Mac and Linux"}),(0,a.jsx)("p",{className:"text-base text-gray-900 md:text-lg dark:text-gray-400",children:"Use the same UI across different operating systems"})]}),(0,a.jsxs)("div",{className:"flex flex-wrap w-full justify-center",children:[(0,a.jsx)(i.Z,{title:"Download for Windows",className:"p-4 w-11/12 md:w-1/2 lg:w-1/3 no-underline hover:no-underline hover:text-white text-gray-900 dark:text-white",to:"/downloads/windows",children:(0,a.jsxs)("div",{className:"flex rounded-lg h-full bg-zinc-100  hover:bg-purple-500 dark:hover:bg-purple-700 dark:bg-charcoal-800 bg-opacity-60 p-8 flex-col",children:[(0,a.jsxs)("div",{className:"flex items-center mb-3 flex-col",children:[(0,a.jsx)(c.G,{size:"4x",icon:x.ts2}),(0,a.jsx)("div",{className:"inline-flex items-center justify-center rounded-full text-gray-900 dark:text-gray-400 flex-shrink-0"}),(0,a.jsx)("h2",{className:" text-lg title-font font-medium",children:" Windows"})]}),(0,a.jsx)("div",{className:"flex-grow",children:(0,a.jsx)("div",{className:"flex-grow w-full",children:(0,a.jsx)("p",{className:"text-base text-center",children:"exe or setup.exe"})})})]})}),(0,a.jsx)(i.Z,{title:"Download for macOS",className:"no-underline hover:no-underline hover:text-white text-gray-900 dark:text-white p-4 w-11/12 md:w-1/2 lg:w-1/3",to:"/downloads/macos",children:(0,a.jsxs)("div",{className:"flex rounded-lg h-full bg-zinc-100  hover:bg-purple-500 dark:hover:bg-purple-700 dark:bg-charcoal-800 bg-opacity-60 p-8 flex-col",children:[(0,a.jsxs)("div",{className:"flex items-center mb-3 flex-col",children:[(0,a.jsx)(c.G,{size:"4x",icon:x.Av$}),(0,a.jsx)("div",{className:"inline-flex items-center justify-center rounded-full text-gray-900 dark:text-gray-400 flex-shrink-0"}),(0,a.jsx)("h2",{className:" text-lg title-font font-medium",children:" macOS"})]}),(0,a.jsx)("div",{className:"flex-grow w-full",children:(0,a.jsx)("p",{className:"text-base text-center",children:"arm64, x64 or unified dmg"})})]})}),(0,a.jsx)(i.Z,{title:"Download for Linux",className:"no-underline hover:no-underline hover:text-white text-gray-900 dark:text-white p-4 w-11/12 md:w-1/2 lg:w-1/3",to:"/downloads/linux",children:(0,a.jsxs)("div",{className:"flex rounded-lg h-full bg-zinc-100  hover:bg-purple-500 dark:hover:bg-purple-700 dark:bg-charcoal-800 bg-opacity-60 p-8 flex-col",children:[(0,a.jsxs)("div",{className:"flex items-center mb-3 flex-col",children:[(0,a.jsx)(c.G,{size:"4x",icon:x.qJE}),(0,a.jsx)("div",{className:"inline-flex items-center justify-center rounded-full text-gray-900 dark:text-gray-400 flex-shrink-0"}),(0,a.jsx)("h2",{className:" text-lg title-font font-medium",children:" Linux"})]}),(0,a.jsx)("div",{className:"flex-grow",children:(0,a.jsx)("p",{className:"text-base text-center",children:"Flatpak or AMD64 binary (tar.gz)"})})]})})]})]})})}function k(){return(0,a.jsxs)("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-800 bg-zinc-100 body-font py-24",children:[(0,a.jsxs)("div",{className:"container px-5 mx-auto flex flex-wrap",children:[(0,a.jsxs)("div",{className:"flex flex-col text-center w-full mb-5",children:[(0,a.jsx)(j,{name:"features"}),(0,a.jsx)("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto",children:"Build, run and manage containers."})]}),(0,a.jsx)("div",{className:"container px-5 pb-5 mx-auto",children:(0,a.jsxs)("div",{className:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6",children:[(0,a.jsxs)("div",{className:"p-4 md:w-1/4 flex",children:[(0,a.jsx)("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0",children:(0,a.jsx)(c.G,{size:"2x",icon:d.Obi,className:"w-6 h-6 "})}),(0,a.jsxs)("div",{className:"flex-grow pl-6",children:[(0,a.jsx)("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2",children:"Build"}),(0,a.jsx)("p",{className:"leading-relaxed text-base list-disc",children:(0,a.jsxs)("a",{href:"/docs/containers/images/building-an-image",children:[(0,a.jsx)(c.G,{icon:d.ESn,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Build images from Containerfile or Dockerfile"]})})]})]}),(0,a.jsxs)("div",{className:"p-4 md:w-1/4 flex",children:[(0,a.jsx)("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0",children:(0,a.jsx)(c.G,{size:"2x",icon:d.tMT,className:"w-6 h-6 "})}),(0,a.jsxs)("div",{className:"flex-grow pl-6",children:[(0,a.jsx)("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2",children:"Run"}),(0,a.jsx)("p",{className:"leading-relaxed text-base list-disc",children:(0,a.jsxs)("a",{href:"/docs/containers/images/pulling-an-image",children:[(0,a.jsx)(c.G,{icon:d.Bkj,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Pull images from remote registries"]})}),(0,a.jsx)("p",{className:"leading-relaxed text-base list-disc",children:(0,a.jsxs)("a",{href:"/docs/containers/starting-a-container",children:[(0,a.jsx)(c.G,{icon:d.ESn,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Start / Stop / Restart containers"]})})]})]}),(0,a.jsxs)("div",{className:"p-4 md:w-1/4 flex",children:[(0,a.jsx)("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-800 mb-4 flex-shrink-0",children:(0,a.jsx)(c.G,{size:"2x",icon:d.ESn,className:"w-6 h-6 "})}),(0,a.jsxs)("div",{className:"flex-grow pl-6",children:[(0,a.jsx)("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2",children:"Inspect"}),(0,a.jsxs)("p",{className:"leading-relaxed text-base list-disc",children:[(0,a.jsx)(c.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Get a terminal in your container"]}),(0,a.jsxs)("p",{className:"leading-relaxed text-base list-disc",children:[(0,a.jsx)(c.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Inspect logs"]})]})]}),(0,a.jsxs)("div",{className:"p-4 md:w-1/4 flex",children:[(0,a.jsx)("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-800 mb-4 flex-shrink-0",children:(0,a.jsx)(c.G,{size:"2x",icon:d.Bkj,className:"w-6 h-6 "})}),(0,a.jsxs)("div",{className:"flex-grow pl-6",children:[(0,a.jsx)("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2",children:"Push"}),(0,a.jsx)("p",{className:"leading-relaxed text-base list-disc",children:(0,a.jsxs)("a",{href:"/docs/containers/images/pushing-an-image-to-a-registry",children:[(0,a.jsx)(c.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Push images to OCI registries"]})}),(0,a.jsxs)("p",{className:"leading-relaxed text-base list-disc",children:[(0,a.jsx)(c.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Deploy & Test images on Kubernetes"]})]})]})]})})]}),(0,a.jsx)("div",{className:"container px-5 mx-auto flex flex-wrap",children:(0,a.jsx)("div",{className:"flex flex-col text-center w-full mb-5",children:(0,a.jsx)(i.Z,{title:"Discover More",className:"no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 ",to:"/features",children:(0,a.jsxs)("div",{className:"mt-3 text-purple-800 dark:text-purple-400 inline-flex items-center",children:["Discover More",(0,a.jsx)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})})})]})}function M(){return(0,a.jsxs)("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-600 bg-zinc-200 body-font py-24",children:[(0,a.jsxs)("div",{className:"container px-5 mx-auto flex flex-wrap",children:[(0,a.jsxs)("div",{className:"flex flex-col text-center w-full mb-5",children:[(0,a.jsx)(j,{name:"features"}),(0,a.jsx)("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto",children:"Work with Pods and Kubernetes"})]}),(0,a.jsx)("div",{className:"container px-5 pb-5 mx-auto",children:(0,a.jsxs)("div",{className:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6",children:[(0,a.jsxs)("div",{className:"p-4 md:w-1/2 flex",children:[(0,a.jsx)("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0",children:(0,a.jsx)(c.G,{size:"2x",icon:d.Obi,className:"w-6 h-6 "})}),(0,a.jsxs)("div",{className:"flex-grow pl-6",children:[(0,a.jsx)("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2",children:"Working with pods"}),(0,a.jsxs)("p",{className:"leading-relaxed text-base list-disc",children:[(0,a.jsx)(c.G,{icon:d.Bkj,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),(0,a.jsx)("a",{href:"/docs/containers/creating-a-pod",children:"Create Pods from existing containers"})]}),(0,a.jsxs)("p",{className:"leading-relaxed text-base list-disc",children:[(0,a.jsx)(c.G,{icon:d.ESn,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Create, start, inspect and manage pods"]})]})]}),(0,a.jsxs)("div",{className:"p-4 md:w-1/2 flex",children:[(0,a.jsx)("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-800 mb-4 flex-shrink-0",children:(0,a.jsx)(c.G,{size:"2x",icon:d.ESn,className:"w-6 h-6 "})}),(0,a.jsxs)("div",{className:"flex-grow pl-6",children:[(0,a.jsx)("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2",children:"Working with Kubernetes"}),(0,a.jsxs)("p",{className:"leading-relaxed text-base list-disc",children:[(0,a.jsx)(c.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Play Kubernetes YAML directly with Podman Engine"]}),(0,a.jsxs)("p",{className:"leading-relaxed text-base list-disc",children:[(0,a.jsx)(c.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Generate Kubernetes YAML from pods"]}),(0,a.jsxs)("p",{className:"leading-relaxed text-base list-disc",children:[(0,a.jsx)(c.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),(0,a.jsx)("a",{href:"/docs/kubernetes/deploying-a-pod-to-kubernetes",children:"Deploy to existing Kubernetes environments"})]}),(0,a.jsxs)("p",{className:"leading-relaxed text-base list-disc",children:[(0,a.jsx)(c.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),(0,a.jsx)("a",{href:"/docs/kind",children:"Running Kubernetes on your workstation with Kind and Podman"})]})]})]})]})})]}),(0,a.jsx)("div",{className:"container px-5 mx-auto flex flex-wrap",children:(0,a.jsx)("div",{className:"flex flex-col text-center w-full mb-5",children:(0,a.jsx)(i.Z,{title:"Discover More",className:"no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 ",to:"/features",children:(0,a.jsxs)("div",{className:"mt-3 text-purple-800 dark:text-purple-400 inline-flex items-center",children:["Discover More",(0,a.jsx)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})})})]})}function D(){return(0,a.jsxs)(o.Z,{title:"Podman Desktop - Containers and Kubernetes",description:"Podman Desktop - An open source graphical tool for developing on containers and Kubernetes",children:[(0,a.jsx)(f.Z,{}),(0,a.jsx)(h,{}),(0,a.jsx)(p,{}),(0,a.jsx)(y,{}),(0,a.jsx)(k,{}),(0,a.jsx)(M,{}),(0,a.jsx)(w,{}),(0,a.jsx)(N,{}),(0,a.jsx)(b,{}),(0,a.jsx)(v,{})]})}}}]);