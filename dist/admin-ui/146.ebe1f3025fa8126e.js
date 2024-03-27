"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[146],{3146:(sn,v,c)=>{c.r(v),c.d(v,{default:()=>cn});var h=c(4755),Z=c(877),p=c(1728),d=c(430),f=c(5707),g=c(6702),x=c(2611),s=c(3627),A=c(9609),_=c(9114),u=c(7406),o=c(9401),m=c(6286),N=c(5136),e=c(2223),R=c(3648),C=c(8169);function L(n,t){1&n&&(e.TgZ(0,"p",36),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"add_role")))}function U(n,t){1&n&&(e.TgZ(0,"p",36),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"edit_role")))}function I(n,t){1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"is_empty")," "))}const Y=function(n){return{"is-invalid":n}},y=function(n,t){return{"fuse-mat-button text-white":n,"fuse-mat-button ":t}};let q=(()=>{class n{constructor(l,i,a,r){this.data=l,this._toaster=i,this.roleService=a,this._dialog=r,this.edit=!1,this.form=new o.cw({id:new o.NI(""),name:new o.NI("",[o.kI.required]),addDriver:new o.NI(""),addClient:new o.NI(""),addOrder:new o.NI(""),cancelOrder:new o.NI(""),seeDriversInfo:new o.NI(""),seeClientsInfo:new o.NI(""),sendPush:new o.NI(""),tracking:new o.NI(""),chat:new o.NI(""),clientMerchantFinance:new o.NI(""),driverMerchantFinance:new o.NI(""),registerClientMerchant:new o.NI(""),registerDriverMerchant:new o.NI(""),verifyDriver:new o.NI(""),clientMerchantList:new o.NI(""),driverMerchantList:new o.NI(""),adminPage:new o.NI(""),finRequest:new o.NI(""),driverMerchantPage:new o.NI(""),clientMerchantPage:new o.NI(""),driverVerification:new o.NI(""),agentPage:new o.NI("")}),this.data&&(this.edit=!0,this.form.patchValue({id:this.data?.id,name:this.data?.name,addDriver:this.data?.permission?.addDriver,addClient:this.data?.permission?.addClient,addOrder:this.data?.permission?.addOrder,cancelOrder:this.data?.permission?.cancelOrder,seeDriversInfo:this.data?.permission?.seeDriversInfo,seeClientsInfo:this.data?.permission?.seeClientsInfo,sendPush:this.data?.permission?.sendPush,tracking:this.data?.permission?.tracking,chat:this.data?.permission?.chat,clientMerchantFinance:this.data?.permission?.clientMerchantFinance,driverMerchantFinance:this.data?.permission?.driverMerchantFinance,registerClientMerchant:this.data?.permission?.registerClientMerchant,registerDriverMerchant:this.data?.permission?.registerDriverMerchant,verifyDriver:this.data?.permission?.verifyDriver,clientMerchantList:this.data?.permission?.clientMerchantList,driverMerchantList:this.data?.permission?.driverMerchantList,adminPage:this.data?.permission?.adminPage,finRequest:this.data?.permission?.finRequest,driverMerchantPage:this.data?.permission?.driverMerchantPage,clientMerchantPage:this.data?.permission?.clientMerchantPage,driverVerification:this.data?.permission?.driverVerification,agentPage:this.data?.permission?.addDriver}))}get f(){return this.form.controls}submit(){let l=this.parseData();this.form.valid?l.id?this.roleService.update(l).subscribe(i=>{i.success?(this._dialog.closeAll(),this._toaster.success("\u0420\u043e\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0440\u043e\u043b\u044c")}):this.roleService.create(l).subscribe(i=>{console.log(i),i.success?(this._dialog.closeAll(),this.form.reset(),this._toaster.success("\u0420\u043e\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430")):this._toaster.error("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0440\u043e\u043b\u044c")}):this._dialog.open(N.d,{width:"500px",height:"450px",data:{text:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0432\u0435\u0441\u0442\u0438 \u0432\u0441\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f"}})}parseData(){return{id:this.f?.id.value?this.f?.id.value:null,name:this.f.name.value,permission:{addDriver:this.f.addDriver.value,addClient:this.f?.addClient.value,addOrder:this.f?.addOrder.value,cancelOrder:this.f?.cancelOrder.value,seeDriversInfo:this.f?.seeDriversInfo.value,seeClientsInfo:this.f?.seeClientsInfo.value,sendPush:this.f?.sendPush.value,tracking:this.f?.tracking.value,chat:this.f?.chat.value,clientMerchantFinance:this.f?.clientMerchantFinance.value,driverMerchantFinance:this.f?.driverMerchantFinance.value,registerClientMerchant:this.f?.registerClientMerchant.value,registerDriverMerchant:this.f?.registerDriverMerchant.value,verifyDriver:this.f?.verifyDriver.value,clientMerchantList:this.f?.clientMerchantList.value,driverMerchantList:this.f?.driverMerchantList.value,adminPage:this.f?.adminPage.value,finRequest:this.f?.finRequest.value,driverMerchantPage:this.f?.driverMerchantPage.value,clientMerchantPage:this.f?.clientMerchantPage.value,driverVerification:this.f?.driverVerification.value,agentPage:this.f?.addDriver.value}}}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(m.WI),e.Y36(R._W),e.Y36(C.N),e.Y36(m.uw))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-role"]],standalone:!0,features:[e.jDz],decls:92,vars:89,consts:[[1,"flex","justify-between","items-center"],["mat-dialog-title","","class","font-bold text-2xl uppercase",4,"ngIf"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[3,"formGroup"],[1,"w-1/3","ml-2"],["color","accent",1,"w-full"],["matInput","","formControlName","name",3,"ngClass"],[4,"ngIf"],[1,"grid","grid-cols-3","gap-4"],[1,"p-3","flex","flex-col"],["formControlName","addDriver",1,"py-2"],["formControlName","addClient",1,"py-2"],["formControlName","addOrder",1,"py-2"],["formControlName","cancelOrder",1,"py-2"],["formControlName","seeDriversInfo",1,"py-2"],["formControlName","seeClientsInfo",1,"py-2"],["formControlName","sendPush",1,"py-2"],["formControlName","tracking",1,"py-2"],["formControlName","chat",1,"py-2"],["formControlName","driverMerchantFinance",1,"py-2"],["formControlName","clientMerchantFinance",1,"py-2"],["formControlName","registerClientMerchant",1,"py-2"],["formControlName","registerDriverMerchant",1,"py-2"],["formControlName","verifyDriver",1,"py-2"],["formControlName","clientMerchantList",1,"py-2"],["formControlName","driverMerchantList",1,"py-2"],["formControlName","adminPage",1,"py-2"],["formControlName","finRequest",1,"py-2"],["formControlName","driverMerchantPage",1,"py-2"],["formControlName","clientMerchantPage",1,"py-2"],["formControlName","driverVerification",1,"py-2"],["formControlName","agentPage",1,"py-2"],[1,"flex","justify-end","justify-items-end"],["mat-flat-button","","mat-dialog-close","","tabindex","-1",1,"fuse-mat-button",3,"color"],["mat-flat-button","",3,"ngClass","color","disabled","click"],["mat-dialog-title","",1,"font-bold","text-2xl","uppercase"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0),e.YNc(1,L,3,3,"p",1),e.YNc(2,U,3,3,"p",1),e.TgZ(3,"button",2)(4,"mat-icon",3),e._uU(5,"close"),e.qZA()()(),e.TgZ(6,"mat-dialog-content")(7,"form",4)(8,"div",5)(9,"mat-form-field",6)(10,"mat-label"),e._uU(11),e.ALo(12,"transloco"),e.qZA(),e._UZ(13,"input",7),e.YNc(14,I,3,3,"mat-error",8),e.qZA()(),e.TgZ(15,"div",9)(16,"div",10)(17,"mat-slide-toggle",11),e._uU(18),e.ALo(19,"transloco"),e.qZA(),e.TgZ(20,"mat-slide-toggle",12),e._uU(21),e.ALo(22,"transloco"),e.qZA(),e.TgZ(23,"mat-slide-toggle",13),e._uU(24),e.ALo(25,"transloco"),e.qZA(),e.TgZ(26,"mat-slide-toggle",14),e._uU(27),e.ALo(28,"transloco"),e.qZA(),e.TgZ(29,"mat-slide-toggle",15),e._uU(30),e.ALo(31,"transloco"),e.qZA(),e.TgZ(32,"mat-slide-toggle",16),e._uU(33),e.ALo(34,"transloco"),e.qZA(),e.TgZ(35,"mat-slide-toggle",17),e._uU(36),e.ALo(37,"transloco"),e.qZA(),e.TgZ(38,"mat-slide-toggle",18),e._uU(39),e.ALo(40,"transloco"),e.qZA()(),e.TgZ(41,"div",10)(42,"mat-slide-toggle",19),e._uU(43),e.ALo(44,"transloco"),e.qZA(),e.TgZ(45,"mat-slide-toggle",20),e._uU(46),e.ALo(47,"transloco"),e.qZA(),e.TgZ(48,"mat-slide-toggle",21),e._uU(49),e.ALo(50,"transloco"),e.qZA(),e.TgZ(51,"mat-slide-toggle",22),e._uU(52),e.ALo(53,"transloco"),e.qZA(),e.TgZ(54,"mat-slide-toggle",23),e._uU(55),e.ALo(56,"transloco"),e.qZA(),e.TgZ(57,"mat-slide-toggle",24),e._uU(58),e.ALo(59,"transloco"),e.qZA(),e.TgZ(60,"mat-slide-toggle",25),e._uU(61),e.ALo(62,"transloco"),e.qZA(),e.TgZ(63,"mat-slide-toggle",26),e._uU(64),e.ALo(65,"transloco"),e.qZA()(),e.TgZ(66,"div",10)(67,"mat-slide-toggle",27),e._uU(68),e.ALo(69,"transloco"),e.qZA(),e.TgZ(70,"mat-slide-toggle",28),e._uU(71),e.ALo(72,"transloco"),e.qZA(),e.TgZ(73,"mat-slide-toggle",29),e._uU(74),e.ALo(75,"transloco"),e.qZA(),e.TgZ(76,"mat-slide-toggle",30),e._uU(77),e.ALo(78,"transloco"),e.qZA(),e.TgZ(79,"mat-slide-toggle",31),e._uU(80),e.ALo(81,"transloco"),e.qZA(),e.TgZ(82,"mat-slide-toggle",32),e._uU(83),e.ALo(84,"transloco"),e.qZA()()()()(),e.TgZ(85,"mat-dialog-actions",33)(86,"button",34),e._uU(87),e.ALo(88,"transloco"),e.qZA(),e.TgZ(89,"button",35),e.NdJ("click",function(){return a.submit()}),e._uU(90),e.ALo(91,"transloco"),e.qZA()()),2&i&&(e.xp6(1),e.Q6J("ngIf",!a.edit),e.xp6(1),e.Q6J("ngIf",a.edit),e.xp6(5),e.Q6J("formGroup",a.form),e.xp6(4),e.Oqu(e.lcZ(12,34,"role_name")),e.xp6(2),e.Q6J("ngClass",e.VKq(84,Y,a.f.name.errors)),e.xp6(1),e.Q6J("ngIf",null==a.f.name.errors?null:a.f.name.errors.required),e.xp6(4),e.hij(" ",e.lcZ(19,36,"add_driver")," "),e.xp6(3),e.hij(" ",e.lcZ(22,38,"add_client")," "),e.xp6(3),e.hij(" ",e.lcZ(25,40,"add_order")," "),e.xp6(3),e.hij(" ",e.lcZ(28,42,"cancel_order")," "),e.xp6(3),e.hij(" ",e.lcZ(31,44,"see_drivers_info")," "),e.xp6(3),e.hij(" ",e.lcZ(34,46,"see_clients_info")," "),e.xp6(3),e.hij(" ",e.lcZ(37,48,"send_push")," "),e.xp6(3),e.hij(" ",e.lcZ(40,50,"tracking")," "),e.xp6(4),e.hij(" ",e.lcZ(44,52,"chat")," "),e.xp6(3),e.hij(" ",e.lcZ(47,54,"driver_finance")," "),e.xp6(3),e.hij(" ",e.lcZ(50,56,"merchant_finance")," "),e.xp6(3),e.hij(" ",e.lcZ(53,58,"registr_merchant_client")," "),e.xp6(3),e.hij(" ",e.lcZ(56,60,"registr_merchant_driver")," "),e.xp6(3),e.hij(" ",e.lcZ(59,62,"verify_driver")," "),e.xp6(3),e.hij(" ",e.lcZ(62,64,"merchant_client_list")," "),e.xp6(3),e.hij(" ",e.lcZ(65,66,"merchant_driver_list")," "),e.xp6(4),e.hij(" ",e.lcZ(69,68,"admin_page")," "),e.xp6(3),e.hij(" ",e.lcZ(72,70,"fin_request")," "),e.xp6(3),e.hij(" ",e.lcZ(75,72,"driver_merchant_page")," "),e.xp6(3),e.hij(" ",e.lcZ(78,74,"client_merchant_page")," "),e.xp6(3),e.hij(" ",e.lcZ(81,76,"driver_verification")," "),e.xp6(3),e.hij(" ",e.lcZ(84,78,"agent_page")," "),e.xp6(3),e.Q6J("color","warn"),e.xp6(1),e.hij(" ",e.lcZ(88,80,"cancel"),""),e.xp6(2),e.Q6J("ngClass",e.WLB(86,y,a.form.invalid||a.form.pristine,!a.form.invalid&&!a.form.pristine))("color","primary")("disabled",a.form.invalid||a.form.pristine),e.xp6(1),e.hij(" ",e.lcZ(91,82,"save")," "))},dependencies:[f.y4,f.Ot,d.Ps,d.Hw,p.ot,p.lW,p.RK,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,m.Is,m.ZT,m.uh,m.xY,m.H8,o.u5,h.O5,s.p0,h.mk,_.lN,_.KE,_.hX,_.TO,A.c,A.Nt,x.JX,g.TU,u.Tx,Z.rP,Z.Rr],encapsulation:2,changeDetection:0})}return n})();var w=c(6266),Q=c(1983);function M(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"role")," "))}function O(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.hij(" ",null==l?null:l.name," ")}}function D(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"add_driver")," "))}function J(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function j(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function P(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,J,3,3,"span",38),e.YNc(2,j,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.addDriver),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.addDriver))}}function b(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"add_client")," "))}function k(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function F(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function B(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,k,3,3,"span",38),e.YNc(2,F,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.addClient),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.addClient))}}function $(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"add_order")," "))}function S(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function H(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function V(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,S,3,3,"span",38),e.YNc(2,H,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.addOrder),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.addOrder))}}function W(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"cancel_order")," "))}function G(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function K(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function X(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,G,3,3,"span",38),e.YNc(2,K,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.cancelOrder),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.cancelOrder))}}function z(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"watch_driver")," "))}function E(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function ee(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function ne(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,E,3,3,"span",38),e.YNc(2,ee,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.seeDriversInfo),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.seeDriversInfo))}}function le(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"watch_client")," "))}function te(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function oe(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function ae(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,te,3,3,"span",38),e.YNc(2,oe,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.seeClientsInfo),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.seeClientsInfo))}}function ie(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"send_push")," "))}function ce(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function se(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function re(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,ce,3,3,"span",38),e.YNc(2,se,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.sendPush),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.sendPush))}}function me(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"chat")," "))}function pe(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function _e(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function ue(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,pe,3,3,"span",38),e.YNc(2,_e,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.chat),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.chat))}}function de(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"tracking")," "))}function fe(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function ge(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function he(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,fe,3,3,"span",38),e.YNc(2,ge,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.tracking),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.tracking))}}function Ze(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"driver_finance")," "))}function xe(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function Ae(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function Te(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,xe,3,3,"span",38),e.YNc(2,Ae,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.driverMerchantFinance),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.driverMerchantFinance))}}function ve(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"merchant_finance")," "))}function Ce(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function qe(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function Ne(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,Ce,3,3,"span",38),e.YNc(2,qe,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.clientMerchantFinance),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.clientMerchantFinance))}}function Re(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"registr_merchant")," "))}function Le(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function Ue(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function Ie(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,Le,3,3,"span",38),e.YNc(2,Ue,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.registrMerchant),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.registrMerchant))}}function Ye(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"admin_page")," "))}function ye(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function we(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function Qe(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,ye,3,3,"span",38),e.YNc(2,we,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.adminPage),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.adminPage))}}function Me(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"fin_request")," "))}function Oe(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function De(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function Je(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,Oe,3,3,"span",38),e.YNc(2,De,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.finRequest),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.finRequest))}}function je(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"driver_merchant_page")," "))}function Pe(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function be(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function ke(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,Pe,3,3,"span",38),e.YNc(2,be,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.driverMerchantPage),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.driverMerchantPage))}}function Fe(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"client_merchant_page")," "))}function Be(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function $e(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function Se(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,Be,3,3,"span",38),e.YNc(2,$e,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.clientMerchantPage),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.clientMerchantPage))}}function He(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"driver_verification")," "))}function Ve(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function We(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function Ge(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,Ve,3,3,"span",38),e.YNc(2,We,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.driverVerification),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.driverVerification))}}function Ke(n,t){1&n&&(e.TgZ(0,"mat-header-cell",37),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"agent_page")," "))}function Xe(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"yes")))}function ze(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"no")))}function Ee(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,Xe,3,3,"span",38),e.YNc(2,ze,3,3,"span",38),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("ngIf",null==l||null==l.permission?null:l.permission.agentPage),e.xp6(1),e.Q6J("ngIf",!(null!=l&&null!=l.permission&&l.permission.agentPage))}}function en(n,t){1&n&&e._UZ(0,"mat-header-cell")}function nn(n,t){if(1&n){const l=e.EpF();e.TgZ(0,"mat-cell")(1,"div",39)(2,"button",40),e.NdJ("click",function(a){return a.stopPropagation()}),e.TgZ(3,"mat-icon"),e._uU(4,"more_vert"),e.qZA()(),e.TgZ(5,"mat-menu",null,41)(7,"button",42),e.NdJ("click",function(){const r=e.CHM(l).$implicit,T=e.oxw();return e.KtG(T.edit(r))}),e.TgZ(8,"mat-icon"),e._uU(9,"edit"),e.qZA(),e._uU(10),e.ALo(11,"transloco"),e.qZA(),e.TgZ(12,"button",42),e.NdJ("click",function(){const r=e.CHM(l).$implicit,T=e.oxw();return e.KtG(T.delete(r.id))}),e.TgZ(13,"mat-icon"),e._uU(14,"remove"),e.qZA(),e._uU(15),e.ALo(16,"transloco"),e.qZA()()()()}if(2&n){const l=e.MAs(6);e.xp6(2),e.Q6J("matMenuTriggerFor",l),e.xp6(8),e.hij(" ",e.lcZ(11,3,"edit")," "),e.xp6(5),e.hij(" ",e.lcZ(16,5,"remove")," ")}}function ln(n,t){1&n&&e._UZ(0,"mat-header-row")}function tn(n,t){1&n&&e._UZ(0,"mat-row")}function on(n,t){1&n&&e._UZ(0,"app-no-data-placeholder",43)}const an=function(){return[10,20,50,100,200]},cn=[{path:"",component:(()=>{class n extends w.G{constructor(l,i){super(),this._roleService=l,this._dialog=i,this.displayedColumns=["role","add_driver","add_client","add_order","cancel_order","watch_driver","watch_client","send_push","chat","tracking","driver_finance","merchant_finance","registr_merchant","admin_page","fin_request","driver_merchant_page","client_merchant_page","driver_verification","agent_page","actions"],this.dataSource=new s.by([])}ngOnInit(){this.getAllRoles()}getAllRoles(){this._roleService.getAll().subscribe(l=>{this.dataSource.data=l.data})}add(){this._dialog.open(q,{minWidth:"40vw",maxWidth:"50vw",minHeight:"35vh",maxHeight:"80vh",autoFocus:!1}).afterClosed().subscribe(()=>{this.getAllRoles()})}edit(l){this._dialog.open(q,{minWidth:"40vw",maxWidth:"50vw",minHeight:"35vh",maxHeight:"80vh",autoFocus:!1,data:l}).afterClosed().subscribe(()=>{this.getAllRoles()})}delete(l){this._roleService.delete(l).subscribe(()=>{this.getAllRoles()})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(C.N),e.Y36(m.uw))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-role"]],viewQuery:function(i,a){if(1&i&&e.Gf(g.NW,5),2&i){let r;e.iGM(r=e.CRH())&&(a.paginator=r.first)}},standalone:!0,features:[e.qOj,e.jDz],decls:79,vars:16,consts:[[1,"flex","flex-col","flex-auto"],[1,"flex-auto"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"flex","items-center","ml-6"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color","click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"mt-4","shadow-table"],["matSort","",3,"dataSource"],["matColumnDef","role"],["class","font-bold",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","add_driver"],["matColumnDef","add_client"],["matColumnDef","add_order"],["matColumnDef","cancel_order"],["matColumnDef","watch_driver"],["matColumnDef","watch_client"],["matColumnDef","send_push"],["matColumnDef","chat"],["matColumnDef","tracking"],["matColumnDef","driver_finance"],["matColumnDef","merchant_finance"],["matColumnDef","registr_merchant"],["matColumnDef","admin_page"],["matColumnDef","fin_request"],["matColumnDef","driver_merchant_page"],["matColumnDef","client_merchant_page"],["matColumnDef","driver_verification"],["matColumnDef","agent_page"],["matColumnDef","actions"],[4,"matHeaderCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","m-1",4,"ngIf"],["showFirstLastButtons","",3,"showFirstLastButtons","length","pageSizeOptions"],[1,"font-bold"],[4,"ngIf"],["fxFlex","row","fxLayoutAlign","end center"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor","click"],["moreMenu","matMenu"],["mat-menu-item","","color","accent",3,"click"],[1,"m-1"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),e._uU(5),e.ALo(6,"transloco"),e.qZA()(),e.TgZ(7,"div",4)(8,"button",5),e.NdJ("click",function(){return a.add()}),e._UZ(9,"mat-icon",6),e.TgZ(10,"span",7),e._uU(11),e.ALo(12,"transloco"),e.qZA()()()(),e.TgZ(13,"div",8)(14,"mat-table",9),e.ynx(15,10),e.YNc(16,M,3,3,"mat-header-cell",11),e.YNc(17,O,2,1,"mat-cell",12),e.BQk(),e.ynx(18,13),e.YNc(19,D,3,3,"mat-header-cell",11),e.YNc(20,P,3,2,"mat-cell",12),e.BQk(),e.ynx(21,14),e.YNc(22,b,3,3,"mat-header-cell",11),e.YNc(23,B,3,2,"mat-cell",12),e.BQk(),e.ynx(24,15),e.YNc(25,$,3,3,"mat-header-cell",11),e.YNc(26,V,3,2,"mat-cell",12),e.BQk(),e.ynx(27,16),e.YNc(28,W,3,3,"mat-header-cell",11),e.YNc(29,X,3,2,"mat-cell",12),e.BQk(),e.ynx(30,17),e.YNc(31,z,3,3,"mat-header-cell",11),e.YNc(32,ne,3,2,"mat-cell",12),e.BQk(),e.ynx(33,18),e.YNc(34,le,3,3,"mat-header-cell",11),e.YNc(35,ae,3,2,"mat-cell",12),e.BQk(),e.ynx(36,19),e.YNc(37,ie,3,3,"mat-header-cell",11),e.YNc(38,re,3,2,"mat-cell",12),e.BQk(),e.ynx(39,20),e.YNc(40,me,3,3,"mat-header-cell",11),e.YNc(41,ue,3,2,"mat-cell",12),e.BQk(),e.ynx(42,21),e.YNc(43,de,3,3,"mat-header-cell",11),e.YNc(44,he,3,2,"mat-cell",12),e.BQk(),e.ynx(45,22),e.YNc(46,Ze,3,3,"mat-header-cell",11),e.YNc(47,Te,3,2,"mat-cell",12),e.BQk(),e.ynx(48,23),e.YNc(49,ve,3,3,"mat-header-cell",11),e.YNc(50,Ne,3,2,"mat-cell",12),e.BQk(),e.ynx(51,24),e.YNc(52,Re,3,3,"mat-header-cell",11),e.YNc(53,Ie,3,2,"mat-cell",12),e.BQk(),e.ynx(54,25),e.YNc(55,Ye,3,3,"mat-header-cell",11),e.YNc(56,Qe,3,2,"mat-cell",12),e.BQk(),e.ynx(57,26),e.YNc(58,Me,3,3,"mat-header-cell",11),e.YNc(59,Je,3,2,"mat-cell",12),e.BQk(),e.ynx(60,27),e.YNc(61,je,3,3,"mat-header-cell",11),e.YNc(62,ke,3,2,"mat-cell",12),e.BQk(),e.ynx(63,28),e.YNc(64,Fe,3,3,"mat-header-cell",11),e.YNc(65,Se,3,2,"mat-cell",12),e.BQk(),e.ynx(66,29),e.YNc(67,He,3,3,"mat-header-cell",11),e.YNc(68,Ge,3,2,"mat-cell",12),e.BQk(),e.ynx(69,30),e.YNc(70,Ke,3,3,"mat-header-cell",11),e.YNc(71,Ee,3,2,"mat-cell",12),e.BQk(),e.ynx(72,31),e.YNc(73,en,1,0,"mat-header-cell",32),e.YNc(74,nn,17,7,"mat-cell",12),e.BQk(),e.YNc(75,ln,1,0,"mat-header-row",33),e.YNc(76,tn,1,0,"mat-row",34),e.qZA(),e.YNc(77,on,1,0,"app-no-data-placeholder",35),e._UZ(78,"mat-paginator",36),e.qZA()()()),2&i&&(e.xp6(5),e.Oqu(e.lcZ(6,11,"role_user")),e.xp6(3),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:plus"),e.xp6(2),e.Oqu(e.lcZ(12,13,"add")),e.xp6(3),e.Q6J("dataSource",a.dataSource),e.xp6(61),e.Q6J("matHeaderRowDef",a.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns),e.xp6(1),e.Q6J("ngIf",!a.dataSource.data.length),e.xp6(1),e.Q6J("showFirstLastButtons",!0)("length",a.dataSource.data.length)("pageSizeOptions",e.DdM(15,an)))},dependencies:[f.y4,f.Ot,d.Ps,d.Hw,p.ot,p.lW,p.RK,Q.o,h.O5,s.p0,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,_.lN,A.c,x.JX,x.YE,g.TU,g.NW,u.Tx,u.VK,u.OP,u.p6,Z.rP],styles:["table{width:100%}\n"],encapsulation:2,changeDetection:0})}return n})(),resolve:{}}]}}]);