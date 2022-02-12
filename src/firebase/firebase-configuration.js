import { initializeApp } from "firebase/app";

//initializing an instance of the Cloud Firestore
import { getFirestore } from "firebase/firestore";

//initializing an instance of Firebase storage
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXtBJeeWnQsYBzVRHwo5QpX9_hbS_Mf4E",
  authDomain: "unsplash-49832.firebaseapp.com",
  projectId: "unsplash-49832",
  storageBucket: "unsplash-49832.appspot.com",
  messagingSenderId: "92210841140",
  appId: "1:92210841140:web:5a9a3537471948d5df2c61",
  measurementId: "G-FDXVTNKMDN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const firestore = getFirestore();

export { firestore, storage };
