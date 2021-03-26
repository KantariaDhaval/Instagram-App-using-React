import { Component } from "react";

class ProfilePhoto extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const profilePhotoIcon = document.getElementById("profilePhotoIcon");

    const { profilePhotoLink } = this.props;
    profilePhotoIcon.src = profilePhotoLink;
    return (
      <div id="profilePhoto">
        <img src={profilePhotoLink} id="profilePhotoImage" alt="Profile"></img>
      </div>
    );
  }
}

export default ProfilePhoto;
