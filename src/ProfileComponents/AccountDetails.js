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

export default AccountDetails;
