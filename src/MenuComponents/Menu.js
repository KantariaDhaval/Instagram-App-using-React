import { Component } from "react";
import MenuTab from "./MenuTab";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentTab: "POSTS",
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(event) {
  //   if (event.target.dataset.menutab === "true") {
  //     this.setState({
  //       currentTab: event.target.dataset.btntype,
  //     });
  //   }
  // }

  render() {
    return (
      <div id="menu">
        <div id="menuContainer" onClick={this.props.changeCurrentTab}>
          <MenuTab
            currentTab={this.props.currentTab}
            tabName="POSTS"
            iconClasses="fas fa-th menuIcon"
            btnType="POSTS"
          />
          <MenuTab
            currentTab={this.props.currentTab}
            tabName="IGTV"
            iconClasses="fas fa-tv menuIcon"
            btnType="IGTV"
          />
          <MenuTab
            currentTab={this.props.currentTab}
            tabName="SAVED"
            iconClasses="far fa-bookmark  menuIcon"
            btnType="SAVED"
          />
          <MenuTab
            currentTab={this.props.currentTab}
            tabName="TAGGED"
            iconClasses="far fa-id-badge  menuIcon"
            btnType="TAGGED"
          />
        </div>
      </div>
    );
  }
}

export default Menu;
