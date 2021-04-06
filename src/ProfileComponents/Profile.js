import ProfilePhoto from "./ProfilePhoto";
import ProfileData from "./ProfileData";

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

export default Profile;
