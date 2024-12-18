import{p as u,i as f,f as _,a as b,b as g,t as T,s as v,l as o,n as h,m as l,h as x}from"./props-DNTki0B4.js";import"./ErrorMessage-ChWxj8Rv.js";import"./Button-CDBD1Wqp.js";import{T as c}from"./Table-tr89Ouzo.js";import"./LinearProgress-BzkmUGFf.js";import"./Spinner-D3fv4n8p.js";import"./EmptyScreen-Cp5SGu2m.js";import{d as S,c as w,s as B}from"./create-runtime-stories-5PSk8-Dg.js";import"./class-D7KsoLfN.js";import"./index-client-YYQFxQsY.js";import"./index-A764_bBz.js";import"./fa-layers-text.svelte_svelte_type_style_lang-YI6B1VP1.js";import"./StarIcon-DNCOaA1D.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtmeDzJ6.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";const C=(a,t,s=h)=>{let e=()=>x(t==null?void 0:t(),[]);var r=l(()=>e().title??""),p=l(()=>e().selected??!1),m=l(()=>e().url??"");c(a,{get title(){return o(r)},get selected(){return o(p)},get url(){return o(m)}})},{Story:i,meta:k}=S({component:c,title:"Tab",tags:["autodocs"],argTypes:{title:{control:"text",description:"Title of the tab",defaultValue:"Tab"},url:{control:"text",description:"Link to navigate to when tab is clicked",defaultValue:""},selected:{control:"boolean",description:"Flag the tab as being selected",defaultValue:!1}},parameters:{docs:{description:{component:"These are the stories for the `Tab` component.\nInteract with tabs."}}}});var y=T("<!> <!>",1);function n(a,t){u(t,!1),B(C),f();var s=y(),e=_(s);i(e,{name:"Basic",args:{title:"title 1"},parameters:{__svelteCsf:{rawCode:"<Tab title={args.title ?? ''} selected={args.selected ?? false} url={args.url ?? ''} />"}}});var r=v(e,2);i(r,{name:"Selected",args:{title:"title 1",selected:!0},parameters:{__svelteCsf:{rawCode:"<Tab title={args.title ?? ''} selected={args.selected ?? false} url={args.url ?? ''} />"}}}),b(a,s),g()}n.__docgen={keywords:[],data:[],name:"Tab.stories.svelte"};const d=w(n,k),N=["Basic","Selected"],P=d.Basic,Q=d.Selected;export{P as Basic,Q as Selected,N as __namedExportsOrder,k as default};