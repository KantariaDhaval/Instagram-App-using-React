import { tabNames } from "../../registry";

const initialState = {
  currentTab: tabNames.POSTS,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_TAB": {
      const { currentTab } = action.payload;
      state = {
        ...state,
        currentTab: currentTab,
      };
      break;
    }
    default:
      break;
  }
  return state;
};

export { menuReducer };
