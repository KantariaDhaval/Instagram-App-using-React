import { actionTypes } from "../../registry";

export const setCurrentTab = (currentTab) => {
  return {
    type: actionTypes.SET_CURRENT_TAB,
    payload: {
      currentTab: currentTab,
    },
  };
};
