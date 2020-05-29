// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here, other Firebase libraries
// // are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');
//
// // Initialize the Firebase app in the service worker by passing in the
// // messagingSenderId.
// const firebaseConfig = {
//     authDomain: "covid-19-276522.firebaseapp.com",
//     databaseURL: "https://covid-19-276522.firebaseio.com",
//     projectId: "covid-19-276522",
//     storageBucket: "covid-19-276522.appspot.com",
//     messagingSenderId: "120302394612",
//     appId: "1:120302394612:web:56dfc499b2491c26a9d2a1"
// };
// firebase.initializeApp(firebaseConfig);
//
// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = firebase.messaging();
//
// // If you would like to customize notifications that are received in the
// // background (Web app is closed or not in browser focus) then you should
// // implement this optional method.
// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//         body: 'Background Message body.',
//         // icon: '/firebase-logo.png'
//     };
//
//     return self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });
