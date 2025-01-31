import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters = {}, thunkApi) => {
    try {
      const { data } = await apiUrl.get("/campers", {
        params: filters,
      });

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperId = createAsyncThunk(
  "camper/fetchId",
  async (id, thunkApi) => {
    try {
      const { data } = await apiUrl.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
