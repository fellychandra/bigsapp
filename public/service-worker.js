
self.addEventListener('install', (event) => {
    console.log('service worker installed');
    const asyncInstall = new Promise(function (resolve) {
        console.log("waiting install to finish....");
        setTimeout(resolve, 5000)
    })

    event.waitUntil(asyncInstall);
});
self.addEventListener('activate', () => {
    console.log('service worker activated');
});


const cacheName = 'v1'
const cacheClone = async (e) => {
    const res = await fetch(e.request);
    const resClone = res.clone();

    const cache = await caches.open(cacheName);
    await cache.put(e.request, resClone);
    return res;
};

const fetchEvent = () => {
    self.addEventListener('fetch', (e) => {
        e.respondWith(
            cacheClone(e)
                .catch(() => caches.match(e.request))
                .then((res) => res)
        );
    });
};

fetchEvent();


// const requestNotificationPermission = async () => {
//     const permission = await window.Notification.requestPermission();
//     if (permission !== 'granted') {
//         throw new Error('Permission not granted for Notification');
//     }
// }
// requestNotificationPermission()

// const pushNotification = async () => {

// }
// pushNotification()
self.addEventListener('push', (event) => {
    event.waitUntil(
        self.registration.showNotification("Emesys Go", {
            icon: './icon-120.png',
            body: event.data.text(),
        })
    )
})