import{Q as p}from"./QPage.6b6123d3.js";import{_ as f,H as v,r as i,o as h,B as a,I as s,j as I,D as x,M as _,J as y,K as g,L as k}from"./index.56455a8b.js";import{u as w}from"./question-store.87f0c239.js";/* empty css                */import"./vue-i18n.31a83177.js";const S=e=>(y("data-v-461e0040"),e=e(),g(),e),V={class:"bg-2"},b={key:0,class:"itau-font-blk text-titulos"},B={key:1,class:"text-titulos itau-font-blk animate__animated animate__bounce animate__repeat-3",style:{"font-size":"15rem"}},Q=S(()=>k("h1",{class:"itau-font"},null,-1)),G={__name:"InitGameView",setup(e){const c=v(),{readQuestion:r}=w(),o=i(!0),t=i(3);let n=null;const l=()=>{r(),setTimeout(function(){o.value=!1,u()},3e3)},u=()=>{n=setInterval(m,1e3)},m=()=>{t.value--,t.value<=0&&(clearInterval(n),c.push("/trivia"))};return h(()=>{l()}),(d,R)=>(a(),s("div",V,[I(p,{class:"flex flex-center column animate__animated animate__fadeIn"},{default:x(()=>[o.value?(a(),s("h1",b,_(d.$t("gameReady")),1)):(a(),s("h1",B,_(t.value),1)),Q]),_:1})]))}};var N=f(G,[["__scopeId","data-v-461e0040"]]);export{N as default};
