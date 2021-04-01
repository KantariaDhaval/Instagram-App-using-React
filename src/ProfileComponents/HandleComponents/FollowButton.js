import BaseButton from "../../BaseButton";
import PropTypes from "prop-types";

function FollowButton(props) {
  const { isFollowed, handleClick } = props;
  return (
    <BaseButton
      classes={isFollowed ? "followBtn activeFollowBtn" : "followBtn"}
      id="followBtn"
      onClick={handleClick}
      innerText={isFollowed ? "Unfollow" : "Follow"}
    />
  );
}

FollowButton.propTypes = {
  isFollowed: PropTypes.bool,
  handleClick: PropTypes.func,
};

FollowButton.defaultProps = {
  isFollowed: false,
  handleClick: () => {},
};

export default FollowButton;
