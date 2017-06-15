var log = console.log.bind(console);
var err = console.error.bind(console);

self.addEventListener('install', function(event) {
	log('Service Worker: Installed');
});

self.addEventListener('activate', function(event) {
	log('Service Worker: Active');
});

self.addEventListener('fetch', function(event) {
	log('Service Worker: Fetch');
});

