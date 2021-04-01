import CommentButton from "./CommentButton";
import LikeButton from "./LikeButton";
import PropTypes from "prop-types";

function LikesAndComments(props) {
  const {
    id,
    numberOfLikes,
    numberOfComments,
    dataType,
    isLiked,
    isCommented,
  } = props;
  return (
    <div className="likesAndComments">
      <LikeButton
        id={id}
        numberOfLikes={numberOfLikes}
        isLiked={isLiked}
        dataType={dataType}
      />
      <CommentButton
        id={id}
        numberOfComments={numberOfComments}
        isCommented={isCommented}
        dataType={dataType}
      />
    </div>
  );
}

LikesAndComments.propTypes = {
  id: PropTypes.number,
  numberOfLikes: PropTypes.number,
  numberOfComments: PropTypes.number,
  dataType: PropTypes.string,
  isLiked: PropTypes.bool,
  isCommented: PropTypes.bool,
};

LikesAndComments.defaultProps = {
  id: 0,
  numberOfLikes: 0,
  numberOfComments: 0,
  dataType: "",
  isLiked: false,
  isCommented: false,
};

export default LikesAndComments;
