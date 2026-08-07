import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmTHyvA20O8ASMdMp4E6Md750VYwZeTys",
  authDomain: "nessa-arte.firebaseapp.com",
  projectId: "nessa-arte",
  storageBucket: "nessa-arte.firebasestorage.app",
  messagingSenderId: "282513517268",
  appId: "1:282513517268:web:3ba96164434fd6abf22941",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;