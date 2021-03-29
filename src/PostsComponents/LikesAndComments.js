import CommentButton from "./CommentButton";
import LikeButton from "./LikeButton";

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

export default LikesAndComments;
