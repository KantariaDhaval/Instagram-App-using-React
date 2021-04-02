import Handle from "./HandleComponents/Handle";
import AccountDetails from "./AccountDetails";
import UserDetails from "./UserDetails";
import PropTypes from "prop-types";
import withToggleHandler from "./../withToggleHandler";

function ProfileData(props) {
  const {
    handleName,
    numberOfPosts,
    following,
    username,
    designation,
    bio,
    websiteLink,
    isToggled,
    numberOfCounts,
    handleClick,
  } = props;

  return (
    <div id="profileData">
      <Handle
        handleName={handleName}
        isFollowed={isToggled}
        handleFollowButtonClick={handleClick}
      />
      <AccountDetails
        numberOfPosts={numberOfPosts}
        followers={numberOfCounts}
        following={following}
      />
      <UserDetails
        username={username}
        designation={designation}
        bio={bio}
        websiteLink={websiteLink}
      />
    </div>
  );
}

ProfileData.propTypes = {
  handleName: PropTypes.string,
  numberOfPosts: PropTypes.number,
  following: PropTypes.number,
  username: PropTypes.string,
  designation: PropTypes.string,
  bio: PropTypes.string,
  websiteLink: PropTypes.string,
  isFollowed: PropTypes.bool,
  followers: PropTypes.number,
};

ProfileData.defaultProps = {
  handleName: "",
  numberOfPosts: 0,
  following: 0,
  username: "",
  designation: "",
  bio: "",
  websiteLink: "",
  isFollowed: false,
  followers: 0,
};

export default withToggleHandler(ProfileData, (props) => {
  return {
    isToggled: props.isFollowed,
    numberOfCounts: props.followers,
  };
});
