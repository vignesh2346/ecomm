// Import the functions you need from the SDKs you need
import { initializeApp, setLogLevel } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB2MXxbNAntyIQiwAg10j1ngPknhF60FV4",
  authDomain: "vig-clothing.firebaseapp.com",
  projectId: "vig-clothing",
  storageBucket: "vig-clothing.appspot.com",
  messagingSenderId: "158726790453",
  appId: "1:158726790453:web:78d195cd737323ebcb807c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, dName) => {
  const userDoc = doc(db, "users", userAuth.uid);
  const getUser = await getDoc(userDoc);
  if (!getUser.exists()) {
    const { displayName, email } = userAuth;
    let DName = displayName;
    const createdDate = new Date();
    if (!displayName) {
      DName = dName;
    }
    try {
      await setDoc(userDoc, {
        displayName: DName,
        email,
        createdDate,
      });
      console.log(`User with id ${userAuth.uid} has been created`);
    } catch (error) {
      console.log(`User cannot be created because of an error ${error}`);
    }
  } else {
    return userDoc;
  }
};

export const createAuthWithEmailAndPassword = async (email, password) => {
  if (email && password) {
    return createUserWithEmailAndPassword(auth, email, password);
  } else {
    return;
  }
};

export const getUserByEmail = async (email) => {
  const equipment = collection(db, "users");
  const getUsers = await getDocs(equipment);
  getUsers.forEach((x) => {
    if (x._document.data.value.mapValue.fields.email.stringValue === email) {
      console.log(`found a user with email ${email}`);
    } else {
      console.log(`could not find a user with email ${email}`);
    }
  });
};

export const signInwithEmailandPassword = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
