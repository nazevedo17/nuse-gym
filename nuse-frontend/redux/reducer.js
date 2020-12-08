import { actionTypes } from './actions';

const initialState = {
  error: false,
  loading: false,
  user: {},
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
      console.log(action.data);
      return {
        ...state,
        ...{ user: action.data },
      };

    default:
      return state;
  }
}

export default reducer;
