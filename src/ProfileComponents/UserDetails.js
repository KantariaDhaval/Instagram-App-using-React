import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function UserDetails() {
  const { username, designation, bio, websiteLink } = useSelector(
    (state) => state.profileData
  );
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

export default UserDetails;
