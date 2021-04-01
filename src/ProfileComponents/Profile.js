import ProfilePhoto from "./ProfilePhoto";
import ProfileData from "./ProfileData";
import PropTypes from "prop-types";

function Profile(props) {
  const { profileData } = props;
  return (
    <div id="profile">
      <div id="profileContainer">
        <ProfilePhoto profilePhotoLink={profileData.profilePhotoLink} />
        <ProfileData profileData={profileData} />
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
