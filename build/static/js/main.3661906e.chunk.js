(this["webpackJsonppwa-demo-monday"]=this["webpackJsonppwa-demo-monday"]||[]).push([[0],[,,,function(e,n,o){e.exports=o(11)},,,,,function(e,n,o){},function(e,n,o){},function(e,n,o){},function(e,n,o){"use strict";o.r(n);var t=o(0),a=o.n(t),r=o(2),i=o.n(r),c=(o(8),o(9),o(10),function(){return a.a.createElement("div",{className:"container"},a.a.createElement("img",{alt:"demo-monday-icon",src:"./icons/android-icon-192x192.png"}),a.a.createElement("span",null,"this is the first part of monday demo app as progressive web app example"))});var s=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(c,null)))},l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");l?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){alert("Sem conex\xe3o com a internet o app est\xe1 no modo off line")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(n,e)}))}}()}],[[3,1,2]]]);
//# sourceMappingURL=main.3661906e.chunk.js.map