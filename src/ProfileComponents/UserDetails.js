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

export default OtherDetails;
