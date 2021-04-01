import PropTypes from "prop-types";

function PostImage(props) {
  const { imageLink, alt } = props;
  return <img className="photo" src={imageLink} alt={alt} />;
}

PostImage.propTypes = {
  imageLink: PropTypes.string,
  alt: PropTypes.string,
};

PostImage.defaultProps = {
  imageLink: "",
  alt: "",
};

export default PostImage;
