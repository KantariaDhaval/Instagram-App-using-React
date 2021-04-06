import BaseButton from "../../BaseButton";
import { useSelector } from "react-redux";

function DropdownButton() {
  const { isFollowed } = useSelector((state) => state.profileData);
  return (
    <BaseButton
      classes={isFollowed ? "dropdownBtn activeFollowBtn" : "dropdownBtn"}
      id="dropdownBtn"
      innerText={<i className="fas fa-caret-down"></i>}
    />
  );
}

export default DropdownButton;
