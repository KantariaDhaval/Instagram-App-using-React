import { Component } from "react";
import MenuTab from "./MenuTab";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { menuTabs } from "./menuTabs";

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
  return {
    currentTab: state.currentTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentTab: (currentTab) => {
      dispatch({
        type: "SET_CURRENT_TAB",
        payload: {
          currentTab: currentTab,
        },
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
