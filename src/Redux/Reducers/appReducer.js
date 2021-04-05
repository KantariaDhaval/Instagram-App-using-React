import { actionTypes } from "../../registry";

const initialState = {
  loading: true,
  error: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING: {
      const { loading } = action.payload;
      state = {
        ...state,
        loading: loading,
      };
      break;
    }
    case actionTypes.SET_ERROR: {
      const { loading, error } = action.payload;
      state = {
        ...state,
        loading: loading,
        error: error,
      };
      break;
    }
    default:
      break;
  }
  return state;
};

export { appReducer };
