"use strict";(self.webpackChunkadmin_ui=self.webpackChunkadmin_ui||[]).push([[609],{8657:(P,y,o)=>{o.d(y,{IC:()=>x,Ky:()=>C,Lq:()=>M});var u=o(2966),a=o(2223),d=o(1692),n=o(515),_=o(7579),c=o(4968),m=o(1769),E=o(2722),A=o(4755);const p=(0,u.i$)({passive:!0});let M=(()=>{class r{constructor(t,e){this._platform=t,this._ngZone=e,this._monitoredElements=new Map}monitor(t){if(!this._platform.isBrowser)return n.E;const e=(0,d.fI)(t),i=this._monitoredElements.get(e);if(i)return i.subject;const s=new _.x,l="cdk-text-field-autofilled",f=g=>{"cdk-text-field-autofill-start"!==g.animationName||e.classList.contains(l)?"cdk-text-field-autofill-end"===g.animationName&&e.classList.contains(l)&&(e.classList.remove(l),this._ngZone.run(()=>s.next({target:g.target,isAutofilled:!1}))):(e.classList.add(l),this._ngZone.run(()=>s.next({target:g.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{e.addEventListener("animationstart",f,p),e.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(e,{subject:s,unlisten:()=>{e.removeEventListener("animationstart",f,p)}}),s}stopMonitoring(t){const e=(0,d.fI)(t),i=this._monitoredElements.get(e);i&&(i.unlisten(),i.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}static#e=this.\u0275fac=function(e){return new(e||r)(a.LFG(u.t4),a.LFG(a.R0b))};static#t=this.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),x=(()=>{class r{get minRows(){return this._minRows}set minRows(t){this._minRows=(0,d.su)(t),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(t){this._maxRows=(0,d.su)(t),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(t){t=(0,d.Ig)(t),this._enabled!==t&&((this._enabled=t)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(t){this._cachedPlaceholderHeight=void 0,t?this._textareaElement.setAttribute("placeholder",t):this._textareaElement.removeAttribute("placeholder"),this._cacheTextareaPlaceholderHeight()}constructor(t,e,i,s){this._elementRef=t,this._platform=e,this._ngZone=i,this._destroyed=new _.x,this._enabled=!0,this._previousMinRows=-1,this._isViewInited=!1,this._handleFocusEvent=l=>{this._hasFocus="focus"===l.type},this._document=s,this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){const t=this.minRows&&this._cachedLineHeight?this.minRows*this._cachedLineHeight+"px":null;t&&(this._textareaElement.style.minHeight=t)}_setMaxHeight(){const t=this.maxRows&&this._cachedLineHeight?this.maxRows*this._cachedLineHeight+"px":null;t&&(this._textareaElement.style.maxHeight=t)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{const t=this._getWindow();(0,c.R)(t,"resize").pipe((0,m.e)(16),(0,E.R)(this._destroyed)).subscribe(()=>this.resizeToFitContent(!0)),this._textareaElement.addEventListener("focus",this._handleFocusEvent),this._textareaElement.addEventListener("blur",this._handleFocusEvent)}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._textareaElement.removeEventListener("focus",this._handleFocusEvent),this._textareaElement.removeEventListener("blur",this._handleFocusEvent),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let t=this._textareaElement.cloneNode(!1);t.rows=1,t.style.position="absolute",t.style.visibility="hidden",t.style.border="none",t.style.padding="0",t.style.height="",t.style.minHeight="",t.style.maxHeight="",t.style.overflow="hidden",this._textareaElement.parentNode.appendChild(t),this._cachedLineHeight=t.clientHeight,t.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){const t=this._textareaElement,e=t.style.marginBottom||"",i=this._platform.FIREFOX,s=i&&this._hasFocus,l=i?"cdk-textarea-autosize-measuring-firefox":"cdk-textarea-autosize-measuring";s&&(t.style.marginBottom=`${t.clientHeight}px`),t.classList.add(l);const f=t.scrollHeight-4;return t.classList.remove(l),s&&(t.style.marginBottom=e),f}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||null!=this._cachedPlaceholderHeight)return;if(!this.placeholder)return void(this._cachedPlaceholderHeight=0);const t=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=t}ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(t=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;const e=this._elementRef.nativeElement,i=e.value;if(!t&&this._minRows===this._previousMinRows&&i===this._previousValue)return;const s=this._measureScrollHeight(),l=Math.max(s,this._cachedPlaceholderHeight||0);e.style.height=`${l}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<"u"?requestAnimationFrame(()=>this._scrollToCaretPosition(e)):setTimeout(()=>this._scrollToCaretPosition(e))}),this._previousValue=i,this._previousMinRows=this._minRows}reset(){void 0!==this._initialHeight&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_scrollToCaretPosition(t){const{selectionStart:e,selectionEnd:i}=t;!this._destroyed.isStopped&&this._hasFocus&&t.setSelectionRange(e,i)}static#e=this.\u0275fac=function(e){return new(e||r)(a.Y36(a.SBq),a.Y36(u.t4),a.Y36(a.R0b),a.Y36(A.K0,8))};static#t=this.\u0275dir=a.lG2({type:r,selectors:[["textarea","cdkTextareaAutosize",""]],hostAttrs:["rows","1",1,"cdk-textarea-autosize"],hostBindings:function(e,i){1&e&&a.NdJ("input",function(){return i._noopInputHandler()})},inputs:{minRows:["cdkAutosizeMinRows","minRows"],maxRows:["cdkAutosizeMaxRows","maxRows"],enabled:["cdkTextareaAutosize","enabled"],placeholder:"placeholder"},exportAs:["cdkTextareaAutosize"]})}return r})(),C=(()=>{class r{static#e=this.\u0275fac=function(e){return new(e||r)};static#t=this.\u0275mod=a.oAB({type:r});static#i=this.\u0275inj=a.cJS({})}return r})()},9609:(P,y,o)=>{o.d(y,{Jk:()=>p,Nt:()=>C,c:()=>r});var u=o(1692),a=o(2966),d=o(8657),n=o(2223),_=o(9401),c=o(1217),m=o(9114),E=o(7579);const p=new n.OlP("MAT_INPUT_VALUE_ACCESSOR"),M=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let D=0;const x=(0,c.FD)(class{constructor(h,t,e,i){this._defaultErrorStateMatcher=h,this._parentForm=t,this._parentFormGroup=e,this.ngControl=i,this.stateChanges=new E.x}});let C=(()=>{class h extends x{get disabled(){return this._disabled}set disabled(e){this._disabled=(0,u.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(_.kI.required)??!1}set required(e){this._required=(0,u.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,a.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,u.Ig)(e)}constructor(e,i,s,l,f,g,L,b,H,T){super(g,l,f,s),this._elementRef=e,this._platform=i,this._autofillMonitor=b,this._formField=T,this._uid="mat-input-"+D++,this.focused=!1,this.stateChanges=new E.x,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(R=>(0,a.qK)().has(R)),this._iOSKeyupListener=R=>{const v=R.target;!v.value&&0===v.selectionStart&&0===v.selectionEnd&&(v.setSelectionRange(1,1),v.setSelectionRange(0,0))};const I=this._elementRef.nativeElement,O=I.nodeName.toLowerCase();this._inputValueAccessor=L||I,this._previousNativeValue=this.value,this.id=this.id,i.IOS&&H.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===O,this._isTextarea="textarea"===O,this._isInFormField=!!T,this._isNativeSelect&&(this.controlType=I.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),null!==this.ngControl.disabled&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){const e=this._getPlaceholder();if(e!==this._previousPlaceholder){const i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){M.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}static#e=this.\u0275fac=function(i){return new(i||h)(n.Y36(n.SBq),n.Y36(a.t4),n.Y36(_.a5,10),n.Y36(_.F,8),n.Y36(_.sg,8),n.Y36(c.rD),n.Y36(p,10),n.Y36(d.Lq),n.Y36(n.R0b),n.Y36(m.G_,8))};static#t=this.\u0275dir=n.lG2({type:h,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(i,s){1&i&&n.NdJ("focus",function(){return s._focusChanged(!0)})("blur",function(){return s._focusChanged(!1)})("input",function(){return s._onInput()}),2&i&&(n.Ikx("id",s.id)("disabled",s.disabled)("required",s.required),n.uIk("name",s.name||null)("readonly",s.readonly&&!s._isNativeSelect||null)("aria-invalid",s.empty&&s.required?null:s.errorState)("aria-required",s.required)("id",s.id),n.ekj("mat-input-server",s._isServer)("mat-mdc-form-field-textarea-control",s._isInFormField&&s._isTextarea)("mat-mdc-form-field-input-control",s._isInFormField)("mdc-text-field__input",s._isInFormField)("mat-mdc-native-select-inline",s._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],features:[n._Bn([{provide:m.Eo,useExisting:h}]),n.qOj,n.TTD]})}return h})(),r=(()=>{class h{static#e=this.\u0275fac=function(i){return new(i||h)};static#t=this.\u0275mod=n.oAB({type:h});static#i=this.\u0275inj=n.cJS({imports:[c.BQ,m.lN,m.lN,d.Ky,c.BQ]})}return h})()}}]);