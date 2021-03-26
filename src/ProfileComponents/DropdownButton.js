function DropdownButton(props) {
  return (
    <button
      className={
        props.isFollowed ? "dropdownBtn activeFollowBtn" : "dropdownBtn"
      }
      id="dropdownBtn"
    >
      <i className="fas fa-caret-down"></i>
    </button>
  );
}

export default DropdownButton;
