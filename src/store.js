import { createStore } from "redux";
import { tabNames } from "./registry";

const initialState = {
  loading: true,
  error: false,
  currentTab: tabNames.POSTS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS_IN_DATA_FETCHING": {
      const { loading, data } = action.payload;
      state = {
        ...state,
        loading: loading,
        profileData: data.profileData,
        postsData: data.postsData,
        igtvData: data.igtvData,
        savedData: data.savedData,
        taggedData: data.taggedData,
      };
      break;
    }
    case "ERROR_IN_FETCHING_DATA": {
      const { loading, error } = action.payload;
      state = {
        ...state,
        loading: loading,
        error: error,
      };
      break;
    }
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

const store = createStore(reducer);

export { store };
