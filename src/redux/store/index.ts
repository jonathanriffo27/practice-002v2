import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../slices/userSlice";
import menuSlice from "../slices/menuSlice";

const store = configureStore({reducer: {userSlice, menuSlice} });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;