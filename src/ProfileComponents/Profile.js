import ProfilePhoto from "./ProfilePhoto";
import ProfileData from "./ProfileData";
import PropTypes from "prop-types";

function Profile(props) {
  const {
    profilePhotoLink,
    handleName,
    numberOfPosts,
    following,
    username,
    designation,
    bio,
    websiteLink,
    isFollowed,
    followers,
  } = props.profileData;

  return (
    <div id="profile">
      <div id="profileContainer">
        <ProfilePhoto profilePhotoLink={profilePhotoLink} />
        <ProfileData
          handleName={handleName}
          numberOfPosts={numberOfPosts}
          following={following}
          username={username}
          designation={designation}
          bio={bio}
          websiteLink={websiteLink}
          isFollowed={isFollowed}
          followers={followers}
        />
      </div>
    </div>
  );
}

Profile.propTypes = {
  profileData: PropTypes.object,
};

Profile.defaultProps = {
  profileData: {},
};

export default Profile;
