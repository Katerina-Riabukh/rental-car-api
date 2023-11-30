import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filteredCars: [],
    favorites: [],
  },
  reducers: {
    getFilteredCars(state, action) {
      state.filteredCars = action.payload;
    },
    favoriteslistAdd(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
    favoritesListDelete(state, action) {
      const cars = state.favorites.filter((car) => {
        return car !== action.payload;
      });
      state.favorites = cars;
    },
  },
});

export const { getFilteredCars, favoriteslistAdd, favoritesListDelete } =
  filterSlice.actions;
export const filterReduser = filterSlice.reducer;
