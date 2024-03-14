"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[592],{3537:(f,p,t)=>{t.d(p,{R:()=>W});var s=t(4755),_=t(877),i=t(1728),l=t(430),o=t(5707),c=t(6702),u=t(2611),n=t(3627),r=t(9609),a=t(9114),d=t(7406),m=t(9401),v=t(6286),M=t(787),L=t(3231),T=t(8280),C=t(4867),e=t(2223),A=t(3648),I=t(6133);function U(E,O){1&E&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&E&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"is_empty")," "))}const R=function(E){return{"is-invalid":E}},B=function(E,O){return{"fuse-mat-button text-white":E,"fuse-mat-button dark":O}};let W=(()=>{class E{constructor(P,g,h,D){this.data=P,this._toaster=g,this._driverService=h,this._dialog=D,this.form=new m.cw({id:new m.NI(""),block_reason:new m.NI("",[m.kI.required])}),this.data&&this.form.patchValue({id:this.data})}get f(){return this.form.controls}submit(){this._driverService.block(this.form.get("id").value,this.form.get("block_reason").value).subscribe(P=>{P.success?(this._dialog.closeAll(),this.form.reset(),this._toaster.success("\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d")):this._toaster.error("\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d")})}static#e=this.\u0275fac=function(g){return new(g||E)(e.Y36(v.WI),e.Y36(A._W),e.Y36(I.P),e.Y36(v.uw))};static#t=this.\u0275cmp=e.Xpm({type:E,selectors:[["app-block-driver"]],standalone:!0,features:[e.jDz],decls:24,vars:24,consts:[[1,"flex","justify-between","items-center"],["mat-dialog-title","",1,"font-bold","text-2xl","uppercase"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[3,"formGroup"],[1,"p-3"],["color","accent",1,"w-full"],["matInput","","formControlName","block_reason","rows","4",3,"ngClass"],[4,"ngIf"],[1,"flex"],[1,"ml-auto","p-4"],["mat-flat-button","","mat-dialog-close","","tabindex","-1",1,"fuse-mat-button",3,"color"],["mat-flat-button","",3,"ngClass","color","disabled","click"]],template:function(g,h){1&g&&(e.TgZ(0,"div",0)(1,"p",1),e._uU(2),e.ALo(3,"transloco"),e.qZA(),e.TgZ(4,"button",2)(5,"mat-icon",3),e._uU(6,"close"),e.qZA()()(),e.TgZ(7,"mat-dialog-content")(8,"form",4)(9,"div",5)(10,"mat-form-field",6)(11,"mat-label"),e._uU(12),e.ALo(13,"transloco"),e.qZA(),e._UZ(14,"textarea",7),e.YNc(15,U,3,3,"mat-error",8),e.qZA()()()(),e.TgZ(16,"mat-dialog-actions",9)(17,"div",10)(18,"button",11),e._uU(19),e.ALo(20,"transloco"),e.qZA(),e.TgZ(21,"button",12),e.NdJ("click",function(){return h.submit()}),e._uU(22),e.ALo(23,"transloco"),e.qZA()()()),2&g&&(e.xp6(2),e.Oqu(e.lcZ(3,11,"block")),e.xp6(6),e.Q6J("formGroup",h.form),e.xp6(4),e.Oqu(e.lcZ(13,13,"block_reason")),e.xp6(2),e.Q6J("ngClass",e.VKq(19,R,null==h.f.block_reason?null:h.f.block_reason.errors)),e.xp6(1),e.Q6J("ngIf",null==h.f.block_reason.errors?null:h.f.block_reason.errors.required),e.xp6(3),e.Q6J("color","warn"),e.xp6(1),e.hij(" ",e.lcZ(20,15,"cancel"),""),e.xp6(2),e.Q6J("ngClass",e.WLB(21,B,h.form.invalid||h.form.pristine,!h.form.invalid&&!h.form.pristine))("color","primary")("disabled",h.form.invalid||h.form.pristine),e.xp6(1),e.hij(" ",e.lcZ(23,17,"save")," "))},dependencies:[o.y4,o.Ot,s.mk,L.Co,C.Fk,T.FA,r.c,r.Nt,a.KE,a.hX,a.TO,l.Ps,l.Hw,M.LD,i.ot,i.lW,i.RK,m.UX,m._Y,m.Fj,m.JJ,m.JL,m.sg,m.u,v.Is,v.ZT,v.uh,v.xY,v.H8,m.u5,s.O5,n.p0,a.lN,u.JX,c.TU,d.Tx,_.rP],encapsulation:2,changeDetection:0})}return E})()},6133:(f,p,t)=>{t.d(p,{P:()=>c});var s=t(2689),_=t(3144),i=t(2223),l=t(8615),o=t(8236);let c=(()=>{class u{constructor(r,a){this._apiService=r,this._authService=a}get(r){let a=new _.LE,d=this._authService.getDecodedAccessToken().userId;return a=a.append("id",r),a=a.append("userId",d),this._apiService.get("/users/drivers/driver-by",a)}getAll(r){return this._apiService.get("/users/drivers/all-drivers",(0,s.$)(r))}create(r){return r.phoneNumbers=[r.phoneNumbers],this._apiService.post("/users/drivers/register",r)}createTransport(r){return this._apiService.post("/users/driver/transport",r)}updateTransport(r){return this._apiService.put("/users/driver/transport",r)}updateTransportDriver(r){return this._apiService.post("/users/driver/transport/to-verification",r)}getTransportWithDriver(r,a){let d=new _.LE;return d=d.append("driverId",r),d=d.append("transportId",a),this._apiService.get("/users/driver/transport",d)}update(r){return r.phoneNumbers=[r.phoneNumbers],this._apiService.put("/users/drivers/",r)}block(r,a){let d=new _.LE;return d=d.append("id",r),this._apiService.patch("/users/drivers/block-driver",a,d)}active(r){let a=new _.LE;return a=a.append("id",r),this._apiService.patch("/users/drivers/unblock-driver",{},a)}delete(r){let a=new _.LE;return a=a.append("id",r),this._apiService.delete("/users/drivers",a)}static#e=this.\u0275fac=function(a){return new(a||u)(i.LFG(l.s),i.LFG(o.e))};static#t=this.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},7609:(f,p,t)=>{t.d(p,{G:()=>o});var s=t(2689),_=t(3144),i=t(2223),l=t(8615);let o=(()=>{class c{constructor(n){this._apiService=n}get(n){return this._apiService.get(`/references/cargo-type-groups/${n}`)}getAll(n){return this._apiService.get("/references/cargo-type-groups/all",(0,s.$)(n))}create(n){return this._apiService.post("/references/cargo-type-groups",n)}update(n){return this._apiService.put("/references/cargo-type-groups",n)}delete(n){let r=new _.LE;return r=r.append("id",n),this._apiService.delete("/references/cargo-type-groups",r)}static#e=this.\u0275fac=function(r){return new(r||c)(i.LFG(l.s))};static#t=this.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},5292:(f,p,t)=>{t.d(p,{i:()=>o});var s=t(2689),_=t(3144),i=t(2223),l=t(8615);let o=(()=>{class c{constructor(n){this._apiService=n}get(n){return this._apiService.get(`/references/currencies/${n}`)}getAll(n){return this._apiService.get("/references/currencies/all",(0,s.$)(n))}create(n){return this._apiService.post("/references/currencies",n)}update(n){return this._apiService.put("/references/currencies",n)}delete(n){let r=new _.LE;return r=r.append("id",n),this._apiService.delete("/references/currencies",r)}static#e=this.\u0275fac=function(r){return new(r||c)(i.LFG(l.s))};static#t=this.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},8169:(f,p,t)=>{t.d(p,{N:()=>o});var s=t(2689),_=t(3144),i=t(2223),l=t(8615);let o=(()=>{class c{constructor(n){this._apiService=n}get(n){return this._apiService.get(`/references/roles/${n}`)}getAll(n){return this._apiService.get("/references/roles/all",(0,s.$)(n))}create(n){return this._apiService.post("/references/roles",n)}update(n){return this._apiService.put("/references/roles",n)}delete(n){let r=new _.LE;return r=r.append("id",n),this._apiService.delete("/references/roles",r)}static#e=this.\u0275fac=function(r){return new(r||c)(i.LFG(l.s))};static#t=this.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},4027:(f,p,t)=>{t.d(p,{F:()=>o});var s=t(2689),_=t(3144),i=t(2223),l=t(8615);let o=(()=>{class c{constructor(n){this._apiService=n}get(n){return this._apiService.get(`/references/subscriptions/${n}`)}getAll(n){return this._apiService.get("/references/subscriptions/all",(0,s.$)(n))}create(n){return this._apiService.post("/references/subscriptions",n)}update(n){return this._apiService.put("/references/subscriptions",n)}delete(n){let r=new _.LE;return r=r.append("id",n),this._apiService.delete("/references/subscriptions",r)}static#e=this.\u0275fac=function(r){return new(r||c)(i.LFG(l.s))};static#t=this.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},1818:(f,p,t)=>{t.d(p,{r:()=>W});var s=t(4755),_=t(877),i=t(1728),l=t(430),o=t(5707),c=t(6702),u=t(2611),n=t(3627),r=t(9609),a=t(9114),d=t(7406),m=t(9401),v=t(6286),M=t(787),L=t(3231),T=t(8280),C=t(4867),e=t(2223),A=t(3648),I=t(8244);function U(E,O){1&E&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"transloco"),e.qZA()),2&E&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"is_empty")," "))}const R=function(E){return{"is-invalid":E}},B=function(E,O){return{"fuse-mat-button text-white":E,"fuse-mat-button dark":O}};let W=(()=>{class E{constructor(P,g,h,D){this.data=P,this._toaster=g,this._merChantService=h,this._dialog=D,this.form=new m.cw({id:new m.NI(""),block_reason:new m.NI("",[m.kI.required])}),this.data&&this.form.patchValue({id:this.data})}get f(){return this.form.controls}submit(){this._merChantService.block(this.form.get("id").value,this.form.get("block_reason").value).subscribe(P=>{P.success?(this._dialog.closeAll(),this.form.reset(),this._toaster.success("\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d")):this._toaster.error("\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d")})}static#e=this.\u0275fac=function(g){return new(g||E)(e.Y36(v.WI),e.Y36(A._W),e.Y36(I.c),e.Y36(v.uw))};static#t=this.\u0275cmp=e.Xpm({type:E,selectors:[["app-block-merchant"]],standalone:!0,features:[e.jDz],decls:21,vars:21,consts:[[1,"flex","justify-between","items-center"],["mat-dialog-title","",1,"font-bold","text-2xl","uppercase"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[3,"formGroup"],[1,"p-3"],["color","accent",1,"w-full"],["matInput","","formControlName","block_reason","rows","4",3,"ngClass"],[4,"ngIf"],[1,"flex"],[1,"ml-auto","p-4"],["mat-flat-button","","mat-dialog-close","","tabindex","-1",1,"fuse-mat-button",3,"color"],["mat-flat-button","",3,"ngClass","color","disabled","click"]],template:function(g,h){1&g&&(e.TgZ(0,"div",0)(1,"p",1),e._uU(2),e.ALo(3,"transloco"),e.qZA(),e.TgZ(4,"button",2)(5,"mat-icon",3),e._uU(6,"close"),e.qZA()()(),e.TgZ(7,"mat-dialog-content")(8,"form",4)(9,"div",5)(10,"mat-form-field",6),e._UZ(11,"textarea",7),e.YNc(12,U,3,3,"mat-error",8),e.qZA()()()(),e.TgZ(13,"mat-dialog-actions",9)(14,"div",10)(15,"button",11),e._uU(16),e.ALo(17,"transloco"),e.qZA(),e.TgZ(18,"button",12),e.NdJ("click",function(){return h.submit()}),e._uU(19),e.ALo(20,"transloco"),e.qZA()()()),2&g&&(e.xp6(2),e.Oqu(e.lcZ(3,10,"block")),e.xp6(6),e.Q6J("formGroup",h.form),e.xp6(3),e.Q6J("ngClass",e.VKq(16,R,null==h.f.block_reason?null:h.f.block_reason.errors)),e.xp6(1),e.Q6J("ngIf",null==h.f.block_reason.errors?null:h.f.block_reason.errors.required),e.xp6(3),e.Q6J("color","warn"),e.xp6(1),e.hij(" ",e.lcZ(17,12,"cancel"),""),e.xp6(2),e.Q6J("ngClass",e.WLB(18,B,h.form.invalid||h.form.pristine,!h.form.invalid&&!h.form.pristine))("color","primary")("disabled",h.form.invalid||h.form.pristine),e.xp6(1),e.hij(" ",e.lcZ(20,14,"save")," "))},dependencies:[o.y4,o.Ot,s.mk,L.Co,C.Fk,T.FA,r.c,r.Nt,a.KE,a.TO,l.Ps,l.Hw,M.LD,i.ot,i.lW,i.RK,m.UX,m._Y,m.Fj,m.JJ,m.JL,m.sg,m.u,v.Is,v.ZT,v.uh,v.xY,v.H8,m.u5,s.O5,n.p0,a.lN,u.JX,c.TU,d.Tx,_.rP],encapsulation:2,changeDetection:0})}return E})()},8244:(f,p,t)=>{t.d(p,{c:()=>c});var s=t(3144),_=t(2689),i=t(9502),l=t(2223),o=t(8615);let c=(()=>{class u{constructor(r,a){this._apiService=r,this._http=a}get(r){let a=new s.LE;return a=a.append("id",r),this._apiService.get("/users/client-merchants/client-merchant-by",a)}delete(r){let a=new s.LE;return a=a.append("id",r),this._apiService.delete("/users/client-merchants",a)}Verified(r){return this._apiService.get("/users/client-merchants/verified-client-merchants",(0,_.$)(r))}unVerified(r){return this._apiService.get("/users/client-merchants/unverified-client-merchants",(0,_.$)(r))}rejected(r){return this._apiService.get("/users/client-merchants/rejected-client-merchants",(0,_.$)(r))}verify(r){let a=new s.LE;return a=a.append("id",r),this._apiService.patch("/users/client-merchants/verify-client-merchant",{},a)}reject(r){let a=new s.LE;return a=a.append("id",r),this._apiService.patch("/users/client-merchants/reject-client-merchant",{},a)}block(r,a){let d=new s.LE;return d=d.append("id",r),this._apiService.patch("/users/client-merchants/block-client-merchant",a,d)}active(r){let a=new s.LE;return a=a.append("id",r),this._apiService.patch("/users/client-merchants/unblock-client-merchant",{},a)}updateMerchant(r){return this._apiService.put("/users/client-merchants/update-client-merchant",r)}getMerchantTransactions(r){let a=new s.LE;return a=a.append("userId",r),this._http.get(i.O.apiUrl+"/finance/transaction/admin-merchant-transactions",{params:a})}getMerchantBalanse(r){let a=new s.LE;return a=a.append("merchantId",r),this._http.get(i.O.apiUrl+"/finance/transaction/merchant-balance",{params:a})}cancelTransaction(r){let a=new s.LE;return a=a.append("id",r),this._http.patch(i.O.apiUrl+"/finance/transaction/cancel",{},{params:a})}rejectTransaction(r){let a=new s.LE;return a=a.append("id",r),this._http.patch(i.O.apiUrl+"/finance/transaction/reject",{},{params:a})}verifyTransaction(r){let a=new s.LE;return a=a.append("id",r),this._http.patch(i.O.apiUrl+"/finance/transaction/verify",{},{params:a})}static#e=this.\u0275fac=function(a){return new(a||u)(l.LFG(o.s),l.LFG(s.eN))};static#t=this.\u0275prov=l.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},943:(f,p,t)=>{t.d(p,{E:()=>u});var s=t(4755),_=t(6286),i=t(430),l=t(7361),o=t(2223),c=t(5430);let u=(()=>{class n{constructor(a,d){this.data=a,this.dialog=d,this.image="",this.keyName="",this.fileName="",this.file_url="",console.log(this.data),this.keyName=this.data.keyName,this.fileName=this.data.fileName}static#e=this.\u0275fac=function(d){return new(d||n)(o.Y36(_.WI),o.Y36(_.uw))};static#t=this.\u0275cmp=o.Xpm({type:n,selectors:[["app-image-priview"]],standalone:!0,features:[o.jDz],decls:11,vars:6,consts:[[2,"height","calc(100% - 100px)"],[1,"flex","justify-between","items-center"],["mat-dialog-title","",1,"font-bold","leading-5","text-3xl"],["mat-icon-button","","mat-dialog-close",""],["aria-label","Close dialog"],[1,"w-full","flex","items-center","justify-center"],["alt","",1,"object-fill","w-full",3,"src"]],template:function(d,m){1&d&&(o.TgZ(0,"div",0)(1,"div",1),o._UZ(2,"p",2),o.TgZ(3,"button",3)(4,"mat-icon",4),o._uU(5,"close"),o.qZA()()(),o.TgZ(6,"mat-dialog-content")(7,"div",5),o._UZ(8,"img",6),o.ALo(9,"async"),o.ALo(10,"fileFetch"),o.qZA()()()),2&d&&(o.xp6(8),o.Q6J("src",o.lcZ(9,1,o.xi3(10,3,m.fileName,m.keyName)),o.LSH))},dependencies:[l.d,c.z,s.Ov,_.Is,_.ZT,_.uh,_.xY,i.Ps,i.Hw]})}return n})()},1983:(f,p,t)=>{t.d(p,{o:()=>_});var s=t(2223);let _=(()=>{class i{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(c){return new(c||i)};static#t=this.\u0275cmp=s.Xpm({type:i,selectors:[["app-no-data-placeholder"]],standalone:!0,features:[s.jDz],decls:1,vars:0,consts:[[1,"container"]],template:function(c,u){1&c&&s._UZ(0,"div",0)},styles:[".container{height:calc(100% - 100px);width:100%;display:flex;align-items:center;justify-content:center;background-color:#fff!important;background:url(no-data.ff895be600a8b02c.avif) no-repeat center;background-position:center;background-size:contain}.text{font-weight:400;font-size:19px;line-height:17px;text-align:center;color:#b4bcc9}\n"],encapsulation:2,changeDetection:0})}return i})()},6266:(f,p,t)=>{t.d(p,{G:()=>i});var s=t(7579),_=t(2223);let i=(()=>{class l{constructor(){this._unsubscribeAll=new s.x}ngOnDestroy(){this._unsubscribeAll.complete()}static#e=this.\u0275fac=function(u){return new(u||l)};static#t=this.\u0275cmp=_.Xpm({type:l,selectors:[["app-unsubscribe-able"]],decls:0,vars:0,template:function(u,n){},encapsulation:2})}return l})()},1951:(f,p,t)=>{t.d(p,{E:()=>s});class s{constructor(){this.lowercaseLetters="abcdefghijklmnopqrstuvwxyz",this.uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ",this.digits="0123456789",this.specialCharacters="$@$!%*?&",this.allCharacters=this.lowercaseLetters+this.uppercaseLetters+this.digits+this.specialCharacters,this.getRandomCharacter=i=>i[Math.floor(Math.random()*i.length)],this.generateRandomPassword=()=>[this.getRandomCharacter(this.lowercaseLetters),this.getRandomCharacter(this.uppercaseLetters),this.getRandomCharacter(this.digits),this.getRandomCharacter(this.specialCharacters),...Array.from({length:Math.floor(5*Math.random())+1},()=>this.getRandomCharacter(this.allCharacters))].join("")}}},9158:(f,p,t)=>{function s(_){const i=new Set,l=new FormData;return _.forEach((o,c)=>{i.has(c)||(i.add(c),l.append(c,o))}),l}t.d(p,{l:()=>s})},1547:(f,p,t)=>{function s(_,i){for(const l of _.entries()){const[o]=l;i.includes(o)||_.delete(o)}return _}t.d(p,{y:()=>s})},5430:(f,p,t)=>{t.d(p,{z:()=>c});var s=t(2223),_=t(9502),i=t(4004),l=t(3144);let o=(()=>{class u{constructor(r){this.http=r}getFileUrl(r,a){return console.log(r,a),this.http.get(_.O.references+`/references/files/${r}/${a}`,{responseType:"blob"}).pipe((0,i.U)(d=>(console.log(d),URL.createObjectURL(d))))}static#e=this.\u0275fac=function(a){return new(a||u)(s.LFG(l.eN))};static#t=this.\u0275prov=s.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})(),c=(()=>{class u{constructor(r){this.fileService=r}transform(r,a){return console.log(a,r),this.fileService.getFileUrl(a,r)}static#e=this.\u0275fac=function(a){return new(a||u)(s.Y36(o,16))};static#t=this.\u0275pipe=s.Yjl({name:"fileFetch",type:u,pure:!0})}return u})()},2621:(f,p,t)=>{t.d(p,{K:()=>l});var s=t(9502),_=t(2223),i=t(3144);let l=(()=>{class o{constructor(u){this.http=u}getTransportTypes(){return this.http.get(s.O.references+"/references/transport-types/all")}getTransportKinds(){return this.http.get(s.O.references+"/references/transport-kinds/all")}getCargoTypes(){return this.http.get(s.O.references+"/references/cargo-type-groups/all")}getCurrencies(){return this.http.get(s.O.references+"/references/currencies/all")}getPackages(){return this.http.get(s.O.references+"/references/cargo-packages/all")}getCargoLoadingMethod(){return this.http.get(s.O.references+"/references/cargo-loading-method/all")}getSubscription(){return this.http.get(s.O.references+"/references/subscriptions/all")}getCities(u,n){return this.http.get(s.O.apiUrl+"/references/cities?city="+u+"&lang="+n)}static#e=this.\u0275fac=function(n){return new(n||o)(_.LFG(i.eN))};static#t=this.\u0275prov=_.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()}}]);