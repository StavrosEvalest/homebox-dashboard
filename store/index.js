import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import app from "./features/app";
import customers from "./features/customers";
import sagas from "./sagas";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    app,
    customers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(sagas);
