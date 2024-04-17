"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[401],{401:(q,_,r)=>{r.r(_),r.d(_,{default:()=>G});var v=r(4755),C=r(877),m=r(1728),g=r(430),h=r(5707),T=r(6702),x=r(2611),s=r(3627),Z=r(9609),d=r(9114),u=r(7406),y=r(6266),i=r(9401),p=r(6286),w=r(5136),t=r(2223),P=r(3648),J=r(2689),U=r(3144),N=r(7180);let A=(()=>{class e{constructor(a){this._apiService=a}get(a){return this._apiService.get(`/references/transport-types/${a}`)}getAll(a){return this._apiService.get("/references/transport-types/all",(0,J.$)(a))}create(a){return this._apiService.post("/references/transport-types",a)}update(a){return this._apiService.put("/references/transport-types",a)}delete(a){let o=new U.LE;return o=o.append("id",a),this._apiService.delete("/references/transport-types",o)}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(N.l))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function S(e,l){1&e&&(t.TgZ(0,"p",13),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"add_transport")))}function I(e,l){1&e&&(t.TgZ(0,"p",13),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"edit_transport")))}function Q(e,l){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}const Y=function(e){return{"is-invalid":e}},L=function(e,l){return{"fuse-mat-button text-white":e,"fuse-mat-button ":l}};let b=(()=>{class e{constructor(a,o,n,c){this.data=a,this._toaster=o,this._transportService=n,this._dialog=c,this.edit=!1,this.form=new i.cw({id:new i.NI(""),name:new i.NI("",[i.kI.required])}),this.data&&(this.edit=!0,this.form.patchValue({id:this.data?.id,name:this.data?.name}))}get f(){return this.form.controls}submit(){this.form.valid?this.form.value.id?this._transportService.update(this.form.value).subscribe(a=>{a.success?(this._dialog.closeAll(),this._toaster.success("\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442")}):this._transportService.create(this.form.value).subscribe(a=>{console.log(a),a.success?(this._dialog.closeAll(),this.form.reset(),this._toaster.success("\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442")}):this._dialog.open(w.d,{width:"500px",height:"450px",data:{text:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0432\u0435\u0441\u0442\u0438 \u0432\u0441\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f"}})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p.WI),t.Y36(P._W),t.Y36(A),t.Y36(p.uw))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-transport"]],standalone:!0,features:[t.jDz],decls:23,vars:23,consts:[[1,"flex","justify-between","items-center"],["mat-dialog-title","","class","font-bold text-2xl uppercase",4,"ngIf"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[3,"formGroup"],[1,"flex"],[1,"w-full","px-3"],["color","accent",1,"w-full"],["matInput","","formControlName","name",3,"ngClass"],[4,"ngIf"],[1,"flex","justify-end","justify-items-end"],["mat-flat-button","","mat-dialog-close","","tabindex","-1",1,"fuse-mat-button",3,"color"],["mat-flat-button","",3,"ngClass","color","disabled","click"],["mat-dialog-title","",1,"font-bold","text-2xl","uppercase"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.YNc(1,S,3,3,"p",1),t.YNc(2,I,3,3,"p",1),t.TgZ(3,"button",2)(4,"mat-icon",3),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"mat-dialog-content")(7,"form",4)(8,"div",5)(9,"div",6)(10,"mat-form-field",7)(11,"mat-label"),t._uU(12),t.ALo(13,"transloco"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,Q,3,3,"mat-error",9),t.qZA()()()()(),t.TgZ(16,"mat-dialog-actions",10)(17,"button",11),t._uU(18),t.ALo(19,"transloco"),t.qZA(),t.TgZ(20,"button",12),t.NdJ("click",function(){return n.submit()}),t._uU(21),t.ALo(22,"transloco"),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("ngIf",!n.edit),t.xp6(1),t.Q6J("ngIf",n.edit),t.xp6(5),t.Q6J("formGroup",n.form),t.xp6(5),t.Oqu(t.lcZ(13,12,"name")),t.xp6(2),t.Q6J("ngClass",t.VKq(18,Y,n.f.name.errors)),t.xp6(1),t.Q6J("ngIf",null==n.f.name.errors?null:n.f.name.errors.required),t.xp6(2),t.Q6J("color","warn"),t.xp6(1),t.hij(" ",t.lcZ(19,14,"cancel"),""),t.xp6(2),t.Q6J("ngClass",t.WLB(20,L,n.form.invalid||n.form.pristine,!n.form.invalid&&!n.form.pristine))("color","primary")("disabled",n.form.invalid||n.form.pristine),t.xp6(1),t.hij(" ",t.lcZ(22,16,"save")," "))},dependencies:[h.y4,h.Ot,g.Ps,g.Hw,m.ot,m.lW,m.RK,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,p.Is,p.ZT,p.uh,p.xY,p.H8,i.u5,v.O5,s.p0,v.mk,d.lN,d.KE,d.hX,d.TO,Z.c,Z.Nt,x.JX,T.TU,u.Tx,C.rP],encapsulation:2,changeDetection:0})}return e})();var j=r(1983);function D(e,l){1&e&&(t.TgZ(0,"mat-header-cell",19),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij("",t.lcZ(2,1,"name")," "))}function O(e,l){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=l.$implicit;t.xp6(1),t.hij(" ",null==a?null:a.name," ")}}function H(e,l){1&e&&t._UZ(0,"mat-header-cell")}function F(e,l){if(1&e){const a=t.EpF();t.TgZ(0,"mat-cell")(1,"div",20)(2,"button",21),t.NdJ("click",function(n){return n.stopPropagation()}),t.TgZ(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"mat-menu",null,22)(7,"button",23),t.NdJ("click",function(){const c=t.CHM(a).$implicit,f=t.oxw();return t.KtG(f.edit(c))}),t.TgZ(8,"mat-icon"),t._uU(9,"edit"),t.qZA(),t._uU(10),t.ALo(11,"transloco"),t.qZA(),t.TgZ(12,"button",23),t.NdJ("click",function(){const c=t.CHM(a).$implicit,f=t.oxw();return t.KtG(f.delete(c.id))}),t.TgZ(13,"mat-icon"),t._uU(14,"remove"),t.qZA(),t._uU(15),t.ALo(16,"transloco"),t.qZA()()()()}if(2&e){const a=t.MAs(6);t.xp6(2),t.Q6J("matMenuTriggerFor",a),t.xp6(8),t.hij(" ",t.lcZ(11,3,"edit")," "),t.xp6(5),t.hij(" ",t.lcZ(16,5,"remove")," ")}}function W(e,l){1&e&&t._UZ(0,"mat-header-row")}function z(e,l){1&e&&t._UZ(0,"mat-row")}function M(e,l){1&e&&t._UZ(0,"app-no-data-placeholder",24)}const R=function(){return[10,20,50,100,200]},G=[{path:"",component:(()=>{class e extends y.G{constructor(a,o){super(),this._transportService=a,this._dialog=o,this.displayedColumns=["name","actions"],this.pageParams={page:0,limit:10,totalPagesCount:1,sortBy:"id",sortType:"desc"},this.dataSource=new s.by([])}ngOnInit(){this.getAllTransport(this.pageParams)}getAllTransport(a){this._transportService.getAll(a).subscribe(o=>{this.dataSource.data=o.data,this.pageParams.pageSize=o?.data?.pageSize,this.pageParams.page=o?.data?.pageIndex,this.pageParams.totalPagesCount=o?.data?.totalPagesCount})}onPageChange(a){this.pageParams.pageSize=a.pageSize,this.pageParams.page=a.pageIndex,this.getAllTransport(this.pageParams)}add(){this._dialog.open(b,{minWidth:"25vw",maxWidth:"30vw",minHeight:"20vh",maxHeight:"80vh",autoFocus:!1}).afterClosed().subscribe(()=>{this.getAllTransport(this.pageParams)})}edit(a){this._dialog.open(b,{minWidth:"25vw",maxWidth:"30vw",minHeight:"20vh",maxHeight:"80vh",autoFocus:!1,data:a}).afterClosed().subscribe(()=>{this.getAllTransport(this.pageParams)})}delete(a){this._transportService.delete(a).subscribe(()=>{this.getAllTransport(this.pageParams)})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(A),t.Y36(p.uw))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-transport"]],viewQuery:function(o,n){if(1&o&&t.Gf(T.NW,5),2&o){let c;t.iGM(c=t.CRH())&&(n.paginator=c.first)}},standalone:!0,features:[t.qOj,t.jDz],decls:25,vars:18,consts:[[1,"flex","flex-col","flex-auto"],[1,"flex-auto"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"flex","items-center","ml-6"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color","click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"mt-4","shadow-table"],["matSort","",3,"dataSource"],["matColumnDef","name"],["class","font-bold",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","actions"],[4,"matHeaderCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","m-1",4,"ngIf"],[3,"showFirstLastButtons","length","pageSize","pageIndex","pageSizeOptions","page"],[1,"font-bold"],["fxFlex","row","fxLayoutAlign","end center"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor","click"],["moreMenu","matMenu"],["mat-menu-item","","color","accent",3,"click"],[1,"m-1"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),t._uU(5),t.ALo(6,"transloco"),t.qZA()(),t.TgZ(7,"div",4)(8,"button",5),t.NdJ("click",function(){return n.add()}),t._UZ(9,"mat-icon",6),t.TgZ(10,"span",7),t._uU(11),t.ALo(12,"transloco"),t.qZA()()()(),t.TgZ(13,"div",8)(14,"mat-table",9),t.ynx(15,10),t.YNc(16,D,3,3,"mat-header-cell",11),t.YNc(17,O,2,1,"mat-cell",12),t.BQk(),t.ynx(18,13),t.YNc(19,H,1,0,"mat-header-cell",14),t.YNc(20,F,17,7,"mat-cell",12),t.BQk(),t.YNc(21,W,1,0,"mat-header-row",15),t.YNc(22,z,1,0,"mat-row",16),t.qZA(),t.YNc(23,M,1,0,"app-no-data-placeholder",17),t.TgZ(24,"mat-paginator",18),t.NdJ("page",function(f){return n.onPageChange(f)}),t.qZA()()()()),2&o&&(t.xp6(5),t.Oqu(t.lcZ(6,13,"type_transport")),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus"),t.xp6(2),t.Oqu(t.lcZ(12,15,"add")),t.xp6(3),t.Q6J("dataSource",n.dataSource),t.xp6(7),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("ngIf",!n.dataSource.data.length),t.xp6(1),t.Q6J("showFirstLastButtons",!0)("length",n.pageParams.totalPagesCount-1)("pageSize",n.pageParams.limit)("pageIndex",n.pageParams.page)("pageSizeOptions",t.DdM(17,R)))},dependencies:[h.y4,h.Ot,g.Ps,g.Hw,m.ot,m.lW,m.RK,j.o,v.O5,s.p0,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,d.lN,Z.c,x.JX,x.YE,T.TU,T.NW,u.Tx,u.VK,u.OP,u.p6,C.rP],encapsulation:2,changeDetection:0})}return e})(),resolve:{}}]}}]);