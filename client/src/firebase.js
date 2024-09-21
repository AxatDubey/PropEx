// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propex-528cd.firebaseapp.com",
  projectId: "propex-528cd",
  storageBucket: "propex-528cd.appspot.com",
  messagingSenderId: "476418202672",
  appId: "1:476418202672:web:f76de9413df5ebbbf1e1f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);