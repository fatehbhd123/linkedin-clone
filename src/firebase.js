import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDD5THWa4Ze5nY0nTSgPJvT756UMj2-3eA",
    authDomain: "linkedin-clone-e53a5.firebaseapp.com",
    projectId: "linkedin-clone-e53a5",
    storageBucket: "linkedin-clone-e53a5.appspot.com",
    messagingSenderId: "595192748647",
    appId: "1:595192748647:web:dbca8eaebdcd601a30d2c2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { db, auth };


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase

