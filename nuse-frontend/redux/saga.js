import { all, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, failure, loading, loginSuccess } from './actions';

function* loginSaga(data) {
  //temporary
  const body = {
    username: data.payload.email,
    password: data.payload.password,
  };

  yield put(loading(true));
  yield put(failure(false));

  try {
    const res = yield fetch('https://localhost:5001/api/nuse/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    });
    const data = yield res.json();

    if (res.ok) {
      yield put(loginSuccess(data));
    } else {
      yield put(failure(data.message));
    }
  } catch (err) {
    yield put(failure(err));
  } finally {
    yield put(loading(false));
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.LOGIN, loginSaga)]);
}

export default rootSaga;
