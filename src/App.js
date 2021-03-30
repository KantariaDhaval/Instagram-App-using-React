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
    };
    this.changeCurrentTab = this.changeCurrentTab.bind(this);
  }

  componentDidMount() {
    fetch("./Data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
