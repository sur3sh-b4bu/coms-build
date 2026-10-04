import{a as ye}from"./chunk-OG2TH22C.js";import{a as de}from"./chunk-EZA7NPG4.js";import{v as se}from"./chunk-YMEDIDJT.js";import{a as he,b as fe}from"./chunk-ASTT3UR3.js";import{b as ce}from"./chunk-33SRCRFZ.js";import{a as xe}from"./chunk-VZPQ2Y5K.js";import{b as le}from"./chunk-A4HUQVTE.js";import{a as Ce}from"./chunk-RWFXKIQW.js";import{a as ve}from"./chunk-DMPMRP6Z.js";import{a as ue,b as be}from"./chunk-BZYYYNL7.js";import"./chunk-Y4OS5P2W.js";import{K as ie,M as ae,N as oe,O as re,R as ge,S as me,h as Y,w as te}from"./chunk-GOTS4IST.js";import"./chunk-CLVRU5UC.js";import{C as ee,H as ne,L as _e,M as pe,j as W,y as X}from"./chunk-57QLADTH.js";import{$ as g,Bb as U,Cb as Q,Cc as J,Db as b,Eb as i,Fb as t,Gb as y,Ic as K,Lc as P,Mc as z,Nb as T,Rb as p,Tb as u,Ub as $,Va as r,Vb as H,X as B,Xb as Z,Yb as L,Z as w,Zb as R,_a as V,bb as j,dc as x,fa as v,fc as d,ga as C,gc as m,hc as M,ib as S,ja as G,jb as N,na as q,oa as A,p as I,sa as O,sc as s,tc as l,wb as D,xb as h,yb as f,za as E}from"./chunk-A3OL4LEI.js";import"./chunk-4BEMF4IP.js";var Oe=["input"],Se=["formField"],Ie=["*"],F=class{source;value;constructor(c,e){this.source=c,this.value=e}};var we=new w("MatRadioGroup"),Ee=new w("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})});var De=(()=>{class n{_elementRef=g(E);_changeDetector=g(K);_focusMonitor=g(Y);_radioDispatcher=g(ce);_defaultOptions=g(Ee,{optional:!0});_ngZone=g(A);_renderer=g(j);_uniqueId=g(te).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new q;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=ie();_injector=g(G);constructor(){g(ee).load(oe);let e=g(we,{optional:!0}),o=g(new J("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,o&&(this.tabIndex=z(o,0))}focus(e,o){o?this._focusMonitor.focusVia(this._inputElement,o,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,o)=>{e!==this.id&&o===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new F(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let o=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),o&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,o;if(!e||!e.selected||this.disabled?o=this.tabIndex:o=e.selected===this?this.tabIndex:-1,o!==this._previousTabIndex){let a=this._inputElement?.nativeElement;a&&(a.setAttribute("tabindex",o+""),this._previousTabIndex=o,V(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===a&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===a&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=S({type:n,selectors:[["mat-radio-button"]],viewQuery:function(o,a){if(o&1&&Z(Oe,5)(Se,7,E),o&2){let _;L(_=R())&&(a._inputElement=_.first),L(_=R())&&(a._rippleTrigger=_.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(o,a){o&1&&p("focus",function(){return a._inputElement.nativeElement.focus()}),o&2&&(D("id",a.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),x("mat-primary",a.color==="primary")("mat-accent",a.color==="accent")("mat-warn",a.color==="warn")("mat-mdc-radio-checked",a.checked)("mat-mdc-radio-disabled",a.disabled)("mat-mdc-radio-disabled-interactive",a.disabledInteractive)("_mat-animation-noopable",a._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",P],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:z(e)],checked:[2,"checked","checked",P],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",P],required:[2,"required","required",P],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",P]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:Ie,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(o,a){o&1&&($(),i(0,"div",2,0)(2,"div",3)(3,"div",4),p("click",function(k){return a._onTouchTargetClick(k)}),t(),i(4,"input",5,1),p("change",function(k){return a._onInputInteraction(k)}),t(),i(6,"div",6),y(7,"div",7)(8,"div",8),t(),i(9,"div",9),y(10,"div",10),t()(),i(11,"label",11),H(12),t()()),o&2&&(b("labelPosition",a.labelPosition),r(2),x("mdc-radio--disabled",a.disabled),r(2),b("id",a.inputId)("checked",a.checked)("disabled",a.disabled&&!a.disabledInteractive)("required",a.required),D("name",a.name)("value",a.value)("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby)("aria-describedby",a.ariaDescribedby)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),r(5),b("matRippleTrigger",a._rippleTrigger.nativeElement)("matRippleDisabled",a._isRippleDisabled())("matRippleCentered",!0),r(2),b("for",a.inputId))},dependencies:[ae,de],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),Me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=N({type:n});static \u0275inj=B({imports:[re,De,ne]})}return n})();var Te=(n,c)=>c.id;function Le(n,c){n&1&&(i(0,"div",9),y(1,"mat-progress-spinner",10),t())}function Re(n,c){n&1&&(i(0,"span",32),d(1,"\u{1F1EE}\u{1F1F3}"),t())}function ze(n,c){n&1&&(i(0,"span",32),d(1,"\u{1F310}"),t())}function Fe(n,c){n&1&&(i(0,"span",32),d(1,"\u{1F3F3}\uFE0F"),t())}function Be(n,c){if(n&1&&(i(0,"div",37),d(1),t()),n&2){let e=u().$implicit;r(),m(e.name_ta)}}function Ge(n,c){n&1&&(i(0,"span",40)(1,"mat-icon"),d(2,"verified"),t(),d(3),s(4,"translate"),t()),n&2&&(r(3),M(" ",l(4,1,"settings.currentDefault")," "))}function qe(n,c){if(n&1){let e=T();i(0,"div",29),p("click",function(){let a=v(e).$implicit,_=u(2);return C(_.selectedDefaultId.set(a.id))}),i(1,"div",30)(2,"div",31),h(3,Re,2,0,"span",32)(4,ze,2,0,"span",32)(5,Fe,2,0,"span",32),t(),i(6,"div",33)(7,"input",34),p("change",function(){let a=v(e).$implicit,_=u(2);return C(_.selectedDefaultId.set(a.id))}),t()()(),i(8,"div",35)(9,"h4",36),d(10),t(),h(11,Be,2,1,"div",37),i(12,"div",38)(13,"span",39),d(14),t(),h(15,Ge,5,3,"span",40),t()(),i(16,"div",41)(17,"button",42),p("click",function(a){let _=v(e).$implicit,k=u(2);return a.stopPropagation(),C(k.saveDefaultLanguage(_))}),i(18,"mat-icon"),d(19,"check_circle"),t(),d(20),s(21,"translate"),s(22,"translate"),t()()()}if(n&2){let e=c.$implicit,o=u(2);x("selected",o.selectedDefaultId()===e.id)("active-default",e.is_default===1),r(3),f(e.code==="TA"||e.code==="tam"||e.code==="tamil"?3:e.code==="EN"||e.code==="eng"||e.code==="english"?4:5),r(4),b("id","lang_"+e.id)("checked",o.selectedDefaultId()===e.id),r(3),m(e.name),r(),f(e.name_ta?11:-1),r(3),m(e.code),r(),f(e.is_default===1?15:-1),r(2),b("disabled",o.saving()),r(3),M(" ",e.is_default===1?l(21,13,"settings.alreadyDefault"):l(22,15,"settings.setAsDefault")," ")}}function Ae(n,c){n&1&&y(0,"mat-progress-spinner",18)}function Ve(n,c){n&1&&(i(0,"mat-icon"),d(1,"save"),t())}function je(n,c){n&1&&(i(0,"span",26)(1,"mat-icon"),d(2,"check"),t(),d(3),s(4,"translate"),t()),n&2&&(r(3),M(" ",l(4,1,"settings.active")))}function Ne(n,c){n&1&&(i(0,"span",27),d(1),s(2,"translate"),t()),n&2&&(r(),m(l(2,1,"settings.select")))}function Ue(n,c){n&1&&(i(0,"span",26)(1,"mat-icon"),d(2,"check"),t(),d(3),s(4,"translate"),t()),n&2&&(r(3),M(" ",l(4,1,"settings.active")))}function Qe(n,c){n&1&&(i(0,"span",27),d(1),s(2,"translate"),t()),n&2&&(r(),m(l(2,1,"settings.select")))}function $e(n,c){if(n&1){let e=T();i(0,"div",11)(1,"div",12)(2,"div",13)(3,"mat-icon"),d(4,"language"),t()(),i(5,"div")(6,"h3"),d(7),s(8,"translate"),t(),i(9,"p"),d(10),s(11,"translate"),t()()(),i(12,"div",14),U(13,qe,23,17,"div",15,Te),t(),i(15,"div",16)(16,"button",17),p("click",function(){v(e);let a=u();return C(a.saveDefaultLanguage())}),h(17,Ae,1,0,"mat-progress-spinner",18)(18,Ve,2,0,"mat-icon"),i(19,"span"),d(20),s(21,"translate"),t()()()(),i(22,"div",19)(23,"div",12)(24,"div",20)(25,"mat-icon"),d(26,"keyboard"),t()(),i(27,"div")(28,"h3"),d(29),s(30,"translate"),t(),i(31,"p"),d(32),s(33,"translate"),t()()(),i(34,"div",21)(35,"div",22),p("click",function(){v(e);let a=u();return C(a.setTypingMode("ta"))}),i(36,"div",23)(37,"mat-icon"),d(38,"keyboard"),t()(),i(39,"div",24)(40,"h4"),d(41),s(42,"translate"),t(),i(43,"p"),d(44),s(45,"translate"),t()(),i(46,"div",25),h(47,je,5,3,"span",26)(48,Ne,3,3,"span",27),t()(),i(49,"div",22),p("click",function(){v(e);let a=u();return C(a.setTypingMode("en"))}),i(50,"div",28)(51,"mat-icon"),d(52,"title"),t()(),i(53,"div",24)(54,"h4"),d(55),s(56,"translate"),t(),i(57,"p"),d(58),s(59,"translate"),t()(),i(60,"div",25),h(61,Ue,5,3,"span",26)(62,Qe,3,3,"span",27),t()()()()}if(n&2){let e=u();r(7),m(l(8,17,"settings.systemDefaultLanguage")),r(3),m(l(11,19,"settings.systemDefaultLanguageDesc")),r(3),Q(e.languages()),r(3),b("disabled",e.saving()),r(),f(e.saving()?17:18),r(3),m(l(21,21,"settings.saveAndSetDefault")),r(9),m(l(30,23,"settings.defaultTypingPreference")),r(3),m(l(33,25,"settings.defaultTypingPreferenceDesc")),r(3),x("active",e.languageService.isTamilTextInput()),r(6),m(l(42,27,"settings.tamilBaminiTyping")),r(3),m(l(45,29,"settings.tamilBaminiTypingDesc")),r(3),f(e.languageService.isTamilTextInput()?47:48),r(2),x("active",!e.languageService.isTamilTextInput()),r(6),m(l(56,31,"settings.englishDirectTyping")),r(3),m(l(59,33,"settings.englishDirectTypingDesc")),r(3),f(e.languageService.isTamilTextInput()?62:61)}}var Pe=class n{languageService=g(Ce);masterLookup=g(ve);masterService=g(ye);notification=g(xe);translate=g(_e);loading=O(!0);saving=O(!1);languages=O([]);selectedDefaultId=O(null);async ngOnInit(){await this.loadLanguages()}async loadLanguages(){this.loading.set(!0);try{let c=await I(this.masterLookup.list("languages"));this.languages.set(c||[]);let e=c.find(o=>o.is_default===1);e?this.selectedDefaultId.set(e.id):c.length>0&&this.selectedDefaultId.set(c[0].id)}catch{this.notification.error("common.loadFailed")}finally{this.loading.set(!1)}}async saveDefaultLanguage(c){let e=c||this.languages().find(o=>o.id===this.selectedDefaultId());if(e){this.saving.set(!0);try{await I(this.masterService.setDefault("languages",e.id));let o=this.languageService.mapCode(e.code);o&&this.languageService.setLanguage(o),await this.loadLanguages(),this.notification.success(this.translate.instant("settings.defaultLanguageUpdated",{name:e.name_ta&&this.languageService.isTamil()?e.name_ta:e.name}))}catch{this.notification.error("common.saveFailed")}finally{this.saving.set(!1)}}}setTypingMode(c){this.languageService.setTextInputMode(c),this.notification.success("settings.typingModeUpdated")}setQuickLanguage(c){this.languageService.setLanguage(c)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["coms-language-settings"]],decls:25,vars:13,consts:[[1,"lang-settings"],[1,"lang-settings__header"],[1,"lang-settings__title-area"],[1,"lang-settings__breadcrumb"],["routerLink","/settings",1,"lang-settings__back-link"],[1,"lang-settings__slash"],[1,"lang-settings__current"],[1,"header-icon"],[1,"text-muted"],[1,"lang-settings__loading"],["mode","indeterminate","diameter","36"],[1,"surface-card","lang-settings__main-card"],[1,"card-section-title"],[1,"title-icon"],[1,"language-cards-grid"],[1,"lang-card",3,"selected","active-default"],[1,"main-card-footer"],["mat-flat-button","","color","primary","type","button",1,"save-btn",3,"click","disabled"],["mode","indeterminate","diameter","18"],[1,"surface-card","lang-settings__typing-card"],[1,"title-icon","typing-icon"],[1,"typing-options-grid"],[1,"typing-option-card",3,"click"],[1,"option-icon"],[1,"option-info"],[1,"option-status"],[1,"status-active"],[1,"status-select"],[1,"option-icon","en-icon"],[1,"lang-card",3,"click"],[1,"lang-card__header"],[1,"lang-flag-box"],[1,"flag-icon"],[1,"lang-radio-check"],["type","radio","name","defaultLangRadio",3,"change","id","checked"],[1,"lang-card__body"],[1,"lang-name"],[1,"lang-name-ta"],[1,"lang-meta"],[1,"lang-code"],[1,"badge-default"],[1,"lang-card__footer"],["mat-stroked-button","","type","button",1,"quick-apply-btn",3,"click","disabled"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4)(5,"mat-icon"),d(6,"arrow_back"),t(),i(7,"span"),d(8),s(9,"translate"),t()(),i(10,"span",5),d(11,"/"),t(),i(12,"span",6),d(13),s(14,"translate"),t()(),i(15,"h1")(16,"mat-icon",7),d(17,"translate"),t(),d(18),s(19,"translate"),t(),i(20,"p",8),d(21),s(22,"translate"),t()()(),h(23,Le,2,0,"div",9)(24,$e,63,35),t()),e&2&&(r(8),m(l(9,5,"nav.settings")),r(5),m(l(14,7,"settings.languageSettings")),r(5),M(" ",l(19,9,"settings.languageSettings")," "),r(3),m(l(22,11,"settings.languageSettingsSubtitle")),r(2),f(o.loading()?23:24))},dependencies:[W,se,X,be,ue,me,ge,Me,fe,he,le,pe],styles:["[_nghost-%COMP%]{display:block;width:100%!important;box-sizing:border-box}.lang-settings[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;width:100%!important;max-width:100%!important;margin:0;box-sizing:border-box;padding-bottom:30px}.lang-settings__header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:16px}.lang-settings__header[_ngcontent-%COMP%]   .lang-settings__breadcrumb[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:13px;margin-bottom:6px}.lang-settings__header[_ngcontent-%COMP%]   .lang-settings__breadcrumb[_ngcontent-%COMP%]   .lang-settings__back-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;color:#3b82f6;text-decoration:none;font-weight:500}.lang-settings__header[_ngcontent-%COMP%]   .lang-settings__breadcrumb[_ngcontent-%COMP%]   .lang-settings__back-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.lang-settings__header[_ngcontent-%COMP%]   .lang-settings__breadcrumb[_ngcontent-%COMP%]   .lang-settings__back-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.lang-settings__header[_ngcontent-%COMP%]   .lang-settings__breadcrumb[_ngcontent-%COMP%]   .lang-settings__slash[_ngcontent-%COMP%]{color:#94a3b8}.lang-settings__header[_ngcontent-%COMP%]   .lang-settings__breadcrumb[_ngcontent-%COMP%]   .lang-settings__current[_ngcontent-%COMP%]{color:#64748b;font-weight:600}.lang-settings__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin:0 0 4px;font-size:24px;font-weight:700;color:#0f172a}.lang-settings__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]{color:#2563eb;font-size:28px;width:28px;height:28px}.lang-settings__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px;color:#64748b}.lang-settings__loading[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:200px}.card-section-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:20px}.card-section-title[_ngcontent-%COMP%]   .title-icon[_ngcontent-%COMP%]{width:42px;height:42px;border-radius:10px;background:#eff6ff;color:#2563eb;display:flex;align-items:center;justify-content:center}.card-section-title[_ngcontent-%COMP%]   .title-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}.card-section-title[_ngcontent-%COMP%]   .title-icon.typing-icon[_ngcontent-%COMP%]{background:#fef3c7;color:#d97706}.card-section-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:17px;font-weight:700;color:#0f172a}.card-section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 0 0;font-size:13px;color:#64748b}.lang-settings__main-card[_ngcontent-%COMP%]{background:#fff;border-radius:14px;padding:24px;border:1px solid #e2e8f0;box-shadow:0 4px 12px #00000008}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-bottom:20px}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card[_ngcontent-%COMP%]{background:#f8fafc;border:2px solid #e2e8f0;border-radius:12px;padding:16px;cursor:pointer;display:flex;flex-direction:column;justify-content:space-between;gap:14px;transition:all .2s ease-in-out}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card[_ngcontent-%COMP%]:hover{border-color:#93c5fd;background:#fff;box-shadow:0 4px 12px #3b82f614}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card.selected[_ngcontent-%COMP%]{border-color:#2563eb;background:#f0f7ff;box-shadow:0 4px 14px #2563eb1f}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card.active-default[_ngcontent-%COMP%]{border-color:#10b981}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card[_ngcontent-%COMP%]   .lang-card__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card[_ngcontent-%COMP%]   .lang-card__header[_ngcontent-%COMP%]   .lang-flag-box[_ngcontent-%COMP%]   .flag-icon[_ngcontent-%COMP%]{font-size:26px}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card[_ngcontent-%COMP%]   .lang-card__header[_ngcontent-%COMP%]   .lang-radio-check[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{width:18px;height:18px;cursor:pointer;accent-color:#2563eb}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card[_ngcontent-%COMP%]   .lang-card__body[_ngcontent-%COMP%]   .lang-name[_ngcontent-%COMP%]{margin:0;font-size:18px;font-weight:700;color:#0f172a}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card[_ngcontent-%COMP%]   .lang-card__body[_ngcontent-%COMP%]   .lang-name-ta[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#2563eb;margin-top:2px}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card[_ngcontent-%COMP%]   .lang-card__body[_ngcontent-%COMP%]   .lang-meta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-top:10px}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card[_ngcontent-%COMP%]   .lang-card__body[_ngcontent-%COMP%]   .lang-meta[_ngcontent-%COMP%]   .lang-code[_ngcontent-%COMP%]{background:#e2e8f0;color:#334155;font-family:monospace;font-size:11px;font-weight:700;padding:2px 6px;border-radius:4px}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card[_ngcontent-%COMP%]   .lang-card__body[_ngcontent-%COMP%]   .lang-meta[_ngcontent-%COMP%]   .badge-default[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;background:#dcfce7;color:#15803d;font-size:12px;font-weight:700;padding:2px 8px;border-radius:20px}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card[_ngcontent-%COMP%]   .lang-card__body[_ngcontent-%COMP%]   .lang-meta[_ngcontent-%COMP%]   .badge-default[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card[_ngcontent-%COMP%]   .lang-card__footer[_ngcontent-%COMP%]   .quick-apply-btn[_ngcontent-%COMP%]{width:100%;height:34px;font-size:12px;font-weight:600;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;gap:6px}.lang-settings__main-card[_ngcontent-%COMP%]   .language-cards-grid[_ngcontent-%COMP%]   .lang-card[_ngcontent-%COMP%]   .lang-card__footer[_ngcontent-%COMP%]   .quick-apply-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.lang-settings__main-card[_ngcontent-%COMP%]   .main-card-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;border-top:1px solid #f1f5f9;padding-top:16px}.lang-settings__main-card[_ngcontent-%COMP%]   .main-card-footer[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%]{height:42px;padding:0 20px;font-size:14px;font-weight:700;border-radius:10px;display:inline-flex;align-items:center;gap:8px}.lang-settings__typing-card[_ngcontent-%COMP%]{background:#fff;border-radius:14px;padding:24px;border:1px solid #e2e8f0;box-shadow:0 4px 12px #00000008}.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px}@media(max-width:768px){.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]   .typing-option-card[_ngcontent-%COMP%]{background:#f8fafc;border:2px solid #e2e8f0;border-radius:12px;padding:16px;cursor:pointer;display:flex;align-items:center;gap:14px;transition:all .2s ease-in-out}.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]   .typing-option-card[_ngcontent-%COMP%]:hover{border-color:#cbd5e1;background:#fff}.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]   .typing-option-card.active[_ngcontent-%COMP%]{border-color:#f59e0b;background:#fffbeb}.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]   .typing-option-card.active[_ngcontent-%COMP%]   .option-icon[_ngcontent-%COMP%]{background:#f59e0b;color:#fff}.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]   .typing-option-card[_ngcontent-%COMP%]   .option-icon[_ngcontent-%COMP%]{width:42px;height:42px;border-radius:10px;background:#e2e8f0;color:#475569;display:flex;align-items:center;justify-content:center;flex-shrink:0}.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]   .typing-option-card[_ngcontent-%COMP%]   .option-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]   .typing-option-card[_ngcontent-%COMP%]   .option-info[_ngcontent-%COMP%]{flex:1}.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]   .typing-option-card[_ngcontent-%COMP%]   .option-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:15px;font-weight:700;color:#0f172a}.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]   .typing-option-card[_ngcontent-%COMP%]   .option-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 0 0;font-size:12px;color:#64748b}.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]   .typing-option-card[_ngcontent-%COMP%]   .option-status[_ngcontent-%COMP%]   .status-active[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;color:#b45309;font-weight:700;font-size:12px;background:#fef3c7;padding:3px 8px;border-radius:6px}.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]   .typing-option-card[_ngcontent-%COMP%]   .option-status[_ngcontent-%COMP%]   .status-active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.lang-settings__typing-card[_ngcontent-%COMP%]   .typing-options-grid[_ngcontent-%COMP%]   .typing-option-card[_ngcontent-%COMP%]   .option-status[_ngcontent-%COMP%]   .status-select[_ngcontent-%COMP%]{font-size:12px;color:#64748b;font-weight:600}"]})};export{Pe as LanguageSettingsComponent};
