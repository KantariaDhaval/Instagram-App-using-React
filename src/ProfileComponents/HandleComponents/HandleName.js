import PropTypes from "prop-types";

function HandleName(props) {
  const { handleName } = props;
  return <div id="handleName">{handleName}</div>;
}

HandleName.propTypes = {
  handleName: PropTypes.string,
};

HandleName.defaultProps = {
  handleName: "",
};

export default HandleName;
