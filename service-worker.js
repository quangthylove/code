const CACHE_NAME = 'auto-save-app-cache-v1';
const urlsToCache = [
  '/',
  'https://play.thietkeweb30s.org/p/coppy.html',
  'https://raw.githubusercontent.com/quangthylove/code/master/manifest.json',
  '/icon.png',
  '/styles.css',
  'https://raw.githubusercontent.com/quangthylove/code/master/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
