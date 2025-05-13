
import { initializeApp } from "firebase/app";
import {getDatabase,ref,push} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCBPZJOEy7esrqo2RxRqwqFc1w-L3-jI2U",
  authDomain: "escola-ae715.firebaseapp.com",
  databaseURL: "https://escola-ae715-default-rtdb.firebaseio.com",
  projectId: "escola-ae715",
  storageBucket: "escola-ae715.firebasestorage.app",
  messagingSenderId: "985768132424",
  appId: "1:985768132424:web:5a9e05bb3f496d94bf3d7d"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);