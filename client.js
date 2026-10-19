window.__ModuleLoader__.load({
  id: "dsh-omp-stats",
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;
var kD=Object.create;var{getPrototypeOf:yD,defineProperty:Ks,getOwnPropertyNames:lq,getOwnPropertyDescriptor:vD}=Object,Kn=Object.prototype.hasOwnProperty;function dq(a){return this[a]}var wD,PD,e=(a,o,t)=>{var r=a!=null&&typeof a==="object";if(r){var s=o?wD??=new WeakMap:PD??=new WeakMap,d=s.get(a);if(d)return d}t=a!=null?kD(yD(a)):{};let l=o||!a||!a.__esModule||!Kn.call(a,"default")?Ks(t,"default",{value:a,enumerable:!0}):t;if(a&&typeof a==="object"||typeof a==="function"){for(let p of lq(a))if(!Kn.call(l,p))Ks(l,p,{get:dq.bind(a,p),enumerable:!0})}if(r)s.set(a,l);return l},RD=(a)=>{var o=(nq??=new WeakMap).get(a),t;if(o)return o;if(o=Ks({},"__esModule",{value:!0}),a&&typeof a==="object"||typeof a==="function"){for(var r of lq(a))if(!Kn.call(o,r))Ks(o,r,{get:dq.bind(a,r),enumerable:!(t=vD(a,r))||t.enumerable})}return nq.set(a,o),o},nq;var MD=(a)=>a;function TD(a,o){this[a]=MD.bind(null,o)}var AD=(a,o)=>{for(var t in o)Ks(a,t,{get:o[t],enumerable:!0,configurable:!0,set:TD.bind(o,t)})};var vF={};AD(vF,{apply:()=>yF,inject:()=>kF});module.exports=RD(vF);var Gn=require("react"),LD=require("react-dom/client");var Sa=require("react");var zq=require("react");var qD=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Qn(a){return String(a).padStart(2,"0")}function Ve(a,o){let t=a instanceof Date?a:new Date(a);if(Number.isNaN(t.getTime()))return"";return o.replace(/MMM|HH|mm|ss|d/gu,(r)=>{switch(r){case"MMM":return qD[t.getMonth()];case"HH":return Qn(t.getHours());case"mm":return Qn(t.getMinutes());case"ss":return Qn(t.getSeconds());case"d":return String(t.getDate());default:return r}})}function uq(a,o={}){let t=a instanceof Date?a:new Date(a),r=Math.round((t.getTime()-Date.now())/1000),s=Math.abs(r),d=new Intl.RelativeTimeFormat("en",{numeric:"auto",style:"long"});if(s<60)return d.format(r,"second");if(s<3600)return d.format(Math.round(r/60),"minute");if(s<86400)return d.format(Math.round(r/3600),"hour");if(s<2592000)return d.format(Math.round(r/86400),"day");if(s<31536000)return d.format(Math.round(r/2592000),"month");return d.format(Math.round(r/31536000),"year")}var iq=60000,yn=60*iq,Ge=24*yn,Zn={"1h":{label:"1h",windowLabel:"the last hour",spanMs:yn,bucketMs:5*iq},"24h":{label:"24h",windowLabel:"the last 24 hours",spanMs:Ge,bucketMs:yn},"7d":{label:"7d",windowLabel:"the last 7 days",spanMs:7*Ge,bucketMs:Ge},"30d":{label:"30d",windowLabel:"the last 30 days",spanMs:30*Ge,bucketMs:Ge},"90d":{label:"90d",windowLabel:"the last 90 days",spanMs:90*Ge,bucketMs:Ge},all:{label:"All",windowLabel:"all time",spanMs:null,bucketMs:Ge}},DD=1500,fq=["1h","24h","7d","30d","90d","all"];function ie(a){return Zn[a]}function vn(a,o){if(o<Ge)return Ve(new Date(a),o<yn?"HH:mm":"MMM d HH:mm");return Ve(new Date(a),"MMM d")}function wn(a,o){if(o<Ge)return Ve(new Date(a),"HH:mm");return Ve(new Date(a),"MMM d")}function Ze(a,o,t=Zn[a].bucketMs,r=Date.now()){let s=Math.floor(r/t)*t,d=Zn[a].spanMs,l;if(d!==null)l=Math.floor((r-d)/t)*t;else{l=s;for(let n of o)if(n<l)l=n;l=Math.floor(l/t)*t}l=Math.max(l,s-(DD-1)*t);let p=[];for(let n=l;n<=s;n+=t)p.push(n);return p}var Qs=require("react");var pq="/api/omp-stats";class mq extends Error{status;endpoint;constructor(a,o,t){super(t);this.name="ApiError",this.status=a,this.endpoint=o}}async function BD(a,o){try{let t=await a.json();if(typeof t==="object"&&t!==null&&"error"in t&&typeof t.error==="string")return t.error}catch{}return`HTTP error ${a.status} on ${o}`}var cq=new WeakMap;async function $e(a,o,t){let r=typeof t==="object"&&t!==null?cq.get(t):void 0,s=o;if(r){let n=new Headers(o?.headers);n.set("If-None-Match",r),s={...o,headers:n}}let d=await fetch(a,s);if(d.status===304&&r)return t;if(!d.ok)throw new mq(d.status,a,await BD(d,a));let l=await d.json(),p=d.headers.get("ETag");if(p&&typeof l==="object"&&l!==null)cq.set(l,p);return l}async function hq(a="24h",o){return $e(`/api/omp-stats/stats/overview?range=${encodeURIComponent(a)}`,{signal:o})}async function gq(a="24h",o){return $e(`/api/omp-stats/stats/model-dashboard?range=${encodeURIComponent(a)}`,{signal:o})}async function xq(a="24h",o){return $e(`/api/omp-stats/stats/costs?range=${encodeURIComponent(a)}`,{signal:o})}async function Pn(a=50,o){return $e(`/api/omp-stats/stats/recent?limit=${a}`,{signal:o})}async function Lq(a="24h",o=50,t){return $e(`/api/omp-stats/stats/errors?range=${encodeURIComponent(a)}&limit=${o}`,{signal:t})}async function Iq(a,o){return $e(`/api/omp-stats/request/${a}`,{signal:o})}async function Cq(){return $e("/api/omp-stats/sync",{method:"POST"})}async function Sq(a="24h",o){return $e(`/api/omp-stats/stats/folders?range=${encodeURIComponent(a)}`,{signal:o})}async function bq(a="24h",o){return $e(`/api/omp-stats/stats/providers?range=${encodeURIComponent(a)}`,{signal:o})}async function Jn(a,o,t){let r=new URLSearchParams({range:a});if(o!==null)r.set("provider",o);return $e(`/api/omp-stats/stats/provider-windows?${r}`,{signal:t})}var ND={phase:"idle",current:0,total:0,processed:0,lastSyncedAt:null,error:null};function OD(){Cq().catch(()=>{})}var kq=null,yq=0,Rn=0,fa={sync:ND,indexingHours:0,connected:!1,requestSync:OD},Yn=new Set;function vq(a){return Yn.add(a),()=>Yn.delete(a)}function wq(){for(let a of Yn)a()}function UD(a,o){return a.phase===o.phase&&a.current===o.current&&a.total===o.total&&a.processed===o.processed&&a.lastSyncedAt===o.lastSyncedAt&&a.error===o.error}function ED(a){if(kq!==a.version)kq=a.version,yq++;let o=Math.max(0,yq-1),t=a.indexingHours!==fa.indexingHours||!UD(a.sync,fa.sync);if(!t&&o===Rn)return;if(Rn=o,t)fa={...fa,sync:a.sync,indexingHours:a.indexingHours};wq()}function jn(a){if(a===fa.connected)return;fa={...fa,connected:a},wq()}var HD=()=>fa,zD=()=>Rn,WD=()=>-1;function Pq(){return Rn}function Rq({children:a}){return Qs.useEffect(()=>{let o=new EventSource(`${pq}/events`);return o.onopen=()=>jn(!0),o.onerror=()=>jn(!1),o.onmessage=(t)=>ED(JSON.parse(t.data)),()=>{o.close(),jn(!1)}},[]),a}function Mq(){return Qs.useSyncExternalStore(vq,HD)}function Tq(a=!0){return Qs.useSyncExternalStore(vq,a?zD:WD)}var Tn=require("react/jsx-runtime");function fe({tone:a="neutral",mono:o,children:t}){return Tn.jsx("span",{className:"badge","data-tone":a,"data-mono":o??!1,children:t})}function Mn({tone:a="neutral",pulse:o}){return Tn.jsx("span",{className:"dot","data-tone":a,"data-pulse":o??!1})}function ca({color:a}){return Tn.jsx("span",{className:"swatch",style:{background:a}})}function ba(a){if(a>=0.05)return"bad";if(a>=0.01)return"warn";return"ok"}var Ie=require("react/jsx-runtime");function G({title:a,description:o,actions:t,flush:r,footer:s,className:d,index:l,stale:p,children:n}){let i=a!==void 0||o!==void 0||t!==void 0;return Ie.jsxs("section",{className:d?`card rise ${d}`:"card rise",style:l!==void 0?{"--i":l}:void 0,children:[i&&Ie.jsxs("header",{className:"card-header",children:[Ie.jsxs("div",{className:"card-titles",children:[a!==void 0&&Ie.jsx("h2",{className:"card-title",children:a}),o!==void 0&&Ie.jsx("p",{className:"card-description",children:o})]}),t!==void 0&&Ie.jsx("div",{className:"card-actions",children:t})]}),Ie.jsx("div",{className:"card-body","data-flush":r??!1,"data-stale":p??!1,children:n}),s!==void 0&&Ie.jsx("footer",{className:"card-footer",children:s})]})}function ye({title:a,description:o,actions:t}){return Ie.jsxs("header",{className:"page-header rise",children:[Ie.jsxs("div",{children:[Ie.jsx("h1",{className:"page-title",children:a}),o!==void 0&&Ie.jsx("p",{className:"page-description",children:o})]}),t!==void 0&&Ie.jsx("div",{className:"page-actions",children:t})]})}var Dn=require("react");var An=(...a)=>a.filter((o,t,r)=>Boolean(o)&&o.trim()!==""&&r.indexOf(o)===t).join(" ").trim();var Aq=(a)=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var qq=(a)=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,t,r)=>r?r.toUpperCase():t.toLowerCase());var el=(a)=>{let o=qq(a);return o.charAt(0).toUpperCase()+o.slice(1)};var Zs=require("react");var qn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Dq=(a)=>{for(let o in a)if(o.startsWith("aria-")||o==="role"||o==="title")return!0;return!1};var Ba=require("react"),VD=Ba.createContext({});var Bq=()=>Ba.useContext(VD);var Fq=Zs.forwardRef(({color:a,size:o,strokeWidth:t,absoluteStrokeWidth:r,className:s="",children:d,iconNode:l,...p},n)=>{let{size:i=24,strokeWidth:u=2,absoluteStrokeWidth:m=!1,color:x="currentColor",className:S=""}=Bq()??{},f=r??m?Number(t??u)*24/Number(o??i):t??u;return Zs.createElement("svg",{ref:n,...qn,width:o??i??qn.width,height:o??i??qn.height,stroke:a??x,strokeWidth:f,className:An("lucide",S,s),...!d&&!Dq(p)&&{"aria-hidden":"true"},...p},[...l.map(([c,I])=>Zs.createElement(c,I)),...Array.isArray(d)?d:[d]])});var N=(a,o)=>{let t=Dn.forwardRef(({className:r,...s},d)=>Dn.createElement(Fq,{ref:d,iconNode:o,className:An(`lucide-${Aq(el(a))}`,`lucide-${a}`,r),...s}));return t.displayName=el(a),t};var GD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],pa=N("circle-alert",GD);var $D=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]],ma=N("plug-zap",$D);var _D=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ha=N("triangle-alert",_D);var XD=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Js=N("activity",XD);var KD=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],js=N("arrow-down",KD);var QD=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ys=N("arrow-right",QD);var ZD=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],en=N("arrow-up-right",ZD);var JD=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],an=N("arrow-up",JD);var jD=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],tn=N("check",jD);var YD=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],on=N("chevron-down",YD);var eB=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ka=N("chevron-right",eB);var aB=[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]],rn=N("coins",aB);var tB=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],sn=N("copy",tB);var oB=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],nn=N("cpu",oB);var rB=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],ln=N("folder-git-2",rB);var sB=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],dn=N("inbox",sB);var nB=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],un=N("layout-grid",nB);var lB=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],fn=N("rotate-cw",lB);var dB=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],cn=N("search",dB);var uB=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ga=N("x",uB);var pn=require("react"),Uq=require("react-dom");var Oq=null;function E2(a){Oq=a}function H2(){return Oq??document.body}var de=require("react/jsx-runtime");function Eq({open:a,onClose:o,title:t,subtitle:r,actions:s,width:d,children:l}){let p=pn.useRef(o);p.current=o;let n=pn.useRef(null);if(pn.useEffect(()=>{if(!a)return;let i=document.activeElement instanceof HTMLElement?document.activeElement:null;n.current?.focus();let u=(m)=>{if(m.key==="Escape")m.preventDefault(),p.current()};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u),i?.focus()}},[a]),!a)return null;return Uq.createPortal(de.jsxs(de.Fragment,{children:[de.jsx("div",{className:"drawer-scrim",onClick:o,role:"presentation"}),de.jsxs("div",{ref:n,className:"drawer",role:"dialog","aria-modal":"true",tabIndex:-1,style:d!==void 0?{"--drawer-w":`${d}px`}:void 0,children:[de.jsxs("header",{className:"drawer-header",children:[de.jsxs("div",{className:"drawer-titles",children:[de.jsx("h2",{className:"drawer-title",children:t}),r!==void 0&&de.jsx("div",{className:"drawer-subtitle",children:r})]}),s,de.jsx("button",{type:"button",className:"btn","data-variant":"ghost","data-icon":"true",onClick:o,"aria-label":"Close",children:de.jsx(ga,{size:16})})]}),de.jsx("div",{className:"drawer-body",children:l})]})]}),H2())}function na({items:a}){return de.jsx("dl",{className:"kv",style:{margin:0},children:a.map((o)=>de.jsxs("div",{className:"kv-item",children:[de.jsx("dt",{className:"kv-key",children:o.label}),de.jsx("dd",{className:"kv-value",style:{margin:0},children:o.value})]},o.key))})}var ya=require("react"),qe=require("react/jsx-runtime");function Bn({data:a,title:o="JSON",initialCollapsed:t=!1}){let[r,s]=ya.useState(t),[d,l]=ya.useState(!1),p=ya.useRef(0),n=JSON.stringify(a,null,2);return ya.useEffect(()=>()=>window.clearTimeout(p.current),[]),qe.jsxs("div",{className:"stack",style:{gap:6},children:[qe.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[qe.jsxs("button",{type:"button",className:"btn","data-variant":"ghost","data-size":"sm",onClick:()=>s((u)=>!u),"aria-expanded":!r,children:[r?qe.jsx(ka,{size:13}):qe.jsx(on,{size:13}),o]}),qe.jsxs("button",{type:"button",className:"btn","data-variant":"ghost","data-size":"sm",onClick:async()=>{try{await navigator.clipboard.writeText(n),l(!0),window.clearTimeout(p.current),p.current=window.setTimeout(()=>l(!1),1500)}catch{}},children:[d?qe.jsx(tn,{size:13}):qe.jsx(sn,{size:13}),d?"Copied":"Copy"]})]}),!r&&qe.jsx("pre",{className:"code-block",children:qe.jsx("code",{children:n})})]})}var Hq=require("react"),cB=require("react-dom");var mn=require("react/jsx-runtime");function zs({value:a,onChange:o,placeholder:t="Filter…",width:r}){return mn.jsxs("label",{className:"search",children:[mn.jsx(cn,{size:14}),mn.jsx("input",{className:"input",type:"search",value:a,placeholder:t,onChange:(s)=>o(s.target.value),style:r!==void 0?{width:r}:void 0})]})}var Ws=require("react"),hn=require("react/jsx-runtime");function De({options:a,value:o,onChange:t,size:r="md","aria-label":s}){let d=Ws.useRef(null),[l,p]=Ws.useState(null);return Ws.useLayoutEffect(()=>{let n=d.current,i=n?.querySelector('[data-active="true"]');if(!n||!i){p(null);return}let u=()=>p({left:i.offsetLeft,width:i.offsetWidth});u();let m=new ResizeObserver(u);return m.observe(n),()=>m.disconnect()},[o,a]),hn.jsxs("div",{ref:d,className:"segmented","data-size":r,role:"radiogroup","aria-label":s,children:[l&&hn.jsx("span",{className:"segmented-thumb",style:{left:l.left,width:l.width}}),a.map((n)=>hn.jsx("button",{type:"button",role:"radio","aria-checked":n.value===o,className:"segmented-option","data-active":n.value===o,title:n.title,onClick:()=>t(n.value),children:n.label},n.value))]})}var $s=require("react");var Vs=require("react");function Fn(){let a=Vs.useRef(null),[o,t]=Vs.useState(0);return Vs.useLayoutEffect(()=>{let r=a.current;if(!r)return;t(r.clientWidth);let s=new ResizeObserver((d)=>{let l=Math.round(d[0]?.contentRect.width??0);t((p)=>p===l?p:l)});return s.observe(r),()=>s.disconnect()},[]),[a,o]}var Gs=require("react/jsx-runtime");function Nn({values:a,color:o="var(--chart-primary)",height:t=28,width:r,area:s=!0}){let[d,l]=Fn(),p=r??l,n=Math.max(0,...a),i=a.length,u="";if(p>0&&i>0){let m=i>1?p/(i-1):0;for(let x=0;x<i;x++){let S=i>1?x*m:p/2,f=n>0?t-2-a[x]/n*(t-4):t-2;u+=`${x===0?"M":"L"}${S.toFixed(1)},${f.toFixed(1)}`}}return Gs.jsx("div",{ref:d,className:"sparkline",style:{width:r??"100%",height:t},children:p>0&&i>0&&Gs.jsxs("svg",{width:p,height:t,"aria-hidden":"true",children:[s&&Gs.jsx("path",{className:"area",d:`${u}L${p},${t}L0,${t}Z`,fill:o}),Gs.jsx("path",{className:"chart-line",d:u,stroke:o})]})})}var Me=require("react/jsx-runtime");function A({label:a,value:o,hint:t,delta:r,spark:s,sparkColor:d,size:l="md",title:p}){let n=mB(typeof o==="string"||typeof o==="number"?o:null);return Me.jsxs("div",{className:"stat","data-size":l,title:p,children:[Me.jsx("div",{className:"stat-label",children:a}),Me.jsx("div",{className:"stat-value","data-flash":n,children:o}),(t!==void 0||r)&&Me.jsxs("div",{className:"stat-foot",children:[r&&Me.jsx(pB,{...r}),t!==void 0&&Me.jsx("span",{className:"truncate",children:t})]}),s&&s.length>1&&Me.jsx("div",{className:"stat-spark",children:Me.jsx(Nn,{values:s,color:d})})]})}function Ce({min:a,children:o}){return Me.jsx("div",{className:"stat-grid rise",style:a!==void 0?{"--stat-min":`${a}px`}:void 0,children:o})}function pB({change:a,good:o="up"}){if(a===null||!Number.isFinite(a))return Me.jsx("span",{className:"delta",children:"new"});let t=Math.abs(a)<0.0005?0:a,r=t===0?void 0:t>0===(o==="up")?"good":"bad",s=t>0?"+":t<0?"−":"±",d=Math.abs(t)*100;return Me.jsxs("span",{className:"delta","data-tone":r,children:[s,d>=100?d.toFixed(0):d.toFixed(1),"%"]})}function mB(a){let o=$s.useRef(a),[t,r]=$s.useState(!1);return $s.useEffect(()=>{if(o.current===a)return;let s=o.current!==null;if(o.current=a,!s)return;r(!0);let d=setTimeout(()=>r(!1),900);return()=>clearTimeout(d)},[a]),t}var J=require("react/jsx-runtime");function j({title:a="Nothing here yet",hint:o}){return J.jsxs("div",{className:"empty",children:[J.jsx(dn,{size:20}),J.jsx("div",{className:"empty-title",children:a}),o!==void 0&&J.jsx("div",{className:"empty-hint",children:o})]})}function On({error:a,onRetry:o}){return J.jsxs("div",{className:"error-state",role:"alert",children:[J.jsx(ha,{size:15}),J.jsx("span",{className:"error-state-message",children:typeof a==="string"?a:a.message}),o&&J.jsxs("button",{type:"button",className:"btn","data-size":"sm","data-variant":"ghost",onClick:o,children:[J.jsx(fn,{size:13})," Retry"]})]})}function he({width:a="100%",height:o=14,style:t}){return J.jsx("div",{className:"skeleton",style:{width:a,height:o,...t}})}function re({height:a=220}){return J.jsx(he,{height:a,style:{borderRadius:8}})}function ge({rows:a=6}){return J.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,padding:"8px 16px 16px"},children:Array.from({length:a},(o,t)=>J.jsx(he,{height:16,width:`${92-t*13%30}%`},t))})}function H({query:a,skeleton:o,isEmpty:t,empty:r,children:s}){if(a.data===null){if(a.error)return J.jsx(On,{error:a.error,onRetry:a.refetch});return J.jsx(J.Fragment,{children:o})}return J.jsxs(J.Fragment,{children:[a.error&&J.jsx(On,{error:a.error,onRetry:a.refetch}),t?.(a.data)?r??J.jsx(j,{}):s(a.data)]})}var va=require("react");var z2="en-US";function g(a){return a.toLocaleString(z2)}function U(a){return a.toLocaleString(z2,{notation:"compact"})}function ce(a,o){if(a===0)return"$0";let t=o!==void 0?o:a>0&&a<0.01?4:2;return`$${a.toLocaleString(z2,{minimumFractionDigits:t,maximumFractionDigits:t})}`}function ae(a,o,t){return a===0&&o>0?"N/A":ce(a,t)}function W2(a){return a.usage.totalTokens>0&&a.usage.cost.total===0&&(a.provider==="xai-oauth"||a.costUnpriced===!0)}function xa(a,o){return ae(a.usage.cost.total,W2(a)?1:0,o)}function z(a,o=1){return`${(a*100).toFixed(o)}%`}function Be(a){let o=a*100;if(o>0&&o<0.005)return"<0.01%";return z(a,o>0&&o<0.1?2:1)}function se(a,o){if(a===null)return"-";let t=a/1000,r=o!==void 0?o:t<1?2:1;return`${t.toFixed(r)}s`}function _e(a){if(a===null)return"-";return a.toFixed(1)}function ue(a){return uq(new Date(a),{addSuffix:!0})}function Fe(a){return Ve(new Date(a),"MMM d, HH:mm:ss")}function Xe(a){return a.replace(/^\/+|\/+$/g,"")||"(root)"}var W=require("react/jsx-runtime");function pe({columns:a,rows:o,rowKey:t,onRowClick:r,selectedKey:s,initialSort:d,limit:l,dense:p,empty:n,expanded:i}){let[u,m]=va.useState(d??null),[x,S]=va.useState(l??Number.POSITIVE_INFINITY),f=va.useMemo(()=>{let C=u?a.find((b)=>b.key===u.key):void 0;if(!u||!C?.sort)return o;let v=C.sort,q=u.dir==="asc"?1:-1;return[...o].sort((b,V)=>{let _=v(b),D=v(V);if(typeof _==="number"&&typeof D==="number")return(_-D)*q;return String(_).localeCompare(String(D))*q})},[o,a,u]);if(o.length===0)return W.jsx(W.Fragment,{children:n??W.jsx(j,{})});let c=f.length>x?f.slice(0,x):f,I=(C)=>{if(!C.sort)return;m((v)=>v?.key===C.key?{key:C.key,dir:v.dir==="asc"?"desc":"asc"}:{key:C.key,dir:C.align==="right"?"desc":"asc"})};return W.jsxs(W.Fragment,{children:[W.jsx("div",{className:"table-wrap",children:W.jsxs("table",{className:"table","data-dense":p??!1,children:[W.jsx("thead",{children:W.jsx("tr",{children:a.map((C)=>{let v=u?.key===C.key?u.dir:void 0;return W.jsxs("th",{"data-align":C.align??"left","data-sortable":C.sort!==void 0,"data-sorted":v,style:C.width!==void 0?{width:C.width}:void 0,title:C.title,onClick:()=>I(C),"aria-sort":v==="asc"?"ascending":v==="desc"?"descending":void 0,children:[C.header,v&&W.jsx("span",{className:"sort-arrow",children:v==="asc"?W.jsx(an,{size:11}):W.jsx(js,{size:11})})]},C.key)})})}),W.jsx("tbody",{children:c.map((C)=>{let v=t(C),q=i?.(C)??null;return W.jsxs(va.Fragment,{children:[W.jsx("tr",{"data-clickable":r!==void 0,"data-selected":s===v,onClick:r?()=>r(C):void 0,onKeyDown:r?(b)=>{if(b.key==="Enter"||b.key===" ")b.preventDefault(),r(C)}:void 0,tabIndex:r?0:void 0,children:a.map((b)=>W.jsx("td",{"data-align":b.align??"left","data-wrap":b.wrap??!1,children:b.render(C)},b.key))}),q!==null&&W.jsx("tr",{children:W.jsx("td",{colSpan:a.length,"data-wrap":"true",style:{padding:0},children:q})})]},v)})})]})}),l!==void 0&&f.length>l&&W.jsxs("div",{className:"table-more",children:[W.jsxs("span",{className:"micro",children:[g(c.length)," of ",g(f.length)]}),f.length>x&&W.jsx("button",{type:"button",className:"btn","data-size":"sm","data-variant":"ghost",onClick:()=>S((C)=>C+l*4),children:"Show more"}),x>l&&W.jsx("button",{type:"button",className:"btn","data-size":"sm","data-variant":"ghost",onClick:()=>S(l),children:"Show fewer"})]})]})}function ve({value:a,max:o,display:t,color:r}){let s=o>0?Math.min(100,a/o*100):0;return W.jsxs("div",{className:"meter-cell",children:[W.jsx("span",{className:"num",children:t}),W.jsx("div",{className:"meter",children:W.jsx("div",{className:"meter-fill",style:{width:`${s}%`,background:r}})})]})}function we({primary:a,secondary:o,lead:t}){return W.jsxs("div",{className:"row",style:{gap:10},children:[t,W.jsxs("div",{className:"stack",style:{gap:0},children:[W.jsx("span",{className:"cell-primary truncate",children:a}),o!==void 0&&W.jsx("span",{className:"cell-secondary truncate",children:o})]})]})}var hB=[{heading:"Usage",items:[{id:"overview",label:"Overview",icon:un},{id:"models",label:"Models",icon:nn},{id:"providers",label:"Providers",icon:ma},{id:"costs",label:"Costs",icon:rn}]},{heading:"Activity",items:[{id:"requests",label:"Requests",icon:Js},{id:"errors",label:"Errors",icon:pa}]},{heading:"Insights",items:[{id:"projects",label:"Projects",icon:ln}]}],V2=hB.flatMap((a)=>a.items),zO=V2.map((a)=>a.id);var X=require("react/jsx-runtime"),gB=fq.map((a,o)=>({value:a,label:ie(a).label,title:`${ie(a).windowLabel} (${o+1})`}));function Wq({section:a,onSectionChange:o,range:t,onRangeChange:r,children:s}){return X.jsxs("div",{className:"omp-dsh-shell",children:[X.jsxs("header",{className:"omp-dsh-header",children:[X.jsxs("div",{className:"omp-dsh-brand",children:[X.jsxs("svg",{viewBox:"0 0 64 64",width:"20",height:"20","aria-hidden":"true",children:[X.jsx("defs",{children:X.jsxs("linearGradient",{id:"dsh-omp-mark",x1:"0",y1:"0",x2:"1",y2:"1",children:[X.jsx("stop",{offset:"0",stopColor:"#ed4abf"}),X.jsx("stop",{offset:".55",stopColor:"#b45cff"}),X.jsx("stop",{offset:"1",stopColor:"#5ad8e6"})]})}),X.jsx("path",{fill:"url(#dsh-omp-mark)",d:"M8 14h48v8H42v30h-8V22h-8v30h-8V22H8z"})]}),X.jsx("span",{className:"omp-dsh-brand-name",children:"dsh"}),X.jsx("span",{className:"omp-dsh-brand-slash",children:"/"}),X.jsx("span",{className:"omp-dsh-brand-page",children:"stats"})]}),X.jsx("nav",{className:"omp-dsh-nav","aria-label":"Stats pages",children:V2.map((d)=>X.jsxs("button",{type:"button",className:"omp-dsh-nav-item","data-active":d.id===a,"aria-current":d.id===a?"page":void 0,onClick:()=>o(d.id),children:[X.jsx(d.icon,{size:14}),X.jsx("span",{children:d.label})]},d.id))}),X.jsxs("div",{className:"omp-dsh-actions",children:[X.jsx(De,{options:gB,value:t,onChange:r,"aria-label":"Time range"}),X.jsx(xB,{})]})]}),X.jsx("main",{className:"omp-dsh-body",children:s})]})}function xB(){let{sync:a,connected:o,requestSync:t}=Mq(),[r,s]=zq.useState(!1),d=a.phase==="syncing"?`Indexing ${a.current}/${a.total}`:a.phase==="error"?"Error":o?"Live":"Offline";return X.jsxs("button",{type:"button",className:"omp-live","data-connected":o,"data-error":a.phase==="error",title:a.error??"Refresh session data",disabled:r||a.phase==="syncing",onClick:()=>{s(!0),t(),setTimeout(()=>s(!1),800)},children:[X.jsx("span",{className:"omp-live-dot"}),d]})}var Ln=require("react");var Ue=require("react/jsx-runtime");function gn({items:a,max:o,onSelect:t}){let r=o??Math.max(0,...a.map((s)=>s.value));return Ue.jsx("div",{className:"bar-list",children:a.map((s)=>{let d=r>0?Math.max(0.5,s.value/r*100):0,l=Ue.jsxs(Ue.Fragment,{children:[Ue.jsx("span",{className:"bar-list-fill",style:{width:`${d}%`,background:s.color??"var(--chart-primary)"}}),Ue.jsx("span",{className:"bar-list-label",children:s.label}),Ue.jsx("span",{className:"bar-list-value",children:s.display??g(s.value)})]});return t?Ue.jsx("button",{type:"button",className:"bar-list-row",onClick:()=>t(s.key),children:l},s.key):Ue.jsx("div",{className:"bar-list-row",children:l},s.key)})})}var la=require("react");var O=require("react/jsx-runtime"),wa=10,LB=24,IB=68,CB=4;function Pa({slots:a,tickLabel:o,tooltipTitle:t,series:r,kind:s="bars",stacked:d=!0,height:l=220,format:p=U,formatRight:n,formatTooltip:i,yMax:u,yMaxRight:m,hidden:x,showTotal:S,references:f,onSelect:c,emptyLabel:I="No data in this range",tooltipExtra:C}){let[v,q]=Fn(),[b,V]=la.useState(null),_=la.useId().replace(/:/g,""),D=la.useMemo(()=>r.filter((L)=>!x?.has(L.key)),[r,x]),M=la.useMemo(()=>{let L=D.filter((Z)=>Z.axis!=="right"),E=D.filter((Z)=>Z.axis==="right"),me=(Z)=>d&&(Z.kind??s)!=="line",Pe=new Map,ee=Array.from({length:a},()=>0),ke=0;for(let Z of L)if(me(Z)){let Re=ee.slice();Pe.set(Z.key,Re);for(let kn=0;kn<a;kn++)ee[kn]+=Z.values[kn]??0}else for(let Re=0;Re<a;Re++)ke=Math.max(ke,Z.values[Re]??0);for(let Z of ee)ke=Math.max(ke,Z);let Oe=0;for(let Z of E)for(let Re=0;Re<a;Re++)Oe=Math.max(Oe,Z.values[Re]??0);for(let Z of f??[])if(Z.axis==="right")Oe=Math.max(Oe,Z.value);else ke=Math.max(ke,Z.value);let Le=Vq(u??ke),Da=E.length>0?Vq(m??Oe):null,bn=D.every((Z)=>Z.values.every((Re)=>!Re));return{left:L,right:E,bases:Pe,stackable:me,leftScale:Le,rightScale:Da,empty:bn}},[D,a,d,s,u,m,f]),y=M.leftScale.ticks.map((L)=>p(L)),Y=M.rightScale?.ticks.map((L)=>(n??p)(L))??[],K=Math.max(28,Gq(y)+12),qa=M.rightScale?Math.max(28,Gq(Y)+12):8,We=Math.max(0,q-K-qa),Q=l-wa-LB,le=a>0?We/a:0,Te=(L)=>wa+Q-L/M.leftScale.max*Q,Xs=(L)=>wa+Q-L/(M.rightScale?.max??1)*Q,Qe=(L)=>K+(L+0.5)*le,sq=D.filter((L)=>(L.kind??s)==="bars"),$n=sq.filter((L)=>!M.stackable(L)||L.axis==="right"),_n=Math.max(1,Math.min(56,le*(le>6?0.72:0.9))),ID=Math.max(1,Math.ceil(a/Math.max(1,Math.floor(We/IB)))),CD=(L)=>{let E=L.currentTarget.getBoundingClientRect(),me=Math.floor((L.clientX-E.left)/(E.width/a));V(me>=0&&me<a?me:null)},Xn=b===null?[]:D.filter((L)=>L.tooltip!==!1).map((L)=>({s:L,v:L.values[b]})).filter((L)=>L.v!==null&&L.v!==void 0&&(L.v!==0||D.length===1)).sort((L,E)=>D.length>1?E.v-L.v:0),SD=Xn.filter((L)=>L.s.axis!=="right").reduce((L,E)=>L+E.v,0),bD=S??(d&&M.left.length>1);return O.jsxs("div",{className:"chart",ref:v,"data-hovering":b!==null,style:{height:l},children:[q>0&&O.jsxs("svg",{width:q,height:l,role:"img",children:[O.jsx("defs",{children:D.filter((L)=>L.pattern==="hatch").map((L)=>O.jsxs("pattern",{id:`${_}-${G2(L.key)}`,width:"5",height:"5",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[O.jsx("rect",{width:"5",height:"5",fill:L.color,fillOpacity:"0.14"}),O.jsx("rect",{width:"1.6",height:"5",fill:L.color})]},L.key))}),O.jsx("g",{className:"chart-grid",children:M.leftScale.ticks.map((L)=>O.jsx("line",{x1:K,x2:K+We,y1:Te(L),y2:Te(L)},L))}),O.jsxs("g",{className:"chart-axis",children:[M.leftScale.ticks.map((L,E)=>O.jsx("text",{x:K-8,y:Te(L),dy:"0.32em",textAnchor:"end",children:y[E]},L)),M.rightScale?.ticks.map((L,E)=>O.jsx("text",{x:K+We+8,y:Xs(L),dy:"0.32em",textAnchor:"start",children:Y[E]},L)),Array.from({length:a},(L,E)=>E%ID===0?O.jsx("text",{x:Qe(E),y:l-6,textAnchor:"middle",children:o(E)},E):null)]}),b!==null&&O.jsx("rect",{className:"chart-cursor",x:K+b*le,y:wa,width:le,height:Q}),D.filter((L)=>(L.kind??s)==="area").map((L)=>{let E=L.axis==="right"?Xs:Te,me=M.bases.get(L.key),Pe=(Le)=>(me?.[Le]??0)+(L.values[Le]??0),ee=$q(a,Qe,(Le)=>E(Pe(Le))),ke=Array.from({length:a},(Le,Da)=>a-1-Da).map((Le)=>`L${Qe(Le).toFixed(1)},${E(me?.[Le]??0).toFixed(1)}`).join(""),Oe=L.pattern==="hatch"?`url(#${_}-${G2(L.key)})`:L.color;return O.jsxs("g",{children:[O.jsx("path",{d:`${ee}${ke}Z`,fill:Oe,fillOpacity:L.pattern?1:0.2}),O.jsx("path",{className:"chart-line",d:ee,stroke:L.color})]},L.key)}),sq.map((L)=>{let E=L.axis==="right"?Xs:Te,me=M.bases.get(L.key),Pe=$n.indexOf(L),ee=Pe>=0?_n/$n.length:_n,ke=L.pattern==="hatch"?`url(#${_}-${G2(L.key)})`:L.color;return O.jsx("g",{children:L.values.map((Oe,Le)=>{if(!Oe)return null;let Da=Pe>=0?0:me?.[Le]??0,bn=E(Da),Z=E(Da+Oe),Re=Qe(Le)-_n/2+(Pe>=0?Pe*ee:0);return O.jsx("rect",{className:"chart-bar","data-hover":b===Le,x:Re,y:Math.min(bn,Z),width:Math.max(1,ee-(Pe>=0&&$n.length>1?1:0)),height:Math.max(Oe>0?1:0,Math.abs(bn-Z)),fill:ke},Le)})},L.key)}),D.filter((L)=>(L.kind??s)==="line").map((L)=>{let E=L.axis==="right"?Xs:Te,me=(Pe)=>{let ee=L.values[Pe];return ee===null||ee===void 0?null:E(ee)};return O.jsxs("g",{children:[O.jsx("path",{className:"chart-line",d:$q(a,Qe,me),stroke:L.color,strokeDasharray:L.dashed?"4 3":void 0}),L.values.map((Pe,ee)=>{let ke=me(ee);if(ke===null||ee>0&&me(ee-1)!==null||ee<a-1&&me(ee+1)!==null)return null;return O.jsx("circle",{cx:Qe(ee),cy:ke,r:2.5,fill:L.color},ee)})]},L.key)}),f?.map((L)=>{let E=L.axis==="right"?Xs(L.value):Te(L.value);return O.jsxs("g",{className:"chart-axis",children:[O.jsx("line",{x1:K,x2:K+We,y1:E,y2:E,stroke:"var(--line-4)",strokeDasharray:"3 3"}),L.label&&O.jsx("text",{x:K+We-4,y:E-5,textAnchor:"end",children:L.label})]},`${L.axis??"left"}:${L.value}`)}),O.jsx("line",{className:"chart-baseline",x1:K,x2:K+We,y1:Te(0),y2:Te(0)}),O.jsx("rect",{x:K,y:wa,width:We,height:Q,fill:"transparent",onPointerMove:CD,onPointerLeave:()=>V(null),onClick:c&&b!==null?()=>c(b):void 0,style:{cursor:c?"pointer":"crosshair"}})]}),M.empty&&O.jsx("div",{className:"chart-empty",children:I}),b!==null&&!M.empty&&O.jsxs("div",{className:"chart-tooltip",style:Qe(b)>q/2?{right:q-Qe(b)+Math.min(le/2,24)+8,top:wa}:{left:Qe(b)+Math.min(le/2,24)+8,top:wa},children:[O.jsx("div",{className:"chart-tooltip-title",children:(t??o)(b)}),Xn.map(({s:L,v:E})=>O.jsxs("div",{className:"chart-tooltip-row",children:[O.jsx("span",{className:"swatch",style:{background:L.color}}),O.jsx("span",{className:"chart-tooltip-label",children:L.label}),O.jsx("span",{className:"chart-tooltip-value",children:L.axis==="right"?(n??p)(E):(i??p)(E)})]},L.key)),bD&&Xn.length>1&&O.jsxs("div",{className:"chart-tooltip-row chart-tooltip-total",children:[O.jsx("span",{className:"chart-tooltip-label",children:"Total"}),O.jsx("span",{className:"chart-tooltip-value",children:(i??p)(SD)})]}),C&&O.jsx(la.Fragment,{children:C(b)})]})]})}function Vq(a){if(!(a>0))return{max:1,ticks:[0]};let o=a/CB,t=10**Math.floor(Math.log10(o)),r=[1,2,2.5,5,10].map((l)=>l*t).find((l)=>l>=o)??10*t,s=Math.ceil(a/r)*r,d=[];for(let l=0;l<=s+r/2;l+=r)d.push(Number(l.toPrecision(12)));return{max:s,ticks:d}}function Gq(a){return a.reduce((o,t)=>Math.max(o,t.length*6.3),0)}function $q(a,o,t){let r="",s=!1;for(let d=0;d<a;d++){let l=t(d);if(l===null){s=!1;continue}r+=`${s?"L":"M"}${o(d).toFixed(1)},${l.toFixed(1)}`,s=!0}return r}function G2(a){return a.replace(/[^a-zA-Z0-9_-]/g,"_")}var Un=require("react"),Ee=require("react/jsx-runtime");function He({items:a,hidden:o,onToggle:t}){return Ee.jsx("div",{className:"legend",children:a.map((r)=>{let s=Ee.jsxs(Ee.Fragment,{children:[Ee.jsx("span",{className:"swatch",style:{background:r.color}}),Ee.jsx("span",{className:"truncate",children:r.label}),r.value&&Ee.jsx("span",{className:"legend-value",children:r.value})]});return t?Ee.jsx("button",{type:"button",className:"legend-item","data-off":o?.has(r.key)??!1,onClick:()=>t(r.key),title:r.label,children:s},r.key):Ee.jsx("span",{className:"legend-item",title:r.label,children:s},r.key)})})}function La(){let[a,o]=Un.useState(()=>new Set),t=Un.useCallback((r)=>{o((s)=>{let d=new Set(s);if(!d.delete(r))d.add(r);return d})},[]);return[a,t]}var $2=require("react/jsx-runtime");function Ia({segments:a,height:o=8}){let t=a.reduce((r,s)=>r+Math.max(0,s.value),0);return $2.jsx("div",{className:"share-bar",style:{height:o},role:"img",children:t>0&&a.filter((r)=>r.value>0).map((r)=>$2.jsx("div",{className:"share-bar-seg",style:{flexGrow:r.value/t,background:r.color},title:`${r.label}: ${(r.value/t*100).toFixed(1)}%`},r.key))})}var _q=require("react/jsx-runtime");function Ra({buckets:a,bucketMs:o,onSelectBucket:t,...r}){return _q.jsx(Pa,{...r,slots:a.length,tickLabel:(s)=>wn(a[s],o),tooltipTitle:(s)=>vn(a[s],o),onSelect:t?(s)=>t(a[s]):void 0})}var Ke=["#5ad8e6","#ed4abf","#9d7bff","#f5b54a","#4ade80","#5b8cff","#ff7a59","#2dd4bf","#c3e94f","#fb7185"],Ne="#6c6c74";function te(a,o){return`${a}::${o}`}function En(a){return _2(a.map((o)=>({key:te(o.model,o.provider),weight:o.totalRequests})))}function _2(a){let o=[...a].sort((t,r)=>r.weight-t.weight||t.key.localeCompare(r.key));return new Map(o.map((t,r)=>[t.key,Ke[r%Ke.length]]))}var oe=require("react");var SB={entries:new Map,limit:128},bB={entries:new Map,limit:4},kB={entries:new Map,limit:16},Ma=new Map;function Xq(a){if(a.startsWith('["trace",'))return bB;if(a.startsWith('["request",'))return kB;return SB}function xn(a){return Xq(a).entries.get(a)}function Kq(a){return Ma.get(a)}function yB(a,o){let{entries:t,limit:r}=Xq(a);if(t.delete(a),t.set(a,o),t.size>r){let s=t.keys().next().value;if(s!==void 0)t.delete(s)}}function Qq(a,o,t){let r=Ma.get(a);if(r)return r.waiters++,r;let s=new AbortController,d=xn(a)?.data,l={promise:t({signal:s.signal},d).then((p)=>(yB(a,{data:p,updatedAt:Date.now(),version:o}),p)).finally(()=>{if(Ma.get(a)===l)Ma.delete(a)}),controller:s,waiters:1};return Ma.set(a,l),l}function X2(a,o){if(o.waiters--,o.waiters>0)return;if(Ma.get(a)===o)Ma.delete(a);o.controller.abort()}var vB=1500;function ne(a,o,t){let r=JSON.stringify(a),s=t?.enabled??!0,d=t?.pollMs,l=Tq(s),[,p]=oe.useReducer((D)=>D+1,0),[n,i]=oe.useState(null),[u,m]=oe.useState(!1),x=oe.useRef(o);x.current=o;let S=oe.useRef(r);S.current=r;let f=oe.useRef(null),c=oe.useRef(0),I=oe.useRef(null),C=oe.useCallback((D)=>{c.current=Date.now();let M=I.current;if(M?.key===D&&Kq(D)===M.request)return;let y=xn(D)?.data;m(!0);let Y=Qq(D,Pq(),x.current);if(I.current={key:D,request:Y},M)X2(M.key,M.request);Y.promise.then((K)=>{if(S.current!==D)return;if(K===y){i((qa)=>qa===null?qa:null);return}oe.startTransition(()=>{i(null),p()})}).catch((K)=>{if(S.current!==D||Y.controller.signal.aborted)return;i({key:D,error:K instanceof Error?K:Error(String(K))})}).finally(()=>{if(I.current?.request===Y)I.current=null;if(S.current===D)m(!1)})},[]),v=oe.useCallback(()=>{let D=I.current;if(I.current=null,D)X2(D.key,D.request)},[]);oe.useEffect(()=>v,[v]),oe.useEffect(()=>{if(!s||I.current&&I.current.key!==r)v();if(!s)return;let D=xn(r);if(D&&D.version>=l)return;let M=D?c.current+vB-Date.now():0;if(M<=0){C(r);return}let y=setTimeout(()=>C(r),M);return()=>clearTimeout(y)},[r,s,l,C,v]),oe.useEffect(()=>{if(!s||!d)return;let D=setInterval(()=>{if(!document.hidden)C(S.current)},d);return()=>clearInterval(D)},[s,d,C]);let q=oe.useCallback(()=>C(S.current),[C]),b=xn(r);if(b)f.current={key:r,data:b.data,updatedAt:b.updatedAt};let V=f.current,_=n?.key===r?n.error:null;return{data:V?.data??null,error:_,loading:!V&&!_,stale:!!V&&V.key!==r,refreshing:u,updatedAt:V?.updatedAt??null,refetch:q}}function xe(a,o,t){let r=Zq(o),s=Array.from({length:o.length},()=>0);for(let d of a){let l=r.get(d.timestamp);if(l!==void 0)s[l]+=t(d)}return s}function Ta(a,o){let t=Zq(o.buckets),r=new Map;for(let i of a){let u=t.get(i.timestamp);if(u===void 0)continue;let m=o.key(i),x=r.get(m);if(!x)x=Array.from({length:o.buckets.length},()=>0),r.set(m,x);x[u]+=o.value(i)}let s=[...r.entries()].map(([i,u])=>({key:i,values:u,total:u.reduce((m,x)=>m+x,0)})).filter((i)=>i.total!==0).sort((i,u)=>u.total-i.total||i.key.localeCompare(u.key)),d=o.limit??Number.POSITIVE_INFINITY,l=s.slice(0,d),p=s.slice(d),n=l.map((i,u)=>({key:i.key,label:o.label?o.label(i.key):i.key,color:o.colors?.get(i.key)??Ke[u%Ke.length],values:i.values}));if(p.length>0){let i=Array.from({length:o.buckets.length},()=>0);for(let u of p)for(let m=0;m<i.length;m++)i[m]+=u.values[m];n.push({key:"__other__",label:`Other (${p.length})`,color:Ne,values:i})}return n}function Zq(a){let o=new Map;for(let t=0;t<a.length;t++)o.set(a[t],t);return o}var wB=["main","subagent","advisor"];function Ca(a){return a.totalInputTokens+a.totalOutputTokens+a.totalCacheReadTokens+a.totalCacheWriteTokens}function Yq(a){let o=new Map;for(let l of a)o.set(l.agentType,l);let t=wB.map((l)=>o.get(l)).filter((l)=>l!==void 0),r=t.reduce((l,p)=>l+Ca(p),0),s=t.reduce((l,p)=>l+p.totalCost,0),d=t.map((l)=>{let p=Ca(l);return{agentType:l.agentType,tokens:p,requests:l.totalRequests,cost:l.totalCost,share:r>0?p/r:0}});return{totalTokens:r,totalCost:s,segments:d}}function eD(a){let o={totalCost:0,requests:0,unpricedRequests:0,activeDays:new Set(a.map((s)=>s.timestamp)).size,avgDailyCost:0,costInput:0,costOutput:0,costCacheRead:0,costCacheWrite:0,models:[],topModel:null},t=new Map;for(let s of a){let d=te(s.model,s.provider),l=t.get(d);if(!l)l={key:d,model:s.model,provider:s.provider,cost:0,requests:0,unpricedRequests:0,costInput:0,costOutput:0,costCacheRead:0,costCacheWrite:0,share:0},t.set(d,l);Jq(l,s),Jq(o,s),l.cost+=s.cost,o.totalCost+=s.cost}o.avgDailyCost=o.activeDays>0?o.totalCost/o.activeDays:0,o.models=[...t.values()].sort((s,d)=>d.cost-s.cost||d.requests-s.requests||s.key.localeCompare(d.key));for(let s of o.models)s.share=o.totalCost>0?s.cost/o.totalCost:0;let r=o.models[0];return o.topModel=r!==void 0&&r.cost>0?r:null,o}function Jq(a,o){a.costInput+=o.costInput,a.costOutput+=o.costOutput,a.costCacheRead+=o.costCacheRead,a.costCacheWrite+=o.costCacheWrite,a.requests+=o.requests,a.unpricedRequests+=o.unpricedRequests}function aD(a){let o=new Map;for(let t of a){let r=te(t.model,t.provider),s=o.get(r);if(!s)s=[],o.set(r,s);s.push({timestamp:t.timestamp,avgTtftSeconds:t.avgTtft!==null?t.avgTtft/1000:null,avgTokensPerSecond:t.avgTokensPerSecond,requests:t.requests})}for(let t of o.values())t.sort((r,s)=>r.timestamp-s.timestamp);return o}var PB=/^\/?-?(?:private-)?(?:tmp|var-folders)(?:[-/]|$)/;function tD(a){let o=0,t=0,r=0,s=0,d=0,l=0,p=0,n=0,i=0;for(let x of a){if(o+=x.totalRequests,t+=x.failedRequests,r+=x.totalCost,s+=x.unpricedRequests,d+=x.totalInputTokens+x.totalCacheReadTokens+x.totalCacheWriteTokens+x.totalOutputTokens,l+=x.totalInputTokens,p+=x.totalCacheReadTokens,x.totalRequests>n)n=x.totalRequests;if(x.totalCost>i)i=x.totalCost}let u=0;return{rows:a.map((x)=>{let S=PB.test(x.folder);if(S)u++;return{...x,conversationTokens:x.totalInputTokens+x.totalCacheReadTokens+x.totalCacheWriteTokens+x.totalOutputTokens,requestShare:o>0?x.totalRequests/o:0,costShare:r>0?x.totalCost/r:0,temporary:S}}),totalRequests:o,failedRequests:t,totalCost:r,unpricedRequests:s,conversationTokens:d,cacheRate:l+p>0?p/(l+p):0,maxRequests:n,maxCost:i,temporaryCount:u}}function da(a){if(a.stopReason==="aborted")return"aborted";if(a.stopReason==="error"||a.errorMessage)return"failed";return"ok"}function K2(a,o){if(a.length===0)return null;return a[Math.min(a.length-1,Math.max(0,Math.ceil(o*a.length)-1))]}function oD(a){let o=0,t=0,r=0,s=0,d=0,l=null,p=null,n=[],i=[];for(let u of a){let m=da(u);if(m==="failed")o++;else if(m==="aborted")t++;if(r+=u.usage.totalTokens,s+=u.usage.cost.total,W2(u))d++;if(u.duration!==null)n.push(u.duration);if(u.ttft!==null)i.push(u.ttft);if(l===null||u.timestamp<l)l=u.timestamp;if(p===null||u.timestamp>p)p=u.timestamp}return n.sort((u,m)=>u-m),i.sort((u,m)=>u-m),{requests:a.length,failed:o,aborted:t,tokens:r,cost:s,unpriced:d,medianDuration:K2(n,0.5),p95Duration:K2(n,0.95),medianTtft:K2(i,0.5),oldest:l,newest:p}}var jq=180,RB=/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi,MB=/\b(?:req|msg|call|toolu|chatcmpl|resp|run|gen)[-_][A-Za-z0-9_-]{6,}/g,TB=/\b[0-9a-f]{12,}\b/gi,AB=/(?<![\w.-])\d+(?:\.\d+)?/g,qB=/^[1-5]\d\d$/;function Q2(a){if(!a?.trim())return"Unknown error";let o=a.replace(/\s+/g," ").trim().replace(RB,"<id>").replace(MB,"<id>").replace(TB,"<hex>").replace(AB,(t)=>qB.test(t)?t:"N");return o.length>jq?`${o.slice(0,jq-1)}…`:o}function rD(a){let o=new Map;for(let t of a){let r=Q2(t.errorMessage),s=o.get(r);if(!s)s={signature:r,count:0,firstSeen:t.timestamp,lastSeen:t.timestamp,latest:t,models:[],byModel:new Map},o.set(r,s);if(s.count++,t.timestamp<s.firstSeen)s.firstSeen=t.timestamp;if(t.timestamp>s.lastSeen)s.lastSeen=t.timestamp,s.latest=t;let d=te(t.model,t.provider),l=s.byModel.get(d);if(l)l.count++;else s.byModel.set(d,{model:t.model,provider:t.provider,count:1})}return[...o.values()].map(({byModel:t,...r})=>({...r,models:[...t.values()].sort((s,d)=>d.count-s.count||s.model.localeCompare(d.model))})).sort((t,r)=>r.count-t.count||r.lastSeen-t.lastSeen)}var R=require("react/jsx-runtime"),DB=[{value:"model",label:"By model"},{value:"component",label:"By component"}],BB=6,FB=86400000,In=[{key:"costInput",label:"Input",color:"#5b8cff"},{key:"costOutput",label:"Output",color:"var(--chart-secondary)"},{key:"costCacheRead",label:"Cache read",color:"var(--chart-primary)"},{key:"costCacheWrite",label:"Cache write",color:"#f5b54a"}],NB=new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",timeZone:"UTC"}),OB=new Intl.DateTimeFormat(void 0,{weekday:"short",month:"short",day:"numeric",year:"numeric",timeZone:"UTC"});function Z2({active:a,range:o}){let t=ne(["costs",o],({signal:x})=>xq(o,x),{enabled:a}),r=ie(o),[s,d]=Ln.useState("model"),[l,p]=La(),n=Ln.useMemo(()=>t.data?UB(t.data,o):null,[t.data,o]),i=Ln.useMemo(()=>n?zB(n):[],[n]),u=(x)=>x.costSeries.length===0,m=R.jsx(j,{title:"No usage in this range",hint:"Pick a wider range in the top bar."});return R.jsxs("div",{className:"page",children:[R.jsx(ye,{title:"Costs",description:`What ${r.windowLabel} of usage would cost at public API rates. Subscription usage without a public price is counted as unpriced, not free.`}),R.jsx(H,{query:t,skeleton:R.jsx(he,{height:112,style:{borderRadius:12}}),isEmpty:u,empty:m,children:()=>n&&R.jsx(EB,{view:n,stale:t.stale})}),R.jsxs("div",{className:"grid grid-main-side",children:[R.jsx(G,{index:1,title:"Daily estimate",description:s==="model"?"Per UTC day, stacked by model":"Per UTC day, stacked by billing component",actions:R.jsx(De,{size:"sm",options:DB,value:s,onChange:d,"aria-label":"Split by"}),stale:t.stale,children:R.jsx(H,{query:t,skeleton:R.jsx(re,{height:280}),isEmpty:u,empty:m,children:()=>{if(!n)return null;let x=s==="model"?n.modelSeries:n.componentSeries;return R.jsxs("div",{className:"stack",style:{gap:12},children:[R.jsx(Pa,{slots:n.buckets.length,tickLabel:(S)=>NB.format(n.buckets[S]),tooltipTitle:(S)=>OB.format(n.buckets[S]),series:x,hidden:l,height:280,format:(S)=>ce(S,Number.isInteger(S)?0:2),formatTooltip:(S)=>ce(S),emptyLabel:"No priced usage in this range",tooltipExtra:(S)=>n.unpricedPerDay[S]>0?R.jsxs("div",{className:"chart-tooltip-row chart-tooltip-total",children:[R.jsx("span",{className:"chart-tooltip-label",children:"Unpriced requests"}),R.jsx("span",{className:"chart-tooltip-value",children:g(n.unpricedPerDay[S])})]}):null}),R.jsx(He,{items:x.map((S)=>({key:S.key,label:S.label,color:S.color,value:ce(WB(S.values))})),hidden:l,onToggle:p})]})}})}),R.jsx(G,{index:2,title:"Where it went",description:"Estimate by billing component",stale:t.stale,children:R.jsx(H,{query:t,skeleton:R.jsx(re,{height:280}),isEmpty:u,empty:m,children:()=>n&&R.jsx(HB,{summary:n.summary})})})]}),R.jsx(G,{index:3,title:"By model",description:"Estimate per model with its input, output and cache split",stale:t.stale,flush:!0,children:R.jsx(H,{query:t,skeleton:R.jsx(ge,{rows:8}),isEmpty:u,empty:m,children:()=>n&&R.jsx(pe,{rows:n.summary.models,rowKey:(x)=>x.key,columns:i,initialSort:{key:"cost",dir:"desc"},limit:20})})})]})}function UB(a,o){let t=a.costSeries,r=eD(t),s=En(r.models.map((i)=>({model:i.model,provider:i.provider,totalRequests:i.requests}))),d=new Map(r.models.map((i)=>[i.key,i])),l=Ze(o,t.map((i)=>i.timestamp),FB),p=Ta(t,{buckets:l,key:(i)=>te(i.model,i.provider),label:(i)=>d.get(i)?.model??i,value:(i)=>i.cost,limit:BB,colors:s}).map((i)=>({...i,values:i.values.map((u)=>u||null)})),n=new Set;for(let i of p){if(i.key==="__other__")continue;if(n.has(i.color))i.color=Ke.find((u)=>!n.has(u))??i.color;n.add(i.color)}return{summary:r,swatches:new Map(p.filter((i)=>i.key!=="__other__").map((i)=>[i.key,i.color])),buckets:l,dailyTotals:xe(t,l,(i)=>i.cost),unpricedPerDay:xe(t,l,(i)=>i.unpricedRequests),modelSeries:p,componentSeries:In.map((i)=>({key:i.key,label:i.label,color:i.color,values:xe(t,l,(u)=>u[i.key]).map((u)=>u||null)})),maxModelCost:r.models[0]?.cost??0}}function EB({view:a,stale:o}){let{summary:t}=a,r=t.requests-t.unpricedRequests,s=t.topModel;return R.jsx("div",{"data-stale":o,children:R.jsxs(Ce,{min:180,children:[R.jsx(A,{label:"API-equivalent estimate",title:"What this usage would cost at public API rates",value:ae(t.totalCost,t.unpricedRequests),hint:`${g(t.requests)} requests`,spark:a.dailyTotals,sparkColor:"var(--chart-secondary)"}),R.jsx(A,{label:"Average per day",title:"Estimate ÷ days with any usage",value:ae(t.avgDailyCost,t.unpricedRequests),hint:`over ${g(t.activeDays)} active day${t.activeDays===1?"":"s"}`}),R.jsx(A,{label:"Top model",title:s?`${s.model} (${s.provider})`:void 0,value:s?s.model:"–",hint:s?`${ce(s.cost)} · ${z(s.share)} of estimate`:"Nothing priced yet"}),R.jsx(A,{label:"Per priced request",title:"Estimate ÷ requests that have a public price",value:r>0?sD(t.totalCost/r):"–",hint:`${g(r)} priced`}),R.jsx(A,{label:"Unpriced requests",title:"Subscription usage with no public-equivalent price; excluded from the estimate",value:g(t.unpricedRequests),hint:t.unpricedRequests>0?"excluded from the estimate":"all usage priced"})]})})}function HB({summary:a}){return R.jsxs("div",{className:"stack",style:{gap:14},children:[R.jsx(Ia,{height:10,segments:In.map((o)=>({key:o.key,label:o.label,value:a[o.key],color:o.color}))}),R.jsxs("div",{className:"costs-components",children:[In.map((o)=>R.jsxs("div",{className:"costs-component-row",children:[R.jsxs("span",{className:"row",children:[R.jsx(ca,{color:o.color}),o.label]}),R.jsx("span",{className:"num",children:ce(a[o.key])}),R.jsx("span",{className:"num dim costs-component-share",children:a.totalCost>0?z(a[o.key]/a.totalCost):"–"})]},o.key)),R.jsxs("div",{className:"costs-component-row costs-component-total",children:[R.jsx("span",{children:"Total"}),R.jsx("span",{className:"num",children:ae(a.totalCost,a.unpricedRequests)}),R.jsx("span",{className:"costs-component-share"})]})]}),a.unpricedRequests>0&&R.jsxs("p",{className:"micro dim",children:[g(a.unpricedRequests)," unpriced subscription request",a.unpricedRequests===1?" is":"s are"," not included."]})]})}function zB(a){let o=In.map((t)=>({key:t.key,header:t.label,align:"right",sort:(r)=>r[t.key],render:(r)=>R.jsx("span",{className:"num",children:ce(r[t.key])})}));return[{key:"model",header:"Model",sort:(t)=>t.model,render:(t)=>R.jsx(we,{lead:R.jsx(ca,{color:a.swatches.get(t.key)??Ne}),primary:R.jsx("span",{className:"mono",children:t.model}),secondary:t.provider})},{key:"requests",header:"Requests",align:"right",sort:(t)=>t.requests,render:(t)=>R.jsx("span",{className:"num",children:g(t.requests)})},{key:"cost",header:"Estimate",title:"API-equivalent estimate at public rates",align:"right",sort:(t)=>t.cost,render:(t)=>R.jsx(ve,{value:t.cost,max:a.maxModelCost,display:ae(t.cost,t.unpricedRequests),color:a.swatches.get(t.key)??Ne})},{key:"share",header:"Share",align:"right",sort:(t)=>t.share,render:(t)=>R.jsx("span",{className:"num muted",children:t.cost>0?z(t.share):"–"})},{key:"split",header:"Split",title:"Input · output · cache read · cache write",width:150,render:(t)=>t.cost>0?R.jsx(Ia,{segments:In.map((r)=>({key:r.key,label:r.label,value:t[r.key],color:r.color}))}):R.jsx("span",{className:"dim",children:"–"})},...o,{key:"perRequest",header:"Per request",title:"Estimate ÷ priced requests",align:"right",sort:(t)=>t.requests>t.unpricedRequests?t.cost/(t.requests-t.unpricedRequests):-1,render:(t)=>R.jsx("span",{className:"num",children:t.requests>t.unpricedRequests?sD(t.cost/(t.requests-t.unpricedRequests)):"–"})},{key:"unpriced",header:"Unpriced",title:"Requests with no public-equivalent price",align:"right",sort:(t)=>t.unpricedRequests,render:(t)=>t.unpricedRequests>0?R.jsx("span",{className:"num tone-warn",children:g(t.unpricedRequests)}):R.jsx("span",{className:"num dim",children:"–"})}]}function sD(a){return a>0&&a<0.0001?"<$0.0001":ce(a)}function WB(a){let o=0;for(let t of a)o+=t??0;return o}var ua=require("react");var k=require("react/jsx-runtime"),J2=[50,200,1000];function j2({active:a,range:o,onRequestClick:t}){let[r,s]=ua.useState(0),d=J2[r],l=ne(["errors",o,d],({signal:y})=>Lq(o,d,y),{enabled:a}),[p,n]=ua.useState(null),[i,u]=ua.useState(null),[m,x]=ua.useState(""),S=ie(o),f=ua.useMemo(()=>{let y=(l.data??[]).map((Q)=>({row:Q,signature:Q2(Q.errorMessage)})),Y=rD(l.data??[]),K=new Map;for(let{row:Q}of y){let le=te(Q.model,Q.provider),Te=K.get(le);if(Te)Te.count++;else K.set(le,{model:Q.model,provider:Q.provider,count:1})}let qa=[...K.entries()].map(([Q,le])=>({key:Q,...le})).sort((Q,le)=>le.count-Q.count||Q.model.localeCompare(le.model)),We=y.reduce((Q,{row:le})=>!Q||le.timestamp>Q.timestamp?le:Q,null);return{rows:y,groups:Y,models:qa,newest:We}},[l.data]),c=f.groups.some((y)=>y.signature===p)?p:null,I=f.models.some((y)=>y.key===i)?i:null,C=ua.useMemo(()=>{let y=m.trim().toLowerCase();return f.rows.filter((Y)=>(c===null||Y.signature===c)&&(I===null||te(Y.row.model,Y.row.provider)===I)&&(y===""||Y.row.model.toLowerCase().includes(y)||Y.row.provider.toLowerCase().includes(y)||Y.row.folder.toLowerCase().includes(y)||(Y.row.errorMessage??"").toLowerCase().includes(y))).map((Y)=>Y.row)},[f.rows,c,I,m]),v=l.data?.length??0,q=!l.stale&&v<d,b=r+1<J2.length?J2[r+1]:null,V=l.data!==null&&!q?k.jsxs(k.Fragment,{children:[k.jsxs("span",{children:["Showing the latest ",g(v)," failures in ",S.windowLabel,"; older ones are not loaded."]}),b!==null&&k.jsx("button",{type:"button",className:"btn","data-size":"sm",disabled:l.refreshing,onClick:()=>s(r+1),children:l.refreshing&&l.stale?"Loading…":`Load latest ${g(b)}`})]}):void 0,_=f.groups[0]?.count??0,D=ua.useMemo(()=>VB(_),[_]),M=f.models.find((y)=>y.key===I);return k.jsxs("div",{className:"page",children:[k.jsx(ye,{title:"Errors",description:`Failed model requests in ${S.windowLabel}, grouped by error signature. Open a failure for its full payload.`}),k.jsx(H,{query:l,skeleton:k.jsx(he,{height:96,style:{borderRadius:12}}),children:()=>k.jsx("div",{"data-stale":l.stale,children:k.jsxs(Ce,{min:170,children:[k.jsx(A,{label:"Failures",value:g(v),hint:q?`in ${S.windowLabel}`:`latest ${g(v)} loaded`}),k.jsx(A,{label:"Signatures",title:"Distinct error messages after normalizing ids and numbers",value:g(f.groups.length),hint:f.groups[0]?`top: ${g(f.groups[0].count)} failures`:void 0}),k.jsx(A,{label:"Affected models",value:g(f.models.length),hint:f.models[0]?.model}),k.jsx(A,{label:"Last failure",value:f.newest?ue(f.newest.timestamp):"–",hint:f.newest?Fe(f.newest.timestamp):`none in ${S.windowLabel}`})]})})}),k.jsxs("div",{className:"grid grid-main-side",children:[k.jsx(G,{index:1,title:"Error signatures",description:"Same message with ids and counters normalized. Select one to filter the failures below.",flush:!0,stale:l.stale,children:k.jsx(H,{query:l,skeleton:k.jsx(ge,{rows:8}),isEmpty:(y)=>y.length===0,empty:k.jsx(j,{title:`No failures in ${S.windowLabel}`,hint:"Every request succeeded or was aborted."}),children:()=>k.jsx(pe,{rows:f.groups,rowKey:(y)=>y.signature,columns:D,onRowClick:(y)=>n(c===y.signature?null:y.signature),selectedKey:c,expanded:(y)=>y.signature===c?k.jsx(GB,{group:y,onRequestClick:t}):null,limit:12})})}),k.jsx(G,{index:2,title:"By model",description:"Failures per model. Select one to filter.",stale:l.stale,children:k.jsx(H,{query:l,skeleton:k.jsx(he,{height:180}),isEmpty:(y)=>y.length===0,empty:k.jsx(j,{title:"No affected models"}),children:()=>k.jsx(gn,{items:f.models.slice(0,12).map((y)=>({key:y.key,label:k.jsxs("span",{className:"row",style:{gap:6,minWidth:0},children:[k.jsx("span",{className:"mono truncate",children:y.model}),k.jsx("span",{className:"dim truncate",children:y.provider})]}),value:y.count,color:y.key===I?"var(--bad)":"color-mix(in srgb, var(--bad) 45%, transparent)"})),onSelect:(y)=>u(I===y?null:y)})})})]}),k.jsx(G,{index:3,title:"Failures",description:l.data===null?"Loading failures…":`${g(C.length)} of ${g(v)} failures, newest first`,actions:k.jsxs(k.Fragment,{children:[c!==null&&k.jsxs("button",{type:"button",className:"btn errors-filter","data-size":"sm",onClick:()=>n(null),title:c,children:[k.jsx("span",{className:"mono truncate",children:c}),k.jsx(ga,{size:12})]}),M&&k.jsxs("button",{type:"button",className:"btn errors-filter","data-size":"sm",onClick:()=>u(null),children:[k.jsx("span",{className:"mono truncate",children:M.model}),k.jsx(ga,{size:12})]}),k.jsx(zs,{value:m,onChange:x,placeholder:"Message, model or project"})]}),flush:!0,stale:l.stale,footer:V,children:k.jsx(H,{query:l,skeleton:k.jsx(ge,{rows:10}),isEmpty:(y)=>y.length===0,empty:k.jsx(j,{title:`No failures in ${S.windowLabel}`}),children:()=>k.jsx(pe,{rows:C,rowKey:(y)=>y.id??`${y.sessionFile}:${y.entryId}`,onRowClick:(y)=>y.id!==void 0&&t(y.id),columns:$B,initialSort:{key:"time",dir:"desc"},limit:50,dense:!0,empty:k.jsx(j,{title:"No failures match",hint:"Clear the search or the selected filters."})})})})]})}function VB(a){return[{key:"signature",header:"Signature",wrap:!0,sort:(o)=>o.signature,render:(o)=>k.jsx("span",{className:"errors-signature",title:o.latest.errorMessage??void 0,children:o.signature})},{key:"models",header:"Models",sort:(o)=>o.models.length,render:(o)=>k.jsx(we,{primary:k.jsx("span",{className:"mono",children:o.models[0]?.model}),secondary:o.models.length>1?`+${o.models.length-1} more`:o.models[0]?.provider})},{key:"last",header:"Last seen",sort:(o)=>o.lastSeen,render:(o)=>k.jsx("span",{className:"muted",title:Fe(o.lastSeen),children:ue(o.lastSeen)})},{key:"count",header:"Failures",align:"right",width:120,sort:(o)=>o.count,render:(o)=>k.jsx(ve,{value:o.count,max:a,display:g(o.count),color:"var(--bad)"})}]}function GB({group:a,onRequestClick:o}){let t=a.latest.id;return k.jsxs("div",{className:"errors-detail",children:[k.jsx("pre",{className:"code-block errors-detail-message",children:a.latest.errorMessage??"Unknown error"}),k.jsxs("div",{className:"errors-detail-meta",children:[k.jsxs("span",{className:"muted",children:[g(a.count)," failures · first ",Fe(a.firstSeen)," · last"," ",Fe(a.lastSeen)]}),t!==void 0&&k.jsxs("button",{type:"button",className:"btn","data-size":"sm",onClick:()=>o(t),children:["Open latest ",k.jsx(en,{size:13})]})]}),k.jsx("div",{className:"errors-detail-models",children:a.models.map((r)=>k.jsxs("span",{className:"badge","data-mono":"true",children:[r.model," ",k.jsx("span",{className:"dim",children:r.provider})," ",k.jsx("span",{className:"num",children:U(r.count)})]},te(r.model,r.provider)))})]})}var $B=[{key:"time",header:"When",width:120,sort:(a)=>a.timestamp,render:(a)=>k.jsx("span",{className:"muted",title:Fe(a.timestamp),children:ue(a.timestamp)})},{key:"model",header:"Model",sort:(a)=>a.model,render:(a)=>k.jsx(we,{primary:k.jsx("span",{className:"mono",children:a.model}),secondary:a.provider})},{key:"error",header:"Error",sort:(a)=>a.errorMessage??"",render:(a)=>k.jsx("span",{className:"errors-message",title:a.errorMessage??void 0,children:a.errorMessage??"Unknown error"})},{key:"project",header:"Project",sort:(a)=>a.folder,render:(a)=>k.jsx("span",{className:"mono muted",title:a.folder,children:Xe(a.folder)})},{key:"tokens",header:"Tokens",align:"right",sort:(a)=>a.usage.totalTokens,render:(a)=>k.jsx("span",{className:"num",children:g(a.usage.totalTokens)})},{key:"cost",header:"Cost",title:"API-equivalent estimate",align:"right",sort:(a)=>a.usage.cost.total,render:(a)=>k.jsx("span",{className:"num",children:xa(a,4)})}];var _s=require("react");var w=require("react/jsx-runtime"),_B=[{value:"share",label:"Share"},{value:"requests",label:"Requests"}],XB=6;function Y2({active:a,range:o}){let t=ne(["models",o],({signal:c})=>gq(o,c),{enabled:a}),r=ie(o),[s,d]=_s.useState("share"),[l,p]=La(),[n,i]=_s.useState(null),u=_s.useMemo(()=>t.data?KB(t.data,o):null,[t.data,o]),m=jB(r.bucketMs),x=_s.useMemo(()=>u?ZB(u,n,m):[],[u,n,m]),S=(c)=>c.byModel.length===0,f=w.jsx(j,{title:"No model usage in this range",hint:"Pick a wider range in the top bar."});return w.jsxs("div",{className:"page",children:[w.jsx(ye,{title:"Models",description:`Which models did the work in ${r.windowLabel}, and how fast they answered.`}),w.jsx(H,{query:t,skeleton:w.jsx(he,{height:112,style:{borderRadius:12}}),isEmpty:S,empty:f,children:()=>u&&w.jsx("div",{"data-stale":t.stale,children:w.jsxs(Ce,{min:200,children:[w.jsx(A,{label:"Models used",value:g(u.models.length),hint:`across ${g(u.providerCount)} provider${u.providerCount===1?"":"s"}`}),w.jsx(A,{label:"Most used",title:u.top?`${u.top.model} (${u.top.provider})`:void 0,value:u.top?u.top.model:"–",hint:u.top?`${z(u.top.totalRequests/Math.max(1,u.totalRequests))} of requests · ${u.top.provider}`:void 0}),w.jsx(A,{label:"Requests",value:g(u.totalRequests),hint:`${g(u.failedRequests)} failed`,spark:u.requestTotals}),w.jsx(A,{label:"API-equivalent cost",title:"What this usage would cost at public API rates",value:ae(u.totalCost,u.unpricedRequests),hint:u.unpricedRequests>0?`${g(u.unpricedRequests)} unpriced`:void 0})]})})}),w.jsx(G,{index:1,title:"Request share",description:s==="share"?`Each model's share of requests per ${m}`:`Requests per ${m}, stacked by model`,actions:w.jsx(De,{size:"sm",options:_B,value:s,onChange:d,"aria-label":"Share chart mode"}),stale:t.stale,children:w.jsx(H,{query:t,skeleton:w.jsx(re,{height:260}),isEmpty:S,empty:f,children:()=>u&&w.jsxs("div",{className:"stack",style:{gap:12},children:[w.jsx(Ra,{buckets:u.buckets,bucketMs:r.bucketMs,series:s==="share"?u.shareSeries:u.countSeries,hidden:l,height:260,yMax:s==="share"?1:void 0,format:s==="share"?(c)=>z(c,0):U,formatTooltip:s==="share"?(c)=>z(c):g,showTotal:s==="requests"}),w.jsx(He,{items:u.countSeries.map((c)=>({key:c.key,label:c.label,color:c.color,value:z(nD(c.values)/Math.max(1,nD(u.requestTotals)))})),hidden:l,onToggle:p})]})})}),w.jsx(G,{index:2,title:"All models",description:"Click a row for latency and throughput over time",stale:t.stale,flush:!0,children:w.jsx(H,{query:t,skeleton:w.jsx(ge,{rows:8}),isEmpty:S,empty:f,children:()=>u&&w.jsx(pe,{rows:u.models,rowKey:(c)=>te(c.model,c.provider),columns:x,initialSort:{key:"requests",dir:"desc"},limit:25,onRowClick:(c)=>{let I=te(c.model,c.provider);i((C)=>C===I?null:I)},selectedKey:n,expanded:(c)=>{let I=te(c.model,c.provider);return I===n?w.jsx(JB,{model:c,color:u.swatches.get(I)??"var(--chart-primary)",points:u.performance.get(I)??[],bucketMs:r.bucketMs,bucketWord:m}):null}})})})]})}function KB(a,o){let t=a.byModel,r=En(t),s=QB(t),d=Ze(o,a.modelSeries.map((I)=>I.timestamp)),l=xe(a.modelSeries,d,(I)=>I.requests),p={buckets:d,key:(I)=>te(I.model,I.provider),label:(I)=>s.get(I)??I,value:(I)=>I.requests,colors:r},n=Ta(a.modelSeries,{...p,limit:XB}).map((I)=>({...I,values:I.values.map((C)=>C||null)})),i=n.map((I)=>({...I,values:I.values.map((C,v)=>C===null?null:C/l[v])})),u=new Map(Ta(a.modelSeries,p).map((I)=>[I.key,I.values])),m,x=0,S=0,f=0,c=0;for(let I of t){if(!m||I.totalRequests>m.totalRequests)m=I;x+=I.totalRequests,S+=I.failedRequests,f+=I.totalCost,c+=I.unpricedRequests}return{models:t,top:m,swatches:new Map(n.filter((I)=>I.key!=="__other__").map((I)=>[I.key,I.color])),labels:s,providerCount:new Set(t.map((I)=>I.provider)).size,totalRequests:x,failedRequests:S,totalCost:f,unpricedRequests:c,maxRequests:m?.totalRequests??0,buckets:d,requestTotals:l,countSeries:n,shareSeries:i,trends:u,performance:aD(a.modelPerformanceSeries)}}function QB(a){let o=new Map;for(let t of a)o.set(t.model,(o.get(t.model)??0)+1);return new Map(a.map((t)=>[te(t.model,t.provider),(o.get(t.model)??0)>1?`${t.model} · ${t.provider}`:t.model]))}function ZB(a,o,t){return[{key:"expand",header:"",width:28,render:(r)=>w.jsx("span",{className:"models-chevron","data-open":te(r.model,r.provider)===o,children:w.jsx(ka,{size:14})})},{key:"model",header:"Model",sort:(r)=>r.model,render:(r)=>w.jsx(we,{lead:w.jsx(ca,{color:a.swatches.get(te(r.model,r.provider))??Ne}),primary:w.jsx("span",{className:"mono",children:r.model}),secondary:r.provider})},{key:"requests",header:"Requests",align:"right",sort:(r)=>r.totalRequests,render:(r)=>w.jsx(ve,{value:r.totalRequests,max:a.maxRequests,display:g(r.totalRequests),color:a.swatches.get(te(r.model,r.provider))??Ne})},{key:"cost",header:"Cost",title:"API-equivalent estimate at public rates",align:"right",sort:(r)=>r.totalCost,render:(r)=>w.jsx("span",{className:"num",children:ae(r.totalCost,r.unpricedRequests)})},{key:"tokens",header:"Tokens",title:"Uncached input + cache reads + cache writes + output",align:"right",sort:(r)=>Ca(r),render:(r)=>{let s=Ca(r);return w.jsx("span",{className:"num",title:g(s),children:U(s)})}},{key:"cache",header:"Cache rate",title:"Cache reads ÷ (uncached input + cache reads)",align:"right",sort:(r)=>r.cacheRate,render:(r)=>w.jsx("span",{className:"num",children:z(r.cacheRate)})},{key:"errors",header:"Errors",align:"right",sort:(r)=>r.errorRate,render:(r)=>r.failedRequests===0?w.jsx("span",{className:"num dim",children:"0%"}):w.jsx("span",{title:`${g(r.failedRequests)} failed`,children:w.jsx(fe,{tone:ba(r.errorRate),mono:!0,children:Be(r.errorRate)})})},{key:"tps",header:"Tokens/s",title:"Average output tokens per second",align:"right",sort:(r)=>r.avgTokensPerSecond??-1,render:(r)=>w.jsx("span",{className:"num",children:_e(r.avgTokensPerSecond)})},{key:"ttft",header:"TTFT",title:"Average time to first token",align:"right",sort:(r)=>r.avgTtft??-1,render:(r)=>w.jsx("span",{className:"num",children:se(r.avgTtft)})},{key:"trend",header:"Trend",title:`Requests per ${t}`,width:112,render:(r)=>{let s=te(r.model,r.provider),d=a.trends.get(s);return d?w.jsx(Nn,{values:d.map((l)=>l??0),color:a.swatches.get(s)??Ne,width:96,height:22}):w.jsx("span",{className:"dim",children:"–"})}}]}function JB({model:a,color:o,points:t,bucketMs:r,bucketWord:s}){let[d,l]=La(),p=[{key:"tps",label:"Tokens/s",color:o,kind:t.length>1?"line":"bars",values:t.map((n)=>n.avgTokensPerSecond)},{key:"ttft",label:"TTFT",color:Ne,kind:t.length>1?"line":"bars",axis:"right",dashed:!0,values:t.map((n)=>n.avgTtftSeconds)}];return w.jsxs("div",{className:"models-detail",children:[w.jsxs("div",{className:"models-detail-facts",children:[w.jsxs("div",{children:[w.jsx("div",{className:"section-label",children:"Efficiency"}),w.jsx(na,{items:[{key:"err",label:"Error rate",value:w.jsxs("span",{className:`tone-${ba(a.errorRate)}`,children:[Be(a.errorRate)," ",w.jsxs("span",{className:"dim",children:["(",g(a.failedRequests)," failed)"]})]})},{key:"cache",label:"Cache rate",value:z(a.cacheRate)},{key:"savings",label:"Cache savings",value:w.jsx("span",{className:a.cacheSavings<0?"tone-bad":void 0,children:z(a.cacheSavings)})},{key:"premium",label:"Premium requests",value:g(Math.round(a.totalPremiumRequests*100)/100)}]})]}),w.jsxs("div",{children:[w.jsx("div",{className:"section-label",children:"Latency"}),w.jsx(na,{items:[{key:"dur",label:"Avg duration",value:se(a.avgDuration)},{key:"ttft",label:"Avg TTFT",value:se(a.avgTtft)},{key:"tps",label:"Tokens/s",value:_e(a.avgTokensPerSecond)}]})]}),w.jsxs("div",{children:[w.jsx("div",{className:"section-label",children:"Tokens"}),w.jsx(na,{items:[{key:"in",label:"Uncached input",value:U(a.totalInputTokens)},{key:"cr",label:"Cache read",value:U(a.totalCacheReadTokens)},{key:"cw",label:"Cache write",value:U(a.totalCacheWriteTokens)},{key:"out",label:"Output",value:U(a.totalOutputTokens)}]})]}),w.jsxs("div",{className:"micro dim",children:["First seen ",ue(a.firstTimestamp)," · last seen"," ",ue(a.lastTimestamp)]})]}),w.jsxs("div",{className:"models-detail-chart",children:[w.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[w.jsxs("div",{className:"section-label",style:{marginBottom:0},children:["Performance per active ",s]}),w.jsx(He,{items:p.map((n)=>({key:n.key,label:n.label,color:n.color})),hidden:d,onToggle:l})]}),t.length===0?w.jsx(j,{title:"No performance samples",hint:"Timing is recorded for streamed responses."}):w.jsx(Ra,{buckets:t.map((n)=>n.timestamp),bucketMs:r,series:p,hidden:d,stacked:!1,height:240,format:U,formatTooltip:(n)=>`${_e(n)} tok/s`,formatRight:(n)=>`${Number(n.toFixed(2))}s`,tooltipExtra:(n)=>w.jsxs("div",{className:"chart-tooltip-row chart-tooltip-total",children:[w.jsx("span",{className:"chart-tooltip-label",children:"Requests"}),w.jsx("span",{className:"chart-tooltip-value",children:g(t[n].requests)})]})})]})]})}function jB(a){if(a<3600000)return"5 minutes";if(a<86400000)return"hour";return"day"}function nD(a){let o=0;for(let t of a)o+=t??0;return o}var Hn=require("react");var P=require("react/jsx-runtime"),YB=[{value:"requests",label:"Requests"},{value:"tokens",label:"Tokens"},{value:"cost",label:"Cost"}],lD={main:"Main agent",subagent:"Subagents",advisor:"Advisor"},dD={main:"var(--chart-primary)",subagent:"var(--chart-secondary)",advisor:"#9d7bff"},uD=[{key:"input",label:"Uncached input",color:"#5b8cff"},{key:"cacheRead",label:"Cache read",color:"var(--chart-primary)"},{key:"cacheWrite",label:"Cache write",color:"#f5b54a"},{key:"output",label:"Output",color:"var(--chart-secondary)"}];function eq({active:a,range:o,onRequestClick:t}){let r=ne(["overview",o],({signal:u})=>hq(o,u),{enabled:a}),s=ne(["recent-requests"],({signal:u})=>Pn(12,u),{enabled:a}),[d,l]=Hn.useState("requests"),p=ie(o),n=Hn.useMemo(()=>{let u=r.data?.timeSeries??[],m=Ze(o,u.map((x)=>x.timestamp));return{buckets:m,requests:xe(u,m,(x)=>x.requests-x.errors),errors:xe(u,m,(x)=>x.errors),tokens:xe(u,m,(x)=>x.tokens),cost:xe(u,m,(x)=>x.cost),all:xe(u,m,(x)=>x.requests)}},[r.data,o]),i=d==="requests"?[{key:"ok",label:"Succeeded",color:"var(--chart-primary)",values:n.requests},{key:"err",label:"Failed",color:"var(--bad)",values:n.errors}]:d==="tokens"?[{key:"tokens",label:"Tokens",color:"var(--chart-primary)",values:n.tokens}]:[{key:"cost",label:"API-equivalent",color:"var(--chart-secondary)",values:n.cost}];return P.jsxs("div",{className:"page",children:[P.jsx(ye,{title:"Overview",description:`Everything omp did across your sessions in ${p.windowLabel}.`}),P.jsx(H,{query:r,skeleton:P.jsx(re,{height:112}),children:({overall:u})=>P.jsxs("div",{"data-stale":r.stale,className:"stack",style:{gap:16},children:[P.jsxs(Ce,{min:190,children:[P.jsx(A,{label:"API-equivalent cost",title:"What this usage would cost at public API rates",value:ae(u.totalCost,u.unpricedRequests),hint:u.unpricedRequests>0?`${g(u.unpricedRequests)} unpriced`:void 0,spark:n.cost,sparkColor:"var(--chart-secondary)"}),P.jsx(A,{label:"Requests",value:g(u.totalRequests),hint:`${g(u.failedRequests)} failed`,spark:n.all}),P.jsx(A,{label:"Conversation tokens",title:"Uncached input + cache reads + cache writes + output",value:U(Ca(u)),hint:`${U(u.totalOutputTokens)} output`,spark:n.tokens}),P.jsx(A,{label:"Cache rate",title:"Cache reads ÷ (uncached input + cache reads)",value:z(u.cacheRate),hint:`${z(u.cacheSavings)} saved`}),P.jsx(A,{label:"Error rate",value:Be(u.errorRate),hint:`${g(u.successfulRequests)} succeeded`,spark:n.errors,sparkColor:"var(--bad)"})]}),P.jsxs(Ce,{min:140,children:[P.jsx(A,{size:"sm",label:"Uncached input",value:U(u.totalInputTokens)}),P.jsx(A,{size:"sm",label:"Cache read",value:U(u.totalCacheReadTokens)}),P.jsx(A,{size:"sm",label:"Cache write",value:U(u.totalCacheWriteTokens)}),P.jsx(A,{size:"sm",label:"Output",value:U(u.totalOutputTokens)}),P.jsx(A,{size:"sm",label:"Premium requests",value:g(Math.round(u.totalPremiumRequests*100)/100)}),P.jsx(A,{size:"sm",label:"Tokens/s",value:_e(u.avgTokensPerSecond)}),P.jsx(A,{size:"sm",label:"Avg latency",value:se(u.avgDuration)}),P.jsx(A,{size:"sm",label:"Avg TTFT",value:se(u.avgTtft)})]})]})}),P.jsxs("div",{className:"grid grid-main-side",children:[P.jsx(G,{index:1,title:"Activity",description:`Per ${p.bucketMs<3600000?"5 minutes":p.bucketMs<86400000?"hour":"day"}`,actions:P.jsx(De,{size:"sm",options:YB,value:d,onChange:l}),stale:r.stale,children:P.jsx(H,{query:r,skeleton:P.jsx(re,{height:260}),children:()=>P.jsx(Ra,{buckets:n.buckets,bucketMs:p.bucketMs,series:i,height:260,format:d==="cost"?(u)=>ae(u,0):U})})}),P.jsx(G,{index:2,title:"Token mix",description:"Where conversation tokens went",stale:r.stale,children:P.jsx(H,{query:r,skeleton:P.jsx(re,{height:260}),children:({overall:u,byAgentType:m})=>{let x={input:u.totalInputTokens,cacheRead:u.totalCacheReadTokens,cacheWrite:u.totalCacheWriteTokens,output:u.totalOutputTokens},S=Ca(u),f=Yq(m);return P.jsxs("div",{className:"stack",style:{gap:18},children:[P.jsxs("div",{className:"stack",style:{gap:10},children:[P.jsx(Ia,{segments:uD.map((c)=>({key:c.key,label:c.label,value:x[c.key],color:c.color}))}),P.jsx(He,{items:uD.map((c)=>({key:c.key,label:c.label,color:c.color,value:S>0?z(x[c.key]/S,0):"–"}))})]}),P.jsxs("div",{className:"stack",style:{gap:10},children:[P.jsx("div",{className:"section-label",style:{marginBottom:0},children:"By agent"}),P.jsx(Ia,{segments:f.segments.map((c)=>({key:c.agentType,label:lD[c.agentType],value:c.tokens,color:dD[c.agentType]}))}),f.segments.map((c)=>P.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[P.jsxs("span",{className:"row",children:[P.jsx("span",{className:"swatch",style:{background:dD[c.agentType]}}),lD[c.agentType],P.jsxs("span",{className:"dim num",children:[g(c.requests)," req"]})]}),P.jsxs("span",{className:"row",children:[P.jsx("span",{className:"dim num",children:U(c.tokens)}),P.jsx("span",{className:"num",style:{minWidth:48,textAlign:"right"},children:z(c.share)})]})]},c.agentType))]})]})}})})]}),P.jsx(G,{index:3,title:P.jsxs(P.Fragment,{children:[P.jsx(Mn,{tone:"live",pulse:!0})," Latest requests"]}),description:"Most recent model calls across every session",actions:P.jsxs("a",{className:"btn","data-size":"sm","data-variant":"ghost",href:`#/requests?range=${o}`,children:["All requests ",P.jsx(Ys,{size:13})]}),flush:!0,children:P.jsx(H,{query:s,skeleton:P.jsx(ge,{rows:8}),children:(u)=>P.jsx(pe,{rows:u,rowKey:(m)=>m.id??`${m.sessionFile}:${m.entryId}`,onRowClick:(m)=>m.id!==void 0&&t(m.id),columns:eF,dense:!0})})})]})}var eF=[{key:"model",header:"Model",render:(a)=>P.jsx(we,{primary:a.model,secondary:a.provider})},{key:"time",header:"When",render:(a)=>P.jsx("span",{className:"muted",children:ue(a.timestamp)})},{key:"tokens",header:"Tokens",align:"right",render:(a)=>P.jsx("span",{className:"num",children:g(a.usage.totalTokens)})},{key:"cost",header:"Cost",align:"right",render:(a)=>P.jsx("span",{className:"num",children:xa(a,4)})},{key:"duration",header:"Duration",align:"right",render:(a)=>P.jsx("span",{className:"num",children:se(a.duration)})},{key:"status",header:"Status",align:"right",render:(a)=>a.errorMessage?P.jsx(fe,{tone:"bad",children:"Failed"}):P.jsx(fe,{tone:"ok",children:"OK"})}];var ze=require("react");var T=require("react/jsx-runtime"),aF=100,iD=8;function aq({active:a,range:o}){let t=ne(["projects",o],({signal:c})=>Sq(o,c),{enabled:a}),[r,s]=ze.useState(""),[d,l]=ze.useState(!0),p=ze.useDeferredValue(r.trim().toLowerCase()),n=ie(o),i=ze.useMemo(()=>tD(t.data??[]),[t.data]),u=ze.useMemo(()=>d?i.rows.filter((c)=>!c.temporary):i.rows,[i,d]),m=ze.useMemo(()=>p?u.filter((c)=>c.folder.toLowerCase().includes(p)):u,[u,p]),x=ze.useMemo(()=>({cost:[...u].sort((c,I)=>I.totalCost-c.totalCost).slice(0,iD),requests:[...u].sort((c,I)=>I.totalRequests-c.totalRequests).slice(0,iD)}),[u]),S=T.jsx(j,{title:i.rows.length===0?"No project folders in this range":"Only temporary folders in this range"}),f=ze.useMemo(()=>tF(i.maxRequests,i.maxCost),[i]);return T.jsxs("div",{className:"page",children:[T.jsx(ye,{title:"Projects",description:`Usage by session folder in ${n.windowLabel}.`}),T.jsx(H,{query:t,skeleton:T.jsx(re,{height:96}),children:()=>T.jsx("div",{"data-stale":t.stale,children:T.jsxs(Ce,{min:180,children:[T.jsx(A,{label:"Folders",value:g(i.rows.length),hint:i.temporaryCount>0?`${g(i.temporaryCount)} temporary`:void 0}),T.jsx(A,{label:"Requests",value:g(i.totalRequests),hint:`${g(i.failedRequests)} failed`}),T.jsx(A,{label:"API-equivalent cost",title:"What this usage would cost at public API rates",value:ae(i.totalCost,i.unpricedRequests),hint:i.unpricedRequests>0?`${g(i.unpricedRequests)} unpriced`:void 0}),T.jsx(A,{label:"Conversation tokens",title:"Uncached input + cache reads + cache writes + output",value:U(i.conversationTokens)}),T.jsx(A,{label:"Cache rate",title:"Cache reads ÷ (uncached input + cache reads), across every folder",value:z(i.cacheRate)})]})})}),T.jsxs("div",{className:"grid grid-2",children:[T.jsx(G,{index:1,title:"Top by cost",description:"Share of API-equivalent cost",stale:t.stale,children:T.jsx(H,{query:t,skeleton:T.jsx(re,{height:236}),isEmpty:()=>x.cost.length===0,empty:S,children:()=>T.jsx(gn,{items:x.cost.map((c)=>({key:c.folder,label:T.jsx("span",{className:"mono",children:Xe(c.folder)}),value:c.totalCost,display:`${ae(c.totalCost,c.unpricedRequests)} · ${z(c.costShare)}`,color:"var(--chart-secondary)"})),onSelect:s})})}),T.jsx(G,{index:2,title:"Top by requests",description:"Share of all requests",stale:t.stale,children:T.jsx(H,{query:t,skeleton:T.jsx(re,{height:236}),isEmpty:()=>x.requests.length===0,empty:S,children:()=>T.jsx(gn,{items:x.requests.map((c)=>({key:c.folder,label:T.jsx("span",{className:"mono",children:Xe(c.folder)}),value:c.totalRequests,display:`${g(c.totalRequests)} · ${z(c.requestShare)}`})),onSelect:s})})})]}),T.jsx(G,{index:3,title:"Folders",description:t.data?m.length===i.rows.length?`${g(i.rows.length)} folders`:`${g(m.length)} of ${g(i.rows.length)} folders`:void 0,actions:T.jsxs(T.Fragment,{children:[i.temporaryCount>0&&T.jsxs("label",{className:"check",title:"Session folders under /tmp or /var/folders",children:[T.jsx("input",{type:"checkbox",checked:d,onChange:(c)=>l(c.target.checked)}),"Hide temporary (",g(i.temporaryCount),")"]}),T.jsx(zs,{value:r,onChange:s,placeholder:"Filter folders…",width:240})]}),flush:!0,stale:t.stale,children:T.jsx(H,{query:t,skeleton:T.jsx(ge,{rows:10}),children:()=>T.jsx(pe,{rows:m,rowKey:(c)=>c.folder,columns:f,initialSort:{key:"cost",dir:"desc"},limit:aF,dense:!0,empty:T.jsx(j,{title:i.rows.length===0?"No project folders in this range":"No folders match",hint:i.rows.length===0?"Try a longer range.":d&&i.temporaryCount>0?"Temporary folders are hidden.":void 0})})})})]})}function tF(a,o){return[{key:"folder",header:"Folder",sort:(t)=>t.folder,render:(t)=>T.jsxs("span",{className:"row projects-folder",title:t.folder||"(root)",children:[T.jsx("span",{className:"mono truncate",children:Xe(t.folder)}),t.temporary&&T.jsx(fe,{children:"temp"})]})},{key:"requests",header:"Requests",align:"right",sort:(t)=>t.totalRequests,render:(t)=>T.jsx("span",{title:`${z(t.requestShare)} of all requests`,children:T.jsx(ve,{value:t.totalRequests,max:a,display:g(t.totalRequests)})})},{key:"cost",header:"Cost",title:"API-equivalent cost at public API rates",align:"right",sort:(t)=>t.totalCost,render:(t)=>T.jsx("span",{title:`${z(t.costShare)} of all cost`,children:T.jsx(ve,{value:t.totalCost,max:o,display:ae(t.totalCost,t.unpricedRequests),color:"var(--chart-secondary)"})})},{key:"tokens",header:"Tokens",title:"Uncached input + cache reads + cache writes + output",align:"right",sort:(t)=>t.conversationTokens,render:(t)=>T.jsx("span",{className:"num",title:g(t.conversationTokens),children:U(t.conversationTokens)})},{key:"cacheRate",header:"Cache rate",title:"Cache reads ÷ (uncached input + cache reads)",align:"right",sort:(t)=>t.cacheRate,render:(t)=>T.jsx("span",{className:"num",children:z(t.cacheRate)})},{key:"cacheSavings",header:"Cache savings",title:"Prompt-input cost saved versus billing the same tokens uncached",align:"right",sort:(t)=>t.cacheSavings,render:(t)=>T.jsx("span",{className:`num ${t.cacheSavings<0?"tone-bad":"muted"}`,children:z(t.cacheSavings)})},{key:"errorRate",header:"Errors",align:"right",sort:(t)=>t.errorRate,render:(t)=>T.jsx("span",{title:`${g(t.failedRequests)} failed`,children:T.jsx(fe,{tone:t.failedRequests>0?ba(t.errorRate):"neutral",mono:!0,children:Be(t.errorRate)})})},{key:"duration",header:"Avg duration",align:"right",sort:(t)=>t.avgDuration??-1,render:(t)=>T.jsx("span",{className:"num",children:se(t.avgDuration)})},{key:"last",header:"Last active",align:"right",sort:(t)=>t.lastTimestamp,render:(t)=>T.jsx("span",{className:"dim",children:ue(t.lastTimestamp)})}]}var Se=require("react");var h=require("react/jsx-runtime"),oF=[{value:"tokens",label:"Tokens"},{value:"cost",label:"Cost",title:"API-equivalent estimate"},{value:"requests",label:"Requests"}],fD=6,cD=[{key:"input",label:"Uncached input",color:"#5b8cff"},{key:"cacheRead",label:"Cache read",color:"var(--chart-primary)"},{key:"cacheWrite",label:"Cache write",color:"#f5b54a"},{key:"output",label:"Output",color:"var(--chart-secondary)"}],pD="Usage snapshots accumulate whenever usage limits are fetched (TUI footer, /usage, omp usage).";function tq({active:a,range:o}){let t=ne(["providers",o],({signal:v})=>bq(o,v),{enabled:a}),[r,s]=Se.useState("tokens"),[d,l]=La(),p=ie(o),n=ne(["provider-windows",o],({signal:v})=>Jn(o,null,v),{enabled:a}),[i,u]=Se.useState(null),m=rF(n.data?.windowInsights??[],i),x=m?.provider??null,S=ne(["provider-windows",o,x],({signal:v})=>Jn(o,x,v),{enabled:a&&x!==null}),f=Se.useMemo(()=>{let v=t.data?.providers??[],q=t.data?.series??[],b=_2(v.map((M)=>({key:M.provider,weight:M.totalTokens}))),V=Ze(o,q.map((M)=>M.timestamp)),_={requests:0,failed:0,tokens:0,cost:0,unpriced:0};for(let M of v)_.requests+=M.totalRequests,_.failed+=M.failedRequests,_.tokens+=M.totalTokens,_.cost+=M.totalCost,_.unpriced+=M.unpricedRequests;let D=(M)=>Ta(q,{buckets:V,key:(y)=>y.provider,value:M,limit:fD,colors:b}).map((y)=>({...y,values:y.values.map((Y)=>Y||null)}));return{colors:b,buckets:V,totals:_,burn:{tokens:D((M)=>M.totalTokens),cost:D((M)=>M.cost),requests:D((M)=>M.requests)},spark:{tokens:xe(q,V,(M)=>M.totalTokens),cost:xe(q,V,(M)=>M.cost),requests:xe(q,V,(M)=>M.requests)},topProvider:v.reduce((M,y)=>M===null||y.totalTokens>M.totalTokens?y:M,null)}},[t.data,o]),c=f.burn[r],I=r==="cost"?(v)=>ce(v):U,C=f.totals;return h.jsxs("div",{className:"page",children:[h.jsx(ye,{title:"Providers",description:`Burn, reliability and subscription headroom per provider over ${p.windowLabel}.`}),h.jsx(H,{query:t,skeleton:h.jsx(re,{height:112}),children:({providers:v})=>h.jsx("div",{"data-stale":t.stale,children:h.jsxs(Ce,{min:190,children:[h.jsx(A,{label:"Providers",value:g(v.length),hint:f.topProvider?`Most tokens: ${f.topProvider.provider}`:void 0}),h.jsx(A,{label:"Requests",value:g(C.requests),hint:`${g(C.failed)} failed`,spark:f.spark.requests}),h.jsx(A,{label:"Tokens",title:"Uncached input + cache reads + cache writes + output",value:U(C.tokens),spark:f.spark.tokens}),h.jsx(A,{label:"API-equivalent cost",title:"What this usage would cost at public API rates",value:ae(C.cost,C.unpriced),hint:C.unpriced>0?`${g(C.unpriced)} unpriced`:void 0,spark:f.spark.cost,sparkColor:"var(--chart-secondary)"}),h.jsx(A,{label:"Error rate",value:Be(C.requests>0?C.failed/C.requests:0),hint:`${g(C.requests-C.failed)} succeeded`})]})})}),h.jsx(G,{index:1,title:"Provider totals",description:C.unpriced>0?`Cost is an API-equivalent estimate and excludes ${g(C.unpriced)} unpriced subscription request${C.unpriced===1?"":"s"}. Select a row for its token mix.`:"Cost is an API-equivalent estimate. Select a row for its token mix.",flush:!0,stale:t.stale,children:h.jsx(H,{query:t,skeleton:h.jsx(ge,{rows:6}),children:({providers:v})=>h.jsx(sF,{providers:v,colors:f.colors})})}),h.jsxs("div",{className:"grid grid-main-side",children:[h.jsx(G,{index:2,title:"Burn by provider",description:r==="cost"&&C.unpriced>0?`API-equivalent estimate per ${p.bucketMs<86400000?"hour":"day"}; excludes unpriced subscription requests`:`Per ${p.bucketMs<3600000?"5 minutes":p.bucketMs<86400000?"hour":"day"}, top ${fD} providers stacked`,actions:h.jsx(De,{size:"sm",options:oF,value:r,onChange:s}),stale:t.stale,children:h.jsx(H,{query:t,skeleton:h.jsx(re,{height:260}),children:()=>h.jsxs("div",{className:"stack",style:{gap:12},children:[h.jsx(Ra,{buckets:f.buckets,bucketMs:p.bucketMs,series:c,hidden:d,height:260,format:I,formatTooltip:r==="cost"?(v)=>ce(v):g,emptyLabel:"No provider activity in this range"}),h.jsx(He,{items:c.map((v)=>({key:v.key,label:v.label,color:v.color,value:I(v.values.reduce((q,b)=>q+(b??0),0))})),hidden:d,onToggle:l})]})})}),h.jsx(H,{query:t,skeleton:h.jsx(re,{height:320}),children:({hourly:v,providers:q})=>h.jsx(lF,{hourly:v,providers:q,stale:t.stale})})]}),h.jsx(G,{index:4,title:"Subscription windows",description:"What one usage window buys you and how many accounts peak demand needs. Select a row to chart it.",flush:!0,stale:n.stale,children:h.jsx(H,{query:n,skeleton:h.jsx(ge,{rows:6}),children:(v)=>h.jsx(dF,{insights:v.windowInsights,selected:m,onSelect:u})})}),h.jsx(pF,{insights:n.data?.windowInsights??null,accounts:S,selected:m,onSelect:u})]})}function rF(a,o){if(o&&a.some((r)=>r.provider===o.provider&&r.windowKey===o.windowKey))return o;let t=o&&a.find((r)=>r.provider===o.provider)||a.reduce((r,s)=>r===void 0||s.fractionConsumed>r.fractionConsumed?s:r,void 0);return t?{provider:t.provider,windowKey:t.windowKey}:null}function sF({providers:a,colors:o}){let[t,r]=Se.useState(null),s=Se.useMemo(()=>{let d=0,l=0,p=0;for(let n of a)d=Math.max(d,n.totalRequests),l=Math.max(l,n.totalTokens),p+=n.totalTokens;return[{key:"provider",header:"Provider",sort:(n)=>n.provider,render:(n)=>h.jsxs("span",{className:"row",style:{gap:8},children:[h.jsx(ca,{color:o.get(n.provider)??Ne}),h.jsx("span",{className:"mono cell-primary",children:n.provider})]})},{key:"requests",header:"Requests",align:"right",sort:(n)=>n.totalRequests,render:(n)=>h.jsx(ve,{value:n.totalRequests,max:d,display:g(n.totalRequests)})},{key:"errors",header:"Error rate",align:"right",sort:(n)=>n.totalRequests>0?n.failedRequests/n.totalRequests:0,render:(n)=>{let i=n.totalRequests>0?n.failedRequests/n.totalRequests:0;return h.jsxs("span",{className:"row",style:{gap:8,justifyContent:"flex-end"},children:[h.jsx("span",{className:"num dim",children:g(n.failedRequests)}),h.jsx(fe,{tone:n.failedRequests>0?ba(i):"neutral",mono:!0,children:Be(i)})]})}},{key:"models",header:"Models",title:"Distinct models used through this provider",align:"right",sort:(n)=>n.models,render:(n)=>h.jsx("span",{className:"num",children:g(n.models)})},{key:"tokens",header:"Tokens",title:"Uncached input + cache reads + cache writes + output",align:"right",sort:(n)=>n.totalTokens,render:(n)=>h.jsx(ve,{value:n.totalTokens,max:l,display:U(n.totalTokens),color:o.get(n.provider)})},{key:"share",header:"Share",title:"Fraction of all tokens in range",align:"right",sort:(n)=>n.totalTokens,render:(n)=>h.jsx("span",{className:"num muted",children:z(p>0?n.totalTokens/p:0)})},{key:"cost",header:"Cost",title:"API-equivalent estimate",align:"right",sort:(n)=>n.totalCost,render:(n)=>h.jsx("span",{className:"num",title:n.unpricedRequests>0?`${g(n.unpricedRequests)} unpriced`:void 0,children:ae(n.totalCost,n.unpricedRequests)})},{key:"tps",header:"Tokens/s",title:"Average output throughput",align:"right",sort:(n)=>n.avgTokensPerSecond??-1,render:(n)=>h.jsx("span",{className:"num",children:_e(n.avgTokensPerSecond)})},{key:"premium",header:"Premium",title:"Premium requests (subscription multiplier units)",align:"right",sort:(n)=>n.totalPremiumRequests,render:(n)=>h.jsx("span",{className:n.totalPremiumRequests>0?"num":"num dim",children:g(Math.round(n.totalPremiumRequests*100)/100)})}]},[a,o]);return h.jsx(pe,{rows:a,rowKey:(d)=>d.provider,columns:s,initialSort:{key:"tokens",dir:"desc"},limit:12,selectedKey:t,onRowClick:(d)=>r((l)=>l===d.provider?null:d.provider),expanded:(d)=>d.provider===t?h.jsx(nF,{provider:d}):null,empty:h.jsx(j,{title:"No requests in this range"})})}function nF({provider:a}){let o={input:a.totalInputTokens,cacheRead:a.totalCacheReadTokens,cacheWrite:a.totalCacheWriteTokens,output:a.totalOutputTokens};return h.jsxs("div",{className:"providers-mix",children:[h.jsx(Ia,{segments:cD.map((t)=>({key:t.key,label:t.label,value:o[t.key],color:t.color}))}),h.jsx(He,{items:cD.map((t)=>({key:t.key,label:t.label,color:t.color,value:`${U(o[t.key])} · ${a.totalTokens>0?z(o[t.key]/a.totalTokens,0):"–"}`}))})]})}var Cn="";function lF({hourly:a,providers:o,stale:t}){let[r,s]=Se.useState(Cn),d=r===Cn||o.some((n)=>n.provider===r)?r:Cn,l=Se.useMemo(()=>{let n=Array.from({length:24},()=>0),i=Array.from({length:24},()=>0),u=Array.from({length:24},()=>0);for(let f of a){if(d!==Cn&&f.provider!==d)continue;n[f.hour]+=f.totalTokens,i[f.hour]+=f.outputTokens,u[f.hour]+=f.requests}let m=0;for(let f=1;f<24;f++)if(n[f]>n[m])m=f;let x=n[m]>0;return{series:[{key:"tokens",label:"Tokens",color:"var(--chart-primary)",values:n.map((f,c)=>x&&c===m?null:f)},{key:"peak",label:"Tokens (peak hour)",color:"var(--chart-secondary)",values:n.map((f,c)=>x&&c===m?f:null)}],output:i,requests:u,peak:m,hasData:x}},[a,d]),p=(n)=>`${String(n).padStart(2,"0")}:00`;return h.jsx(G,{index:3,title:"Peak burn hours",description:l.hasData?`Tokens by local hour of day; peak at ${p(l.peak)}`:"Tokens by local hour of day",actions:h.jsxs("select",{className:"input providers-select",value:d,onChange:(n)=>s(n.target.value),"aria-label":"Provider",children:[h.jsx("option",{value:Cn,children:"All providers"}),o.map((n)=>h.jsx("option",{value:n.provider,children:n.provider},n.provider))]}),stale:t,children:h.jsx(Pa,{slots:24,tickLabel:(n)=>String(n).padStart(2,"0"),tooltipTitle:(n)=>`${p(n)}–${p((n+1)%24)}`,series:l.series,height:260,showTotal:!1,formatTooltip:g,emptyLabel:"No activity in this range",tooltipExtra:(n)=>h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"chart-tooltip-row",children:[h.jsx("span",{className:"chart-tooltip-label",children:"Output"}),h.jsx("span",{className:"chart-tooltip-value",children:g(l.output[n])})]}),h.jsxs("div",{className:"chart-tooltip-row",children:[h.jsx("span",{className:"chart-tooltip-label",children:"Requests"}),h.jsx("span",{className:"chart-tooltip-value",children:g(l.requests[n])})]})]})})})}function dF({insights:a,selected:o,onSelect:t}){return h.jsx(pe,{rows:a,rowKey:(r)=>`${r.provider}::${r.windowKey}`,columns:uF,initialSort:{key:"consumed",dir:"desc"},limit:12,selectedKey:o?`${o.provider}::${o.windowKey}`:null,onRowClick:(r)=>t({provider:r.provider,windowKey:r.windowKey}),empty:h.jsx(j,{title:"No usage snapshots in this range",hint:pD})})}var uF=[{key:"window",header:"Window",sort:(a)=>`${a.provider} ${a.windowLabel}`,render:(a)=>h.jsx(we,{primary:a.windowLabel,secondary:h.jsx("span",{className:"mono",children:a.provider})})},{key:"accounts",header:"Accounts",title:"Accounts with at least one snapshot for this window in range",align:"right",sort:(a)=>a.accounts,render:(a)=>h.jsx("span",{className:"num",children:g(a.accounts)})},{key:"cycles",header:"Resets",title:"Window resets observed (drops in used fraction)",align:"right",sort:(a)=>a.cycles,render:(a)=>h.jsx("span",{className:"num muted",children:g(a.cycles)})},{key:"consumed",header:"Windows burned",title:"Subscription-window equivalents consumed in range (sum of used-fraction increases across accounts)",align:"right",sort:(a)=>a.fractionConsumed,render:(a)=>h.jsx("span",{className:"num",children:a.fractionConsumed.toFixed(2)})},{key:"capacity",header:"Tokens / window",title:"Provider tokens burned in range ÷ windows burned — what one full window is worth",align:"right",sort:(a)=>a.estTokensPerWindow??-1,render:(a)=>a.estTokensPerWindow!==null?h.jsx("span",{className:"num",children:U(a.estTokensPerWindow)}):h.jsx("span",{className:"dim",title:"Too little of the window was consumed to extrapolate",children:"–"})},{key:"peak",header:"Peak utilization",title:"Peak of summed used fraction across accounts at any sampled instant; the bar is relative to fleet capacity",align:"right",sort:(a)=>a.peakConcurrentFraction,render:(a)=>{let o=a.accounts>0?a.peakConcurrentFraction/a.accounts:0;return h.jsx(ve,{value:a.peakConcurrentFraction,max:a.accounts,display:z(a.peakConcurrentFraction,0),color:o>=0.9?"var(--warn)":void 0})}},{key:"ideal",header:"Accounts needed",title:"Accounts needed to keep peak demand under 90% of fleet capacity",align:"right",sort:(a)=>a.idealAccounts-a.accounts,render:(a)=>a.idealAccounts>a.accounts?h.jsxs(fe,{tone:"warn",mono:!0,children:[g(a.idealAccounts)," · have ",g(a.accounts)]}):h.jsx("span",{className:"num",children:g(a.idealAccounts)})},{key:"exhausted",header:"Exhaustions",title:"Transitions into an exhausted state observed in range",align:"right",sort:(a)=>a.exhaustedEvents,render:(a)=>a.exhaustedEvents>0?h.jsxs(fe,{tone:"warn",mono:!0,children:[g(a.exhaustedEvents)," exhausted"]}):h.jsx("span",{className:"num dim",children:"0"})}],zn=60000,ia=60*zn,Wn=24*ia,iF=[5*zn,15*zn,30*zn,ia,2*ia,3*ia,6*ia,12*ia,Wn],fF=240,cF=6*ia;function pF({insights:a,accounts:o,selected:t,onSelect:r}){let[s,d]=La(),l=Se.useMemo(()=>[...new Set((a??[]).map((f)=>f.provider))],[a]),p=Se.useMemo(()=>(a??[]).filter((f)=>f.provider===t?.provider).map((f)=>({key:f.windowKey,label:f.windowLabel})),[a,t?.provider]),n=Se.useMemo(()=>(o.data?.usageSeries??[]).filter((f)=>f.provider===t?.provider),[o.data,t?.provider]),i=n.length===0&&(o.loading||o.stale),u=Se.useMemo(()=>{let f=new Map;for(let I of n){let C=f.get(I.accountLabel)??[];if(!C.includes(I.accountKey))C.push(I.accountKey);f.set(I.accountLabel,C)}let c=new Map;for(let[I,C]of f)C.sort(),C.forEach((v,q)=>c.set(v,C.length>1?`${I} #${q+1}`:I));return c},[n]),m=Se.useMemo(()=>mF(n.filter((f)=>f.windowKey===t?.windowKey),u),[n,u,t?.windowKey]),x=Se.useMemo(()=>{let f=new Map(m.series.map((c)=>[c.key,c.color]));return n.map((c)=>{let I=null,C=null;for(let b of c.points){if(b.usedFraction===null)continue;if(C=Math.max(C??0,b.usedFraction),!I||b.timestamp>=I.timestamp)I={fraction:b.usedFraction,exhausted:b.exhausted,timestamp:b.timestamp}}let v=c.windowKey===t?.windowKey?f.get(c.accountKey)??null:null,q=u.get(c.accountKey)??c.accountLabel;return{series:c,name:q,color:v,latest:I,peak:C,samples:c.points.length}}).sort((c,I)=>Number(I.color!==null)-Number(c.color!==null)||c.series.windowLabel.localeCompare(I.series.windowLabel)||(I.latest?.fraction??-1)-(c.latest?.fraction??-1))},[n,u,m.series,t?.windowKey]),S=p.find((f)=>f.key===t?.windowKey)?.label;return h.jsx(G,{index:5,title:"Window utilization",description:m.buckets.length>0?`${S??"Window"} used fraction per account, ${Ve(new Date(m.first),"MMM d HH:mm")} – ${Ve(new Date(m.last),"MMM d HH:mm")}`:"Recorded limit utilization per account",actions:t&&h.jsxs("div",{className:"row",style:{gap:6},children:[h.jsx("select",{className:"input providers-select",value:t.provider,onChange:(f)=>{let c=f.target.value,I=a?.find((C)=>C.provider===c);if(I)r({provider:c,windowKey:I.windowKey})},"aria-label":"Provider",children:l.map((f)=>h.jsx("option",{value:f,children:f},f))}),h.jsx("select",{className:"input providers-select",value:t.windowKey,onChange:(f)=>r({provider:t.provider,windowKey:f.target.value}),"aria-label":"Window",children:p.map((f)=>h.jsx("option",{value:f.key,children:f.label},f.key))})]}),stale:o.stale,children:a===null?h.jsx(re,{height:260}):t===null?h.jsx(j,{title:"No usage snapshots in this range",hint:pD}):h.jsx(H,{query:o,skeleton:h.jsx(re,{height:260}),children:()=>i?h.jsx(re,{height:260}):h.jsxs("div",{className:"stack",style:{gap:16},children:[h.jsxs("div",{className:"stack",style:{gap:12},children:[h.jsx(Pa,{slots:m.buckets.length,tickLabel:(f)=>wn(m.buckets[f],m.last-m.first>Wn?Wn:m.bucketMs),tooltipTitle:(f)=>vn(m.buckets[f],ia),series:m.series,hidden:s,kind:"line",stacked:!1,height:260,yMax:Math.max(1,m.max),format:(f)=>z(f,0),formatTooltip:(f)=>z(f,1),references:[{value:1,label:"100%"}],emptyLabel:"No utilization readings for this window",tooltipExtra:(f)=>{let c=m.exhausted[f];return c.length>0?h.jsxs("div",{className:"chart-tooltip-row",children:[h.jsx("span",{className:"chart-tooltip-label tone-bad",children:"Exhausted"}),h.jsx("span",{className:"chart-tooltip-value",children:c.join(", ")})]}):null}}),m.series.length>1&&h.jsx(He,{items:m.series.map((f)=>({key:f.key,label:f.label,color:f.color})),hidden:s,onToggle:d})]}),h.jsx("div",{className:"providers-accounts",children:h.jsx(pe,{rows:x,rowKey:(f)=>`${f.series.windowKey}::${f.series.accountKey}`,columns:gF,limit:16,onRowClick:(f)=>r({provider:f.series.provider,windowKey:f.series.windowKey}),dense:!0})})]})})})}function mF(a,o){let{POSITIVE_INFINITY:t,NEGATIVE_INFINITY:r}=Number;for(let S of a)for(let f of S.points){if(f.timestamp<t)t=f.timestamp;if(f.timestamp>r)r=f.timestamp}if(!(r>=t))return{buckets:[],bucketMs:ia,first:0,last:0,max:0,series:[],exhausted:[]};let s=r-t,d=iF.find((S)=>s/S<fF)??Wn,l=Ze("all",[t],d,r),p=(S)=>Math.floor((S-l[0])/d),n=l.map(()=>[]),i=0,u=(S)=>o.get(S.accountKey)??S.accountLabel,x=[...a].sort((S,f)=>u(S).localeCompare(u(f))).map((S,f)=>{let c=l.map(()=>null),I=l.map(()=>0);for(let q of S.points){let b=p(q.timestamp);if(b<0||b>=l.length)continue;if(q.exhausted&&!n[b].includes(u(S)))n[b].push(u(S));if(q.usedFraction===null||q.timestamp<I[b])continue;c[b]=q.usedFraction,I[b]=q.timestamp,i=Math.max(i,q.usedFraction)}let C=null,v=0;for(let q=0;q<l.length;q++)if(c[q]!==null)C=c[q],v=I[q];else if(C!==null&&l[q]-v<=cF)c[q]=C;return{key:S.accountKey,label:u(S),color:Ke[f%Ke.length],values:c}});return{buckets:l,bucketMs:d,first:t,last:r,max:i,series:x,exhausted:n}}function hF(a){if(!a)return h.jsx("span",{className:"dim",children:"No reading"});if(a.exhausted)return h.jsx(fe,{tone:"bad",children:"Exhausted"});if(a.fraction>=0.8)return h.jsx(fe,{tone:"warn",children:"High"});return h.jsx(fe,{tone:"ok",children:"OK"})}var gF=[{key:"account",header:"Account",sort:(a)=>a.name,render:(a)=>h.jsxs("span",{className:"row",style:{gap:8},children:[h.jsx("span",{className:"providers-swatch-slot",children:a.color&&h.jsx(ca,{color:a.color})}),h.jsx("span",{className:"truncate providers-account",title:a.series.accountKey,children:a.name})]})},{key:"window",header:"Window",sort:(a)=>a.series.windowLabel,render:(a)=>h.jsx("span",{className:a.color?void 0:"muted",children:a.series.windowLabel})},{key:"latest",header:"Latest used",align:"right",sort:(a)=>a.latest?.fraction??-1,render:(a)=>a.latest?h.jsx(ve,{value:a.latest.fraction,max:1,display:z(a.latest.fraction,0),color:a.latest.exhausted?"var(--bad)":a.latest.fraction>=0.8?"var(--warn)":"var(--ok)"}):h.jsx("span",{className:"dim",children:"–"})},{key:"status",header:"Status",sort:(a)=>a.latest?.exhausted?2:(a.latest?.fraction??0)>=0.8?1:0,render:(a)=>hF(a.latest)},{key:"peak",header:"Peak in range",align:"right",sort:(a)=>a.peak??-1,render:(a)=>h.jsx("span",{className:"num",children:a.peak===null?"–":z(a.peak,0)})},{key:"samples",header:"Snapshots",align:"right",sort:(a)=>a.samples,render:(a)=>h.jsx("span",{className:"num muted",children:g(a.samples)})},{key:"recorded",header:"Recorded",align:"right",sort:(a)=>a.latest?.timestamp??0,render:(a)=>h.jsx("span",{className:"muted",children:a.latest?ue(a.latest.timestamp):"–"})}];var Aa=require("react");var F=require("react/jsx-runtime"),Vn={ok:{label:"OK",tone:"ok"},aborted:{label:"Aborted",tone:"warn"},failed:{label:"Failed",tone:"bad"}};function mD({id:a,onClose:o}){let t=ne(["request",a],({signal:d})=>Iq(a??0,d),{enabled:a!==null}),r=t.stale?null:t.data,s=r?Vn[da(r)]:null;return F.jsx(Eq,{open:a!==null,onClose:o,width:620,title:r?F.jsx("span",{className:"mono",children:r.model}):"Request",subtitle:r?F.jsxs(F.Fragment,{children:[r.provider," ·"," ",F.jsx("span",{title:Fe(r.timestamp),children:ue(r.timestamp)})]}):a!==null?F.jsxs("span",{className:"mono",children:["#",a]}):void 0,actions:r&&s?F.jsx(fe,{tone:s.tone,children:s.label}):void 0,children:r?F.jsx(xF,{details:r,aborted:da(r)==="aborted"}):t.error?F.jsx(On,{error:t.error,onRetry:t.refetch}):F.jsxs("div",{className:"stack",style:{gap:12},children:[F.jsx(he,{height:56}),F.jsx(he,{height:120}),F.jsx(he,{height:120}),F.jsx(he,{height:220})]})})}function xF({details:a,aborted:o}){let{usage:t}=a,r=a.duration!==null&&a.duration>0&&t.output>0?t.output*1000/a.duration:null,{messages:s,output:d,...l}=a;return F.jsxs(F.Fragment,{children:[a.errorMessage&&F.jsxs("section",{className:"request-drawer-error","data-tone":o?"warn":"bad",role:"note",children:[F.jsx("div",{className:"request-drawer-error-label",children:o?"Aborted":"Error"}),F.jsx("pre",{className:"request-drawer-error-text",children:a.errorMessage})]}),F.jsxs("section",{children:[F.jsx("div",{className:"section-label",children:"Timing"}),F.jsx(na,{items:[{key:"at",label:"Started",value:Fe(a.timestamp)},{key:"duration",label:"Duration",value:se(a.duration)},{key:"ttft",label:"Time to first token",value:se(a.ttft)},{key:"tps",label:"Output tokens/s",value:_e(r)}]})]}),F.jsxs("section",{children:[F.jsx("div",{className:"section-label",children:"Tokens"}),F.jsx(na,{items:[{key:"input",label:"Uncached input",value:g(t.input)},{key:"cacheRead",label:"Cache read",value:g(t.cacheRead)},{key:"cacheWrite",label:"Cache write",value:g(t.cacheWrite)},{key:"output",label:"Output",value:g(t.output)},{key:"total",label:"Total",value:g(t.totalTokens)},{key:"premium",label:"Premium requests",value:g(Math.round((t.premiumRequests??0)*100)/100)}]})]}),F.jsxs("section",{children:[F.jsx("div",{className:"section-label",children:"API-equivalent cost"}),F.jsx(na,{items:[{key:"total",label:"Total",value:xa(a,4)},{key:"input",label:"Input",value:ce(t.cost.input,4)},{key:"cacheRead",label:"Cache read",value:ce(t.cost.cacheRead,4)},{key:"cacheWrite",label:"Cache write",value:ce(t.cost.cacheWrite,4)},{key:"output",label:"Output",value:ce(t.cost.output,4)}]})]}),F.jsxs("section",{children:[F.jsx("div",{className:"section-label",children:"Identity"}),F.jsx(na,{items:[{key:"id",label:"Request id",value:a.id??"–"},{key:"entry",label:"Entry id",value:a.entryId},{key:"stop",label:"Stop reason",value:a.stopReason},{key:"api",label:"API",value:a.api},{key:"project",label:"Project",value:F.jsx("span",{title:a.folder,children:Xe(a.folder)})}]}),F.jsxs("div",{className:"request-drawer-file",children:[F.jsx("span",{className:"kv-key",children:"Session file"}),F.jsx("span",{className:"kv-value",children:a.sessionFile})]})]}),d!=null&&F.jsx(Bn,{data:d,title:"Output message"}),F.jsx(Bn,{data:s,title:"Session entry",initialCollapsed:!0}),F.jsx(Bn,{data:l,title:"Stats row",initialCollapsed:!0})]})}var B=require("react/jsx-runtime"),oq=[500,2000,1e4];function rq({active:a,range:o,onRequestClick:t}){let[r,s]=Aa.useState(0),d=oq[r],l=ne(["requests-log",d],({signal:b})=>Pn(d,b),{enabled:a}),[p,n]=Aa.useState(""),[i,u]=Aa.useState("all"),m=ie(o),x=Aa.useMemo(()=>{let b=l.data??[],V=m.spanMs===null?null:Date.now()-m.spanMs,_=V===null?b:b.filter((y)=>y.timestamp>=V),D=!l.stale&&(b.length<d||V!==null&&_.length<b.length),M={all:_.length,ok:0,aborted:0,failed:0};for(let y of _)M[da(y)]++;return{loaded:b.length,inRange:_,complete:D,counts:M,summary:oD(_)}},[l.data,l.stale,d,m.spanMs]),S=Aa.useMemo(()=>{let b=p.trim().toLowerCase();return x.inRange.filter((V)=>(i==="all"||da(V)===i)&&(b===""||V.model.toLowerCase().includes(b)||V.provider.toLowerCase().includes(b)||V.folder.toLowerCase().includes(b)))},[x.inRange,p,i]),{summary:f,counts:c,complete:I}=x,C=r+1<oq.length?oq[r+1]:null,v=C!==null?B.jsx("button",{type:"button",className:"btn","data-size":"sm",disabled:l.refreshing,onClick:()=>s(r+1),children:l.refreshing&&l.stale?"Loading…":`Load latest ${g(C)}`}):void 0,q=["all","ok","aborted","failed"].map((b)=>({value:b,label:B.jsxs(B.Fragment,{children:[b==="all"?"All":Vn[b].label," ",B.jsx("span",{className:"dim num",children:U(c[b])})]})}));return B.jsxs("div",{className:"page",children:[B.jsx(ye,{title:"Requests",description:`Every model call omp made in ${m.windowLabel}, newest first. Open a row for its full payload.`}),B.jsx(H,{query:l,skeleton:B.jsx(he,{height:96,style:{borderRadius:12}}),children:()=>B.jsx("div",{"data-stale":l.stale,children:B.jsxs(Ce,{min:160,children:[B.jsx(A,{label:"Requests",value:g(f.requests),hint:f.oldest===null?`none in ${m.windowLabel}`:`since ${ue(f.oldest)}`}),B.jsx(A,{label:"Failed",value:g(f.failed),hint:`${f.requests>0?Be(f.failed/f.requests):"–"} · ${g(f.aborted)} aborted`}),B.jsx(A,{label:"Tokens",title:"Total tokens across these requests",value:U(f.tokens)}),B.jsx(A,{label:"API-equivalent cost",title:"What these requests would cost at public API rates",value:ae(f.cost,f.unpriced),hint:f.unpriced>0?`${g(f.unpriced)} unpriced`:void 0}),B.jsx(A,{label:"Median duration",value:se(f.medianDuration),hint:`p95 ${se(f.p95Duration)}`}),B.jsx(A,{label:"Median TTFT",title:"Time to first token",value:se(f.medianTtft)})]})})}),B.jsx(G,{index:1,title:"Request log",description:l.data===null?"Loading the latest requests…":I?`${g(S.length)} of ${g(f.requests)} requests in ${m.windowLabel}`:`${g(S.length)} of the latest ${g(f.requests)} requests`,actions:B.jsxs(B.Fragment,{children:[B.jsx(zs,{value:p,onChange:n,placeholder:"Model, provider or project"}),B.jsx(De,{size:"sm","aria-label":"Status",options:q,value:i,onChange:u})]}),flush:!0,stale:l.stale,footer:l.data!==null&&!I?B.jsxs(B.Fragment,{children:[B.jsxs("span",{children:["Showing the latest ",g(x.loaded)," requests, back to"," ",f.oldest===null?"–":Fe(f.oldest),". Older requests in"," ",m.windowLabel," are not loaded."]}),v]}):void 0,children:B.jsx(H,{query:l,skeleton:B.jsx(ge,{rows:12}),children:()=>B.jsx(pe,{rows:S,rowKey:(b)=>b.id??`${b.sessionFile}:${b.entryId}`,onRowClick:(b)=>b.id!==void 0&&t(b.id),columns:LF,initialSort:{key:"time",dir:"desc"},limit:100,dense:!0,empty:B.jsx(j,{title:f.requests===0?`No requests in ${m.windowLabel}`:"No requests match",hint:f.requests===0?void 0:"Clear the search or status filter."})})})})]})}var LF=[{key:"model",header:"Model",sort:(a)=>a.model,render:(a)=>B.jsx(we,{primary:B.jsx("span",{className:"mono",children:a.model}),secondary:a.provider})},{key:"time",header:"When",sort:(a)=>a.timestamp,render:(a)=>B.jsx("span",{className:"muted",title:Fe(a.timestamp),children:ue(a.timestamp)})},{key:"project",header:"Project",sort:(a)=>a.folder,render:(a)=>B.jsx("span",{className:"mono muted truncate",title:a.folder,style:{display:"block",maxWidth:180},children:Xe(a.folder)})},{key:"input",header:"Input",title:"Uncached input tokens",align:"right",sort:(a)=>a.usage.input,render:(a)=>B.jsx("span",{className:"num",children:U(a.usage.input)})},{key:"cache",header:"Cache read",title:"Cache read tokens (hover a cell for cache writes)",align:"right",sort:(a)=>a.usage.cacheRead,render:(a)=>B.jsx("span",{className:"num",title:`Cache write: ${g(a.usage.cacheWrite)}`,children:U(a.usage.cacheRead)})},{key:"output",header:"Output",align:"right",sort:(a)=>a.usage.output,render:(a)=>B.jsx("span",{className:"num",children:U(a.usage.output)})},{key:"cost",header:"Cost",title:"API-equivalent estimate",align:"right",sort:(a)=>a.usage.cost.total,render:(a)=>B.jsx("span",{className:"num",children:xa(a,4)})},{key:"duration",header:"Duration",align:"right",sort:(a)=>a.duration??-1,render:(a)=>B.jsx("span",{className:"num",children:se(a.duration)})},{key:"ttft",header:"TTFT",title:"Time to first token",align:"right",sort:(a)=>a.ttft??-1,render:(a)=>B.jsx("span",{className:"num muted",children:se(a.ttft)})},{key:"status",header:"Status",sort:(a)=>da(a),render:(a)=>{let o=Vn[da(a)];return B.jsx("span",{title:a.errorMessage??void 0,children:B.jsx(we,{lead:B.jsx(Mn,{tone:o.tone}),primary:o.label,secondary:B.jsx("span",{className:"mono",children:a.stopReason})})})}}];var be=require("react/jsx-runtime");function hD(){return be.jsx(Rq,{children:be.jsx(IF,{})})}function IF(){let[a,o]=Sa.useState("overview"),[t,r]=Sa.useState("24h"),[s,d]=Sa.useState(null),l=Sa.useCallback(()=>d(null),[]),p=Sa.useRef(new Set);p.current.add(a);let n=(i)=>{let u=i===a;switch(i){case"overview":return be.jsx(eq,{active:u,range:t,onRequestClick:d});case"models":return be.jsx(Y2,{active:u,range:t});case"providers":return be.jsx(tq,{active:u,range:t});case"costs":return be.jsx(Z2,{active:u,range:t});case"requests":return be.jsx(rq,{active:u,range:t,onRequestClick:d});case"errors":return be.jsx(j2,{active:u,range:t,onRequestClick:d});case"projects":return be.jsx(aq,{active:u,range:t});default:return null}};return be.jsxs("div",{className:"omp-app",children:[be.jsx(Wq,{section:a,onSectionChange:o,range:t,onRangeChange:r,children:[...p.current].map((i)=>be.jsx("div",{hidden:i!==a,children:n(i)},i))}),be.jsx(mD,{id:s,onClose:l})]})}var gD=`/* ==========================================================================
   omp stats — design system
   Pure-black chassis, one inset panel, hairline edges, one accent gradient.
   Page-specific styles live next to their route (\`routes/*.css\`).
   ========================================================================== */

:root,
[data-theme="dark"] {
	color-scheme: dark;

	/* Surface ramp: each step rises one notch off the page. */
	--bg: #000;
	--panel: #09090a;
	--card: #0e0e10;
	--raised: #17171a;
	--overlay: rgba(14, 14, 16, 0.78);
	--hover: rgba(255, 255, 255, 0.035);
	--press: rgba(255, 255, 255, 0.06);
	--selected: rgba(255, 255, 255, 0.075);

	/* Hairlines are alpha so one value reads on every surface step. */
	--line-1: rgba(255, 255, 255, 0.06);
	--line-2: rgba(255, 255, 255, 0.09);
	--line-3: rgba(255, 255, 255, 0.14);
	--line-4: rgba(255, 255, 255, 0.22);

	--ink-1: #ededef;
	--ink-2: #a0a0a8;
	--ink-3: #6c6c74;
	--ink-4: #46464c;
	--ink-inverse: #0a0a0b;

	/* Accent: omp cyan → pink. Solid \`--accent\` for text/strokes, gradient for hero marks. */
	--accent-a: #5ad8e6;
	--accent-b: #ed4abf;
	--accent: #f068c8;
	--accent-soft: rgba(237, 74, 191, 0.14);
	--accent-line: rgba(237, 74, 191, 0.35);
	--accent-gradient: linear-gradient(100deg, var(--accent-a), var(--accent-b));
	--focus: #5ad8e6;

	/* Status. Live (real-time presence) is reserved for the live indicator. */
	--ok: #3ecf8e;
	--ok-soft: rgba(62, 207, 142, 0.13);
	--warn: #f5a524;
	--warn-soft: rgba(245, 165, 36, 0.13);
	--bad: #ff6166;
	--bad-soft: rgba(255, 97, 102, 0.13);
	--live: #3ecf8e;

	/* Charts. */
	--chart-grid: rgba(255, 255, 255, 0.055);
	--chart-axis: #5c5c64;
	--chart-cursor: rgba(255, 255, 255, 0.05);
	--chart-primary: #5ad8e6;
	--chart-secondary: #ed4abf;

	--shadow-1: 0 1px 0 rgba(255, 255, 255, 0.03) inset, 0 1px 2px rgba(0, 0, 0, 0.5);
	--shadow-2: 0 8px 24px rgba(0, 0, 0, 0.55), 0 1px 0 rgba(255, 255, 255, 0.05) inset;
	--shadow-3: 0 24px 64px rgba(0, 0, 0, 0.7), 0 1px 0 rgba(255, 255, 255, 0.06) inset;
}

[data-theme="light"] {
	color-scheme: light;

	--bg: #f2f2f3;
	--panel: #ffffff;
	--card: #ffffff;
	--raised: #f6f6f7;
	--overlay: rgba(255, 255, 255, 0.8);
	--hover: rgba(0, 0, 0, 0.03);
	--press: rgba(0, 0, 0, 0.05);
	--selected: rgba(0, 0, 0, 0.06);

	--line-1: rgba(0, 0, 0, 0.06);
	--line-2: rgba(0, 0, 0, 0.09);
	--line-3: rgba(0, 0, 0, 0.14);
	--line-4: rgba(0, 0, 0, 0.22);

	--ink-1: #151518;
	--ink-2: #5a5a63;
	--ink-3: #8b8b94;
	--ink-4: #b9b9c0;
	--ink-inverse: #ffffff;

	--accent-a: #1fa9bb;
	--accent-b: #d42ea3;
	--accent: #c42596;
	--accent-soft: rgba(212, 46, 163, 0.1);
	--accent-line: rgba(212, 46, 163, 0.3);
	--focus: #1fa9bb;

	--ok: #12a36b;
	--ok-soft: rgba(18, 163, 107, 0.11);
	--warn: #c77c02;
	--warn-soft: rgba(199, 124, 2, 0.11);
	--bad: #dc3a40;
	--bad-soft: rgba(220, 58, 64, 0.1);
	--live: #12a36b;

	--chart-grid: rgba(0, 0, 0, 0.06);
	--chart-axis: #9a9aa2;
	--chart-cursor: rgba(0, 0, 0, 0.04);
	--chart-primary: #1fa9bb;
	--chart-secondary: #d42ea3;

	--shadow-1: 0 1px 2px rgba(0, 0, 0, 0.04);
	--shadow-2: 0 8px 24px rgba(0, 0, 0, 0.1);
	--shadow-3: 0 24px 64px rgba(0, 0, 0, 0.16);
}

:root {
	--font-sans: "Inter var", "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
	--font-mono: ui-monospace, "SF Mono", "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace;

	--r-chip: 6px;
	--r-control: 8px;
	--r-card: 12px;
	--r-panel: 16px;
	--r-pill: 999px;

	--topbar-h: 52px;
	--sidebar-w: 224px;
	--gutter: 28px;

	--ease: cubic-bezier(0.2, 0, 0, 1);
	--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
	--dur-1: 120ms;
	--dur-2: 200ms;
	--dur-3: 360ms;
	--stagger: 40ms;
}

/* ==========================================================================
   Reset & base
   ========================================================================== */
*,
*::before,
*::after {
	box-sizing: border-box;
}

html,
body {
	margin: 0;
	padding: 0;
}

html {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeLegibility;
	background: var(--bg);
}

body {
	font-family: var(--font-sans);
	font-size: 13.5px;
	line-height: 1.5;
	color: var(--ink-1);
	background: var(--bg);
	min-height: 100dvh;
	font-feature-settings: "cv11", "ss01";
}

h1,
h2,
h3,
h4,
p,
ul,
ol,
figure {
	margin: 0;
	padding: 0;
}

ul,
ol {
	list-style: none;
}

button,
input,
select,
textarea {
	font: inherit;
	color: inherit;
}

button {
	cursor: pointer;
	background: none;
	border: 0;
	padding: 0;
}

button:disabled {
	cursor: default;
}

a {
	color: inherit;
	text-decoration: none;
}

svg {
	display: block;
	flex-shrink: 0;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

code,
pre,
kbd {
	font-family: var(--font-mono);
}

::selection {
	background: var(--accent-soft);
	color: var(--ink-1);
}

:focus-visible {
	outline: 2px solid var(--focus);
	outline-offset: 2px;
	border-radius: 4px;
}

[hidden] {
	display: none !important;
}

/* Thin, quiet scrollbars. */
* {
	scrollbar-width: thin;
	scrollbar-color: var(--line-3) transparent;
}

/* ==========================================================================
   Type utilities
   ========================================================================== */
.mono {
	font-family: var(--font-mono);
	font-size: 0.93em;
}

.num {
	font-family: var(--font-mono);
	font-variant-numeric: tabular-nums;
	font-size: 0.93em;
	letter-spacing: -0.01em;
}

.muted {
	color: var(--ink-2);
}

.dim {
	color: var(--ink-3);
}

.micro {
	font-size: 12px;
	font-weight: 500;
	color: var(--ink-3);
	line-height: 1.4;
}

.truncate {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	min-width: 0;
}

.tone-ok {
	color: var(--ok);
}

.tone-warn {
	color: var(--warn);
}

.tone-bad {
	color: var(--bad);
}

.tone-accent {
	color: var(--accent);
}

.gradient-text {
	background: var(--accent-gradient);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
}

/* ==========================================================================
   Motion
   ========================================================================== */
@keyframes rise {
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}

@keyframes fade {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes ping {
	0% {
		transform: scale(1);
		opacity: 0.7;
	}
	80%,
	100% {
		transform: scale(2.6);
		opacity: 0;
	}
}

@keyframes shimmer {
	from {
		background-position: 200% 0;
	}
	to {
		background-position: -200% 0;
	}
}

@keyframes indeterminate {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(250%);
	}
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}

@keyframes flash {
	0% {
		color: var(--accent-a);
	}
	100% {
		color: inherit;
	}
}

.rise {
	animation: rise var(--dur-3) var(--ease-out) backwards;
	animation-delay: calc(var(--i, 0) * var(--stagger));
}

.spin {
	animation: spin 0.9s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
	*,
	*::before,
	*::after {
		animation-duration: 1ms !important;
		animation-delay: 0ms !important;
		transition-duration: 1ms !important;
	}
}

/* ==========================================================================
   Shell: fixed glass topbar + naked sidebar framing one inset panel.
   The document scrolls; the panel is not a scroll container.
   ========================================================================== */
.shell-ambient {
	position: fixed;
	inset: 0;
	pointer-events: none;
	z-index: 0;
	background:
		radial-gradient(60rem 28rem at 12% -10%, color-mix(in srgb, var(--accent-a) 7%, transparent), transparent 70%),
		radial-gradient(50rem 26rem at 95% -12%, color-mix(in srgb, var(--accent-b) 6%, transparent), transparent 70%);
}

.topbar {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: var(--topbar-h);
	z-index: 40;
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 0 14px 0 18px;
	background: color-mix(in srgb, var(--bg) 72%, transparent);
	backdrop-filter: blur(14px) saturate(160%);
	-webkit-backdrop-filter: blur(14px) saturate(160%);
	border-bottom: 1px solid transparent;
	transition: border-color var(--dur-2) var(--ease);
}

.topbar[data-scrolled="true"] {
	border-bottom-color: var(--line-1);
}

.topbar-brand {
	display: flex;
	align-items: center;
	gap: 10px;
	min-width: calc(var(--sidebar-w) - 18px);
	font-weight: 600;
	letter-spacing: -0.01em;
}

.topbar-mark {
	flex: none;
	display: block;
}

.topbar-slash {
	color: var(--ink-4);
	font-weight: 300;
	font-size: 18px;
}

.topbar-title {
	font-weight: 500;
	color: var(--ink-1);
	white-space: nowrap;
}

.topbar-spacer {
	flex: 1;
}

.topbar-actions {
	display: flex;
	align-items: center;
	gap: 8px;
}

@media (min-width: 901px) {
	.btn.topbar-menu {
		display: none;
	}
}

/* Sync progress hairline along the bottom edge of the topbar. */
.topbar-progress {
	position: absolute;
	left: 0;
	right: 0;
	bottom: -1px;
	height: 2px;
	overflow: hidden;
	pointer-events: none;
}

.topbar-progress-fill {
	height: 100%;
	background: var(--accent-gradient);
	transition: width var(--dur-3) var(--ease);
	box-shadow: 0 0 12px var(--accent-b);
}

.topbar-progress-fill[data-indeterminate="true"] {
	width: 40% !important;
	animation: indeterminate 1.2s var(--ease) infinite;
}

.sidebar {
	position: fixed;
	top: var(--topbar-h);
	left: 0;
	bottom: 0;
	width: var(--sidebar-w);
	padding: 8px 10px 14px;
	overflow-y: auto;
	scrollbar-width: none;
	display: flex;
	flex-direction: column;
	gap: 18px;
	z-index: 30;
}

.sidebar::-webkit-scrollbar {
	display: none;
}

.nav-group {
	display: flex;
	flex-direction: column;
	gap: 1px;
}

.nav-heading {
	font-size: 12px;
	font-weight: 500;
	color: var(--ink-3);
	padding: 0 10px 6px;
}

.nav-row {
	display: flex;
	align-items: center;
	gap: 10px;
	height: 32px;
	padding: 0 10px;
	border-radius: var(--r-control);
	color: var(--ink-2);
	font-weight: 450;
	text-align: left;
	width: 100%;
	transition:
		background var(--dur-1) var(--ease),
		color var(--dur-1) var(--ease);
}

.nav-row:hover {
	background: var(--hover);
	color: var(--ink-1);
}

.nav-row:active {
	transform: scale(0.99);
}

.nav-row[data-active="true"] {
	background: var(--selected);
	color: var(--ink-1);
}

.nav-row svg {
	color: var(--ink-3);
	transition: color var(--dur-1) var(--ease);
}

.nav-row[data-active="true"] svg {
	color: var(--accent);
}

.nav-row-label {
	flex: 1;
}

.nav-row kbd {
	font-size: 10.5px;
	color: var(--ink-4);
	opacity: 0;
	transition: opacity var(--dur-1) var(--ease);
}

.nav-row:hover kbd {
	opacity: 1;
}

.sidebar-foot {
	margin-top: auto;
	padding: 10px;
	border-radius: var(--r-card);
	border: 1px solid var(--line-1);
	background: var(--card);
	display: flex;
	flex-direction: column;
	gap: 6px;
}

.shell-panel {
	position: relative;
	z-index: 1;
	margin: var(--topbar-h) 8px 8px var(--sidebar-w);
	min-height: calc(100dvh - var(--topbar-h) - 8px);
	background: var(--panel);
	border-radius: var(--r-panel);
	border: 1px solid var(--line-1);
	box-shadow: var(--shadow-1);
	overflow: clip;
}

.shell-content {
	padding: 26px var(--gutter) 48px;
	max-width: 1560px;
	margin: 0 auto;
}

.drawer-scrim {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 60;
	animation: fade var(--dur-2) var(--ease) both;
}

@media (max-width: 1360px) {
	:root {
		--sidebar-w: 204px;
		--gutter: 22px;
	}
}

@media (max-width: 900px) {
	:root {
		--gutter: 16px;
	}

	.topbar-brand {
		min-width: 0;
	}

	.topbar-menu {
		display: inline-flex;
	}

	.sidebar {
		top: 0;
		width: 260px;
		z-index: 70;
		padding-top: 16px;
		background: var(--overlay);
		backdrop-filter: blur(18px) saturate(160%);
		-webkit-backdrop-filter: blur(18px) saturate(160%);
		border-right: 1px solid var(--line-2);
		transform: translateX(-102%);
		transition: transform var(--dur-3) var(--ease-out);
	}

	.sidebar[data-open="true"] {
		transform: none;
		box-shadow: var(--shadow-3);
	}

	.shell-panel {
		margin-left: 8px;
	}

	.topbar-hide-narrow {
		display: none !important;
	}
}

/* ==========================================================================
   Page header
   ========================================================================== */
.page {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.page-header {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: 16px;
	flex-wrap: wrap;
	padding-bottom: 4px;
}

.page-title {
	font-size: 22px;
	font-weight: 600;
	letter-spacing: -0.02em;
	line-height: 1.2;
}

.page-description {
	margin-top: 4px;
	color: var(--ink-2);
	max-width: 72ch;
}

.page-actions {
	display: flex;
	align-items: center;
	gap: 8px;
	flex-wrap: wrap;
}

/* Grid helpers for page layouts. */
.grid {
	display: grid;
	gap: 16px;
}

.grid-2 {
	grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-3 {
	grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-main-side {
	grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
}

@media (max-width: 1100px) {
	.grid-2,
	.grid-3,
	.grid-main-side {
		grid-template-columns: minmax(0, 1fr);
	}
}

.row {
	display: flex;
	align-items: center;
	gap: 8px;
	min-width: 0;
}

.stack {
	display: flex;
	flex-direction: column;
	gap: 4px;
	min-width: 0;
}

/* ==========================================================================
   Card: top-lit gradient hairline over one surface step.
   ========================================================================== */
.card {
	position: relative;
	border-radius: var(--r-card);
	border: 1px solid transparent;
	background:
		linear-gradient(var(--card), var(--card)) padding-box,
		linear-gradient(180deg, var(--line-3), var(--line-1) 40%) border-box;
	box-shadow: var(--shadow-1);
	min-width: 0;
	display: flex;
	flex-direction: column;
}

.card-header {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 12px;
	padding: 14px 16px 0;
	flex-wrap: wrap;
}

.card-titles {
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 2px;
}

.card-title {
	font-size: 14px;
	font-weight: 550;
	letter-spacing: -0.005em;
	display: flex;
	align-items: center;
	gap: 8px;
}

.card-description {
	font-size: 12.5px;
	color: var(--ink-3);
}

.card-actions {
	display: flex;
	align-items: center;
	gap: 6px;
	flex-wrap: wrap;
}

.card-body {
	padding: 14px 16px 16px;
	min-width: 0;
	flex: 1;
}

.card-body[data-flush="true"] {
	padding: 10px 0 0;
}

.card-footer {
	border-top: 1px solid var(--line-1);
	padding: 10px 16px;
	font-size: 12.5px;
	color: var(--ink-3);
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
}

/* ==========================================================================
   Stat
   ========================================================================== */
.stat-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(var(--stat-min, 170px), 1fr));
	border-radius: var(--r-card);
	border: 1px solid transparent;
	background:
		linear-gradient(var(--card), var(--card)) padding-box,
		linear-gradient(180deg, var(--line-3), var(--line-1) 40%) border-box;
	box-shadow: var(--shadow-1);
	overflow: hidden;
}

.stat {
	position: relative;
	padding: 14px 16px 12px;
	display: flex;
	flex-direction: column;
	gap: 6px;
	min-width: 0;
	box-shadow:
		1px 0 0 var(--line-1),
		0 1px 0 var(--line-1);
}

.stat-label {
	font-size: 12.5px;
	font-weight: 500;
	color: var(--ink-2);
	display: flex;
	align-items: center;
	gap: 6px;
}

.stat-value {
	font-size: 24px;
	font-weight: 550;
	letter-spacing: -0.025em;
	font-variant-numeric: tabular-nums;
	line-height: 1.15;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.stat[data-size="sm"] .stat-value {
	font-size: 18px;
}

.stat-value[data-flash="true"] {
	animation: flash 900ms var(--ease) both;
}

.stat-foot {
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
	color: var(--ink-3);
	min-height: 18px;
}

.stat-spark {
	margin-top: 2px;
	height: 28px;
}

.delta {
	display: inline-flex;
	align-items: center;
	gap: 2px;
	font-family: var(--font-mono);
	font-size: 11.5px;
	font-weight: 500;
	padding: 1px 6px;
	border-radius: var(--r-pill);
	background: var(--raised);
	color: var(--ink-2);
}

.delta[data-tone="good"] {
	color: var(--ok);
	background: var(--ok-soft);
}

.delta[data-tone="bad"] {
	color: var(--bad);
	background: var(--bad-soft);
}

/* ==========================================================================
   Controls
   ========================================================================== */
.btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
	height: 30px;
	padding: 0 12px;
	border-radius: var(--r-control);
	font-size: 13px;
	font-weight: 500;
	white-space: nowrap;
	border: 1px solid var(--line-2);
	background: var(--raised);
	color: var(--ink-1);
	transition:
		background var(--dur-1) var(--ease),
		border-color var(--dur-1) var(--ease),
		transform var(--dur-1) var(--ease);
}

.btn:hover:not(:disabled) {
	border-color: var(--line-3);
	background: color-mix(in srgb, var(--raised) 80%, var(--ink-1) 6%);
}

.btn:active:not(:disabled) {
	transform: scale(0.97);
}

.btn:disabled {
	opacity: 0.5;
}

.btn[data-variant="primary"] {
	background: var(--ink-1);
	color: var(--ink-inverse);
	border-color: transparent;
}

.btn[data-variant="primary"]:hover:not(:disabled) {
	background: color-mix(in srgb, var(--ink-1) 88%, transparent);
}

.btn[data-variant="accent"] {
	background: var(--accent-gradient);
	background-origin: border-box;
	color: #fff;
	border-color: transparent;
}

.btn[data-variant="ghost"] {
	background: transparent;
	border-color: transparent;
	color: var(--ink-2);
}

.btn[data-variant="ghost"]:hover:not(:disabled) {
	background: var(--hover);
	color: var(--ink-1);
}

.btn[data-variant="danger"] {
	background: var(--bad-soft);
	color: var(--bad);
	border-color: color-mix(in srgb, var(--bad) 30%, transparent);
}

.btn[data-size="sm"] {
	height: 26px;
	padding: 0 9px;
	font-size: 12.5px;
}

.btn[data-icon="true"] {
	width: 30px;
	padding: 0;
}

.btn[data-icon="true"][data-size="sm"] {
	width: 26px;
}

.input {
	height: 30px;
	padding: 0 10px;
	border-radius: var(--r-control);
	border: 1px solid var(--line-2);
	background: var(--card);
	color: var(--ink-1);
	font-size: 13px;
	min-width: 0;
	transition: border-color var(--dur-1) var(--ease);
}

.input::placeholder {
	color: var(--ink-3);
}

.input:hover {
	border-color: var(--line-3);
}

.input:focus {
	outline: none;
	border-color: var(--focus);
	box-shadow: 0 0 0 3px color-mix(in srgb, var(--focus) 18%, transparent);
}

.search {
	position: relative;
	display: inline-flex;
	align-items: center;
}

.search svg {
	position: absolute;
	left: 9px;
	color: var(--ink-3);
	pointer-events: none;
}

.search .input {
	padding-left: 30px;
	width: 240px;
}

select.input {
	appearance: none;
	padding-right: 28px;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: right 9px center;
	cursor: pointer;
}

.check {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: 12.5px;
	color: var(--ink-2);
	cursor: pointer;
	user-select: none;
}

.check input {
	accent-color: var(--accent);
}

/* Segmented control with a measured sliding thumb. */
.segmented {
	position: relative;
	display: inline-flex;
	align-items: center;
	padding: 2px;
	gap: 0;
	border-radius: var(--r-control);
	background: var(--card);
	border: 1px solid var(--line-2);
	isolation: isolate;
}

.segmented-thumb {
	position: absolute;
	top: 2px;
	bottom: 2px;
	border-radius: 6px;
	background: var(--raised);
	border: 1px solid var(--line-3);
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
	transition:
		left var(--dur-2) var(--ease-out),
		width var(--dur-2) var(--ease-out);
	z-index: -1;
}

.segmented-option {
	height: 24px;
	padding: 0 10px;
	border-radius: 6px;
	font-size: 12.5px;
	font-weight: 500;
	color: var(--ink-3);
	white-space: nowrap;
	display: inline-flex;
	align-items: center;
	gap: 6px;
	transition: color var(--dur-1) var(--ease);
}

.segmented-option:hover {
	color: var(--ink-1);
}

.segmented-option[data-active="true"] {
	color: var(--ink-1);
}

.segmented[data-size="sm"] .segmented-option {
	height: 22px;
	padding: 0 8px;
	font-size: 12px;
}

/* Tabs: underline style for in-card view switches. */
.tabs {
	display: flex;
	align-items: center;
	gap: 16px;
	border-bottom: 1px solid var(--line-1);
	padding: 0 16px;
}

.tab {
	position: relative;
	height: 36px;
	font-size: 13px;
	font-weight: 500;
	color: var(--ink-3);
	display: inline-flex;
	align-items: center;
	gap: 6px;
}

.tab:hover {
	color: var(--ink-1);
}

.tab[data-active="true"] {
	color: var(--ink-1);
}

.tab[data-active="true"]::after {
	content: "";
	position: absolute;
	left: 0;
	right: 0;
	bottom: -1px;
	height: 2px;
	border-radius: 2px;
	background: var(--accent-gradient);
}

.kbd {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 18px;
	height: 18px;
	padding: 0 4px;
	border-radius: 5px;
	border: 1px solid var(--line-2);
	background: var(--card);
	font-family: var(--font-mono);
	font-size: 10.5px;
	color: var(--ink-3);
}

/* ==========================================================================
   Badge & dot
   ========================================================================== */
.badge {
	display: inline-flex;
	align-items: center;
	gap: 5px;
	height: 20px;
	padding: 0 8px;
	border-radius: var(--r-pill);
	font-size: 11.5px;
	font-weight: 500;
	white-space: nowrap;
	background: var(--raised);
	color: var(--ink-2);
	border: 1px solid var(--line-1);
}

.badge[data-tone="ok"] {
	background: var(--ok-soft);
	color: var(--ok);
	border-color: transparent;
}

.badge[data-tone="warn"] {
	background: var(--warn-soft);
	color: var(--warn);
	border-color: transparent;
}

.badge[data-tone="bad"] {
	background: var(--bad-soft);
	color: var(--bad);
	border-color: transparent;
}

.badge[data-tone="accent"] {
	background: var(--accent-soft);
	color: var(--accent);
	border-color: transparent;
}

.badge[data-mono="true"] {
	font-family: var(--font-mono);
	font-size: 11px;
}

.dot {
	position: relative;
	display: inline-block;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: var(--ink-3);
	flex-shrink: 0;
}

.dot[data-tone="ok"],
.dot[data-tone="live"] {
	background: var(--live);
}

.dot[data-tone="warn"] {
	background: var(--warn);
}

.dot[data-tone="bad"] {
	background: var(--bad);
}

.dot[data-tone="accent"] {
	background: var(--accent);
}

.dot[data-pulse="true"]::after {
	content: "";
	position: absolute;
	inset: 0;
	border-radius: 50%;
	background: inherit;
	animation: ping 1.6s var(--ease-out) infinite;
}

.swatch {
	display: inline-block;
	width: 8px;
	height: 8px;
	border-radius: 2px;
	flex-shrink: 0;
}

/* ==========================================================================
   Table
   ========================================================================== */
.table-wrap {
	overflow-x: auto;
	min-width: 0;
}

.table {
	width: 100%;
	font-size: 13px;
}

.table th {
	position: sticky;
	top: 0;
	z-index: 1;
	text-align: left;
	font-size: 12px;
	font-weight: 500;
	color: var(--ink-3);
	padding: 8px 12px;
	white-space: nowrap;
	background: var(--card);
	border-bottom: 1px solid var(--line-1);
	user-select: none;
}

.table th:first-child,
.table td:first-child {
	padding-left: 16px;
}

.table th:last-child,
.table td:last-child {
	padding-right: 16px;
}

.table th[data-sortable="true"] {
	cursor: pointer;
}

.table th[data-sortable="true"]:hover {
	color: var(--ink-1);
}

.table th[data-sorted] {
	color: var(--ink-1);
}

.table th .sort-arrow {
	display: inline-block;
	margin-left: 4px;
	opacity: 0.8;
	vertical-align: -1px;
}

.table td {
	padding: 9px 12px;
	border-bottom: 1px solid var(--line-1);
	vertical-align: middle;
	white-space: nowrap;
}

.table tbody tr:last-child td {
	border-bottom: 0;
}

.table tbody tr {
	transition: background var(--dur-1) var(--ease);
}

.table tbody tr:hover {
	background: var(--hover);
}

.table tbody tr[data-clickable="true"] {
	cursor: pointer;
}

.table tbody tr[data-selected="true"] {
	background: var(--selected);
}

.table [data-align="right"] {
	text-align: right;
}

.table [data-align="center"] {
	text-align: center;
}

.table td[data-wrap="true"] {
	white-space: normal;
}

.table[data-dense="true"] td {
	padding-top: 6px;
	padding-bottom: 6px;
}

.table-more {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	padding: 10px;
	border-top: 1px solid var(--line-1);
}

.cell-primary {
	font-weight: 500;
	color: var(--ink-1);
}

.cell-secondary {
	font-size: 12px;
	color: var(--ink-3);
}

/* Inline proportional bar used inside table cells. */
.meter {
	position: relative;
	height: 4px;
	border-radius: 2px;
	background: var(--line-1);
	overflow: hidden;
	min-width: 48px;
}

.meter-fill {
	position: absolute;
	inset: 0 auto 0 0;
	border-radius: 2px;
	background: var(--chart-primary);
	transition: width var(--dur-3) var(--ease-out);
}

.meter-cell {
	display: flex;
	align-items: center;
	gap: 10px;
	justify-content: flex-end;
}

.meter-cell .meter {
	width: 64px;
}

/* ==========================================================================
   States: empty, error, skeleton, stale overlay
   ========================================================================== */
.empty {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 6px;
	padding: 40px 16px;
	text-align: center;
	color: var(--ink-3);
	min-height: 140px;
}

.empty svg {
	color: var(--ink-4);
	margin-bottom: 4px;
}

.empty-title {
	color: var(--ink-2);
	font-weight: 500;
}

.empty-hint {
	font-size: 12.5px;
	max-width: 44ch;
}

.error-state {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 12px 14px;
	margin: 12px 16px;
	border-radius: var(--r-control);
	background: var(--bad-soft);
	color: var(--bad);
	font-size: 13px;
}

.error-state-message {
	flex: 1;
	min-width: 0;
	overflow-wrap: anywhere;
}

.skeleton {
	border-radius: 6px;
	background: linear-gradient(90deg, var(--line-1) 0%, var(--line-2) 50%, var(--line-1) 100%);
	background-size: 200% 100%;
	animation: shimmer 1.6s linear infinite;
}

/* Previous data kept on screen while a new key loads. */
[data-stale="true"] {
	opacity: 0.55;
	transition: opacity var(--dur-2) var(--ease);
}

[data-stale="false"] {
	transition: opacity var(--dur-2) var(--ease);
}

/* ==========================================================================
   Drawer (right-side sheet)
   ========================================================================== */
.drawer {
	position: fixed;
	top: 8px;
	right: 8px;
	bottom: 8px;
	width: min(var(--drawer-w, 560px), calc(100vw - 16px));
	z-index: 61;
	display: flex;
	flex-direction: column;
	border-radius: var(--r-panel);
	border: 1px solid var(--line-2);
	background: var(--overlay);
	backdrop-filter: blur(20px) saturate(170%);
	-webkit-backdrop-filter: blur(20px) saturate(170%);
	box-shadow: var(--shadow-3);
	animation: drawer-in var(--dur-3) var(--ease-out) both;
	overflow: hidden;
}

@keyframes drawer-in {
	from {
		transform: translateX(24px);
		opacity: 0;
	}
	to {
		transform: none;
		opacity: 1;
	}
}

.drawer-header {
	display: flex;
	align-items: flex-start;
	gap: 12px;
	padding: 16px 16px 12px 20px;
	border-bottom: 1px solid var(--line-1);
}

.drawer-titles {
	flex: 1;
	min-width: 0;
	overflow-wrap: anywhere;
}

.drawer-title {
	font-size: 15px;
	font-weight: 600;
	letter-spacing: -0.01em;
}

.drawer-subtitle {
	font-size: 12.5px;
	color: var(--ink-3);
	margin-top: 2px;
}

.drawer-body {
	flex: 1;
	overflow-y: auto;
	padding: 16px 20px 24px;
	display: flex;
	flex-direction: column;
	gap: 18px;
}

/* Key/value definition grid used in drawers and detail panels. */
.kv {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
	gap: 12px 16px;
}

.kv-item {
	display: flex;
	flex-direction: column;
	gap: 2px;
	min-width: 0;
}

.kv-key {
	font-size: 12px;
	color: var(--ink-3);
}

.kv-value {
	font-family: var(--font-mono);
	font-size: 12.5px;
	color: var(--ink-1);
	overflow-wrap: anywhere;
}

.section-label {
	font-size: 12px;
	font-weight: 500;
	color: var(--ink-3);
	margin-bottom: 8px;
}

.code-block {
	margin: 0;
	padding: 12px 14px;
	border-radius: var(--r-control);
	border: 1px solid var(--line-1);
	background: var(--card);
	font-family: var(--font-mono);
	font-size: 12px;
	line-height: 1.55;
	color: var(--ink-2);
	overflow: auto;
	max-height: 480px;
	white-space: pre-wrap;
	overflow-wrap: anywhere;
}

/* ==========================================================================
   Live status chip (topbar)
   ========================================================================== */
.live-chip {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	height: 30px;
	padding: 0 10px 0 11px;
	border-radius: var(--r-pill);
	border: 1px solid var(--line-2);
	background: var(--card);
	font-size: 12.5px;
	color: var(--ink-2);
	white-space: nowrap;
	transition: border-color var(--dur-1) var(--ease);
}

.live-chip:hover {
	border-color: var(--line-3);
	color: var(--ink-1);
}

.live-chip-count {
	font-family: var(--font-mono);
	font-size: 11.5px;
	color: var(--ink-3);
}

/* ==========================================================================
   Charts
   ========================================================================== */
.chart {
	position: relative;
	width: 100%;
	min-width: 0;
	user-select: none;
}

.chart svg {
	overflow: visible;
}

.chart-axis text {
	fill: var(--chart-axis);
	font-family: var(--font-mono);
	font-size: 10.5px;
}

.chart-grid line {
	stroke: var(--chart-grid);
	shape-rendering: crispEdges;
}

.chart-baseline {
	stroke: var(--line-3);
	shape-rendering: crispEdges;
}

.chart-cursor {
	fill: var(--chart-cursor);
}

.chart-bar {
	shape-rendering: crispEdges;
	transition: opacity var(--dur-1) var(--ease);
}

.chart[data-hovering="true"] .chart-bar[data-hover="false"] {
	opacity: 0.45;
}

.chart-line {
	fill: none;
	stroke-width: 1.5;
	stroke-linejoin: round;
	stroke-linecap: round;
	vector-effect: non-scaling-stroke;
}

.chart-empty {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--ink-3);
	font-size: 12.5px;
}

.chart-tooltip {
	position: absolute;
	top: 0;
	z-index: 20;
	pointer-events: none;
	min-width: 160px;
	max-width: 280px;
	padding: 8px 10px;
	border-radius: var(--r-control);
	border: 1px solid var(--line-2);
	background: var(--overlay);
	backdrop-filter: blur(14px) saturate(160%);
	-webkit-backdrop-filter: blur(14px) saturate(160%);
	box-shadow: var(--shadow-2);
	font-size: 12px;
	transition:
		left 60ms linear,
		top 60ms linear;
}

.chart-tooltip-title {
	font-family: var(--font-mono);
	font-size: 11px;
	color: var(--ink-3);
	margin-bottom: 6px;
}

.chart-tooltip-row {
	display: flex;
	align-items: center;
	gap: 8px;
	line-height: 1.7;
}

.chart-tooltip-label {
	flex: 1;
	min-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: var(--ink-2);
}

.chart-tooltip-value {
	font-family: var(--font-mono);
	font-variant-numeric: tabular-nums;
	color: var(--ink-1);
}

.chart-tooltip-total {
	border-top: 1px solid var(--line-1);
	margin-top: 4px;
	padding-top: 4px;
}

.legend {
	display: flex;
	flex-wrap: wrap;
	gap: 4px 14px;
	font-size: 12px;
	color: var(--ink-2);
}

.legend-item {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	max-width: 240px;
	transition: opacity var(--dur-1) var(--ease);
}

button.legend-item:hover {
	color: var(--ink-1);
}

.legend-item[data-off="true"] {
	opacity: 0.38;
}

.legend-value {
	font-family: var(--font-mono);
	font-size: 11.5px;
	color: var(--ink-3);
}

.sparkline path.area {
	opacity: 0.16;
}

/* Horizontal share bar. */
.share-bar {
	display: flex;
	width: 100%;
	height: 8px;
	border-radius: 3px;
	overflow: hidden;
	gap: 2px;
	background: var(--line-1);
}

.share-bar-seg {
	height: 100%;
	min-width: 2px;
	transition: flex-grow var(--dur-3) var(--ease-out);
}

/* Ranked horizontal bar list. */
.bar-list {
	display: flex;
	flex-direction: column;
	gap: 2px;
}

.bar-list-row {
	position: relative;
	display: flex;
	align-items: center;
	gap: 10px;
	height: 30px;
	padding: 0 8px;
	border-radius: 6px;
	text-align: left;
	width: 100%;
	isolation: isolate;
}

button.bar-list-row:hover {
	background: var(--hover);
}

.bar-list-fill {
	position: absolute;
	top: 3px;
	bottom: 3px;
	left: 0;
	border-radius: 5px;
	z-index: -1;
	opacity: 0.16;
	transition: width var(--dur-3) var(--ease-out);
}

.bar-list-label {
	flex: 1;
	min-width: 0;
	display: flex;
	align-items: center;
	gap: 8px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.bar-list-value {
	font-family: var(--font-mono);
	font-size: 12px;
	font-variant-numeric: tabular-nums;
	color: var(--ink-2);
}

/* Models page: expandable model rows. */

.models-chevron {
	display: inline-flex;
	color: var(--ink-3);
	transition: transform var(--dur-2) var(--ease);
}

.models-chevron[data-open="true"] {
	transform: rotate(90deg);
	color: var(--ink-1);
}

.models-detail {
	display: grid;
	grid-template-columns: minmax(260px, 340px) minmax(0, 1fr);
	gap: 24px;
	padding: 16px 16px 18px 44px;
	background: var(--panel);
	border-bottom: 1px solid var(--line-1);
	animation: rise var(--dur-3) var(--ease-out) both;
}

.models-detail-facts {
	display: flex;
	flex-direction: column;
	gap: 16px;
	min-width: 0;
}

.models-detail-chart {
	display: flex;
	flex-direction: column;
	gap: 10px;
	min-width: 0;
}

@media (max-width: 1100px) {
	.models-detail {
		grid-template-columns: minmax(0, 1fr);
		padding-left: 16px;
	}
}

.providers-select {
	max-width: 220px;
}

.providers-mix {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 12px 16px 14px;
	background: var(--bg);
	border-top: 1px solid var(--line-1);
}

/* Keeps account names aligned whether or not the row has a chart swatch. */
.providers-swatch-slot {
	display: inline-flex;
	width: 10px;
	flex: none;
}

.providers-account {
	max-width: 280px;
}

.providers-accounts {
	margin: 0 -16px -16px;
	border-top: 1px solid var(--line-1);
}

/* Costs page: component breakdown list. */

.costs-components {
	display: flex;
	flex-direction: column;
}

.costs-component-row {
	display: grid;
	grid-template-columns: minmax(0, 1fr) auto 56px;
	align-items: center;
	gap: 12px;
	padding: 7px 0;
	border-bottom: 1px solid var(--line-1);
}

.costs-component-share {
	text-align: right;
}

.costs-component-total {
	border-bottom: 0;
	font-weight: 500;
}

/* Errors page. */
.errors-signature {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	font-family: var(--font-mono);
	font-size: 12px;
	line-height: 1.5;
	color: var(--ink-1);
	overflow-wrap: anywhere;
}

.errors-message {
	display: block;
	max-width: 520px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-family: var(--font-mono);
	font-size: 12px;
	color: var(--bad);
}

.errors-filter {
	max-width: 260px;
}

.errors-filter .truncate {
	min-width: 0;
}

.errors-detail {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 4px 16px 14px;
	background: var(--hover);
	border-bottom: 1px solid var(--line-1);
}

.errors-detail-message {
	max-height: 200px;
	color: var(--ink-1);
}

.errors-detail-meta {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	flex-wrap: wrap;
	font-size: 12.5px;
}

.errors-detail-models {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
}

/* Long temp-dir names must not stretch the table. */
.projects-folder {
	gap: 8px;
	max-width: 280px;
	min-width: 0;
}

.modal-overlay {
	position: fixed;
	inset: 0;
	z-index: 80;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background: rgba(0, 0, 0, 0.55);
	animation: fade var(--dur-2) var(--ease) both;
}

.modal {
	width: min(480px, 100%);
	border-radius: var(--r-panel);
	border: 1px solid var(--line-2);
	background: var(--overlay);
	backdrop-filter: blur(20px) saturate(170%);
	-webkit-backdrop-filter: blur(20px) saturate(170%);
	box-shadow: var(--shadow-3);
	animation: rise var(--dur-3) var(--ease-out) both;
	overflow: hidden;
}

.modal-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	padding: 14px 14px 10px 18px;
}

.modal-title {
	font-size: 15px;
	font-weight: 600;
	letter-spacing: -0.01em;
}

.modal-body {
	padding: 4px 18px 16px;
	color: var(--ink-2);
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.modal-footer {
	display: flex;
	justify-content: flex-end;
	gap: 8px;
	padding: 12px 18px;
	border-top: 1px solid var(--line-1);
	background: color-mix(in srgb, var(--card) 60%, transparent);
}

/* Request detail drawer. */
.request-drawer-error {
	--rd-tone: var(--bad);
	--rd-tone-soft: var(--bad-soft);
	padding: 10px 12px 12px;
	border-radius: var(--r-control);
	border: 1px solid color-mix(in srgb, var(--rd-tone) 35%, transparent);
	background: var(--rd-tone-soft);
}

.request-drawer-error[data-tone="warn"] {
	--rd-tone: var(--warn);
	--rd-tone-soft: var(--warn-soft);
}

.request-drawer-error-label {
	font-size: 12px;
	font-weight: 550;
	color: var(--rd-tone);
	margin-bottom: 6px;
}

.request-drawer-error-text {
	margin: 0;
	font-family: var(--font-mono);
	font-size: 12px;
	line-height: 1.55;
	color: var(--ink-1);
	white-space: pre-wrap;
	overflow-wrap: anywhere;
	max-height: 240px;
	overflow: auto;
}

.request-drawer-file {
	display: flex;
	flex-direction: column;
	gap: 2px;
	margin-top: 12px;
}

/*
 * DSH 外壳样式：omp 的 styles.css 负责卡片、图表和页面内部，
 * 这里只补面板容器、顶部导航和抽屉层级。
 * 颜色全部来自 omp 的 --* 变量（由 shadow root 上的 data-theme 选择）。
 */

.omp-root {
	height: 100%;
	min-height: 0;
	background: var(--bg);
	color: var(--ink-1);
	color-scheme: light dark;
	font-family: inherit;
	font-size: 14px;
}

.omp-app,
.omp-dsh-shell {
	height: 100%;
	min-height: 0;
}

.omp-dsh-shell {
	display: flex;
	flex-direction: column;
	background: var(--bg);
}

.omp-dsh-header {
	display: flex;
	align-items: center;
	gap: 16px;
	flex: 0 0 auto;
	padding: 9px 16px;
	border-bottom: 1px solid var(--line-2);
	background: var(--panel);
	position: relative;
	z-index: 2;
}

.omp-dsh-brand {
	display: flex;
	align-items: center;
	gap: 7px;
	flex: 0 0 auto;
	font-weight: 600;
	letter-spacing: -0.01em;
}

.omp-dsh-brand-name {
	color: var(--ink-1);
}

.omp-dsh-brand-slash {
	color: var(--ink-4);
}

.omp-dsh-brand-page {
	color: var(--ink-2);
	font-weight: 500;
}

.omp-dsh-nav {
	display: flex;
	align-items: center;
	gap: 2px;
	min-width: 0;
	overflow-x: auto;
	scrollbar-width: none;
}

.omp-dsh-nav::-webkit-scrollbar {
	display: none;
}

.omp-dsh-nav-item {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	border: 0;
	background: transparent;
	color: var(--ink-2);
	font: inherit;
	font-size: 12.5px;
	line-height: 1;
	padding: 7px 10px;
	border-radius: 8px;
	cursor: pointer;
	white-space: nowrap;
	transition:
		background 120ms ease,
		color 120ms ease;
}

.omp-dsh-nav-item:hover {
	background: var(--hover);
	color: var(--ink-1);
}

.omp-dsh-nav-item[data-active="true"] {
	background: var(--accent-soft);
	color: var(--ink-1);
}

.omp-dsh-actions {
	display: flex;
	align-items: center;
	gap: 10px;
	margin-left: auto;
	flex: 0 0 auto;
}

.omp-dsh-body {
	flex: 1 1 auto;
	min-height: 0;
	overflow: auto;
	overscroll-behavior: contain;
}

.omp-dsh-body .page {
	max-width: 1440px;
	margin: 0 auto;
	padding: 20px 24px 48px;
}

.omp-live {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	border: 1px solid var(--line-2);
	background: var(--card);
	color: var(--ink-2);
	font: inherit;
	font-size: 11.5px;
	padding: 5px 9px;
	border-radius: 999px;
	cursor: pointer;
}

.omp-live:hover {
	color: var(--ink-1);
	border-color: var(--line-3);
}

.omp-live[data-error="true"] {
	color: var(--bad);
	border-color: var(--bad-soft);
}

.omp-live-dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: var(--ink-4);
}

.omp-live[data-connected="true"] .omp-live-dot {
	background: var(--live);
	box-shadow: 0 0 0 3px var(--ok-soft);
}

.omp-live[data-error="true"] .omp-live-dot {
	background: var(--bad);
}

/* Drawer/Modal 通过 portal 渲染到 .omp-portal，层级要压过宿主页面。 */
.omp-portal .drawer,
.omp-portal .modal-overlay {
	z-index: 1000;
}

@media (max-width: 980px) {
	.omp-dsh-header {
		flex-wrap: wrap;
		gap: 8px;
	}
	.omp-dsh-nav {
		order: 3;
		width: 100%;
	}
	.omp-dsh-body .page {
		padding: 16px 14px 40px;
	}
}
`;var Sn=require("react/jsx-runtime"),xD="omp-stats";function CF(){let a=document.documentElement.dataset.theme;if(a==="dark"||a==="light")return a;let o=document.body?.dataset?.theme;if(o==="dark"||o==="light")return o;return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function SF(){let a=Gn.useRef(null);return Gn.useEffect(()=>{let o=a.current;if(!o)return;let t=o.shadowRoot??o.attachShadow({mode:"open"});t.replaceChildren();let r=document.createElement("style");r.textContent=gD,t.append(r);let s=document.createElement("div");s.className="omp-root",t.append(s);let d=document.createElement("div");d.className="omp-portal",t.append(d),E2(d);let l=()=>{s.dataset.theme=CF()};l();let p=new MutationObserver(l);p.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme","class"]});let n=window.matchMedia("(prefers-color-scheme: dark)");n.addEventListener("change",l);let i=LD.createRoot(s);return i.render(Sn.jsx(hD,{})),()=>{i.unmount(),p.disconnect(),n.removeEventListener("change",l),E2(null),t.replaceChildren()}},[]),Sn.jsx("div",{ref:a,className:"omp-stats-host",style:{height:"100%",minHeight:0}})}function bF({size:a=20,active:o=!1}){return Sn.jsx("svg",{viewBox:"0 0 24 24",width:a,height:a,"aria-hidden":"true","data-active":o,style:{display:"block"},children:Sn.jsx("path",{d:"M4 19V9M10 19V4M16 19v-7M22 19H2",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})})}var kF=["slots"];function yF(a){a.slots.inject("sidebar.panellist",()=>a.slots.register({name:"sidebar.panellist",id:xD,order:20,label:"Stats"},bF)),a.slots.inject("main",()=>a.slots.register({name:"main",key:xD},SF))}

    return module.exports;
  },
});
