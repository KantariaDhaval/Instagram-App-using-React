function FollowButton(props) {
  return (
    <button
      className={props.isFollowed ? "followBtn activeFollowBtn" : "followBtn"}
      id="folloBtn"
      onClick={props.handleClick}
    >
      {props.isFollowed ? "Unfollow" : "Follow"}
    </button>
  );
}

export default FollowButton;
