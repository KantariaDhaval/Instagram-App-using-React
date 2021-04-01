import PropTypes from "prop-types";

function AccountDetails(props) {
  const { numberOfPosts, followers, following } = props;
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

export default AccountDetails;
