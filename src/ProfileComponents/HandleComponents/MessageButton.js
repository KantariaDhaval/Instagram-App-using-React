import BaseButton from "../../BaseButton";

function MessageButton(props) {
  const { isFollowed } = props;
  return (
    <BaseButton
      classes={isFollowed ? "messageBtn" : "messageBtn hidden"}
      id="messageBtn"
      innerText="Message"
    />
  );
}

export default MessageButton;
