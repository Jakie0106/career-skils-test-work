import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperId, fetchCampers } from "./operations.js";

const initialState = {
  campers: {
    items: [],
    total: 0,
    loading: false,
    error: null,
    filters: {},
  },
  camperDetails: {
    data: {},
    loading: false,
    error: null,
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

      // редюсери отримання всього масива кемперів
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
      })

      //редюсери отримання кемпера по id

      .addCase(fetchCamperId.pending, (state) => {
        state.camperDetails.loading = true;
        state.camperDetails.error = null;
      })
      .addCase(fetchCamperId.fulfilled, (state, action) => {
        state.camperDetails.data = action.payload;
        state.camperDetails.loading = false;
      })
      .addCase(fetchCamperId.rejected, (state, action) => {
        state.camperDetails.error = action.payload;
        state.camperDetails.loading = false;
      });
  },
});

export const { setFilters } = camperSlice.actions;
export const camperReducer = camperSlice.reducer;
