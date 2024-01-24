import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";

import { createContext, useContext, useEffect, useState } from "react";

const GoogleAuthContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyAJbFKyxuwxiIuAUsZDUCXoysLT09iDZXE",
  authDomain: "super-super-glue.firebaseapp.com",
  databaseURL:
    "https://super-super-glue-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "super-super-glue",
  storageBucket: "super-super-glue.appspot.com",
  messagingSenderId: "267734854567",
  appId: "1:267734854567:web:4e76ddc2ca3c2c7d226482",
  measurementId: "G-81N7SNK2MB",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

const loginByMobile = () => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;

      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // const credential = GoogleAuthProvider.credentialFromError(error);
      alert(`(${error.code}) ${error.message}`);
    });
};

const loginByDesktop = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // const user = result.user;
    })
    .catch((error) => {
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
      alert(`(${error.code}) ${error.message}`);
    });
};

const logout = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      alert(`(${error.code}) ${error.message}`);
    });
};

// setPersistence(auth, inMemoryPersistence)
//   .then(() => {
//     // In memory persistence will be applied to the signed in Google user
//     // even though the persistence was set to 'none' and a page redirect
//     // occurred.
//     return signInWithRedirect(auth, provider);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

export default function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
  }, []);

  return (
    <GoogleAuthContext.Provider
      value={{ loginByMobile, loginByDesktop, logout, userInfo }}
    >
      {children}
    </GoogleAuthContext.Provider>
  );
}

export const useGoogleAuthContext = () => useContext(GoogleAuthContext);
