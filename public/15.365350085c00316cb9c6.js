(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"78ZG":function(e,t,n){"use strict";n.r(t),n.d(t,"CreateUsersPageModule",(function(){return u}));var o=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),b=n("fXoL"),c=n("RJTb");const l=[{path:"create-users",component:(()=>{class e{constructor(e,t){this.apiService=e,this.router=t}ngOnInit(){}submitForm(){this.apiService.createItem(this.data).subscribe(e=>{this.router.navigate(["list-user"])})}}return e.\u0275fac=function(t){return new(t||e)(b.Nb(c.a),b.Nb(a.f))},e.\u0275cmp=b.Hb({type:e,selectors:[["app-create-users"]],decls:16,vars:2,consts:[["color","tertiary",1,"toolbar-global"],[1,"toolbar-title"],[1,"ion-padding"],["placeholder","Enter Name",3,"ngModel","ngModelChange"],["placeholder","Enter Email",3,"ngModel","ngModelChange"],[3,"click"]],template:function(e,t){1&e&&(b.Tb(0,"ion-header"),b.Tb(1,"ion-toolbar",0),b.Tb(2,"ion-title",1),b.Dc(3,"Create User"),b.Sb(),b.Sb(),b.Sb(),b.Tb(4,"ion-content",2),b.Tb(5,"ion-item"),b.Tb(6,"ion-label"),b.Dc(7,"Name"),b.Sb(),b.Tb(8,"ion-input",3),b.bc("ngModelChange",(function(e){return t.data.displayName=e})),b.Sb(),b.Sb(),b.Tb(9,"ion-item"),b.Tb(10,"ion-label"),b.Dc(11,"Email"),b.Sb(),b.Tb(12,"ion-input",4),b.bc("ngModelChange",(function(e){return t.data.email=e})),b.Sb(),b.Sb(),b.Tb(13,"ion-item"),b.Tb(14,"ion-button",5),b.bc("click",(function(){return t.submitForm()})),b.Dc(15,"Add "),b.Sb(),b.Sb(),b.Sb()),2&e&&(b.Cb(8),b.lc("ngModel",t.data.displayName),b.Cb(4),b.lc("ngModel",t.data.email))},directives:[r.s,r.M,r.L,r.n,r.w,r.x,r.v,r.W,i.j,i.m,r.f],styles:[""]}),e})()}];let s=(()=>{class e{}return e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({factory:function(t){return new(t||e)},imports:[[a.j.forChild(l)],a.j]}),e})(),u=(()=>{class e{}return e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({factory:function(t){return new(t||e)},imports:[[o.c,i.f,r.N,s]]}),e})()}}]);