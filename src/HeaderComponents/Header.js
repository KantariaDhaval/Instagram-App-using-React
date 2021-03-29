function Header(props) {
  return (
    <div id="header">
      <div id="headerContainer">
        <h2 id="appName">Instagram</h2>
        <input type="text" id="search" placeholder="&#xF002; Search" />
        <div id="pages">
          <button className="pageIcon" id="homePage">
            <i className="fas fa-home"></i>
          </button>
          <button className="pageIcon" id="chatPage">
            <i className="fab fa-facebook-messenger"></i>
          </button>
          <button className="pageIcon" id="searchPage">
            <i className="far fa-compass"></i>
          </button>
          <button className="pageIcon" id="likePage">
            <i className="far fa-heart"></i>
          </button>
          <button className="pageIcon" id="profilePage">
            <img
              src={props.profilePhotoLink}
              alt="Profile"
              id="profilePhotoIcon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
