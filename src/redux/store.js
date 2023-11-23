import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./carSlice";
import { filterReduser } from "./filterSlice";

export const store = configureStore({
  reducer: {
    cars: carReducer,
    filter: filterReduser,
  },
});
