function ProfilePhoto(props) {
  const { profilePhotoLink } = props;
  return (
    <div id="profilePhoto">
      <img src={profilePhotoLink} id="profilePhotoImage" alt="Profile"></img>
    </div>
  );
}

export default ProfilePhoto;
