import { Component } from "react";

class AccountDetails extends Component {
  render() {
    const { numberOfPosts, followers, following } = this.props;
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
}

export default AccountDetails;
