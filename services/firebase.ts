
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLeHbJU-n7VL6s2dUavvs4TSW_WlQwR1w",
    authDomain: "yj-meeting.firebaseapp.com",
    projectId: "yj-meeting",
    storageBucket: "yj-meeting.firebasestorage.app",
    messagingSenderId: "815452229762",
    appId: "1:815452229762:web:bc002499e79994351e649b",
    measurementId: "G-W7882SVERB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
