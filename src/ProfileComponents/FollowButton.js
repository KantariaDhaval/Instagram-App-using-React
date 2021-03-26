function FollowButton(props) {
  return (
    <button
      className={props.isFollowed ? "followBtn activeFollowBtn" : "followBtn"}
      id="folloBtn"
      data-btntype="followBtn"
      onClick={props.handleClick}
    >
      {props.isFollowed ? "Unfollow" : "Follow"}
    </button>
  );
}

export default FollowButton;
