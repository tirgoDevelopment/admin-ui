"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[993],{1993:(K,C,l)=>{l.r(C),l.d(C,{default:()=>B});var v=l(877),m=l(1728),d=l(430),f=l(8001),h=l(6702),_=l(2611),s=l(3627),b=l(9609),g=l(9114),p=l(7406),w=l(6266),A=l(4755),r=l(9401),u=l(6286),t=l(2223),N=l(3648),T=l(4027);function U(e,a){1&e&&(t.TgZ(0,"p",15),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"add_subscription")))}function y(e,a){1&e&&(t.TgZ(0,"p",15),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"edit_subscription")))}function J(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}function Q(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}function Y(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}const Z=function(e){return{"is-invalid":e}},j=function(e,a){return{"fuse-mat-button text-white":e,"fuse-mat-button ":a}};let S=(()=>{class e{constructor(o,n,i,c){this.data=o,this._toaster=n,this._subscripionService=i,this._dialog=c,this.edit=!1,this.form=new r.cw({id:new r.NI(""),name:new r.NI("",[r.kI.required]),price:new r.NI("",[r.kI.required]),duration:new r.NI("",[r.kI.required])}),this.data&&(this.edit=!0,this.form.patchValue({id:this.data?.id,name:this.data?.name,price:this.data?.price,duration:this.data?.duration}))}get f(){return this.form.controls}submit(){this.form.value.id?this._subscripionService.update(this.form.value).subscribe(o=>{o.success?(this._dialog.closeAll(),this._toaster.success("\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430")}):this._subscripionService.create(this.form.value).subscribe(o=>{console.log(o),o.success?(this._dialog.closeAll(),this.form.reset(),this._toaster.success("\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430")})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(u.WI),t.Y36(N._W),t.Y36(T.F),t.Y36(u.uw))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-subscription"]],standalone:!0,features:[t.jDz],decls:29,vars:37,consts:[[1,"flex","justify-between","items-center"],["mat-dialog-title","","class","font-bold text-2xl uppercase",4,"ngIf"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[3,"formGroup"],[1,"flex"],[1,"w-full"],["color","accent",1,"w-full"],["matInput","","formControlName","name",3,"placeholder","ngClass"],[4,"ngIf"],["matInput","","type","number","formControlName","price",3,"placeholder","ngClass"],["matInput","","type","number","formControlName","duration",3,"placeholder","ngClass"],[1,"flex","justify-end","justify-items-end"],["mat-flat-button","","mat-dialog-close","","tabindex","-1",1,"fuse-mat-button",3,"color"],["mat-flat-button","",3,"ngClass","color","disabled","click"],["mat-dialog-title","",1,"font-bold","text-2xl","uppercase"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.YNc(1,U,3,3,"p",1),t.YNc(2,y,3,3,"p",1),t.TgZ(3,"button",2)(4,"mat-icon",3),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"mat-dialog-content")(7,"form",4)(8,"div",5)(9,"div",6)(10,"mat-form-field",7),t._UZ(11,"input",8),t.ALo(12,"transloco"),t.YNc(13,J,3,3,"mat-error",9),t.qZA(),t.TgZ(14,"mat-form-field",7),t._UZ(15,"input",10),t.ALo(16,"transloco"),t.YNc(17,Q,3,3,"mat-error",9),t.qZA(),t.TgZ(18,"mat-form-field",7),t._UZ(19,"input",11),t.ALo(20,"transloco"),t.YNc(21,Y,3,3,"mat-error",9),t.qZA()()()()(),t.TgZ(22,"mat-dialog-actions",12)(23,"button",13),t._uU(24),t.ALo(25,"transloco"),t.qZA(),t.TgZ(26,"button",14),t.NdJ("click",function(){return i.submit()}),t._uU(27),t.ALo(28,"transloco"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("ngIf",!i.edit),t.xp6(1),t.Q6J("ngIf",i.edit),t.xp6(5),t.Q6J("formGroup",i.form),t.xp6(4),t.s9C("placeholder",t.lcZ(12,18,"name")),t.Q6J("ngClass",t.VKq(28,Z,i.f.name.errors)),t.xp6(2),t.Q6J("ngIf",null==i.f.name.errors?null:i.f.name.errors.required),t.xp6(2),t.s9C("placeholder",t.lcZ(16,20,"price")),t.Q6J("ngClass",t.VKq(30,Z,i.f.price.errors)),t.xp6(2),t.Q6J("ngIf",null==i.f.price.errors?null:i.f.price.errors.required),t.xp6(2),t.s9C("placeholder",t.lcZ(20,22,"duration")),t.Q6J("ngClass",t.VKq(32,Z,i.f.duration.errors)),t.xp6(2),t.Q6J("ngIf",null==i.f.duration.errors?null:i.f.duration.errors.required),t.xp6(2),t.Q6J("color","warn"),t.xp6(1),t.hij(" ",t.lcZ(25,24,"cancel"),""),t.xp6(2),t.Q6J("ngClass",t.WLB(34,j,i.form.invalid||i.form.pristine,!i.form.invalid&&!i.form.pristine))("color","primary")("disabled",i.form.invalid||i.form.pristine),t.xp6(1),t.hij(" ",t.lcZ(28,26,"save")," "))},dependencies:[f.y4,f.Ot,d.Ps,d.Hw,m.ot,m.lW,m.RK,r.UX,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,u.Is,u.ZT,u.uh,u.xY,u.H8,r.u5,A.O5,s.p0,A.mk,g.lN,g.KE,g.TO,b.c,b.Nt,_.JX,h.TU,p.Tx,v.rP],encapsulation:2,changeDetection:0})}return e})();function I(e,a){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"name")," "))}function L(e,a){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",null==o?null:o.name," ")}}function q(e,a){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"duration")," "))}function D(e,a){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",null==o?null:o.duration," ")}}function F(e,a){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"price")," "))}function H(e,a){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",null==o?null:o.price," ")}}function O(e,a){1&e&&t._UZ(0,"mat-header-cell")}function W(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"mat-cell")(1,"div",19)(2,"button",20),t.NdJ("click",function(i){return i.stopPropagation()}),t.TgZ(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"mat-menu",null,21)(7,"button",22),t.NdJ("click",function(){const c=t.CHM(o).$implicit,x=t.oxw();return t.KtG(x.edit(c))}),t.TgZ(8,"mat-icon"),t._uU(9,"edit"),t.qZA(),t._uU(10),t.ALo(11,"transloco"),t.qZA(),t.TgZ(12,"button",22),t.NdJ("click",function(){const c=t.CHM(o).$implicit,x=t.oxw();return t.KtG(x.delete(c.id))}),t.TgZ(13,"mat-icon"),t._uU(14,"remove"),t.qZA(),t._uU(15),t.ALo(16,"transloco"),t.qZA()()()()}if(2&e){const o=t.MAs(6);t.xp6(2),t.Q6J("matMenuTriggerFor",o),t.xp6(8),t.hij(" ",t.lcZ(11,3,"edit")," "),t.xp6(5),t.hij(" ",t.lcZ(16,5,"remove")," ")}}function k(e,a){1&e&&t._UZ(0,"mat-header-row")}function M(e,a){1&e&&t._UZ(0,"mat-row")}const R=function(){return[10,20,50,100,200]},B=[{path:"",component:(()=>{class e extends w.G{constructor(o,n){super(),this._subscriptionService=o,this._dialog=n,this.displayedColumns=["name","duration","price","actions"],this.dataSource=new s.by([])}ngOnInit(){this.getAllSubscription()}getAllSubscription(){this._subscriptionService.getAll().subscribe(o=>{this.dataSource.data=o.data})}add(){this._dialog.open(S,{minWidth:"25vw",maxWidth:"30vw",minHeight:"35vh",maxHeight:"80vh",autoFocus:!1}).afterClosed().subscribe(()=>{this.getAllSubscription()})}edit(o){this._dialog.open(S,{minWidth:"25vw",maxWidth:"30vw",minHeight:"35vh",maxHeight:"80vh",autoFocus:!1,data:o}).afterClosed().subscribe(()=>{this.getAllSubscription()})}delete(o){this._subscriptionService.delete(o).subscribe(()=>{this.getAllSubscription()})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(T.F),t.Y36(u.uw))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-subscription"]],viewQuery:function(n,i){if(1&n&&t.Gf(h.NW,5),2&n){let c;t.iGM(c=t.CRH())&&(i.paginator=c.first)}},standalone:!0,features:[t.qOj,t.jDz],decls:29,vars:12,consts:[[1,"flex","flex-col","flex-auto"],[1,"flex-auto","border-t"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"flex","items-center","ml-6"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color","click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"mt-4"],["matSort","",3,"dataSource"],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","duration"],["matColumnDef","price"],["matColumnDef","actions"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"showFirstLastButtons","length","pageSizeOptions"],["fxFlex","row","fxLayoutAlign","end center"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor","click"],["moreMenu","matMenu"],["mat-menu-item","","color","accent",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),t._uU(5),t.ALo(6,"transloco"),t.qZA()(),t.TgZ(7,"div",4)(8,"button",5),t.NdJ("click",function(){return i.add()}),t._UZ(9,"mat-icon",6),t.TgZ(10,"span",7),t._uU(11,"Add"),t.qZA()()()(),t.TgZ(12,"div",8)(13,"mat-table",9),t.ynx(14,10),t.YNc(15,I,3,3,"mat-header-cell",11),t.YNc(16,L,2,1,"mat-cell",12),t.BQk(),t.ynx(17,13),t.YNc(18,q,3,3,"mat-header-cell",11),t.YNc(19,D,2,1,"mat-cell",12),t.BQk(),t.ynx(20,14),t.YNc(21,F,3,3,"mat-header-cell",11),t.YNc(22,H,2,1,"mat-cell",12),t.BQk(),t.ynx(23,15),t.YNc(24,O,1,0,"mat-header-cell",11),t.YNc(25,W,17,7,"mat-cell",12),t.BQk(),t.YNc(26,k,1,0,"mat-header-row",16),t.YNc(27,M,1,0,"mat-row",17),t.qZA(),t._UZ(28,"mat-paginator",18),t.qZA()()()),2&n&&(t.xp6(5),t.Oqu(t.lcZ(6,9,"type_subscription")),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus"),t.xp6(4),t.Q6J("dataSource",i.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("showFirstLastButtons",!0)("length",i.dataSource.data.length)("pageSizeOptions",t.DdM(11,R)))},dependencies:[f.y4,f.Ot,d.Ps,d.Hw,m.ot,m.lW,m.RK,s.p0,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,g.lN,b.c,_.JX,_.YE,h.TU,h.NW,p.Tx,p.VK,p.OP,p.p6,v.rP],encapsulation:2,changeDetection:0})}return e})(),resolve:{}}]}}]);