import { initializeApp } from "firebase/app";
import { addDoc, collection, collection as fbCollection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
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
  },
};

export const adminAPI = {
  addDoc: async (collectionName: string) => {
    const itemsSnapshot = await getDocs(fbCollection(fs, collectionName));
    let items = itemsSnapshot.docs.map(d => d.data() as MenuItemType);

    const docRef = await addDoc(collection(fs, collectionName), items[0]);
    console.log("Document written with ID: ", docRef.id);
  },
  updateCoffeeItems: async () => {
    const washingtonRef = doc(fs, "menu", "coffee");
    const itemsSnapshot = await getDocs(fbCollection(fs, 'menu'));
    let coffeeItems = itemsSnapshot.docs.map(d => d.data() as MenuItemType)[0].items[0];

    let coffeeItemsCopy = [coffeeItems, coffeeItems, coffeeItems, coffeeItems, coffeeItems, coffeeItems, coffeeItems, coffeeItems]

    await updateDoc(washingtonRef, {
      items: coffeeItemsCopy
    });
    console.log('updated')
  }
};