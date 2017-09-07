import { fork } from 'redux-saga/effects'

import { demoAdd } from './new'

export default function* rootSaga() {
  yield fork(demoAdd)
}