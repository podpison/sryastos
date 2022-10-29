import { initializeApp } from "firebase/app";
import { collection as fbCollection, getDocs, getFirestore } from "firebase/firestore";
import { MenuItemType } from "../redux/reducers/static";

const firebaseConfig = {
  apiKey: "AIzaSyCv96zCdk4zd8v1WGTG-o03cGdv-BeLt2g",
  authDomain: "sryastos.firebaseapp.com",
  projectId: "sryastos",
  storageBucket: "sryastos.appspot.com",
  messagingSenderId: "75165453544",
  appId: "1:75165453544:web:55bbca90bcdf2eaf5b4d5d",
  measurementId: "G-0E427SD5P8"
};

const app = initializeApp(firebaseConfig);
const fs = getFirestore(app);

export const itemsAPI = {
  get: async (collection: string) => {
    const itemsSnapshot = await getDocs(fbCollection(fs, collection));
    return itemsSnapshot.docs.map(d => d.data() as MenuItemType);
  }
};