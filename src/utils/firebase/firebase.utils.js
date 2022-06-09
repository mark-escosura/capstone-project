import { initializeApp } from 'firebase/app'; // creates a new app instance for the given firebase config
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCifecMpRm2r0UCn17Uq4Izumz2lgmpli4',
  authDomain: 'fake-store-db-ee726.firebaseapp.com',
  projectId: 'fake-store-db-ee726',
  storageBucket: 'fake-store-db-ee726.appspot.com',
  messagingSenderId: '206940869622',
  appId: '1:206940869622:web:6cfe7d2a20825140c3edd7',
  measurementId: 'G-FHKFPG005N',
}; // Initialize Firebase with a config object and get the app object from it (app is the main object of firebase)

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); // Get a reference to the database service from the app object

const provider = new GoogleAuthProvider(); // Get a reference to the auth service from the app object
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(); // Get a reference to the auth service from the app object
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider); // Get a reference to the firestore service from the app object

export const db = getFirestore(); // Get a reference to the database service from the app object
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  const userRef = await doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('error creating user', error);
    }
  }
  return userRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
