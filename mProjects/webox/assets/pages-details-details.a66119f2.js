import{d as a,k as s,r as t,o as e,a as n,c as i,b as l,w as o,e as r,t as d,F as u,n as c,h as p,p as f,q as m,i as _,s as v}from"./index-dc96143c.js";import{o as w}from"./uni-app.es.37627cd4.js";import{A as j,_ as y}from"./index.47a60fdd.js";const g=y(a({__name:"details",setup(a){const y=s("");w((a=>{y.value=null==a?void 0:a.uuid}));const g=t([]),x=t({});return e((async()=>{await(async()=>{const a=(await j.queryCatetory()).data.map((a=>a.data)).flat();Object.assign(g,a)})(),(()=>{const a=g.find((a=>a.uuid===y.value));Object.assign(x,a)})()})),(a,s)=>{const t=p,e=f,w=m,j=_,y=v;return n(),i(u,null,[l(t,{class:"preview-img",mode:"widthFix","lazy-load":"",src:x.pic},null,8,["src"]),l(j,{class:"container"},{default:o((()=>[l(j,{class:"title"},{default:o((()=>[l(e,null,{default:o((()=>[r(d(x.title),1)])),_:1}),l(w,{size:"mini",plain:"true",onClick:s[0]||(s[0]=a=>{return s=x.link,void c({url:`/pages/preview/preview?url=${s}`});var s})},{default:o((()=>[r("预览")])),_:1})])),_:1}),l(j,{class:"description"},{default:o((()=>[r(d(x.description),1)])),_:1}),l(j,{class:"content"},{default:o((()=>[l(y,{nodes:x.content},null,8,["nodes"])])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-688550f8"]]);export{g as default};