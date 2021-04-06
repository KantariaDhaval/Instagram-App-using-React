import { createSlice } from "@reduxjs/toolkit";
import { tabNames } from "../../registry";
const initialState = {
  currentTab: tabNames.POSTS,
};

const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setCurrentTab: (state, action) => {
      const currentTab = action.payload;

      state.currentTab = currentTab;
    },
  },
});

export const { setCurrentTab } = menu.actions;

export default menu.reducer;
