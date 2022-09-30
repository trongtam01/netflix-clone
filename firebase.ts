// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw6qMIWma--moO5nwD4AkJG947h9dEsmU",
  authDomain: "netflix-clone-3db1b.firebaseapp.com",
  projectId: "netflix-clone-3db1b",
  storageBucket: "netflix-clone-3db1b.appspot.com",
  messagingSenderId: "546810594085",
  appId: "1:546810594085:web:91d151b4ef65147bab50cc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }