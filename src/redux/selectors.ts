import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { StateType } from "./store";

const selectSelf = (state: StateType) => state;

//static reducer
export const selectMenuItems = createDraftSafeSelector(selectSelf, state => state.static.menu);