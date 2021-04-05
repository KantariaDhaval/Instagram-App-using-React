import HandleName from "./HandleName";
import FollowButton from "./FollowButton";
import MessageButton from "./MessageButton";
import DropdownButton from "./DropdownButton";
import PropTypes from "prop-types";

function Handle(props) {
  const { isFollowed, handleFollowButtonClick } = props;
  return (
    <div id="handle">
      <HandleName />
      <FollowButton
        isFollowed={isFollowed}
        handleClick={handleFollowButtonClick}
      />
      <MessageButton isFollowed={isFollowed} />
      <DropdownButton isFollowed={isFollowed} />
    </div>
  );
}

Handle.propTypes = {
  handleName: PropTypes.string,
  isFollowed: PropTypes.bool,
  handleFollowButtonClick: PropTypes.func,
};

Handle.defaultProps = {
  handleName: "",
  isFollowed: false,
  handleFollowButtonClick: () => {},
};

export default Handle;
