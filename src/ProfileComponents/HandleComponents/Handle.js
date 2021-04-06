import HandleName from "./HandleName";
import FollowButton from "./FollowButton";
import MessageButton from "./MessageButton";
import DropdownButton from "./DropdownButton";

function Handle() {
  return (
    <div id="handle">
      <HandleName />
      <FollowButton />
      <MessageButton />
      <DropdownButton />
    </div>
  );
}

export default Handle;
