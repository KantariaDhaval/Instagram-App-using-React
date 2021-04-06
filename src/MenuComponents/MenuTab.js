import BaseButton from "./../BaseButton";
import PropTypes from "prop-types";

function MenuTab(props) {
  const { currentTab, innerText, iconClasses, menuTabName } = props;
  return (
    <BaseButton
      classes={currentTab === menuTabName ? "menuPage active" : "menuPage"}
      menuTabName={menuTabName}
      menuTab={true}
      innerText={
        <>
          <i className={iconClasses}></i> {innerText}
        </>
      }
    />
  );
}

MenuTab.propTypes = {
  currentTab: PropTypes.string,
  innerText: PropTypes.string,
  iconClasses: PropTypes.string,
  menuTabName: PropTypes.string,
};

MenuTab.defaultProps = {
  currentTab: "POSTS",
  innerText: "POSTS",
  iconClasses: "fas fa-th menuIcon",
  menuTabName: "POSTS",
};

export default MenuTab;
