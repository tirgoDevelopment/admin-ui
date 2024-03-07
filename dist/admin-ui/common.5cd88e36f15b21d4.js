"use strict";(self.webpackChunkadmin_ui=self.webpackChunkadmin_ui||[]).push([[592],{3537:(E,d,e)=>{e.d(d,{R:()=>B});var o=e(4755),l=e(877),i=e(1728),a=e(430),u=e(8001),c=e(6702),m=e(2611),s=e(3627),r=e(9609),_=e(9114),v=e(7406),n=e(9401),O=e(6286),h=e(787),p=e(3231),P=e(8280),T=e(4867),t=e(2223),A=e(3648),I=e(6133);function U(g,L){1&g&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&g&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}const R=function(g){return{"is-invalid":g}},y=function(g,L){return{"fuse-mat-button text-white":g,"fuse-mat-button dark":L}};let B=(()=>{class g{constructor(M,D,f,C){this.data=M,this._toaster=D,this._driverService=f,this._dialog=C,this.form=new n.cw({id:new n.NI(""),block_reason:new n.NI("",[n.kI.required])}),this.data&&this.form.patchValue({id:this.data})}get f(){return this.form.controls}submit(){this._driverService.block(this.form.get("id").value,this.form.get("block_reason").value).subscribe(M=>{M.success?(this._dialog.closeAll(),this.form.reset(),this._toaster.success("\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d")):this._toaster.error("\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d")})}static#e=this.\u0275fac=function(D){return new(D||g)(t.Y36(O.WI),t.Y36(A._W),t.Y36(I.P),t.Y36(O.uw))};static#t=this.\u0275cmp=t.Xpm({type:g,selectors:[["app-block-driver"]],standalone:!0,features:[t.jDz],decls:22,vars:24,consts:[[1,"flex","justify-between","items-center"],["mat-dialog-title","",1,"font-bold","text-2xl","uppercase"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[3,"formGroup"],[1,"p-3"],["color","accent",1,"w-full"],["matInput","","formControlName","block_reason","rows","4",3,"placeholder","ngClass"],[4,"ngIf"],[1,"flex"],[1,"ml-auto","p-4"],["mat-flat-button","","mat-dialog-close","","tabindex","-1",1,"fuse-mat-button",3,"color"],["mat-flat-button","",3,"ngClass","color","disabled","click"]],template:function(D,f){1&D&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2),t.ALo(3,"transloco"),t.qZA(),t.TgZ(4,"button",2)(5,"mat-icon",3),t._uU(6,"close"),t.qZA()()(),t.TgZ(7,"mat-dialog-content")(8,"form",4)(9,"div",5)(10,"mat-form-field",6),t._UZ(11,"textarea",7),t.ALo(12,"transloco"),t.YNc(13,U,3,3,"mat-error",8),t.qZA()()()(),t.TgZ(14,"mat-dialog-actions",9)(15,"div",10)(16,"button",11),t._uU(17),t.ALo(18,"transloco"),t.qZA(),t.TgZ(19,"button",12),t.NdJ("click",function(){return f.submit()}),t._uU(20),t.ALo(21,"transloco"),t.qZA()()()),2&D&&(t.xp6(2),t.Oqu(t.lcZ(3,11,"block")),t.xp6(6),t.Q6J("formGroup",f.form),t.xp6(3),t.s9C("placeholder",t.lcZ(12,13,"block_reason")),t.Q6J("ngClass",t.VKq(19,R,null==f.f.block_reason?null:f.f.block_reason.errors)),t.xp6(2),t.Q6J("ngIf",null==f.f.block_reason.errors?null:f.f.block_reason.errors.required),t.xp6(3),t.Q6J("color","warn"),t.xp6(1),t.hij(" ",t.lcZ(18,15,"cancel"),""),t.xp6(2),t.Q6J("ngClass",t.WLB(21,y,f.form.invalid||f.form.pristine,!f.form.invalid&&!f.form.pristine))("color","primary")("disabled",f.form.invalid||f.form.pristine),t.xp6(1),t.hij(" ",t.lcZ(21,17,"save")," "))},dependencies:[u.y4,u.Ot,o.mk,p.Co,T.Fk,P.FA,r.c,r.Nt,_.KE,_.TO,a.Ps,a.Hw,h.LD,i.ot,i.lW,i.RK,n.UX,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,O.Is,O.ZT,O.uh,O.xY,O.H8,n.u5,o.O5,s.p0,_.lN,m.JX,c.TU,v.Tx,l.rP],encapsulation:2,changeDetection:0})}return g})()},6133:(E,d,e)=>{e.d(d,{P:()=>c});var o=e(2689),l=e(3144),i=e(2223),a=e(8615),u=e(8236);let c=(()=>{class m{constructor(r,_){this._apiService=r,this._authService=_}get(r){let _=new l.LE,v=this._authService.getDecodedAccessToken().userId;return _=_.append("id",r),_=_.append("userId",v),this._apiService.get("/users/drivers/driver-by",_)}getAll(r){return this._apiService.get("/users/drivers/all",(0,o.$)(r))}create(r){return r.phoneNumbers=[r.phoneNumbers],this._apiService.post("/users/drivers/register",r)}createTransport(r){return this._apiService.post("/users/driver/transport",r)}updateTransport(r){return this._apiService.put("/users/driver/transport",r)}updateTransportDriver(r){return this._apiService.post("/users/driver/transport/to-verification",r)}getTransportWithDriver(r,_){let v=new l.LE;return v=v.append("driverId",r),v=v.append("transportId",_),this._apiService.get("/users/driver/transport",v)}update(r){return r.phoneNumbers=[r.phoneNumbers],this._apiService.put("/users/drivers/",r)}block(r,_){let v=new l.LE;return v=v.append("id",r),this._apiService.patch("/users/drivers/block",_,v)}active(r){let _=new l.LE;return _=_.append("id",r),this._apiService.patch("/users/drivers/activate",{},_)}delete(r){let _=new l.LE;return _=_.append("id",r),this._apiService.delete("/users/drivers",_)}static#e=this.\u0275fac=function(_){return new(_||m)(i.LFG(a.s),i.LFG(u.e))};static#t=this.\u0275prov=i.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()},7609:(E,d,e)=>{e.d(d,{G:()=>u});var o=e(2689),l=e(3144),i=e(2223),a=e(8615);let u=(()=>{class c{constructor(s){this._apiService=s}get(s){return this._apiService.get(`/references/cargo-type-groups/${s}`)}getAll(s){return this._apiService.get("/references/cargo-type-groups/all",(0,o.$)(s))}create(s){return this._apiService.post("/references/cargo-type-groups",s)}update(s){return this._apiService.put("/references/cargo-type-groups",s)}delete(s){let r=new l.LE;return r=r.append("id",s),this._apiService.delete("/references/cargo-type-groups",r)}static#e=this.\u0275fac=function(r){return new(r||c)(i.LFG(a.s))};static#t=this.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},8169:(E,d,e)=>{e.d(d,{N:()=>u});var o=e(2689),l=e(3144),i=e(2223),a=e(8615);let u=(()=>{class c{constructor(s){this._apiService=s}get(s){return this._apiService.get(`/references/roles/${s}`)}getAll(s){return this._apiService.get("/references/roles/all",(0,o.$)(s))}create(s){return this._apiService.post("/references/roles",s)}update(s){return this._apiService.put("/references/roles",s)}delete(s){let r=new l.LE;return r=r.append("id",s),this._apiService.delete("/references/roles",r)}static#e=this.\u0275fac=function(r){return new(r||c)(i.LFG(a.s))};static#t=this.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},4027:(E,d,e)=>{e.d(d,{F:()=>u});var o=e(2689),l=e(3144),i=e(2223),a=e(8615);let u=(()=>{class c{constructor(s){this._apiService=s}get(s){return this._apiService.get(`/references/subscriptions/${s}`)}getAll(s){return this._apiService.get("/references/subscriptions/all",(0,o.$)(s))}create(s){return this._apiService.post("/references/subscriptions",s)}update(s){return this._apiService.put("/references/subscriptions",s)}delete(s){let r=new l.LE;return r=r.append("id",s),this._apiService.delete("/references/subscriptions",r)}static#e=this.\u0275fac=function(r){return new(r||c)(i.LFG(a.s))};static#t=this.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},4342:(E,d,e)=>{e.d(d,{E:()=>v});var o=e(4755),l=e(6286),i=e(430),a=e(2223);let u=(()=>{class n{static#e=this.\u0275fac=function(p){return new(p||n)};static#t=this.\u0275mod=a.oAB({type:n});static#r=this.\u0275inj=a.cJS({imports:[o.ez]})}return n})();var c=e(9502),m=e(4004),s=e(3144);let r=(()=>{class n{constructor(h){this.http=h}getFileUrl(h,p){return console.log(h,p),this.http.get(c.O.references+`/references/files/${h}/${p}`,{responseType:"blob"}).pipe((0,m.U)(P=>(console.log(P),URL.createObjectURL(P))))}static#e=this.\u0275fac=function(p){return new(p||n)(a.LFG(s.eN))};static#t=this.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_=(()=>{class n{constructor(h){this.fileService=h}transform(h,p){return console.log(p,h),this.fileService.getFileUrl(p,h)}static#e=this.\u0275fac=function(p){return new(p||n)(a.Y36(r,16))};static#t=this.\u0275pipe=a.Yjl({name:"fileFetch",type:n,pure:!0})}return n})(),v=(()=>{class n{constructor(h,p,P){this.data=h,this._fileUrlService=p,this.dialog=P,this.image="",this.keyName="",this.fileName="",this.file_url="",this.keyName=this.data.keyName,this.fileName=this.data.fileName}static#e=this.\u0275fac=function(p){return new(p||n)(a.Y36(l.WI),a.Y36(r),a.Y36(l.uw))};static#t=this.\u0275cmp=a.Xpm({type:n,selectors:[["app-image-priview"]],standalone:!0,features:[a.jDz],decls:11,vars:6,consts:[[2,"height","calc(100% - 100px)"],[1,"flex","justify-between","items-center"],["mat-dialog-title","",1,"font-bold","leading-5","text-3xl"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[1,"w-full","flex","items-center","justify-center"],["alt","",1,"object-fill","w-full",3,"src"]],template:function(p,P){1&p&&(a.TgZ(0,"div",0)(1,"div",1),a._UZ(2,"p",2),a.TgZ(3,"button",3)(4,"mat-icon",4),a._uU(5,"close"),a.qZA()()(),a.TgZ(6,"mat-dialog-content")(7,"div",5),a._UZ(8,"img",6),a.ALo(9,"async"),a.ALo(10,"fileFetch"),a.qZA()()()),2&p&&(a.xp6(8),a.Q6J("src",a.lcZ(9,1,a.xi3(10,3,P.fileName,"driver")),a.LSH))},dependencies:[u,_,o.Ov,l.Is,l.ZT,l.uh,l.xY,i.Ps,i.Hw]})}return n})()},1983:(E,d,e)=>{e.d(d,{o:()=>l});var o=e(2223);let l=(()=>{class i{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(c){return new(c||i)};static#t=this.\u0275cmp=o.Xpm({type:i,selectors:[["app-no-data-placeholder"]],standalone:!0,features:[o.jDz],decls:1,vars:0,consts:[[1,"container"]],template:function(c,m){1&c&&o._UZ(0,"div",0)},styles:[".container{height:calc(100% - 100px);width:100%;display:flex;align-items:center;justify-content:center;background-color:#fff!important;background:url(no-data.ff895be600a8b02c.avif) no-repeat center;background-position:center;background-size:contain}.text{font-weight:400;font-size:19px;line-height:17px;text-align:center;color:#b4bcc9}\n"],encapsulation:2})}return i})()},6266:(E,d,e)=>{e.d(d,{G:()=>i});var o=e(7579),l=e(2223);let i=(()=>{class a{constructor(){this._unsubscribeAll=new o.x}ngOnDestroy(){this._unsubscribeAll.complete()}static#e=this.\u0275fac=function(m){return new(m||a)};static#t=this.\u0275cmp=l.Xpm({type:a,selectors:[["app-unsubscribe-able"]],decls:0,vars:0,template:function(m,s){},encapsulation:2})}return a})()},1951:(E,d,e)=>{e.d(d,{E:()=>o});class o{constructor(){this.lowercaseLetters="abcdefghijklmnopqrstuvwxyz",this.uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ",this.digits="0123456789",this.specialCharacters="$@$!%*?&",this.allCharacters=this.lowercaseLetters+this.uppercaseLetters+this.digits+this.specialCharacters,this.getRandomCharacter=i=>i[Math.floor(Math.random()*i.length)],this.generateRandomPassword=()=>[this.getRandomCharacter(this.lowercaseLetters),this.getRandomCharacter(this.uppercaseLetters),this.getRandomCharacter(this.digits),this.getRandomCharacter(this.specialCharacters),...Array.from({length:Math.floor(5*Math.random())+1},()=>this.getRandomCharacter(this.allCharacters))].join("")}}},2621:(E,d,e)=>{e.d(d,{K:()=>a});var o=e(9502),l=e(2223),i=e(3144);let a=(()=>{class u{constructor(m){this.http=m}getTransportTypes(){return this.http.get(o.O.references+"/references/transport-types/all")}getTransportKinds(){return this.http.get(o.O.references+"/references/transport-kinds/all")}getCargoTypes(){return this.http.get(o.O.references+"/references/cargo-type-groups/all")}getCurrencies(){return this.http.get(o.O.references+"/references/currencies/all")}getPackages(){return this.http.get(o.O.references+"/references/cargo-packages/all")}getCargoLoadingMethod(){return this.http.get(o.O.references+"/references/cargo-loading-method/all")}getSubscription(){return this.http.get(o.O.references+"/references/subscriptions/all")}static#e=this.\u0275fac=function(s){return new(s||u)(l.LFG(i.eN))};static#t=this.\u0275prov=l.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()}}]);