import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBYfqgXjhpLuq5GzpQ8IiNmIqQ2KHK0qGg",
    authDomain: "quirk-chat.firebaseapp.com",
    projectId: "quirk-chat",
    storageBucket: "quirk-chat.appspot.com",
    messagingSenderId: "596256942047",
    appId: "1:596256942047:web:9d561b29f0163079fc466a",
    measurementId: "G-DKGS243QL5"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);