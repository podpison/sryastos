import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { itemsAPI } from "../../api/api";

export type CapaciyType = {
  capacity: string
  price: string
}

export type CoffeeItemItemType = {
  name: string
  cyrup?: boolean
  capacity: CapaciyType[]
}

export type CoffeeItemType = {
  id: string
  category: string
  subcategory: string
  description: string
  items: CoffeeItemItemType[]
  samePriceItems: CoffeeItemItemType[]
}

export type MenuCardItemType = {
  name: string
  description: string
  src: string
  capacity: CapaciyType[]
  kbju: {
    calories: string
    proteins: string
    fats: string
    carbohydrates: string
  }
}

export type MenuCardType = {
  id: string
  category: string
  description: string
  subcategories: {
    name: string
    items: MenuCardItemType[]
  }[]
}

const initialState = {
  menu: [] as CoffeeItemType[] | MenuCardType[]
}
export type StateKeysType = keyof typeof initialState;

type SetStaticItemsType = {
  items: DocumentData[]
  key: StateKeysType
}
const setStaticItems = createAction<SetStaticItemsType>('static/setItem');

export const staticReducer = createReducer(initialState, builder => {
  builder.addCase(setStaticItems, (state, action) => {
    type KeyType = typeof action.payload.key;
    return {
      ...state,
      [action.payload.key]: action.payload.items as typeof initialState[KeyType]
    };
  });
  builder.addDefaultCase(() => { });
});

export const getStaticItems = createAsyncThunk('static/getItems', async (collection: StateKeysType, thunkAPI) => {
  let items = await itemsAPI.get(collection);
  thunkAPI.dispatch(setStaticItems({ items, key: collection }));
});