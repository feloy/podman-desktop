import{F as Q,o as R,p as U,q as b,v as n,H,I as x,k as _,J as V,i as X,r as y,j as k,f as w,a as i,w as Y,e as Z,K as $,b as ee,t as S,x as J,l as P,s as te}from"./props-Cm1o_aZ3.js";import{s as ae,a as K,F as re}from"./fa-layers-text.svelte_svelte_type_style_lang-C8rKw0Zy.js";import{t as m,b as ne,s as M}from"./class-3HfI5r6-.js";import{o as oe}from"./index-client-DKCgwo76.js";import{S as de}from"./Spinner-Bf3wYnpf.js";function se(o,t){var d;var s=(d=o.$$events)==null?void 0:d[t.type],p=Q(s)?s.slice():s==null?[]:[s];for(var F of p)F.call(this,t)}const T=o=>!!o&&typeof o=="object"&&"prefix"in o&&typeof o.prefix=="string"&&o.prefix.startsWith("fa");var be=S("<span><!></span>"),ie=S('<div class="flex flex-row p-0 m-0 bg-transparent justify-center items-center space-x-[4px]"><!> <!></div>'),le=S('<button type="button"><!></button>');function ve(o,t){const s=ae(t),p=R(t,["children","$$slots","$$events","$$legacy"]);U(t,!1);let F=b(t,"title",8,void 0),d=b(t,"inProgress",8,!1),j=b(t,"disabled",8,!1),e=b(t,"type",8,"primary"),u=b(t,"icon",8,void 0),l=b(t,"selected",8,void 0),W=b(t,"padding",24,()=>"px-4 "+(e()==="tab"?"pb-1":e()==="secondary"?"py-[4px]":e()==="danger"?"py-[3px]":"py-[5px]")),z=J(void 0);oe(()=>{T(u())?n(z,"fa"):n(z,"unknown")});let a=J("");H(()=>(x(l()),x(e())),()=>{l()!==void 0&&e()!=="tab"&&console.error("property selected can be used with type=tab only")}),H(()=>(x(j()),x(d()),x(e()),_(a)),()=>{j()||d()?(e()==="primary"?n(a,"bg-[var(--pd-button-disabled)]"):e()==="secondary"?n(a,"border-[1px] border-[var(--pd-button-disabled)] bg-[var(--pd-button-disabled)]"):e()==="danger"&&n(a,"border-2 border-[var(--pd-button-danger-disabled-border)] text-[var(--pd-button-danger-disabled-text)] bg-[var(--pd-button-danger-disabled-bg)]"),e()!=="danger"&&n(a,_(a)+" text-[var(--pd-button-disabled-text)]")):e()==="primary"?n(a,"bg-[var(--pd-button-primary-bg)] text-[var(--pd-button-text)] border-none hover:bg-[var(--pd-button-primary-hover-bg)]"):e()==="secondary"?n(a,"border-[1px] border-[var(--pd-button-secondary)] text-[var(--pd-button-secondary)] hover:bg-[var(--pd-button-secondary-hover)] hover:border-[var(--pd-button-secondary-hover)] hover:text-[var(--pd-button-text)]"):e()==="danger"?n(a,"border-2 border-[var(--pd-button-danger-border)] bg-[var(--pd-button-danger-bg)] text-[var(--pd-button-danger-text)] hover:bg-[var(--pd-button-danger-hover-bg)] hover:text-[var(--pd-button-danger-hover-text)]"):e()==="tab"?n(a,"border-b-[3px] border-[var(--pd-button-tab-border)]"):n(a,"border-none text-[var(--pd-button-link-text)] hover:bg-[var(--pd-button-link-hover-bg)]"),e()!=="tab"&&n(a,_(a)+" rounded-[4px]")}),V(),X();var r=le(),C=P(r);y(C,()=>u()||d(),f=>{var v=ie();m(v,"py-[3px]",!s.default);var h=P(v);y(h,d,c=>{de(c,{size:"1em"})},c=>{var g=k(),B=w(g);y(B,()=>T(u()),I=>{re(I,{get icon(){return u()}})},I=>{var q=k(),E=w(q);y(E,()=>_(z)==="unknown",G=>{var A=k(),L=w(A);Y(L,u,(N,O)=>{O(N,{})}),i(G,A)},null,!0),i(I,q)},!0),i(c,g)});var D=te(h,2);y(D,()=>s.default,c=>{var g=be(),B=P(g);K(B,t,"default",{}),i(c,g)}),i(f,v)},f=>{var v=k(),h=w(v);K(h,t,"default",{}),i(f,v)}),Z(()=>{ne(r,`relative ${W()??""} box-border whitespace-nowrap select-none transition-all ${_(a)??""} ${p.class??""??""}`),r.hidden=p.hidden,M(r,"title",F()),M(r,"aria-label",p["aria-label"]),r.disabled=j()||d(),m(r,"border-[var(--pd-button-tab-border-selected)]",e()==="tab"&&l()),m(r,"hover:border-[var(--pd-button-tab-hover-border)]",e()==="tab"&&!l()),m(r,"text-[var(--pd-button-tab-text-selected)]",e()==="tab"&&l()),m(r,"text-[var(--pd-button-tab-text)]",e()==="tab"&&!l())}),$("click",r,function(f){se.call(this,t,f)}),i(o,r),ee()}ve.__docgen={keywords:[],data:[],name:"Button.svelte"};export{ve as B,se as b,T as i};
