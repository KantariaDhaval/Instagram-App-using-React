import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";
import Like from "./Like";
import Search from "./Search";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <div id="header">
        <div id="headerContainer">
          <Link to="/" id="appName">
            Instagram
          </Link>
          <input type="text" id="search" placeholder="&#xF002; Search" />
          <div id="pages">
            <Link to="/">
              <button className="pageIcon" id="homePage">
                <i className="fas fa-home"></i>
              </button>
            </Link>
            <Link to="/chat">
              <button className="pageIcon" id="chatPage">
                <i className="fab fa-facebook-messenger"></i>
              </button>
            </Link>
            <Link to="/search">
              <button className="pageIcon" id="searchPage">
                <i className="far fa-compass"></i>
              </button>
            </Link>
            <Link to="like">
              <button className="pageIcon" id="likePage">
                <i className="far fa-heart"></i>
              </button>
            </Link>
            <Link to="profile">
              <button className="pageIcon" id="profilePage">
                <img
                  src="https://i.pinimg.com/236x/a0/4d/84/a04d849cf591c2f980548b982f461401.jpg"
                  alt="Profile"
                  id="profilePhotoIcon"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/like">
          <Like />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
