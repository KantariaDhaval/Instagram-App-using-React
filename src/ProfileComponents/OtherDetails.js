import { Component } from "react";

class OtherDetails extends Component {
  render() {
    const { username, designation, bio, websiteLink } = this.props;
    return (
      <div id="otherDetails">
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
}

export default OtherDetails;
