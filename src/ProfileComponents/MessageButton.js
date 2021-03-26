function MessageButton(props) {
  return (
    <button
      className={props.isFollowed ? "messageBtn" : "messageBtn hidden"}
      id="messageBtn"
    >
      Message
    </button>
  );
}

export default MessageButton;
