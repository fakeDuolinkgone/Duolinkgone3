self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("duolink-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./englishCode.js",
        "./englishVocabularys.js",
        "./correct.mp3",
        "./wrong.mp3",
        "./finish.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});