import AddImage from "./AddImage";
import AddVideo from "./AddVideo";
import LikesAndComments from "./LikesAndComments";

function AddPost(props) {
  const {
    id,
    photoImageLink,
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
        <AddImage imageLink={photoImageLink} alt={alt} />
      ) : (
        <AddVideo videoLink={photoImageLink} alt={alt} />
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
