parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MEcY":[function(require,module,exports) {
var e=document.querySelectorAll(".popup-link"),t=document.querySelector("body"),n=!0,o=800;if(e.length>0)for(var c=function(t){var n=e[t];n.addEventListener("click",function(e){var t=n.getAttribute("href").replace("#","");i(document.getElementById(t)),e.preventDefault()})},r=0;r<e.length;r++)c(r);var l=document.querySelectorAll(".close-popup");if(l.length>0)for(var u=function(e){var t=l[e];t.addEventListener("click",function(e){a(t.closest(".popup")),e.preventDefault()})},p=0;p<l.length;p++)u(p);function i(e){if(e&&n){var t=document.querySelector(".popup.open");t&&a(t,!1),e.classList.add("open"),e.addEventListener("click",function(e){e.target.closest(".popup_content")||a(e.target.closest(".popup"))})}}function a(e){!(arguments.length>1&&void 0!==arguments[1])||arguments[1];n&&e.classList.remove("open")}
},{}]},{},["MEcY"], null)
//# sourceMappingURL=/popup.10314091.js.map