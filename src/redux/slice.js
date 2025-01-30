import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations.js";

const initialState = {
  campers: {
    items: [],
    total: 0,
    loading: false,
    error: null,
    filters: {},
  },
};

const camperSlice = createSlice({
  name: "camper",
  initialState,

  reducers: {
    setFilters: (state, action) => {
      state.campers.filters = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campers.items = action.payload;
        state.campers.total = action.payload.total;
        state.campers.loading = false;
      })
      .addCase(fetchCampers.pending, (state) => {
        state.campers.loading = true;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.campers.error = action.payload;
        state.campers.loading = false;
      });
  },
});

export const { setFilters } = camperSlice.actions;
export const camperReducer = camperSlice.reducer;
