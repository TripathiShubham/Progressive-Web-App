function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

const applicationServerKey = urlB64ToUint8Array('BGomc-_HqD1EDSci3ANUnfsByBwtSuWQkDTVoif2Q4kt7jFvOXlPy6gmovx2WDDM6ZYfGlHZzi0KN9Cu1cnkdok');
var swRegistration = null;

/**
 * To send subscription details to server
 * @param {Subscription Object} subscription 
 */
function sendSubscriptionToBackEnd(subscription) {
    return fetch('/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(subscription)
    })
        .then(function (response) {
            console.log(response);
            if (!response.ok) {
                throw new Error('Bad status code from server.');
            }
            return "";
        });
}

/**
 * To Subscribe user for push notification
 * @param {Service Worker Object} swRegistration 
 */
function subscribeUser(swRegistration) {
    console.log("Not Subscribed");
    var option = {
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    };
    setTimeout(function () {
        console.log("Subscribing user");
        swRegistration.pushManager.subscribe(option)
            .then(function (subscription) {
                console.log("Sending subscription to server");
                sendSubscriptionToBackEnd(subscription);
            })
            .catch(function(error) {
                console.log("User deny push notification");
            });
    }, 3000);
}

/**
 * Check if service worker supported
 * If yes, register service worker
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function (register) {
            console.log("Service worker registered");
            swRegistration = register;
            return swRegistration.pushManager.getSubscription();
        })
        .then(function (subscription) {
            console.log("User subscription - " + subscription);
            if (subscription == null) {
                subscribeUser(swRegistration);
            } else {
                console.log("User already subscribed");
            }
        })
        .catch(function (error) {
            console.log('Service worker registration failed, error:', error);
        });
}