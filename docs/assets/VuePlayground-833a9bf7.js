import{h as _,i as m,j as f,s,k as g,l as R,o as y,m as a,C as h,_ as u}from"./app-997de2df.js";const w=e=>JSON.parse(decodeURIComponent(e));var V=_({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const n=m(),i=f(!0),t=s(),l=s(),r=s(),o=g(()=>R({},n,w(e.settings))),d=async()=>{const[{ReplStore:v,Repl:p},{default:c}]=await Promise.all([u(()=>import("./repl_vuepress-plugin-md-enhance-b25bb000.js"),[]),u(()=>import("./codemirror-editor_vuepress-plugin-md-enhance-b25bb000.js"),[])]);t.value=p,r.value=c,l.value=new v({serializedState:decodeURIComponent(e.files)}),o.value.vueVersion&&await l.value.setVueVersion(o.value.vueVersion)};return y(async()=>{await d(),i.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[i.value?a(h,{class:"preview-loading",height:192}):null,t.value?a(t.value,{editor:r.value,store:l.value,autoResize:!0,...o.value,layout:"horizontal"}):null])])]}});export{V as default};