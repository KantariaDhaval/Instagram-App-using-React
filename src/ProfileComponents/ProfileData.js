import { Component } from "react";
import Handle from "./Handle";
import AccountDetails from "./AccountDetails";
import OtherDetails from "./OtherDetails";

class ProfileData extends Component {
  render() {
    const {
      handleName,
      numberOfPosts,
      followers,
      following,
      username,
      designation,
      bio,
      websiteLink,
      isFollowed,
    } = this.props.data;

    return (
      <div id="profileData">
        <Handle handleName={handleName} isFollowed={isFollowed} />
        <AccountDetails
          numberOfPosts={numberOfPosts}
          followers={followers}
          following={following}
        />
        <OtherDetails
          username={username}
          designation={designation}
          bio={bio}
          websiteLink={websiteLink}
        />
      </div>
    );
  }
}

export default ProfileData;
