import Handle from "./HandleComponents/Handle";
import AccountDetails from "./AccountDetails";
import UserDetails from "./UserDetails";
import { Component } from "react";
import PropTypes from "prop-types";

class ProfileData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowed: this.props.profileData.isFollowed,
      followers: this.props.profileData.followers,
    };
    this.handleFollowButtonClick = this.handleFollowButtonClick.bind(this);
  }

  handleFollowButtonClick() {
    this.setState((prevState) => {
      return {
        isFollowed: !prevState.isFollowed,
        followers: prevState.isFollowed
          ? prevState.followers - 1
          : prevState.followers + 1,
      };
    });
  }

  render() {
    const {
      handleName,
      numberOfPosts,
      following,
      username,
      designation,
      bio,
      websiteLink,
    } = this.props.profileData;

    return (
      <div id="profileData">
        <Handle
          handleName={handleName}
          isFollowed={this.state.isFollowed}
          handleFollowButtonClick={this.handleFollowButtonClick}
        />
        <AccountDetails
          numberOfPosts={numberOfPosts}
          followers={this.state.followers}
          following={following}
        />
        <UserDetails
          username={username}
          designation={designation}
          bio={bio}
          websiteLink={websiteLink}
        />
      </div>
    );
  }
}

ProfileData.propTypes = {
  profileData: PropTypes.object,
};

ProfileData.defaultProps = {
  profileData: {
    handleName: "",
    numberOfPosts: 0,
    following: 0,
    username: 0,
    designation: "",
    bio: "",
    websiteLink: "",
    isFollowed: false,
    followers: 0,
  },
};

export default ProfileData;
