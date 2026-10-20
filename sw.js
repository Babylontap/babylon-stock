// Necesario para que el celular ofrezca "Instalar app". No guarda nada: todo se carga siempre en línea.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
