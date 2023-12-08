import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/rental-car-api">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}></PersistGate>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
