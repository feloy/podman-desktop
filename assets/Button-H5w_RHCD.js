import{E as $,o as ee,q as b,I,J as te,i as ae,t as F,u as c,e as re,K as ne,a as g,b as se,p as ie,m as de,l as x,v as r,w as S,j as B,L as m,s as oe,k as A,f as E,x as le}from"./props-NkZMFGqM.js";import{s as be,a as J,F as pe}from"./fa-layers-text.svelte_svelte_type_style_lang-BfHVKWLP.js";import{a as K,s as L}from"./attributes-B9TOywRN.js";import{o as ve}from"./index-client-CqF_D67T.js";import{S as ye}from"./Spinner-Ct5RpIwG.js";function ue(i,t){var d;var l=(d=i.$$events)==null?void 0:d[t.type],u=$(l)?l.slice():l==null?[]:[l];for(var h of u)h.call(this,t)}const M=i=>!!i&&typeof i=="object"&&"prefix"in i&&typeof i.prefix=="string"&&i.prefix.startsWith("fa");var fe=F("<span><!></span>"),ce=F("<div><!> <!></div>"),ge=F('<button type="button"><!></button>');function xe(i,t){const l=be(t),u=ee(t,["children","$$slots","$$events","$$legacy"]);ie(t,!1);let h=b(t,"title",8,void 0),d=b(t,"inProgress",8,!1),w=b(t,"disabled",8,!1),e=b(t,"type",8,"primary"),f=b(t,"icon",8,void 0),p=b(t,"selected",8,void 0),T=b(t,"padding",24,()=>"px-4 "+(e()==="tab"?"pb-1":e()==="secondary"?"py-[4px]":e()==="danger"?"py-[3px]":"py-[5px]")),V=S(void 0);ve(()=>{M(f())?r(V,"fa"):r(V,"unknown")});let a=S("");I(()=>(m(p()),m(e())),()=>{p()!==void 0&&e()!=="tab"&&console.error("property selected can be used with type=tab only")}),I(()=>(m(w()),m(d()),m(e()),x(a)),()=>{w()||d()?(e()==="primary"?r(a,"bg-[var(--pd-button-disabled)]"):e()==="secondary"?r(a,"border-[1px] border-[var(--pd-button-disabled)] bg-[var(--pd-button-disabled)]"):e()==="danger"&&r(a,"border-2 border-[var(--pd-button-danger-disabled-border)] text-[var(--pd-button-danger-disabled-text)] bg-[var(--pd-button-danger-disabled-bg)]"),e()!=="danger"&&r(a,x(a)+" text-[var(--pd-button-disabled-text)]")):e()==="primary"?r(a,"bg-[var(--pd-button-primary-bg)] text-[var(--pd-button-text)] border-none hover:bg-[var(--pd-button-primary-hover-bg)]"):e()==="secondary"?r(a,"border-[1px] border-[var(--pd-button-secondary)] text-[var(--pd-button-secondary)] hover:bg-[var(--pd-button-secondary-hover)] hover:border-[var(--pd-button-secondary-hover)] hover:text-[var(--pd-button-text)]"):e()==="danger"?r(a,"border-2 border-[var(--pd-button-danger-border)] bg-[var(--pd-button-danger-bg)] text-[var(--pd-button-danger-text)] hover:bg-[var(--pd-button-danger-hover-bg)] hover:text-[var(--pd-button-danger-hover-text)]"):e()==="tab"?r(a,"border-b-[3px] border-[var(--pd-button-tab-border)]"):r(a,"border-none text-[var(--pd-button-link-text)] hover:bg-[var(--pd-button-link-hover-bg)]"),e()!=="tab"&&r(a,x(a)+" rounded-[4px]")}),te(),ae();var o=ge();let P;var W=B(o);{var C=n=>{var v=ce();K(v,1,"flex flex-row p-0 m-0 bg-transparent justify-center items-center space-x-[4px]",null,{},{"py-[3px]":!l.default});var k=B(v);{var G=s=>{ye(s,{size:"1em"})},H=(s,_)=>{{var j=y=>{pe(y,{get icon(){return f()}})},Q=(y,R)=>{{var U=z=>{var q=A(),X=E(q);le(X,f,(Y,Z)=>{Z(Y,{})}),g(z,q)};c(y,z=>{x(V)==="unknown"&&z(U)},R)}};c(s,y=>{M(f())?y(j):y(Q,!1)},_)}};c(k,s=>{d()?s(G):s(H,!1)})}var N=oe(k,2);{var O=s=>{var _=fe(),j=B(_);J(j,t,"default",{}),g(s,_)};c(N,s=>{l.default&&s(O)})}g(n,v)},D=n=>{var v=A(),k=E(v);J(k,t,"default",{}),g(n,v)};c(W,n=>{f()||d()?n(C):n(D,!1)})}re(n=>{P=K(o,1,`relative ${T()??""} box-border whitespace-nowrap select-none transition-all outline-transparent focus:outline-[var(--pd-button-primary-hover-bg)] ${x(a)??""} ${u.class??""}`,null,P,n),o.hidden=u.hidden,L(o,"title",h()),L(o,"aria-label",u["aria-label"]),o.disabled=w()||d()},[()=>({"border-[var(--pd-button-tab-border-selected)]":e()==="tab"&&p(),"hover:border-[var(--pd-button-tab-hover-border)]":e()==="tab"&&!p(),"text-[var(--pd-button-tab-text-selected)]":e()==="tab"&&p(),"text-[var(--pd-button-tab-text)]":e()==="tab"&&!p()})],de),ne("click",o,function(n){ue.call(this,t,n)}),g(i,o),se()}xe.__docgen={keywords:[],data:[{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"inProgress",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"primary",text:'"primary"'},{kind:"const",type:"string",value:"secondary",text:'"secondary"'},{kind:"const",type:"string",value:"danger",text:'"danger"'},{kind:"const",type:"string",value:"link",text:'"link"'},{kind:"const",type:"string",value:"tab",text:'"tab"'}],text:'"primary" | "secondary" | "danger" | "link" | "tab"'},static:!1,readonly:!1,defaultValue:'"primary"'},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"padding",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"Button.svelte"};export{xe as B,ue as b,M as i};
