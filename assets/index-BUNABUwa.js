import{V as p,a as o,_ as A}from"./AppFooter-bVjWamNA.js";import{V as f,f as w}from"./VTextField-BaQ-ZsOe.js";import{h as _,q as b,V as N}from"./VContainer-BvK1_KVN.js";import{E as x,G as y,H as t,c as e,N as n,p as R,m as $,g as q,r as B,u as C,L as r,J as z,F as L}from"./index-CgS4ZLy7.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as P,e as j}from"./VLabel-CSqRcAuz.js";const D={__name:"AppNewsletter",setup(l){return(s,a)=>(x(),y(b,{class:"py-8"},{default:t(()=>[e(p,{justify:"center"},{default:t(()=>[e(o,{cols:"10"},{default:t(()=>[a[0]||(a[0]=n("h1",{class:"text-h4 text-center"},"Finde Neuheiten, Style-Inspirationen und Sales",-1)),a[1]||(a[1]=n("h4",{class:"subheading text-center"},"in unserem Newsletter.",-1)),e(f,{class:"pa-2 ma-2",label:"Your email",type:"text",variant:"outlined"},{append:t(()=>[e(_,{text:"Submit",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1}))}},E=R({...$(),...P()},"VForm"),G=q()({name:"VForm",props:E(),emits:{"update:modelValue":l=>!0,submit:l=>!0},setup(l,s){let{slots:a,emit:V}=s;const d=j(l),c=B();function F(u){u.preventDefault(),d.reset()}function v(u){const m=u,i=d.validate();m.then=i.then.bind(i),m.catch=i.catch.bind(i),m.finally=i.finally.bind(i),V("submit",m),m.defaultPrevented||i.then(S=>{var g;let{valid:k}=S;k&&((g=c.value)==null||g.submit())}),m.preventDefault()}return C(()=>{var u;return e("form",{ref:c,class:["v-form",l.class],style:l.style,novalidate:!0,onReset:F,onSubmit:v},[(u=a.default)==null?void 0:u.call(a,d)])}),w(d,c)}}),I={};function U(l,s){return x(),y(b,{class:"bg-grey-lighten-1 py-8"},{default:t(()=>[s[3]||(s[3]=n("h2",{class:"ml-2 pa-2"},"Unser Laden",-1)),e(p,null,{default:t(()=>[e(o,{cols:"6"},{default:t(()=>s[0]||(s[0]=[n("h3",{class:"pa-2 ml-2"},"Addresse und Arbeitzeit",-1),n("div",{class:"d-flex flex-row"},[n("p",{class:"ma-2 pa-2"},"Addresse"),n("p",{class:"ma-2 pa-2"},[r(" Alte Linner Strasse 103 "),n("br"),r(" 47799 Krefeld ")])],-1),n("div",{class:"d-flex flex-row"},[n("p",{class:"ma-2 pa-2"},"Arbeitzeit"),n("p",{class:"ma-2 pa-2"},[r(" Mo-Sa 10.00 - 15.00 Uhr"),n("br"),r(" Sonntag - Geschlossen "),n("br"),r(" info@esfashion.de "),n("br"),r(" +49 (0)1520 883 7951 ")])],-1)])),_:1}),e(G,null,{default:t(()=>[e(b,null,{default:t(()=>[s[2]||(s[2]=n("h3",{class:"py-2"},"Kontakt Uns",-1)),e(p,null,{default:t(()=>[e(o,{cols:"12",md:"4"},{default:t(()=>[e(f,{label:"First name","hide-details":"",required:""})]),_:1}),e(o,{cols:"12",md:"4"},{default:t(()=>[e(f,{label:"Last name","hide-details":"",required:""})]),_:1}),e(o,{cols:"12",md:"4"},{default:t(()=>[e(f,{label:"E-mail","hide-details":"",required:""})]),_:1}),e(o,null,{default:t(()=>[e(_,{class:"mt-2",type:"submit",block:""},{default:t(()=>s[1]||(s[1]=[r("Senden")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const H=h(I,[["render",U]]),K={},M={class:"d-flex flex-row justify-center"};function T(l,s){return x(),y(b,null,{default:t(()=>[e(p,{justify:"center",align:"center"},{default:t(()=>[e(o,{class:"text-center",cols:"6"},{default:t(()=>[s[2]||(s[2]=n("h1",null,"Fur Sie Gemacht, Von Der Mode Inspiriert",-1)),n("div",M,[e(_,{link:"",to:"/boutique",class:"pa-4 ma-2",size:"large"},{default:t(()=>s[0]||(s[0]=[r(" Zum Shop ")])),_:1}),e(_,{link:"",to:"/alterier",class:"pa-4 ma-2",size:"large"},{default:t(()=>s[1]||(s[1]=[r(" Alterier ")])),_:1})])]),_:1}),e(o,{cols:"cols 6"},{default:t(()=>[e(N,{src:"https://picsum.photos/id/36/200/300",height:"100%",cover:""})]),_:1})]),_:1})]),_:1})}const J=h(K,[["render",T]]),Y={};function Z(l,s){const a=J,V=H,d=D,c=A;return x(),z(L,null,[e(a),e(V),e(d),e(c)],64)}const se=h(Y,[["render",Z]]);export{se as default};
