import{s as X,d as Q,g as Z,a as w,u as G,c as i,H as V,o as v,b as m,e as g,t as D,f as J,h as a,i as B,r as E,j as I,k as ee,l as W,m as te,n as H,p as O,V as ne,q as L,F as P,v as oe,w as se,P as le,x as ae,y as ce,z as M,A,B as z,C as ie,D as re,E as ue,G as de}from"./vendor.12449b89.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function he(n){let t="";for(let s=0;s<n.length;s+=5)t+=parseInt(n.substr(s,5),2).toString(32);return t}function pe(n){let e="";for(let t=0;t<n.length;t+=1){let s=parseInt(n.substr(t,1),32).toString(2);s.length<5&&(s="00000".slice(s.length)+s),e+=s}return e}function ve(n){return`#${he(n)}`}function _e(n){return pe(n)}const U={encode:ve,decode:_e};function fe(){return Math.random().toString(16).slice(2)}function ge(){const n=document.createElement("canvas");if(!n.toDataURL)return!1;n.width=1,n.height=1;try{return n.toDataURL("image/webp").substring(5,15)==="image/webp"}catch{return!1}}function me(n,e,t){return`${n.substring(0,e)}${t}${n.substring(e+1)}`}function ye(n){return Object.keys(n[0]).reduce((e,t)=>{const s=X(n.map(o=>{var l;return parseInt((l=o==null?void 0:o[t])!=null?l:"0",10)}));return e[t]=`<span class="tip-summary">${s}</span>`,e},{})}const Ce="/soulcalc/data";async function be(n){return fetch(`${Ce}/${n.lang}/talents.json?key=${fe()}`).then(e=>e.json())}const T=3.5,K=1,x={scale:T,x:12,y:12,angle:90},F={x:32,y:64},S=Q("soulTalents",{state:()=>({loading:!0,error:!1,width:0,height:0,nodes:{},startNodeId:"0",talents:{},bonuses:[],map:{zoom:K,initialPosition:{x:0,y:0},position:{x:0,y:0}},build:"",hoveredId:null,searchQuery:"",webpSupported:!1,lang:"ru",graph:null}),actions:{async load(){this.loading=!0,this.webpSupported=ge(),await this.loadSoulTalents(),this.createGraph(),this.loadBuild(),this.loading=!1},async loadSoulTalents(){try{const{width:n,height:e,nodes:t,talents:s,bonuses:o,startFrom:l}=await be({lang:"ru"});this.width=n*T+64,this.height=e*T+64,this.talents=s,this.nodes=t,this.bonuses=Object.values(o),this.startNodeId=l,this.nodes[l].active=!0,this.map.initialPosition.x=this.nodes[l].x*T,this.map.initialPosition.y=this.nodes[l].y*T}catch{this.error=!0}},async loadBuild(){const n=U.decode(window.location.hash.slice(1));if(n.length===0){this.setClearBuild();return}for(let e=0;e<n.length-1;e+=1)n[e]==="1"&&this.activateNodes([`${e+1}`]);this.setBuild(n)},createGraph(){this.graph=Z(),this.graph.addNode(this.startNodeId)},activateNodes(n,e=!1){n.forEach(t=>{var s;this.nodes[t].active||(this.nodes[t].active=!0,this.updateBuildCell(t,1),(s=this.graph)==null||s.addNode(t),this.nodes[t].connections.forEach(o=>{var l;(l=this.graph)==null||l.addEdge(t,o)}))}),e&&this.checkActiveNodesConnectionWithCenter(),this.updateBuildUrlHash()},deactivateNodes(n){n.forEach(e=>{var t;this.nodes[e].active=!1,this.updateBuildCell(e,0),(t=this.graph)==null||t.removeNode(e)}),this.checkActiveNodesConnectionWithCenter(),this.updateBuildUrlHash()},resetNodes(){this.activeNodesIds.forEach(n=>{var e;n!==this.startNodeId&&(this.nodes[n].active=!1,(e=this.graph)==null||e.removeNode(n))}),this.setClearBuild(),this.updateBuildUrlHash()},checkActiveNodesConnectionWithCenter(){this.activeNodesIds.forEach(n=>{var e;try{(e=this.graph)==null||e.shortestPath(n,"1")}catch{this.nodes[n].active=!1,this.updateBuildCell(n,0)}})},updateBuildCell(n,e){this.build=me(this.build,parseInt(n,10)-1,e)},setBuild(n){const e=Object.keys(this.nodes).length;if(n.length<e){const t=new Array(e-n.length).fill(0).join("");n=`${n}${t}`,this.build=n}this.build=n,this.updateBuildUrlHash()},setClearBuild(){this.build=[1,...new Array(Object.keys(this.nodes).length-1).fill(0)].join("")},updateBuildUrlHash(){window.history.replaceState(void 0,"",U.encode(this.build))}},getters:{activeNodes(n){return Object.values(n.nodes).filter(({active:e})=>e)},activeNodesIds(){return this.activeNodes.map(({id:n})=>n)}}}),$e={class:"cell-details"},ke={class:"cell-details__title"},xe={class:"cell-details__rank"},we={key:0,class:"tip-green"},Se={class:"cell-details__description"},Ne=["innerHTML"],Te=w({__name:"CellDetails",props:{cell:null,talent:null,rank:null,maxRank:null},setup(n){const e=n,t="\u0412\u0430\u0436\u043D\u043E: \u0418\u0433\u0440\u0443\u0448\u043A\u0443 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u0440\u0430\u0437!",{shift:s,alt:o}=G(),l=i(()=>s.value||o.value),c=i(()=>e.rank===0?"1":`${e.rank}`),d=i(()=>e.rank===e.maxRank?"-1":l.value?`${e.maxRank}`:`${e.rank+1}`),u=i(()=>{var _;return(_=e.talent.ranks)==null?void 0:_[c.value]}),b=i(()=>{var _;return(_=e.talent.ranks)==null?void 0:_[d.value]}),y=i(()=>(l.value||!e.cell.active)&&d.value!=="-1"),h=i(()=>{var f;if(e.talent.desc.indexOf(t)!==-1)return`${e.talent.desc.replace(t,"")}<span class="tip-light">${t}</span>`;const _=V.compile(e.talent.desc),k=Object.keys((f=u.value)!=null?f:{}).reduce(($,N)=>{var R,j;const p=(R=u.value)==null?void 0:R[N],C=(j=b.value)==null?void 0:j[N],q=p!==C&&y.value?`${p} => ${C}`:p;return $[N]=`<span class="tip-diff">${q}</span>`,$},{});return _(k)});return(_,r)=>(v(),m("div",$e,[g("div",ke,D(e.talent.name),1),g("div",xe,[J(" \u0420\u0430\u043D\u0433: "+D(a(c))+" ",1),a(y)&&a(d)!=="1"?(v(),m("span",we," => "+D(a(d)),1)):B("v-if",!0)]),g("div",Se,[g("p",{innerHTML:a(h)},null,8,Ne)])]))}});const Be=w({__name:"CellTooltip",props:{container:null,trigger:null,height:null,topSpace:null},setup(n){const e=n,t=E(),s=S(),o=I(e.container),l=I(e.trigger),c=ee(),d=W(),u=i(()=>`scale(${1/s.map.zoom})`),b=i(()=>{const f=r.value?"right":"left",$=h.value?"bottom":"top";return`${f} ${$}`}),y=i(()=>{const f=l.top.value+c.y.value-e.topSpace,$=e.height-f;return{right:d.width.value-l.right.value,bottom:$}}),h=i(()=>y.value.bottom<=o.height.value+32),_=i(()=>!h.value),r=i(()=>y.value.right<=o.width.value+32),k=i(()=>!r.value);return(f,$)=>(v(),m("div",{ref_key:"$el",ref:t,class:H(["cell-tooltip",{"cell-tooltip--top":a(_),"cell-tooltip--left":a(r),"cell-tooltip--bottom":a(h),"cell-tooltip--right":a(k)}]),style:O({transform:a(u),transformOrigin:a(b)})},[te(f.$slots,"default")],6))}});const Ee=w({__name:"CellConnectors",props:{cell:null},setup(n){const e=n,t=S(),s=e.cell.x*x.scale+x.x,o=e.cell.y*x.scale+x.y,l=e.cell.connections.map(c=>{const{x:d,y:u}=t.nodes[c],b=d*x.scale+x.x,y=u*x.scale+x.y,h=new ne(b-s,y-o);return{id:c,length:h.length(),angle:h.horizontalAngleDeg()+x.angle}});return(c,d)=>(v(!0),m(P,null,L(a(l),u=>(v(),m("div",{key:u.id,class:H(["cell-connector",{"cell-connector--active":a(t).nodes[u.id].active&&e.cell.active}]),style:O({height:`${u.length}px`,transform:`rotate(${u.angle}deg)`})},null,6))),128))}});function Ae(n,e){const t=S(),s=I(e);let o=null;return oe(n,"panzoomchange",l=>{t.map.position.x=l.detail.x,t.map.position.y=l.detail.y}),se(()=>{if(n.value){const l=s.width.value/2-(t.map.initialPosition.x+F.x),c=s.height.value/2-(t.map.initialPosition.y+F.y);o=le(n.value,{contain:"outside",startScale:K,minScale:.3,maxScale:1,cursor:!1,startX:l,startY:c}),t.map.position.x=l,t.map.position.y=c,e==null||e.addEventListener("wheel",d=>{d.shiftKey&&o&&(o==null||o.zoomWithWheel(d),t.map.zoom=o.getScale(),t.map.position=o.getPan())})}}),o}function Ie(n,e,t){return i(()=>`/soulcalc/data/${e}/icons/${n}.${t?"webp":"png"}`)}function He(n,e){const t=i(()=>`${e*T}px`),s=i(()=>`${n*T}px`);return{top:t,left:s}}function Oe(n){const e=S(),t=i(()=>Object.values(e.nodes).filter(o=>o.talentId===n.talentId)),s=i(()=>t.value.filter(o=>e.activeNodesIds.includes(o.id)));return{list:t,active:s}}const De=["onClick","onContextmenu"],Me=["src","alt"],Le=w({__name:"Cell",props:{container:null,cell:null,talent:null,height:null,topSpace:null,isHoverActivateModeActive:{type:Boolean},isHoverDeactivateModeActive:{type:Boolean}},emits:["cell:activate","cell:deactivate","group:activate","group:deactivate"],setup(n,{emit:e}){const t=n,s=E(),o=E(),l=ae(o),c=S(),d=He(t.cell.x,t.cell.y),u=Oe(t.cell),b=Ie(t.talent.icon,c.lang,c.webpSupported);ce(l,p=>{p?(c.hoveredId=t.cell.talentId,t.isHoverActivateModeActive?$():t.isHoverDeactivateModeActive&&N()):c.hoveredId===t.cell.talentId&&(c.hoveredId=null)});const y=i(()=>t.cell.connections.some(p=>c.nodes[p].active||c.nodes[p].id==="1")),h=i(()=>l.value&&!(t.isHoverActivateModeActive||t.isHoverDeactivateModeActive)),_=i(()=>!1),r=i(()=>c.hoveredId===t.cell.talentId);function k({shiftKey:p,altKey:C}){$(p||C)}function f({shiftKey:p,altKey:C}){N(p||C)}function $(p=!1){y.value&&(p?e("group:activate",u.list.value.map(({id:C})=>C)):e("cell:activate",t.cell.id))}function N(p=!1){t.cell.id!=="1"&&(p?e("group:deactivate",u.active.value.map(({id:C})=>C)):e("cell:deactivate",t.cell.id))}return(p,C)=>(v(),m("div",{ref_key:"$el",ref:s,class:"cell",style:O({top:a(d).top.value,left:a(d).left.value})},[g("div",{ref_key:"contentEl",ref:o,class:H(["cell__content",{"cell__content--start":t.cell.id==="1","cell__content--active":t.cell.active,"cell__content--uncommon":t.cell.quality===4,"cell__content--rare":t.cell.quality===5}]),onClick:M(k,["left","prevent"]),onContextmenu:[M(f,["right","prevent"]),C[0]||(C[0]=M(()=>{},["prevent"]))]},[g("img",{src:a(b),alt:n.talent.name},null,8,Me),B(` <div class="cell__rank">
        {{ group.active.value.length }}
      </div> `),g("div",{class:H(["cell__frame",{"cell__frame--search":a(_),"cell__frame--group":a(r)}])},null,2)],42,De),A(Ee,{cell:t.cell},null,8,["cell"]),a(h)?(v(),z(Be,{key:0,trigger:s.value,height:t.height,"top-space":t.topSpace,container:t.container},{default:ie(()=>[A(Te,{cell:t.cell,talent:n.talent,rank:a(u).active.value.length,"max-rank":a(u).list.value.length},null,8,["cell","talent","rank","max-rank"])]),_:1},8,["trigger","height","top-space","container"])):B("v-if",!0)],4))}});const Pe=w({__name:"CalculatorMap",props:{container:null},setup(n){const e=n,t=E(),s=S();Ae(t,e.container);const o=W(),l=I(t),{KeyE:c,KeyQ:d}=G();function u(r){s.activateNodes([r])}function b(r){s.deactivateNodes([r])}function y(r){s.activateNodes(r,!0)}function h(r){s.deactivateNodes(r)}function _(r){c.value&&!s.nodes[r].active?u(r):d.value&&b(r)}return(r,k)=>(v(),m("div",{ref_key:"$el",ref:t,class:"calculator-map",style:O({width:`${a(s).width}px`,height:`${a(s).height}px`})},[(v(!0),m(P,null,L(a(s).nodes,f=>(v(),z(Le,{key:f.id,cell:f,talent:a(s).talents[f.talentId],height:a(o).height.value,"top-space":a(l).top.value,"is-hover-activate-mode-active":a(c),"is-hover-deactivate-mode-active":a(d),container:e.container,onHoverToogle:_,"onCell:activate":u,"onCell:deactivate":b,"onGroup:activate":y,"onGroup:deactivate":h},null,8,["cell","talent","height","top-space","is-hover-activate-mode-active","is-hover-deactivate-mode-active","container"]))),128))],4))}});const ze={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},Re=g("path",{d:"M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"},null,-1);function je(n,e){return v(),m("svg",ze,[B("! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc."),Re])}const Ue={render:je},Fe={class:"calculator-sidebar"},Ge={class:"calculator-sidebar__block"},Ve={class:"calculator-sidebar__block-header"},We=g("div",{class:"calculator-sidebar__block-header-text"}," \u042D\u0444\u0444\u0435\u043A\u0442\u044B \u0431\u0438\u043B\u0434\u0430 ",-1),Ke={class:"calculator-sidebar__block-content"},Ye=["innerHTML"],qe=w({__name:"CalculatorSidebar",setup(n){const e=S(),t=i(()=>re(e.activeNodes,"talentId")),s=i(()=>e.bonuses.reduce((o,l)=>{if(l.talents.every(h=>t.value[h]===void 0))return o;const d=l.talents.map(h=>{var r,k;const _=t.value[h];return(k=(r=e.talents[h].ranks)==null?void 0:r[_])!=null?k:{}}),u=V.compile(l.desc),b=ye(d),y=u(b);return o.push({id:l.id,description:y}),o},[]));return(o,l)=>(v(),m("div",Fe,[g("div",Ge,[g("div",Ve,[We,A(a(Ue),{class:"calculator-sidebar__block-header-icon"})]),g("div",Ke,[(v(!0),m(P,null,L(a(s),c=>(v(),m("p",{key:c.id,innerHTML:c.description},null,8,Ye))),128))])])]))}});const Xe={class:"calculator"},Qe={class:"calculator__sidebar"},Ze=w({__name:"Calculator",setup(n){const e=S();e.load();const t=E(),s=i(()=>!e.loading&&!e.error);return(o,l)=>(v(),m("div",Xe,[g("div",{ref_key:"container",ref:t,class:"calculator__container"},[a(s)?(v(),z(Pe,{key:0,container:t.value},null,8,["container"])):B("v-if",!0)],512),g("div",Qe,[A(qe)])]))}});const Je={class:"app"},et=w({__name:"App",setup(n){return(e,t)=>(v(),m("div",Je,[A(Ze)]))}});const Y=ue(et),tt=de();Y.use(tt);Y.mount("#aopro-spark-talents-calc");
