// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhwUKsuEoKQcTK7UX8PbVmUPOdKUsvulo",
  authDomain: "the-news-dragon-client-7e00d.firebaseapp.com",
  projectId: "the-news-dragon-client-7e00d",
  storageBucket: "the-news-dragon-client-7e00d.appspot.com",
  messagingSenderId: "864794055051",
  appId: "1:864794055051:web:e5a69733351c439594df8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;