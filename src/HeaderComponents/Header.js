import PropTypes from "prop-types";

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

Header.propTypes = {
  profilePhotoLink: PropTypes.string,
};

Header.defaultProps = {
  profilePhotoLink:
    "https://i.pinimg.com/236x/a0/4d/84/a04d849cf591c2f980548b982f461401.jpg",
};

export default Header;
