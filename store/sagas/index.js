import { all } from 'redux-saga/effects';
import { combineWatchers } from 'redux-saga-combine-watchers';
import app from "./app";

export default function* rootSaga() {
    yield all(combineWatchers(app))
}