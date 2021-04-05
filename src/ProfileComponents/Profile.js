import ProfilePhoto from "./ProfilePhoto";
import ProfileData from "./ProfileData";
import PropTypes from "prop-types";

function Profile() {
  return (
    <div id="profile">
      <div id="profileContainer">
        <ProfilePhoto />
        <ProfileData />
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
