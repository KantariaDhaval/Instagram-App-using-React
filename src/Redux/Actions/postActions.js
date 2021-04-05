import { actionTypes } from "../../registry";

export const setData = (data) => {
  return {
    type: actionTypes.SET_DATA,
    payload: {
      data: data,
    },
  };
};
