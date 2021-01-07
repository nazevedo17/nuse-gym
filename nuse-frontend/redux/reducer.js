import { actionTypes } from './actions';

const initialState = {
  error: false,
  loading: false,
  user: {},
  costumers: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.LOADING:
      return {
        ...state,
        ...{ loading: action.loadingValue },
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...{ user: action.data },
      };

    case actionTypes.GET_COSTUMERS_SUCCESS:
      return {
        ...state,
        ...{ costumers: action.data },
      };

    case actionTypes.LOGOUT:
      return initialState;

    default:
      return state;
  }
}

export default reducer;
