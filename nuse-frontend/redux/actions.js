export const actionTypes = {
  FAILURE: 'FAILURE',
  LOADING: 'LOADING',
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
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