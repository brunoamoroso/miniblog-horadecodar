
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4UTDDUm2d94Jfr61XoWu2XeIBs5XMEHE",
  authDomain: "miniblog-horadecodar.firebaseapp.com",
  projectId: "miniblog-horadecodar",
  storageBucket: "miniblog-horadecodar.appspot.com",
  messagingSenderId: "597593689572",
  appId: "1:597593689572:web:c7ce263f84e8200f588bf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };