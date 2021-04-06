import { combineReducers } from "redux";
import profileData from "./profileData";
import posts from "./posts";
import menu from "./menu";

export default combineReducers({
  profileData,
  posts,
  menu,
});
