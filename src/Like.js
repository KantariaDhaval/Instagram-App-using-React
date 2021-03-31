import { Component } from "react";

class Like extends Component {
  componentDidMount() {
    document.title = "Like - Instagram";
  }

  render() {
    return (
      <div id="profile">
        <div id="profileContainer">
          <h1>Like</h1>
        </div>
      </div>
    );
  }
}

export default Like;
