import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/User";

const store = configureStore({
  reducer: {
    users: userSlice
  }
});

export default store;
