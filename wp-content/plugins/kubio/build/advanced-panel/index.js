this.kubio=this.kubio||{},this.kubio.advancedPanel=function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=688)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},11:function(e,t){!function(){e.exports=this.wp.compose}()},110:function(e,t){!function(){e.exports=this.kubio.adminPanel}()},2:function(e,t){!function(){e.exports=this.wp.components}()},21:function(e,t){!function(){e.exports=this.kubio.inspectors}()},24:function(e,t){!function(){e.exports=this.kubio.constants}()},3:function(e,t){!function(){e.exports=this.lodash}()},4:function(e,t){!function(){e.exports=this.kubio.core}()},6:function(e,t){!function(){e.exports=this.kubio.controls}()},688:function(e,t,n){"use strict";n.r(t),n.d(t,"AdvancedInspectorPanel",(function(){return h})),n.d(t,"StatesControl",(function(){return f})),n.d(t,"withInspectorControlsAdvancedPanel",(function(){return g}));var o=n(8),l=n(0),r=(n(110),n(24)),c=n(6),a=n(4),s=n(21),i=n(9),u=n(2),d=n(11),p=n(7),b=n(1),O=n(3),m=n.n(O);const E={[i.StylesEnum.TYPOGRAPHY]:{control:c.TypographyForTextAdvanced,mapsToStyle:!1,title:Object(b.__)("Typography","kubio")},[i.StylesEnum.TYPOGRAPHY_FOR_HEADING]:{control:c.TypographyForHeading,mapsToStyle:!1,title:Object(b.__)("Typography","kubio")},[i.StylesEnum.TYPOGRAPHY_FOR_CONTAINER]:{control:c.TypographyForContainer,mapsToStyle:!1,title:Object(b.__)("Typography","kubio")},[i.StylesEnum.TYPOGRAPHY_FOR_CONTAINER_ADVANCED]:{control:c.TypographyForContainerAdvanced,mapsToStyle:!1,title:Object(b.__)("Typography","kubio")},[i.StylesEnum.SPACING]:{control:c.SpacingControl,mapsToStyle:!1,title:Object(b.__)("Spacing","kubio")},[i.StylesEnum.BORDER]:{control:c.BorderAndShadowControl,mapsToStyle:!1,title:e=>{let{filters:t}=e;const{supportsBorder:n=!0,supportsBoxShadow:o=!0}=t;return n&&o?Object(b.__)("Border and Shadows","kubio"):n&&!o?Object(b.__)("Border","kubio"):!n&&o?Object(b.__)("Box shadow","kubio"):void 0}},[i.StylesEnum.BACKGROUND]:{control:c.BackgroundControl,title:Object(b.__)("Background","kubio"),options:{mergeArrays:!0}},[i.StylesEnum.TEXT_SHADOW]:{control:c.TextShadowControl,title:Object(b.__)("Text shadow","kubio")},[i.StylesEnum.RESPONSIVE]:{shouldRender:e=>{let{filters:t}=e;return!(null!=t&&t.isDisabled)},control:c.ResponsiveControl,mapsToStyle:!1,title:Object(b.__)("Responsive","kubio")},[i.StylesEnum.SEPARATORS]:{control:c.SeparatorsControl,title:Object(b.__)("Dividers","kubio")},[i.StylesEnum.TRANSFORM]:{control:c.TransformControl,title:Object(b.__)("Transform","kubio"),options:{mergeData:!0}},[i.StylesEnum.APPEARANCE]:{shouldRender:e=>{let{filters:t}=e;return!(null!=t&&t.isDisabled)},control:c.AppearanceControl,title:Object(b.__)("Entrance animation","kubio")},[i.StylesEnum.TRANSITION]:{control:c.TransitionControlOnHover,shouldRender:e=>"hover"===e.state,title:Object(b.__)("Transition","kubio")},[i.StylesEnum.MISC]:{shouldRender:e=>{let{filters:t}=e;return!(null!=t&&t.isDisabled)},control:c.MiscControl,title:Object(b.__)("Miscellaneous","kubio")}},y=[i.StylesEnum.TRANSITION,i.StylesEnum.BACKGROUND,i.StylesEnum.SEPARATORS,i.StylesEnum.SPACING,i.StylesEnum.BORDER,i.StylesEnum.BOX_SHADOW,i.StylesEnum.TYPOGRAPHY,i.StylesEnum.TYPOGRAPHY_FOR_CONTAINER,i.StylesEnum.TYPOGRAPHY_FOR_CONTAINER_ADVANCED,i.StylesEnum.TYPOGRAPHY_FOR_HEADING,i.StylesEnum.TEXT_SHADOW,i.StylesEnum.TRANSFORM,i.StylesEnum.APPEARANCE,i.StylesEnum.RESPONSIVE,i.StylesEnum.MISC],S=e=>{let{selectedElement:t}=e,n=[];return t&&(n=Object(O.get)(t,"supports.states",["normal","hover"])),n},f=e=>{var t;let{activeState:n,setActiveState:o,availableStates:r=[],selectedElement:c=null,label:a=null}=e;const s=Object(O.isEmpty)(r)?S({selectedElement:c}):r,d=null===(t=Object(O.find)(i.statesById,{value:n}))||void 0===t?void 0:t.id;return!(s.length<=1)&&Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",{className:"kubio-states-control-label"},a),Object(l.createElement)(u.__experimentalRadioGroup,{id:"kubio-states-control",className:"kubio-states-control-radio-group",defaultChecked:n,checked:d,onChange:e=>{var t;return o(null===(t=i.statesById[e])||void 0===t?void 0:t.value)}},s.map((e=>{var t,n;return Object(l.createElement)(u.__experimentalRadio,{key:e,value:null===(t=i.statesById[e])||void 0===t?void 0:t.id},null===(n=i.statesById[e])||void 0===n?void 0:n.label)}))))},j=e=>{const{styles:t,selectedStyledElement:n,dataHelper:o}=e;return y.filter((e=>t.includes(e))).filter(Boolean).map((e=>Object(l.createElement)(_,{key:e,style:e,selectedStyledElement:n,dataHelper:o})))},_=e=>{let{style:t,selectedStyledElement:n,dataHelper:o}=e;const{defaultOptions:r}=Object(a.useDataHelperDefaultOptionsContext)(),c=E[t];if(!c)return console.error(`Advanced panel: "${t}" does not exists`),Object(l.createElement)(l.Fragment,null);const{control:s,mapsToStyle:i=!0,shouldRender:d=(()=>!0),options:p={}}=c,b=i?o.useStylePath(t,{...r,...p},{}):{dataHelper:o},O=m.a.get(n,["supports","filters",t],{});let y="";y="function"==typeof E[t].title?E[t].title({filters:O}):E[t].title;const S={dataHelper:o,property:t,state:m.a.get(r,"state"),...b,filters:O,styledElement:n.name};return d(S)&&Object(l.createElement)(u.PanelBody,{key:`panel-${t}`,classname:"kubio-advanced-panel-panelbody",title:y,initialOpen:!1},Object(l.createElement)(s,S))},v=()=>Object(l.createElement)(l.Fragment,null),k=e=>{const{name:t,clientId:n}=e,{blockDefinition:r,getBlock:s}=Object(p.useSelect)((e=>({blockDefinition:e("core/blocks").getBlockType(t),getBlock:e("core/block-editor").getBlock}))),{displayAdvancedPanelFor:u}=r,d=u?u(n,p.select):null,O=d?s(d).name:t,E=Object(a.getBlockElements)(O,!1,!0),y=Object(a.getBlockDefaultElement)(O)||E[0],[_,v]=Object(l.useState)(""),[k,h]=Object(l.useState)(y),g=m.a.get(k,"supports.styles",[]),A=Object(l.useMemo)((()=>E.reduce(((e,t)=>{const{items:n}=t;return n?[...e,...n]:[...e,t]}),[])),[E]),T=null==k?void 0:k.name,R=Object(p.useSelect)((e=>e("core/block-editor").getBlock(d||n)),[d,n]),{dataHelper:C}=Object(a.useKubioDataHelper)(R),P={state:_,styledComponent:T},N=Object(a.useDataHelperDefaultOptionsContext)({defaultOptions:P});if(!g.length)return Object(l.createElement)("div",{className:"kubio-editing-header"},Object(l.createElement)(c.ControlNotice,{content:Object(b.__)("Current block does not support advanced styling","kubio")}));const D=A.filter((e=>!e.internal)).length;C.kubioSupports("advanced.responsive",!0)&&(k.wrapper||D<=1)&&g.push(i.StylesEnum.RESPONSIVE),C.kubioSupports("advanced.misc",!0)&&(k.wrapper||D<=1)&&g.push(i.StylesEnum.MISC);const x=S({selectedElement:k});return Object(l.createElement)(a.DataHelperDefaultOptionsContext.Provider,{value:N},Object(l.createElement)(a.KubioBlockContext.Provider,{value:{dataHelper:C}},(E.length>1||x.length>1)&&Object(l.createElement)("div",{className:"kubio-editing-header"},E.length>1&&Object(l.createElement)(c.GutentagSelectControl,{className:"kubio-editing-select",label:Object(b.__)("Editing","kubio"),value:null==k?void 0:k.name,onChange:e=>{h(A.find((t=>t.name===e))),v("")},options:E}),Object(l.createElement)(f,{label:Object(b.__)("State","kubio"),activeState:_,setActiveState:e=>{v("normal"===e?"":e)},selectedElement:k,availableStates:x})),Object(l.createElement)(j,Object(o.a)({},e,{styles:g,selectedStyledElement:k,dataHelper:C}))))},h=e=>{const t=Object(p.useSelect)((e=>!!e(r.STORE_KEY)&&e(r.STORE_KEY).isGutentagDebug()),[]);return Object(l.createElement)(s.AdvancedInspectorControls,{clientId:e.clientId},Object(l.createElement)(k,e),t&&Object(l.createElement)(v,null))},g=Object(d.createHigherOrderComponent)((e=>t=>{const n=Object(a.getBlockAncestor)(null==t?void 0:t.name),{ancestor:o}=Object(a.useAncestorContext)();let r={};n&&o===n&&(r={ancestor:o}),n&&(r.inheritedAncestor=n);const i={defaultOptions:r},u=Object(a.useDataHelperDefaultOptionsContext)(i);return Object(l.createElement)(a.DataHelperDefaultOptionsContext.Provider,{value:u},Object(l.createElement)(e,t),t.isSelected&&Object(l.createElement)(l.Fragment,null,Object(l.createElement)(h,t),Object(l.createElement)(s.BlockInspectorTopControls,null,Object(l.createElement)(c.LinkedNotice,t),Object(l.createElement)(c.AncestorNotice,null))))}),"withInspectorControlsAdvancedPanel")},7:function(e,t){!function(){e.exports=this.wp.data}()},8:function(e,t,n){"use strict";function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}n.d(t,"a",(function(){return o}))},9:function(e,t){!function(){e.exports=this.kubio.styleManager}()}});
