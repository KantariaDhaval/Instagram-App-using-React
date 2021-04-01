import BaseButton from "../../BaseButton";

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

export default FollowButton;
