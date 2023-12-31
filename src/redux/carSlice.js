import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./fetch";

export const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    isLoading: false,
    error: "",
  },
  extraReducers: {
    //GET
    [fetchCars.fulfilled](state, action) {
      state.cars = action.payload;
    },
  },
});

export const carReducer = carSlice.reducer;
