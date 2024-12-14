import { all } from 'redux-saga/effects';

import helloSaga from './helloSaga';
import authSaga from './authSaga';

export const rootSaga = function* () {
  yield all([helloSaga(), authSaga()]);
};

export default rootSaga;
