import BaseButton from "../../BaseButton";
import PropTypes from "prop-types";

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

MessageButton.propTypes = {
  isFollowed: PropTypes.bool,
};

MessageButton.defaultProps = {
  isFollowed: false,
};

export default MessageButton;
