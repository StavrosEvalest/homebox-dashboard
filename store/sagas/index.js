import { all } from 'redux-saga/effects';
import { combineWatchers } from 'redux-saga-combine-watchers';
import app from "./app";
import customers from "./customers";

export default function* rootSaga() {
    yield all(combineWatchers(app, customers))
}