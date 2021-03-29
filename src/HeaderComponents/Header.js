function Header() {
  return (
    <div id="header">
      <div id="headerContainer">
        <h2 id="appName">Instagram</h2>
        <input type="text" id="search" placeholder="&#xF002; Search" />
        <div id="pages">
          <button className="pageIcon" id="homePage">
            <i class="fas fa-home"></i>
          </button>
          <button className="pageIcon" id="chatPage">
            <i class="fab fa-facebook-messenger"></i>
          </button>
          <button className="pageIcon" id="searchPage">
            <i class="far fa-compass"></i>
          </button>
          <button className="pageIcon" id="likePage">
            <i class="far fa-heart"></i>
          </button>
          <button className="pageIcon" id="profilePage">
            <img
              src="https://i.pinimg.com/236x/a0/4d/84/a04d849cf591c2f980548b982f461401.jpg"
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
