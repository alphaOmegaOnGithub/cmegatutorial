try { "remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),__ez.screxqueue=function(){var e=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,n=/([^\s,]+)/g;function t(t,i){var o=t.toString().replace(e,""),d=o.slice(o.indexOf("(")+1,o.indexOf(")")).match(n);null===d&&(d=[]);for(var r=0;r<d.length;r++)0!==i.indexOf("jQuery-document-ready")||0!==r||1!==d[r].length||void 0===window.jQuery||void 0!==window[d[r]]&&void 0!==window[d[r]].fn&&void 0!==window[d[r]].fn.jquery?0===i.lastIndexOf("window-load-listener",0)||0===i.lastIndexOf("dom-content-loaded-listener",0)||0===i.lastIndexOf("windowOnLoad",0)||0===i.lastIndexOf("jQuery-window-load",0)?d[r]=new CustomEvent("load"):d[r]=window[d[r]]:d[r]=window.jQuery;return d}var i=0,o=0,d=[],r=[],a="",l=["deferLoad","documentReady","documentReady2","documentReady3","domContentLoaded","windowLoad","windowOnLoad"],c=[],s=function(e,n,i,o,d,r){var a=this;this.el=e,this.name=n,this.funcName=i,this.parameters=null===o?null:o instanceof Array?o:[o],this.isBlock=d,this.blockedBy=r,this.isError=!1,this.isComplete=!1,this.isInitialized=!1,this.process=function(){if(p("... func = "+n),a.isInitialized=!0,a.isComplete=!0,""!==a.funcName&&-1===l.indexOf(a.funcName))if(p("... func.apply: "+n),"function"==typeof a.funcName)a.funcName.apply(window,t(a.funcName,a.name));else{var e=a.funcName.split("."),i=null;e.length>3||(i=3===e.length?window[e[0]][e[1]][e[2]]:2===e.length?window[e[0]][e[1]]:window[a.funcName]),null!=i&&i.apply(window,this.parameters)}else"windowOnLoad"===a.funcName&&"ezoicSSOnLoad"in window&&null!=window.ezoicSSOnLoad?window.ezoicSSOnLoad(t(a.funcName,a.funcName)):"domContentLoaded"===a.funcName?("undefined"!=typeof jQuery&&jQuery(document).trigger("ready"),f("EzoicDOMContentLoaded")):"windowLoad"===a.funcName&&(f("Ezoicload"),"undefined"!=typeof jQuery&&jQuery(window).trigger("load"));!0===a.isBlock?(p("----- F'D: "+a.name),y()):w()}},u=function(e,n,t,i,o,d,r){var a=this;this.el=e,this.name=n,this.path=t,this.async=d,this.defer=r,this.isBlock=i,this.blockedBy=o,this.isInitialized=!1,this.isError=!1,this.isComplete=!1,this.process=function(){a.isInitialized=!0,p("... file = "+n);var e=document.createElement("script");if(e.src=t,a.el.hasAttributes())for(var i=a.el.attributes,o=i.length-1;o>=0;o--)(["id","class","defer"].indexOf(i[o].name)>-1||0===i[o].name.indexOf("data-"))&&e.setAttribute(i[o].name,i[o].value);if(!0===d?e.async=!0:!0===r&&(e.defer=!0),e.onerror=function(){p("----- ERR'D: "+a.name),a.isError=!0,a.isComplete=!0,!0===a.isBlock?y():w()},e.onreadystatechange=e.onload=function(){var n=e.readyState;p("----- F'D: "+a.name),n&&!/loaded|complete/.test(n)||(a.isComplete=!0,!0===a.isBlock?y():w())},null!==a.el&&void 0!==a.el.parentNode&&void 0!==a.el.nextSibling){var l=document.createAttribute("ez-screx");l.value="true",e.setAttributeNode(l),a.el.parentNode.insertBefore(e,a.el.nextSibling),a.el.parentNode.removeChild(a.el)}else document.getElementsByTagName("head")[0].appendChild(e)}};function f(e){var n=function(){window.dispatchEvent(new CustomEvent(e))};"Ezoicload"==e?1!=window.__ez__w_load&&"function"==typeof window.__ez__ael?window.__ez__ael("load",n):n():"EzoicDOMContentLoaded"==e&&(1!=document.__ez__w_dom&&"function"==typeof document.__ez__ael?document.__ez__ael("DOMContentLoaded",n):n()),p("firing event: "+e)}function m(e,n){if(e.blockedBy instanceof Array)for(var t=0;t<e.blockedBy.length;t++){var i=e.blockedBy[t];if(!1===d.hasOwnProperty(i))return p(e.name+" blocked = "+i),!0;if(!1===d[i].isComplete)return p(e.name+" blocked = "+i),!0;if(!0===n&&0===a.indexOf("documentReady")){p(e.name+" move to next ready");var o=e.blockedBy.indexOf("documentReady");switch(-1!==o&&e.blockedBy.splice(o,1),a){case"documentReady":e.blockedBy.push("documentReady2");break;case"documentReady2":e.blockedBy.push("documentReady3")}return!0}}return!1}function w(){for(var e in r)if(!1!==r.hasOwnProperty(e)){var n=r[e],t="";if(n.blockedBy instanceof Array&&n.blockedBy.length>0&&-1!==l.indexOf(n.blockedBy[0])&&(t=n.blockedBy[0]),!1===n.isComplete&&!1===n.isError&&t===a)return!1}-1===c.indexOf(a)&&c.push(a);var i=a;for(e=0;e<l.length;e++)if(-1===c.indexOf(l[e])){a=l[e];break}if(a===i)return!0;var o=""==i?[]:[i];return __ez.screxqueue.addFunc(null,a,a,[],!0,o),p("screx done for state: "+(""===i?"init":i)),p("screx state now: "+a),y(),!0}function p(e){var n=window.location.href,t=new RegExp("[?&]ezscrexq=([^&#]*)","i").exec(n);"1"===(t?t[1]:null)&&console.debug(e)}function y(){++i>200||(p("let's go screx"),window,function(e){for(var n in e)if(!1!==e.hasOwnProperty(n)){var t=e[n];!0===t.isComplete||m(t)||!0===t.isInitialized||!0===t.isError?!0===t.isError?p(t.name+": error"):!0===t.isComplete?p(t.name+": complete already"):!0===t.isInitialized&&p(t.name+": initialized already"):t.process()}}(r,r.length),w())}return{addFile:function(e,n,t,i,o,a,l){var c=new u(e,n,t,i,o,a,l);p(n+" ...  FILE! SCREX"),r[n]=c,d[n]=c},addFunc:function(e,n,t,i,a,u){-1===l.indexOf(n)&&(n=n+"_"+o++);var f=new s(e,n,t,i,a,u);p(n+" ...  FUNCTION! SCREX"),r[n]=f,d[n]=f,c.length>0&&-1===l.indexOf(n)&&function(e,n){!0!==m(e,!0)&&e.process()}(f)},sjql:function(e){this.IsJqLdBfWnd=e},sjsdl:function(e){this.IsJqLdBfDCL=e},items:d,init:function(){p("Init Screx!"),y()}}}(),window.addEventListener("load",(function(){"undefined"!=typeof jQuery&&__ez.screxqueue.sjql(!0)})),document.addEventListener("DOMContentLoaded",(function(){"undefined"!=typeof jQuery&&__ez.screxqueue.sjsdl(!0)})),__ez.script.inline=function(e){var n=document.createElement("script");void 0!==e.id&&null!==e.id&&""!==e.id&&(n.id=e.id);var t=document.createAttribute("ez-screx");t.value="true",n.setAttributeNode(t);var i=document.createTextNode(e.innerHTML);n.appendChild(i),void 0!==e.parentNode&&void 0!==e.nextSibling?(e.parentNode.insertBefore(n,e.nextSibling),e.remove()):(document.body.appendChild(n),e.remove())};} catch(err) {var hREED = function(er) {return function() {reportEzError(er, "/tardisrocinante/screx.js")}}; typeof reportEzError==="function"?hREED(err):window.addEventListener('reportEzErrorDefined',hREED(err), {once: true}); console.error(err);}