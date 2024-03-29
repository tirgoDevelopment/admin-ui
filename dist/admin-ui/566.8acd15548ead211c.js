"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[566],{1566:(j,p,n)=>{n.r(p),n.d(p,{default:()=>Q});var x=n(4755),r=n(9401),g=n(1728),c=n(1292),l=n(9114),d=n(430),f=n(9609),h=n(8467),U=n(5159),v=n(3844),y=n(5971),e=n(2223),A=n(8236);const w=["signUpNgForm"];function T(t,a){if(1&t&&(e.TgZ(0,"fuse-alert",43),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",i.alert.type)("@shake","error"===i.alert.type),e.xp6(1),e.hij(" ",i.alert.message," ")}}function C(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Full name is required "),e.qZA())}function _(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Email address is required "),e.qZA())}function b(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function I(t,a){1&t&&e._UZ(0,"mat-icon",44),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function q(t,a){1&t&&e._UZ(0,"mat-icon",44),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-slash")}function J(t,a){1&t&&(e.TgZ(0,"span"),e._uU(1," Create your free account "),e.qZA())}function F(t,a){1&t&&e._UZ(0,"mat-progress-spinner",45),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const N=function(){return["/sign-in"]},Z=function(){return["./"]},Q=[{path:"",component:(()=>{class t{constructor(i,s,o){this._authService=i,this._formBuilder=s,this._router=o,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signUpForm=this._formBuilder.group({name:["",r.kI.required],email:["",[r.kI.required,r.kI.email]],password:["",r.kI.required],company:[""],agreements:["",r.kI.requiredTrue]})}signUp(){this.signUpForm.invalid||(this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(this.signUpForm.value).subscribe(i=>{this._router.navigateByUrl("/confirmation-required")},i=>{this.signUpForm.enable(),this.signUpNgForm.resetForm(),this.alert={type:"error",message:"Something went wrong, please try again."},this.showAlert=!0}))}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(A.e),e.Y36(r.QS),e.Y36(U.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["auth-sign-up"]],viewQuery:function(s,o){if(1&s&&e.Gf(w,5),2&s){let m;e.iGM(m=e.CRH())&&(o.signUpNgForm=m.first)}},standalone:!0,features:[e.jDz],decls:79,vars:23,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-boldtracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signUpNgForm","ngForm"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],[4,"ngIf"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","company-confirm","matInput","",3,"formControlName"],[1,"inline-flex","items-end","w-full","mt-1.5"],[1,"-ml-2",3,"color","formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(s,o){if(1&s){const m=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Sign up"),e.qZA(),e.TgZ(7,"div",6)(8,"div"),e._uU(9,"Already have an account?"),e.qZA(),e.TgZ(10,"a",7),e._uU(11,"Sign in "),e.qZA()(),e.YNc(12,T,2,5,"fuse-alert",8),e.TgZ(13,"form",9,10)(15,"mat-form-field",11)(16,"mat-label"),e._uU(17,"Full name"),e.qZA(),e._UZ(18,"input",12),e.YNc(19,C,2,0,"mat-error",13),e.qZA(),e.TgZ(20,"mat-form-field",11)(21,"mat-label"),e._uU(22,"Email address"),e.qZA(),e._UZ(23,"input",14),e.YNc(24,_,2,0,"mat-error",13),e.YNc(25,b,2,0,"mat-error",13),e.qZA(),e.TgZ(26,"mat-form-field",11)(27,"mat-label"),e._uU(28,"Password"),e.qZA(),e._UZ(29,"input",15,16),e.TgZ(31,"button",17),e.NdJ("click",function(){e.CHM(m);const u=e.MAs(30);return e.KtG(u.type="password"===u.type?"text":"password")}),e.YNc(32,I,1,1,"mat-icon",18),e.YNc(33,q,1,1,"mat-icon",18),e.qZA(),e.TgZ(34,"mat-error"),e._uU(35," Password is required "),e.qZA()(),e.TgZ(36,"mat-form-field",11)(37,"mat-label"),e._uU(38,"Company"),e.qZA(),e._UZ(39,"input",19),e.qZA(),e.TgZ(40,"div",20)(41,"mat-checkbox",21)(42,"span"),e._uU(43,"I agree with"),e.qZA(),e.TgZ(44,"a",7),e._uU(45,"Terms "),e.qZA(),e.TgZ(46,"span"),e._uU(47,"and"),e.qZA(),e.TgZ(48,"a",7),e._uU(49,"Privacy Policy "),e.qZA()()(),e.TgZ(50,"button",22),e.NdJ("click",function(){return o.signUp()}),e.YNc(51,J,2,0,"span",13),e.YNc(52,F,1,2,"mat-progress-spinner",23),e.qZA()()()(),e.TgZ(53,"div",24),e.O4$(),e.TgZ(54,"svg",25)(55,"g",26),e._UZ(56,"circle",27)(57,"circle",28),e.qZA()(),e.TgZ(58,"svg",29)(59,"defs")(60,"pattern",30),e._UZ(61,"rect",31),e.qZA()(),e._UZ(62,"rect",32),e.qZA(),e.kcU(),e.TgZ(63,"div",33)(64,"div",34)(65,"div"),e._uU(66,"Welcome to"),e.qZA(),e.TgZ(67,"div"),e._uU(68,"our community"),e.qZA()(),e.TgZ(69,"div",35),e._uU(70," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.qZA(),e.TgZ(71,"div",36)(72,"div",37),e._UZ(73,"img",38)(74,"img",39)(75,"img",40)(76,"img",41),e.qZA(),e.TgZ(77,"div",42),e._uU(78,"More than 17k people joined us, it's your turn"),e.qZA()()()()()}if(2&s){const m=e.MAs(30);e.xp6(10),e.Q6J("routerLink",e.DdM(20,N)),e.xp6(2),e.Q6J("ngIf",o.showAlert),e.xp6(1),e.Q6J("formGroup",o.signUpForm),e.xp6(5),e.Q6J("formControlName","name"),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("name").hasError("required")),e.xp6(4),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("email").hasError("email")),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===m.type),e.xp6(1),e.Q6J("ngIf","text"===m.type),e.xp6(6),e.Q6J("formControlName","company"),e.xp6(2),e.Q6J("color","primary")("formControlName","agreements"),e.xp6(3),e.Q6J("routerLink",e.DdM(21,Z)),e.xp6(4),e.Q6J("routerLink",e.DdM(22,Z)),e.xp6(2),e.Q6J("color","primary")("disabled",o.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",!o.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",o.signUpForm.disabled)}},dependencies:[U.rH,x.O5,y.W,r.u5,r._Y,r.Fj,r.JJ,r.JL,r.UX,r.sg,r.u,l.lN,l.KE,l.hX,l.TO,l.R9,f.c,f.Nt,g.ot,g.lW,g.RK,d.Ps,d.Hw,c.p9,c.oG,h.Cq,h.Ou],encapsulation:2,data:{animation:v.L}})}return t})()}]}}]);