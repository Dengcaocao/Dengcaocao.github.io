import{d as a,r as s,o as t,a as e,c as l,b as n,w as c,e as i,F as d,f as u,i as o,S as r,g as f,t as p,n as _,h as m,j as y}from"./index-dc96143c.js";import{D as k}from"./demoItem.ec88f96f.js";import{A as v,_ as g}from"./index.47a60fdd.js";const w=g(a({__name:"index",setup(a){const g=s([]),w=s([]),C=s([]);return t((()=>{(async()=>{try{const a=await v.queryBanner();Object.assign(g,a.data)}catch(a){console.log(a)}})(),(async()=>{try{const a=await v.queryFirendChain();Object.assign(w,a.data)}catch(a){console.log(a)}})(),(async()=>{const a=(await v.queryCatetory()).data.map((a=>a.data)).map((a=>a.slice(0,5))).flat();Object.assign(C,a)})()})),(a,s)=>{const t=o,v=m,F=y,j=r;return e(),l(d,null,[n(t,{class:"product-container"},{default:c((()=>[n(t,{class:"product-info"},{default:c((()=>[n(t,{class:"product-title"},{default:c((()=>[i("WeBox")])),_:1}),n(t,{class:"product-desc"},{default:c((()=>[i("小样展示平台")])),_:1})])),_:1}),n(t,{class:"product-icon"},{default:c((()=>[n(t,null,{default:c((()=>[i("we")])),_:1}),n(t,null,{default:c((()=>[i("box")])),_:1})])),_:1})])),_:1}),n(t,{class:"content"},{default:c((()=>[n(j,{class:"swiper",circular:"","indicator-dots":!0,"indicator-active-color":"#FFFFFF",autoplay:!0,interval:2e3,duration:500},{default:c((()=>[(e(!0),l(d,null,u(g,(a=>(e(),f(F,{key:a.uuid,onClick:s=>{return t=a.link,void _({url:`/pages/preview/preview?url=${t}`});var t}},{default:c((()=>[n(v,{class:"banner-image",src:a.pic,"lazy-load":""},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1}),n(t,{class:"firend-chain"},{default:c((()=>[(e(!0),l(d,null,u(w,(a=>(e(),f(t,{class:"item",key:a.uuid,onClick:s=>{return t=a.link,void window.open(t);var t}},{default:c((()=>[n(v,{src:a.avatar,"lazy-load":""},null,8,["src"]),n(t,{class:"nickname single-line-text"},{default:c((()=>[i(p(a.nickName),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}),n(t,{class:"up-to-date"},{default:c((()=>[n(t,{class:"head"},{default:c((()=>[i("最新")])),_:1}),n(t,{class:"demo-list"},{default:c((()=>[(e(!0),l(d,null,u(C,(a=>(e(),f(k,{key:a.uuid,data:a,onClick:s=>{return t=a.uuid,void _({url:`/pages/details/details?uuid=${t}`});var t}},null,8,["data","onClick"])))),128))])),_:1})])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-7e93e175"]]);export{w as default};