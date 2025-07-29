// utils/appStore.js
import { configureStore } from "@reduxjs/toolkit";

// import cartReducer from "./cartSlice"
import cartReducer from "./cartSlice"
import userReducer from "./userSlice"


const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    users: userReducer
  }
});

export default appStore;
