(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6C6O":function(t,e,n){"use strict";n.r(e),n.d(e,"VerifyEmailPageModule",(function(){return m}));var i=n("ofXK"),c=n("3Pt+"),r=n("TEn/"),o=n("i2L+"),s=n("tyNb"),a=n("lJxs"),b=n("fXoL"),u=n("7Vn+"),l=n("FDOz");function p(t,e){if(1&t&&(b.Qb(0,"div",5),b.Qb(1,"p",10),b.sc(2," We have sent a confirmation email to "),b.Qb(3,"strong"),b.sc(4),b.Pb(),b.sc(5,". "),b.Pb(),b.Qb(6,"p",10),b.sc(7," Please check your email and click on the link to verfiy your email address. "),b.Pb(),b.Pb()),2&t){const t=b.ac();b.zb(4),b.tc(t.user.email)}}const d=[{path:"",component:(()=>{class t{constructor(t){this.authService=t}ngOnInit(){this.authService.user$.pipe(Object(a.a)(t=>this.user=t))}}return t.\u0275fac=function(e){return new(e||t)(b.Lb(u.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-verify-email"]],decls:17,vars:3,consts:[["fullscreen",""],["color","light",1,"ion-padding","ion-text-center",2,"margin","auto","top","10vh","max-width","500px"],[1,"displayTableCell"],[1,"authBlock"],["class","formGroup",4,"ngIf"],[1,"formGroup"],["type","button",1,"btn","btnPrimary",3,"click"],[1,"fas","fa-redo-alt"],[1,"redirectToSignIn"],["routerLink","/get-started",1,"redirect"],[1,"text-center"]],template:function(t,e){1&t&&(b.Qb(0,"ion-content",0),b.Qb(1,"ion-card",1),b.Qb(2,"div",2),b.Qb(3,"div",3),b.Qb(4,"h3"),b.sc(5,"Thank You for Registering"),b.Pb(),b.qc(6,p,8,1,"div",4),b.bc(7,"async"),b.Qb(8,"div",5),b.Qb(9,"ion-button",6),b.Yb("click",(function(){return e.authService.sendVerificationMail()})),b.Mb(10,"i",7),b.sc(11," Resend Verification Email "),b.Pb(),b.Pb(),b.Pb(),b.Qb(12,"div",8),b.Qb(13,"span"),b.sc(14,"Go back to?"),b.Qb(15,"span",9),b.sc(16," Sign in"),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb()),2&t&&(b.zb(6),b.gc("ngIf",b.cc(7,1,e.user)))},directives:[r.o,r.h,i.k,r.f,r.U,s.g,l.c],pipes:[i.b],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(e){return new(e||t)},imports:[[s.j.forChild(d)],s.j]}),t})(),m=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(e){return new(e||t)},imports:[[i.c,c.d,r.O,f,o.a]]}),t})()}}]);