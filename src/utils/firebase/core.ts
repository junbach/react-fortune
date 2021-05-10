import "firebase/auth";
import "firebase/firestore";

import firebase from "firebase/app";
import { firebaseConfig } from "utils/config";

export const firebaseApp = firebase.apps.length === 0 ? firebase.initializeApp(firebaseConfig) : firebase.app();
export const db = firebase.firestore(firebaseApp);
export type DocumentData = firebase.firestore.DocumentData;
export default firebase;
