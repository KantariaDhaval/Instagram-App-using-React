import ProfilePhoto from "./ProfilePhoto";
import ProfileData from "./ProfileData";

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
export default Profile;
