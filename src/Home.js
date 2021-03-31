import React, { Component, Fragment } from "react";
import Profile from "./ProfileComponents/Profile";
import Menu from "./MenuComponents/Menu";
import Posts from "./PostsComponents/Posts";
import Footer from "./FooterComponents/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "POSTS",
      profilePhotoLink:
        "https://i.pinimg.com/236x/a0/4d/84/a04d849cf591c2f980548b982f461401.jpg",
      loading: true,
    };
    this.handleFollowButtonClick = this.handleFollowButtonClick.bind(this);
    this.changeCurrentTab = this.changeCurrentTab.bind(this);
  }

  componentDidMount() {
    document.title = "Home - Instagram";
    fetch("./Data.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          profilePhotoLink: data.profileData.profilePhotoLink,
          profileData: data.profileData,
          postsData: data.postsData,
          igtvData: data.igtvData,
          savedData: data.savedData,
          taggedData: data.taggedData,
          loading: false,
        });
      });
  }

  handleFollowButtonClick() {
    let newProfileData = this.state.profileData;
    newProfileData.isFollowed = !this.state.profileData.isFollowed;
    newProfileData.followers = this.state.profileData.isFollowed
      ? newProfileData.followers + 1
      : newProfileData.followers - 1;
    this.setState({
      profileData: newProfileData,
    });
  }

  changeCurrentTab(event) {
    if (event.target.dataset.menutab === "true") {
      this.setState({
        currentTab: event.target.dataset.btntype,
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <Fragment>
        <Profile
          profileData={this.state.profileData}
          handleFollowButtonClick={this.handleFollowButtonClick}
        />
        <Menu
          currentTab={this.state.currentTab}
          changeCurrentTab={this.changeCurrentTab}
        />
        <Posts
          currentTab={this.state.currentTab}
          postsData={this.state.postsData}
          igtvData={this.state.igtvData}
          savedData={this.state.savedData}
          taggedData={this.state.taggedData}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
