"use strict";(self.webpackChunkadmin_ui=self.webpackChunkadmin_ui||[]).push([[224],{5224:(W,Z,r)=>{r.r(Z),r.d(Z,{default:()=>F});var x=r(877),m=r(1728),p=r(430),g=r(8001),f=r(6702),_=r(2611),i=r(3627),C=r(9609),h=r(9114),d=r(7406),b=r(6266),T=r(4755),s=r(9401),u=r(6286),t=r(2223),w=r(3648),A=r(7609);function U(o,l){1&o&&(t.TgZ(0,"p",13),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&o&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"add_cargo_group")))}function y(o,l){1&o&&(t.TgZ(0,"p",13),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&o&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"edit_cargo_group")))}function J(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}const N=function(o){return{"is-invalid":o}},Q=function(o,l){return{"fuse-mat-button text-white":o,"fuse-mat-button ":l}};let G=(()=>{class o{constructor(e,n,a,c){this.data=e,this._toaster=n,this._cargoGroupService=a,this._dialog=c,this.edit=!1,this.form=new s.cw({id:new s.NI(""),name:new s.NI("",[s.kI.required])}),this.data&&(this.edit=!0,this.form.patchValue({id:this.data?.id,name:this.data?.name}))}get f(){return this.form.controls}submit(){this.form.value.id?this._cargoGroupService.update(this.form.value).subscribe(e=>{e.success?(this._dialog.closeAll(),this._toaster.success("\u0413\u0440\u0443\u0437\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0433\u0440\u0443\u0437\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430")}):this._cargoGroupService.create(this.form.value).subscribe(e=>{e.success?(this._dialog.closeAll(),this.form.reset(),this._toaster.success("\u0413\u0440\u0443\u0437\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0433\u0440\u0443\u0437\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430")})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(u.WI),t.Y36(w._W),t.Y36(A.G),t.Y36(u.uw))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-cargo-group"]],standalone:!0,features:[t.jDz],decls:21,vars:23,consts:[[1,"flex","justify-between","items-center"],["mat-dialog-title","","class","font-bold text-2xl uppercase",4,"ngIf"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[3,"formGroup"],[1,"flex"],[1,"w-full"],["color","accent",1,"w-full"],["matInput","","formControlName","name",3,"placeholder","ngClass"],[4,"ngIf"],[1,"flex","justify-end","justify-items-end"],["mat-flat-button","","mat-dialog-close","","tabindex","-1",1,"fuse-mat-button",3,"color"],["mat-flat-button","",3,"ngClass","color","disabled","click"],["mat-dialog-title","",1,"font-bold","text-2xl","uppercase"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.YNc(1,U,3,3,"p",1),t.YNc(2,y,3,3,"p",1),t.TgZ(3,"button",2)(4,"mat-icon",3),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"mat-dialog-content")(7,"form",4)(8,"div",5)(9,"div",6)(10,"mat-form-field",7),t._UZ(11,"input",8),t.ALo(12,"transloco"),t.YNc(13,J,3,3,"mat-error",9),t.qZA()()()()(),t.TgZ(14,"mat-dialog-actions",10)(15,"button",11),t._uU(16),t.ALo(17,"transloco"),t.qZA(),t.TgZ(18,"button",12),t.NdJ("click",function(){return a.submit()}),t._uU(19),t.ALo(20,"transloco"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("ngIf",!a.edit),t.xp6(1),t.Q6J("ngIf",a.edit),t.xp6(5),t.Q6J("formGroup",a.form),t.xp6(4),t.s9C("placeholder",t.lcZ(12,12,"name")),t.Q6J("ngClass",t.VKq(18,N,a.f.name.errors)),t.xp6(2),t.Q6J("ngIf",null==a.f.name.errors?null:a.f.name.errors.required),t.xp6(2),t.Q6J("color","warn"),t.xp6(1),t.hij(" ",t.lcZ(17,14,"cancel"),""),t.xp6(2),t.Q6J("ngClass",t.WLB(20,Q,a.form.invalid||a.form.pristine,!a.form.invalid&&!a.form.pristine))("color","primary")("disabled",a.form.invalid||a.form.pristine),t.xp6(1),t.hij(" ",t.lcZ(20,16,"save")," "))},dependencies:[g.y4,g.Ot,p.Ps,p.Hw,m.ot,m.lW,m.RK,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,u.Is,u.ZT,u.uh,u.xY,u.H8,s.u5,T.O5,i.p0,T.mk,h.lN,h.KE,h.TO,C.c,C.Nt,_.JX,f.TU,d.Tx,x.rP],encapsulation:2,changeDetection:0})}return o})();function Y(o,l){1&o&&(t.TgZ(0,"mat-header-cell"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ID")," "))}function j(o,l){if(1&o&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.xp6(1),t.hij(" ",null==e?null:e.id," ")}}function D(o,l){1&o&&(t.TgZ(0,"mat-header-cell"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"name")," "))}function L(o,l){if(1&o&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.xp6(1),t.hij(" ",null==e?null:e.name," ")}}function I(o,l){1&o&&t._UZ(0,"mat-header-cell")}function S(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"mat-cell")(1,"div",18)(2,"button",19),t.NdJ("click",function(a){return a.stopPropagation()}),t.TgZ(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"mat-menu",null,20)(7,"button",21),t.NdJ("click",function(){const c=t.CHM(e).$implicit,v=t.oxw();return t.KtG(v.edit(c))}),t.TgZ(8,"mat-icon"),t._uU(9,"edit"),t.qZA(),t._uU(10),t.ALo(11,"transloco"),t.qZA(),t.TgZ(12,"button",21),t.NdJ("click",function(){const c=t.CHM(e).$implicit,v=t.oxw();return t.KtG(v.delete(c.id))}),t.TgZ(13,"mat-icon"),t._uU(14,"remove"),t.qZA(),t._uU(15),t.ALo(16,"transloco"),t.qZA()()()()}if(2&o){const e=t.MAs(6);t.xp6(2),t.Q6J("matMenuTriggerFor",e),t.xp6(8),t.hij(" ",t.lcZ(11,3,"edit")," "),t.xp6(5),t.hij(" ",t.lcZ(16,5,"remove")," ")}}function H(o,l){1&o&&t._UZ(0,"mat-header-row")}function O(o,l){1&o&&t._UZ(0,"mat-row")}const k=function(){return[10,20,50,100,200]},F=[{path:"",component:(()=>{class o extends b.G{constructor(e,n){super(),this._cargoGroupService=e,this._dialog=n,this.displayedColumns=["id","name","actions"],this.dataSource=new i.by([])}ngOnInit(){this.getAllTruck()}getAllTruck(){this._cargoGroupService.getAll().subscribe(e=>{this.dataSource.data=e.data})}add(){this._dialog.open(G,{minWidth:"20vw",maxWidth:"25vw",minHeight:"20vh",maxHeight:"80vh",autoFocus:!1}).afterClosed().subscribe(()=>{this.getAllTruck()})}edit(e){this._dialog.open(G,{minWidth:"25vw",maxWidth:"30vw",minHeight:"20vh",maxHeight:"80vh",autoFocus:!1,data:e}).afterClosed().subscribe(()=>{this.getAllTruck()})}delete(e){this._cargoGroupService.delete(e).subscribe(()=>{this.getAllTruck()})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(A.G),t.Y36(u.uw))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-cargo-group"]],viewQuery:function(n,a){if(1&n&&t.Gf(f.NW,5),2&n){let c;t.iGM(c=t.CRH())&&(a.paginator=c.first)}},standalone:!0,features:[t.qOj,t.jDz],decls:26,vars:12,consts:[[1,"flex","flex-col","flex-auto"],[1,"flex-auto","border-t"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"flex","items-center","ml-6"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color","click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"mt-4"],["matSort","",3,"dataSource"],["matColumnDef","id"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","actions"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"showFirstLastButtons","length","pageSizeOptions"],["fxFlex","row","fxLayoutAlign","end center"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor","click"],["moreMenu","matMenu"],["mat-menu-item","","color","accent",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),t._uU(5),t.ALo(6,"transloco"),t.qZA()(),t.TgZ(7,"div",4)(8,"button",5),t.NdJ("click",function(){return a.add()}),t._UZ(9,"mat-icon",6),t.TgZ(10,"span",7),t._uU(11,"Add"),t.qZA()()()(),t.TgZ(12,"div",8)(13,"mat-table",9),t.ynx(14,10),t.YNc(15,Y,3,3,"mat-header-cell",11),t.YNc(16,j,2,1,"mat-cell",12),t.BQk(),t.ynx(17,13),t.YNc(18,D,3,3,"mat-header-cell",11),t.YNc(19,L,2,1,"mat-cell",12),t.BQk(),t.ynx(20,14),t.YNc(21,I,1,0,"mat-header-cell",11),t.YNc(22,S,17,7,"mat-cell",12),t.BQk(),t.YNc(23,H,1,0,"mat-header-row",15),t.YNc(24,O,1,0,"mat-row",16),t.qZA(),t._UZ(25,"mat-paginator",17),t.qZA()()()),2&n&&(t.xp6(5),t.Oqu(t.lcZ(6,9,"cargo_group_type")),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus"),t.xp6(4),t.Q6J("dataSource",a.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("showFirstLastButtons",!0)("length",a.dataSource.data.length)("pageSizeOptions",t.DdM(11,k)))},dependencies:[g.y4,g.Ot,p.Ps,p.Hw,m.ot,m.lW,m.RK,i.p0,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,h.lN,C.c,_.JX,_.YE,f.TU,f.NW,d.Tx,d.VK,d.OP,d.p6,x.rP],encapsulation:2,changeDetection:0})}return o})(),resolve:{}}]}}]);