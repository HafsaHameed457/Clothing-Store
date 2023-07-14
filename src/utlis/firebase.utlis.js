import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7-p8EkSZfHGsh7g_GLoSXc9HliIthvDM",
  authDomain: "clothingcenter-1177f.firebaseapp.com",
  projectId: "clothingcenter-1177f",
  storageBucket: "clothingcenter-1177f.appspot.com",
  messagingSenderId: "635487085130",
  appId: "1:635487085130:web:098e0bb68ca2bad25cfcb3",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creteUserDocFromAuth = async (userAuth) => {
  const userDocref = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocref);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocref, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
};
