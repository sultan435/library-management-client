import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmTNIMBCDAIbp4jg1iyh_44s2GjmmgNm0",
  authDomain: "library-management-proje-5e232.firebaseapp.com",
  projectId: "library-management-proje-5e232",
  storageBucket: "library-management-proje-5e232.appspot.com",
  messagingSenderId: "409176128520",
  appId: "1:409176128520:web:716c3c8537be8ae9b6e5bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;