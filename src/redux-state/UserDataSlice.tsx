import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


const initialState = JSON.parse( window.localStorage.getItem('USER_DATA') || "{}") ;

export type UserData = {
    name:string,
    email:string,
    address:string,
    floor:number,
    zones:Array<string>,
    amount:number,
    elevator:boolean,
    parking: boolean
}

export const userDataSlice = createSlice({
  name: "userData",
  initialState: initialState as UserData,
  reducers: {
    setUserData: (state:UserData, action) => {
      return {
        ...state,
        [`${action.payload.id}`]: action.payload.value,
      };
    },
  },
});

export const selectUserData = (state: RootState) =>
  state.userData;

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;