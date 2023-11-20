import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6558edc2e93ca47020a9e73e.mockapi.io";

export const fetchCars = createAsyncThunk("cars/get", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/rental-cars");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
