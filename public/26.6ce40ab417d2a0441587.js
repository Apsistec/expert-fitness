(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{rOQi:function(t,o,n){"use strict";n.r(o),n.d(o,"UserTicketsPageModule",(function(){return k}));var e=n("ofXK"),c=n("3Pt+"),i=n("TEn/"),r=n("i2L+"),s=n("tyNb"),a=n("mrSG"),b=n("sh4j"),l=n("fXoL"),d=n("7Vn+"),u=n("EYIl"),f=n("37t3"),p=n("JClc");function m(t,o){1&t&&l.Pb(0,"ion-icon",14)}function T(t,o){1&t&&l.Pb(0,"ion-icon",15)}function h(t,o){if(1&t&&(l.Ub(0,"ion-item",7),l.Dc(1,m,1,0,"ion-icon",8),l.Dc(2,T,1,0,"ion-icon",9),l.Ub(3,"ion-label"),l.Ub(4,"ion-text",10),l.Ub(5,"h2"),l.Fc(6),l.Tb(),l.Tb(),l.Ub(7,"ion-text",11),l.Ub(8,"p",12),l.Fc(9),l.Tb(),l.Tb(),l.Tb(),l.Ub(10,"ion-note",13),l.Fc(11),l.hc(12,"date"),l.Tb(),l.Tb()),2&t){const t=o.$implicit;l.Cb(1),l.mc("ngIf",0==t.status),l.Cb(1),l.mc("ngIf",1==t.status),l.Cb(4),l.Gc(t.title),l.Cb(3),l.Gc(t.desc),l.Cb(2),l.Hc(" ",l.jc(12,5,1e3*(null==t.created_at?null:t.created_at.seconds),"MMM d")," ")}}const g=[{path:"",component:(()=>{class t{constructor(t,o,n){this.auth=t,this.modalCtrl=o,this.ticket=n,this.title="User Dashboard"}ngOnInit(){this.tickets=this.ticket.getUserTickets()}openTicketModal(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.modalCtrl.create({component:b.a});yield t.present()}))}SignOut(){this.auth.SignOut()}}return t.\u0275fac=function(o){return new(o||t)(l.Ob(d.a),l.Ob(i.T),l.Ob(u.a))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-user-tickets"]],decls:17,vars:3,consts:[["fullscreen",""],["color","medium"],["color","secondary"],["class","ion-text-wrap","ngSortgridItem","",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","dark",3,"click"],["color","secondary","name","add"],["ngSortgridItem","",1,"ion-text-wrap"],["name","radio-button-off","color","danger","slot","start",4,"ngIf"],["name","done-all","color","success","slot","start",4,"ngIf"],["color","dark"],["color","light"],[1,"ion-text-wrap"],["color","light","slot","end"],["name","radio-button-off","color","danger","slot","start"],["name","done-all","color","success","slot","start"]],template:function(t,o){1&t&&(l.Pb(0,"app-header"),l.Ub(1,"ion-content",0),l.Ub(2,"ion-grid"),l.Ub(3,"ion-row"),l.Ub(4,"ion-col"),l.Ub(5,"ion-card",1),l.Ub(6,"ion-card-header"),l.Ub(7,"ion-card-title"),l.Ub(8,"ion-text",2),l.Fc(9," My Trouble Tickets "),l.Tb(),l.Tb(),l.Tb(),l.Ub(10,"ion-list"),l.Dc(11,h,13,8,"ion-item",3),l.hc(12,"async"),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(13,"ion-fab",4),l.Ub(14,"ion-fab-button",5),l.cc("click",(function(){return o.openTicketModal()})),l.Pb(15,"ion-icon",6),l.Tb(),l.Tb(),l.Tb(),l.Pb(16,"app-footer")),2&t&&(l.Cb(11),l.mc("ngForOf",l.ic(12,1,o.tickets)))},directives:[f.a,i.o,i.s,i.G,i.n,i.h,i.j,i.l,i.M,i.z,e.k,i.p,i.q,i.u,p.a,i.x,e.l,i.y,i.E],pipes:[e.b,e.e],styles:[""]}),t})()}];let U=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(o){return new(o||t)},imports:[[s.j.forChild(g)],s.j]}),t})(),k=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(o){return new(o||t)},imports:[[e.c,c.f,i.Q,r.a,U]]}),t})()}}]);