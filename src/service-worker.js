var dataCacheName = 'iot-v1';
var cacheName = 'iot-v1';
var list = [
  '/'
];
/**
 * SW install event
 */
self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(list);
    })
  );
});

/**
 * SW activate event
 */
self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

/**
 * SW fetch event
 */
self.addEventListener('fetch', function(event) {
  console.log(event);
  event.respondWith(
    caches.open(dataCacheName).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        var fetchPromise = fetch(event.request).then(function(networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        return response || fetchPromise;
      })
    })
  );
});

/**
 * SW push event
 */
self.addEventListener('push', function(event) {
  const title = 'Hey geek';
  const options = {
    body: event.data.text(),
    icon: '/assets/img/iot.png',
    badge: '/assets/img/iot.png',
    vibrate: [100, 50, 100]
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
