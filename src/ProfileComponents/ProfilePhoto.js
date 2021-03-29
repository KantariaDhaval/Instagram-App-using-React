function ProfilePhoto(props) {
  const profilePhotoIcon = document.getElementById("profilePhotoIcon");

  const { profilePhotoLink } = props;
  profilePhotoIcon.src = profilePhotoLink;
  return (
    <div id="profilePhoto">
      <img src={profilePhotoLink} id="profilePhotoImage" alt="Profile"></img>
    </div>
  );
}

export default ProfilePhoto;
