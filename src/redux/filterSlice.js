import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    brand: "",
    price: "",
    from: "",
    to: "",
  },
  reducers: {
    getCarBrand(state, action) {
      state.brand = action.payload;
    },
  },
});

export const { getCarBrand } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
