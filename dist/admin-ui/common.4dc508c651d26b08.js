"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[592],{3537:(v,u,e)=>{e.d(u,{R:()=>B});var _=e(4755),i=e(877),o=e(1728),c=e(430),s=e(5707),n=e(6702),p=e(2611),a=e(3627),r=e(9609),l=e(9114),h=e(7406),d=e(9401),m=e(6286),M=e(787),L=e(3231),C=e(8280),A=e(4867),t=e(2223),T=e(3648),I=e(6133);function U(f,O){1&f&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&f&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"is_empty")," "))}const R=function(f){return{"is-invalid":f}},W=function(f,O){return{"fuse-mat-button text-white":f,"fuse-mat-button dark":O}};let B=(()=>{class f{constructor(P,g,E,D){this.data=P,this._toaster=g,this._driverService=E,this._dialog=D,this.form=new d.cw({id:new d.NI(""),block_reason:new d.NI("",[d.kI.required])}),this.data&&this.form.patchValue({id:this.data})}get f(){return this.form.controls}submit(){this._driverService.block(this.form.get("id").value,this.form.get("block_reason").value).subscribe(P=>{P.success?(this._dialog.closeAll(),this.form.reset(),this._toaster.success("\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d")):this._toaster.error("\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d")})}static#e=this.\u0275fac=function(g){return new(g||f)(t.Y36(m.WI),t.Y36(T._W),t.Y36(I.P),t.Y36(m.uw))};static#t=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-block-driver"]],standalone:!0,features:[t.jDz],decls:24,vars:24,consts:[[1,"flex","justify-between","items-center"],["mat-dialog-title","",1,"font-bold","text-2xl","uppercase"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[3,"formGroup"],[1,"p-3"],["color","accent",1,"w-full"],["matInput","","formControlName","block_reason","rows","4",3,"ngClass"],[4,"ngIf"],[1,"flex"],[1,"ml-auto","p-4"],["mat-flat-button","","mat-dialog-close","","tabindex","-1",1,"fuse-mat-button",3,"color"],["mat-flat-button","",3,"ngClass","color","disabled","click"]],template:function(g,E){1&g&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2),t.ALo(3,"transloco"),t.qZA(),t.TgZ(4,"button",2)(5,"mat-icon",3),t._uU(6,"close"),t.qZA()()(),t.TgZ(7,"mat-dialog-content")(8,"form",4)(9,"div",5)(10,"mat-form-field",6)(11,"mat-label"),t._uU(12),t.ALo(13,"transloco"),t.qZA(),t._UZ(14,"textarea",7),t.YNc(15,U,3,3,"mat-error",8),t.qZA()()()(),t.TgZ(16,"mat-dialog-actions",9)(17,"div",10)(18,"button",11),t._uU(19),t.ALo(20,"transloco"),t.qZA(),t.TgZ(21,"button",12),t.NdJ("click",function(){return E.submit()}),t._uU(22),t.ALo(23,"transloco"),t.qZA()()()),2&g&&(t.xp6(2),t.Oqu(t.lcZ(3,11,"block")),t.xp6(6),t.Q6J("formGroup",E.form),t.xp6(4),t.Oqu(t.lcZ(13,13,"block_reason")),t.xp6(2),t.Q6J("ngClass",t.VKq(19,R,null==E.f.block_reason?null:E.f.block_reason.errors)),t.xp6(1),t.Q6J("ngIf",null==E.f.block_reason.errors?null:E.f.block_reason.errors.required),t.xp6(3),t.Q6J("color","warn"),t.xp6(1),t.hij(" ",t.lcZ(20,15,"cancel"),""),t.xp6(2),t.Q6J("ngClass",t.WLB(21,W,E.form.invalid||E.form.pristine,!E.form.invalid&&!E.form.pristine))("color","primary")("disabled",E.form.invalid||E.form.pristine),t.xp6(1),t.hij(" ",t.lcZ(23,17,"save")," "))},dependencies:[s.y4,s.Ot,_.mk,L.Co,A.Fk,C.FA,r.c,r.Nt,l.KE,l.hX,l.TO,c.Ps,c.Hw,M.LD,o.ot,o.lW,o.RK,d.UX,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,m.Is,m.ZT,m.uh,m.xY,m.H8,d.u5,_.O5,a.p0,l.lN,p.JX,n.TU,h.Tx,i.rP],encapsulation:2,changeDetection:0})}return f})()},6133:(v,u,e)=>{e.d(u,{P:()=>n});var _=e(2689),i=e(3144),o=e(2223),c=e(8615),s=e(8236);let n=(()=>{class p{constructor(r,l){this._apiService=r,this._authService=l}get(r){let l=new i.LE,h=this._authService.getDecodedAccessToken().userId;return l=l.append("id",r),l=l.append("userId",h),this._apiService.get("/users/drivers/driver-by",l)}getAll(r){return this._apiService.get("/users/drivers/all-drivers",(0,_.$)(r))}create(r){return r.phoneNumbers=[r.phoneNumbers],this._apiService.post("/users/drivers/register",r)}createTransport(r){return this._apiService.post("/users/driver/transport",r)}updateTransport(r){return this._apiService.put("/users/driver/transport",r)}updateTransportDriver(r){return this._apiService.post("/users/driver/transport/to-verification",r)}getTransportWithDriver(r,l){let h=new i.LE;return h=h.append("driverId",r),h=h.append("transportId",l),this._apiService.get("/users/driver/transport",h)}update(r){return r.phoneNumbers=[r.phoneNumbers],this._apiService.put("/users/drivers/",r)}block(r,l){let h=new i.LE;return h=h.append("id",r),this._apiService.patch("/users/drivers/block-driver",l,h)}active(r){let l=new i.LE;return l=l.append("id",r),this._apiService.patch("/users/drivers/unblock-driver",{},l)}delete(r){let l=new i.LE;return l=l.append("id",r),this._apiService.delete("/users/drivers",l)}static#e=this.\u0275fac=function(l){return new(l||p)(o.LFG(c.s),o.LFG(s.e))};static#t=this.\u0275prov=o.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},7609:(v,u,e)=>{e.d(u,{G:()=>s});var _=e(2689),i=e(3144),o=e(2223),c=e(8615);let s=(()=>{class n{constructor(a){this._apiService=a}get(a){return this._apiService.get(`/references/cargo-type-groups/${a}`)}getAll(a){return this._apiService.get("/references/cargo-type-groups/all",(0,_.$)(a))}create(a){return this._apiService.post("/references/cargo-type-groups",a)}update(a){return this._apiService.put("/references/cargo-type-groups",a)}delete(a){let r=new i.LE;return r=r.append("id",a),this._apiService.delete("/references/cargo-type-groups",r)}static#e=this.\u0275fac=function(r){return new(r||n)(o.LFG(c.s))};static#t=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},8169:(v,u,e)=>{e.d(u,{N:()=>s});var _=e(2689),i=e(3144),o=e(2223),c=e(8615);let s=(()=>{class n{constructor(a){this._apiService=a}get(a){return this._apiService.get(`/references/roles/${a}`)}getAll(a){return this._apiService.get("/references/roles/all",(0,_.$)(a))}create(a){return this._apiService.post("/references/roles",a)}update(a){return this._apiService.put("/references/roles",a)}delete(a){let r=new i.LE;return r=r.append("id",a),this._apiService.delete("/references/roles",r)}static#e=this.\u0275fac=function(r){return new(r||n)(o.LFG(c.s))};static#t=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},4027:(v,u,e)=>{e.d(u,{F:()=>s});var _=e(2689),i=e(3144),o=e(2223),c=e(8615);let s=(()=>{class n{constructor(a){this._apiService=a}get(a){return this._apiService.get(`/references/subscriptions/${a}`)}getAll(a){return this._apiService.get("/references/subscriptions/all",(0,_.$)(a))}create(a){return this._apiService.post("/references/subscriptions",a)}update(a){return this._apiService.put("/references/subscriptions",a)}delete(a){let r=new i.LE;return r=r.append("id",a),this._apiService.delete("/references/subscriptions",r)}static#e=this.\u0275fac=function(r){return new(r||n)(o.LFG(c.s))};static#t=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},943:(v,u,e)=>{e.d(u,{E:()=>a});var _=e(4755),i=e(6286),o=e(430),c=e(7361),s=e(2223),n=e(3817),p=e(4973);let a=(()=>{class r{constructor(h,d,m){this.data=h,this._fileUrlService=d,this.dialog=m,this.image="",this.keyName="",this.fileName="",this.file_url="",this.keyName=this.data.keyName,this.fileName=this.data.fileName}static#e=this.\u0275fac=function(d){return new(d||r)(s.Y36(i.WI),s.Y36(n.W),s.Y36(i.uw))};static#t=this.\u0275cmp=s.Xpm({type:r,selectors:[["app-image-priview"]],standalone:!0,features:[s.jDz],decls:11,vars:6,consts:[[2,"height","calc(100% - 100px)"],[1,"flex","justify-between","items-center"],["mat-dialog-title","",1,"font-bold","leading-5","text-3xl"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[1,"w-full","flex","items-center","justify-center"],["alt","",1,"object-fill","w-full",3,"src"]],template:function(d,m){1&d&&(s.TgZ(0,"div",0)(1,"div",1),s._UZ(2,"p",2),s.TgZ(3,"button",3)(4,"mat-icon",4),s._uU(5,"close"),s.qZA()()(),s.TgZ(6,"mat-dialog-content")(7,"div",5),s._UZ(8,"img",6),s.ALo(9,"async"),s.ALo(10,"fileFetch"),s.qZA()()()),2&d&&(s.xp6(8),s.Q6J("src",s.lcZ(9,1,s.xi3(10,3,m.fileName,"driver")),s.LSH))},dependencies:[c.d,p.z,_.Ov,i.Is,i.ZT,i.uh,i.xY,o.Ps,o.Hw]})}return r})()},1983:(v,u,e)=>{e.d(u,{o:()=>i});var _=e(2223);let i=(()=>{class o{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275cmp=_.Xpm({type:o,selectors:[["app-no-data-placeholder"]],standalone:!0,features:[_.jDz],decls:1,vars:0,consts:[[1,"container"]],template:function(n,p){1&n&&_._UZ(0,"div",0)},styles:[".container{height:calc(100% - 100px);width:100%;display:flex;align-items:center;justify-content:center;background-color:#fff!important;background:url(no-data.ff895be600a8b02c.avif) no-repeat center;background-position:center;background-size:contain}.text{font-weight:400;font-size:19px;line-height:17px;text-align:center;color:#b4bcc9}\n"],encapsulation:2,changeDetection:0})}return o})()},6266:(v,u,e)=>{e.d(u,{G:()=>o});var _=e(7579),i=e(2223);let o=(()=>{class c{constructor(){this._unsubscribeAll=new _.x}ngOnDestroy(){this._unsubscribeAll.complete()}static#e=this.\u0275fac=function(p){return new(p||c)};static#t=this.\u0275cmp=i.Xpm({type:c,selectors:[["app-unsubscribe-able"]],decls:0,vars:0,template:function(p,a){},encapsulation:2})}return c})()},1951:(v,u,e)=>{e.d(u,{E:()=>_});class _{constructor(){this.lowercaseLetters="abcdefghijklmnopqrstuvwxyz",this.uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ",this.digits="0123456789",this.specialCharacters="$@$!%*?&",this.allCharacters=this.lowercaseLetters+this.uppercaseLetters+this.digits+this.specialCharacters,this.getRandomCharacter=o=>o[Math.floor(Math.random()*o.length)],this.generateRandomPassword=()=>[this.getRandomCharacter(this.lowercaseLetters),this.getRandomCharacter(this.uppercaseLetters),this.getRandomCharacter(this.digits),this.getRandomCharacter(this.specialCharacters),...Array.from({length:Math.floor(5*Math.random())+1},()=>this.getRandomCharacter(this.allCharacters))].join("")}}},1547:(v,u,e)=>{function _(i,o){for(const c of i.entries()){const[s]=c;o.includes(s)||i.delete(s)}return i}e.d(u,{y:()=>_})},4973:(v,u,e)=>{e.d(u,{z:()=>o});var _=e(2223),i=e(3817);let o=(()=>{class c{constructor(n){this.fileService=n}transform(n,p){return console.log(p,n),this.fileService.getFileUrl(p,n)}static#e=this.\u0275fac=function(p){return new(p||c)(_.Y36(i.W,16))};static#t=this.\u0275pipe=_.Yjl({name:"fileFetch",type:c,pure:!0})}return c})()},7361:(v,u,e)=>{e.d(u,{d:()=>o});var _=e(4755),i=e(2223);let o=(()=>{class c{static#e=this.\u0275fac=function(p){return new(p||c)};static#t=this.\u0275mod=i.oAB({type:c});static#r=this.\u0275inj=i.cJS({imports:[_.ez]})}return c})()},3817:(v,u,e)=>{e.d(u,{W:()=>s});var _=e(9502),i=e(4004),o=e(2223),c=e(3144);let s=(()=>{class n{constructor(a){this.http=a}getFileUrl(a,r){return console.log(a,r),this.http.get(_.O.references+`/references/files/${a}/${r}`,{responseType:"blob"}).pipe((0,i.U)(l=>(console.log(l),URL.createObjectURL(l))))}static#e=this.\u0275fac=function(r){return new(r||n)(o.LFG(c.eN))};static#t=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},2621:(v,u,e)=>{e.d(u,{K:()=>c});var _=e(9502),i=e(2223),o=e(3144);let c=(()=>{class s{constructor(p){this.http=p}getTransportTypes(){return this.http.get(_.O.references+"/references/transport-types/all")}getTransportKinds(){return this.http.get(_.O.references+"/references/transport-kinds/all")}getCargoTypes(){return this.http.get(_.O.references+"/references/cargo-type-groups/all")}getCurrencies(){return this.http.get(_.O.references+"/references/currencies/all")}getPackages(){return this.http.get(_.O.references+"/references/cargo-packages/all")}getCargoLoadingMethod(){return this.http.get(_.O.references+"/references/cargo-loading-method/all")}getSubscription(){return this.http.get(_.O.references+"/references/subscriptions/all")}static#e=this.\u0275fac=function(a){return new(a||s)(i.LFG(o.eN))};static#t=this.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);