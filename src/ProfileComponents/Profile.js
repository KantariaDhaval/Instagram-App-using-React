import { Component } from "react";
import ProfilePhoto from "./ProfilePhoto";
import ProfileData from "./ProfileData";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      profilePhotoLink:
        "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aWNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      profileData: {},
    };
  }

  componentDidMount() {
    fetch("./../Data.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          profilePhotoLink: data.profileData.profilePhotoLink,
          profileData: data.profileData,
          loading: false,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <div id="profile">
          <div id="profileContainer">
            <h1>Loading...</h1>
          </div>
        </div>
      );
    }
    return (
      <div id="profile">
        <div id="profileContainer">
          <ProfilePhoto profilePhotoLink={this.state.profilePhotoLink} />
          <ProfileData profileData={this.state.profileData} />
        </div>
      </div>
    );
  }
}
export default Profile;
