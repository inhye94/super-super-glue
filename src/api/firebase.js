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
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);

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

export const onUserStateChanged = (callback) => {
  onAuthStateChanged(auth, async (user) => {
    const updateData = user ? await addAdminState(user) : null;
    callback(updateData);
  });
};

const addAdminState = (user) => {
  return get(ref(database, "admin"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const isAdmin = data.includes(user.uid);

        return { ...user, isAdmin };
      }

      return user;
    })
    .catch((error) => {
      console.error(error);
    });
};
