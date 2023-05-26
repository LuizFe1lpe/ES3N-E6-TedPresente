import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const config = {
  apiKey: "AIzaSyCAKCRVo8PHzIfzm7-lnCU4x9dt56-MWa0",
  authDomain: "meritos-a22ef.firebaseapp.com",
  projectId: "meritos-a22ef",
  storageBucket: "meritos-a22ef.appspot.com",
  messagingSenderId: "415865647984",
  appId: "1:415865647984:web:d3bc6d4c3a20811418d5b5",
  measurementId: "G-MH7RQGLHBW",
};

const firebaseApp = initializeApp(config);
const messaging = getMessaging(firebaseApp);

export const isTokenValid = async (setTokenFound: any) => {
  return getToken(messaging, {
    vapidKey:
      "BLUKG0JVaHnoOotY82pat7r1ysQfxLojGw-SAnDH-TTSB4XgXO_AQlQUhXGFyml21LQGvBw9cKQl2wjwjG7d2ZQ",
  })
    .then((currentToken) => {
      if (currentToken) {
        setTokenFound(currentToken);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound("");
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = (): any =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
