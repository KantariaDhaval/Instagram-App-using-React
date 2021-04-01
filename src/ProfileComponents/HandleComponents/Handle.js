import HandleName from "./HandleName";
import FollowButton from "./FollowButton";
import MessageButton from "./MessageButton";
import DropdownButton from "./DropdownButton";

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

export default Handle;
