function AddVideo(props) {
  return (
    <video className="photo" controls>
      <source src={props.videoLink} />
      Video is not supported
    </video>
  );
}

export default AddVideo;
