import BaseButton from "../../BaseButton";
import PropTypes from "prop-types";

function DropdownButton(props) {
  const { isFollowed } = props;
  return (
    <BaseButton
      classes={isFollowed ? "dropdownBtn activeFollowBtn" : "dropdownBtn"}
      id="dropdownBtn"
      innerText={<i className="fas fa-caret-down"></i>}
    />
  );
}

DropdownButton.propTypes = {
  isFollowed: PropTypes.bool,
};

DropdownButton.defaultProps = {
  isFollowed: false,
};

export default DropdownButton;
