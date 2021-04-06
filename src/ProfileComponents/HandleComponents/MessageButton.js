import BaseButton from "../../BaseButton";
import { useSelector } from "react-redux";

function MessageButton() {
  const { isFollowed } = useSelector((state) => state.profileData);
  return (
    <BaseButton
      classes={isFollowed ? "messageBtn" : "messageBtn hidden"}
      id="messageBtn"
      innerText="Message"
    />
  );
}

export default MessageButton;
