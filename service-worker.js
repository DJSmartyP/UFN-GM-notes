const CACHE = "ufn-gm-shell-v14";
const SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=14",
  "./app.js?v=14",
  "./data/missions.js?v=14",
  "./data/db-pages.js?v=14",
  "./manifest.webmanifest",
  "./assets/ufn-gm-mark.svg",
  "./assets/icons/ufn-gm-db-192.png",
  "./assets/icons/ufn-gm-db-512.png",
  "./assets/icons/ufn-gm-db-maskable-192.png",
  "./assets/icons/ufn-gm-db-maskable-512.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/icons/favicon-64.png",
  "./assets/icons/favicon.ico"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  const sameOrigin = url.origin === self.location.origin;
  const liveFile = sameOrigin && (
    url.pathname.endsWith("/index.html") ||
    url.pathname.endsWith("/app.js") ||
    url.pathname.endsWith("/styles.css") ||
    url.pathname.endsWith("/data/missions.js") ||
    url.pathname.endsWith("/data/db-pages.js") ||
    url.pathname.endsWith("/manifest.webmanifest") ||
    url.pathname.endsWith("/")
  );

  if (liveFile) {
    event.respondWith(
      fetch(event.request, { cache: "no-store" })
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }))
  );
});
