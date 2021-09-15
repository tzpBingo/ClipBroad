"use strict";(self["webpackChunkclipbroad"]=self["webpackChunkclipbroad"]||[]).push([[540],{27:(e,t,a)=>{a.d(t,{Z:()=>l});const l={imageExt:["png","jpg","jpeg","gif","svg","tiff","bmp","ico","webp"],videoExt:["mp4","mov","mkv","avi","wmv","rmvb","swf","flv","mpg","mpeg"],audioExt:["mp3","ape","flac","wav","aac","wma","ogg","mpga"],archieveExt:["zip","7z","rar"],excelExt:["xls","xlsx","xlsm"],wordExt:["doc","docx"],textExt:["txt","inf","rtf"],defaultSettings:{hideIcon:!1,autoLaunch:!1,showCopiedNotification:!0,syncUseMobileData:!1,maxItem:40,maxFileSize:5},githubClientID:"fa79756f53d8c0a88ddd",autoSyncInterval:3e4,checkClipboardInterval:500}},4540:(e,t,a)=>{a.r(t),a.d(t,{default:()=>K});var l=a(3673),i=a(8880),o=a(2323);const c={class:"col-3 q-py-md"},n=["src"],s={class:"col-1 q-py-md",style:{width:"100%"}},r={class:"col-6 q-pa-md items-center"},u={class:"col-1 q-py-md",style:{width:"100%"}},d={class:"col q-pa-md items-center"},m={class:"q-pa-md"},h={class:"q-pa-md"},p=(0,l.Uk)(" Github "),g=(0,l.Uk)(" Blog "),b={class:"q-pa-md"},w=(0,l.Uk)(" Paypal "),f=(0,l.Uk)(" Wechat "),k=(0,l.Uk)(" Alipay ");function q(e,t,a,q,v,x){const $=(0,l.up)("q-btn"),I=(0,l.up)("q-avatar"),y=(0,l.up)("q-item-section"),S=(0,l.up)("q-item-label"),_=(0,l.up)("q-menu"),U=(0,l.up)("q-item"),Z=(0,l.up)("q-separator"),L=(0,l.up)("q-toggle"),W=(0,l.up)("q-select"),z=(0,l.up)("q-badge"),C=(0,l.up)("q-chip"),V=(0,l.up)("q-img"),j=(0,l.up)("q-banner"),Q=(0,l.up)("q-popup-proxy"),E=(0,l.up)("q-page"),D=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(E,{class:"column q-pa-md items-center"},{default:(0,l.w5)((()=>[(0,l._)("div",c,[(0,l.Wm)(i.uT,{appear:"","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"},{default:(0,l.w5)((()=>[x.showLoginBtn?((0,l.wg)(),(0,l.j4)($,{key:0,color:"primary",icon:"login",label:e.$t("githubLogin"),onClick:t[0]||(t[0]=e=>x.auth())},null,8,["label"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(i.uT,{appear:"","enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"},{default:(0,l.w5)((()=>[x.showLoginBtn?(0,l.kq)("",!0):(0,l.wy)(((0,l.wg)(),(0,l.j4)(U,{key:0},{default:(0,l.w5)((()=>[""!=x.avatarUrl?((0,l.wg)(),(0,l.j4)(y,{key:0,side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{rounded:"",size:"48px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:x.avatarUrl},null,8,n)])),_:1})])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[""!=x.username?((0,l.wg)(),(0,l.j4)(S,{key:0},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(x.username),1)])),_:1})):(0,l.kq)("",!0),x.rateLimit?((0,l.wg)(),(0,l.j4)(S,{key:1,caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.$t("githubAPILimit")+x.rateLimit.current+" / "+x.rateLimit.limit),1)])),_:1})):(0,l.kq)("",!0),x.rateLimit?((0,l.wg)(),(0,l.j4)(S,{key:2,caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.$t("githubAPIReset")+x.rateLimit.time+"s"),1)])),_:1})):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(_,{anchor:"center middle",self:"center middle"},{default:(0,l.w5)((()=>[(0,l.Wm)($,{color:"black",label:"Logout",onClick:t[1]||(t[1]=e=>x.logout())})])),_:1})])),_:1},512)),[[D]])])),_:1})]),(0,l._)("div",s,[(0,l.Wm)(Z)]),(0,l._)("div",r,[(0,l._)("div",null,[e.$q.platform.is.mac?((0,l.wg)(),(0,l.j4)(L,{key:0,modelValue:v.hideIcon,"onUpdate:modelValue":t[2]||(t[2]=e=>v.hideIcon=e),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:e.$t("hideDockIcon"),"left-label":""},null,8,["modelValue","label"])):(0,l.kq)("",!0)]),(0,l._)("div",null,[e.$q.platform.is.electron?((0,l.wg)(),(0,l.j4)(L,{key:0,modelValue:v.autoLaunch,"onUpdate:modelValue":t[3]||(t[3]=e=>v.autoLaunch=e),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:e.$t("launchWithSystem"),"left-label":"",class:"q-mb-md"},null,8,["modelValue","label"])):(0,l.kq)("",!0)]),(0,l._)("div",null,[e.$q.platform.is.electron?((0,l.wg)(),(0,l.j4)(L,{key:0,modelValue:v.showCopiedNotification,"onUpdate:modelValue":t[4]||(t[4]=e=>v.showCopiedNotification=e),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:e.$t("copyNotification"),"left-label":"",class:"q-mb-md"},null,8,["modelValue","label"])):(0,l.kq)("",!0)]),(0,l._)("div",null,[e.$q.platform.is.cordova?((0,l.wg)(),(0,l.j4)(L,{key:0,modelValue:v.syncUseMobileData,"onUpdate:modelValue":t[5]||(t[5]=e=>v.syncUseMobileData=e),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:e.$t("useCellular"),"left-label":"",class:"q-mb-md"},null,8,["modelValue","label"])):(0,l.kq)("",!0)]),(0,l._)("div",null,[(0,l.Wm)(W,{label:e.$t("maxItem"),"transition-show":"jump-up","transition-hide":"jump-up",filled:"",modelValue:v.maxItem,"onUpdate:modelValue":t[6]||(t[6]=e=>v.maxItem=e),options:[20,40,60,80,100],style:{width:"250px"}},null,8,["label","modelValue"])]),(0,l._)("div",null,[(0,l.Wm)(W,{label:e.$t("maxFileSize"),"transition-show":"jump-up","transition-hide":"jump-up",filled:"",modelValue:v.maxFileSize,"onUpdate:modelValue":t[7]||(t[7]=e=>v.maxFileSize=e),options:[1,5,10,20],style:{width:"250px"},hint:e.$t("maxFileSizeTip2")},null,8,["label","modelValue","hint"])])]),(0,l._)("div",u,[(0,l.Wm)(Z)]),(0,l._)("div",d,[(0,l._)("div",m,[(0,l.Uk)((0,o.zw)(e.$t("version"))+" ",1),(0,l.Wm)(z,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(v.version),1)])),_:1})]),(0,l._)("div",h,[(0,l.Uk)((0,o.zw)(e.$t("link"))+" ",1),(0,l.Wm)(C,{clickable:"",onClick:t[8]||(t[8]=e=>x.openExternalURL("https://github.com/dale0525/ClipBroad")),color:"grey-10","text-color":"white"},{default:(0,l.w5)((()=>[p])),_:1}),(0,l.Wm)(C,{clickable:"",onClick:t[9]||(t[9]=e=>x.openExternalURL("https://www.logiconsole.com")),color:"black","text-color":"white"},{default:(0,l.w5)((()=>[g])),_:1})]),(0,l._)("div",b,[(0,l.Uk)((0,o.zw)(e.$t("donation"))+" ",1),(0,l.Wm)(C,{clickable:"",onClick:t[10]||(t[10]=e=>x.openExternalURL("https://paypal.me/logictan")),color:"indigo-10","text-color":"white",icon:"paypal"},{default:(0,l.w5)((()=>[w])),_:1}),(0,l.Wm)(C,{color:"green","text-color":"white",icon:"wechat"},{default:(0,l.w5)((()=>[f,(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(j,{style:{width:"250px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{src:"https://github.com/dale0525/ClipBroad/blob/main/screenshot/donation_wechat.png?raw=true","spinner-color":"primary",style:{"max-width":"250px"}})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(C,{color:"blue-7","text-color":"white"},{default:(0,l.w5)((()=>[k,(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(j,{style:{width:"250px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{src:"https://github.com/dale0525/ClipBroad/blob/main/screenshot/donation_alipay.png?raw=true","spinner-color":"primary",style:{"max-width":"250px"}})])),_:1})])),_:1})])),_:1})])])])),_:1})}var v=a(3437),x=a(1185),$=a(1959),I=a(27),y=a(19);let S=null,_=!1,U=(0,$.iH)(!1),Z=(0,$.iH)(""),L=(0,$.iH)(""),W=(0,$.iH)(null);const z={data(){return{hideIcon:this.$q.localStorage.has("clipbroad-hide-icon")?this.$q.localStorage.getItem("clipbroad-hide-icon"):I.Z.defaultSettings.hideIcon,autoLaunch:this.$q.localStorage.has("clipbroad-auto-launch")?this.$q.localStorage.getItem("clipbroad-auto-launch"):I.Z.defaultSettings.autoLaunch,showCopiedNotification:this.$q.localStorage.has("clipbroad-show-copied-notification")?this.$q.localStorage.getItem("clipbroad-show-copied-notification"):I.Z.defaultSettings.showCopiedNotification,syncUseMobileData:this.$q.localStorage.has("clipbroad-use-mobile-data")?this.$q.localStorage.getItem("clipbroad-use-mobile-data"):I.Z.defaultSettings.syncUseMobileData,maxItem:this.$q.localStorage.has("clipbroad-max-item")?this.$q.localStorage.getItem("clipbroad-max-item"):I.Z.defaultSettings.maxItem,maxFileSize:this.$q.localStorage.has("clipbroad-max-file-size")?this.$q.localStorage.getItem("clipbroad-max-file-size"):I.Z.defaultSettings.maxFileSize,version:"0.3.0"}},computed:{showLoginBtn(){return!U.value},username(){return Z.value},avatarUrl(){return L.value},rateLimit(){return W.value}},methods:{auth(){let e=(0,x.Z)();this.$q.localStorage.set("clipbroad-github-state",e),(0,v.Z)(`https://github.com/login/oauth/authorize?client_id=${I.Z.githubClientID}&redirect_uri=https://logiconsole.com/api/clipbroad/oauth&scope=repo&state=${e}`),_=!0},logout(){this.$q.localStorage.remove("clipbroad-github-token"),this.$githubInstance.github=null,this.$githubInstance.githubUser=null,this.$githubInstance.githubRepo=null,this.$githubInstance.githubUserName=null,this.$githubInstance.githubAvatarUrl=null,this.$githubInstance.rateLimit=null,this.$githubInstance.githubRepoExist=!1,U.value=!1},setToken(e){U.value=!0,_=!1,this.$setGithub(e).then((({data:e})=>{Z.value=e.username,L.value=e.avatarUrl})).catch((()=>{}))},openExternalURL(e){(0,v.Z)(e,null,{noopener:!0,menubar:!0,toolbar:!0,noreferrer:!0})}},mounted(){this.$q.localStorage.has("clipbroad-github-token")&&this.setToken(this.$q.localStorage.getItem("clipbroad-github-token")),_=!1,null==S&&(S=setInterval((()=>{_&&this.$axios.post("https://api.logictan.workers.dev/corsproxy/",{state:this.$q.localStorage.getItem("clipbroad-github-state")}).then((({data:e})=>{"success"!=e.status||(this.$q.localStorage.set("clipbroad-github-token",e.message),this.setToken(e.message))})).catch((e=>{y.log(e)}))}),2e3)),this.$getRateLimit().then((({message:e})=>{W.value=e})).catch((e=>{}))},watch:{hideIcon:function(e){this.$q.localStorage.set("clipbroad-hide-icon",e),this.$q.platform.is.mac&&window.myAPI.setHideIcon(e)},autoLaunch:function(e){this.$q.localStorage.set("clipbroad-auto-launch",e),this.$q.platform.is.electron&&window.myAPI.registerAutoLaunch(e)},showCopiedNotification:function(e){this.$q.localStorage.set("clipbroad-show-copied-notification",e)},syncUseMobileData:function(e){this.$q.localStorage.set("clipbroad-use-mobile-data",e)},maxItem:function(e){this.$q.localStorage.set("clipbroad-max-item",e)},maxFileSize:function(e){this.$q.localStorage.set("clipbroad-max-file-size",e)}},created(){this.hideIcon=!this.$q.localStorage.has("clipbroad-hide-icon")||this.$q.localStorage.getItem("clipbroad-hide-icon"),this.$q.platform.is.electron&&window.myAPI.setHideIcon(this.hideIcon)}};var C=a(4379),V=a(4607),j=a(3414),Q=a(2035),E=a(5096),D=a(2350),B=a(811),A=a(5869),P=a(8886),R=a(2021),F=a(9721),N=a(7030),M=a(3944),T=a(5607),H=a(4027),G=a(6489),O=a(9789),J=a.n(O);z.render=q;const K=z;J()(z,"components",{QPage:C.Z,QBtn:V.Z,QItem:j.Z,QItemSection:Q.Z,QAvatar:E.Z,QItemLabel:D.Z,QMenu:B.Z,QSeparator:A.Z,QToggle:P.Z,QSelect:R.Z,QBadge:F.Z,QChip:N.Z,QPopupProxy:M.Z,QBanner:T.Z,QImg:H.Z}),J()(z,"directives",{Ripple:G.Z})}}]);