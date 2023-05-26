 // Scripts for firebase and firebase messaging
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

 // Initialize the Firebase app in the service worker by passing the generated config
 const firebaseConfig = {
    apiKey: "AIzaSyCAKCRVo8PHzIfzm7-lnCU4x9dt56-MWa0",
    authDomain: "meritos-a22ef.firebaseapp.com",
    projectId: "meritos-a22ef",
    storageBucket: "meritos-a22ef.appspot.com",
    messagingSenderId: "415865647984",
    appId: "1:415865647984:web:d3bc6d4c3a20811418d5b5",
    measurementId: "G-MH7RQGLHBW",
 };

 firebase.initializeApp(firebaseConfig);

 // Retrieve firebase messaging
 const messaging = firebase.messaging();

 messaging.onBackgroundMessage(function(payload) {
   console.log("Received background message ", payload);

   const notificationTitle = payload.notification.title;
   const notificationOptions = {
     body: payload.notification.body,
   };

   self.registration.showNotification(notificationTitle, notificationOptions);
 });