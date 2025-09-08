// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzLNhWzpYYnzZJHZrcATxAPOsDu4I3vuQ",
  authDomain: "yourname-1325c.firebaseapp.com",
  databaseURL: "https://yourname-1325c-default-rtdb.firebaseio.com",
  projectId: "yourname-1325c",
  storageBucket: "yourname-1325c.firebasestorage.app",
  messagingSenderId: "806704872233",
  appId: "1:806704872233:web:5b697e21fdf8f1c65d1538",
  measurementId: "G-94D8LNKGQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
