import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeQNFvh0vLDjQL5YkAMHssthF7JfpIwcQ",
  authDomain: "crmaxis-5b844.firebaseapp.com",
  projectId: "crmaxis-5b844",
  storageBucket: "crmaxis-5b844.firebasestorage.app",
  messagingSenderId: "698136737012",
  appId: "1:698136737012:web:a4b4c24d572960d40f1aa1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;