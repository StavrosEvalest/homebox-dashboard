import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import app from "./features/app";
import sagas from "./sagas";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    app,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(sagas);
