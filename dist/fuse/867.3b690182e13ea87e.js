"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[867],{4867:(z,v,c)=>{c.d(v,{Fk:()=>B,U0:()=>f,VQ:()=>g});var i=c(2223),n=c(1217),k=c(706),s=c(1692),y=c(418),R=c(9401),x=c(4755);const M=["input"],D=["*"];let h=0;class b{constructor(m,e){this.source=m,this.value=e}}const I={provide:R.JU,useExisting:(0,i.Gpc)(()=>g),multi:!0},p=new i.OlP("MatRadioGroup"),C=new i.OlP("mat-radio-default-options",{providedIn:"root",factory:function E(){return{color:"accent"}}});let G=(()=>{class r{get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition="before"===e?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,s.Ig)(e),this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=(0,s.Ig)(e),this._markRadiosForCheck()}constructor(e){this._changeDetector=e,this._value=null,this._name="mat-radio-group-"+h++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new i.vpe}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(o=>{o.checked=this.value===o.value,o.checked&&(this._selected=o)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new b(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static#e=this.\u0275fac=function(o){return new(o||r)(i.Y36(i.sBO))};static#i=this.\u0275dir=i.lG2({type:r,inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required"},outputs:{change:"change"}})}return r})();class O{constructor(m){this._elementRef=m}}const T=(0,n.Kr)((0,n.sb)(O));let A=(()=>{class r extends T{get checked(){return this._checked}set checked(e){const o=(0,s.Ig)(e);this._checked!==o&&(this._checked=o,o&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!o&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),o&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(e){this._setDisabled((0,s.Ig)(e))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=(0,s.Ig)(e)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return`${this.id||this._uniqueId}-input`}constructor(e,o,d,t,a,u,_,l){super(o),this._changeDetector=d,this._focusMonitor=t,this._radioDispatcher=a,this._providerOverride=_,this._uniqueId="mat-radio-"+ ++h,this.id=this._uniqueId,this.change=new i.vpe,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=e,this._noopAnimations="NoopAnimations"===u,l&&(this.tabIndex=(0,s.su)(l,0))}focus(e,o){o?this._focusMonitor.focusVia(this._inputElement,o,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,o)=>{e!==this.id&&o===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new b(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){const o=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),o&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),this.disabled||this._inputElement.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_updateTabIndex(){const e=this.radioGroup;let o;if(o=e&&e.selected&&!this.disabled?e.selected===this?this.tabIndex:-1:this.tabIndex,o!==this._previousTabIndex){const d=this._inputElement?.nativeElement;d&&(d.setAttribute("tabindex",o+""),this._previousTabIndex=o)}}static#e=this.\u0275fac=function(o){i.$Z()};static#i=this.\u0275dir=i.lG2({type:r,viewQuery:function(o,d){if(1&o&&i.Gf(M,5),2&o){let t;i.iGM(t=i.CRH())&&(d._inputElement=t.first)}},inputs:{id:"id",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"},features:[i.qOj]})}return r})(),g=(()=>{class r extends G{static#e=this.\u0275fac=function(){let e;return function(d){return(e||(e=i.n5z(r)))(d||r)}}();static#i=this.\u0275dir=i.lG2({type:r,selectors:[["mat-radio-group"]],contentQueries:function(o,d,t){if(1&o&&i.Suo(t,f,5),2&o){let a;i.iGM(a=i.CRH())&&(d._radios=a)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],exportAs:["matRadioGroup"],features:[i._Bn([I,{provide:p,useExisting:r}]),i.qOj]})}return r})(),f=(()=>{class r extends A{constructor(e,o,d,t,a,u,_,l){super(e,o,d,t,a,u,_,l)}static#e=this.\u0275fac=function(o){return new(o||r)(i.Y36(p,8),i.Y36(i.SBq),i.Y36(i.sBO),i.Y36(k.tE),i.Y36(y.A8),i.Y36(i.QbO,8),i.Y36(C,8),i.$8M("tabindex"))};static#i=this.\u0275cmp=i.Xpm({type:r,selectors:[["mat-radio-button"]],hostAttrs:[1,"mat-mdc-radio-button"],hostVars:15,hostBindings:function(o,d){1&o&&i.NdJ("focus",function(){return d._inputElement.nativeElement.focus()}),2&o&&(i.uIk("id",d.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),i.ekj("mat-primary","primary"===d.color)("mat-accent","accent"===d.color)("mat-warn","warn"===d.color)("mat-mdc-radio-checked",d.checked)("_mat-animation-noopable",d._noopAnimations))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matRadioButton"],features:[i.qOj],ngContentSelectors:D,decls:13,vars:17,consts:[[1,"mdc-form-field"],["formField",""],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target",3,"click"],["type","radio",1,"mdc-radio__native-control",3,"id","checked","disabled","required","change"],["input",""],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","",1,"mat-radio-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(o,d){if(1&o&&(i.F$t(),i.TgZ(0,"div",0,1)(2,"div",2)(3,"div",3),i.NdJ("click",function(a){return d._onTouchTargetClick(a)}),i.qZA(),i.TgZ(4,"input",4,5),i.NdJ("change",function(a){return d._onInputInteraction(a)}),i.qZA(),i.TgZ(6,"div",6),i._UZ(7,"div",7)(8,"div",8),i.qZA(),i.TgZ(9,"div",9),i._UZ(10,"div",10),i.qZA()(),i.TgZ(11,"label",11),i.Hsn(12),i.qZA()()),2&o){const t=i.MAs(1);i.ekj("mdc-form-field--align-end","before"==d.labelPosition),i.xp6(2),i.ekj("mdc-radio--disabled",d.disabled),i.xp6(2),i.Q6J("id",d.inputId)("checked",d.checked)("disabled",d.disabled)("required",d.required),i.uIk("name",d.name)("value",d.value)("aria-label",d.ariaLabel)("aria-labelledby",d.ariaLabelledby)("aria-describedby",d.ariaDescribedby),i.xp6(5),i.Q6J("matRippleTrigger",t)("matRippleDisabled",d._isRippleDisabled())("matRippleCentered",!0),i.xp6(2),i.Q6J("for",d.inputId)}},dependencies:[n.wG],styles:['.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio[hidden]{display:none}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mat-mdc-radio-button{--mdc-radio-disabled-selected-icon-opacity:0.38;--mdc-radio-disabled-unselected-icon-opacity:0.38;--mdc-radio-state-layer-size:40px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{padding:calc((var(--mdc-radio-state-layer-size) - 20px) / 2)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-selected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{top:calc(-1 * (var(--mdc-radio-state-layer-size) - 20px) / 2);left:calc(-1 * (var(--mdc-radio-state-layer-size) - 20px) / 2);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control{top:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);right:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);left:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, black)}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}[dir=rtl] .mat-mdc-radio-touch-target{left:0;right:50%;transform:translate(50%, -50%)}'],encapsulation:2,changeDetection:0})}return r})(),B=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#i=this.\u0275mod=i.oAB({type:r});static#o=this.\u0275inj=i.cJS({imports:[n.BQ,x.ez,n.si,n.BQ]})}return r})()}}]);