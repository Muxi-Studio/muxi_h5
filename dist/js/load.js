!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="../",n(n.s=2)}({10:function(e,t){},2:function(e,t,n){"use strict";n.r(t);n(10);let o=["bird.jpg","tunnel.jpeg","androidHouse.png","backendHouse.png","designHouse.png"],r=0;window.onload=(()=>{for(let e=0;e<o.length;e++){let t=new Image;t.src="../img/"+o[e],t.onload=function(){let e=(++r/o.length*100).toFixed(0);setTimeout(()=>{let t=document.getElementsByClassName("cover")[0];document.getElementsByClassName("schedule")[0].innerHTML=e+" %",t.style.width=e+"%",100==e&&setTimeout(function(){window.location.href="../move.html"},300)},30*r)}}})}});