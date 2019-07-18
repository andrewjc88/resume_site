"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","89bf50c603b4565bb8f8e6db78487b71"],["/static/css/main.cf056c51.css","156e2db48e2c812ba41249c5537bfba8"],["/static/js/main.e74d4c0f.js","484fa5d327e9030dde40df6ffdf5a0c8"],["/static/media/Andrew Cornell UX Engineer Resume.d4b80ab2.pdf","d4b80ab2c3eadb37fda6837f1a42303a"],["/static/media/ClassicArcade.53e7d2f0.jpg","53e7d2f0babe806cdb8b6b2e67d25446"],["/static/media/DealQuest.9a5e1518.jpg","9a5e1518fac4aab65bb4ea44cb2980d2"],["/static/media/FeedReader.d42a4e07.jpg","d42a4e07f2ae2485d77292d362c371f5"],["/static/media/MyReads.602326f6.jpg","602326f6b66bd12e39c51b91a618a7a2"],["/static/media/charles.151b732f.jpg","151b732ff4012fcb56bc7eec881b6d01"],["/static/media/chris.1fc699ec.jpg","1fc699eca34b71ca492ae1fb6d6edad9"],["/static/media/gulp.2e43f3d2.png","2e43f3d2199f77539297d703425c4e16"],["/static/media/jQuery_logo.450207bc.jpeg","450207bc63d232e3dfe2066538ea0584"],["/static/media/jQuery_logo.9999c1a8.gif","9999c1a8c347b81c5cb5df967664c4c3"],["/static/media/kevin.76c07845.jpg","76c078452c2f202a3d3f714e81147f0f"],["/static/media/logo-redux.272fbbce.png","272fbbcef1d11793f43ef959ffad4abf"],["/static/media/logo.7cdc7268.png","7cdc72685c741d58126520fc6447b07c"],["/static/media/maregroup.0b71cfbb.png","0b71cfbbe39be81f4d2aa1d60efcb35f"],["/static/media/me.69520594.jpg","695205940c15dd5900d2fe45fa85a612"],["/static/media/nodejs.f8dab57d.png","f8dab57d048fabd69ea16c67e1615b86"],["/static/media/pattern.38430e30.svg","38430e30272e274ef016d93610985ac0"],["/static/media/photoshop-cc.913f49c4.png","913f49c40f78ba24311eb72e4f0d567d"],["/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});