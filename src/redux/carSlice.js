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
      console.log(action.payload);
      state.cars = action.payload;
      console.log(state.cars);
    },
  },
});

export const carReducer = carSlice.reducer;
