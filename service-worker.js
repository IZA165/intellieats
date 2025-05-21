const CACHE_NAME = 'intellieats-cache-v1';
const urlsToCache = [
  'home.html',
  'manifest.json',
  'service-worker.js',
  'https://i.ibb.co/nMMVPHr3/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
