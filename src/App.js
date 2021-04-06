import { useState, useEffect } from "react";
import Header from "./HeaderComponents/Header";
import Profile from "./ProfileComponents/Profile";
import Menu from "./MenuComponents/Menu";
import Posts from "./PostsComponents/Posts";
import Footer from "./FooterComponents/Footer";

import { setProfileData } from "./Redux/Reducers/profileData";
import { setPostsData } from "./Redux/Reducers/posts";
import { useDispatch } from "react-redux";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("./Data.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProfileData(data.profileData));
        dispatch(setPostsData(data));
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>Some error occured...</h1>;
  } else {
    return (
      <div>
        <Header />
        <Profile />
        <Menu />
        <Posts />
        <Footer />
      </div>
    );
  }
};

export default App;
