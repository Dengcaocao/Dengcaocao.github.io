import{d as b,r as y,a as C,c as O,o as m,b as g,w as S,v as T,u as h,e as f,n as W,f as _,F as E,g as $,h as B,i as G,j as I}from"./index-0bb58e8e.js";const k=b("ctx",()=>{const p=y(!0),d=C({mode:"line",color:"#000000",lineWidth:1});return{isGrid:p,ctx:d,updateIsGrid:()=>p.value=!p.value,updateCtx:(i,n)=>{d[i]=n}}}),P=k();function L(){class p{constructor(t){this.canvas=t,this.ctx=t.value.getContext("2d"),this.pathStore=[],this.type="stroke",this.path=new Path2D,this.styleOptions=null}init(t){this.startPoint=t,this.lastPoint=t,this.ctx.moveTo(t.x,t.y)}line(t,e){this.path=new Path2D,this.path.moveTo(this.lastPoint.x,this.lastPoint.y),this.path.lineTo(t,e),this.type="stroke",this.draw(),this.lastPoint={x:t,y:e}}arc(t,e){this.path=new Path2D;const i=t-this.startPoint.x,n=e-this.startPoint.y,o=this.startPoint.x+i/2,a=this.startPoint.y+n/2,r=Math.pow(i*i+n*n,1/2);this.path.arc(o,a,r/2,0,Math.PI*2),this.type="stroke",this.draw()}rect(t,e){this.path=new Path2D;const i=t-this.startPoint.x,n=e-this.startPoint.y;this.path.rect(this.startPoint.x,this.startPoint.y,i,n),this.type="stroke",this.draw()}getMarkSize(t){const e=t/4;switch(!0){case t<100:return{w:1,h:e<2?2:e,incline:2,size:e<2?2:e/2};default:return{w:4,h:20,incline:4,size:10}}}mark(t,e){this.path=new Path2D,this.ctx.save();const i=t-this.startPoint.x,n=e-this.startPoint.y,o=i<0?-1:1,a=Math.pow(i*i+n*n,1/2)*o;let r=Math.asin(Math.sin(n/a));const l={translate:{x:this.startPoint.x,y:this.startPoint.y},rotate:r,fillStyle:"red"};this.setStyle(l);const s=this.getMarkSize(Math.abs(a));this.path.lineTo(0,0),this.path.lineTo(0,-s.w/2),this.path.lineTo(a-s.h*o,-s.size),this.path.lineTo(a-s.h*o-s.incline*o,-s.size*2),this.path.lineTo(a,0),this.path.lineTo(a-s.h*o-s.incline*o,s.size*2),this.path.lineTo(a-s.h*o,s.size),this.path.lineTo(0,s.w/2),this.path.lineTo(0,0),this.type="fill",this.draw(),this.ctx.restore()}text(t,e,i){const o=document.createElement("textarea");o.cols=1,o.rows=1;const a={font:"32px auto",textBaseline:"middle"};this.setStyle(a),o.oninput=r=>{this.clearCanvas(),this.pathStore.forEach(({type:l,styleOptions:s,path:u})=>{u.text?this.ctx.fillText(u.text,u.x,u.y):(this.type=l,this.styleOptions=s,this.path=u,this.draw(!0))}),o.cols=r.target.value.length+1,this.ctx.fillText(r.target.value,t+2,e)},o.onblur=r=>{this.type="fill",this.path={x:t+2,y:e,text:r.target.value},r.target.value&&this.savePath(),o.parentNode.removeChild(o)},o.style.cssText=`
        overflow: hidden;
        position: absolute;
        top: ${e-32/2}px;
        left: ${t}px;
        height: 32px;
        line-height: 32px;
        background-color: transparent;
        outline: none;
        resize: none;
        border: 1px solid #000;
        font-size: 32px;
        white-space: pre-wrap;
        text-indent: 2px;
        color: transparent;
        caret-color: #000;
      `,i.value.appendChild(o)}clear(t,e){this.path=new Path2D,this.ctx.save();const i={lineWidth:20,lineCap:"round",globalCompositeOperation:"destination-out"};this.setStyle(i),this.path.moveTo(this.lastPoint.x,this.lastPoint.y),this.path.lineTo(t,e),this.type="stroke",this.draw(),this.lastPoint={x:t,y:e},this.ctx.restore()}clearCanvas(){this.ctx.clearRect(0,0,this.canvas.value.width,this.canvas.value.height)}setStyle(t){for(let e in t){if(e==="translate"){this.ctx[e](t[e].x,t[e].y);continue}if(e==="rotate"){this.ctx[e](t[e]);continue}this.ctx[e]=t[e]}this.styleOptions=t}draw(t){this.ctx.save(),this.ctx.beginPath(),t&&this.setStyle(this.styleOptions),this.ctx.strokeStyle=P.ctx.color,this.ctx.fillStyle=P.ctx.color,this.ctx.lineWidth=P.ctx.lineWidth,this.type==="stroke"?this.ctx.stroke(this.path):this.ctx.fill(this.path),this.ctx.closePath(),this.ctx.restore()}savePath(){this.pathStore.push({type:this.type,styleOptions:this.styleOptions||{},path:this.path}),this.styleOptions=null,this.type="stroke"}}return{Draw:p}}const X=["max"],Y={class:"item"},j=["onClick"],R={__name:"actionBar",props:{handleDownload:{type:Function,required:!0}},setup(p){const d=p,t=k(),e=y(null),i=y(50),n=C([{icon:"icon-juxing1",type:"rect"},{icon:"icon-yuanxingweixuanzhong",type:"arc"},{icon:"icon-jiantou_youshang",type:"mark"},{icon:"icon-Icon_huabi",type:"line"},{icon:"icon-wenzi",type:"text"},{icon:"icon-rubber-full",type:"clear"},{icon:"icon-xiazai-",type:"download"}]),o=O(()=>e.value?getComputedStyle(e.value).height:0),a=(r,l)=>{if(l==="download")return d.handleDownload();t.updateCtx(r,l)};return(r,l)=>(m(),g("aside",{class:"aside",ref_key:"aside",ref:e},[S(f("input",{class:"line-width",type:"range","onUpdate:modelValue":l[0]||(l[0]=s=>h(t).ctx.lineWidth=s),max:i.value,style:W({width:o.value,"background-image":`linear-gradient(to right, #91caff ${h(t).ctx.lineWidth/i.value*100+"%"}, transparent ${h(t).ctx.lineWidth/100*100+"%"})`}),onChange:l[1]||(l[1]=s=>a("lineWidth",s.target.value))},null,44,X),[[T,h(t).ctx.lineWidth]]),f("div",{class:_(["item iconfont icon-wangge",{"hide-grid":!h(t).isGrid}]),onClick:l[2]||(l[2]=(...s)=>h(t).updateIsGrid&&h(t).updateIsGrid(...s))},null,2),f("div",Y,[S(f("input",{class:"color",type:"color","onUpdate:modelValue":l[3]||(l[3]=s=>h(t).ctx.color=s),onChange:l[4]||(l[4]=s=>a("color",s.target.value))},null,544),[[T,h(t).ctx.color]])]),(m(!0),g(E,null,$(n,s=>(m(),g("div",{class:_(["item iconfont",[s.icon,h(t).ctx.mode===s.type?"active":""]]),key:s.type,onClick:B(u=>a("mode",s.type),["stop"])},null,10,j))),128))],512))}};const N={__name:"drawingBoard",setup(p){const d=k(),{Draw:t}=L(),e=y(),i=y();let n=null;const o=()=>{const{clientWidth:x,clientHeight:c}=document.documentElement;i.value.width=x,i.value.height=c},a=y(!1),r=()=>{const x=i.value.toDataURL(),c=document.createElement("a");c.setAttribute("href",x),c.setAttribute("download",Math.random().toString(16).slice(-6)),c.click()},l=x=>{a.value=!0;const{clientX:c,clientY:w}=x;n.init({x:c,y:w}),d.ctx.mode==="text"&&(a.value=!1,n.text(c,w,e))},s=x=>{if(!a.value)return;const{clientX:c,clientY:w}=x;n.clearCanvas(),["line","clear"].includes(d.ctx.mode)&&n.savePath(),n.pathStore.forEach(({type:z,styleOptions:M,path:v})=>{v.text?n.ctx.fillText(v.text,v.x,v.y):(n.type=z,n.styleOptions=M,n.path=v,n.draw(!0))}),n[d.ctx.mode](c,w)},u=()=>{a.value=!1,n.savePath()},D=()=>{i.value.addEventListener("mousedown",l),i.value.addEventListener("mousemove",s),i.value.addEventListener("onmouseleave",u),i.value.addEventListener("mouseup",u)};return G(()=>{o(),D(),n=new t(i)}),(x,c)=>(m(),g("main",{ref_key:"canvasRoot",ref:e},[f("canvas",{ref_key:"cDom",ref:i,class:_(["canvas",{"show-grid":h(d).isGrid}])},null,2),I(R,{handleDownload:r})],512))}};export{N as default};
