parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tu0b":[function(require,module,exports) {
var e=document.querySelector("#grayscale"),t=document.querySelector("#contrast"),a=document.querySelector("#brightness"),n=document.querySelector("#sepia"),c=document.querySelector("#saturate"),s=document.querySelector("#reset"),r=document.getElementById("image"),i=document.getElementById("image2"),l={grayscale:0,contrast:100,brightness:100,sepia:0,saturate:100},u={grayscale:0,contrast:100,brightness:100,sepia:0,saturate:100};function o(){s.disabled=!1,r.style.filter="\n    grayscale(".concat(e.value,"%)\n    contrast(").concat(t.value,"%)\n    brightness(").concat(a.value,"%)\n    sepia(").concat(n.value,"%)\n    saturate(").concat(c.value,"%)\n  ")}function d(){s.disabled=!1,i.style.filter="\n    grayscale(".concat(e.value,"%)\n    contrast(").concat(t.value,"%)\n    brightness(").concat(a.value,"%)\n    sepia(").concat(n.value,"%)\n    saturate(").concat(c.value,"%)\n  ")}function v(){console.log("click"),r.style.filter="\n    grayscale(".concat(l.grayscale,"%)\n    contrast(").concat(l.contrast,"%)\n    brightness(").concat(l.brightness,"%)\n    sepia(").concat(l.sepia,"%)\n    saturate(").concat(l.saturate,"%)\n  "),e.value=l.grayscale,t.value=l.contrast,a.value=l.brightness,n.value=l.sepia,c.value=l.saturate,s.disabled=!0}function g(){console.log("click"),i.style.filter="\n    grayscale(".concat(u.grayscale,"%)\n    contrast(").concat(u.contrast,"%)\n    brightness(").concat(u.brightness,"%)\n    sepia(").concat(u.sepia,"%)\n    saturate(").concat(u.saturate,"%)\n  "),e.value=u.grayscale,t.value=u.contrast,a.value=u.brightness,n.value=u.sepia,c.value=u.saturate,s.disabled=!0}e.addEventListener("input",o),t.addEventListener("input",o),a.addEventListener("input",o),n.addEventListener("input",o),c.addEventListener("input",o),s.addEventListener("click",v),e.addEventListener("input",d),t.addEventListener("input",d),a.addEventListener("input",d),n.addEventListener("input",d),c.addEventListener("input",d),s.addEventListener("click",g);
},{}]},{},["tu0b"], null)
//# sourceMappingURL=/filtres.20c21e3b.js.map