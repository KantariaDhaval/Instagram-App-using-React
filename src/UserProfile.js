import { Component } from "react";

class UserProfile extends Component {
  componentDidMount() {
    document.title = "User Profile - Instagram";
  }

  render() {
    return (
      <div id="profile">
        <div id="profileContainer">
          <h1>User Profile</h1>
        </div>
      </div>
    );
  }
}

export default UserProfile;
