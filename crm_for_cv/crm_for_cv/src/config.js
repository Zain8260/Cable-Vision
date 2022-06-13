import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
export const firebaseConfig = {
    apiKey: "AIzaSyCxsOjtqSqtkiAk54mEJmTd0EDVBdP_EUc",
    authDomain: "crmforcv.firebaseapp.com",
    projectId: "crmforcv",
    storageBucket: "crmforcv.appspot.com",
    messagingSenderId: "476837454894",
    appId: "1:476837454894:web:1493f9148260e7eee72bbf"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// export const firebase_app = firebase.initializeApp(firebaseConfig);

