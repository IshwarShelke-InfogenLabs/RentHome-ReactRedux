import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuy-7n70WaZ3rkrxU_hlXJJiMq8qypGzc",
  authDomain: "house-marketplace-app-3a5ee.firebaseapp.com",
  projectId: "house-marketplace-app-3a5ee",
  storageBucket: "house-marketplace-app-3a5ee.appspot.com",
  messagingSenderId: "846818383300",
  appId: "1:846818383300:web:0af68835578043089d8091",
  measurementId: "G-4XHWHD6FCC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { firebaseConfig, db };
