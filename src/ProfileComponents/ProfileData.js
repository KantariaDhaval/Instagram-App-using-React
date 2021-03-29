import Handle from "./Handle";
import AccountDetails from "./AccountDetails";
import UserDetails from "./UserDetails";

function ProfileData(props) {
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
  } = props.profileData;

  return (
    <div id="profileData">
      <Handle handleName={handleName} isFollowed={isFollowed} />
      <AccountDetails
        numberOfPosts={numberOfPosts}
        followers={followers}
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

export default ProfileData;
