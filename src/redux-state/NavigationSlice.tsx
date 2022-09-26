import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import navigationData from '../data/navigationData.json';

const initialState = {
  navigation: [...navigationData],
  continueToNavigation:true
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setContinueToNavigation: (state, action) => {
      return {
        ...state,
        continueToNavigation: action.payload,
      };
    }
  },
});

export const selectNavigation = (state: RootState) => state.navigation;

export const { setContinueToNavigation } = navigationSlice.actions;
export default navigationSlice.reducer;