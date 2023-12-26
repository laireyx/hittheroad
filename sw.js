var u=Object.defineProperty;var d=(s,e,t)=>e in s?u(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var h=(s,e,t)=>(d(s,typeof e!="symbol"?e+"":e,t),t);const n=class n{constructor(){h(this,"responseCache",null);this.init()}init(){self.addEventListener("activate",e=>{const t=caches.open(n.DefaultCacheName).then(a=>this.responseCache=a);e.waitUntil(t)}),self.addEventListener("fetch",e=>e.respondWith(this.handleFetch(e)))}checkTTL(e){var r,o;const t=e.headers.get("Date"),a=t?new Date(t):new Date,c=((o=(r=e.headers.get("Cache-Control"))==null?void 0:r.match(/max-age=(\d+)/i))==null?void 0:o[1])??"0",l=a.getTime()+parseInt(c)*1e3;return Date.now()-l<=5e3}async cacheRequest(e,t){if(!t||e.method!=="GET"||t.status>=400)return!1;await caches.open(n.DefaultCacheName).then(a=>a.put(e,t.clone()))}async handleCache(e){var a,c;const t=await((a=this.responseCache)==null?void 0:a.match(e.request));if(t){if(!navigator.onLine||this.checkTTL(t))return t;(c=this.responseCache)==null||c.delete(e.request)}}async handleFetch(e){const t=await this.handleCache(e);if(t)return t;let a;return a=await fetch(e.request).catch(c=>void console.error(c))??new Response(null,{status:500,statusText:"Fetch Error"}),await this.cacheRequest(e.request,a),a}};h(n,"DefaultCacheName","cache_default");let i=n;new i;