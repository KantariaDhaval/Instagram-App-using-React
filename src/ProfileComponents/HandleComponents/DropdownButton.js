import BaseButton from "../../BaseButton";

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

export default DropdownButton;
