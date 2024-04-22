import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getData, errorMsg } from "./firebase/base.js";

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const loginByMobile = () => {
  signInWithRedirect(auth, provider);

  getRedirectResult(auth).catch(errorMsg);
};

export const loginByDesktop = () => {
  signInWithPopup(auth, provider).catch(errorMsg);
};

export const logout = () => {
  signOut(auth).catch(errorMsg);
};

export const onUserStateChanged = (callback) => {
  onAuthStateChanged(auth, async (user) => {
    const updateData = user ? await addUserData(user) : null;
    callback(updateData);
  });
};

const addUserData = (user) => {
  return getData().then((snapshot) => {
    const data = snapshot.val();
    const isAdmin = data.admin.includes(user.uid);

    return { ...user, isAdmin };
  });
};
