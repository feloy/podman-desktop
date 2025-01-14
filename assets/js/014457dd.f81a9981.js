"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9962],{18130:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"containers/images/building-an-image","title":"Building an image","description":"Building an image on your container engine.","source":"@site/docs/containers/images/building-an-image.md","sourceDirName":"containers/images","slug":"/containers/images/building-an-image","permalink":"/docs/containers/images/building-an-image","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/containers/images/building-an-image.md","tags":[{"inline":true,"label":"images","permalink":"/docs/tags/images"},{"inline":true,"label":"building-an-image","permalink":"/docs/tags/building-an-image"}],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20,"title":"Building an image","description":"Building an image on your container engine.","keywords":["podman desktop","podman","containers","images"],"tags":["images","building-an-image"]},"sidebar":"mySidebar","previous":{"title":"Images","permalink":"/docs/containers/images/"},"next":{"title":"Pushing an image to a registry","permalink":"/docs/containers/images/pushing-an-image-to-a-registry"}}');var t=n(62540),a=n(43023);const r={sidebar_position:20,title:"Building an image",description:"Building an image on your container engine.",keywords:["podman desktop","podman","containers","images"],tags:["images","building-an-image"]},o="Building an image on your container engine",d={},l=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function c(e){const i={code:"code",h1:"h1",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"building-an-image-on-your-container-engine",children:"Building an image on your container engine"})}),"\n",(0,t.jsx)(i.p,{children:"With Podman Desktop, you can build an image from a Containerfile on your container engine."}),"\n",(0,t.jsx)(i.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Your Containerfile: ",(0,t.jsx)(i.code,{children:"Containerfile"})," or ",(0,t.jsx)(i.code,{children:"Dockerfile"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"procedure",children:"Procedure"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to ",(0,t.jsx)(i.strong,{children:"Images"})," from the left navigation pane."]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.strong,{children:"Build"}),".\n",(0,t.jsx)(i.img,{alt:"build button",src:n(96535).A+"",width:"1732",height:"416"})]}),"\n",(0,t.jsxs)(i.li,{children:["Provide the following details:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Containerfile path"}),": Select the ",(0,t.jsx)(i.code,{children:"Containerfile"})," or ",(0,t.jsx)(i.code,{children:"Dockerfile"})," to build."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Build context directory"}),": The field automatically picks the context directory based on the file path. You can change the directory, if needed."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Image Name"}),": Enter your image name, such as ",(0,t.jsx)(i.code,{children:"my-image"}),". If you want to push the image to a registry, use the fully qualified image name that your registry requires, such as ",(0,t.jsx)(i.code,{children:"quay.io/my-repository/my-image"}),", ",(0,t.jsx)(i.code,{children:"ghcr.io/my-repository/my-image"}),", or ",(0,t.jsx)(i.code,{children:"docker.io/my-repository/my-image"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Build arguments"}),": Pass the key and value for the arguments defined in your ",(0,t.jsx)(i.code,{children:"Containerfile"})," or ",(0,t.jsx)(i.code,{children:"Dockerfile"}),", if needed."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Platform"}),": Select multiple platforms on which you want to build the image. The default platform is ",(0,t.jsx)(i.code,{children:"Intel and AMD x86_64 systems"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.strong,{children:"Build"}),".\n",(0,t.jsx)(i.img,{alt:"building image from containerfile",src:n(50305).A+"",width:"1668",height:"1508"})]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.strong,{children:"Done"})," after the image is built."]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"verification",children:"Verification"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["View the newly created image on the same page.\n",(0,t.jsx)(i.img,{alt:"newly created image",src:n(19024).A+"",width:"1992",height:"550"})]}),"\n",(0,t.jsxs)(i.li,{children:["Click the name of the image to view its summary.\n",(0,t.jsx)(i.img,{alt:"image summary page",src:n(69738).A+"",width:"1578",height:"682"})]}),"\n",(0,t.jsx)(i.li,{children:"Optional: View the history of the image or inspect the image."}),"\n"]})]})}function g(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},96535:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/build-button-ff19cb19e969ee48e50ed92e9b6a0d16.png"},50305:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/building-image-from-containerfile-27092555bf9ae8ba5a367c6be494bb95.png"},69738:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-summary-page-b2d048749bdc77d4ec1ebded96b4c3f7.png"},19024:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/newly-created-image-668bf69c31a407a0903540dd24832f0e.png"},43023:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var s=n(63696);const t={},a=s.createContext(t);function r(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);