import { all, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, failure, loading, loginSuccess } from './actions';

function* loginSaga(data) {
  const { payload } = data;

  yield put(loading(true));
  yield put(failure(false));

  try {
    const res = yield fetch(`${process.env.NEXT_PUBLIC_API}/users/login`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = yield res.json();
      yield put(loginSuccess(data));
    } else {
      yield put(failure(true));
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
