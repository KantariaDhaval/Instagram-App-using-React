import { Component } from "react";
import PropTypes from "prop-types";

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: this.props.isLiked,
      numberOfLikes: this.props.numberOfLikes,
    };
    this.handleLikeButtonClick = this.handleLikeButtonClick.bind(this);
  }

  handleLikeButtonClick() {
    this.setState((prevState) => {
      return {
        isLiked: !prevState.isLiked,
        numberOfLikes: prevState.isLiked
          ? prevState.numberOfLikes - 1
          : prevState.numberOfLikes + 1,
      };
    });
  }

  render() {
    const { id, dataType } = this.props;
    return (
      <button
        className="photoHoverBtn likeBtn"
        id={`likeBtn` + dataType + id}
        data-index={id}
        data-btntype="likeOrCommentBtn"
        onClick={this.handleLikeButtonClick}
      >
        <i
          className={
            this.state.isLiked
              ? "photoHoverIcon fas fa-heart activeLikeIcon"
              : "photoHoverIcon fas fa-heart"
          }
          data-btntype="likeIcon"
        ></i>
        <span className="numberOfCounts">{this.state.numberOfLikes}</span>
      </button>
    );
  }
}

LikeButton.propTypes = {
  isLiked: PropTypes.bool,
  numberOfLikes: PropTypes.number,
  id: PropTypes.number,
  dataType: PropTypes.string,
};

LikeButton.defaultProps = {
  isLiked: false,
  numberOfLikes: 0,
  id: 0,
  dataType: "",
};

export default LikeButton;
