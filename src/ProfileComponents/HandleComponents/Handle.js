import HandleName from "./HandleName";
import FollowButton from "./FollowButton";
import MessageButton from "./MessageButton";
import DropdownButton from "./DropdownButton";
import PropTypes from "prop-types";

function Handle(props) {
  const { handleName, isFollowed, handleFollowButtonClick } = props;

  return (
    <div id="handle">
      <HandleName handleName={handleName} />
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
