(()=>{"use strict";var e={9711:(e,t,r)=>{r(7837),r(5900),r(5598);var o=r(7e3),i=r(2661),n=r(790);function a(e,t,r,o,i,a){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}const s=(0,n.aZ)({name:"App"});s.render=a;const l=s;var u=r(6985),c=r(1540),h=r(2295);const d=[{path:"/",component:()=>Promise.all([r.e(736),r.e(273)]).then(r.bind(r,5273)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(195)]).then(r.bind(r,195))},{path:"settings",component:()=>Promise.all([r.e(736),r.e(9)]).then(r.bind(r,1009))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(716)]).then(r.bind(r,6716))}],m=d,p=(0,c.BC)((function(){const e=h.r5,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function g(e,t){const o="function"===typeof u.default?await(0,u.default)({}):u.default,{storeKey:n}=await Promise.resolve().then(r.bind(r,6985)),a="function"===typeof p?await p({store:o}):p;o.$router=a;const s=e(l);return s.use(i.Z,t),{app:s,store:o,storeKey:n,router:a}}var f=r(200),b=r(6590),v=r(1285);const y={config:{},plugins:{LocalStorage:f.Z,AppVisibility:b.Z,Notify:v.Z}};var w=r(6211);const P="";async function U({app:e,router:t,store:r,storeKey:o},i){let n=!1;const a=e=>{n=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},s=window.location.href.replace(window.location.origin,"");for(let u=0;!1===n&&u<i.length;u++)try{await i[u]({app:e,router:t,store:r,ssrContext:null,redirect:a,urlPath:s,publicPath:P})}catch(l){return l&&l.url?void(window.location.href=l.url):void w.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.use(r,o),document.addEventListener("deviceready",(()=>{e.config.globalProperties.$q.cordova=window.cordova,e.mount("#q-app")}),!1))}g(o.ri,y).then((e=>Promise.all([Promise.resolve().then(r.bind(r,59)),Promise.resolve().then(r.bind(r,3754))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));U(e,r)}))))},59:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a,axios:()=>n.a});var o=r(1540),i=r(6746),n=r.n(i);const a=(0,o.xr)((async({app:e})=>{e.config.globalProperties.$axios=n()}))},3754:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var o=r(1540),i=r(6211);const n=r(61);let a={github:null,githubUser:null,githubUserName:null,githubAvatarUrl:null,githubRepo:null,githubRepoExist:!1,rateLimit:null};const s="ClipBroadHistory",l=e=>new Promise(((t,r)=>{null==a.github&&(a.github=new n({token:e})),u().then((e=>{t(e)})).catch((e=>{r(e)}))})),u=()=>new Promise(((e,t)=>{null!=a.github?(null==a.githubUser&&(a.githubUser=a.github.getUser()),null==a.githubUserName?a.githubUser.getProfile().then((({data:e})=>{a.githubUserName=e.login,a.githubAvatarUrl=e.avatar_url})).then(c).then((t=>{e(t)})).catch((e=>{i.log(e)})):c().then((t=>{e(t)}))):t({status:"error",data:"Github not inited"})})),c=()=>new Promise(((e,t)=>{null!=a.githubUserName?null!=a.githubRepo&&a.githubRepoExist?e({status:"success",data:{username:a.githubUserName,avatarUrl:a.githubAvatarUrl}}):(a.githubRepo=a.github.getRepo(a.githubUserName,s),a.githubRepo.getDetails().then((()=>{a.githubRepoExist=!0,e({status:"success",data:{username:a.githubUserName,avatarUrl:a.githubAvatarUrl}})})).catch((()=>{i.log("Repo is not inited, create one"),h().then((t=>{e(t)})).catch((e=>i.log(e)))}))):t({status:"error",data:"Github Username not inited"})})),h=()=>new Promise(((e,t)=>{null!=a.githubUser?a.githubUser.createRepo({name:s,private:!0,has_projects:!1,has_wiki:!1,auto_init:!0}).then((()=>{a.githubRepoExist=!0,c()})).then((t=>{e(t)})).catch((e=>{i.log(e)})):t({status:"error",data:"Github User not inited"})})),d=()=>new Promise(((e,t)=>{null==a.github&&t({status:"error",message:"Github not inited"}),a.github.getRateLimit().getRateLimit().then((({data:t})=>{const r=(new Date).getTime(),o=parseInt(t.rate.reset-r/1e3);e({status:"success",message:{current:t.rate.remaining,limit:t.rate.limit,time:o}})})).catch((e=>{t({status:"error",message:e})}))})),m=(0,o.xr)((async({app:e})=>{e.config.globalProperties.$githubInstance=a,e.config.globalProperties.$setGithub=l,e.config.globalProperties.$getRateLimit=d}))},6985:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var o={};r.r(o),r.d(o,{lastLocalItem:()=>u});var i={};r.r(i),r.d(i,{addItem:()=>c,filterItem:()=>h,removeItem:()=>d,setItemUploaded:()=>m});var n={};r.r(n),r.d(n,{addItem:()=>p,filterItem:()=>g,removeItem:()=>f,setItemUploaded:()=>b});var a=r(1540),s=r(5402);function l(){return{items:[],github:null,githubUser:null,githubRepo:null,githubUserName:null,githubAvaterUrl:null,githubRepoExist:!1}}function u(e){for(let t=0;t<e.items.length;t++)if("local"==e.items[t].source)return e.items[t];return null}r(9090);function c(e,t){e.items.unshift(t),e.items.sort((function(e,t){var r=e.time,o=t.time;return r<o?1:r>o?-1:0}));while(e.items.length>100)e.items.pop()}function h(e,t){e.items=e.items.filter((e=>e.md5!=t))}function d(e,t){e.items.splice(t,1)}function m(e,t){e.items[t].uploaded=!0}function p({commit:e},t){e("addItem",t)}function g({commit:e},t){e("filterItem",t)}function f({commit:e},t){e("removeItem",t)}function b({commit:e},t){e("setItemUploaded",t)}const v={namespaced:!0,getters:o,mutations:i,actions:n,state:l},y=(0,a.h)((function(){const e=(0,s.MT)({modules:{clipboard:v},strict:!1});return e}))}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.m=e,(()=>{var e=[];r.O=(t,o,i,n)=>{if(!o){var a=1/0;for(c=0;c<e.length;c++){for(var[o,i,n]=e[c],s=!0,l=0;l<o.length;l++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,n<a&&(a=n));if(s){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,i,n]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+".js"})(),(()=>{r.miniCssF=e=>"css/vendor.css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={};r.l=(t,o,i,n)=>{if(e[t])e[t].push(o);else{var a,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==t){a=c;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=t),e[t]=[o];var h=(r,o)=>{a.onerror=a.onload=null,clearTimeout(d);var i=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(o))),r)return r(o)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var n=new Promise(((r,o)=>i=e[t]=[r,o]));o.push(i[2]=n);var a=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var n=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,i[1](s)}};r.l(a,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var i,n,[a,s,l]=o,u=0;if(a.some((t=>0!==e[t]))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(l)var c=l(r)}for(t&&t(o);u<a.length;u++)n=a[u],r.o(e,n)&&e[n]&&e[n][0](),e[a[u]]=0;return r.O(c)},o=self["webpackChunk"]=self["webpackChunk"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(9711)));o=r.O(o)})();