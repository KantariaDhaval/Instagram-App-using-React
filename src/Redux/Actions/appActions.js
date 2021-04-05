import { actionTypes } from "../../registry";

export const setLoading = (loading) => {
  return {
    type: actionTypes.SET_LOADING,
    payload: {
      loading: loading,
    },
  };
};

export const setError = (loading, error) => {
  return {
    type: actionTypes.SET_ERROR,
    payload: {
      loading: loading,
      error: error,
    },
  };
};
