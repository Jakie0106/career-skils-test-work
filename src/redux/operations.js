import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await apiUrl.get("/campers");

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
