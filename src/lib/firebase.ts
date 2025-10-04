// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA8RTohMgdkaw9Jgq-MQpShLOF-Ik535hk",
  authDomain: "swasthyaai-v1.firebaseapp.com",
  projectId: "swasthyaai-v1",
  storageBucket: "swasthyaai-v1.appspot.com", // fixed
  messagingSenderId: "1043142089373",
  appId: "1:1043142089373:web:ca48c182f6f42d417d9274",
  measurementId: "G-E289N9FXBT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// optional analytics (browser only)
if (typeof window !== "undefined") getAnalytics(app);
