import { Component } from "react";
import Header from "./HeaderComponents/Header";
import Profile from "./ProfileComponents/Profile";
import Menu from "./MenuComponents/Menu";
import Posts from "./PostsComponents/Posts";
import Footer from "./FooterComponents/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "POSTS",
      profilePhotoLink:
        "https://i.pinimg.com/236x/a0/4d/84/a04d849cf591c2f980548b982f461401.jpg",
      loading: true,
      error: false,
    };
    this.changeCurrentTab = this.changeCurrentTab.bind(this);
  }

  componentDidMount() {
    fetch("./Data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          profilePhotoLink: data.profileData.profilePhotoLink,
          profileData: data.profileData,
          postsData: data.postsData,
          igtvData: data.igtvData,
          savedData: data.savedData,
          taggedData: data.taggedData,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: true,
        });
        console.log("Error: ", err);
      });
  }

  changeCurrentTab(event) {
    if (event.target.dataset.menu_tab) {
      this.setState({
        currentTab: event.target.dataset.menu_tab_name,
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    if (this.state.error) {
      return <h1>Some error occured...</h1>;
    }
    return (
      <div>
        <Header profilePhotoLink={this.state.profilePhotoLink} />
        <Profile profileData={this.state.profileData} />
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
      </div>
    );
  }
}

export default App;
