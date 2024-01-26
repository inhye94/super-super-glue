import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const loginByMobile = () => {
  signInWithRedirect(auth, provider);

  getRedirectResult(auth).catch((error) => {
    alert(`(${error.code}) ${error.message}`);
  });
};

export const loginByDesktop = () => {
  signInWithPopup(auth, provider).catch((error) => {
    alert(`(${error.code}) ${error.message}`);
  });
};

export const logout = () => {
  signOut(auth).catch((error) => {
    alert(`(${error.code}) ${error.message}`);
  });
};

export const onUserStateChanged = async (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
