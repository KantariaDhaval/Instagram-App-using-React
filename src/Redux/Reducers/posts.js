import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsData: [],
  igtvData: [],
  savedData: [],
  taggedData: [],
};

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsData: (state, action) => {
      const { postsData, igtvData, savedData, taggedData } = action.payload;

      state.postsData = postsData;
      state.igtvData = igtvData;
      state.savedData = savedData;
      state.taggedData = taggedData;
    },
  },
});

export const { setPostsData } = posts.actions;

export default posts.reducer;
