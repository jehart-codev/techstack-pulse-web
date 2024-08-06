// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg3NrnI1k49NDp_lZk2RoEecN_VZ3kvV4",
  authDomain: "techstack-pulse.firebaseapp.com",
  projectId: "techstack-pulse",
  storageBucket: "techstack-pulse.appspot.com",
  messagingSenderId: "829281412611",
  appId: "1:829281412611:web:9a684dc5a071a163295036",
  measurementId: "G-6QCG4TKZFZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
