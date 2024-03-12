"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[353],{6353:(G,Z,i)=>{i.r(Z),i.d(Z,{default:()=>R});var v=i(4755),A=i(877),m=i(1728),h=i(430),f=i(5707),C=i(6702),_=i(2611),r=i(3627),x=i(9609),g=i(9114),u=i(7406),b=i(6266),M=i(1983),l=i(9401),d=i(6286),t=i(2223),S=i(3648),y=i(2689),w=i(3144),J=i(8615);let T=(()=>{class e{constructor(o){this._apiService=o}get(o){return this._apiService.get(`/references/cargo-loading-method/${o}`)}getAll(o){return this._apiService.get("/references/cargo-loading-method/all",(0,y.$)(o))}create(o){return this._apiService.post("/references/cargo-loading-method",o)}update(o){return this._apiService.put("/references/cargo-loading-method",o)}delete(o){let n=new w.LE;return n=n.append("id",o),this._apiService.delete("/references/cargo-loading-method",n)}static#t=this.\u0275fac=function(n){return new(n||e)(t.LFG(J.s))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function U(e,s){1&e&&(t.TgZ(0,"p",13),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"add_cargo_loading")))}function N(e,s){1&e&&(t.TgZ(0,"p",13),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"edit_cargo_loading")))}function P(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}const I=function(e){return{"is-invalid":e}},Q=function(e,s){return{"fuse-mat-button text-white":e,"fuse-mat-button ":s}};let L=(()=>{class e{constructor(o,n,a,c){this.data=o,this._toaster=n,this._cargoloadingService=a,this._dialog=c,this.edit=!1,this.form=new l.cw({id:new l.NI(""),name:new l.NI("",[l.kI.required])}),this.data&&(this.edit=!0,this.form.patchValue({id:this.data?.id,name:this.data?.name}))}get f(){return this.form.controls}submit(){this.form.value.id?this._cargoloadingService.update(this.form.value).subscribe(o=>{o.success?(this._dialog.closeAll(),this._toaster.success("\u0421\u0442\u0430\u0442\u0443\u0441 \u0433\u0440\u0443\u0437\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0433\u0440\u0443\u0437\u0430")}):this._cargoloadingService.create(this.form.value).subscribe(o=>{o.success?(this._dialog.closeAll(),this.form.reset(),this._toaster.success("\u0421\u0442\u0430\u0442\u0443\u0441 \u0433\u0440\u0443\u0437\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0433\u0440\u0443\u0437\u0430")})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(d.WI),t.Y36(S._W),t.Y36(T),t.Y36(d.uw))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-cargo-loading-method"]],standalone:!0,features:[t.jDz],decls:23,vars:23,consts:[[1,"flex","justify-between","items-center"],["mat-dialog-title","","class","font-bold text-2xl uppercase",4,"ngIf"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[3,"formGroup"],[1,"flex"],[1,"w-full","px-2"],["color","accent",1,"w-full"],["matInput","","formControlName","name",3,"ngClass"],[4,"ngIf"],[1,"flex","justify-end","justify-items-end"],["mat-flat-button","","mat-dialog-close","","tabindex","-1",1,"fuse-mat-button",3,"color"],["mat-flat-button","",3,"ngClass","color","disabled","click"],["mat-dialog-title","",1,"font-bold","text-2xl","uppercase"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.YNc(1,U,3,3,"p",1),t.YNc(2,N,3,3,"p",1),t.TgZ(3,"button",2)(4,"mat-icon",3),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"mat-dialog-content")(7,"form",4)(8,"div",5)(9,"div",6)(10,"mat-form-field",7)(11,"mat-label"),t._uU(12),t.ALo(13,"transloco"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,P,3,3,"mat-error",9),t.qZA()()()()(),t.TgZ(16,"mat-dialog-actions",10)(17,"button",11),t._uU(18),t.ALo(19,"transloco"),t.qZA(),t.TgZ(20,"button",12),t.NdJ("click",function(){return a.submit()}),t._uU(21),t.ALo(22,"transloco"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("ngIf",!a.edit),t.xp6(1),t.Q6J("ngIf",a.edit),t.xp6(5),t.Q6J("formGroup",a.form),t.xp6(5),t.Oqu(t.lcZ(13,12,"name")),t.xp6(2),t.Q6J("ngClass",t.VKq(18,I,a.f.name.errors)),t.xp6(1),t.Q6J("ngIf",null==a.f.name.errors?null:a.f.name.errors.required),t.xp6(2),t.Q6J("color","warn"),t.xp6(1),t.hij(" ",t.lcZ(19,14,"cancel"),""),t.xp6(2),t.Q6J("ngClass",t.WLB(20,Q,a.form.invalid||a.form.pristine,!a.form.invalid&&!a.form.pristine))("color","primary")("disabled",a.form.invalid||a.form.pristine),t.xp6(1),t.hij(" ",t.lcZ(22,16,"save")," "))},dependencies:[f.y4,f.Ot,h.Ps,h.Hw,m.ot,m.lW,m.RK,l.UX,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,d.Is,d.ZT,d.uh,d.xY,d.H8,l.u5,v.O5,r.p0,v.mk,g.lN,g.KE,g.hX,g.TO,x.c,x.Nt,_.JX,C.TU,u.Tx,A.rP],encapsulation:2,changeDetection:0})}return e})();function Y(e,s){1&e&&(t.TgZ(0,"mat-header-cell",19),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij("",t.lcZ(2,1,"name")," "))}function j(e,s){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const o=s.$implicit;t.xp6(1),t.hij(" ",null==o?null:o.name," ")}}function D(e,s){1&e&&t._UZ(0,"mat-header-cell")}function O(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"mat-cell")(1,"div",20)(2,"button",21),t.NdJ("click",function(a){return a.stopPropagation()}),t.TgZ(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"mat-menu",null,22)(7,"button",23),t.NdJ("click",function(){const c=t.CHM(o).$implicit,p=t.oxw();return t.KtG(p.edit(c))}),t.TgZ(8,"mat-icon"),t._uU(9,"edit"),t.qZA(),t._uU(10),t.ALo(11,"transloco"),t.qZA(),t.TgZ(12,"button",23),t.NdJ("click",function(){const c=t.CHM(o).$implicit,p=t.oxw();return t.KtG(p.delete(c.id))}),t.TgZ(13,"mat-icon"),t._uU(14,"remove"),t.qZA(),t._uU(15),t.ALo(16,"transloco"),t.qZA()()()()}if(2&e){const o=t.MAs(6);t.xp6(2),t.Q6J("matMenuTriggerFor",o),t.xp6(8),t.hij(" ",t.lcZ(11,3,"edit")," "),t.xp6(5),t.hij(" ",t.lcZ(16,5,"remove")," ")}}function H(e,s){1&e&&t._UZ(0,"mat-header-row")}function F(e,s){1&e&&t._UZ(0,"mat-row")}function z(e,s){1&e&&t._UZ(0,"app-no-data-placeholder",24)}const W=function(){return[10,20,50,100,200]},R=[{path:"",component:(()=>{class e extends b.G{constructor(o,n){super(),this._cargoLoadingService=o,this._dialog=n,this.displayedColumns=["name","actions"],this.pageParams={page:1,limit:10,perPage:10,sortBy:"id",sortType:"asc"},this.dataSource=new r.by([])}ngOnInit(){this.getAllCargoStatus(this.pageParams)}getAllCargoStatus(o){this._cargoLoadingService.getAll(o).subscribe(n=>{this.dataSource.data=n.data})}onPageChange(o){this.pageParams.limit=o.pageSize,this.pageParams.perPage=o.pageSize,this.pageParams.page=o.pageIndex,this.getAllCargoStatus(this.pageParams)}add(){this._dialog.open(L,{minWidth:"25vw",maxWidth:"30vw",minHeight:"20vh",maxHeight:"80vh",autoFocus:!1}).afterClosed().subscribe(()=>{this.getAllCargoStatus(this.pageParams)})}edit(o){this._dialog.open(L,{minWidth:"25vw",maxWidth:"30vw",minHeight:"20vh",maxHeight:"80vh",autoFocus:!1,data:o}).afterClosed().subscribe(()=>{this.getAllCargoStatus(this.pageParams)})}delete(o){this._cargoLoadingService.delete(o).subscribe(()=>{this.getAllCargoStatus(this.pageParams)})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(T),t.Y36(d.uw))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-cargo-loading-method"]],viewQuery:function(n,a){if(1&n&&t.Gf(C.NW,5),2&n){let c;t.iGM(c=t.CRH())&&(a.paginator=c.first)}},standalone:!0,features:[t.qOj,t.jDz],decls:24,vars:15,consts:[[1,"flex","flex-col","flex-auto"],[1,"flex-auto","border-t"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"flex","items-center","ml-6"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color","click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"mt-4","h-100"],["matSort","",3,"dataSource"],["matColumnDef","name"],["class","font-bold",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","actions"],[4,"matHeaderCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","m-1",4,"ngIf"],[3,"showFirstLastButtons","length","pageSize","pageIndex","pageSizeOptions","page"],[1,"font-bold"],["fxFlex","row","fxLayoutAlign","end center"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor","click"],["moreMenu","matMenu"],["mat-menu-item","","color","accent",3,"click"],[1,"m-1"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),t._uU(5),t.ALo(6,"transloco"),t.qZA()(),t.TgZ(7,"div",4)(8,"button",5),t.NdJ("click",function(){return a.add()}),t._UZ(9,"mat-icon",6),t.TgZ(10,"span",7),t._uU(11,"Add"),t.qZA()()()(),t.TgZ(12,"div",8)(13,"mat-table",9),t.ynx(14,10),t.YNc(15,Y,3,3,"mat-header-cell",11),t.YNc(16,j,2,1,"mat-cell",12),t.BQk(),t.ynx(17,13),t.YNc(18,D,1,0,"mat-header-cell",14),t.YNc(19,O,17,7,"mat-cell",12),t.BQk(),t.YNc(20,H,1,0,"mat-header-row",15),t.YNc(21,F,1,0,"mat-row",16),t.qZA(),t.YNc(22,z,1,0,"app-no-data-placeholder",17),t.TgZ(23,"mat-paginator",18),t.NdJ("page",function(p){return a.onPageChange(p)}),t.qZA()()()()),2&n&&(t.xp6(5),t.Oqu(t.lcZ(6,12,"loading_method")),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus"),t.xp6(4),t.Q6J("dataSource",a.dataSource),t.xp6(7),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("ngIf",!a.dataSource.data.length),t.xp6(1),t.Q6J("showFirstLastButtons",!0)("length",a.dataSource.data.length)("pageSize",a.pageParams.limit)("pageIndex",a.pageParams.page)("pageSizeOptions",t.DdM(14,W)))},dependencies:[f.y4,f.Ot,h.Ps,h.Hw,m.ot,m.lW,m.RK,M.o,v.O5,r.p0,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,g.lN,x.c,_.JX,_.YE,C.TU,C.NW,u.Tx,u.VK,u.OP,u.p6,A.rP],encapsulation:2,changeDetection:0})}return e})(),resolve:{}}]}}]);