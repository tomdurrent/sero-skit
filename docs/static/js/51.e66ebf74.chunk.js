(this["webpackJsonpsero-skit"]=this["webpackJsonpsero-skit"]||[]).push([[51],{507:function(t,e,n){"use strict";n.r(e),n.d(e,"KEYBOARD_DID_CLOSE",(function(){return r})),n.d(e,"KEYBOARD_DID_OPEN",(function(){return i})),n.d(e,"copyVisualViewport",(function(){return D})),n.d(e,"keyboardDidClose",(function(){return g})),n.d(e,"keyboardDidOpen",(function(){return p})),n.d(e,"keyboardDidResize",(function(){return b})),n.d(e,"resetKeyboardAssist",(function(){return s})),n.d(e,"setKeyboardClose",(function(){return h})),n.d(e,"setKeyboardOpen",(function(){return c})),n.d(e,"startKeyboardAssist",(function(){return a})),n.d(e,"trackViewportChanges",(function(){return y}));var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},u={},d=!1,s=function(){o={},u={},d=!1},a=function(t){f(t),t.visualViewport&&(u=D(t.visualViewport),t.visualViewport.onresize=function(){y(t),p()||b(t)?c(t):g(t)&&h(t)})},f=function(t){t.addEventListener("keyboardDidShow",(function(e){return c(t,e)})),t.addEventListener("keyboardDidHide",(function(){return h(t)}))},c=function(t,e){w(t,e),d=!0},h=function(t){v(t),d=!1},p=function(){var t=(o.height-u.height)*u.scale;return!d&&o.width===u.width&&t>150},b=function(t){return d&&!g(t)},g=function(t){return d&&u.height===t.innerHeight},w=function(t,e){var n=e?e.keyboardHeight:t.innerHeight-u.height,r=new CustomEvent(i,{detail:{keyboardHeight:n}});t.dispatchEvent(r)},v=function(t){var e=new CustomEvent(r);t.dispatchEvent(e)},y=function(t){o=Object.assign({},u),u=D(t.visualViewport)},D=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}]);