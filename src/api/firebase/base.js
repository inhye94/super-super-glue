import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

const noData = (snapshot) => {
  return !snapshot.exists();
};

const getRef = (dataPath) => {
  if (dataPath) {
    return ref(database, dataPath);
  }

  return ref(database);
};

export const errorMsg = (error) => {
  alert(`(${error.code}) ${error.message}`);
  return null;
};

export const getData = (dataPath) => {
  return get(getRef(dataPath))
    .then((snapshot) => {
      if (noData(snapshot)) {
        return null;
      }

      return snapshot;
    })
    .catch(errorMsg);
};

export const updateData = (dataPath, updateDataObject) => {
  return set(ref(database, dataPath), updateDataObject) //
    .catch(errorMsg);
};

export const removeData = (dataPath) => {
  return remove(ref(database, dataPath)) //
    .catch(errorMsg);
};
