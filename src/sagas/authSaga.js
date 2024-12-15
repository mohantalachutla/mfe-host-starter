import { call, put, takeLatest } from 'redux-saga/effects';

import { login, register } from '../api';
import { loadingOff, loadingOn } from '../reducers/loader';
import { loginSuccess, loginFailure } from '../reducers/auth';
import { showAlert } from '../reducers/modal';
import { loginAction, registerAction } from '../actions';
import { ALERT_TYPES } from '../constants';

const loginSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    const data = yield call(login, payload);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure());
    yield put(showAlert({ type: ALERT_TYPES.ERROR, message: error.message }));
  }
  yield put(loadingOff());
};

const registerSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    const data = yield call(register, payload);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure());
    yield put(showAlert({ type: ALERT_TYPES.ERROR, message: error.message }));
  }
  yield put(loadingOff());
};

const authSaga = function* () {
  yield takeLatest(loginAction.type, loginSagaHandler);
  yield takeLatest(registerAction.type, registerSagaHandler);
};

export default authSaga;
