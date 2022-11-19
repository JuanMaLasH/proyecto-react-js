import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQo02AMXqoyDlPM7uyFI89TrJLhmjIQic",
  authDomain: "articulos-gamer-react.firebaseapp.com",
  projectId: "articulos-gamer-react",
  storageBucket: "articulos-gamer-react.appspot.com",
  messagingSenderId: "328493807521",
  appId: "1:328493807521:web:6df8c8cb7ff5814e37bde0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db, 'productos');