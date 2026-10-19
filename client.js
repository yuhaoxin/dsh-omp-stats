window.__ModuleLoader__.load({
  id: "dsh-omp-stats",
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;
var DD=Object.create;var{getPrototypeOf:BD,defineProperty:Qs,getOwnPropertyNames:pq,getOwnPropertyDescriptor:FD}=Object,Jl=Object.prototype.hasOwnProperty;function mq(a){return this[a]}var ND,OD,e=(a,o,t)=>{var r=a!=null&&typeof a==="object";if(r){var s=o?ND??=new WeakMap:OD??=new WeakMap,d=s.get(a);if(d)return d}t=a!=null?DD(BD(a)):{};let n=o||!a||!a.__esModule||!Jl.call(a,"default")?Qs(t,"default",{value:a,enumerable:!0}):t;if(a&&typeof a==="object"||typeof a==="function"){for(let p of pq(a))if(!Jl.call(n,p))Qs(n,p,{get:mq.bind(a,p),enumerable:!0})}if(r)s.set(a,n);return n},UD=(a)=>{var o=(cq??=new WeakMap).get(a),t;if(o)return o;if(o=Qs({},"__esModule",{value:!0}),a&&typeof a==="object"||typeof a==="function"){for(var r of pq(a))if(!Jl.call(o,r))Qs(o,r,{get:mq.bind(a,r),enumerable:!(t=FD(a,r))||t.enumerable})}return cq.set(a,o),o},cq;var HD=(a)=>a;function ED(a,o){this[a]=HD.bind(null,o)}var WD=(a,o)=>{for(var t in o)Qs(a,t,{get:o[t],enumerable:!0,configurable:!0,set:ED.bind(o,t)})};var EF={};WD(EF,{apply:()=>HF,inject:()=>UF});module.exports=UD(EF);var Xl=require("react"),RD=require("react-dom/client");var ka=require("react");var Kq=require("react");var vl="M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746L11.1749 14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z",wl="0 0 23.16 17.04";var zD=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function jl(a){return String(a).padStart(2,"0")}function $e(a,o){let t=a instanceof Date?a:new Date(a);if(Number.isNaN(t.getTime()))return"";return o.replace(/MMM|HH|mm|ss|d/gu,(r)=>{switch(r){case"MMM":return zD[t.getMonth()];case"HH":return jl(t.getHours());case"mm":return jl(t.getMinutes());case"ss":return jl(t.getSeconds());case"d":return String(t.getDate());default:return r}})}function hq(a,o={}){let t=a instanceof Date?a:new Date(a),r=Math.round((t.getTime()-Date.now())/1000),s=Math.abs(r),d=new Intl.RelativeTimeFormat("en",{numeric:"auto",style:"long"});if(s<60)return d.format(r,"second");if(s<3600)return d.format(Math.round(r/60),"minute");if(s<86400)return d.format(Math.round(r/3600),"hour");if(s<2592000)return d.format(Math.round(r/86400),"day");if(s<31536000)return d.format(Math.round(r/2592000),"month");return d.format(Math.round(r/31536000),"year")}var gq=60000,Pl=60*gq,Ve=24*Pl,Yl={"1h":{label:"1h",windowLabel:"the last hour",spanMs:Pl,bucketMs:5*gq},"24h":{label:"24h",windowLabel:"the last 24 hours",spanMs:Ve,bucketMs:Pl},"7d":{label:"7d",windowLabel:"the last 7 days",spanMs:7*Ve,bucketMs:Ve},"30d":{label:"30d",windowLabel:"the last 30 days",spanMs:30*Ve,bucketMs:Ve},"90d":{label:"90d",windowLabel:"the last 90 days",spanMs:90*Ve,bucketMs:Ve},all:{label:"All",windowLabel:"all time",spanMs:null,bucketMs:Ve}},$D=1500,xq=["1h","24h","7d","30d","90d","all"];function ie(a){return Yl[a]}function Rl(a,o){if(o<Ve)return $e(new Date(a),o<Pl?"HH:mm":"MMM d HH:mm");return $e(new Date(a),"MMM d")}function Ml(a,o){if(o<Ve)return $e(new Date(a),"HH:mm");return $e(new Date(a),"MMM d")}function Je(a,o,t=Yl[a].bucketMs,r=Date.now()){let s=Math.floor(r/t)*t,d=Yl[a].spanMs,n;if(d!==null)n=Math.floor((r-d)/t)*t;else{n=s;for(let l of o)if(l<n)n=l;n=Math.floor(n/t)*t}n=Math.max(n,s-($D-1)*t);let p=[];for(let l=n;l<=s;l+=t)p.push(l);return p}var Zs=require("react");var Iq="/api/omp-stats";class Cq extends Error{status;endpoint;constructor(a,o,t){super(t);this.name="ApiError",this.status=a,this.endpoint=o}}async function VD(a,o){try{let t=await a.json();if(typeof t==="object"&&t!==null&&"error"in t&&typeof t.error==="string")return t.error}catch{}return`HTTP error ${a.status} on ${o}`}var Lq=new WeakMap;async function Ge(a,o,t){let r=typeof t==="object"&&t!==null?Lq.get(t):void 0,s=o;if(r){let l=new Headers(o?.headers);l.set("If-None-Match",r),s={...o,headers:l}}let d=await fetch(a,s);if(d.status===304&&r)return t;if(!d.ok)throw new Cq(d.status,a,await VD(d,a));let n=await d.json(),p=d.headers.get("ETag");if(p&&typeof n==="object"&&n!==null)Lq.set(n,p);return n}async function Sq(a="24h",o){return Ge(`/api/omp-stats/stats/overview?range=${encodeURIComponent(a)}`,{signal:o})}async function kq(a="24h",o){return Ge(`/api/omp-stats/stats/model-dashboard?range=${encodeURIComponent(a)}`,{signal:o})}async function bq(a="24h",o){return Ge(`/api/omp-stats/stats/costs?range=${encodeURIComponent(a)}`,{signal:o})}async function Tl(a=50,o){return Ge(`/api/omp-stats/stats/recent?limit=${a}`,{signal:o})}async function yq(a="24h",o=50,t){return Ge(`/api/omp-stats/stats/errors?range=${encodeURIComponent(a)}&limit=${o}`,{signal:t})}async function vq(a,o){return Ge(`/api/omp-stats/request/${a}`,{signal:o})}async function wq(){return Ge("/api/omp-stats/sync",{method:"POST"})}async function Pq(a="24h",o){return Ge(`/api/omp-stats/stats/folders?range=${encodeURIComponent(a)}`,{signal:o})}async function Rq(a="24h",o){return Ge(`/api/omp-stats/stats/providers?range=${encodeURIComponent(a)}`,{signal:o})}async function en(a,o,t){let r=new URLSearchParams({range:a});if(o!==null)r.set("provider",o);return Ge(`/api/omp-stats/stats/provider-windows?${r}`,{signal:t})}var _D={phase:"idle",current:0,total:0,processed:0,lastSyncedAt:null,error:null};function XD(){wq().catch(()=>{})}var Mq=null,Tq=0,Al=0,ca={sync:_D,indexingHours:0,connected:!1,requestSync:XD},tn=new Set;function Aq(a){return tn.add(a),()=>tn.delete(a)}function qq(){for(let a of tn)a()}function KD(a,o){return a.phase===o.phase&&a.current===o.current&&a.total===o.total&&a.processed===o.processed&&a.lastSyncedAt===o.lastSyncedAt&&a.error===o.error}function QD(a){if(Mq!==a.version)Mq=a.version,Tq++;let o=Math.max(0,Tq-1),t=a.indexingHours!==ca.indexingHours||!KD(a.sync,ca.sync);if(!t&&o===Al)return;if(Al=o,t)ca={...ca,sync:a.sync,indexingHours:a.indexingHours};qq()}function an(a){if(a===ca.connected)return;ca={...ca,connected:a},qq()}var ZD=()=>ca,JD=()=>Al,jD=()=>-1;function Dq(){return Al}function Bq({children:a}){return Zs.useEffect(()=>{let o=new EventSource(`${Iq}/events`);return o.onopen=()=>an(!0),o.onerror=()=>an(!1),o.onmessage=(t)=>QD(JSON.parse(t.data)),()=>{o.close(),an(!1)}},[]),a}function Fq(){return Zs.useSyncExternalStore(Aq,ZD)}function Nq(a=!0){return Zs.useSyncExternalStore(Aq,a?JD:jD)}var Dl=require("react/jsx-runtime");function fe({tone:a="neutral",mono:o,children:t}){return Dl.jsx("span",{className:"badge","data-tone":a,"data-mono":o??!1,children:t})}function ql({tone:a="neutral",pulse:o}){return Dl.jsx("span",{className:"dot","data-tone":a,"data-pulse":o??!1})}function pa({color:a}){return Dl.jsx("span",{className:"swatch",style:{background:a}})}function ba(a){if(a>=0.05)return"bad";if(a>=0.01)return"warn";return"ok"}var Ie=require("react/jsx-runtime");function G({title:a,description:o,actions:t,flush:r,footer:s,className:d,index:n,stale:p,children:l}){let i=a!==void 0||o!==void 0||t!==void 0;return Ie.jsxs("section",{className:d?`card rise ${d}`:"card rise",style:n!==void 0?{"--i":n}:void 0,children:[i&&Ie.jsxs("header",{className:"card-header",children:[Ie.jsxs("div",{className:"card-titles",children:[a!==void 0&&Ie.jsx("h2",{className:"card-title",children:a}),o!==void 0&&Ie.jsx("p",{className:"card-description",children:o})]}),t!==void 0&&Ie.jsx("div",{className:"card-actions",children:t})]}),Ie.jsx("div",{className:"card-body","data-flush":r??!1,"data-stale":p??!1,children:l}),s!==void 0&&Ie.jsx("footer",{className:"card-footer",children:s})]})}function ye({title:a,description:o,actions:t}){return Ie.jsxs("header",{className:"page-header rise",children:[Ie.jsxs("div",{children:[Ie.jsx("h1",{className:"page-title",children:a}),o!==void 0&&Ie.jsx("p",{className:"page-description",children:o})]}),t!==void 0&&Ie.jsx("div",{className:"page-actions",children:t})]})}var Nl=require("react");var Bl=(...a)=>a.filter((o,t,r)=>Boolean(o)&&o.trim()!==""&&r.indexOf(o)===t).join(" ").trim();var Oq=(a)=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var Uq=(a)=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,t,r)=>r?r.toUpperCase():t.toLowerCase());var on=(a)=>{let o=Uq(a);return o.charAt(0).toUpperCase()+o.slice(1)};var Js=require("react");var Fl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Hq=(a)=>{for(let o in a)if(o.startsWith("aria-")||o==="role"||o==="title")return!0;return!1};var Fa=require("react"),YD=Fa.createContext({});var Eq=()=>Fa.useContext(YD);var Wq=Js.forwardRef(({color:a,size:o,strokeWidth:t,absoluteStrokeWidth:r,className:s="",children:d,iconNode:n,...p},l)=>{let{size:i=24,strokeWidth:u=2,absoluteStrokeWidth:m=!1,color:L="currentColor",className:k=""}=Eq()??{},f=r??m?Number(t??u)*24/Number(o??i):t??u;return Js.createElement("svg",{ref:l,...Fl,width:o??i??Fl.width,height:o??i??Fl.height,stroke:a??L,strokeWidth:f,className:Bl("lucide",k,s),...!d&&!Hq(p)&&{"aria-hidden":"true"},...p},[...n.map(([c,g])=>Js.createElement(c,g)),...Array.isArray(d)?d:[d]])});var N=(a,o)=>{let t=Nl.forwardRef(({className:r,...s},d)=>Nl.createElement(Wq,{ref:d,iconNode:o,className:Bl(`lucide-${Oq(on(a))}`,`lucide-${a}`,r),...s}));return t.displayName=on(a),t};var eB=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],ma=N("circle-alert",eB);var aB=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]],ha=N("plug-zap",aB);var tB=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ga=N("triangle-alert",tB);var oB=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],js=N("activity",oB);var rB=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Ys=N("arrow-down",rB);var sB=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],el=N("arrow-right",sB);var lB=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],al=N("arrow-up-right",lB);var nB=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],tl=N("arrow-up",nB);var dB=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ol=N("check",dB);var uB=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],rl=N("chevron-down",uB);var iB=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ya=N("chevron-right",iB);var fB=[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]],sl=N("coins",fB);var cB=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ll=N("copy",cB);var pB=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],nl=N("cpu",pB);var mB=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],dl=N("folder-git-2",mB);var hB=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],ul=N("inbox",hB);var gB=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],il=N("layout-grid",gB);var xB=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],fl=N("rotate-cw",xB);var LB=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],cl=N("search",LB);var IB=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xa=N("x",IB);var pl=require("react"),Vq=require("react-dom");var $q=null;function $A(a){$q=a}function VA(){return $q??document.body}var de=require("react/jsx-runtime");function Gq({open:a,onClose:o,title:t,subtitle:r,actions:s,width:d,children:n}){let p=pl.useRef(o);p.current=o;let l=pl.useRef(null);if(pl.useEffect(()=>{if(!a)return;let i=document.activeElement instanceof HTMLElement?document.activeElement:null;l.current?.focus();let u=(m)=>{if(m.key==="Escape")m.preventDefault(),p.current()};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u),i?.focus()}},[a]),!a)return null;return Vq.createPortal(de.jsxs(de.Fragment,{children:[de.jsx("div",{className:"drawer-scrim",onClick:o,role:"presentation"}),de.jsxs("div",{ref:l,className:"drawer",role:"dialog","aria-modal":"true",tabIndex:-1,style:d!==void 0?{"--drawer-w":`${d}px`}:void 0,children:[de.jsxs("header",{className:"drawer-header",children:[de.jsxs("div",{className:"drawer-titles",children:[de.jsx("h2",{className:"drawer-title",children:t}),r!==void 0&&de.jsx("div",{className:"drawer-subtitle",children:r})]}),s,de.jsx("button",{type:"button",className:"btn","data-variant":"ghost","data-icon":"true",onClick:o,"aria-label":"Close",children:de.jsx(xa,{size:16})})]}),de.jsx("div",{className:"drawer-body",children:n})]})]}),VA())}function na({items:a}){return de.jsx("dl",{className:"kv",style:{margin:0},children:a.map((o)=>de.jsxs("div",{className:"kv-item",children:[de.jsx("dt",{className:"kv-key",children:o.label}),de.jsx("dd",{className:"kv-value",style:{margin:0},children:o.value})]},o.key))})}var va=require("react"),qe=require("react/jsx-runtime");function Ol({data:a,title:o="JSON",initialCollapsed:t=!1}){let[r,s]=va.useState(t),[d,n]=va.useState(!1),p=va.useRef(0),l=JSON.stringify(a,null,2);return va.useEffect(()=>()=>window.clearTimeout(p.current),[]),qe.jsxs("div",{className:"stack",style:{gap:6},children:[qe.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[qe.jsxs("button",{type:"button",className:"btn","data-variant":"ghost","data-size":"sm",onClick:()=>s((u)=>!u),"aria-expanded":!r,children:[r?qe.jsx(ya,{size:13}):qe.jsx(rl,{size:13}),o]}),qe.jsxs("button",{type:"button",className:"btn","data-variant":"ghost","data-size":"sm",onClick:async()=>{try{await navigator.clipboard.writeText(l),n(!0),window.clearTimeout(p.current),p.current=window.setTimeout(()=>n(!1),1500)}catch{}},children:[d?qe.jsx(ol,{size:13}):qe.jsx(ll,{size:13}),d?"Copied":"Copy"]})]}),!r&&qe.jsx("pre",{className:"code-block",children:qe.jsx("code",{children:l})})]})}var _q=require("react"),kB=require("react-dom");var ml=require("react/jsx-runtime");function zs({value:a,onChange:o,placeholder:t="Filter…",width:r}){return ml.jsxs("label",{className:"search",children:[ml.jsx(cl,{size:14}),ml.jsx("input",{className:"input",type:"search",value:a,placeholder:t,onChange:(s)=>o(s.target.value),style:r!==void 0?{width:r}:void 0})]})}var $s=require("react"),hl=require("react/jsx-runtime");function De({options:a,value:o,onChange:t,size:r="md","aria-label":s}){let d=$s.useRef(null),[n,p]=$s.useState(null);return $s.useLayoutEffect(()=>{let l=d.current,i=l?.querySelector('[data-active="true"]');if(!l||!i){p(null);return}let u=()=>p({left:i.offsetLeft,width:i.offsetWidth});u();let m=new ResizeObserver(u);return m.observe(l),()=>m.disconnect()},[o,a]),hl.jsxs("div",{ref:d,className:"segmented","data-size":r,role:"radiogroup","aria-label":s,children:[n&&hl.jsx("span",{className:"segmented-thumb",style:{left:n.left,width:n.width}}),a.map((l)=>hl.jsx("button",{type:"button",role:"radio","aria-checked":l.value===o,className:"segmented-option","data-active":l.value===o,title:l.title,onClick:()=>t(l.value),children:l.label},l.value))]})}var _s=require("react");var Vs=require("react");function Ul(){let a=Vs.useRef(null),[o,t]=Vs.useState(0);return Vs.useLayoutEffect(()=>{let r=a.current;if(!r)return;t(r.clientWidth);let s=new ResizeObserver((d)=>{let n=Math.round(d[0]?.contentRect.width??0);t((p)=>p===n?p:n)});return s.observe(r),()=>s.disconnect()},[]),[a,o]}var Gs=require("react/jsx-runtime");function Hl({values:a,color:o="var(--chart-primary)",height:t=28,width:r,area:s=!0}){let[d,n]=Ul(),p=r??n,l=Math.max(0,...a),i=a.length,u="";if(p>0&&i>0){let m=i>1?p/(i-1):0;for(let L=0;L<i;L++){let k=i>1?L*m:p/2,f=l>0?t-2-a[L]/l*(t-4):t-2;u+=`${L===0?"M":"L"}${k.toFixed(1)},${f.toFixed(1)}`}}return Gs.jsx("div",{ref:d,className:"sparkline",style:{width:r??"100%",height:t},children:p>0&&i>0&&Gs.jsxs("svg",{width:p,height:t,"aria-hidden":"true",children:[s&&Gs.jsx("path",{className:"area",d:`${u}L${p},${t}L0,${t}Z`,fill:o}),Gs.jsx("path",{className:"chart-line",d:u,stroke:o})]})})}var Me=require("react/jsx-runtime");function q({label:a,value:o,hint:t,delta:r,spark:s,sparkColor:d,size:n="md",title:p}){let l=yB(typeof o==="string"||typeof o==="number"?o:null);return Me.jsxs("div",{className:"stat","data-size":n,title:p,children:[Me.jsx("div",{className:"stat-label",children:a}),Me.jsx("div",{className:"stat-value","data-flash":l,children:o}),(t!==void 0||r)&&Me.jsxs("div",{className:"stat-foot",children:[r&&Me.jsx(bB,{...r}),t!==void 0&&Me.jsx("span",{className:"truncate",children:t})]}),s&&s.length>1&&Me.jsx("div",{className:"stat-spark",children:Me.jsx(Hl,{values:s,color:d})})]})}function Ce({min:a,children:o}){return Me.jsx("div",{className:"stat-grid rise",style:a!==void 0?{"--stat-min":`${a}px`}:void 0,children:o})}function bB({change:a,good:o="up"}){if(a===null||!Number.isFinite(a))return Me.jsx("span",{className:"delta",children:"new"});let t=Math.abs(a)<0.0005?0:a,r=t===0?void 0:t>0===(o==="up")?"good":"bad",s=t>0?"+":t<0?"−":"±",d=Math.abs(t)*100;return Me.jsxs("span",{className:"delta","data-tone":r,children:[s,d>=100?d.toFixed(0):d.toFixed(1),"%"]})}function yB(a){let o=_s.useRef(a),[t,r]=_s.useState(!1);return _s.useEffect(()=>{if(o.current===a)return;let s=o.current!==null;if(o.current=a,!s)return;r(!0);let d=setTimeout(()=>r(!1),900);return()=>clearTimeout(d)},[a]),t}var Z=require("react/jsx-runtime");function J({title:a="Nothing here yet",hint:o}){return Z.jsxs("div",{className:"empty",children:[Z.jsx(ul,{size:20}),Z.jsx("div",{className:"empty-title",children:a}),o!==void 0&&Z.jsx("div",{className:"empty-hint",children:o})]})}function El({error:a,onRetry:o}){return Z.jsxs("div",{className:"error-state",role:"alert",children:[Z.jsx(ga,{size:15}),Z.jsx("span",{className:"error-state-message",children:typeof a==="string"?a:a.message}),o&&Z.jsxs("button",{type:"button",className:"btn","data-size":"sm","data-variant":"ghost",onClick:o,children:[Z.jsx(fl,{size:13})," Retry"]})]})}function he({width:a="100%",height:o=14,style:t}){return Z.jsx("div",{className:"skeleton",style:{width:a,height:o,...t}})}function oe({height:a=220}){return Z.jsx(he,{height:a,style:{borderRadius:8}})}function ge({rows:a=6}){return Z.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,padding:"8px 16px 16px"},children:Array.from({length:a},(o,t)=>Z.jsx(he,{height:16,width:`${92-t*13%30}%`},t))})}function E({query:a,skeleton:o,isEmpty:t,empty:r,children:s}){if(a.data===null){if(a.error)return Z.jsx(El,{error:a.error,onRetry:a.refetch});return Z.jsx(Z.Fragment,{children:o})}return Z.jsxs(Z.Fragment,{children:[a.error&&Z.jsx(El,{error:a.error,onRetry:a.refetch}),t?.(a.data)?r??Z.jsx(J,{}):s(a.data)]})}var wa=require("react");var GA="en-US";function I(a){return a.toLocaleString(GA)}function U(a){return a.toLocaleString(GA,{notation:"compact"})}function ce(a,o){if(a===0)return"$0";let t=o!==void 0?o:a>0&&a<0.01?4:2;return`$${a.toLocaleString(GA,{minimumFractionDigits:t,maximumFractionDigits:t})}`}function ee(a,o,t){return a===0&&o>0?"N/A":ce(a,t)}function _A(a){return a.usage.totalTokens>0&&a.usage.cost.total===0&&(a.provider==="xai-oauth"||a.costUnpriced===!0)}function La(a,o){return ee(a.usage.cost.total,_A(a)?1:0,o)}function W(a,o=1){return`${(a*100).toFixed(o)}%`}function Be(a){let o=a*100;if(o>0&&o<0.005)return"<0.01%";return W(a,o>0&&o<0.1?2:1)}function se(a,o){if(a===null)return"-";let t=a/1000,r=o!==void 0?o:t<1?2:1;return`${t.toFixed(r)}s`}function _e(a){if(a===null)return"-";return a.toFixed(1)}function ue(a){return hq(new Date(a),{addSuffix:!0})}function Fe(a){return $e(new Date(a),"MMM d, HH:mm:ss")}function Xe(a){return a.replace(/^\/+|\/+$/g,"")||"(root)"}var z=require("react/jsx-runtime");function pe({columns:a,rows:o,rowKey:t,onRowClick:r,selectedKey:s,initialSort:d,limit:n,dense:p,empty:l,expanded:i}){let[u,m]=wa.useState(d??null),[L,k]=wa.useState(n??Number.POSITIVE_INFINITY),f=wa.useMemo(()=>{let x=u?a.find((S)=>S.key===u.key):void 0;if(!u||!x?.sort)return o;let b=x.sort,R=u.dir==="asc"?1:-1;return[...o].sort((S,V)=>{let _=b(S),D=b(V);if(typeof _==="number"&&typeof D==="number")return(_-D)*R;return String(_).localeCompare(String(D))*R})},[o,a,u]);if(o.length===0)return z.jsx(z.Fragment,{children:l??z.jsx(J,{})});let c=f.length>L?f.slice(0,L):f,g=(x)=>{if(!x.sort)return;m((b)=>b?.key===x.key?{key:x.key,dir:b.dir==="asc"?"desc":"asc"}:{key:x.key,dir:x.align==="right"?"desc":"asc"})};return z.jsxs(z.Fragment,{children:[z.jsx("div",{className:"table-wrap",children:z.jsxs("table",{className:"table","data-dense":p??!1,children:[z.jsx("thead",{children:z.jsx("tr",{children:a.map((x)=>{let b=u?.key===x.key?u.dir:void 0;return z.jsxs("th",{"data-align":x.align??"left","data-sortable":x.sort!==void 0,"data-sorted":b,style:x.width!==void 0?{width:x.width}:void 0,title:x.title,onClick:()=>g(x),"aria-sort":b==="asc"?"ascending":b==="desc"?"descending":void 0,children:[x.header,b&&z.jsx("span",{className:"sort-arrow",children:b==="asc"?z.jsx(tl,{size:11}):z.jsx(Ys,{size:11})})]},x.key)})})}),z.jsx("tbody",{children:c.map((x)=>{let b=t(x),R=i?.(x)??null;return z.jsxs(wa.Fragment,{children:[z.jsx("tr",{"data-clickable":r!==void 0,"data-selected":s===b,onClick:r?()=>r(x):void 0,onKeyDown:r?(S)=>{if(S.key==="Enter"||S.key===" ")S.preventDefault(),r(x)}:void 0,tabIndex:r?0:void 0,children:a.map((S)=>z.jsx("td",{"data-align":S.align??"left","data-wrap":S.wrap??!1,children:S.render(x)},S.key))}),R!==null&&z.jsx("tr",{children:z.jsx("td",{colSpan:a.length,"data-wrap":"true",style:{padding:0},children:R})})]},b)})})]})}),n!==void 0&&f.length>n&&z.jsxs("div",{className:"table-more",children:[z.jsxs("span",{className:"micro",children:[I(c.length)," of ",I(f.length)]}),f.length>L&&z.jsx("button",{type:"button",className:"btn","data-size":"sm","data-variant":"ghost",onClick:()=>k((x)=>x+n*4),children:"Show more"}),L>n&&z.jsx("button",{type:"button",className:"btn","data-size":"sm","data-variant":"ghost",onClick:()=>k(n),children:"Show fewer"})]})]})}function ve({value:a,max:o,display:t,color:r}){let s=o>0?Math.min(100,a/o*100):0;return z.jsxs("div",{className:"meter-cell",children:[z.jsx("span",{className:"num",children:t}),z.jsx("div",{className:"meter",children:z.jsx("div",{className:"meter-fill",style:{width:`${s}%`,background:r}})})]})}function we({primary:a,secondary:o,lead:t}){return z.jsxs("div",{className:"row",style:{gap:10},children:[t,z.jsxs("div",{className:"stack",style:{gap:0},children:[z.jsx("span",{className:"cell-primary truncate",children:a}),o!==void 0&&z.jsx("span",{className:"cell-secondary truncate",children:o})]})]})}var vB=[{heading:"Usage",items:[{id:"overview",label:"Overview",icon:il},{id:"models",label:"Models",icon:nl},{id:"providers",label:"Providers",icon:ha},{id:"costs",label:"Costs",icon:sl}]},{heading:"Activity",items:[{id:"requests",label:"Requests",icon:js},{id:"errors",label:"Errors",icon:ma}]},{heading:"Insights",items:[{id:"projects",label:"Projects",icon:dl}]}],Xq=vB.flatMap((a)=>a.items);var re=require("react/jsx-runtime"),wB=xq.map((a,o)=>({value:a,label:ie(a).label,title:`${ie(a).windowLabel} (${o+1})`}));function Qq({section:a,onSectionChange:o,range:t,onRangeChange:r,children:s}){return re.jsxs("div",{className:"omp-dsh-shell",children:[re.jsxs("header",{className:"omp-dsh-header",children:[re.jsxs("div",{className:"omp-dsh-brand",children:[re.jsx("svg",{viewBox:wl,width:"22",height:"16.2","aria-hidden":"true",style:{display:"block",flex:"0 0 auto"},children:re.jsx("path",{d:vl,fill:"currentColor"})}),re.jsx("span",{className:"omp-dsh-brand-name",children:"dsh"}),re.jsx("span",{className:"omp-dsh-brand-slash",children:"/"}),re.jsx("span",{className:"omp-dsh-brand-page",children:"deepseek harness"})]}),re.jsx("nav",{className:"omp-dsh-nav","aria-label":"Stats pages",children:Xq.map((d)=>re.jsxs("button",{type:"button",className:"omp-dsh-nav-item","data-active":d.id===a,"aria-current":d.id===a?"page":void 0,onClick:()=>o(d.id),children:[re.jsx(d.icon,{size:14}),re.jsx("span",{children:d.label})]},d.id))}),re.jsxs("div",{className:"omp-dsh-actions",children:[re.jsx(De,{options:wB,value:t,onChange:r,"aria-label":"Time range"}),re.jsx(PB,{})]})]}),re.jsx("main",{className:"omp-dsh-body",children:s})]})}function PB(){let{sync:a,connected:o,requestSync:t}=Fq(),[r,s]=Kq.useState(!1),d=a.phase==="syncing"?`Indexing ${a.current}/${a.total}`:a.phase==="error"?"Error":o?"Live":"Offline";return re.jsxs("button",{type:"button",className:"omp-live","data-connected":o,"data-error":a.phase==="error",title:a.error??"Refresh session data",disabled:r||a.phase==="syncing",onClick:()=>{s(!0),t(),setTimeout(()=>s(!1),800)},children:[re.jsx("span",{className:"omp-live-dot"}),d]})}var Ll=require("react");var Ue=require("react/jsx-runtime");function gl({items:a,max:o,onSelect:t}){let r=o??Math.max(0,...a.map((s)=>s.value));return Ue.jsx("div",{className:"bar-list",children:a.map((s)=>{let d=r>0?Math.max(0.5,s.value/r*100):0,n=Ue.jsxs(Ue.Fragment,{children:[Ue.jsx("span",{className:"bar-list-fill",style:{width:`${d}%`,background:s.color??"var(--chart-primary)"}}),Ue.jsx("span",{className:"bar-list-label",children:s.label}),Ue.jsx("span",{className:"bar-list-value",children:s.display??I(s.value)})]});return t?Ue.jsx("button",{type:"button",className:"bar-list-row",onClick:()=>t(s.key),children:n},s.key):Ue.jsx("div",{className:"bar-list-row",children:n},s.key)})})}var da=require("react");var O=require("react/jsx-runtime"),Pa=10,RB=24,MB=68,TB=4;function Ra({slots:a,tickLabel:o,tooltipTitle:t,series:r,kind:s="bars",stacked:d=!0,height:n=220,format:p=U,formatRight:l,formatTooltip:i,yMax:u,yMaxRight:m,hidden:L,showTotal:k,references:f,onSelect:c,emptyLabel:g="No data in this range",tooltipExtra:x}){let[b,R]=Ul(),[S,V]=da.useState(null),_=da.useId().replace(/:/g,""),D=da.useMemo(()=>r.filter((C)=>!L?.has(C.key)),[r,L]),T=da.useMemo(()=>{let C=D.filter((Q)=>Q.axis!=="right"),H=D.filter((Q)=>Q.axis==="right"),me=(Q)=>d&&(Q.kind??s)!=="line",Pe=new Map,Y=Array.from({length:a},()=>0),be=0;for(let Q of C)if(me(Q)){let Re=Y.slice();Pe.set(Q.key,Re);for(let yl=0;yl<a;yl++)Y[yl]+=Q.values[yl]??0}else for(let Re=0;Re<a;Re++)be=Math.max(be,Q.values[Re]??0);for(let Q of Y)be=Math.max(be,Q);let Oe=0;for(let Q of H)for(let Re=0;Re<a;Re++)Oe=Math.max(Oe,Q.values[Re]??0);for(let Q of f??[])if(Q.axis==="right")Oe=Math.max(Oe,Q.value);else be=Math.max(be,Q.value);let Le=Zq(u??be),Ba=H.length>0?Zq(m??Oe):null,bl=D.every((Q)=>Q.values.every((Re)=>!Re));return{left:C,right:H,bases:Pe,stackable:me,leftScale:Le,rightScale:Ba,empty:bl}},[D,a,d,s,u,m,f]),v=T.leftScale.ticks.map((C)=>p(C)),j=T.rightScale?.ticks.map((C)=>(l??p)(C))??[],X=Math.max(28,Jq(v)+12),Da=T.rightScale?Math.max(28,Jq(j)+12):8,ze=Math.max(0,R-X-Da),K=n-Pa-RB,ne=a>0?ze/a:0,Te=(C)=>Pa+K-C/T.leftScale.max*K,Ks=(C)=>Pa+K-C/(T.rightScale?.max??1)*K,Ze=(C)=>X+(C+0.5)*ne,fq=D.filter((C)=>(C.kind??s)==="bars"),Kl=fq.filter((C)=>!T.stackable(C)||C.axis==="right"),Ql=Math.max(1,Math.min(56,ne*(ne>6?0.72:0.9))),MD=Math.max(1,Math.ceil(a/Math.max(1,Math.floor(ze/MB)))),TD=(C)=>{let H=C.currentTarget.getBoundingClientRect(),me=Math.floor((C.clientX-H.left)/(H.width/a));V(me>=0&&me<a?me:null)},Zl=S===null?[]:D.filter((C)=>C.tooltip!==!1).map((C)=>({s:C,v:C.values[S]})).filter((C)=>C.v!==null&&C.v!==void 0&&(C.v!==0||D.length===1)).sort((C,H)=>D.length>1?H.v-C.v:0),AD=Zl.filter((C)=>C.s.axis!=="right").reduce((C,H)=>C+H.v,0),qD=k??(d&&T.left.length>1);return O.jsxs("div",{className:"chart",ref:b,"data-hovering":S!==null,style:{height:n},children:[R>0&&O.jsxs("svg",{width:R,height:n,role:"img",children:[O.jsx("defs",{children:D.filter((C)=>C.pattern==="hatch").map((C)=>O.jsxs("pattern",{id:`${_}-${XA(C.key)}`,width:"5",height:"5",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[O.jsx("rect",{width:"5",height:"5",fill:C.color,fillOpacity:"0.14"}),O.jsx("rect",{width:"1.6",height:"5",fill:C.color})]},C.key))}),O.jsx("g",{className:"chart-grid",children:T.leftScale.ticks.map((C)=>O.jsx("line",{x1:X,x2:X+ze,y1:Te(C),y2:Te(C)},C))}),O.jsxs("g",{className:"chart-axis",children:[T.leftScale.ticks.map((C,H)=>O.jsx("text",{x:X-8,y:Te(C),dy:"0.32em",textAnchor:"end",children:v[H]},C)),T.rightScale?.ticks.map((C,H)=>O.jsx("text",{x:X+ze+8,y:Ks(C),dy:"0.32em",textAnchor:"start",children:j[H]},C)),Array.from({length:a},(C,H)=>H%MD===0?O.jsx("text",{x:Ze(H),y:n-6,textAnchor:"middle",children:o(H)},H):null)]}),S!==null&&O.jsx("rect",{className:"chart-cursor",x:X+S*ne,y:Pa,width:ne,height:K}),D.filter((C)=>(C.kind??s)==="area").map((C)=>{let H=C.axis==="right"?Ks:Te,me=T.bases.get(C.key),Pe=(Le)=>(me?.[Le]??0)+(C.values[Le]??0),Y=jq(a,Ze,(Le)=>H(Pe(Le))),be=Array.from({length:a},(Le,Ba)=>a-1-Ba).map((Le)=>`L${Ze(Le).toFixed(1)},${H(me?.[Le]??0).toFixed(1)}`).join(""),Oe=C.pattern==="hatch"?`url(#${_}-${XA(C.key)})`:C.color;return O.jsxs("g",{children:[O.jsx("path",{d:`${Y}${be}Z`,fill:Oe,fillOpacity:C.pattern?1:0.2}),O.jsx("path",{className:"chart-line",d:Y,stroke:C.color})]},C.key)}),fq.map((C)=>{let H=C.axis==="right"?Ks:Te,me=T.bases.get(C.key),Pe=Kl.indexOf(C),Y=Pe>=0?Ql/Kl.length:Ql,be=C.pattern==="hatch"?`url(#${_}-${XA(C.key)})`:C.color;return O.jsx("g",{children:C.values.map((Oe,Le)=>{if(!Oe)return null;let Ba=Pe>=0?0:me?.[Le]??0,bl=H(Ba),Q=H(Ba+Oe),Re=Ze(Le)-Ql/2+(Pe>=0?Pe*Y:0);return O.jsx("rect",{className:"chart-bar","data-hover":S===Le,x:Re,y:Math.min(bl,Q),width:Math.max(1,Y-(Pe>=0&&Kl.length>1?1:0)),height:Math.max(Oe>0?1:0,Math.abs(bl-Q)),fill:be},Le)})},C.key)}),D.filter((C)=>(C.kind??s)==="line").map((C)=>{let H=C.axis==="right"?Ks:Te,me=(Pe)=>{let Y=C.values[Pe];return Y===null||Y===void 0?null:H(Y)};return O.jsxs("g",{children:[O.jsx("path",{className:"chart-line",d:jq(a,Ze,me),stroke:C.color,strokeDasharray:C.dashed?"4 3":void 0}),C.values.map((Pe,Y)=>{let be=me(Y);if(be===null||Y>0&&me(Y-1)!==null||Y<a-1&&me(Y+1)!==null)return null;return O.jsx("circle",{cx:Ze(Y),cy:be,r:2.5,fill:C.color},Y)})]},C.key)}),f?.map((C)=>{let H=C.axis==="right"?Ks(C.value):Te(C.value);return O.jsxs("g",{className:"chart-axis",children:[O.jsx("line",{x1:X,x2:X+ze,y1:H,y2:H,stroke:"var(--line-4)",strokeDasharray:"3 3"}),C.label&&O.jsx("text",{x:X+ze-4,y:H-5,textAnchor:"end",children:C.label})]},`${C.axis??"left"}:${C.value}`)}),O.jsx("line",{className:"chart-baseline",x1:X,x2:X+ze,y1:Te(0),y2:Te(0)}),O.jsx("rect",{x:X,y:Pa,width:ze,height:K,fill:"transparent",onPointerMove:TD,onPointerLeave:()=>V(null),onClick:c&&S!==null?()=>c(S):void 0,style:{cursor:c?"pointer":"crosshair"}})]}),T.empty&&O.jsx("div",{className:"chart-empty",children:g}),S!==null&&!T.empty&&O.jsxs("div",{className:"chart-tooltip",style:Ze(S)>R/2?{right:R-Ze(S)+Math.min(ne/2,24)+8,top:Pa}:{left:Ze(S)+Math.min(ne/2,24)+8,top:Pa},children:[O.jsx("div",{className:"chart-tooltip-title",children:(t??o)(S)}),Zl.map(({s:C,v:H})=>O.jsxs("div",{className:"chart-tooltip-row",children:[O.jsx("span",{className:"swatch",style:{background:C.color}}),O.jsx("span",{className:"chart-tooltip-label",children:C.label}),O.jsx("span",{className:"chart-tooltip-value",children:C.axis==="right"?(l??p)(H):(i??p)(H)})]},C.key)),qD&&Zl.length>1&&O.jsxs("div",{className:"chart-tooltip-row chart-tooltip-total",children:[O.jsx("span",{className:"chart-tooltip-label",children:"Total"}),O.jsx("span",{className:"chart-tooltip-value",children:(i??p)(AD)})]}),x&&O.jsx(da.Fragment,{children:x(S)})]})]})}function Zq(a){if(!(a>0))return{max:1,ticks:[0]};let o=a/TB,t=10**Math.floor(Math.log10(o)),r=[1,2,2.5,5,10].map((n)=>n*t).find((n)=>n>=o)??10*t,s=Math.ceil(a/r)*r,d=[];for(let n=0;n<=s+r/2;n+=r)d.push(Number(n.toPrecision(12)));return{max:s,ticks:d}}function Jq(a){return a.reduce((o,t)=>Math.max(o,t.length*6.3),0)}function jq(a,o,t){let r="",s=!1;for(let d=0;d<a;d++){let n=t(d);if(n===null){s=!1;continue}r+=`${s?"L":"M"}${o(d).toFixed(1)},${n.toFixed(1)}`,s=!0}return r}function XA(a){return a.replace(/[^a-zA-Z0-9_-]/g,"_")}var Wl=require("react"),He=require("react/jsx-runtime");function Ee({items:a,hidden:o,onToggle:t}){return He.jsx("div",{className:"legend",children:a.map((r)=>{let s=He.jsxs(He.Fragment,{children:[He.jsx("span",{className:"swatch",style:{background:r.color}}),He.jsx("span",{className:"truncate",children:r.label}),r.value&&He.jsx("span",{className:"legend-value",children:r.value})]});return t?He.jsx("button",{type:"button",className:"legend-item","data-off":o?.has(r.key)??!1,onClick:()=>t(r.key),title:r.label,children:s},r.key):He.jsx("span",{className:"legend-item",title:r.label,children:s},r.key)})})}function Ia(){let[a,o]=Wl.useState(()=>new Set),t=Wl.useCallback((r)=>{o((s)=>{let d=new Set(s);if(!d.delete(r))d.add(r);return d})},[]);return[a,t]}var KA=require("react/jsx-runtime");function Ca({segments:a,height:o=8}){let t=a.reduce((r,s)=>r+Math.max(0,s.value),0);return KA.jsx("div",{className:"share-bar",style:{height:o},role:"img",children:t>0&&a.filter((r)=>r.value>0).map((r)=>KA.jsx("div",{className:"share-bar-seg",style:{flexGrow:r.value/t,background:r.color},title:`${r.label}: ${(r.value/t*100).toFixed(1)}%`},r.key))})}var Yq=require("react/jsx-runtime");function Ma({buckets:a,bucketMs:o,onSelectBucket:t,...r}){return Yq.jsx(Ra,{...r,slots:a.length,tickLabel:(s)=>Ml(a[s],o),tooltipTitle:(s)=>Rl(a[s],o),onSelect:t?(s)=>t(a[s]):void 0})}var Ke=["#5ad8e6","#ed4abf","#9d7bff","#f5b54a","#4ade80","#5b8cff","#ff7a59","#2dd4bf","#c3e94f","#fb7185"],Ne="#6c6c74";function ae(a,o){return`${a}::${o}`}function zl(a){return QA(a.map((o)=>({key:ae(o.model,o.provider),weight:o.totalRequests})))}function QA(a){let o=[...a].sort((t,r)=>r.weight-t.weight||t.key.localeCompare(r.key));return new Map(o.map((t,r)=>[t.key,Ke[r%Ke.length]]))}var te=require("react");var AB={entries:new Map,limit:128},qB={entries:new Map,limit:4},DB={entries:new Map,limit:16},Ta=new Map;function eD(a){if(a.startsWith('["trace",'))return qB;if(a.startsWith('["request",'))return DB;return AB}function xl(a){return eD(a).entries.get(a)}function aD(a){return Ta.get(a)}function BB(a,o){let{entries:t,limit:r}=eD(a);if(t.delete(a),t.set(a,o),t.size>r){let s=t.keys().next().value;if(s!==void 0)t.delete(s)}}function tD(a,o,t){let r=Ta.get(a);if(r)return r.waiters++,r;let s=new AbortController,d=xl(a)?.data,n={promise:t({signal:s.signal},d).then((p)=>(BB(a,{data:p,updatedAt:Date.now(),version:o}),p)).finally(()=>{if(Ta.get(a)===n)Ta.delete(a)}),controller:s,waiters:1};return Ta.set(a,n),n}function ZA(a,o){if(o.waiters--,o.waiters>0)return;if(Ta.get(a)===o)Ta.delete(a);o.controller.abort()}var FB=1500;function le(a,o,t){let r=JSON.stringify(a),s=t?.enabled??!0,d=t?.pollMs,n=Nq(s),[,p]=te.useReducer((D)=>D+1,0),[l,i]=te.useState(null),[u,m]=te.useState(!1),L=te.useRef(o);L.current=o;let k=te.useRef(r);k.current=r;let f=te.useRef(null),c=te.useRef(0),g=te.useRef(null),x=te.useCallback((D)=>{c.current=Date.now();let T=g.current;if(T?.key===D&&aD(D)===T.request)return;let v=xl(D)?.data;m(!0);let j=tD(D,Dq(),L.current);if(g.current={key:D,request:j},T)ZA(T.key,T.request);j.promise.then((X)=>{if(k.current!==D)return;if(X===v){i((Da)=>Da===null?Da:null);return}te.startTransition(()=>{i(null),p()})}).catch((X)=>{if(k.current!==D||j.controller.signal.aborted)return;i({key:D,error:X instanceof Error?X:Error(String(X))})}).finally(()=>{if(g.current?.request===j)g.current=null;if(k.current===D)m(!1)})},[]),b=te.useCallback(()=>{let D=g.current;if(g.current=null,D)ZA(D.key,D.request)},[]);te.useEffect(()=>b,[b]),te.useEffect(()=>{if(!s||g.current&&g.current.key!==r)b();if(!s)return;let D=xl(r);if(D&&D.version>=n)return;let T=D?c.current+FB-Date.now():0;if(T<=0){x(r);return}let v=setTimeout(()=>x(r),T);return()=>clearTimeout(v)},[r,s,n,x,b]),te.useEffect(()=>{if(!s||!d)return;let D=setInterval(()=>{if(!document.hidden)x(k.current)},d);return()=>clearInterval(D)},[s,d,x]);let R=te.useCallback(()=>x(k.current),[x]),S=xl(r);if(S)f.current={key:r,data:S.data,updatedAt:S.updatedAt};let V=f.current,_=l?.key===r?l.error:null;return{data:V?.data??null,error:_,loading:!V&&!_,stale:!!V&&V.key!==r,refreshing:u,updatedAt:V?.updatedAt??null,refetch:R}}function xe(a,o,t){let r=oD(o),s=Array.from({length:o.length},()=>0);for(let d of a){let n=r.get(d.timestamp);if(n!==void 0)s[n]+=t(d)}return s}function Aa(a,o){let t=oD(o.buckets),r=new Map;for(let i of a){let u=t.get(i.timestamp);if(u===void 0)continue;let m=o.key(i),L=r.get(m);if(!L)L=Array.from({length:o.buckets.length},()=>0),r.set(m,L);L[u]+=o.value(i)}let s=[...r.entries()].map(([i,u])=>({key:i,values:u,total:u.reduce((m,L)=>m+L,0)})).filter((i)=>i.total!==0).sort((i,u)=>u.total-i.total||i.key.localeCompare(u.key)),d=o.limit??Number.POSITIVE_INFINITY,n=s.slice(0,d),p=s.slice(d),l=n.map((i,u)=>({key:i.key,label:o.label?o.label(i.key):i.key,color:o.colors?.get(i.key)??Ke[u%Ke.length],values:i.values}));if(p.length>0){let i=Array.from({length:o.buckets.length},()=>0);for(let u of p)for(let m=0;m<i.length;m++)i[m]+=u.values[m];l.push({key:"__other__",label:`Other (${p.length})`,color:Ne,values:i})}return l}function oD(a){let o=new Map;for(let t=0;t<a.length;t++)o.set(a[t],t);return o}var NB=["main","subagent","advisor"];function Sa(a){return a.totalInputTokens+a.totalOutputTokens+a.totalCacheReadTokens+a.totalCacheWriteTokens}function lD(a){let o=new Map;for(let n of a)o.set(n.agentType,n);let t=NB.map((n)=>o.get(n)).filter((n)=>n!==void 0),r=t.reduce((n,p)=>n+Sa(p),0),s=t.reduce((n,p)=>n+p.totalCost,0),d=t.map((n)=>{let p=Sa(n);return{agentType:n.agentType,tokens:p,requests:n.totalRequests,cost:n.totalCost,share:r>0?p/r:0}});return{totalTokens:r,totalCost:s,segments:d}}function nD(a){let o={totalCost:0,requests:0,unpricedRequests:0,activeDays:new Set(a.map((s)=>s.timestamp)).size,avgDailyCost:0,costInput:0,costOutput:0,costCacheRead:0,costCacheWrite:0,models:[],topModel:null},t=new Map;for(let s of a){let d=ae(s.model,s.provider),n=t.get(d);if(!n)n={key:d,model:s.model,provider:s.provider,cost:0,requests:0,unpricedRequests:0,costInput:0,costOutput:0,costCacheRead:0,costCacheWrite:0,share:0},t.set(d,n);rD(n,s),rD(o,s),n.cost+=s.cost,o.totalCost+=s.cost}o.avgDailyCost=o.activeDays>0?o.totalCost/o.activeDays:0,o.models=[...t.values()].sort((s,d)=>d.cost-s.cost||d.requests-s.requests||s.key.localeCompare(d.key));for(let s of o.models)s.share=o.totalCost>0?s.cost/o.totalCost:0;let r=o.models[0];return o.topModel=r!==void 0&&r.cost>0?r:null,o}function rD(a,o){a.costInput+=o.costInput,a.costOutput+=o.costOutput,a.costCacheRead+=o.costCacheRead,a.costCacheWrite+=o.costCacheWrite,a.requests+=o.requests,a.unpricedRequests+=o.unpricedRequests}function dD(a){let o=new Map;for(let t of a){let r=ae(t.model,t.provider),s=o.get(r);if(!s)s=[],o.set(r,s);s.push({timestamp:t.timestamp,avgTtftSeconds:t.avgTtft!==null?t.avgTtft/1000:null,avgTokensPerSecond:t.avgTokensPerSecond,requests:t.requests})}for(let t of o.values())t.sort((r,s)=>r.timestamp-s.timestamp);return o}var OB=/^\/?-?(?:private-)?(?:tmp|var-folders)(?:[-/]|$)/;function uD(a){let o=0,t=0,r=0,s=0,d=0,n=0,p=0,l=0,i=0;for(let L of a){if(o+=L.totalRequests,t+=L.failedRequests,r+=L.totalCost,s+=L.unpricedRequests,d+=L.totalInputTokens+L.totalCacheReadTokens+L.totalCacheWriteTokens+L.totalOutputTokens,n+=L.totalInputTokens,p+=L.totalCacheReadTokens,L.totalRequests>l)l=L.totalRequests;if(L.totalCost>i)i=L.totalCost}let u=0;return{rows:a.map((L)=>{let k=OB.test(L.folder);if(k)u++;return{...L,conversationTokens:L.totalInputTokens+L.totalCacheReadTokens+L.totalCacheWriteTokens+L.totalOutputTokens,requestShare:o>0?L.totalRequests/o:0,costShare:r>0?L.totalCost/r:0,temporary:k}}),totalRequests:o,failedRequests:t,totalCost:r,unpricedRequests:s,conversationTokens:d,cacheRate:n+p>0?p/(n+p):0,maxRequests:l,maxCost:i,temporaryCount:u}}function ua(a){if(a.stopReason==="aborted")return"aborted";if(a.stopReason==="error"||a.errorMessage)return"failed";return"ok"}function JA(a,o){if(a.length===0)return null;return a[Math.min(a.length-1,Math.max(0,Math.ceil(o*a.length)-1))]}function iD(a){let o=0,t=0,r=0,s=0,d=0,n=null,p=null,l=[],i=[];for(let u of a){let m=ua(u);if(m==="failed")o++;else if(m==="aborted")t++;if(r+=u.usage.totalTokens,s+=u.usage.cost.total,_A(u))d++;if(u.duration!==null)l.push(u.duration);if(u.ttft!==null)i.push(u.ttft);if(n===null||u.timestamp<n)n=u.timestamp;if(p===null||u.timestamp>p)p=u.timestamp}return l.sort((u,m)=>u-m),i.sort((u,m)=>u-m),{requests:a.length,failed:o,aborted:t,tokens:r,cost:s,unpriced:d,medianDuration:JA(l,0.5),p95Duration:JA(l,0.95),medianTtft:JA(i,0.5),oldest:n,newest:p}}var sD=180,UB=/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi,HB=/\b(?:req|msg|call|toolu|chatcmpl|resp|run|gen)[-_][A-Za-z0-9_-]{6,}/g,EB=/\b[0-9a-f]{12,}\b/gi,WB=/(?<![\w.-])\d+(?:\.\d+)?/g,zB=/^[1-5]\d\d$/;function jA(a){if(!a?.trim())return"Unknown error";let o=a.replace(/\s+/g," ").trim().replace(UB,"<id>").replace(HB,"<id>").replace(EB,"<hex>").replace(WB,(t)=>zB.test(t)?t:"N");return o.length>sD?`${o.slice(0,sD-1)}…`:o}function fD(a){let o=new Map;for(let t of a){let r=jA(t.errorMessage),s=o.get(r);if(!s)s={signature:r,count:0,firstSeen:t.timestamp,lastSeen:t.timestamp,latest:t,models:[],byModel:new Map},o.set(r,s);if(s.count++,t.timestamp<s.firstSeen)s.firstSeen=t.timestamp;if(t.timestamp>s.lastSeen)s.lastSeen=t.timestamp,s.latest=t;let d=ae(t.model,t.provider),n=s.byModel.get(d);if(n)n.count++;else s.byModel.set(d,{model:t.model,provider:t.provider,count:1})}return[...o.values()].map(({byModel:t,...r})=>({...r,models:[...t.values()].sort((s,d)=>d.count-s.count||s.model.localeCompare(d.model))})).sort((t,r)=>r.count-t.count||r.lastSeen-t.lastSeen)}var M=require("react/jsx-runtime"),$B=[{value:"model",label:"By model"},{value:"component",label:"By component"}],VB=6,GB=86400000,Il=[{key:"costInput",label:"Input",color:"#5b8cff"},{key:"costOutput",label:"Output",color:"var(--chart-secondary)"},{key:"costCacheRead",label:"Cache read",color:"var(--chart-primary)"},{key:"costCacheWrite",label:"Cache write",color:"#f5b54a"}],_B=new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",timeZone:"UTC"}),XB=new Intl.DateTimeFormat(void 0,{weekday:"short",month:"short",day:"numeric",year:"numeric",timeZone:"UTC"});function YA({active:a,range:o}){let t=le(["costs",o],({signal:L})=>bq(o,L),{enabled:a}),r=ie(o),[s,d]=Ll.useState("model"),[n,p]=Ia(),l=Ll.useMemo(()=>t.data?KB(t.data,o):null,[t.data,o]),i=Ll.useMemo(()=>l?JB(l):[],[l]),u=(L)=>L.costSeries.length===0,m=M.jsx(J,{title:"No usage in this range",hint:"Pick a wider range in the top bar."});return M.jsxs("div",{className:"page",children:[M.jsx(ye,{title:"Costs",description:`What ${r.windowLabel} of usage would cost at public API rates. Subscription usage without a public price is counted as unpriced, not free.`}),M.jsx(E,{query:t,skeleton:M.jsx(he,{height:112,style:{borderRadius:12}}),isEmpty:u,empty:m,children:()=>l&&M.jsx(QB,{view:l,stale:t.stale})}),M.jsxs("div",{className:"grid grid-main-side",children:[M.jsx(G,{index:1,title:"Daily estimate",description:s==="model"?"Per UTC day, stacked by model":"Per UTC day, stacked by billing component",actions:M.jsx(De,{size:"sm",options:$B,value:s,onChange:d,"aria-label":"Split by"}),stale:t.stale,children:M.jsx(E,{query:t,skeleton:M.jsx(oe,{height:280}),isEmpty:u,empty:m,children:()=>{if(!l)return null;let L=s==="model"?l.modelSeries:l.componentSeries;return M.jsxs("div",{className:"stack",style:{gap:12},children:[M.jsx(Ra,{slots:l.buckets.length,tickLabel:(k)=>_B.format(l.buckets[k]),tooltipTitle:(k)=>XB.format(l.buckets[k]),series:L,hidden:n,height:280,format:(k)=>ce(k,Number.isInteger(k)?0:2),formatTooltip:(k)=>ce(k),emptyLabel:"No priced usage in this range",tooltipExtra:(k)=>l.unpricedPerDay[k]>0?M.jsxs("div",{className:"chart-tooltip-row chart-tooltip-total",children:[M.jsx("span",{className:"chart-tooltip-label",children:"Unpriced requests"}),M.jsx("span",{className:"chart-tooltip-value",children:I(l.unpricedPerDay[k])})]}):null}),M.jsx(Ee,{items:L.map((k)=>({key:k.key,label:k.label,color:k.color,value:ce(jB(k.values))})),hidden:n,onToggle:p})]})}})}),M.jsx(G,{index:2,title:"Where it went",description:"Estimate by billing component",stale:t.stale,children:M.jsx(E,{query:t,skeleton:M.jsx(oe,{height:280}),isEmpty:u,empty:m,children:()=>l&&M.jsx(ZB,{summary:l.summary})})})]}),M.jsx(G,{index:3,title:"By model",description:"Estimate per model with its input, output and cache split",stale:t.stale,flush:!0,children:M.jsx(E,{query:t,skeleton:M.jsx(ge,{rows:8}),isEmpty:u,empty:m,children:()=>l&&M.jsx(pe,{rows:l.summary.models,rowKey:(L)=>L.key,columns:i,initialSort:{key:"cost",dir:"desc"},limit:20})})})]})}function KB(a,o){let t=a.costSeries,r=nD(t),s=zl(r.models.map((i)=>({model:i.model,provider:i.provider,totalRequests:i.requests}))),d=new Map(r.models.map((i)=>[i.key,i])),n=Je(o,t.map((i)=>i.timestamp),GB),p=Aa(t,{buckets:n,key:(i)=>ae(i.model,i.provider),label:(i)=>d.get(i)?.model??i,value:(i)=>i.cost,limit:VB,colors:s}).map((i)=>({...i,values:i.values.map((u)=>u||null)})),l=new Set;for(let i of p){if(i.key==="__other__")continue;if(l.has(i.color))i.color=Ke.find((u)=>!l.has(u))??i.color;l.add(i.color)}return{summary:r,swatches:new Map(p.filter((i)=>i.key!=="__other__").map((i)=>[i.key,i.color])),buckets:n,dailyTotals:xe(t,n,(i)=>i.cost),unpricedPerDay:xe(t,n,(i)=>i.unpricedRequests),modelSeries:p,componentSeries:Il.map((i)=>({key:i.key,label:i.label,color:i.color,values:xe(t,n,(u)=>u[i.key]).map((u)=>u||null)})),maxModelCost:r.models[0]?.cost??0}}function QB({view:a,stale:o}){let{summary:t}=a,r=t.requests-t.unpricedRequests,s=t.topModel;return M.jsx("div",{"data-stale":o,children:M.jsxs(Ce,{min:180,children:[M.jsx(q,{label:"API-equivalent estimate",title:"What this usage would cost at public API rates",value:ee(t.totalCost,t.unpricedRequests),hint:`${I(t.requests)} requests`,spark:a.dailyTotals,sparkColor:"var(--chart-secondary)"}),M.jsx(q,{label:"Average per day",title:"Estimate ÷ days with any usage",value:ee(t.avgDailyCost,t.unpricedRequests),hint:`over ${I(t.activeDays)} active day${t.activeDays===1?"":"s"}`}),M.jsx(q,{label:"Top model",title:s?`${s.model} (${s.provider})`:void 0,value:s?s.model:"–",hint:s?`${ce(s.cost)} · ${W(s.share)} of estimate`:"Nothing priced yet"}),M.jsx(q,{label:"Per priced request",title:"Estimate ÷ requests that have a public price",value:r>0?cD(t.totalCost/r):"–",hint:`${I(r)} priced`}),M.jsx(q,{label:"Unpriced requests",title:"Subscription usage with no public-equivalent price; excluded from the estimate",value:I(t.unpricedRequests),hint:t.unpricedRequests>0?"excluded from the estimate":"all usage priced"})]})})}function ZB({summary:a}){return M.jsxs("div",{className:"stack",style:{gap:14},children:[M.jsx(Ca,{height:10,segments:Il.map((o)=>({key:o.key,label:o.label,value:a[o.key],color:o.color}))}),M.jsxs("div",{className:"costs-components",children:[Il.map((o)=>M.jsxs("div",{className:"costs-component-row",children:[M.jsxs("span",{className:"row",children:[M.jsx(pa,{color:o.color}),o.label]}),M.jsx("span",{className:"num",children:ce(a[o.key])}),M.jsx("span",{className:"num dim costs-component-share",children:a.totalCost>0?W(a[o.key]/a.totalCost):"–"})]},o.key)),M.jsxs("div",{className:"costs-component-row costs-component-total",children:[M.jsx("span",{children:"Total"}),M.jsx("span",{className:"num",children:ee(a.totalCost,a.unpricedRequests)}),M.jsx("span",{className:"costs-component-share"})]})]}),a.unpricedRequests>0&&M.jsxs("p",{className:"micro dim",children:[I(a.unpricedRequests)," unpriced subscription request",a.unpricedRequests===1?" is":"s are"," not included."]})]})}function JB(a){let o=Il.map((t)=>({key:t.key,header:t.label,align:"right",sort:(r)=>r[t.key],render:(r)=>M.jsx("span",{className:"num",children:ce(r[t.key])})}));return[{key:"model",header:"Model",sort:(t)=>t.model,render:(t)=>M.jsx(we,{lead:M.jsx(pa,{color:a.swatches.get(t.key)??Ne}),primary:M.jsx("span",{className:"mono",children:t.model}),secondary:t.provider})},{key:"requests",header:"Requests",align:"right",sort:(t)=>t.requests,render:(t)=>M.jsx("span",{className:"num",children:I(t.requests)})},{key:"cost",header:"Estimate",title:"API-equivalent estimate at public rates",align:"right",sort:(t)=>t.cost,render:(t)=>M.jsx(ve,{value:t.cost,max:a.maxModelCost,display:ee(t.cost,t.unpricedRequests),color:a.swatches.get(t.key)??Ne})},{key:"share",header:"Share",align:"right",sort:(t)=>t.share,render:(t)=>M.jsx("span",{className:"num muted",children:t.cost>0?W(t.share):"–"})},{key:"split",header:"Split",title:"Input · output · cache read · cache write",width:150,render:(t)=>t.cost>0?M.jsx(Ca,{segments:Il.map((r)=>({key:r.key,label:r.label,value:t[r.key],color:r.color}))}):M.jsx("span",{className:"dim",children:"–"})},...o,{key:"perRequest",header:"Per request",title:"Estimate ÷ priced requests",align:"right",sort:(t)=>t.requests>t.unpricedRequests?t.cost/(t.requests-t.unpricedRequests):-1,render:(t)=>M.jsx("span",{className:"num",children:t.requests>t.unpricedRequests?cD(t.cost/(t.requests-t.unpricedRequests)):"–"})},{key:"unpriced",header:"Unpriced",title:"Requests with no public-equivalent price",align:"right",sort:(t)=>t.unpricedRequests,render:(t)=>t.unpricedRequests>0?M.jsx("span",{className:"num tone-warn",children:I(t.unpricedRequests)}):M.jsx("span",{className:"num dim",children:"–"})}]}function cD(a){return a>0&&a<0.0001?"<$0.0001":ce(a)}function jB(a){let o=0;for(let t of a)o+=t??0;return o}var ia=require("react");var y=require("react/jsx-runtime"),eq=[50,200,1000];function aq({active:a,range:o,onRequestClick:t}){let[r,s]=ia.useState(0),d=eq[r],n=le(["errors",o,d],({signal:v})=>yq(o,d,v),{enabled:a}),[p,l]=ia.useState(null),[i,u]=ia.useState(null),[m,L]=ia.useState(""),k=ie(o),f=ia.useMemo(()=>{let v=(n.data??[]).map((K)=>({row:K,signature:jA(K.errorMessage)})),j=fD(n.data??[]),X=new Map;for(let{row:K}of v){let ne=ae(K.model,K.provider),Te=X.get(ne);if(Te)Te.count++;else X.set(ne,{model:K.model,provider:K.provider,count:1})}let Da=[...X.entries()].map(([K,ne])=>({key:K,...ne})).sort((K,ne)=>ne.count-K.count||K.model.localeCompare(ne.model)),ze=v.reduce((K,{row:ne})=>!K||ne.timestamp>K.timestamp?ne:K,null);return{rows:v,groups:j,models:Da,newest:ze}},[n.data]),c=f.groups.some((v)=>v.signature===p)?p:null,g=f.models.some((v)=>v.key===i)?i:null,x=ia.useMemo(()=>{let v=m.trim().toLowerCase();return f.rows.filter((j)=>(c===null||j.signature===c)&&(g===null||ae(j.row.model,j.row.provider)===g)&&(v===""||j.row.model.toLowerCase().includes(v)||j.row.provider.toLowerCase().includes(v)||j.row.folder.toLowerCase().includes(v)||(j.row.errorMessage??"").toLowerCase().includes(v))).map((j)=>j.row)},[f.rows,c,g,m]),b=n.data?.length??0,R=!n.stale&&b<d,S=r+1<eq.length?eq[r+1]:null,V=n.data!==null&&!R?y.jsxs(y.Fragment,{children:[y.jsxs("span",{children:["Showing the latest ",I(b)," failures in ",k.windowLabel,"; older ones are not loaded."]}),S!==null&&y.jsx("button",{type:"button",className:"btn","data-size":"sm",disabled:n.refreshing,onClick:()=>s(r+1),children:n.refreshing&&n.stale?"Loading…":`Load latest ${I(S)}`})]}):void 0,_=f.groups[0]?.count??0,D=ia.useMemo(()=>YB(_),[_]),T=f.models.find((v)=>v.key===g);return y.jsxs("div",{className:"page",children:[y.jsx(ye,{title:"Errors",description:`Failed model requests in ${k.windowLabel}, grouped by error signature. Open a failure for its full payload.`}),y.jsx(E,{query:n,skeleton:y.jsx(he,{height:96,style:{borderRadius:12}}),children:()=>y.jsx("div",{"data-stale":n.stale,children:y.jsxs(Ce,{min:170,children:[y.jsx(q,{label:"Failures",value:I(b),hint:R?`in ${k.windowLabel}`:`latest ${I(b)} loaded`}),y.jsx(q,{label:"Signatures",title:"Distinct error messages after normalizing ids and numbers",value:I(f.groups.length),hint:f.groups[0]?`top: ${I(f.groups[0].count)} failures`:void 0}),y.jsx(q,{label:"Affected models",value:I(f.models.length),hint:f.models[0]?.model}),y.jsx(q,{label:"Last failure",value:f.newest?ue(f.newest.timestamp):"–",hint:f.newest?Fe(f.newest.timestamp):`none in ${k.windowLabel}`})]})})}),y.jsxs("div",{className:"grid grid-main-side",children:[y.jsx(G,{index:1,title:"Error signatures",description:"Same message with ids and counters normalized. Select one to filter the failures below.",flush:!0,stale:n.stale,children:y.jsx(E,{query:n,skeleton:y.jsx(ge,{rows:8}),isEmpty:(v)=>v.length===0,empty:y.jsx(J,{title:`No failures in ${k.windowLabel}`,hint:"Every request succeeded or was aborted."}),children:()=>y.jsx(pe,{rows:f.groups,rowKey:(v)=>v.signature,columns:D,onRowClick:(v)=>l(c===v.signature?null:v.signature),selectedKey:c,expanded:(v)=>v.signature===c?y.jsx(eF,{group:v,onRequestClick:t}):null,limit:12})})}),y.jsx(G,{index:2,title:"By model",description:"Failures per model. Select one to filter.",stale:n.stale,children:y.jsx(E,{query:n,skeleton:y.jsx(he,{height:180}),isEmpty:(v)=>v.length===0,empty:y.jsx(J,{title:"No affected models"}),children:()=>y.jsx(gl,{items:f.models.slice(0,12).map((v)=>({key:v.key,label:y.jsxs("span",{className:"row",style:{gap:6,minWidth:0},children:[y.jsx("span",{className:"mono truncate",children:v.model}),y.jsx("span",{className:"dim truncate",children:v.provider})]}),value:v.count,color:v.key===g?"var(--bad)":"color-mix(in srgb, var(--bad) 45%, transparent)"})),onSelect:(v)=>u(g===v?null:v)})})})]}),y.jsx(G,{index:3,title:"Failures",description:n.data===null?"Loading failures…":`${I(x.length)} of ${I(b)} failures, newest first`,actions:y.jsxs(y.Fragment,{children:[c!==null&&y.jsxs("button",{type:"button",className:"btn errors-filter","data-size":"sm",onClick:()=>l(null),title:c,children:[y.jsx("span",{className:"mono truncate",children:c}),y.jsx(xa,{size:12})]}),T&&y.jsxs("button",{type:"button",className:"btn errors-filter","data-size":"sm",onClick:()=>u(null),children:[y.jsx("span",{className:"mono truncate",children:T.model}),y.jsx(xa,{size:12})]}),y.jsx(zs,{value:m,onChange:L,placeholder:"Message, model or project"})]}),flush:!0,stale:n.stale,footer:V,children:y.jsx(E,{query:n,skeleton:y.jsx(ge,{rows:10}),isEmpty:(v)=>v.length===0,empty:y.jsx(J,{title:`No failures in ${k.windowLabel}`}),children:()=>y.jsx(pe,{rows:x,rowKey:(v)=>v.id??`${v.sessionFile}:${v.entryId}`,onRowClick:(v)=>v.id!==void 0&&t(v.id),columns:aF,initialSort:{key:"time",dir:"desc"},limit:50,dense:!0,empty:y.jsx(J,{title:"No failures match",hint:"Clear the search or the selected filters."})})})})]})}function YB(a){return[{key:"signature",header:"Signature",wrap:!0,sort:(o)=>o.signature,render:(o)=>y.jsx("span",{className:"errors-signature",title:o.latest.errorMessage??void 0,children:o.signature})},{key:"models",header:"Models",sort:(o)=>o.models.length,render:(o)=>y.jsx(we,{primary:y.jsx("span",{className:"mono",children:o.models[0]?.model}),secondary:o.models.length>1?`+${o.models.length-1} more`:o.models[0]?.provider})},{key:"last",header:"Last seen",sort:(o)=>o.lastSeen,render:(o)=>y.jsx("span",{className:"muted",title:Fe(o.lastSeen),children:ue(o.lastSeen)})},{key:"count",header:"Failures",align:"right",width:120,sort:(o)=>o.count,render:(o)=>y.jsx(ve,{value:o.count,max:a,display:I(o.count),color:"var(--bad)"})}]}function eF({group:a,onRequestClick:o}){let t=a.latest.id;return y.jsxs("div",{className:"errors-detail",children:[y.jsx("pre",{className:"code-block errors-detail-message",children:a.latest.errorMessage??"Unknown error"}),y.jsxs("div",{className:"errors-detail-meta",children:[y.jsxs("span",{className:"muted",children:[I(a.count)," failures · first ",Fe(a.firstSeen)," · last"," ",Fe(a.lastSeen)]}),t!==void 0&&y.jsxs("button",{type:"button",className:"btn","data-size":"sm",onClick:()=>o(t),children:["Open latest ",y.jsx(al,{size:13})]})]}),y.jsx("div",{className:"errors-detail-models",children:a.models.map((r)=>y.jsxs("span",{className:"badge","data-mono":"true",children:[r.model," ",y.jsx("span",{className:"dim",children:r.provider})," ",y.jsx("span",{className:"num",children:U(r.count)})]},ae(r.model,r.provider)))})]})}var aF=[{key:"time",header:"When",width:120,sort:(a)=>a.timestamp,render:(a)=>y.jsx("span",{className:"muted",title:Fe(a.timestamp),children:ue(a.timestamp)})},{key:"model",header:"Model",sort:(a)=>a.model,render:(a)=>y.jsx(we,{primary:y.jsx("span",{className:"mono",children:a.model}),secondary:a.provider})},{key:"error",header:"Error",sort:(a)=>a.errorMessage??"",render:(a)=>y.jsx("span",{className:"errors-message",title:a.errorMessage??void 0,children:a.errorMessage??"Unknown error"})},{key:"project",header:"Project",sort:(a)=>a.folder,render:(a)=>y.jsx("span",{className:"mono muted",title:a.folder,children:Xe(a.folder)})},{key:"tokens",header:"Tokens",align:"right",sort:(a)=>a.usage.totalTokens,render:(a)=>y.jsx("span",{className:"num",children:I(a.usage.totalTokens)})},{key:"cost",header:"Cost",title:"API-equivalent estimate",align:"right",sort:(a)=>a.usage.cost.total,render:(a)=>y.jsx("span",{className:"num",children:La(a,4)})}];var Xs=require("react");var w=require("react/jsx-runtime"),tF=[{value:"share",label:"Share"},{value:"requests",label:"Requests"}],oF=6;function tq({active:a,range:o}){let t=le(["models",o],({signal:c})=>kq(o,c),{enabled:a}),r=ie(o),[s,d]=Xs.useState("share"),[n,p]=Ia(),[l,i]=Xs.useState(null),u=Xs.useMemo(()=>t.data?rF(t.data,o):null,[t.data,o]),m=dF(r.bucketMs),L=Xs.useMemo(()=>u?lF(u,l,m):[],[u,l,m]),k=(c)=>c.byModel.length===0,f=w.jsx(J,{title:"No model usage in this range",hint:"Pick a wider range in the top bar."});return w.jsxs("div",{className:"page",children:[w.jsx(ye,{title:"Models",description:`Which models did the work in ${r.windowLabel}, and how fast they answered.`}),w.jsx(E,{query:t,skeleton:w.jsx(he,{height:112,style:{borderRadius:12}}),isEmpty:k,empty:f,children:()=>u&&w.jsx("div",{"data-stale":t.stale,children:w.jsxs(Ce,{min:200,children:[w.jsx(q,{label:"Models used",value:I(u.models.length),hint:`across ${I(u.providerCount)} provider${u.providerCount===1?"":"s"}`}),w.jsx(q,{label:"Most used",title:u.top?`${u.top.model} (${u.top.provider})`:void 0,value:u.top?u.top.model:"–",hint:u.top?`${W(u.top.totalRequests/Math.max(1,u.totalRequests))} of requests · ${u.top.provider}`:void 0}),w.jsx(q,{label:"Requests",value:I(u.totalRequests),hint:`${I(u.failedRequests)} failed`,spark:u.requestTotals}),w.jsx(q,{label:"API-equivalent cost",title:"What this usage would cost at public API rates",value:ee(u.totalCost,u.unpricedRequests),hint:u.unpricedRequests>0?`${I(u.unpricedRequests)} unpriced`:void 0})]})})}),w.jsx(G,{index:1,title:"Request share",description:s==="share"?`Each model's share of requests per ${m}`:`Requests per ${m}, stacked by model`,actions:w.jsx(De,{size:"sm",options:tF,value:s,onChange:d,"aria-label":"Share chart mode"}),stale:t.stale,children:w.jsx(E,{query:t,skeleton:w.jsx(oe,{height:260}),isEmpty:k,empty:f,children:()=>u&&w.jsxs("div",{className:"stack",style:{gap:12},children:[w.jsx(Ma,{buckets:u.buckets,bucketMs:r.bucketMs,series:s==="share"?u.shareSeries:u.countSeries,hidden:n,height:260,yMax:s==="share"?1:void 0,format:s==="share"?(c)=>W(c,0):U,formatTooltip:s==="share"?(c)=>W(c):I,showTotal:s==="requests"}),w.jsx(Ee,{items:u.countSeries.map((c)=>({key:c.key,label:c.label,color:c.color,value:W(pD(c.values)/Math.max(1,pD(u.requestTotals)))})),hidden:n,onToggle:p})]})})}),w.jsx(G,{index:2,title:"All models",description:"Click a row for latency and throughput over time",stale:t.stale,flush:!0,children:w.jsx(E,{query:t,skeleton:w.jsx(ge,{rows:8}),isEmpty:k,empty:f,children:()=>u&&w.jsx(pe,{rows:u.models,rowKey:(c)=>ae(c.model,c.provider),columns:L,initialSort:{key:"requests",dir:"desc"},limit:25,onRowClick:(c)=>{let g=ae(c.model,c.provider);i((x)=>x===g?null:g)},selectedKey:l,expanded:(c)=>{let g=ae(c.model,c.provider);return g===l?w.jsx(nF,{model:c,color:u.swatches.get(g)??"var(--chart-primary)",points:u.performance.get(g)??[],bucketMs:r.bucketMs,bucketWord:m}):null}})})})]})}function rF(a,o){let t=a.byModel,r=zl(t),s=sF(t),d=Je(o,a.modelSeries.map((g)=>g.timestamp)),n=xe(a.modelSeries,d,(g)=>g.requests),p={buckets:d,key:(g)=>ae(g.model,g.provider),label:(g)=>s.get(g)??g,value:(g)=>g.requests,colors:r},l=Aa(a.modelSeries,{...p,limit:oF}).map((g)=>({...g,values:g.values.map((x)=>x||null)})),i=l.map((g)=>({...g,values:g.values.map((x,b)=>x===null?null:x/n[b])})),u=new Map(Aa(a.modelSeries,p).map((g)=>[g.key,g.values])),m,L=0,k=0,f=0,c=0;for(let g of t){if(!m||g.totalRequests>m.totalRequests)m=g;L+=g.totalRequests,k+=g.failedRequests,f+=g.totalCost,c+=g.unpricedRequests}return{models:t,top:m,swatches:new Map(l.filter((g)=>g.key!=="__other__").map((g)=>[g.key,g.color])),labels:s,providerCount:new Set(t.map((g)=>g.provider)).size,totalRequests:L,failedRequests:k,totalCost:f,unpricedRequests:c,maxRequests:m?.totalRequests??0,buckets:d,requestTotals:n,countSeries:l,shareSeries:i,trends:u,performance:dD(a.modelPerformanceSeries)}}function sF(a){let o=new Map;for(let t of a)o.set(t.model,(o.get(t.model)??0)+1);return new Map(a.map((t)=>[ae(t.model,t.provider),(o.get(t.model)??0)>1?`${t.model} · ${t.provider}`:t.model]))}function lF(a,o,t){return[{key:"expand",header:"",width:28,render:(r)=>w.jsx("span",{className:"models-chevron","data-open":ae(r.model,r.provider)===o,children:w.jsx(ya,{size:14})})},{key:"model",header:"Model",sort:(r)=>r.model,render:(r)=>w.jsx(we,{lead:w.jsx(pa,{color:a.swatches.get(ae(r.model,r.provider))??Ne}),primary:w.jsx("span",{className:"mono",children:r.model}),secondary:r.provider})},{key:"requests",header:"Requests",align:"right",sort:(r)=>r.totalRequests,render:(r)=>w.jsx(ve,{value:r.totalRequests,max:a.maxRequests,display:I(r.totalRequests),color:a.swatches.get(ae(r.model,r.provider))??Ne})},{key:"cost",header:"Cost",title:"API-equivalent estimate at public rates",align:"right",sort:(r)=>r.totalCost,render:(r)=>w.jsx("span",{className:"num",children:ee(r.totalCost,r.unpricedRequests)})},{key:"tokens",header:"Tokens",title:"Uncached input + cache reads + cache writes + output",align:"right",sort:(r)=>Sa(r),render:(r)=>{let s=Sa(r);return w.jsx("span",{className:"num",title:I(s),children:U(s)})}},{key:"cache",header:"Cache rate",title:"Cache reads ÷ (uncached input + cache reads)",align:"right",sort:(r)=>r.cacheRate,render:(r)=>w.jsx("span",{className:"num",children:W(r.cacheRate)})},{key:"errors",header:"Errors",align:"right",sort:(r)=>r.errorRate,render:(r)=>r.failedRequests===0?w.jsx("span",{className:"num dim",children:"0%"}):w.jsx("span",{title:`${I(r.failedRequests)} failed`,children:w.jsx(fe,{tone:ba(r.errorRate),mono:!0,children:Be(r.errorRate)})})},{key:"tps",header:"Tokens/s",title:"Average output tokens per second",align:"right",sort:(r)=>r.avgTokensPerSecond??-1,render:(r)=>w.jsx("span",{className:"num",children:_e(r.avgTokensPerSecond)})},{key:"ttft",header:"TTFT",title:"Average time to first token",align:"right",sort:(r)=>r.avgTtft??-1,render:(r)=>w.jsx("span",{className:"num",children:se(r.avgTtft)})},{key:"trend",header:"Trend",title:`Requests per ${t}`,width:112,render:(r)=>{let s=ae(r.model,r.provider),d=a.trends.get(s);return d?w.jsx(Hl,{values:d.map((n)=>n??0),color:a.swatches.get(s)??Ne,width:96,height:22}):w.jsx("span",{className:"dim",children:"–"})}}]}function nF({model:a,color:o,points:t,bucketMs:r,bucketWord:s}){let[d,n]=Ia(),p=[{key:"tps",label:"Tokens/s",color:o,kind:t.length>1?"line":"bars",values:t.map((l)=>l.avgTokensPerSecond)},{key:"ttft",label:"TTFT",color:Ne,kind:t.length>1?"line":"bars",axis:"right",dashed:!0,values:t.map((l)=>l.avgTtftSeconds)}];return w.jsxs("div",{className:"models-detail",children:[w.jsxs("div",{className:"models-detail-facts",children:[w.jsxs("div",{children:[w.jsx("div",{className:"section-label",children:"Efficiency"}),w.jsx(na,{items:[{key:"err",label:"Error rate",value:w.jsxs("span",{className:`tone-${ba(a.errorRate)}`,children:[Be(a.errorRate)," ",w.jsxs("span",{className:"dim",children:["(",I(a.failedRequests)," failed)"]})]})},{key:"cache",label:"Cache rate",value:W(a.cacheRate)},{key:"savings",label:"Cache savings",value:w.jsx("span",{className:a.cacheSavings<0?"tone-bad":void 0,children:W(a.cacheSavings)})},{key:"premium",label:"Premium requests",value:I(Math.round(a.totalPremiumRequests*100)/100)}]})]}),w.jsxs("div",{children:[w.jsx("div",{className:"section-label",children:"Latency"}),w.jsx(na,{items:[{key:"dur",label:"Avg duration",value:se(a.avgDuration)},{key:"ttft",label:"Avg TTFT",value:se(a.avgTtft)},{key:"tps",label:"Tokens/s",value:_e(a.avgTokensPerSecond)}]})]}),w.jsxs("div",{children:[w.jsx("div",{className:"section-label",children:"Tokens"}),w.jsx(na,{items:[{key:"in",label:"Uncached input",value:U(a.totalInputTokens)},{key:"cr",label:"Cache read",value:U(a.totalCacheReadTokens)},{key:"cw",label:"Cache write",value:U(a.totalCacheWriteTokens)},{key:"out",label:"Output",value:U(a.totalOutputTokens)}]})]}),w.jsxs("div",{className:"micro dim",children:["First seen ",ue(a.firstTimestamp)," · last seen"," ",ue(a.lastTimestamp)]})]}),w.jsxs("div",{className:"models-detail-chart",children:[w.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[w.jsxs("div",{className:"section-label",style:{marginBottom:0},children:["Performance per active ",s]}),w.jsx(Ee,{items:p.map((l)=>({key:l.key,label:l.label,color:l.color})),hidden:d,onToggle:n})]}),t.length===0?w.jsx(J,{title:"No performance samples",hint:"Timing is recorded for streamed responses."}):w.jsx(Ma,{buckets:t.map((l)=>l.timestamp),bucketMs:r,series:p,hidden:d,stacked:!1,height:240,format:U,formatTooltip:(l)=>`${_e(l)} tok/s`,formatRight:(l)=>`${Number(l.toFixed(2))}s`,tooltipExtra:(l)=>w.jsxs("div",{className:"chart-tooltip-row chart-tooltip-total",children:[w.jsx("span",{className:"chart-tooltip-label",children:"Requests"}),w.jsx("span",{className:"chart-tooltip-value",children:I(t[l].requests)})]})})]})]})}function dF(a){if(a<3600000)return"5 minutes";if(a<86400000)return"hour";return"day"}function pD(a){let o=0;for(let t of a)o+=t??0;return o}var $l=require("react");var P=require("react/jsx-runtime"),uF=[{value:"requests",label:"Requests"},{value:"tokens",label:"Tokens"},{value:"cost",label:"Cost"}],mD={main:"Main agent",subagent:"Subagents",advisor:"Advisor"},hD={main:"var(--chart-primary)",subagent:"var(--chart-secondary)",advisor:"#9d7bff"},gD=[{key:"input",label:"Uncached input",color:"#5b8cff"},{key:"cacheRead",label:"Cache read",color:"var(--chart-primary)"},{key:"cacheWrite",label:"Cache write",color:"#f5b54a"},{key:"output",label:"Output",color:"var(--chart-secondary)"}];function oq({active:a,range:o,onRequestClick:t}){let r=le(["overview",o],({signal:u})=>Sq(o,u),{enabled:a}),s=le(["recent-requests"],({signal:u})=>Tl(12,u),{enabled:a}),[d,n]=$l.useState("requests"),p=ie(o),l=$l.useMemo(()=>{let u=r.data?.timeSeries??[],m=Je(o,u.map((L)=>L.timestamp));return{buckets:m,requests:xe(u,m,(L)=>L.requests-L.errors),errors:xe(u,m,(L)=>L.errors),tokens:xe(u,m,(L)=>L.tokens),cost:xe(u,m,(L)=>L.cost),all:xe(u,m,(L)=>L.requests)}},[r.data,o]),i=d==="requests"?[{key:"ok",label:"Succeeded",color:"var(--chart-primary)",values:l.requests},{key:"err",label:"Failed",color:"var(--bad)",values:l.errors}]:d==="tokens"?[{key:"tokens",label:"Tokens",color:"var(--chart-primary)",values:l.tokens}]:[{key:"cost",label:"API-equivalent",color:"var(--chart-secondary)",values:l.cost}];return P.jsxs("div",{className:"page",children:[P.jsx(ye,{title:"Overview",description:`Everything DeepSeek Harness did across your sessions in ${p.windowLabel}.`}),P.jsx(E,{query:r,skeleton:P.jsx(oe,{height:112}),children:({overall:u})=>P.jsxs("div",{"data-stale":r.stale,className:"stack",style:{gap:16},children:[P.jsxs(Ce,{min:190,children:[P.jsx(q,{label:"API-equivalent cost",title:"What this usage would cost at public API rates",value:ee(u.totalCost,u.unpricedRequests),hint:u.unpricedRequests>0?`${I(u.unpricedRequests)} unpriced`:void 0,spark:l.cost,sparkColor:"var(--chart-secondary)"}),P.jsx(q,{label:"Requests",value:I(u.totalRequests),hint:`${I(u.failedRequests)} failed`,spark:l.all}),P.jsx(q,{label:"Conversation tokens",title:"Uncached input + cache reads + cache writes + output",value:U(Sa(u)),hint:`${U(u.totalOutputTokens)} output`,spark:l.tokens}),P.jsx(q,{label:"Cache rate",title:"Cache reads ÷ (uncached input + cache reads)",value:W(u.cacheRate),hint:`${W(u.cacheSavings)} saved`}),P.jsx(q,{label:"Error rate",value:Be(u.errorRate),hint:`${I(u.successfulRequests)} succeeded`,spark:l.errors,sparkColor:"var(--bad)"})]}),P.jsxs(Ce,{min:140,children:[P.jsx(q,{size:"sm",label:"Uncached input",value:U(u.totalInputTokens)}),P.jsx(q,{size:"sm",label:"Cache read",value:U(u.totalCacheReadTokens)}),P.jsx(q,{size:"sm",label:"Cache write",value:U(u.totalCacheWriteTokens)}),P.jsx(q,{size:"sm",label:"Output",value:U(u.totalOutputTokens)}),P.jsx(q,{size:"sm",label:"Premium requests",value:I(Math.round(u.totalPremiumRequests*100)/100)}),P.jsx(q,{size:"sm",label:"Tokens/s",value:_e(u.avgTokensPerSecond)}),P.jsx(q,{size:"sm",label:"Avg latency",value:se(u.avgDuration)}),P.jsx(q,{size:"sm",label:"Avg TTFT",value:se(u.avgTtft)})]})]})}),P.jsxs("div",{className:"grid grid-main-side",children:[P.jsx(G,{index:1,title:"Activity",description:`Per ${p.bucketMs<3600000?"5 minutes":p.bucketMs<86400000?"hour":"day"}`,actions:P.jsx(De,{size:"sm",options:uF,value:d,onChange:n}),stale:r.stale,children:P.jsx(E,{query:r,skeleton:P.jsx(oe,{height:260}),children:()=>P.jsx(Ma,{buckets:l.buckets,bucketMs:p.bucketMs,series:i,height:260,format:d==="cost"?(u)=>ee(u,0):U})})}),P.jsx(G,{index:2,title:"Token mix",description:"Where conversation tokens went",stale:r.stale,children:P.jsx(E,{query:r,skeleton:P.jsx(oe,{height:260}),children:({overall:u,byAgentType:m})=>{let L={input:u.totalInputTokens,cacheRead:u.totalCacheReadTokens,cacheWrite:u.totalCacheWriteTokens,output:u.totalOutputTokens},k=Sa(u),f=lD(m);return P.jsxs("div",{className:"stack",style:{gap:18},children:[P.jsxs("div",{className:"stack",style:{gap:10},children:[P.jsx(Ca,{segments:gD.map((c)=>({key:c.key,label:c.label,value:L[c.key],color:c.color}))}),P.jsx(Ee,{items:gD.map((c)=>({key:c.key,label:c.label,color:c.color,value:k>0?W(L[c.key]/k,0):"–"}))})]}),P.jsxs("div",{className:"stack",style:{gap:10},children:[P.jsx("div",{className:"section-label",style:{marginBottom:0},children:"By agent"}),P.jsx(Ca,{segments:f.segments.map((c)=>({key:c.agentType,label:mD[c.agentType],value:c.tokens,color:hD[c.agentType]}))}),f.segments.map((c)=>P.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[P.jsxs("span",{className:"row",children:[P.jsx("span",{className:"swatch",style:{background:hD[c.agentType]}}),mD[c.agentType],P.jsxs("span",{className:"dim num",children:[I(c.requests)," req"]})]}),P.jsxs("span",{className:"row",children:[P.jsx("span",{className:"dim num",children:U(c.tokens)}),P.jsx("span",{className:"num",style:{minWidth:48,textAlign:"right"},children:W(c.share)})]})]},c.agentType))]})]})}})})]}),P.jsx(G,{index:3,title:P.jsxs(P.Fragment,{children:[P.jsx(ql,{tone:"live",pulse:!0})," Latest requests"]}),description:"Most recent model calls across every session",actions:P.jsxs("a",{className:"btn","data-size":"sm","data-variant":"ghost",href:`#/requests?range=${o}`,children:["All requests ",P.jsx(el,{size:13})]}),flush:!0,children:P.jsx(E,{query:s,skeleton:P.jsx(ge,{rows:8}),children:(u)=>P.jsx(pe,{rows:u,rowKey:(m)=>m.id??`${m.sessionFile}:${m.entryId}`,onRowClick:(m)=>m.id!==void 0&&t(m.id),columns:iF,dense:!0})})})]})}var iF=[{key:"model",header:"Model",render:(a)=>P.jsx(we,{primary:a.model,secondary:a.provider})},{key:"time",header:"When",render:(a)=>P.jsx("span",{className:"muted",children:ue(a.timestamp)})},{key:"tokens",header:"Tokens",align:"right",render:(a)=>P.jsx("span",{className:"num",children:I(a.usage.totalTokens)})},{key:"cost",header:"Cost",align:"right",render:(a)=>P.jsx("span",{className:"num",children:La(a,4)})},{key:"duration",header:"Duration",align:"right",render:(a)=>P.jsx("span",{className:"num",children:se(a.duration)})},{key:"status",header:"Status",align:"right",render:(a)=>a.errorMessage?P.jsx(fe,{tone:"bad",children:"Failed"}):P.jsx(fe,{tone:"ok",children:"OK"})}];var We=require("react");var A=require("react/jsx-runtime"),fF=100,xD=8;function rq({active:a,range:o}){let t=le(["projects",o],({signal:c})=>Pq(o,c),{enabled:a}),[r,s]=We.useState(""),[d,n]=We.useState(!0),p=We.useDeferredValue(r.trim().toLowerCase()),l=ie(o),i=We.useMemo(()=>uD(t.data??[]),[t.data]),u=We.useMemo(()=>d?i.rows.filter((c)=>!c.temporary):i.rows,[i,d]),m=We.useMemo(()=>p?u.filter((c)=>c.folder.toLowerCase().includes(p)):u,[u,p]),L=We.useMemo(()=>({cost:[...u].sort((c,g)=>g.totalCost-c.totalCost).slice(0,xD),requests:[...u].sort((c,g)=>g.totalRequests-c.totalRequests).slice(0,xD)}),[u]),k=A.jsx(J,{title:i.rows.length===0?"No project folders in this range":"Only temporary folders in this range"}),f=We.useMemo(()=>cF(i.maxRequests,i.maxCost),[i]);return A.jsxs("div",{className:"page",children:[A.jsx(ye,{title:"Projects",description:`Usage by session folder in ${l.windowLabel}.`}),A.jsx(E,{query:t,skeleton:A.jsx(oe,{height:96}),children:()=>A.jsx("div",{"data-stale":t.stale,children:A.jsxs(Ce,{min:180,children:[A.jsx(q,{label:"Folders",value:I(i.rows.length),hint:i.temporaryCount>0?`${I(i.temporaryCount)} temporary`:void 0}),A.jsx(q,{label:"Requests",value:I(i.totalRequests),hint:`${I(i.failedRequests)} failed`}),A.jsx(q,{label:"API-equivalent cost",title:"What this usage would cost at public API rates",value:ee(i.totalCost,i.unpricedRequests),hint:i.unpricedRequests>0?`${I(i.unpricedRequests)} unpriced`:void 0}),A.jsx(q,{label:"Conversation tokens",title:"Uncached input + cache reads + cache writes + output",value:U(i.conversationTokens)}),A.jsx(q,{label:"Cache rate",title:"Cache reads ÷ (uncached input + cache reads), across every folder",value:W(i.cacheRate)})]})})}),A.jsxs("div",{className:"grid grid-2",children:[A.jsx(G,{index:1,title:"Top by cost",description:"Share of API-equivalent cost",stale:t.stale,children:A.jsx(E,{query:t,skeleton:A.jsx(oe,{height:236}),isEmpty:()=>L.cost.length===0,empty:k,children:()=>A.jsx(gl,{items:L.cost.map((c)=>({key:c.folder,label:A.jsx("span",{className:"mono",children:Xe(c.folder)}),value:c.totalCost,display:`${ee(c.totalCost,c.unpricedRequests)} · ${W(c.costShare)}`,color:"var(--chart-secondary)"})),onSelect:s})})}),A.jsx(G,{index:2,title:"Top by requests",description:"Share of all requests",stale:t.stale,children:A.jsx(E,{query:t,skeleton:A.jsx(oe,{height:236}),isEmpty:()=>L.requests.length===0,empty:k,children:()=>A.jsx(gl,{items:L.requests.map((c)=>({key:c.folder,label:A.jsx("span",{className:"mono",children:Xe(c.folder)}),value:c.totalRequests,display:`${I(c.totalRequests)} · ${W(c.requestShare)}`})),onSelect:s})})})]}),A.jsx(G,{index:3,title:"Folders",description:t.data?m.length===i.rows.length?`${I(i.rows.length)} folders`:`${I(m.length)} of ${I(i.rows.length)} folders`:void 0,actions:A.jsxs(A.Fragment,{children:[i.temporaryCount>0&&A.jsxs("label",{className:"check",title:"Session folders under /tmp or /var/folders",children:[A.jsx("input",{type:"checkbox",checked:d,onChange:(c)=>n(c.target.checked)}),"Hide temporary (",I(i.temporaryCount),")"]}),A.jsx(zs,{value:r,onChange:s,placeholder:"Filter folders…",width:240})]}),flush:!0,stale:t.stale,children:A.jsx(E,{query:t,skeleton:A.jsx(ge,{rows:10}),children:()=>A.jsx(pe,{rows:m,rowKey:(c)=>c.folder,columns:f,initialSort:{key:"cost",dir:"desc"},limit:fF,dense:!0,empty:A.jsx(J,{title:i.rows.length===0?"No project folders in this range":"No folders match",hint:i.rows.length===0?"Try a longer range.":d&&i.temporaryCount>0?"Temporary folders are hidden.":void 0})})})})]})}function cF(a,o){return[{key:"folder",header:"Folder",sort:(t)=>t.folder,render:(t)=>A.jsxs("span",{className:"row projects-folder",title:t.folder||"(root)",children:[A.jsx("span",{className:"mono truncate",children:Xe(t.folder)}),t.temporary&&A.jsx(fe,{children:"temp"})]})},{key:"requests",header:"Requests",align:"right",sort:(t)=>t.totalRequests,render:(t)=>A.jsx("span",{title:`${W(t.requestShare)} of all requests`,children:A.jsx(ve,{value:t.totalRequests,max:a,display:I(t.totalRequests)})})},{key:"cost",header:"Cost",title:"API-equivalent cost at public API rates",align:"right",sort:(t)=>t.totalCost,render:(t)=>A.jsx("span",{title:`${W(t.costShare)} of all cost`,children:A.jsx(ve,{value:t.totalCost,max:o,display:ee(t.totalCost,t.unpricedRequests),color:"var(--chart-secondary)"})})},{key:"tokens",header:"Tokens",title:"Uncached input + cache reads + cache writes + output",align:"right",sort:(t)=>t.conversationTokens,render:(t)=>A.jsx("span",{className:"num",title:I(t.conversationTokens),children:U(t.conversationTokens)})},{key:"cacheRate",header:"Cache rate",title:"Cache reads ÷ (uncached input + cache reads)",align:"right",sort:(t)=>t.cacheRate,render:(t)=>A.jsx("span",{className:"num",children:W(t.cacheRate)})},{key:"cacheSavings",header:"Cache savings",title:"Prompt-input cost saved versus billing the same tokens uncached",align:"right",sort:(t)=>t.cacheSavings,render:(t)=>A.jsx("span",{className:`num ${t.cacheSavings<0?"tone-bad":"muted"}`,children:W(t.cacheSavings)})},{key:"errorRate",header:"Errors",align:"right",sort:(t)=>t.errorRate,render:(t)=>A.jsx("span",{title:`${I(t.failedRequests)} failed`,children:A.jsx(fe,{tone:t.failedRequests>0?ba(t.errorRate):"neutral",mono:!0,children:Be(t.errorRate)})})},{key:"duration",header:"Avg duration",align:"right",sort:(t)=>t.avgDuration??-1,render:(t)=>A.jsx("span",{className:"num",children:se(t.avgDuration)})},{key:"last",header:"Last active",align:"right",sort:(t)=>t.lastTimestamp,render:(t)=>A.jsx("span",{className:"dim",children:ue(t.lastTimestamp)})}]}var Se=require("react");var h=require("react/jsx-runtime"),pF=[{value:"tokens",label:"Tokens"},{value:"cost",label:"Cost",title:"API-equivalent estimate"},{value:"requests",label:"Requests"}],LD=6,ID=[{key:"input",label:"Uncached input",color:"#5b8cff"},{key:"cacheRead",label:"Cache read",color:"var(--chart-primary)"},{key:"cacheWrite",label:"Cache write",color:"#f5b54a"},{key:"output",label:"Output",color:"var(--chart-secondary)"}],CD="DSH does not record subscription usage snapshots; this panel only shows local session usage.";function sq({active:a,range:o}){let t=le(["providers",o],({signal:b})=>Rq(o,b),{enabled:a}),[r,s]=Se.useState("tokens"),[d,n]=Ia(),p=ie(o),l=le(["provider-windows",o],({signal:b})=>en(o,null,b),{enabled:a}),[i,u]=Se.useState(null),m=mF(l.data?.windowInsights??[],i),L=m?.provider??null,k=le(["provider-windows",o,L],({signal:b})=>en(o,L,b),{enabled:a&&L!==null}),f=Se.useMemo(()=>{let b=t.data?.providers??[],R=t.data?.series??[],S=QA(b.map((T)=>({key:T.provider,weight:T.totalTokens}))),V=Je(o,R.map((T)=>T.timestamp)),_={requests:0,failed:0,tokens:0,cost:0,unpriced:0};for(let T of b)_.requests+=T.totalRequests,_.failed+=T.failedRequests,_.tokens+=T.totalTokens,_.cost+=T.totalCost,_.unpriced+=T.unpricedRequests;let D=(T)=>Aa(R,{buckets:V,key:(v)=>v.provider,value:T,limit:LD,colors:S}).map((v)=>({...v,values:v.values.map((j)=>j||null)}));return{colors:S,buckets:V,totals:_,burn:{tokens:D((T)=>T.totalTokens),cost:D((T)=>T.cost),requests:D((T)=>T.requests)},spark:{tokens:xe(R,V,(T)=>T.totalTokens),cost:xe(R,V,(T)=>T.cost),requests:xe(R,V,(T)=>T.requests)},topProvider:b.reduce((T,v)=>T===null||v.totalTokens>T.totalTokens?v:T,null)}},[t.data,o]),c=f.burn[r],g=r==="cost"?(b)=>ce(b):U,x=f.totals;return h.jsxs("div",{className:"page",children:[h.jsx(ye,{title:"Providers",description:`Burn, reliability and subscription headroom per provider over ${p.windowLabel}.`}),h.jsx(E,{query:t,skeleton:h.jsx(oe,{height:112}),children:({providers:b})=>h.jsx("div",{"data-stale":t.stale,children:h.jsxs(Ce,{min:190,children:[h.jsx(q,{label:"Providers",value:I(b.length),hint:f.topProvider?`Most tokens: ${f.topProvider.provider}`:void 0}),h.jsx(q,{label:"Requests",value:I(x.requests),hint:`${I(x.failed)} failed`,spark:f.spark.requests}),h.jsx(q,{label:"Tokens",title:"Uncached input + cache reads + cache writes + output",value:U(x.tokens),spark:f.spark.tokens}),h.jsx(q,{label:"API-equivalent cost",title:"What this usage would cost at public API rates",value:ee(x.cost,x.unpriced),hint:x.unpriced>0?`${I(x.unpriced)} unpriced`:void 0,spark:f.spark.cost,sparkColor:"var(--chart-secondary)"}),h.jsx(q,{label:"Error rate",value:Be(x.requests>0?x.failed/x.requests:0),hint:`${I(x.requests-x.failed)} succeeded`})]})})}),h.jsx(G,{index:1,title:"Provider totals",description:x.unpriced>0?`Cost is an API-equivalent estimate and excludes ${I(x.unpriced)} unpriced subscription request${x.unpriced===1?"":"s"}. Select a row for its token mix.`:"Cost is an API-equivalent estimate. Select a row for its token mix.",flush:!0,stale:t.stale,children:h.jsx(E,{query:t,skeleton:h.jsx(ge,{rows:6}),children:({providers:b})=>h.jsx(hF,{providers:b,colors:f.colors})})}),h.jsxs("div",{className:"grid grid-main-side",children:[h.jsx(G,{index:2,title:"Burn by provider",description:r==="cost"&&x.unpriced>0?`API-equivalent estimate per ${p.bucketMs<86400000?"hour":"day"}; excludes unpriced subscription requests`:`Per ${p.bucketMs<3600000?"5 minutes":p.bucketMs<86400000?"hour":"day"}, top ${LD} providers stacked`,actions:h.jsx(De,{size:"sm",options:pF,value:r,onChange:s}),stale:t.stale,children:h.jsx(E,{query:t,skeleton:h.jsx(oe,{height:260}),children:()=>h.jsxs("div",{className:"stack",style:{gap:12},children:[h.jsx(Ma,{buckets:f.buckets,bucketMs:p.bucketMs,series:c,hidden:d,height:260,format:g,formatTooltip:r==="cost"?(b)=>ce(b):I,emptyLabel:"No provider activity in this range"}),h.jsx(Ee,{items:c.map((b)=>({key:b.key,label:b.label,color:b.color,value:g(b.values.reduce((R,S)=>R+(S??0),0))})),hidden:d,onToggle:n})]})})}),h.jsx(E,{query:t,skeleton:h.jsx(oe,{height:320}),children:({hourly:b,providers:R})=>h.jsx(xF,{hourly:b,providers:R,stale:t.stale})})]}),h.jsx(G,{index:4,title:"Subscription windows",description:"What one usage window buys you and how many accounts peak demand needs. Select a row to chart it.",flush:!0,stale:l.stale,children:h.jsx(E,{query:l,skeleton:h.jsx(ge,{rows:6}),children:(b)=>h.jsx(LF,{insights:b.windowInsights,selected:m,onSelect:u})})}),h.jsx(bF,{insights:l.data?.windowInsights??null,accounts:k,selected:m,onSelect:u})]})}function mF(a,o){if(o&&a.some((r)=>r.provider===o.provider&&r.windowKey===o.windowKey))return o;let t=o&&a.find((r)=>r.provider===o.provider)||a.reduce((r,s)=>r===void 0||s.fractionConsumed>r.fractionConsumed?s:r,void 0);return t?{provider:t.provider,windowKey:t.windowKey}:null}function hF({providers:a,colors:o}){let[t,r]=Se.useState(null),s=Se.useMemo(()=>{let d=0,n=0,p=0;for(let l of a)d=Math.max(d,l.totalRequests),n=Math.max(n,l.totalTokens),p+=l.totalTokens;return[{key:"provider",header:"Provider",sort:(l)=>l.provider,render:(l)=>h.jsxs("span",{className:"row",style:{gap:8},children:[h.jsx(pa,{color:o.get(l.provider)??Ne}),h.jsx("span",{className:"mono cell-primary",children:l.provider})]})},{key:"requests",header:"Requests",align:"right",sort:(l)=>l.totalRequests,render:(l)=>h.jsx(ve,{value:l.totalRequests,max:d,display:I(l.totalRequests)})},{key:"errors",header:"Error rate",align:"right",sort:(l)=>l.totalRequests>0?l.failedRequests/l.totalRequests:0,render:(l)=>{let i=l.totalRequests>0?l.failedRequests/l.totalRequests:0;return h.jsxs("span",{className:"row",style:{gap:8,justifyContent:"flex-end"},children:[h.jsx("span",{className:"num dim",children:I(l.failedRequests)}),h.jsx(fe,{tone:l.failedRequests>0?ba(i):"neutral",mono:!0,children:Be(i)})]})}},{key:"models",header:"Models",title:"Distinct models used through this provider",align:"right",sort:(l)=>l.models,render:(l)=>h.jsx("span",{className:"num",children:I(l.models)})},{key:"tokens",header:"Tokens",title:"Uncached input + cache reads + cache writes + output",align:"right",sort:(l)=>l.totalTokens,render:(l)=>h.jsx(ve,{value:l.totalTokens,max:n,display:U(l.totalTokens),color:o.get(l.provider)})},{key:"share",header:"Share",title:"Fraction of all tokens in range",align:"right",sort:(l)=>l.totalTokens,render:(l)=>h.jsx("span",{className:"num muted",children:W(p>0?l.totalTokens/p:0)})},{key:"cost",header:"Cost",title:"API-equivalent estimate",align:"right",sort:(l)=>l.totalCost,render:(l)=>h.jsx("span",{className:"num",title:l.unpricedRequests>0?`${I(l.unpricedRequests)} unpriced`:void 0,children:ee(l.totalCost,l.unpricedRequests)})},{key:"tps",header:"Tokens/s",title:"Average output throughput",align:"right",sort:(l)=>l.avgTokensPerSecond??-1,render:(l)=>h.jsx("span",{className:"num",children:_e(l.avgTokensPerSecond)})},{key:"premium",header:"Premium",title:"Premium requests (subscription multiplier units)",align:"right",sort:(l)=>l.totalPremiumRequests,render:(l)=>h.jsx("span",{className:l.totalPremiumRequests>0?"num":"num dim",children:I(Math.round(l.totalPremiumRequests*100)/100)})}]},[a,o]);return h.jsx(pe,{rows:a,rowKey:(d)=>d.provider,columns:s,initialSort:{key:"tokens",dir:"desc"},limit:12,selectedKey:t,onRowClick:(d)=>r((n)=>n===d.provider?null:d.provider),expanded:(d)=>d.provider===t?h.jsx(gF,{provider:d}):null,empty:h.jsx(J,{title:"No requests in this range"})})}function gF({provider:a}){let o={input:a.totalInputTokens,cacheRead:a.totalCacheReadTokens,cacheWrite:a.totalCacheWriteTokens,output:a.totalOutputTokens};return h.jsxs("div",{className:"providers-mix",children:[h.jsx(Ca,{segments:ID.map((t)=>({key:t.key,label:t.label,value:o[t.key],color:t.color}))}),h.jsx(Ee,{items:ID.map((t)=>({key:t.key,label:t.label,color:t.color,value:`${U(o[t.key])} · ${a.totalTokens>0?W(o[t.key]/a.totalTokens,0):"–"}`}))})]})}var Cl="";function xF({hourly:a,providers:o,stale:t}){let[r,s]=Se.useState(Cl),d=r===Cl||o.some((l)=>l.provider===r)?r:Cl,n=Se.useMemo(()=>{let l=Array.from({length:24},()=>0),i=Array.from({length:24},()=>0),u=Array.from({length:24},()=>0);for(let f of a){if(d!==Cl&&f.provider!==d)continue;l[f.hour]+=f.totalTokens,i[f.hour]+=f.outputTokens,u[f.hour]+=f.requests}let m=0;for(let f=1;f<24;f++)if(l[f]>l[m])m=f;let L=l[m]>0;return{series:[{key:"tokens",label:"Tokens",color:"var(--chart-primary)",values:l.map((f,c)=>L&&c===m?null:f)},{key:"peak",label:"Tokens (peak hour)",color:"var(--chart-secondary)",values:l.map((f,c)=>L&&c===m?f:null)}],output:i,requests:u,peak:m,hasData:L}},[a,d]),p=(l)=>`${String(l).padStart(2,"0")}:00`;return h.jsx(G,{index:3,title:"Peak burn hours",description:n.hasData?`Tokens by local hour of day; peak at ${p(n.peak)}`:"Tokens by local hour of day",actions:h.jsxs("select",{className:"input providers-select",value:d,onChange:(l)=>s(l.target.value),"aria-label":"Provider",children:[h.jsx("option",{value:Cl,children:"All providers"}),o.map((l)=>h.jsx("option",{value:l.provider,children:l.provider},l.provider))]}),stale:t,children:h.jsx(Ra,{slots:24,tickLabel:(l)=>String(l).padStart(2,"0"),tooltipTitle:(l)=>`${p(l)}–${p((l+1)%24)}`,series:n.series,height:260,showTotal:!1,formatTooltip:I,emptyLabel:"No activity in this range",tooltipExtra:(l)=>h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"chart-tooltip-row",children:[h.jsx("span",{className:"chart-tooltip-label",children:"Output"}),h.jsx("span",{className:"chart-tooltip-value",children:I(n.output[l])})]}),h.jsxs("div",{className:"chart-tooltip-row",children:[h.jsx("span",{className:"chart-tooltip-label",children:"Requests"}),h.jsx("span",{className:"chart-tooltip-value",children:I(n.requests[l])})]})]})})})}function LF({insights:a,selected:o,onSelect:t}){return h.jsx(pe,{rows:a,rowKey:(r)=>`${r.provider}::${r.windowKey}`,columns:IF,initialSort:{key:"consumed",dir:"desc"},limit:12,selectedKey:o?`${o.provider}::${o.windowKey}`:null,onRowClick:(r)=>t({provider:r.provider,windowKey:r.windowKey}),empty:h.jsx(J,{title:"No usage snapshots in this range",hint:CD})})}var IF=[{key:"window",header:"Window",sort:(a)=>`${a.provider} ${a.windowLabel}`,render:(a)=>h.jsx(we,{primary:a.windowLabel,secondary:h.jsx("span",{className:"mono",children:a.provider})})},{key:"accounts",header:"Accounts",title:"Accounts with at least one snapshot for this window in range",align:"right",sort:(a)=>a.accounts,render:(a)=>h.jsx("span",{className:"num",children:I(a.accounts)})},{key:"cycles",header:"Resets",title:"Window resets observed (drops in used fraction)",align:"right",sort:(a)=>a.cycles,render:(a)=>h.jsx("span",{className:"num muted",children:I(a.cycles)})},{key:"consumed",header:"Windows burned",title:"Subscription-window equivalents consumed in range (sum of used-fraction increases across accounts)",align:"right",sort:(a)=>a.fractionConsumed,render:(a)=>h.jsx("span",{className:"num",children:a.fractionConsumed.toFixed(2)})},{key:"capacity",header:"Tokens / window",title:"Provider tokens burned in range ÷ windows burned — what one full window is worth",align:"right",sort:(a)=>a.estTokensPerWindow??-1,render:(a)=>a.estTokensPerWindow!==null?h.jsx("span",{className:"num",children:U(a.estTokensPerWindow)}):h.jsx("span",{className:"dim",title:"Too little of the window was consumed to extrapolate",children:"–"})},{key:"peak",header:"Peak utilization",title:"Peak of summed used fraction across accounts at any sampled instant; the bar is relative to fleet capacity",align:"right",sort:(a)=>a.peakConcurrentFraction,render:(a)=>{let o=a.accounts>0?a.peakConcurrentFraction/a.accounts:0;return h.jsx(ve,{value:a.peakConcurrentFraction,max:a.accounts,display:W(a.peakConcurrentFraction,0),color:o>=0.9?"var(--warn)":void 0})}},{key:"ideal",header:"Accounts needed",title:"Accounts needed to keep peak demand under 90% of fleet capacity",align:"right",sort:(a)=>a.idealAccounts-a.accounts,render:(a)=>a.idealAccounts>a.accounts?h.jsxs(fe,{tone:"warn",mono:!0,children:[I(a.idealAccounts)," · have ",I(a.accounts)]}):h.jsx("span",{className:"num",children:I(a.idealAccounts)})},{key:"exhausted",header:"Exhaustions",title:"Transitions into an exhausted state observed in range",align:"right",sort:(a)=>a.exhaustedEvents,render:(a)=>a.exhaustedEvents>0?h.jsxs(fe,{tone:"warn",mono:!0,children:[I(a.exhaustedEvents)," exhausted"]}):h.jsx("span",{className:"num dim",children:"0"})}],Vl=60000,fa=60*Vl,Gl=24*fa,CF=[5*Vl,15*Vl,30*Vl,fa,2*fa,3*fa,6*fa,12*fa,Gl],SF=240,kF=6*fa;function bF({insights:a,accounts:o,selected:t,onSelect:r}){let[s,d]=Ia(),n=Se.useMemo(()=>[...new Set((a??[]).map((f)=>f.provider))],[a]),p=Se.useMemo(()=>(a??[]).filter((f)=>f.provider===t?.provider).map((f)=>({key:f.windowKey,label:f.windowLabel})),[a,t?.provider]),l=Se.useMemo(()=>(o.data?.usageSeries??[]).filter((f)=>f.provider===t?.provider),[o.data,t?.provider]),i=l.length===0&&(o.loading||o.stale),u=Se.useMemo(()=>{let f=new Map;for(let g of l){let x=f.get(g.accountLabel)??[];if(!x.includes(g.accountKey))x.push(g.accountKey);f.set(g.accountLabel,x)}let c=new Map;for(let[g,x]of f)x.sort(),x.forEach((b,R)=>c.set(b,x.length>1?`${g} #${R+1}`:g));return c},[l]),m=Se.useMemo(()=>yF(l.filter((f)=>f.windowKey===t?.windowKey),u),[l,u,t?.windowKey]),L=Se.useMemo(()=>{let f=new Map(m.series.map((c)=>[c.key,c.color]));return l.map((c)=>{let g=null,x=null;for(let S of c.points){if(S.usedFraction===null)continue;if(x=Math.max(x??0,S.usedFraction),!g||S.timestamp>=g.timestamp)g={fraction:S.usedFraction,exhausted:S.exhausted,timestamp:S.timestamp}}let b=c.windowKey===t?.windowKey?f.get(c.accountKey)??null:null,R=u.get(c.accountKey)??c.accountLabel;return{series:c,name:R,color:b,latest:g,peak:x,samples:c.points.length}}).sort((c,g)=>Number(g.color!==null)-Number(c.color!==null)||c.series.windowLabel.localeCompare(g.series.windowLabel)||(g.latest?.fraction??-1)-(c.latest?.fraction??-1))},[l,u,m.series,t?.windowKey]),k=p.find((f)=>f.key===t?.windowKey)?.label;return h.jsx(G,{index:5,title:"Window utilization",description:m.buckets.length>0?`${k??"Window"} used fraction per account, ${$e(new Date(m.first),"MMM d HH:mm")} – ${$e(new Date(m.last),"MMM d HH:mm")}`:"Recorded limit utilization per account",actions:t&&h.jsxs("div",{className:"row",style:{gap:6},children:[h.jsx("select",{className:"input providers-select",value:t.provider,onChange:(f)=>{let c=f.target.value,g=a?.find((x)=>x.provider===c);if(g)r({provider:c,windowKey:g.windowKey})},"aria-label":"Provider",children:n.map((f)=>h.jsx("option",{value:f,children:f},f))}),h.jsx("select",{className:"input providers-select",value:t.windowKey,onChange:(f)=>r({provider:t.provider,windowKey:f.target.value}),"aria-label":"Window",children:p.map((f)=>h.jsx("option",{value:f.key,children:f.label},f.key))})]}),stale:o.stale,children:a===null?h.jsx(oe,{height:260}):t===null?h.jsx(J,{title:"No usage snapshots in this range",hint:CD}):h.jsx(E,{query:o,skeleton:h.jsx(oe,{height:260}),children:()=>i?h.jsx(oe,{height:260}):h.jsxs("div",{className:"stack",style:{gap:16},children:[h.jsxs("div",{className:"stack",style:{gap:12},children:[h.jsx(Ra,{slots:m.buckets.length,tickLabel:(f)=>Ml(m.buckets[f],m.last-m.first>Gl?Gl:m.bucketMs),tooltipTitle:(f)=>Rl(m.buckets[f],fa),series:m.series,hidden:s,kind:"line",stacked:!1,height:260,yMax:Math.max(1,m.max),format:(f)=>W(f,0),formatTooltip:(f)=>W(f,1),references:[{value:1,label:"100%"}],emptyLabel:"No utilization readings for this window",tooltipExtra:(f)=>{let c=m.exhausted[f];return c.length>0?h.jsxs("div",{className:"chart-tooltip-row",children:[h.jsx("span",{className:"chart-tooltip-label tone-bad",children:"Exhausted"}),h.jsx("span",{className:"chart-tooltip-value",children:c.join(", ")})]}):null}}),m.series.length>1&&h.jsx(Ee,{items:m.series.map((f)=>({key:f.key,label:f.label,color:f.color})),hidden:s,onToggle:d})]}),h.jsx("div",{className:"providers-accounts",children:h.jsx(pe,{rows:L,rowKey:(f)=>`${f.series.windowKey}::${f.series.accountKey}`,columns:wF,limit:16,onRowClick:(f)=>r({provider:f.series.provider,windowKey:f.series.windowKey}),dense:!0})})]})})})}function yF(a,o){let{POSITIVE_INFINITY:t,NEGATIVE_INFINITY:r}=Number;for(let k of a)for(let f of k.points){if(f.timestamp<t)t=f.timestamp;if(f.timestamp>r)r=f.timestamp}if(!(r>=t))return{buckets:[],bucketMs:fa,first:0,last:0,max:0,series:[],exhausted:[]};let s=r-t,d=CF.find((k)=>s/k<SF)??Gl,n=Je("all",[t],d,r),p=(k)=>Math.floor((k-n[0])/d),l=n.map(()=>[]),i=0,u=(k)=>o.get(k.accountKey)??k.accountLabel,L=[...a].sort((k,f)=>u(k).localeCompare(u(f))).map((k,f)=>{let c=n.map(()=>null),g=n.map(()=>0);for(let R of k.points){let S=p(R.timestamp);if(S<0||S>=n.length)continue;if(R.exhausted&&!l[S].includes(u(k)))l[S].push(u(k));if(R.usedFraction===null||R.timestamp<g[S])continue;c[S]=R.usedFraction,g[S]=R.timestamp,i=Math.max(i,R.usedFraction)}let x=null,b=0;for(let R=0;R<n.length;R++)if(c[R]!==null)x=c[R],b=g[R];else if(x!==null&&n[R]-b<=kF)c[R]=x;return{key:k.accountKey,label:u(k),color:Ke[f%Ke.length],values:c}});return{buckets:n,bucketMs:d,first:t,last:r,max:i,series:L,exhausted:l}}function vF(a){if(!a)return h.jsx("span",{className:"dim",children:"No reading"});if(a.exhausted)return h.jsx(fe,{tone:"bad",children:"Exhausted"});if(a.fraction>=0.8)return h.jsx(fe,{tone:"warn",children:"High"});return h.jsx(fe,{tone:"ok",children:"OK"})}var wF=[{key:"account",header:"Account",sort:(a)=>a.name,render:(a)=>h.jsxs("span",{className:"row",style:{gap:8},children:[h.jsx("span",{className:"providers-swatch-slot",children:a.color&&h.jsx(pa,{color:a.color})}),h.jsx("span",{className:"truncate providers-account",title:a.series.accountKey,children:a.name})]})},{key:"window",header:"Window",sort:(a)=>a.series.windowLabel,render:(a)=>h.jsx("span",{className:a.color?void 0:"muted",children:a.series.windowLabel})},{key:"latest",header:"Latest used",align:"right",sort:(a)=>a.latest?.fraction??-1,render:(a)=>a.latest?h.jsx(ve,{value:a.latest.fraction,max:1,display:W(a.latest.fraction,0),color:a.latest.exhausted?"var(--bad)":a.latest.fraction>=0.8?"var(--warn)":"var(--ok)"}):h.jsx("span",{className:"dim",children:"–"})},{key:"status",header:"Status",sort:(a)=>a.latest?.exhausted?2:(a.latest?.fraction??0)>=0.8?1:0,render:(a)=>vF(a.latest)},{key:"peak",header:"Peak in range",align:"right",sort:(a)=>a.peak??-1,render:(a)=>h.jsx("span",{className:"num",children:a.peak===null?"–":W(a.peak,0)})},{key:"samples",header:"Snapshots",align:"right",sort:(a)=>a.samples,render:(a)=>h.jsx("span",{className:"num muted",children:I(a.samples)})},{key:"recorded",header:"Recorded",align:"right",sort:(a)=>a.latest?.timestamp??0,render:(a)=>h.jsx("span",{className:"muted",children:a.latest?ue(a.latest.timestamp):"–"})}];var qa=require("react");var F=require("react/jsx-runtime"),_l={ok:{label:"OK",tone:"ok"},aborted:{label:"Aborted",tone:"warn"},failed:{label:"Failed",tone:"bad"}};function SD({id:a,onClose:o}){let t=le(["request",a],({signal:d})=>vq(a??0,d),{enabled:a!==null}),r=t.stale?null:t.data,s=r?_l[ua(r)]:null;return F.jsx(Gq,{open:a!==null,onClose:o,width:620,title:r?F.jsx("span",{className:"mono",children:r.model}):"Request",subtitle:r?F.jsxs(F.Fragment,{children:[r.provider," ·"," ",F.jsx("span",{title:Fe(r.timestamp),children:ue(r.timestamp)})]}):a!==null?F.jsxs("span",{className:"mono",children:["#",a]}):void 0,actions:r&&s?F.jsx(fe,{tone:s.tone,children:s.label}):void 0,children:r?F.jsx(PF,{details:r,aborted:ua(r)==="aborted"}):t.error?F.jsx(El,{error:t.error,onRetry:t.refetch}):F.jsxs("div",{className:"stack",style:{gap:12},children:[F.jsx(he,{height:56}),F.jsx(he,{height:120}),F.jsx(he,{height:120}),F.jsx(he,{height:220})]})})}function PF({details:a,aborted:o}){let{usage:t}=a,r=a.duration!==null&&a.duration>0&&t.output>0?t.output*1000/a.duration:null,{messages:s,output:d,...n}=a;return F.jsxs(F.Fragment,{children:[a.errorMessage&&F.jsxs("section",{className:"request-drawer-error","data-tone":o?"warn":"bad",role:"note",children:[F.jsx("div",{className:"request-drawer-error-label",children:o?"Aborted":"Error"}),F.jsx("pre",{className:"request-drawer-error-text",children:a.errorMessage})]}),F.jsxs("section",{children:[F.jsx("div",{className:"section-label",children:"Timing"}),F.jsx(na,{items:[{key:"at",label:"Started",value:Fe(a.timestamp)},{key:"duration",label:"Duration",value:se(a.duration)},{key:"ttft",label:"Time to first token",value:se(a.ttft)},{key:"tps",label:"Output tokens/s",value:_e(r)}]})]}),F.jsxs("section",{children:[F.jsx("div",{className:"section-label",children:"Tokens"}),F.jsx(na,{items:[{key:"input",label:"Uncached input",value:I(t.input)},{key:"cacheRead",label:"Cache read",value:I(t.cacheRead)},{key:"cacheWrite",label:"Cache write",value:I(t.cacheWrite)},{key:"output",label:"Output",value:I(t.output)},{key:"total",label:"Total",value:I(t.totalTokens)},{key:"premium",label:"Premium requests",value:I(Math.round((t.premiumRequests??0)*100)/100)}]})]}),F.jsxs("section",{children:[F.jsx("div",{className:"section-label",children:"API-equivalent cost"}),F.jsx(na,{items:[{key:"total",label:"Total",value:La(a,4)},{key:"input",label:"Input",value:ce(t.cost.input,4)},{key:"cacheRead",label:"Cache read",value:ce(t.cost.cacheRead,4)},{key:"cacheWrite",label:"Cache write",value:ce(t.cost.cacheWrite,4)},{key:"output",label:"Output",value:ce(t.cost.output,4)}]})]}),F.jsxs("section",{children:[F.jsx("div",{className:"section-label",children:"Identity"}),F.jsx(na,{items:[{key:"id",label:"Request id",value:a.id??"–"},{key:"entry",label:"Entry id",value:a.entryId},{key:"stop",label:"Stop reason",value:a.stopReason},{key:"api",label:"API",value:a.api},{key:"project",label:"Project",value:F.jsx("span",{title:a.folder,children:Xe(a.folder)})}]}),F.jsxs("div",{className:"request-drawer-file",children:[F.jsx("span",{className:"kv-key",children:"Session file"}),F.jsx("span",{className:"kv-value",children:a.sessionFile})]})]}),d!=null&&F.jsx(Ol,{data:d,title:"Output message"}),F.jsx(Ol,{data:s,title:"Session entry",initialCollapsed:!0}),F.jsx(Ol,{data:n,title:"Stats row",initialCollapsed:!0})]})}var B=require("react/jsx-runtime"),lq=[500,2000,1e4];function nq({active:a,range:o,onRequestClick:t}){let[r,s]=qa.useState(0),d=lq[r],n=le(["requests-log",d],({signal:S})=>Tl(d,S),{enabled:a}),[p,l]=qa.useState(""),[i,u]=qa.useState("all"),m=ie(o),L=qa.useMemo(()=>{let S=n.data??[],V=m.spanMs===null?null:Date.now()-m.spanMs,_=V===null?S:S.filter((v)=>v.timestamp>=V),D=!n.stale&&(S.length<d||V!==null&&_.length<S.length),T={all:_.length,ok:0,aborted:0,failed:0};for(let v of _)T[ua(v)]++;return{loaded:S.length,inRange:_,complete:D,counts:T,summary:iD(_)}},[n.data,n.stale,d,m.spanMs]),k=qa.useMemo(()=>{let S=p.trim().toLowerCase();return L.inRange.filter((V)=>(i==="all"||ua(V)===i)&&(S===""||V.model.toLowerCase().includes(S)||V.provider.toLowerCase().includes(S)||V.folder.toLowerCase().includes(S)))},[L.inRange,p,i]),{summary:f,counts:c,complete:g}=L,x=r+1<lq.length?lq[r+1]:null,b=x!==null?B.jsx("button",{type:"button",className:"btn","data-size":"sm",disabled:n.refreshing,onClick:()=>s(r+1),children:n.refreshing&&n.stale?"Loading…":`Load latest ${I(x)}`}):void 0,R=["all","ok","aborted","failed"].map((S)=>({value:S,label:B.jsxs(B.Fragment,{children:[S==="all"?"All":_l[S].label," ",B.jsx("span",{className:"dim num",children:U(c[S])})]})}));return B.jsxs("div",{className:"page",children:[B.jsx(ye,{title:"Requests",description:`Every model call DeepSeek Harness made in ${m.windowLabel}, newest first. Open a row for its full payload.`}),B.jsx(E,{query:n,skeleton:B.jsx(he,{height:96,style:{borderRadius:12}}),children:()=>B.jsx("div",{"data-stale":n.stale,children:B.jsxs(Ce,{min:160,children:[B.jsx(q,{label:"Requests",value:I(f.requests),hint:f.oldest===null?`none in ${m.windowLabel}`:`since ${ue(f.oldest)}`}),B.jsx(q,{label:"Failed",value:I(f.failed),hint:`${f.requests>0?Be(f.failed/f.requests):"–"} · ${I(f.aborted)} aborted`}),B.jsx(q,{label:"Tokens",title:"Total tokens across these requests",value:U(f.tokens)}),B.jsx(q,{label:"API-equivalent cost",title:"What these requests would cost at public API rates",value:ee(f.cost,f.unpriced),hint:f.unpriced>0?`${I(f.unpriced)} unpriced`:void 0}),B.jsx(q,{label:"Median duration",value:se(f.medianDuration),hint:`p95 ${se(f.p95Duration)}`}),B.jsx(q,{label:"Median TTFT",title:"Time to first token",value:se(f.medianTtft)})]})})}),B.jsx(G,{index:1,title:"Request log",description:n.data===null?"Loading the latest requests…":g?`${I(k.length)} of ${I(f.requests)} requests in ${m.windowLabel}`:`${I(k.length)} of the latest ${I(f.requests)} requests`,actions:B.jsxs(B.Fragment,{children:[B.jsx(zs,{value:p,onChange:l,placeholder:"Model, provider or project"}),B.jsx(De,{size:"sm","aria-label":"Status",options:R,value:i,onChange:u})]}),flush:!0,stale:n.stale,footer:n.data!==null&&!g?B.jsxs(B.Fragment,{children:[B.jsxs("span",{children:["Showing the latest ",I(L.loaded)," requests, back to"," ",f.oldest===null?"–":Fe(f.oldest),". Older requests in"," ",m.windowLabel," are not loaded."]}),b]}):void 0,children:B.jsx(E,{query:n,skeleton:B.jsx(ge,{rows:12}),children:()=>B.jsx(pe,{rows:k,rowKey:(S)=>S.id??`${S.sessionFile}:${S.entryId}`,onRowClick:(S)=>S.id!==void 0&&t(S.id),columns:RF,initialSort:{key:"time",dir:"desc"},limit:100,dense:!0,empty:B.jsx(J,{title:f.requests===0?`No requests in ${m.windowLabel}`:"No requests match",hint:f.requests===0?void 0:"Clear the search or status filter."})})})})]})}var RF=[{key:"model",header:"Model",sort:(a)=>a.model,render:(a)=>B.jsx(we,{primary:B.jsx("span",{className:"mono",children:a.model}),secondary:a.provider})},{key:"time",header:"When",sort:(a)=>a.timestamp,render:(a)=>B.jsx("span",{className:"muted",title:Fe(a.timestamp),children:ue(a.timestamp)})},{key:"project",header:"Project",sort:(a)=>a.folder,render:(a)=>B.jsx("span",{className:"mono muted truncate",title:a.folder,style:{display:"block",maxWidth:180},children:Xe(a.folder)})},{key:"input",header:"Input",title:"Uncached input tokens",align:"right",sort:(a)=>a.usage.input,render:(a)=>B.jsx("span",{className:"num",children:U(a.usage.input)})},{key:"cache",header:"Cache read",title:"Cache read tokens (hover a cell for cache writes)",align:"right",sort:(a)=>a.usage.cacheRead,render:(a)=>B.jsx("span",{className:"num",title:`Cache write: ${I(a.usage.cacheWrite)}`,children:U(a.usage.cacheRead)})},{key:"output",header:"Output",align:"right",sort:(a)=>a.usage.output,render:(a)=>B.jsx("span",{className:"num",children:U(a.usage.output)})},{key:"cost",header:"Cost",title:"API-equivalent estimate",align:"right",sort:(a)=>a.usage.cost.total,render:(a)=>B.jsx("span",{className:"num",children:La(a,4)})},{key:"duration",header:"Duration",align:"right",sort:(a)=>a.duration??-1,render:(a)=>B.jsx("span",{className:"num",children:se(a.duration)})},{key:"ttft",header:"TTFT",title:"Time to first token",align:"right",sort:(a)=>a.ttft??-1,render:(a)=>B.jsx("span",{className:"num muted",children:se(a.ttft)})},{key:"status",header:"Status",sort:(a)=>ua(a),render:(a)=>{let o=_l[ua(a)];return B.jsx("span",{title:a.errorMessage??void 0,children:B.jsx(we,{lead:B.jsx(ql,{tone:o.tone}),primary:o.label,secondary:B.jsx("span",{className:"mono",children:a.stopReason})})})}}];var ke=require("react/jsx-runtime");function kD(){return ke.jsx(Bq,{children:ke.jsx(MF,{})})}function MF(){let[a,o]=ka.useState("overview"),[t,r]=ka.useState("24h"),[s,d]=ka.useState(null),n=ka.useCallback(()=>d(null),[]),p=ka.useRef(new Set);p.current.add(a);let l=(i)=>{let u=i===a;switch(i){case"overview":return ke.jsx(oq,{active:u,range:t,onRequestClick:d});case"models":return ke.jsx(tq,{active:u,range:t});case"providers":return ke.jsx(sq,{active:u,range:t});case"costs":return ke.jsx(YA,{active:u,range:t});case"requests":return ke.jsx(nq,{active:u,range:t,onRequestClick:d});case"errors":return ke.jsx(aq,{active:u,range:t,onRequestClick:d});case"projects":return ke.jsx(rq,{active:u,range:t});default:return null}};return ke.jsxs("div",{className:"omp-app",children:[ke.jsx(Qq,{section:a,onSectionChange:o,range:t,onRangeChange:r,children:[...p.current].map((i)=>ke.jsx("div",{hidden:i!==a,children:l(i)},i))}),ke.jsx(SD,{id:s,onClose:n})]})}var bD=`/* ==========================================================================
   omp stats — design system
   Pure-black chassis, one inset panel, hairline edges, one accent gradient.
   Page-specific styles live next to their route (\`routes/*.css\`).
   ========================================================================== */

/*
 * 面板运行在 shadow root 里：\`:root\` 在 shadow 树中匹配不到元素，令牌必须挂在
 * shadow host 上。抽屉和弹窗 portal 到与 \`.omp-root\` 平级的 \`.omp-portal\`，
 * 只有 host 上的变量能同时继承给应用内容和覆盖层。
 */
:host,
:host([data-theme="dark"]) {
	color-scheme: dark;

	/* Surface ramp: each step rises one notch off the page. */
	--bg: #000;
	--panel: #09090a;
	--card: #0e0e10;
	--raised: #17171a;
	--overlay: rgba(14, 14, 16, 0.78);
	--hover: rgba(255, 255, 255, 0.035);
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

:host([data-theme="light"]) {
	color-scheme: light;

	--bg: #f2f2f3;
	--panel: #ffffff;
	--card: #ffffff;
	--raised: #f6f6f7;
	--overlay: rgba(255, 255, 255, 0.8);
	--hover: rgba(0, 0, 0, 0.03);
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

:host {
	--font-sans: "Inter var", "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
	--font-mono: ui-monospace, "SF Mono", "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace;

	--r-control: 8px;
	--r-card: 12px;
	--r-panel: 16px;
	--r-pill: 999px;

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

@media (prefers-reduced-motion: reduce) {
	*,
	*::before,
	*::after {
		animation-duration: 1ms !important;
		animation-delay: 0ms !important;
		transition-duration: 1ms !important;
	}
}

.drawer-scrim {
	position: absolute;
	inset: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 60;
	animation: fade var(--dur-2) var(--ease) both;
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

.grid-main-side {
	grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
}

@media (max-width: 1100px) {

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
	position: absolute;
	top: 8px;
	right: 8px;
	bottom: 8px;
	width: min(var(--drawer-w, 560px), calc(100% - 16px));
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
	position: absolute;
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
 * 颜色全部来自 omp 的 --* 变量（由 shadow host 上的 data-theme 选择）。
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

/* Drawer/Modal 通过 portal 渲染到 .omp-portal。容器贴合面板边界，抽屉和遮罩
 * 相对面板定位，否则 \`position: fixed\` 会把遮罩铺满整个宿主窗口。 */
:host {
	position: relative;
}

.omp-portal {
	position: absolute;
	inset: 0;
	z-index: 1000;
	pointer-events: none;
}

.omp-portal > * {
	pointer-events: auto;
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
`;var dq={Jan:"1月",Feb:"2月",Mar:"3月",Apr:"4月",May:"5月",Jun:"6月",Jul:"7月",Aug:"8月",Sep:"9月",Oct:"10月",Nov:"11月",Dec:"12月"},TF={"the last hour":"最近 1 小时","the last 24 hours":"最近 24 小时","the last 7 days":"最近 7 天","the last 30 days":"最近 30 天","the last 90 days":"最近 90 天","all time":"全部时间"};function Qe(a){return TF[a]??a}var AF={Overview:"概览",Models:"模型",Providers:"供应商",Costs:"成本",Requests:"请求",Errors:"错误",Projects:"项目",Stats:"统计",stats:"统计",Live:"实时",Offline:"离线",Indexing:"索引中",Error:"错误","Refresh session data":"刷新会话数据","Time range":"时间范围","Stats pages":"统计页面","1h":"1 小时","24h":"24 小时","7d":"7 天","30d":"30 天","90d":"90 天",All:"全部","the last hour":"最近 1 小时","the last 24 hours":"最近 24 小时","the last 7 days":"最近 7 天","the last 30 days":"最近 30 天","the last 90 days":"最近 90 天","all time":"全部时间","the last hour (1)":"最近 1 小时（1）","the last 24 hours (2)":"最近 24 小时（2）","the last 7 days (3)":"最近 7 天（3）","the last 30 days (4)":"最近 30 天（4）","the last 90 days (5)":"最近 90 天（5）","all time (6)":"全部时间（6）","API-equivalent":"API 等价","API-equivalent cost":"API 等价成本","API-equivalent estimate":"API 等价估算","API-equivalent estimate at public rates":"按公开价格估算的 API 等价成本","API-equivalent cost at public API rates":"按公开 API 价格估算的 API 等价成本","Conversation tokens":"会话 Token","Cache rate":"缓存命中率","Cache savings":"缓存节省","Error rate":"错误率","Uncached input":"未缓存输入","Cache read":"缓存读取","Cache write":"缓存写入",Output:"输出",Input:"输入","Premium requests":"高级请求","Premium requests (subscription multiplier units)":"高级请求（订阅倍率单位）","Tokens/s":"Token/秒","Avg latency":"平均延迟","Avg TTFT":"平均 TTFT","Avg duration":"平均耗时","Avg output":"平均输出","Average output throughput":"平均输出吞吐","Average output tokens per second":"平均输出 Token/秒","Average time to first token":"平均首 token 时间","Models used":"使用模型","Most used":"最常用","Top model":"最常用模型",Failed:"失败",Succeeded:"成功","Main agent":"主代理",Subagents:"子代理",Advisor:"顾问",Activity:"活动","Token mix":"Token 构成","Latest requests":"最新请求","Request log":"请求日志","Request share":"请求占比","All models":"全部模型","All requests":"全部请求","Provider totals":"供应商汇总","Burn by provider":"按供应商消耗","Peak burn hours":"高峰时段","Subscription windows":"订阅窗口","Window utilization":"窗口利用率","Where it went":"成本去向","By model":"按模型","By component":"按计费项","Daily estimate":"每日估算","Top by cost":"按成本排序","Top by requests":"按请求排序","Error signatures":"错误签名","Failures per model":"按模型的失败","Affected models":"受影响模型",Failures:"失败",Signatures:"错误签名","Last failure":"最近失败","Last seen":"最近出现","Last active":"最近活动",Folders:"项目",Folder:"项目",Project:"项目",Provider:"供应商",Model:"模型",Share:"占比",Cost:"成本",Tokens:"Token",Status:"状态",When:"时间",Duration:"耗时",Window:"窗口",Accounts:"账户",Resets:"重置","Windows burned":"消耗窗口","Tokens / window":"每窗口 Token","Peak utilization":"峰值利用率",Exhaustions:"耗尽次数","Latest used":"最近使用",Account:"账户","Accounts needed":"所需账户",Recorded:"已记录",Snapshots:"快照",Unpriced:"未定价","Unpriced requests":"未定价请求",Split:"拆分","Split by":"拆分方式",OK:"正常",Aborted:"已中止","Unknown error":"未知错误","Load more":"加载更多","Loading…":"加载中…",Request:"请求",Timing:"耗时",Identity:"标识",Started:"开始时间","Time to first token":"首 token 时间","Output tokens/s":"输出 Token/秒",Total:"合计","Request id":"请求 ID","Entry id":"事件 ID","Stop reason":"结束原因",API:"API","Session file":"会话文件","Output message":"输出消息","Session entry":"会话事件","Stats row":"统计行","Open navigation":"打开导航","Open this request's session in the trace view":"在追踪视图中打开此请求的会话","Show all":"显示全部","Filter folders…":"筛选项目…",Search:"搜索",Close:"关闭",Cancel:"取消",Retry:"重试",Clear:"清除","Pick a wider range in the top bar.":"在顶部选择更长的时间范围。","Try a longer range.":"试试更长的时间范围。","Temporary folders are hidden.":"临时目录已隐藏。","Every request succeeded or was aborted.":"所有请求都成功或被中止。","Clear the search or the selected filters.":"清除搜索或已选筛选。","No usage in this range":"此时间范围内没有用量","No model usage in this range":"此时间范围内没有模型用量","No project folders in this range":"此时间范围内没有项目目录","Only temporary folders in this range":"此时间范围内只有临时目录","No folders match":"没有匹配的项目","No affected models":"没有受影响模型","No failures match":"没有匹配的失败","No priced usage in this range":"此时间范围内没有可定价用量","No provider activity in this range":"此时间范围内没有供应商活动","No requests in this range":"此时间范围内没有请求","No usage snapshots in this range":"此时间范围内没有用量快照","No utilization readings for this window":"此窗口没有利用率读数","No activity in this range":"此时间范围内没有活动","Nothing priced yet":"还没有可定价数据","No performance samples":"没有性能样本","Most recent model calls across every session":"所有会话中最近的模型调用","Where conversation tokens went":"会话 Token 的去向","Per hour":"每小时","Per 5 minutes":"每 5 分钟","Per day":"每天","Click a row for latency and throughput over time":"点击行查看延迟和吞吐随时间的变化","What this usage would cost at public API rates":"按公开 API 价格估算这些用量","Uncached input + cache reads + cache writes + output":"未缓存输入 + 缓存读取 + 缓存写入 + 输出","Cache reads ÷ (uncached input + cache reads)":"缓存读取 ÷（未缓存输入 + 缓存读取）","Cache reads ÷ (uncached input + cache reads), across every folder":"缓存读取 ÷（未缓存输入 + 缓存读取），跨所有项目","Estimate per model with its input, output and cache split":"按模型估算，并拆分输入、输出和缓存","Per UTC day, stacked by model":"按 UTC 日，按模型堆叠","Per UTC day, stacked by billing component":"按 UTC 日，按计费项堆叠","Estimate by billing component":"按计费项估算","Estimate ÷ days with any usage":"估算 ÷ 有用量的天数","Estimate ÷ priced requests":"估算 ÷ 已定价请求","Estimate ÷ requests that have a public price":"估算 ÷ 有公开价格的请求","Requests with no public-equivalent price":"没有公开等价价格的请求","Subscription usage with no public-equivalent price; excluded from the estimate":"没有公开等价价格的订阅用量，不计入估算","Subscription usage without a public price is counted as unpriced, not free.":"没有公开价格的订阅用量计入未定价，不按免费处理。","Input · output · cache read · cache write":"输入 · 输出 · 缓存读取 · 缓存写入","Average per day":"日均","Per request":"每次请求","Per priced request":"每个已定价请求","all usage priced":"全部用量已定价","excluded from the estimate":"不计入估算","Cost is an API-equivalent estimate. Select a row for its token mix.":"成本是 API 等价估算。选择一行查看 Token 构成。","Peak of summed used fraction across accounts at any sampled instant; the bar is relative to fleet capacity":"所有账户已用比例之和的采样峰值；条形相对于总容量","Provider tokens burned in range ÷ windows burned — what one full window is worth":"范围内消耗的供应商 Token ÷ 消耗窗口数——一个完整窗口的价值","Accounts needed to keep peak demand under 90% of fleet capacity":"把峰值需求控制在总容量 90% 以下所需账户数","Subscription-window equivalents consumed in range (sum of used-fraction increases across accounts)":"范围内消耗的订阅窗口等价数（所有账户已用比例增量之和）","Transitions into an exhausted state observed in range":"范围内观察到的耗尽状态转换","Window resets observed (drops in used fraction)":"观察到的窗口重置（已用比例下降）","Tokens by local hour of day":"按本地小时统计 Token","DSH does not record subscription usage snapshots; this panel only shows local session usage.":"DSH 不记录订阅用量快照；此面板只展示本机会话用量。","Fraction of all tokens in range":"占范围内全部 Token 的比例","Peak in range":"范围内峰值","Distinct models used through this provider":"通过此供应商使用的不同模型数","Distinct error messages after normalizing ids and numbers":"归一化 id 和数字后的不同错误消息","Same message with ids and counters normalized. Select one to filter the failures below.":"id 和计数器归一化后的相同消息。选择一条筛选下方失败。","Failures per model. Select one to filter.":"按模型的失败。选择一项筛选。","Message, model or project":"消息、模型或项目","Model, provider or project":"模型、供应商或项目","What one usage window buys you and how many accounts peak demand needs. Select a row to chart it.":"一个用量窗口能买多少，以及峰值需求需要多少账户。选择一行绘制图表。","Too little of the window was consumed to extrapolate":"窗口消耗太少，无法外推","Share of API-equivalent cost":"API 等价成本占比","Share of all requests":"全部请求占比","Prompt-input cost saved versus billing the same tokens uncached":"缓存读取相对未缓存计费节省的提示输入成本","Session folders under /tmp or /var/folders":"/tmp 或 /var/folders 下的会话目录","Model performance":"模型性能","Model share":"模型占比",Trend:"趋势","Timing is recorded for streamed responses.":"只有流式响应会记录耗时。",Other:"其他",Unknown:"未知"},qF=[[/^Everything DeepSeek Harness did across your sessions in (.+)\.$/u,(a)=>`DeepSeek Harness 在${Qe(a[1])}内的全部活动。`],[/^Which models did the work in (.+), and how fast they answered\.$/u,(a)=>`${Qe(a[1])}内哪些模型在干活，响应有多快。`],[/^Usage by session folder in (.+)\.$/u,(a)=>`${Qe(a[1])}内按会话目录统计的用量。`],[/^Burn, reliability and subscription headroom per provider over (.+)\.$/u,(a)=>`${Qe(a[1])}内各供应商的消耗、可靠性和订阅余量。`],[/^What (.+) of usage would cost at public API rates\. Subscription usage without a public price is counted as unpriced, not free\.$/u,(a)=>`按公开 API 价格估算${Qe(a[1])}的用量成本。没有公开价格的订阅用量计入未定价，不按免费处理。`],[/^Every model call DeepSeek Harness made in (.+), newest first\. Open a row for its full payload\.$/u,(a)=>`DeepSeek Harness 在${Qe(a[1])}内的每次模型调用，最新的在前。点击行查看详情。`],[/^Failed model requests in (.+), grouped by error signature\. Open a failure for its full payload\.$/u,(a)=>`${Qe(a[1])}内失败的模型请求，按错误签名分组。点击失败查看详情。`],[/^No failures in (.+)$/u,(a)=>`${Qe(a[1])}内没有失败`],[/^Showing the latest ([\d,]+) failures in (.+); older ones are not loaded\.$/u,(a)=>`显示${Qe(a[2])}内最新 ${a[1]} 次失败；更早的没有加载。`],[/^([\d,]+) of the latest ([\d,]+) requests$/u,(a)=>`最新 ${a[2]} 次请求中的 ${a[1]} 次`],[/^([\d,]+) of ([\d,]+) requests in (.+)$/u,(a)=>`${Qe(a[3])}内 ${a[2]} 次请求中的 ${a[1]} 次`],[/^([\d,]+) of ([\d,]+) folders$/u,(a)=>`${a[2]} 个项目中的 ${a[1]} 个`],[/^([\d,.]+) failed$/u,(a)=>`${a[1]} 次失败`],[/^([\d,.]+) succeeded$/u,(a)=>`${a[1]} 次成功`],[/^([\d,.]+) aborted$/u,(a)=>`${a[1]} 次中止`],[/^([\d,.]+) unpriced$/u,(a)=>`${a[1]} 个未定价`],[/^([\d,.]+) requests?$/u,(a)=>`${a[1]} 次请求`],[/^([\d,.]+) models?$/u,(a)=>`${a[1]} 个模型`],[/^([\d,.]+) folders?$/u,(a)=>`${a[1]} 个项目`],[/^([\d,.]+) providers?$/u,(a)=>`${a[1]} 个供应商`],[/^([\d,.]+) accounts?$/u,(a)=>`${a[1]} 个账户`],[/^([\d,.]+) windows? burned$/u,(a)=>`${a[1]} 个窗口`],[/^([\d,.]+) resets?$/u,(a)=>`${a[1]} 次重置`],[/^([\d,.]+)% saved$/u,(a)=>`节省 ${a[1]}%`],[/^([\d,.]+) req$/u,(a)=>`${a[1]} 次请求`],[/^since (.+)$/iu,(a)=>`自 ${Sl(a[1])??a[1]}`],[/^Indexing ([\d,]+)\/([\d,]+)$/u,(a)=>`索引中 ${a[1]}/${a[2]}`],[/^Indexing$/u,()=>"索引中"],[/^across ([\d,]+) providers?$/u,(a)=>`覆盖 ${a[1]} 个供应商`],[/^([\d,]+) temporary$/u,(a)=>`${a[1]} 个临时`],[/^Hide temporary \(([\d,]+)\)$/u,(a)=>`隐藏临时目录（${a[1]}）`],[/^Load latest ([\d,]+)$/u,(a)=>`加载最新 ${a[1]} 条`],[/^Top (\d+)$/u,(a)=>`前 ${a[1]} 名`],[/^Peak at (.+)$/u,(a)=>`峰值在 ${a[1]}`],[/^peak at (.+)$/u,(a)=>`峰值在 ${a[1]}`],[/^(.+) of (.+)$/u,(a)=>`${Sl(a[1])??a[1]} / ${Sl(a[2])??a[2]}`],[/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2})$/u,(a)=>`${dq[a[1]]}${a[2]}日`],[/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}) (\d{2}):(\d{2})$/u,(a)=>`${dq[a[1]]}${a[2]}日 ${a[3]}:${a[4]}`],[/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}), (\d{2}):(\d{2}):(\d{2})$/u,(a)=>`${dq[a[1]]}${a[2]}日 ${a[3]}:${a[4]}:${a[5]}`],[/^(\d+) seconds? ago$/u,(a)=>`${a[1]} 秒前`],[/^(\d+) minutes? ago$/u,(a)=>`${a[1]} 分钟前`],[/^(\d+) hours? ago$/u,(a)=>`${a[1]} 小时前`],[/^(\d+) days? ago$/u,(a)=>`${a[1]} 天前`],[/^(\d+) months? ago$/u,(a)=>`${a[1]} 个月前`],[/^(\d+) years? ago$/u,(a)=>`${a[1]} 年前`],[/^in (\d+) seconds?$/u,(a)=>`${a[1]} 秒后`],[/^in (\d+) minutes?$/u,(a)=>`${a[1]} 分钟后`],[/^in (\d+) hours?$/u,(a)=>`${a[1]} 小时后`],[/^in (\d+) days?$/u,(a)=>`${a[1]} 天后`],[/^yesterday$/u,()=>"昨天"],[/^today$/u,()=>"今天"],[/^just now$/u,()=>"刚刚"],[/^last week$/u,()=>"上周"],[/^last month$/u,()=>"上个月"],[/^last year$/u,()=>"去年"]];function uq(a){return String(a??"").toLowerCase().startsWith("zh")}function Sl(a){let o=AF[a];if(o!==void 0)return o;for(let[t,r]of qF){let s=a.match(t);if(s)return r(s)}return null}function DF(a,o=!0){if(!o||!a)return a;let t=a.match(/^\s*/u)?.[0]??"",r=a.match(/\s*$/u)?.[0]??"",s=a.trim();if(!s)return a;let d=Sl(s);return d===null?a:`${t}${d}${r}`}function BF(a,o=!0){if(!o||!a)return a;let t=a.trim(),r=Sl(t);return r===null?a:r}var yD=".mono, .num, .code-block, pre, code, style, script, textarea, [data-i18n-skip]",vD=["title","aria-label","placeholder","alt"];function wD(a,o){let t=new WeakMap,r=new WeakMap,s=new WeakMap,d={subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:vD},n=null,p=!1,l=!1,i=!1,u=(c)=>{let g=c.parentElement;return g===null||g.closest(yD)!==null},m=(c)=>{let g=document.createTreeWalker(a,NodeFilter.SHOW_TEXT);for(let x=g.nextNode();x;x=g.nextNode()){if(u(x))continue;let b=x.data;if(c){let R=r.get(x),S=t.get(x);if(S===void 0||b!==R&&b!==S)t.set(x,b);let V=DF(t.get(x),!0);if(b!==V)x.data=V;r.set(x,V)}else{let R=t.get(x);if(R!==void 0&&b!==R)x.data=R}}},L=(c)=>{for(let g of a.querySelectorAll("*")){if(g.closest(yD)!==null)continue;let x=s.get(g);for(let b of vD){let R=g.getAttribute(b);if(R===null)continue;if(x===void 0)x=new Map,s.set(g,x);if(c){if(!x.has(b))x.set(b,R);let S=BF(x.get(b),!0);if(R!==S)g.setAttribute(b,S)}else if(x.has(b)){let S=x.get(b);if(R!==S)g.setAttribute(b,S)}}}},k=()=>{if(p||i)return;p=!0,n?.disconnect();let c=uq(o());m(c),L(c),n?.observe(a,d),p=!1};return n=new MutationObserver(()=>{if(l||i)return;l=!0;let c=()=>{if(l=!1,!i)k()};if(typeof requestAnimationFrame==="function")requestAnimationFrame(c);else setTimeout(c,0)}),n.observe(a,d),queueMicrotask(()=>{if(!i)k()}),{apply:k,dispose(){i=!0,n?.disconnect(),n=null}}}var kl=require("react/jsx-runtime"),PD="omp-stats",iq=null;function FF(){let a=document.body?.getAttribute("data-ds-dark-theme");if(a!==null&&a!==void 0&&a!=="false")return"dark";let o=document.documentElement.dataset.theme;if(o==="dark"||o==="light")return o;let t=document.body?.dataset?.theme;if(t==="dark"||t==="light")return t;return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function NF(){let a=Xl.useRef(null);return Xl.useEffect(()=>{let o=a.current;if(!o)return;let t=o.shadowRoot??o.attachShadow({mode:"open"});t.replaceChildren();let r=document.createElement("style");r.textContent=bD,t.append(r);let s=document.createElement("div");s.className="omp-root",t.append(s);let d=document.createElement("div");d.className="omp-portal",t.append(d),$A(d);let n=()=>{o.dataset.theme=FF()};n();let p=new MutationObserver(n);if(p.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme","class"]}),document.body)p.observe(document.body,{attributes:!0,attributeFilter:["data-ds-dark-theme","data-theme","class"]});let l=window.matchMedia("(prefers-color-scheme: dark)");l.addEventListener("change",n);let i=wD(t,()=>iq?.getSnapshot().active??navigator.language),u=iq?.subscribe(i.apply),m=RD.createRoot(s);return m.render(kl.jsx(kD,{})),()=>{u?.(),i.dispose(),m.unmount(),p.disconnect(),l.removeEventListener("change",n),$A(null),t.replaceChildren()}},[]),kl.jsx("div",{ref:a,className:"omp-stats-host",style:{height:"100%",minHeight:0}})}function OF({size:a=20,active:o=!1}){return kl.jsx("svg",{viewBox:wl,width:a,height:a,"aria-hidden":"true","data-active":o,preserveAspectRatio:"xMidYMid meet",style:{display:"block"},children:kl.jsx("path",{d:vl,fill:"currentColor"})})}var UF=["slots","locale"];function HF(a){iq=a.locale,a.slots.inject("sidebar.panellist",()=>a.slots.register({name:"sidebar.panellist",id:PD,order:20,label:()=>uq(a.locale.getSnapshot().active)?"统计":"Stats"},OF)),a.slots.inject("main",()=>a.slots.register({name:"main",key:PD},NF))}

    return module.exports;
  },
});
