"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[195],{195:(t,e,i)=>{i.r(e),i.d(e,{default:()=>_});var a=i(790),o=i(7e3),s=i(1872);const n=["src"];function h(t,e,i,h,l,r){const d=(0,a.up)("q-icon"),c=(0,a.up)("q-item-section"),p=(0,a.up)("q-item-label"),m=(0,a.up)("q-item"),u=(0,a.up)("q-list"),g=(0,a.up)("q-page"),b=(0,a.up)("q-pull-to-refresh"),f=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(b,{onRefresh:t.syncNow,color:"black",icon:"autorenew"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{bordered:"",separator:""},{default:(0,a.w5)((()=>[(0,a.Wm)(o.W3,{appear:"","enter-active-class":"animated slideInLeft","leave-active-class":"animated fadeOutLeft"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.items,((e,i)=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(m,{key:i,clickable:"",onDblclick:e=>t.copyItem(i)},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{color:"primary",name:t.itemIcon(e.type)},null,8,["name"])])),_:2},1024),"text"==e.type?((0,a.wg)(),(0,a.j4)(c,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{lines:"3"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.value),1)])),_:2},1024)])),_:2},1024)):(0,a.kq)("",!0),"png"==e.type?((0,a.wg)(),(0,a.j4)(c,{key:1},{default:(0,a.w5)((()=>[(0,a._)("img",{src:"data:image/png;base64,"+e.value,style:{"max-height":"300px","object-fit":"contain","max-width":"100%"}},null,8,n)])),_:2},1024)):(0,a.kq)("",!0),(0,a.Wm)(c,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.prevTime(e.time)),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onDblclick"])),[[f]]))),128))])),_:1})])),_:1})])),_:1})])),_:1},8,["onRefresh"])}var l=i(3982),r=i.n(l),d=(i(7837),i(5402)),c=i(6211),p=i(4834)["Buffer"];const m=i(3113),u=500;var g=[],b=!1,f=!1,I=0;const w=(0,a.aZ)({computed:r()(r()({},(0,d.rn)("clipboard",["items"])),(0,d.Se)("clipboard",["lastLocalItem"])),methods:r()(r()({},(0,d.nv)("clipboard",["addItem","filterItem","removeItem","setItemUploaded"])),{},{checkClipboard(){if(this.$q.platform.is.electron){const t=window.myAPI.readClipboardImage();if(null==t){const t=window.myAPI.readClipboardText();this.addItemInternal(t,"text")}else this.addItemInternal(t,"png")}else this.$q.platform.is.capacitor?Clipboard.read().then((t=>{"text/plain"==t.type&&this.addItemInternal(t.value,"text")})):this.$q.platform.is.cordova&&cordova.plugins.clipboard.paste((t=>{this.addItemInternal(t,"text")}))},prevTime(t){const e=(new Date).getTime(),i=parseInt((e-t)/1e3);if(i<=0)return"Right Now";if(i<60)return i.toString()+"s ago";if(i<3600){const t=parseInt(i/60);return t.toString()+"m ago"}if(i<86400){const t=parseInt(i/3600);return t.toString()+"h ago"}{const t=parseInt(i/3600/24);return t.toString()+"d ago"}},itemIcon(t){switch(t){case"text":return"text_fields";case"png":return"image";default:return"text_fields"}},copyItem(t){const e=this.items[t];switch(e.type){case"text":this.removeItem(t),e.time=(new Date).getTime(),e.uploaded=!1,this.addItem(e),this.$q.platform.is.electron?(window.myAPI.writeClipboardText(e.value),!0===this.$q.localStorage.getItem("clipbroad-show-copied-notification")&&window.myAPI.showNotification("Item copied!",e.value),window.myAPI.hideWindow()):this.$q.platform.is.cordova&&(cordova.plugins.clipboard.copy(e.value),this.$q.notify("Copied!"));break;case"png":this.$q.platform.is.electron?(window.myAPI.writeClipboardImage(e.value),!0===this.$q.localStorage.getItem("clipbroad-show-copied-notification")&&window.myAPI.showNotification("Item copied!"),window.myAPI.hideWindow()):this.$q.platform.is.cordova&&window.plugins.socialsharing.shareWithOptions({files:["data:image/png;base64,"+e.value]},null,(t=>{this.$q.notify(t)}));break;default:break}},setDarkMode(){if(this.$q.platform.is.electron){const t=window.myAPI.isDarkMode();this.$q.dark.set(t)}},updateFromGithub(){this.$q.notify("Updating..."),this.$githubInstance.githubRepoExist?this.$githubInstance.githubRepo.getContents("main","",!0).then((({data:t})=>{I=Math.max(t.length-u,I);const e=this.$q.localStorage.has("clipbroad-max-item")?this.$q.localStorage.getItem("clipbroad-max-item"):20;var i=0;for(let s=t.length-1;s>=Math.max(0,t.length-u);s--)(a=>{if(i>=e)return;let o=t[a].name;o=o.split(".");let s=o[0].split("-");if(s.length<2)return;let n=o.length<2?"text":o[1],h=parseInt(s[0]),l=s[1],r=this.items.find((t=>t.md5==s[1]));if(null!=r&&r.time>h)return;i++;let d=t[a].sha,c="text"==n;this.$githubInstance.githubRepo.getBlob(d,c).then((({data:t})=>{let e="text"==n?t:t.content;this.filterItem(l),this.addItem({time:h,md5:l,uploaded:!0,value:e,type:n,source:"remote"})}))})(s);if(I<=0)return;let a,o=[];for(let s=0;s<I;s++)o.push({path:t[s].path,sha:null,mode:"100644",type:"blob"});this.GetSha().then((t=>{a=t})).then((()=>this.$githubInstance.githubRepo.createTree(o,a.commit))).then((({data:t})=>this.$githubInstance.githubRepo.commit(a.parent,t.sha,"delete files"))).then((({data:t})=>{this.$githubInstance.githubRepo.updateHead("heads/main",t.sha,!0)})).then((()=>{I=0,c.log("delete complete")})).catch((t=>{c.log(t)}))})):c.log("github repo does not exist")},UploadToGithub(){return new Promise(((t,e)=>{if(c.log("uploading to github"),!this.$githubInstance.githubRepoExist)return void c.log("github repo does not exist");let i=[],a=[];for(let s=0;s<this.items.length;s++)this.items[s].uploaded||""==this.items[s].value||(a.push(this.items[s]),this.setItemUploaded(s));if(a.length<=0)return c.log("no item to upload"),void t();for(var o=0;o<a.length;o++)(o=>{let s=a[o].time.toString()+"-"+a[o].md5,n=a[o].value;switch(a[o].type){case"png":s+=".png",n=p.from(n,"base64");break;default:s+="-text";break}this.$githubInstance.githubRepo.createBlob(n).then((({data:o})=>{if(i.push({sha:o.sha,path:s,mode:"100644",type:"blob"}),i.length==a.length){let a;this.GetSha().then((t=>{a=t})).then((()=>this.$githubInstance.githubRepo.createTree(i,a.commit))).then((({data:t})=>this.$githubInstance.githubRepo.commit(a.parent,t.sha,"update"))).then((({data:t})=>{this.$githubInstance.githubRepo.updateHead("heads/main",t.sha,!0)})).then((()=>{this.$q.notify("Upload completed."),t()})).catch((t=>{this.$q.notify(t),e()}))}})).catch((t=>{this.$q.notify(t),e()}))})(o)}))},GetSha(){return new Promise(((t,e)=>{let i,a;this.$githubInstance.githubRepo.getRef("heads/main").then((({data:t})=>{i=t.object.sha})).then((()=>this.$githubInstance.githubRepo.getCommit(i))).then((({data:e})=>(a=e.tree.sha,t({parent:i,commit:a})))).catch((t=>e(t)))}))},resetTimer(){g.forEach(((t,e)=>{clearInterval(t)})),g=[];const t=setInterval(this.checkClipboard,500),e=setInterval(this.UploadToGithub,3e4);g.push(t),g.push(e)},syncNow(t){this.$githubInstance.githubRepoExist?this.UploadToGithub().then((()=>{this.updateFromGithub(),setTimeout(t,1e3)})):this.$router.push("/settings")},setupOpenwith(){cordova.openwith.init((()=>{cordova.openwith.addHandler((t=>{for(var e=0;e<t.items.length;++e){var i=t.items[e];cordova.openwith.load(i,((e,i)=>{i.type.includes("image/")?this.addItemInternal(e,"png","share"):this.$q.notify("This file type is not supported"),t.exit&&cordova.openwith.exit()}))}})),f=!0}),(()=>{this.$q.notify("openwith plugin init failed")}))},addItemInternal(t,e,i="local"){const a=m.hash(t);""!=t&&(this.items.length<1||null!=this.lastLocalItem&&this.lastLocalItem.md5!=a)&&(this.filterItem(a),this.addItem({time:(new Date).getTime(),value:t,md5:a,uploaded:!1,type:e,source:i}))}}),mounted(){this.$q.localStorage.has("clipbroad-github-token")&&this.$setGithub(this.$q.localStorage.getItem("clipbroad-github-token")).then((()=>{this.updateFromGithub()})).catch((()=>{})),this.resetTimer()},created(){this.setDarkMode(),b||(window.addEventListener("Sync",this.syncNow,!1),b=!0);let t=!this.$q.localStorage.has("clipbroad-hide-icon")||this.$q.localStorage.getItem("clipbroad-hide-icon");this.$q.platform.is.electron&&window.myAPI.setHideIcon(t),this.$q.platform.is.cordova&&(f||this.setupOpenwith()),this.resetTimer()}});var v=i(6399),y=i(2278),$=i(1229),q=i(5957),x=i(4564),k=i(3770),R=i(7870),S=i(7114),T=i(7910),P=i.n(T);w.render=h;const _=w;P()(w,"components",{QPullToRefresh:v.Z,QPage:y.Z,QList:$.Z,QItem:q.Z,QItemSection:x.Z,QIcon:k.Z,QItemLabel:R.Z}),P()(w,"directives",{Ripple:S.Z})}}]);