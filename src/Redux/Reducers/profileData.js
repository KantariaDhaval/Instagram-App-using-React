import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profilePhotoLink:
    "https://i.pinimg.com/236x/a0/4d/84/a04d849cf591c2f980548b982f461401.jpg",
  alt: "",
  handleName: "",
  numberOfPosts: 0,
  followers: 0,
  following: 0,
  username: "",
  designation: "",
  bio: "",
  websiteLink: "",
  isFollowed: false,
};

const profileData = createSlice({
  name: "profileData",
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      const {
        profilePhotoLink,
        alt,
        handleName,
        numberOfPosts,
        followers,
        following,
        username,
        designation,
        bio,
        websiteLink,
        isFollowed,
      } = action.payload;

      state.profilePhotoLink = profilePhotoLink;
      state.alt = alt;
      state.handleName = handleName;
      state.numberOfPosts = numberOfPosts;
      state.followers = followers;
      state.following = following;
      state.username = username;
      state.designation = designation;
      state.bio = bio;
      state.websiteLink = websiteLink;
      state.isFollowed = isFollowed;
    },
    toggleFollow: (state, action) => {
      state.followers = state.isFollowed
        ? state.followers - 1
        : state.followers + 1;
      state.isFollowed = !state.isFollowed;
    },
  },
});

export const { setProfileData, toggleFollow } = profileData.actions;

export default profileData.reducer;
