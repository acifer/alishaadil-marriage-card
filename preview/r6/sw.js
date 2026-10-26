/* keeps the shell, the shared fonts and the sealed pieces for instant and offline repeat visits */
const V='aa-c53c6f54a5';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('aa-')&&k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url); if(e.request.method!=='GET'||u.origin!==location.origin) return;
  const immutable=/\/(a|p)\/[^/]+\.[0-9a-f]{12}\.|\/p\/[0-9a-f]{12}\./.test(u.pathname);
  if(immutable){ e.respondWith(caches.open(V).then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(n=>{if(n.ok)c.put(e.request,n.clone());return n})))); return; }
  if(e.request.mode==='navigate'||u.pathname.endsWith('/')||u.pathname.endsWith('.html')){
    e.respondWith(fetch(e.request,{cache:'no-cache'}).then(n=>{ if(n.ok){const cp=n.clone(); caches.open(V).then(c=>c.put(e.request,cp));} return n; }).catch(()=>caches.open(V).then(c=>c.match(e.request,{ignoreSearch:true}))));
  }
});
