(this["webpackJsonpsero-skit"]=this["webpackJsonpsero-skit"]||[]).push([[42],{506:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",(function(){return p}));var o=n(2),r=n(14),i=new WeakMap,a=function(t,e,n,o){void 0===o&&(o=0),i.has(t)!==n&&(n?u(t,e,o):s(t,e))},c=function(t){return t===t.getRootNode().activeElement},u=function(t,e,n){var o=e.parentNode,r=e.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),i.set(t,r);var a="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d("+a+"px,"+n+"px,0) scale(0)"},s=function(t,e){var n=i.get(t);n&&(i.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""},l="input, textarea, [no-blur], [contenteditable]",d=function(t,e,n,o){var r=t.top,i=t.bottom,a=e.top,c=a+15,u=.75*Math.min(e.bottom,o-n)-i,s=c-r,l=Math.round(u<0?-u:s>0?-s:0),d=Math.min(l,r-a),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(r-c)}},f=function(t,e,n,i,c){return Object(o.a)(void 0,void 0,void 0,(function(){var u,s,l,f,v,m;return Object(o.c)(this,(function(p){switch(p.label){case 0:return n||i?(u=function(t,e,n){var o=t.closest("ion-item,[ion-item]")||t;return d(o.getBoundingClientRect(),e.getBoundingClientRect(),n,t.ownerDocument.defaultView.innerHeight)}(t,n||i,c),n&&Math.abs(u.scrollAmount)<4?(e.focus(),[2]):(a(t,e,!0,u.inputSafeY),e.focus(),Object(r.q)((function(){return t.click()})),"undefined"===typeof window?[3,3]:(l=function(){return Object(o.a)(void 0,void 0,void 0,(function(){return Object(o.c)(this,(function(o){switch(o.label){case 0:return void 0!==s&&clearTimeout(s),window.removeEventListener("ionKeyboardDidShow",f),window.removeEventListener("ionKeyboardDidShow",l),n?[4,n.scrollByPoint(0,u.scrollAmount,u.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return a(t,e,!1,u.inputSafeY),e.focus(),[2]}}))}))},f=function(){window.removeEventListener("ionKeyboardDidShow",f),window.addEventListener("ionKeyboardDidShow",l)},n?[4,n.getScrollElement()]:[3,2]))):[2];case 1:if(v=p.sent(),m=v.scrollHeight-v.clientHeight,u.scrollAmount>m-v.scrollTop)return"password"===e.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",f)):window.addEventListener("ionKeyboardDidShow",l),s=setTimeout(l,1e3),[2];p.label=2;case 2:l(),p.label=3;case 3:return[2]}}))}))},v=function(t,e,n){if(e&&n){var o=e.x-n.x,r=e.y-n.y;return o*o+r*r>t*t}return!1},m=function(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)&&(!t.parentElement||!t.parentElement.parentElement||"ION-SEARCHBAR"!==t.parentElement.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var o=n.$ionPaddingTimer;o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},p=function(t){var e=document,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),u=t.getBoolean("hideCaretOnScroll",!0),s=t.getBoolean("inputBlurring",!0),d=t.getBoolean("scrollPadding",!0),p=Array.from(e.querySelectorAll("ion-input, ion-textarea")),b=new WeakMap,h=new WeakMap,w=function(t){return Object(o.a)(void 0,void 0,void 0,(function(){var e,s,l,d,m;return Object(o.c)(this,(function(o){switch(o.label){case 0:return[4,new Promise((function(e){return Object(r.c)(t,e)}))];case 1:return o.sent(),e=t.shadowRoot||t,s=e.querySelector("input")||e.querySelector("textarea"),l=t.closest("ion-content"),d=l?null:t.closest("ion-footer"),s?(l&&u&&!b.has(t)&&(m=function(t,e,n){if(!n||!e)return function(){};var o=function(n){c(e)&&a(t,e,n)},i=function(){return a(t,e,!1)},u=function(){return o(!0)},s=function(){return o(!1)};return Object(r.a)(n,"ionScrollStart",u),Object(r.a)(n,"ionScrollEnd",s),e.addEventListener("blur",i),function(){Object(r.b)(n,"ionScrollStart",u),Object(r.b)(n,"ionScrollEnd",s),e.addEventListener("ionBlur",i)}}(t,s,l),b.set(t,m)),(l||d)&&i&&!h.has(t)&&(m=function(t,e,n,o,i){var a,u=function(t){a=Object(r.p)(t)},s=function(u){if(a){var s=Object(r.p)(u);v(6,a,s)||c(e)||(u.stopPropagation(),f(t,e,n,o,i))}};return t.addEventListener("touchstart",u,!0),t.addEventListener("touchend",s,!0),function(){t.removeEventListener("touchstart",u,!0),t.removeEventListener("touchend",s,!0)}}(t,s,l,d,n),h.set(t,m)),[2]):[2]}}))}))};s&&function(){var t=!0,e=!1,n=document,o=function(){e=!0},i=function(){t=!0},a=function(o){if(e)e=!1;else{var r=n.activeElement;if(r&&!r.matches(l)){var i=o.target;i!==r&&(i.matches(l)||i.closest(l)||(t=!1,setTimeout((function(){t||r.blur()}),50)))}}};Object(r.a)(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",a,!1)}(),d&&function(t){var e=document,n=function(e){m(e.target,t)},o=function(t){m(t.target,0)};e.addEventListener("focusin",n),e.addEventListener("focusout",o)}(n);for(var E=0,g=p;E<g.length;E++){var y=g[E];w(y)}e.addEventListener("ionInputDidLoad",(function(t){w(t.detail)})),e.addEventListener("ionInputDidUnload",(function(t){!function(t){var e;u&&((e=b.get(t))&&e(),b.delete(t));i&&((e=h.get(t))&&e(),h.delete(t))}(t.detail)}))}}}]);