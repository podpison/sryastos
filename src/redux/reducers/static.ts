import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { itemsAPI } from "../../api/api";

export type MenuItemItemType = {
  name: string
  capacity: {
    capacity: string
    price: string
  }[]
}

export type MenuItemType = {
  category: string
  subcategory: string
  description: string
  items: MenuItemItemType[]
}

const initialState = {
  menu: [] as MenuItemType[]
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