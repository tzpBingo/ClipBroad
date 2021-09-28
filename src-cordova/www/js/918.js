"use strict";(self["webpackChunkclipbroad"]=self["webpackChunkclipbroad"]||[]).push([[918],{27:(t,e,a)=>{a.d(e,{Z:()=>l});const l={imageExt:["png","jpg","jpeg","gif","svg","tiff","bmp","ico","webp"],videoExt:["mp4","mov","mkv","avi","wmv","rmvb","swf","flv","mpg","mpeg"],audioExt:["mp3","ape","flac","wav","aac","wma","ogg","mpga"],archieveExt:["zip","7z","rar"],excelExt:["xls","xlsx","xlsm"],wordExt:["doc","docx"],textExt:["txt","inf","rtf","json","yaml","yml","md"],defaultSettings:{hideIcon:!1,autoLaunch:!1,showCopiedNotification:!0,syncUseMobileData:!1,maxItem:40,darkMode:"auto",maxFileSize:5,shortcut:{win:["Control","Shift","V"],mac:["Meta","Shift","V"]}},githubClientID:"fa79756f53d8c0a88ddd",autoSyncInterval:3e4,checkClipboardInterval:500,githubTokenResetThreshold:5,clickTipMax:3,doubleClickThreshold:300}},4918:(t,e,a)=>{a.r(e),a.d(e,{default:()=>rt});a(71);var l=a(3673),i=a(8880),o=a(2323);const c={class:"col-3 q-py-md"},s=["src"],r={class:"col-1 q-py-md",style:{width:"100%"}},n={class:"col-6 q-pa-md items-center"},u={key:0},d={key:1},h={key:2},m={key:3},p={class:"q-mt-md"},g={class:"q-mt-md"},b={class:"q-mt-md"},w={key:4,class:"q-mt-xl"},k={class:"col-1 q-py-md",style:{width:"100%"}},f={class:"col q-pa-md items-center"},S={class:"q-pa-md"},q={class:"absolute-full flex flex-center"},v={class:"q-pa-md"},$=(0,l.Uk)(" Github "),y=(0,l.Uk)(" Blog "),x={class:"q-pa-md"},I=(0,l.Uk)(" Paypal "),U=(0,l.Uk)(" Wechat "),_=(0,l.Uk)(" Alipay ");function V(t,e,a,V,W,Z){const A=(0,l.up)("q-icon"),C=(0,l.up)("q-item"),L=(0,l.up)("q-btn"),M=(0,l.up)("q-avatar"),z=(0,l.up)("q-item-section"),E=(0,l.up)("q-item-label"),D=(0,l.up)("q-menu"),Q=(0,l.up)("q-separator"),j=(0,l.up)("q-toggle"),B=(0,l.up)("q-select"),P=(0,l.up)("q-field"),T=(0,l.up)("q-badge"),R=(0,l.up)("q-linear-progress"),N=(0,l.up)("q-chip"),F=(0,l.up)("q-img"),H=(0,l.up)("q-banner"),O=(0,l.up)("q-popup-proxy"),G=(0,l.up)("q-page"),K=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(G,{class:"column q-pa-md items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{to:"/",clickable:"",class:"fixed-top-left q-ma-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(A,{name:"arrow_back",size:"lg",class:"absolute-center"})])),_:1}),(0,l._)("div",c,[(0,l.Wm)(i.uT,{appear:"","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"},{default:(0,l.w5)((()=>[Z.showLoginBtn?((0,l.wg)(),(0,l.j4)(L,{key:0,color:"primary",icon:"login",label:t.$t("githubLogin"),onClick:e[0]||(e[0]=t=>Z.auth())},null,8,["label"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(i.uT,{appear:"","enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"},{default:(0,l.w5)((()=>[Z.showLoginBtn?(0,l.kq)("",!0):(0,l.wy)(((0,l.wg)(),(0,l.j4)(C,{key:0},{default:(0,l.w5)((()=>[""!=Z.avatarUrl?((0,l.wg)(),(0,l.j4)(z,{key:0,side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(M,{rounded:"",size:"48px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:Z.avatarUrl},null,8,s)])),_:1})])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(z,null,{default:(0,l.w5)((()=>[""!=Z.username?((0,l.wg)(),(0,l.j4)(E,{key:0},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(Z.username),1)])),_:1})):(0,l.kq)("",!0),Z.rateLimit?((0,l.wg)(),(0,l.j4)(E,{key:1,caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(t.$t("githubAPILimit")+Z.rateLimit.current+" / "+Z.rateLimit.limit),1)])),_:1})):(0,l.kq)("",!0),Z.rateLimit?((0,l.wg)(),(0,l.j4)(E,{key:2,caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(t.$t("githubAPIReset")+Z.rateLimit.time+"s"),1)])),_:1})):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(D,{anchor:"center middle",self:"center middle"},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{color:"black",label:"Logout",onClick:e[1]||(e[1]=t=>Z.logout())})])),_:1})])),_:1},512)),[[K]])])),_:1})]),(0,l._)("div",r,[(0,l.Wm)(Q)]),(0,l._)("div",n,[t.$q.platform.is.electron?((0,l.wg)(),(0,l.iD)("div",u,[(0,l.Wm)(j,{modelValue:W.hideIcon,"onUpdate:modelValue":e[2]||(e[2]=t=>W.hideIcon=t),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:t.$t("hideDockIcon"),"left-label":""},null,8,["modelValue","label"])])):(0,l.kq)("",!0),t.$q.platform.is.electron?((0,l.wg)(),(0,l.iD)("div",d,[(0,l.Wm)(j,{modelValue:W.autoLaunch,"onUpdate:modelValue":e[3]||(e[3]=t=>W.autoLaunch=t),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:t.$t("launchWithSystem"),"left-label":""},null,8,["modelValue","label"])])):(0,l.kq)("",!0),t.$q.platform.is.electron?((0,l.wg)(),(0,l.iD)("div",h,[(0,l.Wm)(j,{modelValue:W.showCopiedNotification,"onUpdate:modelValue":e[4]||(e[4]=t=>W.showCopiedNotification=t),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:t.$t("copyNotification"),"left-label":""},null,8,["modelValue","label"])])):(0,l.kq)("",!0),t.$q.platform.is.cordova?((0,l.wg)(),(0,l.iD)("div",m,[(0,l.Wm)(j,{modelValue:W.syncUseMobileData,"onUpdate:modelValue":e[5]||(e[5]=t=>W.syncUseMobileData=t),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:t.$t("useCellular"),"left-label":""},null,8,["modelValue","label"])])):(0,l.kq)("",!0),(0,l._)("div",p,[(0,l.Wm)(B,{label:t.$t("darkMode"),"transition-show":"jump-up","transition-hide":"jump-up",filled:"",modelValue:W.darkMode,"onUpdate:modelValue":e[6]||(e[6]=t=>W.darkMode=t),options:[{label:t.$t("yes"),value:!1},{label:t.$t("no"),value:!0},{label:t.$t("darkModeAuto"),value:"auto"}],"map-options":!0,style:{width:"250px"}},null,8,["label","modelValue","options"])]),(0,l._)("div",g,[(0,l.Wm)(B,{label:t.$t("maxItem"),"transition-show":"jump-up","transition-hide":"jump-up",filled:"",modelValue:W.maxItem,"onUpdate:modelValue":e[7]||(e[7]=t=>W.maxItem=t),options:[20,40,60,80,100],style:{width:"250px"}},null,8,["label","modelValue"])]),(0,l._)("div",b,[(0,l.Wm)(B,{label:t.$t("maxFileSize"),"transition-show":"jump-up","transition-hide":"jump-up",filled:"",modelValue:W.maxFileSize,"onUpdate:modelValue":e[8]||(e[8]=t=>W.maxFileSize=t),options:[1,5,10,20],style:{width:"250px"},hint:t.$t("maxFileSizeTip2")},null,8,["label","modelValue","hint"])]),t.$q.platform.is.electron?((0,l.wg)(),(0,l.iD)("div",w,[(0,l.Wm)(P,{filled:"",label:t.$t("shortcut"),"model-value":Z.shortcut,"stack-label":"",rules:[e=>!(!e||!W.validShortcut)||(W.validShortcut?!!W.registerShortcutSuccess||t.$t("shortcutRegisterFail"):t.$t("invalidShortcut"))]},{default:(0,l.w5)((()=>[(0,l._)("div",{class:"self-center full-width no-outline",tabindex:"0",onKeydown:e[9]||(e[9]=(...t)=>Z.setShortcut&&Z.setShortcut(...t)),onClick:e[10]||(e[10]=t=>W.setShortcutStart=!0)},(0,o.zw)(Z.shortcut),33)])),_:1},8,["label","model-value","rules"])])):(0,l.kq)("",!0)]),(0,l._)("div",k,[(0,l.Wm)(Q)]),(0,l._)("div",f,[(0,l._)("div",S,[(0,l.Uk)((0,o.zw)(t.$t("version"))+" ",1),(0,l.Wm)(T,{color:"primary",clickable:"",onClick:e[11]||(e[11]=t=>Z.checkVersion())},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(W.version),1)])),_:1}),W.showUpdateBar?((0,l.wg)(),(0,l.j4)(R,{key:0,rounded:"",size:"25px",value:W.checkUpdateValue,color:"primary"},{default:(0,l.w5)((()=>[(0,l._)("div",q,[(0,l.Wm)(T,{color:"white","text-color":"primary",label:W.checkUpdateMessage},null,8,["label"])])])),_:1},8,["value"])):(0,l.kq)("",!0)]),(0,l._)("div",v,[(0,l.Uk)((0,o.zw)(t.$t("link"))+" ",1),(0,l.Wm)(N,{clickable:"",onClick:e[12]||(e[12]=t=>Z.openExternalURL("https://github.com/dale0525/ClipBroad")),color:"grey-10","text-color":"white"},{default:(0,l.w5)((()=>[$])),_:1}),(0,l.Wm)(N,{clickable:"",onClick:e[13]||(e[13]=t=>Z.openExternalURL("https://www.logiconsole.com")),color:"black","text-color":"white"},{default:(0,l.w5)((()=>[y])),_:1})]),(0,l._)("div",x,[(0,l.Uk)((0,o.zw)(t.$t("donation"))+" ",1),(0,l.Wm)(N,{clickable:"",onClick:e[14]||(e[14]=t=>Z.openExternalURL("https://paypal.me/logictan")),color:"indigo-10","text-color":"white",icon:"paypal"},{default:(0,l.w5)((()=>[I])),_:1}),(0,l.Wm)(N,{color:"green","text-color":"white",icon:"wechat"},{default:(0,l.w5)((()=>[U,(0,l.Wm)(O,null,{default:(0,l.w5)((()=>[(0,l.Wm)(H,{style:{width:"250px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{src:"https://github.com/dale0525/ClipBroad/blob/main/screenshot/donation_wechat.png?raw=true","spinner-color":"primary",style:{"max-width":"250px"}})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(N,{color:"blue-7","text-color":"white"},{default:(0,l.w5)((()=>[_,(0,l.Wm)(O,null,{default:(0,l.w5)((()=>[(0,l.Wm)(H,{style:{width:"250px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{src:"https://github.com/dale0525/ClipBroad/blob/main/screenshot/donation_alipay.png?raw=true","spinner-color":"primary",style:{"max-width":"250px"}})])),_:1})])),_:1})])),_:1})])])])),_:1})}a(7280),a(5363);var W=a(3437),Z=a(1185),A=a(1959),C=a(27),L=a(19);let M=(0,A.iH)(!1),z=(0,A.iH)(""),E=(0,A.iH)(""),D=(0,A.iH)(null),Q=!1;const j={data(){return{hideIcon:this.$q.localStorage.has("clipbroad-hide-icon")?this.$q.localStorage.getItem("clipbroad-hide-icon"):C.Z.defaultSettings.hideIcon,autoLaunch:this.$q.localStorage.has("clipbroad-auto-launch")?this.$q.localStorage.getItem("clipbroad-auto-launch"):C.Z.defaultSettings.autoLaunch,showCopiedNotification:this.$q.localStorage.has("clipbroad-show-copied-notification")?this.$q.localStorage.getItem("clipbroad-show-copied-notification"):C.Z.defaultSettings.showCopiedNotification,syncUseMobileData:this.$q.localStorage.has("clipbroad-use-mobile-data")?this.$q.localStorage.getItem("clipbroad-use-mobile-data"):C.Z.defaultSettings.syncUseMobileData,maxItem:this.$q.localStorage.has("clipbroad-max-item")?this.$q.localStorage.getItem("clipbroad-max-item"):C.Z.defaultSettings.maxItem,darkMode:this.$q.localStorage.has("clipbroad-dark-mode")?this.$q.localStorage.getItem("clipbroad-dark-mode"):C.Z.defaultSettings.darkMode,maxFileSize:this.$q.localStorage.has("clipbroad-max-file-size")?this.$q.localStorage.getItem("clipbroad-max-file-size"):C.Z.defaultSettings.maxFileSize,shortcutArray:this.$q.localStorage.has("clipbroad-shortcut")?this.$q.localStorage.getItem("clipbroad-shortcut"):this.$q.platform.is.mac?C.Z.defaultSettings.shortcut.mac:C.Z.defaultSettings.shortcut.win,setShortcutStart:!1,validShortcut:!0,registerShortcutSuccess:!0,version:"1.0.1",showUpdateBar:!1,checkUpdateMessage:this.$t("newVersionCheck"),checkUpdateValue:0,newVersionPopup:!1}},computed:{showLoginBtn(){return!M.value},username(){return z.value},avatarUrl(){return E.value},rateLimit(){return D.value},shortcut(){return this.shortcutArray.join("+").replace("Meta","Command")}},methods:{auth(){let t=(0,Z.Z)();this.$q.localStorage.set("clipbroad-github-state",t);const e=`https://github.com/login/oauth/authorize?client_id=${C.Z.githubClientID}&redirect_uri=https://logiconsole.com/api/clipbroad/oauth&scope=repo&state=${t}`;this.openExternalURL(e)},logout(){this.$q.localStorage.remove("clipbroad-github-token"),this.$githubInstance.github=null,this.$githubInstance.githubUser=null,this.$githubInstance.githubRepo=null,this.$githubInstance.githubUserName=null,this.$githubInstance.githubAvatarUrl=null,this.$githubInstance.rateLimit=null,this.$githubInstance.githubRepoExist=!1,M.value=!1},setToken(t){M.value=!0,this.$setGithub(t).then((({data:t})=>{z.value=t.username,E.value=t.avatarUrl})).catch((()=>{}))},openExternalURL(t){this.$q.platform.is.electron?window.myAPI.openSystemBrowser(t):(0,W.Z)(t)},setShortcut(t){if(!this.$q.platform.is.win||!t.metaKey){var e=t.key;if(e=e.charAt(0).toUpperCase()+e.slice(1),this.setShortcutStart&&(this.validShortcut=!0,this.setShortcutStart=!1,this.shortcutArray=[]),!(this.shortcutArray.length>0&&this.shortcutArray.includes(e))&&(this.shortcutArray.push(e),!["Meta","Shift","Control","Alt","Option","AltGr","Super"].includes(e))){if(this.shortcutArray.length<2)return this.validShortcut=!1,this.setShortcutStart=!0,void(this.shortcutArray=[]);window.myAPI.registerShortcut(JSON.stringify(this.shortcutArray)).then((t=>{t?(this.registerShortcutSuccess=!0,this.validShortcut=!0,this.$q.localStorage.set("clipbroad-shortcut",this.shortcutArray),document.activeElement.blur(),this.$q.notify(this.$t("shortcutRegisterSuccess"))):(this.registerShortcutSuccess=!1,this.validShortcut=!0,this.setShortcutStart=!0,this.shortcutArray=[])})).catch((t=>{L.log(t)}))}}},checkVersion(){this.$q.platform.is.electron?(window.myAPI.checkVersion(),this.showUpdateBar=!0):this.$q.platform.is.android?codePush.sync(null,{updateDialog:!0,installMode:InstallMode.IMMEDIATE}):this.$q.platform.is.ios&&codePush.sync()}},mounted(){window.handleOpenURL=t=>{if(!t.includes("clipbroad://token/"))return;let e=t.replace("clipbroad://token/","").replace("/","");this.$q.localStorage.set("clipbroad-github-token",e),this.$githubInstance.github=null,this.setToken(e)},this.$q.localStorage.has("clipbroad-github-token")&&this.setToken(this.$q.localStorage.getItem("clipbroad-github-token")),Q||(window.addEventListener("getToken",(t=>{var e=t.detail.token;this.$q.localStorage.set("clipbroad-github-token",e),this.$githubInstance.github=null,this.setToken(e)}),!1),window.addEventListener("version-check",(t=>{this.showUpdateBar=!0;var e=t.detail.message,a=t.detail.value;["newVersionCheck","newVersionAvailable","newVersionNotAvailable"].includes(e)?this.checkUpdateMessage=this.$t(e):this.checkUpdateMessage="error"==e?a:e,"newVersionNotAvailable"!=e&&"error"!=e||setTimeout((()=>{this.showUpdateBar=!1}),1e3),this.checkUpdateValue=a}),!1),Q=!0),this.$getRateLimit().then((({message:t})=>{D.value=t})).catch((t=>{}))},watch:{hideIcon:function(t){this.$q.localStorage.set("clipbroad-hide-icon",t),this.$q.platform.is.mac&&window.myAPI.setHideIcon(t)},autoLaunch:function(t){this.$q.localStorage.set("clipbroad-auto-launch",t),this.$q.platform.is.electron&&window.myAPI.registerAutoLaunch(t)},showCopiedNotification:function(t){this.$q.localStorage.set("clipbroad-show-copied-notification",t)},syncUseMobileData:function(t){this.$q.localStorage.set("clipbroad-use-mobile-data",t)},maxItem:function(t){this.$q.localStorage.set("clipbroad-max-item",t)},darkMode:function(t){this.$q.localStorage.set("clipbroad-dark-mode",t.value),window.dispatchEvent(new CustomEvent("setDarkMode"))},maxFileSize:function(t){this.$q.localStorage.set("clipbroad-max-file-size",t)}},created(){this.hideIcon=!this.$q.localStorage.has("clipbroad-hide-icon")||this.$q.localStorage.getItem("clipbroad-hide-icon"),this.$q.platform.is.electron&&window.myAPI.setHideIcon(this.hideIcon)}};var B=a(4379),P=a(3414),T=a(4554),R=a(8240),N=a(2035),F=a(5096),H=a(2350),O=a(811),G=a(5869),K=a(8886),J=a(2365),X=a(6115),Y=a(9721),tt=a(1598),et=a(7030),at=a(3944),lt=a(5607),it=a(4027),ot=a(6489),ct=a(9789),st=a.n(ct);j.render=V;const rt=j;st()(j,"components",{QPage:B.Z,QItem:P.Z,QIcon:T.Z,QBtn:R.Z,QItemSection:N.Z,QAvatar:F.Z,QItemLabel:H.Z,QMenu:O.Z,QSeparator:G.Z,QToggle:K.Z,QSelect:J.Z,QField:X.Z,QBadge:Y.Z,QLinearProgress:tt.Z,QChip:et.Z,QPopupProxy:at.Z,QBanner:lt.Z,QImg:it.Z}),st()(j,"directives",{Ripple:ot.Z})}}]);