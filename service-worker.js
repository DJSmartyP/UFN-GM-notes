const CACHE = "ufn-gm-shell-v2";
const FILES = ["./", "./index.html", "./styles.css", "./app.js", "./data/missions.js", "./manifest.webmanifest", "./assets/ufn-gm-mark.svg", "./assets/missions/narrow-gate.png", "./assets/missions/among-ghosts.png", "./assets/missions/groundhog.png", "./assets/missions/bright-minds.png", "./assets/missions/thin-ice.png", "./assets/missions/common-ground.png", "./assets/missions/counterfeit.png", "./assets/missions/evaluation.png", "./assets/missions/sentience.png", "./assets/missions/patchwork.png", "./assets/missions/resonance.png", "./assets/missions/continuum.png"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }))
  );
});
