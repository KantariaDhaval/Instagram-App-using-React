import PostImage from "./PostImage";
import PostVideo from "./PostVideo";
import LikesAndComments from "./LikesAndComments";
import PropTypes from "prop-types";

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

AddPost.propTypes = {
  id: PropTypes.number,
  postLink: PropTypes.string,
  alt: PropTypes.string,
  numberOfLikes: PropTypes.number,
  numberOfComments: PropTypes.number,
  postType: PropTypes.string,
  dataType: PropTypes.string,
  isLiked: PropTypes.bool,
  isCommented: PropTypes.bool,
};

AddPost.defaultProps = {
  id: 0,
  postLink: "",
  alt: "",
  numberOfLikes: 0,
  numberOfComments: 0,
  postType: "",
  dataType: "",
  isLiked: false,
  isCommented: false,
};

export default AddPost;
