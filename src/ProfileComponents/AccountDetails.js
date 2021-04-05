import PropTypes from "prop-types";
import { connect } from "react-redux";

function AccountDetails(props) {
  const { numberOfPosts, following } = props;
  const { followers } = props;

  const accountDetails = [
    {
      id: "numberOfPosts",
      innerText: "posts",
      valueOfCurrentDetail: numberOfPosts,
      key: 1,
    },
    {
      id: "followers",
      innerText: "followers",
      valueOfCurrentDetail: followers,
      key: 2,
    },
    {
      id: "following",
      innerText: "following",
      valueOfCurrentDetail: following,
      key: 3,
    },
  ];
  const accountDetailsElements = accountDetails.map((detail) => {
    return (
      <p className="accountDetailContainer" key={detail.key}>
        <span className="accountDetail" id={detail.id}>
          {detail.valueOfCurrentDetail}
        </span>
        {detail.innerText}
      </p>
    );
  });
  return <div id="accountDetails">{accountDetailsElements}</div>;
}

AccountDetails.propTypes = {
  numberOfPosts: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number,
};

AccountDetails.defaultProps = {
  numberOfPosts: 0,
  followers: 0,
  following: 0,
};

function mapStateToProps(state) {
  const { numberOfPosts, following } = state.postReducer.profileData;
  return {
    numberOfPosts: numberOfPosts,
    following: following,
  };
}

export default connect(mapStateToProps)(AccountDetails);
