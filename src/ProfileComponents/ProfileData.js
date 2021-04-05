import Handle from "./HandleComponents/Handle";
import AccountDetails from "./AccountDetails";
import UserDetails from "./UserDetails";
import PropTypes from "prop-types";
import withToggleHandler from "./../withToggleHandler";
import { connect } from "react-redux";

function ProfileData(props) {
  const { isToggled, numberOfCounts, handleClick } = props;

  return (
    <div id="profileData">
      <Handle isFollowed={isToggled} handleFollowButtonClick={handleClick} />
      <AccountDetails followers={numberOfCounts} />
      <UserDetails />
    </div>
  );
}

ProfileData.propTypes = {
  handleName: PropTypes.string,
  numberOfPosts: PropTypes.number,
  following: PropTypes.number,
  username: PropTypes.string,
  designation: PropTypes.string,
  bio: PropTypes.string,
  websiteLink: PropTypes.string,
  isFollowed: PropTypes.bool,
  followers: PropTypes.number,
};

ProfileData.defaultProps = {
  handleName: "",
  numberOfPosts: 0,
  following: 0,
  username: "",
  designation: "",
  bio: "",
  websiteLink: "",
  isFollowed: false,
  followers: 0,
};

function mapStateToProps(state) {
  const { isFollowed, followers } = state.postReducer.profileData;
  return {
    isFollowed: isFollowed,
    followers: followers,
  };
}

export default connect(mapStateToProps)(
  withToggleHandler(ProfileData, (props) => {
    return {
      isToggled: props.isFollowed,
      numberOfCounts: props.followers,
    };
  })
);
