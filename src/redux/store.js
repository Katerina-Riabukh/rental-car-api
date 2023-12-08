import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { carReducer } from "./carSlice";
import { filterReduser } from "./filterSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};
const persistedFilterReducer = persistReducer(persistConfig, filterReduser);

export const store = configureStore({
  reducer: {
    cars: carReducer,
    filter: persistedFilterReducer,
  },
});

export const persistor = persistStore(store);
