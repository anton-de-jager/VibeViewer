"use strict";(self.webpackChunkvibeViewer=self.webpackChunkvibeViewer||[]).push([[250],{5250:(U,c,o)=>{o.r(c),o.d(c,{AuthSignOutModule:()=>Z});var s=o(2510),r=o(4859),m=o(5804),a=o(5524),g=o(7579),d=o(5963),h=o(8746),x=o(2529),v=o(2722),f=o(8505),t=o(4650),p=o(1622),A=o(6429),l=o(6895),S=o(430);function O(n,i){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"i18nPlural"),t.BQk()),2&n){const e=t.oxw().$implicit,u=t.oxw();t.xp6(1),t.AsE(" ",e("redirecting_in")," ",t.xi3(2,2,u.countdown,u.countdownMapping)," ")}}function y(n,i){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e("being_redirected")," ")}}const w=function(){return["/sign-in"]};function C(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.qZA(),t._UZ(7,"img",6),t.qZA(),t.TgZ(8,"div",7),t.YNc(9,O,3,5,"ng-container",8),t.YNc(10,y,2,1,"ng-container",8),t.qZA(),t.TgZ(11,"div",9)(12,"span"),t._uU(13),t.qZA(),t.TgZ(14,"a",10),t._uU(15),t.qZA()()()()(),t.BQk()),2&n){const e=i.$implicit,u=t.oxw();t.xp6(6),t.Oqu(e("sign_out")),t.xp6(3),t.Q6J("ngIf",u.countdown>0),t.xp6(1),t.Q6J("ngIf",0===u.countdown),t.xp6(3),t.Oqu(e("go_to")),t.xp6(1),t.Q6J("routerLink",t.DdM(6,w)),t.xp6(1),t.hij("",e("sign_in")," ")}}const T=[{path:"",component:(()=>{class n{constructor(e,u,I){this.tokenService=e,this._router=u,this.eventEmitterService=I,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new g.x,this.eventEmitterService.onChangeUser(null),localStorage.removeItem("AT"),localStorage.removeItem("RT"),localStorage.removeItem("ID")}ngOnInit(){this.tokenService.logout(),(0,d.H)(1e3,1e3).pipe((0,h.x)(()=>{this._router.navigate(["home"])}),(0,x.o)(()=>this.countdown>0),(0,v.R)(this._unsubscribeAll),(0,f.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.B),t.Y36(s.F0),t.Y36(A.Y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["auth-sign-out"]],decls:1,vars:0,consts:[[4,"transloco"],[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"inline-flex","items-center","justify-between","w-full","mt-1.5"],[1,"text-4xl","font-extrabold","tracking-tight","leading-tight"],["src","assets/images/logo/logo-text.png",1,"auth-logo"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(e,u){1&e&&t.YNc(0,C,16,7,"ng-container",0)},dependencies:[s.yS,l.O5,S.KI,l.Gx],encapsulation:2}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(T),r.ot,m.J,a.m]}),n})()}}]);