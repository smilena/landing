import { configureStore } from "@reduxjs/toolkit";
import userData from "./redux-state/UserDataSlice";
import navigation from "./redux-state/NavigationSlice";

export const store = configureStore({
  reducer: {
    userData,
    navigation
  },
});

export type RootState = ReturnType<typeof store.getState>;