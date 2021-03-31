import { Component } from "react";

class Chat extends Component {
  componentDidMount() {
    document.title = "Chat - Instagram";
  }

  render() {
    return (
      <div id="profile">
        <div id="profileContainer">
          <h1>Chat</h1>
        </div>
      </div>
    );
  }
}
export default Chat;
