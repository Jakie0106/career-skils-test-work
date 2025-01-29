import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations.js";

const initialState = {
  campers: {
    items: [],
    loading: false,
    error: null,
  },
};

const camperSlice = createSlice({
  name: "camper",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      state.campers.items = action.payload;
      console.log("slice", action.payload);
    });
  },
});

export const camperReducer = camperSlice.reducer;
