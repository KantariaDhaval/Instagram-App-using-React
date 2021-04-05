import PropTypes from "prop-types";
import { connect } from "react-redux";

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

function mapStateToProps(state) {
  const { handleName } = state.postReducer.profileData;
  return {
    handleName: handleName,
  };
}

export default connect(mapStateToProps)(HandleName);
