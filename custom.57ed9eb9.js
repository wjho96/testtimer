parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sWee":[function(require,module,exports) {
console.log("Hello page!!");var e=document.querySelector("#today"),t=document.querySelector("#clock"),a=new Date;console.log(a),console.log(a.toDateString());var c=a.getFullYear(),o=a.getMonth()+1,n=a.getDate(),r=a.getDay(),s=" ";switch(console.log(a.getHours()),r){case 0:s="일요일";break;case 1:s="월요일";break;case 2:s="화요일";break;case 3:s="수요일";break;case 4:s="목요일";break;case 5:s="금요일";break;case 6:s="토요일"}e.innerHTML="".concat(c,"년 ").concat(o,"월 ").concat(n,"일 <span style='font-weight=700';>").concat(s,"</span>");var l=function(){var e=new Date,a=e.getHours(),c=e.getMinutes(),o=e.getSeconds(),n="AM";0==a?a=12:a>12&&(a-=12,n="PM"),a=a<10?"0"+a:a,c=c<10?"0"+c:c,o=o<10?"0"+o:o,t.innerText="\n        ".concat(n," ").concat(a," : ").concat(c," : ").concat(o,"\n    ")};setInterval(l,1e3);
},{}]},{},["sWee"], null)
//# sourceMappingURL=custom.57ed9eb9.js.map