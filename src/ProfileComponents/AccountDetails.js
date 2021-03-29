function AccountDetails(props) {
  const { numberOfPosts, followers, following } = props;
  return (
    <div id="accountDetails">
      <p className="accountDetailContainer">
        <span className="accountDetail" id="numberOfPosts">
          {numberOfPosts}
        </span>
        posts
      </p>
      <p className="accountDetailContainer">
        <span className="accountDetail" id="followers">
          {followers}
        </span>
        followers
      </p>
      <p className="accountDetailContainer">
        <span className="accountDetail" id="following">
          {following}
        </span>
        following
      </p>
    </div>
  );
}

export default AccountDetails;
