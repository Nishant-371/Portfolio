
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCFTs3dnuIp11bAAzxYlVnX1_Cs9ai_A0U",
    authDomain: "portfolio-4217d.firebaseapp.com",
    projectId: "portfolio-4217d",
    storageBucket: "portfolio-4217d.appspot.com",
    messagingSenderId: "1081443576205",
    appId: "1:1081443576205:web:30dd55c038aa5e5bca75c4",
    measurementId: "G-4807S77Z0R"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const analytics = getAnalytics(app);