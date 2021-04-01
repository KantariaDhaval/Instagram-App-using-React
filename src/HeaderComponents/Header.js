function Header(props) {
  const { profilePhotoLink } = props;
  return (
    <div id="header">
      <div id="headerContainer">
        <h2 id="appName">Instagram</h2>
        <input type="text" id="search" placeholder="&#xF002; Search" />
        <div className="pages">
          <button className="pageBtn">
            <i className="fas fa-home pageIcon"></i>
          </button>
          <button className="pageBtn">
            <i className="fab fa-facebook-messenger pageIcon"></i>
          </button>
          <button className="pageBtn">
            <i className="far fa-compass pageIcon"></i>
          </button>
          <button className="pageBtn">
            <i className="far fa-heart pageIcon"></i>
          </button>
          <button className="pageBtn">
            <img src={profilePhotoLink} id="accountPic" alt="Profile" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
