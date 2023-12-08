import { createSlice } from "@reduxjs/toolkit";
import { fetchFavoritesCars } from "./fetch";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filteredCars: [],
    favorites: [],
    favoritesList: [],
  },
  reducers: {
    getFilteredCars(state, action) {
      state.filteredCars = action.payload;
    },
    favoriteslistAdd(state, action) {
      if (!state.favorites.includes(action.payload))
        state.favorites.push(action.payload);
    },
    favoritesListDelete(state, action) {
      const cars = state.favorites.filter((car) => {
        return car.id !== action.payload;
      });
      state.favorites = cars;
    },
  },
  extraReducers: {
    [fetchFavoritesCars.fulfilled](state, action) {
      console.log(action.payload);
      state.favoritesList = action.payload;
    },
    [fetchFavoritesCars.rejected](state, action) {
      console.log(action.payload);
    },
  },
});

export const { getFilteredCars, favoriteslistAdd, favoritesListDelete } =
  filterSlice.actions;
export const filterReduser = filterSlice.reducer;
