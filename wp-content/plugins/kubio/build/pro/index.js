this.kubio=this.kubio||{},this.kubio.pro=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=682)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},12:function(e,t){!function(){e.exports=this.wp.blocks}()},13:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var l=r.apply(null,o);l&&e.push(l)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var a in o)n.call(o,a)&&o[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},18:function(e,t){!function(){e.exports=this.kubio.utils}()},2:function(e,t){!function(){e.exports=this.wp.components}()},23:function(e,t){!function(){e.exports=this.wp.hooks}()},3:function(e,t){!function(){e.exports=this.lodash}()},34:function(e,t){!function(){e.exports=this.wp.url}()},682:function(e,t,n){"use strict";n.r(t),n.d(t,"AvailableInPro",(function(){return C})),n.d(t,"ControlNotice",(function(){return w})),n.d(t,"UpgradeToPro",(function(){return _})),n.d(t,"ProModal",(function(){return P})),n.d(t,"ProModalTextContext",(function(){return h})),n.d(t,"useProModal",(function(){return k})),n.d(t,"noticeMessage",(function(){return m})),n.d(t,"upgradeToPro",(function(){return v})),n.d(t,"tryOnline",(function(){return j})),n.d(t,"upgradeToProURL",(function(){return O})),n.d(t,"PRO_ON_FREE_FLAG",(function(){return x})),n.d(t,"proBadgeClasses",(function(){return R})),n.d(t,"ProBadge",(function(){return B})),n.d(t,"proItemOnFree",(function(){return S})),n.d(t,"proItemOnFreeClass",(function(){return T})),n.d(t,"sortItemsByPro",(function(){return N})),n.d(t,"addProTagToItems",(function(){return D})),n.d(t,"isFreeVersion",(function(){return M})),n.d(t,"addProTagToItem",(function(){return A})),n.d(t,"ProItem",(function(){return U}));var o,r=n(0),i=n(2),l=n(1),a=n(8),c=n(18),u=n(3),s=n.n(u);const b={pro:{link:top.kubioUtilsData.homepage_url,pricing_link:top.kubioUtilsData.upgrade_url,typography:Object(l.__)("Available only in the PRO version","kubio"),upgrade:{label:Object(l.__)("Upgrade to PRO","kubio")},try:{label:Object(l.__)("Try PRO Online","kubio"),msg:Object(l.__)("Get unlimited options with Kubio PRO","kubio"),link:top.kubioUtilsData.theme_try_online},subscribe:{label:Object(l.__)("PRO version coming soon","kubio"),msg:Object(l.__)("The PRO version of Kubio will be available soon. Please enter your email below and we’ll announce you when it’s ready.","kubio")},popup:{option:Object(l.__)("This option is available only in the PRO version.","kubio"),innerpage:Object(l.__)("Adding predefined blocks to inner pages is available only in the PRO version.","kubio"),colorscheme:Object(l.__)("Customizing color scheme colors is available only in the PRO version.","kubio"),component:Object(l.__)("This component is available only in the PRO version.","kubio"),gradient:Object(l.__)("Customizing gradient settings is available only in the PRO version.","kubio"),buttonsLimit:Object(l.__)("Adding more than 2 items is available only in the PRO version.","kubio")},infobox:{text:Object(l.__)("Text customization options (font, color, etc) are only available in the PRO version.","kubio"),default:Object(l.__)("More customization options available in the PRO version.","kubio"),icon:Object(l.__)("More color options are available in the PRO version.","kubio"),button:Object(l.__)("More customization options available in the PRO version.","kubio"),menu:Object(l.__)("More menu design options are available in the PRO version.","kubio")},advanced:Object(l.__)("Advanced options are only available in the PRO version.","kubio"),footer:{msg:Object(l.__)("Footer text and customization options are available in the PRO version","kubio")}}},d=!0!==(null===(o=window.kubioUtilsData)||void 0===o?void 0:o.enable_try_online),p=e=>s.a.get(b,e,"");var f=n(34);const m=e=>{let t=e.title||p(e.msgid?e.msgid:"pro.infobox.default");const n=e.include?e.include.join(", "):"";return t=t.replace("{{props}}",n),t=t.replace(/\[pro-link\]([\w]+)\[\/pro-link\]/,""),t},O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{source:t,content:n,...o}=e;return Object(f.addQueryArgs)(p("pro.pricing_link"),{utm_medium:"editor",utm_source:t,utm_content:n,...o})},v=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=window.open(O(t));null==n||null===(e=n.focus)||void 0===e||e.call(n)};let g=null;const j=function(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!g||g.closed){const e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=p("pro.try.link");if(top.kubioUtilsData.last_imported_starter){const[e,n]=top.kubioUtilsData.try_starter_site.split("?");t=e.replace(/\/+$/,"")+`/${top.kubioUtilsData.last_imported_starter}?${n}`}const{source:n,content:o,...r}=e;return t=Object(f.addQueryArgs)(t,{utm_medium:"editor",utm_source:n,utm_content:o,...r}),t}(n);g=window.open(e,"_blank")}null===(e=g)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e)},_=e=>{let{urlArgs:t={},message:n=null}=e;const o=Object(r.useCallback)((e=>{e.preventDefault(),v(t)}),[t]),l=Object(r.useCallback)((e=>{e.preventDefault(),j(t)}),[]);return Object(r.createElement)(i.BaseControl,{className:"kubio-feature-upgrade-to-pro"},Object(r.createElement)("div",{className:"upgrade-to-pro__content"},Object(r.createElement)("p",{className:"label-title"},n||p("pro.try.msg")),Object(r.createElement)(i.Button,{className:"btn-upgrade",onClick:o},p("pro.upgrade.label")),!d&&Object(r.createElement)(i.Button,{className:"btn-try",onClick:l},p("pro.try.label"))))},h=Object(r.createContext)(p("pro.popup.option")),k=()=>(()=>{const[e,t]=Object(r.useState)({default:!1}),n=function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";t({...e,[o]:n})};return[Object(r.useCallback)((t=>{const{id:o="default"}=t;return!(null==e||!e[o])&&Object(r.createElement)(P,Object(a.a)({onClose:()=>{n(!1,o)}},t))}),[e]),n]})(),y=e=>{var t,n;e.preventDefault(),e.stopPropagation(),null==e||null===(t=e.nativeEvent)||void 0===t||null===(n=t.stopImmediatePropagation)||void 0===n||n.call(t)},P=Object(r.forwardRef)((function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{onClose:n=s.a.noop,anchorRef:o,urlArgs:l={},className:a=""}=t,u=null!==(e=null==o?void 0:o.current)&&void 0!==e?e:o,b=Object(r.useRef)(),d=Object(r.useCallback)((e=>{const t=null==e?void 0:e.target;b.current===t||b.current.contains(t)||n()}),[n]);Object(c.useOnClickOutside)(b,d);const p=Object(r.useCallback)((e=>{e.detail.modalEl.isSameNode(b.current)||n()}),[]);Object(r.useEffect)((()=>{if(b.current){(e=>{const t=new e.ownerDocument.defaultView.CustomEvent("kubio-pro-modal-showed",{detail:{modalEl:e}});e.ownerDocument.defaultView.dispatchEvent(t)})(b.current);const e=b.current.ownerDocument.defaultView;return e.addEventListener("kubio-pro-modal-showed",p),()=>e.removeEventListener("kubio-pro-modal-showed",p)}}),[b]);const f=Object(r.useCallback)((()=>{if(!u)return;const e=null==u?void 0:u.getBoundingClientRect();return{...(null==e?void 0:e.toJSON())||{},ownerDocument:null==u?void 0:u.ownerDocument}}),[u]);return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.Popover,{position:"bottom center",className:`kubio-upgrade-to-pro-popup sidebar-popover-container ${a}`,getAnchorRect:u?f:void 0,shift:!0,flip:!0,placement:"bottom",__unstableSlotName:top.isKubioBlockEditor?"kubio-popover-slot":void 0,focusOnMount:!1},Object(r.createElement)("div",{ref:b,onClick:y,onMouseDown:y},Object(r.createElement)(E,{urlArgs:l}))))}));function E(){let{urlArgs:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object(r.useContext)(h);return Object(r.createElement)(_,{urlArgs:e,message:t})}const w=e=>{let{showLabel:t=!0,label:n,content:o=""}=e;return Object(r.createElement)(i.BaseControl,null,Object(r.createElement)("div",{className:"h-control-notice"},t&&Object(r.createElement)("span",{className:"h-control-notice__label"},n),Object(r.createElement)("div",{className:"h-control-notice__content"},o)))},C=function(){let{displayModal:e=!0,urlArgs:t={},...n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=Object(r.useRef)(),[a,c]=k(),u=Object(r.useCallback)((n=>{e?(n.preventDefault(),n.stopPropagation(),c(!0)):v(t)}),[]),s=Object(r.useCallback)((()=>{j(t)}),[]);return Object(r.createElement)(i.BaseControl,{ref:o,className:"kubio-feature-available-in-pro"},Object(r.createElement)("div",{className:"h-control-notice"},Object(r.createElement)("span",{className:"h-control-notice__label"},Object(l.__)("PRO","kubio")),Object(r.createElement)("div",{className:"h-control-notice__content"},Object(r.createElement)("label",{className:"label-title"},m(n))),Object(r.createElement)(i.Flex,{justify:"flex-start",align:"flex-start",className:"h-control-notice__content"},Object(r.createElement)(i.Button,{isSmall:!0,variant:"primary",onClick:u},p("pro.upgrade.label"),e&&Object(r.createElement)(a,{urlArgs:t,anchorRef:o.current})),!e&&!d&&Object(r.createElement)(i.Button,{isSmall:!0,variant:"secondary",onClick:s},p("pro.try.label")))))},R={proItem:"kubio-pro-item",badgeClass:"kubio-pro-item__badge"},x="isProOnFree";function N(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s.a.sortBy(e,[function(e){return!0===(null==e?void 0:e[x])}],[t])}function A(e){return s.a.set(e,x,!0),e}function D(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=s.a.cloneDeep(e);return s.a.each(n,((e,n)=>{s.a.isFunction(t)&&(t(e,n)||s.a.set(e,x,!0)),s.a.isArray(t)&&(t.includes(s.a.get(e,"value"))||s.a.set(e,x,!0))})),n}const S=e=>!0===e||(null==e?void 0:e[x]),T=e=>{const t=[];return S(e)&&t.push(R.proItem),t},B=e=>{let{item:t}=e;return S(t)?Object(r.createElement)("div",{className:R.badgeClass},Object(l.__)("PRO","kubio")):null};top.kubioEnv=Object({pro:!1,free:!0,internal:!1,all:!0,dev:!1});const M=()=>!top.kubioEnv.pro;var F=n(13),I=n.n(F);const U=Object(r.forwardRef)(((e,t)=>{const{tag:n,item:o=!0,onClick:i=s.a.noop,className:l,children:c,urlArgs:u,propPopoverClass:b="",...d}=e,[p,f]=k(),m=Object(r.useRef)(),O=t||m;let v=null;return v=Object(r.createElement)(r.Fragment,null,Object(r.createElement)(B,{item:o}),Object(r.createElement)(p,{urlArgs:u,anchorRef:O.current,className:b})),Object(r.createElement)(n,Object(a.a)({},d,{ref:O,className:I()(l,T(o)),onClick:e=>{if(S(o))return e.preventDefault(),e.stopPropagation(),void f(!0);i(e)}}),c,v)}));var z=n(12),L=n(23);Object(L.addFilter)("kubio.beforeInsertBlock","kubio/pro/blocks",(function(e){const t=Object(z.getBlockType)(null==e?void 0:e.name);return e.isProOnFree=t.isPro,e.isProOnFree&&(e.disabled=!0,e.isDisabled=!0),e}))},8:function(e,t,n){"use strict";function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}n.d(t,"a",(function(){return o}))}});
