"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[871],{9502:(E,m,o)=>{o.d(m,{O:()=>s});const s={production:!1,apiUrl:"https://test-api.tirgo.io/api/v2",adminUrl:"https://test-api.tirgo.io/api/v2",references:"https://test-api.tirgo.io/api/v2",merchantUrl:"https://test-merchant.tirgo.io/api/v2",orderApiUrl:"https://test-api.tirgo.io/api/v2"}},8501:(E,m,o)=>{o.d(m,{y:()=>d});var s=o(2689),u=o(3144),h=o(2223),v=o(8615);let d=(()=>{class p{constructor(n){this._apiService=n}get(n){let l=new u.LE;return l=l.append("id",n),this._apiService.get("/users/clients/client-by",l)}getAll(n){return this._apiService.get("/users/clients/all-clients",(0,s.$)(n))}getNonActive(n){return this._apiService.get("/users/clients/non-active-clients",(0,s.$)(n))}getActive(n){return this._apiService.get("/users/clients/active-clients",(0,s.$)(n))}create(n){return this._apiService.post("/users/clients/register",n)}update(n){return this._apiService.put("/users/clients",n)}block(n,l){let f=new u.LE;return f=f.append("id",n),this._apiService.patch("/users/clients/block-client",l,f)}active(n){let l=new u.LE;return l=l.append("id",n),this._apiService.patch("/users/clients/unblock-client",{},l)}delete(n){let l=new u.LE;return l=l.append("id",n),this._apiService.delete("/users/clients/",l)}static#t=this.\u0275fac=function(l){return new(l||p)(h.LFG(v.s))};static#e=this.\u0275prov=h.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},2334:(E,m,o)=>{o.d(m,{T:()=>d});var s=o(9502),u=o(4004),h=o(2223),v=o(3144);let d=(()=>{class p{constructor(n){this.http=n}findCity(n){const l=s.O.apiUrl+"/cargo/find-city",f=JSON.stringify({query:n});return this.http.post(l,f).pipe((0,u.U)(O=>O.success?O.data.suggestions:[]))}static#t=this.\u0275fac=function(l){return new(l||p)(h.LFG(v.eN))};static#e=this.\u0275prov=h.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},8995:(E,m,o)=>{o.d(m,{Bb:()=>z});var s=o(2223),u=o(1217),h=o(4755),v=o(8915),d=o(5441);o(1692),o(2966),o(1591),o(727),o(7579),o(9770),o(6451),o(9646),o(4968),o(2840),o(8023),o(9401),o(9114),o(8675),o(3900),o(5698),o(9300),o(4004),o(8505),o(1005),o(8930);const j={provide:new s.OlP("mat-autocomplete-scroll-strategy"),deps:[d.aV],useFactory:function V(a){return()=>a.scrollStrategies.reposition()}};let z=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275mod=s.oAB({type:a});static#i=this.\u0275inj=s.cJS({providers:[j],imports:[d.U8,u.Ng,u.BQ,h.ez,v.ZD,u.Ng,u.BQ]})}return a})()}}]);