import{ay as ue,g as $,az as ct,h as $e,p as _,m as A,_ as be,a1 as he,u as N,c as o,f as d,aA as G,aB as Re,aC as we,aD as dt,aE as vt,aF as ft,ar as M,ap as mt,j as ne,ao as gt,aj as ze,aG as ye,t as E,af as Y,s as D,r as ae,U as j,au as bt,B as Ne,a8 as se,w as ce,x as ht,F as Oe,i as I,Z as yt,at as de,a as U,b as K,d as J,n as Ct,o as Ae,y as St,a5 as ve,l as Fe,aa as _t,aH as kt,k as Me,z as wt,aI as xt,I as fe,aJ as It,aK as Bt,aL as Vt,S as Pt,ad as pt,e as Ce,aM as xe,C as Et,aN as Lt,aO as Ie,aP as Tt,aQ as Be}from"./index-CgS4ZLy7.js";const $t=["top","bottom"],Rt=["start","end","left","right"];function zt(e,t){let[a,n]=e.split(" ");return n||(n=ue($t,a)?"start":ue(Rt,a)?"top":"center"),{side:Ve(a,t),align:Ve(n,t)}}function Ve(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const Nt=_({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),re=$(!1)({name:"VDefaultsProvider",props:Nt(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:s,reset:l,root:u,scoped:v}=ct(e);return $e(n,{reset:l,root:u,scoped:v,disabled:s}),()=>{var f;return(f=a.default)==null?void 0:f.call(a)}}});function Ot(e){return{aspectStyles:d(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const De=_({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...A(),...be()},"VResponsive"),Pe=$()({name:"VResponsive",props:De(),setup(e,t){let{slots:a}=t;const{aspectStyles:n}=Ot(e),{dimensionStyles:s}=he(e);return N(()=>{var l;return o("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[o("div",{class:"v-responsive__sizer",style:n.value},null),(l=a.additional)==null?void 0:l.call(a),a.default&&o("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}});function Se(e){return Re(()=>{const t=[],a={};if(e.value.background)if(we(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&dt(e.value.background)){const n=vt(e.value.background);if(n.a==null||n.a===1){const s=ft(n);a.color=s,a.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(we(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function ee(e,t){const a=d(()=>({text:G(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:s}=Se(a);return{textColorClasses:n,textColorStyles:s}}function Z(e,t){const a=d(()=>({background:G(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:s}=Se(a);return{backgroundColorClasses:n,backgroundColorStyles:s}}const le=_({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ie(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{roundedClasses:d(()=>{const n=G(e)?e.value:e.rounded,s=G(e)?e.value:e.tile,l=[];if(n===!0||n==="")l.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const u of String(n).split(" "))l.push(`rounded-${u}`);else(s||n===!1)&&l.push("rounded-0");return l})}}const At=_({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Q=(e,t)=>{let{slots:a}=t;const{transition:n,disabled:s,group:l,...u}=e,{component:v=l?gt:ze,...f}=typeof n=="object"?n:{};return mt(v,ne(typeof n=="string"?{name:s?"":n}:f,typeof n=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:l}).filter(m=>{let[g,y]=m;return y!==void 0})),u),a)};function Ft(e,t){if(!ye)return;const a=t.modifiers||{},n=t.value,{handler:s,options:l}=typeof n=="object"?n:{handler:n,options:{}},u=new IntersectionObserver(function(){var y;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const m=(y=e._observe)==null?void 0:y[t.instance.$.uid];if(!m)return;const g=v.some(i=>i.isIntersecting);s&&(!a.quiet||m.init)&&(!a.once||g||m.init)&&s(g,v,f),g&&a.once?je(e,t):m.init=!0},l);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:u},u.observe(e)}function je(e,t){var n;const a=(n=e._observe)==null?void 0:n[t.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Mt={mounted:Ft,unmounted:je},Dt=_({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...De(),...A(),...le(),...At()},"VImg"),xn=$()({name:"VImg",directives:{intersect:Mt},props:Dt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:a,slots:n}=t;const{backgroundColorClasses:s,backgroundColorStyles:l}=Z(E(e,"color")),{roundedClasses:u}=ie(e),v=Y("VImg"),f=D(""),m=ae(),g=D(e.eager?"loading":"idle"),y=D(),i=D(),r=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),h=d(()=>r.value.aspect||y.value/i.value||0);j(()=>e.src,()=>{c(g.value!=="idle")}),j(h,(b,k)=>{!b&&k&&m.value&&w(m.value)}),bt(()=>c());function c(b){if(!(e.eager&&b)&&!(ye&&!b&&!e.eager)){if(g.value="loading",r.value.lazySrc){const k=new Image;k.src=r.value.lazySrc,w(k,null)}r.value.src&&Ne(()=>{var k;a("loadstart",((k=m.value)==null?void 0:k.currentSrc)||r.value.src),setTimeout(()=>{var B;if(!v.isUnmounted)if((B=m.value)!=null&&B.complete){if(m.value.naturalWidth||S(),g.value==="error")return;h.value||w(m.value,null),g.value==="loading"&&C()}else h.value||w(m.value),P()})})}}function C(){var b;v.isUnmounted||(P(),w(m.value),g.value="loaded",a("load",((b=m.value)==null?void 0:b.currentSrc)||r.value.src))}function S(){var b;v.isUnmounted||(g.value="error",a("error",((b=m.value)==null?void 0:b.currentSrc)||r.value.src))}function P(){const b=m.value;b&&(f.value=b.currentSrc||b.src)}let p=-1;se(()=>{clearTimeout(p)});function w(b){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const B=()=>{if(clearTimeout(p),v.isUnmounted)return;const{naturalHeight:z,naturalWidth:F}=b;z||F?(y.value=F,i.value=z):!b.complete&&g.value==="loading"&&k!=null?p=window.setTimeout(B,k):(b.currentSrc.endsWith(".svg")||b.currentSrc.startsWith("data:image/svg+xml"))&&(y.value=1,i.value=1)};B()}const L=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),R=()=>{var B;if(!r.value.src||g.value==="idle")return null;const b=o("img",{class:["v-img__img",L.value],style:{objectPosition:e.position},src:r.value.src,srcset:r.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:m,onLoad:C,onError:S},null),k=(B=n.sources)==null?void 0:B.call(n);return o(Q,{transition:e.transition,appear:!0},{default:()=>[ce(k?o("picture",{class:"v-img__picture"},[k,b]):b,[[yt,g.value==="loaded"]])]})},T=()=>o(Q,{transition:e.transition},{default:()=>[r.value.lazySrc&&g.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",L.value],style:{objectPosition:e.position},src:r.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),H=()=>n.placeholder?o(Q,{transition:e.transition,appear:!0},{default:()=>[(g.value==="loading"||g.value==="error"&&!n.error)&&o("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,O=()=>n.error?o(Q,{transition:e.transition,appear:!0},{default:()=>[g.value==="error"&&o("div",{class:"v-img__error"},[n.error()])]}):null,W=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,x=D(!1);{const b=j(h,k=>{k&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{x.value=!0})}),b())})}return N(()=>{const b=Pe.filterProps(e);return ce(o(Pe,ne({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!x.value},s.value,u.value,e.class],style:[{width:I(e.width==="auto"?y.value:e.width)},l.value,e.style]},b,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(Oe,null,[o(R,null,null),o(T,null,null),o(W,null,null),o(H,null,null),o(O,null,null)]),default:n.default}),[[ht("intersect"),{handler:c,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:m,state:g,naturalWidth:y,naturalHeight:i}}}),Ge=_({border:[Boolean,Number,String]},"border");function Ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{borderClasses:d(()=>{const n=G(e)?e.value:e.border,s=[];if(n===!0||n==="")s.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const l of String(n).split(" "))s.push(`border-${l}`);return s})}}const He=_({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function We(e){return{elevationClasses:d(()=>{const a=G(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const jt=[null,"default","comfortable","compact"],qe=_({density:{type:String,default:"default",validator:e=>jt.includes(e)}},"density");function Xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{densityClasses:d(()=>`${t}--density-${e.density}`)}}const Gt=["elevated","flat","tonal","outlined","text","plain"];function Ut(e,t){return o(Oe,null,[e&&o("span",{key:"overlay",class:`${t}__overlay`},null),o("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ye=_({color:String,variant:{type:String,default:"elevated",validator:e=>Gt.includes(e)}},"variant");function Ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();const a=d(()=>{const{variant:l}=de(e);return`${t}--variant-${l}`}),{colorClasses:n,colorStyles:s}=Se(d(()=>{const{variant:l,color:u}=de(e);return{[["elevated","flat"].includes(l)?"background":"text"]:u}}));return{colorClasses:n,colorStyles:s,variantClasses:a}}const Ke=_({baseColor:String,divided:Boolean,...Ge(),...A(),...qe(),...He(),...le(),...U(),...K(),...Ye()},"VBtnGroup"),pe=$()({name:"VBtnGroup",props:Ke(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=J(e),{densityClasses:s}=Xe(e),{borderClasses:l}=Ue(e),{elevationClasses:u}=We(e),{roundedClasses:v}=ie(e);$e({VBtn:{height:"auto",baseColor:E(e,"baseColor"),color:E(e,"color"),density:E(e,"density"),flat:!0,variant:E(e,"variant")}}),N(()=>o(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,l.value,s.value,u.value,v.value,e.class],style:e.style},a))}}),Wt=_({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),qt=_({value:null,disabled:Boolean,selectedClass:String},"group-item");function Xt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=Y("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Ct();Ae(Symbol.for(`${t.description}:id`),s);const l=St(t,null);if(!l){if(!a)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const u=E(e,"value"),v=d(()=>!!(l.disabled.value||e.disabled));l.register({id:s,value:u,disabled:v},n),se(()=>{l.unregister(s)});const f=d(()=>l.isSelected(s)),m=d(()=>l.items.value[0].id===s),g=d(()=>l.items.value[l.items.value.length-1].id===s),y=d(()=>f.value&&[l.selectedClass.value,e.selectedClass]);return j(f,i=>{n.emit("group:selected",{value:i})},{flush:"sync"}),{id:s,isSelected:f,isFirst:m,isLast:g,toggle:()=>l.select(s,!f.value),select:i=>l.select(s,i),selectedClass:y,value:u,disabled:v,group:l}}function Yt(e,t){let a=!1;const n=ve([]),s=Fe(e,"modelValue",[],i=>i==null?[]:Je(n,wt(i)),i=>{const r=Jt(n,i);return e.multiple?r:r[0]}),l=Y("useGroup");function u(i,r){const h=i,c=Symbol.for(`${t.description}:id`),S=xt(c,l==null?void 0:l.vnode).indexOf(r);de(h.value)==null&&(h.value=S,h.useIndexAsValue=!0),S>-1?n.splice(S,0,h):n.push(h)}function v(i){if(a)return;f();const r=n.findIndex(h=>h.id===i);n.splice(r,1)}function f(){const i=n.find(r=>!r.disabled);i&&e.mandatory==="force"&&!s.value.length&&(s.value=[i.id])}_t(()=>{f()}),se(()=>{a=!0}),kt(()=>{for(let i=0;i<n.length;i++)n[i].useIndexAsValue&&(n[i].value=i)});function m(i,r){const h=n.find(c=>c.id===i);if(!(r&&(h!=null&&h.disabled)))if(e.multiple){const c=s.value.slice(),C=c.findIndex(P=>P===i),S=~C;if(r=r??!S,S&&e.mandatory&&c.length<=1||!S&&e.max!=null&&c.length+1>e.max)return;C<0&&r?c.push(i):C>=0&&!r&&c.splice(C,1),s.value=c}else{const c=s.value.includes(i);if(e.mandatory&&c)return;s.value=r??!c?[i]:[]}}function g(i){if(e.multiple,s.value.length){const r=s.value[0],h=n.findIndex(S=>S.id===r);let c=(h+i)%n.length,C=n[c];for(;C.disabled&&c!==h;)c=(c+i)%n.length,C=n[c];if(C.disabled)return;s.value=[n[c].id]}else{const r=n.find(h=>!h.disabled);r&&(s.value=[r.id])}}const y={register:u,unregister:v,selected:s,select:m,disabled:E(e,"disabled"),prev:()=>g(n.length-1),next:()=>g(1),isSelected:i=>s.value.includes(i),selectedClass:d(()=>e.selectedClass),items:d(()=>n),getItemIndex:i=>Kt(n,i)};return Ae(t,y),y}function Kt(e,t){const a=Je(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Je(e,t){const a=[];return t.forEach(n=>{const s=e.find(u=>Me(n,u.value)),l=e[n];(s==null?void 0:s.value)!=null?a.push(s.id):l!=null&&a.push(l.id)}),a}function Jt(e,t){const a=[];return t.forEach(n=>{const s=e.findIndex(l=>l.id===n);if(~s){const l=e[s];a.push(l.value!=null?l.value:s)}}),a}const Qe=Symbol.for("vuetify:v-btn-toggle"),Qt=_({...Ke(),...Wt()},"VBtnToggle");$()({name:"VBtnToggle",props:Qt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:s,prev:l,select:u,selected:v}=Yt(e,Qe);return N(()=>{const f=pe.filterProps(e);return o(pe,ne({class:["v-btn-toggle",e.class]},f,{style:e.style}),{default:()=>{var m;return[(m=a.default)==null?void 0:m.call(a,{isSelected:n,next:s,prev:l,select:u,selected:v})]}})}),{next:s,prev:l,select:u}}});const Zt=["x-small","small","default","large","x-large"],_e=_({size:{type:[String,Number],default:"default"}},"size");function ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return Re(()=>{let a,n;return ue(Zt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:I(e.size),height:I(e.size)}),{sizeClasses:a,sizeStyles:n}})}const en=_({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:fe,...A(),..._e(),...U({tag:"i"}),...K()},"VIcon"),oe=$()({name:"VIcon",props:en(),setup(e,t){let{attrs:a,slots:n}=t;const s=ae(),{themeClasses:l}=J(e),{iconData:u}=It(d(()=>s.value||e.icon)),{sizeClasses:v}=ke(e),{textColorClasses:f,textColorStyles:m}=ee(E(e,"color"));return N(()=>{var i,r;const g=(i=n.default)==null?void 0:i.call(n);g&&(s.value=(r=Bt(g).filter(h=>h.type===Vt&&h.children&&typeof h.children=="string")[0])==null?void 0:r.children);const y=!!(a.onClick||a.onClickOnce);return o(u.value.component,{tag:e.tag,icon:u.value.icon,class:["v-icon","notranslate",l.value,v.value,f.value,{"v-icon--clickable":y,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[v.value?void 0:{fontSize:I(e.size),height:I(e.size),width:I(e.size)},m.value,e.style],role:y?"button":void 0,"aria-hidden":!y,tabindex:y?e.disabled?-1:0:void 0},{default:()=>[g]})}),{}}});function Ze(e,t){const a=ae(),n=D(!1);if(ye){const s=new IntersectionObserver(l=>{n.value=!!l.find(u=>u.isIntersecting)},t);se(()=>{s.disconnect()}),j(a,(l,u)=>{u&&(s.unobserve(u),n.value=!1),l&&s.observe(l)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const tn=_({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...A(),..._e(),...U({tag:"div"}),...K()},"VProgressCircular"),nn=$()({name:"VProgressCircular",props:tn(),setup(e,t){let{slots:a}=t;const n=20,s=2*Math.PI*n,l=ae(),{themeClasses:u}=J(e),{sizeClasses:v,sizeStyles:f}=ke(e),{textColorClasses:m,textColorStyles:g}=ee(E(e,"color")),{textColorClasses:y,textColorStyles:i}=ee(E(e,"bgColor")),{intersectionRef:r,isIntersecting:h}=Ze(),{resizeRef:c,contentRect:C}=Pt(),S=d(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),P=d(()=>Number(e.width)),p=d(()=>f.value?Number(e.size):C.value?C.value.width:Math.max(P.value,32)),w=d(()=>n/(1-P.value/p.value)*2),L=d(()=>P.value/p.value*w.value),R=d(()=>I((100-S.value)/100*s));return pt(()=>{r.value=l.value,c.value=l.value}),N(()=>o(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":h.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},u.value,v.value,m.value,e.class],style:[f.value,g.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[o("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${w.value} ${w.value}`},[o("circle",{class:["v-progress-circular__underlay",y.value],style:i.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":L.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),o("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":L.value,"stroke-dasharray":s,"stroke-dashoffset":R.value},null)]),a.default&&o("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}}),Ee={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},et=_({location:String},"location");function tt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Ce();return{locationStyles:d(()=>{if(!e.location)return{};const{side:l,align:u}=zt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function v(m){return a?a(m):0}const f={};return l!=="center"&&(t?f[Ee[l]]=`calc(100% - ${v(l)}px)`:f[l]=0),u!=="center"?t?f[Ee[u]]=`calc(100% - ${v(u)}px)`:f[u]=0:(l==="center"?f.top=f.left="50%":f[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",f.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),f})}}const an=_({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...A(),...et({location:"top"}),...le(),...U(),...K()},"VProgressLinear"),sn=$()({name:"VProgressLinear",props:an(),emits:{"update:modelValue":e=>!0},setup(e,t){var x;let{slots:a}=t;const n=Fe(e,"modelValue"),{isRtl:s,rtlClasses:l}=Ce(),{themeClasses:u}=J(e),{locationStyles:v}=tt(e),{textColorClasses:f,textColorStyles:m}=ee(e,"color"),{backgroundColorClasses:g,backgroundColorStyles:y}=Z(d(()=>e.bgColor||e.color)),{backgroundColorClasses:i,backgroundColorStyles:r}=Z(d(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:h,backgroundColorStyles:c}=Z(e,"color"),{roundedClasses:C}=ie(e),{intersectionRef:S,isIntersecting:P}=Ze(),p=d(()=>parseFloat(e.max)),w=d(()=>parseFloat(e.height)),L=d(()=>xe(parseFloat(e.bufferValue)/p.value*100,0,100)),R=d(()=>xe(parseFloat(n.value)/p.value*100,0,100)),T=d(()=>s.value!==e.reverse),H=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),O=Et&&((x=window.matchMedia)==null?void 0:x.call(window,"(forced-colors: active)").matches);function W(b){if(!S.value)return;const{left:k,right:B,width:z}=S.value.getBoundingClientRect(),F=T.value?z-b.clientX+(B-z):b.clientX-k;n.value=Math.round(F/z*p.value)}return N(()=>o(e.tag,{ref:S,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&P.value,"v-progress-linear--reverse":T.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,u.value,l.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?I(w.value):0,"--v-progress-linear-height":I(w.value),...e.absolute?v.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:R.value,onClick:e.clickable&&W},{default:()=>[e.stream&&o("div",{key:"stream",class:["v-progress-linear__stream",f.value],style:{...m.value,[T.value?"left":"right"]:I(-w.value),borderTop:`${I(w.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${I(w.value/4)})`,width:I(100-L.value,"%"),"--v-progress-linear-stream-to":I(w.value*(T.value?1:-1))}},null),o("div",{class:["v-progress-linear__background",O?void 0:g.value],style:[y.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),o("div",{class:["v-progress-linear__buffer",O?void 0:i.value],style:[r.value,{opacity:parseFloat(e.bufferOpacity),width:I(L.value,"%")}]},null),o(ze,{name:H.value},{default:()=>[e.indeterminate?o("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(b=>o("div",{key:b,class:["v-progress-linear__indeterminate",b,O?void 0:h.value],style:c.value},null))]):o("div",{class:["v-progress-linear__determinate",O?void 0:h.value],style:[c.value,{width:I(R.value,"%")}]},null)]}),a.default&&o("div",{class:"v-progress-linear__content"},[a.default({value:R.value,buffer:L.value})])]})),{}}}),ln=_({loading:[Boolean,String]},"loader");function rn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{loaderClasses:d(()=>({[`${t}--loading`]:e.loading}))}}function In(e,t){var n;let{slots:a}=t;return o("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||o(sn,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const on=["static","relative","fixed","absolute","sticky"],un=_({position:{type:String,validator:e=>on.includes(e)}},"position");function cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{positionClasses:d(()=>e.position?`${t}--${e.position}`:void 0)}}function dn(){const e=Y("useRoute");return d(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Bn(){var e,t;return(t=(e=Y("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function vn(e,t){var y,i;const a=Lt("RouterLink"),n=d(()=>!!(e.href||e.to)),s=d(()=>(n==null?void 0:n.value)||Ie(t,"click")||Ie(e,"click"));if(typeof a=="string"||!("useLink"in a)){const r=E(e,"href");return{isLink:n,isClickable:s,href:r,linkProps:ve({href:r})}}const l=d(()=>({...e,to:E(()=>e.to||"")})),u=a.useLink(l.value),v=d(()=>e.to?u:void 0),f=dn(),m=d(()=>{var r,h,c;return v.value?e.exact?f.value?((c=v.value.isExactActive)==null?void 0:c.value)&&Me(v.value.route.value.query,f.value.query):((h=v.value.isExactActive)==null?void 0:h.value)??!1:((r=v.value.isActive)==null?void 0:r.value)??!1:!1}),g=d(()=>{var r;return e.to?(r=v.value)==null?void 0:r.route.value.href:e.href});return{isLink:n,isClickable:s,isActive:m,route:(y=v.value)==null?void 0:y.route,navigate:(i=v.value)==null?void 0:i.navigate,href:g,linkProps:ve({href:g,"aria-current":d(()=>m.value?"page":void 0)})}}const fn=_({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function mn(e,t){j(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Ne(()=>{t(!0)})},{immediate:!0})}const me=Symbol("rippleStop"),gn=80;function Le(e,t){e.style.transform=t,e.style.webkitTransform=t}function ge(e){return e.constructor.name==="TouchEvent"}function nt(e){return e.constructor.name==="KeyboardEvent"}const bn=function(e,t){var y;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,s=0;if(!nt(e)){const i=t.getBoundingClientRect(),r=ge(e)?e.touches[e.touches.length-1]:e;n=r.clientX-i.left,s=r.clientY-i.top}let l=0,u=.3;(y=t._ripple)!=null&&y.circle?(u=.15,l=t.clientWidth/2,l=a.center?l:l+Math.sqrt((n-l)**2+(s-l)**2)/4):l=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const v=`${(t.clientWidth-l*2)/2}px`,f=`${(t.clientHeight-l*2)/2}px`,m=a.center?v:`${n-l}px`,g=a.center?f:`${s-l}px`;return{radius:l,scale:u,x:m,y:g,centerX:v,centerY:f}},te={show(e,t){var r;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((r=t==null?void 0:t._ripple)!=null&&r.enabled))return;const n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:l,scale:u,x:v,y:f,centerX:m,centerY:g}=bn(e,t,a),y=`${l*2}px`;s.className="v-ripple__animation",s.style.width=y,s.style.height=y,t.appendChild(n);const i=window.getComputedStyle(t);i&&i.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Le(s,`translate(${v}, ${f}) scale3d(${u},${u},${u})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Le(s,`translate(${m}, ${g}) scale3d(1,1,1)`)},0)},hide(e){var l;if(!((l=e==null?void 0:e._ripple)!=null&&l.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),s=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var v;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((v=a.parentNode)==null?void 0:v.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function at(e){return typeof e>"u"||!!e}function q(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[me])){if(e[me]=!0,ge(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||nt(e),a._ripple.class&&(t.class=a._ripple.class),ge(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{te.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},gn)}else te.show(e,a,t)}}function Te(e){e[me]=!0}function V(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{V(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),te.hide(t)}}function st(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let X=!1;function lt(e){!X&&(e.keyCode===Be.enter||e.keyCode===Be.space)&&(X=!0,q(e))}function it(e){X=!1,V(e)}function rt(e){X&&(X=!1,V(e))}function ot(e,t,a){const{value:n,modifiers:s}=t,l=at(n);if(l||te.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=s.center,e._ripple.circle=s.circle,Tt(n)&&n.class&&(e._ripple.class=n.class),l&&!a){if(s.stop){e.addEventListener("touchstart",Te,{passive:!0}),e.addEventListener("mousedown",Te);return}e.addEventListener("touchstart",q,{passive:!0}),e.addEventListener("touchend",V,{passive:!0}),e.addEventListener("touchmove",st,{passive:!0}),e.addEventListener("touchcancel",V),e.addEventListener("mousedown",q),e.addEventListener("mouseup",V),e.addEventListener("mouseleave",V),e.addEventListener("keydown",lt),e.addEventListener("keyup",it),e.addEventListener("blur",rt),e.addEventListener("dragstart",V,{passive:!0})}else!l&&a&&ut(e)}function ut(e){e.removeEventListener("mousedown",q),e.removeEventListener("touchstart",q),e.removeEventListener("touchend",V),e.removeEventListener("touchmove",st),e.removeEventListener("touchcancel",V),e.removeEventListener("mouseup",V),e.removeEventListener("mouseleave",V),e.removeEventListener("keydown",lt),e.removeEventListener("keyup",it),e.removeEventListener("dragstart",V),e.removeEventListener("blur",rt)}function hn(e,t){ot(e,t,!1)}function yn(e){delete e._ripple,ut(e)}function Cn(e,t){if(t.value===t.oldValue)return;const a=at(t.oldValue);ot(e,t,a)}const Sn={mounted:hn,unmounted:yn,updated:Cn},_n=_({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:Qe},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:fe,appendIcon:fe,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Ge(),...A(),...qe(),...be(),...He(),...qt(),...ln(),...et(),...un(),...le(),...fn(),..._e(),...U({tag:"button"}),...K(),...Ye({variant:"elevated"})},"VBtn"),Vn=$()({name:"VBtn",props:_n(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:s}=J(e),{borderClasses:l}=Ue(e),{densityClasses:u}=Xe(e),{dimensionStyles:v}=he(e),{elevationClasses:f}=We(e),{loaderClasses:m}=rn(e),{locationStyles:g}=tt(e),{positionClasses:y}=cn(e),{roundedClasses:i}=ie(e),{sizeClasses:r,sizeStyles:h}=ke(e),c=Xt(e,e.symbol,!1),C=vn(e,a),S=d(()=>{var x;return e.active!==void 0?e.active:C.isLink.value?(x=C.isActive)==null?void 0:x.value:c==null?void 0:c.isSelected.value}),P=d(()=>S.value?e.activeColor??e.color:e.color),p=d(()=>{var b,k;return{color:(c==null?void 0:c.isSelected.value)&&(!C.isLink.value||((b=C.isActive)==null?void 0:b.value))||!c||((k=C.isActive)==null?void 0:k.value)?P.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:w,colorStyles:L,variantClasses:R}=Ht(p),T=d(()=>(c==null?void 0:c.disabled.value)||e.disabled),H=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),O=d(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function W(x){var b;T.value||C.isLink.value&&(x.metaKey||x.ctrlKey||x.shiftKey||x.button!==0||a.target==="_blank")||((b=C.navigate)==null||b.call(C,x),c==null||c.toggle())}return mn(C,c==null?void 0:c.select),N(()=>{const x=C.isLink.value?"a":e.tag,b=!!(e.prependIcon||n.prepend),k=!!(e.appendIcon||n.append),B=!!(e.icon&&e.icon!==!0);return ce(o(x,ne({type:x==="a"?void 0:"button",class:["v-btn",c==null?void 0:c.selectedClass.value,{"v-btn--active":S.value,"v-btn--block":e.block,"v-btn--disabled":T.value,"v-btn--elevated":H.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,l.value,w.value,u.value,f.value,m.value,y.value,i.value,r.value,R.value,e.class],style:[L.value,v.value,g.value,h.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:T.value||void 0,tabindex:e.loading||e.readonly?-1:void 0,onClick:W,value:O.value},C.linkProps),{default:()=>{var z;return[Ut(!0,"v-btn"),!e.icon&&b&&o("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?o(re,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):o(oe,{key:"prepend-icon",icon:e.prependIcon},null)]),o("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&B?o(oe,{key:"content-icon",icon:e.icon},null):o(re,{key:"content-defaults",disabled:!B,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var F;return[((F=n.default)==null?void 0:F.call(n))??e.text]}})]),!e.icon&&k&&o("span",{key:"append",class:"v-btn__append"},[n.append?o(re,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):o(oe,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&o("span",{key:"loader",class:"v-btn__loader"},[((z=n.loader)==null?void 0:z.call(n))??o(nn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[Sn,!T.value&&e.ripple,"",{center:!!e.icon}]])}),{group:c}}}),kn=_({fluid:{type:Boolean,default:!1},...A(),...be(),...U()},"VContainer"),Pn=$()({name:"VContainer",props:kn(),setup(e,t){let{slots:a}=t;const{rtlClasses:n}=Ce(),{dimensionStyles:s}=he(e);return N(()=>o(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},n.value,e.class],style:[s.value,e.style]},a)),{}}});export{vn as A,Ut as B,Bn as C,Ve as D,At as E,ln as F,et as G,un as H,Mt as I,tt as J,cn as K,In as L,Q as M,Sn as R,xn as V,He as a,le as b,Ue as c,We as d,ie as e,re as f,_n as g,Vn as h,qe as i,oe as j,Xe as k,ee as l,Ge as m,rn as n,nn as o,Ye as p,Pn as q,Wt as r,Yt as s,qt as t,Z as u,fn as v,_e as w,Ht as x,ke as y,Xt as z};
