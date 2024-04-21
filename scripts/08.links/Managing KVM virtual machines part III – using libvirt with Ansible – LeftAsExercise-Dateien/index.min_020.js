(()=>{"use strict";var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{__unstableStripHTML:()=>Y,computeCaretRect:()=>g,documentHasSelection:()=>C,documentHasTextSelection:()=>b,documentHasUncollapsedSelection:()=>E,focus:()=>at,getFilesFromDataTransfer:()=>it,getOffsetParent:()=>v,getPhrasingContentSchema:()=>Z,getRectangleFromRange:()=>p,getScrollContainer:()=>T,insertAfter:()=>U,isEmpty:()=>$,isEntirelySelected:()=>S,isFormElement:()=>R,isHorizontalEdge:()=>x,isNumberInput:()=>_,isPhrasingContent:()=>tt,isRTL:()=>D,isTextContent:()=>et,isTextField:()=>y,isVerticalEdge:()=>F,placeCaretAtHorizontalEdge:()=>B,placeCaretAtVerticalEdge:()=>j,remove:()=>z,removeInvalidHTML:()=>ot,replace:()=>q,replaceTag:()=>k,safeHTML:()=>G,unwrap:()=>W,wrap:()=>X});var n={};t.r(n),t.d(n,{find:()=>i});var r={};function o(t){return t.offsetWidth>0||t.offsetHeight>0||t.getClientRects().length>0}function i(t,{sequential:e=!1}={}){const n=t.querySelectorAll(function(t){return[t?'[tabindex]:not([tabindex^="-"])':"[tabindex]","a[href]","button:not([disabled])",'input:not([type="hidden"]):not([disabled])',"select:not([disabled])","textarea:not([disabled])",'iframe:not([tabindex^="-"])',"object","embed","area[href]","[contenteditable]:not([contenteditable=false])"].join(",")}(e));return Array.from(n).filter((t=>{if(!o(t))return!1;const{nodeName:e}=t;return"AREA"!==e||function(t){const e=t.closest("map[name]");if(!e)return!1;const n=t.ownerDocument.querySelector('img[usemap="#'+e.name+'"]');return!!n&&o(n)}(t)}))}function a(t){const e=t.getAttribute("tabindex");return null===e?0:parseInt(e,10)}function s(t){return-1!==a(t)}function c(t,e){return{element:t,index:e}}function u(t){return t.element}function l(t,e){const n=a(t.element),r=a(e.element);return n===r?t.index-e.index:n-r}function d(t){return t.filter(s).map(c).sort(l).map(u).reduce(function(){const t={};return function(e,n){const{nodeName:r,type:o,checked:i,name:a}=n;if("INPUT"!==r||"radio"!==o||!a)return e.concat(n);const s=t.hasOwnProperty(a);if(!i&&s)return e;if(s){const n=t[a];e=e.filter((t=>t!==n))}return t[a]=n,e.concat(n)}}(),[])}function f(t){return d(i(t))}function m(t){return d(i(t.ownerDocument.body)).reverse().find((e=>t.compareDocumentPosition(e)&t.DOCUMENT_POSITION_PRECEDING))}function h(t){return d(i(t.ownerDocument.body)).find((e=>t.compareDocumentPosition(e)&t.DOCUMENT_POSITION_FOLLOWING))}function p(t){if(!t.collapsed){const e=Array.from(t.getClientRects());if(1===e.length)return e[0];const n=e.filter((({width:t})=>t>1));if(0===n.length)return t.getBoundingClientRect();if(1===n.length)return n[0];let{top:r,bottom:o,left:i,right:a}=n[0];for(const{top:t,bottom:e,left:s,right:c}of n)t<r&&(r=t),e>o&&(o=e),s<i&&(i=s),c>a&&(a=c);return new window.DOMRect(i,r,a-i,o-r)}const{startContainer:e}=t,{ownerDocument:n}=e;if("BR"===e.nodeName){const{parentNode:r}=e,o=Array.from(r.childNodes).indexOf(e);(t=n.createRange()).setStart(r,o),t.setEnd(r,o)}const r=t.getClientRects();if(r.length>1)return null;let o=r[0];if(!o||0===o.height){const e=n.createTextNode("​");(t=t.cloneRange()).insertNode(e),o=t.getClientRects()[0],e.parentNode,e.parentNode.removeChild(e)}return o}function g(t){const e=t.getSelection(),n=e.rangeCount?e.getRangeAt(0):null;return n?p(n):null}function b(t){t.defaultView;const e=t.defaultView.getSelection(),n=e.rangeCount?e.getRangeAt(0):null;return!!n&&!n.collapsed}function N(t){return"INPUT"===t?.nodeName}function y(t){return N(t)&&t.type&&!["button","checkbox","hidden","file","radio","image","range","reset","submit","number","email","time"].includes(t.type)||"TEXTAREA"===t.nodeName||"true"===t.contentEditable}function E(t){return b(t)||!!t.activeElement&&function(t){if(!N(t)&&!y(t))return!1;try{const{selectionStart:e,selectionEnd:n}=t;return null===e||e!==n}catch(t){return!0}}(t.activeElement)}function C(t){return!!t.activeElement&&(N(t.activeElement)||y(t.activeElement)||b(t))}function w(t){return t.ownerDocument.defaultView,t.ownerDocument.defaultView.getComputedStyle(t)}function T(t,e="vertical"){if(t){if(("vertical"===e||"all"===e)&&t.scrollHeight>t.clientHeight){const{overflowY:e}=w(t);if(/(auto|scroll)/.test(e))return t}if(("horizontal"===e||"all"===e)&&t.scrollWidth>t.clientWidth){const{overflowX:e}=w(t);if(/(auto|scroll)/.test(e))return t}return t.ownerDocument===t.parentNode?t:T(t.parentNode,e)}}function v(t){let e;for(;(e=t.parentNode)&&e.nodeType!==e.ELEMENT_NODE;);return e?"static"!==w(e).position?e:e.offsetParent:null}function O(t){return"INPUT"===t.tagName||"TEXTAREA"===t.tagName}function S(t){if(O(t))return 0===t.selectionStart&&t.value.length===t.selectionEnd;if(!t.isContentEditable)return!0;const{ownerDocument:e}=t,{defaultView:n}=e,r=n.getSelection(),o=r.rangeCount?r.getRangeAt(0):null;if(!o)return!0;const{startContainer:i,endContainer:a,startOffset:s,endOffset:c}=o;if(i===t&&a===t&&0===s&&c===t.childNodes.length)return!0;t.lastChild;const u=a.nodeType===a.TEXT_NODE?a.data.length:a.childNodes.length;return A(i,t,"firstChild")&&A(a,t,"lastChild")&&0===s&&c===u}function A(t,e,n){let r=e;do{if(t===r)return!0;r=r[n]}while(r);return!1}function R(t){if(!t)return!1;const{tagName:e}=t;return O(t)||"BUTTON"===e||"SELECT"===e}function D(t){return"rtl"===w(t).direction}function P(t,e,n,r){const o=r.style.zIndex,i=r.style.position,{position:a="static"}=w(r);"static"===a&&(r.style.position="relative"),r.style.zIndex="10000";const s=function(t,e,n){if(t.caretRangeFromPoint)return t.caretRangeFromPoint(e,n);if(!t.caretPositionFromPoint)return null;const r=t.caretPositionFromPoint(e,n);if(!r)return null;const o=t.createRange();return o.setStart(r.offsetNode,r.offset),o.collapse(!0),o}(t,e,n);return r.style.zIndex=o,r.style.position=i,s}function L(t,e,n){let r=n();return r&&r.startContainer&&t.contains(r.startContainer)||(t.scrollIntoView(e),r=n(),r&&r.startContainer&&t.contains(r.startContainer))?r:null}function M(t,e,n=!1){if(O(t)&&"number"==typeof t.selectionStart)return t.selectionStart===t.selectionEnd&&(e?0===t.selectionStart:t.value.length===t.selectionStart);if(!t.isContentEditable)return!0;const{ownerDocument:r}=t,{defaultView:o}=r,i=o.getSelection();if(!i||!i.rangeCount)return!1;const a=i.getRangeAt(0),s=a.cloneRange(),c=function(t){const{anchorNode:e,focusNode:n,anchorOffset:r,focusOffset:o}=t,i=e.compareDocumentPosition(n);return!(i&e.DOCUMENT_POSITION_PRECEDING)&&(!!(i&e.DOCUMENT_POSITION_FOLLOWING)||0!==i||r<=o)}(i),u=i.isCollapsed;u||s.collapse(!c);const l=p(s),d=p(a);if(!l||!d)return!1;const f=function(t){const e=Array.from(t.getClientRects());if(!e.length)return;const n=Math.min(...e.map((({top:t})=>t)));return Math.max(...e.map((({bottom:t})=>t)))-n}(a);if(!u&&f&&f>l.height&&c===e)return!1;const m=D(t)?!e:e,h=t.getBoundingClientRect(),g=m?h.left+1:h.right-1,b=e?h.top+1:h.bottom-1,N=L(t,e,(()=>P(r,g,b,t)));if(!N)return!1;const y=p(N);if(!y)return!1;const E=e?"top":"bottom",C=m?"left":"right",w=y[E]-d[E],T=y[C]-l[C],v=Math.abs(w)<=1,S=Math.abs(T)<=1;return n?v:v&&S}function x(t,e){return M(t,e)}t.r(r),t.d(r,{find:()=>f,findNext:()=>h,findPrevious:()=>m,isTabbableIndex:()=>s});const I=window.wp.deprecated;var H=t.n(I);function _(t){return H()("wp.dom.isNumberInput",{since:"6.1",version:"6.5"}),N(t)&&"number"===t.type&&!isNaN(t.valueAsNumber)}function F(t,e){return M(t,e,!0)}function V(t,e,n){if(!t)return;if(t.focus(),O(t)){if("number"!=typeof t.selectionStart)return;return void(e?(t.selectionStart=t.value.length,t.selectionEnd=t.value.length):(t.selectionStart=0,t.selectionEnd=0))}if(!t.isContentEditable)return;const r=L(t,e,(()=>function(t,e,n){const{ownerDocument:r}=t,o=D(t)?!e:e,i=t.getBoundingClientRect();return void 0===n?n=e?i.right-1:i.left+1:n<=i.left?n=i.left+1:n>=i.right&&(n=i.right-1),P(r,n,o?i.bottom-1:i.top+1,t)}(t,e,n)));if(!r)return;const{ownerDocument:o}=t,{defaultView:i}=o,a=i.getSelection();a.removeAllRanges(),a.addRange(r)}function B(t,e){return V(t,e,void 0)}function j(t,e,n){return V(t,e,n?.left)}function U(t,e){e.parentNode,e.parentNode.insertBefore(t,e.nextSibling)}function z(t){t.parentNode,t.parentNode.removeChild(t)}function q(t,e){t.parentNode,U(e,t.parentNode),z(t)}function W(t){const e=t.parentNode;for(;t.firstChild;)e.insertBefore(t.firstChild,t);e.removeChild(t)}function k(t,e){const n=t.ownerDocument.createElement(e);for(;t.firstChild;)n.appendChild(t.firstChild);return t.parentNode,t.parentNode.replaceChild(n,t),n}function X(t,e){e.parentNode,e.parentNode.insertBefore(t,e),t.appendChild(e)}function G(t){const{body:e}=document.implementation.createHTMLDocument("");e.innerHTML=t;const n=e.getElementsByTagName("*");let r=n.length;for(;r--;){const t=n[r];if("SCRIPT"===t.tagName)z(t);else{let e=t.attributes.length;for(;e--;){const{name:n}=t.attributes[e];n.startsWith("on")&&t.removeAttribute(n)}}}return e.innerHTML}function Y(t){t=G(t);const e=document.implementation.createHTMLDocument("");return e.body.innerHTML=t,e.body.textContent||""}function $(t){switch(t.nodeType){case t.TEXT_NODE:return/^[ \f\n\r\t\v\u00a0]*$/.test(t.nodeValue||"");case t.ELEMENT_NODE:return!t.hasAttributes()&&(!t.hasChildNodes()||Array.from(t.childNodes).every($));default:return!0}}const J={strong:{},em:{},s:{},del:{},ins:{},a:{attributes:["href","target","rel","id"]},code:{},abbr:{attributes:["title"]},sub:{},sup:{},br:{},small:{},q:{attributes:["cite"]},dfn:{attributes:["title"]},data:{attributes:["value"]},time:{attributes:["datetime"]},var:{},samp:{},kbd:{},i:{},b:{},u:{},mark:{},ruby:{},rt:{},rp:{},bdi:{attributes:["dir"]},bdo:{attributes:["dir"]},wbr:{},"#text":{}},K=["#text","br"];Object.keys(J).filter((t=>!K.includes(t))).forEach((t=>{const{[t]:e,...n}=J;J[t].children=n}));const Q={...J,audio:{attributes:["src","preload","autoplay","mediagroup","loop","muted"]},canvas:{attributes:["width","height"]},embed:{attributes:["src","type","width","height"]},img:{attributes:["alt","src","srcset","usemap","ismap","width","height"]},object:{attributes:["data","type","name","usemap","form","width","height"]},video:{attributes:["src","poster","preload","playsinline","autoplay","mediagroup","loop","muted","controls","width","height"]}};function Z(t){if("paste"!==t)return Q;const{u:e,abbr:n,data:r,time:o,wbr:i,bdi:a,bdo:s,...c}={...Q,ins:{children:Q.ins.children},del:{children:Q.del.children}};return c}function tt(t){const e=t.nodeName.toLowerCase();return Z().hasOwnProperty(e)||"span"===e}function et(t){const e=t.nodeName.toLowerCase();return J.hasOwnProperty(e)||"span"===e}const nt=()=>{};function rt(t,e,n,r){Array.from(t).forEach((t=>{const o=t.nodeName.toLowerCase();if(!n.hasOwnProperty(o)||n[o].isMatch&&!n[o].isMatch?.(t))rt(t.childNodes,e,n,r),r&&!tt(t)&&t.nextElementSibling&&U(e.createElement("br"),t),W(t);else if(function(t){return!!t&&t.nodeType===t.ELEMENT_NODE}(t)){const{attributes:i=[],classes:a=[],children:s,require:c=[],allowEmpty:u}=n[o];if(s&&!u&&$(t))return void z(t);if(t.hasAttributes()&&(Array.from(t.attributes).forEach((({name:e})=>{"class"===e||i.includes(e)||t.removeAttribute(e)})),t.classList&&t.classList.length)){const e=a.map((t=>"string"==typeof t?e=>e===t:t instanceof RegExp?e=>t.test(e):nt));Array.from(t.classList).forEach((n=>{e.some((t=>t(n)))||t.classList.remove(n)})),t.classList.length||t.removeAttribute("class")}if(t.hasChildNodes()){if("*"===s)return;if(s)c.length&&!t.querySelector(c.join(","))?(rt(t.childNodes,e,n,r),W(t)):t.parentNode&&"BODY"===t.parentNode.nodeName&&tt(t)?(rt(t.childNodes,e,n,r),Array.from(t.childNodes).some((t=>!tt(t)))&&W(t)):rt(t.childNodes,e,s,r);else for(;t.firstChild;)z(t.firstChild)}}}))}function ot(t,e,n){const r=document.implementation.createHTMLDocument("");return r.body.innerHTML=t,rt(r.body.childNodes,r,e,n),r.body.innerHTML}function it(t){const e=Array.from(t.files);return Array.from(t.items).forEach((t=>{const n=t.getAsFile();n&&!e.find((({name:t,type:e,size:r})=>t===n.name&&e===n.type&&r===n.size))&&e.push(n)})),e}const at={focusable:n,tabbable:r};(window.wp=window.wp||{}).dom=e})();
//# sourceMappingURL=index.min.js.map