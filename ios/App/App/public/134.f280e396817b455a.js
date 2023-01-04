"use strict";(self.webpackChunkvibeViewer=self.webpackChunkvibeViewer||[]).push([[134],{8134:(k,d,r)=>{r.r(d),r.d(d,{AuthResetPasswordModule:()=>E});var l=r(2510),u=r(4859),c=r(9549),p=r(7392),g=r(4144),f=r(1572),w=r(5804),x=r(7775),v=r(5524),m=r(4006),_=r(8746),y=r(3844);class A{static isEmptyInputValue(o){return null==o||0===o.length}static mustMatch(o,s){return i=>{const n=i.get(o),a=i.get(s);if(!n||!a||(a.hasError("mustMatch")&&(delete a.errors.mustMatch,a.updateValueAndValidity()),this.isEmptyInputValue(a.value)||n.value===a.value))return null;const h={mustMatch:!0};return a.setErrors(h),h}}}var Z=r(7423),t=r(4650),P=r(3071),C=r(2494),T=r(6895),I=r(430);const U=["resetPasswordNgForm"];function J(e,o){if(1&e&&(t.TgZ(0,"fuse-alert",41),t._uU(1),t.qZA()),2&e){const s=t.oxw(2);t.Q6J("appearance","outline")("showIcon",!1)("type",s.alert.type)("@shake","error"===s.alert.type),t.xp6(1),t.hij(" ",s.alert.message," ")}}function R(e,o){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function b(e,o){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function F(e,o){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function N(e,o){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function j(e,o){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const s=t.oxw().$implicit;t.xp6(1),t.hij(" ",s("password_confirm_required")," ")}}function Q(e,o){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const s=t.oxw().$implicit;t.xp6(1),t.hij(" ",s("passwords_must_match")," ")}}function M(e,o){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const s=t.oxw().$implicit;t.xp6(1),t.hij(" ",s("reset_password")," ")}}function q(e,o){1&e&&t._UZ(0,"mat-progress-spinner",43),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const Y=function(){return["/sign-in"]};function O(e,o){if(1&e){const s=t.EpF();t.ynx(0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.qZA(),t._UZ(7,"img",6),t.qZA(),t.YNc(8,J,2,5,"fuse-alert",7),t.TgZ(9,"form",8,9)(11,"mat-form-field",10)(12,"mat-label"),t._uU(13),t.qZA(),t._UZ(14,"input",11,12),t.TgZ(16,"button",13),t.NdJ("click",function(){t.CHM(s);const n=t.MAs(15);return t.KtG(n.type="password"===n.type?"text":"password")}),t.YNc(17,R,1,1,"mat-icon",14),t.YNc(18,b,1,1,"mat-icon",14),t.qZA(),t.TgZ(19,"mat-error"),t._uU(20),t.qZA()(),t.TgZ(21,"mat-form-field",10)(22,"mat-label"),t._uU(23),t.qZA(),t._UZ(24,"input",15,16),t.TgZ(26,"button",13),t.NdJ("click",function(){t.CHM(s);const n=t.MAs(25);return t.KtG(n.type="password"===n.type?"text":"password")}),t.YNc(27,F,1,1,"mat-icon",14),t.YNc(28,N,1,1,"mat-icon",14),t.qZA(),t.YNc(29,j,2,1,"mat-error",17),t.YNc(30,Q,2,1,"mat-error",17),t.qZA(),t.TgZ(31,"button",18),t.NdJ("click",function(){t.CHM(s);const n=t.oxw();return t.KtG(n.resetPassword())}),t.YNc(32,M,2,1,"span",17),t.YNc(33,q,1,2,"mat-progress-spinner",19),t.qZA(),t.TgZ(34,"div",20)(35,"span"),t._uU(36,"{{t('return_to)}}"),t.qZA(),t.TgZ(37,"a",21),t._uU(38),t.qZA()()()()(),t.TgZ(39,"div",22),t.O4$(),t.TgZ(40,"svg",23)(41,"g",24),t._UZ(42,"circle",25)(43,"circle",26),t.qZA()(),t.TgZ(44,"svg",27)(45,"defs")(46,"pattern",28),t._UZ(47,"rect",29),t.qZA()(),t._UZ(48,"rect",30),t.qZA(),t.kcU(),t.TgZ(49,"div",31)(50,"div",32)(51,"div"),t._uU(52),t.qZA(),t.TgZ(53,"div"),t._uU(54,"Vibe Viewer"),t.qZA()(),t.TgZ(55,"div",33),t._uU(56),t.qZA(),t.TgZ(57,"div",34)(58,"div",35),t._UZ(59,"img",36)(60,"img",37)(61,"img",38)(62,"img",39),t.qZA(),t.TgZ(63,"div",40),t._uU(64),t.qZA()()()()(),t.BQk()}if(2&e){const s=o.$implicit,i=t.MAs(15),n=t.MAs(25),a=t.oxw();t.xp6(6),t.Oqu(s("reset_password")),t.xp6(2),t.Q6J("ngIf",a.showAlert),t.xp6(1),t.Q6J("formGroup",a.resetPasswordForm),t.xp6(4),t.Oqu(s("password")),t.xp6(1),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===i.type),t.xp6(1),t.Q6J("ngIf","text"===i.type),t.xp6(2),t.hij(" ",s("password_required")," "),t.xp6(3),t.Oqu(s("password_confirm")),t.xp6(1),t.Q6J("formControlName","passwordConfirm"),t.xp6(3),t.Q6J("ngIf","password"===n.type),t.xp6(1),t.Q6J("ngIf","text"===n.type),t.xp6(1),t.Q6J("ngIf",a.resetPasswordForm.get("passwordConfirm").hasError("required")),t.xp6(1),t.Q6J("ngIf",a.resetPasswordForm.get("passwordConfirm").hasError("mustMatch")),t.xp6(1),t.Q6J("color","primary")("disabled",a.resetPasswordForm.disabled),t.xp6(1),t.Q6J("ngIf",!a.resetPasswordForm.disabled),t.xp6(1),t.Q6J("ngIf",a.resetPasswordForm.disabled),t.xp6(4),t.Q6J("routerLink",t.DdM(23,Y)),t.xp6(1),t.hij("",s("sign_in")," "),t.xp6(14),t.Oqu(s("welcome_to")),t.xp6(4),t.hij(" ",s("join_many")," "),t.xp6(8),t.Oqu(s("more_than_17k"))}}const V=[{path:"",component:(()=>{class e{constructor(s,i,n){this.userService=s,this._formBuilder=i,this.route=n,this.native="",this.alert={type:"success",message:""},this.showAlert=!1,this.native=Z.dV.isNativePlatform()?"White":""}ngOnInit(){this.route.queryParams.subscribe(s=>{this.id=s.id}),this.resetPasswordForm=this._formBuilder.group({password:["",m.kI.required],passwordConfirm:["",m.kI.required]},{validators:A.mustMatch("password","passwordConfirm")}),setTimeout(()=>{},100)}resetPassword(){this.resetPasswordForm.invalid||(this.resetPasswordForm.disable(),this.showAlert=!1,this.userService.resetPassword(this.id,this.resetPasswordForm.get("password").value).pipe((0,_.x)(()=>{this.resetPasswordForm.enable(),this.resetPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(s=>{this.alert={type:"success",message:"Your password has been reset."}},s=>{this.alert={type:"error",message:"Something went wrong, please try again."}}))}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(P.K),t.Y36(m.qu),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-reset-password"]],viewQuery:function(s,i){if(1&s&&t.Gf(U,5),2&s){let n;t.iGM(n=t.CRH())&&(i.resetPasswordNgForm=n.first)}},decls:1,vars:0,consts:[[4,"transloco"],[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"inline-flex","items-center","justify-between","w-full","mt-1.5"],[1,"text-4xl","font-extrabold","tracking-tight","leading-tight"],["src","assets/images/logo/logo-text.png",1,"auth-logo"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["resetPasswordNgForm","ngForm"],[1,"w-full"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","password-confirm","matInput","","type","password",3,"formControlName"],["passwordConfirmField",""],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(s,i){1&s&&t.YNc(0,O,65,24,"ng-container",0)},dependencies:[l.yS,u.lW,c.TO,c.KE,c.hX,c.R9,p.Hw,g.Nt,f.Ou,C.W,T.O5,m._Y,m.Fj,m.JJ,m.JL,m.sg,m.u,I.KI],encapsulation:2,data:{animation:y.L}}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(V),u.ot,c.lN,p.Ps,g.c,f.Cq,w.J,x.fC,v.m]}),e})()}}]);