"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[616],{3616:(K,x,s)=>{s.r(x),s.d(x,{default:()=>B});var _=s(4755),P=s(877),g=s(1728),f=s(430),h=s(5707),C=s(6702),v=s(2611),l=s(3627),Z=s(9609),p=s(9114),d=s(7406),b=s(6266),w=s(1983),i=s(9401),m=s(6286),y=s(5136),t=s(2223),S=s(3648),U=s(2689),N=s(3144),J=s(7180);let A=(()=>{class e{constructor(a){this._apiService=a}get(a){return this._apiService.get(`/references/cargo-packages/${a}`)}getAll(a){return this._apiService.get("/references/cargo-packages/all",(0,U.$)(a))}create(a){return this._apiService.post("/references/cargo-packages",a)}update(a){return this._apiService.put("/references/cargo-packages",a)}delete(a){let n=new N.LE;return n=n.append("id",a),this._apiService.delete("/references/cargo-packages",n)}static#t=this.\u0275fac=function(n){return new(n||e)(t.LFG(J.l))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function I(e,r){1&e&&(t.TgZ(0,"p",14),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"add_cargo_package")))}function Q(e,r){1&e&&(t.TgZ(0,"p",14),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"edit_cargo_package")))}function Y(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}function L(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}const T=function(e){return{"is-invalid":e}},j=function(e,r){return{"fuse-mat-button text-white":e,"fuse-mat-button ":r}};let k=(()=>{class e{constructor(a,n,o,c){this.data=a,this._toaster=n,this._cargoPackageService=o,this._dialog=c,this.edit=!1,this.form=new i.cw({id:new i.NI(""),name:new i.NI("",[i.kI.required]),code:new i.NI("",[i.kI.required])}),this.data&&(this.edit=!0,this.form.patchValue({id:this.data?.id,name:this.data?.name}))}get f(){return this.form.controls}submit(){this.form.valid?this.form.value.id?this._cargoPackageService.update(this.form.value).subscribe(a=>{a.success?(this._dialog.closeAll(),this._toaster.success("\u0421\u0442\u0430\u0442\u0443\u0441 \u0433\u0440\u0443\u0437\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0433\u0440\u0443\u0437\u0430")}):this._cargoPackageService.create(this.form.value).subscribe(a=>{a.success?(this._dialog.closeAll(),this.form.reset(),this._toaster.success("\u0421\u0442\u0430\u0442\u0443\u0441 \u0433\u0440\u0443\u0437\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0433\u0440\u0443\u0437\u0430")}):this._dialog.open(y.d,{width:"500px",height:"450px",data:{text:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0432\u0435\u0441\u0442\u0438 \u0432\u0441\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f"}})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(m.WI),t.Y36(S._W),t.Y36(A),t.Y36(m.uw))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-cargo-packages"]],standalone:!0,features:[t.jDz],decls:29,vars:30,consts:[[1,"flex","justify-between","items-center"],["mat-dialog-title","","class","font-bold text-2xl uppercase",4,"ngIf"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[3,"formGroup"],[1,"flex"],[1,"w-full","px-2"],["color","accent",1,"w-full"],["matInput","","formControlName","name",3,"ngClass"],[4,"ngIf"],["matInput","","formControlName","code","type","number",3,"ngClass"],[1,"flex","justify-end","justify-items-end"],["mat-flat-button","","mat-dialog-close","","tabindex","-1",1,"fuse-mat-button",3,"color"],["mat-flat-button","",3,"ngClass","color","disabled","click"],["mat-dialog-title","",1,"font-bold","text-2xl","uppercase"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.YNc(1,I,3,3,"p",1),t.YNc(2,Q,3,3,"p",1),t.TgZ(3,"button",2)(4,"mat-icon",3),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"mat-dialog-content")(7,"form",4)(8,"div",5)(9,"div",6)(10,"mat-form-field",7)(11,"mat-label"),t._uU(12),t.ALo(13,"transloco"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,Y,3,3,"mat-error",9),t.qZA(),t.TgZ(16,"mat-form-field",7)(17,"mat-label"),t._uU(18),t.ALo(19,"transloco"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,L,3,3,"mat-error",9),t.qZA()()()()(),t.TgZ(22,"mat-dialog-actions",11)(23,"button",12),t._uU(24),t.ALo(25,"transloco"),t.qZA(),t.TgZ(26,"button",13),t.NdJ("click",function(){return o.submit()}),t._uU(27),t.ALo(28,"transloco"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("ngIf",!o.edit),t.xp6(1),t.Q6J("ngIf",o.edit),t.xp6(5),t.Q6J("formGroup",o.form),t.xp6(5),t.Oqu(t.lcZ(13,15,"name")),t.xp6(2),t.Q6J("ngClass",t.VKq(23,T,o.f.name.errors)),t.xp6(1),t.Q6J("ngIf",null==o.f.name.errors?null:o.f.name.errors.required),t.xp6(3),t.Oqu(t.lcZ(19,17,"code")),t.xp6(2),t.Q6J("ngClass",t.VKq(25,T,o.f.name.errors)),t.xp6(1),t.Q6J("ngIf",null==o.f.name.errors?null:o.f.name.errors.required),t.xp6(2),t.Q6J("color","warn"),t.xp6(1),t.hij(" ",t.lcZ(25,19,"cancel"),""),t.xp6(2),t.Q6J("ngClass",t.WLB(27,j,o.form.invalid||o.form.pristine,!o.form.invalid&&!o.form.pristine))("color","primary")("disabled",o.form.invalid||o.form.pristine),t.xp6(1),t.hij(" ",t.lcZ(28,21,"save")," "))},dependencies:[h.y4,h.Ot,f.Ps,f.Hw,g.ot,g.lW,g.RK,i.UX,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u,m.Is,m.ZT,m.uh,m.xY,m.H8,i.u5,_.O5,l.p0,_.mk,p.lN,p.KE,p.hX,p.TO,Z.c,Z.Nt,v.JX,C.TU,d.Tx,P.rP],encapsulation:2,changeDetection:0})}return e})();function D(e,r){1&e&&(t.TgZ(0,"mat-header-cell",20),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij("",t.lcZ(2,1,"name")," "))}function O(e,r){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=r.$implicit;t.xp6(1),t.hij(" ",null==a?null:a.name," ")}}function q(e,r){1&e&&(t.TgZ(0,"mat-header-cell",20),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij("",t.lcZ(2,1,"code")," "))}function H(e,r){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=r.$implicit;t.xp6(1),t.hij(" ",null==a?null:a.code," ")}}function F(e,r){1&e&&t._UZ(0,"mat-header-cell")}function W(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"mat-cell")(1,"div",21)(2,"button",22),t.NdJ("click",function(o){return o.stopPropagation()}),t.TgZ(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"mat-menu",null,23)(7,"button",24),t.NdJ("click",function(){const c=t.CHM(a).$implicit,u=t.oxw();return t.KtG(u.edit(c))}),t.TgZ(8,"mat-icon"),t._uU(9,"edit"),t.qZA(),t._uU(10),t.ALo(11,"transloco"),t.qZA(),t.TgZ(12,"button",24),t.NdJ("click",function(){const c=t.CHM(a).$implicit,u=t.oxw();return t.KtG(u.delete(c.id))}),t.TgZ(13,"mat-icon"),t._uU(14,"remove"),t.qZA(),t._uU(15),t.ALo(16,"transloco"),t.qZA()()()()}if(2&e){const a=t.MAs(6);t.xp6(2),t.Q6J("matMenuTriggerFor",a),t.xp6(8),t.hij(" ",t.lcZ(11,3,"edit")," "),t.xp6(5),t.hij(" ",t.lcZ(16,5,"remove")," ")}}function z(e,r){1&e&&t._UZ(0,"mat-header-row")}function M(e,r){1&e&&t._UZ(0,"mat-row")}function R(e,r){1&e&&t._UZ(0,"app-no-data-placeholder",25)}const G=function(){return[10,20,50,100,200]},B=[{path:"",component:(()=>{class e extends b.G{constructor(a,n){super(),this._cargoPackageService=a,this._dialog=n,this.displayedColumns=["name","actions"],this.pageParams={page:0,limit:10,totalPagesCount:1,sortBy:"id",sortType:"desc"},this.dataSource=new l.by([])}ngOnInit(){this.getAllCargoStatus(this.pageParams)}getAllCargoStatus(a){this._cargoPackageService.getAll(a).subscribe(n=>{this.dataSource.data=n.data,this.pageParams.pageSize=n?.data?.pageSize,this.pageParams.page=n?.data?.pageIndex,this.pageParams.totalPagesCount=n?.data?.totalPagesCount})}onPageChange(a){this.pageParams.pageSize=a.pageSize,this.pageParams.page=a.pageIndex,this.getAllCargoStatus(this.pageParams)}add(){this._dialog.open(k,{minWidth:"25vw",maxWidth:"30vw",minHeight:"20vh",maxHeight:"80vh",autoFocus:!1}).afterClosed().subscribe(()=>{this.getAllCargoStatus(this.pageParams)})}edit(a){this._dialog.open(k,{minWidth:"25vw",maxWidth:"30vw",minHeight:"20vh",maxHeight:"80vh",autoFocus:!1,data:a}).afterClosed().subscribe(()=>{this.getAllCargoStatus(this.pageParams)})}delete(a){this._cargoPackageService.delete(a).subscribe(()=>{this.getAllCargoStatus(this.pageParams)})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(A),t.Y36(m.uw))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-cargo-packages"]],viewQuery:function(n,o){if(1&n&&t.Gf(C.NW,5),2&n){let c;t.iGM(c=t.CRH())&&(o.paginator=c.first)}},standalone:!0,features:[t.qOj,t.jDz],decls:28,vars:18,consts:[[1,"flex","flex-col","flex-auto"],[1,"flex-auto"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"flex","items-center","ml-6"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color","click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"mt-4","shadow-table"],["matSort","",3,"dataSource"],["matColumnDef","name"],["class","font-bold",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","code"],["matColumnDef","actions"],[4,"matHeaderCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","m-1",4,"ngIf"],[3,"showFirstLastButtons","length","pageSize","pageIndex","pageSizeOptions","page"],[1,"font-bold"],["fxFlex","row","fxLayoutAlign","end center"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor","click"],["moreMenu","matMenu"],["mat-menu-item","","color","accent",3,"click"],[1,"m-1"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),t._uU(5),t.ALo(6,"transloco"),t.qZA()(),t.TgZ(7,"div",4)(8,"button",5),t.NdJ("click",function(){return o.add()}),t._UZ(9,"mat-icon",6),t.TgZ(10,"span",7),t._uU(11),t.ALo(12,"transloco"),t.qZA()()()(),t.TgZ(13,"div",8)(14,"mat-table",9),t.ynx(15,10),t.YNc(16,D,3,3,"mat-header-cell",11),t.YNc(17,O,2,1,"mat-cell",12),t.BQk(),t.ynx(18,13),t.YNc(19,q,3,3,"mat-header-cell",11),t.YNc(20,H,2,1,"mat-cell",12),t.BQk(),t.ynx(21,14),t.YNc(22,F,1,0,"mat-header-cell",15),t.YNc(23,W,17,7,"mat-cell",12),t.BQk(),t.YNc(24,z,1,0,"mat-header-row",16),t.YNc(25,M,1,0,"mat-row",17),t.qZA(),t.YNc(26,R,1,0,"app-no-data-placeholder",18),t.TgZ(27,"mat-paginator",19),t.NdJ("page",function(u){return o.onPageChange(u)}),t.qZA()()()()),2&n&&(t.xp6(5),t.Oqu(t.lcZ(6,13,"package")),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus"),t.xp6(2),t.Oqu(t.lcZ(12,15,"add")),t.xp6(3),t.Q6J("dataSource",o.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("ngIf",!o.dataSource.data.length),t.xp6(1),t.Q6J("showFirstLastButtons",!0)("length",o.pageParams.totalPagesCount-1)("pageSize",o.pageParams.limit)("pageIndex",o.pageParams.page)("pageSizeOptions",t.DdM(17,G)))},dependencies:[h.y4,h.Ot,f.Ps,f.Hw,g.ot,g.lW,g.RK,w.o,_.O5,l.p0,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,p.lN,Z.c,v.JX,v.YE,C.TU,C.NW,d.Tx,d.VK,d.OP,d.p6,P.rP],encapsulation:2,changeDetection:0})}return e})(),resolve:{}}]}}]);