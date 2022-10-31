import { initializeApp } from "firebase/app";
import { addDoc, collection, collection as fbCollection, doc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { CoffeeItemType, MenuCardType } from "../redux/reducers/static";

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
    return itemsSnapshot.docs.map(d => d.data() as CoffeeItemType | MenuCardType);
  },
};

export const adminAPI = {
  addDoc: async (collectionName: string) => {
    const itemsSnapshot = await getDocs(fbCollection(fs, collectionName));
    let items = itemsSnapshot.docs.map(d => d.data() as CoffeeItemType);

    const docRef = await addDoc(collection(fs, collectionName), items[0]);
    console.log("Document written with ID: ", docRef.id);
  },
  updateCoffeeItems: async () => {
    const docRef = doc(fs, "menu", "coffee");
    const itemsSnapshot = await getDocs(fbCollection(fs, 'menu'));
    let coffeeItems = itemsSnapshot.docs.map(d => d.data() as CoffeeItemType)[0].items[0];

    let coffeeItemsCopy = [coffeeItems, coffeeItems, coffeeItems, coffeeItems, coffeeItems, coffeeItems, coffeeItems, coffeeItems]

    await updateDoc(docRef, {
      items: coffeeItemsCopy
    });
    console.log('updated')
  },
  updateCardItems: async (name: string) => {
    const docRef = doc(fs, "menu", "author`s");
    const itemsSnapshot = await getDocs(fbCollection(fs, 'menu'));
    let cardItem = itemsSnapshot.docs.map(d => d.data() as MenuCardType)[0].subcategories;
    // let cardItemsCopy = [...cardItem, {...cardItem[0], name}]
    let items = cardItem[0].items
    let cardItemsCopy = [...cardItem, { name, items: [...items, ...items, items.slice(0, 2)] }]

    await updateDoc(docRef, {
      subcategories: cardItemsCopy
    });
    console.log('updated')
  },
  da: async (name: string) => {
    const itemsSnapshot = await getDocs(fbCollection(fs, 'menu'));
    let cardItem = itemsSnapshot.docs.map(d => d.data() as MenuCardType)[0];

    setDoc(doc(fs, 'menu', name), cardItem)
    console.log('updated')
  },
};