import { all, put, takeLatest, call } from 'redux-saga/effects';
import { actionTypes, failure, loading, loginSuccess, getCostumersSuccess } from './actions';

import axios from 'axios';

function* loginSaga(data) {
  const { payload } = data;

  yield put(loading(true));
  yield put(failure(false));

  const request = () =>
    axios.post(`${process.env.NEXT_PUBLIC_API}/users/login`, payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

  try {
    const response = yield call(request, actionTypes.LOGIN);
    const { data } = response;
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(failure(true));
  } finally {
    yield put(loading(false));
  }
}

function* getCostumersSaga({ payload }) {
  const { filterName, token } = payload;

  const data = { filterName };

  yield put(loading(true));
  yield put(failure(false));

  const request = () =>
    axios.get(`${process.env.NEXT_PUBLIC_API}/customers/`, {
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        // 'entity-body': '*OCTET',
      },
    });

  try {
    const response = yield call(request, actionTypes.GET_COSTUMERS);
    const { data } = response;

    yield put(getCostumersSuccess(data.customers));
  } catch (error) {
    yield put(failure(true));
  } finally {
    yield put(loading(false));
  }
}

function* editCostumerSaga({ payload }) {
  const { body, token } = payload;

  yield put(loading(true));
  yield put(failure(false));

  const request = () =>
    axios.put(`${process.env.NEXT_PUBLIC_API}/customers/edit`, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

  try {
    yield call(request, actionTypes.EDIT_COSTUMER);
  } catch (error) {
    yield put(failure(true));
  } finally {
    yield put(loading(false));
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.LOGIN, loginSaga)]);
  yield all([takeLatest(actionTypes.GET_COSTUMERS, getCostumersSaga)]);
  yield all([takeLatest(actionTypes.EDIT_COSTUMER, editCostumerSaga)]);
}

export default rootSaga;
