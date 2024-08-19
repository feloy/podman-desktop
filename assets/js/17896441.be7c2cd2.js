"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27918],{27894:(e,t,n)=>{n.d(t,{Z:()=>c});n(27378);var s=n(40624),i=n(71135),a=n(75484),o=n(458),l=n(24246);function r(e){let{className:t}=e;return(0,l.jsx)(o.Z,{type:"caution",title:(0,l.jsx)(i.cI,{}),className:(0,s.Z)(t,a.k.common.unlistedBanner),children:(0,l.jsx)(i.eU,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.T$,{}),(0,l.jsx)(r,{...e})]})}},59211:(e,t,n)=>{n.d(t,{Z:()=>d});n(27378);var s=n(40624),i=n(71135),a=n(75484),o=n(458),l=n(24246);function r(e){let{className:t}=e;return(0,l.jsx)(o.Z,{type:"caution",title:(0,l.jsx)(i.ht,{}),className:(0,s.Z)(t,a.k.common.draftBanner),children:(0,l.jsx)(i.xo,{})})}var c=n(27894);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||s.unlisted)&&(0,l.jsx)(c.Z,{}),s.draft&&(0,l.jsx)(r,{})]})}},56708:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ie});var s=n(27378),i=n(88676),a=n(41763),o=n(24246);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const i=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:i,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new a.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(i.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(40624),m=n(58357),h=n(99213),v=n(14582);function b(e){const{previous:t,next:n}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(v.Z,{...t,subLabel:(0,o.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,o.jsx)(v.Z,{...n,subLabel:(0,o.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=c();return(0,o.jsx)(b,{previous:e.previous,next:e.next})}var f=n(50353),g=n(36641),p=n(62935),j=n(75484),L=n(127),C=n(15647);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function Z(e){const t=N[e.versionMetadata.banner];return(0,o.jsx)(t,{...e})}function k(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(g.Z,{to:n,onClick:s,children:(0,o.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function _(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,f.Z)(),{pluginId:i}=(0,p.gA)({failfast:!0}),{savePreferredVersionName:a}=(0,L.J)(i),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,p.Jo)(i),c=l??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.Z)(t,j.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(Z,{siteTitle:s,versionMetadata:n})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(k,{versionLabel:r.label,to:c.path,onClick:()=>a(r.name)})})]})}function T(e){let{className:t}=e;const n=(0,C.E)();return n.banner?(0,o.jsx)(_,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,C.E)();return n.badge?(0,o.jsx)("span",{className:(0,u.Z)(t,j.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var y=n(28349),I=n(54709);function M(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:i}=e,a=i.length>0,l=!!(t||n||s);return a||l?(0,o.jsxs)("footer",{className:(0,u.Z)(j.k.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,o.jsx)("div",{className:(0,u.Z)("row margin-top--sm",j.k.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(y.Z,{tags:i})})}),l&&(0,o.jsx)(I.Z,{className:(0,u.Z)("margin-top--sm",j.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var B=n(80376),w=n(36033);const E={tocCollapsibleButton:"tocCollapsibleButton_iI2p",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_cHjC"};function A(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",E.tocCollapsibleButton,!t&&E.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const V={tocCollapsible:"tocCollapsible_wXna",tocCollapsibleContent:"tocCollapsibleContent_vea0",tocCollapsibleExpanded:"tocCollapsibleExpanded_BbRn"};function O(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:a,toggleCollapsed:l}=(0,B.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.Z)(V.tocCollapsible,!a&&V.tocCollapsibleExpanded,n),children:[(0,o.jsx)(A,{collapsed:a,onClick:l}),(0,o.jsx)(B.z,{lazy:!0,className:V.tocCollapsibleContent,collapsed:a,children:(0,o.jsx)(w.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})})]})}const S={tocMobile:"tocMobile_Ojys"};function R(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(O,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(j.k.docs.docTocMobile,S.tocMobile)})}var U=n(17061);function P(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(U.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var F=n(1999),D=n(40450);function $(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.Z)(j.k.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(F.Z,{as:"h1",children:n})}),(0,o.jsx)(D.Z,{children:t})]})}var z=n(67200),G=n(8862),X=n(98948);function q(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const J={breadcrumbHomeIcon:"breadcrumbHomeIcon_sfvy"};function Q(){const e=(0,X.ZP)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(g.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(q,{className:J.breadcrumbHomeIcon})})})}const K={breadcrumbsContainer:"breadcrumbsContainer_T5ub"};function W(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,o.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,o.jsx)(g.Z,{className:i,href:n,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:t})}):(0,o.jsx)("span",{className:i,children:t})}function Y(e){let{children:t,active:n,index:s,addMicrodata:i}=e;return(0,o.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,o.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ee(){const e=(0,z.s1)(),t=(0,G.Ns)();return e?(0,o.jsx)("nav",{className:(0,u.Z)(j.k.docs.docBreadcrumbs,K.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,o.jsx)(Q,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,o.jsx)(Y,{active:s,index:n,addMicrodata:!!i,children:(0,o.jsx)(W,{href:i,isLast:s,children:t.label})},n)}))]})}):null}var te=n(59211);const ne={docItemContainer:"docItemContainer_tjFy",docItemCol:"docItemCol_Qr34"};function se(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),s=e.hide_table_of_contents,i=!s&&t.length>0;return{hidden:s,mobile:i?(0,o.jsx)(R,{}):void 0,desktop:!i||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(P,{})}}(),{metadata:s}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&ne.docItemCol),children:[(0,o.jsx)(te.Z,{metadata:s}),(0,o.jsx)(T,{}),(0,o.jsxs)("div",{className:ne.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(ee,{}),(0,o.jsx)(H,{}),n.mobile,(0,o.jsx)($,{children:t}),(0,o.jsx)(M,{})]}),(0,o.jsx)(x,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function ie(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(i.FG,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(se,{children:(0,o.jsx)(n,{})})]})})}},17061:(e,t,n)=>{n.d(t,{Z:()=>c});n(27378);var s=n(40624),i=n(36033);const a={tableOfContents:"tableOfContents_XG6w",docItemContainer:"docItemContainer_Tr6w"};var o=n(24246);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,s.Z)(a.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(i.Z,{...n,linkClassName:l,linkActiveClassName:r})})}},36033:(e,t,n)=>{n.d(t,{Z:()=>b});var s=n(27378),i=n(20624);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(36641),m=n(24246);function h(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const b=(0,i.L)(),x=c??b.tableOfContents.minHeadingLevel,f=u??b.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>o({toc:a(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:x,maxHeadingLevel:f});return d((0,s.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:f}}),[l,r,x,f])),(0,m.jsx)(v,{toc:g,className:n,linkClassName:l,...h})}},71135:(e,t,n)=>{n.d(t,{T$:()=>r,cI:()=>o,eU:()=>l,ht:()=>c,xo:()=>d});n(27378);var s=n(99213),i=n(7092),a=n(24246);function o(){return(0,a.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,a.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,a.jsx)(i.Z,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,a.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,a.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},85978:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(10610),i=(n(27378),n(24246));function a(e){const t={...e};return t?.code?.length>2&&("$ "===t.code.substring(0,2)||"# "===t.code.substring(0,2)||"> "===t.code.substring(0,2))&&(t.code=t.code.substring(2)),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z,{...t})})}},35654:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(30537),i=n(9928),a=n(19374),o=n(92739),l=n(13067);s.vI.add(i.vnX,a.mRB);const r={...l.Z,Icon:o.G}}}]);