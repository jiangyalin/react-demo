import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function fetchPostsApi(url) {
  return fetch(`https://api.github.com/users`)
    .then(response => response.json() )
    .then(json => json.map(item => item.url))
    .then(url => url.map(item => fetch(item).then(response => response.json())))
    .then(pro => Promise.all(pro))
}

export function* incrementAsync() {
  yield delay(1000)
  const posts = yield call(fetchPostsApi)
  console.log(posts)
  yield put({ type: 'INCREMENT' })
}

export function* demoAdd() {
  yield takeEvery('DEMO_ADD', incrementAsync)
}

export function* aa() {
  yield takeEvery('A', incrementAsync)
}

export function* helloSaga() {
  console.log('Hello Sagas');
}