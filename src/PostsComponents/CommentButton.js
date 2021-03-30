import { Component } from "react";

class CommentButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommented: this.props.isCommented,
      numberOfComments: this.props.numberOfComments,
    };
    this.handleCommentButtonClick = this.handleCommentButtonClick.bind(this);
  }

  handleCommentButtonClick() {
    this.setState((prevState) => {
      return {
        isCommented: !prevState.isCommented,
        numberOfComments: prevState.isCommented
          ? prevState.numberOfComments - 1
          : prevState.numberOfComments + 1,
      };
    });
  }

  render() {
    const { id, dataType } = this.props;
    return (
      <button
        className="photoHoverBtn commentBtn"
        id={`commentBtn` + dataType + id}
        data-index={id}
        data-btntype="likeOrCommentBtn"
        onClick={this.handleCommentButtonClick}
      >
        <i
          className={
            this.state.isCommented
              ? "photoHoverIcon fas fa-comment activeCommentIcon"
              : "photoHoverIcon fas fa-comment"
          }
          data-btntype="commentIcon"
        ></i>
        <span className="numberOfCounts">{this.state.numberOfComments}</span>
      </button>
    );
  }
}

export default CommentButton;
