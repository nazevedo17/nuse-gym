export const actionTypes = {
  FAILURE: 'FAILURE',
  LOADING: 'LOADING',
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  GET_COSTUMERS: 'GET_COSTUMERS',
  GET_COSTUMERS_SUCCESS: 'GET_COSTUMERS_SUCCESS',
  EDIT_COSTUMER: 'EDIT_COSTUMER',
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function loading(loadingValue) {
  return {
    type: actionTypes.LOADING,
    loadingValue,
  };
}

export function logout() {
  return {
    type: actionTypes.LOGOUT,
  };
}

export function login(payload) {
  return { type: actionTypes.LOGIN, payload };
}

export function loginSuccess(data) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data,
  };
}

export function getCostumers(payload) {
  return { type: actionTypes.GET_COSTUMERS, payload };
}

export function getCostumersSuccess(data) {
  return {
    type: actionTypes.GET_COSTUMERS_SUCCESS,
    data,
  };
}

export function editCostumer(payload) {
  return {
    type: actionTypes.EDIT_COSTUMER,
    payload,
  };
}
