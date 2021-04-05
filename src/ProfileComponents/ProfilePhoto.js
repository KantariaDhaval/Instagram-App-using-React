import PropTypes from "prop-types";
import { connect } from "react-redux";

function ProfilePhoto(props) {
  const { profilePhotoLink } = props;
  return (
    <div id="profilePhoto">
      <img src={profilePhotoLink} id="profilePhotoImage" alt="Profile"></img>
    </div>
  );
}

ProfilePhoto.propTypes = {
  profilePhotoLink: PropTypes.string,
};

ProfilePhoto.defaultProps = {
  profilePhotoLink:
    "https://i.pinimg.com/236x/a0/4d/84/a04d849cf591c2f980548b982f461401.jpg",
};

function mapStateToProps(state) {
  return {
    profilePhotoLink: state.profileData.profilePhotoLink,
  };
}

export default connect(mapStateToProps)(ProfilePhoto);
