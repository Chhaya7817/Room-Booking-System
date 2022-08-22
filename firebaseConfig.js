
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA3EPtkj2PxZ2TpJuR6r-G6aVCpbrZ7qb0",
    authDomain: "room-booking-system-firebase.firebaseapp.com",
    databaseURL: "https://room-booking-system-firebase-default-rtdb.firebaseio.com",
    projectId: "room-booking-system-firebase",
    storageBucket: "room-booking-system-firebase.appspot.com",
    messagingSenderId: "729331600572",
    appId: "1:729331600572:web:045075d48b28346be254b9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);