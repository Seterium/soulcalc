import{d as U,g as R,a as $,o as h,c as f,b as p,t as T,r as B,u as k,e as j,f as z,h as u,i as F,n as D,j as a,k as E,V as K,l as H,F as M,m as V,p as W,P as X,q as Y,w as G,s as A,v as N,x as L,y as Q,z as I,A as Z,B as J,C as ee}from"./vendor.583bbcec.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function te(o){let t="";for(let n=0;n<o.length;n+=5)t+=parseInt(o.substr(n,5),2).toString(32);return t}function oe(o){let e="";for(let t=0;t<o.length;t+=1){let n=parseInt(o.substr(t,1),32).toString(2);n.length<5&&(n="00000".slice(n.length)+n),e+=n}return e}function ne(o){return`#${te(o)}`}function se(o){return oe(o)}const O={encode:ne,decode:se};function le(){return Math.random().toString(16).slice(2)}function ae(){const o=document.createElement("canvas");if(!o.toDataURL)return!1;o.width=1,o.height=1;try{return o.toDataURL("image/webp").substring(5,15)==="image/webp"}catch{return!1}}function ie(o,e,t){return`${o.substring(0,e)}${t}${o.substring(e+1)}`}const ce="/soulcalc/data";async function re(o){return fetch(`${ce}/${o.lang}/talents.json?key=${le()}`).then(e=>e.json())}const x=3.5,P=1,g={scale:x,x:12,y:12,angle:90},b=U("soulTalents",{state:()=>({loading:!0,error:!1,width:0,height:0,nodes:{},talents:{},map:{zoom:P,position:{x:0,y:0}},build:"",hoveredNodeId:null,searchQuery:"",webpSupported:!1,lang:"ru",graph:null}),actions:{async load(){this.loading=!0,this.webpSupported=ae(),await this.loadSoulTalents(),this.createGraph(),this.loadBuild(),this.loading=!1},createGraph(){this.graph=R(),this.graph.addNode("1")},async loadSoulTalents(){try{const{width:o,height:e,nodes:t,talents:n}=await re({lang:"ru"});this.width=o*x+64,this.height=e*x+64,this.talents=n,this.nodes=t,this.nodes[1].active=!0}catch{this.error=!0}},async loadBuild(){const o=Object.keys(this.nodes).length;let e=O.decode(window.location.hash.slice(1));if(e.length===0)this.build=[1,...new Array(o-1).fill(0)].join(""),this.updateBuildUrlHash();else{for(let t=0;t<e.length-1;t+=1)e[t]==="1"&&this.activateNodes([`${t+1}`]);if(e.length<o){const t=new Array(o-e.length).fill(0).join("");e=`${e}${t}`,this.updateBuildUrlHash()}this.build=e}},updateBuildUrlHash(){const o=O.encode(this.build);window.history.replaceState(void 0,"",o)},updateBuild(o,e){this.build=ie(this.build,o,e),this.updateBuildUrlHash()},activateNodes(o){o.forEach(e=>{var t;this.nodes[e].active=!0,this.updateBuild(parseInt(e,10)-1,1),(t=this.graph)==null||t.addNode(e),this.nodes[e].connections.forEach(n=>{var s;(s=this.graph)==null||s.addEdge(e,n)})})},deactivateNodes(o){o.forEach(e=>{var t;this.nodes[e].active=!1,this.updateBuild(parseInt(e,10)-1,0),(t=this.graph)==null||t.removeNode(e)}),this.active.forEach(e=>{var t;try{(t=this.graph)==null||t.shortestPath(e.id,"1")}catch{this.nodes[e.id].active=!1,this.updateBuild(parseInt(e.id,10)-1,0)}})},reset(){this.active.forEach(({id:o})=>{var e;this.nodes[o].active=!1,(e=this.graph)==null||e.removeNode(o)})}},getters:{active(o){return Object.values(o.nodes).filter(({active:e,id:t})=>e&&t!=="1")}}}),ue={class:"cell-details"},de={class:"cell-details__title"},pe={class:"cell-details__description"},he=p("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odio fugit pariatur debitis harum iste tempora. ",-1),_e=p("p",null," Suscipit quo itaque voluptatum temporibus, unde tenetur. Blanditiis, dolor voluptatibus at fugit quisquam quos. ",-1),ve=$({__name:"CellDetails",props:{talent:null},setup(o){const e=o;return(t,n)=>(h(),f("div",ue,[p("div",de,T(e.talent.name),1),p("div",pe,[p("p",null," ID: "+T(e.talent.id),1),he,_e])]))}});const ge=$({__name:"CellTooltip",props:{trigger:null,height:null,topSpace:null},setup(o){const e=o,t=B(),n=b(),s=k(t),l=k(e.trigger),i=j(),r=z(),d=u(()=>`scale(${1/n.map.zoom+.2})`),m=u(()=>{const _=w.value?"right":"left",y=v.value?"bottom":"top";return`${_} ${y}`}),c=u(()=>{const _=l.top.value+i.y.value-e.topSpace,y=e.height-_;return{right:r.width.value-l.right.value,bottom:y}}),v=u(()=>c.value.bottom<=s.height.value+32),S=u(()=>!v.value),w=u(()=>c.value.right<=s.width.value+32),C=u(()=>!w.value);return(_,y)=>(h(),f("div",{ref_key:"$el",ref:t,class:D(["cell-tooltip",{"cell-tooltip--top":a(S),"cell-tooltip--left":a(w),"cell-tooltip--bottom":a(v),"cell-tooltip--right":a(C)}]),style:E({transform:a(d),transformOrigin:a(m)})},[F(_.$slots,"default")],6))}});const fe=$({__name:"CellConnectors",props:{cell:null},setup(o){const e=o,t=b(),n=e.cell.x*g.scale+g.x,s=e.cell.y*g.scale+g.y,l=e.cell.connections.map(i=>{const{x:r,y:d}=t.nodes[i],m=r*g.scale+g.x,c=d*g.scale+g.y,v=new K(m-n,c-s);return{id:i,length:v.length(),angle:v.horizontalAngleDeg()+g.angle}});return(i,r)=>(h(!0),f(M,null,H(a(l),d=>(h(),f("div",{key:d.id,class:D(["cell-connector",{"cell-connector--active":a(t).nodes[d.id].active&&e.cell.active}]),style:E({height:`${d.length}px`,transform:`rotate(${d.angle}deg)`})},null,6))),128))}});function me(o){const e=b(),t=z();let n=null;return V(o,"panzoomchange",s=>{e.map.position.x=s.detail.x,e.map.position.y=s.detail.y}),W(()=>{if(o.value){const s=o.value.parentElement,l=-(e.width/2)+t.width.value/2-16,i=-(e.height/2)+t.height.value*.8/2+32;n=X(o.value,{contain:"outside",startScale:P,minScale:.5,maxScale:1,startX:l,startY:i,cursor:!1}),e.map.zoom=n==null?void 0:n.getScale(),e.map.position.x=l,e.map.position.y=i,s==null||s.addEventListener("wheel",r=>{r.shiftKey&&n&&(n==null||n.zoomWithWheel(r),e.map.zoom=n.getScale(),e.map.position=n.getPan())})}}),n}function ye(o,e,t){return u(()=>`/soulcalc/data/${e}/icons/${o}.${t?"webp":"png"}`)}const $e=["onClick","onContextmenu"],Se=["src","alt"],we=$({__name:"Cell",props:{cell:null,height:null,topSpace:null,isHoverActivateModeActive:{type:Boolean},isHoverDeactivateModeActive:{type:Boolean}},emits:["activate","deactivate"],setup(o,{emit:e}){const t=o,n=B(),s=B(),l=Y(s),i=b(),r=u(()=>i.talents[t.cell.talentId]),d=ye(r.value.icon,i.lang,i.webpSupported);G(l,_=>{_&&(t.isHoverActivateModeActive?w():t.isHoverDeactivateModeActive&&C())});const m=u(()=>`${t.cell.y*x}px`),c=u(()=>`${t.cell.x*x}px`),v=u(()=>t.cell.connections.some(_=>i.nodes[_].active||i.nodes[_].id==="1")),S=u(()=>l.value&&!(t.isHoverActivateModeActive||t.isHoverDeactivateModeActive));function w(){v.value&&e("activate",t.cell.id)}function C(){t.cell.id!=="1"&&e("deactivate",t.cell.id)}return(_,y)=>(h(),f("div",{ref_key:"$el",ref:n,class:"cell",style:E({top:a(m),left:a(c)})},[p("div",{ref_key:"contentEl",ref:s,class:D(["cell__content",{"cell__content--start":t.cell.id==="1","cell__content--active":t.cell.active,"cell__content--uncommon":t.cell.quality===4,"cell__content--rare":t.cell.quality===5}]),onClick:A(w,["left","prevent"]),onContextmenu:[A(C,["right","prevent"]),y[0]||(y[0]=A(()=>{},["prevent"]))]},[p("img",{src:a(d),alt:a(r).name},null,8,Se)],42,$e),N(fe,{cell:t.cell},null,8,["cell"]),a(S)?(h(),L(ge,{key:0,trigger:n.value,height:t.height,"top-space":t.topSpace},{default:Q(()=>[N(ve,{cell:t.cell,talent:a(r)},null,8,["cell","talent"])]),_:1},8,["trigger","height","top-space"])):I("v-if",!0)],4))}});const be=$({__name:"Map",setup(o){const e=B(),t=b();me(e);const n=z(),s=k(e),{KeyE:l,KeyQ:i}=Z();function r(c){t.activateNodes([c])}function d(c){t.deactivateNodes([c])}function m(c){l.value&&!t.nodes[c].active?r(c):i.value&&d(c)}return(c,v)=>(h(),f("div",{ref_key:"$el",ref:e,class:"map",style:E({width:`${a(t).width}px`,height:`${a(t).height}px`})},[(h(!0),f(M,null,H(a(t).nodes,S=>(h(),L(we,{key:S.id,cell:S,height:a(n).height.value,"top-space":a(s).top.value,"is-hover-activate-mode-active":a(l),"is-hover-deactivate-mode-active":a(i),onHoverToogle:m,onActivate:r,onDeactivate:d},null,8,["cell","height","top-space","is-hover-activate-mode-active","is-hover-deactivate-mode-active"]))),128))],4))}});const xe={class:"calculator"},Ce={class:"calculator__stats"},Be=p("p",null,"\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0430\u043B\u0430\u043D\u0442\u043E\u0432 \u0418\u0441\u043A\u0440\u044B",-1),Ee=$({__name:"Calculator",setup(o){const e=b();e.load();const t=u(()=>!e.loading&&!e.error);function n(){e.reset()}return(s,l)=>(h(),f("div",xe,[p("div",Ce,[Be,p("p",null,"\u0412\u044B\u0431\u0440\u0430\u043D\u043E: "+T(a(e).active.length),1),p("p",null,[p("button",{onClick:n}," \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C ")])]),a(t)?(h(),L(be,{key:0})):I("v-if",!0)]))}});const Ae={class:"app"},Te=$({__name:"App",setup(o){return(e,t)=>(h(),f("div",Ae,[N(Ee)]))}});const q=J(Te),ke=ee();q.use(ke);q.mount("#aopro-spark-talents-calc");
