import { Component } from "react";
import HandleName from "./HandleName";
import FollowButton from "./FollowButton";
import MessageButton from "./MessageButton";
import DropdownButton from "./DropdownButton";

class Handle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowed: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      isFollowed: this.props.isFollowed,
    });
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isFollowed: !prevState.isFollowed,
      };
    });
  }

  render() {
    const { handleName } = this.props;

    return (
      <div id="handle">
        <HandleName handleName={handleName} />
        <FollowButton
          isFollowed={this.state.isFollowed}
          handleClick={this.handleClick}
        />
        <MessageButton isFollowed={this.state.isFollowed} />
        <DropdownButton isFollowed={this.state.isFollowed} />
      </div>
    );
  }
}

export default Handle;
