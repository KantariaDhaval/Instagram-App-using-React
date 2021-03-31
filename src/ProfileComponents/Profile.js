import ProfilePhoto from "./ProfilePhoto";
import ProfileData from "./ProfileData";

function Profile(props) {
  const { profileData, handleFollowButtonClick } = props;
  return (
    <div id="profile">
      <div id="profileContainer">
        <ProfilePhoto profilePhotoLink={profileData.profilePhotoLink} />
        <ProfileData
          profileData={profileData}
          handleFollowButtonClick={handleFollowButtonClick}
        />
      </div>
    </div>
  );
}
export default Profile;
