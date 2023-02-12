// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0z49JjQ73TIMYyIOkcnFifCW7eV_Sdt8",

  authDomain: "crwn-clothing-db-47e87.firebaseapp.com",

  projectId: "crwn-clothing-db-47e87",

  storageBucket: "crwn-clothing-db-47e87.appspot.com",

  messagingSenderId: "610546071096",

  appId: "1:610546071096:web:8b019fb22592e0dcf018cd",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account", //select an account for login
});

export const auth = getAuth();
export const signInwithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInwithGoogleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
};

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "user", userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  //if user data exists
  //return userDocRef
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
