"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[993],{1993:(tt,C,a)=>{a.r(C),a.d(C,{default:()=>$});var g=a(4755),v=a(877),p=a(1728),h=a(430),_=a(5707),Z=a(6702),b=a(2611),s=a(3627),x=a(9609),d=a(9114),f=a(7406),N=a(6266),l=a(9401),m=a(6286),T=a(787),t=a(2223),U=a(3648),S=a(4027),I=a(5292),J=a(1217);function q(e,r){1&e&&(t.TgZ(0,"p",17),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"add_subscription")))}function w(e,r){1&e&&(t.TgZ(0,"p",17),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"edit_subscription")))}function Q(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}function Y(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}function P(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}function L(e,r){if(1&e&&(t.TgZ(0,"mat-option",18),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.Q6J("value",o.id),t.xp6(1),t.Oqu(o.name)}}function j(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}const A=function(e){return{"is-invalid":e}},O=function(e,r){return{"fuse-mat-button text-white":e,"fuse-mat-button ":r}};let y=(()=>{class e{constructor(o,i,n,c,u){this.data=o,this._toaster=i,this._subscripionService=n,this._currencyStatusService=c,this._dialog=u,this.edit=!1,this.form=new l.cw({id:new l.NI(""),name:new l.NI("",[l.kI.required]),price:new l.NI("",[l.kI.required]),duration:new l.NI("",[l.kI.required]),currencyId:new l.NI("",[l.kI.required])}),this._currencyStatusService.getAll().subscribe(E=>{this.currencies=E.data,console.log(this.currencies)}),this.data&&(this.edit=!0,this.form.patchValue({id:this.data?.id,name:this.data?.name,price:this.data?.price,duration:this.data?.duration,currencyId:this.data?.currencyId}))}compareFn(o,i){if(o&&i)return o===i.id}get f(){return this.form.controls}submit(){this.form.value.id?this._subscripionService.update(this.form.value).subscribe(o=>{o.success?(this._dialog.closeAll(),this._toaster.success("\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430")}):this._subscripionService.create(this.form.value).subscribe(o=>{console.log(o),o.success?(this._dialog.closeAll(),this.form.reset(),this._toaster.success("\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430")})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(m.WI),t.Y36(U._W),t.Y36(S.F),t.Y36(I.i),t.Y36(m.uw))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-subscription"]],standalone:!0,features:[t.jDz],decls:42,vars:43,consts:[[1,"flex","justify-between","items-center"],["mat-dialog-title","","class","font-bold text-2xl uppercase",4,"ngIf"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[3,"formGroup"],[1,"flex"],[1,"w-full"],["color","accent",1,"w-full"],["matInput","","formControlName","name",3,"ngClass"],[4,"ngIf"],["matInput","","type","number","formControlName","price",3,"ngClass"],["matInput","","type","number","formControlName","duration",3,"ngClass"],["formControlName","currencyId",3,"compareWith"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","justify-end","justify-items-end"],["mat-flat-button","","mat-dialog-close","","tabindex","-1",1,"fuse-mat-button",3,"color"],["mat-flat-button","",3,"ngClass","color","disabled","click"],["mat-dialog-title","",1,"font-bold","text-2xl","uppercase"],[3,"value"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t.YNc(1,q,3,3,"p",1),t.YNc(2,w,3,3,"p",1),t.TgZ(3,"button",2)(4,"mat-icon",3),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"mat-dialog-content")(7,"form",4)(8,"div",5)(9,"div",6)(10,"mat-form-field",7)(11,"mat-label"),t._uU(12),t.ALo(13,"transloco"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,Q,3,3,"mat-error",9),t.qZA(),t.TgZ(16,"mat-form-field",7)(17,"mat-label"),t._uU(18),t.ALo(19,"transloco"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,Y,3,3,"mat-error",9),t.qZA(),t.TgZ(22,"mat-form-field",7)(23,"mat-label"),t._uU(24),t.ALo(25,"transloco"),t.qZA(),t._UZ(26,"input",11),t.YNc(27,P,3,3,"mat-error",9),t.qZA(),t.TgZ(28,"mat-form-field",7)(29,"mat-label"),t._uU(30),t.ALo(31,"transloco"),t.qZA(),t.TgZ(32,"mat-select",12),t.YNc(33,L,2,2,"mat-option",13),t.qZA(),t.YNc(34,j,3,3,"mat-error",9),t.qZA()()()()(),t.TgZ(35,"mat-dialog-actions",14)(36,"button",15),t._uU(37),t.ALo(38,"transloco"),t.qZA(),t.TgZ(39,"button",16),t.NdJ("click",function(){return n.submit()}),t._uU(40),t.ALo(41,"transloco"),t.qZA()()),2&i&&(t.xp6(1),t.Q6J("ngIf",!n.edit),t.xp6(1),t.Q6J("ngIf",n.edit),t.xp6(5),t.Q6J("formGroup",n.form),t.xp6(5),t.Oqu(t.lcZ(13,22,"name")),t.xp6(2),t.Q6J("ngClass",t.VKq(34,A,n.f.name.errors)),t.xp6(1),t.Q6J("ngIf",null==n.f.name.errors?null:n.f.name.errors.required),t.xp6(3),t.Oqu(t.lcZ(19,24,"price")),t.xp6(2),t.Q6J("ngClass",t.VKq(36,A,n.f.price.errors)),t.xp6(1),t.Q6J("ngIf",null==n.f.price.errors?null:n.f.price.errors.required),t.xp6(3),t.Oqu(t.lcZ(25,26,"duration")),t.xp6(2),t.Q6J("ngClass",t.VKq(38,A,n.f.duration.errors)),t.xp6(1),t.Q6J("ngIf",null==n.f.duration.errors?null:n.f.duration.errors.required),t.xp6(3),t.Oqu(t.lcZ(31,28,"currency")),t.xp6(2),t.Q6J("compareWith",n.compareFn),t.xp6(1),t.Q6J("ngForOf",n.currencies),t.xp6(1),t.Q6J("ngIf",null==n.f.currencyId.errors?null:n.f.currencyId.errors.required),t.xp6(2),t.Q6J("color","warn"),t.xp6(1),t.hij(" ",t.lcZ(38,30,"cancel"),""),t.xp6(2),t.Q6J("ngClass",t.WLB(40,O,n.form.invalid||n.form.pristine,!n.form.invalid&&!n.form.pristine))("color","primary")("disabled",n.form.invalid||n.form.pristine),t.xp6(1),t.hij(" ",t.lcZ(41,32,"save")," "))},dependencies:[_.y4,_.Ot,h.Ps,h.Hw,T.LD,d.KE,d.hX,d.TO,T.gD,J.ey,p.ot,p.lW,p.RK,l.UX,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.sg,l.u,m.Is,m.ZT,m.uh,m.xY,m.H8,l.u5,g.ax,g.O5,s.p0,g.mk,d.lN,x.c,x.Nt,b.JX,Z.TU,f.Tx,v.rP],encapsulation:2,changeDetection:0})}return e})();var D=a(1983);function F(e,r){1&e&&(t.TgZ(0,"mat-header-cell",21),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij("",t.lcZ(2,1,"name")," "))}function H(e,r){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.hij(" ",null==o?null:o.name," ")}}function W(e,r){1&e&&(t.TgZ(0,"mat-header-cell",21),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij("",t.lcZ(2,1,"duration")," "))}function M(e,r){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.hij(" ",null==o?null:o.duration," ")}}function R(e,r){1&e&&(t.TgZ(0,"mat-header-cell",21),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij("",t.lcZ(2,1,"price")," "))}function z(e,r){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.hij(" ",null==o?null:o.price," ")}}function B(e,r){1&e&&t._UZ(0,"mat-header-cell")}function K(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"mat-cell")(1,"div",22)(2,"button",23),t.NdJ("click",function(n){return n.stopPropagation()}),t.TgZ(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"mat-menu",null,24)(7,"button",25),t.NdJ("click",function(){const c=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.edit(c))}),t.TgZ(8,"mat-icon"),t._uU(9,"edit"),t.qZA(),t._uU(10),t.ALo(11,"transloco"),t.qZA(),t.TgZ(12,"button",25),t.NdJ("click",function(){const c=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.delete(c.id))}),t.TgZ(13,"mat-icon"),t._uU(14,"remove"),t.qZA(),t._uU(15),t.ALo(16,"transloco"),t.qZA()()()()}if(2&e){const o=t.MAs(6);t.xp6(2),t.Q6J("matMenuTriggerFor",o),t.xp6(8),t.hij(" ",t.lcZ(11,3,"edit")," "),t.xp6(5),t.hij(" ",t.lcZ(16,5,"remove")," ")}}function G(e,r){1&e&&t._UZ(0,"mat-header-row")}function k(e,r){1&e&&t._UZ(0,"mat-row")}function X(e,r){1&e&&t._UZ(0,"app-no-data-placeholder",26)}const V=function(){return[10,20,50,100,200]},$=[{path:"",component:(()=>{class e extends N.G{constructor(o,i){super(),this._subscriptionService=o,this._dialog=i,this.displayedColumns=["name","duration","price","actions"],this.pageParams={page:0,limit:10,totalPagesCount:1,sortBy:"id",sortType:"desc"},this.dataSource=new s.by([])}ngOnInit(){this.getAllSubscription(this.pageParams)}getAllSubscription(o){this._subscriptionService.getAll(o).subscribe(i=>{this.dataSource.data=i.data,this.pageParams.limit=i?.data?.per_page,this.pageParams.page=i?.data?.pageIndex,this.pageParams.totalPagesCount=i?.data?.totalPagesCount})}onPageChange(o){this.pageParams.limit=o.pageSize,this.pageParams.page=o.pageIndex,this.getAllSubscription(this.pageParams)}add(){this._dialog.open(y,{minWidth:"35vw",maxWidth:"40vw",minHeight:"55vh",maxHeight:"80vh",autoFocus:!1}).afterClosed().subscribe(()=>{this.getAllSubscription(this.pageParams)})}edit(o){this._dialog.open(y,{minWidth:"35vw",maxWidth:"40vw",minHeight:"55vh",maxHeight:"80vh",autoFocus:!1,data:o}).afterClosed().subscribe(()=>{this.getAllSubscription(this.pageParams)})}delete(o){this._subscriptionService.delete(o).subscribe(()=>{this.getAllSubscription(this.pageParams)})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(S.F),t.Y36(m.uw))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-subscription"]],viewQuery:function(i,n){if(1&i&&t.Gf(Z.NW,5),2&i){let c;t.iGM(c=t.CRH())&&(n.paginator=c.first)}},standalone:!0,features:[t.qOj,t.jDz],decls:31,vars:18,consts:[[1,"flex","flex-col","flex-auto"],[1,"flex-auto"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"flex","items-center","ml-6"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color","click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"mt-4","shadow-table"],["matSort","",3,"dataSource"],["matColumnDef","name"],["class","font-bold",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","duration"],["matColumnDef","price"],["matColumnDef","actions"],[4,"matHeaderCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","m-1",4,"ngIf"],[3,"showFirstLastButtons","length","pageSize","pageIndex","pageSizeOptions","page"],[1,"font-bold"],["fxFlex","row","fxLayoutAlign","end center"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor","click"],["moreMenu","matMenu"],["mat-menu-item","","color","accent",3,"click"],[1,"m-1"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),t._uU(5),t.ALo(6,"transloco"),t.qZA()(),t.TgZ(7,"div",4)(8,"button",5),t.NdJ("click",function(){return n.add()}),t._UZ(9,"mat-icon",6),t.TgZ(10,"span",7),t._uU(11),t.ALo(12,"transloco"),t.qZA()()()(),t.TgZ(13,"div",8)(14,"mat-table",9),t.ynx(15,10),t.YNc(16,F,3,3,"mat-header-cell",11),t.YNc(17,H,2,1,"mat-cell",12),t.BQk(),t.ynx(18,13),t.YNc(19,W,3,3,"mat-header-cell",11),t.YNc(20,M,2,1,"mat-cell",12),t.BQk(),t.ynx(21,14),t.YNc(22,R,3,3,"mat-header-cell",11),t.YNc(23,z,2,1,"mat-cell",12),t.BQk(),t.ynx(24,15),t.YNc(25,B,1,0,"mat-header-cell",16),t.YNc(26,K,17,7,"mat-cell",12),t.BQk(),t.YNc(27,G,1,0,"mat-header-row",17),t.YNc(28,k,1,0,"mat-row",18),t.qZA(),t.YNc(29,X,1,0,"app-no-data-placeholder",19),t.TgZ(30,"mat-paginator",20),t.NdJ("page",function(u){return n.onPageChange(u)}),t.qZA()()()()),2&i&&(t.xp6(5),t.Oqu(t.lcZ(6,13,"type_subscription")),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus"),t.xp6(2),t.Oqu(t.lcZ(12,15,"add")),t.xp6(3),t.Q6J("dataSource",n.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("ngIf",!n.dataSource.data.length),t.xp6(1),t.Q6J("showFirstLastButtons",!0)("length",n.pageParams.totalPagesCount-1)("pageSize",n.pageParams.limit)("pageIndex",n.pageParams.page)("pageSizeOptions",t.DdM(17,V)))},dependencies:[_.y4,_.Ot,h.Ps,h.Hw,p.ot,p.lW,p.RK,D.o,g.O5,s.p0,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,d.lN,x.c,b.JX,b.YE,Z.TU,Z.NW,f.Tx,f.VK,f.OP,f.p6,v.rP],encapsulation:2,changeDetection:0})}return e})(),resolve:{}}]}}]);