import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAZ6gxF2wKplY_4XMaABeHHqCWRBcUzQOY",
  authDomain: "react-notion-d4f02.firebaseapp.com",
  databaseURL: "https://react-notion-d4f02-default-rtdb.firebaseio.com",
  projectId: "react-notion-d4f02",
  storageBucket: "react-notion-d4f02.appspot.com",
  messagingSenderId: "182183484299",
  appId: "1:182183484299:web:9df51d2d7d94be2651ad8e",
  measurementId: "G-FKLJ3SCLE4"
};

export const firebaseApp = initializeApp(firebaseConfig);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }


