import PropTypes from "prop-types";

function PostVideo(props) {
  const { videoLink } = props;
  return (
    <video className="photo" controls>
      <source src={videoLink} />
      Video is not supported
    </video>
  );
}

PostVideo.propTypes = {
  videoLink: PropTypes.string,
};

PostVideo.defaultProps = {
  videoLink: "",
};

export default PostVideo;
