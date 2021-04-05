import PropTypes from "prop-types";
import { connect } from "react-redux";

function UserDetails(props) {
  const { username, designation, bio, websiteLink } = props;
  return (
    <div id="userDetails">
      <div id="username">
        <h3>{username}</h3>
      </div>
      <div id="designation">{designation}</div>
      <div id="bio">{bio}</div>
      <div id="website">
        <a href={websiteLink} id="websiteLink">
          {websiteLink}
        </a>
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  username: PropTypes.string,
  designation: PropTypes.string,
  bio: PropTypes.string,
  websiteLink: PropTypes.string,
};

UserDetails.defaultProps = {
  username: "",
  designation: "",
  bio: "",
  websiteLink: "'",
};

function mapStateToProps(state) {
  return {
    username: state.profileData.username,
    designation: state.profileData.designation,
    bio: state.profileData.bio,
    websiteLink: state.profileData.websiteLink,
  };
}

export default connect(mapStateToProps)(UserDetails);
