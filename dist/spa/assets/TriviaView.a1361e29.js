import{ad as E,k as J,ac as W,c as h,h as b,am as te,g as G,r as $,a6 as ae,z as le,a8 as oe,a3 as j,_ as ne,an as re,H as se,o as ie,B as m,I as f,L as l,j as z,M as A,ah as Q,F,ao as R,Q as P,J as ce,K as ue}from"./index.56455a8b.js";import{u as de,c as ve,b as me}from"./use-form.b0665f94.js";import{u as fe}from"./question-store.87f0c239.js";/* empty css                */import"./vue-i18n.31a83177.js";const he={...E,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean};function X(e,u,y){return y<=u?u:Math.min(y,Math.max(u,e))}const N=50,Y=2*N,Z=Y*Math.PI,_e=Math.round(Z*1e3)/1e3;var K=J({name:"QCircularProgress",props:{...he,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:u}){const{proxy:{$q:y}}=G(),_=W(e),x=h(()=>{const d=(y.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(y.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-d}deg)`:`rotate3d(0, 0, 1, ${d-90}deg)`}}),k=h(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),s=h(()=>Y/(1-e.thickness/2)),i=h(()=>`${s.value/2} ${s.value/2} ${s.value} ${s.value}`),v=h(()=>X(e.value,e.min,e.max)),w=h(()=>Z*(1-(v.value-e.min)/(e.max-e.min))),I=h(()=>e.thickness/2*s.value);function S({thickness:d,offset:n,color:c,cls:r,rounded:q}){return b("circle",{class:"q-circular-progress__"+r+(c!==void 0?` text-${c}`:""),style:k.value,fill:"transparent",stroke:"currentColor","stroke-width":d,"stroke-dasharray":_e,"stroke-dashoffset":n,"stroke-linecap":q,cx:s.value,cy:s.value,r:N})}return()=>{const d=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&d.push(b("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:N-I.value/2,cx:s.value,cy:s.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&d.push(S({cls:"track",thickness:I.value,offset:0,color:e.trackColor})),d.push(S({cls:"circle",thickness:I.value,offset:w.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const n=[b("svg",{class:"q-circular-progress__svg",style:x.value,viewBox:i.value,"aria-hidden":"true"},d)];return e.showValue===!0&&n.push(b("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},u.default!==void 0?u.default():[b("div",v.value)])),b("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:_.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:v.value},te(u.internal,n))}}}),O=J({name:"QRating",props:{...E,...de,modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],iconAriaLabel:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{slots:u,emit:y}){const{proxy:{$q:_}}=G(),x=W(e),k=ve(e),s=me(k),i=$(0);let v={};const w=h(()=>e.readonly!==!0&&e.disable!==!0),I=h(()=>`q-rating row inline items-center q-rating--${w.value===!0?"":"non-"}editable`+(e.noDimming===!0?" q-rating--no-dimming":"")+(e.disable===!0?" disabled":"")+(e.color!==void 0&&Array.isArray(e.color)===!1?` text-${e.color}`:"")),S=h(()=>{const o=Array.isArray(e.icon)===!0?e.icon.length:0,t=Array.isArray(e.iconSelected)===!0?e.iconSelected.length:0,g=Array.isArray(e.iconHalf)===!0?e.iconHalf.length:0,L=Array.isArray(e.color)===!0?e.color.length:0,V=Array.isArray(e.colorSelected)===!0?e.colorSelected.length:0,a=Array.isArray(e.colorHalf)===!0?e.colorHalf.length:0;return{iconLen:o,icon:o>0?e.icon[o-1]:e.icon,selIconLen:t,selIcon:t>0?e.iconSelected[t-1]:e.iconSelected,halfIconLen:g,halfIcon:g>0?e.iconHalf[t-1]:e.iconHalf,colorLen:L,color:L>0?e.color[L-1]:e.color,selColorLen:V,selColor:V>0?e.colorSelected[V-1]:e.colorSelected,halfColorLen:a,halfColor:a>0?e.colorHalf[a-1]:e.colorHalf}}),d=h(()=>{if(typeof e.iconAriaLabel=="string"){const o=e.iconAriaLabel.length!==0?`${e.iconAriaLabel} `:"";return t=>`${o}${t}`}if(Array.isArray(e.iconAriaLabel)===!0){const o=e.iconAriaLabel.length;if(o>0)return t=>e.iconAriaLabel[Math.min(t,o)-1]}return(o,t)=>`${t} ${o}`}),n=h(()=>{const o=[],t=S.value,g=Math.ceil(e.modelValue),L=w.value===!0?0:null,V=e.iconHalf===void 0||g===e.modelValue?-1:g;for(let a=1;a<=e.max;a++){const C=i.value===0&&e.modelValue>=a||i.value>0&&i.value>=a,B=V===a&&i.value<a,M=i.value>0&&(B===!0?g:e.modelValue)>=a&&i.value<a,D=B===!0?a<=t.halfColorLen?e.colorHalf[a-1]:t.halfColor:t.selColor!==void 0&&C===!0?a<=t.selColorLen?e.colorSelected[a-1]:t.selColor:a<=t.colorLen?e.color[a-1]:t.color,ee=(B===!0?a<=t.halfIconLen?e.iconHalf[a-1]:t.halfIcon:t.selIcon!==void 0&&(C===!0||M===!0)?a<=t.selIconLen?e.iconSelected[a-1]:t.selIcon:a<=t.iconLen?e.icon[a-1]:t.icon)||_.iconSet.rating.icon;o.push({name:(B===!0?a<=t.halfIconLen?e.iconHalf[a-1]:t.halfIcon:t.selIcon!==void 0&&(C===!0||M===!0)?a<=t.selIconLen?e.iconSelected[a-1]:t.selIcon:a<=t.iconLen?e.icon[a-1]:t.icon)||_.iconSet.rating.icon,attrs:{tabindex:L,role:"radio","aria-checked":e.modelValue===a?"true":"false","aria-label":d.value(a,ee)},iconClass:"q-rating__icon"+(C===!0||B===!0?" q-rating__icon--active":"")+(M===!0?" q-rating__icon--exselected":"")+(i.value===a?" q-rating__icon--hovered":"")+(D!==void 0?` text-${D}`:"")})}return o}),c=h(()=>{const o={role:"radiogroup"};return e.disable===!0&&(o["aria-disabled"]="true"),e.readonly===!0&&(o["aria-readonly"]="true"),o});function r(o){if(w.value===!0){const t=X(parseInt(o,10),1,parseInt(e.max,10)),g=e.noReset!==!0&&e.modelValue===t?0:t;g!==e.modelValue&&y("update:modelValue",g),i.value=0}}function q(o){w.value===!0&&(i.value=o)}function H(o,t){switch(o.keyCode){case 13:case 32:return r(t),j(o);case 37:case 40:return v[`rt${t-1}`]&&v[`rt${t-1}`].focus(),j(o);case 39:case 38:return v[`rt${t+1}`]&&v[`rt${t+1}`].focus(),j(o)}}function T(){i.value=0}return ae(()=>{v={}}),()=>{const o=[];return n.value.forEach(({iconClass:t,name:g,attrs:L},V)=>{const a=V+1;o.push(b("div",{key:a,ref:C=>{v[`rt${a}`]=C},class:"q-rating__icon-container flex flex-center",...L,onClick(){r(a)},onMouseover(){q(a)},onMouseout:T,onFocus(){q(a)},onBlur:T,onKeyup(C){H(C,a)}},le(u[`tip-${a}`],[b(oe,{class:t,name:g})])))}),e.name!==void 0&&e.disable!==!0&&s(o,"push"),b("div",{class:I.value,style:x.value,...c.value},o)}}}),p="/assets/contento.8ce583b6.svg",U="/assets/triste.e4316a6a.svg";const ge=e=>(ce("data-v-94981612"),e=e(),ue(),e),ye={class:"row orientation-landscape"},xe={key:0,class:"bg-question row animate__animated animate__fadeIn",style:{height:"100vh"}},be={class:"col-3 self-center"},ke={class:"row justify-center"},we={class:"row q-my-md justify-center"},Se={class:"text-h3 itau-font-bd text-white"},qe={class:"row q-my-md justify-center"},Ce={class:"q-pa-md"},Ae={class:"q-gutter-y-md column"},$e={class:"col-9 self-center q-pr-xl",style:{"padding-right":"10em"}},Ie={class:"row"},Le={class:"text-h2 text-left q-mb-xl text-white itau-font-blk"},Ve={class:"row q-col-gutter-md"},ze={key:1,class:"bg-answer col flex flex-center",style:{height:"100vh"}},Be={key:0,class:"text-center"},Qe={class:"text-h1 itau-font-blk q-pb-xl"},He={key:1,class:"text-center"},Me={class:"text-h1 itau-font-blk q-pb-xl"},je={key:0,class:"bg-question-vert row animate__animated animate__fadeIn orientation-portrait",style:{height:"100vh"}},Fe={class:"col-12 self-center q-pb-xl"},Ne={class:"row justify-center"},Te={class:"row q-my-md justify-center"},De={class:"text-h3 itau-font-bd text-white"},Re={class:"row q-my-md justify-center"},Pe={class:"q-pa-md"},Ke={class:"q-gutter-y-md column"},Oe={class:"col-12 q-px-lg"},Ue={class:"row"},Ee={class:"text-h2 text-center q-mb-md q-px-xl itau-font-blk"},Je={class:"row q-col-gutter-md q-mt-sm q-px-xl text-center"},We={key:1,class:"bg-answer-vert flex flex-center",style:{height:"100vh"}},Ge={key:0,class:"row justify-center"},Xe={class:"itau-font-blk q-pb-xl col-12 text-center"},Ye=ge(()=>l("img",{alt:"Quasar logo",src:p,style:{width:"150px",height:"150px"},class:"animate__animated animate__bounce animate__infinite"},null,-1)),Ze={key:1,class:"text-center col-12"},pe={class:"text-h1 itau-font-blk q-pb-xl"},et={__name:"TriviaView",setup(e){const{randomQuestion:u}=re(fe()),y=se(),_=$(0),x=$(!1),k=$(!1),s=$(0),i=$(15),v=$(null),w=$(!1),I=()=>{w.value=!0,d()};ie(()=>{I()});const S=n=>{clearTimeout(v.value),x.value=!0,n&&(s.value=s.value+1,k.value=!0),setTimeout(function(){let c=_.value+1;c<u.value.length?(_.value=c,i.value=15,d()):(x.value=!1,localStorage.setItem("result",s.value),y.push("/results")),k.value=!1,x.value=!1},3e3)},d=()=>{i.value>0?v.value=setTimeout(()=>{i.value-=1,d()},1e3):S(!1)};return(n,c)=>(m(),f(F,null,[l("div",ye,[x.value?(m(),f("div",ze,[k.value?(m(),f("div",Be,[l("div",Qe,A(n.$t("msg_correct")),1),l("img",{alt:"Quasar logo",src:p,style:{width:"150px",height:"150px"},onClick:c[1]||(c[1]=(...r)=>n.init&&n.init(...r)),class:"animate__animated animate__bounce animate__infinite"})])):(m(),f("div",He,[l("div",Me,A(n.$t("msg_incorrect")),1),l("img",{alt:"Quasar logo",src:U,style:{width:"150px",height:"150px"},onClick:c[2]||(c[2]=(...r)=>n.init&&n.init(...r)),class:"animate__animated animate__hinge animate__slower"})]))])):(m(),f("div",xe,[l("div",be,[l("div",ke,[z(K,{value:i.value,"show-value":!0,max:15,thickness:1,color:"portugues",class:"text-titulos itau-font-bd","font-size":"5rem",size:"150px","track-color":"espanol"},null,8,["value"])]),l("div",we,[l("div",Se,A(n.$t("correct")),1)]),l("div",qe,[l("div",Ce,[l("div",Ae,[z(O,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=r=>s.value=r),size:"4em",color:"espanol",icon:"star_border","icon-selected":"star",disable:""},null,8,["modelValue"])])])])]),l("div",$e,[l("div",Ie,[l("div",Le,A(Q(u)[_.value].pregunta),1)]),l("div",Ve,[(m(!0),f(F,null,R(Q(u)[_.value].answerOptions,(r,q)=>(m(),f("div",{class:"col-12 itau-font-rg",key:q},[z(P,{onClick:H=>S(r.isCorrect),rounded:"",size:"30px",class:"q-px-xl q-py-xs",color:"white","text-color":"dark",label:r.answerText},null,8,["onClick","label"])]))),128))])])]))]),x.value?(m(),f("div",We,[k.value?(m(),f("div",Ge,[l("h1",Xe,A(n.$t("msg_correct")),1),Ye])):(m(),f("div",Ze,[l("div",pe,A(n.$t("msg_incorrect")),1),l("img",{alt:"Quasar logo",src:U,style:{width:"150px",height:"150px"},onClick:c[4]||(c[4]=(...r)=>n.init&&n.init(...r)),class:"animate__animated animate__hinge animate__slower"})]))])):(m(),f("div",je,[l("div",Fe,[l("div",Ne,[z(K,{value:i.value,"show-value":!0,max:15,thickness:1,color:"portugues",class:"text-titulos itau-font-bd","font-size":"5rem",size:"150px","track-color":"espanol"},null,8,["value"])]),l("div",Te,[l("div",De,A(n.$t("correct")),1)]),l("div",Re,[l("div",Pe,[l("div",Ke,[z(O,{modelValue:s.value,"onUpdate:modelValue":c[3]||(c[3]=r=>s.value=r),size:"4em",color:"portugues",icon:"star_border","icon-selected":"star",disable:""},null,8,["modelValue"])])])])]),l("div",Oe,[l("div",Ue,[l("div",Ee,A(Q(u)[_.value].pregunta),1)]),l("div",Je,[(m(!0),f(F,null,R(Q(u)[_.value].answerOptions,(r,q)=>(m(),f("div",{class:"col-12 itau-font-rg",key:q},[z(P,{onClick:H=>S(r.isCorrect),rounded:"",size:"30px",class:"q-px-xl q-py-xs",color:"white","text-color":"dark",label:r.answerText},null,8,["onClick","label"])]))),128))])])]))],64))}};var rt=ne(et,[["__scopeId","data-v-94981612"]]);export{rt as default};
