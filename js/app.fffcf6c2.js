(()=>{"use strict";var e={5783:(e,t,o)=>{o(8964),o(702);var r=o(1957),n=o(8266),a=o(499),l=o(9835);function i(e,t,o,r,n,a){const i=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(i,null,{default:(0,l.w5)((({Component:e})=>[((0,l.wg)(),(0,l.j4)((0,l.LL)(e)))])),_:1})}var s=o(5457),u=o(9302),c=o(5808);const p={"app:home":"img:app_icons/i_home.svg"},d=(0,l.aZ)({name:"App",data(){return{pageTitle:document.title,mainDrawer:!1,request:{new:!1,task:!1,project:!1}}},setup(){const e=(0,u.Z)();e.iconMapFn=e=>{const t=p[e];if(void 0!==t)return{icon:t}};const t=(0,a.iH)(c.Z.metaData);async function o(e){Object.keys(e).forEach((o=>{t.value[o]=e[o]}))}function r(e){return e?t.value[e]:t}return(0,s.Z)((()=>{let e={};return Object.keys(t.value).forEach((o=>{e[o]=t.value[o]})),e})),{setMeta:o,getMeta:r}},watch:{["config.metaData"]:{async handler(e){this.pageTitle=`${e.title}`},deep:!0}},methods:{toggleMainDrawer(e=null){void 0!==this.mainDrawer&&(this.mainDrawer=null!==e&&"boolean"===typeof e?e:!this.mainDrawer)},toggleRequest(e,t=null){if(e){if(void 0===this.request[e])return;this.request[e]=null!==t&&"boolean"===typeof t?t:!this.request[e]}else this.request.new=null!==t&&"boolean"===typeof t?t:!this.request.new}}});var f=o(1639);const h=(0,f.Z)(d,[["render",i]]),m=h;var g=o(3340),b=o(8339);const v=[{path:"/",component:()=>Promise.all([o.e(736),o.e(898)]).then(o.bind(o,9898)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(148)]).then(o.bind(o,9148))},{path:"brands",component:()=>Promise.all([o.e(736),o.e(178)]).then(o.bind(o,9178))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(253)]).then(o.bind(o,253))}],w=v,y=(0,g.BC)((function(){const e=b.r5,t=(0,b.p7)({scrollBehavior:()=>({left:0,top:0}),routes:w,history:e("")});return t}));async function k(e,t){const o=e(m);o.use(n.Z,t);const r=(0,a.Xl)("function"===typeof y?await y({}):y);return{app:o,router:r}}const C={config:{}},T="";async function j({app:e,router:t},o){let r=!1;const n=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},a=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let s=0;!1===r&&s<o.length;s++)try{await o[s]({app:e,router:t,ssrContext:null,redirect:a,urlPath:l,publicPath:T})}catch(i){return i&&i.url?void a(i.url):void console.error("[Quasar] boot error:",i)}!0!==r&&(e.use(t),e.mount("#q-app"))}k(r.ri,C).then((e=>Promise.all([Promise.resolve().then(o.bind(o,1294)),Promise.resolve().then(o.bind(o,1569))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));j(e,o)}))))},5808:(e,t,o)=>{o.d(t,{Z:()=>r});const r={default:{message:{welcome:"Hello, friend.",bye:"Goodbye, friend!",bug:"\nA bug is never just a mistake.\nIt represents something bigger.\nAn error of thinking.\nThat makes you who you are.\n"}},localStorageKeys:{},metaData:{title:"Growmodo Hub",titleTemplate:e=>`Growmodo | ${e}`,meta:{description:{name:"description",content:"App"},keywords:{name:"keywords",content:"Growmodo Hub"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"},ogTitle:{property:"og:title",template(e){return`${e}`}}},link:{},script:{},htmlAttr:{},bodyAttr:{},noscript:{default:"Javascript is Required"}}}},1569:(e,t,o)=>{o.r(t),o.d(t,{api:()=>l,default:()=>i});var r=o(3340),n=o(9981),a=o.n(n);const l=a().create({baseURL:"https://api.example.com"}),i=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=l}))},1294:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var r=o(3340),n=o(2246),a=o(5808);const l={console:()=>{console.log("%c"+a.Z["default"].message.welcome,"color: grey; font-family:system-ui; font-size: 3rem; font-weight: bold"),console.log("%c"+a.Z["default"].message.bug,"color: silver; font-size: 1.5em; text-weight: bold;")}};var i=o(9835),s=o(6970);function u(e,t,o,r,n,a){const l=(0,i.up)("q-tooltip");return(0,i.wg)(),(0,i.j4)(l,{onShow:e.onShow,class:(0,s.C_)(["tooltip q-pa-none",`tooltip-arrow-${e.arrowClass} shadow-${e.shadow}`]),ref:"tooltipRef"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:(0,s.C_)(["tooltip-text relative-position",`bg-${e.bgColor} text-${e.color}`])},[(0,i.WI)(e.$slots,"default")],2),"none"!==e.arrowClass?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,s.C_)(["tooltip-arrow absolute",`bg-${e.bgColor} shadow-${e.shadow}`])},null,2)):(0,i.kq)("",!0)])),_:3},8,["onShow","class"])}o(8964),o(6727);var c=o(499);const p=(0,i.aZ)({name:"Custom_Tooltip",props:{arrow:{type:String,default:"none"},duration:{type:Number,default:null},bgColor:{type:String,default:"primary"},color:{type:String,default:"white"},shadow:{type:[Number,String],default:0}},setup(e){const t=(0,c.iH)(null),o=(0,i.Fl)((()=>{let t=e.arrow.replace(" ","-"),o=["none","top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"];return o.includes(t)?e.arrow.replace(" ","-"):(console.error(`Value "${t}" not allowed for "arrow" prop. Use one of these: `,o),"top")})),r=()=>{e.duration&&setTimeout((()=>{t.value&&t.value&&t.value.hide()}),e.duration)};return{arrowClass:o,tooltipRef:t,onShow:r}}});var d=o(1639),f=o(6858),h=o(9984),m=o.n(h);const g=(0,d.Z)(p,[["render",u]]),b=g;m()(p,"components",{QTooltip:f.Z});const v=(0,r.xr)((async({app:e})=>{l.console(),n.Z.set(),e.config.globalProperties.$config=a.Z,e.config.globalProperties.$lskeys=a.Z.localStorageKeys,e.component("tooltip-pro",b)}))}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,r,n,a)=>{if(!r){var l=1/0;for(c=0;c<e.length;c++){for(var[r,n,a]=e[c],i=!0,s=0;s<r.length;s++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(i=!1,a<l&&(l=a));if(i){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{148:"59b23cc0",178:"b6f8a3bd",253:"b1e54fed",898:"1a944d78"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"45405bc3",148:"ee332660",736:"84198531",898:"ee332660"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="growmodo_hub:";o.l=(r,n,a,l)=>{if(e[r])e[r].push(n);else{var i,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+a){i=p;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[n];var d=(t,o)=>{i.onerror=i.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)o();else{var l=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=i,n.parentNode.removeChild(n),r(s)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){n=l[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=r=>new Promise(((n,a)=>{var l=o.miniCssF(r),i=o.p+l;if(t(l,i))return n();e(r,i,n,a)})),n={143:0};o.f.miniCss=(e,t)=>{var o={148:1,898:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((o,r)=>n=e[t]=[o,r]));r.push(n[2]=a);var l=o.p+o.u(t),i=new Error,s=r=>{if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",i.name="ChunkLoadError",i.type=a,i.request=l,n[1](i)}};o.l(l,s,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[l,i,s]=r,u=0;if(l.some((t=>0!==e[t]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(s)var c=s(o)}for(t&&t(r);u<l.length;u++)a=l[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},r=globalThis["webpackChunkgrowmodo_hub"]=globalThis["webpackChunkgrowmodo_hub"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[736],(()=>o(5783)));r=o.O(r)})();