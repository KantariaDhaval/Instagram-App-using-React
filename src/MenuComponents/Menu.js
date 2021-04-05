import { Component } from "react";
import MenuTab from "./MenuTab";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { menuTabs } from "./menuTabs";
import { setCurrentTab } from "../Redux/Actions/menuActions";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.changeCurrentTab = this.changeCurrentTab.bind(this);
  }

  changeCurrentTab(event) {
    if (event.target.dataset.menu_tab) {
      this.props.setCurrentTab(event.target.dataset.menu_tab_name);
    }
  }

  render() {
    const { currentTab } = this.props;

    const menuTabElements = menuTabs.map((menuTab) => {
      return (
        <MenuTab
          key={menuTab.key}
          currentTab={currentTab}
          innerText={menuTab.innerText}
          iconClasses={menuTab.iconClasses}
          menuTabName={menuTab.menuTabName}
        />
      );
    });

    return (
      <div id="menu">
        <div id="menuContainer" onClick={this.changeCurrentTab}>
          {menuTabElements}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  changeCurrentTab: PropTypes.func,
  currentTab: PropTypes.string,
};

Menu.defaultProps = {
  changeCurrentTab: () => {},
  currentTab: "POSTS",
};

function mapStateToProps(state) {
  const { currentTab } = state.menuReducer;
  return {
    currentTab: currentTab,
  };
}

export default connect(mapStateToProps, { setCurrentTab })(Menu);
