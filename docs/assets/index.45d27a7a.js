var le=Object.defineProperty;var ie=(s,e,t)=>e in s?le(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var F=(s,e,t)=>(ie(s,typeof e!="symbol"?e+"":e,t),t);import{s as ce,d as re,a as y,c as f,H as X,o as h,b as _,e as v,t as P,f as Y,u as i,g as k,V as ue,r as z,n as R,h as q,F as H,i as J,j as Z,k as de,P as he,l as B,m as ee,p as te,w as se,q as ne,v as w,x as Q,E as pe,y as I,z as _e,A as M,B as ve,C as fe,D as me,G as ge,I as ye,J as be}from"./vendor.c5412f26.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function we(s){let t="";for(let n=0;n<s.length;n+=5)t+=parseInt(s.substr(n,5),2).toString(32);return t}function xe(s){let e="";for(let t=0;t<s.length;t+=1){let n=parseInt(s.substr(t,1),32).toString(2);n.length<5&&(n="00000".slice(n.length)+n),e+=n}return e}function Ce(s){return`#${we(s)}`}function $e(s){return xe(s)}const G={encode:Ce,decode:$e};function ke(){return Math.random().toString(16).slice(2)}function Ee(){const s=document.createElement("canvas");if(!s.toDataURL)return!1;s.width=1,s.height=1;try{return s.toDataURL("image/webp").substring(5,15)==="image/webp"}catch{return!1}}function Se(s,e,t){return`${s.substring(0,e)}${t}${s.substring(e+1)}`}function Be(s){return Object.keys(s[0]).reduce((e,t)=>{const n=ce(s.map(o=>{var a;return(a=o==null?void 0:o[t])!=null?a:0}));return e[t]=`<span class="tip-summary">${n}</span>`,e},{})}const Ae="/soulcalc/data";async function Ne(s){return fetch(`${Ae}/${s.lang}/talents.json?key=${ke()}`).then(e=>e.json())}const N=0,U=s=>(s+1>>>1)-1,L=s=>(s<<1)+1,D=s=>s+1<<1;class Ie{constructor(e){F(this,"heap",[]);F(this,"comparator");this.heap=[],this.comparator=e}reset(){this.heap=[]}get size(){return this.heap.length}get isEmpty(){return this.size===0}peek(){return this.heap[N]}push(...e){return e.forEach(t=>{this.heap.push(t),this.siftUp()}),this.size}pop(){const e=this.peek(),t=this.size-1;return t>N&&this.swap(N,t),this.heap.pop(),this.siftDown(),e}replace(e){const t=this.peek();return this.heap[N]=e,this.siftDown(),t}greater(e,t){return this.comparator(this.heap[e],this.heap[t])}swap(e,t){[this.heap[e],this.heap[t]]=[this.heap[t],this.heap[e]]}siftUp(){let e=this.size-1;for(;e>N&&this.greater(e,U(e));)this.swap(e,U(e)),e=U(e)}siftDown(){let e=N;const t=()=>L(e)<this.size&&this.greater(L(e),e)||D(e)<this.size&&this.greater(D(e),e);for(;t();){const n=D(e)<this.size&&this.greater(D(e),L(e))?D(e):L(e);this.swap(e,n),e=n}}}const S=3.5,oe=1,b={scale:S,x:12,y:12,angle:90},K={x:32,y:64},x=re("soulTalents",{state:()=>({loading:!0,error:!1,width:0,height:0,startNodeId:0,nodes:[],talents:[],bonuses:[],map:{zoom:oe,initialPosition:{x:0,y:0},position:{x:0,y:0}},build:"",highlightIds:[],searchQuery:"",webpSupported:!1,lang:"ru",queue:null}),actions:{async load(){this.loading=!0,this.webpSupported=Ee(),await this.loadSoulTalents(),this.createQueue(),this.loadBuild(),this.loading=!1},async loadSoulTalents(){try{const{width:s,height:e,nodes:t,talents:n,bonuses:o,startFrom:a}=await Ne({lang:"ru"});this.width=s*S+64,this.height=e*S+64,this.talents=n,this.nodes=t,this.bonuses=Object.values(o),this.startNodeId=a,this.nodes[a].active=!0,this.map.initialPosition.x=this.nodes[a].x*S,this.map.initialPosition.y=this.nodes[a].y*S}catch{this.error=!0}},async loadBuild(){const s=G.decode(window.location.hash.slice(1));if(s.length===0){this.setClearBuild();return}for(let e=0;e<s.length-1;e+=1)this.nodes[e].active=s[e]==="1";this.setBuild(s)},createQueue(){this.queue=new Ie((s,e)=>s[1]>e[1])},activateNodes(s){s.forEach(e=>{this.nodes[e].active||(this.nodes[e].active=!0,this.updateBuildCell(e,!0))}),this.updateBuildUrlHash()},deactivateNodes(s,e=!0){s.forEach(t=>{if(t===this.startNodeId)return;const n=[t],o=this.nodes[t].connections.filter(a=>this.nodes[a].active);o.length>1&&o.forEach(a=>{n.push(...this.trackRoute(a,t))}),n.forEach(a=>{this.nodes[a].active=!1,this.updateBuildCell(a,!1)})}),e&&this.updateBuildUrlHash()},deactivateTalents(s){s.forEach(e=>{const t=this.activeNodes.reduce((n,o)=>(o.talentId===e&&n.push(o.id),n),[]);this.deactivateNodes(t,!1)}),this.updateBuildUrlHash()},resetNodes(){this.activeNodesIds.forEach(s=>{s!==this.startNodeId&&(this.nodes[s].active=!1)}),this.setClearBuild(),this.updateBuildUrlHash()},trackRoute(s,e){var n,o,a,c;(n=this.queue)==null||n.reset(),(o=this.queue)==null||o.push([s,0]);const t=[];for(t.push(e);!((a=this.queue)!=null&&a.isEmpty);){const d=(c=this.queue)==null?void 0:c.pop()[0];if(d===this.startNodeId)return[];t.push(d);const l=[];this.nodes[d].connections.forEach(r=>{!t.includes(r)&&this.nodes[r].active&&(t.push(r),l.push(r))}),l.forEach(r=>{var p;(p=this.queue)==null||p.push([r,l.length>1?1:0])})}return t},updateBuildCell(s,e){this.build=Se(this.build,s,e?"1":"0")},setBuild(s){if(s.length<this.nodes.length){const e=new Array(this.nodes.length-s.length).fill(0).join("");s=`${s}${e}`,this.build=s}this.build=s,this.updateBuildUrlHash()},setClearBuild(){this.build=[1,...new Array(this.nodes.length-1).fill(0)].join("")},updateBuildUrlHash(){window.history.replaceState(void 0,"",G.encode(this.build))}},getters:{activeNodes(s){return Object.values(s.nodes).filter(({active:e})=>e)},activeNodesIds(){return this.activeNodes.map(({id:s})=>s)},talentsGroups(s){return s.talents.map(e=>{const t=s.nodes.filter(o=>o.talentId===e.id),n=t.filter(({active:o})=>o);return{talent:e,nodes:t,activeNodes:n}})}}}),Te={class:"cell-details"},De={class:"cell-details__title"},He={class:"cell-details__rank"},Me={key:0,class:"tip-green"},Le={class:"cell-details__description"},Pe=["innerHTML"],ze={key:0,class:"cell-details__footer"},Re=y({__name:"CellDetails",props:{cell:null,talent:null,rank:null,maxRank:null,forced:{type:Boolean},available:{type:Boolean},startNode:{type:Boolean}},setup(s){const e=s,t=f(()=>e.rank===0?1:e.rank),n=f(()=>e.rank===e.maxRank?-1:e.forced?e.maxRank:e.rank+1),o=f(()=>{var l;return(l=e.talent.ranks)==null?void 0:l[t.value-1]}),a=f(()=>{var l;return(l=e.talent.ranks)==null?void 0:l[n.value-1]}),c=f(()=>(e.forced||!e.cell.active)&&n.value!==-1),d=f(()=>{var u;const l=X.compile(e.talent.desc),p=Object.keys((u=o.value)!=null?u:{}).reduce((m,g)=>{var T,A;const C=(T=o.value)==null?void 0:T[g],E=(A=a.value)==null?void 0:A[g],O=C!==E&&c.value?`${C} => ${E}`:C;return m[g]=`<span class="tip-diff">${O}</span>`,m},{});return l(p)});return(l,r)=>(h(),_("div",Te,[v("div",De,P(e.talent.name),1),v("div",He,[Y(" \u0420\u0430\u043D\u0433: "+P(i(t))+" ",1),i(c)&&i(n)!==1?(h(),_("span",Me," => "+P(i(n)),1)):k("v-if",!0)]),v("div",Le,[v("p",{innerHTML:i(d)},null,8,Pe)]),e.available||e.startNode?k("v-if",!0):(h(),_("div",ze," \u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C - \u043D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0443\u0437\u043B\u043E\u0432 \u0440\u044F\u0434\u043E\u043C "))]))}});const Oe=y({__name:"CellConnectors",props:{cell:null},setup(s){const e=s,t=x(),n=e.cell.x*b.scale+b.x,o=e.cell.y*b.scale+b.y,a=e.cell.connections.map(c=>{const{x:d,y:l}=t.nodes[c],r=d*b.scale+b.x,p=l*b.scale+b.y,u=new ue(r-n,p-o);return{id:c,length:u.length(),angle:u.horizontalAngleDeg()+b.angle}});return(c,d)=>(h(!0),_(H,null,z(i(a),l=>(h(),_("div",{key:l.id,class:R(["cell-connector",{"cell-connector--active":i(t).nodes[l.id].active&&e.cell.active}]),style:q({height:`${l.length}px`,transform:`rotate(${l.angle}deg)`})},null,6))),128))}});function Fe(s,e){const t=x(),n=J(e);let o=null;return Z(s,"panzoomchange",a=>{t.map.position.x=a.detail.x,t.map.position.y=a.detail.y}),de(()=>{if(s.value){const a=n.width.value/2-(t.map.initialPosition.x+K.x),c=n.height.value/2-(t.map.initialPosition.y+K.y);o=he(s.value,{contain:"outside",startScale:oe,minScale:.1,maxScale:1,cursor:!1,startX:a,startY:c,step:window.screen.width>969?.4:.1,excludeClass:["cell"]}),t.map.position.x=a,t.map.position.y=c,e==null||e.addEventListener("wheel",d=>{if(o){const{x:l,y:r,scale:p}=o.zoomWithWheel(d);t.map.zoom=p,t.map.position.x=l,t.map.position.y=r}})}}),o}function Ue(s,e,t){return f(()=>`/soulcalc/data/${e}/icons/${s}.${t?"webp":"png"}`)}function Qe(s,e){const t=f(()=>`${e*S}px`),n=f(()=>`${s*S}px`);return{top:t,left:n}}const qe=["onClick","onContextmenu"],Ve=["src","alt"],je=y({__name:"Cell",props:{container:null,cell:null,talent:null,height:null,topSpace:null,isHoverActivateModeActive:{type:Boolean},isHoverDeactivateModeActive:{type:Boolean}},emits:["cell:activate","cell:deactivate"],setup(s,{emit:e}){const t=s,n=B(),o=B(),a=ee(o),{shift:c,alt:d}=te(),l=x(),r=f(()=>l.talentsGroups[+t.cell.talentId]),p=Qe(t.cell.x,t.cell.y),u=Ue(t.talent.icon,l.lang,l.webpSupported),m=B(!1);se(a,$=>{console.log("isHovered",$),m.value=$,console.log("isHovered",{isHovered:$,tooltipShowStatus:m.value}),$?(l.highlightIds=[t.cell.talentId],t.isHoverActivateModeActive?T():t.isHoverDeactivateModeActive&&A()):l.highlightIds.includes(t.cell.talentId)&&(l.highlightIds=[])}),ne(n,A,{modifiers:{prevent:!0}}),Z("wheel",()=>{m.value=!1},{passive:!0});const g=f(()=>t.cell.connections.some($=>l.nodes[$].active||l.nodes[$].id===l.startNodeId)),C=f(()=>m.value&&!(t.isHoverActivateModeActive||t.isHoverDeactivateModeActive)),E=f(()=>l.searchQuery.length>=3&&new RegExp(l.searchQuery,"i").test(t.talent.name)&&!(t.isHoverActivateModeActive||t.isHoverDeactivateModeActive)),V=f(()=>l.highlightIds.includes(t.cell.talentId)&&!(t.isHoverActivateModeActive||t.isHoverDeactivateModeActive)),O=f(()=>c.value||d.value);function T(){g.value&&e("cell:activate",t.cell.id)}function A(){t.cell.id!==l.startNodeId&&e("cell:deactivate",t.cell.id)}return($,j)=>(h(),_("div",{ref_key:"$el",ref:n,class:"cell",style:q({top:i(p).top.value,left:i(p).left.value})},[w(i(pe),{placement:"right-start",width:240,"hide-after":0,visible:i(C),"show-arrow":!1},{reference:Q(()=>[v("div",{ref_key:"contentEl",ref:o,class:R(["cell__content",{"cell__content--start":t.cell.id===i(l).startNodeId,"cell__content--active":t.cell.active,"cell__content--uncommon":t.cell.quality===4,"cell__content--rare":t.cell.quality===5}]),onClick:I(T,["left","prevent"]),onContextmenu:[I(A,["right","prevent"]),j[0]||(j[0]=I(()=>{},["prevent"]))]},[v("img",{src:i(u),alt:s.talent.name},null,8,Ve),v("div",{class:R(["cell__frame",{"cell__frame--search":i(E),"cell__frame--group":i(V)}])},null,2)],42,qe)]),default:Q(()=>[w(Re,{cell:t.cell,talent:t.talent,forced:i(O),rank:i(r).activeNodes.length,"max-rank":i(r).nodes.length,available:i(g),"start-node":t.cell.id===i(l).startNodeId},null,8,["cell","talent","forced","rank","max-rank","available","start-node"])]),_:1},8,["visible"]),w(Oe,{cell:t.cell},null,8,["cell"])],4))}});const Ge=y({__name:"CalculatorMap",props:{container:null},setup(s){const e=s,t=B(),n=x();Fe(t,e.container);const o=_e(),a=J(t),{KeyE:c,KeyQ:d}=te();function l(u){n.activateNodes([u])}function r(u){n.deactivateNodes([u])}function p(u){c.value&&!n.nodes[u].active?l(u):d.value&&r(u)}return(u,m)=>(h(),_("div",{ref_key:"$el",ref:t,class:"calculator-map",style:q({width:`${i(n).width}px`,height:`${i(n).height}px`})},[(h(!0),_(H,null,z(i(n).nodes,g=>(h(),M(je,{key:g.id,cell:g,talent:i(n).talents[g.talentId],height:i(o).height.value,"top-space":i(a).top.value,"is-hover-activate-mode-active":i(c),"is-hover-deactivate-mode-active":i(d),container:e.container,onHoverToogle:p,"onCell:activate":l,"onCell:deactivate":r},null,8,["cell","talent","height","top-space","is-hover-activate-mode-active","is-hover-deactivate-mode-active","container"]))),128))],4))}});const Ke={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},We=v("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256l105.3-105.4z"},null,-1);function Xe(s,e){return h(),_("svg",Ke,[k("! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc."),We])}const Ye={render:Xe},Je={class:"calculator-search"},Ze=y({__name:"CalculatorSearch",setup(s){const e=x();function t(){e.searchQuery=""}return(n,o)=>(h(),_("div",Je,[ve(v("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>i(e).searchQuery=a),type:"text",placeholder:"\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E",class:"calculator-search__field"},null,512),[[fe,i(e).searchQuery]]),i(e).searchQuery.length?(h(),_("button",{key:0,class:"calculator-search__clear",onClick:t},[w(i(Ye))])):k("v-if",!0)]))}});const et=["innerHTML"],W=y({__name:"CalculatorBonuse",props:{bonuse:null},setup(s){const e=s,t=B(),n=B(!1),o=ee(t),a=x();se(o,p=>{p?a.highlightIds=e.bonuse.talents:(n.value=!1,a.highlightIds=[])}),ne(t,r,{delay:1500});function c(p){p.buttons&&(n.value=!0)}function d(){n.value=!0}function l(){n.value=!1}function r(){a.highlightIds=[],n.value=!1,a.deactivateTalents(e.bonuse.talents)}return(p,u)=>(h(),_("div",{ref_key:"$el",ref:t,class:R(["calculator-bonuse",{"calculator-bonuse--mousedown":n.value}]),onMousedown:c,onClick:u[0]||(u[0]=I(()=>{},["left","prevent"])),onContextmenu:[u[1]||(u[1]=I(()=>{},["right","prevent"])),u[2]||(u[2]=I(()=>{},["prevent"]))],onTouchstart:d,onTouchend:l,innerHTML:e.bonuse.text},null,42,et))}});const tt={class:"calculator-bonuses"},st=v("div",{class:"calculator-bonuses__title"}," \u042D\u0444\u0444\u0435\u043A\u0442\u044B ",-1),nt={key:1,class:"calculator-bonuses__placeholder"},ot=v("div",{class:"calculator-bonuses__title"}," \u0418\u0433\u0440\u0443\u0448\u043A\u0438 ",-1),at=y({__name:"CalculatorBonuses",setup(s){const e=x(),t=f(()=>me(e.activeNodes,"talentId")),n=e.bonuses.findIndex(({isToy:c})=>c),o=f(()=>{var d,l;return((l=(d=e.bonuses[n])==null?void 0:d.talents)!=null?l:[]).reduce((r,p)=>{var u;if(t.value[p]){const m=(u=e.talents[p])==null?void 0:u.name;m&&r.push({text:m,talents:[p]})}return r},[])}),a=f(()=>e.bonuses.reduce((c,d)=>{if(d.talents.every(m=>t.value[m]===void 0)||d.isToy)return c;const r=d.talents.map(m=>{var C,E;const g=t.value[m]-1;return(E=(C=e.talents[m].ranks)==null?void 0:C[g])!=null?E:{}}),p=X.compile(d.desc),u=Be(r);return c.push({text:p(u),talents:d.talents}),c},[]));return(c,d)=>(h(),_("div",tt,[st,i(a).length?(h(!0),_(H,{key:0},z(i(a),(l,r)=>(h(),M(W,{key:r,bonuse:l},null,8,["bonuse"]))),128)):(h(),_("div",nt," \u041D\u0435\u0442 \u044D\u0444\u0444\u0435\u043A\u0442\u043E\u0432 \u043E\u0442 \u0432\u0437\u044F\u0442\u044B\u0445 \u0432\u0435\u0445 ")),i(o).length?(h(),_(H,{key:2},[ot,(h(!0),_(H,null,z(i(o),(l,r)=>(h(),M(W,{key:r,bonuse:l},null,8,["bonuse"]))),128))],64)):k("v-if",!0)]))}});const lt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},it=v("path",{d:"M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"},null,-1);function ct(s,e){return h(),_("svg",lt,[k("! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc."),it])}const rt={render:ct};const ut={class:"calculator-sidebar"},dt={class:"calculator-sidebar__header"},ht=v("div",{class:"calculator-sidebar__header-text"}," \u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u0418\u0441\u043A\u0440\u044B ",-1),pt={class:"calculator-sidebar__footer"},_t={class:"calculator-sidebar__consumed"},vt=y({__name:"CalculatorSidebar",setup(s){const e=x();function t(){e.resetNodes()}return(n,o)=>(h(),_("div",ut,[v("div",dt,[ht,w(i(rt),{class:"calculator-sidebar__header-icon"})]),w(Ze),w(i(ge),{class:"calculator-sidebar__content"},{default:Q(()=>[w(at)]),_:1}),v("div",pt,[v("div",_t,[Y(" \u041E\u0447\u043A\u043E\u0432 \u0432\u043B\u043E\u0436\u0435\u043D\u043E: "),v("b",null,P(i(e).activeNodesIds.length),1)]),v("button",{class:"calculator-sidebar__reset",onClick:t}," \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435 ")])]))}});const ft={class:"calculator"},mt={class:"calculator__sidebar"},gt=v("div",{id:"tooltip-area",class:"calculator__tooltips"},null,-1),yt=y({__name:"Calculator",setup(s){const e=x();e.load();const t=B(),n=f(()=>!e.loading&&!e.error);return(o,a)=>(h(),_("div",ft,[v("div",{ref_key:"container",ref:t,class:"calculator__container"},[i(n)?(h(),M(Ge,{key:0,container:t.value},null,8,["container"])):k("v-if",!0)],512),v("div",mt,[i(n)?(h(),M(vt,{key:0})):k("v-if",!0)]),gt]))}});const bt={class:"app"},wt=y({__name:"App",setup(s){return(e,t)=>(h(),_("div",bt,[w(yt)]))}});const ae=ye(wt),xt=be();ae.use(xt);ae.mount("#aopro-spark-talents-calc");
