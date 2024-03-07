"use strict";(self.webpackChunkadmin_ui=self.webpackChunkadmin_ui||[]).push([[207],{1207:(k,f,n)=>{n.r(f),n.d(f,{default:()=>G});var Z=n(4755),y=n(877),d=n(1728),v=n(430),h=n(8001),p=n(6702),_=n(2611),c=n(3627),g=n(9609),A=n(9114),u=n(7406),C=n(787),U=n(1983),m=n(9401),t=n(2223),x=n(2689),T=n(3144),N=n(8615);let S=(()=>{class e{constructor(l){this._apiService=l}get(l){return this._apiService.get(`/clients/${l}`)}getAll(l){return this._apiService.get("/clients/all",(0,x.$)(l))}create(l){return this._apiService.post("/clients",l)}update(l){return this._apiService.put("/clients",l)}delete(l){let i=new T.LE;return i=i.append("id",l),this._apiService.delete("/clients",i)}static#t=this.\u0275fac=function(i){return new(i||e)(t.LFG(N.s))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var w=n(6286);function J(e,a){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"id")," "))}function L(e,a){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const l=a.$implicit;t.xp6(1),t.hij(" ",null==l?null:l.id," ")}}function M(e,a){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"full_name")," "))}function D(e,a){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const l=a.$implicit;t.xp6(1),t.hij(" ",null==l?null:l.fio," ")}}function Y(e,a){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"action")," "))}function j(e,a){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const l=a.$implicit;t.xp6(1),t.hij(" ",null==l?null:l.action," ")}}function Q(e,a){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"date")," "))}function F(e,a){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const l=a.$implicit;t.xp6(1),t.hij(" ",null==l?null:l.date," ")}}function B(e,a){1&e&&t._UZ(0,"mat-header-cell")}function O(e,a){if(1&e){const l=t.EpF();t.TgZ(0,"mat-cell")(1,"div",22)(2,"button",23),t.NdJ("click",function(o){return o.stopPropagation()}),t.TgZ(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"mat-menu",null,24)(7,"button",25),t.NdJ("click",function(){const r=t.CHM(l).$implicit,s=t.oxw();return t.KtG(s.edit(r))}),t.TgZ(8,"mat-icon"),t._uU(9,"edit"),t.qZA(),t._uU(10),t.ALo(11,"transloco"),t.qZA(),t.TgZ(12,"button",25),t.NdJ("click",function(){const r=t.CHM(l).$implicit,s=t.oxw();return t.KtG(s.delete(r.id))}),t.TgZ(13,"mat-icon"),t._uU(14,"remove"),t.qZA(),t._uU(15),t.ALo(16,"transloco"),t.qZA()()()()}if(2&e){const l=t.MAs(6);t.xp6(2),t.Q6J("matMenuTriggerFor",l),t.xp6(8),t.hij(" ",t.lcZ(11,3,"edit")," "),t.xp6(5),t.hij(" ",t.lcZ(16,5,"remove")," ")}}function $(e,a){1&e&&t._UZ(0,"mat-header-row")}function b(e,a){1&e&&t._UZ(0,"mat-row")}function H(e,a){1&e&&t._UZ(0,"app-no-data-placeholder")}const R=function(){return[10,20,50,100,200]},G=[{path:"",component:(()=>{class e{constructor(l,i){this._userActivityService=l,this._dialog=i,this.cities=[],this.filters={id:"",full_name:""},this.displayedColumns=["id","full_name","action","date","actions"],this.dataSource=new c.by([])}clearFilters(){this.filters={id:"",full_name:""}}filterUsers(){}ngOnInit(){this.getAllUsersActivity()}getAllUsersActivity(){this._userActivityService.getAll().subscribe(l=>{this.dataSource.data=l?.data})}delete(l){this._userActivityService.delete(l).subscribe(()=>{this.getAllUsersActivity()})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(S),t.Y36(w.uw))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-user-activity"]],viewQuery:function(i,o){if(1&i&&t.Gf(p.NW,5),2&i){let r;t.iGM(r=t.CRH())&&(o.paginator=r.first)}},standalone:!0,features:[t.jDz],decls:43,vars:25,consts:[[1,"flex","flex-col","flex-auto"],[1,"flex-auto","border-t"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"flex","items-baseline","w-full"],["color","accent",1,"w-50","px-1"],["matInput","",3,"placeholder","ngModel","ngModelChange"],[1,"px-1"],["mat-flat-button","","color","warn",3,"click"],[1,"mt-4"],["matSort","",3,"dataSource"],["matColumnDef","id"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","full_name"],["matColumnDef","action"],["matColumnDef","date"],["matColumnDef","actions"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[4,"ngIf"],["showFirstLastButtons","",3,"showFirstLastButtons","length","pageSizeOptions"],["fxFlex","row","fxLayoutAlign","end center"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor","click"],["moreMenu","matMenu"],["mat-menu-item","","color","accent",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),t._uU(5),t.ALo(6,"transloco"),t.qZA()()(),t.TgZ(7,"div",4)(8,"mat-form-field",5)(9,"input",6),t.NdJ("ngModelChange",function(s){return o.filters.id=s}),t.ALo(10,"transloco"),t.qZA()(),t.TgZ(11,"mat-form-field",5)(12,"input",6),t.NdJ("ngModelChange",function(s){return o.filters.full_name=s}),t.ALo(13,"transloco"),t.qZA()(),t.TgZ(14,"div",7)(15,"button",8),t.NdJ("click",function(){return o.clearFilters()}),t._uU(16),t.ALo(17,"transloco"),t.qZA()(),t.TgZ(18,"div",7)(19,"button",8),t.NdJ("click",function(){return o.filterUsers()}),t._uU(20),t.ALo(21,"transloco"),t.qZA()()(),t.TgZ(22,"div",9)(23,"mat-table",10),t.ynx(24,11),t.YNc(25,J,3,3,"mat-header-cell",12),t.YNc(26,L,2,1,"mat-cell",13),t.BQk(),t.ynx(27,14),t.YNc(28,M,3,3,"mat-header-cell",12),t.YNc(29,D,2,1,"mat-cell",13),t.BQk(),t.ynx(30,15),t.YNc(31,Y,3,3,"mat-header-cell",12),t.YNc(32,j,2,1,"mat-cell",13),t.BQk(),t.ynx(33,16),t.YNc(34,Q,3,3,"mat-header-cell",12),t.YNc(35,F,2,1,"mat-cell",13),t.BQk(),t.ynx(36,17),t.YNc(37,B,1,0,"mat-header-cell",12),t.YNc(38,O,17,7,"mat-cell",13),t.BQk(),t.YNc(39,$,1,0,"mat-header-row",18),t.YNc(40,b,1,0,"mat-row",19),t.qZA(),t.YNc(41,H,1,0,"app-no-data-placeholder",20),t._UZ(42,"mat-paginator",21),t.qZA()()()),2&i&&(t.xp6(5),t.Oqu(t.lcZ(6,14,"activity")),t.xp6(4),t.s9C("placeholder",t.lcZ(10,16,"id")),t.Q6J("ngModel",o.filters.id),t.xp6(3),t.s9C("placeholder",t.lcZ(13,18,"full_name")),t.Q6J("ngModel",o.filters.full_name),t.xp6(4),t.hij(" ",t.lcZ(17,20,"clear"),""),t.xp6(4),t.hij(" ",t.lcZ(21,22,"filter"),""),t.xp6(3),t.Q6J("dataSource",o.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("ngIf",!o.dataSource.data.length),t.xp6(1),t.Q6J("showFirstLastButtons",!0)("length",o.dataSource.data.length)("pageSizeOptions",t.DdM(24,R)))},dependencies:[h.y4,h.Ot,v.Ps,v.Hw,C.LD,A.KE,m.u5,m.Fj,m.JJ,m.On,m.UX,U.o,d.ot,d.lW,d.RK,Z.O5,c.p0,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,A.lN,g.c,g.Nt,_.JX,_.YE,p.TU,p.NW,u.Tx,u.VK,u.OP,u.p6,y.rP],encapsulation:2,changeDetection:0})}return e})(),resolve:{}}]}}]);