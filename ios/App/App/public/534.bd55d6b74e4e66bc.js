"use strict";(self.webpackChunkvibeViewer=self.webpackChunkvibeViewer||[]).push([[534],{76:(E,S,s)=>{s.d(S,{GW:()=>u,dk:()=>d,oK:()=>p});var p=(()=>{return(l=p||(p={})).Prompt="PROMPT",l.Camera="CAMERA",l.Photos="PHOTOS",p;var l})(),u=(()=>{return(l=u||(u={})).Rear="REAR",l.Front="FRONT",u;var l})(),d=(()=>{return(l=d||(d={})).Uri="uri",l.Base64="base64",l.DataUrl="dataUrl",d;var l})()},6388:(E,S,s)=>{s.d(S,{V1:()=>d,dk:()=>u.dk,oK:()=>u.oK});var p=s(7423),u=s(76);const d=(0,p.fo)("Camera",{web:()=>s.e(954).then(s.bind(s,3954)).then(l=>new l.CameraWeb)})},534:(E,S,s)=>{s.r(S),s.d(S,{PromotionsModule:()=>Bt});var p=s(2510),u=s(529),d=s(4006),l=s(7155),t=s(4650),$=s(1281),y=s(3238),B=s(7579);s(7340);const G=new t.OlP("MAT_SORT_DEFAULT_OPTIONS"),K=(0,y.dB)((0,y.Id)(class{}));let z=(()=>{class i extends K{constructor(e){super(),this._defaultOptions=e,this.sortables=new Map,this._stateChanges=new B.x,this.start="asc",this._direction="",this.sortChange=new t.vpe}get direction(){return this._direction}set direction(e){this._direction=e}get disableClear(){return this._disableClear}set disableClear(e){this._disableClear=(0,$.Ig)(e)}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let r=function q(i,a){let e=["asc","desc"];return"desc"==i&&e.reverse(),a||e.push(""),e}(e.start||this.start,e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear),c=r.indexOf(this.direction)+1;return c>=r.length&&(c=0),r[c]}ngOnInit(){this._markInitialized()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(G,8))},i.\u0275dir=t.lG2({type:i,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],active:["matSortActive","active"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[t.qOj,t.TTD]}),i})();var D=s(5938),N=s(8739),I=s(2340),b=s(3098),Y=s(5861),P=s(6388),k=s(1299),F=s(5830),A=s(6895),L=s(4859),V=s(7392),C=s(9549),X=s(4144),tt=s(5470),R=s(148),J=s(430);function et(i,a){if(1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e("title_required"))}}function it(i,a){if(1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e("content_required"))}}function ot(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"img",27),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.captureImage())}),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("src",e.image,t.LSH)}}function rt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"img",28),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.captureImage())}),t.qZA()}}function nt(i,a){if(1&i&&t._UZ(0,"ngx-paypal",29),2&i){const e=t.oxw(2);t.Q6J("ngClass",e.form.valid&&e.image&&e.fileToUpload?"":"disabled")("config",e.payPalConfig)}}function at(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.submit())}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw().$implicit,o=t.oxw();t.Q6J("disabled",!o.form.valid||!o.image||!o.fileToUpload),t.xp6(1),t.Oqu(e("submit"))}}function st(i,a){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"h1",1)(2,"div",2)(3,"div",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4)(6,"button",5),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.cancel())}),t._UZ(7,"mat-icon",6),t.qZA()()()(),t.TgZ(8,"div",7)(9,"form",8)(10,"mat-form-field",9)(11,"mat-label"),t._uU(12),t.qZA(),t._UZ(13,"input",10),t.YNc(14,et,2,1,"mat-error",11),t.qZA(),t.TgZ(15,"mat-form-field",9)(16,"mat-label"),t._uU(17),t.qZA(),t._UZ(18,"textarea",12),t.YNc(19,it,2,1,"mat-error",11),t.qZA(),t.TgZ(20,"div",13)(21,"div",14),t.YNc(22,ot,1,1,"img",15),t.YNc(23,rt,1,0,"img",16),t.qZA()(),t.TgZ(24,"mat-form-field",17)(25,"mat-label"),t._uU(26),t.qZA(),t.TgZ(27,"input",18),t.NdJ("dateChange",function(r){t.CHM(e);const c=t.oxw();return t.KtG(c.addEvent(r))}),t.qZA(),t.TgZ(28,"mat-hint"),t._uU(29,"MM/DD/YYYY"),t.qZA(),t._UZ(30,"mat-datepicker-toggle",19)(31,"mat-datepicker",null,20),t.qZA(),t._UZ(33,"hr"),t.TgZ(34,"div",21),t.YNc(35,nt,1,2,"ngx-paypal",22),t.qZA()()(),t.TgZ(36,"div",23),t._UZ(37,"span",24),t.TgZ(38,"button",25),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.cancel())}),t._uU(39),t.qZA(),t.YNc(40,at,2,2,"button",26),t.qZA(),t.BQk()}if(2&i){const e=a.$implicit,o=t.MAs(32),r=t.oxw();t.xp6(4),t.Oqu(e("add_promotion")),t.xp6(3),t.Q6J("svgIcon","mat_outline:close"),t.xp6(2),t.Q6J("formGroup",r.form),t.xp6(3),t.Oqu(e("title")),t.xp6(1),t.s9C("placeholder",e("title")),t.xp6(1),t.Q6J("ngIf",r.form.get("title").hasError("required")),t.xp6(3),t.Oqu(e("content")),t.xp6(1),t.Q6J("formControlName","content"),t.xp6(1),t.Q6J("ngIf",r.form.get("content").hasError("required")),t.xp6(3),t.Q6J("ngIf",r.image),t.xp6(1),t.Q6J("ngIf",!r.image),t.xp6(3),t.Oqu(e("choose_date")),t.xp6(1),t.Q6J("matDatepicker",o)("min",r.minDate)("matDatepickerFilter",r.filterUsedDates),t.xp6(3),t.Q6J("for",o),t.xp6(5),t.Q6J("ngIf",r.showPaypal),t.xp6(4),t.Oqu(e("cancel")),t.xp6(1),t.Q6J("ngIf",!r.showPaypal)}}let ct=(()=>{class i{constructor(e,o,r,c,m){this.data=e,this.dialogRef=o,this.variableService=r,this.apiService=c,this.formBuilder=m,this.image=null,this.showPaypal=!1,this.filterUsedDates=g=>{const T=new Date(g).getTime();return!this.promotionList.find(h=>new Date(h.promotionDate).getTime()==T)},this.form=this.data.form,this.promotionList=this.data.promotionList,this.minDate=new Date}ngOnInit(){this.initConfig()}getWeekNumber(e){const o=new Date(e),r=new Date(o.getFullYear(),0,1),c=(o.valueOf()-r.valueOf())/864e5;return Math.ceil((c+r.getDay()+1)/7)}addEvent(e){this.showPaypal=!1,this.promotionList.forEach(o=>{this.getWeekNumber(o.promotionDate)==this.getWeekNumber(e.value)&&(this.showPaypal=!0)})}ngAfterViewInit(){}captureImage(){var e=this;return(0,Y.Z)(function*(){P.V1.getPhoto({quality:100,allowEditing:!1,source:P.oK.Prompt,resultType:P.dk.Base64,height:1e3}).then(function(){var r=(0,Y.Z)(function*(c){e.image=`data:image/jpeg;base64,${c.base64String}`;const m=yield e.variableService.resizeImage({file:e.dataURLtoFile(`data:image/jpeg;base64,${c.base64String}`),maxSize:1e3});e.fileToUpload=e.dataURLtoFile(m)});return function(c){return r.apply(this,arguments)}}(),r=>{console.log(r)})})()}dataURLtoFile(e){for(var o=e.split(","),r=o[0].match(/:(.*?);/)[1],c=atob(o[1]),m=c.length,g=new Uint8Array(m);m--;)g[m]=c.charCodeAt(m);return new File([g],"file."+r.replace("image/",""),{type:r})}uploadFile(e,o){return new Promise(c=>{try{const m=new FormData;m.append("file",e),this.apiService.upload("users",m,o).subscribe(g=>{g.type===u.dt.Response&&c(!0)})}catch{c(!1)}})}initConfig(){setTimeout(()=>{this.payPalConfig={currency:"USD",clientId:I.N.paypalClientId,createOrderOnClient:e=>({intent:"CAPTURE",purchase_units:[{amount:{currency_code:"USD",value:"5",breakdown:{item_total:{currency_code:"USD",value:"5"}}},items:[{name:"Vibe Viewer Promotion",quantity:"1",category:"DIGITAL_GOODS",unit_amount:{currency_code:"USD",value:"5"}}]}]}),advanced:{commit:"true"},style:{label:"paypal",layout:"vertical",shape:"pill"},onApprove:(e,o)=>{console.log("onApprove - transaction was approved, but not authorized",e,o),this.form.controls.urlImage.setValue(this.image),this.form.controls.fileToUpload.setValue(this.fileToUpload),setTimeout(()=>{this.dialogRef.close(this.form.value)},200)},onClientAuthorization:e=>{console.log("onClientAuthorization - you should probably inform your server about completed transaction at this point",e)},onCancel:(e,o)=>{console.log("OnCancel",e,o)},onError:e=>{console.log("OnError",e)},onClick:(e,o)=>{console.log("onClick",e,o)}}},2e3)}cancel(){this.dialogRef.close(null)}submit(){let e=!0;this.form.controls.userId.value&&this.image&&this.fileToUpload&&this.form.valid||(e=!1),e&&(this.form.controls.urlImage.setValue(this.image),this.form.controls.fileToUpload.setValue(this.fileToUpload),this.dialogRef.close(this.form.value))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(D.WI),t.Y36(D.so),t.Y36(k.S),t.Y36(F.s),t.Y36(d.qu))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-promotion"]],decls:1,vars:0,consts:[[4,"transloco"],["mat-dialog-title","",1,"accent","dialog-title","bg-primary","text-on-primary","text-secondary",2,"margin-bottom","0px !important"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-semibold","leading-tight"],[1,"-mr-3"],["mat-icon-button","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-dialog-content","",1,"content-dialog-scroll"],["name","form","novalidate","",3,"formGroup"],[1,"w-full"],["matInput","","formControlName","title","id","title","maxlength","50",3,"placeholder"],[4,"ngIf"],["id","content","matInput","","maxlength","200",3,"formControlName"],["fxLayout","","fxLayoutAlign","center center",2,"margin-top","4px","margin-bottom","12px","cursor","pointer","text-align","center"],[1,"image-box"],["class","image-picker","onerror","this.src='assets/images/no-image.jpg';this.onerror='';",3,"src","click",4,"ngIf"],["class","image-placeholder","src","assets/images/add-image.png","onerror","this.src='assets/images/no-image.jpg';this.onerror='';",3,"click",4,"ngIf"],["appearance","fill",1,"w-full"],["matInput","","formControlName","promotionDate",3,"matDatepicker","min","matDatepickerFilter","dateChange"],["matSuffix","",3,"for"],["picker",""],["fxLayout","","fxLayoutAlign","center center"],[3,"ngClass","config",4,"ngIf"],["mat-dialog-actions","","align","end",1,"dialog-footer"],[2,"flex","1 1 auto"],["mat-raised-button","","color","default",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],["onerror","this.src='assets/images/no-image.jpg';this.onerror='';",1,"image-picker",3,"src","click"],["src","assets/images/add-image.png","onerror","this.src='assets/images/no-image.jpg';this.onerror='';",1,"image-placeholder",3,"click"],[3,"ngClass","config"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(e,o){1&e&&t.YNc(0,st,41,19,"ng-container",0)},dependencies:[A.mk,A.O5,d._Y,d.Fj,d.JJ,d.JL,d.nD,d.sg,d.u,L.lW,V.Hw,C.TO,C.KE,C.bx,C.hX,C.R9,X.Nt,tt.nu,R.Mq,R.hl,R.nW,J.KI],styles:[".content-dialog[_ngcontent-%COMP%]{padding-top:12px}.content-dialog-scroll[_ngcontent-%COMP%]{max-height:70vh;overflow:auto;margin-right:-12px;margin-bottom:-12px!important;padding-top:12px}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none;touch-action:none}"]}),i})();var lt=s(7423),dt=s(4327),mt=s(7495),ht=s(7009),pt=s(7420),ut=s(1683),gt=s(6429),ft=s(3546),_t=s(2494);function vt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"fuse-alert",19)(1,"span",20),t._uU(2,"Complete Subscription"),t.qZA(),t._uU(3),t.TgZ(4,"button",21),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(3);return t.KtG(r.subscribe())}),t._uU(5,"Re-Send Subscription Email "),t.qZA()()}if(2&i){const e=t.oxw(3);t.Q6J("type","warn")("appearance","fill"),t.xp6(3),t.hij(" Your trial ends in ",e.daysLeft," days "),t.xp6(1),t.Q6J("color","default")}}function St(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"th",22)(1,"button",23),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(3);return t.KtG(r.initUpsert(null))}),t.TgZ(2,"mat-icon",24),t._uU(3,"add"),t.qZA()()()}if(2&i){const e=t.oxw(2).$implicit,o=t.oxw();t.xp6(1),t.s9C("matTooltip",e("add_promotion")),t.Q6J("disabled",o.loading)}}function xt(i,a){1&i&&t._UZ(0,"td",25)}function wt(i,a){if(1&i&&(t.TgZ(0,"th",26)(1,"p",27),t._uU(2),t.qZA()()),2&i){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(e("title"))}}function Dt(i,a){if(1&i&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.hij(" ",e.title," ")}}function bt(i,a){if(1&i&&(t.TgZ(0,"th",26)(1,"p",29),t._uU(2),t.qZA()()),2&i){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(e("date"))}}function Ct(i,a){if(1&i&&(t.TgZ(0,"td",28),t._uU(1),t.ALo(2,"date"),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.promotionDate,"MMM dd")," ")}}function Tt(i,a){if(1&i&&(t.TgZ(0,"th",26)(1,"p",30),t._uU(2),t.qZA()()),2&i){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(e("views"))}}function yt(i,a){if(1&i&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.hij(" ",e.countRead," ")}}function At(i,a){1&i&&(t.TgZ(0,"th",26)(1,"p",30),t._uU(2,"Image"),t.qZA()())}function Mt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"td",28)(1,"div",31)(2,"div",32)(3,"div",33),t.NdJ("click",function(){const c=t.CHM(e).$implicit,m=t.oxw(3);return t.KtG(m.imageClick(c.id+"."+c.urlImage))}),t.TgZ(4,"div",34)(5,"div",35),t._uU(6," \xa0 "),t.qZA()()()()()()}if(2&i){const e=a.$implicit,o=t.oxw(3);t.xp6(5),t.Udp("background-image","url("+o.api+"/Images/Promotions/"+e.id+"."+e.urlImage+")")}}function It(i,a){1&i&&t._UZ(0,"tr",36)}function Pt(i,a){1&i&&t._UZ(0,"tr",37)}const Rt=function(){return[5,10,25,100]};function Ot(i,a){if(1&i&&(t.TgZ(0,"div",2),t.YNc(1,vt,6,4,"fuse-alert",3),t.TgZ(2,"div",4)(3,"mat-card",5)(4,"table",6),t.ynx(5,7),t.YNc(6,St,4,2,"th",8),t.YNc(7,xt,1,0,"td",9),t.BQk(),t.ynx(8,10),t.YNc(9,wt,3,1,"th",11),t.YNc(10,Dt,2,1,"td",12),t.BQk(),t.ynx(11,13),t.YNc(12,bt,3,1,"th",11),t.YNc(13,Ct,3,4,"td",12),t.BQk(),t.ynx(14,14),t.YNc(15,Tt,3,1,"th",11),t.YNc(16,yt,2,1,"td",12),t.BQk(),t.ynx(17,15),t.YNc(18,At,3,0,"th",11),t.YNc(19,Mt,7,2,"td",12),t.BQk(),t.YNc(20,It,1,0,"tr",16),t.YNc(21,Pt,1,0,"tr",17),t.qZA(),t._UZ(22,"mat-paginator",18),t.qZA()()()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.trial),t.xp6(3),t.Q6J("dataSource",e.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(8,Rt))("pageSize",5)("disabled",e.loading)}}function Ut(i,a){if(1&i&&(t.ynx(0),t.YNc(1,Ot,23,9,"div",1),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.user)}}let Zt=(()=>{class i{constructor(e,o,r,c,m,g,T,h,j,f,Q,O){this._activatedRoute=e,this._userService=o,this.dialog=r,this._formBuilder=c,this.apiService=m,this._snackBar=g,this.variableService=T,this.sharedService=h,this._router=j,this.fuseConfirmationService=f,this.router=Q,this.eventEmitterService=O,this.timestamp=0,this.imagesFolder=I.N.api+"/Images/",this.loading=!0,this.promotionList=[],this.api=I.N.api,this.theFile=null,this.messages=[],this.trial=!1,this.daysLeft="0",this.loading=!0,this._userService.get().subscribe(x=>{if(this.user=x,this.eventEmitterService.onChangeUser(x),this.user){var w=((new Date).getTime()-new Date(this.user.ts).getTime())/864e5;b.i.parse(this.user.statusId).toString()!==b.i.parse("8225b68c-0691-4cb7-aff2-5efe9866f434").toString()&&w>14?this.router.navigateByUrl("/subscription"):(b.i.parse(this.user.statusId).toString()!==b.i.parse("8225b68c-0691-4cb7-aff2-5efe9866f434").toString()&&w<=14&&(this.trial=!0,this.daysLeft=(14-w).toFixed(0)),this.timestamp=(new Date).getTime(),this.displayedColumns="web"!==lt.dV.getPlatform()?["title","promotionDate","countRead","cud"]:["title","promotionDate","countRead","image","cud"],this.getPromotions().then(U=>{this.promotionList=U.sort((Z,H)=>new Date(H.promotionDate).getTime()-new Date(Z.promotionDate).getTime()),this.dataSource=new l.by(this.promotionList),this.dataSource.paginator=this.paginatorPromotion,this.dataSource.sort=this.sortPromotion,this.loading=!1}))}else localStorage.removeItem("AT"),localStorage.removeItem("RT"),localStorage.removeItem("ID"),this.router.navigateByUrl("/sign-in");this.eventEmitterService.onChangePage("promotions")},x=>{localStorage.removeItem("AT"),localStorage.removeItem("RT"),localStorage.removeItem("ID");const _=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/home";this._router.navigateByUrl(_)})}ngOnInit(){}imageClick(e){console.log(e)}getPromotions(){return new Promise(o=>{try{this.apiService.getItemsByUserId("promotions",this.user.id).subscribe(r=>{o(r)})}catch(r){console.log(r),o([])}})}subscribe(){this.apiService.submitSubscription(this.user.id).subscribe(e=>{const o=new D.vA;o.data={title:"Email Sent",body:"A subscription link has been sent to <b>"+this.user.email+"</b>"},o.autoFocus=!0,o.disableClose=!0,o.hasBackdrop=!0,o.ariaLabel="fffff",o.width="100vw",o.maxWidth="800px",o.panelClass="full-screen-modal",this.dialog.open(dt.x,o)})}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}menuClicked(e){this._router.navigate([e])}initUpsert(e){var o=new Date,r=o.getFullYear(),c=o.getMonth(),m=o.getDate(),g=o.getHours();new Date(r,c,m,g,0,0),this.form=this._formBuilder.group({id:[b.i.create().toString()],userId:[this.user.id],title:[null,d.kI.required],content:[null,d.kI.required],urlImage:[null],promotionDate:[null,d.kI.required],fileToUpload:[null],statusId:["bd06cbae-1471-47db-9c2f-dfab61f8378f"]});const h=new D.vA;h.data={promotionList:this.promotionList,item:e,form:this.form,title:null==e?"Insert":"Update"},h.autoFocus=!0,h.disableClose=!0,h.hasBackdrop=!0,h.ariaLabel="fffff",h.width="100vw",h.maxWidth="800px",h.panelClass="full-screen-modal",this.dialog.open(ct,h).afterClosed().subscribe(f=>{if(f){this.loading=!0,Date.now(),f.urlImage=f.fileToUpload.name.split(".").pop();let O=f.fileToUpload;const x=new FormData;x.append("file",O,f.urlImage),this.apiService.uploadPromotion(f.id,x,f.urlImage).subscribe({next:_=>{_.type===u.dt.UploadProgress?console.log(Math.round(100*_.loaded/_.total)):_.type===u.dt.Response&&this.apiService.saveItem("promotions",f).subscribe({next:w=>{this.getPromotions().then(U=>{this.promotionList=U.sort((Z,H)=>new Date(H.promotionDate).getTime()-new Date(Z.promotionDate).getTime()),this.dataSource=new l.by(this.promotionList),this.dataSource.paginator=this.paginatorPromotion,this.dataSource.sort=this.sortPromotion,this.loading=!1})},error:w=>{alert(JSON.stringify(w))}})},error:_=>{alert(JSON.stringify(_))}})}else this.loading=!1})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.gz),t.Y36(mt.K),t.Y36(D.uw),t.Y36(d.qu),t.Y36(F.s),t.Y36(ht.ux),t.Y36(k.S),t.Y36(pt.F),t.Y36(p.F0),t.Y36(ut.R),t.Y36(p.F0),t.Y36(gt.Y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["promotions"]],viewQuery:function(e,o){if(1&e&&(t.Gf(N.NW,5),t.Gf(z,5)),2&e){let r;t.iGM(r=t.CRH())&&(o.paginatorPromotion=r.first),t.iGM(r=t.CRH())&&(o.sortPromotion=r.first)}},decls:1,vars:0,consts:[[4,"transloco"],["class","flex flex-col w-full min-w-0 sm:absolute sm:inset-0 sm:overflow-hidden",4,"ngIf"],[1,"flex","flex-col","w-full","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden"],["class","mb-8",3,"type","appearance",4,"ngIf"],[1,"table-container","bg-card","shadow","rounded-2xl"],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","cud"],["mat-header-cell","","class","cudColumnExtra ml-0","style","padding-left: 0px!important;z-index: 10!important;",4,"matHeaderCellDef"],["mat-cell","","class","cudColumnExtra ml-0","style","padding-left: 0px!important;",4,"matCellDef"],["matColumnDef","title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","table-cell",4,"matCellDef"],["matColumnDef","promotionDate"],["matColumnDef","countRead"],["matColumnDef","image"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions","pageSize","disabled"],[1,"mb-8",3,"type","appearance"],["fuseAlertTitle",""],["mat-flat-button","","type","button",1,"mt-4",3,"color","click"],["mat-header-cell","",1,"cudColumnExtra","ml-0",2,"padding-left","0px!important","z-index","10!important"],["mat-fab","","color","primary",2,"margin-top","-15px","margin-right","-8px",3,"matTooltip","disabled","click"],[1,"fab-icon"],["mat-cell","",1,"cudColumnExtra","ml-0",2,"padding-left","0px!important"],["mat-header-cell",""],["mat-sort-header","title",1,"table-header"],["mat-cell","",1,"table-cell"],["mat-sort-header","promotionDate",1,"table-header"],["mat-sort-header","countRead",1,"table-header"],[2,"width","75px","height","75px"],[1,"single-image-container-small-1"],[1,"single-image-container-small-2",3,"click"],[1,"single-image-container-small-3"],[1,"single-image-small"],["mat-header-row",""],["mat-row",""]],template:function(e,o){1&e&&t.YNc(0,Ut,2,1,"ng-container",0)},dependencies:[A.O5,L.lW,ft.a8,V.Hw,_t.W,N.NW,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,J.KI,A.uU],encapsulation:2}),i})();var Ht=s(5524);const Et=[{path:"",component:Zt}];let Bt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(Et),Ht.m]}),i})()}}]);