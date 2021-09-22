"use strict";(self["webpackChunkclipbroad"]=self["webpackChunkclipbroad"]||[]).push([[203],{27:(e,t,i)=>{i.d(t,{Z:()=>l});const l={imageExt:["png","jpg","jpeg","gif","svg","tiff","bmp","ico","webp"],videoExt:["mp4","mov","mkv","avi","wmv","rmvb","swf","flv","mpg","mpeg"],audioExt:["mp3","ape","flac","wav","aac","wma","ogg","mpga"],archieveExt:["zip","7z","rar"],excelExt:["xls","xlsx","xlsm"],wordExt:["doc","docx"],textExt:["txt","inf","rtf","json","yaml","yml","md"],defaultSettings:{hideIcon:!1,autoLaunch:!1,showCopiedNotification:!0,syncUseMobileData:!1,maxItem:40,darkMode:"auto",maxFileSize:5,shortcut:{win:["Control","Shift","V"],mac:["Meta","Shift","V"]}},githubClientID:"fa79756f53d8c0a88ddd",autoSyncInterval:3e4,checkClipboardInterval:500,githubTokenResetThreshold:5,clickTipMax:3,doubleClickThreshold:300}},7203:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ye});i(7280);var l=i(3673),a=i(8880),o=i(2323);const s=(0,l._)("br",null,null,-1),n=(0,l._)("br",null,null,-1),r=(0,l._)("br",null,null,-1),h=(0,l._)("br",null,null,-1),u=(0,l._)("br",null,null,-1),d=(0,l._)("br",null,null,-1),m=(0,l._)("br",null,null,-1),c=(0,l._)("br",null,null,-1),p=(0,l._)("br",null,null,-1),f={key:0,class:"absolute-bottom-left"},g={class:"absolute-bottom-right"};function w(e,t,i,w,b,y){const v=(0,l.up)("q-icon"),I=(0,l.up)("q-item"),x=(0,l.up)("q-input"),k=(0,l.up)("q-card"),q=(0,l.up)("q-spinner"),$=(0,l.up)("q-tooltip"),S=(0,l.up)("q-checkbox"),T=(0,l.up)("q-item-section"),_=(0,l.up)("ClipboardItem"),N=(0,l.up)("q-item-label"),C=(0,l.up)("q-list"),Z=(0,l.up)("q-btn"),E=(0,l.up)("q-toolbar"),D=(0,l.up)("q-page"),P=(0,l.up)("q-pull-to-refresh"),W=(0,l.Q2)("ripple"),z=(0,l.Q2)("touch-hold");return(0,l.wg)(),(0,l.j4)(P,{onRefresh:e.syncNow,color:"black",icon:"autorenew"},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{style:{position:"sticky",top:"0"},class:"z-top q-mb-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{standout:"",modelValue:e.search,"onUpdate:modelValue":t[1]||(t[1]=t=>e.search=t),maxlength:"50",debounce:"300",ref:"searchInput"},{prepend:(0,l.w5)((()=>[(0,l.Wm)(v,{name:"search"})])),append:(0,l.w5)((()=>[""!==e.search?((0,l.wg)(),(0,l.j4)(v,{key:0,name:"close",onClick:t[0]||(t[0]=t=>e.search="")})):(0,l.kq)("",!0)])),after:(0,l.w5)((()=>[(0,l.Wm)(I,{to:"/settings",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{name:"settings",class:"absolute-center"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),e.loading?((0,l.wg)(),(0,l.j4)(q,{key:0,color:"primary",size:"5em",thickness:10,class:"fixed-center"})):(0,l.kq)("",!0),e.filterItemIndex.length>0?((0,l.wg)(),(0,l.j4)(C,{key:1,bordered:"",separator:""},{default:(0,l.w5)((()=>[(0,l.Wm)(a.W3,{appear:"","enter-active-class":"animated slideInLeft","leave-active-class":"animated fadeOutLeft"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.filterItemIndex,(i=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(I,{key:i,clickable:"",onClick:t=>e.handleClick(i)},{default:(0,l.w5)((()=>[e.showItemDebugInfo?((0,l.wg)(),(0,l.j4)($,{key:0},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.items[i].time),1),s,(0,l.Uk)(" "+(0,o.zw)(e.items[i].value.toString().substr(0,100)),1),n,(0,l.Uk)(" "+(0,o.zw)(e.items[i].isBuffer),1),r,(0,l.Uk)(" "+(0,o.zw)(e.items[i].md5),1),h,(0,l.Uk)(" "+(0,o.zw)(e.items[i].uploaded),1),u,(0,l.Uk)(" "+(0,o.zw)(e.items[i].type),1),d,(0,l.Uk)(" "+(0,o.zw)(null==e.items[i].fileName?"N/A":e.items[i].fileName),1),m,(0,l.Uk)(" "+(0,o.zw)(null==e.items[i].remotePath?"N/A":e.items[i].remotePath),1),c,(0,l.Uk)(" "+(0,o.zw)(null==e.items[i].remoteSha?"N/A":e.items[i].remoteSha)+" ",1),p,(0,l.Uk)(" "+(0,o.zw)(e.items[i].fromShare),1)])),_:2},1024)):(0,l.kq)("",!0),e.actionBtn?((0,l.wg)(),(0,l.j4)(T,{key:1,avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{modelValue:e.toDeleteItems,"onUpdate:modelValue":t[2]||(t[2]=t=>e.toDeleteItems=t),val:i,color:"orange",onClick:t[3]||(t[3]=()=>{e.toDeleteItems.length==e.items.length?e.isAllSelected=!0:0==e.toDeleteItems.length?e.isAllSelected=!1:e.isAllSelected=null})},null,8,["modelValue","val"])])),_:2},1024)):(0,l.kq)("",!0),(0,l.Wm)(T,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{color:"primary",name:e.itemIcon(e.items[i].type)},null,8,["name"])])),_:2},1024),(0,l.Wm)(_,{ref:`clipboardItem${i}`,type:e.items[i].type,value:e.items[i].value.toString(),fileName:e.items[i].fileName},null,8,["type","value","fileName"]),(0,l.Wm)(T,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(N,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.prevTime(e.items[i].time)),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[W],[z,()=>{e.actionBtn=!0},"500",{mouse:!0}]]))),128))])),_:1})])),_:1})):(0,l.kq)("",!0),e.actionBtn?((0,l.wg)(),(0,l.j4)(E,{key:2,class:"fixed-bottom bg-primary"},{default:(0,l.w5)((()=>[e.actionBtn?((0,l.wg)(),(0,l.iD)("div",f,[(0,l.Wm)(T,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{"keep-color":"","indeterminate-value":null,size:"xl",class:"q-mx-lg",modelValue:e.isAllSelected,"onUpdate:modelValue":t[4]||(t[4]=t=>e.isAllSelected=t),color:"orange",onClick:t[5]||(t[5]=t=>e.selectAll())},null,8,["modelValue"])])),_:1})])):(0,l.kq)("",!0),(0,l._)("div",g,[e.showDeleteBtn?((0,l.wg)(),(0,l.j4)(Z,{key:0,fab:"",icon:"delete",color:"orange",class:"q-ma-md",onClick:t[6]||(t[6]=t=>e.deleteSelected())})):(0,l.kq)("",!0),(0,l.Wm)(Z,{fab:"",icon:"close",color:"primary",class:"q-ma-md",onClick:t[7]||(t[7]=()=>{e.toDeleteItems=[],e.actionBtn=!1,e.isAllSelected=!1})})])])),_:1})):(0,l.kq)("",!0)])),_:1})])),_:1},8,["onRefresh"])}var b=i(515),y=i.n(b);i(71),i(5363),i(7098);const v={style:{"white-space":"pre-wrap","word-warp":"break-word","word-break":"break-all"}},I={style:{"white-space":"pre-wrap","word-warp":"break-word","word-break":"break-all"}},x=["innerHTML"],k=["innerHTML"],q=["src"],$=["src"],S=["src"],T=["src"];function _(e,t,i,a,s,n){const r=(0,l.up)("q-item-label"),h=(0,l.up)("q-card"),u=(0,l.up)("q-dialog"),d=(0,l.up)("q-item-section");return(0,l.wg)(),(0,l.iD)(l.HY,null,["text"==e.type?((0,l.wg)(),(0,l.j4)(d,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"ellipsis-3-lines"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.value),1)])),_:1}),(0,l.Wm)(u,{modelValue:e.popup,"onUpdate:modelValue":t[0]||(t[0]=t=>e.popup=t),"auto-close":"",class:"z-max"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l._)("pre",v,(0,o.zw)(e.value),1)])),_:1})])),_:1},8,["modelValue"])])),_:1})):(0,l.kq)("",!0),e.textExt.includes(e.type)?((0,l.wg)(),(0,l.j4)(d,{key:1},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"ellipsis-3-lines"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.base64ToString(e.value)),1)])),_:1}),(0,l.Wm)(u,{modelValue:e.popup,"onUpdate:modelValue":t[1]||(t[1]=t=>e.popup=t),"auto-close":"",class:"z-max"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l._)("pre",I,(0,o.zw)(e.base64ToString(e.value)),1)])),_:1})])),_:1},8,["modelValue"])])),_:1})):(0,l.kq)("",!0),"html"==e.type?((0,l.wg)(),(0,l.j4)(d,{key:2},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"ellipsis-3-lines"},{default:(0,l.w5)((()=>[(0,l._)("div",{innerHTML:e.value},null,8,x)])),_:1}),(0,l.Wm)(u,{modelValue:e.popup,"onUpdate:modelValue":t[2]||(t[2]=t=>e.popup=t),"auto-close":"",class:"z-max"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{class:"q-pa-md scroll"},{default:(0,l.w5)((()=>[(0,l._)("div",{innerHTML:e.value},null,8,k)])),_:1})])),_:1},8,["modelValue"])])),_:1})):(0,l.kq)("",!0),e.imageExt.includes(e.type)?((0,l.wg)(),(0,l.j4)(d,{key:3},{default:(0,l.w5)((()=>[(0,l._)("img",{src:"data:"+e.getMimeType(e.type)+";base64,"+e.value,style:{"max-height":"300px","object-fit":"contain","max-width":"100%"}},null,8,q),(0,l.Wm)(u,{modelValue:e.popup,"onUpdate:modelValue":t[3]||(t[3]=t=>e.popup=t),"auto-close":"","full-height":"","full-width":"",class:"z-max"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l._)("img",{src:"data:"+e.getMimeType(e.type)+";base64,"+e.value,style:{"object-fit":"contain"},class:"absolute-center"},null,8,$)])),_:1})])),_:1},8,["modelValue"])])),_:1})):(0,l.kq)("",!0),e.videoExt.includes(e.type)?((0,l.wg)(),(0,l.j4)(d,{key:4},{default:(0,l.w5)((()=>[(0,l._)("video",{controls:"",src:"data:"+e.getMimeType(e.type)+";base64,"+e.value,height:"320",style:{"object-fit":"contain"}},null,8,S)])),_:1})):(0,l.kq)("",!0),e.audioExt.includes(e.type)?((0,l.wg)(),(0,l.j4)(d,{key:5},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.fileName),1)])),_:1}),(0,l._)("audio",{controls:"",src:"data:"+e.getMimeType(e.type)+";base64,"+e.value,style:{"object-fit":"contain","max-width":"100%"}},null,8,T)])),_:1})):(0,l.kq)("",!0),["text","html"].concat(e.imageExt).concat(e.videoExt).concat(e.audioExt).concat(e.textExt).includes(e.type)?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(d,{key:6,class:"rounded-borders text-center bg-green ellipsis"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.fileName+(null==e.type?"":"."+e.type)),1)])),_:1}))],64)}var N=i(27),C=i(5814)["Buffer"];const Z=i(2361),E=(0,l.aZ)({name:"ClipboardItem",props:{type:{type:String,required:!1},value:{type:String,required:!0},fileName:{type:String,required:!1}},data(){return{imageExt:N.Z.imageExt,videoExt:N.Z.videoExt,audioExt:N.Z.audioExt,textExt:N.Z.textExt,popup:!1}},methods:{getMimeType(e){return Z.getType(e)},base64ToString(e){return C.from(e,"base64").toString("utf-8")},onPopup(){this.popup=!0}}});var D=i(2035),P=i(2350),W=i(5926),z=i(151),A=i(9789),L=i.n(A);E.render=_;const U=E;L()(E,"components",{QItemSection:D.Z,QItemLabel:P.Z,QDialog:W.Z,QCard:z.Z});var j=i(7874),B=i(2841),M=i(19),V=i(5814)["Buffer"];const R=i(3559),Q=i(2361),H=500;var G=[],F=!1,O=!1,Y=0,J=!1,K=!1,X=[],ee=[],te=null,ie=null,le=0,ae=null;const oe=(0,l.aZ)({components:{ClipboardItem:U},data(){return{toDeleteItems:[],isAllSelected:!1,showItemDebugInfo:!1,maxFileSize:this.$q.localStorage.has("clipbroad-max-file-size")?this.$q.localStorage.getItem("clipbroad-max-file-size"):N.Z.defaultSettings.maxFileSize,maxItem:this.$q.localStorage.has("clipbroad-max-item")?this.$q.localStorage.getItem("clipbroad-max-item"):N.Z.defaultSettings.maxItem,loading:!1,search:"",actionBtn:!1}},computed:y()(y()(y()({},(0,j.rn)("clipboard",["items"])),(0,j.Se)("clipboard",["lastNonShareItem"])),{},{showDeleteBtn(){return this.toDeleteItems.length>0},filterItemIndex(){return this.items.length<1?[]:[...this.items.keys()].filter((e=>this.getSearchContent(e).toLowerCase().includes(this.search.toLowerCase())))}}),methods:y()(y()({},(0,j.nv)("clipboard",["addItem","updateRemoteParam","removeItem","setItemUploaded","resetItems"])),{},{checkClipboard(){if(this.$q.platform.is.electron){const e=window.myAPI.readClipboard(this.maxFileSize);if(null==e)return;this.addNewItem(null,e.value,!0,null,!1,e.type,e.fileName,null,null)}else this.$q.platform.is.cordova&&cordova.plugins.clipboard.paste((e=>{null!=e&&""!=e&&this.addNewItem(null,e.toString(),!0,null,!1,"text",null,null,null)}))},prevTime(e){const t=(new Date).getTime(),i=parseInt((t-e)/1e3);if(i<=0)return"Right Now";if(i<60)return i.toString()+"s ago";if(i<3600){const e=parseInt(i/60);return e.toString()+"m ago"}if(i<86400){const e=parseInt(i/3600);return e.toString()+"h ago"}{const e=parseInt(i/3600/24);return e.toString()+"d ago"}},itemIcon(e){return"html"==e?"code":"pdf"==e?"picture_as_pdf":"apk"==e?"apps":"text"==e?"subject":N.Z.imageExt.includes(e)?"image":N.Z.archieveExt.includes(e)?"archive":N.Z.excelExt.includes(e)?"table_view":N.Z.wordExt.includes(e)?"article":N.Z.videoExt.includes(e)?"movie":N.Z.audioExt.includes(e)?"audiotrack":N.Z.textExt.includes(e)?"text_fields":"attachment"},copyItem(e){const t=this.items[e];if("text"==t.type)this.$q.platform.is.electron?(window.myAPI.writeClipboardText(t.value),!0===this.$q.localStorage.getItem("clipbroad-show-copied-notification")&&window.myAPI.showNotification(this.$t("copied"),t.value),window.myAPI.hideWindow()):this.$q.platform.is.cordova&&(cordova.plugins.clipboard.copy(t.value),this.$q.notify(this.$t("copied")));else if("html"==t.type){var i=this.getTextFromHtml(t.value);this.$q.platform.is.electron?(window.myAPI.writeClipboardHTML(t.value,i),!0===this.$q.localStorage.getItem("clipbroad-show-copied-notification")&&window.myAPI.showNotification(this.$t("copied"),i),window.myAPI.hideWindow()):this.$q.platform.is.cordova&&(cordova.plugins.clipboard.copy(i),this.$q.notify(this.$t("copied")))}else if("gif"==t.type)this.$q.platform.is.electron?(fetch("data:image/gif;base64,"+t.value).then((e=>e.blob())).then((e=>{(0,B.Z)(t.fileName+"."+t.type,e)})).catch((e=>{M.log(e)})),window.myAPI.clearClipboard()):this.$q.platform.is.cordova&&(cordova.plugins.clipboard.copy(""),window.plugins.socialsharing.shareWithOptions({files:["data:image/gif;base64,"+t.value]},(()=>{}),(e=>{this.$q.notify(e)})));else if(N.Z.imageExt.includes(t.type))this.$q.platform.is.electron?(window.myAPI.writeClipboardImage(t.value),!0===this.$q.localStorage.getItem("clipbroad-show-copied-notification")&&window.myAPI.showNotification(this.$t("copied")),window.myAPI.hideWindow()):this.$q.platform.is.cordova&&(cordova.plugins.clipboard.copy(""),window.plugins.socialsharing.shareWithOptions({files:["data:"+Q.getType(t.type)+";base64,"+t.value]},(()=>{}),(e=>{this.$q.notify(e)})));else if(this.$q.platform.is.electron)t.isBuffer?(0,B.Z)(null==t.type?t.fileName:t.fileName+"."+t.type,V.from(t.value,"base64")):(this.loading=!0,fetch(t.value).then((e=>e.blob())).then((e=>{this.loading=!1,(0,B.Z)(null==t.type?t.fileName:t.fileName+"."+t.type,e)})).catch((e=>{M.log(e)}))),window.myAPI.clearClipboard();else if(this.$q.platform.is.cordova){if(null==t.type)return void this.$q.notify(this.$t("fileTypeNotSupported"));const e=Q.getType(t.type);if(!e)return void this.$q.notify(this.$t("fileTypeNotSupported"));cordova.plugins.clipboard.copy(""),window.plugins.socialsharing.shareWithOptions({subject:t.fileName,files:[t.isBuffer?"data:"+e+";base64,"+t.value:t.value]},(()=>{}),(e=>{this.$q.notify(e)}))}this.addNewItem((new Date).getTime(),t.value,t.isBuffer,t.md5,t.uploaded,t.type,t.fileName,t.remotePath,t.remoteSha)},setDarkMode(){const e=this.$q.localStorage.has("clipbroad-dark-mode")?this.$q.localStorage.getItem("clipbroad-dark-mode"):N.Z.defaultSettings.darkMode;this.$q.dark.set(e),this.$q.dark.toggle()},isCellular(){if(this.$q.platform.is.electron)return!1;var e=navigator.connection.type;return!![Connection.CELL_2G,Connection.CELL_3G,Connection.CELL_4G,Connection.CELL].includes(e)},isConnected(){if(this.$q.platform.is.electron)return!0;var e=navigator.connection.type;return e!=Connection.NONE},shouldSync(){return this.$githubInstance.githubRepoExist?this.isConnected()?!0===this.$q.localStorage.getItem("clipbroad-use-mobile-data")||!this.isCellular()||(this.$q.notify(this.$t("syncUntilWifi")),!1):(this.$q.notify(this.$t("noNetwork")),!1):(M.log("github repo does not exist"),!1)},updateFromGithub(){return new Promise(((e,t)=>{if(!this.shouldSync())return M.log("will not sync due to network settings"),void e();K?t("Already updating"):(K=!0,M.log("updating..."),te=setTimeout((()=>{K=!1}),12e4),this.$githubInstance.githubRepo.getContents("main","",!0).then((({data:t})=>{if(t.length<2)return K=!1,clearTimeout(te),void e();Y=Math.max(t.length-H,0);const i=Math.min(this.maxItem,t.length);let l=0;for(let a=t.length-1;a>=t.length-i;a--)(a=>{let o=t[a].name,s=o.split("."),n=null;s.length>1&&(n=s[s.length-1]);let r=null==n?o.split("-"):o.replace("."+n,"").split("-");if(r.length<2)return void l++;let h=parseInt(r[0]),u=r[1];if(ee.includes(u))return void l++;let d=null;r.length>2&&(d=o.replace("."+n,"").replace(r[0]+"-"+r[1]+"-","")),this.addNewItem(h,t[a].download_url,!0,u,!0,n,d,t[a].name,t[a].sha,!0).then((()=>{l++,l==i&&(K=!1,clearTimeout(te),M.log("updated"),e())}))})(a);if(!(Y<=0))for(let e=0;e<Y;e++)X.push({path:t[e].path,sha:null,mode:"100644",type:"blob"})})).catch((e=>{M.log(e),K=!1,clearTimeout(te),t(e)})))}))},uploadToGithub(){return new Promise(((e,t)=>{if(!this.shouldSync())return void e();if(J)return M.log("still uploading..."),void e();J=!0,ie=setTimeout((()=>{J=!1}),12e4);let i=[];for(let a=0;a<this.items.length;a++)this.items[a].uploaded||(i.push(this.items[a]),this.setItemUploaded(a));if(i.length<=0){if(X.length<=0)return M.log("no item to upload"),J=!1,clearTimeout(ie),void e();{M.log(this.$t("uploading"));let i=X;this.uploadTree(X).then((()=>{M.log(this.$t("uploaded")),X=X.filter((e=>!i.includes(e))),J=!1,clearTimeout(ie),e()})).catch((e=>{M.log(e),this.$q.notify(this.$t("error")),J=!1,clearTimeout(ie),t(e)}))}}else{M.log("uploading");let a=0;for(var l=0;l<i.length;l++)(l=>{let o=this.getItemPath(i[l]),s=i[l].value;switch(i[l].type){case"text":case"html":break;default:s=V.from(s,"base64");break}this.$githubInstance.githubRepo.createBlob(s).then((({data:l})=>{X.push({sha:l.sha,path:o,mode:"100644",type:"blob"}),a++,a==i.length&&this.uploadTree(X).then((()=>{M.log("uploaded"),X=[],J=!1,clearTimeout(ie),e()})).catch((e=>{M.log(e),this.$q.notify(this.$t("error")),J=!1,clearTimeout(ie),t(e)}))})).catch((e=>{M.log(e),this.$q.notify(this.$t("error")),J=!1,clearTimeout(ie),t(e)}))})(l)}}))},uploadTree(e){return new Promise(((t,i)=>{if(e.length<1)return void t();let l;this.getSha().then((e=>{l=e})).then((()=>this.$githubInstance.githubRepo.createTree(e,l.commit))).then((({data:e})=>this.$githubInstance.githubRepo.commit(l.parent,e.sha,"update"))).then((({data:e})=>{this.$githubInstance.githubRepo.updateHead("heads/main",e.sha,!0)})).then((()=>{t()})).catch((e=>{M.log(e),i(e)}))}))},getSha(){return new Promise(((e,t)=>{let i,l;this.$githubInstance.githubRepo.getRef("heads/main").then((({data:e})=>{i=e.object.sha})).then((()=>this.$githubInstance.githubRepo.getCommit(i))).then((({data:t})=>(l=t.tree.sha,e({parent:i,commit:l})))).catch((e=>t(e)))}))},resetTimer(){G.forEach(((e,t)=>{clearInterval(e)})),G=[];const e=setInterval(this.checkClipboard,N.Z.checkClipboardInterval),t=setInterval(this.syncNow,N.Z.autoSyncInterval);G.push(e),G.push(t)},syncNow(e){this.$githubInstance.githubRepoExist?this.updateFromGithub().then(this.uploadToGithub()).then(setTimeout(e,1e3)).catch((e=>{M.log(e),this.reSync()})):setTimeout(e,300)},setupOpenwith(){cordova.openwith.init((()=>{cordova.openwith.addHandler((e=>{for(var t=0;t<e.items.length;++t){var i=e.items[t];cordova.openwith.load(i,((e,t)=>{if(cordova.plugins.clipboard.copy(""),null!=t.path&&""!=t.path){let i=t.path;window.resolveLocalFileSystemURL("file://"+i,(l=>{l.getMetadata((l=>{let a=l.size/1024/1024;if(a>this.maxFileSize)this.$q.notify(this.$t("maxFileSizeTip2"));else if(null!=t.type){const l=Q.getExtension(t.type);if(l){i=i.split("/");var o=i[i.length-1],s=o.split("."),n=o.replace("."+s[s.length-1],"");this.addNewItem(null,e,!0,null,!1,l,n,null,null,!0)}}else this.$q.notify(this.$t("fileTypeNotSupported"))}))}))}else if(null!=t.uri&&""!=t.uri){const o=Q.getExtension(t.type);if(o){let s=t.uri.split("/");var i=s[s.length-1],l=i.split("."),a=i.replace("."+l[l.length-1],"");this.addNewItem(null,e,!0,null,!1,o,a,null,null,!0)}}}))}})),O=!0}),(()=>{M.log("openwith plugin init failed")}))},addNewItem(e,t,i,l,a,o,s,n,r,h=!1){return new Promise(((u,d)=>{if(null==l&&(l=R.hash(t)),null!=this.lastNonShareItem&&this.lastNonShareItem.md5==l)return void u();null==e&&(e=(new Date).getTime());let m=this.items.findIndex((e=>e.md5==l));if(m<0)if(null!=r)if(["text","html"].concat(N.Z.imageExt).concat(N.Z.videoExt).concat(N.Z.audioExt).concat(N.Z.textExt).includes(o)){let t="html"==o||"text"==o;this.$githubInstance.githubRepo.getBlob(r,t).then((({data:t})=>{let i="html"==o||"text"==o?t:t.content;this.addItem({time:e,value:i,isBuffer:!0,md5:l,uploaded:a,type:o,fileName:s,remotePath:n,remoteSha:r,fromShare:h}),u()}))}else this.addItem({time:e,value:t,isBuffer:!1,md5:l,uploaded:a,type:o,fileName:s,remotePath:n,remoteSha:r,fromShare:h}),u();else this.addItem({time:e,value:t,isBuffer:i,md5:l,uploaded:a,type:o,fileName:s,remotePath:n,remoteSha:r,fromShare:h}),u();else if(this.items[m].time==e)this.updateRemoteParam({index:m,value:t,remotePath:n,remoteSha:r}),u();else if(this.items[m].time>e)X.push({path:n,sha:null,mode:"100644",type:"blob"}),u();else{let a=this.items[m];if(this.removeItem(m),null!=a.remotePath){let n=this.getItemPath({time:e,md5:l,fileName:s,type:o});X.push({path:n,sha:a.remoteSha,mode:"100644",type:"blob"}),X.push({path:a.remotePath,sha:null,mode:"100644",type:"blob"}),this.addItem({time:e,value:t,isBuffer:i,md5:l,uploaded:!0,type:o,fileName:s,remotePath:n,remoteSha:a.remoteSha,fromShare:h}),u()}else this.addItem({time:e,value:t,isBuffer:i,md5:l,uploaded:!1,type:o,fileName:s,remotePath:null,remoteSha:null,fromShare:h}),u()}}))},getItemPath(e){let t=e.time.toString()+"-"+e.md5;return null!=e.fileName&&(t+="-"+e.fileName),null!=e.type&&(t+="."+e.type),t},deleteSelected(e=!0){if(this.toDeleteItems.length>0){if(e&&this.$q.notify(this.$t("deleting")),J)return void setTimeout((()=>{this.deleteSelected(!1)}),1e3);this.toDeleteItems.sort((function(e,t){return e-t}));for(let e=0;e<this.toDeleteItems.length;e++)this.items[this.toDeleteItems[e]].uploaded&&X.push({sha:null,path:this.getItemPath(this.items[this.toDeleteItems[e]]),mode:"100644",type:"blob"});if(X.length>0)J=!0,this.uploadTree(X).then((()=>{for(let e=this.toDeleteItems.length-1;e>=0;e--)ee.push(this.items[this.toDeleteItems[e]].md5),this.removeItem(this.toDeleteItems[e]);X=[],J=!1,this.toDeleteItems=[],this.$q.notify(this.$t("deleted"))})).catch((e=>{M.log(e),X=[],J=!1,this.$q.notify(this.$t("error2")),this.reSync()}));else{for(let e=this.toDeleteItems.length-1;e>=0;e--)ee.push(this.items[this.toDeleteItems[e]].md5),this.removeItem(this.toDeleteItems[e]);this.toDeleteItems=[],this.$q.notify(this.$t("deleted"))}}this.actionBtn=!1,this.isAllSelected=!1},selectAll(){if(this.toDeleteItems=[],!0===this.isAllSelected)for(let e=0;e<this.filterItemIndex.length;e++)this.toDeleteItems.push(this.filterItemIndex[e])},initGithub(){if(le>N.Z.githubTokenResetThreshold)return le=0,this.$q.localStorage.remove("clipbroad-github-token"),this.$githubInstance.github=null,void this.$router.push("/settings");this.$q.localStorage.has("clipbroad-github-token")?(this.$q.notify(this.$t("connectingGithub")),this.$setGithub(this.$q.localStorage.getItem("clipbroad-github-token")).then((({data:e})=>{this.$q.notify(this.$t("connectedGithub")),this.$q.notify(this.$t("updating")),this.updateFromGithub().then((()=>{this.$q.notify(this.$t("updated")),this.resetTimer()})).catch((e=>{M.log(e),this.reSync()}))})).catch((()=>{le++,this.$q.notify(this.$t("error")),setTimeout((()=>{this.initGithub()}),2e3)}))):this.resetTimer()},getTextFromHtml(e){var t=document.createElement("div");t.innerHTML=e;var i=t.textContent||t.innerText||"";return t.remove(),i},getSearchContent(e){var t="";return e in this.items&&(null!=this.items[e].type&&(t+="."+this.items[e].type),null!=this.items[e].fileName&&(t+=this.items[e].fileName),"text"==this.items[e].type&&(t+=this.items[e].value),"html"==this.items[e].type&&(t+=this.getTextFromHtml(this.items[e].value)),N.Z.textExt.includes(this.items[e].type)&&(t+=V.from(this.items[e].value,"base64").toString("utf-8"))),t},reSync(){this.resetItems(),X=[],ee=[],this.toDeleteItems=[],this.syncNow()},previewItem(e){ae=null,this.$refs[`clipboardItem${e}`].onPopup()},handleClick(e){null!=ae?(clearTimeout(ae),ae=null,this.copyItem(e)):ae=setTimeout((()=>{this.previewItem(e)}),N.Z.doubleClickThreshold)}}),mounted(){this.initGithub(),this.$q.platform.is.electron&&this.$nextTick((()=>{this.$refs.searchInput.focus()}))},created(){if(this.$i18n.locale=this.$q.lang.getLocale(),this.setDarkMode(),this.$q.platform.is.electron){let e=this.$q.localStorage.has("clipbroad-shortcut")?this.$q.localStorage.getItem("clipbroad-shortcut"):N.Z.defaultSettings.shortcut;window.myAPI.registerShortcut(JSON.stringify(e));let t=this.$q.localStorage.has("clipbroad-hide-icon")?this.$q.localStorage.getItem("clipbroad-hide-icon"):N.Z.defaultSettings.hideIcon;window.myAPI.setHideIcon(t)}F||(window.addEventListener("Sync",this.syncNow,!1),window.addEventListener("setDarkMode",this.setDarkMode,!1),F=!0),this.$q.platform.is.cordova&&(O||this.setupOpenwith())}});var se=i(9297),ne=i(4379),re=i(4842),he=i(4554),ue=i(3414),de=i(9754),me=i(7011),ce=i(8870),pe=i(5735),fe=i(9570),ge=i(8240),we=i(6489),be=i(7281);oe.render=w;const ye=oe;L()(oe,"components",{QPullToRefresh:se.Z,QPage:ne.Z,QCard:z.Z,QInput:re.Z,QIcon:he.Z,QItem:ue.Z,QSpinner:de.Z,QList:me.Z,QTooltip:ce.Z,QItemSection:D.Z,QCheckbox:pe.Z,QItemLabel:P.Z,QToolbar:fe.Z,QBtn:ge.Z}),L()(oe,"directives",{Ripple:we.Z,TouchHold:be.Z})}}]);