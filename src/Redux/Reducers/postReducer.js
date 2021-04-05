import { actionTypes } from "../../registry";

const initialState = {
  profileData: [],
  postsData: [],
  igtvData: [],
  savedData: [],
  taggedData: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA: {
      const { data } = action.payload;
      state = {
        ...state,
        profileData: data.profileData,
        postsData: data.postsData,
        igtvData: data.igtvData,
        savedData: data.savedData,
        taggedData: data.taggedData,
      };
      break;
    }
    default:
      break;
  }
  return state;
};

export { postReducer };
