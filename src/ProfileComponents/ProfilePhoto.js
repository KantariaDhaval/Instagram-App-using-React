import { useSelector } from "react-redux";

function ProfilePhoto() {
  const { profilePhotoLink } = useSelector((state) => state.profileData);
  return (
    <div id="profilePhoto">
      <img src={profilePhotoLink} id="profilePhotoImage" alt="Profile"></img>
    </div>
  );
}

export default ProfilePhoto;
