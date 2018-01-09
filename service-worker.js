"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","a18a02d864152769faea89a194cd5964"],["/static/css/main.ea355879.css","4d3deb76432dc47d516f379d26a420ae"],["/static/js/main.1c8a0735.js","c5aac168dc6079513917ab5508e68b04"],["/static/media/DealQuest.52892014.png","52892014e353c6be147c270235feac2e"],["/static/media/MyReads.b6a50aa1.png","b6a50aa1c184e43786677df69ed227cc"],["/static/media/Resume.704d9d13.pdf","704d9d1310fa14caf8af4439654fcb13"],["/static/media/code.a48b5ed9.jpg","a48b5ed9a01ffd223f188bbe2cc440f1"],["/static/media/downArrow.62f5e4c0.svg","62f5e4c0472cbc8055492d19bfd927cd"],["/static/media/gulp.2e43f3d2.png","2e43f3d2199f77539297d703425c4e16"],["/static/media/gulp.5159ea36.svg","5159ea36523919e57ee1b46bde9988cd"],["/static/media/jQuery_logo.450207bc.jpeg","450207bc63d232e3dfe2066538ea0584"],["/static/media/jQuery_logo.9999c1a8.gif","9999c1a8c347b81c5cb5df967664c4c3"],["/static/media/logo.0a51cc3e.png","0a51cc3ec5d1c4287c7472c62f4163e4"],["/static/media/me.5b4e9924.jpg","5b4e9924133217e0c5d894853447e171"],["/static/media/pattern.7dc5a212.svg","7dc5a212ca1792ea6699f0930e2f2206"],["/static/media/photoshop-cc.913f49c4.png","913f49c40f78ba24311eb72e4f0d567d"],["/static/media/react_logo.8e2edadc.png","8e2edadce5a936fbe711cf15f52caf36"],["/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});