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
    };
    this.changeCurrentTab = this.changeCurrentTab.bind(this);
  }

  changeCurrentTab(event) {
    if (event.target.dataset.menutab === "true") {
      this.setState({
        currentTab: event.target.dataset.btntype,
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Profile />
        <Menu
          currentTab={this.state.currentTab}
          changeCurrentTab={this.changeCurrentTab}
        />
        <Posts currentTab={this.state.currentTab} />
        <Footer />
      </div>
    );
  }
}

export default App;