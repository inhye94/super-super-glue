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
import { getDatabase, ref, get, set, push, child } from "firebase/database";

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
    const updateData = user ? await addUserData(user) : null;
    callback(updateData);
  });
};

const addUserData = (user) => {
  return get(ref(database))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const isAdmin = data.admin.includes(user.uid);

        return { ...user, isAdmin };
      }

      return user;
    })
    .catch((error) => {
      alert(`(${error.code}) ${error.message}`);
    });
};

export const registProduct = async (userId, data, image, detailImage) => {
  const _path = `product/${userId}`;
  const id = data.id || push(child(ref(database), _path)).key;

  return set(ref(database, `${_path}/${id}`), {
    ...data,
    id,
    image,
    detailImage,
  })
    .then(() => {
      return id;
    })
    .catch((error) => {
      alert(`(${error.code}) ${error.message}`);
      return null;
    });
};
