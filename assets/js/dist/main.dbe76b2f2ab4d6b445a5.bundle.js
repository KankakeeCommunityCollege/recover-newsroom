!function(){"use strict";var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return e+"."+o.h()+".bundle.js"},o.miniCssF=function(e){},o.h=function(){return"dbe76b2f2ab4d6b445a5"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="kcc-newsroom:",o.l=function(n,r,i,u){if(e[n])e[n].push(r);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var f=l[d];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[r];var s=function(t,r){a.onerror=a.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),function(){var e={792:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=i);var u=o.p+o.u(t),a=new Error;o.l(u,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}}),"chunk-"+t,t)}};var t=function(t,n){var r,i,u=n[0],a=n[1],c=n[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);c&&c(o)}for(t&&t(n);l<u.length;l++)i=u[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunkkcc_newsroom=self.webpackChunkkcc_newsroom||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),window.addEventListener("load",(()=>{document.getElementById("todaysDate")&&o.e(333).then(o.bind(o,333)).then((e=>{let{default:t}=e;return t()})),document.getElementById("featureHover")&&(o.e(770).then(o.bind(o,770)).then((e=>{let{default:t}=e;return t()})),o.e(298).then(o.bind(o,298)).then((e=>{let{default:t}=e;return t()}))),document.getElementById("yt_list")&&o.e(575).then(o.bind(o,575)).then((e=>{let{default:t}=e;return t()})),document.querySelector("a[data-video]")&&o.e(426).then(o.bind(o,426)).then((e=>{let{default:t}=e;return t()}))}))}();