import { configureStore } from "@reduxjs/toolkit";
import { camperReducer } from "./slice.js";

const store = configureStore({
  reducer: {
    campers: camperReducer,
  },
});

export default store;
