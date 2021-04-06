import BaseButton from "../../BaseButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleFollow } from "../../Redux/Reducers/profileData";

function FollowButton() {
  const dispatch = useDispatch();
  const { isFollowed } = useSelector((state) => state.profileData);

  function handleClick() {
    dispatch(toggleFollow());
  }
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
