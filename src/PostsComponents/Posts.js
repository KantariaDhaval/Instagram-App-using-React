import { Component } from "react";
import PostsContainer from "./PostsContainer";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    fetch("./../Data.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          postsData: data.postsData,
          igtvData: data.igtvData,
          savedData: data.savedData,
          taggedData: data.taggedData,
          loading: false,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <div id="postsWrapper">
          <div class="photos">
            <h1>Loading...</h1>
          </div>
        </div>
      );
    }
    return (
      <div id="postsWrapper">
        <PostsContainer
          data={this.state.postsData}
          name="POSTS"
          currentTab={this.props.currentTab}
        />
        <PostsContainer
          data={this.state.igtvData}
          name="IGTV"
          currentTab={this.props.currentTab}
        />
        <PostsContainer
          data={this.state.savedData}
          name="SAVED"
          currentTab={this.props.currentTab}
        />
        <PostsContainer
          data={this.state.taggedData}
          name="TAGGED"
          currentTab={this.props.currentTab}
        />
      </div>
    );
  }
}

export default Posts;
