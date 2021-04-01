import PropTypes from "prop-types";

function BaseButton(props) {
  const { classes, id, onClick, innerText, menuTabName, menuTab } = props;
  return (
    <button
      className={classes}
      id={id}
      onClick={onClick}
      data-menu_tab_name={menuTabName}
      data-menu_tab={menuTab}
    >
      {innerText}
    </button>
  );
}

BaseButton.propTypes = {
  classes: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  innerText: PropTypes.string,
  menuTabName: PropTypes.string,
  menuTab: PropTypes.string,
};

BaseButton.defaultProps = {
  classes: "",
  id: "",
  onClick: () => {},
  innerText: "",
  menuTab: "",
  menuTabName: "",
};

export default BaseButton;
