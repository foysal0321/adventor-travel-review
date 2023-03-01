import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfInBQfe40H1BEn4cnB6cMhc0auc8E9jY",
  authDomain: "adventor-review.firebaseapp.com",
  projectId: "adventor-review",
  storageBucket: "adventor-review.appspot.com",
  messagingSenderId: "675760504935",
  appId: "1:675760504935:web:e7dd112354de78647794c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;