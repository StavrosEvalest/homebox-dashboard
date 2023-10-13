import { put, takeEvery } from 'redux-saga/effects'
import { appInit, appLoaded } from 'store/features/app'

function* init() {
  yield put(appLoaded(true))
}

export default function* saga() {
  yield takeEvery(appInit, init)
}