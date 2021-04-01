import PostImage from "./PostImage";
import PostVideo from "./PostVideo";
import LikesAndComments from "./LikesAndComments";

function AddPost(props) {
  const {
    id,
    postLink,
    alt,
    numberOfLikes,
    numberOfComments,
    postType,
    dataType,
    isLiked,
    isCommented,
  } = props.post;

  return (
    <div className="photoImage">
      {postType === "Image" ? (
        <PostImage imageLink={postLink} alt={alt} />
      ) : (
        <PostVideo videoLink={postLink} alt={alt} />
      )}
      <LikesAndComments
        id={id}
        dataType={dataType}
        numberOfLikes={numberOfLikes}
        numberOfComments={numberOfComments}
        isLiked={isLiked}
        isCommented={isCommented}
      />
    </div>
  );
}

export default AddPost;
