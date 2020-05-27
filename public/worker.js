var CACHE_NAME = 'irrd-covid-19';
var urlsToCache = [
    window.public_url_app + '/',
    window.public_url_app +'/img',
    window.public_url_app +'/static/js/bundle.js',
    window.public_url_app +'/static/js/main.chunk.js',
    window.public_url_app +'/static/js/*.chunk.js',
    window.public_url_app +'/static/css/*.chunk.css',
    window.public_url_app +'/favicon.ico',
    window.public_url_app +'/css2?family=Poppins',
];

// Install a service worker
self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Cache and return requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});

// Update a service worker
self.addEventListener('activate', event => {
    var cacheWhitelist = ['irrd-covid-19'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
