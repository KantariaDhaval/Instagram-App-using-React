import PropTypes from "prop-types";

function OtherDetails(props) {
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

OtherDetails.propTypes = {
  username: PropTypes.string,
  designation: PropTypes.string,
  bio: PropTypes.string,
  websiteLink: PropTypes.string,
};

OtherDetails.defaultProps = {
  username: "",
  designation: "",
  bio: "",
  websiteLink: "'",
};

export default OtherDetails;
